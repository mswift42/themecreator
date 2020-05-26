(ns cljs-test-display.favicon
  (:require
   [clojure.string :as string]
   [goog.object :as gobj]
   [goog.dom :as gdom]))

(goog-define link-id "cljs-test-favicon")

(defn html-collection->seq [html-coll]
  (map #(.item html-coll %) (range (.-length html-coll))))

(defn find-existing-link []
  (first
   (filter
    (fn [l]
      (when-let [rel (.-rel l)]
        (some #(= "icon" %) (string/split rel #"\s"))))
    (html-collection->seq (gdom/getElementsByTagName "link")))))

(defn init-link! [l]
  (set! (.-id l) link-id)
  (set! (.-rel l) "shortcut icon")
  (set! (.-type l) "image/png")
  (set! (.-href l) "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2NMS0v7z0ABYBw1gGE0DBhGwwCYh4ZBOgAAcQUjIUXh8RYAAAAASUVORK5CYII="))

(defn get-or-create! []
  (if-let [favicon (gdom/getElement link-id)]
    favicon
    (if-let [favicon (find-existing-link)]
      (do (init-link! favicon)
          favicon)
      (let [favicon (gdom/createDom "link")]
        (init-link! favicon)
        (-> (gdom/getDocument)
            (gobj/get "head")
            (gdom/appendChild favicon))
        favicon))))

(defn color-data-url [color size]
  (let [cvs (gdom/createDom "canvas" #js {:width size :height size})]
    (let [ctx (.getContext cvs "2d")]
      (set! (.-fillStyle ctx) color)
      (.fillRect ctx 0 0 size size))
    (.toDataURL cvs)))

(defn change-to-color [color]
  (set! (.-href (get-or-create!)) (color-data-url color 16)))

(defn green [] (change-to-color "#0d0"))

(defn red [] (change-to-color "#d00"))
