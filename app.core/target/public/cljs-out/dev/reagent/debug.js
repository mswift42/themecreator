// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
(o.warn = (function() { 
var G__12842__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12843__i = 0, G__12843__a = new Array(arguments.length -  0);
while (G__12843__i < G__12843__a.length) {G__12843__a[G__12843__i] = arguments[G__12843__i + 0]; ++G__12843__i;}
  args = new cljs.core.IndexedSeq(G__12843__a,0,null);
} 
return G__12842__delegate.call(this,args);};
G__12842.cljs$lang$maxFixedArity = 0;
G__12842.cljs$lang$applyTo = (function (arglist__12844){
var args = cljs.core.seq(arglist__12844);
return G__12842__delegate(args);
});
G__12842.cljs$core$IFn$_invoke$arity$variadic = G__12842__delegate;
return G__12842;
})()
);

(o.error = (function() { 
var G__12845__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12846__i = 0, G__12846__a = new Array(arguments.length -  0);
while (G__12846__i < G__12846__a.length) {G__12846__a[G__12846__i] = arguments[G__12846__i + 0]; ++G__12846__i;}
  args = new cljs.core.IndexedSeq(G__12846__a,0,null);
} 
return G__12845__delegate.call(this,args);};
G__12845.cljs$lang$maxFixedArity = 0;
G__12845.cljs$lang$applyTo = (function (arglist__12847){
var args = cljs.core.seq(arglist__12847);
return G__12845__delegate(args);
});
G__12845.cljs$core$IFn$_invoke$arity$variadic = G__12845__delegate;
return G__12845;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
