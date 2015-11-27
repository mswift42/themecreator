(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db active-preview]]
            [app.previews :as previews]
            [app.components  :as comps]))



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
    [comps/random-colors-component]]])

(defn preview-component []
  [:div.col-md-6.col-lg-8.col-lg-offset-1
   [:div.previewcomponent {:style {:background-color (:mainbg @app-db)}}
    [@active-preview]]])

(defn navbar-component []
  [:div.container-fluid
   [:a.navbar-brand {:href "#"} "ITC"]
   [:div.navbar.navbar-collapse
    [:div
     [comps/theme-select]]]])

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
