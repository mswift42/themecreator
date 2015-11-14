(ns app.app
  (:require [reagent.core :as reagent :refer [atom]]
            [app.db :refer [app-db]]
            [app.previews :as previews]))



(defn color-component [facename]
  [:div.colorcomponent
   [:div.row
    [:label.colortitle.col-xs-5 (name facename)]
    [:span.colorpreview.col-xs-1.col-xs-offset-1 {:style {:background-color (facename @app-db)}} (str "          ")]
    [:input.col-xs-3.pull-right.colorinput
     {:type "text" :value (facename @app-db)
      :on-change
      #(swap! app-db assoc facename (->
                                     % .-target .-value))}]]])

(defn color-components []
  [:div.col-md-4
   [:div.colorcomponents
    [color-component :mainbg]
    [color-component :mainfg]
    [color-component :builtin]
    [color-component :keyword]
    [color-component :string]
    [color-component :functionname]
    [color-component :variable]
    [color-component :type]
    [color-component :constant]
    [color-component :comment]
    [color-component :warning]
    [color-component :warning2]]])

(defn preview-component []
  [:div.col-md-8
   [:div.previewcomponent {:style {:background-color (:mainbg @app-db)}}
    [previews/preview-typescript]]])

(defn theme-component []
  [:div.row
   [color-components]
   [preview-component]])

(defn navbar-component []
  [:div.navbar-header
   [:a.navbar-brand {:href "#"} "ITC"]])

(defn init []
  (reagent/render-component [theme-component]
                            (.getElementById js/document "container"))
  (reagent/render-component [navbar-component]
                            (.getElementById js/document "navbarcontainer")))
