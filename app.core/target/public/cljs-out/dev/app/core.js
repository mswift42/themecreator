// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('app.app');
app.core.get_app_element = (function app$core$get_app_element(){
return goog.dom.getElement("app");
});
app.core.mount = (function app$core$mount(el){
return app.app.init.call(null);
});
app.core.mount_app_element = (function app$core$mount_app_element(){
var temp__5735__auto__ = app.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return app.core.mount.call(null,el);
} else {
return null;
}
});
app.core.mount_app_element.call(null);
app.core.on_reload = (function app$core$on_reload(){
return app.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
