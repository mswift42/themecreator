// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('reagent.impl.input');
goog.require('cljs.core');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
reagent.impl.input.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.input.has_selection_api_QMARK_ = (function reagent$impl$input$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.input.these_inputs_have_selection_api,input_type);
});
reagent.impl.input.input_node_set_value = (function reagent$impl$input$input_node_set_value(node,rendered_value,dom_value,component,p__9273){
var map__9274 = p__9273;
var map__9274__$1 = cljs.core.__destructure_map.call(null,map__9274);
var on_write = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === document.activeElement)) && (((reagent.impl.input.has_selection_api_QMARK_.call(null,node.type)) && (((typeof rendered_value === 'string') && (typeof dom_value === 'string'))))))))){
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.input.input_component_set_value.call(null,component);
}));
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
}
}
});
reagent.impl.input.input_component_set_value = (function reagent$impl$input$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = this$.inputEl;
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
return reagent.impl.input.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.input.input_handle_change = (function reagent$impl$input$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.input.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
reagent.impl.input.input_render_setup = (function reagent$impl$input$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4251__auto__ = (!((jsprops == null)));
if(and__4251__auto__){
var and__4251__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4251__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
var original_ref_fn = jsprops.ref;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

if(cljs.core.truth_(this$.reagentRefFn)){
} else {
(this$.reagentRefFn = ((cljs.core.fn_QMARK_.call(null,original_ref_fn))?(function (el){
(this$.inputEl = el);

return original_ref_fn.call(null,el);
}):(cljs.core.truth_((function (){var and__4251__auto__ = original_ref_fn;
if(cljs.core.truth_(and__4251__auto__)){
return original_ref_fn.hasOwnProperty("current");
} else {
return and__4251__auto__;
}
})())?(function (el){
(this$.inputEl = el);

return (original_ref_fn.current = el);
}):(function (el){
return (this$.inputEl = el);
})
)));
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

(jsprops.onChange = (function (p1__9275_SHARP_){
return reagent.impl.input.input_handle_change.call(null,this$,on_change,p1__9275_SHARP_);
}));

return (jsprops.ref = this$.reagentRefFn);
} else {
return null;
}
});
reagent.impl.input.input_unmount = (function reagent$impl$input$input_unmount(this$){
return (this$.cljsInputLive = null);
});
reagent.impl.input.input_component_QMARK_ = (function reagent$impl$input$input_component_QMARK_(x){
var G__9276 = x;
switch (G__9276) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.input.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.input.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.input.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,component,jsprops,first_child,compiler){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.input.input_render_setup.call(null,this$,jsprops);

return reagent.impl.protocols.make_element.call(null,compiler,argv,component,jsprops,first_child);
})], null);

//# sourceMappingURL=input.js.map
