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
var G__5276__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5277__i = 0, G__5277__a = new Array(arguments.length -  0);
while (G__5277__i < G__5277__a.length) {G__5277__a[G__5277__i] = arguments[G__5277__i + 0]; ++G__5277__i;}
  args = new cljs.core.IndexedSeq(G__5277__a,0,null);
} 
return G__5276__delegate.call(this,args);};
G__5276.cljs$lang$maxFixedArity = 0;
G__5276.cljs$lang$applyTo = (function (arglist__5278){
var args = cljs.core.seq(arglist__5278);
return G__5276__delegate(args);
});
G__5276.cljs$core$IFn$_invoke$arity$variadic = G__5276__delegate;
return G__5276;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5279__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5280__i = 0, G__5280__a = new Array(arguments.length -  0);
while (G__5280__i < G__5280__a.length) {G__5280__a[G__5280__i] = arguments[G__5280__i + 0]; ++G__5280__i;}
  args = new cljs.core.IndexedSeq(G__5280__a,0,null);
} 
return G__5279__delegate.call(this,args);};
G__5279.cljs$lang$maxFixedArity = 0;
G__5279.cljs$lang$applyTo = (function (arglist__5281){
var args = cljs.core.seq(arglist__5281);
return G__5279__delegate(args);
});
G__5279.cljs$core$IFn$_invoke$arity$variadic = G__5279__delegate;
return G__5279;
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
