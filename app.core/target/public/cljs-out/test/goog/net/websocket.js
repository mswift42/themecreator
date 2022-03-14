/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.WebSocket");
goog.provide("goog.net.WebSocket.ErrorEvent");
goog.provide("goog.net.WebSocket.EventType");
goog.provide("goog.net.WebSocket.MessageEvent");
goog.require("goog.Timer");
goog.require("goog.asserts");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventTarget");
goog.require("goog.log");
goog.requireType("goog.debug.ErrorHandler");
goog.net.WebSocket = function(opt_params) {
  goog.net.WebSocket.base(this, "constructor");
  if (!opt_params) {
    opt_params = {};
  }
  this.autoReconnect_ = opt_params.autoReconnect != false;
  this.getNextReconnect_ = opt_params.getNextReconnect || goog.net.WebSocket.EXPONENTIAL_BACKOFF_;
  this.binaryType_ = opt_params.binaryType || goog.net.WebSocket.BinaryType.BLOB;
  this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
};
goog.inherits(goog.net.WebSocket, goog.events.EventTarget);
goog.net.WebSocket.BinaryType = {ARRAY_BUFFER:"arraybuffer", BLOB:"blob", };
goog.net.WebSocket.Options = function() {
  this.autoReconnect;
  this.getNextReconnect;
  this.binaryType;
};
goog.net.WebSocket.prototype.webSocket_ = null;
goog.net.WebSocket.prototype.url_ = null;
goog.net.WebSocket.prototype.protocol_ = undefined;
goog.net.WebSocket.prototype.closeExpected_ = false;
goog.net.WebSocket.prototype.reconnectAttempt_ = 0;
goog.net.WebSocket.prototype.reconnectTimer_ = null;
goog.net.WebSocket.prototype.logger_ = goog.log.getLogger("goog.net.WebSocket");
goog.net.WebSocket.EventType = {CLOSED:goog.events.getUniqueId("closed"), ERROR:goog.events.getUniqueId("error"), MESSAGE:goog.events.getUniqueId("message"), OPENED:goog.events.getUniqueId("opened"), };
goog.net.WebSocket.ReadyState_ = {CONNECTING:0, OPEN:1, CLOSING:2, CLOSED:3, };
goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_ = 60 * 1000;
goog.net.WebSocket.EXPONENTIAL_BACKOFF_ = function(attempt) {
  const time = Math.pow(2, attempt) * 1000;
  return Math.min(time, goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_);
};
goog.net.WebSocket.protectEntryPoints = function(errorHandler) {
  goog.net.WebSocket.prototype.onOpen_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onError_);
};
goog.net.WebSocket.prototype.open = function(url, opt_protocol) {
  goog.asserts.assert(goog.global["WebSocket"], "This browser does not support WebSocket");
  goog.asserts.assert(!this.isOpen(), "The WebSocket is already open");
  this.clearReconnectTimer_();
  this.url_ = url;
  this.protocol_ = opt_protocol;
  if (this.protocol_) {
    goog.log.info(this.logger_, "Opening the WebSocket on " + this.url_ + " with protocol " + this.protocol_);
    this.webSocket_ = new WebSocket(this.url_, this.protocol_);
  } else {
    goog.log.info(this.logger_, "Opening the WebSocket on " + this.url_);
    this.webSocket_ = new WebSocket(this.url_);
  }
  this.webSocket_.binaryType = this.binaryType_;
  this.webSocket_.onopen = goog.bind(this.onOpen_, this);
  this.webSocket_.onclose = goog.bind(this.onClose_, this);
  this.webSocket_.onmessage = goog.bind(this.onMessage_, this);
  this.webSocket_.onerror = goog.bind(this.onError_, this);
};
goog.net.WebSocket.prototype.close = function() {
  this.clearReconnectTimer_();
  if (this.webSocket_) {
    goog.log.info(this.logger_, "Closing the WebSocket.");
    this.closeExpected_ = true;
    this.webSocket_.close();
    this.webSocket_ = null;
  }
};
goog.net.WebSocket.prototype.send = function(message) {
  goog.asserts.assert(this.isOpen(), "Cannot send without an open socket");
  this.webSocket_.send(message);
};
goog.net.WebSocket.prototype.isOpen = function() {
  return !!this.webSocket_ && this.webSocket_.readyState == goog.net.WebSocket.ReadyState_.OPEN;
};
goog.net.WebSocket.prototype.getBufferedAmount = function() {
  return this.webSocket_.bufferedAmount;
};
goog.net.WebSocket.prototype.onOpen_ = function() {
  goog.log.info(this.logger_, "WebSocket opened on " + this.url_);
  this.dispatchEvent(goog.net.WebSocket.EventType.OPENED);
  this.reconnectAttempt_ = 0;
  this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
};
goog.net.WebSocket.prototype.onClose_ = function(event) {
  goog.log.info(this.logger_, "The WebSocket on " + this.url_ + " closed.");
  this.dispatchEvent(new goog.net.WebSocket.ClosedEvent(event.code, event.reason, event.wasClean));
  this.webSocket_ = null;
  if (this.closeExpected_) {
    goog.log.info(this.logger_, "The WebSocket closed normally.");
    this.url_ = null;
    this.protocol_ = undefined;
  } else {
    goog.log.error(this.logger_, "The WebSocket disconnected unexpectedly: " + event.data);
    if (this.autoReconnect_) {
      const seconds = Math.floor(this.nextReconnect_ / 1000);
      goog.log.info(this.logger_, "Seconds until next reconnect attempt: " + seconds);
      this.reconnectTimer_ = goog.Timer.callOnce(goog.bind(this.open, this, this.url_, this.protocol_), this.nextReconnect_, this);
      this.reconnectAttempt_++;
      this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
    }
  }
  this.closeExpected_ = false;
};
goog.net.WebSocket.prototype.onMessage_ = function(event) {
  this.dispatchEvent(new goog.net.WebSocket.MessageEvent(event.data));
};
goog.net.WebSocket.prototype.onError_ = function(event) {
  const data = event.data;
  goog.log.error(this.logger_, "An error occurred: " + data);
  this.dispatchEvent(new goog.net.WebSocket.ErrorEvent(data));
};
goog.net.WebSocket.prototype.clearReconnectTimer_ = function() {
  if (this.reconnectTimer_ != null) {
    goog.Timer.clear(this.reconnectTimer_);
  }
  this.reconnectTimer_ = null;
};
goog.net.WebSocket.prototype.disposeInternal = function() {
  goog.net.WebSocket.base(this, "disposeInternal");
  this.close();
};
goog.net.WebSocket.ClosedEvent = function(code, reason, wasClean) {
  goog.net.WebSocket.ClosedEvent.base(this, "constructor", goog.net.WebSocket.EventType.CLOSED);
  this.code = code;
  this.reason = reason;
  this.wasClean = wasClean;
};
goog.inherits(goog.net.WebSocket.ClosedEvent, goog.events.Event);
goog.net.WebSocket.MessageEvent = function(message) {
  goog.net.WebSocket.MessageEvent.base(this, "constructor", goog.net.WebSocket.EventType.MESSAGE);
  this.message = message;
};
goog.inherits(goog.net.WebSocket.MessageEvent, goog.events.Event);
goog.net.WebSocket.ErrorEvent = function(data) {
  goog.net.WebSocket.ErrorEvent.base(this, "constructor", goog.net.WebSocket.EventType.ERROR);
  this.data = data;
};
goog.inherits(goog.net.WebSocket.ErrorEvent, goog.events.Event);
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.net.WebSocket.prototype.onOpen_ = transformer(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = transformer(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = transformer(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = transformer(goog.net.WebSocket.prototype.onError_);
});
