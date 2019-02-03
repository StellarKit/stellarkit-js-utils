!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("axios")):"function"==typeof define&&define.amd?define(["vue","axios"],t):"object"==typeof exports?exports["stellar-js-utils"]=t(require("vue"),require("axios")):e["stellar-js-utils"]=t(e.vue,e.axios)}(window,function(__WEBPACK_EXTERNAL_MODULE__4__,__WEBPACK_EXTERNAL_MODULE__27__){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=551)}([function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(36)
Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})
var i=n(58)
Object.defineProperty(t,"Config",{enumerable:!0,get:function(){return i.Config}})
var o=n(278)
Object.defineProperty(t,"Server",{enumerable:!0,get:function(){return o.Server}})
var a=n(506)
Object.defineProperty(t,"FederationServer",{enumerable:!0,get:function(){return a.FederationServer}}),Object.defineProperty(t,"FEDERATION_RESPONSE_MAX_SIZE",{enumerable:!0,get:function(){return a.FEDERATION_RESPONSE_MAX_SIZE}})
var s=n(212)
Object.defineProperty(t,"StellarTomlResolver",{enumerable:!0,get:function(){return s.StellarTomlResolver}}),Object.defineProperty(t,"STELLAR_TOML_MAX_SIZE",{enumerable:!0,get:function(){return s.STELLAR_TOML_MAX_SIZE}})
var u=n(48)
Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}),n(510).polyfill(),t.default=e.exports},function(e,t,n){"use strict";(function(e){var r=n(285),i=n(286),o=n(144)
function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,n)
if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return l(this,e)}return c(this,e,t,n)}function c(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r)
u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=h(e,t)
return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8")
if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(t,n),i=(e=s(e,r)).write(t,n)
i!==r&&(e=e.slice(0,i))
return e}(e,t,n):function(e,t){if(u.isBuffer(t)){var n=0|d(t.length)
return 0===(e=s(e,n)).length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?s(e,0):h(e,t)
if("Buffer"===t.type&&o(t.data))return h(e,t.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function l(e,t){if(f(t),e=s(e,t<0?0:0|d(t)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0
return e}function h(e,t){var n=t.length<0?0:0|d(t.length)
e=s(e,n)
for(var r=0;r<n;r+=1)e[r]=255&t[r]
return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes")
return 0|e}function p(e,t){if(u.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return z(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return q(e).length
default:if(r)return z(e).length
t=(""+t).toLowerCase(),r=!0}}function v(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function b(e,t,n,r,i){if(0===e.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1
n=e.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof t&&(t=u.from(t,r)),u.isBuffer(t))return 0===t.length?-1:g(e,t,n,r,i)
if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):g(e,[t],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function g(e,t,n,r,i){var o,a=1,s=e.length,u=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var f=-1
for(o=n;o<s;o++)if(c(e,o)===c(t,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var l=!0,h=0;h<u;h++)if(c(e,o+h)!==c(t,h)){l=!1
break}if(l)return o}return-1}function m(e,t,n,r){n=Number(n)||0
var i=e.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=t.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var a=0;a<r;++a){var s=parseInt(t.substr(2*a,2),16)
if(isNaN(s))return a
e[n+a]=s}return a}function y(e,t,n,r){return F(z(t,e.length-n),e,n,r)}function _(e,t,n,r){return F(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function w(e,t,n,r){return _(e,t,n,r)}function x(e,t,n,r){return F(q(t),e,n,r)}function k(e,t,n,r){return F(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(t,e.length-n),e,n,r)}function S(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function E(e,t,n){n=Math.min(e.length,n)
for(var r=[],i=t;i<n;){var o,a,s,u,c=e[i],f=null,l=c>239?4:c>223?3:c>191?2:1
if(i+l<=n)switch(l){case 1:c<128&&(f=c)
break
case 2:128==(192&(o=e[i+1]))&&(u=(31&c)<<6|63&o)>127&&(f=u)
break
case 3:o=e[i+1],a=e[i+2],128==(192&o)&&128==(192&a)&&(u=(15&c)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(f=u)
break
case 4:o=e[i+1],a=e[i+2],s=e[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(f=u)}null===f?(f=65533,l=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return function(e){var t=e.length
if(t<=A)return String.fromCharCode.apply(String,e)
var n="",r=0
for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=A))
return n}(r)}t.Buffer=u,t.SlowBuffer=function(e){+e!=e&&(e=0)
return u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,n){return c(null,e,t,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,n){return function(e,t,n,r){return f(t),t<=0?s(e,t):void 0!==n?"string"==typeof r?s(e,t).fill(n,r):s(e,t).fill(n):s(e,t)}(null,e,t,n)},u.allocUnsafe=function(e){return l(null,e)},u.allocUnsafeSlow=function(e){return l(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i]
break}return n<r?-1:r<n?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},u.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return u.alloc(0)
var n
if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length
var r=u.allocUnsafe(t),i=0
for(n=0;n<e.length;++n){var a=e[n]
if(!u.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers')
a.copy(r,i),i+=a.length}return r},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)v(this,t,t+1)
return this},u.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2)
return this},u.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4)
return this},u.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?E(this,0,e):function(e,t,n){var r=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return M(this,t,n)
case"utf8":case"utf-8":return E(this,t,n)
case"ascii":return O(this,t,n)
case"latin1":case"binary":return T(this,t,n)
case"base64":return S(this,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n)
default:if(r)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),r=!0}}.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES
return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,n,r,i){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&t>=n)return 0
if(r>=i)return-1
if(t>=n)return 1
if(this===e)return 0
for(var o=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0),s=Math.min(o,a),c=this.slice(r,i),f=e.slice(t,n),l=0;l<s;++l)if(c[l]!==f[l]){o=c[l],a=f[l]
break}return o<a?-1:a<o?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return b(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return b(this,e,t,n,!1)},u.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t
if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return m(this,e,t,n)
case"utf8":case"utf-8":return y(this,e,t,n)
case"ascii":return _(this,e,t,n)
case"latin1":case"binary":return w(this,e,t,n)
case"base64":return x(this,e,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var A=4096
function O(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i])
return r}function T(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(e[i])
return r}function M(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=t;o<n;++o)i+=D(e[o])
return i}function P(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function I(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function C(e,t,n,r,i,o){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(t>i||t<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function R(e,t,n,r){t<0&&(t=65535+t+1)
for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function B(e,t,n,r){t<0&&(t=4294967295+t+1)
for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function N(e,t,n,r,o){return o||j(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function L(e,t,n,r,o){return o||j(e,0,n,8),i.write(e,t,n,r,52,8),n+8}u.prototype.slice=function(e,t){var n,r=this.length
if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=u.prototype
else{var i=t-e
n=new u(i,void 0)
for(var o=0;o<i;++o)n[o]=this[o+e]}return n},u.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||I(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r},u.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||I(e,t,this.length)
for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i
return r},u.prototype.readUInt8=function(e,t){return t||I(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||I(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||I(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||I(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},u.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||I(e,t,this.length)
for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},u.prototype.readInt8=function(e,t){return t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||I(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){t||I(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||I(e,4,this.length),i.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||I(e,4,this.length),i.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||I(e,8,this.length),i.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||I(e,8,this.length),i.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||C(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255
return t+n},u.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||C(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255
return t+n},u.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):B(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
C(this,e,t,n,i-1,-i)}var o=0,a=1,s=0
for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255
return t+n},u.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1)
C(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0
for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255
return t+n},u.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):B(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,n){return N(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return N(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return L(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return L(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var i,o=r-n
if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n]
else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t)
return o},u.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0)
i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(n<=t)return this
var o
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e
else{var a=u.isBuffer(e)?e:z(new u(e,r).toString()),s=a.length
for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this}
var U=/[^+\/0-9A-Za-z-_]/g
function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function z(e,t){var n
t=t||1/0
for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189)
continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((t-=1)<0)break
o.push(n)}else if(n<2048){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function q(e){return r.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(U,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function F(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i]
return i}}).call(this,n(5))},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t
var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){var r=n(1),i=r.Buffer
function o(e,t){for(var n in e)t[n]=e[n]}function a(e,t,n){return i(e,t,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=r:(o(r,t),t.Buffer=a),o(i,a),a.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number")
return i(e,t,n)},a.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number")
var r=i(e)
return void 0!==t?"string"==typeof n?r.fill(t,n):r.fill(t):r.fill(0),r},a.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return i(e)},a.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return r.SlowBuffer(e)}},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__4__},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){!function(e,t){"use strict"
function r(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t
var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}function o(e,t,n){if(o.isBN(e))return e
this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(n=t,t=10),this._init(e||0,t||10,n||"be"))}var a
"object"==typeof e?e.exports=o:t.BN=o,o.BN=o,o.wordSize=26
try{a=n(446).Buffer}catch(e){}function s(e,t,n){for(var r=0,i=Math.min(e.length,n),o=t;o<i;o++){var a=e.charCodeAt(o)-48
r<<=4,r|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return r}function u(e,t,n,r){for(var i=0,o=Math.min(e.length,n),a=t;a<o;a++){var s=e.charCodeAt(a)-48
i*=r,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(e){return e instanceof o||null!==e&&"object"==typeof e&&e.constructor.wordSize===o.wordSize&&Array.isArray(e.words)},o.max=function(e,t){return e.cmp(t)>0?e:t},o.min=function(e,t){return e.cmp(t)<0?e:t},o.prototype._init=function(e,t,n){if("number"==typeof e)return this._initNumber(e,t,n)
if("object"==typeof e)return this._initArray(e,t,n)
"hex"===t&&(t=16),r(t===(0|t)&&t>=2&&t<=36)
var i=0
"-"===(e=e.toString().replace(/\s+/g,""))[0]&&i++,16===t?this._parseHex(e,i):this._parseBase(e,t,i),"-"===e[0]&&(this.negative=1),this.strip(),"le"===n&&this._initArray(this.toArray(),t,n)},o.prototype._initNumber=function(e,t,n){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(r(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===n&&this._initArray(this.toArray(),t,n)},o.prototype._initArray=function(e,t,n){if(r("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this
this.length=Math.ceil(e.length/3),this.words=new Array(this.length)
for(var i=0;i<this.length;i++)this.words[i]=0
var o,a,s=0
if("be"===n)for(i=e.length-1,o=0;i>=0;i-=3)a=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
else if("le"===n)for(i=0,o=0;i<e.length;i+=3)a=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
return this.strip()},o.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length)
for(var n=0;n<this.length;n++)this.words[n]=0
var r,i,o=0
for(n=e.length-6,r=0;n>=t;n-=6)i=s(e,n,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303,(o+=24)>=26&&(o-=26,r++)
n+6!==t&&(i=s(e,t,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(e,t,n){this.words=[0],this.length=1
for(var r=0,i=1;i<=67108863;i*=t)r++
r--,i=i/t|0
for(var o=e.length-n,a=o%r,s=Math.min(o,o-a)+n,c=0,f=n;f<s;f+=r)c=u(e,f,f+r,t),this.imuln(i),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)
if(0!==a){var l=1
for(c=u(e,f,e.length,t),f=0;f<a;f++)l*=t
this.imuln(l),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}},o.prototype.copy=function(e){e.words=new Array(this.length)
for(var t=0;t<this.length;t++)e.words[t]=this.words[t]
e.length=this.length,e.negative=this.negative,e.red=this.red},o.prototype.clone=function(){var e=new o(null)
return this.copy(e),e},o.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0
return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--
return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}
var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],f=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],l=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176]
function h(e,t,n){n.negative=t.negative^e.negative
var r=e.length+t.length|0
n.length=r,r=r-1|0
var i=0|e.words[0],o=0|t.words[0],a=i*o,s=67108863&a,u=a/67108864|0
n.words[0]=s
for(var c=1;c<r;c++){for(var f=u>>>26,l=67108863&u,h=Math.min(c,t.length-1),d=Math.max(0,c-e.length+1);d<=h;d++){var p=c-d|0
f+=(a=(i=0|e.words[p])*(o=0|t.words[d])+l)/67108864|0,l=67108863&a}n.words[c]=0|l,u=0|f}return 0!==u?n.words[c]=0|u:n.length--,n.strip()}o.prototype.toString=function(e,t){var n
if(t=0|t||1,16===(e=e||10)||"hex"===e){n=""
for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16)
n=0!==(o=s>>>24-i&16777215)||a!==this.length-1?c[6-u.length]+u+n:u+n,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(n=o.toString(16)+n);n.length%t!=0;)n="0"+n
return 0!==this.negative&&(n="-"+n),n}if(e===(0|e)&&e>=2&&e<=36){var h=f[e],d=l[e]
n=""
var p=this.clone()
for(p.negative=0;!p.isZero();){var v=p.modn(d).toString(e)
n=(p=p.idivn(d)).isZero()?v+n:c[h-v.length]+v+n}for(this.isZero()&&(n="0"+n);n.length%t!=0;)n="0"+n
return 0!==this.negative&&(n="-"+n),n}r(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var e=this.words[0]
return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(e,t){return r(void 0!==a),this.toArrayLike(a,e,t)},o.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},o.prototype.toArrayLike=function(e,t,n){var i=this.byteLength(),o=n||Math.max(1,i)
r(i<=o,"byte array longer than desired length"),r(o>0,"Requested array length <= 0"),this.strip()
var a,s,u="le"===t,c=new e(o),f=this.clone()
if(u){for(s=0;!f.isZero();s++)a=f.andln(255),f.iushrn(8),c[s]=a
for(;s<o;s++)c[s]=0}else{for(s=0;s<o-i;s++)c[s]=0
for(s=0;!f.isZero();s++)a=f.andln(255),f.iushrn(8),c[o-s-1]=a}return c},Math.clz32?o.prototype._countBits=function(e){return 32-Math.clz32(e)}:o.prototype._countBits=function(e){var t=e,n=0
return t>=4096&&(n+=13,t>>>=13),t>=64&&(n+=7,t>>>=7),t>=8&&(n+=4,t>>>=4),t>=2&&(n+=2,t>>>=2),n+t},o.prototype._zeroBits=function(e){if(0===e)return 26
var t=e,n=0
return 0==(8191&t)&&(n+=13,t>>>=13),0==(127&t)&&(n+=7,t>>>=7),0==(15&t)&&(n+=4,t>>>=4),0==(3&t)&&(n+=2,t>>>=2),0==(1&t)&&n++,n},o.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e)
return 26*(this.length-1)+t},o.prototype.zeroBits=function(){if(this.isZero())return 0
for(var e=0,t=0;t<this.length;t++){var n=this._zeroBits(this.words[t])
if(e+=n,26!==n)break}return e},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},o.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0
for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t]
return this.strip()},o.prototype.ior=function(e){return r(0==(this.negative|e.negative)),this.iuor(e)},o.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},o.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},o.prototype.iuand=function(e){var t
t=this.length>e.length?e:this
for(var n=0;n<t.length;n++)this.words[n]=this.words[n]&e.words[n]
return this.length=t.length,this.strip()},o.prototype.iand=function(e){return r(0==(this.negative|e.negative)),this.iuand(e)},o.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},o.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},o.prototype.iuxor=function(e){var t,n
this.length>e.length?(t=this,n=e):(t=e,n=this)
for(var r=0;r<n.length;r++)this.words[r]=t.words[r]^n.words[r]
if(this!==t)for(;r<t.length;r++)this.words[r]=t.words[r]
return this.length=t.length,this.strip()},o.prototype.ixor=function(e){return r(0==(this.negative|e.negative)),this.iuxor(e)},o.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},o.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},o.prototype.inotn=function(e){r("number"==typeof e&&e>=0)
var t=0|Math.ceil(e/26),n=e%26
this._expand(t),n>0&&t--
for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i]
return n>0&&(this.words[i]=~this.words[i]&67108863>>26-n),this.strip()},o.prototype.notn=function(e){return this.clone().inotn(e)},o.prototype.setn=function(e,t){r("number"==typeof e&&e>=0)
var n=e/26|0,i=e%26
return this._expand(n+1),this.words[n]=t?this.words[n]|1<<i:this.words[n]&~(1<<i),this.strip()},o.prototype.iadd=function(e){var t,n,r
if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign()
if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign()
this.length>e.length?(n=this,r=e):(n=e,r=this)
for(var i=0,o=0;o<r.length;o++)t=(0|n.words[o])+(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26
for(;0!==i&&o<n.length;o++)t=(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26
if(this.length=n.length,0!==i)this.words[this.length]=i,this.length++
else if(n!==this)for(;o<n.length;o++)this.words[o]=n.words[o]
return this},o.prototype.add=function(e){var t
return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},o.prototype.isub=function(e){if(0!==e.negative){e.negative=0
var t=this.iadd(e)
return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign()
var n,r,i=this.cmp(e)
if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this
i>0?(n=this,r=e):(n=e,r=this)
for(var o=0,a=0;a<r.length;a++)o=(t=(0|n.words[a])-(0|r.words[a])+o)>>26,this.words[a]=67108863&t
for(;0!==o&&a<n.length;a++)o=(t=(0|n.words[a])+o)>>26,this.words[a]=67108863&t
if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a]
return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(e){return this.clone().isub(e)}
var d=function(e,t,n){var r,i,o,a=e.words,s=t.words,u=n.words,c=0,f=0|a[0],l=8191&f,h=f>>>13,d=0|a[1],p=8191&d,v=d>>>13,b=0|a[2],g=8191&b,m=b>>>13,y=0|a[3],_=8191&y,w=y>>>13,x=0|a[4],k=8191&x,S=x>>>13,E=0|a[5],A=8191&E,O=E>>>13,T=0|a[6],M=8191&T,P=T>>>13,I=0|a[7],C=8191&I,R=I>>>13,B=0|a[8],j=8191&B,N=B>>>13,L=0|a[9],U=8191&L,D=L>>>13,z=0|s[0],q=8191&z,F=z>>>13,K=0|s[1],H=8191&K,V=K>>>13,$=0|s[2],X=8191&$,W=$>>>13,Q=0|s[3],Y=8191&Q,G=Q>>>13,Z=0|s[4],J=8191&Z,ee=Z>>>13,te=0|s[5],ne=8191&te,re=te>>>13,ie=0|s[6],oe=8191&ie,ae=ie>>>13,se=0|s[7],ue=8191&se,ce=se>>>13,fe=0|s[8],le=8191&fe,he=fe>>>13,de=0|s[9],pe=8191&de,ve=de>>>13
n.negative=e.negative^t.negative,n.length=19
var be=(c+(r=Math.imul(l,q))|0)+((8191&(i=(i=Math.imul(l,F))+Math.imul(h,q)|0))<<13)|0
c=((o=Math.imul(h,F))+(i>>>13)|0)+(be>>>26)|0,be&=67108863,r=Math.imul(p,q),i=(i=Math.imul(p,F))+Math.imul(v,q)|0,o=Math.imul(v,F)
var ge=(c+(r=r+Math.imul(l,H)|0)|0)+((8191&(i=(i=i+Math.imul(l,V)|0)+Math.imul(h,H)|0))<<13)|0
c=((o=o+Math.imul(h,V)|0)+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,r=Math.imul(g,q),i=(i=Math.imul(g,F))+Math.imul(m,q)|0,o=Math.imul(m,F),r=r+Math.imul(p,H)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(v,H)|0,o=o+Math.imul(v,V)|0
var me=(c+(r=r+Math.imul(l,X)|0)|0)+((8191&(i=(i=i+Math.imul(l,W)|0)+Math.imul(h,X)|0))<<13)|0
c=((o=o+Math.imul(h,W)|0)+(i>>>13)|0)+(me>>>26)|0,me&=67108863,r=Math.imul(_,q),i=(i=Math.imul(_,F))+Math.imul(w,q)|0,o=Math.imul(w,F),r=r+Math.imul(g,H)|0,i=(i=i+Math.imul(g,V)|0)+Math.imul(m,H)|0,o=o+Math.imul(m,V)|0,r=r+Math.imul(p,X)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(v,X)|0,o=o+Math.imul(v,W)|0
var ye=(c+(r=r+Math.imul(l,Y)|0)|0)+((8191&(i=(i=i+Math.imul(l,G)|0)+Math.imul(h,Y)|0))<<13)|0
c=((o=o+Math.imul(h,G)|0)+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,r=Math.imul(k,q),i=(i=Math.imul(k,F))+Math.imul(S,q)|0,o=Math.imul(S,F),r=r+Math.imul(_,H)|0,i=(i=i+Math.imul(_,V)|0)+Math.imul(w,H)|0,o=o+Math.imul(w,V)|0,r=r+Math.imul(g,X)|0,i=(i=i+Math.imul(g,W)|0)+Math.imul(m,X)|0,o=o+Math.imul(m,W)|0,r=r+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,G)|0)+Math.imul(v,Y)|0,o=o+Math.imul(v,G)|0
var _e=(c+(r=r+Math.imul(l,J)|0)|0)+((8191&(i=(i=i+Math.imul(l,ee)|0)+Math.imul(h,J)|0))<<13)|0
c=((o=o+Math.imul(h,ee)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,r=Math.imul(A,q),i=(i=Math.imul(A,F))+Math.imul(O,q)|0,o=Math.imul(O,F),r=r+Math.imul(k,H)|0,i=(i=i+Math.imul(k,V)|0)+Math.imul(S,H)|0,o=o+Math.imul(S,V)|0,r=r+Math.imul(_,X)|0,i=(i=i+Math.imul(_,W)|0)+Math.imul(w,X)|0,o=o+Math.imul(w,W)|0,r=r+Math.imul(g,Y)|0,i=(i=i+Math.imul(g,G)|0)+Math.imul(m,Y)|0,o=o+Math.imul(m,G)|0,r=r+Math.imul(p,J)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(v,J)|0,o=o+Math.imul(v,ee)|0
var we=(c+(r=r+Math.imul(l,ne)|0)|0)+((8191&(i=(i=i+Math.imul(l,re)|0)+Math.imul(h,ne)|0))<<13)|0
c=((o=o+Math.imul(h,re)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,r=Math.imul(M,q),i=(i=Math.imul(M,F))+Math.imul(P,q)|0,o=Math.imul(P,F),r=r+Math.imul(A,H)|0,i=(i=i+Math.imul(A,V)|0)+Math.imul(O,H)|0,o=o+Math.imul(O,V)|0,r=r+Math.imul(k,X)|0,i=(i=i+Math.imul(k,W)|0)+Math.imul(S,X)|0,o=o+Math.imul(S,W)|0,r=r+Math.imul(_,Y)|0,i=(i=i+Math.imul(_,G)|0)+Math.imul(w,Y)|0,o=o+Math.imul(w,G)|0,r=r+Math.imul(g,J)|0,i=(i=i+Math.imul(g,ee)|0)+Math.imul(m,J)|0,o=o+Math.imul(m,ee)|0,r=r+Math.imul(p,ne)|0,i=(i=i+Math.imul(p,re)|0)+Math.imul(v,ne)|0,o=o+Math.imul(v,re)|0
var xe=(c+(r=r+Math.imul(l,oe)|0)|0)+((8191&(i=(i=i+Math.imul(l,ae)|0)+Math.imul(h,oe)|0))<<13)|0
c=((o=o+Math.imul(h,ae)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,r=Math.imul(C,q),i=(i=Math.imul(C,F))+Math.imul(R,q)|0,o=Math.imul(R,F),r=r+Math.imul(M,H)|0,i=(i=i+Math.imul(M,V)|0)+Math.imul(P,H)|0,o=o+Math.imul(P,V)|0,r=r+Math.imul(A,X)|0,i=(i=i+Math.imul(A,W)|0)+Math.imul(O,X)|0,o=o+Math.imul(O,W)|0,r=r+Math.imul(k,Y)|0,i=(i=i+Math.imul(k,G)|0)+Math.imul(S,Y)|0,o=o+Math.imul(S,G)|0,r=r+Math.imul(_,J)|0,i=(i=i+Math.imul(_,ee)|0)+Math.imul(w,J)|0,o=o+Math.imul(w,ee)|0,r=r+Math.imul(g,ne)|0,i=(i=i+Math.imul(g,re)|0)+Math.imul(m,ne)|0,o=o+Math.imul(m,re)|0,r=r+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,ae)|0)+Math.imul(v,oe)|0,o=o+Math.imul(v,ae)|0
var ke=(c+(r=r+Math.imul(l,ue)|0)|0)+((8191&(i=(i=i+Math.imul(l,ce)|0)+Math.imul(h,ue)|0))<<13)|0
c=((o=o+Math.imul(h,ce)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,r=Math.imul(j,q),i=(i=Math.imul(j,F))+Math.imul(N,q)|0,o=Math.imul(N,F),r=r+Math.imul(C,H)|0,i=(i=i+Math.imul(C,V)|0)+Math.imul(R,H)|0,o=o+Math.imul(R,V)|0,r=r+Math.imul(M,X)|0,i=(i=i+Math.imul(M,W)|0)+Math.imul(P,X)|0,o=o+Math.imul(P,W)|0,r=r+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,G)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,G)|0,r=r+Math.imul(k,J)|0,i=(i=i+Math.imul(k,ee)|0)+Math.imul(S,J)|0,o=o+Math.imul(S,ee)|0,r=r+Math.imul(_,ne)|0,i=(i=i+Math.imul(_,re)|0)+Math.imul(w,ne)|0,o=o+Math.imul(w,re)|0,r=r+Math.imul(g,oe)|0,i=(i=i+Math.imul(g,ae)|0)+Math.imul(m,oe)|0,o=o+Math.imul(m,ae)|0,r=r+Math.imul(p,ue)|0,i=(i=i+Math.imul(p,ce)|0)+Math.imul(v,ue)|0,o=o+Math.imul(v,ce)|0
var Se=(c+(r=r+Math.imul(l,le)|0)|0)+((8191&(i=(i=i+Math.imul(l,he)|0)+Math.imul(h,le)|0))<<13)|0
c=((o=o+Math.imul(h,he)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,r=Math.imul(U,q),i=(i=Math.imul(U,F))+Math.imul(D,q)|0,o=Math.imul(D,F),r=r+Math.imul(j,H)|0,i=(i=i+Math.imul(j,V)|0)+Math.imul(N,H)|0,o=o+Math.imul(N,V)|0,r=r+Math.imul(C,X)|0,i=(i=i+Math.imul(C,W)|0)+Math.imul(R,X)|0,o=o+Math.imul(R,W)|0,r=r+Math.imul(M,Y)|0,i=(i=i+Math.imul(M,G)|0)+Math.imul(P,Y)|0,o=o+Math.imul(P,G)|0,r=r+Math.imul(A,J)|0,i=(i=i+Math.imul(A,ee)|0)+Math.imul(O,J)|0,o=o+Math.imul(O,ee)|0,r=r+Math.imul(k,ne)|0,i=(i=i+Math.imul(k,re)|0)+Math.imul(S,ne)|0,o=o+Math.imul(S,re)|0,r=r+Math.imul(_,oe)|0,i=(i=i+Math.imul(_,ae)|0)+Math.imul(w,oe)|0,o=o+Math.imul(w,ae)|0,r=r+Math.imul(g,ue)|0,i=(i=i+Math.imul(g,ce)|0)+Math.imul(m,ue)|0,o=o+Math.imul(m,ce)|0,r=r+Math.imul(p,le)|0,i=(i=i+Math.imul(p,he)|0)+Math.imul(v,le)|0,o=o+Math.imul(v,he)|0
var Ee=(c+(r=r+Math.imul(l,pe)|0)|0)+((8191&(i=(i=i+Math.imul(l,ve)|0)+Math.imul(h,pe)|0))<<13)|0
c=((o=o+Math.imul(h,ve)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,r=Math.imul(U,H),i=(i=Math.imul(U,V))+Math.imul(D,H)|0,o=Math.imul(D,V),r=r+Math.imul(j,X)|0,i=(i=i+Math.imul(j,W)|0)+Math.imul(N,X)|0,o=o+Math.imul(N,W)|0,r=r+Math.imul(C,Y)|0,i=(i=i+Math.imul(C,G)|0)+Math.imul(R,Y)|0,o=o+Math.imul(R,G)|0,r=r+Math.imul(M,J)|0,i=(i=i+Math.imul(M,ee)|0)+Math.imul(P,J)|0,o=o+Math.imul(P,ee)|0,r=r+Math.imul(A,ne)|0,i=(i=i+Math.imul(A,re)|0)+Math.imul(O,ne)|0,o=o+Math.imul(O,re)|0,r=r+Math.imul(k,oe)|0,i=(i=i+Math.imul(k,ae)|0)+Math.imul(S,oe)|0,o=o+Math.imul(S,ae)|0,r=r+Math.imul(_,ue)|0,i=(i=i+Math.imul(_,ce)|0)+Math.imul(w,ue)|0,o=o+Math.imul(w,ce)|0,r=r+Math.imul(g,le)|0,i=(i=i+Math.imul(g,he)|0)+Math.imul(m,le)|0,o=o+Math.imul(m,he)|0
var Ae=(c+(r=r+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,ve)|0)+Math.imul(v,pe)|0))<<13)|0
c=((o=o+Math.imul(v,ve)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,r=Math.imul(U,X),i=(i=Math.imul(U,W))+Math.imul(D,X)|0,o=Math.imul(D,W),r=r+Math.imul(j,Y)|0,i=(i=i+Math.imul(j,G)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,G)|0,r=r+Math.imul(C,J)|0,i=(i=i+Math.imul(C,ee)|0)+Math.imul(R,J)|0,o=o+Math.imul(R,ee)|0,r=r+Math.imul(M,ne)|0,i=(i=i+Math.imul(M,re)|0)+Math.imul(P,ne)|0,o=o+Math.imul(P,re)|0,r=r+Math.imul(A,oe)|0,i=(i=i+Math.imul(A,ae)|0)+Math.imul(O,oe)|0,o=o+Math.imul(O,ae)|0,r=r+Math.imul(k,ue)|0,i=(i=i+Math.imul(k,ce)|0)+Math.imul(S,ue)|0,o=o+Math.imul(S,ce)|0,r=r+Math.imul(_,le)|0,i=(i=i+Math.imul(_,he)|0)+Math.imul(w,le)|0,o=o+Math.imul(w,he)|0
var Oe=(c+(r=r+Math.imul(g,pe)|0)|0)+((8191&(i=(i=i+Math.imul(g,ve)|0)+Math.imul(m,pe)|0))<<13)|0
c=((o=o+Math.imul(m,ve)|0)+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,r=Math.imul(U,Y),i=(i=Math.imul(U,G))+Math.imul(D,Y)|0,o=Math.imul(D,G),r=r+Math.imul(j,J)|0,i=(i=i+Math.imul(j,ee)|0)+Math.imul(N,J)|0,o=o+Math.imul(N,ee)|0,r=r+Math.imul(C,ne)|0,i=(i=i+Math.imul(C,re)|0)+Math.imul(R,ne)|0,o=o+Math.imul(R,re)|0,r=r+Math.imul(M,oe)|0,i=(i=i+Math.imul(M,ae)|0)+Math.imul(P,oe)|0,o=o+Math.imul(P,ae)|0,r=r+Math.imul(A,ue)|0,i=(i=i+Math.imul(A,ce)|0)+Math.imul(O,ue)|0,o=o+Math.imul(O,ce)|0,r=r+Math.imul(k,le)|0,i=(i=i+Math.imul(k,he)|0)+Math.imul(S,le)|0,o=o+Math.imul(S,he)|0
var Te=(c+(r=r+Math.imul(_,pe)|0)|0)+((8191&(i=(i=i+Math.imul(_,ve)|0)+Math.imul(w,pe)|0))<<13)|0
c=((o=o+Math.imul(w,ve)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,r=Math.imul(U,J),i=(i=Math.imul(U,ee))+Math.imul(D,J)|0,o=Math.imul(D,ee),r=r+Math.imul(j,ne)|0,i=(i=i+Math.imul(j,re)|0)+Math.imul(N,ne)|0,o=o+Math.imul(N,re)|0,r=r+Math.imul(C,oe)|0,i=(i=i+Math.imul(C,ae)|0)+Math.imul(R,oe)|0,o=o+Math.imul(R,ae)|0,r=r+Math.imul(M,ue)|0,i=(i=i+Math.imul(M,ce)|0)+Math.imul(P,ue)|0,o=o+Math.imul(P,ce)|0,r=r+Math.imul(A,le)|0,i=(i=i+Math.imul(A,he)|0)+Math.imul(O,le)|0,o=o+Math.imul(O,he)|0
var Me=(c+(r=r+Math.imul(k,pe)|0)|0)+((8191&(i=(i=i+Math.imul(k,ve)|0)+Math.imul(S,pe)|0))<<13)|0
c=((o=o+Math.imul(S,ve)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,r=Math.imul(U,ne),i=(i=Math.imul(U,re))+Math.imul(D,ne)|0,o=Math.imul(D,re),r=r+Math.imul(j,oe)|0,i=(i=i+Math.imul(j,ae)|0)+Math.imul(N,oe)|0,o=o+Math.imul(N,ae)|0,r=r+Math.imul(C,ue)|0,i=(i=i+Math.imul(C,ce)|0)+Math.imul(R,ue)|0,o=o+Math.imul(R,ce)|0,r=r+Math.imul(M,le)|0,i=(i=i+Math.imul(M,he)|0)+Math.imul(P,le)|0,o=o+Math.imul(P,he)|0
var Pe=(c+(r=r+Math.imul(A,pe)|0)|0)+((8191&(i=(i=i+Math.imul(A,ve)|0)+Math.imul(O,pe)|0))<<13)|0
c=((o=o+Math.imul(O,ve)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,r=Math.imul(U,oe),i=(i=Math.imul(U,ae))+Math.imul(D,oe)|0,o=Math.imul(D,ae),r=r+Math.imul(j,ue)|0,i=(i=i+Math.imul(j,ce)|0)+Math.imul(N,ue)|0,o=o+Math.imul(N,ce)|0,r=r+Math.imul(C,le)|0,i=(i=i+Math.imul(C,he)|0)+Math.imul(R,le)|0,o=o+Math.imul(R,he)|0
var Ie=(c+(r=r+Math.imul(M,pe)|0)|0)+((8191&(i=(i=i+Math.imul(M,ve)|0)+Math.imul(P,pe)|0))<<13)|0
c=((o=o+Math.imul(P,ve)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,r=Math.imul(U,ue),i=(i=Math.imul(U,ce))+Math.imul(D,ue)|0,o=Math.imul(D,ce),r=r+Math.imul(j,le)|0,i=(i=i+Math.imul(j,he)|0)+Math.imul(N,le)|0,o=o+Math.imul(N,he)|0
var Ce=(c+(r=r+Math.imul(C,pe)|0)|0)+((8191&(i=(i=i+Math.imul(C,ve)|0)+Math.imul(R,pe)|0))<<13)|0
c=((o=o+Math.imul(R,ve)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,r=Math.imul(U,le),i=(i=Math.imul(U,he))+Math.imul(D,le)|0,o=Math.imul(D,he)
var Re=(c+(r=r+Math.imul(j,pe)|0)|0)+((8191&(i=(i=i+Math.imul(j,ve)|0)+Math.imul(N,pe)|0))<<13)|0
c=((o=o+Math.imul(N,ve)|0)+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863
var Be=(c+(r=Math.imul(U,pe))|0)+((8191&(i=(i=Math.imul(U,ve))+Math.imul(D,pe)|0))<<13)|0
return c=((o=Math.imul(D,ve))+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,u[0]=be,u[1]=ge,u[2]=me,u[3]=ye,u[4]=_e,u[5]=we,u[6]=xe,u[7]=ke,u[8]=Se,u[9]=Ee,u[10]=Ae,u[11]=Oe,u[12]=Te,u[13]=Me,u[14]=Pe,u[15]=Ie,u[16]=Ce,u[17]=Re,u[18]=Be,0!==c&&(u[19]=c,n.length++),n}
function p(e,t,n){return(new v).mulp(e,t,n)}function v(e,t){this.x=e,this.y=t}Math.imul||(d=h),o.prototype.mulTo=function(e,t){var n=this.length+e.length
return 10===this.length&&10===e.length?d(this,e,t):n<63?h(this,e,t):n<1024?function(e,t,n){n.negative=t.negative^e.negative,n.length=e.length+t.length
for(var r=0,i=0,o=0;o<n.length-1;o++){var a=i
i=0
for(var s=67108863&r,u=Math.min(o,t.length-1),c=Math.max(0,o-e.length+1);c<=u;c++){var f=o-c,l=(0|e.words[f])*(0|t.words[c]),h=67108863&l
s=67108863&(h=h+s|0),i+=(a=(a=a+(l/67108864|0)|0)+(h>>>26)|0)>>>26,a&=67108863}n.words[o]=s,r=a,a=i}return 0!==r?n.words[o]=r:n.length--,n.strip()}(this,e,t):p(this,e,t)},v.prototype.makeRBT=function(e){for(var t=new Array(e),n=o.prototype._countBits(e)-1,r=0;r<e;r++)t[r]=this.revBin(r,n,e)
return t},v.prototype.revBin=function(e,t,n){if(0===e||e===n-1)return e
for(var r=0,i=0;i<t;i++)r|=(1&e)<<t-i-1,e>>=1
return r},v.prototype.permute=function(e,t,n,r,i,o){for(var a=0;a<o;a++)r[a]=t[e[a]],i[a]=n[e[a]]},v.prototype.transform=function(e,t,n,r,i,o){this.permute(o,e,t,n,r,i)
for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),f=0;f<i;f+=s)for(var l=u,h=c,d=0;d<a;d++){var p=n[f+d],v=r[f+d],b=n[f+d+a],g=r[f+d+a],m=l*b-h*g
g=l*g+h*b,b=m,n[f+d]=p+b,r[f+d]=v+g,n[f+d+a]=p-b,r[f+d+a]=v-g,d!==s&&(m=u*l-c*h,h=u*h+c*l,l=m)}},v.prototype.guessLen13b=function(e,t){var n=1|Math.max(t,e),r=1&n,i=0
for(n=n/2|0;n;n>>>=1)i++
return 1<<i+1+r},v.prototype.conjugate=function(e,t,n){if(!(n<=1))for(var r=0;r<n/2;r++){var i=e[r]
e[r]=e[n-r-1],e[n-r-1]=i,i=t[r],t[r]=-t[n-r-1],t[n-r-1]=-i}},v.prototype.normalize13b=function(e,t){for(var n=0,r=0;r<t/2;r++){var i=8192*Math.round(e[2*r+1]/t)+Math.round(e[2*r]/t)+n
e[r]=67108863&i,n=i<67108864?0:i/67108864|0}return e},v.prototype.convert13b=function(e,t,n,i){for(var o=0,a=0;a<t;a++)o+=0|e[a],n[2*a]=8191&o,o>>>=13,n[2*a+1]=8191&o,o>>>=13
for(a=2*t;a<i;++a)n[a]=0
r(0===o),r(0==(-8192&o))},v.prototype.stub=function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=0
return t},v.prototype.mulp=function(e,t,n){var r=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(r),o=this.stub(r),a=new Array(r),s=new Array(r),u=new Array(r),c=new Array(r),f=new Array(r),l=new Array(r),h=n.words
h.length=r,this.convert13b(e.words,e.length,a,r),this.convert13b(t.words,t.length,c,r),this.transform(a,o,s,u,r,i),this.transform(c,o,f,l,r,i)
for(var d=0;d<r;d++){var p=s[d]*f[d]-u[d]*l[d]
u[d]=s[d]*l[d]+u[d]*f[d],s[d]=p}return this.conjugate(s,u,r),this.transform(s,u,h,o,r,i),this.conjugate(h,o,r),this.normalize13b(h,r),n.negative=e.negative^t.negative,n.length=e.length+t.length,n.strip()},o.prototype.mul=function(e){var t=new o(null)
return t.words=new Array(this.length+e.length),this.mulTo(e,t)},o.prototype.mulf=function(e){var t=new o(null)
return t.words=new Array(this.length+e.length),p(this,e,t)},o.prototype.imul=function(e){return this.clone().mulTo(e,this)},o.prototype.imuln=function(e){r("number"==typeof e),r(e<67108864)
for(var t=0,n=0;n<this.length;n++){var i=(0|this.words[n])*e,o=(67108863&i)+(67108863&t)
t>>=26,t+=i/67108864|0,t+=o>>>26,this.words[n]=67108863&o}return 0!==t&&(this.words[n]=t,this.length++),this},o.prototype.muln=function(e){return this.clone().imuln(e)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),n=0;n<t.length;n++){var r=n/26|0,i=n%26
t[n]=(e.words[r]&1<<i)>>>i}return t}(e)
if(0===t.length)return new o(1)
for(var n=this,r=0;r<t.length&&0===t[r];r++,n=n.sqr());if(++r<t.length)for(var i=n.sqr();r<t.length;r++,i=i.sqr())0!==t[r]&&(n=n.mul(i))
return n},o.prototype.iushln=function(e){r("number"==typeof e&&e>=0)
var t,n=e%26,i=(e-n)/26,o=67108863>>>26-n<<26-n
if(0!==n){var a=0
for(t=0;t<this.length;t++){var s=this.words[t]&o,u=(0|this.words[t])-s<<n
this.words[t]=u|a,a=s>>>26-n}a&&(this.words[t]=a,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t]
for(t=0;t<i;t++)this.words[t]=0
this.length+=i}return this.strip()},o.prototype.ishln=function(e){return r(0===this.negative),this.iushln(e)},o.prototype.iushrn=function(e,t,n){var i
r("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0
var o=e%26,a=Math.min((e-o)/26,this.length),s=67108863^67108863>>>o<<o,u=n
if(i-=a,i=Math.max(0,i),u){for(var c=0;c<a;c++)u.words[c]=this.words[c]
u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a]
else this.words[0]=0,this.length=1
var f=0
for(c=this.length-1;c>=0&&(0!==f||c>=i);c--){var l=0|this.words[c]
this.words[c]=f<<26-o|l>>>o,f=l&s}return u&&0!==f&&(u.words[u.length++]=f),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(e,t,n){return r(0===this.negative),this.iushrn(e,t,n)},o.prototype.shln=function(e){return this.clone().ishln(e)},o.prototype.ushln=function(e){return this.clone().iushln(e)},o.prototype.shrn=function(e){return this.clone().ishrn(e)},o.prototype.ushrn=function(e){return this.clone().iushrn(e)},o.prototype.testn=function(e){r("number"==typeof e&&e>=0)
var t=e%26,n=(e-t)/26,i=1<<t
return!(this.length<=n)&&!!(this.words[n]&i)},o.prototype.imaskn=function(e){r("number"==typeof e&&e>=0)
var t=e%26,n=(e-t)/26
if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=n)return this
if(0!==t&&n++,this.length=Math.min(n,this.length),0!==t){var i=67108863^67108863>>>t<<t
this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(e){return this.clone().imaskn(e)},o.prototype.iaddn=function(e){return r("number"==typeof e),r(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},o.prototype._iaddn=function(e){this.words[0]+=e
for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++
return this.length=Math.max(this.length,t+1),this},o.prototype.isubn=function(e){if(r("number"==typeof e),r(e<67108864),e<0)return this.iaddn(-e)
if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this
if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1
else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1
return this.strip()},o.prototype.addn=function(e){return this.clone().iaddn(e)},o.prototype.subn=function(e){return this.clone().isubn(e)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(e,t,n){var i,o,a=e.length+n
this._expand(a)
var s=0
for(i=0;i<e.length;i++){o=(0|this.words[i+n])+s
var u=(0|e.words[i])*t
s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+n]=67108863&o}for(;i<this.length-n;i++)s=(o=(0|this.words[i+n])+s)>>26,this.words[i+n]=67108863&o
if(0===s)return this.strip()
for(r(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o
return this.negative=1,this.strip()},o.prototype._wordDiv=function(e,t){var n=(this.length,e.length),r=this.clone(),i=e,a=0|i.words[i.length-1]
0!==(n=26-this._countBits(a))&&(i=i.ushln(n),r.iushln(n),a=0|i.words[i.length-1])
var s,u=r.length-i.length
if("mod"!==t){(s=new o(null)).length=u+1,s.words=new Array(s.length)
for(var c=0;c<s.length;c++)s.words[c]=0}var f=r.clone()._ishlnsubmul(i,1,u)
0===f.negative&&(r=f,s&&(s.words[u]=1))
for(var l=u-1;l>=0;l--){var h=67108864*(0|r.words[i.length+l])+(0|r.words[i.length+l-1])
for(h=Math.min(h/a|0,67108863),r._ishlnsubmul(i,h,l);0!==r.negative;)h--,r.negative=0,r._ishlnsubmul(i,1,l),r.isZero()||(r.negative^=1)
s&&(s.words[l]=h)}return s&&s.strip(),r.strip(),"div"!==t&&0!==n&&r.iushrn(n),{div:s||null,mod:r}},o.prototype.divmod=function(e,t,n){return r(!e.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===e.negative?(s=this.neg().divmod(e,t),"mod"!==t&&(i=s.div.neg()),"div"!==t&&(a=s.mod.neg(),n&&0!==a.negative&&a.iadd(e)),{div:i,mod:a}):0===this.negative&&0!==e.negative?(s=this.divmod(e.neg(),t),"mod"!==t&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&e.negative)?(s=this.neg().divmod(e.neg(),t),"div"!==t&&(a=s.mod.neg(),n&&0!==a.negative&&a.isub(e)),{div:s.div,mod:a}):e.length>this.length||this.cmp(e)<0?{div:new o(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new o(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new o(this.modn(e.words[0]))}:this._wordDiv(e,t)
var i,a,s},o.prototype.div=function(e){return this.divmod(e,"div",!1).div},o.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},o.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},o.prototype.divRound=function(e){var t=this.divmod(e)
if(t.mod.isZero())return t.div
var n=0!==t.div.negative?t.mod.isub(e):t.mod,r=e.ushrn(1),i=e.andln(1),o=n.cmp(r)
return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},o.prototype.modn=function(e){r(e<=67108863)
for(var t=(1<<26)%e,n=0,i=this.length-1;i>=0;i--)n=(t*n+(0|this.words[i]))%e
return n},o.prototype.idivn=function(e){r(e<=67108863)
for(var t=0,n=this.length-1;n>=0;n--){var i=(0|this.words[n])+67108864*t
this.words[n]=i/e|0,t=i%e}return this.strip()},o.prototype.divn=function(e){return this.clone().idivn(e)},o.prototype.egcd=function(e){r(0===e.negative),r(!e.isZero())
var t=this,n=e.clone()
t=0!==t.negative?t.umod(e):t.clone()
for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),c=0;t.isEven()&&n.isEven();)t.iushrn(1),n.iushrn(1),++c
for(var f=n.clone(),l=t.clone();!t.isZero();){for(var h=0,d=1;0==(t.words[0]&d)&&h<26;++h,d<<=1);if(h>0)for(t.iushrn(h);h-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(f),a.isub(l)),i.iushrn(1),a.iushrn(1)
for(var p=0,v=1;0==(n.words[0]&v)&&p<26;++p,v<<=1);if(p>0)for(n.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(f),u.isub(l)),s.iushrn(1),u.iushrn(1)
t.cmp(n)>=0?(t.isub(n),i.isub(s),a.isub(u)):(n.isub(t),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:n.iushln(c)}},o.prototype._invmp=function(e){r(0===e.negative),r(!e.isZero())
var t=this,n=e.clone()
t=0!==t.negative?t.umod(e):t.clone()
for(var i,a=new o(1),s=new o(0),u=n.clone();t.cmpn(1)>0&&n.cmpn(1)>0;){for(var c=0,f=1;0==(t.words[0]&f)&&c<26;++c,f<<=1);if(c>0)for(t.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1)
for(var l=0,h=1;0==(n.words[0]&h)&&l<26;++l,h<<=1);if(l>0)for(n.iushrn(l);l-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1)
t.cmp(n)>=0?(t.isub(n),a.isub(s)):(n.isub(t),s.isub(a))}return(i=0===t.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(e),i},o.prototype.gcd=function(e){if(this.isZero())return e.abs()
if(e.isZero())return this.abs()
var t=this.clone(),n=e.clone()
t.negative=0,n.negative=0
for(var r=0;t.isEven()&&n.isEven();r++)t.iushrn(1),n.iushrn(1)
for(;;){for(;t.isEven();)t.iushrn(1)
for(;n.isEven();)n.iushrn(1)
var i=t.cmp(n)
if(i<0){var o=t
t=n,n=o}else if(0===i||0===n.cmpn(1))break
t.isub(n)}return n.iushln(r)},o.prototype.invm=function(e){return this.egcd(e).a.umod(e)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(e){return this.words[0]&e},o.prototype.bincn=function(e){r("number"==typeof e)
var t=e%26,n=(e-t)/26,i=1<<t
if(this.length<=n)return this._expand(n+1),this.words[n]|=i,this
for(var o=i,a=n;0!==o&&a<this.length;a++){var s=0|this.words[a]
o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(e){var t,n=e<0
if(0!==this.negative&&!n)return-1
if(0===this.negative&&n)return 1
if(this.strip(),this.length>1)t=1
else{n&&(e=-e),r(e<=67108863,"Number is too big")
var i=0|this.words[0]
t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},o.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1
if(0===this.negative&&0!==e.negative)return 1
var t=this.ucmp(e)
return 0!==this.negative?0|-t:t},o.prototype.ucmp=function(e){if(this.length>e.length)return 1
if(this.length<e.length)return-1
for(var t=0,n=this.length-1;n>=0;n--){var r=0|this.words[n],i=0|e.words[n]
if(r!==i){r<i?t=-1:r>i&&(t=1)
break}}return t},o.prototype.gtn=function(e){return 1===this.cmpn(e)},o.prototype.gt=function(e){return 1===this.cmp(e)},o.prototype.gten=function(e){return this.cmpn(e)>=0},o.prototype.gte=function(e){return this.cmp(e)>=0},o.prototype.ltn=function(e){return-1===this.cmpn(e)},o.prototype.lt=function(e){return-1===this.cmp(e)},o.prototype.lten=function(e){return this.cmpn(e)<=0},o.prototype.lte=function(e){return this.cmp(e)<=0},o.prototype.eqn=function(e){return 0===this.cmpn(e)},o.prototype.eq=function(e){return 0===this.cmp(e)},o.red=function(e){return new x(e)},o.prototype.toRed=function(e){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},o.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(e){return this.red=e,this},o.prototype.forceRed=function(e){return r(!this.red,"Already a number in reduction context"),this._forceRed(e)},o.prototype.redAdd=function(e){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},o.prototype.redIAdd=function(e){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},o.prototype.redSub=function(e){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},o.prototype.redISub=function(e){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},o.prototype.redShl=function(e){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},o.prototype.redMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},o.prototype.redIMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},o.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(e){return r(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)}
var b={k256:null,p224:null,p192:null,p25519:null}
function g(e,t){this.name=e,this.p=new o(t,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function m(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function y(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function _(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function w(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function x(e){if("string"==typeof e){var t=o._prime(e)
this.m=t.p,this.prime=t}else r(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function k(e){x.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}g.prototype._tmp=function(){var e=new o(null)
return e.words=new Array(Math.ceil(this.n/13)),e},g.prototype.ireduce=function(e){var t,n=e
do{this.split(n,this.tmp),t=(n=(n=this.imulK(n)).iadd(this.tmp)).bitLength()}while(t>this.n)
var r=t<this.n?-1:n.ucmp(this.p)
return 0===r?(n.words[0]=0,n.length=1):r>0?n.isub(this.p):n.strip(),n},g.prototype.split=function(e,t){e.iushrn(this.n,0,t)},g.prototype.imulK=function(e){return e.imul(this.k)},i(m,g),m.prototype.split=function(e,t){for(var n=Math.min(e.length,9),r=0;r<n;r++)t.words[r]=e.words[r]
if(t.length=n,e.length<=9)return e.words[0]=0,void(e.length=1)
var i=e.words[9]
for(t.words[t.length++]=4194303&i,r=10;r<e.length;r++){var o=0|e.words[r]
e.words[r-10]=(4194303&o)<<4|i>>>22,i=o}i>>>=22,e.words[r-10]=i,0===i&&e.length>10?e.length-=10:e.length-=9},m.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2
for(var t=0,n=0;n<e.length;n++){var r=0|e.words[n]
t+=977*r,e.words[n]=67108863&t,t=64*r+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(y,g),i(_,g),i(w,g),w.prototype.imulK=function(e){for(var t=0,n=0;n<e.length;n++){var r=19*(0|e.words[n])+t,i=67108863&r
r>>>=26,e.words[n]=i,t=r}return 0!==t&&(e.words[e.length++]=t),e},o._prime=function(e){if(b[e])return b[e]
var t
if("k256"===e)t=new m
else if("p224"===e)t=new y
else if("p192"===e)t=new _
else{if("p25519"!==e)throw new Error("Unknown prime "+e)
t=new w}return b[e]=t,t},x.prototype._verify1=function(e){r(0===e.negative,"red works only with positives"),r(e.red,"red works only with red numbers")},x.prototype._verify2=function(e,t){r(0==(e.negative|t.negative),"red works only with positives"),r(e.red&&e.red===t.red,"red works only with red numbers")},x.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},x.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},x.prototype.add=function(e,t){this._verify2(e,t)
var n=e.add(t)
return n.cmp(this.m)>=0&&n.isub(this.m),n._forceRed(this)},x.prototype.iadd=function(e,t){this._verify2(e,t)
var n=e.iadd(t)
return n.cmp(this.m)>=0&&n.isub(this.m),n},x.prototype.sub=function(e,t){this._verify2(e,t)
var n=e.sub(t)
return n.cmpn(0)<0&&n.iadd(this.m),n._forceRed(this)},x.prototype.isub=function(e,t){this._verify2(e,t)
var n=e.isub(t)
return n.cmpn(0)<0&&n.iadd(this.m),n},x.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},x.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},x.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},x.prototype.isqr=function(e){return this.imul(e,e.clone())},x.prototype.sqr=function(e){return this.mul(e,e)},x.prototype.sqrt=function(e){if(e.isZero())return e.clone()
var t=this.m.andln(3)
if(r(t%2==1),3===t){var n=this.m.add(new o(1)).iushrn(2)
return this.pow(e,n)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1)
r(!i.isZero())
var s=new o(1).toRed(this),u=s.redNeg(),c=this.m.subn(1).iushrn(1),f=this.m.bitLength()
for(f=new o(2*f*f).toRed(this);0!==this.pow(f,c).cmp(u);)f.redIAdd(u)
for(var l=this.pow(f,i),h=this.pow(e,i.addn(1).iushrn(1)),d=this.pow(e,i),p=a;0!==d.cmp(s);){for(var v=d,b=0;0!==v.cmp(s);b++)v=v.redSqr()
r(b<p)
var g=this.pow(l,new o(1).iushln(p-b-1))
h=h.redMul(g),l=g.redSqr(),d=d.redMul(l),p=b}return h},x.prototype.invm=function(e){var t=e._invmp(this.m)
return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},x.prototype.pow=function(e,t){if(t.isZero())return new o(1).toRed(this)
if(0===t.cmpn(1))return e.clone()
var n=new Array(16)
n[0]=new o(1).toRed(this),n[1]=e
for(var r=2;r<n.length;r++)n[r]=this.mul(n[r-1],e)
var i=n[0],a=0,s=0,u=t.bitLength()%26
for(0===u&&(u=26),r=t.length-1;r>=0;r--){for(var c=t.words[r],f=u-1;f>=0;f--){var l=c>>f&1
i!==n[0]&&(i=this.sqr(i)),0!==l||0!==a?(a<<=1,a|=l,(4===++s||0===r&&0===f)&&(i=this.mul(i,n[a]),s=0,a=0)):s=0}u=26}return i},x.prototype.convertTo=function(e){var t=e.umod(this.m)
return t===e?t.clone():t},x.prototype.convertFrom=function(e){var t=e.clone()
return t.red=null,t},o.mont=function(e){return new k(e)},i(k,x),k.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},k.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv))
return t.red=null,t},k.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e
var n=e.imul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),o=i
return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},k.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new o(0)._forceRed(this)
var n=e.mul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),a=i
return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},k.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e,this)}).call(this,n(39)(e))},function(e,t){var n=Array.isArray
e.exports=n},function(e,t,n){"use strict"
var r,i=((r=n(28))&&r.__esModule?r:{default:r}).config(function(e){e.typedef("Value",e.varOpaque()),e.struct("ScpBallot",[["counter",e.lookup("Uint32")],["value",e.lookup("Value")]]),e.enum("ScpStatementType",{scpStPrepare:0,scpStConfirm:1,scpStExternalize:2,scpStNominate:3}),e.struct("ScpNomination",[["quorumSetHash",e.lookup("Hash")],["votes",e.varArray(e.lookup("Value"),2147483647)],["accepted",e.varArray(e.lookup("Value"),2147483647)]]),e.struct("ScpStatementPrepare",[["quorumSetHash",e.lookup("Hash")],["ballot",e.lookup("ScpBallot")],["prepared",e.option(e.lookup("ScpBallot"))],["preparedPrime",e.option(e.lookup("ScpBallot"))],["nC",e.lookup("Uint32")],["nH",e.lookup("Uint32")]]),e.struct("ScpStatementConfirm",[["ballot",e.lookup("ScpBallot")],["nPrepared",e.lookup("Uint32")],["nCommit",e.lookup("Uint32")],["nH",e.lookup("Uint32")],["quorumSetHash",e.lookup("Hash")]]),e.struct("ScpStatementExternalize",[["commit",e.lookup("ScpBallot")],["nH",e.lookup("Uint32")],["commitQuorumSetHash",e.lookup("Hash")]]),e.union("ScpStatementPledges",{switchOn:e.lookup("ScpStatementType"),switchName:"type",switches:[["scpStPrepare","prepare"],["scpStConfirm","confirm"],["scpStExternalize","externalize"],["scpStNominate","nominate"]],arms:{prepare:e.lookup("ScpStatementPrepare"),confirm:e.lookup("ScpStatementConfirm"),externalize:e.lookup("ScpStatementExternalize"),nominate:e.lookup("ScpNomination")}}),e.struct("ScpStatement",[["nodeId",e.lookup("NodeId")],["slotIndex",e.lookup("Uint64")],["pledges",e.lookup("ScpStatementPledges")]]),e.struct("ScpEnvelope",[["statement",e.lookup("ScpStatement")],["signature",e.lookup("Signature")]]),e.struct("ScpQuorumSet",[["threshold",e.lookup("Uint32")],["validators",e.varArray(e.lookup("PublicKey"),2147483647)],["innerSets",e.varArray(e.lookup("ScpQuorumSet"),2147483647)]]),e.typedef("AccountId",e.lookup("PublicKey")),e.typedef("Thresholds",e.opaque(4)),e.typedef("String32",e.string(32)),e.typedef("String64",e.string(64)),e.typedef("SequenceNumber",e.lookup("Int64")),e.typedef("DataValue",e.varOpaque(64)),e.enum("AssetType",{assetTypeNative:0,assetTypeCreditAlphanum4:1,assetTypeCreditAlphanum12:2}),e.struct("AssetAlphaNum4",[["assetCode",e.opaque(4)],["issuer",e.lookup("AccountId")]]),e.struct("AssetAlphaNum12",[["assetCode",e.opaque(12)],["issuer",e.lookup("AccountId")]]),e.union("Asset",{switchOn:e.lookup("AssetType"),switchName:"type",switches:[["assetTypeNative",e.void()],["assetTypeCreditAlphanum4","alphaNum4"],["assetTypeCreditAlphanum12","alphaNum12"]],arms:{alphaNum4:e.lookup("AssetAlphaNum4"),alphaNum12:e.lookup("AssetAlphaNum12")}}),e.struct("Price",[["n",e.lookup("Int32")],["d",e.lookup("Int32")]]),e.struct("Liabilities",[["buying",e.lookup("Int64")],["selling",e.lookup("Int64")]]),e.enum("ThresholdIndices",{thresholdMasterWeight:0,thresholdLow:1,thresholdMed:2,thresholdHigh:3}),e.enum("LedgerEntryType",{account:0,trustline:1,offer:2,datum:3}),e.struct("Signer",[["key",e.lookup("SignerKey")],["weight",e.lookup("Uint32")]]),e.enum("AccountFlags",{authRequiredFlag:1,authRevocableFlag:2,authImmutableFlag:4}),e.const("MASK_ACCOUNT_FLAGS",7),e.union("AccountEntryV1Ext",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("AccountEntryV1",[["liabilities",e.lookup("Liabilities")],["ext",e.lookup("AccountEntryV1Ext")]]),e.union("AccountEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()],[1,"v1"]],arms:{v1:e.lookup("AccountEntryV1")}}),e.struct("AccountEntry",[["accountId",e.lookup("AccountId")],["balance",e.lookup("Int64")],["seqNum",e.lookup("SequenceNumber")],["numSubEntries",e.lookup("Uint32")],["inflationDest",e.option(e.lookup("AccountId"))],["flags",e.lookup("Uint32")],["homeDomain",e.lookup("String32")],["thresholds",e.lookup("Thresholds")],["signers",e.varArray(e.lookup("Signer"),20)],["ext",e.lookup("AccountEntryExt")]]),e.enum("TrustLineFlags",{authorizedFlag:1}),e.const("MASK_TRUSTLINE_FLAGS",1),e.union("TrustLineEntryV1Ext",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("TrustLineEntryV1",[["liabilities",e.lookup("Liabilities")],["ext",e.lookup("TrustLineEntryV1Ext")]]),e.union("TrustLineEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()],[1,"v1"]],arms:{v1:e.lookup("TrustLineEntryV1")}}),e.struct("TrustLineEntry",[["accountId",e.lookup("AccountId")],["asset",e.lookup("Asset")],["balance",e.lookup("Int64")],["limit",e.lookup("Int64")],["flags",e.lookup("Uint32")],["ext",e.lookup("TrustLineEntryExt")]]),e.enum("OfferEntryFlags",{passiveFlag:1}),e.const("MASK_OFFERENTRY_FLAGS",1),e.union("OfferEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("OfferEntry",[["sellerId",e.lookup("AccountId")],["offerId",e.lookup("Uint64")],["selling",e.lookup("Asset")],["buying",e.lookup("Asset")],["amount",e.lookup("Int64")],["price",e.lookup("Price")],["flags",e.lookup("Uint32")],["ext",e.lookup("OfferEntryExt")]]),e.union("DataEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("DataEntry",[["accountId",e.lookup("AccountId")],["dataName",e.lookup("String64")],["dataValue",e.lookup("DataValue")],["ext",e.lookup("DataEntryExt")]]),e.union("LedgerEntryData",{switchOn:e.lookup("LedgerEntryType"),switchName:"type",switches:[["account","account"],["trustline","trustLine"],["offer","offer"],["datum","data"]],arms:{account:e.lookup("AccountEntry"),trustLine:e.lookup("TrustLineEntry"),offer:e.lookup("OfferEntry"),data:e.lookup("DataEntry")}}),e.union("LedgerEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("LedgerEntry",[["lastModifiedLedgerSeq",e.lookup("Uint32")],["data",e.lookup("LedgerEntryData")],["ext",e.lookup("LedgerEntryExt")]]),e.enum("EnvelopeType",{envelopeTypeScp:1,envelopeTypeTx:2,envelopeTypeAuth:3}),e.typedef("UpgradeType",e.varOpaque(128)),e.union("StellarValueExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("StellarValue",[["txSetHash",e.lookup("Hash")],["closeTime",e.lookup("Uint64")],["upgrades",e.varArray(e.lookup("UpgradeType"),6)],["ext",e.lookup("StellarValueExt")]]),e.union("LedgerHeaderExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("LedgerHeader",[["ledgerVersion",e.lookup("Uint32")],["previousLedgerHash",e.lookup("Hash")],["scpValue",e.lookup("StellarValue")],["txSetResultHash",e.lookup("Hash")],["bucketListHash",e.lookup("Hash")],["ledgerSeq",e.lookup("Uint32")],["totalCoins",e.lookup("Int64")],["feePool",e.lookup("Int64")],["inflationSeq",e.lookup("Uint32")],["idPool",e.lookup("Uint64")],["baseFee",e.lookup("Uint32")],["baseReserve",e.lookup("Uint32")],["maxTxSetSize",e.lookup("Uint32")],["skipList",e.array(e.lookup("Hash"),4)],["ext",e.lookup("LedgerHeaderExt")]]),e.enum("LedgerUpgradeType",{ledgerUpgradeVersion:1,ledgerUpgradeBaseFee:2,ledgerUpgradeMaxTxSetSize:3,ledgerUpgradeBaseReserve:4}),e.union("LedgerUpgrade",{switchOn:e.lookup("LedgerUpgradeType"),switchName:"type",switches:[["ledgerUpgradeVersion","newLedgerVersion"],["ledgerUpgradeBaseFee","newBaseFee"],["ledgerUpgradeMaxTxSetSize","newMaxTxSetSize"],["ledgerUpgradeBaseReserve","newBaseReserve"]],arms:{newLedgerVersion:e.lookup("Uint32"),newBaseFee:e.lookup("Uint32"),newMaxTxSetSize:e.lookup("Uint32"),newBaseReserve:e.lookup("Uint32")}}),e.struct("LedgerKeyAccount",[["accountId",e.lookup("AccountId")]]),e.struct("LedgerKeyTrustLine",[["accountId",e.lookup("AccountId")],["asset",e.lookup("Asset")]]),e.struct("LedgerKeyOffer",[["sellerId",e.lookup("AccountId")],["offerId",e.lookup("Uint64")]]),e.struct("LedgerKeyData",[["accountId",e.lookup("AccountId")],["dataName",e.lookup("String64")]]),e.union("LedgerKey",{switchOn:e.lookup("LedgerEntryType"),switchName:"type",switches:[["account","account"],["trustline","trustLine"],["offer","offer"],["datum","data"]],arms:{account:e.lookup("LedgerKeyAccount"),trustLine:e.lookup("LedgerKeyTrustLine"),offer:e.lookup("LedgerKeyOffer"),data:e.lookup("LedgerKeyData")}}),e.enum("BucketEntryType",{liveentry:0,deadentry:1}),e.union("BucketEntry",{switchOn:e.lookup("BucketEntryType"),switchName:"type",switches:[["liveentry","liveEntry"],["deadentry","deadEntry"]],arms:{liveEntry:e.lookup("LedgerEntry"),deadEntry:e.lookup("LedgerKey")}}),e.struct("TransactionSet",[["previousLedgerHash",e.lookup("Hash")],["txes",e.varArray(e.lookup("TransactionEnvelope"),2147483647)]]),e.struct("TransactionResultPair",[["transactionHash",e.lookup("Hash")],["result",e.lookup("TransactionResult")]]),e.struct("TransactionResultSet",[["results",e.varArray(e.lookup("TransactionResultPair"),2147483647)]]),e.union("TransactionHistoryEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("TransactionHistoryEntry",[["ledgerSeq",e.lookup("Uint32")],["txSet",e.lookup("TransactionSet")],["ext",e.lookup("TransactionHistoryEntryExt")]]),e.union("TransactionHistoryResultEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("TransactionHistoryResultEntry",[["ledgerSeq",e.lookup("Uint32")],["txResultSet",e.lookup("TransactionResultSet")],["ext",e.lookup("TransactionHistoryResultEntryExt")]]),e.union("LedgerHeaderHistoryEntryExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("LedgerHeaderHistoryEntry",[["hash",e.lookup("Hash")],["header",e.lookup("LedgerHeader")],["ext",e.lookup("LedgerHeaderHistoryEntryExt")]]),e.struct("LedgerScpMessages",[["ledgerSeq",e.lookup("Uint32")],["messages",e.varArray(e.lookup("ScpEnvelope"),2147483647)]]),e.struct("ScpHistoryEntryV0",[["quorumSets",e.varArray(e.lookup("ScpQuorumSet"),2147483647)],["ledgerMessages",e.lookup("LedgerScpMessages")]]),e.union("ScpHistoryEntry",{switchOn:e.int(),switchName:"v",switches:[[0,"v0"]],arms:{v0:e.lookup("ScpHistoryEntryV0")}}),e.enum("LedgerEntryChangeType",{ledgerEntryCreated:0,ledgerEntryUpdated:1,ledgerEntryRemoved:2,ledgerEntryState:3}),e.union("LedgerEntryChange",{switchOn:e.lookup("LedgerEntryChangeType"),switchName:"type",switches:[["ledgerEntryCreated","created"],["ledgerEntryUpdated","updated"],["ledgerEntryRemoved","removed"],["ledgerEntryState","state"]],arms:{created:e.lookup("LedgerEntry"),updated:e.lookup("LedgerEntry"),removed:e.lookup("LedgerKey"),state:e.lookup("LedgerEntry")}}),e.typedef("LedgerEntryChanges",e.varArray(e.lookup("LedgerEntryChange"),2147483647)),e.struct("OperationMeta",[["changes",e.lookup("LedgerEntryChanges")]]),e.struct("TransactionMetaV1",[["txChanges",e.lookup("LedgerEntryChanges")],["operations",e.varArray(e.lookup("OperationMeta"),2147483647)]]),e.union("TransactionMeta",{switchOn:e.int(),switchName:"v",switches:[[0,"operations"],[1,"v1"]],arms:{operations:e.varArray(e.lookup("OperationMeta"),2147483647),v1:e.lookup("TransactionMetaV1")}}),e.enum("ErrorCode",{errMisc:0,errDatum:1,errConf:2,errAuth:3,errLoad:4}),e.struct("Error",[["code",e.lookup("ErrorCode")],["msg",e.string(100)]]),e.struct("AuthCert",[["pubkey",e.lookup("Curve25519Public")],["expiration",e.lookup("Uint64")],["sig",e.lookup("Signature")]]),e.struct("Hello",[["ledgerVersion",e.lookup("Uint32")],["overlayVersion",e.lookup("Uint32")],["overlayMinVersion",e.lookup("Uint32")],["networkId",e.lookup("Hash")],["versionStr",e.string(100)],["listeningPort",e.int()],["peerId",e.lookup("NodeId")],["cert",e.lookup("AuthCert")],["nonce",e.lookup("Uint256")]]),e.struct("Auth",[["unused",e.int()]]),e.enum("IpAddrType",{iPv4:0,iPv6:1}),e.union("PeerAddressIp",{switchOn:e.lookup("IpAddrType"),switchName:"type",switches:[["iPv4","ipv4"],["iPv6","ipv6"]],arms:{ipv4:e.opaque(4),ipv6:e.opaque(16)}}),e.struct("PeerAddress",[["ip",e.lookup("PeerAddressIp")],["port",e.lookup("Uint32")],["numFailures",e.lookup("Uint32")]]),e.enum("MessageType",{errorMsg:0,auth:2,dontHave:3,getPeer:4,peer:5,getTxSet:6,txSet:7,transaction:8,getScpQuorumset:9,scpQuorumset:10,scpMessage:11,getScpState:12,hello:13}),e.struct("DontHave",[["type",e.lookup("MessageType")],["reqHash",e.lookup("Uint256")]]),e.union("StellarMessage",{switchOn:e.lookup("MessageType"),switchName:"type",switches:[["errorMsg","error"],["hello","hello"],["auth","auth"],["dontHave","dontHave"],["getPeer",e.void()],["peer","peers"],["getTxSet","txSetHash"],["txSet","txSet"],["transaction","transaction"],["getScpQuorumset","qSetHash"],["scpQuorumset","qSet"],["scpMessage","envelope"],["getScpState","getScpLedgerSeq"]],arms:{error:e.lookup("Error"),hello:e.lookup("Hello"),auth:e.lookup("Auth"),dontHave:e.lookup("DontHave"),peers:e.varArray(e.lookup("PeerAddress"),100),txSetHash:e.lookup("Uint256"),txSet:e.lookup("TransactionSet"),transaction:e.lookup("TransactionEnvelope"),qSetHash:e.lookup("Uint256"),qSet:e.lookup("ScpQuorumSet"),envelope:e.lookup("StellarMessage"),getScpLedgerSeq:e.lookup("Uint32")}}),e.struct("AuthenticatedMessageV0",[["sequence",e.lookup("Uint64")],["message",e.lookup("StellarMessage")],["mac",e.lookup("HmacSha256Mac")]]),e.union("AuthenticatedMessage",{switchOn:e.lookup("Uint32"),switchName:"v",switches:[[0,"v0"]],arms:{v0:e.lookup("AuthenticatedMessageV0")}}),e.struct("DecoratedSignature",[["hint",e.lookup("SignatureHint")],["signature",e.lookup("Signature")]]),e.enum("OperationType",{createAccount:0,payment:1,pathPayment:2,manageOffer:3,createPassiveOffer:4,setOption:5,changeTrust:6,allowTrust:7,accountMerge:8,inflation:9,manageDatum:10,bumpSequence:11}),e.struct("CreateAccountOp",[["destination",e.lookup("AccountId")],["startingBalance",e.lookup("Int64")]]),e.struct("PaymentOp",[["destination",e.lookup("AccountId")],["asset",e.lookup("Asset")],["amount",e.lookup("Int64")]]),e.struct("PathPaymentOp",[["sendAsset",e.lookup("Asset")],["sendMax",e.lookup("Int64")],["destination",e.lookup("AccountId")],["destAsset",e.lookup("Asset")],["destAmount",e.lookup("Int64")],["path",e.varArray(e.lookup("Asset"),5)]]),e.struct("ManageOfferOp",[["selling",e.lookup("Asset")],["buying",e.lookup("Asset")],["amount",e.lookup("Int64")],["price",e.lookup("Price")],["offerId",e.lookup("Uint64")]]),e.struct("CreatePassiveOfferOp",[["selling",e.lookup("Asset")],["buying",e.lookup("Asset")],["amount",e.lookup("Int64")],["price",e.lookup("Price")]]),e.struct("SetOptionsOp",[["inflationDest",e.option(e.lookup("AccountId"))],["clearFlags",e.option(e.lookup("Uint32"))],["setFlags",e.option(e.lookup("Uint32"))],["masterWeight",e.option(e.lookup("Uint32"))],["lowThreshold",e.option(e.lookup("Uint32"))],["medThreshold",e.option(e.lookup("Uint32"))],["highThreshold",e.option(e.lookup("Uint32"))],["homeDomain",e.option(e.lookup("String32"))],["signer",e.option(e.lookup("Signer"))]]),e.struct("ChangeTrustOp",[["line",e.lookup("Asset")],["limit",e.lookup("Int64")]]),e.union("AllowTrustOpAsset",{switchOn:e.lookup("AssetType"),switchName:"type",switches:[["assetTypeCreditAlphanum4","assetCode4"],["assetTypeCreditAlphanum12","assetCode12"]],arms:{assetCode4:e.opaque(4),assetCode12:e.opaque(12)}}),e.struct("AllowTrustOp",[["trustor",e.lookup("AccountId")],["asset",e.lookup("AllowTrustOpAsset")],["authorize",e.bool()]]),e.struct("ManageDataOp",[["dataName",e.lookup("String64")],["dataValue",e.option(e.lookup("DataValue"))]]),e.struct("BumpSequenceOp",[["bumpTo",e.lookup("SequenceNumber")]]),e.union("OperationBody",{switchOn:e.lookup("OperationType"),switchName:"type",switches:[["createAccount","createAccountOp"],["payment","paymentOp"],["pathPayment","pathPaymentOp"],["manageOffer","manageOfferOp"],["createPassiveOffer","createPassiveOfferOp"],["setOption","setOptionsOp"],["changeTrust","changeTrustOp"],["allowTrust","allowTrustOp"],["accountMerge","destination"],["inflation",e.void()],["manageDatum","manageDataOp"],["bumpSequence","bumpSequenceOp"]],arms:{createAccountOp:e.lookup("CreateAccountOp"),paymentOp:e.lookup("PaymentOp"),pathPaymentOp:e.lookup("PathPaymentOp"),manageOfferOp:e.lookup("ManageOfferOp"),createPassiveOfferOp:e.lookup("CreatePassiveOfferOp"),setOptionsOp:e.lookup("SetOptionsOp"),changeTrustOp:e.lookup("ChangeTrustOp"),allowTrustOp:e.lookup("AllowTrustOp"),destination:e.lookup("AccountId"),manageDataOp:e.lookup("ManageDataOp"),bumpSequenceOp:e.lookup("BumpSequenceOp")}}),e.struct("Operation",[["sourceAccount",e.option(e.lookup("AccountId"))],["body",e.lookup("OperationBody")]]),e.enum("MemoType",{memoNone:0,memoText:1,memoId:2,memoHash:3,memoReturn:4}),e.union("Memo",{switchOn:e.lookup("MemoType"),switchName:"type",switches:[["memoNone",e.void()],["memoText","text"],["memoId","id"],["memoHash","hash"],["memoReturn","retHash"]],arms:{text:e.string(28),id:e.lookup("Uint64"),hash:e.lookup("Hash"),retHash:e.lookup("Hash")}}),e.struct("TimeBounds",[["minTime",e.lookup("Uint64")],["maxTime",e.lookup("Uint64")]]),e.union("TransactionExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("Transaction",[["sourceAccount",e.lookup("AccountId")],["fee",e.lookup("Uint32")],["seqNum",e.lookup("SequenceNumber")],["timeBounds",e.option(e.lookup("TimeBounds"))],["memo",e.lookup("Memo")],["operations",e.varArray(e.lookup("Operation"),100)],["ext",e.lookup("TransactionExt")]]),e.union("TransactionSignaturePayloadTaggedTransaction",{switchOn:e.lookup("EnvelopeType"),switchName:"type",switches:[["envelopeTypeTx","tx"]],arms:{tx:e.lookup("Transaction")}}),e.struct("TransactionSignaturePayload",[["networkId",e.lookup("Hash")],["taggedTransaction",e.lookup("TransactionSignaturePayloadTaggedTransaction")]]),e.struct("TransactionEnvelope",[["tx",e.lookup("Transaction")],["signatures",e.varArray(e.lookup("DecoratedSignature"),20)]]),e.struct("ClaimOfferAtom",[["sellerId",e.lookup("AccountId")],["offerId",e.lookup("Uint64")],["assetSold",e.lookup("Asset")],["amountSold",e.lookup("Int64")],["assetBought",e.lookup("Asset")],["amountBought",e.lookup("Int64")]]),e.enum("CreateAccountResultCode",{createAccountSuccess:0,createAccountMalformed:-1,createAccountUnderfunded:-2,createAccountLowReserve:-3,createAccountAlreadyExist:-4}),e.union("CreateAccountResult",{switchOn:e.lookup("CreateAccountResultCode"),switchName:"code",switches:[["createAccountSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("PaymentResultCode",{paymentSuccess:0,paymentMalformed:-1,paymentUnderfunded:-2,paymentSrcNoTrust:-3,paymentSrcNotAuthorized:-4,paymentNoDestination:-5,paymentNoTrust:-6,paymentNotAuthorized:-7,paymentLineFull:-8,paymentNoIssuer:-9}),e.union("PaymentResult",{switchOn:e.lookup("PaymentResultCode"),switchName:"code",switches:[["paymentSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("PathPaymentResultCode",{pathPaymentSuccess:0,pathPaymentMalformed:-1,pathPaymentUnderfunded:-2,pathPaymentSrcNoTrust:-3,pathPaymentSrcNotAuthorized:-4,pathPaymentNoDestination:-5,pathPaymentNoTrust:-6,pathPaymentNotAuthorized:-7,pathPaymentLineFull:-8,pathPaymentNoIssuer:-9,pathPaymentTooFewOffer:-10,pathPaymentOfferCrossSelf:-11,pathPaymentOverSendmax:-12}),e.struct("SimplePaymentResult",[["destination",e.lookup("AccountId")],["asset",e.lookup("Asset")],["amount",e.lookup("Int64")]]),e.struct("PathPaymentResultSuccess",[["offers",e.varArray(e.lookup("ClaimOfferAtom"),2147483647)],["last",e.lookup("SimplePaymentResult")]]),e.union("PathPaymentResult",{switchOn:e.lookup("PathPaymentResultCode"),switchName:"code",switches:[["pathPaymentSuccess","success"],["pathPaymentNoIssuer","noIssuer"]],arms:{success:e.lookup("PathPaymentResultSuccess"),noIssuer:e.lookup("Asset")},defaultArm:e.void()}),e.enum("ManageOfferResultCode",{manageOfferSuccess:0,manageOfferMalformed:-1,manageOfferSellNoTrust:-2,manageOfferBuyNoTrust:-3,manageOfferSellNotAuthorized:-4,manageOfferBuyNotAuthorized:-5,manageOfferLineFull:-6,manageOfferUnderfunded:-7,manageOfferCrossSelf:-8,manageOfferSellNoIssuer:-9,manageOfferBuyNoIssuer:-10,manageOfferNotFound:-11,manageOfferLowReserve:-12}),e.enum("ManageOfferEffect",{manageOfferCreated:0,manageOfferUpdated:1,manageOfferDeleted:2}),e.union("ManageOfferSuccessResultOffer",{switchOn:e.lookup("ManageOfferEffect"),switchName:"effect",switches:[["manageOfferCreated","offer"],["manageOfferUpdated","offer"]],arms:{offer:e.lookup("OfferEntry")},defaultArm:e.void()}),e.struct("ManageOfferSuccessResult",[["offersClaimed",e.varArray(e.lookup("ClaimOfferAtom"),2147483647)],["offer",e.lookup("ManageOfferSuccessResultOffer")]]),e.union("ManageOfferResult",{switchOn:e.lookup("ManageOfferResultCode"),switchName:"code",switches:[["manageOfferSuccess","success"]],arms:{success:e.lookup("ManageOfferSuccessResult")},defaultArm:e.void()}),e.enum("SetOptionsResultCode",{setOptionsSuccess:0,setOptionsLowReserve:-1,setOptionsTooManySigner:-2,setOptionsBadFlag:-3,setOptionsInvalidInflation:-4,setOptionsCantChange:-5,setOptionsUnknownFlag:-6,setOptionsThresholdOutOfRange:-7,setOptionsBadSigner:-8,setOptionsInvalidHomeDomain:-9}),e.union("SetOptionsResult",{switchOn:e.lookup("SetOptionsResultCode"),switchName:"code",switches:[["setOptionsSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("ChangeTrustResultCode",{changeTrustSuccess:0,changeTrustMalformed:-1,changeTrustNoIssuer:-2,changeTrustInvalidLimit:-3,changeTrustLowReserve:-4,changeTrustSelfNotAllowed:-5}),e.union("ChangeTrustResult",{switchOn:e.lookup("ChangeTrustResultCode"),switchName:"code",switches:[["changeTrustSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("AllowTrustResultCode",{allowTrustSuccess:0,allowTrustMalformed:-1,allowTrustNoTrustLine:-2,allowTrustTrustNotRequired:-3,allowTrustCantRevoke:-4,allowTrustSelfNotAllowed:-5}),e.union("AllowTrustResult",{switchOn:e.lookup("AllowTrustResultCode"),switchName:"code",switches:[["allowTrustSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("AccountMergeResultCode",{accountMergeSuccess:0,accountMergeMalformed:-1,accountMergeNoAccount:-2,accountMergeImmutableSet:-3,accountMergeHasSubEntry:-4,accountMergeSeqnumTooFar:-5,accountMergeDestFull:-6}),e.union("AccountMergeResult",{switchOn:e.lookup("AccountMergeResultCode"),switchName:"code",switches:[["accountMergeSuccess","sourceAccountBalance"]],arms:{sourceAccountBalance:e.lookup("Int64")},defaultArm:e.void()}),e.enum("InflationResultCode",{inflationSuccess:0,inflationNotTime:-1}),e.struct("InflationPayout",[["destination",e.lookup("AccountId")],["amount",e.lookup("Int64")]]),e.union("InflationResult",{switchOn:e.lookup("InflationResultCode"),switchName:"code",switches:[["inflationSuccess","payouts"]],arms:{payouts:e.varArray(e.lookup("InflationPayout"),2147483647)},defaultArm:e.void()}),e.enum("ManageDataResultCode",{manageDataSuccess:0,manageDataNotSupportedYet:-1,manageDataNameNotFound:-2,manageDataLowReserve:-3,manageDataInvalidName:-4}),e.union("ManageDataResult",{switchOn:e.lookup("ManageDataResultCode"),switchName:"code",switches:[["manageDataSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("BumpSequenceResultCode",{bumpSequenceSuccess:0,bumpSequenceBadSeq:-1}),e.union("BumpSequenceResult",{switchOn:e.lookup("BumpSequenceResultCode"),switchName:"code",switches:[["bumpSequenceSuccess",e.void()]],arms:{},defaultArm:e.void()}),e.enum("OperationResultCode",{opInner:0,opBadAuth:-1,opNoAccount:-2,opNotSupported:-3}),e.union("OperationResultTr",{switchOn:e.lookup("OperationType"),switchName:"type",switches:[["createAccount","createAccountResult"],["payment","paymentResult"],["pathPayment","pathPaymentResult"],["manageOffer","manageOfferResult"],["createPassiveOffer","createPassiveOfferResult"],["setOption","setOptionsResult"],["changeTrust","changeTrustResult"],["allowTrust","allowTrustResult"],["accountMerge","accountMergeResult"],["inflation","inflationResult"],["manageDatum","manageDataResult"],["bumpSequence","bumpSeqResult"]],arms:{createAccountResult:e.lookup("CreateAccountResult"),paymentResult:e.lookup("PaymentResult"),pathPaymentResult:e.lookup("PathPaymentResult"),manageOfferResult:e.lookup("ManageOfferResult"),createPassiveOfferResult:e.lookup("ManageOfferResult"),setOptionsResult:e.lookup("SetOptionsResult"),changeTrustResult:e.lookup("ChangeTrustResult"),allowTrustResult:e.lookup("AllowTrustResult"),accountMergeResult:e.lookup("AccountMergeResult"),inflationResult:e.lookup("InflationResult"),manageDataResult:e.lookup("ManageDataResult"),bumpSeqResult:e.lookup("BumpSequenceResult")}}),e.union("OperationResult",{switchOn:e.lookup("OperationResultCode"),switchName:"code",switches:[["opInner","tr"]],arms:{tr:e.lookup("OperationResultTr")},defaultArm:e.void()}),e.enum("TransactionResultCode",{txSuccess:0,txFailed:-1,txTooEarly:-2,txTooLate:-3,txMissingOperation:-4,txBadSeq:-5,txBadAuth:-6,txInsufficientBalance:-7,txNoAccount:-8,txInsufficientFee:-9,txBadAuthExtra:-10,txInternalError:-11}),e.union("TransactionResultResult",{switchOn:e.lookup("TransactionResultCode"),switchName:"code",switches:[["txSuccess","results"],["txFailed","results"]],arms:{results:e.varArray(e.lookup("OperationResult"),2147483647)},defaultArm:e.void()}),e.union("TransactionResultExt",{switchOn:e.int(),switchName:"v",switches:[[0,e.void()]],arms:{}}),e.struct("TransactionResult",[["feeCharged",e.lookup("Int64")],["result",e.lookup("TransactionResultResult")],["ext",e.lookup("TransactionResultExt")]]),e.typedef("Hash",e.opaque(32)),e.typedef("Uint256",e.opaque(32)),e.typedef("Uint32",e.uint()),e.typedef("Int32",e.int()),e.typedef("Uint64",e.uhyper()),e.typedef("Int64",e.hyper()),e.enum("CryptoKeyType",{keyTypeEd25519:0,keyTypePreAuthTx:1,keyTypeHashX:2}),e.enum("PublicKeyType",{publicKeyTypeEd25519:0}),e.enum("SignerKeyType",{signerKeyTypeEd25519:0,signerKeyTypePreAuthTx:1,signerKeyTypeHashX:2}),e.union("PublicKey",{switchOn:e.lookup("PublicKeyType"),switchName:"type",switches:[["publicKeyTypeEd25519","ed25519"]],arms:{ed25519:e.lookup("Uint256")}}),e.union("SignerKey",{switchOn:e.lookup("SignerKeyType"),switchName:"type",switches:[["signerKeyTypeEd25519","ed25519"],["signerKeyTypePreAuthTx","preAuthTx"],["signerKeyTypeHashX","hashX"]],arms:{ed25519:e.lookup("Uint256"),preAuthTx:e.lookup("Uint256"),hashX:e.lookup("Uint256")}}),e.typedef("Signature",e.varOpaque(64)),e.typedef("SignatureHint",e.opaque(4)),e.typedef("NodeId",e.lookup("PublicKey")),e.struct("Curve25519Secret",[["key",e.opaque(32)]]),e.struct("Curve25519Public",[["key",e.opaque(32)]]),e.struct("HmacSha256Key",[["key",e.opaque(32)]]),e.struct("HmacSha256Mac",[["mac",e.opaque(32)]])})
e.exports=i},function(e,t,n){"use strict";(function(t){var r=function(e){return e&&e.__esModule?e.default:e}
e.exports=function(e){o(e,u),a(e)&&o(e.prototype,c)}
var i=n(310).Cursor,o=r(n(336)),a=r(n(86)),s=Math.pow(2,16),u={toXDR:function(e){var t=new i(s)
this.write(e,t)
var n=t.tell()
return t.rewind(),t.slice(n).buffer()},fromXDR:function(e){var n=void 0===arguments[1]?"raw":arguments[1],r=void 0
switch(n){case"raw":r=e
break
case"hex":r=t.from(e,"hex")
break
case"base64":r=t.from(e,"base64")
break
default:throw new Error("Invalid format "+n+', must be "raw", "hex", "base64"')}var o=new i(r)
return this.read(o)}},c={toXDR:function(){var e=void 0===arguments[0]?"raw":arguments[0],t=this.constructor.toXDR(this)
switch(e){case"raw":return t
case"hex":return t.toString("hex")
case"base64":return t.toString("base64")
default:throw new Error("Invalid format "+e+', must be "raw", "hex", "base64"')}}}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
e.exports=function(e){var t=[]
return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3]
if(!r)return n
if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})
return[n].concat(o).concat([i]).join("\n")}var a
return[n].join("\n")}(t,e)
return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]])
for(var r={},i=0;i<this.length;i++){var o=this[i][0]
null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i]
null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=function(e){return void 0===e}},function(e,t,n){"use strict"
var r=t
r.version=n(452).version,r.utils=n(453),r.rand=n(197),r.curve=n(77),r.curves=n(458),r.ec=n(466),r.eddsa=n(470)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CallBuilder=void 0
var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(36),a=n(139),s=(r=a)&&r.__esModule?r:{default:r}
var u=n(40),c=n(283),f=n(27),l="undefined"==typeof window?n(284):window.EventSource,h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.filter=[],this.originalSegments=this.url.segment()||[]}return i(e,[{key:"checkFilter",value:function(){if(this.filter.length>=2)throw new o.BadRequestError("Too many filters specified",this.filter)
if(1===this.filter.length){var e=this.originalSegments.concat(this.filter[0])
this.url.segment(e)}}},{key:"call",value:function(){var e=this
return this.checkFilter(),this._sendNormalRequest(this.url).then(function(t){return e._parseResponse(t)})}},{key:"stream",value:function(e){var t=this
this.checkFilter()
var n=void 0,r=void 0,i=function(){r=setTimeout(function(){n.close(),n=o()},e.reconnectTimeout||15e3)},o=function(){try{n=new l(t.url.toString())}catch(t){return e.onerror&&(e.onerror(t),e.onerror("EventSource not supported")),!1}return i(),n.onmessage=function(n){var o=n.data?t._parseRecord(JSON.parse(n.data)):n
o.paging_token&&t.url.setQuery("cursor",o.paging_token),clearTimeout(r),i(),e.onmessage(o)},n.onerror=function(t){e.onerror&&e.onerror(t)},n}
return o(),function(){clearTimeout(r),n.close()}}},{key:"_requestFnForLink",value:function(e){var t=this
return function(n){var r=void 0
if(e.templated){var i=c(e.href)
r=u(i.expand(n||{}))}else r=u(e.href)
return t._sendNormalRequest(r).then(function(e){return t._parseResponse(e)})}}},{key:"_parseRecord",value:function(e){var t=this
return e._links?((0,s.default)(e._links,function(n,r){void 0!==e[r]&&(e[r+"_attr"]=e[r]),e[r]=t._requestFnForLink(n)}),e):e}},{key:"_sendNormalRequest",value:function(e){return""===e.authority()&&(e=e.authority(this.url.authority())),""===e.protocol()&&(e=e.protocol(this.url.protocol())),e.setQuery("c",Math.random()),f.get(e.toString()).then(function(e){return e.data}).catch(this._handleNetworkError)}},{key:"_parseResponse",value:function(e){return e._embedded&&e._embedded.records?this._toCollectionPage(e):this._parseRecord(e)}},{key:"_toCollectionPage",value:function(e){for(var t=this,n=0;n<e._embedded.records.length;n++)e._embedded.records[n]=this._parseRecord(e._embedded.records[n])
return{records:e._embedded.records,next:function(){return t._sendNormalRequest(u(e._links.next.href)).then(function(e){return t._toCollectionPage(e)})},prev:function(){return t._sendNormalRequest(u(e._links.prev.href)).then(function(e){return t._toCollectionPage(e)})}}}},{key:"_handleNetworkError",value:function(e){if(!e.response||!e.response.status)return Promise.reject(new Error(e))
switch(e.response.status){case 404:return Promise.reject(new o.NotFoundError(e.response.statusText,e.response.data))
default:return Promise.reject(new o.NetworkError(e.response.statusText,e.response.data))}}},{key:"cursor",value:function(e){return this.url.setQuery("cursor",e),this}},{key:"limit",value:function(e){return this.url.setQuery("limit",e),this}},{key:"order",value:function(e){return this.url.setQuery("order",e),this}}]),e}()
t.CallBuilder=h},function(e,t){var n,r,i=e.exports={}
function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0)
if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0)
try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}()
var u,c=[],f=!1,l=-1
function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=s(h)
f=!0
for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run()
l=-1,t=c.length}u=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e)
if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e)
try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
c.push(new p(e,t)),1!==c.length||f||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={}
return function(e,n){if("function"==typeof e)return e()
if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n)
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,c=0,f=[],l=n(520)
function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id]
if(i){i.refs++
for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a])
for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{var s=[]
for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t))
o[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]}
r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=s(e.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var r=f[f.length-1]
if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t)
else if("bottom"===e.insertAt)n.appendChild(t)
else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var i=s(e.insertAt.before,n)
n.insertBefore(t,i)}}function v(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)
var t=f.indexOf(e)
t>=0&&f.splice(t,1)}function b(e){var t=document.createElement("style")
if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0
return n.nc}()
r&&(e.attrs.nonce=r)}return g(t,e.attrs),p(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,i,o
if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){}
e.css=o}if(t.singleton){var a=c++
n=u||(u=b(t)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=l(r))
i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
var a=new Blob([r],{type:"text/css"}),s=e.href
e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media
r&&e.setAttribute("media",r)
if(e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)})
return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom")
var n=d(e,t)
return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&h(d(e,t),t)
for(i=0;i<r.length;i++){var s
if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]()
delete o[s.id]}}}}
var y,_=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")})
function w(e,t,n,r){var i=n?"":r.css
if(e.styleSheet)e.styleSheet.cssText=_(t,i)
else{var o=document.createTextNode(i),a=e.childNodes
a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t,n){var r=n(25),i=n(7),o=n(21),a="[object String]"
e.exports=function(e){return"string"==typeof e||!i(e)&&o(e)&&r(e)==a}},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a,s=n(113).Network,u=n(172),c=u.sign,f=u.verify,l=(a=n(379))&&a.__esModule?a:{default:a},h=n(18).StrKey,d=r(n(8)),p=r(n(112))
t.Keypair=function(){function t(n){if(o(this,t),"ed25519"!=n.type)throw new Error("Invalid keys type")
if(this.type=n.type,n.secretKey){if(n.secretKey=e.from(n.secretKey),32!=n.secretKey.length)throw new Error("secretKey length is invalid")
var r=new Uint8Array(n.secretKey),i=p.sign.keyPair.fromSeed(r)
if(this._secretSeed=n.secretKey,this._secretKey=e.from(i.secretKey),this._publicKey=e.from(i.publicKey),n.publicKey&&!this._publicKey.equals(e.from(n.publicKey)))throw new Error("secretKey does not match publicKey")}else if(this._publicKey=e.from(n.publicKey),32!=this._publicKey.length)throw new Error("publicKey length is invalid")}var n,r,a,u
return i(t,{xdrAccountId:{value:function(){return new d.AccountId.publicKeyTypeEd25519(this._publicKey)}},xdrPublicKey:{value:function(){return new d.PublicKey.publicKeyTypeEd25519(this._publicKey)}},rawPublicKey:{value:function(){return this._publicKey}},signatureHint:{value:function(){var e=this.xdrAccountId().toXDR()
return e.slice(e.length-4)}},publicKey:{value:function(){return h.encodeEd25519PublicKey(this._publicKey)}},secret:{value:function(){if(!this._secretSeed)throw new Error("no secret key available")
if("ed25519"==this.type)return h.encodeEd25519SecretSeed(this._secretSeed)
throw new Error("Invalid Keypair type")}},rawSecretKey:{value:function(){return this._secretSeed}},canSign:{value:function(){return!!this._secretKey}},sign:{value:(a=function(e){if(!this.canSign())throw new Error("cannot sign: no secret key available")
return c(e,this._secretKey)},u=function(e){return a.apply(this,arguments)},u.toString=function(){return a.toString()},u)},verify:{value:(n=function(e,t){return f(e,t,this._publicKey)},r=function(e,t){return n.apply(this,arguments)},r.toString=function(){return n.toString()},r)},signDecorated:{value:function(e){var t=this.sign(e),n=this.signatureHint()
return new d.DecoratedSignature({hint:n,signature:t})}}},{fromSecret:{value:function(e){var t=h.decodeEd25519SecretSeed(e)
return this.fromRawEd25519Seed(t)}},fromBase58Seed:{value:function(e){var t=l.decodeBase58Check("seed",e)
return this.fromRawEd25519Seed(t)}},fromRawEd25519Seed:{value:function(e){return new this({type:"ed25519",secretKey:e})}},master:{value:function(){if(null===s.current())throw new Error("No network selected. Use `Network.use`, `Network.usePublicNetwork` or `Network.useTestNetwork` helper methods to select network.")
return this.fromRawEd25519Seed(s.current().networkId())}},fromPublicKey:{value:function(e){if(32!==(e=h.decodeEd25519PublicKey(e)).length)throw new Error("Invalid Stellar public key")
return new this({type:"ed25519",publicKey:e})}},random:{value:function(){var e=p.randomBytes(32)
return this.fromRawEd25519Seed(e)}}}),t}()}).call(this,n(1).Buffer)},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
t.decodeCheck=p,t.encodeCheck=v,Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(174)),s=r(n(381)),u=r(n(11)),c=r(n(110)),f=r(n(16)),l=n(173).verifyChecksum,h={ed25519PublicKey:48,ed25519SecretSeed:144,preAuthTx:152,sha256Hash:184}
t.StrKey=function(){function e(){o(this,e)}return i(e,null,{encodeEd25519PublicKey:{value:function(e){return v("ed25519PublicKey",e)}},decodeEd25519PublicKey:{value:function(e){return p("ed25519PublicKey",e)}},isValidEd25519PublicKey:{value:function(e){return d("ed25519PublicKey",e)}},encodeEd25519SecretSeed:{value:function(e){return v("ed25519SecretSeed",e)}},decodeEd25519SecretSeed:{value:function(e){return p("ed25519SecretSeed",e)}},isValidEd25519SecretSeed:{value:function(e){return d("ed25519SecretSeed",e)}},encodePreAuthTx:{value:function(e){return v("preAuthTx",e)}},decodePreAuthTx:{value:function(e){return p("preAuthTx",e)}},encodeSha256Hash:{value:function(e){return v("sha256Hash",e)}},decodeSha256Hash:{value:function(e){return p("sha256Hash",e)}}}),e}()
function d(e,t){if(t&&56!=t.length)return!1
try{if(32!==p(e,t).length)return!1}catch(e){return!1}return!0}function p(t,n){if(!f(n))throw new TypeError("encoded argument must be of type String")
var r=a.decode(n),i=r[0],o=r.slice(0,-2),s=o.slice(1),c=r.slice(-2)
if(n!=a.encode(r))throw new Error("invalid encoded string")
var d=h[t]
if(u(d))throw new Error(t+' is not a valid version byte name.  expected one of "accountId" or "seed"')
if(i!==d)throw new Error("invalid version byte. expected "+d+", got "+i)
var p=b(o)
if(!l(p,c))throw new Error("invalid checksum")
return e.from(s)}function v(t,n){if(c(n)||u(n))throw new Error("cannot encode null data")
var r=h[t]
if(u(r))throw new Error(t+' is not a valid version byte name.  expected one of "ed25519PublicKey", "ed25519SecretSeed", "preAuthTx", "sha256Hash"')
n=e.from(n)
var i=e.from([r]),o=e.concat([i,n]),s=b(o),f=e.concat([o,s])
return a.encode(f)}function b(t){var n=e.alloc(2)
return n.writeUInt16LE(s.crc16xmodem(t),0),n}}).call(this,n(1).Buffer)},function(e,t){function n(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=n,n.equal=function(e,t,n){if(e!=t)throw new Error(n||"Assertion failed: "+e+" != "+t)}},function(e,t,n){var r=n(125),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")()
e.exports=o},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),i=r.Buffer.from&&r.Buffer.alloc&&r.Buffer.allocUnsafe&&r.Buffer.allocUnsafeSlow?r.Buffer.from:function(e){return new r.Buffer(e)}
t.default=i},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=function(e,n){return t(e,n)>>>0}
return n.signed=t,n.unsigned=n,n.model=e,n}},function(e,t,n){"use strict"
var r=n(19),i=n(2)
function o(e,t){return 55296==(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1)))}function a(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function s(e){return 1===e.length?"0"+e:e}function u(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}t.inherits=i,t.toArray=function(e,t){if(Array.isArray(e))return e.slice()
if(!e)return[]
var n=[]
if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)n.push(parseInt(e[i]+e[i+1],16))}else for(var r=0,i=0;i<e.length;i++){var a=e.charCodeAt(i)
a<128?n[r++]=a:a<2048?(n[r++]=a>>6|192,n[r++]=63&a|128):o(e,i)?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++i)),n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=63&a|128):(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=63&a|128)}else for(i=0;i<e.length;i++)n[i]=0|e[i]
return n},t.toHex=function(e){for(var t="",n=0;n<e.length;n++)t+=s(e[n].toString(16))
return t},t.htonl=a,t.toHex32=function(e,t){for(var n="",r=0;r<e.length;r++){var i=e[r]
"little"===t&&(i=a(i)),n+=u(i.toString(16))}return n},t.zero2=s,t.zero8=u,t.join32=function(e,t,n,i){var o=n-t
r(o%4==0)
for(var a=new Array(o/4),s=0,u=t;s<a.length;s++,u+=4){var c
c="big"===i?e[u]<<24|e[u+1]<<16|e[u+2]<<8|e[u+3]:e[u+3]<<24|e[u+2]<<16|e[u+1]<<8|e[u],a[s]=c>>>0}return a},t.split32=function(e,t){for(var n=new Array(4*e.length),r=0,i=0;r<e.length;r++,i+=4){var o=e[r]
"big"===t?(n[i]=o>>>24,n[i+1]=o>>>16&255,n[i+2]=o>>>8&255,n[i+3]=255&o):(n[i+3]=o>>>24,n[i+2]=o>>>16&255,n[i+1]=o>>>8&255,n[i]=255&o)}return n},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,n){return e+t+n>>>0},t.sum32_4=function(e,t,n,r){return e+t+n+r>>>0},t.sum32_5=function(e,t,n,r,i){return e+t+n+r+i>>>0},t.sum64=function(e,t,n,r){var i=e[t],o=r+e[t+1]>>>0,a=(o<r?1:0)+n+i
e[t]=a>>>0,e[t+1]=o},t.sum64_hi=function(e,t,n,r){return(t+r>>>0<t?1:0)+e+n>>>0},t.sum64_lo=function(e,t,n,r){return t+r>>>0},t.sum64_4_hi=function(e,t,n,r,i,o,a,s){var u=0,c=t
return u+=(c=c+r>>>0)<t?1:0,u+=(c=c+o>>>0)<o?1:0,e+n+i+a+(u+=(c=c+s>>>0)<s?1:0)>>>0},t.sum64_4_lo=function(e,t,n,r,i,o,a,s){return t+r+o+s>>>0},t.sum64_5_hi=function(e,t,n,r,i,o,a,s,u,c){var f=0,l=t
return f+=(l=l+r>>>0)<t?1:0,f+=(l=l+o>>>0)<o?1:0,f+=(l=l+s>>>0)<s?1:0,e+n+i+a+u+(f+=(l=l+c>>>0)<c?1:0)>>>0},t.sum64_5_lo=function(e,t,n,r,i,o,a,s,u,c){return t+r+o+s+c>>>0},t.rotr64_hi=function(e,t,n){return(t<<32-n|e>>>n)>>>0},t.rotr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0},t.shr64_hi=function(e,t,n){return e>>>n},t.shr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0}},function(e,t,n){var r=n(37),i=n(230),o=n(231),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0
e.exports=function(e){return null==e?void 0===e?s:a:u&&u in Object(e)?i(e):o(e)}},function(e,t){e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__27__},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e:{default:e}},i=function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i)
o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}return e}
Object.defineProperty(t,"__esModule",{value:!0}),i(t,r(n(153)))
var o=n(111)
i(t,r(o))
o.config},function(e,t,n){var r=n(3).Buffer,i=n(118).Transform,o=n(103).StringDecoder
function a(e){i.call(this),this.hashMode="string"==typeof e,this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}n(2)(a,i),a.prototype.update=function(e,t,n){"string"==typeof e&&(e=r.from(e,t))
var i=this._update(e)
return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},a.prototype.setAutoPadding=function(){},a.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},a.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},a.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},a.prototype._transform=function(e,t,n){var r
try{this.hashMode?this._update(e):this.push(this._update(e))}catch(e){r=e}finally{n(r)}},a.prototype._flush=function(e){var t
try{this.push(this.__final())}catch(e){t=e}e(t)},a.prototype._finalOrDigest=function(e){var t=this.__final()||r.alloc(0)
return e&&(t=this._toString(t,e,!0)),t},a.prototype._toString=function(e,t,n){if(this._decoder||(this._decoder=new o(t),this._encoding=t),this._encoding!==t)throw new Error("can't switch encodings")
var r=this._decoder.write(e)
return n&&(r+=this._decoder.end()),r},e.exports=a},function(e,t){e.exports=function(e,t){var n="function"==typeof e.exports?e.exports.extendOptions:e.options
for(var r in"function"==typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},function(e,t,n){var r=n(229),i=n(234)
e.exports=function(e,t){var n=i(e,t)
return r(n)?n:void 0}},function(e,t,n){"use strict"
var r=n(69),i=Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t}
e.exports=l
var o=n(47)
o.inherits=n(2)
var a=n(148),s=n(102)
o.inherits(l,a)
for(var u=i(s.prototype),c=0;c<u.length;c++){var f=u[c]
l.prototype[f]||(l.prototype[f]=s.prototype[f])}function l(e){if(!(this instanceof l))return new l(e)
a.call(this,e),s.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",h)}function h(){this.allowHalfOpen||this._writableState.ended||r.nextTick(d,this)}function d(e){e.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),l.prototype._destroy=function(e,t){this.push(null),this.end(),r.nextTick(t,e)}},function(e,t,n){e.exports=n(139)},function(e,t,n){var r
!function(i){"use strict"
var o,a=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,s=Math.ceil,u=Math.floor,c=" not a boolean or binary digit",f="rounding mode",l="number type has more than 15 significant digits",h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",d=1e14,p=14,v=9007199254740991,b=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],g=1e7,m=1e9
function y(e){var t=0|e
return e>0||e===t?t:t-1}function _(e){for(var t,n,r=1,i=e.length,o=e[0]+"";r<i;){for(t=e[r++]+"",n=p-t.length;n--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function w(e,t){var n,r,i=e.c,o=t.c,a=e.s,s=t.s,u=e.e,c=t.e
if(!a||!s)return null
if(n=i&&!i[0],r=o&&!o[0],n||r)return n?r?0:-s:a
if(a!=s)return a
if(n=a<0,r=u==c,!i||!o)return r?0:!i^n?1:-1
if(!r)return u>c^n?1:-1
for(s=(u=i.length)<(c=o.length)?u:c,a=0;a<s;a++)if(i[a]!=o[a])return i[a]>o[a]^n?1:-1
return u==c?0:u>c^n?1:-1}function x(e,t,n){return(e=O(e))>=t&&e<=n}function k(e){return"[object Array]"==Object.prototype.toString.call(e)}function S(e,t,n){for(var r,i,o=[0],a=0,s=e.length;a<s;){for(i=o.length;i--;o[i]*=t);for(o[r=0]+=h.indexOf(e.charAt(a++));r<o.length;r++)o[r]>n-1&&(null==o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/n|0,o[r]%=n)}return o.reverse()}function E(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function A(e,t){var n,r
if(t<0){for(r="0.";++t;r+="0");e=r+e}else if(++t>(n=e.length)){for(r="0",t-=n;--t;r+="0");e+=r}else t<n&&(e=e.slice(0,t)+"."+e.slice(t))
return e}function O(e){return(e=parseFloat(e))<0?s(e):u(e)}(o=function e(t){var n,r,i,o,T,M,P,I,C=0,R=X.prototype,B=new X(1),j=20,N=4,L=-7,U=21,D=-1e7,z=1e7,q=!0,F=G,K=!1,H=1,V=0,$={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}
function X(e,t){var n,i,o,s,c,f,d=this
if(!(d instanceof X))return q&&J(26,"constructor call without new",e),new X(e,t)
if(null!=t&&F(t,2,64,C,"base")){if(f=e+"",10==(t|=0))return ee(d=new X(e instanceof X?e:f),j+d.e+1,N)
if((s="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(n="["+h.slice(0,t)+"]+")+"(?:\\."+n+")?$",t<37?"i":"").test(f))return r(d,f,s,t)
s?(d.s=1/e<0?(f=f.slice(1),-1):1,q&&f.replace(/^0\.0*|\./,"").length>15&&J(C,l,e),s=!1):d.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1,f=W(f,10,t,d.s)}else{if(e instanceof X)return d.s=e.s,d.e=e.e,d.c=(e=e.c)?e.slice():e,void(C=0)
if((s="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(i=0,o=e;o>=10;o/=10,i++);return d.e=i,d.c=[e],void(C=0)}f=e+""}else{if(!a.test(f=e+""))return r(d,f,s)
d.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1}}for((i=f.indexOf("."))>-1&&(f=f.replace(".","")),(o=f.search(/e/i))>0?(i<0&&(i=o),i+=+f.slice(o+1),f=f.substring(0,o)):i<0&&(i=f.length),o=0;48===f.charCodeAt(o);o++);for(c=f.length;48===f.charCodeAt(--c););if(f=f.slice(o,c+1))if(c=f.length,s&&q&&c>15&&(e>v||e!==u(e))&&J(C,l,d.s*e),(i=i-o-1)>z)d.c=d.e=null
else if(i<D)d.c=[d.e=0]
else{if(d.e=i,d.c=[],o=(i+1)%p,i<0&&(o+=p),o<c){for(o&&d.c.push(+f.slice(0,o)),c-=p;o<c;)d.c.push(+f.slice(o,o+=p))
f=f.slice(o),o=p-f.length}else o-=c
for(;o--;f+="0");d.c.push(+f)}else d.c=[d.e=0]
C=0}function W(e,t,r,i){var o,a,s,u,c,f,l,d=e.indexOf("."),p=j,v=N
for(r<37&&(e=e.toLowerCase()),d>=0&&(s=V,V=0,e=e.replace(".",""),c=(l=new X(r)).pow(e.length-d),V=s,l.c=S(A(_(c.c),c.e),10,t),l.e=l.c.length),a=s=(f=S(e,r,t)).length;0==f[--s];f.pop());if(!f[0])return"0"
if(d<0?--a:(c.c=f,c.e=a,c.s=i,f=(c=n(c,l,p,v,t)).c,u=c.r,a=c.e),d=f[o=a+p+1],s=t/2,u=u||o<0||null!=f[o+1],u=v<4?(null!=d||u)&&(0==v||v==(c.s<0?3:2)):d>s||d==s&&(4==v||u||6==v&&1&f[o-1]||v==(c.s<0?8:7)),o<1||!f[0])e=u?A("1",-p):"0"
else{if(f.length=o,u)for(--t;++f[--o]>t;)f[o]=0,o||(++a,f=[1].concat(f))
for(s=f.length;!f[--s];);for(d=0,e="";d<=s;e+=h.charAt(f[d++]));e=A(e,a)}return e}function Q(e,t,n,r){var i,o,a,s,u
if(n=null!=n&&F(n,0,8,r,f)?0|n:N,!e.c)return e.toString()
if(i=e.c[0],a=e.e,null==t)u=_(e.c),u=19==r||24==r&&a<=L?E(u,a):A(u,a)
else if(o=(e=ee(new X(e),t,n)).e,s=(u=_(e.c)).length,19==r||24==r&&(t<=o||o<=L)){for(;s<t;u+="0",s++);u=E(u,o)}else if(t-=a,u=A(u,o),o+1>s){if(--t>0)for(u+=".";t--;u+="0");}else if((t+=o-s)>0)for(o+1==s&&(u+=".");t--;u+="0");return e.s<0&&i?"-"+u:u}function Y(e,t){var n,r,i=0
for(k(e[0])&&(e=e[0]),n=new X(e[0]);++i<e.length;){if(!(r=new X(e[i])).s){n=r
break}t.call(n,r)&&(n=r)}return n}function G(e,t,n,r,i){return(e<t||e>n||e!=O(e))&&J(r,(i||"decimal places")+(e<t||e>n?" out of range":" not an integer"),e),!0}function Z(e,t,n){for(var r=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,r++);return(n=r+n*p-1)>z?e.c=e.e=null:n<D?e.c=[e.e=0]:(e.e=n,e.c=t),e}function J(e,t,n){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+n)
throw r.name="BigNumber Error",C=0,r}function ee(e,t,n,r){var i,o,a,c,f,l,h,v=e.c,g=b
if(v){e:{for(i=1,c=v[0];c>=10;c/=10,i++);if((o=t-i)<0)o+=p,a=t,h=(f=v[l=0])/g[i-a-1]%10|0
else if((l=s((o+1)/p))>=v.length){if(!r)break e
for(;v.length<=l;v.push(0));f=h=0,i=1,a=(o%=p)-p+1}else{for(f=c=v[l],i=1;c>=10;c/=10,i++);h=(a=(o%=p)-p+i)<0?0:f/g[i-a-1]%10|0}if(r=r||t<0||null!=v[l+1]||(a<0?f:f%g[i-a-1]),r=n<4?(h||r)&&(0==n||n==(e.s<0?3:2)):h>5||5==h&&(4==n||r||6==n&&(o>0?a>0?f/g[i-a]:0:v[l-1])%10&1||n==(e.s<0?8:7)),t<1||!v[0])return v.length=0,r?(t-=e.e+1,v[0]=g[(p-t%p)%p],e.e=-t||0):v[0]=e.e=0,e
if(0==o?(v.length=l,c=1,l--):(v.length=l+1,c=g[p-o],v[l]=a>0?u(f/g[i-a]%g[a])*c:0),r)for(;;){if(0==l){for(o=1,a=v[0];a>=10;a/=10,o++);for(a=v[0]+=c,c=1;a>=10;a/=10,c++);o!=c&&(e.e++,v[0]==d&&(v[0]=1))
break}if(v[l]+=c,v[l]!=d)break
v[l--]=0,c=1}for(o=v.length;0===v[--o];v.pop());}e.e>z?e.c=e.e=null:e.e<D&&(e.c=[e.e=0])}return e}return X.another=e,X.ROUND_UP=0,X.ROUND_DOWN=1,X.ROUND_CEIL=2,X.ROUND_FLOOR=3,X.ROUND_HALF_UP=4,X.ROUND_HALF_DOWN=5,X.ROUND_HALF_EVEN=6,X.ROUND_HALF_CEIL=7,X.ROUND_HALF_FLOOR=8,X.EUCLID=9,X.config=X.set=function(){var e,t,n=0,r={},i=arguments,o=i[0],a=o&&"object"==typeof o?function(){if(o.hasOwnProperty(t))return null!=(e=o[t])}:function(){if(i.length>n)return null!=(e=i[n++])}
return a(t="DECIMAL_PLACES")&&F(e,0,m,2,t)&&(j=0|e),r[t]=j,a(t="ROUNDING_MODE")&&F(e,0,8,2,t)&&(N=0|e),r[t]=N,a(t="EXPONENTIAL_AT")&&(k(e)?F(e[0],-m,0,2,t)&&F(e[1],0,m,2,t)&&(L=0|e[0],U=0|e[1]):F(e,-m,m,2,t)&&(L=-(U=0|(e<0?-e:e)))),r[t]=[L,U],a(t="RANGE")&&(k(e)?F(e[0],-m,-1,2,t)&&F(e[1],1,m,2,t)&&(D=0|e[0],z=0|e[1]):F(e,-m,m,2,t)&&(0|e?D=-(z=0|(e<0?-e:e)):q&&J(2,t+" cannot be zero",e))),r[t]=[D,z],a(t="ERRORS")&&(e===!!e||1===e||0===e?(C=0,F=(q=!!e)?G:x):q&&J(2,t+c,e)),r[t]=q,a(t="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?!(e="undefined"==typeof crypto)&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?K=!0:q?J(2,"crypto unavailable",e?void 0:crypto):K=!1:K=!1:q&&J(2,t+c,e)),r[t]=K,a(t="MODULO_MODE")&&F(e,0,9,2,t)&&(H=0|e),r[t]=H,a(t="POW_PRECISION")&&F(e,0,m,2,t)&&(V=0|e),r[t]=V,a(t="FORMAT")&&("object"==typeof e?$=e:q&&J(2,t+" not an object",e)),r[t]=$,r},X.max=function(){return Y(arguments,R.lt)},X.min=function(){return Y(arguments,R.gt)},X.random=(i=9007199254740992*Math.random()&2097151?function(){return u(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,n,r,o,a,c=0,f=[],l=new X(B)
if(e=null!=e&&F(e,0,m,14)?0|e:j,o=s(e/p),K)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));c<o;)(a=131072*t[c]+(t[c+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),t[c]=n[0],t[c+1]=n[1]):(f.push(a%1e14),c+=2)
c=o/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(o*=7);c<o;)(a=281474976710656*(31&t[c])+1099511627776*t[c+1]+4294967296*t[c+2]+16777216*t[c+3]+(t[c+4]<<16)+(t[c+5]<<8)+t[c+6])>=9e15?crypto.randomBytes(7).copy(t,c):(f.push(a%1e14),c+=7)
c=o/7}else K=!1,q&&J(14,"crypto unavailable",crypto)
if(!K)for(;c<o;)(a=i())<9e15&&(f[c++]=a%1e14)
for(o=f[--c],e%=p,o&&e&&(a=b[p-e],f[c]=u(o/a)*a);0===f[c];f.pop(),c--);if(c<0)f=[r=0]
else{for(r=-1;0===f[0];f.splice(0,1),r-=p);for(c=1,a=f[0];a>=10;a/=10,c++);c<p&&(r-=p-c)}return l.e=r,l.c=f,l}),n=function(){function e(e,t,n){var r,i,o,a,s=0,u=e.length,c=t%g,f=t/g|0
for(e=e.slice();u--;)s=((i=c*(o=e[u]%g)+(r=f*o+(a=e[u]/g|0)*c)%g*g+s)/n|0)+(r/g|0)+f*a,e[u]=i%n
return s&&(e=[s].concat(e)),e}function t(e,t,n,r){var i,o
if(n!=r)o=n>r?1:-1
else for(i=o=0;i<n;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1
break}return o}function n(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n]
for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,i,o,a,s){var c,f,l,h,v,b,g,m,_,w,x,k,S,E,A,O,T,M=r.s==i.s?1:-1,P=r.c,I=i.c
if(!(P&&P[0]&&I&&I[0]))return new X(r.s&&i.s&&(P?!I||P[0]!=I[0]:I)?P&&0==P[0]||!I?0*M:M/0:NaN)
for(_=(m=new X(M)).c=[],M=o+(f=r.e-i.e)+1,s||(s=d,f=y(r.e/p)-y(i.e/p),M=M/p|0),l=0;I[l]==(P[l]||0);l++);if(I[l]>(P[l]||0)&&f--,M<0)_.push(1),h=!0
else{for(E=P.length,O=I.length,l=0,M+=2,(v=u(s/(I[0]+1)))>1&&(I=e(I,v,s),P=e(P,v,s),O=I.length,E=P.length),S=O,x=(w=P.slice(0,O)).length;x<O;w[x++]=0);T=I.slice(),T=[0].concat(T),A=I[0],I[1]>=s/2&&A++
do{if(v=0,(c=t(I,w,O,x))<0){if(k=w[0],O!=x&&(k=k*s+(w[1]||0)),(v=u(k/A))>1)for(v>=s&&(v=s-1),g=(b=e(I,v,s)).length,x=w.length;1==t(b,w,g,x);)v--,n(b,O<g?T:I,g,s),g=b.length,c=1
else 0==v&&(c=v=1),g=(b=I.slice()).length
if(g<x&&(b=[0].concat(b)),n(w,b,x,s),x=w.length,-1==c)for(;t(I,w,O,x)<1;)v++,n(w,O<x?T:I,x,s),x=w.length}else 0===c&&(v++,w=[0])
_[l++]=v,w[0]?w[x++]=P[S]||0:(w=[P[S]],x=1)}while((S++<E||null!=w[0])&&M--)
h=null!=w[0],_[0]||_.splice(0,1)}if(s==d){for(l=1,M=_[0];M>=10;M/=10,l++);ee(m,o+(m.e=l+f*p-1)+1,a,h)}else m.e=f,m.r=+h
return m}}(),o=/^(-?)0([xbo])(?=\w[\w.]*$)/i,T=/^([^.]+)\.$/,M=/^\.([^.]+)$/,P=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g,r=function(e,t,n,r){var i,a=n?t:t.replace(I,"")
if(P.test(a))e.s=isNaN(a)?null:a<0?-1:1
else{if(!n&&(a=a.replace(o,function(e,t,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,r&&r!=i?e:t}),r&&(i=r,a=a.replace(T,"$1").replace(M,"0.$1")),t!=a))return new X(a,i)
q&&J(C,"not a"+(r?" base "+r:"")+" number",t),e.s=null}e.c=e.e=null,C=0},R.absoluteValue=R.abs=function(){var e=new X(this)
return e.s<0&&(e.s=1),e},R.ceil=function(){return ee(new X(this),this.e+1,2)},R.comparedTo=R.cmp=function(e,t){return C=1,w(this,new X(e,t))},R.decimalPlaces=R.dp=function(){var e,t,n=this.c
if(!n)return null
if(e=((t=n.length-1)-y(this.e/p))*p,t=n[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},R.dividedBy=R.div=function(e,t){return C=3,n(this,new X(e,t),j,N)},R.dividedToIntegerBy=R.divToInt=function(e,t){return C=4,n(this,new X(e,t),0,1)},R.equals=R.eq=function(e,t){return C=5,0===w(this,new X(e,t))},R.floor=function(){return ee(new X(this),this.e+1,3)},R.greaterThan=R.gt=function(e,t){return C=6,w(this,new X(e,t))>0},R.greaterThanOrEqualTo=R.gte=function(e,t){return C=7,1===(t=w(this,new X(e,t)))||0===t},R.isFinite=function(){return!!this.c},R.isInteger=R.isInt=function(){return!!this.c&&y(this.e/p)>this.c.length-2},R.isNaN=function(){return!this.s},R.isNegative=R.isNeg=function(){return this.s<0},R.isZero=function(){return!!this.c&&0==this.c[0]},R.lessThan=R.lt=function(e,t){return C=8,w(this,new X(e,t))<0},R.lessThanOrEqualTo=R.lte=function(e,t){return C=9,-1===(t=w(this,new X(e,t)))||0===t},R.minus=R.sub=function(e,t){var n,r,i,o,a=this,s=a.s
if(C=10,t=(e=new X(e,t)).s,!s||!t)return new X(NaN)
if(s!=t)return e.s=-t,a.plus(e)
var u=a.e/p,c=e.e/p,f=a.c,l=e.c
if(!u||!c){if(!f||!l)return f?(e.s=-t,e):new X(l?a:NaN)
if(!f[0]||!l[0])return l[0]?(e.s=-t,e):new X(f[0]?a:3==N?-0:0)}if(u=y(u),c=y(c),f=f.slice(),s=u-c){for((o=s<0)?(s=-s,i=f):(c=u,i=l),i.reverse(),t=s;t--;i.push(0));i.reverse()}else for(r=(o=(s=f.length)<(t=l.length))?s:t,s=t=0;t<r;t++)if(f[t]!=l[t]){o=f[t]<l[t]
break}if(o&&(i=f,f=l,l=i,e.s=-e.s),(t=(r=l.length)-(n=f.length))>0)for(;t--;f[n++]=0);for(t=d-1;r>s;){if(f[--r]<l[r]){for(n=r;n&&!f[--n];f[n]=t);--f[n],f[r]+=d}f[r]-=l[r]}for(;0==f[0];f.splice(0,1),--c);return f[0]?Z(e,f,c):(e.s=3==N?-1:1,e.c=[e.e=0],e)},R.modulo=R.mod=function(e,t){var r,i,o=this
return C=11,e=new X(e,t),!o.c||!e.s||e.c&&!e.c[0]?new X(NaN):!e.c||o.c&&!o.c[0]?new X(o):(9==H?(i=e.s,e.s=1,r=n(o,e,0,3),e.s=i,r.s*=i):r=n(o,e,0,H),o.minus(r.times(e)))},R.negated=R.neg=function(){var e=new X(this)
return e.s=-e.s||null,e},R.plus=R.add=function(e,t){var n,r=this,i=r.s
if(C=12,t=(e=new X(e,t)).s,!i||!t)return new X(NaN)
if(i!=t)return e.s=-t,r.minus(e)
var o=r.e/p,a=e.e/p,s=r.c,u=e.c
if(!o||!a){if(!s||!u)return new X(i/0)
if(!s[0]||!u[0])return u[0]?e:new X(s[0]?r:0*i)}if(o=y(o),a=y(a),s=s.slice(),i=o-a){for(i>0?(a=o,n=u):(i=-i,n=s),n.reverse();i--;n.push(0));n.reverse()}for((i=s.length)-(t=u.length)<0&&(n=u,u=s,s=n,t=i),i=0;t;)i=(s[--t]=s[t]+u[t]+i)/d|0,s[t]=d===s[t]?0:s[t]%d
return i&&(s=[i].concat(s),++a),Z(e,s,a)},R.precision=R.sd=function(e){var t,n,r=this,i=r.c
if(null!=e&&e!==!!e&&1!==e&&0!==e&&(q&&J(13,"argument"+c,e),e!=!!e&&(e=null)),!i)return null
if(t=(n=i.length-1)*p+1,n=i[n]){for(;n%10==0;n/=10,t--);for(n=i[0];n>=10;n/=10,t++);}return e&&r.e+1>t&&(t=r.e+1),t},R.round=function(e,t){var n=new X(this)
return(null==e||F(e,0,m,15))&&ee(n,~~e+this.e+1,null!=t&&F(t,0,8,15,f)?0|t:N),n},R.shift=function(e){var t=this
return F(e,-v,v,16,"argument")?t.times("1e"+O(e)):new X(t.c&&t.c[0]&&(e<-v||e>v)?t.s*(e<0?0:1/0):t)},R.squareRoot=R.sqrt=function(){var e,t,r,i,o,a=this,s=a.c,u=a.s,c=a.e,f=j+4,l=new X("0.5")
if(1!==u||!s||!s[0])return new X(!u||u<0&&(!s||s[0])?NaN:s?a:1/0)
if(0==(u=Math.sqrt(+a))||u==1/0?(((t=_(s)).length+c)%2==0&&(t+="0"),u=Math.sqrt(t),c=y((c+1)/2)-(c<0||c%2),r=new X(t=u==1/0?"1e"+c:(t=u.toExponential()).slice(0,t.indexOf("e")+1)+c)):r=new X(u+""),r.c[0])for((u=(c=r.e)+f)<3&&(u=0);;)if(o=r,r=l.times(o.plus(n(a,o,f,1))),_(o.c).slice(0,u)===(t=_(r.c)).slice(0,u)){if(r.e<c&&--u,"9999"!=(t=t.slice(u-3,u+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(ee(r,r.e+j+2,1),e=!r.times(r).eq(a))
break}if(!i&&(ee(o,o.e+j+2,0),o.times(o).eq(a))){r=o
break}f+=4,u+=4,i=1}return ee(r,r.e+j+1,N,e)},R.times=R.mul=function(e,t){var n,r,i,o,a,s,u,c,f,l,h,v,b,m,_,w=this,x=w.c,k=(C=17,e=new X(e,t)).c
if(!(x&&k&&x[0]&&k[0]))return!w.s||!e.s||x&&!x[0]&&!k||k&&!k[0]&&!x?e.c=e.e=e.s=null:(e.s*=w.s,x&&k?(e.c=[0],e.e=0):e.c=e.e=null),e
for(r=y(w.e/p)+y(e.e/p),e.s*=w.s,(u=x.length)<(l=k.length)&&(b=x,x=k,k=b,i=u,u=l,l=i),i=u+l,b=[];i--;b.push(0));for(m=d,_=g,i=l;--i>=0;){for(n=0,h=k[i]%_,v=k[i]/_|0,o=i+(a=u);o>i;)n=((c=h*(c=x[--a]%_)+(s=v*c+(f=x[a]/_|0)*h)%_*_+b[o]+n)/m|0)+(s/_|0)+v*f,b[o--]=c%m
b[o]=n}return n?++r:b.splice(0,1),Z(e,b,r)},R.toDigits=function(e,t){var n=new X(this)
return e=null!=e&&F(e,1,m,18,"precision")?0|e:null,t=null!=t&&F(t,0,8,18,f)?0|t:N,e?ee(n,e,t):n},R.toExponential=function(e,t){return Q(this,null!=e&&F(e,0,m,19)?1+~~e:null,t,19)},R.toFixed=function(e,t){return Q(this,null!=e&&F(e,0,m,20)?~~e+this.e+1:null,t,20)},R.toFormat=function(e,t){var n=Q(this,null!=e&&F(e,0,m,21)?~~e+this.e+1:null,t,21)
if(this.c){var r,i=n.split("."),o=+$.groupSize,a=+$.secondaryGroupSize,s=$.groupSeparator,u=i[0],c=i[1],f=this.s<0,l=f?u.slice(1):u,h=l.length
if(a&&(r=o,o=a,a=r,h-=r),o>0&&h>0){for(r=h%o||o,u=l.substr(0,r);r<h;r+=o)u+=s+l.substr(r,o)
a>0&&(u+=s+l.slice(r)),f&&(u="-"+u)}n=c?u+$.decimalSeparator+((a=+$.fractionGroupSize)?c.replace(new RegExp("\\d{"+a+"}\\B","g"),"$&"+$.fractionGroupSeparator):c):u}return n},R.toFraction=function(e){var t,r,i,o,a,s,u,c,f,l=q,h=this,d=h.c,v=new X(B),g=r=new X(B),m=u=new X(B)
if(null!=e&&(q=!1,s=new X(e),q=l,(l=s.isInt())&&!s.lt(B)||(q&&J(22,"max denominator "+(l?"out of range":"not an integer"),e),e=!l&&s.c&&ee(s,s.e+1,1).gte(B)?s:null)),!d)return h.toString()
for(f=_(d),o=v.e=f.length-h.e-1,v.c[0]=b[(a=o%p)<0?p+a:a],e=!e||s.cmp(v)>0?o>0?v:g:s,a=z,z=1/0,s=new X(f),u.c[0]=0;c=n(s,v,0,1),1!=(i=r.plus(c.times(m))).cmp(e);)r=m,m=i,g=u.plus(c.times(i=g)),u=i,v=s.minus(c.times(i=v)),s=i
return i=n(e.minus(r),m,0,1),u=u.plus(i.times(g)),r=r.plus(i.times(m)),u.s=g.s=h.s,t=n(g,m,o*=2,N).minus(h).abs().cmp(n(u,r,o,N).minus(h).abs())<1?[g.toString(),m.toString()]:[u.toString(),r.toString()],z=a,t},R.toNumber=function(){return+this},R.toPower=R.pow=function(e,t){var n,r,i,o=u(e<0?-e:+e),a=this
if(null!=t&&(C=23,t=new X(t)),!F(e,-v,v,23,"exponent")&&(!isFinite(e)||o>v&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return n=Math.pow(+a,e),new X(t?n%t:n)
for(t?e>1&&a.gt(B)&&a.isInt()&&t.gt(B)&&t.isInt()?a=a.mod(t):(i=t,t=null):V&&(n=s(V/p+2)),r=new X(B);;){if(o%2){if(!(r=r.times(a)).c)break
n?r.c.length>n&&(r.c.length=n):t&&(r=r.mod(t))}if(!(o=u(o/2)))break
a=a.times(a),n?a.c&&a.c.length>n&&(a.c.length=n):t&&(a=a.mod(t))}return t?r:(e<0&&(r=B.div(r)),i?r.mod(i):n?ee(r,V,N):r)},R.toPrecision=function(e,t){return Q(this,null!=e&&F(e,1,m,24,"precision")?0|e:null,t,24)},R.toString=function(e){var t,n=this,r=n.s,i=n.e
return null===i?r?(t="Infinity",r<0&&(t="-"+t)):t="NaN":(t=_(n.c),t=null!=e&&F(e,2,64,25,"base")?W(A(t,i),0|e,10,r):i<=L||i>=U?E(t,i):A(t,i),r<0&&n.c[0]&&(t="-"+t)),t},R.truncated=R.trunc=function(){return ee(new X(this),this.e+1,1)},R.valueOf=R.toJSON=function(){var e,t=this,n=t.e
return null===n?t.toString():(e=_(t.c),e=n<=L||n>=U?E(e,n):A(e,n),t.s<0?"-"+e:e)},R.isBigNumber=!0,null!=t&&X.config(t),X}()).default=o.BigNumber=o,void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},function(e,t,n){"use strict"
var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)}
r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)}
var a=Number.isNaN||function(e){return e!=e}
function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0
var u=10
function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,a,s
if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)
if(void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount
else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=c(e))>0&&a.length>i&&!a.warned){a.warned=!0
var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,s=u,console&&console.warn&&console.warn(s)}return e}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t])
this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,e))}.bind(r)
return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events
if(void 0===r)return[]
var i=r[t]
return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(i):p(i,i.length)}function d(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
u=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var r="error"===e,i=this._events
if(void 0!==i)r=r&&void 0===i.error
else if(!r)return!1
if(r){var a
if(t.length>0&&(a=t[0]),a instanceof Error)throw a
var s=new Error("Unhandled error."+(a?" ("+a.message+")":""))
throw s.context=a,s}var u=i[e]
if(void 0===u)return!1
if("function"==typeof u)o(u,this,t)
else{var c=u.length,f=p(u,c)
for(n=0;n<c;++n)o(f[n],this,t)}return!0},s.prototype.addListener=function(e,t){return f(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return f(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
return this.on(e,l(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
return this.prependListener(e,l(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,o,a
if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
if(void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o
break}if(i<0)return this
0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var i,o=Object.keys(n)
for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){function t(){var t=Reflect.construct(e,Array.from(arguments))
return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var u=t.NetworkError=function(e){function t(e,n){i(this,t)
var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r.constructor=t,r.response=n,r}return a(t,s(Error)),r(t,[{key:"getResponse",value:function(){return this.response}}]),t}()
t.NotFoundError=function(e){function t(e,n){i(this,t)
var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return r.constructor=t,r}return a(t,u),t}(),t.BadRequestError=function(e){function t(e,n){i(this,t)
var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return r.constructor=t,r}return a(t,u),t}(),t.BadResponseError=function(e){function t(e,n){i(this,t)
var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return r.constructor=t,r}return a(t,u),t}()},function(e,t,n){var r=n(20).Symbol
e.exports=r},function(e,t,n){var r=n(130),i=n(251),o=n(45)
e.exports=function(e){return o(e)?r(e):i(e)}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r,i,o
!function(a,s){"use strict"
e.exports?e.exports=s(n(141),n(142),n(143)):(i=[n(141),n(142),n(143)],void 0===(o="function"==typeof(r=s)?r.apply(t,i):r)||(e.exports=o))}(0,function(e,t,n,r){"use strict"
var i=r&&r.URI
function o(e,t){var n=arguments.length>=1,r=arguments.length>=2
if(!(this instanceof o))return n?r?new o(e,t):new o(e):new o
if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI")
e="undefined"!=typeof location?location.href+"":""}if(null===e&&n)throw new TypeError("null is not a valid argument for URI")
return this.href(e),void 0!==t?this.absoluteTo(t):this}o.version="1.19.1"
var a=o.prototype,s=Object.prototype.hasOwnProperty
function u(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function c(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function f(e){return"Array"===c(e)}function l(e,t){var n,r,i={}
if("RegExp"===c(t))i=null
else if(f(t))for(n=0,r=t.length;n<r;n++)i[t[n]]=!0
else i[t]=!0
for(n=0,r=e.length;n<r;n++){(i&&void 0!==i[e[n]]||!i&&t.test(e[n]))&&(e.splice(n,1),r--,n--)}return e}function h(e,t){var n,r
if(f(t)){for(n=0,r=t.length;n<r;n++)if(!h(e,t[n]))return!1
return!0}var i=c(t)
for(n=0,r=e.length;n<r;n++)if("RegExp"===i){if("string"==typeof e[n]&&e[n].match(t))return!0}else if(e[n]===t)return!0
return!1}function d(e,t){if(!f(e)||!f(t))return!1
if(e.length!==t.length)return!1
e.sort(),t.sort()
for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1
return!0}function p(e){return e.replace(/^\/+|\/+$/g,"")}function v(e){return escape(e)}function b(e){return encodeURIComponent(e).replace(/[!'()*]/g,v).replace(/\*/g,"%2A")}o._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:o.preventInvalidHostname,duplicateQueryParameters:o.duplicateQueryParameters,escapeQuerySpace:o.escapeQuerySpace}},o.preventInvalidHostname=!1,o.duplicateQueryParameters=!1,o.escapeQuerySpace=!0,o.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,o.idn_expression=/[^a-z0-9\._-]/i,o.punycode_expression=/(xn--)/i,o.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,o.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,o.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g},o.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},o.hostProtocols=["http","https"],o.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/,o.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},o.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase()
if("input"!==t||"image"===e.type)return o.domAttributes[t]}},o.encode=b,o.decode=decodeURIComponent,o.iso8859=function(){o.encode=escape,o.decode=unescape},o.unicode=function(){o.encode=b,o.decode=decodeURIComponent},o.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},o.encodeQuery=function(e,t){var n=o.encode(e+"")
return void 0===t&&(t=o.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},o.decodeQuery=function(e,t){e+="",void 0===t&&(t=o.escapeQuerySpace)
try{return o.decode(t?e.replace(/\+/g,"%20"):e)}catch(t){return e}}
var g,m={encode:"encode",decode:"decode"},y=function(e,t){return function(n){try{return o[t](n+"").replace(o.characters[e][t].expression,function(n){return o.characters[e][t].map[n]})}catch(e){return n}}}
for(g in m)o[g+"PathSegment"]=y("pathname",m[g]),o[g+"UrnPathSegment"]=y("urnpath",m[g])
var _=function(e,t,n){return function(r){var i
i=n?function(e){return o[t](o[n](e))}:o[t]
for(var a=(r+"").split(e),s=0,u=a.length;s<u;s++)a[s]=i(a[s])
return a.join(e)}}
function w(e){return function(t,n){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}}function x(e,t){return function(n,r){return void 0===n?this._parts[e]||"":(null!==n&&(n+="").charAt(0)===t&&(n=n.substring(1)),this._parts[e]=n,this.build(!r),this)}}o.decodePath=_("/","decodePathSegment"),o.decodeUrnPath=_(":","decodeUrnPathSegment"),o.recodePath=_("/","encodePathSegment","decode"),o.recodeUrnPath=_(":","encodeUrnPathSegment","decode"),o.encodeReserved=y("reserved","encode"),o.parse=function(e,t){var n
return t||(t={preventInvalidHostname:o.preventInvalidHostname}),(n=e.indexOf("#"))>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),(n=e.indexOf("?"))>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=o.parseAuthority(e,t)):(n=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(o.protocol_expression)?t.protocol=void 0:"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),e=o.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0)),t.path=e,t},o.parseHost=function(e,t){e||(e="")
var n,r,i=(e=e.replace(/\\/g,"/")).indexOf("/")
if(-1===i&&(i=e.length),"["===e.charAt(0))n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,i)||null,"/"===t.port&&(t.port=null)
else{var a=e.indexOf(":"),s=e.indexOf("/"),u=e.indexOf(":",a+1);-1!==u&&(-1===s||u<s)?(t.hostname=e.substring(0,i)||null,t.port=null):(r=e.substring(0,i).split(":"),t.hostname=r[0]||null,t.port=r[1]||null)}return t.hostname&&"/"!==e.substring(i).charAt(0)&&(i++,e="/"+e),t.preventInvalidHostname&&o.ensureValidHostname(t.hostname,t.protocol),t.port&&o.ensureValidPort(t.port),e.substring(i)||"/"},o.parseAuthority=function(e,t){return e=o.parseUserinfo(e,t),o.parseHost(e,t)},o.parseUserinfo=function(e,t){var n,r=e.indexOf("/"),i=e.lastIndexOf("@",r>-1?r:e.length-1)
return i>-1&&(-1===r||i<r)?(n=e.substring(0,i).split(":"),t.username=n[0]?o.decode(n[0]):null,n.shift(),t.password=n[0]?o.decode(n.join(":")):null,e=e.substring(i+1)):(t.username=null,t.password=null),e},o.parseQuery=function(e,t){if(!e)return{}
if(!(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"")))return{}
for(var n,r,i,a={},u=e.split("&"),c=u.length,f=0;f<c;f++)n=u[f].split("="),r=o.decodeQuery(n.shift(),t),i=n.length?o.decodeQuery(n.join("="),t):null,s.call(a,r)?("string"!=typeof a[r]&&null!==a[r]||(a[r]=[a[r]]),a[r].push(i)):a[r]=i
return a},o.build=function(e){var t=""
return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=o.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},o.buildHost=function(e){var t=""
return e.hostname?(o.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},o.buildAuthority=function(e){return o.buildUserinfo(e)+o.buildHost(e)},o.buildUserinfo=function(e){var t=""
return e.username&&(t+=o.encode(e.username)),e.password&&(t+=":"+o.encode(e.password)),t&&(t+="@"),t},o.buildQuery=function(e,t,n){var r,i,a,u,c=""
for(i in e)if(s.call(e,i)&&i)if(f(e[i]))for(r={},a=0,u=e[i].length;a<u;a++)void 0!==e[i][a]&&void 0===r[e[i][a]+""]&&(c+="&"+o.buildQueryParameter(i,e[i][a],n),!0!==t&&(r[e[i][a]+""]=!0))
else void 0!==e[i]&&(c+="&"+o.buildQueryParameter(i,e[i],n))
return c.substring(1)},o.buildQueryParameter=function(e,t,n){return o.encodeQuery(e,n)+(null!==t?"="+o.encodeQuery(t,n):"")},o.addQuery=function(e,t,n){if("object"==typeof t)for(var r in t)s.call(t,r)&&o.addQuery(e,r,t[r])
else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
if(void 0===e[t])return void(e[t]=n)
"string"==typeof e[t]&&(e[t]=[e[t]]),f(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},o.setQuery=function(e,t,n){if("object"==typeof t)for(var r in t)s.call(t,r)&&o.setQuery(e,r,t[r])
else{if("string"!=typeof t)throw new TypeError("URI.setQuery() accepts an object, string as the name parameter")
e[t]=void 0===n?null:n}},o.removeQuery=function(e,t,n){var r,i,a
if(f(t))for(r=0,i=t.length;r<i;r++)e[t[r]]=void 0
else if("RegExp"===c(t))for(a in e)t.test(a)&&(e[a]=void 0)
else if("object"==typeof t)for(a in t)s.call(t,a)&&o.removeQuery(e,a,t[a])
else{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")
void 0!==n?"RegExp"===c(n)?!f(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=l(e[t],n):e[t]!==String(n)||f(n)&&1!==n.length?f(e[t])&&(e[t]=l(e[t],n)):e[t]=void 0:e[t]=void 0}},o.hasQuery=function(e,t,n,r){switch(c(t)){case"String":break
case"RegExp":for(var i in e)if(s.call(e,i)&&t.test(i)&&(void 0===n||o.hasQuery(e,i,n)))return!0
return!1
case"Object":for(var a in t)if(s.call(t,a)&&!o.hasQuery(e,a,t[a]))return!1
return!0
default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(c(n)){case"Undefined":return t in e
case"Boolean":return n===Boolean(f(e[t])?e[t].length:e[t])
case"Function":return!!n(e[t],t,e)
case"Array":return!!f(e[t])&&(r?h:d)(e[t],n)
case"RegExp":return f(e[t])?!!r&&h(e[t],n):Boolean(e[t]&&e[t].match(n))
case"Number":n=String(n)
case"String":return f(e[t])?!!r&&h(e[t],n):e[t]===n
default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},o.joinPaths=function(){for(var e=[],t=[],n=0,r=0;r<arguments.length;r++){var i=new o(arguments[r])
e.push(i)
for(var a=i.segment(),s=0;s<a.length;s++)"string"==typeof a[s]&&t.push(a[s]),a[s]&&n++}if(!t.length||!n)return new o("")
var u=new o("").segment(t)
return""!==e[0].path()&&"/"!==e[0].path().slice(0,1)||u.path("/"+u.path()),u.normalize()},o.commonPath=function(e,t){var n,r=Math.min(e.length,t.length)
for(n=0;n<r;n++)if(e.charAt(n)!==t.charAt(n)){n--
break}return n<1?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},o.withinString=function(e,t,n){n||(n={})
var r=n.start||o.findUri.start,i=n.end||o.findUri.end,a=n.trim||o.findUri.trim,s=n.parens||o.findUri.parens,u=/[a-z0-9-]=["']?$/i
for(r.lastIndex=0;;){var c=r.exec(e)
if(!c)break
var f=c.index
if(n.ignoreHtml){var l=e.slice(Math.max(f-3,0),f)
if(l&&u.test(l))continue}for(var h=f+e.slice(f).search(i),d=e.slice(f,h),p=-1;;){var v=s.exec(d)
if(!v)break
var b=v.index+v[0].length
p=Math.max(p,b)}if(!((d=p>-1?d.slice(0,p)+d.slice(p).replace(a,""):d.replace(a,"")).length<=c[0].length||n.ignore&&n.ignore.test(d))){var g=t(d,f,h=f+d.length,e)
void 0!==g?(g=String(g),e=e.slice(0,f)+g+e.slice(h),r.lastIndex=f+g.length):r.lastIndex=h}}return r.lastIndex=0,e},o.ensureValidHostname=function(t,n){var r=!!t,i=!1
if(!!n&&(i=h(o.hostProtocols,n)),i&&!r)throw new TypeError("Hostname cannot be empty, if protocol is "+n)
if(t&&t.match(o.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available')
if(e.toASCII(t).match(o.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_]')}},o.ensureValidPort=function(e){if(e){var t=Number(e)
if(!(/^[0-9]+$/.test(t)&&t>0&&t<65536))throw new TypeError('Port "'+e+'" is not a valid port')}},o.noConflict=function(e){if(e){var t={URI:this.noConflict()}
return r.URITemplate&&"function"==typeof r.URITemplate.noConflict&&(t.URITemplate=r.URITemplate.noConflict()),r.IPv6&&"function"==typeof r.IPv6.noConflict&&(t.IPv6=r.IPv6.noConflict()),r.SecondLevelDomains&&"function"==typeof r.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=r.SecondLevelDomains.noConflict()),t}return r.URI===this&&(r.URI=i),this},a.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=o.build(this._parts),this._deferred_build=!1),this},a.clone=function(){return new o(this)},a.valueOf=a.toString=function(){return this.build(!1)._string},a.protocol=w("protocol"),a.username=w("username"),a.password=w("password"),a.hostname=w("hostname"),a.port=w("port"),a.query=x("query","?"),a.fragment=x("fragment","#"),a.search=function(e,t){var n=this.query(e,t)
return"string"==typeof n&&n.length?"?"+n:n},a.hash=function(e,t){var n=this.fragment(e,t)
return"string"==typeof n&&n.length?"#"+n:n},a.pathname=function(e,t){if(void 0===e||!0===e){var n=this._parts.path||(this._parts.hostname?"/":"")
return e?(this._parts.urn?o.decodeUrnPath:o.decodePath)(n):n}return this._parts.urn?this._parts.path=e?o.recodeUrnPath(e):"":this._parts.path=e?o.recodePath(e):"/",this.build(!t),this},a.path=a.pathname,a.href=function(e,t){var n
if(void 0===e)return this.toString()
this._string="",this._parts=o._parts()
var r=e instanceof o,i="object"==typeof e&&(e.hostname||e.path||e.pathname)
e.nodeName&&(e=e[o.getDomAttribute(e)]||"",i=!1)
if(!r&&i&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=o.parse(String(e),this._parts)
else{if(!r&&!i)throw new TypeError("invalid input")
var a=r?e._parts:e
for(n in a)"query"!==n&&s.call(this._parts,n)&&(this._parts[n]=a[n])
a.query&&this.query(a.query,!1)}return this.build(!t),this},a.is=function(e){var t=!1,r=!1,i=!1,a=!1,s=!1,u=!1,c=!1,f=!this._parts.urn
switch(this._parts.hostname&&(f=!1,r=o.ip4_expression.test(this._parts.hostname),i=o.ip6_expression.test(this._parts.hostname),s=(a=!(t=r||i))&&n&&n.has(this._parts.hostname),u=a&&o.idn_expression.test(this._parts.hostname),c=a&&o.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return f
case"absolute":return!f
case"domain":case"name":return a
case"sld":return s
case"ip":return t
case"ip4":case"ipv4":case"inet4":return r
case"ip6":case"ipv6":case"inet6":return i
case"idn":return u
case"url":return!this._parts.urn
case"urn":return!!this._parts.urn
case"punycode":return c}return null}
var k=a.protocol,S=a.port,E=a.hostname
a.protocol=function(e,t){if(e&&!(e=e.replace(/:(\/\/)?$/,"")).match(o.protocol_expression))throw new TypeError('Protocol "'+e+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]")
return k.call(this,e,t)},a.scheme=a.protocol,a.port=function(e,t){return this._parts.urn?void 0===e?"":this:(void 0!==e&&(0===e&&(e=null),e&&(":"===(e+="").charAt(0)&&(e=e.substring(1)),o.ensureValidPort(e))),S.call(this,e,t))},a.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0!==e){var n={preventInvalidHostname:this._parts.preventInvalidHostname}
if("/"!==o.parseHost(e,n))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
e=n.hostname,this._parts.preventInvalidHostname&&o.ensureValidHostname(e,this._parts.protocol)}return E.call(this,e,t)},a.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var n=this.protocol()
return this.authority()?(n?n+"://":"")+this.authority():""}var r=o(e)
return this.protocol(r.protocol()).authority(r.authority()).build(!t),this},a.host=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?o.buildHost(this._parts):""
if("/"!==o.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},a.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?o.buildAuthority(this._parts):""
if("/"!==o.parseAuthority(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},a.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var n=o.buildUserinfo(this._parts)
return n?n.substring(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),o.parseUserinfo(e,this._parts),this.build(!t),this},a.resource=function(e,t){var n
return void 0===e?this.path()+this.search()+this.hash():(n=o.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},a.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var n=this._parts.hostname.length-this.domain().length-1
return this._parts.hostname.substring(0,n)||""}var r=this._parts.hostname.length-this.domain().length,i=this._parts.hostname.substring(0,r),a=new RegExp("^"+u(i))
if(e&&"."!==e.charAt(e.length-1)&&(e+="."),-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons")
return e&&o.ensureValidHostname(e,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(a,e),this.build(!t),this},a.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var n=this._parts.hostname.match(/\./g)
if(n&&n.length<2)return this._parts.hostname
var r=this._parts.hostname.length-this.tld(t).length-1
return r=this._parts.hostname.lastIndexOf(".",r-1)+1,this._parts.hostname.substring(r)||""}if(!e)throw new TypeError("cannot set domain empty")
if(-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons")
if(o.ensureValidHostname(e,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=e
else{var i=new RegExp(u(this.domain())+"$")
this._parts.hostname=this._parts.hostname.replace(i,e)}return this.build(!t),this},a.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var r=this._parts.hostname.lastIndexOf("."),i=this._parts.hostname.substring(r+1)
return!0!==t&&n&&n.list[i.toLowerCase()]&&n.get(this._parts.hostname)||i}var o
if(!e)throw new TypeError("cannot set TLD empty")
if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]')
o=new RegExp(u(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host")
o=new RegExp(u(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},a.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return""
if("/"===this._parts.path)return"/"
var n=this._parts.path.length-this.filename().length-1,r=this._parts.path.substring(0,n)||(this._parts.hostname?"/":"")
return e?o.decodePath(r):r}var i=this._parts.path.length-this.filename().length,a=this._parts.path.substring(0,i),s=new RegExp("^"+u(a))
return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=o.recodePath(e),this._parts.path=this._parts.path.replace(s,e),this.build(!t),this},a.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("string"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return""
var n=this._parts.path.lastIndexOf("/"),r=this._parts.path.substring(n+1)
return e?o.decodePathSegment(r):r}var i=!1
"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(i=!0)
var a=new RegExp(u(this.filename())+"$")
return e=o.recodePath(e),this._parts.path=this._parts.path.replace(a,e),i?this.normalizePath(t):this.build(!t),this},a.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return""
var n,r,i=this.filename(),a=i.lastIndexOf(".")
return-1===a?"":(n=i.substring(a+1),r=/^[a-z0-9%]+$/i.test(n)?n:"",e?o.decodePathSegment(r):r)}"."===e.charAt(0)&&(e=e.substring(1))
var s,c=this.suffix()
if(c)s=e?new RegExp(u(c)+"$"):new RegExp(u("."+c)+"$")
else{if(!e)return this
this._parts.path+="."+o.recodePath(e)}return s&&(e=o.recodePath(e),this._parts.path=this._parts.path.replace(s,e)),this.build(!t),this},a.segment=function(e,t,n){var r=this._parts.urn?":":"/",i=this.path(),o="/"===i.substring(0,1),a=i.split(r)
if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'", must be 0-based integer')
if(o&&a.shift(),e<0&&(e=Math.max(a.length+e,0)),void 0===t)return void 0===e?a:a[e]
if(null===e||void 0===a[e])if(f(t)){a=[]
for(var s=0,u=t.length;s<u;s++)(t[s].length||a.length&&a[a.length-1].length)&&(a.length&&!a[a.length-1].length&&a.pop(),a.push(p(t[s])))}else(t||"string"==typeof t)&&(t=p(t),""===a[a.length-1]?a[a.length-1]=t:a.push(t))
else t?a[e]=p(t):a.splice(e,1)
return o&&a.unshift(""),this.path(a.join(r),n)},a.segmentCoded=function(e,t,n){var r,i,a
if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(f(r=this.segment(e,t,n)))for(i=0,a=r.length;i<a;i++)r[i]=o.decode(r[i])
else r=void 0!==r?o.decode(r):void 0
return r}if(f(t))for(i=0,a=t.length;i<a;i++)t[i]=o.encode(t[i])
else t="string"==typeof t||t instanceof String?o.encode(t):t
return this.segment(e,t,n)}
var A=a.query
return a.query=function(e,t){if(!0===e)return o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("function"==typeof e){var n=o.parseQuery(this._parts.query,this._parts.escapeQuerySpace),r=e.call(this,n)
return this._parts.query=o.buildQuery(r||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=o.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):A.call(this,e,t)},a.setQuery=function(e,t,n){var r=o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("string"==typeof e||e instanceof String)r[e]=void 0!==t?t:null
else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
for(var i in e)s.call(e,i)&&(r[i]=e[i])}return this._parts.query=o.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},a.addQuery=function(e,t,n){var r=o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return o.addQuery(r,e,void 0===t?null:t),this._parts.query=o.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},a.removeQuery=function(e,t,n){var r=o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return o.removeQuery(r,e,t),this._parts.query=o.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},a.hasQuery=function(e,t,n){var r=o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return o.hasQuery(r,e,t,n)},a.setSearch=a.setQuery,a.addSearch=a.addQuery,a.removeSearch=a.removeQuery,a.hasSearch=a.hasQuery,a.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},a.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},a.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},a.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===o.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},a.normalizePath=function(e){var t,n=this._parts.path
if(!n)return this
if(this._parts.urn)return this._parts.path=o.recodeUrnPath(this._parts.path),this.build(!e),this
if("/"===this._parts.path)return this
var r,i,a=""
for("/"!==(n=o.recodePath(n)).charAt(0)&&(t=!0,n="/"+n),"/.."!==n.slice(-3)&&"/."!==n.slice(-2)||(n+="/"),n=n.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),t&&(a=n.substring(1).match(/^(\.\.\/)+/)||"")&&(a=a[0]);-1!==(r=n.search(/\/\.\.(\/|$)/));)0!==r?(-1===(i=n.substring(0,r).lastIndexOf("/"))&&(i=r),n=n.substring(0,i)+n.substring(r+3)):n=n.substring(3)
return t&&this.is("relative")&&(n=a+n.substring(1)),this._parts.path=n,this.build(!e),this},a.normalizePathname=a.normalizePath,a.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(o.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},a.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},a.normalizeSearch=a.normalizeQuery,a.normalizeHash=a.normalizeFragment,a.iso8859=function(){var e=o.encode,t=o.decode
o.encode=escape,o.decode=decodeURIComponent
try{this.normalize()}finally{o.encode=e,o.decode=t}return this},a.unicode=function(){var e=o.encode,t=o.decode
o.encode=b,o.decode=unescape
try{this.normalize()}finally{o.encode=e,o.decode=t}return this},a.readable=function(){var t=this.clone()
t.username("").password("").normalize()
var n=""
if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var r="",i=0,a=t._parts.query.split("&"),s=a.length;i<s;i++){var u=(a[i]||"").split("=")
r+="&"+o.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==u[1]&&(r+="="+o.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+r.substring(1)}return n+=o.decodeQuery(t.hash(),!0)},a.absoluteTo=function(e){var t,n,r,i=this.clone(),a=["protocol","username","password","hostname","port"]
if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(e instanceof o||(e=new o(e)),i._parts.protocol)return i
if(i._parts.protocol=e._parts.protocol,this._parts.hostname)return i
for(n=0;r=a[n];n++)i._parts[r]=e._parts[r]
return i._parts.path?(".."===i._parts.path.substring(-2)&&(i._parts.path+="/"),"/"!==i.path().charAt(0)&&(t=(t=e.directory())||(0===e.path().indexOf("/")?"/":""),i._parts.path=(t?t+"/":"")+i._parts.path,i.normalizePath())):(i._parts.path=e._parts.path,i._parts.query||(i._parts.query=e._parts.query)),i.build(),i},a.relativeTo=function(e){var t,n,r,i,a,s=this.clone().normalize()
if(s._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(e=new o(e).normalize(),t=s._parts,n=e._parts,i=s.path(),a=e.path(),"/"!==i.charAt(0))throw new Error("URI is already relative")
if("/"!==a.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI")
if(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return s.build()
if(null!==t.protocol||null!==t.username||null!==t.password)return s.build()
if(t.hostname!==n.hostname||t.port!==n.port)return s.build()
if(t.hostname=null,t.port=null,i===a)return t.path="",s.build()
if(!(r=o.commonPath(i,a)))return s.build()
var u=n.path.substring(r.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../")
return t.path=u+t.path.substring(r.length)||"./",s.build()},a.equals=function(e){var t,n,r,i,a,u=this.clone(),c=new o(e),l={}
if(u.normalize(),c.normalize(),u.toString()===c.toString())return!0
if(r=u.query(),i=c.query(),u.query(""),c.query(""),u.toString()!==c.toString())return!1
if(r.length!==i.length)return!1
for(a in t=o.parseQuery(r,this._parts.escapeQuerySpace),n=o.parseQuery(i,this._parts.escapeQuerySpace),t)if(s.call(t,a)){if(f(t[a])){if(!d(t[a],n[a]))return!1}else if(t[a]!==n[a])return!1
l[a]=!0}for(a in n)if(s.call(n,a)&&!l[a])return!1
return!0},a.preventInvalidHostname=function(e){return this._parts.preventInvalidHostname=!!e,this},a.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},a.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},o})},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(49)),o=r(n(9)),a={read:function(e){return e.readInt32BE()},write:function(e,t){if(!i(e))throw new Error("XDR Write Error: not a number")
if(Math.floor(e)!==e)throw new Error("XDR Write Error: not an integer")
t.writeInt32BE(e)},isValid:function(e){return!!i(e)&&(Math.floor(e)===e&&(e>=a.MIN_VALUE&&e<=a.MAX_VALUE))}}
t.Int=a,a.MAX_VALUE=Math.pow(2,31)-1,a.MIN_VALUE=-Math.pow(2,31),o(a)},function(e,t,n){var r=n(3).Buffer
function i(e,t){this._block=r.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}i.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=r.from(e,t))
for(var n=this._block,i=this._blockSize,o=e.length,a=this._len,s=0;s<o;){for(var u=a%i,c=Math.min(o-s,i-u),f=0;f<c;f++)n[u+f]=e[s+f]
s+=c,(a+=c)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(e){var t=this._len%this._blockSize
this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var n=8*this._len
if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4)
else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return e?o.toString(e):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=i},function(e,t,n){"use strict";(function(t,r){var i=n(3).Buffer,o=t.crypto||t.msCrypto
o&&o.getRandomValues?e.exports=function(e,n){if(e>65536)throw new Error("requested too many random bytes")
var a=new t.Uint8Array(e)
e>0&&o.getRandomValues(a)
var s=i.from(a.buffer)
if("function"==typeof n)return r.nextTick(function(){n(null,s)})
return s}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}).call(this,n(5),n(14))},function(e,t,n){var r=n(88),i=n(128)
e.exports=function(e,t,n,o){var a=!n
n||(n={})
for(var s=-1,u=t.length;++s<u;){var c=t[s],f=o?o(n[c],e[c],c,n,e):void 0
void 0===f&&(f=e[c]),a?i(n,c,f):r(n,c,f)}return n}},function(e,t,n){var r=n(86),i=n(91)
e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},function(e,t,n){(t=e.exports=n(148)).Stream=t,t.Readable=t,t.Writable=n(102),t.Duplex=n(32),t.Transform=n(151),t.PassThrough=n(304)},function(e,t,n){(function(e){function n(e){return Object.prototype.toString.call(e)}t.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===n(e)},t.isBoolean=function(e){return"boolean"==typeof e},t.isNull=function(e){return null===e},t.isNullOrUndefined=function(e){return null==e},t.isNumber=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=function(e){return void 0===e},t.isRegExp=function(e){return"[object RegExp]"===n(e)},t.isObject=function(e){return"object"==typeof e&&null!==e},t.isDate=function(e){return"[object Date]"===n(e)},t.isError=function(e){return"[object Error]"===n(e)||e instanceof Error},t.isFunction=function(e){return"function"==typeof e},t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=e.isBuffer}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(8))&&r.__esModule?r.default:r
t.xdr=i,t.hash=n(51).hash
var o=n(172)
t.sign=o.sign,t.verify=o.verify,t.FastSigning=o.FastSigning,t.Keypair=n(17).Keypair
var a=n(28)
t.UnsignedHyper=a.UnsignedHyper,t.Hyper=a.Hyper,t.Transaction=n(175).Transaction
var s=n(493)
t.TransactionBuilder=s.TransactionBuilder,t.TimeoutInfinite=s.TimeoutInfinite,t.Asset=n(176).Asset
var u=n(114)
t.Operation=u.Operation,t.AuthRequiredFlag=u.AuthRequiredFlag,t.AuthRevocableFlag=u.AuthRevocableFlag,t.AuthImmutableFlag=u.AuthImmutableFlag,function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i)
o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}}(t,function(e){return e&&e.__esModule?e:{default:e}}(n(116))),t.Account=n(210).Account
var c=n(113)
t.Network=c.Network,t.Networks=c.Networks,t.StrKey=n(18).StrKey,t.default=e.exports},function(e,t,n){var r=n(25),i=n(21),o="[object Number]"
e.exports=function(e){return"number"==typeof e||i(e)&&r(e)==o}},function(e,t,n){var r=n(72),i=1/0
e.exports=function(e){if("string"==typeof e||r(e))return e
var t=e+""
return"0"==t&&1/e==-i?"-0":t}},function(e,t,n){"use strict"
t.hash=function(e){var t=new r
return t.update(e,"utf8"),t.digest()},Object.defineProperty(t,"__esModule",{value:!0})
var r=n(52).sha256},function(e,t,n){(t=e.exports=function(e){e=e.toLowerCase()
var n=t[e]
if(!n)throw new Error(e+" is not supported (we accept pull requests)")
return new n}).sha=n(373),t.sha1=n(374),t.sha224=n(375),t.sha256=n(170),t.sha384=n(376),t.sha512=n(171)},function(e,t,n){"use strict"
var r=n(2),i=n(117),o=n(119),a=n(52),s=n(29)
function u(e){s.call(this,"digest"),this._hash=e}r(u,s),u.prototype._update=function(e){this._hash.update(e)},u.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return"md5"===(e=e.toLowerCase())?new i:"rmd160"===e||"ripemd160"===e?new o:new u(a(e))}},function(e,t,n){(function(t){e.exports=function(e,n){for(var r=Math.min(e.length,n.length),i=new t(r),o=0;o<r;++o)i[o]=e[o]^n[o]
return i}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
var r=n(24),i=n(19)
function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}t.BlockHash=o,o.prototype.update=function(e,t){if(e=r.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var n=(e=this.pending).length%this._delta8
this.pending=e.slice(e.length-n,e.length),0===this.pending.length&&(this.pending=null),e=r.join32(e,0,e.length-n,this.endian)
for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},o.prototype.digest=function(e){return this.update(this._pad()),i(null===this.pending),this._digest(e)},o.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,r=new Array(n+this.padLength)
r[0]=128
for(var i=1;i<n;i++)r[i]=0
if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)r[i++]=0
r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=e>>>24&255,r[i++]=e>>>16&255,r[i++]=e>>>8&255,r[i++]=255&e}else for(r[i++]=255&e,r[i++]=e>>>8&255,r[i++]=e>>>16&255,r[i++]=e>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,o=8;o<this.padLength;o++)r[i++]=0
return r}},function(e,t,n){var r=t
r.bignum=n(6),r.define=n(474).define,r.base=n(57),r.constants=n(203),r.decoders=n(480),r.encoders=n(482)},function(e,t,n){var r=t
r.Reporter=n(477).Reporter,r.DecoderBuffer=n(202).DecoderBuffer,r.EncoderBuffer=n(202).EncoderBuffer,r.Node=n(478)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0
var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(59),a=(r=o)&&r.__esModule?r:{default:r}
var s={allowHttp:!1,timeout:0},u=(0,a.default)(s),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"setAllowHttp",value:function(e){u.allowHttp=e}},{key:"setTimeout",value:function(e){u.timeout=e}},{key:"isAllowHttp",value:function(){return(0,a.default)(u.allowHttp)}},{key:"getTimeout",value:function(){return(0,a.default)(u.timeout)}},{key:"setDefault",value:function(){u=(0,a.default)(s)}}]),e}()
t.Config=c},function(e,t,n){var r=n(218),i=4
e.exports=function(e){return r(e,i)}},function(e,t,n){var r=n(219),i=n(220),o=n(221),a=n(222),s=n(223)
function u(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,n){var r=n(62)
e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n
return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(31)(Object,"create")
e.exports=r},function(e,t,n){var r=n(243)
e.exports=function(e,t){var n=e.__data__
return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/
e.exports=function(e,t){var i=typeof e
return!!(t=null==t?n:t)&&("number"==i||"symbol"!=i&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,n){var r=n(130),i=n(254),o=n(45)
e.exports=function(e){return o(e)?r(e,!0):i(e)}},function(e,t,n){var r=n(262),i=n(85),o=n(263),a=n(264),s=n(265),u=n(25),c=n(126),f=c(r),l=c(i),h=c(o),d=c(a),p=c(s),v=u;(r&&"[object DataView]"!=v(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=v(new i)||o&&"[object Promise]"!=v(o.resolve())||a&&"[object Set]"!=v(new a)||s&&"[object WeakMap]"!=v(new s))&&(v=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?c(n):""
if(r)switch(r){case f:return"[object DataView]"
case l:return"[object Map]"
case h:return"[object Promise]"
case d:return"[object Set]"
case p:return"[object WeakMap]"}return t}),e.exports=v},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict";(function(t){!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports={nextTick:function(e,n,r,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function')
var o,a,s=arguments.length
switch(s){case 0:case 1:return t.nextTick(e)
case 2:return t.nextTick(function(){e.call(null,n)})
case 3:return t.nextTick(function(){e.call(null,n,r)})
case 4:return t.nextTick(function(){e.call(null,n,r,i)})
default:for(o=new Array(s-1),a=0;a<o.length;)o[a++]=arguments[a]
return t.nextTick(function(){e.apply(null,o)})}}}:e.exports=t}).call(this,n(14))},function(e,t,n){"use strict"
t.calculatePadding=function(e){switch(e%4){case 0:return 0
case 1:return 3
case 2:return 2
case 3:return 1}},t.slicePadding=function(e,t){var n=e.slice(t)
if(!0!==i(n.buffer(),function(e){return 0===e}))throw new Error("XDR Read Error: invalid padding")},Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(104))&&r.__esModule?r.default:r},function(e,t,n){var r=n(7),i=n(106),o=n(329),a=n(107)
e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(a(e))}},function(e,t,n){var r=n(25),i=n(21),o="[object Symbol]"
e.exports=function(e){return"symbol"==typeof e||i(e)&&r(e)==o}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(49)),o=r(n(9)),a={read:function(e){return e.readUInt32BE()},write:function(e,t){if(!i(e))throw new Error("XDR Write Error: not a number")
if(Math.floor(e)!==e)throw new Error("XDR Write Error: not an integer")
if(e<0)throw new Error("XDR Write Error: negative number "+e)
t.writeUInt32BE(e)},isValid:function(e){return!!i(e)&&(Math.floor(e)===e&&(e>=a.MIN_VALUE&&e<=a.MAX_VALUE))}}
t.UnsignedInt=a,a.MAX_VALUE=Math.pow(2,32)-1,a.MIN_VALUE=0,o(a)},function(e,t,n){var r=n(109),i=n(154),o=n(362),a=n(7)
e.exports=function(e,t){return(a(e)?r:o)(e,i(t,3))}},function(e,t,n){var r=n(3).Buffer
function i(e){r.isBuffer(e)||(e=r.from(e))
for(var t=e.length/4|0,n=new Array(t),i=0;i<t;i++)n[i]=e.readUInt32BE(4*i)
return n}function o(e){for(;0<e.length;e++)e[0]=0}function a(e,t,n,r,i){for(var o,a,s,u,c=n[0],f=n[1],l=n[2],h=n[3],d=e[0]^t[0],p=e[1]^t[1],v=e[2]^t[2],b=e[3]^t[3],g=4,m=1;m<i;m++)o=c[d>>>24]^f[p>>>16&255]^l[v>>>8&255]^h[255&b]^t[g++],a=c[p>>>24]^f[v>>>16&255]^l[b>>>8&255]^h[255&d]^t[g++],s=c[v>>>24]^f[b>>>16&255]^l[d>>>8&255]^h[255&p]^t[g++],u=c[b>>>24]^f[d>>>16&255]^l[p>>>8&255]^h[255&v]^t[g++],d=o,p=a,v=s,b=u
return o=(r[d>>>24]<<24|r[p>>>16&255]<<16|r[v>>>8&255]<<8|r[255&b])^t[g++],a=(r[p>>>24]<<24|r[v>>>16&255]<<16|r[b>>>8&255]<<8|r[255&d])^t[g++],s=(r[v>>>24]<<24|r[b>>>16&255]<<16|r[d>>>8&255]<<8|r[255&p])^t[g++],u=(r[b>>>24]<<24|r[d>>>16&255]<<16|r[p>>>8&255]<<8|r[255&v])^t[g++],[o>>>=0,a>>>=0,s>>>=0,u>>>=0]}var s=[0,1,2,4,8,16,32,64,128,27,54],u=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283
for(var n=[],r=[],i=[[],[],[],[]],o=[[],[],[],[]],a=0,s=0,u=0;u<256;++u){var c=s^s<<1^s<<2^s<<3^s<<4
c=c>>>8^255&c^99,n[a]=c,r[c]=a
var f=e[a],l=e[f],h=e[l],d=257*e[c]^16843008*c
i[0][a]=d<<24|d>>>8,i[1][a]=d<<16|d>>>16,i[2][a]=d<<8|d>>>24,i[3][a]=d,d=16843009*h^65537*l^257*f^16843008*a,o[0][c]=d<<24|d>>>8,o[1][c]=d<<16|d>>>16,o[2][c]=d<<8|d>>>24,o[3][c]=d,0===a?a=s=1:(a=f^e[e[e[h^f]]],s^=e[e[s]])}return{SBOX:n,INV_SBOX:r,SUB_MIX:i,INV_SUB_MIX:o}}()
function c(e){this._key=i(e),this._reset()}c.blockSize=16,c.keySize=32,c.prototype.blockSize=c.blockSize,c.prototype.keySize=c.keySize,c.prototype._reset=function(){for(var e=this._key,t=e.length,n=t+6,r=4*(n+1),i=[],o=0;o<t;o++)i[o]=e[o]
for(o=t;o<r;o++){var a=i[o-1]
o%t==0?(a=a<<8|a>>>24,a=u.SBOX[a>>>24]<<24|u.SBOX[a>>>16&255]<<16|u.SBOX[a>>>8&255]<<8|u.SBOX[255&a],a^=s[o/t|0]<<24):t>6&&o%t==4&&(a=u.SBOX[a>>>24]<<24|u.SBOX[a>>>16&255]<<16|u.SBOX[a>>>8&255]<<8|u.SBOX[255&a]),i[o]=i[o-t]^a}for(var c=[],f=0;f<r;f++){var l=r-f,h=i[l-(f%4?0:4)]
c[f]=f<4||l<=4?h:u.INV_SUB_MIX[0][u.SBOX[h>>>24]]^u.INV_SUB_MIX[1][u.SBOX[h>>>16&255]]^u.INV_SUB_MIX[2][u.SBOX[h>>>8&255]]^u.INV_SUB_MIX[3][u.SBOX[255&h]]}this._nRounds=n,this._keySchedule=i,this._invKeySchedule=c},c.prototype.encryptBlockRaw=function(e){return a(e=i(e),this._keySchedule,u.SUB_MIX,u.SBOX,this._nRounds)},c.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),n=r.allocUnsafe(16)
return n.writeUInt32BE(t[0],0),n.writeUInt32BE(t[1],4),n.writeUInt32BE(t[2],8),n.writeUInt32BE(t[3],12),n},c.prototype.decryptBlock=function(e){var t=(e=i(e))[1]
e[1]=e[3],e[3]=t
var n=a(e,this._invKeySchedule,u.INV_SUB_MIX,u.INV_SBOX,this._nRounds),o=r.allocUnsafe(16)
return o.writeUInt32BE(n[0],0),o.writeUInt32BE(n[3],4),o.writeUInt32BE(n[2],8),o.writeUInt32BE(n[1],12),o},c.prototype.scrub=function(){o(this._keySchedule),o(this._invKeySchedule),o(this._key)},e.exports.AES=c},function(e,t,n){var r=n(3).Buffer,i=n(117)
e.exports=function(e,t,n,o){if(r.isBuffer(e)||(e=r.from(e,"binary")),t&&(r.isBuffer(t)||(t=r.from(t,"binary")),8!==t.length))throw new RangeError("salt should be Buffer with 8 byte length")
for(var a=n/8,s=r.alloc(a),u=r.alloc(o||0),c=r.alloc(0);a>0||o>0;){var f=new i
f.update(c),f.update(e),t&&f.update(t),c=f.digest()
var l=0
if(a>0){var h=s.length-a
l=Math.min(a,c.length),c.copy(s,h,0,l),a-=l}if(l<c.length&&o>0){var d=u.length-o,p=Math.min(o,c.length-l)
c.copy(u,d,l,l+p),o-=p}}return c.fill(0),{key:s,iv:u}}},function(e,t,n){"use strict"
var r=t
r.base=n(454),r.short=n(455),r.mont=n(456),r.edwards=n(457)},function(e,t,n){var r=n(473),i=n(485),o=n(486),a=n(121),s=n(186),u=n(3).Buffer
function c(e){var t
"object"!=typeof e||u.isBuffer(e)||(t=e.passphrase,e=e.key),"string"==typeof e&&(e=u.from(e))
var n,c,f=o(e,t),l=f.tag,h=f.data
switch(l){case"CERTIFICATE":c=r.certificate.decode(h,"der").tbsCertificate.subjectPublicKeyInfo
case"PUBLIC KEY":switch(c||(c=r.PublicKey.decode(h,"der")),n=c.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return r.RSAPublicKey.decode(c.subjectPublicKey.data,"der")
case"1.2.840.10045.2.1":return c.subjectPrivateKey=c.subjectPublicKey,{type:"ec",data:c}
case"1.2.840.10040.4.1":return c.algorithm.params.pub_key=r.DSAparam.decode(c.subjectPublicKey.data,"der"),{type:"dsa",data:c.algorithm.params}
default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+l)
case"ENCRYPTED PRIVATE KEY":h=function(e,t){var n=e.algorithm.decrypt.kde.kdeparams.salt,r=parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=i[e.algorithm.decrypt.cipher.algo.join(".")],c=e.algorithm.decrypt.cipher.iv,f=e.subjectPrivateKey,l=parseInt(o.split("-")[1],10)/8,h=s.pbkdf2Sync(t,n,r,l,"sha1"),d=a.createDecipheriv(o,h,c),p=[]
return p.push(d.update(f)),p.push(d.final()),u.concat(p)}(h=r.EncryptedPrivateKey.decode(h,"der"),t)
case"PRIVATE KEY":switch(n=(c=r.PrivateKey.decode(h,"der")).algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return r.RSAPrivateKey.decode(c.subjectPrivateKey,"der")
case"1.2.840.10045.2.1":return{curve:c.algorithm.curve,privateKey:r.ECPrivateKey.decode(c.subjectPrivateKey,"der").privateKey}
case"1.2.840.10040.4.1":return c.algorithm.params.priv_key=r.DSAparam.decode(c.subjectPrivateKey,"der"),{type:"dsa",params:c.algorithm.params}
default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+l)
case"RSA PUBLIC KEY":return r.RSAPublicKey.decode(h,"der")
case"RSA PRIVATE KEY":return r.RSAPrivateKey.decode(h,"der")
case"DSA PRIVATE KEY":return{type:"dsa",params:r.DSAPrivateKey.decode(h,"der")}
case"EC PRIVATE KEY":return{curve:(h=r.ECPrivateKey.decode(h,"der")).parameters.value,privateKey:h.privateKey}
default:throw new Error("unknown key type "+l)}}e.exports=c,c.signature=r.signature},function(e,t,n){"use strict"
function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]}
r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return p})
var i="undefined"!=typeof document
if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")
var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},l=null,h="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
function p(e,t,n,i){c=n,l=i||{}
var a=r(e,t)
return v(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,n.push(u)}t?v(a=r(e,t)):a=[]
for(i=0;i<n.length;i++){var u
if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]()
delete o[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id]
if(r){r.refs++
for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i])
for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]))
r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[]
for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]))
o[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style")
return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+h+'~="'+e.id+'"]')
if(r){if(c)return f
r.parentNode.removeChild(r)}if(d){var i=u++
r=s||(s=b()),t=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=b(),t=function(e,t){var n=t.css,r=t.media,i=t.sourceMap
r&&e.setAttribute("media",r)
l.ssrId&&e.setAttribute(h,t.id)
i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
if(e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)}
return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return
t(e=r)}else n()}}var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")})
function _(e,t,n,r){var i=n?"":r.css
if(e.styleSheet)e.styleSheet.cssText=y(t,i)
else{var o=document.createTextNode(i),a=e.childNodes
a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t,n){var r=n(517)
"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("54f0728e",r,!1,{})},function(e,t,n){var r=n(540)
"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("da9731b6",r,!1,{})},function(e,t,n){var r=n(546)
"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("2cec2a14",r,!1,{})},function(e,t,n){var r=n(548)
"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(79).default)("6e41dd73",r,!1,{})},function(e,t,n){var r=n(60),i=n(224),o=n(225),a=n(226),s=n(227),u=n(228)
function c(e){var t=this.__data__=new r(e)
this.size=t.size}c.prototype.clear=i,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=s,c.prototype.set=u,e.exports=c},function(e,t,n){var r=n(31)(n(20),"Map")
e.exports=r},function(e,t,n){var r=n(25),i=n(26),o="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]"
e.exports=function(e){if(!i(e))return!1
var t=r(e)
return t==a||t==s||t==o||t==u}},function(e,t,n){var r=n(235),i=n(242),o=n(244),a=n(245),s=n(246)
function u(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,n){var r=n(128),i=n(62),o=Object.prototype.hasOwnProperty
e.exports=function(e,t,n){var a=e[t]
o.call(e,t)&&i(a,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(248),i=n(21),o=Object.prototype,a=o.hasOwnProperty,s=o.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return i(e)&&a.call(e,"callee")&&!s.call(e,"callee")}
e.exports=u},function(e,t,n){(function(e){var r=n(20),i=n(249),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=a&&a.exports===o?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||i
e.exports=u}).call(this,n(39)(e))},function(e,t){var n=9007199254740991
e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var r=n(125),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types
return e||a&&a.binding&&a.binding("util")}catch(e){}}()
e.exports=s}).call(this,n(39)(e))},function(e,t){var n=Object.prototype
e.exports=function(e){var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||n)}},function(e,t,n){var r=n(259),i=n(134),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(e){return null==e?[]:(e=Object(e),r(a(e),function(t){return o.call(e,t)}))}:i
e.exports=s},function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n]
return e}},function(e,t,n){var r=n(133)(Object.getPrototypeOf,Object)
e.exports=r},function(e,t,n){var r=n(138)
e.exports=function(e){var t=new e.constructor(e.byteLength)
return new r(t).set(new r(e)),t}},function(e,t,n){var r=n(280),i=n(282)(r)
e.exports=i},function(e,t,n){var r=n(68)
e.exports=function(e){return"function"==typeof e?e:r}},function(e,t,n){"use strict"
var r=n(291),i=n(292)
function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=y,t.resolve=function(e,t){return y(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?y(e,!1,!0).resolveObject(t):t},t.format=function(e){i.isString(e)&&(e=y(e))
return e instanceof o?e.format():o.prototype.format.call(e)},t.Url=o
var a=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),f=["'"].concat(c),l=["%","/","?",";","#"].concat(f),h=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},b={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},m=n(293)
function y(e,t,n){if(e&&i.isObject(e)&&e instanceof o)return e
var r=new o
return r.parse(e,t,n),r}o.prototype.parse=function(e,t,n){if(!i.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e)
var o=e.indexOf("?"),s=-1!==o&&o<e.indexOf("#")?"?":"#",c=e.split(s)
c[0]=c[0].replace(/\\/g,"/")
var y=e=c.join(s)
if(y=y.trim(),!n&&1===e.split("#").length){var _=u.exec(y)
if(_)return this.path=y,this.href=y,this.pathname=_[1],_[2]?(this.search=_[2],this.query=t?m.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=a.exec(y)
if(w){var x=(w=w[0]).toLowerCase()
this.protocol=x,y=y.substr(w.length)}if(n||w||y.match(/^\/\/[^@\/]+@[^@\/]+/)){var k="//"===y.substr(0,2)
!k||w&&b[w]||(y=y.substr(2),this.slashes=!0)}if(!b[w]&&(k||w&&!g[w])){for(var S,E,A=-1,O=0;O<h.length;O++){-1!==(T=y.indexOf(h[O]))&&(-1===A||T<A)&&(A=T)}-1!==(E=-1===A?y.lastIndexOf("@"):y.lastIndexOf("@",A))&&(S=y.slice(0,E),y=y.slice(E+1),this.auth=decodeURIComponent(S)),A=-1
for(O=0;O<l.length;O++){var T;-1!==(T=y.indexOf(l[O]))&&(-1===A||T<A)&&(A=T)}-1===A&&(A=y.length),this.host=y.slice(0,A),y=y.slice(A),this.parseHost(),this.hostname=this.hostname||""
var M="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!M)for(var P=this.hostname.split(/\./),I=(O=0,P.length);O<I;O++){var C=P[O]
if(C&&!C.match(d)){for(var R="",B=0,j=C.length;B<j;B++)C.charCodeAt(B)>127?R+="x":R+=C[B]
if(!R.match(d)){var N=P.slice(0,O),L=P.slice(O+1),U=C.match(p)
U&&(N.push(U[1]),L.unshift(U[2])),L.length&&(y="/"+L.join(".")+y),this.hostname=N.join(".")
break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),M||(this.hostname=r.toASCII(this.hostname))
var D=this.port?":"+this.port:"",z=this.hostname||""
this.host=z+D,this.href+=this.host,M&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==y[0]&&(y="/"+y))}if(!v[x])for(O=0,I=f.length;O<I;O++){var q=f[O]
if(-1!==y.indexOf(q)){var F=encodeURIComponent(q)
F===q&&(F=escape(q)),y=y.split(q).join(F)}}var K=y.indexOf("#");-1!==K&&(this.hash=y.substr(K),y=y.slice(0,K))
var H=y.indexOf("?")
if(-1!==H?(this.search=y.substr(H),this.query=y.substr(H+1),t&&(this.query=m.parse(this.query)),y=y.slice(0,H)):t&&(this.search="",this.query={}),y&&(this.pathname=y),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){D=this.pathname||""
var V=this.search||""
this.path=D+V}return this.href=this.format(),this},o.prototype.format=function(){var e=this.auth||""
e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@")
var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,a=""
this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&i.isObject(this.query)&&Object.keys(this.query).length&&(a=m.stringify(this.query))
var s=this.search||a&&"?"+a||""
return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||g[t])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),t+o+(n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(s=s.replace("#","%23"))+r},o.prototype.resolve=function(e){return this.resolveObject(y(e,!1,!0)).format()},o.prototype.resolveObject=function(e){if(i.isString(e)){var t=new o
t.parse(e,!1,!0),e=t}for(var n=new o,r=Object.keys(this),a=0;a<r.length;a++){var s=r[a]
n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n
if(e.slashes&&!e.protocol){for(var u=Object.keys(e),c=0;c<u.length;c++){var f=u[c]
"protocol"!==f&&(n[f]=e[f])}return g[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!g[e.protocol]){for(var l=Object.keys(e),h=0;h<l.length;h++){var d=l[h]
n[d]=e[d]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||b[e.protocol])n.pathname=e.pathname
else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),n.pathname=p.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var v=n.pathname||"",m=n.search||""
n.path=v+m}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var y=n.pathname&&"/"===n.pathname.charAt(0),_=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=_||y||n.host&&e.pathname,x=w,k=n.pathname&&n.pathname.split("/")||[],S=(p=e.pathname&&e.pathname.split("/")||[],n.protocol&&!g[n.protocol])
if(S&&(n.hostname="",n.port=null,n.host&&(""===k[0]?k[0]=n.host:k.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),w=w&&(""===p[0]||""===k[0])),_)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,k=p
else if(p.length)k||(k=[]),k.pop(),k=k.concat(p),n.search=e.search,n.query=e.query
else if(!i.isNullOrUndefined(e.search)){if(S)n.hostname=n.host=k.shift(),(M=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=M.shift(),n.host=n.hostname=M.shift())
return n.search=e.search,n.query=e.query,i.isNull(n.pathname)&&i.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!k.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n
for(var E=k.slice(-1)[0],A=(n.host||e.host||k.length>1)&&("."===E||".."===E)||""===E,O=0,T=k.length;T>=0;T--)"."===(E=k[T])?k.splice(T,1):".."===E?(k.splice(T,1),O++):O&&(k.splice(T,1),O--)
if(!w&&!x)for(;O--;O)k.unshift("..")
!w||""===k[0]||k[0]&&"/"===k[0].charAt(0)||k.unshift(""),A&&"/"!==k.join("/").substr(-1)&&k.push("")
var M,P=""===k[0]||k[0]&&"/"===k[0].charAt(0)
S&&(n.hostname=n.host=P?"":k.length?k.shift():"",(M=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=M.shift(),n.host=n.hostname=M.shift()))
return(w=w||n.host&&k.length)&&!P&&k.unshift(""),k.length?n.pathname=k.join("/"):(n.pathname=null,n.path=null),i.isNull(n.pathname)&&i.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},o.prototype.parseHost=function(){var e=this.host,t=s.exec(e)
t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t,n){"use strict";(function(t,r,i){var o=n(69)
function a(e){var t=this
this.next=null,this.entry=null,this.finish=function(){!function(e,t,n){var r=e.entry
e.entry=null
for(;r;){var i=r.callback
t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}e.exports=m
var s,u=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?r:o.nextTick
m.WritableState=g
var c=n(47)
c.inherits=n(2)
var f={deprecate:n(303)},l=n(149),h=n(3).Buffer,d=i.Uint8Array||function(){}
var p,v=n(150)
function b(){}function g(e,t){s=s||n(32),e=e||{}
var r=t instanceof s
this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.writableObjectMode)
var i=e.highWaterMark,c=e.writableHighWaterMark,f=this.objectMode?16:16384
this.highWaterMark=i||0===i?i:r&&(c||0===c)?c:f,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1
var l=!1===e.decodeStrings
this.decodeStrings=!l,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var n=e._writableState,r=n.sync,i=n.writecb
if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(n),t)!function(e,t,n,r,i){--t.pendingcb,n?(o.nextTick(i,r),o.nextTick(S,e,t),e._writableState.errorEmitted=!0,e.emit("error",r)):(i(r),e._writableState.errorEmitted=!0,e.emit("error",r),S(e,t))}(e,n,r,t,i)
else{var a=x(n)
a||n.corked||n.bufferProcessing||!n.bufferedRequest||w(e,n),r?u(_,e,n,a,i):_(e,n,a,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new a(this)}function m(e){if(s=s||n(32),!(p.call(m,this)||this instanceof s))return new m(e)
this._writableState=new g(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),l.call(this)}function y(e,t,n,r,i,o,a){t.writelen=r,t.writecb=a,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function _(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),S(e,t)}function w(e,t){t.bufferProcessing=!0
var n=t.bufferedRequest
if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,i=new Array(r),o=t.corkedRequestsFree
o.entry=n
for(var s=0,u=!0;n;)i[s]=n,n.isBuf||(u=!1),n=n.next,s+=1
i.allBuffers=u,y(e,t,!0,t.length,i,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new a(t),t.bufferedRequestCount=0}else{for(;n;){var c=n.chunk,f=n.encoding,l=n.callback
if(y(e,t,!1,t.objectMode?1:c.length,c,f,l),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function x(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(n){t.pendingcb--,n&&e.emit("error",n),t.prefinished=!0,e.emit("prefinish"),S(e,t)})}function S(e,t){var n=x(t)
return n&&(!function(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,o.nextTick(k,e,t)):(t.prefinished=!0,e.emit("prefinish")))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),n}c.inherits(m,l),g.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next
return t},function(){try{Object.defineProperty(g.prototype,"buffer",{get:f.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(p=Function.prototype[Symbol.hasInstance],Object.defineProperty(m,Symbol.hasInstance,{value:function(e){return!!p.call(this,e)||this===m&&(e&&e._writableState instanceof g)}})):p=function(e){return e instanceof this},m.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},m.prototype.write=function(e,t,n){var r,i=this._writableState,a=!1,s=!i.objectMode&&(r=e,h.isBuffer(r)||r instanceof d)
return s&&!h.isBuffer(e)&&(e=function(e){return h.from(e)}(e)),"function"==typeof t&&(n=t,t=null),s?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof n&&(n=b),i.ended?function(e,t){var n=new Error("write after end")
e.emit("error",n),o.nextTick(t,n)}(this,n):(s||function(e,t,n,r){var i=!0,a=!1
return null===n?a=new TypeError("May not write null values to stream"):"string"==typeof n||void 0===n||t.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),o.nextTick(r,a),i=!1),i}(this,i,e,n))&&(i.pendingcb++,a=function(e,t,n,r,i,o){if(!n){var a=function(e,t,n){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=h.from(t,n))
return t}(t,r,i)
r!==a&&(n=!0,i="buffer",r=a)}var s=t.objectMode?1:r.length
t.length+=s
var u=t.length<t.highWaterMark
u||(t.needDrain=!0)
if(t.writing||t.corked){var c=t.lastBufferedRequest
t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},c?c.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else y(e,t,!1,s,r,i,o)
return u}(this,i,s,e,t,n)),a},m.prototype.cork=function(){this._writableState.corked++},m.prototype.uncork=function(){var e=this._writableState
e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||w(this,e))},m.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e)
return this._writableState.defaultEncoding=e,this},Object.defineProperty(m.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),m.prototype._write=function(e,t,n){n(new Error("_write() is not implemented"))},m.prototype._writev=null,m.prototype.end=function(e,t,n){var r=this._writableState
"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||function(e,t,n){t.ending=!0,S(e,t),n&&(t.finished?o.nextTick(n):e.once("finish",n))
t.ended=!0,e.writable=!1}(this,r,n)},Object.defineProperty(m.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),m.prototype.destroy=v.destroy,m.prototype._undestroy=v.undestroy,m.prototype._destroy=function(e,t){this.end(),t(e)}}).call(this,n(14),n(301).setImmediate,n(5))},function(e,t,n){"use strict"
var r=n(3).Buffer,i=r.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function o(e){var t
switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8"
for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return e
default:if(t)return
e=(""+e).toLowerCase(),t=!0}}(e)
if("string"!=typeof t&&(r.isEncoding===i||!i(e)))throw new Error("Unknown encoding: "+e)
return t||e}(e),this.encoding){case"utf16le":this.text=u,this.end=c,t=4
break
case"utf8":this.fillLast=s,t=4
break
case"base64":this.text=f,this.end=l,t=3
break
default:return this.write=h,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(t)}function a(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function s(e){var t=this.lastTotal-this.lastNeed,n=function(e,t,n){if(128!=(192&t[0]))return e.lastNeed=0,"�"
if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�"
if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e)
return void 0!==n?n:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function u(e,t){if((e.length-t)%2==0){var n=e.toString("utf16le",t)
if(n){var r=n.charCodeAt(n.length-1)
if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function c(e){var t=e&&e.length?this.write(e):""
if(this.lastNeed){var n=this.lastTotal-this.lastNeed
return t+this.lastChar.toString("utf16le",0,n)}return t}function f(e,t){var n=(e.length-t)%3
return 0===n?e.toString("base64",t):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-n))}function l(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}t.StringDecoder=o,o.prototype.write=function(e){if(0===e.length)return""
var t,n
if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return""
n=this.lastNeed,this.lastNeed=0}else n=0
return n<e.length?t?t+this.text(e,n):this.text(e,n):t||""},o.prototype.end=function(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+"�":t},o.prototype.text=function(e,t){var n=function(e,t,n){var r=t.length-1
if(r<n)return 0
var i=a(t[r])
if(i>=0)return i>0&&(e.lastNeed=i-1),i
if(--r<n||-2===i)return 0
if((i=a(t[r]))>=0)return i>0&&(e.lastNeed=i-2),i
if(--r<n||-2===i)return 0
if((i=a(t[r]))>=0)return i>0&&(2===i?i=0:e.lastNeed=i-3),i
return 0}(this,e,t)
if(!this.lastNeed)return e.toString("utf8",t)
this.lastTotal=n
var r=e.length-(n-this.lastNeed)
return e.copy(this.lastChar,0,r),e.toString("utf8",t,r)},o.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},function(e,t,n){var r=n(312),i=n(313),o=n(154),a=n(7),s=n(161)
e.exports=function(e,t,n){var u=a(e)?r:i
return n&&s(e,t,n)&&(t=void 0),u(e,o(t,3))}},function(e,t,n){var r=n(71),i=n(50)
e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])]
return n&&n==o?e:void 0}},function(e,t,n){var r=n(7),i=n(72),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||a.test(e)||!o.test(e)||null!=t&&e in Object(t)}},function(e,t,n){var r=n(108)
e.exports=function(e){return null==e?"":r(e)}},function(e,t,n){var r=n(37),i=n(109),o=n(7),a=n(72),s=1/0,u=r?r.prototype:void 0,c=u?u.toString:void 0
e.exports=function e(t){if("string"==typeof t)return t
if(o(t))return i(t,e)+""
if(a(t))return c?c.call(t):""
var n=t+""
return"0"==n&&1/t==-s?"-0":n}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e)
return i}},function(e,t){e.exports=function(e){return null===e}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},o=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
t.config=function(e){var t=void 0===arguments[1]?{}:arguments[1]
if(e){var n=new g(t)
e(n),n.resolve()}return t},Object.defineProperty(t,"__esModule",{value:!0})
var s,u=(s=n(153))&&s.__esModule?s:{default:s},c=r(n(11)),f=(r(n(364)),r(n(7)),r(n(33)))
r(n(74)),r(n(169))
var l=t.Reference=function(){function e(){a(this,e)}return o(e,{resolve:{value:function(e){throw new Error("implement resolve in child class")}}}),e}(),h=function(e){function t(e){a(this,t),this.name=e}return i(t,l),o(t,{resolve:{value:function(e){return e.definitions[this.name].resolve(e)}}}),t}(),d=function(e){function t(e,n){var r=void 0!==arguments[2]&&arguments[2]
a(this,t),this.childReference=e,this.length=n,this.variable=r}return i(t,l),o(t,{resolve:{value:function(e){var t=this.childReference,n=this.length
return t instanceof l&&(t=t.resolve(e)),n instanceof l&&(n=n.resolve(e)),this.variable?new u.VarArray(t,n):new u.Array(t,n)}}}),t}(),p=function(e){function t(e){a(this,t),this.childReference=e,this.name=e.name}return i(t,l),o(t,{resolve:{value:function(e){var t=this.childReference
return t instanceof l&&(t=t.resolve(e)),new u.Option(t)}}}),t}(),v=function(e){function t(e,n){a(this,t),this.sizedType=e,this.length=n}return i(t,l),o(t,{resolve:{value:function(e){var t=this.length
return t instanceof l&&(t=t.resolve(e)),new this.sizedType(t)}}}),t}(),b=function(){function e(t,n,r){a(this,e),this.constructor=t,this.name=n,this.config=r}return o(e,{resolve:{value:function(e){return this.name in e.results?e.results[this.name]:this.constructor(e,this.name,this.config)}}}),e}(),g=function(){function e(t){a(this,e),this._destination=t,this._definitions={}}return o(e,{enum:{value:function(e,t){var n=new b(u.Enum.create,e,t)
this.define(e,n)}},struct:{value:function(e,t){var n=new b(u.Struct.create,e,t)
this.define(e,n)}},union:{value:function(e,t){var n=new b(u.Union.create,e,t)
this.define(e,n)}},typedef:{value:function(e,t){var n=new b(function(e,t,n){return n instanceof l&&(n=n.resolve(e)),e.results[t]=n,n},e,t)
this.define(e,n)}},const:{value:function(e,t){var n=new b(function(e,t,n){return e.results[t]=n,n},e,t)
this.define(e,n)}},void:{value:function(){return u.Void}},bool:{value:function(){return u.Bool}},int:{value:function(){return u.Int}},hyper:{value:function(){return u.Hyper}},uint:{value:function(){return u.UnsignedInt}},uhyper:{value:function(){return u.UnsignedHyper}},float:{value:function(){return u.Float}},double:{value:function(){return u.Double}},quadruple:{value:function(){return u.Quadruple}},string:{value:function(e){return new v(u.String,e)}},opaque:{value:function(e){return new v(u.Opaque,e)}},varOpaque:{value:function(e){return new v(u.VarOpaque,e)}},array:{value:function(e,t){return new d(e,t)}},varArray:{value:function(e,t){return new d(e,t,!0)}},option:{value:function(e){return new p(e)}},define:{value:function(e,t){if(!c(this._destination[e]))throw new Error("XDR Error:"+e+" is already defined")
this._definitions[e]=t}},lookup:{value:function(e){return new h(e)}},resolve:{value:function(){var e=this
f(this._definitions,function(t,n){t.resolve({definitions:e._definitions,results:e._destination})})}}}),e}()},function(e,t,n){!function(e){"use strict"
var t=function(e){var t,n=new Float64Array(16)
if(e)for(t=0;t<e.length;t++)n[t]=e[t]
return n},r=function(){throw new Error("no PRNG")},i=new Uint8Array(16),o=new Uint8Array(32)
o[0]=9
var a=t(),s=t([1]),u=t([56129,1]),c=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),f=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),l=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),h=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),d=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function p(e,t,n,r){e[t]=n>>24&255,e[t+1]=n>>16&255,e[t+2]=n>>8&255,e[t+3]=255&n,e[t+4]=r>>24&255,e[t+5]=r>>16&255,e[t+6]=r>>8&255,e[t+7]=255&r}function v(e,t,n,r,i){var o,a=0
for(o=0;o<i;o++)a|=e[t+o]^n[r+o]
return(1&a-1>>>8)-1}function b(e,t,n,r){return v(e,t,n,r,16)}function g(e,t,n,r){return v(e,t,n,r,32)}function m(e,t,n,r){!function(e,t,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,l=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,d=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,b=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,m=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=o,x=a,k=s,S=u,E=c,A=f,O=l,T=h,M=d,P=p,I=v,C=b,R=g,B=m,j=y,N=_,L=0;L<20;L+=2)w^=(i=(R^=(i=(M^=(i=(E^=(i=w+R|0)<<7|i>>>25)+w|0)<<9|i>>>23)+E|0)<<13|i>>>19)+M|0)<<18|i>>>14,A^=(i=(x^=(i=(B^=(i=(P^=(i=A+x|0)<<7|i>>>25)+A|0)<<9|i>>>23)+P|0)<<13|i>>>19)+B|0)<<18|i>>>14,I^=(i=(O^=(i=(k^=(i=(j^=(i=I+O|0)<<7|i>>>25)+I|0)<<9|i>>>23)+j|0)<<13|i>>>19)+k|0)<<18|i>>>14,N^=(i=(C^=(i=(T^=(i=(S^=(i=N+C|0)<<7|i>>>25)+N|0)<<9|i>>>23)+S|0)<<13|i>>>19)+T|0)<<18|i>>>14,w^=(i=(S^=(i=(k^=(i=(x^=(i=w+S|0)<<7|i>>>25)+w|0)<<9|i>>>23)+x|0)<<13|i>>>19)+k|0)<<18|i>>>14,A^=(i=(E^=(i=(T^=(i=(O^=(i=A+E|0)<<7|i>>>25)+A|0)<<9|i>>>23)+O|0)<<13|i>>>19)+T|0)<<18|i>>>14,I^=(i=(P^=(i=(M^=(i=(C^=(i=I+P|0)<<7|i>>>25)+I|0)<<9|i>>>23)+C|0)<<13|i>>>19)+M|0)<<18|i>>>14,N^=(i=(j^=(i=(B^=(i=(R^=(i=N+j|0)<<7|i>>>25)+N|0)<<9|i>>>23)+R|0)<<13|i>>>19)+B|0)<<18|i>>>14
w=w+o|0,x=x+a|0,k=k+s|0,S=S+u|0,E=E+c|0,A=A+f|0,O=O+l|0,T=T+h|0,M=M+d|0,P=P+p|0,I=I+v|0,C=C+b|0,R=R+g|0,B=B+m|0,j=j+y|0,N=N+_|0,e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=x>>>0&255,e[5]=x>>>8&255,e[6]=x>>>16&255,e[7]=x>>>24&255,e[8]=k>>>0&255,e[9]=k>>>8&255,e[10]=k>>>16&255,e[11]=k>>>24&255,e[12]=S>>>0&255,e[13]=S>>>8&255,e[14]=S>>>16&255,e[15]=S>>>24&255,e[16]=E>>>0&255,e[17]=E>>>8&255,e[18]=E>>>16&255,e[19]=E>>>24&255,e[20]=A>>>0&255,e[21]=A>>>8&255,e[22]=A>>>16&255,e[23]=A>>>24&255,e[24]=O>>>0&255,e[25]=O>>>8&255,e[26]=O>>>16&255,e[27]=O>>>24&255,e[28]=T>>>0&255,e[29]=T>>>8&255,e[30]=T>>>16&255,e[31]=T>>>24&255,e[32]=M>>>0&255,e[33]=M>>>8&255,e[34]=M>>>16&255,e[35]=M>>>24&255,e[36]=P>>>0&255,e[37]=P>>>8&255,e[38]=P>>>16&255,e[39]=P>>>24&255,e[40]=I>>>0&255,e[41]=I>>>8&255,e[42]=I>>>16&255,e[43]=I>>>24&255,e[44]=C>>>0&255,e[45]=C>>>8&255,e[46]=C>>>16&255,e[47]=C>>>24&255,e[48]=R>>>0&255,e[49]=R>>>8&255,e[50]=R>>>16&255,e[51]=R>>>24&255,e[52]=B>>>0&255,e[53]=B>>>8&255,e[54]=B>>>16&255,e[55]=B>>>24&255,e[56]=j>>>0&255,e[57]=j>>>8&255,e[58]=j>>>16&255,e[59]=j>>>24&255,e[60]=N>>>0&255,e[61]=N>>>8&255,e[62]=N>>>16&255,e[63]=N>>>24&255}(e,t,n,r)}function y(e,t,n,r){!function(e,t,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,l=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,d=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,b=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,m=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=0;w<20;w+=2)o^=(i=(g^=(i=(d^=(i=(c^=(i=o+g|0)<<7|i>>>25)+o|0)<<9|i>>>23)+c|0)<<13|i>>>19)+d|0)<<18|i>>>14,f^=(i=(a^=(i=(m^=(i=(p^=(i=f+a|0)<<7|i>>>25)+f|0)<<9|i>>>23)+p|0)<<13|i>>>19)+m|0)<<18|i>>>14,v^=(i=(l^=(i=(s^=(i=(y^=(i=v+l|0)<<7|i>>>25)+v|0)<<9|i>>>23)+y|0)<<13|i>>>19)+s|0)<<18|i>>>14,_^=(i=(b^=(i=(h^=(i=(u^=(i=_+b|0)<<7|i>>>25)+_|0)<<9|i>>>23)+u|0)<<13|i>>>19)+h|0)<<18|i>>>14,o^=(i=(u^=(i=(s^=(i=(a^=(i=o+u|0)<<7|i>>>25)+o|0)<<9|i>>>23)+a|0)<<13|i>>>19)+s|0)<<18|i>>>14,f^=(i=(c^=(i=(h^=(i=(l^=(i=f+c|0)<<7|i>>>25)+f|0)<<9|i>>>23)+l|0)<<13|i>>>19)+h|0)<<18|i>>>14,v^=(i=(p^=(i=(d^=(i=(b^=(i=v+p|0)<<7|i>>>25)+v|0)<<9|i>>>23)+b|0)<<13|i>>>19)+d|0)<<18|i>>>14,_^=(i=(y^=(i=(m^=(i=(g^=(i=_+y|0)<<7|i>>>25)+_|0)<<9|i>>>23)+g|0)<<13|i>>>19)+m|0)<<18|i>>>14
e[0]=o>>>0&255,e[1]=o>>>8&255,e[2]=o>>>16&255,e[3]=o>>>24&255,e[4]=f>>>0&255,e[5]=f>>>8&255,e[6]=f>>>16&255,e[7]=f>>>24&255,e[8]=v>>>0&255,e[9]=v>>>8&255,e[10]=v>>>16&255,e[11]=v>>>24&255,e[12]=_>>>0&255,e[13]=_>>>8&255,e[14]=_>>>16&255,e[15]=_>>>24&255,e[16]=l>>>0&255,e[17]=l>>>8&255,e[18]=l>>>16&255,e[19]=l>>>24&255,e[20]=h>>>0&255,e[21]=h>>>8&255,e[22]=h>>>16&255,e[23]=h>>>24&255,e[24]=d>>>0&255,e[25]=d>>>8&255,e[26]=d>>>16&255,e[27]=d>>>24&255,e[28]=p>>>0&255,e[29]=p>>>8&255,e[30]=p>>>16&255,e[31]=p>>>24&255}(e,t,n,r)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function w(e,t,n,r,i,o,a){var s,u,c=new Uint8Array(16),f=new Uint8Array(64)
for(u=0;u<16;u++)c[u]=0
for(u=0;u<8;u++)c[u]=o[u]
for(;i>=64;){for(m(f,c,a,_),u=0;u<64;u++)e[t+u]=n[r+u]^f[u]
for(s=1,u=8;u<16;u++)s=s+(255&c[u])|0,c[u]=255&s,s>>>=8
i-=64,t+=64,r+=64}if(i>0)for(m(f,c,a,_),u=0;u<i;u++)e[t+u]=n[r+u]^f[u]
return 0}function x(e,t,n,r,i){var o,a,s=new Uint8Array(16),u=new Uint8Array(64)
for(a=0;a<16;a++)s[a]=0
for(a=0;a<8;a++)s[a]=r[a]
for(;n>=64;){for(m(u,s,i,_),a=0;a<64;a++)e[t+a]=u[a]
for(o=1,a=8;a<16;a++)o=o+(255&s[a])|0,s[a]=255&o,o>>>=8
n-=64,t+=64}if(n>0)for(m(u,s,i,_),a=0;a<n;a++)e[t+a]=u[a]
return 0}function k(e,t,n,r,i){var o=new Uint8Array(32)
y(o,r,i,_)
for(var a=new Uint8Array(8),s=0;s<8;s++)a[s]=r[s+16]
return x(e,t,n,a,o)}function S(e,t,n,r,i,o,a){var s=new Uint8Array(32)
y(s,o,a,_)
for(var u=new Uint8Array(8),c=0;c<8;c++)u[c]=o[c+16]
return w(e,t,n,r,i,u,s)}var E=function(e){var t,n,r,i,o,a,s,u
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,n=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|n<<3),r=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(n>>>10|r<<6),i=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(r>>>7|i<<9),o=255&e[8]|(255&e[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,a=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(o>>>14|a<<2),s=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(a>>>11|s<<5),u=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(s>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8}
function A(e,t,n,r,i,o){var a=new E(o)
return a.update(n,r,i),a.finish(e,t),0}function O(e,t,n,r,i,o){var a=new Uint8Array(16)
return A(a,0,n,r,i,o),b(e,t,a,0)}function T(e,t,n,r,i){var o
if(n<32)return-1
for(S(e,0,t,0,n,r,i),A(e,16,e,32,n-32,e),o=0;o<16;o++)e[o]=0
return 0}function M(e,t,n,r,i){var o,a=new Uint8Array(32)
if(n<32)return-1
if(k(a,0,32,r,i),0!==O(t,16,t,32,n-32,a))return-1
for(S(e,0,t,0,n,r,i),o=0;o<32;o++)e[o]=0
return 0}function P(e,t){var n
for(n=0;n<16;n++)e[n]=0|t[n]}function I(e){var t,n,r=1
for(t=0;t<16;t++)n=e[t]+r+65535,r=Math.floor(n/65536),e[t]=n-65536*r
e[0]+=r-1+37*(r-1)}function C(e,t,n){for(var r,i=~(n-1),o=0;o<16;o++)r=i&(e[o]^t[o]),e[o]^=r,t[o]^=r}function R(e,n){var r,i,o,a=t(),s=t()
for(r=0;r<16;r++)s[r]=n[r]
for(I(s),I(s),I(s),i=0;i<2;i++){for(a[0]=s[0]-65517,r=1;r<15;r++)a[r]=s[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535
a[15]=s[15]-32767-(a[14]>>16&1),o=a[15]>>16&1,a[14]&=65535,C(s,a,1-o)}for(r=0;r<16;r++)e[2*r]=255&s[r],e[2*r+1]=s[r]>>8}function B(e,t){var n=new Uint8Array(32),r=new Uint8Array(32)
return R(n,e),R(r,t),g(n,0,r,0)}function j(e){var t=new Uint8Array(32)
return R(t,e),1&t[0]}function N(e,t){var n
for(n=0;n<16;n++)e[n]=t[2*n]+(t[2*n+1]<<8)
e[15]&=32767}function L(e,t,n){for(var r=0;r<16;r++)e[r]=t[r]+n[r]}function U(e,t,n){for(var r=0;r<16;r++)e[r]=t[r]-n[r]}function D(e,t,n){var r,i,o=0,a=0,s=0,u=0,c=0,f=0,l=0,h=0,d=0,p=0,v=0,b=0,g=0,m=0,y=0,_=0,w=0,x=0,k=0,S=0,E=0,A=0,O=0,T=0,M=0,P=0,I=0,C=0,R=0,B=0,j=0,N=n[0],L=n[1],U=n[2],D=n[3],z=n[4],q=n[5],F=n[6],K=n[7],H=n[8],V=n[9],$=n[10],X=n[11],W=n[12],Q=n[13],Y=n[14],G=n[15]
o+=(r=t[0])*N,a+=r*L,s+=r*U,u+=r*D,c+=r*z,f+=r*q,l+=r*F,h+=r*K,d+=r*H,p+=r*V,v+=r*$,b+=r*X,g+=r*W,m+=r*Q,y+=r*Y,_+=r*G,a+=(r=t[1])*N,s+=r*L,u+=r*U,c+=r*D,f+=r*z,l+=r*q,h+=r*F,d+=r*K,p+=r*H,v+=r*V,b+=r*$,g+=r*X,m+=r*W,y+=r*Q,_+=r*Y,w+=r*G,s+=(r=t[2])*N,u+=r*L,c+=r*U,f+=r*D,l+=r*z,h+=r*q,d+=r*F,p+=r*K,v+=r*H,b+=r*V,g+=r*$,m+=r*X,y+=r*W,_+=r*Q,w+=r*Y,x+=r*G,u+=(r=t[3])*N,c+=r*L,f+=r*U,l+=r*D,h+=r*z,d+=r*q,p+=r*F,v+=r*K,b+=r*H,g+=r*V,m+=r*$,y+=r*X,_+=r*W,w+=r*Q,x+=r*Y,k+=r*G,c+=(r=t[4])*N,f+=r*L,l+=r*U,h+=r*D,d+=r*z,p+=r*q,v+=r*F,b+=r*K,g+=r*H,m+=r*V,y+=r*$,_+=r*X,w+=r*W,x+=r*Q,k+=r*Y,S+=r*G,f+=(r=t[5])*N,l+=r*L,h+=r*U,d+=r*D,p+=r*z,v+=r*q,b+=r*F,g+=r*K,m+=r*H,y+=r*V,_+=r*$,w+=r*X,x+=r*W,k+=r*Q,S+=r*Y,E+=r*G,l+=(r=t[6])*N,h+=r*L,d+=r*U,p+=r*D,v+=r*z,b+=r*q,g+=r*F,m+=r*K,y+=r*H,_+=r*V,w+=r*$,x+=r*X,k+=r*W,S+=r*Q,E+=r*Y,A+=r*G,h+=(r=t[7])*N,d+=r*L,p+=r*U,v+=r*D,b+=r*z,g+=r*q,m+=r*F,y+=r*K,_+=r*H,w+=r*V,x+=r*$,k+=r*X,S+=r*W,E+=r*Q,A+=r*Y,O+=r*G,d+=(r=t[8])*N,p+=r*L,v+=r*U,b+=r*D,g+=r*z,m+=r*q,y+=r*F,_+=r*K,w+=r*H,x+=r*V,k+=r*$,S+=r*X,E+=r*W,A+=r*Q,O+=r*Y,T+=r*G,p+=(r=t[9])*N,v+=r*L,b+=r*U,g+=r*D,m+=r*z,y+=r*q,_+=r*F,w+=r*K,x+=r*H,k+=r*V,S+=r*$,E+=r*X,A+=r*W,O+=r*Q,T+=r*Y,M+=r*G,v+=(r=t[10])*N,b+=r*L,g+=r*U,m+=r*D,y+=r*z,_+=r*q,w+=r*F,x+=r*K,k+=r*H,S+=r*V,E+=r*$,A+=r*X,O+=r*W,T+=r*Q,M+=r*Y,P+=r*G,b+=(r=t[11])*N,g+=r*L,m+=r*U,y+=r*D,_+=r*z,w+=r*q,x+=r*F,k+=r*K,S+=r*H,E+=r*V,A+=r*$,O+=r*X,T+=r*W,M+=r*Q,P+=r*Y,I+=r*G,g+=(r=t[12])*N,m+=r*L,y+=r*U,_+=r*D,w+=r*z,x+=r*q,k+=r*F,S+=r*K,E+=r*H,A+=r*V,O+=r*$,T+=r*X,M+=r*W,P+=r*Q,I+=r*Y,C+=r*G,m+=(r=t[13])*N,y+=r*L,_+=r*U,w+=r*D,x+=r*z,k+=r*q,S+=r*F,E+=r*K,A+=r*H,O+=r*V,T+=r*$,M+=r*X,P+=r*W,I+=r*Q,C+=r*Y,R+=r*G,y+=(r=t[14])*N,_+=r*L,w+=r*U,x+=r*D,k+=r*z,S+=r*q,E+=r*F,A+=r*K,O+=r*H,T+=r*V,M+=r*$,P+=r*X,I+=r*W,C+=r*Q,R+=r*Y,B+=r*G,_+=(r=t[15])*N,a+=38*(x+=r*U),s+=38*(k+=r*D),u+=38*(S+=r*z),c+=38*(E+=r*q),f+=38*(A+=r*F),l+=38*(O+=r*K),h+=38*(T+=r*H),d+=38*(M+=r*V),p+=38*(P+=r*$),v+=38*(I+=r*X),b+=38*(C+=r*W),g+=38*(R+=r*Q),m+=38*(B+=r*Y),y+=38*(j+=r*G),o=(r=(o+=38*(w+=r*L))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o=(r=(o+=i-1+37*(i-1))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o+=i-1+37*(i-1),e[0]=o,e[1]=a,e[2]=s,e[3]=u,e[4]=c,e[5]=f,e[6]=l,e[7]=h,e[8]=d,e[9]=p,e[10]=v,e[11]=b,e[12]=g,e[13]=m,e[14]=y,e[15]=_}function z(e,t){D(e,t,t)}function q(e,n){var r,i=t()
for(r=0;r<16;r++)i[r]=n[r]
for(r=253;r>=0;r--)z(i,i),2!==r&&4!==r&&D(i,i,n)
for(r=0;r<16;r++)e[r]=i[r]}function F(e,n,r){var i,o,a=new Uint8Array(32),s=new Float64Array(80),c=t(),f=t(),l=t(),h=t(),d=t(),p=t()
for(o=0;o<31;o++)a[o]=n[o]
for(a[31]=127&n[31]|64,a[0]&=248,N(s,r),o=0;o<16;o++)f[o]=s[o],h[o]=c[o]=l[o]=0
for(c[0]=h[0]=1,o=254;o>=0;--o)C(c,f,i=a[o>>>3]>>>(7&o)&1),C(l,h,i),L(d,c,l),U(c,c,l),L(l,f,h),U(f,f,h),z(h,d),z(p,c),D(c,l,c),D(l,f,d),L(d,c,l),U(c,c,l),z(f,c),U(l,h,p),D(c,l,u),L(c,c,h),D(l,l,c),D(c,h,p),D(h,f,s),z(f,d),C(c,f,i),C(l,h,i)
for(o=0;o<16;o++)s[o+16]=c[o],s[o+32]=l[o],s[o+48]=f[o],s[o+64]=h[o]
var v=s.subarray(32),b=s.subarray(16)
return q(v,v),D(b,b,v),R(e,b),0}function K(e,t){return F(e,t,o)}function H(e,t){return r(t,32),K(e,t)}function V(e,t,n){var r=new Uint8Array(32)
return F(r,n,t),y(e,i,r,_)}E.prototype.blocks=function(e,t,n){for(var r,i,o,a,s,u,c,f,l,h,d,p,v,b,g,m,y,_,w,x=this.fin?0:2048,k=this.h[0],S=this.h[1],E=this.h[2],A=this.h[3],O=this.h[4],T=this.h[5],M=this.h[6],P=this.h[7],I=this.h[8],C=this.h[9],R=this.r[0],B=this.r[1],j=this.r[2],N=this.r[3],L=this.r[4],U=this.r[5],D=this.r[6],z=this.r[7],q=this.r[8],F=this.r[9];n>=16;)h=l=0,h+=(k+=8191&(r=255&e[t+0]|(255&e[t+1])<<8))*R,h+=(S+=8191&(r>>>13|(i=255&e[t+2]|(255&e[t+3])<<8)<<3))*(5*F),h+=(E+=8191&(i>>>10|(o=255&e[t+4]|(255&e[t+5])<<8)<<6))*(5*q),h+=(A+=8191&(o>>>7|(a=255&e[t+6]|(255&e[t+7])<<8)<<9))*(5*z),l=(h+=(O+=8191&(a>>>4|(s=255&e[t+8]|(255&e[t+9])<<8)<<12))*(5*D))>>>13,h&=8191,h+=(T+=s>>>1&8191)*(5*U),h+=(M+=8191&(s>>>14|(u=255&e[t+10]|(255&e[t+11])<<8)<<2))*(5*L),h+=(P+=8191&(u>>>11|(c=255&e[t+12]|(255&e[t+13])<<8)<<5))*(5*N),h+=(I+=8191&(c>>>8|(f=255&e[t+14]|(255&e[t+15])<<8)<<8))*(5*j),d=l+=(h+=(C+=f>>>5|x)*(5*B))>>>13,d+=k*B,d+=S*R,d+=E*(5*F),d+=A*(5*q),l=(d+=O*(5*z))>>>13,d&=8191,d+=T*(5*D),d+=M*(5*U),d+=P*(5*L),d+=I*(5*N),l+=(d+=C*(5*j))>>>13,d&=8191,p=l,p+=k*j,p+=S*B,p+=E*R,p+=A*(5*F),l=(p+=O*(5*q))>>>13,p&=8191,p+=T*(5*z),p+=M*(5*D),p+=P*(5*U),p+=I*(5*L),v=l+=(p+=C*(5*N))>>>13,v+=k*N,v+=S*j,v+=E*B,v+=A*R,l=(v+=O*(5*F))>>>13,v&=8191,v+=T*(5*q),v+=M*(5*z),v+=P*(5*D),v+=I*(5*U),b=l+=(v+=C*(5*L))>>>13,b+=k*L,b+=S*N,b+=E*j,b+=A*B,l=(b+=O*R)>>>13,b&=8191,b+=T*(5*F),b+=M*(5*q),b+=P*(5*z),b+=I*(5*D),g=l+=(b+=C*(5*U))>>>13,g+=k*U,g+=S*L,g+=E*N,g+=A*j,l=(g+=O*B)>>>13,g&=8191,g+=T*R,g+=M*(5*F),g+=P*(5*q),g+=I*(5*z),m=l+=(g+=C*(5*D))>>>13,m+=k*D,m+=S*U,m+=E*L,m+=A*N,l=(m+=O*j)>>>13,m&=8191,m+=T*B,m+=M*R,m+=P*(5*F),m+=I*(5*q),y=l+=(m+=C*(5*z))>>>13,y+=k*z,y+=S*D,y+=E*U,y+=A*L,l=(y+=O*N)>>>13,y&=8191,y+=T*j,y+=M*B,y+=P*R,y+=I*(5*F),_=l+=(y+=C*(5*q))>>>13,_+=k*q,_+=S*z,_+=E*D,_+=A*U,l=(_+=O*L)>>>13,_&=8191,_+=T*N,_+=M*j,_+=P*B,_+=I*R,w=l+=(_+=C*(5*F))>>>13,w+=k*F,w+=S*q,w+=E*z,w+=A*D,l=(w+=O*U)>>>13,w&=8191,w+=T*L,w+=M*N,w+=P*j,w+=I*B,k=h=8191&(l=(l=((l+=(w+=C*R)>>>13)<<2)+l|0)+(h&=8191)|0),S=d+=l>>>=13,E=p&=8191,A=v&=8191,O=b&=8191,T=g&=8191,M=m&=8191,P=y&=8191,I=_&=8191,C=w&=8191,t+=16,n-=16
this.h[0]=k,this.h[1]=S,this.h[2]=E,this.h[3]=A,this.h[4]=O,this.h[5]=T,this.h[6]=M,this.h[7]=P,this.h[8]=I,this.h[9]=C},E.prototype.finish=function(e,t){var n,r,i,o,a=new Uint16Array(10)
if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191
for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,a[0]=this.h[0]+5,n=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this.h[o]+n,n=a[o]>>>13,a[o]&=8191
for(a[9]-=8192,r=(1^n)-1,o=0;o<10;o++)a[o]&=r
for(r=~r,o=0;o<10;o++)this.h[o]=this.h[o]&r|a[o]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i
e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},E.prototype.update=function(e,t,n){var r,i
if(this.leftover){for((i=16-this.leftover)>n&&(i=n),r=0;r<i;r++)this.buffer[this.leftover+r]=e[t+r]
if(n-=i,t+=i,this.leftover+=i,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(e,t,i),t+=i,n-=i),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=e[t+r]
this.leftover+=n}}
var $=T,X=M
var W=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function Q(e,t,n,r){for(var i,o,a,s,u,c,f,l,h,d,p,v,b,g,m,y,_,w,x,k,S,E,A,O,T,M,P=new Int32Array(16),I=new Int32Array(16),C=e[0],R=e[1],B=e[2],j=e[3],N=e[4],L=e[5],U=e[6],D=e[7],z=t[0],q=t[1],F=t[2],K=t[3],H=t[4],V=t[5],$=t[6],X=t[7],Q=0;r>=128;){for(x=0;x<16;x++)k=8*x+Q,P[x]=n[k+0]<<24|n[k+1]<<16|n[k+2]<<8|n[k+3],I[x]=n[k+4]<<24|n[k+5]<<16|n[k+6]<<8|n[k+7]
for(x=0;x<80;x++)if(i=C,o=R,a=B,s=j,u=N,c=L,f=U,D,h=z,d=q,p=F,v=K,b=H,g=V,m=$,X,A=65535&(E=X),O=E>>>16,T=65535&(S=D),M=S>>>16,A+=65535&(E=(H>>>14|N<<18)^(H>>>18|N<<14)^(N>>>9|H<<23)),O+=E>>>16,T+=65535&(S=(N>>>14|H<<18)^(N>>>18|H<<14)^(H>>>9|N<<23)),M+=S>>>16,A+=65535&(E=H&V^~H&$),O+=E>>>16,T+=65535&(S=N&L^~N&U),M+=S>>>16,S=W[2*x],A+=65535&(E=W[2*x+1]),O+=E>>>16,T+=65535&S,M+=S>>>16,S=P[x%16],O+=(E=I[x%16])>>>16,T+=65535&S,M+=S>>>16,T+=(O+=(A+=65535&E)>>>16)>>>16,A=65535&(E=w=65535&A|O<<16),O=E>>>16,T=65535&(S=_=65535&T|(M+=T>>>16)<<16),M=S>>>16,A+=65535&(E=(z>>>28|C<<4)^(C>>>2|z<<30)^(C>>>7|z<<25)),O+=E>>>16,T+=65535&(S=(C>>>28|z<<4)^(z>>>2|C<<30)^(z>>>7|C<<25)),M+=S>>>16,O+=(E=z&q^z&F^q&F)>>>16,T+=65535&(S=C&R^C&B^R&B),M+=S>>>16,l=65535&(T+=(O+=(A+=65535&E)>>>16)>>>16)|(M+=T>>>16)<<16,y=65535&A|O<<16,A=65535&(E=v),O=E>>>16,T=65535&(S=s),M=S>>>16,O+=(E=w)>>>16,T+=65535&(S=_),M+=S>>>16,R=i,B=o,j=a,N=s=65535&(T+=(O+=(A+=65535&E)>>>16)>>>16)|(M+=T>>>16)<<16,L=u,U=c,D=f,C=l,q=h,F=d,K=p,H=v=65535&A|O<<16,V=b,$=g,X=m,z=y,x%16==15)for(k=0;k<16;k++)S=P[k],A=65535&(E=I[k]),O=E>>>16,T=65535&S,M=S>>>16,S=P[(k+9)%16],A+=65535&(E=I[(k+9)%16]),O+=E>>>16,T+=65535&S,M+=S>>>16,_=P[(k+1)%16],A+=65535&(E=((w=I[(k+1)%16])>>>1|_<<31)^(w>>>8|_<<24)^(w>>>7|_<<25)),O+=E>>>16,T+=65535&(S=(_>>>1|w<<31)^(_>>>8|w<<24)^_>>>7),M+=S>>>16,_=P[(k+14)%16],O+=(E=((w=I[(k+14)%16])>>>19|_<<13)^(_>>>29|w<<3)^(w>>>6|_<<26))>>>16,T+=65535&(S=(_>>>19|w<<13)^(w>>>29|_<<3)^_>>>6),M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,P[k]=65535&T|M<<16,I[k]=65535&A|O<<16
A=65535&(E=z),O=E>>>16,T=65535&(S=C),M=S>>>16,S=e[0],O+=(E=t[0])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[0]=C=65535&T|M<<16,t[0]=z=65535&A|O<<16,A=65535&(E=q),O=E>>>16,T=65535&(S=R),M=S>>>16,S=e[1],O+=(E=t[1])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[1]=R=65535&T|M<<16,t[1]=q=65535&A|O<<16,A=65535&(E=F),O=E>>>16,T=65535&(S=B),M=S>>>16,S=e[2],O+=(E=t[2])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[2]=B=65535&T|M<<16,t[2]=F=65535&A|O<<16,A=65535&(E=K),O=E>>>16,T=65535&(S=j),M=S>>>16,S=e[3],O+=(E=t[3])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[3]=j=65535&T|M<<16,t[3]=K=65535&A|O<<16,A=65535&(E=H),O=E>>>16,T=65535&(S=N),M=S>>>16,S=e[4],O+=(E=t[4])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[4]=N=65535&T|M<<16,t[4]=H=65535&A|O<<16,A=65535&(E=V),O=E>>>16,T=65535&(S=L),M=S>>>16,S=e[5],O+=(E=t[5])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[5]=L=65535&T|M<<16,t[5]=V=65535&A|O<<16,A=65535&(E=$),O=E>>>16,T=65535&(S=U),M=S>>>16,S=e[6],O+=(E=t[6])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[6]=U=65535&T|M<<16,t[6]=$=65535&A|O<<16,A=65535&(E=X),O=E>>>16,T=65535&(S=D),M=S>>>16,S=e[7],O+=(E=t[7])>>>16,T+=65535&S,M+=S>>>16,M+=(T+=(O+=(A+=65535&E)>>>16)>>>16)>>>16,e[7]=D=65535&T|M<<16,t[7]=X=65535&A|O<<16,Q+=128,r-=128}return r}function Y(e,t,n){var r,i=new Int32Array(8),o=new Int32Array(8),a=new Uint8Array(256),s=n
for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,o[0]=4089235720,o[1]=2227873595,o[2]=4271175723,o[3]=1595750129,o[4]=2917565137,o[5]=725511199,o[6]=4215389547,o[7]=327033209,Q(i,o,t,n),n%=128,r=0;r<n;r++)a[r]=t[s-n+r]
for(a[n]=128,a[(n=256-128*(n<112?1:0))-9]=0,p(a,n-8,s/536870912|0,s<<3),Q(i,o,a,n),r=0;r<8;r++)p(e,8*r,i[r],o[r])
return 0}function G(e,n){var r=t(),i=t(),o=t(),a=t(),s=t(),u=t(),c=t(),l=t(),h=t()
U(r,e[1],e[0]),U(h,n[1],n[0]),D(r,r,h),L(i,e[0],e[1]),L(h,n[0],n[1]),D(i,i,h),D(o,e[3],n[3]),D(o,o,f),D(a,e[2],n[2]),L(a,a,a),U(s,i,r),U(u,a,o),L(c,a,o),L(l,i,r),D(e[0],s,u),D(e[1],l,c),D(e[2],c,u),D(e[3],s,l)}function Z(e,t,n){var r
for(r=0;r<4;r++)C(e[r],t[r],n)}function J(e,n){var r=t(),i=t(),o=t()
q(o,n[2]),D(r,n[0],o),D(i,n[1],o),R(e,i),e[31]^=j(r)<<7}function ee(e,t,n){var r,i
for(P(e[0],a),P(e[1],s),P(e[2],s),P(e[3],a),i=255;i>=0;--i)Z(e,t,r=n[i/8|0]>>(7&i)&1),G(t,e),G(e,e),Z(e,t,r)}function te(e,n){var r=[t(),t(),t(),t()]
P(r[0],l),P(r[1],h),P(r[2],s),D(r[3],l,h),ee(e,r,n)}function ne(e,n,i){var o,a=new Uint8Array(64),s=[t(),t(),t(),t()]
for(i||r(n,32),Y(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64,te(s,a),J(e,s),o=0;o<32;o++)n[o+32]=e[o]
return 0}var re=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function ie(e,t){var n,r,i,o
for(r=63;r>=32;--r){for(n=0,i=r-32,o=r-12;i<o;++i)t[i]+=n-16*t[r]*re[i-(r-32)],n=t[i]+128>>8,t[i]-=256*n
t[i]+=n,t[r]=0}for(n=0,i=0;i<32;i++)t[i]+=n-(t[31]>>4)*re[i],n=t[i]>>8,t[i]&=255
for(i=0;i<32;i++)t[i]-=n*re[i]
for(r=0;r<32;r++)t[r+1]+=t[r]>>8,e[r]=255&t[r]}function oe(e){var t,n=new Float64Array(64)
for(t=0;t<64;t++)n[t]=e[t]
for(t=0;t<64;t++)e[t]=0
ie(e,n)}function ae(e,n,r,i){var o,a,s=new Uint8Array(64),u=new Uint8Array(64),c=new Uint8Array(64),f=new Float64Array(64),l=[t(),t(),t(),t()]
Y(s,i,32),s[0]&=248,s[31]&=127,s[31]|=64
var h=r+64
for(o=0;o<r;o++)e[64+o]=n[o]
for(o=0;o<32;o++)e[32+o]=s[32+o]
for(Y(c,e.subarray(32),r+32),oe(c),te(l,c),J(e,l),o=32;o<64;o++)e[o]=i[o]
for(Y(u,e,r+64),oe(u),o=0;o<64;o++)f[o]=0
for(o=0;o<32;o++)f[o]=c[o]
for(o=0;o<32;o++)for(a=0;a<32;a++)f[o+a]+=u[o]*s[a]
return ie(e.subarray(32),f),h}function se(e,n){var r=t(),i=t(),o=t(),u=t(),f=t(),l=t(),h=t()
return P(e[2],s),N(e[1],n),z(o,e[1]),D(u,o,c),U(o,o,e[2]),L(u,e[2],u),z(f,u),z(l,f),D(h,l,f),D(r,h,o),D(r,r,u),function(e,n){var r,i=t()
for(r=0;r<16;r++)i[r]=n[r]
for(r=250;r>=0;r--)z(i,i),1!==r&&D(i,i,n)
for(r=0;r<16;r++)e[r]=i[r]}(r,r),D(r,r,o),D(r,r,u),D(r,r,u),D(e[0],r,u),z(i,e[0]),D(i,i,u),B(i,o)&&D(e[0],e[0],d),z(i,e[0]),D(i,i,u),B(i,o)?-1:(j(e[0])===n[31]>>7&&U(e[0],a,e[0]),D(e[3],e[0],e[1]),0)}function ue(e,n,r,i){var o,a=new Uint8Array(32),s=new Uint8Array(64),u=[t(),t(),t(),t()],c=[t(),t(),t(),t()]
if(-1,r<64)return-1
if(se(c,i))return-1
for(o=0;o<r;o++)e[o]=n[o]
for(o=0;o<32;o++)e[o+32]=i[o]
if(Y(s,e,r),oe(s),ee(u,c,s),te(c,n.subarray(32)),G(u,c),J(a,u),r-=64,g(n,0,a,0)){for(o=0;o<r;o++)e[o]=0
return-1}for(o=0;o<r;o++)e[o]=n[o+64]
return r}var ce=32,fe=24,le=32,he=32,de=fe
function pe(e,t){if(e.length!==ce)throw new Error("bad key size")
if(t.length!==fe)throw new Error("bad nonce size")}function ve(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function be(e){for(var t=0;t<e.length;t++)e[t]=0}e.lowlevel={crypto_core_hsalsa20:y,crypto_stream_xor:S,crypto_stream:k,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:x,crypto_onetimeauth:A,crypto_onetimeauth_verify:O,crypto_verify_16:b,crypto_verify_32:g,crypto_secretbox:T,crypto_secretbox_open:M,crypto_scalarmult:F,crypto_scalarmult_base:K,crypto_box_beforenm:V,crypto_box_afternm:$,crypto_box:function(e,t,n,r,i,o){var a=new Uint8Array(32)
return V(a,i,o),$(e,t,n,r,a)},crypto_box_open:function(e,t,n,r,i,o){var a=new Uint8Array(32)
return V(a,i,o),X(e,t,n,r,a)},crypto_box_keypair:H,crypto_hash:Y,crypto_sign:ae,crypto_sign_keypair:ne,crypto_sign_open:ue,crypto_secretbox_KEYBYTES:ce,crypto_secretbox_NONCEBYTES:fe,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:le,crypto_box_SECRETKEYBYTES:he,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:de,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},e.randomBytes=function(e){var t=new Uint8Array(e)
return r(t,e),t},e.secretbox=function(e,t,n){ve(e,t,n),pe(n,t)
for(var r=new Uint8Array(32+e.length),i=new Uint8Array(r.length),o=0;o<e.length;o++)r[o+32]=e[o]
return T(i,r,r.length,t,n),i.subarray(16)},e.secretbox.open=function(e,t,n){ve(e,t,n),pe(n,t)
for(var r=new Uint8Array(16+e.length),i=new Uint8Array(r.length),o=0;o<e.length;o++)r[o+16]=e[o]
return r.length<32?null:0!==M(i,r,r.length,t,n)?null:i.subarray(32)},e.secretbox.keyLength=ce,e.secretbox.nonceLength=fe,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(ve(e,t),32!==e.length)throw new Error("bad n size")
if(32!==t.length)throw new Error("bad p size")
var n=new Uint8Array(32)
return F(n,e,t),n},e.scalarMult.base=function(e){if(ve(e),32!==e.length)throw new Error("bad n size")
var t=new Uint8Array(32)
return K(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,n,r,i){var o=e.box.before(r,i)
return e.secretbox(t,n,o)},e.box.before=function(e,t){ve(e,t),function(e,t){if(e.length!==le)throw new Error("bad public key size")
if(t.length!==he)throw new Error("bad secret key size")}(e,t)
var n=new Uint8Array(32)
return V(n,e,t),n},e.box.after=e.secretbox,e.box.open=function(t,n,r,i){var o=e.box.before(r,i)
return e.secretbox.open(t,n,o)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(le),t=new Uint8Array(he)
return H(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(ve(e),e.length!==he)throw new Error("bad secret key size")
var t=new Uint8Array(le)
return K(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=le,e.box.secretKeyLength=he,e.box.sharedKeyLength=32,e.box.nonceLength=de,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(ve(e,t),64!==t.length)throw new Error("bad secret key size")
var n=new Uint8Array(64+e.length)
return ae(n,e,e.length,t),n},e.sign.open=function(e,t){if(ve(e,t),32!==t.length)throw new Error("bad public key size")
var n=new Uint8Array(e.length),r=ue(n,e,e.length,t)
if(r<0)return null
for(var i=new Uint8Array(r),o=0;o<i.length;o++)i[o]=n[o]
return i},e.sign.detached=function(t,n){for(var r=e.sign(t,n),i=new Uint8Array(64),o=0;o<i.length;o++)i[o]=r[o]
return i},e.sign.detached.verify=function(e,t,n){if(ve(e,t,n),64!==t.length)throw new Error("bad signature size")
if(32!==n.length)throw new Error("bad public key size")
var r,i=new Uint8Array(64+e.length),o=new Uint8Array(64+e.length)
for(r=0;r<64;r++)i[r]=t[r]
for(r=0;r<e.length;r++)i[r+64]=e[r]
return ue(o,i,i.length,n)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64)
return ne(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(ve(e),64!==e.length)throw new Error("bad secret key size")
for(var t=new Uint8Array(32),n=0;n<t.length;n++)t[n]=e[32+n]
return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(ve(e),32!==e.length)throw new Error("bad seed size")
for(var t=new Uint8Array(32),n=new Uint8Array(64),r=0;r<32;r++)n[r]=e[r]
return ne(t,n,!0),{publicKey:t,secretKey:n}},e.sign.publicKeyLength=32,e.sign.secretKeyLength=64,e.sign.seedLength=32,e.sign.signatureLength=64,e.hash=function(e){ve(e)
var t=new Uint8Array(64)
return Y(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return ve(e,t),0!==e.length&&0!==t.length&&(e.length===t.length&&0===v(e,0,t,0,e.length))},e.setPRNG=function(e){r=e},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null
if(t&&t.getRandomValues){e.setPRNG(function(e,n){var r,i=new Uint8Array(n)
for(r=0;r<n;r+=65536)t.getRandomValues(i.subarray(r,r+Math.min(n-r,65536)))
for(r=0;r<n;r++)e[r]=i[r]
be(i)})}else(t=n(378))&&t.randomBytes&&e.setPRNG(function(e,n){var r,i=t.randomBytes(n)
for(r=0;r<n;r++)e[r]=i[r]
be(i)})}()}(e.exports?e.exports:self.nacl=self.nacl||{})},function(e,t,n){"use strict"
var r=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var o=n(51).hash,a={PUBLIC:"Public Global Stellar Network ; September 2015",TESTNET:"Test SDF Network ; September 2015"}
t.Networks=a
var s=null
t.Network=function(){function e(t){i(this,e),this._networkPassphrase=t}var t,n
return r(e,{networkPassphrase:{value:function(){return this._networkPassphrase}},networkId:{value:function(){return o(this.networkPassphrase())}}},{usePublicNetwork:{value:function(){this.use(new e(a.PUBLIC))}},useTestNetwork:{value:function(){this.use(new e(a.TESTNET))}},use:{value:function(e){s=e}},current:{value:(t=function(){return s},n=function(){return t.apply(this,arguments)},n.toString=function(){return t.toString()},n)}}),e}()},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a,s=r(n(8)),u=n(17).Keypair,c=(n(51).hash,n(18).StrKey),f=n(28).Hyper,l=n(176).Asset,h=r(n(34)),d=n(405).best_r,p=r(n(181)),v=r(n(11)),b=r(n(16)),g=r(n(49)),m=r(n(406)),y=(a=n(407))&&a.__esModule?a:{default:a}
t.AuthRequiredFlag=1
t.AuthRevocableFlag=2
t.AuthImmutableFlag=4
var _=t.Operation=function(){function e(){o(this,e)}return i(e,null,{setSourceAccount:{value:function(e,t){if(t.source){if(!c.isValidEd25519PublicKey(t.source))throw new Error("Source address is invalid")
e.sourceAccount=u.fromPublicKey(t.source).xdrAccountId()}}},fromXDRObject:{value:function(e){function t(e){return c.encodeEd25519PublicKey(e.ed25519())}var n={}
e.sourceAccount()&&(n.source=t(e.sourceAccount()))
var r=e.body().value()
switch(e.body().switch().name){case"createAccount":n.type="createAccount",n.destination=t(r.destination()),n.startingBalance=this._fromXDRAmount(r.startingBalance())
break
case"payment":n.type="payment",n.destination=t(r.destination()),n.asset=l.fromOperation(r.asset()),n.amount=this._fromXDRAmount(r.amount())
break
case"pathPayment":n.type="pathPayment",n.sendAsset=l.fromOperation(r.sendAsset()),n.sendMax=this._fromXDRAmount(r.sendMax()),n.destination=t(r.destination()),n.destAsset=l.fromOperation(r.destAsset()),n.destAmount=this._fromXDRAmount(r.destAmount())
var i=r.path()
for(var o in n.path=[],i)n.path.push(l.fromOperation(i[o]))
break
case"changeTrust":n.type="changeTrust",n.line=l.fromOperation(r.line()),n.limit=this._fromXDRAmount(r.limit())
break
case"allowTrust":n.type="allowTrust",n.trustor=t(r.trustor()),n.assetCode=r.asset().value().toString(),n.assetCode=p(n.assetCode,"\0"),n.authorize=r.authorize()
break
case"setOption":if(n.type="setOptions",r.inflationDest()&&(n.inflationDest=t(r.inflationDest())),n.clearFlags=r.clearFlags(),n.setFlags=r.setFlags(),n.masterWeight=r.masterWeight(),n.lowThreshold=r.lowThreshold(),n.medThreshold=r.medThreshold(),n.highThreshold=r.highThreshold(),n.homeDomain=void 0!==r.homeDomain()?r.homeDomain().toString("ascii"):void 0,r.signer()){var a={},s=r.signer().key().arm()
"ed25519"==s?a.ed25519PublicKey=t(r.signer().key()):"preAuthTx"==s?a.preAuthTx=r.signer().key().preAuthTx():"hashX"==s&&(a.sha256Hash=r.signer().key().hashX()),a.weight=r.signer().weight(),n.signer=a}break
case"manageOffer":n.type="manageOffer",n.selling=l.fromOperation(r.selling()),n.buying=l.fromOperation(r.buying()),n.amount=this._fromXDRAmount(r.amount()),n.price=this._fromXDRPrice(r.price()),n.offerId=r.offerId().toString()
break
case"createPassiveOffer":n.type="createPassiveOffer",n.selling=l.fromOperation(r.selling()),n.buying=l.fromOperation(r.buying()),n.amount=this._fromXDRAmount(r.amount()),n.price=this._fromXDRPrice(r.price())
break
case"accountMerge":n.type="accountMerge",n.destination=t(r)
break
case"manageDatum":n.type="manageData",n.name=r.dataName().toString("ascii"),n.value=r.dataValue()
break
case"inflation":n.type="inflation"
break
case"bumpSequence":n.type="bumpSequence",n.bumpTo=r.bumpTo().toString()
break
default:throw new Error("Unknown operation")}return n}},isValidAmount:{value:function(e){var t=void 0!==arguments[1]&&arguments[1]
if(!b(e))return!1
var n=void 0
try{n=new h(e)}catch(e){return!1}switch(!0){case!t&&n.isZero():case n.isNegative():case n.times(1e7).greaterThan(new h("9223372036854775807").toString()):case n.decimalPlaces()>7:case n.isNaN()||!n.isFinite():return!1
default:return!0}}},constructAmountRequirementsError:{value:function(e){return e+" argument must be of type String, represent a positive number and have at most 7 digits after the decimal"}},_checkUnsignedIntValue:{value:function(e,t){var n=void 0===arguments[2]?null:arguments[2]
if(!v(t))switch(b(t)&&(t=parseFloat(t)),!0){case!g(t)||!m(t)||t%1!=0:throw new Error(e+" value is invalid")
case t<0:throw new Error(e+" value must be unsigned")
case!n||n&&n(t,e):return t
default:throw new Error(e+" value is invalid")}}},_toXDRAmount:{value:function(e){var t=new h(e).mul(1e7)
return f.fromString(t.toString())}},_fromXDRAmount:{value:function(e){return new h(e).div(1e7).toString()}},_fromXDRPrice:{value:function(e){return new h(e.n()).div(new h(e.d())).toString()}},_toXDRPrice:{value:function(e){var t=void 0
if(e.n&&e.d)t=new s.Price(e)
else{e=new h(e)
var n=d(e)
t=new s.Price({n:parseInt(n[0]),d:parseInt(n[1])})}if(t.n()<0||t.d()<0)throw new Error("price must be positive")
return t}}}),e}()
_.accountMerge=y.accountMerge,_.allowTrust=y.allowTrust,_.bumpSequence=y.bumpSequence,_.changeTrust=y.changeTrust,_.createAccount=y.createAccount,_.createPassiveOffer=y.createPassiveOffer,_.inflation=y.inflation,_.manageData=y.manageData,_.manageOffer=y.manageOffer,_.pathPayment=y.pathPayment,_.payment=y.payment,_.setOptions=y.setOptions},function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]")
e.exports=function(e){return n.test(e)}},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(8)),s=r(n(11)),u=(r(n(110)),r(n(16))),c=r(n(59)),f=n(28).UnsignedHyper,l=r(n(34)),h="none"
t.MemoNone=h
var d="id"
t.MemoID=d
var p="text"
t.MemoText=p
var v="hash"
t.MemoHash=v
var b="return"
t.MemoReturn=b
t.Memo=function(){function t(n){var r=void 0===arguments[1]?null:arguments[1]
switch(o(this,t),this._type=n,this._value=r,this._type){case h:break
case d:t._validateIdValue(r)
break
case p:t._validateTextValue(r)
break
case v:case b:t._validateHashValue(r),u(r)&&(this._value=e.from(r,"hex"))
break
default:throw new Error("Invalid memo type")}}var n,r,g,m,y,_
return i(t,{type:{get:function(){return c(this._type)},set:function(e){throw new Error("Memo is immutable")}},value:{get:function(){switch(this._type){case h:return null
case d:case p:return c(this._value)
case v:case b:return e.from(this._value)
default:throw new Error("Invalid memo type")}},set:function(e){throw new Error("Memo is immutable")}},toXDRObject:{value:function(){switch(this._type){case h:return a.Memo.memoNone()
case d:return a.Memo.memoId(f.fromString(this._value))
case p:return a.Memo.memoText(this._value)
case v:return a.Memo.memoHash(this._value)
case b:return a.Memo.memoReturn(this._value)}}}},{_validateIdValue:{value:function(e){var t=new Error("Expects a int64 as a string. Got "+e)
if(!u(e))throw t
var n=void 0
try{n=new l(e)}catch(e){throw t}if(!n.isFinite())throw t
if(n.isNaN())throw t}},_validateTextValue:{value:function(e){if(!a.Memo.armTypeForArm("text").isValid(e))throw new Error("Expects string, array or buffer, max 28 bytes")}},_validateHashValue:{value:function(t){var n=new Error("Expects a 32 byte hash value or hex encoded string. Got "+t)
if(null===t||s(t))throw n
var r=void 0
if(u(t)){if(!/^[0-9A-Fa-f]{64}$/g.test(t))throw n
r=e.from(t,"hex")}else{if(!e.isBuffer(t))throw n
r=e.from(t)}if(!r.length||32!=r.length)throw n}},none:{value:function(){return new t(h)}},text:{value:(y=function(e){return new t(p,e)},_=function(e){return y.apply(this,arguments)},_.toString=function(){return y.toString()},_)},id:{value:(g=function(e){return new t(d,e)},m=function(e){return g.apply(this,arguments)},m.toString=function(){return g.toString()},m)},hash:{value:(n=function(e){return new t(v,e)},r=function(e){return n.apply(this,arguments)},r.toString=function(){return n.toString()},r)},return:{value:function(e){return new t(b,e)}},fromXDRObject:{value:function(e){switch(e.arm()){case"id":return t.id(e.value().toString())
case"text":return t.text(e.value())
case"hash":return t.hash(e.value())
case"retHash":return t.return(e.value())}if(void 0===e.value())return t.none()
throw new Error("Unknown type")}}}),t}()}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
var r=n(2),i=n(182),o=n(3).Buffer,a=new Array(16)
function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function u(e,t){return e<<t|e>>>32-t}function c(e,t,n,r,i,o,a){return u(e+(t&n|~t&r)+i+o|0,a)+t|0}function f(e,t,n,r,i,o,a){return u(e+(t&r|n&~r)+i+o|0,a)+t|0}function l(e,t,n,r,i,o,a){return u(e+(t^n^r)+i+o|0,a)+t|0}function h(e,t,n,r,i,o,a){return u(e+(n^(t|~r))+i+o|0,a)+t|0}r(s,i),s.prototype._update=function(){for(var e=a,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t)
var n=this._a,r=this._b,i=this._c,o=this._d
n=c(n,r,i,o,e[0],3614090360,7),o=c(o,n,r,i,e[1],3905402710,12),i=c(i,o,n,r,e[2],606105819,17),r=c(r,i,o,n,e[3],3250441966,22),n=c(n,r,i,o,e[4],4118548399,7),o=c(o,n,r,i,e[5],1200080426,12),i=c(i,o,n,r,e[6],2821735955,17),r=c(r,i,o,n,e[7],4249261313,22),n=c(n,r,i,o,e[8],1770035416,7),o=c(o,n,r,i,e[9],2336552879,12),i=c(i,o,n,r,e[10],4294925233,17),r=c(r,i,o,n,e[11],2304563134,22),n=c(n,r,i,o,e[12],1804603682,7),o=c(o,n,r,i,e[13],4254626195,12),i=c(i,o,n,r,e[14],2792965006,17),n=f(n,r=c(r,i,o,n,e[15],1236535329,22),i,o,e[1],4129170786,5),o=f(o,n,r,i,e[6],3225465664,9),i=f(i,o,n,r,e[11],643717713,14),r=f(r,i,o,n,e[0],3921069994,20),n=f(n,r,i,o,e[5],3593408605,5),o=f(o,n,r,i,e[10],38016083,9),i=f(i,o,n,r,e[15],3634488961,14),r=f(r,i,o,n,e[4],3889429448,20),n=f(n,r,i,o,e[9],568446438,5),o=f(o,n,r,i,e[14],3275163606,9),i=f(i,o,n,r,e[3],4107603335,14),r=f(r,i,o,n,e[8],1163531501,20),n=f(n,r,i,o,e[13],2850285829,5),o=f(o,n,r,i,e[2],4243563512,9),i=f(i,o,n,r,e[7],1735328473,14),n=l(n,r=f(r,i,o,n,e[12],2368359562,20),i,o,e[5],4294588738,4),o=l(o,n,r,i,e[8],2272392833,11),i=l(i,o,n,r,e[11],1839030562,16),r=l(r,i,o,n,e[14],4259657740,23),n=l(n,r,i,o,e[1],2763975236,4),o=l(o,n,r,i,e[4],1272893353,11),i=l(i,o,n,r,e[7],4139469664,16),r=l(r,i,o,n,e[10],3200236656,23),n=l(n,r,i,o,e[13],681279174,4),o=l(o,n,r,i,e[0],3936430074,11),i=l(i,o,n,r,e[3],3572445317,16),r=l(r,i,o,n,e[6],76029189,23),n=l(n,r,i,o,e[9],3654602809,4),o=l(o,n,r,i,e[12],3873151461,11),i=l(i,o,n,r,e[15],530742520,16),n=h(n,r=l(r,i,o,n,e[2],3299628645,23),i,o,e[0],4096336452,6),o=h(o,n,r,i,e[7],1126891415,10),i=h(i,o,n,r,e[14],2878612391,15),r=h(r,i,o,n,e[5],4237533241,21),n=h(n,r,i,o,e[12],1700485571,6),o=h(o,n,r,i,e[3],2399980690,10),i=h(i,o,n,r,e[10],4293915773,15),r=h(r,i,o,n,e[1],2240044497,21),n=h(n,r,i,o,e[8],1873313359,6),o=h(o,n,r,i,e[15],4264355552,10),i=h(i,o,n,r,e[6],2734768916,15),r=h(r,i,o,n,e[13],1309151649,21),n=h(n,r,i,o,e[4],4149444226,6),o=h(o,n,r,i,e[11],3174756917,10),i=h(i,o,n,r,e[2],718787259,15),r=h(r,i,o,n,e[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+r|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var e=o.allocUnsafe(16)
return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e},e.exports=s},function(e,t,n){e.exports=i
var r=n(35).EventEmitter
function i(){r.call(this)}n(2)(i,r),i.Readable=n(46),i.Writable=n(421),i.Duplex=n(422),i.Transform=n(423),i.PassThrough=n(424),i.Stream=i,i.prototype.pipe=function(e,t){var n=this
function i(t){e.writable&&!1===e.write(t)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),e.on("drain",o),e._isStdio||t&&!1===t.end||(n.on("end",s),n.on("close",u))
var a=!1
function s(){a||(a=!0,e.end())}function u(){a||(a=!0,"function"==typeof e.destroy&&e.destroy())}function c(e){if(f(),0===r.listenerCount(this,"error"))throw e}function f(){n.removeListener("data",i),e.removeListener("drain",o),n.removeListener("end",s),n.removeListener("close",u),n.removeListener("error",c),e.removeListener("error",c),n.removeListener("end",f),n.removeListener("close",f),e.removeListener("close",f)}return n.on("error",c),e.on("error",c),n.on("end",f),n.on("close",f),e.on("close",f),e.emit("pipe",n),e}},function(e,t,n){"use strict"
var r=n(1).Buffer,i=n(2),o=n(182),a=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],u=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],c=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],f=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],l=[0,1518500249,1859775393,2400959708,2840853838],h=[1352829926,1548603684,1836072691,2053994217,0]
function d(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(e,t){return e<<t|e>>>32-t}function v(e,t,n,r,i,o,a,s){return p(e+(t^n^r)+o+a|0,s)+i|0}function b(e,t,n,r,i,o,a,s){return p(e+(t&n|~t&r)+o+a|0,s)+i|0}function g(e,t,n,r,i,o,a,s){return p(e+((t|~n)^r)+o+a|0,s)+i|0}function m(e,t,n,r,i,o,a,s){return p(e+(t&r|n&~r)+o+a|0,s)+i|0}function y(e,t,n,r,i,o,a,s){return p(e+(t^(n|~r))+o+a|0,s)+i|0}i(d,o),d.prototype._update=function(){for(var e=a,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t)
for(var n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,d=0|this._e,_=0|this._a,w=0|this._b,x=0|this._c,k=0|this._d,S=0|this._e,E=0;E<80;E+=1){var A,O
E<16?(A=v(n,r,i,o,d,e[s[E]],l[0],c[E]),O=y(_,w,x,k,S,e[u[E]],h[0],f[E])):E<32?(A=b(n,r,i,o,d,e[s[E]],l[1],c[E]),O=m(_,w,x,k,S,e[u[E]],h[1],f[E])):E<48?(A=g(n,r,i,o,d,e[s[E]],l[2],c[E]),O=g(_,w,x,k,S,e[u[E]],h[2],f[E])):E<64?(A=m(n,r,i,o,d,e[s[E]],l[3],c[E]),O=b(_,w,x,k,S,e[u[E]],h[3],f[E])):(A=y(n,r,i,o,d,e[s[E]],l[4],c[E]),O=v(_,w,x,k,S,e[u[E]],h[4],f[E])),n=d,d=o,o=p(i,10),i=r,r=A,_=S,S=k,k=p(x,10),x=w,w=O}var T=this._b+i+k|0
this._b=this._c+o+S|0,this._c=this._d+d+_|0,this._d=this._e+n+w|0,this._e=this._a+r+x|0,this._a=T},d.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var e=r.alloc?r.alloc(20):new r(20)
return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e.writeInt32LE(this._e,16),e},e.exports=d},function(e,t,n){"use strict"
t.utils=n(430),t.Cipher=n(431),t.DES=n(432),t.CBC=n(433),t.EDE=n(434)},function(e,t,n){var r=n(435),i=n(443),o=n(192)
t.createCipher=t.Cipher=r.createCipher,t.createCipheriv=t.Cipheriv=r.createCipheriv,t.createDecipher=t.Decipher=i.createDecipher,t.createDecipheriv=t.Decipheriv=i.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(o)}},function(e,t,n){var r={ECB:n(436),CBC:n(437),CFB:n(438),CFB8:n(439),CFB1:n(440),OFB:n(441),CTR:n(190),GCM:n(190)},i=n(192)
for(var o in i)i[o].module=r[i[o].mode]
e.exports=i},function(e,t,n){(function(t){var r=n(6),i=n(43)
function o(e,n){var i=function(e){var t=a(e)
return{blinder:t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed(),unblinder:t.invm(e.modulus)}}(n),o=n.modulus.byteLength(),s=(r.mont(n.modulus),new r(e).mul(i.blinder).umod(n.modulus)),u=s.toRed(r.mont(n.prime1)),c=s.toRed(r.mont(n.prime2)),f=n.coefficient,l=n.prime1,h=n.prime2,d=u.redPow(n.exponent1),p=c.redPow(n.exponent2)
d=d.fromRed(),p=p.fromRed()
var v=d.isub(p).imul(f).umod(l)
return v.imul(h),p.iadd(v),new t(p.imul(i.unblinder).umod(n.modulus).toArray(!1,o))}function a(e){for(var t=e.modulus.byteLength(),n=new r(i(t));n.cmp(e.modulus)>=0||!n.umod(e.prime1)||!n.umod(e.prime2);)n=new r(i(t))
return n}e.exports=o,o.getr=a}).call(this,n(1).Buffer)},function(e,t,n){var r=t
r.utils=n(24),r.common=n(55),r.sha=n(459),r.ripemd=n(463),r.hmac=n(464),r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t
e.exports=n}).call(this,n(5))},function(e,t){var n=Function.prototype.toString
e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},function(e,t,n){var r=n(129)
e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(31),i=function(){try{var e=r(Object,"defineProperty")
return e({},"",{}),e}catch(e){}}()
e.exports=i},function(e,t,n){var r=n(131),i=n(89),o=n(7),a=n(90),s=n(65),u=n(132),c=Object.prototype.hasOwnProperty
e.exports=function(e,t){var n=o(e),f=!n&&i(e),l=!n&&!f&&a(e),h=!n&&!f&&!l&&u(e),d=n||f||l||h,p=d?r(e.length,String):[],v=p.length
for(var b in e)!t&&!c.call(e,b)||d&&("length"==b||l&&("offset"==b||"parent"==b)||h&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||s(b,v))||p.push(b)
return p}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n)
return r}},function(e,t,n){var r=n(250),i=n(92),o=n(93),a=o&&o.isTypedArray,s=a?i(a):r
e.exports=s},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(96),i=n(97),o=n(95),a=n(134),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,o(e)),e=i(e)
return t}:a
e.exports=s},function(e,t,n){var r=n(137),i=n(95),o=n(38)
e.exports=function(e){return r(e,o,i)}},function(e,t,n){var r=n(96),i=n(7)
e.exports=function(e,t,n){var o=t(e)
return i(e)?o:r(o,n(e))}},function(e,t,n){var r=n(20).Uint8Array
e.exports=r},function(e,t,n){var r=n(127),i=n(99),o=n(100),a=n(7)
e.exports=function(e,t){return(a(e)?r:i)(e,o(t))}},function(e,t,n){var r=n(281)()
e.exports=r},function(e,t,n){(function(e,r){var i
!function(o){t&&t.nodeType,e&&e.nodeType
var a="object"==typeof r&&r
a.global!==a&&a.window!==a&&a.self
var s,u=2147483647,c=36,f=1,l=26,h=38,d=700,p=72,v=128,b="-",g=/^xn--/,m=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=c-f,x=Math.floor,k=String.fromCharCode
function S(e){throw new RangeError(_[e])}function E(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n])
return r}function A(e,t){var n=e.split("@"),r=""
return n.length>1&&(r=n[0]+"@",e=n[1]),r+E((e=e.replace(y,".")).split("."),t).join(".")}function O(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function T(e){return E(e,function(e){var t=""
return e>65535&&(t+=k((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=k(e)}).join("")}function M(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function P(e,t,n){var r=0
for(e=n?x(e/d):e>>1,e+=x(e/t);e>w*l>>1;r+=c)e=x(e/w)
return x(r+(w+1)*e/(e+h))}function I(e){var t,n,r,i,o,a,s,h,d,g,m,y=[],_=e.length,w=0,k=v,E=p
for((n=e.lastIndexOf(b))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&S("not-basic"),y.push(e.charCodeAt(r))
for(i=n>0?n+1:0;i<_;){for(o=w,a=1,s=c;i>=_&&S("invalid-input"),((h=(m=e.charCodeAt(i++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:c)>=c||h>x((u-w)/a))&&S("overflow"),w+=h*a,!(h<(d=s<=E?f:s>=E+l?l:s-E));s+=c)a>x(u/(g=c-d))&&S("overflow"),a*=g
E=P(w-o,t=y.length+1,0==o),x(w/t)>u-k&&S("overflow"),k+=x(w/t),w%=t,y.splice(w++,0,k)}return T(y)}function C(e){var t,n,r,i,o,a,s,h,d,g,m,y,_,w,E,A=[]
for(y=(e=O(e)).length,t=v,n=0,o=p,a=0;a<y;++a)(m=e[a])<128&&A.push(k(m))
for(r=i=A.length,i&&A.push(b);r<y;){for(s=u,a=0;a<y;++a)(m=e[a])>=t&&m<s&&(s=m)
for(s-t>x((u-n)/(_=r+1))&&S("overflow"),n+=(s-t)*_,t=s,a=0;a<y;++a)if((m=e[a])<t&&++n>u&&S("overflow"),m==t){for(h=n,d=c;!(h<(g=d<=o?f:d>=o+l?l:d-o));d+=c)E=h-g,w=c-g,A.push(k(M(g+E%w,0))),h=x(E/w)
A.push(k(M(h,0))),o=P(n,_,r==i),n=0,++r}++n,++t}return A.join("")}s={version:"1.3.2",ucs2:{decode:O,encode:T},decode:I,encode:C,toASCII:function(e){return A(e,function(e){return m.test(e)?"xn--"+C(e):e})},toUnicode:function(e){return A(e,function(e){return g.test(e)?I(e.slice(4).toLowerCase()):e})}},void 0===(i=function(){return s}.call(t,n,t,e))||(e.exports=i)}()}).call(this,n(39)(e),n(5))},function(e,t,n){var r,i
!function(o,a){"use strict"
e.exports?e.exports=a():void 0===(i="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=i)}(0,function(e){"use strict"
var t=e&&e.IPv6
return{best:function(e){var t,n,r=e.toLowerCase().split(":"),i=r.length,o=8
for(""===r[0]&&""===r[1]&&""===r[2]?(r.shift(),r.shift()):""===r[0]&&""===r[1]?r.shift():""===r[i-1]&&""===r[i-2]&&r.pop(),-1!==r[(i=r.length)-1].indexOf(".")&&(o=7),t=0;t<i&&""!==r[t];t++);if(t<o)for(r.splice(t,1,"0000");r.length<o;)r.splice(t,0,"0000")
for(var a=0;a<o;a++){n=r[a].split("")
for(var s=0;s<3&&"0"===n[0]&&n.length>1;s++)n.splice(0,1)
r[a]=n.join("")}var u=-1,c=0,f=0,l=-1,h=!1
for(a=0;a<o;a++)h?"0"===r[a]?f+=1:(h=!1,f>c&&(u=l,c=f)):"0"===r[a]&&(h=!0,l=a,f=1)
f>c&&(u=l,c=f),c>1&&r.splice(u,c,""),i=r.length
var d=""
for(""===r[0]&&(d=":"),a=0;a<i&&(d+=r[a],a!==i-1);a++)d+=":"
return""===r[i-1]&&(d+=":"),d},noConflict:function(){return e.IPv6===this&&(e.IPv6=t),this}}})},function(e,t,n){var r,i
!function(o,a){"use strict"
e.exports?e.exports=a():void 0===(i="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=i)}(0,function(e){"use strict"
var t=e&&e.SecondLevelDomains,n={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return!1
var r=e.lastIndexOf(".",t-1)
if(r<=0||r>=t-1)return!1
var i=n.list[e.slice(t+1)]
return!!i&&i.indexOf(" "+e.slice(r+1,t)+" ")>=0},is:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return!1
if(e.lastIndexOf(".",t-1)>=0)return!1
var r=n.list[e.slice(t+1)]
return!!r&&r.indexOf(" "+e.slice(0,t)+" ")>=0},get:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return null
var r=e.lastIndexOf(".",t-1)
if(r<=0||r>=t-1)return null
var i=n.list[e.slice(t+1)]
return i?i.indexOf(" "+e.slice(r+1,t)+" ")<0?null:e.slice(r+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}}
return n})},function(e,t){var n={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){(function(e){var r=n(297),i=n(147),o=n(306),a=n(307),s=n(101),u=t
u.request=function(t,n){t="string"==typeof t?s.parse(t):o(t)
var i=-1===e.location.protocol.search(/^https?:$/)?"http:":"",a=t.protocol||i,u=t.hostname||t.host,c=t.port,f=t.path||"/"
u&&-1!==u.indexOf(":")&&(u="["+u+"]"),t.url=(u?a+"//"+u:"")+(c?":"+c:"")+f,t.method=(t.method||"GET").toUpperCase(),t.headers=t.headers||{}
var l=new r(t)
return n&&l.on("response",n),l},u.get=function(e,t){var n=u.request(e,t)
return n.end(),n},u.ClientRequest=r,u.IncomingMessage=i.IncomingMessage,u.Agent=function(){},u.Agent.defaultMaxSockets=4,u.globalAgent=new u.Agent,u.STATUS_CODES=a,u.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}).call(this,n(5))},function(e,t,n){(function(e){t.fetch=s(e.fetch)&&s(e.ReadableStream),t.writableStream=s(e.WritableStream),t.abortController=s(e.AbortController),t.blobConstructor=!1
try{new Blob([new ArrayBuffer(1)]),t.blobConstructor=!0}catch(e){}var n
function r(){if(void 0!==n)return n
if(e.XMLHttpRequest){n=new e.XMLHttpRequest
try{n.open("GET",e.XDomainRequest?"/":"https://example.com")}catch(e){n=null}}else n=null
return n}function i(e){var t=r()
if(!t)return!1
try{return t.responseType=e,t.responseType===e}catch(e){}return!1}var o=void 0!==e.ArrayBuffer,a=o&&s(e.ArrayBuffer.prototype.slice)
function s(e){return"function"==typeof e}t.arraybuffer=t.fetch||o&&i("arraybuffer"),t.msstream=!t.fetch&&a&&i("ms-stream"),t.mozchunkedarraybuffer=!t.fetch&&o&&i("moz-chunked-arraybuffer"),t.overrideMimeType=t.fetch||!!r()&&s(r().overrideMimeType),t.vbArray=s(e.VBArray),n=null}).call(this,n(5))},function(e,t,n){(function(e,r,i){var o=n(146),a=n(2),s=n(46),u=t.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},c=t.IncomingMessage=function(t,n,a,u){var c=this
if(s.Readable.call(c),c._mode=a,c.headers={},c.rawHeaders=[],c.trailers={},c.rawTrailers=[],c.on("end",function(){e.nextTick(function(){c.emit("close")})}),"fetch"===a){if(c._fetchResponse=n,c.url=n.url,c.statusCode=n.status,c.statusMessage=n.statusText,n.headers.forEach(function(e,t){c.headers[t.toLowerCase()]=e,c.rawHeaders.push(t,e)}),o.writableStream){var f=new WritableStream({write:function(e){return new Promise(function(t,n){c._destroyed?n():c.push(new r(e))?t():c._resumeFetch=t})},close:function(){i.clearTimeout(u),c._destroyed||c.push(null)},abort:function(e){c._destroyed||c.emit("error",e)}})
try{return void n.body.pipeTo(f).catch(function(e){i.clearTimeout(u),c._destroyed||c.emit("error",e)})}catch(e){}}var l=n.body.getReader()
!function e(){l.read().then(function(t){if(!c._destroyed){if(t.done)return i.clearTimeout(u),void c.push(null)
c.push(new r(t.value)),e()}}).catch(function(e){i.clearTimeout(u),c._destroyed||c.emit("error",e)})}()}else{if(c._xhr=t,c._pos=0,c.url=t.responseURL,c.statusCode=t.status,c.statusMessage=t.statusText,t.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var t=e.match(/^([^:]+):\s*(.*)/)
if(t){var n=t[1].toLowerCase()
"set-cookie"===n?(void 0===c.headers[n]&&(c.headers[n]=[]),c.headers[n].push(t[2])):void 0!==c.headers[n]?c.headers[n]+=", "+t[2]:c.headers[n]=t[2],c.rawHeaders.push(t[1],t[2])}}),c._charset="x-user-defined",!o.overrideMimeType){var h=c.rawHeaders["mime-type"]
if(h){var d=h.match(/;\s*charset=([^;])(;|$)/)
d&&(c._charset=d[1].toLowerCase())}c._charset||(c._charset="utf-8")}}}
a(c,s.Readable),c.prototype._read=function(){var e=this._resumeFetch
e&&(this._resumeFetch=null,e())},c.prototype._onXHRProgress=function(){var e=this,t=e._xhr,n=null
switch(e._mode){case"text:vbarray":if(t.readyState!==u.DONE)break
try{n=new i.VBArray(t.responseBody).toArray()}catch(e){}if(null!==n){e.push(new r(n))
break}case"text":try{n=t.responseText}catch(t){e._mode="text:vbarray"
break}if(n.length>e._pos){var o=n.substr(e._pos)
if("x-user-defined"===e._charset){for(var a=new r(o.length),s=0;s<o.length;s++)a[s]=255&o.charCodeAt(s)
e.push(a)}else e.push(o,e._charset)
e._pos=n.length}break
case"arraybuffer":if(t.readyState!==u.DONE||!t.response)break
n=t.response,e.push(new r(new Uint8Array(n)))
break
case"moz-chunked-arraybuffer":if(n=t.response,t.readyState!==u.LOADING||!n)break
e.push(new r(new Uint8Array(n)))
break
case"ms-stream":if(n=t.response,t.readyState!==u.LOADING)break
var c=new i.MSStreamReader
c.onprogress=function(){c.result.byteLength>e._pos&&(e.push(new r(new Uint8Array(c.result.slice(e._pos)))),e._pos=c.result.byteLength)},c.onload=function(){e.push(null)},c.readAsArrayBuffer(n)}e._xhr.readyState===u.DONE&&"ms-stream"!==e._mode&&e.push(null)}}).call(this,n(14),n(1).Buffer,n(5))},function(e,t,n){"use strict";(function(t,r){var i=n(69)
e.exports=y
var o,a=n(144)
y.ReadableState=m
n(35).EventEmitter
var s=function(e,t){return e.listeners(t).length},u=n(149),c=n(3).Buffer,f=t.Uint8Array||function(){}
var l=n(47)
l.inherits=n(2)
var h=n(298),d=void 0
d=h&&h.debuglog?h.debuglog("stream"):function(){}
var p,v=n(299),b=n(150)
l.inherits(y,u)
var g=["error","close","destroy","pause","resume"]
function m(e,t){e=e||{}
var r=t instanceof(o=o||n(32))
this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode)
var i=e.highWaterMark,a=e.readableHighWaterMark,s=this.objectMode?16:16384
this.highWaterMark=i||0===i?i:r&&(a||0===a)?a:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new v,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(p||(p=n(103).StringDecoder),this.decoder=new p(e.encoding),this.encoding=e.encoding)}function y(e){if(o=o||n(32),!(this instanceof y))return new y(e)
this._readableState=new m(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),u.call(this)}function _(e,t,n,r,i){var o,a=e._readableState
null===t?(a.reading=!1,function(e,t){if(t.ended)return
if(t.decoder){var n=t.decoder.end()
n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,S(e)}(e,a)):(i||(o=function(e,t){var n
r=t,c.isBuffer(r)||r instanceof f||"string"==typeof t||void 0===t||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"))
var r
return n}(a,t)),o?e.emit("error",o):a.objectMode||t&&t.length>0?("string"==typeof t||a.objectMode||Object.getPrototypeOf(t)===c.prototype||(t=function(e){return c.from(e)}(t)),r?a.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):w(e,a,t,!0):a.ended?e.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!n?(t=a.decoder.write(t),a.objectMode||0!==t.length?w(e,a,t,!1):A(e,a)):w(e,a,t,!1))):r||(a.reading=!1))
return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(a)}function w(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(e.emit("data",n),e.read(0)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&S(e)),A(e,t)}Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),y.prototype.destroy=b.destroy,y.prototype._undestroy=b.undestroy,y.prototype._destroy=function(e,t){this.push(null),t(e)},y.prototype.push=function(e,t){var n,r=this._readableState
return r.objectMode?n=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=c.from(e,t),t=""),n=!0),_(this,e,t,!1,n)},y.prototype.unshift=function(e){return _(this,e,null,!0,!1)},y.prototype.isPaused=function(){return!1===this._readableState.flowing},y.prototype.setEncoding=function(e){return p||(p=n(103).StringDecoder),this._readableState.decoder=new p(e),this._readableState.encoding=e,this}
var x=8388608
function k(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=x?e=x:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function S(e){var t=e._readableState
t.needReadable=!1,t.emittedReadable||(d("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?i.nextTick(E,e):E(e))}function E(e){d("emit readable"),e.emit("readable"),P(e)}function A(e,t){t.readingMore||(t.readingMore=!0,i.nextTick(O,e,t))}function O(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(d("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length
t.readingMore=!1}function T(e){d("readable nexttick read 0"),e.read(0)}function M(e,t){t.reading||(d("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),P(e),t.flowing&&!t.reading&&e.read(0)}function P(e){var t=e._readableState
for(d("flow",t.flowing);t.flowing&&null!==e.read(););}function I(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):n=function(e,t,n){var r
e<t.head.data.length?(r=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):r=e===t.head.data.length?t.shift():n?function(e,t){var n=t.head,r=1,i=n.data
e-=i.length
for(;n=n.next;){var o=n.data,a=e>o.length?o.length:e
if(a===o.length?i+=o:i+=o.slice(0,e),0===(e-=a)){a===o.length?(++r,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=o.slice(a))
break}++r}return t.length-=r,i}(e,t):function(e,t){var n=c.allocUnsafe(e),r=t.head,i=1
r.data.copy(n),e-=r.data.length
for(;r=r.next;){var o=r.data,a=e>o.length?o.length:e
if(o.copy(n,n.length-e,0,a),0===(e-=a)){a===o.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=o.slice(a))
break}++i}return t.length-=i,n}(e,t)
return r}(e,t.buffer,t.decoder),n)
var n}function C(e){var t=e._readableState
if(t.length>0)throw new Error('"endReadable()" called on non-empty stream')
t.endEmitted||(t.ended=!0,i.nextTick(R,t,e))}function R(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function B(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}y.prototype.read=function(e){d("read",e),e=parseInt(e,10)
var t=this._readableState,n=e
if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return d("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?C(this):S(this),null
if(0===(e=k(e,t))&&t.ended)return 0===t.length&&C(this),null
var r,i=t.needReadable
return d("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&d("length less than watermark",i=!0),t.ended||t.reading?d("reading or ended",i=!1):i&&(d("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=k(n,t))),null===(r=e>0?I(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&C(this)),null!==r&&this.emit("data",r),r},y.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},y.prototype.pipe=function(e,t){var n=this,o=this._readableState
switch(o.pipesCount){case 0:o.pipes=e
break
case 1:o.pipes=[o.pipes,e]
break
default:o.pipes.push(e)}o.pipesCount+=1,d("pipe count=%d opts=%j",o.pipesCount,t)
var u=(!t||!1!==t.end)&&e!==r.stdout&&e!==r.stderr?f:y
function c(t,r){d("onunpipe"),t===n&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,d("cleanup"),e.removeListener("close",g),e.removeListener("finish",m),e.removeListener("drain",l),e.removeListener("error",b),e.removeListener("unpipe",c),n.removeListener("end",f),n.removeListener("end",y),n.removeListener("data",v),h=!0,!o.awaitDrain||e._writableState&&!e._writableState.needDrain||l())}function f(){d("onend"),e.end()}o.endEmitted?i.nextTick(u):n.once("end",u),e.on("unpipe",c)
var l=function(e){return function(){var t=e._readableState
d("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&s(e,"data")&&(t.flowing=!0,P(e))}}(n)
e.on("drain",l)
var h=!1
var p=!1
function v(t){d("ondata"),p=!1,!1!==e.write(t)||p||((1===o.pipesCount&&o.pipes===e||o.pipesCount>1&&-1!==B(o.pipes,e))&&!h&&(d("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,p=!0),n.pause())}function b(t){d("onerror",t),y(),e.removeListener("error",b),0===s(e,"error")&&e.emit("error",t)}function g(){e.removeListener("finish",m),y()}function m(){d("onfinish"),e.removeListener("close",g),y()}function y(){d("unpipe"),n.unpipe(e)}return n.on("data",v),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n)
e._events&&e._events[t]?a(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(e,"error",b),e.once("close",g),e.once("finish",m),e.emit("pipe",n),o.flowing||(d("pipe resume"),n.resume()),e},y.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1}
if(0===t.pipesCount)return this
if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n),this)
if(!e){var r=t.pipes,i=t.pipesCount
t.pipes=null,t.pipesCount=0,t.flowing=!1
for(var o=0;o<i;o++)r[o].emit("unpipe",this,n)
return this}var a=B(t.pipes,e)
return-1===a?this:(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n),this)},y.prototype.on=function(e,t){var n=u.prototype.on.call(this,e,t)
if("data"===e)!1!==this._readableState.flowing&&this.resume()
else if("readable"===e){var r=this._readableState
r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&S(this):i.nextTick(T,this))}return n},y.prototype.addListener=y.prototype.on,y.prototype.resume=function(){var e=this._readableState
return e.flowing||(d("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,i.nextTick(M,e,t))}(this,e)),this},y.prototype.pause=function(){return d("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(d("pause"),this._readableState.flowing=!1,this.emit("pause")),this},y.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1
for(var i in e.on("end",function(){if(d("wrapped end"),n.decoder&&!n.ended){var e=n.decoder.end()
e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(i){(d("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(t.push(i)||(r=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i))
for(var o=0;o<g.length;o++)e.on(g[o],this.emit.bind(this,g[o]))
return this._read=function(t){d("wrapped _read",t),r&&(r=!1,e.resume())},this},Object.defineProperty(y.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),y._fromList=I}).call(this,n(5),n(14))},function(e,t,n){e.exports=n(35).EventEmitter},function(e,t,n){"use strict"
var r=n(69)
function i(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var n=this,o=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed
return o||a?(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||r.nextTick(i,this,e),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(r.nextTick(i,n,e),n._writableState&&(n._writableState.errorEmitted=!0)):t&&t(e)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(e,t,n){"use strict"
e.exports=a
var r=n(32),i=n(47)
function o(e,t){var n=this._transformState
n.transforming=!1
var r=n.writecb
if(!r)return this.emit("error",new Error("write callback called multiple times"))
n.writechunk=null,n.writecb=null,null!=t&&this.push(t),r(e)
var i=this._readableState
i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e)
r.call(this,e),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",s)}function s(){var e=this
"function"==typeof this._flush?this._flush(function(t,n){u(e,t,n)}):u(this,null,null)}function u(e,t,n){if(t)return e.emit("error",t)
if(null!=n&&e.push(n),e._writableState.length)throw new Error("Calling transform done when ws.length != 0")
if(e._transformState.transforming)throw new Error("Calling transform done when still transforming")
return e.push(null)}i.inherits=n(2),i.inherits(a,r),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},a.prototype._transform=function(e,t,n){throw new Error("_transform() is not implemented")},a.prototype._write=function(e,t,n){var r=this._transformState
if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(e){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},a.prototype._destroy=function(e,t){var n=this
r.prototype._destroy.call(this,e,function(e){t(e),n.emit("close")})}},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r])
return n},i=/%[sdj%]/g
t.format=function(e){if(!g(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]))
return t.join(" ")}n=1
for(var r=arguments,o=r.length,a=String(e).replace(i,function(e){if("%%"===e)return"%"
if(n>=o)return e
switch(e){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),u=r[n];n<o;u=r[++n])v(u)||!_(u)?a+=" "+u:a+=" "+s(u)
return a},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n
if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)}
var i=!1
return function(){if(!i){if(e.throwDeprecation)throw new Error(r)
e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}}
var o,a={}
function s(e,n){var r={seen:[],stylize:c}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),p(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,e,r.depth)}function u(e,t){var n=s.styles[t]
return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function c(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&k(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e)
return g(i)||(i=f(e,i,r)),i}var o=function(e,t){if(m(t))return e.stylize("undefined","undefined")
if(g(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return e.stylize(n,"string")}if(b(t))return e.stylize(""+t,"number")
if(p(t))return e.stylize(""+t,"boolean")
if(v(t))return e.stylize("null","null")}(e,n)
if(o)return o
var a=Object.keys(n),s=function(e){var t={}
return e.forEach(function(e,n){t[e]=!0}),t}(a)
if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return l(n)
if(0===a.length){if(k(n)){var u=n.name?": "+n.name:""
return e.stylize("[Function"+u+"]","special")}if(y(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp")
if(w(n))return e.stylize(Date.prototype.toString.call(n),"date")
if(x(n))return l(n)}var c,_="",S=!1,E=["{","}"];(d(n)&&(S=!0,E=["[","]"]),k(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]")
return y(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+l(n)),0!==a.length||S&&0!=n.length?r<0?y(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=S?function(e,t,n,r,i){for(var o=[],a=0,s=t.length;a<s;++a)O(t,String(a))?o.push(h(e,t,n,r,String(a),!0)):o.push("")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,n,r,i,!0))}),o}(e,n,r,s,a):a.map(function(t){return h(e,n,r,s,t,S)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]
return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,_,E)):E[0]+_+E[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,n,r,i,o){var a,s,u
if((u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),O(r,i)||(a="["+i+"]"),s||(e.seen.indexOf(u.value)<0?(s=v(n)?f(e,u.value,null):f(e,u.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),m(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function d(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function v(e){return null===e}function b(e){return"number"==typeof e}function g(e){return"string"==typeof e}function m(e){return void 0===e}function y(e){return _(e)&&"[object RegExp]"===S(e)}function _(e){return"object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===S(e)}function x(e){return _(e)&&("[object Error]"===S(e)||e instanceof Error)}function k(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(m(o)&&(o=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=e.pid
a[n]=function(){var e=t.format.apply(t,arguments)
console.error("%s %d: %s",n,r,e)}}else a[n]=function(){}
return a[n]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=p,t.isNull=v,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=g,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=y,t.isObject=_,t.isDate=w,t.isError=x,t.isFunction=k,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(308)
var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n
console.log("%s - %s",(e=new Date,n=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":"),[e.getDate(),A[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(2),t._extend=function(e,t){if(!t||!_(t))return e
for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]]
return e}
var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0
function M(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value")
n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function')
if(T&&e[T]){var t
if("function"!=typeof(t=e[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function')
return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o])
i.push(function(e,r){e?n(e):t(r)})
try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=T,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function')
function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r])
var i=n.pop()
if("function"!=typeof i)throw new TypeError("The last argument must be of type Function")
var o=this,a=function(){return i.apply(o,arguments)}
t.apply(this,n).then(function(t){e.nextTick(a,null,t)},function(t){e.nextTick(M,t,a)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(14))},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e:{default:e}},i=function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i)
o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}return e}
Object.defineProperty(t,"__esModule",{value:!0}),i(t,r(n(41))),i(t,r(n(344))),i(t,r(n(73))),i(t,r(n(345))),i(t,r(n(346))),i(t,r(n(347))),i(t,r(n(348))),i(t,r(n(165))),i(t,r(n(350))),i(t,r(n(351))),i(t,r(n(352))),i(t,r(n(353))),i(t,r(n(356))),i(t,r(n(357))),i(t,r(n(168))),i(t,r(n(358))),i(t,r(n(361))),i(t,r(n(372)))},function(e,t,n){var r=n(314),i=n(327),o=n(68),a=n(7),s=n(334)
e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?a(e)?i(e[0],e[1]):r(e):s(e)}},function(e,t,n){var r=n(316),i=n(21)
e.exports=function e(t,n,o,a,s){return t===n||(null==t||null==n||!i(t)&&!i(n)?t!=t&&n!=n:r(t,n,o,a,e,s))}},function(e,t,n){var r=n(317),i=n(320),o=n(321),a=1,s=2
e.exports=function(e,t,n,u,c,f){var l=n&a,h=e.length,d=t.length
if(h!=d&&!(l&&d>h))return!1
var p=f.get(e)
if(p&&f.get(t))return p==t
var v=-1,b=!0,g=n&s?new r:void 0
for(f.set(e,t),f.set(t,e);++v<h;){var m=e[v],y=t[v]
if(u)var _=l?u(y,m,v,t,e,f):u(m,y,v,e,t,f)
if(void 0!==_){if(_)continue
b=!1
break}if(g){if(!i(t,function(e,t){if(!o(g,t)&&(m===e||c(m,e,n,u,f)))return g.push(t)})){b=!1
break}}else if(m!==y&&!c(m,y,n,u,f)){b=!1
break}}return f.delete(e),f.delete(t),b}},function(e,t,n){var r=n(26)
e.exports=function(e){return e==e&&!r(e)}},function(e,t){e.exports=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}}},function(e,t,n){var r=n(332),i=n(333)
e.exports=function(e,t){return null!=e&&i(e,t,r)}},function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},function(e,t,n){var r=n(62),i=n(45),o=n(65),a=n(26)
e.exports=function(e,t,n){if(!a(n))return!1
var s=typeof t
return!!("number"==s?i(n)&&o(t,n.length):"string"==s&&t in n)&&r(n[t],e)}},function(e,t,n){var r=n(340),i=Math.max
e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,a=-1,s=i(o.length-t,0),u=Array(s);++a<s;)u[a]=o[t+a]
a=-1
for(var c=Array(t+1);++a<t;)c[a]=o[a]
return c[t]=n(u),r(e,this,c)}}},function(e,t,n){var r=n(341),i=n(343)(r)
e.exports=i},function(e,t,n){var r,i,o
i=[],void 0===(o="function"==typeof(r=function(){"use strict"
function e(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}e.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=function(e){return!0===(e&&e.__isLong__)}
var t={},n={}
e.fromInt=function(r,i){var o,a
return i?0<=(r>>>=0)&&r<256&&(a=n[r])?a:(o=new e(r,(0|r)<0?-1:0,!0),0<=r&&r<256&&(n[r]=o),o):-128<=(r|=0)&&r<128&&(a=t[r])?a:(o=new e(r,r<0?-1:0,!1),-128<=r&&r<128&&(t[r]=o),o)},e.fromNumber=function(t,n){return n=!!n,isNaN(t)||!isFinite(t)?e.ZERO:!n&&t<=-o?e.MIN_VALUE:!n&&t+1>=o?e.MAX_VALUE:n&&t>=i?e.MAX_UNSIGNED_VALUE:t<0?e.fromNumber(-t,n).negate():new e(t%r|0,t/r|0,n)},e.fromBits=function(t,n,r){return new e(t,n,r)},e.fromString=function(t,n,r){if(0===t.length)throw Error("number format error: empty string")
if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return e.ZERO
if("number"==typeof n&&(r=n,n=!1),(r=r||10)<2||36<r)throw Error("radix out of range: "+r)
var i
if((i=t.indexOf("-"))>0)throw Error('number format error: interior "-" character: '+t)
if(0===i)return e.fromString(t.substring(1),n,r).negate()
for(var o=e.fromNumber(Math.pow(r,8)),a=e.ZERO,s=0;s<t.length;s+=8){var u=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+u),r)
if(u<8){var f=e.fromNumber(Math.pow(r,u))
a=a.multiply(f).add(e.fromNumber(c))}else a=(a=a.multiply(o)).add(e.fromNumber(c))}return a.unsigned=n,a},e.fromValue=function(t){return t instanceof e?t:"number"==typeof t?e.fromNumber(t):"string"==typeof t?e.fromString(t):new e(t.low,t.high,t.unsigned)}
var r=4294967296,i=r*r,o=i/2,a=e.fromInt(1<<24)
return e.ZERO=e.fromInt(0),e.UZERO=e.fromInt(0,!0),e.ONE=e.fromInt(1),e.UONE=e.fromInt(1,!0),e.NEG_ONE=e.fromInt(-1),e.MAX_VALUE=e.fromBits(-1,2147483647,!1),e.MAX_UNSIGNED_VALUE=e.fromBits(-1,-1,!0),e.MIN_VALUE=e.fromBits(0,-2147483648,!1),e.prototype.toInt=function(){return this.unsigned?this.low>>>0:this.low},e.prototype.toNumber=function(){return this.unsigned?(this.high>>>0)*r+(this.low>>>0):this.high*r+(this.low>>>0)},e.prototype.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix out of range: "+t)
if(this.isZero())return"0"
var n
if(this.isNegative()){if(this.equals(e.MIN_VALUE)){var r=e.fromNumber(t),i=this.divide(r)
return n=i.multiply(r).subtract(this),i.toString(t)+n.toInt().toString(t)}return"-"+this.negate().toString(t)}var o=e.fromNumber(Math.pow(t,6),this.unsigned)
n=this
for(var a="";;){var s=n.divide(o),u=(n.subtract(s.multiply(o)).toInt()>>>0).toString(t)
if((n=s).isZero())return u+a
for(;u.length<6;)u="0"+u
a=""+u+a}},e.prototype.getHighBits=function(){return this.high},e.prototype.getHighBitsUnsigned=function(){return this.high>>>0},e.prototype.getLowBits=function(){return this.low},e.prototype.getLowBitsUnsigned=function(){return this.low>>>0},e.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(e.MIN_VALUE)?64:this.negate().getNumBitsAbs()
for(var t=0!=this.high?this.high:this.low,n=31;n>0&&0==(t&1<<n);n--);return 0!=this.high?n+33:n+1},e.prototype.isZero=function(){return 0===this.high&&0===this.low},e.prototype.isNegative=function(){return!this.unsigned&&this.high<0},e.prototype.isPositive=function(){return this.unsigned||this.high>=0},e.prototype.isOdd=function(){return 1==(1&this.low)},e.prototype.isEven=function(){return 0==(1&this.low)},e.prototype.equals=function(t){return e.isLong(t)||(t=e.fromValue(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&this.high===t.high&&this.low===t.low},e.eq=e.prototype.equals,e.prototype.notEquals=function(e){return!this.equals(e)},e.neq=e.prototype.notEquals,e.prototype.lessThan=function(e){return this.compare(e)<0},e.prototype.lt=e.prototype.lessThan,e.prototype.lessThanOrEqual=function(e){return this.compare(e)<=0},e.prototype.lte=e.prototype.lessThanOrEqual,e.prototype.greaterThan=function(e){return this.compare(e)>0},e.prototype.gt=e.prototype.greaterThan,e.prototype.greaterThanOrEqual=function(e){return this.compare(e)>=0},e.prototype.gte=e.prototype.greaterThanOrEqual,e.prototype.compare=function(t){if(e.isLong(t)||(t=e.fromValue(t)),this.equals(t))return 0
var n=this.isNegative(),r=t.isNegative()
return n&&!r?-1:!n&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1},e.prototype.negate=function(){return!this.unsigned&&this.equals(e.MIN_VALUE)?e.MIN_VALUE:this.not().add(e.ONE)},e.prototype.neg=e.prototype.negate,e.prototype.add=function(t){e.isLong(t)||(t=e.fromValue(t))
var n=this.high>>>16,r=65535&this.high,i=this.low>>>16,o=65535&this.low,a=t.high>>>16,s=65535&t.high,u=t.low>>>16,c=0,f=0,l=0,h=0
return l+=(h+=o+(65535&t.low))>>>16,h&=65535,f+=(l+=i+u)>>>16,l&=65535,c+=(f+=r+s)>>>16,f&=65535,c+=n+a,c&=65535,e.fromBits(l<<16|h,c<<16|f,this.unsigned)},e.prototype.subtract=function(t){return e.isLong(t)||(t=e.fromValue(t)),this.add(t.negate())},e.prototype.sub=e.prototype.subtract,e.prototype.multiply=function(t){if(this.isZero())return e.ZERO
if(e.isLong(t)||(t=e.fromValue(t)),t.isZero())return e.ZERO
if(this.equals(e.MIN_VALUE))return t.isOdd()?e.MIN_VALUE:e.ZERO
if(t.equals(e.MIN_VALUE))return this.isOdd()?e.MIN_VALUE:e.ZERO
if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate()
if(t.isNegative())return this.multiply(t.negate()).negate()
if(this.lessThan(a)&&t.lessThan(a))return e.fromNumber(this.toNumber()*t.toNumber(),this.unsigned)
var n=this.high>>>16,r=65535&this.high,i=this.low>>>16,o=65535&this.low,s=t.high>>>16,u=65535&t.high,c=t.low>>>16,f=65535&t.low,l=0,h=0,d=0,p=0
return d+=(p+=o*f)>>>16,p&=65535,h+=(d+=i*f)>>>16,d&=65535,h+=(d+=o*c)>>>16,d&=65535,l+=(h+=r*f)>>>16,h&=65535,l+=(h+=i*c)>>>16,h&=65535,l+=(h+=o*u)>>>16,h&=65535,l+=n*f+r*c+i*u+o*s,l&=65535,e.fromBits(d<<16|p,l<<16|h,this.unsigned)},e.prototype.mul=e.prototype.multiply,e.prototype.divide=function(t){if(e.isLong(t)||(t=e.fromValue(t)),t.isZero())throw new Error("division by zero")
if(this.isZero())return this.unsigned?e.UZERO:e.ZERO
var n,r,i
if(this.equals(e.MIN_VALUE))return t.equals(e.ONE)||t.equals(e.NEG_ONE)?e.MIN_VALUE:t.equals(e.MIN_VALUE)?e.ONE:(n=this.shiftRight(1).divide(t).shiftLeft(1)).equals(e.ZERO)?t.isNegative()?e.ONE:e.NEG_ONE:(r=this.subtract(t.multiply(n)),i=n.add(r.divide(t)))
if(t.equals(e.MIN_VALUE))return this.unsigned?e.UZERO:e.ZERO
if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate()
if(t.isNegative())return this.divide(t.negate()).negate()
for(i=e.ZERO,r=this;r.greaterThanOrEqual(t);){n=Math.max(1,Math.floor(r.toNumber()/t.toNumber()))
for(var o=Math.ceil(Math.log(n)/Math.LN2),a=o<=48?1:Math.pow(2,o-48),s=e.fromNumber(n),u=s.multiply(t);u.isNegative()||u.greaterThan(r);)n-=a,u=(s=e.fromNumber(n,this.unsigned)).multiply(t)
s.isZero()&&(s=e.ONE),i=i.add(s),r=r.subtract(u)}return i},e.prototype.div=e.prototype.divide,e.prototype.modulo=function(t){return e.isLong(t)||(t=e.fromValue(t)),this.subtract(this.divide(t).multiply(t))},e.prototype.mod=e.prototype.modulo,e.prototype.not=function(){return e.fromBits(~this.low,~this.high,this.unsigned)},e.prototype.and=function(t){return e.isLong(t)||(t=e.fromValue(t)),e.fromBits(this.low&t.low,this.high&t.high,this.unsigned)},e.prototype.or=function(t){return e.isLong(t)||(t=e.fromValue(t)),e.fromBits(this.low|t.low,this.high|t.high,this.unsigned)},e.prototype.xor=function(t){return e.isLong(t)||(t=e.fromValue(t)),e.fromBits(this.low^t.low,this.high^t.high,this.unsigned)},e.prototype.shiftLeft=function(t){return e.isLong(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?e.fromBits(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):e.fromBits(0,this.low<<t-32,this.unsigned)},e.prototype.shl=e.prototype.shiftLeft,e.prototype.shiftRight=function(t){return e.isLong(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?e.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):e.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},e.prototype.shr=e.prototype.shiftRight,e.prototype.shiftRightUnsigned=function(t){if(e.isLong(t)&&(t=t.toInt()),0==(t&=63))return this
var n=this.high
if(t<32){var r=this.low
return e.fromBits(r>>>t|n<<32-t,n>>>t,this.unsigned)}return 32===t?e.fromBits(n,0,this.unsigned):e.fromBits(n>>>t-32,0,this.unsigned)},e.prototype.shru=e.prototype.shiftRightUnsigned,e.prototype.toSigned=function(){return this.unsigned?new e(this.low,this.high,!1):this},e.prototype.toUnsigned=function(){return this.unsigned?this:new e(this.low,this.high,!0)},e})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(41).Int,o=r(n(349)),a=r(n(9)),s={read:function(e){var t=i.read(e)
switch(t){case 0:return!1
case 1:return!0
default:throw new Error("XDR Read Error: Got "+t+" when trying to read a bool")}},write:function(e,t){var n=e?1:0
return i.write(n,t)},isValid:function(e){return o(e)}}
t.Bool=s,a(s)},function(e,t,n){var r=n(131),i=n(100),o=n(167),a=9007199254740991,s=4294967295,u=Math.min
e.exports=function(e,t){if((e=o(e))<1||e>a)return[]
var n=s,c=u(e,s)
t=i(t),e-=s
for(var f=r(c,t);++n<e;)t(n)
return f}},function(e,t,n){var r=n(354)
e.exports=function(e){var t=r(e),n=t%1
return t==t?n?t-n:t:0}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(11)),o=r(n(9)),a={read:function(e){},write:function(e,t){if(!i(e))throw new Error("XDR Write Error: trying to write value to a void slot")},isValid:function(e){return i(e)}}
t.Void=a,o(a)},function(e,t,n){var r=n(365),i=n(368)(function(e,t){return null==e?{}:r(e,t)})
e.exports=i},function(e,t,n){var r=n(2),i=n(42),o=n(3).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(e,t,n){return n^e&(t^n)}function f(e,t,n){return e&t|n&(e|t)}function l(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function h(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function d(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}r(u,i),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(e){for(var t,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,p=0|this._f,v=0|this._g,b=0|this._h,g=0;g<16;++g)n[g]=e.readInt32BE(4*g)
for(;g<64;++g)n[g]=0|(((t=n[g-2])>>>17|t<<15)^(t>>>19|t<<13)^t>>>10)+n[g-7]+d(n[g-15])+n[g-16]
for(var m=0;m<64;++m){var y=b+h(u)+c(u,p,v)+a[m]+n[m]|0,_=l(r)+f(r,i,o)|0
b=v,v=p,p=u,u=s+y|0,s=o,o=i,i=r,r=y+_|0}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0,this._f=p+this._f|0,this._g=v+this._g|0,this._h=b+this._h|0},u.prototype._hash=function(){var e=o.allocUnsafe(32)
return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=u},function(e,t,n){var r=n(2),i=n(42),o=n(3).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160)
function u(){this.init(),this._w=s,i.call(this,128,112)}function c(e,t,n){return n^e&(t^n)}function f(e,t,n){return e&t|n&(e|t)}function l(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function h(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function d(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function p(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function v(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function b(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function g(e,t){return e>>>0<t>>>0?1:0}r(u,i),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(e){for(var t=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,u=0|this._fh,m=0|this._gh,y=0|this._hh,_=0|this._al,w=0|this._bl,x=0|this._cl,k=0|this._dl,S=0|this._el,E=0|this._fl,A=0|this._gl,O=0|this._hl,T=0;T<32;T+=2)t[T]=e.readInt32BE(4*T),t[T+1]=e.readInt32BE(4*T+4)
for(;T<160;T+=2){var M=t[T-30],P=t[T-30+1],I=d(M,P),C=p(P,M),R=v(M=t[T-4],P=t[T-4+1]),B=b(P,M),j=t[T-14],N=t[T-14+1],L=t[T-32],U=t[T-32+1],D=C+N|0,z=I+j+g(D,C)|0
z=(z=z+R+g(D=D+B|0,B)|0)+L+g(D=D+U|0,U)|0,t[T]=z,t[T+1]=D}for(var q=0;q<160;q+=2){z=t[q],D=t[q+1]
var F=f(n,r,i),K=f(_,w,x),H=l(n,_),V=l(_,n),$=h(s,S),X=h(S,s),W=a[q],Q=a[q+1],Y=c(s,u,m),G=c(S,E,A),Z=O+X|0,J=y+$+g(Z,O)|0
J=(J=(J=J+Y+g(Z=Z+G|0,G)|0)+W+g(Z=Z+Q|0,Q)|0)+z+g(Z=Z+D|0,D)|0
var ee=V+K|0,te=H+F+g(ee,V)|0
y=m,O=A,m=u,A=E,u=s,E=S,s=o+J+g(S=k+Z|0,k)|0,o=i,k=x,i=r,x=w,r=n,w=_,n=J+te+g(_=Z+ee|0,Z)|0}this._al=this._al+_|0,this._bl=this._bl+w|0,this._cl=this._cl+x|0,this._dl=this._dl+k|0,this._el=this._el+S|0,this._fl=this._fl+E|0,this._gl=this._gl+A|0,this._hl=this._hl+O|0,this._ah=this._ah+n+g(this._al,_)|0,this._bh=this._bh+r+g(this._bl,w)|0,this._ch=this._ch+i+g(this._cl,x)|0,this._dh=this._dh+o+g(this._dl,k)|0,this._eh=this._eh+s+g(this._el,S)|0,this._fh=this._fh+u+g(this._fl,E)|0,this._gh=this._gh+m+g(this._gl,A)|0,this._hh=this._hh+y+g(this._hl,O)|0},u.prototype._hash=function(){var e=o.allocUnsafe(64)
function t(t,n,r){e.writeInt32BE(t,r),e.writeInt32BE(n,r+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),t(this._gh,this._gl,48),t(this._hh,this._hl,56),e},e.exports=u},function(e,t,n){"use strict";(function(e){t.sign=function(e,t){return r.sign(e,t)},t.verify=function(e,t,n){return r.verify(e,t,n)},Object.defineProperty(t,"__esModule",{value:!0})
var r={},i="undefined"==typeof window?function(){var t=void 0
try{t=n(377)}catch(e){return o()}return r.sign=function(n,r){return t.Sign(e.from(n),r)},r.verify=function(n,r,i){n=e.from(n)
try{return t.Verify(n,r,i)}catch(e){return!1}},!0}():o()
function o(){var t=n(112)
return r.sign=function(n,r){n=e.from(n),n=new Uint8Array(n.toJSON().data),r=new Uint8Array(r.toJSON().data)
var i=t.sign.detached(n,r)
return e.from(i)},r.verify=function(n,r,i){return n=e.from(n),n=new Uint8Array(n.toJSON().data),r=new Uint8Array(r.toJSON().data),i=new Uint8Array(i.toJSON().data),t.sign.detached.verify(n,r,i)},!1}t.FastSigning=i}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
t.verifyChecksum=function(e,t){if(e.length!==t.length)return!1
if(0===e.length)return!0
for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0},Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict"
var r=function(e,t){return t||(t={}),e.split("").forEach(function(e,n){e in t||(t[e]=n)}),t},i={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}}
i.charmap=r(i.alphabet,i.charmap)
var o={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}}
o.charmap=r(o.alphabet,o.charmap)
var a={alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",charmap:{}}
function s(e){if(this.buf=[],this.shift=8,this.carry=0,e){switch(e.type){case"rfc4648":this.charmap=t.rfc4648.charmap
break
case"crockford":this.charmap=t.crockford.charmap
break
case"base32hex":this.charmap=t.base32hex.charmap
break
default:throw new Error("invalid type")}e.charmap&&(this.charmap=e.charmap)}}function u(e){if(this.buf="",this.shift=3,this.carry=0,e){switch(e.type){case"rfc4648":this.alphabet=t.rfc4648.alphabet
break
case"crockford":this.alphabet=t.crockford.alphabet
break
case"base32hex":this.alphabet=t.base32hex.alphabet
break
default:throw new Error("invalid type")}e.alphabet?this.alphabet=e.alphabet:e.lc&&(this.alphabet=this.alphabet.toLowerCase())}}a.charmap=r(a.alphabet,a.charmap),s.prototype.charmap=i.charmap,s.prototype.write=function(e){var t=this.charmap,n=this.buf,r=this.shift,i=this.carry
return e.toUpperCase().split("").forEach(function(e){if("="!=e){var o=255&t[e];(r-=5)>0?i|=o<<r:r<0?(n.push(i|o>>-r),i=o<<(r+=8)&255):(n.push(i|o),r=8,i=0)}}),this.shift=r,this.carry=i,this},s.prototype.finalize=function(e){return e&&this.write(e),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},u.prototype.alphabet=i.alphabet,u.prototype.write=function(e){var t,n,r,i=this.shift,o=this.carry
for(r=0;r<e.length;r++)t=o|(n=e[r])>>i,this.buf+=this.alphabet[31&t],i>5&&(t=n>>(i-=5),this.buf+=this.alphabet[31&t]),o=n<<(i=5-i),i=8-i
return this.shift=i,this.carry=o,this},u.prototype.finalize=function(e){return e&&this.write(e),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},t.encode=function(e,t){return new u(t).finalize(e)},t.decode=function(e,t){return new s(t).finalize(e)},t.Decoder=s,t.Encoder=u,t.charmap=r,t.crockford=o,t.rfc4648=i,t.base32hex=a},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(48),s=a.xdr,u=a.hash,c=n(18).StrKey,f=n(114).Operation,l=n(113).Network,h=n(116).Memo,d=r(n(74)),p=r(n(33)),v=r(n(16)),b=r(n(420))
t.Transaction=function(){function t(n){if(o(this,t),"string"==typeof n){var r=e.from(n,"base64")
n=s.TransactionEnvelope.fromXDR(r)}this.tx=n.tx(),this.source=c.encodeEd25519PublicKey(n.tx().sourceAccount().ed25519()),this.fee=this.tx.fee(),this._memo=this.tx.memo(),this.sequence=this.tx.seqNum().toString()
var i=this.tx.timeBounds()
i&&(this.timeBounds={minTime:i.minTime().toString(),maxTime:i.maxTime().toString()})
var a=this.tx.operations()||[]
this.operations=d(a,function(e){return f.fromXDRObject(e)})
var u=n.signatures()||[]
this.signatures=d(u,function(e){return e})}var n,r
return i(t,{memo:{get:function(){return h.fromXDRObject(this._memo)},set:function(e){throw new Error("Transaction is immutable")}},sign:{value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
var i=this.hash()
p(n,function(t){var n=t.signDecorated(i)
e.signatures.push(n)})}},signHashX:{value:function(t){if(v(t)&&(t=e.from(t,"hex")),t.length>64)throw new Error("preimage cannnot be longer than 64 bytes")
var n=t,r=b.createHash("sha256").update(t).digest(),i=r.slice(r.length-4)
this.signatures.push(new s.DecoratedSignature({hint:i,signature:n}))}},hash:{value:(n=function(){return u(this.signatureBase())},r=function(){return n.apply(this,arguments)},r.toString=function(){return n.toString()},r)},signatureBase:{value:function(){if(null===l.current())throw new Error("No network selected. Use `Network.use`, `Network.usePublicNetwork` or `Network.useTestNetwork` helper methods to select network.")
return e.concat([l.current().networkId(),s.EnvelopeType.envelopeTypeTx().toXDR(),this.tx.toXDR()])}},toEnvelope:{value:function(){var e=this.tx,t=this.signatures
return new s.TransactionEnvelope({tx:e,signatures:t})}}}),t}()}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(8)),s=n(17).Keypair,u=n(18).StrKey,c=r(n(59)),f=r(n(177)),l=r(n(181))
t.Asset=function(){function e(t,n){if(o(this,e),!/^[a-zA-Z0-9]{1,12}$/.test(t))throw new Error("Asset code is invalid (maximum alphanumeric, 12 characters at max)")
if("xlm"!==String(t).toLowerCase()&&!n)throw new Error("Issuer cannot be null")
if(n&&!u.isValidEd25519PublicKey(n))throw new Error("Issuer is invalid")
this.code=t,this.issuer=n}return i(e,{toXDRObject:{value:function(){if(this.isNative())return a.Asset.assetTypeNative()
var e=void 0,t=void 0
this.code.length<=4?(e=a.AssetAlphaNum4,t="assetTypeCreditAlphanum4"):(e=a.AssetAlphaNum12,t="assetTypeCreditAlphanum12")
var n=this.code.length<=4?4:12,r=new e({assetCode:f(this.code,n,"\0"),issuer:s.fromPublicKey(this.issuer).xdrAccountId()})
return new a.Asset(t,r)}},getCode:{value:function(){return c(this.code)}},getIssuer:{value:function(){return c(this.issuer)}},getAssetType:{value:function(){return this.isNative()?"native":this.code.length>=1&&this.code.length<=4?"credit_alphanum4":this.code.length>=5&&this.code.length<=12?"credit_alphanum12":void 0}},isNative:{value:function(){return!this.issuer}},equals:{value:function(e){return this.code==e.getCode()&&this.issuer==e.getIssuer()}}},{native:{value:function(){return new e("XLM")}},fromOperation:{value:function(e){var t=void 0,n=void 0
switch(e.switch()){case a.AssetType.assetTypeNative():return this.native()
case a.AssetType.assetTypeCreditAlphanum4():t=e.alphaNum4()
case a.AssetType.assetTypeCreditAlphanum12():return t=t||e.alphaNum12(),n=u.encodeEd25519PublicKey(t.issuer().ed25519()),new this(l(t.assetCode(),"\0"),n)
default:throw new Error("Invalid asset type: "+e.switch().name)}}}}),e}()},function(e,t,n){var r=n(393),i=n(179),o=n(167),a=n(107)
e.exports=function(e,t,n){e=a(e)
var s=(t=o(t))?i(e):0
return t&&s<t?e+r(t-s,n):e}},function(e,t,n){var r=n(395)
e.exports=function(e,t,n){var i=e.length
return n=void 0===n?i:n,!t&&n>=i?e:r(e,t,n)}},function(e,t,n){var r=n(396),i=n(115),o=n(397)
e.exports=function(e){return i(e)?o(e):r(e)}},function(e,t,n){var r=n(398),i=n(115),o=n(399)
e.exports=function(e){return i(e)?o(e):r(e)}},function(e,t,n){var r=n(108),i=n(178),o=n(400),a=n(180),s=n(107),u=/\s+$/
e.exports=function(e,t,n){if((e=s(e))&&(n||void 0===t))return e.replace(u,"")
if(!e||!(t=r(t)))return e
var c=a(e),f=o(c,a(t))+1
return i(c,0,f).join("")}},function(e,t,n){"use strict"
var r=n(3).Buffer,i=n(118).Transform
function o(e){i.call(this),this._block=r.allocUnsafe(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}n(2)(o,i),o.prototype._transform=function(e,t,n){var r=null
try{this.update(e,t)}catch(e){r=e}n(r)},o.prototype._flush=function(e){var t=null
try{this.push(this.digest())}catch(e){t=e}e(t)},o.prototype.update=function(e,t){if(function(e,t){if(!r.isBuffer(e)&&"string"!=typeof e)throw new TypeError(t+" must be a string or a buffer")}(e,"Data"),this._finalized)throw new Error("Digest already called")
r.isBuffer(e)||(e=r.from(e,t))
for(var n=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=e[i++]
this._update(),this._blockOffset=0}for(;i<e.length;)n[this._blockOffset++]=e[i++]
for(var a=0,s=8*e.length;s>0;++a)this._length[a]+=s,(s=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*s)
return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called")
this._finalized=!0
var t=this._digest()
void 0!==e&&(t=t.toString(e)),this._block.fill(0),this._blockOffset=0
for(var n=0;n<4;++n)this._length[n]=0
return t},o.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=o},function(e,t,n){"use strict"
var r=n(2),i=n(425),o=n(29),a=n(3).Buffer,s=n(184),u=n(119),c=n(52),f=a.alloc(128)
function l(e,t){o.call(this,"digest"),"string"==typeof t&&(t=a.from(t))
var n="sha512"===e||"sha384"===e?128:64;(this._alg=e,this._key=t,t.length>n)?t=("rmd160"===e?new u:c(e)).update(t).digest():t.length<n&&(t=a.concat([t,f],n))
for(var r=this._ipad=a.allocUnsafe(n),i=this._opad=a.allocUnsafe(n),s=0;s<n;s++)r[s]=54^t[s],i[s]=92^t[s]
this._hash="rmd160"===e?new u:c(e),this._hash.update(r)}r(l,o),l.prototype._update=function(e){this._hash.update(e)},l.prototype._final=function(){var e=this._hash.digest()
return("rmd160"===this._alg?new u:c(this._alg)).update(this._opad).update(e).digest()},e.exports=function(e,t){return"rmd160"===(e=e.toLowerCase())||"ripemd160"===e?new l("rmd160",t):"md5"===e?new i(s,t):new l(e,t)}},function(e,t,n){var r=n(117)
e.exports=function(e){return(new r).update(e).digest()}},function(e){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},function(e,t,n){t.pbkdf2=n(427),t.pbkdf2Sync=n(189)},function(e,t,n){(function(t){var n=Math.pow(2,30)-1
function r(e,n){if("string"!=typeof e&&!t.isBuffer(e))throw new TypeError(n+" must be a buffer or string")}e.exports=function(e,t,i,o){if(r(e,"Password"),r(t,"Salt"),"number"!=typeof i)throw new TypeError("Iterations not a number")
if(i<0)throw new TypeError("Bad iterations")
if("number"!=typeof o)throw new TypeError("Key length not a number")
if(o<0||o>n||o!=o)throw new TypeError("Bad key length")}}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var n
t.browser?n="utf-8":n=parseInt(t.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary"
e.exports=n}).call(this,n(14))},function(e,t,n){var r=n(184),i=n(119),o=n(52),a=n(187),s=n(188),u=n(3).Buffer,c=u.alloc(128),f={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20}
function l(e,t,n){var a=function(e){return"rmd160"===e||"ripemd160"===e?function(e){return(new i).update(e).digest()}:"md5"===e?r:function(t){return o(e).update(t).digest()}}(e),s="sha512"===e||"sha384"===e?128:64
t.length>s?t=a(t):t.length<s&&(t=u.concat([t,c],s))
for(var l=u.allocUnsafe(s+f[e]),h=u.allocUnsafe(s+f[e]),d=0;d<s;d++)l[d]=54^t[d],h[d]=92^t[d]
var p=u.allocUnsafe(s+n+4)
l.copy(p,0,0,s),this.ipad1=p,this.ipad2=l,this.opad=h,this.alg=e,this.blocksize=s,this.hash=a,this.size=f[e]}l.prototype.run=function(e,t){return e.copy(t,this.blocksize),this.hash(t).copy(this.opad,this.blocksize),this.hash(this.opad)},e.exports=function(e,t,n,r,i){a(e,t,n,r),u.isBuffer(e)||(e=u.from(e,s)),u.isBuffer(t)||(t=u.from(t,s))
var o=new l(i=i||"sha1",e,t.length),c=u.allocUnsafe(r),h=u.allocUnsafe(t.length+4)
t.copy(h,0,0,t.length)
for(var d=0,p=f[i],v=Math.ceil(r/p),b=1;b<=v;b++){h.writeUInt32BE(b,t.length)
for(var g=o.run(h,o.ipad1),m=g,y=1;y<n;y++){m=o.run(m,o.ipad2)
for(var _=0;_<p;_++)g[_]^=m[_]}g.copy(c,d),d+=p}return c}},function(e,t,n){var r=n(54),i=n(3).Buffer,o=n(191)
function a(e){var t=e._cipher.encryptBlockRaw(e._prev)
return o(e._prev),t}t.encrypt=function(e,t){var n=Math.ceil(t.length/16),o=e._cache.length
e._cache=i.concat([e._cache,i.allocUnsafe(16*n)])
for(var s=0;s<n;s++){var u=a(e),c=o+16*s
e._cache.writeUInt32BE(u[0],c+0),e._cache.writeUInt32BE(u[1],c+4),e._cache.writeUInt32BE(u[2],c+8),e._cache.writeUInt32BE(u[3],c+12)}var f=e._cache.slice(0,t.length)
return e._cache=e._cache.slice(t.length),r(t,f)}},function(e,t){e.exports=function(e){for(var t,n=e.length;n--;){if(255!==(t=e.readUInt8(n))){t++,e.writeUInt8(t,n)
break}e.writeUInt8(0,n)}}},function(e){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},function(e,t,n){var r=n(75),i=n(3).Buffer,o=n(29),a=n(2),s=n(442),u=n(54),c=n(191)
function f(e,t,n,a){o.call(this)
var u=i.alloc(4,0)
this._cipher=new r.AES(t)
var f=this._cipher.encryptBlock(u)
this._ghash=new s(f),n=function(e,t,n){if(12===t.length)return e._finID=i.concat([t,i.from([0,0,0,1])]),i.concat([t,i.from([0,0,0,2])])
var r=new s(n),o=t.length,a=o%16
r.update(t),a&&(a=16-a,r.update(i.alloc(a,0))),r.update(i.alloc(8,0))
var u=8*o,f=i.alloc(8)
f.writeUIntBE(u,0,8),r.update(f),e._finID=r.state
var l=i.from(e._finID)
return c(l),l}(this,n,f),this._prev=i.from(n),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}a(f,o),f.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16
t<16&&(t=i.alloc(t,0),this._ghash.update(t))}this._called=!0
var n=this._mode.encrypt(this,e)
return this._decrypt?this._ghash.update(e):this._ghash.update(n),this._len+=e.length,n},f.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data")
var e=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID))
if(this._decrypt&&function(e,t){var n=0
e.length!==t.length&&n++
for(var r=Math.min(e.length,t.length),i=0;i<r;++i)n+=e[i]^t[i]
return n}(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data")
this._authTag=e,this._cipher.scrub()},f.prototype.getAuthTag=function(){if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state")
return this._authTag},f.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state")
this._authTag=e},f.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state")
this._ghash.update(e),this._alen+=e.length},e.exports=f},function(e,t,n){var r=n(75),i=n(3).Buffer,o=n(29)
function a(e,t,n,a){o.call(this),this._cipher=new r.AES(t),this._prev=i.from(n),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._mode=e}n(2)(a,o),a.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},a.prototype._final=function(){this._cipher.scrub()},e.exports=a},function(e,t,n){var r=n(43)
e.exports=m,m.simpleSieve=b,m.fermatTest=g
var i=n(6),o=new i(24),a=new(n(196)),s=new i(1),u=new i(2),c=new i(5),f=(new i(16),new i(8),new i(10)),l=new i(3),h=(new i(7),new i(11)),d=new i(4),p=(new i(12),null)
function v(){if(null!==p)return p
var e=[]
e[0]=2
for(var t=1,n=3;n<1048576;n+=2){for(var r=Math.ceil(Math.sqrt(n)),i=0;i<t&&e[i]<=r&&n%e[i]!=0;i++);t!==i&&e[i]<=r||(e[t++]=n)}return p=e,e}function b(e){for(var t=v(),n=0;n<t.length;n++)if(0===e.modn(t[n]))return 0===e.cmpn(t[n])
return!0}function g(e){var t=i.mont(e)
return 0===u.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)}function m(e,t){if(e<16)return new i(2===t||5===t?[140,123]:[140,39])
var n,p
for(t=new i(t);;){for(n=new i(r(Math.ceil(e/8)));n.bitLength()>e;)n.ishrn(1)
if(n.isEven()&&n.iadd(s),n.testn(1)||n.iadd(u),t.cmp(u)){if(!t.cmp(c))for(;n.mod(f).cmp(l);)n.iadd(d)}else for(;n.mod(o).cmp(h);)n.iadd(d)
if(b(p=n.shrn(1))&&b(n)&&g(p)&&g(n)&&a.test(p)&&a.test(n))return n}}},function(e,t,n){var r=n(6),i=n(197)
function o(e){this.rand=e||new i.Rand}e.exports=o,o.create=function(e){return new o(e)},o.prototype._randbelow=function(e){var t=e.bitLength(),n=Math.ceil(t/8)
do{var i=new r(this.rand.generate(n))}while(i.cmp(e)>=0)
return i},o.prototype._randrange=function(e,t){var n=t.sub(e)
return e.add(this._randbelow(n))},o.prototype.test=function(e,t,n){var i=e.bitLength(),o=r.mont(e),a=new r(1).toRed(o)
t||(t=Math.max(1,i/48|0))
for(var s=e.subn(1),u=0;!s.testn(u);u++);for(var c=e.shrn(u),f=s.toRed(o);t>0;t--){var l=this._randrange(new r(2),s)
n&&n(l)
var h=l.toRed(o).redPow(c)
if(0!==h.cmp(a)&&0!==h.cmp(f)){for(var d=1;d<u;d++){if(0===(h=h.redSqr()).cmp(a))return!1
if(0===h.cmp(f))break}if(d===u)return!1}}return!0},o.prototype.getDivisor=function(e,t){var n=e.bitLength(),i=r.mont(e),o=new r(1).toRed(i)
t||(t=Math.max(1,n/48|0))
for(var a=e.subn(1),s=0;!a.testn(s);s++);for(var u=e.shrn(s),c=a.toRed(i);t>0;t--){var f=this._randrange(new r(2),a),l=e.gcd(f)
if(0!==l.cmpn(1))return l
var h=f.toRed(i).redPow(u)
if(0!==h.cmp(o)&&0!==h.cmp(c)){for(var d=1;d<s;d++){if(0===(h=h.redSqr()).cmp(o))return h.fromRed().subn(1).gcd(e)
if(0===h.cmp(c))break}if(d===s)return(h=h.redSqr()).fromRed().subn(1).gcd(e)}}return!1}},function(e,t,n){var r
function i(e){this.rand=e}if(e.exports=function(e){return r||(r=new i(null)),r.generate(e)},e.exports.Rand=i,i.prototype.generate=function(e){return this._rand(e)},i.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e)
for(var t=new Uint8Array(e),n=0;n<t.length;n++)t[n]=this.rand.getByte()
return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?i.prototype._rand=function(e){var t=new Uint8Array(e)
return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?i.prototype._rand=function(e){var t=new Uint8Array(e)
return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(i.prototype._rand=function(){throw new Error("Not implemented yet")})
else try{var o=n(447)
if("function"!=typeof o.randomBytes)throw new Error("Not supported")
i.prototype._rand=function(e){return o.randomBytes(e)}}catch(e){}},function(e,t,n){"use strict"
var r=t
function i(e){return 1===e.length?"0"+e:e}function o(e){for(var t="",n=0;n<e.length;n++)t+=i(e[n].toString(16))
return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice()
if(!e)return[]
var n=[]
if("string"!=typeof e){for(var r=0;r<e.length;r++)n[r]=0|e[r]
return n}if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),r=0;r<e.length;r+=2)n.push(parseInt(e[r]+e[r+1],16))
else for(r=0;r<e.length;r++){var i=e.charCodeAt(r),o=i>>8,a=255&i
o?n.push(o,a):n.push(a)}return n},r.zero2=i,r.toHex=o,r.encode=function(e,t){return"hex"===t?o(e):e}},function(e,t,n){"use strict"
var r=n(24).rotr32
function i(e,t,n){return e&t^~e&n}function o(e,t,n){return e&t^e&n^t&n}function a(e,t,n){return e^t^n}t.ft_1=function(e,t,n,r){return 0===e?i(t,n,r):1===e||3===e?a(t,n,r):2===e?o(t,n,r):void 0},t.ch32=i,t.maj32=o,t.p32=a,t.s0_256=function(e){return r(e,2)^r(e,13)^r(e,22)},t.s1_256=function(e){return r(e,6)^r(e,11)^r(e,25)},t.g0_256=function(e){return r(e,7)^r(e,18)^e>>>3},t.g1_256=function(e){return r(e,17)^r(e,19)^e>>>10}},function(e,t,n){"use strict"
var r=n(24),i=n(55),o=n(199),a=n(19),s=r.sum32,u=r.sum32_4,c=r.sum32_5,f=o.ch32,l=o.maj32,h=o.s0_256,d=o.s1_256,p=o.g0_256,v=o.g1_256,b=i.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function m(){if(!(this instanceof m))return new m
b.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=new Array(64)}r.inherits(m,b),e.exports=m,m.blockSize=512,m.outSize=256,m.hmacStrength=192,m.padLength=64,m.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r]
for(;r<n.length;r++)n[r]=u(v(n[r-2]),n[r-7],p(n[r-15]),n[r-16])
var i=this.h[0],o=this.h[1],b=this.h[2],g=this.h[3],m=this.h[4],y=this.h[5],_=this.h[6],w=this.h[7]
for(a(this.k.length===n.length),r=0;r<n.length;r++){var x=c(w,d(m),f(m,y,_),this.k[r],n[r]),k=s(h(i),l(i,o,b))
w=_,_=y,y=m,m=s(g,x),g=b,b=o,o=i,i=s(x,k)}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],b),this.h[3]=s(this.h[3],g),this.h[4]=s(this.h[4],m),this.h[5]=s(this.h[5],y),this.h[6]=s(this.h[6],_),this.h[7]=s(this.h[7],w)},m.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(e,t,n){"use strict"
var r=n(24),i=n(55),o=n(19),a=r.rotr64_hi,s=r.rotr64_lo,u=r.shr64_hi,c=r.shr64_lo,f=r.sum64,l=r.sum64_hi,h=r.sum64_lo,d=r.sum64_4_hi,p=r.sum64_4_lo,v=r.sum64_5_hi,b=r.sum64_5_lo,g=i.BlockHash,m=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function y(){if(!(this instanceof y))return new y
g.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=m,this.W=new Array(160)}function _(e,t,n,r,i){var o=e&n^~e&i
return o<0&&(o+=4294967296),o}function w(e,t,n,r,i,o){var a=t&r^~t&o
return a<0&&(a+=4294967296),a}function x(e,t,n,r,i){var o=e&n^e&i^n&i
return o<0&&(o+=4294967296),o}function k(e,t,n,r,i,o){var a=t&r^t&o^r&o
return a<0&&(a+=4294967296),a}function S(e,t){var n=a(e,t,28)^a(t,e,2)^a(t,e,7)
return n<0&&(n+=4294967296),n}function E(e,t){var n=s(e,t,28)^s(t,e,2)^s(t,e,7)
return n<0&&(n+=4294967296),n}function A(e,t){var n=a(e,t,14)^a(e,t,18)^a(t,e,9)
return n<0&&(n+=4294967296),n}function O(e,t){var n=s(e,t,14)^s(e,t,18)^s(t,e,9)
return n<0&&(n+=4294967296),n}function T(e,t){var n=a(e,t,1)^a(e,t,8)^u(e,t,7)
return n<0&&(n+=4294967296),n}function M(e,t){var n=s(e,t,1)^s(e,t,8)^c(e,t,7)
return n<0&&(n+=4294967296),n}function P(e,t){var n=a(e,t,19)^a(t,e,29)^u(e,t,6)
return n<0&&(n+=4294967296),n}function I(e,t){var n=s(e,t,19)^s(t,e,29)^c(e,t,6)
return n<0&&(n+=4294967296),n}r.inherits(y,g),e.exports=y,y.blockSize=1024,y.outSize=512,y.hmacStrength=192,y.padLength=128,y.prototype._prepareBlock=function(e,t){for(var n=this.W,r=0;r<32;r++)n[r]=e[t+r]
for(;r<n.length;r+=2){var i=P(n[r-4],n[r-3]),o=I(n[r-4],n[r-3]),a=n[r-14],s=n[r-13],u=T(n[r-30],n[r-29]),c=M(n[r-30],n[r-29]),f=n[r-32],l=n[r-31]
n[r]=d(i,o,a,s,u,c,f,l),n[r+1]=p(i,o,a,s,u,c,f,l)}},y.prototype._update=function(e,t){this._prepareBlock(e,t)
var n=this.W,r=this.h[0],i=this.h[1],a=this.h[2],s=this.h[3],u=this.h[4],c=this.h[5],d=this.h[6],p=this.h[7],g=this.h[8],m=this.h[9],y=this.h[10],T=this.h[11],M=this.h[12],P=this.h[13],I=this.h[14],C=this.h[15]
o(this.k.length===n.length)
for(var R=0;R<n.length;R+=2){var B=I,j=C,N=A(g,m),L=O(g,m),U=_(g,m,y,T,M),D=w(g,m,y,T,M,P),z=this.k[R],q=this.k[R+1],F=n[R],K=n[R+1],H=v(B,j,N,L,U,D,z,q,F,K),V=b(B,j,N,L,U,D,z,q,F,K)
B=S(r,i),j=E(r,i),N=x(r,i,a,s,u),L=k(r,i,a,s,u,c)
var $=l(B,j,N,L),X=h(B,j,N,L)
I=M,C=P,M=y,P=T,y=g,T=m,g=l(d,p,H,V),m=h(p,p,H,V),d=u,p=c,u=a,c=s,a=r,s=i,r=l(H,V,$,X),i=h(H,V,$,X)}f(this.h,0,r,i),f(this.h,2,a,s),f(this.h,4,u,c),f(this.h,6,d,p),f(this.h,8,g,m),f(this.h,10,y,T),f(this.h,12,M,P),f(this.h,14,I,C)},y.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(e,t,n){var r=n(2),i=n(57).Reporter,o=n(1).Buffer
function a(e,t){i.call(this,t),o.isBuffer(e)?(this.base=e,this.offset=0,this.length=e.length):this.error("Input not Buffer")}function s(e,t){if(Array.isArray(e))this.length=0,this.value=e.map(function(e){return e instanceof s||(e=new s(e,t)),this.length+=e.length,e},this)
else if("number"==typeof e){if(!(0<=e&&e<=255))return t.error("non-byte EncoderBuffer value")
this.value=e,this.length=1}else if("string"==typeof e)this.value=e,this.length=o.byteLength(e)
else{if(!o.isBuffer(e))return t.error("Unsupported type: "+typeof e)
this.value=e,this.length=e.length}}r(a,i),t.DecoderBuffer=a,a.prototype.save=function(){return{offset:this.offset,reporter:i.prototype.save.call(this)}},a.prototype.restore=function(e){var t=new a(this.base)
return t.offset=e.offset,t.length=this.offset,this.offset=e.offset,i.prototype.restore.call(this,e.reporter),t},a.prototype.isEmpty=function(){return this.offset===this.length},a.prototype.readUInt8=function(e){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(e||"DecoderBuffer overrun")},a.prototype.skip=function(e,t){if(!(this.offset+e<=this.length))return this.error(t||"DecoderBuffer overrun")
var n=new a(this.base)
return n._reporterState=this._reporterState,n.offset=this.offset,n.length=this.offset+e,this.offset+=e,n},a.prototype.raw=function(e){return this.base.slice(e?e.offset:this.offset,this.length)},t.EncoderBuffer=s,s.prototype.join=function(e,t){return e||(e=new o(this.length)),t||(t=0),0===this.length?e:(Array.isArray(this.value)?this.value.forEach(function(n){n.join(e,t),t+=n.length}):("number"==typeof this.value?e[t]=this.value:"string"==typeof this.value?e.write(this.value,t):o.isBuffer(this.value)&&this.value.copy(e,t),t+=this.length),e)}},function(e,t,n){var r=t
r._reverse=function(e){var t={}
return Object.keys(e).forEach(function(n){(0|n)==n&&(n|=0)
var r=e[n]
t[r]=n}),t},r.der=n(479)},function(e,t,n){var r=n(2),i=n(56),o=i.base,a=i.bignum,s=i.constants.der
function u(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new c,this.tree._init(e.body)}function c(e){o.Node.call(this,"der",e)}function f(e,t){var n=e.readUInt8(t)
if(e.isError(n))return n
var r=s.tagClass[n>>6],i=0==(32&n)
if(31==(31&n)){var o=n
for(n=0;128==(128&o);){if(o=e.readUInt8(t),e.isError(o))return o
n<<=7,n|=127&o}}else n&=31
return{cls:r,primitive:i,tag:n,tagStr:s.tag[n]}}function l(e,t,n){var r=e.readUInt8(n)
if(e.isError(r))return r
if(!t&&128===r)return null
if(0==(128&r))return r
var i=127&r
if(i>4)return e.error("length octect is too long")
r=0
for(var o=0;o<i;o++){r<<=8
var a=e.readUInt8(n)
if(e.isError(a))return a
r|=a}return r}e.exports=u,u.prototype.decode=function(e,t){return e instanceof o.DecoderBuffer||(e=new o.DecoderBuffer(e,t)),this.tree._decode(e,t)},r(c,o.Node),c.prototype._peekTag=function(e,t,n){if(e.isEmpty())return!1
var r=e.save(),i=f(e,'Failed to peek tag: "'+t+'"')
return e.isError(i)?i:(e.restore(r),i.tag===t||i.tagStr===t||i.tagStr+"of"===t||n)},c.prototype._decodeTag=function(e,t,n){var r=f(e,'Failed to decode tag of "'+t+'"')
if(e.isError(r))return r
var i=l(e,r.primitive,'Failed to get length of "'+t+'"')
if(e.isError(i))return i
if(!n&&r.tag!==t&&r.tagStr!==t&&r.tagStr+"of"!==t)return e.error('Failed to match tag: "'+t+'"')
if(r.primitive||null!==i)return e.skip(i,'Failed to match body of: "'+t+'"')
var o=e.save(),a=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"')
return e.isError(a)?a:(i=e.offset-o.offset,e.restore(o),e.skip(i,'Failed to match body of: "'+t+'"'))},c.prototype._skipUntilEnd=function(e,t){for(;;){var n=f(e,t)
if(e.isError(n))return n
var r,i=l(e,n.primitive,t)
if(e.isError(i))return i
if(r=n.primitive||null!==i?e.skip(i):this._skipUntilEnd(e,t),e.isError(r))return r
if("end"===n.tagStr)break}},c.prototype._decodeList=function(e,t,n,r){for(var i=[];!e.isEmpty();){var o=this._peekTag(e,"end")
if(e.isError(o))return o
var a=n.decode(e,"der",r)
if(e.isError(a)&&o)break
i.push(a)}return i},c.prototype._decodeStr=function(e,t){if("bitstr"===t){var n=e.readUInt8()
return e.isError(n)?n:{unused:n,data:e.raw()}}if("bmpstr"===t){var r=e.raw()
if(r.length%2==1)return e.error("Decoding of string type: bmpstr length mismatch")
for(var i="",o=0;o<r.length/2;o++)i+=String.fromCharCode(r.readUInt16BE(2*o))
return i}if("numstr"===t){var a=e.raw().toString("ascii")
return this._isNumstr(a)?a:e.error("Decoding of string type: numstr unsupported characters")}if("octstr"===t)return e.raw()
if("objDesc"===t)return e.raw()
if("printstr"===t){var s=e.raw().toString("ascii")
return this._isPrintstr(s)?s:e.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(t)?e.raw().toString():e.error("Decoding of string type: "+t+" unsupported")},c.prototype._decodeObjid=function(e,t,n){for(var r,i=[],o=0;!e.isEmpty();){var a=e.readUInt8()
o<<=7,o|=127&a,0==(128&a)&&(i.push(o),o=0)}128&a&&i.push(o)
var s=i[0]/40|0,u=i[0]%40
if(r=n?i:[s,u].concat(i.slice(1)),t){var c=t[r.join(" ")]
void 0===c&&(c=t[r.join(".")]),void 0!==c&&(r=c)}return r},c.prototype._decodeTime=function(e,t){var n=e.raw().toString()
if("gentime"===t)var r=0|n.slice(0,4),i=0|n.slice(4,6),o=0|n.slice(6,8),a=0|n.slice(8,10),s=0|n.slice(10,12),u=0|n.slice(12,14)
else{if("utctime"!==t)return e.error("Decoding "+t+" time is not supported yet")
r=0|n.slice(0,2),i=0|n.slice(2,4),o=0|n.slice(4,6),a=0|n.slice(6,8),s=0|n.slice(8,10),u=0|n.slice(10,12)
r=r<70?2e3+r:1900+r}return Date.UTC(r,i-1,o,a,s,u,0)},c.prototype._decodeNull=function(e){return null},c.prototype._decodeBool=function(e){var t=e.readUInt8()
return e.isError(t)?t:0!==t},c.prototype._decodeInt=function(e,t){var n=e.raw(),r=new a(n)
return t&&(r=t[r.toString(10)]||r),r},c.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getDecoder("der").tree}},function(e,t,n){var r=n(2),i=n(1).Buffer,o=n(56),a=o.base,s=o.constants.der
function u(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new c,this.tree._init(e.body)}function c(e){a.Node.call(this,"der",e)}function f(e){return e<10?"0"+e:e}e.exports=u,u.prototype.encode=function(e,t){return this.tree._encode(e,t).join()},r(c,a.Node),c.prototype._encodeComposite=function(e,t,n,r){var o,a=function(e,t,n,r){var i
"seqof"===e?e="seq":"setof"===e&&(e="set")
if(s.tagByName.hasOwnProperty(e))i=s.tagByName[e]
else{if("number"!=typeof e||(0|e)!==e)return r.error("Unknown tag: "+e)
i=e}if(i>=31)return r.error("Multi-octet tag encoding unsupported")
t||(i|=32)
return i|=s.tagClassByName[n||"universal"]<<6}(e,t,n,this.reporter)
if(r.length<128)return(o=new i(2))[0]=a,o[1]=r.length,this._createEncoderBuffer([o,r])
for(var u=1,c=r.length;c>=256;c>>=8)u++;(o=new i(2+u))[0]=a,o[1]=128|u
c=1+u
for(var f=r.length;f>0;c--,f>>=8)o[c]=255&f
return this._createEncoderBuffer([o,r])},c.prototype._encodeStr=function(e,t){if("bitstr"===t)return this._createEncoderBuffer([0|e.unused,e.data])
if("bmpstr"===t){for(var n=new i(2*e.length),r=0;r<e.length;r++)n.writeUInt16BE(e.charCodeAt(r),2*r)
return this._createEncoderBuffer(n)}return"numstr"===t?this._isNumstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===t?this._isPrintstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(t)?this._createEncoderBuffer(e):"objDesc"===t?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: "+t+" unsupported")},c.prototype._encodeObjid=function(e,t,n){if("string"==typeof e){if(!t)return this.reporter.error("string objid given, but no values map found")
if(!t.hasOwnProperty(e))return this.reporter.error("objid not found in values map")
e=t[e].split(/[\s\.]+/g)
for(var r=0;r<e.length;r++)e[r]|=0}else if(Array.isArray(e)){e=e.slice()
for(r=0;r<e.length;r++)e[r]|=0}if(!Array.isArray(e))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(e))
if(!n){if(e[1]>=40)return this.reporter.error("Second objid identifier OOB")
e.splice(0,2,40*e[0]+e[1])}var o=0
for(r=0;r<e.length;r++){var a=e[r]
for(o++;a>=128;a>>=7)o++}var s=new i(o),u=s.length-1
for(r=e.length-1;r>=0;r--){a=e[r]
for(s[u--]=127&a;(a>>=7)>0;)s[u--]=128|127&a}return this._createEncoderBuffer(s)},c.prototype._encodeTime=function(e,t){var n,r=new Date(e)
return"gentime"===t?n=[f(r.getFullYear()),f(r.getUTCMonth()+1),f(r.getUTCDate()),f(r.getUTCHours()),f(r.getUTCMinutes()),f(r.getUTCSeconds()),"Z"].join(""):"utctime"===t?n=[f(r.getFullYear()%100),f(r.getUTCMonth()+1),f(r.getUTCDate()),f(r.getUTCHours()),f(r.getUTCMinutes()),f(r.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+t+" time is not supported yet"),this._encodeStr(n,"octstr")},c.prototype._encodeNull=function(){return this._createEncoderBuffer("")},c.prototype._encodeInt=function(e,t){if("string"==typeof e){if(!t)return this.reporter.error("String int or enum given, but no values map")
if(!t.hasOwnProperty(e))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(e))
e=t[e]}if("number"!=typeof e&&!i.isBuffer(e)){var n=e.toArray()
!e.sign&&128&n[0]&&n.unshift(0),e=new i(n)}if(i.isBuffer(e)){var r=e.length
0===e.length&&r++
var o=new i(r)
return e.copy(o),0===e.length&&(o[0]=0),this._createEncoderBuffer(o)}if(e<128)return this._createEncoderBuffer(e)
if(e<256)return this._createEncoderBuffer([0,e])
r=1
for(var a=e;a>=256;a>>=8)r++
for(a=(o=new Array(r)).length-1;a>=0;a--)o[a]=255&e,e>>=8
return 128&o[0]&&o.unshift(0),this._createEncoderBuffer(new i(o))},c.prototype._encodeBool=function(e){return this._createEncoderBuffer(e?255:0)},c.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getEncoder("der").tree},c.prototype._skipDefault=function(e,t,n){var r,i=this._baseState
if(null===i.default)return!1
var o=e.join()
if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,t,n).join()),o.length!==i.defaultBuffer.length)return!1
for(r=0;r<o.length;r++)if(o[r]!==i.defaultBuffer[r])return!1
return!0}},function(e){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},function(e,t,n){var r=n(53),i=n(3).Buffer
function o(e){var t=i.allocUnsafe(4)
return t.writeUInt32BE(e,0),t}e.exports=function(e,t){for(var n,a=i.alloc(0),s=0;a.length<t;)n=o(s++),a=i.concat([a,r("sha1").update(e).update(n).digest()])
return a.slice(0,t)}},function(e,t){e.exports=function(e,t){for(var n=e.length,r=-1;++r<n;)e[r]^=t[r]
return e}},function(e,t,n){var r=n(6),i=n(3).Buffer
e.exports=function(e,t){return i.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(34)),s=r(n(16)),u=(n(17).Keypair,n(18).StrKey)
t.Account=function(){function e(t,n){if(o(this,e),!u.isValidEd25519PublicKey(t))throw new Error("accountId is invalid")
if(!s(n))throw new Error("sequence must be of type string")
this._accountId=t,this.sequence=new a(n)}return i(e,{accountId:{value:function(){return this._accountId}},sequenceNumber:{value:function(){return this.sequence.toString()}},incrementSequenceNumber:{value:function(){this.sequence=this.sequence.add(1)}}}),e}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OrderbookCallBuilder=void 0
var r=n(13)
t.OrderbookCallBuilder=function(e){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return i.url.segment("order_book"),n.isNative()?i.url.setQuery("selling_asset_type","native"):(i.url.setQuery("selling_asset_type",n.getAssetType()),i.url.setQuery("selling_asset_code",n.getCode()),i.url.setQuery("selling_asset_issuer",n.getIssuer())),r.isNative()?i.url.setQuery("buying_asset_type","native"):(i.url.setQuery("buying_asset_type",r.getAssetType()),i.url.setQuery("buying_asset_code",r.getCode()),i.url.setQuery("buying_asset_issuer",r.getIssuer())),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.CallBuilder),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.StellarTomlResolver=t.STELLAR_TOML_MAX_SIZE=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(27)),o=s(n(507)),a=n(58)
function s(e){return e&&e.__esModule?e:{default:e}}var u=t.STELLAR_TOML_MAX_SIZE=102400
t.StellarTomlResolver=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.Config.isAllowHttp(),r=a.Config.getTimeout()
void 0!==t.allowHttp&&(n=t.allowHttp),"number"==typeof t.timeout&&(r=t.timeout)
var s="https"
return n&&(s="http"),i.default.get(s+"://"+e+"/.well-known/stellar.toml",{maxContentLength:u,timeout:r}).then(function(e){try{var t=o.default.parse(e.data)
return Promise.resolve(t)}catch(e){return Promise.reject(new Error("Parsing error on line "+e.line+", column "+e.column+": "+e.message))}}).catch(function(e){throw e.message.match(/^maxContentLength size/)?new Error("stellar.toml file exceeds allowed size of "+u):e})}}]),e}()},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(511)
var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v"
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=e,e.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],n)}return r(t,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(e){var t=1===e[0]||e[1]<2
return{version:e[1]+"."+e[2]+"."+e[3],multiOpsEnabled:t}})}},{key:"getPublicKey",value:function(t,n,r){var o=this;(0,i.checkStellarBip32Path)(t)
var a=[],s=void 0,u=(0,i.splitPath)(t),c=new e(1+4*u.length)
c[0]=u.length,u.forEach(function(e,t){c.writeUInt32BE(e,1+4*t)})
var f=e.from("via lumina","ascii")
a.push(e.concat([c,f]))
var l=!1
return(0,i.foreach)(a,function(t){return o.transport.send(224,l?16:2,n?1:0,r?1:0,t,[36864,28162]).then(function(t){28162===e.from(t.slice(t.length-2)).readUInt16BE(0)&&(l=!0,a.push(e.alloc(0))),s=t})}).then(function(){var e=0,t=s.slice(e,e+32)
e+=32
var r=(0,i.encodeEd25519PublicKey)(t)
if(n){var o=s.slice(e,e+64)
if(!(0,i.verifyEd25519Signature)(f,o,t))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:r}})}},{key:"signTransaction",value:function(t,n){var r=this
if((0,i.checkStellarBip32Path)(t),n.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+n.length)
var o=[],a=void 0,s=(0,i.splitPath)(t),u=1+4*s.length,c=e.alloc(u)
c[0]=s.length,s.forEach(function(e,t){c.writeUInt32BE(e,1+4*t)})
var f=150-u
if(n.length<=f)o.push(e.concat([c,n]))
else{var l=e.alloc(f),h=0
for(n.copy(l,0,h,f),o.push(e.concat([c,l])),h+=f;h<n.length;){var d=n.length-h
f=d<150?d:150,l=e.alloc(f),n.copy(l,0,h,h+f),h+=f,o.push(l)}}var p=!1
return(0,i.foreach)(o,function(t,n){return r.transport.send(224,p?16:4,0===n?0:128,n===o.length-1?0:128,t,[36864,27013,27684,27685,28162]).then(function(t){28162===e.from(t.slice(t.length-2)).readUInt16BE(0)&&(p=!0,o.push(e.alloc(0))),a=t})}).then(function(){var o=e.from(a.slice(a.length-2)).readUInt16BE(0)
if(36864===o)return{signature:e.from(a.slice(0,a.length-2))}
if(27684===o)return r.signHash_private(t,(0,i.hash)(n))
if(27685===o)return r.signHash_private(t,(0,i.hash)(n))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(e,t){return(0,i.checkStellarBip32Path)(e),this.signHash_private(e,t)}},{key:"signHash_private",value:function(t,n){var r=this,o=[],a=void 0,s=(0,i.splitPath)(t),u=e.alloc(1+4*s.length)
u[0]=s.length,s.forEach(function(e,t){u.writeUInt32BE(e,1+4*t)}),o.push(e.concat([u,n]))
var c=!1
return(0,i.foreach)(o,function(t){return r.transport.send(224,c?16:8,0,0,t,[36864,27013,27750,27904,28162]).then(function(t){28162===e.from(t.slice(t.length-2)).readUInt16BE(0)&&(c=!0,o.push(e.alloc(0))),a=t})}).then(function(){var t=e.from(a.slice(a.length-2)).readUInt16BE(0)
if(36864===t)return{signature:e.from(a.slice(0,a.length-2))}
throw 27013===t?new Error("Transaction approval request was rejected"):27904===t?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),t}()
t.default=o}).call(this,n(1).Buffer)},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(512),s=n(515),u=(r=s)&&r.__esModule?r:{default:r}
function c(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function r(i,o){try{var a=t[i](o),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)})
e(s)}("next")})}}var f=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},l=function(e){return e.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*e.length%4)}
function h(t,n,r,i,o){var s=function(t,n){for(var r=e.alloc(t.length),i=0;i<t.length;i++)r[i]=t[i]^n[i%n.length]
return r}(t,i),u=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),c={version:"U2F_V2",keyHandle:f(s.toString("base64")),challenge:f(u.toString("base64")),appId:location.origin}
return r&&r("=> "+t.toString("hex")),(0,a.sign)(c,n/1e3).then(function(t){var n=t.signatureData
if("string"==typeof n){var i=e.from(l(n),"base64"),a=void 0
return a=o?i.slice(5):i,r&&r("<= "+a.toString("hex")),a}throw t})}var d=[]
var p=function(t){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)
var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))
return e.unwrap=!0,d.push(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,u.default),o(n,null,[{key:"open",value:function(){var e=c(regeneratorRuntime.mark(function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new n)
case 1:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}()}]),o(n,[{key:"exchange",value:function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return e.abrupt("return",e.sent)
case 6:if(e.prev=6,e.t0=e.catch(0),!("object"===i(e.t0.metaData))){e.next=14
break}throw 5===e.t0.metaData.code&&(d.forEach(function(e){return e.emit("disconnect")}),d=[]),n=e.t0,r="Failed to sign with Ledger device: U2F "+e.t0.metaData.type,o="U2F_"+e.t0.metaData.code,a=void 0,(a=new s.TransportError(r,o)).originalError=n,a
case 14:throw e.t0
case 15:case"end":return e.stop()}var n,r,o,a},e,this,[[0,6]])}))
return function(t){return e.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(t){this.scrambleKey=e.from(t,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}]),n}()
p.isSupported=a.isSupported,p.list=function(){return(0,a.isSupported)().then(function(e){return e?[null]:[]})},p.listen=function(e){var t=!1
return(0,a.isSupported)().then(function(n){t||(n?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new s.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){t=!0}}},t.default=p}).call(this,n(1).Buffer)},,,,function(e,t,n){var r=n(84),i=n(127),o=n(88),a=n(247),s=n(253),u=n(256),c=n(257),f=n(258),l=n(260),h=n(136),d=n(261),p=n(67),v=n(266),b=n(267),g=n(272),m=n(7),y=n(90),_=n(274),w=n(26),x=n(276),k=n(38),S=1,E=2,A=4,O="[object Arguments]",T="[object Function]",M="[object GeneratorFunction]",P="[object Object]",I={}
I[O]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[P]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[T]=I["[object WeakMap]"]=!1,e.exports=function e(t,n,C,R,B,j){var N,L=n&S,U=n&E,D=n&A
if(C&&(N=B?C(t,R,B,j):C(t)),void 0!==N)return N
if(!w(t))return t
var z=m(t)
if(z){if(N=v(t),!L)return c(t,N)}else{var q=p(t),F=q==T||q==M
if(y(t))return u(t,L)
if(q==P||q==O||F&&!B){if(N=U||F?{}:g(t),!L)return U?l(t,s(N,t)):f(t,a(N,t))}else{if(!I[q])return B?t:{}
N=b(t,q,L)}}j||(j=new r)
var K=j.get(t)
if(K)return K
if(j.set(t,N),x(t))return t.forEach(function(r){N.add(e(r,n,C,r,t,j))}),N
if(_(t))return t.forEach(function(r,i){N.set(i,e(r,n,C,i,t,j))}),N
var H=D?U?d:h:U?keysIn:k,V=z?void 0:H(t)
return i(V||t,function(r,i){V&&(r=t[i=r]),o(N,i,e(r,n,C,i,t,j))}),N}},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(61),i=Array.prototype.splice
e.exports=function(e){var t=this.__data__,n=r(t,e)
return!(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))}},function(e,t,n){var r=n(61)
e.exports=function(e){var t=this.__data__,n=r(t,e)
return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(61)
e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(61)
e.exports=function(e,t){var n=this.__data__,i=r(n,e)
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t,n){var r=n(60)
e.exports=function(){this.__data__=new r,this.size=0}},function(e,t){e.exports=function(e){var t=this.__data__,n=t.delete(e)
return this.size=t.size,n}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,n){var r=n(60),i=n(85),o=n(87),a=200
e.exports=function(e,t){var n=this.__data__
if(n instanceof r){var s=n.__data__
if(!i||s.length<a-1)return s.push([e,t]),this.size=++n.size,this
n=this.__data__=new o(s)}return n.set(e,t),this.size=n.size,this}},function(e,t,n){var r=n(86),i=n(232),o=n(26),a=n(126),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,f=u.toString,l=c.hasOwnProperty,h=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
e.exports=function(e){return!(!o(e)||i(e))&&(r(e)?h:s).test(a(e))}},function(e,t,n){var r=n(37),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0
e.exports=function(e){var t=o.call(e,s),n=e[s]
try{e[s]=void 0
var r=!0}catch(e){}var i=a.call(e)
return r&&(t?e[s]=n:delete e[s]),i}},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t,n){var r,i=n(233),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:""
e.exports=function(e){return!!o&&o in e}},function(e,t,n){var r=n(20)["__core-js_shared__"]
e.exports=r},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(236),i=n(60),o=n(85)
e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},function(e,t,n){var r=n(237),i=n(238),o=n(239),a=n(240),s=n(241)
function u(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,e.exports=u},function(e,t,n){var r=n(63)
e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t}},function(e,t,n){var r=n(63),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty
e.exports=function(e){var t=this.__data__
if(r){var n=t[e]
return n===i?void 0:n}return o.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(63),i=Object.prototype.hasOwnProperty
e.exports=function(e){var t=this.__data__
return r?void 0!==t[e]:i.call(t,e)}},function(e,t,n){var r=n(63),i="__lodash_hash_undefined__"
e.exports=function(e,t){var n=this.__data__
return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?i:t,this}},function(e,t,n){var r=n(64)
e.exports=function(e){var t=r(this,e).delete(e)
return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(64)
e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(64)
e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(64)
e.exports=function(e,t){var n=r(this,e),i=n.size
return n.set(e,t),this.size+=n.size==i?0:1,this}},function(e,t,n){var r=n(44),i=n(38)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t,n){var r=n(25),i=n(21),o="[object Arguments]"
e.exports=function(e){return i(e)&&r(e)==o}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(25),i=n(91),o=n(21),a={}
a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!a[r(e)]}},function(e,t,n){var r=n(94),i=n(252),o=Object.prototype.hasOwnProperty
e.exports=function(e){if(!r(e))return i(e)
var t=[]
for(var n in Object(e))o.call(e,n)&&"constructor"!=n&&t.push(n)
return t}},function(e,t,n){var r=n(133)(Object.keys,Object)
e.exports=r},function(e,t,n){var r=n(44),i=n(66)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t,n){var r=n(26),i=n(94),o=n(255),a=Object.prototype.hasOwnProperty
e.exports=function(e){if(!r(e))return o(e)
var t=i(e),n=[]
for(var s in e)("constructor"!=s||!t&&a.call(e,s))&&n.push(s)
return n}},function(e,t){e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},function(e,t,n){(function(e){var r=n(20),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=a?a.allocUnsafe:void 0
e.exports=function(e,t){if(t)return e.slice()
var n=e.length,r=s?s(n):new e.constructor(n)
return e.copy(r),r}}).call(this,n(39)(e))},function(e,t){e.exports=function(e,t){var n=-1,r=e.length
for(t||(t=Array(r));++n<r;)t[n]=e[n]
return t}},function(e,t,n){var r=n(44),i=n(95)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n]
t(a,n,e)&&(o[i++]=a)}return o}},function(e,t,n){var r=n(44),i=n(135)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t,n){var r=n(137),i=n(135),o=n(66)
e.exports=function(e){return r(e,o,i)}},function(e,t,n){var r=n(31)(n(20),"DataView")
e.exports=r},function(e,t,n){var r=n(31)(n(20),"Promise")
e.exports=r},function(e,t,n){var r=n(31)(n(20),"Set")
e.exports=r},function(e,t,n){var r=n(31)(n(20),"WeakMap")
e.exports=r},function(e,t){var n=Object.prototype.hasOwnProperty
e.exports=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},function(e,t,n){var r=n(98),i=n(268),o=n(269),a=n(270),s=n(271),u="[object Boolean]",c="[object Date]",f="[object Map]",l="[object Number]",h="[object RegExp]",d="[object Set]",p="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",g="[object DataView]",m="[object Float32Array]",y="[object Float64Array]",_="[object Int8Array]",w="[object Int16Array]",x="[object Int32Array]",k="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",A="[object Uint32Array]"
e.exports=function(e,t,n){var O=e.constructor
switch(t){case b:return r(e)
case u:case c:return new O(+e)
case g:return i(e,n)
case m:case y:case _:case w:case x:case k:case S:case E:case A:return s(e,n)
case f:return new O
case l:case p:return new O(e)
case h:return o(e)
case d:return new O
case v:return a(e)}}},function(e,t,n){var r=n(98)
e.exports=function(e,t){var n=t?r(e.buffer):e.buffer
return new e.constructor(n,e.byteOffset,e.byteLength)}},function(e,t){var n=/\w*$/
e.exports=function(e){var t=new e.constructor(e.source,n.exec(e))
return t.lastIndex=e.lastIndex,t}},function(e,t,n){var r=n(37),i=r?r.prototype:void 0,o=i?i.valueOf:void 0
e.exports=function(e){return o?Object(o.call(e)):{}}},function(e,t,n){var r=n(98)
e.exports=function(e,t){var n=t?r(e.buffer):e.buffer
return new e.constructor(n,e.byteOffset,e.length)}},function(e,t,n){var r=n(273),i=n(97),o=n(94)
e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:r(i(e))}},function(e,t,n){var r=n(26),i=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{}
if(i)return i(t)
e.prototype=t
var n=new e
return e.prototype=void 0,n}}()
e.exports=o},function(e,t,n){var r=n(275),i=n(92),o=n(93),a=o&&o.isMap,s=a?i(a):r
e.exports=s},function(e,t,n){var r=n(67),i=n(21),o="[object Map]"
e.exports=function(e){return i(e)&&r(e)==o}},function(e,t,n){var r=n(277),i=n(92),o=n(93),a=o&&o.isSet,s=a?i(a):r
e.exports=s},function(e,t,n){var r=n(67),i=n(21),o="[object Set]"
e.exports=function(e){return i(e)&&r(e)==o}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Server=t.SUBMIT_TRANSACTION_TIMEOUT=void 0
var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(36),a=n(279),s=n(309),u=n(58),c=n(495),f=n(496),l=n(497),h=n(498),d=n(211),p=n(499),v=n(500),b=n(501),g=n(502),m=n(503),y=n(504),_=n(505),w=(n(48),n(16));(r=w)&&r.__esModule
var x=n(27),k=n(40),S=(n(40).URITemplate,t.SUBMIT_TRANSACTION_TIMEOUT=6e4)
t.Server=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.serverURL=k(t)
var r=u.Config.isAllowHttp()
if(void 0!==n.allowHttp&&(r=n.allowHttp),"https"!=this.serverURL.protocol()&&!r)throw new Error("Cannot connect to insecure horizon server")}return i(e,[{key:"submitTransaction",value:function(e){var t=encodeURIComponent(e.toEnvelope().toXDR().toString("base64"))
return x.post(k(this.serverURL).segment("transactions").toString(),"tx="+t,{timeout:S}).then(function(e){return e.data}).catch(function(e){return e instanceof Error?Promise.reject(e):Promise.reject(new o.BadResponseError("Transaction submission failed. Server responded: "+e.status+" "+e.statusText,e.data))})}},{key:"accounts",value:function(){return new a.AccountCallBuilder(k(this.serverURL))}},{key:"ledgers",value:function(){return new c.LedgerCallBuilder(k(this.serverURL))}},{key:"transactions",value:function(){return new f.TransactionCallBuilder(k(this.serverURL))}},{key:"offers",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return new(Function.prototype.bind.apply(h.OfferCallBuilder,[null].concat([k(this.serverURL),e],n)))}},{key:"orderbook",value:function(e,t){return new d.OrderbookCallBuilder(k(this.serverURL),e,t)}},{key:"trades",value:function(){return new p.TradesCallBuilder(k(this.serverURL))}},{key:"operations",value:function(){return new l.OperationCallBuilder(k(this.serverURL))}},{key:"paths",value:function(e,t,n,r){return new v.PathCallBuilder(k(this.serverURL),e,t,n,r)}},{key:"payments",value:function(){return new b.PaymentCallBuilder(k(this.serverURL))}},{key:"effects",value:function(){return new g.EffectCallBuilder(k(this.serverURL))}},{key:"friendbot",value:function(e){return new m.FriendbotBuilder(k(this.serverURL),e)}},{key:"assets",value:function(){return new y.AssetsCallBuilder(k(this.serverURL))}},{key:"loadAccount",value:function(e){return this.accounts().accountId(e).call().then(function(e){return new s.AccountResponse(e)})}},{key:"tradeAggregation",value:function(e,t,n,r,i,o){return new _.TradeAggregationCallBuilder(k(this.serverURL),e,t,n,r,i,o)}}]),e}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AccountCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.AccountCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("accounts"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"accountId",value:function(e){return this.filter.push(["accounts",e]),this}}]),t}()},function(e,t,n){var r=n(140),i=n(38)
e.exports=function(e,t){return e&&r(e,t,i)}},function(e,t){e.exports=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var u=a[e?s:++i]
if(!1===n(o[u],u,o))break}return t}}},function(e,t,n){var r=n(45)
e.exports=function(e,t){return function(n,i){if(null==n)return n
if(!r(n))return e(n,i)
for(var o=n.length,a=t?o:-1,s=Object(n);(t?a--:++a<o)&&!1!==i(s[a],a,s););return n}}},function(e,t,n){var r,i,o
!function(a,s){"use strict"
e.exports?e.exports=s(n(40)):(i=[n(40)],void 0===(o="function"==typeof(r=s)?r.apply(t,i):r)||(e.exports=o))}(0,function(e,t){"use strict"
var n=t&&t.URITemplate,r=Object.prototype.hasOwnProperty
function i(e){return i._cache[e]?i._cache[e]:this instanceof i?(this.expression=e,i._cache[e]=this,this):new i(e)}function o(e){this.data=e,this.cache={}}var a=i.prototype,s={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}}
return i._cache={},i.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g,i.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/,i.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/,i.LITERAL_PATTERN=/[<>{}"`^| \\]/,i.expand=function(e,t,n){var r,o,a,u=s[e.operator],c=u.named?"Named":"Unnamed",f=e.variables,l=[]
for(a=0;o=f[a];a++){if(0===(r=t.get(o.name)).type&&n&&n.strict)throw new Error('Missing expansion value for variable "'+o.name+'"')
if(r.val.length){if(r.type>1&&o.maxlength)throw new Error('Invalid expression: Prefix modifier not applicable to variable "'+o.name+'"')
l.push(i["expand"+c](r,u,o.explode,o.explode&&u.separator||",",o.maxlength,o.name))}else r.type&&l.push("")}return l.length?u.prefix+l.join(u.separator):""},i.expandNamed=function(t,n,r,i,o,a){var s,u,c,f="",l=n.encode,h=n.empty_name_separator,d=!t[l].length,p=2===t.type?"":e[l](a)
for(u=0,c=t.val.length;u<c;u++)o?(s=e[l](t.val[u][1].substring(0,o)),2===t.type&&(p=e[l](t.val[u][0].substring(0,o)))):d?(s=e[l](t.val[u][1]),2===t.type?(p=e[l](t.val[u][0]),t[l].push([p,s])):t[l].push([void 0,s])):(s=t[l][u][1],2===t.type&&(p=t[l][u][0])),f&&(f+=i),r?f+=p+(h||s?"=":"")+s:(u||(f+=e[l](a)+(h||s?"=":"")),2===t.type&&(f+=p+","),f+=s)
return f},i.expandUnnamed=function(t,n,r,i,o){var a,s,u,c="",f=n.encode,l=n.empty_name_separator,h=!t[f].length
for(s=0,u=t.val.length;s<u;s++)o?a=e[f](t.val[s][1].substring(0,o)):h?(a=e[f](t.val[s][1]),t[f].push([2===t.type?e[f](t.val[s][0]):void 0,a])):a=t[f][s][1],c&&(c+=i),2===t.type&&(c+=o?e[f](t.val[s][0].substring(0,o)):t[f][s][0],c+=r?l||a?"=":"":","),c+=a
return c},i.noConflict=function(){return t.URITemplate===i&&(t.URITemplate=n),i},a.expand=function(e,t){var n=""
this.parts&&this.parts.length||this.parse(),e instanceof o||(e=new o(e))
for(var r=0,a=this.parts.length;r<a;r++)n+="string"==typeof this.parts[r]?this.parts[r]:i.expand(this.parts[r],e,t)
return n},a.parse=function(){var e,t,n,r=this.expression,o=i.EXPRESSION_PATTERN,a=i.VARIABLE_PATTERN,u=i.VARIABLE_NAME_PATTERN,c=i.LITERAL_PATTERN,f=[],l=0,h=function(e){if(e.match(c))throw new Error('Invalid Literal "'+e+'"')
return e}
for(o.lastIndex=0;;){if(null===(t=o.exec(r))){f.push(h(r.substring(l)))
break}if(f.push(h(r.substring(l,t.index))),l=t.index+t[0].length,!s[t[1]])throw new Error('Unknown Operator "'+t[1]+'" in "'+t[0]+'"')
if(!t[3])throw new Error('Unclosed Expression "'+t[0]+'"')
for(var d=0,p=(e=t[2].split(",")).length;d<p;d++){if(null===(n=e[d].match(a)))throw new Error('Invalid Variable "'+e[d]+'" in "'+t[0]+'"')
if(n[1].match(u))throw new Error('Invalid Variable Name "'+n[1]+'" in "'+t[0]+'"')
e[d]={name:n[1],explode:!!n[3],maxlength:n[4]&&parseInt(n[4],10)}}if(!e.length)throw new Error('Expression Missing Variable(s) "'+t[0]+'"')
f.push({expression:t[0],operator:t[1],variables:e})}return f.length||f.push(h(r)),this.parts=f,this},o.prototype.get=function(e){var t,n,i,o=this.data,a={type:0,val:[],encode:[],encodeReserved:[]}
if(void 0!==this.cache[e])return this.cache[e]
if(this.cache[e]=a,null==(i="[object Function]"===String(Object.prototype.toString.call(o))?o(e):"[object Function]"===String(Object.prototype.toString.call(o[e]))?o[e](e):o[e]))return a
if("[object Array]"===String(Object.prototype.toString.call(i))){for(t=0,n=i.length;t<n;t++)void 0!==i[t]&&null!==i[t]&&a.val.push([void 0,String(i[t])])
a.val.length&&(a.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(i))){for(t in i)r.call(i,t)&&void 0!==i[t]&&null!==i[t]&&a.val.push([t,String(i[t])])
a.val.length&&(a.type=2)}else a.type=1,a.val.push([void 0,String(i)])
return a},e.expand=function(t,n){var r=new i(t).expand(n)
return new e(r)},i})},function(e,t,n){(function(t,r){var i=n(287),o=n(101).parse,a=n(35),s=n(296),u=n(145),c=n(152),f=["pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","secureProtocol","servername","checkServerIdentity"],l=[239,187,191],h=58,d=32,p=10,v=13
function b(e,n){var a=b.CONNECTING
Object.defineProperty(this,"readyState",{get:function(){return a}}),Object.defineProperty(this,"url",{get:function(){return e}})
var c,y=this
function _(t){a!==b.CLOSED&&(a=b.CONNECTING,O("error",new g("error",{message:t})),E&&(e=E,E=null),setTimeout(function(){a===b.CONNECTING&&A()},y.reconnectInterval))}y.reconnectInterval=1e3
var w=""
n&&n.headers&&n.headers["Last-Event-ID"]&&(w=n.headers["Last-Event-ID"],delete n.headers["Last-Event-ID"])
var x=!1,k="",S="",E=null
function A(){var i=o(e),d="https:"===i.protocol
if(i.headers={"Cache-Control":"no-cache",Accept:"text/event-stream"},w&&(i.headers["Last-Event-ID"]=w),n&&n.headers)for(var m in n.headers){var k=n.headers[m]
k&&(i.headers[m]=k)}if(i.rejectUnauthorized=!(n&&!n.rejectUnauthorized),n&&n.proxy){var S=o(n.proxy)
d="https:"===S.protocol,i.protocol=d?"https:":"http:",i.path=e,i.headers.Host=i.host,i.hostname=S.hostname,i.host=S.host,i.port=S.port}if(n&&n.https)for(var M in n.https)if(-1!==f.indexOf(M)){var P=n.https[M]
void 0!==P&&(i[M]=P)}n&&void 0!==n.withCredentials&&(i.withCredentials=n.withCredentials),(c=(d?s:u).request(i,function(n){if(500===n.statusCode||502===n.statusCode||503===n.statusCode||504===n.statusCode)return O("error",new g("error",{status:n.statusCode,message:n.statusMessage})),void _()
if(301===n.statusCode||307===n.statusCode)return n.headers.location?(307===n.statusCode&&(E=e),e=n.headers.location,void t.nextTick(A)):void O("error",new g("error",{status:n.statusCode,message:n.statusMessage}))
if(200!==n.statusCode)return O("error",new g("error",{status:n.statusCode,message:n.statusMessage})),y.close()
a=b.OPEN,n.on("close",function(){n.removeAllListeners("close"),n.removeAllListeners("end"),_()}),n.on("end",function(){n.removeAllListeners("close"),n.removeAllListeners("end"),_()}),O("open",new g("open"))
var i,o=!0
n.on("data",function(e){i=i?r.concat([i,e]):e,o&&function(e){return l.every(function(t,n){return e[n]===t})}(i)&&(i=i.slice(l.length)),o=!1
for(var t=0,n=i.length;t<n;){x&&(i[t]===p&&++t,x=!1)
for(var a,s=-1,u=-1,c=t;s<0&&c<n;++c)(a=i[c])===h?u<0&&(u=c-t):a===v?(x=!0,s=c-t):a===p&&(s=c-t)
if(s<0)break
T(i,t,u,s),t+=s+1}t===n?i=void 0:t>0&&(i=i.slice(t))})})).on("error",function(e){_(e.message)}),c.setNoDelay&&c.setNoDelay(!0),c.end()}function O(){y.listeners(arguments[0]).length>0&&y.emit.apply(y,arguments)}function T(t,n,r,o){if(0===o){if(k.length>0){var a=S||"message"
O(a,new m(a,{data:k.slice(0,-1),lastEventId:w,origin:i(e)})),k=""}S=void 0}else if(r>0){var s=r<0,u=0,c=t.slice(n,n+(s?o:r)).toString()
n+=u=s?o:t[n+r+1]!==d?r+1:r+2
var f=o-u,l=t.slice(n,n+f).toString()
if("data"===c)k+=l+"\n"
else if("event"===c)S=l
else if("id"===c)w=l
else if("retry"===c){var h=parseInt(l,10)
Number.isNaN(h)||(y.reconnectInterval=h)}}}A(),this._close=function(){a!==b.CLOSED&&(a=b.CLOSED,c.abort&&c.abort(),c.xhr&&c.xhr.abort&&c.xhr.abort())}}function g(e,t){if(Object.defineProperty(this,"type",{writable:!1,value:e,enumerable:!0}),t)for(var n in t)t.hasOwnProperty(n)&&Object.defineProperty(this,n,{writable:!1,value:t[n],enumerable:!0})}function m(e,t){for(var n in Object.defineProperty(this,"type",{writable:!1,value:e,enumerable:!0}),t)t.hasOwnProperty(n)&&Object.defineProperty(this,n,{writable:!1,value:t[n],enumerable:!0})}e.exports=b,c.inherits(b,a.EventEmitter),b.prototype.constructor=b,["open","error","message"].forEach(function(e){Object.defineProperty(b.prototype,"on"+e,{get:function(){var t=this.listeners(e)[0]
return t?t._listener?t._listener:t:void 0},set:function(t){this.removeAllListeners(e),this.addEventListener(e,t)}})}),Object.defineProperty(b,"CONNECTING",{enumerable:!0,value:0}),Object.defineProperty(b,"OPEN",{enumerable:!0,value:1}),Object.defineProperty(b,"CLOSED",{enumerable:!0,value:2}),b.prototype.CONNECTING=0,b.prototype.OPEN=1,b.prototype.CLOSED=2,b.prototype.close=function(){this._close()},b.prototype.addEventListener=function(e,t){"function"==typeof t&&(t._listener=t,this.on(e,t))},b.prototype.dispatchEvent=function(e){if(!e.type)throw new Error("UNSPECIFIED_EVENT_TYPE_ERR")
this.emit(e.type,e.detail)},b.prototype.removeEventListener=function(e,t){"function"==typeof t&&(t._listener=void 0,this.removeListener(e,t))}}).call(this,n(14),n(1).Buffer)},function(e,t,n){"use strict"
t.byteLength=function(e){var t=c(e),n=t[0],r=t[1]
return 3*(n+r)/4-r},t.toByteArray=function(e){for(var t,n=c(e),r=n[0],a=n[1],s=new o(function(e,t,n){return 3*(t+n)/4-n}(0,r,a)),u=0,f=a>0?r-4:r,l=0;l<f;l+=4)t=i[e.charCodeAt(l)]<<18|i[e.charCodeAt(l+1)]<<12|i[e.charCodeAt(l+2)]<<6|i[e.charCodeAt(l+3)],s[u++]=t>>16&255,s[u++]=t>>8&255,s[u++]=255&t
2===a&&(t=i[e.charCodeAt(l)]<<2|i[e.charCodeAt(l+1)]>>4,s[u++]=255&t)
1===a&&(t=i[e.charCodeAt(l)]<<10|i[e.charCodeAt(l+1)]<<4|i[e.charCodeAt(l+2)]>>2,s[u++]=t>>8&255,s[u++]=255&t)
return s},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],a=0,s=n-i;a<s;a+=16383)o.push(f(e,a,a+16383>s?s:a+16383))
1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="))
return o.join("")}
for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=a.length;s<u;++s)r[s]=a[s],i[a.charCodeAt(s)]=s
function c(e){var t=e.length
if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var n=e.indexOf("=")
return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var i,o,a=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o])
return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,f=-7,l=n?i-1:0,h=n?-1:1,d=e[t+l]
for(l+=h,o=d&(1<<-f)-1,d>>=-f,f+=s;f>0;o=256*o+e[t+l],l+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=r;f>0;a=256*a+e[t+l],l+=h,f-=8);if(0===o)o=1-c
else{if(o===u)return a?NaN:1/0*(d?-1:1)
a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,f=(1<<c)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+l>=1?h/u:h*Math.pow(2,1-l))*u>=2&&(a++,u/=2),a+l>=f?(s=0,a=f):a+l>=1?(s=(t*u-1)*Math.pow(2,i),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*v}},function(e,t,n){"use strict"
var r=n(288)
function i(e){return"string"==typeof e&&(e=r(e)),e.protocol&&e.hostname?(e.protocol+"//"+e.host).toLowerCase():"null"}i.same=function(e,t){return i(e)===i(t)},e.exports=i},function(e,t,n){"use strict";(function(t){var r=n(289),i=n(290),o=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],u={hash:1,query:1}
function c(e){var n,r=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},i={},o=typeof(e=e||r)
if("blob:"===e.protocol)i=new l(unescape(e.pathname),{})
else if("string"===o)for(n in i=new l(e,{}),u)delete i[n]
else if("object"===o){for(n in e)n in u||(i[n]=e[n])
void 0===i.slashes&&(i.slashes=a.test(e.href))}return i}function f(e){var t=o.exec(e)
return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function l(e,t,n){if(!(this instanceof l))return new l(e,t,n)
var o,a,u,h,d,p,v=s.slice(),b=typeof t,g=this,m=0
for("object"!==b&&"string"!==b&&(n=t,t=null),n&&"function"!=typeof n&&(n=i.parse),t=c(t),o=!(a=f(e||"")).protocol&&!a.slashes,g.slashes=a.slashes||o&&t.slashes,g.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(v[3]=[/(.*)/,"pathname"]);m<v.length;m++)"function"!=typeof(h=v[m])?(u=h[0],p=h[1],u!=u?g[p]=e:"string"==typeof u?~(d=e.indexOf(u))&&("number"==typeof h[2]?(g[p]=e.slice(0,d),e=e.slice(d+h[2])):(g[p]=e.slice(d),e=e.slice(0,d))):(d=u.exec(e))&&(g[p]=d[1],e=e.slice(0,d.index)),g[p]=g[p]||o&&h[3]&&t[p]||"",h[4]&&(g[p]=g[p].toLowerCase())):e=h(e)
n&&(g.query=n(g.query)),o&&t.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==t.pathname)&&(g.pathname=function(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,i=n[r-1],o=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(o=!0),n.splice(r,1),a--)
return o&&n.unshift(""),"."!==i&&".."!==i||n.push(""),n.join("/")}(g.pathname,t.pathname)),r(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(h=g.auth.split(":"),g.username=h[0]||"",g.password=h[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}l.prototype={set:function(e,t,n){var o=this
switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||i.parse)(t)),o[e]=t
break
case"port":o[e]=t,r(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="")
break
case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t
break
case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="")
break
case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n
break
case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#"
o[e]=t.charAt(0)!==a?a+t:t}else o[e]=t
break
default:o[e]=t}for(var u=0;u<s.length;u++){var c=s[u]
c[4]&&(o[c[1]]=o[c[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(e){e&&"function"==typeof e||(e=i.stringify)
var t,n=this,r=n.protocol
r&&":"!==r.charAt(r.length-1)&&(r+=":")
var o=r+(n.slashes?"//":"")
return n.username&&(o+=n.username,n.password&&(o+=":"+n.password),o+="@"),o+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(o+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(o+=n.hash),o}},l.extractProtocol=f,l.location=c,l.qs=i,e.exports=l}).call(this,n(5))},function(e,t,n){"use strict"
e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1
switch(t){case"http":case"ws":return 80!==e
case"https":case"wss":return 443!==e
case"ftp":return 21!==e
case"gopher":return 70!==e
case"file":return!1}return 0!==e}},function(e,t,n){"use strict"
var r,i=Object.prototype.hasOwnProperty
function o(e){return decodeURIComponent(e.replace(/\+/g," "))}t.stringify=function(e,t){t=t||""
var n,o,a=[]
for(o in"string"!=typeof t&&(t="?"),e)i.call(e,o)&&((n=e[o])||null!==n&&n!==r&&!isNaN(n)||(n=""),a.push(encodeURIComponent(o)+"="+encodeURIComponent(n)))
return a.length?t+a.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);){var i=o(t[1]),a=o(t[2])
i in r||(r[i]=a)}return r}},function(e,t,n){(function(e,r){var i
!function(o){t&&t.nodeType,e&&e.nodeType
var a="object"==typeof r&&r
a.global!==a&&a.window!==a&&a.self
var s,u=2147483647,c=36,f=1,l=26,h=38,d=700,p=72,v=128,b="-",g=/^xn--/,m=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=c-f,x=Math.floor,k=String.fromCharCode
function S(e){throw new RangeError(_[e])}function E(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n])
return r}function A(e,t){var n=e.split("@"),r=""
return n.length>1&&(r=n[0]+"@",e=n[1]),r+E((e=e.replace(y,".")).split("."),t).join(".")}function O(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function T(e){return E(e,function(e){var t=""
return e>65535&&(t+=k((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=k(e)}).join("")}function M(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function P(e,t,n){var r=0
for(e=n?x(e/d):e>>1,e+=x(e/t);e>w*l>>1;r+=c)e=x(e/w)
return x(r+(w+1)*e/(e+h))}function I(e){var t,n,r,i,o,a,s,h,d,g,m,y=[],_=e.length,w=0,k=v,E=p
for((n=e.lastIndexOf(b))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&S("not-basic"),y.push(e.charCodeAt(r))
for(i=n>0?n+1:0;i<_;){for(o=w,a=1,s=c;i>=_&&S("invalid-input"),((h=(m=e.charCodeAt(i++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:c)>=c||h>x((u-w)/a))&&S("overflow"),w+=h*a,!(h<(d=s<=E?f:s>=E+l?l:s-E));s+=c)a>x(u/(g=c-d))&&S("overflow"),a*=g
E=P(w-o,t=y.length+1,0==o),x(w/t)>u-k&&S("overflow"),k+=x(w/t),w%=t,y.splice(w++,0,k)}return T(y)}function C(e){var t,n,r,i,o,a,s,h,d,g,m,y,_,w,E,A=[]
for(y=(e=O(e)).length,t=v,n=0,o=p,a=0;a<y;++a)(m=e[a])<128&&A.push(k(m))
for(r=i=A.length,i&&A.push(b);r<y;){for(s=u,a=0;a<y;++a)(m=e[a])>=t&&m<s&&(s=m)
for(s-t>x((u-n)/(_=r+1))&&S("overflow"),n+=(s-t)*_,t=s,a=0;a<y;++a)if((m=e[a])<t&&++n>u&&S("overflow"),m==t){for(h=n,d=c;!(h<(g=d<=o?f:d>=o+l?l:d-o));d+=c)E=h-g,w=c-g,A.push(k(M(g+E%w,0))),h=x(E/w)
A.push(k(M(h,0))),o=P(n,_,r==i),n=0,++r}++n,++t}return A.join("")}s={version:"1.4.1",ucs2:{decode:O,encode:T},decode:I,encode:C,toASCII:function(e){return A(e,function(e){return m.test(e)?"xn--"+C(e):e})},toUnicode:function(e){return A(e,function(e){return g.test(e)?I(e.slice(4).toLowerCase()):e})}},void 0===(i=function(){return s}.call(t,n,t,e))||(e.exports=i)}()}).call(this,n(39)(e),n(5))},function(e,t,n){"use strict"
e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,n){"use strict"
t.decode=t.parse=n(294),t.encode=t.stringify=n(295)},function(e,t,n){"use strict"
function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"="
var a={}
if("string"!=typeof e||0===e.length)return a
var s=/\+/g
e=e.split(t)
var u=1e3
o&&"number"==typeof o.maxKeys&&(u=o.maxKeys)
var c=e.length
u>0&&c>u&&(c=u)
for(var f=0;f<c;++f){var l,h,d,p,v=e[f].replace(s,"%20"),b=v.indexOf(n)
b>=0?(l=v.substr(0,b),h=v.substr(b+1)):(l=v,h=""),d=decodeURIComponent(l),p=decodeURIComponent(h),r(a,d)?i(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a}
var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict"
var r=function(e){switch(typeof e){case"string":return e
case"boolean":return e?"true":"false"
case"number":return isFinite(e)?e:""
default:return""}}
e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?o(a(e),function(a){var s=encodeURIComponent(r(a))+n
return i(e[a])?o(e[a],function(e){return s+encodeURIComponent(r(e))}).join(t):s+encodeURIComponent(r(e[a]))}).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""}
var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}
function o(e,t){if(e.map)return e.map(t)
for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r))
return n}var a=Object.keys||function(e){var t=[]
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n)
return t}},function(e,t,n){var r=n(145),i=n(101),o=e.exports
for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a])
function s(e){if("string"==typeof e&&(e=i.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"')
return e}o.request=function(e,t){return e=s(e),r.request.call(this,e,t)},o.get=function(e,t){return e=s(e),r.get.call(this,e,t)}},function(e,t,n){(function(t,r,i){var o=n(146),a=n(2),s=n(147),u=n(46),c=n(305),f=s.IncomingMessage,l=s.readyStates
var h=e.exports=function(e){var n,r=this
u.Writable.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+new t(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(t){r.setHeader(t,e.headers[t])})
var i=!0
if("disable-fetch"===e.mode||"requestTimeout"in e&&!o.abortController)i=!1,n=!0
else if("prefer-streaming"===e.mode)n=!1
else if("allow-wrong-content-type"===e.mode)n=!o.overrideMimeType
else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode")
n=!0}r._mode=function(e,t){return o.fetch&&t?"fetch":o.mozchunkedarraybuffer?"moz-chunked-arraybuffer":o.msstream?"ms-stream":o.arraybuffer&&e?"arraybuffer":o.vbArray&&e?"text:vbarray":"text"}(n,i),r._fetchTimer=null,r.on("finish",function(){r._onFinish()})}
a(h,u.Writable),h.prototype.setHeader=function(e,t){var n=e.toLowerCase();-1===d.indexOf(n)&&(this._headers[n]={name:e,value:t})},h.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()]
return t?t.value:null},h.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},h.prototype._onFinish=function(){var e=this
if(!e._destroyed){var n=e._opts,a=e._headers,s=null
"GET"!==n.method&&"HEAD"!==n.method&&(s=o.arraybuffer?c(t.concat(e._body)):o.blobConstructor?new r.Blob(e._body.map(function(e){return c(e)}),{type:(a["content-type"]||{}).value||""}):t.concat(e._body).toString())
var u=[]
if(Object.keys(a).forEach(function(e){var t=a[e].name,n=a[e].value
Array.isArray(n)?n.forEach(function(e){u.push([t,e])}):u.push([t,n])}),"fetch"===e._mode){var f=null
if(o.abortController){var h=new AbortController
f=h.signal,e._fetchAbortController=h,"requestTimeout"in n&&0!==n.requestTimeout&&(e._fetchTimer=r.setTimeout(function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()},n.requestTimeout))}r.fetch(e._opts.url,{method:e._opts.method,headers:u,body:s||void 0,mode:"cors",credentials:n.withCredentials?"include":"same-origin",signal:f}).then(function(t){e._fetchResponse=t,e._connect()},function(t){r.clearTimeout(e._fetchTimer),e._destroyed||e.emit("error",t)})}else{var d=e._xhr=new r.XMLHttpRequest
try{d.open(e._opts.method,e._opts.url,!0)}catch(t){return void i.nextTick(function(){e.emit("error",t)})}"responseType"in d&&(d.responseType=e._mode.split(":")[0]),"withCredentials"in d&&(d.withCredentials=!!n.withCredentials),"text"===e._mode&&"overrideMimeType"in d&&d.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in n&&(d.timeout=n.requestTimeout,d.ontimeout=function(){e.emit("requestTimeout")}),u.forEach(function(e){d.setRequestHeader(e[0],e[1])}),e._response=null,d.onreadystatechange=function(){switch(d.readyState){case l.LOADING:case l.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(d.onprogress=function(){e._onXHRProgress()}),d.onerror=function(){e._destroyed||e.emit("error",new Error("XHR error"))}
try{d.send(s)}catch(t){return void i.nextTick(function(){e.emit("error",t)})}}}},h.prototype._onXHRProgress=function(){(function(e){try{var t=e.status
return null!==t&&0!==t}catch(e){return!1}})(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress())},h.prototype._connect=function(){var e=this
e._destroyed||(e._response=new f(e._xhr,e._fetchResponse,e._mode,e._fetchTimer),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},h.prototype._write=function(e,t,n){this._body.push(e),n()},h.prototype.abort=h.prototype.destroy=function(){this._destroyed=!0,r.clearTimeout(this._fetchTimer),this._response&&(this._response._destroyed=!0),this._xhr?this._xhr.abort():this._fetchAbortController&&this._fetchAbortController.abort()},h.prototype.end=function(e,t,n){"function"==typeof e&&(n=e,e=void 0),u.Writable.prototype.end.call(this,e,t,n)},h.prototype.flushHeaders=function(){},h.prototype.setTimeout=function(){},h.prototype.setNoDelay=function(){},h.prototype.setSocketKeepAlive=function(){}
var d=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]}).call(this,n(1).Buffer,n(5),n(14))},function(e,t){},function(e,t,n){"use strict"
var r=n(3).Buffer,i=n(300)
e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null}
this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head}
0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return""
for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data
return n},e.prototype.concat=function(e){if(0===this.length)return r.alloc(0)
if(1===this.length)return this.head.data
for(var t,n,i,o=r.allocUnsafe(e>>>0),a=this.head,s=0;a;)t=a.data,n=o,i=s,t.copy(n,i),s+=a.data.length,a=a.next
return o},e}(),i&&i.inspect&&i.inspect.custom&&(e.exports.prototype[i.inspect.custom]=function(){var e=i.inspect({length:this.length})
return this.constructor.name+" "+e})},function(e,t){},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply
function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(302),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(5))},function(e,t,n){(function(e,t){!function(e,n){"use strict"
if(!e.setImmediate){var r,i,o,a,s,u=1,c={},f=!1,l=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e)
h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage
return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){o.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(i=l.documentElement,r=function(e){var t=l.createElement("script")
t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),h.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1]
var i={callback:e,args:t}
return c[u]=i,r(u),u++},h.clearImmediate=d}function d(e){delete c[e]}function p(e){if(f)setTimeout(p,0,e)
else{var t=c[e]
if(t){f=!0
try{!function(e){var t=e.callback,r=e.args
switch(r.length){case 0:t()
break
case 1:t(r[0])
break
case 2:t(r[0],r[1])
break
case 3:t(r[0],r[1],r[2])
break
default:t.apply(n,r)}}(t)}finally{d(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(5),n(14))},function(e,t,n){(function(t){function n(e){try{if(!t.localStorage)return!1}catch(e){return!1}var n=t.localStorage[e]
return null!=n&&"true"===String(n).toLowerCase()}e.exports=function(e,t){if(n("noDeprecation"))return e
var r=!1
return function(){if(!r){if(n("throwDeprecation"))throw new Error(t)
n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}}}).call(this,n(5))},function(e,t,n){"use strict"
e.exports=o
var r=n(151),i=n(47)
function o(e){if(!(this instanceof o))return new o(e)
r.call(this,e)}i.inherits=n(2),i.inherits(o,r),o.prototype._transform=function(e,t,n){n(null,e)}},function(e,t,n){var r=n(1).Buffer
e.exports=function(e){if(e instanceof Uint8Array){if(0===e.byteOffset&&e.byteLength===e.buffer.byteLength)return e.buffer
if("function"==typeof e.buffer.slice)return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(r.isBuffer(e)){for(var t=new Uint8Array(e.length),n=e.length,i=0;i<n;i++)t[i]=e[i]
return t.buffer}throw new Error("Argument must be a Buffer")}},function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t]
for(var i in r)n.call(r,i)&&(e[i]=r[i])}return e}
var n=Object.prototype.hasOwnProperty},function(e,t){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AccountResponse=void 0
var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(48),a=n(494),s=(r=a)&&r.__esModule?r:{default:r}
t.AccountResponse=function(){function e(t){var n=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseAccount=new o.Account(t.account_id,t.sequence),(0,s.default)(t,function(e,t){n[t]=e})}return i(e,[{key:"accountId",value:function(){return this._baseAccount.accountId()}},{key:"sequenceNumber",value:function(){return this._baseAccount.sequenceNumber()}},{key:"incrementSequenceNumber",value:function(){this._baseAccount.incrementSequenceNumber(),this.sequence=this._baseAccount.sequenceNumber()}}]),e}()},function(e,t,n){"use strict";(function(e){var r=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var o,a=(o=n(311))&&o.__esModule?o.default:o,s=n(70).calculatePadding
t.Cursor=function(t){function n(){i(this,n),null!=t&&t.apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(n,t),r(n,{writeBufferPadded:{value:function(t){var r=s(t.length),i=e.alloc(r)
return this.copyFrom(new n(t)).copyFrom(new n(i))}}}),n}(a)}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var r=function(e){if(!(this instanceof r))return new r(e)
e instanceof t||(e=new t(e)),this._setBuffer(e),this.rewind()}
r.prototype._setBuffer=function(e){this._buffer=e,this.length=e.length},r.prototype.buffer=function(){return this._buffer},r.prototype.tap=function(e){return e(this),this},r.prototype.clone=function(e){var t=new this.constructor(this.buffer())
return t.seek(0===arguments.length?this.tell():e),t},r.prototype.tell=function(){return this._index},r.prototype.seek=function(e,t){return 1==arguments.length&&(t=e,e="="),"+"==e?this._index+=t:"-"==e?this._index-=t:this._index=t,this},r.prototype.rewind=function(){return this.seek(0)},r.prototype.eof=function(){return this.tell()==this.buffer().length},r.prototype.write=function(e,t,n){return this.seek("+",this.buffer().write(e,this.tell(),t,n))},r.prototype.fill=function(e,t){return 1==arguments.length&&(t=this.buffer().length-this.tell()),this.buffer().fill(e,this.tell(),this.tell()+t),this.seek("+",t),this},r.prototype.slice=function(e){0===arguments.length&&(e=this.length-this.tell())
var t=new this.constructor(this.buffer().slice(this.tell(),this.tell()+e))
return this.seek("+",e),t},r.prototype.copyFrom=function(e){var n=e instanceof t?e:e.buffer()
return n.copy(this.buffer(),this.tell(),0,n.length),this.seek("+",n.length),this},r.prototype.concat=function(e){for(var n in e)e[n]instanceof r&&(e[n]=e[n].buffer())
e.unshift(this.buffer())
var i=t.concat(e)
return this._setBuffer(i),this},r.prototype.toString=function(e,t){0===arguments.length?(e="utf8",t=this.buffer().length-this.tell()):1===arguments.length&&(t=this.buffer().length-this.tell())
var n=this.buffer().toString(e,this.tell(),this.tell()+t)
return this.seek("+",t),n},[[1,["readInt8","readUInt8"]],[2,["readInt16BE","readInt16LE","readUInt16BE","readUInt16LE"]],[4,["readInt32BE","readInt32LE","readUInt32BE","readUInt32LE","readFloatBE","readFloatLE"]],[8,["readDoubleBE","readDoubleLE"]]].forEach(function(e){e[1].forEach(function(t){r.prototype[t]=function(){var n=this.buffer()[t](this.tell())
return this.seek("+",e[0]),n}})}),[[1,["writeInt8","writeUInt8"]],[2,["writeInt16BE","writeInt16LE","writeUInt16BE","writeUInt16LE"]],[4,["writeInt32BE","writeInt32LE","writeUInt32BE","writeUInt32LE","writeFloatBE","writeFloatLE"]],[8,["writeDoubleBE","writeDoubleLE"]]].forEach(function(e){e[1].forEach(function(t){r.prototype[t]=function(n){return n=this.buffer()[t](n,this.tell()),this.seek("+",e[0]),this}})}),r.extend=function(e,t){var r=this
for(var i in 1===arguments.length&&(t=e,e=null),t=t||{},e=e||function(t){if(!(this instanceof e))return new e(t)
r.call(this,t)},n(152).inherits(e,r),e.extend=r.extend,e.define=r.define,t)e.define(i,t[i])
return e},r.define=function(e,t){var n=this.prototype[e]
this.prototype[e]=n&&function(){return this.__super=n,t.apply(this,arguments)}||t},e.exports=r}).call(this,n(1).Buffer)},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1
return!0}},function(e,t,n){var r=n(99)
e.exports=function(e,t){var n=!0
return r(e,function(e,r,i){return n=!!t(e,r,i)}),n}},function(e,t,n){var r=n(315),i=n(326),o=n(158)
e.exports=function(e){var t=i(e)
return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},function(e,t,n){var r=n(84),i=n(155),o=1,a=2
e.exports=function(e,t,n,s){var u=n.length,c=u,f=!s
if(null==e)return!c
for(e=Object(e);u--;){var l=n[u]
if(f&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++u<c;){var h=(l=n[u])[0],d=e[h],p=l[1]
if(f&&l[2]){if(void 0===d&&!(h in e))return!1}else{var v=new r
if(s)var b=s(d,p,h,e,t,v)
if(!(void 0===b?i(p,d,o|a,s,v):b))return!1}}return!0}},function(e,t,n){var r=n(84),i=n(156),o=n(322),a=n(325),s=n(67),u=n(7),c=n(90),f=n(132),l=1,h="[object Arguments]",d="[object Array]",p="[object Object]",v=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,b,g,m){var y=u(e),_=u(t),w=y?d:s(e),x=_?d:s(t),k=(w=w==h?p:w)==p,S=(x=x==h?p:x)==p,E=w==x
if(E&&c(e)){if(!c(t))return!1
y=!0,k=!1}if(E&&!k)return m||(m=new r),y||f(e)?i(e,t,n,b,g,m):o(e,t,w,n,b,g,m)
if(!(n&l)){var A=k&&v.call(e,"__wrapped__"),O=S&&v.call(t,"__wrapped__")
if(A||O){var T=A?e.value():e,M=O?t.value():t
return m||(m=new r),g(T,M,n,b,m)}}return!!E&&(m||(m=new r),a(e,t,n,b,g,m))}},function(e,t,n){var r=n(87),i=n(318),o=n(319)
function a(e){var t=-1,n=null==e?0:e.length
for(this.__data__=new r;++t<n;)this.add(e[t])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,e.exports=a},function(e,t){var n="__lodash_hash_undefined__"
e.exports=function(e){return this.__data__.set(e,n),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0
return!1}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,n){var r=n(37),i=n(138),o=n(62),a=n(156),s=n(323),u=n(324),c=1,f=2,l="[object Boolean]",h="[object Date]",d="[object Error]",p="[object Map]",v="[object Number]",b="[object RegExp]",g="[object Set]",m="[object String]",y="[object Symbol]",_="[object ArrayBuffer]",w="[object DataView]",x=r?r.prototype:void 0,k=x?x.valueOf:void 0
e.exports=function(e,t,n,r,x,S,E){switch(n){case w:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1
e=e.buffer,t=t.buffer
case _:return!(e.byteLength!=t.byteLength||!S(new i(e),new i(t)))
case l:case h:case v:return o(+e,+t)
case d:return e.name==t.name&&e.message==t.message
case b:case m:return e==t+""
case p:var A=s
case g:var O=r&c
if(A||(A=u),e.size!=t.size&&!O)return!1
var T=E.get(e)
if(T)return T==t
r|=f,E.set(e,t)
var M=a(A(e),A(t),r,x,S,E)
return E.delete(e),M
case y:if(k)return k.call(e)==k.call(t)}return!1}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size)
return e.forEach(function(e,r){n[++t]=[r,e]}),n}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size)
return e.forEach(function(e){n[++t]=e}),n}},function(e,t,n){var r=n(136),i=1,o=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,a,s,u){var c=n&i,f=r(e),l=f.length
if(l!=r(t).length&&!c)return!1
for(var h=l;h--;){var d=f[h]
if(!(c?d in t:o.call(t,d)))return!1}var p=u.get(e)
if(p&&u.get(t))return p==t
var v=!0
u.set(e,t),u.set(t,e)
for(var b=c;++h<l;){var g=e[d=f[h]],m=t[d]
if(a)var y=c?a(m,g,d,t,e,u):a(g,m,d,e,t,u)
if(!(void 0===y?g===m||s(g,m,n,a,u):y)){v=!1
break}b||(b="constructor"==d)}if(v&&!b){var _=e.constructor,w=t.constructor
_!=w&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w)&&(v=!1)}return u.delete(e),u.delete(t),v}},function(e,t,n){var r=n(157),i=n(38)
e.exports=function(e){for(var t=i(e),n=t.length;n--;){var o=t[n],a=e[o]
t[n]=[o,a,r(a)]}return t}},function(e,t,n){var r=n(155),i=n(328),o=n(159),a=n(106),s=n(157),u=n(158),c=n(50),f=1,l=2
e.exports=function(e,t){return a(e)&&s(t)?u(c(e),t):function(n){var a=i(n,e)
return void 0===a&&a===t?o(n,e):r(t,a,f|l)}}},function(e,t,n){var r=n(105)
e.exports=function(e,t,n){var i=null==e?void 0:r(e,t)
return void 0===i?n:i}},function(e,t,n){var r=n(330),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)}),t})
e.exports=a},function(e,t,n){var r=n(331),i=500
e.exports=function(e){var t=r(e,function(e){return n.size===i&&n.clear(),e}),n=t.cache
return t}},function(e,t,n){var r=n(87),i="Expected a function"
function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i)
var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var a=e.apply(this,r)
return n.cache=o.set(i,a)||o,a}
return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},function(e,t,n){var r=n(71),i=n(89),o=n(7),a=n(65),s=n(91),u=n(50)
e.exports=function(e,t,n){for(var c=-1,f=(t=r(t,e)).length,l=!1;++c<f;){var h=u(t[c])
if(!(l=null!=e&&n(e,h)))break
e=e[h]}return l||++c!=f?l:!!(f=null==e?0:e.length)&&s(f)&&a(h,f)&&(o(e)||i(e))}},function(e,t,n){var r=n(160),i=n(335),o=n(106),a=n(50)
e.exports=function(e){return o(e)?r(a(e)):i(e)}},function(e,t,n){var r=n(105)
e.exports=function(e){return function(t){return r(t,e)}}},function(e,t,n){e.exports=n(337)},function(e,t,n){var r=n(44),i=n(338),o=n(66),a=i(function(e,t){r(t,o(t),e)})
e.exports=a},function(e,t,n){var r=n(339),i=n(161)
e.exports=function(e){return r(function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0
for(a=e.length>3&&"function"==typeof a?(o--,a):void 0,s&&i(n[0],n[1],s)&&(a=o<3?void 0:a,o=1),t=Object(t);++r<o;){var u=n[r]
u&&e(t,u,r,a)}return t})}},function(e,t,n){var r=n(68),i=n(162),o=n(163)
e.exports=function(e,t){return o(i(e,t,r),e+"")}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(342),i=n(129),o=n(68),a=i?function(e,t){return i(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o
e.exports=a},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t){var n=800,r=16,i=Date.now
e.exports=function(e){var t=0,o=0
return function(){var a=i(),s=r-(a-o)
if(o=a,s>0){if(++t>=n)return arguments[0]}else t=0
return e.apply(void 0,arguments)}}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t,n,r){var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i&&i.writable)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var s=r(n(164)),u=r(n(9)),c=t.Hyper=function(e){function t(e,n){a(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,!1)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(t,s),i(t,null,{read:{value:function(e){var t=e.readInt32BE(),n=e.readInt32BE()
return this.fromBits(n,t)}},write:{value:function(e,t){if(!(e instanceof this))throw new Error("XDR Write Error: "+e+" is not a Hyper")
t.writeInt32BE(e.high),t.writeInt32BE(e.low)}},fromString:{value:function(e){if(!/^-?\d+$/.test(e))throw new Error("Invalid hyper string: "+e)
var n=o(Object.getPrototypeOf(t),"fromString",this).call(this,e,!1)
return new this(n.low,n.high)}},fromBits:{value:function(e,n){var r=o(Object.getPrototypeOf(t),"fromBits",this).call(this,e,n,!1)
return new this(r.low,r.high)}},isValid:{value:function(e){return e instanceof this}}}),t}()
u(c),c.MAX_VALUE=new c(s.MAX_VALUE.low,s.MAX_VALUE.high),c.MIN_VALUE=new c(s.MIN_VALUE.low,s.MIN_VALUE.high)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t,n,r){var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i&&i.writable)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var s=r(n(164)),u=r(n(9)),c=t.UnsignedHyper=function(e){function t(e,n){a(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,!0)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(t,s),i(t,null,{read:{value:function(e){var t=e.readInt32BE(),n=e.readInt32BE()
return this.fromBits(n,t)}},write:{value:function(e,t){if(!(e instanceof this))throw new Error("XDR Write Error: "+e+" is not an UnsignedHyper")
t.writeInt32BE(e.high),t.writeInt32BE(e.low)}},fromString:{value:function(e){if(!/^\d+$/.test(e))throw new Error("Invalid hyper string: "+e)
var n=o(Object.getPrototypeOf(t),"fromString",this).call(this,e,!0)
return new this(n.low,n.high)}},fromBits:{value:function(e,n){var r=o(Object.getPrototypeOf(t),"fromBits",this).call(this,e,n,!0)
return new this(r.low,r.high)}},isValid:{value:function(e){return e instanceof this}}}),t}()
u(c),c.MAX_VALUE=new c(s.MAX_UNSIGNED_VALUE.low,s.MAX_UNSIGNED_VALUE.high),c.MIN_VALUE=new c(s.MIN_VALUE.low,s.MIN_VALUE.high)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(49)),o=r(n(9)),a={read:function(e){return e.readFloatBE()},write:function(e,t){if(!i(e))throw new Error("XDR Write Error: not a number")
t.writeFloatBE(e)},isValid:function(e){return i(e)}}
t.Float=a,o(a)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(49)),o=r(n(9)),a={read:function(e){return e.readDoubleBE()},write:function(e,t){if(!i(e))throw new Error("XDR Write Error: not a number")
t.writeDoubleBE(e)},isValid:function(e){return i(e)}}
t.Double=a,o(a)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(9))&&r.__esModule?r.default:r,o={read:function(e){throw new Error("XDR Read Error: quadruple not supported")},write:function(e,t){throw new Error("XDR Write Error: quadruple not supported")},isValid:function(e){return!1}}
t.Quadruple=o,i(o)},function(e,t,n){var r=n(25),i=n(21),o="[object Boolean]"
e.exports=function(e){return!0===e||!1===e||i(e)&&r(e)==o}},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(41).Int,s=n(73).UnsignedInt,u=n(70),c=u.calculatePadding,f=u.slicePadding,l=r(n(16)),h=r(n(7))
r(n(9))((t.String=function(){function t(){var e=void 0===arguments[0]?s.MAX_VALUE:arguments[0]
o(this,t),this._maxLength=e}return i(t,{read:{value:function(e){var t=a.read(e)
if(t>this._maxLength)throw new Error("XDR Read Error: Saw "+t+" length String,max allowed is "+this._maxLength)
var n=c(t),r=e.slice(t)
return f(e,n),r.buffer()}},readString:{value:function(e){return this.read(e).toString("utf8")}},write:{value:function(t,n){if(t.length>this._maxLength)throw new Error("XDR Write Error: Got "+t.length+" bytes,max allows is "+this._maxLength)
var r=void 0
r=l(t)?e.from(t,"utf8"):e.from(t),a.write(r.length,n),n.writeBufferPadded(r)}},isValid:{value:function(t){var n=void 0
if(l(t))n=e.from(t,"utf8")
else{if(!h(t)&&!e.isBuffer(t))return!1
n=e.from(t)}return n.length<=this._maxLength}}}),t}()).prototype)}).call(this,n(1).Buffer)},function(e,t,n){"use strict";(function(e){var r=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var o,a=n(70),s=a.calculatePadding,u=a.slicePadding;((o=n(9))&&o.__esModule?o.default:o)((t.Opaque=function(){function t(e){i(this,t),this._length=e,this._padding=s(e)}return r(t,{read:{value:function(e){var t=e.slice(this._length)
return u(e,this._padding),t.buffer()}},write:{value:function(e,t){if(e.length!==this._length)throw new Error("XDR Write Error: Got "+e.length+" bytes, expected "+this._length)
t.writeBufferPadded(e)}},isValid:{value:function(t){return e.isBuffer(t)&&t.length===this._length}}}),t}()).prototype)}).call(this,n(1).Buffer)},function(e,t,n){"use strict";(function(e){var r=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var o,a=n(41).Int,s=n(73).UnsignedInt,u=n(70),c=u.calculatePadding,f=u.slicePadding;((o=n(9))&&o.__esModule?o.default:o)((t.VarOpaque=function(){function t(){var e=void 0===arguments[0]?s.MAX_VALUE:arguments[0]
i(this,t),this._maxLength=e}return r(t,{read:{value:function(e){var t=a.read(e)
if(t>this._maxLength)throw new Error("XDR Read Error: Saw "+t+" length VarOpaque,max allowed is "+this._maxLength)
var n=c(t),r=e.slice(t)
return f(e,n),r.buffer()}},write:{value:function(e,t){if(e.length>this._maxLength)throw new Error("XDR Write Error: Got "+e.length+" bytes,max allows is "+this._maxLength)
a.write(e.length,t),t.writeBufferPadded(e)}},isValid:{value:function(t){return e.isBuffer(t)&&t.length<=this._maxLength}}}),t}()).prototype)}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(104)),s=r(n(33)),u=r(n(166)),c=r(n(7))
r(n(9))((t.Array=function(){function e(t,n){o(this,e),this._childType=t,this._length=n}return i(e,{read:{value:function(e){var t=this
return u(this._length,function(){return t._childType.read(e)})}},write:{value:function(e,t){var n=this
if(!c(e))throw new Error("XDR Write Error: value is not array")
if(e.length!==this._length)throw new Error("XDR Write Error: Got array of size "+e.length+",expected "+this._length)
s(e,function(e){return n._childType.write(e,t)})}},isValid:{value:function(e){var t=this
return!!c(e)&&(e.length===this._length&&a(e,function(e){return t._childType.isValid(e)}))}}}),e}()).prototype)},function(e,t,n){var r=n(355),i=1/0,o=1.7976931348623157e308
e.exports=function(e){return e?(e=r(e))===i||e===-i?(e<0?-1:1)*o:e==e?e:0:0===e?e:0}},function(e,t,n){var r=n(26),i=n(72),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt
e.exports=function(e){if("number"==typeof e)return e
if(i(e))return o
if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(a,"")
var n=u.test(e)
return n||c.test(e)?f(e.slice(2),n?2:8):s.test(e)?o:+e}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(41).Int,s=n(73).UnsignedInt,u=r(n(104)),c=r(n(33)),f=r(n(166)),l=r(n(7))
r(n(9))((t.VarArray=function(){function e(t){var n=void 0===arguments[1]?s.MAX_VALUE:arguments[1]
o(this,e),this._childType=t,this._maxLength=n}return i(e,{read:{value:function(e){var t=this,n=a.read(e)
if(n>this._maxLength)throw new Error("XDR Read Error: Saw "+n+" length VarArray,max allowed is "+this._maxLength)
return f(n,function(){return t._childType.read(e)})}},write:{value:function(e,t){var n=this
if(!l(e))throw new Error("XDR Write Error: value is not array")
if(e.length>this._maxLength)throw new Error("XDR Write Error: Got array of size "+e.length+",max allowed is "+this._maxLength)
a.write(e.length,t),c(e,function(e){return n._childType.write(e,t)})}},isValid:{value:function(e){var t=this
return!!l(e)&&(!(e.length>this._maxLength)&&u(e,function(e){return t._childType.isValid(e)}))}}}),e}()).prototype)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(165).Bool,s=r(n(110)),u=r(n(11))
r(n(9))((t.Option=function(){function e(t){o(this,e),this._childType=t}return i(e,{read:{value:function(e){if(a.read(e))return this._childType.read(e)}},write:{value:function(e,t){var n=!(s(e)||u(e))
a.write(n,t),n&&this._childType.write(e,t)}},isValid:{value:function(e){return!!s(e)||(!!u(e)||this._childType.isValid(e))}}}),e}()).prototype)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(41).Int,s=r(n(33)),u=r(n(359))
r(n(9))(t.Enum=function(){function e(t,n){o(this,e),this.name=t,this.value=n}return i(e,null,{read:{value:function(e){var t=a.read(e)
if(!this._byValue.has(t))throw new Error("XDR Read Error: Unknown "+this.enumName+" member for value "+t)
return this._byValue.get(t)}},write:{value:function(e,t){if(!(e instanceof this))throw new Error("XDR Write Error: Unknown "+e+" is not a "+this.enumName)
a.write(e.value,t)}},isValid:{value:function(e){return e instanceof this}},members:{value:function(){return this._members}},values:{value:function(){return u(this._members)}},fromName:{value:function(e){var t=this._members[e]
if(!t)throw new Error(e+" is not a member of "+this.enumName)
return t}},fromValue:{value:function(e){var t=this._byValue.get(e)
if(!t)throw new Error(e+" is not a value of any member of "+this.enumName)
return t}},create:{value:function(t,n,r){var i,a=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
o(this,i),function e(t,n,r){var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i&&i.writable)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0}(Object.getPrototypeOf(i.prototype),"constructor",this).apply(this,t)},e),i)
return a.enumName=n,t.results[n]=a,a._members={},a._byValue=new Map,s(r,function(e,t){var n=new a(t,e)
a._members[t]=n,a._byValue.set(e,n),a[t]=function(){return n}}),a}}}),e}())},function(e,t,n){var r=n(360),i=n(38)
e.exports=function(e){return null==e?[]:r(e,i(e))}},function(e,t,n){var r=n(109)
e.exports=function(e,t){return r(t,function(t){return e[t]})}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e)){for(var n,r=[],i=e[Symbol.iterator]();!(n=i.next()).done&&(r.push(n.value),!t||r.length!==t););return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var s=r(n(33)),u=r(n(74)),c=r(n(11)),f=r(n(363)),l=n(111).Reference
r(n(9))(t.Struct=function(){function e(t){a(this,e),this._attributes=t||{}}return o(e,null,{read:{value:function(e){var t=u(this._fields,function(t){var n=i(t,2)
return[n[0],n[1].read(e)]})
return new this(f(t))}},write:{value:function(e,t){if(!(e instanceof this))throw new Error("XDR Write Error: "+e+" is not a "+this.structName)
s(this._fields,function(n){var r=i(n,2),o=r[0],a=r[1],s=e._attributes[o]
a.write(s,t)})}},isValid:{value:function(e){return e instanceof this}},create:{value:function(t,n,r){var o,u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
a(this,o),function e(t,n,r){var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i&&i.writable)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0}(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,t)},e),o)
return u.structName=n,t.results[n]=u,u._fields=r.map(function(e){var n=i(e,2),r=n[0],o=n[1]
return o instanceof l&&(o=o.resolve(t)),[r,o]}),s(u._fields,function(e){var t,n=i(e,1)[0]
u.prototype[n]=(t=n,function(e){return c(e)||(this._attributes[t]=e),this._attributes[t]})}),u}}}),e}())},function(e,t,n){var r=n(99),i=n(45)
e.exports=function(e,t){var n=-1,o=i(e)?Array(e.length):[]
return r(e,function(e,r,i){o[++n]=t(e,r,i)}),o}},function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t]
r[i[0]]=i[1]}return r}},function(e,t,n){var r=n(25),i=n(97),o=n(21),a="[object Object]",s=Function.prototype,u=Object.prototype,c=s.toString,f=u.hasOwnProperty,l=c.call(Object)
e.exports=function(e){if(!o(e)||r(e)!=a)return!1
var t=i(e)
if(null===t)return!0
var n=f.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&c.call(n)==l}},function(e,t,n){var r=n(366),i=n(159)
e.exports=function(e,t){return r(e,t,function(t,n){return i(e,n)})}},function(e,t,n){var r=n(105),i=n(367),o=n(71)
e.exports=function(e,t,n){for(var a=-1,s=t.length,u={};++a<s;){var c=t[a],f=r(e,c)
n(f,c)&&i(u,o(c,e),f)}return u}},function(e,t,n){var r=n(88),i=n(71),o=n(65),a=n(26),s=n(50)
e.exports=function(e,t,n,u){if(!a(e))return e
for(var c=-1,f=(t=i(t,e)).length,l=f-1,h=e;null!=h&&++c<f;){var d=s(t[c]),p=n
if(c!=l){var v=h[d]
void 0===(p=u?u(v,d,h):void 0)&&(p=a(v)?v:o(t[c+1])?[]:{})}r(h,d,p),h=h[d]}return e}},function(e,t,n){var r=n(369),i=n(162),o=n(163)
e.exports=function(e){return o(i(e,void 0,r),e+"")}},function(e,t,n){var r=n(370)
e.exports=function(e){return null!=e&&e.length?r(e,1):[]}},function(e,t,n){var r=n(96),i=n(371)
e.exports=function e(t,n,o,a,s){var u=-1,c=t.length
for(o||(o=i),s||(s=[]);++u<c;){var f=t[u]
n>0&&o(f)?n>1?e(f,n-1,o,a,s):r(s,f):a||(s[s.length]=f)}return s}},function(e,t,n){var r=n(37),i=n(89),o=n(7),a=r?r.isConcatSpreadable:void 0
e.exports=function(e){return o(e)||i(e)||!!(a&&e&&e[a])}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(33)),s=r(n(11)),u=r(n(16)),c=n(168).Void,f=n(111).Reference
r(n(9))(t.Union=function(){function e(t,n){o(this,e),this.set(t,n)}return i(e,{set:{value:function(e,t){u(e)&&(e=this.constructor._switchOn.fromName(e)),this._switch=e,this._arm=this.constructor.armForSwitch(this._switch),this._armType=this.constructor.armTypeForArm(this._arm),this._value=t}},get:{value:function(){var e=void 0===arguments[0]?this._arm:arguments[0]
if(this._arm!==c&&this._arm!==e)throw new Error(e+" not set")
return this._value}},switch:{value:function(){return this._switch}},arm:{value:function(){return this._arm}},armType:{value:function(){return this._armType}},value:{value:function(){return this._value}}},{armForSwitch:{value:function(e){if(this._switches.has(e))return this._switches.get(e)
if(this._defaultArm)return this._defaultArm
throw new Error("Bad union switch: "+e)}},armTypeForArm:{value:function(e){return e===c?c:this._arms[e]}},read:{value:function(e){var t=this._switchOn.read(e),n=this.armForSwitch(t)
return new this(t,this.armTypeForArm(n).read(e))}},write:{value:function(e,t){if(!(e instanceof this))throw new Error("XDR Write Error: "+e+" is not a "+this.unionName)
this._switchOn.write(e.switch(),t),e.armType().write(e.value(),t)}},isValid:{value:function(e){return e instanceof this}},create:{value:function(t,n,r){var i,l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}(i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
o(this,i),function e(t,n,r){var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i&&i.writable)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0}(Object.getPrototypeOf(i.prototype),"constructor",this).apply(this,t)},e),i)
l.unionName=n,t.results[n]=l,r.switchOn instanceof f?l._switchOn=r.switchOn.resolve(t):l._switchOn=r.switchOn,l._switches=new Map,l._arms={},a(r.arms,function(e,n){e instanceof f&&(e=e.resolve(t)),l._arms[n]=e})
var h=r.defaultArm
return h instanceof f&&(h=h.resolve(t)),l._defaultArm=h,a(r.switches,function(e){var t=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e)){for(var n,r=[],i=e[Symbol.iterator]();!(n=i.next()).done&&(r.push(n.value),!t||r.length!==t););return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e,2),n=t[0],r=t[1]
u(n)&&(n=l._switchOn.fromName(n)),l._switches.set(n,r)}),s(l._switchOn.values)||a(l._switchOn.values(),function(e){l[e.name]=function(t){return new l(e,t)},l.prototype[e.name]=function(t){return this.set(e,t)}}),a(l._arms,function(e,t){e!==c&&(l.prototype[t]=function(){return this.get(t)})}),l}}}),e}())},function(e,t,n){var r=n(2),i=n(42),o=n(3).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(e){return e<<30|e>>>2}function f(e,t,n,r){return 0===e?t&n|~t&r:2===e?t&n|t&r|n&r:t^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(e){for(var t,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,l=0;l<16;++l)n[l]=e.readInt32BE(4*l)
for(;l<80;++l)n[l]=n[l-3]^n[l-8]^n[l-14]^n[l-16]
for(var h=0;h<80;++h){var d=~~(h/20),p=0|((t=r)<<5|t>>>27)+f(d,i,o,s)+u+n[h]+a[d]
u=s,s=o,o=c(i),i=r,r=p}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var e=o.allocUnsafe(20)
return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=u},function(e,t,n){var r=n(2),i=n(42),o=n(3).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(e){return e<<5|e>>>27}function f(e){return e<<30|e>>>2}function l(e,t,n,r){return 0===e?t&n|~t&r:2===e?t&n|t&r|n&r:t^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(e){for(var t,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,h=0;h<16;++h)n[h]=e.readInt32BE(4*h)
for(;h<80;++h)n[h]=(t=n[h-3]^n[h-8]^n[h-14]^n[h-16])<<1|t>>>31
for(var d=0;d<80;++d){var p=~~(d/20),v=c(r)+l(p,i,o,s)+u+n[d]+a[p]|0
u=s,s=o,o=f(i),i=r,r=v}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var e=o.allocUnsafe(20)
return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=u},function(e,t,n){var r=n(2),i=n(170),o=n(42),a=n(3).Buffer,s=new Array(64)
function u(){this.init(),this._w=s,o.call(this,64,56)}r(u,i),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var e=a.allocUnsafe(28)
return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=u},function(e,t,n){var r=n(2),i=n(171),o=n(42),a=n(3).Buffer,s=new Array(160)
function u(){this.init(),this._w=s,o.call(this,128,112)}r(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var e=a.allocUnsafe(48)
function t(t,n,r){e.writeInt32BE(t,r),e.writeInt32BE(n,r+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),e},e.exports=u},function(e,t){},function(e,t){},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e}
t.decodeBase58Check=function(t,n){var r=i.decode(n),c=r[0],f=r.slice(0,r.length-4),l=f.slice(1),h=r.slice(r.length-4),d=u[t]
if(o(d))throw new Error(t+' is not a valid version byte name.  expected one of "accountId", "seed", or "none"')
if(c!==d)throw new Error("invalid version byte.  expected "+d+", got "+c)
var p=function(e){var t=a(e)
return a(t).slice(0,4)}(f)
if(!s(p,h))throw new Error("invalid checksum")
if("accountId"===t&&37!==r.length)throw new Error("Decoded address length is invalid. Expected 37, got "+r.length)
return e.from(l)},Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(380)),o=r(n(11)),a=n(51).hash,s=n(173).verifyChecksum,u={accountId:0,none:1,seed:33}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
for(var r="gsphnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCr65jkm8oFqi1tuvAxyz",i={},o=0;o<r.length;++o)i[r.charAt(o)]=o
var a=58
e.exports={decode:function(e){if(0===e.length)return[]
var t,n,r=[0]
for(t=0;t<e.length;++t){var o=e[t]
if(!(o in i))throw new Error("Non-base58 character")
for(n=0;n<r.length;++n)r[n]*=a
r[0]+=i[o]
var s=0
for(n=0;n<r.length;++n)r[n]+=s,s=r[n]>>8,r[n]&=255
for(;s;)r.push(255&s),s>>=8}for(t=0;"g"===e[t]&&t<e.length-1;++t)r.push(0)
return r.reverse()}}},function(e,t,n){"use strict"
e.exports={crc1:n(382),crc8:n(383),crc81wire:n(384),crc16:n(385),crc16ccitt:n(386),crc16modbus:n(387),crc16xmodem:n(388),crc16kermit:n(389),crc24:n(390),crc32:n(391),crcjam:n(392)}},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}e.exports=(0,o.default)("crc1",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=~~t,o=0,a=0;a<e.length;a++){o+=e[a]}return(n+=o%256)%256})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,7,14,9,28,27,18,21,56,63,54,49,36,35,42,45,112,119,126,121,108,107,98,101,72,79,70,65,84,83,90,93,224,231,238,233,252,251,242,245,216,223,214,209,196,195,202,205,144,151,158,153,140,139,130,133,168,175,166,161,180,179,186,189,199,192,201,206,219,220,213,210,255,248,241,246,227,228,237,234,183,176,185,190,171,172,165,162,143,136,129,134,147,148,157,154,39,32,41,46,59,60,53,50,31,24,17,22,3,4,13,10,87,80,89,94,75,76,69,66,111,104,97,102,115,116,125,122,137,142,135,128,149,146,155,156,177,182,191,184,173,170,163,164,249,254,247,240,229,226,235,236,193,198,207,200,221,218,211,212,105,110,103,96,117,114,123,124,81,86,95,88,77,74,67,68,25,30,23,16,5,2,11,12,33,38,47,40,61,58,51,52,78,73,64,71,82,85,92,91,118,113,120,127,106,109,100,99,62,57,48,55,34,37,44,43,6,1,8,15,26,29,20,19,174,169,160,167,178,181,188,187,150,145,152,159,138,141,132,131,222,217,208,215,194,197,204,203,230,225,232,239,250,253,244,243]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("crc-8",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=~~t,o=0;o<e.length;o++){var a=e[o]
n=255&s[255&(n^a)]}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,94,188,226,97,63,221,131,194,156,126,32,163,253,31,65,157,195,33,127,252,162,64,30,95,1,227,189,62,96,130,220,35,125,159,193,66,28,254,160,225,191,93,3,128,222,60,98,190,224,2,92,223,129,99,61,124,34,192,158,29,67,161,255,70,24,250,164,39,121,155,197,132,218,56,102,229,187,89,7,219,133,103,57,186,228,6,88,25,71,165,251,120,38,196,154,101,59,217,135,4,90,184,230,167,249,27,69,198,152,122,36,248,166,68,26,153,199,37,123,58,100,134,216,91,5,231,185,140,210,48,110,237,179,81,15,78,16,242,172,47,113,147,205,17,79,173,243,112,46,204,146,211,141,111,49,178,236,14,80,175,241,19,77,206,144,114,44,109,51,209,143,12,82,176,238,50,108,142,208,83,13,239,177,240,174,76,18,145,207,45,115,202,148,118,40,171,245,23,73,8,86,180,234,105,55,213,139,87,9,235,181,54,104,138,212,149,203,41,119,244,170,72,22,233,183,85,11,136,214,52,106,43,117,151,201,74,20,246,168,116,42,200,150,21,75,169,247,182,232,10,84,215,137,107,53]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("dallas-1-wire",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=~~t,o=0;o<e.length;o++){var a=e[o]
n=255&s[255&(n^a)]}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,49345,49537,320,49921,960,640,49729,50689,1728,1920,51009,1280,50625,50305,1088,52225,3264,3456,52545,3840,53185,52865,3648,2560,51905,52097,2880,51457,2496,2176,51265,55297,6336,6528,55617,6912,56257,55937,6720,7680,57025,57217,8e3,56577,7616,7296,56385,5120,54465,54657,5440,55041,6080,5760,54849,53761,4800,4992,54081,4352,53697,53377,4160,61441,12480,12672,61761,13056,62401,62081,12864,13824,63169,63361,14144,62721,13760,13440,62529,15360,64705,64897,15680,65281,16320,16e3,65089,64001,15040,15232,64321,14592,63937,63617,14400,10240,59585,59777,10560,60161,11200,10880,59969,60929,11968,12160,61249,11520,60865,60545,11328,58369,9408,9600,58689,9984,59329,59009,9792,8704,58049,58241,9024,57601,8640,8320,57409,40961,24768,24960,41281,25344,41921,41601,25152,26112,42689,42881,26432,42241,26048,25728,42049,27648,44225,44417,27968,44801,28608,28288,44609,43521,27328,27520,43841,26880,43457,43137,26688,30720,47297,47489,31040,47873,31680,31360,47681,48641,32448,32640,48961,32e3,48577,48257,31808,46081,29888,30080,46401,30464,47041,46721,30272,29184,45761,45953,29504,45313,29120,28800,45121,20480,37057,37249,20800,37633,21440,21120,37441,38401,22208,22400,38721,21760,38337,38017,21568,39937,23744,23936,40257,24320,40897,40577,24128,23040,39617,39809,23360,39169,22976,22656,38977,34817,18624,18816,35137,19200,35777,35457,19008,19968,36545,36737,20288,36097,19904,19584,35905,17408,33985,34177,17728,34561,18368,18048,34369,33281,17088,17280,33601,16640,33217,32897,16448]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("crc-16",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=~~t,o=0;o<e.length;o++){var a=e[o]
n=65535&(s[255&(n^a)]^n>>8)}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("ccitt",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=void 0!==t?~~t:65535,o=0;o<e.length;o++){var a=e[o]
n=65535&(s[255&(n>>8^a)]^n<<8)}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,49345,49537,320,49921,960,640,49729,50689,1728,1920,51009,1280,50625,50305,1088,52225,3264,3456,52545,3840,53185,52865,3648,2560,51905,52097,2880,51457,2496,2176,51265,55297,6336,6528,55617,6912,56257,55937,6720,7680,57025,57217,8e3,56577,7616,7296,56385,5120,54465,54657,5440,55041,6080,5760,54849,53761,4800,4992,54081,4352,53697,53377,4160,61441,12480,12672,61761,13056,62401,62081,12864,13824,63169,63361,14144,62721,13760,13440,62529,15360,64705,64897,15680,65281,16320,16e3,65089,64001,15040,15232,64321,14592,63937,63617,14400,10240,59585,59777,10560,60161,11200,10880,59969,60929,11968,12160,61249,11520,60865,60545,11328,58369,9408,9600,58689,9984,59329,59009,9792,8704,58049,58241,9024,57601,8640,8320,57409,40961,24768,24960,41281,25344,41921,41601,25152,26112,42689,42881,26432,42241,26048,25728,42049,27648,44225,44417,27968,44801,28608,28288,44609,43521,27328,27520,43841,26880,43457,43137,26688,30720,47297,47489,31040,47873,31680,31360,47681,48641,32448,32640,48961,32e3,48577,48257,31808,46081,29888,30080,46401,30464,47041,46721,30272,29184,45761,45953,29504,45313,29120,28800,45121,20480,37057,37249,20800,37633,21440,21120,37441,38401,22208,22400,38721,21760,38337,38017,21568,39937,23744,23936,40257,24320,40897,40577,24128,23040,39617,39809,23360,39169,22976,22656,38977,34817,18624,18816,35137,19200,35777,35457,19008,19968,36545,36737,20288,36097,19904,19584,35905,17408,33985,34177,17728,34561,18368,18048,34369,33281,17088,17280,33601,16640,33217,32897,16448]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("crc-16-modbus",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=void 0!==t?~~t:65535,o=0;o<e.length;o++){var a=e[o]
n=65535&(s[255&(n^a)]^n>>8)}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}e.exports=(0,o.default)("xmodem",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=void 0!==t?~~t:0,o=0;o<e.length;o++){var a=n>>>8&255
a^=255&e[o],n=n<<8&65535,n^=a^=a>>>4,n^=a=a<<5&65535,n^=a=a<<7&65535}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,4489,8978,12955,17956,22445,25910,29887,35912,40385,44890,48851,51820,56293,59774,63735,4225,264,13203,8730,22181,18220,30135,25662,40137,36160,49115,44626,56045,52068,63999,59510,8450,12427,528,5017,26406,30383,17460,21949,44362,48323,36440,40913,60270,64231,51324,55797,12675,8202,4753,792,30631,26158,21685,17724,48587,44098,40665,36688,64495,60006,55549,51572,16900,21389,24854,28831,1056,5545,10034,14011,52812,57285,60766,64727,34920,39393,43898,47859,21125,17164,29079,24606,5281,1320,14259,9786,57037,53060,64991,60502,39145,35168,48123,43634,25350,29327,16404,20893,9506,13483,1584,6073,61262,65223,52316,56789,43370,47331,35448,39921,29575,25102,20629,16668,13731,9258,5809,1848,65487,60998,56541,52564,47595,43106,39673,35696,33800,38273,42778,46739,49708,54181,57662,61623,2112,6601,11090,15067,20068,24557,28022,31999,38025,34048,47003,42514,53933,49956,61887,57398,6337,2376,15315,10842,24293,20332,32247,27774,42250,46211,34328,38801,58158,62119,49212,53685,10562,14539,2640,7129,28518,32495,19572,24061,46475,41986,38553,34576,62383,57894,53437,49460,14787,10314,6865,2904,32743,28270,23797,19836,50700,55173,58654,62615,32808,37281,41786,45747,19012,23501,26966,30943,3168,7657,12146,16123,54925,50948,62879,58390,37033,33056,46011,41522,23237,19276,31191,26718,7393,3432,16371,11898,59150,63111,50204,54677,41258,45219,33336,37809,27462,31439,18516,23005,11618,15595,3696,8185,63375,58886,54429,50452,45483,40994,37561,33584,31687,27214,22741,18780,15843,11370,7921,3960]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("kermit",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=void 0!==t?~~t:0,o=0;o<e.length;o++){var a=e[o]
n=65535&(s[255&(n^a)]^n>>8)}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,8801531,9098509,825846,9692897,1419802,1651692,10452759,10584377,2608578,2839604,11344079,3303384,11807523,12104405,4128302,12930697,4391538,5217156,13227903,5679208,13690003,14450021,5910942,6606768,14844747,15604413,6837830,16197969,7431594,8256604,16494759,840169,9084178,8783076,18463,10434312,1670131,1434117,9678590,11358416,2825259,2590173,10602790,4109873,12122826,11821884,3289031,13213536,5231515,4409965,12912278,5929345,14431610,13675660,5693559,6823513,15618722,14863188,6588335,16513208,8238147,7417269,16212302,1680338,10481449,9664223,1391140,9061683,788936,36926,8838341,12067563,4091408,3340262,11844381,2868234,11372785,10555655,2579964,14478683,5939616,5650518,13661357,5180346,13190977,12967607,4428364,8219746,16457881,16234863,7468436,15633027,6866552,6578062,14816117,1405499,9649856,10463030,1698765,8819930,55329,803287,9047340,11858690,3325945,4072975,12086004,2561507,10574104,11387118,2853909,13647026,5664841,5958079,14460228,4446803,12949160,13176670,5194661,7454091,16249200,16476294,8201341,14834538,6559633,6852199,15647388,3360676,11864927,12161705,4185682,10527045,2551230,2782280,11286707,9619101,1346150,1577872,10379115,73852,8875143,9172337,899466,16124205,7357910,8182816,16421083,6680524,14918455,15678145,6911546,5736468,13747439,14507289,5968354,12873461,4334094,5159928,13170435,4167245,12180150,11879232,3346363,11301036,2767959,2532769,10545498,10360692,1596303,1360505,9604738,913813,9157998,8856728,92259,16439492,8164415,7343561,16138546,6897189,15692510,14936872,6662099,5986813,14488838,13733104,5750795,13156124,5174247,4352529,12855018,2810998,11315341,10498427,2522496,12124823,4148844,3397530,11901793,9135439,862644,110658,8912057,1606574,10407765,9590435,1317464,15706879,6940164,6651890,14889737,8145950,16384229,16161043,7394792,5123014,13133629,12910283,4370992,14535975,5997020,5707818,13718737,2504095,10516836,11329682,2796649,11916158,3383173,4130419,12143240,8893606,129117,876971,9121104,1331783,9576124,10389322,1625009,14908182,6633453,6925851,15721184,7380471,16175372,16402682,8127489,4389423,12891860,13119266,5137369,13704398,5722165,6015427,14517560]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("crc-24",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=void 0!==t?~~t:11994318,o=0;o<e.length;o++){var a=e[o]
n=16777215&(s[255&(n>>16^a)]^n<<8)}return n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("crc-32",function(e,t){r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=0===t?0:-1^~~t,o=0;o<e.length;o++){var a=e[o]
n=s[255&(n^a)]^n>>>8}return-1^n})},function(e,t,n){"use strict"
var r=n(1),i=a(n(22)),o=a(n(23))
function a(e){return e&&e.__esModule?e:{default:e}}var s=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
"undefined"!=typeof Int32Array&&(s=new Int32Array(s)),e.exports=(0,o.default)("jam",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1
r.Buffer.isBuffer(e)||(e=(0,i.default)(e))
for(var n=0===t?0:~~t,o=0;o<e.length;o++){var a=e[o]
n=s[255&(n^a)]^n>>>8}return n})},function(e,t,n){var r=n(394),i=n(108),o=n(178),a=n(115),s=n(179),u=n(180),c=Math.ceil
e.exports=function(e,t){var n=(t=void 0===t?" ":i(t)).length
if(n<2)return n?r(t,e):t
var f=r(t,c(e/s(t)))
return a(t)?o(u(f),0,e).join(""):f.slice(0,e)}},function(e,t){var n=9007199254740991,r=Math.floor
e.exports=function(e,t){var i=""
if(!e||t<1||t>n)return i
do{t%2&&(i+=e),(t=r(t/2))&&(e+=e)}while(t)
return i}},function(e,t){e.exports=function(e,t,n){var r=-1,i=e.length
t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0
for(var o=Array(i);++r<i;)o[r]=e[r+t]
return o}},function(e,t,n){var r=n(160)("length")
e.exports=r},function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",c="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[o,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),f="(?:"+[o+r+"?",r,a,s,n].join("|")+")",l=RegExp(i+"(?="+i+")|"+f+c,"g")
e.exports=function(e){for(var t=l.lastIndex=0;l.test(e);)++t
return t}},function(e,t){e.exports=function(e){return e.split("")}},function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",c="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[o,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),f="(?:"+[o+r+"?",r,a,s,n].join("|")+")",l=RegExp(i+"(?="+i+")|"+f+c,"g")
e.exports=function(e){return e.match(l)||[]}},function(e,t,n){var r=n(401)
e.exports=function(e,t){for(var n=e.length;n--&&r(t,e[n],0)>-1;);return n}},function(e,t,n){var r=n(402),i=n(403),o=n(404)
e.exports=function(e,t,n){return t==t?o(e,t,n):r(e,i,n)}},function(e,t){e.exports=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o
return-1}},function(e,t){e.exports=function(e){return e!=e}},function(e,t){e.exports=function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r
return-1}},function(e,t,n){"use strict"
var r=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e)){for(var n,r=[],i=e[Symbol.iterator]();!(n=i.next()).done&&(r.push(n.value),!t||r.length!==t););return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")}
t.best_r=function(e){var t,n
e=new o(e)
var i=[[new o(0),new o(1)],[new o(1),new o(0)]],s=2
for(;!e.gt(a);){t=e.floor(),n=e.sub(t)
var u=t.mul(i[s-1][0]).add(i[s-2][0]),c=t.mul(i[s-1][1]).add(i[s-2][1])
if(u.gt(a)||c.gt(a))break
if(i.push([u,c]),n.eq(0))break
e=new o(1).div(n),s++}var f=r(i[i.length-1],2),l=f[0],h=f[1]
if(l.isZero()||h.isZero())throw new Error("Couldn't find approximation")
return[l.toNumber(),h.toNumber()]},Object.defineProperty(t,"__esModule",{value:!0})
var i,o=(i=n(34))&&i.__esModule?i.default:i,a=2147483647},function(e,t,n){var r=n(20).isFinite
e.exports=function(e){return"number"==typeof e&&r(e)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.accountMerge=n(408).accountMerge,t.allowTrust=n(409).allowTrust,t.bumpSequence=n(410).bumpSequence,t.changeTrust=n(411).changeTrust,t.createAccount=n(412).createAccount,t.createPassiveOffer=n(413).createPassiveOffer,t.inflation=n(414).inflation,t.manageData=n(415).manageData,t.manageOffer=n(416).manageOffer,t.pathPayment=n(417).pathPayment,t.payment=n(418).payment,t.setOptions=n(419).setOptions},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(8))&&r.__esModule?r.default:r,o=n(17).Keypair,a=n(18).StrKey
t.accountMerge=function(e){var t={}
if(!a.isValidEd25519PublicKey(e.destination))throw new Error("destination is invalid")
return t.body=i.OperationBody.accountMerge(o.fromPublicKey(e.destination).xdrAccountId()),this.setSourceAccount(t,e),new i.Operation(t)}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=n(17).Keypair,a=n(18).StrKey,s=r(n(177))
t.allowTrust=function(e){if(!a.isValidEd25519PublicKey(e.trustor))throw new Error("trustor is invalid")
var t={}
if(t.trustor=o.fromPublicKey(e.trustor).xdrAccountId(),e.assetCode.length<=4){var n=s(e.assetCode,4,"\0")
t.asset=i.AllowTrustOpAsset.assetTypeCreditAlphanum4(n)}else{if(!(e.assetCode.length<=12))throw new Error("Asset code must be 12 characters at max.")
n=s(e.assetCode,12,"\0"),t.asset=i.AllowTrustOpAsset.assetTypeCreditAlphanum12(n)}t.authorize=e.authorize
var r=new i.AllowTrustOp(t),u={}
return u.body=i.OperationBody.allowTrust(r),this.setSourceAccount(u,e),new i.Operation(u)}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=n(28).Hyper,a=r(n(34)),s=r(n(16))
t.bumpSequence=function(e){var t={}
if(!s(e.bumpTo))throw new Error("bumpTo must be a string")
try{new a(e.bumpTo)}catch(e){throw new Error("bumpTo must be a stringified number")}t.bumpTo=o.fromString(e.bumpTo)
var n=new i.BumpSequenceOp(t),r={}
return r.body=i.OperationBody.bumpSequence(n),this.setSourceAccount(r,e),new i.Operation(r)}},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=(n(17).Keypair,r(n(11))),a=n(28).Hyper,s=r(n(34))
t.changeTrust=function(e){var t={}
if(t.line=e.asset.toXDRObject(),!o(e.limit)&&!this.isValidAmount(e.limit,!0))throw new TypeError(this.constructAmountRequirementsError("limit"))
e.limit?t.limit=this._toXDRAmount(e.limit):t.limit=a.fromString(new s("9223372036854775807").toString()),e.source&&(t.source=e.source.masterKeypair)
var n=new i.ChangeTrustOp(t),r={}
return r.body=i.OperationBody.changeTrust(n),this.setSourceAccount(r,e),new i.Operation(r)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o,a=(r=n(8))&&r.__esModule?r.default:r,s=n(17).Keypair,u=n(18).StrKey,c=(i=function(e){if(!u.isValidEd25519PublicKey(e.destination))throw new Error("destination is invalid")
if(!this.isValidAmount(e.startingBalance))throw new TypeError(this.constructAmountRequirementsError("startingBalance"))
var t={}
t.destination=s.fromPublicKey(e.destination).xdrAccountId(),t.startingBalance=this._toXDRAmount(e.startingBalance)
var n=new a.CreateAccountOp(t),r={}
return r.body=a.OperationBody.createAccount(n),this.setSourceAccount(r,e),new a.Operation(r)},(o=function(e){return i.apply(this,arguments)}).toString=function(){return i.toString()},o)
t.createAccount=c},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=r(n(11))
t.createPassiveOffer=function(e){var t={}
if(t.selling=e.selling.toXDRObject(),t.buying=e.buying.toXDRObject(),!this.isValidAmount(e.amount))throw new TypeError(this.constructAmountRequirementsError("amount"))
if(t.amount=this._toXDRAmount(e.amount),o(e.price))throw new TypeError("price argument is required")
t.price=this._toXDRPrice(e.price)
var n=new i.CreatePassiveOfferOp(t),r={}
return r.body=i.OperationBody.createPassiveOffer(n),this.setSourceAccount(r,e),new i.Operation(r)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(8))&&r.__esModule?r.default:r
t.inflation=function(){var e=void 0===arguments[0]?{}:arguments[0],t={}
return t.body=i.OperationBody.inflation(),this.setSourceAccount(t,e),new i.Operation(t)}},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=r(n(16))
t.manageData=function(t){var n={}
if(!(o(t.name)&&t.name.length<=64))throw new Error("name must be a string, up to 64 characters")
if(n.dataName=t.name,!o(t.value)&&!e.isBuffer(t.value)&&null!==t.value)throw new Error("value must be a string, Buffer or null")
if(o(t.value)?n.dataValue=e.from(t.value):n.dataValue=t.value,null!==n.dataValue&&n.dataValue.length>64)throw new Error("value cannot be longer that 64 bytes")
var r=new i.ManageDataOp(n),a={}
return a.body=i.OperationBody.manageDatum(r),this.setSourceAccount(a,t),new i.Operation(a)}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=r(n(11)),a=n(28).UnsignedHyper
t.manageOffer=function(e){var t={}
if(t.selling=e.selling.toXDRObject(),t.buying=e.buying.toXDRObject(),!this.isValidAmount(e.amount,!0))throw new TypeError(this.constructAmountRequirementsError("amount"))
if(t.amount=this._toXDRAmount(e.amount),o(e.price))throw new TypeError("price argument is required")
t.price=this._toXDRPrice(e.price),o(e.offerId)?e.offerId="0":e.offerId=e.offerId.toString(),t.offerId=a.fromString(e.offerId)
var n=new i.ManageOfferOp(t),r={}
return r.body=i.OperationBody.manageOffer(n),this.setSourceAccount(r,e),new i.Operation(r)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i=(r=n(8))&&r.__esModule?r.default:r,o=n(17).Keypair,a=n(18).StrKey
t.pathPayment=function(e){switch(!0){case!e.sendAsset:throw new Error("Must specify a send asset")
case!this.isValidAmount(e.sendMax):throw new TypeError(this.constructAmountRequirementsError("sendMax"))
case!a.isValidEd25519PublicKey(e.destination):throw new Error("destination is invalid")
case!e.destAsset:throw new Error("Must provide a destAsset for a payment operation")
case!this.isValidAmount(e.destAmount):throw new TypeError(this.constructAmountRequirementsError("destAmount"))}var t={}
t.sendAsset=e.sendAsset.toXDRObject(),t.sendMax=this._toXDRAmount(e.sendMax),t.destination=o.fromPublicKey(e.destination).xdrAccountId(),t.destAsset=e.destAsset.toXDRObject(),t.destAmount=this._toXDRAmount(e.destAmount)
var n=e.path?e.path:[]
t.path=n.map(function(e){return e.toXDRObject()})
var r=new i.PathPaymentOp(t),s={}
return s.body=i.OperationBody.pathPayment(r),this.setSourceAccount(s,e),new i.Operation(s)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o,a=(r=n(8))&&r.__esModule?r.default:r,s=n(17).Keypair,u=n(18).StrKey,c=(i=function(e){if(!u.isValidEd25519PublicKey(e.destination))throw new Error("destination is invalid")
if(!e.asset)throw new Error("Must provide an asset for a payment operation")
if(!this.isValidAmount(e.amount))throw new TypeError(this.constructAmountRequirementsError("amount"))
var t={}
t.destination=s.fromPublicKey(e.destination).xdrAccountId(),t.asset=e.asset.toXDRObject(),t.amount=this._toXDRAmount(e.amount)
var n=new a.PaymentOp(t),r={}
return r.body=a.OperationBody.payment(n),this.setSourceAccount(r,e),new a.Operation(r)},(o=function(e){return i.apply(this,arguments)}).toString=function(){return i.toString()},o)
t.payment=c},function(e,t,n){"use strict";(function(e){var r=function(e){return e&&e.__esModule?e.default:e}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(8)),o=n(17).Keypair,a=n(18).StrKey,s=r(n(11)),u=r(n(16))
t.setOptions=function(t){var n={}
if(t.inflationDest){if(!a.isValidEd25519PublicKey(t.inflationDest))throw new Error("inflationDest is invalid")
n.inflationDest=o.fromPublicKey(t.inflationDest).xdrAccountId()}var r=function(e,t){if(e>=0&&e<=255)return!0
throw new Error(t+" value must be between 0 and 255")}
if(n.clearFlags=this._checkUnsignedIntValue("clearFlags",t.clearFlags),n.setFlags=this._checkUnsignedIntValue("setFlags",t.setFlags),n.masterWeight=this._checkUnsignedIntValue("masterWeight",t.masterWeight,r),n.lowThreshold=this._checkUnsignedIntValue("lowThreshold",t.lowThreshold,r),n.medThreshold=this._checkUnsignedIntValue("medThreshold",t.medThreshold,r),n.highThreshold=this._checkUnsignedIntValue("highThreshold",t.highThreshold,r),!s(t.homeDomain)&&!u(t.homeDomain))throw new TypeError("homeDomain argument must be of type String")
if(n.homeDomain=t.homeDomain,t.signer){var c=this._checkUnsignedIntValue("signer.weight",t.signer.weight,r),f=void 0,l=0
if(t.signer.ed25519PublicKey){if(!a.isValidEd25519PublicKey(t.signer.ed25519PublicKey))throw new Error("signer.ed25519PublicKey is invalid.")
var h=a.decodeEd25519PublicKey(t.signer.ed25519PublicKey)
f=new i.SignerKey.signerKeyTypeEd25519(h),l++}if(t.signer.preAuthTx){if(u(t.signer.preAuthTx)&&(t.signer.preAuthTx=e.from(t.signer.preAuthTx,"hex")),!e.isBuffer(t.signer.preAuthTx)||32!=t.signer.preAuthTx.length)throw new Error("signer.preAuthTx must be 32 bytes Buffer.")
f=new i.SignerKey.signerKeyTypePreAuthTx(t.signer.preAuthTx),l++}if(t.signer.sha256Hash){if(u(t.signer.sha256Hash)&&(t.signer.sha256Hash=e.from(t.signer.sha256Hash,"hex")),!e.isBuffer(t.signer.sha256Hash)||32!=t.signer.sha256Hash.length)throw new Error("signer.sha256Hash must be 32 bytes Buffer.")
f=new i.SignerKey.signerKeyTypeHashX(t.signer.sha256Hash),l++}if(1!=l)throw new Error("Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx.")
n.signer=new i.Signer({key:f,weight:c})}var d=new i.SetOptionsOp(n),p={}
return p.body=i.OperationBody.setOption(d),this.setSourceAccount(p,t),new i.Operation(p)}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
t.randomBytes=t.rng=t.pseudoRandomBytes=t.prng=n(43),t.createHash=t.Hash=n(53),t.createHmac=t.Hmac=n(183)
var r=n(426),i=Object.keys(r),o=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i)
t.getHashes=function(){return o}
var a=n(186)
t.pbkdf2=a.pbkdf2,t.pbkdf2Sync=a.pbkdf2Sync
var s=n(428)
t.Cipher=s.Cipher,t.createCipher=s.createCipher,t.Cipheriv=s.Cipheriv,t.createCipheriv=s.createCipheriv,t.Decipher=s.Decipher,t.createDecipher=s.createDecipher,t.Decipheriv=s.Decipheriv,t.createDecipheriv=s.createDecipheriv,t.getCiphers=s.getCiphers,t.listCiphers=s.listCiphers
var u=n(445)
t.DiffieHellmanGroup=u.DiffieHellmanGroup,t.createDiffieHellmanGroup=u.createDiffieHellmanGroup,t.getDiffieHellman=u.getDiffieHellman,t.createDiffieHellman=u.createDiffieHellman,t.DiffieHellman=u.DiffieHellman
var c=n(450)
t.createSign=c.createSign,t.Sign=c.Sign,t.createVerify=c.createVerify,t.Verify=c.Verify,t.createECDH=n(488)
var f=n(489)
t.publicEncrypt=f.publicEncrypt,t.privateEncrypt=f.privateEncrypt,t.publicDecrypt=f.publicDecrypt,t.privateDecrypt=f.privateDecrypt
var l=n(492)
t.randomFill=l.randomFill,t.randomFillSync=l.randomFillSync,t.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},t.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(e,t,n){e.exports=n(102)},function(e,t,n){e.exports=n(32)},function(e,t,n){e.exports=n(46).Transform},function(e,t,n){e.exports=n(46).PassThrough},function(e,t,n){"use strict"
var r=n(2),i=n(3).Buffer,o=n(29),a=i.alloc(128),s=64
function u(e,t){o.call(this,"digest"),"string"==typeof t&&(t=i.from(t)),this._alg=e,this._key=t,t.length>s?t=e(t):t.length<s&&(t=i.concat([t,a],s))
for(var n=this._ipad=i.allocUnsafe(s),r=this._opad=i.allocUnsafe(s),u=0;u<s;u++)n[u]=54^t[u],r[u]=92^t[u]
this._hash=[n]}r(u,o),u.prototype._update=function(e){this._hash.push(e)},u.prototype._final=function(){var e=this._alg(i.concat(this._hash))
return this._alg(i.concat([this._opad,e]))},e.exports=u},function(e,t,n){e.exports=n(185)},function(e,t,n){(function(t,r){var i,o=n(187),a=n(188),s=n(189),u=n(3).Buffer,c=t.crypto&&t.crypto.subtle,f={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},l=[]
function h(e,t,n,r,i){return c.importKey("raw",e,{name:"PBKDF2"},!1,["deriveBits"]).then(function(e){return c.deriveBits({name:"PBKDF2",salt:t,iterations:n,hash:{name:i}},e,r<<3)}).then(function(e){return u.from(e)})}e.exports=function(e,n,d,p,v,b){"function"==typeof v&&(b=v,v=void 0)
var g=f[(v=v||"sha1").toLowerCase()]
if(!g||"function"!=typeof t.Promise)return r.nextTick(function(){var t
try{t=s(e,n,d,p,v)}catch(e){return b(e)}b(null,t)})
if(o(e,n,d,p),"function"!=typeof b)throw new Error("No callback provided to pbkdf2")
u.isBuffer(e)||(e=u.from(e,a)),u.isBuffer(n)||(n=u.from(n,a)),function(e,t){e.then(function(e){r.nextTick(function(){t(null,e)})},function(e){r.nextTick(function(){t(e)})})}(function(e){if(t.process&&!t.process.browser)return Promise.resolve(!1)
if(!c||!c.importKey||!c.deriveBits)return Promise.resolve(!1)
if(void 0!==l[e])return l[e]
var n=h(i=i||u.alloc(8),i,10,128,e).then(function(){return!0}).catch(function(){return!1})
return l[e]=n,n}(g).then(function(t){return t?h(e,n,d,p,g):s(e,n,d,p,v)}),b)}}).call(this,n(5),n(14))},function(e,t,n){var r=n(429),i=n(121),o=n(122),a=n(444),s=n(76)
function u(e,t,n){if(e=e.toLowerCase(),o[e])return i.createCipheriv(e,t,n)
if(a[e])return new r({key:t,iv:n,mode:e})
throw new TypeError("invalid suite type")}function c(e,t,n){if(e=e.toLowerCase(),o[e])return i.createDecipheriv(e,t,n)
if(a[e])return new r({key:t,iv:n,mode:e,decrypt:!0})
throw new TypeError("invalid suite type")}t.createCipher=t.Cipher=function(e,t){var n,r
if(e=e.toLowerCase(),o[e])n=o[e].key,r=o[e].iv
else{if(!a[e])throw new TypeError("invalid suite type")
n=8*a[e].key,r=a[e].iv}var i=s(t,!1,n,r)
return u(e,i.key,i.iv)},t.createCipheriv=t.Cipheriv=u,t.createDecipher=t.Decipher=function(e,t){var n,r
if(e=e.toLowerCase(),o[e])n=o[e].key,r=o[e].iv
else{if(!a[e])throw new TypeError("invalid suite type")
n=8*a[e].key,r=a[e].iv}var i=s(t,!1,n,r)
return c(e,i.key,i.iv)},t.createDecipheriv=t.Decipheriv=c,t.listCiphers=t.getCiphers=function(){return Object.keys(a).concat(i.getCiphers())}},function(e,t,n){var r=n(29),i=n(120),o=n(2),a=n(3).Buffer,s={"des-ede3-cbc":i.CBC.instantiate(i.EDE),"des-ede3":i.EDE,"des-ede-cbc":i.CBC.instantiate(i.EDE),"des-ede":i.EDE,"des-cbc":i.CBC.instantiate(i.DES),"des-ecb":i.DES}
function u(e){r.call(this)
var t,n=e.mode.toLowerCase(),i=s[n]
t=e.decrypt?"decrypt":"encrypt"
var o=e.key
a.isBuffer(o)||(o=a.from(o)),"des-ede"!==n&&"des-ede-cbc"!==n||(o=a.concat([o,o.slice(0,8)]))
var u=e.iv
a.isBuffer(u)||(u=a.from(u)),this._des=i.create({key:o,iv:u,type:t})}s.des=s["des-cbc"],s.des3=s["des-ede3-cbc"],e.exports=u,o(u,r),u.prototype._update=function(e){return a.from(this._des.update(e))},u.prototype._final=function(){return a.from(this._des.final())}},function(e,t,n){"use strict"
t.readUInt32BE=function(e,t){return(e[0+t]<<24|e[1+t]<<16|e[2+t]<<8|e[3+t])>>>0},t.writeUInt32BE=function(e,t,n){e[0+n]=t>>>24,e[1+n]=t>>>16&255,e[2+n]=t>>>8&255,e[3+n]=255&t},t.ip=function(e,t,n,r){for(var i=0,o=0,a=6;a>=0;a-=2){for(var s=0;s<=24;s+=8)i<<=1,i|=t>>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=e>>>s+a&1}for(a=6;a>=0;a-=2){for(s=1;s<=25;s+=8)o<<=1,o|=t>>>s+a&1
for(s=1;s<=25;s+=8)o<<=1,o|=e>>>s+a&1}n[r+0]=i>>>0,n[r+1]=o>>>0},t.rip=function(e,t,n,r){for(var i=0,o=0,a=0;a<4;a++)for(var s=24;s>=0;s-=8)i<<=1,i|=t>>>s+a&1,i<<=1,i|=e>>>s+a&1
for(a=4;a<8;a++)for(s=24;s>=0;s-=8)o<<=1,o|=t>>>s+a&1,o<<=1,o|=e>>>s+a&1
n[r+0]=i>>>0,n[r+1]=o>>>0},t.pc1=function(e,t,n,r){for(var i=0,o=0,a=7;a>=5;a--){for(var s=0;s<=24;s+=8)i<<=1,i|=t>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=e>>s+a&1}for(s=0;s<=24;s+=8)i<<=1,i|=t>>s+a&1
for(a=1;a<=3;a++){for(s=0;s<=24;s+=8)o<<=1,o|=t>>s+a&1
for(s=0;s<=24;s+=8)o<<=1,o|=e>>s+a&1}for(s=0;s<=24;s+=8)o<<=1,o|=e>>s+a&1
n[r+0]=i>>>0,n[r+1]=o>>>0},t.r28shl=function(e,t){return e<<t&268435455|e>>>28-t}
var r=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24]
t.pc2=function(e,t,n,i){for(var o=0,a=0,s=r.length>>>1,u=0;u<s;u++)o<<=1,o|=e>>>r[u]&1
for(u=s;u<r.length;u++)a<<=1,a|=t>>>r[u]&1
n[i+0]=o>>>0,n[i+1]=a>>>0},t.expand=function(e,t,n){var r=0,i=0
r=(1&e)<<5|e>>>27
for(var o=23;o>=15;o-=4)r<<=6,r|=e>>>o&63
for(o=11;o>=3;o-=4)i|=e>>>o&63,i<<=6
i|=(31&e)<<1|e>>>31,t[n+0]=r>>>0,t[n+1]=i>>>0}
var i=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11]
t.substitute=function(e,t){for(var n=0,r=0;r<4;r++){n<<=4,n|=i[64*r+(e>>>18-6*r&63)]}for(r=0;r<4;r++){n<<=4,n|=i[256+64*r+(t>>>18-6*r&63)]}return n>>>0}
var o=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7]
t.permute=function(e){for(var t=0,n=0;n<o.length;n++)t<<=1,t|=e>>>o[n]&1
return t>>>0},t.padSplit=function(e,t,n){for(var r=e.toString(2);r.length<t;)r="0"+r
for(var i=[],o=0;o<t;o+=n)i.push(r.slice(o,o+n))
return i.join(" ")}},function(e,t,n){"use strict"
var r=n(19)
function i(e){this.options=e,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}e.exports=i,i.prototype._init=function(){},i.prototype.update=function(e){return 0===e.length?[]:"decrypt"===this.type?this._updateDecrypt(e):this._updateEncrypt(e)},i.prototype._buffer=function(e,t){for(var n=Math.min(this.buffer.length-this.bufferOff,e.length-t),r=0;r<n;r++)this.buffer[this.bufferOff+r]=e[t+r]
return this.bufferOff+=n,n},i.prototype._flushBuffer=function(e,t){return this._update(this.buffer,0,e,t),this.bufferOff=0,this.blockSize},i.prototype._updateEncrypt=function(e){var t=0,n=0,r=(this.bufferOff+e.length)/this.blockSize|0,i=new Array(r*this.blockSize)
0!==this.bufferOff&&(t+=this._buffer(e,t),this.bufferOff===this.buffer.length&&(n+=this._flushBuffer(i,n)))
for(var o=e.length-(e.length-t)%this.blockSize;t<o;t+=this.blockSize)this._update(e,t,i,n),n+=this.blockSize
for(;t<e.length;t++,this.bufferOff++)this.buffer[this.bufferOff]=e[t]
return i},i.prototype._updateDecrypt=function(e){for(var t=0,n=0,r=Math.ceil((this.bufferOff+e.length)/this.blockSize)-1,i=new Array(r*this.blockSize);r>0;r--)t+=this._buffer(e,t),n+=this._flushBuffer(i,n)
return t+=this._buffer(e,t),i},i.prototype.final=function(e){var t,n
return e&&(t=this.update(e)),n="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),t?t.concat(n):n},i.prototype._pad=function(e,t){if(0===t)return!1
for(;t<e.length;)e[t++]=0
return!0},i.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[]
var e=new Array(this.blockSize)
return this._update(this.buffer,0,e,0),e},i.prototype._unpad=function(e){return e},i.prototype._finalDecrypt=function(){r.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt")
var e=new Array(this.blockSize)
return this._flushBuffer(e,0),this._unpad(e)}},function(e,t,n){"use strict"
var r=n(19),i=n(2),o=n(120),a=o.utils,s=o.Cipher
function u(){this.tmp=new Array(2),this.keys=null}function c(e){s.call(this,e)
var t=new u
this._desState=t,this.deriveKeys(t,e.key)}i(c,s),e.exports=c,c.create=function(e){return new c(e)}
var f=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]
c.prototype.deriveKeys=function(e,t){e.keys=new Array(32),r.equal(t.length,this.blockSize,"Invalid key length")
var n=a.readUInt32BE(t,0),i=a.readUInt32BE(t,4)
a.pc1(n,i,e.tmp,0),n=e.tmp[0],i=e.tmp[1]
for(var o=0;o<e.keys.length;o+=2){var s=f[o>>>1]
n=a.r28shl(n,s),i=a.r28shl(i,s),a.pc2(n,i,e.keys,o)}},c.prototype._update=function(e,t,n,r){var i=this._desState,o=a.readUInt32BE(e,t),s=a.readUInt32BE(e,t+4)
a.ip(o,s,i.tmp,0),o=i.tmp[0],s=i.tmp[1],"encrypt"===this.type?this._encrypt(i,o,s,i.tmp,0):this._decrypt(i,o,s,i.tmp,0),o=i.tmp[0],s=i.tmp[1],a.writeUInt32BE(n,o,r),a.writeUInt32BE(n,s,r+4)},c.prototype._pad=function(e,t){for(var n=e.length-t,r=t;r<e.length;r++)e[r]=n
return!0},c.prototype._unpad=function(e){for(var t=e[e.length-1],n=e.length-t;n<e.length;n++)r.equal(e[n],t)
return e.slice(0,e.length-t)},c.prototype._encrypt=function(e,t,n,r,i){for(var o=t,s=n,u=0;u<e.keys.length;u+=2){var c=e.keys[u],f=e.keys[u+1]
a.expand(s,e.tmp,0),c^=e.tmp[0],f^=e.tmp[1]
var l=a.substitute(c,f),h=s
s=(o^a.permute(l))>>>0,o=h}a.rip(s,o,r,i)},c.prototype._decrypt=function(e,t,n,r,i){for(var o=n,s=t,u=e.keys.length-2;u>=0;u-=2){var c=e.keys[u],f=e.keys[u+1]
a.expand(o,e.tmp,0),c^=e.tmp[0],f^=e.tmp[1]
var l=a.substitute(c,f),h=o
o=(s^a.permute(l))>>>0,s=h}a.rip(o,s,r,i)}},function(e,t,n){"use strict"
var r=n(19),i=n(2),o={}
function a(e){r.equal(e.length,8,"Invalid IV length"),this.iv=new Array(8)
for(var t=0;t<this.iv.length;t++)this.iv[t]=e[t]}t.instantiate=function(e){function t(t){e.call(this,t),this._cbcInit()}i(t,e)
for(var n=Object.keys(o),r=0;r<n.length;r++){var a=n[r]
t.prototype[a]=o[a]}return t.create=function(e){return new t(e)},t},o._cbcInit=function(){var e=new a(this.options.iv)
this._cbcState=e},o._update=function(e,t,n,r){var i=this._cbcState,o=this.constructor.super_.prototype,a=i.iv
if("encrypt"===this.type){for(var s=0;s<this.blockSize;s++)a[s]^=e[t+s]
o._update.call(this,a,0,n,r)
for(s=0;s<this.blockSize;s++)a[s]=n[r+s]}else{o._update.call(this,e,t,n,r)
for(s=0;s<this.blockSize;s++)n[r+s]^=a[s]
for(s=0;s<this.blockSize;s++)a[s]=e[t+s]}}},function(e,t,n){"use strict"
var r=n(19),i=n(2),o=n(120),a=o.Cipher,s=o.DES
function u(e,t){r.equal(t.length,24,"Invalid key length")
var n=t.slice(0,8),i=t.slice(8,16),o=t.slice(16,24)
this.ciphers="encrypt"===e?[s.create({type:"encrypt",key:n}),s.create({type:"decrypt",key:i}),s.create({type:"encrypt",key:o})]:[s.create({type:"decrypt",key:o}),s.create({type:"encrypt",key:i}),s.create({type:"decrypt",key:n})]}function c(e){a.call(this,e)
var t=new u(this.type,this.options.key)
this._edeState=t}i(c,a),e.exports=c,c.create=function(e){return new c(e)},c.prototype._update=function(e,t,n,r){var i=this._edeState
i.ciphers[0]._update(e,t,n,r),i.ciphers[1]._update(n,r,n,r),i.ciphers[2]._update(n,r,n,r)},c.prototype._pad=s.prototype._pad,c.prototype._unpad=s.prototype._unpad},function(e,t,n){var r=n(122),i=n(193),o=n(3).Buffer,a=n(194),s=n(29),u=n(75),c=n(76)
function f(e,t,n){s.call(this),this._cache=new h,this._cipher=new u.AES(t),this._prev=o.from(n),this._mode=e,this._autopadding=!0}n(2)(f,s),f.prototype._update=function(e){var t,n
this._cache.add(e)
for(var r=[];t=this._cache.get();)n=this._mode.encrypt(this,t),r.push(n)
return o.concat(r)}
var l=o.alloc(16,16)
function h(){this.cache=o.allocUnsafe(0)}function d(e,t,n){var s=r[e.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof t&&(t=o.from(t)),t.length!==s.key/8)throw new TypeError("invalid key length "+t.length)
if("string"==typeof n&&(n=o.from(n)),"GCM"!==s.mode&&n.length!==s.iv)throw new TypeError("invalid iv length "+n.length)
return"stream"===s.type?new a(s.module,t,n):"auth"===s.type?new i(s.module,t,n):new f(s.module,t,n)}f.prototype._final=function(){var e=this._cache.flush()
if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e
if(!e.equals(l))throw this._cipher.scrub(),new Error("data not multiple of block length")},f.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},h.prototype.add=function(e){this.cache=o.concat([this.cache,e])},h.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16)
return this.cache=this.cache.slice(16),e}return null},h.prototype.flush=function(){for(var e=16-this.cache.length,t=o.allocUnsafe(e),n=-1;++n<e;)t.writeUInt8(e,n)
return o.concat([this.cache,t])},t.createCipheriv=d,t.createCipher=function(e,t){var n=r[e.toLowerCase()]
if(!n)throw new TypeError("invalid suite type")
var i=c(t,!1,n.key,n.iv)
return d(e,i.key,i.iv)}},function(e,t){t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},function(e,t,n){var r=n(54)
t.encrypt=function(e,t){var n=r(t,e._prev)
return e._prev=e._cipher.encryptBlock(n),e._prev},t.decrypt=function(e,t){var n=e._prev
e._prev=t
var i=e._cipher.decryptBlock(t)
return r(i,n)}},function(e,t,n){var r=n(3).Buffer,i=n(54)
function o(e,t,n){var o=t.length,a=i(t,e._cache)
return e._cache=e._cache.slice(o),e._prev=r.concat([e._prev,n?t:a]),a}t.encrypt=function(e,t,n){for(var i,a=r.allocUnsafe(0);t.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=r.allocUnsafe(0)),!(e._cache.length<=t.length)){a=r.concat([a,o(e,t,n)])
break}i=e._cache.length,a=r.concat([a,o(e,t.slice(0,i),n)]),t=t.slice(i)}return a}},function(e,t,n){var r=n(3).Buffer
function i(e,t,n){var i=e._cipher.encryptBlock(e._prev)[0]^t
return e._prev=r.concat([e._prev.slice(1),r.from([n?t:i])]),i}t.encrypt=function(e,t,n){for(var o=t.length,a=r.allocUnsafe(o),s=-1;++s<o;)a[s]=i(e,t[s],n)
return a}},function(e,t,n){var r=n(3).Buffer
function i(e,t,n){for(var r,i,a=-1,s=0;++a<8;)r=t&1<<7-a?128:0,s+=(128&(i=e._cipher.encryptBlock(e._prev)[0]^r))>>a%8,e._prev=o(e._prev,n?r:i)
return s}function o(e,t){var n=e.length,i=-1,o=r.allocUnsafe(e.length)
for(e=r.concat([e,r.from([t])]);++i<n;)o[i]=e[i]<<1|e[i+1]>>7
return o}t.encrypt=function(e,t,n){for(var o=t.length,a=r.allocUnsafe(o),s=-1;++s<o;)a[s]=i(e,t[s],n)
return a}},function(e,t,n){(function(e){var r=n(54)
function i(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}t.encrypt=function(t,n){for(;t._cache.length<n.length;)t._cache=e.concat([t._cache,i(t)])
var o=t._cache.slice(0,n.length)
return t._cache=t._cache.slice(n.length),r(n,o)}}).call(this,n(1).Buffer)},function(e,t,n){var r=n(3).Buffer,i=r.alloc(16,0)
function o(e){var t=r.allocUnsafe(16)
return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function a(e){this.h=e,this.state=r.alloc(16,0),this.cache=r.allocUnsafe(0)}a.prototype.ghash=function(e){for(var t=-1;++t<e.length;)this.state[t]^=e[t]
this._multiply()},a.prototype._multiply=function(){for(var e,t,n,r=[(e=this.h).readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)],i=[0,0,0,0],a=-1;++a<128;){for(0!=(this.state[~~(a/8)]&1<<7-a%8)&&(i[0]^=r[0],i[1]^=r[1],i[2]^=r[2],i[3]^=r[3]),n=0!=(1&r[3]),t=3;t>0;t--)r[t]=r[t]>>>1|(1&r[t-1])<<31
r[0]=r[0]>>>1,n&&(r[0]=r[0]^225<<24)}this.state=o(i)},a.prototype.update=function(e){var t
for(this.cache=r.concat([this.cache,e]);this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},a.prototype.final=function(e,t){return this.cache.length&&this.ghash(r.concat([this.cache,i],16)),this.ghash(o([0,e,0,t])),this.state},e.exports=a},function(e,t,n){var r=n(193),i=n(3).Buffer,o=n(122),a=n(194),s=n(29),u=n(75),c=n(76)
function f(e,t,n){s.call(this),this._cache=new l,this._last=void 0,this._cipher=new u.AES(t),this._prev=i.from(n),this._mode=e,this._autopadding=!0}function l(){this.cache=i.allocUnsafe(0)}function h(e,t,n){var s=o[e.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof n&&(n=i.from(n)),"GCM"!==s.mode&&n.length!==s.iv)throw new TypeError("invalid iv length "+n.length)
if("string"==typeof t&&(t=i.from(t)),t.length!==s.key/8)throw new TypeError("invalid key length "+t.length)
return"stream"===s.type?new a(s.module,t,n,!0):"auth"===s.type?new r(s.module,t,n,!0):new f(s.module,t,n)}n(2)(f,s),f.prototype._update=function(e){var t,n
this._cache.add(e)
for(var r=[];t=this._cache.get(this._autopadding);)n=this._mode.decrypt(this,t),r.push(n)
return i.concat(r)},f.prototype._final=function(){var e=this._cache.flush()
if(this._autopadding)return function(e){var t=e[15]
if(t<1||t>16)throw new Error("unable to decrypt data")
var n=-1
for(;++n<t;)if(e[n+(16-t)]!==t)throw new Error("unable to decrypt data")
if(16===t)return
return e.slice(0,16-t)}(this._mode.decrypt(this,e))
if(e)throw new Error("data not multiple of block length")},f.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},l.prototype.add=function(e){this.cache=i.concat([this.cache,e])},l.prototype.get=function(e){var t
if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t
return null},l.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=function(e,t){var n=o[e.toLowerCase()]
if(!n)throw new TypeError("invalid suite type")
var r=c(t,!1,n.key,n.iv)
return h(e,r.key,r.iv)},t.createDecipheriv=h},function(e,t){t["des-ecb"]={key:8,iv:0},t["des-cbc"]=t.des={key:8,iv:8},t["des-ede3-cbc"]=t.des3={key:24,iv:8},t["des-ede3"]={key:24,iv:0},t["des-ede-cbc"]={key:16,iv:8},t["des-ede"]={key:16,iv:0}},function(e,t,n){(function(e){var r=n(195),i=n(448),o=n(449)
var a={binary:!0,hex:!0,base64:!0}
t.DiffieHellmanGroup=t.createDiffieHellmanGroup=t.getDiffieHellman=function(t){var n=new e(i[t].prime,"hex"),r=new e(i[t].gen,"hex")
return new o(n,r)},t.createDiffieHellman=t.DiffieHellman=function t(n,i,s,u){return e.isBuffer(i)||void 0===a[i]?t(n,"binary",i,s):(i=i||"binary",u=u||"binary",s=s||new e([2]),e.isBuffer(s)||(s=new e(s,u)),"number"==typeof n?new o(r(n,s),s,!0):(e.isBuffer(n)||(n=new e(n,i)),new o(n,s,!0)))}}).call(this,n(1).Buffer)},function(e,t){},function(e,t){},function(e){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},function(e,t,n){(function(t){var r=n(6),i=new(n(196)),o=new r(24),a=new r(11),s=new r(10),u=new r(3),c=new r(7),f=n(195),l=n(43)
function h(e,n){return n=n||"utf8",t.isBuffer(e)||(e=new t(e,n)),this._pub=new r(e),this}function d(e,n){return n=n||"utf8",t.isBuffer(e)||(e=new t(e,n)),this._priv=new r(e),this}e.exports=v
var p={}
function v(e,t,n){this.setGenerator(t),this.__prime=new r(e),this._prime=r.mont(this.__prime),this._primeLen=e.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,n?(this.setPublicKey=h,this.setPrivateKey=d):this._primeCode=8}function b(e,n){var r=new t(e.toArray())
return n?r.toString(n):r}Object.defineProperty(v.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=function(e,t){var n=t.toString("hex"),r=[n,e.toString(16)].join("_")
if(r in p)return p[r]
var l,h=0
if(e.isEven()||!f.simpleSieve||!f.fermatTest(e)||!i.test(e))return h+=1,h+="02"===n||"05"===n?8:4,p[r]=h,h
switch(i.test(e.shrn(1))||(h+=2),n){case"02":e.mod(o).cmp(a)&&(h+=8)
break
case"05":(l=e.mod(s)).cmp(u)&&l.cmp(c)&&(h+=8)
break
default:h+=4}return p[r]=h,h}(this.__prime,this.__gen)),this._primeCode}}),v.prototype.generateKeys=function(){return this._priv||(this._priv=new r(l(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},v.prototype.computeSecret=function(e){var n=(e=(e=new r(e)).toRed(this._prime)).redPow(this._priv).fromRed(),i=new t(n.toArray()),o=this.getPrime()
if(i.length<o.length){var a=new t(o.length-i.length)
a.fill(0),i=t.concat([a,i])}return i},v.prototype.getPublicKey=function(e){return b(this._pub,e)},v.prototype.getPrivateKey=function(e){return b(this._priv,e)},v.prototype.getPrime=function(e){return b(this.__prime,e)},v.prototype.getGenerator=function(e){return b(this._gen,e)},v.prototype.setGenerator=function(e,n){return n=n||"utf8",t.isBuffer(e)||(e=new t(e,n)),this.__gen=e,this._gen=new r(e),this}}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var r=n(53),i=n(118),o=n(2),a=n(451),s=n(487),u=n(185)
function c(e){i.Writable.call(this)
var t=u[e]
if(!t)throw new Error("Unknown message digest")
this._hashType=t.hash,this._hash=r(t.hash),this._tag=t.id,this._signType=t.sign}function f(e){i.Writable.call(this)
var t=u[e]
if(!t)throw new Error("Unknown message digest")
this._hash=r(t.hash),this._tag=t.id,this._signType=t.sign}function l(e){return new c(e)}function h(e){return new f(e)}Object.keys(u).forEach(function(e){u[e].id=new t(u[e].id,"hex"),u[e.toLowerCase()]=u[e]}),o(c,i.Writable),c.prototype._write=function(e,t,n){this._hash.update(e),n()},c.prototype.update=function(e,n){return"string"==typeof e&&(e=new t(e,n)),this._hash.update(e),this},c.prototype.sign=function(e,t){this.end()
var n=this._hash.digest(),r=a(n,e,this._hashType,this._signType,this._tag)
return t?r.toString(t):r},o(f,i.Writable),f.prototype._write=function(e,t,n){this._hash.update(e),n()},f.prototype.update=function(e,n){return"string"==typeof e&&(e=new t(e,n)),this._hash.update(e),this},f.prototype.verify=function(e,n,r){"string"==typeof n&&(n=new t(n,r)),this.end()
var i=this._hash.digest()
return s(n,i,e,this._signType,this._tag)},e.exports={Sign:l,Verify:h,createSign:l,createVerify:h}}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var r=n(183),i=n(123),o=n(12).ec,a=n(6),s=n(78),u=n(206)
function c(e,n,i,o){if((e=new t(e.toArray())).length<n.byteLength()){var a=new t(n.byteLength()-e.length)
a.fill(0),e=t.concat([a,e])}var s=i.length,u=function(e,n){e=(e=f(e,n)).mod(n)
var r=new t(e.toArray())
if(r.length<n.byteLength()){var i=new t(n.byteLength()-r.length)
i.fill(0),r=t.concat([i,r])}return r}(i,n),c=new t(s)
c.fill(1)
var l=new t(s)
return l.fill(0),l=r(o,l).update(c).update(new t([0])).update(e).update(u).digest(),c=r(o,l).update(c).digest(),{k:l=r(o,l).update(c).update(new t([1])).update(e).update(u).digest(),v:c=r(o,l).update(c).digest()}}function f(e,t){var n=new a(e),r=(e.length<<3)-t.bitLength()
return r>0&&n.ishrn(r),n}function l(e,n,i){var o,a
do{for(o=new t(0);8*o.length<e.bitLength();)n.v=r(i,n.k).update(n.v).digest(),o=t.concat([o,n.v])
a=f(o,e),n.k=r(i,n.k).update(n.v).update(new t([0])).digest(),n.v=r(i,n.k).update(n.v).digest()}while(-1!==a.cmp(e))
return a}function h(e,t,n,r){return e.toRed(a.mont(n)).redPow(t).fromRed().mod(r)}e.exports=function(e,n,r,d,p){var v=s(n)
if(v.curve){if("ecdsa"!==d&&"ecdsa/rsa"!==d)throw new Error("wrong private key type")
return function(e,n){var r=u[n.curve.join(".")]
if(!r)throw new Error("unknown curve "+n.curve.join("."))
var i=new o(r).keyFromPrivate(n.privateKey).sign(e)
return new t(i.toDER())}(e,v)}if("dsa"===v.type){if("dsa"!==d)throw new Error("wrong private key type")
return function(e,n,r){for(var i,o=n.params.priv_key,s=n.params.p,u=n.params.q,d=n.params.g,p=new a(0),v=f(e,u).mod(u),b=!1,g=c(o,u,e,r);!1===b;)i=l(u,g,r),p=h(d,i,s,u),0===(b=i.invm(u).imul(v.add(o.mul(p))).mod(u)).cmpn(0)&&(b=!1,p=new a(0))
return function(e,n){e=e.toArray(),n=n.toArray(),128&e[0]&&(e=[0].concat(e)),128&n[0]&&(n=[0].concat(n))
var r=[48,e.length+n.length+4,2,e.length]
return r=r.concat(e,[2,n.length],n),new t(r)}(p,b)}(e,v,r)}if("rsa"!==d&&"ecdsa/rsa"!==d)throw new Error("wrong private key type")
e=t.concat([p,e])
for(var b=v.modulus.byteLength(),g=[0,1];e.length+g.length+1<b;)g.push(255)
g.push(0)
for(var m=-1;++m<e.length;)g.push(e[m])
return i(g,v)},e.exports.getKey=c,e.exports.makeKey=l}).call(this,n(1).Buffer)},function(e){e.exports={_args:[["elliptic@6.4.1","/home/steve/Documents/GitHub/stellarkit-js-utils"]],_development:!0,_from:"elliptic@6.4.1",_id:"elliptic@6.4.1",_inBundle:!1,_integrity:"sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==",_location:"/elliptic",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"elliptic@6.4.1",name:"elliptic",escapedName:"elliptic",rawSpec:"6.4.1",saveSpec:null,fetchSpec:"6.4.1"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz",_spec:"6.4.1",_where:"/home/steve/Documents/GitHub/stellarkit-js-utils",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.1"}},function(e,t,n){"use strict"
var r=t,i=n(6),o=n(19),a=n(198)
r.assert=o,r.toArray=a.toArray,r.zero2=a.zero2,r.toHex=a.toHex,r.encode=a.encode,r.getNAF=function(e,t){for(var n=[],r=1<<t+1,i=e.clone();i.cmpn(1)>=0;){var o
if(i.isOdd()){var a=i.andln(r-1)
o=a>(r>>1)-1?(r>>1)-a:a,i.isubn(o)}else o=0
n.push(o)
for(var s=0!==i.cmpn(0)&&0===i.andln(r-1)?t+1:1,u=1;u<s;u++)n.push(0)
i.iushrn(s)}return n},r.getJSF=function(e,t){var n=[[],[]]
e=e.clone(),t=t.clone()
for(var r=0,i=0;e.cmpn(-r)>0||t.cmpn(-i)>0;){var o,a,s,u=e.andln(3)+r&3,c=t.andln(3)+i&3
3===u&&(u=-1),3===c&&(c=-1),o=0==(1&u)?0:3!=(s=e.andln(7)+r&7)&&5!==s||2!==c?u:-u,n[0].push(o),a=0==(1&c)?0:3!=(s=t.andln(7)+i&7)&&5!==s||2!==u?c:-c,n[1].push(a),2*r===o+1&&(r=1-r),2*i===a+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return n},r.cachedProperty=function(e,t,n){var r="_"+t
e.prototype[t]=function(){return void 0!==this[r]?this[r]:this[r]=n.call(this)}},r.parseBytes=function(e){return"string"==typeof e?r.toArray(e,"hex"):e},r.intFromLE=function(e){return new i(e,"hex","le")}},function(e,t,n){"use strict"
var r=n(6),i=n(12).utils,o=i.getNAF,a=i.getJSF,s=i.assert
function u(e,t){this.type=e,this.p=new r(t.p,16),this.red=t.prime?r.red(t.prime):r.mont(this.p),this.zero=new r(0).toRed(this.red),this.one=new r(1).toRed(this.red),this.two=new r(2).toRed(this.red),this.n=t.n&&new r(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4)
var n=this.n&&this.p.div(this.n)
!n||n.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function c(e,t){this.curve=e,this.type=t,this.precomputed=null}e.exports=u,u.prototype.point=function(){throw new Error("Not implemented")},u.prototype.validate=function(){throw new Error("Not implemented")},u.prototype._fixedNafMul=function(e,t){s(e.precomputed)
var n=e._getDoubles(),r=o(t,1),i=(1<<n.step+1)-(n.step%2==0?2:1)
i/=3
for(var a=[],u=0;u<r.length;u+=n.step){var c=0
for(t=u+n.step-1;t>=u;t--)c=(c<<1)+r[t]
a.push(c)}for(var f=this.jpoint(null,null,null),l=this.jpoint(null,null,null),h=i;h>0;h--){for(u=0;u<a.length;u++){(c=a[u])===h?l=l.mixedAdd(n.points[u]):c===-h&&(l=l.mixedAdd(n.points[u].neg()))}f=f.add(l)}return f.toP()},u.prototype._wnafMul=function(e,t){var n=4,r=e._getNAFPoints(n)
n=r.wnd
for(var i=r.points,a=o(t,n),u=this.jpoint(null,null,null),c=a.length-1;c>=0;c--){for(t=0;c>=0&&0===a[c];c--)t++
if(c>=0&&t++,u=u.dblp(t),c<0)break
var f=a[c]
s(0!==f),u="affine"===e.type?f>0?u.mixedAdd(i[f-1>>1]):u.mixedAdd(i[-f-1>>1].neg()):f>0?u.add(i[f-1>>1]):u.add(i[-f-1>>1].neg())}return"affine"===e.type?u.toP():u},u.prototype._wnafMulAdd=function(e,t,n,r,i){for(var s=this._wnafT1,u=this._wnafT2,c=this._wnafT3,f=0,l=0;l<r;l++){var h=(E=t[l])._getNAFPoints(e)
s[l]=h.wnd,u[l]=h.points}for(l=r-1;l>=1;l-=2){var d=l-1,p=l
if(1===s[d]&&1===s[p]){var v=[t[d],null,null,t[p]]
0===t[d].y.cmp(t[p].y)?(v[1]=t[d].add(t[p]),v[2]=t[d].toJ().mixedAdd(t[p].neg())):0===t[d].y.cmp(t[p].y.redNeg())?(v[1]=t[d].toJ().mixedAdd(t[p]),v[2]=t[d].add(t[p].neg())):(v[1]=t[d].toJ().mixedAdd(t[p]),v[2]=t[d].toJ().mixedAdd(t[p].neg()))
var b=[-3,-1,-5,-7,0,7,5,1,3],g=a(n[d],n[p])
f=Math.max(g[0].length,f),c[d]=new Array(f),c[p]=new Array(f)
for(var m=0;m<f;m++){var y=0|g[0][m],_=0|g[1][m]
c[d][m]=b[3*(y+1)+(_+1)],c[p][m]=0,u[d]=v}}else c[d]=o(n[d],s[d]),c[p]=o(n[p],s[p]),f=Math.max(c[d].length,f),f=Math.max(c[p].length,f)}var w=this.jpoint(null,null,null),x=this._wnafT4
for(l=f;l>=0;l--){for(var k=0;l>=0;){var S=!0
for(m=0;m<r;m++)x[m]=0|c[m][l],0!==x[m]&&(S=!1)
if(!S)break
k++,l--}if(l>=0&&k++,w=w.dblp(k),l<0)break
for(m=0;m<r;m++){var E,A=x[m]
0!==A&&(A>0?E=u[m][A-1>>1]:A<0&&(E=u[m][-A-1>>1].neg()),w="affine"===E.type?w.mixedAdd(E):w.add(E))}}for(l=0;l<r;l++)u[l]=null
return i?w:w.toP()},u.BasePoint=c,c.prototype.eq=function(){throw new Error("Not implemented")},c.prototype.validate=function(){return this.curve.validate(this)},u.prototype.decodePoint=function(e,t){e=i.toArray(e,t)
var n=this.p.byteLength()
if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*n)return 6===e[0]?s(e[e.length-1]%2==0):7===e[0]&&s(e[e.length-1]%2==1),this.point(e.slice(1,1+n),e.slice(1+n,1+2*n))
if((2===e[0]||3===e[0])&&e.length-1===n)return this.pointFromX(e.slice(1,1+n),3===e[0])
throw new Error("Unknown point format")},c.prototype.encodeCompressed=function(e){return this.encode(e,!0)},c.prototype._encode=function(e){var t=this.curve.p.byteLength(),n=this.getX().toArray("be",t)
return e?[this.getY().isEven()?2:3].concat(n):[4].concat(n,this.getY().toArray("be",t))},c.prototype.encode=function(e,t){return i.encode(this._encode(t),e)},c.prototype.precompute=function(e){if(this.precomputed)return this
var t={doubles:null,naf:null,beta:null}
return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},c.prototype._hasDoubles=function(e){if(!this.precomputed)return!1
var t=this.precomputed.doubles
return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},c.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles
for(var n=[this],r=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)r=r.dbl()
n.push(r)}return{step:e,points:n}},c.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf
for(var t=[this],n=(1<<e)-1,r=1===n?null:this.dbl(),i=1;i<n;i++)t[i]=t[i-1].add(r)
return{wnd:e,points:t}},c.prototype._getBeta=function(){return null},c.prototype.dblp=function(e){for(var t=this,n=0;n<e;n++)t=t.dbl()
return t}},function(e,t,n){"use strict"
var r=n(77),i=n(12),o=n(6),a=n(2),s=r.base,u=i.utils.assert
function c(e){s.call(this,"short",e),this.a=new o(e.a,16).toRed(this.red),this.b=new o(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function f(e,t,n,r){s.BasePoint.call(this,e,"affine"),null===t&&null===n?(this.x=null,this.y=null,this.inf=!0):(this.x=new o(t,16),this.y=new o(n,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function l(e,t,n,r){s.BasePoint.call(this,e,"jacobian"),null===t&&null===n&&null===r?(this.x=this.curve.one,this.y=this.curve.one,this.z=new o(0)):(this.x=new o(t,16),this.y=new o(n,16),this.z=new o(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}a(c,s),e.exports=c,c.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,n
if(e.beta)t=new o(e.beta,16).toRed(this.red)
else{var r=this._getEndoRoots(this.p)
t=(t=r[0].cmp(r[1])<0?r[0]:r[1]).toRed(this.red)}if(e.lambda)n=new o(e.lambda,16)
else{var i=this._getEndoRoots(this.n)
0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?n=i[0]:(n=i[1],u(0===this.g.mul(n).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:n,basis:e.basis?e.basis.map(function(e){return{a:new o(e.a,16),b:new o(e.b,16)}}):this._getEndoBasis(n)}}},c.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:o.mont(e),n=new o(2).toRed(t).redInvm(),r=n.redNeg(),i=new o(3).toRed(t).redNeg().redSqrt().redMul(n)
return[r.redAdd(i).fromRed(),r.redSub(i).fromRed()]},c.prototype._getEndoBasis=function(e){for(var t,n,r,i,a,s,u,c,f,l=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,d=this.n.clone(),p=new o(1),v=new o(0),b=new o(0),g=new o(1),m=0;0!==h.cmpn(0);){var y=d.div(h)
c=d.sub(y.mul(h)),f=b.sub(y.mul(p))
var _=g.sub(y.mul(v))
if(!r&&c.cmp(l)<0)t=u.neg(),n=p,r=c.neg(),i=f
else if(r&&2==++m)break
u=c,d=h,h=c,b=p,p=f,g=v,v=_}a=c.neg(),s=f
var w=r.sqr().add(i.sqr())
return a.sqr().add(s.sqr()).cmp(w)>=0&&(a=t,s=n),r.negative&&(r=r.neg(),i=i.neg()),a.negative&&(a=a.neg(),s=s.neg()),[{a:r,b:i},{a:a,b:s}]},c.prototype._endoSplit=function(e){var t=this.endo.basis,n=t[0],r=t[1],i=r.b.mul(e).divRound(this.n),o=n.b.neg().mul(e).divRound(this.n),a=i.mul(n.a),s=o.mul(r.a),u=i.mul(n.b),c=o.mul(r.b)
return{k1:e.sub(a).sub(s),k2:u.add(c).neg()}},c.prototype.pointFromX=function(e,t){(e=new o(e,16)).red||(e=e.toRed(this.red))
var n=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),r=n.redSqrt()
if(0!==r.redSqr().redSub(n).cmp(this.zero))throw new Error("invalid point")
var i=r.fromRed().isOdd()
return(t&&!i||!t&&i)&&(r=r.redNeg()),this.point(e,r)},c.prototype.validate=function(e){if(e.inf)return!0
var t=e.x,n=e.y,r=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b)
return 0===n.redSqr().redISub(i).cmpn(0)},c.prototype._endoWnafMulAdd=function(e,t,n){for(var r=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var a=this._endoSplit(t[o]),s=e[o],u=s._getBeta()
a.k1.negative&&(a.k1.ineg(),s=s.neg(!0)),a.k2.negative&&(a.k2.ineg(),u=u.neg(!0)),r[2*o]=s,r[2*o+1]=u,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var c=this._wnafMulAdd(1,r,i,2*o,n),f=0;f<2*o;f++)r[f]=null,i[f]=null
return c},a(f,s.BasePoint),c.prototype.point=function(e,t,n){return new f(this,e,t,n)},c.prototype.pointFromJSON=function(e,t){return f.fromJSON(this,e,t)},f.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed
if(e&&e.beta)return e.beta
var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y)
if(e){var n=this.curve,r=function(e){return n.point(e.x.redMul(n.endo.beta),e.y)}
e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(r)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(r)}}}return t}},f.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},f.fromJSON=function(e,t,n){"string"==typeof t&&(t=JSON.parse(t))
var r=e.point(t[0],t[1],n)
if(!t[2])return r
function i(t){return e.point(t[0],t[1],n)}var o=t[2]
return r.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[r].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[r].concat(o.naf.points.map(i))}},r},f.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},f.prototype.isInfinity=function(){return this.inf},f.prototype.add=function(e){if(this.inf)return e
if(e.inf)return this
if(this.eq(e))return this.dbl()
if(this.neg().eq(e))return this.curve.point(null,null)
if(0===this.x.cmp(e.x))return this.curve.point(null,null)
var t=this.y.redSub(e.y)
0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()))
var n=t.redSqr().redISub(this.x).redISub(e.x),r=t.redMul(this.x.redSub(n)).redISub(this.y)
return this.curve.point(n,r)},f.prototype.dbl=function(){if(this.inf)return this
var e=this.y.redAdd(this.y)
if(0===e.cmpn(0))return this.curve.point(null,null)
var t=this.curve.a,n=this.x.redSqr(),r=e.redInvm(),i=n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y)
return this.curve.point(o,a)},f.prototype.getX=function(){return this.x.fromRed()},f.prototype.getY=function(){return this.y.fromRed()},f.prototype.mul=function(e){return e=new o(e,16),this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},f.prototype.mulAdd=function(e,t,n){var r=[this,t],i=[e,n]
return this.curve.endo?this.curve._endoWnafMulAdd(r,i):this.curve._wnafMulAdd(1,r,i,2)},f.prototype.jmulAdd=function(e,t,n){var r=[this,t],i=[e,n]
return this.curve.endo?this.curve._endoWnafMulAdd(r,i,!0):this.curve._wnafMulAdd(1,r,i,2,!0)},f.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},f.prototype.neg=function(e){if(this.inf)return this
var t=this.curve.point(this.x,this.y.redNeg())
if(e&&this.precomputed){var n=this.precomputed,r=function(e){return e.neg()}
t.precomputed={naf:n.naf&&{wnd:n.naf.wnd,points:n.naf.points.map(r)},doubles:n.doubles&&{step:n.doubles.step,points:n.doubles.points.map(r)}}}return t},f.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},a(l,s.BasePoint),c.prototype.jpoint=function(e,t,n){return new l(this,e,t,n)},l.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null)
var e=this.z.redInvm(),t=e.redSqr(),n=this.x.redMul(t),r=this.y.redMul(t).redMul(e)
return this.curve.point(n,r)},l.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},l.prototype.add=function(e){if(this.isInfinity())return e
if(e.isInfinity())return this
var t=e.z.redSqr(),n=this.z.redSqr(),r=this.x.redMul(t),i=e.x.redMul(n),o=this.y.redMul(t.redMul(e.z)),a=e.y.redMul(n.redMul(this.z)),s=r.redSub(i),u=o.redSub(a)
if(0===s.cmpn(0))return 0!==u.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var c=s.redSqr(),f=c.redMul(s),l=r.redMul(c),h=u.redSqr().redIAdd(f).redISub(l).redISub(l),d=u.redMul(l.redISub(h)).redISub(o.redMul(f)),p=this.z.redMul(e.z).redMul(s)
return this.curve.jpoint(h,d,p)},l.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ()
if(e.isInfinity())return this
var t=this.z.redSqr(),n=this.x,r=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),a=n.redSub(r),s=i.redSub(o)
if(0===a.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var u=a.redSqr(),c=u.redMul(a),f=n.redMul(u),l=s.redSqr().redIAdd(c).redISub(f).redISub(f),h=s.redMul(f.redISub(l)).redISub(i.redMul(c)),d=this.z.redMul(a)
return this.curve.jpoint(l,h,d)},l.prototype.dblp=function(e){if(0===e)return this
if(this.isInfinity())return this
if(!e)return this.dbl()
if(this.curve.zeroA||this.curve.threeA){for(var t=this,n=0;n<e;n++)t=t.dbl()
return t}var r=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,s=this.z,u=s.redSqr().redSqr(),c=a.redAdd(a)
for(n=0;n<e;n++){var f=o.redSqr(),l=c.redSqr(),h=l.redSqr(),d=f.redAdd(f).redIAdd(f).redIAdd(r.redMul(u)),p=o.redMul(l),v=d.redSqr().redISub(p.redAdd(p)),b=p.redISub(v),g=d.redMul(b)
g=g.redIAdd(g).redISub(h)
var m=c.redMul(s)
n+1<e&&(u=u.redMul(h)),o=v,s=m,c=g}return this.curve.jpoint(o,c.redMul(i),s)},l.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},l.prototype._zeroDbl=function(){var e,t,n
if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(r).redISub(o)
a=a.redIAdd(a)
var s=r.redAdd(r).redIAdd(r),u=s.redSqr().redISub(a).redISub(a),c=o.redIAdd(o)
c=(c=c.redIAdd(c)).redIAdd(c),e=u,t=s.redMul(a.redISub(u)).redISub(c),n=this.y.redAdd(this.y)}else{var f=this.x.redSqr(),l=this.y.redSqr(),h=l.redSqr(),d=this.x.redAdd(l).redSqr().redISub(f).redISub(h)
d=d.redIAdd(d)
var p=f.redAdd(f).redIAdd(f),v=p.redSqr(),b=h.redIAdd(h)
b=(b=b.redIAdd(b)).redIAdd(b),e=v.redISub(d).redISub(d),t=p.redMul(d.redISub(e)).redISub(b),n=(n=this.y.redMul(this.z)).redIAdd(n)}return this.curve.jpoint(e,t,n)},l.prototype._threeDbl=function(){var e,t,n
if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(r).redISub(o)
a=a.redIAdd(a)
var s=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),u=s.redSqr().redISub(a).redISub(a)
e=u
var c=o.redIAdd(o)
c=(c=c.redIAdd(c)).redIAdd(c),t=s.redMul(a.redISub(u)).redISub(c),n=this.y.redAdd(this.y)}else{var f=this.z.redSqr(),l=this.y.redSqr(),h=this.x.redMul(l),d=this.x.redSub(f).redMul(this.x.redAdd(f))
d=d.redAdd(d).redIAdd(d)
var p=h.redIAdd(h),v=(p=p.redIAdd(p)).redAdd(p)
e=d.redSqr().redISub(v),n=this.y.redAdd(this.z).redSqr().redISub(l).redISub(f)
var b=l.redSqr()
b=(b=(b=b.redIAdd(b)).redIAdd(b)).redIAdd(b),t=d.redMul(p.redISub(e)).redISub(b)}return this.curve.jpoint(e,t,n)},l.prototype._dbl=function(){var e=this.curve.a,t=this.x,n=this.y,r=this.z,i=r.redSqr().redSqr(),o=t.redSqr(),a=n.redSqr(),s=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),u=t.redAdd(t),c=(u=u.redIAdd(u)).redMul(a),f=s.redSqr().redISub(c.redAdd(c)),l=c.redISub(f),h=a.redSqr()
h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h)
var d=s.redMul(l).redISub(h),p=n.redAdd(n).redMul(r)
return this.curve.jpoint(f,d,p)},l.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this)
var e=this.x.redSqr(),t=this.y.redSqr(),n=this.z.redSqr(),r=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),a=this.x.redAdd(t).redSqr().redISub(e).redISub(r),s=(a=(a=(a=a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),u=r.redIAdd(r)
u=(u=(u=u.redIAdd(u)).redIAdd(u)).redIAdd(u)
var c=i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),f=t.redMul(c)
f=(f=f.redIAdd(f)).redIAdd(f)
var l=this.x.redMul(s).redISub(f)
l=(l=l.redIAdd(l)).redIAdd(l)
var h=this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)))
h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h)
var d=this.z.redAdd(a).redSqr().redISub(n).redISub(s)
return this.curve.jpoint(l,h,d)},l.prototype.mul=function(e,t){return e=new o(e,t),this.curve._wnafMul(this,e)},l.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ())
if(this===e)return!0
var t=this.z.redSqr(),n=e.z.redSqr()
if(0!==this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0))return!1
var r=t.redMul(this.z),i=n.redMul(e.z)
return 0===this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)},l.prototype.eqXToP=function(e){var t=this.z.redSqr(),n=e.toRed(this.curve.red).redMul(t)
if(0===this.x.cmp(n))return!0
for(var r=e.clone(),i=this.curve.redN.redMul(t);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1
if(n.redIAdd(i),0===this.x.cmp(n))return!0}},l.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},l.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(e,t,n){"use strict"
var r=n(77),i=n(6),o=n(2),a=r.base,s=n(12).utils
function u(e){a.call(this,"mont",e),this.a=new i(e.a,16).toRed(this.red),this.b=new i(e.b,16).toRed(this.red),this.i4=new i(4).toRed(this.red).redInvm(),this.two=new i(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function c(e,t,n){a.BasePoint.call(this,e,"projective"),null===t&&null===n?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new i(t,16),this.z=new i(n,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}o(u,a),e.exports=u,u.prototype.validate=function(e){var t=e.normalize().x,n=t.redSqr(),r=n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t)
return 0===r.redSqrt().redSqr().cmp(r)},o(c,a.BasePoint),u.prototype.decodePoint=function(e,t){return this.point(s.toArray(e,t),1)},u.prototype.point=function(e,t){return new c(this,e,t)},u.prototype.pointFromJSON=function(e){return c.fromJSON(this,e)},c.prototype.precompute=function(){},c.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},c.fromJSON=function(e,t){return new c(e,t[0],t[1]||e.one)},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},c.prototype.dbl=function(){var e=this.x.redAdd(this.z).redSqr(),t=this.x.redSub(this.z).redSqr(),n=e.redSub(t),r=e.redMul(t),i=n.redMul(t.redAdd(this.curve.a24.redMul(n)))
return this.curve.point(r,i)},c.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.diffAdd=function(e,t){var n=this.x.redAdd(this.z),r=this.x.redSub(this.z),i=e.x.redAdd(e.z),o=e.x.redSub(e.z).redMul(n),a=i.redMul(r),s=t.z.redMul(o.redAdd(a).redSqr()),u=t.x.redMul(o.redISub(a).redSqr())
return this.curve.point(s,u)},c.prototype.mul=function(e){for(var t=e.clone(),n=this,r=this.curve.point(null,null),i=[];0!==t.cmpn(0);t.iushrn(1))i.push(t.andln(1))
for(var o=i.length-1;o>=0;o--)0===i[o]?(n=n.diffAdd(r,this),r=r.dbl()):(r=n.diffAdd(r,this),n=n.dbl())
return r},c.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},c.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},c.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(e,t,n){"use strict"
var r=n(77),i=n(12),o=n(6),a=n(2),s=r.base,u=i.utils.assert
function c(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,s.call(this,"edwards",e),this.a=new o(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new o(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new o(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),u(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function f(e,t,n,r,i){s.BasePoint.call(this,e,"projective"),null===t&&null===n&&null===r?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new o(t,16),this.y=new o(n,16),this.z=r?new o(r,16):this.curve.one,this.t=i&&new o(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}a(c,s),e.exports=c,c.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},c.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},c.prototype.jpoint=function(e,t,n,r){return this.point(e,t,n,r)},c.prototype.pointFromX=function(e,t){(e=new o(e,16)).red||(e=e.toRed(this.red))
var n=e.redSqr(),r=this.c2.redSub(this.a.redMul(n)),i=this.one.redSub(this.c2.redMul(this.d).redMul(n)),a=r.redMul(i.redInvm()),s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
var u=s.fromRed().isOdd()
return(t&&!u||!t&&u)&&(s=s.redNeg()),this.point(e,s)},c.prototype.pointFromY=function(e,t){(e=new o(e,16)).red||(e=e.toRed(this.red))
var n=e.redSqr(),r=n.redSub(this.c2),i=n.redMul(this.d).redMul(this.c2).redSub(this.a),a=r.redMul(i.redInvm())
if(0===a.cmp(this.zero)){if(t)throw new Error("invalid point")
return this.point(this.zero,e)}var s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
return s.fromRed().isOdd()!==t&&(s=s.redNeg()),this.point(s,e)},c.prototype.validate=function(e){if(e.isInfinity())return!0
e.normalize()
var t=e.x.redSqr(),n=e.y.redSqr(),r=t.redMul(this.a).redAdd(n),i=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)))
return 0===r.cmp(i)},a(f,s.BasePoint),c.prototype.pointFromJSON=function(e){return f.fromJSON(this,e)},c.prototype.point=function(e,t,n,r){return new f(this,e,t,n,r)},f.fromJSON=function(e,t){return new f(e,t[0],t[1],t[2])},f.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},f.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},f.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),n=this.z.redSqr()
n=n.redIAdd(n)
var r=this.curve._mulA(e),i=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),o=r.redAdd(t),a=o.redSub(n),s=r.redSub(t),u=i.redMul(a),c=o.redMul(s),f=i.redMul(s),l=a.redMul(o)
return this.curve.point(u,c,l,f)},f.prototype._projDbl=function(){var e,t,n,r=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),o=this.y.redSqr()
if(this.curve.twisted){var a=(c=this.curve._mulA(i)).redAdd(o)
if(this.zOne)e=r.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)),t=a.redMul(c.redSub(o)),n=a.redSqr().redSub(a).redSub(a)
else{var s=this.z.redSqr(),u=a.redSub(s).redISub(s)
e=r.redSub(i).redISub(o).redMul(u),t=a.redMul(c.redSub(o)),n=a.redMul(u)}}else{var c=i.redAdd(o)
s=this.curve._mulC(this.z).redSqr(),u=c.redSub(s).redSub(s)
e=this.curve._mulC(r.redISub(c)).redMul(u),t=this.curve._mulC(c).redMul(i.redISub(o)),n=c.redMul(u)}return this.curve.point(e,t,n)},f.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},f.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),n=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),r=this.t.redMul(this.curve.dd).redMul(e.t),i=this.z.redMul(e.z.redAdd(e.z)),o=n.redSub(t),a=i.redSub(r),s=i.redAdd(r),u=n.redAdd(t),c=o.redMul(a),f=s.redMul(u),l=o.redMul(u),h=a.redMul(s)
return this.curve.point(c,f,h,l)},f.prototype._projAdd=function(e){var t,n,r=this.z.redMul(e.z),i=r.redSqr(),o=this.x.redMul(e.x),a=this.y.redMul(e.y),s=this.curve.d.redMul(o).redMul(a),u=i.redSub(s),c=i.redAdd(s),f=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),l=r.redMul(u).redMul(f)
return this.curve.twisted?(t=r.redMul(c).redMul(a.redSub(this.curve._mulA(o))),n=u.redMul(c)):(t=r.redMul(c).redMul(a.redSub(o)),n=this.curve._mulC(u).redMul(c)),this.curve.point(l,t,n)},f.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},f.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},f.prototype.mulAdd=function(e,t,n){return this.curve._wnafMulAdd(1,[this,t],[e,n],2,!1)},f.prototype.jmulAdd=function(e,t,n){return this.curve._wnafMulAdd(1,[this,t],[e,n],2,!0)},f.prototype.normalize=function(){if(this.zOne)return this
var e=this.z.redInvm()
return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},f.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},f.prototype.getX=function(){return this.normalize(),this.x.fromRed()},f.prototype.getY=function(){return this.normalize(),this.y.fromRed()},f.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},f.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z)
if(0===this.x.cmp(t))return!0
for(var n=e.clone(),r=this.curve.redN.redMul(this.z);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1
if(t.redIAdd(r),0===this.x.cmp(t))return!0}},f.prototype.toP=f.prototype.normalize,f.prototype.mixedAdd=f.prototype.add},function(e,t,n){"use strict"
var r,i=t,o=n(124),a=n(12),s=a.utils.assert
function u(e){"short"===e.type?this.curve=new a.curve.short(e):"edwards"===e.type?this.curve=new a.curve.edwards(e):this.curve=new a.curve.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function c(e,t){Object.defineProperty(i,e,{configurable:!0,enumerable:!0,get:function(){var n=new u(t)
return Object.defineProperty(i,e,{configurable:!0,enumerable:!0,value:n}),n}})}i.PresetCurve=u,c("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),c("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),c("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),c("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),c("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),c("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),c("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]})
try{r=n(465)}catch(e){r=void 0}c("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})},function(e,t,n){"use strict"
t.sha1=n(460),t.sha224=n(461),t.sha256=n(200),t.sha384=n(462),t.sha512=n(201)},function(e,t,n){"use strict"
var r=n(24),i=n(55),o=n(199),a=r.rotl32,s=r.sum32,u=r.sum32_5,c=o.ft_1,f=i.BlockHash,l=[1518500249,1859775393,2400959708,3395469782]
function h(){if(!(this instanceof h))return new h
f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}r.inherits(h,f),e.exports=h,h.blockSize=512,h.outSize=160,h.hmacStrength=80,h.padLength=64,h.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r]
for(;r<n.length;r++)n[r]=a(n[r-3]^n[r-8]^n[r-14]^n[r-16],1)
var i=this.h[0],o=this.h[1],f=this.h[2],h=this.h[3],d=this.h[4]
for(r=0;r<n.length;r++){var p=~~(r/20),v=u(a(i,5),c(p,o,f,h),d,n[r],l[p])
d=h,h=f,f=a(o,30),o=i,i=v}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],f),this.h[3]=s(this.h[3],h),this.h[4]=s(this.h[4],d)},h.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(e,t,n){"use strict"
var r=n(24),i=n(200)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}r.inherits(o,i),e.exports=o,o.blockSize=512,o.outSize=224,o.hmacStrength=192,o.padLength=64,o.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h.slice(0,7),"big"):r.split32(this.h.slice(0,7),"big")}},function(e,t,n){"use strict"
var r=n(24),i=n(201)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}r.inherits(o,i),e.exports=o,o.blockSize=1024,o.outSize=384,o.hmacStrength=192,o.padLength=128,o.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h.slice(0,12),"big"):r.split32(this.h.slice(0,12),"big")}},function(e,t,n){"use strict"
var r=n(24),i=n(55),o=r.rotl32,a=r.sum32,s=r.sum32_3,u=r.sum32_4,c=i.BlockHash
function f(){if(!(this instanceof f))return new f
c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function l(e,t,n,r){return e<=15?t^n^r:e<=31?t&n|~t&r:e<=47?(t|~n)^r:e<=63?t&r|n&~r:t^(n|~r)}function h(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function d(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}r.inherits(f,c),t.ripemd160=f,f.blockSize=512,f.outSize=160,f.hmacStrength=192,f.padLength=64,f.prototype._update=function(e,t){for(var n=this.h[0],r=this.h[1],i=this.h[2],c=this.h[3],f=this.h[4],m=n,y=r,_=i,w=c,x=f,k=0;k<80;k++){var S=a(o(u(n,l(k,r,i,c),e[p[k]+t],h(k)),b[k]),f)
n=f,f=c,c=o(i,10),i=r,r=S,S=a(o(u(m,l(79-k,y,_,w),e[v[k]+t],d(k)),g[k]),x),m=x,x=w,w=o(_,10),_=y,y=S}S=s(this.h[1],i,w),this.h[1]=s(this.h[2],c,x),this.h[2]=s(this.h[3],f,m),this.h[3]=s(this.h[4],n,y),this.h[4]=s(this.h[0],r,_),this.h[0]=S},f.prototype._digest=function(e){return"hex"===e?r.toHex32(this.h,"little"):r.split32(this.h,"little")}
var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],v=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],b=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],g=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(e,t,n){"use strict"
var r=n(24),i=n(19)
function o(e,t,n){if(!(this instanceof o))return new o(e,t,n)
this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(r.toArray(t,n))}e.exports=o,o.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),i(e.length<=this.blockSize)
for(var t=e.length;t<this.blockSize;t++)e.push(0)
for(t=0;t<e.length;t++)e[t]^=54
for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106
this.outer=(new this.Hash).update(e)},o.prototype.update=function(e,t){return this.inner.update(e,t),this},o.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},function(e,t){e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},function(e,t,n){"use strict"
var r=n(6),i=n(467),o=n(12),a=o.utils.assert,s=n(468),u=n(469)
function c(e){if(!(this instanceof c))return new c(e)
"string"==typeof e&&(a(o.curves.hasOwnProperty(e),"Unknown curve "+e),e=o.curves[e]),e instanceof o.curves.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}e.exports=c,c.prototype.keyPair=function(e){return new s(this,e)},c.prototype.keyFromPrivate=function(e,t){return s.fromPrivate(this,e,t)},c.prototype.keyFromPublic=function(e,t){return s.fromPublic(this,e,t)},c.prototype.genKeyPair=function(e){e||(e={})
for(var t=new i({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||o.rand(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),n=this.n.byteLength(),a=this.n.sub(new r(2));;){var s=new r(t.generate(n))
if(!(s.cmp(a)>0))return s.iaddn(1),this.keyFromPrivate(s)}},c.prototype._truncateToN=function(e,t){var n=8*e.byteLength()-this.n.bitLength()
return n>0&&(e=e.ushrn(n)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},c.prototype.sign=function(e,t,n,o){"object"==typeof n&&(o=n,n=null),o||(o={}),t=this.keyFromPrivate(t,n),e=this._truncateToN(new r(e,16))
for(var a=this.n.byteLength(),s=t.getPrivate().toArray("be",a),c=e.toArray("be",a),f=new i({hash:this.hash,entropy:s,nonce:c,pers:o.pers,persEnc:o.persEnc||"utf8"}),l=this.n.sub(new r(1)),h=0;;h++){var d=o.k?o.k(h):new r(f.generate(this.n.byteLength()))
if(!((d=this._truncateToN(d,!0)).cmpn(1)<=0||d.cmp(l)>=0)){var p=this.g.mul(d)
if(!p.isInfinity()){var v=p.getX(),b=v.umod(this.n)
if(0!==b.cmpn(0)){var g=d.invm(this.n).mul(b.mul(t.getPrivate()).iadd(e))
if(0!==(g=g.umod(this.n)).cmpn(0)){var m=(p.getY().isOdd()?1:0)|(0!==v.cmp(b)?2:0)
return o.canonical&&g.cmp(this.nh)>0&&(g=this.n.sub(g),m^=1),new u({r:b,s:g,recoveryParam:m})}}}}}},c.prototype.verify=function(e,t,n,i){e=this._truncateToN(new r(e,16)),n=this.keyFromPublic(n,i)
var o=(t=new u(t,"hex")).r,a=t.s
if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1
if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1
var s,c=a.invm(this.n),f=c.mul(e).umod(this.n),l=c.mul(o).umod(this.n)
return this.curve._maxwellTrick?!(s=this.g.jmulAdd(f,n.getPublic(),l)).isInfinity()&&s.eqXToP(o):!(s=this.g.mulAdd(f,n.getPublic(),l)).isInfinity()&&0===s.getX().umod(this.n).cmp(o)},c.prototype.recoverPubKey=function(e,t,n,i){a((3&n)===n,"The recovery param is more than two bits"),t=new u(t,i)
var o=this.n,s=new r(e),c=t.r,f=t.s,l=1&n,h=n>>1
if(c.cmp(this.curve.p.umod(this.curve.n))>=0&&h)throw new Error("Unable to find sencond key candinate")
c=h?this.curve.pointFromX(c.add(this.curve.n),l):this.curve.pointFromX(c,l)
var d=t.r.invm(o),p=o.sub(s).mul(d).umod(o),v=f.mul(d).umod(o)
return this.g.mulAdd(p,c,v)},c.prototype.getKeyRecoveryParam=function(e,t,n,r){if(null!==(t=new u(t,r)).recoveryParam)return t.recoveryParam
for(var i=0;i<4;i++){var o
try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(n))return i}throw new Error("Unable to find valid recovery factor")}},function(e,t,n){"use strict"
var r=n(124),i=n(198),o=n(19)
function a(e){if(!(this instanceof a))return new a(e)
this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null
var t=i.toArray(e.entropy,e.entropyEnc||"hex"),n=i.toArray(e.nonce,e.nonceEnc||"hex"),r=i.toArray(e.pers,e.persEnc||"hex")
o(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,n,r)}e.exports=a,a.prototype._init=function(e,t,n){var r=e.concat(t).concat(n)
this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8)
for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1
this._update(r),this._reseed=1,this.reseedInterval=281474976710656},a.prototype._hmac=function(){return new r.hmac(this.hash,this.K)},a.prototype._update=function(e){var t=this._hmac().update(this.V).update([0])
e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},a.prototype.reseed=function(e,t,n,r){"string"!=typeof t&&(r=n,n=t,t=null),e=i.toArray(e,t),n=i.toArray(n,r),o(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(n||[])),this._reseed=1},a.prototype.generate=function(e,t,n,r){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required")
"string"!=typeof t&&(r=n,n=t,t=null),n&&(n=i.toArray(n,r||"hex"),this._update(n))
for(var o=[];o.length<e;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V)
var a=o.slice(0,e)
return this._update(n),this._reseed++,i.encode(a,t)}},function(e,t,n){"use strict"
var r=n(6),i=n(12).utils.assert
function o(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}e.exports=o,o.fromPublic=function(e,t,n){return t instanceof o?t:new o(e,{pub:t,pubEnc:n})},o.fromPrivate=function(e,t,n){return t instanceof o?t:new o(e,{priv:t,privEnc:n})},o.prototype.validate=function(){var e=this.getPublic()
return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},o.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(e,t){this.priv=new r(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?i(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y))
this.pub=this.ec.curve.decodePoint(e,t)},o.prototype.derive=function(e){return e.mul(this.priv).getX()},o.prototype.sign=function(e,t,n){return this.ec.sign(e,this,t,n)},o.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(e,t,n){"use strict"
var r=n(6),i=n(12).utils,o=i.assert
function a(e,t){if(e instanceof a)return e
this._importDER(e,t)||(o(e.r&&e.s,"Signature without r or s"),this.r=new r(e.r,16),this.s=new r(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function s(){this.place=0}function u(e,t){var n=e[t.place++]
if(!(128&n))return n
for(var r=15&n,i=0,o=0,a=t.place;o<r;o++,a++)i<<=8,i|=e[a]
return t.place=a,i}function c(e){for(var t=0,n=e.length-1;!e[t]&&!(128&e[t+1])&&t<n;)t++
return 0===t?e:e.slice(t)}function f(e,t){if(t<128)e.push(t)
else{var n=1+(Math.log(t)/Math.LN2>>>3)
for(e.push(128|n);--n;)e.push(t>>>(n<<3)&255)
e.push(t)}}e.exports=a,a.prototype._importDER=function(e,t){e=i.toArray(e,t)
var n=new s
if(48!==e[n.place++])return!1
if(u(e,n)+n.place!==e.length)return!1
if(2!==e[n.place++])return!1
var o=u(e,n),a=e.slice(n.place,o+n.place)
if(n.place+=o,2!==e[n.place++])return!1
var c=u(e,n)
if(e.length!==c+n.place)return!1
var f=e.slice(n.place,c+n.place)
return 0===a[0]&&128&a[1]&&(a=a.slice(1)),0===f[0]&&128&f[1]&&(f=f.slice(1)),this.r=new r(a),this.s=new r(f),this.recoveryParam=null,!0},a.prototype.toDER=function(e){var t=this.r.toArray(),n=this.s.toArray()
for(128&t[0]&&(t=[0].concat(t)),128&n[0]&&(n=[0].concat(n)),t=c(t),n=c(n);!(n[0]||128&n[1]);)n=n.slice(1)
var r=[2]
f(r,t.length),(r=r.concat(t)).push(2),f(r,n.length)
var o=r.concat(n),a=[48]
return f(a,o.length),a=a.concat(o),i.encode(a,e)}},function(e,t,n){"use strict"
var r=n(124),i=n(12),o=i.utils,a=o.assert,s=o.parseBytes,u=n(471),c=n(472)
function f(e){if(a("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof f))return new f(e)
e=i.curves[e].curve
this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=r.sha512}e.exports=f,f.prototype.sign=function(e,t){e=s(e)
var n=this.keyFromSecret(t),r=this.hashInt(n.messagePrefix(),e),i=this.g.mul(r),o=this.encodePoint(i),a=this.hashInt(o,n.pubBytes(),e).mul(n.priv()),u=r.add(a).umod(this.curve.n)
return this.makeSignature({R:i,S:u,Rencoded:o})},f.prototype.verify=function(e,t,n){e=s(e),t=this.makeSignature(t)
var r=this.keyFromPublic(n),i=this.hashInt(t.Rencoded(),r.pubBytes(),e),o=this.g.mul(t.S())
return t.R().add(r.pub().mul(i)).eq(o)},f.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t])
return o.intFromLE(e.digest()).umod(this.curve.n)},f.prototype.keyFromPublic=function(e){return u.fromPublic(this,e)},f.prototype.keyFromSecret=function(e){return u.fromSecret(this,e)},f.prototype.makeSignature=function(e){return e instanceof c?e:new c(this,e)},f.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength)
return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},f.prototype.decodePoint=function(e){var t=(e=o.parseBytes(e)).length-1,n=e.slice(0,t).concat(-129&e[t]),r=0!=(128&e[t]),i=o.intFromLE(n)
return this.curve.pointFromY(i,r)},f.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},f.prototype.decodeInt=function(e){return o.intFromLE(e)},f.prototype.isPoint=function(e){return e instanceof this.pointClass}},function(e,t,n){"use strict"
var r=n(12).utils,i=r.assert,o=r.parseBytes,a=r.cachedProperty
function s(e,t){this.eddsa=e,this._secret=o(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=o(t.pub)}s.fromPublic=function(e,t){return t instanceof s?t:new s(e,{pub:t})},s.fromSecret=function(e,t){return t instanceof s?t:new s(e,{secret:t})},s.prototype.secret=function(){return this._secret},a(s,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),a(s,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),a(s,"privBytes",function(){var e=this.eddsa,t=this.hash(),n=e.encodingLength-1,r=t.slice(0,e.encodingLength)
return r[0]&=248,r[n]&=127,r[n]|=64,r}),a(s,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),a(s,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),a(s,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),s.prototype.sign=function(e){return i(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},s.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},s.prototype.getSecret=function(e){return i(this._secret,"KeyPair is public only"),r.encode(this.secret(),e)},s.prototype.getPublic=function(e){return r.encode(this.pubBytes(),e)},e.exports=s},function(e,t,n){"use strict"
var r=n(6),i=n(12).utils,o=i.assert,a=i.cachedProperty,s=i.parseBytes
function u(e,t){this.eddsa=e,"object"!=typeof t&&(t=s(t)),Array.isArray(t)&&(t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),o(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof r&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}a(u,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),a(u,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),a(u,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),a(u,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),u.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},u.prototype.toHex=function(){return i.encode(this.toBytes(),"hex").toUpperCase()},e.exports=u},function(e,t,n){"use strict"
var r=n(56)
t.certificate=n(484)
var i=r.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())})
t.RSAPrivateKey=i
var o=r.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())})
t.RSAPublicKey=o
var a=r.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(s),this.key("subjectPublicKey").bitstr())})
t.PublicKey=a
var s=r.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),u=r.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(s),this.key("subjectPrivateKey").octstr())})
t.PrivateKey=u
var c=r.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())})
t.EncryptedPrivateKey=c
var f=r.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())})
t.DSAPrivateKey=f,t.DSAparam=r.define("DSAparam",function(){this.int()})
var l=r.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(h),this.key("publicKey").optional().explicit(1).bitstr())})
t.ECPrivateKey=l
var h=r.define("ECParameters",function(){this.choice({namedCurve:this.objid()})})
t.signature=r.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(e,t,n){var r=n(56),i=n(2)
function o(e,t){this.name=e,this.body=t,this.decoders={},this.encoders={}}t.define=function(e,t){return new o(e,t)},o.prototype._createNamed=function(e){var t
try{t=n(475).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(e){t=function(e){this._initNamed(e)}}return i(t,e),t.prototype._initNamed=function(t){e.call(this,t)},new t(this)},o.prototype._getDecoder=function(e){return e=e||"der",this.decoders.hasOwnProperty(e)||(this.decoders[e]=this._createNamed(r.decoders[e])),this.decoders[e]},o.prototype.decode=function(e,t,n){return this._getDecoder(t).decode(e,n)},o.prototype._getEncoder=function(e){return e=e||"der",this.encoders.hasOwnProperty(e)||(this.encoders[e]=this._createNamed(r.encoders[e])),this.encoders[e]},o.prototype.encode=function(e,t,n){return this._getEncoder(t).encode(e,n)}},function(module,exports,__webpack_require__){var indexOf=__webpack_require__(476),Object_keys=function(e){if(Object.keys)return Object.keys(e)
var t=[]
for(var n in e)t.push(n)
return t},forEach=function(e,t){if(e.forEach)return e.forEach(t)
for(var n=0;n<e.length;n++)t(e[n],n,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,n){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(e){return function(e,t,n){e[t]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"]
function Context(){}Context.prototype={}
var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e)
this.code=e}
Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.")
var t=document.createElement("iframe")
t.style||(t.style={}),t.style.display="none",document.body.appendChild(t)
var n=t.contentWindow,r=n.eval,i=n.execScript
!r&&i&&(i.call(n,"null"),r=n.eval),forEach(Object_keys(e),function(t){n[t]=e[t]}),forEach(globals,function(t){e[t]&&(n[t]=e[t])})
var o=Object_keys(n),a=r.call(n,this.code)
return forEach(Object_keys(n),function(t){(t in e||-1===indexOf(o,t))&&(e[t]=n[t])}),forEach(globals,function(t){t in e||defineProp(e,t,n[t])}),document.body.removeChild(t),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),n=this.runInContext(t)
return forEach(Object_keys(t),function(n){e[n]=t[n]}),n},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var n=Script(t)
return n[e].apply(n,[].slice.call(arguments,1))}}),exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context
return"object"==typeof e&&forEach(Object_keys(e),function(n){t[n]=e[n]}),t}},function(e,t){var n=[].indexOf
e.exports=function(e,t){if(n)return e.indexOf(t)
for(var r=0;r<e.length;++r)if(e[r]===t)return r
return-1}},function(e,t,n){var r=n(2)
function i(e){this._reporterState={obj:null,path:[],options:e||{},errors:[]}}function o(e,t){this.path=e,this.rethrow(t)}t.Reporter=i,i.prototype.isError=function(e){return e instanceof o},i.prototype.save=function(){var e=this._reporterState
return{obj:e.obj,pathLen:e.path.length}},i.prototype.restore=function(e){var t=this._reporterState
t.obj=e.obj,t.path=t.path.slice(0,e.pathLen)},i.prototype.enterKey=function(e){return this._reporterState.path.push(e)},i.prototype.exitKey=function(e){var t=this._reporterState
t.path=t.path.slice(0,e-1)},i.prototype.leaveKey=function(e,t,n){var r=this._reporterState
this.exitKey(e),null!==r.obj&&(r.obj[t]=n)},i.prototype.path=function(){return this._reporterState.path.join("/")},i.prototype.enterObject=function(){var e=this._reporterState,t=e.obj
return e.obj={},t},i.prototype.leaveObject=function(e){var t=this._reporterState,n=t.obj
return t.obj=e,n},i.prototype.error=function(e){var t,n=this._reporterState,r=e instanceof o
if(t=r?e:new o(n.path.map(function(e){return"["+JSON.stringify(e)+"]"}).join(""),e.message||e,e.stack),!n.options.partial)throw t
return r||n.errors.push(t),t},i.prototype.wrapResult=function(e){var t=this._reporterState
return t.options.partial?{result:this.isError(e)?null:e,errors:t.errors}:e},r(o,Error),o.prototype.rethrow=function(e){if(this.message=e+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,o),!this.stack)try{throw new Error(this.message)}catch(e){this.stack=e.stack}return this}},function(e,t,n){var r=n(57).Reporter,i=n(57).EncoderBuffer,o=n(57).DecoderBuffer,a=n(19),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],u=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s)
function c(e,t){var n={}
this._baseState=n,n.enc=e,n.parent=t||null,n.children=null,n.tag=null,n.args=null,n.reverseArgs=null,n.choice=null,n.optional=!1,n.any=!1,n.obj=!1,n.use=null,n.useDecoder=null,n.key=null,n.default=null,n.explicit=null,n.implicit=null,n.contains=null,n.parent||(n.children=[],this._wrap())}e.exports=c
var f=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"]
c.prototype.clone=function(){var e=this._baseState,t={}
f.forEach(function(n){t[n]=e[n]})
var n=new this.constructor(t.parent)
return n._baseState=t,n},c.prototype._wrap=function(){var e=this._baseState
u.forEach(function(t){this[t]=function(){var n=new this.constructor(this)
return e.children.push(n),n[t].apply(n,arguments)}},this)},c.prototype._init=function(e){var t=this._baseState
a(null===t.parent),e.call(this),t.children=t.children.filter(function(e){return e._baseState.parent===this},this),a.equal(t.children.length,1,"Root node can have only one child")},c.prototype._useArgs=function(e){var t=this._baseState,n=e.filter(function(e){return e instanceof this.constructor},this)
e=e.filter(function(e){return!(e instanceof this.constructor)},this),0!==n.length&&(a(null===t.children),t.children=n,n.forEach(function(e){e._baseState.parent=this},this)),0!==e.length&&(a(null===t.args),t.args=e,t.reverseArgs=e.map(function(e){if("object"!=typeof e||e.constructor!==Object)return e
var t={}
return Object.keys(e).forEach(function(n){n==(0|n)&&(n|=0)
var r=e[n]
t[r]=n}),t}))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach(function(e){c.prototype[e]=function(){var t=this._baseState
throw new Error(e+" not implemented for encoding: "+t.enc)}}),s.forEach(function(e){c.prototype[e]=function(){var t=this._baseState,n=Array.prototype.slice.call(arguments)
return a(null===t.tag),t.tag=e,this._useArgs(n),this}}),c.prototype.use=function(e){a(e)
var t=this._baseState
return a(null===t.use),t.use=e,this},c.prototype.optional=function(){return this._baseState.optional=!0,this},c.prototype.def=function(e){var t=this._baseState
return a(null===t.default),t.default=e,t.optional=!0,this},c.prototype.explicit=function(e){var t=this._baseState
return a(null===t.explicit&&null===t.implicit),t.explicit=e,this},c.prototype.implicit=function(e){var t=this._baseState
return a(null===t.explicit&&null===t.implicit),t.implicit=e,this},c.prototype.obj=function(){var e=this._baseState,t=Array.prototype.slice.call(arguments)
return e.obj=!0,0!==t.length&&this._useArgs(t),this},c.prototype.key=function(e){var t=this._baseState
return a(null===t.key),t.key=e,this},c.prototype.any=function(){return this._baseState.any=!0,this},c.prototype.choice=function(e){var t=this._baseState
return a(null===t.choice),t.choice=e,this._useArgs(Object.keys(e).map(function(t){return e[t]})),this},c.prototype.contains=function(e){var t=this._baseState
return a(null===t.use),t.contains=e,this},c.prototype._decode=function(e,t){var n=this._baseState
if(null===n.parent)return e.wrapResult(n.children[0]._decode(e,t))
var r,i=n.default,a=!0,s=null
if(null!==n.key&&(s=e.enterKey(n.key)),n.optional){var u=null
if(null!==n.explicit?u=n.explicit:null!==n.implicit?u=n.implicit:null!==n.tag&&(u=n.tag),null!==u||n.any){if(a=this._peekTag(e,u,n.any),e.isError(a))return a}else{var c=e.save()
try{null===n.choice?this._decodeGeneric(n.tag,e,t):this._decodeChoice(e,t),a=!0}catch(e){a=!1}e.restore(c)}}if(n.obj&&a&&(r=e.enterObject()),a){if(null!==n.explicit){var f=this._decodeTag(e,n.explicit)
if(e.isError(f))return f
e=f}var l=e.offset
if(null===n.use&&null===n.choice){if(n.any)c=e.save()
var h=this._decodeTag(e,null!==n.implicit?n.implicit:n.tag,n.any)
if(e.isError(h))return h
n.any?i=e.raw(c):e=h}if(t&&t.track&&null!==n.tag&&t.track(e.path(),l,e.length,"tagged"),t&&t.track&&null!==n.tag&&t.track(e.path(),e.offset,e.length,"content"),i=n.any?i:null===n.choice?this._decodeGeneric(n.tag,e,t):this._decodeChoice(e,t),e.isError(i))return i
if(n.any||null!==n.choice||null===n.children||n.children.forEach(function(n){n._decode(e,t)}),n.contains&&("octstr"===n.tag||"bitstr"===n.tag)){var d=new o(i)
i=this._getUse(n.contains,e._reporterState.obj)._decode(d,t)}}return n.obj&&a&&(i=e.leaveObject(r)),null===n.key||null===i&&!0!==a?null!==s&&e.exitKey(s):e.leaveKey(s,n.key,i),i},c.prototype._decodeGeneric=function(e,t,n){var r=this._baseState
return"seq"===e||"set"===e?null:"seqof"===e||"setof"===e?this._decodeList(t,e,r.args[0],n):/str$/.test(e)?this._decodeStr(t,e,n):"objid"===e&&r.args?this._decodeObjid(t,r.args[0],r.args[1],n):"objid"===e?this._decodeObjid(t,null,null,n):"gentime"===e||"utctime"===e?this._decodeTime(t,e,n):"null_"===e?this._decodeNull(t,n):"bool"===e?this._decodeBool(t,n):"objDesc"===e?this._decodeStr(t,e,n):"int"===e||"enum"===e?this._decodeInt(t,r.args&&r.args[0],n):null!==r.use?this._getUse(r.use,t._reporterState.obj)._decode(t,n):t.error("unknown tag: "+e)},c.prototype._getUse=function(e,t){var n=this._baseState
return n.useDecoder=this._use(e,t),a(null===n.useDecoder._baseState.parent),n.useDecoder=n.useDecoder._baseState.children[0],n.implicit!==n.useDecoder._baseState.implicit&&(n.useDecoder=n.useDecoder.clone(),n.useDecoder._baseState.implicit=n.implicit),n.useDecoder},c.prototype._decodeChoice=function(e,t){var n=this._baseState,r=null,i=!1
return Object.keys(n.choice).some(function(o){var a=e.save(),s=n.choice[o]
try{var u=s._decode(e,t)
if(e.isError(u))return!1
r={type:o,value:u},i=!0}catch(t){return e.restore(a),!1}return!0},this),i?r:e.error("Choice not matched")},c.prototype._createEncoderBuffer=function(e){return new i(e,this.reporter)},c.prototype._encode=function(e,t,n){var r=this._baseState
if(null===r.default||r.default!==e){var i=this._encodeValue(e,t,n)
if(void 0!==i&&!this._skipDefault(i,t,n))return i}},c.prototype._encodeValue=function(e,t,n){var i=this._baseState
if(null===i.parent)return i.children[0]._encode(e,t||new r)
var o=null
if(this.reporter=t,i.optional&&void 0===e){if(null===i.default)return
e=i.default}var a=null,s=!1
if(i.any)o=this._createEncoderBuffer(e)
else if(i.choice)o=this._encodeChoice(e,t)
else if(i.contains)a=this._getUse(i.contains,n)._encode(e,t),s=!0
else if(i.children)a=i.children.map(function(n){if("null_"===n._baseState.tag)return n._encode(null,t,e)
if(null===n._baseState.key)return t.error("Child should have a key")
var r=t.enterKey(n._baseState.key)
if("object"!=typeof e)return t.error("Child expected, but input is not object")
var i=n._encode(e[n._baseState.key],t,e)
return t.leaveKey(r),i},this).filter(function(e){return e}),a=this._createEncoderBuffer(a)
else if("seqof"===i.tag||"setof"===i.tag){if(!i.args||1!==i.args.length)return t.error("Too many args for : "+i.tag)
if(!Array.isArray(e))return t.error("seqof/setof, but data is not Array")
var u=this.clone()
u._baseState.implicit=null,a=this._createEncoderBuffer(e.map(function(n){var r=this._baseState
return this._getUse(r.args[0],e)._encode(n,t)},u))}else null!==i.use?o=this._getUse(i.use,n)._encode(e,t):(a=this._encodePrimitive(i.tag,e),s=!0)
if(!i.any&&null===i.choice){var c=null!==i.implicit?i.implicit:i.tag,f=null===i.implicit?"universal":"context"
null===c?null===i.use&&t.error("Tag could be omitted only for .use()"):null===i.use&&(o=this._encodeComposite(c,s,f,a))}return null!==i.explicit&&(o=this._encodeComposite(i.explicit,!1,"context",o)),o},c.prototype._encodeChoice=function(e,t){var n=this._baseState,r=n.choice[e.type]
return r||a(!1,e.type+" not found in "+JSON.stringify(Object.keys(n.choice))),r._encode(e.value,t)},c.prototype._encodePrimitive=function(e,t){var n=this._baseState
if(/str$/.test(e))return this._encodeStr(t,e)
if("objid"===e&&n.args)return this._encodeObjid(t,n.reverseArgs[0],n.args[1])
if("objid"===e)return this._encodeObjid(t,null,null)
if("gentime"===e||"utctime"===e)return this._encodeTime(t,e)
if("null_"===e)return this._encodeNull()
if("int"===e||"enum"===e)return this._encodeInt(t,n.args&&n.reverseArgs[0])
if("bool"===e)return this._encodeBool(t)
if("objDesc"===e)return this._encodeStr(t,e)
throw new Error("Unsupported tag: "+e)},c.prototype._isNumstr=function(e){return/^[0-9 ]*$/.test(e)},c.prototype._isPrintstr=function(e){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)}},function(e,t,n){var r=n(203)
t.tagClass={0:"universal",1:"application",2:"context",3:"private"},t.tagClassByName=r._reverse(t.tagClass),t.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},t.tagByName=r._reverse(t.tag)},function(e,t,n){var r=t
r.der=n(204),r.pem=n(481)},function(e,t,n){var r=n(2),i=n(1).Buffer,o=n(204)
function a(e){o.call(this,e),this.enc="pem"}r(a,o),e.exports=a,a.prototype.decode=function(e,t){for(var n=e.toString().split(/[\r\n]+/g),r=t.label.toUpperCase(),a=/^-----(BEGIN|END) ([^-]+)-----$/,s=-1,u=-1,c=0;c<n.length;c++){var f=n[c].match(a)
if(null!==f&&f[2]===r){if(-1!==s){if("END"!==f[1])break
u=c
break}if("BEGIN"!==f[1])break
s=c}}if(-1===s||-1===u)throw new Error("PEM section not found for: "+r)
var l=n.slice(s+1,u).join("")
l.replace(/[^a-z0-9\+\/=]+/gi,"")
var h=new i(l,"base64")
return o.prototype.decode.call(this,h,t)}},function(e,t,n){var r=t
r.der=n(205),r.pem=n(483)},function(e,t,n){var r=n(2),i=n(205)
function o(e){i.call(this,e),this.enc="pem"}r(o,i),e.exports=o,o.prototype.encode=function(e,t){for(var n=i.prototype.encode.call(this,e).toString("base64"),r=["-----BEGIN "+t.label+"-----"],o=0;o<n.length;o+=64)r.push(n.slice(o,o+64))
return r.push("-----END "+t.label+"-----"),r.join("\n")}},function(e,t,n){"use strict"
var r=n(56),i=r.define("Time",function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})}),o=r.define("AttributeTypeValue",function(){this.seq().obj(this.key("type").objid(),this.key("value").any())}),a=r.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional(),this.key("curve").objid().optional())}),s=r.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())}),u=r.define("RelativeDistinguishedName",function(){this.setof(o)}),c=r.define("RDNSequence",function(){this.seqof(u)}),f=r.define("Name",function(){this.choice({rdnSequence:this.use(c)})}),l=r.define("Validity",function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))}),h=r.define("Extension",function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())}),d=r.define("TBSCertificate",function(){this.seq().obj(this.key("version").explicit(0).int().optional(),this.key("serialNumber").int(),this.key("signature").use(a),this.key("issuer").use(f),this.key("validity").use(l),this.key("subject").use(f),this.key("subjectPublicKeyInfo").use(s),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(h).optional())}),p=r.define("X509Certificate",function(){this.seq().obj(this.key("tbsCertificate").use(d),this.key("signatureAlgorithm").use(a),this.key("signatureValue").bitstr())})
e.exports=p},function(e){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(e,t,n){(function(t){var r=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,i=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m,o=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,a=n(76),s=n(121)
e.exports=function(e,n){var u,c=e.toString(),f=c.match(r)
if(f){var l="aes"+f[1],h=new t(f[2],"hex"),d=new t(f[3].replace(/[\r\n]/g,""),"base64"),p=a(n,h.slice(0,8),parseInt(f[1],10)).key,v=[],b=s.createDecipheriv(l,p,h)
v.push(b.update(d)),v.push(b.final()),u=t.concat(v)}else{var g=c.match(o)
u=new t(g[2].replace(/[\r\n]/g,""),"base64")}return{tag:c.match(i)[1],data:u}}}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var r=n(6),i=n(12).ec,o=n(78),a=n(206)
function s(e,t){if(e.cmpn(0)<=0)throw new Error("invalid sig")
if(e.cmp(t)>=t)throw new Error("invalid sig")}e.exports=function(e,n,u,c,f){var l=o(u)
if("ec"===l.type){if("ecdsa"!==c&&"ecdsa/rsa"!==c)throw new Error("wrong public key type")
return function(e,t,n){var r=a[n.data.algorithm.curve.join(".")]
if(!r)throw new Error("unknown curve "+n.data.algorithm.curve.join("."))
var o=new i(r),s=n.data.subjectPrivateKey.data
return o.verify(t,e,s)}(e,n,l)}if("dsa"===l.type){if("dsa"!==c)throw new Error("wrong public key type")
return function(e,t,n){var i=n.data.p,a=n.data.q,u=n.data.g,c=n.data.pub_key,f=o.signature.decode(e,"der"),l=f.s,h=f.r
s(l,a),s(h,a)
var d=r.mont(i),p=l.invm(a)
return 0===u.toRed(d).redPow(new r(t).mul(p).mod(a)).fromRed().mul(c.toRed(d).redPow(h.mul(p).mod(a)).fromRed()).mod(i).mod(a).cmp(h)}(e,n,l)}if("rsa"!==c&&"ecdsa/rsa"!==c)throw new Error("wrong public key type")
n=t.concat([f,n])
for(var h=l.modulus.byteLength(),d=[1],p=0;n.length+d.length+2<h;)d.push(255),p++
d.push(0)
for(var v=-1;++v<n.length;)d.push(n[v])
d=new t(d)
var b=r.mont(l.modulus)
e=(e=new r(e).toRed(b)).redPow(new r(l.publicExponent)),e=new t(e.fromRed().toArray())
var g=p<8?1:0
for(h=Math.min(e.length,d.length),e.length!==d.length&&(g=1),v=-1;++v<h;)g|=e[v]^d[v]
return 0===g}}).call(this,n(1).Buffer)},function(e,t,n){(function(t){var r=n(12),i=n(6)
e.exports=function(e){return new a(e)}
var o={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}}
function a(e){this.curveType=o[e],this.curveType||(this.curveType={name:e}),this.curve=new r.ec(this.curveType.name),this.keys=void 0}function s(e,n,r){Array.isArray(e)||(e=e.toArray())
var i=new t(e)
if(r&&i.length<r){var o=new t(r-i.length)
o.fill(0),i=t.concat([o,i])}return n?i.toString(n):i}o.p224=o.secp224r1,o.p256=o.secp256r1=o.prime256v1,o.p192=o.secp192r1=o.prime192v1,o.p384=o.secp384r1,o.p521=o.secp521r1,a.prototype.generateKeys=function(e,t){return this.keys=this.curve.genKeyPair(),this.getPublicKey(e,t)},a.prototype.computeSecret=function(e,n,r){return n=n||"utf8",t.isBuffer(e)||(e=new t(e,n)),s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(),r,this.curveType.byteLength)},a.prototype.getPublicKey=function(e,t){var n=this.keys.getPublic("compressed"===t,!0)
return"hybrid"===t&&(n[n.length-1]%2?n[0]=7:n[0]=6),s(n,e)},a.prototype.getPrivateKey=function(e){return s(this.keys.getPrivate(),e)},a.prototype.setPublicKey=function(e,n){return n=n||"utf8",t.isBuffer(e)||(e=new t(e,n)),this.keys._importPublic(e),this},a.prototype.setPrivateKey=function(e,n){n=n||"utf8",t.isBuffer(e)||(e=new t(e,n))
var r=new i(e)
return r=r.toString(16),this.keys=this.curve.genKeyPair(),this.keys._importPrivate(r),this}}).call(this,n(1).Buffer)},function(e,t,n){t.publicEncrypt=n(490),t.privateDecrypt=n(491),t.privateEncrypt=function(e,n){return t.publicEncrypt(e,n,!0)},t.publicDecrypt=function(e,n){return t.privateDecrypt(e,n,!0)}},function(e,t,n){var r=n(78),i=n(43),o=n(53),a=n(207),s=n(208),u=n(6),c=n(209),f=n(123),l=n(3).Buffer
e.exports=function(e,t,n){var h
h=e.padding?e.padding:n?1:4
var d,p=r(e)
if(4===h)d=function(e,t){var n=e.modulus.byteLength(),r=t.length,c=o("sha1").update(l.alloc(0)).digest(),f=c.length,h=2*f
if(r>n-h-2)throw new Error("message too long")
var d=l.alloc(n-r-h-2),p=n-f-1,v=i(f),b=s(l.concat([c,d,l.alloc(1,1),t],p),a(v,p)),g=s(v,a(b,f))
return new u(l.concat([l.alloc(1),g,b],n))}(p,t)
else if(1===h)d=function(e,t,n){var r,o=t.length,a=e.modulus.byteLength()
if(o>a-11)throw new Error("message too long")
r=n?l.alloc(a-o-3,255):function(e){var t,n=l.allocUnsafe(e),r=0,o=i(2*e),a=0
for(;r<e;)a===o.length&&(o=i(2*e),a=0),(t=o[a++])&&(n[r++]=t)
return n}(a-o-3)
return new u(l.concat([l.from([0,n?1:2]),r,l.alloc(1),t],a))}(p,t,n)
else{if(3!==h)throw new Error("unknown padding")
if((d=new u(t)).cmp(p.modulus)>=0)throw new Error("data too long for modulus")}return n?f(d,p):c(d,p)}},function(e,t,n){var r=n(78),i=n(207),o=n(208),a=n(6),s=n(123),u=n(53),c=n(209),f=n(3).Buffer
e.exports=function(e,t,n){var l
l=e.padding?e.padding:n?1:4
var h,d=r(e),p=d.modulus.byteLength()
if(t.length>p||new a(t).cmp(d.modulus)>=0)throw new Error("decryption error")
h=n?c(new a(t),d):s(t,d)
var v=f.alloc(p-h.length)
if(h=f.concat([v,h],p),4===l)return function(e,t){var n=e.modulus.byteLength(),r=u("sha1").update(f.alloc(0)).digest(),a=r.length
if(0!==t[0])throw new Error("decryption error")
var s=t.slice(1,a+1),c=t.slice(a+1),l=o(s,i(c,a)),h=o(c,i(l,n-a-1))
if(function(e,t){e=f.from(e),t=f.from(t)
var n=0,r=e.length
e.length!==t.length&&(n++,r=Math.min(e.length,t.length))
var i=-1
for(;++i<r;)n+=e[i]^t[i]
return n}(r,h.slice(0,a)))throw new Error("decryption error")
var d=a
for(;0===h[d];)d++
if(1!==h[d++])throw new Error("decryption error")
return h.slice(d)}(d,h)
if(1===l)return function(e,t,n){var r=t.slice(0,2),i=2,o=0
for(;0!==t[i++];)if(i>=t.length){o++
break}var a=t.slice(2,i-1);("0002"!==r.toString("hex")&&!n||"0001"!==r.toString("hex")&&n)&&o++
a.length<8&&o++
if(o)throw new Error("decryption error")
return t.slice(i)}(0,h,n)
if(3===l)return h
throw new Error("unknown padding")}},function(e,t,n){"use strict";(function(e,r){function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var o=n(3),a=n(43),s=o.Buffer,u=o.kMaxLength,c=e.crypto||e.msCrypto,f=Math.pow(2,32)-1
function l(e,t){if("number"!=typeof e||e!=e)throw new TypeError("offset must be a number")
if(e>f||e<0)throw new TypeError("offset must be a uint32")
if(e>u||e>t)throw new RangeError("offset out of range")}function h(e,t,n){if("number"!=typeof e||e!=e)throw new TypeError("size must be a number")
if(e>f||e<0)throw new TypeError("size must be a uint32")
if(e+t>n||e>u)throw new RangeError("buffer too small")}function d(e,t,n,i){if(r.browser){var o=e.buffer,s=new Uint8Array(o,t,n)
return c.getRandomValues(s),i?void r.nextTick(function(){i(null,e)}):e}if(!i)return a(n).copy(e,t),e
a(n,function(n,r){if(n)return i(n)
r.copy(e,t),i(null,e)})}c&&c.getRandomValues||!r.browser?(t.randomFill=function(t,n,r,i){if(!(s.isBuffer(t)||t instanceof e.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
if("function"==typeof n)i=n,n=0,r=t.length
else if("function"==typeof r)i=r,r=t.length-n
else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function')
return l(n,t.length),h(r,n,t.length),d(t,n,r,i)},t.randomFillSync=function(t,n,r){void 0===n&&(n=0)
if(!(s.isBuffer(t)||t instanceof e.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
l(n,t.length),void 0===r&&(r=t.length-n)
return h(r,n,t.length),d(t,n,r)}):(t.randomFill=i,t.randomFillSync=i)}).call(this,n(5),n(14))},function(e,t,n){"use strict"
var r=function(e){return e&&e.__esModule?e.default:e},i=function(){function e(e,t){for(var n in t){var r=t[n]
r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(n(8)),s=n(28).UnsignedHyper,u=(n(51).hash,n(17).Keypair),c=(n(210).Account,n(114).Operation,n(175).Transaction),f=n(116).Memo,l=r(n(34)),h=r(n(59)),d=(r(n(74)),r(n(11))),p=100
t.TimeoutInfinite=0
t.TransactionBuilder=function(){function e(t){var n=void 0===arguments[1]?{}:arguments[1]
if(o(this,e),!t)throw new Error("must specify source account for the transaction")
this.source=t,this.operations=[],this.baseFee=d(n.fee)?p:n.fee,this.timebounds=h(n.timebounds),this.memo=n.memo||f.none(),this.timeoutSet=!1}return i(e,{addOperation:{value:function(e){return this.operations.push(e),this}},addMemo:{value:function(e){return this.memo=e,this}},setTimeout:{value:function(e){if(null!=this.timebounds&&this.timebounds.maxTime>0)throw new Error("TimeBounds.max_time has been already set - setting timeout would overwrite it.")
if(e<0)throw new Error("timeout cannot be negative")
if(this.timeoutSet=!0,e>0){var t=Math.floor(Date.now()/1e3)+e
null==this.timebounds?this.timebounds={minTime:0,maxTime:t}:this.timebounds={minTime:this.timebounds.minTime,maxTime:t}}return this}},build:{value:function(){if((null==this.timebounds||null!=this.timebounds&&0==this.timebounds.maxTime)&&!this.timeoutSet)throw new Error("TimeBounds has to be set or you must call setTimeout(TimeoutInfinite).")
var e=new l(this.source.sequenceNumber()).add(1),t={sourceAccount:u.fromPublicKey(this.source.accountId()).xdrAccountId(),fee:this.baseFee*this.operations.length,seqNum:a.SequenceNumber.fromString(e.toString()),memo:this.memo?this.memo.toXDRObject():null,ext:new a.TransactionExt(0)}
this.timebounds&&(this.timebounds.minTime=s.fromString(this.timebounds.minTime.toString()),this.timebounds.maxTime=s.fromString(this.timebounds.maxTime.toString()),t.timeBounds=new a.TimeBounds(this.timebounds))
var n=new a.Transaction(t)
n.operations(this.operations)
var r=new a.TransactionEnvelope({tx:n}),i=new c(r)
return this.source.incrementSequenceNumber(),i}}}),e}()},function(e,t,n){var r=n(140),i=n(100),o=n(66)
e.exports=function(e,t){return null==e?e:r(e,i(t),o)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.LedgerCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.LedgerCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("ledgers"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"ledger",value:function(e){return this.filter.push(["ledgers",e.toString()]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TransactionCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.TransactionCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("transactions"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"transaction",value:function(e){return this.filter.push(["transactions",e]),this}},{key:"forAccount",value:function(e){return this.filter.push(["accounts",e,"transactions"]),this}},{key:"forLedger",value:function(e){return"number"==typeof e&&(e=e.toString()),this.filter.push(["ledgers",e,"transactions"]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OperationCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.OperationCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("operations"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"operation",value:function(e){return this.filter.push(["operations",e]),this}},{key:"forAccount",value:function(e){return this.filter.push(["accounts",e,"operations"]),this}},{key:"forLedger",value:function(e){return"number"==typeof e&&(e=e.toString()),this.filter.push(["ledgers",e,"operations"]),this}},{key:"forTransaction",value:function(e){return this.filter.push(["transactions",e,"operations"]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OfferCallBuilder=void 0
var r=n(13),i=(n(211),n(36))
t.OfferCallBuilder=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
if("accounts"!==n)throw new i.BadRequestError("Bad resource specified for offer:",n)
for(var o=arguments.length,a=Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s]
return r.url.segment([n].concat(a,["offers"])),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.CallBuilder),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TradesCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.TradesCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("trades"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"forAssetPair",value:function(e,t){return e.isNative()?this.url.setQuery("base_asset_type","native"):(this.url.setQuery("base_asset_type",e.getAssetType()),this.url.setQuery("base_asset_code",e.getCode()),this.url.setQuery("base_asset_issuer",e.getIssuer())),t.isNative()?this.url.setQuery("counter_asset_type","native"):(this.url.setQuery("counter_asset_type",t.getAssetType()),this.url.setQuery("counter_asset_code",t.getCode()),this.url.setQuery("counter_asset_issuer",t.getIssuer())),this}},{key:"forOffer",value:function(e){return this.url.setQuery("offer_id",e),this}},{key:"forAccount",value:function(e){return this.filter.push(["accounts",e,"trades"]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PathCallBuilder=void 0
var r=n(13)
t.PathCallBuilder=function(e){function t(e,n,r,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return a.url.segment("paths"),a.url.setQuery("destination_account",r),a.url.setQuery("source_account",n),a.url.setQuery("destination_amount",o),i.isNative()?a.url.setQuery("destination_asset_type","native"):(a.url.setQuery("destination_asset_type",i.getAssetType()),a.url.setQuery("destination_asset_code",i.getCode()),a.url.setQuery("destination_asset_issuer",i.getIssuer())),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.CallBuilder),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PaymentCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.PaymentCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("payments"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"forAccount",value:function(e){return this.filter.push(["accounts",e,"payments"]),this}},{key:"forLedger",value:function(e){return"number"==typeof e&&(e=e.toString()),this.filter.push(["ledgers",e,"payments"]),this}},{key:"forTransaction",value:function(e){return this.filter.push(["transactions",e,"payments"]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.EffectCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.EffectCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("effects"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"forAccount",value:function(e){return this.filter.push(["accounts",e,"effects"]),this}},{key:"forLedger",value:function(e){return"number"==typeof e&&(e=e.toString()),this.filter.push(["ledgers",e,"effects"]),this}},{key:"forTransaction",value:function(e){return this.filter.push(["transactions",e,"effects"]),this}},{key:"forOperation",value:function(e){return this.filter.push(["operations",e,"effects"]),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FriendbotBuilder=void 0
var r=n(13)
t.FriendbotBuilder=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r.url.segment("friendbot"),r.url.setQuery("addr",n),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.CallBuilder),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AssetsCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13)
t.AssetsCallBuilder=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.url.segment("assets"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"forCode",value:function(e){return this.url.setQuery("asset_code",e),this}},{key:"forIssuer",value:function(e){return this.url.setQuery("asset_issuer",e),this}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TradeAggregationCallBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(13),o=n(36)
var a=[6e4,3e5,9e5,36e5,864e5,6048e5]
t.TradeAggregationCallBuilder=function(e){function t(e,n,r,i,a,s,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
if(c.url.segment("trade_aggregations"),n.isNative()?c.url.setQuery("base_asset_type","native"):(c.url.setQuery("base_asset_type",n.getAssetType()),c.url.setQuery("base_asset_code",n.getCode()),c.url.setQuery("base_asset_issuer",n.getIssuer())),r.isNative()?c.url.setQuery("counter_asset_type","native"):(c.url.setQuery("counter_asset_type",r.getAssetType()),c.url.setQuery("counter_asset_code",r.getCode()),c.url.setQuery("counter_asset_issuer",r.getIssuer())),void 0===i||void 0===a)throw new o.BadRequestError("Invalid time bounds",[i,a])
if(c.url.setQuery("start_time",i),c.url.setQuery("end_time",a),!c.isValidResolution(s))throw new o.BadRequestError("Invalid resolution",s)
if(c.url.setQuery("resolution",s),!c.isValidOffset(u,s))throw new o.BadRequestError("Invalid offset",u)
return c.url.setQuery("offset",u),c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.CallBuilder),r(t,[{key:"isValidResolution",value:function(e){for(var t=!1,n=0;n<a.length;n++)if(a[n]==e){t=!0
break}return t}},{key:"isValidOffset",value:function(e,t){return!(e>t||e>864e5||e%36e5!=0)}}]),t}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FederationServer=t.FEDERATION_RESPONSE_MAX_SIZE=void 0
var r=function(){return function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(27)),a=l(n(40)),s=(l(n(16)),l(n(169)),n(58)),u=n(48),c=n(36),f=n(212)
function l(e){return e&&e.__esModule?e:{default:e}}var h=t.FEDERATION_RESPONSE_MAX_SIZE=102400
t.FederationServer=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.serverURL=(0,a.default)(t),this.domain=n
var i=s.Config.isAllowHttp()
if(void 0!==r.allowHttp&&(i=r.allowHttp),this.timeout=s.Config.getTimeout(),"number"==typeof r.timeout&&(this.timeout=r.timeout),"https"!=this.serverURL.protocol()&&!i)throw new Error("Cannot connect to insecure federation server")}return i(e,[{key:"resolveAddress",value:function(e){if(e.indexOf("*")<0){if(!this.domain)return Promise.reject(new Error("Unknown domain. Make sure `address` contains a domain (ex. `bob*stellar.org`) or pass `domain` parameter when instantiating the server object."))
e=e+"*"+this.domain}var t=this.serverURL.query({type:"name",q:e})
return this._sendRequest(t)}},{key:"resolveAccountId",value:function(e){var t=this.serverURL.query({type:"id",q:e})
return this._sendRequest(t)}},{key:"resolveTransactionId",value:function(e){var t=this.serverURL.query({type:"txid",q:e})
return this._sendRequest(t)}},{key:"_sendRequest",value:function(e){var t=this.timeout
return o.default.get(e.toString(),{maxContentLength:h,timeout:t}).then(function(e){if(void 0!==e.data.memo&&"string"!=typeof e.data.memo)throw new Error("memo value should be of type string")
return e.data}).catch(function(e){if(e instanceof Error){if(e.message.match(/^maxContentLength size/))throw new Error("federation response exceeds allowed size of "+h)
return Promise.reject(e)}return Promise.reject(new c.BadResponseError("Server query failed. Server responded: "+e.status+" "+e.statusText,e.data))})}}],[{key:"resolve",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t.indexOf("*")<0)return u.StrKey.isValidEd25519PublicKey(t)?Promise.resolve({account_id:t}):Promise.reject(new Error("Invalid Account ID"))
var i=t.split("*"),o=r(i,2)[1]
return 2==i.length&&o?e.createForDomain(o,n).then(function(e){return e.resolveAddress(t)}):Promise.reject(new Error("Invalid Stellar address"))}},{key:"createForDomain",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return f.StellarTomlResolver.resolve(t,n).then(function(r){return r.FEDERATION_SERVER?new e(r.FEDERATION_SERVER,t,n):Promise.reject(new Error("stellar.toml does not contain FEDERATION_SERVER field"))})}}]),e}()},function(e,t,n){var r=n(508),i=n(509)
e.exports={parse:function(e){var t=r.parse(e.toString())
return i.compile(t)}}},function(e,t){e.exports=function(){function e(e,t,n,r,i,o){this.message=e,this.expected=t,this.found=n,this.offset=r,this.line=i,this.column=o,this.name="SyntaxError"}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),{SyntaxError:e,parse:function(t){var n,r=arguments.length>1?arguments[1]:{},i={},o={start:Bt},a=Bt,s=function(){return dn},u=i,c="#",f={type:"literal",value:"#",description:'"#"'},l=void 0,h={type:"any",description:"any character"},d="[",p={type:"literal",value:"[",description:'"["'},v="]",b={type:"literal",value:"]",description:'"]"'},g=function(e){pn(vn("ObjectPath",e,Mt,Pt))},m=function(e){pn(vn("ArrayPath",e,Mt,Pt))},y=function(e,t){return e.concat(t)},_=function(e){return[e]},w=function(e){return e},x=".",k={type:"literal",value:".",description:'"."'},S="=",E={type:"literal",value:"=",description:'"="'},A=function(e,t){pn(vn("Assign",t,Mt,Pt,e))},O=function(e){return e.join("")},T=function(e){return e.value},M='"""',P={type:"literal",value:'"""',description:'"\\"\\"\\""'},I=null,C=function(e){return vn("String",e.join(""),Mt,Pt)},R='"',B={type:"literal",value:'"',description:'"\\""'},j="'''",N={type:"literal",value:"'''",description:"\"'''\""},L="'",U={type:"literal",value:"'",description:'"\'"'},D=function(e){return e},z=function(e){return e},q="\\",F={type:"literal",value:"\\",description:'"\\\\"'},K=function(){return""},H="e",V={type:"literal",value:"e",description:'"e"'},$="E",X={type:"literal",value:"E",description:'"E"'},W=function(e,t){return vn("Float",parseFloat(e+"e"+t),Mt,Pt)},Q=function(e){return vn("Float",parseFloat(e),Mt,Pt)},Y="+",G={type:"literal",value:"+",description:'"+"'},Z=function(e){return e.join("")},J="-",ee={type:"literal",value:"-",description:'"-"'},te=function(e){return"-"+e.join("")},ne=function(e){return vn("Integer",parseInt(e,10),Mt,Pt)},re="true",ie={type:"literal",value:"true",description:'"true"'},oe=function(){return vn("Boolean",!0,Mt,Pt)},ae="false",se={type:"literal",value:"false",description:'"false"'},ue=function(){return vn("Boolean",!1,Mt,Pt)},ce=function(){return vn("Array",[],Mt,Pt)},fe=function(e){return vn("Array",e?[e]:[],Mt,Pt)},le=function(e){return vn("Array",e,Mt,Pt)},he=function(e,t){return vn("Array",e.concat(t),Mt,Pt)},de=function(e){return e},pe=",",ve={type:"literal",value:",",description:'","'},be="{",ge={type:"literal",value:"{",description:'"{"'},me="}",ye={type:"literal",value:"}",description:'"}"'},_e=function(e){return vn("InlineTable",e,Mt,Pt)},we=function(e,t){return vn("InlineTableValue",t,Mt,Pt,e)},xe=function(e){return"."+e},ke=function(e){return e.join("")},Se=":",Ee={type:"literal",value:":",description:'":"'},Ae=function(e){return e.join("")},Oe="T",Te={type:"literal",value:"T",description:'"T"'},Me="Z",Pe={type:"literal",value:"Z",description:'"Z"'},Ie=function(e,t){return vn("Date",new Date(e+"T"+t+"Z"),Mt,Pt)},Ce=function(e,t){return vn("Date",new Date(e+"T"+t),Mt,Pt)},Re=/^[ \t]/,Be={type:"class",value:"[ \\t]",description:"[ \\t]"},je="\n",Ne={type:"literal",value:"\n",description:'"\\n"'},Le="\r",Ue={type:"literal",value:"\r",description:'"\\r"'},De=/^[0-9a-f]/i,ze={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},qe=/^[0-9]/,Fe={type:"class",value:"[0-9]",description:"[0-9]"},Ke="_",He={type:"literal",value:"_",description:'"_"'},Ve=function(){return""},$e=/^[A-Za-z0-9_\-]/,Xe={type:"class",value:"[A-Za-z0-9_\\-]",description:"[A-Za-z0-9_\\-]"},We=function(e){return e.join("")},Qe='\\"',Ye={type:"literal",value:'\\"',description:'"\\\\\\""'},Ge=function(){return'"'},Ze="\\\\",Je={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},et=function(){return"\\"},tt="\\b",nt={type:"literal",value:"\\b",description:'"\\\\b"'},rt=function(){return"\b"},it="\\t",ot={type:"literal",value:"\\t",description:'"\\\\t"'},at=function(){return"\t"},st="\\n",ut={type:"literal",value:"\\n",description:'"\\\\n"'},ct=function(){return"\n"},ft="\\f",lt={type:"literal",value:"\\f",description:'"\\\\f"'},ht=function(){return"\f"},dt="\\r",pt={type:"literal",value:"\\r",description:'"\\\\r"'},vt=function(){return"\r"},bt="\\U",gt={type:"literal",value:"\\U",description:'"\\\\U"'},mt=function(e){return function(e,t,n){var r=parseInt("0x"+e)
if(!(!isFinite(r)||Math.floor(r)!=r||r<0||r>1114111||r>55295&&r<57344))return function(){var e,t,n=[],r=-1,i=arguments.length
if(!i)return""
for(var o="";++r<i;){var a=Number(arguments[r])
a<=65535?n.push(a):(e=55296+((a-=65536)>>10),t=a%1024+56320,n.push(e,t)),(r+1==i||n.length>16384)&&(o+=String.fromCharCode.apply(null,n),n.length=0)}return o}(r)
!function(e,t,n){var r=new Error(e)
throw r.line=t,r.column=n,r}("Invalid Unicode escape code: "+e,t,n)}(e.join(""))},yt="\\u",_t={type:"literal",value:"\\u",description:'"\\\\u"'},wt=0,xt=0,kt=0,St={line:1,column:1,seenCR:!1},Et=0,At=[],Ot=0,Tt={}
if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".')
a=o[r.startRule]}function Mt(){return It(xt).line}function Pt(){return It(xt).column}function It(e){return kt!==e&&(kt>e&&(kt=0,St={line:1,column:1,seenCR:!1}),function(e,n,r){var i,o
for(i=n;i<r;i++)"\n"===(o=t.charAt(i))?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===o||"\u2028"===o||"\u2029"===o?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}(St,kt,e),kt=e),St}function Ct(e){wt<Et||(wt>Et&&(Et=wt,At=[]),At.push(e))}function Rt(n,r,i){var o=It(i),a=i<t.length?t.charAt(i):null
return null!==r&&function(e){var t=1
for(e.sort(function(e,t){return e.description<t.description?-1:e.description>t.description?1:0});t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(r),new e(null!==n?n:function(e,t){var n,r=new Array(e.length)
for(n=0;n<e.length;n++)r[n]=e[n].description
return"Expected "+(e.length>1?r.slice(0,-1).join(", ")+" or "+r[e.length-1]:r[0])+" but "+(t?'"'+function(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}(t)+'"':"end of input")+" found."}(r,a),r,a,i,o.line,o.column)}function Bt(){var e,t,n,r=49*wt+0,o=Tt[r]
if(o)return wt=o.nextPos,o.result
for(e=wt,t=[],n=jt();n!==i;)t.push(n),n=jt()
return t!==i&&(xt=e,t=s()),e=t,Tt[r]={nextPos:wt,result:e},e}function jt(){var e,n,r,o,a,s,c,f=49*wt+1,l=Tt[f]
if(l)return wt=l.nextPos,l.result
for(e=wt,n=[],r=rn();r!==i;)n.push(r),r=rn()
if(n!==i)if((r=function(){var e,n=49*wt+2,r=Tt[n]
return r?(wt=r.nextPos,r.result):((e=Nt())===i&&(e=function(){var e,n,r,o,a,s,c=49*wt+4,f=Tt[c]
if(f)return wt=f.nextPos,f.result
if(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
if(r!==i)if((o=Lt())!==i){for(a=[],s=rn();s!==i;)a.push(s),s=rn()
a!==i?(93===t.charCodeAt(wt)?(s=v,wt++):(s=i,0===Ot&&Ct(b)),s!==i?(xt=e,n=g(o),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
return Tt[c]={nextPos:wt,result:e},e}())===i&&(e=function(){var e,n,r,o,a,s,c,f,l=49*wt+5,h=Tt[l]
if(h)return wt=h.nextPos,h.result
if(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i)if(91===t.charCodeAt(wt)?(r=d,wt++):(r=i,0===Ot&&Ct(p)),r!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i)if((a=Lt())!==i){for(s=[],c=rn();c!==i;)s.push(c),c=rn()
s!==i?(93===t.charCodeAt(wt)?(c=v,wt++):(c=i,0===Ot&&Ct(b)),c!==i?(93===t.charCodeAt(wt)?(f=v,wt++):(f=i,0===Ot&&Ct(b)),f!==i?(xt=e,n=m(a),e=n):(wt=e,e=u)):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u
return Tt[l]={nextPos:wt,result:e},e}())===i&&(e=function(){var e,n,r,o,a,s,c=49*wt+9,f=Tt[c]
if(f)return wt=f.nextPos,f.result
if(e=wt,(n=zt())!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
if(r!==i)if(61===t.charCodeAt(wt)?(o=S,wt++):(o=i,0===Ot&&Ct(E)),o!==i){for(a=[],s=rn();s!==i;)a.push(s),s=rn()
a!==i&&(s=Ft())!==i?(xt=e,n=A(n,s),e=n):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
if(e===i)if(e=wt,(n=qt())!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
if(r!==i)if(61===t.charCodeAt(wt)?(o=S,wt++):(o=i,0===Ot&&Ct(E)),o!==i){for(a=[],s=rn();s!==i;)a.push(s),s=rn()
a!==i&&(s=Ft())!==i?(xt=e,n=A(n,s),e=n):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
return Tt[c]={nextPos:wt,result:e},e}()),Tt[n]={nextPos:wt,result:e},e)}())!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i){for(a=[],s=Nt();s!==i;)a.push(s),s=Nt()
if(a!==i){if(s=[],(c=on())!==i)for(;c!==i;)s.push(c),c=on()
else s=u
s===i&&(s=sn()),s!==i?e=n=[n,r,o,a,s]:(wt=e,e=u)}else wt=e,e=u}else wt=e,e=u}else wt=e,e=u
else wt=e,e=u
if(e===i){if(e=wt,n=[],(r=rn())!==i)for(;r!==i;)n.push(r),r=rn()
else n=u
if(n!==i){if(r=[],(o=on())!==i)for(;o!==i;)r.push(o),o=on()
else r=u
r===i&&(r=sn()),r!==i?e=n=[n,r]:(wt=e,e=u)}else wt=e,e=u
e===i&&(e=on())}return Tt[f]={nextPos:wt,result:e},e}function Nt(){var e,n,r,o,a,s,d=49*wt+3,p=Tt[d]
if(p)return wt=p.nextPos,p.result
if(e=wt,35===t.charCodeAt(wt)?(n=c,wt++):(n=i,0===Ot&&Ct(f)),n!==i){for(r=[],o=wt,a=wt,Ot++,(s=on())===i&&(s=sn()),Ot--,s===i?a=l:(wt=a,a=u),a!==i?(t.length>wt?(s=t.charAt(wt),wt++):(s=i,0===Ot&&Ct(h)),s!==i?o=a=[a,s]:(wt=o,o=u)):(wt=o,o=u);o!==i;)r.push(o),o=wt,a=wt,Ot++,(s=on())===i&&(s=sn()),Ot--,s===i?a=l:(wt=a,a=u),a!==i?(t.length>wt?(s=t.charAt(wt),wt++):(s=i,0===Ot&&Ct(h)),s!==i?o=a=[a,s]:(wt=o,o=u)):(wt=o,o=u)
r!==i?e=n=[n,r]:(wt=e,e=u)}else wt=e,e=u
return Tt[d]={nextPos:wt,result:e},e}function Lt(){var e,t,n,r=49*wt+6,o=Tt[r]
if(o)return wt=o.nextPos,o.result
if(e=wt,t=[],(n=Dt())!==i)for(;n!==i;)t.push(n),n=Dt()
else t=u
return t!==i&&(n=Ut())!==i?(xt=e,e=t=y(t,n)):(wt=e,e=u),e===i&&(e=wt,(t=Ut())!==i&&(xt=e,t=_(t)),e=t),Tt[r]={nextPos:wt,result:e},e}function Ut(){var e,t,n,r,o,a=49*wt+7,s=Tt[a]
if(s)return wt=s.nextPos,s.result
for(e=wt,t=[],n=rn();n!==i;)t.push(n),n=rn()
if(t!==i)if((n=zt())!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
r!==i?(xt=e,e=t=w(n)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u
if(e===i){for(e=wt,t=[],n=rn();n!==i;)t.push(n),n=rn()
if(t!==i)if((n=qt())!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
r!==i?(xt=e,e=t=w(n)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}return Tt[a]={nextPos:wt,result:e},e}function Dt(){var e,n,r,o,a,s,c,f=49*wt+8,l=Tt[f]
if(l)return wt=l.nextPos,l.result
for(e=wt,n=[],r=rn();r!==i;)n.push(r),r=rn()
if(n!==i)if((r=zt())!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i)if(46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),a!==i){for(s=[],c=rn();c!==i;)s.push(c),c=rn()
s!==i?(xt=e,e=n=w(r)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u
if(e===i){for(e=wt,n=[],r=rn();r!==i;)n.push(r),r=rn()
if(n!==i)if((r=qt())!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i)if(46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),a!==i){for(s=[],c=rn();c!==i;)s.push(c),c=rn()
s!==i?(xt=e,e=n=w(r)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u}return Tt[f]={nextPos:wt,result:e},e}function zt(){var e,t,n,r=49*wt+10,o=Tt[r]
if(o)return wt=o.nextPos,o.result
if(e=wt,t=[],(n=fn())!==i)for(;n!==i;)t.push(n),n=fn()
else t=u
return t!==i&&(xt=e,t=O(t)),e=t,Tt[r]={nextPos:wt,result:e},e}function qt(){var e,t,n=49*wt+11,r=Tt[n]
return r?(wt=r.nextPos,r.result):(e=wt,(t=Kt())!==i&&(xt=e,t=T(t)),(e=t)===i&&(e=wt,(t=Ht())!==i&&(xt=e,t=T(t)),e=t),Tt[n]={nextPos:wt,result:e},e)}function Ft(){var e,n=49*wt+12,r=Tt[n]
return r?(wt=r.nextPos,r.result):((e=function(){var e,n=49*wt+13,r=Tt[n]
return r?(wt=r.nextPos,r.result):((e=function(){var e,n,r,o,a,s=49*wt+14,c=Tt[s]
if(c)return wt=c.nextPos,c.result
if(e=wt,t.substr(wt,3)===M?(n=M,wt+=3):(n=i,0===Ot&&Ct(P)),n!==i)if((r=on())===i&&(r=I),r!==i){for(o=[],a=Xt();a!==i;)o.push(a),a=Xt()
o!==i?(t.substr(wt,3)===M?(a=M,wt+=3):(a=i,0===Ot&&Ct(P)),a!==i?(xt=e,n=C(o),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u
return Tt[s]={nextPos:wt,result:e},e}())===i&&(e=Kt())===i&&(e=function(){var e,n,r,o,a,s=49*wt+16,c=Tt[s]
if(c)return wt=c.nextPos,c.result
if(e=wt,t.substr(wt,3)===j?(n=j,wt+=3):(n=i,0===Ot&&Ct(N)),n!==i)if((r=on())===i&&(r=I),r!==i){for(o=[],a=Wt();a!==i;)o.push(a),a=Wt()
o!==i?(t.substr(wt,3)===j?(a=j,wt+=3):(a=i,0===Ot&&Ct(N)),a!==i?(xt=e,n=C(o),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u
return Tt[s]={nextPos:wt,result:e},e}())===i&&(e=Ht()),Tt[n]={nextPos:wt,result:e},e)}())===i&&(e=function(){var e,n,r,o,a,s=49*wt+38,c=Tt[s]
return c?(wt=c.nextPos,c.result):(e=wt,(n=nn())!==i?(84===t.charCodeAt(wt)?(r=Oe,wt++):(r=i,0===Ot&&Ct(Te)),r!==i&&(o=function(){var e,n,r,o,a,s,c,f,l,h,d,p=49*wt+36,v=Tt[p]
return v?(wt=v.nextPos,v.result):(e=wt,n=wt,(r=cn())!==i&&(o=cn())!==i?(58===t.charCodeAt(wt)?(a=Se,wt++):(a=i,0===Ot&&Ct(Ee)),a!==i&&(s=cn())!==i&&(c=cn())!==i?(58===t.charCodeAt(wt)?(f=Se,wt++):(f=i,0===Ot&&Ct(Ee)),f!==i&&(l=cn())!==i&&(h=cn())!==i?((d=tn())===i&&(d=I),d!==i?n=r=[r,o,a,s,c,f,l,h,d]:(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u),n!==i&&(xt=e,n=Ae(n)),e=n,Tt[p]={nextPos:wt,result:e},e)}())!==i?(90===t.charCodeAt(wt)?(a=Me,wt++):(a=i,0===Ot&&Ct(Pe)),a!==i?(xt=e,n=Ie(n,o),e=n):(wt=e,e=u)):(wt=e,e=u)):(wt=e,e=u),e===i&&(e=wt,(n=nn())!==i?(84===t.charCodeAt(wt)?(r=Oe,wt++):(r=i,0===Ot&&Ct(Te)),r!==i&&(o=function(){var e,n,r,o,a,s,c,f,l,h,d,p,v,b,g,m,y,_=49*wt+37,w=Tt[_]
return w?(wt=w.nextPos,w.result):(e=wt,n=wt,(r=cn())!==i&&(o=cn())!==i?(58===t.charCodeAt(wt)?(a=Se,wt++):(a=i,0===Ot&&Ct(Ee)),a!==i&&(s=cn())!==i&&(c=cn())!==i?(58===t.charCodeAt(wt)?(f=Se,wt++):(f=i,0===Ot&&Ct(Ee)),f!==i&&(l=cn())!==i&&(h=cn())!==i?((d=tn())===i&&(d=I),d!==i?(45===t.charCodeAt(wt)?(p=J,wt++):(p=i,0===Ot&&Ct(ee)),p===i&&(43===t.charCodeAt(wt)?(p=Y,wt++):(p=i,0===Ot&&Ct(G))),p!==i&&(v=cn())!==i&&(b=cn())!==i?(58===t.charCodeAt(wt)?(g=Se,wt++):(g=i,0===Ot&&Ct(Ee)),g!==i&&(m=cn())!==i&&(y=cn())!==i?n=r=[r,o,a,s,c,f,l,h,d,p,v,b,g,m,y]:(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u),n!==i&&(xt=e,n=Ae(n)),e=n,Tt[_]={nextPos:wt,result:e},e)}())!==i?(xt=e,n=Ce(n,o),e=n):(wt=e,e=u)):(wt=e,e=u)),Tt[s]={nextPos:wt,result:e},e)}())===i&&(e=function(){var e,n,r,o,a=49*wt+23,s=Tt[a]
return s?(wt=s.nextPos,s.result):(e=wt,(n=Qt())===i&&(n=Yt()),n!==i?(101===t.charCodeAt(wt)?(r=H,wt++):(r=i,0===Ot&&Ct(V)),r===i&&(69===t.charCodeAt(wt)?(r=$,wt++):(r=i,0===Ot&&Ct(X))),r!==i&&(o=Yt())!==i?(xt=e,n=W(n,o),e=n):(wt=e,e=u)):(wt=e,e=u),e===i&&(e=wt,(n=Qt())!==i&&(xt=e,n=Q(n)),e=n),Tt[a]={nextPos:wt,result:e},e)}())===i&&(e=function(){var e,t,n=49*wt+25,r=Tt[n]
return r?(wt=r.nextPos,r.result):(e=wt,(t=Yt())!==i&&(xt=e,t=ne(t)),e=t,Tt[n]={nextPos:wt,result:e},e)}())===i&&(e=function(){var e,n,r=49*wt+27,o=Tt[r]
return o?(wt=o.nextPos,o.result):(e=wt,t.substr(wt,4)===re?(n=re,wt+=4):(n=i,0===Ot&&Ct(ie)),n!==i&&(xt=e,n=oe()),(e=n)===i&&(e=wt,t.substr(wt,5)===ae?(n=ae,wt+=5):(n=i,0===Ot&&Ct(se)),n!==i&&(xt=e,n=ue()),e=n),Tt[r]={nextPos:wt,result:e},e)}())===i&&(e=function(){var e,n,r,o,a,s=49*wt+28,c=Tt[s]
if(c)return wt=c.nextPos,c.result
if(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i){for(r=[],o=Jt();o!==i;)r.push(o),o=Jt()
r!==i?(93===t.charCodeAt(wt)?(o=v,wt++):(o=i,0===Ot&&Ct(b)),o!==i?(xt=e,n=ce(),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
if(e===i&&(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i?((r=Gt())===i&&(r=I),r!==i?(93===t.charCodeAt(wt)?(o=v,wt++):(o=i,0===Ot&&Ct(b)),o!==i?(xt=e,n=fe(r),e=n):(wt=e,e=u)):(wt=e,e=u)):(wt=e,e=u),e===i)){if(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i){if(r=[],(o=Zt())!==i)for(;o!==i;)r.push(o),o=Zt()
else r=u
r!==i?(93===t.charCodeAt(wt)?(o=v,wt++):(o=i,0===Ot&&Ct(b)),o!==i?(xt=e,n=le(r),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
if(e===i)if(e=wt,91===t.charCodeAt(wt)?(n=d,wt++):(n=i,0===Ot&&Ct(p)),n!==i){if(r=[],(o=Zt())!==i)for(;o!==i;)r.push(o),o=Zt()
else r=u
r!==i&&(o=Gt())!==i?(93===t.charCodeAt(wt)?(a=v,wt++):(a=i,0===Ot&&Ct(b)),a!==i?(xt=e,n=he(r,o),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u}return Tt[s]={nextPos:wt,result:e},e}())===i&&(e=function(){var e,n,r,o,a,s,c=49*wt+32,f=Tt[c]
if(f)return wt=f.nextPos,f.result
if(e=wt,123===t.charCodeAt(wt)?(n=be,wt++):(n=i,0===Ot&&Ct(ge)),n!==i){for(r=[],o=rn();o!==i;)r.push(o),o=rn()
if(r!==i){for(o=[],a=en();a!==i;)o.push(a),a=en()
if(o!==i){for(a=[],s=rn();s!==i;)a.push(s),s=rn()
a!==i?(125===t.charCodeAt(wt)?(s=me,wt++):(s=i,0===Ot&&Ct(ye)),s!==i?(xt=e,n=_e(o),e=n):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u}else wt=e,e=u}else wt=e,e=u
return Tt[c]={nextPos:wt,result:e},e}()),Tt[n]={nextPos:wt,result:e},e)}function Kt(){var e,n,r,o,a=49*wt+15,s=Tt[a]
if(s)return wt=s.nextPos,s.result
if(e=wt,34===t.charCodeAt(wt)?(n=R,wt++):(n=i,0===Ot&&Ct(B)),n!==i){for(r=[],o=Vt();o!==i;)r.push(o),o=Vt()
r!==i?(34===t.charCodeAt(wt)?(o=R,wt++):(o=i,0===Ot&&Ct(B)),o!==i?(xt=e,e=n=C(r)):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
return Tt[a]={nextPos:wt,result:e},e}function Ht(){var e,n,r,o,a=49*wt+17,s=Tt[a]
if(s)return wt=s.nextPos,s.result
if(e=wt,39===t.charCodeAt(wt)?(n=L,wt++):(n=i,0===Ot&&Ct(U)),n!==i){for(r=[],o=$t();o!==i;)r.push(o),o=$t()
r!==i?(39===t.charCodeAt(wt)?(o=L,wt++):(o=i,0===Ot&&Ct(U)),o!==i?(xt=e,e=n=C(r)):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
return Tt[a]={nextPos:wt,result:e},e}function Vt(){var e,n,r,o=49*wt+18,a=Tt[o]
return a?(wt=a.nextPos,a.result):((e=hn())===i&&(e=wt,n=wt,Ot++,34===t.charCodeAt(wt)?(r=R,wt++):(r=i,0===Ot&&Ct(B)),Ot--,r===i?n=l:(wt=n,n=u),n!==i?(t.length>wt?(r=t.charAt(wt),wt++):(r=i,0===Ot&&Ct(h)),r!==i?(xt=e,e=n=D(r)):(wt=e,e=u)):(wt=e,e=u)),Tt[o]={nextPos:wt,result:e},e)}function $t(){var e,n,r,o=49*wt+19,a=Tt[o]
return a?(wt=a.nextPos,a.result):(e=wt,n=wt,Ot++,39===t.charCodeAt(wt)?(r=L,wt++):(r=i,0===Ot&&Ct(U)),Ot--,r===i?n=l:(wt=n,n=u),n!==i?(t.length>wt?(r=t.charAt(wt),wt++):(r=i,0===Ot&&Ct(h)),r!==i?(xt=e,e=n=D(r)):(wt=e,e=u)):(wt=e,e=u),Tt[o]={nextPos:wt,result:e},e)}function Xt(){var e,n,r,o=49*wt+20,a=Tt[o]
return a?(wt=a.nextPos,a.result):((e=hn())===i&&(e=function(){var e,n,r,o,a=49*wt+21,s=Tt[a]
if(s)return wt=s.nextPos,s.result
if(e=wt,92===t.charCodeAt(wt)?(n=q,wt++):(n=i,0===Ot&&Ct(F)),n!==i)if(on()!==i){for(r=[],o=an();o!==i;)r.push(o),o=an()
r!==i?(xt=e,n=K(),e=n):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u
return Tt[a]={nextPos:wt,result:e},e}())===i&&(e=wt,n=wt,Ot++,t.substr(wt,3)===M?(r=M,wt+=3):(r=i,0===Ot&&Ct(P)),Ot--,r===i?n=l:(wt=n,n=u),n!==i?(t.length>wt?(r=t.charAt(wt),wt++):(r=i,0===Ot&&Ct(h)),r!==i?(xt=e,e=n=z(r)):(wt=e,e=u)):(wt=e,e=u)),Tt[o]={nextPos:wt,result:e},e)}function Wt(){var e,n,r,o=49*wt+22,a=Tt[o]
return a?(wt=a.nextPos,a.result):(e=wt,n=wt,Ot++,t.substr(wt,3)===j?(r=j,wt+=3):(r=i,0===Ot&&Ct(N)),Ot--,r===i?n=l:(wt=n,n=u),n!==i?(t.length>wt?(r=t.charAt(wt),wt++):(r=i,0===Ot&&Ct(h)),r!==i?(xt=e,e=n=D(r)):(wt=e,e=u)):(wt=e,e=u),Tt[o]={nextPos:wt,result:e},e)}function Qt(){var e,n,r,o,a,s,c=49*wt+24,f=Tt[c]
return f?(wt=f.nextPos,f.result):(e=wt,43===t.charCodeAt(wt)?(n=Y,wt++):(n=i,0===Ot&&Ct(G)),n===i&&(n=I),n!==i?(r=wt,(o=ln())!==i?(46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),a!==i&&(s=ln())!==i?r=o=[o,a,s]:(wt=r,r=u)):(wt=r,r=u),r!==i?(xt=e,e=n=Z(r)):(wt=e,e=u)):(wt=e,e=u),e===i&&(e=wt,45===t.charCodeAt(wt)?(n=J,wt++):(n=i,0===Ot&&Ct(ee)),n!==i?(r=wt,(o=ln())!==i?(46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),a!==i&&(s=ln())!==i?r=o=[o,a,s]:(wt=r,r=u)):(wt=r,r=u),r!==i?(xt=e,e=n=te(r)):(wt=e,e=u)):(wt=e,e=u)),Tt[c]={nextPos:wt,result:e},e)}function Yt(){var e,n,r,o,a,s=49*wt+26,c=Tt[s]
if(c)return wt=c.nextPos,c.result
if(e=wt,43===t.charCodeAt(wt)?(n=Y,wt++):(n=i,0===Ot&&Ct(G)),n===i&&(n=I),n!==i){if(r=[],(o=cn())!==i)for(;o!==i;)r.push(o),o=cn()
else r=u
r!==i?(o=wt,Ot++,46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),Ot--,a===i?o=l:(wt=o,o=u),o!==i?(xt=e,e=n=Z(r)):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
if(e===i)if(e=wt,45===t.charCodeAt(wt)?(n=J,wt++):(n=i,0===Ot&&Ct(ee)),n!==i){if(r=[],(o=cn())!==i)for(;o!==i;)r.push(o),o=cn()
else r=u
r!==i?(o=wt,Ot++,46===t.charCodeAt(wt)?(a=x,wt++):(a=i,0===Ot&&Ct(k)),Ot--,a===i?o=l:(wt=o,o=u),o!==i?(xt=e,e=n=te(r)):(wt=e,e=u)):(wt=e,e=u)}else wt=e,e=u
return Tt[s]={nextPos:wt,result:e},e}function Gt(){var e,t,n,r,o,a=49*wt+29,s=Tt[a]
if(s)return wt=s.nextPos,s.result
for(e=wt,t=[],n=Jt();n!==i;)t.push(n),n=Jt()
if(t!==i)if((n=Ft())!==i){for(r=[],o=Jt();o!==i;)r.push(o),o=Jt()
r!==i?(xt=e,e=t=de(n)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u
return Tt[a]={nextPos:wt,result:e},e}function Zt(){var e,n,r,o,a,s,c,f=49*wt+30,l=Tt[f]
if(l)return wt=l.nextPos,l.result
for(e=wt,n=[],r=Jt();r!==i;)n.push(r),r=Jt()
if(n!==i)if((r=Ft())!==i){for(o=[],a=Jt();a!==i;)o.push(a),a=Jt()
if(o!==i)if(44===t.charCodeAt(wt)?(a=pe,wt++):(a=i,0===Ot&&Ct(ve)),a!==i){for(s=[],c=Jt();c!==i;)s.push(c),c=Jt()
s!==i?(xt=e,e=n=de(r)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u
return Tt[f]={nextPos:wt,result:e},e}function Jt(){var e,t=49*wt+31,n=Tt[t]
return n?(wt=n.nextPos,n.result):((e=rn())===i&&(e=on())===i&&(e=Nt()),Tt[t]={nextPos:wt,result:e},e)}function en(){var e,n,r,o,a,s,c,f,l,h,d,p=49*wt+33,v=Tt[p]
if(v)return wt=v.nextPos,v.result
for(e=wt,n=[],r=rn();r!==i;)n.push(r),r=rn()
if(n!==i)if((r=zt())!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i)if(61===t.charCodeAt(wt)?(a=S,wt++):(a=i,0===Ot&&Ct(E)),a!==i){for(s=[],c=rn();c!==i;)s.push(c),c=rn()
if(s!==i)if((c=Ft())!==i){for(f=[],l=rn();l!==i;)f.push(l),l=rn()
if(f!==i)if(44===t.charCodeAt(wt)?(l=pe,wt++):(l=i,0===Ot&&Ct(ve)),l!==i){for(h=[],d=rn();d!==i;)h.push(d),d=rn()
h!==i?(xt=e,e=n=we(r,c)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u
if(e===i){for(e=wt,n=[],r=rn();r!==i;)n.push(r),r=rn()
if(n!==i)if((r=zt())!==i){for(o=[],a=rn();a!==i;)o.push(a),a=rn()
if(o!==i)if(61===t.charCodeAt(wt)?(a=S,wt++):(a=i,0===Ot&&Ct(E)),a!==i){for(s=[],c=rn();c!==i;)s.push(c),c=rn()
s!==i&&(c=Ft())!==i?(xt=e,e=n=we(r,c)):(wt=e,e=u)}else wt=e,e=u
else wt=e,e=u}else wt=e,e=u
else wt=e,e=u}return Tt[p]={nextPos:wt,result:e},e}function tn(){var e,n,r,o=49*wt+34,a=Tt[o]
return a?(wt=a.nextPos,a.result):(e=wt,46===t.charCodeAt(wt)?(n=x,wt++):(n=i,0===Ot&&Ct(k)),n!==i&&(r=ln())!==i?(xt=e,e=n=xe(r)):(wt=e,e=u),Tt[o]={nextPos:wt,result:e},e)}function nn(){var e,n,r,o,a,s,c,f,l,h,d,p,v=49*wt+35,b=Tt[v]
return b?(wt=b.nextPos,b.result):(e=wt,n=wt,(r=cn())!==i&&(o=cn())!==i&&(a=cn())!==i&&(s=cn())!==i?(45===t.charCodeAt(wt)?(c=J,wt++):(c=i,0===Ot&&Ct(ee)),c!==i&&(f=cn())!==i&&(l=cn())!==i?(45===t.charCodeAt(wt)?(h=J,wt++):(h=i,0===Ot&&Ct(ee)),h!==i&&(d=cn())!==i&&(p=cn())!==i?n=r=[r,o,a,s,c,f,l,h,d,p]:(wt=n,n=u)):(wt=n,n=u)):(wt=n,n=u),n!==i&&(xt=e,n=ke(n)),e=n,Tt[v]={nextPos:wt,result:e},e)}function rn(){var e,n=49*wt+39,r=Tt[n]
return r?(wt=r.nextPos,r.result):(Re.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=i,0===Ot&&Ct(Be)),Tt[n]={nextPos:wt,result:e},e)}function on(){var e,n,r,o=49*wt+40,a=Tt[o]
return a?(wt=a.nextPos,a.result):(10===t.charCodeAt(wt)?(e=je,wt++):(e=i,0===Ot&&Ct(Ne)),e===i&&(e=wt,13===t.charCodeAt(wt)?(n=Le,wt++):(n=i,0===Ot&&Ct(Ue)),n!==i?(10===t.charCodeAt(wt)?(r=je,wt++):(r=i,0===Ot&&Ct(Ne)),r!==i?e=n=[n,r]:(wt=e,e=u)):(wt=e,e=u)),Tt[o]={nextPos:wt,result:e},e)}function an(){var e,t=49*wt+41,n=Tt[t]
return n?(wt=n.nextPos,n.result):((e=on())===i&&(e=rn()),Tt[t]={nextPos:wt,result:e},e)}function sn(){var e,n,r=49*wt+42,o=Tt[r]
return o?(wt=o.nextPos,o.result):(e=wt,Ot++,t.length>wt?(n=t.charAt(wt),wt++):(n=i,0===Ot&&Ct(h)),Ot--,n===i?e=l:(wt=e,e=u),Tt[r]={nextPos:wt,result:e},e)}function un(){var e,n=49*wt+43,r=Tt[n]
return r?(wt=r.nextPos,r.result):(De.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=i,0===Ot&&Ct(ze)),Tt[n]={nextPos:wt,result:e},e)}function cn(){var e,n,r=49*wt+44,o=Tt[r]
return o?(wt=o.nextPos,o.result):(qe.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=i,0===Ot&&Ct(Fe)),e===i&&(e=wt,95===t.charCodeAt(wt)?(n=Ke,wt++):(n=i,0===Ot&&Ct(He)),n!==i&&(xt=e,n=Ve()),e=n),Tt[r]={nextPos:wt,result:e},e)}function fn(){var e,n=49*wt+45,r=Tt[n]
return r?(wt=r.nextPos,r.result):($e.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=i,0===Ot&&Ct(Xe)),Tt[n]={nextPos:wt,result:e},e)}function ln(){var e,t,n,r=49*wt+46,o=Tt[r]
if(o)return wt=o.nextPos,o.result
if(e=wt,t=[],(n=cn())!==i)for(;n!==i;)t.push(n),n=cn()
else t=u
return t!==i&&(xt=e,t=We(t)),e=t,Tt[r]={nextPos:wt,result:e},e}function hn(){var e,n,r=49*wt+47,o=Tt[r]
return o?(wt=o.nextPos,o.result):(e=wt,t.substr(wt,2)===Qe?(n=Qe,wt+=2):(n=i,0===Ot&&Ct(Ye)),n!==i&&(xt=e,n=Ge()),(e=n)===i&&(e=wt,t.substr(wt,2)===Ze?(n=Ze,wt+=2):(n=i,0===Ot&&Ct(Je)),n!==i&&(xt=e,n=et()),(e=n)===i&&(e=wt,t.substr(wt,2)===tt?(n=tt,wt+=2):(n=i,0===Ot&&Ct(nt)),n!==i&&(xt=e,n=rt()),(e=n)===i&&(e=wt,t.substr(wt,2)===it?(n=it,wt+=2):(n=i,0===Ot&&Ct(ot)),n!==i&&(xt=e,n=at()),(e=n)===i&&(e=wt,t.substr(wt,2)===st?(n=st,wt+=2):(n=i,0===Ot&&Ct(ut)),n!==i&&(xt=e,n=ct()),(e=n)===i&&(e=wt,t.substr(wt,2)===ft?(n=ft,wt+=2):(n=i,0===Ot&&Ct(lt)),n!==i&&(xt=e,n=ht()),(e=n)===i&&(e=wt,t.substr(wt,2)===dt?(n=dt,wt+=2):(n=i,0===Ot&&Ct(pt)),n!==i&&(xt=e,n=vt()),(e=n)===i&&(e=function(){var e,n,r,o,a,s,c,f,l,h,d,p=49*wt+48,v=Tt[p]
return v?(wt=v.nextPos,v.result):(e=wt,t.substr(wt,2)===bt?(n=bt,wt+=2):(n=i,0===Ot&&Ct(gt)),n!==i?(r=wt,(o=un())!==i&&(a=un())!==i&&(s=un())!==i&&(c=un())!==i&&(f=un())!==i&&(l=un())!==i&&(h=un())!==i&&(d=un())!==i?r=o=[o,a,s,c,f,l,h,d]:(wt=r,r=u),r!==i?(xt=e,n=mt(r),e=n):(wt=e,e=u)):(wt=e,e=u),e===i&&(e=wt,t.substr(wt,2)===yt?(n=yt,wt+=2):(n=i,0===Ot&&Ct(_t)),n!==i?(r=wt,(o=un())!==i&&(a=un())!==i&&(s=un())!==i&&(c=un())!==i?r=o=[o,a,s,c]:(wt=r,r=u),r!==i?(xt=e,n=mt(r),e=n):(wt=e,e=u)):(wt=e,e=u)),Tt[p]={nextPos:wt,result:e},e)}()))))))),Tt[r]={nextPos:wt,result:e},e)}var dn=[]
function pn(e){dn.push(e)}function vn(e,t,n,r,i){var o={type:e,value:t,line:n(),column:r()}
return i&&(o.key=i),o}if((n=a())!==i&&wt===t.length)return n
throw n!==i&&wt<t.length&&Ct({type:"end",description:"end of input"}),Rt(null,At,Et)}}}()},function(e,t,n){"use strict"
e.exports={compile:function(e){var t=[],n=[],r="",i={},o=i
return function(e){for(var t,n=0;n<e.length;n++)switch((t=e[n]).type){case"Assign":s(t)
break
case"ObjectPath":f(t)
break
case"ArrayPath":l(t)}return i}(e)
function a(e,t,n){var r=new Error(e)
throw r.line=t,r.column=n,r}function s(e){var i,s=e.key,f=e.value,l=e.line,h=e.column
i=r?r+"."+s:s,void 0!==o[s]&&a("Cannot redefine existing key '"+i+"'.",l,h),o[s]=c(f),u(i)||(t.push(i),n.push(i))}function u(e){return-1!==t.indexOf(e)}function c(e){return"Array"===e.type?function(e){for(var t=null,n=0;n<e.length;n++){var r=e[n]
null===t?t=r.type:r.type!==t&&a("Cannot add value of type "+r.type+" to array of type "+t+".",r.line,r.column)}return e.map(c)}(e.value):"InlineTable"===e.type?function e(t){for(var n={},r=0;r<t.length;r++){var i=t[r]
"InlineTable"===i.value.type?n[i.key]=e(i.value.value):"InlineTableValue"===i.type&&(n[i.key]=c(i.value))}return n}(e.value):e.value}function f(e){var n=e.value,s=n.map(d).join("."),c=e.line,f=e.column
u(s)&&a("Cannot redefine existing key '"+n+"'.",c,f),t.push(s),o=h(i,n,{},c,f),r=n}function l(e){var n=e.value,s=n.map(d).join("."),c=e.line,f=e.column
if(u(s)||t.push(s),(t=t.filter(function(e){return 0!==e.indexOf(s)})).push(s),o=h(i,n,[],c,f),r=s,o instanceof Array){var l={}
o.push(l),o=l}else a("Cannot redefine existing key '"+n+"'.",c,f)}function h(e,t,r,i,o){for(var s=[],u="",c=(t.join("."),e),f=0;f<t.length;f++){var l=t[f]
s.push(l),u=s.join("."),void 0===c[l]?f===t.length-1?c[l]=r:c[l]={}:f!==t.length-1&&n.indexOf(u)>-1&&a("Cannot redefine existing key '"+u+"'.",i,o),(c=c[l])instanceof Array&&c.length&&f<t.length-1&&(c=c[c.length-1])}return c}function d(e){return e.indexOf(".")>-1?'"'+e+'"':e}}}},function(e,t,n){(function(t,n){var r
r=function(){"use strict"
function e(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,o=void 0,a=void 0,s=function(e,t){p[i]=e,p[i+1]=t,2===(i+=2)&&(a?a(v):_())},u="undefined"!=typeof window?window:void 0,c=u||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function d(){var e=setTimeout
return function(){return e(v,1)}}var p=new Array(1e3)
function v(){for(var e=0;e<i;e+=2){(0,p[e])(p[e+1]),p[e]=void 0,p[e+1]=void 0}i=0}var b,g,m,y,_=void 0
function w(e,t){var n=this,r=new this.constructor(S)
void 0===r[k]&&D(r)
var i=n._state
if(i){var o=arguments[i-1]
s(function(){return L(i,r,o,n._result)})}else j(n,r,e,t)
return r}function x(e){if(e&&"object"==typeof e&&e.constructor===this)return e
var t=new this(S)
return I(t,e),t}l?_=function(){return t.nextTick(v)}:f?(g=0,m=new f(v),y=document.createTextNode(""),m.observe(y,{characterData:!0}),_=function(){y.data=g=++g%2}):h?((b=new MessageChannel).port1.onmessage=v,_=function(){return b.port2.postMessage(0)}):_=void 0===u?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(v)}:d()}catch(e){return d()}}():d()
var k=Math.random().toString(36).substring(2)
function S(){}var E=void 0,A=1,O=2,T={error:null}
function M(e){try{return e.then}catch(e){return T.error=e,T}}function P(t,n,r){n.constructor===t.constructor&&r===w&&n.constructor.resolve===x?function(e,t){t._state===A?R(e,t._result):t._state===O?B(e,t._result):j(t,void 0,function(t){return I(e,t)},function(t){return B(e,t)})}(t,n):r===T?(B(t,T.error),T.error=null):void 0===r?R(t,n):e(r)?function(e,t,n){s(function(e){var r=!1,i=function(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}(n,t,function(n){r||(r=!0,t!==n?I(e,n):R(e,n))},function(t){r||(r=!0,B(e,t))},e._label)
!r&&i&&(r=!0,B(e,i))},e)}(t,n,r):R(t,n)}function I(e,t){var n,r
e===t?B(e,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?R(e,t):P(e,t,M(t)))}function C(e){e._onerror&&e._onerror(e._result),N(e)}function R(e,t){e._state===E&&(e._result=t,e._state=A,0!==e._subscribers.length&&s(N,e))}function B(e,t){e._state===E&&(e._state=O,e._result=t,s(C,e))}function j(e,t,n,r){var i=e._subscribers,o=i.length
e._onerror=null,i[o]=t,i[o+A]=n,i[o+O]=r,0===o&&e._state&&s(N,e)}function N(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,i=void 0,o=e._result,a=0;a<t.length;a+=3)r=t[a],i=t[a+n],r?L(n,r,i,o):i(o)
e._subscribers.length=0}}function L(t,n,r,i){var o=e(r),a=void 0,s=void 0,u=void 0,c=void 0
if(o){if((a=function(e,t){try{return e(t)}catch(e){return T.error=e,T}}(r,i))===T?(c=!0,s=a.error,a.error=null):u=!0,n===a)return void B(n,new TypeError("A promises callback cannot return that same promise."))}else a=i,u=!0
n._state!==E||(o&&u?I(n,a):c?B(n,s):t===A?R(n,a):t===O&&B(n,a))}var U=0
function D(e){e[k]=U++,e._state=void 0,e._result=void 0,e._subscribers=[]}var z=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(S),this.promise[k]||D(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&R(this.promise,this._result))):B(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===E&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===x){var i=M(e)
if(i===w&&e._state!==E)this._settledAt(e._state,t,e._result)
else if("function"!=typeof i)this._remaining--,this._result[t]=e
else if(n===q){var o=new n(S)
P(o,e,i),this._willSettleAt(o,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===E&&(this._remaining--,e===O?B(r,n):this._result[t]=n),0===this._remaining&&R(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
j(e,void 0,function(e){return n._settledAt(A,t,e)},function(e){return n._settledAt(O,t,e)})},e}(),q=function(){function t(e){this[k]=U++,this._result=this._state=void 0,this._subscribers=[],S!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){I(e,t)},function(t){B(e,t)})}catch(t){B(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this.constructor
return e(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}()
return q.prototype.then=w,q.all=function(e){return new z(this,e).promise},q.race=function(e){var t=this
return r(e)?new t(function(n,r){for(var i=e.length,o=0;o<i;o++)t.resolve(e[o]).then(n,r)}):new t(function(e,t){return t(new TypeError("You must pass an array to race."))})},q.resolve=x,q.reject=function(e){var t=new this(S)
return B(t,e),t},q._setScheduler=function(e){a=e},q._setAsap=function(e){s=e},q._asap=s,q.polyfill=function(){var e=void 0
if(void 0!==n)e=n
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var r=null
try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=q},q.Promise=q,q},e.exports=r()}).call(this,n(14),n(5))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.splitPath=function(e){var t=[]
return e.split("/").forEach(function(e){var n=parseInt(e,10)
isNaN(n)||(e.length>1&&"'"===e[e.length-1]&&(n+=2147483648),t.push(n))}),t},t.foreach=function(e,t){return Promise.resolve().then(function(){return function e(n,r,i){return n>=r.length?i:t(r[n],n).then(function(t){return i.push(t),e(n+1,r,i)})}(0,e,[])})},t.crc16xmodem=s,t.encodeEd25519PublicKey=function(t){var n=e.from(t),i=e.from([48]),o=e.concat([i,n]),a=e.alloc(2)
a.writeUInt16LE(s(o),0)
var u=e.concat([o,a])
return r.default.encode(u)},t.verifyEd25519Signature=function(e,t,n){return i.default.sign.detached.verify(new Uint8Array(e.toJSON().data),new Uint8Array(t.toJSON().data),new Uint8Array(n.toJSON().data))},t.hash=function(e){var t=new o.sha256
return t.update(e,"utf8"),t.digest()},t.checkStellarBip32Path=function(e){e.split("/").forEach(function(e){if(!e.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var r=a(n(174)),i=a(n(112)),o=n(52)
function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=void 0!==t?~~t:0,r=0;r<e.length;r++){var i=n>>>8&255
i^=255&e[r],n=n<<8&65535,n^=i^=i>>>4,n^=i=i<<5&65535,n^=i=i<<7&65535}return n}}).call(this,n(1).Buffer)},function(e,t,n){"use strict"
e.exports=n(513)},function(e,t,n){"use strict";(function(t){e.exports=c
var r=n(514),i="undefined"!=typeof navigator&&!!navigator.userAgent,o=i&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),a=i&&navigator.userAgent.match(/Edge\/1[2345]/),s=null
function u(e){return s||(s=new e(function(e,t){function n(){e({u2f:null,native:!0})}return i?o?n():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),a?n():"http:"===location.protocol?n():"undefined"==typeof MessageChannel?n():void r.isSupported(function(t){t?e({u2f:r,native:!1}):n()})):n()})),s}function c(e){return{isSupported:h.bind(e),ensureSupport:p.bind(e),register:v.bind(e),sign:b.bind(e),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function f(e,t){var n=null!=t?t.errorCode:1,r=c.ErrorNames[""+n],i=new Error(e)
return i.metaData={type:r,code:n},i}function l(e,t){var n={}
return n.promise=new e(function(e,r){n.resolve=e,n.reject=r,t.then(e,r)}),n.promise.cancel=function(t,r){u(e).then(function(e){r&&!e.native&&e.u2f.disconnect(),n.reject(f(t,{errorCode:-1}))})},n}function h(){return u(this).then(function(e){return!!e.u2f})}function d(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function p(){return u(this).then(d)}function v(e,t,n){var r=this
return Array.isArray(e)||(e=[e]),"number"==typeof t&&void 0===n&&(n=t,t=null),t||(t=[]),l(r,u(r).then(function(i){d(i)
var o=i.native,a=i.u2f
return new r(function(r,i){if(o){var s=e[0].appId
a.register(s,e,t,function(e){e.errorCode?i(f("Registration failed",e)):(delete e.errorCode,r(e))},n)}else a.register(e,t,function(e,t){e?i(e):t.errorCode?i(f("Registration failed",t)):r(t)},n)})})).promise}function b(e,t){var n=this
return Array.isArray(e)||(e=[e]),l(n,u(n).then(function(r){d(r)
var i=r.native,o=r.u2f
return new n(function(n,r){if(i){var a=e[0].appId,s=e[0].challenge
o.sign(a,s,e,function(e){e.errorCode?r(f("Sign failed",e)):(delete e.errorCode,n(e))},t)}else o.sign(e,function(e,t){e?r(e):t.errorCode?r(f("Sign failed",t)):n(t)},t)})})).promise}function g(e){c[e]=function(){if(!t.Promise)throw new Error("The platform doesn't natively support promises")
var n=[].slice.call(arguments)
return c(t.Promise)[e].apply(null,n)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},g("isSupported"),g("ensureSupport"),g("register"),g("sign")}).call(this,n(5))},function(e,t,n){"use strict"
var r=r||{}
e.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]}
chrome.runtime.sendMessage(r.EXTENSION_ID,t,function(){chrome.runtime.lastError?r.getIframePort_(e):r.getChromeRuntimePort_(e)})}else r.getIframePort_(e)},r.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0})
setTimeout(function(){e(null,new r.WrappedChromeRuntimePort_(t))},0)},r.WrappedChromeRuntimePort_=function(e){this.port_=e},r.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var n=e.toLowerCase()
"message"==n||"onmessage"==n?this.port_.onMessage.addListener(function(e){t({data:e})}):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(e){var t="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe")
n.src=t+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n)
var i=!1,o=new MessageChannel,a=function(t){"ready"==t.data?(o.port1.removeEventListener("message",a),i||(i=!0,e(null,o.port1))):console.error('First event on iframe port was not "ready"')}
o.port1.addEventListener("message",a),o.port1.start(),n.addEventListener("load",function(){n.contentWindow.postMessage("init",t,[o.port2])}),setTimeout(function(){i||(i=!0,e(new Error("IFrame extension not supported")))},200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(e){r.port_?e(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort(function(e,t){for(e||(r.port_=t,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(e,t)}),r.waitingForPort_.push(e))},r.responseHandler_=function(e){var t=e.data,n=t.requestId
if(n&&r.callbackMap_[n]){var i=r.callbackMap_[n]
delete r.callbackMap_[n],i(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(e){r.getPortSingleton_(function(t,n){e(!t)})},r.sign=function(e,t,n){r.getPortSingleton_(function(i,o){if(i)return t(i)
var a=++r.reqCounter_
r.callbackMap_[a]=t
var s={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:void 0!==n?n:r.EXTENSION_TIMEOUT_SEC,requestId:a}
o.postMessage(s)})},r.register=function(e,t,n,i){r.getPortSingleton_(function(o,a){if(o)return n(o)
var s=++r.reqCounter_
r.callbackMap_[s]=n
var u={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:void 0!==i?i:r.EXTENSION_TIMEOUT_SEC,requestId:s}
a.postMessage(u)})}},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.StatusCodes=void 0
var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
t.getAltStatusMessage=f,t.TransportError=l,t.TransportStatusError=h
var o,a=n(35),s=(o=a)&&o.__esModule?o:{default:o}
function u(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){return function r(i,o){try{var a=t[i](o),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)})
e(s)}("next")})}}var c=t.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function f(e){switch(e){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function l(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}function h(e){this.name="TransportStatusError"
var t=Object.keys(c).find(function(t){return c[t]===e})||"UNKNOWN_ERROR",n=f(e)||t,r=e.toString(16)
this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}l.prototype=new Error,h.prototype=new Error
var d=function(){function t(){var n,i=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=e.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new s.default,this.send=(n=u(regeneratorRuntime.mark(function e(t,n,o,a){var s,u,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.alloc(0),d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[c.OK]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.length>=256)){e.next=2
break}throw new l("data.length exceed 256 bytes limit. Got: "+f.length,"DataLengthTooBig")
case 2:return e.next=4,i.exchange(r.concat([r.from([t,n,o,a]),r.from([f.length]),f]))
case 4:if(s=e.sent,u=s.readUInt16BE(s.length-2),d.some(function(e){return e===u})){e.next=8
break}throw new h(u)
case 8:return e.abrupt("return",s)
case 9:case"end":return e.stop()}},e,i)})),function(e,t,r,i){return n.apply(this,arguments)}),this._appAPIlock=null}return i(t,[{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(t=this._events).emit.apply(t,[e].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(r)))}},{key:"setDebugMode",value:function(e){this.debug="function"==typeof e?e:e?function(e){return console.log(e)}:null}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,n){var r=!0,i=!1,o=void 0
try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value
e[u]=this.decorateAppAPIMethod(u,e[u],e,n)}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}},{key:"decorateAppAPIMethod",value:function(e,t,n,r){var i,o=this
return i=u(regeneratorRuntime.mark(function i(){for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u]
var c,f
return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(c=o._appAPIlock)){i.next=5
break}return f=new l("Ledger Device is busy (lock "+c+")","TransportLocked"),Object.assign(f,{currentLock:c,methodName:e}),i.abrupt("return",Promise.reject(f))
case 5:return i.prev=5,o._appAPIlock=e,o.setScrambleKey(r),i.next=10,t.apply(n,s)
case 10:return i.abrupt("return",i.sent)
case 11:return i.prev=11,o._appAPIlock=null,i.finish(11)
case 14:case"end":return i.stop()}},i,o,[[5,,11,14]])})),function(){return i.apply(this,arguments)}}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments[1]
return new Promise(function(r,i){var o=!1,a=e.listen({next:function(n){o=!0,a&&a.unsubscribe(),s&&clearTimeout(s),e.open(n.descriptor,t).then(r,i)},error:function(e){s&&clearTimeout(s),i(e)},complete:function(){s&&clearTimeout(s),o||i(new l(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=n?setTimeout(function(){a.unsubscribe(),i(new l(e.ErrorMessage_ListenTimeout,"ListenTimeout"))},n):null})}}]),t}()
d.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",d.ErrorMessage_NoDeviceFound="No Ledger device found",t.default=d}).call(this,n(5),n(1).Buffer)},function(e,t,n){"use strict"
var r=n(80)
n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".payment-view[data-v-2d2f5a4e] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-view .input-title[data-v-2d2f5a4e] {\n    position: relative;\n    background: steelblue;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2em;\n}\n.payment-view .input-title .back-button[data-v-2d2f5a4e] {\n      position: absolute;\n      top: 5px;\n      left: 0;\n}\n.payment-view .payment-content[data-v-2d2f5a4e] {\n    margin: 10px;\n}\n.payment-view .payment-content .own-wallet[data-v-2d2f5a4e] {\n      margin-top: 20px;\n      text-align: center;\n}\n.payment-view .payment-content .own-wallet .xlm-address[data-v-2d2f5a4e] {\n        font-size: 0.9em;\n        font-weight: bold;\n}\n.payment-view .payment-content .payment-start[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-start .title-start[data-v-2d2f5a4e] {\n        font-size: 1.2em;\n        margin-bottom: 8px;\n}\n.payment-view .payment-content .payment-nano .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-secret .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n",""])},function(e,t,n){var r=n(519)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.v-ripple__animation--enter {\n  transition: none;\n}\n.v-ripple__animation--in {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-ripple__animation--out {\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme--light.v-btn {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-btn.v-btn--disabled {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled .v-icon,\n.theme--light.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #f5f5f5;\n}\n.theme--dark.v-btn {\n  color: #fff;\n}\n.theme--dark.v-btn.v-btn--disabled {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled .v-icon,\n.theme--dark.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #212121;\n}\n/** Base Spec */\n.v-btn {\n  align-items: center;\n  border-radius: 2px;\n  display: inline-flex;\n  height: 36px;\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n  margin: 6px 8px;\n  min-width: 88px;\n  outline: 0;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n}\n/** Psuedo */\n.v-btn:before {\n  border-radius: inherit;\n  color: inherit;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  opacity: 0.12;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n/** Content */\n.v-btn {\n  padding: 0 16px;\n}\n.v-btn--active,\n.v-btn:hover,\n.v-btn:focus {\n  position: relative;\n}\n.v-btn--active:before,\n.v-btn:hover:before,\n.v-btn:focus:before {\n  background-color: currentColor;\n}\n.v-btn__content {\n  align-items: center;\n  border-radius: inherit;\n  color: inherit;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  margin: 0 auto;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  white-space: nowrap;\n  width: inherit;\n}\n/** Sizes */\n.v-btn--small {\n  font-size: 13px;\n  height: 28px;\n  padding: 0 8px;\n}\n.v-btn--large {\n  font-size: 15px;\n  height: 44px;\n  padding: 0 32px;\n}\n/** Icons */\n.v-btn .v-btn__content .v-icon {\n  color: inherit;\n}\n/** Types */\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {\n  will-change: box-shadow;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);\n}\n.v-btn--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  justify-content: center;\n  min-width: 0;\n  width: 36px;\n}\n.v-btn--icon.v-btn--small {\n  width: 28px;\n}\n.v-btn--icon.v-btn--large {\n  width: 44px;\n}\n.v-btn--icon:before {\n  border-radius: 50%;\n}\n.v-btn--floating {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n}\n.v-btn--floating.v-btn--fixed,\n.v-btn--floating.v-btn--absolute {\n  z-index: 4;\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat) {\n  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);\n}\n.v-btn--floating .v-btn__content {\n  flex: 1 1 auto;\n  margin: 0;\n  height: 100%;\n}\n.v-btn--floating:after {\n  border-radius: 50%;\n}\n.v-btn--floating .v-btn__content :not(:only-child) {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  opacity: 1;\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child {\n  opacity: 0;\n  transform: rotate(-45deg);\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child,\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):first-child {\n  opacity: 0;\n  transform: rotate(45deg);\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):last-child {\n  opacity: 1;\n  transform: rotate(0);\n}\n.v-btn--floating .v-icon {\n  height: inherit;\n  width: inherit;\n}\n.v-btn--floating.v-btn--small {\n  height: 40px;\n  width: 40px;\n}\n.v-btn--floating.v-btn--small .v-icon {\n  font-size: 18px;\n}\n.v-btn--floating.v-btn--large {\n  height: 72px;\n  width: 72px;\n}\n.v-btn--floating.v-btn--large .v-icon {\n  font-size: 30px;\n}\n.v-btn--reverse .v-btn__content {\n  flex-direction: row-reverse;\n}\n.v-btn--reverse.v-btn--column .v-btn__content {\n  flex-direction: column-reverse;\n}\n.v-btn--fixed,\n.v-btn--absolute {\n  margin: 0;\n}\n.v-btn.v-btn--absolute {\n  position: absolute;\n}\n.v-btn.v-btn--fixed {\n  position: fixed;\n}\n.v-btn--top:not(.v-btn--absolute) {\n  top: 16px;\n}\n.v-btn--top.v-btn--absolute {\n  top: -28px;\n}\n.v-btn--top.v-btn--absolute.v-btn--small {\n  top: -20px;\n}\n.v-btn--top.v-btn--absolute.v-btn--large {\n  top: -36px;\n}\n.v-btn--bottom:not(.v-btn--absolute) {\n  bottom: 16px;\n}\n.v-btn--bottom.v-btn--absolute {\n  bottom: -28px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--small {\n  bottom: -20px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--large {\n  bottom: -36px;\n}\n.v-btn--left {\n  left: 16px;\n}\n.v-btn--right {\n  right: 16px;\n}\n/** Disabled */\n.v-btn.v-btn--disabled {\n  box-shadow: none !important;\n  pointer-events: none;\n}\n.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon {\n  transition: none;\n}\n.v-btn--icon {\n  padding: 0;\n}\n/** Loader */\n.v-btn--loader {\n  pointer-events: none;\n}\n.v-btn--loader .v-btn__content {\n  opacity: 0;\n}\n.v-btn__loading {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.v-btn__loading .v-icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.v-btn__loading .v-icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n/** Custom Buttons */\n.v-btn.v-btn--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.v-btn.v-btn--outline:hover {\n  box-shadow: none;\n}\n.v-btn--block {\n  display: flex;\n  flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.v-btn--round {\n  border-radius: 28px;\n}\n.v-btn--round:after {\n  border-radius: 28px;\n}\n/** Themes */\n.v-btn:not(.v-btn--outline).primary,\n.v-btn:not(.v-btn--outline).secondary,\n.v-btn:not(.v-btn--outline).accent,\n.v-btn:not(.v-btn--outline).success,\n.v-btn:not(.v-btn--outline).error,\n.v-btn:not(.v-btn--outline).warning,\n.v-btn:not(.v-btn--outline).info {\n  color: #fff;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location
if(!t)throw new Error("fixUrls requires window.location")
if(!e||"string"!=typeof e)return e
var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/")
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t})
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){var r=n(522)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".v-progress-circular {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.v-progress-circular svg {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n}\n.v-progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  transition: all 0.2s ease-in-out;\n}\n.v-progress-circular--indeterminate .v-progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 80, 200;\n  stroke-dashoffset: 0px;\n}\n.v-progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.v-progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.v-progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@-moz-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-webkit-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-o-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-moz-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""])},function(e,t,n){var r=n(524)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"/* Themes */\n.theme--light.v-icon {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-icon.v-icon--disabled {\n  color: rgba(0,0,0,0.38) !important;\n}\n.theme--dark.v-icon {\n  color: #fff;\n}\n.theme--dark.v-icon.v-icon--disabled {\n  color: rgba(255,255,255,0.5) !important;\n}\n.v-icon {\n  align-items: center;\n  display: inline-flex;\n  font-feature-settings: 'liga';\n  font-size: 24px;\n  justify-content: center;\n  line-height: 1;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  vertical-align: text-bottom;\n}\n.v-icon--right {\n  margin-left: 16px;\n}\n.v-icon--left {\n  margin-right: 16px;\n}\n.v-icon.v-icon.v-icon--link {\n  cursor: pointer;\n}\n.v-icon--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.v-icon--is-component {\n  height: 24px;\n}\n",""])},function(e,t,n){var r=n(526)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".theme--light.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(0,0,0,0.42);\n}\n.theme--light.v-text-field:not(.v-input--has-state) > .v-input__control > .v-input__slot:hover:before {\n  border-color: rgba(0,0,0,0.87);\n}\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(0,0,0,0.38) 0px, rgba(0,0,0,0.38) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__prefix,\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__suffix {\n  color: rgba(0,0,0,0.38);\n}\n.theme--light.v-text-field__prefix,\n.theme--light.v-text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {\n  border-radius: 2px;\n  background: #fff;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.16);\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #424242;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot .v-label,\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: #fff;\n}\n.theme--light.v-text-field--box > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.06);\n}\n.theme--light.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--light.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--light.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--light.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--light.v-text-field--box:not(.v-input--is-focused) > .v-input__control > .v-input__slot:hover {\n  background: rgba(0,0,0,0.12);\n}\n.theme--light.v-text-field--outline > .v-input__control > .v-input__slot {\n  border: 2px solid rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  border: 2px solid rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field:not(.v-input--has-state) > .v-input__control > .v-input__slot:hover:before {\n  border-color: #fff;\n}\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__prefix,\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__suffix {\n  color: rgba(255,255,255,0.5);\n}\n.theme--dark.v-text-field__prefix,\n.theme--dark.v-text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {\n  border-radius: 2px;\n  background: #424242;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: rgba(255,255,255,0.16);\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #fff;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot .v-label,\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field--box > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.1);\n}\n.theme--dark.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--dark.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--dark.v-text-field--box:not(.v-input--is-focused) > .v-input__control > .v-input__slot:hover {\n  background: rgba(0,0,0,0.2);\n}\n.theme--dark.v-text-field--outline > .v-input__control > .v-input__slot {\n  border: 2px solid rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  border: 2px solid #fff;\n}\n.application--is-rtl .v-text-field .v-label {\n  transform-origin: top right;\n}\n.application--is-rtl .v-text-field .v-counter {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__append-outer {\n  margin-left: 0;\n  margin-right: 16px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__prepend-outer {\n  margin-left: 16px;\n  margin-right: 0;\n}\n.application--is-rtl .v-text-field--reverse input {\n  text-align: left;\n}\n.application--is-rtl .v-text-field--reverse .v-label {\n  transform-origin: top left;\n}\n.application--is-rtl .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.application--is-rtl .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__prefix {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field {\n  padding-top: 12px;\n  margin-top: 4px;\n}\n.v-text-field input {\n  flex: 1 1 auto;\n  line-height: 20px;\n  padding: 8px 0 8px;\n  max-width: 100%;\n  min-width: 0px;\n  width: 100%;\n}\n.v-text-field .v-input__prepend-inner,\n.v-text-field .v-input__append-inner {\n  align-self: flex-start;\n  display: inline-flex;\n  margin-top: 4px;\n  line-height: 1;\n  user-select: none;\n}\n.v-text-field .v-input__prepend-inner {\n  margin-right: auto;\n  padding-right: 4px;\n}\n.v-text-field .v-input__append-inner {\n  margin-left: auto;\n  padding-left: 4px;\n}\n.v-text-field .v-counter {\n  margin-left: 8px;\n  white-space: nowrap;\n}\n.v-text-field .v-label {\n  max-width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  top: 6px;\n  transform-origin: top left;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.v-text-field .v-label--active {\n  max-width: 133%;\n  transform: translateY(-18px) scale(0.75);\n}\n.v-text-field > .v-input__control > .v-input__slot {\n  cursor: text;\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field > .v-input__control > .v-input__slot:before,\n.v-text-field > .v-input__control > .v-input__slot:after {\n  bottom: -1px;\n  content: '';\n  left: 0;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-text-field > .v-input__control > .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 0 0;\n}\n.v-text-field > .v-input__control > .v-input__slot:after {\n  border-color: currentColor;\n  border-style: solid;\n  border-width: thin 0 thin 0;\n  transform: scaleX(0);\n}\n.v-text-field__details {\n  display: flex;\n  flex: 1 0 auto;\n  max-width: 100%;\n  overflow: hidden;\n}\n.v-text-field__prefix,\n.v-text-field__suffix {\n  align-self: center;\n  cursor: default;\n}\n.v-text-field__prefix {\n  text-align: right;\n  padding-right: 4px;\n}\n.v-text-field__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n.v-text-field--reverse .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n}\n.v-text-field--box,\n.v-text-field--full-width,\n.v-text-field--outline {\n  position: relative;\n}\n.v-text-field--box > .v-input__control > .v-input__slot,\n.v-text-field--full-width > .v-input__control > .v-input__slot,\n.v-text-field--outline > .v-input__control > .v-input__slot {\n  align-items: stretch;\n  min-height: 56px;\n}\n.v-text-field--box input,\n.v-text-field--full-width input,\n.v-text-field--outline input {\n  margin-top: 22px;\n}\n.v-text-field--box.v-text-field--single-line input,\n.v-text-field--full-width.v-text-field--single-line input,\n.v-text-field--outline.v-text-field--single-line input {\n  margin-top: 12px;\n}\n.v-text-field--box .v-label,\n.v-text-field--full-width .v-label,\n.v-text-field--outline .v-label {\n  top: 18px;\n}\n.v-text-field--box .v-label--active,\n.v-text-field--full-width .v-label--active,\n.v-text-field--outline .v-label--active {\n  transform: translateY(-6px) scale(0.75);\n}\n.v-text-field--box > .v-input__control > .v-input__slot {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.v-text-field--box > .v-input__control > .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 thin 0;\n}\n.v-text-field.v-text-field--enclosed {\n  margin: 0;\n  padding: 0;\n}\n.v-text-field.v-text-field--enclosed:not(.v-text-field--box) .v-progress-linear__background {\n  display: none;\n}\n.v-text-field.v-text-field--enclosed .v-input__prepend-outer,\n.v-text-field.v-text-field--enclosed .v-input__prepend-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-outer {\n  margin-top: 16px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\n.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {\n  padding: 0 12px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details {\n  margin-bottom: 8px;\n}\n.v-text-field--reverse input {\n  text-align: right;\n}\n.v-text-field--reverse .v-label {\n  transform-origin: top right;\n}\n.v-text-field--reverse > .v-input__control > .v-input__slot,\n.v-text-field--reverse .v-text-field__slot {\n  flex-direction: row-reverse;\n}\n.v-text-field--solo > .v-input__control > .v-input__slot:before,\n.v-text-field--outline > .v-input__control > .v-input__slot:before,\n.v-text-field--full-width > .v-input__control > .v-input__slot:before,\n.v-text-field--solo > .v-input__control > .v-input__slot:after,\n.v-text-field--outline > .v-input__control > .v-input__slot:after,\n.v-text-field--full-width > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-text-field--outline {\n  margin-bottom: 16px;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline > .v-input__control > .v-input__slot {\n  background: transparent !important;\n  border-radius: 4px;\n}\n.v-text-field--outline .v-text-field__prefix {\n  max-height: 32px;\n}\n.v-text-field--outline .v-input__prepend-outer,\n.v-text-field--outline .v-input__append-outer {\n  margin-top: 18px;\n}\n.v-text-field--outline.v-input--is-dirty .v-text-field__prefix,\n.v-text-field--outline.v-input--is-focused .v-text-field__prefix,\n.v-text-field--outline.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline.v-input--is-focused > .v-input__control > .v-input__slot,\n.v-text-field--outline.v-input--has-state > .v-input__control > .v-input__slot {\n  border: 2px solid currentColor;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field.v-text-field--solo .v-label {\n  top: calc(50% - 10px);\n}\n.v-text-field.v-text-field--solo .v-input__control {\n  min-height: 48px;\n  padding: 0;\n}\n.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-text-field.v-text-field--solo .v-text-field__slot {\n  align-items: center;\n}\n.v-text-field.v-text-field--solo .v-input__append-inner,\n.v-text-field.v-text-field--solo .v-input__prepend-inner {\n  align-self: center;\n  margin-top: 0;\n}\n.v-text-field.v-text-field--solo .v-input__prepend-outer,\n.v-text-field.v-text-field--solo .v-input__append-outer {\n  margin-top: 12px;\n}\n.v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after {\n  transform: scaleX(1);\n}\n.v-text-field.v-input--has-state > .v-input__control > .v-input__slot:before {\n  border-color: currentColor;\n}\n",""])},function(e,t,n){var r=n(528)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"/* Theme */\n.theme--light.v-input:not(.v-input--is-disabled) input,\n.theme--light.v-input:not(.v-input--is-disabled) textarea {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-input input::placeholder,\n.theme--light.v-input textarea::placeholder {\n  color: rgba(0,0,0,0.38);\n}\n.theme--light.v-input--is-disabled .v-label,\n.theme--light.v-input--is-disabled input,\n.theme--light.v-input--is-disabled textarea {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-input:not(.v-input--is-disabled) input,\n.theme--dark.v-input:not(.v-input--is-disabled) textarea {\n  color: #fff;\n}\n.theme--dark.v-input input::placeholder,\n.theme--dark.v-input textarea::placeholder {\n  color: rgba(255,255,255,0.5);\n}\n.theme--dark.v-input--is-disabled .v-label,\n.theme--dark.v-input--is-disabled input,\n.theme--dark.v-input--is-disabled textarea {\n  color: rgba(255,255,255,0.5);\n}\n.v-input {\n  align-items: flex-start;\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 16px;\n  text-align: left;\n}\n.v-input .v-progress-linear {\n  top: calc(100% - 1px);\n  left: 0;\n  margin: 0;\n  position: absolute;\n}\n.v-input input {\n  max-height: 32px;\n}\n.v-input input:invalid,\n.v-input textarea:invalid {\n  box-shadow: none;\n}\n.v-input input:focus,\n.v-input textarea:focus,\n.v-input input:active,\n.v-input textarea:active {\n  outline: none;\n}\n.v-input .v-label {\n  height: 20px;\n  line-height: 20px;\n}\n.v-input__append-outer,\n.v-input__prepend-outer {\n  display: inline-flex;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  line-height: 1;\n}\n.v-input__append-outer .v-icon,\n.v-input__prepend-outer .v-icon {\n  user-select: none;\n}\n.v-input__append-outer {\n  margin-left: 9px;\n}\n.v-input__prepend-outer {\n  margin-right: 9px;\n}\n.v-input__control {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.v-input__icon {\n  align-items: center;\n  display: inline-flex;\n  height: 24px;\n  flex: 1 0 auto;\n  justify-content: center;\n  min-width: 24px;\n  width: 24px;\n}\n.v-input__icon--clear {\n  border-radius: 50%;\n}\n.v-input__slot {\n  align-items: center;\n  color: inherit;\n  display: flex;\n  margin-bottom: 8px;\n  min-height: inherit;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-input--is-disabled:not(.v-input--is-readonly) {\n  pointer-events: none;\n}\n.v-input--is-loading > .v-input__control > .v-input__slot:before,\n.v-input--is-loading > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-input--hide-details > .v-input__control > .v-input__slot {\n  margin-bottom: 0;\n}\n.v-input--has-state.error--text .v-label {\n  animation: shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(e,t,n){var r=n(530)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".theme--light.v-label {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-label--is-disabled {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-label {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-label--is-disabled {\n  color: rgba(255,255,255,0.5);\n}\n.v-label {\n  font-size: 16px;\n  line-height: 1;\n  min-height: 8px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(e,t,n){var r=n(532)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"/* Theme */\n.theme--light.v-messages {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-messages {\n  color: rgba(255,255,255,0.7);\n}\n.application--is-rtl .v-messages {\n  text-align: right;\n}\n.v-messages {\n  flex: 1 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  min-width: 1px;\n  position: relative;\n}\n.v-messages__message {\n  line-height: 1;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n}\n",""])},function(e,t,n){var r=n(534)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".v-progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.v-progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  z-index: 1;\n}\n.v-progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.v-progress-linear__bar__indeterminate .long,\n.v-progress-linear__bar__indeterminate .short {\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n  background-color: inherit;\n}\n.v-progress-linear__bar__indeterminate--active .long {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__bar__indeterminate--active .short {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transition: 0.3s ease-in;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .long {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .short {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n@-moz-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-o-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-moz-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-o-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-moz-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-webkit-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-o-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-moz-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-webkit-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-o-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n",""])},function(e,t,n){var r=n(536)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"/* Theme */\n.theme--light.v-counter {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-counter {\n  color: rgba(255,255,255,0.7);\n}\n.v-counter {\n  flex: 0 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  line-height: 1;\n}\n",""])},function(e,t,n){var r=n(538)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: #fff;\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: 0;\n  margin-left: -12px;\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 0;\n  padding-left: 12px;\n}\n.v-textarea textarea {\n  flex: 1 1 auto;\n  line-height: 18px;\n  max-width: 100%;\n  min-height: 32px;\n  outline: none;\n  padding: 7px 0 8px;\n  width: 100%;\n}\n.v-textarea .v-text-field__prefix {\n  padding-top: 4px;\n  align-self: start;\n}\n.v-textarea.v-text-field--full-width .v-text-field__slot textarea,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__slot textarea {\n  margin-top: 0;\n}\n.v-textarea.v-text-field--full-width .v-text-field__details,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__details {\n  bottom: 4px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: -12px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 12px;\n}\n.v-textarea.v-text-field--box .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed .v-text-field__prefix,\n.v-textarea.v-text-field--box textarea,\n.v-textarea.v-text-field--enclosed textarea {\n  margin-top: 24px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--single-line textarea,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea {\n  margin-top: 12px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-label,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label {\n  top: 18px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line.v-text-field--outline .v-input__control,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-text-field--outline .v-input__control {\n  padding-top: 0;\n}\n.v-textarea.v-text-field--solo {\n  align-items: flex-start;\n}\n.v-textarea.v-text-field--solo .v-input__prepend-inner,\n.v-textarea.v-text-field--solo .v-input__prepend-outer,\n.v-textarea.v-text-field--solo .v-input__append-inner,\n.v-textarea.v-text-field--solo .v-input__append-outer {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.v-textarea--auto-grow textarea {\n  overflow: hidden;\n}\n.v-textarea--no-resize textarea {\n  resize: none;\n}\n",""])},function(e,t,n){"use strict"
var r=n(81)
n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".main-container[data-v-e7f91608] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 10px;\n}\n.main-container .button-holder[data-v-e7f91608] {\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(e,t,n){var r=n(542)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".v-dialog {\n  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px;\n  overflow-y: auto;\n  pointer-events: auto;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: inherit;\n}\n.v-dialog__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 6;\n  outline: none;\n}\n.v-dialog:not(.v-dialog--fullscreen) {\n  max-height: 90%;\n}\n.v-dialog__activator {\n  cursor: pointer;\n}\n.v-dialog__activator * {\n  cursor: pointer;\n}\n.v-dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.v-dialog--animated {\n  animation-duration: 0.15s;\n  animation-name: animate-dialog;\n  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-dialog--fullscreen {\n  border-radius: 0;\n  margin: 0;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.v-dialog--fullscreen > .v-card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.v-dialog--scrollable {\n  display: flex;\n}\n.v-dialog--scrollable > .v-card {\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n}\n.v-dialog--scrollable > .v-card > .v-card__title,\n.v-dialog--scrollable > .v-card > .v-card__actions {\n  flex: 1 0 auto;\n}\n.v-dialog--scrollable > .v-card > .v-card__text {\n  overflow-y: auto;\n  backface-visibility: hidden;\n}\n@-moz-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n",""])},function(e,t,n){var r=n(544)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".v-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  z-index: 5;\n}\n.v-overlay--absolute {\n  position: absolute;\n}\n.v-overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: inherit;\n  transition-delay: 150ms;\n  width: 100%;\n}\n.v-overlay--active {\n  pointer-events: auto;\n  touch-action: none;\n}\n.v-overlay--active:before {\n  opacity: 0.46;\n}\n",""])},function(e,t,n){"use strict"
var r=n(82)
n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".main-container[data-v-0b55ff9d] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.main-container .start-choice[data-v-0b55ff9d] {\n    font-size: 1.6em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n.main-container .start-choice .button-holder[data-v-0b55ff9d] {\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n}\n.main-container .purchase-container[data-v-0b55ff9d] {\n    background-color: #ffffff;\n    width: 600px;\n    text-align: center;\n    padding: 50px;\n}\n.main-container .button-holder[data-v-0b55ff9d] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(e,t,n){"use strict"
var r=n(83)
n.n(r).a},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".dialog-header[data-v-53219965] {\n  width: 100%;\n  display: flex;\n  position: relative;\n  background: #1976d2;\n  padding-right: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  flex: 0 0 36px;\n}\n.dialog-header button[data-v-53219965] {\n    margin: 2px;\n}\n.dialog-header .left-side-buttons[data-v-53219965] {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n}\n.dialog-header .right-side-buttons[data-v-53219965] {\n    flex: 1 1 auto;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.dialog-header .dialog-header-text[data-v-53219965] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.dialog-header .dialog-header-text p[data-v-53219965] {\n      color: white;\n      font-weight: 600;\n      font-size: 1.1em;\n      margin: 0;\n      user-select: none;\n}\n",""])},function(e,t,n){var r=n(550)
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(15)(r,i)
r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,'.v-tooltip__content {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n  display: inline-block;\n  padding: 5px 8px;\n  position: absolute;\n  text-transform: initial;\n  width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-tooltip__content[class*="-active"] {\n  transition: 0.15s cubic-bezier(0.25, 0.8, 0.5, 1);\n  pointer-events: none;\n}\n@media only screen and (max-width: 959px) {\n  .v-tooltip .v-tooltip__content {\n    padding: 10px 16px;\n  }\n}\n',""])},function(e,t,n){"use strict"
n.r(t)
var r={}
n.r(r),n.d(r,"linear",function(){return K}),n.d(r,"easeInQuad",function(){return H}),n.d(r,"easeOutQuad",function(){return V}),n.d(r,"easeInOutQuad",function(){return $}),n.d(r,"easeInCubic",function(){return X}),n.d(r,"easeOutCubic",function(){return W}),n.d(r,"easeInOutCubic",function(){return Q}),n.d(r,"easeInQuart",function(){return Y}),n.d(r,"easeOutQuart",function(){return G}),n.d(r,"easeInOutQuart",function(){return Z}),n.d(r,"easeInQuint",function(){return J}),n.d(r,"easeOutQuint",function(){return ee}),n.d(r,"easeInOutQuint",function(){return te})
var i=n(4),o=n.n(i)
var a={bar:0,bottom:0,footer:0,insetFooter:0,left:0,right:0,top:0,components:{bar:{},bottom:{},footer:{},insetFooter:{},left:{},right:{},top:{}},bind:function(e,t,n){this.components[t]&&(this.components[t]=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,n),this.update(t))},unbind:function(e,t){null!=this.components[t][e]&&(delete this.components[t][e],this.update(t))},update:function(e){this[e]=Object.values(this.components[e]).reduce(function(e,t){return e+t},0)}},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={thresholds:{xs:600,sm:960,md:1280,lg:1920},scrollbarWidth:16}
function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return e||(e={}),o.a.extend({data:function(){return s({clientHeight:l(),clientWidth:f(),resizeTimeout:void 0},u,e)},computed:{breakpoint:function(){var e=this.clientWidth<this.thresholds.xs,t=this.clientWidth<this.thresholds.sm&&!e,n=this.clientWidth<this.thresholds.md-this.scrollbarWidth&&!(t||e),r=this.clientWidth<this.thresholds.lg-this.scrollbarWidth&&!(n||t||e),i=this.clientWidth>=this.thresholds.lg-this.scrollbarWidth,o=e,a=t,s=(e||t)&&!(n||r||i),u=!e&&(t||n||r||i),c=n,f=(e||t||n)&&!(r||i),l=!(e||t)&&(n||r||i),h=r,d=(e||t||n||r)&&!i,p=!(e||t||n)&&(r||i),v=i,b=void 0
switch(!0){case e:b="xs"
break
case t:b="sm"
break
case n:b="md"
break
case r:b="lg"
break
default:b="xl"}return{xs:e,sm:t,md:n,lg:r,xl:i,name:b,xsOnly:o,smOnly:a,smAndDown:s,smAndUp:u,mdOnly:c,mdAndDown:f,mdAndUp:l,lgOnly:h,lgAndDown:d,lgAndUp:p,xlOnly:v,width:this.clientWidth,height:this.clientHeight,thresholds:this.thresholds,scrollbarWidth:this.scrollbarWidth}}},created:function(){"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.setDimensions,200)},setDimensions:function(){this.clientHeight=l(),this.clientWidth=f()}}})}function f(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function l(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d={primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}
function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return!1!==e&&h({},d,e)}var v={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half"}
var b={md:{complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached"},mdi:{complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half"},fa:v,fa4:{complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o"},faSvg:function(e,t){var n={}
for(var r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}}
return n}("font-awesome-icon",v)}
function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"md",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.assign({},b[e]||b.md,t)}var m={minifyTheme:null,themeCache:null,customProperties:!1,cspNonce:null}
function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object.assign({},m,e)}var _={dataIterator:{rowsPerPageText:"Items per page:",rowsPerPageAll:"All",pageText:"{0}-{1} of {2}",noResultsText:"No matching records found",nextPage:"Next page",prevPage:"Previous page"},dataTable:{rowsPerPageText:"Rows per page:"},noDataText:"No data available"},w=("function"==typeof Symbol&&Symbol.iterator,Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})
function x(e,t){return Array.isArray(e)?e.concat(t):(e&&t.push(e),t)}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments[2]
return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render:function(t,n){var r="transition"+(n.props.group?"-group":"")
n.data=n.data||{},n.data.props={name:e,mode:n.props.mode},n.data.on=n.data.on||{},Object.isExtensible(n.data.on)||(n.data.on=w({},n.data.on))
var i=[],o=[]
i.push(function(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}),n.props.leaveAbsolute&&o.push(function(e){return e.style.position="absolute"}),n.props.hideOnLeave&&o.push(function(e){return e.style.display="none"})
var a=n.data.on,s=a.beforeEnter,u=a.leave
return n.data.on.beforeEnter=function(){return x(s,i)},n.data.on.leave=x(u,o),t(r,n.data,n.children)}}}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return{name:e,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",{props:w({},r.props,{name:e}),on:t},r.children)}}}function E(e,t,n){var r=t.length-1
if(r<0)return void 0===e?n:e
for(var i=0;i<r;i++){if(null==e)return n
e=e[t[i]]}return null==e?n:void 0===e[t[r]]?n:e[t[r]]}function A(e,t,n){return t&&t.constructor===String?E(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function O(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0
var t=+window.getComputedStyle(e).getPropertyValue("z-index")
return isNaN(t)?O(e.parentNode):t}function T(e,t){for(var n={},r=0;r<t.length;r++){var i=t[r]
void 0!==e[i]&&(n[i]=e[i])}return n}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==e||""===e?void 0:isNaN(+e)?String(e):""+Number(e)+t}function P(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var I=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34}),C="$vuetify.icons."
function R(e,t,n){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return
t.$_alreadyWarned.push(e)}return"[Vuetify] "+e+(t?function(e){if(e._isVue&&e.$parent){for(var t=[],n=0;e;){if(t.length>0){var r=t[t.length-1]
if(r.constructor===e.constructor){n++,e=e.$parent
continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(function(e,t){return""+(0===t?"---\x3e ":" ".repeat(5+2*t))+(Array.isArray(e)?D(e[0])+"... ("+e[1]+" recursive calls)":D(e))}).join("\n")}return"\n\n(found in "+D(e)+")"}(t):"")}function B(e,t,n){var r=R(e,t,n)
null!=r&&console.warn(r)}function j(e,t,n){var r=R(e,t,n)
null!=r&&console.error(r)}function N(e,t,n,r){B("'"+e+"' is deprecated, use '"+t+"' instead",n,r)}var L=/(?:^|[-_])(\w)/g,U=function(e){return e.replace(L,function(e){return e.toUpperCase()}).replace(/[-_]/g,"")}
function D(e,t){if(e.$root===e)return"<Root>"
var n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{},r=n.name||n._componentTag,i=n.__file
if(!r&&i){var o=i.match(/([^\/\\]+)\.vue$/)
r=o&&o[1]}return(r?"<"+U(r)+">":"<Anonymous>")+(i&&!1!==t?" at "+i:"")}var z="$vuetify.",q=Symbol("Lang fallback")
function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{locales:Object.assign({en:_},e.locales),current:e.current||"en",t:function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
return t.startsWith(z)?e.t?e.t.apply(e,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(r))):function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n.replace(z,""),o=A(t,i,q)
return o===q&&(r?(j('Translation key "'+i+'" not found in fallback'),o=n):(B('Translation key "'+i+'" not found, falling back to default'),o=e(_,n,!0))),o}(this.locales[this.current],t).replace(/\{(\d+)\}/g,function(e,t){return String(r[+t])}):t}}}var K=function(e){return e},H=function(e){return e*e},V=function(e){return e*(2-e)},$=function(e){return e<.5?2*e*e:(4-2*e)*e-1},X=function(e){return e*e*e},W=function(e){return--e*e*e+1},Q=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},Y=function(e){return e*e*e*e},G=function(e){return 1- --e*e*e*e},Z=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},J=function(e){return e*e*e*e*e},ee=function(e){return 1+--e*e*e*e*e},te=function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},ne={duration:500,offset:0,easing:"easeInOutCubic"}
function re(e,t){var n,r=void 0
if(null!=(n=e)&&n._isVue&&(e=e.$el),e instanceof Element)r=e.getBoundingClientRect().top+window.pageYOffset
else if("string"==typeof e){var i=document.querySelector(e)
if(!i)throw new TypeError('Target element "'+e+'" not found.')
r=i.getBoundingClientRect().top+window.pageYOffset}else{if("number"!=typeof e){var o=null==e?e:e.constructor.name
throw new TypeError("Target must be a Selector/Number/DOMElement/VueComponent, received "+o+" instead.")}r=e}return Math.round(Math.min(Math.max(r+t.offset,0),Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-(window.innerHeight||(document.documentElement||document.body).clientHeight)))}function ie(e,t){return new Promise(function(n,i){if("undefined"==typeof window)return i("Window is undefined")
var o=Object.assign({},ne,t),a=performance.now(),s=window.pageYOffset,u=re(e,o),c=u-s,f="function"==typeof o.easing?o.easing:r[o.easing]
if(!f)throw new TypeError("Easing function '"+o.easing+"' not found.")
window.requestAnimationFrame(function t(r){var i=Math.min(1,(r-a)/o.duration),l=Math.floor(s+c*f(i))
if(window.scrollTo(0,l),Math.round(window.pageYOffset)===u||1===i)return n(e)
window.requestAnimationFrame(t)})})}var oe={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!this.installed){this.installed=!0,o.a!==e&&j("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"),function(e,t){var n=t||"^2.5.18",r=n.split(".",3).map(function(e){return e.replace(/\D/g,"")}).map(Number),i=e.version.split(".",3).map(function(e){return parseInt(e,10)})
i[0]===r[0]&&(i[1]>r[1]||i[1]===r[1]&&i[2]>=r[2])||B("Vuetify requires Vue version "+n)}(e)
var n=F(t.lang)
if(e.prototype.$vuetify=new e({mixins:[c(t.breakpoint)],data:{application:a,dark:!1,icons:g(t.iconfont,t.icons),lang:n,options:y(t.options),rtl:t.rtl,theme:p(t.theme)},methods:{goTo:ie,t:n.t.bind(n)}}),t.directives)for(var r in t.directives)e.directive(r,t.directives[r])
!function t(n){if(n){for(var r in n){var i=n[r]
i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1}(t.components)}},version:"1.4.4"},ae=n(0),se=n(27),ue=n.n(se)
function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var fe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r
return t=e,r=[{key:"strlen",value:function(e){return e?e.length:0}},{key:"strOK",value:function(e){return!!e&&e.length>0}}],(n=null)&&ce(t.prototype,n),r&&ce(t,r),e}()
function le(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var he=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r
return t=e,r=[{key:"paymentOperation",value:function(e,t,n,r){var i={destination:e,asset:n,amount:t,source:r}
return ae.Operation.payment(i)}},{key:"manageOfferOperation",value:function(e,t,n,r){var i={selling:t,buying:e,amount:n,price:r,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return ae.Operation.manageOffer(i)}},{key:"setOptionsOperation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e
return n.source=t,ae.Operation.setOptions(n)}},{key:"manageDataOperation",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={name:e,value:fe.strOK(t)?t:null,source:n}
return ae.Operation.manageData(r)}},{key:"changeTrustOperation",value:function(e,t){var n={asset:e,limit:t,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return ae.Operation.changeTrust(n)}},{key:"allowTrustOperation",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={trustor:e,assetCode:t.getCode(),authorize:n,source:r}
return ae.Operation.allowTrust(i)}},{key:"pathPaymentOperation",value:function(e,t,n,r,i){var o={destination:e,sendAsset:t,sendMax:n,destAsset:r,destAmount:i,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return ae.Operation.pathPayment(o)}},{key:"multisigOperations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=[],a={source:i,signer:{ed25519PublicKey:e,weight:t}}
return o.push(ae.Operation.setOptions(a)),a={source:i,medThreshold:n,highThreshold:r},o.push(ae.Operation.setOptions(a)),o}},{key:"removeMultisigOperations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[],o={source:r,medThreshold:t,highThreshold:n}
return i.push(ae.Operation.setOptions(o)),o={source:r,signer:{ed25519PublicKey:e,weight:0}},i.push(ae.Operation.setOptions(o)),i}}],(n=null)&&le(t.prototype,n),r&&le(t,r),e}(),de=n(35)
function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t){return!t||"object"!==pe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ye=new(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),be(this,ge(t).apply(this,arguments))}var n,r,i
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,de),n=t,(r=[{key:"log",value:function(e,t){this.emit("transaction",e,t)}}])&&ve(n.prototype,r),i&&ve(n,i),t}())
Object.freeze(ye)
var _e=ye
function we(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var xe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t||console.log("StellarAPI constructor missing parameter"),this._horizonServer=t}var t,n,r
return t=e,(n=[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var e=this.serverURL()+"/metrics"
return ue.a.get(e)}},{key:"accountInfo",value:function(e){return this.server().loadAccount(e)}},{key:"balances",value:function(e){var t=this
return e.publicKey().then(function(e){return t.server().loadAccount(e)}).then(function(e){var t=[]
return e.balances.forEach(function(e){"native"===e.asset_type?t.push({symbol:"XLM",amount:e.balance,issuer:""}):t.push({symbol:e.asset_code,amount:e.balance,issuer:e.asset_issuer})}),t})}},{key:"balanceForAsset",value:function(e,t){var n=this
return e.publicKey().then(function(e){return n.server().loadAccount(e)}).then(function(e){var n=!0,r=!1,i=void 0
try{for(var o,a=e.balances[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value
if("native"===s.asset_type){if(t.isNative())return s.balance}else if(s.asset_code===t.getCode()&&s.asset_issuer===t.getIssuer())return s.balance}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return"0"})}},{key:"paths",value:function(e,t,n,r){return this.server().paths(e,t,n,r)}},{key:"mergeAccount",value:function(e,t){var n=this,r="",i=""
return e.publicKey().then(function(e){return r=e,t.publicKey()}).then(function(e){return i=e,n.server().loadAccount(e)}).then(function(e){var n=new ae.TransactionBuilder(e).setTimeout(ae.TimeoutInfinite).addOperation(ae.Operation.accountMerge({destination:i,source:r})).build()
return t.signTransaction(n)}).then(function(t){return e.signTransaction(t)}).then(function(e){return n.submitTransaction(e,"merge account")})}},{key:"manageOffer",value:function(e,t,n,r,i,o){var a=this,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0
return this._processAccounts(e,t).then(function(u){var c=he.manageOfferOperation(n,r,i,o,s,u.sourcePublicKey)
return a._submitOperations("manage offer",e,t,[c],u)})}},{key:"changeTrust",value:function(e,t,n,r){var i=this
return this._processAccounts(e,t).then(function(o){var a=he.changeTrustOperation(n,r,o.sourcePublicKey)
return i._submitOperations("change trust",e,t,[a],o)})}},{key:"allowTrust",value:function(e,t,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=null
return t.publicKey().then(function(t){return a=t,i._processAccounts(e,o)}).then(function(t){var s=he.allowTrustOperation(a,n,r,t.sourcePublicKey)
return i._submitOperations("allow trust",e,o,[s],t)})}},{key:"makeMultiSig",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=null
return t.publicKey().then(function(t){return o=t,n._processAccounts(e,r)}).then(function(t){var a=he.multisigOperations(o,1,i,i,t.sourcePublicKey)
return n._submitOperations("make multisig",e,r,a,t)})}},{key:"removeMultiSig",value:function(e,t,n){var r=this
return this.removeMultiSigTransaction(e,t,n).then(function(e){return r.submitTransaction(e,"remove multisig")})}},{key:"submitTransaction",value:function(e,t){return this.server().submitTransaction(e).then(function(e){return _e.log(e,t),e})}},{key:"removeMultiSigTransaction",value:function(e,t,n){var r=this,i=null
return e.publicKey().then(function(e){return r.server().loadAccount(e)}).then(function(e){return i=e,t.publicKey()}).then(function(t){var r=new ae.TransactionBuilder(i,n).setTimeout(ae.TimeoutInfinite),o=he.removeMultisigOperations(t,1,1,null),a=!0,s=!1,u=void 0
try{for(var c,f=o[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var l=c.value
r.addOperation(l)}}catch(e){s=!0,u=e}finally{try{a||null==f.return||f.return()}finally{if(s)throw u}}var h=r.build()
return e.signTransaction(h)}).then(function(e){return t.signTransaction(e)})}},{key:"sendAssetBatch",value:function(e,t,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null===o?ae.Asset.native():o,c=null,f=[]
return this._processAccounts(e,t).then(function(o){var l=Promise.resolve(),h=!0,d=!1,p=void 0
try{for(var v,b=function(){var e=v.value
l=l.then(function(){return e.publicKey()}).then(function(e){return c=e,i.server().loadAccount(c)}).then(function(e){if(!i._hasAssetTrustline(e,u))throw new Error("No trustline from destination to asset")
return null}).then(function(){var e=he.paymentOperation(c,r,u,o.sourcePublicKey)
return f.push(e),null})},g=n[Symbol.iterator]();!(h=(v=g.next()).done);h=!0)b()}catch(e){d=!0,p=e}finally{try{h||null==g.return||g.return()}finally{if(d)throw p}}return l.then(function(){return i._submitOperations("send asset batch",e,t,f,o,a,s)})})}},{key:"sendAsset",value:function(e,t,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null===o?ae.Asset.native():o,c=null
return n.publicKey().then(function(e){return c=e,i.server().loadAccount(c)}).then(function(n){if(!i._hasAssetTrustline(n,u))throw new Error("No trustline from destination to asset")
return i._processAccounts(e,t)}).then(function(n){var o=he.paymentOperation(c,r,u,n.sourcePublicKey)
return i._submitOperations("send asset",e,t,[o],n,a,s)})}},{key:"buyTokens",value:function(e,t,n,r,i){var o=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null
return e.publicKey().then(function(e){return u=e,o.server().loadAccount(e)}).then(function(t){if(!o._hasAssetTrustline(t,n))throw new Error("No trustline from buyer to asset")
return o._processAccounts(e,a)}).then(function(c){var f=he.pathPaymentOperation(u,t,r,n,i,c.sourcePublicKey)
return o._submitOperations("buy asset",e,a,[f],c,null,s)})}},{key:"manageData",value:function(e,t,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(e,t).then(function(a){var s=he.manageDataOperation(n,r,a.sourcePublicKey)
return i._submitOperations("manage data",e,t,[s],a,null,o)})}},{key:"getFlags",value:function(e){var t=this
return e.publicKey().then(function(e){return t.server().loadAccount(e)}).then(function(e){var t=0
return e.flags.auth_required&&(t|=ae.AuthRequiredFlag),e.flags.auth_revocable&&(t|=ae.AuthRevocableFlag),t})}},{key:"createAccount",value:function(e,t,n){var r,i=this
return t.publicKey().then(function(t){return r=t,e.publicKey()}).then(function(e){return i.server().loadAccount(e)}).then(function(t){var i={destination:r,startingBalance:n},o=new ae.TransactionBuilder(t).setTimeout(ae.TimeoutInfinite).addOperation(ae.Operation.createAccount(i)).build()
return e.signTransaction(o)}).then(function(e){return i.submitTransaction(e,"create account")}).then(function(e){return i.server().loadAccount(r)})}},{key:"lockAccount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=null
switch(t){case"low":i={masterWeight:1,lowThreshold:0,medThreshold:2,highThreshold:2}
break
case"lock":i={masterWeight:0,lowThreshold:0,medThreshold:0,highThreshold:0}
break
default:console.log("preset invalid: "+t)}if(!i)throw new Error("lockAccount preset invalid")
return this.setOptions(e,i,n,r)}},{key:"setDomain",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={homeDomain:t}
return this.setOptions(e,i,n,r)}},{key:"setFlags",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={setFlags:t}
return this.setOptions(e,i,n,r)}},{key:"clearFlags",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={clearFlags:t}
return this.setOptions(e,i,n,r)}},{key:"setInflationDestination",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={inflationDest:t}
return this.setOptions(e,i,n,r)}},{key:"setOptions",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return this._processAccounts(e,r).then(function(o){var a=he.setOptionsOperation(t,o.sourcePublicKey)
return n._submitOperations("set options",e,r,[a],o,null,i)})}},{key:"_hasAssetTrustline",value:function(e,t){return!!t.isNative()||e.balances.some(function(e){return e.asset_code===t.getCode()&&e.asset_issuer===t.getIssuer()})}},{key:"_processAccounts",value:function(e,t){var n=this
return e.publicKey().then(function(e){return t?t.publicKey().then(function(t){return{sourcePublicKey:e,fundingPublicKey:t}}):{sourcePublicKey:e}}).then(function(e){var t=e.sourcePublicKey
return e.fundingPublicKey&&(t=e.fundingPublicKey),n.server().loadAccount(t).then(function(t){return e.account=t,e})})}},{key:"_submitOperations",value:function(e,t,n,r,i){var o=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=new ae.TransactionBuilder(i.account).setTimeout(ae.TimeoutInfinite),c=!0,f=!1,l=void 0
try{for(var h,d=r[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value
u.addOperation(p)}}catch(e){f=!0,l=e}finally{try{c||null==d.return||d.return()}finally{if(f)throw l}}fe.strOK(a)&&u.addMemo(ae.Memo.text(a))
var v=u.build()
return t.signTransaction(v).then(function(e){return n&&!n.equalTo(t)?n.signTransaction(e):e}).then(function(r){if(s&&s.length>0){var i=[]
i.push(t),n&&i.push(n)
var a=o._filteredSigners(s,i)
if(a.length>0){var u=Promise.resolve(),c=!0,f=!1,l=void 0
try{for(var h,d=function(){var e=h.value
u=u.then(function(){return e.signTransaction(r)})},p=a[Symbol.iterator]();!(c=(h=p.next()).done);c=!0)d()}catch(e){f=!0,l=e}finally{try{c||null==p.return||p.return()}finally{if(f)throw l}}return u.then(function(t){return o.submitTransaction(t,e)})}}return o.submitTransaction(r,e)})}},{key:"_filteredSigners",value:function(e,t){var n=e
if(e&&e.length>0&&t&&t.length>0){n=[]
var r=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value
if(u){var c=!1,f=!0,l=!1,h=void 0
try{for(var d,p=t[Symbol.iterator]();!(f=(d=p.next()).done);f=!0){var v=d.value
if(u.equalTo(v)){c=!0
break}}}catch(e){l=!0,h=e}finally{try{f||null==p.return||p.return()}finally{if(l)throw h}}c||n.push(u)}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}return n}}])&&we(t.prototype,n),r&&we(t,r),e}()
function ke(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Se=function(){function e(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._serverURL=t,this._testnet=n,this._testnet?ae.Network.useTestNetwork():ae.Network.usePublicNetwork(),this._server=new ae.Server(t,r)}var t,n,r
return t=e,(n=[{key:"server",value:function(){return this._testnet?ae.Network.useTestNetwork():ae.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}])&&ke(t.prototype,n),r&&ke(t,r),e}()
function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ae=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r
return t=e,r=[{key:"secret",value:function(t){var n=new e
return n._secret=t,n._publicKey=ae.Keypair.fromSecret(t).publicKey(),n}},{key:"ledger",value:function(t,n){var r=new e
return r._ledgerAPI=t,r._confirmCallback=n,r}},{key:"public",value:function(t){var n=new e
return n._publicKey=t,n}}],(n=[{key:"publicKey",value:function(){var e=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(t){return e._publicKey=t,e._publicKey})}},{key:"equalTo",value:function(e){return!(!this.usingLedger()||!e.usingLedger())||(this._publicKey===e._publicKey||this._secret===e._secret)}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(e){var t=this
return this.publicKey().then(function(n){if(t.usingLedger())return t._confirmCallback&&t._confirmCallback(),t._ledgerAPI.signTransaction(n,e)
if(fe.strOK(t._secret)){var r=ae.Keypair.fromSecret(t._secret)
return e.sign(r),e}throw new Error("This wallet does not contain a secret key.")}).then(function(e){return e})}}])&&Ee(t.prototype,n),r&&Ee(t,r),e}(),Oe=n(213),Te=n.n(Oe),Me=n(214),Pe=n.n(Me)
function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ce=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r
return t=e,r=[{key:"setupForNode",value:function(e){this.nodeTransport=e}},{key:"isNodeTransport",value:function(e){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create():Pe.a.create()}}],(n=null)&&Ie(t.prototype,n),r&&Ie(t,r),e}()
function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Be=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.transport=null,this.str=null}var t,n,r
return t=e,(n=[{key:"createTransport",value:function(){var e=this
return this.str?Promise.resolve():Ce.create().then(function(t){return e.transport=t,e.str=new Te.a(e.transport),null}).catch(function(e){throw console.log(JSON.stringify(e)),e})}},{key:"verifyConnect",value:function(){var e=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw e.transport.close(),e.str=null,e.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var e=this
return this.createTransport().then(function(){return e.verifyConnect().catch(function(t){return console.log("connect failed: ",t),e.createTransport().then(function(){return e.verifyConnect()})})}).catch(function(e){throw console.log("Error: connect: "+JSON.stringify(e)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var e=this
return this.connect().then(function(){return e.str.getPublicKey("44'/148'/0'")}).then(function(e){return e.publicKey}).catch(function(e){throw console.log("Error: getPublicKey: "+JSON.stringify(e)),e})}},{key:"signTransaction",value:function(e,t){var n=this
return this.connect().then(function(){return n.str.signTransaction("44'/148'/0'",t.signatureBase())}).then(function(n){var r=n.signature,i=ae.Keypair.fromPublicKey(e)
if(i.verify(t.hash(),r)){var o=i.signatureHint(),a=new ae.xdr.DecoratedSignature({hint:o,signature:r})
return t.signatures.push(a),t}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(e){throw console.log("Error: signTransaction: "+JSON.stringify(e)),e})}}])&&Re(t.prototype,n),r&&Re(t,r),e}(),je=function(){var e=this,t=e.$createElement,n=e._self._c||t
return n("v-dialog",{attrs:{lazy:"",scrollable:"","max-width":"600"},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null
e.visible=!1}},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?n("div",{staticClass:"main-container"},[n("donate-view",{attrs:{donationPublicKey:e.donationPublicKey}}),e._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(t){e.visible=!1}}},[e._v("\n        Close\n      ")])],1)],1):e._e()])}
je._withStripped=!0
var Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t
return n("div",{staticClass:"payment-view"},[n("div",{staticClass:"input-title"},["start"!==e.dialogMode?n("v-icon",{staticClass:"back-button",attrs:{dark:"",large:""},on:{click:function(t){e.dialogMode="start"}}},[e._v("chevron_left")]):e._e(),e._v("\n    "+e._s(e.headerMessage)+"\n  ")],1),e._v(" "),n("div",{staticClass:"payment-content"},["start"===e.dialogMode?n("div",{staticClass:"payment-start"},[n("div",{staticClass:"title-start"},[e._v("Choose Method")]),e._v(" "),n("div",[n("v-btn",{on:{click:function(t){e.buttonClick("useNano")}}},[e._v("Use Ledger Nano")])],1),e._v(" "),n("div",[n("v-btn",{on:{click:function(t){e.buttonClick("useKey")}}},[e._v("Use secret key")])],1),e._v(" "),e.donate?n("div",{staticClass:"own-wallet"},[e._v("\n        Or use your favorite wallet:"),n("br"),e._v("To: "),n("span",{staticClass:"xlm-address"},[e._v(e._s(e.destinationPublicKey))])]):e._e()]):"useNano"===e.dialogMode?n("div",{staticClass:"payment-nano"},[n("v-text-field",{attrs:{label:"Lumens",type:"number",autofocus:""},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null
e.buttonClick("sendWithNano")}},model:{value:e.xlm,callback:function(t){e.xlm="string"==typeof t?t.trim():t},expression:"xlm"}}),e._v(" "),e.donate?e._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{spellcheck:"false",label:"Destination"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null
e.buttonClick("sendWithNano")}},model:{value:e.destinationPublicKey,callback:function(t){e.destinationPublicKey="string"==typeof t?t.trim():t},expression:"destinationPublicKey"}})],1),e._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:e.sendingPayment},on:{click:function(t){e.buttonClick("sendWithNano")}}},[e._v("Send with Ledger Nano")]),e._v(" "),n("div",[e._v(e._s(e.status))])],1)],1):"useKey"===e.dialogMode?n("div",{staticClass:"payment-secret"},[n("v-text-field",{attrs:{label:"Amount",type:"number",autofocus:""},model:{value:e.xlm,callback:function(t){e.xlm="string"==typeof t?t.trim():t},expression:"xlm"}}),e._v(" "),e.donate?e._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{label:"Destination"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null
e.buttonClick("sendWithSecret")}},model:{value:e.destinationPublicKey,callback:function(t){e.destinationPublicKey="string"==typeof t?t.trim():t},expression:"destinationPublicKey"}})],1),e._v(" "),n("v-text-field",{attrs:{spellcheck:"false",label:"Secret Key",counter:56,hint:"Starts with an 'S'","append-icon":e.showSecret?"visibility_off":"visibility","append-icon-cb":function(){return e.showSecret=!e.showSecret},type:e.showSecret?"text":"password"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null
e.buttonClick("sendWithSecret")}},model:{value:e.secretKey,callback:function(t){e.secretKey="string"==typeof t?t.trim():t},expression:"secretKey"}}),e._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:e.disableSendLumens},on:{click:function(t){e.buttonClick("sendWithSecret")}}},[e._v("Send Lumens")]),e._v(" "),n("div",[e._v(e._s(e.status))])],1)],1):e._e()])])}
Ne._withStripped=!0
var Le={props:["donationPublicKey"],data:function(){return{visible:!1,destinationPublicKey:"",donate:!1,dialogMode:"start",status:"",secretKey:"",sendingPayment:!1,xlm:10,showSecret:!1,browserSupportMessage:"",ledgerAPI:null,horizon:null}},computed:{disableSendLumens:function(){return fe.strlen(this.secretKey)<10||this.xlm<1},headerMessage:function(){return"Send a Payment"}},created:function(){this.horizon=new Se("https://horizon.stellar.org",!1),fe.strOK(this.donationPublicKey)&&(this.donate=!0,this.destinationPublicKey=this.donationPublicKey),Ce.isNodeTransport()?this.browserSupportMessage='Error: Make sure "Browser Support" is disabled':this.browserSupportMessage='Error: Make sure "Browser Support" is enabled',this.ledgerAPI=new Be},methods:{buttonClick:function(e){switch(e){case"useNano":this.dialogMode="useNano",this.status=""
break
case"useKey":this.dialogMode="useKey",this.status=""
break
case"sendWithNano":this.sendWithNano()
break
case"sendWithSecret":this.sendWithSecret()
break
default:console.log("not handled: "+e)}},sendWithNano:function(){var e=this,t=Ae.ledger(this.ledgerAPI,function(){e.status="Confirm transaction on Nano..."})
this.sendPayment(t)},sendWithSecret:function(){fe.strOK(this.secretKey)?this.status="Please enter your secret key":this.sendPayment(Ae.secret(this.secretKey))},verifyAccounts:function(e,t){var n=this
return this.horizon.server().loadAccount(t).then(function(t){return e.publicKey()}).then(function(e){return n.horizon.server().loadAccount(e)}).then(function(e){return e})},sendPayment:function(e){var t=this,n=this.destinationPublicKey
fe.strOK(n)?this.xlm<1?this.status="Lumens must be greater than 0":(this.status="Building transaction...",this.sendingPayment=!0,this.verifyAccounts(e,n).then(function(r){var i=new ae.TransactionBuilder(r).addOperation(ae.Operation.payment({destination:n,asset:ae.Asset.native(),amount:String(t.xlm)})).build()
return e.signTransaction(i)}).then(function(e){return t.status="Submitting transaction...",t.horizon.server().submitTransaction(e)}).then(function(e){return t.status="Payment successful!",t.secretKey="",null}).catch(function(e){"connection failed"===e.message?t.status=t.browserSupportMessage:t.status="Error making payment: "+e.message}).finally(function(){t.sendingPayment=!1})):this.status="Destination is blank"}}}
n(516)
function Ue(e,t,n,r,i,o,a,s){var u,c="function"==typeof e?e.options:e
if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u
var f=c.render
c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate
c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}var De=n(30),ze=n.n(De)
n(518)
function qe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.a.extend({mixins:t})}n(521)
var Fe=function(){return function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function He(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ve(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)}var $e=o.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Ve(e)?t.style=Ke({},t.style,{"background-color":""+e,"border-color":""+e}):e&&(t.class=Ke({},t.class,He({},e,!0))),t},setTextColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(Ve(e))t.style=Ke({},t.style,{color:""+e,"caret-color":""+e})
else if(e){var n=e.toString().trim().split(" ",2),r=Fe(n,2),i=r[0],o=r[1]
t.class=Ke({},t.class,He({},i+"--text",!0)),o&&(t.class["text--"+o]=!0)}return t}}}),Xe=qe($e).extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},radius:function(){return 20},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:this.calculatedSize+"px",width:this.calculatedSize+"px"}},svgStyles:function(){return{transform:"rotate("+Number(this.rotate)+"deg)"}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(e,t,n){return e("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":n}})},genSvg:function(e){var t=[this.indeterminate||this.genCircle(e,"underlay",0),this.genCircle(e,"overlay",this.strokeDashOffset)]
return e("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBoxSize+" "+this.viewBoxSize+" "+2*this.viewBoxSize+" "+2*this.viewBoxSize}},t)}},render:function(e){var t=e("div",{staticClass:"v-progress-circular__info"},this.$slots.default),n=this.genSvg(e)
return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[n,t])}})
function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qe(e,t){return function(){return B("The "+e+" component must be used inside a "+t)}}function Ye(e,t,n){var r=t&&n?{register:Qe(t,n),unregister:Qe(t,n)}:null
return o.a.extend({name:"registrable-inject",inject:We({},e,{default:r})})}function Ge(e,t,n){return Ye(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[e])return this[e].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(e={},t=this.activeClass,n=this.isActive,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e):{}
var e,t,n}},created:function(){this[e]&&this[e].register(this)},beforeDestroy:function(){this[e]&&this[e].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}Ge("itemGroup")
var Ze={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean}
var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return o.a.extend({name:"positionable",props:e.length?T(Ze,e):Ze})}()
function et(e,t){e.style.transform=t,e.style.webkitTransform=t}function tt(e,t){e.style.opacity=t.toString()}var nt={show:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(t._ripple&&t._ripple.enabled){var r=document.createElement("span"),i=document.createElement("span")
r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=" "+n.class)
var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.getBoundingClientRect(),i=e.clientX-r.left,o=e.clientY-r.top,a=0,s=.3
t._ripple&&t._ripple.circle?(s=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt(Math.pow(i-a,2)+Math.pow(o-a,2))/4):a=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2
var u=(t.clientWidth-2*a)/2+"px",c=(t.clientHeight-2*a)/2+"px"
return{radius:a,scale:s,x:n.center?u:i-a+"px",y:n.center?c:o-a+"px",centerX:u,centerY:c}}(e,t,n),a=o.radius,s=o.scale,u=o.x,c=o.y,f=o.centerX,l=o.centerY,h=2*a+"px"
i.className="v-ripple__animation",i.style.width=h,i.style.height=h,t.appendChild(r),"static"===window.getComputedStyle(t).position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),et(i,"translate("+u+", "+c+") scale3d("+s+","+s+","+s+")"),tt(i,0),i.dataset.activated=String(performance.now()),setTimeout(function(){i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),et(i,"translate("+f+", "+l+") scale3d(1,1,1)"),tt(i,.25),setTimeout(function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),tt(i,0)},300)},0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation")
if(0!==t.length){var n=t[t.length-1]
if(!n.dataset.isHiding){n.dataset.isHiding="true"
var r=performance.now()-Number(n.dataset.activated),i=Math.max(200-r,0)
setTimeout(function(){n.classList.remove("v-ripple__animation--out"),setTimeout(function(){1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},i)}}}}}
function rt(e){return void 0===e||!!e}function it(e){var t={},n=e.currentTarget
n&&(t.center=n._ripple.centered,n._ripple.class&&(t.class=n._ripple.class),nt.show(e,n,t))}function ot(e){nt.hide(e.currentTarget)}function at(e,t,n){var r=rt(t.value)
r||nt.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r
var i=t.value||{}
i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?("ontouchstart"in window&&(e.addEventListener("touchend",ot,!1),e.addEventListener("touchcancel",ot,!1)),e.addEventListener("mousedown",it,!1),e.addEventListener("mouseup",ot,!1),e.addEventListener("mouseleave",ot,!1),e.addEventListener("dragstart",ot,!1)):!r&&n&&st(e)}function st(e){e.removeEventListener("mousedown",it,!1),e.removeEventListener("touchend",ot,!1),e.removeEventListener("touchcancel",ot,!1),e.removeEventListener("mouseup",ot,!1),e.removeEventListener("mouseleave",ot,!1),e.removeEventListener("dragstart",ot,!1)}var ut={bind:function(e,t){at(e,t,!1)},unbind:function(e){delete e._ripple,st(e)},update:function(e,t){t.value!==t.oldValue&&at(e,t,rt(t.oldValue))}},ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
var ft=o.a.extend({name:"routable",directives:{Ripple:ut},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:[Boolean,Object],tag:String,target:String},computed:{computedRipple:function(){return!(!this.ripple||this.disabled)&&this.ripple}},methods:{click:function(e){this.$emit("click",e)},generateRouteLink:function(e){var t,n,r,i=this.exact,o=void 0,a=(t={attrs:{disabled:this.disabled},class:e,props:{},directives:[{name:"ripple",value:this.computedRipple}]},n=this.to?"nativeOn":"on",r=ct({},this.$listeners,{click:this.click}),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)
if(void 0===this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var s=this.activeClass,u=this.exactActiveClass||s
this.proxyClass&&(s+=" "+this.proxyClass,u+=" "+this.proxyClass),o=this.nuxt?"nuxt-link":"router-link",Object.assign(a.props,{to:this.to,exact:i,activeClass:s,exactActiveClass:u,append:this.append,replace:this.replace})}else"a"===(o=(this.href?"a":this.tag)||"a")&&this.href&&(a.attrs.href=this.href)
return this.target&&(a.attrs.target=this.target),{tag:o,data:a}}}}),lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function ht(e){var t=lt({},e.props,e.injections),n=dt.options.computed.isDark.call(t)
return dt.options.computed.themeClasses.call({isDark:n})}var dt=o.a.extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.$vuetify.dark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),pt=dt
function vt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bt(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input"
return o.a.extend({name:"toggleable",model:{prop:t,event:n},props:vt({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:(e={},vt(e,t,function(e){this.isActive=!!e}),vt(e,"isActive",function(e){!!e!==this[t]&&this.$emit(n,e)}),e)})}var gt=bt(),mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function _t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var wt,xt=qe($e,ft,Je,pt,Ge("btnToggle"),bt("inputValue")).extend().extend({name:"v-btn",props:{activeClass:{type:String,default:"v-btn--active"},block:Boolean,depressed:Boolean,fab:Boolean,flat:Boolean,icon:Boolean,large:Boolean,loading:Boolean,outline:Boolean,ripple:{type:[Boolean,Object],default:null},round:Boolean,small:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"button"},value:null},computed:{classes:function(){var e
return yt((_t(e={"v-btn":!0},this.activeClass,this.isActive),_t(e,"v-btn--absolute",this.absolute),_t(e,"v-btn--block",this.block),_t(e,"v-btn--bottom",this.bottom),_t(e,"v-btn--disabled",this.disabled),_t(e,"v-btn--flat",this.flat),_t(e,"v-btn--floating",this.fab),_t(e,"v-btn--fixed",this.fixed),_t(e,"v-btn--icon",this.icon),_t(e,"v-btn--large",this.large),_t(e,"v-btn--left",this.left),_t(e,"v-btn--loader",this.loading),_t(e,"v-btn--outline",this.outline),_t(e,"v-btn--depressed",this.depressed&&!this.flat||this.outline),_t(e,"v-btn--right",this.right),_t(e,"v-btn--round",this.round),_t(e,"v-btn--router",this.to),_t(e,"v-btn--small",this.small),_t(e,"v-btn--top",this.top),e),this.themeClasses)},computedRipple:function(){var e=!this.icon&&!this.fab||{circle:!0}
return!this.disabled&&(null!==this.ripple?this.ripple:e)}},watch:{$route:"onRouteChange"},methods:{click:function(e){!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("div",{class:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loading"},this.$slots.loader||[this.$createElement(Xe,{props:{indeterminate:!0,size:23,width:2}})])},onRouteChange:function(){var e=this
if(this.to&&this.$refs.link){var t="_vnode.data.class."+this.activeClass
this.$nextTick(function(){A(e.$refs.link,t)&&e.toggle()})}}},render:function(e){var t=this.outline||this.flat||this.disabled?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(this.classes),r=n.tag,i=n.data,o=[this.genContent(),this.loading&&this.genLoader()]
return"button"===r&&(i.attrs.type=this.type),i.attrs.value=["string","number"].includes(mt(this.value))?this.value:JSON.stringify(this.value),this.btnToggle&&(i.ref="link"),e(r,t(this.color,i),o)}}),kt=(n(523),o.a.extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}})),St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
!function(e){e.small="16px",e.default="24px",e.medium="28px",e.large="36px",e.xLarge="40px"}(wt||(wt={}))
var Et=qe($e,kt,pt).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var e=""
return this.$slots.default&&(e=this.$slots.default[0].text),function(e,t){return t.startsWith(C)?A(e,t,t):t}(this,e)},getSize:function(){var e,t={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},n=(e=t,Object.keys(e)).find(function(e){return t[e]})
return n&&wt[n]||M(this.size)},getDefaultData:function(){return{staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:St({"aria-hidden":!0},this.$attrs),on:this.$listeners}},applyColors:function(e){e.class=St({},e.class,this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var n=[],r=this.getDefaultData(),i="material-icons",o=e.indexOf("-"),a=o<=-1
a?n.push(e):function(e){return["fas","far","fal","fab"].some(function(t){return e.includes(t)})}(i=e.slice(0,o))&&(i=""),r.class[i]=!0,r.class[e]=!a
var s=this.getSize()
return s&&(r.style={fontSize:s}),this.applyColors(r),t("i",r,n)},renderSvgIcon:function(e,t){var n=this.getDefaultData()
n.class["v-icon--is-component"]=!0
var r=this.getSize()
r&&(n.style={fontSize:r,height:r}),this.applyColors(n)
var i=e.component
return n.props=e.props,t(i,n)}},render:function(e){var t=this.getIcon()
return"string"==typeof t?this.renderFontIcon(t,e):this.renderSvgIcon(t,e)}}),At=o.a.extend({name:"v-icon",$_wrapperFor:Et,functional:!0,render:function(e,t){var n=t.data,r=t.children,i=""
return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),e(Et,n,i?[i]:r)}}),Ot=(n(525),n(527),At),Tt=(n(529),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),Mt={name:"v-label",functional:!0,mixins:[pt],props:{absolute:Boolean,color:{type:[Boolean,String],default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(e,t){var n=t.children,r=t.listeners,i=t.props,o={staticClass:"v-label",class:Tt({"v-label--active":i.value,"v-label--is-disabled":i.disabled},ht(t)),attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:M(i.left),right:M(i.right),position:i.absolute?"absolute":"relative"}}
return e("label",$e.options.methods.setTextColor(i.focused&&i.color,o),n)}},Pt=(n(531),{name:"v-messages",mixins:[$e,pt],props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t,domProps:{innerHTML:e}})}},render:function(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct=qe($e,Ye("form")).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return this.hasSuccess||this.shouldValidate&&this.hasError},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",e)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.color:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(e,t){(function e(t,n){if(t===n)return!0
if(t instanceof Date&&n instanceof Date&&t.getTime()!==n.getTime())return!1
if(t!==Object(t)||n!==Object(n))return!1
var r=Object.keys(t)
return r.length===Object.keys(n).length&&r.every(function(r){return e(t[r],n[r])})})(e,t)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(e){e||this.disabled||this.readonly||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting:function(){var e=this
setTimeout(function(){e.hasInput=!1,e.hasFocused=!1,e.isResetting=!1,e.validate()},0)},hasError:function(e){this.shouldValidate&&this.$emit("update:error",e)},value:function(e){this.lazyValue=e}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(e){return e?Array.isArray(e)?e:[e]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1],n=[]
t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0)
for(var r=0;r<this.rules.length;r++){var i=this.rules[r],o="function"==typeof i?i(t):i
"string"==typeof o?n.push(o):"boolean"!=typeof o&&j("Rules should return a string or boolean, received '"+(void 0===o?"undefined":It(o))+"' instead",this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bt=qe($e,pt,Ct).extend({name:"v-input",props:{appendIcon:String,appendIconCb:Function,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,prependIconCb:Function,value:{required:!1}},data:function(){return{attrsInput:{},lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return{}},classesInput:function(){return Rt({},this.classes,{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly},this.themeClasses)},directivesInput:function(){return[]},hasHint:function(){return!this.hasMessages&&this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return Boolean(this.$slots.label||this.label)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return Boolean(this.disabled||this.readonly)},isLabelActive:function(){return this.isDirty}},watch:{value:function(e){this.lazyValue=e}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(e,t){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this[e+"Icon"],o="click:"+P(e)
t=t||this[e+"IconCb"],r&&e&&t&&N(":"+e+"-icon-cb","@"+o,this)
var a={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[o]||t?{click:function(e){e.preventDefault(),e.stopPropagation(),n.$emit(o,e),t&&t(e)},mouseup:function(e){e.preventDefault(),e.stopPropagation()}}:void 0}
return this.$createElement("div",{staticClass:"v-input__icon v-input__icon--"+P(e),key:""+e+i},[this.$createElement(Ot,a,i)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:M(this.height)},directives:this.directivesInput,on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(Mt,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.$attrs.id,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){if(this.hideDetails)return null
var e=this.hasHint?[this.hint]:this.validations
return this.$createElement(Pt,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?e:[]}})},genSlot:function(e,t,n){if(!n.length)return null
var r=e+"-"+t
return this.$createElement("div",{staticClass:"v-input__"+r,ref:r},n)},genPrependSlot:function(){var e=[]
return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot:function(){var e=[]
return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick:function(e){this.$emit("click",e)},onMouseDown:function(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp:function(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render:function(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",attrs:this.attrsInput,class:this.classesInput}),this.genContent())}}),jt=(n(535),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),Nt={name:"v-counter",functional:!0,mixins:[pt],props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(e,t){var n=t.props,r=parseInt(n.max,10),i=parseInt(n.value,10),o=r?i+" / "+r:n.value
return e("div",{staticClass:"v-counter",class:jt({"error--text":r&&i>r},ht(t))},o)}},Lt=/[-!$%^&*()_+|~=`{}[\]:";'<>?,.\/\\ ]/,Ut=function(e){return e&&Lt.test(e)},Dt={"#":{test:function(e){return e.match(/[0-9]/)}},A:{test:function(e){return e.match(/[A-Z]/i)},convert:function(e){return e.toUpperCase()}},a:{test:function(e){return e.match(/[a-z]/i)},convert:function(e){return e.toLowerCase()}},N:{test:function(e){return e.match(/[0-9A-Z]/i)},convert:function(e){return e.toUpperCase()}},n:{test:function(e){return e.match(/[0-9a-z]/i)},convert:function(e){return e.toLowerCase()}},X:{test:Ut}},zt=function(e){return Dt.hasOwnProperty(e)},qt=function(e,t){return Dt[e].convert?Dt[e].convert(t):t},Ft=function(e,t){return!(null==t||!zt(e))&&Dt[e].test(t)},Kt=function(e){return e?String(e).replace(new RegExp(Lt,"g"),""):e},Ht={name:"maskable",props:{dontFillMaskBlanks:Boolean,mask:{type:[Object,String],default:null},returnMaskedValue:Boolean,value:{required:!1}},data:function(e){return{selection:0,lazySelection:0,lazyValue:e.value,preDefined:{"credit-card":"#### - #### - #### - ####",date:"##/##/####","date-with-time":"##/##/#### ##:##",phone:"(###) ### - ####",social:"###-##-####",time:"##:##","time-with-seconds":"##:##:##"}}},computed:{masked:function(){return(this.preDefined[this.mask]||this.mask||"").split("")}},watch:{mask:function(){var e=this
if(this.$refs.input){for(var t=this.$refs.input.value,n=this.maskText(Kt(this.lazyValue)),r=0,i=this.selection,o=0;o<i;o++)Ut(t[o])||r++
if(i=0,n)for(var a=0;a<n.length&&(Ut(n[a])||r--,i++,!(r<=0));a++);this.$nextTick(function(){e.$refs.input.value=n,e.setCaretPosition(i)})}}},beforeMount:function(){if(this.mask&&null!=this.value&&this.returnMaskedValue){var e=this.maskText(this.value)
e!==this.value&&this.$emit("input",e)}},methods:{setCaretPosition:function(e){var t=this
this.selection=e,window.setTimeout(function(){t.$refs.input&&t.$refs.input.setSelectionRange(t.selection,t.selection)},0)},updateRange:function(){if(this.$refs.input){var e=this.maskText(this.lazyValue),t=0
if(this.$refs.input.value=e,e)for(var n=0;n<e.length&&!(this.lazySelection<=0);n++)Ut(e[n])||this.lazySelection--,t++
this.setCaretPosition(t),this.$emit("input",this.returnMaskedValue?this.$refs.input.value:this.lazyValue)}},maskText:function(e){return this.mask?function(e,t,n){if(null==e)return""
if(e=String(e),!t.length||!e.length)return e
Array.isArray(t)||(t=t.split(""))
for(var r=0,i=0,o="";i<t.length;){var a=t[i],s=e[r]
if(zt(a)||s!==a)if(zt(a)||n){if(!Ft(a,s))return o
o+=qt(a,s),r++}else o+=a
else o+=a,r++
i++}return o}(e,this.masked,this.dontFillMaskBlanks):e},unmaskText:function(e){return this.mask&&!this.returnMaskedValue?Kt(e):e},setSelectionRange:function(){this.$nextTick(this.updateRange)},resetSelections:function(e){if(e.selectionEnd){this.selection=e.selectionEnd,this.lazySelection=0
for(var t=0;t<this.selection;t++)Ut(e.value[t])||this.lazySelection++}}}},Vt=(n(533),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow,height:e.style.height}},enter:function(t){var n=t._initialStyle
t.style.setProperty("transition","none","important"),t.style.visibility="hidden"
var r=t.offsetHeight+"px"
t.style.visibility=n.visibility,t.style.overflow="hidden",t.style.height=0,t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(function(){t.style.height=r})},afterEnter:$t,enterCancelled:$t,leave:function(e){e._initialStyle={overflow:e.style.overflow,height:e.style.height},e.style.overflow="hidden",e.style.height=e.offsetHeight+"px",e.offsetHeight,requestAnimationFrame(function(){return e.style.height=0})},afterLeave:t,leaveCancelled:t}
function t(t){e&&t._parent&&t._parent.classList.remove(e),$t(t)}})
function $t(e){e.style.overflow=e._initialStyle.overflow,e.style.height=e._initialStyle.height,delete e._initialStyle}k("bottom-sheet-transition"),k("carousel-transition"),k("carousel-reverse-transition"),k("tab-transition"),k("tab-reverse-transition"),k("menu-transition"),k("fab-transition","center center","out-in"),k("dialog-transition"),k("dialog-bottom-transition")
var Xt=k("fade-transition"),Wt=(k("scale-transition"),k("scroll-x-transition"),k("scroll-x-reverse-transition"),k("scroll-y-transition"),k("scroll-y-reverse-transition"),k("slide-x-transition"))
k("slide-x-reverse-transition"),k("slide-y-transition"),k("slide-y-reverse-transition"),S("expand-transition",Vt()),S("row-expand-transition",Vt("datatable__expand-col--expanded"))
var Qt=qe($e).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:7},indeterminate:Boolean,query:Boolean,value:{type:[Number,String],default:0}},computed:{backgroundStyle:function(){var e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)
return{height:this.active?M(this.height):0,opacity:e,width:this.normalizedBufer+"%"}},effectiveWidth:function(){return this.normalizedBufer?100*+this.normalizedValue/+this.normalizedBufer:0},normalizedBufer:function(){return this.bufferValue<0?0:this.bufferValue>100?100:parseFloat(this.bufferValue)},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},styles:function(){var e={}
return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBufer)||(e.width=this.normalizedBufer+"%"),e}},methods:{genDeterminate:function(e){return e("div",this.setBackgroundColor(this.color,{ref:"front",staticClass:"v-progress-linear__bar__determinate",style:{width:this.effectiveWidth+"%"}}))},genBar:function(e,t){return e("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__bar__indeterminate",class:(n={},r=t,i=!0,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)}))
var n,r,i},genIndeterminate:function(e){return e("div",{ref:"front",staticClass:"v-progress-linear__bar__indeterminate",class:{"v-progress-linear__bar__indeterminate--active":this.active}},[this.genBar(e,"long"),this.genBar(e,"short")])}},render:function(e){var t=e(Xt,this.indeterminate?[this.genIndeterminate(e)]:[]),n=e(Wt,this.indeterminate?[]:[this.genDeterminate(e)]),r=e("div",{staticClass:"v-progress-linear__bar",style:this.styles},[t,n]),i=e("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))
return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBufer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:{"v-progress-linear--query":this.query},style:{height:M(this.height)},on:this.$listeners},[i,r])}}),Yt=Qt,Gt=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Yt,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:2,indeterminate:!0}})}}}),Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jt=["color","file","time","date","datetime-local","week","month"],en=Bt.extend({name:"v-text-field",directives:{Ripple:ut},mixins:[Ht,Gt],inheritAttrs:!1,props:{appendOuterIcon:String,appendOuterIconCb:Function,autofocus:Boolean,box:Boolean,browserAutocomplete:String,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},clearIconCb:Function,color:{type:String,default:"primary"},counter:[Boolean,Number,String],flat:Boolean,fullWidth:Boolean,label:String,outline:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,prependInnerIconCb:Function,reverse:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,initialValue:null,internalChange:!1,isClearing:!1}},computed:{classes:function(){return{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--box":this.box,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outline":this.hasOutline,"v-text-field--placeholder":this.placeholder}},counterValue:function(){return(this.internalValue||"").toString().length},directivesInput:function(){return[]},hasOutline:function(){return this.outline||this.textarea},internalValue:{get:function(){return this.lazyValue},set:function(e){this.mask?(this.lazyValue=this.unmaskText(this.maskText(this.unmaskText(e))),this.setSelectionRange()):(this.lazyValue=e,this.$emit("input",this.lazyValue))}},isDirty:function(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed:function(){return this.box||this.isSolo||this.hasOutline||this.fullWidth},isLabelActive:function(){return this.isDirty||Jt.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var e=this.prefix&&!this.labelValue?this.prefixWidth:0
return!this.$vuetify.rtl!=!this.reverse?{left:"auto",right:e}:{left:e,right:"auto"}},showLabel:function(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder&&!this.prefixLabel)},labelValue:function(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder||this.prefixLabel)},prefixWidth:function(){if(this.prefix||this.$refs.prefix)return this.$refs.prefix.offsetWidth},prefixLabel:function(){return this.prefix&&!this.value}},watch:{isFocused:function(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},value:function(e){var t=this
if(this.mask&&!this.internalChange){var n=this.maskText(this.unmaskText(e))
this.lazyValue=this.unmaskText(n),String(e)!==this.lazyValue&&this.$nextTick(function(){t.$refs.input.value=n,t.$emit("input",t.lazyValue)})}else this.lazyValue=e}},mounted:function(){this.autofocus&&this.onFocus()},methods:{focus:function(){this.onFocus()},blur:function(){this.$refs.input?this.$refs.input.blur():this.onBlur()},clearableCallback:function(){var e=this
this.internalValue=null,this.$nextTick(function(){return e.$refs.input.focus()})},genAppendSlot:function(){var e=[]
return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot:function(){var e=[]
return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot:function(){var e=[]
return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot:function(){var e=Bt.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot()
return t&&e.children.unshift(t),e},genClearIcon:function(){if(!this.clearable)return null
var e=!!this.isDirty&&"clear"
return this.clearIconCb&&N(":clear-icon-cb","@click:clear",this),this.genSlot("append","inner",[this.genIcon(e,!this.$listeners["click:clear"]&&this.clearIconCb||this.clearableCallback,!1)])},genCounter:function(){if(!1===this.counter||null==this.counter)return null
var e=!0===this.counter?this.$attrs.maxlength:this.counter
return this.$createElement(Nt,{props:{dark:this.dark,light:this.light,max:e,value:this.counterValue}})},genDefaultSlot:function(){return[this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genLabel:function(){if(!this.showLabel)return null
var e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}}
return this.$attrs.id&&(e.props.for=this.$attrs.id),this.$createElement(Mt,e,this.$slots.label||this.label)},genInput:function(){var e=Object.assign({},this.$listeners)
delete e.change
var t={style:{},domProps:{value:this.maskText(this.lazyValue)},attrs:Zt({"aria-label":(!this.$attrs||!this.$attrs.id)&&this.label},this.$attrs,{autofocus:this.autofocus,disabled:this.disabled,readonly:this.readonly,type:this.type}),on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"}
return this.placeholder&&(t.attrs.placeholder=this.placeholder),this.mask&&(t.attrs.maxlength=this.masked.length),this.browserAutocomplete&&(t.attrs.autocomplete=this.browserAutocomplete),this.$createElement("input",t)},genMessages:function(){return this.hideDetails?null:this.$createElement("div",{staticClass:"v-text-field__details"},[Bt.options.methods.genMessages.call(this),this.genCounter()])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(e){return this.$createElement("div",{class:"v-text-field__"+e,ref:e},this[e])},onBlur:function(e){this.isFocused=!1,this.internalChange=!1,this.$emit("blur",e)},onClick:function(){this.isFocused||this.disabled||this.$refs.input.focus()},onFocus:function(e){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,this.$emit("focus",e)))},onInput:function(e){this.internalChange=!0,this.mask&&this.resetSelections(e.target),this.internalValue=e.target.value,this.badInput=e.target.validity&&e.target.validity.badInput},onKeyDown:function(e){this.internalChange=!0,e.keyCode===I.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",e)},onMouseDown:function(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),Bt.options.methods.onMouseDown.call(this,e)},onMouseUp:function(e){this.hasMouseDown&&this.focus(),Bt.options.methods.onMouseUp.call(this,e)}}}),tn=(n(537),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),nn={name:"v-textarea",extends:en,props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return tn({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},en.options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||en.options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e,t,n=this
setTimeout(function(){n.autoGrow&&n.calculateInputHeight()},0),this.autoGrow&&this.noResize&&null!=(t=R('"no-resize" is now implied when using "auto-grow", and can be removed',this,e))&&console.info(t)},methods:{calculateInputHeight:function(){var e=this.$refs.input
if(e){e.style.height=0
var t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight)
e.style.height=Math.max(n,t)+"px"}},genInput:function(){var e=en.options.methods.genInput.call(this)
return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){en.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.internalChange=!0,this.$emit("keydown",e)}}}
var rn={functional:!0,$_wrapperFor:en,props:{textarea:Boolean,multiLine:Boolean},render:function(e,t){var n=t.props,r=t.data,i=t.slots,o=t.parent
!function(e){if(e.model&&e.on&&e.on.input)if(Array.isArray(e.on.input)){var t=e.on.input.indexOf(e.model.callback)
t>-1&&e.on.input.splice(t,1)}else delete e.on.input}(r)
var a=function(e,t){var n=[]
for(var r in e)e.hasOwnProperty(r)&&n.push(t("template",{slot:r},e[r]))
return n}(i(),e)
return n.textarea&&N("<v-text-field textarea>","<v-textarea outline>",rn,o),n.multiLine&&N("<v-text-field multi-line>","<v-textarea>",rn,o),n.textarea||n.multiLine?(r.attrs.outline=n.textarea,e(nn,r,a)):e(en,r,a)}},on=Ue(Le,Ne,[],!1,null,"2d2f5a4e",null)
ze()(on,{VBtn:xt,VIcon:At,VTextField:rn}),on.options.__file="src/vue/PaymentView.vue"
var an=on.exports,sn={props:["ping","donationPublicKey"],components:{"donate-view":an},watch:{ping:function(){this.visible=!0}},data:function(){return{visible:!1}}}
n(539),n(541)
function un(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}var cn=qe().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(e){if(!e)for(var t=this.getOpenDependents(),n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?function e(t){for(var n=[],r=0;r<t.length;r++){var i=t[r]
i.isActive&&i.isDependent?n.push(i):n.push.apply(n,un(e(i.$children)))}return n}(this.$children):[]},getOpenDependentElements:function(){for(var e=[],t=this.getOpenDependents(),n=0;n<t.length;n++)e.push.apply(e,un(t[n].getClickableDependentElements()))
return e},getClickableDependentElements:function(){var e=[this.$el]
return this.$refs.content&&e.push(this.$refs.content),e.push.apply(e,un(this.getOpenDependentElements())),e}}}),fn=o.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(e){return this.hasContent?e:void 0}}}),ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var hn={name:"detachable",mixins:[fn],props:{attach:{type:null,default:!1,validator:function(e){var t=void 0===e?"undefined":ln(e)
return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var e=this
this.$nextTick(function(){e.activatorNode&&e.activatorNode.elm&&e.$el.parentNode.insertBefore(e.activatorNode.elm,e.$el)})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){if(this.$refs.content)try{this.$refs.content.parentNode.removeChild(this.$refs.content)}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var e,t,n,r=this.$vnode&&this.$vnode.context.$options._scopeId
return r&&(n="",(t=r)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var e=void 0;(e=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(e.insertBefore(this.$refs.content,e.firstChild),this.hasDetached=!0):B("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},dn=(n(543),{name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:null,overlayTransitionDuration:650}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var e=this
if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active")
this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll()
var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]")
return t&&t.insertBefore(this.overlay,t.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){e.overlay&&(e.overlay.className+=" v-overlay--active",void 0!==e.activeZIndex&&(e.overlay.style.zIndex=e.activeZIndex-1))}),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
if(!this.overlay)return t&&this.showScroll()
this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=setTimeout(function(){try{e.overlay&&e.overlay.parentNode&&e.overlay.parentNode.removeChild(e.overlay),e.overlay=null,t&&e.showScroll()}catch(e){console.log(e)}clearTimeout(e.overlayTimeout),e.overlayTimeout=null},this.overlayTransitionDuration)},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return
var t=[I.up,I.pageup],n=[I.down,I.pagedown]
if(t.includes(e.keyCode))e.deltaY=-1
else{if(!n.includes(e.keyCode))return
e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
var t=window.getComputedStyle(e)
return["auto","scroll"].includes(t["overflow-y"])&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),n=e.deltaY||-e.wheelDelta
if("keydown"===e.type&&t[0]===document.body){var r=this.$refs.dialog,i=window.getSelection().anchorNode
return!this.hasScrollbar(r)||!this.isInside(i,r)||this.shouldScroll(r,n)}for(var o=0;o<t.length;o++){var a=t[o]
if(a===document)return!0
if(a===document.documentElement)return!0
if(a===this.$refs.content)return!0
if(this.hasScrollbar(a))return this.shouldScroll(a,n)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath()
for(var t=[],n=e.target;n;){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t
n=n.parentElement}},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(window.addEventListener("wheel",this.scrollListener),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),pn=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(e){e?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(e){this.originalValue=e,this.isActive=!1}}})
var vn={name:"stackable",data:function(){return{stackBase:null,stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0
var e=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[e])+2:O(e)
return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.stackBase||this.$el,n=[this.stackMinZIndex,O(t)],r=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(document.getElementsByClassName(this.stackClass))),i=0;i<r.length;i++)e.includes(r[i])||n.push(O(r[i]))
return Math.max.apply(Math,n)}}}
function bn(){return!1}function gn(e,t,n){n.args=n.args||{}
var r=n.args.closeConditional||bn
if(e&&!1!==r(e)&&!("isTrusted"in e&&!e.isTrusted||"pointerType"in e&&!e.pointerType)){var i=(n.args.include||function(){return[]})()
i.push(t),!function(e,t){var n=e.clientX,r=e.clientY,i=!0,o=!1,a=void 0
try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value
if(mn(c,n,r))return!0}}catch(e){o=!0,a=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}return!1}(e,i)&&setTimeout(function(){r(e)&&n.value(e)},0)}}function mn(e,t,n){var r=e.getBoundingClientRect()
return t>=r.left&&t<=r.right&&n>=r.top&&n<=r.bottom}var yn={inserted:function(e,t){var n=function(n){return gn(n,e,t)};(document.querySelector("[data-app]")||document.body).addEventListener("click",n,!0),e._clickOutside=n},unbind:function(e){if(e._clickOutside){var t=document.querySelector("[data-app]")||document.body
t&&t.removeEventListener("click",e._clickOutside,!0),delete e._clickOutside}}},_n=qe(pt).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:pt.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(e){return!e.isComment&&" "!==e.text})}}),wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var kn={name:"v-dialog",directives:{ClickOutside:yn},mixins:[cn,hn,dn,pn,vn,gt],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var e
return xn(e={},("v-dialog "+this.contentClass).trim(),!0),xn(e,"v-dialog--active",this.isActive),xn(e,"v-dialog--persistent",this.persistent),xn(e,"v-dialog--fullscreen",this.fullscreen),xn(e,"v-dialog--scrollable",this.scrollable),xn(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var e=this
this.$nextTick(function(){e.isBooted=e.isActive,e.isActive&&e.show()})},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this
this.animate=!1,this.$nextTick(function(){e.animate=!0,clearTimeout(e.animateTimeout),e.animateTimeout=setTimeout(function(){return e.animate=!1},150)})},closeConditional:function(e){return!(this.$refs.content.contains(e.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==e.target||this.animateClick(),!1):O(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):dn.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(e){this.$emit("keydown",e)},genActivator:function(){var e=this
if(!this.hasActivator)return null
var t=this.disabled?{}:{click:function(t){t.stopPropagation(),e.disabled||(e.isActive=!e.isActive)}}
if(this.$scopedSlots.activator){var n=this.$scopedSlots.activator({on:t})
return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:t},[this.$slots.activator])}},render:function(e){var t=this,n=[],r={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(e){e.stopPropagation()}}}
this.fullscreen||(r.style={maxWidth:"none"===this.maxWidth?void 0:M(this.maxWidth),width:"auto"===this.width?void 0:M(this.width)}),n.push(this.genActivator())
var i=e("div",r,this.showLazyContent(this.$slots.default))
return this.transition&&(i=e("transition",{props:{name:this.transition,origin:this.origin}},[i])),n.push(e("div",{class:this.contentClasses,attrs:wn({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(_n,{props:{root:!0,light:this.light,dark:this.dark}},[i])])),e("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}},Sn=Ue(sn,je,[],!1,null,"e7f91608",null)
ze()(Sn,{VBtn:xt,VDialog:kn}),Sn.options.__file="src/vue/PaymentDialog.vue"
var En=Sn.exports,An=function(){var e=this,t=e.$createElement,n=e._self._c||t
return n("v-dialog",{attrs:{lazy:"",persistent:"",scrollable:"","max-width":"600"},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null
e.visible=!1}},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{staticClass:"main-container"},[e.showPurchase?e._e():n("div",{staticClass:"start-choice"},[n("div",[e._v("What would you like to use to purchase LMB tokens")]),e._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{small:""},on:{click:function(t){e.buttonClick("bitcoin")}}},[e._v("Bitcoin")]),e._v(" "),n("v-btn",{attrs:{small:""},on:{click:function(t){e.buttonClick("ethereum")}}},[e._v("Ethereum")])],1)]),e._v(" "),e.showPurchase?n("div",{staticClass:"purchase-container"},[n("v-btn",{attrs:{small:""},on:{click:function(t){e.buttonClick("back")}}},[e._v("Back")]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.sendMessage)}}),e._v(" "),n("div",[e._v("Address = "+e._s(e.address))]),e._v(" "),n("p",[n("strong",[e._v("Rinkeby testnet. Do not send real coins!")])]),e._v(" "),n("p",[e._v("Exchange rate: 1 ETH = 1 LMB token")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/stellar/go/pull/81 ",target:"_blank "}},[e._v("Instructions")])]),e._v(" "),n("div",{staticClass:"progress "},[n("v-progress-linear",{model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress "}})],1),e._v(" "),n("div",[e._v("Status = "+e._s(e.status))]),e._v(" "),n("div",[e._v("Public Key = "+e._s(e.publicKey))]),e._v(" "),n("div",[e._v("Secret Key = "+e._s(e.secretKey))])],1):e._e(),e._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(t){e.visible=!1}}},[e._v("\n        Close\n      ")])],1)])])}
function On(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}An._withStripped=!0
var Tn=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._checkParams(t),this.params=t
var n={}
void 0!==t.horizonAllowHttp&&(n.allowHttp=t.horizonAllowHttp),this.horizon=new ae.Server(this.params.horizonURL,n),"test"===t.network?ae.Network.useTestNetwork():ae.Network.usePublicNetwork(),this.started=!1}var t,n,r
return t=e,(n=[{key:"startBitcoin",value:function(e){return this._start("bitcoin",e)}},{key:"startEthereum",value:function(e){return this._start("ethereum",e)}},{key:"_start",value:function(e,t){var n=this
if(this.started)throw new Error("Session already started")
return this.started=!0,this.keypair=ae.Keypair.random(),new Promise(function(r,i){ue.a.post("".concat(n.params.bifrostURL,"/generate-").concat(e,"-address"),"stellar_public_key=".concat(n.keypair.publicKey())).then(function(o){if(o.data.chain!==e)return i("Invalid chain")
if(2!==o.data.protocol_version)return i("Invalid protocol_version. Make sure Bifrost server is using the same protocol version.")
var a=o.data.address
r({address:a,keypair:n.keypair}),n.signer=o.data.signer
var s=new EventSource("".concat(n.params.bifrostURL,"/events?stream=").concat(a))
s.addEventListener("transaction_received",function(e){return t("transaction_received")},!1),s.addEventListener("account_created",function(e){return n._onAccountCreated(t)},!1),s.addEventListener("exchanged",function(e){t("exchanged"),s.close()},!1),s.addEventListener("exchanged_timelocked",function(e){t("exchanged_timelocked",JSON.parse(e.data)),s.close()},!1),s.addEventListener("error",function(e){return console.error(e)},!1)}).catch(function(e){console.log(e),i()})})}},{key:"_onAccountCreated",value:function(e){var t=this
e("account_created"),this.horizon.loadAccount(this.keypair.publicKey()).then(function(e){t._onAccountCreatedRecoveryTransactions(e.sequenceNumber())
var n=new ae.TransactionBuilder(e).addOperation(ae.Operation.setOptions({masterWeight:0,signer:{ed25519PublicKey:t.signer,weight:1}})).build()
return n.sign(t.keypair),t.horizon.submitTransaction(n)}).then(function(){return e("account_configured")}).catch(function(t){return e("error",t)})}},{key:"_checkParams",value:function(e){if(void 0===e)throw new Error("params not provided")
if(-1===["live","test"].indexOf(e.network))throw new Error("Invalid params.network")
for(var t=["bifrostURL","horizonURL"],n=0;n<t.length;n++){var r=t[n]
if("string"!=typeof e[r])throw new Error("params.".concat(r," required and must be of type 'string'"))}if(void 0!==e.recoveryPublicKey&&!ae.StrKey.isValidEd25519PublicKey(e.recoveryPublicKey))throw new Error("params.recoveryPublicKey is invalid")}},{key:"_onAccountCreatedRecoveryTransactions",value:function(e){if(void 0!==this.params.recoveryPublicKey){var t=new ae.Account(this.keypair.publicKey(),e),n=new ae.TransactionBuilder(t).addOperation(ae.Operation.accountMerge({destination:this.params.recoveryPublicKey})).build()
n.sign(this.keypair),this._submitRecovery(n)}}},{key:"_submitRecovery",value:function(e){var t=e.toEnvelope().toXDR().toString("base64"),n=encodeURIComponent(t)
return ue.a.post("".concat(this.params.bifrostURL,"/recovery-transaction"),"transaction_xdr=".concat(n))}}])&&On(t.prototype,n),r&&On(t,r),e}(),Mn={props:["ping","params"],data:function(){return{showPurchase:!1,purchaseCoin:"",progress:0,session:null,status:"",address:"loading...",publicKey:"",secretKey:"",visible:!1}},watch:{ping:function(){this.visible=!0}},computed:{sendMessage:function(){return"btc"===this.purchaseCoin?'<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>':'<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>'}},methods:{initBifrost:function(){this.session=new Tn(this.params)},startBitcoin:function(){var e=this
this.showPurchase=!0,this.purchaseCoin="btc",this.initBifrost(),this.session.startBitcoin(this.onEvent).then(function(t){e.setStatus("Waiting for a transaction...",10),e.address=t.address,e.publicKey=t.keypair.publicKey(),e.secretKey=t.keypair.secret()}).catch(function(e){console.log(JSON.stringify(e)),console.log(e)})},startEthereum:function(){var e=this
this.showPurchase=!0,this.purchaseCoin="eth",this.initBifrost(),this.session.startEthereum(this.onEvent).then(function(t){e.setStatus("Waiting for a transaction...",10),e.address=t.address,e.publicKey=t.keypair.publicKey(),e.secretKey=t.keypair.secret()}).catch(function(e){console.log(JSON.stringify(e)),console.log(e)})},setStatus:function(e,t){this.progress=t,this.status=e},onEvent:function(e,t){switch(e){case"transaction_received":this.setStatus("Transaction received, creating account...",20)
break
case"account_created":this.setStatus("Account created, creating trust lines...",40)
break
case"account_configured":this.setStatus("Account configured, waiting for tokens...",60)
break
case"exchanged_timelocked":this.setStatus("Congrats! TOKE purchased but will be locked.</pre>\nUnlock transaction: <pre>"+t.transaction+"</pre>",100)
break
case"exchanged":this.setStatus("Congrats! TOKE purchased.",100),this.$emit("new-account",this.secretKey)
break
case"error":this.setStatus("Error!",0),console.log(JSON.stringify(t))
break
default:this.setStatus("default swtich reached!",0)}},buttonClick:function(e){switch(e){case"test":this.test()
break
case"bitcoin":this.startBitcoin()
break
case"ethereum":this.startEthereum()
break
case"back":this.showPurchase=!1
break
default:console.log("no button with that name")}}}},Pn=(n(545),Ue(Mn,An,[],!1,null,"0b55ff9d",null))
ze()(Pn,{VBtn:xt,VDialog:kn,VProgressLinear:Qt}),Pn.options.__file="src/vue/BuyTokenDialog.vue"
var In=Pn.exports,Cn=function(){var e=this,t=e.$createElement,n=e._self._c||t
return n("div",{staticClass:"dialog-header"},[n("div",{staticClass:"dialog-header-text"},[n("p",[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"left-side-buttons"},[e.showBack?n("v-btn",{staticClass:"dialog-back-button",attrs:{slot:"activator",icon:"",dark:""},on:{click:function(t){e.buttonClick("back")}},slot:"activator"},[n("v-icon",[e._v("chevron_left")])],1):e._e()],1),e._v(" "),n("div",{staticClass:"right-side-buttons"},[n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[e.showPrint?n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(t){e.buttonClick("print")}},slot:"activator"},[n("v-icon",[e._v("print")])],1):e._e(),e._v(" "),n("span",[e._v("Print")])],1),e._v(" "),n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(t){e.buttonClick("close")}},slot:"activator"},[n("v-icon",[e._v(e._s(e.icon))])],1),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.tooltip)}})],1)],1)])}
Cn._withStripped=!0
var Rn={props:["title","help","showPrint","showBack"],computed:{tooltip:function(){return this.help?"Help":"Close"},icon:function(){return this.help?"help_outline":"close"}},methods:{buttonClick:function(e){this.$emit(e)}}},Bn=(n(547),n(549),o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this
this.clearDelay()
var r=parseInt(this[e+"Delay"],10)
this[e+"Timeout"]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},r)}}})),jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nn={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},Ln=o.a.extend({name:"menuable",mixins:[Je,vn],props:{activator:{default:null,validator:function(e){return["string","object"].includes(void 0===e?"undefined":jn(e))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,dimensions:Object.assign({},Nn),isContentActive:!1,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var e=this.dimensions.activator,t=this.dimensions.content,n=(this.isAttached?e.offsetLeft:e.left)||0,r=Math.max(e.width,t.width),i=0
if(i+=this.left?n-(r-e.width):n,this.offsetX){var o=isNaN(this.maxWidth)?e.width:Math.min(e.width,this.maxWidth)
i+=this.left?-o:e.width}return this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),i},computedTop:function(){var e=this.dimensions.activator,t=this.dimensions.content,n=0
return this.top&&(n+=e.height-t.height),this.isAttached?n+=e.offsetTop:n+=e.top+this.pageYOffset,this.offsetY&&(n+=this.top?-e.height:e.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(e){e&&this.callDeactivate()},isActive:function(e){this.disabled||(e?this.callActivate():this.callDeactivate())}},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(e){var t=isNaN(parseInt(this.maxWidth))?0:parseInt(this.maxWidth),n=this.getInnerWidth(),r=Math.max(this.dimensions.content.width,t),i=e+this.dimensions.activator.width-n
return(!this.left||this.right)&&i>0&&(e=n-r-(n>600?30:12)),e<0&&(e=12),e+this.getOffsetLeft()},calcYOverflow:function(e){var t=this.getInnerHeight(),n=this.pageYOffset+t,r=this.dimensions.activator,i=this.dimensions.content.height,o=n<e+i
return o&&this.offsetOverflow&&r.top>i?e=this.pageYOffset+(r.top-i):o&&!this.allowOverflow?e=n-i-12:e<this.pageYOffset&&!this.allowOverflow&&(e=this.pageYOffset+12),e<12?12:e},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!=typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.getOffsetTop())},deactivate:function(){},getActivator:function(e){return this.inputActivator?this.$el.querySelector(".v-input__slot"):this.activator?"string"==typeof this.activator?document.querySelector(this.activator):this.activator:this.$refs.activator?this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator:e?(this.activatedBy=e.currentTarget||e.target,this.activatedBy):this.activatedBy?this.activatedBy:void j("No activator found")},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getInnerWidth:function(){return this.hasWindow?window.innerWidth:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(e){var t=e.getBoundingClientRect()
return{top:Math.round(t.top),left:Math.round(t.left),bottom:Math.round(t.bottom),right:Math.round(t.right),width:Math.round(t.width),height:Math.round(t.height)}},measure:function(e){if(!e||!this.hasWindow)return null
var t=this.getRoundedBoundedClientRect(e)
if(this.isAttached){var n=window.getComputedStyle(e)
t.left=parseInt(n.marginLeft),t.top=parseInt(n.marginTop)}return t},sneakPeek:function(e){var t=this
requestAnimationFrame(function(){var n=t.$refs.content
if(!n||t.isShown(n))return e()
n.style.display="inline-block",e(),n.style.display="none"})},startTransition:function(){var e=this
return new Promise(function(t){return requestAnimationFrame(function(){e.isContentActive=e.hasJustFocused=e.isActive,t()})})},isShown:function(e){return"none"!==e.style.display},updateDimensions:function(){var e=this
this.checkForWindow(),this.checkForPageYOffset()
var t={}
if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition()
else{var n=this.getActivator()
t.activator=this.measure(n),t.activator.offsetLeft=n.offsetLeft,this.isAttached?t.activator.offsetTop=n.offsetTop:t.activator.offsetTop=0}this.sneakPeek(function(){t.content=e.measure(e.$refs.content),e.dimensions=t})}}})
function Un(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Dn={name:"v-tooltip",mixins:[$e,Bn,cn,hn,Ln,gt],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var e=this.dimensions,t=e.activator,n=e.content,r=!(this.bottom||this.left||this.top||this.right),i=this.isAttached?t.offsetLeft:t.left,o=0
return this.top||this.bottom||r?o=i+t.width/2-n.width/2:(this.left||this.right)&&(o=i+(this.right?t.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),this.calcXOverflow(o)+"px"},calculatedTop:function(){var e=this.dimensions,t=e.activator,n=e.content,r=this.isAttached?t.offsetTop:t.top,i=0
return this.top||this.bottom?i=r+(this.bottom?t.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=r+t.height/2-n.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.calcYOverflow(i+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:M(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},watch:{positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){var e=this
this.$nextTick(function(){e.value&&e.callActivate()})},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var e=this,t=this.disabled?{}:{mouseenter:function(t){e.getActivator(t),e.runDelay("open")},mouseleave:function(t){e.getActivator(t),e.runDelay("close")}}
if(this.$scopedSlots.activator){var n=this.$scopedSlots.activator({on:t})
return this.activatorNode=n,n}if(this.$slots.activator)return this.$createElement("span",{on:t,ref:"activator"},this.$slots.activator)}},render:function(e){var t,n=e("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Un(t,this.contentClass,!0),Un(t,"menuable__content__active",this.isActive),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default))
return e(this.tag,{staticClass:"v-tooltip",class:this.classes},[e("transition",{props:{name:this.computedTransition}},[n]),this.genActivator()])}},zn=Ue(Rn,Cn,[],!1,null,"53219965",null)
ze()(zn,{VBtn:xt,VIcon:At,VTooltip:Dn}),zn.options.__file="src/vue/DialogTitleBar.vue"
var qn=zn.exports
n.d(t,"StellarAPI",function(){return xe}),n.d(t,"HorizonServer",function(){return Se}),n.d(t,"PaymentDialog",function(){return En}),n.d(t,"PaymentView",function(){return an}),n.d(t,"DialogTitleBar",function(){return qn}),n.d(t,"BuyTokenDialog",function(){return In}),n.d(t,"StellarWallet",function(){return Ae}),n.d(t,"LedgerAPI",function(){return Be}),n.d(t,"LedgerAPITransport",function(){return Ce}),n.d(t,"TransactionLogger",function(){return _e}),n.d(t,"StellarSdk",function(){return ae}),o.a.use(oe)}])})
