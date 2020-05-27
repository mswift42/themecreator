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
var G__12995__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12996__i = 0, G__12996__a = new Array(arguments.length -  0);
while (G__12996__i < G__12996__a.length) {G__12996__a[G__12996__i] = arguments[G__12996__i + 0]; ++G__12996__i;}
  args = new cljs.core.IndexedSeq(G__12996__a,0,null);
} 
return G__12995__delegate.call(this,args);};
G__12995.cljs$lang$maxFixedArity = 0;
G__12995.cljs$lang$applyTo = (function (arglist__12997){
var args = cljs.core.seq(arglist__12997);
return G__12995__delegate(args);
});
G__12995.cljs$core$IFn$_invoke$arity$variadic = G__12995__delegate;
return G__12995;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12998__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12999__i = 0, G__12999__a = new Array(arguments.length -  0);
while (G__12999__i < G__12999__a.length) {G__12999__a[G__12999__i] = arguments[G__12999__i + 0]; ++G__12999__i;}
  args = new cljs.core.IndexedSeq(G__12999__a,0,null);
} 
return G__12998__delegate.call(this,args);};
G__12998.cljs$lang$maxFixedArity = 0;
G__12998.cljs$lang$applyTo = (function (arglist__13000){
var args = cljs.core.seq(arglist__13000);
return G__12998__delegate(args);
});
G__12998.cljs$core$IFn$_invoke$arity$variadic = G__12998__delegate;
return G__12998;
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
