// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19718){
var map__19719 = p__19718;
var map__19719__$1 = cljs.core.__destructure_map.call(null,map__19719);
var m = map__19719__$1;
var n = cljs.core.get.call(null,map__19719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19720_19748 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19721_19749 = null;
var count__19722_19750 = (0);
var i__19723_19751 = (0);
while(true){
if((i__19723_19751 < count__19722_19750)){
var f_19752 = cljs.core._nth.call(null,chunk__19721_19749,i__19723_19751);
cljs.core.println.call(null,"  ",f_19752);


var G__19753 = seq__19720_19748;
var G__19754 = chunk__19721_19749;
var G__19755 = count__19722_19750;
var G__19756 = (i__19723_19751 + (1));
seq__19720_19748 = G__19753;
chunk__19721_19749 = G__19754;
count__19722_19750 = G__19755;
i__19723_19751 = G__19756;
continue;
} else {
var temp__5753__auto___19757 = cljs.core.seq.call(null,seq__19720_19748);
if(temp__5753__auto___19757){
var seq__19720_19758__$1 = temp__5753__auto___19757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19720_19758__$1)){
var c__4679__auto___19759 = cljs.core.chunk_first.call(null,seq__19720_19758__$1);
var G__19760 = cljs.core.chunk_rest.call(null,seq__19720_19758__$1);
var G__19761 = c__4679__auto___19759;
var G__19762 = cljs.core.count.call(null,c__4679__auto___19759);
var G__19763 = (0);
seq__19720_19748 = G__19760;
chunk__19721_19749 = G__19761;
count__19722_19750 = G__19762;
i__19723_19751 = G__19763;
continue;
} else {
var f_19764 = cljs.core.first.call(null,seq__19720_19758__$1);
cljs.core.println.call(null,"  ",f_19764);


var G__19765 = cljs.core.next.call(null,seq__19720_19758__$1);
var G__19766 = null;
var G__19767 = (0);
var G__19768 = (0);
seq__19720_19748 = G__19765;
chunk__19721_19749 = G__19766;
count__19722_19750 = G__19767;
i__19723_19751 = G__19768;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19769 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19769);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19769)))?cljs.core.second.call(null,arglists_19769):arglists_19769));
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
var seq__19724_19770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19725_19771 = null;
var count__19726_19772 = (0);
var i__19727_19773 = (0);
while(true){
if((i__19727_19773 < count__19726_19772)){
var vec__19736_19774 = cljs.core._nth.call(null,chunk__19725_19771,i__19727_19773);
var name_19775 = cljs.core.nth.call(null,vec__19736_19774,(0),null);
var map__19739_19776 = cljs.core.nth.call(null,vec__19736_19774,(1),null);
var map__19739_19777__$1 = cljs.core.__destructure_map.call(null,map__19739_19776);
var doc_19778 = cljs.core.get.call(null,map__19739_19777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19779 = cljs.core.get.call(null,map__19739_19777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19775);

cljs.core.println.call(null," ",arglists_19779);

if(cljs.core.truth_(doc_19778)){
cljs.core.println.call(null," ",doc_19778);
} else {
}


var G__19780 = seq__19724_19770;
var G__19781 = chunk__19725_19771;
var G__19782 = count__19726_19772;
var G__19783 = (i__19727_19773 + (1));
seq__19724_19770 = G__19780;
chunk__19725_19771 = G__19781;
count__19726_19772 = G__19782;
i__19727_19773 = G__19783;
continue;
} else {
var temp__5753__auto___19784 = cljs.core.seq.call(null,seq__19724_19770);
if(temp__5753__auto___19784){
var seq__19724_19785__$1 = temp__5753__auto___19784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19724_19785__$1)){
var c__4679__auto___19786 = cljs.core.chunk_first.call(null,seq__19724_19785__$1);
var G__19787 = cljs.core.chunk_rest.call(null,seq__19724_19785__$1);
var G__19788 = c__4679__auto___19786;
var G__19789 = cljs.core.count.call(null,c__4679__auto___19786);
var G__19790 = (0);
seq__19724_19770 = G__19787;
chunk__19725_19771 = G__19788;
count__19726_19772 = G__19789;
i__19727_19773 = G__19790;
continue;
} else {
var vec__19740_19791 = cljs.core.first.call(null,seq__19724_19785__$1);
var name_19792 = cljs.core.nth.call(null,vec__19740_19791,(0),null);
var map__19743_19793 = cljs.core.nth.call(null,vec__19740_19791,(1),null);
var map__19743_19794__$1 = cljs.core.__destructure_map.call(null,map__19743_19793);
var doc_19795 = cljs.core.get.call(null,map__19743_19794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19796 = cljs.core.get.call(null,map__19743_19794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19792);

cljs.core.println.call(null," ",arglists_19796);

if(cljs.core.truth_(doc_19795)){
cljs.core.println.call(null," ",doc_19795);
} else {
}


var G__19797 = cljs.core.next.call(null,seq__19724_19785__$1);
var G__19798 = null;
var G__19799 = (0);
var G__19800 = (0);
seq__19724_19770 = G__19797;
chunk__19725_19771 = G__19798;
count__19726_19772 = G__19799;
i__19727_19773 = G__19800;
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

var seq__19744 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19745 = null;
var count__19746 = (0);
var i__19747 = (0);
while(true){
if((i__19747 < count__19746)){
var role = cljs.core._nth.call(null,chunk__19745,i__19747);
var temp__5753__auto___19801__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___19801__$1)){
var spec_19802 = temp__5753__auto___19801__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19802));
} else {
}


var G__19803 = seq__19744;
var G__19804 = chunk__19745;
var G__19805 = count__19746;
var G__19806 = (i__19747 + (1));
seq__19744 = G__19803;
chunk__19745 = G__19804;
count__19746 = G__19805;
i__19747 = G__19806;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__19744);
if(temp__5753__auto____$1){
var seq__19744__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19744__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__19744__$1);
var G__19807 = cljs.core.chunk_rest.call(null,seq__19744__$1);
var G__19808 = c__4679__auto__;
var G__19809 = cljs.core.count.call(null,c__4679__auto__);
var G__19810 = (0);
seq__19744 = G__19807;
chunk__19745 = G__19808;
count__19746 = G__19809;
i__19747 = G__19810;
continue;
} else {
var role = cljs.core.first.call(null,seq__19744__$1);
var temp__5753__auto___19811__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___19811__$2)){
var spec_19812 = temp__5753__auto___19811__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19812));
} else {
}


var G__19813 = cljs.core.next.call(null,seq__19744__$1);
var G__19814 = null;
var G__19815 = (0);
var G__19816 = (0);
seq__19744 = G__19813;
chunk__19745 = G__19814;
count__19746 = G__19815;
i__19747 = G__19816;
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
var G__19817 = cljs.core.conj.call(null,via,t);
var G__19818 = cljs.core.ex_cause.call(null,t);
via = G__19817;
t = G__19818;
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
var map__19821 = datafied_throwable;
var map__19821__$1 = cljs.core.__destructure_map.call(null,map__19821);
var via = cljs.core.get.call(null,map__19821__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19821__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19821__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19822 = cljs.core.last.call(null,via);
var map__19822__$1 = cljs.core.__destructure_map.call(null,map__19822);
var type = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19823 = data;
var map__19823__$1 = cljs.core.__destructure_map.call(null,map__19823);
var problems = cljs.core.get.call(null,map__19823__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19823__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19823__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19824 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19824__$1 = cljs.core.__destructure_map.call(null,map__19824);
var top_data = map__19824__$1;
var source = cljs.core.get.call(null,map__19824__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19825 = phase;
var G__19825__$1 = (((G__19825 instanceof cljs.core.Keyword))?G__19825.fqn:null);
switch (G__19825__$1) {
case "read-source":
var map__19826 = data;
var map__19826__$1 = cljs.core.__destructure_map.call(null,map__19826);
var line = cljs.core.get.call(null,map__19826__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19826__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19827 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19827__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19827,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19827);
var G__19827__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19827__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19827__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19827__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19827__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19828 = top_data;
var G__19828__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19828,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19828);
var G__19828__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19828__$1);
var G__19828__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19828__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19828__$2);
var G__19828__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19828__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19828__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19828__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19828__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19829 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19829,(0),null);
var method = cljs.core.nth.call(null,vec__19829,(1),null);
var file = cljs.core.nth.call(null,vec__19829,(2),null);
var line = cljs.core.nth.call(null,vec__19829,(3),null);
var G__19832 = top_data;
var G__19832__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19832,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19832);
var G__19832__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19832__$1);
var G__19832__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__19832__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19832__$2);
var G__19832__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19832__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19832__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19832__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19832__$4;
}

break;
case "execution":
var vec__19833 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19833,(0),null);
var method = cljs.core.nth.call(null,vec__19833,(1),null);
var file = cljs.core.nth.call(null,vec__19833,(2),null);
var line = cljs.core.nth.call(null,vec__19833,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19820_SHARP_){
var or__4253__auto__ = (p1__19820_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19820_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__19836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19836__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19836,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19836);
var G__19836__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19836__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19836__$1);
var G__19836__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__19836__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19836__$2);
var G__19836__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19836__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19836__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19836__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19836__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19825__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19840){
var map__19841 = p__19840;
var map__19841__$1 = cljs.core.__destructure_map.call(null,map__19841);
var triage_data = map__19841__$1;
var phase = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19841__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19842 = phase;
var G__19842__$1 = (((G__19842 instanceof cljs.core.Keyword))?G__19842.fqn:null);
switch (G__19842__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19843_19852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19844_19853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19845_19854 = true;
var _STAR_print_fn_STAR__temp_val__19846_19855 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19845_19854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19846_19855);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19838_SHARP_){
return cljs.core.dissoc.call(null,p1__19838_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19844_19853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19843_19852);
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
var _STAR_print_newline_STAR__orig_val__19847_19856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19848_19857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19849_19858 = true;
var _STAR_print_fn_STAR__temp_val__19850_19859 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19849_19858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19850_19859);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19839_SHARP_){
return cljs.core.dissoc.call(null,p1__19839_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19848_19857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19847_19856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19842__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
