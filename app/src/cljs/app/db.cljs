(ns app.db
  (:require [reagent.core :as r]))

(def app-db
  (r/atom
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
    :name "atc"}))

