// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.display');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.connection');
goog.require('goog.dom');
goog.require('goog.Timer');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('clojure.string');
adzerk.boot_reload.display.transition_duration = (250);
adzerk.boot_reload.display.cljs_logo = "<svg width='40px' height='40px' viewBox='0 0 438 438' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n    <!-- Generator: Sketch 3.3.3 (12072) - http://www.bohemiancoding.com/sketch -->\n    <circle fill='#FFFFFF' cx='219' cy='219' r='219'></circle>\n    <g transform='translate(20.000000, 21.000000)'>\n        <g transform='translate(69.000000, 131.000000)'>\n            <path fill='#96CA4B' d='M39,119.6 C26.3,119.6 16.7,115.9 10.1,108.5 C3.5,101.1 0.2,90.5 0.2,76.7 C0.2,62.6 3.6,51.8 10.5,44.2 C17.4,36.6 27.3,32.8 40.4,32.8 C49.2,32.8 57.2,34.4 64.2,37.7 L58.8,52 C51.3,49.1 45.1,47.6 40.2,47.6 C25.7,47.6 18.5,57.2 18.5,76.4 C18.5,85.8 20.3,92.8 23.9,97.6 C27.5,102.3 32.8,104.7 39.8,104.7 C47.7,104.7 55.2,102.7 62.3,98.8 L62.3,114.3 C59.1,116.2 55.7,117.5 52.1,118.3 C48.5,119.2 44.1,119.6 39,119.6 L39,119.6 Z'></path>\n            <path fill='#96CA4B' d='M111.4,118.1 L93.6,118.1 L93.6,0.3 L111.4,0.3 L111.4,118.1 L111.4,118.1 Z'></path>\n            <path fill='#5F7FBF' d='M139.9,155.3 C134.6,155.3 130.1,154.7 126.6,153.4 L126.6,139.3 C130,140.2 133.5,140.7 137.1,140.7 C144.7,140.7 148.5,136.4 148.5,127.8 L148.5,34.3 L166.3,34.3 L166.3,129 C166.3,137.6 164,144.2 159.5,148.6 C154.9,153.1 148.4,155.3 139.9,155.3 L139.9,155.3 Z M147.4,12.2 C147.4,9 148.3,6.6 150,4.9 C151.7,3.2 154.2,2.3 157.5,2.3 C160.6,2.3 163.1,3.2 164.8,4.9 C166.5,6.6 167.4,9.1 167.4,12.2 C167.4,15.2 166.5,17.6 164.8,19.4 C163.1,21.1 160.6,22 157.5,22 C154.3,22 151.8,21.1 150,19.4 C148.2,17.6 147.4,15.2 147.4,12.2 L147.4,12.2 Z'></path>\n            <path fill='#5F7FBF' d='M259.5,94.3 C259.5,102.5 256.5,108.7 250.6,113.1 C244.6,117.5 236.1,119.6 225,119.6 C213.8,119.6 204.9,117.9 198.1,114.5 L198.1,99.1 C207.9,103.6 217.1,105.9 225.6,105.9 C236.5,105.9 242,102.6 242,96 C242,93.9 241.4,92.1 240.2,90.7 C239,89.3 237,87.8 234.2,86.3 C231.4,84.8 227.6,83.1 222.6,81.2 C213,77.5 206.4,73.7 203,70 C199.6,66.3 197.9,61.4 197.9,55.5 C197.9,48.3 200.8,42.8 206.6,38.8 C212.4,34.8 220.2,32.9 230.2,32.9 C240,32.9 249.3,34.9 258.1,38.9 L252.3,52.3 C243.3,48.6 235.7,46.7 229.5,46.7 C220.1,46.7 215.4,49.4 215.4,54.7 C215.4,57.3 216.6,59.5 219.1,61.4 C221.5,63.2 226.9,65.7 235.1,68.9 C242,71.6 247,74 250.2,76.2 C253.3,78.4 255.6,81 257.2,83.9 C258.7,86.7 259.5,90.2 259.5,94.3 L259.5,94.3 Z'></path>\n        </g>\n        <path stroke='#96CA4B' stroke-width='6' fill='#96CA4B' d='M183,376.7 C91.8,368.6 20,291.7 20,198.4 C20,105.1 91.8,28.3 183,20.2 L183,0.1 C80.7,8.3 0,94.1 0,198.5 C0,302.9 80.7,388.7 183,396.9 L183,376.7 L183,376.7 Z'></path>\n        <path stroke='#5F7FBF' stroke-width='6' fill='#5F7FBF' d='M215,0.1 L215,20.2 C306.2,28.3 378,105.2 378,198.5 C378,291.8 306.2,368.7 215,376.8 L215,396.9 C317.3,388.7 398,302.9 398,198.5 C398,94.1 317.3,8.3 215,0.1 L215,0.1 Z'></path>\n    </g>\n  </svg>";
adzerk.boot_reload.display.__GT_css = (function adzerk$boot_reload$display$__GT_css(rules){
if(!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,rules)))){
console.log(cljs.core.pr_str.call(null,rules));
} else {
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,rules))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)))))].join('')));
}

var rules__$1 = cljs.core.partition.call(null,(2),rules);
var render_rule = ((function (rules__$1){
return (function (p__7040){
var vec__7041 = p__7040;
var attr = cljs.core.nth.call(null,vec__7041,(0),null);
var v = cljs.core.nth.call(null,vec__7041,(1),null);
return [cljs.core.str(cljs.core.name.call(null,attr)),cljs.core.str(":"),cljs.core.str(v),cljs.core.str(";")].join('');
});})(rules__$1))
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,render_rule,rules__$1));
});
adzerk.boot_reload.display.mk_node = (function adzerk$boot_reload$display$mk_node(var_args){
var args7042 = [];
var len__6044__auto___7045 = arguments.length;
var i__6045__auto___7046 = (0);
while(true){
if((i__6045__auto___7046 < len__6044__auto___7045)){
args7042.push((arguments[i__6045__auto___7046]));

var G__7047 = (i__6045__auto___7046 + (1));
i__6045__auto___7046 = G__7047;
continue;
} else {
}
break;
}

var G__7044 = args7042.length;
switch (G__7044) {
case 1:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7042.length)].join('')));

}
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$1 = (function (type){
return adzerk.boot_reload.display.mk_node.call(null,type,cljs.core.PersistentArrayMap.EMPTY,null);
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$2 = (function (type,attrs){
return adzerk.boot_reload.display.mk_node.call(null,type,attrs,null);
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3 = (function (type,attrs,content){
return goog.dom.createDom(cljs.core.name.call(null,type),cljs.core.clj__GT_js.call(null,cljs.core.update.call(null,attrs,new cljs.core.Keyword(null,"style","style",-496642736),adzerk.boot_reload.display.__GT_css)),cljs.core.clj__GT_js.call(null,content));
});

adzerk.boot_reload.display.mk_node.cljs$lang$maxFixedArity = 3;
adzerk.boot_reload.display.style = (function adzerk$boot_reload$display$style(var_args){
var args__6051__auto__ = [];
var len__6044__auto___7050 = arguments.length;
var i__6045__auto___7051 = (0);
while(true){
if((i__6045__auto___7051 < len__6044__auto___7050)){
args__6051__auto__.push((arguments[i__6045__auto___7051]));

var G__7052 = (i__6045__auto___7051 + (1));
i__6045__auto___7051 = G__7052;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic = (function (types){
var s = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"flex-c","flex-c",1898731114),new cljs.core.Keyword(null,"bg-clear","bg-clear",-673074101),new cljs.core.Keyword(null,"mr10","mr10",-144509621),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429),new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.Keyword(null,"container","container",-1736937707)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255, 161, 161, 0.952941)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgb(170, 170, 170) 0px 0px 1px"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-webkit-box-align","-webkit-box-align",447270356),"center",new cljs.core.Keyword(null,"-webkit-align-items","-webkit-align-items",1515523100),"center",new cljs.core.Keyword(null,"-ms-flex-align","-ms-flex-align",-1660699009),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),"-webkit-box",new cljs.core.Keyword(null,"display","display",242065432),"-webkit-flex",new cljs.core.Keyword(null,"display","display",242065432),"-ms-flexbox",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-100px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255, 220, 110, 0.952941)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgb(170, 170, 170) 0px 0px 1px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px"], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"320px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str(adzerk.boot_reload.display.transition_duration),cljs.core.str("ms")].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px"], null)]);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,s,types))], null);
});

adzerk.boot_reload.display.style.cljs$lang$maxFixedArity = (0);

adzerk.boot_reload.display.style.cljs$lang$applyTo = (function (seq7049){
return adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7049));
});
adzerk.boot_reload.display.open_file = (function adzerk$boot_reload$display$open_file(data){
return adzerk.boot_reload.connection.send_message_BANG_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"open-file","open-file",-895422430)], null),cljs.core.select_keys.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null))));
});
adzerk.boot_reload.display.exception_node = (function adzerk$boot_reload$display$exception_node(p__7053){
var map__7057 = p__7053;
var map__7057__$1 = ((((!((map__7057 == null)))?((((map__7057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7057):map__7057);
var data = map__7057__$1;
var message = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var G__7059 = adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),null,message);
goog.events.listen(G__7059,goog.events.EventType.CLICK,((function (G__7059,map__7057,map__7057__$1,data,message,line,file){
return (function (){
return adzerk.boot_reload.display.open_file.call(null,data);
});})(G__7059,map__7057,map__7057__$1,data,message,line,file))
);

return G__7059;
});
adzerk.boot_reload.display.warning_node = (function adzerk$boot_reload$display$warning_node(p__7060){
var map__7064 = p__7060;
var map__7064__$1 = ((((!((map__7064 == null)))?((((map__7064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7064):map__7064);
var data = map__7064__$1;
var message = cljs.core.get.call(null,map__7064__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__7064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__7064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var G__7066 = adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"span","span",1394872991),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"mr10","mr10",-144509621)),message),adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"span","span",1394872991),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"mr10","mr10",-144509621)),[cljs.core.str("at line "),cljs.core.str(line)].join('')),adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"span","span",1394872991),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"mr10","mr10",-144509621)),file)], null));
goog.events.listen(G__7066,goog.events.EventType.CLICK,((function (G__7066,map__7064,map__7064__$1,data,message,line,file){
return (function (){
return adzerk.boot_reload.display.open_file.call(null,data);
});})(G__7066,map__7064,map__7064__$1,data,message,line,file))
);

return G__7066;
});
adzerk.boot_reload.display.reloaded_node = (function adzerk$boot_reload$display$reloaded_node(){
return adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),null,null);
});
adzerk.boot_reload.display.warnings_node = (function adzerk$boot_reload$display$warnings_node(warnings){
return adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),null,cljs.core.map.call(null,adzerk.boot_reload.display.warning_node,warnings));
});
adzerk.boot_reload.display.construct_hud_node = (function adzerk$boot_reload$display$construct_hud_node(p__7067){
var map__7071 = p__7067;
var map__7071__$1 = ((((!((map__7071 == null)))?((((map__7071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7071):map__7071);
var messages = map__7071__$1;
var warnings = cljs.core.get.call(null,map__7071__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var exception = cljs.core.get.call(null,map__7071__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var G__7073 = adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-c","flex-c",1898731114),(cljs.core.truth_(exception)?new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040):((cljs.core.seq.call(null,warnings))?new cljs.core.Keyword(null,"bg-yellow","bg-yellow",-1293468429):new cljs.core.Keyword(null,"bg-clear","bg-clear",-673074101)
))));
goog.dom.append(G__7073,adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.Keyword(null,"mr10","mr10",-144509621)),goog.dom.htmlToDocumentFragment(adzerk.boot_reload.display.cljs_logo)));

goog.dom.append(G__7073,(cljs.core.truth_(exception)?adzerk.boot_reload.display.exception_node.call(null,exception):((cljs.core.seq.call(null,warnings))?adzerk.boot_reload.display.warnings_node.call(null,warnings):adzerk.boot_reload.display.reloaded_node.call(null)
)));

return G__7073;
});
adzerk.boot_reload.display.remove_container_BANG_ = (function adzerk$boot_reload$display$remove_container_BANG_(id){
var el = goog.dom.getElement(id);
goog.dom.setProperties(el,cljs.core.clj__GT_js.call(null,cljs.core.update.call(null,adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"hide","hide",-596913169)),new cljs.core.Keyword(null,"style","style",-496642736),adzerk.boot_reload.display.__GT_css)));

return goog.Timer.callOnce(((function (el){
return (function (){
return goog.dom.removeNode(el);
});})(el))
,adzerk.boot_reload.display.transition_duration);
});
adzerk.boot_reload.display.insert_container_BANG_ = (function adzerk$boot_reload$display$insert_container_BANG_(id,p__7074){
var map__7077 = p__7074;
var map__7077__$1 = ((((!((map__7077 == null)))?((((map__7077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7077):map__7077);
var messages = map__7077__$1;
var warnings = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var exception = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var hud = adzerk.boot_reload.display.construct_hud_node.call(null,messages);
var el = adzerk.boot_reload.display.mk_node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"hide","hide",-596913169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),hud);
var show_BANG_ = ((function (hud,el,map__7077,map__7077__$1,messages,warnings,exception){
return (function (){
return goog.dom.setProperties(el,cljs.core.clj__GT_js.call(null,cljs.core.update.call(null,adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"container","container",-1736937707)),new cljs.core.Keyword(null,"style","style",-496642736),adzerk.boot_reload.display.__GT_css)));
});})(hud,el,map__7077,map__7077__$1,messages,warnings,exception))
;
var no_prob_QMARK_ = (cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,cljs.core.seq.call(null,warnings)));
var hide_BANG_ = ((function (hud,el,show_BANG_,no_prob_QMARK_,map__7077,map__7077__$1,messages,warnings,exception){
return (function (){
return goog.dom.setProperties(el,cljs.core.clj__GT_js.call(null,cljs.core.update.call(null,adzerk.boot_reload.display.style.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"hide","hide",-596913169)),new cljs.core.Keyword(null,"style","style",-496642736),adzerk.boot_reload.display.__GT_css)));
});})(hud,el,show_BANG_,no_prob_QMARK_,map__7077,map__7077__$1,messages,warnings,exception))
;
goog.dom.appendChild(document.body,el);

goog.Timer.callOnce(show_BANG_,adzerk.boot_reload.display.transition_duration);

if(no_prob_QMARK_){
return goog.Timer.callOnce(hide_BANG_,(adzerk.boot_reload.display.transition_duration * (5)));
} else {
return null;
}
});
adzerk.boot_reload.display.gen_id = (function adzerk$boot_reload$display$gen_id(){
return [cljs.core.str("boot-reload-hud-"),cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null)))].join('');
});
if(typeof adzerk.boot_reload.display.current_container !== 'undefined'){
} else {
adzerk.boot_reload.display.current_container = cljs.core.atom.call(null,null);
}
adzerk.boot_reload.display.display = (function adzerk$boot_reload$display$display(messages,opts){
return cljs.core.swap_BANG_.call(null,adzerk.boot_reload.display.current_container,(function (container){
if(cljs.core.truth_(container)){
try{adzerk.boot_reload.display.remove_container_BANG_.call(null,container);
}catch (e7080){if((e7080 instanceof Error)){
var __7081 = e7080;
} else {
throw e7080;

}
}} else {
}

var id = adzerk.boot_reload.display.gen_id.call(null);
adzerk.boot_reload.display.insert_container_BANG_.call(null,id,messages);

return id;
}));
});

//# sourceMappingURL=display.js.map