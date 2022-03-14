// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('figwheel.main.async_result');
goog.require('cljs.core');
goog.require('figwheel.repl');
figwheel.main.async_result.send = (function figwheel$main$async_result$send(result_str){
var msg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"async-result",new cljs.core.Keyword(null,"value","value",305978217),result_str], null);
figwheel.repl.debug.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-send","async-send",1306520047),cljs.core.pr_str.call(null,msg)], null));

return figwheel.repl.respond_to_connection.call(null,msg);
});

figwheel.main.async_result.throw_ex = (function figwheel$main$async_result$throw_ex(ex){
if(cljs.core.truth_(ex)){
var msg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"async-result",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("figwheel.main.async-result","exception","figwheel.main.async-result/exception",-1473427908),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),(function (){try{return cljs.core.pr_str.call(null,ex);
}catch (e11164){if((e11164 instanceof Error)){
var e = e11164;
return "Error";
} else {
throw e11164;

}
}})(),new cljs.core.Keyword(null,"message","message",-406056002),ex.message,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,ex),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.repl.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),ex.stack], null)], null);
figwheel.repl.debug.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-throw","async-throw",-437911662),cljs.core.pr_str.call(null,msg)], null));

return figwheel.repl.respond_to_connection.call(null,msg);
} else {
return null;
}
});

//# sourceMappingURL=async_result.js.map
