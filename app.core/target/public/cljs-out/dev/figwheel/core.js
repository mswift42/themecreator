// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
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
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__33493_SHARP_){
var k = f.call(null,p1__33493_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33494){
var vec__33495 = p__33494;
var k = cljs.core.nth.call(null,vec__33495,(0),null);
var v = cljs.core.nth.call(null,vec__33495,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33499 = arguments.length;
var i__4731__auto___33500 = (0);
while(true){
if((i__4731__auto___33500 < len__4730__auto___33499)){
args__4736__auto__.push((arguments[i__4731__auto___33500]));

var G__33501 = (i__4731__auto___33500 + (1));
i__4731__auto___33500 = G__33501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq33498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33498));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__33504){
var map__33505 = p__33504;
var map__33505__$1 = (((((!((map__33505 == null))))?(((((map__33505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33505):map__33505);
var message = cljs.core.get.call(null,map__33505__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__33505__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__33505,map__33505__$1,message,column){
return (function (p1__33503_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33503_SHARP_], null)));
});})(map__33505,map__33505__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__33505,map__33505__$1,message,column){
return (function (p1__33502_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__33502_SHARP_);
});})(map__33505,map__33505__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__33508){
var map__33509 = p__33508;
var map__33509__$1 = (((((!((map__33509 == null))))?(((((map__33509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33509):map__33509);
var message_data = map__33509__$1;
var message = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__33511 = file_excerpt;
var map__33511__$1 = (((((!((map__33511 == null))))?(((((map__33511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33511):map__33511);
var start_line = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__33511,map__33511__$1,start_line,path,excerpt,map__33509,map__33509__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__33511,map__33511__$1,start_line,path,excerpt,map__33509,map__33509__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__33512 = cljs.core.split_with.call(null,((function (map__33511,map__33511__$1,start_line,path,excerpt,lines,map__33509,map__33509__$1,message_data,message,line,column,file_excerpt){
return (function (p1__33507_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__33507_SHARP_));
});})(map__33511,map__33511__$1,start_line,path,excerpt,lines,map__33509,map__33509__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__33512,(0),null);
var end = cljs.core.nth.call(null,vec__33512,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__33516){
var map__33517 = p__33516;
var map__33517__$1 = (((((!((map__33517 == null))))?(((((map__33517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33517):map__33517);
var file = cljs.core.get.call(null,map__33517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33519 = "";
var G__33519__$1 = (cljs.core.truth_(file)?[G__33519,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33519);
var G__33519__$2 = (cljs.core.truth_(line)?[G__33519__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33519__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__33519__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33519__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_33574 = (new goog.debug.Console());
var G__33526_33575 = c_33574.getFormatter();
goog.object.set(G__33526_33575,"showAbsoluteTime",false);

goog.object.set(G__33526_33575,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_33574);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
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
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
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
return figwheel.core.event_target.dispatchEvent((function (){var G__33527 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__33527,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__33527;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_33576 = cljs.core.atom.call(null,(0));
var promise_chain_33577 = (new goog.Promise(((function (last_reload_timestamp_33576){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_33576))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_33576,promise_chain_33577){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_33576) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_33576,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_33577.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__33528 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__33529 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__33529;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__33528,_STAR_inline_code_message_max_column_STAR__temp_val__33529,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577){
return (function (){
var seq__33530 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__33531 = null;
var count__33532 = (0);
var i__33533 = (0);
while(true){
if((i__33533 < count__33532)){
var w = cljs.core._nth.call(null,chunk__33531,i__33533);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__33578 = seq__33530;
var G__33579 = chunk__33531;
var G__33580 = count__33532;
var G__33581 = (i__33533 + (1));
seq__33530 = G__33578;
chunk__33531 = G__33579;
count__33532 = G__33580;
i__33533 = G__33581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33530);
if(temp__5735__auto__){
var seq__33530__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33530__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33530__$1);
var G__33582 = cljs.core.chunk_rest.call(null,seq__33530__$1);
var G__33583 = c__4550__auto__;
var G__33584 = cljs.core.count.call(null,c__4550__auto__);
var G__33585 = (0);
seq__33530 = G__33582;
chunk__33531 = G__33583;
count__33532 = G__33584;
i__33533 = G__33585;
continue;
} else {
var w = cljs.core.first.call(null,seq__33530__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__33586 = cljs.core.next.call(null,seq__33530__$1);
var G__33587 = null;
var G__33588 = (0);
var G__33589 = (0);
seq__33530 = G__33586;
chunk__33531 = G__33587;
count__33532 = G__33588;
i__33533 = G__33589;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__33528,_STAR_inline_code_message_max_column_STAR__temp_val__33529,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__33528;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_33577.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__33534 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__33535 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__33535;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__33534;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577))
);
} else {
return promise_chain_33577.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_33576,promise_chain_33577))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_33576,promise_chain_33577))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33590 = arguments.length;
var i__4731__auto___33591 = (0);
while(true){
if((i__4731__auto___33591 < len__4730__auto___33590)){
args__4736__auto__.push((arguments[i__4731__auto___33591]));

var G__33592 = (i__4731__auto___33591 + (1));
i__4731__auto___33591 = G__33592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__33538){
var vec__33539 = p__33538;
var n = cljs.core.nth.call(null,vec__33539,(0),null);
var mdata = cljs.core.nth.call(null,vec__33539,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__33542 = cljs.core.seq.call(null,hooks);
var chunk__33543 = null;
var count__33544 = (0);
var i__33545 = (0);
while(true){
if((i__33545 < count__33544)){
var vec__33552 = cljs.core._nth.call(null,chunk__33543,i__33545);
var n = cljs.core.nth.call(null,vec__33552,(0),null);
var f = cljs.core.nth.call(null,vec__33552,(1),null);
var temp__5733__auto___33593 = cljs.core.reduce.call(null,((function (seq__33542,chunk__33543,count__33544,i__33545,vec__33552,n,f,hooks){
return (function (p1__33520_SHARP_,p2__33521_SHARP_){
if(cljs.core.truth_(p1__33520_SHARP_)){
return goog.object.get(p1__33520_SHARP_,p2__33521_SHARP_);
} else {
return null;
}
});})(seq__33542,chunk__33543,count__33544,i__33545,vec__33552,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___33593)){
var hook_33594 = temp__5733__auto___33593;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_33594,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__33595 = seq__33542;
var G__33596 = chunk__33543;
var G__33597 = count__33544;
var G__33598 = (i__33545 + (1));
seq__33542 = G__33595;
chunk__33543 = G__33596;
count__33544 = G__33597;
i__33545 = G__33598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33542);
if(temp__5735__auto__){
var seq__33542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33542__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33542__$1);
var G__33599 = cljs.core.chunk_rest.call(null,seq__33542__$1);
var G__33600 = c__4550__auto__;
var G__33601 = cljs.core.count.call(null,c__4550__auto__);
var G__33602 = (0);
seq__33542 = G__33599;
chunk__33543 = G__33600;
count__33544 = G__33601;
i__33545 = G__33602;
continue;
} else {
var vec__33555 = cljs.core.first.call(null,seq__33542__$1);
var n = cljs.core.nth.call(null,vec__33555,(0),null);
var f = cljs.core.nth.call(null,vec__33555,(1),null);
var temp__5733__auto___33603 = cljs.core.reduce.call(null,((function (seq__33542,chunk__33543,count__33544,i__33545,vec__33555,n,f,seq__33542__$1,temp__5735__auto__,hooks){
return (function (p1__33520_SHARP_,p2__33521_SHARP_){
if(cljs.core.truth_(p1__33520_SHARP_)){
return goog.object.get(p1__33520_SHARP_,p2__33521_SHARP_);
} else {
return null;
}
});})(seq__33542,chunk__33543,count__33544,i__33545,vec__33555,n,f,seq__33542__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___33603)){
var hook_33604 = temp__5733__auto___33603;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_33604,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__33605 = cljs.core.next.call(null,seq__33542__$1);
var G__33606 = null;
var G__33607 = (0);
var G__33608 = (0);
seq__33542 = G__33605;
chunk__33543 = G__33606;
count__33544 = G__33607;
i__33545 = G__33608;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq33536){
var G__33537 = cljs.core.first.call(null,seq33536);
var seq33536__$1 = cljs.core.next.call(null,seq33536);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33537,seq33536__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33558){
var vec__33559 = p__33558;
var k = cljs.core.nth.call(null,vec__33559,(0),null);
var v = cljs.core.nth.call(null,vec__33559,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__33522_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__33522_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__33522_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__33523_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__33523_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__33524_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__33524_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__33562_33609 = cljs.core.seq.call(null,to_reload);
var chunk__33563_33610 = null;
var count__33564_33611 = (0);
var i__33565_33612 = (0);
while(true){
if((i__33565_33612 < count__33564_33611)){
var ns_33613 = cljs.core._nth.call(null,chunk__33563_33610,i__33565_33612);
goog.require(cljs.core.name.call(null,ns_33613),true);


var G__33614 = seq__33562_33609;
var G__33615 = chunk__33563_33610;
var G__33616 = count__33564_33611;
var G__33617 = (i__33565_33612 + (1));
seq__33562_33609 = G__33614;
chunk__33563_33610 = G__33615;
count__33564_33611 = G__33616;
i__33565_33612 = G__33617;
continue;
} else {
var temp__5735__auto___33618 = cljs.core.seq.call(null,seq__33562_33609);
if(temp__5735__auto___33618){
var seq__33562_33619__$1 = temp__5735__auto___33618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33562_33619__$1)){
var c__4550__auto___33620 = cljs.core.chunk_first.call(null,seq__33562_33619__$1);
var G__33621 = cljs.core.chunk_rest.call(null,seq__33562_33619__$1);
var G__33622 = c__4550__auto___33620;
var G__33623 = cljs.core.count.call(null,c__4550__auto___33620);
var G__33624 = (0);
seq__33562_33609 = G__33621;
chunk__33563_33610 = G__33622;
count__33564_33611 = G__33623;
i__33565_33612 = G__33624;
continue;
} else {
var ns_33625 = cljs.core.first.call(null,seq__33562_33619__$1);
goog.require(cljs.core.name.call(null,ns_33625),true);


var G__33626 = cljs.core.next.call(null,seq__33562_33619__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33562_33609 = G__33626;
chunk__33563_33610 = G__33627;
count__33564_33611 = G__33628;
i__33565_33612 = G__33629;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_33630 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_33630);
} else {
setTimeout(after_reload_fn_33630,(100));
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

var seq__33566 = cljs.core.seq.call(null,warnings);
var chunk__33567 = null;
var count__33568 = (0);
var i__33569 = (0);
while(true){
if((i__33569 < count__33568)){
var warning = cljs.core._nth.call(null,chunk__33567,i__33569);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__33631 = seq__33566;
var G__33632 = chunk__33567;
var G__33633 = count__33568;
var G__33634 = (i__33569 + (1));
seq__33566 = G__33631;
chunk__33567 = G__33632;
count__33568 = G__33633;
i__33569 = G__33634;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33566);
if(temp__5735__auto__){
var seq__33566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33566__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33566__$1);
var G__33635 = cljs.core.chunk_rest.call(null,seq__33566__$1);
var G__33636 = c__4550__auto__;
var G__33637 = cljs.core.count.call(null,c__4550__auto__);
var G__33638 = (0);
seq__33566 = G__33635;
chunk__33567 = G__33636;
count__33568 = G__33637;
i__33569 = G__33638;
continue;
} else {
var warning = cljs.core.first.call(null,seq__33566__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__33639 = cljs.core.next.call(null,seq__33566__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__33566 = G__33639;
chunk__33567 = G__33640;
count__33568 = G__33641;
i__33569 = G__33642;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__33570){
var map__33571 = p__33570;
var map__33571__$1 = (((((!((map__33571 == null))))?(((((map__33571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33571):map__33571);
var exception_data = map__33571__$1;
var file = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__33571,map__33571__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__33571,map__33571__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__33571,map__33571__$1,exception_data,file,type,message){
return (function (p1__33525_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__33525_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__33571,map__33571__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__33573 = "Compile Exception - ";
var G__33573__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__33573,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__33573);
if(cljs.core.truth_(file)){
return [G__33573__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__33573__$1;
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
