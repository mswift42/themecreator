(ns cljs-test-display.core
  (:require
   [cljs.test :refer [report inc-report-counter!
                      testing-contexts-str
                      testing-vars-str
                      get-current-env]
    :include-macros true]
   [clojure.string :as string]
   [goog.dom :as gdom]
   [goog.dom.classlist :as classlist]
   [goog.events :as events]
   [goog.events.EventType :as evtype]
   [goog.events.KeyCodes :as key-codes]
   [cljs-test-display.favicon :as favicon]
   [cljs-test-display.notify :as notify])
  (:require-macros
   [cljs-test-display.core :refer [css]]))

;; ------------------------------------------------------------
;; State Management
;; ------------------------------------------------------------

;; root-node-id specifies the id of the dom element to mount the
;; testing application to
(goog-define root-node-id "app")

;; change-favicon specifies wether to change the favicon to red or
;; green when tests complete
(goog-define change-favicon true)

;; notifications specifies wether to use the Web Notification API to
;; to provide feedback about test results
(goog-define notifications true)

;; printing specifies wether to print out test results in the console
;; as well
(goog-define printing false)

(defonce state (atom {}))

(defn root-app-node [] (gdom/getElement root-node-id))

(defn push-node! [node]
  (swap! state update :current-node (fnil conj (list)) node))

(defn pop-node! []
  (swap! state update :current-node rest))

(defn initialize-state! []
  (reset! state {})
  (push-node! (root-app-node)))

(defn current-node []
  (first (get @state :current-node)))

(defn current-node-parent []
  (second (get @state :current-node)))

(defn next-error-count []
  (:error-count (swap! state update :error-count (fnil inc 0))))

(declare add-header-node! click-toggle n)

(defonce register-document-events!
  (memoize
   (fn []
     (events/listen (gdom/getDocument)
                    evtype/KEYDOWN
                    (fn [e]
                      (when (= (.-keyCode e) key-codes/P)
                        (click-toggle e)))))))

(let [style-string (css)]
  (defn insert-style! []
    (when-not (gdom/getElement "cljs-test-display-style")
      (let [node (n :style
                    {:id "cljs-test-display-style"}
                    style-string)
            head (aget (gdom/getElementsByTagName "head") 0)]
        (gdom/appendChild head node)))))

#_ (insert-style!)

;; ------------------------------------------------------------
;; DOM Node Creation
;; ------------------------------------------------------------

(defn n [tag attributes & contents]
  (apply gdom/createDom (name tag) (clj->js attributes)
         (mapv
          (fn [x]
            (cond
              (instance? js/HTMLElement x)
              x
              (or (string? x) (symbol? x))
              (gdom/createTextNode (str x))
              :else
              (gdom/createTextNode (pr-str x))))
          (filter some? contents))))

(defn magic-keyword->attrs [k]
  (if (keyword? k)
    (let [classes (string/split (name k) ".")
          [id classes] (if (string/starts-with? (first classes) "#")
                         [(subs (first classes) 1) (rest classes)]
                         [nil classes])]
      (cond-> {}
        id (assoc :id id)
        (not-empty classes) (assoc :class (string/join " " classes))))
    {}))

(defn tag-fn [tag]
  (fn [klass & contents]
    (let [[klass contents] (if (keyword? klass)
                             [klass contents]
                             [nil (cons klass contents)])]
      (apply n tag (magic-keyword->attrs klass) contents))))

(def div (tag-fn :div))
(def span (tag-fn :span))

(defn code
  ([code-str] (code nil code-str))
  ([klass code-str]
   (n :pre (magic-keyword->attrs klass)
      (n :code {} (pr-str code-str)))))

;; ------------------------------------------------------------
;; Data Helpers
;; ------------------------------------------------------------

(defn current-var-info []
  (let [var (first (reverse (:testing-vars (get-current-env))))]
    (meta var)))

(defn process-file-name [{:keys [ns file]}]
  (string/join "/"
               (reverse
                (take (inc (count (string/split (name ns) #"\.")))
                      (reverse (string/split file  #"[/\\]"))))))

(defn failed? [m]
  (not (zero? (+ (:fail m) (:error m)))))

(defn pluralize [s n]
  (if (= n 1) s (str s "s")))

;; ------------------------------------------------------------
;; DOM Templates
;; ------------------------------------------------------------

;; ------------------------------------------------------------
;; Header

(defn click-toggle [e]
  (classlist/toggle (root-app-node) "hide-passing"))

(defn header-node []
  (div :#report-header
     (div :container.report-body 
          (div :page-title
               (n :img
                  {:width 50
                   :height 50
                   :src "https://clojurescript.org/images/cljs-logo-120b.png"})
               (div :test-title "Test Run"))
          (div :#summary))))

(defn add-header-node! []
  (gdom/appendChild (root-app-node) (header-node))
  (gdom/appendChild (root-app-node)
                    (div :controls.container
                     (n :button {:id "hide-show"
                                 :onclick
                                 click-toggle}
                        "Hide/Show Passing"))))

;; ------------------------------------------------------------
;; Failure

(defn contexts-node []
  (when (seq (:testing-contexts (get-current-env)))
    (div :contexts (testing-contexts-str))))

(defn comparison [{:keys [actual expected]}]
  (div 
   (code expected)
   (div :actual (div :arrow "▶") (code actual))))

(defn add-fail-node! [m]
  (let [formatter-fn (or (:formatter (get-current-env)) pr-str)
        node (div :test-fail
                  (contexts-node)
                  (div :fail-body
                       (when-let [message (:message m)]
                         (div :test-message message))
                       (comparison m)))
        curr-node (current-node)]
    (classlist/add curr-node "has-failures")
    (classlist/add (current-node-parent) "has-failures")
    (gdom/appendChild curr-node node)))

;; ------------------------------------------------------------
;; Error

(defn error-comparison [{:keys [expected actual]}]
  (div
   (code expected)
   (div :cljs-test-actual
        (span :error-prefix "Error: ")
        (when actual
          (span :error-message (.-message actual)))
        (when actual
          (let [error-number (next-error-count)]
            (js/console.log "CLJS Test Error #" error-number)
            (js/console.error actual)
            (div :view-stacktrace
                 (str "For stacktrace: See error number " error-number " in console")))))))

(defn add-error-node! [m]
  (let [formatter-fn (or (:formatter (get-current-env)) pr-str)
        node (div :test-fail.test-error
                  (contexts-node)
                  (div :fail-body
                       (when-let [message (:message m)]
                         (div :test-message message))
                       (error-comparison m)))
        curr-node (current-node)]
    (classlist/add curr-node "has-errors")
    (classlist/add (current-node-parent) "has-errors")
    (gdom/appendChild curr-node node)))

;; ------------------------------------------------------------
;; Passing

(defn add-passing-node! [m]
  (gdom/appendChild (current-node) (div :test-passing)))

;; ------------------------------------------------------------
;; NS

(defn add-ns-node! [m]
  (let [curr-node (current-node)
        new-current-node
        (div :container.test-ns
           (n :h2 {} (:ns m)))]
    (swap! state update :current-node #(cons new-current-node %))
    (gdom/appendChild
     curr-node
     new-current-node)))

;; ------------------------------------------------------------
;; Var

(defn add-var-node [m]
  (let [curr-node (current-node)
        {:keys [name line file] :as info} (current-var-info)
        node
        (div :test-var
             (div :var-header
                  (str "/" name)
                  (when line
                    (div :test-var-line (if file
                                          (process-file-name info)
                                          "line") ":"
                         (n :span {} line)))))]
    (swap! state update :current-node #(cons node %))
    (gdom/appendChild curr-node node)))

;; ------------------------------------------------------------
;; Summary

(defn summary [{:keys [fail error pass test] :as m}]
  (div :summary-body
       (when (not (zero? fail))
         (div :report-number (str fail (pluralize " failure" fail))))
       (when (not (zero? error))
         (div :report-number (str error (pluralize " error" error))))
       (when-not (failed? m)
         (div :report-number "All Tests Passed"))
       (div :total-tests
            (div "Totals")
            (div :test-counts
                 (div (str test (pluralize " Test" test)))
                 (let [assertions (+ pass fail error)]
                   (div (str assertions (pluralize " Assertion" assertions))))))))

(defn display-summary! [m]
  (let [report-header (gdom/getElement "report-header")
        summary-node' (gdom/getElement "summary")]
    (classlist/add report-header (if (failed? m)
                                   "tests-fail"
                                   "tests-succeed"))
    (gdom/removeChildren summary-node')
    (gdom/appendChild summary-node' (summary m))))

;; ------------------------------------------------------------
;; Hooking into cljs.test/report
;; ------------------------------------------------------------

(defn print-comparison [m]
  (let [formatter-fn (or (:formatter (get-current-env)) pr-str)]
    (println "expected:" (formatter-fn (:expected m)))
    (println "  actual:" (formatter-fn (:actual m)))))

(defmethod report [::default :pass] [m]
  (add-passing-node! m)
  (inc-report-counter! :pass))

;; namespace start and end

(defmethod report [::default :begin-test-ns] [m]
  (add-ns-node! m)
  (when printing
    (println "\nTesting" (name (:ns m)))))

(defmethod report [::default :end-test-ns] [m]
  (swap! state update :current-node rest))

;; var start and end

(defmethod report [::default :begin-test-var] [m]
  (add-var-node m))

(defmethod report [::default :end-test-var] [m]
  (swap! state update :current-node rest))

;; failure and errors

(defmethod report [::default :fail] [m]
  (add-fail-node! m)
  (inc-report-counter! :fail)
  (when printing
    (println "\nFAIL in" (testing-vars-str m))
    (when (seq (:testing-contexts (get-current-env)))
      (println (testing-contexts-str)))
    (when-let [message (:message m)] (println message))
    (print-comparison m)))

(defmethod report [::default :error] [m]
  (inc-report-counter! :error)
  (println "\nERROR in" (testing-vars-str m))
  (when (seq (:testing-contexts (get-current-env)))
    (println (testing-contexts-str)))
  (when-let [message (:message m)] (println message))
  (print-comparison m)
  ;; display AFTER so that error shows up in console after the printed error
  (add-error-node! m))

;; Ignore these but keep them as a reference
#_(defmethod report [::default :end-run-tests] [m])
#_(defmethod report [::default :end-test-all-vars] [m])
#_(defmethod report [::default :end-test-vars] [m])

;; summary

(defmethod report [::default :summary] [m]
  (when change-favicon
    (if (failed? m)
      (favicon/red)
      (favicon/green)))
  (when notifications
    (if (failed? m)
      (notify/failure m)
      (notify/success)))  
  (display-summary! m)
  (gdom/appendChild (root-app-node)
                    (div :footer
                         (div :container
                              (div :tip
                                   "Hit the "
                                   (span :control-key "P")
                                   " key to toggle the display of passing tests."))))
  (when printing
    (println "\nRan" (:test m) "tests containing"
             (+ (:pass m) (:fail m) (:error m)) "assertions.")
    (println (:fail m) "failures," (:error m) "errors.")))

;; ------------------------------------------------------------
;; Main API
;; ------------------------------------------------------------

(defn empty-env []
  (assoc (cljs.test/empty-env) :reporter ::default))

(defn init!
  "This function initializes the environment for a test run. It must
  be called before every test run.

  As a convenience it returns a cljs.test/empty-env initialized so
  that the test run will use the cljs-test-display formatter.

  This function takes an optional single argument: the id of the DOM
  node to mount.  It defaults to \"app\"

  Example Usage:

  (cljs.test/run-tests (cljs-test-display/init! \"app\")
                       'example.core-test
                       'example.core-other-test)"
  ([] (init! nil))
  ([app-node-id]
   (if (nil? goog/global.document) ;; if not in HTML env ingore display
     (cljs.test/empty-env)
     (do
       (when app-node-id
         (assert (or (string? app-node-id)
                     (symbol? app-node-id)
                     (keyword? app-node-id))
                 "Must provide an something we can call cljs.core/name on.")
         (set! root-node-id (name app-node-id)))
       (assert (gdom/getElement (name root-node-id))
               (str "cljs-test-display: Element with id "
                    (pr-str root-node-id)
                    " does not exist."))
       (when notifications (notify/ask-permission!))
       (insert-style!)
       (register-document-events!)
       (set! (.-innerHTML (root-app-node)) "")
       (add-header-node!)
       (initialize-state!)
       (empty-env)))))
