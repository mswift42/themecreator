// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.impl.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.get-id",this$);
}
}
}
});

reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,x);
} else {
var m__4431__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.as-element",this$);
}
}
}
});

reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
var m__4431__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.make-element",this$);
}
}
}
});


//# sourceMappingURL=protocols.js.map
