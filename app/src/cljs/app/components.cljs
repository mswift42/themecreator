(ns app.components
  (:require [reagent.core :as r]
            [app.db :as db]))

(defn theme-select
  []
  [:div.dropdown
   [:btn.btn-default.dropdown-toggle
    {:type "button" :id "themedrop" :data-toggle "dropdown"
     :aria-haspopup "true" :aria-expanded "true"} "Theme Samples"
    [:span.caret]]
   [:ul.dropdown-menu {:aria-labelledby "themedrop"}
    [:li "white-sand" [:a   {:on-click #(.log js/console "whitesand")}]]]
   ])
