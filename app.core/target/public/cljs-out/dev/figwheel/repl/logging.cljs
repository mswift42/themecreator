(ns figwheel.repl.logging
  (:require [goog.log :as glog]
            [goog.object :as gobj]
            [clojure.string :as string])
  (:import [goog.debug Console]))

(defn get-logger [nm]
  (.call glog/getLogger nil nm))

(defn error [log msg-ex]
  (.call glog/error nil log msg-ex))

(defn fine [log msg]
  (.call glog/fine nil log msg))

(defn info [log msg]
  (.call glog/info nil log msg))

(defn warning [log msg]
  (.call glog/warning nil log msg))

(defonce LogLevel
  (or goog.log.Level
      goog.debug.Logger.Level))

(defn debug [log msg]
  (.call glog/log nil log LogLevel.FINEST msg))

(defn console-logging []
  (when-not (gobj/get goog.debug.Console "instance")
    (let [c (goog.debug.Console.)]
      ;; don't display time
      (doto (.getFormatter c)
        (gobj/set "showAbsoluteTime" false)
        (gobj/set "showRelativeTime" false))
      (gobj/set goog.debug.Console "instance" c)
      c))
  (when-let [console-instance (gobj/get goog.debug.Console "instance")]
    (.setCapturing console-instance true)
    true))

(def log-levels
  (into {}
        (map (juxt
              string/lower-case
              #(gobj/get LogLevel %))
             (map str '(SEVERE WARNING INFO CONFIG FINE FINER FINEST)))))

(defn set-log-level [logger' level]
  (if-let [lvl (get log-levels level)]
    (do
      (debug logger' (str "setting log level to " level))
      (if (exists? (gobj/get logger' "setLevel"))
        (.setLevel logger' lvl)
        (goog.log.setLevel logger' lvl)))
    (warning logger'
             (str "Log level " (pr-str level) " doesn't exist must be one of "
                  (pr-str '("severe" "warning" "info" "config" "fine" "finer" "finest"))))))

(defonce log-console (console-logging))


