// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14064_SHARP_){
return (p1__14064_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__14065_SHARP_){
return (((p1__14065_SHARP_ < (0))) || ((p1__14065_SHARP_ > (255))));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__4219__auto__ = (function (){var x__4222__auto__ = val;
var y__4223__auto__ = (255);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14066_SHARP_){
return app.colors.clamp(p1__14066_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__14067 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14067,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14067,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14067,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__14072 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14070_SHARP_){
return (p1__14070_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14071_SHARP_){
if((p1__14071_SHARP_ > 0.04045)){
return Math.pow(((p1__14071_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__14071_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__14076 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14075_SHARP_){
if((p1__14075_SHARP_ > 0.008856)){
return Math.pow(p1__14075_SHARP_,((1) / (3)));
} else {
return ((p1__14075_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14076,(2),null);
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
var vec__14079 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__14082 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__14085 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__14085,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__14085,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__14091 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14088_SHARP_){
return (p1__14088_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__14091,x,y,z,r,g,b,rgb){
return (function (p1__14089_SHARP_){
return Math.round((p1__14089_SHARP_ * (255)));
});})(vec__14091,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__14091,x,y,z,r,g,b,rgb){
return (function (p1__14090_SHARP_){
if((p1__14090_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__14090_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__14090_SHARP_ * 12.92);
}
});})(vec__14091,x,y,z,r,g,b,rgb))
,rgb));
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
var G__14095 = arguments.length;
switch (G__14095) {
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

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__14096 = (function (){var G__14097 = goog.color.hexToRgb(colorstring);
var G__14098 = factor;
return goog.color.darken(G__14097,G__14098);
})();
return goog.color.rgbArrayToHex(G__14096);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__14101 = arguments.length;
switch (G__14101) {
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

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__14102 = (function (){var G__14103 = goog.color.hexToRgb(colorstring);
var G__14104 = factor;
return goog.color.lighten(G__14103,G__14104);
})();
return goog.color.rgbArrayToHex(G__14102);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__14106 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__14109 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__14109) : color.call(null,G__14109));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__14110 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__14110) : color.call(null,G__14110));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__14111_14127 = cljs.core.seq(app.db.contrastcolors);
var chunk__14112_14128 = null;
var count__14113_14129 = (0);
var i__14114_14130 = (0);
while(true){
if((i__14114_14130 < count__14113_14129)){
var i_14131 = chunk__14112_14128.cljs$core$IIndexed$_nth$arity$2(null,i__14114_14130);
app.colors.lighten_color_in_db(i_14131);


var G__14132 = seq__14111_14127;
var G__14133 = chunk__14112_14128;
var G__14134 = count__14113_14129;
var G__14135 = (i__14114_14130 + (1));
seq__14111_14127 = G__14132;
chunk__14112_14128 = G__14133;
count__14113_14129 = G__14134;
i__14114_14130 = G__14135;
continue;
} else {
var temp__5735__auto___14136 = cljs.core.seq(seq__14111_14127);
if(temp__5735__auto___14136){
var seq__14111_14137__$1 = temp__5735__auto___14136;
if(cljs.core.chunked_seq_QMARK_(seq__14111_14137__$1)){
var c__4550__auto___14138 = cljs.core.chunk_first(seq__14111_14137__$1);
var G__14139 = cljs.core.chunk_rest(seq__14111_14137__$1);
var G__14140 = c__4550__auto___14138;
var G__14141 = cljs.core.count(c__4550__auto___14138);
var G__14142 = (0);
seq__14111_14127 = G__14139;
chunk__14112_14128 = G__14140;
count__14113_14129 = G__14141;
i__14114_14130 = G__14142;
continue;
} else {
var i_14143 = cljs.core.first(seq__14111_14137__$1);
app.colors.lighten_color_in_db(i_14143);


var G__14144 = cljs.core.next(seq__14111_14137__$1);
var G__14145 = null;
var G__14146 = (0);
var G__14147 = (0);
seq__14111_14127 = G__14144;
chunk__14112_14128 = G__14145;
count__14113_14129 = G__14146;
i__14114_14130 = G__14147;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14115 = cljs.core.seq(app.db.contrastcolors);
var chunk__14116 = null;
var count__14117 = (0);
var i__14118 = (0);
while(true){
if((i__14118 < count__14117)){
var i = chunk__14116.cljs$core$IIndexed$_nth$arity$2(null,i__14118);
app.colors.lighten_color_in_db(i);


var G__14148 = seq__14115;
var G__14149 = chunk__14116;
var G__14150 = count__14117;
var G__14151 = (i__14118 + (1));
seq__14115 = G__14148;
chunk__14116 = G__14149;
count__14117 = G__14150;
i__14118 = G__14151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14115);
if(temp__5735__auto__){
var seq__14115__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14115__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14115__$1);
var G__14152 = cljs.core.chunk_rest(seq__14115__$1);
var G__14153 = c__4550__auto__;
var G__14154 = cljs.core.count(c__4550__auto__);
var G__14155 = (0);
seq__14115 = G__14152;
chunk__14116 = G__14153;
count__14117 = G__14154;
i__14118 = G__14155;
continue;
} else {
var i = cljs.core.first(seq__14115__$1);
app.colors.lighten_color_in_db(i);


var G__14156 = cljs.core.next(seq__14115__$1);
var G__14157 = null;
var G__14158 = (0);
var G__14159 = (0);
seq__14115 = G__14156;
chunk__14116 = G__14157;
count__14117 = G__14158;
i__14118 = G__14159;
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
var seq__14119_14160 = cljs.core.seq(app.db.contrastcolors);
var chunk__14120_14161 = null;
var count__14121_14162 = (0);
var i__14122_14163 = (0);
while(true){
if((i__14122_14163 < count__14121_14162)){
var i_14164 = chunk__14120_14161.cljs$core$IIndexed$_nth$arity$2(null,i__14122_14163);
app.colors.darken_color_in_db(i_14164);


var G__14165 = seq__14119_14160;
var G__14166 = chunk__14120_14161;
var G__14167 = count__14121_14162;
var G__14168 = (i__14122_14163 + (1));
seq__14119_14160 = G__14165;
chunk__14120_14161 = G__14166;
count__14121_14162 = G__14167;
i__14122_14163 = G__14168;
continue;
} else {
var temp__5735__auto___14169 = cljs.core.seq(seq__14119_14160);
if(temp__5735__auto___14169){
var seq__14119_14170__$1 = temp__5735__auto___14169;
if(cljs.core.chunked_seq_QMARK_(seq__14119_14170__$1)){
var c__4550__auto___14171 = cljs.core.chunk_first(seq__14119_14170__$1);
var G__14172 = cljs.core.chunk_rest(seq__14119_14170__$1);
var G__14173 = c__4550__auto___14171;
var G__14174 = cljs.core.count(c__4550__auto___14171);
var G__14175 = (0);
seq__14119_14160 = G__14172;
chunk__14120_14161 = G__14173;
count__14121_14162 = G__14174;
i__14122_14163 = G__14175;
continue;
} else {
var i_14176 = cljs.core.first(seq__14119_14170__$1);
app.colors.darken_color_in_db(i_14176);


var G__14177 = cljs.core.next(seq__14119_14170__$1);
var G__14178 = null;
var G__14179 = (0);
var G__14180 = (0);
seq__14119_14160 = G__14177;
chunk__14120_14161 = G__14178;
count__14121_14162 = G__14179;
i__14122_14163 = G__14180;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14123 = cljs.core.seq(app.db.contrastcolors);
var chunk__14124 = null;
var count__14125 = (0);
var i__14126 = (0);
while(true){
if((i__14126 < count__14125)){
var i = chunk__14124.cljs$core$IIndexed$_nth$arity$2(null,i__14126);
app.colors.darken_color_in_db(i);


var G__14181 = seq__14123;
var G__14182 = chunk__14124;
var G__14183 = count__14125;
var G__14184 = (i__14126 + (1));
seq__14123 = G__14181;
chunk__14124 = G__14182;
count__14125 = G__14183;
i__14126 = G__14184;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14123);
if(temp__5735__auto__){
var seq__14123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14123__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14123__$1);
var G__14185 = cljs.core.chunk_rest(seq__14123__$1);
var G__14186 = c__4550__auto__;
var G__14187 = cljs.core.count(c__4550__auto__);
var G__14188 = (0);
seq__14123 = G__14185;
chunk__14124 = G__14186;
count__14125 = G__14187;
i__14126 = G__14188;
continue;
} else {
var i = cljs.core.first(seq__14123__$1);
app.colors.darken_color_in_db(i);


var G__14189 = cljs.core.next(seq__14123__$1);
var G__14190 = null;
var G__14191 = (0);
var G__14192 = (0);
seq__14123 = G__14189;
chunk__14124 = G__14190;
count__14125 = G__14191;
i__14126 = G__14192;
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
var seq__14193_14209 = cljs.core.seq(app.db.contrastcolors);
var chunk__14194_14210 = null;
var count__14195_14211 = (0);
var i__14196_14212 = (0);
while(true){
if((i__14196_14212 < count__14195_14211)){
var i_14213 = chunk__14194_14210.cljs$core$IIndexed$_nth$arity$2(null,i__14196_14212);
app.colors.darken_color_in_db(i_14213);


var G__14214 = seq__14193_14209;
var G__14215 = chunk__14194_14210;
var G__14216 = count__14195_14211;
var G__14217 = (i__14196_14212 + (1));
seq__14193_14209 = G__14214;
chunk__14194_14210 = G__14215;
count__14195_14211 = G__14216;
i__14196_14212 = G__14217;
continue;
} else {
var temp__5735__auto___14218 = cljs.core.seq(seq__14193_14209);
if(temp__5735__auto___14218){
var seq__14193_14219__$1 = temp__5735__auto___14218;
if(cljs.core.chunked_seq_QMARK_(seq__14193_14219__$1)){
var c__4550__auto___14220 = cljs.core.chunk_first(seq__14193_14219__$1);
var G__14221 = cljs.core.chunk_rest(seq__14193_14219__$1);
var G__14222 = c__4550__auto___14220;
var G__14223 = cljs.core.count(c__4550__auto___14220);
var G__14224 = (0);
seq__14193_14209 = G__14221;
chunk__14194_14210 = G__14222;
count__14195_14211 = G__14223;
i__14196_14212 = G__14224;
continue;
} else {
var i_14225 = cljs.core.first(seq__14193_14219__$1);
app.colors.darken_color_in_db(i_14225);


var G__14226 = cljs.core.next(seq__14193_14219__$1);
var G__14227 = null;
var G__14228 = (0);
var G__14229 = (0);
seq__14193_14209 = G__14226;
chunk__14194_14210 = G__14227;
count__14195_14211 = G__14228;
i__14196_14212 = G__14229;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14197 = cljs.core.seq(app.db.contrastcolors);
var chunk__14198 = null;
var count__14199 = (0);
var i__14200 = (0);
while(true){
if((i__14200 < count__14199)){
var i = chunk__14198.cljs$core$IIndexed$_nth$arity$2(null,i__14200);
app.colors.darken_color_in_db(i);


var G__14230 = seq__14197;
var G__14231 = chunk__14198;
var G__14232 = count__14199;
var G__14233 = (i__14200 + (1));
seq__14197 = G__14230;
chunk__14198 = G__14231;
count__14199 = G__14232;
i__14200 = G__14233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14197);
if(temp__5735__auto__){
var seq__14197__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14197__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14197__$1);
var G__14234 = cljs.core.chunk_rest(seq__14197__$1);
var G__14235 = c__4550__auto__;
var G__14236 = cljs.core.count(c__4550__auto__);
var G__14237 = (0);
seq__14197 = G__14234;
chunk__14198 = G__14235;
count__14199 = G__14236;
i__14200 = G__14237;
continue;
} else {
var i = cljs.core.first(seq__14197__$1);
app.colors.darken_color_in_db(i);


var G__14238 = cljs.core.next(seq__14197__$1);
var G__14239 = null;
var G__14240 = (0);
var G__14241 = (0);
seq__14197 = G__14238;
chunk__14198 = G__14239;
count__14199 = G__14240;
i__14200 = G__14241;
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
var seq__14201_14242 = cljs.core.seq(app.db.contrastcolors);
var chunk__14202_14243 = null;
var count__14203_14244 = (0);
var i__14204_14245 = (0);
while(true){
if((i__14204_14245 < count__14203_14244)){
var i_14246 = chunk__14202_14243.cljs$core$IIndexed$_nth$arity$2(null,i__14204_14245);
app.colors.lighten_color_in_db(i_14246);


var G__14247 = seq__14201_14242;
var G__14248 = chunk__14202_14243;
var G__14249 = count__14203_14244;
var G__14250 = (i__14204_14245 + (1));
seq__14201_14242 = G__14247;
chunk__14202_14243 = G__14248;
count__14203_14244 = G__14249;
i__14204_14245 = G__14250;
continue;
} else {
var temp__5735__auto___14251 = cljs.core.seq(seq__14201_14242);
if(temp__5735__auto___14251){
var seq__14201_14252__$1 = temp__5735__auto___14251;
if(cljs.core.chunked_seq_QMARK_(seq__14201_14252__$1)){
var c__4550__auto___14253 = cljs.core.chunk_first(seq__14201_14252__$1);
var G__14254 = cljs.core.chunk_rest(seq__14201_14252__$1);
var G__14255 = c__4550__auto___14253;
var G__14256 = cljs.core.count(c__4550__auto___14253);
var G__14257 = (0);
seq__14201_14242 = G__14254;
chunk__14202_14243 = G__14255;
count__14203_14244 = G__14256;
i__14204_14245 = G__14257;
continue;
} else {
var i_14258 = cljs.core.first(seq__14201_14252__$1);
app.colors.lighten_color_in_db(i_14258);


var G__14259 = cljs.core.next(seq__14201_14252__$1);
var G__14260 = null;
var G__14261 = (0);
var G__14262 = (0);
seq__14201_14242 = G__14259;
chunk__14202_14243 = G__14260;
count__14203_14244 = G__14261;
i__14204_14245 = G__14262;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__14205 = cljs.core.seq(app.db.contrastcolors);
var chunk__14206 = null;
var count__14207 = (0);
var i__14208 = (0);
while(true){
if((i__14208 < count__14207)){
var i = chunk__14206.cljs$core$IIndexed$_nth$arity$2(null,i__14208);
app.colors.lighten_color_in_db(i);


var G__14263 = seq__14205;
var G__14264 = chunk__14206;
var G__14265 = count__14207;
var G__14266 = (i__14208 + (1));
seq__14205 = G__14263;
chunk__14206 = G__14264;
count__14207 = G__14265;
i__14208 = G__14266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14205);
if(temp__5735__auto__){
var seq__14205__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14205__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14205__$1);
var G__14267 = cljs.core.chunk_rest(seq__14205__$1);
var G__14268 = c__4550__auto__;
var G__14269 = cljs.core.count(c__4550__auto__);
var G__14270 = (0);
seq__14205 = G__14267;
chunk__14206 = G__14268;
count__14207 = G__14269;
i__14208 = G__14270;
continue;
} else {
var i = cljs.core.first(seq__14205__$1);
app.colors.lighten_color_in_db(i);


var G__14271 = cljs.core.next(seq__14205__$1);
var G__14272 = null;
var G__14273 = (0);
var G__14274 = (0);
seq__14205 = G__14271;
chunk__14206 = G__14272;
count__14207 = G__14273;
i__14208 = G__14274;
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
var distance = (function (){var G__14276 = ((360) / length);
return Math.floor(G__14276);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__14275_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__14275_SHARP_),(360));
});})(distance))
,startvalue));
});
/**
 * color-list takes a lightness and saturation value from the Cie-lch Color Space
 * and returns a vector of size length of db/randomcolors. Hue values for each color
 * are of equidistant value. Every lch color is converted to rgb, then clamped if 
 * necessary and finally converted to Hex format.
 */
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range(cljs.core.count(app.db.randomcolors),app.colors.random_hue());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__14277_SHARP_){
return app.colors.rgbToHex(p1__14277_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__14278_SHARP_){
return app.colors.clamped_rgb_vec(p1__14278_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__14279_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__14279_SHARP_], null));
});})(hr))
,hr)));
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
var seq__14280 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__14281 = null;
var count__14282 = (0);
var i__14283 = (0);
while(true){
if((i__14283 < count__14282)){
var vec__14290 = chunk__14281.cljs$core$IIndexed$_nth$arity$2(null,i__14283);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14290,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14290,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__14296 = seq__14280;
var G__14297 = chunk__14281;
var G__14298 = count__14282;
var G__14299 = (i__14283 + (1));
seq__14280 = G__14296;
chunk__14281 = G__14297;
count__14282 = G__14298;
i__14283 = G__14299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14280);
if(temp__5735__auto__){
var seq__14280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14280__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14280__$1);
var G__14300 = cljs.core.chunk_rest(seq__14280__$1);
var G__14301 = c__4550__auto__;
var G__14302 = cljs.core.count(c__4550__auto__);
var G__14303 = (0);
seq__14280 = G__14300;
chunk__14281 = G__14301;
count__14282 = G__14302;
i__14283 = G__14303;
continue;
} else {
var vec__14293 = cljs.core.first(seq__14280__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14293,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14293,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__14304 = cljs.core.next(seq__14280__$1);
var G__14305 = null;
var G__14306 = (0);
var G__14307 = (0);
seq__14280 = G__14304;
chunk__14281 = G__14305;
count__14282 = G__14306;
i__14283 = G__14307;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * return a theme map with additional lighter/darker 
 * variants of the background and foreground colors.
 */
app.colors.derive_colors_from_theme = (function app$colors$derive_colors_from_theme(theme){
var dbg = app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme));
if(dbg){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.12),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
}
});
