/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.iter.es6");
goog.module.declareLegacyNamespace();
const GoogIterable = goog.require("goog.iter.Iterable");
const GoogIterator = goog.require("goog.iter.Iterator");
const StopIteration = goog.require("goog.iter.StopIteration");
class ShimIterable {
  __iterator__() {
  }
  toGoog() {
  }
  toEs6() {
  }
  static of(iter) {
    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {
      return iter;
    } else {
      if (typeof iter.nextValueOrThrow == "function") {
        return new ShimIterableImpl(() => wrapGoog(iter));
      } else {
        if (typeof iter[Symbol.iterator] == "function") {
          return new ShimIterableImpl(() => iter[Symbol.iterator]());
        } else {
          if (typeof iter.__iterator__ == "function") {
            return new ShimIterableImpl(() => wrapGoog(iter.__iterator__()));
          }
        }
      }
    }
    throw new Error("Not an iterator or iterable.");
  }
}
const wrapGoog = iter => {
  if (!(iter instanceof GoogIterator)) {
    return iter;
  }
  let done = false;
  return {next() {
    let value;
    while (!done) {
      try {
        value = iter.nextValueOrThrow();
        break;
      } catch (err) {
        if (err !== StopIteration) {
          throw err;
        }
        done = true;
      }
    }
    return {value, done};
  }, };
};
class ShimIterableImpl {
  constructor(func) {
    this.func_ = func;
  }
  __iterator__() {
    return new ShimGoogIterator(this.func_());
  }
  toGoog() {
    return new ShimGoogIterator(this.func_());
  }
  [Symbol.iterator]() {
    return new ShimEs6Iterator(this.func_());
  }
  toEs6() {
    return new ShimEs6Iterator(this.func_());
  }
}
class ShimGoogIterator extends GoogIterator {
  constructor(iter) {
    super();
    this.iter_ = iter;
  }
  nextValueOrThrow() {
    const result = this.iter_.next();
    if (result.done) {
      throw StopIteration;
    }
    return result.value;
  }
  toGoog() {
    return this;
  }
  [Symbol.iterator]() {
    return new ShimEs6Iterator(this.iter_);
  }
  toEs6() {
    return new ShimEs6Iterator(this.iter_);
  }
}
class ShimEs6Iterator extends ShimIterableImpl {
  constructor(iter) {
    super(() => iter);
    this.iter_ = iter;
  }
  next() {
    return this.iter_.next();
  }
}
exports = {ShimIterable, ShimEs6Iterator, ShimGoogIterator, };

;return exports;});
