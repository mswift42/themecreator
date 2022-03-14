(ns cljs-test-display.notify
  (:require
   [cljs-test-display.favicon :as favicon]
   [goog.object :as gobj]))

(def notification (gobj/get goog.global "Notification"))

(defn with-permission [perm thunk]
  (when notification
    (when (= perm (gobj/get notification "permission"))
      (thunk))))

(defn ask-permission! []
  (with-permission "default"
    #(.requestPermission notification)))

(def red-url (favicon/color-data-url "#d00" 512))
(def green-url (favicon/color-data-url "#0d0" 512))

(defn success []
  (with-permission "granted"
    #(js/Notification. "All CLJS Tests Passed"
                       #js {:icon green-url :silent true})))

(defn failure [{:keys [error fail]}]
  (with-permission "granted"
    #(js/Notification. "CLJS Tests Failed"
                       #js {:icon red-url
                            :silent true
                            :body (str
                                   (when fail
                                     (str fail " failures "))
                                   (when error
                                     (str error " errors")))})))

#_(success)
#_(failure {})
