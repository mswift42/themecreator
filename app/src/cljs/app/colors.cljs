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

(defn hue-range
  "hue-range returns a vecor of equidistant huevalues."
  [length startvalue]
  (let [distance (Math/floor (/ 360 length))]
    (take length (iterate #(+ % (mod distance 360)) startvalue))))

(defn color-list
  "color-list returns a vector of 7 hex-colors with the same 
   saturation and lightness values and equidistant hue values."
  [saturation lightness]
  (let [hr (hue-range (count db/randomcolors) (random-hue))]
    (mapv #(color/hslToHex % saturation lightness) hr)))

(defn soft-palette
  "soft-palette returns a vector of 7 random soft colors."
  []
  (color-list 0.37 0.71))

(defn warm-palette
  "warm-palette returns a vector of 7 random warm colors." 
  []
  (color-list 0.37, 0.53))

(defn pop-palette
  "pop-palette returns a vector of 7 random 'pop' colors."
  []
  (color-list 0.92 0.23))

(defn muted-palette
  "muted-palette returns a vector of 7 random muted colors."
  []
  (color-list 0.22 0.60))


(defn set-random-palette
  "set :keyword :builtin :string :functionname :variable
   :type and constant colors in app-db to colors of a
   random color palette"
  [palette]
  (doseq [[colorname colorstring] (map list db/randomcolors palette)]
    (swap! db/app-db assoc colorname colorstring)))


(defn derive-colors-from-theme
  "return a theme map with additional lighter/darker 
   variants of the background and foreground colors."
  [theme]
  (if (dark-bg? (:mainbg theme))
    (assoc theme
           :fg2 (darken (:mainfg theme)0.08)
           :fg3 (darken (:mainfg theme) 0.16)
           :fg4 (darken (:mainfg theme) 0.24)
           :bg2 (lighten (:mainbg theme) 0.08)
           :bg3 (lighten (:mainbg theme) 0.16))
    (assoc theme
           :fg2 (lighten (:mainfg theme) 0.08)
           :fg3 (lighten (:mainfg theme) 0.16)
           :fg4 (lighten (:mainfg theme) 0.24)
           :bg2 (darken (:mainbg theme) 0.08)
           :bg3 (darken (:mainbg theme) 0.16))))
