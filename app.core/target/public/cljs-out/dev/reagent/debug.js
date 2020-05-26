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
var G__10046__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10047__i = 0, G__10047__a = new Array(arguments.length -  0);
while (G__10047__i < G__10047__a.length) {G__10047__a[G__10047__i] = arguments[G__10047__i + 0]; ++G__10047__i;}
  args = new cljs.core.IndexedSeq(G__10047__a,0,null);
} 
return G__10046__delegate.call(this,args);};
G__10046.cljs$lang$maxFixedArity = 0;
G__10046.cljs$lang$applyTo = (function (arglist__10048){
var args = cljs.core.seq(arglist__10048);
return G__10046__delegate(args);
});
G__10046.cljs$core$IFn$_invoke$arity$variadic = G__10046__delegate;
return G__10046;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10049__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10050__i = 0, G__10050__a = new Array(arguments.length -  0);
while (G__10050__i < G__10050__a.length) {G__10050__a[G__10050__i] = arguments[G__10050__i + 0]; ++G__10050__i;}
  args = new cljs.core.IndexedSeq(G__10050__a,0,null);
} 
return G__10049__delegate.call(this,args);};
G__10049.cljs$lang$maxFixedArity = 0;
G__10049.cljs$lang$applyTo = (function (arglist__10051){
var args = cljs.core.seq(arglist__10051);
return G__10049__delegate(args);
});
G__10049.cljs$core$IFn$_invoke$arity$variadic = G__10049__delegate;
return G__10049;
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
