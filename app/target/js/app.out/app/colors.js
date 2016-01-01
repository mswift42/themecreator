// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11111_SHARP_){
return (p1__11111_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11112_SHARP_){
return ((p1__11112_SHARP_ < (0))) || ((p1__11112_SHARP_ > (255)));
}),rgbcolor);
});
app.colors.clamp = (function app$colors$clamp(val){
var x__5317__auto__ = (function (){var x__5324__auto__ = val;
var y__5325__auto__ = (255);
return ((x__5324__auto__ < y__5325__auto__) ? x__5324__auto__ : y__5325__auto__);
})();
var y__5318__auto__ = (0);
return ((x__5317__auto__ > y__5318__auto__) ? x__5317__auto__ : y__5318__auto__);
});
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11113_SHARP_){
return app.colors.clamp(p1__11113_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11115 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11121 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11116_SHARP_){
return (p1__11116_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11117_SHARP_){
if((p1__11117_SHARP_ > 0.04045)){
var G__11122 = ((p1__11117_SHARP_ + 0.055) / 1.055);
var G__11123 = 2.4;
return Math.pow(G__11122,G__11123);
} else {
return (p1__11117_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11128 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11124_SHARP_){
if((p1__11124_SHARP_ > 0.008856)){
var G__11129 = p1__11124_SHARP_;
var G__11130 = ((1) / (3));
return Math.pow(G__11129,G__11130);
} else {
return ((p1__11124_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11128,(2),null);
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
var vec__11133 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11134 = ((a * a) + (b * b));
return Math.sqrt(G__11134);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11136 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11138 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11138,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11138,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11138,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11138,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11138,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11146 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11139_SHARP_){
return (p1__11139_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11146,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11146,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11146,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11146,x,y,z,r,g,b,rgb){
return (function (p1__11140_SHARP_){
var G__11147 = (p1__11140_SHARP_ * (255));
return Math.round(G__11147);
});})(vec__11146,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11146,x,y,z,r,g,b,rgb){
return (function (p1__11141_SHARP_){
if((p1__11141_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11148 = p1__11141_SHARP_;
var G__11149 = ((1) / 2.4);
return Math.pow(G__11148,G__11149);
})()) - 0.055);
} else {
return (p1__11141_SHARP_ * 12.92);
}
});})(vec__11146,x,y,z,r,g,b,rgb))
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
var args11150 = [];
var len__6044__auto___11158 = arguments.length;
var i__6045__auto___11159 = (0);
while(true){
if((i__6045__auto___11159 < len__6044__auto___11158)){
args11150.push((arguments[i__6045__auto___11159]));

var G__11160 = (i__6045__auto___11159 + (1));
i__6045__auto___11159 = G__11160;
continue;
} else {
}
break;
}

var G__11152 = args11150.length;
switch (G__11152) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11150.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11155 = (function (){var G__11156 = goog.color.hexToRgb(colorstring);
var G__11157 = factor;
return goog.color.darken(G__11156,G__11157);
})();
return goog.color.rgbArrayToHex(G__11155);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var args11162 = [];
var len__6044__auto___11170 = arguments.length;
var i__6045__auto___11171 = (0);
while(true){
if((i__6045__auto___11171 < len__6044__auto___11170)){
args11162.push((arguments[i__6045__auto___11171]));

var G__11172 = (i__6045__auto___11171 + (1));
i__6045__auto___11171 = G__11172;
continue;
} else {
}
break;
}

var G__11164 = args11162.length;
switch (G__11164) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11162.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11167 = (function (){var G__11168 = goog.color.hexToRgb(colorstring);
var G__11169 = factor;
return goog.color.lighten(G__11168,G__11169);
})();
return goog.color.rgbArrayToHex(G__11167);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11175 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11175,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11175,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11175,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11177 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11177) : color.call(null,G__11177));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11179 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11179) : color.call(null,G__11179));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11196_11212 = cljs.core.seq(app.db.contrastcolors);
var chunk__11197_11213 = null;
var count__11198_11214 = (0);
var i__11199_11215 = (0);
while(true){
if((i__11199_11215 < count__11198_11214)){
var i_11216 = chunk__11197_11213.cljs$core$IIndexed$_nth$arity$2(null,i__11199_11215);
app.colors.lighten_color_in_db(i_11216);

var G__11217 = seq__11196_11212;
var G__11218 = chunk__11197_11213;
var G__11219 = count__11198_11214;
var G__11220 = (i__11199_11215 + (1));
seq__11196_11212 = G__11217;
chunk__11197_11213 = G__11218;
count__11198_11214 = G__11219;
i__11199_11215 = G__11220;
continue;
} else {
var temp__4425__auto___11221 = cljs.core.seq(seq__11196_11212);
if(temp__4425__auto___11221){
var seq__11196_11222__$1 = temp__4425__auto___11221;
if(cljs.core.chunked_seq_QMARK_(seq__11196_11222__$1)){
var c__5789__auto___11223 = cljs.core.chunk_first(seq__11196_11222__$1);
var G__11224 = cljs.core.chunk_rest(seq__11196_11222__$1);
var G__11225 = c__5789__auto___11223;
var G__11226 = cljs.core.count(c__5789__auto___11223);
var G__11227 = (0);
seq__11196_11212 = G__11224;
chunk__11197_11213 = G__11225;
count__11198_11214 = G__11226;
i__11199_11215 = G__11227;
continue;
} else {
var i_11228 = cljs.core.first(seq__11196_11222__$1);
app.colors.lighten_color_in_db(i_11228);

var G__11229 = cljs.core.next(seq__11196_11222__$1);
var G__11230 = null;
var G__11231 = (0);
var G__11232 = (0);
seq__11196_11212 = G__11229;
chunk__11197_11213 = G__11230;
count__11198_11214 = G__11231;
i__11199_11215 = G__11232;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11200 = cljs.core.seq(app.db.contrastcolors);
var chunk__11201 = null;
var count__11202 = (0);
var i__11203 = (0);
while(true){
if((i__11203 < count__11202)){
var i = chunk__11201.cljs$core$IIndexed$_nth$arity$2(null,i__11203);
app.colors.lighten_color_in_db(i);

var G__11233 = seq__11200;
var G__11234 = chunk__11201;
var G__11235 = count__11202;
var G__11236 = (i__11203 + (1));
seq__11200 = G__11233;
chunk__11201 = G__11234;
count__11202 = G__11235;
i__11203 = G__11236;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11200);
if(temp__4425__auto__){
var seq__11200__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11200__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11200__$1);
var G__11237 = cljs.core.chunk_rest(seq__11200__$1);
var G__11238 = c__5789__auto__;
var G__11239 = cljs.core.count(c__5789__auto__);
var G__11240 = (0);
seq__11200 = G__11237;
chunk__11201 = G__11238;
count__11202 = G__11239;
i__11203 = G__11240;
continue;
} else {
var i = cljs.core.first(seq__11200__$1);
app.colors.lighten_color_in_db(i);

var G__11241 = cljs.core.next(seq__11200__$1);
var G__11242 = null;
var G__11243 = (0);
var G__11244 = (0);
seq__11200 = G__11241;
chunk__11201 = G__11242;
count__11202 = G__11243;
i__11203 = G__11244;
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
var seq__11204_11245 = cljs.core.seq(app.db.contrastcolors);
var chunk__11205_11246 = null;
var count__11206_11247 = (0);
var i__11207_11248 = (0);
while(true){
if((i__11207_11248 < count__11206_11247)){
var i_11249 = chunk__11205_11246.cljs$core$IIndexed$_nth$arity$2(null,i__11207_11248);
app.colors.darken_color_in_db(i_11249);

var G__11250 = seq__11204_11245;
var G__11251 = chunk__11205_11246;
var G__11252 = count__11206_11247;
var G__11253 = (i__11207_11248 + (1));
seq__11204_11245 = G__11250;
chunk__11205_11246 = G__11251;
count__11206_11247 = G__11252;
i__11207_11248 = G__11253;
continue;
} else {
var temp__4425__auto___11254 = cljs.core.seq(seq__11204_11245);
if(temp__4425__auto___11254){
var seq__11204_11255__$1 = temp__4425__auto___11254;
if(cljs.core.chunked_seq_QMARK_(seq__11204_11255__$1)){
var c__5789__auto___11256 = cljs.core.chunk_first(seq__11204_11255__$1);
var G__11257 = cljs.core.chunk_rest(seq__11204_11255__$1);
var G__11258 = c__5789__auto___11256;
var G__11259 = cljs.core.count(c__5789__auto___11256);
var G__11260 = (0);
seq__11204_11245 = G__11257;
chunk__11205_11246 = G__11258;
count__11206_11247 = G__11259;
i__11207_11248 = G__11260;
continue;
} else {
var i_11261 = cljs.core.first(seq__11204_11255__$1);
app.colors.darken_color_in_db(i_11261);

var G__11262 = cljs.core.next(seq__11204_11255__$1);
var G__11263 = null;
var G__11264 = (0);
var G__11265 = (0);
seq__11204_11245 = G__11262;
chunk__11205_11246 = G__11263;
count__11206_11247 = G__11264;
i__11207_11248 = G__11265;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11208 = cljs.core.seq(app.db.contrastcolors);
var chunk__11209 = null;
var count__11210 = (0);
var i__11211 = (0);
while(true){
if((i__11211 < count__11210)){
var i = chunk__11209.cljs$core$IIndexed$_nth$arity$2(null,i__11211);
app.colors.darken_color_in_db(i);

var G__11266 = seq__11208;
var G__11267 = chunk__11209;
var G__11268 = count__11210;
var G__11269 = (i__11211 + (1));
seq__11208 = G__11266;
chunk__11209 = G__11267;
count__11210 = G__11268;
i__11211 = G__11269;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11208);
if(temp__4425__auto__){
var seq__11208__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11208__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11208__$1);
var G__11270 = cljs.core.chunk_rest(seq__11208__$1);
var G__11271 = c__5789__auto__;
var G__11272 = cljs.core.count(c__5789__auto__);
var G__11273 = (0);
seq__11208 = G__11270;
chunk__11209 = G__11271;
count__11210 = G__11272;
i__11211 = G__11273;
continue;
} else {
var i = cljs.core.first(seq__11208__$1);
app.colors.darken_color_in_db(i);

var G__11274 = cljs.core.next(seq__11208__$1);
var G__11275 = null;
var G__11276 = (0);
var G__11277 = (0);
seq__11208 = G__11274;
chunk__11209 = G__11275;
count__11210 = G__11276;
i__11211 = G__11277;
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
var seq__11294_11310 = cljs.core.seq(app.db.contrastcolors);
var chunk__11295_11311 = null;
var count__11296_11312 = (0);
var i__11297_11313 = (0);
while(true){
if((i__11297_11313 < count__11296_11312)){
var i_11314 = chunk__11295_11311.cljs$core$IIndexed$_nth$arity$2(null,i__11297_11313);
app.colors.darken_color_in_db(i_11314);

var G__11315 = seq__11294_11310;
var G__11316 = chunk__11295_11311;
var G__11317 = count__11296_11312;
var G__11318 = (i__11297_11313 + (1));
seq__11294_11310 = G__11315;
chunk__11295_11311 = G__11316;
count__11296_11312 = G__11317;
i__11297_11313 = G__11318;
continue;
} else {
var temp__4425__auto___11319 = cljs.core.seq(seq__11294_11310);
if(temp__4425__auto___11319){
var seq__11294_11320__$1 = temp__4425__auto___11319;
if(cljs.core.chunked_seq_QMARK_(seq__11294_11320__$1)){
var c__5789__auto___11321 = cljs.core.chunk_first(seq__11294_11320__$1);
var G__11322 = cljs.core.chunk_rest(seq__11294_11320__$1);
var G__11323 = c__5789__auto___11321;
var G__11324 = cljs.core.count(c__5789__auto___11321);
var G__11325 = (0);
seq__11294_11310 = G__11322;
chunk__11295_11311 = G__11323;
count__11296_11312 = G__11324;
i__11297_11313 = G__11325;
continue;
} else {
var i_11326 = cljs.core.first(seq__11294_11320__$1);
app.colors.darken_color_in_db(i_11326);

var G__11327 = cljs.core.next(seq__11294_11320__$1);
var G__11328 = null;
var G__11329 = (0);
var G__11330 = (0);
seq__11294_11310 = G__11327;
chunk__11295_11311 = G__11328;
count__11296_11312 = G__11329;
i__11297_11313 = G__11330;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11298 = cljs.core.seq(app.db.contrastcolors);
var chunk__11299 = null;
var count__11300 = (0);
var i__11301 = (0);
while(true){
if((i__11301 < count__11300)){
var i = chunk__11299.cljs$core$IIndexed$_nth$arity$2(null,i__11301);
app.colors.darken_color_in_db(i);

var G__11331 = seq__11298;
var G__11332 = chunk__11299;
var G__11333 = count__11300;
var G__11334 = (i__11301 + (1));
seq__11298 = G__11331;
chunk__11299 = G__11332;
count__11300 = G__11333;
i__11301 = G__11334;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11298);
if(temp__4425__auto__){
var seq__11298__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11298__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11298__$1);
var G__11335 = cljs.core.chunk_rest(seq__11298__$1);
var G__11336 = c__5789__auto__;
var G__11337 = cljs.core.count(c__5789__auto__);
var G__11338 = (0);
seq__11298 = G__11335;
chunk__11299 = G__11336;
count__11300 = G__11337;
i__11301 = G__11338;
continue;
} else {
var i = cljs.core.first(seq__11298__$1);
app.colors.darken_color_in_db(i);

var G__11339 = cljs.core.next(seq__11298__$1);
var G__11340 = null;
var G__11341 = (0);
var G__11342 = (0);
seq__11298 = G__11339;
chunk__11299 = G__11340;
count__11300 = G__11341;
i__11301 = G__11342;
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
var seq__11302_11343 = cljs.core.seq(app.db.contrastcolors);
var chunk__11303_11344 = null;
var count__11304_11345 = (0);
var i__11305_11346 = (0);
while(true){
if((i__11305_11346 < count__11304_11345)){
var i_11347 = chunk__11303_11344.cljs$core$IIndexed$_nth$arity$2(null,i__11305_11346);
app.colors.lighten_color_in_db(i_11347);

var G__11348 = seq__11302_11343;
var G__11349 = chunk__11303_11344;
var G__11350 = count__11304_11345;
var G__11351 = (i__11305_11346 + (1));
seq__11302_11343 = G__11348;
chunk__11303_11344 = G__11349;
count__11304_11345 = G__11350;
i__11305_11346 = G__11351;
continue;
} else {
var temp__4425__auto___11352 = cljs.core.seq(seq__11302_11343);
if(temp__4425__auto___11352){
var seq__11302_11353__$1 = temp__4425__auto___11352;
if(cljs.core.chunked_seq_QMARK_(seq__11302_11353__$1)){
var c__5789__auto___11354 = cljs.core.chunk_first(seq__11302_11353__$1);
var G__11355 = cljs.core.chunk_rest(seq__11302_11353__$1);
var G__11356 = c__5789__auto___11354;
var G__11357 = cljs.core.count(c__5789__auto___11354);
var G__11358 = (0);
seq__11302_11343 = G__11355;
chunk__11303_11344 = G__11356;
count__11304_11345 = G__11357;
i__11305_11346 = G__11358;
continue;
} else {
var i_11359 = cljs.core.first(seq__11302_11353__$1);
app.colors.lighten_color_in_db(i_11359);

var G__11360 = cljs.core.next(seq__11302_11353__$1);
var G__11361 = null;
var G__11362 = (0);
var G__11363 = (0);
seq__11302_11343 = G__11360;
chunk__11303_11344 = G__11361;
count__11304_11345 = G__11362;
i__11305_11346 = G__11363;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11306 = cljs.core.seq(app.db.contrastcolors);
var chunk__11307 = null;
var count__11308 = (0);
var i__11309 = (0);
while(true){
if((i__11309 < count__11308)){
var i = chunk__11307.cljs$core$IIndexed$_nth$arity$2(null,i__11309);
app.colors.lighten_color_in_db(i);

var G__11364 = seq__11306;
var G__11365 = chunk__11307;
var G__11366 = count__11308;
var G__11367 = (i__11309 + (1));
seq__11306 = G__11364;
chunk__11307 = G__11365;
count__11308 = G__11366;
i__11309 = G__11367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11306);
if(temp__4425__auto__){
var seq__11306__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11306__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11306__$1);
var G__11368 = cljs.core.chunk_rest(seq__11306__$1);
var G__11369 = c__5789__auto__;
var G__11370 = cljs.core.count(c__5789__auto__);
var G__11371 = (0);
seq__11306 = G__11368;
chunk__11307 = G__11369;
count__11308 = G__11370;
i__11309 = G__11371;
continue;
} else {
var i = cljs.core.first(seq__11306__$1);
app.colors.lighten_color_in_db(i);

var G__11372 = cljs.core.next(seq__11306__$1);
var G__11373 = null;
var G__11374 = (0);
var G__11375 = (0);
seq__11306 = G__11372;
chunk__11307 = G__11373;
count__11308 = G__11374;
i__11309 = G__11375;
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
 * hue-range returns a vecor of equidistant huevalues.
 */
app.colors.hue_range = (function app$colors$hue_range(length,startvalue){
var distance = (function (){var G__11378 = ((360) / length);
return Math.floor(G__11378);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11376_SHARP_){
return cljs.core.mod((distance + p1__11376_SHARP_),(360));
});})(distance))
,startvalue));
});
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range(cljs.core.count(app.db.randomcolors),app.colors.random_hue());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11379_SHARP_){
return app.colors.rgbToHex(p1__11379_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11380_SHARP_){
return app.colors.clamped_rgb_vec(p1__11380_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11381_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11381_SHARP_], null));
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
var seq__11388 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11389 = null;
var count__11390 = (0);
var i__11391 = (0);
while(true){
if((i__11391 < count__11390)){
var vec__11392 = chunk__11389.cljs$core$IIndexed$_nth$arity$2(null,i__11391);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11392,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11392,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11394 = seq__11388;
var G__11395 = chunk__11389;
var G__11396 = count__11390;
var G__11397 = (i__11391 + (1));
seq__11388 = G__11394;
chunk__11389 = G__11395;
count__11390 = G__11396;
i__11391 = G__11397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11388);
if(temp__4425__auto__){
var seq__11388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11388__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11388__$1);
var G__11398 = cljs.core.chunk_rest(seq__11388__$1);
var G__11399 = c__5789__auto__;
var G__11400 = cljs.core.count(c__5789__auto__);
var G__11401 = (0);
seq__11388 = G__11398;
chunk__11389 = G__11399;
count__11390 = G__11400;
i__11391 = G__11401;
continue;
} else {
var vec__11393 = cljs.core.first(seq__11388__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11393,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11393,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11402 = cljs.core.next(seq__11388__$1);
var G__11403 = null;
var G__11404 = (0);
var G__11405 = (0);
seq__11388 = G__11402;
chunk__11389 = G__11403;
count__11390 = G__11404;
i__11391 = G__11405;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$vsui,"vs-dark"], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(theme,cljs.core.cst$kw$fg2,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.array_seq([cljs.core.cst$kw$fg3,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$fg4,app.colors.lighten.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainfg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$bg2,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.08),cljs.core.cst$kw$bg3,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.16),cljs.core.cst$kw$bg4,app.colors.darken.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1(theme),0.24),cljs.core.cst$kw$vsui,"vs"], 0));
}
});
app.colors.within_limit_QMARK_ = (function app$colors$within_limit_QMARK_(limit,resultlist,targetlist){
var seq__11414 = cljs.core.seq(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(resultlist,targetlist));
var chunk__11415 = null;
var count__11416 = (0);
var i__11417 = (0);
while(true){
if((i__11417 < count__11416)){
var vec__11418 = chunk__11415.cljs$core$IIndexed$_nth$arity$2(null,i__11417);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (){var G__11419 = (t - r);
return Math.abs(G__11419);
})() <= limit)], 0));

var G__11422 = seq__11414;
var G__11423 = chunk__11415;
var G__11424 = count__11416;
var G__11425 = (i__11417 + (1));
seq__11414 = G__11422;
chunk__11415 = G__11423;
count__11416 = G__11424;
i__11417 = G__11425;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11414);
if(temp__4425__auto__){
var seq__11414__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11414__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11414__$1);
var G__11426 = cljs.core.chunk_rest(seq__11414__$1);
var G__11427 = c__5789__auto__;
var G__11428 = cljs.core.count(c__5789__auto__);
var G__11429 = (0);
seq__11414 = G__11426;
chunk__11415 = G__11427;
count__11416 = G__11428;
i__11417 = G__11429;
continue;
} else {
var vec__11420 = cljs.core.first(seq__11414__$1);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (){var G__11421 = (t - r);
return Math.abs(G__11421);
})() <= limit)], 0));

var G__11430 = cljs.core.next(seq__11414__$1);
var G__11431 = null;
var G__11432 = (0);
var G__11433 = (0);
seq__11414 = G__11430;
chunk__11415 = G__11431;
count__11416 = G__11432;
i__11417 = G__11433;
continue;
}
} else {
return null;
}
}
break;
}
});
