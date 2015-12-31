// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7842_7856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7843_7857 = null;
var count__7844_7858 = (0);
var i__7845_7859 = (0);
while(true){
if((i__7845_7859 < count__7844_7858)){
var f_7860 = cljs.core._nth.call(null,chunk__7843_7857,i__7845_7859);
cljs.core.println.call(null,"  ",f_7860);

var G__7861 = seq__7842_7856;
var G__7862 = chunk__7843_7857;
var G__7863 = count__7844_7858;
var G__7864 = (i__7845_7859 + (1));
seq__7842_7856 = G__7861;
chunk__7843_7857 = G__7862;
count__7844_7858 = G__7863;
i__7845_7859 = G__7864;
continue;
} else {
var temp__4425__auto___7865 = cljs.core.seq.call(null,seq__7842_7856);
if(temp__4425__auto___7865){
var seq__7842_7866__$1 = temp__4425__auto___7865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_7866__$1)){
var c__5789__auto___7867 = cljs.core.chunk_first.call(null,seq__7842_7866__$1);
var G__7868 = cljs.core.chunk_rest.call(null,seq__7842_7866__$1);
var G__7869 = c__5789__auto___7867;
var G__7870 = cljs.core.count.call(null,c__5789__auto___7867);
var G__7871 = (0);
seq__7842_7856 = G__7868;
chunk__7843_7857 = G__7869;
count__7844_7858 = G__7870;
i__7845_7859 = G__7871;
continue;
} else {
var f_7872 = cljs.core.first.call(null,seq__7842_7866__$1);
cljs.core.println.call(null,"  ",f_7872);

var G__7873 = cljs.core.next.call(null,seq__7842_7866__$1);
var G__7874 = null;
var G__7875 = (0);
var G__7876 = (0);
seq__7842_7856 = G__7873;
chunk__7843_7857 = G__7874;
count__7844_7858 = G__7875;
i__7845_7859 = G__7876;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7877 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4986__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7877);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7877)))?cljs.core.second.call(null,arglists_7877):arglists_7877));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7847 = null;
var count__7848 = (0);
var i__7849 = (0);
while(true){
if((i__7849 < count__7848)){
var vec__7850 = cljs.core._nth.call(null,chunk__7847,i__7849);
var name = cljs.core.nth.call(null,vec__7850,(0),null);
var map__7851 = cljs.core.nth.call(null,vec__7850,(1),null);
var map__7851__$1 = ((((!((map__7851 == null)))?((((map__7851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7851):map__7851);
var doc = cljs.core.get.call(null,map__7851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7878 = seq__7846;
var G__7879 = chunk__7847;
var G__7880 = count__7848;
var G__7881 = (i__7849 + (1));
seq__7846 = G__7878;
chunk__7847 = G__7879;
count__7848 = G__7880;
i__7849 = G__7881;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7846);
if(temp__4425__auto__){
var seq__7846__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__7846__$1);
var G__7882 = cljs.core.chunk_rest.call(null,seq__7846__$1);
var G__7883 = c__5789__auto__;
var G__7884 = cljs.core.count.call(null,c__5789__auto__);
var G__7885 = (0);
seq__7846 = G__7882;
chunk__7847 = G__7883;
count__7848 = G__7884;
i__7849 = G__7885;
continue;
} else {
var vec__7853 = cljs.core.first.call(null,seq__7846__$1);
var name = cljs.core.nth.call(null,vec__7853,(0),null);
var map__7854 = cljs.core.nth.call(null,vec__7853,(1),null);
var map__7854__$1 = ((((!((map__7854 == null)))?((((map__7854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7854):map__7854);
var doc = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7886 = cljs.core.next.call(null,seq__7846__$1);
var G__7887 = null;
var G__7888 = (0);
var G__7889 = (0);
seq__7846 = G__7886;
chunk__7847 = G__7887;
count__7848 = G__7888;
i__7849 = G__7889;
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
}
});

//# sourceMappingURL=repl.js.map