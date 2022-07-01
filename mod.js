// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var c=r,f=function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(t,e,r.get),y&&i&&i.call(t,e,r.set),t},p=e()?c:f;var y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var v=function(t){return"string"==typeof t};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return b&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,g=s;var m=function(t){return g.call(t)},d=Object.prototype.hasOwnProperty;var j=function(t,e){return null!=t&&d.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=j,w=S,O=s;var P=m,T=function(t){var e,r,n;if(null==t)return O.call(t);r=t[w],e=h(t,w);try{t[w]=void 0}catch(e){return O.call(t)}return n=O.call(t),e?t[w]=r:delete t[w],n},z=_()?T:P,E=String.prototype.valueOf;var $=z,k=function(t){try{return E.call(t),!0}catch(t){return!1}},x=_();var A=function(t){return"object"==typeof t&&(t instanceof String||(x?k(t):"[object String]"===$(t)))},C=v,G=A;var V=y,F=function(t){return C(t)||G(t)},L=A;V(F,"isPrimitive",v),V(F,"isObject",L);var q=F.isPrimitive,B=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,D=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,H=/%[^0-9a-f]/i,I=/%[0-9a-f](:?[^0-9a-f]|$)/i,J=/^\/\//,K=/^[a-z][a-z0-9+\-.]*$/;var M=function(t){var e,r,n,o;return!!q(t)&&(!D.test(t)&&(!H.test(t)&&!I.test(t)&&(r=(n=t.match(B))[1],e=n[2],o=n[3],!!(r&&r.length&&K.test(r.toLowerCase()))&&!(!e&&J.test(o)))))};function N(t){return M(t)}export{N as default};
//# sourceMappingURL=mod.js.map