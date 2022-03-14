// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
goog.require('goog.object');
goog.scope(function(){
reagent.ratom.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.generation !== 'undefined')){
} else {
reagent.ratom.generation = (0);
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
reagent.ratom.running = (function reagent$ratom$running(){
return (cljs.core.deref.call(null,reagent.ratom._running));
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len.call(null,x);
var and__4251__auto__ = (len === reagent.ratom.arr_len.call(null,y));
if(and__4251__auto__){
var i = (0);
while(true){
var or__4253__auto__ = (i === len);
if(or__4253__auto__){
return or__4253__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__9105 = (i + (1));
i = G__9105;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4251__auto__;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__9106 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__9107 = obj;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__9107);

try{return f.call(null);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__9106);
}});
/**
 * Returns `(in-context r f)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (reagent.ratom.generation = (reagent.ratom.generation + (1))));


var res = reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5757__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto__ == null)){
return null;
} else {
var r = temp__5757__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f)));

return (this$.watchesArr = null);
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key)));

return (this$.watchesArr = null);
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv.call(null,(function (p1__9108_SHARP_,p2__9109_SHARP_,p3__9110_SHARP_){
var G__9111 = p1__9108_SHARP_;
G__9111.push(p2__9109_SHARP_);

G__9111.push(p3__9110_SHARP_);

return G__9111;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_9112 = (a[i]);
var f_9113 = (a[(i + (1))]);
f_9113.call(null,k_9112,this$,old,new$);

var G__9114 = ((2) + i);
i = G__9114;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write.call(null,writer,["#object[reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR__orig_val__9115 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__9116 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__9116);

try{return v;
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__9115);
}})(),writer,opts);

return cljs.core._write.call(null,writer,"]");
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.rea_queue !== 'undefined')){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
(reagent.ratom.rea_queue = []);

reagent.impl.batching.schedule.call(null);
} else {
}

return reagent.ratom.rea_queue.push(r);
});

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
}));

(reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RAtom.cljs$lang$type = true);

(reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom");

(reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"reagent.ratom/RAtom");
}));

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__9120 = arguments.length;
switch (G__9120) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___9124 = arguments.length;
var i__4865__auto___9125 = (0);
while(true){
if((i__4865__auto___9125 < len__4864__auto___9124)){
args_arr__4885__auto__.push((arguments[i__4865__auto___9125]));

var G__9126 = (i__4865__auto___9125 + (1));
i__4865__auto___9125 = G__9126;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
}));

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9121){
var map__9122 = p__9121;
var map__9122__$1 = cljs.core.__destructure_map.call(null,map__9122);
var meta = cljs.core.get.call(null,map__9122__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__9122__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
}));

/** @this {Function} */
(reagent.ratom.atom.cljs$lang$applyTo = (function (seq9118){
var G__9119 = cljs.core.first.call(null,seq9118);
var seq9118__$1 = cljs.core.next.call(null,seq9118);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9119,seq9118__$1);
}));

(reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if((!((r == null)))){
return cljs.core._deref.call(null,r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

var __9127 = o.reagReactionCache;
var __9128__$1 = cljs.core.dissoc.call(null,__9127,k);
(o.reagReactionCache = __9128__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return destroy.call(null,x);
} else {
return null;
}
}));
var v = cljs.core._deref.call(null,r__$1);
(o.reagReactionCache = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
return reagent.ratom.cached_reaction.call(null,(function (){
return cljs.core.apply.call(null,self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref.call(null,r);
}
}));

(reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Track)) && (((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)))));
}));

(reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"f","f",-1597136552),self__.f], null));
}));

(reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Track.cljs$lang$type = true);

(reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track");

(reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"reagent.ratom/Track");
}));

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track.call(null,f,args);
var r = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core._deref.call(null,t);
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___9131 = arguments.length;
var i__4865__auto___9132 = (0);
while(true){
if((i__4865__auto___9132 < len__4864__auto___9131)){
args__4870__auto__.push((arguments[i__4865__auto___9132]));

var G__9133 = (i__4865__auto___9132 + (1));
i__4865__auto___9132 = G__9133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track.cljs$lang$applyTo = (function (seq9129){
var G__9130 = cljs.core.first.call(null,seq9129);
var seq9129__$1 = cljs.core.next.call(null,seq9129);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9130,seq9129__$1);
}));

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___9136 = arguments.length;
var i__4865__auto___9137 = (0);
while(true){
if((i__4865__auto___9137 < len__4864__auto___9136)){
args__4870__auto__.push((arguments[i__4865__auto___9137]));

var G__9138 = (i__4865__auto___9137 + (1));
i__4865__auto___9137 = G__9138;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq9134){
var G__9135 = cljs.core.first.call(null,seq9134);
var seq9134__$1 = cljs.core.next.call(null,seq9134);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9135,seq9134__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__9139 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__9140 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__9140);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__9139);
}}));

(reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
}));

(reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (((cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)))));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
}):(function (){
return self__.ratom.call(null,self__.path);
}));
return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RCursor.cljs$lang$type = true);

(reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor");

(reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"reagent.ratom/RCursor");
}));

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__4253__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.call(null,src)," while attempting to get path: ",cljs.core.pr_str.call(null,path)].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__5757__auto__ = v.destroy;
if((temp__5757__auto__ == null)){
return null;
} else {
var f = temp__5757__auto__;
return f.call(null);
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__5755__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5755__auto__ == null)){
return [];
} else {
var c = temp__5755__auto__;
return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

var reagent$ratom$IDisposable$dispose_BANG_$dyn_9144 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (reagent.ratom.dispose_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
});
reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return reagent$ratom$IDisposable$dispose_BANG_$dyn_9144.call(null,this$);
}
});

var reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_9145 = (function (this$,f){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,f);
} else {
var m__4549__auto__ = (reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
});
reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_9145.call(null,this$,f);
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

var reagent$ratom$IRunnable$run$dyn_9146 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.ratom.run[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (reagent.ratom.run["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
});
reagent.ratom.run = (function reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return reagent$ratom$IRunnable$run$dyn_9146.call(null,this$);
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__9147 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__9148 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__9148);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__9147);
}}));

(reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
}));

(reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
(self__.watching = derefed);

var seq__9149_9164 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__9150_9165 = null;
var count__9151_9166 = (0);
var i__9152_9167 = (0);
while(true){
if((i__9152_9167 < count__9151_9166)){
var w_9168 = cljs.core._nth.call(null,chunk__9150_9165,i__9152_9167);
cljs.core._add_watch.call(null,w_9168,this$,reagent.ratom.handle_reaction_change);


var G__9169 = seq__9149_9164;
var G__9170 = chunk__9150_9165;
var G__9171 = count__9151_9166;
var G__9172 = (i__9152_9167 + (1));
seq__9149_9164 = G__9169;
chunk__9150_9165 = G__9170;
count__9151_9166 = G__9171;
i__9152_9167 = G__9172;
continue;
} else {
var temp__5753__auto___9173 = cljs.core.seq.call(null,seq__9149_9164);
if(temp__5753__auto___9173){
var seq__9149_9174__$1 = temp__5753__auto___9173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9149_9174__$1)){
var c__4679__auto___9175 = cljs.core.chunk_first.call(null,seq__9149_9174__$1);
var G__9176 = cljs.core.chunk_rest.call(null,seq__9149_9174__$1);
var G__9177 = c__4679__auto___9175;
var G__9178 = cljs.core.count.call(null,c__4679__auto___9175);
var G__9179 = (0);
seq__9149_9164 = G__9176;
chunk__9150_9165 = G__9177;
count__9151_9166 = G__9178;
i__9152_9167 = G__9179;
continue;
} else {
var w_9180 = cljs.core.first.call(null,seq__9149_9174__$1);
cljs.core._add_watch.call(null,w_9180,this$,reagent.ratom.handle_reaction_change);


var G__9181 = cljs.core.next.call(null,seq__9149_9174__$1);
var G__9182 = null;
var G__9183 = (0);
var G__9184 = (0);
seq__9149_9164 = G__9181;
chunk__9150_9165 = G__9182;
count__9151_9166 = G__9183;
i__9152_9167 = G__9184;
continue;
}
} else {
}
}
break;
}

var seq__9153 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__9154 = null;
var count__9155 = (0);
var i__9156 = (0);
while(true){
if((i__9156 < count__9155)){
var w = cljs.core._nth.call(null,chunk__9154,i__9156);
cljs.core._remove_watch.call(null,w,this$);


var G__9185 = seq__9153;
var G__9186 = chunk__9154;
var G__9187 = count__9155;
var G__9188 = (i__9156 + (1));
seq__9153 = G__9185;
chunk__9154 = G__9186;
count__9155 = G__9187;
i__9156 = G__9188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9153);
if(temp__5753__auto__){
var seq__9153__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9153__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__9153__$1);
var G__9189 = cljs.core.chunk_rest.call(null,seq__9153__$1);
var G__9190 = c__4679__auto__;
var G__9191 = cljs.core.count.call(null,c__4679__auto__);
var G__9192 = (0);
seq__9153 = G__9189;
chunk__9154 = G__9190;
count__9155 = G__9191;
i__9156 = G__9192;
continue;
} else {
var w = cljs.core.first.call(null,seq__9153__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__9193 = cljs.core.next.call(null,seq__9153__$1);
var G__9194 = null;
var G__9195 = (0);
var G__9196 = (0);
seq__9153 = G__9193;
chunk__9154 = G__9194;
count__9155 = G__9195;
i__9156 = G__9196;
continue;
}
} else {
return null;
}
}
break;
}
}));

(reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e9157){var e = e9157;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
}));

(reagent.ratom.Reaction.prototype._set_opts = (function (p__9158){
var self__ = this;
var map__9159 = p__9158;
var map__9159__$1 = cljs.core.__destructure_map.call(null,map__9159);
var auto_run__$1 = cljs.core.get.call(null,map__9159__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__9159__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__9159__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__9159__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__9160_9197 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__9161_9198 = null;
var count__9162_9199 = (0);
var i__9163_9200 = (0);
while(true){
if((i__9163_9200 < count__9162_9199)){
var w_9201 = cljs.core._nth.call(null,chunk__9161_9198,i__9163_9200);
cljs.core._remove_watch.call(null,w_9201,this$__$1);


var G__9202 = seq__9160_9197;
var G__9203 = chunk__9161_9198;
var G__9204 = count__9162_9199;
var G__9205 = (i__9163_9200 + (1));
seq__9160_9197 = G__9202;
chunk__9161_9198 = G__9203;
count__9162_9199 = G__9204;
i__9163_9200 = G__9205;
continue;
} else {
var temp__5753__auto___9206 = cljs.core.seq.call(null,seq__9160_9197);
if(temp__5753__auto___9206){
var seq__9160_9207__$1 = temp__5753__auto___9206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160_9207__$1)){
var c__4679__auto___9208 = cljs.core.chunk_first.call(null,seq__9160_9207__$1);
var G__9209 = cljs.core.chunk_rest.call(null,seq__9160_9207__$1);
var G__9210 = c__4679__auto___9208;
var G__9211 = cljs.core.count.call(null,c__4679__auto___9208);
var G__9212 = (0);
seq__9160_9197 = G__9209;
chunk__9161_9198 = G__9210;
count__9162_9199 = G__9211;
i__9163_9200 = G__9212;
continue;
} else {
var w_9213 = cljs.core.first.call(null,seq__9160_9207__$1);
cljs.core._remove_watch.call(null,w_9213,this$__$1);


var G__9214 = cljs.core.next.call(null,seq__9160_9207__$1);
var G__9215 = null;
var G__9216 = (0);
var G__9217 = (0);
seq__9160_9197 = G__9214;
chunk__9161_9198 = G__9215;
count__9162_9199 = G__9216;
i__9163_9200 = G__9217;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5757__auto__ = this$__$1.on_dispose_arr;
if((temp__5757__auto__ == null)){
return null;
} else {
var a = temp__5757__auto__;
var n__4741__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4741__auto__)){
(a[i]).call(null,this$__$1);

var G__9218 = (i + (1));
i = G__9218;
continue;
} else {
return null;
}
break;
}
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = this$__$1.on_dispose_arr;
if((temp__5755__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5755__auto__;
return a.push(f__$1);
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
reagent.ratom.remove_w.call(null,this$__$1,key);

if((((!(was_empty))) && (((cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5757__auto___9219 = self__.caught;
if((temp__5757__auto___9219 == null)){
} else {
var e_9220 = temp__5757__auto___9219;
throw e_9220;
}

var non_reactive_9221 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_9221){
reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_9221) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_9222 = self__.state;
(self__.state = self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_9222,self__.state)))){
} else {
reagent.ratom.notify_w.call(null,this$__$1,oldstate_9222,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Reaction.cljs$lang$type = true);

(reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction");

(reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"reagent.ratom/Reaction");
}));

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(reagent.ratom.rea_queue = null);

var n__4741__auto___9223 = q.length;
var i_9224 = (0);
while(true){
if((i_9224 < n__4741__auto___9223)){
var r_9225 = (q[i_9224]);
r_9225._queued_run();

var G__9226 = (i_9224 + (1));
i_9224 = G__9226;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_);
reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__4870__auto__ = [];
var len__4864__auto___9231 = arguments.length;
var i__4865__auto___9232 = (0);
while(true){
if((i__4865__auto___9232 < len__4864__auto___9231)){
args__4870__auto__.push((arguments[i__4865__auto___9232]));

var G__9233 = (i__4865__auto___9232 + (1));
i__4865__auto___9232 = G__9233;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__9229){
var map__9230 = p__9229;
var map__9230__$1 = cljs.core.__destructure_map.call(null,map__9230);
var auto_run = cljs.core.get.call(null,map__9230__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__9230__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__9230__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq9227){
var G__9228 = cljs.core.first.call(null,seq9227);
var seq9227__$1 = cljs.core.next.call(null,seq9227);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9228,seq9227__$1);
}));

reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
(reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return run.call(null,obj);
}));

reagent.ratom.goog$module$goog$object.set.call(null,obj,key,r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = ({});
var res = reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.call(null,this$__$1)].join(''));
} else {
}
} else {
}


return self__.state;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && ((((!(self__.changed))) && (((cljs.core.not.call(null,other.changed)) && (((cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)))))))));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Wrapper.cljs$lang$type = true);

(reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper");

(reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper.call(null,value,reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map
