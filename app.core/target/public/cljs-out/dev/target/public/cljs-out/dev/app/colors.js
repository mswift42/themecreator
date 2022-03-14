// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.call(null,(function (p1__15185_SHARP_){
return (p1__15185_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
/**
 * convert hex color in #rrggbb format to
 * format 0xbbggrr.
 */
app.colors.hexToBgrHex = (function app$colors$hexToBgrHex(hexcolor){
var vec__15186 = goog.color.hexToRgb(hexcolor);
var r = cljs.core.nth.call(null,vec__15186,(0),null);
var g = cljs.core.nth.call(null,vec__15186,(1),null);
var b = cljs.core.nth.call(null,vec__15186,(2),null);
var bgrhex = goog.color.rgbToHex(b,g,r);
return clojure.string.replace_first.call(null,["0x",bgrhex].join(''),"#","");
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_.call(null,(function (p1__15189_SHARP_){
return (((p1__15189_SHARP_ < (0))) || ((p1__15189_SHARP_ > (255))));
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
return cljs.core.mapv.call(null,(function (p1__15190_SHARP_){
return app.colors.clamp.call(null,p1__15190_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__15191 = rgbcolor;
var r = cljs.core.nth.call(null,vec__15191,(0),null);
var g = cljs.core.nth.call(null,vec__15191,(1),null);
var b = cljs.core.nth.call(null,vec__15191,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__15196 = cljs.core.mapv.call(null,(function (p1__15194_SHARP_){
return (p1__15194_SHARP_ * (100));
}),cljs.core.mapv.call(null,(function (p1__15195_SHARP_){
if((p1__15195_SHARP_ > 0.04045)){
return Math.pow(((p1__15195_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__15195_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.call(null,vec__15196,(0),null);
var g = cljs.core.nth.call(null,vec__15196,(1),null);
var b = cljs.core.nth.call(null,vec__15196,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__15200 = cljs.core.mapv.call(null,(function (p1__15199_SHARP_){
if((p1__15199_SHARP_ > 0.008856)){
return Math.pow(p1__15199_SHARP_,((1) / (3)));
} else {
return ((p1__15199_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.call(null,cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.call(null,vec__15200,(0),null);
var y = cljs.core.nth.call(null,vec__15200,(1),null);
var z = cljs.core.nth.call(null,vec__15200,(2),null);
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
var vec__15203 = labcolor;
var l = cljs.core.nth.call(null,vec__15203,(0),null);
var a = cljs.core.nth.call(null,vec__15203,(1),null);
var b = cljs.core.nth.call(null,vec__15203,(2),null);
var h = app.colors.radToDegrees.call(null,Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__15206 = lchcolor;
var l = cljs.core.nth.call(null,vec__15206,(0),null);
var c = cljs.core.nth.call(null,vec__15206,(1),null);
var h = cljs.core.nth.call(null,vec__15206,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__15209 = labcolor;
var l = cljs.core.nth.call(null,vec__15209,(0),null);
var a = cljs.core.nth.call(null,vec__15209,(1),null);
var b = cljs.core.nth.call(null,vec__15209,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.call(null,cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.call(null,(function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
}),xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__15215 = cljs.core.mapv.call(null,(function (p1__15212_SHARP_){
return (p1__15212_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.call(null,vec__15215,(0),null);
var y = cljs.core.nth.call(null,vec__15215,(1),null);
var z = cljs.core.nth.call(null,vec__15215,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.call(null,(function (p1__15213_SHARP_){
return Math.round((p1__15213_SHARP_ * (255)));
}),cljs.core.mapv.call(null,(function (p1__15214_SHARP_){
if((p1__15214_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__15214_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__15214_SHARP_ * 12.92);
}
}),rgb));
});
app.colors.hexToLch = (function app$colors$hexToLch(hexcolor){
return app.colors.labToLch.call(null,app.colors.xyzToLab.call(null,app.colors.rgbToXyz.call(null,app.colors.hexToRgb.call(null,hexcolor))));
});
app.colors.lchToRgb = (function app$colors$lchToRgb(lchcolor){
return app.colors.xyzToRgb.call(null,app.colors.labToXyz.call(null,app.colors.lchToLab.call(null,lchcolor)));
});
app.colors.lchToHex = (function app$colors$lchToHex(lchcolor){
return app.colors.rgbToHex.call(null,app.colors.xyzToRgb.call(null,app.colors.labToXyz.call(null,app.colors.lchToLab.call(null,lchcolor))));
});
/**
 * darken darkens a rgb color by a given factor.
 * if no factor is provided, the color will be darkened 
 * with the factor of 0.2.
 */
app.colors.darken = (function app$colors$darken(var_args){
var G__15219 = arguments.length;
switch (G__15219) {
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
return app.colors.darken.call(null,colorstring,0.2);
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
var G__15222 = arguments.length;
switch (G__15222) {
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
return app.colors.lighten.call(null,colorstring,0.2);
}));

(app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.lighten(goog.color.hexToRgb(colorstring),factor));
}));

(app.colors.lighten.cljs$lang$maxFixedArity = 2);

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__15224 = goog.color.hexToRgb(color);
var r = cljs.core.nth.call(null,vec__15224,(0),null);
var g = cljs.core.nth.call(null,vec__15224,(1),null);
var b = cljs.core.nth.call(null,vec__15224,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,color,app.colors.lighten.call(null,color.call(null,cljs.core.deref.call(null,app.db.app_db)),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,color,app.colors.darken.call(null,color.call(null,cljs.core.deref.call(null,app.db.app_db)),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__15227_15243 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15228_15244 = null;
var count__15229_15245 = (0);
var i__15230_15246 = (0);
while(true){
if((i__15230_15246 < count__15229_15245)){
var i_15247 = cljs.core._nth.call(null,chunk__15228_15244,i__15230_15246);
app.colors.lighten_color_in_db.call(null,i_15247);


var G__15248 = seq__15227_15243;
var G__15249 = chunk__15228_15244;
var G__15250 = count__15229_15245;
var G__15251 = (i__15230_15246 + (1));
seq__15227_15243 = G__15248;
chunk__15228_15244 = G__15249;
count__15229_15245 = G__15250;
i__15230_15246 = G__15251;
continue;
} else {
var temp__5753__auto___15252 = cljs.core.seq.call(null,seq__15227_15243);
if(temp__5753__auto___15252){
var seq__15227_15253__$1 = temp__5753__auto___15252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15227_15253__$1)){
var c__4679__auto___15254 = cljs.core.chunk_first.call(null,seq__15227_15253__$1);
var G__15255 = cljs.core.chunk_rest.call(null,seq__15227_15253__$1);
var G__15256 = c__4679__auto___15254;
var G__15257 = cljs.core.count.call(null,c__4679__auto___15254);
var G__15258 = (0);
seq__15227_15243 = G__15255;
chunk__15228_15244 = G__15256;
count__15229_15245 = G__15257;
i__15230_15246 = G__15258;
continue;
} else {
var i_15259 = cljs.core.first.call(null,seq__15227_15253__$1);
app.colors.lighten_color_in_db.call(null,i_15259);


var G__15260 = cljs.core.next.call(null,seq__15227_15253__$1);
var G__15261 = null;
var G__15262 = (0);
var G__15263 = (0);
seq__15227_15243 = G__15260;
chunk__15228_15244 = G__15261;
count__15229_15245 = G__15262;
i__15230_15246 = G__15263;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__15231 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15232 = null;
var count__15233 = (0);
var i__15234 = (0);
while(true){
if((i__15234 < count__15233)){
var i = cljs.core._nth.call(null,chunk__15232,i__15234);
app.colors.lighten_color_in_db.call(null,i);


var G__15264 = seq__15231;
var G__15265 = chunk__15232;
var G__15266 = count__15233;
var G__15267 = (i__15234 + (1));
seq__15231 = G__15264;
chunk__15232 = G__15265;
count__15233 = G__15266;
i__15234 = G__15267;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__15231);
if(temp__5753__auto__){
var seq__15231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15231__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15231__$1);
var G__15268 = cljs.core.chunk_rest.call(null,seq__15231__$1);
var G__15269 = c__4679__auto__;
var G__15270 = cljs.core.count.call(null,c__4679__auto__);
var G__15271 = (0);
seq__15231 = G__15268;
chunk__15232 = G__15269;
count__15233 = G__15270;
i__15234 = G__15271;
continue;
} else {
var i = cljs.core.first.call(null,seq__15231__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__15272 = cljs.core.next.call(null,seq__15231__$1);
var G__15273 = null;
var G__15274 = (0);
var G__15275 = (0);
seq__15231 = G__15272;
chunk__15232 = G__15273;
count__15233 = G__15274;
i__15234 = G__15275;
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
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__15235_15276 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15236_15277 = null;
var count__15237_15278 = (0);
var i__15238_15279 = (0);
while(true){
if((i__15238_15279 < count__15237_15278)){
var i_15280 = cljs.core._nth.call(null,chunk__15236_15277,i__15238_15279);
app.colors.darken_color_in_db.call(null,i_15280);


var G__15281 = seq__15235_15276;
var G__15282 = chunk__15236_15277;
var G__15283 = count__15237_15278;
var G__15284 = (i__15238_15279 + (1));
seq__15235_15276 = G__15281;
chunk__15236_15277 = G__15282;
count__15237_15278 = G__15283;
i__15238_15279 = G__15284;
continue;
} else {
var temp__5753__auto___15285 = cljs.core.seq.call(null,seq__15235_15276);
if(temp__5753__auto___15285){
var seq__15235_15286__$1 = temp__5753__auto___15285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15235_15286__$1)){
var c__4679__auto___15287 = cljs.core.chunk_first.call(null,seq__15235_15286__$1);
var G__15288 = cljs.core.chunk_rest.call(null,seq__15235_15286__$1);
var G__15289 = c__4679__auto___15287;
var G__15290 = cljs.core.count.call(null,c__4679__auto___15287);
var G__15291 = (0);
seq__15235_15276 = G__15288;
chunk__15236_15277 = G__15289;
count__15237_15278 = G__15290;
i__15238_15279 = G__15291;
continue;
} else {
var i_15292 = cljs.core.first.call(null,seq__15235_15286__$1);
app.colors.darken_color_in_db.call(null,i_15292);


var G__15293 = cljs.core.next.call(null,seq__15235_15286__$1);
var G__15294 = null;
var G__15295 = (0);
var G__15296 = (0);
seq__15235_15276 = G__15293;
chunk__15236_15277 = G__15294;
count__15237_15278 = G__15295;
i__15238_15279 = G__15296;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__15239 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15240 = null;
var count__15241 = (0);
var i__15242 = (0);
while(true){
if((i__15242 < count__15241)){
var i = cljs.core._nth.call(null,chunk__15240,i__15242);
app.colors.darken_color_in_db.call(null,i);


var G__15297 = seq__15239;
var G__15298 = chunk__15240;
var G__15299 = count__15241;
var G__15300 = (i__15242 + (1));
seq__15239 = G__15297;
chunk__15240 = G__15298;
count__15241 = G__15299;
i__15242 = G__15300;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__15239);
if(temp__5753__auto__){
var seq__15239__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15239__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15239__$1);
var G__15301 = cljs.core.chunk_rest.call(null,seq__15239__$1);
var G__15302 = c__4679__auto__;
var G__15303 = cljs.core.count.call(null,c__4679__auto__);
var G__15304 = (0);
seq__15239 = G__15301;
chunk__15240 = G__15302;
count__15241 = G__15303;
i__15242 = G__15304;
continue;
} else {
var i = cljs.core.first.call(null,seq__15239__$1);
app.colors.darken_color_in_db.call(null,i);


var G__15305 = cljs.core.next.call(null,seq__15239__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__15239 = G__15305;
chunk__15240 = G__15306;
count__15241 = G__15307;
i__15242 = G__15308;
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
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__15309_15325 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15310_15326 = null;
var count__15311_15327 = (0);
var i__15312_15328 = (0);
while(true){
if((i__15312_15328 < count__15311_15327)){
var i_15329 = cljs.core._nth.call(null,chunk__15310_15326,i__15312_15328);
app.colors.darken_color_in_db.call(null,i_15329);


var G__15330 = seq__15309_15325;
var G__15331 = chunk__15310_15326;
var G__15332 = count__15311_15327;
var G__15333 = (i__15312_15328 + (1));
seq__15309_15325 = G__15330;
chunk__15310_15326 = G__15331;
count__15311_15327 = G__15332;
i__15312_15328 = G__15333;
continue;
} else {
var temp__5753__auto___15334 = cljs.core.seq.call(null,seq__15309_15325);
if(temp__5753__auto___15334){
var seq__15309_15335__$1 = temp__5753__auto___15334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15309_15335__$1)){
var c__4679__auto___15336 = cljs.core.chunk_first.call(null,seq__15309_15335__$1);
var G__15337 = cljs.core.chunk_rest.call(null,seq__15309_15335__$1);
var G__15338 = c__4679__auto___15336;
var G__15339 = cljs.core.count.call(null,c__4679__auto___15336);
var G__15340 = (0);
seq__15309_15325 = G__15337;
chunk__15310_15326 = G__15338;
count__15311_15327 = G__15339;
i__15312_15328 = G__15340;
continue;
} else {
var i_15341 = cljs.core.first.call(null,seq__15309_15335__$1);
app.colors.darken_color_in_db.call(null,i_15341);


var G__15342 = cljs.core.next.call(null,seq__15309_15335__$1);
var G__15343 = null;
var G__15344 = (0);
var G__15345 = (0);
seq__15309_15325 = G__15342;
chunk__15310_15326 = G__15343;
count__15311_15327 = G__15344;
i__15312_15328 = G__15345;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__15313 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15314 = null;
var count__15315 = (0);
var i__15316 = (0);
while(true){
if((i__15316 < count__15315)){
var i = cljs.core._nth.call(null,chunk__15314,i__15316);
app.colors.darken_color_in_db.call(null,i);


var G__15346 = seq__15313;
var G__15347 = chunk__15314;
var G__15348 = count__15315;
var G__15349 = (i__15316 + (1));
seq__15313 = G__15346;
chunk__15314 = G__15347;
count__15315 = G__15348;
i__15316 = G__15349;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__15313);
if(temp__5753__auto__){
var seq__15313__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15313__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15313__$1);
var G__15350 = cljs.core.chunk_rest.call(null,seq__15313__$1);
var G__15351 = c__4679__auto__;
var G__15352 = cljs.core.count.call(null,c__4679__auto__);
var G__15353 = (0);
seq__15313 = G__15350;
chunk__15314 = G__15351;
count__15315 = G__15352;
i__15316 = G__15353;
continue;
} else {
var i = cljs.core.first.call(null,seq__15313__$1);
app.colors.darken_color_in_db.call(null,i);


var G__15354 = cljs.core.next.call(null,seq__15313__$1);
var G__15355 = null;
var G__15356 = (0);
var G__15357 = (0);
seq__15313 = G__15354;
chunk__15314 = G__15355;
count__15315 = G__15356;
i__15316 = G__15357;
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
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__15317_15358 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15318_15359 = null;
var count__15319_15360 = (0);
var i__15320_15361 = (0);
while(true){
if((i__15320_15361 < count__15319_15360)){
var i_15362 = cljs.core._nth.call(null,chunk__15318_15359,i__15320_15361);
app.colors.lighten_color_in_db.call(null,i_15362);


var G__15363 = seq__15317_15358;
var G__15364 = chunk__15318_15359;
var G__15365 = count__15319_15360;
var G__15366 = (i__15320_15361 + (1));
seq__15317_15358 = G__15363;
chunk__15318_15359 = G__15364;
count__15319_15360 = G__15365;
i__15320_15361 = G__15366;
continue;
} else {
var temp__5753__auto___15367 = cljs.core.seq.call(null,seq__15317_15358);
if(temp__5753__auto___15367){
var seq__15317_15368__$1 = temp__5753__auto___15367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15317_15368__$1)){
var c__4679__auto___15369 = cljs.core.chunk_first.call(null,seq__15317_15368__$1);
var G__15370 = cljs.core.chunk_rest.call(null,seq__15317_15368__$1);
var G__15371 = c__4679__auto___15369;
var G__15372 = cljs.core.count.call(null,c__4679__auto___15369);
var G__15373 = (0);
seq__15317_15358 = G__15370;
chunk__15318_15359 = G__15371;
count__15319_15360 = G__15372;
i__15320_15361 = G__15373;
continue;
} else {
var i_15374 = cljs.core.first.call(null,seq__15317_15368__$1);
app.colors.lighten_color_in_db.call(null,i_15374);


var G__15375 = cljs.core.next.call(null,seq__15317_15368__$1);
var G__15376 = null;
var G__15377 = (0);
var G__15378 = (0);
seq__15317_15358 = G__15375;
chunk__15318_15359 = G__15376;
count__15319_15360 = G__15377;
i__15320_15361 = G__15378;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__15321 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__15322 = null;
var count__15323 = (0);
var i__15324 = (0);
while(true){
if((i__15324 < count__15323)){
var i = cljs.core._nth.call(null,chunk__15322,i__15324);
app.colors.lighten_color_in_db.call(null,i);


var G__15379 = seq__15321;
var G__15380 = chunk__15322;
var G__15381 = count__15323;
var G__15382 = (i__15324 + (1));
seq__15321 = G__15379;
chunk__15322 = G__15380;
count__15323 = G__15381;
i__15324 = G__15382;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__15321);
if(temp__5753__auto__){
var seq__15321__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15321__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15321__$1);
var G__15383 = cljs.core.chunk_rest.call(null,seq__15321__$1);
var G__15384 = c__4679__auto__;
var G__15385 = cljs.core.count.call(null,c__4679__auto__);
var G__15386 = (0);
seq__15321 = G__15383;
chunk__15322 = G__15384;
count__15323 = G__15385;
i__15324 = G__15386;
continue;
} else {
var i = cljs.core.first.call(null,seq__15321__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__15387 = cljs.core.next.call(null,seq__15321__$1);
var G__15388 = null;
var G__15389 = (0);
var G__15390 = (0);
seq__15321 = G__15387;
chunk__15322 = G__15388;
count__15323 = G__15389;
i__15324 = G__15390;
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
return cljs.core.rand_int.call(null,(360));
});
/**
 * hue-range returns a vecor of equidistant huevalues, but instead of
 * returning only int values, randomize the hue value by adding or subtracting
 * floating point values 0 <= val < 1.
 */
app.colors.hue_range = (function app$colors$hue_range(length,startvalue){
var distance = Math.floor(((360) / length));
return cljs.core.take.call(null,length,cljs.core.iterate.call(null,(function (p1__15391_SHARP_){
return cljs.core.mod.call(null,((distance + cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null,(-1))], null))) + p1__15391_SHARP_),(360));
}),startvalue));
});
/**
 * color-list takes a lightness and saturation value from the Cie-lch Color Space
 * and returns a vector of size length of db/randomcolors. Hue values for each color
 * are of equidistant value. Every lch color is converted to rgb, then clamped if 
 * necessary and finally converted to Hex format.
 */
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range.call(null,cljs.core.count.call(null,app.db.randomcolors),app.colors.random_hue.call(null));
return cljs.core.mapv.call(null,(function (p1__15392_SHARP_){
return app.colors.rgbToHex.call(null,p1__15392_SHARP_);
}),cljs.core.mapv.call(null,(function (p1__15393_SHARP_){
return app.colors.clamped_rgb_vec.call(null,p1__15393_SHARP_);
}),cljs.core.mapv.call(null,(function (p1__15394_SHARP_){
return app.colors.lchToRgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__15394_SHARP_], null));
}),hr)));
});
/**
 * soft-palette returns a vector of 7 random soft colors.
 */
app.colors.soft_palette = (function app$colors$soft_palette(){
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
return app.colors.color_list.call(null,57.292,25.738);
} else {
return app.colors.color_list.call(null,44.921,25.738);
}
});
/**
 * warm-palette returns a vector of 7 random warm colors.
 */
app.colors.warm_palette = (function app$colors$warm_palette(){
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
return app.colors.color_list.call(null,60.39,33.84);
} else {
return app.colors.color_list.call(null,18.358,33.84);
}
});
/**
 * pop-palette returns a vector of 7 random 'pop' colors.
 */
app.colors.pop_palette = (function app$colors$pop_palette(){
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
return app.colors.color_list.call(null,77.02,58.1);
} else {
return app.colors.color_list.call(null,30.12,58.1);
}
});
/**
 * muted-palette returns a vector of 7 random muted colors.
 */
app.colors.muted_palette = (function app$colors$muted_palette(){
if(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)))){
return app.colors.color_list.call(null,82.11,18.712);
} else {
return app.colors.color_list.call(null,40.02,18.712);
}
});
/**
 * custom-palette returns a vector of 7 random colors,
 * with the values for lightness and saturation set to
 * its given values.
 */
app.colors.custom_palette = (function app$colors$custom_palette(lightness,saturation){
return app.colors.color_list.call(null,lightness,saturation);
});
/**
 * set :keyword :builtin :string :functionname :variable
 * :type and constant colors in app-db to colors of a
 * random color palette
 */
app.colors.set_random_palette = (function app$colors$set_random_palette(palette){
var seq__15395 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,app.db.randomcolors,palette));
var chunk__15396 = null;
var count__15397 = (0);
var i__15398 = (0);
while(true){
if((i__15398 < count__15397)){
var vec__15405 = cljs.core._nth.call(null,chunk__15396,i__15398);
var colorname = cljs.core.nth.call(null,vec__15405,(0),null);
var colorstring = cljs.core.nth.call(null,vec__15405,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__15411 = seq__15395;
var G__15412 = chunk__15396;
var G__15413 = count__15397;
var G__15414 = (i__15398 + (1));
seq__15395 = G__15411;
chunk__15396 = G__15412;
count__15397 = G__15413;
i__15398 = G__15414;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__15395);
if(temp__5753__auto__){
var seq__15395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15395__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15395__$1);
var G__15415 = cljs.core.chunk_rest.call(null,seq__15395__$1);
var G__15416 = c__4679__auto__;
var G__15417 = cljs.core.count.call(null,c__4679__auto__);
var G__15418 = (0);
seq__15395 = G__15415;
chunk__15396 = G__15416;
count__15397 = G__15417;
i__15398 = G__15418;
continue;
} else {
var vec__15408 = cljs.core.first.call(null,seq__15395__$1);
var colorname = cljs.core.nth.call(null,vec__15408,(0),null);
var colorstring = cljs.core.nth.call(null,vec__15408,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__15419 = cljs.core.next.call(null,seq__15395__$1);
var G__15420 = null;
var G__15421 = (0);
var G__15422 = (0);
seq__15395 = G__15419;
chunk__15396 = G__15420;
count__15397 = G__15421;
i__15398 = G__15422;
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
var dbg = app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme));
if(dbg){
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"hasdarkbg","hasdarkbg",-317233792),dbg,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"fg5","fg5",908678474),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.12),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"year","year",335913393),app.colors.current_year.call(null));
} else {
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"hasdarkbg","hasdarkbg",-317233792),dbg,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"fg5","fg5",908678474),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"year","year",335913393),app.colors.current_year.call(null));
}
});

//# sourceMappingURL=colors.js.map
