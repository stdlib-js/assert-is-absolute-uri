// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,l=r.__lookupGetter__,i=r.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var u,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(l.call(t,e)||i.call(t,e)?(u=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=u):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&a&&a.call(t,e,c.set),t};function u(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var v=y()?function(t){var e,r,n,o,a;if(null==t)return b.call(t);r=t[s],a=s,e=null!=(o=t)&&_.call(o,a);try{t[s]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[s]=r:delete t[s],n}:function(t){return b.call(t)},g=String.prototype.valueOf;var m=y();function d(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function j(t){return f(t)||d(t)}u(j,"isPrimitive",f),u(j,"isObject",d);var S=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,h=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,w=/%[^0-9a-f]/i,O=/%[0-9a-f](:?[^0-9a-f]|$)/i,P=/^\/\//,T=/^[a-z][a-z0-9+\-.]*$/;function z(t){return function(t){var e,r,n,o;return!(!f(t)||h.test(t)||w.test(t)||O.test(t)||(r=(n=t.match(S))[1],e=n[2],o=n[3],!(r&&r.length&&T.test(r.toLowerCase()))||!e&&P.test(o)))}(t)}export{z as default};
//# sourceMappingURL=mod.js.map
