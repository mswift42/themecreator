// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.impl.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_13046 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_13046(this$);
}
});

var reagent$impl$protocols$Compiler$parse_tag$dyn_13047 = (function (this$,tag_name,tag_value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.impl.protocols.parse_tag[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__4551__auto__.call(null,this$,tag_name,tag_value));
} else {
var m__4549__auto__ = (reagent.impl.protocols.parse_tag["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__4549__auto__.call(null,this$,tag_name,tag_value));
} else {
throw cljs.core.missing_protocol("Compiler.parse-tag",this$);
}
}
});
reagent.impl.protocols.parse_tag = (function reagent$impl$protocols$parse_tag(this$,tag_name,tag_value){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$parse_tag$arity$3 == null)))))){
return this$.reagent$impl$protocols$Compiler$parse_tag$arity$3(this$,tag_name,tag_value);
} else {
return reagent$impl$protocols$Compiler$parse_tag$dyn_13047(this$,tag_name,tag_value);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_13048 = (function (this$,x){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4551__auto__.call(null,this$,x));
} else {
var m__4549__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4549__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_13048(this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_13049 = (function (this$,argv,component,jsprops,first_child){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__4551__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
var m__4549__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__4549__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
throw cljs.core.missing_protocol("Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_13049(this$,argv,component,jsprops,first_child);
}
});

