// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.app');
goog.require('cljs.core');
goog.require('app.components');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
goog.require('cljsjs.mustache');
goog.require('app.db');
goog.require('app.colors');
app.app.log = (function app$app$log(s){
return console.log([cljs.core.str(s)].join(''));
});
app.app.parse_template = (function app$app$parse_template(templ){
return Mustache.parse(templ);
});
app.app.intellitemplate = reagent.core.atom.call(null,"");
app.app.tmthemetemplate = reagent.core.atom.call(null,"");
app.app.atomtemplate = reagent.core.atom.call(null,"");
app.app.emacstemplate = reagent.core.atom.call(null,"");
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
app.app.window_url = (function app$app$window_url(){
var or__4986__auto__ = window.URL;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return window.webkitURL;
}
});
app.app.create_blob = (function app$app$create_blob(data,id,filename){
var wu = app.app.window_url.call(null);
var blob = (new Blob([data]));
var templink = document.getElementById(id);
templink.href = wu.createObjectURL(blob);

var G__8322 = templink;
G__8322.setAttribute("download",filename);

return G__8322;
});
app.app.template_download = (function app$app$template_download(id,title,filename,template){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.app.create_blob.call(null,app.app.generate_template.call(null,template),id,filename);
})], null),title], null)], null);
});
app.app.template_select_component = (function app$app$template_select_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.templatedrop","div.btn-group.templatedrop",886112075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"templatedrop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Theme Download"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.dropdown-toggle","button.btn.btn-default.dropdown-toggle",-1235297954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"templatedrop"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"intellilink","IntelliJ",[cljs.core.str(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),cljs.core.str(".icls")].join(''),cljs.core.deref.call(null,app.app.intellitemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"tmthemelink","Textmate",[cljs.core.str(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),cljs.core.str(".tmTheme")].join(''),cljs.core.deref.call(null,app.app.tmthemetemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"atomlink","Atom","colors.less",cljs.core.deref.call(null,app.app.atomtemplate)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.template_download,"emacslink","Emacs",[cljs.core.str(new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))),cljs.core.str(".el")].join(''),cljs.core.deref.call(null,app.app.emacstemplate)], null)], null)], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"ITC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-collapse","div.navbar.navbar-collapse",-1585457278),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.theme_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.language_select], null)], null)], null)], null);
});
app.app.theme_component = (function app$app$theme_component(){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null);

app.app.GET.call(null,"templates/intelli.txt",app.app.intellitemplate);

app.app.GET.call(null,"templates/tmtheme.txt",app.app.tmthemetemplate);

app.app.GET.call(null,"templates/atom/colors.txt",app.app.atomtemplate);

app.app.GET.call(null,"templates/emacs.txt",app.app.emacstemplate);

app.db.set_db_from_storage.call(null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.color_components], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.preview_component], null)], null);
});
app.app.init = (function app$app$init(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.navbar_component], null),document.getElementById("navcontainer"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.theme_component], null),document.getElementById("mainapp"));
});

//# sourceMappingURL=app.js.map