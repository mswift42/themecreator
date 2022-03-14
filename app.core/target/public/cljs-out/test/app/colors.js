// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.call(null,(function (p1__11178_SHARP_){
return (p1__11178_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
/**
 * convert hex color in #rrggbb format to
 * format 0xbbggrr.
 */
app.colors.hexToBgrHex = (function app$colors$hexToBgrHex(hexcolor){
var vec__11179 = goog.color.hexToRgb(hexcolor);
var r = cljs.core.nth.call(null,vec__11179,(0),null);
var g = cljs.core.nth.call(null,vec__11179,(1),null);
var b = cljs.core.nth.call(null,vec__11179,(2),null);
var bgrhex = goog.color.rgbToHex(b,g,r);
return clojure.string.replace_first.call(null,["0x",bgrhex].join(''),"#","");
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_.call(null,(function (p1__11182_SHARP_){
return (((p1__11182_SHARP_ < (0))) || ((p1__11182_SHARP_ > (255))));
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
return cljs.core.mapv.call(null,(function (p1__11183_SHARP_){
return app.colors.clamp.call(null,p1__11183_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11184 = rgbcolor;
var r = cljs.core.nth.call(null,vec__11184,(0),null);
var g = cljs.core.nth.call(null,vec__11184,(1),null);
var b = cljs.core.nth.call(null,vec__11184,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11189 = cljs.core.mapv.call(null,(function (p1__11187_SHARP_){
return (p1__11187_SHARP_ * (100));
}),cljs.core.mapv.call(null,(function (p1__11188_SHARP_){
if((p1__11188_SHARP_ > 0.04045)){
return Math.pow(((p1__11188_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__11188_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.call(null,vec__11189,(0),null);
var g = cljs.core.nth.call(null,vec__11189,(1),null);
var b = cljs.core.nth.call(null,vec__11189,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11193 = cljs.core.mapv.call(null,(function (p1__11192_SHARP_){
if((p1__11192_SHARP_ > 0.008856)){
return Math.pow(p1__11192_SHARP_,((1) / (3)));
} else {
return ((p1__11192_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.call(null,cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.call(null,vec__11193,(0),null);
var y = cljs.core.nth.call(null,vec__11193,(1),null);
var z = cljs.core.nth.call(null,vec__11193,(2),null);
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
var vec__11196 = labcolor;
var l = cljs.core.nth.call(null,vec__11196,(0),null);
var a = cljs.core.nth.call(null,vec__11196,(1),null);
var b = cljs.core.nth.call(null,vec__11196,(2),null);
var h = app.colors.radToDegrees.call(null,Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11199 = lchcolor;
var l = cljs.core.nth.call(null,vec__11199,(0),null);
var c = cljs.core.nth.call(null,vec__11199,(1),null);
var h = cljs.core.nth.call(null,vec__11199,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11202 = labcolor;
var l = cljs.core.nth.call(null,vec__11202,(0),null);
var a = cljs.core.nth.call(null,vec__11202,(1),null);
var b = cljs.core.nth.call(null,vec__11202,(2),null);
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
var vec__11208 = cljs.core.mapv.call(null,(function (p1__11205_SHARP_){
return (p1__11205_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.call(null,vec__11208,(0),null);
var y = cljs.core.nth.call(null,vec__11208,(1),null);
var z = cljs.core.nth.call(null,vec__11208,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.call(null,(function (p1__11206_SHARP_){
return Math.round((p1__11206_SHARP_ * (255)));
}),cljs.core.mapv.call(null,(function (p1__11207_SHARP_){
if((p1__11207_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__11207_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__11207_SHARP_ * 12.92);
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
var G__11212 = arguments.length;
switch (G__11212) {
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
var G__11215 = arguments.length;
switch (G__11215) {
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
var vec__11217 = goog.color.hexToRgb(color);
var r = cljs.core.nth.call(null,vec__11217,(0),null);
var g = cljs.core.nth.call(null,vec__11217,(1),null);
var b = cljs.core.nth.call(null,vec__11217,(2),null);
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
var seq__11220_11236 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11221_11237 = null;
var count__11222_11238 = (0);
var i__11223_11239 = (0);
while(true){
if((i__11223_11239 < count__11222_11238)){
var i_11240 = cljs.core._nth.call(null,chunk__11221_11237,i__11223_11239);
app.colors.lighten_color_in_db.call(null,i_11240);


var G__11241 = seq__11220_11236;
var G__11242 = chunk__11221_11237;
var G__11243 = count__11222_11238;
var G__11244 = (i__11223_11239 + (1));
seq__11220_11236 = G__11241;
chunk__11221_11237 = G__11242;
count__11222_11238 = G__11243;
i__11223_11239 = G__11244;
continue;
} else {
var temp__5753__auto___11245 = cljs.core.seq.call(null,seq__11220_11236);
if(temp__5753__auto___11245){
var seq__11220_11246__$1 = temp__5753__auto___11245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11220_11246__$1)){
var c__4679__auto___11247 = cljs.core.chunk_first.call(null,seq__11220_11246__$1);
var G__11248 = cljs.core.chunk_rest.call(null,seq__11220_11246__$1);
var G__11249 = c__4679__auto___11247;
var G__11250 = cljs.core.count.call(null,c__4679__auto___11247);
var G__11251 = (0);
seq__11220_11236 = G__11248;
chunk__11221_11237 = G__11249;
count__11222_11238 = G__11250;
i__11223_11239 = G__11251;
continue;
} else {
var i_11252 = cljs.core.first.call(null,seq__11220_11246__$1);
app.colors.lighten_color_in_db.call(null,i_11252);


var G__11253 = cljs.core.next.call(null,seq__11220_11246__$1);
var G__11254 = null;
var G__11255 = (0);
var G__11256 = (0);
seq__11220_11236 = G__11253;
chunk__11221_11237 = G__11254;
count__11222_11238 = G__11255;
i__11223_11239 = G__11256;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__11224 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11225 = null;
var count__11226 = (0);
var i__11227 = (0);
while(true){
if((i__11227 < count__11226)){
var i = cljs.core._nth.call(null,chunk__11225,i__11227);
app.colors.lighten_color_in_db.call(null,i);


var G__11257 = seq__11224;
var G__11258 = chunk__11225;
var G__11259 = count__11226;
var G__11260 = (i__11227 + (1));
seq__11224 = G__11257;
chunk__11225 = G__11258;
count__11226 = G__11259;
i__11227 = G__11260;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11224);
if(temp__5753__auto__){
var seq__11224__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11224__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11224__$1);
var G__11261 = cljs.core.chunk_rest.call(null,seq__11224__$1);
var G__11262 = c__4679__auto__;
var G__11263 = cljs.core.count.call(null,c__4679__auto__);
var G__11264 = (0);
seq__11224 = G__11261;
chunk__11225 = G__11262;
count__11226 = G__11263;
i__11227 = G__11264;
continue;
} else {
var i = cljs.core.first.call(null,seq__11224__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__11265 = cljs.core.next.call(null,seq__11224__$1);
var G__11266 = null;
var G__11267 = (0);
var G__11268 = (0);
seq__11224 = G__11265;
chunk__11225 = G__11266;
count__11226 = G__11267;
i__11227 = G__11268;
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
var seq__11228_11269 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11229_11270 = null;
var count__11230_11271 = (0);
var i__11231_11272 = (0);
while(true){
if((i__11231_11272 < count__11230_11271)){
var i_11273 = cljs.core._nth.call(null,chunk__11229_11270,i__11231_11272);
app.colors.darken_color_in_db.call(null,i_11273);


var G__11274 = seq__11228_11269;
var G__11275 = chunk__11229_11270;
var G__11276 = count__11230_11271;
var G__11277 = (i__11231_11272 + (1));
seq__11228_11269 = G__11274;
chunk__11229_11270 = G__11275;
count__11230_11271 = G__11276;
i__11231_11272 = G__11277;
continue;
} else {
var temp__5753__auto___11278 = cljs.core.seq.call(null,seq__11228_11269);
if(temp__5753__auto___11278){
var seq__11228_11279__$1 = temp__5753__auto___11278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11228_11279__$1)){
var c__4679__auto___11280 = cljs.core.chunk_first.call(null,seq__11228_11279__$1);
var G__11281 = cljs.core.chunk_rest.call(null,seq__11228_11279__$1);
var G__11282 = c__4679__auto___11280;
var G__11283 = cljs.core.count.call(null,c__4679__auto___11280);
var G__11284 = (0);
seq__11228_11269 = G__11281;
chunk__11229_11270 = G__11282;
count__11230_11271 = G__11283;
i__11231_11272 = G__11284;
continue;
} else {
var i_11285 = cljs.core.first.call(null,seq__11228_11279__$1);
app.colors.darken_color_in_db.call(null,i_11285);


var G__11286 = cljs.core.next.call(null,seq__11228_11279__$1);
var G__11287 = null;
var G__11288 = (0);
var G__11289 = (0);
seq__11228_11269 = G__11286;
chunk__11229_11270 = G__11287;
count__11230_11271 = G__11288;
i__11231_11272 = G__11289;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__11232 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11233 = null;
var count__11234 = (0);
var i__11235 = (0);
while(true){
if((i__11235 < count__11234)){
var i = cljs.core._nth.call(null,chunk__11233,i__11235);
app.colors.darken_color_in_db.call(null,i);


var G__11290 = seq__11232;
var G__11291 = chunk__11233;
var G__11292 = count__11234;
var G__11293 = (i__11235 + (1));
seq__11232 = G__11290;
chunk__11233 = G__11291;
count__11234 = G__11292;
i__11235 = G__11293;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11232);
if(temp__5753__auto__){
var seq__11232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11232__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11232__$1);
var G__11294 = cljs.core.chunk_rest.call(null,seq__11232__$1);
var G__11295 = c__4679__auto__;
var G__11296 = cljs.core.count.call(null,c__4679__auto__);
var G__11297 = (0);
seq__11232 = G__11294;
chunk__11233 = G__11295;
count__11234 = G__11296;
i__11235 = G__11297;
continue;
} else {
var i = cljs.core.first.call(null,seq__11232__$1);
app.colors.darken_color_in_db.call(null,i);


var G__11298 = cljs.core.next.call(null,seq__11232__$1);
var G__11299 = null;
var G__11300 = (0);
var G__11301 = (0);
seq__11232 = G__11298;
chunk__11233 = G__11299;
count__11234 = G__11300;
i__11235 = G__11301;
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
var seq__11302_11318 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11303_11319 = null;
var count__11304_11320 = (0);
var i__11305_11321 = (0);
while(true){
if((i__11305_11321 < count__11304_11320)){
var i_11322 = cljs.core._nth.call(null,chunk__11303_11319,i__11305_11321);
app.colors.darken_color_in_db.call(null,i_11322);


var G__11323 = seq__11302_11318;
var G__11324 = chunk__11303_11319;
var G__11325 = count__11304_11320;
var G__11326 = (i__11305_11321 + (1));
seq__11302_11318 = G__11323;
chunk__11303_11319 = G__11324;
count__11304_11320 = G__11325;
i__11305_11321 = G__11326;
continue;
} else {
var temp__5753__auto___11327 = cljs.core.seq.call(null,seq__11302_11318);
if(temp__5753__auto___11327){
var seq__11302_11328__$1 = temp__5753__auto___11327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11302_11328__$1)){
var c__4679__auto___11329 = cljs.core.chunk_first.call(null,seq__11302_11328__$1);
var G__11330 = cljs.core.chunk_rest.call(null,seq__11302_11328__$1);
var G__11331 = c__4679__auto___11329;
var G__11332 = cljs.core.count.call(null,c__4679__auto___11329);
var G__11333 = (0);
seq__11302_11318 = G__11330;
chunk__11303_11319 = G__11331;
count__11304_11320 = G__11332;
i__11305_11321 = G__11333;
continue;
} else {
var i_11334 = cljs.core.first.call(null,seq__11302_11328__$1);
app.colors.darken_color_in_db.call(null,i_11334);


var G__11335 = cljs.core.next.call(null,seq__11302_11328__$1);
var G__11336 = null;
var G__11337 = (0);
var G__11338 = (0);
seq__11302_11318 = G__11335;
chunk__11303_11319 = G__11336;
count__11304_11320 = G__11337;
i__11305_11321 = G__11338;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__11306 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11307 = null;
var count__11308 = (0);
var i__11309 = (0);
while(true){
if((i__11309 < count__11308)){
var i = cljs.core._nth.call(null,chunk__11307,i__11309);
app.colors.darken_color_in_db.call(null,i);


var G__11339 = seq__11306;
var G__11340 = chunk__11307;
var G__11341 = count__11308;
var G__11342 = (i__11309 + (1));
seq__11306 = G__11339;
chunk__11307 = G__11340;
count__11308 = G__11341;
i__11309 = G__11342;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11306);
if(temp__5753__auto__){
var seq__11306__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11306__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11306__$1);
var G__11343 = cljs.core.chunk_rest.call(null,seq__11306__$1);
var G__11344 = c__4679__auto__;
var G__11345 = cljs.core.count.call(null,c__4679__auto__);
var G__11346 = (0);
seq__11306 = G__11343;
chunk__11307 = G__11344;
count__11308 = G__11345;
i__11309 = G__11346;
continue;
} else {
var i = cljs.core.first.call(null,seq__11306__$1);
app.colors.darken_color_in_db.call(null,i);


var G__11347 = cljs.core.next.call(null,seq__11306__$1);
var G__11348 = null;
var G__11349 = (0);
var G__11350 = (0);
seq__11306 = G__11347;
chunk__11307 = G__11348;
count__11308 = G__11349;
i__11309 = G__11350;
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
var seq__11310_11351 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11311_11352 = null;
var count__11312_11353 = (0);
var i__11313_11354 = (0);
while(true){
if((i__11313_11354 < count__11312_11353)){
var i_11355 = cljs.core._nth.call(null,chunk__11311_11352,i__11313_11354);
app.colors.lighten_color_in_db.call(null,i_11355);


var G__11356 = seq__11310_11351;
var G__11357 = chunk__11311_11352;
var G__11358 = count__11312_11353;
var G__11359 = (i__11313_11354 + (1));
seq__11310_11351 = G__11356;
chunk__11311_11352 = G__11357;
count__11312_11353 = G__11358;
i__11313_11354 = G__11359;
continue;
} else {
var temp__5753__auto___11360 = cljs.core.seq.call(null,seq__11310_11351);
if(temp__5753__auto___11360){
var seq__11310_11361__$1 = temp__5753__auto___11360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11310_11361__$1)){
var c__4679__auto___11362 = cljs.core.chunk_first.call(null,seq__11310_11361__$1);
var G__11363 = cljs.core.chunk_rest.call(null,seq__11310_11361__$1);
var G__11364 = c__4679__auto___11362;
var G__11365 = cljs.core.count.call(null,c__4679__auto___11362);
var G__11366 = (0);
seq__11310_11351 = G__11363;
chunk__11311_11352 = G__11364;
count__11312_11353 = G__11365;
i__11313_11354 = G__11366;
continue;
} else {
var i_11367 = cljs.core.first.call(null,seq__11310_11361__$1);
app.colors.lighten_color_in_db.call(null,i_11367);


var G__11368 = cljs.core.next.call(null,seq__11310_11361__$1);
var G__11369 = null;
var G__11370 = (0);
var G__11371 = (0);
seq__11310_11351 = G__11368;
chunk__11311_11352 = G__11369;
count__11312_11353 = G__11370;
i__11313_11354 = G__11371;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__11314 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__11315 = null;
var count__11316 = (0);
var i__11317 = (0);
while(true){
if((i__11317 < count__11316)){
var i = cljs.core._nth.call(null,chunk__11315,i__11317);
app.colors.lighten_color_in_db.call(null,i);


var G__11372 = seq__11314;
var G__11373 = chunk__11315;
var G__11374 = count__11316;
var G__11375 = (i__11317 + (1));
seq__11314 = G__11372;
chunk__11315 = G__11373;
count__11316 = G__11374;
i__11317 = G__11375;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11314);
if(temp__5753__auto__){
var seq__11314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11314__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11314__$1);
var G__11376 = cljs.core.chunk_rest.call(null,seq__11314__$1);
var G__11377 = c__4679__auto__;
var G__11378 = cljs.core.count.call(null,c__4679__auto__);
var G__11379 = (0);
seq__11314 = G__11376;
chunk__11315 = G__11377;
count__11316 = G__11378;
i__11317 = G__11379;
continue;
} else {
var i = cljs.core.first.call(null,seq__11314__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__11380 = cljs.core.next.call(null,seq__11314__$1);
var G__11381 = null;
var G__11382 = (0);
var G__11383 = (0);
seq__11314 = G__11380;
chunk__11315 = G__11381;
count__11316 = G__11382;
i__11317 = G__11383;
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
return cljs.core.take.call(null,length,cljs.core.iterate.call(null,(function (p1__11384_SHARP_){
return cljs.core.mod.call(null,((distance + cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null,(-1))], null))) + p1__11384_SHARP_),(360));
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
return cljs.core.mapv.call(null,(function (p1__11385_SHARP_){
return app.colors.rgbToHex.call(null,p1__11385_SHARP_);
}),cljs.core.mapv.call(null,(function (p1__11386_SHARP_){
return app.colors.clamped_rgb_vec.call(null,p1__11386_SHARP_);
}),cljs.core.mapv.call(null,(function (p1__11387_SHARP_){
return app.colors.lchToRgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11387_SHARP_], null));
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
var seq__11388 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,app.db.randomcolors,palette));
var chunk__11389 = null;
var count__11390 = (0);
var i__11391 = (0);
while(true){
if((i__11391 < count__11390)){
var vec__11398 = cljs.core._nth.call(null,chunk__11389,i__11391);
var colorname = cljs.core.nth.call(null,vec__11398,(0),null);
var colorstring = cljs.core.nth.call(null,vec__11398,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__11404 = seq__11388;
var G__11405 = chunk__11389;
var G__11406 = count__11390;
var G__11407 = (i__11391 + (1));
seq__11388 = G__11404;
chunk__11389 = G__11405;
count__11390 = G__11406;
i__11391 = G__11407;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11388);
if(temp__5753__auto__){
var seq__11388__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11388__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__11388__$1);
var G__11408 = cljs.core.chunk_rest.call(null,seq__11388__$1);
var G__11409 = c__4679__auto__;
var G__11410 = cljs.core.count.call(null,c__4679__auto__);
var G__11411 = (0);
seq__11388 = G__11408;
chunk__11389 = G__11409;
count__11390 = G__11410;
i__11391 = G__11411;
continue;
} else {
var vec__11401 = cljs.core.first.call(null,seq__11388__$1);
var colorname = cljs.core.nth.call(null,vec__11401,(0),null);
var colorstring = cljs.core.nth.call(null,vec__11401,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__11412 = cljs.core.next.call(null,seq__11388__$1);
var G__11413 = null;
var G__11414 = (0);
var G__11415 = (0);
seq__11388 = G__11412;
chunk__11389 = G__11413;
count__11390 = G__11414;
i__11391 = G__11415;
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
