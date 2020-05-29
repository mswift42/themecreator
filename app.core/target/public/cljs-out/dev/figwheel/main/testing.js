// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.main.testing');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.main.async_result');
goog.require('goog.dom');
goog.require('cljs.test');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.testing !== 'undefined') && (typeof figwheel.main.testing.test_result_data !== 'undefined')){
} else {
figwheel.main.testing.test_result_data = cljs.core.atom.call(null,null);
}

figwheel.main.testing.on_finish_listener = (function figwheel$main$testing$on_finish_listener(ky,listener){
return cljs.core.add_watch.call(null,figwheel.main.testing.test_result_data,ky,(function (_,___$1,___$2,m){
return listener.call(null,m);
}));
});

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m);
}));

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m);
}));

figwheel.main.testing.system_exit_on_fail = (function figwheel$main$testing$system_exit_on_fail(){
return figwheel.main.testing.on_finish_listener.call(null,new cljs.core.Keyword("figwheel.main.testing","exit-on-fail","figwheel.main.testing/exit-on-fail",575967680),(function (p1__27214_SHARP_){
return figwheel.main.async_result.send.call(null,((cljs.test.successful_QMARK_.call(null,p1__27214_SHARP_))?new cljs.core.Keyword("figwheel.main.testing","success","figwheel.main.testing/success",-519224348):figwheel.main.async_result.throw_ex.call(null,cljs.core.ex_info.call(null,"ClojureScript async test run failed",p1__27214_SHARP_))));
}));
});

figwheel.main.testing.no_auto_tests_display_message = (function figwheel$main$testing$no_auto_tests_display_message(app_id){
if((goog.global.document == null)){
return console.log("No tests yet");
} else {
var el = goog.dom.getElement(app_id);
goog.dom.removeChildren(el);

return goog.dom.append(el,goog.dom.createDom("div",({"style": ["margin: 100px auto; border: 1px solid #d0d0d0; color: #444; width: 400px; padding: 2em;","border-radius: 5px; font-family:sans-serif; background-color: #fdfce2"].join('')}),goog.dom.createDom("h1",({"style": ""}),goog.dom.createTextNode("No tests found.")),goog.dom.createDom("p",({"style": ""}),goog.dom.createTextNode(["Figwheel auto-testing sometimes isn't able to pick up your testing namespaces until ","after you have hot reloaded a source file at least once."].join(''))),goog.dom.createDom("p",({"style": ""}),goog.dom.createTextNode("For example: Try to open a source file with tests in it and save it.")),goog.dom.createDom("p",({"style": ""}),goog.dom.createTextNode("Or maybe you haven't added the source directories for your tests to `:watch-dirs`?")),goog.dom.createDom("p",({"style": ""}),goog.dom.createTextNode("Or perhaps you haven't written any tests yet? Nah, that's not possible."))));
}
});

//# sourceMappingURL=testing.js.map
