// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.call(null,(function (p1__24085_SHARP_){
return (p1__24085_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_.call(null,(function (p1__24086_SHARP_){
return (((p1__24086_SHARP_ < (0))) || ((p1__24086_SHARP_ > (255))));
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
return cljs.core.mapv.call(null,(function (p1__24087_SHARP_){
return app.colors.clamp.call(null,p1__24087_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__24088 = rgbcolor;
var r = cljs.core.nth.call(null,vec__24088,(0),null);
var g = cljs.core.nth.call(null,vec__24088,(1),null);
var b = cljs.core.nth.call(null,vec__24088,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__24093 = cljs.core.mapv.call(null,(function (p1__24091_SHARP_){
return (p1__24091_SHARP_ * (100));
}),cljs.core.mapv.call(null,(function (p1__24092_SHARP_){
if((p1__24092_SHARP_ > 0.04045)){
return Math.pow(((p1__24092_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__24092_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.call(null,vec__24093,(0),null);
var g = cljs.core.nth.call(null,vec__24093,(1),null);
var b = cljs.core.nth.call(null,vec__24093,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__24097 = cljs.core.mapv.call(null,(function (p1__24096_SHARP_){
if((p1__24096_SHARP_ > 0.008856)){
return Math.pow(p1__24096_SHARP_,((1) / (3)));
} else {
return ((p1__24096_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.call(null,cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.call(null,vec__24097,(0),null);
var y = cljs.core.nth.call(null,vec__24097,(1),null);
var z = cljs.core.nth.call(null,vec__24097,(2),null);
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
var vec__24100 = labcolor;
var l = cljs.core.nth.call(null,vec__24100,(0),null);
var a = cljs.core.nth.call(null,vec__24100,(1),null);
var b = cljs.core.nth.call(null,vec__24100,(2),null);
var h = app.colors.radToDegrees.call(null,Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__24103 = lchcolor;
var l = cljs.core.nth.call(null,vec__24103,(0),null);
var c = cljs.core.nth.call(null,vec__24103,(1),null);
var h = cljs.core.nth.call(null,vec__24103,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__24106 = labcolor;
var l = cljs.core.nth.call(null,vec__24106,(0),null);
var a = cljs.core.nth.call(null,vec__24106,(1),null);
var b = cljs.core.nth.call(null,vec__24106,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.call(null,cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.call(null,((function (vec__24106,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__24106,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__24112 = cljs.core.mapv.call(null,(function (p1__24109_SHARP_){
return (p1__24109_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.call(null,vec__24112,(0),null);
var y = cljs.core.nth.call(null,vec__24112,(1),null);
var z = cljs.core.nth.call(null,vec__24112,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.call(null,((function (vec__24112,x,y,z,r,g,b,rgb){
return (function (p1__24110_SHARP_){
return Math.round((p1__24110_SHARP_ * (255)));
});})(vec__24112,x,y,z,r,g,b,rgb))
,cljs.core.mapv.call(null,((function (vec__24112,x,y,z,r,g,b,rgb){
return (function (p1__24111_SHARP_){
if((p1__24111_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__24111_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__24111_SHARP_ * 12.92);
}
});})(vec__24112,x,y,z,r,g,b,rgb))
,rgb));
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
var G__24116 = arguments.length;
switch (G__24116) {
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
return app.colors.darken.call(null,colorstring,0.2);
});

app.colors.darken.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.darken(goog.color.hexToRgb(colorstring),factor));
});

app.colors.darken.cljs$lang$maxFixedArity = 2;

/**
 * lighten lightens a rgb color by a given factor.
 * If no factor is provided, the color will be lightened
 * with the factor of 0.2.
 */
app.colors.lighten = (function app$colors$lighten(var_args){
var G__24119 = arguments.length;
switch (G__24119) {
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
return app.colors.lighten.call(null,colorstring,0.2);
});

app.colors.lighten.cljs$core$IFn$_invoke$arity$2 = (function (colorstring,factor){
return goog.color.rgbArrayToHex(goog.color.lighten(goog.color.hexToRgb(colorstring),factor));
});

app.colors.lighten.cljs$lang$maxFixedArity = 2;

/**
 * dark-bg? returns true if the given hex color is 'dark'
 */
app.colors.dark_bg_QMARK_ = (function app$colors$dark_bg_QMARK_(color){
var vec__24121 = goog.color.hexToRgb(color);
var r = cljs.core.nth.call(null,vec__24121,(0),null);
var g = cljs.core.nth.call(null,vec__24121,(1),null);
var b = cljs.core.nth.call(null,vec__24121,(2),null);
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
var seq__24124_24140 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24125_24141 = null;
var count__24126_24142 = (0);
var i__24127_24143 = (0);
while(true){
if((i__24127_24143 < count__24126_24142)){
var i_24144 = cljs.core._nth.call(null,chunk__24125_24141,i__24127_24143);
app.colors.lighten_color_in_db.call(null,i_24144);


var G__24145 = seq__24124_24140;
var G__24146 = chunk__24125_24141;
var G__24147 = count__24126_24142;
var G__24148 = (i__24127_24143 + (1));
seq__24124_24140 = G__24145;
chunk__24125_24141 = G__24146;
count__24126_24142 = G__24147;
i__24127_24143 = G__24148;
continue;
} else {
var temp__5735__auto___24149 = cljs.core.seq.call(null,seq__24124_24140);
if(temp__5735__auto___24149){
var seq__24124_24150__$1 = temp__5735__auto___24149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24124_24150__$1)){
var c__4550__auto___24151 = cljs.core.chunk_first.call(null,seq__24124_24150__$1);
var G__24152 = cljs.core.chunk_rest.call(null,seq__24124_24150__$1);
var G__24153 = c__4550__auto___24151;
var G__24154 = cljs.core.count.call(null,c__4550__auto___24151);
var G__24155 = (0);
seq__24124_24140 = G__24152;
chunk__24125_24141 = G__24153;
count__24126_24142 = G__24154;
i__24127_24143 = G__24155;
continue;
} else {
var i_24156 = cljs.core.first.call(null,seq__24124_24150__$1);
app.colors.lighten_color_in_db.call(null,i_24156);


var G__24157 = cljs.core.next.call(null,seq__24124_24150__$1);
var G__24158 = null;
var G__24159 = (0);
var G__24160 = (0);
seq__24124_24140 = G__24157;
chunk__24125_24141 = G__24158;
count__24126_24142 = G__24159;
i__24127_24143 = G__24160;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__24128 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24129 = null;
var count__24130 = (0);
var i__24131 = (0);
while(true){
if((i__24131 < count__24130)){
var i = cljs.core._nth.call(null,chunk__24129,i__24131);
app.colors.lighten_color_in_db.call(null,i);


var G__24161 = seq__24128;
var G__24162 = chunk__24129;
var G__24163 = count__24130;
var G__24164 = (i__24131 + (1));
seq__24128 = G__24161;
chunk__24129 = G__24162;
count__24130 = G__24163;
i__24131 = G__24164;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24128);
if(temp__5735__auto__){
var seq__24128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24128__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24128__$1);
var G__24165 = cljs.core.chunk_rest.call(null,seq__24128__$1);
var G__24166 = c__4550__auto__;
var G__24167 = cljs.core.count.call(null,c__4550__auto__);
var G__24168 = (0);
seq__24128 = G__24165;
chunk__24129 = G__24166;
count__24130 = G__24167;
i__24131 = G__24168;
continue;
} else {
var i = cljs.core.first.call(null,seq__24128__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__24169 = cljs.core.next.call(null,seq__24128__$1);
var G__24170 = null;
var G__24171 = (0);
var G__24172 = (0);
seq__24128 = G__24169;
chunk__24129 = G__24170;
count__24130 = G__24171;
i__24131 = G__24172;
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
var seq__24132_24173 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24133_24174 = null;
var count__24134_24175 = (0);
var i__24135_24176 = (0);
while(true){
if((i__24135_24176 < count__24134_24175)){
var i_24177 = cljs.core._nth.call(null,chunk__24133_24174,i__24135_24176);
app.colors.darken_color_in_db.call(null,i_24177);


var G__24178 = seq__24132_24173;
var G__24179 = chunk__24133_24174;
var G__24180 = count__24134_24175;
var G__24181 = (i__24135_24176 + (1));
seq__24132_24173 = G__24178;
chunk__24133_24174 = G__24179;
count__24134_24175 = G__24180;
i__24135_24176 = G__24181;
continue;
} else {
var temp__5735__auto___24182 = cljs.core.seq.call(null,seq__24132_24173);
if(temp__5735__auto___24182){
var seq__24132_24183__$1 = temp__5735__auto___24182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24132_24183__$1)){
var c__4550__auto___24184 = cljs.core.chunk_first.call(null,seq__24132_24183__$1);
var G__24185 = cljs.core.chunk_rest.call(null,seq__24132_24183__$1);
var G__24186 = c__4550__auto___24184;
var G__24187 = cljs.core.count.call(null,c__4550__auto___24184);
var G__24188 = (0);
seq__24132_24173 = G__24185;
chunk__24133_24174 = G__24186;
count__24134_24175 = G__24187;
i__24135_24176 = G__24188;
continue;
} else {
var i_24189 = cljs.core.first.call(null,seq__24132_24183__$1);
app.colors.darken_color_in_db.call(null,i_24189);


var G__24190 = cljs.core.next.call(null,seq__24132_24183__$1);
var G__24191 = null;
var G__24192 = (0);
var G__24193 = (0);
seq__24132_24173 = G__24190;
chunk__24133_24174 = G__24191;
count__24134_24175 = G__24192;
i__24135_24176 = G__24193;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__24136 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24137 = null;
var count__24138 = (0);
var i__24139 = (0);
while(true){
if((i__24139 < count__24138)){
var i = cljs.core._nth.call(null,chunk__24137,i__24139);
app.colors.darken_color_in_db.call(null,i);


var G__24194 = seq__24136;
var G__24195 = chunk__24137;
var G__24196 = count__24138;
var G__24197 = (i__24139 + (1));
seq__24136 = G__24194;
chunk__24137 = G__24195;
count__24138 = G__24196;
i__24139 = G__24197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24136);
if(temp__5735__auto__){
var seq__24136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24136__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24136__$1);
var G__24198 = cljs.core.chunk_rest.call(null,seq__24136__$1);
var G__24199 = c__4550__auto__;
var G__24200 = cljs.core.count.call(null,c__4550__auto__);
var G__24201 = (0);
seq__24136 = G__24198;
chunk__24137 = G__24199;
count__24138 = G__24200;
i__24139 = G__24201;
continue;
} else {
var i = cljs.core.first.call(null,seq__24136__$1);
app.colors.darken_color_in_db.call(null,i);


var G__24202 = cljs.core.next.call(null,seq__24136__$1);
var G__24203 = null;
var G__24204 = (0);
var G__24205 = (0);
seq__24136 = G__24202;
chunk__24137 = G__24203;
count__24138 = G__24204;
i__24139 = G__24205;
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
var seq__24206_24222 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24207_24223 = null;
var count__24208_24224 = (0);
var i__24209_24225 = (0);
while(true){
if((i__24209_24225 < count__24208_24224)){
var i_24226 = cljs.core._nth.call(null,chunk__24207_24223,i__24209_24225);
app.colors.darken_color_in_db.call(null,i_24226);


var G__24227 = seq__24206_24222;
var G__24228 = chunk__24207_24223;
var G__24229 = count__24208_24224;
var G__24230 = (i__24209_24225 + (1));
seq__24206_24222 = G__24227;
chunk__24207_24223 = G__24228;
count__24208_24224 = G__24229;
i__24209_24225 = G__24230;
continue;
} else {
var temp__5735__auto___24231 = cljs.core.seq.call(null,seq__24206_24222);
if(temp__5735__auto___24231){
var seq__24206_24232__$1 = temp__5735__auto___24231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24206_24232__$1)){
var c__4550__auto___24233 = cljs.core.chunk_first.call(null,seq__24206_24232__$1);
var G__24234 = cljs.core.chunk_rest.call(null,seq__24206_24232__$1);
var G__24235 = c__4550__auto___24233;
var G__24236 = cljs.core.count.call(null,c__4550__auto___24233);
var G__24237 = (0);
seq__24206_24222 = G__24234;
chunk__24207_24223 = G__24235;
count__24208_24224 = G__24236;
i__24209_24225 = G__24237;
continue;
} else {
var i_24238 = cljs.core.first.call(null,seq__24206_24232__$1);
app.colors.darken_color_in_db.call(null,i_24238);


var G__24239 = cljs.core.next.call(null,seq__24206_24232__$1);
var G__24240 = null;
var G__24241 = (0);
var G__24242 = (0);
seq__24206_24222 = G__24239;
chunk__24207_24223 = G__24240;
count__24208_24224 = G__24241;
i__24209_24225 = G__24242;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__24210 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24211 = null;
var count__24212 = (0);
var i__24213 = (0);
while(true){
if((i__24213 < count__24212)){
var i = cljs.core._nth.call(null,chunk__24211,i__24213);
app.colors.darken_color_in_db.call(null,i);


var G__24243 = seq__24210;
var G__24244 = chunk__24211;
var G__24245 = count__24212;
var G__24246 = (i__24213 + (1));
seq__24210 = G__24243;
chunk__24211 = G__24244;
count__24212 = G__24245;
i__24213 = G__24246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24210);
if(temp__5735__auto__){
var seq__24210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24210__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24210__$1);
var G__24247 = cljs.core.chunk_rest.call(null,seq__24210__$1);
var G__24248 = c__4550__auto__;
var G__24249 = cljs.core.count.call(null,c__4550__auto__);
var G__24250 = (0);
seq__24210 = G__24247;
chunk__24211 = G__24248;
count__24212 = G__24249;
i__24213 = G__24250;
continue;
} else {
var i = cljs.core.first.call(null,seq__24210__$1);
app.colors.darken_color_in_db.call(null,i);


var G__24251 = cljs.core.next.call(null,seq__24210__$1);
var G__24252 = null;
var G__24253 = (0);
var G__24254 = (0);
seq__24210 = G__24251;
chunk__24211 = G__24252;
count__24212 = G__24253;
i__24213 = G__24254;
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
var seq__24214_24255 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24215_24256 = null;
var count__24216_24257 = (0);
var i__24217_24258 = (0);
while(true){
if((i__24217_24258 < count__24216_24257)){
var i_24259 = cljs.core._nth.call(null,chunk__24215_24256,i__24217_24258);
app.colors.lighten_color_in_db.call(null,i_24259);


var G__24260 = seq__24214_24255;
var G__24261 = chunk__24215_24256;
var G__24262 = count__24216_24257;
var G__24263 = (i__24217_24258 + (1));
seq__24214_24255 = G__24260;
chunk__24215_24256 = G__24261;
count__24216_24257 = G__24262;
i__24217_24258 = G__24263;
continue;
} else {
var temp__5735__auto___24264 = cljs.core.seq.call(null,seq__24214_24255);
if(temp__5735__auto___24264){
var seq__24214_24265__$1 = temp__5735__auto___24264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24214_24265__$1)){
var c__4550__auto___24266 = cljs.core.chunk_first.call(null,seq__24214_24265__$1);
var G__24267 = cljs.core.chunk_rest.call(null,seq__24214_24265__$1);
var G__24268 = c__4550__auto___24266;
var G__24269 = cljs.core.count.call(null,c__4550__auto___24266);
var G__24270 = (0);
seq__24214_24255 = G__24267;
chunk__24215_24256 = G__24268;
count__24216_24257 = G__24269;
i__24217_24258 = G__24270;
continue;
} else {
var i_24271 = cljs.core.first.call(null,seq__24214_24265__$1);
app.colors.lighten_color_in_db.call(null,i_24271);


var G__24272 = cljs.core.next.call(null,seq__24214_24265__$1);
var G__24273 = null;
var G__24274 = (0);
var G__24275 = (0);
seq__24214_24255 = G__24272;
chunk__24215_24256 = G__24273;
count__24216_24257 = G__24274;
i__24217_24258 = G__24275;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__24218 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__24219 = null;
var count__24220 = (0);
var i__24221 = (0);
while(true){
if((i__24221 < count__24220)){
var i = cljs.core._nth.call(null,chunk__24219,i__24221);
app.colors.lighten_color_in_db.call(null,i);


var G__24276 = seq__24218;
var G__24277 = chunk__24219;
var G__24278 = count__24220;
var G__24279 = (i__24221 + (1));
seq__24218 = G__24276;
chunk__24219 = G__24277;
count__24220 = G__24278;
i__24221 = G__24279;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24218);
if(temp__5735__auto__){
var seq__24218__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24218__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24218__$1);
var G__24280 = cljs.core.chunk_rest.call(null,seq__24218__$1);
var G__24281 = c__4550__auto__;
var G__24282 = cljs.core.count.call(null,c__4550__auto__);
var G__24283 = (0);
seq__24218 = G__24280;
chunk__24219 = G__24281;
count__24220 = G__24282;
i__24221 = G__24283;
continue;
} else {
var i = cljs.core.first.call(null,seq__24218__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__24284 = cljs.core.next.call(null,seq__24218__$1);
var G__24285 = null;
var G__24286 = (0);
var G__24287 = (0);
seq__24218 = G__24284;
chunk__24219 = G__24285;
count__24220 = G__24286;
i__24221 = G__24287;
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
return cljs.core.take.call(null,length,cljs.core.iterate.call(null,((function (distance){
return (function (p1__24288_SHARP_){
return cljs.core.mod.call(null,((distance + cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null,(-1))], null))) + p1__24288_SHARP_),(360));
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
var hr = app.colors.hue_range.call(null,cljs.core.count.call(null,app.db.randomcolors),app.colors.random_hue.call(null));
return cljs.core.mapv.call(null,((function (hr){
return (function (p1__24289_SHARP_){
return app.colors.rgbToHex.call(null,p1__24289_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__24290_SHARP_){
return app.colors.clamped_rgb_vec.call(null,p1__24290_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__24291_SHARP_){
return app.colors.lchToRgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__24291_SHARP_], null));
});})(hr))
,hr)));
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
var seq__24292 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,app.db.randomcolors,palette));
var chunk__24293 = null;
var count__24294 = (0);
var i__24295 = (0);
while(true){
if((i__24295 < count__24294)){
var vec__24302 = cljs.core._nth.call(null,chunk__24293,i__24295);
var colorname = cljs.core.nth.call(null,vec__24302,(0),null);
var colorstring = cljs.core.nth.call(null,vec__24302,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__24308 = seq__24292;
var G__24309 = chunk__24293;
var G__24310 = count__24294;
var G__24311 = (i__24295 + (1));
seq__24292 = G__24308;
chunk__24293 = G__24309;
count__24294 = G__24310;
i__24295 = G__24311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24292);
if(temp__5735__auto__){
var seq__24292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24292__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24292__$1);
var G__24312 = cljs.core.chunk_rest.call(null,seq__24292__$1);
var G__24313 = c__4550__auto__;
var G__24314 = cljs.core.count.call(null,c__4550__auto__);
var G__24315 = (0);
seq__24292 = G__24312;
chunk__24293 = G__24313;
count__24294 = G__24314;
i__24295 = G__24315;
continue;
} else {
var vec__24305 = cljs.core.first.call(null,seq__24292__$1);
var colorname = cljs.core.nth.call(null,vec__24305,(0),null);
var colorstring = cljs.core.nth.call(null,vec__24305,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__24316 = cljs.core.next.call(null,seq__24292__$1);
var G__24317 = null;
var G__24318 = (0);
var G__24319 = (0);
seq__24292 = G__24316;
chunk__24293 = G__24317;
count__24294 = G__24318;
i__24295 = G__24319;
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
var dbg = app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme));
if(dbg){
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"hasdarkbg","hasdarkbg",-317233792),dbg,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"fg5","fg5",908678474),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.12),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24));
} else {
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"hasdarkbg","hasdarkbg",-317233792),dbg,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"fg5","fg5",908678474),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24));
}
});

//# sourceMappingURL=colors.js.map
