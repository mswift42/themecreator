// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.colors');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('app.db');
/**
 * convert hex color to rgb in values 0..1
 */
app.colors.hexToRgb = (function app$colors$hexToRgb(hexcolor){
return cljs.core.mapv.call(null,(function (p1__8007_SHARP_){
return (p1__8007_SHARP_ / 255.0);
}),goog.color.hexToRgb(hexcolor));
});
app.colors.valid_rgb_QMARK_ = (function app$colors$valid_rgb_QMARK_(rgbcolor){
return cljs.core.not_any_QMARK_.call(null,(function (p1__8008_SHARP_){
return ((p1__8008_SHARP_ < (0))) || ((p1__8008_SHARP_ > (255)));
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
return cljs.core.mapv.call(null,(function (p1__8009_SHARP_){
return app.colors.clamp.call(null,p1__8009_SHARP_);
}),rgbvector);
});
app.colors.rgbToHex = (function app$colors$rgbToHex(rgbcolor){
var vec__8011 = rgbcolor;
var r = cljs.core.nth.call(null,vec__8011,(0),null);
var g = cljs.core.nth.call(null,vec__8011,(1),null);
var b = cljs.core.nth.call(null,vec__8011,(2),null);
return goog.color.rgbToHex(r,g,b);
});
app.colors.rgbToXyz = (function app$colors$rgbToXyz(rgbcolor){
var vec__8015 = cljs.core.mapv.call(null,(function (p1__8012_SHARP_){
return (p1__8012_SHARP_ * (100));
}),cljs.core.mapv.call(null,(function (p1__8013_SHARP_){
if((p1__8013_SHARP_ > 0.04045)){
return Math.pow(((p1__8013_SHARP_ + 0.055) / 1.055),2.4);
} else {
return (p1__8013_SHARP_ / 12.92);
}
}),rgbcolor));
var r = cljs.core.nth.call(null,vec__8015,(0),null);
var g = cljs.core.nth.call(null,vec__8015,(1),null);
var b = cljs.core.nth.call(null,vec__8015,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((r * 0.4124) + (g * 0.3576)) + (b * 0.1805)),(((r * 0.2126) + (g * 0.7152)) + (b * 0.0722)),(((r * 0.0193) + (g * 0.1192)) + (b * 0.9505))], null);
});
app.colors.xyzreferencewhited65 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [95.047,(100),108.883], null);
app.colors.xyzToLab = (function app$colors$xyzToLab(xyzcolor){
var vec__8018 = cljs.core.mapv.call(null,(function (p1__8016_SHARP_){
if((p1__8016_SHARP_ > 0.008856)){
return Math.pow(p1__8016_SHARP_,((1) / (3)));
} else {
return ((p1__8016_SHARP_ * 7.787) + ((16) / (116)));
}
}),cljs.core.mapv.call(null,cljs.core._SLASH_,xyzcolor,app.colors.xyzreferencewhited65));
var x = cljs.core.nth.call(null,vec__8018,(0),null);
var y = cljs.core.nth.call(null,vec__8018,(1),null);
var z = cljs.core.nth.call(null,vec__8018,(2),null);
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
var vec__8020 = labcolor;
var l = cljs.core.nth.call(null,vec__8020,(0),null);
var a = cljs.core.nth.call(null,vec__8020,(1),null);
var b = cljs.core.nth.call(null,vec__8020,(2),null);
var h = app.colors.radToDegrees.call(null,Math.atan2(b,a));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,Math.sqrt(((a * a) + (b * b))),h], null);
});
app.colors.lchToLab = (function app$colors$lchToLab(lchcolor){
var vec__8022 = lchcolor;
var l = cljs.core.nth.call(null,vec__8022,(0),null);
var c = cljs.core.nth.call(null,vec__8022,(1),null);
var h = cljs.core.nth.call(null,vec__8022,(2),null);
var hrad = ((h * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,(Math.cos(hrad) * c),(Math.sin(hrad) * c)], null);
});
app.colors.labToXyz = (function app$colors$labToXyz(labcolor){
var vec__8024 = labcolor;
var l = cljs.core.nth.call(null,vec__8024,(0),null);
var a = cljs.core.nth.call(null,vec__8024,(1),null);
var b = cljs.core.nth.call(null,vec__8024,(2),null);
var y = ((l + (16)) / (116));
var x = ((a / (500)) + y);
var z = (y - (b / (200)));
var xyz = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
return cljs.core.mapv.call(null,cljs.core._STAR_,app.colors.xyzreferencewhited65,cljs.core.mapv.call(null,((function (vec__8024,l,a,b,y,x,z,xyz){
return (function (i){
var cube = Math.pow(i,(3));
if((cube > 0.008856)){
return cube;
} else {
return ((i - ((16) / (116))) / (116));
}
});})(vec__8024,l,a,b,y,x,z,xyz))
,xyz));
});
app.colors.xyzToRgb = (function app$colors$xyzToRgb(xyzcolor){
var vec__8029 = cljs.core.mapv.call(null,(function (p1__8025_SHARP_){
return (p1__8025_SHARP_ / (100));
}),xyzcolor);
var x = cljs.core.nth.call(null,vec__8029,(0),null);
var y = cljs.core.nth.call(null,vec__8029,(1),null);
var z = cljs.core.nth.call(null,vec__8029,(2),null);
var r = (((x * 3.2406) + (y * -1.5372)) + (z * -0.4986));
var g = (((x * -0.9689) + (y * 1.8758)) + (z * 0.0415));
var b = (((x * 0.0557) + (y * -0.204)) + (z * 1.057));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
return cljs.core.mapv.call(null,((function (vec__8029,x,y,z,r,g,b,rgb){
return (function (p1__8026_SHARP_){
return Math.round((p1__8026_SHARP_ * (255)));
});})(vec__8029,x,y,z,r,g,b,rgb))
,cljs.core.mapv.call(null,((function (vec__8029,x,y,z,r,g,b,rgb){
return (function (p1__8027_SHARP_){
if((p1__8027_SHARP_ > 0.0031308)){
return ((1.055 * Math.pow(p1__8027_SHARP_,((1) / 2.4))) - 0.055);
} else {
return (p1__8027_SHARP_ * 12.92);
}
});})(vec__8029,x,y,z,r,g,b,rgb))
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
var args8030 = [];
var len__6044__auto___8033 = arguments.length;
var i__6045__auto___8034 = (0);
while(true){
if((i__6045__auto___8034 < len__6044__auto___8033)){
args8030.push((arguments[i__6045__auto___8034]));

var G__8035 = (i__6045__auto___8034 + (1));
i__6045__auto___8034 = G__8035;
continue;
} else {
}
break;
}

var G__8032 = args8030.length;
switch (G__8032) {
case 1:
return app.colors.darken.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.darken.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8030.length)].join('')));

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
var args8037 = [];
var len__6044__auto___8040 = arguments.length;
var i__6045__auto___8041 = (0);
while(true){
if((i__6045__auto___8041 < len__6044__auto___8040)){
args8037.push((arguments[i__6045__auto___8041]));

var G__8042 = (i__6045__auto___8041 + (1));
i__6045__auto___8041 = G__8042;
continue;
} else {
}
break;
}

var G__8039 = args8037.length;
switch (G__8039) {
case 1:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.colors.lighten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8037.length)].join('')));

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
var vec__8045 = goog.color.hexToRgb(color);
var r = cljs.core.nth.call(null,vec__8045,(0),null);
var g = cljs.core.nth.call(null,vec__8045,(1),null);
var b = cljs.core.nth.call(null,vec__8045,(2),null);
return (((1) - ((((0.299 * r) + (0.587 * g)) + (0.114 * b)) / (255))) > 0.5);
});
app.colors.lighten_color_in_db = (function app$colors$lighten_color_in_db(color){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,color,app.colors.lighten.call(null,color.call(null,cljs.core.deref.call(null,app.db.app_db)),0.03));
});
app.colors.darken_color_in_db = (function app$colors$darken_color_in_db(color){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,color,app.colors.darken.call(null,color.call(null,cljs.core.deref.call(null,app.db.app_db)),0.03));
});
app.colors.inc_contrast = (function app$colors$inc_contrast(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__8062_8078 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8063_8079 = null;
var count__8064_8080 = (0);
var i__8065_8081 = (0);
while(true){
if((i__8065_8081 < count__8064_8080)){
var i_8082 = cljs.core._nth.call(null,chunk__8063_8079,i__8065_8081);
app.colors.lighten_color_in_db.call(null,i_8082);

var G__8083 = seq__8062_8078;
var G__8084 = chunk__8063_8079;
var G__8085 = count__8064_8080;
var G__8086 = (i__8065_8081 + (1));
seq__8062_8078 = G__8083;
chunk__8063_8079 = G__8084;
count__8064_8080 = G__8085;
i__8065_8081 = G__8086;
continue;
} else {
var temp__4425__auto___8087 = cljs.core.seq.call(null,seq__8062_8078);
if(temp__4425__auto___8087){
var seq__8062_8088__$1 = temp__4425__auto___8087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8062_8088__$1)){
var c__5789__auto___8089 = cljs.core.chunk_first.call(null,seq__8062_8088__$1);
var G__8090 = cljs.core.chunk_rest.call(null,seq__8062_8088__$1);
var G__8091 = c__5789__auto___8089;
var G__8092 = cljs.core.count.call(null,c__5789__auto___8089);
var G__8093 = (0);
seq__8062_8078 = G__8090;
chunk__8063_8079 = G__8091;
count__8064_8080 = G__8092;
i__8065_8081 = G__8093;
continue;
} else {
var i_8094 = cljs.core.first.call(null,seq__8062_8088__$1);
app.colors.lighten_color_in_db.call(null,i_8094);

var G__8095 = cljs.core.next.call(null,seq__8062_8088__$1);
var G__8096 = null;
var G__8097 = (0);
var G__8098 = (0);
seq__8062_8078 = G__8095;
chunk__8063_8079 = G__8096;
count__8064_8080 = G__8097;
i__8065_8081 = G__8098;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__8066 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8067 = null;
var count__8068 = (0);
var i__8069 = (0);
while(true){
if((i__8069 < count__8068)){
var i = cljs.core._nth.call(null,chunk__8067,i__8069);
app.colors.lighten_color_in_db.call(null,i);

var G__8099 = seq__8066;
var G__8100 = chunk__8067;
var G__8101 = count__8068;
var G__8102 = (i__8069 + (1));
seq__8066 = G__8099;
chunk__8067 = G__8100;
count__8068 = G__8101;
i__8069 = G__8102;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8066);
if(temp__4425__auto__){
var seq__8066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8066__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8066__$1);
var G__8103 = cljs.core.chunk_rest.call(null,seq__8066__$1);
var G__8104 = c__5789__auto__;
var G__8105 = cljs.core.count.call(null,c__5789__auto__);
var G__8106 = (0);
seq__8066 = G__8103;
chunk__8067 = G__8104;
count__8068 = G__8105;
i__8069 = G__8106;
continue;
} else {
var i = cljs.core.first.call(null,seq__8066__$1);
app.colors.lighten_color_in_db.call(null,i);

var G__8107 = cljs.core.next.call(null,seq__8066__$1);
var G__8108 = null;
var G__8109 = (0);
var G__8110 = (0);
seq__8066 = G__8107;
chunk__8067 = G__8108;
count__8068 = G__8109;
i__8069 = G__8110;
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
var seq__8070_8111 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8071_8112 = null;
var count__8072_8113 = (0);
var i__8073_8114 = (0);
while(true){
if((i__8073_8114 < count__8072_8113)){
var i_8115 = cljs.core._nth.call(null,chunk__8071_8112,i__8073_8114);
app.colors.darken_color_in_db.call(null,i_8115);

var G__8116 = seq__8070_8111;
var G__8117 = chunk__8071_8112;
var G__8118 = count__8072_8113;
var G__8119 = (i__8073_8114 + (1));
seq__8070_8111 = G__8116;
chunk__8071_8112 = G__8117;
count__8072_8113 = G__8118;
i__8073_8114 = G__8119;
continue;
} else {
var temp__4425__auto___8120 = cljs.core.seq.call(null,seq__8070_8111);
if(temp__4425__auto___8120){
var seq__8070_8121__$1 = temp__4425__auto___8120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8070_8121__$1)){
var c__5789__auto___8122 = cljs.core.chunk_first.call(null,seq__8070_8121__$1);
var G__8123 = cljs.core.chunk_rest.call(null,seq__8070_8121__$1);
var G__8124 = c__5789__auto___8122;
var G__8125 = cljs.core.count.call(null,c__5789__auto___8122);
var G__8126 = (0);
seq__8070_8111 = G__8123;
chunk__8071_8112 = G__8124;
count__8072_8113 = G__8125;
i__8073_8114 = G__8126;
continue;
} else {
var i_8127 = cljs.core.first.call(null,seq__8070_8121__$1);
app.colors.darken_color_in_db.call(null,i_8127);

var G__8128 = cljs.core.next.call(null,seq__8070_8121__$1);
var G__8129 = null;
var G__8130 = (0);
var G__8131 = (0);
seq__8070_8111 = G__8128;
chunk__8071_8112 = G__8129;
count__8072_8113 = G__8130;
i__8073_8114 = G__8131;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__8074 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8075 = null;
var count__8076 = (0);
var i__8077 = (0);
while(true){
if((i__8077 < count__8076)){
var i = cljs.core._nth.call(null,chunk__8075,i__8077);
app.colors.darken_color_in_db.call(null,i);

var G__8132 = seq__8074;
var G__8133 = chunk__8075;
var G__8134 = count__8076;
var G__8135 = (i__8077 + (1));
seq__8074 = G__8132;
chunk__8075 = G__8133;
count__8076 = G__8134;
i__8077 = G__8135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8074);
if(temp__4425__auto__){
var seq__8074__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8074__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8074__$1);
var G__8136 = cljs.core.chunk_rest.call(null,seq__8074__$1);
var G__8137 = c__5789__auto__;
var G__8138 = cljs.core.count.call(null,c__5789__auto__);
var G__8139 = (0);
seq__8074 = G__8136;
chunk__8075 = G__8137;
count__8076 = G__8138;
i__8077 = G__8139;
continue;
} else {
var i = cljs.core.first.call(null,seq__8074__$1);
app.colors.darken_color_in_db.call(null,i);

var G__8140 = cljs.core.next.call(null,seq__8074__$1);
var G__8141 = null;
var G__8142 = (0);
var G__8143 = (0);
seq__8074 = G__8140;
chunk__8075 = G__8141;
count__8076 = G__8142;
i__8077 = G__8143;
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
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
if(cljs.core.truth_(cljs.core.deref.call(null,app.db.adjustbg))){
var seq__8160_8176 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8161_8177 = null;
var count__8162_8178 = (0);
var i__8163_8179 = (0);
while(true){
if((i__8163_8179 < count__8162_8178)){
var i_8180 = cljs.core._nth.call(null,chunk__8161_8177,i__8163_8179);
app.colors.darken_color_in_db.call(null,i_8180);

var G__8181 = seq__8160_8176;
var G__8182 = chunk__8161_8177;
var G__8183 = count__8162_8178;
var G__8184 = (i__8163_8179 + (1));
seq__8160_8176 = G__8181;
chunk__8161_8177 = G__8182;
count__8162_8178 = G__8183;
i__8163_8179 = G__8184;
continue;
} else {
var temp__4425__auto___8185 = cljs.core.seq.call(null,seq__8160_8176);
if(temp__4425__auto___8185){
var seq__8160_8186__$1 = temp__4425__auto___8185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8160_8186__$1)){
var c__5789__auto___8187 = cljs.core.chunk_first.call(null,seq__8160_8186__$1);
var G__8188 = cljs.core.chunk_rest.call(null,seq__8160_8186__$1);
var G__8189 = c__5789__auto___8187;
var G__8190 = cljs.core.count.call(null,c__5789__auto___8187);
var G__8191 = (0);
seq__8160_8176 = G__8188;
chunk__8161_8177 = G__8189;
count__8162_8178 = G__8190;
i__8163_8179 = G__8191;
continue;
} else {
var i_8192 = cljs.core.first.call(null,seq__8160_8186__$1);
app.colors.darken_color_in_db.call(null,i_8192);

var G__8193 = cljs.core.next.call(null,seq__8160_8186__$1);
var G__8194 = null;
var G__8195 = (0);
var G__8196 = (0);
seq__8160_8176 = G__8193;
chunk__8161_8177 = G__8194;
count__8162_8178 = G__8195;
i__8163_8179 = G__8196;
continue;
}
} else {
}
}
break;
}

return app.colors.lighten_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__8164 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8165 = null;
var count__8166 = (0);
var i__8167 = (0);
while(true){
if((i__8167 < count__8166)){
var i = cljs.core._nth.call(null,chunk__8165,i__8167);
app.colors.darken_color_in_db.call(null,i);

var G__8197 = seq__8164;
var G__8198 = chunk__8165;
var G__8199 = count__8166;
var G__8200 = (i__8167 + (1));
seq__8164 = G__8197;
chunk__8165 = G__8198;
count__8166 = G__8199;
i__8167 = G__8200;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8164);
if(temp__4425__auto__){
var seq__8164__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8164__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8164__$1);
var G__8201 = cljs.core.chunk_rest.call(null,seq__8164__$1);
var G__8202 = c__5789__auto__;
var G__8203 = cljs.core.count.call(null,c__5789__auto__);
var G__8204 = (0);
seq__8164 = G__8201;
chunk__8165 = G__8202;
count__8166 = G__8203;
i__8167 = G__8204;
continue;
} else {
var i = cljs.core.first.call(null,seq__8164__$1);
app.colors.darken_color_in_db.call(null,i);

var G__8205 = cljs.core.next.call(null,seq__8164__$1);
var G__8206 = null;
var G__8207 = (0);
var G__8208 = (0);
seq__8164 = G__8205;
chunk__8165 = G__8206;
count__8166 = G__8207;
i__8167 = G__8208;
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
var seq__8168_8209 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8169_8210 = null;
var count__8170_8211 = (0);
var i__8171_8212 = (0);
while(true){
if((i__8171_8212 < count__8170_8211)){
var i_8213 = cljs.core._nth.call(null,chunk__8169_8210,i__8171_8212);
app.colors.lighten_color_in_db.call(null,i_8213);

var G__8214 = seq__8168_8209;
var G__8215 = chunk__8169_8210;
var G__8216 = count__8170_8211;
var G__8217 = (i__8171_8212 + (1));
seq__8168_8209 = G__8214;
chunk__8169_8210 = G__8215;
count__8170_8211 = G__8216;
i__8171_8212 = G__8217;
continue;
} else {
var temp__4425__auto___8218 = cljs.core.seq.call(null,seq__8168_8209);
if(temp__4425__auto___8218){
var seq__8168_8219__$1 = temp__4425__auto___8218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8168_8219__$1)){
var c__5789__auto___8220 = cljs.core.chunk_first.call(null,seq__8168_8219__$1);
var G__8221 = cljs.core.chunk_rest.call(null,seq__8168_8219__$1);
var G__8222 = c__5789__auto___8220;
var G__8223 = cljs.core.count.call(null,c__5789__auto___8220);
var G__8224 = (0);
seq__8168_8209 = G__8221;
chunk__8169_8210 = G__8222;
count__8170_8211 = G__8223;
i__8171_8212 = G__8224;
continue;
} else {
var i_8225 = cljs.core.first.call(null,seq__8168_8219__$1);
app.colors.lighten_color_in_db.call(null,i_8225);

var G__8226 = cljs.core.next.call(null,seq__8168_8219__$1);
var G__8227 = null;
var G__8228 = (0);
var G__8229 = (0);
seq__8168_8209 = G__8226;
chunk__8169_8210 = G__8227;
count__8170_8211 = G__8228;
i__8171_8212 = G__8229;
continue;
}
} else {
}
}
break;
}

return app.colors.darken_color_in_db.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636));
} else {
var seq__8172 = cljs.core.seq.call(null,app.db.contrastcolors);
var chunk__8173 = null;
var count__8174 = (0);
var i__8175 = (0);
while(true){
if((i__8175 < count__8174)){
var i = cljs.core._nth.call(null,chunk__8173,i__8175);
app.colors.lighten_color_in_db.call(null,i);

var G__8230 = seq__8172;
var G__8231 = chunk__8173;
var G__8232 = count__8174;
var G__8233 = (i__8175 + (1));
seq__8172 = G__8230;
chunk__8173 = G__8231;
count__8174 = G__8232;
i__8175 = G__8233;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8172);
if(temp__4425__auto__){
var seq__8172__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8172__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8172__$1);
var G__8234 = cljs.core.chunk_rest.call(null,seq__8172__$1);
var G__8235 = c__5789__auto__;
var G__8236 = cljs.core.count.call(null,c__5789__auto__);
var G__8237 = (0);
seq__8172 = G__8234;
chunk__8173 = G__8235;
count__8174 = G__8236;
i__8175 = G__8237;
continue;
} else {
var i = cljs.core.first.call(null,seq__8172__$1);
app.colors.lighten_color_in_db.call(null,i);

var G__8238 = cljs.core.next.call(null,seq__8172__$1);
var G__8239 = null;
var G__8240 = (0);
var G__8241 = (0);
seq__8172 = G__8238;
chunk__8173 = G__8239;
count__8174 = G__8240;
i__8175 = G__8241;
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
 * hue-range returns a vecor of equidistant huevalues.
 */
app.colors.hue_range = (function app$colors$hue_range(length,startvalue){
var distance = Math.floor(((360) / length));
return cljs.core.take.call(null,length,cljs.core.iterate.call(null,((function (distance){
return (function (p1__8242_SHARP_){
return cljs.core.mod.call(null,(distance + p1__8242_SHARP_),(360));
});})(distance))
,startvalue));
});
app.colors.color_list = (function app$colors$color_list(lightness,saturation){
var hr = app.colors.hue_range.call(null,cljs.core.count.call(null,app.db.randomcolors),app.colors.random_hue.call(null));
return cljs.core.mapv.call(null,((function (hr){
return (function (p1__8243_SHARP_){
return app.colors.rgbToHex.call(null,p1__8243_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__8244_SHARP_){
return app.colors.clamped_rgb_vec.call(null,p1__8244_SHARP_);
});})(hr))
,cljs.core.mapv.call(null,((function (hr){
return (function (p1__8245_SHARP_){
return app.colors.lchToRgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightness,saturation,p1__8245_SHARP_], null));
});})(hr))
,hr)));
});
/**
 * soft-palette returns a vector of 7 random soft colors.
 */
app.colors.soft_palette = (function app$colors$soft_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
return app.colors.color_list.call(null,57.292,25.738);
} else {
return app.colors.color_list.call(null,44.921,25.738);
}
});
/**
 * warm-palette returns a vector of 7 random warm colors.
 */
app.colors.warm_palette = (function app$colors$warm_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
return app.colors.color_list.call(null,60.39,33.84);
} else {
return app.colors.color_list.call(null,18.358,33.84);
}
});
/**
 * pop-palette returns a vector of 7 random 'pop' colors.
 */
app.colors.pop_palette = (function app$colors$pop_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
return app.colors.color_list.call(null,77.02,58.1);
} else {
return app.colors.color_list.call(null,30.12,58.1);
}
});
/**
 * muted-palette returns a vector of 7 random muted colors.
 */
app.colors.muted_palette = (function app$colors$muted_palette(){
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db))))){
return app.colors.color_list.call(null,82.11,11.712);
} else {
return app.colors.color_list.call(null,44.02,14.712);
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
var seq__8252 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,app.db.randomcolors,palette));
var chunk__8253 = null;
var count__8254 = (0);
var i__8255 = (0);
while(true){
if((i__8255 < count__8254)){
var vec__8256 = cljs.core._nth.call(null,chunk__8253,i__8255);
var colorname = cljs.core.nth.call(null,vec__8256,(0),null);
var colorstring = cljs.core.nth.call(null,vec__8256,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__8258 = seq__8252;
var G__8259 = chunk__8253;
var G__8260 = count__8254;
var G__8261 = (i__8255 + (1));
seq__8252 = G__8258;
chunk__8253 = G__8259;
count__8254 = G__8260;
i__8255 = G__8261;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8252);
if(temp__4425__auto__){
var seq__8252__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8252__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8252__$1);
var G__8262 = cljs.core.chunk_rest.call(null,seq__8252__$1);
var G__8263 = c__5789__auto__;
var G__8264 = cljs.core.count.call(null,c__5789__auto__);
var G__8265 = (0);
seq__8252 = G__8262;
chunk__8253 = G__8263;
count__8254 = G__8264;
i__8255 = G__8265;
continue;
} else {
var vec__8257 = cljs.core.first.call(null,seq__8252__$1);
var colorname = cljs.core.nth.call(null,vec__8257,(0),null);
var colorstring = cljs.core.nth.call(null,vec__8257,(1),null);
cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,colorname,colorstring);

var G__8266 = cljs.core.next.call(null,seq__8252__$1);
var G__8267 = null;
var G__8268 = (0);
var G__8269 = (0);
seq__8252 = G__8266;
chunk__8253 = G__8267;
count__8254 = G__8268;
i__8255 = G__8269;
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
if(cljs.core.truth_(app.colors.dark_bg_QMARK_.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme)))){
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"vsui","vsui",-1521486896),"vs-dark");
} else {
return cljs.core.assoc.call(null,theme,new cljs.core.Keyword(null,"fg2","fg2",389216222),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"fg3","fg3",-2125364962),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"fg4","fg4",-1177747404),app.colors.lighten.call(null,new cljs.core.Keyword(null,"mainfg","mainfg",-752299820).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"bg2","bg2",-1429908206),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.08),new cljs.core.Keyword(null,"bg3","bg3",1675855905),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.16),new cljs.core.Keyword(null,"bg4","bg4",-1380159660),app.colors.darken.call(null,new cljs.core.Keyword(null,"mainbg","mainbg",-549902636).cljs$core$IFn$_invoke$arity$1(theme),0.24),new cljs.core.Keyword(null,"vsui","vsui",-1521486896),"vs");
}
});
app.colors.within_limit_QMARK_ = (function app$colors$within_limit_QMARK_(limit,resultlist,targetlist){
var seq__8276 = cljs.core.seq.call(null,cljs.core.interleave.call(null,resultlist,targetlist));
var chunk__8277 = null;
var count__8278 = (0);
var i__8279 = (0);
while(true){
if((i__8279 < count__8278)){
var vec__8280 = cljs.core._nth.call(null,chunk__8277,i__8279);
var r = cljs.core.nth.call(null,vec__8280,(0),null);
var t = cljs.core.nth.call(null,vec__8280,(1),null);
cljs.core.print.call(null,(Math.abs((t - r)) <= limit));

var G__8282 = seq__8276;
var G__8283 = chunk__8277;
var G__8284 = count__8278;
var G__8285 = (i__8279 + (1));
seq__8276 = G__8282;
chunk__8277 = G__8283;
count__8278 = G__8284;
i__8279 = G__8285;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8276);
if(temp__4425__auto__){
var seq__8276__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8276__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__8276__$1);
var G__8286 = cljs.core.chunk_rest.call(null,seq__8276__$1);
var G__8287 = c__5789__auto__;
var G__8288 = cljs.core.count.call(null,c__5789__auto__);
var G__8289 = (0);
seq__8276 = G__8286;
chunk__8277 = G__8287;
count__8278 = G__8288;
i__8279 = G__8289;
continue;
} else {
var vec__8281 = cljs.core.first.call(null,seq__8276__$1);
var r = cljs.core.nth.call(null,vec__8281,(0),null);
var t = cljs.core.nth.call(null,vec__8281,(1),null);
cljs.core.print.call(null,(Math.abs((t - r)) <= limit));

var G__8290 = cljs.core.next.call(null,seq__8276__$1);
var G__8291 = null;
var G__8292 = (0);
var G__8293 = (0);
seq__8276 = G__8290;
chunk__8277 = G__8291;
count__8278 = G__8292;
i__8279 = G__8293;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=colors.js.map