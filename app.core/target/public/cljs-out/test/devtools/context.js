// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('devtools.context');
goog.require('cljs.core');
devtools.context.get_root = (function devtools$context$get_root(){
return goog.global;
});
devtools.context.get_console = (function devtools$context$get_console(){
return devtools.context.get_root.call(null).console;
});

//# sourceMappingURL=context.js.map
