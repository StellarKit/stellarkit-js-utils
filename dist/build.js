!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("stellar-sdk"),require("axios")):"function"==typeof define&&define.amd?define(["stellar-sdk","axios"],e):"object"==typeof exports?exports["stellar-js-utils"]=e(require("stellar-sdk"),require("axios")):t["stellar-js-utils"]=e(t["stellar-sdk"],t.axios)}(window,function(t,e){return function(t){var e={}
function n(r){if(e[r])return e[r].exports
var i=e[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=140)}([function(e,n){e.exports=t},function(t,e){var n=t.exports={version:"2.5.7"}
"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(48)("wks"),i=n(49),o=n(2).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(2),i=n(1),o=n(13),s=n(7),a=n(19),u=function(t,e,n){var c,f,l,h=t&u.F,p=t&u.G,v=t&u.S,d=t&u.P,y=t&u.B,g=t&u.W,_=p?i:i[e]||(i[e]={}),b=_.prototype,m=p?r:v?r[e]:(r[e]||{}).prototype
for(c in p&&(n=e),n)(f=!h&&m&&void 0!==m[c])&&a(_,c)||(l=f?m[c]:n[c],_[c]=p&&"function"!=typeof m[c]?n[c]:y&&f?o(l,r):g&&m[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t
case 1:return new t(e)
case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)}
return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((_.virtual||(_.virtual={}))[c]=l,t&u.R&&b&&!b[c]&&s(b,c,l)))}
u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(14)
t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!")
return t}},function(t,e,n){var r=n(12),i=r.Buffer
function o(t,e){for(var n in t)e[n]=t[n]}function s(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=s),o(i,s),s.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return i(t,e,n)},s.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var r=i(t)
return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return i(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return r.SlowBuffer(t)}},function(t,e,n){var r=n(8),i=n(30)
t.exports=n(9)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5),i=n(71),o=n(72),s=Object.defineProperty
e.f=n(9)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!")
return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){var r=n(6).Buffer
function i(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e))
for(var n=this._block,i=this._blockSize,o=t.length,s=this._len,a=0;a<o;){for(var u=s%i,c=Math.min(o-a,i-u),f=0;f<c;f++)n[u+f]=t[a+f]
a+=c,(s+=c)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var n=8*this._len
if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4)
else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},function(t,e,n){"use strict";(function(t){var r=n(65),i=n(66),o=n(67)
function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,n)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return l(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r)
u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=h(t,e)
return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8")
if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|v(e,n),i=(t=a(t,r)).write(e,n)
i!==r&&(t=t.slice(0,i))
return t}(t,e,n):function(t,e){if(u.isBuffer(e)){var n=0|p(e.length)
return 0===(t=a(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?a(t,0):h(t,e)
if("Buffer"===e.type&&o(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(f(e),t=a(t,e<0?0:0|p(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0
return t}function h(t,e){var n=e.length<0?0:0|p(e.length)
t=a(t,n)
for(var r=0;r<n;r+=1)t[r]=255&e[r]
return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes")
return 0|t}function v(t,e){if(u.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var n=t.length
if(0===n)return 0
for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return D(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return F(t).length
default:if(r)return D(t).length
e=(""+e).toLowerCase(),r=!0}}function d(t,e,n){var r=t[e]
t[e]=t[n],t[n]=r}function y(t,e,n,r,i){if(0===t.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1
n=t.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,i)
if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,i){var o,s=1,a=t.length,u=e.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1
s=2,a/=2,u/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var f=-1
for(o=n;o<a;o++)if(c(t,o)===c(e,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*s}else-1!==f&&(o-=o-f),f=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){for(var l=!0,h=0;h<u;h++)if(c(t,o+h)!==c(e,h)){l=!1
break}if(l)return o}return-1}function _(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=e.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16)
if(isNaN(a))return s
t[n+s]=a}return s}function b(t,e,n,r){return Y(D(e,t.length-n),t,n,r)}function m(t,e,n,r){return Y(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n))
return e}(e),t,n,r)}function w(t,e,n,r){return m(t,e,n,r)}function E(t,e,n,r){return Y(F(e),t,n,r)}function x(t,e,n,r){return Y(function(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(e,t.length-n),t,n,r)}function k(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function T(t,e,n){n=Math.min(t.length,n)
for(var r=[],i=e;i<n;){var o,s,a,u,c=t[i],f=null,l=c>239?4:c>223?3:c>191?2:1
if(i+l<=n)switch(l){case 1:c<128&&(f=c)
break
case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(f=u)
break
case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(f=u)
break
case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(f=u)}null===f?(f=65533,l=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return function(t){var e=t.length
if(e<=S)return String.fromCharCode.apply(String,t)
var n="",r=0
for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=S))
return n}(r)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0)
return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return c(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return function(t,e,n,r){return f(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},u.allocUnsafe=function(t){return l(null,t)},u.allocUnsafeSlow=function(t){return l(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers")
if(t===e)return 0
for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i]
break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return u.alloc(0)
var n
if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length
var r=u.allocUnsafe(e),i=0
for(n=0;n<t.length;++n){var s=t[n]
if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers')
s.copy(r,i),i+=s.length}return r},u.byteLength=v,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)d(this,e,e+1)
return this},u.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2)
return this},u.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4)
return this},u.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?T(this,0,t):function(t,e,n){var r=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,n)
case"utf8":case"utf-8":return T(this,e,n)
case"ascii":return A(this,e,n)
case"latin1":case"binary":return P(this,e,n)
case"base64":return k(this,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n)
default:if(r)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&e>=n)return 0
if(r>=i)return-1
if(e>=n)return 1
if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0
for(var o=i-r,s=n-e,a=Math.min(o,s),c=this.slice(r,i),f=t.slice(e,n),l=0;l<a;++l)if(c[l]!==f[l]){o=c[l],s=f[l]
break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return y(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return y(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0
else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e
if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return _(this,t,e,n)
case"utf8":case"utf-8":return b(this,t,e,n)
case"ascii":return m(this,t,e,n)
case"latin1":case"binary":return w(this,t,e,n)
case"base64":return E(this,t,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var S=4096
function A(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i])
return r}function P(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(t[i])
return r}function O(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=e;o<n;++o)i+=j(t[o])
return i}function C(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function I(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,n,r,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>i||e<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>t.length)throw new RangeError("Index out of range")}function L(t,e,n,r){e<0&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function U(t,e,n,r){e<0&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function M(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function B(t,e,n,r,o){return o||M(t,0,n,4),i.write(t,e,n,r,23,4),n+4}function N(t,e,n,r,o){return o||M(t,0,n,8),i.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length
if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=u.prototype
else{var i=e-t
n=new u(i,void 0)
for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||I(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||I(t,e,this.length)
for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i
return r},u.prototype.readUInt8=function(t,e){return e||I(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||I(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||I(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||I(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||I(t,e,this.length)
for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||I(t,2,this.length)
var n=this[t]|this[t+1]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||I(t,2,this.length)
var n=this[t+1]|this[t]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||I(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||I(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||I(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||I(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||R(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255
return e+n},u.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||R(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255
return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):U(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):U(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
R(this,t,e,n,i-1,-i)}var o=0,s=1,a=0
for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255
return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
R(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0
for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255
return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):U(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):U(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return B(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return B(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return N(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return N(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n)
var i,o=r-n
if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n]
else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n]
else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e)
return o},u.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0)
i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255)
if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index")
if(n<=e)return this
var o
if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t
else{var s=u.isBuffer(t)?t:D(new u(t,r).toString()),a=s.length
for(o=0;o<n-e;++o)this[o+e]=s[o%a]}return this}
var K=/[^+\/0-9A-Za-z-_]/g
function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function D(t,e){var n
e=e||1/0
for(var r=t.length,i=null,o=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189)
continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((e-=1)<0)break
o.push(n)}else if(n<2048){if((e-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function F(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(K,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function Y(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i]
return i}}).call(this,n(28))},function(t,e,n){var r=n(17)
t.exports=function(t,e,n){if(r(t),void 0===e)return t
switch(n){case 1:return function(n){return t.call(e,n)}
case 2:return function(n,r){return t.call(e,n,r)}
case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,n){t.exports=e},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")
return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty
t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString
t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(34)
t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){var e=[]
return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3]
if(!r)return n
if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})
return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t)
return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]])
for(var r={},i=0;i<this.length;i++){var o=this[i][0]
"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i]
"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict"
function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]}
r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(e),n.d(e,"default",function(){return v})
var i="undefined"!=typeof document
if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")
var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,f=function(){},l=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
function v(t,e,n,i){c=n,l=i||{}
var s=r(t,e)
return d(s),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i];(u=o[a.id]).refs--,n.push(u)}e?d(s=r(t,e)):s=[]
for(i=0;i<n.length;i++){var u
if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]()
delete o[u.id]}}}}function d(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id]
if(r){r.refs++
for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i])
for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]))
r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[]
for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i]))
o[n.id]={id:n.id,refs:1,parts:s}}}}function y(){var t=document.createElement("style")
return t.type="text/css",s.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+h+'~="'+t.id+'"]')
if(r){if(c)return f
r.parentNode.removeChild(r)}if(p){var i=u++
r=a||(a=y()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=y(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap
r&&t.setAttribute("media",r)
l.ssrId&&t.setAttribute(h,e.id)
i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
if(t.styleSheet)t.styleSheet.cssText=n
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)}
return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return
e(t=r)}else n()}}var _=function(){var t=[]
return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()
function b(t,e,n,r){var i=n?"":r.css
if(t.styleSheet)t.styleSheet.cssText=_(e,i)
else{var o=document.createTextNode(i),s=t.childNodes
s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){var r=n(133)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(23).default)("2a8e208c",r,!1,{})},function(t,e,n){var r=n(135)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(23).default)("34a233ba",r,!1,{})},function(t,e,n){var r=n(137)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(23).default)("a97a3cdc",r,!1,{})},function(t,e,n){var r=n(139)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(23).default)("26ced61e",r,!1,{})},function(t,e){var n
n=function(){return this}()
try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(14),i=n(2).document,o=r(i)&&r(i.createElement)
t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(74),__esModule:!0}},function(t,e,n){"use strict"
var r=n(76)(!0)
n(46)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i
return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){var n=Math.ceil,r=Math.floor
t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t)
return t}},function(t,e){t.exports=!0},function(t,e,n){var r=n(81),i=n(50)
t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(47),i=n(34)
t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(33),i=Math.min
t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(48)("keys"),i=n(49)
t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(8).f,i=n(19),o=n(3)("toStringTag")
t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(53),i=n(3)("iterator"),o=n(15)
t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict"
var r=n(17)
t.exports.f=function(t){return new function(t){var e,n
this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor")
e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!function(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,s,a,u,c
if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e
var f=new Error('Uncaught, unspecified "error" event. ('+e+")")
throw f.context=e,f}if(o(n=this._events[t]))return!1
if(r(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),s=(c=n.slice()).length,u=0;u<s;u++)c[u].apply(this,a)
return!0},n.prototype.addListener=function(t,e){var s
if(!r(e))throw TypeError("listener must be a function")
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?i(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,i(this._events[t])&&!this._events[t].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function")
var n=!1
function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},n.prototype.removeListener=function(t,e){var n,o,s,a
if(!r(e))throw TypeError("listener must be a function")
if(!this._events||!this._events[t])return this
if(s=(n=this._events[t]).length,o=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e)
else if(i(n)){for(a=s;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){o=a
break}if(o<0)return this
1===n.length?(n.length=0,delete this._events[t]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this
if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e)
return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[t]))this.removeListener(t,n)
else if(n)for(;n.length;)this.removeListener(t,n[n.length-1])
return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t]
if(r(e))return 1
if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){"use strict"
e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict"
e.__esModule=!0
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(68))
e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict"
var r=n(35),i=n(4),o=n(77),s=n(7),a=n(15),u=n(78),c=n(40),f=n(84),l=n(3)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this}
t.exports=function(t,e,n,v,d,y,g){u(n,e,v)
var _,b,m,w=function(t){if(!h&&t in T)return T[t]
switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",x="values"==d,k=!1,T=t.prototype,S=T[l]||T["@@iterator"]||d&&T[d],A=S||w(d),P=d?x?w("entries"):A:void 0,O="Array"==e&&T.entries||S
if(O&&(m=f(O.call(new t)))!==Object.prototype&&m.next&&(c(m,E,!0),r||"function"==typeof m[l]||s(m,l,p)),x&&S&&"values"!==S.name&&(k=!0,A=function(){return S.call(this)}),r&&!g||!h&&!k&&T[l]||s(T,l,A),a[e]=A,a[E]=p,d)if(_={values:x?A:w("values"),keys:y?A:w("keys"),entries:P},g)for(b in _)b in T||o(T,b,_[b])
else i(i.P+i.F*(h||k),e,_)
return _}},function(t,e,n){var r=n(20)
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(1),i=n(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(35)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random()
t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2).document
t.exports=r&&r.documentElement},function(t,e,n){n(85)
for(var r=n(2),i=n(7),o=n(15),s=n(3)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],f=r[c],l=f&&f.prototype
l&&!l[s]&&i(l,s,c),o[c]=o.Array}},function(t,e,n){var r=n(20),i=n(3)("toStringTag"),o="Arguments"==r(function(){return arguments}())
t.exports=function(t){var e,n,s
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(5)
t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return
throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(15),i=n(3)("iterator"),o=Array.prototype
t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(5),i=n(17),o=n(3)("species")
t.exports=function(t,e){var n,s=r(t).constructor
return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},function(t,e,n){var r,i,o,s=n(13),a=n(91),u=n(51),c=n(29),f=n(2),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,g={},_=function(){var t=+this
if(g.hasOwnProperty(t)){var e=g[t]
delete g[t],e()}},b=function(t){_.call(t.data)}
h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++])
return g[++y]=function(){a("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete g[t]},"process"==n(20)(l)?r=function(t){l.nextTick(s(_,t,1))}:d&&d.now?r=function(t){d.now(s(_,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=b,r=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),_.call(t)}}:function(t){setTimeout(s(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(5),i=n(14),o=n(42)
t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e
var n=o.f(t)
return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(3)("iterator"),i=!1
try{var o=[7][r]()
o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1
var n=!1
try{var o=[7],s=o[r]()
s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r=n(10),i=n(11),o=n(6).Buffer,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],a=new Array(64)
function u(){this.init(),this._w=a,i.call(this,64,56)}function c(t,e,n){return n^t&(e^n)}function f(t,e,n){return t&e|n&(t|e)}function l(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function h(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function p(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function v(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}r(u,i),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0|this._f,d=0|this._g,y=0|this._h,g=0;g<16;++g)e[g]=t.readInt32BE(4*g)
for(;g<64;++g)e[g]=v(e[g-2])+e[g-7]+p(e[g-15])+e[g-16]|0
for(var _=0;_<64;++_){var b=y+h(a)+c(a,u,d)+s[_]+e[_]|0,m=l(n)+f(n,r,i)|0
y=d,d=u,u=a,a=o+b|0,o=i,i=r,r=n,n=b+m|0}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0,this._f=u+this._f|0,this._g=d+this._g|0,this._h=y+this._h|0},u.prototype._hash=function(){var t=o.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=u},function(t,e,n){var r=n(10),i=n(11),o=n(6).Buffer,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],a=new Array(160)
function u(){this.init(),this._w=a,i.call(this,128,112)}function c(t,e,n){return n^t&(e^n)}function f(t,e,n){return t&e|n&(t|e)}function l(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function h(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function v(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function d(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function y(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function g(t,e){return t>>>0<e>>>0?1:0}r(u,i),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,a=0|this._eh,u=0|this._fh,_=0|this._gh,b=0|this._hh,m=0|this._al,w=0|this._bl,E=0|this._cl,x=0|this._dl,k=0|this._el,T=0|this._fl,S=0|this._gl,A=0|this._hl,P=0;P<32;P+=2)e[P]=t.readInt32BE(4*P),e[P+1]=t.readInt32BE(4*P+4)
for(;P<160;P+=2){var O=e[P-30],C=e[P-30+1],I=p(O,C),R=v(C,O),L=d(O=e[P-4],C=e[P-4+1]),U=y(C,O),M=e[P-14],B=e[P-14+1],N=e[P-32],K=e[P-32+1],j=R+B|0,D=I+M+g(j,R)|0
D=(D=D+L+g(j=j+U|0,U)|0)+N+g(j=j+K|0,K)|0,e[P]=D,e[P+1]=j}for(var F=0;F<160;F+=2){D=e[F],j=e[F+1]
var Y=f(n,r,i),z=f(m,w,E),G=l(n,m),H=l(m,n),q=h(a,k),W=h(k,a),V=s[F],X=s[F+1],J=c(a,u,_),$=c(k,T,S),Q=A+W|0,Z=b+q+g(Q,A)|0
Z=(Z=(Z=Z+J+g(Q=Q+$|0,$)|0)+V+g(Q=Q+X|0,X)|0)+D+g(Q=Q+j|0,j)|0
var tt=H+z|0,et=G+Y+g(tt,H)|0
b=_,A=S,_=u,S=T,u=a,T=k,a=o+Z+g(k=x+Q|0,x)|0,o=i,x=E,i=r,E=w,r=n,w=m,n=Z+et+g(m=Q+tt|0,Q)|0}this._al=this._al+m|0,this._bl=this._bl+w|0,this._cl=this._cl+E|0,this._dl=this._dl+x|0,this._el=this._el+k|0,this._fl=this._fl+T|0,this._gl=this._gl+S|0,this._hl=this._hl+A|0,this._ah=this._ah+n+g(this._al,m)|0,this._bh=this._bh+r+g(this._bl,w)|0,this._ch=this._ch+i+g(this._cl,E)|0,this._dh=this._dh+o+g(this._dl,x)|0,this._eh=this._eh+a+g(this._el,k)|0,this._fh=this._fh+u+g(this._fl,T)|0,this._gh=this._gh+_+g(this._gl,S)|0,this._hh=this._hh+b+g(this._hl,A)|0},u.prototype._hash=function(){var t=o.allocUnsafe(64)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=u},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r=s(n(44)),i=s(n(45)),o=n(73)
function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v";(0,r.default)(this,e),this.transport=t,t.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],n)}return(0,i.default)(e,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(t){var e=1===t[0]||t[1]<2
return{version:t[1]+"."+t[2]+"."+t[3],multiOpsEnabled:e}})}},{key:"getPublicKey",value:function(e,n,r){var i=this;(0,o.checkStellarBip32Path)(e)
var s=[],a=void 0,u=(0,o.splitPath)(e),c=new t(1+4*u.length)
c[0]=u.length,u.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)})
var f=t.from("via lumina","ascii")
s.push(t.concat([c,f]))
var l=!1
return(0,o.foreach)(s,function(e){return i.transport.send(224,l?16:2,n?1:0,r?1:0,e,[36864,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(l=!0,s.push(t.alloc(0))),a=e})}).then(function(){var t=0,e=a.slice(t,t+32)
t+=32
var r=(0,o.encodeEd25519PublicKey)(e)
if(n){var i=a.slice(t,t+64)
if(!(0,o.verifyEd25519Signature)(f,i,e))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:r}})}},{key:"signTransaction",value:function(e,n){var r=this
if((0,o.checkStellarBip32Path)(e),n.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+n.length)
var i=[],s=void 0,a=(0,o.splitPath)(e),u=1+4*a.length,c=t.alloc(u)
c[0]=a.length,a.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)})
var f=150-u
if(n.length<=f)i.push(t.concat([c,n]))
else{var l=t.alloc(f),h=0
for(n.copy(l,0,h,f),i.push(t.concat([c,l])),h+=f;h<n.length;){var p=n.length-h
f=p<150?p:150,l=t.alloc(f),n.copy(l,0,h,h+f),h+=f,i.push(l)}}var v=!1
return(0,o.foreach)(i,function(e,n){return r.transport.send(224,v?16:4,0===n?0:128,n===i.length-1?0:128,e,[36864,27013,27684,27685,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(v=!0,i.push(t.alloc(0))),s=e})}).then(function(){var i=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===i)return{signature:t.from(s.slice(0,s.length-2))}
if(27684===i)return r.signHash_private(e,(0,o.hash)(n))
if(27685===i)return r.signHash_private(e,(0,o.hash)(n))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(t,e){return(0,o.checkStellarBip32Path)(t),this.signHash_private(t,e)}},{key:"signHash_private",value:function(e,n){var r=this,i=[],s=void 0,a=(0,o.splitPath)(e),u=t.alloc(1+4*a.length)
u[0]=a.length,a.forEach(function(t,e){u.writeUInt32BE(t,1+4*e)}),i.push(t.concat([u,n]))
var c=!1
return(0,o.foreach)(i,function(e){return r.transport.send(224,c?16:8,0,0,e,[36864,27013,27750,27904,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(c=!0,i.push(t.alloc(0))),s=e})}).then(function(){var e=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===e)return{signature:t.from(s.slice(0,s.length-2))}
throw 27013===e?new Error("Transaction approval request was rejected"):27904===e?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),e}()
e.default=a}).call(this,n(12).Buffer)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(106),s=n(109),a=function(t){return t&&t.__esModule?t:{default:t}}(s)
function u(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function r(i,o){try{var s=e[i](o),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})
t(a)}("next")})}}function c(t,e,n){var r=new s.TransportError(e,n)
return r.originalError=t,r}var f=function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},l=function(t){return t.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*t.length%4)}
function h(e,n,r,i,s){var a=function(e,n){for(var r=t.alloc(e.length),i=0;i<e.length;i++)r[i]=e[i]^n[i%n.length]
return r}(e,i),u=t.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),c={version:"U2F_V2",keyHandle:f(a.toString("base64")),challenge:f(u.toString("base64")),appId:location.origin}
return r&&r("=> "+e.toString("hex")),(0,o.sign)(c,n/1e3).then(function(e){var n=e.signatureData
if("string"==typeof n){var i=t.from(l(n),"base64"),o=void 0
return o=s?i.slice(5):i,r&&r("<= "+o.toString("hex")),o}throw e})}var p=[]
function v(t){return 5===t.metaData.code}var d=function(e){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)
var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))
return t.unwrap=!0,p.push(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a.default),i(n,null,[{key:"open",value:function(){var t=u(regeneratorRuntime.mark(function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new n)
case 1:case"end":return t.stop()}},t,this)}))
return function(e){return t.apply(this,arguments)}}()}]),i(n,[{key:"exchange",value:function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(e,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return t.abrupt("return",t.sent)
case 6:if(t.prev=6,t.t0=t.catch(0),!("object"===r(t.t0.metaData))){t.next=14
break}throw v(t.t0)&&(p.forEach(function(t){return t.emit("disconnect")}),p=[]),c(t.t0,"Failed to sign with Ledger device: U2F "+t.t0.metaData.type,"U2F_"+t.t0.metaData.code)
case 14:throw t.t0
case 15:case"end":return t.stop()}},t,this,[[0,6]])}))
return function(e){return t.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(e){this.scrambleKey=t.from(e,"ascii")}},{key:"setUnwrap",value:function(t){this.unwrap=t}},{key:"close",value:function(){var t=p.indexOf(this)
if(-1===t)throw new Error("invalid transport instance")
return p.splice(t,1),Promise.resolve()}}]),n}()
d.isSupported=o.isSupported,d.list=function(){return(0,o.isSupported)().then(function(t){return t?[null]:[]})},d.listen=function(t){var e=!1
return(0,o.isSupported)().then(function(n){e||(n?(t.next({type:"add",descriptor:null}),t.complete()):t.error(new s.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){e=!0}}},e.default=d}).call(this,n(12).Buffer)},function(t,e,n){"use strict"
e.byteLength=function(t){var e=c(t),n=e[0],r=e[1]
return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=c(t),r=n[0],s=n[1],a=new o(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),u=0,f=s>0?r-4:r,l=0;l<f;l+=4)e=i[t.charCodeAt(l)]<<18|i[t.charCodeAt(l+1)]<<12|i[t.charCodeAt(l+2)]<<6|i[t.charCodeAt(l+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e
2===s&&(e=i[t.charCodeAt(l)]<<2|i[t.charCodeAt(l+1)]>>4,a[u++]=255&e)
1===s&&(e=i[t.charCodeAt(l)]<<10|i[t.charCodeAt(l+1)]<<4|i[t.charCodeAt(l+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e)
return a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(l(t,s,s+16383>a?a:s+16383))
1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="))
return o.join("")}
for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)r[a]=s[a],i[s.charCodeAt(a)]=a
function c(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var n=t.indexOf("=")
return-1===n&&(n=e),[n,n===e?0:4-n%4]}function f(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function l(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(f(r))
return i.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,f=-7,l=n?i-1:0,h=n?-1:1,p=t[e+l]
for(l+=h,o=p&(1<<-f)-1,p>>=-f,f+=a;f>0;o=256*o+t[e+l],l+=h,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=r;f>0;s=256*s+t[e+l],l+=h,f-=8);if(0===o)o=1-c
else{if(o===u)return s?NaN:1/0*(p?-1:1)
s+=Math.pow(2,r),o-=c}return(p?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,u,c=8*o-i-1,f=(1<<c)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,v=r?1:-1,d=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+l>=1?h/u:h*Math.pow(2,1-l))*u>=2&&(s++,u/=2),s+l>=f?(a=0,s=f):s+l>=1?(a=(e*u-1)*Math.pow(2,i),s+=l):(a=e*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=255&a,p+=v,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+p]=255&s,p+=v,s/=256,c-=8);t[n+p-v]|=128*d}},function(t,e){var n={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e,n){n(70)
var r=n(1).Object
t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(4)
r(r.S+r.F*!n(9),"Object",{defineProperty:n(8).f})},function(t,e,n){t.exports=!n(9)&&!n(18)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(14)
t.exports=function(t,e){if(!r(t))return t
var n,i
if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i
if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r=a(n(31))
e.splitPath=function(t){var e=[]
return t.split("/").forEach(function(t){var n=parseInt(t,10)
isNaN(n)||(t.length>1&&"'"===t[t.length-1]&&(n+=2147483648),e.push(n))}),e},e.foreach=function(t,e){return r.default.resolve().then(function(){return function t(n,r,i){return n>=r.length?i:e(r[n],n).then(function(e){return i.push(e),t(n+1,r,i)})}(0,t,[])})},e.crc16xmodem=u,e.encodeEd25519PublicKey=function(e){var n=t.from(e),r=t.from([48]),o=t.concat([r,n]),s=t.alloc(2)
s.writeUInt16LE(u(o),0)
var a=t.concat([o,s])
return i.default.encode(a)},e.verifyEd25519Signature=function(t,e,n){return o.default.sign.detached.verify(new Uint8Array(t.toJSON().data),new Uint8Array(e.toJSON().data),new Uint8Array(n.toJSON().data))},e.hash=function(t){var e=new s.sha256
return e.update(t,"utf8"),e.digest()},e.checkStellarBip32Path=function(t){t.split("/").forEach(function(t){if(!t.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var i=a(n(98)),o=a(n(99)),s=n(101)
function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){for(var n=void 0!==e?~~e:0,r=0;r<t.length;r++){var i=n>>>8&255
i^=255&t[r],n=n<<8&65535,n^=i^=i>>>4,n^=i=i<<5&65535,n^=i=i<<7&65535}return n}}).call(this,n(12).Buffer)},function(t,e,n){n(75),n(32),n(52),n(88),n(96),n(97),t.exports=n(1).Promise},function(t,e){},function(t,e,n){var r=n(33),i=n(34)
t.exports=function(t){return function(e,n){var o,s,a=String(i(e)),u=r(n),c=a.length
return u<0||u>=c?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):o:t?a.slice(u,u+2):s-56320+(o-55296<<10)+65536}}},function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict"
var r=n(79),i=n(30),o=n(40),s={}
n(7)(s,n(3)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(5),i=n(80),o=n(50),s=n(39)("IE_PROTO"),a=function(){},u=function(){var t,e=n(29)("iframe"),r=o.length
for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]]
return u()}
t.exports=Object.create||function(t,e){var n
return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(8),i=n(5),o=n(36)
t.exports=n(9)?Object.defineProperties:function(t,e){i(t)
for(var n,s=o(e),a=s.length,u=0;a>u;)r.f(t,n=s[u++],e[n])
return t}},function(t,e,n){var r=n(19),i=n(37),o=n(82)(!1),s=n(39)("IE_PROTO")
t.exports=function(t,e){var n,a=i(t),u=0,c=[]
for(n in a)n!=s&&r(a,n)&&c.push(n)
for(;e.length>u;)r(a,n=e[u++])&&(~o(c,n)||c.push(n))
return c}},function(t,e,n){var r=n(37),i=n(38),o=n(83)
t.exports=function(t){return function(e,n,s){var a,u=r(e),c=i(u.length),f=o(s,c)
if(t&&n!=n){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0
return!t&&-1}}},function(t,e,n){var r=n(33),i=Math.max,o=Math.min
t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(19),i=n(21),o=n(39)("IE_PROTO"),s=Object.prototype
t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict"
var r=n(86),i=n(87),o=n(15),s=n(37)
t.exports=n(46)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++
return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict"
var r,i,o,s,a=n(35),u=n(2),c=n(13),f=n(53),l=n(4),h=n(14),p=n(17),v=n(89),d=n(90),y=n(56),g=n(57).set,_=n(92)(),b=n(42),m=n(58),w=n(93),E=n(59),x=u.TypeError,k=u.process,T=k&&k.versions,S=T&&T.v8||"",A=u.Promise,P="process"==f(k),O=function(){},C=i=b.f,I=!!function(){try{var t=A.resolve(1),e=(t.constructor={})[n(3)("species")]=function(t){t(O,O)}
return(P||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==S.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e
return!(!h(t)||"function"!=typeof(e=t.then))&&e},L=function(t,e){if(!t._n){t._n=!0
var n=t._c
_(function(){for(var r=t._v,i=1==t._s,o=0,s=function(e){var n,o,s,a=i?e.ok:e.fail,u=e.resolve,c=e.reject,f=e.domain
try{a?(i||(2==t._h&&B(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),s=!0)),n===e.promise?c(x("Promise-chain cycle")):(o=R(n))?o.call(n,u,c):u(n)):c(r)}catch(t){f&&!s&&f.exit(),c(t)}};n.length>o;)s(n[o++])
t._c=[],t._n=!1,e&&!t._h&&U(t)})}},U=function(t){g.call(u,function(){var e,n,r,i=t._v,o=M(t)
if(o&&(e=m(function(){P?k.emit("unhandledRejection",i,t):(n=u.onunhandledrejection)?n({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=P||M(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},B=function(t){g.call(u,function(){var e
P?k.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},N=function(t){var e=this
e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),L(e,!0))},K=function(t){var e,n=this
if(!n._d){n._d=!0,n=n._w||n
try{if(n===t)throw x("Promise can't be resolved itself");(e=R(t))?_(function(){var r={_w:n,_d:!1}
try{e.call(t,c(K,r,1),c(N,r,1))}catch(t){N.call(r,t)}}):(n._v=t,n._s=1,L(n,!1))}catch(t){N.call({_w:n,_d:!1},t)}}}
I||(A=function(t){v(this,A,"Promise","_h"),p(t),r.call(this)
try{t(c(K,this,1),c(N,this,1))}catch(t){N.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(94)(A.prototype,{then:function(t,e){var n=C(y(this,A))
return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&L(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r
this.promise=t,this.resolve=c(K,t,1),this.reject=c(N,t,1)},b.f=C=function(t){return t===A||t===s?new o(t):i(t)}),l(l.G+l.W+l.F*!I,{Promise:A}),n(40)(A,"Promise"),n(95)("Promise"),s=n(1).Promise,l(l.S+l.F*!I,"Promise",{reject:function(t){var e=C(this)
return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(a||!I),"Promise",{resolve:function(t){return E(a&&this===s?A:this,t)}}),l(l.S+l.F*!(I&&n(60)(function(t){A.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=m(function(){var n=[],o=0,s=1
d(t,!1,function(t){var a=o++,u=!1
n.push(void 0),s++,e.resolve(t).then(function(t){u||(u=!0,n[a]=t,--s||r(n))},i)}),--s||r(n)})
return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=m(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})})
return i.e&&r(i.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")
return t}},function(t,e,n){var r=n(13),i=n(54),o=n(55),s=n(5),a=n(38),u=n(41),c={},f={};(e=t.exports=function(t,e,n,l,h){var p,v,d,y,g=h?function(){return t}:u(t),_=r(n,l,e?2:1),b=0
if("function"!=typeof g)throw TypeError(t+" is not iterable!")
if(o(g)){for(p=a(t.length);p>b;b++)if((y=e?_(s(v=t[b])[0],v[1]):_(t[b]))===c||y===f)return y}else for(d=g.call(t);!(v=d.next()).done;)if((y=i(d,_,v.value,e))===c||y===f)return y}).BREAK=c,e.RETURN=f},function(t,e){t.exports=function(t,e,n){var r=void 0===n
switch(e.length){case 0:return r?t():t.call(n)
case 1:return r?t(e[0]):t.call(n,e[0])
case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1])
case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2])
case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(2),i=n(57).set,o=r.MutationObserver||r.WebKitMutationObserver,s=r.process,a=r.Promise,u="process"==n(20)(s)
t.exports=function(){var t,e,n,c=function(){var r,i
for(u&&(r=s.domain)&&r.exit();t;){i=t.fn,t=t.next
try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()}
if(u)n=function(){s.nextTick(c)}
else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0)
n=function(){f.then(c)}}else n=function(){i.call(r,c)}
else{var l=!0,h=document.createTextNode("")
new o(c).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0}
e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){var r=n(2).navigator
t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(7)
t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i])
return t}},function(t,e,n){"use strict"
var r=n(2),i=n(1),o=n(8),s=n(9),a=n(3)("species")
t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t]
s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict"
var r=n(4),i=n(1),o=n(2),s=n(56),a=n(59)
r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),n="function"==typeof t
return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict"
var r=n(4),i=n(42),o=n(58)
r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t)
return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict"
var r=function(t,e){return e||(e={}),t.split("").forEach(function(t,n){t in e||(e[t]=n)}),e},i={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}}
i.charmap=r(i.alphabet,i.charmap)
var o={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}}
o.charmap=r(o.alphabet,o.charmap)
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
default:throw new Error("invalid type")}t.alphabet?this.alphabet=t.alphabet:t.lc&&(this.alphabet=this.alphabet.toLowerCase())}}s.charmap=r(s.alphabet,s.charmap),a.prototype.charmap=i.charmap,a.prototype.write=function(t){var e=this.charmap,n=this.buf,r=this.shift,i=this.carry
return t.toUpperCase().split("").forEach(function(t){if("="!=t){var o=255&e[t];(r-=5)>0?i|=o<<r:r<0?(n.push(i|o>>-r),i=o<<(r+=8)&255):(n.push(i|o),r=8,i=0)}}),this.shift=r,this.carry=i,this},a.prototype.finalize=function(t){return t&&this.write(t),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},u.prototype.alphabet=i.alphabet,u.prototype.write=function(t){var e,n,r,i=this.shift,o=this.carry
for(r=0;r<t.length;r++)e=o|(n=t[r])>>i,this.buf+=this.alphabet[31&e],i>5&&(e=n>>(i-=5),this.buf+=this.alphabet[31&e]),o=n<<(i=5-i),i=8-i
return this.shift=i,this.carry=o,this},u.prototype.finalize=function(t){return t&&this.write(t),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},e.encode=function(t,e){return new u(e).finalize(t)},e.decode=function(t,e){return new a(e).finalize(t)},e.Decoder=a,e.Encoder=u,e.charmap=r,e.crockford=o,e.rfc4648=i,e.base32hex=s},function(t,e,n){!function(t){"use strict"
var e=function(t){var e,n=new Float64Array(16)
if(t)for(e=0;e<t.length;e++)n[e]=t[e]
return n},r=function(){throw new Error("no PRNG")},i=new Uint8Array(16),o=new Uint8Array(32)
o[0]=9
var s=e(),a=e([1]),u=e([56129,1]),c=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),f=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),l=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),h=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function v(t,e,n,r){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n,t[e+4]=r>>24&255,t[e+5]=r>>16&255,t[e+6]=r>>8&255,t[e+7]=255&r}function d(t,e,n,r,i){var o,s=0
for(o=0;o<i;o++)s|=t[e+o]^n[r+o]
return(1&s-1>>>8)-1}function y(t,e,n,r){return d(t,e,n,r,16)}function g(t,e,n,r){return d(t,e,n,r,32)}function _(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,l=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,y=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,_=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,m=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=o,E=s,x=a,k=u,T=c,S=f,A=l,P=h,O=p,C=v,I=d,R=y,L=g,U=_,M=b,B=m,N=0;N<20;N+=2)w^=(i=(L^=(i=(O^=(i=(T^=(i=w+L|0)<<7|i>>>25)+w|0)<<9|i>>>23)+T|0)<<13|i>>>19)+O|0)<<18|i>>>14,S^=(i=(E^=(i=(U^=(i=(C^=(i=S+E|0)<<7|i>>>25)+S|0)<<9|i>>>23)+C|0)<<13|i>>>19)+U|0)<<18|i>>>14,I^=(i=(A^=(i=(x^=(i=(M^=(i=I+A|0)<<7|i>>>25)+I|0)<<9|i>>>23)+M|0)<<13|i>>>19)+x|0)<<18|i>>>14,B^=(i=(R^=(i=(P^=(i=(k^=(i=B+R|0)<<7|i>>>25)+B|0)<<9|i>>>23)+k|0)<<13|i>>>19)+P|0)<<18|i>>>14,w^=(i=(k^=(i=(x^=(i=(E^=(i=w+k|0)<<7|i>>>25)+w|0)<<9|i>>>23)+E|0)<<13|i>>>19)+x|0)<<18|i>>>14,S^=(i=(T^=(i=(P^=(i=(A^=(i=S+T|0)<<7|i>>>25)+S|0)<<9|i>>>23)+A|0)<<13|i>>>19)+P|0)<<18|i>>>14,I^=(i=(C^=(i=(O^=(i=(R^=(i=I+C|0)<<7|i>>>25)+I|0)<<9|i>>>23)+R|0)<<13|i>>>19)+O|0)<<18|i>>>14,B^=(i=(M^=(i=(U^=(i=(L^=(i=B+M|0)<<7|i>>>25)+B|0)<<9|i>>>23)+L|0)<<13|i>>>19)+U|0)<<18|i>>>14
w=w+o|0,E=E+s|0,x=x+a|0,k=k+u|0,T=T+c|0,S=S+f|0,A=A+l|0,P=P+h|0,O=O+p|0,C=C+v|0,I=I+d|0,R=R+y|0,L=L+g|0,U=U+_|0,M=M+b|0,B=B+m|0,t[0]=w>>>0&255,t[1]=w>>>8&255,t[2]=w>>>16&255,t[3]=w>>>24&255,t[4]=E>>>0&255,t[5]=E>>>8&255,t[6]=E>>>16&255,t[7]=E>>>24&255,t[8]=x>>>0&255,t[9]=x>>>8&255,t[10]=x>>>16&255,t[11]=x>>>24&255,t[12]=k>>>0&255,t[13]=k>>>8&255,t[14]=k>>>16&255,t[15]=k>>>24&255,t[16]=T>>>0&255,t[17]=T>>>8&255,t[18]=T>>>16&255,t[19]=T>>>24&255,t[20]=S>>>0&255,t[21]=S>>>8&255,t[22]=S>>>16&255,t[23]=S>>>24&255,t[24]=A>>>0&255,t[25]=A>>>8&255,t[26]=A>>>16&255,t[27]=A>>>24&255,t[28]=P>>>0&255,t[29]=P>>>8&255,t[30]=P>>>16&255,t[31]=P>>>24&255,t[32]=O>>>0&255,t[33]=O>>>8&255,t[34]=O>>>16&255,t[35]=O>>>24&255,t[36]=C>>>0&255,t[37]=C>>>8&255,t[38]=C>>>16&255,t[39]=C>>>24&255,t[40]=I>>>0&255,t[41]=I>>>8&255,t[42]=I>>>16&255,t[43]=I>>>24&255,t[44]=R>>>0&255,t[45]=R>>>8&255,t[46]=R>>>16&255,t[47]=R>>>24&255,t[48]=L>>>0&255,t[49]=L>>>8&255,t[50]=L>>>16&255,t[51]=L>>>24&255,t[52]=U>>>0&255,t[53]=U>>>8&255,t[54]=U>>>16&255,t[55]=U>>>24&255,t[56]=M>>>0&255,t[57]=M>>>8&255,t[58]=M>>>16&255,t[59]=M>>>24&255,t[60]=B>>>0&255,t[61]=B>>>8&255,t[62]=B>>>16&255,t[63]=B>>>24&255}(t,e,n,r)}function b(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,c=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,l=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,y=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,_=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,m=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=0;w<20;w+=2)o^=(i=(g^=(i=(p^=(i=(c^=(i=o+g|0)<<7|i>>>25)+o|0)<<9|i>>>23)+c|0)<<13|i>>>19)+p|0)<<18|i>>>14,f^=(i=(s^=(i=(_^=(i=(v^=(i=f+s|0)<<7|i>>>25)+f|0)<<9|i>>>23)+v|0)<<13|i>>>19)+_|0)<<18|i>>>14,d^=(i=(l^=(i=(a^=(i=(b^=(i=d+l|0)<<7|i>>>25)+d|0)<<9|i>>>23)+b|0)<<13|i>>>19)+a|0)<<18|i>>>14,m^=(i=(y^=(i=(h^=(i=(u^=(i=m+y|0)<<7|i>>>25)+m|0)<<9|i>>>23)+u|0)<<13|i>>>19)+h|0)<<18|i>>>14,o^=(i=(u^=(i=(a^=(i=(s^=(i=o+u|0)<<7|i>>>25)+o|0)<<9|i>>>23)+s|0)<<13|i>>>19)+a|0)<<18|i>>>14,f^=(i=(c^=(i=(h^=(i=(l^=(i=f+c|0)<<7|i>>>25)+f|0)<<9|i>>>23)+l|0)<<13|i>>>19)+h|0)<<18|i>>>14,d^=(i=(v^=(i=(p^=(i=(y^=(i=d+v|0)<<7|i>>>25)+d|0)<<9|i>>>23)+y|0)<<13|i>>>19)+p|0)<<18|i>>>14,m^=(i=(b^=(i=(_^=(i=(g^=(i=m+b|0)<<7|i>>>25)+m|0)<<9|i>>>23)+g|0)<<13|i>>>19)+_|0)<<18|i>>>14
t[0]=o>>>0&255,t[1]=o>>>8&255,t[2]=o>>>16&255,t[3]=o>>>24&255,t[4]=f>>>0&255,t[5]=f>>>8&255,t[6]=f>>>16&255,t[7]=f>>>24&255,t[8]=d>>>0&255,t[9]=d>>>8&255,t[10]=d>>>16&255,t[11]=d>>>24&255,t[12]=m>>>0&255,t[13]=m>>>8&255,t[14]=m>>>16&255,t[15]=m>>>24&255,t[16]=l>>>0&255,t[17]=l>>>8&255,t[18]=l>>>16&255,t[19]=l>>>24&255,t[20]=h>>>0&255,t[21]=h>>>8&255,t[22]=h>>>16&255,t[23]=h>>>24&255,t[24]=p>>>0&255,t[25]=p>>>8&255,t[26]=p>>>16&255,t[27]=p>>>24&255,t[28]=v>>>0&255,t[29]=v>>>8&255,t[30]=v>>>16&255,t[31]=v>>>24&255}(t,e,n,r)}var m=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function w(t,e,n,r,i,o,s){var a,u,c=new Uint8Array(16),f=new Uint8Array(64)
for(u=0;u<16;u++)c[u]=0
for(u=0;u<8;u++)c[u]=o[u]
for(;i>=64;){for(_(f,c,s,m),u=0;u<64;u++)t[e+u]=n[r+u]^f[u]
for(a=1,u=8;u<16;u++)a=a+(255&c[u])|0,c[u]=255&a,a>>>=8
i-=64,e+=64,r+=64}if(i>0)for(_(f,c,s,m),u=0;u<i;u++)t[e+u]=n[r+u]^f[u]
return 0}function E(t,e,n,r,i){var o,s,a=new Uint8Array(16),u=new Uint8Array(64)
for(s=0;s<16;s++)a[s]=0
for(s=0;s<8;s++)a[s]=r[s]
for(;n>=64;){for(_(u,a,i,m),s=0;s<64;s++)t[e+s]=u[s]
for(o=1,s=8;s<16;s++)o=o+(255&a[s])|0,a[s]=255&o,o>>>=8
n-=64,e+=64}if(n>0)for(_(u,a,i,m),s=0;s<n;s++)t[e+s]=u[s]
return 0}function x(t,e,n,r,i){var o=new Uint8Array(32)
b(o,r,i,m)
for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=r[a+16]
return E(t,e,n,s,o)}function k(t,e,n,r,i,o,s){var a=new Uint8Array(32)
b(a,o,s,m)
for(var u=new Uint8Array(8),c=0;c<8;c++)u[c]=o[c+16]
return w(t,e,n,r,i,u,a)}var T=function(t){var e,n,r,i,o,s,a,u
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,n=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|n<<3),r=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(n>>>10|r<<6),i=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(r>>>7|i<<9),o=255&t[8]|(255&t[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,s=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(o>>>14|s<<2),a=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(s>>>11|a<<5),u=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(a>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8}
function S(t,e,n,r,i,o){var s=new T(o)
return s.update(n,r,i),s.finish(t,e),0}function A(t,e,n,r,i,o){var s=new Uint8Array(16)
return S(s,0,n,r,i,o),y(t,e,s,0)}function P(t,e,n,r,i){var o
if(n<32)return-1
for(k(t,0,e,0,n,r,i),S(t,16,t,32,n-32,t),o=0;o<16;o++)t[o]=0
return 0}function O(t,e,n,r,i){var o,s=new Uint8Array(32)
if(n<32)return-1
if(x(s,0,32,r,i),0!==A(e,16,e,32,n-32,s))return-1
for(k(t,0,e,0,n,r,i),o=0;o<32;o++)t[o]=0
return 0}function C(t,e){var n
for(n=0;n<16;n++)t[n]=0|e[n]}function I(t){var e,n,r=1
for(e=0;e<16;e++)n=t[e]+r+65535,r=Math.floor(n/65536),t[e]=n-65536*r
t[0]+=r-1+37*(r-1)}function R(t,e,n){for(var r,i=~(n-1),o=0;o<16;o++)r=i&(t[o]^e[o]),t[o]^=r,e[o]^=r}function L(t,n){var r,i,o,s=e(),a=e()
for(r=0;r<16;r++)a[r]=n[r]
for(I(a),I(a),I(a),i=0;i<2;i++){for(s[0]=a[0]-65517,r=1;r<15;r++)s[r]=a[r]-65535-(s[r-1]>>16&1),s[r-1]&=65535
s[15]=a[15]-32767-(s[14]>>16&1),o=s[15]>>16&1,s[14]&=65535,R(a,s,1-o)}for(r=0;r<16;r++)t[2*r]=255&a[r],t[2*r+1]=a[r]>>8}function U(t,e){var n=new Uint8Array(32),r=new Uint8Array(32)
return L(n,t),L(r,e),g(n,0,r,0)}function M(t){var e=new Uint8Array(32)
return L(e,t),1&e[0]}function B(t,e){var n
for(n=0;n<16;n++)t[n]=e[2*n]+(e[2*n+1]<<8)
t[15]&=32767}function N(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]+n[r]}function K(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]-n[r]}function j(t,e,n){var r,i,o=0,s=0,a=0,u=0,c=0,f=0,l=0,h=0,p=0,v=0,d=0,y=0,g=0,_=0,b=0,m=0,w=0,E=0,x=0,k=0,T=0,S=0,A=0,P=0,O=0,C=0,I=0,R=0,L=0,U=0,M=0,B=n[0],N=n[1],K=n[2],j=n[3],D=n[4],F=n[5],Y=n[6],z=n[7],G=n[8],H=n[9],q=n[10],W=n[11],V=n[12],X=n[13],J=n[14],$=n[15]
o+=(r=e[0])*B,s+=r*N,a+=r*K,u+=r*j,c+=r*D,f+=r*F,l+=r*Y,h+=r*z,p+=r*G,v+=r*H,d+=r*q,y+=r*W,g+=r*V,_+=r*X,b+=r*J,m+=r*$,s+=(r=e[1])*B,a+=r*N,u+=r*K,c+=r*j,f+=r*D,l+=r*F,h+=r*Y,p+=r*z,v+=r*G,d+=r*H,y+=r*q,g+=r*W,_+=r*V,b+=r*X,m+=r*J,w+=r*$,a+=(r=e[2])*B,u+=r*N,c+=r*K,f+=r*j,l+=r*D,h+=r*F,p+=r*Y,v+=r*z,d+=r*G,y+=r*H,g+=r*q,_+=r*W,b+=r*V,m+=r*X,w+=r*J,E+=r*$,u+=(r=e[3])*B,c+=r*N,f+=r*K,l+=r*j,h+=r*D,p+=r*F,v+=r*Y,d+=r*z,y+=r*G,g+=r*H,_+=r*q,b+=r*W,m+=r*V,w+=r*X,E+=r*J,x+=r*$,c+=(r=e[4])*B,f+=r*N,l+=r*K,h+=r*j,p+=r*D,v+=r*F,d+=r*Y,y+=r*z,g+=r*G,_+=r*H,b+=r*q,m+=r*W,w+=r*V,E+=r*X,x+=r*J,k+=r*$,f+=(r=e[5])*B,l+=r*N,h+=r*K,p+=r*j,v+=r*D,d+=r*F,y+=r*Y,g+=r*z,_+=r*G,b+=r*H,m+=r*q,w+=r*W,E+=r*V,x+=r*X,k+=r*J,T+=r*$,l+=(r=e[6])*B,h+=r*N,p+=r*K,v+=r*j,d+=r*D,y+=r*F,g+=r*Y,_+=r*z,b+=r*G,m+=r*H,w+=r*q,E+=r*W,x+=r*V,k+=r*X,T+=r*J,S+=r*$,h+=(r=e[7])*B,p+=r*N,v+=r*K,d+=r*j,y+=r*D,g+=r*F,_+=r*Y,b+=r*z,m+=r*G,w+=r*H,E+=r*q,x+=r*W,k+=r*V,T+=r*X,S+=r*J,A+=r*$,p+=(r=e[8])*B,v+=r*N,d+=r*K,y+=r*j,g+=r*D,_+=r*F,b+=r*Y,m+=r*z,w+=r*G,E+=r*H,x+=r*q,k+=r*W,T+=r*V,S+=r*X,A+=r*J,P+=r*$,v+=(r=e[9])*B,d+=r*N,y+=r*K,g+=r*j,_+=r*D,b+=r*F,m+=r*Y,w+=r*z,E+=r*G,x+=r*H,k+=r*q,T+=r*W,S+=r*V,A+=r*X,P+=r*J,O+=r*$,d+=(r=e[10])*B,y+=r*N,g+=r*K,_+=r*j,b+=r*D,m+=r*F,w+=r*Y,E+=r*z,x+=r*G,k+=r*H,T+=r*q,S+=r*W,A+=r*V,P+=r*X,O+=r*J,C+=r*$,y+=(r=e[11])*B,g+=r*N,_+=r*K,b+=r*j,m+=r*D,w+=r*F,E+=r*Y,x+=r*z,k+=r*G,T+=r*H,S+=r*q,A+=r*W,P+=r*V,O+=r*X,C+=r*J,I+=r*$,g+=(r=e[12])*B,_+=r*N,b+=r*K,m+=r*j,w+=r*D,E+=r*F,x+=r*Y,k+=r*z,T+=r*G,S+=r*H,A+=r*q,P+=r*W,O+=r*V,C+=r*X,I+=r*J,R+=r*$,_+=(r=e[13])*B,b+=r*N,m+=r*K,w+=r*j,E+=r*D,x+=r*F,k+=r*Y,T+=r*z,S+=r*G,A+=r*H,P+=r*q,O+=r*W,C+=r*V,I+=r*X,R+=r*J,L+=r*$,b+=(r=e[14])*B,m+=r*N,w+=r*K,E+=r*j,x+=r*D,k+=r*F,T+=r*Y,S+=r*z,A+=r*G,P+=r*H,O+=r*q,C+=r*W,I+=r*V,R+=r*X,L+=r*J,U+=r*$,m+=(r=e[15])*B,s+=38*(E+=r*K),a+=38*(x+=r*j),u+=38*(k+=r*D),c+=38*(T+=r*F),f+=38*(S+=r*Y),l+=38*(A+=r*z),h+=38*(P+=r*G),p+=38*(O+=r*H),v+=38*(C+=r*q),d+=38*(I+=r*W),y+=38*(R+=r*V),g+=38*(L+=r*X),_+=38*(U+=r*J),b+=38*(M+=r*$),o=(r=(o+=38*(w+=r*N))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),o=(r=(o+=i-1+37*(i-1))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),o+=i-1+37*(i-1),t[0]=o,t[1]=s,t[2]=a,t[3]=u,t[4]=c,t[5]=f,t[6]=l,t[7]=h,t[8]=p,t[9]=v,t[10]=d,t[11]=y,t[12]=g,t[13]=_,t[14]=b,t[15]=m}function D(t,e){j(t,e,e)}function F(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=253;r>=0;r--)D(i,i),2!==r&&4!==r&&j(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}function Y(t,n,r){var i,o,s=new Uint8Array(32),a=new Float64Array(80),c=e(),f=e(),l=e(),h=e(),p=e(),v=e()
for(o=0;o<31;o++)s[o]=n[o]
for(s[31]=127&n[31]|64,s[0]&=248,B(a,r),o=0;o<16;o++)f[o]=a[o],h[o]=c[o]=l[o]=0
for(c[0]=h[0]=1,o=254;o>=0;--o)R(c,f,i=s[o>>>3]>>>(7&o)&1),R(l,h,i),N(p,c,l),K(c,c,l),N(l,f,h),K(f,f,h),D(h,p),D(v,c),j(c,l,c),j(l,f,p),N(p,c,l),K(c,c,l),D(f,c),K(l,h,v),j(c,l,u),N(c,c,h),j(l,l,c),j(c,h,v),j(h,f,a),D(f,p),R(c,f,i),R(l,h,i)
for(o=0;o<16;o++)a[o+16]=c[o],a[o+32]=l[o],a[o+48]=f[o],a[o+64]=h[o]
var d=a.subarray(32),y=a.subarray(16)
return F(d,d),j(y,y,d),L(t,y),0}function z(t,e){return Y(t,e,o)}function G(t,e){return r(e,32),z(t,e)}function H(t,e,n){var r=new Uint8Array(32)
return Y(r,n,e),b(t,i,r,m)}T.prototype.blocks=function(t,e,n){for(var r,i,o,s,a,u,c,f,l,h,p,v,d,y,g,_,b,m,w,E=this.fin?0:2048,x=this.h[0],k=this.h[1],T=this.h[2],S=this.h[3],A=this.h[4],P=this.h[5],O=this.h[6],C=this.h[7],I=this.h[8],R=this.h[9],L=this.r[0],U=this.r[1],M=this.r[2],B=this.r[3],N=this.r[4],K=this.r[5],j=this.r[6],D=this.r[7],F=this.r[8],Y=this.r[9];n>=16;)x+=8191&(r=255&t[e+0]|(255&t[e+1])<<8),k+=8191&(r>>>13|(i=255&t[e+2]|(255&t[e+3])<<8)<<3),T+=8191&(i>>>10|(o=255&t[e+4]|(255&t[e+5])<<8)<<6),S+=8191&(o>>>7|(s=255&t[e+6]|(255&t[e+7])<<8)<<9),A+=8191&(s>>>4|(a=255&t[e+8]|(255&t[e+9])<<8)<<12),P+=a>>>1&8191,O+=8191&(a>>>14|(u=255&t[e+10]|(255&t[e+11])<<8)<<2),C+=8191&(u>>>11|(c=255&t[e+12]|(255&t[e+13])<<8)<<5),f=255&t[e+14]|(255&t[e+15])<<8,h=l=0,h+=x*L,h+=k*(5*Y),h+=T*(5*F),h+=S*(5*D),l=(h+=A*(5*j))>>>13,h&=8191,h+=P*(5*K),h+=O*(5*N),h+=C*(5*B),h+=(I+=8191&(c>>>8|f<<8))*(5*M),p=l+=(h+=(R+=f>>>5|E)*(5*U))>>>13,p+=x*U,p+=k*L,p+=T*(5*Y),p+=S*(5*F),l=(p+=A*(5*D))>>>13,p&=8191,p+=P*(5*j),p+=O*(5*K),p+=C*(5*N),p+=I*(5*B),l+=(p+=R*(5*M))>>>13,p&=8191,v=l,v+=x*M,v+=k*U,v+=T*L,v+=S*(5*Y),l=(v+=A*(5*F))>>>13,v&=8191,v+=P*(5*D),v+=O*(5*j),v+=C*(5*K),v+=I*(5*N),d=l+=(v+=R*(5*B))>>>13,d+=x*B,d+=k*M,d+=T*U,d+=S*L,l=(d+=A*(5*Y))>>>13,d&=8191,d+=P*(5*F),d+=O*(5*D),d+=C*(5*j),d+=I*(5*K),y=l+=(d+=R*(5*N))>>>13,y+=x*N,y+=k*B,y+=T*M,y+=S*U,l=(y+=A*L)>>>13,y&=8191,y+=P*(5*Y),y+=O*(5*F),y+=C*(5*D),y+=I*(5*j),g=l+=(y+=R*(5*K))>>>13,g+=x*K,g+=k*N,g+=T*B,g+=S*M,l=(g+=A*U)>>>13,g&=8191,g+=P*L,g+=O*(5*Y),g+=C*(5*F),g+=I*(5*D),_=l+=(g+=R*(5*j))>>>13,_+=x*j,_+=k*K,_+=T*N,_+=S*B,l=(_+=A*M)>>>13,_&=8191,_+=P*U,_+=O*L,_+=C*(5*Y),_+=I*(5*F),b=l+=(_+=R*(5*D))>>>13,b+=x*D,b+=k*j,b+=T*K,b+=S*N,l=(b+=A*B)>>>13,b&=8191,b+=P*M,b+=O*U,b+=C*L,b+=I*(5*Y),m=l+=(b+=R*(5*F))>>>13,m+=x*F,m+=k*D,m+=T*j,m+=S*K,l=(m+=A*N)>>>13,m&=8191,m+=P*B,m+=O*M,m+=C*U,m+=I*L,w=l+=(m+=R*(5*Y))>>>13,w+=x*Y,w+=k*F,w+=T*D,w+=S*j,l=(w+=A*K)>>>13,w&=8191,w+=P*N,w+=O*B,w+=C*M,w+=I*U,x=h=8191&(l=(l=((l+=(w+=R*L)>>>13)<<2)+l|0)+(h&=8191)|0),k=p+=l>>>=13,T=v&=8191,S=d&=8191,A=y&=8191,P=g&=8191,O=_&=8191,C=b&=8191,I=m&=8191,R=w&=8191,e+=16,n-=16
this.h[0]=x,this.h[1]=k,this.h[2]=T,this.h[3]=S,this.h[4]=A,this.h[5]=P,this.h[6]=O,this.h[7]=C,this.h[8]=I,this.h[9]=R},T.prototype.finish=function(t,e){var n,r,i,o,s=new Uint16Array(10)
if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191
for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,s[0]=this.h[0]+5,n=s[0]>>>13,s[0]&=8191,o=1;o<10;o++)s[o]=this.h[o]+n,n=s[o]>>>13,s[o]&=8191
for(s[9]-=8192,r=(1^n)-1,o=0;o<10;o++)s[o]&=r
for(r=~r,o=0;o<10;o++)this.h[o]=this.h[o]&r|s[o]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i
t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},T.prototype.update=function(t,e,n){var r,i
if(this.leftover){for((i=16-this.leftover)>n&&(i=n),r=0;r<i;r++)this.buffer[this.leftover+r]=t[e+r]
if(n-=i,e+=i,this.leftover+=i,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(t,e,i),e+=i,n-=i),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=t[e+r]
this.leftover+=n}}
var q=P,W=O
var V=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function X(t,e,n,r){for(var i,o,s,a,u,c,f,l,h,p,v,d,y,g,_,b,m,w,E,x,k,T,S,A,P,O,C=new Int32Array(16),I=new Int32Array(16),R=t[0],L=t[1],U=t[2],M=t[3],B=t[4],N=t[5],K=t[6],j=t[7],D=e[0],F=e[1],Y=e[2],z=e[3],G=e[4],H=e[5],q=e[6],W=e[7],X=0;r>=128;){for(E=0;E<16;E++)x=8*E+X,C[E]=n[x+0]<<24|n[x+1]<<16|n[x+2]<<8|n[x+3],I[E]=n[x+4]<<24|n[x+5]<<16|n[x+6]<<8|n[x+7]
for(E=0;E<80;E++)if(i=R,o=L,s=U,a=M,u=B,c=N,f=K,l=j,h=D,p=F,v=Y,d=z,y=G,g=H,_=q,b=W,S=65535&(T=W),A=T>>>16,P=65535&(k=j),O=k>>>16,S+=65535&(T=(G>>>14|B<<18)^(G>>>18|B<<14)^(B>>>9|G<<23)),A+=T>>>16,P+=65535&(k=(B>>>14|G<<18)^(B>>>18|G<<14)^(G>>>9|B<<23)),O+=k>>>16,S+=65535&(T=G&H^~G&q),A+=T>>>16,P+=65535&(k=B&N^~B&K),O+=k>>>16,k=V[2*E],S+=65535&(T=V[2*E+1]),A+=T>>>16,P+=65535&k,O+=k>>>16,k=C[E%16],A+=(T=I[E%16])>>>16,P+=65535&k,O+=k>>>16,P+=(A+=(S+=65535&T)>>>16)>>>16,S=65535&(T=w=65535&S|A<<16),A=T>>>16,P=65535&(k=m=65535&P|(O+=P>>>16)<<16),O=k>>>16,S+=65535&(T=(D>>>28|R<<4)^(R>>>2|D<<30)^(R>>>7|D<<25)),A+=T>>>16,P+=65535&(k=(R>>>28|D<<4)^(D>>>2|R<<30)^(D>>>7|R<<25)),O+=k>>>16,A+=(T=D&F^D&Y^F&Y)>>>16,P+=65535&(k=R&L^R&U^L&U),O+=k>>>16,l=65535&(P+=(A+=(S+=65535&T)>>>16)>>>16)|(O+=P>>>16)<<16,b=65535&S|A<<16,S=65535&(T=d),A=T>>>16,P=65535&(k=a),O=k>>>16,A+=(T=w)>>>16,P+=65535&(k=m),O+=k>>>16,L=i,U=o,M=s,B=a=65535&(P+=(A+=(S+=65535&T)>>>16)>>>16)|(O+=P>>>16)<<16,N=u,K=c,j=f,R=l,F=h,Y=p,z=v,G=d=65535&S|A<<16,H=y,q=g,W=_,D=b,E%16==15)for(x=0;x<16;x++)k=C[x],S=65535&(T=I[x]),A=T>>>16,P=65535&k,O=k>>>16,k=C[(x+9)%16],S+=65535&(T=I[(x+9)%16]),A+=T>>>16,P+=65535&k,O+=k>>>16,m=C[(x+1)%16],S+=65535&(T=((w=I[(x+1)%16])>>>1|m<<31)^(w>>>8|m<<24)^(w>>>7|m<<25)),A+=T>>>16,P+=65535&(k=(m>>>1|w<<31)^(m>>>8|w<<24)^m>>>7),O+=k>>>16,m=C[(x+14)%16],A+=(T=((w=I[(x+14)%16])>>>19|m<<13)^(m>>>29|w<<3)^(w>>>6|m<<26))>>>16,P+=65535&(k=(m>>>19|w<<13)^(w>>>29|m<<3)^m>>>6),O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,C[x]=65535&P|O<<16,I[x]=65535&S|A<<16
S=65535&(T=D),A=T>>>16,P=65535&(k=R),O=k>>>16,k=t[0],A+=(T=e[0])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[0]=R=65535&P|O<<16,e[0]=D=65535&S|A<<16,S=65535&(T=F),A=T>>>16,P=65535&(k=L),O=k>>>16,k=t[1],A+=(T=e[1])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[1]=L=65535&P|O<<16,e[1]=F=65535&S|A<<16,S=65535&(T=Y),A=T>>>16,P=65535&(k=U),O=k>>>16,k=t[2],A+=(T=e[2])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[2]=U=65535&P|O<<16,e[2]=Y=65535&S|A<<16,S=65535&(T=z),A=T>>>16,P=65535&(k=M),O=k>>>16,k=t[3],A+=(T=e[3])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[3]=M=65535&P|O<<16,e[3]=z=65535&S|A<<16,S=65535&(T=G),A=T>>>16,P=65535&(k=B),O=k>>>16,k=t[4],A+=(T=e[4])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[4]=B=65535&P|O<<16,e[4]=G=65535&S|A<<16,S=65535&(T=H),A=T>>>16,P=65535&(k=N),O=k>>>16,k=t[5],A+=(T=e[5])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[5]=N=65535&P|O<<16,e[5]=H=65535&S|A<<16,S=65535&(T=q),A=T>>>16,P=65535&(k=K),O=k>>>16,k=t[6],A+=(T=e[6])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[6]=K=65535&P|O<<16,e[6]=q=65535&S|A<<16,S=65535&(T=W),A=T>>>16,P=65535&(k=j),O=k>>>16,k=t[7],A+=(T=e[7])>>>16,P+=65535&k,O+=k>>>16,O+=(P+=(A+=(S+=65535&T)>>>16)>>>16)>>>16,t[7]=j=65535&P|O<<16,e[7]=W=65535&S|A<<16,X+=128,r-=128}return r}function J(t,e,n){var r,i=new Int32Array(8),o=new Int32Array(8),s=new Uint8Array(256),a=n
for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,o[0]=4089235720,o[1]=2227873595,o[2]=4271175723,o[3]=1595750129,o[4]=2917565137,o[5]=725511199,o[6]=4215389547,o[7]=327033209,X(i,o,e,n),n%=128,r=0;r<n;r++)s[r]=e[a-n+r]
for(s[n]=128,s[(n=256-128*(n<112?1:0))-9]=0,v(s,n-8,a/536870912|0,a<<3),X(i,o,s,n),r=0;r<8;r++)v(t,8*r,i[r],o[r])
return 0}function $(t,n){var r=e(),i=e(),o=e(),s=e(),a=e(),u=e(),c=e(),l=e(),h=e()
K(r,t[1],t[0]),K(h,n[1],n[0]),j(r,r,h),N(i,t[0],t[1]),N(h,n[0],n[1]),j(i,i,h),j(o,t[3],n[3]),j(o,o,f),j(s,t[2],n[2]),N(s,s,s),K(a,i,r),K(u,s,o),N(c,s,o),N(l,i,r),j(t[0],a,u),j(t[1],l,c),j(t[2],c,u),j(t[3],a,l)}function Q(t,e,n){var r
for(r=0;r<4;r++)R(t[r],e[r],n)}function Z(t,n){var r=e(),i=e(),o=e()
F(o,n[2]),j(r,n[0],o),j(i,n[1],o),L(t,i),t[31]^=M(r)<<7}function tt(t,e,n){var r,i
for(C(t[0],s),C(t[1],a),C(t[2],a),C(t[3],s),i=255;i>=0;--i)Q(t,e,r=n[i/8|0]>>(7&i)&1),$(e,t),$(t,t),Q(t,e,r)}function et(t,n){var r=[e(),e(),e(),e()]
C(r[0],l),C(r[1],h),C(r[2],a),j(r[3],l,h),tt(t,r,n)}function nt(t,n,i){var o,s=new Uint8Array(64),a=[e(),e(),e(),e()]
for(i||r(n,32),J(s,n,32),s[0]&=248,s[31]&=127,s[31]|=64,et(a,s),Z(t,a),o=0;o<32;o++)n[o+32]=t[o]
return 0}var rt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function it(t,e){var n,r,i,o
for(r=63;r>=32;--r){for(n=0,i=r-32,o=r-12;i<o;++i)e[i]+=n-16*e[r]*rt[i-(r-32)],n=e[i]+128>>8,e[i]-=256*n
e[i]+=n,e[r]=0}for(n=0,i=0;i<32;i++)e[i]+=n-(e[31]>>4)*rt[i],n=e[i]>>8,e[i]&=255
for(i=0;i<32;i++)e[i]-=n*rt[i]
for(r=0;r<32;r++)e[r+1]+=e[r]>>8,t[r]=255&e[r]}function ot(t){var e,n=new Float64Array(64)
for(e=0;e<64;e++)n[e]=t[e]
for(e=0;e<64;e++)t[e]=0
it(t,n)}function st(t,n,r,i){var o,s,a=new Uint8Array(64),u=new Uint8Array(64),c=new Uint8Array(64),f=new Float64Array(64),l=[e(),e(),e(),e()]
J(a,i,32),a[0]&=248,a[31]&=127,a[31]|=64
var h=r+64
for(o=0;o<r;o++)t[64+o]=n[o]
for(o=0;o<32;o++)t[32+o]=a[32+o]
for(J(c,t.subarray(32),r+32),ot(c),et(l,c),Z(t,l),o=32;o<64;o++)t[o]=i[o]
for(J(u,t,r+64),ot(u),o=0;o<64;o++)f[o]=0
for(o=0;o<32;o++)f[o]=c[o]
for(o=0;o<32;o++)for(s=0;s<32;s++)f[o+s]+=u[o]*a[s]
return it(t.subarray(32),f),h}function at(t,n){var r=e(),i=e(),o=e(),u=e(),f=e(),l=e(),h=e()
return C(t[2],a),B(t[1],n),D(o,t[1]),j(u,o,c),K(o,o,t[2]),N(u,t[2],u),D(f,u),D(l,f),j(h,l,f),j(r,h,o),j(r,r,u),function(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=250;r>=0;r--)D(i,i),1!==r&&j(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}(r,r),j(r,r,o),j(r,r,u),j(r,r,u),j(t[0],r,u),D(i,t[0]),j(i,i,u),U(i,o)&&j(t[0],t[0],p),D(i,t[0]),j(i,i,u),U(i,o)?-1:(M(t[0])===n[31]>>7&&K(t[0],s,t[0]),j(t[3],t[0],t[1]),0)}function ut(t,n,r,i){var o,s=new Uint8Array(32),a=new Uint8Array(64),u=[e(),e(),e(),e()],c=[e(),e(),e(),e()]
if(-1,r<64)return-1
if(at(c,i))return-1
for(o=0;o<r;o++)t[o]=n[o]
for(o=0;o<32;o++)t[o+32]=i[o]
if(J(a,t,r),ot(a),tt(u,c,a),et(c,n.subarray(32)),$(u,c),Z(s,u),r-=64,g(n,0,s,0)){for(o=0;o<r;o++)t[o]=0
return-1}for(o=0;o<r;o++)t[o]=n[o+64]
return r}var ct=32,ft=24,lt=32,ht=32,pt=ft
function vt(t,e){if(t.length!==ct)throw new Error("bad key size")
if(e.length!==ft)throw new Error("bad nonce size")}function dt(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function yt(t){for(var e=0;e<t.length;e++)t[e]=0}t.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:k,crypto_stream:x,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:E,crypto_onetimeauth:S,crypto_onetimeauth_verify:A,crypto_verify_16:y,crypto_verify_32:g,crypto_secretbox:P,crypto_secretbox_open:O,crypto_scalarmult:Y,crypto_scalarmult_base:z,crypto_box_beforenm:H,crypto_box_afternm:q,crypto_box:function(t,e,n,r,i,o){var s=new Uint8Array(32)
return H(s,i,o),q(t,e,n,r,s)},crypto_box_open:function(t,e,n,r,i,o){var s=new Uint8Array(32)
return H(s,i,o),W(t,e,n,r,s)},crypto_box_keypair:G,crypto_hash:J,crypto_sign:st,crypto_sign_keypair:nt,crypto_sign_open:ut,crypto_secretbox_KEYBYTES:ct,crypto_secretbox_NONCEBYTES:ft,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:lt,crypto_box_SECRETKEYBYTES:ht,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:pt,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},t.randomBytes=function(t){var e=new Uint8Array(t)
return r(e,t),e},t.secretbox=function(t,e,n){dt(t,e,n),vt(n,e)
for(var r=new Uint8Array(32+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+32]=t[o]
return P(i,r,r.length,e,n),i.subarray(16)},t.secretbox.open=function(t,e,n){dt(t,e,n),vt(n,e)
for(var r=new Uint8Array(16+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+16]=t[o]
return r.length<32?null:0!==O(i,r,r.length,e,n)?null:i.subarray(32)},t.secretbox.keyLength=ct,t.secretbox.nonceLength=ft,t.secretbox.overheadLength=16,t.scalarMult=function(t,e){if(dt(t,e),32!==t.length)throw new Error("bad n size")
if(32!==e.length)throw new Error("bad p size")
var n=new Uint8Array(32)
return Y(n,t,e),n},t.scalarMult.base=function(t){if(dt(t),32!==t.length)throw new Error("bad n size")
var e=new Uint8Array(32)
return z(e,t),e},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox(e,n,o)},t.box.before=function(t,e){dt(t,e),function(t,e){if(t.length!==lt)throw new Error("bad public key size")
if(e.length!==ht)throw new Error("bad secret key size")}(t,e)
var n=new Uint8Array(32)
return H(n,t,e),n},t.box.after=t.secretbox,t.box.open=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox.open(e,n,o)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(lt),e=new Uint8Array(ht)
return G(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(dt(t),t.length!==ht)throw new Error("bad secret key size")
var e=new Uint8Array(lt)
return z(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=lt,t.box.secretKeyLength=ht,t.box.sharedKeyLength=32,t.box.nonceLength=pt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(dt(t,e),64!==e.length)throw new Error("bad secret key size")
var n=new Uint8Array(64+t.length)
return st(n,t,t.length,e),n},t.sign.open=function(t,e){if(dt(t,e),32!==e.length)throw new Error("bad public key size")
var n=new Uint8Array(t.length),r=ut(n,t,t.length,e)
if(r<0)return null
for(var i=new Uint8Array(r),o=0;o<i.length;o++)i[o]=n[o]
return i},t.sign.detached=function(e,n){for(var r=t.sign(e,n),i=new Uint8Array(64),o=0;o<i.length;o++)i[o]=r[o]
return i},t.sign.detached.verify=function(t,e,n){if(dt(t,e,n),64!==e.length)throw new Error("bad signature size")
if(32!==n.length)throw new Error("bad public key size")
var r,i=new Uint8Array(64+t.length),o=new Uint8Array(64+t.length)
for(r=0;r<64;r++)i[r]=e[r]
for(r=0;r<t.length;r++)i[r+64]=t[r]
return ut(o,i,i.length,n)>=0},t.sign.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(64)
return nt(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(dt(t),64!==t.length)throw new Error("bad secret key size")
for(var e=new Uint8Array(32),n=0;n<e.length;n++)e[n]=t[32+n]
return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(dt(t),32!==t.length)throw new Error("bad seed size")
for(var e=new Uint8Array(32),n=new Uint8Array(64),r=0;r<32;r++)n[r]=t[r]
return nt(e,n,!0),{publicKey:e,secretKey:n}},t.sign.publicKeyLength=32,t.sign.secretKeyLength=64,t.sign.seedLength=32,t.sign.signatureLength=64,t.hash=function(t){dt(t)
var e=new Uint8Array(64)
return J(e,t,t.length),e},t.hash.hashLength=64,t.verify=function(t,e){return dt(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===d(t,0,e,0,t.length))},t.setPRNG=function(t){r=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null
if(e&&e.getRandomValues){t.setPRNG(function(t,n){var r,i=new Uint8Array(n)
for(r=0;r<n;r+=65536)e.getRandomValues(i.subarray(r,r+Math.min(n-r,65536)))
for(r=0;r<n;r++)t[r]=i[r]
yt(i)})}else(e=n(100))&&e.randomBytes&&t.setPRNG(function(t,n){var r,i=e.randomBytes(n)
for(r=0;r<n;r++)t[r]=i[r]
yt(i)})}()}(t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){},function(t,e,n){(e=t.exports=function(t){t=t.toLowerCase()
var n=e[t]
if(!n)throw new Error(t+" is not supported (we accept pull requests)")
return new n}).sha=n(102),e.sha1=n(103),e.sha224=n(104),e.sha256=n(61),e.sha384=n(105),e.sha512=n(62)},function(t,e,n){var r=n(10),i=n(11),o=n(6).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,i.call(this,64,56)}function c(t){return t<<5|t>>>27}function f(t){return t<<30|t>>>2}function l(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0;u<16;++u)e[u]=t.readInt32BE(4*u)
for(;u<80;++u)e[u]=e[u-3]^e[u-8]^e[u-14]^e[u-16]
for(var h=0;h<80;++h){var p=~~(h/20),v=c(n)+l(p,r,i,o)+a+e[h]+s[p]|0
a=o,o=i,i=f(r),r=n,n=v}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,n){var r=n(10),i=n(11),o=n(6).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,i.call(this,64,56)}function c(t){return t<<1|t>>>31}function f(t){return t<<5|t>>>27}function l(t){return t<<30|t>>>2}function h(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0;u<16;++u)e[u]=t.readInt32BE(4*u)
for(;u<80;++u)e[u]=c(e[u-3]^e[u-8]^e[u-14]^e[u-16])
for(var p=0;p<80;++p){var v=~~(p/20),d=f(n)+h(v,r,i,o)+a+e[p]+s[v]|0
a=o,o=i,i=l(r),r=n,n=d}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,n){var r=n(10),i=n(61),o=n(11),s=n(6).Buffer,a=new Array(64)
function u(){this.init(),this._w=a,o.call(this,64,56)}r(u,i),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=u},function(t,e,n){var r=n(10),i=n(62),o=n(11),s=n(6).Buffer,a=new Array(160)
function u(){this.init(),this._w=a,o.call(this,128,112)}r(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(48)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},function(t,e,n){"use strict"
t.exports=n(107)},function(t,e,n){"use strict";(function(e){t.exports=c
var r=n(108),i="undefined"!=typeof navigator&&!!navigator.userAgent,o=i&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=i&&navigator.userAgent.match(/Edge\/1[2345]/),a=null
function u(t){return a||(a=new t(function(t,e){function n(){t({u2f:null,native:!0})}return i?o?n():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&t({u2f:window.u2f,native:!0}),s?n():"http:"===location.protocol?n():"undefined"==typeof MessageChannel?n():void r.isSupported(function(e){e?t({u2f:r,native:!1}):n()})):n()})),a}function c(t){return{isSupported:function(){return u(this).then(function(t){return!!t.u2f})}.bind(t),ensureSupport:function(){return u(this).then(h)}.bind(t),register:function(t,e,n){var r=this
Array.isArray(t)||(t=[t])
"number"==typeof e&&void 0===n&&(n=e,e=null)
e||(e=[])
return l(r,u(r).then(function(i){h(i)
var o=i.native,s=i.u2f
return new r(function(r,i){if(o){var a=t[0].appId
s.register(a,t,e,function(t){t.errorCode?i(f("Registration failed",t)):(delete t.errorCode,r(t))},n)}else s.register(t,e,function(t,e){t?i(t):e.errorCode?i(f("Registration failed",e)):r(e)},n)})})).promise}.bind(t),sign:function(t,e){var n=this
Array.isArray(t)||(t=[t])
return l(n,u(n).then(function(r){h(r)
var i=r.native,o=r.u2f
return new n(function(n,r){if(i){var s=t[0].appId,a=t[0].challenge
o.sign(s,a,t,function(t){t.errorCode?r(f("Sign failed",t)):(delete t.errorCode,n(t))},e)}else o.sign(t,function(t,e){t?r(t):e.errorCode?r(f("Sign failed",e)):n(e)},e)})})).promise}.bind(t),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function f(t,e){var n=null!=e?e.errorCode:1,r=c.ErrorNames[""+n],i=new Error(t)
return i.metaData={type:r,code:n},i}function l(t,e){var n={}
return n.promise=new t(function(t,r){n.resolve=t,n.reject=r,e.then(t,r)}),n.promise.cancel=function(e,r){u(t).then(function(t){r&&!t.native&&t.u2f.disconnect(),n.reject(f(e,{errorCode:-1}))})},n}function h(t){if(!t.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function p(t){c[t]=function(){if(!e.Promise)throw new Error("The platform doesn't natively support promises")
var n=[].slice.call(arguments)
return c(e.Promise)[t].apply(null,n)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},p("isSupported"),p("ensureSupport"),p("register"),p("sign")}).call(this,n(28))},function(t,e,n){"use strict"
var r=r||{}
t.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(t){if("undefined"!=typeof chrome&&chrome.runtime){var e={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]}
chrome.runtime.sendMessage(r.EXTENSION_ID,e,function(){chrome.runtime.lastError?r.getIframePort_(t):r.getChromeRuntimePort_(t)})}else r.getIframePort_(t)},r.getChromeRuntimePort_=function(t){var e=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0})
setTimeout(function(){t(null,new r.WrappedChromeRuntimePort_(e))},0)},r.WrappedChromeRuntimePort_=function(t){this.port_=t},r.WrappedChromeRuntimePort_.prototype.postMessage=function(t){this.port_.postMessage(t)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(t,e){var n=t.toLowerCase()
"message"==n||"onmessage"==n?this.port_.onMessage.addListener(function(t){e({data:t})}):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(t){var e="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe")
n.src=e+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n)
var i=!1,o=new MessageChannel,s=function(e){"ready"==e.data?(o.port1.removeEventListener("message",s),i||(i=!0,t(null,o.port1))):console.error('First event on iframe port was not "ready"')}
o.port1.addEventListener("message",s),o.port1.start(),n.addEventListener("load",function(){n.contentWindow.postMessage("init",e,[o.port2])}),setTimeout(function(){i||(i=!0,t(new Error("IFrame extension not supported")))},200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(t){r.port_?t(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort(function(t,e){for(t||(r.port_=e,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(t,e)}),r.waitingForPort_.push(t))},r.responseHandler_=function(t){var e=t.data,n=e.requestId
if(n&&r.callbackMap_[n]){var i=r.callbackMap_[n]
delete r.callbackMap_[n],i(null,e.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(t){r.getPortSingleton_(function(e,n){t(!e)})},r.sign=function(t,e,n){r.getPortSingleton_(function(i,o){if(i)return e(i)
var s=++r.reqCounter_
r.callbackMap_[s]=e
var a={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:t,timeoutSeconds:void 0!==n?n:r.EXTENSION_TIMEOUT_SEC,requestId:s}
o.postMessage(a)})},r.register=function(t,e,n,i){r.getPortSingleton_(function(o,s){if(o)return n(o)
var a=++r.reqCounter_
r.callbackMap_[a]=n
var u={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:e,registerRequests:t,timeoutSeconds:void 0!==i?i:r.EXTENSION_TIMEOUT_SEC,requestId:a}
s.postMessage(u)})}},function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.StatusCodes=void 0
var i=v(n(31)),o=v(n(110)),s=v(n(116)),a=v(n(119)),u=v(n(124)),c=v(n(127)),f=v(n(44)),l=v(n(45)),h=v(n(128))
e.getAltStatusMessage=y,e.TransportError=g,e.TransportStatusError=_
var p=v(n(43))
function v(t){return t&&t.__esModule?t:{default:t}}var d=e.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function y(t){switch(t){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=t&&t<=28671)return"Internal error, please report"}function g(t,e){this.name="TransportError",this.message=t,this.stack=(new Error).stack,this.id=e}function _(t){this.name="TransportStatusError"
var e=(0,h.default)(d).find(function(e){return d[e]===t})||"UNKNOWN_ERROR",n=y(t)||e,r=t.toString(16)
this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=t,this.statusText=e}g.prototype=new Error,_.prototype=new Error
var b=function(){function e(){var n=this;(0,f.default)(this,e),this.debug=t.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new p.default,this.send=function(){var t=(0,c.default)(u.default.mark(function t(e,i,o,s){var a,c,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.alloc(0),l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[d.OK]
return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(f.length>=256)){t.next=2
break}throw new g("data.length exceed 256 bytes limit. Got: "+f.length,"DataLengthTooBig")
case 2:return t.next=4,n.exchange(r.concat([r.from([e,i,o,s]),r.from([f.length]),f]))
case 4:if(a=t.sent,c=a.readUInt16BE(a.length-2),l.some(function(t){return t===c})){t.next=8
break}throw new _(c)
case 8:return t.abrupt("return",a)
case 9:case"end":return t.stop()}},t,n)}))
return function(e,n,r,i){return t.apply(this,arguments)}}(),this._appAPIlock=null}return(0,l.default)(e,[{key:"on",value:function(t,e){this._events.on(t,e)}},{key:"off",value:function(t,e){this._events.removeListener(t,e)}},{key:"emit",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this._events).emit.apply(e,[t].concat((0,a.default)(r)))}},{key:"setDebugMode",value:function(t){this.debug="function"==typeof t?t:t?function(t){return console.log(t)}:null}},{key:"setExchangeTimeout",value:function(t){this.exchangeTimeout=t}},{key:"decorateAppAPIMethods",value:function(t,e,n){var r=!0,i=!1,o=void 0
try{for(var a,u=(0,s.default)(e);!(r=(a=u.next()).done);r=!0){var c=a.value
t[c]=this.decorateAppAPIMethod(c,t[c],t,n)}}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}}},{key:"decorateAppAPIMethod",value:function(t,e,n,r){var s=this
return function(){var a=(0,c.default)(u.default.mark(function a(){for(var c=arguments.length,f=Array(c),l=0;l<c;l++)f[l]=arguments[l]
var h,p
return u.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(h=s._appAPIlock)){a.next=5
break}return p=new g("Ledger Device is busy (lock "+h+")","TransportLocked"),(0,o.default)(p,{currentLock:h,methodName:t}),a.abrupt("return",i.default.reject(p))
case 5:return a.prev=5,s._appAPIlock=t,s.setScrambleKey(r),a.next=10,e.apply(n,f)
case 10:return a.abrupt("return",a.sent)
case 11:return a.prev=11,s._appAPIlock=null,a.finish(11)
case 14:case"end":return a.stop()}},a,s,[[5,,11,14]])}))
return function(){return a.apply(this,arguments)}}()}}],[{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4
return new i.default(function(r,i){var o=!1,s=t.listen({next:function(n){o=!0,s&&s.unsubscribe(),clearTimeout(a),t.open(n.descriptor,e).then(r,i)},error:function(t){clearTimeout(a),i(t)},complete:function(){clearTimeout(a),o||i(new g(t.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),a=setTimeout(function(){s.unsubscribe(),i(new g(t.ErrorMessage_ListenTimeout,"ListenTimeout"))},n)})}}]),e}()
b.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",b.ErrorMessage_NoDeviceFound="No Ledger device found",e.default=b}).call(this,n(28),n(12).Buffer)},function(t,e,n){t.exports={default:n(111),__esModule:!0}},function(t,e,n){n(112),t.exports=n(1).Object.assign},function(t,e,n){var r=n(4)
r(r.S+r.F,"Object",{assign:n(113)})},function(t,e,n){"use strict"
var r=n(36),i=n(114),o=n(115),s=n(21),a=n(47),u=Object.assign
t.exports=!u||n(18)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst"
return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=s(t),u=arguments.length,c=1,f=i.f,l=o.f;u>c;)for(var h,p=a(arguments[c++]),v=f?r(p).concat(f(p)):r(p),d=v.length,y=0;d>y;)l.call(p,h=v[y++])&&(n[h]=p[h])
return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports={default:n(117),__esModule:!0}},function(t,e,n){n(52),n(32),t.exports=n(118)},function(t,e,n){var r=n(5),i=n(41)
t.exports=n(1).getIterator=function(t){var e=i(t)
if("function"!=typeof e)throw TypeError(t+" is not iterable!")
return r(e.call(t))}},function(t,e,n){"use strict"
e.__esModule=!0
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(120))
e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return(0,r.default)(t)}},function(t,e,n){t.exports={default:n(121),__esModule:!0}},function(t,e,n){n(32),n(122),t.exports=n(1).Array.from},function(t,e,n){"use strict"
var r=n(13),i=n(4),o=n(21),s=n(54),a=n(55),u=n(38),c=n(123),f=n(41)
i(i.S+i.F*!n(60)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,l,h=o(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,_=f(h)
if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==_||p==Array&&a(_))for(n=new p(e=u(h.length));e>g;g++)c(n,g,y?d(h[g],g):h[g])
else for(l=_.call(h),n=new p;!(i=l.next()).done;g++)c(n,g,y?s(l,d,[i.value,g],!0):i.value)
return n.length=g,n}})},function(t,e,n){"use strict"
var r=n(8),i=n(30)
t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){t.exports=n(125)},function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime
if(r.regeneratorRuntime=void 0,t.exports=n(126),i)r.regeneratorRuntime=o
else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict"
var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof t,f=e.regeneratorRuntime
if(f)c&&(t.exports=f)
else{(f=e.regeneratorRuntime=c?t.exports:{}).wrap=m
var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={}
y[s]=function(){return this}
var g=Object.getPrototypeOf,_=g&&g(g(I([])))
_&&_!==r&&i.call(_,s)&&(y=_)
var b=k.prototype=E.prototype=Object.create(y)
x.prototype=b.constructor=k,k.constructor=x,k[u]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},T(S.prototype),S.prototype[a]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,n,r){var i=new S(m(t,e,n,r))
return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},T(b),b[u]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e.reverse(),function n(){for(;e.length;){var r=e.pop()
if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var e=this
function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion
if("root"===s.tryLoc)return r("end")
if(s.tryLoc<=this.prev){var u=i.call(s,"catchLoc"),c=i.call(s,"finallyLoc")
if(u&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)
if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n]
if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r
break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null)
var s=o?o.completion:{}
return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.tryLoc===t){var r=n.completion
if("throw"===r.type){var i=r.arg
O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function m(t,e,n,r){var i=e&&e.prototype instanceof E?e:E,o=Object.create(i.prototype),s=new C(r||[])
return o._invoke=function(t,e,n){var r=l
return function(i,o){if(r===p)throw new Error("Generator is already running")
if(r===v){if("throw"===i)throw o
return R()}for(n.method=i,n.arg=o;;){var s=n.delegate
if(s){var a=A(s,n)
if(a){if(a===d)continue
return a}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===l)throw r=v,n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=p
var u=w(t,e,n)
if("normal"===u.type){if(r=n.done?v:h,u.arg===d)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,s),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function E(){}function x(){}function k(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e
this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,s){var a=w(t[n],t,r)
if("throw"!==a.type){var u=a.arg,c=u.value
return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},s)}s(a.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function A(t,e){var r=t.iterator[e.method]
if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return d
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=w(r,t.iterator,e.arg)
if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d
var o=i.arg
return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var e=t[s]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e
return e.value=n,e.done=!0,e}
return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){"use strict"
e.__esModule=!0
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(31))
e.default=function(t){return function(){var e=t.apply(this,arguments)
return new r.default(function(t,n){return function i(o,s){try{var a=e[o](s),u=a.value}catch(t){return void n(t)}if(!a.done)return r.default.resolve(u).then(function(t){i("next",t)},function(t){i("throw",t)})
t(u)}("next")})}}},function(t,e,n){t.exports={default:n(129),__esModule:!0}},function(t,e,n){n(130),t.exports=n(1).Object.keys},function(t,e,n){var r=n(21),i=n(36)
n(131)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(4),i=n(1),o=n(18)
t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={}
s[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",s)}},function(t,e,n){"use strict"
var r=n(24)
n.n(r).a},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"\n.payment-view[data-v-2d2f5a4e] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-view .input-title[data-v-2d2f5a4e] {\n    position: relative;\n    background: steelblue;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2em;\n}\n.payment-view .input-title .back-button[data-v-2d2f5a4e] {\n      position: absolute;\n      top: 5px;\n      left: 0;\n}\n.payment-view .payment-content[data-v-2d2f5a4e] {\n    margin: 10px;\n}\n.payment-view .payment-content .own-wallet[data-v-2d2f5a4e] {\n      margin-top: 20px;\n      text-align: center;\n}\n.payment-view .payment-content .own-wallet .xlm-address[data-v-2d2f5a4e] {\n        font-size: 0.9em;\n        font-weight: bold;\n}\n.payment-view .payment-content .payment-start[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-start .title-start[data-v-2d2f5a4e] {\n        font-size: 1.2em;\n        margin-bottom: 8px;\n}\n.payment-view .payment-content .payment-nano .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-secret .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n",""])},function(t,e,n){"use strict"
var r=n(25)
n.n(r).a},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"\n.main-container[data-v-e7f91608] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 10px;\n}\n.main-container .button-holder[data-v-e7f91608] {\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){"use strict"
var r=n(26)
n.n(r).a},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"\n.main-container[data-v-0b55ff9d] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.main-container .start-choice[data-v-0b55ff9d] {\n    font-size: 1.6em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n.main-container .start-choice .button-holder[data-v-0b55ff9d] {\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n}\n.main-container .purchase-container[data-v-0b55ff9d] {\n    background-color: #ffffff;\n    width: 600px;\n    text-align: center;\n    padding: 50px;\n}\n.main-container .button-holder[data-v-0b55ff9d] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){"use strict"
var r=n(27)
n.n(r).a},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"\n.dialog-header[data-v-53219965] {\n  width: 100%;\n  display: flex;\n  position: relative;\n  background: #1976d2;\n  padding-right: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  flex: 0 0 36px;\n}\n.dialog-header button[data-v-53219965] {\n    margin: 2px;\n}\n.dialog-header .left-side-buttons[data-v-53219965] {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n}\n.dialog-header .right-side-buttons[data-v-53219965] {\n    flex: 1 1 auto;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.dialog-header .dialog-header-text[data-v-53219965] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.dialog-header .dialog-header-text p[data-v-53219965] {\n      color: white;\n      font-weight: 600;\n      font-size: 1.1em;\n      margin: 0;\n      user-select: none;\n}\n",""])},function(t,e,n){"use strict"
n.r(e)
var r=n(0),i=n(16),o=n.n(i)
function s(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&s(t.prototype,e),n&&s(t,n)}(t,null,[{key:"strlen",value:function(t){return t?t.length:0}},{key:"strOK",value:function(t){return!!t&&t.length>0}}]),t}()
function u(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&u(t.prototype,e),n&&u(t,n)}(t,null,[{key:"paymentOperation",value:function(t,e,n,i){var o={destination:t,asset:n,amount:e,source:i}
return r.Operation.payment(o)}},{key:"manageOfferOperation",value:function(t,e,n,i){var o={selling:e,buying:t,amount:n,price:i,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return r.Operation.manageOffer(o)}},{key:"setOptionsOperation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t
return n.source=e,r.Operation.setOptions(n)}},{key:"manageDataOperation",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i={name:t,value:a.strOK(e)?e:null,source:n}
return r.Operation.manageData(i)}},{key:"changeTrustOperation",value:function(t,e){var n={asset:t,limit:e,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return r.Operation.changeTrust(n)}},{key:"allowTrustOperation",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={trustor:t,assetCode:e.getCode(),authorize:n,source:i}
return r.Operation.allowTrust(o)}},{key:"pathPaymentOperation",value:function(t,e,n,i,o){var s={destination:t,sendAsset:e,sendMax:n,destAsset:i,destAmount:o,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return r.Operation.pathPayment(s)}},{key:"multisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=[],a={source:o,signer:{ed25519PublicKey:t,weight:e}}
return s.push(r.Operation.setOptions(a)),a={source:o,medThreshold:n,highThreshold:i},s.push(r.Operation.setOptions(a)),s}},{key:"removeMultisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=[],s={source:i,medThreshold:e,highThreshold:n}
return o.push(r.Operation.setOptions(s)),s={source:i,signer:{ed25519PublicKey:t,weight:0}},o.push(r.Operation.setOptions(s)),o}}]),t}(),f=n(43)
function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,v(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,f),function(t,e,n){e&&h(t.prototype,e),n&&h(t,n)}(e,[{key:"log",value:function(t,e){this.emit("transaction",t,e)}}]),e}())
Object.freeze(y)
var g=y
function _(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.log("StellarAPI constructor missing parameter"),this._horizonServer=e}return function(t,e,n){e&&_(t.prototype,e),n&&_(t,n)}(t,[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var t=this.serverURL()+"/metrics"
return o.a.get(t)}},{key:"accountInfo",value:function(t){return this.server().loadAccount(t)}},{key:"balances",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=[]
return t.balances.forEach(function(t){"native"===t.asset_type?e.push({symbol:"XLM",amount:t.balance,issuer:""}):e.push({symbol:t.asset_code,amount:t.balance,issuer:t.asset_issuer})}),e})}},{key:"balanceForAsset",value:function(t,e){var n=this
return t.publicKey().then(function(t){return n.server().loadAccount(t)}).then(function(t){var n=!0,r=!1,i=void 0
try{for(var o,s=t.balances[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var a=o.value
if("native"===a.asset_type){if(e.isNative())return a.balance}else if(a.asset_code===e.getCode()&&a.asset_issuer===e.getIssuer())return a.balance}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return"0"})}},{key:"paths",value:function(t,e,n,r){return this.server().paths(t,e,n,r)}},{key:"mergeAccount",value:function(t,e){var n=this,i="",o=""
return t.publicKey().then(function(t){return i=t,e.publicKey()}).then(function(t){return o=t,n.server().loadAccount(t)}).then(function(t){var n=new r.TransactionBuilder(t).addOperation(r.Operation.accountMerge({destination:o,source:i})).build()
return e.signTransaction(n)}).then(function(e){return t.signTransaction(e)}).then(function(t){return n.submitTransaction(t,"merge account")})}},{key:"manageOffer",value:function(t,e,n,r,i,o){var s=this,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0
return this._processAccounts(t,e).then(function(u){var f=c.manageOfferOperation(n,r,i,o,a,u.sourcePublicKey)
return s._submitOperations("manage offer",t,e,[f],u)})}},{key:"changeTrust",value:function(t,e,n,r){var i=this
return this._processAccounts(t,e).then(function(o){var s=c.changeTrustOperation(n,r,o.sourcePublicKey)
return i._submitOperations("change trust",t,e,[s],o)})}},{key:"allowTrust",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=null
return e.publicKey().then(function(e){return s=e,i._processAccounts(t,o)}).then(function(e){var a=c.allowTrustOperation(s,n,r,e.sourcePublicKey)
return i._submitOperations("allow trust",t,o,[a],e)})}},{key:"makeMultiSig",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=null
return e.publicKey().then(function(e){return o=e,n._processAccounts(t,r)}).then(function(e){var s=c.multisigOperations(o,1,i,i,e.sourcePublicKey)
return n._submitOperations("make multisig",t,r,s,e)})}},{key:"removeMultiSig",value:function(t,e,n){var r=this
return this.removeMultiSigTransaction(t,e,n).then(function(t){return r.submitTransaction(t,"remove multisig")})}},{key:"submitTransaction",value:function(t,e){return this.server().submitTransaction(t).then(function(t){return g.log(t,e),t})}},{key:"removeMultiSigTransaction",value:function(t,e,n){var i=this,o=null
return t.publicKey().then(function(t){return i.server().loadAccount(t)}).then(function(t){return o=t,e.publicKey()}).then(function(e){var i=new r.TransactionBuilder(o,n),s=c.removeMultisigOperations(e,1,1,null),a=!0,u=!1,f=void 0
try{for(var l,h=s[Symbol.iterator]();!(a=(l=h.next()).done);a=!0){var p=l.value
i.addOperation(p)}}catch(t){u=!0,f=t}finally{try{a||null==h.return||h.return()}finally{if(u)throw f}}var v=i.build()
return t.signTransaction(v)}).then(function(t){return e.signTransaction(t)})}},{key:"sendAssetBatch",value:function(t,e,n,i){var o=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,f=null===s?r.Asset.native():s,l=null,h=[]
return this._processAccounts(t,e).then(function(r){var s=Promise.resolve(),p=!0,v=!1,d=void 0
try{for(var y,g=function(){var t=y.value
s=s.then(function(){return t.publicKey()}).then(function(t){return l=t,o.server().loadAccount(l)}).then(function(t){if(!o._hasAssetTrustline(t,f))throw new Error("No trustline from destination to asset")
return null}).then(function(){var t=c.paymentOperation(l,i,f,r.sourcePublicKey)
return h.push(t),null})},_=n[Symbol.iterator]();!(p=(y=_.next()).done);p=!0)g()}catch(t){v=!0,d=t}finally{try{p||null==_.return||_.return()}finally{if(v)throw d}}return s.then(function(){return o._submitOperations("send asset batch",t,e,h,r,a,u)})})}},{key:"sendAsset",value:function(t,e,n,i){var o=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,f=null===s?r.Asset.native():s,l=null
return n.publicKey().then(function(t){return l=t,o.server().loadAccount(l)}).then(function(n){if(!o._hasAssetTrustline(n,f))throw new Error("No trustline from destination to asset")
return o._processAccounts(t,e)}).then(function(n){var r=c.paymentOperation(l,i,f,n.sourcePublicKey)
return o._submitOperations("send asset",t,e,[r],n,a,u)})}},{key:"buyTokens",value:function(t,e,n,r,i){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null
return t.publicKey().then(function(t){return u=t,o.server().loadAccount(t)}).then(function(e){if(!o._hasAssetTrustline(e,n))throw new Error("No trustline from buyer to asset")
return o._processAccounts(t,s)}).then(function(f){var l=c.pathPaymentOperation(u,e,r,n,i,f.sourcePublicKey)
return o._submitOperations("buy asset",t,s,[l],f,null,a)})}},{key:"manageData",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(t,e).then(function(s){var a=c.manageDataOperation(n,r,s.sourcePublicKey)
return i._submitOperations("manage data",t,e,[a],s,null,o)})}},{key:"getFlags",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=0
return t.flags.auth_required&&(e|=r.AuthRequiredFlag),t.flags.auth_revocable&&(e|=r.AuthRevocableFlag),e})}},{key:"createAccount",value:function(t,e,n){var i,o=this
return e.publicKey().then(function(e){return i=e,t.publicKey()}).then(function(t){return o.server().loadAccount(t)}).then(function(e){var o={destination:i,startingBalance:n},s=new r.TransactionBuilder(e).addOperation(r.Operation.createAccount(o)).build()
return t.signTransaction(s)}).then(function(t){return o.submitTransaction(t,"create account")}).then(function(t){return o.server().loadAccount(i)})}},{key:"lockAccount",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=null
switch(e){case"low":i={masterWeight:1,lowThreshold:0,medThreshold:2,highThreshold:2}
break
case"lock":i={masterWeight:0,lowThreshold:0,medThreshold:0,highThreshold:0}
break
default:console.log("preset invalid: "+e)}if(!i)throw new Error("lockAccount preset invalid")
return this.setOptions(t,i,n,r)}},{key:"setDomain",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={homeDomain:e}
return this.setOptions(t,i,n,r)}},{key:"setFlags",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={setFlags:e}
return this.setOptions(t,i,n,r)}},{key:"clearFlags",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={clearFlags:e}
return this.setOptions(t,i,n,r)}},{key:"setInflationDestination",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={inflationDest:e}
return this.setOptions(t,i,n,r)}},{key:"setOptions",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return this._processAccounts(t,r).then(function(o){var s=c.setOptionsOperation(e,o.sourcePublicKey)
return n._submitOperations("set options",t,r,[s],o,null,i)})}},{key:"_hasAssetTrustline",value:function(t,e){return!!e.isNative()||t.balances.some(function(t){return t.asset_code===e.getCode()&&t.asset_issuer===e.getIssuer()})}},{key:"_processAccounts",value:function(t,e){var n=this
return t.publicKey().then(function(t){return e?e.publicKey().then(function(e){return{sourcePublicKey:t,fundingPublicKey:e}}):{sourcePublicKey:t}}).then(function(t){var e=t.sourcePublicKey
return t.fundingPublicKey&&(e=t.fundingPublicKey),n.server().loadAccount(e).then(function(e){return t.account=e,t})})}},{key:"_submitOperations",value:function(t,e,n,i,o){var s=this,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,f=new r.TransactionBuilder(o.account),l=!0,h=!1,p=void 0
try{for(var v,d=i[Symbol.iterator]();!(l=(v=d.next()).done);l=!0){var y=v.value
f.addOperation(y)}}catch(t){h=!0,p=t}finally{try{l||null==d.return||d.return()}finally{if(h)throw p}}a.strOK(u)&&f.addMemo(r.Memo.text(u))
var g=f.build()
return e.signTransaction(g).then(function(t){return n&&!n.equalTo(e)?n.signTransaction(t):t}).then(function(r){if(c&&c.length>0){var i=[]
i.push(e),n&&i.push(n)
var o=s._filteredSigners(c,i)
if(o.length>0){var a=Promise.resolve(),u=!0,f=!1,l=void 0
try{for(var h,p=function(){var t=h.value
a=a.then(function(){return t.signTransaction(r)})},v=o[Symbol.iterator]();!(u=(h=v.next()).done);u=!0)p()}catch(t){f=!0,l=t}finally{try{u||null==v.return||v.return()}finally{if(f)throw l}}return a.then(function(e){return s.submitTransaction(e,t)})}}return s.submitTransaction(r,t)})}},{key:"_filteredSigners",value:function(t,e){var n=t
if(t&&t.length>0&&e&&e.length>0){n=[]
var r=!0,i=!1,o=void 0
try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var u=s.value
if(u){var c=!1,f=!0,l=!1,h=void 0
try{for(var p,v=e[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var d=p.value
if(u.equalTo(d)){c=!0
break}}}catch(t){l=!0,h=t}finally{try{f||null==v.return||v.return()}finally{if(l)throw h}}c||n.push(u)}}}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}}return n}}]),t}()
function m(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverURL=e,this._testnet=n,this._testnet?r.Network.useTestNetwork():r.Network.usePublicNetwork(),this._server=new r.Server(e,i)}return function(t,e,n){e&&m(t.prototype,e),n&&m(t,n)}(t,[{key:"server",value:function(){return this._testnet?r.Network.useTestNetwork():r.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}]),t}()
function E(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&E(t.prototype,e),n&&E(t,n)}(t,[{key:"publicKey",value:function(){var t=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(e){return t._publicKey=e,t._publicKey})}},{key:"equalTo",value:function(t){return!(!this.usingLedger()||!t.usingLedger())||(this._publicKey===t._publicKey||this._secret===t._secret)}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(t){var e=this
return this.publicKey().then(function(n){if(e.usingLedger())return e._confirmCallback&&e._confirmCallback(),e._ledgerAPI.signTransaction(n,t)
if(a.strOK(e._secret)){var i=r.Keypair.fromSecret(e._secret)
return t.sign(i),t}throw new Error("This wallet does not contain a secret key.")}).then(function(t){return t})}}],[{key:"secret",value:function(e){var n=new t
return n._secret=e,n._publicKey=r.Keypair.fromSecret(e).publicKey(),n}},{key:"ledger",value:function(e,n){var r=new t
return r._ledgerAPI=e,r._confirmCallback=n,r}},{key:"public",value:function(e){var n=new t
return n._publicKey=e,n}}]),t}(),k=n(63),T=n.n(k),S=n(64),A=n.n(S)
function P(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&P(t.prototype,e),n&&P(t,n)}(t,null,[{key:"setupForNode",value:function(t){this.nodeTransport=t}},{key:"isNodeTransport",value:function(t){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create(2e3,2e3):A.a.create(2e3,2e3)}}]),t}()
function C(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var I=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=null,this.str=null}return function(t,e,n){e&&C(t.prototype,e),n&&C(t,n)}(t,[{key:"createTransport",value:function(){var t=this
return this.str?Promise.resolve():O.create().then(function(e){return t.transport=e,t.str=new T.a(t.transport),null}).catch(function(t){throw console.log(JSON.stringify(t)),t})}},{key:"verifyConnect",value:function(){var t=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw t.transport.close(),t.str=null,t.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var t=this
return this.createTransport().then(function(){return t.verifyConnect().catch(function(e){return t.createTransport().then(function(){return t.verifyConnect()})})}).catch(function(t){throw console.log("Error: connect: "+JSON.stringify(t)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var t=this
return this.connect().then(function(){return t.str.getPublicKey("44'/148'/0'")}).then(function(t){return t.publicKey}).catch(function(t){throw console.log("Error: getPublicKey: "+JSON.stringify(t)),t})}},{key:"signTransaction",value:function(t,e){var n=this
return this.connect().then(function(){return n.str.signTransaction("44'/148'/0'",e.signatureBase())}).then(function(n){var i=n.signature,o=r.Keypair.fromPublicKey(t)
if(o.verify(e.hash(),i)){var s=o.signatureHint(),a=new r.xdr.DecoratedSignature({hint:s,signature:i})
return e.signatures.push(a),e}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(t){throw console.log("Error: signTransaction: "+JSON.stringify(t)),t})}}]),t}(),R=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",{staticClass:"main-container"},[n("donate-view",{attrs:{donationPublicKey:t.donationPublicKey}}),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()])}
R._withStripped=!0
var L=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"payment-view"},[n("div",{staticClass:"input-title"},["start"!==t.dialogMode?n("v-icon",{staticClass:"back-button",attrs:{dark:"",large:""},on:{click:function(e){t.dialogMode="start"}}},[t._v("chevron_left")]):t._e(),t._v("\n    "+t._s(t.headerMessage)+"\n  ")],1),t._v(" "),n("div",{staticClass:"payment-content"},["start"===t.dialogMode?n("div",{staticClass:"payment-start"},[n("div",{staticClass:"title-start"},[t._v("Choose Method")]),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){t.buttonClick("useNano")}}},[t._v("Use Ledger Nano")])],1),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){t.buttonClick("useKey")}}},[t._v("Use secret key")])],1),t._v(" "),t.donate?n("div",{staticClass:"own-wallet"},[t._v("\n        Or use your favorite wallet:"),n("br"),t._v("To: "),n("span",{staticClass:"xlm-address"},[t._v(t._s(t.destinationPublicKey))])]):t._e()]):"useNano"===t.dialogMode?n("div",{staticClass:"payment-nano"},[n("v-text-field",{attrs:{label:"Lumens",type:"number",autofocus:""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithNano")}},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{spellcheck:"false",label:"Destination"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithNano")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.sendingPayment},on:{click:function(e){t.buttonClick("sendWithNano")}}},[t._v("Send with Ledger Nano")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):"useKey"===t.dialogMode?n("div",{staticClass:"payment-secret"},[n("v-text-field",{attrs:{label:"Amount",type:"number",autofocus:""},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{label:"Destination"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithSecret")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("v-text-field",{attrs:{spellcheck:"false",label:"Secret Key",counter:56,hint:"Starts with an 'S'","append-icon":t.showSecret?"visibility_off":"visibility","append-icon-cb":function(){return t.showSecret=!t.showSecret},type:t.showSecret?"text":"password"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithSecret")}},model:{value:t.secretKey,callback:function(e){t.secretKey="string"==typeof e?e.trim():e},expression:"secretKey"}}),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.disableSendLumens},on:{click:function(e){t.buttonClick("sendWithSecret")}}},[t._v("Send Lumens")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):t._e()])])}
L._withStripped=!0
var U={props:["donationPublicKey"],data:function(){return{visible:!1,destinationPublicKey:"",donate:!1,dialogMode:"start",status:"",secretKey:"",sendingPayment:!1,xlm:10,showSecret:!1,browserSupportMessage:"",ledgerAPI:null,horizon:null}},computed:{disableSendLumens:function(){return a.strlen(this.secretKey)<10||this.xlm<1},headerMessage:function(){return"Send a Payment"}},created:function(){this.horizon=new w("https://horizon.stellar.org",!1),a.strOK(this.donationPublicKey)&&(this.donate=!0,this.destinationPublicKey=this.donationPublicKey),O.isNodeTransport()?this.browserSupportMessage='Error: Make sure "Browser Support" is disabled':this.browserSupportMessage='Error: Make sure "Browser Support" is enabled',this.ledgerAPI=new I},methods:{buttonClick:function(t){switch(t){case"useNano":this.dialogMode="useNano",this.status=""
break
case"useKey":this.dialogMode="useKey",this.status=""
break
case"sendWithNano":this.sendWithNano()
break
case"sendWithSecret":this.sendWithSecret()
break
default:console.log("not handled: "+t)}},sendWithNano:function(){var t=this,e=x.ledger(this.ledgerAPI,function(){t.status="Confirm transaction on Nano..."})
this.sendPayment(e)},sendWithSecret:function(){a.strOK(this.secretKey)?this.status="Please enter your secret key":this.sendPayment(x.secret(this.secretKey))},verifyAccounts:function(t,e){var n=this
return this.horizon.server().loadAccount(e).then(function(e){return t.publicKey()}).then(function(t){return n.horizon.server().loadAccount(t)}).then(function(t){return t})},sendPayment:function(t){var e=this,n=this.destinationPublicKey
a.strOK(n)?this.xlm<1?this.status="Lumens must be greater than 0":(this.status="Building transaction...",this.sendingPayment=!0,this.verifyAccounts(t,n).then(function(i){var o=new r.TransactionBuilder(i).addOperation(r.Operation.payment({destination:n,asset:r.Asset.native(),amount:String(e.xlm)})).build()
return t.signTransaction(o)}).then(function(t){return e.status="Submitting transaction...",e.horizon.server().submitTransaction(t)}).then(function(t){return e.status="Payment successful!",e.secretKey="",null}).catch(function(t){"connection failed"===t.message?e.status=e.browserSupportMessage:e.status="Error making payment: "+t.message}).finally(function(){e.sendingPayment=!1})):this.status="Destination is blank"}}}
n(132)
function M(t,e,n,r,i,o,s,a){var u,c="function"==typeof t?t.options:t
if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u
var f=c.render
c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate
c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}var B=M(U,L,[],!1,null,"2d2f5a4e",null)
B.options.__file="src/vue/PaymentView.vue"
var N=B.exports,K={props:["ping","donationPublicKey"],components:{"donate-view":N},watch:{ping:function(){this.visible=!0}},data:function(){return{visible:!1}}},j=(n(134),M(K,R,[],!1,null,"e7f91608",null))
j.options.__file="src/vue/PaymentDialog.vue"
var D=j.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",persistent:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"main-container"},[t.showPurchase?t._e():n("div",{staticClass:"start-choice"},[n("div",[t._v("What would you like to use to purchase LMB tokens")]),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("bitcoin")}}},[t._v("Bitcoin")]),t._v(" "),n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("ethereum")}}},[t._v("Ethereum")])],1)]),t._v(" "),t.showPurchase?n("div",{staticClass:"purchase-container"},[n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("back")}}},[t._v("Back")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.sendMessage)}}),t._v(" "),n("div",[t._v("Address = "+t._s(t.address))]),t._v(" "),n("p",[n("strong",[t._v("Rinkeby testnet. Do not send real coins!")])]),t._v(" "),n("p",[t._v("Exchange rate: 1 ETH = 1 LMB token")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/stellar/go/pull/81 ",target:"_blank "}},[t._v("Instructions")])]),t._v(" "),n("div",{staticClass:"progress "},[n("v-progress-linear",{model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress "}})],1),t._v(" "),n("div",[t._v("Status = "+t._s(t.status))]),t._v(" "),n("div",[t._v("Public Key = "+t._s(t.publicKey))]),t._v(" "),n("div",[t._v("Secret Key = "+t._s(t.secretKey))])],1):t._e(),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)])])}
function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}F._withStripped=!0
var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._checkParams(e),this.params=e
var n={}
void 0!==e.horizonAllowHttp&&(n.allowHttp=e.horizonAllowHttp),this.horizon=new r.Server(this.params.horizonURL,n),"test"===e.network?r.Network.useTestNetwork():r.Network.usePublicNetwork(),this.started=!1}return function(t,e,n){e&&Y(t.prototype,e),n&&Y(t,n)}(t,[{key:"startBitcoin",value:function(t){return this._start("bitcoin",t)}},{key:"startEthereum",value:function(t){return this._start("ethereum",t)}},{key:"_start",value:function(t,e){var n=this
if(this.started)throw new Error("Session already started")
return this.started=!0,this.keypair=r.Keypair.random(),new Promise(function(r,i){o.a.post("".concat(n.params.bifrostURL,"/generate-").concat(t,"-address"),"stellar_public_key=".concat(n.keypair.publicKey())).then(function(o){if(o.data.chain!==t)return i("Invalid chain")
if(2!==o.data.protocol_version)return i("Invalid protocol_version. Make sure Bifrost server is using the same protocol version.")
var s=o.data.address
r({address:s,keypair:n.keypair}),n.signer=o.data.signer
var a=new EventSource("".concat(n.params.bifrostURL,"/events?stream=").concat(s))
a.addEventListener("transaction_received",function(t){return e("transaction_received")},!1),a.addEventListener("account_created",function(t){return n._onAccountCreated(e)},!1),a.addEventListener("exchanged",function(t){e("exchanged"),a.close()},!1),a.addEventListener("exchanged_timelocked",function(t){e("exchanged_timelocked",JSON.parse(t.data)),a.close()},!1),a.addEventListener("error",function(t){return console.error(t)},!1)}).catch(function(t){console.log(t),i()})})}},{key:"_onAccountCreated",value:function(t){var e=this
t("account_created"),this.horizon.loadAccount(this.keypair.publicKey()).then(function(t){e._onAccountCreatedRecoveryTransactions(t.sequenceNumber())
var n=new r.TransactionBuilder(t).addOperation(r.Operation.setOptions({masterWeight:0,signer:{ed25519PublicKey:e.signer,weight:1}})).build()
return n.sign(e.keypair),e.horizon.submitTransaction(n)}).then(function(){return t("account_configured")}).catch(function(e){return t("error",e)})}},{key:"_checkParams",value:function(t){if(void 0===t)throw new Error("params not provided")
if(-1===["live","test"].indexOf(t.network))throw new Error("Invalid params.network")
for(var e=["bifrostURL","horizonURL"],n=0;n<e.length;n++){var i=e[n]
if("string"!=typeof t[i])throw new Error("params.".concat(i," required and must be of type 'string'"))}if(void 0!==t.recoveryPublicKey&&!r.StrKey.isValidEd25519PublicKey(t.recoveryPublicKey))throw new Error("params.recoveryPublicKey is invalid")}},{key:"_onAccountCreatedRecoveryTransactions",value:function(t){if(void 0!==this.params.recoveryPublicKey){var e=new r.Account(this.keypair.publicKey(),t),n=new r.TransactionBuilder(e).addOperation(r.Operation.accountMerge({destination:this.params.recoveryPublicKey})).build()
n.sign(this.keypair),this._submitRecovery(n)}}},{key:"_submitRecovery",value:function(t){var e=t.toEnvelope().toXDR().toString("base64"),n=encodeURIComponent(e)
return o.a.post("".concat(this.params.bifrostURL,"/recovery-transaction"),"transaction_xdr=".concat(n))}}]),t}(),G={props:["ping","params"],data:function(){return{showPurchase:!1,purchaseCoin:"",progress:0,session:null,status:"",address:"loading...",publicKey:"",secretKey:"",visible:!1}},watch:{ping:function(){this.visible=!0}},computed:{sendMessage:function(){return"btc"===this.purchaseCoin?'<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>':'<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>'}},methods:{initBifrost:function(){this.session=new z(this.params)},startBitcoin:function(){var t=this
this.showPurchase=!0,this.purchaseCoin="btc",this.initBifrost(),this.session.startBitcoin(this.onEvent).then(function(e){t.setStatus("Waiting for a transaction...",10),t.address=e.address,t.publicKey=e.keypair.publicKey(),t.secretKey=e.keypair.secret()}).catch(function(t){console.log(JSON.stringify(t)),console.log(t)})},startEthereum:function(){var t=this
this.showPurchase=!0,this.purchaseCoin="eth",this.initBifrost(),this.session.startEthereum(this.onEvent).then(function(e){t.setStatus("Waiting for a transaction...",10),t.address=e.address,t.publicKey=e.keypair.publicKey(),t.secretKey=e.keypair.secret()}).catch(function(t){console.log(JSON.stringify(t)),console.log(t)})},setStatus:function(t,e){this.progress=e,this.status=t},onEvent:function(t,e){switch(t){case"transaction_received":this.setStatus("Transaction received, creating account...",20)
break
case"account_created":this.setStatus("Account created, creating trust lines...",40)
break
case"account_configured":this.setStatus("Account configured, waiting for tokens...",60)
break
case"exchanged_timelocked":this.setStatus("Congrats! TOKE purchased but will be locked.</pre>\nUnlock transaction: <pre>"+e.transaction+"</pre>",100)
break
case"exchanged":this.setStatus("Congrats! TOKE purchased.",100),this.$emit("new-account",this.secretKey)
break
case"error":this.setStatus("Error!",0),console.log(JSON.stringify(e))
break
default:this.setStatus("default swtich reached!",0)}},buttonClick:function(t){switch(t){case"test":this.test()
break
case"bitcoin":this.startBitcoin()
break
case"ethereum":this.startEthereum()
break
case"back":this.showPurchase=!1
break
default:console.log("no button with that name")}}}},H=(n(136),M(G,F,[],!1,null,"0b55ff9d",null))
H.options.__file="src/vue/BuyTokenDialog.vue"
var q=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"dialog-header"},[n("div",{staticClass:"dialog-header-text"},[n("p",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"left-side-buttons"},[t.showBack?n("v-btn",{staticClass:"dialog-back-button",attrs:{slot:"activator",icon:"",dark:""},on:{click:function(e){t.buttonClick("back")}},slot:"activator"},[n("v-icon",[t._v("chevron_left")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"right-side-buttons"},[n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[t.showPrint?n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){t.buttonClick("print")}},slot:"activator"},[n("v-icon",[t._v("print")])],1):t._e(),t._v(" "),n("span",[t._v("Print")])],1),t._v(" "),n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){t.buttonClick("close")}},slot:"activator"},[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.tooltip)}})],1)],1)])}
W._withStripped=!0
var V={props:["title","help","showPrint","showBack"],computed:{tooltip:function(){return this.help?"Help":"Close"},icon:function(){return this.help?"help_outline":"close"}},methods:{buttonClick:function(t){this.$emit(t)}}},X=(n(138),M(V,W,[],!1,null,"53219965",null))
X.options.__file="src/vue/DialogTitleBar.vue"
var J=X.exports
n.d(e,"StellarAPI",function(){return b}),n.d(e,"HorizonServer",function(){return w}),n.d(e,"PaymentDialog",function(){return D}),n.d(e,"PaymentView",function(){return N}),n.d(e,"DialogTitleBar",function(){return J}),n.d(e,"BuyTokenDialog",function(){return q}),n.d(e,"StellarWallet",function(){return x}),n.d(e,"LedgerAPI",function(){return I}),n.d(e,"LedgerAPITransport",function(){return O}),n.d(e,"TransactionLogger",function(){return g}),n.d(e,"StellarSdk",function(){return r})}])})
