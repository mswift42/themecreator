(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db]]))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]
   [:span.someotherclass {:style {:background-color (:mainfg @app-db)}} "more text " (str (:mainfg @app-db))
    ]])

(defn color-component [facename]
  [:div.colorcomponent.mdl-grid
   [:label.colortitle.mdl-cell.mdl--cell-4-col (name facename)]
   [:span.colorpreview.mdl-cell.mdl--cell-2-col {:style {:background-color (facename @app-db)}} (str "")]
   [:input.mdl-cell.mdl--cell-4-col
    {:type "text" :value (facename @app-db)
     :on-change
     #(swap! app-db assoc facename (->
                                    % .-target .-value))}]])

(defn calling-component []
  [:div "Parent component"
   [some-component]
   [color-component :mainbg]
   [color-component :mainfg]])

(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
