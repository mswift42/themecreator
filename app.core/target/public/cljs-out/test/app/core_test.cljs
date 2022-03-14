(ns app.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [app.colors :as color]))

(deftest  test-hexToBgrHex
  []
  (let [in ["#112328" "#a3d4e8" "#e6c2db" "#2e3440" "#3b4252" "#434c5e"]
        out ["0x282311" "0xe8d4a3" "0xdbc2e6" "0x40342e" "0x52423b" "0x5e4c43"]]
    (for [i in
          o out]
      (do
        (is (= (color/hexToBgrHex i) o))))))



(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (if (cljs.test/successful? m)
    (println "Success!")
    (println "FAIL")))

(defn -main [& args]
  (cljs.test/run-tests 'app.core-test)
  ;; return a message to the figwheel process that tells it to wait
  [:figwheel.main.async-result/wait 5000])
