// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('reagent.core');
app.db.black = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#d4d4d4","#ff8800","#d4d4d4","#d4d4d4","#d4d4d4","#d4d4d4","#ff0000","#d4d4d4","#d4d4d4","#000000","#808080","black","#d4d4d4"]);
app.db.white = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#000000","#ff8800","#000000","#000000","#000000","#000000","#ff0000","#000000","#303030","#ffffff","#606060","white","#000000"]);
app.db.white_sand = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#476238","#ff4d12","#697024","#8c4a79","#b3534b","#bd745e","#ff1276","#4a858c","#585858","#f5ebe1","#a9a9a9","white-sand","#1a8591"]);
app.db.warm_night = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#c27d7b","#e86310","#bd845f","#8b8fc6","#71a19f","#b680b1","#e81050","#96905f","#b1b1b1","#292424","#5d5a58","warm-night","#71a46c"]);
app.db.oldlace = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#525252","#fdf5e6","#949494","Oldlace","#7b4135"]);
app.db.greymatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#2f2f2f","#f9fbfd","#949494","Greymatters","#7b4135"]);
app.db.soft_charcoal = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#8885b2","#ff2370","#8aa6c1","#8aa6c1","#5d90cd","#7a8bbd","#ff6523","#8aa234","#c2c2c2","#191919","#808080","soft-charcoal","#54686d"]);
app.db.munich = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#9798d6","#e86310","#d7897c","#cf88af","#36aea8","#40a8d3","#e81050","#b39b5f","#b1b1b1","#281123","#5d5d5d","munich","#7aa975"]);
app.db.reykjavik = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#e1c9aa","#e86310","#a3d6cc","#c1d2b1","#e6c2db","#f1c1bd","#e81050","#a3d4e8","#b1b1b1","#112328","#5d5d5d","reykjavik","#c4cbee"]);
app.db.bergen = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#6d3e7e","#ff4d12","#0081a6","#00847a","#b15a56","#926e31","#ff1276","#5c71b3","#585858","#eae7e9","#a9a9a9","bergen","#a35c8e"]);
app.db.madrid = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#4394a7","#e86310","#a27ea4","#718bb6","#818f62","#96546c","#e81050","#b7797d","#b1b1b1","#1b1b1b","#5d5d5d","madrid","#a78360"]);
app.db.contrastcolors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mainfg,cljs.core.cst$kw$keyword,cljs.core.cst$kw$builtin,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$variable,cljs.core.cst$kw$type,cljs.core.cst$kw$constant,cljs.core.cst$kw$comment], null);
app.db.randomcolors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword,cljs.core.cst$kw$builtin,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$variable,cljs.core.cst$kw$type,cljs.core.cst$kw$constant], null);
app.db.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.db.black);
app.db.adjustbg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.db.custom_palette_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,(0),cljs.core.cst$kw$lightness,(0)], null));
app.db.switch_theme = (function app$db$switch_theme(theme){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(app.db.app_db,theme) : cljs.core.reset_BANG_.call(null,app.db.app_db,theme));
});
app.db.toggle_adjust = (function app$db$toggle_adjust(){
var G__11061 = app.db.adjustbg;
var G__11062 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11061,G__11062) : cljs.core.reset_BANG_.call(null,G__11061,G__11062));
});
app.db.set_custom_palette = (function app$db$set_custom_palette(lightness,saturation){
var G__11065 = app.db.custom_palette_db;
var G__11066 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,saturation,cljs.core.cst$kw$lightness,lightness], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11065,G__11066) : cljs.core.reset_BANG_.call(null,G__11065,G__11066));
});
app.db.storagename = "themecreator";
app.db.save_to_storage = (function app$db$save_to_storage(){
return localStorage.setItem(app.db.storagename,(function (){var G__11068 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)),cljs.core.cst$kw$lightness,cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.custom_palette_db) : cljs.core.deref.call(null,app.db.custom_palette_db))),cljs.core.array_seq([cljs.core.cst$kw$saturation,cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.custom_palette_db) : cljs.core.deref.call(null,app.db.custom_palette_db)))], 0)));
return JSON.stringify(G__11068);
})());
});
/**
 * convert a map with strings as keys to a map with keyword keys and string 
 * values.
 */
app.db.string_to_keyword = (function app$db$string_to_keyword(strmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5758__auto__ = (function app$db$string_to_keyword_$_iter__11079(s__11080){
return (new cljs.core.LazySeq(null,(function (){
var s__11080__$1 = s__11080;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11080__$1);
if(temp__4425__auto__){
var s__11080__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11080__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__11080__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__11082 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__11081 = (0);
while(true){
if((i__11081 < size__5757__auto__)){
var vec__11087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__11081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11087,(1),null);
cljs.core.chunk_append(b__11082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__11089 = (i__11081 + (1));
i__11081 = G__11089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11082),app$db$string_to_keyword_$_iter__11079(cljs.core.chunk_rest(s__11080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11082),null);
}
} else {
var vec__11088 = cljs.core.first(s__11080__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11088,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),app$db$string_to_keyword_$_iter__11079(cljs.core.rest(s__11080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(strmap);
})());
});
app.db.load_from_storage = (function app$db$load_from_storage(){
var th = localStorage.getItem(app.db.storagename);
if(cljs.core.truth_(th)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__11091 = localStorage.getItem(app.db.storagename);
return JSON.parse(G__11091);
})());
} else {
return null;
}
});
app.db.set_db_from_storage = (function app$db$set_db_from_storage(){
if(cljs.core.truth_(localStorage.getItem(app.db.storagename))){
var storedtheme = app.db.string_to_keyword(app.db.load_from_storage());
app.db.switch_theme(storedtheme);

var G__11094 = app.db.custom_palette_db;
var G__11095 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1(storedtheme),cljs.core.cst$kw$lightness,cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1(storedtheme)], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11094,G__11095) : cljs.core.reset_BANG_.call(null,G__11094,G__11095));
} else {
return null;
}
});
