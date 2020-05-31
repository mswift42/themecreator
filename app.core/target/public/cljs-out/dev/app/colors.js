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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13507_SHARP_){
return (p1__13507_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__13508_SHARP_){
return (((p1__13508_SHARP_ < (0))) || ((p1__13508_SHARP_ > (255))));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13509_SHARP_){
return app.colors.clamp(p1__13509_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__13510 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__13515 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13513_SHARP_){
return (p1__13513_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13514_SHARP_){
if((p1__13514_SHARP_ > 0.04045)){
return Math.pow(((p1__13514_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__13514_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__13519 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13518_SHARP_){
if((p1__13518_SHARP_ > 0.008856)){
return Math.pow(p1__13518_SHARP_,((1) / (3)));
} else {
return ((p1__13518_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519,(2),null);
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
var vec__13522 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13522,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13522,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13522,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__13525 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__13528 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13528,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13528,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13528,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13528,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__13528,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__13534 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13531_SHARP_){
return (p1__13531_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13534,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13534,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13534,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13534,x,y,z,r,g,b,rgb){
return (function (p1__13532_SHARP_){
return Math.round((p1__13532_SHARP_ * (255)));
});})(vec__13534,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13534,x,y,z,r,g,b,rgb){
return (function (p1__13533_SHARP_){
if((p1__13533_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__13533_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__13533_SHARP_ * 12.92);
}
});})(vec__13534,x,y,z,r,g,b,rgb))
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
var G__13538 = arguments.length;
switch (G__13538) {
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
var G__13539 = (function (){var G__13540 = goog.color.hexToRgb(colorstring);
var G__13541 = factor;
return goog.color.darken(G__13540,G__13541);
})();
return goog.color.rgbArrayToHex(G__13539);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__13544 = arguments.length;
switch (G__13544) {
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
var G__13545 = (function (){var G__13546 = goog.color.hexToRgb(colorstring);
var G__13547 = factor;
return goog.color.lighten(G__13546,G__13547);
})();
return goog.color.rgbArrayToHex(G__13545);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__13549 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13549,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13549,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13549,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__13552 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__13552) : color.call(null,G__13552));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__13553 = cljs.core.deref(app.db.app_db);
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__13553) : color.call(null,G__13553));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref(app.db.adjustbg))){
var seq__13554_13570 = cljs.core.seq(app.db.contrastcolors);
var chunk__13555_13571 = null;
var count__13556_13572 = (0);
var i__13557_13573 = (0);
while(true){
if((i__13557_13573 < count__13556_13572)){
var i_13574 = chunk__13555_13571.cljs$core$IIndexed$_nth$arity$2(null,i__13557_13573);
app.colors.lighten_color_in_db(i_13574);


var G__13575 = seq__13554_13570;
var G__13576 = chunk__13555_13571;
var G__13577 = count__13556_13572;
var G__13578 = (i__13557_13573 + (1));
seq__13554_13570 = G__13575;
chunk__13555_13571 = G__13576;
count__13556_13572 = G__13577;
i__13557_13573 = G__13578;
continue;
} else {
var temp__5735__auto___13579 = cljs.core.seq(seq__13554_13570);
if(temp__5735__auto___13579){
var seq__13554_13580__$1 = temp__5735__auto___13579;
if(cljs.core.chunked_seq_QMARK_(seq__13554_13580__$1)){
var c__4550__auto___13581 = cljs.core.chunk_first(seq__13554_13580__$1);
var G__13582 = cljs.core.chunk_rest(seq__13554_13580__$1);
var G__13583 = c__4550__auto___13581;
var G__13584 = cljs.core.count(c__4550__auto___13581);
var G__13585 = (0);
seq__13554_13570 = G__13582;
chunk__13555_13571 = G__13583;
count__13556_13572 = G__13584;
i__13557_13573 = G__13585;
continue;
} else {
var i_13586 = cljs.core.first(seq__13554_13580__$1);
app.colors.lighten_color_in_db(i_13586);


var G__13587 = cljs.core.next(seq__13554_13580__$1);
var G__13588 = null;
var G__13589 = (0);
var G__13590 = (0);
seq__13554_13570 = G__13587;
chunk__13555_13571 = G__13588;
count__13556_13572 = G__13589;
i__13557_13573 = G__13590;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__13558 = cljs.core.seq(app.db.contrastcolors);
var chunk__13559 = null;
var count__13560 = (0);
var i__13561 = (0);
while(true){
if((i__13561 < count__13560)){
var i = chunk__13559.cljs$core$IIndexed$_nth$arity$2(null,i__13561);
app.colors.lighten_color_in_db(i);


var G__13591 = seq__13558;
var G__13592 = chunk__13559;
var G__13593 = count__13560;
var G__13594 = (i__13561 + (1));
seq__13558 = G__13591;
chunk__13559 = G__13592;
count__13560 = G__13593;
i__13561 = G__13594;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13558);
if(temp__5735__auto__){
var seq__13558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13558__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13558__$1);
var G__13595 = cljs.core.chunk_rest(seq__13558__$1);
var G__13596 = c__4550__auto__;
var G__13597 = cljs.core.count(c__4550__auto__);
var G__13598 = (0);
seq__13558 = G__13595;
chunk__13559 = G__13596;
count__13560 = G__13597;
i__13561 = G__13598;
continue;
} else {
var i = cljs.core.first(seq__13558__$1);
app.colors.lighten_color_in_db(i);


var G__13599 = cljs.core.next(seq__13558__$1);
var G__13600 = null;
var G__13601 = (0);
var G__13602 = (0);
seq__13558 = G__13599;
chunk__13559 = G__13600;
count__13560 = G__13601;
i__13561 = G__13602;
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
var seq__13562_13603 = cljs.core.seq(app.db.contrastcolors);
var chunk__13563_13604 = null;
var count__13564_13605 = (0);
var i__13565_13606 = (0);
while(true){
if((i__13565_13606 < count__13564_13605)){
var i_13607 = chunk__13563_13604.cljs$core$IIndexed$_nth$arity$2(null,i__13565_13606);
app.colors.darken_color_in_db(i_13607);


var G__13608 = seq__13562_13603;
var G__13609 = chunk__13563_13604;
var G__13610 = count__13564_13605;
var G__13611 = (i__13565_13606 + (1));
seq__13562_13603 = G__13608;
chunk__13563_13604 = G__13609;
count__13564_13605 = G__13610;
i__13565_13606 = G__13611;
continue;
} else {
var temp__5735__auto___13612 = cljs.core.seq(seq__13562_13603);
if(temp__5735__auto___13612){
var seq__13562_13613__$1 = temp__5735__auto___13612;
if(cljs.core.chunked_seq_QMARK_(seq__13562_13613__$1)){
var c__4550__auto___13614 = cljs.core.chunk_first(seq__13562_13613__$1);
var G__13615 = cljs.core.chunk_rest(seq__13562_13613__$1);
var G__13616 = c__4550__auto___13614;
var G__13617 = cljs.core.count(c__4550__auto___13614);
var G__13618 = (0);
seq__13562_13603 = G__13615;
chunk__13563_13604 = G__13616;
count__13564_13605 = G__13617;
i__13565_13606 = G__13618;
continue;
} else {
var i_13619 = cljs.core.first(seq__13562_13613__$1);
app.colors.darken_color_in_db(i_13619);


var G__13620 = cljs.core.next(seq__13562_13613__$1);
var G__13621 = null;
var G__13622 = (0);
var G__13623 = (0);
seq__13562_13603 = G__13620;
chunk__13563_13604 = G__13621;
count__13564_13605 = G__13622;
i__13565_13606 = G__13623;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__13566 = cljs.core.seq(app.db.contrastcolors);
var chunk__13567 = null;
var count__13568 = (0);
var i__13569 = (0);
while(true){
if((i__13569 < count__13568)){
var i = chunk__13567.cljs$core$IIndexed$_nth$arity$2(null,i__13569);
app.colors.darken_color_in_db(i);


var G__13624 = seq__13566;
var G__13625 = chunk__13567;
var G__13626 = count__13568;
var G__13627 = (i__13569 + (1));
seq__13566 = G__13624;
chunk__13567 = G__13625;
count__13568 = G__13626;
i__13569 = G__13627;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13566);
if(temp__5735__auto__){
var seq__13566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13566__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13566__$1);
var G__13628 = cljs.core.chunk_rest(seq__13566__$1);
var G__13629 = c__4550__auto__;
var G__13630 = cljs.core.count(c__4550__auto__);
var G__13631 = (0);
seq__13566 = G__13628;
chunk__13567 = G__13629;
count__13568 = G__13630;
i__13569 = G__13631;
continue;
} else {
var i = cljs.core.first(seq__13566__$1);
app.colors.darken_color_in_db(i);


var G__13632 = cljs.core.next(seq__13566__$1);
var G__13633 = null;
var G__13634 = (0);
var G__13635 = (0);
seq__13566 = G__13632;
chunk__13567 = G__13633;
count__13568 = G__13634;
i__13569 = G__13635;
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
var seq__13636_13652 = cljs.core.seq(app.db.contrastcolors);
var chunk__13637_13653 = null;
var count__13638_13654 = (0);
var i__13639_13655 = (0);
while(true){
if((i__13639_13655 < count__13638_13654)){
var i_13656 = chunk__13637_13653.cljs$core$IIndexed$_nth$arity$2(null,i__13639_13655);
app.colors.darken_color_in_db(i_13656);


var G__13657 = seq__13636_13652;
var G__13658 = chunk__13637_13653;
var G__13659 = count__13638_13654;
var G__13660 = (i__13639_13655 + (1));
seq__13636_13652 = G__13657;
chunk__13637_13653 = G__13658;
count__13638_13654 = G__13659;
i__13639_13655 = G__13660;
continue;
} else {
var temp__5735__auto___13661 = cljs.core.seq(seq__13636_13652);
if(temp__5735__auto___13661){
var seq__13636_13662__$1 = temp__5735__auto___13661;
if(cljs.core.chunked_seq_QMARK_(seq__13636_13662__$1)){
var c__4550__auto___13663 = cljs.core.chunk_first(seq__13636_13662__$1);
var G__13664 = cljs.core.chunk_rest(seq__13636_13662__$1);
var G__13665 = c__4550__auto___13663;
var G__13666 = cljs.core.count(c__4550__auto___13663);
var G__13667 = (0);
seq__13636_13652 = G__13664;
chunk__13637_13653 = G__13665;
count__13638_13654 = G__13666;
i__13639_13655 = G__13667;
continue;
} else {
var i_13668 = cljs.core.first(seq__13636_13662__$1);
app.colors.darken_color_in_db(i_13668);


var G__13669 = cljs.core.next(seq__13636_13662__$1);
var G__13670 = null;
var G__13671 = (0);
var G__13672 = (0);
seq__13636_13652 = G__13669;
chunk__13637_13653 = G__13670;
count__13638_13654 = G__13671;
i__13639_13655 = G__13672;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__13640 = cljs.core.seq(app.db.contrastcolors);
var chunk__13641 = null;
var count__13642 = (0);
var i__13643 = (0);
while(true){
if((i__13643 < count__13642)){
var i = chunk__13641.cljs$core$IIndexed$_nth$arity$2(null,i__13643);
app.colors.darken_color_in_db(i);


var G__13673 = seq__13640;
var G__13674 = chunk__13641;
var G__13675 = count__13642;
var G__13676 = (i__13643 + (1));
seq__13640 = G__13673;
chunk__13641 = G__13674;
count__13642 = G__13675;
i__13643 = G__13676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13640);
if(temp__5735__auto__){
var seq__13640__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13640__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13640__$1);
var G__13677 = cljs.core.chunk_rest(seq__13640__$1);
var G__13678 = c__4550__auto__;
var G__13679 = cljs.core.count(c__4550__auto__);
var G__13680 = (0);
seq__13640 = G__13677;
chunk__13641 = G__13678;
count__13642 = G__13679;
i__13643 = G__13680;
continue;
} else {
var i = cljs.core.first(seq__13640__$1);
app.colors.darken_color_in_db(i);


var G__13681 = cljs.core.next(seq__13640__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__13640 = G__13681;
chunk__13641 = G__13682;
count__13642 = G__13683;
i__13643 = G__13684;
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
var seq__13644_13685 = cljs.core.seq(app.db.contrastcolors);
var chunk__13645_13686 = null;
var count__13646_13687 = (0);
var i__13647_13688 = (0);
while(true){
if((i__13647_13688 < count__13646_13687)){
var i_13689 = chunk__13645_13686.cljs$core$IIndexed$_nth$arity$2(null,i__13647_13688);
app.colors.lighten_color_in_db(i_13689);


var G__13690 = seq__13644_13685;
var G__13691 = chunk__13645_13686;
var G__13692 = count__13646_13687;
var G__13693 = (i__13647_13688 + (1));
seq__13644_13685 = G__13690;
chunk__13645_13686 = G__13691;
count__13646_13687 = G__13692;
i__13647_13688 = G__13693;
continue;
} else {
var temp__5735__auto___13694 = cljs.core.seq(seq__13644_13685);
if(temp__5735__auto___13694){
var seq__13644_13695__$1 = temp__5735__auto___13694;
if(cljs.core.chunked_seq_QMARK_(seq__13644_13695__$1)){
var c__4550__auto___13696 = cljs.core.chunk_first(seq__13644_13695__$1);
var G__13697 = cljs.core.chunk_rest(seq__13644_13695__$1);
var G__13698 = c__4550__auto___13696;
var G__13699 = cljs.core.count(c__4550__auto___13696);
var G__13700 = (0);
seq__13644_13685 = G__13697;
chunk__13645_13686 = G__13698;
count__13646_13687 = G__13699;
i__13647_13688 = G__13700;
continue;
} else {
var i_13701 = cljs.core.first(seq__13644_13695__$1);
app.colors.lighten_color_in_db(i_13701);


var G__13702 = cljs.core.next(seq__13644_13695__$1);
var G__13703 = null;
var G__13704 = (0);
var G__13705 = (0);
seq__13644_13685 = G__13702;
chunk__13645_13686 = G__13703;
count__13646_13687 = G__13704;
i__13647_13688 = G__13705;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__13648 = cljs.core.seq(app.db.contrastcolors);
var chunk__13649 = null;
var count__13650 = (0);
var i__13651 = (0);
while(true){
if((i__13651 < count__13650)){
var i = chunk__13649.cljs$core$IIndexed$_nth$arity$2(null,i__13651);
app.colors.lighten_color_in_db(i);


var G__13706 = seq__13648;
var G__13707 = chunk__13649;
var G__13708 = count__13650;
var G__13709 = (i__13651 + (1));
seq__13648 = G__13706;
chunk__13649 = G__13707;
count__13650 = G__13708;
i__13651 = G__13709;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13648);
if(temp__5735__auto__){
var seq__13648__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13648__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13648__$1);
var G__13710 = cljs.core.chunk_rest(seq__13648__$1);
var G__13711 = c__4550__auto__;
var G__13712 = cljs.core.count(c__4550__auto__);
var G__13713 = (0);
seq__13648 = G__13710;
chunk__13649 = G__13711;
count__13650 = G__13712;
i__13651 = G__13713;
continue;
} else {
var i = cljs.core.first(seq__13648__$1);
app.colors.lighten_color_in_db(i);


var G__13714 = cljs.core.next(seq__13648__$1);
var G__13715 = null;
var G__13716 = (0);
var G__13717 = (0);
seq__13648 = G__13714;
chunk__13649 = G__13715;
count__13650 = G__13716;
i__13651 = G__13717;
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
var distance = (function (){var G__13719 = ((360) / length);
return Math.floor(G__13719);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__13718_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__13718_SHARP_),(360));
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
return (function (p1__13720_SHARP_){
return app.colors.rgbToHex(p1__13720_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__13721_SHARP_){
return app.colors.clamped_rgb_vec(p1__13721_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__13722_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__13722_SHARP_], null));
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
var seq__13723 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__13724 = null;
var count__13725 = (0);
var i__13726 = (0);
while(true){
if((i__13726 < count__13725)){
var vec__13733 = chunk__13724.cljs$core$IIndexed$_nth$arity$2(null,i__13726);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__13739 = seq__13723;
var G__13740 = chunk__13724;
var G__13741 = count__13725;
var G__13742 = (i__13726 + (1));
seq__13723 = G__13739;
chunk__13724 = G__13740;
count__13725 = G__13741;
i__13726 = G__13742;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13723);
if(temp__5735__auto__){
var seq__13723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13723__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13723__$1);
var G__13743 = cljs.core.chunk_rest(seq__13723__$1);
var G__13744 = c__4550__auto__;
var G__13745 = cljs.core.count(c__4550__auto__);
var G__13746 = (0);
seq__13723 = G__13743;
chunk__13724 = G__13744;
count__13725 = G__13745;
i__13726 = G__13746;
continue;
} else {
var vec__13736 = cljs.core.first(seq__13723__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13736,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13736,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__13747 = cljs.core.next(seq__13723__$1);
var G__13748 = null;
var G__13749 = (0);
var G__13750 = (0);
seq__13723 = G__13747;
chunk__13724 = G__13748;
count__13725 = G__13749;
i__13726 = G__13750;
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
