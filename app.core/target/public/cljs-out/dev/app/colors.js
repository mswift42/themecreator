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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11065_SHARP_){
return (p1__11065_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11066_SHARP_){
return (((p1__11066_SHARP_ < (0))) || ((p1__11066_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11067_SHARP_){
return app.colors.clamp(p1__11067_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11068 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11068,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11068,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11068,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11073 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11071_SHARP_){
return (p1__11071_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11072_SHARP_){
if((p1__11072_SHARP_ > 0.04045)){
return Math.pow(((p1__11072_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__11072_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11077 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11076_SHARP_){
if((p1__11076_SHARP_ > 0.008856)){
return Math.pow(p1__11076_SHARP_,((1) / (3)));
} else {
return ((p1__11076_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,(2),null);
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
var vec__11080 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11080,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11080,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11080,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11083 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11086 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11086,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11086,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11086,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11086,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11086,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11092 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11089_SHARP_){
return (p1__11089_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11092,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11092,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11092,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11092,x,y,z,r,g,b,rgb){
return (function (p1__11090_SHARP_){
return Math.round((p1__11090_SHARP_ * (255)));
});})(vec__11092,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11092,x,y,z,r,g,b,rgb){
return (function (p1__11091_SHARP_){
if((p1__11091_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__11091_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__11091_SHARP_ * 12.92);
}
});})(vec__11092,x,y,z,r,g,b,rgb))
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
var G__11096 = arguments.length;
switch (G__11096) {
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
var G__11097 = (function (){var G__11098 = goog.color.hexToRgb(colorstring);
var G__11099 = factor;
return goog.color.darken(G__11098,G__11099);
})();
return goog.color.rgbArrayToHex(G__11097);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__11102 = arguments.length;
switch (G__11102) {
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
var G__11103 = (function (){var G__11104 = goog.color.hexToRgb(colorstring);
var G__11105 = factor;
return goog.color.lighten(G__11104,G__11105);
})();
return goog.color.rgbArrayToHex(G__11103);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11107 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11110 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11110) : color.call(null,G__11110));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11111 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11111) : color.call(null,G__11111));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__11112_11128 = cljs.core.seq(app.db.contrastcolors);
var chunk__11113_11129 = null;
var count__11114_11130 = (0);
var i__11115_11131 = (0);
while(true){
if((i__11115_11131 < count__11114_11130)){
var i_11132 = chunk__11113_11129.cljs$core$IIndexed$_nth$arity$2(null,i__11115_11131);
app.colors.lighten_color_in_db(i_11132);


var G__11133 = seq__11112_11128;
var G__11134 = chunk__11113_11129;
var G__11135 = count__11114_11130;
var G__11136 = (i__11115_11131 + (1));
seq__11112_11128 = G__11133;
chunk__11113_11129 = G__11134;
count__11114_11130 = G__11135;
i__11115_11131 = G__11136;
continue;
} else {
var temp__5735__auto___11137 = cljs.core.seq(seq__11112_11128);
if(temp__5735__auto___11137){
var seq__11112_11138__$1 = temp__5735__auto___11137;
if(cljs.core.chunked_seq_QMARK_(seq__11112_11138__$1)){
var c__4550__auto___11139 = cljs.core.chunk_first(seq__11112_11138__$1);
var G__11140 = cljs.core.chunk_rest(seq__11112_11138__$1);
var G__11141 = c__4550__auto___11139;
var G__11142 = cljs.core.count(c__4550__auto___11139);
var G__11143 = (0);
seq__11112_11128 = G__11140;
chunk__11113_11129 = G__11141;
count__11114_11130 = G__11142;
i__11115_11131 = G__11143;
continue;
} else {
var i_11144 = cljs.core.first(seq__11112_11138__$1);
app.colors.lighten_color_in_db(i_11144);


var G__11145 = cljs.core.next(seq__11112_11138__$1);
var G__11146 = null;
var G__11147 = (0);
var G__11148 = (0);
seq__11112_11128 = G__11145;
chunk__11113_11129 = G__11146;
count__11114_11130 = G__11147;
i__11115_11131 = G__11148;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11116 = cljs.core.seq(app.db.contrastcolors);
var chunk__11117 = null;
var count__11118 = (0);
var i__11119 = (0);
while(true){
if((i__11119 < count__11118)){
var i = chunk__11117.cljs$core$IIndexed$_nth$arity$2(null,i__11119);
app.colors.lighten_color_in_db(i);


var G__11149 = seq__11116;
var G__11150 = chunk__11117;
var G__11151 = count__11118;
var G__11152 = (i__11119 + (1));
seq__11116 = G__11149;
chunk__11117 = G__11150;
count__11118 = G__11151;
i__11119 = G__11152;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11116);
if(temp__5735__auto__){
var seq__11116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11116__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11116__$1);
var G__11153 = cljs.core.chunk_rest(seq__11116__$1);
var G__11154 = c__4550__auto__;
var G__11155 = cljs.core.count(c__4550__auto__);
var G__11156 = (0);
seq__11116 = G__11153;
chunk__11117 = G__11154;
count__11118 = G__11155;
i__11119 = G__11156;
continue;
} else {
var i = cljs.core.first(seq__11116__$1);
app.colors.lighten_color_in_db(i);


var G__11157 = cljs.core.next(seq__11116__$1);
var G__11158 = null;
var G__11159 = (0);
var G__11160 = (0);
seq__11116 = G__11157;
chunk__11117 = G__11158;
count__11118 = G__11159;
i__11119 = G__11160;
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
var seq__11120_11161 = cljs.core.seq(app.db.contrastcolors);
var chunk__11121_11162 = null;
var count__11122_11163 = (0);
var i__11123_11164 = (0);
while(true){
if((i__11123_11164 < count__11122_11163)){
var i_11165 = chunk__11121_11162.cljs$core$IIndexed$_nth$arity$2(null,i__11123_11164);
app.colors.darken_color_in_db(i_11165);


var G__11166 = seq__11120_11161;
var G__11167 = chunk__11121_11162;
var G__11168 = count__11122_11163;
var G__11169 = (i__11123_11164 + (1));
seq__11120_11161 = G__11166;
chunk__11121_11162 = G__11167;
count__11122_11163 = G__11168;
i__11123_11164 = G__11169;
continue;
} else {
var temp__5735__auto___11170 = cljs.core.seq(seq__11120_11161);
if(temp__5735__auto___11170){
var seq__11120_11171__$1 = temp__5735__auto___11170;
if(cljs.core.chunked_seq_QMARK_(seq__11120_11171__$1)){
var c__4550__auto___11172 = cljs.core.chunk_first(seq__11120_11171__$1);
var G__11173 = cljs.core.chunk_rest(seq__11120_11171__$1);
var G__11174 = c__4550__auto___11172;
var G__11175 = cljs.core.count(c__4550__auto___11172);
var G__11176 = (0);
seq__11120_11161 = G__11173;
chunk__11121_11162 = G__11174;
count__11122_11163 = G__11175;
i__11123_11164 = G__11176;
continue;
} else {
var i_11177 = cljs.core.first(seq__11120_11171__$1);
app.colors.darken_color_in_db(i_11177);


var G__11178 = cljs.core.next(seq__11120_11171__$1);
var G__11179 = null;
var G__11180 = (0);
var G__11181 = (0);
seq__11120_11161 = G__11178;
chunk__11121_11162 = G__11179;
count__11122_11163 = G__11180;
i__11123_11164 = G__11181;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11124 = cljs.core.seq(app.db.contrastcolors);
var chunk__11125 = null;
var count__11126 = (0);
var i__11127 = (0);
while(true){
if((i__11127 < count__11126)){
var i = chunk__11125.cljs$core$IIndexed$_nth$arity$2(null,i__11127);
app.colors.darken_color_in_db(i);


var G__11182 = seq__11124;
var G__11183 = chunk__11125;
var G__11184 = count__11126;
var G__11185 = (i__11127 + (1));
seq__11124 = G__11182;
chunk__11125 = G__11183;
count__11126 = G__11184;
i__11127 = G__11185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11124);
if(temp__5735__auto__){
var seq__11124__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11124__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11124__$1);
var G__11186 = cljs.core.chunk_rest(seq__11124__$1);
var G__11187 = c__4550__auto__;
var G__11188 = cljs.core.count(c__4550__auto__);
var G__11189 = (0);
seq__11124 = G__11186;
chunk__11125 = G__11187;
count__11126 = G__11188;
i__11127 = G__11189;
continue;
} else {
var i = cljs.core.first(seq__11124__$1);
app.colors.darken_color_in_db(i);


var G__11190 = cljs.core.next(seq__11124__$1);
var G__11191 = null;
var G__11192 = (0);
var G__11193 = (0);
seq__11124 = G__11190;
chunk__11125 = G__11191;
count__11126 = G__11192;
i__11127 = G__11193;
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
var seq__11194_11210 = cljs.core.seq(app.db.contrastcolors);
var chunk__11195_11211 = null;
var count__11196_11212 = (0);
var i__11197_11213 = (0);
while(true){
if((i__11197_11213 < count__11196_11212)){
var i_11214 = chunk__11195_11211.cljs$core$IIndexed$_nth$arity$2(null,i__11197_11213);
app.colors.darken_color_in_db(i_11214);


var G__11215 = seq__11194_11210;
var G__11216 = chunk__11195_11211;
var G__11217 = count__11196_11212;
var G__11218 = (i__11197_11213 + (1));
seq__11194_11210 = G__11215;
chunk__11195_11211 = G__11216;
count__11196_11212 = G__11217;
i__11197_11213 = G__11218;
continue;
} else {
var temp__5735__auto___11219 = cljs.core.seq(seq__11194_11210);
if(temp__5735__auto___11219){
var seq__11194_11220__$1 = temp__5735__auto___11219;
if(cljs.core.chunked_seq_QMARK_(seq__11194_11220__$1)){
var c__4550__auto___11221 = cljs.core.chunk_first(seq__11194_11220__$1);
var G__11222 = cljs.core.chunk_rest(seq__11194_11220__$1);
var G__11223 = c__4550__auto___11221;
var G__11224 = cljs.core.count(c__4550__auto___11221);
var G__11225 = (0);
seq__11194_11210 = G__11222;
chunk__11195_11211 = G__11223;
count__11196_11212 = G__11224;
i__11197_11213 = G__11225;
continue;
} else {
var i_11226 = cljs.core.first(seq__11194_11220__$1);
app.colors.darken_color_in_db(i_11226);


var G__11227 = cljs.core.next(seq__11194_11220__$1);
var G__11228 = null;
var G__11229 = (0);
var G__11230 = (0);
seq__11194_11210 = G__11227;
chunk__11195_11211 = G__11228;
count__11196_11212 = G__11229;
i__11197_11213 = G__11230;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11198 = cljs.core.seq(app.db.contrastcolors);
var chunk__11199 = null;
var count__11200 = (0);
var i__11201 = (0);
while(true){
if((i__11201 < count__11200)){
var i = chunk__11199.cljs$core$IIndexed$_nth$arity$2(null,i__11201);
app.colors.darken_color_in_db(i);


var G__11231 = seq__11198;
var G__11232 = chunk__11199;
var G__11233 = count__11200;
var G__11234 = (i__11201 + (1));
seq__11198 = G__11231;
chunk__11199 = G__11232;
count__11200 = G__11233;
i__11201 = G__11234;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11198);
if(temp__5735__auto__){
var seq__11198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11198__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11198__$1);
var G__11235 = cljs.core.chunk_rest(seq__11198__$1);
var G__11236 = c__4550__auto__;
var G__11237 = cljs.core.count(c__4550__auto__);
var G__11238 = (0);
seq__11198 = G__11235;
chunk__11199 = G__11236;
count__11200 = G__11237;
i__11201 = G__11238;
continue;
} else {
var i = cljs.core.first(seq__11198__$1);
app.colors.darken_color_in_db(i);


var G__11239 = cljs.core.next(seq__11198__$1);
var G__11240 = null;
var G__11241 = (0);
var G__11242 = (0);
seq__11198 = G__11239;
chunk__11199 = G__11240;
count__11200 = G__11241;
i__11201 = G__11242;
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
var seq__11202_11243 = cljs.core.seq(app.db.contrastcolors);
var chunk__11203_11244 = null;
var count__11204_11245 = (0);
var i__11205_11246 = (0);
while(true){
if((i__11205_11246 < count__11204_11245)){
var i_11247 = chunk__11203_11244.cljs$core$IIndexed$_nth$arity$2(null,i__11205_11246);
app.colors.lighten_color_in_db(i_11247);


var G__11248 = seq__11202_11243;
var G__11249 = chunk__11203_11244;
var G__11250 = count__11204_11245;
var G__11251 = (i__11205_11246 + (1));
seq__11202_11243 = G__11248;
chunk__11203_11244 = G__11249;
count__11204_11245 = G__11250;
i__11205_11246 = G__11251;
continue;
} else {
var temp__5735__auto___11252 = cljs.core.seq(seq__11202_11243);
if(temp__5735__auto___11252){
var seq__11202_11253__$1 = temp__5735__auto___11252;
if(cljs.core.chunked_seq_QMARK_(seq__11202_11253__$1)){
var c__4550__auto___11254 = cljs.core.chunk_first(seq__11202_11253__$1);
var G__11255 = cljs.core.chunk_rest(seq__11202_11253__$1);
var G__11256 = c__4550__auto___11254;
var G__11257 = cljs.core.count(c__4550__auto___11254);
var G__11258 = (0);
seq__11202_11243 = G__11255;
chunk__11203_11244 = G__11256;
count__11204_11245 = G__11257;
i__11205_11246 = G__11258;
continue;
} else {
var i_11259 = cljs.core.first(seq__11202_11253__$1);
app.colors.lighten_color_in_db(i_11259);


var G__11260 = cljs.core.next(seq__11202_11253__$1);
var G__11261 = null;
var G__11262 = (0);
var G__11263 = (0);
seq__11202_11243 = G__11260;
chunk__11203_11244 = G__11261;
count__11204_11245 = G__11262;
i__11205_11246 = G__11263;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11206 = cljs.core.seq(app.db.contrastcolors);
var chunk__11207 = null;
var count__11208 = (0);
var i__11209 = (0);
while(true){
if((i__11209 < count__11208)){
var i = chunk__11207.cljs$core$IIndexed$_nth$arity$2(null,i__11209);
app.colors.lighten_color_in_db(i);


var G__11264 = seq__11206;
var G__11265 = chunk__11207;
var G__11266 = count__11208;
var G__11267 = (i__11209 + (1));
seq__11206 = G__11264;
chunk__11207 = G__11265;
count__11208 = G__11266;
i__11209 = G__11267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11206);
if(temp__5735__auto__){
var seq__11206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11206__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11206__$1);
var G__11268 = cljs.core.chunk_rest(seq__11206__$1);
var G__11269 = c__4550__auto__;
var G__11270 = cljs.core.count(c__4550__auto__);
var G__11271 = (0);
seq__11206 = G__11268;
chunk__11207 = G__11269;
count__11208 = G__11270;
i__11209 = G__11271;
continue;
} else {
var i = cljs.core.first(seq__11206__$1);
app.colors.lighten_color_in_db(i);


var G__11272 = cljs.core.next(seq__11206__$1);
var G__11273 = null;
var G__11274 = (0);
var G__11275 = (0);
seq__11206 = G__11272;
chunk__11207 = G__11273;
count__11208 = G__11274;
i__11209 = G__11275;
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
var distance = (function (){var G__11277 = ((360) / length);
return Math.floor(G__11277);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11276_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__11276_SHARP_),(360));
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
return (function (p1__11278_SHARP_){
return app.colors.rgbToHex(p1__11278_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11279_SHARP_){
return app.colors.clamped_rgb_vec(p1__11279_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11280_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11280_SHARP_], null));
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
var seq__11281 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11282 = null;
var count__11283 = (0);
var i__11284 = (0);
while(true){
if((i__11284 < count__11283)){
var vec__11291 = chunk__11282.cljs$core$IIndexed$_nth$arity$2(null,i__11284);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11291,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11291,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__11297 = seq__11281;
var G__11298 = chunk__11282;
var G__11299 = count__11283;
var G__11300 = (i__11284 + (1));
seq__11281 = G__11297;
chunk__11282 = G__11298;
count__11283 = G__11299;
i__11284 = G__11300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11281);
if(temp__5735__auto__){
var seq__11281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11281__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11281__$1);
var G__11301 = cljs.core.chunk_rest(seq__11281__$1);
var G__11302 = c__4550__auto__;
var G__11303 = cljs.core.count(c__4550__auto__);
var G__11304 = (0);
seq__11281 = G__11301;
chunk__11282 = G__11302;
count__11283 = G__11303;
i__11284 = G__11304;
continue;
} else {
var vec__11294 = cljs.core.first(seq__11281__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11294,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11294,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__11305 = cljs.core.next(seq__11281__$1);
var G__11306 = null;
var G__11307 = (0);
var G__11308 = (0);
seq__11281 = G__11305;
chunk__11282 = G__11306;
count__11283 = G__11307;
i__11284 = G__11308;
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
