// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('devtools.formatters');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.util');
goog.require('devtools.context');
goog.require('devtools.formatters.core');
goog.require('goog.labs.userAgent.browser');
goog.scope(function(){
devtools.formatters.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var or__4253__auto__ = devtools.util.in_node_context_QMARK_.call(null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = devtools.formatters.goog$module$goog$labs$userAgent$browser.isChrome.call(null);
if(cljs.core.truth_(and__4251__auto__)){
return devtools.formatters.goog$module$goog$labs$userAgent$browser.isVersionOrHigher.call(null,(47));
} else {
return and__4251__auto__;
}
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
});

(devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true);

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter");

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
}));

/**
 * Positional factory function for devtools.formatters/CLJSDevtoolsFormatter.
 */
devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (devtools.context.get_root.call(null)["devtools"]["debug"][fn_name]);
}catch (e12476){var _ = e12476;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__5751__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__5751__auto__)){
var monitor_api_call = temp__5751__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12478 = arguments.length;
var i__4865__auto___12479 = (0);
while(true){
if((i__4865__auto___12479 < len__4864__auto___12478)){
args__4870__auto__.push((arguments[i__4865__auto___12479]));

var G__12480 = (i__4865__auto___12479 + (1));
i__4865__auto___12479 = G__12480;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__5751__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__5751__auto__)){
var log_exception = temp__5751__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
}));

(devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq12477){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12477));
}));

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__12481__delegate = function (args){
if(cljs.core.not.call(null,devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__12481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12482__i = 0, G__12482__a = new Array(arguments.length -  0);
while (G__12482__i < G__12482__a.length) {G__12482__a[G__12482__i] = arguments[G__12482__i + 0]; ++G__12482__i;}
  args = new cljs.core.IndexedSeq(G__12482__a,0,null);
} 
return G__12481__delegate.call(this,args);};
G__12481.cljs$lang$maxFixedArity = 0;
G__12481.cljs$lang$applyTo = (function (arglist__12483){
var args = cljs.core.seq(arglist__12483);
return G__12481__delegate(args);
});
G__12481.cljs$core$IFn$_invoke$arity$variadic = G__12481__delegate;
return G__12481;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__12485__delegate = function (args){
if(cljs.core.not.call(null,devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e12484){var e = e12484;
devtools.formatters.log_exception_if_avail.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

return null;
}}
};
var G__12485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12486__i = 0, G__12486__a = new Array(arguments.length -  0);
while (G__12486__i < G__12486__a.length) {G__12486__a[G__12486__i] = arguments[G__12486__i + 0]; ++G__12486__i;}
  args = new cljs.core.IndexedSeq(G__12486__a,0,null);
} 
return G__12485__delegate.call(this,args);};
G__12485.cljs$lang$maxFixedArity = 0;
G__12485.cljs$lang$applyTo = (function (arglist__12487){
var args = cljs.core.seq(arglist__12487);
return G__12485__delegate(args);
});
G__12485.cljs$core$IFn$_invoke$arity$variadic = G__12485__delegate;
return G__12485;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.formatters.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});
define_BANG_.call(null,"header",devtools.formatters.core.header_api_call);

define_BANG_.call(null,"hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_.call(null,"body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe.call(null).slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_.call(null,formatters);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (devtools.context.get_root.call(null)[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.formatters.is_ours_QMARK_,cljs.core.vec.call(null,devtools.util.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
return null;
} else {
(devtools.formatters._STAR_installed_STAR_ = true);

devtools.formatters.install_our_formatter_BANG_.call(null,devtools.formatters.build_cljs_formatter.call(null));

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
(devtools.formatters._STAR_installed_STAR_ = false);

return devtools.formatters.uninstall_our_formatters_BANG_.call(null);
} else {
return null;
}
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.formatters.is_ours_QMARK_,formatters));
});

//# sourceMappingURL=formatters.js.map
