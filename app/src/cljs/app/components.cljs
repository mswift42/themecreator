(ns app.components
  (:require [reagent.core :as r]
            [app.db :as db]
            [app.colors :as colors]
            [app.previews :as prev]))


(def active-preview
  (r/atom
   prev/preview-javascript))

(defn toggle-preview
  [lang]
  (reset! active-preview lang))

(defn select-component
  [compid title linklist]
  [:div.btn-group.themedrop {:id compid}
   [:button.btn.btn-default {:type "button"}
    title]
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown"}
    [:span.caret]
    [:span.sr-only]]
   [:ul.dropdown-menu {:aria-labelledby compid}
    (for [[linkhandler linktitle] linklist]
      ^{:key linkhandler}
      [:li [:a {:href "#" :on-click linkhandler} linktitle]])]])



(defn theme-select
  []
  [select-component "themedrop" "Theme Samples"
   [[#(db/switch-theme db/preset) "preset"]
    [#(db/switch-theme db/warm-night) "warm-night"]
    [#(db/switch-theme db/white-sand) "white-sand"]
    [#(db/switch-theme db/greymatters) "greymatters"]
    [#(db/switch-theme db/oldlace) "oldlace"]
    [#(db/switch-theme db/soft-charcoal) "soft-charcoal"]]])

(defn language-select
  []
  [select-component "langdrop" "Languages"
   [[#(toggle-preview prev/preview-typescript) "Typescript"]
    [#(toggle-preview prev/preview-javascript) "Javascript"]]])





(defn button-component
  "button-component returns the markup for a bootstrap default button"
  [text handler]
  [:button.btn.btn-default
   {:type "button" :on-click handler}
   text])

(defn inc-contrast-component
  []
  [:button.btn.btn-default
   {:on-click #(colors/inc-contrast)} [:span.conticons [:i.fa.fa-adjust] [:i.fa.fa-plus]]])

(defn red-contrast-component
  []
  [:button.btn.btn-default
   {:type "button" :on-click #(colors/red-contrast)} [:span.conticons [:i.fa.fa-adjust] [:i.fa.fa-minus]]])

(defn adjustbg-component
  []
  [:div.adbggroup
   [:input#adbg.adbgcheckbox
    {:type "checkbox" :value @db/adjustbg :on-change
     #(db/toggle-adjust)}]
   [:label {:for "adbg"} "Adjust Bg"]])

(defn random-button-component
  [text handler]
  [:button.btn.btn-default
   {:type "button" :on-click handler}
   [:span.randicons [:i.fa.fa-random] text]])

(defn random-colors-component
  []
  [:div.randbuttons.row
   [random-button-component "Warm"
    #(colors/set-random-palette (colors/warm-palette))]
   [random-button-component "Soft"
    #(colors/set-random-palette (colors/soft-palette))]
   [random-button-component "Pop"
    #(colors/set-random-palette (colors/pop-palette))]
   [random-button-component "Muted"
    #(colors/set-random-palette (colors/muted-palette))]])

(defn color-component [facename]
  [:div.colorcomponent 
   [:div.row
    [:label.colortitle.col-xs-4 (name facename)]
    [:input.col-xs-3.colorinput.col-xs-offset-1
     {:type "color"  :value (facename @db/app-db)
      :on-change
      #(swap! db/app-db assoc facename (->
                                     % .-target .-value))}]
    [:input.col-xs-3.textinput
     {:type "text" :value (facename @db/app-db)
      :on-change
      #(swap! db/app-db assoc facename (->
                                     % .-target .-value))}]]])

(defn name-component []
  [:div.themename
   [:div.row
    [:label.colortitle.col-xs-5 (str "Themename")]
    [:input.col-xs-4.textinput.col-xs-offset-1.nameinput
     {:type "text" :value (:themename @db/app-db)
      :on-change #(swap! db/app-db assoc :themename (-> % .-target .-value))}]]])
