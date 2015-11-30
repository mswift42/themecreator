(ns app.app-test
  (:require-macros [cljs.test :refer [deftest testing is]])
  (:require [cljs.test :as t]
            [app.app :as app]
            [app.db :as db]
            [goog.color :as color]
            [app.colors :as colors]))



(deftest test-name-component []
  (is (= (:mainbg @db/app-db) "#292424")))

(deftest test-darken []
  (is (= (colors/darken "#222222") "#1b1b1b"))
  (is (= (colors/darken "#222222" 0.2) "#1b1b1b"))
  (is (= (colors/darken "#000000") "#000000"))
  (is (= (colors/darken "#ffffff" 1.0) "#000000"))
  (is (= (colors/darken "#ffffff" 0.0) "#ffffff"))
  (is (= (colors/darken "#ffffff") "#cccccc")))


(deftest test-lighten []
  (is (= (colors/lighten "#222222") "#4e4e4e"))
  (is (= (colors/lighten "#222222" 0.2) "#4e4e4e"))
  (is (= (colors/lighten "#ffffff") "#ffffff"))
  (is (= (colors/lighten "#000000" 0.1) "#1a1a1a"))
  (is (= (colors/lighten "#000000" 1.0) "#ffffff"))
  (is (= (colors/lighten "#ffffff" 0.0) "#ffffff")))

(deftest test-dark-bg? []
  (is (= (colors/dark-bg? "#000000") true))
  (is (= (colors/dark-bg? "#ffffff") false))
  (is (= (colors/dark-bg? "#932ad7") true))
  (is (= (colors/dark-bg? "#d7cf47") false))
  (is (= (colors/dark-bg? "#586e75") true))
  (is (= (colors/dark-bg? "#daa1e6") false))
  (is (= (colors/dark-bg? "#d2d2d2") false)))

(defn darker? [col1 col2]
  (let [[r1 g1 b1] (color/hexToHsv col1)
        [r2 g2 b2] (color/hexToHsv col2)]
    (> b2 b1)))

(deftest test-darker? []
  (is (= (darker? "#000000" "#ffffff") true))
  (is (= (darker? "#000000" "#010101") true))
  (is (= (darker? "#222222" "#222222") false)))

(deftest test-darken []
  (is (= (darker? (colors/darken "#222222")
                  "#222222")))
  is (not= (darker? (colors/lighten "#222222")
                    "#222222")))


(deftest test-toggle []
  (is (= @db/adjustbg false))
  (db/toggle-adjust)
  (is (= @db/adjustbg true)))

(deftest test-random-hue []
  (dotimes [_ 1000]
    (is (= (and
            (< (colors/random-hue) 360)
            (>= (colors/random-hue) 0))
           true))))

(deftest test-color-list []
  (dotimes [_ 1000]
    (is (= (count (colors/color-list 0 0)) 7))))

(deftest test-derive-colors []
  (let [theme (colors/derive-colors-from-theme db/preset)]
    (is (= (:warning theme) "#ff0000"))
    (is (= (:mainfg theme) "#303030"))
    (is (= (:fg2 theme) "#414141"))
    (is (= (:fg3 theme) "#515151"))
    (is (= (:fg4 theme) "#626262"))
    (is (= (:bg2 theme) "#ebebeb"))
    (is (= (:bg3 theme) "#d6d6d6"))))

