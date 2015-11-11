(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db]]
            [app.previews :as previews]))



(defn color-component [facename]
  [:div.colorcomponent.mdl-grid
   [:label.colortitle.mdl-cell.mdl--cell-4-col (name facename)]
   [:span.colorpreview.mdl-cell.mdl--cell-2-col {:style {:background-color (facename @app-db)}} (str "")]
   [:input.mdl-cell.mdl--cell-4-col
    {:type "text" :value (facename @app-db)
     :on-change
     #(swap! app-db assoc facename (->
                                    % .-target .-value))}]])

(defn color-components []
  [:div.colorcomponents.mdl-cell.mdl--cell-4-col
   [color-component :mainbg]
   [color-component :mainfg]
   [color-component :builtin]
   [color-component :keyword]
   [color-component :string]
   [color-component :functionname]
   [color-component :variable]
   [color-component :type]
   [color-component :constant]
   [color-component :comment]
   [color-component :warning]
   [color-component :warning2]])

(defn preview-component []
  [:div.previewcomponent.mdl-cell.mdl--cell-8-col
   {:style {:background-color (:mainbg @app-db)}}
   [previews/preview-typescript]])

(defn theme-component []
  [:div.themecomponent.mdl-grid
   [color-components]
   [preview-component]])

(defn init []
  (reagent/render-component [theme-component]
                            (.getElementById js/document "container")))
