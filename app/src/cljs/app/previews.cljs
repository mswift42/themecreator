(ns app.previews
  (:require [app.db :refer [app-db]]))

(defn span-component
  "span-component represents a span component
   with a text content 'text' of background-color 
   'color'"
  [text color]
  [:span {:style {:color (color @app-db)} } (str text)])

(defn preview-typescript
  []
  [:div
   [:pre
    [span-component "import" :keyword]
    [span-component " {Theme}" :mainfg]
    [span-component " from " :keyword]
    [span-component "'./Theme'" :string]
    [span-component ";" :mainfg]
    [:br]
    [span-component "import" :keyword]
    [span-component " {Face}" :mainfg]
    [span-component " from " :keyword]
    [span-component "'./Face'" :string]
    [span-component ";" :mainfg]
    [:br]
    [span-component "import" :keyword]
    [span-component " {Injectable} " :mainfg]
    [span-component "from " :keyword]
    [span-component "'angular2/angular2'" :string]
    [span-component ";" :mainfg]
    [:br]
    [:p]
    [:p]
    [span-component "@Injectable" :type]
    [span-component "()" :mainfg]
    [:br]
    [span-component "export" :keyword]
    [span-component " class Themeservice " :type]
    [span-component "{" :mainfg]]])

