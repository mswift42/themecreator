(ns app.app-test
  (:require-macros [cljs.test :refer [deftest testing is]])
  (:require [cljs.test :as t]
            [app.app :as app]
            [app.db :as db]
            [goog.color :as color]
            [app.colors :as colors]))





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
  (dotimes [_ 100]
    (is (= (and
            (< (colors/random-hue) 360)
            (>= (colors/random-hue) 0))
           true))))

(deftest test-hue-range []
  (dotimes [_ 100]
    (let [hr (colors/hue-range 7 (colors/random-hue))]
      (is (= (every? #(>= % 0)) true))
      (is (= (every? #(< % 360)) true)))))

(deftest test-color-list []
  (dotimes [_ 100]
    (is (= (count (colors/color-list 0 0)) 7))))

(deftest test-derive-colors []
  (let [theme (colors/derive-colors-from-theme db/white)]
    (is (= (:warning theme) "#ff0000"))
    (is (= (:mainfg theme) "#303030"))
    (is (= (:fg2 theme) "#414141"))
    (is (= (:fg3 theme) "#515151"))
    (is (= (:fg4 theme) "#626262"))
    (is (= (:bg2 theme) "#ebebeb"))
    (is (= (:bg3 theme) "#d6d6d6"))))

(def hexrgbtable
  [[[128 0 0] "#800000"]
   [ [139 0 0] "#8b0000"]
   [[165 42 42] "#a52a2a"]
   [[178 34 34] "#b22222"]
   [[220 20 60] "#dc143c"]
   [[255 99 71] "#ff6347"]
   [[233 150 122] "#e9967a"]
   [[102 205 170] "#66cdaa"]
   [[72 209 204] "#48d1cc"]])

(def xyzrgbtable
  [[[1.52 1.6 1.742] [34 34 34]]
   [[1.921 1.569 1.952] [47 28 37]]
   [[2.229 1.533 2.098] [55 22 39]]
   [[2.544 1.499 2.253] [62 14 41]]])

(def lablchtable
  [[[68.659 38.851 74.990] [68.656 84.456 62.612]]
   [[53.497 80.796 47.825] [53.497 93.889 30.622]]
   [[69.081 -11.217 -47.985] [69.081 49.279 256.843]]
   [[61.205 -60.253 49.306] [61.205 77.855 140.706]]])

(deftest test-hexToRgb
  []
  (dotimes [_ 100]
    (let [r (rand-int 256)
          g (rand-int 256)
          b (rand-int 256)
          hex (colors/rgbToHex [r g b])]
      (is (= hex (colors/rgbToHex (color/hexToRgb hex))) true))))

(deftest test-rgbtoHex
  []
  (doseq [[rgb hex] hexrgbtable]
    (is (= hex (colors/rgbToHex rgb)))))

(defn within-limit?
  [limit result target]
  (<= (js/Math.abs (- target result)) limit))

(defn every-within-limit?
  "every-within-limit? return true if every number in vec2
   is within a given limit of the number in vec1 at the respective
   index position.
   (every-within-limit? 0.01 [2.00 2.99 2.01] [1.99 3 2.02]) -> true
   (every-within-limit? 0.01 [2.00 2.99 2.01] [1.99 3 1.99]) -> false"
  [limit vec1 vec2]
  (doseq [[n1 n2] (map list vec1 vec2)]
    (is (= (within-limit? limit n1 n2) true))))

(deftest test-whitin-limit
  []
  (is (= (within-limit? 0.001 1.999 2.000) true))
  (is (= (within-limit? 0.001 2.000 2) true))
  (is (= (within-limit? 0.001 2.001 2) true))
  (is (= (within-limit? 0.001 1.99 2.0) false)))

(deftest test-labtolch
  []
  (doseq [[lab lch] lablchtable]
    (is (= (every-within-limit? 0.01 (colors/labToLch lab) lch)))))

(deftest test-lchToLab
  []
  (doseq [[lab lch] lablchtable]
    (is (= (every-within-limit? 0.01 (colors/lchToLab lch) lab)))))

(deftest test-rgbtoxyz
  []
  (doseq [[xyz rgb] xyzrgbtable]
    (is (= (within-limit? 0.001 (colors/rgbToXyz rgb) xyz)))))

(deftest test-xyzToRgb
  []
  (doseq [[xyz rgb] xyzrgbtable]
    (is (= (colors/xyzToRgb xyz) rgb))))

(def lchhextable
  [[[68.659 84.444 62.615] "#ff8800"]
   [[52.299 78.733 288.079] "#0077ff"]
   [[14.129 11.011 174.016] "#112822"]
   [[61.254 75.855 141.83] "#11ab39"]
   [[60.39 33.84 329] "#b680b1"]
   [[50.731 28.193 211] "#1a8591"]
   [[62.921 57.373 115] "#8aa234"]
   [[66.919 17.343 259] "#8aa6c1"]])



(deftest test-lchToHex
  []
  (doseq [[lch hex] lchhextable]
    (is (= hex (colors/lchToHex lch)))))

(deftest test-valid-rgb?
  []
  (is (= true (colors/valid-rgb? [255 255 255])))
  (is (= true (colors/valid-rgb? [0 0 0])))
  (is (= true (colors/valid-rgb? [0 255 0])))
  (is (= false (colors/valid-rgb? [255 255 256])))
  (is (= false (colors/valid-rgb? [255 255 -1])))
  (is (= false (colors/valid-rgb? [1000 255 255]))))

(deftest test-black-theme
  []
  (is (= (:mainbg db/black) "#000000"))
  (doseq [col [:mainfg :keyword :builtin :string :functionname :variable :type
               :constant]]
    (is (= "#d4d4d4" (col db/black))))
  (is (= "#808080" (:comment db/black)))
  (is (= "#ff0000" (:warning db/black)))
  (is (= "#ff8800" (:warning2 db/black))))

(deftest test-white-theme
  []
  (is (= (:mainbg db/white) "#ffffff"))
  (is (= (:mainfg db/white) "#303030"))
  (doseq [col [ :keyword :builtin :string :functionname :variable
               :type :constant]]
    (is (= "#000000" (col db/white))))
  (is (= "#606060" (:comment db/white)))
  (is (= "#ff0000" (:warning db/white)))
  (is (= "#ff8800" (:warning2 db/white))))

(deftest test-warm-night-theme
  []
  (is (= (:mainfg db/warm-night) "#b1b1b1"))
  (is (= (:mainbg db/warm-night) "#292424"))
  (is (= (:keyword db/warm-night) "#96905f"))
  (is (= (:builtin db/warm-night) "#71a46c"))
  (is (= (:constant db/warm-night) "#bd845f"))
  (is (= (:string db/warm-night) "#71a19f"))
  (is (= (:functionname db/warm-night) "#b680b1"))
  (is (= (:variable db/warm-night) "#c27d7b"))
  (is (= (:type db/warm-night) "#8b8fc6"))
  (is (= (:comment db/warm-night) "#5d5a58"))
  (is (= (:warning db/warm-night) "#e81050"))
  (is (= (:warning2 db/warm-night) "#e86310" )))

(deftest test-white-sand-theme
  []
  (is (= (:mainfg db/white-sand) "#585858"))
  (is (= (:mainbg db/white-sand) "#f5ebe1"))
  (is (= (:keyword db/white-sand) "#4a858c"))
  (is (= (:builtin db/white-sand) "#1a8591"))
  (is (= (:constant db/white-sand) "#697024"))
  (is (= (:string db/white-sand) "#b3534b"))
  (is (= (:functionname db/white-sand) "#bd745e"))
  (is (= (:variable db/white-sand) "#476238"))
  (is (= (:type db/white-sand) "#8c4a79"))
  (is (= (:comment db/white-sand "#a9a9a9")))
  (is (= (:warning db/white-sand "#ff1276")))
  (is (= (:warning2 db/white-sand "#ff4d12"))))

(deftest test-oldlace-theme
  []
  (is (= (:mainfg db/oldlace) "#525252"))
  (is (= (:mainbg db/oldlace) "#fdf5e6"))
  (is (= (:keyword db/oldlace) "#3f567b"))
  (is (= (:builtin db/oldlace) "#7b4135"))
  (is (= (:constant db/oldlace) "#64502f"))
  (is (= (:string db/oldlace) "#305f5e"))
  (is (= (:functionname db/oldlace) "#714355"))
  (is (= (:variable db/oldlace) "#3f5b32"))
  (is (= (:type db/oldlace) "#634575"))
  (is (= (:comment db/oldlace) "#949494"))
  (is (= (:warning db/oldlace) "#fa0c0c"))
  (is (= (:warning2 db/oldlace) "#fa7b0c")))

(deftest test-greymatters-theme
  []
  (is (= (:mainfg db/greymatters) "#2f2f2f"))
  (is (= (:mainbg db/greymatters) "#f9fbfd"))
  (is (= (:keyword db/greymatters) "#3f567b"))
  (is (= (:builtin db/greymatters) "#7b4135"))
  (is (= (:constant db/greymatters) "#64502f"))
  (is (= (:string db/greymatters) "#305f5e"))
  (is (= (:functionname db/greymatters) "#714355"))
  (is (= (:variable db/greymatters) "#3f5b32"))
  (is (= (:type db/greymatters) "#634575"))
  (is (= (:comment db/greymatters) "#949494"))
  (is (= (:warning db/greymatters) "#fa0c0c"))
  (is (= (:warning2 db/greymatters) "#fa7b0c")))


(deftest test-string-to-keyword
  []
  (let [sm {"a" 1 "b" 2}
        km (db/string-to-keyword sm)]
    (is (= (:a km) 1))
    (is (= (:b km) 2))))

(deftest test-set-custom-palette
  []
  (is (= (:saturation @db/custom-palette-db) 0))
  (is (= (:saturation @db/custom-palette-db) 0))
  (db/set-custom-palette 0.2 1.0)
  (is (= (:saturation @db/custom-palette-db) 1.0))
  (is (= (:lightness @db/custom-palette-db) 0.2)))

