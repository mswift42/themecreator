// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14035_SHARP_){
return (p1__14035_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
/**
 * convert hex color in #rrggbb format to
 * format 0xbbggrr.
 */
app.colors.hexToBgrHex = (function app$colors$hexToBgrHex(hexcolor){
var vec__14036 = goog.color.hexToRgb(hexcolor);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(2),null);
var bgrhex = goog.color.rgbToHex(b,g,r);
return clojure.string.replace_first(["0x",bgrhex].join(''),"#","");
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__14039_SHARP_){
return (((p1__14039_SHARP_ < (0))) || ((p1__14039_SHARP_ > (255))));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__4336__auto__ = (function (){var x__4339__auto__ = val;
var y__4340__auto__ = (255);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14040_SHARP_){
return app.colors.clamp(p1__14040_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__14041 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__14046 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14044_SHARP_){
return (p1__14044_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14045_SHARP_){
if((p1__14045_SHARP_ > 0.04045)){
return Math.pow(((p1__14045_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__14045_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__14050 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14049_SHARP_){
if((p1__14049_SHARP_ > 0.008856)){
return Math.pow(p1__14049_SHARP_,((1) / (3)));
} else {
return ((p1__14049_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((116) * y) - (16)),((500) * (x - y)),((200) * (y - z))], null);
});
app.colors.radToDegrees = (function app$colors$radToDegrees(h){
if((h > (0))){
return ((180) * (h / Math.PI));
} else {
return ((360) - ((180) * (Math.abs(h) / Math.PI)));
}
});
app.colors.labToLch = (function app$colors$labToLch(labcolor){
var vec__14053 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__14056 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__14059 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14059,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14059,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14059,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
}),xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__14065 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14062_SHARP_){
return (p1__14062_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14065,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14065,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14065,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14063_SHARP_){
return Math.round((p1__14063_SHARP_ * (255)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14064_SHARP_){
if((p1__14064_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__14064_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__14064_SHARP_ * 12.92);
}
}),rgb));
});
app.colors.hexToLch = (function app$colors$hexToLch(hexcolor){
return app.colors.labToLch(app.colors.xyzToLab(app.colors.rgbToXyz(app.colors.hexToRgb(hexcolor))));
});
app.colors.lchToRgb = (function app$colors$lchToRgb(lchcolor){
return app.colors.xyzToRgb(app.colors.labToXyz(app.colors.lchToLab(lchcolor)));
});
app.colors.lchToHex = (function app$colors$lchToHex(lchcolor){
return app.colors.rgbToHex(app.colors.xyzToRgb(app.colors.labToXyz(app.colors.lchToLab(lchcolor))));
});
/**
 * darken darkens a rgb color by a given factor.
 * if no factor is provided, the color will be darkened 
 * with the factor of 0.2.
 */
app.colors.darken = (function app$colors$darken(var_args){
var G__14069 = arguments.length;
switch (G__14069) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
}));

(app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.darken(goog.color.hexToRgb(colorstring),factor));
}));

(app.colors.darken.cljs$lang$maxFixedArity = 2);

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__14072 = arguments.length;
switch (G__14072) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
}));

(app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.lighten(goog.color.hexToRgb(colorstring),factor));
}));

(app.colors.lighten.cljs$lang$maxFixedArity = 2);

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__14074 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__14077 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__14077) : color.call(null,G__14077));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__14078 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__14078) : color.call(null,G__14078));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__14079_14095 = cljs.core.seq(app.db.contrastcolors);
var chunk__14080_14096 = null;
var count__14081_14097 = (0);
var i__14082_14098 = (0);
while(true){
if((i__14082_14098 < count__14081_14097)){
var i_14099 = chunk__14080_14096.cljs$core$IIndexed$_nth$arity$2(null,i__14082_14098);
app.colors.lighten_color_in_db(i_14099);


var G__14100 = seq__14079_14095;
var G__14101 = chunk__14080_14096;
var G__14102 = count__14081_14097;
var G__14103 = (i__14082_14098 + (1));
seq__14079_14095 = G__14100;
chunk__14080_14096 = G__14101;
count__14081_14097 = G__14102;
i__14082_14098 = G__14103;
continue;
} else {
var temp__5753__auto___14104 = cljs.core.seq(seq__14079_14095);
if(temp__5753__auto___14104){
var seq__14079_14105__$1 = temp__5753__auto___14104;
if(cljs.core.chunked_seq_QMARK_(seq__14079_14105__$1)){
var c__4679__auto___14106 = cljs.core.chunk_first(seq__14079_14105__$1);
var G__14107 = cljs.core.chunk_rest(seq__14079_14105__$1);
var G__14108 = c__4679__auto___14106;
var G__14109 = cljs.core.count(c__4679__auto___14106);
var G__14110 = (0);
seq__14079_14095 = G__14107;
chunk__14080_14096 = G__14108;
count__14081_14097 = G__14109;
i__14082_14098 = G__14110;
continue;
} else {
var i_14111 = cljs.core.first(seq__14079_14105__$1);
app.colors.lighten_color_in_db(i_14111);


var G__14112 = cljs.core.next(seq__14079_14105__$1);
var G__14113 = null;
var G__14114 = (0);
var G__14115 = (0);
seq__14079_14095 = G__14112;
chunk__14080_14096 = G__14113;
count__14081_14097 = G__14114;
i__14082_14098 = G__14115;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14083 = cljs.core.seq(app.db.contrastcolors);
var chunk__14084 = null;
var count__14085 = (0);
var i__14086 = (0);
while(true){
if((i__14086 < count__14085)){
var i = chunk__14084.cljs$core$IIndexed$_nth$arity$2(null,i__14086);
app.colors.lighten_color_in_db(i);


var G__14116 = seq__14083;
var G__14117 = chunk__14084;
var G__14118 = count__14085;
var G__14119 = (i__14086 + (1));
seq__14083 = G__14116;
chunk__14084 = G__14117;
count__14085 = G__14118;
i__14086 = G__14119;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14083);
if(temp__5753__auto__){
var seq__14083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14083__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14083__$1);
var G__14120 = cljs.core.chunk_rest(seq__14083__$1);
var G__14121 = c__4679__auto__;
var G__14122 = cljs.core.count(c__4679__auto__);
var G__14123 = (0);
seq__14083 = G__14120;
chunk__14084 = G__14121;
count__14085 = G__14122;
i__14086 = G__14123;
continue;
} else {
var i = cljs.core.first(seq__14083__$1);
app.colors.lighten_color_in_db(i);


var G__14124 = cljs.core.next(seq__14083__$1);
var G__14125 = null;
var G__14126 = (0);
var G__14127 = (0);
seq__14083 = G__14124;
chunk__14084 = G__14125;
count__14085 = G__14126;
i__14086 = G__14127;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__14087_14128 = cljs.core.seq(app.db.contrastcolors);
var chunk__14088_14129 = null;
var count__14089_14130 = (0);
var i__14090_14131 = (0);
while(true){
if((i__14090_14131 < count__14089_14130)){
var i_14132 = chunk__14088_14129.cljs$core$IIndexed$_nth$arity$2(null,i__14090_14131);
app.colors.darken_color_in_db(i_14132);


var G__14133 = seq__14087_14128;
var G__14134 = chunk__14088_14129;
var G__14135 = count__14089_14130;
var G__14136 = (i__14090_14131 + (1));
seq__14087_14128 = G__14133;
chunk__14088_14129 = G__14134;
count__14089_14130 = G__14135;
i__14090_14131 = G__14136;
continue;
} else {
var temp__5753__auto___14137 = cljs.core.seq(seq__14087_14128);
if(temp__5753__auto___14137){
var seq__14087_14138__$1 = temp__5753__auto___14137;
if(cljs.core.chunked_seq_QMARK_(seq__14087_14138__$1)){
var c__4679__auto___14139 = cljs.core.chunk_first(seq__14087_14138__$1);
var G__14140 = cljs.core.chunk_rest(seq__14087_14138__$1);
var G__14141 = c__4679__auto___14139;
var G__14142 = cljs.core.count(c__4679__auto___14139);
var G__14143 = (0);
seq__14087_14128 = G__14140;
chunk__14088_14129 = G__14141;
count__14089_14130 = G__14142;
i__14090_14131 = G__14143;
continue;
} else {
var i_14144 = cljs.core.first(seq__14087_14138__$1);
app.colors.darken_color_in_db(i_14144);


var G__14145 = cljs.core.next(seq__14087_14138__$1);
var G__14146 = null;
var G__14147 = (0);
var G__14148 = (0);
seq__14087_14128 = G__14145;
chunk__14088_14129 = G__14146;
count__14089_14130 = G__14147;
i__14090_14131 = G__14148;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14091 = cljs.core.seq(app.db.contrastcolors);
var chunk__14092 = null;
var count__14093 = (0);
var i__14094 = (0);
while(true){
if((i__14094 < count__14093)){
var i = chunk__14092.cljs$core$IIndexed$_nth$arity$2(null,i__14094);
app.colors.darken_color_in_db(i);


var G__14149 = seq__14091;
var G__14150 = chunk__14092;
var G__14151 = count__14093;
var G__14152 = (i__14094 + (1));
seq__14091 = G__14149;
chunk__14092 = G__14150;
count__14093 = G__14151;
i__14094 = G__14152;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14091);
if(temp__5753__auto__){
var seq__14091__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14091__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14091__$1);
var G__14153 = cljs.core.chunk_rest(seq__14091__$1);
var G__14154 = c__4679__auto__;
var G__14155 = cljs.core.count(c__4679__auto__);
var G__14156 = (0);
seq__14091 = G__14153;
chunk__14092 = G__14154;
count__14093 = G__14155;
i__14094 = G__14156;
continue;
} else {
var i = cljs.core.first(seq__14091__$1);
app.colors.darken_color_in_db(i);


var G__14157 = cljs.core.next(seq__14091__$1);
var G__14158 = null;
var G__14159 = (0);
var G__14160 = (0);
seq__14091 = G__14157;
chunk__14092 = G__14158;
count__14093 = G__14159;
i__14094 = G__14160;
continue;
}
} else {
return null;
}
}
break;
}
}
}
});
app.colors.red_contrast = (function app$colors$red_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__14161_14177 = cljs.core.seq(app.db.contrastcolors);
var chunk__14162_14178 = null;
var count__14163_14179 = (0);
var i__14164_14180 = (0);
while(true){
if((i__14164_14180 < count__14163_14179)){
var i_14181 = chunk__14162_14178.cljs$core$IIndexed$_nth$arity$2(null,i__14164_14180);
app.colors.darken_color_in_db(i_14181);


var G__14182 = seq__14161_14177;
var G__14183 = chunk__14162_14178;
var G__14184 = count__14163_14179;
var G__14185 = (i__14164_14180 + (1));
seq__14161_14177 = G__14182;
chunk__14162_14178 = G__14183;
count__14163_14179 = G__14184;
i__14164_14180 = G__14185;
continue;
} else {
var temp__5753__auto___14186 = cljs.core.seq(seq__14161_14177);
if(temp__5753__auto___14186){
var seq__14161_14187__$1 = temp__5753__auto___14186;
if(cljs.core.chunked_seq_QMARK_(seq__14161_14187__$1)){
var c__4679__auto___14188 = cljs.core.chunk_first(seq__14161_14187__$1);
var G__14189 = cljs.core.chunk_rest(seq__14161_14187__$1);
var G__14190 = c__4679__auto___14188;
var G__14191 = cljs.core.count(c__4679__auto___14188);
var G__14192 = (0);
seq__14161_14177 = G__14189;
chunk__14162_14178 = G__14190;
count__14163_14179 = G__14191;
i__14164_14180 = G__14192;
continue;
} else {
var i_14193 = cljs.core.first(seq__14161_14187__$1);
app.colors.darken_color_in_db(i_14193);


var G__14194 = cljs.core.next(seq__14161_14187__$1);
var G__14195 = null;
var G__14196 = (0);
var G__14197 = (0);
seq__14161_14177 = G__14194;
chunk__14162_14178 = G__14195;
count__14163_14179 = G__14196;
i__14164_14180 = G__14197;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14165 = cljs.core.seq(app.db.contrastcolors);
var chunk__14166 = null;
var count__14167 = (0);
var i__14168 = (0);
while(true){
if((i__14168 < count__14167)){
var i = chunk__14166.cljs$core$IIndexed$_nth$arity$2(null,i__14168);
app.colors.darken_color_in_db(i);


var G__14198 = seq__14165;
var G__14199 = chunk__14166;
var G__14200 = count__14167;
var G__14201 = (i__14168 + (1));
seq__14165 = G__14198;
chunk__14166 = G__14199;
count__14167 = G__14200;
i__14168 = G__14201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14165);
if(temp__5753__auto__){
var seq__14165__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14165__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14165__$1);
var G__14202 = cljs.core.chunk_rest(seq__14165__$1);
var G__14203 = c__4679__auto__;
var G__14204 = cljs.core.count(c__4679__auto__);
var G__14205 = (0);
seq__14165 = G__14202;
chunk__14166 = G__14203;
count__14167 = G__14204;
i__14168 = G__14205;
continue;
} else {
var i = cljs.core.first(seq__14165__$1);
app.colors.darken_color_in_db(i);


var G__14206 = cljs.core.next(seq__14165__$1);
var G__14207 = null;
var G__14208 = (0);
var G__14209 = (0);
seq__14165 = G__14206;
chunk__14166 = G__14207;
count__14167 = G__14208;
i__14168 = G__14209;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__14169_14210 = cljs.core.seq(app.db.contrastcolors);
var chunk__14170_14211 = null;
var count__14171_14212 = (0);
var i__14172_14213 = (0);
while(true){
if((i__14172_14213 < count__14171_14212)){
var i_14214 = chunk__14170_14211.cljs$core$IIndexed$_nth$arity$2(null,i__14172_14213);
app.colors.lighten_color_in_db(i_14214);


var G__14215 = seq__14169_14210;
var G__14216 = chunk__14170_14211;
var G__14217 = count__14171_14212;
var G__14218 = (i__14172_14213 + (1));
seq__14169_14210 = G__14215;
chunk__14170_14211 = G__14216;
count__14171_14212 = G__14217;
i__14172_14213 = G__14218;
continue;
} else {
var temp__5753__auto___14219 = cljs.core.seq(seq__14169_14210);
if(temp__5753__auto___14219){
var seq__14169_14220__$1 = temp__5753__auto___14219;
if(cljs.core.chunked_seq_QMARK_(seq__14169_14220__$1)){
var c__4679__auto___14221 = cljs.core.chunk_first(seq__14169_14220__$1);
var G__14222 = cljs.core.chunk_rest(seq__14169_14220__$1);
var G__14223 = c__4679__auto___14221;
var G__14224 = cljs.core.count(c__4679__auto___14221);
var G__14225 = (0);
seq__14169_14210 = G__14222;
chunk__14170_14211 = G__14223;
count__14171_14212 = G__14224;
i__14172_14213 = G__14225;
continue;
} else {
var i_14226 = cljs.core.first(seq__14169_14220__$1);
app.colors.lighten_color_in_db(i_14226);


var G__14227 = cljs.core.next(seq__14169_14220__$1);
var G__14228 = null;
var G__14229 = (0);
var G__14230 = (0);
seq__14169_14210 = G__14227;
chunk__14170_14211 = G__14228;
count__14171_14212 = G__14229;
i__14172_14213 = G__14230;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14173 = cljs.core.seq(app.db.contrastcolors);
var chunk__14174 = null;
var count__14175 = (0);
var i__14176 = (0);
while(true){
if((i__14176 < count__14175)){
var i = chunk__14174.cljs$core$IIndexed$_nth$arity$2(null,i__14176);
app.colors.lighten_color_in_db(i);


var G__14231 = seq__14173;
var G__14232 = chunk__14174;
var G__14233 = count__14175;
var G__14234 = (i__14176 + (1));
seq__14173 = G__14231;
chunk__14174 = G__14232;
count__14175 = G__14233;
i__14176 = G__14234;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14173);
if(temp__5753__auto__){
var seq__14173__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14173__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14173__$1);
var G__14235 = cljs.core.chunk_rest(seq__14173__$1);
var G__14236 = c__4679__auto__;
var G__14237 = cljs.core.count(c__4679__auto__);
var G__14238 = (0);
seq__14173 = G__14235;
chunk__14174 = G__14236;
count__14175 = G__14237;
i__14176 = G__14238;
continue;
} else {
var i = cljs.core.first(seq__14173__$1);
app.colors.lighten_color_in_db(i);


var G__14239 = cljs.core.next(seq__14173__$1);
var G__14240 = null;
var G__14241 = (0);
var G__14242 = (0);
seq__14173 = G__14239;
chunk__14174 = G__14240;
count__14175 = G__14241;
i__14176 = G__14242;
continue;
}
} else {
return null;
}
}
break;
}
}
}
});
/**
 * return a random int between 0 and 360 
 */
app.colors.random_hue = (function app$colors$random_hue(){
return cljs.core.rand_int((360));
});
/**
 * hue-range returns a vecor of equidistant huevalues, but instead of
 * returning only int values, randomize the hue value by adding or subtracting
 * floating point values 0 <= val < 1.
 */
app.colors.hue_range = (function app$colors$hue_range(length,startvalue){
var distance = (function (){var G__14244 = ((360) / length);
return Math.floor(G__14244);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate((function (p1__14243_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__14243_SHARP_),(360));
}),startvalue));
});
/**
 * color-list takes a lightness and saturation value from the Cie-lch Color Space
 * and returns a vector of size length of db/randomcolors. Hue values for each color
 * are of equidistant value. Every lch color is converted to rgb, then clamped if 
 * necessary and finally converted to Hex format.
 */
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range(cljs.core.count(app.db.randomcolors),app.colors.random_hue());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14245_SHARP_){
return app.colors.rgbToHex(p1__14245_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14246_SHARP_){
return app.colors.clamped_rgb_vec(p1__14246_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14247_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__14247_SHARP_], null));
}),hr)));
});
/**
 * soft-palette returns a vector of 7 random soft colors.
 */
app.colors.soft_palette = (function app$colors$soft_palette(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
return app.colors.color_list(57.292,25.738);
} else {
return app.colors.color_list(44.921,25.738);
}
});
/**
 * warm-palette returns a vector of 7 random warm colors.
 */
app.colors.warm_palette = (function app$colors$warm_palette(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
return app.colors.color_list(60.39,33.84);
} else {
return app.colors.color_list(18.358,33.84);
}
});
/**
 * pop-palette returns a vector of 7 random 'pop' colors.
 */
app.colors.pop_palette = (function app$colors$pop_palette(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
return app.colors.color_list(77.02,58.1);
} else {
return app.colors.color_list(30.12,58.1);
}
});
/**
 * muted-palette returns a vector of 7 random muted colors.
 */
app.colors.muted_palette = (function app$colors$muted_palette(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
return app.colors.color_list(82.11,18.712);
} else {
return app.colors.color_list(40.02,18.712);
}
});
/**
 * custom-palette returns a vector of 7 random colors,
 * with the values for lightness and saturation set to
 * its given values.
 */
app.colors.custom_palette = (function app$colors$custom_palette(lightness,saturation){
return app.colors.color_list(lightness,saturation);
});
/**
 * set :keyword :builtin :string :functionname :variable
 * :type and constant colors in app-db to colors of a
 * random color palette
 */
app.colors.set_random_palette = (function app$colors$set_random_palette(palette){
var seq__14248 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__14249 = null;
var count__14250 = (0);
var i__14251 = (0);
while(true){
if((i__14251 < count__14250)){
var vec__14258 = chunk__14249.cljs$core$IIndexed$_nth$arity$2(null,i__14251);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14258,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14258,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__14264 = seq__14248;
var G__14265 = chunk__14249;
var G__14266 = count__14250;
var G__14267 = (i__14251 + (1));
seq__14248 = G__14264;
chunk__14249 = G__14265;
count__14250 = G__14266;
i__14251 = G__14267;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14248);
if(temp__5753__auto__){
var seq__14248__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14248__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14248__$1);
var G__14268 = cljs.core.chunk_rest(seq__14248__$1);
var G__14269 = c__4679__auto__;
var G__14270 = cljs.core.count(c__4679__auto__);
var G__14271 = (0);
seq__14248 = G__14268;
chunk__14249 = G__14269;
count__14250 = G__14270;
i__14251 = G__14271;
continue;
} else {
var vec__14261 = cljs.core.first(seq__14248__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14261,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14261,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__14272 = cljs.core.next(seq__14248__$1);
var G__14273 = null;
var G__14274 = (0);
var G__14275 = (0);
seq__14248 = G__14272;
chunk__14249 = G__14273;
count__14250 = G__14274;
i__14251 = G__14275;
continue;
}
} else {
return null;
}
}
break;
}
});
app.colors.current_year = (function app$colors$current_year(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear());
});
/**
 * return a theme map with additional lighter/darker 
 * variants of the background and foreground colors.
 */
app.colors.derive_colors_from_theme = (function app$colors$derive_colors_from_theme(theme){
var dbg = app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme));
if(dbg){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.12),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$year,app.colors.current_year()], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$year,app.colors.current_year()], 0));
}
});
