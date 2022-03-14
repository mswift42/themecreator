// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.input');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
goog.scope(function(){
reagent.impl.template.goog$module$goog$object = goog.module.get('goog.object');
});
reagent.impl.template.global$module$react = goog.global["React"];
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$id,cljs.core.cst$sym$className], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)))));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return reagent.impl.template.goog$module$goog$object.get.call(null,o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__13752_13755 = reagent.impl.template.prop_name_cache;
var G__13753_13756 = cljs.core.name(k);
var G__13754_13757 = v;
reagent.impl.template.goog$module$goog$object.set.call(null,G__13752_13755,G__13753_13756,G__13754_13757);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__13758 = o;
var G__13759_13762 = G__13758;
var G__13760_13763 = reagent.impl.template.cached_prop_name(k);
var G__13761_13764 = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v));
reagent.impl.template.goog$module$goog$object.set.call(null,G__13759_13762,G__13760_13763,G__13761_13764);

return G__13758;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__13765__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__13765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13766__i = 0, G__13766__a = new Array(arguments.length -  0);
while (G__13766__i < G__13766__a.length) {G__13766__a[G__13766__i] = arguments[G__13766__i + 0]; ++G__13766__i;}
  args = new cljs.core.IndexedSeq(G__13766__a,0,null);
} 
return G__13765__delegate.call(this,args);};
G__13765.cljs$lang$maxFixedArity = 0;
G__13765.cljs$lang$applyTo = (function (arglist__13767){
var args = cljs.core.seq(arglist__13767);
return G__13765__delegate(args);
});
G__13765.cljs$core$IFn$_invoke$arity$variadic = G__13765__delegate;
return G__13765;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
var G__13768_13771 = reagent.impl.template.custom_prop_name_cache;
var G__13769_13772 = cljs.core.name(k);
var G__13770_13773 = v;
reagent.impl.template.goog$module$goog$object.set.call(null,G__13768_13771,G__13769_13772,G__13770_13773);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__13774 = o;
var G__13775_13778 = G__13774;
var G__13776_13779 = reagent.impl.template.cached_custom_prop_name(k);
var G__13777_13780 = reagent.impl.template.convert_prop_value(v);
reagent.impl.template.goog$module$goog$object.set.call(null,G__13775_13778,G__13776_13779,G__13777_13780);

return G__13774;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__13781__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__13781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13782__i = 0, G__13782__a = new Array(arguments.length -  0);
while (G__13782__i < G__13782__a.length) {G__13782__a[G__13782__i] = arguments[G__13782__i + 0]; ++G__13782__i;}
  args = new cljs.core.IndexedSeq(G__13782__a,0,null);
} 
return G__13781__delegate.call(this,args);};
G__13781.cljs$lang$maxFixedArity = 0;
G__13781.cljs$lang$applyTo = (function (arglist__13783){
var args = cljs.core.seq(arglist__13783);
return G__13781__delegate(args);
});
G__13781.cljs$core$IFn$_invoke$arity$variadic = G__13781__delegate;
return G__13781;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__13784 = props;
var G__13784__$1 = (((((!((id == null)))) && ((cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13784,cljs.core.cst$kw$id,id):G__13784);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13784__$1,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__4253__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.cst$kw$className.cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__13784__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class((function (){var G__13785 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13785,cljs.core.cst$kw$class,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__13785;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return reagent.impl.template.convert_prop_value(props__$1);
}
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__13786 = (cljs.core.count(argv) - first_child);
switch (G__13786) {
case (0):
return reagent.impl.template.global$module$react.createElement(component,jsprops);

break;
case (1):
var G__13787 = component;
var G__13788 = jsprops;
var G__13789 = reagent.impl.protocols.as_element(this$,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return reagent.impl.template.global$module$react.createElement(G__13787,G__13788,G__13789);

break;
default:
return reagent.impl.template.global$module$react.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element(this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$id,cljs.core.cst$sym$className,cljs.core.cst$sym$custom], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__13791 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5757__auto___13794 = reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___13794 == null)){
} else {
var key_13795 = temp__5757__auto___13794;
(jsprops.key = key_13795);
}

return reagent.impl.template.global$module$react.createElement(c,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_arg));

var temp__5757__auto___13798 = reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___13798 == null)){
} else {
var key_13799 = temp__5757__auto___13798;
(jsprops.key = key_13799);
}

var G__13796 = reagent.impl.component.functional_render_fn(compiler,tag);
var G__13797 = jsprops;
return reagent.impl.template.global$module$react.createElement(G__13796,G__13797);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_(tag)){
return reagent.impl.template.reag_element(tag,v,compiler);
} else {
return reagent.impl.template.function_element(tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4253__auto__ = reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5757__auto___13800 = reagent.impl.util.react_key_from_vec(argv);
if((temp__5757__auto___13800 == null)){
} else {
var key_13801 = temp__5757__auto___13800;
(jsprops.key = key_13801);
}

return reagent.impl.protocols.make_element(compiler,argv,reagent.impl.template.global$module$react.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(this$,x,_){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5755__auto__ == null)){
var v = reagent.impl.template.parse_tag(x);
reagent.impl.template.goog$module$goog$object.set.call(null,reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5755__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4253__auto__ = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_(component)){
var react_key = reagent.impl.util.get_react_key(props);
var input_class = (function (){var or__4253__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var x = reagent.impl.component.create_class(reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(react_key)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,react_key], null):null),cljs.core.meta(argv)], 0))));
} else {
var temp__5757__auto___13802 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___13802 == null)){
} else {
var key_13803 = temp__5757__auto___13802;
(jsprops.key = key_13803);
}

return reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(2),null);
var jsprops = (function (){var or__4253__auto__ = props;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var temp__5757__auto___13804 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___13804 == null)){
} else {
var key_13805 = temp__5757__auto___13804;
(jsprops.key = key_13805);
}

return reagent.impl.protocols.make_element(compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13806_SHARP_){
return reagent.impl.protocols.as_element(compiler,p1__13806_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((reagent.impl.util.react_key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.protocols.as_element(compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__13807 = reagent.ratom.check_derefs((function (){
return reagent.impl.template.expand_seq_dev(x,ctx,compiler);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13807,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13807,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__13810 = pos;
switch (G__13810) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.protocols.parse_tag(compiler,n,tag),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__13812 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__13813 = compiler;
v = G__13812;
compiler = G__13813;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

var G__13814 = tag;
var G__13814__$1 = (((G__13814 instanceof cljs.core.Keyword))?G__13814.fqn:null);
switch (G__13814__$1) {
case ">":
return reagent.impl.template.native_element(reagent.impl.template.__GT_HiccupTag(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element(v,compiler);

break;
default:
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
return reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
return (fn_to_element.cljs$core$IFn$_invoke$arity$3 ? fn_to_element.cljs$core$IFn$_invoke$arity$3(tag,v,compiler) : fn_to_element.call(null,tag,v,compiler));

}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_(x)){
return reagent.impl.template.expand_seq_check(x,this$);

} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var fn_to_element = (cljs.core.truth_(cljs.core.cst$kw$function_DASH_components.cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
var parse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$parse_DASH_tag,reagent.impl.template.cached_parse);
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template13817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template13817 = (function (opts,id,fn_to_element,parse_fn,meta13818){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.parse_fn = parse_fn;
this.meta13818 = meta13818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.template.t_reagent$impl$template13817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13819,meta13818__$1){
var self__ = this;
var _13819__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template13817(self__.opts,self__.id,self__.fn_to_element,self__.parse_fn,meta13818__$1));
}));

(reagent.impl.template.t_reagent$impl$template13817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13819){
var self__ = this;
var _13819__$1 = this;
return self__.meta13818;
}));

(reagent.impl.template.t_reagent$impl$template13817.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.template.t_reagent$impl$template13817.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(reagent.impl.template.t_reagent$impl$template13817.prototype.reagent$impl$protocols$Compiler$parse_tag$arity$3 = (function (this$,tag_name,tag_value){
var self__ = this;
var this$__$1 = this;
return (self__.parse_fn.cljs$core$IFn$_invoke$arity$3 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$3(this$__$1,tag_name,tag_value) : self__.parse_fn.call(null,this$__$1,tag_name,tag_value));
}));

(reagent.impl.template.t_reagent$impl$template13817.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element(this$__$1,x,self__.fn_to_element);
}));

(reagent.impl.template.t_reagent$impl$template13817.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element(this$__$1,argv,component,jsprops,first_child);
}));

(reagent.impl.template.t_reagent$impl$template13817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opts,cljs.core.cst$sym$id,cljs.core.cst$sym$fn_DASH_to_DASH_element,cljs.core.cst$sym$parse_DASH_fn,cljs.core.cst$sym$meta13818], null);
}));

(reagent.impl.template.t_reagent$impl$template13817.cljs$lang$type = true);

(reagent.impl.template.t_reagent$impl$template13817.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template13817");

(reagent.impl.template.t_reagent$impl$template13817.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reagent.impl.template/t_reagent$impl$template13817");
}));

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template13817.
 */
reagent.impl.template.__GT_t_reagent$impl$template13817 = (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template13817(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta13818){
return (new reagent.impl.template.t_reagent$impl$template13817(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta13818));
});

}

return (new reagent.impl.template.t_reagent$impl$template13817(opts,id,fn_to_element,parse_fn,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return (reagent.impl.template.default_compiler = compiler);
});
