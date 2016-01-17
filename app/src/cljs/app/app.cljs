(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db white-sand]]
            [app.db :as db]
            [app.components  :as comps]
            [app.colors :refer [derive-colors-from-theme]]
            [cljsjs.mustache]
            [goog.net.XhrIo :as xhr]))


(defn log
  [s]
  (.log js/console (str s)))

(defn parse-template
  [templ]
  (.parse js/Mustache templ))

(def intellitemplate (atom ""))
(def tmthemetemplate (atom ""))
(def atomtemplate (atom ""))
(def emacstemplate (atom ""))
(def vimtemplate (atom ""))


(defn compile-template
  [templ varmap]
  (.render js/Mustache templ (clj->js varmap)))


(defn GET
  [url template]
  (xhr/send url (fn [event]
                  (reset! template
                          (.getResponse (.-target event))))))


(defn generate-template
  [template]
  (compile-template template (derive-colors-from-theme @app-db)))

(defn window-url
  []
  (or (.-URL js/window)
      (.-webkitURL js/window)))

(defn create-blob
  [data id filename]
  (let [wu (window-url)
        blob (js/Blob. #js [data])
        templink (.getElementById js/document id)]
    (set! (.-href templink) (.createObjectURL wu blob))
    (doto templink
      (.setAttribute "download" filename))))

(defn scroll-to-bottom
  []
  (let [wb (.-scrollHeight (.-body js/document))]
    (if (>= (.-innerWidth js/window) 700)
      (.scrollTo js/window 0 wb))))

(defn template-download
  [id title filename template]
  [:li
   [:a {:href "#" :id id :on-click
        #(create-blob (generate-template template) id filename)}
    title]])

(defn template-select-component
  []
  [:div.btn-group.templatedrop {:id "templatedrop"}
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown" :on-click #(scroll-to-bottom)}
    "Theme Download    "
    [:span.caret]
    [:span.sr-only]]
   [:ul#downloadsel.dropdown-menu {:aria-labelledby "templatedrop"}
    [template-download "intellilink" "IntelliJ"
     (str (:themename @app-db) ".icls") @intellitemplate]
    [template-download "tmthemelink" "Textmate"
     (str (:themename @app-db) ".tmTheme") @tmthemetemplate]
    [template-download "atomlink" "Atom"
     "colors.less" @atomtemplate]
    [template-download "emacslink" "Emacs"
     (str (:themename @app-db) ".el") @emacstemplate ]
    [template-download "vimlink" "Vim"
     (str (:themename @app-db) ".vim") @vimtemplate]]])

(defn store-component
  []
  [comps/button-component "store theme"
   #(db/save-to-storage)])


(defn color-components []
  [:div.col-md-4.col-lg-3
   [:div.colorcomponents
    [:br]
    [comps/name-component]
    [comps/author-component]
    [:br]
    [:br]
    [comps/color-component :mainbg]
    [comps/color-component :mainfg]
    [comps/color-component :builtin]
    [comps/color-component :keyword]
    [comps/color-component :string]
    [comps/color-component :functionname]
    [comps/color-component :variable]
    [comps/color-component :type]
    [comps/color-component :constant]
    [comps/color-component :comment]
    [comps/color-component :warning]
    [comps/color-component :warning2]
    [:br]
    [:div.butsection.row
     [:div.col-xs-3
      [comps/inc-contrast-component]]
     [:div.col-xs-3
      [comps/red-contrast-component]]
     [:div.col-xs-5
      [comps/adjustbg-component]]]
    [comps/random-colors-component]
    [comps/custom-colors-component]
    [:br]
    [template-select-component]
    [store-component]
    [:br]]])

(defn preview-component []
  [:div.col-md-6.col-lg-8.col-lg-offset-1
   [:div.previewcomponent {:style {:background-color (:mainbg @app-db)}}
    [:div
     [:pre {:style {:background-color (:mainbg @app-db)}}
      [@comps/active-preview]]]]])

(defn navbar-component []
  [:div.container-fluid
   [:a.navbar-brand {:href "#"}
    (if (< (.-width js/screen) 1000) "TC" "ThemeCreator")]
   [:div.navbar.navbar-collapse
    [:div
     [comps/theme-select]
     [comps/language-select]]]])

(defn theme-component []
  [navbar-component]
  (GET "app/target/templates/intelli.txt" intellitemplate)
  (GET "app/target/templates/tmtheme.txt" tmthemetemplate)
  (GET "app/target/templates/atom/colors.txt" atomtemplate)
  (GET "app/target/templates/emacs.txt" emacstemplate)
  (GET "app/target/templates/vim.txt" vimtemplate)
  (db/set-db-from-storage)
  [:div.row
   [color-components]
   [preview-component]])


(defn init []
  (reagent/render-component [navbar-component]
                            (.getElementById js/document "navcontainer"))

  (reagent/render-component [theme-component]
                            (.getElementById js/document "mainapp")))
