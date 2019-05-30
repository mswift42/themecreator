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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5777_SHARP_){
return (p1__5777_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5778_SHARP_){
return (((p1__5778_SHARP_ < (0))) || ((p1__5778_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5779_SHARP_){
return app.colors.clamp(p1__5779_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5780 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5780,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5780,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5780,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5785 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5783_SHARP_){
return (p1__5783_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5784_SHARP_){
if((p1__5784_SHARP_ > 0.04045)){
return Math.pow(((p1__5784_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5784_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5785,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5785,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5785,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5789 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5788_SHARP_){
if((p1__5788_SHARP_ > 0.008856)){
return Math.pow(p1__5788_SHARP_,((1) / (3)));
} else {
return ((p1__5788_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5789,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5789,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5789,(2),null);
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
var vec__5792 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5792,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5792,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5792,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5795 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5798 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5798,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5798,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5798,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5798,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5798,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5804 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5801_SHARP_){
return (p1__5801_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5804,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5804,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5804,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5804,x,y,z,r,g,b,rgb){
return (function (p1__5802_SHARP_){
return Math.round((p1__5802_SHARP_ * (255)));
});})(vec__5804,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5804,x,y,z,r,g,b,rgb){
return (function (p1__5803_SHARP_){
if((p1__5803_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5803_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5803_SHARP_ * 12.92);
}
});})(vec__5804,x,y,z,r,g,b,rgb))
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
var G__5808 = arguments.length;
switch (G__5808) {
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
var G__5809 = (function (){var G__5810 = goog.color.hexToRgb(colorstring);
var G__5811 = factor;
return goog.color.darken(G__5810,G__5811);
})();
return goog.color.rgbArrayToHex(G__5809);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5814 = arguments.length;
switch (G__5814) {
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
var G__5815 = (function (){var G__5816 = goog.color.hexToRgb(colorstring);
var G__5817 = factor;
return goog.color.lighten(G__5816,G__5817);
})();
return goog.color.rgbArrayToHex(G__5815);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5819 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5819,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5819,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5819,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5822 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5822) : color.call(null,G__5822));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5823 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5823) : color.call(null,G__5823));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5824_5840 = cljs.core.seq(app.db.contrastcolors);
var chunk__5825_5841 = null;
var count__5826_5842 = (0);
var i__5827_5843 = (0);
while(true){
if((i__5827_5843 < count__5826_5842)){
var i_5844 = chunk__5825_5841.cljs$core$IIndexed$_nth$arity$2(null,i__5827_5843);
app.colors.lighten_color_in_db(i_5844);


var G__5845 = seq__5824_5840;
var G__5846 = chunk__5825_5841;
var G__5847 = count__5826_5842;
var G__5848 = (i__5827_5843 + (1));
seq__5824_5840 = G__5845;
chunk__5825_5841 = G__5846;
count__5826_5842 = G__5847;
i__5827_5843 = G__5848;
continue;
} else {
var temp__5457__auto___5849 = cljs.core.seq(seq__5824_5840);
if(temp__5457__auto___5849){
var seq__5824_5850__$1 = temp__5457__auto___5849;
if(cljs.core.chunked_seq_QMARK_(seq__5824_5850__$1)){
var c__4550__auto___5851 = cljs.core.chunk_first(seq__5824_5850__$1);
var G__5852 = cljs.core.chunk_rest(seq__5824_5850__$1);
var G__5853 = c__4550__auto___5851;
var G__5854 = cljs.core.count(c__4550__auto___5851);
var G__5855 = (0);
seq__5824_5840 = G__5852;
chunk__5825_5841 = G__5853;
count__5826_5842 = G__5854;
i__5827_5843 = G__5855;
continue;
} else {
var i_5856 = cljs.core.first(seq__5824_5850__$1);
app.colors.lighten_color_in_db(i_5856);


var G__5857 = cljs.core.next(seq__5824_5850__$1);
var G__5858 = null;
var G__5859 = (0);
var G__5860 = (0);
seq__5824_5840 = G__5857;
chunk__5825_5841 = G__5858;
count__5826_5842 = G__5859;
i__5827_5843 = G__5860;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5828 = cljs.core.seq(app.db.contrastcolors);
var chunk__5829 = null;
var count__5830 = (0);
var i__5831 = (0);
while(true){
if((i__5831 < count__5830)){
var i = chunk__5829.cljs$core$IIndexed$_nth$arity$2(null,i__5831);
app.colors.lighten_color_in_db(i);


var G__5861 = seq__5828;
var G__5862 = chunk__5829;
var G__5863 = count__5830;
var G__5864 = (i__5831 + (1));
seq__5828 = G__5861;
chunk__5829 = G__5862;
count__5830 = G__5863;
i__5831 = G__5864;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5828);
if(temp__5457__auto__){
var seq__5828__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5828__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5828__$1);
var G__5865 = cljs.core.chunk_rest(seq__5828__$1);
var G__5866 = c__4550__auto__;
var G__5867 = cljs.core.count(c__4550__auto__);
var G__5868 = (0);
seq__5828 = G__5865;
chunk__5829 = G__5866;
count__5830 = G__5867;
i__5831 = G__5868;
continue;
} else {
var i = cljs.core.first(seq__5828__$1);
app.colors.lighten_color_in_db(i);


var G__5869 = cljs.core.next(seq__5828__$1);
var G__5870 = null;
var G__5871 = (0);
var G__5872 = (0);
seq__5828 = G__5869;
chunk__5829 = G__5870;
count__5830 = G__5871;
i__5831 = G__5872;
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
var seq__5832_5873 = cljs.core.seq(app.db.contrastcolors);
var chunk__5833_5874 = null;
var count__5834_5875 = (0);
var i__5835_5876 = (0);
while(true){
if((i__5835_5876 < count__5834_5875)){
var i_5877 = chunk__5833_5874.cljs$core$IIndexed$_nth$arity$2(null,i__5835_5876);
app.colors.darken_color_in_db(i_5877);


var G__5878 = seq__5832_5873;
var G__5879 = chunk__5833_5874;
var G__5880 = count__5834_5875;
var G__5881 = (i__5835_5876 + (1));
seq__5832_5873 = G__5878;
chunk__5833_5874 = G__5879;
count__5834_5875 = G__5880;
i__5835_5876 = G__5881;
continue;
} else {
var temp__5457__auto___5882 = cljs.core.seq(seq__5832_5873);
if(temp__5457__auto___5882){
var seq__5832_5883__$1 = temp__5457__auto___5882;
if(cljs.core.chunked_seq_QMARK_(seq__5832_5883__$1)){
var c__4550__auto___5884 = cljs.core.chunk_first(seq__5832_5883__$1);
var G__5885 = cljs.core.chunk_rest(seq__5832_5883__$1);
var G__5886 = c__4550__auto___5884;
var G__5887 = cljs.core.count(c__4550__auto___5884);
var G__5888 = (0);
seq__5832_5873 = G__5885;
chunk__5833_5874 = G__5886;
count__5834_5875 = G__5887;
i__5835_5876 = G__5888;
continue;
} else {
var i_5889 = cljs.core.first(seq__5832_5883__$1);
app.colors.darken_color_in_db(i_5889);


var G__5890 = cljs.core.next(seq__5832_5883__$1);
var G__5891 = null;
var G__5892 = (0);
var G__5893 = (0);
seq__5832_5873 = G__5890;
chunk__5833_5874 = G__5891;
count__5834_5875 = G__5892;
i__5835_5876 = G__5893;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5836 = cljs.core.seq(app.db.contrastcolors);
var chunk__5837 = null;
var count__5838 = (0);
var i__5839 = (0);
while(true){
if((i__5839 < count__5838)){
var i = chunk__5837.cljs$core$IIndexed$_nth$arity$2(null,i__5839);
app.colors.darken_color_in_db(i);


var G__5894 = seq__5836;
var G__5895 = chunk__5837;
var G__5896 = count__5838;
var G__5897 = (i__5839 + (1));
seq__5836 = G__5894;
chunk__5837 = G__5895;
count__5838 = G__5896;
i__5839 = G__5897;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5836);
if(temp__5457__auto__){
var seq__5836__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5836__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5836__$1);
var G__5898 = cljs.core.chunk_rest(seq__5836__$1);
var G__5899 = c__4550__auto__;
var G__5900 = cljs.core.count(c__4550__auto__);
var G__5901 = (0);
seq__5836 = G__5898;
chunk__5837 = G__5899;
count__5838 = G__5900;
i__5839 = G__5901;
continue;
} else {
var i = cljs.core.first(seq__5836__$1);
app.colors.darken_color_in_db(i);


var G__5902 = cljs.core.next(seq__5836__$1);
var G__5903 = null;
var G__5904 = (0);
var G__5905 = (0);
seq__5836 = G__5902;
chunk__5837 = G__5903;
count__5838 = G__5904;
i__5839 = G__5905;
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
var seq__5906_5922 = cljs.core.seq(app.db.contrastcolors);
var chunk__5907_5923 = null;
var count__5908_5924 = (0);
var i__5909_5925 = (0);
while(true){
if((i__5909_5925 < count__5908_5924)){
var i_5926 = chunk__5907_5923.cljs$core$IIndexed$_nth$arity$2(null,i__5909_5925);
app.colors.darken_color_in_db(i_5926);


var G__5927 = seq__5906_5922;
var G__5928 = chunk__5907_5923;
var G__5929 = count__5908_5924;
var G__5930 = (i__5909_5925 + (1));
seq__5906_5922 = G__5927;
chunk__5907_5923 = G__5928;
count__5908_5924 = G__5929;
i__5909_5925 = G__5930;
continue;
} else {
var temp__5457__auto___5931 = cljs.core.seq(seq__5906_5922);
if(temp__5457__auto___5931){
var seq__5906_5932__$1 = temp__5457__auto___5931;
if(cljs.core.chunked_seq_QMARK_(seq__5906_5932__$1)){
var c__4550__auto___5933 = cljs.core.chunk_first(seq__5906_5932__$1);
var G__5934 = cljs.core.chunk_rest(seq__5906_5932__$1);
var G__5935 = c__4550__auto___5933;
var G__5936 = cljs.core.count(c__4550__auto___5933);
var G__5937 = (0);
seq__5906_5922 = G__5934;
chunk__5907_5923 = G__5935;
count__5908_5924 = G__5936;
i__5909_5925 = G__5937;
continue;
} else {
var i_5938 = cljs.core.first(seq__5906_5932__$1);
app.colors.darken_color_in_db(i_5938);


var G__5939 = cljs.core.next(seq__5906_5932__$1);
var G__5940 = null;
var G__5941 = (0);
var G__5942 = (0);
seq__5906_5922 = G__5939;
chunk__5907_5923 = G__5940;
count__5908_5924 = G__5941;
i__5909_5925 = G__5942;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5910 = cljs.core.seq(app.db.contrastcolors);
var chunk__5911 = null;
var count__5912 = (0);
var i__5913 = (0);
while(true){
if((i__5913 < count__5912)){
var i = chunk__5911.cljs$core$IIndexed$_nth$arity$2(null,i__5913);
app.colors.darken_color_in_db(i);


var G__5943 = seq__5910;
var G__5944 = chunk__5911;
var G__5945 = count__5912;
var G__5946 = (i__5913 + (1));
seq__5910 = G__5943;
chunk__5911 = G__5944;
count__5912 = G__5945;
i__5913 = G__5946;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5910);
if(temp__5457__auto__){
var seq__5910__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5910__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5910__$1);
var G__5947 = cljs.core.chunk_rest(seq__5910__$1);
var G__5948 = c__4550__auto__;
var G__5949 = cljs.core.count(c__4550__auto__);
var G__5950 = (0);
seq__5910 = G__5947;
chunk__5911 = G__5948;
count__5912 = G__5949;
i__5913 = G__5950;
continue;
} else {
var i = cljs.core.first(seq__5910__$1);
app.colors.darken_color_in_db(i);


var G__5951 = cljs.core.next(seq__5910__$1);
var G__5952 = null;
var G__5953 = (0);
var G__5954 = (0);
seq__5910 = G__5951;
chunk__5911 = G__5952;
count__5912 = G__5953;
i__5913 = G__5954;
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
var seq__5914_5955 = cljs.core.seq(app.db.contrastcolors);
var chunk__5915_5956 = null;
var count__5916_5957 = (0);
var i__5917_5958 = (0);
while(true){
if((i__5917_5958 < count__5916_5957)){
var i_5959 = chunk__5915_5956.cljs$core$IIndexed$_nth$arity$2(null,i__5917_5958);
app.colors.lighten_color_in_db(i_5959);


var G__5960 = seq__5914_5955;
var G__5961 = chunk__5915_5956;
var G__5962 = count__5916_5957;
var G__5963 = (i__5917_5958 + (1));
seq__5914_5955 = G__5960;
chunk__5915_5956 = G__5961;
count__5916_5957 = G__5962;
i__5917_5958 = G__5963;
continue;
} else {
var temp__5457__auto___5964 = cljs.core.seq(seq__5914_5955);
if(temp__5457__auto___5964){
var seq__5914_5965__$1 = temp__5457__auto___5964;
if(cljs.core.chunked_seq_QMARK_(seq__5914_5965__$1)){
var c__4550__auto___5966 = cljs.core.chunk_first(seq__5914_5965__$1);
var G__5967 = cljs.core.chunk_rest(seq__5914_5965__$1);
var G__5968 = c__4550__auto___5966;
var G__5969 = cljs.core.count(c__4550__auto___5966);
var G__5970 = (0);
seq__5914_5955 = G__5967;
chunk__5915_5956 = G__5968;
count__5916_5957 = G__5969;
i__5917_5958 = G__5970;
continue;
} else {
var i_5971 = cljs.core.first(seq__5914_5965__$1);
app.colors.lighten_color_in_db(i_5971);


var G__5972 = cljs.core.next(seq__5914_5965__$1);
var G__5973 = null;
var G__5974 = (0);
var G__5975 = (0);
seq__5914_5955 = G__5972;
chunk__5915_5956 = G__5973;
count__5916_5957 = G__5974;
i__5917_5958 = G__5975;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5918 = cljs.core.seq(app.db.contrastcolors);
var chunk__5919 = null;
var count__5920 = (0);
var i__5921 = (0);
while(true){
if((i__5921 < count__5920)){
var i = chunk__5919.cljs$core$IIndexed$_nth$arity$2(null,i__5921);
app.colors.lighten_color_in_db(i);


var G__5976 = seq__5918;
var G__5977 = chunk__5919;
var G__5978 = count__5920;
var G__5979 = (i__5921 + (1));
seq__5918 = G__5976;
chunk__5919 = G__5977;
count__5920 = G__5978;
i__5921 = G__5979;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5918);
if(temp__5457__auto__){
var seq__5918__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5918__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5918__$1);
var G__5980 = cljs.core.chunk_rest(seq__5918__$1);
var G__5981 = c__4550__auto__;
var G__5982 = cljs.core.count(c__4550__auto__);
var G__5983 = (0);
seq__5918 = G__5980;
chunk__5919 = G__5981;
count__5920 = G__5982;
i__5921 = G__5983;
continue;
} else {
var i = cljs.core.first(seq__5918__$1);
app.colors.lighten_color_in_db(i);


var G__5984 = cljs.core.next(seq__5918__$1);
var G__5985 = null;
var G__5986 = (0);
var G__5987 = (0);
seq__5918 = G__5984;
chunk__5919 = G__5985;
count__5920 = G__5986;
i__5921 = G__5987;
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
var distance = (function (){var G__5989 = ((360) / length);
return Math.floor(G__5989);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__5988_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__5988_SHARP_),(360));
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
return (function (p1__5990_SHARP_){
return app.colors.rgbToHex(p1__5990_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5991_SHARP_){
return app.colors.clamped_rgb_vec(p1__5991_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5992_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__5992_SHARP_], null));
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
var seq__5993 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__5994 = null;
var count__5995 = (0);
var i__5996 = (0);
while(true){
if((i__5996 < count__5995)){
var vec__6003 = chunk__5994.cljs$core$IIndexed$_nth$arity$2(null,i__5996);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6003,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6003,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6009 = seq__5993;
var G__6010 = chunk__5994;
var G__6011 = count__5995;
var G__6012 = (i__5996 + (1));
seq__5993 = G__6009;
chunk__5994 = G__6010;
count__5995 = G__6011;
i__5996 = G__6012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5993);
if(temp__5457__auto__){
var seq__5993__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5993__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5993__$1);
var G__6013 = cljs.core.chunk_rest(seq__5993__$1);
var G__6014 = c__4550__auto__;
var G__6015 = cljs.core.count(c__4550__auto__);
var G__6016 = (0);
seq__5993 = G__6013;
chunk__5994 = G__6014;
count__5995 = G__6015;
i__5996 = G__6016;
continue;
} else {
var vec__6006 = cljs.core.first(seq__5993__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6006,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6006,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__6017 = cljs.core.next(seq__5993__$1);
var G__6018 = null;
var G__6019 = (0);
var G__6020 = (0);
seq__5993 = G__6017;
chunk__5994 = G__6018;
count__5995 = G__6019;
i__5996 = G__6020;
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
