// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21223){
var map__21224 = p__21223;
var map__21224__$1 = (((((!((map__21224 == null))))?(((((map__21224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21224):map__21224);
var m = map__21224__$1;
var n = cljs.core.get.call(null,map__21224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21226_21258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21227_21259 = null;
var count__21228_21260 = (0);
var i__21229_21261 = (0);
while(true){
if((i__21229_21261 < count__21228_21260)){
var f_21262 = cljs.core._nth.call(null,chunk__21227_21259,i__21229_21261);
cljs.core.println.call(null,"  ",f_21262);


var G__21263 = seq__21226_21258;
var G__21264 = chunk__21227_21259;
var G__21265 = count__21228_21260;
var G__21266 = (i__21229_21261 + (1));
seq__21226_21258 = G__21263;
chunk__21227_21259 = G__21264;
count__21228_21260 = G__21265;
i__21229_21261 = G__21266;
continue;
} else {
var temp__5735__auto___21267 = cljs.core.seq.call(null,seq__21226_21258);
if(temp__5735__auto___21267){
var seq__21226_21268__$1 = temp__5735__auto___21267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21226_21268__$1)){
var c__4550__auto___21269 = cljs.core.chunk_first.call(null,seq__21226_21268__$1);
var G__21270 = cljs.core.chunk_rest.call(null,seq__21226_21268__$1);
var G__21271 = c__4550__auto___21269;
var G__21272 = cljs.core.count.call(null,c__4550__auto___21269);
var G__21273 = (0);
seq__21226_21258 = G__21270;
chunk__21227_21259 = G__21271;
count__21228_21260 = G__21272;
i__21229_21261 = G__21273;
continue;
} else {
var f_21274 = cljs.core.first.call(null,seq__21226_21268__$1);
cljs.core.println.call(null,"  ",f_21274);


var G__21275 = cljs.core.next.call(null,seq__21226_21268__$1);
var G__21276 = null;
var G__21277 = (0);
var G__21278 = (0);
seq__21226_21258 = G__21275;
chunk__21227_21259 = G__21276;
count__21228_21260 = G__21277;
i__21229_21261 = G__21278;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21279 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21279);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21279)))?cljs.core.second.call(null,arglists_21279):arglists_21279));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21230_21280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21231_21281 = null;
var count__21232_21282 = (0);
var i__21233_21283 = (0);
while(true){
if((i__21233_21283 < count__21232_21282)){
var vec__21244_21284 = cljs.core._nth.call(null,chunk__21231_21281,i__21233_21283);
var name_21285 = cljs.core.nth.call(null,vec__21244_21284,(0),null);
var map__21247_21286 = cljs.core.nth.call(null,vec__21244_21284,(1),null);
var map__21247_21287__$1 = (((((!((map__21247_21286 == null))))?(((((map__21247_21286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21247_21286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21247_21286):map__21247_21286);
var doc_21288 = cljs.core.get.call(null,map__21247_21287__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21289 = cljs.core.get.call(null,map__21247_21287__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21285);

cljs.core.println.call(null," ",arglists_21289);

if(cljs.core.truth_(doc_21288)){
cljs.core.println.call(null," ",doc_21288);
} else {
}


var G__21290 = seq__21230_21280;
var G__21291 = chunk__21231_21281;
var G__21292 = count__21232_21282;
var G__21293 = (i__21233_21283 + (1));
seq__21230_21280 = G__21290;
chunk__21231_21281 = G__21291;
count__21232_21282 = G__21292;
i__21233_21283 = G__21293;
continue;
} else {
var temp__5735__auto___21294 = cljs.core.seq.call(null,seq__21230_21280);
if(temp__5735__auto___21294){
var seq__21230_21295__$1 = temp__5735__auto___21294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21230_21295__$1)){
var c__4550__auto___21296 = cljs.core.chunk_first.call(null,seq__21230_21295__$1);
var G__21297 = cljs.core.chunk_rest.call(null,seq__21230_21295__$1);
var G__21298 = c__4550__auto___21296;
var G__21299 = cljs.core.count.call(null,c__4550__auto___21296);
var G__21300 = (0);
seq__21230_21280 = G__21297;
chunk__21231_21281 = G__21298;
count__21232_21282 = G__21299;
i__21233_21283 = G__21300;
continue;
} else {
var vec__21249_21301 = cljs.core.first.call(null,seq__21230_21295__$1);
var name_21302 = cljs.core.nth.call(null,vec__21249_21301,(0),null);
var map__21252_21303 = cljs.core.nth.call(null,vec__21249_21301,(1),null);
var map__21252_21304__$1 = (((((!((map__21252_21303 == null))))?(((((map__21252_21303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21252_21303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21252_21303):map__21252_21303);
var doc_21305 = cljs.core.get.call(null,map__21252_21304__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21306 = cljs.core.get.call(null,map__21252_21304__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21302);

cljs.core.println.call(null," ",arglists_21306);

if(cljs.core.truth_(doc_21305)){
cljs.core.println.call(null," ",doc_21305);
} else {
}


var G__21307 = cljs.core.next.call(null,seq__21230_21295__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__21230_21280 = G__21307;
chunk__21231_21281 = G__21308;
count__21232_21282 = G__21309;
i__21233_21283 = G__21310;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__21254 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21255 = null;
var count__21256 = (0);
var i__21257 = (0);
while(true){
if((i__21257 < count__21256)){
var role = cljs.core._nth.call(null,chunk__21255,i__21257);
var temp__5735__auto___21311__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21311__$1)){
var spec_21312 = temp__5735__auto___21311__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21312));
} else {
}


var G__21313 = seq__21254;
var G__21314 = chunk__21255;
var G__21315 = count__21256;
var G__21316 = (i__21257 + (1));
seq__21254 = G__21313;
chunk__21255 = G__21314;
count__21256 = G__21315;
i__21257 = G__21316;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__21254);
if(temp__5735__auto____$1){
var seq__21254__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21254__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21254__$1);
var G__21317 = cljs.core.chunk_rest.call(null,seq__21254__$1);
var G__21318 = c__4550__auto__;
var G__21319 = cljs.core.count.call(null,c__4550__auto__);
var G__21320 = (0);
seq__21254 = G__21317;
chunk__21255 = G__21318;
count__21256 = G__21319;
i__21257 = G__21320;
continue;
} else {
var role = cljs.core.first.call(null,seq__21254__$1);
var temp__5735__auto___21321__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21321__$2)){
var spec_21322 = temp__5735__auto___21321__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21322));
} else {
}


var G__21323 = cljs.core.next.call(null,seq__21254__$1);
var G__21324 = null;
var G__21325 = (0);
var G__21326 = (0);
seq__21254 = G__21323;
chunk__21255 = G__21324;
count__21256 = G__21325;
i__21257 = G__21326;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21327 = cljs.core.conj.call(null,via,t);
var G__21328 = cljs.core.ex_cause.call(null,t);
via = G__21327;
t = G__21328;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21331 = datafied_throwable;
var map__21331__$1 = (((((!((map__21331 == null))))?(((((map__21331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21331):map__21331);
var via = cljs.core.get.call(null,map__21331__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21331__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21331__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21332 = cljs.core.last.call(null,via);
var map__21332__$1 = (((((!((map__21332 == null))))?(((((map__21332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);
var type = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21333 = data;
var map__21333__$1 = (((((!((map__21333 == null))))?(((((map__21333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21333):map__21333);
var problems = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21334 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21334__$1 = (((((!((map__21334 == null))))?(((((map__21334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21334):map__21334);
var top_data = map__21334__$1;
var source = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21339 = phase;
var G__21339__$1 = (((G__21339 instanceof cljs.core.Keyword))?G__21339.fqn:null);
switch (G__21339__$1) {
case "read-source":
var map__21340 = data;
var map__21340__$1 = (((((!((map__21340 == null))))?(((((map__21340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21340):map__21340);
var line = cljs.core.get.call(null,map__21340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21342 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21342__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21342,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21342);
var G__21342__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21342__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21342__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21342__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21343 = top_data;
var G__21343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21343);
var G__21343__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21343__$1);
var G__21343__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21343__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21343__$2);
var G__21343__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21343__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21343__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21343__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21343__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21344 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21344,(0),null);
var method = cljs.core.nth.call(null,vec__21344,(1),null);
var file = cljs.core.nth.call(null,vec__21344,(2),null);
var line = cljs.core.nth.call(null,vec__21344,(3),null);
var G__21347 = top_data;
var G__21347__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21347,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21347);
var G__21347__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21347__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21347__$1);
var G__21347__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__21347__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21347__$2);
var G__21347__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21347__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21347__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21347__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21347__$4;
}

break;
case "execution":
var vec__21348 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21348,(0),null);
var method = cljs.core.nth.call(null,vec__21348,(1),null);
var file = cljs.core.nth.call(null,vec__21348,(2),null);
var line = cljs.core.nth.call(null,vec__21348,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__21348,source__$1,method,file,line,G__21339,G__21339__$1,map__21331,map__21331__$1,via,trace,phase,map__21332,map__21332__$1,type,message,data,map__21333,map__21333__$1,problems,fn,caller,map__21334,map__21334__$1,top_data,source){
return (function (p1__21330_SHARP_){
var or__4131__auto__ = (p1__21330_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21330_SHARP_);
}
});})(vec__21348,source__$1,method,file,line,G__21339,G__21339__$1,map__21331,map__21331__$1,via,trace,phase,map__21332,map__21332__$1,type,message,data,map__21333,map__21333__$1,problems,fn,caller,map__21334,map__21334__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21351 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21351__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21351,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21351);
var G__21351__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21351__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21351__$1);
var G__21351__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21351__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21351__$2);
var G__21351__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21351__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21351__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21351__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21351__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21339__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21355){
var map__21356 = p__21355;
var map__21356__$1 = (((((!((map__21356 == null))))?(((((map__21356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21356):map__21356);
var triage_data = map__21356__$1;
var phase = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21358 = phase;
var G__21358__$1 = (((G__21358 instanceof cljs.core.Keyword))?G__21358.fqn:null);
switch (G__21358__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21359_21368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21360_21369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21361_21370 = true;
var _STAR_print_fn_STAR__temp_val__21362_21371 = ((function (_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21361_21370;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21362_21371;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,_STAR_print_fn_STAR__temp_val__21362_21371,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,_STAR_print_fn_STAR__temp_val__21362_21371,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21353_SHARP_){
return cljs.core.dissoc.call(null,p1__21353_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,_STAR_print_fn_STAR__temp_val__21362_21371,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21359_21368,_STAR_print_fn_STAR__orig_val__21360_21369,_STAR_print_newline_STAR__temp_val__21361_21370,_STAR_print_fn_STAR__temp_val__21362_21371,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21360_21369;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21359_21368;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21363_21372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21364_21373 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21365_21374 = true;
var _STAR_print_fn_STAR__temp_val__21366_21375 = ((function (_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21365_21374;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21366_21375;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,_STAR_print_fn_STAR__temp_val__21366_21375,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,_STAR_print_fn_STAR__temp_val__21366_21375,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21354_SHARP_){
return cljs.core.dissoc.call(null,p1__21354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,_STAR_print_fn_STAR__temp_val__21366_21375,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21363_21372,_STAR_print_fn_STAR__orig_val__21364_21373,_STAR_print_newline_STAR__temp_val__21365_21374,_STAR_print_fn_STAR__temp_val__21366_21375,sb__4661__auto__,G__21358,G__21358__$1,loc,class_name,simple_class,cause_type,format,map__21356,map__21356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21364_21373;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21363_21372;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21358__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
