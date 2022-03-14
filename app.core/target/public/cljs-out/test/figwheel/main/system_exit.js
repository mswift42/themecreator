// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('figwheel.main.system_exit');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl');
goog.require('figwheel.tools.heads_up');
figwheel.main.system_exit.exit_with_status = (function figwheel$main$system_exit$exit_with_status(status){
var msg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"system-exit",new cljs.core.Keyword(null,"value","value",305978217),status], null);
figwheel.repl.debug.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-with-status","exit-with-status",-881967405),cljs.core.pr_str.call(null,msg)], null));

return figwheel.repl.respond_to_connection.call(null,msg);
});

//# sourceMappingURL=system_exit.js.map
