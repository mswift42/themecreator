// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11085_SHARP_){
return (p1__11085_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11086_SHARP_){
return ((p1__11086_SHARP_ < (0))) || ((p1__11086_SHARP_ > (255)));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__5290__auto__ = (function (){var x__5297__auto__ = val;
var y__5298__auto__ = (255);
return ((x__5297__auto__ < y__5298__auto__) ? x__5297__auto__ : y__5298__auto__);
})();
var y__5291__auto__ = (0);
return ((x__5290__auto__ > y__5291__auto__) ? x__5290__auto__ : y__5291__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11087_SHARP_){
return app.colors.clamp(p1__11087_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11089 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11089,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11089,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11089,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11095 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11090_SHARP_){
return (p1__11090_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11091_SHARP_){
if((p1__11091_SHARP_ > 0.04045)){
var G__11096 = ((p1__11091_SHARP_ + 0.055) / 1.055);
var G__11097 = 2.4;
return Math.pow(G__11096,G__11097);
} else {
return (p1__11091_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11102 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11098_SHARP_){
if((p1__11098_SHARP_ > 0.008856)){
var G__11103 = p1__11098_SHARP_;
var G__11104 = ((1) / (3));
return Math.pow(G__11103,G__11104);
} else {
return ((p1__11098_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(2),null);
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
var vec__11107 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11108 = ((a * a) + (b * b));
return Math.sqrt(G__11108);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11110 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11112 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11112,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11112,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11120 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11113_SHARP_){
return (p1__11113_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11120,x,y,z,r,g,b,rgb){
return (function (p1__11114_SHARP_){
var G__11121 = (p1__11114_SHARP_ * (255));
return Math.round(G__11121);
});})(vec__11120,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11120,x,y,z,r,g,b,rgb){
return (function (p1__11115_SHARP_){
if((p1__11115_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11122 = p1__11115_SHARP_;
var G__11123 = ((1) / 2.4);
return Math.pow(G__11122,G__11123);
})()) - 0.055);
} else {
return (p1__11115_SHARP_ * 12.92);
}
});})(vec__11120,x,y,z,r,g,b,rgb))
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
var args11124 = [];
var len__6017__auto___11132 = arguments.length;
var i__6018__auto___11133 = (0);
while(true){
if((i__6018__auto___11133 < len__6017__auto___11132)){
args11124.push((arguments[i__6018__auto___11133]));

var G__11134 = (i__6018__auto___11133 + (1));
i__6018__auto___11133 = G__11134;
continue;
} else {
}
break;
}

var G__11126 = args11124.length;
switch (G__11126) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11124.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11129 = (function (){var G__11130 = goog.color.hexToRgb(colorstring);
var G__11131 = factor;
return goog.color.darken(G__11130,G__11131);
})();
return goog.color.rgbArrayToHex(G__11129);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var args11136 = [];
var len__6017__auto___11144 = arguments.length;
var i__6018__auto___11145 = (0);
while(true){
if((i__6018__auto___11145 < len__6017__auto___11144)){
args11136.push((arguments[i__6018__auto___11145]));

var G__11146 = (i__6018__auto___11145 + (1));
i__6018__auto___11145 = G__11146;
continue;
} else {
}
break;
}

var G__11138 = args11136.length;
switch (G__11138) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11136.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11141 = (function (){var G__11142 = goog.color.hexToRgb(colorstring);
var G__11143 = factor;
return goog.color.lighten(G__11142,G__11143);
})();
return goog.color.rgbArrayToHex(G__11141);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11149 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11151 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11151) : color.call(null,G__11151));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11153 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11153) : color.call(null,G__11153));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11170_11186 = cljs.core.seq(app.db.contrastcolors);
var chunk__11171_11187 = null;
var count__11172_11188 = (0);
var i__11173_11189 = (0);
while(true){
if((i__11173_11189 < count__11172_11188)){
var i_11190 = chunk__11171_11187.cljs$core$IIndexed$_nth$arity$2(null,i__11173_11189);
app.colors.lighten_color_in_db(i_11190);

var G__11191 = seq__11170_11186;
var G__11192 = chunk__11171_11187;
var G__11193 = count__11172_11188;
var G__11194 = (i__11173_11189 + (1));
seq__11170_11186 = G__11191;
chunk__11171_11187 = G__11192;
count__11172_11188 = G__11193;
i__11173_11189 = G__11194;
continue;
} else {
var temp__4425__auto___11195 = cljs.core.seq(seq__11170_11186);
if(temp__4425__auto___11195){
var seq__11170_11196__$1 = temp__4425__auto___11195;
if(cljs.core.chunked_seq_QMARK_(seq__11170_11196__$1)){
var c__5762__auto___11197 = cljs.core.chunk_first(seq__11170_11196__$1);
var G__11198 = cljs.core.chunk_rest(seq__11170_11196__$1);
var G__11199 = c__5762__auto___11197;
var G__11200 = cljs.core.count(c__5762__auto___11197);
var G__11201 = (0);
seq__11170_11186 = G__11198;
chunk__11171_11187 = G__11199;
count__11172_11188 = G__11200;
i__11173_11189 = G__11201;
continue;
} else {
var i_11202 = cljs.core.first(seq__11170_11196__$1);
app.colors.lighten_color_in_db(i_11202);

var G__11203 = cljs.core.next(seq__11170_11196__$1);
var G__11204 = null;
var G__11205 = (0);
var G__11206 = (0);
seq__11170_11186 = G__11203;
chunk__11171_11187 = G__11204;
count__11172_11188 = G__11205;
i__11173_11189 = G__11206;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11174 = cljs.core.seq(app.db.contrastcolors);
var chunk__11175 = null;
var count__11176 = (0);
var i__11177 = (0);
while(true){
if((i__11177 < count__11176)){
var i = chunk__11175.cljs$core$IIndexed$_nth$arity$2(null,i__11177);
app.colors.lighten_color_in_db(i);

var G__11207 = seq__11174;
var G__11208 = chunk__11175;
var G__11209 = count__11176;
var G__11210 = (i__11177 + (1));
seq__11174 = G__11207;
chunk__11175 = G__11208;
count__11176 = G__11209;
i__11177 = G__11210;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11174);
if(temp__4425__auto__){
var seq__11174__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11174__$1)){
var c__5762__auto__ = cljs.core.chunk_first(seq__11174__$1);
var G__11211 = cljs.core.chunk_rest(seq__11174__$1);
var G__11212 = c__5762__auto__;
var G__11213 = cljs.core.count(c__5762__auto__);
var G__11214 = (0);
seq__11174 = G__11211;
chunk__11175 = G__11212;
count__11176 = G__11213;
i__11177 = G__11214;
continue;
} else {
var i = cljs.core.first(seq__11174__$1);
app.colors.lighten_color_in_db(i);

var G__11215 = cljs.core.next(seq__11174__$1);
var G__11216 = null;
var G__11217 = (0);
var G__11218 = (0);
seq__11174 = G__11215;
chunk__11175 = G__11216;
count__11176 = G__11217;
i__11177 = G__11218;
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
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11178_11219 = cljs.core.seq(app.db.contrastcolors);
var chunk__11179_11220 = null;
var count__11180_11221 = (0);
var i__11181_11222 = (0);
while(true){
if((i__11181_11222 < count__11180_11221)){
var i_11223 = chunk__11179_11220.cljs$core$IIndexed$_nth$arity$2(null,i__11181_11222);
app.colors.darken_color_in_db(i_11223);

var G__11224 = seq__11178_11219;
var G__11225 = chunk__11179_11220;
var G__11226 = count__11180_11221;
var G__11227 = (i__11181_11222 + (1));
seq__11178_11219 = G__11224;
chunk__11179_11220 = G__11225;
count__11180_11221 = G__11226;
i__11181_11222 = G__11227;
continue;
} else {
var temp__4425__auto___11228 = cljs.core.seq(seq__11178_11219);
if(temp__4425__auto___11228){
var seq__11178_11229__$1 = temp__4425__auto___11228;
if(cljs.core.chunked_seq_QMARK_(seq__11178_11229__$1)){
var c__5762__auto___11230 = cljs.core.chunk_first(seq__11178_11229__$1);
var G__11231 = cljs.core.chunk_rest(seq__11178_11229__$1);
var G__11232 = c__5762__auto___11230;
var G__11233 = cljs.core.count(c__5762__auto___11230);
var G__11234 = (0);
seq__11178_11219 = G__11231;
chunk__11179_11220 = G__11232;
count__11180_11221 = G__11233;
i__11181_11222 = G__11234;
continue;
} else {
var i_11235 = cljs.core.first(seq__11178_11229__$1);
app.colors.darken_color_in_db(i_11235);

var G__11236 = cljs.core.next(seq__11178_11229__$1);
var G__11237 = null;
var G__11238 = (0);
var G__11239 = (0);
seq__11178_11219 = G__11236;
chunk__11179_11220 = G__11237;
count__11180_11221 = G__11238;
i__11181_11222 = G__11239;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11182 = cljs.core.seq(app.db.contrastcolors);
var chunk__11183 = null;
var count__11184 = (0);
var i__11185 = (0);
while(true){
if((i__11185 < count__11184)){
var i = chunk__11183.cljs$core$IIndexed$_nth$arity$2(null,i__11185);
app.colors.darken_color_in_db(i);

var G__11240 = seq__11182;
var G__11241 = chunk__11183;
var G__11242 = count__11184;
var G__11243 = (i__11185 + (1));
seq__11182 = G__11240;
chunk__11183 = G__11241;
count__11184 = G__11242;
i__11185 = G__11243;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11182);
if(temp__4425__auto__){
var seq__11182__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11182__$1)){
var c__5762__auto__ = cljs.core.chunk_first(seq__11182__$1);
var G__11244 = cljs.core.chunk_rest(seq__11182__$1);
var G__11245 = c__5762__auto__;
var G__11246 = cljs.core.count(c__5762__auto__);
var G__11247 = (0);
seq__11182 = G__11244;
chunk__11183 = G__11245;
count__11184 = G__11246;
i__11185 = G__11247;
continue;
} else {
var i = cljs.core.first(seq__11182__$1);
app.colors.darken_color_in_db(i);

var G__11248 = cljs.core.next(seq__11182__$1);
var G__11249 = null;
var G__11250 = (0);
var G__11251 = (0);
seq__11182 = G__11248;
chunk__11183 = G__11249;
count__11184 = G__11250;
i__11185 = G__11251;
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
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11268_11284 = cljs.core.seq(app.db.contrastcolors);
var chunk__11269_11285 = null;
var count__11270_11286 = (0);
var i__11271_11287 = (0);
while(true){
if((i__11271_11287 < count__11270_11286)){
var i_11288 = chunk__11269_11285.cljs$core$IIndexed$_nth$arity$2(null,i__11271_11287);
app.colors.darken_color_in_db(i_11288);

var G__11289 = seq__11268_11284;
var G__11290 = chunk__11269_11285;
var G__11291 = count__11270_11286;
var G__11292 = (i__11271_11287 + (1));
seq__11268_11284 = G__11289;
chunk__11269_11285 = G__11290;
count__11270_11286 = G__11291;
i__11271_11287 = G__11292;
continue;
} else {
var temp__4425__auto___11293 = cljs.core.seq(seq__11268_11284);
if(temp__4425__auto___11293){
var seq__11268_11294__$1 = temp__4425__auto___11293;
if(cljs.core.chunked_seq_QMARK_(seq__11268_11294__$1)){
var c__5762__auto___11295 = cljs.core.chunk_first(seq__11268_11294__$1);
var G__11296 = cljs.core.chunk_rest(seq__11268_11294__$1);
var G__11297 = c__5762__auto___11295;
var G__11298 = cljs.core.count(c__5762__auto___11295);
var G__11299 = (0);
seq__11268_11284 = G__11296;
chunk__11269_11285 = G__11297;
count__11270_11286 = G__11298;
i__11271_11287 = G__11299;
continue;
} else {
var i_11300 = cljs.core.first(seq__11268_11294__$1);
app.colors.darken_color_in_db(i_11300);

var G__11301 = cljs.core.next(seq__11268_11294__$1);
var G__11302 = null;
var G__11303 = (0);
var G__11304 = (0);
seq__11268_11284 = G__11301;
chunk__11269_11285 = G__11302;
count__11270_11286 = G__11303;
i__11271_11287 = G__11304;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11272 = cljs.core.seq(app.db.contrastcolors);
var chunk__11273 = null;
var count__11274 = (0);
var i__11275 = (0);
while(true){
if((i__11275 < count__11274)){
var i = chunk__11273.cljs$core$IIndexed$_nth$arity$2(null,i__11275);
app.colors.darken_color_in_db(i);

var G__11305 = seq__11272;
var G__11306 = chunk__11273;
var G__11307 = count__11274;
var G__11308 = (i__11275 + (1));
seq__11272 = G__11305;
chunk__11273 = G__11306;
count__11274 = G__11307;
i__11275 = G__11308;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11272);
if(temp__4425__auto__){
var seq__11272__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11272__$1)){
var c__5762__auto__ = cljs.core.chunk_first(seq__11272__$1);
var G__11309 = cljs.core.chunk_rest(seq__11272__$1);
var G__11310 = c__5762__auto__;
var G__11311 = cljs.core.count(c__5762__auto__);
var G__11312 = (0);
seq__11272 = G__11309;
chunk__11273 = G__11310;
count__11274 = G__11311;
i__11275 = G__11312;
continue;
} else {
var i = cljs.core.first(seq__11272__$1);
app.colors.darken_color_in_db(i);

var G__11313 = cljs.core.next(seq__11272__$1);
var G__11314 = null;
var G__11315 = (0);
var G__11316 = (0);
seq__11272 = G__11313;
chunk__11273 = G__11314;
count__11274 = G__11315;
i__11275 = G__11316;
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
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11276_11317 = cljs.core.seq(app.db.contrastcolors);
var chunk__11277_11318 = null;
var count__11278_11319 = (0);
var i__11279_11320 = (0);
while(true){
if((i__11279_11320 < count__11278_11319)){
var i_11321 = chunk__11277_11318.cljs$core$IIndexed$_nth$arity$2(null,i__11279_11320);
app.colors.lighten_color_in_db(i_11321);

var G__11322 = seq__11276_11317;
var G__11323 = chunk__11277_11318;
var G__11324 = count__11278_11319;
var G__11325 = (i__11279_11320 + (1));
seq__11276_11317 = G__11322;
chunk__11277_11318 = G__11323;
count__11278_11319 = G__11324;
i__11279_11320 = G__11325;
continue;
} else {
var temp__4425__auto___11326 = cljs.core.seq(seq__11276_11317);
if(temp__4425__auto___11326){
var seq__11276_11327__$1 = temp__4425__auto___11326;
if(cljs.core.chunked_seq_QMARK_(seq__11276_11327__$1)){
var c__5762__auto___11328 = cljs.core.chunk_first(seq__11276_11327__$1);
var G__11329 = cljs.core.chunk_rest(seq__11276_11327__$1);
var G__11330 = c__5762__auto___11328;
var G__11331 = cljs.core.count(c__5762__auto___11328);
var G__11332 = (0);
seq__11276_11317 = G__11329;
chunk__11277_11318 = G__11330;
count__11278_11319 = G__11331;
i__11279_11320 = G__11332;
continue;
} else {
var i_11333 = cljs.core.first(seq__11276_11327__$1);
app.colors.lighten_color_in_db(i_11333);

var G__11334 = cljs.core.next(seq__11276_11327__$1);
var G__11335 = null;
var G__11336 = (0);
var G__11337 = (0);
seq__11276_11317 = G__11334;
chunk__11277_11318 = G__11335;
count__11278_11319 = G__11336;
i__11279_11320 = G__11337;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11280 = cljs.core.seq(app.db.contrastcolors);
var chunk__11281 = null;
var count__11282 = (0);
var i__11283 = (0);
while(true){
if((i__11283 < count__11282)){
var i = chunk__11281.cljs$core$IIndexed$_nth$arity$2(null,i__11283);
app.colors.lighten_color_in_db(i);

var G__11338 = seq__11280;
var G__11339 = chunk__11281;
var G__11340 = count__11282;
var G__11341 = (i__11283 + (1));
seq__11280 = G__11338;
chunk__11281 = G__11339;
count__11282 = G__11340;
i__11283 = G__11341;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11280);
if(temp__4425__auto__){
var seq__11280__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11280__$1)){
var c__5762__auto__ = cljs.core.chunk_first(seq__11280__$1);
var G__11342 = cljs.core.chunk_rest(seq__11280__$1);
var G__11343 = c__5762__auto__;
var G__11344 = cljs.core.count(c__5762__auto__);
var G__11345 = (0);
seq__11280 = G__11342;
chunk__11281 = G__11343;
count__11282 = G__11344;
i__11283 = G__11345;
continue;
} else {
var i = cljs.core.first(seq__11280__$1);
app.colors.lighten_color_in_db(i);

var G__11346 = cljs.core.next(seq__11280__$1);
var G__11347 = null;
var G__11348 = (0);
var G__11349 = (0);
seq__11280 = G__11346;
chunk__11281 = G__11347;
count__11282 = G__11348;
i__11283 = G__11349;
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
var distance = (function (){var G__11352 = ((360) / length);
return Math.floor(G__11352);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11350_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__11350_SHARP_),(360));
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
return (function (p1__11353_SHARP_){
return app.colors.rgbToHex(p1__11353_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11354_SHARP_){
return app.colors.clamped_rgb_vec(p1__11354_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11355_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11355_SHARP_], null));
});})(hr))
,hr)));
});
/**
 * soft-palette returns a vector of 7 random soft colors.
 */
app.colors.soft_palette = (function app$colors$soft_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
return app.colors.color_list(57.292,25.738);
} else {
return app.colors.color_list(44.921,25.738);
}
});
/**
 * warm-palette returns a vector of 7 random warm colors.
 */
app.colors.warm_palette = (function app$colors$warm_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
return app.colors.color_list(60.39,33.84);
} else {
return app.colors.color_list(18.358,33.84);
}
});
/**
 * pop-palette returns a vector of 7 random 'pop' colors.
 */
app.colors.pop_palette = (function app$colors$pop_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
return app.colors.color_list(77.02,58.1);
} else {
return app.colors.color_list(30.12,58.1);
}
});
/**
 * muted-palette returns a vector of 7 random muted colors.
 */
app.colors.muted_palette = (function app$colors$muted_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
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
var seq__11362 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11363 = null;
var count__11364 = (0);
var i__11365 = (0);
while(true){
if((i__11365 < count__11364)){
var vec__11366 = chunk__11363.cljs$core$IIndexed$_nth$arity$2(null,i__11365);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11368 = seq__11362;
var G__11369 = chunk__11363;
var G__11370 = count__11364;
var G__11371 = (i__11365 + (1));
seq__11362 = G__11368;
chunk__11363 = G__11369;
count__11364 = G__11370;
i__11365 = G__11371;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11362);
if(temp__4425__auto__){
var seq__11362__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11362__$1)){
var c__5762__auto__ = cljs.core.chunk_first(seq__11362__$1);
var G__11372 = cljs.core.chunk_rest(seq__11362__$1);
var G__11373 = c__5762__auto__;
var G__11374 = cljs.core.count(c__5762__auto__);
var G__11375 = (0);
seq__11362 = G__11372;
chunk__11363 = G__11373;
count__11364 = G__11374;
i__11365 = G__11375;
continue;
} else {
var vec__11367 = cljs.core.first(seq__11362__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11376 = cljs.core.next(seq__11362__$1);
var G__11377 = null;
var G__11378 = (0);
var G__11379 = (0);
seq__11362 = G__11376;
chunk__11363 = G__11377;
count__11364 = G__11378;
i__11365 = G__11379;
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
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.12),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$fg5,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
}
});
