(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] app.app))
(client/connect "ws://localhost:44093" {:on-jsload (fn* [] (app.app/init))})