(ns adzerk.boot-reload.reload
  (:require
   [clojure.string          :as string]
   [goog.Uri                :as guri]
   [goog.async.DeferredList :as deferred-list]
   [goog.net.jsloader       :as jsloader]))

(def ^:private page-uri (goog.Uri. (.. js/window -location -href)))

(defn- ends-with? [s pat]
  (= pat (subs s (- (count s) (count pat)))))

(defn- reload-page! []
  (.reload (.-location js/window)))

(defn- normalize-href-or-uri [href-or-uri]
  (let [uri  (goog.Uri. href-or-uri)]
    (.getPath (.resolve page-uri uri))))

(defn- changed-href? [href-or-uri changed]
  (when href-or-uri
    (let [path (normalize-href-or-uri href-or-uri)]
      (when (not-empty (filter #(ends-with? (normalize-href-or-uri %) path) changed))
        (guri/parse path)))))

(defn- reload-css [changed]
  (let [sheets (.. js/document -styleSheets)]
    (doseq [s (range 0 (.-length sheets))]
      (when-let [sheet (aget sheets s)]
        (when-let [href-uri (changed-href? (.-href sheet) changed)]
          (set! (.. sheet -ownerNode -href) (.toString (.makeUnique href-uri))))))))

(defn- reload-img [changed]
  (let [images (.. js/document -images)]
    (doseq [s (range 0 (.-length images))]
      (when-let [image (aget images s)]
        (when-let [href-uri (changed-href? (.-src image) changed)]
          (set! (.-src image) (.toString (.makeUnique href-uri))))))))

(defn- reload-js [changed {:keys [on-jsload]
                           :or {on-jsload identity}}]
  (let [js-files (filter #(ends-with? % ".js") changed)]
    (when (seq js-files)
      (-> #(-> % guri/parse .makeUnique jsloader/load)
        (map js-files)
        clj->js
        deferred-list/gatherResults
        (.addCallbacks
          (fn [& _] (on-jsload))
          (fn [e] (.error js/console "Load failed:" (.-message e)))))
      (when (aget js/window "jQuery")
        (.trigger (js/jQuery js/document) "page-load")))))

(defn- reload-html [changed]
  (let [page-path (.getPath page-uri)
        html-path (if (ends-with? page-path "/")
                    (str page-path "index.html")
                    page-path)]
    (when (changed-href? html-path changed) (reload-page!))))

(defn- group-log [title things-to-log]
  (.groupCollapsed js/console title)
  (doseq [t things-to-log] (.log js/console t))
  (.groupEnd js/console))

(defn reload [changed opts]
  (group-log "Reload" changed)
  (doto changed
    (reload-js opts)
    reload-html
    reload-css
    reload-img))
