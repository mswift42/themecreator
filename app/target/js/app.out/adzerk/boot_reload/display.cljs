(ns adzerk.boot-reload.display
  (:require [clojure.string :as string]
            [goog.Timer :as timer]
            [goog.dom :as dom]
            [goog.events :as events]
            [adzerk.boot-reload.connection :refer [send-message!]])
  (:import [goog.events EventType]))

(def transition-duration 250)

(def cljs-logo
  "<svg width='40px' height='40px' viewBox='0 0 438 438' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <!-- Generator: Sketch 3.3.3 (12072) - http://www.bohemiancoding.com/sketch -->
    <circle fill='#FFFFFF' cx='219' cy='219' r='219'></circle>
    <g transform='translate(20.000000, 21.000000)'>
        <g transform='translate(69.000000, 131.000000)'>
            <path fill='#96CA4B' d='M39,119.6 C26.3,119.6 16.7,115.9 10.1,108.5 C3.5,101.1 0.2,90.5 0.2,76.7 C0.2,62.6 3.6,51.8 10.5,44.2 C17.4,36.6 27.3,32.8 40.4,32.8 C49.2,32.8 57.2,34.4 64.2,37.7 L58.8,52 C51.3,49.1 45.1,47.6 40.2,47.6 C25.7,47.6 18.5,57.2 18.5,76.4 C18.5,85.8 20.3,92.8 23.9,97.6 C27.5,102.3 32.8,104.7 39.8,104.7 C47.7,104.7 55.2,102.7 62.3,98.8 L62.3,114.3 C59.1,116.2 55.7,117.5 52.1,118.3 C48.5,119.2 44.1,119.6 39,119.6 L39,119.6 Z'></path>
            <path fill='#96CA4B' d='M111.4,118.1 L93.6,118.1 L93.6,0.3 L111.4,0.3 L111.4,118.1 L111.4,118.1 Z'></path>
            <path fill='#5F7FBF' d='M139.9,155.3 C134.6,155.3 130.1,154.7 126.6,153.4 L126.6,139.3 C130,140.2 133.5,140.7 137.1,140.7 C144.7,140.7 148.5,136.4 148.5,127.8 L148.5,34.3 L166.3,34.3 L166.3,129 C166.3,137.6 164,144.2 159.5,148.6 C154.9,153.1 148.4,155.3 139.9,155.3 L139.9,155.3 Z M147.4,12.2 C147.4,9 148.3,6.6 150,4.9 C151.7,3.2 154.2,2.3 157.5,2.3 C160.6,2.3 163.1,3.2 164.8,4.9 C166.5,6.6 167.4,9.1 167.4,12.2 C167.4,15.2 166.5,17.6 164.8,19.4 C163.1,21.1 160.6,22 157.5,22 C154.3,22 151.8,21.1 150,19.4 C148.2,17.6 147.4,15.2 147.4,12.2 L147.4,12.2 Z'></path>
            <path fill='#5F7FBF' d='M259.5,94.3 C259.5,102.5 256.5,108.7 250.6,113.1 C244.6,117.5 236.1,119.6 225,119.6 C213.8,119.6 204.9,117.9 198.1,114.5 L198.1,99.1 C207.9,103.6 217.1,105.9 225.6,105.9 C236.5,105.9 242,102.6 242,96 C242,93.9 241.4,92.1 240.2,90.7 C239,89.3 237,87.8 234.2,86.3 C231.4,84.8 227.6,83.1 222.6,81.2 C213,77.5 206.4,73.7 203,70 C199.6,66.3 197.9,61.4 197.9,55.5 C197.9,48.3 200.8,42.8 206.6,38.8 C212.4,34.8 220.2,32.9 230.2,32.9 C240,32.9 249.3,34.9 258.1,38.9 L252.3,52.3 C243.3,48.6 235.7,46.7 229.5,46.7 C220.1,46.7 215.4,49.4 215.4,54.7 C215.4,57.3 216.6,59.5 219.1,61.4 C221.5,63.2 226.9,65.7 235.1,68.9 C242,71.6 247,74 250.2,76.2 C253.3,78.4 255.6,81 257.2,83.9 C258.7,86.7 259.5,90.2 259.5,94.3 L259.5,94.3 Z'></path>
        </g>
        <path stroke='#96CA4B' stroke-width='6' fill='#96CA4B' d='M183,376.7 C91.8,368.6 20,291.7 20,198.4 C20,105.1 91.8,28.3 183,20.2 L183,0.1 C80.7,8.3 0,94.1 0,198.5 C0,302.9 80.7,388.7 183,396.9 L183,376.7 L183,376.7 Z'></path>
        <path stroke='#5F7FBF' stroke-width='6' fill='#5F7FBF' d='M215,0.1 L215,20.2 C306.2,28.3 378,105.2 378,198.5 C378,291.8 306.2,368.7 215,376.8 L215,396.9 C317.3,388.7 398,302.9 398,198.5 C398,94.1 317.3,8.3 215,0.1 L215,0.1 Z'></path>
    </g>
  </svg>")

(defn ->css [rules]
  (if-not (even? (count rules))
    (js/console.log (pr-str rules)))
  (assert (even? (count rules)))
  (let [rules (partition 2 rules)
        render-rule (fn [[attr v]] (str (name attr) ":" v ";"))]
    (apply str (map render-rule rules))))

(defn mk-node
  ([type] (mk-node type {} nil))
  ([type attrs] (mk-node type attrs nil))
  ([type attrs content]
   (dom/createDom (name type)
                  (clj->js (update attrs :style ->css))
                  (clj->js content))))

(defn style [& types]
  (let [s {:logo      [:width "40px" :height "40px"]
           :flex      [:display "-webkit-box" :display "-webkit-flex" :display "-ms-flexbox" :display "flex"]
           :flex-c    [:-webkit-box-align "center" :-webkit-align-items "center" :-ms-flex-align "center" :align-items "center"]
           :bg-red    [:background-color "rgba(255, 161, 161, 0.952941)"
                       :box-shadow "rgb(170, 170, 170) 0px 0px 1px"]
           :bg-yellow [:background-color "rgba(255, 220, 110, 0.952941)"
                       :box-shadow "rgb(170, 170, 170) 0px 0px 1px"]
           :bg-clear  [:background-color "none"]
           :mr10      [:margin-right "10px"]
           :pad       [:padding "12px"]
           :container [:color "black"
                       :max-height "320px"
                       :overflow "scroll"
                       :transition (str transition-duration "ms")
                       :font-family "sans-serif"
                       :position "fixed"
                       :left "0px"
                       :right "0px"
                       :bottom "0px"]
           :hide      [:opacity "0"
                       :bottom "-100px"]}]
    {:style (apply concat (map s types))}))

(defn open-file [data]
  (send-message! (merge {:type :open-file}
                        (select-keys data [:file :line :column]))))

(defn exception-node [{:keys [message line file] :as data}]
  (doto (mk-node :div nil message)
    (events/listen EventType.CLICK #(open-file data))))

(defn warning-node [{:keys [message line file] :as data}]
  (doto (mk-node :div nil
                 [(mk-node :span (style :mr10) message)
                  (mk-node :span (style :mr10) (str "at line " line))
                  (mk-node :span (style :mr10) file)])
    (events/listen EventType.CLICK #(open-file data))))

(defn reloaded-node []
  (mk-node :div nil nil))

(defn warnings-node [warnings]
  (mk-node :div nil (map warning-node warnings)))

(defn construct-hud-node [{:keys [warnings exception] :as messages}]
  (doto (mk-node :div (style :pad :flex :flex-c (cond exception      :bg-red
                                                      (seq warnings) :bg-yellow
                                                      :else          :bg-clear)))
    (dom/append (mk-node :div (style :logo :mr10) (dom/htmlToDocumentFragment cljs-logo)))
    (dom/append (cond exception      (exception-node exception)
                      (seq warnings) (warnings-node warnings)
                      :else          (reloaded-node)))))

(defn remove-container! [id]
  (let [el (dom/getElement id)]
    (dom/setProperties el (clj->js (update (style :container :hide) :style ->css)))
    (timer/callOnce #(dom/removeNode el) transition-duration)))

(defn insert-container! [id {:keys [warnings exception] :as messages}]
  (let [hud      (construct-hud-node messages)
        el       (mk-node :div (merge (style :container :hide) {:id id}) hud)
        show!    #(dom/setProperties el (clj->js (update (style :container) :style ->css)))
        no-prob? (and (not exception) (not (seq warnings)))
        hide!    #(dom/setProperties el (clj->js (update (style :container :hide) :style ->css)))]
    (dom/appendChild js/document.body el)
    (timer/callOnce show! transition-duration)
    (when no-prob?
      (timer/callOnce hide! (* transition-duration 5)))))

(defn gen-id []
  (str "boot-reload-hud-" (name (gensym))))

(defonce current-container (atom nil))

(defn display [messages opts]
  (swap! current-container
         (fn [container]
           (when container
             (try (remove-container! container)
                  (catch js/Error _)))
           (let [id (gen-id)]
             (insert-container! id messages)
             id))))
