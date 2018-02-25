// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11114_SHARP_){
return (p1__11114_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_((function (p1__11115_SHARP_){
return ((p1__11115_SHARP_ < (0))) || ((p1__11115_SHARP_ > (255)));
}),rgbcolor);
});
/**
 * clamp 'normalizes' rgb values. if the given value is > 255,
 * clamp returns 255, if it is < 0, it returns 0.
 */
app.colors.clamp = (function app$colors$clamp(val){
var x__5321__auto__ = (function (){var x__5328__auto__ = val;
var y__5329__auto__ = (255);
return ((x__5328__auto__ < y__5329__auto__) ? x__5328__auto__ : y__5329__auto__);
})();
var y__5322__auto__ = (0);
return ((x__5321__auto__ > y__5322__auto__) ? x__5321__auto__ : y__5322__auto__);
});
/**
 * clamped-rgb-vec returns a vector of clamped rgb values.
 */
app.colors.clamped_rgb_vec = (function app$colors$clamped_rgb_vec(rgbvector){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11116_SHARP_){
return app.colors.clamp(p1__11116_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__11118 = rgbcolor;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__11124 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11119_SHARP_){
return (p1__11119_SHARP_ * (100));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11120_SHARP_){
if((p1__11120_SHARP_ > 0.04045)){
var G__11125 = ((p1__11120_SHARP_ + 0.055) / 1.055);
var G__11126 = 2.4;
return Math.pow(G__11125,G__11126);
} else {
return (p1__11120_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11124,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11124,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11124,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__11131 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11127_SHARP_){
if((p1__11127_SHARP_ > 0.008856)){
var G__11132 = p1__11127_SHARP_;
var G__11133 = ((1) / (3));
return Math.pow(G__11132,G__11133);
} else {
return ((p1__11127_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11131,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11131,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11131,(2),null);
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
var vec__11136 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,(2),null);
var h = app.colors.radToDegrees(Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(function (){var G__11137 = ((a * a) + (b * b));
return Math.sqrt(G__11137);
})(),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__11139 = lchcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11139,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__11141 = labcolor;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11141,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11141,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11141,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11141,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__11141,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__11149 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__11142_SHARP_){
return (p1__11142_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11149,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11149,x,y,z,r,g,b,rgb){
return (function (p1__11143_SHARP_){
var G__11150 = (p1__11143_SHARP_ * (255));
return Math.round(G__11150);
});})(vec__11149,x,y,z,r,g,b,rgb))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__11149,x,y,z,r,g,b,rgb){
return (function (p1__11144_SHARP_){
if((p1__11144_SHARP_ > 0.0031308)){
return ((1.055 * (function (){var G__11151 = p1__11144_SHARP_;
var G__11152 = ((1) / 2.4);
return Math.pow(G__11151,G__11152);
})()) - 0.055);
} else {
return (p1__11144_SHARP_ * 12.92);
}
});})(vec__11149,x,y,z,r,g,b,rgb))
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
var args11153 = [];
var len__6048__auto___11161 = arguments.length;
var i__6049__auto___11162 = (0);
while(true){
if((i__6049__auto___11162 < len__6048__auto___11161)){
args11153.push((arguments[i__6049__auto___11162]));

var G__11163 = (i__6049__auto___11162 + (1));
i__6049__auto___11162 = G__11163;
continue;
} else {
}
break;
}

var G__11155 = args11153.length;
switch (G__11155) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11153.length)].join('')));

}
});

app.colors.darken.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.darken.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11158 = (function (){var G__11159 = goog.color.hexToRgb(colorstring);
var G__11160 = factor;
return goog.color.darken(G__11159,G__11160);
})();
return goog.color.rgbArrayToHex(G__11158);
});

app.colors.darken.cljs$lang$maxFixedArity = 2;
/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var args11165 = [];
var len__6048__auto___11173 = arguments.length;
var i__6049__auto___11174 = (0);
while(true){
if((i__6049__auto___11174 < len__6048__auto___11173)){
args11165.push((arguments[i__6049__auto___11174]));

var G__11175 = (i__6049__auto___11174 + (1));
i__6049__auto___11174 = G__11175;
continue;
} else {
}
break;
}

var G__11167 = args11165.length;
switch (G__11167) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11165.length)].join('')));

}
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$1 = (function (colorstring){
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2(colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
var G__11170 = (function (){var G__11171 = goog.color.hexToRgb(colorstring);
var G__11172 = factor;
return goog.color.lighten(G__11171,G__11172);
})();
return goog.color.rgbArrayToHex(G__11170);
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;
/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__11178 = goog.color.hexToRgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11178,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11178,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11178,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.lighten.cljs$core$IFn$_invoke$arity$2((function (){var G__11180 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11180) : color.call(null,G__11180));
})(),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,color,app.colors.darken.cljs$core$IFn$_invoke$arity$2((function (){var G__11182 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__11182) : color.call(null,G__11182));
})(),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_(cljs.core.cst$kw$mainbg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db)))))){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)))){
var seq__11199_11215 = cljs.core.seq(app.db.contrastcolors);
var chunk__11200_11216 = null;
var count__11201_11217 = (0);
var i__11202_11218 = (0);
while(true){
if((i__11202_11218 < count__11201_11217)){
var i_11219 = chunk__11200_11216.cljs$core$IIndexed$_nth$arity$2(null,i__11202_11218);
app.colors.lighten_color_in_db(i_11219);

var G__11220 = seq__11199_11215;
var G__11221 = chunk__11200_11216;
var G__11222 = count__11201_11217;
var G__11223 = (i__11202_11218 + (1));
seq__11199_11215 = G__11220;
chunk__11200_11216 = G__11221;
count__11201_11217 = G__11222;
i__11202_11218 = G__11223;
continue;
} else {
var temp__4657__auto___11224 = cljs.core.seq(seq__11199_11215);
if(temp__4657__auto___11224){
var seq__11199_11225__$1 = temp__4657__auto___11224;
if(cljs.core.chunked_seq_QMARK_(seq__11199_11225__$1)){
var c__5793__auto___11226 = cljs.core.chunk_first(seq__11199_11225__$1);
var G__11227 = cljs.core.chunk_rest(seq__11199_11225__$1);
var G__11228 = c__5793__auto___11226;
var G__11229 = cljs.core.count(c__5793__auto___11226);
var G__11230 = (0);
seq__11199_11215 = G__11227;
chunk__11200_11216 = G__11228;
count__11201_11217 = G__11229;
i__11202_11218 = G__11230;
continue;
} else {
var i_11231 = cljs.core.first(seq__11199_11225__$1);
app.colors.lighten_color_in_db(i_11231);

var G__11232 = cljs.core.next(seq__11199_11225__$1);
var G__11233 = null;
var G__11234 = (0);
var G__11235 = (0);
seq__11199_11215 = G__11232;
chunk__11200_11216 = G__11233;
count__11201_11217 = G__11234;
i__11202_11218 = G__11235;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11203 = cljs.core.seq(app.db.contrastcolors);
var chunk__11204 = null;
var count__11205 = (0);
var i__11206 = (0);
while(true){
if((i__11206 < count__11205)){
var i = chunk__11204.cljs$core$IIndexed$_nth$arity$2(null,i__11206);
app.colors.lighten_color_in_db(i);

var G__11236 = seq__11203;
var G__11237 = chunk__11204;
var G__11238 = count__11205;
var G__11239 = (i__11206 + (1));
seq__11203 = G__11236;
chunk__11204 = G__11237;
count__11205 = G__11238;
i__11206 = G__11239;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11203);
if(temp__4657__auto__){
var seq__11203__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11203__$1)){
var c__5793__auto__ = cljs.core.chunk_first(seq__11203__$1);
var G__11240 = cljs.core.chunk_rest(seq__11203__$1);
var G__11241 = c__5793__auto__;
var G__11242 = cljs.core.count(c__5793__auto__);
var G__11243 = (0);
seq__11203 = G__11240;
chunk__11204 = G__11241;
count__11205 = G__11242;
i__11206 = G__11243;
continue;
} else {
var i = cljs.core.first(seq__11203__$1);
app.colors.lighten_color_in_db(i);

var G__11244 = cljs.core.next(seq__11203__$1);
var G__11245 = null;
var G__11246 = (0);
var G__11247 = (0);
seq__11203 = G__11244;
chunk__11204 = G__11245;
count__11205 = G__11246;
i__11206 = G__11247;
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
var seq__11207_11248 = cljs.core.seq(app.db.contrastcolors);
var chunk__11208_11249 = null;
var count__11209_11250 = (0);
var i__11210_11251 = (0);
while(true){
if((i__11210_11251 < count__11209_11250)){
var i_11252 = chunk__11208_11249.cljs$core$IIndexed$_nth$arity$2(null,i__11210_11251);
app.colors.darken_color_in_db(i_11252);

var G__11253 = seq__11207_11248;
var G__11254 = chunk__11208_11249;
var G__11255 = count__11209_11250;
var G__11256 = (i__11210_11251 + (1));
seq__11207_11248 = G__11253;
chunk__11208_11249 = G__11254;
count__11209_11250 = G__11255;
i__11210_11251 = G__11256;
continue;
} else {
var temp__4657__auto___11257 = cljs.core.seq(seq__11207_11248);
if(temp__4657__auto___11257){
var seq__11207_11258__$1 = temp__4657__auto___11257;
if(cljs.core.chunked_seq_QMARK_(seq__11207_11258__$1)){
var c__5793__auto___11259 = cljs.core.chunk_first(seq__11207_11258__$1);
var G__11260 = cljs.core.chunk_rest(seq__11207_11258__$1);
var G__11261 = c__5793__auto___11259;
var G__11262 = cljs.core.count(c__5793__auto___11259);
var G__11263 = (0);
seq__11207_11248 = G__11260;
chunk__11208_11249 = G__11261;
count__11209_11250 = G__11262;
i__11210_11251 = G__11263;
continue;
} else {
var i_11264 = cljs.core.first(seq__11207_11258__$1);
app.colors.darken_color_in_db(i_11264);

var G__11265 = cljs.core.next(seq__11207_11258__$1);
var G__11266 = null;
var G__11267 = (0);
var G__11268 = (0);
seq__11207_11248 = G__11265;
chunk__11208_11249 = G__11266;
count__11209_11250 = G__11267;
i__11210_11251 = G__11268;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11211 = cljs.core.seq(app.db.contrastcolors);
var chunk__11212 = null;
var count__11213 = (0);
var i__11214 = (0);
while(true){
if((i__11214 < count__11213)){
var i = chunk__11212.cljs$core$IIndexed$_nth$arity$2(null,i__11214);
app.colors.darken_color_in_db(i);

var G__11269 = seq__11211;
var G__11270 = chunk__11212;
var G__11271 = count__11213;
var G__11272 = (i__11214 + (1));
seq__11211 = G__11269;
chunk__11212 = G__11270;
count__11213 = G__11271;
i__11214 = G__11272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11211);
if(temp__4657__auto__){
var seq__11211__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11211__$1)){
var c__5793__auto__ = cljs.core.chunk_first(seq__11211__$1);
var G__11273 = cljs.core.chunk_rest(seq__11211__$1);
var G__11274 = c__5793__auto__;
var G__11275 = cljs.core.count(c__5793__auto__);
var G__11276 = (0);
seq__11211 = G__11273;
chunk__11212 = G__11274;
count__11213 = G__11275;
i__11214 = G__11276;
continue;
} else {
var i = cljs.core.first(seq__11211__$1);
app.colors.darken_color_in_db(i);

var G__11277 = cljs.core.next(seq__11211__$1);
var G__11278 = null;
var G__11279 = (0);
var G__11280 = (0);
seq__11211 = G__11277;
chunk__11212 = G__11278;
count__11213 = G__11279;
i__11214 = G__11280;
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
var seq__11297_11313 = cljs.core.seq(app.db.contrastcolors);
var chunk__11298_11314 = null;
var count__11299_11315 = (0);
var i__11300_11316 = (0);
while(true){
if((i__11300_11316 < count__11299_11315)){
var i_11317 = chunk__11298_11314.cljs$core$IIndexed$_nth$arity$2(null,i__11300_11316);
app.colors.darken_color_in_db(i_11317);

var G__11318 = seq__11297_11313;
var G__11319 = chunk__11298_11314;
var G__11320 = count__11299_11315;
var G__11321 = (i__11300_11316 + (1));
seq__11297_11313 = G__11318;
chunk__11298_11314 = G__11319;
count__11299_11315 = G__11320;
i__11300_11316 = G__11321;
continue;
} else {
var temp__4657__auto___11322 = cljs.core.seq(seq__11297_11313);
if(temp__4657__auto___11322){
var seq__11297_11323__$1 = temp__4657__auto___11322;
if(cljs.core.chunked_seq_QMARK_(seq__11297_11323__$1)){
var c__5793__auto___11324 = cljs.core.chunk_first(seq__11297_11323__$1);
var G__11325 = cljs.core.chunk_rest(seq__11297_11323__$1);
var G__11326 = c__5793__auto___11324;
var G__11327 = cljs.core.count(c__5793__auto___11324);
var G__11328 = (0);
seq__11297_11313 = G__11325;
chunk__11298_11314 = G__11326;
count__11299_11315 = G__11327;
i__11300_11316 = G__11328;
continue;
} else {
var i_11329 = cljs.core.first(seq__11297_11323__$1);
app.colors.darken_color_in_db(i_11329);

var G__11330 = cljs.core.next(seq__11297_11323__$1);
var G__11331 = null;
var G__11332 = (0);
var G__11333 = (0);
seq__11297_11313 = G__11330;
chunk__11298_11314 = G__11331;
count__11299_11315 = G__11332;
i__11300_11316 = G__11333;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11301 = cljs.core.seq(app.db.contrastcolors);
var chunk__11302 = null;
var count__11303 = (0);
var i__11304 = (0);
while(true){
if((i__11304 < count__11303)){
var i = chunk__11302.cljs$core$IIndexed$_nth$arity$2(null,i__11304);
app.colors.darken_color_in_db(i);

var G__11334 = seq__11301;
var G__11335 = chunk__11302;
var G__11336 = count__11303;
var G__11337 = (i__11304 + (1));
seq__11301 = G__11334;
chunk__11302 = G__11335;
count__11303 = G__11336;
i__11304 = G__11337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11301);
if(temp__4657__auto__){
var seq__11301__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11301__$1)){
var c__5793__auto__ = cljs.core.chunk_first(seq__11301__$1);
var G__11338 = cljs.core.chunk_rest(seq__11301__$1);
var G__11339 = c__5793__auto__;
var G__11340 = cljs.core.count(c__5793__auto__);
var G__11341 = (0);
seq__11301 = G__11338;
chunk__11302 = G__11339;
count__11303 = G__11340;
i__11304 = G__11341;
continue;
} else {
var i = cljs.core.first(seq__11301__$1);
app.colors.darken_color_in_db(i);

var G__11342 = cljs.core.next(seq__11301__$1);
var G__11343 = null;
var G__11344 = (0);
var G__11345 = (0);
seq__11301 = G__11342;
chunk__11302 = G__11343;
count__11303 = G__11344;
i__11304 = G__11345;
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
var seq__11305_11346 = cljs.core.seq(app.db.contrastcolors);
var chunk__11306_11347 = null;
var count__11307_11348 = (0);
var i__11308_11349 = (0);
while(true){
if((i__11308_11349 < count__11307_11348)){
var i_11350 = chunk__11306_11347.cljs$core$IIndexed$_nth$arity$2(null,i__11308_11349);
app.colors.lighten_color_in_db(i_11350);

var G__11351 = seq__11305_11346;
var G__11352 = chunk__11306_11347;
var G__11353 = count__11307_11348;
var G__11354 = (i__11308_11349 + (1));
seq__11305_11346 = G__11351;
chunk__11306_11347 = G__11352;
count__11307_11348 = G__11353;
i__11308_11349 = G__11354;
continue;
} else {
var temp__4657__auto___11355 = cljs.core.seq(seq__11305_11346);
if(temp__4657__auto___11355){
var seq__11305_11356__$1 = temp__4657__auto___11355;
if(cljs.core.chunked_seq_QMARK_(seq__11305_11356__$1)){
var c__5793__auto___11357 = cljs.core.chunk_first(seq__11305_11356__$1);
var G__11358 = cljs.core.chunk_rest(seq__11305_11356__$1);
var G__11359 = c__5793__auto___11357;
var G__11360 = cljs.core.count(c__5793__auto___11357);
var G__11361 = (0);
seq__11305_11346 = G__11358;
chunk__11306_11347 = G__11359;
count__11307_11348 = G__11360;
i__11308_11349 = G__11361;
continue;
} else {
var i_11362 = cljs.core.first(seq__11305_11356__$1);
app.colors.lighten_color_in_db(i_11362);

var G__11363 = cljs.core.next(seq__11305_11356__$1);
var G__11364 = null;
var G__11365 = (0);
var G__11366 = (0);
seq__11305_11346 = G__11363;
chunk__11306_11347 = G__11364;
count__11307_11348 = G__11365;
i__11308_11349 = G__11366;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db(cljs.core.cst$kw$mainbg);
} else {
var seq__11309 = cljs.core.seq(app.db.contrastcolors);
var chunk__11310 = null;
var count__11311 = (0);
var i__11312 = (0);
while(true){
if((i__11312 < count__11311)){
var i = chunk__11310.cljs$core$IIndexed$_nth$arity$2(null,i__11312);
app.colors.lighten_color_in_db(i);

var G__11367 = seq__11309;
var G__11368 = chunk__11310;
var G__11369 = count__11311;
var G__11370 = (i__11312 + (1));
seq__11309 = G__11367;
chunk__11310 = G__11368;
count__11311 = G__11369;
i__11312 = G__11370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11309);
if(temp__4657__auto__){
var seq__11309__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11309__$1)){
var c__5793__auto__ = cljs.core.chunk_first(seq__11309__$1);
var G__11371 = cljs.core.chunk_rest(seq__11309__$1);
var G__11372 = c__5793__auto__;
var G__11373 = cljs.core.count(c__5793__auto__);
var G__11374 = (0);
seq__11309 = G__11371;
chunk__11310 = G__11372;
count__11311 = G__11373;
i__11312 = G__11374;
continue;
} else {
var i = cljs.core.first(seq__11309__$1);
app.colors.lighten_color_in_db(i);

var G__11375 = cljs.core.next(seq__11309__$1);
var G__11376 = null;
var G__11377 = (0);
var G__11378 = (0);
seq__11309 = G__11375;
chunk__11310 = G__11376;
count__11311 = G__11377;
i__11312 = G__11378;
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
var distance = (function (){var G__11381 = ((360) / length);
return Math.floor(G__11381);
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(((function (distance){
return (function (p1__11379_SHARP_){
return cljs.core.mod(((distance + cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null))) + p1__11379_SHARP_),(360));
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
return (function (p1__11382_SHARP_){
return app.colors.rgbToHex(p1__11382_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11383_SHARP_){
return app.colors.clamped_rgb_vec(p1__11383_SHARP_);
});})(hr))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (hr){
return (function (p1__11384_SHARP_){
return app.colors.lchToRgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__11384_SHARP_], null));
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
var seq__11391 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,app.db.randomcolors,palette));
var chunk__11392 = null;
var count__11393 = (0);
var i__11394 = (0);
while(true){
if((i__11394 < count__11393)){
var vec__11395 = chunk__11392.cljs$core$IIndexed$_nth$arity$2(null,i__11394);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11397 = seq__11391;
var G__11398 = chunk__11392;
var G__11399 = count__11393;
var G__11400 = (i__11394 + (1));
seq__11391 = G__11397;
chunk__11392 = G__11398;
count__11393 = G__11399;
i__11394 = G__11400;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11391);
if(temp__4657__auto__){
var seq__11391__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11391__$1)){
var c__5793__auto__ = cljs.core.chunk_first(seq__11391__$1);
var G__11401 = cljs.core.chunk_rest(seq__11391__$1);
var G__11402 = c__5793__auto__;
var G__11403 = cljs.core.count(c__5793__auto__);
var G__11404 = (0);
seq__11391 = G__11401;
chunk__11392 = G__11402;
count__11393 = G__11403;
i__11394 = G__11404;
continue;
} else {
var vec__11396 = cljs.core.first(seq__11391__$1);
var colorname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11396,(0),null);
var colorstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11396,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__11405 = cljs.core.next(seq__11391__$1);
var G__11406 = null;
var G__11407 = (0);
var G__11408 = (0);
seq__11391 = G__11405;
chunk__11392 = G__11406;
count__11393 = G__11407;
i__11394 = G__11408;
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
