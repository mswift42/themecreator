// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.db');
goog.require('app.components');
goog.require('app.colors');
goog.require('cljsjs.mustache');
goog.require('cljsjs.jszip');
goog.require('cljsjs.filesaverjs');
goog.require('goog.net.XhrIo');
goog.require('goog.string');
app.app.log = (function app$app$log(s){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
app.app.parse_template = (function app$app$parse_template(templ){
return Mustache.parse(templ);
});
app.app.intellitemplate = reagent.core.atom.call(null,"");
app.app.tmthemetemplate = reagent.core.atom.call(null,"");
app.app.atomtemplate = reagent.core.atom.call(null,"");
app.app.emacstemplate = reagent.core.atom.call(null,"");
app.app.vimtemplate = reagent.core.atom.call(null,"");
app.app.gnometerminaltemplate = reagent.core.atom.call(null,"");
app.app.vscodetemplate = reagent.core.atom.call(null,"");
app.app.vscodepackagejsontemplate = reagent.core.atom.call(null,"");
app.app.vscodequickstarttemplate = reagent.core.atom.call(null,"");
app.app.vscodereadmetemplate = reagent.core.atom.call(null,"");
app.app.compile_template = (function app$app$compile_template(templ,varmap){
return Mustache.render(templ,cljs.core.clj__GT_js.call(null,varmap));
});
app.app.GET = (function app$app$GET(url,template){
return goog.net.XhrIo.send(url,(function (event){
return cljs.core.reset_BANG_.call(null,template,event.target.getResponse());
}));
});
app.app.generate_template = (function app$app$generate_template(template){
return app.app.compile_template.call(null,template,app.colors.derive_colors_from_theme.call(null,cljs.core.deref.call(null,app.db.app_db)));
});
app.app.generate_template_intelli = (function app$app$generate_template_intelli(template){
return app.app.compile_template.call(null,template,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function app$app$generate_template_intelli_$_iter__18756(s__18757){
return (new cljs.core.LazySeq(null,(function (){
var s__18757__$1 = s__18757;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18757__$1);
if(temp__5735__auto__){
var s__18757__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18757__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18757__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18759 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18758 = (0);
while(true){
if((i__18758 < size__4522__auto__)){
var vec__18760 = cljs.core._nth.call(null,c__4521__auto__,i__18758);
var k = cljs.core.nth.call(null,vec__18760,(0),null);
var v = cljs.core.nth.call(null,vec__18760,(1),null);
cljs.core.chunk_append.call(null,b__18759,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));

var G__18766 = (i__18758 + (1));
i__18758 = G__18766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),app$app$generate_template_intelli_$_iter__18756.call(null,cljs.core.chunk_rest.call(null,s__18757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),null);
}
} else {
var vec__18763 = cljs.core.first.call(null,s__18757__$2);
var k = cljs.core.nth.call(null,vec__18763,(0),null);
var v = cljs.core.nth.call(null,vec__18763,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),app$app$generate_template_intelli_$_iter__18756.call(null,cljs.core.rest.call(null,s__18757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,app.colors.derive_colors_from_theme.call(null,cljs.core.deref.call(null,app.db.app_db)));
})()));
});
app.app.zip = (new JSZip());
app.app.save_zip_as_BANG_ = (function app$app$save_zip_as_BANG_(zip,filename){
return zip.generateAsync(({"type": "blob"})).catch((function (p1__18767_SHARP_){
return cljs.core.println.call(null,p1__18767_SHARP_);
})).then((function (p1__18768_SHARP_){
return saveAs(p1__18768_SHARP_,filename);
}));
});
app.app.generate_templates_vscode = (function app$app$generate_templates_vscode(templates){
var zip_18773 = (new JSZip());

var seq__18769_18774 = cljs.core.seq.call(null,templates);
var chunk__18770_18775 = null;
var count__18771_18776 = (0);
var i__18772_18777 = (0);
while(true){
if((i__18772_18777 < count__18771_18776)){
var i_18778 = cljs.core._nth.call(null,chunk__18770_18775,i__18772_18777);
app.app.compile_template.call(null,i_18778,app.colors.derive_colors_from_theme.call(null,cljs.core.deref.call(null,app.db.app_db)));


var G__18779 = seq__18769_18774;
var G__18780 = chunk__18770_18775;
var G__18781 = count__18771_18776;
var G__18782 = (i__18772_18777 + (1));
seq__18769_18774 = G__18779;
chunk__18770_18775 = G__18780;
count__18771_18776 = G__18781;
i__18772_18777 = G__18782;
continue;
} else {
var temp__5735__auto___18783 = cljs.core.seq.call(null,seq__18769_18774);
if(temp__5735__auto___18783){
var seq__18769_18784__$1 = temp__5735__auto___18783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18769_18784__$1)){
var c__4550__auto___18785 = cljs.core.chunk_first.call(null,seq__18769_18784__$1);
var G__18786 = cljs.core.chunk_rest.call(null,seq__18769_18784__$1);
var G__18787 = c__4550__auto___18785;
var G__18788 = cljs.core.count.call(null,c__4550__auto___18785);
var G__18789 = (0);
seq__18769_18774 = G__18786;
chunk__18770_18775 = G__18787;
count__18771_18776 = G__18788;
i__18772_18777 = G__18789;
continue;
} else {
var i_18790 = cljs.core.first.call(null,seq__18769_18784__$1);
app.app.compile_template.call(null,i_18790,app.colors.derive_colors_from_theme.call(null,cljs.core.deref.call(null,app.db.app_db)));


var G__18791 = cljs.core.next.call(null,seq__18769_18784__$1);
var G__18792 = null;
var G__18793 = (0);
var G__18794 = (0);
seq__18769_18774 = G__18791;
chunk__18770_18775 = G__18792;
count__18771_18776 = G__18793;
i__18772_18777 = G__18794;
continue;
}
} else {
}
}
break;
}

app.app.zip.folder("templates/vscode");

app.app.zip.folder("templates/vscode/README.md",cljs.core.deref.call(null,app.app.vscodereadmetemplate));

app.app.zip.folder("templates/vscode/package.json",cljs.core.deref.call(null,app.app.vscodepackagejsontemplate));

app.app.zip.folder("templates/vscode/vsc-extension-quickstart.md",cljs.core.deref.call(null,app.app.vscodequickstarttemplate));

app.app.zip.folder("templates/vscode/themes/vscode-color-theme.json",cljs.core.deref.call(null,app.app.vscodetemplate));

return app.app.zip;
});
app.app.download_vscode = (function app$app$download_vscode(filename){
var zip = app.app.generate_templates_vscode.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,app.app.vscodetemplate)], null));
return app.app.save_zip_as_BANG_.call(null,zip,filename);
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
var wu = app.app.window_url.call(null);
var blob = (new Blob([data]));
var templink = document.getElementById(id);
templink.href = wu.createObjectURL(blob);

var G__18795 = templink;
G__18795.setAttribute("download",filename);

return G__18795;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.app.create_blob.call(null,app.app.generate_template.call(null,template),id,filename);
})], null),title], null)], null);
});
app.app.current_year = (function app$app$current_year(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear());
});
app.app.set_year = (function app$app$set_year(){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"year","year",335913393),app.app.current_year.call(null));
});
app.app.template_download_intelli = (function app$app$template_download_intelli(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),"intellilink",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.app.create_blob.call(null,app.app.generate_template_intelli.call(null,cljs.core.deref.call(null,app.app.intellitemplate)),"intellilink",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),".icls"].join(''));
})], null),"IntelliJ"], null)], null);
});
app.app.template_download_vscode = (function app$app$template_download_vscode(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),"vscodelink",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.app.download_vscode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),".zip"].join(''));
})], null),"VSCode"], null)], null);
});
app.app.template_select_component = (function app$app$template_select_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.templatedrop","div.btn-group.templatedrop",886112075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"templatedrop"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.dropdown-toggle","button.btn.btn-default.dropdown-toggle",-1235297954),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.app.scroll_to_bottom.call(null);
})], null),"Theme Download    ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#downloadsel.dropdown-menu","ul#downloadsel.dropdown-menu",-937537592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"templatedrop"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download_intelli], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"tmthemelink","Textmate",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),".tmTheme"].join(''),cljs.core.deref.call(null,app.app.tmthemetemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"emacslink","Emacs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),"-theme.el"].join(''),cljs.core.deref.call(null,app.app.emacstemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"vimlink","Vim",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),".vim"].join(''),cljs.core.deref.call(null,app.app.vimtemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"gnometerminallink","Gnome Terminal",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),".sh"].join(''),cljs.core.deref.call(null,app.app.gnometerminaltemplate)], null)], null)], null);
});
app.app.store_component = (function app$app$store_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.button_component,"store theme",(function (){
return app.db.save_to_storage.call(null);
})], null);
});
app.app.color_components = (function app$app$color_components(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4.col-lg-3","div.col-md-4.col-lg-3",1659812764),new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.colorcomponents","div.colorcomponents",352145842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.name_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.author_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"builtin","builtin",-1707593346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"functionname","functionname",-2124216080)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"variable","variable",-281346492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"constant","constant",-379609303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"comment","comment",532206069)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.color_component,new cljs.core.Keyword(null,"warning2","warning2",972253928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.butsection.row","div.butsection.row",1717136817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.inc_contrast_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.red_contrast_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-5","div.col-xs-5",1778153329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.adjustbg_component], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_colors_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_colors_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_select_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.store_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null);
});
app.app.preview_component = (function app$app$preview_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.col-lg-8.col-lg-offset-1","div.col-md-6.col-lg-8.col-lg-offset-1",158493123),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.previewcomponent","div.previewcomponent",840722303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,app.components.active_preview)], null)], null)], null)], null)], null);
});
app.app.navbar_component = (function app$app$navbar_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),(((screen.width < (1000)))?"TC":"ThemeCreator")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-collapse","div.navbar.navbar-collapse",-1585457278),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.theme_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.language_select], null)], null)], null)], null);
});
app.app.theme_component = (function app$app$theme_component(){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null);

app.app.set_year.call(null);

app.app.GET.call(null,"app.core/resources/public/templates/intelli.txt",app.app.intellitemplate);

app.app.GET.call(null,"app.core/resources/public/templates/tmtheme.txt",app.app.tmthemetemplate);

app.app.GET.call(null,"app.core/resources/public/templates/emacs.txt",app.app.emacstemplate);

app.app.GET.call(null,"app.core/resources/public/templates/vim.txt",app.app.vimtemplate);

app.app.GET.call(null,"app.core/resources/public/templates/gnome-terminal.txt",app.app.gnometerminaltemplate);

app.app.GET.call(null,"app.core/resources/public/templates/vscode/package.json",app.app.vscodepackagejsontemplate);

app.app.GET.call(null,"app.core/resources/public/templates/vscode/vsc-extension-quickstart.md",app.app.vscodequickstarttemplate);

app.app.GET.call(null,"app.core/resources/public/templates/vscode/README.md",app.app.vscodereadmetemplate);

app.app.GET.call(null,"app.core/resources/public/templates/vscode/themes/vscode-color-theme.json",app.app.vscodetemplate);

app.db.set_db_from_storage.call(null);

app.app.set_year.call(null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.color_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.preview_component], null)], null);
});
app.app.init = (function app$app$init(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null),document.getElementById("navcontainer"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.theme_component], null),document.getElementById("mainapp"));
});

//# sourceMappingURL=app.js.map
