// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__5656 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__5657 = c;
reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__5657;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error("Assert failed: (ifn? f)"))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c)):(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__5658 = n;
switch (G__5658) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__5659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__5659) : f.call(null,G__5659));

break;
case (3):
var G__5660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__5661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5660,G__5661) : f.call(null,G__5660,G__5661));

break;
case (4):
var G__5662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__5663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__5664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__5662,G__5663,G__5664) : f.call(null,G__5662,G__5663,G__5664));

break;
case (5):
var G__5665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__5666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__5667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__5668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__5665,G__5666,G__5667,G__5668) : f.call(null,G__5665,G__5666,G__5667,G__5668));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return (reagent.impl.component.do_render.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.do_render.cljs$core$IFn$_invoke$arity$1(c) : reagent.impl.component.do_render.call(null,c));
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__5656;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__5670 = key;
var G__5670__$1 = (((G__5670 instanceof cljs.core.Keyword))?G__5670.fqn:null);
switch (G__5670__$1) {
case "getDefaultProps":
throw (new Error(["Assert failed: ","getDefaultProps not supported yet","\n","false"].join('')));


break;
case "getInitialState":
return ((function (G__5670,G__5670__$1){
return (function (){
var c = this;
return cljs.core.reset_BANG_(reagent.impl.component.state_atom(c),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c)));
});
;})(G__5670,G__5670__$1))

break;
case "componentWillReceiveProps":
return ((function (G__5670,G__5670__$1){
return (function (props){
var c = this;
var G__5671 = c;
var G__5672 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5671,G__5672) : f.call(null,G__5671,G__5672));
});
;})(G__5670,G__5670__$1))

break;
case "shouldComponentUpdate":
return ((function (G__5670,G__5670__$1){
return (function (nextprops,nextstate){
var or__4131__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return (((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv)));
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(c,old_argv,new_argv) : f.call(null,c,old_argv,new_argv));
}
}
});
;})(G__5670,G__5670__$1))

break;
case "componentWillUpdate":
return ((function (G__5670,G__5670__$1){
return (function (nextprops){
var c = this;
var G__5673 = c;
var G__5674 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5673,G__5674) : f.call(null,G__5673,G__5674));
});
;})(G__5670,G__5670__$1))

break;
case "componentDidUpdate":
return ((function (G__5670,G__5670__$1){
return (function (oldprops){
var c = this;
var G__5675 = c;
var G__5676 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5675,G__5676) : f.call(null,G__5675,G__5676));
});
;})(G__5670,G__5670__$1))

break;
case "componentWillMount":
return ((function (G__5670,G__5670__$1){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__5670,G__5670__$1))

break;
case "componentWillUnmount":
return ((function (G__5670,G__5670__$1){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__5670,G__5670__$1))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__5678__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__5678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5679__i = 0, G__5679__a = new Array(arguments.length -  0);
while (G__5679__i < G__5679__a.length) {G__5679__a[G__5679__i] = arguments[G__5679__i + 0]; ++G__5679__i;}
  args = new cljs.core.IndexedSeq(G__5679__a,0,null);
} 
return G__5678__delegate.call(this,args);};
G__5678.cljs$lang$maxFixedArity = 0;
G__5678.cljs$lang$applyTo = (function (arglist__5680){
var args = cljs.core.seq(arglist__5680);
return G__5678__delegate(args);
});
G__5678.cljs$core$IFn$_invoke$arity$variadic = G__5678__delegate;
return G__5678;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljsRender,null,cljs.core.cst$kw$reagentRender,null,cljs.core.cst$kw$render,null,cljs.core.cst$kw$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__5681 = f;
(G__5681["__reactDontBind"] = true);

return G__5681;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(key) : reagent.impl.component.dont_wrap.call(null,key)))){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected function in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),"\n","(ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shouldComponentUpdate,null,cljs.core.cst$kw$componentWillMount,null,cljs.core.cst$kw$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.cst$kw$cljsRender,render_f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$render,cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.cst$kw$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.fn_QMARK_(f);
if(and__4120__auto__){
var or__4131__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (f["name"]);
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__4120__auto__){
return cljs.core.name(f);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__5459__auto__ = cljs.core.cst$kw$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__5459__auto__ == null)){
return fmap;
} else {
var cf = temp__5459__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.cst$kw$reagentRender,cf),cljs.core.cst$kw$componentFunction);
}
})();
var render_fun = (function (){var or__4131__auto__ = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error(["Assert failed: ",["Render must be a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun], 0))].join(''),"\n","(ifn? render-fun)"].join('')))})());
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})());
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent")):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.cst$kw$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__5686 = o;
(G__5686[cljs.core.name(k)] = v);

return G__5686;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__5687__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__5687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5688__i = 0, G__5688__a = new Array(arguments.length -  0);
while (G__5688__i < G__5688__a.length) {G__5688__a[G__5688__i] = arguments[G__5688__i + 0]; ++G__5688__i;}
  args = new cljs.core.IndexedSeq(G__5688__a,0,null);
} 
return G__5687__delegate.call(this,args);};
G__5687.cljs$lang$maxFixedArity = 0;
G__5687.cljs$lang$applyTo = (function (arglist__5689){
var args = cljs.core.seq(arglist__5689);
return G__5687__delegate(args);
});
G__5687.cljs$core$IFn$_invoke$arity$variadic = G__5687__delegate;
return G__5687;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__5690 = reagent.impl.component._STAR_current_component_STAR_;
if((G__5690 == null)){
return null;
} else {
return (G__5690["cljsName"])();
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__5691(s__5692){
return (new cljs.core.LazySeq(null,(function (){
var s__5692__$1 = s__5692;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5692__$1);
if(temp__5457__auto__){
var s__5692__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5692__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__5692__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__5694 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__5693 = (0);
while(true){
if((i__5693 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__5693);
cljs.core.chunk_append(b__5694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__5695 = (i__5693 + (1));
i__5693 = G__5695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5694),reagent$impl$component$shallow_obj_to_map_$_iter__5691(cljs.core.chunk_rest(s__5692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5694),null);
}
} else {
var k = cljs.core.first(s__5692__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__5691(cljs.core.rest(s__5692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])(({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.cst$kw$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})}));
});
