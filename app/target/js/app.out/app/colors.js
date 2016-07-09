// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11100_SHARP_){
return (p1__11100_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11101_SHARP_){
return ((p1__11101_SHARP_ < (0))) || ((p1__11101_SHARP_ > (255)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11102_SHARP_){
return app.colors.clamp(p1__11102_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11104 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11110 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11105_SHARP_){
return (p1__11105_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11106_SHARP_){
if((p1__11106_SHARP_ > 0.04045)){
var G__11111 = ((p1__11106_SHARP_ + 0.055) / 1.055);
var G__11112 = 2.4;
return Math.pow(G__11111,G__11112);
} else {
return (p1__11106_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11117 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11113_SHARP_){
if((p1__11113_SHARP_ > 0.008856)){
var G__11118 = p1__11113_SHARP_;
var G__11119 = ((1) / (3));
return Math.pow(G__11118,G__11119);
} else {
return ((p1__11113_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(2),null);
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
var vec__11122 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11123 = ((a * a) + (b * b));
return Math.sqrt(G__11123);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11125 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11127 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11127,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11127,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11127,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11127,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11127,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11135 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11128_SHARP_){
return (p1__11128_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11135,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11135,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11135,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11135,x,y,z,r,g,b,rgb){
return (function (p1__11129_SHARP_){
var G__11136 = (p1__11129_SHARP_ * (255));
return Math.round(G__11136);
});})(vec__11135,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11135,x,y,z,r,g,b,rgb){
return (function (p1__11130_SHARP_){
if((p1__11130_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11137 = p1__11130_SHARP_;
var G__11138 = ((1) / 2.4);
return Math.pow(G__11137,G__11138);
})()) - 0.055);
} else {
return (p1__11130_SHARP_ * 12.92);
}
});})(vec__11135,x,y,z,r,g,b,rgb))
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
var args11139 = [];
var len__6046__auto___11147 = arguments.length;
var i__6047__auto___11148 = (0);
while(true){
if((i__6047__auto___11148 < len__6046__auto___11147)){
args11139.push((arguments[i__6047__auto___11148]));

var G__11149 = (i__6047__auto___11148 + (1));
i__6047__auto___11148 = G__11149;
continue;
} else {
}
break;
}

var G__11141 = args11139.length;
switch (G__11141) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11139.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11144 = (function (){var G__11145 = goog.color.hexToRgb(colorstring);
var G__11146 = factor;
return goog.color.darken(G__11145,G__11146);
})();
return goog.color.rgbArrayToHex(G__11144);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
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
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11151.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11156 = (function (){var G__11157 = goog.color.hexToRgb(colorstring);
var G__11158 = factor;
return goog.color.lighten(G__11157,G__11158);
})();
return goog.color.rgbArrayToHex(G__11156);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11164 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11166 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11166) : color.call(null,G__11166));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11168 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11168) : color.call(null,G__11168));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11185_11201 = cljs.core.seq(app.db.contrastcolors);
var chunk__11186_11202 = null;
var count__11187_11203 = (0);
var i__11188_11204 = (0);
while(true){
if((i__11188_11204 < count__11187_11203)){
var i_11205 = chunk__11186_11202.cljs$core$IIndexed$_nth$arity$2(null,i__11188_11204);
app.colors.lighten_color_in_db(i_11205);

var G__11206 = seq__11185_11201;
var G__11207 = chunk__11186_11202;
var G__11208 = count__11187_11203;
var G__11209 = (i__11188_11204 + (1));
seq__11185_11201 = G__11206;
chunk__11186_11202 = G__11207;
count__11187_11203 = G__11208;
i__11188_11204 = G__11209;
continue;
} else {
var temp__4425__auto___11210 = cljs.core.seq(seq__11185_11201);
if(temp__4425__auto___11210){
var seq__11185_11211__$1 = temp__4425__auto___11210;
if(cljs.core.chunked_seq_QMARK_(seq__11185_11211__$1)){
var c__5791__auto___11212 = cljs.core.chunk_first(seq__11185_11211__$1);
var G__11213 = cljs.core.chunk_rest(seq__11185_11211__$1);
var G__11214 = c__5791__auto___11212;
var G__11215 = cljs.core.count(c__5791__auto___11212);
var G__11216 = (0);
seq__11185_11201 = G__11213;
chunk__11186_11202 = G__11214;
count__11187_11203 = G__11215;
i__11188_11204 = G__11216;
continue;
} else {
var i_11217 = cljs.core.first(seq__11185_11211__$1);
app.colors.lighten_color_in_db(i_11217);

var G__11218 = cljs.core.next(seq__11185_11211__$1);
var G__11219 = null;
var G__11220 = (0);
var G__11221 = (0);
seq__11185_11201 = G__11218;
chunk__11186_11202 = G__11219;
count__11187_11203 = G__11220;
i__11188_11204 = G__11221;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11189 = cljs.core.seq(app.db.contrastcolors);
var chunk__11190 = null;
var count__11191 = (0);
var i__11192 = (0);
while(true){
if((i__11192 < count__11191)){
var i = chunk__11190.cljs$core$IIndexed$_nth$arity$2(null,i__11192);
app.colors.lighten_color_in_db(i);

var G__11222 = seq__11189;
var G__11223 = chunk__11190;
var G__11224 = count__11191;
var G__11225 = (i__11192 + (1));
seq__11189 = G__11222;
chunk__11190 = G__11223;
count__11191 = G__11224;
i__11192 = G__11225;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11189);
if(temp__4425__auto__){
var seq__11189__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11189__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11189__$1);
var G__11226 = cljs.core.chunk_rest(seq__11189__$1);
var G__11227 = c__5791__auto__;
var G__11228 = cljs.core.count(c__5791__auto__);
var G__11229 = (0);
seq__11189 = G__11226;
chunk__11190 = G__11227;
count__11191 = G__11228;
i__11192 = G__11229;
continue;
} else {
var i = cljs.core.first(seq__11189__$1);
app.colors.lighten_color_in_db(i);

var G__11230 = cljs.core.next(seq__11189__$1);
var G__11231 = null;
var G__11232 = (0);
var G__11233 = (0);
seq__11189 = G__11230;
chunk__11190 = G__11231;
count__11191 = G__11232;
i__11192 = G__11233;
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
var seq__11193_11234 = cljs.core.seq(app.db.contrastcolors);
var chunk__11194_11235 = null;
var count__11195_11236 = (0);
var i__11196_11237 = (0);
while(true){
if((i__11196_11237 < count__11195_11236)){
var i_11238 = chunk__11194_11235.cljs$core$IIndexed$_nth$arity$2(null,i__11196_11237);
app.colors.darken_color_in_db(i_11238);

var G__11239 = seq__11193_11234;
var G__11240 = chunk__11194_11235;
var G__11241 = count__11195_11236;
var G__11242 = (i__11196_11237 + (1));
seq__11193_11234 = G__11239;
chunk__11194_11235 = G__11240;
count__11195_11236 = G__11241;
i__11196_11237 = G__11242;
continue;
} else {
var temp__4425__auto___11243 = cljs.core.seq(seq__11193_11234);
if(temp__4425__auto___11243){
var seq__11193_11244__$1 = temp__4425__auto___11243;
if(cljs.core.chunked_seq_QMARK_(seq__11193_11244__$1)){
var c__5791__auto___11245 = cljs.core.chunk_first(seq__11193_11244__$1);
var G__11246 = cljs.core.chunk_rest(seq__11193_11244__$1);
var G__11247 = c__5791__auto___11245;
var G__11248 = cljs.core.count(c__5791__auto___11245);
var G__11249 = (0);
seq__11193_11234 = G__11246;
chunk__11194_11235 = G__11247;
count__11195_11236 = G__11248;
i__11196_11237 = G__11249;
continue;
} else {
var i_11250 = cljs.core.first(seq__11193_11244__$1);
app.colors.darken_color_in_db(i_11250);

var G__11251 = cljs.core.next(seq__11193_11244__$1);
var G__11252 = null;
var G__11253 = (0);
var G__11254 = (0);
seq__11193_11234 = G__11251;
chunk__11194_11235 = G__11252;
count__11195_11236 = G__11253;
i__11196_11237 = G__11254;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11197 = cljs.core.seq(app.db.contrastcolors);
var chunk__11198 = null;
var count__11199 = (0);
var i__11200 = (0);
while(true){
if((i__11200 < count__11199)){
var i = chunk__11198.cljs$core$IIndexed$_nth$arity$2(null,i__11200);
app.colors.darken_color_in_db(i);

var G__11255 = seq__11197;
var G__11256 = chunk__11198;
var G__11257 = count__11199;
var G__11258 = (i__11200 + (1));
seq__11197 = G__11255;
chunk__11198 = G__11256;
count__11199 = G__11257;
i__11200 = G__11258;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11197);
if(temp__4425__auto__){
var seq__11197__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11197__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11197__$1);
var G__11259 = cljs.core.chunk_rest(seq__11197__$1);
var G__11260 = c__5791__auto__;
var G__11261 = cljs.core.count(c__5791__auto__);
var G__11262 = (0);
seq__11197 = G__11259;
chunk__11198 = G__11260;
count__11199 = G__11261;
i__11200 = G__11262;
continue;
} else {
var i = cljs.core.first(seq__11197__$1);
app.colors.darken_color_in_db(i);

var G__11263 = cljs.core.next(seq__11197__$1);
var G__11264 = null;
var G__11265 = (0);
var G__11266 = (0);
seq__11197 = G__11263;
chunk__11198 = G__11264;
count__11199 = G__11265;
i__11200 = G__11266;
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
var seq__11283_11299 = cljs.core.seq(app.db.contrastcolors);
var chunk__11284_11300 = null;
var count__11285_11301 = (0);
var i__11286_11302 = (0);
while(true){
if((i__11286_11302 < count__11285_11301)){
var i_11303 = chunk__11284_11300.cljs$core$IIndexed$_nth$arity$2(null,i__11286_11302);
app.colors.darken_color_in_db(i_11303);

var G__11304 = seq__11283_11299;
var G__11305 = chunk__11284_11300;
var G__11306 = count__11285_11301;
var G__11307 = (i__11286_11302 + (1));
seq__11283_11299 = G__11304;
chunk__11284_11300 = G__11305;
count__11285_11301 = G__11306;
i__11286_11302 = G__11307;
continue;
} else {
var temp__4425__auto___11308 = cljs.core.seq(seq__11283_11299);
if(temp__4425__auto___11308){
var seq__11283_11309__$1 = temp__4425__auto___11308;
if(cljs.core.chunked_seq_QMARK_(seq__11283_11309__$1)){
var c__5791__auto___11310 = cljs.core.chunk_first(seq__11283_11309__$1);
var G__11311 = cljs.core.chunk_rest(seq__11283_11309__$1);
var G__11312 = c__5791__auto___11310;
var G__11313 = cljs.core.count(c__5791__auto___11310);
var G__11314 = (0);
seq__11283_11299 = G__11311;
chunk__11284_11300 = G__11312;
count__11285_11301 = G__11313;
i__11286_11302 = G__11314;
continue;
} else {
var i_11315 = cljs.core.first(seq__11283_11309__$1);
app.colors.darken_color_in_db(i_11315);

var G__11316 = cljs.core.next(seq__11283_11309__$1);
var G__11317 = null;
var G__11318 = (0);
var G__11319 = (0);
seq__11283_11299 = G__11316;
chunk__11284_11300 = G__11317;
count__11285_11301 = G__11318;
i__11286_11302 = G__11319;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11287 = cljs.core.seq(app.db.contrastcolors);
var chunk__11288 = null;
var count__11289 = (0);
var i__11290 = (0);
while(true){
if((i__11290 < count__11289)){
var i = chunk__11288.cljs$core$IIndexed$_nth$arity$2(null,i__11290);
app.colors.darken_color_in_db(i);

var G__11320 = seq__11287;
var G__11321 = chunk__11288;
var G__11322 = count__11289;
var G__11323 = (i__11290 + (1));
seq__11287 = G__11320;
chunk__11288 = G__11321;
count__11289 = G__11322;
i__11290 = G__11323;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11287);
if(temp__4425__auto__){
var seq__11287__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11287__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11287__$1);
var G__11324 = cljs.core.chunk_rest(seq__11287__$1);
var G__11325 = c__5791__auto__;
var G__11326 = cljs.core.count(c__5791__auto__);
var G__11327 = (0);
seq__11287 = G__11324;
chunk__11288 = G__11325;
count__11289 = G__11326;
i__11290 = G__11327;
continue;
} else {
var i = cljs.core.first(seq__11287__$1);
app.colors.darken_color_in_db(i);

var G__11328 = cljs.core.next(seq__11287__$1);
var G__11329 = null;
var G__11330 = (0);
var G__11331 = (0);
seq__11287 = G__11328;
chunk__11288 = G__11329;
count__11289 = G__11330;
i__11290 = G__11331;
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
var seq__11291_11332 = cljs.core.seq(app.db.contrastcolors);
var chunk__11292_11333 = null;
var count__11293_11334 = (0);
var i__11294_11335 = (0);
while(true){
if((i__11294_11335 < count__11293_11334)){
var i_11336 = chunk__11292_11333.cljs$core$IIndexed$_nth$arity$2(null,i__11294_11335);
app.colors.lighten_color_in_db(i_11336);

var G__11337 = seq__11291_11332;
var G__11338 = chunk__11292_11333;
var G__11339 = count__11293_11334;
var G__11340 = (i__11294_11335 + (1));
seq__11291_11332 = G__11337;
chunk__11292_11333 = G__11338;
count__11293_11334 = G__11339;
i__11294_11335 = G__11340;
continue;
} else {
var temp__4425__auto___11341 = cljs.core.seq(seq__11291_11332);
if(temp__4425__auto___11341){
var seq__11291_11342__$1 = temp__4425__auto___11341;
if(cljs.core.chunked_seq_QMARK_(seq__11291_11342__$1)){
var c__5791__auto___11343 = cljs.core.chunk_first(seq__11291_11342__$1);
var G__11344 = cljs.core.chunk_rest(seq__11291_11342__$1);
var G__11345 = c__5791__auto___11343;
var G__11346 = cljs.core.count(c__5791__auto___11343);
var G__11347 = (0);
seq__11291_11332 = G__11344;
chunk__11292_11333 = G__11345;
count__11293_11334 = G__11346;
i__11294_11335 = G__11347;
continue;
} else {
var i_11348 = cljs.core.first(seq__11291_11342__$1);
app.colors.lighten_color_in_db(i_11348);

var G__11349 = cljs.core.next(seq__11291_11342__$1);
var G__11350 = null;
var G__11351 = (0);
var G__11352 = (0);
seq__11291_11332 = G__11349;
chunk__11292_11333 = G__11350;
count__11293_11334 = G__11351;
i__11294_11335 = G__11352;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11295 = cljs.core.seq(app.db.contrastcolors);
var chunk__11296 = null;
var count__11297 = (0);
var i__11298 = (0);
while(true){
if((i__11298 < count__11297)){
var i = chunk__11296.cljs$core$IIndexed$_nth$arity$2(null,i__11298);
app.colors.lighten_color_in_db(i);

var G__11353 = seq__11295;
var G__11354 = chunk__11296;
var G__11355 = count__11297;
var G__11356 = (i__11298 + (1));
seq__11295 = G__11353;
chunk__11296 = G__11354;
count__11297 = G__11355;
i__11298 = G__11356;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11295);
if(temp__4425__auto__){
var seq__11295__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11295__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11295__$1);
var G__11357 = cljs.core.chunk_rest(seq__11295__$1);
var G__11358 = c__5791__auto__;
var G__11359 = cljs.core.count(c__5791__auto__);
var G__11360 = (0);
seq__11295 = G__11357;
chunk__11296 = G__11358;
count__11297 = G__11359;
i__11298 = G__11360;
continue;
} else {
var i = cljs.core.first(seq__11295__$1);
app.colors.lighten_color_in_db(i);

var G__11361 = cljs.core.next(seq__11295__$1);
var G__11362 = null;
var G__11363 = (0);
var G__11364 = (0);
seq__11295 = G__11361;
chunk__11296 = G__11362;
count__11297 = G__11363;
i__11298 = G__11364;
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
var distance = (function (){var G__11367 = ((360) / length);
return Math.floor(G__11367);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11365_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__11365_SHARP_),(360));
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
return (function (p1__11368_SHARP_){
return app.colors.rgbToHex(p1__11368_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11369_SHARP_){
return app.colors.clamped_rgb_vec(p1__11369_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11370_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11370_SHARP_], null));
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
var seq__11377 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11378 = null;
var count__11379 = (0);
var i__11380 = (0);
while(true){
if((i__11380 < count__11379)){
var vec__11381 = chunk__11378.cljs$core$IIndexed$_nth$arity$2(null,i__11380);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11381,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11381,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11383 = seq__11377;
var G__11384 = chunk__11378;
var G__11385 = count__11379;
var G__11386 = (i__11380 + (1));
seq__11377 = G__11383;
chunk__11378 = G__11384;
count__11379 = G__11385;
i__11380 = G__11386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11377);
if(temp__4425__auto__){
var seq__11377__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11377__$1)){
var c__5791__auto__ = cljs.core.chunk_first(seq__11377__$1);
var G__11387 = cljs.core.chunk_rest(seq__11377__$1);
var G__11388 = c__5791__auto__;
var G__11389 = cljs.core.count(c__5791__auto__);
var G__11390 = (0);
seq__11377 = G__11387;
chunk__11378 = G__11388;
count__11379 = G__11389;
i__11380 = G__11390;
continue;
} else {
var vec__11382 = cljs.core.first(seq__11377__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11391 = cljs.core.next(seq__11377__$1);
var G__11392 = null;
var G__11393 = (0);
var G__11394 = (0);
seq__11377 = G__11391;
chunk__11378 = G__11392;
count__11379 = G__11393;
i__11380 = G__11394;
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
