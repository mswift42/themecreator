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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5870_SHARP_){
return (p1__5870_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5871_SHARP_){
return (((p1__5871_SHARP_ < (0))) || ((p1__5871_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5872_SHARP_){
return app.colors.clamp(p1__5872_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5873 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5873,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5873,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5873,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5878 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5876_SHARP_){
return (p1__5876_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5877_SHARP_){
if((p1__5877_SHARP_ > 0.04045)){
return Math.pow(((p1__5877_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5877_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5878,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5878,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5878,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5882 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5881_SHARP_){
if((p1__5881_SHARP_ > 0.008856)){
return Math.pow(p1__5881_SHARP_,((1) / (3)));
} else {
return ((p1__5881_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5882,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5882,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5882,(2),null);
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
var vec__5885 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5885,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5885,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5885,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5888 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5891 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5891,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5891,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5891,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5891,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5891,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5897 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5894_SHARP_){
return (p1__5894_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5897,x,y,z,r,g,b,rgb){
return (function (p1__5895_SHARP_){
return Math.round((p1__5895_SHARP_ * (255)));
});})(vec__5897,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5897,x,y,z,r,g,b,rgb){
return (function (p1__5896_SHARP_){
if((p1__5896_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5896_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5896_SHARP_ * 12.92);
}
});})(vec__5897,x,y,z,r,g,b,rgb))
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
var G__5901 = arguments.length;
switch (G__5901) {
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
var G__5902 = (function (){var G__5903 = goog.color.hexToRgb(colorstring);
var G__5904 = factor;
return goog.color.darken(G__5903,G__5904);
})();
return goog.color.rgbArrayToHex(G__5902);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5907 = arguments.length;
switch (G__5907) {
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
var G__5908 = (function (){var G__5909 = goog.color.hexToRgb(colorstring);
var G__5910 = factor;
return goog.color.lighten(G__5909,G__5910);
})();
return goog.color.rgbArrayToHex(G__5908);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5912 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5915 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5915) : color.call(null,G__5915));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5916 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5916) : color.call(null,G__5916));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5917_5933 = cljs.core.seq(app.db.contrastcolors);
var chunk__5918_5934 = null;
var count__5919_5935 = (0);
var i__5920_5936 = (0);
while(true){
if((i__5920_5936 < count__5919_5935)){
var i_5937 = chunk__5918_5934.cljs$core$IIndexed$_nth$arity$2(null,i__5920_5936);
app.colors.lighten_color_in_db(i_5937);


var G__5938 = seq__5917_5933;
var G__5939 = chunk__5918_5934;
var G__5940 = count__5919_5935;
var G__5941 = (i__5920_5936 + (1));
seq__5917_5933 = G__5938;
chunk__5918_5934 = G__5939;
count__5919_5935 = G__5940;
i__5920_5936 = G__5941;
continue;
} else {
var temp__4657__auto___5942 = cljs.core.seq(seq__5917_5933);
if(temp__4657__auto___5942){
var seq__5917_5943__$1 = temp__4657__auto___5942;
if(cljs.core.chunked_seq_QMARK_(seq__5917_5943__$1)){
var c__4550__auto___5944 = cljs.core.chunk_first(seq__5917_5943__$1);
var G__5945 = cljs.core.chunk_rest(seq__5917_5943__$1);
var G__5946 = c__4550__auto___5944;
var G__5947 = cljs.core.count(c__4550__auto___5944);
var G__5948 = (0);
seq__5917_5933 = G__5945;
chunk__5918_5934 = G__5946;
count__5919_5935 = G__5947;
i__5920_5936 = G__5948;
continue;
} else {
var i_5949 = cljs.core.first(seq__5917_5943__$1);
app.colors.lighten_color_in_db(i_5949);


var G__5950 = cljs.core.next(seq__5917_5943__$1);
var G__5951 = null;
var G__5952 = (0);
var G__5953 = (0);
seq__5917_5933 = G__5950;
chunk__5918_5934 = G__5951;
count__5919_5935 = G__5952;
i__5920_5936 = G__5953;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5921 = cljs.core.seq(app.db.contrastcolors);
var chunk__5922 = null;
var count__5923 = (0);
var i__5924 = (0);
while(true){
if((i__5924 < count__5923)){
var i = chunk__5922.cljs$core$IIndexed$_nth$arity$2(null,i__5924);
app.colors.lighten_color_in_db(i);


var G__5954 = seq__5921;
var G__5955 = chunk__5922;
var G__5956 = count__5923;
var G__5957 = (i__5924 + (1));
seq__5921 = G__5954;
chunk__5922 = G__5955;
count__5923 = G__5956;
i__5924 = G__5957;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5921);
if(temp__4657__auto__){
var seq__5921__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5921__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5921__$1);
var G__5958 = cljs.core.chunk_rest(seq__5921__$1);
var G__5959 = c__4550__auto__;
var G__5960 = cljs.core.count(c__4550__auto__);
var G__5961 = (0);
seq__5921 = G__5958;
chunk__5922 = G__5959;
count__5923 = G__5960;
i__5924 = G__5961;
continue;
} else {
var i = cljs.core.first(seq__5921__$1);
app.colors.lighten_color_in_db(i);


var G__5962 = cljs.core.next(seq__5921__$1);
var G__5963 = null;
var G__5964 = (0);
var G__5965 = (0);
seq__5921 = G__5962;
chunk__5922 = G__5963;
count__5923 = G__5964;
i__5924 = G__5965;
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
var seq__5925_5966 = cljs.core.seq(app.db.contrastcolors);
var chunk__5926_5967 = null;
var count__5927_5968 = (0);
var i__5928_5969 = (0);
while(true){
if((i__5928_5969 < count__5927_5968)){
var i_5970 = chunk__5926_5967.cljs$core$IIndexed$_nth$arity$2(null,i__5928_5969);
app.colors.darken_color_in_db(i_5970);


var G__5971 = seq__5925_5966;
var G__5972 = chunk__5926_5967;
var G__5973 = count__5927_5968;
var G__5974 = (i__5928_5969 + (1));
seq__5925_5966 = G__5971;
chunk__5926_5967 = G__5972;
count__5927_5968 = G__5973;
i__5928_5969 = G__5974;
continue;
} else {
var temp__4657__auto___5975 = cljs.core.seq(seq__5925_5966);
if(temp__4657__auto___5975){
var seq__5925_5976__$1 = temp__4657__auto___5975;
if(cljs.core.chunked_seq_QMARK_(seq__5925_5976__$1)){
var c__4550__auto___5977 = cljs.core.chunk_first(seq__5925_5976__$1);
var G__5978 = cljs.core.chunk_rest(seq__5925_5976__$1);
var G__5979 = c__4550__auto___5977;
var G__5980 = cljs.core.count(c__4550__auto___5977);
var G__5981 = (0);
seq__5925_5966 = G__5978;
chunk__5926_5967 = G__5979;
count__5927_5968 = G__5980;
i__5928_5969 = G__5981;
continue;
} else {
var i_5982 = cljs.core.first(seq__5925_5976__$1);
app.colors.darken_color_in_db(i_5982);


var G__5983 = cljs.core.next(seq__5925_5976__$1);
var G__5984 = null;
var G__5985 = (0);
var G__5986 = (0);
seq__5925_5966 = G__5983;
chunk__5926_5967 = G__5984;
count__5927_5968 = G__5985;
i__5928_5969 = G__5986;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5929 = cljs.core.seq(app.db.contrastcolors);
var chunk__5930 = null;
var count__5931 = (0);
var i__5932 = (0);
while(true){
if((i__5932 < count__5931)){
var i = chunk__5930.cljs$core$IIndexed$_nth$arity$2(null,i__5932);
app.colors.darken_color_in_db(i);


var G__5987 = seq__5929;
var G__5988 = chunk__5930;
var G__5989 = count__5931;
var G__5990 = (i__5932 + (1));
seq__5929 = G__5987;
chunk__5930 = G__5988;
count__5931 = G__5989;
i__5932 = G__5990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5929);
if(temp__4657__auto__){
var seq__5929__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5929__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5929__$1);
var G__5991 = cljs.core.chunk_rest(seq__5929__$1);
var G__5992 = c__4550__auto__;
var G__5993 = cljs.core.count(c__4550__auto__);
var G__5994 = (0);
seq__5929 = G__5991;
chunk__5930 = G__5992;
count__5931 = G__5993;
i__5932 = G__5994;
continue;
} else {
var i = cljs.core.first(seq__5929__$1);
app.colors.darken_color_in_db(i);


var G__5995 = cljs.core.next(seq__5929__$1);
var G__5996 = null;
var G__5997 = (0);
var G__5998 = (0);
seq__5929 = G__5995;
chunk__5930 = G__5996;
count__5931 = G__5997;
i__5932 = G__5998;
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
var seq__5999_6015 = cljs.core.seq(app.db.contrastcolors);
var chunk__6000_6016 = null;
var count__6001_6017 = (0);
var i__6002_6018 = (0);
while(true){
if((i__6002_6018 < count__6001_6017)){
var i_6019 = chunk__6000_6016.cljs$core$IIndexed$_nth$arity$2(null,i__6002_6018);
app.colors.darken_color_in_db(i_6019);


var G__6020 = seq__5999_6015;
var G__6021 = chunk__6000_6016;
var G__6022 = count__6001_6017;
var G__6023 = (i__6002_6018 + (1));
seq__5999_6015 = G__6020;
chunk__6000_6016 = G__6021;
count__6001_6017 = G__6022;
i__6002_6018 = G__6023;
continue;
} else {
var temp__4657__auto___6024 = cljs.core.seq(seq__5999_6015);
if(temp__4657__auto___6024){
var seq__5999_6025__$1 = temp__4657__auto___6024;
if(cljs.core.chunked_seq_QMARK_(seq__5999_6025__$1)){
var c__4550__auto___6026 = cljs.core.chunk_first(seq__5999_6025__$1);
var G__6027 = cljs.core.chunk_rest(seq__5999_6025__$1);
var G__6028 = c__4550__auto___6026;
var G__6029 = cljs.core.count(c__4550__auto___6026);
var G__6030 = (0);
seq__5999_6015 = G__6027;
chunk__6000_6016 = G__6028;
count__6001_6017 = G__6029;
i__6002_6018 = G__6030;
continue;
} else {
var i_6031 = cljs.core.first(seq__5999_6025__$1);
app.colors.darken_color_in_db(i_6031);


var G__6032 = cljs.core.next(seq__5999_6025__$1);
var G__6033 = null;
var G__6034 = (0);
var G__6035 = (0);
seq__5999_6015 = G__6032;
chunk__6000_6016 = G__6033;
count__6001_6017 = G__6034;
i__6002_6018 = G__6035;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6003 = cljs.core.seq(app.db.contrastcolors);
var chunk__6004 = null;
var count__6005 = (0);
var i__6006 = (0);
while(true){
if((i__6006 < count__6005)){
var i = chunk__6004.cljs$core$IIndexed$_nth$arity$2(null,i__6006);
app.colors.darken_color_in_db(i);


var G__6036 = seq__6003;
var G__6037 = chunk__6004;
var G__6038 = count__6005;
var G__6039 = (i__6006 + (1));
seq__6003 = G__6036;
chunk__6004 = G__6037;
count__6005 = G__6038;
i__6006 = G__6039;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6003);
if(temp__4657__auto__){
var seq__6003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6003__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6003__$1);
var G__6040 = cljs.core.chunk_rest(seq__6003__$1);
var G__6041 = c__4550__auto__;
var G__6042 = cljs.core.count(c__4550__auto__);
var G__6043 = (0);
seq__6003 = G__6040;
chunk__6004 = G__6041;
count__6005 = G__6042;
i__6006 = G__6043;
continue;
} else {
var i = cljs.core.first(seq__6003__$1);
app.colors.darken_color_in_db(i);


var G__6044 = cljs.core.next(seq__6003__$1);
var G__6045 = null;
var G__6046 = (0);
var G__6047 = (0);
seq__6003 = G__6044;
chunk__6004 = G__6045;
count__6005 = G__6046;
i__6006 = G__6047;
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
var seq__6007_6048 = cljs.core.seq(app.db.contrastcolors);
var chunk__6008_6049 = null;
var count__6009_6050 = (0);
var i__6010_6051 = (0);
while(true){
if((i__6010_6051 < count__6009_6050)){
var i_6052 = chunk__6008_6049.cljs$core$IIndexed$_nth$arity$2(null,i__6010_6051);
app.colors.lighten_color_in_db(i_6052);


var G__6053 = seq__6007_6048;
var G__6054 = chunk__6008_6049;
var G__6055 = count__6009_6050;
var G__6056 = (i__6010_6051 + (1));
seq__6007_6048 = G__6053;
chunk__6008_6049 = G__6054;
count__6009_6050 = G__6055;
i__6010_6051 = G__6056;
continue;
} else {
var temp__4657__auto___6057 = cljs.core.seq(seq__6007_6048);
if(temp__4657__auto___6057){
var seq__6007_6058__$1 = temp__4657__auto___6057;
if(cljs.core.chunked_seq_QMARK_(seq__6007_6058__$1)){
var c__4550__auto___6059 = cljs.core.chunk_first(seq__6007_6058__$1);
var G__6060 = cljs.core.chunk_rest(seq__6007_6058__$1);
var G__6061 = c__4550__auto___6059;
var G__6062 = cljs.core.count(c__4550__auto___6059);
var G__6063 = (0);
seq__6007_6048 = G__6060;
chunk__6008_6049 = G__6061;
count__6009_6050 = G__6062;
i__6010_6051 = G__6063;
continue;
} else {
var i_6064 = cljs.core.first(seq__6007_6058__$1);
app.colors.lighten_color_in_db(i_6064);


var G__6065 = cljs.core.next(seq__6007_6058__$1);
var G__6066 = null;
var G__6067 = (0);
var G__6068 = (0);
seq__6007_6048 = G__6065;
chunk__6008_6049 = G__6066;
count__6009_6050 = G__6067;
i__6010_6051 = G__6068;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6011 = cljs.core.seq(app.db.contrastcolors);
var chunk__6012 = null;
var count__6013 = (0);
var i__6014 = (0);
while(true){
if((i__6014 < count__6013)){
var i = chunk__6012.cljs$core$IIndexed$_nth$arity$2(null,i__6014);
app.colors.lighten_color_in_db(i);


var G__6069 = seq__6011;
var G__6070 = chunk__6012;
var G__6071 = count__6013;
var G__6072 = (i__6014 + (1));
seq__6011 = G__6069;
chunk__6012 = G__6070;
count__6013 = G__6071;
i__6014 = G__6072;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6011);
if(temp__4657__auto__){
var seq__6011__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6011__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6011__$1);
var G__6073 = cljs.core.chunk_rest(seq__6011__$1);
var G__6074 = c__4550__auto__;
var G__6075 = cljs.core.count(c__4550__auto__);
var G__6076 = (0);
seq__6011 = G__6073;
chunk__6012 = G__6074;
count__6013 = G__6075;
i__6014 = G__6076;
continue;
} else {
var i = cljs.core.first(seq__6011__$1);
app.colors.lighten_color_in_db(i);


var G__6077 = cljs.core.next(seq__6011__$1);
var G__6078 = null;
var G__6079 = (0);
var G__6080 = (0);
seq__6011 = G__6077;
chunk__6012 = G__6078;
count__6013 = G__6079;
i__6014 = G__6080;
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
var distance = (function (){var G__6082 = ((360) / length);
return Math.floor(G__6082);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__6081_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__6081_SHARP_),(360));
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
return (function (p1__6083_SHARP_){
return app.colors.rgbToHex(p1__6083_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6084_SHARP_){
return app.colors.clamped_rgb_vec(p1__6084_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6085_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__6085_SHARP_], null));
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
var seq__6086 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__6087 = null;
var count__6088 = (0);
var i__6089 = (0);
while(true){
if((i__6089 < count__6088)){
var vec__6096 = chunk__6087.cljs$core$IIndexed$_nth$arity$2(null,i__6089);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6096,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6096,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6102 = seq__6086;
var G__6103 = chunk__6087;
var G__6104 = count__6088;
var G__6105 = (i__6089 + (1));
seq__6086 = G__6102;
chunk__6087 = G__6103;
count__6088 = G__6104;
i__6089 = G__6105;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6086);
if(temp__4657__auto__){
var seq__6086__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6086__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6086__$1);
var G__6106 = cljs.core.chunk_rest(seq__6086__$1);
var G__6107 = c__4550__auto__;
var G__6108 = cljs.core.count(c__4550__auto__);
var G__6109 = (0);
seq__6086 = G__6106;
chunk__6087 = G__6107;
count__6088 = G__6108;
i__6089 = G__6109;
continue;
} else {
var vec__6099 = cljs.core.first(seq__6086__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6099,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6099,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6110 = cljs.core.next(seq__6086__$1);
var G__6111 = null;
var G__6112 = (0);
var G__6113 = (0);
seq__6086 = G__6110;
chunk__6087 = G__6111;
count__6088 = G__6112;
i__6089 = G__6113;
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
