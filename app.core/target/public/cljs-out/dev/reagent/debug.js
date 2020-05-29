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
var G__23218__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23219__i = 0, G__23219__a = new Array(arguments.length -  0);
while (G__23219__i < G__23219__a.length) {G__23219__a[G__23219__i] = arguments[G__23219__i + 0]; ++G__23219__i;}
  args = new cljs.core.IndexedSeq(G__23219__a,0,null);
} 
return G__23218__delegate.call(this,args);};
G__23218.cljs$lang$maxFixedArity = 0;
G__23218.cljs$lang$applyTo = (function (arglist__23220){
var args = cljs.core.seq(arglist__23220);
return G__23218__delegate(args);
});
G__23218.cljs$core$IFn$_invoke$arity$variadic = G__23218__delegate;
return G__23218;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23221__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23222__i = 0, G__23222__a = new Array(arguments.length -  0);
while (G__23222__i < G__23222__a.length) {G__23222__a[G__23222__i] = arguments[G__23222__i + 0]; ++G__23222__i;}
  args = new cljs.core.IndexedSeq(G__23222__a,0,null);
} 
return G__23221__delegate.call(this,args);};
G__23221.cljs$lang$maxFixedArity = 0;
G__23221.cljs$lang$applyTo = (function (arglist__23223){
var args = cljs.core.seq(arglist__23223);
return G__23221__delegate(args);
});
G__23221.cljs$core$IFn$_invoke$arity$variadic = G__23221__delegate;
return G__23221;
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
