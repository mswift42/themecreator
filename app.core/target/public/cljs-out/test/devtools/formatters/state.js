// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return (!((devtools.formatters.state._STAR_current_state_STAR_ == null)));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(devtools.formatters.state.valid_current_state_QMARK_.call(null)){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12226 = arguments.length;
var i__4865__auto___12227 = (0);
while(true){
if((i__4865__auto___12227 < len__4864__auto___12226)){
args__4870__auto__.push((arguments[i__4865__auto___12227]));

var G__12228 = (i__4865__auto___12227 + (1));
i__4865__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(devtools.formatters.state.valid_current_state_QMARK_.call(null)){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return (devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.call(null,f,devtools.formatters.state._STAR_current_state_STAR_,args));
}));

(devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq12224){
var G__12225 = cljs.core.first.call(null,seq12224);
var seq12224__$1 = cljs.core.next.call(null,seq12224);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12225,seq12224__$1);
}));

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object);
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history.call(null);
return cljs.core.some.call(null,(function (p1__12229_SHARP_){
return (p1__12229_SHARP_ === object);
}),history);
});
devtools.formatters.state.get_last_object_from_current_history = (function devtools$formatters$state$get_last_object_from_current_history(){
return cljs.core.first.call(null,devtools.formatters.state.get_current_history.call(null));
});
devtools.formatters.state.get_second_last_object_from_current_history = (function devtools$formatters$state$get_second_last_object_from_current_history(){
return cljs.core.second.call(null,devtools.formatters.state.get_current_history.call(null));
});
devtools.formatters.state.present_path_segment = (function devtools$formatters$state$present_path_segment(v){
if(typeof v === 'string'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
return "?";

}
}
}
});
devtools.formatters.state.seek_path_segment = (function devtools$formatters$state$seek_path_segment(coll,val){
var _STAR_ = (function (p__12230){
var vec__12231 = p__12230;
var k = cljs.core.nth.call(null,vec__12231,(0),null);
var v = cljs.core.nth.call(null,vec__12231,(1),null);
if((k === val)){
return devtools.formatters.state.present_path_segment.call(null,k);
} else {
if((v === val)){
return devtools.formatters.state.present_path_segment.call(null,k);
} else {
return null;
}
}
});
return cljs.core.some.call(null,_STAR_,coll);
});
devtools.formatters.state.build_path_segment = (function devtools$formatters$state$build_path_segment(parent_object,object){
if(cljs.core.map_QMARK_.call(null,parent_object)){
return devtools.formatters.state.seek_path_segment.call(null,cljs.core.seq.call(null,parent_object),object);
} else {
if(cljs.core.sequential_QMARK_.call(null,parent_object)){
return devtools.formatters.state.seek_path_segment.call(null,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
}),parent_object),object);
} else {
return null;
}
}
});
devtools.formatters.state.mapping_QMARK_ = (function devtools$formatters$state$mapping_QMARK_(history,obj){
var obj_kw = ((((cljs.core.vector_QMARK_.call(null,obj)) && (((cljs.core._EQ_.call(null,cljs.core.count.call(null,obj),(2))) && ((((cljs.core.first.call(null,obj) instanceof cljs.core.Keyword)) || (((typeof cljs.core.first.call(null,obj) === 'string') || (typeof cljs.core.first.call(null,obj) === 'number')))))))))?cljs.core.first.call(null,obj):null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_.call(null,history);
if(and__4251__auto__){
return obj_kw;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.contains_QMARK_.call(null,history,obj_kw);
} else {
return null;
}
});
devtools.formatters.state.extend_path_info = (function devtools$formatters$state$extend_path_info(path_info,object){
var parent_object = devtools.formatters.state.get_last_object_from_current_history.call(null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_.call(null,parent_object);
if(and__4251__auto__){
return devtools.formatters.state.mapping_QMARK_.call(null,parent_object,object);
} else {
return and__4251__auto__;
}
})())){
return path_info;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_.call(null,devtools.formatters.state.get_second_last_object_from_current_history.call(null));
if(and__4251__auto__){
return devtools.formatters.state.mapping_QMARK_.call(null,devtools.formatters.state.get_second_last_object_from_current_history.call(null),parent_object);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.conj.call(null,(function (){var or__4253__auto__ = path_info;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.first.call(null,parent_object));
} else {
if((!((devtools.formatters.state.build_path_segment.call(null,parent_object,object) == null)))){
return cljs.core.conj.call(null,(function (){var or__4253__auto__ = path_info;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),devtools.formatters.state.build_path_segment.call(null,parent_object,object));
} else {
return path_info;

}
}
}
});
devtools.formatters.state.add_object_to_current_path_info_BANG_ = (function devtools$formatters$state$add_object_to_current_path_info_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"path-info","path-info",-1932254250),devtools.formatters.state.extend_path_info,object);
});
devtools.formatters.state.get_current_path_info = (function devtools$formatters$state$get_current_path_info(){
return new cljs.core.Keyword(null,"path-info","path-info",-1932254250).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null)));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606));
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473));
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if((!((val == null)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888));
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level.call(null,devtools.formatters.state.set_depth_budget.call(null,state,null),null);
});

//# sourceMappingURL=state.js.map
