// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('figwheel.repl.logging');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
goog.require('goog.object');
goog.scope(function(){
figwheel.main.css_reload.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_12634 = (new goog.debug.Console());
var G__12624_12635 = c_12634.getFormatter();
figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__12624_12635,"showAbsoluteTime",false);

figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__12624_12635,"showRelativeTime",false);


figwheel.main.css_reload.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_12634);

}

var temp__5753__auto__ = figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5753__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5753__auto__)){
var href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__12620_SHARP_,p2__12621_SHARP_){
if(cljs.core._EQ_.call(null,p1__12620_SHARP_,p2__12621_SHARP_)){
return p1__12620_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5751__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5751__auto__)){
var parent_stylesheet = temp__5751__auto__;
var G__12636 = parent_stylesheet;
stylesheet = G__12636;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__12625){
var map__12626 = p__12625;
var map__12626__$1 = cljs.core.__destructure_map.call(null,map__12626);
var match_length = cljs.core.get.call(null,map__12626__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__12626__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__12622_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__12622_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__12623_SHARP_){
return p1__12623_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5751__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__12627 = (new Event("figwheel.after-css-load",document.body));
figwheel.main.css_reload.goog$module$goog$object.add.call(null,G__12627,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__12627;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__12628_12637 = cljs.core.seq.call(null,files);
var chunk__12629_12638 = null;
var count__12630_12639 = (0);
var i__12631_12640 = (0);
while(true){
if((i__12631_12640 < count__12630_12639)){
var file_12641 = cljs.core._nth.call(null,chunk__12629_12638,i__12631_12640);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_12641);


var G__12642 = seq__12628_12637;
var G__12643 = chunk__12629_12638;
var G__12644 = count__12630_12639;
var G__12645 = (i__12631_12640 + (1));
seq__12628_12637 = G__12642;
chunk__12629_12638 = G__12643;
count__12630_12639 = G__12644;
i__12631_12640 = G__12645;
continue;
} else {
var temp__5753__auto___12646 = cljs.core.seq.call(null,seq__12628_12637);
if(temp__5753__auto___12646){
var seq__12628_12647__$1 = temp__5753__auto___12646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12628_12647__$1)){
var c__4679__auto___12648 = cljs.core.chunk_first.call(null,seq__12628_12647__$1);
var G__12649 = cljs.core.chunk_rest.call(null,seq__12628_12647__$1);
var G__12650 = c__4679__auto___12648;
var G__12651 = cljs.core.count.call(null,c__4679__auto___12648);
var G__12652 = (0);
seq__12628_12637 = G__12649;
chunk__12629_12638 = G__12650;
count__12630_12639 = G__12651;
i__12631_12640 = G__12652;
continue;
} else {
var file_12653 = cljs.core.first.call(null,seq__12628_12647__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_12653);


var G__12654 = cljs.core.next.call(null,seq__12628_12647__$1);
var G__12655 = null;
var G__12656 = (0);
var G__12657 = (0);
seq__12628_12637 = G__12654;
chunk__12629_12638 = G__12655;
count__12630_12639 = G__12656;
i__12631_12640 = G__12657;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
figwheel.repl.logging.info.call(null,figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5753__auto___12658 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5753__auto___12658)){
var not_loaded_12659 = temp__5753__auto___12658;
figwheel.repl.logging.warning.call(null,figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_12659)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__12632,files){
var map__12633 = p__12632;
var map__12633__$1 = cljs.core.__destructure_map.call(null,map__12633);
var on_cssload = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5753__auto__)){
var files_SINGLEQUOTE_ = temp__5753__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
