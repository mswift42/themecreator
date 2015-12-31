(ns adzerk.boot-reload.connection
  (:require
   [clojure.browser.net          :as net]))

(def ws-conn (atom nil))

(defn alive? [] (not (nil? @ws-conn)))

(defn send-message! [message]
  (when-let [conn @ws-conn]
    (net/transmit conn (pr-str message))))
