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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10469_SHARP_){
return (p1__10469_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
/**
 * convert hex color in #rrggbb format to
 * format 0xbbggrr.
 */
app.colors.hexToBgrHex = (function app$colors$hexToBgrHex(hexcolor){
var vec__10470 = goog.color.hexToRgb(hexcolor);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(2),null);
var bgrhex = goog.color.rgbToHex(b,g,r);
return clojure.string.replace_first(["0x",bgrhex].join(''),"#","");
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__10473_SHARP_){
return (((p1__10473_SHARP_ < (0))) || ((p1__10473_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10474_SHARP_){
return app.colors.clamp(p1__10474_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__10475 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__10480 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10478_SHARP_){
return (p1__10478_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10479_SHARP_){
if((p1__10479_SHARP_ > 0.04045)){
return Math.pow(((p1__10479_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__10479_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10480,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10480,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10480,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__10484 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10483_SHARP_){
if((p1__10483_SHARP_ > 0.008856)){
return Math.pow(p1__10483_SHARP_,((1) / (3)));
} else {
return ((p1__10483_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(2),null);
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
var vec__10487 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__10490 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10490,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__10493 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(2),null);
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
var vec__10499 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10496_SHARP_){
return (p1__10496_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10497_SHARP_){
return Math.round((p1__10497_SHARP_ * (255)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10498_SHARP_){
if((p1__10498_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__10498_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__10498_SHARP_ * 12.92);
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
var G__10503 = arguments.length;
switch (G__10503) {
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
var G__10506 = arguments.length;
switch (G__10506) {
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
var vec__10508 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__10511 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__10511) : color.call(null,G__10511));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__10512 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__10512) : color.call(null,G__10512));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__10513_10529 = cljs.core.seq(app.db.contrastcolors);
var chunk__10514_10530 = null;
var count__10515_10531 = (0);
var i__10516_10532 = (0);
while(true){
if((i__10516_10532 < count__10515_10531)){
var i_10533 = chunk__10514_10530.cljs$core$IIndexed$_nth$arity$2(null,i__10516_10532);
app.colors.lighten_color_in_db(i_10533);


var G__10534 = seq__10513_10529;
var G__10535 = chunk__10514_10530;
var G__10536 = count__10515_10531;
var G__10537 = (i__10516_10532 + (1));
seq__10513_10529 = G__10534;
chunk__10514_10530 = G__10535;
count__10515_10531 = G__10536;
i__10516_10532 = G__10537;
continue;
} else {
var temp__5753__auto___10538 = cljs.core.seq(seq__10513_10529);
if(temp__5753__auto___10538){
var seq__10513_10539__$1 = temp__5753__auto___10538;
if(cljs.core.chunked_seq_QMARK_(seq__10513_10539__$1)){
var c__4679__auto___10540 = cljs.core.chunk_first(seq__10513_10539__$1);
var G__10541 = cljs.core.chunk_rest(seq__10513_10539__$1);
var G__10542 = c__4679__auto___10540;
var G__10543 = cljs.core.count(c__4679__auto___10540);
var G__10544 = (0);
seq__10513_10529 = G__10541;
chunk__10514_10530 = G__10542;
count__10515_10531 = G__10543;
i__10516_10532 = G__10544;
continue;
} else {
var i_10545 = cljs.core.first(seq__10513_10539__$1);
app.colors.lighten_color_in_db(i_10545);


var G__10546 = cljs.core.next(seq__10513_10539__$1);
var G__10547 = null;
var G__10548 = (0);
var G__10549 = (0);
seq__10513_10529 = G__10546;
chunk__10514_10530 = G__10547;
count__10515_10531 = G__10548;
i__10516_10532 = G__10549;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10517 = cljs.core.seq(app.db.contrastcolors);
var chunk__10518 = null;
var count__10519 = (0);
var i__10520 = (0);
while(true){
if((i__10520 < count__10519)){
var i = chunk__10518.cljs$core$IIndexed$_nth$arity$2(null,i__10520);
app.colors.lighten_color_in_db(i);


var G__10550 = seq__10517;
var G__10551 = chunk__10518;
var G__10552 = count__10519;
var G__10553 = (i__10520 + (1));
seq__10517 = G__10550;
chunk__10518 = G__10551;
count__10519 = G__10552;
i__10520 = G__10553;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10517);
if(temp__5753__auto__){
var seq__10517__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10517__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10517__$1);
var G__10554 = cljs.core.chunk_rest(seq__10517__$1);
var G__10555 = c__4679__auto__;
var G__10556 = cljs.core.count(c__4679__auto__);
var G__10557 = (0);
seq__10517 = G__10554;
chunk__10518 = G__10555;
count__10519 = G__10556;
i__10520 = G__10557;
continue;
} else {
var i = cljs.core.first(seq__10517__$1);
app.colors.lighten_color_in_db(i);


var G__10558 = cljs.core.next(seq__10517__$1);
var G__10559 = null;
var G__10560 = (0);
var G__10561 = (0);
seq__10517 = G__10558;
chunk__10518 = G__10559;
count__10519 = G__10560;
i__10520 = G__10561;
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
var seq__10521_10562 = cljs.core.seq(app.db.contrastcolors);
var chunk__10522_10563 = null;
var count__10523_10564 = (0);
var i__10524_10565 = (0);
while(true){
if((i__10524_10565 < count__10523_10564)){
var i_10566 = chunk__10522_10563.cljs$core$IIndexed$_nth$arity$2(null,i__10524_10565);
app.colors.darken_color_in_db(i_10566);


var G__10567 = seq__10521_10562;
var G__10568 = chunk__10522_10563;
var G__10569 = count__10523_10564;
var G__10570 = (i__10524_10565 + (1));
seq__10521_10562 = G__10567;
chunk__10522_10563 = G__10568;
count__10523_10564 = G__10569;
i__10524_10565 = G__10570;
continue;
} else {
var temp__5753__auto___10571 = cljs.core.seq(seq__10521_10562);
if(temp__5753__auto___10571){
var seq__10521_10572__$1 = temp__5753__auto___10571;
if(cljs.core.chunked_seq_QMARK_(seq__10521_10572__$1)){
var c__4679__auto___10573 = cljs.core.chunk_first(seq__10521_10572__$1);
var G__10574 = cljs.core.chunk_rest(seq__10521_10572__$1);
var G__10575 = c__4679__auto___10573;
var G__10576 = cljs.core.count(c__4679__auto___10573);
var G__10577 = (0);
seq__10521_10562 = G__10574;
chunk__10522_10563 = G__10575;
count__10523_10564 = G__10576;
i__10524_10565 = G__10577;
continue;
} else {
var i_10578 = cljs.core.first(seq__10521_10572__$1);
app.colors.darken_color_in_db(i_10578);


var G__10579 = cljs.core.next(seq__10521_10572__$1);
var G__10580 = null;
var G__10581 = (0);
var G__10582 = (0);
seq__10521_10562 = G__10579;
chunk__10522_10563 = G__10580;
count__10523_10564 = G__10581;
i__10524_10565 = G__10582;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10525 = cljs.core.seq(app.db.contrastcolors);
var chunk__10526 = null;
var count__10527 = (0);
var i__10528 = (0);
while(true){
if((i__10528 < count__10527)){
var i = chunk__10526.cljs$core$IIndexed$_nth$arity$2(null,i__10528);
app.colors.darken_color_in_db(i);


var G__10583 = seq__10525;
var G__10584 = chunk__10526;
var G__10585 = count__10527;
var G__10586 = (i__10528 + (1));
seq__10525 = G__10583;
chunk__10526 = G__10584;
count__10527 = G__10585;
i__10528 = G__10586;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10525);
if(temp__5753__auto__){
var seq__10525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10525__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10525__$1);
var G__10587 = cljs.core.chunk_rest(seq__10525__$1);
var G__10588 = c__4679__auto__;
var G__10589 = cljs.core.count(c__4679__auto__);
var G__10590 = (0);
seq__10525 = G__10587;
chunk__10526 = G__10588;
count__10527 = G__10589;
i__10528 = G__10590;
continue;
} else {
var i = cljs.core.first(seq__10525__$1);
app.colors.darken_color_in_db(i);


var G__10591 = cljs.core.next(seq__10525__$1);
var G__10592 = null;
var G__10593 = (0);
var G__10594 = (0);
seq__10525 = G__10591;
chunk__10526 = G__10592;
count__10527 = G__10593;
i__10528 = G__10594;
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
var seq__10595_10611 = cljs.core.seq(app.db.contrastcolors);
var chunk__10596_10612 = null;
var count__10597_10613 = (0);
var i__10598_10614 = (0);
while(true){
if((i__10598_10614 < count__10597_10613)){
var i_10615 = chunk__10596_10612.cljs$core$IIndexed$_nth$arity$2(null,i__10598_10614);
app.colors.darken_color_in_db(i_10615);


var G__10616 = seq__10595_10611;
var G__10617 = chunk__10596_10612;
var G__10618 = count__10597_10613;
var G__10619 = (i__10598_10614 + (1));
seq__10595_10611 = G__10616;
chunk__10596_10612 = G__10617;
count__10597_10613 = G__10618;
i__10598_10614 = G__10619;
continue;
} else {
var temp__5753__auto___10620 = cljs.core.seq(seq__10595_10611);
if(temp__5753__auto___10620){
var seq__10595_10621__$1 = temp__5753__auto___10620;
if(cljs.core.chunked_seq_QMARK_(seq__10595_10621__$1)){
var c__4679__auto___10622 = cljs.core.chunk_first(seq__10595_10621__$1);
var G__10623 = cljs.core.chunk_rest(seq__10595_10621__$1);
var G__10624 = c__4679__auto___10622;
var G__10625 = cljs.core.count(c__4679__auto___10622);
var G__10626 = (0);
seq__10595_10611 = G__10623;
chunk__10596_10612 = G__10624;
count__10597_10613 = G__10625;
i__10598_10614 = G__10626;
continue;
} else {
var i_10627 = cljs.core.first(seq__10595_10621__$1);
app.colors.darken_color_in_db(i_10627);


var G__10628 = cljs.core.next(seq__10595_10621__$1);
var G__10629 = null;
var G__10630 = (0);
var G__10631 = (0);
seq__10595_10611 = G__10628;
chunk__10596_10612 = G__10629;
count__10597_10613 = G__10630;
i__10598_10614 = G__10631;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10599 = cljs.core.seq(app.db.contrastcolors);
var chunk__10600 = null;
var count__10601 = (0);
var i__10602 = (0);
while(true){
if((i__10602 < count__10601)){
var i = chunk__10600.cljs$core$IIndexed$_nth$arity$2(null,i__10602);
app.colors.darken_color_in_db(i);


var G__10632 = seq__10599;
var G__10633 = chunk__10600;
var G__10634 = count__10601;
var G__10635 = (i__10602 + (1));
seq__10599 = G__10632;
chunk__10600 = G__10633;
count__10601 = G__10634;
i__10602 = G__10635;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10599);
if(temp__5753__auto__){
var seq__10599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10599__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10599__$1);
var G__10636 = cljs.core.chunk_rest(seq__10599__$1);
var G__10637 = c__4679__auto__;
var G__10638 = cljs.core.count(c__4679__auto__);
var G__10639 = (0);
seq__10599 = G__10636;
chunk__10600 = G__10637;
count__10601 = G__10638;
i__10602 = G__10639;
continue;
} else {
var i = cljs.core.first(seq__10599__$1);
app.colors.darken_color_in_db(i);


var G__10640 = cljs.core.next(seq__10599__$1);
var G__10641 = null;
var G__10642 = (0);
var G__10643 = (0);
seq__10599 = G__10640;
chunk__10600 = G__10641;
count__10601 = G__10642;
i__10602 = G__10643;
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
var seq__10603_10644 = cljs.core.seq(app.db.contrastcolors);
var chunk__10604_10645 = null;
var count__10605_10646 = (0);
var i__10606_10647 = (0);
while(true){
if((i__10606_10647 < count__10605_10646)){
var i_10648 = chunk__10604_10645.cljs$core$IIndexed$_nth$arity$2(null,i__10606_10647);
app.colors.lighten_color_in_db(i_10648);


var G__10649 = seq__10603_10644;
var G__10650 = chunk__10604_10645;
var G__10651 = count__10605_10646;
var G__10652 = (i__10606_10647 + (1));
seq__10603_10644 = G__10649;
chunk__10604_10645 = G__10650;
count__10605_10646 = G__10651;
i__10606_10647 = G__10652;
continue;
} else {
var temp__5753__auto___10653 = cljs.core.seq(seq__10603_10644);
if(temp__5753__auto___10653){
var seq__10603_10654__$1 = temp__5753__auto___10653;
if(cljs.core.chunked_seq_QMARK_(seq__10603_10654__$1)){
var c__4679__auto___10655 = cljs.core.chunk_first(seq__10603_10654__$1);
var G__10656 = cljs.core.chunk_rest(seq__10603_10654__$1);
var G__10657 = c__4679__auto___10655;
var G__10658 = cljs.core.count(c__4679__auto___10655);
var G__10659 = (0);
seq__10603_10644 = G__10656;
chunk__10604_10645 = G__10657;
count__10605_10646 = G__10658;
i__10606_10647 = G__10659;
continue;
} else {
var i_10660 = cljs.core.first(seq__10603_10654__$1);
app.colors.lighten_color_in_db(i_10660);


var G__10661 = cljs.core.next(seq__10603_10654__$1);
var G__10662 = null;
var G__10663 = (0);
var G__10664 = (0);
seq__10603_10644 = G__10661;
chunk__10604_10645 = G__10662;
count__10605_10646 = G__10663;
i__10606_10647 = G__10664;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__10607 = cljs.core.seq(app.db.contrastcolors);
var chunk__10608 = null;
var count__10609 = (0);
var i__10610 = (0);
while(true){
if((i__10610 < count__10609)){
var i = chunk__10608.cljs$core$IIndexed$_nth$arity$2(null,i__10610);
app.colors.lighten_color_in_db(i);


var G__10665 = seq__10607;
var G__10666 = chunk__10608;
var G__10667 = count__10609;
var G__10668 = (i__10610 + (1));
seq__10607 = G__10665;
chunk__10608 = G__10666;
count__10609 = G__10667;
i__10610 = G__10668;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10607);
if(temp__5753__auto__){
var seq__10607__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10607__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10607__$1);
var G__10669 = cljs.core.chunk_rest(seq__10607__$1);
var G__10670 = c__4679__auto__;
var G__10671 = cljs.core.count(c__4679__auto__);
var G__10672 = (0);
seq__10607 = G__10669;
chunk__10608 = G__10670;
count__10609 = G__10671;
i__10610 = G__10672;
continue;
} else {
var i = cljs.core.first(seq__10607__$1);
app.colors.lighten_color_in_db(i);


var G__10673 = cljs.core.next(seq__10607__$1);
var G__10674 = null;
var G__10675 = (0);
var G__10676 = (0);
seq__10607 = G__10673;
chunk__10608 = G__10674;
count__10609 = G__10675;
i__10610 = G__10676;
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
var distance = (function (){var G__10678 = ((360) / length);
return Math.floor(G__10678);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate((function (p1__10677_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__10677_SHARP_),(360));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10679_SHARP_){
return app.colors.rgbToHex(p1__10679_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10680_SHARP_){
return app.colors.clamped_rgb_vec(p1__10680_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10681_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__10681_SHARP_], null));
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
var seq__10682 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__10683 = null;
var count__10684 = (0);
var i__10685 = (0);
while(true){
if((i__10685 < count__10684)){
var vec__10692 = chunk__10683.cljs$core$IIndexed$_nth$arity$2(null,i__10685);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__10698 = seq__10682;
var G__10699 = chunk__10683;
var G__10700 = count__10684;
var G__10701 = (i__10685 + (1));
seq__10682 = G__10698;
chunk__10683 = G__10699;
count__10684 = G__10700;
i__10685 = G__10701;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10682);
if(temp__5753__auto__){
var seq__10682__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10682__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__10682__$1);
var G__10702 = cljs.core.chunk_rest(seq__10682__$1);
var G__10703 = c__4679__auto__;
var G__10704 = cljs.core.count(c__4679__auto__);
var G__10705 = (0);
seq__10682 = G__10702;
chunk__10683 = G__10703;
count__10684 = G__10704;
i__10685 = G__10705;
continue;
} else {
var vec__10695 = cljs.core.first(seq__10682__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10695,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10695,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__10706 = cljs.core.next(seq__10682__$1);
var G__10707 = null;
var G__10708 = (0);
var G__10709 = (0);
seq__10682 = G__10706;
chunk__10683 = G__10707;
count__10684 = G__10708;
i__10685 = G__10709;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.12),cljs.core.cst$kw$fg6,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$year,app.colors.current_year()], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$hasdarkbg,dbg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$fg6,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$year,app.colors.current_year()], 0));
}
});
