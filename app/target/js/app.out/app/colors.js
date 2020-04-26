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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5619_SHARP_){
return (p1__5619_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5620_SHARP_){
return (((p1__5620_SHARP_ < (0))) || ((p1__5620_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5621_SHARP_){
return app.colors.clamp(p1__5621_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5622 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5627 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5625_SHARP_){
return (p1__5625_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5626_SHARP_){
if((p1__5626_SHARP_ > 0.04045)){
return Math.pow(((p1__5626_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5626_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5627,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5627,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5627,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5631 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5630_SHARP_){
if((p1__5630_SHARP_ > 0.008856)){
return Math.pow(p1__5630_SHARP_,((1) / (3)));
} else {
return ((p1__5630_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(2),null);
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
var vec__5634 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5637 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5637,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5637,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5637,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5640 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5640,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5640,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5640,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5640,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5640,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5646 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5643_SHARP_){
return (p1__5643_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5646,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5646,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5646,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5646,x,y,z,r,g,b,rgb){
return (function (p1__5644_SHARP_){
return Math.round((p1__5644_SHARP_ * (255)));
});})(vec__5646,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5646,x,y,z,r,g,b,rgb){
return (function (p1__5645_SHARP_){
if((p1__5645_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5645_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5645_SHARP_ * 12.92);
}
});})(vec__5646,x,y,z,r,g,b,rgb))
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
var G__5650 = arguments.length;
switch (G__5650) {
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
var G__5651 = (function (){var G__5652 = goog.color.hexToRgb(colorstring);
var G__5653 = factor;
return goog.color.darken(G__5652,G__5653);
})();
return goog.color.rgbArrayToHex(G__5651);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5656 = arguments.length;
switch (G__5656) {
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
var G__5657 = (function (){var G__5658 = goog.color.hexToRgb(colorstring);
var G__5659 = factor;
return goog.color.lighten(G__5658,G__5659);
})();
return goog.color.rgbArrayToHex(G__5657);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5661 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5661,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5661,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5661,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5664 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5664) : color.call(null,G__5664));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5665 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5665) : color.call(null,G__5665));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5666_5682 = cljs.core.seq(app.db.contrastcolors);
var chunk__5667_5683 = null;
var count__5668_5684 = (0);
var i__5669_5685 = (0);
while(true){
if((i__5669_5685 < count__5668_5684)){
var i_5686 = chunk__5667_5683.cljs$core$IIndexed$_nth$arity$2(null,i__5669_5685);
app.colors.lighten_color_in_db(i_5686);


var G__5687 = seq__5666_5682;
var G__5688 = chunk__5667_5683;
var G__5689 = count__5668_5684;
var G__5690 = (i__5669_5685 + (1));
seq__5666_5682 = G__5687;
chunk__5667_5683 = G__5688;
count__5668_5684 = G__5689;
i__5669_5685 = G__5690;
continue;
} else {
var temp__4657__auto___5691 = cljs.core.seq(seq__5666_5682);
if(temp__4657__auto___5691){
var seq__5666_5692__$1 = temp__4657__auto___5691;
if(cljs.core.chunked_seq_QMARK_(seq__5666_5692__$1)){
var c__4550__auto___5693 = cljs.core.chunk_first(seq__5666_5692__$1);
var G__5694 = cljs.core.chunk_rest(seq__5666_5692__$1);
var G__5695 = c__4550__auto___5693;
var G__5696 = cljs.core.count(c__4550__auto___5693);
var G__5697 = (0);
seq__5666_5682 = G__5694;
chunk__5667_5683 = G__5695;
count__5668_5684 = G__5696;
i__5669_5685 = G__5697;
continue;
} else {
var i_5698 = cljs.core.first(seq__5666_5692__$1);
app.colors.lighten_color_in_db(i_5698);


var G__5699 = cljs.core.next(seq__5666_5692__$1);
var G__5700 = null;
var G__5701 = (0);
var G__5702 = (0);
seq__5666_5682 = G__5699;
chunk__5667_5683 = G__5700;
count__5668_5684 = G__5701;
i__5669_5685 = G__5702;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5670 = cljs.core.seq(app.db.contrastcolors);
var chunk__5671 = null;
var count__5672 = (0);
var i__5673 = (0);
while(true){
if((i__5673 < count__5672)){
var i = chunk__5671.cljs$core$IIndexed$_nth$arity$2(null,i__5673);
app.colors.lighten_color_in_db(i);


var G__5703 = seq__5670;
var G__5704 = chunk__5671;
var G__5705 = count__5672;
var G__5706 = (i__5673 + (1));
seq__5670 = G__5703;
chunk__5671 = G__5704;
count__5672 = G__5705;
i__5673 = G__5706;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5670);
if(temp__4657__auto__){
var seq__5670__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5670__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5670__$1);
var G__5707 = cljs.core.chunk_rest(seq__5670__$1);
var G__5708 = c__4550__auto__;
var G__5709 = cljs.core.count(c__4550__auto__);
var G__5710 = (0);
seq__5670 = G__5707;
chunk__5671 = G__5708;
count__5672 = G__5709;
i__5673 = G__5710;
continue;
} else {
var i = cljs.core.first(seq__5670__$1);
app.colors.lighten_color_in_db(i);


var G__5711 = cljs.core.next(seq__5670__$1);
var G__5712 = null;
var G__5713 = (0);
var G__5714 = (0);
seq__5670 = G__5711;
chunk__5671 = G__5712;
count__5672 = G__5713;
i__5673 = G__5714;
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
var seq__5674_5715 = cljs.core.seq(app.db.contrastcolors);
var chunk__5675_5716 = null;
var count__5676_5717 = (0);
var i__5677_5718 = (0);
while(true){
if((i__5677_5718 < count__5676_5717)){
var i_5719 = chunk__5675_5716.cljs$core$IIndexed$_nth$arity$2(null,i__5677_5718);
app.colors.darken_color_in_db(i_5719);


var G__5720 = seq__5674_5715;
var G__5721 = chunk__5675_5716;
var G__5722 = count__5676_5717;
var G__5723 = (i__5677_5718 + (1));
seq__5674_5715 = G__5720;
chunk__5675_5716 = G__5721;
count__5676_5717 = G__5722;
i__5677_5718 = G__5723;
continue;
} else {
var temp__4657__auto___5724 = cljs.core.seq(seq__5674_5715);
if(temp__4657__auto___5724){
var seq__5674_5725__$1 = temp__4657__auto___5724;
if(cljs.core.chunked_seq_QMARK_(seq__5674_5725__$1)){
var c__4550__auto___5726 = cljs.core.chunk_first(seq__5674_5725__$1);
var G__5727 = cljs.core.chunk_rest(seq__5674_5725__$1);
var G__5728 = c__4550__auto___5726;
var G__5729 = cljs.core.count(c__4550__auto___5726);
var G__5730 = (0);
seq__5674_5715 = G__5727;
chunk__5675_5716 = G__5728;
count__5676_5717 = G__5729;
i__5677_5718 = G__5730;
continue;
} else {
var i_5731 = cljs.core.first(seq__5674_5725__$1);
app.colors.darken_color_in_db(i_5731);


var G__5732 = cljs.core.next(seq__5674_5725__$1);
var G__5733 = null;
var G__5734 = (0);
var G__5735 = (0);
seq__5674_5715 = G__5732;
chunk__5675_5716 = G__5733;
count__5676_5717 = G__5734;
i__5677_5718 = G__5735;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5678 = cljs.core.seq(app.db.contrastcolors);
var chunk__5679 = null;
var count__5680 = (0);
var i__5681 = (0);
while(true){
if((i__5681 < count__5680)){
var i = chunk__5679.cljs$core$IIndexed$_nth$arity$2(null,i__5681);
app.colors.darken_color_in_db(i);


var G__5736 = seq__5678;
var G__5737 = chunk__5679;
var G__5738 = count__5680;
var G__5739 = (i__5681 + (1));
seq__5678 = G__5736;
chunk__5679 = G__5737;
count__5680 = G__5738;
i__5681 = G__5739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5678);
if(temp__4657__auto__){
var seq__5678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5678__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5678__$1);
var G__5740 = cljs.core.chunk_rest(seq__5678__$1);
var G__5741 = c__4550__auto__;
var G__5742 = cljs.core.count(c__4550__auto__);
var G__5743 = (0);
seq__5678 = G__5740;
chunk__5679 = G__5741;
count__5680 = G__5742;
i__5681 = G__5743;
continue;
} else {
var i = cljs.core.first(seq__5678__$1);
app.colors.darken_color_in_db(i);


var G__5744 = cljs.core.next(seq__5678__$1);
var G__5745 = null;
var G__5746 = (0);
var G__5747 = (0);
seq__5678 = G__5744;
chunk__5679 = G__5745;
count__5680 = G__5746;
i__5681 = G__5747;
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
var seq__5748_5764 = cljs.core.seq(app.db.contrastcolors);
var chunk__5749_5765 = null;
var count__5750_5766 = (0);
var i__5751_5767 = (0);
while(true){
if((i__5751_5767 < count__5750_5766)){
var i_5768 = chunk__5749_5765.cljs$core$IIndexed$_nth$arity$2(null,i__5751_5767);
app.colors.darken_color_in_db(i_5768);


var G__5769 = seq__5748_5764;
var G__5770 = chunk__5749_5765;
var G__5771 = count__5750_5766;
var G__5772 = (i__5751_5767 + (1));
seq__5748_5764 = G__5769;
chunk__5749_5765 = G__5770;
count__5750_5766 = G__5771;
i__5751_5767 = G__5772;
continue;
} else {
var temp__4657__auto___5773 = cljs.core.seq(seq__5748_5764);
if(temp__4657__auto___5773){
var seq__5748_5774__$1 = temp__4657__auto___5773;
if(cljs.core.chunked_seq_QMARK_(seq__5748_5774__$1)){
var c__4550__auto___5775 = cljs.core.chunk_first(seq__5748_5774__$1);
var G__5776 = cljs.core.chunk_rest(seq__5748_5774__$1);
var G__5777 = c__4550__auto___5775;
var G__5778 = cljs.core.count(c__4550__auto___5775);
var G__5779 = (0);
seq__5748_5764 = G__5776;
chunk__5749_5765 = G__5777;
count__5750_5766 = G__5778;
i__5751_5767 = G__5779;
continue;
} else {
var i_5780 = cljs.core.first(seq__5748_5774__$1);
app.colors.darken_color_in_db(i_5780);


var G__5781 = cljs.core.next(seq__5748_5774__$1);
var G__5782 = null;
var G__5783 = (0);
var G__5784 = (0);
seq__5748_5764 = G__5781;
chunk__5749_5765 = G__5782;
count__5750_5766 = G__5783;
i__5751_5767 = G__5784;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5752 = cljs.core.seq(app.db.contrastcolors);
var chunk__5753 = null;
var count__5754 = (0);
var i__5755 = (0);
while(true){
if((i__5755 < count__5754)){
var i = chunk__5753.cljs$core$IIndexed$_nth$arity$2(null,i__5755);
app.colors.darken_color_in_db(i);


var G__5785 = seq__5752;
var G__5786 = chunk__5753;
var G__5787 = count__5754;
var G__5788 = (i__5755 + (1));
seq__5752 = G__5785;
chunk__5753 = G__5786;
count__5754 = G__5787;
i__5755 = G__5788;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5752);
if(temp__4657__auto__){
var seq__5752__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5752__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5752__$1);
var G__5789 = cljs.core.chunk_rest(seq__5752__$1);
var G__5790 = c__4550__auto__;
var G__5791 = cljs.core.count(c__4550__auto__);
var G__5792 = (0);
seq__5752 = G__5789;
chunk__5753 = G__5790;
count__5754 = G__5791;
i__5755 = G__5792;
continue;
} else {
var i = cljs.core.first(seq__5752__$1);
app.colors.darken_color_in_db(i);


var G__5793 = cljs.core.next(seq__5752__$1);
var G__5794 = null;
var G__5795 = (0);
var G__5796 = (0);
seq__5752 = G__5793;
chunk__5753 = G__5794;
count__5754 = G__5795;
i__5755 = G__5796;
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
var seq__5756_5797 = cljs.core.seq(app.db.contrastcolors);
var chunk__5757_5798 = null;
var count__5758_5799 = (0);
var i__5759_5800 = (0);
while(true){
if((i__5759_5800 < count__5758_5799)){
var i_5801 = chunk__5757_5798.cljs$core$IIndexed$_nth$arity$2(null,i__5759_5800);
app.colors.lighten_color_in_db(i_5801);


var G__5802 = seq__5756_5797;
var G__5803 = chunk__5757_5798;
var G__5804 = count__5758_5799;
var G__5805 = (i__5759_5800 + (1));
seq__5756_5797 = G__5802;
chunk__5757_5798 = G__5803;
count__5758_5799 = G__5804;
i__5759_5800 = G__5805;
continue;
} else {
var temp__4657__auto___5806 = cljs.core.seq(seq__5756_5797);
if(temp__4657__auto___5806){
var seq__5756_5807__$1 = temp__4657__auto___5806;
if(cljs.core.chunked_seq_QMARK_(seq__5756_5807__$1)){
var c__4550__auto___5808 = cljs.core.chunk_first(seq__5756_5807__$1);
var G__5809 = cljs.core.chunk_rest(seq__5756_5807__$1);
var G__5810 = c__4550__auto___5808;
var G__5811 = cljs.core.count(c__4550__auto___5808);
var G__5812 = (0);
seq__5756_5797 = G__5809;
chunk__5757_5798 = G__5810;
count__5758_5799 = G__5811;
i__5759_5800 = G__5812;
continue;
} else {
var i_5813 = cljs.core.first(seq__5756_5807__$1);
app.colors.lighten_color_in_db(i_5813);


var G__5814 = cljs.core.next(seq__5756_5807__$1);
var G__5815 = null;
var G__5816 = (0);
var G__5817 = (0);
seq__5756_5797 = G__5814;
chunk__5757_5798 = G__5815;
count__5758_5799 = G__5816;
i__5759_5800 = G__5817;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5760 = cljs.core.seq(app.db.contrastcolors);
var chunk__5761 = null;
var count__5762 = (0);
var i__5763 = (0);
while(true){
if((i__5763 < count__5762)){
var i = chunk__5761.cljs$core$IIndexed$_nth$arity$2(null,i__5763);
app.colors.lighten_color_in_db(i);


var G__5818 = seq__5760;
var G__5819 = chunk__5761;
var G__5820 = count__5762;
var G__5821 = (i__5763 + (1));
seq__5760 = G__5818;
chunk__5761 = G__5819;
count__5762 = G__5820;
i__5763 = G__5821;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5760);
if(temp__4657__auto__){
var seq__5760__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5760__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5760__$1);
var G__5822 = cljs.core.chunk_rest(seq__5760__$1);
var G__5823 = c__4550__auto__;
var G__5824 = cljs.core.count(c__4550__auto__);
var G__5825 = (0);
seq__5760 = G__5822;
chunk__5761 = G__5823;
count__5762 = G__5824;
i__5763 = G__5825;
continue;
} else {
var i = cljs.core.first(seq__5760__$1);
app.colors.lighten_color_in_db(i);


var G__5826 = cljs.core.next(seq__5760__$1);
var G__5827 = null;
var G__5828 = (0);
var G__5829 = (0);
seq__5760 = G__5826;
chunk__5761 = G__5827;
count__5762 = G__5828;
i__5763 = G__5829;
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
var distance = (function (){var G__5831 = ((360) / length);
return Math.floor(G__5831);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__5830_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__5830_SHARP_),(360));
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
return (function (p1__5832_SHARP_){
return app.colors.rgbToHex(p1__5832_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5833_SHARP_){
return app.colors.clamped_rgb_vec(p1__5833_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5834_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__5834_SHARP_], null));
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
var seq__5835 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__5836 = null;
var count__5837 = (0);
var i__5838 = (0);
while(true){
if((i__5838 < count__5837)){
var vec__5845 = chunk__5836.cljs$core$IIndexed$_nth$arity$2(null,i__5838);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5845,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5845,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5851 = seq__5835;
var G__5852 = chunk__5836;
var G__5853 = count__5837;
var G__5854 = (i__5838 + (1));
seq__5835 = G__5851;
chunk__5836 = G__5852;
count__5837 = G__5853;
i__5838 = G__5854;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5835);
if(temp__4657__auto__){
var seq__5835__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5835__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5835__$1);
var G__5855 = cljs.core.chunk_rest(seq__5835__$1);
var G__5856 = c__4550__auto__;
var G__5857 = cljs.core.count(c__4550__auto__);
var G__5858 = (0);
seq__5835 = G__5855;
chunk__5836 = G__5856;
count__5837 = G__5857;
i__5838 = G__5858;
continue;
} else {
var vec__5848 = cljs.core.first(seq__5835__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5848,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5848,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5859 = cljs.core.next(seq__5835__$1);
var G__5860 = null;
var G__5861 = (0);
var G__5862 = (0);
seq__5835 = G__5859;
chunk__5836 = G__5860;
count__5837 = G__5861;
i__5838 = G__5862;
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
