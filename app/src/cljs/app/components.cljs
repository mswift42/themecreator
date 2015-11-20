(ns app.components
  (:require [reagent.core :as r]
            [app.db :as db]))

(defn theme-select
  []
  [:div.btn-group
   [:button.btn.btn-default {:type "button"}
    "Theme Samples"]
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown"}
    [:span.caret]
    [:span.sr-only]
    ]
   [:ul.dropdown-menu {:aria-labelledby "themedrop"}
    [:li [:button.btn.btn-default
          {:on-click #(db/switch-theme db/white-sand)}
          "white-sand"] ]
    [:li [:span  {:on-click #(db/switch-theme db/greymatters)}"greymatters"]]]])
