// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!(((window["document"]) == null)))));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return (!(((c["props"]["argv"]) == null)));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__5305 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__5306 = cljs.core.seq(vec__5305);
var first__5307 = cljs.core.first(seq__5306);
var seq__5306__$1 = cljs.core.next(seq__5306);
var start = first__5307;
var parts = seq__5306__$1;
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__5309__delegate = function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var or__4131__auto___5310 = self__.p;
if(cljs.core.truth_(or__4131__auto___5310)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__5309 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__5311__i = 0, G__5311__a = new Array(arguments.length -  1);
while (G__5311__i < G__5311__a.length) {G__5311__a[G__5311__i] = arguments[G__5311__i + 1]; ++G__5311__i;}
  a = new cljs.core.IndexedSeq(G__5311__a,0,null);
} 
return G__5309__delegate.call(this,self__,a);};
G__5309.cljs$lang$maxFixedArity = 1;
G__5309.cljs$lang$applyTo = (function (arglist__5312){
var self__ = cljs.core.first(arglist__5312);
var a = cljs.core.rest(arglist__5312);
return G__5309__delegate(self__,a);
});
G__5309.cljs$core$IFn$_invoke$arity$variadic = G__5309__delegate;
return G__5309;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args5308){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args5308)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__5313__delegate = function (a){
var self__ = this;
var _ = this;
var or__4131__auto___5314 = self__.p;
if(cljs.core.truth_(or__4131__auto___5314)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__5313 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__5315__i = 0, G__5315__a = new Array(arguments.length -  0);
while (G__5315__i < G__5315__a.length) {G__5315__a[G__5315__i] = arguments[G__5315__i + 0]; ++G__5315__i;}
  a = new cljs.core.IndexedSeq(G__5315__a,0,null);
} 
return G__5313__delegate.call(this,a);};
G__5313.cljs$lang$maxFixedArity = 0;
G__5313.cljs$lang$applyTo = (function (arglist__5316){
var a = cljs.core.seq(arglist__5316);
return G__5313__delegate(a);
});
G__5313.cljs$core$IFn$_invoke$arity$variadic = G__5313__delegate;
return G__5313;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.util/partial-ifn");
});

/**
 * Positional factory function for reagent.impl.util/partial-ifn.
 */
reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4657__auto__ = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.util !== 'undefined') && (typeof reagent.impl.util.roots !== 'undefined')){
} else {
reagent.impl.util.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e5317){if((e5317 instanceof Object)){
var e = e5317;
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Error unmounting:"].join(''));
} else {
}

if((typeof console !== 'undefined')){
return console.log(e);
} else {
return null;
}
} else {
throw e5317;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR__orig_val__5319 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5320 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5320;

try{return (React["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR__orig_val__5319,_STAR_always_update_STAR__temp_val__5320){
return (function (){
var _STAR_always_update_STAR__orig_val__5321 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5322 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5322;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5321;
}});})(_STAR_always_update_STAR__orig_val__5319,_STAR_always_update_STAR__temp_val__5320))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5319;
}}catch (e5318){if((e5318 instanceof Object)){
var e = e5318;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e5318;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__5323_5327 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.impl.util.roots)));
var chunk__5324_5328 = null;
var count__5325_5329 = (0);
var i__5326_5330 = (0);
while(true){
if((i__5326_5330 < count__5325_5329)){
var v_5331 = chunk__5324_5328.cljs$core$IIndexed$_nth$arity$2(null,i__5326_5330);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_5331);


var G__5332 = seq__5323_5327;
var G__5333 = chunk__5324_5328;
var G__5334 = count__5325_5329;
var G__5335 = (i__5326_5330 + (1));
seq__5323_5327 = G__5332;
chunk__5324_5328 = G__5333;
count__5325_5329 = G__5334;
i__5326_5330 = G__5335;
continue;
} else {
var temp__4657__auto___5336 = cljs.core.seq(seq__5323_5327);
if(temp__4657__auto___5336){
var seq__5323_5337__$1 = temp__4657__auto___5336;
if(cljs.core.chunked_seq_QMARK_(seq__5323_5337__$1)){
var c__4550__auto___5338 = cljs.core.chunk_first(seq__5323_5337__$1);
var G__5339 = cljs.core.chunk_rest(seq__5323_5337__$1);
var G__5340 = c__4550__auto___5338;
var G__5341 = cljs.core.count(c__4550__auto___5338);
var G__5342 = (0);
seq__5323_5327 = G__5339;
chunk__5324_5328 = G__5340;
count__5325_5329 = G__5341;
i__5326_5330 = G__5342;
continue;
} else {
var v_5343 = cljs.core.first(seq__5323_5337__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_5343);


var G__5344 = cljs.core.next(seq__5323_5337__$1);
var G__5345 = null;
var G__5346 = (0);
var G__5347 = (0);
seq__5323_5327 = G__5344;
chunk__5324_5328 = G__5345;
count__5325_5329 = G__5346;
i__5326_5330 = G__5347;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
