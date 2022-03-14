// Compiled by ClojureScript 1.10.914 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('app.app');
app.core.get_app_element = (function app$core$get_app_element(){
return goog.dom.getElement("app");
});
app.core.mount = (function app$core$mount(el){
return app.app.init();
});
app.core.mount_app_element = (function app$core$mount_app_element(){
var temp__5753__auto__ = app.core.get_app_element();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return app.core.mount(el);
} else {
return null;
}
});
app.core.mount_app_element();
app.core.on_reload = (function app$core$on_reload(){
return app.core.mount_app_element();
});
