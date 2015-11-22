(ns app.components
  (:require [reagent.core :as r]
            [app.db :as db]
            [app.colors :as colors]))

(defn theme-select
  []
  [:div.btn-group.themedrop {:id "themedrop"}
   [:button.btn.btn-default {:type "button"}
    "Theme Samples"]
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown"}
    [:span.caret]
    [:span.sr-only]
    ]
   [:ul.dropdown-menu {:aria-labelledby "themedrop"}
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/preset)} "preset"]]
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/warm-night)} "warm-night"]]
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/white-sand)}
          "white-sand"] ]
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/greymatters)}"greymatters"]]
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/oldlace)} "oldlace"]]
    [:li [:a
          {:href "#" :on-click #(db/switch-theme db/soft-charcoal)} "soft-charcoal"]]]])

(defn inc-contrast-component
  []
  [:button.btn.btn-default
   {:on-click #(colors/inc-contrast)} "Inc. constrast"])

(defn red-contrast-component
  []
  [:button.btn.btn-default
   {:type "button" :on-click #(colors/red-contrast)} "Red. contrast"])

(defn adjustbg-component
  []
  [:div.row
   [:div.adbggroup
    [:label.col-xs-2.checkbox-inline.adbg  {:for "adbg"} "Adjust BG"]
    [:input.col-xs-1.col-xs-offset-1
     {:type "checkbox" :id "adbg" :value @db/adjustbg :on-change
      #(db/toggle-adjust)}]]])
