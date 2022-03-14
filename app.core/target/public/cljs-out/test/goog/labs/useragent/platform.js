/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.labs.userAgent.platform");
goog.module.declareLegacyNamespace();
const googString = goog.require("goog.string.internal");
const util = goog.require("goog.labs.userAgent.util");
function isAndroid() {
  return util.matchUserAgent("Android");
}
function isIpod() {
  return util.matchUserAgent("iPod");
}
function isIphone() {
  return util.matchUserAgent("iPhone") && !util.matchUserAgent("iPod") && !util.matchUserAgent("iPad");
}
function isIpad() {
  return util.matchUserAgent("iPad");
}
function isIos() {
  return isIphone() || isIpad() || isIpod();
}
function isMacintosh() {
  return util.matchUserAgent("Macintosh");
}
function isLinux() {
  return util.matchUserAgent("Linux");
}
function isWindows() {
  return util.matchUserAgent("Windows");
}
function isChromeOS() {
  return util.matchUserAgent("CrOS");
}
function isChromecast() {
  return util.matchUserAgent("CrKey");
}
function isKaiOS() {
  return util.matchUserAgentIgnoreCase("KaiOS");
}
function getVersion() {
  const userAgentString = util.getUserAgent();
  let version = "", re;
  if (isWindows()) {
    re = /Windows (?:NT|Phone) ([0-9.]+)/;
    const match = re.exec(userAgentString);
    if (match) {
      version = match[1];
    } else {
      version = "0.0";
    }
  } else {
    if (isIos()) {
      re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
      const match = re.exec(userAgentString);
      version = match && match[1].replace(/_/g, ".");
    } else {
      if (isMacintosh()) {
        re = /Mac OS X ([0-9_.]+)/;
        const match = re.exec(userAgentString);
        version = match ? match[1].replace(/_/g, ".") : "10";
      } else {
        if (isKaiOS()) {
          re = /(?:KaiOS)\/(\S+)/i;
          const match = re.exec(userAgentString);
          version = match && match[1];
        } else {
          if (isAndroid()) {
            re = /Android\s+([^\);]+)(\)|;)/;
            const match = re.exec(userAgentString);
            version = match && match[1];
          } else {
            if (isChromeOS()) {
              re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
              const match = re.exec(userAgentString);
              version = match && match[1];
            }
          }
        }
      }
    }
  }
  return version || "";
}
function isVersionOrHigher(version) {
  return googString.compareVersions(getVersion(), version) >= 0;
}
exports = {getVersion, isAndroid, isChromeOS, isChromecast, isIos, isIpad, isIphone, isIpod, isKaiOS, isLinux, isMacintosh, isVersionOrHigher, isWindows, };

;return exports;});
