// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11112_SHARP_){
return (p1__11112_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11113_SHARP_){
return ((p1__11113_SHARP_ < (0))) || ((p1__11113_SHARP_ > (255)));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__5319__auto__ = (function (){var x__5326__auto__ = val;
var y__5327__auto__ = (255);
return ((x__5326__auto__ < y__5327__auto__) ? x__5326__auto__ : y__5327__auto__);
})();
var y__5320__auto__ = (0);
return ((x__5319__auto__ > y__5320__auto__) ? x__5319__auto__ : y__5320__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11114_SHARP_){
return app.colors.clamp(p1__11114_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11116 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11116,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11116,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11116,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11122 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11117_SHARP_){
return (p1__11117_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11118_SHARP_){
if((p1__11118_SHARP_ > 0.04045)){
var G__11123 = ((p1__11118_SHARP_ + 0.055) / 1.055);
var G__11124 = 2.4;
return Math.pow(G__11123,G__11124);
} else {
return (p1__11118_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11129 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11125_SHARP_){
if((p1__11125_SHARP_ > 0.008856)){
var G__11130 = p1__11125_SHARP_;
var G__11131 = ((1) / (3));
return Math.pow(G__11130,G__11131);
} else {
return ((p1__11125_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,(2),null);
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
var vec__11134 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11134,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11134,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11134,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11135 = ((a * a) + (b * b));
return Math.sqrt(G__11135);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11137 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11137,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11137,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11137,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11139 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11139,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11139,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11147 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11140_SHARP_){
return (p1__11140_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11147,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11147,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11147,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11147,x,y,z,r,g,b,rgb){
return (function (p1__11141_SHARP_){
var G__11148 = (p1__11141_SHARP_ * (255));
return Math.round(G__11148);
});})(vec__11147,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11147,x,y,z,r,g,b,rgb){
return (function (p1__11142_SHARP_){
if((p1__11142_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11149 = p1__11142_SHARP_;
var G__11150 = ((1) / 2.4);
return Math.pow(G__11149,G__11150);
})()) - 0.055);
} else {
return (p1__11142_SHARP_ * 12.92);
}
});})(vec__11147,x,y,z,r,g,b,rgb))
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
var args11151 = [];
var len__6046__auto___11159 = arguments.length;
var i__6047__auto___11160 = (0);
while(true){
if((i__6047__auto___11160 < len__6046__auto___11159)){
args11151.push((arguments[i__6047__auto___11160]));

var G__11161 = (i__6047__auto___11160 + (1));
i__6047__auto___11160 = G__11161;
continue;
} else {
}
break;
}

var G__11153 = args11151.length;
switch (G__11153) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11151.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11156 = (function (){var G__11157 = goog.color.hexToRgb(colorstring);
var G__11158 = factor;
return goog.color.darken(G__11157,G__11158);
})();
return goog.color.rgbArrayToHex(G__11156);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var args11163 = [];
var len__6046__auto___11171 = arguments.length;
var i__6047__auto___11172 = (0);
while(true){
if((i__6047__auto___11172 < len__6046__auto___11171)){
args11163.push((arguments[i__6047__auto___11172]));

var G__11173 = (i__6047__auto___11172 + (1));
i__6047__auto___11172 = G__11173;
continue;
} else {
}
break;
}

var G__11165 = args11163.length;
switch (G__11165) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11163.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11168 = (function (){var G__11169 = goog.color.hexToRgb(colorstring);
var G__11170 = factor;
return goog.color.lighten(G__11169,G__11170);
})();
return goog.color.rgbArrayToHex(G__11168);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11176 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11176,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11176,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11176,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11178 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11178) : color.call(null,G__11178));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11180 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11180) : color.call(null,G__11180));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11197_11213 = cljs.core.seq(app.db.contrastcolors);
var chunk__11198_11214 = null;
var count__11199_11215 = (0);
var i__11200_11216 = (0);
while(true){
if((i__11200_11216 < count__11199_11215)){
var i_11217 = chunk__11198_11214.cljs$core$IIndexed$_nth$arity$2(null,i__11200_11216);
app.colors.lighten_color_in_db(i_11217);

var G__11218 = seq__11197_11213;
var G__11219 = chunk__11198_11214;
var G__11220 = count__11199_11215;
var G__11221 = (i__11200_11216 + (1));
seq__11197_11213 = G__11218;
chunk__11198_11214 = G__11219;
count__11199_11215 = G__11220;
i__11200_11216 = G__11221;
continue;
} else {
var temp__4657__auto___11222 = cljs.core.seq(seq__11197_11213);
if(temp__4657__auto___11222){
var seq__11197_11223__$1 = temp__4657__auto___11222;
if(cljs.core.chunked_seq_QMARK_(seq__11197_11223__$1)){
var c__5791__auto___11224 = cljs.core.chunk_first(seq__11197_11223__$1);
var G__11225 = cljs.core.chunk_rest(seq__11197_11223__$1);
var G__11226 = c__5791__auto___11224;
var G__11227 = cljs.core.count(c__5791__auto___11224);
var G__11228 = (0);
seq__11197_11213 = G__11225;
chunk__11198_11214 = G__11226;
count__11199_11215 = G__11227;
i__11200_11216 = G__11228;
continue;
} else {
var i_11229 = cljs.core.first(seq__11197_11223__$1);
app.colors.lighten_color_in_db(i_11229);

var G__11230 = cljs.core.next(seq__11197_11223__$1);
var G__11231 = null;
var G__11232 = (0);
var G__11233 = (0);
seq__11197_11213 = G__11230;
chunk__11198_11214 = G__11231;
count__11199_11215 = G__11232;
i__11200_11216 = G__11233;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11201 = cljs.core.seq(app.db.contrastcolors);
var chunk__11202 = null;
var count__11203 = (0);
var i__11204 = (0);
while(true){
if((i__11204 < count__11203)){
var i = chunk__11202.cljs$core$IIndexed$_nth$arity$2(null,i__11204);
app.colors.lighten_color_in_db(i);

var G__11234 = seq__11201;
var G__11235 = chunk__11202;
var G__11236 = count__11203;
var G__11237 = (i__11204 + (1));
seq__11201 = G__11234;
chunk__11202 = G__11235;
count__11203 = G__11236;
i__11204 = G__11237;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11201);
if(temp__4657__auto__){
var seq__11201__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11201__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11201__$1);
var G__11238 = cljs.core.chunk_rest(seq__11201__$1);
var G__11239 = c__5791__auto__;
var G__11240 = cljs.core.count(c__5791__auto__);
var G__11241 = (0);
seq__11201 = G__11238;
chunk__11202 = G__11239;
count__11203 = G__11240;
i__11204 = G__11241;
continue;
} else {
var i = cljs.core.first(seq__11201__$1);
app.colors.lighten_color_in_db(i);

var G__11242 = cljs.core.next(seq__11201__$1);
var G__11243 = null;
var G__11244 = (0);
var G__11245 = (0);
seq__11201 = G__11242;
chunk__11202 = G__11243;
count__11203 = G__11244;
i__11204 = G__11245;
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
var seq__11205_11246 = cljs.core.seq(app.db.contrastcolors);
var chunk__11206_11247 = null;
var count__11207_11248 = (0);
var i__11208_11249 = (0);
while(true){
if((i__11208_11249 < count__11207_11248)){
var i_11250 = chunk__11206_11247.cljs$core$IIndexed$_nth$arity$2(null,i__11208_11249);
app.colors.darken_color_in_db(i_11250);

var G__11251 = seq__11205_11246;
var G__11252 = chunk__11206_11247;
var G__11253 = count__11207_11248;
var G__11254 = (i__11208_11249 + (1));
seq__11205_11246 = G__11251;
chunk__11206_11247 = G__11252;
count__11207_11248 = G__11253;
i__11208_11249 = G__11254;
continue;
} else {
var temp__4657__auto___11255 = cljs.core.seq(seq__11205_11246);
if(temp__4657__auto___11255){
var seq__11205_11256__$1 = temp__4657__auto___11255;
if(cljs.core.chunked_seq_QMARK_(seq__11205_11256__$1)){
var c__5791__auto___11257 = cljs.core.chunk_first(seq__11205_11256__$1);
var G__11258 = cljs.core.chunk_rest(seq__11205_11256__$1);
var G__11259 = c__5791__auto___11257;
var G__11260 = cljs.core.count(c__5791__auto___11257);
var G__11261 = (0);
seq__11205_11246 = G__11258;
chunk__11206_11247 = G__11259;
count__11207_11248 = G__11260;
i__11208_11249 = G__11261;
continue;
} else {
var i_11262 = cljs.core.first(seq__11205_11256__$1);
app.colors.darken_color_in_db(i_11262);

var G__11263 = cljs.core.next(seq__11205_11256__$1);
var G__11264 = null;
var G__11265 = (0);
var G__11266 = (0);
seq__11205_11246 = G__11263;
chunk__11206_11247 = G__11264;
count__11207_11248 = G__11265;
i__11208_11249 = G__11266;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11209 = cljs.core.seq(app.db.contrastcolors);
var chunk__11210 = null;
var count__11211 = (0);
var i__11212 = (0);
while(true){
if((i__11212 < count__11211)){
var i = chunk__11210.cljs$core$IIndexed$_nth$arity$2(null,i__11212);
app.colors.darken_color_in_db(i);

var G__11267 = seq__11209;
var G__11268 = chunk__11210;
var G__11269 = count__11211;
var G__11270 = (i__11212 + (1));
seq__11209 = G__11267;
chunk__11210 = G__11268;
count__11211 = G__11269;
i__11212 = G__11270;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11209);
if(temp__4657__auto__){
var seq__11209__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11209__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11209__$1);
var G__11271 = cljs.core.chunk_rest(seq__11209__$1);
var G__11272 = c__5791__auto__;
var G__11273 = cljs.core.count(c__5791__auto__);
var G__11274 = (0);
seq__11209 = G__11271;
chunk__11210 = G__11272;
count__11211 = G__11273;
i__11212 = G__11274;
continue;
} else {
var i = cljs.core.first(seq__11209__$1);
app.colors.darken_color_in_db(i);

var G__11275 = cljs.core.next(seq__11209__$1);
var G__11276 = null;
var G__11277 = (0);
var G__11278 = (0);
seq__11209 = G__11275;
chunk__11210 = G__11276;
count__11211 = G__11277;
i__11212 = G__11278;
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
var seq__11295_11311 = cljs.core.seq(app.db.contrastcolors);
var chunk__11296_11312 = null;
var count__11297_11313 = (0);
var i__11298_11314 = (0);
while(true){
if((i__11298_11314 < count__11297_11313)){
var i_11315 = chunk__11296_11312.cljs$core$IIndexed$_nth$arity$2(null,i__11298_11314);
app.colors.darken_color_in_db(i_11315);

var G__11316 = seq__11295_11311;
var G__11317 = chunk__11296_11312;
var G__11318 = count__11297_11313;
var G__11319 = (i__11298_11314 + (1));
seq__11295_11311 = G__11316;
chunk__11296_11312 = G__11317;
count__11297_11313 = G__11318;
i__11298_11314 = G__11319;
continue;
} else {
var temp__4657__auto___11320 = cljs.core.seq(seq__11295_11311);
if(temp__4657__auto___11320){
var seq__11295_11321__$1 = temp__4657__auto___11320;
if(cljs.core.chunked_seq_QMARK_(seq__11295_11321__$1)){
var c__5791__auto___11322 = cljs.core.chunk_first(seq__11295_11321__$1);
var G__11323 = cljs.core.chunk_rest(seq__11295_11321__$1);
var G__11324 = c__5791__auto___11322;
var G__11325 = cljs.core.count(c__5791__auto___11322);
var G__11326 = (0);
seq__11295_11311 = G__11323;
chunk__11296_11312 = G__11324;
count__11297_11313 = G__11325;
i__11298_11314 = G__11326;
continue;
} else {
var i_11327 = cljs.core.first(seq__11295_11321__$1);
app.colors.darken_color_in_db(i_11327);

var G__11328 = cljs.core.next(seq__11295_11321__$1);
var G__11329 = null;
var G__11330 = (0);
var G__11331 = (0);
seq__11295_11311 = G__11328;
chunk__11296_11312 = G__11329;
count__11297_11313 = G__11330;
i__11298_11314 = G__11331;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11299 = cljs.core.seq(app.db.contrastcolors);
var chunk__11300 = null;
var count__11301 = (0);
var i__11302 = (0);
while(true){
if((i__11302 < count__11301)){
var i = chunk__11300.cljs$core$IIndexed$_nth$arity$2(null,i__11302);
app.colors.darken_color_in_db(i);

var G__11332 = seq__11299;
var G__11333 = chunk__11300;
var G__11334 = count__11301;
var G__11335 = (i__11302 + (1));
seq__11299 = G__11332;
chunk__11300 = G__11333;
count__11301 = G__11334;
i__11302 = G__11335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11299);
if(temp__4657__auto__){
var seq__11299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11299__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11299__$1);
var G__11336 = cljs.core.chunk_rest(seq__11299__$1);
var G__11337 = c__5791__auto__;
var G__11338 = cljs.core.count(c__5791__auto__);
var G__11339 = (0);
seq__11299 = G__11336;
chunk__11300 = G__11337;
count__11301 = G__11338;
i__11302 = G__11339;
continue;
} else {
var i = cljs.core.first(seq__11299__$1);
app.colors.darken_color_in_db(i);

var G__11340 = cljs.core.next(seq__11299__$1);
var G__11341 = null;
var G__11342 = (0);
var G__11343 = (0);
seq__11299 = G__11340;
chunk__11300 = G__11341;
count__11301 = G__11342;
i__11302 = G__11343;
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
var seq__11303_11344 = cljs.core.seq(app.db.contrastcolors);
var chunk__11304_11345 = null;
var count__11305_11346 = (0);
var i__11306_11347 = (0);
while(true){
if((i__11306_11347 < count__11305_11346)){
var i_11348 = chunk__11304_11345.cljs$core$IIndexed$_nth$arity$2(null,i__11306_11347);
app.colors.lighten_color_in_db(i_11348);

var G__11349 = seq__11303_11344;
var G__11350 = chunk__11304_11345;
var G__11351 = count__11305_11346;
var G__11352 = (i__11306_11347 + (1));
seq__11303_11344 = G__11349;
chunk__11304_11345 = G__11350;
count__11305_11346 = G__11351;
i__11306_11347 = G__11352;
continue;
} else {
var temp__4657__auto___11353 = cljs.core.seq(seq__11303_11344);
if(temp__4657__auto___11353){
var seq__11303_11354__$1 = temp__4657__auto___11353;
if(cljs.core.chunked_seq_QMARK_(seq__11303_11354__$1)){
var c__5791__auto___11355 = cljs.core.chunk_first(seq__11303_11354__$1);
var G__11356 = cljs.core.chunk_rest(seq__11303_11354__$1);
var G__11357 = c__5791__auto___11355;
var G__11358 = cljs.core.count(c__5791__auto___11355);
var G__11359 = (0);
seq__11303_11344 = G__11356;
chunk__11304_11345 = G__11357;
count__11305_11346 = G__11358;
i__11306_11347 = G__11359;
continue;
} else {
var i_11360 = cljs.core.first(seq__11303_11354__$1);
app.colors.lighten_color_in_db(i_11360);

var G__11361 = cljs.core.next(seq__11303_11354__$1);
var G__11362 = null;
var G__11363 = (0);
var G__11364 = (0);
seq__11303_11344 = G__11361;
chunk__11304_11345 = G__11362;
count__11305_11346 = G__11363;
i__11306_11347 = G__11364;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11307 = cljs.core.seq(app.db.contrastcolors);
var chunk__11308 = null;
var count__11309 = (0);
var i__11310 = (0);
while(true){
if((i__11310 < count__11309)){
var i = chunk__11308.cljs$core$IIndexed$_nth$arity$2(null,i__11310);
app.colors.lighten_color_in_db(i);

var G__11365 = seq__11307;
var G__11366 = chunk__11308;
var G__11367 = count__11309;
var G__11368 = (i__11310 + (1));
seq__11307 = G__11365;
chunk__11308 = G__11366;
count__11309 = G__11367;
i__11310 = G__11368;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11307);
if(temp__4657__auto__){
var seq__11307__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11307__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11307__$1);
var G__11369 = cljs.core.chunk_rest(seq__11307__$1);
var G__11370 = c__5791__auto__;
var G__11371 = cljs.core.count(c__5791__auto__);
var G__11372 = (0);
seq__11307 = G__11369;
chunk__11308 = G__11370;
count__11309 = G__11371;
i__11310 = G__11372;
continue;
} else {
var i = cljs.core.first(seq__11307__$1);
app.colors.lighten_color_in_db(i);

var G__11373 = cljs.core.next(seq__11307__$1);
var G__11374 = null;
var G__11375 = (0);
var G__11376 = (0);
seq__11307 = G__11373;
chunk__11308 = G__11374;
count__11309 = G__11375;
i__11310 = G__11376;
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
var distance = (function (){var G__11379 = ((360) / length);
return Math.floor(G__11379);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11377_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__11377_SHARP_),(360));
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
return (function (p1__11380_SHARP_){
return app.colors.rgbToHex(p1__11380_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11381_SHARP_){
return app.colors.clamped_rgb_vec(p1__11381_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11382_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11382_SHARP_], null));
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
var seq__11389 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11390 = null;
var count__11391 = (0);
var i__11392 = (0);
while(true){
if((i__11392 < count__11391)){
var vec__11393 = chunk__11390.cljs$core$IIndexed$_nth$arity$2(null,i__11392);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11393,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11393,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11395 = seq__11389;
var G__11396 = chunk__11390;
var G__11397 = count__11391;
var G__11398 = (i__11392 + (1));
seq__11389 = G__11395;
chunk__11390 = G__11396;
count__11391 = G__11397;
i__11392 = G__11398;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11389);
if(temp__4657__auto__){
var seq__11389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11389__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11389__$1);
var G__11399 = cljs.core.chunk_rest(seq__11389__$1);
var G__11400 = c__5791__auto__;
var G__11401 = cljs.core.count(c__5791__auto__);
var G__11402 = (0);
seq__11389 = G__11399;
chunk__11390 = G__11400;
count__11391 = G__11401;
i__11392 = G__11402;
continue;
} else {
var vec__11394 = cljs.core.first(seq__11389__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11394,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11394,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11403 = cljs.core.next(seq__11389__$1);
var G__11404 = null;
var G__11405 = (0);
var G__11406 = (0);
seq__11389 = G__11403;
chunk__11390 = G__11404;
count__11391 = G__11405;
i__11392 = G__11406;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24)], 0));
}
});
