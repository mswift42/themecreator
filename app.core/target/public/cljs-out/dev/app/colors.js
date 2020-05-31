// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.call(null,(function (p1__18094_SHARP_){
return (p1__18094_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_.call(null,(function (p1__18095_SHARP_){
return (((p1__18095_SHARP_ < (0))) || ((p1__18095_SHARP_ > (255))));
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
return cljs.core.mapv.call(null,(function (p1__18096_SHARP_){
return app.colors.clamp.call(null,p1__18096_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__18097 = rgbcolor;
var r = cljs.core.nth.call(null,vec__18097,(0),null);
var g = cljs.core.nth.call(null,vec__18097,(1),null);
var b = cljs.core.nth.call(null,vec__18097,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__18102 = cljs.core.mapv.call(null,(function (p1__18100_SHARP_){
return (p1__18100_SHARP_ * (100));
}),cljs.core.mapv.call(null,(function (p1__18101_SHARP_){
if((p1__18101_SHARP_ > 0.04045)){
return Math.pow(((p1__18101_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__18101_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.call(null,vec__18102,(0),null);
var g = cljs.core.nth.call(null,vec__18102,(1),null);
var b = cljs.core.nth.call(null,vec__18102,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__18106 = cljs.core.mapv.call(null,(function (p1__18105_SHARP_){
if((p1__18105_SHARP_ > 0.008856)){
return Math.pow(p1__18105_SHARP_,((1) / (3)));
} else {
return ((p1__18105_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.call(null,cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.call(null,vec__18106,(0),null);
var y = cljs.core.nth.call(null,vec__18106,(1),null);
var z = cljs.core.nth.call(null,vec__18106,(2),null);
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
var vec__18109 = labcolor;
var l = cljs.core.nth.call(null,vec__18109,(0),null);
var a = cljs.core.nth.call(null,vec__18109,(1),null);
var b = cljs.core.nth.call(null,vec__18109,(2),null);
var h = app.colors.radToDegrees.call(null,Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__18112 = lchcolor;
var l = cljs.core.nth.call(null,vec__18112,(0),null);
var c = cljs.core.nth.call(null,vec__18112,(1),null);
var h = cljs.core.nth.call(null,vec__18112,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__18115 = labcolor;
var l = cljs.core.nth.call(null,vec__18115,(0),null);
var a = cljs.core.nth.call(null,vec__18115,(1),null);
var b = cljs.core.nth.call(null,vec__18115,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.call(null,cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.call(null,((function (vec__18115,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__18115,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__18121 = cljs.core.mapv.call(null,(function (p1__18118_SHARP_){
return (p1__18118_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.call(null,vec__18121,(0),null);
var y = cljs.core.nth.call(null,vec__18121,(1),null);
var z = cljs.core.nth.call(null,vec__18121,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.call(null,((function (vec__18121,x,y,z,r,g,b,rgb){
return (function (p1__18119_SHARP_){
return Math.round((p1__18119_SHARP_ * (255)));
});})(vec__18121,x,y,z,r,g,b,rgb))
,cljs.core.mapv.call(null,((function (vec__18121,x,y,z,r,g,b,rgb){
return (function (p1__18120_SHARP_){
if((p1__18120_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__18120_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__18120_SHARP_ * 12.92);
}
});})(vec__18121,x,y,z,r,g,b,rgb))
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
var G__18125 = arguments.length;
switch (G__18125) {
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
var G__18128 = arguments.length;
switch (G__18128) {
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
var vec__18130 = goog.color.hexToRgb(color);
var r = cljs.core.nth.call(null,vec__18130,(0),null);
var g = cljs.core.nth.call(null,vec__18130,(1),null);
var b = cljs.core.nth.call(null,vec__18130,(2),null);
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
var seq__18133_18149 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18134_18150 = null;
var count__18135_18151 = (0);
var i__18136_18152 = (0);
while(true){
if((i__18136_18152 < count__18135_18151)){
var i_18153 = cljs.core._nth.call(null,chunk__18134_18150,i__18136_18152);
app.colors.lighten_color_in_db.call(null,i_18153);


var G__18154 = seq__18133_18149;
var G__18155 = chunk__18134_18150;
var G__18156 = count__18135_18151;
var G__18157 = (i__18136_18152 + (1));
seq__18133_18149 = G__18154;
chunk__18134_18150 = G__18155;
count__18135_18151 = G__18156;
i__18136_18152 = G__18157;
continue;
} else {
var temp__5735__auto___18158 = cljs.core.seq.call(null,seq__18133_18149);
if(temp__5735__auto___18158){
var seq__18133_18159__$1 = temp__5735__auto___18158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18133_18159__$1)){
var c__4550__auto___18160 = cljs.core.chunk_first.call(null,seq__18133_18159__$1);
var G__18161 = cljs.core.chunk_rest.call(null,seq__18133_18159__$1);
var G__18162 = c__4550__auto___18160;
var G__18163 = cljs.core.count.call(null,c__4550__auto___18160);
var G__18164 = (0);
seq__18133_18149 = G__18161;
chunk__18134_18150 = G__18162;
count__18135_18151 = G__18163;
i__18136_18152 = G__18164;
continue;
} else {
var i_18165 = cljs.core.first.call(null,seq__18133_18159__$1);
app.colors.lighten_color_in_db.call(null,i_18165);


var G__18166 = cljs.core.next.call(null,seq__18133_18159__$1);
var G__18167 = null;
var G__18168 = (0);
var G__18169 = (0);
seq__18133_18149 = G__18166;
chunk__18134_18150 = G__18167;
count__18135_18151 = G__18168;
i__18136_18152 = G__18169;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__18137 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18138 = null;
var count__18139 = (0);
var i__18140 = (0);
while(true){
if((i__18140 < count__18139)){
var i = cljs.core._nth.call(null,chunk__18138,i__18140);
app.colors.lighten_color_in_db.call(null,i);


var G__18170 = seq__18137;
var G__18171 = chunk__18138;
var G__18172 = count__18139;
var G__18173 = (i__18140 + (1));
seq__18137 = G__18170;
chunk__18138 = G__18171;
count__18139 = G__18172;
i__18140 = G__18173;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18137);
if(temp__5735__auto__){
var seq__18137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18137__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18137__$1);
var G__18174 = cljs.core.chunk_rest.call(null,seq__18137__$1);
var G__18175 = c__4550__auto__;
var G__18176 = cljs.core.count.call(null,c__4550__auto__);
var G__18177 = (0);
seq__18137 = G__18174;
chunk__18138 = G__18175;
count__18139 = G__18176;
i__18140 = G__18177;
continue;
} else {
var i = cljs.core.first.call(null,seq__18137__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__18178 = cljs.core.next.call(null,seq__18137__$1);
var G__18179 = null;
var G__18180 = (0);
var G__18181 = (0);
seq__18137 = G__18178;
chunk__18138 = G__18179;
count__18139 = G__18180;
i__18140 = G__18181;
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
var seq__18141_18182 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18142_18183 = null;
var count__18143_18184 = (0);
var i__18144_18185 = (0);
while(true){
if((i__18144_18185 < count__18143_18184)){
var i_18186 = cljs.core._nth.call(null,chunk__18142_18183,i__18144_18185);
app.colors.darken_color_in_db.call(null,i_18186);


var G__18187 = seq__18141_18182;
var G__18188 = chunk__18142_18183;
var G__18189 = count__18143_18184;
var G__18190 = (i__18144_18185 + (1));
seq__18141_18182 = G__18187;
chunk__18142_18183 = G__18188;
count__18143_18184 = G__18189;
i__18144_18185 = G__18190;
continue;
} else {
var temp__5735__auto___18191 = cljs.core.seq.call(null,seq__18141_18182);
if(temp__5735__auto___18191){
var seq__18141_18192__$1 = temp__5735__auto___18191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18141_18192__$1)){
var c__4550__auto___18193 = cljs.core.chunk_first.call(null,seq__18141_18192__$1);
var G__18194 = cljs.core.chunk_rest.call(null,seq__18141_18192__$1);
var G__18195 = c__4550__auto___18193;
var G__18196 = cljs.core.count.call(null,c__4550__auto___18193);
var G__18197 = (0);
seq__18141_18182 = G__18194;
chunk__18142_18183 = G__18195;
count__18143_18184 = G__18196;
i__18144_18185 = G__18197;
continue;
} else {
var i_18198 = cljs.core.first.call(null,seq__18141_18192__$1);
app.colors.darken_color_in_db.call(null,i_18198);


var G__18199 = cljs.core.next.call(null,seq__18141_18192__$1);
var G__18200 = null;
var G__18201 = (0);
var G__18202 = (0);
seq__18141_18182 = G__18199;
chunk__18142_18183 = G__18200;
count__18143_18184 = G__18201;
i__18144_18185 = G__18202;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__18145 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18146 = null;
var count__18147 = (0);
var i__18148 = (0);
while(true){
if((i__18148 < count__18147)){
var i = cljs.core._nth.call(null,chunk__18146,i__18148);
app.colors.darken_color_in_db.call(null,i);


var G__18203 = seq__18145;
var G__18204 = chunk__18146;
var G__18205 = count__18147;
var G__18206 = (i__18148 + (1));
seq__18145 = G__18203;
chunk__18146 = G__18204;
count__18147 = G__18205;
i__18148 = G__18206;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18145);
if(temp__5735__auto__){
var seq__18145__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18145__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18145__$1);
var G__18207 = cljs.core.chunk_rest.call(null,seq__18145__$1);
var G__18208 = c__4550__auto__;
var G__18209 = cljs.core.count.call(null,c__4550__auto__);
var G__18210 = (0);
seq__18145 = G__18207;
chunk__18146 = G__18208;
count__18147 = G__18209;
i__18148 = G__18210;
continue;
} else {
var i = cljs.core.first.call(null,seq__18145__$1);
app.colors.darken_color_in_db.call(null,i);


var G__18211 = cljs.core.next.call(null,seq__18145__$1);
var G__18212 = null;
var G__18213 = (0);
var G__18214 = (0);
seq__18145 = G__18211;
chunk__18146 = G__18212;
count__18147 = G__18213;
i__18148 = G__18214;
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
var seq__18215_18231 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18216_18232 = null;
var count__18217_18233 = (0);
var i__18218_18234 = (0);
while(true){
if((i__18218_18234 < count__18217_18233)){
var i_18235 = cljs.core._nth.call(null,chunk__18216_18232,i__18218_18234);
app.colors.darken_color_in_db.call(null,i_18235);


var G__18236 = seq__18215_18231;
var G__18237 = chunk__18216_18232;
var G__18238 = count__18217_18233;
var G__18239 = (i__18218_18234 + (1));
seq__18215_18231 = G__18236;
chunk__18216_18232 = G__18237;
count__18217_18233 = G__18238;
i__18218_18234 = G__18239;
continue;
} else {
var temp__5735__auto___18240 = cljs.core.seq.call(null,seq__18215_18231);
if(temp__5735__auto___18240){
var seq__18215_18241__$1 = temp__5735__auto___18240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18215_18241__$1)){
var c__4550__auto___18242 = cljs.core.chunk_first.call(null,seq__18215_18241__$1);
var G__18243 = cljs.core.chunk_rest.call(null,seq__18215_18241__$1);
var G__18244 = c__4550__auto___18242;
var G__18245 = cljs.core.count.call(null,c__4550__auto___18242);
var G__18246 = (0);
seq__18215_18231 = G__18243;
chunk__18216_18232 = G__18244;
count__18217_18233 = G__18245;
i__18218_18234 = G__18246;
continue;
} else {
var i_18247 = cljs.core.first.call(null,seq__18215_18241__$1);
app.colors.darken_color_in_db.call(null,i_18247);


var G__18248 = cljs.core.next.call(null,seq__18215_18241__$1);
var G__18249 = null;
var G__18250 = (0);
var G__18251 = (0);
seq__18215_18231 = G__18248;
chunk__18216_18232 = G__18249;
count__18217_18233 = G__18250;
i__18218_18234 = G__18251;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__18219 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18220 = null;
var count__18221 = (0);
var i__18222 = (0);
while(true){
if((i__18222 < count__18221)){
var i = cljs.core._nth.call(null,chunk__18220,i__18222);
app.colors.darken_color_in_db.call(null,i);


var G__18252 = seq__18219;
var G__18253 = chunk__18220;
var G__18254 = count__18221;
var G__18255 = (i__18222 + (1));
seq__18219 = G__18252;
chunk__18220 = G__18253;
count__18221 = G__18254;
i__18222 = G__18255;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18219);
if(temp__5735__auto__){
var seq__18219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18219__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18219__$1);
var G__18256 = cljs.core.chunk_rest.call(null,seq__18219__$1);
var G__18257 = c__4550__auto__;
var G__18258 = cljs.core.count.call(null,c__4550__auto__);
var G__18259 = (0);
seq__18219 = G__18256;
chunk__18220 = G__18257;
count__18221 = G__18258;
i__18222 = G__18259;
continue;
} else {
var i = cljs.core.first.call(null,seq__18219__$1);
app.colors.darken_color_in_db.call(null,i);


var G__18260 = cljs.core.next.call(null,seq__18219__$1);
var G__18261 = null;
var G__18262 = (0);
var G__18263 = (0);
seq__18219 = G__18260;
chunk__18220 = G__18261;
count__18221 = G__18262;
i__18222 = G__18263;
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
var seq__18223_18264 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18224_18265 = null;
var count__18225_18266 = (0);
var i__18226_18267 = (0);
while(true){
if((i__18226_18267 < count__18225_18266)){
var i_18268 = cljs.core._nth.call(null,chunk__18224_18265,i__18226_18267);
app.colors.lighten_color_in_db.call(null,i_18268);


var G__18269 = seq__18223_18264;
var G__18270 = chunk__18224_18265;
var G__18271 = count__18225_18266;
var G__18272 = (i__18226_18267 + (1));
seq__18223_18264 = G__18269;
chunk__18224_18265 = G__18270;
count__18225_18266 = G__18271;
i__18226_18267 = G__18272;
continue;
} else {
var temp__5735__auto___18273 = cljs.core.seq.call(null,seq__18223_18264);
if(temp__5735__auto___18273){
var seq__18223_18274__$1 = temp__5735__auto___18273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18223_18274__$1)){
var c__4550__auto___18275 = cljs.core.chunk_first.call(null,seq__18223_18274__$1);
var G__18276 = cljs.core.chunk_rest.call(null,seq__18223_18274__$1);
var G__18277 = c__4550__auto___18275;
var G__18278 = cljs.core.count.call(null,c__4550__auto___18275);
var G__18279 = (0);
seq__18223_18264 = G__18276;
chunk__18224_18265 = G__18277;
count__18225_18266 = G__18278;
i__18226_18267 = G__18279;
continue;
} else {
var i_18280 = cljs.core.first.call(null,seq__18223_18274__$1);
app.colors.lighten_color_in_db.call(null,i_18280);


var G__18281 = cljs.core.next.call(null,seq__18223_18274__$1);
var G__18282 = null;
var G__18283 = (0);
var G__18284 = (0);
seq__18223_18264 = G__18281;
chunk__18224_18265 = G__18282;
count__18225_18266 = G__18283;
i__18226_18267 = G__18284;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__18227 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__18228 = null;
var count__18229 = (0);
var i__18230 = (0);
while(true){
if((i__18230 < count__18229)){
var i = cljs.core._nth.call(null,chunk__18228,i__18230);
app.colors.lighten_color_in_db.call(null,i);


var G__18285 = seq__18227;
var G__18286 = chunk__18228;
var G__18287 = count__18229;
var G__18288 = (i__18230 + (1));
seq__18227 = G__18285;
chunk__18228 = G__18286;
count__18229 = G__18287;
i__18230 = G__18288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18227);
if(temp__5735__auto__){
var seq__18227__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18227__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18227__$1);
var G__18289 = cljs.core.chunk_rest.call(null,seq__18227__$1);
var G__18290 = c__4550__auto__;
var G__18291 = cljs.core.count.call(null,c__4550__auto__);
var G__18292 = (0);
seq__18227 = G__18289;
chunk__18228 = G__18290;
count__18229 = G__18291;
i__18230 = G__18292;
continue;
} else {
var i = cljs.core.first.call(null,seq__18227__$1);
app.colors.lighten_color_in_db.call(null,i);


var G__18293 = cljs.core.next.call(null,seq__18227__$1);
var G__18294 = null;
var G__18295 = (0);
var G__18296 = (0);
seq__18227 = G__18293;
chunk__18228 = G__18294;
count__18229 = G__18295;
i__18230 = G__18296;
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
return (function (p1__18297_SHARP_){
return cljs.core.mod.call(null,((distance + cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null,(-1))], null))) + p1__18297_SHARP_),(360));
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
return (function (p1__18298_SHARP_){
return app.colors.rgbToHex.call(null,p1__18298_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__18299_SHARP_){
return app.colors.clamped_rgb_vec.call(null,p1__18299_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__18300_SHARP_){
return app.colors.lchToRgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__18300_SHARP_], null));
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
var seq__18301 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,app.db.randomcolors,palette));
var chunk__18302 = null;
var count__18303 = (0);
var i__18304 = (0);
while(true){
if((i__18304 < count__18303)){
var vec__18311 = cljs.core._nth.call(null,chunk__18302,i__18304);
var colorname = cljs.core.nth.call(null,vec__18311,(0),null);
var colorstring = cljs.core.nth.call(null,vec__18311,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__18317 = seq__18301;
var G__18318 = chunk__18302;
var G__18319 = count__18303;
var G__18320 = (i__18304 + (1));
seq__18301 = G__18317;
chunk__18302 = G__18318;
count__18303 = G__18319;
i__18304 = G__18320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18301);
if(temp__5735__auto__){
var seq__18301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18301__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18301__$1);
var G__18321 = cljs.core.chunk_rest.call(null,seq__18301__$1);
var G__18322 = c__4550__auto__;
var G__18323 = cljs.core.count.call(null,c__4550__auto__);
var G__18324 = (0);
seq__18301 = G__18321;
chunk__18302 = G__18322;
count__18303 = G__18323;
i__18304 = G__18324;
continue;
} else {
var vec__18314 = cljs.core.first.call(null,seq__18301__$1);
var colorname = cljs.core.nth.call(null,vec__18314,(0),null);
var colorstring = cljs.core.nth.call(null,vec__18314,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);


var G__18325 = cljs.core.next.call(null,seq__18301__$1);
var G__18326 = null;
var G__18327 = (0);
var G__18328 = (0);
seq__18301 = G__18325;
chunk__18302 = G__18326;
count__18303 = G__18327;
i__18304 = G__18328;
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
