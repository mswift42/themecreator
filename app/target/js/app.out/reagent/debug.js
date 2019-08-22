// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5475__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5476__i = 0, G__5476__a = new Array(arguments.length -  0);
while (G__5476__i < G__5476__a.length) {G__5476__a[G__5476__i] = arguments[G__5476__i + 0]; ++G__5476__i;}
  args = new cljs.core.IndexedSeq(G__5476__a,0,null);
} 
return G__5475__delegate.call(this,args);};
G__5475.cljs$lang$maxFixedArity = 0;
G__5475.cljs$lang$applyTo = (function (arglist__5477){
var args = cljs.core.seq(arglist__5477);
return G__5475__delegate(args);
});
G__5475.cljs$core$IFn$_invoke$arity$variadic = G__5475__delegate;
return G__5475;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5478__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5479__i = 0, G__5479__a = new Array(arguments.length -  0);
while (G__5479__i < G__5479__a.length) {G__5479__a[G__5479__i] = arguments[G__5479__i + 0]; ++G__5479__i;}
  args = new cljs.core.IndexedSeq(G__5479__a,0,null);
} 
return G__5478__delegate.call(this,args);};
G__5478.cljs$lang$maxFixedArity = 0;
G__5478.cljs$lang$applyTo = (function (arglist__5480){
var args = cljs.core.seq(arglist__5480);
return G__5478__delegate(args);
});
G__5478.cljs$core$IFn$_invoke$arity$variadic = G__5478__delegate;
return G__5478;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
