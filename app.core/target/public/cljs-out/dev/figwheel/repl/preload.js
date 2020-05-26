// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.repl.preload');
goog.require('cljs.core');
goog.require('figwheel.repl');
if(((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))) && (cljs.core.not_EQ_.call(null,document.readyState,"complete")))){
goog.global.addEventListener("load",(function (){
return figwheel.repl.connect.call(null);
}));
} else {
figwheel.repl.connect.call(null);
}

//# sourceMappingURL=preload.js.map
