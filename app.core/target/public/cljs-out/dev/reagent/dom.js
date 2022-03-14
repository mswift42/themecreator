// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14356 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14357 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14357);

try{var G__14358 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14359 = container;
var G__14360 = (function (){
var _STAR_always_update_STAR__orig_val__14361 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14362 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14362);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14361);
}});
return reagent.dom.global$module$react_dom.render(G__14358,G__14359,G__14360);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14356);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14364 = arguments.length;
switch (G__14364) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__14365 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14365,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__14369_14385 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14370_14386 = null;
var count__14371_14387 = (0);
var i__14372_14388 = (0);
while(true){
if((i__14372_14388 < count__14371_14387)){
var vec__14379_14389 = chunk__14370_14386.cljs$core$IIndexed$_nth$arity$2(null,i__14372_14388);
var container_14390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379_14389,(0),null);
var comp_14391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379_14389,(1),null);
reagent.dom.re_render_component(comp_14391,container_14390);


var G__14392 = seq__14369_14385;
var G__14393 = chunk__14370_14386;
var G__14394 = count__14371_14387;
var G__14395 = (i__14372_14388 + (1));
seq__14369_14385 = G__14392;
chunk__14370_14386 = G__14393;
count__14371_14387 = G__14394;
i__14372_14388 = G__14395;
continue;
} else {
var temp__5753__auto___14396 = cljs.core.seq(seq__14369_14385);
if(temp__5753__auto___14396){
var seq__14369_14397__$1 = temp__5753__auto___14396;
if(cljs.core.chunked_seq_QMARK_(seq__14369_14397__$1)){
var c__4679__auto___14398 = cljs.core.chunk_first(seq__14369_14397__$1);
var G__14399 = cljs.core.chunk_rest(seq__14369_14397__$1);
var G__14400 = c__4679__auto___14398;
var G__14401 = cljs.core.count(c__4679__auto___14398);
var G__14402 = (0);
seq__14369_14385 = G__14399;
chunk__14370_14386 = G__14400;
count__14371_14387 = G__14401;
i__14372_14388 = G__14402;
continue;
} else {
var vec__14382_14403 = cljs.core.first(seq__14369_14397__$1);
var container_14404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382_14403,(0),null);
var comp_14405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382_14403,(1),null);
reagent.dom.re_render_component(comp_14405,container_14404);


var G__14406 = cljs.core.next(seq__14369_14397__$1);
var G__14407 = null;
var G__14408 = (0);
var G__14409 = (0);
seq__14369_14385 = G__14406;
chunk__14370_14386 = G__14407;
count__14371_14387 = G__14408;
i__14372_14388 = G__14409;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
