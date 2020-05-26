// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16379){
var map__16380 = p__16379;
var map__16380__$1 = (((((!((map__16380 == null))))?(((((map__16380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16380):map__16380);
var m = map__16380__$1;
var n = cljs.core.get.call(null,map__16380__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__16382_16414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16383_16415 = null;
var count__16384_16416 = (0);
var i__16385_16417 = (0);
while(true){
if((i__16385_16417 < count__16384_16416)){
var f_16418 = cljs.core._nth.call(null,chunk__16383_16415,i__16385_16417);
cljs.core.println.call(null,"  ",f_16418);


var G__16419 = seq__16382_16414;
var G__16420 = chunk__16383_16415;
var G__16421 = count__16384_16416;
var G__16422 = (i__16385_16417 + (1));
seq__16382_16414 = G__16419;
chunk__16383_16415 = G__16420;
count__16384_16416 = G__16421;
i__16385_16417 = G__16422;
continue;
} else {
var temp__5457__auto___16423 = cljs.core.seq.call(null,seq__16382_16414);
if(temp__5457__auto___16423){
var seq__16382_16424__$1 = temp__5457__auto___16423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16382_16424__$1)){
var c__4550__auto___16425 = cljs.core.chunk_first.call(null,seq__16382_16424__$1);
var G__16426 = cljs.core.chunk_rest.call(null,seq__16382_16424__$1);
var G__16427 = c__4550__auto___16425;
var G__16428 = cljs.core.count.call(null,c__4550__auto___16425);
var G__16429 = (0);
seq__16382_16414 = G__16426;
chunk__16383_16415 = G__16427;
count__16384_16416 = G__16428;
i__16385_16417 = G__16429;
continue;
} else {
var f_16430 = cljs.core.first.call(null,seq__16382_16424__$1);
cljs.core.println.call(null,"  ",f_16430);


var G__16431 = cljs.core.next.call(null,seq__16382_16424__$1);
var G__16432 = null;
var G__16433 = (0);
var G__16434 = (0);
seq__16382_16414 = G__16431;
chunk__16383_16415 = G__16432;
count__16384_16416 = G__16433;
i__16385_16417 = G__16434;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16435);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16435)))?cljs.core.second.call(null,arglists_16435):arglists_16435));
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
var seq__16386_16436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16387_16437 = null;
var count__16388_16438 = (0);
var i__16389_16439 = (0);
while(true){
if((i__16389_16439 < count__16388_16438)){
var vec__16400_16440 = cljs.core._nth.call(null,chunk__16387_16437,i__16389_16439);
var name_16441 = cljs.core.nth.call(null,vec__16400_16440,(0),null);
var map__16403_16442 = cljs.core.nth.call(null,vec__16400_16440,(1),null);
var map__16403_16443__$1 = (((((!((map__16403_16442 == null))))?(((((map__16403_16442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16403_16442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16403_16442):map__16403_16442);
var doc_16444 = cljs.core.get.call(null,map__16403_16443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16445 = cljs.core.get.call(null,map__16403_16443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16441);

cljs.core.println.call(null," ",arglists_16445);

if(cljs.core.truth_(doc_16444)){
cljs.core.println.call(null," ",doc_16444);
} else {
}


var G__16446 = seq__16386_16436;
var G__16447 = chunk__16387_16437;
var G__16448 = count__16388_16438;
var G__16449 = (i__16389_16439 + (1));
seq__16386_16436 = G__16446;
chunk__16387_16437 = G__16447;
count__16388_16438 = G__16448;
i__16389_16439 = G__16449;
continue;
} else {
var temp__5457__auto___16450 = cljs.core.seq.call(null,seq__16386_16436);
if(temp__5457__auto___16450){
var seq__16386_16451__$1 = temp__5457__auto___16450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16386_16451__$1)){
var c__4550__auto___16452 = cljs.core.chunk_first.call(null,seq__16386_16451__$1);
var G__16453 = cljs.core.chunk_rest.call(null,seq__16386_16451__$1);
var G__16454 = c__4550__auto___16452;
var G__16455 = cljs.core.count.call(null,c__4550__auto___16452);
var G__16456 = (0);
seq__16386_16436 = G__16453;
chunk__16387_16437 = G__16454;
count__16388_16438 = G__16455;
i__16389_16439 = G__16456;
continue;
} else {
var vec__16405_16457 = cljs.core.first.call(null,seq__16386_16451__$1);
var name_16458 = cljs.core.nth.call(null,vec__16405_16457,(0),null);
var map__16408_16459 = cljs.core.nth.call(null,vec__16405_16457,(1),null);
var map__16408_16460__$1 = (((((!((map__16408_16459 == null))))?(((((map__16408_16459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16408_16459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16408_16459):map__16408_16459);
var doc_16461 = cljs.core.get.call(null,map__16408_16460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16462 = cljs.core.get.call(null,map__16408_16460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16458);

cljs.core.println.call(null," ",arglists_16462);

if(cljs.core.truth_(doc_16461)){
cljs.core.println.call(null," ",doc_16461);
} else {
}


var G__16463 = cljs.core.next.call(null,seq__16386_16451__$1);
var G__16464 = null;
var G__16465 = (0);
var G__16466 = (0);
seq__16386_16436 = G__16463;
chunk__16387_16437 = G__16464;
count__16388_16438 = G__16465;
i__16389_16439 = G__16466;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__16410 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16411 = null;
var count__16412 = (0);
var i__16413 = (0);
while(true){
if((i__16413 < count__16412)){
var role = cljs.core._nth.call(null,chunk__16411,i__16413);
var temp__5457__auto___16467__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16467__$1)){
var spec_16468 = temp__5457__auto___16467__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16468));
} else {
}


var G__16469 = seq__16410;
var G__16470 = chunk__16411;
var G__16471 = count__16412;
var G__16472 = (i__16413 + (1));
seq__16410 = G__16469;
chunk__16411 = G__16470;
count__16412 = G__16471;
i__16413 = G__16472;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__16410);
if(temp__5457__auto____$1){
var seq__16410__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16410__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16410__$1);
var G__16473 = cljs.core.chunk_rest.call(null,seq__16410__$1);
var G__16474 = c__4550__auto__;
var G__16475 = cljs.core.count.call(null,c__4550__auto__);
var G__16476 = (0);
seq__16410 = G__16473;
chunk__16411 = G__16474;
count__16412 = G__16475;
i__16413 = G__16476;
continue;
} else {
var role = cljs.core.first.call(null,seq__16410__$1);
var temp__5457__auto___16477__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16477__$2)){
var spec_16478 = temp__5457__auto___16477__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16478));
} else {
}


var G__16479 = cljs.core.next.call(null,seq__16410__$1);
var G__16480 = null;
var G__16481 = (0);
var G__16482 = (0);
seq__16410 = G__16479;
chunk__16411 = G__16480;
count__16412 = G__16481;
i__16413 = G__16482;
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
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
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
var G__16483 = cljs.core.conj.call(null,via,t);
var G__16484 = cljs.core.ex_cause.call(null,t);
via = G__16483;
t = G__16484;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
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
var map__16487 = datafied_throwable;
var map__16487__$1 = (((((!((map__16487 == null))))?(((((map__16487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16487):map__16487);
var via = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16488 = cljs.core.last.call(null,via);
var map__16488__$1 = (((((!((map__16488 == null))))?(((((map__16488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16488):map__16488);
var type = cljs.core.get.call(null,map__16488__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16488__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16489 = data;
var map__16489__$1 = (((((!((map__16489 == null))))?(((((map__16489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16489):map__16489);
var problems = cljs.core.get.call(null,map__16489__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16489__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16489__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16490 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16490__$1 = (((((!((map__16490 == null))))?(((((map__16490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16490):map__16490);
var top_data = map__16490__$1;
var source = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16495 = phase;
var G__16495__$1 = (((G__16495 instanceof cljs.core.Keyword))?G__16495.fqn:null);
switch (G__16495__$1) {
case "read-source":
var map__16496 = data;
var map__16496__$1 = (((((!((map__16496 == null))))?(((((map__16496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16496):map__16496);
var line = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16498 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16498__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16498,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16498);
var G__16498__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16498__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16498__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16498__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16498__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16499 = top_data;
var G__16499__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16499,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16499);
var G__16499__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16499__$1);
var G__16499__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16499__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16499__$2);
var G__16499__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16499__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16499__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16499__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16499__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16500 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16500,(0),null);
var method = cljs.core.nth.call(null,vec__16500,(1),null);
var file = cljs.core.nth.call(null,vec__16500,(2),null);
var line = cljs.core.nth.call(null,vec__16500,(3),null);
var G__16503 = top_data;
var G__16503__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16503);
var G__16503__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16503__$1);
var G__16503__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__16503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16503__$2);
var G__16503__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16503__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16503__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16503__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16503__$4;
}

break;
case "execution":
var vec__16504 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16504,(0),null);
var method = cljs.core.nth.call(null,vec__16504,(1),null);
var file = cljs.core.nth.call(null,vec__16504,(2),null);
var line = cljs.core.nth.call(null,vec__16504,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__16504,source__$1,method,file,line,G__16495,G__16495__$1,map__16487,map__16487__$1,via,trace,phase,map__16488,map__16488__$1,type,message,data,map__16489,map__16489__$1,problems,fn,caller,map__16490,map__16490__$1,top_data,source){
return (function (p1__16486_SHARP_){
var or__4131__auto__ = (p1__16486_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16486_SHARP_);
}
});})(vec__16504,source__$1,method,file,line,G__16495,G__16495__$1,map__16487,map__16487__$1,via,trace,phase,map__16488,map__16488__$1,type,message,data,map__16489,map__16489__$1,problems,fn,caller,map__16490,map__16490__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__16507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16507);
var G__16507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16507__$1);
var G__16507__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__16507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16507__$2);
var G__16507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16495__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16511){
var map__16512 = p__16511;
var map__16512__$1 = (((((!((map__16512 == null))))?(((((map__16512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16512):map__16512);
var triage_data = map__16512__$1;
var phase = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__16514 = phase;
var G__16514__$1 = (((G__16514 instanceof cljs.core.Keyword))?G__16514.fqn:null);
switch (G__16514__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16515_16524 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16516_16525 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16517_16526 = true;
var _STAR_print_fn_STAR__temp_val__16518_16527 = ((function (_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16517_16526;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16518_16527;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,_STAR_print_fn_STAR__temp_val__16518_16527,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,_STAR_print_fn_STAR__temp_val__16518_16527,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__16509_SHARP_){
return cljs.core.dissoc.call(null,p1__16509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,_STAR_print_fn_STAR__temp_val__16518_16527,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__16515_16524,_STAR_print_fn_STAR__orig_val__16516_16525,_STAR_print_newline_STAR__temp_val__16517_16526,_STAR_print_fn_STAR__temp_val__16518_16527,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16516_16525;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16515_16524;
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
var _STAR_print_newline_STAR__orig_val__16519_16528 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16520_16529 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16521_16530 = true;
var _STAR_print_fn_STAR__temp_val__16522_16531 = ((function (_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16521_16530;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16522_16531;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,_STAR_print_fn_STAR__temp_val__16522_16531,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,_STAR_print_fn_STAR__temp_val__16522_16531,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__16510_SHARP_){
return cljs.core.dissoc.call(null,p1__16510_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,_STAR_print_fn_STAR__temp_val__16522_16531,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__16519_16528,_STAR_print_fn_STAR__orig_val__16520_16529,_STAR_print_newline_STAR__temp_val__16521_16530,_STAR_print_fn_STAR__temp_val__16522_16531,sb__4661__auto__,G__16514,G__16514__$1,loc,class_name,simple_class,cause_type,format,map__16512,map__16512__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16520_16529;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16519_16528;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16514__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
