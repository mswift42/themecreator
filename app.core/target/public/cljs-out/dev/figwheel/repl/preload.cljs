(ns figwheel.repl.preload
  (:require [figwheel.repl :as fr]))

(if (and (= fr/host-env :html) (not= (. js/document -readyState) "complete"))
  (.addEventListener goog.global "load" #(fr/connect))
  (fr/connect))
