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


(def app-db
  (r/atom
   white-sand))

(defn switch-theme
  [theme]
  (reset! app-db theme ))


