// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10206){
var map__10207 = p__10206;
var map__10207__$1 = cljs.core.__destructure_map.call(null,map__10207);
var m = map__10207__$1;
var n = cljs.core.get.call(null,map__10207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__10208_10285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10209_10286 = null;
var count__10210_10287 = (0);
var i__10211_10288 = (0);
while(true){
if((i__10211_10288 < count__10210_10287)){
var f_10289 = cljs.core._nth.call(null,chunk__10209_10286,i__10211_10288);
cljs.core.println.call(null,"  ",f_10289);


var G__10291 = seq__10208_10285;
var G__10292 = chunk__10209_10286;
var G__10293 = count__10210_10287;
var G__10294 = (i__10211_10288 + (1));
seq__10208_10285 = G__10291;
chunk__10209_10286 = G__10292;
count__10210_10287 = G__10293;
i__10211_10288 = G__10294;
continue;
} else {
var temp__5753__auto___10295 = cljs.core.seq.call(null,seq__10208_10285);
if(temp__5753__auto___10295){
var seq__10208_10296__$1 = temp__5753__auto___10295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10208_10296__$1)){
var c__4679__auto___10297 = cljs.core.chunk_first.call(null,seq__10208_10296__$1);
var G__10298 = cljs.core.chunk_rest.call(null,seq__10208_10296__$1);
var G__10299 = c__4679__auto___10297;
var G__10300 = cljs.core.count.call(null,c__4679__auto___10297);
var G__10301 = (0);
seq__10208_10285 = G__10298;
chunk__10209_10286 = G__10299;
count__10210_10287 = G__10300;
i__10211_10288 = G__10301;
continue;
} else {
var f_10302 = cljs.core.first.call(null,seq__10208_10296__$1);
cljs.core.println.call(null,"  ",f_10302);


var G__10303 = cljs.core.next.call(null,seq__10208_10296__$1);
var G__10304 = null;
var G__10305 = (0);
var G__10306 = (0);
seq__10208_10285 = G__10303;
chunk__10209_10286 = G__10304;
count__10210_10287 = G__10305;
i__10211_10288 = G__10306;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10307 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10307);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10307)))?cljs.core.second.call(null,arglists_10307):arglists_10307));
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
var seq__10226_10308 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10227_10309 = null;
var count__10228_10310 = (0);
var i__10229_10311 = (0);
while(true){
if((i__10229_10311 < count__10228_10310)){
var vec__10238_10312 = cljs.core._nth.call(null,chunk__10227_10309,i__10229_10311);
var name_10313 = cljs.core.nth.call(null,vec__10238_10312,(0),null);
var map__10241_10314 = cljs.core.nth.call(null,vec__10238_10312,(1),null);
var map__10241_10315__$1 = cljs.core.__destructure_map.call(null,map__10241_10314);
var doc_10316 = cljs.core.get.call(null,map__10241_10315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10317 = cljs.core.get.call(null,map__10241_10315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10313);

cljs.core.println.call(null," ",arglists_10317);

if(cljs.core.truth_(doc_10316)){
cljs.core.println.call(null," ",doc_10316);
} else {
}


var G__10318 = seq__10226_10308;
var G__10319 = chunk__10227_10309;
var G__10320 = count__10228_10310;
var G__10321 = (i__10229_10311 + (1));
seq__10226_10308 = G__10318;
chunk__10227_10309 = G__10319;
count__10228_10310 = G__10320;
i__10229_10311 = G__10321;
continue;
} else {
var temp__5753__auto___10322 = cljs.core.seq.call(null,seq__10226_10308);
if(temp__5753__auto___10322){
var seq__10226_10323__$1 = temp__5753__auto___10322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10226_10323__$1)){
var c__4679__auto___10324 = cljs.core.chunk_first.call(null,seq__10226_10323__$1);
var G__10325 = cljs.core.chunk_rest.call(null,seq__10226_10323__$1);
var G__10326 = c__4679__auto___10324;
var G__10327 = cljs.core.count.call(null,c__4679__auto___10324);
var G__10328 = (0);
seq__10226_10308 = G__10325;
chunk__10227_10309 = G__10326;
count__10228_10310 = G__10327;
i__10229_10311 = G__10328;
continue;
} else {
var vec__10242_10329 = cljs.core.first.call(null,seq__10226_10323__$1);
var name_10330 = cljs.core.nth.call(null,vec__10242_10329,(0),null);
var map__10245_10331 = cljs.core.nth.call(null,vec__10242_10329,(1),null);
var map__10245_10332__$1 = cljs.core.__destructure_map.call(null,map__10245_10331);
var doc_10333 = cljs.core.get.call(null,map__10245_10332__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10334 = cljs.core.get.call(null,map__10245_10332__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10330);

cljs.core.println.call(null," ",arglists_10334);

if(cljs.core.truth_(doc_10333)){
cljs.core.println.call(null," ",doc_10333);
} else {
}


var G__10335 = cljs.core.next.call(null,seq__10226_10323__$1);
var G__10336 = null;
var G__10337 = (0);
var G__10338 = (0);
seq__10226_10308 = G__10335;
chunk__10227_10309 = G__10336;
count__10228_10310 = G__10337;
i__10229_10311 = G__10338;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__10257 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10258 = null;
var count__10259 = (0);
var i__10260 = (0);
while(true){
if((i__10260 < count__10259)){
var role = cljs.core._nth.call(null,chunk__10258,i__10260);
var temp__5753__auto___10339__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___10339__$1)){
var spec_10340 = temp__5753__auto___10339__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10340));
} else {
}


var G__10341 = seq__10257;
var G__10342 = chunk__10258;
var G__10343 = count__10259;
var G__10344 = (i__10260 + (1));
seq__10257 = G__10341;
chunk__10258 = G__10342;
count__10259 = G__10343;
i__10260 = G__10344;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__10257);
if(temp__5753__auto____$1){
var seq__10257__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10257__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__10257__$1);
var G__10345 = cljs.core.chunk_rest.call(null,seq__10257__$1);
var G__10346 = c__4679__auto__;
var G__10347 = cljs.core.count.call(null,c__4679__auto__);
var G__10348 = (0);
seq__10257 = G__10345;
chunk__10258 = G__10346;
count__10259 = G__10347;
i__10260 = G__10348;
continue;
} else {
var role = cljs.core.first.call(null,seq__10257__$1);
var temp__5753__auto___10349__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___10349__$2)){
var spec_10350 = temp__5753__auto___10349__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10350));
} else {
}


var G__10351 = cljs.core.next.call(null,seq__10257__$1);
var G__10352 = null;
var G__10353 = (0);
var G__10354 = (0);
seq__10257 = G__10351;
chunk__10258 = G__10352;
count__10259 = G__10353;
i__10260 = G__10354;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__10355 = cljs.core.conj.call(null,via,t);
var G__10356 = cljs.core.ex_cause.call(null,t);
via = G__10355;
t = G__10356;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__10359 = datafied_throwable;
var map__10359__$1 = cljs.core.__destructure_map.call(null,map__10359);
var via = cljs.core.get.call(null,map__10359__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10359__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__10359__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10360 = cljs.core.last.call(null,via);
var map__10360__$1 = cljs.core.__destructure_map.call(null,map__10360);
var type = cljs.core.get.call(null,map__10360__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10360__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__10360__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10361 = data;
var map__10361__$1 = cljs.core.__destructure_map.call(null,map__10361);
var problems = cljs.core.get.call(null,map__10361__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__10361__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__10361__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10362 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__10362__$1 = cljs.core.__destructure_map.call(null,map__10362);
var top_data = map__10362__$1;
var source = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__10363 = phase;
var G__10363__$1 = (((G__10363 instanceof cljs.core.Keyword))?G__10363.fqn:null);
switch (G__10363__$1) {
case "read-source":
var map__10364 = data;
var map__10364__$1 = cljs.core.__destructure_map.call(null,map__10364);
var line = cljs.core.get.call(null,map__10364__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10364__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10365 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__10365__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10365,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10365);
var G__10365__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10365__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10365__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10365__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10366 = top_data;
var G__10366__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10366,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10366);
var G__10366__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10366__$1);
var G__10366__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10366__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10366__$2);
var G__10366__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10366__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10366__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10366__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10366__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10367 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10367,(0),null);
var method = cljs.core.nth.call(null,vec__10367,(1),null);
var file = cljs.core.nth.call(null,vec__10367,(2),null);
var line = cljs.core.nth.call(null,vec__10367,(3),null);
var G__10370 = top_data;
var G__10370__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__10370,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10370);
var G__10370__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__10370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10370__$1);
var G__10370__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__10370__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10370__$2);
var G__10370__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10370__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10370__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10370__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10370__$4;
}

break;
case "execution":
var vec__10371 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10371,(0),null);
var method = cljs.core.nth.call(null,vec__10371,(1),null);
var file = cljs.core.nth.call(null,vec__10371,(2),null);
var line = cljs.core.nth.call(null,vec__10371,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__10358_SHARP_){
var or__4253__auto__ = (p1__10358_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__10358_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__10374 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10374__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__10374,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10374);
var G__10374__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10374__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10374__$1);
var G__10374__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__10374__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10374__$2);
var G__10374__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__10374__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10374__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10374__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10374__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10378){
var map__10379 = p__10378;
var map__10379__$1 = cljs.core.__destructure_map.call(null,map__10379);
var triage_data = map__10379__$1;
var phase = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10380 = phase;
var G__10380__$1 = (((G__10380 instanceof cljs.core.Keyword))?G__10380.fqn:null);
switch (G__10380__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10381_10390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10382_10391 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10383_10392 = true;
var _STAR_print_fn_STAR__temp_val__10384_10393 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10383_10392);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10384_10393);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10376_SHARP_){
return cljs.core.dissoc.call(null,p1__10376_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10382_10391);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10381_10390);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10385_10394 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10386_10395 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10387_10396 = true;
var _STAR_print_fn_STAR__temp_val__10388_10397 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10387_10396);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10388_10397);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10377_SHARP_){
return cljs.core.dissoc.call(null,p1__10377_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10386_10395);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10385_10394);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10380__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
