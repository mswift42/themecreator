// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('devtools.formatters.printing');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
devtools.formatters.printing.markup_QMARK_ = (function devtools$formatters$printing$markup_QMARK_(value){
return new cljs.core.Keyword("devtools.formatters.printing","markup","devtools.formatters.printing/markup",-1990109186).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
});
devtools.formatters.printing.mark_as_markup = (function devtools$formatters$printing$mark_as_markup(value){
return cljs.core.with_meta.call(null,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("devtools.formatters.printing","markup","devtools.formatters.printing/markup",-1990109186),true], null));
});
devtools.formatters.printing.build_markup = (function devtools$formatters$printing$build_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12239 = arguments.length;
var i__4865__auto___12240 = (0);
while(true){
if((i__4865__auto___12240 < len__4864__auto___12239)){
args__4870__auto__.push((arguments[i__4865__auto___12240]));

var G__12241 = (i__4865__auto___12240 + (1));
i__4865__auto___12240 = G__12241;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic = (function (markup_db,fn_key,args){
var f = cljs.core.get.call(null,markup_db,fn_key);
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["missing markup method in markup-db: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_key)].join(''),"\n","f"].join('')));
}

return devtools.formatters.printing.mark_as_markup.call(null,cljs.core.apply.call(null,f,args));
}));

(devtools.formatters.printing.build_markup.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.printing.build_markup.cljs$lang$applyTo = (function (seq12236){
var G__12237 = cljs.core.first.call(null,seq12236);
var seq12236__$1 = cljs.core.next.call(null,seq12236);
var G__12238 = cljs.core.first.call(null,seq12236__$1);
var seq12236__$2 = cljs.core.next.call(null,seq12236__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12237,G__12238,seq12236__$2);
}));

devtools.formatters.printing.wrap_value_as_reference_if_needed = (function devtools$formatters$printing$wrap_value_as_reference_if_needed(markup_db,value){
if(cljs.core.truth_((function (){var or__4253__auto__ = devtools.formatters.helpers.directly_printable_QMARK_.call(null,value);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return devtools.formatters.printing.markup_QMARK_.call(null,value);
}
})())){
return value;
} else {
return devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"reference-surrogate","reference-surrogate",274031791),value);
}
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {devtools.formatters.printing.Object}
*/
devtools.formatters.printing.TemplateWriter = (function (group,markup_db){
this.group = group;
this.markup_db = markup_db;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devtools.formatters.printing.TemplateWriter.prototype.merge = (function (a){
var self__ = this;
var _ = this;
return (self__.group = cljs.core.concat.call(null,self__.group,a));
}));

(devtools.formatters.printing.TemplateWriter.prototype.get_group = (function (){
var self__ = this;
var _ = this;
return self__.group;
}));

(devtools.formatters.printing.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (self__.group = cljs.core.concat.call(null,self__.group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.printing.wrap_value_as_reference_if_needed.call(null,self__.markup_db,o)], null)));
}));

(devtools.formatters.printing.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(devtools.formatters.printing.TemplateWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"markup-db","markup-db",-1841597035,null)], null);
}));

(devtools.formatters.printing.TemplateWriter.cljs$lang$type = true);

(devtools.formatters.printing.TemplateWriter.cljs$lang$ctorStr = "devtools.formatters.printing/TemplateWriter");

(devtools.formatters.printing.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"devtools.formatters.printing/TemplateWriter");
}));

/**
 * Positional factory function for devtools.formatters.printing/TemplateWriter.
 */
devtools.formatters.printing.__GT_TemplateWriter = (function devtools$formatters$printing$__GT_TemplateWriter(group,markup_db){
return (new devtools.formatters.printing.TemplateWriter(group,markup_db));
});

devtools.formatters.printing.make_template_writer = (function devtools$formatters$printing$make_template_writer(markup_db){
return (new devtools.formatters.printing.TemplateWriter(cljs.core.PersistentVector.EMPTY,markup_db));
});
devtools.formatters.printing.already_reference_QMARK_ = (function devtools$formatters$printing$already_reference_QMARK_(group){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.first.call(null,group));
if(cljs.core.truth_(temp__5751__auto__)){
var tag = temp__5751__auto__;
return cljs.core._EQ_.call(null,tag,"reference");
} else {
return null;
}
});
devtools.formatters.printing.wrap_group_in_reference_if_needed = (function devtools$formatters$printing$wrap_group_in_reference_if_needed(group,obj,markup_db){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,devtools.formatters.printing.already_reference_QMARK_.call(null,group));
if(and__4251__auto__){
var or__4253__auto__ = devtools.formatters.helpers.expandable_QMARK_.call(null,obj);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return devtools.formatters.helpers.abbreviated_QMARK_.call(null,group);
}
} else {
return and__4251__auto__;
}
})())){
var expandable_markup = cljs.core.apply.call(null,devtools.formatters.printing.build_markup,markup_db,new cljs.core.Keyword(null,"expandable","expandable",-704609097),group);
var surrogate_markup = devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"raw-surrogate","raw-surrogate",904931181),obj,expandable_markup,new cljs.core.Keyword(null,"target","target",253001721));
var reference_markup = devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"reference","reference",-1711695023),surrogate_markup);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference_markup], null);
} else {
return group;
}
});
devtools.formatters.printing.wrap_group_in_circular_warning_if_needed = (function devtools$formatters$printing$wrap_group_in_circular_warning_if_needed(group,markup_db,circular_QMARK_){
if(cljs.core.truth_(circular_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,devtools.formatters.printing.build_markup,markup_db,new cljs.core.Keyword(null,"circular-reference","circular-reference",970308727),group)], null);
} else {
return group;
}
});
devtools.formatters.printing.wrap_group_in_meta_if_needed = (function devtools$formatters$printing$wrap_group_in_meta_if_needed(group,value,markup_db){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-metas","render-metas",1141294116),value,(function (p1__12242_SHARP_){
return (!((cljs.core.meta.call(null,p1__12242_SHARP_) == null)));
})))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"meta-wrapper","meta-wrapper",-1989845587).cljs$core$IFn$_invoke$arity$1(markup_db),cljs.core.meta.call(null,value)),group)], null);
} else {
return group;
}
});
devtools.formatters.printing.detect_edge_case_and_patch_it = (function devtools$formatters$printing$detect_edge_case_and_patch_it(group,obj,markup_db){
if(((((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (((cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(0)),"#object[")) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(4)),"\"]")))))) || (((((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (((cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(0)),"#object[")) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(4)),"]")))))) || (((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (((cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(0)),"#object[")) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(2)),"]")))))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"native-reference","native-reference",-2013708658),obj)], null);
} else {
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (((cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(0)),"#<")) && (((cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),cljs.core.nth.call(null,group,(1)))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,group,(2)),">")))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,group,(0)),devtools.formatters.printing.build_markup.call(null,new cljs.core.Keyword(null,"native-reference","native-reference",-2013708658),obj),cljs.core.nth.call(null,group,(2))], null);
} else {
return group;

}
}
});
devtools.formatters.printing.wrap_group_with_path_annotation = (function devtools$formatters$printing$wrap_group_with_path_annotation(group,path_info){
if(cljs.core.truth_((function (){var and__4251__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512));
if(cljs.core.truth_(and__4251__auto__)){
return (!((path_info == null)));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["annotation",new cljs.core.PersistentArrayMap(null, 1, ["path",cljs.core.into_array.call(null,path_info)], null)], null),group)], null);
} else {
return group;
}
});
devtools.formatters.printing.post_process_printed_output = (function devtools$formatters$printing$post_process_printed_output(output_group,obj,markup_db,circular_QMARK_,path_info){
return devtools.formatters.printing.wrap_group_with_path_annotation.call(null,devtools.formatters.printing.wrap_group_in_meta_if_needed.call(null,devtools.formatters.printing.wrap_group_in_circular_warning_if_needed.call(null,devtools.formatters.printing.wrap_group_in_reference_if_needed.call(null,devtools.formatters.printing.detect_edge_case_and_patch_it.call(null,output_group,obj,markup_db),obj,markup_db),markup_db,circular_QMARK_),obj,markup_db),path_info);
});
devtools.formatters.printing.alt_printer_job = (function devtools$formatters$printing$alt_printer_job(obj,writer,opts){
var map__12243 = opts;
var map__12243__$1 = cljs.core.__destructure_map.call(null,map__12243);
var markup_db = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"markup-db","markup-db",812838734));
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){try{if((!((obj == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
}
}catch (e12244){var _e__11473__auto__ = e12244;
return false;
}})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
try{if((!((obj == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.devtools$protocols$IFormat$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,obj);
}
}catch (e12246){var _e__11473__auto__ = e12246;
return false;
}}
})())){
return cljs.core._write.call(null,writer,devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"reference","reference",-1711695023),obj));
} else {
var temp__5751__auto__ = devtools.formatters.printing.build_markup.call(null,markup_db,new cljs.core.Keyword(null,"atomic","atomic",-120459460),obj);
if(cljs.core.truth_(temp__5751__auto__)){
var atomic_markup = temp__5751__auto__;
return cljs.core._write.call(null,writer,atomic_markup);
} else {
var default_impl = new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995).cljs$core$IFn$_invoke$arity$1(opts);
var inner_opts = ((cljs.core._EQ_.call(null,cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(0)):opts);
return default_impl.call(null,obj,writer,inner_opts);
}
}
});
devtools.formatters.printing.alt_printer_impl = (function devtools$formatters$printing$alt_printer_impl(obj,writer,opts){
var _STAR_current_state_STAR__orig_val__12248 = devtools.formatters.state._STAR_current_state_STAR_;
var _STAR_current_state_STAR__temp_val__12249 = devtools.formatters.state.get_current_state.call(null);
(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__temp_val__12249);

try{devtools.formatters.state.add_object_to_current_path_info_BANG_.call(null,obj);

var map__12250 = opts;
var map__12250__$1 = cljs.core.__destructure_map.call(null,map__12250);
var markup_db = cljs.core.get.call(null,map__12250__$1,new cljs.core.Keyword(null,"markup-db","markup-db",812838734));
var circular_QMARK_ = devtools.formatters.state.is_circular_QMARK_.call(null,obj);
var inner_writer = devtools.formatters.printing.make_template_writer.call(null,new cljs.core.Keyword(null,"markup-db","markup-db",812838734).cljs$core$IFn$_invoke$arity$1(opts));
var path_info = devtools.formatters.state.get_current_path_info.call(null);
devtools.formatters.state.push_object_to_current_history_BANG_.call(null,obj);

devtools.formatters.printing.alt_printer_job.call(null,obj,inner_writer,opts);

return writer.merge(devtools.formatters.printing.post_process_printed_output.call(null,inner_writer.get_group(),obj,markup_db,circular_QMARK_,path_info));
}finally {(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__orig_val__12248);
}});
devtools.formatters.printing.managed_print = (function devtools$formatters$printing$managed_print(tag,markup_db,printer){
var writer = devtools.formatters.printing.make_template_writer.call(null,markup_db);
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),devtools.formatters.printing.alt_printer_impl,new cljs.core.Keyword(null,"markup-db","markup-db",812838734),markup_db,new cljs.core.Keyword(null,"print-length","print-length",1931866356),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-header-elements","max-header-elements",713629864)),new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935))], null);
var job_fn = (function (){
return printer.call(null,writer,opts);
});
var temp__5751__auto___12254 = devtools.formatters.state.get_managed_print_level.call(null);
if(cljs.core.truth_(temp__5751__auto___12254)){
var managed_print_level_12255 = temp__5751__auto___12254;
var _STAR_print_level_STAR__orig_val__12252_12256 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__12253_12257 = managed_print_level_12255;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__12253_12257);

try{devtools.formatters.state.update_current_state_BANG_.call(null,(function (p1__12251_SHARP_){
return devtools.formatters.state.set_managed_print_level.call(null,p1__12251_SHARP_,null);
}));

job_fn.call(null);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__12252_12256);
}} else {
job_fn.call(null);
}

return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.prefs.pref.call(null,tag)], null),writer.get_group());
});
devtools.formatters.printing.managed_print_via_writer = (function devtools$formatters$printing$managed_print_via_writer(value,tag,markup_db){
return devtools.formatters.printing.managed_print.call(null,tag,markup_db,(function (writer,opts){
return cljs.core.pr_seq_writer.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,opts);
}));
});
devtools.formatters.printing.managed_print_via_protocol = (function devtools$formatters$printing$managed_print_via_protocol(value,tag,markup_db){
return devtools.formatters.printing.managed_print.call(null,tag,markup_db,(function (writer,opts){
return cljs.core._pr_writer.call(null,value,writer,opts);
}));
});

//# sourceMappingURL=printing.js.map
