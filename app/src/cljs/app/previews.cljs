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
   [span-component "import " :keyword]
   [span-component " {Theme} " :mainfg]
   [span-component " from " :keyword]
   [span-component " './Theme' " :string]])
