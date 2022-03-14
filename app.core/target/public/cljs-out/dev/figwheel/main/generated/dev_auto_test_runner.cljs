(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [app.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote app.core-test))