(ns app.db
  (:require [reagent.core :as r]))

(def black
  {:themename "black"
   :mainbg "#000000"
   :mainfg "#d4d4d4"
   :builtin "#d4d4d4"
   :keyword "#d4d4d4"
   :string "#d4d4d4"
   :functionname "#d4d4d4"
   :variable "#d4d4d4"
   :type "#d4d4d4"
   :constant "#d4d4d4"
   :comment "#808080"
   :warning "#ff0000"
   :warning2 "#ff8800"})


(def white
  {:themename "white"
   :mainbg "#ffffff"
   :mainfg "#303030"
   :builtin "#000000"
   :keyword "#000000"
   :string  "#000000"
   :functionname "#000000"
   :variable "#000000"
   :type "#000000"
   :constant "#000000"
   :comment "#606060"
   :warning "#ff0000"
   :warning2 "#ff8800"})

(def white-sand
  {:themename "white-sand"
   :mainbg  "#f5ebe1"                ;
   :mainfg  "#585858"
   :keyword  "#4a858c"
   :builtin  "#1a8591"
   :string  "#b3534b"
   :functionname  "#bd745e"
   :variable  "#476238"
   :type  "#8c4a79"
   :constant  "#697024"
   :comment  "#a9a9a9"
   :warning  "#ff1276"
   :warning2  "#ff4d12"})

(def warm-night
  {:themename "warm-night"
   :mainbg "#292424"
   :mainfg "#b1b1b1"
   :keyword "#96905f"
   :builtin "#71a46c"
   :string "#71a19f"
   :functionname "#b680b1"
   :variable "#c27d7b"
   :type "#8b8fc6"
   :constant "#bd845f"
   :comment "#5d5a58"
   :warning "#e81050"
   :warning2 "#e86310"})

(def oldlace
  {:themename "Oldlace"
   :mainfg "#525252"
   :mainbg "#fdf5e6"
   :keyword "#3f567b"
   :builtin "#7b4135"
   :string "#305f5e"
   :functionname "#714355"
   :variable "#3f5b32"
   :type "#634575"
   :constant "#64502f"
   :comment "#949494"
   :warning "#fa0c0c"
   :warning2 "#fa7b0c"})

(def greymatters
  {:themename "Greymatters"
   :mainfg "#2f2f2f"
   :mainbg "#f9fbfd"
   :keyword "#3f567b"
   :builtin "#7b4135"
   :string "#305f5e"
   :functionname "#714355"
   :variable "#3f5b32"
   :type "#634575"
   :constant "#64502f"
   :comment "#949494"
   :warning "#fa0c0c"
   :warning2 "#fa7b0c"})

(def soft-charcoal
  {:themename "soft-charcoal"
   :mainfg "#c2c2c2"
   :mainbg "#191919"
   :keyword "#8aa234"
   :builtin "#54686d"
   :string "#5d90cd"
   :functionname "#7a8bbd"
   :variable "#8885b2"
   :type "#8aa6c1"
   :constant "#8aa6c1"
   :comment "#808080"
   :warning "#ff6523"
   :warning2 "#ff2370"})

(def munich
  {:themename "munich"
   :mainfg "#b1b1b1"
   :mainbg "#281123"
   :keyword "#b39b5f"
   :builtin "#7aa975"
   :string "#36aea8"
   :functionname "#40a8d3"
   :variable "#9798d6"
   :type "#cf88af"
   :constant "#d7897c"
   :comment "#5d5d5d"
   :warning "#e81050"
   :warning2 "#e86310"})

(def reykjavik
  {:themename "reykjavik"
   :mainfg "#b1b1b1"
   :mainbg "#112328"
   :keyword "#a3d4e8"
   :builtin "#c4cbee"
   :string "#e6c2db"
   :functionname "#f1c1bd"
   :variable "#e1c9aa"
   :type "#c1d2b1"
   :constant "#a3d6cc"
   :comment "#5d5d5d"
   :warning "#e81050"
   :warning2 "#e86310"})

(def contrastcolors
  [:mainfg :keyword :builtin :string :functionname :variable :type
   :constant :comment])

(def randomcolors
  [:keyword :builtin :string :functionname :variable :type :constant])


(def app-db
  (r/atom
   black))

(def adjustbg
  (r/atom
   false))

(def custom-palette-db
  (r/atom
   {:saturation 0 :lightness 0}))

(defn switch-theme
  [theme]
  (reset! app-db theme ))

(defn toggle-adjust []
  (reset! adjustbg (not @adjustbg)))

(defn set-custom-palette
  [lightness saturation]
  (reset! custom-palette-db {:saturation saturation
                             :lightness lightness}))


(def storagename "themecreator")

(defn save-to-storage
  []
  (.setItem js/localStorage storagename
            (js/JSON.stringify
             (clj->js (assoc @app-db :lightness (:lightness @custom-palette-db)
                             :saturation (:saturation @custom-palette-db))))))

(defn string-to-keyword
  "convert a map with strings as keys to a map with keyword keys and string 
   values."
  [strmap]
  (into {} (for [[k v] strmap]
             [(keyword k) v])))

(defn load-from-storage
  []
  (let [th (.getItem js/localStorage storagename)]
    (if th
      (-> (.getItem js/localStorage storagename)
          (js/JSON.parse)
          (js->clj)))))

(defn set-db-from-storage
  []
  (if (.getItem js/localStorage storagename)
    (let [storedtheme (string-to-keyword (load-from-storage))]
      (do
        (switch-theme storedtheme)
        (reset! custom-palette-db {:saturation (:saturation storedtheme)
                                   :lightness (:lightness storedtheme)})))))



