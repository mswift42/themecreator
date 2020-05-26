// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('app.db');
goog.require('app.components');
goog.require('app.colors');
goog.require('goog.net.XhrIo');
goog.require('goog.string');
app.app.log = (function app$app$log(s){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
app.app.parse_template = (function app$app$parse_template(templ){
return Mustache.parse(templ);
});
app.app.intellitemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.tmthemetemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.atomtemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.emacstemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.vimtemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.gnometerminaltemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.vscodetemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.vscodepackagejsontemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.vscodequickstarttemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.vscodereadmetemplate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
app.app.compile_template = (function app$app$compile_template(templ,varmap){
return Mustache.render(templ,cljs.core.clj__GT_js(varmap));
});
app.app.GET = (function app$app$GET(url,template){
var G__10476 = url;
var G__10477 = ((function (G__10476){
return (function (event){
return cljs.core.reset_BANG_(template,event.target.getResponse());
});})(G__10476))
;
return goog.net.XhrIo.send(G__10476,G__10477);
});
app.app.generate_template = (function app$app$generate_template(template){
return app.app.compile_template(template,app.colors.derive_colors_from_theme(cljs.core.deref(app.db.app_db)));
});
app.app.generate_template_intelli = (function app$app$generate_template_intelli(template){
return app.app.compile_template(template,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function app$app$generate_template_intelli_$_iter__10478(s__10479){
return (new cljs.core.LazySeq(null,(function (){
var s__10479__$1 = s__10479;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10479__$1);
if(temp__5735__auto__){
var s__10479__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10479__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10479__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10481 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10480 = (0);
while(true){
if((i__10480 < size__4522__auto__)){
var vec__10482 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10480);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(1),null);
cljs.core.chunk_append(b__10481,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));

var G__10488 = (i__10480 + (1));
i__10480 = G__10488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10481),app$app$generate_template_intelli_$_iter__10478(cljs.core.chunk_rest(s__10479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10481),null);
}
} else {
var vec__10485 = cljs.core.first(s__10479__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),app$app$generate_template_intelli_$_iter__10478(cljs.core.rest(s__10479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(app.colors.derive_colors_from_theme(cljs.core.deref(app.db.app_db)));
})()));
});
app.app.zip = (new JSZip());
app.app.save_zip_as_BANG_ = (function app$app$save_zip_as_BANG_(zip,filename){
return zip.generateAsync(({"type": "blob"})).catch((function (p1__10489_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10489_SHARP_], 0));
})).then((function (p1__10490_SHARP_){
return saveAs(p1__10490_SHARP_,filename);
}));
});
app.app.generate_templates_vscode = (function app$app$generate_templates_vscode(templates){
var zip_10495 = (new JSZip());

var seq__10491_10496 = cljs.core.seq(templates);
var chunk__10492_10497 = null;
var count__10493_10498 = (0);
var i__10494_10499 = (0);
while(true){
if((i__10494_10499 < count__10493_10498)){
var i_10500 = chunk__10492_10497.cljs$core$IIndexed$_nth$arity$2(null,i__10494_10499);
app.app.compile_template(i_10500,app.colors.derive_colors_from_theme(cljs.core.deref(app.db.app_db)));


var G__10501 = seq__10491_10496;
var G__10502 = chunk__10492_10497;
var G__10503 = count__10493_10498;
var G__10504 = (i__10494_10499 + (1));
seq__10491_10496 = G__10501;
chunk__10492_10497 = G__10502;
count__10493_10498 = G__10503;
i__10494_10499 = G__10504;
continue;
} else {
var temp__5735__auto___10505 = cljs.core.seq(seq__10491_10496);
if(temp__5735__auto___10505){
var seq__10491_10506__$1 = temp__5735__auto___10505;
if(cljs.core.chunked_seq_QMARK_(seq__10491_10506__$1)){
var c__4550__auto___10507 = cljs.core.chunk_first(seq__10491_10506__$1);
var G__10508 = cljs.core.chunk_rest(seq__10491_10506__$1);
var G__10509 = c__4550__auto___10507;
var G__10510 = cljs.core.count(c__4550__auto___10507);
var G__10511 = (0);
seq__10491_10496 = G__10508;
chunk__10492_10497 = G__10509;
count__10493_10498 = G__10510;
i__10494_10499 = G__10511;
continue;
} else {
var i_10512 = cljs.core.first(seq__10491_10506__$1);
app.app.compile_template(i_10512,app.colors.derive_colors_from_theme(cljs.core.deref(app.db.app_db)));


var G__10513 = cljs.core.next(seq__10491_10506__$1);
var G__10514 = null;
var G__10515 = (0);
var G__10516 = (0);
seq__10491_10496 = G__10513;
chunk__10492_10497 = G__10514;
count__10493_10498 = G__10515;
i__10494_10499 = G__10516;
continue;
}
} else {
}
}
break;
}

app.app.zip.folder("templates/vscode");

app.app.zip.folder("templates/vscode/README.md",cljs.core.deref(app.app.vscodereadmetemplate));

app.app.zip.folder("templates/vscode/package.json",cljs.core.deref(app.app.vscodepackagejsontemplate));

app.app.zip.folder("templates/vscode/vsc-extension-quickstart.md",cljs.core.deref(app.app.vscodequickstarttemplate));

app.app.zip.folder("templates/vscode/themes/vscode-color-theme.json",cljs.core.deref(app.app.vscodetemplate));

return app.app.zip;
});
app.app.download_vscode = (function app$app$download_vscode(filename){
var zip = app.app.generate_templates_vscode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(app.app.vscodetemplate)], null));
return app.app.save_zip_as_BANG_(zip,filename);
});
app.app.window_url = (function app$app$window_url(){
var or__4131__auto__ = window.URL;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return window.webkitURL;
}
});
app.app.create_blob = (function app$app$create_blob(data,id,filename){
var wu = app.app.window_url();
var blob = (new Blob([data]));
var templink = document.getElementById(id);
templink.href = wu.createObjectURL(blob);

var G__10517 = templink;
G__10517.setAttribute("download",filename);

return G__10517;
});
app.app.scroll_to_bottom = (function app$app$scroll_to_bottom(){
var wb = document.body.scrollHeight;
if((window.innerWidth >= (700))){
return window.scrollTo((0),wb);
} else {
return null;
}
});
app.app.template_download = (function app$app$template_download(id,title,filename,template){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$id,id,cljs.core.cst$kw$on_DASH_click,(function (){
return app.app.create_blob(app.app.generate_template(template),id,filename);
})], null),title], null)], null);
});
app.app.current_year = (function app$app$current_year(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear());
});
app.app.set_year = (function app$app$set_year(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,cljs.core.cst$kw$year,app.app.current_year());
});
app.app.template_download_intelli = (function app$app$template_download_intelli(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$id,"intellilink",cljs.core.cst$kw$on_DASH_click,(function (){
return app.app.create_blob(app.app.generate_template_intelli(cljs.core.deref(app.app.intellitemplate)),"intellilink",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),".icls"].join(''));
})], null),"IntelliJ"], null)], null);
});
app.app.template_download_vscode = (function app$app$template_download_vscode(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$id,"vscodelink",cljs.core.cst$kw$on_DASH_click,(function (){
return app.app.download_vscode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),".zip"].join(''));
})], null),"VSCode"], null)], null);
});
app.app.template_select_component = (function app$app$template_select_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$templatedrop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"templatedrop"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$on_DASH_click,(function (){
return app.app.scroll_to_bottom();
})], null),"Theme Download    ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$caret], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul_SHARP_downloadsel$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_labelledby,"templatedrop"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download_intelli], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"tmthemelink","Textmate",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),".tmTheme"].join(''),cljs.core.deref(app.app.tmthemetemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"emacslink","Emacs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),"-theme.el"].join(''),cljs.core.deref(app.app.emacstemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"vimlink","Vim",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),".vim"].join(''),cljs.core.deref(app.app.vimtemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"gnometerminallink","Gnome Terminal",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))),".sh"].join(''),cljs.core.deref(app.app.gnometerminaltemplate)], null)], null)], null);
});
app.app.store_component = (function app$app$store_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.button_component,"store theme",(function (){
return app.db.save_to_storage();
})], null);
});
app.app.color_components = (function app$app$color_components(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$colorcomponents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.name_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.author_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$mainbg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$mainfg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$builtin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$keyword], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$functionname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$variable], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$constant], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$comment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$warning], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,cljs.core.cst$kw$warning2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$butsection$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.inc_contrast_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.red_contrast_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.adjustbg_component], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_colors_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_colors_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_select_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.store_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)], null)], null);
});
app.app.preview_component = (function app$app$preview_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$col_DASH_lg_DASH_8$col_DASH_lg_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$previewcomponent,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(app.components.active_preview)], null)], null)], null)], null)], null);
});
app.app.navbar_component = (function app$app$navbar_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),(((screen.width < (1000)))?"TC":"ThemeCreator")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar$navbar_DASH_collapse,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.theme_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.language_select], null)], null)], null)], null);
});
app.app.theme_component = (function app$app$theme_component(){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null);

app.app.GET("app.core/resources/public/templates/intelli.txt",app.app.intellitemplate);

app.app.GET("app.core/resources/public/templates/tmtheme.txt",app.app.tmthemetemplate);

app.app.GET("app.core/resources/public/templates/emacs.txt",app.app.emacstemplate);

app.app.GET("app.core/resources/public/templates/vim.txt",app.app.vimtemplate);

app.app.GET("app.core/resources/public/templates/gnome-terminal.txt",app.app.gnometerminaltemplate);

app.app.GET("app.core/resources/public/templates/vscode/package.json",app.app.vscodepackagejsontemplate);

app.app.GET("app.core/resources/public/templates/vscode/vsc-extension-quickstart.md",app.app.vscodequickstarttemplate);

app.app.GET("app.core/resources/public/templates/vscode/README.md",app.app.vscodereadmetemplate);

app.app.GET("app.core/resources/public/templates/vscode/themes/vscode-color-theme.json",app.app.vscodetemplate);

app.app.set_year();

app.db.set_db_from_storage();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.color_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.preview_component], null)], null);
});
app.app.init = (function app$app$init(){
var G__10518_10522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null);
var G__10519_10523 = document.getElementById("navcontainer");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10518_10522,G__10519_10523) : reagent.core.render_component.call(null,G__10518_10522,G__10519_10523));

var G__10520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.theme_component], null);
var G__10521 = document.getElementById("mainapp");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10520,G__10521) : reagent.core.render_component.call(null,G__10520,G__10521));
});
