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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5607_SHARP_){
return (p1__5607_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__5608_SHARP_){
return (((p1__5608_SHARP_ < (0))) || ((p1__5608_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5609_SHARP_){
return app.colors.clamp(p1__5609_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__5610 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5610,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5610,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5610,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__5615 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5613_SHARP_){
return (p1__5613_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5614_SHARP_){
if((p1__5614_SHARP_ > 0.04045)){
return Math.pow(((p1__5614_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__5614_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__5619 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5618_SHARP_){
if((p1__5618_SHARP_ > 0.008856)){
return Math.pow(p1__5618_SHARP_,((1) / (3)));
} else {
return ((p1__5618_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5619,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5619,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5619,(2),null);
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
var vec__5622 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__5625 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5625,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__5628 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5628,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5628,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5628,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5628,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__5628,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__5634 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__5631_SHARP_){
return (p1__5631_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5634,x,y,z,r,g,b,rgb){
return (function (p1__5632_SHARP_){
return Math.round((p1__5632_SHARP_ * (255)));
});})(vec__5634,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__5634,x,y,z,r,g,b,rgb){
return (function (p1__5633_SHARP_){
if((p1__5633_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__5633_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__5633_SHARP_ * 12.92);
}
});})(vec__5634,x,y,z,r,g,b,rgb))
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
var G__5638 = arguments.length;
switch (G__5638) {
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
var G__5639 = (function (){var G__5640 = goog.color.hexToRgb(colorstring);
var G__5641 = factor;
return goog.color.darken(G__5640,G__5641);
})();
return goog.color.rgbArrayToHex(G__5639);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__5644 = arguments.length;
switch (G__5644) {
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
var G__5645 = (function (){var G__5646 = goog.color.hexToRgb(colorstring);
var G__5647 = factor;
return goog.color.lighten(G__5646,G__5647);
})();
return goog.color.rgbArrayToHex(G__5645);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__5649 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5649,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5649,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5649,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__5652 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5652) : color.call(null,G__5652));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__5653 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__5653) : color.call(null,G__5653));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__5654_5670 = cljs.core.seq(app.db.contrastcolors);
var chunk__5655_5671 = null;
var count__5656_5672 = (0);
var i__5657_5673 = (0);
while(true){
if((i__5657_5673 < count__5656_5672)){
var i_5674 = chunk__5655_5671.cljs$core$IIndexed$_nth$arity$2(null,i__5657_5673);
app.colors.lighten_color_in_db(i_5674);


var G__5675 = seq__5654_5670;
var G__5676 = chunk__5655_5671;
var G__5677 = count__5656_5672;
var G__5678 = (i__5657_5673 + (1));
seq__5654_5670 = G__5675;
chunk__5655_5671 = G__5676;
count__5656_5672 = G__5677;
i__5657_5673 = G__5678;
continue;
} else {
var temp__4657__auto___5679 = cljs.core.seq(seq__5654_5670);
if(temp__4657__auto___5679){
var seq__5654_5680__$1 = temp__4657__auto___5679;
if(cljs.core.chunked_seq_QMARK_(seq__5654_5680__$1)){
var c__4550__auto___5681 = cljs.core.chunk_first(seq__5654_5680__$1);
var G__5682 = cljs.core.chunk_rest(seq__5654_5680__$1);
var G__5683 = c__4550__auto___5681;
var G__5684 = cljs.core.count(c__4550__auto___5681);
var G__5685 = (0);
seq__5654_5670 = G__5682;
chunk__5655_5671 = G__5683;
count__5656_5672 = G__5684;
i__5657_5673 = G__5685;
continue;
} else {
var i_5686 = cljs.core.first(seq__5654_5680__$1);
app.colors.lighten_color_in_db(i_5686);


var G__5687 = cljs.core.next(seq__5654_5680__$1);
var G__5688 = null;
var G__5689 = (0);
var G__5690 = (0);
seq__5654_5670 = G__5687;
chunk__5655_5671 = G__5688;
count__5656_5672 = G__5689;
i__5657_5673 = G__5690;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5658 = cljs.core.seq(app.db.contrastcolors);
var chunk__5659 = null;
var count__5660 = (0);
var i__5661 = (0);
while(true){
if((i__5661 < count__5660)){
var i = chunk__5659.cljs$core$IIndexed$_nth$arity$2(null,i__5661);
app.colors.lighten_color_in_db(i);


var G__5691 = seq__5658;
var G__5692 = chunk__5659;
var G__5693 = count__5660;
var G__5694 = (i__5661 + (1));
seq__5658 = G__5691;
chunk__5659 = G__5692;
count__5660 = G__5693;
i__5661 = G__5694;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5658);
if(temp__4657__auto__){
var seq__5658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5658__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5658__$1);
var G__5695 = cljs.core.chunk_rest(seq__5658__$1);
var G__5696 = c__4550__auto__;
var G__5697 = cljs.core.count(c__4550__auto__);
var G__5698 = (0);
seq__5658 = G__5695;
chunk__5659 = G__5696;
count__5660 = G__5697;
i__5661 = G__5698;
continue;
} else {
var i = cljs.core.first(seq__5658__$1);
app.colors.lighten_color_in_db(i);


var G__5699 = cljs.core.next(seq__5658__$1);
var G__5700 = null;
var G__5701 = (0);
var G__5702 = (0);
seq__5658 = G__5699;
chunk__5659 = G__5700;
count__5660 = G__5701;
i__5661 = G__5702;
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
var seq__5662_5703 = cljs.core.seq(app.db.contrastcolors);
var chunk__5663_5704 = null;
var count__5664_5705 = (0);
var i__5665_5706 = (0);
while(true){
if((i__5665_5706 < count__5664_5705)){
var i_5707 = chunk__5663_5704.cljs$core$IIndexed$_nth$arity$2(null,i__5665_5706);
app.colors.darken_color_in_db(i_5707);


var G__5708 = seq__5662_5703;
var G__5709 = chunk__5663_5704;
var G__5710 = count__5664_5705;
var G__5711 = (i__5665_5706 + (1));
seq__5662_5703 = G__5708;
chunk__5663_5704 = G__5709;
count__5664_5705 = G__5710;
i__5665_5706 = G__5711;
continue;
} else {
var temp__4657__auto___5712 = cljs.core.seq(seq__5662_5703);
if(temp__4657__auto___5712){
var seq__5662_5713__$1 = temp__4657__auto___5712;
if(cljs.core.chunked_seq_QMARK_(seq__5662_5713__$1)){
var c__4550__auto___5714 = cljs.core.chunk_first(seq__5662_5713__$1);
var G__5715 = cljs.core.chunk_rest(seq__5662_5713__$1);
var G__5716 = c__4550__auto___5714;
var G__5717 = cljs.core.count(c__4550__auto___5714);
var G__5718 = (0);
seq__5662_5703 = G__5715;
chunk__5663_5704 = G__5716;
count__5664_5705 = G__5717;
i__5665_5706 = G__5718;
continue;
} else {
var i_5719 = cljs.core.first(seq__5662_5713__$1);
app.colors.darken_color_in_db(i_5719);


var G__5720 = cljs.core.next(seq__5662_5713__$1);
var G__5721 = null;
var G__5722 = (0);
var G__5723 = (0);
seq__5662_5703 = G__5720;
chunk__5663_5704 = G__5721;
count__5664_5705 = G__5722;
i__5665_5706 = G__5723;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5666 = cljs.core.seq(app.db.contrastcolors);
var chunk__5667 = null;
var count__5668 = (0);
var i__5669 = (0);
while(true){
if((i__5669 < count__5668)){
var i = chunk__5667.cljs$core$IIndexed$_nth$arity$2(null,i__5669);
app.colors.darken_color_in_db(i);


var G__5724 = seq__5666;
var G__5725 = chunk__5667;
var G__5726 = count__5668;
var G__5727 = (i__5669 + (1));
seq__5666 = G__5724;
chunk__5667 = G__5725;
count__5668 = G__5726;
i__5669 = G__5727;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5666);
if(temp__4657__auto__){
var seq__5666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5666__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5666__$1);
var G__5728 = cljs.core.chunk_rest(seq__5666__$1);
var G__5729 = c__4550__auto__;
var G__5730 = cljs.core.count(c__4550__auto__);
var G__5731 = (0);
seq__5666 = G__5728;
chunk__5667 = G__5729;
count__5668 = G__5730;
i__5669 = G__5731;
continue;
} else {
var i = cljs.core.first(seq__5666__$1);
app.colors.darken_color_in_db(i);


var G__5732 = cljs.core.next(seq__5666__$1);
var G__5733 = null;
var G__5734 = (0);
var G__5735 = (0);
seq__5666 = G__5732;
chunk__5667 = G__5733;
count__5668 = G__5734;
i__5669 = G__5735;
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
var seq__5736_5752 = cljs.core.seq(app.db.contrastcolors);
var chunk__5737_5753 = null;
var count__5738_5754 = (0);
var i__5739_5755 = (0);
while(true){
if((i__5739_5755 < count__5738_5754)){
var i_5756 = chunk__5737_5753.cljs$core$IIndexed$_nth$arity$2(null,i__5739_5755);
app.colors.darken_color_in_db(i_5756);


var G__5757 = seq__5736_5752;
var G__5758 = chunk__5737_5753;
var G__5759 = count__5738_5754;
var G__5760 = (i__5739_5755 + (1));
seq__5736_5752 = G__5757;
chunk__5737_5753 = G__5758;
count__5738_5754 = G__5759;
i__5739_5755 = G__5760;
continue;
} else {
var temp__4657__auto___5761 = cljs.core.seq(seq__5736_5752);
if(temp__4657__auto___5761){
var seq__5736_5762__$1 = temp__4657__auto___5761;
if(cljs.core.chunked_seq_QMARK_(seq__5736_5762__$1)){
var c__4550__auto___5763 = cljs.core.chunk_first(seq__5736_5762__$1);
var G__5764 = cljs.core.chunk_rest(seq__5736_5762__$1);
var G__5765 = c__4550__auto___5763;
var G__5766 = cljs.core.count(c__4550__auto___5763);
var G__5767 = (0);
seq__5736_5752 = G__5764;
chunk__5737_5753 = G__5765;
count__5738_5754 = G__5766;
i__5739_5755 = G__5767;
continue;
} else {
var i_5768 = cljs.core.first(seq__5736_5762__$1);
app.colors.darken_color_in_db(i_5768);


var G__5769 = cljs.core.next(seq__5736_5762__$1);
var G__5770 = null;
var G__5771 = (0);
var G__5772 = (0);
seq__5736_5752 = G__5769;
chunk__5737_5753 = G__5770;
count__5738_5754 = G__5771;
i__5739_5755 = G__5772;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5740 = cljs.core.seq(app.db.contrastcolors);
var chunk__5741 = null;
var count__5742 = (0);
var i__5743 = (0);
while(true){
if((i__5743 < count__5742)){
var i = chunk__5741.cljs$core$IIndexed$_nth$arity$2(null,i__5743);
app.colors.darken_color_in_db(i);


var G__5773 = seq__5740;
var G__5774 = chunk__5741;
var G__5775 = count__5742;
var G__5776 = (i__5743 + (1));
seq__5740 = G__5773;
chunk__5741 = G__5774;
count__5742 = G__5775;
i__5743 = G__5776;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5740);
if(temp__4657__auto__){
var seq__5740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5740__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5740__$1);
var G__5777 = cljs.core.chunk_rest(seq__5740__$1);
var G__5778 = c__4550__auto__;
var G__5779 = cljs.core.count(c__4550__auto__);
var G__5780 = (0);
seq__5740 = G__5777;
chunk__5741 = G__5778;
count__5742 = G__5779;
i__5743 = G__5780;
continue;
} else {
var i = cljs.core.first(seq__5740__$1);
app.colors.darken_color_in_db(i);


var G__5781 = cljs.core.next(seq__5740__$1);
var G__5782 = null;
var G__5783 = (0);
var G__5784 = (0);
seq__5740 = G__5781;
chunk__5741 = G__5782;
count__5742 = G__5783;
i__5743 = G__5784;
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
var seq__5744_5785 = cljs.core.seq(app.db.contrastcolors);
var chunk__5745_5786 = null;
var count__5746_5787 = (0);
var i__5747_5788 = (0);
while(true){
if((i__5747_5788 < count__5746_5787)){
var i_5789 = chunk__5745_5786.cljs$core$IIndexed$_nth$arity$2(null,i__5747_5788);
app.colors.lighten_color_in_db(i_5789);


var G__5790 = seq__5744_5785;
var G__5791 = chunk__5745_5786;
var G__5792 = count__5746_5787;
var G__5793 = (i__5747_5788 + (1));
seq__5744_5785 = G__5790;
chunk__5745_5786 = G__5791;
count__5746_5787 = G__5792;
i__5747_5788 = G__5793;
continue;
} else {
var temp__4657__auto___5794 = cljs.core.seq(seq__5744_5785);
if(temp__4657__auto___5794){
var seq__5744_5795__$1 = temp__4657__auto___5794;
if(cljs.core.chunked_seq_QMARK_(seq__5744_5795__$1)){
var c__4550__auto___5796 = cljs.core.chunk_first(seq__5744_5795__$1);
var G__5797 = cljs.core.chunk_rest(seq__5744_5795__$1);
var G__5798 = c__4550__auto___5796;
var G__5799 = cljs.core.count(c__4550__auto___5796);
var G__5800 = (0);
seq__5744_5785 = G__5797;
chunk__5745_5786 = G__5798;
count__5746_5787 = G__5799;
i__5747_5788 = G__5800;
continue;
} else {
var i_5801 = cljs.core.first(seq__5744_5795__$1);
app.colors.lighten_color_in_db(i_5801);


var G__5802 = cljs.core.next(seq__5744_5795__$1);
var G__5803 = null;
var G__5804 = (0);
var G__5805 = (0);
seq__5744_5785 = G__5802;
chunk__5745_5786 = G__5803;
count__5746_5787 = G__5804;
i__5747_5788 = G__5805;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__5748 = cljs.core.seq(app.db.contrastcolors);
var chunk__5749 = null;
var count__5750 = (0);
var i__5751 = (0);
while(true){
if((i__5751 < count__5750)){
var i = chunk__5749.cljs$core$IIndexed$_nth$arity$2(null,i__5751);
app.colors.lighten_color_in_db(i);


var G__5806 = seq__5748;
var G__5807 = chunk__5749;
var G__5808 = count__5750;
var G__5809 = (i__5751 + (1));
seq__5748 = G__5806;
chunk__5749 = G__5807;
count__5750 = G__5808;
i__5751 = G__5809;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5748);
if(temp__4657__auto__){
var seq__5748__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5748__$1);
var G__5810 = cljs.core.chunk_rest(seq__5748__$1);
var G__5811 = c__4550__auto__;
var G__5812 = cljs.core.count(c__4550__auto__);
var G__5813 = (0);
seq__5748 = G__5810;
chunk__5749 = G__5811;
count__5750 = G__5812;
i__5751 = G__5813;
continue;
} else {
var i = cljs.core.first(seq__5748__$1);
app.colors.lighten_color_in_db(i);


var G__5814 = cljs.core.next(seq__5748__$1);
var G__5815 = null;
var G__5816 = (0);
var G__5817 = (0);
seq__5748 = G__5814;
chunk__5749 = G__5815;
count__5750 = G__5816;
i__5751 = G__5817;
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
var distance = (function (){var G__5819 = ((360) / length);
return Math.floor(G__5819);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__5818_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__5818_SHARP_),(360));
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
return (function (p1__5820_SHARP_){
return app.colors.rgbToHex(p1__5820_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5821_SHARP_){
return app.colors.clamped_rgb_vec(p1__5821_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__5822_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__5822_SHARP_], null));
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
var seq__5823 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__5824 = null;
var count__5825 = (0);
var i__5826 = (0);
while(true){
if((i__5826 < count__5825)){
var vec__5833 = chunk__5824.cljs$core$IIndexed$_nth$arity$2(null,i__5826);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5833,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5833,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5839 = seq__5823;
var G__5840 = chunk__5824;
var G__5841 = count__5825;
var G__5842 = (i__5826 + (1));
seq__5823 = G__5839;
chunk__5824 = G__5840;
count__5825 = G__5841;
i__5826 = G__5842;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__5823);
if(temp__4657__auto__){
var seq__5823__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5823__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5823__$1);
var G__5843 = cljs.core.chunk_rest(seq__5823__$1);
var G__5844 = c__4550__auto__;
var G__5845 = cljs.core.count(c__4550__auto__);
var G__5846 = (0);
seq__5823 = G__5843;
chunk__5824 = G__5844;
count__5825 = G__5845;
i__5826 = G__5846;
continue;
} else {
var vec__5836 = cljs.core.first(seq__5823__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5836,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5836,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__5847 = cljs.core.next(seq__5823__$1);
var G__5848 = null;
var G__5849 = (0);
var G__5850 = (0);
seq__5823 = G__5847;
chunk__5824 = G__5848;
count__5825 = G__5849;
i__5826 = G__5850;
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
