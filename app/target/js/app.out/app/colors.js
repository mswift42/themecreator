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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5914_SHARP_){
return (p1__5914_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5915_SHARP_){
return (((p1__5915_SHARP_ < (0))) || ((p1__5915_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5916_SHARP_){
return app.colors.clamp(p1__5916_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5917 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5917,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5917,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5917,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5922 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5920_SHARP_){
return (p1__5920_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5921_SHARP_){
if((p1__5921_SHARP_ > 0.04045)){
return Math.pow(((p1__5921_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5921_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5922,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5922,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5922,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5926 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5925_SHARP_){
if((p1__5925_SHARP_ > 0.008856)){
return Math.pow(p1__5925_SHARP_,((1) / (3)));
} else {
return ((p1__5925_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5926,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5926,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5926,(2),null);
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
var vec__5929 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5929,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5929,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5929,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5932 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5932,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5932,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5932,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5935 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5935,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5935,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5935,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5935,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5935,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5941 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5938_SHARP_){
return (p1__5938_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5941,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5941,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5941,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5941,x,y,z,r,g,b,rgb){
return (function (p1__5939_SHARP_){
return Math.round((p1__5939_SHARP_ * (255)));
});})(vec__5941,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5941,x,y,z,r,g,b,rgb){
return (function (p1__5940_SHARP_){
if((p1__5940_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5940_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5940_SHARP_ * 12.92);
}
});})(vec__5941,x,y,z,r,g,b,rgb))
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
var G__5945 = arguments.length;
switch (G__5945) {
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
var G__5946 = (function (){var G__5947 = goog.color.hexToRgb(colorstring);
var G__5948 = factor;
return goog.color.darken(G__5947,G__5948);
})();
return goog.color.rgbArrayToHex(G__5946);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5951 = arguments.length;
switch (G__5951) {
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
var G__5952 = (function (){var G__5953 = goog.color.hexToRgb(colorstring);
var G__5954 = factor;
return goog.color.lighten(G__5953,G__5954);
})();
return goog.color.rgbArrayToHex(G__5952);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5956 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5956,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5956,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5956,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5959 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5959) : color.call(null,G__5959));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5960 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5960) : color.call(null,G__5960));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5961_5977 = cljs.core.seq(app.db.contrastcolors);
var chunk__5962_5978 = null;
var count__5963_5979 = (0);
var i__5964_5980 = (0);
while(true){
if((i__5964_5980 < count__5963_5979)){
var i_5981 = chunk__5962_5978.cljs$core$IIndexed$_nth$arity$2(null,i__5964_5980);
app.colors.lighten_color_in_db(i_5981);


var G__5982 = seq__5961_5977;
var G__5983 = chunk__5962_5978;
var G__5984 = count__5963_5979;
var G__5985 = (i__5964_5980 + (1));
seq__5961_5977 = G__5982;
chunk__5962_5978 = G__5983;
count__5963_5979 = G__5984;
i__5964_5980 = G__5985;
continue;
} else {
var temp__4657__auto___5986 = cljs.core.seq(seq__5961_5977);
if(temp__4657__auto___5986){
var seq__5961_5987__$1 = temp__4657__auto___5986;
if(cljs.core.chunked_seq_QMARK_(seq__5961_5987__$1)){
var c__4550__auto___5988 = cljs.core.chunk_first(seq__5961_5987__$1);
var G__5989 = cljs.core.chunk_rest(seq__5961_5987__$1);
var G__5990 = c__4550__auto___5988;
var G__5991 = cljs.core.count(c__4550__auto___5988);
var G__5992 = (0);
seq__5961_5977 = G__5989;
chunk__5962_5978 = G__5990;
count__5963_5979 = G__5991;
i__5964_5980 = G__5992;
continue;
} else {
var i_5993 = cljs.core.first(seq__5961_5987__$1);
app.colors.lighten_color_in_db(i_5993);


var G__5994 = cljs.core.next(seq__5961_5987__$1);
var G__5995 = null;
var G__5996 = (0);
var G__5997 = (0);
seq__5961_5977 = G__5994;
chunk__5962_5978 = G__5995;
count__5963_5979 = G__5996;
i__5964_5980 = G__5997;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5965 = cljs.core.seq(app.db.contrastcolors);
var chunk__5966 = null;
var count__5967 = (0);
var i__5968 = (0);
while(true){
if((i__5968 < count__5967)){
var i = chunk__5966.cljs$core$IIndexed$_nth$arity$2(null,i__5968);
app.colors.lighten_color_in_db(i);


var G__5998 = seq__5965;
var G__5999 = chunk__5966;
var G__6000 = count__5967;
var G__6001 = (i__5968 + (1));
seq__5965 = G__5998;
chunk__5966 = G__5999;
count__5967 = G__6000;
i__5968 = G__6001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5965);
if(temp__4657__auto__){
var seq__5965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5965__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5965__$1);
var G__6002 = cljs.core.chunk_rest(seq__5965__$1);
var G__6003 = c__4550__auto__;
var G__6004 = cljs.core.count(c__4550__auto__);
var G__6005 = (0);
seq__5965 = G__6002;
chunk__5966 = G__6003;
count__5967 = G__6004;
i__5968 = G__6005;
continue;
} else {
var i = cljs.core.first(seq__5965__$1);
app.colors.lighten_color_in_db(i);


var G__6006 = cljs.core.next(seq__5965__$1);
var G__6007 = null;
var G__6008 = (0);
var G__6009 = (0);
seq__5965 = G__6006;
chunk__5966 = G__6007;
count__5967 = G__6008;
i__5968 = G__6009;
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
var seq__5969_6010 = cljs.core.seq(app.db.contrastcolors);
var chunk__5970_6011 = null;
var count__5971_6012 = (0);
var i__5972_6013 = (0);
while(true){
if((i__5972_6013 < count__5971_6012)){
var i_6014 = chunk__5970_6011.cljs$core$IIndexed$_nth$arity$2(null,i__5972_6013);
app.colors.darken_color_in_db(i_6014);


var G__6015 = seq__5969_6010;
var G__6016 = chunk__5970_6011;
var G__6017 = count__5971_6012;
var G__6018 = (i__5972_6013 + (1));
seq__5969_6010 = G__6015;
chunk__5970_6011 = G__6016;
count__5971_6012 = G__6017;
i__5972_6013 = G__6018;
continue;
} else {
var temp__4657__auto___6019 = cljs.core.seq(seq__5969_6010);
if(temp__4657__auto___6019){
var seq__5969_6020__$1 = temp__4657__auto___6019;
if(cljs.core.chunked_seq_QMARK_(seq__5969_6020__$1)){
var c__4550__auto___6021 = cljs.core.chunk_first(seq__5969_6020__$1);
var G__6022 = cljs.core.chunk_rest(seq__5969_6020__$1);
var G__6023 = c__4550__auto___6021;
var G__6024 = cljs.core.count(c__4550__auto___6021);
var G__6025 = (0);
seq__5969_6010 = G__6022;
chunk__5970_6011 = G__6023;
count__5971_6012 = G__6024;
i__5972_6013 = G__6025;
continue;
} else {
var i_6026 = cljs.core.first(seq__5969_6020__$1);
app.colors.darken_color_in_db(i_6026);


var G__6027 = cljs.core.next(seq__5969_6020__$1);
var G__6028 = null;
var G__6029 = (0);
var G__6030 = (0);
seq__5969_6010 = G__6027;
chunk__5970_6011 = G__6028;
count__5971_6012 = G__6029;
i__5972_6013 = G__6030;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5973 = cljs.core.seq(app.db.contrastcolors);
var chunk__5974 = null;
var count__5975 = (0);
var i__5976 = (0);
while(true){
if((i__5976 < count__5975)){
var i = chunk__5974.cljs$core$IIndexed$_nth$arity$2(null,i__5976);
app.colors.darken_color_in_db(i);


var G__6031 = seq__5973;
var G__6032 = chunk__5974;
var G__6033 = count__5975;
var G__6034 = (i__5976 + (1));
seq__5973 = G__6031;
chunk__5974 = G__6032;
count__5975 = G__6033;
i__5976 = G__6034;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5973);
if(temp__4657__auto__){
var seq__5973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5973__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5973__$1);
var G__6035 = cljs.core.chunk_rest(seq__5973__$1);
var G__6036 = c__4550__auto__;
var G__6037 = cljs.core.count(c__4550__auto__);
var G__6038 = (0);
seq__5973 = G__6035;
chunk__5974 = G__6036;
count__5975 = G__6037;
i__5976 = G__6038;
continue;
} else {
var i = cljs.core.first(seq__5973__$1);
app.colors.darken_color_in_db(i);


var G__6039 = cljs.core.next(seq__5973__$1);
var G__6040 = null;
var G__6041 = (0);
var G__6042 = (0);
seq__5973 = G__6039;
chunk__5974 = G__6040;
count__5975 = G__6041;
i__5976 = G__6042;
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
var seq__6043_6059 = cljs.core.seq(app.db.contrastcolors);
var chunk__6044_6060 = null;
var count__6045_6061 = (0);
var i__6046_6062 = (0);
while(true){
if((i__6046_6062 < count__6045_6061)){
var i_6063 = chunk__6044_6060.cljs$core$IIndexed$_nth$arity$2(null,i__6046_6062);
app.colors.darken_color_in_db(i_6063);


var G__6064 = seq__6043_6059;
var G__6065 = chunk__6044_6060;
var G__6066 = count__6045_6061;
var G__6067 = (i__6046_6062 + (1));
seq__6043_6059 = G__6064;
chunk__6044_6060 = G__6065;
count__6045_6061 = G__6066;
i__6046_6062 = G__6067;
continue;
} else {
var temp__4657__auto___6068 = cljs.core.seq(seq__6043_6059);
if(temp__4657__auto___6068){
var seq__6043_6069__$1 = temp__4657__auto___6068;
if(cljs.core.chunked_seq_QMARK_(seq__6043_6069__$1)){
var c__4550__auto___6070 = cljs.core.chunk_first(seq__6043_6069__$1);
var G__6071 = cljs.core.chunk_rest(seq__6043_6069__$1);
var G__6072 = c__4550__auto___6070;
var G__6073 = cljs.core.count(c__4550__auto___6070);
var G__6074 = (0);
seq__6043_6059 = G__6071;
chunk__6044_6060 = G__6072;
count__6045_6061 = G__6073;
i__6046_6062 = G__6074;
continue;
} else {
var i_6075 = cljs.core.first(seq__6043_6069__$1);
app.colors.darken_color_in_db(i_6075);


var G__6076 = cljs.core.next(seq__6043_6069__$1);
var G__6077 = null;
var G__6078 = (0);
var G__6079 = (0);
seq__6043_6059 = G__6076;
chunk__6044_6060 = G__6077;
count__6045_6061 = G__6078;
i__6046_6062 = G__6079;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6047 = cljs.core.seq(app.db.contrastcolors);
var chunk__6048 = null;
var count__6049 = (0);
var i__6050 = (0);
while(true){
if((i__6050 < count__6049)){
var i = chunk__6048.cljs$core$IIndexed$_nth$arity$2(null,i__6050);
app.colors.darken_color_in_db(i);


var G__6080 = seq__6047;
var G__6081 = chunk__6048;
var G__6082 = count__6049;
var G__6083 = (i__6050 + (1));
seq__6047 = G__6080;
chunk__6048 = G__6081;
count__6049 = G__6082;
i__6050 = G__6083;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6047);
if(temp__4657__auto__){
var seq__6047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6047__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6047__$1);
var G__6084 = cljs.core.chunk_rest(seq__6047__$1);
var G__6085 = c__4550__auto__;
var G__6086 = cljs.core.count(c__4550__auto__);
var G__6087 = (0);
seq__6047 = G__6084;
chunk__6048 = G__6085;
count__6049 = G__6086;
i__6050 = G__6087;
continue;
} else {
var i = cljs.core.first(seq__6047__$1);
app.colors.darken_color_in_db(i);


var G__6088 = cljs.core.next(seq__6047__$1);
var G__6089 = null;
var G__6090 = (0);
var G__6091 = (0);
seq__6047 = G__6088;
chunk__6048 = G__6089;
count__6049 = G__6090;
i__6050 = G__6091;
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
var seq__6051_6092 = cljs.core.seq(app.db.contrastcolors);
var chunk__6052_6093 = null;
var count__6053_6094 = (0);
var i__6054_6095 = (0);
while(true){
if((i__6054_6095 < count__6053_6094)){
var i_6096 = chunk__6052_6093.cljs$core$IIndexed$_nth$arity$2(null,i__6054_6095);
app.colors.lighten_color_in_db(i_6096);


var G__6097 = seq__6051_6092;
var G__6098 = chunk__6052_6093;
var G__6099 = count__6053_6094;
var G__6100 = (i__6054_6095 + (1));
seq__6051_6092 = G__6097;
chunk__6052_6093 = G__6098;
count__6053_6094 = G__6099;
i__6054_6095 = G__6100;
continue;
} else {
var temp__4657__auto___6101 = cljs.core.seq(seq__6051_6092);
if(temp__4657__auto___6101){
var seq__6051_6102__$1 = temp__4657__auto___6101;
if(cljs.core.chunked_seq_QMARK_(seq__6051_6102__$1)){
var c__4550__auto___6103 = cljs.core.chunk_first(seq__6051_6102__$1);
var G__6104 = cljs.core.chunk_rest(seq__6051_6102__$1);
var G__6105 = c__4550__auto___6103;
var G__6106 = cljs.core.count(c__4550__auto___6103);
var G__6107 = (0);
seq__6051_6092 = G__6104;
chunk__6052_6093 = G__6105;
count__6053_6094 = G__6106;
i__6054_6095 = G__6107;
continue;
} else {
var i_6108 = cljs.core.first(seq__6051_6102__$1);
app.colors.lighten_color_in_db(i_6108);


var G__6109 = cljs.core.next(seq__6051_6102__$1);
var G__6110 = null;
var G__6111 = (0);
var G__6112 = (0);
seq__6051_6092 = G__6109;
chunk__6052_6093 = G__6110;
count__6053_6094 = G__6111;
i__6054_6095 = G__6112;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__6055 = cljs.core.seq(app.db.contrastcolors);
var chunk__6056 = null;
var count__6057 = (0);
var i__6058 = (0);
while(true){
if((i__6058 < count__6057)){
var i = chunk__6056.cljs$core$IIndexed$_nth$arity$2(null,i__6058);
app.colors.lighten_color_in_db(i);


var G__6113 = seq__6055;
var G__6114 = chunk__6056;
var G__6115 = count__6057;
var G__6116 = (i__6058 + (1));
seq__6055 = G__6113;
chunk__6056 = G__6114;
count__6057 = G__6115;
i__6058 = G__6116;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6055);
if(temp__4657__auto__){
var seq__6055__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6055__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6055__$1);
var G__6117 = cljs.core.chunk_rest(seq__6055__$1);
var G__6118 = c__4550__auto__;
var G__6119 = cljs.core.count(c__4550__auto__);
var G__6120 = (0);
seq__6055 = G__6117;
chunk__6056 = G__6118;
count__6057 = G__6119;
i__6058 = G__6120;
continue;
} else {
var i = cljs.core.first(seq__6055__$1);
app.colors.lighten_color_in_db(i);


var G__6121 = cljs.core.next(seq__6055__$1);
var G__6122 = null;
var G__6123 = (0);
var G__6124 = (0);
seq__6055 = G__6121;
chunk__6056 = G__6122;
count__6057 = G__6123;
i__6058 = G__6124;
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
var distance = (function (){var G__6126 = ((360) / length);
return Math.floor(G__6126);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__6125_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__6125_SHARP_),(360));
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
return (function (p1__6127_SHARP_){
return app.colors.rgbToHex(p1__6127_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6128_SHARP_){
return app.colors.clamped_rgb_vec(p1__6128_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6129_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__6129_SHARP_], null));
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
var seq__6130 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__6131 = null;
var count__6132 = (0);
var i__6133 = (0);
while(true){
if((i__6133 < count__6132)){
var vec__6140 = chunk__6131.cljs$core$IIndexed$_nth$arity$2(null,i__6133);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6140,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6140,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6146 = seq__6130;
var G__6147 = chunk__6131;
var G__6148 = count__6132;
var G__6149 = (i__6133 + (1));
seq__6130 = G__6146;
chunk__6131 = G__6147;
count__6132 = G__6148;
i__6133 = G__6149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__6130);
if(temp__4657__auto__){
var seq__6130__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6130__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6130__$1);
var G__6150 = cljs.core.chunk_rest(seq__6130__$1);
var G__6151 = c__4550__auto__;
var G__6152 = cljs.core.count(c__4550__auto__);
var G__6153 = (0);
seq__6130 = G__6150;
chunk__6131 = G__6151;
count__6132 = G__6152;
i__6133 = G__6153;
continue;
} else {
var vec__6143 = cljs.core.first(seq__6130__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6143,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6143,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6154 = cljs.core.next(seq__6130__$1);
var G__6155 = null;
var G__6156 = (0);
var G__6157 = (0);
seq__6130 = G__6154;
chunk__6131 = G__6155;
count__6132 = G__6156;
i__6133 = G__6157;
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
