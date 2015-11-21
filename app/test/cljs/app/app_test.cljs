(ns app.app-test
  (:require-macros [cljs.test :refer [deftest testing is]])
  (:require [cljs.test :as t]
            [app.app :as app]
            [app.db :as db]
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
