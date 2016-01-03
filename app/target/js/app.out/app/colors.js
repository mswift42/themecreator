// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11098_SHARP_){
return (p1__11098_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11099_SHARP_){
return ((p1__11099_SHARP_ < (0))) || ((p1__11099_SHARP_ > (255)));
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11100_SHARP_){
return app.colors.clamp(p1__11100_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11102 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11108 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11103_SHARP_){
return (p1__11103_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11104_SHARP_){
if((p1__11104_SHARP_ > 0.04045)){
var G__11109 = ((p1__11104_SHARP_ + 0.055) / 1.055);
var G__11110 = 2.4;
return Math.pow(G__11109,G__11110);
} else {
return (p1__11104_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11115 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11111_SHARP_){
if((p1__11111_SHARP_ > 0.008856)){
var G__11116 = p1__11111_SHARP_;
var G__11117 = ((1) / (3));
return Math.pow(G__11116,G__11117);
} else {
return ((p1__11111_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(2),null);
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
var vec__11120 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11120,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11121 = ((a * a) + (b * b));
return Math.sqrt(G__11121);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11123 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11125 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11125,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11125,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11133 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11126_SHARP_){
return (p1__11126_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11133,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11133,x,y,z,r,g,b,rgb){
return (function (p1__11127_SHARP_){
var G__11134 = (p1__11127_SHARP_ * (255));
return Math.round(G__11134);
});})(vec__11133,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11133,x,y,z,r,g,b,rgb){
return (function (p1__11128_SHARP_){
if((p1__11128_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11135 = p1__11128_SHARP_;
var G__11136 = ((1) / 2.4);
return Math.pow(G__11135,G__11136);
})()) - 0.055);
} else {
return (p1__11128_SHARP_ * 12.92);
}
});})(vec__11133,x,y,z,r,g,b,rgb))
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
var args11137 = [];
var len__6044__auto___11145 = arguments.length;
var i__6045__auto___11146 = (0);
while(true){
if((i__6045__auto___11146 < len__6044__auto___11145)){
args11137.push((arguments[i__6045__auto___11146]));

var G__11147 = (i__6045__auto___11146 + (1));
i__6045__auto___11146 = G__11147;
continue;
} else {
}
break;
}

var G__11139 = args11137.length;
switch (G__11139) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11137.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11142 = (function (){var G__11143 = goog.color.hexToRgb(colorstring);
var G__11144 = factor;
return goog.color.darken(G__11143,G__11144);
})();
return goog.color.rgbArrayToHex(G__11142);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var args11149 = [];
var len__6044__auto___11157 = arguments.length;
var i__6045__auto___11158 = (0);
while(true){
if((i__6045__auto___11158 < len__6044__auto___11157)){
args11149.push((arguments[i__6045__auto___11158]));

var G__11159 = (i__6045__auto___11158 + (1));
i__6045__auto___11158 = G__11159;
continue;
} else {
}
break;
}

var G__11151 = args11149.length;
switch (G__11151) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11149.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11154 = (function (){var G__11155 = goog.color.hexToRgb(colorstring);
var G__11156 = factor;
return goog.color.lighten(G__11155,G__11156);
})();
return goog.color.rgbArrayToHex(G__11154);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11162 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11164 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11164) : color.call(null,G__11164));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11166 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11166) : color.call(null,G__11166));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11183_11199 = cljs.core.seq(app.db.contrastcolors);
var chunk__11184_11200 = null;
var count__11185_11201 = (0);
var i__11186_11202 = (0);
while(true){
if((i__11186_11202 < count__11185_11201)){
var i_11203 = chunk__11184_11200.cljs$core$IIndexed$_nth$arity$2(null,i__11186_11202);
app.colors.lighten_color_in_db(i_11203);

var G__11204 = seq__11183_11199;
var G__11205 = chunk__11184_11200;
var G__11206 = count__11185_11201;
var G__11207 = (i__11186_11202 + (1));
seq__11183_11199 = G__11204;
chunk__11184_11200 = G__11205;
count__11185_11201 = G__11206;
i__11186_11202 = G__11207;
continue;
} else {
var temp__4425__auto___11208 = cljs.core.seq(seq__11183_11199);
if(temp__4425__auto___11208){
var seq__11183_11209__$1 = temp__4425__auto___11208;
if(cljs.core.chunked_seq_QMARK_(seq__11183_11209__$1)){
var c__5789__auto___11210 = cljs.core.chunk_first(seq__11183_11209__$1);
var G__11211 = cljs.core.chunk_rest(seq__11183_11209__$1);
var G__11212 = c__5789__auto___11210;
var G__11213 = cljs.core.count(c__5789__auto___11210);
var G__11214 = (0);
seq__11183_11199 = G__11211;
chunk__11184_11200 = G__11212;
count__11185_11201 = G__11213;
i__11186_11202 = G__11214;
continue;
} else {
var i_11215 = cljs.core.first(seq__11183_11209__$1);
app.colors.lighten_color_in_db(i_11215);

var G__11216 = cljs.core.next(seq__11183_11209__$1);
var G__11217 = null;
var G__11218 = (0);
var G__11219 = (0);
seq__11183_11199 = G__11216;
chunk__11184_11200 = G__11217;
count__11185_11201 = G__11218;
i__11186_11202 = G__11219;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11187 = cljs.core.seq(app.db.contrastcolors);
var chunk__11188 = null;
var count__11189 = (0);
var i__11190 = (0);
while(true){
if((i__11190 < count__11189)){
var i = chunk__11188.cljs$core$IIndexed$_nth$arity$2(null,i__11190);
app.colors.lighten_color_in_db(i);

var G__11220 = seq__11187;
var G__11221 = chunk__11188;
var G__11222 = count__11189;
var G__11223 = (i__11190 + (1));
seq__11187 = G__11220;
chunk__11188 = G__11221;
count__11189 = G__11222;
i__11190 = G__11223;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11187);
if(temp__4425__auto__){
var seq__11187__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11187__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11187__$1);
var G__11224 = cljs.core.chunk_rest(seq__11187__$1);
var G__11225 = c__5789__auto__;
var G__11226 = cljs.core.count(c__5789__auto__);
var G__11227 = (0);
seq__11187 = G__11224;
chunk__11188 = G__11225;
count__11189 = G__11226;
i__11190 = G__11227;
continue;
} else {
var i = cljs.core.first(seq__11187__$1);
app.colors.lighten_color_in_db(i);

var G__11228 = cljs.core.next(seq__11187__$1);
var G__11229 = null;
var G__11230 = (0);
var G__11231 = (0);
seq__11187 = G__11228;
chunk__11188 = G__11229;
count__11189 = G__11230;
i__11190 = G__11231;
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
var seq__11191_11232 = cljs.core.seq(app.db.contrastcolors);
var chunk__11192_11233 = null;
var count__11193_11234 = (0);
var i__11194_11235 = (0);
while(true){
if((i__11194_11235 < count__11193_11234)){
var i_11236 = chunk__11192_11233.cljs$core$IIndexed$_nth$arity$2(null,i__11194_11235);
app.colors.darken_color_in_db(i_11236);

var G__11237 = seq__11191_11232;
var G__11238 = chunk__11192_11233;
var G__11239 = count__11193_11234;
var G__11240 = (i__11194_11235 + (1));
seq__11191_11232 = G__11237;
chunk__11192_11233 = G__11238;
count__11193_11234 = G__11239;
i__11194_11235 = G__11240;
continue;
} else {
var temp__4425__auto___11241 = cljs.core.seq(seq__11191_11232);
if(temp__4425__auto___11241){
var seq__11191_11242__$1 = temp__4425__auto___11241;
if(cljs.core.chunked_seq_QMARK_(seq__11191_11242__$1)){
var c__5789__auto___11243 = cljs.core.chunk_first(seq__11191_11242__$1);
var G__11244 = cljs.core.chunk_rest(seq__11191_11242__$1);
var G__11245 = c__5789__auto___11243;
var G__11246 = cljs.core.count(c__5789__auto___11243);
var G__11247 = (0);
seq__11191_11232 = G__11244;
chunk__11192_11233 = G__11245;
count__11193_11234 = G__11246;
i__11194_11235 = G__11247;
continue;
} else {
var i_11248 = cljs.core.first(seq__11191_11242__$1);
app.colors.darken_color_in_db(i_11248);

var G__11249 = cljs.core.next(seq__11191_11242__$1);
var G__11250 = null;
var G__11251 = (0);
var G__11252 = (0);
seq__11191_11232 = G__11249;
chunk__11192_11233 = G__11250;
count__11193_11234 = G__11251;
i__11194_11235 = G__11252;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11195 = cljs.core.seq(app.db.contrastcolors);
var chunk__11196 = null;
var count__11197 = (0);
var i__11198 = (0);
while(true){
if((i__11198 < count__11197)){
var i = chunk__11196.cljs$core$IIndexed$_nth$arity$2(null,i__11198);
app.colors.darken_color_in_db(i);

var G__11253 = seq__11195;
var G__11254 = chunk__11196;
var G__11255 = count__11197;
var G__11256 = (i__11198 + (1));
seq__11195 = G__11253;
chunk__11196 = G__11254;
count__11197 = G__11255;
i__11198 = G__11256;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11195);
if(temp__4425__auto__){
var seq__11195__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11195__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11195__$1);
var G__11257 = cljs.core.chunk_rest(seq__11195__$1);
var G__11258 = c__5789__auto__;
var G__11259 = cljs.core.count(c__5789__auto__);
var G__11260 = (0);
seq__11195 = G__11257;
chunk__11196 = G__11258;
count__11197 = G__11259;
i__11198 = G__11260;
continue;
} else {
var i = cljs.core.first(seq__11195__$1);
app.colors.darken_color_in_db(i);

var G__11261 = cljs.core.next(seq__11195__$1);
var G__11262 = null;
var G__11263 = (0);
var G__11264 = (0);
seq__11195 = G__11261;
chunk__11196 = G__11262;
count__11197 = G__11263;
i__11198 = G__11264;
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
var seq__11281_11297 = cljs.core.seq(app.db.contrastcolors);
var chunk__11282_11298 = null;
var count__11283_11299 = (0);
var i__11284_11300 = (0);
while(true){
if((i__11284_11300 < count__11283_11299)){
var i_11301 = chunk__11282_11298.cljs$core$IIndexed$_nth$arity$2(null,i__11284_11300);
app.colors.darken_color_in_db(i_11301);

var G__11302 = seq__11281_11297;
var G__11303 = chunk__11282_11298;
var G__11304 = count__11283_11299;
var G__11305 = (i__11284_11300 + (1));
seq__11281_11297 = G__11302;
chunk__11282_11298 = G__11303;
count__11283_11299 = G__11304;
i__11284_11300 = G__11305;
continue;
} else {
var temp__4425__auto___11306 = cljs.core.seq(seq__11281_11297);
if(temp__4425__auto___11306){
var seq__11281_11307__$1 = temp__4425__auto___11306;
if(cljs.core.chunked_seq_QMARK_(seq__11281_11307__$1)){
var c__5789__auto___11308 = cljs.core.chunk_first(seq__11281_11307__$1);
var G__11309 = cljs.core.chunk_rest(seq__11281_11307__$1);
var G__11310 = c__5789__auto___11308;
var G__11311 = cljs.core.count(c__5789__auto___11308);
var G__11312 = (0);
seq__11281_11297 = G__11309;
chunk__11282_11298 = G__11310;
count__11283_11299 = G__11311;
i__11284_11300 = G__11312;
continue;
} else {
var i_11313 = cljs.core.first(seq__11281_11307__$1);
app.colors.darken_color_in_db(i_11313);

var G__11314 = cljs.core.next(seq__11281_11307__$1);
var G__11315 = null;
var G__11316 = (0);
var G__11317 = (0);
seq__11281_11297 = G__11314;
chunk__11282_11298 = G__11315;
count__11283_11299 = G__11316;
i__11284_11300 = G__11317;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11285 = cljs.core.seq(app.db.contrastcolors);
var chunk__11286 = null;
var count__11287 = (0);
var i__11288 = (0);
while(true){
if((i__11288 < count__11287)){
var i = chunk__11286.cljs$core$IIndexed$_nth$arity$2(null,i__11288);
app.colors.darken_color_in_db(i);

var G__11318 = seq__11285;
var G__11319 = chunk__11286;
var G__11320 = count__11287;
var G__11321 = (i__11288 + (1));
seq__11285 = G__11318;
chunk__11286 = G__11319;
count__11287 = G__11320;
i__11288 = G__11321;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11285);
if(temp__4425__auto__){
var seq__11285__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11285__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11285__$1);
var G__11322 = cljs.core.chunk_rest(seq__11285__$1);
var G__11323 = c__5789__auto__;
var G__11324 = cljs.core.count(c__5789__auto__);
var G__11325 = (0);
seq__11285 = G__11322;
chunk__11286 = G__11323;
count__11287 = G__11324;
i__11288 = G__11325;
continue;
} else {
var i = cljs.core.first(seq__11285__$1);
app.colors.darken_color_in_db(i);

var G__11326 = cljs.core.next(seq__11285__$1);
var G__11327 = null;
var G__11328 = (0);
var G__11329 = (0);
seq__11285 = G__11326;
chunk__11286 = G__11327;
count__11287 = G__11328;
i__11288 = G__11329;
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
var seq__11289_11330 = cljs.core.seq(app.db.contrastcolors);
var chunk__11290_11331 = null;
var count__11291_11332 = (0);
var i__11292_11333 = (0);
while(true){
if((i__11292_11333 < count__11291_11332)){
var i_11334 = chunk__11290_11331.cljs$core$IIndexed$_nth$arity$2(null,i__11292_11333);
app.colors.lighten_color_in_db(i_11334);

var G__11335 = seq__11289_11330;
var G__11336 = chunk__11290_11331;
var G__11337 = count__11291_11332;
var G__11338 = (i__11292_11333 + (1));
seq__11289_11330 = G__11335;
chunk__11290_11331 = G__11336;
count__11291_11332 = G__11337;
i__11292_11333 = G__11338;
continue;
} else {
var temp__4425__auto___11339 = cljs.core.seq(seq__11289_11330);
if(temp__4425__auto___11339){
var seq__11289_11340__$1 = temp__4425__auto___11339;
if(cljs.core.chunked_seq_QMARK_(seq__11289_11340__$1)){
var c__5789__auto___11341 = cljs.core.chunk_first(seq__11289_11340__$1);
var G__11342 = cljs.core.chunk_rest(seq__11289_11340__$1);
var G__11343 = c__5789__auto___11341;
var G__11344 = cljs.core.count(c__5789__auto___11341);
var G__11345 = (0);
seq__11289_11330 = G__11342;
chunk__11290_11331 = G__11343;
count__11291_11332 = G__11344;
i__11292_11333 = G__11345;
continue;
} else {
var i_11346 = cljs.core.first(seq__11289_11340__$1);
app.colors.lighten_color_in_db(i_11346);

var G__11347 = cljs.core.next(seq__11289_11340__$1);
var G__11348 = null;
var G__11349 = (0);
var G__11350 = (0);
seq__11289_11330 = G__11347;
chunk__11290_11331 = G__11348;
count__11291_11332 = G__11349;
i__11292_11333 = G__11350;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11293 = cljs.core.seq(app.db.contrastcolors);
var chunk__11294 = null;
var count__11295 = (0);
var i__11296 = (0);
while(true){
if((i__11296 < count__11295)){
var i = chunk__11294.cljs$core$IIndexed$_nth$arity$2(null,i__11296);
app.colors.lighten_color_in_db(i);

var G__11351 = seq__11293;
var G__11352 = chunk__11294;
var G__11353 = count__11295;
var G__11354 = (i__11296 + (1));
seq__11293 = G__11351;
chunk__11294 = G__11352;
count__11295 = G__11353;
i__11296 = G__11354;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11293);
if(temp__4425__auto__){
var seq__11293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11293__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11293__$1);
var G__11355 = cljs.core.chunk_rest(seq__11293__$1);
var G__11356 = c__5789__auto__;
var G__11357 = cljs.core.count(c__5789__auto__);
var G__11358 = (0);
seq__11293 = G__11355;
chunk__11294 = G__11356;
count__11295 = G__11357;
i__11296 = G__11358;
continue;
} else {
var i = cljs.core.first(seq__11293__$1);
app.colors.lighten_color_in_db(i);

var G__11359 = cljs.core.next(seq__11293__$1);
var G__11360 = null;
var G__11361 = (0);
var G__11362 = (0);
seq__11293 = G__11359;
chunk__11294 = G__11360;
count__11295 = G__11361;
i__11296 = G__11362;
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
var distance = (function (){var G__11365 = ((360) / length);
return Math.floor(G__11365);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11363_SHARP_){
return cljs.core.mod((distance + p1__11363_SHARP_),(360));
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
return (function (p1__11366_SHARP_){
return app.colors.rgbToHex(p1__11366_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11367_SHARP_){
return app.colors.clamped_rgb_vec(p1__11367_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11368_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11368_SHARP_], null));
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
var seq__11375 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11376 = null;
var count__11377 = (0);
var i__11378 = (0);
while(true){
if((i__11378 < count__11377)){
var vec__11379 = chunk__11376.cljs$core$IIndexed$_nth$arity$2(null,i__11378);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11379,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11379,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11381 = seq__11375;
var G__11382 = chunk__11376;
var G__11383 = count__11377;
var G__11384 = (i__11378 + (1));
seq__11375 = G__11381;
chunk__11376 = G__11382;
count__11377 = G__11383;
i__11378 = G__11384;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11375);
if(temp__4425__auto__){
var seq__11375__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11375__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11375__$1);
var G__11385 = cljs.core.chunk_rest(seq__11375__$1);
var G__11386 = c__5789__auto__;
var G__11387 = cljs.core.count(c__5789__auto__);
var G__11388 = (0);
seq__11375 = G__11385;
chunk__11376 = G__11386;
count__11377 = G__11387;
i__11378 = G__11388;
continue;
} else {
var vec__11380 = cljs.core.first(seq__11375__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11380,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11380,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11389 = cljs.core.next(seq__11375__$1);
var G__11390 = null;
var G__11391 = (0);
var G__11392 = (0);
seq__11375 = G__11389;
chunk__11376 = G__11390;
count__11377 = G__11391;
i__11378 = G__11392;
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
var seq__11401 = cljs.core.seq(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(resultlist,targetlist));
var chunk__11402 = null;
var count__11403 = (0);
var i__11404 = (0);
while(true){
if((i__11404 < count__11403)){
var vec__11405 = chunk__11402.cljs$core$IIndexed$_nth$arity$2(null,i__11404);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11405,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11405,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (){var G__11406 = (t - r);
return Math.abs(G__11406);
})() <= limit)], 0));

var G__11409 = seq__11401;
var G__11410 = chunk__11402;
var G__11411 = count__11403;
var G__11412 = (i__11404 + (1));
seq__11401 = G__11409;
chunk__11402 = G__11410;
count__11403 = G__11411;
i__11404 = G__11412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11401);
if(temp__4425__auto__){
var seq__11401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11401__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__11401__$1);
var G__11413 = cljs.core.chunk_rest(seq__11401__$1);
var G__11414 = c__5789__auto__;
var G__11415 = cljs.core.count(c__5789__auto__);
var G__11416 = (0);
seq__11401 = G__11413;
chunk__11402 = G__11414;
count__11403 = G__11415;
i__11404 = G__11416;
continue;
} else {
var vec__11407 = cljs.core.first(seq__11401__$1);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (){var G__11408 = (t - r);
return Math.abs(G__11408);
})() <= limit)], 0));

var G__11417 = cljs.core.next(seq__11401__$1);
var G__11418 = null;
var G__11419 = (0);
var G__11420 = (0);
seq__11401 = G__11417;
chunk__11402 = G__11418;
count__11403 = G__11419;
i__11404 = G__11420;
continue;
}
} else {
return null;
}
}
break;
}
});
