// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8888__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8889__i = 0, G__8889__a = new Array(arguments.length -  0);
while (G__8889__i < G__8889__a.length) {G__8889__a[G__8889__i] = arguments[G__8889__i + 0]; ++G__8889__i;}
  args = new cljs.core.IndexedSeq(G__8889__a,0,null);
} 
return G__8888__delegate.call(this,args);};
G__8888.cljs$lang$maxFixedArity = 0;
G__8888.cljs$lang$applyTo = (function (arglist__8890){
var args = cljs.core.seq(arglist__8890);
return G__8888__delegate(args);
});
G__8888.cljs$core$IFn$_invoke$arity$variadic = G__8888__delegate;
return G__8888;
})()
);

(o.error = (function() { 
var G__8891__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8892__i = 0, G__8892__a = new Array(arguments.length -  0);
while (G__8892__i < G__8892__a.length) {G__8892__a[G__8892__i] = arguments[G__8892__i + 0]; ++G__8892__i;}
  args = new cljs.core.IndexedSeq(G__8892__a,0,null);
} 
return G__8891__delegate.call(this,args);};
G__8891.cljs$lang$maxFixedArity = 0;
G__8891.cljs$lang$applyTo = (function (arglist__8893){
var args = cljs.core.seq(arglist__8893);
return G__8891__delegate(args);
});
G__8891.cljs$core$IFn$_invoke$arity$variadic = G__8891__delegate;
return G__8891;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
