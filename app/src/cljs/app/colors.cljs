(ns app.colors
  (:require [goog.color :as color]
            [app.db :as db]))

(defn darken
  "darken darkens a rgb color by a given factor.
   if no factor is provided, the color will be darkened 
   with the factor of 0.2."
  ([colorstring] (darken colorstring 0.2))
  ([colorstring factor]
   (color/rgbArrayToHex
    (color/darken (color/hexToRgb colorstring) factor))))

(defn lighten
  "lighten lightens a rgb color by a given factor.
   If no factor is provided, the color will be lightened
   with the factor of 0.2."
  ([colorstring] (lighten colorstring 0.2))
  ([colorstring factor]
   (color/rgbArrayToHex
    (color/lighten (color/hexToRgb colorstring) factor))))


(defn dark-bg?
  "dark-bg? returns true if the given hex color is 'dark'"
  [color]
  (let [[r g b] (color/hexToRgb color)]
    (> (- 1 (/ (+ (* 0.299 r)
                  (* 0.587 g)
                  (* 0.114 b))
               255))
       0.5)))

(defn lighten-color-in-db [color]
  (swap! db/app-db assoc color (lighten (color @db/app-db) 0.03)))

(defn darken-color-in-db [color]
  (swap! db/app-db assoc color (darken (color @db/app-db) 0.03)))

(defn inc-contrast []
  (if (dark-bg? (:mainbg @db/app-db))
    (if @db/adjustbg
      (do
        (doseq [i db/contrastcolors]
          (lighten-color-in-db i))
        (darken-color-in-db :mainbg))
      (doseq [i db/contrastcolors]
        (lighten-color-in-db i)))
    (if @db/adjustbg
      (do
        (doseq [i db/contrastcolors]
          (darken-color-in-db i))
        (lighten-color-in-db :mainbg))
      (doseq [i db/contrastcolors]
        (darken-color-in-db i)))))

(defn red-contrast []
  (if (dark-bg? (:mainbg @db/app-db))
    (if @db/adjustbg
      (do
        (doseq [i db/contrastcolors]
          (darken-color-in-db i))
        (lighten-color-in-db :mainbg))
      (doseq [i db/contrastcolors]
        (darken-color-in-db i)))
    (if @db/adjustbg
      (do
        (doseq [i db/contrastcolors]
          (lighten-color-in-db i))
        (darken-color-in-db :mainbg))
      (doseq [i db/contrastcolors]
        (lighten-color-in-db i)))))

(defn random-hue
  "return a random int between 0 and 360 "
  []
  (rand-int 360))
