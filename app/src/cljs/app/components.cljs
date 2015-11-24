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

(defn button-component
  "button-component returns the markup for a bootstrap default button"
  [text handler]
  [:button.btn.btn-default
   {:type "button" :on-click handler}
   text])

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
  [:div.adbggroup
   [:div.input-group
    [:span.input-group-addon
     [:input
      {:type "checkbox" :id "adbg" :value @db/adjustbg :on-change
       #(db/toggle-adjust)}]]
    [:input.form-control  {:type "text" :disabled "" :value "adjust bg"}]
    ]])



(defn random-colors-component
  []
  [:div.randbuttons.row.row-centered
   [:button.btn.btn-default.col-xs-4.col-xs-offset-2
    {:type "button" :on-click
     #(colors/set-random-palette (colors/warm-palette))}
    "Warm Colors"]
   [:button.btn.btn-default.col-xs-4.col-xs-offset-2
    {:type "button" :on-click
     #(colors/set-random-palette (colors/soft-palette))}
    "Soft Colors"]
   [:button.btn.btn-default.col-xs-4.col-xs-offset-2
    {:type "button" :on-click
     #(colors/set-random-palette (colors/pop-palette))}
    "Pop Colors"]
   [button-component "Muted colors"
    #(colors/set-random-palette (colors/muted-palette))]])
