/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.storage.mechanism.IterableMechanism");
goog.module.declareLegacyNamespace();
const Mechanism = goog.require("goog.storage.mechanism.Mechanism");
const {Iterator:GoogIterator} = goog.require("goog.iter");
const {ShimIterable} = goog.require("goog.iter.es6");
const {assertString} = goog.require("goog.asserts");
const IterableMechanism = function() {
  IterableMechanism.base(this, "constructor");
};
goog.inherits(IterableMechanism, Mechanism);
IterableMechanism.prototype.getCount = function() {
  let count = 0;
  for (const key of this) {
    assertString(key);
    count++;
  }
  return count;
};
IterableMechanism.prototype.__iterator__ = goog.abstractMethod;
IterableMechanism.prototype[Symbol.iterator] = function() {
  return ShimIterable.of(this.__iterator__(true)).toEs6();
};
IterableMechanism.prototype.clear = function() {
  const keys = Array.from(this);
  for (const key of keys) {
    this.remove(key);
  }
};
exports = IterableMechanism;

;return exports;});
