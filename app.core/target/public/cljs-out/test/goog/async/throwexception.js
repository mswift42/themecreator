/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.async.throwException");
goog.module.declareLegacyNamespace();
function throwException(exception) {
  goog.global.setTimeout(() => {
    throw exception;
  }, 0);
}
exports = throwException;

;return exports;});
