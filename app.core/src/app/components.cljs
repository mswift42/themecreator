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
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown"}
    (str title "    ")
    [:span.caret]
    [:span.sr-only]]
   [:ul.dropdown-menu {:aria-labelledby compid}
    (for [[linkhandler linktitle] linklist]
      ^{:key linkhandler}
      [:li [:a {:href "#" :on-click linkhandler} linktitle]])]])



(defn theme-select
  []
  [select-component "themedrop" "Theme Samples"
   [[#(db/switch-theme db/black) "black"]
    [#(db/switch-theme db/white) "white"]
    [#(db/switch-theme db/warm-night) "warm-night"]
    [#(db/switch-theme db/white-sand) "white-sand"]
    [#(db/switch-theme db/munich) "munich"]
    [#(db/switch-theme db/greymatters) "greymatters"]
    [#(db/switch-theme db/reykjavik) "reykjavik"]
    [#(db/switch-theme db/oldlace) "oldlace"]
    [#(db/switch-theme db/soft-charcoal) "soft-charcoal"]
    [#(db/switch-theme db/bergen) "bergen"]
    [#(db/switch-theme db/madrid) "madrid"]
    [#(db/switch-theme db/soft-morning) "soft-morning"]
    [#(db/switch-theme db/magonyx) "magonyx"]
    [#(db/switch-theme db/light-kiss) "light-kiss"]
    [#(db/switch-theme db/foggy-night) "foggy-night"]
    [#(db/switch-theme db/silkworm) "silkworm"]
    [#(db/switch-theme db/metalheart) "metalheart"]
    [#(db/switch-theme db/breezy-fall) "breezy-fall"]]])

(defn language-select
  []
  [select-component "langdrop" "Languages"
   [[#(toggle-preview prev/preview-javascript) "Javascript"]
    [#(toggle-preview prev/preview-ruby) "Ruby"]
    [#(toggle-preview prev/preview-typescript) "Typescript"]
    [#(toggle-preview prev/preview-python) "Python"]
    [#(toggle-preview prev/preview-c) "C"]]])



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

(defn custom-color-input-component
  [value title]
  [:span.custominputlabel (str title)
   [:input.custominput {:id (str (name value) "id") :type "number"
                        :step "0.1" :min "0" :max "100"
                        :default-value (.toFixed (value @db/custom-palette-db) 2)}]])

(defn custom-colors-component
  []
  [:div.randbuttons.row.custombutton
   [random-button-component "Custom"
    #(do
       (let [sat (.-value (.getElementById js/document "saturationid"))
             light (.-value (.getElementById js/document "lightnessid"))]
         (reset! db/custom-palette-db {:saturation (js/parseFloat sat)
                                       :lightness (js/parseFloat light)}))
       (colors/set-random-palette (colors/custom-palette
                                   (:lightness @db/custom-palette-db)
                                   (:saturation @db/custom-palette-db))))]
   [custom-color-input-component :lightness "L: "]
   [custom-color-input-component :saturation "S: "]])

(defn color-component [facename]
  [:div.colorcomponent 
   [:div.row.themeface
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

(defn author-component []
  [:div.themename
   [:div.row
    [:label.colortitle.col-xs-5 (str "Author")]
    [:input.col-xs-4.textinput.col-xs-offset-1.nameinput
     {:type "text" :value (:themeauthor @db/app-db)
      :on-change #(swap! db/app-db assoc :themeauthor (-> % .-target .-value))}]]])
