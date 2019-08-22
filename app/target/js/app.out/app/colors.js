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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6046_SHARP_){
return (p1__6046_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__6047_SHARP_){
return (((p1__6047_SHARP_ < (0))) || ((p1__6047_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6048_SHARP_){
return app.colors.clamp(p1__6048_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__6049 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6049,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6049,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6049,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__6054 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6052_SHARP_){
return (p1__6052_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6053_SHARP_){
if((p1__6053_SHARP_ > 0.04045)){
return Math.pow(((p1__6053_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__6053_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6054,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6054,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6054,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__6058 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6057_SHARP_){
if((p1__6057_SHARP_ > 0.008856)){
return Math.pow(p1__6057_SHARP_,((1) / (3)));
} else {
return ((p1__6057_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6058,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6058,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6058,(2),null);
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
var vec__6061 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6061,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6061,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6061,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__6064 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__6067 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6067,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6067,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6067,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__6067,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__6067,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__6073 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6070_SHARP_){
return (p1__6070_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__6073,x,y,z,r,g,b,rgb){
return (function (p1__6071_SHARP_){
return Math.round((p1__6071_SHARP_ * (255)));
});})(vec__6073,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__6073,x,y,z,r,g,b,rgb){
return (function (p1__6072_SHARP_){
if((p1__6072_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__6072_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__6072_SHARP_ * 12.92);
}
});})(vec__6073,x,y,z,r,g,b,rgb))
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
var G__6077 = arguments.length;
switch (G__6077) {
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
var G__6078 = (function (){var G__6079 = goog.color.hexToRgb(colorstring);
var G__6080 = factor;
return goog.color.darken(G__6079,G__6080);
})();
return goog.color.rgbArrayToHex(G__6078);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__6083 = arguments.length;
switch (G__6083) {
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
var G__6084 = (function (){var G__6085 = goog.color.hexToRgb(colorstring);
var G__6086 = factor;
return goog.color.lighten(G__6085,G__6086);
})();
return goog.color.rgbArrayToHex(G__6084);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__6088 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6088,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6088,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6088,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__6091 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__6091) : color.call(null,G__6091));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__6092 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__6092) : color.call(null,G__6092));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__6093_6109 = cljs.core.seq(app.db.contrastcolors);
var chunk__6094_6110 = null;
var count__6095_6111 = (0);
var i__6096_6112 = (0);
while(true){
if((i__6096_6112 < count__6095_6111)){
var i_6113 = chunk__6094_6110.cljs$core$IIndexed$_nth$arity$2(null,i__6096_6112);
app.colors.lighten_color_in_db(i_6113);


var G__6114 = seq__6093_6109;
var G__6115 = chunk__6094_6110;
var G__6116 = count__6095_6111;
var G__6117 = (i__6096_6112 + (1));
seq__6093_6109 = G__6114;
chunk__6094_6110 = G__6115;
count__6095_6111 = G__6116;
i__6096_6112 = G__6117;
continue;
} else {
var temp__5457__auto___6118 = cljs.core.seq(seq__6093_6109);
if(temp__5457__auto___6118){
var seq__6093_6119__$1 = temp__5457__auto___6118;
if(cljs.core.chunked_seq_QMARK_(seq__6093_6119__$1)){
var c__4550__auto___6120 = cljs.core.chunk_first(seq__6093_6119__$1);
var G__6121 = cljs.core.chunk_rest(seq__6093_6119__$1);
var G__6122 = c__4550__auto___6120;
var G__6123 = cljs.core.count(c__4550__auto___6120);
var G__6124 = (0);
seq__6093_6109 = G__6121;
chunk__6094_6110 = G__6122;
count__6095_6111 = G__6123;
i__6096_6112 = G__6124;
continue;
} else {
var i_6125 = cljs.core.first(seq__6093_6119__$1);
app.colors.lighten_color_in_db(i_6125);


var G__6126 = cljs.core.next(seq__6093_6119__$1);
var G__6127 = null;
var G__6128 = (0);
var G__6129 = (0);
seq__6093_6109 = G__6126;
chunk__6094_6110 = G__6127;
count__6095_6111 = G__6128;
i__6096_6112 = G__6129;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6097 = cljs.core.seq(app.db.contrastcolors);
var chunk__6098 = null;
var count__6099 = (0);
var i__6100 = (0);
while(true){
if((i__6100 < count__6099)){
var i = chunk__6098.cljs$core$IIndexed$_nth$arity$2(null,i__6100);
app.colors.lighten_color_in_db(i);


var G__6130 = seq__6097;
var G__6131 = chunk__6098;
var G__6132 = count__6099;
var G__6133 = (i__6100 + (1));
seq__6097 = G__6130;
chunk__6098 = G__6131;
count__6099 = G__6132;
i__6100 = G__6133;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6097);
if(temp__5457__auto__){
var seq__6097__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6097__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6097__$1);
var G__6134 = cljs.core.chunk_rest(seq__6097__$1);
var G__6135 = c__4550__auto__;
var G__6136 = cljs.core.count(c__4550__auto__);
var G__6137 = (0);
seq__6097 = G__6134;
chunk__6098 = G__6135;
count__6099 = G__6136;
i__6100 = G__6137;
continue;
} else {
var i = cljs.core.first(seq__6097__$1);
app.colors.lighten_color_in_db(i);


var G__6138 = cljs.core.next(seq__6097__$1);
var G__6139 = null;
var G__6140 = (0);
var G__6141 = (0);
seq__6097 = G__6138;
chunk__6098 = G__6139;
count__6099 = G__6140;
i__6100 = G__6141;
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
var seq__6101_6142 = cljs.core.seq(app.db.contrastcolors);
var chunk__6102_6143 = null;
var count__6103_6144 = (0);
var i__6104_6145 = (0);
while(true){
if((i__6104_6145 < count__6103_6144)){
var i_6146 = chunk__6102_6143.cljs$core$IIndexed$_nth$arity$2(null,i__6104_6145);
app.colors.darken_color_in_db(i_6146);


var G__6147 = seq__6101_6142;
var G__6148 = chunk__6102_6143;
var G__6149 = count__6103_6144;
var G__6150 = (i__6104_6145 + (1));
seq__6101_6142 = G__6147;
chunk__6102_6143 = G__6148;
count__6103_6144 = G__6149;
i__6104_6145 = G__6150;
continue;
} else {
var temp__5457__auto___6151 = cljs.core.seq(seq__6101_6142);
if(temp__5457__auto___6151){
var seq__6101_6152__$1 = temp__5457__auto___6151;
if(cljs.core.chunked_seq_QMARK_(seq__6101_6152__$1)){
var c__4550__auto___6153 = cljs.core.chunk_first(seq__6101_6152__$1);
var G__6154 = cljs.core.chunk_rest(seq__6101_6152__$1);
var G__6155 = c__4550__auto___6153;
var G__6156 = cljs.core.count(c__4550__auto___6153);
var G__6157 = (0);
seq__6101_6142 = G__6154;
chunk__6102_6143 = G__6155;
count__6103_6144 = G__6156;
i__6104_6145 = G__6157;
continue;
} else {
var i_6158 = cljs.core.first(seq__6101_6152__$1);
app.colors.darken_color_in_db(i_6158);


var G__6159 = cljs.core.next(seq__6101_6152__$1);
var G__6160 = null;
var G__6161 = (0);
var G__6162 = (0);
seq__6101_6142 = G__6159;
chunk__6102_6143 = G__6160;
count__6103_6144 = G__6161;
i__6104_6145 = G__6162;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6105 = cljs.core.seq(app.db.contrastcolors);
var chunk__6106 = null;
var count__6107 = (0);
var i__6108 = (0);
while(true){
if((i__6108 < count__6107)){
var i = chunk__6106.cljs$core$IIndexed$_nth$arity$2(null,i__6108);
app.colors.darken_color_in_db(i);


var G__6163 = seq__6105;
var G__6164 = chunk__6106;
var G__6165 = count__6107;
var G__6166 = (i__6108 + (1));
seq__6105 = G__6163;
chunk__6106 = G__6164;
count__6107 = G__6165;
i__6108 = G__6166;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6105);
if(temp__5457__auto__){
var seq__6105__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6105__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6105__$1);
var G__6167 = cljs.core.chunk_rest(seq__6105__$1);
var G__6168 = c__4550__auto__;
var G__6169 = cljs.core.count(c__4550__auto__);
var G__6170 = (0);
seq__6105 = G__6167;
chunk__6106 = G__6168;
count__6107 = G__6169;
i__6108 = G__6170;
continue;
} else {
var i = cljs.core.first(seq__6105__$1);
app.colors.darken_color_in_db(i);


var G__6171 = cljs.core.next(seq__6105__$1);
var G__6172 = null;
var G__6173 = (0);
var G__6174 = (0);
seq__6105 = G__6171;
chunk__6106 = G__6172;
count__6107 = G__6173;
i__6108 = G__6174;
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
var seq__6175_6191 = cljs.core.seq(app.db.contrastcolors);
var chunk__6176_6192 = null;
var count__6177_6193 = (0);
var i__6178_6194 = (0);
while(true){
if((i__6178_6194 < count__6177_6193)){
var i_6195 = chunk__6176_6192.cljs$core$IIndexed$_nth$arity$2(null,i__6178_6194);
app.colors.darken_color_in_db(i_6195);


var G__6196 = seq__6175_6191;
var G__6197 = chunk__6176_6192;
var G__6198 = count__6177_6193;
var G__6199 = (i__6178_6194 + (1));
seq__6175_6191 = G__6196;
chunk__6176_6192 = G__6197;
count__6177_6193 = G__6198;
i__6178_6194 = G__6199;
continue;
} else {
var temp__5457__auto___6200 = cljs.core.seq(seq__6175_6191);
if(temp__5457__auto___6200){
var seq__6175_6201__$1 = temp__5457__auto___6200;
if(cljs.core.chunked_seq_QMARK_(seq__6175_6201__$1)){
var c__4550__auto___6202 = cljs.core.chunk_first(seq__6175_6201__$1);
var G__6203 = cljs.core.chunk_rest(seq__6175_6201__$1);
var G__6204 = c__4550__auto___6202;
var G__6205 = cljs.core.count(c__4550__auto___6202);
var G__6206 = (0);
seq__6175_6191 = G__6203;
chunk__6176_6192 = G__6204;
count__6177_6193 = G__6205;
i__6178_6194 = G__6206;
continue;
} else {
var i_6207 = cljs.core.first(seq__6175_6201__$1);
app.colors.darken_color_in_db(i_6207);


var G__6208 = cljs.core.next(seq__6175_6201__$1);
var G__6209 = null;
var G__6210 = (0);
var G__6211 = (0);
seq__6175_6191 = G__6208;
chunk__6176_6192 = G__6209;
count__6177_6193 = G__6210;
i__6178_6194 = G__6211;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6179 = cljs.core.seq(app.db.contrastcolors);
var chunk__6180 = null;
var count__6181 = (0);
var i__6182 = (0);
while(true){
if((i__6182 < count__6181)){
var i = chunk__6180.cljs$core$IIndexed$_nth$arity$2(null,i__6182);
app.colors.darken_color_in_db(i);


var G__6212 = seq__6179;
var G__6213 = chunk__6180;
var G__6214 = count__6181;
var G__6215 = (i__6182 + (1));
seq__6179 = G__6212;
chunk__6180 = G__6213;
count__6181 = G__6214;
i__6182 = G__6215;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6179);
if(temp__5457__auto__){
var seq__6179__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6179__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6179__$1);
var G__6216 = cljs.core.chunk_rest(seq__6179__$1);
var G__6217 = c__4550__auto__;
var G__6218 = cljs.core.count(c__4550__auto__);
var G__6219 = (0);
seq__6179 = G__6216;
chunk__6180 = G__6217;
count__6181 = G__6218;
i__6182 = G__6219;
continue;
} else {
var i = cljs.core.first(seq__6179__$1);
app.colors.darken_color_in_db(i);


var G__6220 = cljs.core.next(seq__6179__$1);
var G__6221 = null;
var G__6222 = (0);
var G__6223 = (0);
seq__6179 = G__6220;
chunk__6180 = G__6221;
count__6181 = G__6222;
i__6182 = G__6223;
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
var seq__6183_6224 = cljs.core.seq(app.db.contrastcolors);
var chunk__6184_6225 = null;
var count__6185_6226 = (0);
var i__6186_6227 = (0);
while(true){
if((i__6186_6227 < count__6185_6226)){
var i_6228 = chunk__6184_6225.cljs$core$IIndexed$_nth$arity$2(null,i__6186_6227);
app.colors.lighten_color_in_db(i_6228);


var G__6229 = seq__6183_6224;
var G__6230 = chunk__6184_6225;
var G__6231 = count__6185_6226;
var G__6232 = (i__6186_6227 + (1));
seq__6183_6224 = G__6229;
chunk__6184_6225 = G__6230;
count__6185_6226 = G__6231;
i__6186_6227 = G__6232;
continue;
} else {
var temp__5457__auto___6233 = cljs.core.seq(seq__6183_6224);
if(temp__5457__auto___6233){
var seq__6183_6234__$1 = temp__5457__auto___6233;
if(cljs.core.chunked_seq_QMARK_(seq__6183_6234__$1)){
var c__4550__auto___6235 = cljs.core.chunk_first(seq__6183_6234__$1);
var G__6236 = cljs.core.chunk_rest(seq__6183_6234__$1);
var G__6237 = c__4550__auto___6235;
var G__6238 = cljs.core.count(c__4550__auto___6235);
var G__6239 = (0);
seq__6183_6224 = G__6236;
chunk__6184_6225 = G__6237;
count__6185_6226 = G__6238;
i__6186_6227 = G__6239;
continue;
} else {
var i_6240 = cljs.core.first(seq__6183_6234__$1);
app.colors.lighten_color_in_db(i_6240);


var G__6241 = cljs.core.next(seq__6183_6234__$1);
var G__6242 = null;
var G__6243 = (0);
var G__6244 = (0);
seq__6183_6224 = G__6241;
chunk__6184_6225 = G__6242;
count__6185_6226 = G__6243;
i__6186_6227 = G__6244;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6187 = cljs.core.seq(app.db.contrastcolors);
var chunk__6188 = null;
var count__6189 = (0);
var i__6190 = (0);
while(true){
if((i__6190 < count__6189)){
var i = chunk__6188.cljs$core$IIndexed$_nth$arity$2(null,i__6190);
app.colors.lighten_color_in_db(i);


var G__6245 = seq__6187;
var G__6246 = chunk__6188;
var G__6247 = count__6189;
var G__6248 = (i__6190 + (1));
seq__6187 = G__6245;
chunk__6188 = G__6246;
count__6189 = G__6247;
i__6190 = G__6248;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6187);
if(temp__5457__auto__){
var seq__6187__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6187__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6187__$1);
var G__6249 = cljs.core.chunk_rest(seq__6187__$1);
var G__6250 = c__4550__auto__;
var G__6251 = cljs.core.count(c__4550__auto__);
var G__6252 = (0);
seq__6187 = G__6249;
chunk__6188 = G__6250;
count__6189 = G__6251;
i__6190 = G__6252;
continue;
} else {
var i = cljs.core.first(seq__6187__$1);
app.colors.lighten_color_in_db(i);


var G__6253 = cljs.core.next(seq__6187__$1);
var G__6254 = null;
var G__6255 = (0);
var G__6256 = (0);
seq__6187 = G__6253;
chunk__6188 = G__6254;
count__6189 = G__6255;
i__6190 = G__6256;
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
var distance = (function (){var G__6258 = ((360) / length);
return Math.floor(G__6258);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__6257_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__6257_SHARP_),(360));
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
return (function (p1__6259_SHARP_){
return app.colors.rgbToHex(p1__6259_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6260_SHARP_){
return app.colors.clamped_rgb_vec(p1__6260_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6261_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__6261_SHARP_], null));
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
var seq__6262 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__6263 = null;
var count__6264 = (0);
var i__6265 = (0);
while(true){
if((i__6265 < count__6264)){
var vec__6272 = chunk__6263.cljs$core$IIndexed$_nth$arity$2(null,i__6265);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6278 = seq__6262;
var G__6279 = chunk__6263;
var G__6280 = count__6264;
var G__6281 = (i__6265 + (1));
seq__6262 = G__6278;
chunk__6263 = G__6279;
count__6264 = G__6280;
i__6265 = G__6281;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6262);
if(temp__5457__auto__){
var seq__6262__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6262__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6262__$1);
var G__6282 = cljs.core.chunk_rest(seq__6262__$1);
var G__6283 = c__4550__auto__;
var G__6284 = cljs.core.count(c__4550__auto__);
var G__6285 = (0);
seq__6262 = G__6282;
chunk__6263 = G__6283;
count__6264 = G__6284;
i__6265 = G__6285;
continue;
} else {
var vec__6275 = cljs.core.first(seq__6262__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6286 = cljs.core.next(seq__6262__$1);
var G__6287 = null;
var G__6288 = (0);
var G__6289 = (0);
seq__6262 = G__6286;
chunk__6263 = G__6287;
count__6264 = G__6288;
i__6265 = G__6289;
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
