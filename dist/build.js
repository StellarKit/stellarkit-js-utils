!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("stellar-sdk"),require("vue"),require("axios")):"function"==typeof define&&define.amd?define(["stellar-sdk","vue","axios"],e):"object"==typeof exports?exports["stellar-js-utils"]=e(require("stellar-sdk"),require("vue"),require("axios")):t["stellar-js-utils"]=e(t["stellar-sdk"],t.vue,t.axios)}(window,function(t,e,n){return function(t){var e={}
function n(r){if(e[r])return e[r].exports
var i=e[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=173)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=function(t){var e=[]
return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3]
if(!r)return n
if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})
return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t)
return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]])
for(var r={},i=0;i<this.length;i++){var o=this[i][0]
"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i]
"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){var n=t.exports={version:"2.5.7"}
"number"==typeof __e&&(__e=n)},function(t,e,n){var r={},i=function(t){var e
return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={}
return function(t,n){if("function"==typeof t)return t()
if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n)
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,u=[],l=n(142)
function c(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id]
if(o){o.refs++
for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s])
for(;s<i.parts.length;s++)o.parts.push(g(i.parts[s],e))}else{var a=[]
for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e))
r[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]}
r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(t,e){var n=o(t.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var r=u[u.length-1]
if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e)
else if("bottom"===t.insertAt)n.appendChild(e)
else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var i=o(t.insertAt.before,n)
n.insertBefore(e,i)}}function d(t){if(null===t.parentNode)return!1
t.parentNode.removeChild(t)
var e=u.indexOf(t)
e>=0&&u.splice(e,1)}function p(t){var e=document.createElement("style")
if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0
return n.nc}()
r&&(t.attrs.nonce=r)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o
if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){}
t.css=o}if(e.singleton){var u=a++
n=s||(s=p(e)),r=b.bind(null,n,u,!1),i=b.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link")
return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=l(r))
i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
var s=new Blob([r],{type:"text/css"}),a=t.href
t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),r=function(t,e){var n=e.css,r=e.media
r&&t.setAttribute("media",r)
if(t.styleSheet)t.styleSheet.cssText=n
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){d(n)})
return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return
r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom")
var n=h(t,e)
return c(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&c(h(t,e),e)
for(o=0;o<i.length;o++){var a
if(0===(a=i[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]()
delete r[a.id]}}}}
var m=function(){var t=[]
return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()
function b(t,e,n,r){var i=n?"":r.css
if(t.styleSheet)t.styleSheet.cssText=m(e,i)
else{var o=document.createTextNode(i),s=t.childNodes
s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(51)("wks"),i=n(52),o=n(5).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(5),i=n(3),o=n(17),s=n(11),a=n(23),u=function(t,e,n){var l,c,h,f=t&u.F,d=t&u.G,p=t&u.S,v=t&u.P,g=t&u.B,m=t&u.W,b=d?i:i[e]||(i[e]={}),y=b.prototype,_=d?r:p?r[e]:(r[e]||{}).prototype
for(l in d&&(n=e),n)(c=!f&&_&&void 0!==_[l])&&a(b,l)||(h=c?_[l]:n[l],b[l]=d&&"function"!=typeof _[l]?n[l]:g&&c?o(h,r):m&&_[l]==h?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t
case 1:return new t(e)
case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)}
return e.prototype=t.prototype,e}(h):v&&"function"==typeof h?o(Function.call,h):h,v&&((b.virtual||(b.virtual={}))[l]=h,t&u.R&&y&&!y[l]&&s(y,l,h)))}
u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(18)
t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!")
return t}},function(t,e){t.exports=function(t,e){var n="function"==typeof t.exports?t.exports.extendOptions:t.options
for(var r in"function"==typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[r]=n.components[r]||e[r]}},function(t,e,n){var r=n(16),i=r.Buffer
function o(t,e){for(var n in t)e[n]=t[n]}function s(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=s),o(i,s),s.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return i(t,e,n)},s.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var r=i(t)
return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return i(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return r.SlowBuffer(t)}},function(t,e,n){var r=n(12),i=n(33)
t.exports=n(13)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),i=n(77),o=n(78),s=Object.defineProperty
e.f=n(13)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!")
return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){var r=n(10).Buffer
function i(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e))
for(var n=this._block,i=this._blockSize,o=t.length,s=this._len,a=0;a<o;){for(var u=s%i,l=Math.min(o-a,i-u),c=0;c<l;c++)n[u+c]=t[a+c]
a+=l,(s+=l)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var n=8*this._len
if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4)
else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},function(t,e,n){"use strict";(function(t){var r=n(71),i=n(72),o=n(73)
function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,n)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return h(this,t)}return l(this,t,e,n)}function l(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r)
u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=f(t,e)
return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8")
if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(e,n),i=(t=a(t,r)).write(e,n)
i!==r&&(t=t.slice(0,i))
return t}(t,e,n):function(t,e){if(u.isBuffer(e)){var n=0|d(e.length)
return 0===(t=a(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?a(t,0):f(t,e)
if("Buffer"===e.type&&o(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(c(e),t=a(t,e<0?0:0|d(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0
return t}function f(t,e){var n=e.length<0?0:0|d(e.length)
t=a(t,n)
for(var r=0;r<n;r+=1)t[r]=255&e[r]
return t}function d(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes")
return 0|t}function p(t,e){if(u.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var n=t.length
if(0===n)return 0
for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return z(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return $(t).length
default:if(r)return z(t).length
e=(""+e).toLowerCase(),r=!0}}function v(t,e,n){var r=t[e]
t[e]=t[n],t[n]=r}function g(t,e,n,r,i){if(0===t.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1
n=t.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:m(t,e,n,r,i)
if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):m(t,[e],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function m(t,e,n,r,i){var o,s=1,a=t.length,u=e.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1
s=2,a/=2,u/=2,n/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var c=-1
for(o=n;o<a;o++)if(l(t,o)===l(e,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===u)return c*s}else-1!==c&&(o-=o-c),c=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(l(t,o+f)!==l(e,f)){h=!1
break}if(h)return o}return-1}function b(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=e.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16)
if(isNaN(a))return s
t[n+s]=a}return s}function y(t,e,n,r){return K(z(e,t.length-n),t,n,r)}function _(t,e,n,r){return K(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n))
return e}(e),t,n,r)}function x(t,e,n,r){return _(t,e,n,r)}function w(t,e,n,r){return K($(e),t,n,r)}function k(t,e,n,r){return K(function(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(e,t.length-n),t,n,r)}function E(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function S(t,e,n){n=Math.min(t.length,n)
for(var r=[],i=e;i<n;){var o,s,a,u,l=t[i],c=null,h=l>239?4:l>223?3:l>191?2:1
if(i+h<=n)switch(h){case 1:l<128&&(c=l)
break
case 2:128==(192&(o=t[i+1]))&&(u=(31&l)<<6|63&o)>127&&(c=u)
break
case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&l)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u)
break
case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&l)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(c=65533,h=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),i+=h}return function(t){var e=t.length
if(e<=T)return String.fromCharCode.apply(String,t)
var n="",r=0
for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=T))
return n}(r)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0)
return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return l(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return function(t,e,n,r){return c(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},u.allocUnsafe=function(t){return h(null,t)},u.allocUnsafeSlow=function(t){return h(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers")
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
s.copy(r,i),i+=s.length}return r},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)v(this,e,e+1)
return this},u.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2)
return this},u.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4)
return this},u.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?S(this,0,t):function(t,e,n){var r=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return C(this,e,n)
case"utf8":case"utf-8":return S(this,e,n)
case"ascii":return O(this,e,n)
case"latin1":case"binary":return A(this,e,n)
case"base64":return E(this,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,n)
default:if(r)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&e>=n)return 0
if(r>=i)return-1
if(e>=n)return 1
if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0
for(var o=i-r,s=n-e,a=Math.min(o,s),l=this.slice(r,i),c=t.slice(e,n),h=0;h<a;++h)if(l[h]!==c[h]){o=l[h],s=c[h]
break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return g(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return g(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0
else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e
if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return b(this,t,e,n)
case"utf8":case"utf-8":return y(this,t,e,n)
case"ascii":return _(this,t,e,n)
case"latin1":case"binary":return x(this,t,e,n)
case"base64":return w(this,t,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var T=4096
function O(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i])
return r}function A(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(t[i])
return r}function C(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=e;o<n;++o)i+=j(t[o])
return i}function I(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function P(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function B(t,e,n,r,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>i||e<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>t.length)throw new RangeError("Index out of range")}function L(t,e,n,r){e<0&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function M(t,e,n,r){e<0&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function R(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function N(t,e,n,r,o){return o||R(t,0,n,4),i.write(t,e,n,r,23,4),n+4}function U(t,e,n,r,o){return o||R(t,0,n,8),i.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length
if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=u.prototype
else{var i=e-t
n=new u(i,void 0)
for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length)
for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i
return r},u.prototype.readUInt8=function(t,e){return e||P(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||P(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||P(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||P(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length)
for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||P(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||P(t,2,this.length)
var n=this[t]|this[t+1]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||P(t,2,this.length)
var n=this[t+1]|this[t]<<8
return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||P(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||P(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||P(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||P(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||B(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255
return e+n},u.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||B(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255
return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
B(this,t,e,n,i-1,-i)}var o=0,s=1,a=0
for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255
return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
B(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0
for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255
return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return N(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return N(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return U(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return U(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0
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
else{var s=u.isBuffer(t)?t:z(new u(t,r).toString()),a=s.length
for(o=0;o<n-e;++o)this[o+e]=s[o%a]}return this}
var D=/[^+\/0-9A-Za-z-_]/g
function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){var n
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
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function $(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function K(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i]
return i}}).call(this,n(31))},function(t,e,n){var r=n(21)
t.exports=function(t,e,n){if(r(t),void 0===e)return t
switch(n){case 1:return function(n){return t.call(e,n)}
case 2:return function(n,r){return t.call(e,n,r)}
case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=n},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")
return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty
t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString
t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37)
t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict"
function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]}
r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(e),n.d(e,"default",function(){return p})
var i="undefined"!=typeof document
if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")
var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,l=!1,c=function(){},h=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
function p(t,e,n,i){l=n,h=i||{}
var s=r(t,e)
return v(s),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i];(u=o[a.id]).refs--,n.push(u)}e?v(s=r(t,e)):s=[]
for(i=0;i<n.length;i++){var u
if(0===(u=n[i]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]()
delete o[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id]
if(r){r.refs++
for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i])
for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]))
r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[]
for(i=0;i<n.parts.length;i++)s.push(m(n.parts[i]))
o[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style")
return t.type="text/css",s.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]')
if(r){if(l)return c
r.parentNode.removeChild(r)}if(d){var i=u++
r=a||(a=g()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=g(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap
r&&t.setAttribute("media",r)
h.ssrId&&t.setAttribute(f,e.id)
i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
if(t.styleSheet)t.styleSheet.cssText=n
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)}
return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return
e(t=r)}else n()}}var b=function(){var t=[]
return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()
function y(t,e,n,r){var i=n?"":r.css
if(t.styleSheet)t.styleSheet.cssText=b(e,i)
else{var o=document.createTextNode(i),s=t.childNodes
s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){var r=n(139)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("2df8f70b",r,!1,{})},function(t,e,n){var r=n(162)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("1a8735bc",r,!1,{})},function(t,e,n){var r=n(168)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("aa26c65e",r,!1,{})},function(t,e,n){var r=n(170)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("277b5fa0",r,!1,{})},function(t,e){var n
n=function(){return this}()
try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(18),i=n(5).document,o=r(i)&&r(i.createElement)
t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){"use strict"
var r=n(82)(!0)
n(49)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i
return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){var n=Math.ceil,r=Math.floor
t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t)
return t}},function(t,e){t.exports=!0},function(t,e,n){var r=n(87),i=n(53)
t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(50),i=n(37)
t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(36),i=Math.min
t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(51)("keys"),i=n(52)
t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(12).f,i=n(23),o=n(6)("toStringTag")
t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(56),i=n(6)("iterator"),o=n(19)
t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict"
var r=n(21)
t.exports.f=function(t){return new function(t){var e,n
this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor")
e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!function(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,s,a,u,l
if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e
var c=new Error('Uncaught, unspecified "error" event. ('+e+")")
throw c.context=e,c}if(o(n=this._events[t]))return!1
if(r(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),s=(l=n.slice()).length,u=0;u<s;u++)l[u].apply(this,a)
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
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(74))
e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict"
var r=n(38),i=n(7),o=n(83),s=n(11),a=n(19),u=n(84),l=n(43),c=n(90),h=n(6)("iterator"),f=!([].keys&&"next"in[].keys()),d=function(){return this}
t.exports=function(t,e,n,p,v,g,m){u(n,e,p)
var b,y,_,x=function(t){if(!f&&t in S)return S[t]
switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==v,E=!1,S=t.prototype,T=S[h]||S["@@iterator"]||v&&S[v],O=T||x(v),A=v?k?x("entries"):O:void 0,C="Array"==e&&S.entries||T
if(C&&(_=c(C.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),r||"function"==typeof _[h]||s(_,h,d)),k&&T&&"values"!==T.name&&(E=!0,O=function(){return T.call(this)}),r&&!m||!f&&!E&&S[h]||s(S,h,O),a[e]=O,a[w]=d,v)if(b={values:k?O:x("values"),keys:g?O:x("keys"),entries:A},m)for(y in b)y in S||o(S,y,b[y])
else i(i.P+i.F*(f||E),e,b)
return b}},function(t,e,n){var r=n(24)
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(3),i=n(5),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(38)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random()
t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).document
t.exports=r&&r.documentElement},function(t,e,n){n(91)
for(var r=n(5),i=n(11),o=n(19),s=n(6)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var l=a[u],c=r[l],h=c&&c.prototype
h&&!h[s]&&i(h,s,l),o[l]=o.Array}},function(t,e,n){var r=n(24),i=n(6)("toStringTag"),o="Arguments"==r(function(){return arguments}())
t.exports=function(t){var e,n,s
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(8)
t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return
throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(19),i=n(6)("iterator"),o=Array.prototype
t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(8),i=n(21),o=n(6)("species")
t.exports=function(t,e){var n,s=r(t).constructor
return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},function(t,e,n){var r,i,o,s=n(17),a=n(97),u=n(54),l=n(32),c=n(5),h=c.process,f=c.setImmediate,d=c.clearImmediate,p=c.MessageChannel,v=c.Dispatch,g=0,m={},b=function(){var t=+this
if(m.hasOwnProperty(t)){var e=m[t]
delete m[t],e()}},y=function(t){b.call(t.data)}
f&&d||(f=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++])
return m[++g]=function(){a("function"==typeof t?t:Function(t),e)},r(g),g},d=function(t){delete m[t]},"process"==n(24)(h)?r=function(t){h.nextTick(s(b,t,1))}:v&&v.now?r=function(t){v.now(s(b,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=y,r=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(r=function(t){c.postMessage(t+"","*")},c.addEventListener("message",y,!1)):r="onreadystatechange"in l("script")?function(t){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),b.call(t)}}:function(t){setTimeout(s(b,t,1),0)}),t.exports={set:f,clear:d}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(8),i=n(18),o=n(45)
t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e
var n=o.f(t)
return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(6)("iterator"),i=!1
try{var o=[7][r]()
o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1
var n=!1
try{var o=[7],s=o[r]()
s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r=n(14),i=n(15),o=n(10).Buffer,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],a=new Array(64)
function u(){this.init(),this._w=a,i.call(this,64,56)}function l(t,e,n){return n^t&(e^n)}function c(t,e,n){return t&e|n&(t|e)}function h(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function f(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function d(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function p(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}r(u,i),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0|this._f,v=0|this._g,g=0|this._h,m=0;m<16;++m)e[m]=t.readInt32BE(4*m)
for(;m<64;++m)e[m]=p(e[m-2])+e[m-7]+d(e[m-15])+e[m-16]|0
for(var b=0;b<64;++b){var y=g+f(a)+l(a,u,v)+s[b]+e[b]|0,_=h(n)+c(n,r,i)|0
g=v,v=u,u=a,a=o+y|0,o=i,i=r,r=n,n=y+_|0}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0,this._f=u+this._f|0,this._g=v+this._g|0,this._h=g+this._h|0},u.prototype._hash=function(){var t=o.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=u},function(t,e,n){var r=n(14),i=n(15),o=n(10).Buffer,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],a=new Array(160)
function u(){this.init(),this._w=a,i.call(this,128,112)}function l(t,e,n){return n^t&(e^n)}function c(t,e,n){return t&e|n&(t|e)}function h(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function f(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function v(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function g(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function m(t,e){return t>>>0<e>>>0?1:0}r(u,i),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,a=0|this._eh,u=0|this._fh,b=0|this._gh,y=0|this._hh,_=0|this._al,x=0|this._bl,w=0|this._cl,k=0|this._dl,E=0|this._el,S=0|this._fl,T=0|this._gl,O=0|this._hl,A=0;A<32;A+=2)e[A]=t.readInt32BE(4*A),e[A+1]=t.readInt32BE(4*A+4)
for(;A<160;A+=2){var C=e[A-30],I=e[A-30+1],P=d(C,I),B=p(I,C),L=v(C=e[A-4],I=e[A-4+1]),M=g(I,C),R=e[A-14],N=e[A-14+1],U=e[A-32],D=e[A-32+1],j=B+N|0,z=P+R+m(j,B)|0
z=(z=z+L+m(j=j+M|0,M)|0)+U+m(j=j+D|0,D)|0,e[A]=z,e[A+1]=j}for(var $=0;$<160;$+=2){z=e[$],j=e[$+1]
var K=c(n,r,i),F=c(_,x,w),V=h(n,_),Y=h(_,n),H=f(a,E),W=f(E,a),q=s[$],G=s[$+1],X=l(a,u,b),Z=l(E,S,T),J=O+W|0,Q=y+H+m(J,O)|0
Q=(Q=(Q=Q+X+m(J=J+Z|0,Z)|0)+q+m(J=J+G|0,G)|0)+z+m(J=J+j|0,j)|0
var tt=Y+F|0,et=V+K+m(tt,Y)|0
y=b,O=T,b=u,T=S,u=a,S=E,a=o+Q+m(E=k+J|0,k)|0,o=i,k=w,i=r,w=x,r=n,x=_,n=Q+et+m(_=J+tt|0,J)|0}this._al=this._al+_|0,this._bl=this._bl+x|0,this._cl=this._cl+w|0,this._dl=this._dl+k|0,this._el=this._el+E|0,this._fl=this._fl+S|0,this._gl=this._gl+T|0,this._hl=this._hl+O|0,this._ah=this._ah+n+m(this._al,_)|0,this._bh=this._bh+r+m(this._bl,x)|0,this._ch=this._ch+i+m(this._cl,w)|0,this._dh=this._dh+o+m(this._dl,k)|0,this._eh=this._eh+a+m(this._el,E)|0,this._fh=this._fh+u+m(this._fl,S)|0,this._gh=this._gh+b+m(this._gl,T)|0,this._hh=this._hh+y+m(this._hl,O)|0},u.prototype._hash=function(){var t=o.allocUnsafe(64)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=u},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r=s(n(47)),i=s(n(48)),o=n(79)
function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v";(0,r.default)(this,e),this.transport=t,t.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],n)}return(0,i.default)(e,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(t){var e=1===t[0]||t[1]<2
return{version:t[1]+"."+t[2]+"."+t[3],multiOpsEnabled:e}})}},{key:"getPublicKey",value:function(e,n,r){var i=this;(0,o.checkStellarBip32Path)(e)
var s=[],a=void 0,u=(0,o.splitPath)(e),l=new t(1+4*u.length)
l[0]=u.length,u.forEach(function(t,e){l.writeUInt32BE(t,1+4*e)})
var c=t.from("via lumina","ascii")
s.push(t.concat([l,c]))
var h=!1
return(0,o.foreach)(s,function(e){return i.transport.send(224,h?16:2,n?1:0,r?1:0,e,[36864,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(h=!0,s.push(t.alloc(0))),a=e})}).then(function(){var t=0,e=a.slice(t,t+32)
t+=32
var r=(0,o.encodeEd25519PublicKey)(e)
if(n){var i=a.slice(t,t+64)
if(!(0,o.verifyEd25519Signature)(c,i,e))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:r}})}},{key:"signTransaction",value:function(e,n){var r=this
if((0,o.checkStellarBip32Path)(e),n.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+n.length)
var i=[],s=void 0,a=(0,o.splitPath)(e),u=1+4*a.length,l=t.alloc(u)
l[0]=a.length,a.forEach(function(t,e){l.writeUInt32BE(t,1+4*e)})
var c=150-u
if(n.length<=c)i.push(t.concat([l,n]))
else{var h=t.alloc(c),f=0
for(n.copy(h,0,f,c),i.push(t.concat([l,h])),f+=c;f<n.length;){var d=n.length-f
c=d<150?d:150,h=t.alloc(c),n.copy(h,0,f,f+c),f+=c,i.push(h)}}var p=!1
return(0,o.foreach)(i,function(e,n){return r.transport.send(224,p?16:4,0===n?0:128,n===i.length-1?0:128,e,[36864,27013,27684,27685,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(p=!0,i.push(t.alloc(0))),s=e})}).then(function(){var i=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===i)return{signature:t.from(s.slice(0,s.length-2))}
if(27684===i)return r.signHash_private(e,(0,o.hash)(n))
if(27685===i)return r.signHash_private(e,(0,o.hash)(n))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(t,e){return(0,o.checkStellarBip32Path)(t),this.signHash_private(t,e)}},{key:"signHash_private",value:function(e,n){var r=this,i=[],s=void 0,a=(0,o.splitPath)(e),u=t.alloc(1+4*a.length)
u[0]=a.length,a.forEach(function(t,e){u.writeUInt32BE(t,1+4*e)}),i.push(t.concat([u,n]))
var l=!1
return(0,o.foreach)(i,function(e){return r.transport.send(224,l?16:8,0,0,e,[36864,27013,27750,27904,28162]).then(function(e){28162===t.from(e.slice(e.length-2)).readUInt16BE(0)&&(l=!0,i.push(t.alloc(0))),s=e})}).then(function(){var e=t.from(s.slice(s.length-2)).readUInt16BE(0)
if(36864===e)return{signature:t.from(s.slice(0,s.length-2))}
throw 27013===e?new Error("Transaction approval request was rejected"):27904===e?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),e}()
e.default=a}).call(this,n(16).Buffer)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(112),s=n(115),a=function(t){return t&&t.__esModule?t:{default:t}}(s)
function u(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function r(i,o){try{var s=e[i](o),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})
t(a)}("next")})}}function l(t,e,n){var r=new s.TransportError(e,n)
return r.originalError=t,r}var c=function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},h=function(t){return t.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*t.length%4)}
function f(e,n,r,i,s){var a=function(e,n){for(var r=t.alloc(e.length),i=0;i<e.length;i++)r[i]=e[i]^n[i%n.length]
return r}(e,i),u=t.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),l={version:"U2F_V2",keyHandle:c(a.toString("base64")),challenge:c(u.toString("base64")),appId:location.origin}
return r&&r("=> "+e.toString("hex")),(0,o.sign)(l,n/1e3).then(function(e){var n=e.signatureData
if("string"==typeof n){var i=t.from(h(n),"base64"),o=void 0
return o=s?i.slice(5):i,r&&r("<= "+o.toString("hex")),o}throw e})}var d=[]
function p(t){return 5===t.metaData.code}var v=function(e){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)
var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))
return t.unwrap=!0,d.push(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a.default),i(n,null,[{key:"open",value:function(){var t=u(regeneratorRuntime.mark(function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new n)
case 1:case"end":return t.stop()}},t,this)}))
return function(e){return t.apply(this,arguments)}}()}]),i(n,[{key:"exchange",value:function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return t.abrupt("return",t.sent)
case 6:if(t.prev=6,t.t0=t.catch(0),!("object"===r(t.t0.metaData))){t.next=14
break}throw p(t.t0)&&(d.forEach(function(t){return t.emit("disconnect")}),d=[]),l(t.t0,"Failed to sign with Ledger device: U2F "+t.t0.metaData.type,"U2F_"+t.t0.metaData.code)
case 14:throw t.t0
case 15:case"end":return t.stop()}},t,this,[[0,6]])}))
return function(e){return t.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(e){this.scrambleKey=t.from(e,"ascii")}},{key:"setUnwrap",value:function(t){this.unwrap=t}},{key:"close",value:function(){var t=d.indexOf(this)
if(-1===t)throw new Error("invalid transport instance")
return d.splice(t,1),Promise.resolve()}}]),n}()
v.isSupported=o.isSupported,v.list=function(){return(0,o.isSupported)().then(function(t){return t?[null]:[]})},v.listen=function(t){var e=!1
return(0,o.isSupported)().then(function(n){e||(n?(t.next({type:"add",descriptor:null}),t.complete()):t.error(new s.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){e=!0}}},e.default=v}).call(this,n(16).Buffer)},,,,function(t,e,n){"use strict"
e.byteLength=function(t){var e=l(t),n=e[0],r=e[1]
return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=l(t),r=n[0],s=n[1],a=new o(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),u=0,c=s>0?r-4:r,h=0;h<c;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e
2===s&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,a[u++]=255&e)
1===s&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e)
return a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(h(t,s,s+16383>a?a:s+16383))
1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="))
return o.join("")}
for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)r[a]=s[a],i[s.charCodeAt(a)]=a
function l(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var n=t.indexOf("=")
return-1===n&&(n=e),[n,n===e?0:4-n%4]}function c(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function h(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(c(r))
return i.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,l=u>>1,c=-7,h=n?i-1:0,f=n?-1:1,d=t[e+h]
for(h+=f,o=d&(1<<-c)-1,d>>=-c,c+=a;c>0;o=256*o+t[e+h],h+=f,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=r;c>0;s=256*s+t[e+h],h+=f,c-=8);if(0===o)o=1-l
else{if(o===u)return s?NaN:1/0*(d?-1:1)
s+=Math.pow(2,r),o-=l}return(d?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,u,l=8*o-i-1,c=(1<<l)-1,h=c>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=c?(a=0,s=c):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[n+d]=255&s,d+=p,s/=256,l-=8);t[n+d-p]|=128*v}},function(t,e){var n={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){n(76)
var r=n(3).Object
t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7)
r(r.S+r.F*!n(13),"Object",{defineProperty:n(12).f})},function(t,e,n){t.exports=!n(13)&&!n(22)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(18)
t.exports=function(t,e){if(!r(t))return t
var n,i
if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i
if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i
throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0})
var r=a(n(34))
e.splitPath=function(t){var e=[]
return t.split("/").forEach(function(t){var n=parseInt(t,10)
isNaN(n)||(t.length>1&&"'"===t[t.length-1]&&(n+=2147483648),e.push(n))}),e},e.foreach=function(t,e){return r.default.resolve().then(function(){return function t(n,r,i){return n>=r.length?i:e(r[n],n).then(function(e){return i.push(e),t(n+1,r,i)})}(0,t,[])})},e.crc16xmodem=u,e.encodeEd25519PublicKey=function(e){var n=t.from(e),r=t.from([48]),o=t.concat([r,n]),s=t.alloc(2)
s.writeUInt16LE(u(o),0)
var a=t.concat([o,s])
return i.default.encode(a)},e.verifyEd25519Signature=function(t,e,n){return o.default.sign.detached.verify(new Uint8Array(t.toJSON().data),new Uint8Array(e.toJSON().data),new Uint8Array(n.toJSON().data))},e.hash=function(t){var e=new s.sha256
return e.update(t,"utf8"),e.digest()},e.checkStellarBip32Path=function(t){t.split("/").forEach(function(t){if(!t.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var i=a(n(104)),o=a(n(105)),s=n(107)
function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){for(var n=void 0!==e?~~e:0,r=0;r<t.length;r++){var i=n>>>8&255
i^=255&t[r],n=n<<8&65535,n^=i^=i>>>4,n^=i=i<<5&65535,n^=i=i<<7&65535}return n}}).call(this,n(16).Buffer)},function(t,e,n){n(81),n(35),n(55),n(94),n(102),n(103),t.exports=n(3).Promise},function(t,e){},function(t,e,n){var r=n(36),i=n(37)
t.exports=function(t){return function(e,n){var o,s,a=String(i(e)),u=r(n),l=a.length
return u<0||u>=l?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===l||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):o:t?a.slice(u,u+2):s-56320+(o-55296<<10)+65536}}},function(t,e,n){t.exports=n(11)},function(t,e,n){"use strict"
var r=n(85),i=n(33),o=n(43),s={}
n(11)(s,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(8),i=n(86),o=n(53),s=n(42)("IE_PROTO"),a=function(){},u=function(){var t,e=n(32)("iframe"),r=o.length
for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]]
return u()}
t.exports=Object.create||function(t,e){var n
return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(12),i=n(8),o=n(39)
t.exports=n(13)?Object.defineProperties:function(t,e){i(t)
for(var n,s=o(e),a=s.length,u=0;a>u;)r.f(t,n=s[u++],e[n])
return t}},function(t,e,n){var r=n(23),i=n(40),o=n(88)(!1),s=n(42)("IE_PROTO")
t.exports=function(t,e){var n,a=i(t),u=0,l=[]
for(n in a)n!=s&&r(a,n)&&l.push(n)
for(;e.length>u;)r(a,n=e[u++])&&(~o(l,n)||l.push(n))
return l}},function(t,e,n){var r=n(40),i=n(41),o=n(89)
t.exports=function(t){return function(e,n,s){var a,u=r(e),l=i(u.length),c=o(s,l)
if(t&&n!=n){for(;l>c;)if((a=u[c++])!=a)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0
return!t&&-1}}},function(t,e,n){var r=n(36),i=Math.max,o=Math.min
t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(23),i=n(25),o=n(42)("IE_PROTO"),s=Object.prototype
t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict"
var r=n(92),i=n(93),o=n(19),s=n(40)
t.exports=n(49)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++
return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict"
var r,i,o,s,a=n(38),u=n(5),l=n(17),c=n(56),h=n(7),f=n(18),d=n(21),p=n(95),v=n(96),g=n(59),m=n(60).set,b=n(98)(),y=n(45),_=n(61),x=n(99),w=n(62),k=u.TypeError,E=u.process,S=E&&E.versions,T=S&&S.v8||"",O=u.Promise,A="process"==c(E),C=function(){},I=i=y.f,P=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n(6)("species")]=function(t){t(C,C)}
return(A||"function"==typeof PromiseRejectionEvent)&&t.then(C)instanceof e&&0!==T.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),B=function(t){var e
return!(!f(t)||"function"!=typeof(e=t.then))&&e},L=function(t,e){if(!t._n){t._n=!0
var n=t._c
b(function(){for(var r=t._v,i=1==t._s,o=0,s=function(e){var n,o,s,a=i?e.ok:e.fail,u=e.resolve,l=e.reject,c=e.domain
try{a?(i||(2==t._h&&N(t),t._h=1),!0===a?n=r:(c&&c.enter(),n=a(r),c&&(c.exit(),s=!0)),n===e.promise?l(k("Promise-chain cycle")):(o=B(n))?o.call(n,u,l):u(n)):l(r)}catch(t){c&&!s&&c.exit(),l(t)}};n.length>o;)s(n[o++])
t._c=[],t._n=!1,e&&!t._h&&M(t)})}},M=function(t){m.call(u,function(){var e,n,r,i=t._v,o=R(t)
if(o&&(e=_(function(){A?E.emit("unhandledRejection",i,t):(n=u.onunhandledrejection)?n({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=A||R(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(t){m.call(u,function(){var e
A?E.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},U=function(t){var e=this
e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),L(e,!0))},D=function(t){var e,n=this
if(!n._d){n._d=!0,n=n._w||n
try{if(n===t)throw k("Promise can't be resolved itself");(e=B(t))?b(function(){var r={_w:n,_d:!1}
try{e.call(t,l(D,r,1),l(U,r,1))}catch(t){U.call(r,t)}}):(n._v=t,n._s=1,L(n,!1))}catch(t){U.call({_w:n,_d:!1},t)}}}
P||(O=function(t){p(this,O,"Promise","_h"),d(t),r.call(this)
try{t(l(D,this,1),l(U,this,1))}catch(t){U.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(100)(O.prototype,{then:function(t,e){var n=I(g(this,O))
return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=A?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&L(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r
this.promise=t,this.resolve=l(D,t,1),this.reject=l(U,t,1)},y.f=I=function(t){return t===O||t===s?new o(t):i(t)}),h(h.G+h.W+h.F*!P,{Promise:O}),n(43)(O,"Promise"),n(101)("Promise"),s=n(3).Promise,h(h.S+h.F*!P,"Promise",{reject:function(t){var e=I(this)
return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(a||!P),"Promise",{resolve:function(t){return w(a&&this===s?O:this,t)}}),h(h.S+h.F*!(P&&n(63)(function(t){O.all(t).catch(C)})),"Promise",{all:function(t){var e=this,n=I(e),r=n.resolve,i=n.reject,o=_(function(){var n=[],o=0,s=1
v(t,!1,function(t){var a=o++,u=!1
n.push(void 0),s++,e.resolve(t).then(function(t){u||(u=!0,n[a]=t,--s||r(n))},i)}),--s||r(n)})
return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=I(e),r=n.reject,i=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})})
return i.e&&r(i.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")
return t}},function(t,e,n){var r=n(17),i=n(57),o=n(58),s=n(8),a=n(41),u=n(44),l={},c={};(e=t.exports=function(t,e,n,h,f){var d,p,v,g,m=f?function(){return t}:u(t),b=r(n,h,e?2:1),y=0
if("function"!=typeof m)throw TypeError(t+" is not iterable!")
if(o(m)){for(d=a(t.length);d>y;y++)if((g=e?b(s(p=t[y])[0],p[1]):b(t[y]))===l||g===c)return g}else for(v=m.call(t);!(p=v.next()).done;)if((g=i(v,b,p.value,e))===l||g===c)return g}).BREAK=l,e.RETURN=c},function(t,e){t.exports=function(t,e,n){var r=void 0===n
switch(e.length){case 0:return r?t():t.call(n)
case 1:return r?t(e[0]):t.call(n,e[0])
case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1])
case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2])
case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(5),i=n(60).set,o=r.MutationObserver||r.WebKitMutationObserver,s=r.process,a=r.Promise,u="process"==n(24)(s)
t.exports=function(){var t,e,n,l=function(){var r,i
for(u&&(r=s.domain)&&r.exit();t;){i=t.fn,t=t.next
try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()}
if(u)n=function(){s.nextTick(l)}
else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var c=a.resolve(void 0)
n=function(){c.then(l)}}else n=function(){i.call(r,l)}
else{var h=!0,f=document.createTextNode("")
new o(l).observe(f,{characterData:!0}),n=function(){f.data=h=!h}}return function(r){var i={fn:r,next:void 0}
e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){var r=n(5).navigator
t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(11)
t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i])
return t}},function(t,e,n){"use strict"
var r=n(5),i=n(3),o=n(12),s=n(13),a=n(6)("species")
t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t]
s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict"
var r=n(7),i=n(3),o=n(5),s=n(59),a=n(62)
r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),n="function"==typeof t
return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict"
var r=n(7),i=n(45),o=n(61)
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
var s=e(),a=e([1]),u=e([56129,1]),l=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),h=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),f=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),d=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function p(t,e,n,r){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n,t[e+4]=r>>24&255,t[e+5]=r>>16&255,t[e+6]=r>>8&255,t[e+7]=255&r}function v(t,e,n,r,i){var o,s=0
for(o=0;o<i;o++)s|=t[e+o]^n[r+o]
return(1&s-1>>>8)-1}function g(t,e,n,r){return v(t,e,n,r,16)}function m(t,e,n,r){return v(t,e,n,r,32)}function b(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,l=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,h=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,f=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,d=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,v=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,m=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,x=o,w=s,k=a,E=u,S=l,T=c,O=h,A=f,C=d,I=p,P=v,B=g,L=m,M=b,R=y,N=_,U=0;U<20;U+=2)x^=(i=(L^=(i=(C^=(i=(S^=(i=x+L|0)<<7|i>>>25)+x|0)<<9|i>>>23)+S|0)<<13|i>>>19)+C|0)<<18|i>>>14,T^=(i=(w^=(i=(M^=(i=(I^=(i=T+w|0)<<7|i>>>25)+T|0)<<9|i>>>23)+I|0)<<13|i>>>19)+M|0)<<18|i>>>14,P^=(i=(O^=(i=(k^=(i=(R^=(i=P+O|0)<<7|i>>>25)+P|0)<<9|i>>>23)+R|0)<<13|i>>>19)+k|0)<<18|i>>>14,N^=(i=(B^=(i=(A^=(i=(E^=(i=N+B|0)<<7|i>>>25)+N|0)<<9|i>>>23)+E|0)<<13|i>>>19)+A|0)<<18|i>>>14,x^=(i=(E^=(i=(k^=(i=(w^=(i=x+E|0)<<7|i>>>25)+x|0)<<9|i>>>23)+w|0)<<13|i>>>19)+k|0)<<18|i>>>14,T^=(i=(S^=(i=(A^=(i=(O^=(i=T+S|0)<<7|i>>>25)+T|0)<<9|i>>>23)+O|0)<<13|i>>>19)+A|0)<<18|i>>>14,P^=(i=(I^=(i=(C^=(i=(B^=(i=P+I|0)<<7|i>>>25)+P|0)<<9|i>>>23)+B|0)<<13|i>>>19)+C|0)<<18|i>>>14,N^=(i=(R^=(i=(M^=(i=(L^=(i=N+R|0)<<7|i>>>25)+N|0)<<9|i>>>23)+L|0)<<13|i>>>19)+M|0)<<18|i>>>14
x=x+o|0,w=w+s|0,k=k+a|0,E=E+u|0,S=S+l|0,T=T+c|0,O=O+h|0,A=A+f|0,C=C+d|0,I=I+p|0,P=P+v|0,B=B+g|0,L=L+m|0,M=M+b|0,R=R+y|0,N=N+_|0,t[0]=x>>>0&255,t[1]=x>>>8&255,t[2]=x>>>16&255,t[3]=x>>>24&255,t[4]=w>>>0&255,t[5]=w>>>8&255,t[6]=w>>>16&255,t[7]=w>>>24&255,t[8]=k>>>0&255,t[9]=k>>>8&255,t[10]=k>>>16&255,t[11]=k>>>24&255,t[12]=E>>>0&255,t[13]=E>>>8&255,t[14]=E>>>16&255,t[15]=E>>>24&255,t[16]=S>>>0&255,t[17]=S>>>8&255,t[18]=S>>>16&255,t[19]=S>>>24&255,t[20]=T>>>0&255,t[21]=T>>>8&255,t[22]=T>>>16&255,t[23]=T>>>24&255,t[24]=O>>>0&255,t[25]=O>>>8&255,t[26]=O>>>16&255,t[27]=O>>>24&255,t[28]=A>>>0&255,t[29]=A>>>8&255,t[30]=A>>>16&255,t[31]=A>>>24&255,t[32]=C>>>0&255,t[33]=C>>>8&255,t[34]=C>>>16&255,t[35]=C>>>24&255,t[36]=I>>>0&255,t[37]=I>>>8&255,t[38]=I>>>16&255,t[39]=I>>>24&255,t[40]=P>>>0&255,t[41]=P>>>8&255,t[42]=P>>>16&255,t[43]=P>>>24&255,t[44]=B>>>0&255,t[45]=B>>>8&255,t[46]=B>>>16&255,t[47]=B>>>24&255,t[48]=L>>>0&255,t[49]=L>>>8&255,t[50]=L>>>16&255,t[51]=L>>>24&255,t[52]=M>>>0&255,t[53]=M>>>8&255,t[54]=M>>>16&255,t[55]=M>>>24&255,t[56]=R>>>0&255,t[57]=R>>>8&255,t[58]=R>>>16&255,t[59]=R>>>24&255,t[60]=N>>>0&255,t[61]=N>>>8&255,t[62]=N>>>16&255,t[63]=N>>>24&255}(t,e,n,r)}function y(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,u=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,l=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,h=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,f=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,d=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,v=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,m=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,b=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,x=0;x<20;x+=2)o^=(i=(m^=(i=(d^=(i=(l^=(i=o+m|0)<<7|i>>>25)+o|0)<<9|i>>>23)+l|0)<<13|i>>>19)+d|0)<<18|i>>>14,c^=(i=(s^=(i=(b^=(i=(p^=(i=c+s|0)<<7|i>>>25)+c|0)<<9|i>>>23)+p|0)<<13|i>>>19)+b|0)<<18|i>>>14,v^=(i=(h^=(i=(a^=(i=(y^=(i=v+h|0)<<7|i>>>25)+v|0)<<9|i>>>23)+y|0)<<13|i>>>19)+a|0)<<18|i>>>14,_^=(i=(g^=(i=(f^=(i=(u^=(i=_+g|0)<<7|i>>>25)+_|0)<<9|i>>>23)+u|0)<<13|i>>>19)+f|0)<<18|i>>>14,o^=(i=(u^=(i=(a^=(i=(s^=(i=o+u|0)<<7|i>>>25)+o|0)<<9|i>>>23)+s|0)<<13|i>>>19)+a|0)<<18|i>>>14,c^=(i=(l^=(i=(f^=(i=(h^=(i=c+l|0)<<7|i>>>25)+c|0)<<9|i>>>23)+h|0)<<13|i>>>19)+f|0)<<18|i>>>14,v^=(i=(p^=(i=(d^=(i=(g^=(i=v+p|0)<<7|i>>>25)+v|0)<<9|i>>>23)+g|0)<<13|i>>>19)+d|0)<<18|i>>>14,_^=(i=(y^=(i=(b^=(i=(m^=(i=_+y|0)<<7|i>>>25)+_|0)<<9|i>>>23)+m|0)<<13|i>>>19)+b|0)<<18|i>>>14
t[0]=o>>>0&255,t[1]=o>>>8&255,t[2]=o>>>16&255,t[3]=o>>>24&255,t[4]=c>>>0&255,t[5]=c>>>8&255,t[6]=c>>>16&255,t[7]=c>>>24&255,t[8]=v>>>0&255,t[9]=v>>>8&255,t[10]=v>>>16&255,t[11]=v>>>24&255,t[12]=_>>>0&255,t[13]=_>>>8&255,t[14]=_>>>16&255,t[15]=_>>>24&255,t[16]=h>>>0&255,t[17]=h>>>8&255,t[18]=h>>>16&255,t[19]=h>>>24&255,t[20]=f>>>0&255,t[21]=f>>>8&255,t[22]=f>>>16&255,t[23]=f>>>24&255,t[24]=d>>>0&255,t[25]=d>>>8&255,t[26]=d>>>16&255,t[27]=d>>>24&255,t[28]=p>>>0&255,t[29]=p>>>8&255,t[30]=p>>>16&255,t[31]=p>>>24&255}(t,e,n,r)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function x(t,e,n,r,i,o,s){var a,u,l=new Uint8Array(16),c=new Uint8Array(64)
for(u=0;u<16;u++)l[u]=0
for(u=0;u<8;u++)l[u]=o[u]
for(;i>=64;){for(b(c,l,s,_),u=0;u<64;u++)t[e+u]=n[r+u]^c[u]
for(a=1,u=8;u<16;u++)a=a+(255&l[u])|0,l[u]=255&a,a>>>=8
i-=64,e+=64,r+=64}if(i>0)for(b(c,l,s,_),u=0;u<i;u++)t[e+u]=n[r+u]^c[u]
return 0}function w(t,e,n,r,i){var o,s,a=new Uint8Array(16),u=new Uint8Array(64)
for(s=0;s<16;s++)a[s]=0
for(s=0;s<8;s++)a[s]=r[s]
for(;n>=64;){for(b(u,a,i,_),s=0;s<64;s++)t[e+s]=u[s]
for(o=1,s=8;s<16;s++)o=o+(255&a[s])|0,a[s]=255&o,o>>>=8
n-=64,e+=64}if(n>0)for(b(u,a,i,_),s=0;s<n;s++)t[e+s]=u[s]
return 0}function k(t,e,n,r,i){var o=new Uint8Array(32)
y(o,r,i,_)
for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=r[a+16]
return w(t,e,n,s,o)}function E(t,e,n,r,i,o,s){var a=new Uint8Array(32)
y(a,o,s,_)
for(var u=new Uint8Array(8),l=0;l<8;l++)u[l]=o[l+16]
return x(t,e,n,r,i,u,a)}var S=function(t){var e,n,r,i,o,s,a,u
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,n=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|n<<3),r=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(n>>>10|r<<6),i=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(r>>>7|i<<9),o=255&t[8]|(255&t[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,s=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(o>>>14|s<<2),a=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(s>>>11|a<<5),u=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(a>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8}
function T(t,e,n,r,i,o){var s=new S(o)
return s.update(n,r,i),s.finish(t,e),0}function O(t,e,n,r,i,o){var s=new Uint8Array(16)
return T(s,0,n,r,i,o),g(t,e,s,0)}function A(t,e,n,r,i){var o
if(n<32)return-1
for(E(t,0,e,0,n,r,i),T(t,16,t,32,n-32,t),o=0;o<16;o++)t[o]=0
return 0}function C(t,e,n,r,i){var o,s=new Uint8Array(32)
if(n<32)return-1
if(k(s,0,32,r,i),0!==O(e,16,e,32,n-32,s))return-1
for(E(t,0,e,0,n,r,i),o=0;o<32;o++)t[o]=0
return 0}function I(t,e){var n
for(n=0;n<16;n++)t[n]=0|e[n]}function P(t){var e,n,r=1
for(e=0;e<16;e++)n=t[e]+r+65535,r=Math.floor(n/65536),t[e]=n-65536*r
t[0]+=r-1+37*(r-1)}function B(t,e,n){for(var r,i=~(n-1),o=0;o<16;o++)r=i&(t[o]^e[o]),t[o]^=r,e[o]^=r}function L(t,n){var r,i,o,s=e(),a=e()
for(r=0;r<16;r++)a[r]=n[r]
for(P(a),P(a),P(a),i=0;i<2;i++){for(s[0]=a[0]-65517,r=1;r<15;r++)s[r]=a[r]-65535-(s[r-1]>>16&1),s[r-1]&=65535
s[15]=a[15]-32767-(s[14]>>16&1),o=s[15]>>16&1,s[14]&=65535,B(a,s,1-o)}for(r=0;r<16;r++)t[2*r]=255&a[r],t[2*r+1]=a[r]>>8}function M(t,e){var n=new Uint8Array(32),r=new Uint8Array(32)
return L(n,t),L(r,e),m(n,0,r,0)}function R(t){var e=new Uint8Array(32)
return L(e,t),1&e[0]}function N(t,e){var n
for(n=0;n<16;n++)t[n]=e[2*n]+(e[2*n+1]<<8)
t[15]&=32767}function U(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]+n[r]}function D(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]-n[r]}function j(t,e,n){var r,i,o=0,s=0,a=0,u=0,l=0,c=0,h=0,f=0,d=0,p=0,v=0,g=0,m=0,b=0,y=0,_=0,x=0,w=0,k=0,E=0,S=0,T=0,O=0,A=0,C=0,I=0,P=0,B=0,L=0,M=0,R=0,N=n[0],U=n[1],D=n[2],j=n[3],z=n[4],$=n[5],K=n[6],F=n[7],V=n[8],Y=n[9],H=n[10],W=n[11],q=n[12],G=n[13],X=n[14],Z=n[15]
o+=(r=e[0])*N,s+=r*U,a+=r*D,u+=r*j,l+=r*z,c+=r*$,h+=r*K,f+=r*F,d+=r*V,p+=r*Y,v+=r*H,g+=r*W,m+=r*q,b+=r*G,y+=r*X,_+=r*Z,s+=(r=e[1])*N,a+=r*U,u+=r*D,l+=r*j,c+=r*z,h+=r*$,f+=r*K,d+=r*F,p+=r*V,v+=r*Y,g+=r*H,m+=r*W,b+=r*q,y+=r*G,_+=r*X,x+=r*Z,a+=(r=e[2])*N,u+=r*U,l+=r*D,c+=r*j,h+=r*z,f+=r*$,d+=r*K,p+=r*F,v+=r*V,g+=r*Y,m+=r*H,b+=r*W,y+=r*q,_+=r*G,x+=r*X,w+=r*Z,u+=(r=e[3])*N,l+=r*U,c+=r*D,h+=r*j,f+=r*z,d+=r*$,p+=r*K,v+=r*F,g+=r*V,m+=r*Y,b+=r*H,y+=r*W,_+=r*q,x+=r*G,w+=r*X,k+=r*Z,l+=(r=e[4])*N,c+=r*U,h+=r*D,f+=r*j,d+=r*z,p+=r*$,v+=r*K,g+=r*F,m+=r*V,b+=r*Y,y+=r*H,_+=r*W,x+=r*q,w+=r*G,k+=r*X,E+=r*Z,c+=(r=e[5])*N,h+=r*U,f+=r*D,d+=r*j,p+=r*z,v+=r*$,g+=r*K,m+=r*F,b+=r*V,y+=r*Y,_+=r*H,x+=r*W,w+=r*q,k+=r*G,E+=r*X,S+=r*Z,h+=(r=e[6])*N,f+=r*U,d+=r*D,p+=r*j,v+=r*z,g+=r*$,m+=r*K,b+=r*F,y+=r*V,_+=r*Y,x+=r*H,w+=r*W,k+=r*q,E+=r*G,S+=r*X,T+=r*Z,f+=(r=e[7])*N,d+=r*U,p+=r*D,v+=r*j,g+=r*z,m+=r*$,b+=r*K,y+=r*F,_+=r*V,x+=r*Y,w+=r*H,k+=r*W,E+=r*q,S+=r*G,T+=r*X,O+=r*Z,d+=(r=e[8])*N,p+=r*U,v+=r*D,g+=r*j,m+=r*z,b+=r*$,y+=r*K,_+=r*F,x+=r*V,w+=r*Y,k+=r*H,E+=r*W,S+=r*q,T+=r*G,O+=r*X,A+=r*Z,p+=(r=e[9])*N,v+=r*U,g+=r*D,m+=r*j,b+=r*z,y+=r*$,_+=r*K,x+=r*F,w+=r*V,k+=r*Y,E+=r*H,S+=r*W,T+=r*q,O+=r*G,A+=r*X,C+=r*Z,v+=(r=e[10])*N,g+=r*U,m+=r*D,b+=r*j,y+=r*z,_+=r*$,x+=r*K,w+=r*F,k+=r*V,E+=r*Y,S+=r*H,T+=r*W,O+=r*q,A+=r*G,C+=r*X,I+=r*Z,g+=(r=e[11])*N,m+=r*U,b+=r*D,y+=r*j,_+=r*z,x+=r*$,w+=r*K,k+=r*F,E+=r*V,S+=r*Y,T+=r*H,O+=r*W,A+=r*q,C+=r*G,I+=r*X,P+=r*Z,m+=(r=e[12])*N,b+=r*U,y+=r*D,_+=r*j,x+=r*z,w+=r*$,k+=r*K,E+=r*F,S+=r*V,T+=r*Y,O+=r*H,A+=r*W,C+=r*q,I+=r*G,P+=r*X,B+=r*Z,b+=(r=e[13])*N,y+=r*U,_+=r*D,x+=r*j,w+=r*z,k+=r*$,E+=r*K,S+=r*F,T+=r*V,O+=r*Y,A+=r*H,C+=r*W,I+=r*q,P+=r*G,B+=r*X,L+=r*Z,y+=(r=e[14])*N,_+=r*U,x+=r*D,w+=r*j,k+=r*z,E+=r*$,S+=r*K,T+=r*F,O+=r*V,A+=r*Y,C+=r*H,I+=r*W,P+=r*q,B+=r*G,L+=r*X,M+=r*Z,_+=(r=e[15])*N,s+=38*(w+=r*D),a+=38*(k+=r*j),u+=38*(E+=r*z),l+=38*(S+=r*$),c+=38*(T+=r*K),h+=38*(O+=r*F),f+=38*(A+=r*V),d+=38*(C+=r*Y),p+=38*(I+=r*H),v+=38*(P+=r*W),g+=38*(B+=r*q),m+=38*(L+=r*G),b+=38*(M+=r*X),y+=38*(R+=r*Z),o=(r=(o+=38*(x+=r*U))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o=(r=(o+=i-1+37*(i-1))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o+=i-1+37*(i-1),t[0]=o,t[1]=s,t[2]=a,t[3]=u,t[4]=l,t[5]=c,t[6]=h,t[7]=f,t[8]=d,t[9]=p,t[10]=v,t[11]=g,t[12]=m,t[13]=b,t[14]=y,t[15]=_}function z(t,e){j(t,e,e)}function $(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=253;r>=0;r--)z(i,i),2!==r&&4!==r&&j(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}function K(t,n,r){var i,o,s=new Uint8Array(32),a=new Float64Array(80),l=e(),c=e(),h=e(),f=e(),d=e(),p=e()
for(o=0;o<31;o++)s[o]=n[o]
for(s[31]=127&n[31]|64,s[0]&=248,N(a,r),o=0;o<16;o++)c[o]=a[o],f[o]=l[o]=h[o]=0
for(l[0]=f[0]=1,o=254;o>=0;--o)B(l,c,i=s[o>>>3]>>>(7&o)&1),B(h,f,i),U(d,l,h),D(l,l,h),U(h,c,f),D(c,c,f),z(f,d),z(p,l),j(l,h,l),j(h,c,d),U(d,l,h),D(l,l,h),z(c,l),D(h,f,p),j(l,h,u),U(l,l,f),j(h,h,l),j(l,f,p),j(f,c,a),z(c,d),B(l,c,i),B(h,f,i)
for(o=0;o<16;o++)a[o+16]=l[o],a[o+32]=h[o],a[o+48]=c[o],a[o+64]=f[o]
var v=a.subarray(32),g=a.subarray(16)
return $(v,v),j(g,g,v),L(t,g),0}function F(t,e){return K(t,e,o)}function V(t,e){return r(e,32),F(t,e)}function Y(t,e,n){var r=new Uint8Array(32)
return K(r,n,e),y(t,i,r,_)}S.prototype.blocks=function(t,e,n){for(var r,i,o,s,a,u,l,c,h,f,d,p,v,g,m,b,y,_,x,w=this.fin?0:2048,k=this.h[0],E=this.h[1],S=this.h[2],T=this.h[3],O=this.h[4],A=this.h[5],C=this.h[6],I=this.h[7],P=this.h[8],B=this.h[9],L=this.r[0],M=this.r[1],R=this.r[2],N=this.r[3],U=this.r[4],D=this.r[5],j=this.r[6],z=this.r[7],$=this.r[8],K=this.r[9];n>=16;)k+=8191&(r=255&t[e+0]|(255&t[e+1])<<8),E+=8191&(r>>>13|(i=255&t[e+2]|(255&t[e+3])<<8)<<3),S+=8191&(i>>>10|(o=255&t[e+4]|(255&t[e+5])<<8)<<6),T+=8191&(o>>>7|(s=255&t[e+6]|(255&t[e+7])<<8)<<9),O+=8191&(s>>>4|(a=255&t[e+8]|(255&t[e+9])<<8)<<12),A+=a>>>1&8191,C+=8191&(a>>>14|(u=255&t[e+10]|(255&t[e+11])<<8)<<2),I+=8191&(u>>>11|(l=255&t[e+12]|(255&t[e+13])<<8)<<5),c=255&t[e+14]|(255&t[e+15])<<8,f=h=0,f+=k*L,f+=E*(5*K),f+=S*(5*$),f+=T*(5*z),h=(f+=O*(5*j))>>>13,f&=8191,f+=A*(5*D),f+=C*(5*U),f+=I*(5*N),f+=(P+=8191&(l>>>8|c<<8))*(5*R),d=h+=(f+=(B+=c>>>5|w)*(5*M))>>>13,d+=k*M,d+=E*L,d+=S*(5*K),d+=T*(5*$),h=(d+=O*(5*z))>>>13,d&=8191,d+=A*(5*j),d+=C*(5*D),d+=I*(5*U),d+=P*(5*N),h+=(d+=B*(5*R))>>>13,d&=8191,p=h,p+=k*R,p+=E*M,p+=S*L,p+=T*(5*K),h=(p+=O*(5*$))>>>13,p&=8191,p+=A*(5*z),p+=C*(5*j),p+=I*(5*D),p+=P*(5*U),v=h+=(p+=B*(5*N))>>>13,v+=k*N,v+=E*R,v+=S*M,v+=T*L,h=(v+=O*(5*K))>>>13,v&=8191,v+=A*(5*$),v+=C*(5*z),v+=I*(5*j),v+=P*(5*D),g=h+=(v+=B*(5*U))>>>13,g+=k*U,g+=E*N,g+=S*R,g+=T*M,h=(g+=O*L)>>>13,g&=8191,g+=A*(5*K),g+=C*(5*$),g+=I*(5*z),g+=P*(5*j),m=h+=(g+=B*(5*D))>>>13,m+=k*D,m+=E*U,m+=S*N,m+=T*R,h=(m+=O*M)>>>13,m&=8191,m+=A*L,m+=C*(5*K),m+=I*(5*$),m+=P*(5*z),b=h+=(m+=B*(5*j))>>>13,b+=k*j,b+=E*D,b+=S*U,b+=T*N,h=(b+=O*R)>>>13,b&=8191,b+=A*M,b+=C*L,b+=I*(5*K),b+=P*(5*$),y=h+=(b+=B*(5*z))>>>13,y+=k*z,y+=E*j,y+=S*D,y+=T*U,h=(y+=O*N)>>>13,y&=8191,y+=A*R,y+=C*M,y+=I*L,y+=P*(5*K),_=h+=(y+=B*(5*$))>>>13,_+=k*$,_+=E*z,_+=S*j,_+=T*D,h=(_+=O*U)>>>13,_&=8191,_+=A*N,_+=C*R,_+=I*M,_+=P*L,x=h+=(_+=B*(5*K))>>>13,x+=k*K,x+=E*$,x+=S*z,x+=T*j,h=(x+=O*D)>>>13,x&=8191,x+=A*U,x+=C*N,x+=I*R,x+=P*M,k=f=8191&(h=(h=((h+=(x+=B*L)>>>13)<<2)+h|0)+(f&=8191)|0),E=d+=h>>>=13,S=p&=8191,T=v&=8191,O=g&=8191,A=m&=8191,C=b&=8191,I=y&=8191,P=_&=8191,B=x&=8191,e+=16,n-=16
this.h[0]=k,this.h[1]=E,this.h[2]=S,this.h[3]=T,this.h[4]=O,this.h[5]=A,this.h[6]=C,this.h[7]=I,this.h[8]=P,this.h[9]=B},S.prototype.finish=function(t,e){var n,r,i,o,s=new Uint16Array(10)
if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191
for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,s[0]=this.h[0]+5,n=s[0]>>>13,s[0]&=8191,o=1;o<10;o++)s[o]=this.h[o]+n,n=s[o]>>>13,s[o]&=8191
for(s[9]-=8192,r=(1^n)-1,o=0;o<10;o++)s[o]&=r
for(r=~r,o=0;o<10;o++)this.h[o]=this.h[o]&r|s[o]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i
t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},S.prototype.update=function(t,e,n){var r,i
if(this.leftover){for((i=16-this.leftover)>n&&(i=n),r=0;r<i;r++)this.buffer[this.leftover+r]=t[e+r]
if(n-=i,e+=i,this.leftover+=i,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(t,e,i),e+=i,n-=i),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=t[e+r]
this.leftover+=n}}
var H=A,W=C
var q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function G(t,e,n,r){for(var i,o,s,a,u,l,c,h,f,d,p,v,g,m,b,y,_,x,w,k,E,S,T,O,A,C,I=new Int32Array(16),P=new Int32Array(16),B=t[0],L=t[1],M=t[2],R=t[3],N=t[4],U=t[5],D=t[6],j=t[7],z=e[0],$=e[1],K=e[2],F=e[3],V=e[4],Y=e[5],H=e[6],W=e[7],G=0;r>=128;){for(w=0;w<16;w++)k=8*w+G,I[w]=n[k+0]<<24|n[k+1]<<16|n[k+2]<<8|n[k+3],P[w]=n[k+4]<<24|n[k+5]<<16|n[k+6]<<8|n[k+7]
for(w=0;w<80;w++)if(i=B,o=L,s=M,a=R,u=N,l=U,c=D,h=j,f=z,d=$,p=K,v=F,g=V,m=Y,b=H,y=W,T=65535&(S=W),O=S>>>16,A=65535&(E=j),C=E>>>16,T+=65535&(S=(V>>>14|N<<18)^(V>>>18|N<<14)^(N>>>9|V<<23)),O+=S>>>16,A+=65535&(E=(N>>>14|V<<18)^(N>>>18|V<<14)^(V>>>9|N<<23)),C+=E>>>16,T+=65535&(S=V&Y^~V&H),O+=S>>>16,A+=65535&(E=N&U^~N&D),C+=E>>>16,E=q[2*w],T+=65535&(S=q[2*w+1]),O+=S>>>16,A+=65535&E,C+=E>>>16,E=I[w%16],O+=(S=P[w%16])>>>16,A+=65535&E,C+=E>>>16,A+=(O+=(T+=65535&S)>>>16)>>>16,T=65535&(S=x=65535&T|O<<16),O=S>>>16,A=65535&(E=_=65535&A|(C+=A>>>16)<<16),C=E>>>16,T+=65535&(S=(z>>>28|B<<4)^(B>>>2|z<<30)^(B>>>7|z<<25)),O+=S>>>16,A+=65535&(E=(B>>>28|z<<4)^(z>>>2|B<<30)^(z>>>7|B<<25)),C+=E>>>16,O+=(S=z&$^z&K^$&K)>>>16,A+=65535&(E=B&L^B&M^L&M),C+=E>>>16,h=65535&(A+=(O+=(T+=65535&S)>>>16)>>>16)|(C+=A>>>16)<<16,y=65535&T|O<<16,T=65535&(S=v),O=S>>>16,A=65535&(E=a),C=E>>>16,O+=(S=x)>>>16,A+=65535&(E=_),C+=E>>>16,L=i,M=o,R=s,N=a=65535&(A+=(O+=(T+=65535&S)>>>16)>>>16)|(C+=A>>>16)<<16,U=u,D=l,j=c,B=h,$=f,K=d,F=p,V=v=65535&T|O<<16,Y=g,H=m,W=b,z=y,w%16==15)for(k=0;k<16;k++)E=I[k],T=65535&(S=P[k]),O=S>>>16,A=65535&E,C=E>>>16,E=I[(k+9)%16],T+=65535&(S=P[(k+9)%16]),O+=S>>>16,A+=65535&E,C+=E>>>16,_=I[(k+1)%16],T+=65535&(S=((x=P[(k+1)%16])>>>1|_<<31)^(x>>>8|_<<24)^(x>>>7|_<<25)),O+=S>>>16,A+=65535&(E=(_>>>1|x<<31)^(_>>>8|x<<24)^_>>>7),C+=E>>>16,_=I[(k+14)%16],O+=(S=((x=P[(k+14)%16])>>>19|_<<13)^(_>>>29|x<<3)^(x>>>6|_<<26))>>>16,A+=65535&(E=(_>>>19|x<<13)^(x>>>29|_<<3)^_>>>6),C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,I[k]=65535&A|C<<16,P[k]=65535&T|O<<16
T=65535&(S=z),O=S>>>16,A=65535&(E=B),C=E>>>16,E=t[0],O+=(S=e[0])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[0]=B=65535&A|C<<16,e[0]=z=65535&T|O<<16,T=65535&(S=$),O=S>>>16,A=65535&(E=L),C=E>>>16,E=t[1],O+=(S=e[1])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[1]=L=65535&A|C<<16,e[1]=$=65535&T|O<<16,T=65535&(S=K),O=S>>>16,A=65535&(E=M),C=E>>>16,E=t[2],O+=(S=e[2])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[2]=M=65535&A|C<<16,e[2]=K=65535&T|O<<16,T=65535&(S=F),O=S>>>16,A=65535&(E=R),C=E>>>16,E=t[3],O+=(S=e[3])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[3]=R=65535&A|C<<16,e[3]=F=65535&T|O<<16,T=65535&(S=V),O=S>>>16,A=65535&(E=N),C=E>>>16,E=t[4],O+=(S=e[4])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[4]=N=65535&A|C<<16,e[4]=V=65535&T|O<<16,T=65535&(S=Y),O=S>>>16,A=65535&(E=U),C=E>>>16,E=t[5],O+=(S=e[5])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[5]=U=65535&A|C<<16,e[5]=Y=65535&T|O<<16,T=65535&(S=H),O=S>>>16,A=65535&(E=D),C=E>>>16,E=t[6],O+=(S=e[6])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[6]=D=65535&A|C<<16,e[6]=H=65535&T|O<<16,T=65535&(S=W),O=S>>>16,A=65535&(E=j),C=E>>>16,E=t[7],O+=(S=e[7])>>>16,A+=65535&E,C+=E>>>16,C+=(A+=(O+=(T+=65535&S)>>>16)>>>16)>>>16,t[7]=j=65535&A|C<<16,e[7]=W=65535&T|O<<16,G+=128,r-=128}return r}function X(t,e,n){var r,i=new Int32Array(8),o=new Int32Array(8),s=new Uint8Array(256),a=n
for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,o[0]=4089235720,o[1]=2227873595,o[2]=4271175723,o[3]=1595750129,o[4]=2917565137,o[5]=725511199,o[6]=4215389547,o[7]=327033209,G(i,o,e,n),n%=128,r=0;r<n;r++)s[r]=e[a-n+r]
for(s[n]=128,s[(n=256-128*(n<112?1:0))-9]=0,p(s,n-8,a/536870912|0,a<<3),G(i,o,s,n),r=0;r<8;r++)p(t,8*r,i[r],o[r])
return 0}function Z(t,n){var r=e(),i=e(),o=e(),s=e(),a=e(),u=e(),l=e(),h=e(),f=e()
D(r,t[1],t[0]),D(f,n[1],n[0]),j(r,r,f),U(i,t[0],t[1]),U(f,n[0],n[1]),j(i,i,f),j(o,t[3],n[3]),j(o,o,c),j(s,t[2],n[2]),U(s,s,s),D(a,i,r),D(u,s,o),U(l,s,o),U(h,i,r),j(t[0],a,u),j(t[1],h,l),j(t[2],l,u),j(t[3],a,h)}function J(t,e,n){var r
for(r=0;r<4;r++)B(t[r],e[r],n)}function Q(t,n){var r=e(),i=e(),o=e()
$(o,n[2]),j(r,n[0],o),j(i,n[1],o),L(t,i),t[31]^=R(r)<<7}function tt(t,e,n){var r,i
for(I(t[0],s),I(t[1],a),I(t[2],a),I(t[3],s),i=255;i>=0;--i)J(t,e,r=n[i/8|0]>>(7&i)&1),Z(e,t),Z(t,t),J(t,e,r)}function et(t,n){var r=[e(),e(),e(),e()]
I(r[0],h),I(r[1],f),I(r[2],a),j(r[3],h,f),tt(t,r,n)}function nt(t,n,i){var o,s=new Uint8Array(64),a=[e(),e(),e(),e()]
for(i||r(n,32),X(s,n,32),s[0]&=248,s[31]&=127,s[31]|=64,et(a,s),Q(t,a),o=0;o<32;o++)n[o+32]=t[o]
return 0}var rt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function it(t,e){var n,r,i,o
for(r=63;r>=32;--r){for(n=0,i=r-32,o=r-12;i<o;++i)e[i]+=n-16*e[r]*rt[i-(r-32)],n=e[i]+128>>8,e[i]-=256*n
e[i]+=n,e[r]=0}for(n=0,i=0;i<32;i++)e[i]+=n-(e[31]>>4)*rt[i],n=e[i]>>8,e[i]&=255
for(i=0;i<32;i++)e[i]-=n*rt[i]
for(r=0;r<32;r++)e[r+1]+=e[r]>>8,t[r]=255&e[r]}function ot(t){var e,n=new Float64Array(64)
for(e=0;e<64;e++)n[e]=t[e]
for(e=0;e<64;e++)t[e]=0
it(t,n)}function st(t,n,r,i){var o,s,a=new Uint8Array(64),u=new Uint8Array(64),l=new Uint8Array(64),c=new Float64Array(64),h=[e(),e(),e(),e()]
X(a,i,32),a[0]&=248,a[31]&=127,a[31]|=64
var f=r+64
for(o=0;o<r;o++)t[64+o]=n[o]
for(o=0;o<32;o++)t[32+o]=a[32+o]
for(X(l,t.subarray(32),r+32),ot(l),et(h,l),Q(t,h),o=32;o<64;o++)t[o]=i[o]
for(X(u,t,r+64),ot(u),o=0;o<64;o++)c[o]=0
for(o=0;o<32;o++)c[o]=l[o]
for(o=0;o<32;o++)for(s=0;s<32;s++)c[o+s]+=u[o]*a[s]
return it(t.subarray(32),c),f}function at(t,n){var r=e(),i=e(),o=e(),u=e(),c=e(),h=e(),f=e()
return I(t[2],a),N(t[1],n),z(o,t[1]),j(u,o,l),D(o,o,t[2]),U(u,t[2],u),z(c,u),z(h,c),j(f,h,c),j(r,f,o),j(r,r,u),function(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=250;r>=0;r--)z(i,i),1!==r&&j(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}(r,r),j(r,r,o),j(r,r,u),j(r,r,u),j(t[0],r,u),z(i,t[0]),j(i,i,u),M(i,o)&&j(t[0],t[0],d),z(i,t[0]),j(i,i,u),M(i,o)?-1:(R(t[0])===n[31]>>7&&D(t[0],s,t[0]),j(t[3],t[0],t[1]),0)}function ut(t,n,r,i){var o,s=new Uint8Array(32),a=new Uint8Array(64),u=[e(),e(),e(),e()],l=[e(),e(),e(),e()]
if(-1,r<64)return-1
if(at(l,i))return-1
for(o=0;o<r;o++)t[o]=n[o]
for(o=0;o<32;o++)t[o+32]=i[o]
if(X(a,t,r),ot(a),tt(u,l,a),et(l,n.subarray(32)),Z(u,l),Q(s,u),r-=64,m(n,0,s,0)){for(o=0;o<r;o++)t[o]=0
return-1}for(o=0;o<r;o++)t[o]=n[o+64]
return r}var lt=32,ct=24,ht=32,ft=32,dt=ct
function pt(t,e){if(t.length!==lt)throw new Error("bad key size")
if(e.length!==ct)throw new Error("bad nonce size")}function vt(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function gt(t){for(var e=0;e<t.length;e++)t[e]=0}t.lowlevel={crypto_core_hsalsa20:y,crypto_stream_xor:E,crypto_stream:k,crypto_stream_salsa20_xor:x,crypto_stream_salsa20:w,crypto_onetimeauth:T,crypto_onetimeauth_verify:O,crypto_verify_16:g,crypto_verify_32:m,crypto_secretbox:A,crypto_secretbox_open:C,crypto_scalarmult:K,crypto_scalarmult_base:F,crypto_box_beforenm:Y,crypto_box_afternm:H,crypto_box:function(t,e,n,r,i,o){var s=new Uint8Array(32)
return Y(s,i,o),H(t,e,n,r,s)},crypto_box_open:function(t,e,n,r,i,o){var s=new Uint8Array(32)
return Y(s,i,o),W(t,e,n,r,s)},crypto_box_keypair:V,crypto_hash:X,crypto_sign:st,crypto_sign_keypair:nt,crypto_sign_open:ut,crypto_secretbox_KEYBYTES:lt,crypto_secretbox_NONCEBYTES:ct,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:ht,crypto_box_SECRETKEYBYTES:ft,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:dt,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},t.randomBytes=function(t){var e=new Uint8Array(t)
return r(e,t),e},t.secretbox=function(t,e,n){vt(t,e,n),pt(n,e)
for(var r=new Uint8Array(32+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+32]=t[o]
return A(i,r,r.length,e,n),i.subarray(16)},t.secretbox.open=function(t,e,n){vt(t,e,n),pt(n,e)
for(var r=new Uint8Array(16+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+16]=t[o]
return r.length<32?null:0!==C(i,r,r.length,e,n)?null:i.subarray(32)},t.secretbox.keyLength=lt,t.secretbox.nonceLength=ct,t.secretbox.overheadLength=16,t.scalarMult=function(t,e){if(vt(t,e),32!==t.length)throw new Error("bad n size")
if(32!==e.length)throw new Error("bad p size")
var n=new Uint8Array(32)
return K(n,t,e),n},t.scalarMult.base=function(t){if(vt(t),32!==t.length)throw new Error("bad n size")
var e=new Uint8Array(32)
return F(e,t),e},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox(e,n,o)},t.box.before=function(t,e){vt(t,e),function(t,e){if(t.length!==ht)throw new Error("bad public key size")
if(e.length!==ft)throw new Error("bad secret key size")}(t,e)
var n=new Uint8Array(32)
return Y(n,t,e),n},t.box.after=t.secretbox,t.box.open=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox.open(e,n,o)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(ht),e=new Uint8Array(ft)
return V(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(vt(t),t.length!==ft)throw new Error("bad secret key size")
var e=new Uint8Array(ht)
return F(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=ht,t.box.secretKeyLength=ft,t.box.sharedKeyLength=32,t.box.nonceLength=dt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(vt(t,e),64!==e.length)throw new Error("bad secret key size")
var n=new Uint8Array(64+t.length)
return st(n,t,t.length,e),n},t.sign.open=function(t,e){if(vt(t,e),32!==e.length)throw new Error("bad public key size")
var n=new Uint8Array(t.length),r=ut(n,t,t.length,e)
if(r<0)return null
for(var i=new Uint8Array(r),o=0;o<i.length;o++)i[o]=n[o]
return i},t.sign.detached=function(e,n){for(var r=t.sign(e,n),i=new Uint8Array(64),o=0;o<i.length;o++)i[o]=r[o]
return i},t.sign.detached.verify=function(t,e,n){if(vt(t,e,n),64!==e.length)throw new Error("bad signature size")
if(32!==n.length)throw new Error("bad public key size")
var r,i=new Uint8Array(64+t.length),o=new Uint8Array(64+t.length)
for(r=0;r<64;r++)i[r]=e[r]
for(r=0;r<t.length;r++)i[r+64]=t[r]
return ut(o,i,i.length,n)>=0},t.sign.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(64)
return nt(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(vt(t),64!==t.length)throw new Error("bad secret key size")
for(var e=new Uint8Array(32),n=0;n<e.length;n++)e[n]=t[32+n]
return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(vt(t),32!==t.length)throw new Error("bad seed size")
for(var e=new Uint8Array(32),n=new Uint8Array(64),r=0;r<32;r++)n[r]=t[r]
return nt(e,n,!0),{publicKey:e,secretKey:n}},t.sign.publicKeyLength=32,t.sign.secretKeyLength=64,t.sign.seedLength=32,t.sign.signatureLength=64,t.hash=function(t){vt(t)
var e=new Uint8Array(64)
return X(e,t,t.length),e},t.hash.hashLength=64,t.verify=function(t,e){return vt(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===v(t,0,e,0,t.length))},t.setPRNG=function(t){r=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null
if(e&&e.getRandomValues){t.setPRNG(function(t,n){var r,i=new Uint8Array(n)
for(r=0;r<n;r+=65536)e.getRandomValues(i.subarray(r,r+Math.min(n-r,65536)))
for(r=0;r<n;r++)t[r]=i[r]
gt(i)})}else(e=n(106))&&e.randomBytes&&t.setPRNG(function(t,n){var r,i=e.randomBytes(n)
for(r=0;r<n;r++)t[r]=i[r]
gt(i)})}()}(t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){},function(t,e,n){(e=t.exports=function(t){t=t.toLowerCase()
var n=e[t]
if(!n)throw new Error(t+" is not supported (we accept pull requests)")
return new n}).sha=n(108),e.sha1=n(109),e.sha224=n(110),e.sha256=n(64),e.sha384=n(111),e.sha512=n(65)},function(t,e,n){var r=n(14),i=n(15),o=n(10).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,i.call(this,64,56)}function l(t){return t<<5|t>>>27}function c(t){return t<<30|t>>>2}function h(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0;u<16;++u)e[u]=t.readInt32BE(4*u)
for(;u<80;++u)e[u]=e[u-3]^e[u-8]^e[u-14]^e[u-16]
for(var f=0;f<80;++f){var d=~~(f/20),p=l(n)+h(d,r,i,o)+a+e[f]+s[d]|0
a=o,o=i,i=c(r),r=n,n=p}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,n){var r=n(14),i=n(15),o=n(10).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80)
function u(){this.init(),this._w=a,i.call(this,64,56)}function l(t){return t<<1|t>>>31}function c(t){return t<<5|t>>>27}function h(t){return t<<30|t>>>2}function f(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,a=0|this._e,u=0;u<16;++u)e[u]=t.readInt32BE(4*u)
for(;u<80;++u)e[u]=l(e[u-3]^e[u-8]^e[u-14]^e[u-16])
for(var d=0;d<80;++d){var p=~~(d/20),v=c(n)+f(p,r,i,o)+a+e[d]+s[p]|0
a=o,o=i,i=h(r),r=n,n=v}this._a=n+this._a|0,this._b=r+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},function(t,e,n){var r=n(14),i=n(64),o=n(15),s=n(10).Buffer,a=new Array(64)
function u(){this.init(),this._w=a,o.call(this,64,56)}r(u,i),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=u},function(t,e,n){var r=n(14),i=n(65),o=n(15),s=n(10).Buffer,a=new Array(160)
function u(){this.init(),this._w=a,o.call(this,128,112)}r(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=s.allocUnsafe(48)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},function(t,e,n){"use strict"
t.exports=n(113)},function(t,e,n){"use strict";(function(e){t.exports=l
var r=n(114),i="undefined"!=typeof navigator&&!!navigator.userAgent,o=i&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=i&&navigator.userAgent.match(/Edge\/1[2345]/),a=null
function u(t){return a||(a=new t(function(t,e){function n(){t({u2f:null,native:!0})}return i?o?n():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&t({u2f:window.u2f,native:!0}),s?n():"http:"===location.protocol?n():"undefined"==typeof MessageChannel?n():void r.isSupported(function(e){e?t({u2f:r,native:!1}):n()})):n()})),a}function l(t){return{isSupported:function(){return u(this).then(function(t){return!!t.u2f})}.bind(t),ensureSupport:function(){return u(this).then(f)}.bind(t),register:function(t,e,n){var r=this
Array.isArray(t)||(t=[t])
"number"==typeof e&&void 0===n&&(n=e,e=null)
e||(e=[])
return h(r,u(r).then(function(i){f(i)
var o=i.native,s=i.u2f
return new r(function(r,i){if(o){var a=t[0].appId
s.register(a,t,e,function(t){t.errorCode?i(c("Registration failed",t)):(delete t.errorCode,r(t))},n)}else s.register(t,e,function(t,e){t?i(t):e.errorCode?i(c("Registration failed",e)):r(e)},n)})})).promise}.bind(t),sign:function(t,e){var n=this
Array.isArray(t)||(t=[t])
return h(n,u(n).then(function(r){f(r)
var i=r.native,o=r.u2f
return new n(function(n,r){if(i){var s=t[0].appId,a=t[0].challenge
o.sign(s,a,t,function(t){t.errorCode?r(c("Sign failed",t)):(delete t.errorCode,n(t))},e)}else o.sign(t,function(t,e){t?r(t):e.errorCode?r(c("Sign failed",e)):n(e)},e)})})).promise}.bind(t),ErrorCodes:l.ErrorCodes,ErrorNames:l.ErrorNames}}function c(t,e){var n=null!=e?e.errorCode:1,r=l.ErrorNames[""+n],i=new Error(t)
return i.metaData={type:r,code:n},i}function h(t,e){var n={}
return n.promise=new t(function(t,r){n.resolve=t,n.reject=r,e.then(t,r)}),n.promise.cancel=function(e,r){u(t).then(function(t){r&&!t.native&&t.u2f.disconnect(),n.reject(c(e,{errorCode:-1}))})},n}function f(t){if(!t.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function d(t){l[t]=function(){if(!e.Promise)throw new Error("The platform doesn't natively support promises")
var n=[].slice.call(arguments)
return l(e.Promise)[t].apply(null,n)}}l.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},l.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},d("isSupported"),d("ensureSupport"),d("register"),d("sign")}).call(this,n(31))},function(t,e,n){"use strict"
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
var i=p(n(34)),o=p(n(116)),s=p(n(122)),a=p(n(125)),u=p(n(130)),l=p(n(133)),c=p(n(47)),h=p(n(48)),f=p(n(134))
e.getAltStatusMessage=g,e.TransportError=m,e.TransportStatusError=b
var d=p(n(46))
function p(t){return t&&t.__esModule?t:{default:t}}var v=e.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function g(t){switch(t){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=t&&t<=28671)return"Internal error, please report"}function m(t,e){this.name="TransportError",this.message=t,this.stack=(new Error).stack,this.id=e}function b(t){this.name="TransportStatusError"
var e=(0,f.default)(v).find(function(e){return v[e]===t})||"UNKNOWN_ERROR",n=g(t)||e,r=t.toString(16)
this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=t,this.statusText=e}m.prototype=new Error,b.prototype=new Error
var y=function(){function e(){var n=this;(0,c.default)(this,e),this.debug=t.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new d.default,this.send=function(){var t=(0,l.default)(u.default.mark(function t(e,i,o,s){var a,l,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.alloc(0),h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[v.OK]
return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(c.length>=256)){t.next=2
break}throw new m("data.length exceed 256 bytes limit. Got: "+c.length,"DataLengthTooBig")
case 2:return t.next=4,n.exchange(r.concat([r.from([e,i,o,s]),r.from([c.length]),c]))
case 4:if(a=t.sent,l=a.readUInt16BE(a.length-2),h.some(function(t){return t===l})){t.next=8
break}throw new b(l)
case 8:return t.abrupt("return",a)
case 9:case"end":return t.stop()}},t,n)}))
return function(e,n,r,i){return t.apply(this,arguments)}}(),this._appAPIlock=null}return(0,h.default)(e,[{key:"on",value:function(t,e){this._events.on(t,e)}},{key:"off",value:function(t,e){this._events.removeListener(t,e)}},{key:"emit",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this._events).emit.apply(e,[t].concat((0,a.default)(r)))}},{key:"setDebugMode",value:function(t){this.debug="function"==typeof t?t:t?function(t){return console.log(t)}:null}},{key:"setExchangeTimeout",value:function(t){this.exchangeTimeout=t}},{key:"decorateAppAPIMethods",value:function(t,e,n){var r=!0,i=!1,o=void 0
try{for(var a,u=(0,s.default)(e);!(r=(a=u.next()).done);r=!0){var l=a.value
t[l]=this.decorateAppAPIMethod(l,t[l],t,n)}}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}}},{key:"decorateAppAPIMethod",value:function(t,e,n,r){var s=this
return function(){var a=(0,l.default)(u.default.mark(function a(){for(var l=arguments.length,c=Array(l),h=0;h<l;h++)c[h]=arguments[h]
var f,d
return u.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(f=s._appAPIlock)){a.next=5
break}return d=new m("Ledger Device is busy (lock "+f+")","TransportLocked"),(0,o.default)(d,{currentLock:f,methodName:t}),a.abrupt("return",i.default.reject(d))
case 5:return a.prev=5,s._appAPIlock=t,s.setScrambleKey(r),a.next=10,e.apply(n,c)
case 10:return a.abrupt("return",a.sent)
case 11:return a.prev=11,s._appAPIlock=null,a.finish(11)
case 14:case"end":return a.stop()}},a,s,[[5,,11,14]])}))
return function(){return a.apply(this,arguments)}}()}}],[{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4
return new i.default(function(r,i){var o=!1,s=t.listen({next:function(n){o=!0,s&&s.unsubscribe(),clearTimeout(a),t.open(n.descriptor,e).then(r,i)},error:function(t){clearTimeout(a),i(t)},complete:function(){clearTimeout(a),o||i(new m(t.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),a=setTimeout(function(){s.unsubscribe(),i(new m(t.ErrorMessage_ListenTimeout,"ListenTimeout"))},n)})}}]),e}()
y.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",y.ErrorMessage_NoDeviceFound="No Ledger device found",e.default=y}).call(this,n(31),n(16).Buffer)},function(t,e,n){t.exports={default:n(117),__esModule:!0}},function(t,e,n){n(118),t.exports=n(3).Object.assign},function(t,e,n){var r=n(7)
r(r.S+r.F,"Object",{assign:n(119)})},function(t,e,n){"use strict"
var r=n(39),i=n(120),o=n(121),s=n(25),a=n(50),u=Object.assign
t.exports=!u||n(22)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst"
return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=s(t),u=arguments.length,l=1,c=i.f,h=o.f;u>l;)for(var f,d=a(arguments[l++]),p=c?r(d).concat(c(d)):r(d),v=p.length,g=0;v>g;)h.call(d,f=p[g++])&&(n[f]=d[f])
return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports={default:n(123),__esModule:!0}},function(t,e,n){n(55),n(35),t.exports=n(124)},function(t,e,n){var r=n(8),i=n(44)
t.exports=n(3).getIterator=function(t){var e=i(t)
if("function"!=typeof e)throw TypeError(t+" is not iterable!")
return r(e.call(t))}},function(t,e,n){"use strict"
e.__esModule=!0
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(126))
e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return(0,r.default)(t)}},function(t,e,n){t.exports={default:n(127),__esModule:!0}},function(t,e,n){n(35),n(128),t.exports=n(3).Array.from},function(t,e,n){"use strict"
var r=n(17),i=n(7),o=n(25),s=n(57),a=n(58),u=n(41),l=n(129),c=n(44)
i(i.S+i.F*!n(63)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,h,f=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,m=0,b=c(f)
if(g&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==b||d==Array&&a(b))for(n=new d(e=u(f.length));e>m;m++)l(n,m,g?v(f[m],m):f[m])
else for(h=b.call(f),n=new d;!(i=h.next()).done;m++)l(n,m,g?s(h,v,[i.value,m],!0):i.value)
return n.length=m,n}})},function(t,e,n){"use strict"
var r=n(12),i=n(33)
t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){t.exports=n(131)},function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime
if(r.regeneratorRuntime=void 0,t.exports=n(132),i)r.regeneratorRuntime=o
else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict"
var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",l="object"==typeof t,c=e.regeneratorRuntime
if(c)l&&(t.exports=c)
else{(c=e.regeneratorRuntime=l?t.exports:{}).wrap=_
var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={}
g[s]=function(){return this}
var m=Object.getPrototypeOf,b=m&&m(m(P([])))
b&&b!==r&&i.call(b,s)&&(g=b)
var y=E.prototype=w.prototype=Object.create(g)
k.prototype=y.constructor=E,E.constructor=k,E[u]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},c.awrap=function(t){return{__await:t}},S(T.prototype),T.prototype[a]=function(){return this},c.AsyncIterator=T,c.async=function(t,e,n,r){var i=new T(_(t,e,n,r))
return c.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(y),y[u]="Generator",y[s]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e.reverse(),function n(){for(;e.length;){var r=e.pop()
if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var e=this
function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion
if("root"===s.tryLoc)return r("end")
if(s.tryLoc<=this.prev){var u=i.call(s,"catchLoc"),l=i.call(s,"finallyLoc")
if(u&&l){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)
if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n]
if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r
break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null)
var s=o?o.completion:{}
return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.tryLoc===t){var r=n.completion
if("throw"===r.type){var i=r.arg
C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new I(r||[])
return o._invoke=function(t,e,n){var r=h
return function(i,o){if(r===d)throw new Error("Generator is already running")
if(r===p){if("throw"===i)throw o
return B()}for(n.method=i,n.arg=o;;){var s=n.delegate
if(s){var a=O(s,n)
if(a){if(a===v)continue
return a}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===h)throw r=p,n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=d
var u=x(t,e,n)
if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,s),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function w(){}function k(){}function E(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e
this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,s){var a=x(t[n],t,r)
if("throw"!==a.type){var u=a.arg,l=u.value
return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(l).then(function(t){u.value=t,o(u)},s)}s(a.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function O(t,e){var r=t.iterator[e.method]
if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg)
if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v
var o=i.arg
return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var e=t[s]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e
return e.value=n,e.done=!0,e}
return o.next=o}}return{next:B}}function B(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){"use strict"
e.__esModule=!0
var r=function(t){return t&&t.__esModule?t:{default:t}}(n(34))
e.default=function(t){return function(){var e=t.apply(this,arguments)
return new r.default(function(t,n){return function i(o,s){try{var a=e[o](s),u=a.value}catch(t){return void n(t)}if(!a.done)return r.default.resolve(u).then(function(t){i("next",t)},function(t){i("throw",t)})
t(u)}("next")})}}},function(t,e,n){t.exports={default:n(135),__esModule:!0}},function(t,e,n){n(136),t.exports=n(3).Object.keys},function(t,e,n){var r=n(25),i=n(39)
n(137)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(7),i=n(3),o=n(22)
t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={}
s[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",s)}},function(t,e,n){"use strict"
var r=n(27)
n.n(r).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.payment-view[data-v-2d2f5a4e] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-view .input-title[data-v-2d2f5a4e] {\n    position: relative;\n    background: steelblue;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2em;\n}\n.payment-view .input-title .back-button[data-v-2d2f5a4e] {\n      position: absolute;\n      top: 5px;\n      left: 0;\n}\n.payment-view .payment-content[data-v-2d2f5a4e] {\n    margin: 10px;\n}\n.payment-view .payment-content .own-wallet[data-v-2d2f5a4e] {\n      margin-top: 20px;\n      text-align: center;\n}\n.payment-view .payment-content .own-wallet .xlm-address[data-v-2d2f5a4e] {\n        font-size: 0.9em;\n        font-weight: bold;\n}\n.payment-view .payment-content .payment-start[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-start .title-start[data-v-2d2f5a4e] {\n        font-size: 1.2em;\n        margin-bottom: 8px;\n}\n.payment-view .payment-content .payment-nano .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-secret .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n",""])},function(t,e,n){var r=n(141)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.v-ripple__animation--enter {\n  transition: none;\n}\n.v-ripple__animation--in {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-ripple__animation--out {\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme--light.v-btn {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-btn.v-btn--disabled {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled .v-icon,\n.theme--light.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #f5f5f5;\n}\n.theme--dark.v-btn {\n  color: #fff;\n}\n.theme--dark.v-btn.v-btn--disabled {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled .v-icon,\n.theme--dark.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #212121;\n}\n/** Base Spec */\n.v-btn {\n  align-items: center;\n  border-radius: 2px;\n  display: inline-flex;\n  height: 36px;\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n  margin: 6px 8px;\n  min-width: 88px;\n  outline: 0;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n}\n/** Psuedo */\n.v-btn:before {\n  border-radius: inherit;\n  color: inherit;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  opacity: 0.12;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n/** Content */\n.v-btn {\n  padding: 0 16px;\n}\n.v-btn--active,\n.v-btn:hover,\n.v-btn:focus {\n  position: relative;\n}\n.v-btn--active:before,\n.v-btn:hover:before,\n.v-btn:focus:before {\n  background-color: currentColor;\n}\n.v-btn__content {\n  align-items: center;\n  border-radius: inherit;\n  color: inherit;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  margin: 0 auto;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  white-space: nowrap;\n  width: inherit;\n}\n/** Sizes */\n.v-btn--small {\n  font-size: 13px;\n  height: 28px;\n  padding: 0 8px;\n}\n.v-btn--large {\n  font-size: 15px;\n  height: 44px;\n  padding: 0 32px;\n}\n/** Icons */\n.v-btn .v-btn__content .v-icon {\n  color: inherit;\n}\n/** Types */\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {\n  will-change: box-shadow;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);\n}\n.v-btn--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  justify-content: center;\n  min-width: 0;\n  width: 36px;\n}\n.v-btn--icon.v-btn--small {\n  width: 28px;\n}\n.v-btn--icon.v-btn--large {\n  width: 44px;\n}\n.v-btn--icon:before {\n  border-radius: 50%;\n}\n.v-btn--floating {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n}\n.v-btn--floating.v-btn--fixed,\n.v-btn--floating.v-btn--absolute {\n  z-index: 4;\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat) {\n  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);\n}\n.v-btn--floating .v-btn__content {\n  flex: 1 1 auto;\n  margin: 0;\n  height: 100%;\n}\n.v-btn--floating:after {\n  border-radius: 50%;\n}\n.v-btn--floating .v-btn__content :not(:only-child) {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  opacity: 1;\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child {\n  opacity: 0;\n  transform: rotate(-45deg);\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child,\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):first-child {\n  opacity: 0;\n  transform: rotate(45deg);\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):last-child {\n  opacity: 1;\n  transform: rotate(0);\n}\n.v-btn--floating .v-icon {\n  height: inherit;\n  width: inherit;\n}\n.v-btn--floating.v-btn--small {\n  height: 40px;\n  width: 40px;\n}\n.v-btn--floating.v-btn--small .v-icon {\n  font-size: 18px;\n}\n.v-btn--floating.v-btn--large {\n  height: 72px;\n  width: 72px;\n}\n.v-btn--floating.v-btn--large .v-icon {\n  font-size: 30px;\n}\n.v-btn--reverse .v-btn__content {\n  flex-direction: row-reverse;\n}\n.v-btn--reverse.v-btn--column .v-btn__content {\n  flex-direction: column-reverse;\n}\n.v-btn--fixed,\n.v-btn--absolute {\n  margin: 0;\n}\n.v-btn.v-btn--absolute {\n  position: absolute;\n}\n.v-btn.v-btn--fixed {\n  position: fixed;\n}\n.v-btn--top:not(.v-btn--absolute) {\n  top: 16px;\n}\n.v-btn--top.v-btn--absolute {\n  top: -28px;\n}\n.v-btn--top.v-btn--absolute.v-btn--small {\n  top: -20px;\n}\n.v-btn--top.v-btn--absolute.v-btn--large {\n  top: -36px;\n}\n.v-btn--bottom:not(.v-btn--absolute) {\n  bottom: 16px;\n}\n.v-btn--bottom.v-btn--absolute {\n  bottom: -28px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--small {\n  bottom: -20px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--large {\n  bottom: -36px;\n}\n.v-btn--left {\n  left: 16px;\n}\n.v-btn--right {\n  right: 16px;\n}\n/** Disabled */\n.v-btn.v-btn--disabled {\n  box-shadow: none !important;\n  pointer-events: none;\n}\n.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon {\n  transition: none;\n}\n.v-btn--icon {\n  padding: 0;\n}\n/** Loader */\n.v-btn--loader {\n  pointer-events: none;\n}\n.v-btn--loader .v-btn__content {\n  opacity: 0;\n}\n.v-btn__loading {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.v-btn__loading .v-icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.v-btn__loading .v-icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n/** Custom Buttons */\n.v-btn.v-btn--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.v-btn.v-btn--outline:hover {\n  box-shadow: none;\n}\n.v-btn--block {\n  display: flex;\n  flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.v-btn--round {\n  border-radius: 28px;\n}\n.v-btn--round:after {\n  border-radius: 28px;\n}\n/** Button w/ directional Icon */\n.v-btn .v-icon--right {\n  margin-left: 16px;\n}\n.v-btn .v-icon--left {\n  margin-right: 16px;\n}\n/** Themes */\n.v-btn:not(.v-btn--outline).primary,\n.v-btn:not(.v-btn--outline).secondary,\n.v-btn:not(.v-btn--outline).accent,\n.v-btn:not(.v-btn--outline).success,\n.v-btn:not(.v-btn--outline).error,\n.v-btn:not(.v-btn--outline).warning,\n.v-btn:not(.v-btn--outline).info {\n  color: #fff;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location
if(!e)throw new Error("fixUrls requires window.location")
if(!t||"string"!=typeof t)return t
var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/")
return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e})
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var r=n(144)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-progress-circular {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.v-progress-circular svg {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n}\n.v-progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  transition: all 0.2s ease-in-out;\n}\n.v-progress-circular--indeterminate .v-progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 80, 200;\n  stroke-dashoffset: 0px;\n}\n.v-progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.v-progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.v-progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@-moz-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-webkit-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-o-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-moz-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""])},function(t,e,n){var r=n(146)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"/* Themes */\n.theme--light.v-icon {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-icon.v-icon--disabled {\n  color: rgba(0,0,0,0.38) !important;\n}\n.theme--dark.v-icon {\n  color: #fff;\n}\n.theme--dark.v-icon.v-icon--disabled {\n  color: rgba(255,255,255,0.5) !important;\n}\n.v-icon {\n  align-items: center;\n  display: inline-flex;\n  font-feature-settings: 'liga';\n  font-size: 24px;\n  justify-content: center;\n  line-height: 1;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  vertical-align: text-bottom;\n}\n.v-icon.v-icon.v-icon--link {\n  cursor: pointer;\n}\n.v-icon.v-icon--large {\n  font-size: 2.5rem;\n}\n.v-icon.v-icon--medium {\n  font-size: 2rem;\n}\n.v-icon.v-icon--x-large {\n  font-size: 3rem;\n}\n.v-icon.v-icon--disabled {\n  pointer-events: none;\n}\n",""])},function(t,e,n){var r=n(148)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".theme--light.v-text-field .v-input__slot:before {\n  border-color: rgba(0,0,0,0.42);\n}\n.theme--light.v-text-field:not(.v-input--has-state) .v-input__slot:hover:before {\n  border-color: rgba(0,0,0,0.87);\n}\n.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(0,0,0,0.38) 0px, rgba(0,0,0,0.38) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--light.v-text-field__prefix,\n.theme--light.v-text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--solo .v-input__slot {\n  border-radius: 2px;\n  background: #fff;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo .v-input__slot {\n  background: rgba(0,0,0,0.16);\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot {\n  background: #424242;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot .v-label,\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot input {\n  color: #fff;\n}\n.theme--light.v-text-field--box .v-input__slot {\n  background: rgba(0,0,0,0.06);\n}\n.theme--light.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--light.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--light.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--light.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--light.v-text-field--box:not(.v-input--is-focused) .v-input__slot:hover {\n  background: rgba(0,0,0,0.12);\n}\n.theme--light.v-text-field--outline .v-input__slot {\n  border: 2px solid rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) .v-input__slot:hover {\n  border: 2px solid rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field .v-input__slot:before {\n  border-color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field:not(.v-input--has-state) .v-input__slot:hover:before {\n  border-color: #fff;\n}\n.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--dark.v-text-field__prefix,\n.theme--dark.v-text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--solo .v-input__slot {\n  border-radius: 2px;\n  background: #424242;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo .v-input__slot {\n  background: rgba(255,255,255,0.16);\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot {\n  background: #fff;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot .v-label,\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused .v-input__slot input {\n  color: rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field--box .v-input__slot {\n  background: rgba(0,0,0,0.1);\n}\n.theme--dark.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--dark.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--dark.v-text-field--box:not(.v-input--is-focused) .v-input__slot:hover {\n  background: rgba(0,0,0,0.2);\n}\n.theme--dark.v-text-field--outline .v-input__slot {\n  border: 2px solid rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) .v-input__slot:hover {\n  border: 2px solid #fff;\n}\n.application--is-rtl .v-text-field .v-label {\n  transform-origin: top right;\n}\n.application--is-rtl .v-text-field .v-counter {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__append-outer {\n  margin-left: 0;\n  margin-right: 16px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__prepend-outer {\n  margin-left: 16px;\n  margin-right: 0;\n}\n.application--is-rtl .v-text-field--reverse input {\n  text-align: left;\n}\n.application--is-rtl .v-text-field--reverse .v-label {\n  transform-origin: top left;\n}\n.application--is-rtl .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.application--is-rtl .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__prefix {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field {\n  padding-top: 12px;\n  margin-top: 4px;\n}\n.v-text-field input {\n  flex: 1 1 auto;\n  line-height: 20px;\n  padding: 8px 0 8px;\n  max-width: 100%;\n  min-width: 0px;\n  width: 100%;\n}\n.v-text-field .v-input__prepend-inner,\n.v-text-field .v-input__append-inner {\n  align-self: flex-start;\n  display: inline-flex;\n  margin-top: 4px;\n  line-height: 1;\n  user-select: none;\n}\n.v-text-field .v-input__prepend-inner {\n  margin-right: auto;\n  padding-right: 4px;\n}\n.v-text-field .v-input__append-inner {\n  margin-left: auto;\n  padding-left: 4px;\n}\n.v-text-field .v-counter {\n  margin-left: 8px;\n  white-space: nowrap;\n}\n.v-text-field .v-label {\n  max-width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  top: 6px;\n  transform-origin: top left;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.v-text-field .v-label--active {\n  max-width: 100%;\n  transform: translateY(-18px) scale(0.75);\n}\n.v-text-field > .v-input__control > .v-input__slot {\n  cursor: text;\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field > .v-input__control > .v-input__slot:before,\n.v-text-field > .v-input__control > .v-input__slot:after {\n  bottom: -1px;\n  content: '';\n  left: 0;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-text-field > .v-input__control > .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 0 0;\n}\n.v-text-field > .v-input__control > .v-input__slot:after {\n  border-color: currentColor;\n  border-style: solid;\n  border-width: thin 0 thin 0;\n  transform: scaleX(0);\n}\n.v-text-field__details {\n  display: flex;\n  flex: 1 0 auto;\n  max-width: 100%;\n  overflow: hidden;\n}\n.v-text-field__prefix,\n.v-text-field__suffix {\n  align-self: center;\n  cursor: default;\n}\n.v-text-field__prefix {\n  text-align: right;\n  padding-right: 4px;\n}\n.v-text-field__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n.v-text-field--reverse .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field__slot {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n}\n.v-text-field--box,\n.v-text-field--outline {\n  position: relative;\n}\n.v-text-field--box .v-input__slot,\n.v-text-field--outline .v-input__slot {\n  align-items: stretch;\n}\n.v-text-field--box input,\n.v-text-field--outline input {\n  margin-top: 22px;\n}\n.v-text-field--box.v-text-field--single-line input,\n.v-text-field--outline.v-text-field--single-line input {\n  margin-top: 12px;\n}\n.v-text-field--box .v-label,\n.v-text-field--outline .v-label {\n  top: 18px;\n}\n.v-text-field--box .v-label--active,\n.v-text-field--outline .v-label--active {\n  transform: translateY(-6px) scale(0.75);\n}\n.v-text-field--box .v-input__slot,\n.v-text-field--outline .v-input__slot {\n  min-height: 56px;\n}\n.v-text-field--box .v-input__slot {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.v-text-field--box .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 thin 0;\n}\n.v-text-field.v-text-field--enclosed {\n  margin: 0;\n  padding: 0;\n}\n.v-text-field.v-text-field--enclosed:not(.v-text-field--box) .v-progress-linear__background {\n  display: none;\n}\n.v-text-field.v-text-field--enclosed .v-input__prepend-outer,\n.v-text-field.v-text-field--enclosed .v-input__prepend-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-outer {\n  margin-top: 16px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\n.v-text-field.v-text-field--enclosed .v-input__slot {\n  padding: 0 12px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details {\n  margin-bottom: 8px;\n}\n.v-text-field.v-text-field--full-width.v-input {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n.v-text-field.v-text-field--full-width .v-label {\n  top: calc(50% - 10px);\n}\n.v-text-field.v-text-field--full-width .v-input__control {\n  padding: 12px 0;\n}\n.v-text-field.v-text-field--full-width .v-input__prepend-outer,\n.v-text-field.v-text-field--full-width .v-input__append-outer {\n  margin-top: 4px;\n}\n.v-text-field.v-text-field--full-width .v-input__append-inner {\n  align-self: center;\n  margin-top: 0;\n}\n.v-text-field--reverse input {\n  text-align: right;\n}\n.v-text-field--reverse .v-label {\n  transform-origin: top right;\n}\n.v-text-field--reverse .v-input__slot,\n.v-text-field--reverse .v-text-field__slot {\n  flex-direction: row-reverse;\n}\n.v-text-field--solo .v-input__slot:before,\n.v-text-field--outline .v-input__slot:before,\n.v-text-field--full-width .v-input__slot:before,\n.v-text-field--solo .v-input__slot:after,\n.v-text-field--outline .v-input__slot:after,\n.v-text-field--full-width .v-input__slot:after {\n  display: none;\n}\n.v-text-field--outline {\n  margin-bottom: 16px;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline .v-input__slot {\n  background: transparent !important;\n  border-radius: 4px;\n}\n.v-text-field--outline .v-text-field__prefix {\n  max-height: 32px;\n}\n.v-text-field--outline .v-input__prepend-outer,\n.v-text-field--outline .v-input__append-outer {\n  margin-top: 18px;\n}\n.v-text-field--outline.v-input--is-dirty .v-text-field__prefix,\n.v-text-field--outline.v-input--is-focused .v-text-field__prefix,\n.v-text-field--outline.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline.v-input--is-focused .v-input__slot {\n  border: 2px solid currentColor;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field.v-text-field--solo .v-label {\n  top: calc(50% - 10px);\n}\n.v-text-field.v-text-field--solo .v-input__control {\n  min-height: 48px;\n  padding: 0;\n}\n.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-text-field.v-text-field--solo .v-text-field__slot {\n  align-items: center;\n}\n.v-text-field.v-text-field--solo .v-input__append-inner,\n.v-text-field.v-text-field--solo .v-input__prepend-inner {\n  align-self: center;\n  margin-top: 0;\n}\n.v-text-field.v-text-field--solo .v-input__prepend-outer,\n.v-text-field.v-text-field--solo .v-input__append-outer {\n  margin-top: 12px;\n}\n.v-text-field.v-input--is-focused .v-input__slot:after {\n  transform: scaleX(1);\n}\n.v-text-field.v-input--has-state .v-input__slot:before {\n  border-color: currentColor;\n}\n",""])},function(t,e,n){var r=n(150)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"/* Theme */\n.theme--light.v-input:not(.v-input--is-disabled) input,\n.theme--light.v-input:not(.v-input--is-disabled) textarea {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-input input::placeholder,\n.theme--light.v-input textarea::placeholder {\n  color: rgba(0,0,0,0.38);\n}\n.theme--light.v-input--is-disabled .v-label,\n.theme--light.v-input--is-disabled input,\n.theme--light.v-input--is-disabled textarea {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-input:not(.v-input--is-disabled) input,\n.theme--dark.v-input:not(.v-input--is-disabled) textarea {\n  color: #fff;\n}\n.theme--dark.v-input input::placeholder,\n.theme--dark.v-input textarea::placeholder {\n  color: rgba(255,255,255,0.5);\n}\n.theme--dark.v-input--is-disabled .v-label,\n.theme--dark.v-input--is-disabled input,\n.theme--dark.v-input--is-disabled textarea {\n  color: rgba(255,255,255,0.5);\n}\n.v-input {\n  align-items: flex-start;\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 16px;\n  text-align: left;\n}\n.v-input .v-progress-linear {\n  top: calc(100% - 1px);\n  left: 0;\n  margin: 0;\n  position: absolute;\n}\n.v-input input {\n  max-height: 32px;\n}\n.v-input input:invalid,\n.v-input textarea:invalid {\n  box-shadow: none;\n}\n.v-input input:focus,\n.v-input textarea:focus,\n.v-input input:active,\n.v-input textarea:active {\n  outline: none;\n}\n.v-input .v-label {\n  height: 20px;\n  line-height: 20px;\n}\n.v-input__append-outer,\n.v-input__prepend-outer {\n  display: inline-flex;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  line-height: 1;\n}\n.v-input__append-outer .v-icon,\n.v-input__prepend-outer .v-icon {\n  user-select: none;\n}\n.v-input__append-outer {\n  margin-left: 9px;\n}\n.v-input__prepend-outer {\n  margin-right: 9px;\n}\n.v-input__control {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n  width: 100%;\n}\n.v-input__icon {\n  align-items: center;\n  display: inline-flex;\n  height: 24px;\n  flex: 1 0 auto;\n  justify-content: center;\n  min-width: 24px;\n  width: 24px;\n}\n.v-input__icon--clear {\n  border-radius: 50%;\n}\n.v-input__slot {\n  align-items: center;\n  color: inherit;\n  display: flex;\n  margin-bottom: 8px;\n  min-height: inherit;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-input--is-disabled:not(.v-input--is-readonly) {\n  pointer-events: none;\n}\n.v-input--is-loading .v-input__slot:before,\n.v-input--is-loading .v-input__slot:after {\n  display: none;\n}\n.v-input--hide-details .v-input__slot {\n  margin-bottom: 0;\n}\n.v-input--has-state.error--text .v-label {\n  animation: shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(t,e,n){var r=n(152)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".theme--light.v-label {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-label--is-disabled {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-label {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-label--is-disabled {\n  color: rgba(255,255,255,0.5);\n}\n.v-label {\n  font-size: 16px;\n  line-height: 1;\n  min-height: 8px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(t,e,n){var r=n(154)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"/* Theme */\n.theme--light.v-messages {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-messages {\n  color: rgba(255,255,255,0.7);\n}\n.application--is-rtl .v-messages {\n  text-align: right;\n}\n.v-messages {\n  flex: 1 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  min-width: 1px;\n  position: relative;\n}\n.v-messages__message {\n  line-height: 1;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n}\n",""])},function(t,e,n){var r=n(156)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.v-progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.2s;\n  z-index: 1;\n}\n.v-progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.2s;\n}\n.v-progress-linear__bar__indeterminate .long,\n.v-progress-linear__bar__indeterminate .short {\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n  background-color: inherit;\n}\n.v-progress-linear__bar__indeterminate--active .long {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__bar__indeterminate--active .short {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transition: 0.3s ease-in;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .long {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .short {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n@-moz-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-o-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-moz-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-o-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-moz-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-webkit-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-o-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-moz-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-webkit-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-o-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n",""])},function(t,e,n){var r=n(158)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"/* Theme */\n.theme--light.v-counter {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-counter {\n  color: rgba(255,255,255,0.7);\n}\n.v-counter {\n  flex: 0 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  line-height: 1;\n}\n",""])},function(t,e,n){var r=n(160)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: #fff;\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: 0;\n  margin-left: -12px;\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 0;\n  padding-left: 12px;\n}\n.v-textarea textarea {\n  flex: 1 1 auto;\n  line-height: 18px;\n  max-width: 100%;\n  min-height: 32px;\n  outline: none;\n  padding: 7px 0 8px;\n  width: 100%;\n}\n.v-textarea .v-text-field__prefix {\n  padding-top: 4px;\n  align-self: start;\n}\n.v-textarea.v-text-field--full-width .v-text-field__slot textarea,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__slot textarea {\n  margin-top: 0;\n}\n.v-textarea.v-text-field--full-width .v-text-field__details,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__details {\n  bottom: 4px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: -12px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 12px;\n}\n.v-textarea.v-text-field--box .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed .v-text-field__prefix,\n.v-textarea.v-text-field--box textarea,\n.v-textarea.v-text-field--enclosed textarea {\n  margin-top: 24px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--single-line textarea,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea {\n  margin-top: 12px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-label,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label {\n  top: 18px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line.v-text-field--outline .v-input__control,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-text-field--outline .v-input__control {\n  padding-top: 0;\n}\n.v-textarea.v-text-field--solo {\n  align-items: flex-start;\n}\n.v-textarea.v-text-field--solo .v-input__prepend-inner,\n.v-textarea.v-text-field--solo .v-input__prepend-outer,\n.v-textarea.v-text-field--solo .v-input__append-inner,\n.v-textarea.v-text-field--solo .v-input__append-outer {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.v-textarea--auto-grow textarea {\n  overflow: hidden;\n}\n.v-textarea--no-resize textarea {\n  resize: none;\n}\n",""])},function(t,e,n){"use strict"
var r=n(28)
n.n(r).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.main-container[data-v-e7f91608] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 10px;\n}\n.main-container .button-holder[data-v-e7f91608] {\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){var r=n(164)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-dialog {\n  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px;\n  overflow-y: auto;\n  pointer-events: auto;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: inherit;\n}\n.v-dialog__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 6;\n  outline: none;\n}\n.v-dialog:not(.v-dialog--fullscreen) {\n  max-height: 90%;\n}\n.v-dialog__activator {\n  cursor: pointer;\n}\n.v-dialog__activator * {\n  cursor: pointer;\n}\n.v-dialog__activator--disabled {\n  pointer-events: none;\n}\n.v-dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.v-dialog--animated {\n  animation-duration: 0.15s;\n  animation-name: animate-dialog;\n  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-dialog--fullscreen {\n  border-radius: 0;\n  margin: 0;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.v-dialog--fullscreen > .v-card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.v-dialog--scrollable {\n  display: flex;\n}\n.v-dialog--scrollable > .v-card {\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n}\n.v-dialog--scrollable > .v-card > .v-card__title,\n.v-dialog--scrollable > .v-card > .v-card__actions {\n  flex: 1 0 auto;\n}\n.v-dialog--scrollable > .v-card > .v-card__text {\n  overflow-y: auto;\n  backface-visibility: hidden;\n}\n@-moz-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n",""])},function(t,e,n){var r=n(166)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  z-index: 5;\n}\n.v-overlay--absolute {\n  position: absolute;\n}\n.v-overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: inherit;\n  transition-delay: 150ms;\n  width: 100%;\n}\n.v-overlay--active {\n  pointer-events: auto;\n  touch-action: none;\n}\n.v-overlay--active:before {\n  opacity: 0.46;\n}\n",""])},function(t,e,n){"use strict"
var r=n(29)
n.n(r).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.main-container[data-v-0b55ff9d] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.main-container .start-choice[data-v-0b55ff9d] {\n    font-size: 1.6em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n.main-container .start-choice .button-holder[data-v-0b55ff9d] {\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n}\n.main-container .purchase-container[data-v-0b55ff9d] {\n    background-color: #ffffff;\n    width: 600px;\n    text-align: center;\n    padding: 50px;\n}\n.main-container .button-holder[data-v-0b55ff9d] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){"use strict"
var r=n(30)
n.n(r).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.dialog-header[data-v-53219965] {\n  width: 100%;\n  display: flex;\n  position: relative;\n  background: #1976d2;\n  padding-right: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  flex: 0 0 36px;\n}\n.dialog-header button[data-v-53219965] {\n    margin: 2px;\n}\n.dialog-header .left-side-buttons[data-v-53219965] {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n}\n.dialog-header .right-side-buttons[data-v-53219965] {\n    flex: 1 1 auto;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.dialog-header .dialog-header-text[data-v-53219965] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.dialog-header .dialog-header-text p[data-v-53219965] {\n      color: white;\n      font-weight: 600;\n      font-size: 1.1em;\n      margin: 0;\n      user-select: none;\n}\n",""])},function(t,e,n){var r=n(172)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(4)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.v-tooltip {\n  position: relative;\n}\n.v-tooltip__content {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n  display: inline-block;\n  padding: 5px 8px;\n  position: absolute;\n  text-transform: initial;\n  transition: 0.15s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-tooltip__content[class*="-active"] {\n  pointer-events: none;\n}\n@media only screen and (max-width: 959px) {\n  .v-tooltip .v-tooltip__content {\n    padding: 10px 16px;\n  }\n}\n',""])},function(t,e,n){"use strict"
n.r(e)
var r={}
n.r(r),n.d(r,"linear",function(){return U}),n.d(r,"easeInQuad",function(){return D}),n.d(r,"easeOutQuad",function(){return j}),n.d(r,"easeInOutQuad",function(){return z}),n.d(r,"easeInCubic",function(){return $}),n.d(r,"easeOutCubic",function(){return K}),n.d(r,"easeInOutCubic",function(){return F}),n.d(r,"easeInQuart",function(){return V}),n.d(r,"easeOutQuart",function(){return Y}),n.d(r,"easeInOutQuart",function(){return H}),n.d(r,"easeInQuint",function(){return W}),n.d(r,"easeOutQuint",function(){return q}),n.d(r,"easeInOutQuint",function(){return G})
var i=n(1),o=n.n(i)
var s={bar:0,bottom:0,footer:0,insetFooter:0,left:0,right:0,top:0,components:{bar:{},bottom:{},footer:{},insetFooter:{},left:{},right:{},top:{}},bind:function(t,e,n){this.components[e]&&(this.components[e]=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},t,n),this.update(e))},unbind:function(t,e){null!=this.components[e][t]&&(delete this.components[e][t],this.update(e))},update:function(t){this[t]=Object.values(this.components[t]).reduce(function(t,e){return t+e},0)}},a=o.a.extend({data:function(){return{clientHeight:l(),clientWidth:u(),resizeTimeout:void 0}},computed:{breakpoint:function(){var t=this.clientWidth<600,e=this.clientWidth<960&&!t,n=this.clientWidth<1264&&!(e||t),r=this.clientWidth<1904&&!(n||e||t),i=this.clientWidth>=1904,o=t,s=e,a=(t||e)&&!(n||r||i),u=!t&&(e||n||r||i),l=n,c=(t||e||n)&&!(r||i),h=!(t||e)&&(n||r||i),f=r,d=(t||e||n||r)&&!i,p=!(t||e||n)&&(r||i),v=i,g=void 0
switch(!0){case t:g="xs"
break
case e:g="sm"
break
case n:g="md"
break
case r:g="lg"
break
default:g="xl"}return{xs:t,sm:e,md:n,lg:r,xl:i,name:g,xsOnly:o,smOnly:s,smAndDown:a,smAndUp:u,mdOnly:l,mdAndDown:c,mdAndUp:h,lgOnly:f,lgAndDown:d,lgAndUp:p,xlOnly:v,width:this.clientWidth,height:this.clientHeight}}},created:function(){"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.setDimensions,200)},setDimensions:function(){this.clientHeight=l(),this.clientWidth=u()}}})
function u(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function l(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h={primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}
var f={md:{complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached"},mdi:{complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half"},fa:{complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half"},fa4:{complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o"}}
var d={minifyTheme:null,themeCache:null,customProperties:!1,cspNonce:null}
var p={dataIterator:{rowsPerPageText:"Items per page:",rowsPerPageAll:"All",pageText:"{0}-{1} of {2}",noResultsText:"No matching records found",nextPage:"Next page",prevPage:"Previous page"},dataTable:{rowsPerPageText:"Rows per page:"},noDataText:"No data available"},v=("function"==typeof Symbol&&Symbol.iterator,Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})
function g(t,e){return Array.isArray(t)?t.concat(e):(t&&e.push(t),e)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments[2]
return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition"+(n.props.group?"-group":"")
n.data=n.data||{},n.data.props={name:t,mode:n.props.mode},n.data.on=n.data.on||{},Object.isExtensible(n.data.on)||(n.data.on=v({},n.data.on))
var i=[],o=[]
i.push(function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}),n.props.leaveAbsolute&&o.push(function(t){return t.style.position="absolute"}),n.props.hideOnLeave&&o.push(function(t){return t.style.display="none"})
var s=n.data.on,a=s.beforeEnter,u=s.leave
return n.data.on.beforeEnter=function(){return g(a,i)},n.data.on.leave=g(u,o),e(r,n.data,n.children)}}}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",{props:v({},r.props,{name:t}),on:e},r.children)}}}function y(t,e,n){t.addEventListener(e,function r(){n(),t.removeEventListener(e,r,!1)},!1)}function _(t,e,n){var r=e.length-1
if(r<0)return void 0===t?n:t
for(var i=0;i<r;i++){if(null==t)return n
t=t[e[i]]}return null==t?n:void 0===t[e[r]]?n:t[e[r]]}function x(t,e,n){return e&&e.constructor===String?_(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function w(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0
var e=+window.getComputedStyle(t).getPropertyValue("z-index")
return isNaN(e)?w(t.parentNode):e}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==t||""===t?void 0:isNaN(+t)?String(t):""+Number(t)+e}function E(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var S=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34}),T="$vuetify.icons."
function O(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return
e.$_alreadyWarned.push(t)}return"[Vuetify] "+t+(e?function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var r=e[e.length-1]
if(r.constructor===t.constructor){n++,t=t.$parent
continue}n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(function(t,e){return""+(0===e?"---\x3e ":" ".repeat(5+2*e))+(Array.isArray(t)?L(t[0])+"... ("+t[1]+" recursive calls)":L(t))}).join("\n")}return"\n\n(found in "+L(t)+")"}(e):"")}function A(t,e,n){var r=O(t,e,n)
null!=r&&console.warn(r)}function C(t,e,n){var r=O(t,e,n)
null!=r&&console.error(r)}function I(t,e,n,r){A("'"+t+"' is deprecated, use '"+e+"' instead",n,r)}var P=/(?:^|[-_])(\w)/g,B=function(t){return t.replace(P,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")}
function L(t,e){if(t.$root===t)return"<Root>"
var n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{},r=n.name||n._componentTag,i=n.__file
if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/)
r=o&&o[1]}return(r?"<"+B(r)+">":"<Anonymous>")+(i&&!1!==e?" at "+i:"")}var M="$vuetify.",R=Symbol("Lang fallback")
function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{locales:Object.assign({en:p},t.locales),current:t.current||"en",t:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
return e.startsWith(M)?t.t?t.t.apply(t,[e].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}(r))):function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n.replace(M,""),o=x(e,i,R)
return o===R&&(r?(C('Translation key "'+i+'" not found in fallback'),o=n):(A('Translation key "'+i+'" not found, falling back to default'),o=t(p,n,!0))),o}(this.locales[this.current],e).replace(/\{(\d+)\}/g,function(t,e){return String(r[+e])}):e}}}var U=function(t){return t},D=function(t){return t*t},j=function(t){return t*(2-t)},z=function(t){return t<.5?2*t*t:(4-2*t)*t-1},$=function(t){return t*t*t},K=function(t){return--t*t*t+1},F=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},V=function(t){return t*t*t*t},Y=function(t){return 1- --t*t*t*t},H=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},W=function(t){return t*t*t*t*t},q=function(t){return 1+--t*t*t*t*t},G=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},X={duration:500,offset:0,easing:"easeInOutCubic"}
function Z(t,e){var n=void 0
if(function(t){return null!=t&&t._isVue}(t)&&(t=t.$el),t instanceof Element)n=t.getBoundingClientRect().top+window.pageYOffset
else if("string"==typeof t){var r=document.querySelector(t)
if(!r)throw new TypeError('Target element "'+t+'" not found.')
n=r.getBoundingClientRect().top+window.pageYOffset}else{if("number"!=typeof t){var i=null==t?t:t.constructor.name
throw new TypeError("Target must be a Selector/Number/DOMElement/VueComponent, received "+i+" instead.")}n=t}return Math.round(Math.min(Math.max(n+e.offset,0),Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-(window.innerHeight||(document.documentElement||document.body).clientHeight)))}function J(t,e){return new Promise(function(n,i){if("undefined"==typeof window)return i("Window is undefined")
var o=Object.assign({},X,e),s=performance.now(),a=window.pageYOffset,u=Z(t,o),l=u-a,c="function"==typeof o.easing?o.easing:r[o.easing]
if(!c)throw new TypeError("Easing function '"+o.easing+"' not found.")
window.requestAnimationFrame(function e(r){var i=Math.min(1,(r-s)/o.duration),h=Math.floor(a+l*c(i))
if(window.scrollTo(0,h),Math.round(window.pageYOffset)===u||1===i)return n(t)
window.requestAnimationFrame(e)})})}var Q={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!this.installed){this.installed=!0,o.a!==t&&C("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"),function(t,e){var n=e||"^2.5.10",r=n.split(".",3).map(function(t){return t.replace(/\D/g,"")}).map(Number),i=t.version.split(".",3).map(function(t){return parseInt(t,10)})
i[0]===r[0]&&(i[1]>r[1]||i[1]===r[1]&&i[2]>=r[2])||A("Vuetify requires Vue version "+n)}(t)
var n=N(e.lang)
if(t.prototype.$vuetify=new t({mixins:[a],data:{application:s,dark:!1,icons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"md",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.assign({},f[t]||f.md,e)}(e.iconfont,e.icons),lang:n,options:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object.assign({},d,t)}(e.options),rtl:e.rtl,theme:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return!1!==t&&c({},h,t)}(e.theme)},methods:{goTo:J,t:n.t.bind(n)}}),e.directives)for(var r in e.directives)t.directive(r,e.directives[r])
!function e(n){if(n){for(var r in n){var i=n[r]
i&&!e(i.$_vuetify_subcomponents)&&t.component(r,i)}return!0}return!1}(e.components)}},version:"1.3.7"},tt=n(0),et=n(20),nt=n.n(et)
function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var it=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&rt(t.prototype,e),n&&rt(t,n)}(t,null,[{key:"strlen",value:function(t){return t?t.length:0}},{key:"strOK",value:function(t){return!!t&&t.length>0}}]),t}()
function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var st=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&ot(t.prototype,e),n&&ot(t,n)}(t,null,[{key:"paymentOperation",value:function(t,e,n,r){var i={destination:t,asset:n,amount:e,source:r}
return tt.Operation.payment(i)}},{key:"manageOfferOperation",value:function(t,e,n,r){var i={selling:e,buying:t,amount:n,price:r,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return tt.Operation.manageOffer(i)}},{key:"setOptionsOperation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t
return n.source=e,tt.Operation.setOptions(n)}},{key:"manageDataOperation",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={name:t,value:it.strOK(e)?e:null,source:n}
return tt.Operation.manageData(r)}},{key:"changeTrustOperation",value:function(t,e){var n={asset:t,limit:e,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return tt.Operation.changeTrust(n)}},{key:"allowTrustOperation",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={trustor:t,assetCode:e.getCode(),authorize:n,source:r}
return tt.Operation.allowTrust(i)}},{key:"pathPaymentOperation",value:function(t,e,n,r,i){var o={destination:t,sendAsset:e,sendMax:n,destAsset:r,destAmount:i,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return tt.Operation.pathPayment(o)}},{key:"multisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=[],s={source:i,signer:{ed25519PublicKey:t,weight:e}}
return o.push(tt.Operation.setOptions(s)),s={source:i,medThreshold:n,highThreshold:r},o.push(tt.Operation.setOptions(s)),o}},{key:"removeMultisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[],o={source:r,medThreshold:e,highThreshold:n}
return i.push(tt.Operation.setOptions(o)),o={source:r,signer:{ed25519PublicKey:t,weight:0}},i.push(tt.Operation.setOptions(o)),i}}]),t}(),at=n(46)
function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e){return!e||"object"!==ut(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):e}function ht(t){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ft(t,e){return(ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var dt=new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),ct(this,ht(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ft(t,e)}(e,at),function(t,e,n){e&&lt(t.prototype,e),n&&lt(t,n)}(e,[{key:"log",value:function(t,e){this.emit("transaction",t,e)}}]),e}())
Object.freeze(dt)
var pt=dt
function vt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var gt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.log("StellarAPI constructor missing parameter"),this._horizonServer=e}return function(t,e,n){e&&vt(t.prototype,e),n&&vt(t,n)}(t,[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var t=this.serverURL()+"/metrics"
return nt.a.get(t)}},{key:"accountInfo",value:function(t){return this.server().loadAccount(t)}},{key:"balances",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=[]
return t.balances.forEach(function(t){"native"===t.asset_type?e.push({symbol:"XLM",amount:t.balance,issuer:""}):e.push({symbol:t.asset_code,amount:t.balance,issuer:t.asset_issuer})}),e})}},{key:"balanceForAsset",value:function(t,e){var n=this
return t.publicKey().then(function(t){return n.server().loadAccount(t)}).then(function(t){var n=!0,r=!1,i=void 0
try{for(var o,s=t.balances[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var a=o.value
if("native"===a.asset_type){if(e.isNative())return a.balance}else if(a.asset_code===e.getCode()&&a.asset_issuer===e.getIssuer())return a.balance}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return"0"})}},{key:"paths",value:function(t,e,n,r){return this.server().paths(t,e,n,r)}},{key:"mergeAccount",value:function(t,e){var n=this,r="",i=""
return t.publicKey().then(function(t){return r=t,e.publicKey()}).then(function(t){return i=t,n.server().loadAccount(t)}).then(function(t){var n=new tt.TransactionBuilder(t).addOperation(tt.Operation.accountMerge({destination:i,source:r})).build()
return e.signTransaction(n)}).then(function(e){return t.signTransaction(e)}).then(function(t){return n.submitTransaction(t,"merge account")})}},{key:"manageOffer",value:function(t,e,n,r,i,o){var s=this,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0
return this._processAccounts(t,e).then(function(u){var l=st.manageOfferOperation(n,r,i,o,a,u.sourcePublicKey)
return s._submitOperations("manage offer",t,e,[l],u)})}},{key:"changeTrust",value:function(t,e,n,r){var i=this
return this._processAccounts(t,e).then(function(o){var s=st.changeTrustOperation(n,r,o.sourcePublicKey)
return i._submitOperations("change trust",t,e,[s],o)})}},{key:"allowTrust",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=null
return e.publicKey().then(function(e){return s=e,i._processAccounts(t,o)}).then(function(e){var a=st.allowTrustOperation(s,n,r,e.sourcePublicKey)
return i._submitOperations("allow trust",t,o,[a],e)})}},{key:"makeMultiSig",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=null
return e.publicKey().then(function(e){return o=e,n._processAccounts(t,r)}).then(function(e){var s=st.multisigOperations(o,1,i,i,e.sourcePublicKey)
return n._submitOperations("make multisig",t,r,s,e)})}},{key:"removeMultiSig",value:function(t,e,n){var r=this
return this.removeMultiSigTransaction(t,e,n).then(function(t){return r.submitTransaction(t,"remove multisig")})}},{key:"submitTransaction",value:function(t,e){return this.server().submitTransaction(t).then(function(t){return pt.log(t,e),t})}},{key:"removeMultiSigTransaction",value:function(t,e,n){var r=this,i=null
return t.publicKey().then(function(t){return r.server().loadAccount(t)}).then(function(t){return i=t,e.publicKey()}).then(function(e){var r=new tt.TransactionBuilder(i,n),o=st.removeMultisigOperations(e,1,1,null),s=!0,a=!1,u=void 0
try{for(var l,c=o[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var h=l.value
r.addOperation(h)}}catch(t){a=!0,u=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw u}}var f=r.build()
return t.signTransaction(f)}).then(function(t){return e.signTransaction(t)})}},{key:"sendAssetBatch",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null===o?tt.Asset.native():o,l=null,c=[]
return this._processAccounts(t,e).then(function(o){var h=Promise.resolve(),f=!0,d=!1,p=void 0
try{for(var v,g=function(){var t=v.value
h=h.then(function(){return t.publicKey()}).then(function(t){return l=t,i.server().loadAccount(l)}).then(function(t){if(!i._hasAssetTrustline(t,u))throw new Error("No trustline from destination to asset")
return null}).then(function(){var t=st.paymentOperation(l,r,u,o.sourcePublicKey)
return c.push(t),null})},m=n[Symbol.iterator]();!(f=(v=m.next()).done);f=!0)g()}catch(t){d=!0,p=t}finally{try{f||null==m.return||m.return()}finally{if(d)throw p}}return h.then(function(){return i._submitOperations("send asset batch",t,e,c,o,s,a)})})}},{key:"sendAsset",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null===o?tt.Asset.native():o,l=null
return n.publicKey().then(function(t){return l=t,i.server().loadAccount(l)}).then(function(n){if(!i._hasAssetTrustline(n,u))throw new Error("No trustline from destination to asset")
return i._processAccounts(t,e)}).then(function(n){var o=st.paymentOperation(l,r,u,n.sourcePublicKey)
return i._submitOperations("send asset",t,e,[o],n,s,a)})}},{key:"buyTokens",value:function(t,e,n,r,i){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null
return t.publicKey().then(function(t){return u=t,o.server().loadAccount(t)}).then(function(e){if(!o._hasAssetTrustline(e,n))throw new Error("No trustline from buyer to asset")
return o._processAccounts(t,s)}).then(function(l){var c=st.pathPaymentOperation(u,e,r,n,i,l.sourcePublicKey)
return o._submitOperations("buy asset",t,s,[c],l,null,a)})}},{key:"manageData",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(t,e).then(function(s){var a=st.manageDataOperation(n,r,s.sourcePublicKey)
return i._submitOperations("manage data",t,e,[a],s,null,o)})}},{key:"getFlags",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=0
return t.flags.auth_required&&(e|=tt.AuthRequiredFlag),t.flags.auth_revocable&&(e|=tt.AuthRevocableFlag),e})}},{key:"createAccount",value:function(t,e,n){var r,i=this
return e.publicKey().then(function(e){return r=e,t.publicKey()}).then(function(t){return i.server().loadAccount(t)}).then(function(e){var i={destination:r,startingBalance:n},o=new tt.TransactionBuilder(e).addOperation(tt.Operation.createAccount(i)).build()
return t.signTransaction(o)}).then(function(t){return i.submitTransaction(t,"create account")}).then(function(t){return i.server().loadAccount(r)})}},{key:"lockAccount",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=null
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
return this._processAccounts(t,r).then(function(o){var s=st.setOptionsOperation(e,o.sourcePublicKey)
return n._submitOperations("set options",t,r,[s],o,null,i)})}},{key:"_hasAssetTrustline",value:function(t,e){return!!e.isNative()||t.balances.some(function(t){return t.asset_code===e.getCode()&&t.asset_issuer===e.getIssuer()})}},{key:"_processAccounts",value:function(t,e){var n=this
return t.publicKey().then(function(t){return e?e.publicKey().then(function(e){return{sourcePublicKey:t,fundingPublicKey:e}}):{sourcePublicKey:t}}).then(function(t){var e=t.sourcePublicKey
return t.fundingPublicKey&&(e=t.fundingPublicKey),n.server().loadAccount(e).then(function(e){return t.account=e,t})})}},{key:"_submitOperations",value:function(t,e,n,r,i){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=new tt.TransactionBuilder(i.account),l=!0,c=!1,h=void 0
try{for(var f,d=r[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var p=f.value
u.addOperation(p)}}catch(t){c=!0,h=t}finally{try{l||null==d.return||d.return()}finally{if(c)throw h}}it.strOK(s)&&u.addMemo(tt.Memo.text(s))
var v=u.build()
return e.signTransaction(v).then(function(t){return n&&!n.equalTo(e)?n.signTransaction(t):t}).then(function(r){if(a&&a.length>0){var i=[]
i.push(e),n&&i.push(n)
var s=o._filteredSigners(a,i)
if(s.length>0){var u=Promise.resolve(),l=!0,c=!1,h=void 0
try{for(var f,d=function(){var t=f.value
u=u.then(function(){return t.signTransaction(r)})},p=s[Symbol.iterator]();!(l=(f=p.next()).done);l=!0)d()}catch(t){c=!0,h=t}finally{try{l||null==p.return||p.return()}finally{if(c)throw h}}return u.then(function(e){return o.submitTransaction(e,t)})}}return o.submitTransaction(r,t)})}},{key:"_filteredSigners",value:function(t,e){var n=t
if(t&&t.length>0&&e&&e.length>0){n=[]
var r=!0,i=!1,o=void 0
try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var u=s.value
if(u){var l=!1,c=!0,h=!1,f=void 0
try{for(var d,p=e[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var v=d.value
if(u.equalTo(v)){l=!0
break}}}catch(t){h=!0,f=t}finally{try{c||null==p.return||p.return()}finally{if(h)throw f}}l||n.push(u)}}}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}}return n}}]),t}()
function mt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var bt=function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverURL=e,this._testnet=n,this._testnet?tt.Network.useTestNetwork():tt.Network.usePublicNetwork(),this._server=new tt.Server(e,r)}return function(t,e,n){e&&mt(t.prototype,e),n&&mt(t,n)}(t,[{key:"server",value:function(){return this._testnet?tt.Network.useTestNetwork():tt.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}]),t}()
function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _t=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&yt(t.prototype,e),n&&yt(t,n)}(t,[{key:"publicKey",value:function(){var t=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(e){return t._publicKey=e,t._publicKey})}},{key:"equalTo",value:function(t){return!(!this.usingLedger()||!t.usingLedger())||(this._publicKey===t._publicKey||this._secret===t._secret)}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(t){var e=this
return this.publicKey().then(function(n){if(e.usingLedger())return e._confirmCallback&&e._confirmCallback(),e._ledgerAPI.signTransaction(n,t)
if(it.strOK(e._secret)){var r=tt.Keypair.fromSecret(e._secret)
return t.sign(r),t}throw new Error("This wallet does not contain a secret key.")}).then(function(t){return t})}}],[{key:"secret",value:function(e){var n=new t
return n._secret=e,n._publicKey=tt.Keypair.fromSecret(e).publicKey(),n}},{key:"ledger",value:function(e,n){var r=new t
return r._ledgerAPI=e,r._confirmCallback=n,r}},{key:"public",value:function(e){var n=new t
return n._publicKey=e,n}}]),t}(),xt=n(66),wt=n.n(xt),kt=n(67),Et=n.n(kt)
function St(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Tt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&St(t.prototype,e),n&&St(t,n)}(t,null,[{key:"setupForNode",value:function(t){this.nodeTransport=t}},{key:"isNodeTransport",value:function(t){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create(2e3,2e3):Et.a.create(2e3,2e3)}}]),t}()
function Ot(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var At=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=null,this.str=null}return function(t,e,n){e&&Ot(t.prototype,e),n&&Ot(t,n)}(t,[{key:"createTransport",value:function(){var t=this
return this.str?Promise.resolve():Tt.create().then(function(e){return t.transport=e,t.str=new wt.a(t.transport),null}).catch(function(t){throw console.log(JSON.stringify(t)),t})}},{key:"verifyConnect",value:function(){var t=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw t.transport.close(),t.str=null,t.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var t=this
return this.createTransport().then(function(){return t.verifyConnect().catch(function(e){return t.createTransport().then(function(){return t.verifyConnect()})})}).catch(function(t){throw console.log("Error: connect: "+JSON.stringify(t)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var t=this
return this.connect().then(function(){return t.str.getPublicKey("44'/148'/0'")}).then(function(t){return t.publicKey}).catch(function(t){throw console.log("Error: getPublicKey: "+JSON.stringify(t)),t})}},{key:"signTransaction",value:function(t,e){var n=this
return this.connect().then(function(){return n.str.signTransaction("44'/148'/0'",e.signatureBase())}).then(function(n){var r=n.signature,i=tt.Keypair.fromPublicKey(t)
if(i.verify(e.hash(),r)){var o=i.signatureHint(),s=new tt.xdr.DecoratedSignature({hint:o,signature:r})
return e.signatures.push(s),e}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(t){throw console.log("Error: signTransaction: "+JSON.stringify(t)),t})}}]),t}(),Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",{staticClass:"main-container"},[n("donate-view",{attrs:{donationPublicKey:t.donationPublicKey}}),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()])}
Ct._withStripped=!0
var It=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"payment-view"},[n("div",{staticClass:"input-title"},["start"!==t.dialogMode?n("v-icon",{staticClass:"back-button",attrs:{dark:"",large:""},on:{click:function(e){t.dialogMode="start"}}},[t._v("chevron_left")]):t._e(),t._v("\n    "+t._s(t.headerMessage)+"\n  ")],1),t._v(" "),n("div",{staticClass:"payment-content"},["start"===t.dialogMode?n("div",{staticClass:"payment-start"},[n("div",{staticClass:"title-start"},[t._v("Choose Method")]),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){t.buttonClick("useNano")}}},[t._v("Use Ledger Nano")])],1),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){t.buttonClick("useKey")}}},[t._v("Use secret key")])],1),t._v(" "),t.donate?n("div",{staticClass:"own-wallet"},[t._v("\n        Or use your favorite wallet:"),n("br"),t._v("To: "),n("span",{staticClass:"xlm-address"},[t._v(t._s(t.destinationPublicKey))])]):t._e()]):"useNano"===t.dialogMode?n("div",{staticClass:"payment-nano"},[n("v-text-field",{attrs:{label:"Lumens",type:"number",autofocus:""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithNano")}},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{spellcheck:"false",label:"Destination"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithNano")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.sendingPayment},on:{click:function(e){t.buttonClick("sendWithNano")}}},[t._v("Send with Ledger Nano")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):"useKey"===t.dialogMode?n("div",{staticClass:"payment-secret"},[n("v-text-field",{attrs:{label:"Amount",type:"number",autofocus:""},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{label:"Destination"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithSecret")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("v-text-field",{attrs:{spellcheck:"false",label:"Secret Key",counter:56,hint:"Starts with an 'S'","append-icon":t.showSecret?"visibility_off":"visibility","append-icon-cb":function(){return t.showSecret=!t.showSecret},type:t.showSecret?"text":"password"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null
t.buttonClick("sendWithSecret")}},model:{value:t.secretKey,callback:function(e){t.secretKey="string"==typeof e?e.trim():e},expression:"secretKey"}}),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.disableSendLumens},on:{click:function(e){t.buttonClick("sendWithSecret")}}},[t._v("Send Lumens")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):t._e()])])}
It._withStripped=!0
var Pt={props:["donationPublicKey"],data:function(){return{visible:!1,destinationPublicKey:"",donate:!1,dialogMode:"start",status:"",secretKey:"",sendingPayment:!1,xlm:10,showSecret:!1,browserSupportMessage:"",ledgerAPI:null,horizon:null}},computed:{disableSendLumens:function(){return it.strlen(this.secretKey)<10||this.xlm<1},headerMessage:function(){return"Send a Payment"}},created:function(){this.horizon=new bt("https://horizon.stellar.org",!1),it.strOK(this.donationPublicKey)&&(this.donate=!0,this.destinationPublicKey=this.donationPublicKey),Tt.isNodeTransport()?this.browserSupportMessage='Error: Make sure "Browser Support" is disabled':this.browserSupportMessage='Error: Make sure "Browser Support" is enabled',this.ledgerAPI=new At},methods:{buttonClick:function(t){switch(t){case"useNano":this.dialogMode="useNano",this.status=""
break
case"useKey":this.dialogMode="useKey",this.status=""
break
case"sendWithNano":this.sendWithNano()
break
case"sendWithSecret":this.sendWithSecret()
break
default:console.log("not handled: "+t)}},sendWithNano:function(){var t=this,e=_t.ledger(this.ledgerAPI,function(){t.status="Confirm transaction on Nano..."})
this.sendPayment(e)},sendWithSecret:function(){it.strOK(this.secretKey)?this.status="Please enter your secret key":this.sendPayment(_t.secret(this.secretKey))},verifyAccounts:function(t,e){var n=this
return this.horizon.server().loadAccount(e).then(function(e){return t.publicKey()}).then(function(t){return n.horizon.server().loadAccount(t)}).then(function(t){return t})},sendPayment:function(t){var e=this,n=this.destinationPublicKey
it.strOK(n)?this.xlm<1?this.status="Lumens must be greater than 0":(this.status="Building transaction...",this.sendingPayment=!0,this.verifyAccounts(t,n).then(function(r){var i=new tt.TransactionBuilder(r).addOperation(tt.Operation.payment({destination:n,asset:tt.Asset.native(),amount:String(e.xlm)})).build()
return t.signTransaction(i)}).then(function(t){return e.status="Submitting transaction...",e.horizon.server().submitTransaction(t)}).then(function(t){return e.status="Payment successful!",e.secretKey="",null}).catch(function(t){"connection failed"===t.message?e.status=e.browserSupportMessage:e.status="Error making payment: "+t.message}).finally(function(){e.sendingPayment=!1})):this.status="Destination is blank"}}}
n(138)
function Bt(t,e,n,r,i,o,s,a){var u,l="function"==typeof t?t.options:t
if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u
var c=l.render
l.render=function(t,e){return u.call(e),c(t,e)}}else{var h=l.beforeCreate
l.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:l}}var Lt=n(9),Mt=n.n(Lt)
n(140)
function Rt(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
return o.a.extend({mixins:e})}n(143)
var Nt=function(){return function(t,e){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0
try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(t,e)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function Dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jt(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var zt=o.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return jt(t)?e.style=Ut({},e.style,{"background-color":""+t,"border-color":""+t}):t&&(e.class=Ut({},e.class,Dt({},t,!0))),e},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(jt(t))e.style=Ut({},e.style,{color:""+t,"caret-color":""+t})
else if(t){var n=t.toString().trim().split(" ",2),r=Nt(n,2),i=r[0],o=r[1]
e.class=Ut({},e.class,Dt({},i+"--text",!0)),o&&(e.class["text--"+o]=!0)}return e}}}),$t=Rt(zt).extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:Number,default:0},size:{type:[Number,String],default:32},width:{type:Number,default:4},value:{type:[Number,String],default:0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseInt(this.value,10)},radius:function(){return 20},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return this.width/+this.size*this.viewBoxSize*2},styles:function(){return{height:this.calculatedSize+"px",width:this.calculatedSize+"px"}},svgStyles:function(){return{transform:"rotate("+this.rotate+"deg)"}},viewBoxSize:function(){return this.radius/(1-this.width/+this.size)}},methods:{genCircle:function(t,e,n){return t("circle",{class:"v-progress-circular__"+e,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":n}})},genSvg:function(t){var e=[this.indeterminate||this.genCircle(t,"underlay",0),this.genCircle(t,"overlay",this.strokeDashOffset)]
return t("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBoxSize+" "+this.viewBoxSize+" "+2*this.viewBoxSize+" "+2*this.viewBoxSize}},e)}},render:function(t){var e=t("div",{staticClass:"v-progress-circular__info"},[this.$slots.default]),n=this.genSvg(t)
return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[n,e])}})
function Kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ft(t,e){return function(){return A("The "+t+" component must be used inside a "+e)}}function Vt(t,e,n){var r=e&&n?{register:Ft(e,n),unregister:Ft(e,n)}:null
return o.a.extend({name:"registrable-inject",inject:Kt({},t,{default:r})})}function Yt(t,e,n){return Vt(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}Yt("itemGroup")
var Ht={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean}
var Wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return o.a.extend({name:"positionable",props:t.length?function(t,e){for(var n={},r=0;r<e.length;r++){var i=e[r]
void 0!==t[i]&&(n[i]=t[i])}return n}(Ht,t):Ht})}()
function qt(t,e){t.style.transform=e,t.style.webkitTransform=e}function Gt(t,e){t.style.opacity=e.toString()}var Xt={show:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(e._ripple&&e._ripple.enabled){var r=document.createElement("span"),i=document.createElement("span")
r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=" "+n.class)
var o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.getBoundingClientRect(),i=t.clientX-r.left,o=t.clientY-r.top,s=0,a=.3
e._ripple&&e._ripple.circle?(a=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt(Math.pow(i-s,2)+Math.pow(o-s,2))/4):s=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2
var u=(e.clientWidth-2*s)/2+"px",l=(e.clientHeight-2*s)/2+"px"
return{radius:s,scale:a,x:n.center?u:i-s+"px",y:n.center?l:o-s+"px",centerX:u,centerY:l}}(t,e,n),s=o.radius,a=o.scale,u=o.x,l=o.y,c=o.centerX,h=o.centerY
i.className="v-ripple__animation",i.style.width=2*s+"px",i.style.height=i.style.width,e.appendChild(r),"static"===window.getComputedStyle(e).position&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),qt(i,"translate("+u+", "+l+") scale3d("+a+","+a+","+a+")"),Gt(i,0),i.dataset.activated=String(performance.now()),setTimeout(function(){i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),qt(i,"translate("+c+", "+h+") scale3d(1,1,1)"),Gt(i,.25),setTimeout(function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),Gt(i,0)},300)},0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation")
if(0!==e.length){var n=e[e.length-1]
if(!n.dataset.isHiding){n.dataset.isHiding="true"
var r=performance.now()-Number(n.dataset.activated),i=Math.max(200-r,0)
setTimeout(function(){n.classList.remove("v-ripple__animation--out"),setTimeout(function(){1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)},300)},i)}}}}}
function Zt(t){return void 0===t||!!t}function Jt(t){var e={},n=t.currentTarget
n&&(e.center=n._ripple.centered,n._ripple.class&&(e.class=n._ripple.class),Xt.show(t,n,e))}function Qt(t){Xt.hide(t.currentTarget)}function te(t,e,n){var r=Zt(e.value)
r||Xt.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=r
var i=e.value||{}
i.center&&(t._ripple.centered=!0),i.class&&(t._ripple.class=e.value.class),i.circle&&(t._ripple.circle=i.circle),r&&!n?("ontouchstart"in window&&(t.addEventListener("touchend",Qt,!1),t.addEventListener("touchcancel",Qt,!1)),t.addEventListener("mousedown",Jt,!1),t.addEventListener("mouseup",Qt,!1),t.addEventListener("mouseleave",Qt,!1),t.addEventListener("dragstart",Qt,!1)):!r&&n&&ee(t)}function ee(t){t.removeEventListener("mousedown",Jt,!1),t.removeEventListener("touchend",Qt,!1),t.removeEventListener("touchcancel",Qt,!1),t.removeEventListener("mouseup",Qt,!1),t.removeEventListener("mouseleave",Qt,!1),t.removeEventListener("dragstart",Qt,!1)}var ne={bind:function(t,e){te(t,e,!1)},unbind:function(t){delete t._ripple,ee(t)},update:function(t,e){e.value!==e.oldValue&&te(t,e,Zt(e.oldValue))}},re=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
var ie=o.a.extend({name:"routable",directives:{Ripple:ne},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:[Boolean,Object],tag:String,target:String},computed:{computedRipple:function(){return!(!this.ripple||this.disabled)&&this.ripple}},methods:{click:function(t){},generateRouteLink:function(t){var e=this.exact,n=void 0,r=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({attrs:{disabled:this.disabled},class:t,props:{},directives:[{name:"ripple",value:this.computedRipple}]},this.to?"nativeOn":"on",re({},this.$listeners,{click:this.click}))
if(void 0===this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var i=this.activeClass,o=this.exactActiveClass||i
this.proxyClass&&(i+=" "+this.proxyClass,o+=" "+this.proxyClass),n=this.nuxt?"nuxt-link":"router-link",Object.assign(r.props,{to:this.to,exact:e,activeClass:i,exactActiveClass:o,append:this.append,replace:this.replace})}else"a"===(n=(this.href?"a":this.tag)||"a")&&this.href&&(r.attrs.href=this.href)
return this.target&&(r.attrs.target=this.target),{tag:n,data:r}}}}),oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function se(t){var e=oe({},t.props,t.injections),n=ae.options.computed.isDark.call(e)
return ae.options.computed.themeClasses.call({isDark:n})}var ae=o.a.extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.$vuetify.dark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),ue=ae
function le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input"
return o.a.extend({name:"toggleable",model:{prop:e,event:n},props:le({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},le(t,e,function(t){this.isActive=!!t}),le(t,"isActive",function(t){!!t!==this[e]&&this.$emit(n,t)}),t)})}var he=ce(),fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ve,ge=Rt(zt,ie,Wt,ue,Yt("btnToggle"),ce("inputValue")).extend({name:"v-btn",props:{activeClass:{type:String,default:"v-btn--active"},block:Boolean,depressed:Boolean,fab:Boolean,flat:Boolean,icon:Boolean,large:Boolean,loading:Boolean,outline:Boolean,ripple:{type:[Boolean,Object],default:null},round:Boolean,small:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"button"},value:null},computed:{classes:function(){var t
return de((pe(t={"v-btn":!0},this.activeClass,this.isActive),pe(t,"v-btn--absolute",this.absolute),pe(t,"v-btn--block",this.block),pe(t,"v-btn--bottom",this.bottom),pe(t,"v-btn--disabled",this.disabled),pe(t,"v-btn--flat",this.flat),pe(t,"v-btn--floating",this.fab),pe(t,"v-btn--fixed",this.fixed),pe(t,"v-btn--icon",this.icon),pe(t,"v-btn--large",this.large),pe(t,"v-btn--left",this.left),pe(t,"v-btn--loader",this.loading),pe(t,"v-btn--outline",this.outline),pe(t,"v-btn--depressed",this.depressed&&!this.flat||this.outline),pe(t,"v-btn--right",this.right),pe(t,"v-btn--round",this.round),pe(t,"v-btn--router",this.to),pe(t,"v-btn--small",this.small),pe(t,"v-btn--top",this.top),t),this.themeClasses)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0}
return!this.disabled&&(null!==this.ripple?this.ripple:t)}},methods:{click:function(t){!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("div",{class:"v-btn__content"},[this.$slots.default])},genLoader:function(){var t=[]
return this.$slots.loader?t.push(this.$slots.loader):t.push(this.$createElement($t,{props:{indeterminate:!0,size:23,width:2}})),this.$createElement("span",{class:"v-btn__loading"},t)}},render:function(t){var e=this.outline||this.flat?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(this.classes),r=n.tag,i=n.data,o=[this.genContent()]
return"button"===r&&(i.attrs.type=this.type),this.loading&&o.push(this.genLoader()),i.attrs.value=["string","number"].includes(fe(this.value))?this.value:JSON.stringify(this.value),t(r,e(this.color,i),o)}}),me=(n(145),o.a.extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}})),be=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(ve||(ve={}))
var _e=Rt(zt,me,ue).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},render:function(t){var e,n={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},r=function(t){return Object.keys(t)}(n).find(function(t){return n[t]&&!!t}),i=r&&ve[r]||k(this.size),o=[],s={staticClass:"v-icon",attrs:be({"aria-hidden":!0},this.$attrs),on:this.$listeners}
i&&(s.style={fontSize:i})
var a=""
this.$slots.default&&(a=this.$slots.default[0].text)
var u="material-icons",l=(a=function(t,e){return e.startsWith(T)?x(t,e,e):e}(this,a)).indexOf("-"),c=l>-1
return c?function(t){return["fas","far","fal","fab"].some(function(e){return t.includes(e)})}(u=a.slice(0,l))&&(u=""):o.push(a),s.class=be((ye(e={"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},u,!0),ye(e,a,c),e),this.themeClasses),t("i",this.setTextColor(this.color,s),o)}}),xe=o.a.extend({name:"v-icon",$_wrapperFor:_e,functional:!0,render:function(t,e){var n=e.data,r=e.children,i=""
return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(_e,n,i?[i]:r)}}),we=(n(147),n(149),xe),ke=(n(151),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),Ee={name:"v-label",functional:!0,mixins:[ue],props:{absolute:Boolean,color:{type:[Boolean,String],default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var n=e.children,r=e.listeners,i=e.props,o={staticClass:"v-label",class:ke({"v-label--active":i.value,"v-label--is-disabled":i.disabled},se(e)),attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:k(i.left),right:k(i.right),position:i.absolute?"absolute":"relative"}}
return t("label",zt.options.methods.setTextColor(i.focused&&i.color,o),n)}},Se=(n(153),{name:"v-messages",mixins:[zt,ue],props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e,domProps:{innerHTML:t}})}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe={name:"validatable",mixins:[zt,Vt("form")],props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,valid:!1}},computed:{hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasSuccess:function(){return this.successMessages.length>0||this.success},hasMessages:function(){return this.validations.length>0},hasState:function(){return this.hasSuccess||this.shouldValidate&&this.hasError},internalErrorMessages:function(){return this.errorMessages||""},shouldValidate:function(){return this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,this.errorCount)},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.color:null},validationTarget:function(){var t=this.internalErrorMessages.length>0?this.errorMessages:this.successMessages.length>0?this.successMessages:this.messages
return Array.isArray(t)?t.length>0?t:this.shouldValidate?this.errorBucket:[]:[t]}},watch:{rules:{handler:function(t,e){(function t(e,n){if(e===n)return!0
if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime())return!1
if(e!==Object(e)||n!==Object(n))return!1
var r=Object.keys(e)
return r.length===Object.keys(n).length&&r.every(function(r){return t(e[r],n[r])})})(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||this.readonly||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting:function(){var t=this
setTimeout(function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1},0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.internalValue,n=[]
t&&(this.hasInput=this.hasFocused=!0)
for(var r=0;r<this.rules.length;r++){var i=this.rules[r],o="function"==typeof i?i(e):i
!1===o||"string"==typeof o?n.push(o):!0!==o&&C("Rules should return a string or boolean, received '"+(void 0===o?"undefined":Te(o))+"' instead",this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}},Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ce={name:"v-input",mixins:[zt,ue,Oe],props:{appendIcon:String,appendIconCb:Function,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,label:String,persistentHint:Boolean,prependIcon:String,prependIconCb:Function,value:{required:!1}},data:function(t){return{lazyValue:t.value,hasMouseDown:!1}},computed:{classesInput:function(){return Ae({},this.classes,{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly},this.themeClasses)},directivesInput:function(){return[]},hasHint:function(){return!this.hasMessages&&this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return Boolean(this.$slots.label||this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return Boolean(this.disabled||this.readonly)},isLabelActive:function(){return this.isDirty}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this[t+"Icon"],o="click:"+E(t)
e=e||this[t+"IconCb"],r&&t&&e&&I(":"+t+"-icon-cb","@"+o,this)
var s={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[o]||e?{click:function(t){t.preventDefault(),t.stopPropagation(),n.$emit(o,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:null}
return this.$createElement("div",{staticClass:"v-input__icon v-input__icon--"+E(t),key:""+t+i},[this.$createElement(we,s,i)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:k(this.height)},directives:this.directivesInput,on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(Ee,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.$attrs.id,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){if(this.hideDetails)return null
var t=this.hasHint?[this.hint]:this.validations
return this.$createElement(Se,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?t:[]}})},genSlot:function(t,e,n){if(!n.length)return null
var r=t+"-"+e
return this.$createElement("div",{staticClass:"v-input__"+r,ref:r},n)},genPrependSlot:function(){var t=[]
return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[]
return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",attrs:this.attrsInput,class:this.classesInput}),this.genContent())}},Ie=(n(157),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),Pe={name:"v-counter",functional:!0,mixins:[ue],props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var n=e.props,r=parseInt(n.max,10),i=parseInt(n.value,10),o=r?i+" / "+r:n.value
return t("div",{staticClass:"v-counter",class:Ie({"error--text":r&&i>r},se(e))},o)}},Be=/[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/,Le=function(t){return t&&Be.test(t)},Me={"#":{test:function(t){return t.match(/[0-9]/)}},A:{test:function(t){return t.match(/[A-Z]/i)},convert:function(t){return t.toUpperCase()}},a:{test:function(t){return t.match(/[a-z]/i)},convert:function(t){return t.toLowerCase()}},N:{test:function(t){return t.match(/[0-9A-Z]/i)},convert:function(t){return t.toUpperCase()}},n:{test:function(t){return t.match(/[0-9a-z]/i)},convert:function(t){return t.toLowerCase()}},X:{test:Le}},Re=function(t){return Me.hasOwnProperty(t)},Ne=function(t,e){return Me[t].convert?Me[t].convert(e):e},Ue=function(t,e){return!(null==e||!Re(t))&&Me[t].test(e)},De=function(t){return t?String(t).replace(new RegExp(Be,"g"),""):t},je={name:"maskable",props:{dontFillMaskBlanks:Boolean,mask:{type:[Object,String],default:null},returnMaskedValue:Boolean},data:function(){return{selection:0,lazySelection:0,preDefined:{"credit-card":"#### - #### - #### - ####",date:"##/##/####","date-with-time":"##/##/#### ##:##",phone:"(###) ### - ####",social:"###-##-####",time:"##:##","time-with-seconds":"##:##:##"}}},computed:{masked:function(){return(this.preDefined[this.mask]||this.mask||"").split("")}},watch:{mask:function(){var t=this
if(this.$refs.input){for(var e=this.$refs.input.value,n=this.maskText(De(this.lazyValue)),r=0,i=this.selection,o=0;o<i;o++)Le(e[o])||r++
if(i=0,n)for(var s=0;s<n.length&&(Le(n[s])||r--,i++,!(r<=0));s++);this.$nextTick(function(){t.$refs.input.value=n,t.setCaretPosition(i)})}}},beforeMount:function(){if(this.mask&&null!=this.value&&this.returnMaskedValue){var t=this.maskText(this.value)
t!==this.value&&this.$emit("input",t)}},methods:{setCaretPosition:function(t){var e=this
this.selection=t,window.setTimeout(function(){e.$refs.input&&e.$refs.input.setSelectionRange(e.selection,e.selection)},0)},updateRange:function(){if(this.$refs.input){var t=this.maskText(this.lazyValue),e=0
if(this.$refs.input.value=t,t)for(var n=0;n<t.length&&!(this.lazySelection<=0);n++)Le(t[n])||this.lazySelection--,e++
this.setCaretPosition(e),this.$emit("input",this.returnMaskedValue?this.$refs.input.value:this.lazyValue)}},maskText:function(t){return this.mask?function(t,e,n){if(null==t)return""
if(t=String(t),!e.length||!t.length)return t
Array.isArray(e)||(e=e.split(""))
for(var r=0,i=0,o="";i<e.length;){var s=e[i],a=t[r]
if(Re(s)||a!==s)if(Re(s)||n){if(!Ue(s,a))return o
o+=Ne(s,a),r++}else o+=s
else o+=s,r++
i++}return o}(t,this.masked,this.dontFillMaskBlanks):t},unmaskText:function(t){return this.mask&&!this.returnMaskedValue?De(t):t},setSelectionRange:function(){this.$nextTick(this.updateRange)},resetSelections:function(t){if(t.selectionEnd){this.selection=t.selectionEnd,this.lazySelection=0
for(var e=0;e<this.selection;e++)Le(t.value[e])||this.lazySelection++}}}},ze=(n(155),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return{enter:function(e,n){e._parent=e.parentNode,e._height=null!=e._height?e._height:e.style.height,y(e,"transitionend",n),e.style.overflow="hidden",e.style.height=0,e.style.display="block",t&&e._parent.classList.add(t),setTimeout(function(){e.style.height=e._height||(e.scrollHeight?e.scrollHeight+"px":"auto")},100)},afterEnter:function(t){t.style.overflow=null,t._height||(t.style.height=null)},leave:function(t,e){y(t,"transitionend",e),t.style.overflow="hidden",t._height||(t.style.height=t.scrollHeight+"px"),setTimeout(function(){return t.style.height=0},100)},afterLeave:function(e){t&&e._parent&&e._parent.classList.remove(t),e._height||(e.style.height=null)}}}),$e=(m("bottom-sheet-transition"),m("carousel-transition"),m("carousel-reverse-transition"),m("tab-transition"),m("tab-reverse-transition"),m("menu-transition"),m("fab-transition","center center","out-in"),m("dialog-transition"),m("dialog-bottom-transition"),m("fade-transition")),Ke=(m("scale-transition"),m("scroll-x-transition"),m("scroll-x-reverse-transition"),m("scroll-y-transition"),m("scroll-y-reverse-transition"),m("slide-x-transition"))
m("slide-x-reverse-transition"),m("slide-y-transition"),m("slide-y-reverse-transition"),b("expand-transition",ze()),b("row-expand-transition",ze("datatable__expand-col--expanded"))
var Fe=Rt(zt).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:7},indeterminate:Boolean,query:Boolean,value:{type:[Number,String],default:0}},computed:{backgroundStyle:function(){var t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)
return{height:this.active?k(this.height):0,opacity:t,width:this.normalizedBufer+"%"}},effectiveWidth:function(){return this.normalizedBufer?100*+this.normalizedValue/+this.normalizedBufer:0},normalizedBufer:function(){return this.bufferValue<0?0:this.bufferValue>100?100:parseInt(this.bufferValue,10)},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseInt(this.value,10)},styles:function(){var t={}
return this.active||(t.height=0),this.indeterminate||100===parseInt(this.normalizedBufer,10)||(t.width=this.normalizedBufer+"%"),t}},methods:{genDeterminate:function(t){return t("div",this.setBackgroundColor(this.color,{ref:"front",staticClass:"v-progress-linear__bar__determinate",style:{width:this.effectiveWidth+"%"}}))},genBar:function(t,e){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__bar__indeterminate",class:function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,!0)}))},genIndeterminate:function(t){return t("div",{ref:"front",staticClass:"v-progress-linear__bar__indeterminate",class:{"v-progress-linear__bar__indeterminate--active":this.active}},[this.genBar(t,"long"),this.genBar(t,"short")])}},render:function(t){var e=t($e,this.indeterminate?[this.genIndeterminate(t)]:[]),n=t(Ke,this.indeterminate?[]:[this.genDeterminate(t)]),r=t("div",{staticClass:"v-progress-linear__bar",style:this.styles},[e,n]),i=t("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))
return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBufer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:{"v-progress-linear--query":this.query},style:{height:k(this.height)},on:this.$listeners},[i,r])}}),Ve=Fe,Ye=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Ve,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:2,indeterminate:!0}})}}}),He=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},We=["color","file","time","date","datetime-local","week","month"],qe={name:"v-text-field",directives:{Ripple:ne},extends:Ce,mixins:[je,Ye],inheritAttrs:!1,props:{appendOuterIcon:String,appendOuterIconCb:Function,autofocus:Boolean,box:Boolean,browserAutocomplete:String,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},clearIconCb:Function,color:{type:String,default:"primary"},counter:[Boolean,Number,String],flat:Boolean,fullWidth:Boolean,label:String,outline:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,prependInnerIconCb:Function,reverse:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,textarea:Boolean,type:{type:String,default:"text"}},data:function(){return{badInput:!1,initialValue:null,internalChange:!1,isClearing:!1}},computed:{classes:function(){return{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--box":this.box,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outline":this.hasOutline,"v-text-field--placeholder":this.placeholder}},counterValue:function(){return(this.internalValue||"").toString().length},directivesInput:function(){return[]},hasOutline:function(){return this.outline||this.textarea},internalValue:{get:function(){return this.lazyValue},set:function(t){this.mask?(this.lazyValue=this.unmaskText(this.maskText(this.unmaskText(t))),this.setSelectionRange()):(this.lazyValue=t,this.$emit("input",this.lazyValue))}},isDirty:function(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed:function(){return this.box||this.isSolo||this.hasOutline||this.fullWidth},isLabelActive:function(){return this.isDirty||We.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0
return!this.$vuetify.rtl!=!this.reverse?{left:"auto",right:t}:{left:t,right:"auto"}},showLabel:function(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder&&!this.prefixLabel)},labelValue:function(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder||this.prefixLabel)},prefixWidth:function(){if(this.prefix||this.$refs.prefix)return this.$refs.prefix.offsetWidth},prefixLabel:function(){return this.prefix&&!this.value}},watch:{isFocused:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},value:function(t){var e=this
if(this.mask&&!this.internalChange){var n=this.maskText(this.unmaskText(t))
this.lazyValue=this.unmaskText(n),String(t)!==this.lazyValue&&this.$nextTick(function(){e.$refs.input.value=n,e.$emit("input",e.lazyValue)})}else this.lazyValue=t}},mounted:function(){this.autofocus&&this.onFocus()},methods:{focus:function(){this.onFocus()},blur:function(){this.$refs.input?this.$refs.input.blur():this.onBlur()},clearableCallback:function(){var t=this
this.internalValue=null,this.$nextTick(function(){return t.$refs.input.focus()})},genAppendSlot:function(){var t=[]
return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[]
return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[]
return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=Ce.methods.genInputSlot.call(this),e=this.genPrependInnerSlot()
return e&&t.children.unshift(e),t},genClearIcon:function(){if(!this.clearable)return null
var t=!!this.isDirty&&"clear"
return this.clearIconCb&&I(":clear-icon-cb","@click:clear",this),this.genSlot("append","inner",[this.genIcon(t,!this.$listeners["click:clear"]&&this.clearIconCb||this.clearableCallback,!1)])},genCounter:function(){if(!1===this.counter||null==this.counter)return null
var t=!0===this.counter?this.$attrs.maxlength:this.counter
return this.$createElement(Pe,{props:{dark:this.dark,light:this.light,max:t,value:this.counterValue}})},genDefaultSlot:function(){return[this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genLabel:function(){if(!this.showLabel)return null
var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}}
return this.$attrs.id&&(t.props.for=this.$attrs.id),this.$createElement(Ee,t,this.$slots.label||this.label)},genInput:function(){var t=Object.assign({},this.$listeners)
delete t.change
var e={style:{},domProps:{value:this.maskText(this.lazyValue)},attrs:He({"aria-label":(!this.$attrs||!this.$attrs.id)&&this.label},this.$attrs,{autofocus:this.autofocus,disabled:this.disabled,readonly:this.readonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"}
return this.placeholder&&(e.attrs.placeholder=this.placeholder),this.mask&&(e.attrs.maxlength=this.masked.length),this.browserAutocomplete&&(e.attrs.autocomplete=this.browserAutocomplete),this.$createElement("input",e)},genMessages:function(){return this.hideDetails?null:this.$createElement("div",{staticClass:"v-text-field__details"},[Ce.methods.genMessages.call(this),this.genCounter()])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur:function(t){this.isFocused=!1,this.internalChange=!1,this.$emit("blur",t)},onClick:function(){this.isFocused||this.disabled||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,this.$emit("focus",t)))},onInput:function(t){this.internalChange=!0,this.mask&&this.resetSelections(t.target),this.internalValue=t.target.value,this.badInput=t.target.validity&&t.target.validity.badInput},onKeyDown:function(t){this.internalChange=!0,t.keyCode===S.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),Ce.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),Ce.methods.onMouseUp.call(this,t)}}},Ge=(n(159),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),Xe={name:"v-textarea",extends:qe,props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Ge({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},qe.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||qe.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this
setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&function(t,e,n){var r=O(t,e,n)
null!=r&&console.info(r)}('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input
if(t){t.style.height=0
var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight)
t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=qe.methods.genInput.call(this)
return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){qe.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}
var Ze={functional:!0,$_wrapperFor:qe,props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var n=e.props,r=e.data,i=e.slots,o=e.parent
!function(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){var e=t.on.input.indexOf(t.model.callback)
e>-1&&t.on.input.splice(e,1)}else delete t.on.input}(r)
var s=function(t,e){var n=[]
for(var r in t)t.hasOwnProperty(r)&&n.push(e("template",{slot:r},t[r]))
return n}(i(),t)
return n.textarea&&I("<v-text-field textarea>","<v-textarea outline>",Ze,o),n.multiLine&&I("<v-text-field multi-line>","<v-textarea>",Ze,o),n.textarea||n.multiLine?(r.attrs.outline=n.textarea,t(Xe,r,s)):t(qe,r,s)}},Je=Bt(Pt,It,[],!1,null,"2d2f5a4e",null)
Mt()(Je,{VBtn:ge,VIcon:xe,VTextField:Ze}),Je.options.__file="src/vue/PaymentView.vue"
var Qe=Je.exports,tn={props:["ping","donationPublicKey"],components:{"donate-view":Qe},watch:{ping:function(){this.visible=!0}},data:function(){return{visible:!1}}}
n(161),n(163)
function en(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}var nn=Rt().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?function t(e){for(var n=[],r=0;r<e.length;r++){var i=e[r]
i.isActive&&i.isDependent?n.push(i):n.push.apply(n,en(t(i.$children)))}return n}(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,en(e[n].getClickableDependentElements()))
return t},getClickableDependentElements:function(){var t=[this.$el]
return this.$refs.content&&t.push(this.$refs.content),t.push.apply(t,en(this.getOpenDependentElements())),t}}}),rn=o.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
var sn={name:"detachable",mixins:[rn],props:{attach:{type:null,default:!1,validator:function(t){var e=void 0===t?"undefined":on(t)
return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){if(this.$refs.content)try{this.$refs.content.parentNode.removeChild(this.$refs.content)}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId
return t&&function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;(t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):A("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},an=(n(165),{name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:null,overlayTransitionDuration:650}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this
if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active")
this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll()
var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]")
return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=t.activeZIndex-1))}),!0},removeOverlay:function(){var t=this
if(!this.overlay)return this.showScroll()
this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,t.showScroll()}catch(t){console.log(t)}clearTimeout(t.overlayTimeout),t.overlayTimeout=null},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return
var e=[S.up,S.pageup],n=[S.down,S.pagedown]
if(e.includes(t.keyCode))t.deltaY=-1
else{if(!n.includes(t.keyCode))return
t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1
var e=window.getComputedStyle(t)
return["auto","scroll"].includes(e["overflow-y"])&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),n=t.deltaY||-t.wheelDelta
if("keydown"===t.type&&e[0]===document.body){var r=this.$refs.dialog,i=window.getSelection().anchorNode
return!this.hasScrollbar(r)||!this.isInside(i,r)||this.shouldScroll(r,n)}for(var o=0;o<e.length;o++){var s=e[o]
if(s===document)return!0
if(s===document.documentElement)return!0
if(s===this.$refs.content)return!0
if(this.hasScrollbar(s))return this.shouldScroll(s,n)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath()
for(var e=[],n=t.target;n;){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e
n=n.parentElement}},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(window.addEventListener("wheel",this.scrollListener),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),un=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){this.originalValue=t,this.isActive=!1}}})
var ln={name:"stackable",data:function(){return{stackBase:null,stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0
var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:w(t)
return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.stackBase||this.$el,n=[this.stackMinZIndex,w(e)],r=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}(document.getElementsByClassName(this.stackClass))),i=0;i<r.length;i++)t.includes(r[i])||n.push(w(r[i]))
return Math.max.apply(Math,n)}}}
function cn(){return!1}function hn(t,e,n){n.args=n.args||{}
var r=n.args.closeConditional||cn
if(t&&!1!==r(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var i=(n.args.include||function(){return[]})()
i.push(e),!function(t,e){var n=t.clientX,r=t.clientY,i=!0,o=!1,s=void 0
try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var l=a.value
if(fn(l,n,r))return!0}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}return!1}(t,i)&&setTimeout(function(){r(t)&&n.value(t)},0)}}function fn(t,e,n){var r=t.getBoundingClientRect()
return e>=r.left&&e<=r.right&&n>=r.top&&n<=r.bottom}var dn={inserted:function(t,e){var n=function(n){return hn(n,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",n,!0),t._clickOutside=n},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body
e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}},pn=Rt(ue).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:ue.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),vn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function gn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var mn={name:"v-dialog",directives:{ClickOutside:dn},mixins:[nn,sn,an,un,ln,he],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t
return gn(t={},("v-dialog "+this.contentClass).trim(),!0),gn(t,"v-dialog--active",this.isActive),gn(t,"v-dialog--persistent",this.persistent),gn(t,"v-dialog--fullscreen",this.fullscreen),gn(t,"v-dialog--scrollable",this.scrollable),gn(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}}},watch:{isActive:function(t){t?this.show():(this.removeOverlay(),this.unbind())},fullscreen:function(t){t?this.hideScroll():this.showScroll()}},mounted:function(){this.isBooted=this.isActive,this.isActive&&this.show()},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this
this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):w(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):an.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.fullscreen&&this.hideScroll(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)}},render:function(t){var e=this,n=[],r={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}}
this.fullscreen||(r.style={maxWidth:"none"===this.maxWidth?void 0:k(this.maxWidth),width:"auto"===this.width?void 0:k(this.width)}),this.$slots.activator&&n.push(t("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:{click:function(t){t.stopPropagation(),e.disabled||(e.isActive=!e.isActive)}}},[this.$slots.activator]))
var i=t("div",r,this.showLazyContent(this.$slots.default))
return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),n.push(t("div",{class:this.contentClasses,attrs:vn({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(pn,{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.$slots.activator||this.fullWidth?"block":"inline-block"}},n)}},bn=Bt(tn,Ct,[],!1,null,"e7f91608",null)
Mt()(bn,{VBtn:ge,VDialog:mn}),bn.options.__file="src/vue/PaymentDialog.vue"
var yn=bn.exports,_n=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",persistent:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"main-container"},[t.showPurchase?t._e():n("div",{staticClass:"start-choice"},[n("div",[t._v("What would you like to use to purchase LMB tokens")]),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("bitcoin")}}},[t._v("Bitcoin")]),t._v(" "),n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("ethereum")}}},[t._v("Ethereum")])],1)]),t._v(" "),t.showPurchase?n("div",{staticClass:"purchase-container"},[n("v-btn",{attrs:{small:""},on:{click:function(e){t.buttonClick("back")}}},[t._v("Back")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.sendMessage)}}),t._v(" "),n("div",[t._v("Address = "+t._s(t.address))]),t._v(" "),n("p",[n("strong",[t._v("Rinkeby testnet. Do not send real coins!")])]),t._v(" "),n("p",[t._v("Exchange rate: 1 ETH = 1 LMB token")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/stellar/go/pull/81 ",target:"_blank "}},[t._v("Instructions")])]),t._v(" "),n("div",{staticClass:"progress "},[n("v-progress-linear",{model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress "}})],1),t._v(" "),n("div",[t._v("Status = "+t._s(t.status))]),t._v(" "),n("div",[t._v("Public Key = "+t._s(t.publicKey))]),t._v(" "),n("div",[t._v("Secret Key = "+t._s(t.secretKey))])],1):t._e(),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)])])}
function xn(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}_n._withStripped=!0
var wn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._checkParams(e),this.params=e
var n={}
void 0!==e.horizonAllowHttp&&(n.allowHttp=e.horizonAllowHttp),this.horizon=new tt.Server(this.params.horizonURL,n),"test"===e.network?tt.Network.useTestNetwork():tt.Network.usePublicNetwork(),this.started=!1}return function(t,e,n){e&&xn(t.prototype,e),n&&xn(t,n)}(t,[{key:"startBitcoin",value:function(t){return this._start("bitcoin",t)}},{key:"startEthereum",value:function(t){return this._start("ethereum",t)}},{key:"_start",value:function(t,e){var n=this
if(this.started)throw new Error("Session already started")
return this.started=!0,this.keypair=tt.Keypair.random(),new Promise(function(r,i){nt.a.post("".concat(n.params.bifrostURL,"/generate-").concat(t,"-address"),"stellar_public_key=".concat(n.keypair.publicKey())).then(function(o){if(o.data.chain!==t)return i("Invalid chain")
if(2!==o.data.protocol_version)return i("Invalid protocol_version. Make sure Bifrost server is using the same protocol version.")
var s=o.data.address
r({address:s,keypair:n.keypair}),n.signer=o.data.signer
var a=new EventSource("".concat(n.params.bifrostURL,"/events?stream=").concat(s))
a.addEventListener("transaction_received",function(t){return e("transaction_received")},!1),a.addEventListener("account_created",function(t){return n._onAccountCreated(e)},!1),a.addEventListener("exchanged",function(t){e("exchanged"),a.close()},!1),a.addEventListener("exchanged_timelocked",function(t){e("exchanged_timelocked",JSON.parse(t.data)),a.close()},!1),a.addEventListener("error",function(t){return console.error(t)},!1)}).catch(function(t){console.log(t),i()})})}},{key:"_onAccountCreated",value:function(t){var e=this
t("account_created"),this.horizon.loadAccount(this.keypair.publicKey()).then(function(t){e._onAccountCreatedRecoveryTransactions(t.sequenceNumber())
var n=new tt.TransactionBuilder(t).addOperation(tt.Operation.setOptions({masterWeight:0,signer:{ed25519PublicKey:e.signer,weight:1}})).build()
return n.sign(e.keypair),e.horizon.submitTransaction(n)}).then(function(){return t("account_configured")}).catch(function(e){return t("error",e)})}},{key:"_checkParams",value:function(t){if(void 0===t)throw new Error("params not provided")
if(-1===["live","test"].indexOf(t.network))throw new Error("Invalid params.network")
for(var e=["bifrostURL","horizonURL"],n=0;n<e.length;n++){var r=e[n]
if("string"!=typeof t[r])throw new Error("params.".concat(r," required and must be of type 'string'"))}if(void 0!==t.recoveryPublicKey&&!tt.StrKey.isValidEd25519PublicKey(t.recoveryPublicKey))throw new Error("params.recoveryPublicKey is invalid")}},{key:"_onAccountCreatedRecoveryTransactions",value:function(t){if(void 0!==this.params.recoveryPublicKey){var e=new tt.Account(this.keypair.publicKey(),t),n=new tt.TransactionBuilder(e).addOperation(tt.Operation.accountMerge({destination:this.params.recoveryPublicKey})).build()
n.sign(this.keypair),this._submitRecovery(n)}}},{key:"_submitRecovery",value:function(t){var e=t.toEnvelope().toXDR().toString("base64"),n=encodeURIComponent(e)
return nt.a.post("".concat(this.params.bifrostURL,"/recovery-transaction"),"transaction_xdr=".concat(n))}}]),t}(),kn={props:["ping","params"],data:function(){return{showPurchase:!1,purchaseCoin:"",progress:0,session:null,status:"",address:"loading...",publicKey:"",secretKey:"",visible:!1}},watch:{ping:function(){this.visible=!0}},computed:{sendMessage:function(){return"btc"===this.purchaseCoin?'<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>':'<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>'}},methods:{initBifrost:function(){this.session=new wn(this.params)},startBitcoin:function(){var t=this
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
default:console.log("no button with that name")}}}},En=(n(167),Bt(kn,_n,[],!1,null,"0b55ff9d",null))
Mt()(En,{VBtn:ge,VDialog:mn,VProgressLinear:Fe}),En.options.__file="src/vue/BuyTokenDialog.vue"
var Sn=En.exports,Tn=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"dialog-header"},[n("div",{staticClass:"dialog-header-text"},[n("p",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"left-side-buttons"},[t.showBack?n("v-btn",{staticClass:"dialog-back-button",attrs:{slot:"activator",icon:"",dark:""},on:{click:function(e){t.buttonClick("back")}},slot:"activator"},[n("v-icon",[t._v("chevron_left")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"right-side-buttons"},[n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[t.showPrint?n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){t.buttonClick("print")}},slot:"activator"},[n("v-icon",[t._v("print")])],1):t._e(),t._v(" "),n("span",[t._v("Print")])],1),t._v(" "),n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){t.buttonClick("close")}},slot:"activator"},[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.tooltip)}})],1)],1)])}
Tn._withStripped=!0
var On={props:["title","help","showPrint","showBack"],computed:{tooltip:function(){return this.help?"Help":"Close"},icon:function(){return this.help?"help_outline":"close"}},methods:{buttonClick:function(t){this.$emit(t)}}},An=(n(169),n(171),o.a.extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){this.clearDelay()
var n=parseInt(this[t+"Delay"],10)
this[t+"Timeout"]=setTimeout(e,n)}}})),Cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},Pn=o.a.extend({name:"menuable",mixins:[Wt,ln],props:{activator:{default:null,validator:function(t){return["string","object"].includes(void 0===t?"undefined":Cn(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,dimensions:Object.assign({},In),isContentActive:!1,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=t.width<e.width?e.width:t.width,r=0
return r+=this.left?t.left-(n-t.width):t.left,this.offsetX&&(r+=this.left?-t.width:t.width),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),r},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=this.top?t.bottom-e.height:t.top
return this.isAttached||(n+=this.pageYOffset),this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())}},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(t){var e=isNaN(parseInt(this.maxWidth))?0:parseInt(this.maxWidth),n=this.getInnerWidth(),r=Math.max(this.dimensions.content.width,e),i=t+r-n
return(!this.left||this.right)&&i>0&&(t=n-r-(n>600?30:12)),t<0&&(t=12),t},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,r=this.dimensions.activator,i=this.dimensions.content.height,o=n<t+i
return o&&this.offsetOverflow&&r.top>i?t=this.pageYOffset+(r.top-i):o&&!this.allowOverflow?t=n-i-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!=typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.getOffsetTop())},deactivate:function(){},getActivator:function(){return this.inputActivator?this.$el.querySelector(".v-input__slot"):this.activator?"string"==typeof this.activator?document.querySelector(this.activator):this.activator:this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getInnerWidth:function(){return this.hasWindow?window.innerWidth:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect()
return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t,e){if(!(t=e?t.querySelector(e):t)||!this.hasWindow)return null
var n=this.getRoundedBoundedClientRect(t)
if(this.isAttached){var r=window.getComputedStyle(t)
n.left=parseInt(r.marginLeft),n.top=parseInt(r.marginTop)}return n},sneakPeek:function(t){var e=this
requestAnimationFrame(function(){var n=e.$refs.content
if(!n||e.isShown(n))return t()
n.style.display="inline-block",t(),n.style.display="none"})},startTransition:function(){var t=this
requestAnimationFrame(function(){return t.isContentActive=!0})},isShown:function(t){return"none"!==t.style.display},updateDimensions:function(){var t=this
this.checkForWindow(),this.checkForPageYOffset()
var e={}
e.activator=!this.hasActivator||this.absolute?this.absolutePosition():this.measure(this.getActivator()),this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}})
function Bn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ln={name:"v-tooltip",mixins:[zt,An,nn,sn,Pn,he],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,r=!(this.bottom||this.left||this.top||this.right),i=0
return this.top||this.bottom||r?i=e.left+e.width/2-n.width/2:(this.left||this.right)&&(i=e.left+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),this.calcXOverflow(i)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,r=0
return this.top||this.bottom?r=e.top+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=e.top+e.height/2-n.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),this.calcYOverflow(r+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:k(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},mounted:function(){this.value&&this.callActivate()},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)}},render:function(t){var e,n=this,r=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},Bn(e,this.contentClass,!0),Bn(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default))
return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[r]),t("span",{on:this.disabled?{}:{mouseenter:function(){n.runDelay("open",function(){return n.isActive=!0})},mouseleave:function(){n.runDelay("close",function(){return n.isActive=!1})}},ref:"activator"},this.$slots.activator)])}},Mn=Bt(On,Tn,[],!1,null,"53219965",null)
Mt()(Mn,{VBtn:ge,VIcon:xe,VTooltip:Ln}),Mn.options.__file="src/vue/DialogTitleBar.vue"
var Rn=Mn.exports
n.d(e,"StellarAPI",function(){return gt}),n.d(e,"HorizonServer",function(){return bt}),n.d(e,"PaymentDialog",function(){return yn}),n.d(e,"PaymentView",function(){return Qe}),n.d(e,"DialogTitleBar",function(){return Rn}),n.d(e,"BuyTokenDialog",function(){return Sn}),n.d(e,"StellarWallet",function(){return _t}),n.d(e,"LedgerAPI",function(){return At}),n.d(e,"LedgerAPITransport",function(){return Tt}),n.d(e,"TransactionLogger",function(){return pt}),n.d(e,"StellarSdk",function(){return tt}),o.a.use(Q)}])})
