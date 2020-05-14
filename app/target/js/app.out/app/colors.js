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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5617_SHARP_){
return (p1__5617_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5618_SHARP_){
return (((p1__5618_SHARP_ < (0))) || ((p1__5618_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5619_SHARP_){
return app.colors.clamp(p1__5619_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5620 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5620,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5620,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5620,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5625 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5623_SHARP_){
return (p1__5623_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5624_SHARP_){
if((p1__5624_SHARP_ > 0.04045)){
return Math.pow(((p1__5624_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5624_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5629 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5628_SHARP_){
if((p1__5628_SHARP_ > 0.008856)){
return Math.pow(p1__5628_SHARP_,((1) / (3)));
} else {
return ((p1__5628_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5629,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5629,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5629,(2),null);
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
var vec__5632 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5635 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5635,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5638 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5638,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5638,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5638,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5638,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5638,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5644 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5641_SHARP_){
return (p1__5641_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5644,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5644,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5644,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5644,x,y,z,r,g,b,rgb){
return (function (p1__5642_SHARP_){
return Math.round((p1__5642_SHARP_ * (255)));
});})(vec__5644,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5644,x,y,z,r,g,b,rgb){
return (function (p1__5643_SHARP_){
if((p1__5643_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5643_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5643_SHARP_ * 12.92);
}
});})(vec__5644,x,y,z,r,g,b,rgb))
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
var G__5648 = arguments.length;
switch (G__5648) {
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
var G__5649 = (function (){var G__5650 = goog.color.hexToRgb(colorstring);
var G__5651 = factor;
return goog.color.darken(G__5650,G__5651);
})();
return goog.color.rgbArrayToHex(G__5649);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5654 = arguments.length;
switch (G__5654) {
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
var G__5655 = (function (){var G__5656 = goog.color.hexToRgb(colorstring);
var G__5657 = factor;
return goog.color.lighten(G__5656,G__5657);
})();
return goog.color.rgbArrayToHex(G__5655);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5659 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5659,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5659,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5659,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5662 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5662) : color.call(null,G__5662));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5663 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5663) : color.call(null,G__5663));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5664_5680 = cljs.core.seq(app.db.contrastcolors);
var chunk__5665_5681 = null;
var count__5666_5682 = (0);
var i__5667_5683 = (0);
while(true){
if((i__5667_5683 < count__5666_5682)){
var i_5684 = chunk__5665_5681.cljs$core$IIndexed$_nth$arity$2(null,i__5667_5683);
app.colors.lighten_color_in_db(i_5684);


var G__5685 = seq__5664_5680;
var G__5686 = chunk__5665_5681;
var G__5687 = count__5666_5682;
var G__5688 = (i__5667_5683 + (1));
seq__5664_5680 = G__5685;
chunk__5665_5681 = G__5686;
count__5666_5682 = G__5687;
i__5667_5683 = G__5688;
continue;
} else {
var temp__4657__auto___5689 = cljs.core.seq(seq__5664_5680);
if(temp__4657__auto___5689){
var seq__5664_5690__$1 = temp__4657__auto___5689;
if(cljs.core.chunked_seq_QMARK_(seq__5664_5690__$1)){
var c__4550__auto___5691 = cljs.core.chunk_first(seq__5664_5690__$1);
var G__5692 = cljs.core.chunk_rest(seq__5664_5690__$1);
var G__5693 = c__4550__auto___5691;
var G__5694 = cljs.core.count(c__4550__auto___5691);
var G__5695 = (0);
seq__5664_5680 = G__5692;
chunk__5665_5681 = G__5693;
count__5666_5682 = G__5694;
i__5667_5683 = G__5695;
continue;
} else {
var i_5696 = cljs.core.first(seq__5664_5690__$1);
app.colors.lighten_color_in_db(i_5696);


var G__5697 = cljs.core.next(seq__5664_5690__$1);
var G__5698 = null;
var G__5699 = (0);
var G__5700 = (0);
seq__5664_5680 = G__5697;
chunk__5665_5681 = G__5698;
count__5666_5682 = G__5699;
i__5667_5683 = G__5700;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5668 = cljs.core.seq(app.db.contrastcolors);
var chunk__5669 = null;
var count__5670 = (0);
var i__5671 = (0);
while(true){
if((i__5671 < count__5670)){
var i = chunk__5669.cljs$core$IIndexed$_nth$arity$2(null,i__5671);
app.colors.lighten_color_in_db(i);


var G__5701 = seq__5668;
var G__5702 = chunk__5669;
var G__5703 = count__5670;
var G__5704 = (i__5671 + (1));
seq__5668 = G__5701;
chunk__5669 = G__5702;
count__5670 = G__5703;
i__5671 = G__5704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5668);
if(temp__4657__auto__){
var seq__5668__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5668__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5668__$1);
var G__5705 = cljs.core.chunk_rest(seq__5668__$1);
var G__5706 = c__4550__auto__;
var G__5707 = cljs.core.count(c__4550__auto__);
var G__5708 = (0);
seq__5668 = G__5705;
chunk__5669 = G__5706;
count__5670 = G__5707;
i__5671 = G__5708;
continue;
} else {
var i = cljs.core.first(seq__5668__$1);
app.colors.lighten_color_in_db(i);


var G__5709 = cljs.core.next(seq__5668__$1);
var G__5710 = null;
var G__5711 = (0);
var G__5712 = (0);
seq__5668 = G__5709;
chunk__5669 = G__5710;
count__5670 = G__5711;
i__5671 = G__5712;
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
var seq__5672_5713 = cljs.core.seq(app.db.contrastcolors);
var chunk__5673_5714 = null;
var count__5674_5715 = (0);
var i__5675_5716 = (0);
while(true){
if((i__5675_5716 < count__5674_5715)){
var i_5717 = chunk__5673_5714.cljs$core$IIndexed$_nth$arity$2(null,i__5675_5716);
app.colors.darken_color_in_db(i_5717);


var G__5718 = seq__5672_5713;
var G__5719 = chunk__5673_5714;
var G__5720 = count__5674_5715;
var G__5721 = (i__5675_5716 + (1));
seq__5672_5713 = G__5718;
chunk__5673_5714 = G__5719;
count__5674_5715 = G__5720;
i__5675_5716 = G__5721;
continue;
} else {
var temp__4657__auto___5722 = cljs.core.seq(seq__5672_5713);
if(temp__4657__auto___5722){
var seq__5672_5723__$1 = temp__4657__auto___5722;
if(cljs.core.chunked_seq_QMARK_(seq__5672_5723__$1)){
var c__4550__auto___5724 = cljs.core.chunk_first(seq__5672_5723__$1);
var G__5725 = cljs.core.chunk_rest(seq__5672_5723__$1);
var G__5726 = c__4550__auto___5724;
var G__5727 = cljs.core.count(c__4550__auto___5724);
var G__5728 = (0);
seq__5672_5713 = G__5725;
chunk__5673_5714 = G__5726;
count__5674_5715 = G__5727;
i__5675_5716 = G__5728;
continue;
} else {
var i_5729 = cljs.core.first(seq__5672_5723__$1);
app.colors.darken_color_in_db(i_5729);


var G__5730 = cljs.core.next(seq__5672_5723__$1);
var G__5731 = null;
var G__5732 = (0);
var G__5733 = (0);
seq__5672_5713 = G__5730;
chunk__5673_5714 = G__5731;
count__5674_5715 = G__5732;
i__5675_5716 = G__5733;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5676 = cljs.core.seq(app.db.contrastcolors);
var chunk__5677 = null;
var count__5678 = (0);
var i__5679 = (0);
while(true){
if((i__5679 < count__5678)){
var i = chunk__5677.cljs$core$IIndexed$_nth$arity$2(null,i__5679);
app.colors.darken_color_in_db(i);


var G__5734 = seq__5676;
var G__5735 = chunk__5677;
var G__5736 = count__5678;
var G__5737 = (i__5679 + (1));
seq__5676 = G__5734;
chunk__5677 = G__5735;
count__5678 = G__5736;
i__5679 = G__5737;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5676);
if(temp__4657__auto__){
var seq__5676__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5676__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5676__$1);
var G__5738 = cljs.core.chunk_rest(seq__5676__$1);
var G__5739 = c__4550__auto__;
var G__5740 = cljs.core.count(c__4550__auto__);
var G__5741 = (0);
seq__5676 = G__5738;
chunk__5677 = G__5739;
count__5678 = G__5740;
i__5679 = G__5741;
continue;
} else {
var i = cljs.core.first(seq__5676__$1);
app.colors.darken_color_in_db(i);


var G__5742 = cljs.core.next(seq__5676__$1);
var G__5743 = null;
var G__5744 = (0);
var G__5745 = (0);
seq__5676 = G__5742;
chunk__5677 = G__5743;
count__5678 = G__5744;
i__5679 = G__5745;
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
var seq__5746_5762 = cljs.core.seq(app.db.contrastcolors);
var chunk__5747_5763 = null;
var count__5748_5764 = (0);
var i__5749_5765 = (0);
while(true){
if((i__5749_5765 < count__5748_5764)){
var i_5766 = chunk__5747_5763.cljs$core$IIndexed$_nth$arity$2(null,i__5749_5765);
app.colors.darken_color_in_db(i_5766);


var G__5767 = seq__5746_5762;
var G__5768 = chunk__5747_5763;
var G__5769 = count__5748_5764;
var G__5770 = (i__5749_5765 + (1));
seq__5746_5762 = G__5767;
chunk__5747_5763 = G__5768;
count__5748_5764 = G__5769;
i__5749_5765 = G__5770;
continue;
} else {
var temp__4657__auto___5771 = cljs.core.seq(seq__5746_5762);
if(temp__4657__auto___5771){
var seq__5746_5772__$1 = temp__4657__auto___5771;
if(cljs.core.chunked_seq_QMARK_(seq__5746_5772__$1)){
var c__4550__auto___5773 = cljs.core.chunk_first(seq__5746_5772__$1);
var G__5774 = cljs.core.chunk_rest(seq__5746_5772__$1);
var G__5775 = c__4550__auto___5773;
var G__5776 = cljs.core.count(c__4550__auto___5773);
var G__5777 = (0);
seq__5746_5762 = G__5774;
chunk__5747_5763 = G__5775;
count__5748_5764 = G__5776;
i__5749_5765 = G__5777;
continue;
} else {
var i_5778 = cljs.core.first(seq__5746_5772__$1);
app.colors.darken_color_in_db(i_5778);


var G__5779 = cljs.core.next(seq__5746_5772__$1);
var G__5780 = null;
var G__5781 = (0);
var G__5782 = (0);
seq__5746_5762 = G__5779;
chunk__5747_5763 = G__5780;
count__5748_5764 = G__5781;
i__5749_5765 = G__5782;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5750 = cljs.core.seq(app.db.contrastcolors);
var chunk__5751 = null;
var count__5752 = (0);
var i__5753 = (0);
while(true){
if((i__5753 < count__5752)){
var i = chunk__5751.cljs$core$IIndexed$_nth$arity$2(null,i__5753);
app.colors.darken_color_in_db(i);


var G__5783 = seq__5750;
var G__5784 = chunk__5751;
var G__5785 = count__5752;
var G__5786 = (i__5753 + (1));
seq__5750 = G__5783;
chunk__5751 = G__5784;
count__5752 = G__5785;
i__5753 = G__5786;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5750);
if(temp__4657__auto__){
var seq__5750__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5750__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5750__$1);
var G__5787 = cljs.core.chunk_rest(seq__5750__$1);
var G__5788 = c__4550__auto__;
var G__5789 = cljs.core.count(c__4550__auto__);
var G__5790 = (0);
seq__5750 = G__5787;
chunk__5751 = G__5788;
count__5752 = G__5789;
i__5753 = G__5790;
continue;
} else {
var i = cljs.core.first(seq__5750__$1);
app.colors.darken_color_in_db(i);


var G__5791 = cljs.core.next(seq__5750__$1);
var G__5792 = null;
var G__5793 = (0);
var G__5794 = (0);
seq__5750 = G__5791;
chunk__5751 = G__5792;
count__5752 = G__5793;
i__5753 = G__5794;
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
var seq__5754_5795 = cljs.core.seq(app.db.contrastcolors);
var chunk__5755_5796 = null;
var count__5756_5797 = (0);
var i__5757_5798 = (0);
while(true){
if((i__5757_5798 < count__5756_5797)){
var i_5799 = chunk__5755_5796.cljs$core$IIndexed$_nth$arity$2(null,i__5757_5798);
app.colors.lighten_color_in_db(i_5799);


var G__5800 = seq__5754_5795;
var G__5801 = chunk__5755_5796;
var G__5802 = count__5756_5797;
var G__5803 = (i__5757_5798 + (1));
seq__5754_5795 = G__5800;
chunk__5755_5796 = G__5801;
count__5756_5797 = G__5802;
i__5757_5798 = G__5803;
continue;
} else {
var temp__4657__auto___5804 = cljs.core.seq(seq__5754_5795);
if(temp__4657__auto___5804){
var seq__5754_5805__$1 = temp__4657__auto___5804;
if(cljs.core.chunked_seq_QMARK_(seq__5754_5805__$1)){
var c__4550__auto___5806 = cljs.core.chunk_first(seq__5754_5805__$1);
var G__5807 = cljs.core.chunk_rest(seq__5754_5805__$1);
var G__5808 = c__4550__auto___5806;
var G__5809 = cljs.core.count(c__4550__auto___5806);
var G__5810 = (0);
seq__5754_5795 = G__5807;
chunk__5755_5796 = G__5808;
count__5756_5797 = G__5809;
i__5757_5798 = G__5810;
continue;
} else {
var i_5811 = cljs.core.first(seq__5754_5805__$1);
app.colors.lighten_color_in_db(i_5811);


var G__5812 = cljs.core.next(seq__5754_5805__$1);
var G__5813 = null;
var G__5814 = (0);
var G__5815 = (0);
seq__5754_5795 = G__5812;
chunk__5755_5796 = G__5813;
count__5756_5797 = G__5814;
i__5757_5798 = G__5815;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5758 = cljs.core.seq(app.db.contrastcolors);
var chunk__5759 = null;
var count__5760 = (0);
var i__5761 = (0);
while(true){
if((i__5761 < count__5760)){
var i = chunk__5759.cljs$core$IIndexed$_nth$arity$2(null,i__5761);
app.colors.lighten_color_in_db(i);


var G__5816 = seq__5758;
var G__5817 = chunk__5759;
var G__5818 = count__5760;
var G__5819 = (i__5761 + (1));
seq__5758 = G__5816;
chunk__5759 = G__5817;
count__5760 = G__5818;
i__5761 = G__5819;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5758);
if(temp__4657__auto__){
var seq__5758__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5758__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5758__$1);
var G__5820 = cljs.core.chunk_rest(seq__5758__$1);
var G__5821 = c__4550__auto__;
var G__5822 = cljs.core.count(c__4550__auto__);
var G__5823 = (0);
seq__5758 = G__5820;
chunk__5759 = G__5821;
count__5760 = G__5822;
i__5761 = G__5823;
continue;
} else {
var i = cljs.core.first(seq__5758__$1);
app.colors.lighten_color_in_db(i);


var G__5824 = cljs.core.next(seq__5758__$1);
var G__5825 = null;
var G__5826 = (0);
var G__5827 = (0);
seq__5758 = G__5824;
chunk__5759 = G__5825;
count__5760 = G__5826;
i__5761 = G__5827;
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
var distance = (function (){var G__5829 = ((360) / length);
return Math.floor(G__5829);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__5828_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__5828_SHARP_),(360));
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
return (function (p1__5830_SHARP_){
return app.colors.rgbToHex(p1__5830_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5831_SHARP_){
return app.colors.clamped_rgb_vec(p1__5831_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5832_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__5832_SHARP_], null));
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
var seq__5833 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__5834 = null;
var count__5835 = (0);
var i__5836 = (0);
while(true){
if((i__5836 < count__5835)){
var vec__5843 = chunk__5834.cljs$core$IIndexed$_nth$arity$2(null,i__5836);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5843,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5843,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5849 = seq__5833;
var G__5850 = chunk__5834;
var G__5851 = count__5835;
var G__5852 = (i__5836 + (1));
seq__5833 = G__5849;
chunk__5834 = G__5850;
count__5835 = G__5851;
i__5836 = G__5852;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5833);
if(temp__4657__auto__){
var seq__5833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5833__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5833__$1);
var G__5853 = cljs.core.chunk_rest(seq__5833__$1);
var G__5854 = c__4550__auto__;
var G__5855 = cljs.core.count(c__4550__auto__);
var G__5856 = (0);
seq__5833 = G__5853;
chunk__5834 = G__5854;
count__5835 = G__5855;
i__5836 = G__5856;
continue;
} else {
var vec__5846 = cljs.core.first(seq__5833__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5846,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5846,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5857 = cljs.core.next(seq__5833__$1);
var G__5858 = null;
var G__5859 = (0);
var G__5860 = (0);
seq__5833 = G__5857;
chunk__5834 = G__5858;
count__5835 = G__5859;
i__5836 = G__5860;
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
