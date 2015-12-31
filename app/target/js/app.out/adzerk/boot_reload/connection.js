// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.connection');
goog.require('cljs.core');
goog.require('clojure.browser.net');
adzerk.boot_reload.connection.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.connection.alive_QMARK_ = (function adzerk$boot_reload$connection$alive_QMARK_(){
return !((cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn) == null));
});
adzerk.boot_reload.connection.send_message_BANG_ = (function adzerk$boot_reload$connection$send_message_BANG_(message){
var temp__4425__auto__ = cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn);
if(cljs.core.truth_(temp__4425__auto__)){
var conn = temp__4425__auto__;
return clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,message));
} else {
return null;
}
});

//# sourceMappingURL=connection.js.map