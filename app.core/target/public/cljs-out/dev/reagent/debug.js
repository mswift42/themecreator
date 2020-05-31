// Compiled by ClojureScript 1.10.520 {}
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
o.warn = ((function (o){
return (function() { 
var G__17198__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17199__i = 0, G__17199__a = new Array(arguments.length -  0);
while (G__17199__i < G__17199__a.length) {G__17199__a[G__17199__i] = arguments[G__17199__i + 0]; ++G__17199__i;}
  args = new cljs.core.IndexedSeq(G__17199__a,0,null);
} 
return G__17198__delegate.call(this,args);};
G__17198.cljs$lang$maxFixedArity = 0;
G__17198.cljs$lang$applyTo = (function (arglist__17200){
var args = cljs.core.seq(arglist__17200);
return G__17198__delegate(args);
});
G__17198.cljs$core$IFn$_invoke$arity$variadic = G__17198__delegate;
return G__17198;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__17201__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17202__i = 0, G__17202__a = new Array(arguments.length -  0);
while (G__17202__i < G__17202__a.length) {G__17202__a[G__17202__i] = arguments[G__17202__i + 0]; ++G__17202__i;}
  args = new cljs.core.IndexedSeq(G__17202__a,0,null);
} 
return G__17201__delegate.call(this,args);};
G__17201.cljs$lang$maxFixedArity = 0;
G__17201.cljs$lang$applyTo = (function (arglist__17203){
var args = cljs.core.seq(arglist__17203);
return G__17201__delegate(args);
});
G__17201.cljs$core$IFn$_invoke$arity$variadic = G__17201__delegate;
return G__17201;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
