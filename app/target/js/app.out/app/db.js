// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
app.db.soft_morning = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#f03f3f","#e80f29","#f03f3f","#727170","#3450a2","#a82e4d","#ff6523","#8aa234","#282828","#f2f1f0","#808080","soft-morning","#727170"]);
app.db.magonyx = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#e69ae8","#e86310","#eca661","#ff909d","#5ba2b1","#75b7ff","#e81050","#9ec065","#c7c7c7","#353839","#5d5d5d","magonyx","#cbb021"]);
app.db.light_kiss = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#337d92","#ff8800","#337d92","#337d92","#2a55a8","#2a55a8","#ff0000","#c87758","#303030","#efe6e6","#909090","light-kiss","#2a55a8"]);
app.db.foggy_night = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#7b875b","#e86310","#3e8c9d","#8d5351","#ad7176","#9e7a5a","#e81050","#6b83ac","#8f8f8f","#292929","#626262","foggy-night","#997599"]);
app.db.silkworm = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#a74f31","#ff4d12","#a74f31","#76690b","#3b4bab","#ad4271","#ff1276","#367a7f","#585858","#ece3db","#a9a9a9","silkworm","#0073b5"]);
app.db.metalheart = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#638f81","#ff8800","#5980a3","#7a9f81","#ba899c","#937aba","#ff0000","#6e94ad","#8693ae","#1d272a","#727272","metalheart","#9a91b8"]);
app.db.breezy_fall = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$comment,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#922f8c","#ff4d12","#844c41","#454b7a","#994485","#a94142","#ff1276","#0073a3","#78693c","#f6f3cf","#906e86","breezy-fall","#3b61b1"]);
app.db.thursday = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$variable,cljs.core.cst$kw$warning2,cljs.core.cst$kw$constant,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$warning,cljs.core.cst$kw$keyword,cljs.core.cst$kw$mainfg,cljs.core.cst$kw$mainbg,cljs.core.cst$kw$themename,cljs.core.cst$kw$builtin],["#7d6740","#fa7b0c","#28766e","#56724b","#8c5c79","#935c54","#fa0c0c","#28728f","#2f2f2f","#f9fbfd","Thursday","#636792"]);
app.db.contrastcolors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mainfg,cljs.core.cst$kw$keyword,cljs.core.cst$kw$builtin,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$variable,cljs.core.cst$kw$type,cljs.core.cst$kw$constant,cljs.core.cst$kw$comment], null);
app.db.randomcolors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword,cljs.core.cst$kw$builtin,cljs.core.cst$kw$string,cljs.core.cst$kw$functionname,cljs.core.cst$kw$variable,cljs.core.cst$kw$type,cljs.core.cst$kw$constant], null);
app.db.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.db.black);
app.db.adjustbg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.db.custom_palette_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,(0),cljs.core.cst$kw$lightness,(0)], null));
app.db.switch_theme = (function app$db$switch_theme(theme){
return cljs.core.reset_BANG_(app.db.app_db,theme);
});
app.db.toggle_adjust = (function app$db$toggle_adjust(){
return cljs.core.reset_BANG_(app.db.adjustbg,cljs.core.not(cljs.core.deref(app.db.adjustbg)));
});
app.db.set_custom_palette = (function app$db$set_custom_palette(lightness,saturation){
return cljs.core.reset_BANG_(app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,saturation,cljs.core.cst$kw$lightness,lightness], null));
});
app.db.storagename = "themecreator";
app.db.save_to_storage = (function app$db$save_to_storage(){
return localStorage.setItem(app.db.storagename,JSON.stringify(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(app.db.app_db),cljs.core.cst$kw$lightness,cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.custom_palette_db)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$saturation,cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.custom_palette_db))], 0)))));
});
/**
 * convert a map with strings as keys to a map with keyword keys and string 
 * values.
 */
app.db.string_to_keyword = (function app$db$string_to_keyword(strmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function app$db$string_to_keyword_$_iter__5764(s__5765){
return (new cljs.core.LazySeq(null,(function (){
var s__5765__$1 = s__5765;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5765__$1);
if(temp__5457__auto__){
var s__5765__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5765__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__5765__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__5767 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__5766 = (0);
while(true){
if((i__5766 < size__4522__auto__)){
var vec__5768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__5766);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5768,(1),null);
cljs.core.chunk_append(b__5767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__5774 = (i__5766 + (1));
i__5766 = G__5774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5767),app$db$string_to_keyword_$_iter__5764(cljs.core.chunk_rest(s__5765__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5767),null);
}
} else {
var vec__5771 = cljs.core.first(s__5765__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5771,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),app$db$string_to_keyword_$_iter__5764(cljs.core.rest(s__5765__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(strmap);
})());
});
app.db.load_from_storage = (function app$db$load_from_storage(){
var th = localStorage.getItem(app.db.storagename);
if(cljs.core.truth_(th)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(localStorage.getItem(app.db.storagename)));
} else {
return null;
}
});
app.db.set_db_from_storage = (function app$db$set_db_from_storage(){
if(cljs.core.truth_(localStorage.getItem(app.db.storagename))){
var storedtheme = app.db.string_to_keyword(app.db.load_from_storage());
app.db.switch_theme(storedtheme);

return cljs.core.reset_BANG_(app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1(storedtheme),cljs.core.cst$kw$lightness,cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1(storedtheme)], null));
} else {
return null;
}
});
