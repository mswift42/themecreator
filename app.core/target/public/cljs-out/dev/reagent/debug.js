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
var G__12927__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12928__i = 0, G__12928__a = new Array(arguments.length -  0);
while (G__12928__i < G__12928__a.length) {G__12928__a[G__12928__i] = arguments[G__12928__i + 0]; ++G__12928__i;}
  args = new cljs.core.IndexedSeq(G__12928__a,0,null);
} 
return G__12927__delegate.call(this,args);};
G__12927.cljs$lang$maxFixedArity = 0;
G__12927.cljs$lang$applyTo = (function (arglist__12929){
var args = cljs.core.seq(arglist__12929);
return G__12927__delegate(args);
});
G__12927.cljs$core$IFn$_invoke$arity$variadic = G__12927__delegate;
return G__12927;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12930__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12931__i = 0, G__12931__a = new Array(arguments.length -  0);
while (G__12931__i < G__12931__a.length) {G__12931__a[G__12931__i] = arguments[G__12931__i + 0]; ++G__12931__i;}
  args = new cljs.core.IndexedSeq(G__12931__a,0,null);
} 
return G__12930__delegate.call(this,args);};
G__12930.cljs$lang$maxFixedArity = 0;
G__12930.cljs$lang$applyTo = (function (arglist__12932){
var args = cljs.core.seq(arglist__12932);
return G__12930__delegate(args);
});
G__12930.cljs$core$IFn$_invoke$arity$variadic = G__12930__delegate;
return G__12930;
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
