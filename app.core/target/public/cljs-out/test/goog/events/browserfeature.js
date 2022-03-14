/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.events.BrowserFeature");
goog.module.declareLegacyNamespace();
const purify = fn => {
  return {valueOf:fn}.valueOf();
};
exports = {HAS_W3C_BUTTON:true, HAS_W3C_EVENT_SUPPORT:true, SET_KEY_CODE_TO_PREVENT_DEFAULT:false, HAS_NAVIGATOR_ONLINE_PROPERTY:true, HAS_HTML5_NETWORK_EVENT_SUPPORT:true, HTML5_NETWORK_EVENTS_FIRE_ON_BODY:false, TOUCH_ENABLED:"ontouchstart" in goog.global || !!(goog.global["document"] && document.documentElement && "ontouchstart" in document.documentElement) || !!(goog.global["navigator"] && (goog.global["navigator"]["maxTouchPoints"] || goog.global["navigator"]["msMaxTouchPoints"])), POINTER_EVENTS:"PointerEvent" in 
goog.global, MSPOINTER_EVENTS:"MSPointerEvent" in goog.global && !!(goog.global["navigator"] && goog.global["navigator"]["msPointerEnabled"]), PASSIVE_EVENTS:purify(function() {
  if (!goog.global.addEventListener || !Object.defineProperty) {
    return false;
  }
  var passive = false;
  var options = Object.defineProperty({}, "passive", {get:function() {
    passive = true;
  }});
  try {
    goog.global.addEventListener("test", goog.nullFunction, options);
    goog.global.removeEventListener("test", goog.nullFunction, options);
  } catch (e) {
  }
  return passive;
})};

;return exports;});
