// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6351_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6351_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6356 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6357 = null;
var count__6358 = (0);
var i__6359 = (0);
while(true){
if((i__6359 < count__6358)){
var s = cljs.core._nth.call(null,chunk__6357,i__6359);
var temp__4425__auto___6360 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6360)){
var sheet_6361 = temp__4425__auto___6360;
var temp__4425__auto___6362__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6361.href,changed);
if(cljs.core.truth_(temp__4425__auto___6362__$1)){
var href_uri_6363 = temp__4425__auto___6362__$1;
sheet_6361.ownerNode.href = href_uri_6363.makeUnique().toString();
} else {
}
} else {
}

var G__6364 = seq__6356;
var G__6365 = chunk__6357;
var G__6366 = count__6358;
var G__6367 = (i__6359 + (1));
seq__6356 = G__6364;
chunk__6357 = G__6365;
count__6358 = G__6366;
i__6359 = G__6367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6356);
if(temp__4425__auto__){
var seq__6356__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6356__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__6356__$1);
var G__6368 = cljs.core.chunk_rest.call(null,seq__6356__$1);
var G__6369 = c__5789__auto__;
var G__6370 = cljs.core.count.call(null,c__5789__auto__);
var G__6371 = (0);
seq__6356 = G__6368;
chunk__6357 = G__6369;
count__6358 = G__6370;
i__6359 = G__6371;
continue;
} else {
var s = cljs.core.first.call(null,seq__6356__$1);
var temp__4425__auto___6372__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6372__$1)){
var sheet_6373 = temp__4425__auto___6372__$1;
var temp__4425__auto___6374__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6373.href,changed);
if(cljs.core.truth_(temp__4425__auto___6374__$2)){
var href_uri_6375 = temp__4425__auto___6374__$2;
sheet_6373.ownerNode.href = href_uri_6375.makeUnique().toString();
} else {
}
} else {
}

var G__6376 = cljs.core.next.call(null,seq__6356__$1);
var G__6377 = null;
var G__6378 = (0);
var G__6379 = (0);
seq__6356 = G__6376;
chunk__6357 = G__6377;
count__6358 = G__6378;
i__6359 = G__6379;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6384 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6385 = null;
var count__6386 = (0);
var i__6387 = (0);
while(true){
if((i__6387 < count__6386)){
var s = cljs.core._nth.call(null,chunk__6385,i__6387);
var temp__4425__auto___6388 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6388)){
var image_6389 = temp__4425__auto___6388;
var temp__4425__auto___6390__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6389.src,changed);
if(cljs.core.truth_(temp__4425__auto___6390__$1)){
var href_uri_6391 = temp__4425__auto___6390__$1;
image_6389.src = href_uri_6391.makeUnique().toString();
} else {
}
} else {
}

var G__6392 = seq__6384;
var G__6393 = chunk__6385;
var G__6394 = count__6386;
var G__6395 = (i__6387 + (1));
seq__6384 = G__6392;
chunk__6385 = G__6393;
count__6386 = G__6394;
i__6387 = G__6395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6384);
if(temp__4425__auto__){
var seq__6384__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6384__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__6384__$1);
var G__6396 = cljs.core.chunk_rest.call(null,seq__6384__$1);
var G__6397 = c__5789__auto__;
var G__6398 = cljs.core.count.call(null,c__5789__auto__);
var G__6399 = (0);
seq__6384 = G__6396;
chunk__6385 = G__6397;
count__6386 = G__6398;
i__6387 = G__6399;
continue;
} else {
var s = cljs.core.first.call(null,seq__6384__$1);
var temp__4425__auto___6400__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6400__$1)){
var image_6401 = temp__4425__auto___6400__$1;
var temp__4425__auto___6402__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6401.src,changed);
if(cljs.core.truth_(temp__4425__auto___6402__$2)){
var href_uri_6403 = temp__4425__auto___6402__$2;
image_6401.src = href_uri_6403.makeUnique().toString();
} else {
}
} else {
}

var G__6404 = cljs.core.next.call(null,seq__6384__$1);
var G__6405 = null;
var G__6406 = (0);
var G__6407 = (0);
seq__6384 = G__6404;
chunk__6385 = G__6405;
count__6386 = G__6406;
i__6387 = G__6407;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6410){
var map__6413 = p__6410;
var map__6413__$1 = ((((!((map__6413 == null)))?((((map__6413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6413):map__6413);
var on_jsload = cljs.core.get.call(null,map__6413__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6413,map__6413__$1,on_jsload){
return (function (p1__6408_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6408_SHARP_,".js");
});})(map__6413,map__6413__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6413,map__6413__$1,on_jsload){
return (function (p1__6409_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6409_SHARP_).makeUnique());
});})(js_files,map__6413,map__6413__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6413,map__6413__$1,on_jsload){
return (function() { 
var G__6415__delegate = function (_){
return on_jsload.call(null);
};
var G__6415 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6416__i = 0, G__6416__a = new Array(arguments.length -  0);
while (G__6416__i < G__6416__a.length) {G__6416__a[G__6416__i] = arguments[G__6416__i + 0]; ++G__6416__i;}
  _ = new cljs.core.IndexedSeq(G__6416__a,0);
} 
return G__6415__delegate.call(this,_);};
G__6415.cljs$lang$maxFixedArity = 0;
G__6415.cljs$lang$applyTo = (function (arglist__6417){
var _ = cljs.core.seq(arglist__6417);
return G__6415__delegate(_);
});
G__6415.cljs$core$IFn$_invoke$arity$variadic = G__6415__delegate;
return G__6415;
})()
;})(js_files,map__6413,map__6413__$1,on_jsload))
,((function (js_files,map__6413,map__6413__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6413,map__6413__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6422_6426 = cljs.core.seq.call(null,things_to_log);
var chunk__6423_6427 = null;
var count__6424_6428 = (0);
var i__6425_6429 = (0);
while(true){
if((i__6425_6429 < count__6424_6428)){
var t_6430 = cljs.core._nth.call(null,chunk__6423_6427,i__6425_6429);
console.log(t_6430);

var G__6431 = seq__6422_6426;
var G__6432 = chunk__6423_6427;
var G__6433 = count__6424_6428;
var G__6434 = (i__6425_6429 + (1));
seq__6422_6426 = G__6431;
chunk__6423_6427 = G__6432;
count__6424_6428 = G__6433;
i__6425_6429 = G__6434;
continue;
} else {
var temp__4425__auto___6435 = cljs.core.seq.call(null,seq__6422_6426);
if(temp__4425__auto___6435){
var seq__6422_6436__$1 = temp__4425__auto___6435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6422_6436__$1)){
var c__5789__auto___6437 = cljs.core.chunk_first.call(null,seq__6422_6436__$1);
var G__6438 = cljs.core.chunk_rest.call(null,seq__6422_6436__$1);
var G__6439 = c__5789__auto___6437;
var G__6440 = cljs.core.count.call(null,c__5789__auto___6437);
var G__6441 = (0);
seq__6422_6426 = G__6438;
chunk__6423_6427 = G__6439;
count__6424_6428 = G__6440;
i__6425_6429 = G__6441;
continue;
} else {
var t_6442 = cljs.core.first.call(null,seq__6422_6436__$1);
console.log(t_6442);

var G__6443 = cljs.core.next.call(null,seq__6422_6436__$1);
var G__6444 = null;
var G__6445 = (0);
var G__6446 = (0);
seq__6422_6426 = G__6443;
chunk__6423_6427 = G__6444;
count__6424_6428 = G__6445;
i__6425_6429 = G__6446;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6448 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6448,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6448);

adzerk.boot_reload.reload.reload_css.call(null,G__6448);

adzerk.boot_reload.reload.reload_img.call(null,G__6448);

return G__6448;
});

//# sourceMappingURL=reload.js.map