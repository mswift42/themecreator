(ns app.db
  (:require [reagent.core :as r]))

(def preset
  {:mainbg "#ffffff"
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
   :warning2 "#ff8800"
   :name "atc"})

(def white-sand
  {:mainbg  "#f5ebe1"                ;
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
  {:mainbg "#292424"
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
  {:mainfg "#525252"
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
  {:mainfg "#2f2f2f"
   :mainbg "#f9fbfd"
   :keyword "#3f567b"
   :builtin "#7b4135"
   :string "#305f5e"
   :functionname "#714355"
   :variable "#3f5b32"
   :type "#634575"
   :constant "#64502f"
   "comment" "#949494"
   :warning "#fa0c0c"
   :warning2 "#fa7b0c"})


(def app-db
  (r/atom
   warm-night))

(defn switch-theme
  [theme]
  (reset! app-db theme ))


