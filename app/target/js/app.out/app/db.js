// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('reagent.core');
app.db.black = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#d4d4d4","#ff8800","#d4d4d4","#d4d4d4","#d4d4d4","#d4d4d4","#ff0000","#d4d4d4","#d4d4d4","#000000","#808080","black","#d4d4d4"]);
app.db.white = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#000000","#ff8800","#000000","#000000","#000000","#000000","#ff0000","#000000","#303030","#ffffff","#606060","white","#000000"]);
app.db.white_sand = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#476238","#ff4d12","#697024","#8c4a79","#b3534b","#bd745e","#ff1276","#4a858c","#585858","#f5ebe1","#a9a9a9","white-sand","#1a8591"]);
app.db.warm_night = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#c27d7b","#e86310","#bd845f","#8b8fc6","#71a19f","#b680b1","#e81050","#96905f","#b1b1b1","#292424","#5d5a58","warm-night","#71a46c"]);
app.db.oldlace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#525252","#fdf5e6","#949494","Oldlace","#7b4135"]);
app.db.greymatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#2f2f2f","#f9fbfd","#949494","Greymatters","#7b4135"]);
app.db.soft_charcoal = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#8885b2","#ff2370","#8aa6c1","#8aa6c1","#5d90cd","#7a8bbd","#ff6523","#8aa234","#c2c2c2","#191919","#808080","soft-charcoal","#54686d"]);
app.db.munich = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#9798d6","#e86310","#d7897c","#cf88af","#36aea8","#40a8d3","#e81050","#b39b5f","#b1b1b1","#281123","#5d5d5d","munich","#7aa975"]);
app.db.contrastcolors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"builtin","builtin",-1707593346),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"comment","comment",532206069)], null);
app.db.randomcolors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"builtin","builtin",-1707593346),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constant","constant",-379609303)], null);
app.db.app_db = reagent.core.atom.call(null,app.db.warm_night);
app.db.adjustbg = reagent.core.atom.call(null,false);
app.db.custom_palette_db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),(0),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(0)], null));
app.db.switch_theme = (function app$db$switch_theme(theme){
return cljs.core.reset_BANG_.call(null,app.db.app_db,theme);
});
app.db.toggle_adjust = (function app$db$toggle_adjust(){
return cljs.core.reset_BANG_.call(null,app.db.adjustbg,cljs.core.not.call(null,cljs.core.deref.call(null,app.db.adjustbg)));
});
app.db.set_custom_palette = (function app$db$set_custom_palette(lightness,saturation){
return cljs.core.reset_BANG_.call(null,app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),saturation,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),lightness], null));
});
app.db.storagename = "themecreator";
app.db.save_to_storage = (function app$db$save_to_storage(){
return localStorage.setItem(app.db.storagename,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,app.db.app_db),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db))))));
});
/**
 * convert a map with strings as keys to a map with keyword keys and string 
 * values.
 */
app.db.string_to_keyword = (function app$db$string_to_keyword(strmap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5758__auto__ = (function app$db$string_to_keyword_$_iter__7987(s__7988){
return (new cljs.core.LazySeq(null,(function (){
var s__7988__$1 = s__7988;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7988__$1);
if(temp__4425__auto__){
var s__7988__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7988__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__7988__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__7990 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__7989 = (0);
while(true){
if((i__7989 < size__5757__auto__)){
var vec__7993 = cljs.core._nth.call(null,c__5756__auto__,i__7989);
var k = cljs.core.nth.call(null,vec__7993,(0),null);
var v = cljs.core.nth.call(null,vec__7993,(1),null);
cljs.core.chunk_append.call(null,b__7990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__7995 = (i__7989 + (1));
i__7989 = G__7995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7990),app$db$string_to_keyword_$_iter__7987.call(null,cljs.core.chunk_rest.call(null,s__7988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7990),null);
}
} else {
var vec__7994 = cljs.core.first.call(null,s__7988__$2);
var k = cljs.core.nth.call(null,vec__7994,(0),null);
var v = cljs.core.nth.call(null,vec__7994,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),app$db$string_to_keyword_$_iter__7987.call(null,cljs.core.rest.call(null,s__7988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,strmap);
})());
});
app.db.load_from_storage = (function app$db$load_from_storage(){
var th = localStorage.getItem(app.db.storagename);
if(cljs.core.truth_(th)){
return cljs.core.js__GT_clj.call(null,JSON.parse(localStorage.getItem(app.db.storagename)));
} else {
return null;
}
});
app.db.set_db_from_storage = (function app$db$set_db_from_storage(){
if(cljs.core.truth_(localStorage.getItem(app.db.storagename))){
var storedtheme = app.db.string_to_keyword.call(null,app.db.load_from_storage.call(null));
app.db.switch_theme.call(null,storedtheme);

return cljs.core.reset_BANG_.call(null,app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(storedtheme),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(storedtheme)], null));
} else {
return null;
}
});

//# sourceMappingURL=db.js.map