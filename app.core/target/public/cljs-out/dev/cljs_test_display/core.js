// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('cljs_test_display.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
goog.require('cljs_test_display.favicon');
goog.require('cljs_test_display.notify');

/**
 * @define {string}
 */
cljs_test_display.core.root_node_id = goog.define("cljs_test_display.core.root_node_id","app");

/**
 * @define {boolean}
 */
cljs_test_display.core.change_favicon = goog.define("cljs_test_display.core.change_favicon",true);

/**
 * @define {boolean}
 */
cljs_test_display.core.notifications = goog.define("cljs_test_display.core.notifications",true);

/**
 * @define {boolean}
 */
cljs_test_display.core.printing = goog.define("cljs_test_display.core.printing",false);
if((typeof cljs_test_display !== 'undefined') && (typeof cljs_test_display.core !== 'undefined') && (typeof cljs_test_display.core.state !== 'undefined')){
} else {
cljs_test_display.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs_test_display.core.root_app_node = (function cljs_test_display$core$root_app_node(){
return goog.dom.getElement(cljs_test_display.core.root_node_id);
});
cljs_test_display.core.push_node_BANG_ = (function cljs_test_display$core$push_node_BANG_(node){
return cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.List.EMPTY),node);
});
cljs_test_display.core.pop_node_BANG_ = (function cljs_test_display$core$pop_node_BANG_(){
return cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
});
cljs_test_display.core.initialize_state_BANG_ = (function cljs_test_display$core$initialize_state_BANG_(){
cljs.core.reset_BANG_.call(null,cljs_test_display.core.state,cljs.core.PersistentArrayMap.EMPTY);

return cljs_test_display.core.push_node_BANG_.call(null,cljs_test_display.core.root_app_node.call(null));
});
cljs_test_display.core.current_node = (function cljs_test_display$core$current_node(){
return cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_test_display.core.state),new cljs.core.Keyword(null,"current-node","current-node",-814308842)));
});
cljs_test_display.core.current_node_parent = (function cljs_test_display$core$current_node_parent(){
return cljs.core.second.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_test_display.core.state),new cljs.core.Keyword(null,"current-node","current-node",-814308842)));
});
cljs_test_display.core.next_error_count = (function cljs_test_display$core$next_error_count(){
return new cljs.core.Keyword(null,"error-count","error-count",1790949450).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"error-count","error-count",1790949450),cljs.core.fnil.call(null,cljs.core.inc,(0))));
});


if((typeof cljs_test_display !== 'undefined') && (typeof cljs_test_display.core !== 'undefined') && (typeof cljs_test_display.core.register_document_events_BANG_ !== 'undefined')){
} else {
cljs_test_display.core.register_document_events_BANG_ = cljs.core.memoize.call(null,(function (){
return goog.events.listen(goog.dom.getDocument(),goog.events.EventType.KEYDOWN,(function (e){
if(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.P)){
return cljs_test_display.core.click_toggle.call(null,e);
} else {
return null;
}
}));
}));
}
var style_string_21255 = "body {\n    margin: 0px;\n}\n\n.container {\n    font-family: \"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif!important;\n    font-size: 16px;\n    line-height: 1.4285;\n    margin: 0px auto;\n    padding: 0px 10px;\n}\n\n/* report header */\n\n#report-header {\n    background-color: #27437b;\n    color: white;\n}\n\n#report-header .report-body {\n    padding: 20px 10px;\n    /* hack */\n    padding-right: 0px;\n}\n\n#report-header.tests-fail {\n    background-color: #7b2727;\n}\n\n#report-header.tests-succeed {\n    background-color: #277b2d;\n}\n\n#report-header .page-title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n#report-header .test-title {\n    font-size: 40px;\n    margin-left: 15px;\n}\n\n/* controls */\n\n.controls {\n    margin-top: 10px;\n    height: 10px;\n}\n\n.controls button {\n    float: right;\n    border-radius: 5px;\n    font-family: Arial;\n    color: #ffffff;\n    font-size: 11px;\n    background-color: #8e8e8e;\n    padding: 5px 10px 5px 10px;\n    text-decoration: none;\n    border: none;\n    letter-spacing: 0.8px;\n}\n\n.controls button:hover {\n    background: #a9a9a9;\n    text-decoration: none;\n}\n/* summary */\n\n.summary-body {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.summary-body .report-number {\n    margin-right: 20px;\n    font-family: monospace;\n    font-size: 2em;\n}\n\n.summary-body .total-tests {\n    font-size: 0.75em;\n    line-height: 1.2em;\n}\n\n.summary-body .test-counts {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.summary-body .test-counts > div {\n    margin-right: 10px;\n}\n\n/* namespace */\n\n.test-ns h2 {\n    font-weight: normal;\n    color: #333;\n}\n\n/* var line */\n\n.var-header {\n    color: #666;    \n    margin: 8px 0px;\n    border-bottom: 1px solid #e0e0e0;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.test-var-line {\n    color: #999;\n    font-size: 0.7em;\n}\n\n.test-var-line span {\n    font-family: monospace;\n}\n\n/* passing test dot */\n\n.test-passing {\n    display: inline-block;\n    width: 12px;\n    height: 12px;    \n    border: 1px solid #98bd8b;\n    background-color: rgb(199, 225, 160);\n}\n\n.test-passing + .test-passing {\n    border-left: none;\n}\n\n/* ensure vertical space between passing tests and failing tests */\n\n.test-passing + .test-fail {\n    margin-top: 8px;\n}\n\n.test-fail + .test-passing {\n    margin-top: 14px;\n}\n\n/* failed tests */\n\n.test-fail {\n    color: #a94442;\n    border: 1px solid rgb(236, 196, 196);\n    border-left: 8px solid rgb(236, 196, 196);\n    background-color: rgb(254, 254, 244);\n}\n\n.fail-body {\n    padding: 10px 24px;\n}\n\n.contexts {\n    padding: 0px 5px;\n    font-size: 0.8em;\n    background-color: #f1f1f1;\n}\n\n.test-message {\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\npre {\n    margin: 0px;\n    word-break: normal;\n    word-wrap: normal;\n    overflow-x: scroll;\n    margin-top: 2px;\n    margin-bottom: 2px;    \n}\n\npre code {\n    font-size: 0.8em;\n    color: #333;\n    overflow-x: auto;\n}\n\n.actual {\n    position: relative;\n}\n\n.actual pre {\n    margin-left: 20px;\n}\n\n.actual .arrow {\n    position: absolute;\n    font-size: 0.8em;\n    top: 4px;\n}\n\n/* errors */\n\n.test-error {\n    border-left: 8px solid #b94848;\n}\n\n.error-prefix {\n    color: #a94442;\n    font-weight: bold;\n}\n\n.error-message {\n    font-size: 0.8em;\n}\n\n.view-stacktrace {\n    font-size: 0.8em;\n    color: #888;\n}\n\n/* footer */\n\n.footer {\n    margin-top: 30px;\n    min-height: 150px;\n    background-color: #ddd;\n}\n\n.footer .container {\n    padding-top: 30px;\n    color: #555;\n    font-size: 0.85em;\n    display: flex;\n    justify-content: center;\n}\n\n.control-key {\n    display: inline-block;\n    font-weight: bold;\n    background-color: white;\n    padding: 1px 4px;\n    border-radius: 2px;\n}\n\n/* responsive */\n\n@media (min-width: 576px) {\n    .container {\n\twidth: 576px;\n    }\n    .controls {\n\theight: 0px;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n\twidth: 768px;\n    }\n}\n\n/* functionality */\n\n.hide-passing .test-passing + .test-fail,\n.hide-passing .test-fail + .test-passing{\n    margin-top: 0px;\n}\n\n.hide-passing .test-ns,\n.hide-passing .test-var,\n.hide-passing .test-passing {\n    display: none;\n}\n\n.hide-passing .test-ns.has-errors,\n.hide-passing .test-ns.has-failures,\n.hide-passing .test-var.has-errors,\n.hide-passing .test-var.has-failures {\n    display: block;\n}\n";
cljs_test_display.core.insert_style_BANG_ = (function cljs_test_display$core$insert_style_BANG_(){
if(cljs.core.truth_(goog.dom.getElement("cljs-test-display-style"))){
return null;
} else {
var node = cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"cljs-test-display-style"], null),style_string_21255);
var head = (goog.dom.getElementsByTagName("head")[(0)]);
return goog.dom.appendChild(head,node);
}
});
cljs_test_display.core.n = (function cljs_test_display$core$n(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21259 = arguments.length;
var i__4865__auto___21260 = (0);
while(true){
if((i__4865__auto___21260 < len__4864__auto___21259)){
args__4870__auto__.push((arguments[i__4865__auto___21260]));

var G__21261 = (i__4865__auto___21260 + (1));
i__4865__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(cljs_test_display.core.n.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attributes,contents){
return cljs.core.apply.call(null,goog.dom.createDom,cljs.core.name.call(null,tag),cljs.core.clj__GT_js.call(null,attributes),cljs.core.mapv.call(null,(function (x){
if((x instanceof HTMLElement)){
return x;
} else {
if(((typeof x === 'string') || ((x instanceof cljs.core.Symbol)))){
return goog.dom.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else {
return goog.dom.createTextNode(cljs.core.pr_str.call(null,x));

}
}
}),cljs.core.filter.call(null,cljs.core.some_QMARK_,contents)));
}));

(cljs_test_display.core.n.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs_test_display.core.n.cljs$lang$applyTo = (function (seq21256){
var G__21257 = cljs.core.first.call(null,seq21256);
var seq21256__$1 = cljs.core.next.call(null,seq21256);
var G__21258 = cljs.core.first.call(null,seq21256__$1);
var seq21256__$2 = cljs.core.next.call(null,seq21256__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21257,G__21258,seq21256__$2);
}));

cljs_test_display.core.magic_keyword__GT_attrs = (function cljs_test_display$core$magic_keyword__GT_attrs(k){
if((k instanceof cljs.core.Keyword)){
var classes = clojure.string.split.call(null,cljs.core.name.call(null,k),".");
var vec__21262 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,classes),"#"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,cljs.core.first.call(null,classes),(1)),cljs.core.rest.call(null,classes)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,classes], null));
var id = cljs.core.nth.call(null,vec__21262,(0),null);
var classes__$1 = cljs.core.nth.call(null,vec__21262,(1),null);
var G__21265 = cljs.core.PersistentArrayMap.EMPTY;
var G__21265__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__21265,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__21265);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classes__$1))){
return cljs.core.assoc.call(null,G__21265__$1,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",classes__$1));
} else {
return G__21265__$1;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
cljs_test_display.core.tag_fn = (function cljs_test_display$core$tag_fn(tag){
return (function() { 
var G__21269__delegate = function (klass,contents){
var vec__21266 = (((klass instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,contents], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,klass,contents)], null));
var klass__$1 = cljs.core.nth.call(null,vec__21266,(0),null);
var contents__$1 = cljs.core.nth.call(null,vec__21266,(1),null);
return cljs.core.apply.call(null,cljs_test_display.core.n,tag,cljs_test_display.core.magic_keyword__GT_attrs.call(null,klass__$1),contents__$1);
};
var G__21269 = function (klass,var_args){
var contents = null;
if (arguments.length > 1) {
var G__21270__i = 0, G__21270__a = new Array(arguments.length -  1);
while (G__21270__i < G__21270__a.length) {G__21270__a[G__21270__i] = arguments[G__21270__i + 1]; ++G__21270__i;}
  contents = new cljs.core.IndexedSeq(G__21270__a,0,null);
} 
return G__21269__delegate.call(this,klass,contents);};
G__21269.cljs$lang$maxFixedArity = 1;
G__21269.cljs$lang$applyTo = (function (arglist__21271){
var klass = cljs.core.first(arglist__21271);
var contents = cljs.core.rest(arglist__21271);
return G__21269__delegate(klass,contents);
});
G__21269.cljs$core$IFn$_invoke$arity$variadic = G__21269__delegate;
return G__21269;
})()
;
});
cljs_test_display.core.div = cljs_test_display.core.tag_fn.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
cljs_test_display.core.span = cljs_test_display.core.tag_fn.call(null,new cljs.core.Keyword(null,"span","span",1394872991));
cljs_test_display.core.code = (function cljs_test_display$core$code(var_args){
var G__21273 = arguments.length;
switch (G__21273) {
case 1:
return cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$1 = (function (code_str){
return cljs_test_display.core.code.call(null,null,code_str);
}));

(cljs_test_display.core.code.cljs$core$IFn$_invoke$arity$2 = (function (klass,code_str){
return cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),cljs_test_display.core.magic_keyword__GT_attrs.call(null,klass),cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentArrayMap.EMPTY,cljs.core.pr_str.call(null,code_str)));
}));

(cljs_test_display.core.code.cljs$lang$maxFixedArity = 2);

cljs_test_display.core.current_var_info = (function cljs_test_display$core$current_var_info(){
var var$ = cljs.core.first.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null))));
return cljs.core.meta.call(null,var$);
});
cljs_test_display.core.process_file_name = (function cljs_test_display$core$process_file_name(p__21275){
var map__21276 = p__21275;
var map__21276__$1 = cljs.core.__destructure_map.call(null,map__21276);
var ns = cljs.core.get.call(null,map__21276__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var file = cljs.core.get.call(null,map__21276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.take.call(null,(cljs.core.count.call(null,clojure.string.split.call(null,cljs.core.name.call(null,ns),/\./)) + (1)),cljs.core.reverse.call(null,clojure.string.split.call(null,file,/[\/\\]/)))));
});
cljs_test_display.core.failed_QMARK_ = (function cljs_test_display$core$failed_QMARK_(m){
return (!(((new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)) === (0))));
});
cljs_test_display.core.pluralize = (function cljs_test_display$core$pluralize(s,n){
if(cljs.core._EQ_.call(null,n,(1))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"s"].join('');
}
});
cljs_test_display.core.click_toggle = (function cljs_test_display$core$click_toggle(e){
return goog.dom.classlist.toggle(cljs_test_display.core.root_app_node.call(null),"hide-passing");
});
cljs_test_display.core.header_node = (function cljs_test_display$core$header_node(){
return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"#report-header","#report-header",960178800),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"container.report-body","container.report-body",-1022247291),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"page-title","page-title",-915898735),cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"src","src",-1651076051),"https://clojurescript.org/images/cljs-logo-120b.png"], null)),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-title","test-title",-1204422017),"Test Run")),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"#summary","#summary",-2110125213))));
});
cljs_test_display.core.add_header_node_BANG_ = (function cljs_test_display$core$add_header_node_BANG_(){
goog.dom.appendChild(cljs_test_display.core.root_app_node.call(null),cljs_test_display.core.header_node.call(null));

return goog.dom.appendChild(cljs_test_display.core.root_app_node.call(null),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"controls.container","controls.container",102023298),cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-show",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs_test_display.core.click_toggle], null),"Hide/Show Passing")));
});
cljs_test_display.core.contexts_node = (function cljs_test_display$core$contexts_node(){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.test.testing_contexts_str.call(null));
} else {
return null;
}
});
cljs_test_display.core.comparison = (function cljs_test_display$core$comparison(p__21277){
var map__21278 = p__21277;
var map__21278__$1 = cljs.core.__destructure_map.call(null,map__21278);
var actual = cljs.core.get.call(null,map__21278__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.call(null,map__21278__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return cljs_test_display.core.div.call(null,cljs_test_display.core.code.call(null,expected),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"actual","actual",107306363),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),"\u25B6"),cljs_test_display.core.code.call(null,actual)));
});
cljs_test_display.core.add_fail_node_BANG_ = (function cljs_test_display$core$add_fail_node_BANG_(m){
var formatter_fn = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.pr_str;
}
})();
var node = cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-fail","test-fail",-1337227951),cljs_test_display.core.contexts_node.call(null),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"fail-body","fail-body",91617623),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var message = temp__5753__auto__;
return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-message","test-message",-398804094),message);
} else {
return null;
}
})(),cljs_test_display.core.comparison.call(null,m)));
var curr_node = cljs_test_display.core.current_node.call(null);
goog.dom.classlist.add(curr_node,"has-failures");

goog.dom.classlist.add(cljs_test_display.core.current_node_parent.call(null),"has-failures");

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.error_comparison = (function cljs_test_display$core$error_comparison(p__21279){
var map__21280 = p__21279;
var map__21280__$1 = cljs.core.__destructure_map.call(null,map__21280);
var expected = cljs.core.get.call(null,map__21280__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__21280__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
return cljs_test_display.core.div.call(null,cljs_test_display.core.code.call(null,expected),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"cljs-test-actual","cljs-test-actual",45970177),cljs_test_display.core.span.call(null,new cljs.core.Keyword(null,"error-prefix","error-prefix",-152896487),"Error: "),(cljs.core.truth_(actual)?cljs_test_display.core.span.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),actual.message):null),(cljs.core.truth_(actual)?(function (){var error_number = cljs_test_display.core.next_error_count.call(null);
console.log("CLJS Test Error #",error_number);

console.error(actual);

return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"view-stacktrace","view-stacktrace",-436229848),["For stacktrace: See error number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_number)," in console"].join(''));
})():null)));
});
cljs_test_display.core.add_error_node_BANG_ = (function cljs_test_display$core$add_error_node_BANG_(m){
var formatter_fn = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.pr_str;
}
})();
var node = cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-fail.test-error","test-fail.test-error",-1508560269),cljs_test_display.core.contexts_node.call(null),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"fail-body","fail-body",91617623),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var message = temp__5753__auto__;
return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-message","test-message",-398804094),message);
} else {
return null;
}
})(),cljs_test_display.core.error_comparison.call(null,m)));
var curr_node = cljs_test_display.core.current_node.call(null);
goog.dom.classlist.add(curr_node,"has-errors");

goog.dom.classlist.add(cljs_test_display.core.current_node_parent.call(null),"has-errors");

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.add_passing_node_BANG_ = (function cljs_test_display$core$add_passing_node_BANG_(m){
return goog.dom.appendChild(cljs_test_display.core.current_node.call(null),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-passing","test-passing",473862722)));
});
cljs_test_display.core.add_ns_node_BANG_ = (function cljs_test_display$core$add_ns_node_BANG_(m){
var curr_node = cljs_test_display.core.current_node.call(null);
var new_current_node = cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"container.test-ns","container.test-ns",187940407),cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),(function (p1__21281_SHARP_){
return cljs.core.cons.call(null,new_current_node,p1__21281_SHARP_);
}));

return goog.dom.appendChild(curr_node,new_current_node);
});
cljs_test_display.core.add_var_node = (function cljs_test_display$core$add_var_node(m){
var curr_node = cljs_test_display.core.current_node.call(null);
var map__21283 = cljs_test_display.core.current_var_info.call(null);
var map__21283__$1 = cljs.core.__destructure_map.call(null,map__21283);
var info = map__21283__$1;
var name = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var line = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var node = cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"var-header","var-header",-1763067997),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),(cljs.core.truth_(line)?cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-var-line","test-var-line",704473006),(cljs.core.truth_(file)?cljs_test_display.core.process_file_name.call(null,info):"line"),":",cljs_test_display.core.n.call(null,new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,line)):null)));
cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),(function (p1__21282_SHARP_){
return cljs.core.cons.call(null,node,p1__21282_SHARP_);
}));

return goog.dom.appendChild(curr_node,node);
});
cljs_test_display.core.summary = (function cljs_test_display$core$summary(p__21284){
var map__21285 = p__21284;
var map__21285__$1 = cljs.core.__destructure_map.call(null,map__21285);
var m = map__21285__$1;
var fail = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"test","test",577538877));
return cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"summary-body","summary-body",42130351),(((!((fail === (0)))))?cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"report-number","report-number",-333064129),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize.call(null," failure",fail))].join('')):null),(((!((error === (0)))))?cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"report-number","report-number",-333064129),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize.call(null," error",error))].join('')):null),((cljs_test_display.core.failed_QMARK_.call(null,m))?null:cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"report-number","report-number",-333064129),"All Tests Passed")),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"total-tests","total-tests",-219861496),cljs_test_display.core.div.call(null,"Totals"),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"test-counts","test-counts",1975187961),cljs_test_display.core.div.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize.call(null," Test",test))].join('')),(function (){var assertions = ((pass + fail) + error);
return cljs_test_display.core.div.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(assertions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.pluralize.call(null," Assertion",assertions))].join(''));
})())));
});
cljs_test_display.core.display_summary_BANG_ = (function cljs_test_display$core$display_summary_BANG_(m){
var report_header = goog.dom.getElement("report-header");
var summary_node_SINGLEQUOTE_ = goog.dom.getElement("summary");
goog.dom.classlist.add(report_header,((cljs_test_display.core.failed_QMARK_.call(null,m))?"tests-fail":"tests-succeed"));

goog.dom.removeChildren(summary_node_SINGLEQUOTE_);

return goog.dom.appendChild(summary_node_SINGLEQUOTE_,cljs_test_display.core.summary.call(null,m));
});
cljs_test_display.core.print_comparison = (function cljs_test_display$core$print_comparison(m){
var formatter_fn = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.call(null,"expected:",formatter_fn.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",formatter_fn.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs_test_display.core.add_passing_node_BANG_.call(null,m);

return cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
cljs_test_display.core.add_ns_node_BANG_.call(null,m);

if(cljs.core.truth_(cljs_test_display.core.printing)){
return cljs.core.println.call(null,"\nTesting",cljs.core.name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null),(function (m){
return cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return cljs_test_display.core.add_var_node.call(null,m);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
return cljs.core.swap_BANG_.call(null,cljs_test_display.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-node","current-node",-814308842),cljs.core.rest);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs_test_display.core.add_fail_node_BANG_.call(null,m);

cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

if(cljs.core.truth_(cljs_test_display.core.printing)){
cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__5753__auto___21286 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto___21286)){
var message_21287 = temp__5753__auto___21286;
cljs.core.println.call(null,message_21287);
} else {
}

return cljs_test_display.core.print_comparison.call(null,m);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__5753__auto___21288 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto___21288)){
var message_21289 = temp__5753__auto___21288;
cljs.core.println.call(null,message_21289);
} else {
}

cljs_test_display.core.print_comparison.call(null,m);

return cljs_test_display.core.add_error_node_BANG_.call(null,m);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
if(cljs.core.truth_(cljs_test_display.core.change_favicon)){
if(cljs_test_display.core.failed_QMARK_.call(null,m)){
cljs_test_display.favicon.red.call(null);
} else {
cljs_test_display.favicon.green.call(null);
}
} else {
}

if(cljs.core.truth_(cljs_test_display.core.notifications)){
if(cljs_test_display.core.failed_QMARK_.call(null,m)){
cljs_test_display.notify.failure.call(null,m);
} else {
cljs_test_display.notify.success.call(null);
}
} else {
}

cljs_test_display.core.display_summary_BANG_.call(null,m);

goog.dom.appendChild(cljs_test_display.core.root_app_node.call(null),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),cljs_test_display.core.div.call(null,new cljs.core.Keyword(null,"tip","tip",1221810860),"Hit the ",cljs_test_display.core.span.call(null,new cljs.core.Keyword(null,"control-key","control-key",-1287294483),"P")," key to toggle the display of passing tests."))));

if(cljs.core.truth_(cljs_test_display.core.printing)){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

return cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");
} else {
return null;
}
}));
cljs_test_display.core.empty_env = (function cljs_test_display$core$empty_env(){
return cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213));
});
/**
 * This function initializes the environment for a test run. It must
 *   be called before every test run.
 * 
 *   As a convenience it returns a cljs.test/empty-env initialized so
 *   that the test run will use the cljs-test-display formatter.
 * 
 *   This function takes an optional single argument: the id of the DOM
 *   node to mount.  It defaults to "app"
 * 
 *   Example Usage:
 * 
 *   (cljs.test/run-tests (cljs-test-display/init! "app")
 *                     'example.core-test
 *                     'example.core-other-test)
 */
cljs_test_display.core.init_BANG_ = (function cljs_test_display$core$init_BANG_(var_args){
var G__21291 = arguments.length;
switch (G__21291) {
case 0:
return cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_test_display.core.init_BANG_.call(null,null);
}));

(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_node_id){
if((goog.global.document == null)){
return cljs.test.empty_env.call(null);
} else {
if(cljs.core.truth_(app_node_id)){
if(((typeof app_node_id === 'string') || ((((app_node_id instanceof cljs.core.Symbol)) || ((app_node_id instanceof cljs.core.Keyword)))))){
} else {
throw (new Error(["Assert failed: ","Must provide an something we can call cljs.core/name on.","\n","(or (string? app-node-id) (symbol? app-node-id) (keyword? app-node-id))"].join('')));
}

(cljs_test_display.core.root_node_id = cljs.core.name.call(null,app_node_id));
} else {
}

if(cljs.core.truth_(goog.dom.getElement(cljs.core.name.call(null,cljs_test_display.core.root_node_id)))){
} else {
throw (new Error(["Assert failed: ",["cljs-test-display: Element with id ",cljs.core.pr_str.call(null,cljs_test_display.core.root_node_id)," does not exist."].join(''),"\n","(gdom/getElement (name root-node-id))"].join('')));
}

if(cljs.core.truth_(cljs_test_display.core.notifications)){
cljs_test_display.notify.ask_permission_BANG_.call(null);
} else {
}

cljs_test_display.core.insert_style_BANG_.call(null);

cljs_test_display.core.register_document_events_BANG_.call(null);

(cljs_test_display.core.root_app_node.call(null).innerHTML = "");

cljs_test_display.core.add_header_node_BANG_.call(null);

cljs_test_display.core.initialize_state_BANG_.call(null);

return cljs_test_display.core.empty_env.call(null);
}
}));

(cljs_test_display.core.init_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=core.js.map
