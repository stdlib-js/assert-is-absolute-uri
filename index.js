// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,a=r.__lookupSetter__,u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,u){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(l.call(t,e)||a.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=u.value,t.__proto__=c):t[e]=u.value),p="get"in u,y="set"in u,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,u.get),y&&i&&i.call(t,e,u.set),t};function c(t,e,r){u(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,o,n,i;if(null==t)return s.call(t);r=t[_],i=_,e=null!=(n=t)&&b.call(n,i);try{t[_]=void 0}catch(e){return s.call(t)}return o=s.call(t),e?t[_]=r:delete t[_],o}:function(t){return s.call(t)},g=String.prototype.valueOf,m=y();function v(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function j(t){return f(t)||v(t)}c(j,"isPrimitive",f),c(j,"isObject",v);var S=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,h=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,w=/%[^0-9a-f]/i,O=/%[0-9a-f](:?[^0-9a-f]|$)/i,P=/^\/\//,T=/^[a-z][a-z0-9+\-.]*$/;return function(t){return function(t){var e,r,o,n;return!(!f(t)||h.test(t)||w.test(t)||O.test(t)||(r=(o=t.match(S))[1],e=o[2],n=o[3],!(r&&r.length&&T.test(r.toLowerCase()))||!e&&P.test(n)))}(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isAbsoluteURI=e();
//# sourceMappingURL=index.js.map
