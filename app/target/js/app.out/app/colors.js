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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5787_SHARP_){
return (p1__5787_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5788_SHARP_){
return (((p1__5788_SHARP_ < (0))) || ((p1__5788_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5789_SHARP_){
return app.colors.clamp(p1__5789_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5790 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5790,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5790,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5790,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5795 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5793_SHARP_){
return (p1__5793_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5794_SHARP_){
if((p1__5794_SHARP_ > 0.04045)){
return Math.pow(((p1__5794_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5794_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5799 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5798_SHARP_){
if((p1__5798_SHARP_ > 0.008856)){
return Math.pow(p1__5798_SHARP_,((1) / (3)));
} else {
return ((p1__5798_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(2),null);
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
var vec__5802 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5802,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5802,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5802,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5805 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5805,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5805,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5805,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5808 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5808,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5808,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5808,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5808,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5808,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5814 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5811_SHARP_){
return (p1__5811_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5814,x,y,z,r,g,b,rgb){
return (function (p1__5812_SHARP_){
return Math.round((p1__5812_SHARP_ * (255)));
});})(vec__5814,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5814,x,y,z,r,g,b,rgb){
return (function (p1__5813_SHARP_){
if((p1__5813_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5813_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5813_SHARP_ * 12.92);
}
});})(vec__5814,x,y,z,r,g,b,rgb))
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
var G__5818 = arguments.length;
switch (G__5818) {
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
var G__5819 = (function (){var G__5820 = goog.color.hexToRgb(colorstring);
var G__5821 = factor;
return goog.color.darken(G__5820,G__5821);
})();
return goog.color.rgbArrayToHex(G__5819);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5824 = arguments.length;
switch (G__5824) {
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
var G__5825 = (function (){var G__5826 = goog.color.hexToRgb(colorstring);
var G__5827 = factor;
return goog.color.lighten(G__5826,G__5827);
})();
return goog.color.rgbArrayToHex(G__5825);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5829 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5829,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5829,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5829,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5832 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5832) : color.call(null,G__5832));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5833 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5833) : color.call(null,G__5833));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5834_5850 = cljs.core.seq(app.db.contrastcolors);
var chunk__5835_5851 = null;
var count__5836_5852 = (0);
var i__5837_5853 = (0);
while(true){
if((i__5837_5853 < count__5836_5852)){
var i_5854 = chunk__5835_5851.cljs$core$IIndexed$_nth$arity$2(null,i__5837_5853);
app.colors.lighten_color_in_db(i_5854);


var G__5855 = seq__5834_5850;
var G__5856 = chunk__5835_5851;
var G__5857 = count__5836_5852;
var G__5858 = (i__5837_5853 + (1));
seq__5834_5850 = G__5855;
chunk__5835_5851 = G__5856;
count__5836_5852 = G__5857;
i__5837_5853 = G__5858;
continue;
} else {
var temp__5457__auto___5859 = cljs.core.seq(seq__5834_5850);
if(temp__5457__auto___5859){
var seq__5834_5860__$1 = temp__5457__auto___5859;
if(cljs.core.chunked_seq_QMARK_(seq__5834_5860__$1)){
var c__4550__auto___5861 = cljs.core.chunk_first(seq__5834_5860__$1);
var G__5862 = cljs.core.chunk_rest(seq__5834_5860__$1);
var G__5863 = c__4550__auto___5861;
var G__5864 = cljs.core.count(c__4550__auto___5861);
var G__5865 = (0);
seq__5834_5850 = G__5862;
chunk__5835_5851 = G__5863;
count__5836_5852 = G__5864;
i__5837_5853 = G__5865;
continue;
} else {
var i_5866 = cljs.core.first(seq__5834_5860__$1);
app.colors.lighten_color_in_db(i_5866);


var G__5867 = cljs.core.next(seq__5834_5860__$1);
var G__5868 = null;
var G__5869 = (0);
var G__5870 = (0);
seq__5834_5850 = G__5867;
chunk__5835_5851 = G__5868;
count__5836_5852 = G__5869;
i__5837_5853 = G__5870;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5838 = cljs.core.seq(app.db.contrastcolors);
var chunk__5839 = null;
var count__5840 = (0);
var i__5841 = (0);
while(true){
if((i__5841 < count__5840)){
var i = chunk__5839.cljs$core$IIndexed$_nth$arity$2(null,i__5841);
app.colors.lighten_color_in_db(i);


var G__5871 = seq__5838;
var G__5872 = chunk__5839;
var G__5873 = count__5840;
var G__5874 = (i__5841 + (1));
seq__5838 = G__5871;
chunk__5839 = G__5872;
count__5840 = G__5873;
i__5841 = G__5874;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5838);
if(temp__5457__auto__){
var seq__5838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5838__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5838__$1);
var G__5875 = cljs.core.chunk_rest(seq__5838__$1);
var G__5876 = c__4550__auto__;
var G__5877 = cljs.core.count(c__4550__auto__);
var G__5878 = (0);
seq__5838 = G__5875;
chunk__5839 = G__5876;
count__5840 = G__5877;
i__5841 = G__5878;
continue;
} else {
var i = cljs.core.first(seq__5838__$1);
app.colors.lighten_color_in_db(i);


var G__5879 = cljs.core.next(seq__5838__$1);
var G__5880 = null;
var G__5881 = (0);
var G__5882 = (0);
seq__5838 = G__5879;
chunk__5839 = G__5880;
count__5840 = G__5881;
i__5841 = G__5882;
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
var seq__5842_5883 = cljs.core.seq(app.db.contrastcolors);
var chunk__5843_5884 = null;
var count__5844_5885 = (0);
var i__5845_5886 = (0);
while(true){
if((i__5845_5886 < count__5844_5885)){
var i_5887 = chunk__5843_5884.cljs$core$IIndexed$_nth$arity$2(null,i__5845_5886);
app.colors.darken_color_in_db(i_5887);


var G__5888 = seq__5842_5883;
var G__5889 = chunk__5843_5884;
var G__5890 = count__5844_5885;
var G__5891 = (i__5845_5886 + (1));
seq__5842_5883 = G__5888;
chunk__5843_5884 = G__5889;
count__5844_5885 = G__5890;
i__5845_5886 = G__5891;
continue;
} else {
var temp__5457__auto___5892 = cljs.core.seq(seq__5842_5883);
if(temp__5457__auto___5892){
var seq__5842_5893__$1 = temp__5457__auto___5892;
if(cljs.core.chunked_seq_QMARK_(seq__5842_5893__$1)){
var c__4550__auto___5894 = cljs.core.chunk_first(seq__5842_5893__$1);
var G__5895 = cljs.core.chunk_rest(seq__5842_5893__$1);
var G__5896 = c__4550__auto___5894;
var G__5897 = cljs.core.count(c__4550__auto___5894);
var G__5898 = (0);
seq__5842_5883 = G__5895;
chunk__5843_5884 = G__5896;
count__5844_5885 = G__5897;
i__5845_5886 = G__5898;
continue;
} else {
var i_5899 = cljs.core.first(seq__5842_5893__$1);
app.colors.darken_color_in_db(i_5899);


var G__5900 = cljs.core.next(seq__5842_5893__$1);
var G__5901 = null;
var G__5902 = (0);
var G__5903 = (0);
seq__5842_5883 = G__5900;
chunk__5843_5884 = G__5901;
count__5844_5885 = G__5902;
i__5845_5886 = G__5903;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5846 = cljs.core.seq(app.db.contrastcolors);
var chunk__5847 = null;
var count__5848 = (0);
var i__5849 = (0);
while(true){
if((i__5849 < count__5848)){
var i = chunk__5847.cljs$core$IIndexed$_nth$arity$2(null,i__5849);
app.colors.darken_color_in_db(i);


var G__5904 = seq__5846;
var G__5905 = chunk__5847;
var G__5906 = count__5848;
var G__5907 = (i__5849 + (1));
seq__5846 = G__5904;
chunk__5847 = G__5905;
count__5848 = G__5906;
i__5849 = G__5907;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5846);
if(temp__5457__auto__){
var seq__5846__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5846__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5846__$1);
var G__5908 = cljs.core.chunk_rest(seq__5846__$1);
var G__5909 = c__4550__auto__;
var G__5910 = cljs.core.count(c__4550__auto__);
var G__5911 = (0);
seq__5846 = G__5908;
chunk__5847 = G__5909;
count__5848 = G__5910;
i__5849 = G__5911;
continue;
} else {
var i = cljs.core.first(seq__5846__$1);
app.colors.darken_color_in_db(i);


var G__5912 = cljs.core.next(seq__5846__$1);
var G__5913 = null;
var G__5914 = (0);
var G__5915 = (0);
seq__5846 = G__5912;
chunk__5847 = G__5913;
count__5848 = G__5914;
i__5849 = G__5915;
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
var seq__5916_5932 = cljs.core.seq(app.db.contrastcolors);
var chunk__5917_5933 = null;
var count__5918_5934 = (0);
var i__5919_5935 = (0);
while(true){
if((i__5919_5935 < count__5918_5934)){
var i_5936 = chunk__5917_5933.cljs$core$IIndexed$_nth$arity$2(null,i__5919_5935);
app.colors.darken_color_in_db(i_5936);


var G__5937 = seq__5916_5932;
var G__5938 = chunk__5917_5933;
var G__5939 = count__5918_5934;
var G__5940 = (i__5919_5935 + (1));
seq__5916_5932 = G__5937;
chunk__5917_5933 = G__5938;
count__5918_5934 = G__5939;
i__5919_5935 = G__5940;
continue;
} else {
var temp__5457__auto___5941 = cljs.core.seq(seq__5916_5932);
if(temp__5457__auto___5941){
var seq__5916_5942__$1 = temp__5457__auto___5941;
if(cljs.core.chunked_seq_QMARK_(seq__5916_5942__$1)){
var c__4550__auto___5943 = cljs.core.chunk_first(seq__5916_5942__$1);
var G__5944 = cljs.core.chunk_rest(seq__5916_5942__$1);
var G__5945 = c__4550__auto___5943;
var G__5946 = cljs.core.count(c__4550__auto___5943);
var G__5947 = (0);
seq__5916_5932 = G__5944;
chunk__5917_5933 = G__5945;
count__5918_5934 = G__5946;
i__5919_5935 = G__5947;
continue;
} else {
var i_5948 = cljs.core.first(seq__5916_5942__$1);
app.colors.darken_color_in_db(i_5948);


var G__5949 = cljs.core.next(seq__5916_5942__$1);
var G__5950 = null;
var G__5951 = (0);
var G__5952 = (0);
seq__5916_5932 = G__5949;
chunk__5917_5933 = G__5950;
count__5918_5934 = G__5951;
i__5919_5935 = G__5952;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5920 = cljs.core.seq(app.db.contrastcolors);
var chunk__5921 = null;
var count__5922 = (0);
var i__5923 = (0);
while(true){
if((i__5923 < count__5922)){
var i = chunk__5921.cljs$core$IIndexed$_nth$arity$2(null,i__5923);
app.colors.darken_color_in_db(i);


var G__5953 = seq__5920;
var G__5954 = chunk__5921;
var G__5955 = count__5922;
var G__5956 = (i__5923 + (1));
seq__5920 = G__5953;
chunk__5921 = G__5954;
count__5922 = G__5955;
i__5923 = G__5956;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5920);
if(temp__5457__auto__){
var seq__5920__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5920__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5920__$1);
var G__5957 = cljs.core.chunk_rest(seq__5920__$1);
var G__5958 = c__4550__auto__;
var G__5959 = cljs.core.count(c__4550__auto__);
var G__5960 = (0);
seq__5920 = G__5957;
chunk__5921 = G__5958;
count__5922 = G__5959;
i__5923 = G__5960;
continue;
} else {
var i = cljs.core.first(seq__5920__$1);
app.colors.darken_color_in_db(i);


var G__5961 = cljs.core.next(seq__5920__$1);
var G__5962 = null;
var G__5963 = (0);
var G__5964 = (0);
seq__5920 = G__5961;
chunk__5921 = G__5962;
count__5922 = G__5963;
i__5923 = G__5964;
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
var seq__5924_5965 = cljs.core.seq(app.db.contrastcolors);
var chunk__5925_5966 = null;
var count__5926_5967 = (0);
var i__5927_5968 = (0);
while(true){
if((i__5927_5968 < count__5926_5967)){
var i_5969 = chunk__5925_5966.cljs$core$IIndexed$_nth$arity$2(null,i__5927_5968);
app.colors.lighten_color_in_db(i_5969);


var G__5970 = seq__5924_5965;
var G__5971 = chunk__5925_5966;
var G__5972 = count__5926_5967;
var G__5973 = (i__5927_5968 + (1));
seq__5924_5965 = G__5970;
chunk__5925_5966 = G__5971;
count__5926_5967 = G__5972;
i__5927_5968 = G__5973;
continue;
} else {
var temp__5457__auto___5974 = cljs.core.seq(seq__5924_5965);
if(temp__5457__auto___5974){
var seq__5924_5975__$1 = temp__5457__auto___5974;
if(cljs.core.chunked_seq_QMARK_(seq__5924_5975__$1)){
var c__4550__auto___5976 = cljs.core.chunk_first(seq__5924_5975__$1);
var G__5977 = cljs.core.chunk_rest(seq__5924_5975__$1);
var G__5978 = c__4550__auto___5976;
var G__5979 = cljs.core.count(c__4550__auto___5976);
var G__5980 = (0);
seq__5924_5965 = G__5977;
chunk__5925_5966 = G__5978;
count__5926_5967 = G__5979;
i__5927_5968 = G__5980;
continue;
} else {
var i_5981 = cljs.core.first(seq__5924_5975__$1);
app.colors.lighten_color_in_db(i_5981);


var G__5982 = cljs.core.next(seq__5924_5975__$1);
var G__5983 = null;
var G__5984 = (0);
var G__5985 = (0);
seq__5924_5965 = G__5982;
chunk__5925_5966 = G__5983;
count__5926_5967 = G__5984;
i__5927_5968 = G__5985;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5928 = cljs.core.seq(app.db.contrastcolors);
var chunk__5929 = null;
var count__5930 = (0);
var i__5931 = (0);
while(true){
if((i__5931 < count__5930)){
var i = chunk__5929.cljs$core$IIndexed$_nth$arity$2(null,i__5931);
app.colors.lighten_color_in_db(i);


var G__5986 = seq__5928;
var G__5987 = chunk__5929;
var G__5988 = count__5930;
var G__5989 = (i__5931 + (1));
seq__5928 = G__5986;
chunk__5929 = G__5987;
count__5930 = G__5988;
i__5931 = G__5989;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5928);
if(temp__5457__auto__){
var seq__5928__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5928__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5928__$1);
var G__5990 = cljs.core.chunk_rest(seq__5928__$1);
var G__5991 = c__4550__auto__;
var G__5992 = cljs.core.count(c__4550__auto__);
var G__5993 = (0);
seq__5928 = G__5990;
chunk__5929 = G__5991;
count__5930 = G__5992;
i__5931 = G__5993;
continue;
} else {
var i = cljs.core.first(seq__5928__$1);
app.colors.lighten_color_in_db(i);


var G__5994 = cljs.core.next(seq__5928__$1);
var G__5995 = null;
var G__5996 = (0);
var G__5997 = (0);
seq__5928 = G__5994;
chunk__5929 = G__5995;
count__5930 = G__5996;
i__5931 = G__5997;
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
var distance = (function (){var G__5999 = ((360) / length);
return Math.floor(G__5999);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__5998_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__5998_SHARP_),(360));
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
return (function (p1__6000_SHARP_){
return app.colors.rgbToHex(p1__6000_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6001_SHARP_){
return app.colors.clamped_rgb_vec(p1__6001_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__6002_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__6002_SHARP_], null));
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
var seq__6003 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__6004 = null;
var count__6005 = (0);
var i__6006 = (0);
while(true){
if((i__6006 < count__6005)){
var vec__6013 = chunk__6004.cljs$core$IIndexed$_nth$arity$2(null,i__6006);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6013,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6013,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6019 = seq__6003;
var G__6020 = chunk__6004;
var G__6021 = count__6005;
var G__6022 = (i__6006 + (1));
seq__6003 = G__6019;
chunk__6004 = G__6020;
count__6005 = G__6021;
i__6006 = G__6022;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6003);
if(temp__5457__auto__){
var seq__6003__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6003__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6003__$1);
var G__6023 = cljs.core.chunk_rest(seq__6003__$1);
var G__6024 = c__4550__auto__;
var G__6025 = cljs.core.count(c__4550__auto__);
var G__6026 = (0);
seq__6003 = G__6023;
chunk__6004 = G__6024;
count__6005 = G__6025;
i__6006 = G__6026;
continue;
} else {
var vec__6016 = cljs.core.first(seq__6003__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6016,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6016,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6027 = cljs.core.next(seq__6003__$1);
var G__6028 = null;
var G__6029 = (0);
var G__6030 = (0);
seq__6003 = G__6027;
chunk__6004 = G__6028;
count__6005 = G__6029;
i__6006 = G__6030;
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
