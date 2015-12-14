(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db white-sand]]
            [app.db :as db]
            [app.components  :as comps]
            [app.colors :refer [derive-colors-from-theme]]
            [cljsjs.mustache]
            [goog.net.XhrIo :as xhr]
            [goog.events :as events]
            [goog.Uri :as uri]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan put! take!]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))


(defn log
  [s]
  (.log js/console (str s)))

(defn parse-template
  [templ]
  (.parse js/Mustache templ))

(def intellitemplate (atom ""))
(def tmthemetemplate (atom ""))
(def atomtemplate (atom ""))


(defn compile-template
  [templ varmap]
  (.render js/Mustache templ (clj->js varmap)))

(defn callback
  [reply]
  (compile-template 
   (.getResponse (.-target reply))
   (derive-colors-from-theme @app-db)))

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

(def show-template-url (atom false))

(defn create-blob
  [data id filename]
  (let [wu (window-url)
        blob (js/Blob. #js [data])
        templink (.getElementById js/document id)]
    (set! (.-href templink) (.createObjectURL js/URL blob))
    (doto templink
      (.setAttribute "download" filename))))


(defn template-select-component
  []
  [:div.btn-group.templatedrop {:id "templatedrop"}
   [:button.btn.btn-default {:type "button"}
    "Theme Download"]
   [:button.btn.btn-default.dropdown-toggle
    {:type "button" :data-toggle "dropdown"}
    [:span.caret]
    [:span.sr-only]]
   [:ul.dropdown-menu {:aria-labelledby "templatedrop"}
    [:li
     [:a {:href "#"  :id "intellilink" :on-click #(create-blob (generate-template @intellitemplate) "intellilink" (str (:themename @app-db) ".icls"))}
      "Intellij"]]
    [:li
     [:a {:href "#" :id "tmthemelink" :on-click
          #(create-blob
            (generate-template @tmthemetemplate)
            "tmthemelink" (str (:themename @app-db) ".tmtheme"))}
      "Textmate"]]
    [:li
     [:a {:href "#" :id "atomlink" :on-click
          #(create-blob
            (generate-template @atomtemplate)
            "atomlink" (str (:themename @app-db) ".less"))}]]]])

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
    [template-select-component]
    [store-component]
    ]])

(defn preview-component []
  [:div.col-md-6.col-lg-8.col-lg-offset-1
   [:div.previewcomponent {:style {:background-color (:mainbg @app-db)}}
    [:div
     [:pre {:style {:background-color (:mainbg @app-db)}}
      [@comps/active-preview]]]]])

(defn navbar-component []
  [:div.container-fluid
   [:a.navbar-brand {:href "#"} "ITC"]
   [:div.navbar.navbar-collapse
    [:div
     [comps/theme-select]
     [comps/language-select]]]])

(defn theme-component []
  (db/set-db-from-storage)
  (GET "js/templates/intelli.txt" intellitemplate)
  (GET "js/templates/tmtheme.txt" tmthemetemplate)
  [navbar-component]
  [:div.row
   [color-components]
   [preview-component]])






(defn init []
  (reagent/render-component [navbar-component]
                            (.getElementById js/document "navcontainer"))

  (reagent/render-component [theme-component]
                            (.getElementById js/document "mainapp")))
