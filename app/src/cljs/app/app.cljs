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

(def texttemplate (atom ""))

(defn compile-template
  [templ varmap]
  (.render js/Mustache templ (clj->js varmap)))

(defn GET
  [url]
  (xhr/send url
            (fn [event]
              (reset! texttemplate   (.getResponse (.-target event))))))

(defn generate-template
  [url]
  (do
    (GET url)
    (compile-template @texttemplate (derive-colors-from-theme @app-db))
    (log @texttemplate)))

(defn template-select
  []
  [comps/select-component "templatedrop" "Theme Template"
   [[#(generate-template db/intellij) "IntelliJ"]]])


(defn color-components []
  [:div.col-md-4.col-lg-3
   [:div.colorcomponents
    [:br]
    [comps/name-component]
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
    [template-select]
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
  [navbar-component]
  [:div.row
   [color-components]
   [preview-component]])






(defn init []
  (reagent/render-component [navbar-component]
                            (.getElementById js/document "navcontainer"))
  (reagent/render-component [theme-component]
                            (.getElementById js/document "mainapp")))
