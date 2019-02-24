!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("stellar-sdk"),require("axios")):"function"==typeof define&&define.amd?define(["stellar-sdk","axios"],e):"object"==typeof exports?exports["stellar-js-utils"]=e(require("stellar-sdk"),require("axios")):t["stellar-js-utils"]=e(t["stellar-sdk"],t.axios)}(window,function(t,e){return function(t){var e={}
function r(n){if(e[n])return e[n].exports
var o=e[n]={i:n,l:!1,exports:{}}
return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o))
return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=30)}([function(e,r){e.exports=t},function(t,e,r){var n=r(4),o=n.Buffer
function i(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return o(t,e,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=s),i(o,s),s.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return o(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var n=o(t)
return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return o(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return n.SlowBuffer(t)}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){var n=r(1).Buffer
function o(t,e){this._block=n.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}o.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=n.from(t,e))
for(var r=this._block,o=this._blockSize,i=t.length,s=this._len,a=0;a<i;){for(var u=s%o,c=Math.min(i-a,o-u),h=0;h<c;h++)r[u+h]=t[a+h]
a+=c,(s+=c)%o==0&&this._update(r)}return this._len+=i,this},o.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var r=8*this._len
if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4)
else{var n=(4294967295&r)>>>0,o=(r-n)/4294967296
this._block.writeUInt32BE(o,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block)
var i=this._hash()
return t?i.toString(t):i},o.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=o},function(t,e,r){"use strict";(function(t){var n=r(13),o=r(14),i=r(15)
function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,r)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return f(this,t)}return c(this,t,e,r)}function c(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds")
e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n)
u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=l(t,e)
return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8")
if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding')
var n=0|d(e,r),o=(t=a(t,n)).write(e,r)
o!==n&&(t=t.slice(0,o))
return t}(t,e,r):function(t,e){if(u.isBuffer(e)){var r=0|p(e.length)
return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):l(t,e)
if("Buffer"===e.type&&i(e.data))return l(t,e.data)}var n
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(h(e),t=a(t,e<0?0:0|p(e)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0
return t}function l(t,e){var r=e.length<0?0:0|p(e.length)
t=a(t,r)
for(var n=0;n<r;n+=1)t[n]=255&e[n]
return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes")
return 0|t}function d(t,e){if(u.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var r=t.length
if(0===r)return 0
for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r
case"utf8":case"utf-8":case void 0:return K(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r
case"hex":return r>>>1
case"base64":return j(t).length
default:if(n)return K(t).length
e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=t[e]
t[e]=t[r],t[r]=n}function y(t,e,r,n,o){if(0===t.length)return-1
if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1
r=t.length-1}else if(r<0){if(!o)return-1
r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:g(t,e,r,n,o)
if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):g(t,[e],r,n,o)
throw new TypeError("val must be string, number or Buffer")}function g(t,e,r,n,o){var i,s=1,a=t.length,u=e.length
if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1
s=2,a/=2,u/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var h=-1
for(i=r;i<a;i++)if(c(t,i)===c(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===u)return h*s}else-1!==h&&(i-=i-h),h=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,l=0;l<u;l++)if(c(t,i+l)!==c(e,l)){f=!1
break}if(f)return i}return-1}function _(t,e,r,n){r=Number(r)||0
var o=t.length-r
n?(n=Number(n))>o&&(n=o):n=o
var i=e.length
if(i%2!=0)throw new TypeError("Invalid hex string")
n>i/2&&(n=i/2)
for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16)
if(isNaN(a))return s
t[r+s]=a}return s}function b(t,e,r,n){return Y(K(e,t.length-r),t,r,n)}function m(t,e,r,n){return Y(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r))
return e}(e),t,r,n)}function w(t,e,r,n){return m(t,e,r,n)}function E(t,e,r,n){return Y(j(e),t,r,n)}function A(t,e,r,n){return Y(function(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n)
return i}(e,t.length-r),t,r,n)}function T(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r)
for(var n=[],o=e;o<r;){var i,s,a,u,c=t[o],h=null,f=c>239?4:c>223?3:c>191?2:1
if(o+f<=r)switch(f){case 1:c<128&&(h=c)
break
case 2:128==(192&(i=t[o+1]))&&(u=(31&c)<<6|63&i)>127&&(h=u)
break
case 3:i=t[o+1],s=t[o+2],128==(192&i)&&128==(192&s)&&(u=(15&c)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(h=u)
break
case 4:i=t[o+1],s=t[o+2],a=t[o+3],128==(192&i)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(h=u)}null===h?(h=65533,f=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=f}return function(t){var e=t.length
if(e<=S)return String.fromCharCode.apply(String,t)
var r="",n=0
for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=S))
return r}(n)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0)
return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,r){return c(null,t,e,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,r){return function(t,e,r,n){return h(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},u.allocUnsafe=function(t){return f(null,t)},u.allocUnsafeSlow=function(t){return f(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers")
if(t===e)return 0
for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o]
break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},u.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return u.alloc(0)
var r
if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length
var n=u.allocUnsafe(e),o=0
for(r=0;r<t.length;++r){var s=t[r]
if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers')
s.copy(n,o),o+=s.length}return n},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)v(this,e,e+1)
return this},u.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2)
return this},u.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4)
return this},u.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?C(this,0,t):function(t,e,r){var n=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===r||r>this.length)&&(r=this.length),r<=0)return""
if((r>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return k(this,e,r)
case"utf8":case"utf-8":return C(this,e,r)
case"ascii":return O(this,e,r)
case"latin1":case"binary":return P(this,e,r)
case"base64":return T(this,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r)
default:if(n)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,r,n,o){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index")
if(n>=o&&e>=r)return 0
if(n>=o)return-1
if(e>=r)return 1
if(this===t)return 0
for(var i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(i,s),c=this.slice(n,o),h=t.slice(e,r),f=0;f<a;++f)if(c[f]!==h[f]){i=c[f],s=h[f]
break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0
else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e
if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
n||(n="utf8")
for(var i=!1;;)switch(n){case"hex":return _(this,t,e,r)
case"utf8":case"utf-8":return b(this,t,e,r)
case"ascii":return m(this,t,e,r)
case"latin1":case"binary":return w(this,t,e,r)
case"base64":return E(this,t,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r)
default:if(i)throw new TypeError("Unknown encoding: "+n)
n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var S=4096
function O(t,e,r){var n=""
r=Math.min(t.length,r)
for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o])
return n}function P(t,e,r){var n=""
r=Math.min(t.length,r)
for(var o=e;o<r;++o)n+=String.fromCharCode(t[o])
return n}function k(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n)
for(var o="",i=e;i<r;++i)o+=F(t[i])
return o}function I(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1])
return o}function R(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,r,n,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>o||e<i)throw new RangeError('"value" argument is out of bounds')
if(r+n>t.length)throw new RangeError("Index out of range")}function B(t,e,r,n){e<0&&(e=65535+e+1)
for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function x(t,e,r,n){e<0&&(e=4294967295+e+1)
for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function N(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range")
if(r<0)throw new RangeError("Index out of range")}function M(t,e,r,n,i){return i||N(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function L(t,e,r,n,i){return i||N(t,0,r,8),o.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){var r,n=this.length
if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=u.prototype
else{var o=e-t
r=new u(o,void 0)
for(var i=0;i<o;++i)r[i]=this[i+t]}return r},u.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||R(t,e,this.length)
for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o
return n},u.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||R(t,e,this.length)
for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o
return n},u.prototype.readUInt8=function(t,e){return e||R(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||R(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||R(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||R(t,e,this.length)
for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o
return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||R(t,e,this.length)
for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o
return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||R(t,2,this.length)
var r=this[t]|this[t+1]<<8
return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){e||R(t,2,this.length)
var r=this[t+1]|this[t]<<8
return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0)
var o=1,i=0
for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255
return e+r},u.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0)
var o=r-1,i=1
for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255
return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):B(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):B(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):x(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):x(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1)
U(this,t,e,r,o-1,-o)}var i=0,s=1,a=0
for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255
return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1)
U(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0
for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255
return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):B(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):B(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):x(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):x(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,r){return M(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return M(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return L(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return L(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds")
if(n<0)throw new RangeError("sourceEnd out of bounds")
n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r)
var o,i=n-r
if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r]
else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r]
else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e)
return i},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0)
o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string")
if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255)
if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index")
if(r<=e)return this
var i
if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t
else{var s=u.isBuffer(t)?t:K(new u(t,n).toString()),a=s.length
for(i=0;i<r-e;++i)this[i+e]=s[i%a]}return this}
var D=/[^+\/0-9A-Za-z-_]/g
function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function K(t,e){var r
e=e||1/0
for(var n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189)
continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189)
continue}o=r
continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r
continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189)
if(o=null,r<128){if((e-=1)<0)break
i.push(r)}else if(r<2048){if((e-=2)<0)break
i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break
i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function j(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function Y(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o]
return o}}).call(this,r(5))},function(t,e){var r
r=function(){return this}()
try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict"
var n,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)}
n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)}
var s=Number.isNaN||function(t){return t!=t}
function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0
var u=10
function c(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function h(t,e,r,n){var o,i,s,a
if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)
if(void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),s=i[e]),void 0===s)s=i[e]=r,++t._eventsCount
else if("function"==typeof s?s=i[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=c(t))>0&&s.length>o&&!s.warned){s.warned=!0
var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit")
u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return t}function f(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e])
this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,t))}.bind(n)
return o.listener=r,n.wrapFn=o,o}function l(t,e,r){var n=t._events
if(void 0===n)return[]
var o=n[e]
return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r]
return e}(o):d(o,o.length)}function p(t){var e=this._events
if(void 0!==e){var r=e[t]
if("function"==typeof r)return 1
if(void 0!==r)return r.length}return 0}function d(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n]
return r}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".")
u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".")
return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r])
var n="error"===t,o=this._events
if(void 0!==o)n=n&&void 0===o.error
else if(!n)return!1
if(n){var s
if(e.length>0&&(s=e[0]),s instanceof Error)throw s
var a=new Error("Unhandled error."+(s?" ("+s.message+")":""))
throw a.context=s,a}var u=o[t]
if(void 0===u)return!1
if("function"==typeof u)i(u,this,e)
else{var c=u.length,h=d(u,c)
for(r=0;r<c;++r)i(h[r],this,e)}return!0},a.prototype.addListener=function(t,e){return h(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return h(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
return this.on(t,f(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
return this.prependListener(t,f(this,t,e)),this},a.prototype.removeListener=function(t,e){var r,n,o,i,s
if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
if(void 0===(n=this._events))return this
if(void 0===(r=n[t]))return this
if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e))
else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){s=r[i].listener,o=i
break}if(o<0)return this
0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1]
t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,r,n
if(void 0===(r=this._events))return this
if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this
if(0===arguments.length){var o,i=Object.keys(r)
for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e)
else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n])
return this},a.prototype.listeners=function(t){return l(this,t,!0)},a.prototype.rawListeners=function(t){return l(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},a.prototype.listenerCount=p,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,r){var n=r(2),o=r(3),i=r(1).Buffer,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],a=new Array(64)
function u(){this.init(),this._w=a,o.call(this,64,56)}function c(t,e,r){return r^t&(e^r)}function h(t,e,r){return t&e|r&(t|e)}function f(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function p(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}n(u,o),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,a=0|this._d,u=0|this._e,d=0|this._f,v=0|this._g,y=0|this._h,g=0;g<16;++g)r[g]=t.readInt32BE(4*g)
for(;g<64;++g)r[g]=0|(((e=r[g-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+r[g-7]+p(r[g-15])+r[g-16]
for(var _=0;_<64;++_){var b=y+l(u)+c(u,d,v)+s[_]+r[_]|0,m=f(n)+h(n,o,i)|0
y=v,v=d,d=u,u=a+b|0,a=i,i=o,o=n,n=b+m|0}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=a+this._d|0,this._e=u+this._e|0,this._f=d+this._f|0,this._g=v+this._g|0,this._h=y+this._h|0},u.prototype._hash=function(){var t=i.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=u},function(t,e,r){var n=r(2),o=r(3),i=r(1).Buffer,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],a=new Array(160)
function u(){this.init(),this._w=a,o.call(this,128,112)}function c(t,e,r){return r^t&(e^r)}function h(t,e,r){return t&e|r&(t|e)}function f(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function v(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function y(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function g(t,e){return t>>>0<e>>>0?1:0}n(u,o),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(t){for(var e=this._w,r=0|this._ah,n=0|this._bh,o=0|this._ch,i=0|this._dh,a=0|this._eh,u=0|this._fh,_=0|this._gh,b=0|this._hh,m=0|this._al,w=0|this._bl,E=0|this._cl,A=0|this._dl,T=0|this._el,C=0|this._fl,S=0|this._gl,O=0|this._hl,P=0;P<32;P+=2)e[P]=t.readInt32BE(4*P),e[P+1]=t.readInt32BE(4*P+4)
for(;P<160;P+=2){var k=e[P-30],I=e[P-30+1],R=p(k,I),U=d(I,k),B=v(k=e[P-4],I=e[P-4+1]),x=y(I,k),N=e[P-14],M=e[P-14+1],L=e[P-32],D=e[P-32+1],F=U+M|0,K=R+N+g(F,U)|0
K=(K=K+B+g(F=F+x|0,x)|0)+L+g(F=F+D|0,D)|0,e[P]=K,e[P+1]=F}for(var j=0;j<160;j+=2){K=e[j],F=e[j+1]
var Y=h(r,n,o),z=h(m,w,E),q=f(r,m),G=f(m,r),H=l(a,T),W=l(T,a),V=s[j],X=s[j+1],Q=c(a,u,_),J=c(T,C,S),Z=O+W|0,$=b+H+g(Z,O)|0
$=($=($=$+Q+g(Z=Z+J|0,J)|0)+V+g(Z=Z+X|0,X)|0)+K+g(Z=Z+F|0,F)|0
var tt=G+z|0,et=q+Y+g(tt,G)|0
b=_,O=S,_=u,S=C,u=a,C=T,a=i+$+g(T=A+Z|0,A)|0,i=o,A=E,o=n,E=w,n=r,w=m,r=$+et+g(m=Z+tt|0,Z)|0}this._al=this._al+m|0,this._bl=this._bl+w|0,this._cl=this._cl+E|0,this._dl=this._dl+A|0,this._el=this._el+T|0,this._fl=this._fl+C|0,this._gl=this._gl+S|0,this._hl=this._hl+O|0,this._ah=this._ah+r+g(this._al,m)|0,this._bh=this._bh+n+g(this._bl,w)|0,this._ch=this._ch+o+g(this._cl,E)|0,this._dh=this._dh+i+g(this._dl,A)|0,this._eh=this._eh+a+g(this._el,T)|0,this._fh=this._fh+u+g(this._fl,C)|0,this._gh=this._gh+_+g(this._gl,S)|0,this._hh=this._hh+b+g(this._hl,O)|0},u.prototype._hash=function(){var t=i.allocUnsafe(64)
function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=u},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.StatusCodes=e.DBNotReset=e.DBWrongPassword=e.NoDBPathGiven=e.GenuineCheckFailed=e.PairingFailed=e.SyncError=e.FeeRequired=e.FeeNotLoaded=e.CantScanQRCode=e.ETHAddressNonEIP=e.WrongDeviceForAccount=e.WebsocketConnectionFailed=e.WebsocketConnectionError=e.UserRefusedOnDevice=e.UserRefusedFirmwareUpdate=e.UserRefusedAddress=e.UpdateYourApp=e.UnexpectedBootloader=e.TimeoutTagged=e.PasswordIncorrectError=e.PasswordsDontMatchError=e.NotEnoughBalanceBecauseDestinationNotCreated=e.NotEnoughBalance=e.NoAddressesFound=e.NetworkDown=e.ManagerUninstallBTCDep=e.ManagerNotEnoughSpaceError=e.ManagerDeviceLockedError=e.ManagerAppRelyOnBTCError=e.ManagerAppAlreadyInstalledError=e.LedgerAPINotAvailable=e.LedgerAPIErrorWithMessage=e.LedgerAPIError=e.UnknownMCU=e.LatestMCUInstalledError=e.InvalidAddressBecauseDestinationIsAlsoSource=e.InvalidAddress=e.HardResetFail=e.FeeEstimationFailed=e.EnpointConfigError=e.DisconnectedDeviceDuringOperation=e.DisconnectedDevice=e.DeviceSocketNoBulkStatus=e.DeviceSocketFail=e.DeviceOnDashboardExpected=e.DeviceNotGenuineError=e.DeviceGenuineSocketEarlyClose=e.DeviceAppVerifyNotSupported=e.CantOpenDevice=e.BtcUnmatchedApp=e.BluetoothRequired=e.AccountNameRequiredError=void 0,e.TransportError=o,e.getAltStatusMessage=s,e.TransportStatusError=a
var n=r(29)
e.AccountNameRequiredError=(0,n.createCustomErrorClass)("AccountNameRequired"),e.BluetoothRequired=(0,n.createCustomErrorClass)("BluetoothRequired"),e.BtcUnmatchedApp=(0,n.createCustomErrorClass)("BtcUnmatchedApp"),e.CantOpenDevice=(0,n.createCustomErrorClass)("CantOpenDevice"),e.DeviceAppVerifyNotSupported=(0,n.createCustomErrorClass)("DeviceAppVerifyNotSupported"),e.DeviceGenuineSocketEarlyClose=(0,n.createCustomErrorClass)("DeviceGenuineSocketEarlyClose"),e.DeviceNotGenuineError=(0,n.createCustomErrorClass)("DeviceNotGenuine"),e.DeviceOnDashboardExpected=(0,n.createCustomErrorClass)("DeviceOnDashboardExpected"),e.DeviceSocketFail=(0,n.createCustomErrorClass)("DeviceSocketFail"),e.DeviceSocketNoBulkStatus=(0,n.createCustomErrorClass)("DeviceSocketNoBulkStatus"),e.DisconnectedDevice=(0,n.createCustomErrorClass)("DisconnectedDevice"),e.DisconnectedDeviceDuringOperation=(0,n.createCustomErrorClass)("DisconnectedDeviceDuringOperation"),e.EnpointConfigError=(0,n.createCustomErrorClass)("EnpointConfig"),e.FeeEstimationFailed=(0,n.createCustomErrorClass)("FeeEstimationFailed"),e.HardResetFail=(0,n.createCustomErrorClass)("HardResetFail"),e.InvalidAddress=(0,n.createCustomErrorClass)("InvalidAddress"),e.InvalidAddressBecauseDestinationIsAlsoSource=(0,n.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource"),e.LatestMCUInstalledError=(0,n.createCustomErrorClass)("LatestMCUInstalledError"),e.UnknownMCU=(0,n.createCustomErrorClass)("UnknownMCU"),e.LedgerAPIError=(0,n.createCustomErrorClass)("LedgerAPIError"),e.LedgerAPIErrorWithMessage=(0,n.createCustomErrorClass)("LedgerAPIErrorWithMessage"),e.LedgerAPINotAvailable=(0,n.createCustomErrorClass)("LedgerAPINotAvailable"),e.ManagerAppAlreadyInstalledError=(0,n.createCustomErrorClass)("ManagerAppAlreadyInstalled"),e.ManagerAppRelyOnBTCError=(0,n.createCustomErrorClass)("ManagerAppRelyOnBTC"),e.ManagerDeviceLockedError=(0,n.createCustomErrorClass)("ManagerDeviceLocked"),e.ManagerNotEnoughSpaceError=(0,n.createCustomErrorClass)("ManagerNotEnoughSpace"),e.ManagerUninstallBTCDep=(0,n.createCustomErrorClass)("ManagerUninstallBTCDep"),e.NetworkDown=(0,n.createCustomErrorClass)("NetworkDown"),e.NoAddressesFound=(0,n.createCustomErrorClass)("NoAddressesFound"),e.NotEnoughBalance=(0,n.createCustomErrorClass)("NotEnoughBalance"),e.NotEnoughBalanceBecauseDestinationNotCreated=(0,n.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated"),e.PasswordsDontMatchError=(0,n.createCustomErrorClass)("PasswordsDontMatch"),e.PasswordIncorrectError=(0,n.createCustomErrorClass)("PasswordIncorrect"),e.TimeoutTagged=(0,n.createCustomErrorClass)("TimeoutTagged"),e.UnexpectedBootloader=(0,n.createCustomErrorClass)("UnexpectedBootloader"),e.UpdateYourApp=(0,n.createCustomErrorClass)("UpdateYourApp"),e.UserRefusedAddress=(0,n.createCustomErrorClass)("UserRefusedAddress"),e.UserRefusedFirmwareUpdate=(0,n.createCustomErrorClass)("UserRefusedFirmwareUpdate"),e.UserRefusedOnDevice=(0,n.createCustomErrorClass)("UserRefusedOnDevice"),e.WebsocketConnectionError=(0,n.createCustomErrorClass)("WebsocketConnectionError"),e.WebsocketConnectionFailed=(0,n.createCustomErrorClass)("WebsocketConnectionFailed"),e.WrongDeviceForAccount=(0,n.createCustomErrorClass)("WrongDeviceForAccount"),e.ETHAddressNonEIP=(0,n.createCustomErrorClass)("ETHAddressNonEIP"),e.CantScanQRCode=(0,n.createCustomErrorClass)("CantScanQRCode"),e.FeeNotLoaded=(0,n.createCustomErrorClass)("FeeNotLoaded"),e.FeeRequired=(0,n.createCustomErrorClass)("FeeRequired"),e.SyncError=(0,n.createCustomErrorClass)("SyncError"),e.PairingFailed=(0,n.createCustomErrorClass)("PairingFailed"),e.GenuineCheckFailed=(0,n.createCustomErrorClass)("GenuineCheckFailed"),e.NoDBPathGiven=(0,n.createCustomErrorClass)("NoDBPathGiven"),e.DBWrongPassword=(0,n.createCustomErrorClass)("DBWrongPassword"),e.DBNotReset=(0,n.createCustomErrorClass)("DBNotReset")
function o(t,e){this.name="TransportError",this.message=t,this.stack=(new Error).stack,this.id=e}o.prototype=new Error
var i=e.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function s(t){switch(t){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=t&&t<=28671)return"Internal error, please report"}function a(t){this.name="TransportStatusError"
var e=Object.keys(i).find(function(e){return i[e]===t})||"UNKNOWN_ERROR",r=s(t)||e,n=t.toString(16)
this.message="Ledger device: "+r+" (0x"+n+")",this.stack=(new Error).stack,this.statusCode=t,this.statusText=e}a.prototype=new Error},function(t,r){t.exports=e},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(16)
var i=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v"
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.transport=t,t.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],r)}return n(e,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(t){var e=1===t[0]||t[1]<2
return{version:t[1]+"."+t[2]+"."+t[3],multiOpsEnabled:e}})}},{key:"getPublicKey",value:function(e,r,n){var i=this;(0,o.checkStellarBip32Path)(e)
var s=[],a=void 0,u=(0,o.splitPath)(e),c=new t(1+4*u.length)
c[0]=u.length,u.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)})
var h=t.from("via lumina","ascii")
s.push(t.concat([c,h]))
var f=!1
return(0,o.foreach)(s,function(e){return i.transport.send(224,f?16:2,r?1:0,n?1:0,e,[36864,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(f=!0,s.push(t.alloc(0))),a=e})}).then(function(){var t=0,e=a.slice(t,t+32)
t+=32
var n=(0,o.encodeEd25519PublicKey)(e)
if(r){var i=a.slice(t,t+64)
if(!(0,o.verifyEd25519Signature)(h,i,e))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:n}})}},{key:"signTransaction",value:function(e,r){var n=this
if((0,o.checkStellarBip32Path)(e),r.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+r.length)
var i=[],s=void 0,a=(0,o.splitPath)(e),u=1+4*a.length,c=t.alloc(u)
c[0]=a.length,a.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)})
var h=150-u
if(r.length<=h)i.push(t.concat([c,r]))
else{var f=t.alloc(h),l=0
for(r.copy(f,0,l,h),i.push(t.concat([c,f])),l+=h;l<r.length;){var p=r.length-l
h=p<150?p:150,f=t.alloc(h),r.copy(f,0,l,l+h),l+=h,i.push(f)}}var d=!1
return(0,o.foreach)(i,function(e,r){return n.transport.send(224,d?16:4,0===r?0:128,r===i.length-1?0:128,e,[36864,27013,27684,27685,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(d=!0,i.push(t.alloc(0))),s=e})}).then(function(){var i=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===i)return{signature:t.from(s.slice(0,s.length-2))}
if(27684===i)return n.signHash_private(e,(0,o.hash)(r))
if(27685===i)return n.signHash_private(e,(0,o.hash)(r))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(t,e){return(0,o.checkStellarBip32Path)(t),this.signHash_private(t,e)}},{key:"signHash_private",value:function(e,r){var n=this,i=[],s=void 0,a=(0,o.splitPath)(e),u=t.alloc(1+4*a.length)
u[0]=a.length,a.forEach(function(t,e){u.writeUInt32BE(t,1+4*e)}),i.push(t.concat([u,r]))
var c=!1
return(0,o.foreach)(i,function(e){return n.transport.send(224,c?16:8,0,0,e,[36864,27013,27750,27904,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(c=!0,i.push(t.alloc(0))),s=e})}).then(function(){var e=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===e)return{signature:t.from(s.slice(0,s.length-2))}
throw 27013===e?new Error("Transaction approval request was rejected"):27904===e?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),e}()
e.default=i}).call(this,r(4).Buffer)},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(25),a=r(28),u=(n=a)&&n.__esModule?n:{default:n},c=r(9)
function h(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,r){return function n(o,i){try{var s=e[o](i),a=s.value}catch(t){return void r(t)}if(!s.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})
t(a)}("next")})}}var f=function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},l=function(t){return t.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*t.length%4)}
function p(e,r,n,o,i){var a=function(e,r){for(var n=t.alloc(e.length),o=0;o<e.length;o++)n[o]=e[o]^r[o%r.length]
return n}(e,o),u=t.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),c={version:"U2F_V2",keyHandle:f(a.toString("base64")),challenge:f(u.toString("base64")),appId:location.origin}
return n&&n("=> "+e.toString("hex")),(0,s.sign)(c,r/1e3).then(function(e){var r=e.signatureData
if("string"==typeof r){var o=t.from(l(r),"base64"),s=void 0
return s=i?o.slice(5):o,n&&n("<= "+s.toString("hex")),s}throw e})}var d=[]
var v=function(e){function r(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r)
var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this))
return t.unwrap=!0,d.push(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,u.default),i(r,null,[{key:"open",value:function(){var t=h(regeneratorRuntime.mark(function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new r)
case 1:case"end":return t.stop()}},t,this)}))
return function(e){return t.apply(this,arguments)}}()}]),i(r,[{key:"exchange",value:function(){var t=h(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return t.abrupt("return",t.sent)
case 6:if(t.prev=6,t.t0=t.catch(0),!("object"===o(t.t0.metaData))){t.next=14
break}throw 5===t.t0.metaData.code&&(d.forEach(function(t){return t.emit("disconnect")}),d=[]),r=t.t0,n="Failed to sign with Ledger device: U2F "+t.t0.metaData.type,i="U2F_"+t.t0.metaData.code,s=void 0,(s=new c.TransportError(n,i)).originalError=r,s
case 14:throw t.t0
case 15:case"end":return t.stop()}var r,n,i,s},t,this,[[0,6]])}))
return function(e){return t.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(e){this.scrambleKey=t.from(e,"ascii")}},{key:"setUnwrap",value:function(t){this.unwrap=t}},{key:"close",value:function(){return Promise.resolve()}}]),r}()
v.isSupported=s.isSupported,v.list=function(){return(0,s.isSupported)().then(function(t){return t?[null]:[]})},v.listen=function(t){var e=!1
return(0,s.isSupported)().then(function(r){e||(r?(t.next({type:"add",descriptor:null}),t.complete()):t.error(new c.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){e=!0}}},e.default=v}).call(this,r(4).Buffer)},function(t,e,r){"use strict"
e.byteLength=function(t){var e=c(t),r=e[0],n=e[1]
return 3*(r+n)/4-n},e.toByteArray=function(t){for(var e,r=c(t),n=r[0],s=r[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,n,s)),u=0,h=s>0?n-4:n,f=0;f<h;f+=4)e=o[t.charCodeAt(f)]<<18|o[t.charCodeAt(f+1)]<<12|o[t.charCodeAt(f+2)]<<6|o[t.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e
2===s&&(e=o[t.charCodeAt(f)]<<2|o[t.charCodeAt(f+1)]>>4,a[u++]=255&e)
1===s&&(e=o[t.charCodeAt(f)]<<10|o[t.charCodeAt(f+1)]<<4|o[t.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e)
return a},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],s=0,a=r-o;s<a;s+=16383)i.push(h(t,s,s+16383>a?a:s+16383))
1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="))
return i.join("")}
for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)n[a]=s[a],o[s.charCodeAt(a)]=a
function c(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var r=t.indexOf("=")
return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,r){for(var o,i,s=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i])
return s.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,c=u>>1,h=-7,f=r?o-1:0,l=r?-1:1,p=t[e+f]
for(f+=l,i=p&(1<<-h)-1,p>>=-h,h+=a;h>0;i=256*i+t[e+f],f+=l,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=n;h>0;s=256*s+t[e+f],f+=l,h-=8);if(0===i)i=1-c
else{if(i===u)return s?NaN:1/0*(p?-1:1)
s+=Math.pow(2,n),i-=c}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,u,c=8*i-o-1,h=(1<<c)-1,f=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,v=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+f>=1?l/u:l*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[r+p]=255&s,p+=d,s/=256,c-=8);t[r+p-d]|=128*v}},function(t,e){var r={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.splitPath=function(t){var e=[]
return t.split("/").forEach(function(t){var r=parseInt(t,10)
isNaN(r)||(t.length>1&&"'"===t[t.length-1]&&(r+=2147483648),e.push(r))}),e},e.foreach=function(t,e){return Promise.resolve().then(function(){return function t(r,n,o){return r>=n.length?o:e(n[r],r).then(function(e){return o.push(e),t(r+1,n,o)})}(0,t,[])})},e.crc16xmodem=a,e.encodeEd25519PublicKey=function(e){var r=t.from(e),o=t.from([48]),i=t.concat([o,r]),s=t.alloc(2)
s.writeUInt16LE(a(i),0)
var u=t.concat([i,s])
return n.default.encode(u)},e.verifyEd25519Signature=function(t,e,r){return o.default.sign.detached.verify(new Uint8Array(t.toJSON().data),new Uint8Array(e.toJSON().data),new Uint8Array(r.toJSON().data))},e.hash=function(t){var e=new i.sha256
return e.update(t,"utf8"),e.digest()},e.checkStellarBip32Path=function(t){t.split("/").forEach(function(t){if(!t.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var n=s(r(17)),o=s(r(18)),i=r(20)
function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e){for(var r=void 0!==e?~~e:0,n=0;n<t.length;n++){var o=r>>>8&255
o^=255&t[n],r=r<<8&65535,r^=o^=o>>>4,r^=o=o<<5&65535,r^=o=o<<7&65535}return r}}).call(this,r(4).Buffer)},function(t,e,r){"use strict"
var n=function(t,e){return e||(e={}),t.split("").forEach(function(t,r){t in e||(e[t]=r)}),e},o={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}}
o.charmap=n(o.alphabet,o.charmap)
var i={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}}
i.charmap=n(i.alphabet,i.charmap)
var s={alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",charmap:{}}
function a(t){if(this.buf=[],this.shift=8,this.carry=0,t){switch(t.type){case"rfc4648":this.charmap=e.rfc4648.charmap
break
case"crockford":this.charmap=e.crockford.charmap
break
case"base32hex":this.charmap=e.base32hex.charmap
break
default:throw new Error("invalid type")}t.charmap&&(this.charmap=t.charmap)}}function u(t){if(this.buf="",this.shift=3,this.carry=0,t){switch(t.type){case"rfc4648":this.alphabet=e.rfc4648.alphabet
break
case"crockford":this.alphabet=e.crockford.alphabet
break
case"base32hex":this.alphabet=e.base32hex.alphabet
break
default:throw new Error("invalid type")}t.alphabet?this.alphabet=t.alphabet:t.lc&&(this.alphabet=this.alphabet.toLowerCase())}}s.charmap=n(s.alphabet,s.charmap),a.prototype.charmap=o.charmap,a.prototype.write=function(t){var e=this.charmap,r=this.buf,n=this.shift,o=this.carry
return t.toUpperCase().split("").forEach(function(t){if("="!=t){var i=255&e[t];(n-=5)>0?o|=i<<n:n<0?(r.push(o|i>>-n),o=i<<(n+=8)&255):(r.push(o|i),n=8,o=0)}}),this.shift=n,this.carry=o,this},a.prototype.finalize=function(t){return t&&this.write(t),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},u.prototype.alphabet=o.alphabet,u.prototype.write=function(t){var e,r,n,o=this.shift,i=this.carry
for(n=0;n<t.length;n++)e=i|(r=t[n])>>o,this.buf+=this.alphabet[31&e],o>5&&(e=r>>(o-=5),this.buf+=this.alphabet[31&e]),i=r<<(o=5-o),o=8-o
return this.shift=o,this.carry=i,this},u.prototype.finalize=function(t){return t&&this.write(t),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},e.encode=function(t,e){return new u(e).finalize(t)},e.decode=function(t,e){return new a(e).finalize(t)},e.Decoder=a,e.Encoder=u,e.charmap=n,e.crockford=i,e.rfc4648=o,e.base32hex=s},function(t,e,r){!function(t){"use strict"
var e=function(t){var e,r=new Float64Array(16)
if(t)for(e=0;e<t.length;e++)r[e]=t[e]
return r},n=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32)
i[0]=9
var s=e(),a=e([1]),u=e([56129,1]),c=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),h=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),f=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function d(t,e,r,n){t[e]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r,t[e+4]=n>>24&255,t[e+5]=n>>16&255,t[e+6]=n>>8&255,t[e+7]=255&n}function v(t,e,r,n,o){var i,s=0
for(i=0;i<o;i++)s|=t[e+i]^r[n+i]
return(1&s-1>>>8)-1}function y(t,e,r,n){return v(t,e,r,n,16)}function g(t,e,r,n){return v(t,e,r,n,32)}function _(t,e,r,n){!function(t,e,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,c=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,d=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,v=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,g=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,_=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,b=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,m=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=i,E=s,A=a,T=u,C=c,S=h,O=f,P=l,k=p,I=d,R=v,U=y,B=g,x=_,N=b,M=m,L=0;L<20;L+=2)w^=(o=(B^=(o=(k^=(o=(C^=(o=w+B|0)<<7|o>>>25)+w|0)<<9|o>>>23)+C|0)<<13|o>>>19)+k|0)<<18|o>>>14,S^=(o=(E^=(o=(x^=(o=(I^=(o=S+E|0)<<7|o>>>25)+S|0)<<9|o>>>23)+I|0)<<13|o>>>19)+x|0)<<18|o>>>14,R^=(o=(O^=(o=(A^=(o=(N^=(o=R+O|0)<<7|o>>>25)+R|0)<<9|o>>>23)+N|0)<<13|o>>>19)+A|0)<<18|o>>>14,M^=(o=(U^=(o=(P^=(o=(T^=(o=M+U|0)<<7|o>>>25)+M|0)<<9|o>>>23)+T|0)<<13|o>>>19)+P|0)<<18|o>>>14,w^=(o=(T^=(o=(A^=(o=(E^=(o=w+T|0)<<7|o>>>25)+w|0)<<9|o>>>23)+E|0)<<13|o>>>19)+A|0)<<18|o>>>14,S^=(o=(C^=(o=(P^=(o=(O^=(o=S+C|0)<<7|o>>>25)+S|0)<<9|o>>>23)+O|0)<<13|o>>>19)+P|0)<<18|o>>>14,R^=(o=(I^=(o=(k^=(o=(U^=(o=R+I|0)<<7|o>>>25)+R|0)<<9|o>>>23)+U|0)<<13|o>>>19)+k|0)<<18|o>>>14,M^=(o=(N^=(o=(x^=(o=(B^=(o=M+N|0)<<7|o>>>25)+M|0)<<9|o>>>23)+B|0)<<13|o>>>19)+x|0)<<18|o>>>14
w=w+i|0,E=E+s|0,A=A+a|0,T=T+u|0,C=C+c|0,S=S+h|0,O=O+f|0,P=P+l|0,k=k+p|0,I=I+d|0,R=R+v|0,U=U+y|0,B=B+g|0,x=x+_|0,N=N+b|0,M=M+m|0,t[0]=w>>>0&255,t[1]=w>>>8&255,t[2]=w>>>16&255,t[3]=w>>>24&255,t[4]=E>>>0&255,t[5]=E>>>8&255,t[6]=E>>>16&255,t[7]=E>>>24&255,t[8]=A>>>0&255,t[9]=A>>>8&255,t[10]=A>>>16&255,t[11]=A>>>24&255,t[12]=T>>>0&255,t[13]=T>>>8&255,t[14]=T>>>16&255,t[15]=T>>>24&255,t[16]=C>>>0&255,t[17]=C>>>8&255,t[18]=C>>>16&255,t[19]=C>>>24&255,t[20]=S>>>0&255,t[21]=S>>>8&255,t[22]=S>>>16&255,t[23]=S>>>24&255,t[24]=O>>>0&255,t[25]=O>>>8&255,t[26]=O>>>16&255,t[27]=O>>>24&255,t[28]=P>>>0&255,t[29]=P>>>8&255,t[30]=P>>>16&255,t[31]=P>>>24&255,t[32]=k>>>0&255,t[33]=k>>>8&255,t[34]=k>>>16&255,t[35]=k>>>24&255,t[36]=I>>>0&255,t[37]=I>>>8&255,t[38]=I>>>16&255,t[39]=I>>>24&255,t[40]=R>>>0&255,t[41]=R>>>8&255,t[42]=R>>>16&255,t[43]=R>>>24&255,t[44]=U>>>0&255,t[45]=U>>>8&255,t[46]=U>>>16&255,t[47]=U>>>24&255,t[48]=B>>>0&255,t[49]=B>>>8&255,t[50]=B>>>16&255,t[51]=B>>>24&255,t[52]=x>>>0&255,t[53]=x>>>8&255,t[54]=x>>>16&255,t[55]=x>>>24&255,t[56]=N>>>0&255,t[57]=N>>>8&255,t[58]=N>>>16&255,t[59]=N>>>24&255,t[60]=M>>>0&255,t[61]=M>>>8&255,t[62]=M>>>16&255,t[63]=M>>>24&255}(t,e,r,n)}function b(t,e,r,n){!function(t,e,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,c=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,d=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,v=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,g=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,_=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,b=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,m=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=0;w<20;w+=2)i^=(o=(g^=(o=(p^=(o=(c^=(o=i+g|0)<<7|o>>>25)+i|0)<<9|o>>>23)+c|0)<<13|o>>>19)+p|0)<<18|o>>>14,h^=(o=(s^=(o=(_^=(o=(d^=(o=h+s|0)<<7|o>>>25)+h|0)<<9|o>>>23)+d|0)<<13|o>>>19)+_|0)<<18|o>>>14,v^=(o=(f^=(o=(a^=(o=(b^=(o=v+f|0)<<7|o>>>25)+v|0)<<9|o>>>23)+b|0)<<13|o>>>19)+a|0)<<18|o>>>14,m^=(o=(y^=(o=(l^=(o=(u^=(o=m+y|0)<<7|o>>>25)+m|0)<<9|o>>>23)+u|0)<<13|o>>>19)+l|0)<<18|o>>>14,i^=(o=(u^=(o=(a^=(o=(s^=(o=i+u|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+a|0)<<18|o>>>14,h^=(o=(c^=(o=(l^=(o=(f^=(o=h+c|0)<<7|o>>>25)+h|0)<<9|o>>>23)+f|0)<<13|o>>>19)+l|0)<<18|o>>>14,v^=(o=(d^=(o=(p^=(o=(y^=(o=v+d|0)<<7|o>>>25)+v|0)<<9|o>>>23)+y|0)<<13|o>>>19)+p|0)<<18|o>>>14,m^=(o=(b^=(o=(_^=(o=(g^=(o=m+b|0)<<7|o>>>25)+m|0)<<9|o>>>23)+g|0)<<13|o>>>19)+_|0)<<18|o>>>14
t[0]=i>>>0&255,t[1]=i>>>8&255,t[2]=i>>>16&255,t[3]=i>>>24&255,t[4]=h>>>0&255,t[5]=h>>>8&255,t[6]=h>>>16&255,t[7]=h>>>24&255,t[8]=v>>>0&255,t[9]=v>>>8&255,t[10]=v>>>16&255,t[11]=v>>>24&255,t[12]=m>>>0&255,t[13]=m>>>8&255,t[14]=m>>>16&255,t[15]=m>>>24&255,t[16]=f>>>0&255,t[17]=f>>>8&255,t[18]=f>>>16&255,t[19]=f>>>24&255,t[20]=l>>>0&255,t[21]=l>>>8&255,t[22]=l>>>16&255,t[23]=l>>>24&255,t[24]=p>>>0&255,t[25]=p>>>8&255,t[26]=p>>>16&255,t[27]=p>>>24&255,t[28]=d>>>0&255,t[29]=d>>>8&255,t[30]=d>>>16&255,t[31]=d>>>24&255}(t,e,r,n)}var m=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function w(t,e,r,n,o,i,s){var a,u,c=new Uint8Array(16),h=new Uint8Array(64)
for(u=0;u<16;u++)c[u]=0
for(u=0;u<8;u++)c[u]=i[u]
for(;o>=64;){for(_(h,c,s,m),u=0;u<64;u++)t[e+u]=r[n+u]^h[u]
for(a=1,u=8;u<16;u++)a=a+(255&c[u])|0,c[u]=255&a,a>>>=8
o-=64,e+=64,n+=64}if(o>0)for(_(h,c,s,m),u=0;u<o;u++)t[e+u]=r[n+u]^h[u]
return 0}function E(t,e,r,n,o){var i,s,a=new Uint8Array(16),u=new Uint8Array(64)
for(s=0;s<16;s++)a[s]=0
for(s=0;s<8;s++)a[s]=n[s]
for(;r>=64;){for(_(u,a,o,m),s=0;s<64;s++)t[e+s]=u[s]
for(i=1,s=8;s<16;s++)i=i+(255&a[s])|0,a[s]=255&i,i>>>=8
r-=64,e+=64}if(r>0)for(_(u,a,o,m),s=0;s<r;s++)t[e+s]=u[s]
return 0}function A(t,e,r,n,o){var i=new Uint8Array(32)
b(i,n,o,m)
for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=n[a+16]
return E(t,e,r,s,i)}function T(t,e,r,n,o,i,s){var a=new Uint8Array(32)
b(a,i,s,m)
for(var u=new Uint8Array(8),c=0;c<8;c++)u[c]=i[c+16]
return w(t,e,r,n,o,u,a)}var C=function(t){var e,r,n,o,i,s,a,u
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,r=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|r<<3),n=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(r>>>10|n<<6),o=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(n>>>7|o<<9),i=255&t[8]|(255&t[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,s=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(i>>>14|s<<2),a=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(s>>>11|a<<5),u=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(a>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8}
function S(t,e,r,n,o,i){var s=new C(i)
return s.update(r,n,o),s.finish(t,e),0}function O(t,e,r,n,o,i){var s=new Uint8Array(16)
return S(s,0,r,n,o,i),y(t,e,s,0)}function P(t,e,r,n,o){var i
if(r<32)return-1
for(T(t,0,e,0,r,n,o),S(t,16,t,32,r-32,t),i=0;i<16;i++)t[i]=0
return 0}function k(t,e,r,n,o){var i,s=new Uint8Array(32)
if(r<32)return-1
if(A(s,0,32,n,o),0!==O(e,16,e,32,r-32,s))return-1
for(T(t,0,e,0,r,n,o),i=0;i<32;i++)t[i]=0
return 0}function I(t,e){var r
for(r=0;r<16;r++)t[r]=0|e[r]}function R(t){var e,r,n=1
for(e=0;e<16;e++)r=t[e]+n+65535,n=Math.floor(r/65536),t[e]=r-65536*n
t[0]+=n-1+37*(n-1)}function U(t,e,r){for(var n,o=~(r-1),i=0;i<16;i++)n=o&(t[i]^e[i]),t[i]^=n,e[i]^=n}function B(t,r){var n,o,i,s=e(),a=e()
for(n=0;n<16;n++)a[n]=r[n]
for(R(a),R(a),R(a),o=0;o<2;o++){for(s[0]=a[0]-65517,n=1;n<15;n++)s[n]=a[n]-65535-(s[n-1]>>16&1),s[n-1]&=65535
s[15]=a[15]-32767-(s[14]>>16&1),i=s[15]>>16&1,s[14]&=65535,U(a,s,1-i)}for(n=0;n<16;n++)t[2*n]=255&a[n],t[2*n+1]=a[n]>>8}function x(t,e){var r=new Uint8Array(32),n=new Uint8Array(32)
return B(r,t),B(n,e),g(r,0,n,0)}function N(t){var e=new Uint8Array(32)
return B(e,t),1&e[0]}function M(t,e){var r
for(r=0;r<16;r++)t[r]=e[2*r]+(e[2*r+1]<<8)
t[15]&=32767}function L(t,e,r){for(var n=0;n<16;n++)t[n]=e[n]+r[n]}function D(t,e,r){for(var n=0;n<16;n++)t[n]=e[n]-r[n]}function F(t,e,r){var n,o,i=0,s=0,a=0,u=0,c=0,h=0,f=0,l=0,p=0,d=0,v=0,y=0,g=0,_=0,b=0,m=0,w=0,E=0,A=0,T=0,C=0,S=0,O=0,P=0,k=0,I=0,R=0,U=0,B=0,x=0,N=0,M=r[0],L=r[1],D=r[2],F=r[3],K=r[4],j=r[5],Y=r[6],z=r[7],q=r[8],G=r[9],H=r[10],W=r[11],V=r[12],X=r[13],Q=r[14],J=r[15]
i+=(n=e[0])*M,s+=n*L,a+=n*D,u+=n*F,c+=n*K,h+=n*j,f+=n*Y,l+=n*z,p+=n*q,d+=n*G,v+=n*H,y+=n*W,g+=n*V,_+=n*X,b+=n*Q,m+=n*J,s+=(n=e[1])*M,a+=n*L,u+=n*D,c+=n*F,h+=n*K,f+=n*j,l+=n*Y,p+=n*z,d+=n*q,v+=n*G,y+=n*H,g+=n*W,_+=n*V,b+=n*X,m+=n*Q,w+=n*J,a+=(n=e[2])*M,u+=n*L,c+=n*D,h+=n*F,f+=n*K,l+=n*j,p+=n*Y,d+=n*z,v+=n*q,y+=n*G,g+=n*H,_+=n*W,b+=n*V,m+=n*X,w+=n*Q,E+=n*J,u+=(n=e[3])*M,c+=n*L,h+=n*D,f+=n*F,l+=n*K,p+=n*j,d+=n*Y,v+=n*z,y+=n*q,g+=n*G,_+=n*H,b+=n*W,m+=n*V,w+=n*X,E+=n*Q,A+=n*J,c+=(n=e[4])*M,h+=n*L,f+=n*D,l+=n*F,p+=n*K,d+=n*j,v+=n*Y,y+=n*z,g+=n*q,_+=n*G,b+=n*H,m+=n*W,w+=n*V,E+=n*X,A+=n*Q,T+=n*J,h+=(n=e[5])*M,f+=n*L,l+=n*D,p+=n*F,d+=n*K,v+=n*j,y+=n*Y,g+=n*z,_+=n*q,b+=n*G,m+=n*H,w+=n*W,E+=n*V,A+=n*X,T+=n*Q,C+=n*J,f+=(n=e[6])*M,l+=n*L,p+=n*D,d+=n*F,v+=n*K,y+=n*j,g+=n*Y,_+=n*z,b+=n*q,m+=n*G,w+=n*H,E+=n*W,A+=n*V,T+=n*X,C+=n*Q,S+=n*J,l+=(n=e[7])*M,p+=n*L,d+=n*D,v+=n*F,y+=n*K,g+=n*j,_+=n*Y,b+=n*z,m+=n*q,w+=n*G,E+=n*H,A+=n*W,T+=n*V,C+=n*X,S+=n*Q,O+=n*J,p+=(n=e[8])*M,d+=n*L,v+=n*D,y+=n*F,g+=n*K,_+=n*j,b+=n*Y,m+=n*z,w+=n*q,E+=n*G,A+=n*H,T+=n*W,C+=n*V,S+=n*X,O+=n*Q,P+=n*J,d+=(n=e[9])*M,v+=n*L,y+=n*D,g+=n*F,_+=n*K,b+=n*j,m+=n*Y,w+=n*z,E+=n*q,A+=n*G,T+=n*H,C+=n*W,S+=n*V,O+=n*X,P+=n*Q,k+=n*J,v+=(n=e[10])*M,y+=n*L,g+=n*D,_+=n*F,b+=n*K,m+=n*j,w+=n*Y,E+=n*z,A+=n*q,T+=n*G,C+=n*H,S+=n*W,O+=n*V,P+=n*X,k+=n*Q,I+=n*J,y+=(n=e[11])*M,g+=n*L,_+=n*D,b+=n*F,m+=n*K,w+=n*j,E+=n*Y,A+=n*z,T+=n*q,C+=n*G,S+=n*H,O+=n*W,P+=n*V,k+=n*X,I+=n*Q,R+=n*J,g+=(n=e[12])*M,_+=n*L,b+=n*D,m+=n*F,w+=n*K,E+=n*j,A+=n*Y,T+=n*z,C+=n*q,S+=n*G,O+=n*H,P+=n*W,k+=n*V,I+=n*X,R+=n*Q,U+=n*J,_+=(n=e[13])*M,b+=n*L,m+=n*D,w+=n*F,E+=n*K,A+=n*j,T+=n*Y,C+=n*z,S+=n*q,O+=n*G,P+=n*H,k+=n*W,I+=n*V,R+=n*X,U+=n*Q,B+=n*J,b+=(n=e[14])*M,m+=n*L,w+=n*D,E+=n*F,A+=n*K,T+=n*j,C+=n*Y,S+=n*z,O+=n*q,P+=n*G,k+=n*H,I+=n*W,R+=n*V,U+=n*X,B+=n*Q,x+=n*J,m+=(n=e[15])*M,s+=38*(E+=n*D),a+=38*(A+=n*F),u+=38*(T+=n*K),c+=38*(C+=n*j),h+=38*(S+=n*Y),f+=38*(O+=n*z),l+=38*(P+=n*q),p+=38*(k+=n*G),d+=38*(I+=n*H),v+=38*(R+=n*W),y+=38*(U+=n*V),g+=38*(B+=n*X),_+=38*(x+=n*Q),b+=38*(N+=n*J),i=(n=(i+=38*(w+=n*L))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),v=(n=v+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),_=(n=_+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),i=(n=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),v=(n=v+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),_=(n=_+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),i+=o-1+37*(o-1),t[0]=i,t[1]=s,t[2]=a,t[3]=u,t[4]=c,t[5]=h,t[6]=f,t[7]=l,t[8]=p,t[9]=d,t[10]=v,t[11]=y,t[12]=g,t[13]=_,t[14]=b,t[15]=m}function K(t,e){F(t,e,e)}function j(t,r){var n,o=e()
for(n=0;n<16;n++)o[n]=r[n]
for(n=253;n>=0;n--)K(o,o),2!==n&&4!==n&&F(o,o,r)
for(n=0;n<16;n++)t[n]=o[n]}function Y(t,r,n){var o,i,s=new Uint8Array(32),a=new Float64Array(80),c=e(),h=e(),f=e(),l=e(),p=e(),d=e()
for(i=0;i<31;i++)s[i]=r[i]
for(s[31]=127&r[31]|64,s[0]&=248,M(a,n),i=0;i<16;i++)h[i]=a[i],l[i]=c[i]=f[i]=0
for(c[0]=l[0]=1,i=254;i>=0;--i)U(c,h,o=s[i>>>3]>>>(7&i)&1),U(f,l,o),L(p,c,f),D(c,c,f),L(f,h,l),D(h,h,l),K(l,p),K(d,c),F(c,f,c),F(f,h,p),L(p,c,f),D(c,c,f),K(h,c),D(f,l,d),F(c,f,u),L(c,c,l),F(f,f,c),F(c,l,d),F(l,h,a),K(h,p),U(c,h,o),U(f,l,o)
for(i=0;i<16;i++)a[i+16]=c[i],a[i+32]=f[i],a[i+48]=h[i],a[i+64]=l[i]
var v=a.subarray(32),y=a.subarray(16)
return j(v,v),F(y,y,v),B(t,y),0}function z(t,e){return Y(t,e,i)}function q(t,e){return n(e,32),z(t,e)}function G(t,e,r){var n=new Uint8Array(32)
return Y(n,r,e),b(t,o,n,m)}C.prototype.blocks=function(t,e,r){for(var n,o,i,s,a,u,c,h,f,l,p,d,v,y,g,_,b,m,w,E=this.fin?0:2048,A=this.h[0],T=this.h[1],C=this.h[2],S=this.h[3],O=this.h[4],P=this.h[5],k=this.h[6],I=this.h[7],R=this.h[8],U=this.h[9],B=this.r[0],x=this.r[1],N=this.r[2],M=this.r[3],L=this.r[4],D=this.r[5],F=this.r[6],K=this.r[7],j=this.r[8],Y=this.r[9];r>=16;)l=f=0,l+=(A+=8191&(n=255&t[e+0]|(255&t[e+1])<<8))*B,l+=(T+=8191&(n>>>13|(o=255&t[e+2]|(255&t[e+3])<<8)<<3))*(5*Y),l+=(C+=8191&(o>>>10|(i=255&t[e+4]|(255&t[e+5])<<8)<<6))*(5*j),l+=(S+=8191&(i>>>7|(s=255&t[e+6]|(255&t[e+7])<<8)<<9))*(5*K),f=(l+=(O+=8191&(s>>>4|(a=255&t[e+8]|(255&t[e+9])<<8)<<12))*(5*F))>>>13,l&=8191,l+=(P+=a>>>1&8191)*(5*D),l+=(k+=8191&(a>>>14|(u=255&t[e+10]|(255&t[e+11])<<8)<<2))*(5*L),l+=(I+=8191&(u>>>11|(c=255&t[e+12]|(255&t[e+13])<<8)<<5))*(5*M),l+=(R+=8191&(c>>>8|(h=255&t[e+14]|(255&t[e+15])<<8)<<8))*(5*N),p=f+=(l+=(U+=h>>>5|E)*(5*x))>>>13,p+=A*x,p+=T*B,p+=C*(5*Y),p+=S*(5*j),f=(p+=O*(5*K))>>>13,p&=8191,p+=P*(5*F),p+=k*(5*D),p+=I*(5*L),p+=R*(5*M),f+=(p+=U*(5*N))>>>13,p&=8191,d=f,d+=A*N,d+=T*x,d+=C*B,d+=S*(5*Y),f=(d+=O*(5*j))>>>13,d&=8191,d+=P*(5*K),d+=k*(5*F),d+=I*(5*D),d+=R*(5*L),v=f+=(d+=U*(5*M))>>>13,v+=A*M,v+=T*N,v+=C*x,v+=S*B,f=(v+=O*(5*Y))>>>13,v&=8191,v+=P*(5*j),v+=k*(5*K),v+=I*(5*F),v+=R*(5*D),y=f+=(v+=U*(5*L))>>>13,y+=A*L,y+=T*M,y+=C*N,y+=S*x,f=(y+=O*B)>>>13,y&=8191,y+=P*(5*Y),y+=k*(5*j),y+=I*(5*K),y+=R*(5*F),g=f+=(y+=U*(5*D))>>>13,g+=A*D,g+=T*L,g+=C*M,g+=S*N,f=(g+=O*x)>>>13,g&=8191,g+=P*B,g+=k*(5*Y),g+=I*(5*j),g+=R*(5*K),_=f+=(g+=U*(5*F))>>>13,_+=A*F,_+=T*D,_+=C*L,_+=S*M,f=(_+=O*N)>>>13,_&=8191,_+=P*x,_+=k*B,_+=I*(5*Y),_+=R*(5*j),b=f+=(_+=U*(5*K))>>>13,b+=A*K,b+=T*F,b+=C*D,b+=S*L,f=(b+=O*M)>>>13,b&=8191,b+=P*N,b+=k*x,b+=I*B,b+=R*(5*Y),m=f+=(b+=U*(5*j))>>>13,m+=A*j,m+=T*K,m+=C*F,m+=S*D,f=(m+=O*L)>>>13,m&=8191,m+=P*M,m+=k*N,m+=I*x,m+=R*B,w=f+=(m+=U*(5*Y))>>>13,w+=A*Y,w+=T*j,w+=C*K,w+=S*F,f=(w+=O*D)>>>13,w&=8191,w+=P*L,w+=k*M,w+=I*N,w+=R*x,A=l=8191&(f=(f=((f+=(w+=U*B)>>>13)<<2)+f|0)+(l&=8191)|0),T=p+=f>>>=13,C=d&=8191,S=v&=8191,O=y&=8191,P=g&=8191,k=_&=8191,I=b&=8191,R=m&=8191,U=w&=8191,e+=16,r-=16
this.h[0]=A,this.h[1]=T,this.h[2]=C,this.h[3]=S,this.h[4]=O,this.h[5]=P,this.h[6]=k,this.h[7]=I,this.h[8]=R,this.h[9]=U},C.prototype.finish=function(t,e){var r,n,o,i,s=new Uint16Array(10)
if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=r,r=this.h[i]>>>13,this.h[i]&=8191
for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,s[0]=this.h[0]+5,r=s[0]>>>13,s[0]&=8191,i=1;i<10;i++)s[i]=this.h[i]+r,r=s[i]>>>13,s[i]&=8191
for(s[9]-=8192,n=(1^r)-1,i=0;i<10;i++)s[i]&=n
for(n=~n,i=0;i<10;i++)this.h[i]=this.h[i]&n|s[i]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o
t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},C.prototype.update=function(t,e,r){var n,o
if(this.leftover){for((o=16-this.leftover)>r&&(o=r),n=0;n<o;n++)this.buffer[this.leftover+n]=t[e+n]
if(r-=o,e+=o,this.leftover+=o,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(o=r-r%16,this.blocks(t,e,o),e+=o,r-=o),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=t[e+n]
this.leftover+=r}}
var H=P,W=k
var V=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function X(t,e,r,n){for(var o,i,s,a,u,c,h,f,l,p,d,v,y,g,_,b,m,w,E,A,T,C,S,O,P,k,I=new Int32Array(16),R=new Int32Array(16),U=t[0],B=t[1],x=t[2],N=t[3],M=t[4],L=t[5],D=t[6],F=t[7],K=e[0],j=e[1],Y=e[2],z=e[3],q=e[4],G=e[5],H=e[6],W=e[7],X=0;n>=128;){for(E=0;E<16;E++)A=8*E+X,I[E]=r[A+0]<<24|r[A+1]<<16|r[A+2]<<8|r[A+3],R[E]=r[A+4]<<24|r[A+5]<<16|r[A+6]<<8|r[A+7]
for(E=0;E<80;E++)if(o=U,i=B,s=x,a=N,u=M,c=L,h=D,F,l=K,p=j,d=Y,v=z,y=q,g=G,_=H,W,S=65535&(C=W),O=C>>>16,P=65535&(T=F),k=T>>>16,S+=65535&(C=(q>>>14|M<<18)^(q>>>18|M<<14)^(M>>>9|q<<23)),O+=C>>>16,P+=65535&(T=(M>>>14|q<<18)^(M>>>18|q<<14)^(q>>>9|M<<23)),k+=T>>>16,S+=65535&(C=q&G^~q&H),O+=C>>>16,P+=65535&(T=M&L^~M&D),k+=T>>>16,T=V[2*E],S+=65535&(C=V[2*E+1]),O+=C>>>16,P+=65535&T,k+=T>>>16,T=I[E%16],O+=(C=R[E%16])>>>16,P+=65535&T,k+=T>>>16,P+=(O+=(S+=65535&C)>>>16)>>>16,S=65535&(C=w=65535&S|O<<16),O=C>>>16,P=65535&(T=m=65535&P|(k+=P>>>16)<<16),k=T>>>16,S+=65535&(C=(K>>>28|U<<4)^(U>>>2|K<<30)^(U>>>7|K<<25)),O+=C>>>16,P+=65535&(T=(U>>>28|K<<4)^(K>>>2|U<<30)^(K>>>7|U<<25)),k+=T>>>16,O+=(C=K&j^K&Y^j&Y)>>>16,P+=65535&(T=U&B^U&x^B&x),k+=T>>>16,f=65535&(P+=(O+=(S+=65535&C)>>>16)>>>16)|(k+=P>>>16)<<16,b=65535&S|O<<16,S=65535&(C=v),O=C>>>16,P=65535&(T=a),k=T>>>16,O+=(C=w)>>>16,P+=65535&(T=m),k+=T>>>16,B=o,x=i,N=s,M=a=65535&(P+=(O+=(S+=65535&C)>>>16)>>>16)|(k+=P>>>16)<<16,L=u,D=c,F=h,U=f,j=l,Y=p,z=d,q=v=65535&S|O<<16,G=y,H=g,W=_,K=b,E%16==15)for(A=0;A<16;A++)T=I[A],S=65535&(C=R[A]),O=C>>>16,P=65535&T,k=T>>>16,T=I[(A+9)%16],S+=65535&(C=R[(A+9)%16]),O+=C>>>16,P+=65535&T,k+=T>>>16,m=I[(A+1)%16],S+=65535&(C=((w=R[(A+1)%16])>>>1|m<<31)^(w>>>8|m<<24)^(w>>>7|m<<25)),O+=C>>>16,P+=65535&(T=(m>>>1|w<<31)^(m>>>8|w<<24)^m>>>7),k+=T>>>16,m=I[(A+14)%16],O+=(C=((w=R[(A+14)%16])>>>19|m<<13)^(m>>>29|w<<3)^(w>>>6|m<<26))>>>16,P+=65535&(T=(m>>>19|w<<13)^(w>>>29|m<<3)^m>>>6),k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,I[A]=65535&P|k<<16,R[A]=65535&S|O<<16
S=65535&(C=K),O=C>>>16,P=65535&(T=U),k=T>>>16,T=t[0],O+=(C=e[0])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[0]=U=65535&P|k<<16,e[0]=K=65535&S|O<<16,S=65535&(C=j),O=C>>>16,P=65535&(T=B),k=T>>>16,T=t[1],O+=(C=e[1])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[1]=B=65535&P|k<<16,e[1]=j=65535&S|O<<16,S=65535&(C=Y),O=C>>>16,P=65535&(T=x),k=T>>>16,T=t[2],O+=(C=e[2])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[2]=x=65535&P|k<<16,e[2]=Y=65535&S|O<<16,S=65535&(C=z),O=C>>>16,P=65535&(T=N),k=T>>>16,T=t[3],O+=(C=e[3])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[3]=N=65535&P|k<<16,e[3]=z=65535&S|O<<16,S=65535&(C=q),O=C>>>16,P=65535&(T=M),k=T>>>16,T=t[4],O+=(C=e[4])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[4]=M=65535&P|k<<16,e[4]=q=65535&S|O<<16,S=65535&(C=G),O=C>>>16,P=65535&(T=L),k=T>>>16,T=t[5],O+=(C=e[5])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[5]=L=65535&P|k<<16,e[5]=G=65535&S|O<<16,S=65535&(C=H),O=C>>>16,P=65535&(T=D),k=T>>>16,T=t[6],O+=(C=e[6])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[6]=D=65535&P|k<<16,e[6]=H=65535&S|O<<16,S=65535&(C=W),O=C>>>16,P=65535&(T=F),k=T>>>16,T=t[7],O+=(C=e[7])>>>16,P+=65535&T,k+=T>>>16,k+=(P+=(O+=(S+=65535&C)>>>16)>>>16)>>>16,t[7]=F=65535&P|k<<16,e[7]=W=65535&S|O<<16,X+=128,n-=128}return n}function Q(t,e,r){var n,o=new Int32Array(8),i=new Int32Array(8),s=new Uint8Array(256),a=r
for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,X(o,i,e,r),r%=128,n=0;n<r;n++)s[n]=e[a-r+n]
for(s[r]=128,s[(r=256-128*(r<112?1:0))-9]=0,d(s,r-8,a/536870912|0,a<<3),X(o,i,s,r),n=0;n<8;n++)d(t,8*n,o[n],i[n])
return 0}function J(t,r){var n=e(),o=e(),i=e(),s=e(),a=e(),u=e(),c=e(),f=e(),l=e()
D(n,t[1],t[0]),D(l,r[1],r[0]),F(n,n,l),L(o,t[0],t[1]),L(l,r[0],r[1]),F(o,o,l),F(i,t[3],r[3]),F(i,i,h),F(s,t[2],r[2]),L(s,s,s),D(a,o,n),D(u,s,i),L(c,s,i),L(f,o,n),F(t[0],a,u),F(t[1],f,c),F(t[2],c,u),F(t[3],a,f)}function Z(t,e,r){var n
for(n=0;n<4;n++)U(t[n],e[n],r)}function $(t,r){var n=e(),o=e(),i=e()
j(i,r[2]),F(n,r[0],i),F(o,r[1],i),B(t,o),t[31]^=N(n)<<7}function tt(t,e,r){var n,o
for(I(t[0],s),I(t[1],a),I(t[2],a),I(t[3],s),o=255;o>=0;--o)Z(t,e,n=r[o/8|0]>>(7&o)&1),J(e,t),J(t,t),Z(t,e,n)}function et(t,r){var n=[e(),e(),e(),e()]
I(n[0],f),I(n[1],l),I(n[2],a),F(n[3],f,l),tt(t,n,r)}function rt(t,r,o){var i,s=new Uint8Array(64),a=[e(),e(),e(),e()]
for(o||n(r,32),Q(s,r,32),s[0]&=248,s[31]&=127,s[31]|=64,et(a,s),$(t,a),i=0;i<32;i++)r[i+32]=t[i]
return 0}var nt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function ot(t,e){var r,n,o,i
for(n=63;n>=32;--n){for(r=0,o=n-32,i=n-12;o<i;++o)e[o]+=r-16*e[n]*nt[o-(n-32)],r=e[o]+128>>8,e[o]-=256*r
e[o]+=r,e[n]=0}for(r=0,o=0;o<32;o++)e[o]+=r-(e[31]>>4)*nt[o],r=e[o]>>8,e[o]&=255
for(o=0;o<32;o++)e[o]-=r*nt[o]
for(n=0;n<32;n++)e[n+1]+=e[n]>>8,t[n]=255&e[n]}function it(t){var e,r=new Float64Array(64)
for(e=0;e<64;e++)r[e]=t[e]
for(e=0;e<64;e++)t[e]=0
ot(t,r)}function st(t,r,n,o){var i,s,a=new Uint8Array(64),u=new Uint8Array(64),c=new Uint8Array(64),h=new Float64Array(64),f=[e(),e(),e(),e()]
Q(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64
var l=n+64
for(i=0;i<n;i++)t[64+i]=r[i]
for(i=0;i<32;i++)t[32+i]=a[32+i]
for(Q(c,t.subarray(32),n+32),it(c),et(f,c),$(t,f),i=32;i<64;i++)t[i]=o[i]
for(Q(u,t,n+64),it(u),i=0;i<64;i++)h[i]=0
for(i=0;i<32;i++)h[i]=c[i]
for(i=0;i<32;i++)for(s=0;s<32;s++)h[i+s]+=u[i]*a[s]
return ot(t.subarray(32),h),l}function at(t,r){var n=e(),o=e(),i=e(),u=e(),h=e(),f=e(),l=e()
return I(t[2],a),M(t[1],r),K(i,t[1]),F(u,i,c),D(i,i,t[2]),L(u,t[2],u),K(h,u),K(f,h),F(l,f,h),F(n,l,i),F(n,n,u),function(t,r){var n,o=e()
for(n=0;n<16;n++)o[n]=r[n]
for(n=250;n>=0;n--)K(o,o),1!==n&&F(o,o,r)
for(n=0;n<16;n++)t[n]=o[n]}(n,n),F(n,n,i),F(n,n,u),F(n,n,u),F(t[0],n,u),K(o,t[0]),F(o,o,u),x(o,i)&&F(t[0],t[0],p),K(o,t[0]),F(o,o,u),x(o,i)?-1:(N(t[0])===r[31]>>7&&D(t[0],s,t[0]),F(t[3],t[0],t[1]),0)}function ut(t,r,n,o){var i,s=new Uint8Array(32),a=new Uint8Array(64),u=[e(),e(),e(),e()],c=[e(),e(),e(),e()]
if(-1,n<64)return-1
if(at(c,o))return-1
for(i=0;i<n;i++)t[i]=r[i]
for(i=0;i<32;i++)t[i+32]=o[i]
if(Q(a,t,n),it(a),tt(u,c,a),et(c,r.subarray(32)),J(u,c),$(s,u),n-=64,g(r,0,s,0)){for(i=0;i<n;i++)t[i]=0
return-1}for(i=0;i<n;i++)t[i]=r[i+64]
return n}var ct=32,ht=24,ft=32,lt=32,pt=ht
function dt(t,e){if(t.length!==ct)throw new Error("bad key size")
if(e.length!==ht)throw new Error("bad nonce size")}function vt(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function yt(t){for(var e=0;e<t.length;e++)t[e]=0}t.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:T,crypto_stream:A,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:E,crypto_onetimeauth:S,crypto_onetimeauth_verify:O,crypto_verify_16:y,crypto_verify_32:g,crypto_secretbox:P,crypto_secretbox_open:k,crypto_scalarmult:Y,crypto_scalarmult_base:z,crypto_box_beforenm:G,crypto_box_afternm:H,crypto_box:function(t,e,r,n,o,i){var s=new Uint8Array(32)
return G(s,o,i),H(t,e,r,n,s)},crypto_box_open:function(t,e,r,n,o,i){var s=new Uint8Array(32)
return G(s,o,i),W(t,e,r,n,s)},crypto_box_keypair:q,crypto_hash:Q,crypto_sign:st,crypto_sign_keypair:rt,crypto_sign_open:ut,crypto_secretbox_KEYBYTES:ct,crypto_secretbox_NONCEBYTES:ht,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:ft,crypto_box_SECRETKEYBYTES:lt,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:pt,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},t.randomBytes=function(t){var e=new Uint8Array(t)
return n(e,t),e},t.secretbox=function(t,e,r){vt(t,e,r),dt(r,e)
for(var n=new Uint8Array(32+t.length),o=new Uint8Array(n.length),i=0;i<t.length;i++)n[i+32]=t[i]
return P(o,n,n.length,e,r),o.subarray(16)},t.secretbox.open=function(t,e,r){vt(t,e,r),dt(r,e)
for(var n=new Uint8Array(16+t.length),o=new Uint8Array(n.length),i=0;i<t.length;i++)n[i+16]=t[i]
return n.length<32?null:0!==k(o,n,n.length,e,r)?null:o.subarray(32)},t.secretbox.keyLength=ct,t.secretbox.nonceLength=ht,t.secretbox.overheadLength=16,t.scalarMult=function(t,e){if(vt(t,e),32!==t.length)throw new Error("bad n size")
if(32!==e.length)throw new Error("bad p size")
var r=new Uint8Array(32)
return Y(r,t,e),r},t.scalarMult.base=function(t){if(vt(t),32!==t.length)throw new Error("bad n size")
var e=new Uint8Array(32)
return z(e,t),e},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(e,r,n,o){var i=t.box.before(n,o)
return t.secretbox(e,r,i)},t.box.before=function(t,e){vt(t,e),function(t,e){if(t.length!==ft)throw new Error("bad public key size")
if(e.length!==lt)throw new Error("bad secret key size")}(t,e)
var r=new Uint8Array(32)
return G(r,t,e),r},t.box.after=t.secretbox,t.box.open=function(e,r,n,o){var i=t.box.before(n,o)
return t.secretbox.open(e,r,i)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(ft),e=new Uint8Array(lt)
return q(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(vt(t),t.length!==lt)throw new Error("bad secret key size")
var e=new Uint8Array(ft)
return z(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=ft,t.box.secretKeyLength=lt,t.box.sharedKeyLength=32,t.box.nonceLength=pt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(vt(t,e),64!==e.length)throw new Error("bad secret key size")
var r=new Uint8Array(64+t.length)
return st(r,t,t.length,e),r},t.sign.open=function(t,e){if(vt(t,e),32!==e.length)throw new Error("bad public key size")
var r=new Uint8Array(t.length),n=ut(r,t,t.length,e)
if(n<0)return null
for(var o=new Uint8Array(n),i=0;i<o.length;i++)o[i]=r[i]
return o},t.sign.detached=function(e,r){for(var n=t.sign(e,r),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=n[i]
return o},t.sign.detached.verify=function(t,e,r){if(vt(t,e,r),64!==e.length)throw new Error("bad signature size")
if(32!==r.length)throw new Error("bad public key size")
var n,o=new Uint8Array(64+t.length),i=new Uint8Array(64+t.length)
for(n=0;n<64;n++)o[n]=e[n]
for(n=0;n<t.length;n++)o[n+64]=t[n]
return ut(i,o,o.length,r)>=0},t.sign.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(64)
return rt(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(vt(t),64!==t.length)throw new Error("bad secret key size")
for(var e=new Uint8Array(32),r=0;r<e.length;r++)e[r]=t[32+r]
return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(vt(t),32!==t.length)throw new Error("bad seed size")
for(var e=new Uint8Array(32),r=new Uint8Array(64),n=0;n<32;n++)r[n]=t[n]
return rt(e,r,!0),{publicKey:e,secretKey:r}},t.sign.publicKeyLength=32,t.sign.secretKeyLength=64,t.sign.seedLength=32,t.sign.signatureLength=64,t.hash=function(t){vt(t)
var e=new Uint8Array(64)
return Q(e,t,t.length),e},t.hash.hashLength=64,t.verify=function(t,e){return vt(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===v(t,0,e,0,t.length))},t.setPRNG=function(t){n=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null
if(e&&e.getRandomValues){t.setPRNG(function(t,r){var n,o=new Uint8Array(r)
for(n=0;n<r;n+=65536)e.getRandomValues(o.subarray(n,n+Math.min(r-n,65536)))
for(n=0;n<r;n++)t[n]=o[n]
yt(o)})}else(e=r(19))&&e.randomBytes&&t.setPRNG(function(t,r){var n,o=e.randomBytes(r)
for(n=0;n<r;n++)t[n]=o[n]
yt(o)})}()}(t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){},function(t,e,r){(e=t.exports=function(t){t=t.toLowerCase()
var r=e[t]
if(!r)throw new Error(t+" is not supported (we accept pull requests)")
return new r}).sha=r(21),e.sha1=r(22),e.sha224=r(23),e.sha256=r(7),e.sha384=r(24),e.sha512=r(8)},function(t,e,r){var n=r(2),o=r(3),i=r(1).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,o.call(this,64,56)}function c(t){return t<<30|t>>>2}function h(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(u,o),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,a=0|this._d,u=0|this._e,f=0;f<16;++f)r[f]=t.readInt32BE(4*f)
for(;f<80;++f)r[f]=r[f-3]^r[f-8]^r[f-14]^r[f-16]
for(var l=0;l<80;++l){var p=~~(l/20),d=0|((e=n)<<5|e>>>27)+h(p,o,i,a)+u+r[l]+s[p]
u=a,a=i,i=c(o),o=n,n=d}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=a+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=i.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,r){var n=r(2),o=r(3),i=r(1).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,o.call(this,64,56)}function c(t){return t<<5|t>>>27}function h(t){return t<<30|t>>>2}function f(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(u,o),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,a=0|this._d,u=0|this._e,l=0;l<16;++l)r[l]=t.readInt32BE(4*l)
for(;l<80;++l)r[l]=(e=r[l-3]^r[l-8]^r[l-14]^r[l-16])<<1|e>>>31
for(var p=0;p<80;++p){var d=~~(p/20),v=c(n)+f(d,o,i,a)+u+r[p]+s[d]|0
u=a,a=i,i=h(o),o=n,n=v}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=a+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=i.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,r){var n=r(2),o=r(7),i=r(3),s=r(1).Buffer,a=new Array(64)
function u(){this.init(),this._w=a,i.call(this,64,56)}n(u,o),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=u},function(t,e,r){var n=r(2),o=r(8),i=r(3),s=r(1).Buffer,a=new Array(160)
function u(){this.init(),this._w=a,i.call(this,128,112)}n(u,o),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(48)
function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},function(t,e,r){"use strict"
t.exports=r(26)},function(t,e,r){"use strict";(function(e){t.exports=c
var n=r(27),o="undefined"!=typeof navigator&&!!navigator.userAgent,i=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=o&&navigator.userAgent.match(/Edge\/1[2345]/),a=null
function u(t){return a||(a=new t(function(t,e){function r(){t({u2f:null,native:!0})}return o?i?r():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&t({u2f:window.u2f,native:!0}),s?r():"http:"===location.protocol?r():"undefined"==typeof MessageChannel?r():void n.isSupported(function(e){e?t({u2f:n,native:!1}):r()})):r()})),a}function c(t){return{isSupported:l.bind(t),ensureSupport:d.bind(t),register:v.bind(t),sign:y.bind(t),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function h(t,e){var r=null!=e?e.errorCode:1,n=c.ErrorNames[""+r],o=new Error(t)
return o.metaData={type:n,code:r},o}function f(t,e){var r={}
return r.promise=new t(function(t,n){r.resolve=t,r.reject=n,e.then(t,n)}),r.promise.cancel=function(e,n){u(t).then(function(t){n&&!t.native&&t.u2f.disconnect(),r.reject(h(e,{errorCode:-1}))})},r}function l(){return u(this).then(function(t){return!!t.u2f})}function p(t){if(!t.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function d(){return u(this).then(p)}function v(t,e,r){var n=this
return Array.isArray(t)||(t=[t]),"number"==typeof e&&void 0===r&&(r=e,e=null),e||(e=[]),f(n,u(n).then(function(o){p(o)
var i=o.native,s=o.u2f
return new n(function(n,o){if(i){var a=t[0].appId
s.register(a,t,e,function(t){t.errorCode?o(h("Registration failed",t)):(delete t.errorCode,n(t))},r)}else s.register(t,e,function(t,e){t?o(t):e.errorCode?o(h("Registration failed",e)):n(e)},r)})})).promise}function y(t,e){var r=this
return Array.isArray(t)||(t=[t]),f(r,u(r).then(function(n){p(n)
var o=n.native,i=n.u2f
return new r(function(r,n){if(o){var s=t[0].appId,a=t[0].challenge
i.sign(s,a,t,function(t){t.errorCode?n(h("Sign failed",t)):(delete t.errorCode,r(t))},e)}else i.sign(t,function(t,e){t?n(t):e.errorCode?n(h("Sign failed",e)):r(e)},e)})})).promise}function g(t){c[t]=function(){if(!e.Promise)throw new Error("The platform doesn't natively support promises")
var r=[].slice.call(arguments)
return c(e.Promise)[t].apply(null,r)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},g("isSupported"),g("ensureSupport"),g("register"),g("sign")}).call(this,r(5))},function(t,e,r){"use strict"
var n=n||{}
t.exports=n,n.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",n.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},n.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},n.Request,n.Response,n.Error,n.SignRequest,n.SignResponse,n.RegisterRequest,n.RegisterResponse,n.disconnect=function(){n.port_&&n.port_.port_&&(n.port_.port_.disconnect(),n.port_=null)},n.getMessagePort=function(t){if("undefined"!=typeof chrome&&chrome.runtime){var e={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]}
chrome.runtime.sendMessage(n.EXTENSION_ID,e,function(){chrome.runtime.lastError?n.getIframePort_(t):n.getChromeRuntimePort_(t)})}else n.getIframePort_(t)},n.getChromeRuntimePort_=function(t){var e=chrome.runtime.connect(n.EXTENSION_ID,{includeTlsChannelId:!0})
setTimeout(function(){t(null,new n.WrappedChromeRuntimePort_(e))},0)},n.WrappedChromeRuntimePort_=function(t){this.port_=t},n.WrappedChromeRuntimePort_.prototype.postMessage=function(t){this.port_.postMessage(t)},n.WrappedChromeRuntimePort_.prototype.addEventListener=function(t,e){var r=t.toLowerCase()
"message"==r||"onmessage"==r?this.port_.onMessage.addListener(function(t){e({data:t})}):console.error("WrappedChromeRuntimePort only supports onMessage")},n.getIframePort_=function(t){var e="chrome-extension://"+n.EXTENSION_ID,r=document.createElement("iframe")
r.src=e+"/u2f-comms.html",r.setAttribute("style","display:none"),document.body.appendChild(r)
var o=!1,i=new MessageChannel,s=function(e){"ready"==e.data?(i.port1.removeEventListener("message",s),o||(o=!0,t(null,i.port1))):console.error('First event on iframe port was not "ready"')}
i.port1.addEventListener("message",s),i.port1.start(),r.addEventListener("load",function(){r.contentWindow.postMessage("init",e,[i.port2])}),setTimeout(function(){o||(o=!0,t(new Error("IFrame extension not supported")))},200)},n.EXTENSION_TIMEOUT_SEC=30,n.port_=null,n.waitingForPort_=[],n.reqCounter_=0,n.callbackMap_={},n.getPortSingleton_=function(t){n.port_?t(null,n.port_):(0==n.waitingForPort_.length&&n.getMessagePort(function(t,e){for(t||(n.port_=e,n.port_.addEventListener("message",n.responseHandler_));n.waitingForPort_.length;)n.waitingForPort_.shift()(t,e)}),n.waitingForPort_.push(t))},n.responseHandler_=function(t){var e=t.data,r=e.requestId
if(r&&n.callbackMap_[r]){var o=n.callbackMap_[r]
delete n.callbackMap_[r],o(null,e.responseData)}else console.error("Unknown or missing requestId in response.")},n.isSupported=function(t){n.getPortSingleton_(function(e,r){t(!e)})},n.sign=function(t,e,r){n.getPortSingleton_(function(o,i){if(o)return e(o)
var s=++n.reqCounter_
n.callbackMap_[s]=e
var a={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:t,timeoutSeconds:void 0!==r?r:n.EXTENSION_TIMEOUT_SEC,requestId:s}
i.postMessage(a)})},n.register=function(t,e,r,o){n.getPortSingleton_(function(i,s){if(i)return r(i)
var a=++n.reqCounter_
n.callbackMap_[a]=r
var u={type:n.MessageTypes.U2F_REGISTER_REQUEST,signRequests:e,registerRequests:t,timeoutSeconds:void 0!==o?o:n.EXTENSION_TIMEOUT_SEC,requestId:a}
s.postMessage(u)})}},function(t,e,r){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getAltStatusMessage=e.StatusCodes=e.TransportStatusError=e.TransportError=void 0
var o,i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(6),a=(o=s)&&o.__esModule?o:{default:o},u=r(9)
function c(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,r){return function n(o,i){try{var s=e[o](i),a=s.value}catch(t){return void r(t)}if(!s.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})
t(a)}("next")})}}e.TransportError=u.TransportError,e.TransportStatusError=u.TransportStatusError,e.StatusCodes=u.StatusCodes,e.getAltStatusMessage=u.getAltStatusMessage
var h=function(){function e(){var r,o,i=this
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.debug=t.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new a.default,this.send=(r=c(regeneratorRuntime.mark(function t(e,r,o,s){var a,c,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.alloc(0),f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[u.StatusCodes.OK]
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(h.length>=256)){t.next=2
break}throw new u.TransportError("data.length exceed 256 bytes limit. Got: "+h.length,"DataLengthTooBig")
case 2:return t.next=4,i.exchange(n.concat([n.from([e,r,o,s]),n.from([h.length]),h]))
case 4:if(a=t.sent,c=a.readUInt16BE(a.length-2),f.some(function(t){return t===c})){t.next=8
break}throw new u.TransportStatusError(c)
case 8:return t.abrupt("return",a)
case 9:case"end":return t.stop()}},t,i)})),function(t,e,n,o){return r.apply(this,arguments)}),this.exchangeAtomicImpl=(o=c(regeneratorRuntime.mark(function t(e){var r,n,o
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!i.exchangeBusyPromise){t.next=2
break}throw new u.TransportError("Transport race condition","RaceCondition")
case 2:return r=void 0,n=new Promise(function(t){r=t}),i.exchangeBusyPromise=n,t.prev=5,t.next=8,e()
case 8:return o=t.sent,t.abrupt("return",o)
case 10:return t.prev=10,r&&r(),i.exchangeBusyPromise=null,t.finish(10)
case 14:case"end":return t.stop()}},t,i,[[5,,10,14]])})),function(t){return o.apply(this,arguments)}),this._appAPIlock=null}return i(e,[{key:"on",value:function(t,e){this._events.on(t,e)}},{key:"off",value:function(t,e){this._events.removeListener(t,e)}},{key:"emit",value:function(t){for(var e,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(e=this._events).emit.apply(e,[t].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e]
return r}return Array.from(t)}(n)))}},{key:"setDebugMode",value:function(t){this.debug="function"==typeof t?t:t?function(t){return console.log(t)}:null}},{key:"setExchangeTimeout",value:function(t){this.exchangeTimeout=t}},{key:"decorateAppAPIMethods",value:function(t,e,r){var n=!0,o=!1,i=void 0
try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var u=s.value
t[u]=this.decorateAppAPIMethod(u,t[u],t,r)}}catch(t){o=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}}},{key:"decorateAppAPIMethod",value:function(t,e,r,n){var o,i=this
return o=c(regeneratorRuntime.mark(function o(){for(var s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c]
var h
return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(h=i._appAPIlock)){o.next=3
break}return o.abrupt("return",Promise.reject(new u.TransportError("Ledger Device is busy (lock "+h+")","TransportLocked")))
case 3:return o.prev=3,i._appAPIlock=t,i.setScrambleKey(n),o.next=8,e.apply(r,a)
case 8:return o.abrupt("return",o.sent)
case 9:return o.prev=9,i._appAPIlock=null,o.finish(9)
case 12:case"end":return o.stop()}},o,i,[[3,,9,12]])})),function(){return o.apply(this,arguments)}}}],[{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,r=arguments[1]
return new Promise(function(n,o){var i=!1,s=t.listen({next:function(r){i=!0,s&&s.unsubscribe(),a&&clearTimeout(a),t.open(r.descriptor,e).then(n,o)},error:function(t){a&&clearTimeout(a),o(t)},complete:function(){a&&clearTimeout(a),i||o(new u.TransportError(t.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),a=r?setTimeout(function(){s.unsubscribe(),o(new u.TransportError(t.ErrorMessage_ListenTimeout,"ListenTimeout"))},r):null})}}]),e}()
h.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",h.ErrorMessage_NoDeviceFound="No Ledger device found",e.default=h}).call(this,r(5),r(4).Buffer)},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o={},i=e.createCustomErrorClass=function(t){var e=function(e,r){Object.assign(this,r),this.name=t,this.message=e||t,this.stack=(new Error).stack}
return e.prototype=new Error,o[t]=e,e}
e.deserializeError=function t(e){if("object"===(void 0===e?"undefined":n(e))&&e){try{var r=JSON.parse(e.message)
r.message&&r.name&&(e=r)}catch(t){}var s="Error"===e.name?Error:"string"==typeof e.name?o[e.name]||i(e.name):Error,a=Object.create(s.prototype)
for(var u in e)e.hasOwnProperty(u)&&(a[u]=e[u])
return!a.stack&&Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return new Error(String(e))},e.serializeError=function(t){return t?"object"===(void 0===t?"undefined":n(t))?function t(e,r){var o={}
r.push(e)
var i=!0
var s=!1
var a=void 0
try{for(var u,c=Object.keys(e)[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value,f=e[h]
"function"!=typeof f&&(f&&"object"===(void 0===f?"undefined":n(f))?-1!==r.indexOf(e[h])?o[h]="[Circular]":o[h]=t(e[h],r.slice(0)):o[h]=f)}}catch(t){s=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw a}}"string"==typeof e.name&&(o.name=e.name)
"string"==typeof e.message&&(o.message=e.message)
"string"==typeof e.stack&&(o.stack=e.stack)
return o}(t,[]):"function"==typeof t?"[Function: "+(t.name||"anonymous")+"]":t:t}},function(t,e,r){"use strict"
r.r(e)
var n=r(0),o=r(10),i=r.n(o)
function s(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n
return e=t,n=[{key:"strlen",value:function(t){return t?t.length:0}},{key:"strOK",value:function(t){return!!t&&t.length>0}}],(r=null)&&s(e.prototype,r),n&&s(e,n),t}()
function u(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o
return e=t,o=[{key:"paymentOperation",value:function(t,e,r,o){var i={destination:t,asset:r,amount:e,source:o}
return n.Operation.payment(i)}},{key:"manageOfferOperation",value:function(t,e,r,o){var i={selling:e,buying:t,amount:r,price:o,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return n.Operation.manageOffer(i)}},{key:"setOptionsOperation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t
return r.source=e,n.Operation.setOptions(r)}},{key:"manageDataOperation",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={name:t,value:a.strOK(e)?e:null,source:r}
return n.Operation.manageData(o)}},{key:"changeTrustOperation",value:function(t,e){var r={asset:t,limit:e,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return n.Operation.changeTrust(r)}},{key:"allowTrustOperation",value:function(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={trustor:t,assetCode:e.getCode(),authorize:r,source:o}
return n.Operation.allowTrust(i)}},{key:"pathPaymentOperation",value:function(t,e,r,o,i){var s={destination:t,sendAsset:e,sendMax:r,destAsset:o,destAmount:i,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return n.Operation.pathPayment(s)}},{key:"multisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=[],a={source:i,signer:{ed25519PublicKey:t,weight:e}}
return s.push(n.Operation.setOptions(a)),a={source:i,medThreshold:r,highThreshold:o},s.push(n.Operation.setOptions(a)),s}},{key:"removeMultisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[],s={source:o,medThreshold:e,highThreshold:r}
return i.push(n.Operation.setOptions(s)),s={source:o,signer:{ed25519PublicKey:t,weight:0}},i.push(n.Operation.setOptions(s)),i}}],(r=null)&&u(e.prototype,r),o&&u(e,o),t}(),h=r(6)
function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,d(e).apply(this,arguments))}var r,n,o
return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,h),r=e,(n=[{key:"log",value:function(t,e){this.emit("transaction",t,e)}}])&&l(r.prototype,n),o&&l(r,o),e}())
function g(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.log("StellarAPI constructor missing parameter"),this._horizonServer=e}var e,r,o
return e=t,(r=[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var t=this.serverURL()+"/metrics"
return i.a.get(t)}},{key:"accountInfo",value:function(t){return this.server().loadAccount(t)}},{key:"balances",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=[]
return t.balances.forEach(function(t){"native"===t.asset_type?e.push({symbol:"XLM",amount:t.balance,issuer:""}):e.push({symbol:t.asset_code,amount:t.balance,issuer:t.asset_issuer})}),e})}},{key:"balanceForAsset",value:function(t,e){var r=this
return t.publicKey().then(function(t){return r.server().loadAccount(t)}).then(function(t){var r=!0,n=!1,o=void 0
try{for(var i,s=t.balances[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var a=i.value
if("native"===a.asset_type){if(e.isNative())return a.balance}else if(a.asset_code===e.getCode()&&a.asset_issuer===e.getIssuer())return a.balance}}catch(t){n=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return"0"})}},{key:"paths",value:function(t,e,r,n){return this.server().paths(t,e,r,n)}},{key:"mergeAccount",value:function(t,e){var r=this,o="",i=""
return t.publicKey().then(function(t){return o=t,e.publicKey()}).then(function(t){return i=t,r.server().loadAccount(t)}).then(function(t){var r=new n.TransactionBuilder(t).setTimeout(n.TimeoutInfinite).addOperation(n.Operation.accountMerge({destination:i,source:o})).build()
return e.signTransaction(r)}).then(function(e){return t.signTransaction(e)}).then(function(t){return r.submitTransaction(t,"merge account")})}},{key:"manageOffer",value:function(t,e,r,n,o,i){var s=this,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null
return this._processAccounts(t,e).then(function(h){var f=c.manageOfferOperation(r,n,o,i,a,h.sourcePublicKey)
return s._submitOperations(h.account,"manage offer",t,e,[f],null,u)})}},{key:"changeTrust",value:function(t,e,r,n){var o=this
return this._processAccounts(t,e).then(function(i){var s=c.changeTrustOperation(r,n,i.sourcePublicKey)
return o._submitOperations(i.account,"change trust",t,e,[s])})}},{key:"allowTrust",value:function(t,e,r,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=null
return e.publicKey().then(function(e){return s=e,o._processAccounts(t,i)}).then(function(e){var a=c.allowTrustOperation(s,r,n,e.sourcePublicKey)
return o._submitOperations(e.account,"allow trust",t,i,[a])})}},{key:"makeMultiSig",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=null
return e.publicKey().then(function(e){return i=e,r._processAccounts(t,n)}).then(function(e){var s=c.multisigOperations(i,1,o,o,e.sourcePublicKey)
return r._submitOperations(e.account,"make multisig",t,n,s)})}},{key:"removeMultiSig",value:function(t,e,r){var n=this
return this.removeMultiSigTransaction(t,e,r).then(function(t){return n.submitTransaction(t,"remove multisig")})}},{key:"submitTransaction",value:function(t,e){return this.server().submitTransaction(t).then(function(t){return y.log(t,e),t})}},{key:"removeMultiSigTransaction",value:function(t,e,r){var o=this,i=null
return t.publicKey().then(function(t){return o.server().loadAccount(t)}).then(function(t){return i=t,e.publicKey()}).then(function(e){var o=new n.TransactionBuilder(i,r).setTimeout(n.TimeoutInfinite),s=c.removeMultisigOperations(e,1,1,null),a=!0,u=!1,h=void 0
try{for(var f,l=s[Symbol.iterator]();!(a=(f=l.next()).done);a=!0){var p=f.value
o.addOperation(p)}}catch(t){u=!0,h=t}finally{try{a||null==l.return||l.return()}finally{if(u)throw h}}var d=o.build()
return t.signTransaction(d)}).then(function(t){return e.signTransaction(t)})}},{key:"sendAssetBatch",value:function(t,e,r,o){var i=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,h=null===s?n.Asset.native():s,f=null,l=[]
return this._processAccounts(t,e).then(function(n){var s=Promise.resolve(),p=!0,d=!1,v=void 0
try{for(var y,g=function(){var t=y.value
s=s.then(function(){return t.publicKey()}).then(function(t){return f=t,i.server().loadAccount(f)}).then(function(t){if(!i._hasAssetTrustline(t,h))throw new Error("No trustline from destination to asset")
return null}).then(function(){var t=c.paymentOperation(f,o,h,n.sourcePublicKey)
return l.push(t),null})},_=r[Symbol.iterator]();!(p=(y=_.next()).done);p=!0)g()}catch(t){d=!0,v=t}finally{try{p||null==_.return||_.return()}finally{if(d)throw v}}return s.then(function(){return i._submitOperations(n.account,"send asset batch",t,e,l,a,u)})})}},{key:"sendAsset",value:function(t,e,r,o){var i=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,h=null===s?n.Asset.native():s,f=null
return r.publicKey().then(function(t){return f=t,i.server().loadAccount(f)}).then(function(r){if(!i._hasAssetTrustline(r,h))throw new Error("No trustline from destination to asset")
return i._processAccounts(t,e)}).then(function(r){var n=c.paymentOperation(f,o,h,r.sourcePublicKey)
return i._submitOperations(r.account,"send asset",t,e,[n],a,u)})}},{key:"buyTokens",value:function(t,e,r,n,o){var i=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null
return t.publicKey().then(function(t){return u=t,i.server().loadAccount(t)}).then(function(e){if(!i._hasAssetTrustline(e,r))throw new Error("No trustline from buyer to asset")
return i._processAccounts(t,s)}).then(function(h){var f=c.pathPaymentOperation(u,e,n,r,o,h.sourcePublicKey)
return i._submitOperations(h.account,"buy asset",t,s,[f],null,a)})}},{key:"manageData",value:function(t,e,r,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(t,e).then(function(s){var a=c.manageDataOperation(r,n,s.sourcePublicKey)
return o._submitOperations(s.account,"manage data",t,e,[a],null,i)})}},{key:"atomicSwap",value:function(t,e,r,n,o,i){var s,a,u=this,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
return t.publicKey().then(function(t){return s=t,r.publicKey()}).then(function(e){return a=e,u._processAccounts(t,o)}).then(function(f){var l=c.paymentOperation(a,i,e,s),p=c.paymentOperation(s,i,n,a),d=[r]
return h&&(d=d.concat(h)),u._submitOperations(f.account,"atomic swap",t,o,[l,p],null,d)})}},{key:"getFlags",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=0
return t.flags.auth_required&&(e|=n.AuthRequiredFlag),t.flags.auth_revocable&&(e|=n.AuthRevocableFlag),e})}},{key:"createAccount",value:function(t,e,r){var o,i=this
return e.publicKey().then(function(e){return o=e,t.publicKey()}).then(function(t){return i.server().loadAccount(t)}).then(function(e){var i={destination:o,startingBalance:r},s=new n.TransactionBuilder(e).setTimeout(n.TimeoutInfinite).addOperation(n.Operation.createAccount(i)).build()
return t.signTransaction(s)}).then(function(t){return i.submitTransaction(t,"create account")}).then(function(t){return i.server().loadAccount(o)})}},{key:"lockAccount",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=null
switch(e){case"low":o={masterWeight:1,lowThreshold:0,medThreshold:2,highThreshold:2}
break
case"lock":o={masterWeight:0,lowThreshold:0,medThreshold:0,highThreshold:0}
break
default:console.log("preset invalid: "+e)}if(!o)throw new Error("lockAccount preset invalid")
return this.setOptions(t,o,r,n)}},{key:"setDomain",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={homeDomain:e}
return this.setOptions(t,o,r,n)}},{key:"setFlags",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={setFlags:e}
return this.setOptions(t,o,r,n)}},{key:"clearFlags",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={clearFlags:e}
return this.setOptions(t,o,r,n)}},{key:"setInflationDestination",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={inflationDest:e}
return this.setOptions(t,o,r,n)}},{key:"setOptions",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return this._processAccounts(t,n).then(function(i){var s=c.setOptionsOperation(e,i.sourcePublicKey)
return r._submitOperations(i.account,"set options",t,n,[s],null,o)})}},{key:"multiOperation",value:function(t,e,r){var o=this,i=null,s=[]
return t.publicKey().then(function(t){return i=t,e.publicKey()}).then(function(t){return o.server().loadAccount(t)}).then(function(a){var u=Promise.resolve(),h=!0,f=!1,l=void 0
try{for(var p,d=function(){var t=p.value
u=u.then(function(){switch(t.type){case"change-trust":var e=c.changeTrustOperation(t.asset,t.limit,i)
return s.push(e),null
case"multisig":return t.secondWallet.publicKey().then(function(t){var e=c.multisigOperations(t,1,2,2,i)
return s=s.concat(e),null})
case"create-account":return t.newWallet.publicKey().then(function(e){var r={destination:e,startingBalance:t.startingBalance},o=n.Operation.createAccount(r)
return s.push(o),null})
default:return console.log("not handled: "+t.type),null}})},v=r[Symbol.iterator]();!(h=(p=v.next()).done);h=!0)d()}catch(t){f=!0,l=t}finally{try{h||null==v.return||v.return()}finally{if(f)throw l}}return u.then(function(){if(0===s.length)throw new Error("multi operation failed")
return o._submitOperations(a,"multi-operation",t,e,s)})})}},{key:"_hasAssetTrustline",value:function(t,e){return!!e.isNative()||t.balances.some(function(t){return t.asset_code===e.getCode()&&t.asset_issuer===e.getIssuer()})}},{key:"_processAccounts",value:function(t,e){var r=this
return t.publicKey().then(function(t){return e?e.publicKey().then(function(e){return{sourcePublicKey:t,fundingPublicKey:e}}):{sourcePublicKey:t}}).then(function(t){var e=t.sourcePublicKey
return t.fundingPublicKey&&(e=t.fundingPublicKey),r.server().loadAccount(e).then(function(e){return t.account=e,t})})}},{key:"_submitOperations",value:function(t,e,r,o,i){var s=this,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,h=new n.TransactionBuilder(t).setTimeout(n.TimeoutInfinite),f=!0,l=!1,p=void 0
try{for(var d,v=i[Symbol.iterator]();!(f=(d=v.next()).done);f=!0){var y=d.value
h.addOperation(y)}}catch(t){l=!0,p=t}finally{try{f||null==v.return||v.return()}finally{if(l)throw p}}a.strOK(u)&&h.addMemo(n.Memo.text(u))
var g=h.build()
return r.signTransaction(g).then(function(t){return o&&!o.equalTo(r)?o.signTransaction(t):t}).then(function(t){if(c&&c.length>0){var n=[]
n.push(r),o&&n.push(o)
var i=s._filteredSigners(c,n)
if(i.length>0){var a=Promise.resolve(),u=!0,h=!1,f=void 0
try{for(var l,p=function(){var e=l.value
a=a.then(function(){return e.signTransaction(t)})},d=i[Symbol.iterator]();!(u=(l=d.next()).done);u=!0)p()}catch(t){h=!0,f=t}finally{try{u||null==d.return||d.return()}finally{if(h)throw f}}return a.then(function(t){return s.submitTransaction(t,e)})}}return s.submitTransaction(t,e)})}},{key:"_filteredSigners",value:function(t,e){var r=t
if(t&&t.length>0&&e&&e.length>0){r=[]
var n=!0,o=!1,i=void 0
try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var u=s.value
if(u){var c=!1,h=!0,f=!1,l=void 0
try{for(var p,d=e[Symbol.iterator]();!(h=(p=d.next()).done);h=!0){var v=p.value
if(u.equalTo(v)){c=!0
break}}}catch(t){f=!0,l=t}finally{try{h||null==d.return||d.return()}finally{if(f)throw l}}c||r.push(u)}}}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}}return r}}])&&g(e.prototype,r),o&&g(e,o),t}()
function b(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2?arguments[2]:void 0
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverURL=e,this._testnet=r,this._testnet?n.Network.useTestNetwork():n.Network.usePublicNetwork(),this._server=new n.Server(e,o)}var e,r,o
return e=t,(r=[{key:"server",value:function(){return this._testnet?n.Network.useTestNetwork():n.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}])&&b(e.prototype,r),o&&b(e,o),t}()
function w(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o
return e=t,o=[{key:"secret",value:function(e){var r=new t
return r._secret=e,r._publicKey=n.Keypair.fromSecret(e).publicKey(),r}},{key:"ledger",value:function(e,r){var n=new t
return n._ledgerAPI=e,n._confirmCallback=r,n}},{key:"public",value:function(e){var r=new t
return r._publicKey=e,r}}],(r=[{key:"publicKey",value:function(){var t=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(e){return t._publicKey=e,t._publicKey})}},{key:"equalTo",value:function(t){return!(!this.usingLedger()||!t.usingLedger())||(this._publicKey===t._publicKey||this._secret===t._secret)}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(t){var e=this
return this.publicKey().then(function(r){if(e.usingLedger())return e._confirmCallback&&e._confirmCallback(),e._ledgerAPI.signTransaction(r,t)
if(a.strOK(e._secret)){var o=n.Keypair.fromSecret(e._secret)
return t.sign(o),t}throw new Error("This wallet does not contain a secret key.")}).then(function(t){return t})}}])&&w(e.prototype,r),o&&w(e,o),t}()
function A(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var T=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=r,this.horizon=e,this.order=o,this.records=[],this.index=-1,this.pagingToken=0,this.publicKey=n,this.reachedEnd=!1,this.loading=!1}var e,r,n
return e=t,(r=[{key:"recordForIndex",value:function(t){if(t>=0&&t<this.records.length?this.index=t:this.index=t>0?this.records.length-1:0,this.records.length>0){var e=this.records[this.index]
return{index:this.index,record:e}}return{}}},{key:"getCurrentPage",value:function(t){var e=this
return new Promise(function(r,n){if(t){var o=e.index+1
if(o>=e.records.length){if(!e.reachedEnd)return e.loadNextPage().then(function(){r(e.recordForIndex(o))})
r(e.recordForIndex(o))}else r(e.recordForIndex(o))}else{var i=e.index-1
r(e.recordForIndex(i))}})}},{key:"next",value:function(){return this.getCurrentPage(!0)}},{key:"previous",value:function(){return this.getCurrentPage(!1)}},{key:"loadNextPage",value:function(){var t=this
return new Promise(function(e,r){if(!t.loading){var n
switch(t.loading=!0,t.type){case"payments":n=t.horizon.server().payments()
break
case"transactions":n=t.horizon.server().transactions()
break
case"operations":n=t.horizon.server().operations()
break
case"effects":n=t.horizon.server().effects()}return n.limit(4).order(t.order),0!==t.pagingToken&&n.cursor(t.pagingToken),n.forAccount(t.publicKey),n.call().then(function(r){if(r.records.length>0){t.records=t.records.concat(r.records)
var n=r.records.length-1
t.pagingToken=r.records[n].paging_token}else console.log("reached end"),t.reachedEnd=!0
t.loading=!1,e(null)}).catch(function(e){t.loading=!1,console.log(e,"Error"),r(null)})}console.log("loading"),e(null)})}}])&&A(e.prototype,r),n&&A(e,n),t}(),C=r(11),S=r.n(C),O=r(12),P=r.n(O)
function k(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var I=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n
return e=t,n=[{key:"setupForNode",value:function(t){this.nodeTransport=t}},{key:"isNodeTransport",value:function(t){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create():P.a.create()}}],(r=null)&&k(e.prototype,r),n&&k(e,n),t}()
function R(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=null,this.str=null}var e,r,o
return e=t,(r=[{key:"createTransport",value:function(){var t=this
return this.str?Promise.resolve():I.create().then(function(e){return t.transport=e,t.str=new S.a(t.transport),null}).catch(function(t){throw console.log(JSON.stringify(t)),t})}},{key:"verifyConnect",value:function(){var t=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw t.transport.close(),t.str=null,t.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var t=this
return this.createTransport().then(function(){return t.verifyConnect().catch(function(e){return console.log("connect failed: ",e),t.createTransport().then(function(){return t.verifyConnect()})})}).catch(function(t){throw console.log("Error: connect: "+JSON.stringify(t)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var t=this
return this.connect().then(function(){return t.str.getPublicKey("44'/148'/0'")}).then(function(t){return t.publicKey}).catch(function(t){throw console.log("Error: getPublicKey: "+JSON.stringify(t)),t})}},{key:"signTransaction",value:function(t,e){var r=this
return this.connect().then(function(){return r.str.signTransaction("44'/148'/0'",e.signatureBase())}).then(function(r){var o=r.signature,i=n.Keypair.fromPublicKey(t)
if(i.verify(e.hash(),o)){var s=i.signatureHint(),a=new n.xdr.DecoratedSignature({hint:s,signature:o})
return e.signatures.push(a),e}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(t){throw console.log("Error: signTransaction: "+JSON.stringify(t)),t})}}])&&R(e.prototype,r),o&&R(e,o),t}()
r.d(e,"StellarAPI",function(){return _}),r.d(e,"HorizonServer",function(){return m}),r.d(e,"StellarWallet",function(){return E}),r.d(e,"LedgerAPI",function(){return U}),r.d(e,"LedgerAPITransport",function(){return I}),r.d(e,"TransactionLogger",function(){return y}),r.d(e,"StellarSdk",function(){return n}),r.d(e,"StreamCache",function(){return T}),r.d(e,"Utils",function(){return a})}])})
