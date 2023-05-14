// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10475_SHARP_){
return (p1__10475_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
/**
 * convert hex color in #rrggbb format to
 * format 0xbbggrr.
 */
app.colors.hexToBgrHex = (function app$colors$hexToBgrHex(hexcolor){
var vec__10476 = goog.color.hexToRgb(hexcolor);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10476,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10476,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10476,(2),null);
var bgrhex = goog.color.rgbToHex(b,g,r);
return clojure.string.replace_first(["0x",bgrhex].join(''),"#","");
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__10479_SHARP_){
return (((p1__10479_SHARP_ < (0))) || ((p1__10479_SHARP_ > (255))));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__4336__auto__ = (function (){var x__4339__auto__ = val;
var y__4340__auto__ = (255);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10480_SHARP_){
return app.colors.clamp(p1__10480_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__10481 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__10486 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10484_SHARP_){
return (p1__10484_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10485_SHARP_){
if((p1__10485_SHARP_ > 0.04045)){
return Math.pow(((p1__10485_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__10485_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__10490 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10489_SHARP_){
if((p1__10489_SHARP_ > 0.008856)){
return Math.pow(p1__10489_SHARP_,((1) / (3)));
} else {
return ((p1__10489_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(2),null);
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
var vec__10493 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__10496 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__10499 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
}),xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__10505 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10502_SHARP_){
return (p1__10502_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10503_SHARP_){
return Math.round((p1__10503_SHARP_ * (255)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10504_SHARP_){
if((p1__10504_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__10504_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__10504_SHARP_ * 12.92);
}
}),rgb));
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
var G__10509 = arguments.length;
switch (G__10509) {
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

(app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
}));

(app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.darken(goog.color.hexToRgb(colorstring),factor));
}));

(app.colors.darken.cljs$lang$maxFixedArity = 2);

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__10512 = arguments.length;
switch (G__10512) {
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

(app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
}));

(app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.lighten(goog.color.hexToRgb(colorstring),factor));
}));

(app.colors.lighten.cljs$lang$maxFixedArity = 2);

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__10514 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10514,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10514,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10514,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__10517 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__10517) : color.call(null,G__10517));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__10518 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__10518) : color.call(null,G__10518));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__10519_10535 = cljs.core.seq(app.db.contrastcolors);
var chunk__10520_10536 = null;
var count__10521_10537 = (0);
var i__10522_10538 = (0);
while(true){
if((i__10522_10538 < count__10521_10537)){
var i_10539 = chunk__10520_10536.cljs$core$IIndexed$_nth$arity$2(null,i__10522_10538);
app.colors.lighten_color_in_db(i_10539);


var G__10540 = seq__10519_10535;
var G__10541 = chunk__10520_10536;
var G__10542 = count__10521_10537;
var G__10543 = (i__10522_10538 + (1));
seq__10519_10535 = G__10540;
chunk__10520_10536 = G__10541;
count__10521_10537 = G__10542;
i__10522_10538 = G__10543;
continue;
} else {
var temp__5753__auto___10544 = cljs.core.seq(seq__10519_10535);
if(temp__5753__auto___10544){
var seq__10519_10545__$1 = temp__5753__auto___10544;
if(cljs.core.chunked_seq_QMARK_(seq__10519_10545__$1)){
var c__4679__auto___10546 = cljs.core.chunk_first(seq__10519_10545__$1);
var G__10547 = cljs.core.chunk_rest(seq__10519_10545__$1);
var G__10548 = c__4679__auto___10546;
var G__10549 = cljs.core.count(c__4679__auto___10546);
var G__10550 = (0);
seq__10519_10535 = G__10547;
chunk__10520_10536 = G__10548;
count__10521_10537 = G__10549;
i__10522_10538 = G__10550;
continue;
} else {
var i_10551 = cljs.core.first(seq__10519_10545__$1);
app.colors.lighten_color_in_db(i_10551);


var G__10552 = cljs.core.next(seq__10519_10545__$1);
var G__10553 = null;
var G__10554 = (0);
var G__10555 = (0);
seq__10519_10535 = G__10552;
chunk__10520_10536 = G__10553;
count__10521_10537 = G__10554;
i__10522_10538 = G__10555;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10523 = cljs.core.seq(app.db.contrastcolors);
var chunk__10524 = null;
var count__10525 = (0);
var i__10526 = (0);
while(true){
if((i__10526 < count__10525)){
var i = chunk__10524.cljs$core$IIndexed$_nth$arity$2(null,i__10526);
app.colors.lighten_color_in_db(i);


var G__10556 = seq__10523;
var G__10557 = chunk__10524;
var G__10558 = count__10525;
var G__10559 = (i__10526 + (1));
seq__10523 = G__10556;
chunk__10524 = G__10557;
count__10525 = G__10558;
i__10526 = G__10559;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10523);
if(temp__5753__auto__){
var seq__10523__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10523__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10523__$1);
var G__10560 = cljs.core.chunk_rest(seq__10523__$1);
var G__10561 = c__4679__auto__;
var G__10562 = cljs.core.count(c__4679__auto__);
var G__10563 = (0);
seq__10523 = G__10560;
chunk__10524 = G__10561;
count__10525 = G__10562;
i__10526 = G__10563;
continue;
} else {
var i = cljs.core.first(seq__10523__$1);
app.colors.lighten_color_in_db(i);


var G__10564 = cljs.core.next(seq__10523__$1);
var G__10565 = null;
var G__10566 = (0);
var G__10567 = (0);
seq__10523 = G__10564;
chunk__10524 = G__10565;
count__10525 = G__10566;
i__10526 = G__10567;
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
var seq__10527_10568 = cljs.core.seq(app.db.contrastcolors);
var chunk__10528_10569 = null;
var count__10529_10570 = (0);
var i__10530_10571 = (0);
while(true){
if((i__10530_10571 < count__10529_10570)){
var i_10572 = chunk__10528_10569.cljs$core$IIndexed$_nth$arity$2(null,i__10530_10571);
app.colors.darken_color_in_db(i_10572);


var G__10573 = seq__10527_10568;
var G__10574 = chunk__10528_10569;
var G__10575 = count__10529_10570;
var G__10576 = (i__10530_10571 + (1));
seq__10527_10568 = G__10573;
chunk__10528_10569 = G__10574;
count__10529_10570 = G__10575;
i__10530_10571 = G__10576;
continue;
} else {
var temp__5753__auto___10577 = cljs.core.seq(seq__10527_10568);
if(temp__5753__auto___10577){
var seq__10527_10578__$1 = temp__5753__auto___10577;
if(cljs.core.chunked_seq_QMARK_(seq__10527_10578__$1)){
var c__4679__auto___10579 = cljs.core.chunk_first(seq__10527_10578__$1);
var G__10580 = cljs.core.chunk_rest(seq__10527_10578__$1);
var G__10581 = c__4679__auto___10579;
var G__10582 = cljs.core.count(c__4679__auto___10579);
var G__10583 = (0);
seq__10527_10568 = G__10580;
chunk__10528_10569 = G__10581;
count__10529_10570 = G__10582;
i__10530_10571 = G__10583;
continue;
} else {
var i_10584 = cljs.core.first(seq__10527_10578__$1);
app.colors.darken_color_in_db(i_10584);


var G__10585 = cljs.core.next(seq__10527_10578__$1);
var G__10586 = null;
var G__10587 = (0);
var G__10588 = (0);
seq__10527_10568 = G__10585;
chunk__10528_10569 = G__10586;
count__10529_10570 = G__10587;
i__10530_10571 = G__10588;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10531 = cljs.core.seq(app.db.contrastcolors);
var chunk__10532 = null;
var count__10533 = (0);
var i__10534 = (0);
while(true){
if((i__10534 < count__10533)){
var i = chunk__10532.cljs$core$IIndexed$_nth$arity$2(null,i__10534);
app.colors.darken_color_in_db(i);


var G__10589 = seq__10531;
var G__10590 = chunk__10532;
var G__10591 = count__10533;
var G__10592 = (i__10534 + (1));
seq__10531 = G__10589;
chunk__10532 = G__10590;
count__10533 = G__10591;
i__10534 = G__10592;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10531);
if(temp__5753__auto__){
var seq__10531__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10531__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10531__$1);
var G__10593 = cljs.core.chunk_rest(seq__10531__$1);
var G__10594 = c__4679__auto__;
var G__10595 = cljs.core.count(c__4679__auto__);
var G__10596 = (0);
seq__10531 = G__10593;
chunk__10532 = G__10594;
count__10533 = G__10595;
i__10534 = G__10596;
continue;
} else {
var i = cljs.core.first(seq__10531__$1);
app.colors.darken_color_in_db(i);


var G__10597 = cljs.core.next(seq__10531__$1);
var G__10598 = null;
var G__10599 = (0);
var G__10600 = (0);
seq__10531 = G__10597;
chunk__10532 = G__10598;
count__10533 = G__10599;
i__10534 = G__10600;
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
var seq__10601_10617 = cljs.core.seq(app.db.contrastcolors);
var chunk__10602_10618 = null;
var count__10603_10619 = (0);
var i__10604_10620 = (0);
while(true){
if((i__10604_10620 < count__10603_10619)){
var i_10621 = chunk__10602_10618.cljs$core$IIndexed$_nth$arity$2(null,i__10604_10620);
app.colors.darken_color_in_db(i_10621);


var G__10622 = seq__10601_10617;
var G__10623 = chunk__10602_10618;
var G__10624 = count__10603_10619;
var G__10625 = (i__10604_10620 + (1));
seq__10601_10617 = G__10622;
chunk__10602_10618 = G__10623;
count__10603_10619 = G__10624;
i__10604_10620 = G__10625;
continue;
} else {
var temp__5753__auto___10626 = cljs.core.seq(seq__10601_10617);
if(temp__5753__auto___10626){
var seq__10601_10627__$1 = temp__5753__auto___10626;
if(cljs.core.chunked_seq_QMARK_(seq__10601_10627__$1)){
var c__4679__auto___10628 = cljs.core.chunk_first(seq__10601_10627__$1);
var G__10629 = cljs.core.chunk_rest(seq__10601_10627__$1);
var G__10630 = c__4679__auto___10628;
var G__10631 = cljs.core.count(c__4679__auto___10628);
var G__10632 = (0);
seq__10601_10617 = G__10629;
chunk__10602_10618 = G__10630;
count__10603_10619 = G__10631;
i__10604_10620 = G__10632;
continue;
} else {
var i_10633 = cljs.core.first(seq__10601_10627__$1);
app.colors.darken_color_in_db(i_10633);


var G__10634 = cljs.core.next(seq__10601_10627__$1);
var G__10635 = null;
var G__10636 = (0);
var G__10637 = (0);
seq__10601_10617 = G__10634;
chunk__10602_10618 = G__10635;
count__10603_10619 = G__10636;
i__10604_10620 = G__10637;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10605 = cljs.core.seq(app.db.contrastcolors);
var chunk__10606 = null;
var count__10607 = (0);
var i__10608 = (0);
while(true){
if((i__10608 < count__10607)){
var i = chunk__10606.cljs$core$IIndexed$_nth$arity$2(null,i__10608);
app.colors.darken_color_in_db(i);


var G__10638 = seq__10605;
var G__10639 = chunk__10606;
var G__10640 = count__10607;
var G__10641 = (i__10608 + (1));
seq__10605 = G__10638;
chunk__10606 = G__10639;
count__10607 = G__10640;
i__10608 = G__10641;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10605);
if(temp__5753__auto__){
var seq__10605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10605__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10605__$1);
var G__10642 = cljs.core.chunk_rest(seq__10605__$1);
var G__10643 = c__4679__auto__;
var G__10644 = cljs.core.count(c__4679__auto__);
var G__10645 = (0);
seq__10605 = G__10642;
chunk__10606 = G__10643;
count__10607 = G__10644;
i__10608 = G__10645;
continue;
} else {
var i = cljs.core.first(seq__10605__$1);
app.colors.darken_color_in_db(i);


var G__10646 = cljs.core.next(seq__10605__$1);
var G__10647 = null;
var G__10648 = (0);
var G__10649 = (0);
seq__10605 = G__10646;
chunk__10606 = G__10647;
count__10607 = G__10648;
i__10608 = G__10649;
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
var seq__10609_10650 = cljs.core.seq(app.db.contrastcolors);
var chunk__10610_10651 = null;
var count__10611_10652 = (0);
var i__10612_10653 = (0);
while(true){
if((i__10612_10653 < count__10611_10652)){
var i_10654 = chunk__10610_10651.cljs$core$IIndexed$_nth$arity$2(null,i__10612_10653);
app.colors.lighten_color_in_db(i_10654);


var G__10655 = seq__10609_10650;
var G__10656 = chunk__10610_10651;
var G__10657 = count__10611_10652;
var G__10658 = (i__10612_10653 + (1));
seq__10609_10650 = G__10655;
chunk__10610_10651 = G__10656;
count__10611_10652 = G__10657;
i__10612_10653 = G__10658;
continue;
} else {
var temp__5753__auto___10659 = cljs.core.seq(seq__10609_10650);
if(temp__5753__auto___10659){
var seq__10609_10660__$1 = temp__5753__auto___10659;
if(cljs.core.chunked_seq_QMARK_(seq__10609_10660__$1)){
var c__4679__auto___10661 = cljs.core.chunk_first(seq__10609_10660__$1);
var G__10662 = cljs.core.chunk_rest(seq__10609_10660__$1);
var G__10663 = c__4679__auto___10661;
var G__10664 = cljs.core.count(c__4679__auto___10661);
var G__10665 = (0);
seq__10609_10650 = G__10662;
chunk__10610_10651 = G__10663;
count__10611_10652 = G__10664;
i__10612_10653 = G__10665;
continue;
} else {
var i_10666 = cljs.core.first(seq__10609_10660__$1);
app.colors.lighten_color_in_db(i_10666);


var G__10667 = cljs.core.next(seq__10609_10660__$1);
var G__10668 = null;
var G__10669 = (0);
var G__10670 = (0);
seq__10609_10650 = G__10667;
chunk__10610_10651 = G__10668;
count__10611_10652 = G__10669;
i__10612_10653 = G__10670;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10613 = cljs.core.seq(app.db.contrastcolors);
var chunk__10614 = null;
var count__10615 = (0);
var i__10616 = (0);
while(true){
if((i__10616 < count__10615)){
var i = chunk__10614.cljs$core$IIndexed$_nth$arity$2(null,i__10616);
app.colors.lighten_color_in_db(i);


var G__10671 = seq__10613;
var G__10672 = chunk__10614;
var G__10673 = count__10615;
var G__10674 = (i__10616 + (1));
seq__10613 = G__10671;
chunk__10614 = G__10672;
count__10615 = G__10673;
i__10616 = G__10674;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10613);
if(temp__5753__auto__){
var seq__10613__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10613__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10613__$1);
var G__10675 = cljs.core.chunk_rest(seq__10613__$1);
var G__10676 = c__4679__auto__;
var G__10677 = cljs.core.count(c__4679__auto__);
var G__10678 = (0);
seq__10613 = G__10675;
chunk__10614 = G__10676;
count__10615 = G__10677;
i__10616 = G__10678;
continue;
} else {
var i = cljs.core.first(seq__10613__$1);
app.colors.lighten_color_in_db(i);


var G__10679 = cljs.core.next(seq__10613__$1);
var G__10680 = null;
var G__10681 = (0);
var G__10682 = (0);
seq__10613 = G__10679;
chunk__10614 = G__10680;
count__10615 = G__10681;
i__10616 = G__10682;
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
var distance = (function (){var G__10684 = ((360) / length);
return Math.floor(G__10684);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate((function (p1__10683_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__10683_SHARP_),(360));
}),startvalue));
});
/**
 * color-list takes a lightness and saturation value from the Cie-lch Color Space
 * and returns a vector of size length of db/randomcolors. Hue values for each color
 * are of equidistant value. Every lch color is converted to rgb, then clamped if 
 * necessary and finally converted to Hex format.
 */
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range(cljs.core.count(app.db.randomcolors),app.colors.random_hue());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10685_SHARP_){
return app.colors.rgbToHex(p1__10685_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10686_SHARP_){
return app.colors.clamped_rgb_vec(p1__10686_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10687_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__10687_SHARP_], null));
}),hr)));
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
var seq__10688 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__10689 = null;
var count__10690 = (0);
var i__10691 = (0);
while(true){
if((i__10691 < count__10690)){
var vec__10698 = chunk__10689.cljs$core$IIndexed$_nth$arity$2(null,i__10691);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10698,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10698,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__10704 = seq__10688;
var G__10705 = chunk__10689;
var G__10706 = count__10690;
var G__10707 = (i__10691 + (1));
seq__10688 = G__10704;
chunk__10689 = G__10705;
count__10690 = G__10706;
i__10691 = G__10707;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10688);
if(temp__5753__auto__){
var seq__10688__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10688__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10688__$1);
var G__10708 = cljs.core.chunk_rest(seq__10688__$1);
var G__10709 = c__4679__auto__;
var G__10710 = cljs.core.count(c__4679__auto__);
var G__10711 = (0);
seq__10688 = G__10708;
chunk__10689 = G__10709;
count__10690 = G__10710;
i__10691 = G__10711;
continue;
} else {
var vec__10701 = cljs.core.first(seq__10688__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10701,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10701,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__10712 = cljs.core.next(seq__10688__$1);
var G__10713 = null;
var G__10714 = (0);
var G__10715 = (0);
seq__10688 = G__10712;
chunk__10689 = G__10713;
count__10690 = G__10714;
i__10691 = G__10715;
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
