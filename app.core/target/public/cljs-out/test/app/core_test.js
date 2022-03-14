// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('app.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('app.colors');
app.core_test.test_hexToBgrHex = (function app$core_test$test_hexToBgrHex(){
return cljs.test.test_var.call(null,app.core_test.test_hexToBgrHex.cljs$lang$var);
});
app.core_test.test_hexToBgrHex.cljs$lang$test = (function (){
cljs.core.PersistentVector.EMPTY;

var in$ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#112328","#a3d4e8","#e6c2db","#2e3440","#3b4252","#434c5e"], null);
var out = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x282311","0xe8d4a3","0xdbc2e6","0x40342e","0x52423b","0x5e4c43"], null);
var iter__4652__auto__ = (function app$core_test$iter__9252(s__9253){
return (new cljs.core.LazySeq(null,(function (){
var s__9253__$1 = s__9253;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__9253__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var i = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__9253__$1,i,xs__6308__auto__,temp__5753__auto__,in$,out){
return (function app$core_test$iter__9252_$_iter__9254(s__9255){
return (new cljs.core.LazySeq(null,((function (s__9253__$1,i,xs__6308__auto__,temp__5753__auto__,in$,out){
return (function (){
var s__9255__$1 = s__9255;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__9255__$1);
if(temp__5753__auto____$1){
var s__9255__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9255__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__9255__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__9257 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__9256 = (0);
while(true){
if((i__9256 < size__4651__auto__)){
var o = cljs.core._nth.call(null,c__4650__auto__,i__9256);
cljs.core.chunk_append.call(null,b__9257,(function (){try{var values__8909__auto__ = (new cljs.core.List(null,app.colors.hexToBgrHex.call(null,i),(new cljs.core.List(null,o,null,(1),null)),(2),null));
var result__8910__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8909__auto__);
if(cljs.core.truth_(result__8910__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8909__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8909__auto__),null,(1),null)),(2),null)),null]));
}

return result__8910__auto__;
}catch (e9258){var t__8960__auto__ = e9258;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,t__8960__auto__,null]));
}})());

var G__9260 = (i__9256 + (1));
i__9256 = G__9260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9257),app$core_test$iter__9252_$_iter__9254.call(null,cljs.core.chunk_rest.call(null,s__9255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9257),null);
}
} else {
var o = cljs.core.first.call(null,s__9255__$2);
return cljs.core.cons.call(null,(function (){try{var values__8909__auto__ = (new cljs.core.List(null,app.colors.hexToBgrHex.call(null,i),(new cljs.core.List(null,o,null,(1),null)),(2),null));
var result__8910__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8909__auto__);
if(cljs.core.truth_(result__8910__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8909__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8909__auto__),null,(1),null)),(2),null)),null]));
}

return result__8910__auto__;
}catch (e9259){var t__8960__auto__ = e9259;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/martin/github/themecreator/app.core/test/app/core_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),13,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("color","hexToBgrHex","color/hexToBgrHex",-1474235866,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Symbol(null,"o","o",290524299,null)),13,t__8960__auto__,null]));
}})(),app$core_test$iter__9252_$_iter__9254.call(null,cljs.core.rest.call(null,s__9255__$2)));
}
} else {
return null;
}
break;
}
});})(s__9253__$1,i,xs__6308__auto__,temp__5753__auto__,in$,out))
,null,null));
});})(s__9253__$1,i,xs__6308__auto__,temp__5753__auto__,in$,out))
;
var fs__4649__auto__ = cljs.core.seq.call(null,iterys__4648__auto__.call(null,out));
if(fs__4649__auto__){
return cljs.core.concat.call(null,fs__4649__auto__,app$core_test$iter__9252.call(null,cljs.core.rest.call(null,s__9253__$1)));
} else {
var G__9261 = cljs.core.rest.call(null,s__9253__$1);
s__9253__$1 = G__9261;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,in$);
});

(app.core_test.test_hexToBgrHex.cljs$lang$var = new cljs.core.Var(function(){return app.core_test.test_hexToBgrHex;},new cljs.core.Symbol("app.core-test","test-hexToBgrHex","app.core-test/test-hexToBgrHex",1486425690,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Symbol(null,"test-hexToBgrHex","test-hexToBgrHex",-1105133331,null),"/home/martin/github/themecreator/app.core/test/app/core_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.core_test.test_hexToBgrHex)?app.core_test.test_hexToBgrHex.cljs$lang$test:null)])));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.test.successful_QMARK_.call(null,m)){
return cljs.core.println.call(null,"Success!");
} else {
return cljs.core.println.call(null,"FAIL");
}
}));
app.core_test._main = (function app$core_test$_main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___9265 = arguments.length;
var i__4865__auto___9266 = (0);
while(true){
if((i__4865__auto___9266 < len__4864__auto___9265)){
args__4870__auto__.push((arguments[i__4865__auto___9266]));

var G__9267 = (i__4865__auto___9266 + (1));
i__4865__auto___9266 = G__9267;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.core_test._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.core_test._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.test.run_block.call(null,(function (){var env9263 = cljs.test.empty_env.call(null);
var summary9264 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env9263);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9029__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9029__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core_test.test_hexToBgrHex;},new cljs.core.Symbol("app.core-test","test-hexToBgrHex","app.core-test/test-hexToBgrHex",1486425690,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Symbol(null,"test-hexToBgrHex","test-hexToBgrHex",-1105133331,null),"/home/martin/github/themecreator/app.core/test/app/core_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.core_test.test_hexToBgrHex)?app.core_test.test_hexToBgrHex.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9029__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary9264,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary9264),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env9263);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary9264));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary9264),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(app.core_test._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.core_test._main.cljs$lang$applyTo = (function (seq9262){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9262));
}));


//# sourceMappingURL=core_test.js.map
