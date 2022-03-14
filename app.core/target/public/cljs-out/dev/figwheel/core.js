// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__12276_SHARP_){
var k = f.call(null,p1__12276_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12277){
var vec__12278 = p__12277;
var k = cljs.core.nth.call(null,vec__12278,(0),null);
var v = cljs.core.nth.call(null,vec__12278,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12282 = arguments.length;
var i__4865__auto___12283 = (0);
while(true){
if((i__4865__auto___12283 < len__4864__auto___12282)){
args__4870__auto__.push((arguments[i__4865__auto___12283]));

var G__12284 = (i__4865__auto___12283 + (1));
i__4865__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq12281){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12281));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__12287){
var map__12288 = p__12287;
var map__12288__$1 = cljs.core.__destructure_map.call(null,map__12288);
var message = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__12288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__12286_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12286_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__12285_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__12285_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__12290){
var map__12291 = p__12290;
var map__12291__$1 = cljs.core.__destructure_map.call(null,map__12291);
var message_data = map__12291__$1;
var message = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__12292 = file_excerpt;
var map__12292__$1 = cljs.core.__destructure_map.call(null,map__12292);
var start_line = cljs.core.get.call(null,map__12292__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__12292__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__12292__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__12293 = cljs.core.split_with.call(null,(function (p1__12289_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__12289_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__12293,(0),null);
var end = cljs.core.nth.call(null,vec__12293,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__12296){
var map__12297 = p__12296;
var map__12297__$1 = cljs.core.__destructure_map.call(null,map__12297);
var file = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__12298 = "";
var G__12298__$1 = (cljs.core.truth_(file)?[G__12298,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__12298);
var G__12298__$2 = (cljs.core.truth_(line)?[G__12298__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__12298__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__12298__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__12298__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_12356 = (new goog.debug.Console());
var G__12305_12357 = c_12356.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__12305_12357,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__12305_12357,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_12356);

}

var temp__5753__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__12306 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__12306,"data",(function (){var or__4253__auto__ = data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__12306;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4251__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4251__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4251__auto__;
}
});

var last_reload_timestamp_12358 = cljs.core.atom.call(null,(0));
var promise_chain_12359 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
var and__4251__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_12358) < ts);
if(and__4251__auto__){
return ts;
} else {
return and__4251__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_12358,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_12359.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__12307 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__12308 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__12308);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__12309 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__12310 = null;
var count__12311 = (0);
var i__12312 = (0);
while(true){
if((i__12312 < count__12311)){
var w = cljs.core._nth.call(null,chunk__12310,i__12312);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12360 = seq__12309;
var G__12361 = chunk__12310;
var G__12362 = count__12311;
var G__12363 = (i__12312 + (1));
seq__12309 = G__12360;
chunk__12310 = G__12361;
count__12311 = G__12362;
i__12312 = G__12363;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__12309);
if(temp__5753__auto__){
var seq__12309__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12309__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12309__$1);
var G__12364 = cljs.core.chunk_rest.call(null,seq__12309__$1);
var G__12365 = c__4679__auto__;
var G__12366 = cljs.core.count.call(null,c__4679__auto__);
var G__12367 = (0);
seq__12309 = G__12364;
chunk__12310 = G__12365;
count__12311 = G__12366;
i__12312 = G__12367;
continue;
} else {
var w = cljs.core.first.call(null,seq__12309__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12368 = cljs.core.next.call(null,seq__12309__$1);
var G__12369 = null;
var G__12370 = (0);
var G__12371 = (0);
seq__12309 = G__12368;
chunk__12310 = G__12369;
count__12311 = G__12370;
i__12312 = G__12371;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__12307);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_12359.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__12313 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__12314 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__12314);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__12313);
}}));
} else {
return promise_chain_12359.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4251__auto____$1){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12372 = arguments.length;
var i__4865__auto___12373 = (0);
while(true){
if((i__4865__auto___12373 < len__4864__auto___12372)){
args__4870__auto__.push((arguments[i__4865__auto___12373]));

var G__12374 = (i__4865__auto___12373 + (1));
i__4865__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__12317){
var vec__12318 = p__12317;
var n = cljs.core.nth.call(null,vec__12318,(0),null);
var mdata = cljs.core.nth.call(null,vec__12318,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__12321 = cljs.core.seq.call(null,hooks);
var chunk__12322 = null;
var count__12323 = (0);
var i__12324 = (0);
while(true){
if((i__12324 < count__12323)){
var vec__12333 = cljs.core._nth.call(null,chunk__12322,i__12324);
var n = cljs.core.nth.call(null,vec__12333,(0),null);
var f = cljs.core.nth.call(null,vec__12333,(1),null);
var temp__5751__auto___12375 = cljs.core.reduce.call(null,((function (seq__12321,chunk__12322,count__12323,i__12324,vec__12333,n,f,hooks){
return (function (p1__12299_SHARP_,p2__12300_SHARP_){
if(cljs.core.truth_(p1__12299_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__12299_SHARP_,p2__12300_SHARP_);
} else {
return null;
}
});})(seq__12321,chunk__12322,count__12323,i__12324,vec__12333,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___12375)){
var hook_12376 = temp__5751__auto___12375;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_12376,args);
}catch (e12336){if((e12336 instanceof Error)){
var e_12377 = e12336;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_12377);
} else {
throw e12336;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12378 = seq__12321;
var G__12379 = chunk__12322;
var G__12380 = count__12323;
var G__12381 = (i__12324 + (1));
seq__12321 = G__12378;
chunk__12322 = G__12379;
count__12323 = G__12380;
i__12324 = G__12381;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__12321);
if(temp__5753__auto__){
var seq__12321__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12321__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12321__$1);
var G__12382 = cljs.core.chunk_rest.call(null,seq__12321__$1);
var G__12383 = c__4679__auto__;
var G__12384 = cljs.core.count.call(null,c__4679__auto__);
var G__12385 = (0);
seq__12321 = G__12382;
chunk__12322 = G__12383;
count__12323 = G__12384;
i__12324 = G__12385;
continue;
} else {
var vec__12337 = cljs.core.first.call(null,seq__12321__$1);
var n = cljs.core.nth.call(null,vec__12337,(0),null);
var f = cljs.core.nth.call(null,vec__12337,(1),null);
var temp__5751__auto___12386 = cljs.core.reduce.call(null,((function (seq__12321,chunk__12322,count__12323,i__12324,vec__12337,n,f,seq__12321__$1,temp__5753__auto__,hooks){
return (function (p1__12299_SHARP_,p2__12300_SHARP_){
if(cljs.core.truth_(p1__12299_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__12299_SHARP_,p2__12300_SHARP_);
} else {
return null;
}
});})(seq__12321,chunk__12322,count__12323,i__12324,vec__12337,n,f,seq__12321__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___12386)){
var hook_12387 = temp__5751__auto___12386;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_12387,args);
}catch (e12340){if((e12340 instanceof Error)){
var e_12388 = e12340;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_12388);
} else {
throw e12340;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12389 = cljs.core.next.call(null,seq__12321__$1);
var G__12390 = null;
var G__12391 = (0);
var G__12392 = (0);
seq__12321 = G__12389;
chunk__12322 = G__12390;
count__12323 = G__12391;
i__12324 = G__12392;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq12315){
var G__12316 = cljs.core.first.call(null,seq12315);
var seq12315__$1 = cljs.core.next.call(null,seq12315);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12316,seq12315__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12341){
var vec__12342 = p__12341;
var k = cljs.core.nth.call(null,vec__12342,(0),null);
var v = cljs.core.nth.call(null,vec__12342,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__12301_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__12301_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__12301_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__12302_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__12302_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4251__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4251__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__12303_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__12303_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__12345_12393 = cljs.core.seq.call(null,to_reload);
var chunk__12346_12394 = null;
var count__12347_12395 = (0);
var i__12348_12396 = (0);
while(true){
if((i__12348_12396 < count__12347_12395)){
var ns_12397 = cljs.core._nth.call(null,chunk__12346_12394,i__12348_12396);
goog.require(cljs.core.name.call(null,ns_12397),true);


var G__12398 = seq__12345_12393;
var G__12399 = chunk__12346_12394;
var G__12400 = count__12347_12395;
var G__12401 = (i__12348_12396 + (1));
seq__12345_12393 = G__12398;
chunk__12346_12394 = G__12399;
count__12347_12395 = G__12400;
i__12348_12396 = G__12401;
continue;
} else {
var temp__5753__auto___12402 = cljs.core.seq.call(null,seq__12345_12393);
if(temp__5753__auto___12402){
var seq__12345_12403__$1 = temp__5753__auto___12402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12345_12403__$1)){
var c__4679__auto___12404 = cljs.core.chunk_first.call(null,seq__12345_12403__$1);
var G__12405 = cljs.core.chunk_rest.call(null,seq__12345_12403__$1);
var G__12406 = c__4679__auto___12404;
var G__12407 = cljs.core.count.call(null,c__4679__auto___12404);
var G__12408 = (0);
seq__12345_12393 = G__12405;
chunk__12346_12394 = G__12406;
count__12347_12395 = G__12407;
i__12348_12396 = G__12408;
continue;
} else {
var ns_12409 = cljs.core.first.call(null,seq__12345_12403__$1);
goog.require(cljs.core.name.call(null,ns_12409),true);


var G__12410 = cljs.core.next.call(null,seq__12345_12403__$1);
var G__12411 = null;
var G__12412 = (0);
var G__12413 = (0);
seq__12345_12393 = G__12410;
chunk__12346_12394 = G__12411;
count__12347_12395 = G__12412;
i__12348_12396 = G__12413;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_12414 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_12414);
} else {
setTimeout(after_reload_fn_12414,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__12349 = cljs.core.seq.call(null,warnings);
var chunk__12350 = null;
var count__12351 = (0);
var i__12352 = (0);
while(true){
if((i__12352 < count__12351)){
var warning = cljs.core._nth.call(null,chunk__12350,i__12352);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__12415 = seq__12349;
var G__12416 = chunk__12350;
var G__12417 = count__12351;
var G__12418 = (i__12352 + (1));
seq__12349 = G__12415;
chunk__12350 = G__12416;
count__12351 = G__12417;
i__12352 = G__12418;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__12349);
if(temp__5753__auto__){
var seq__12349__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12349__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12349__$1);
var G__12419 = cljs.core.chunk_rest.call(null,seq__12349__$1);
var G__12420 = c__4679__auto__;
var G__12421 = cljs.core.count.call(null,c__4679__auto__);
var G__12422 = (0);
seq__12349 = G__12419;
chunk__12350 = G__12420;
count__12351 = G__12421;
i__12352 = G__12422;
continue;
} else {
var warning = cljs.core.first.call(null,seq__12349__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__12423 = cljs.core.next.call(null,seq__12349__$1);
var G__12424 = null;
var G__12425 = (0);
var G__12426 = (0);
seq__12349 = G__12423;
chunk__12350 = G__12424;
count__12351 = G__12425;
i__12352 = G__12426;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__12353){
var map__12354 = p__12353;
var map__12354__$1 = cljs.core.__destructure_map.call(null,map__12354);
var exception_data = map__12354__$1;
var file = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__12304_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__12304_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__12355 = "Compile Exception - ";
var G__12355__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return message;
}
})())?[G__12355,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__12355);
if(cljs.core.truth_(file)){
return [G__12355__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__12355__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
