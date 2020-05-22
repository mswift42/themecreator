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
var G__5365__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5366__i = 0, G__5366__a = new Array(arguments.length -  0);
while (G__5366__i < G__5366__a.length) {G__5366__a[G__5366__i] = arguments[G__5366__i + 0]; ++G__5366__i;}
  args = new cljs.core.IndexedSeq(G__5366__a,0,null);
} 
return G__5365__delegate.call(this,args);};
G__5365.cljs$lang$maxFixedArity = 0;
G__5365.cljs$lang$applyTo = (function (arglist__5367){
var args = cljs.core.seq(arglist__5367);
return G__5365__delegate(args);
});
G__5365.cljs$core$IFn$_invoke$arity$variadic = G__5365__delegate;
return G__5365;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5368__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5369__i = 0, G__5369__a = new Array(arguments.length -  0);
while (G__5369__i < G__5369__a.length) {G__5369__a[G__5369__i] = arguments[G__5369__i + 0]; ++G__5369__i;}
  args = new cljs.core.IndexedSeq(G__5369__a,0,null);
} 
return G__5368__delegate.call(this,args);};
G__5368.cljs$lang$maxFixedArity = 0;
G__5368.cljs$lang$applyTo = (function (arglist__5370){
var args = cljs.core.seq(arglist__5370);
return G__5368__delegate(args);
});
G__5368.cljs$core$IFn$_invoke$arity$variadic = G__5368__delegate;
return G__5368;
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
