!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("stellar-sdk"),require("axios")):"function"==typeof define&&define.amd?define(["stellar-sdk","axios"],t):"object"==typeof exports?exports["stellar-js-utils"]=t(require("stellar-sdk"),require("axios")):e["stellar-js-utils"]=t(e["stellar-sdk"],e.axios)}(global,function(e,t){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var o=t[n]={i:n,l:!1,exports:{}}
return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var n=Object.create(null)
if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=29)}([function(t,r){t.exports=e},function(e,t,r){var n=r(20),o=n.Buffer
function i(e,t){for(var r in e)t[r]=e[r]}function a(e,t,r){return o(e,t,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=n:(i(n,t),t.Buffer=a),i(o,a),a.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number")
return o(e,t,r)},a.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number")
var n=o(e)
return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},a.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return o(e)},a.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return n.SlowBuffer(e)}},function(e,t,r){try{var n=r(18)
if("function"!=typeof n.inherits)throw""
e.exports=n.inherits}catch(t){e.exports=r(19)}},function(e,t,r){var n=r(1).Buffer
function o(e,t){this._block=n.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}o.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=n.from(e,t))
for(var r=this._block,o=this._blockSize,i=e.length,a=this._len,s=0;s<i;){for(var u=a%o,c=Math.min(i-s,o-u),l=0;l<c;l++)r[u+l]=e[s+l]
s+=c,(a+=c)%o==0&&this._update(r)}return this._len+=i,this},o.prototype.digest=function(e){var t=this._len%this._blockSize
this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var r=8*this._len
if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4)
else{var n=(4294967295&r)>>>0,o=(r-n)/4294967296
this._block.writeUInt32BE(o,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block)
var i=this._hash()
return e?i.toString(e):i},o.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=o},function(e,t){e.exports=require("events")},function(e,t,r){var n=r(2),o=r(3),i=r(1).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64)
function u(){this.init(),this._w=s,o.call(this,64,56)}function c(e,t,r){return r^e&(t^r)}function l(e,t,r){return e&t|r&(e|t)}function h(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function f(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function p(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}n(u,o),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,u=0|this._e,d=0|this._f,v=0|this._g,y=0|this._h,g=0;g<16;++g)r[g]=e.readInt32BE(4*g)
for(;g<64;++g)r[g]=0|(((t=r[g-2])>>>17|t<<15)^(t>>>19|t<<13)^t>>>10)+r[g-7]+p(r[g-15])+r[g-16]
for(var _=0;_<64;++_){var b=y+f(u)+c(u,d,v)+a[_]+r[_]|0,m=h(n)+l(n,o,i)|0
y=v,v=d,d=u,u=s+b|0,s=i,i=o,o=n,n=b+m|0}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0,this._f=d+this._f|0,this._g=v+this._g|0,this._h=y+this._h|0},u.prototype._hash=function(){var e=i.allocUnsafe(32)
return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=u},function(e,t,r){var n=r(2),o=r(3),i=r(1).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160)
function u(){this.init(),this._w=s,o.call(this,128,112)}function c(e,t,r){return r^e&(t^r)}function l(e,t,r){return e&t|r&(e|t)}function h(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function f(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function p(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function d(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function v(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function y(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function g(e,t){return e>>>0<t>>>0?1:0}n(u,o),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(e){for(var t=this._w,r=0|this._ah,n=0|this._bh,o=0|this._ch,i=0|this._dh,s=0|this._eh,u=0|this._fh,_=0|this._gh,b=0|this._hh,m=0|this._al,E=0|this._bl,w=0|this._cl,C=0|this._dl,A=0|this._el,T=0|this._fl,S=0|this._gl,k=0|this._hl,O=0;O<32;O+=2)t[O]=e.readInt32BE(4*O),t[O+1]=e.readInt32BE(4*O+4)
for(;O<160;O+=2){var I=t[O-30],P=t[O-30+1],U=p(I,P),B=d(P,I),x=v(I=t[O-4],P=t[O-4+1]),N=y(P,I),D=t[O-14],R=t[O-14+1],M=t[O-32],L=t[O-32+1],F=B+R|0,K=U+D+g(F,B)|0
K=(K=K+x+g(F=F+N|0,N)|0)+M+g(F=F+L|0,L)|0,t[O]=K,t[O+1]=F}for(var j=0;j<160;j+=2){K=t[j],F=t[j+1]
var z=l(r,n,o),q=l(m,E,w),G=h(r,m),H=h(m,r),Y=f(s,A),W=f(A,s),V=a[j],Q=a[j+1],X=c(s,u,_),J=c(A,T,S),Z=k+W|0,$=b+Y+g(Z,k)|0
$=($=($=$+X+g(Z=Z+J|0,J)|0)+V+g(Z=Z+Q|0,Q)|0)+K+g(Z=Z+F|0,F)|0
var ee=H+q|0,te=G+z+g(ee,H)|0
b=_,k=S,_=u,S=T,u=s,T=A,s=i+$+g(A=C+Z|0,C)|0,i=o,C=w,o=n,w=E,n=r,E=m,r=$+te+g(m=Z+ee|0,Z)|0}this._al=this._al+m|0,this._bl=this._bl+E|0,this._cl=this._cl+w|0,this._dl=this._dl+C|0,this._el=this._el+A|0,this._fl=this._fl+T|0,this._gl=this._gl+S|0,this._hl=this._hl+k|0,this._ah=this._ah+r+g(this._al,m)|0,this._bh=this._bh+n+g(this._bl,E)|0,this._ch=this._ch+o+g(this._cl,w)|0,this._dh=this._dh+i+g(this._dl,C)|0,this._eh=this._eh+s+g(this._el,A)|0,this._fh=this._fh+u+g(this._fl,T)|0,this._gh=this._gh+_+g(this._gl,S)|0,this._hh=this._hh+b+g(this._hl,k)|0},u.prototype._hash=function(){var e=i.allocUnsafe(64)
function t(t,r,n){e.writeInt32BE(t,n),e.writeInt32BE(r,n+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),t(this._gh,this._gl,48),t(this._hh,this._hl,56),e},e.exports=u},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.StatusCodes=t.DBNotReset=t.DBWrongPassword=t.NoDBPathGiven=t.FirmwareOrAppUpdateRequired=t.LedgerAPI5xx=t.LedgerAPI4xx=t.GenuineCheckFailed=t.PairingFailed=t.SyncError=t.FeeRequired=t.FeeNotLoaded=t.CantScanQRCode=t.ETHAddressNonEIP=t.WrongDeviceForAccount=t.WebsocketConnectionFailed=t.WebsocketConnectionError=t.DeviceShouldStayInApp=t.TransportInterfaceNotAvailable=t.TransportOpenUserCancelled=t.UserRefusedOnDevice=t.UserRefusedAllowManager=t.UserRefusedFirmwareUpdate=t.UserRefusedAddress=t.UserRefusedDeviceNameChange=t.UpdateYourApp=t.UnexpectedBootloader=t.TimeoutTagged=t.PasswordIncorrectError=t.PasswordsDontMatchError=t.NotEnoughBalanceBecauseDestinationNotCreated=t.NotEnoughBalance=t.NoAddressesFound=t.NetworkDown=t.ManagerUninstallBTCDep=t.ManagerNotEnoughSpaceError=t.ManagerDeviceLockedError=t.ManagerAppRelyOnBTCError=t.ManagerAppAlreadyInstalledError=t.LedgerAPINotAvailable=t.LedgerAPIErrorWithMessage=t.LedgerAPIError=t.UnknownMCU=t.LatestMCUInstalledError=t.InvalidAddressBecauseDestinationIsAlsoSource=t.InvalidAddress=t.HardResetFail=t.FeeEstimationFailed=t.EthAppPleaseEnableContractData=t.EnpointConfigError=t.DisconnectedDeviceDuringOperation=t.DisconnectedDevice=t.DeviceSocketNoBulkStatus=t.DeviceSocketFail=t.DeviceNameInvalid=t.DeviceHalted=t.DeviceInOSUExpected=t.DeviceOnDashboardExpected=t.DeviceNotGenuineError=t.DeviceGenuineSocketEarlyClose=t.DeviceAppVerifyNotSupported=t.CantOpenDevice=t.BtcUnmatchedApp=t.BluetoothRequired=t.AccountNameRequiredError=t.addCustomErrorDeserializer=t.createCustomErrorClass=t.deserializeError=t.serializeError=void 0,t.TransportError=o,t.getAltStatusMessage=a,t.TransportStatusError=s
var n=r(28)
t.serializeError=n.serializeError,t.deserializeError=n.deserializeError,t.createCustomErrorClass=n.createCustomErrorClass,t.addCustomErrorDeserializer=n.addCustomErrorDeserializer
t.AccountNameRequiredError=(0,n.createCustomErrorClass)("AccountNameRequired"),t.BluetoothRequired=(0,n.createCustomErrorClass)("BluetoothRequired"),t.BtcUnmatchedApp=(0,n.createCustomErrorClass)("BtcUnmatchedApp"),t.CantOpenDevice=(0,n.createCustomErrorClass)("CantOpenDevice"),t.DeviceAppVerifyNotSupported=(0,n.createCustomErrorClass)("DeviceAppVerifyNotSupported"),t.DeviceGenuineSocketEarlyClose=(0,n.createCustomErrorClass)("DeviceGenuineSocketEarlyClose"),t.DeviceNotGenuineError=(0,n.createCustomErrorClass)("DeviceNotGenuine"),t.DeviceOnDashboardExpected=(0,n.createCustomErrorClass)("DeviceOnDashboardExpected"),t.DeviceInOSUExpected=(0,n.createCustomErrorClass)("DeviceInOSUExpected"),t.DeviceHalted=(0,n.createCustomErrorClass)("DeviceHalted"),t.DeviceNameInvalid=(0,n.createCustomErrorClass)("DeviceNameInvalid"),t.DeviceSocketFail=(0,n.createCustomErrorClass)("DeviceSocketFail"),t.DeviceSocketNoBulkStatus=(0,n.createCustomErrorClass)("DeviceSocketNoBulkStatus"),t.DisconnectedDevice=(0,n.createCustomErrorClass)("DisconnectedDevice"),t.DisconnectedDeviceDuringOperation=(0,n.createCustomErrorClass)("DisconnectedDeviceDuringOperation"),t.EnpointConfigError=(0,n.createCustomErrorClass)("EnpointConfig"),t.EthAppPleaseEnableContractData=(0,n.createCustomErrorClass)("EthAppPleaseEnableContractData"),t.FeeEstimationFailed=(0,n.createCustomErrorClass)("FeeEstimationFailed"),t.HardResetFail=(0,n.createCustomErrorClass)("HardResetFail"),t.InvalidAddress=(0,n.createCustomErrorClass)("InvalidAddress"),t.InvalidAddressBecauseDestinationIsAlsoSource=(0,n.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource"),t.LatestMCUInstalledError=(0,n.createCustomErrorClass)("LatestMCUInstalledError"),t.UnknownMCU=(0,n.createCustomErrorClass)("UnknownMCU"),t.LedgerAPIError=(0,n.createCustomErrorClass)("LedgerAPIError"),t.LedgerAPIErrorWithMessage=(0,n.createCustomErrorClass)("LedgerAPIErrorWithMessage"),t.LedgerAPINotAvailable=(0,n.createCustomErrorClass)("LedgerAPINotAvailable"),t.ManagerAppAlreadyInstalledError=(0,n.createCustomErrorClass)("ManagerAppAlreadyInstalled"),t.ManagerAppRelyOnBTCError=(0,n.createCustomErrorClass)("ManagerAppRelyOnBTC"),t.ManagerDeviceLockedError=(0,n.createCustomErrorClass)("ManagerDeviceLocked"),t.ManagerNotEnoughSpaceError=(0,n.createCustomErrorClass)("ManagerNotEnoughSpace"),t.ManagerUninstallBTCDep=(0,n.createCustomErrorClass)("ManagerUninstallBTCDep"),t.NetworkDown=(0,n.createCustomErrorClass)("NetworkDown"),t.NoAddressesFound=(0,n.createCustomErrorClass)("NoAddressesFound"),t.NotEnoughBalance=(0,n.createCustomErrorClass)("NotEnoughBalance"),t.NotEnoughBalanceBecauseDestinationNotCreated=(0,n.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated"),t.PasswordsDontMatchError=(0,n.createCustomErrorClass)("PasswordsDontMatch"),t.PasswordIncorrectError=(0,n.createCustomErrorClass)("PasswordIncorrect"),t.TimeoutTagged=(0,n.createCustomErrorClass)("TimeoutTagged"),t.UnexpectedBootloader=(0,n.createCustomErrorClass)("UnexpectedBootloader"),t.UpdateYourApp=(0,n.createCustomErrorClass)("UpdateYourApp"),t.UserRefusedDeviceNameChange=(0,n.createCustomErrorClass)("UserRefusedDeviceNameChange"),t.UserRefusedAddress=(0,n.createCustomErrorClass)("UserRefusedAddress"),t.UserRefusedFirmwareUpdate=(0,n.createCustomErrorClass)("UserRefusedFirmwareUpdate"),t.UserRefusedAllowManager=(0,n.createCustomErrorClass)("UserRefusedAllowManager"),t.UserRefusedOnDevice=(0,n.createCustomErrorClass)("UserRefusedOnDevice"),t.TransportOpenUserCancelled=(0,n.createCustomErrorClass)("TransportOpenUserCancelled"),t.TransportInterfaceNotAvailable=(0,n.createCustomErrorClass)("TransportInterfaceNotAvailable"),t.DeviceShouldStayInApp=(0,n.createCustomErrorClass)("DeviceShouldStayInApp"),t.WebsocketConnectionError=(0,n.createCustomErrorClass)("WebsocketConnectionError"),t.WebsocketConnectionFailed=(0,n.createCustomErrorClass)("WebsocketConnectionFailed"),t.WrongDeviceForAccount=(0,n.createCustomErrorClass)("WrongDeviceForAccount"),t.ETHAddressNonEIP=(0,n.createCustomErrorClass)("ETHAddressNonEIP"),t.CantScanQRCode=(0,n.createCustomErrorClass)("CantScanQRCode"),t.FeeNotLoaded=(0,n.createCustomErrorClass)("FeeNotLoaded"),t.FeeRequired=(0,n.createCustomErrorClass)("FeeRequired"),t.SyncError=(0,n.createCustomErrorClass)("SyncError"),t.PairingFailed=(0,n.createCustomErrorClass)("PairingFailed"),t.GenuineCheckFailed=(0,n.createCustomErrorClass)("GenuineCheckFailed"),t.LedgerAPI4xx=(0,n.createCustomErrorClass)("LedgerAPI4xx"),t.LedgerAPI5xx=(0,n.createCustomErrorClass)("LedgerAPI5xx"),t.FirmwareOrAppUpdateRequired=(0,n.createCustomErrorClass)("FirmwareOrAppUpdateRequired"),t.NoDBPathGiven=(0,n.createCustomErrorClass)("NoDBPathGiven"),t.DBWrongPassword=(0,n.createCustomErrorClass)("DBWrongPassword"),t.DBNotReset=(0,n.createCustomErrorClass)("DBNotReset")
function o(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}o.prototype=new Error,(0,n.addCustomErrorDeserializer)("TransportError",function(e){return new o(e.message,e.id)})
var i=t.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function a(e){switch(e){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function s(e){this.name="TransportStatusError"
var t=Object.keys(i).find(function(t){return i[t]===e})||"UNKNOWN_ERROR",r=a(e)||t,n=e.toString(16)
this.message="Ledger device: "+r+" (0x"+n+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}s.prototype=new Error,(0,n.addCustomErrorDeserializer)("TransportStatusError",function(e){return new s(e.statusCode)})},function(e,r){e.exports=t},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(11)
var i=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v"
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.transport=t,t.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],r)}return n(e,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(e){var t=1===e[0]||e[1]<2
return{version:e[1]+"."+e[2]+"."+e[3],multiOpsEnabled:t}})}},{key:"getPublicKey",value:function(e,t,r){var n=this;(0,o.checkStellarBip32Path)(e)
var i=[],a=void 0,s=(0,o.splitPath)(e),u=new Buffer(1+4*s.length)
u[0]=s.length,s.forEach(function(e,t){u.writeUInt32BE(e,1+4*t)})
var c=Buffer.from("via lumina","ascii")
i.push(Buffer.concat([u,c]))
var l=!1
return(0,o.foreach)(i,function(e){return n.transport.send(224,l?16:2,t?1:0,r?1:0,e,[36864,28162]).then(function(e){28162===Buffer.from(e.slice(e.length-2)).readUInt16BE(0)&&(l=!0,i.push(Buffer.alloc(0))),a=e})}).then(function(){var e=0,r=a.slice(e,e+32)
e+=32
var n=(0,o.encodeEd25519PublicKey)(r)
if(t){var i=a.slice(e,e+64)
if(!(0,o.verifyEd25519Signature)(c,i,r))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:n,raw:r}})}},{key:"signTransaction",value:function(e,t){var r=this
if((0,o.checkStellarBip32Path)(e),t.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+t.length)
var n=[],i=void 0,a=(0,o.splitPath)(e),s=1+4*a.length,u=Buffer.alloc(s)
u[0]=a.length,a.forEach(function(e,t){u.writeUInt32BE(e,1+4*t)})
var c=150-s
if(t.length<=c)n.push(Buffer.concat([u,t]))
else{var l=Buffer.alloc(c),h=0
for(t.copy(l,0,h,c),n.push(Buffer.concat([u,l])),h+=c;h<t.length;){var f=t.length-h
c=f<150?f:150,l=Buffer.alloc(c),t.copy(l,0,h,h+c),h+=c,n.push(l)}}var p=!1
return(0,o.foreach)(n,function(e,t){return r.transport.send(224,p?16:4,0===t?0:128,t===n.length-1?0:128,e,[36864,27013,27684,27685,28162]).then(function(e){28162===Buffer.from(e.slice(e.length-2)).readUInt16BE(0)&&(p=!0,n.push(Buffer.alloc(0))),i=e})}).then(function(){var n=Buffer.from(i.slice(i.length-2)).readUInt16BE(0)
if(36864===n)return{signature:Buffer.from(i.slice(0,i.length-2))}
if(27684===n)return r.signHash_private(e,(0,o.hash)(t))
if(27685===n)return r.signHash_private(e,(0,o.hash)(t))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(e,t){return(0,o.checkStellarBip32Path)(e),this.signHash_private(e,t)}},{key:"signHash_private",value:function(e,t){var r=this,n=[],i=void 0,a=(0,o.splitPath)(e),s=Buffer.alloc(1+4*a.length)
s[0]=a.length,a.forEach(function(e,t){s.writeUInt32BE(e,1+4*t)}),n.push(Buffer.concat([s,t]))
var u=!1
return(0,o.foreach)(n,function(e){return r.transport.send(224,u?16:8,0,0,e,[36864,27013,27750,27904,28162]).then(function(e){28162===Buffer.from(e.slice(e.length-2)).readUInt16BE(0)&&(u=!0,n.push(Buffer.alloc(0))),i=e})}).then(function(){var e=Buffer.from(i.slice(i.length-2)).readUInt16BE(0)
if(36864===e)return{signature:Buffer.from(i.slice(0,i.length-2))}
throw 27013===e?new Error("Transaction approval request was rejected"):27904===e?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),e}()
t.default=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(24),s=r(27),u=(n=s)&&n.__esModule?n:{default:n},c=r(7)
function l(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,r){return function n(o,i){try{var a=t[o](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)})
e(s)}("next")})}}var h=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},f=function(e){return e.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*e.length%4)}
function p(e,t,r,n,o){var i=function(e,t){for(var r=Buffer.alloc(e.length),n=0;n<e.length;n++)r[n]=e[n]^t[n%t.length]
return r}(e,n),s=Buffer.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),u={version:"U2F_V2",keyHandle:h(i.toString("base64")),challenge:h(s.toString("base64")),appId:location.origin}
return r&&r("=> "+e.toString("hex")),(0,a.sign)(u,t/1e3).then(function(e){var t=e.signatureData
if("string"==typeof t){var n=Buffer.from(f(t),"base64"),i=void 0
return i=o?n.slice(5):n,r&&r("<= "+i.toString("hex")),i}throw e})}var d=[]
var v=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
return e.unwrap=!0,d.push(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),i(t,null,[{key:"open",value:function(){var e=l(regeneratorRuntime.mark(function e(r){arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new t)
case 1:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}()}]),i(t,[{key:"exchange",value:function(){var e=l(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return e.abrupt("return",e.sent)
case 6:if(e.prev=6,e.t0=e.catch(0),!("object"===o(e.t0.metaData))){e.next=14
break}throw 5===e.t0.metaData.code&&(d.forEach(function(e){return e.emit("disconnect")}),d=[]),r=e.t0,n="Failed to sign with Ledger device: U2F "+e.t0.metaData.type,i="U2F_"+e.t0.metaData.code,a=void 0,(a=new c.TransportError(n,i)).originalError=r,a
case 14:throw e.t0
case 15:case"end":return e.stop()}var r,n,i,a},e,this,[[0,6]])}))
return function(t){return e.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(e){this.scrambleKey=Buffer.from(e,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}]),t}()
v.isSupported=a.isSupported,v.list=function(){return(0,a.isSupported)().then(function(e){return e?[null]:[]})},v.listen=function(e){var t=!1
return(0,a.isSupported)().then(function(r){t||(r?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new c.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){t=!0}}},t.default=v},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.splitPath=function(e){var t=[]
return e.split("/").forEach(function(e){var r=parseInt(e,10)
isNaN(r)||(e.length>1&&"'"===e[e.length-1]&&(r+=2147483648),t.push(r))}),t},t.foreach=function(e,t){return Promise.resolve().then(function(){return function e(r,n,o){return r>=n.length?o:t(n[r],r).then(function(t){return o.push(t),e(r+1,n,o)})}(0,e,[])})},t.crc16xmodem=s,t.encodeEd25519PublicKey=function(e){var t=Buffer.from(e),r=Buffer.from([48]),o=Buffer.concat([r,t]),i=Buffer.alloc(2)
i.writeUInt16LE(s(o),0)
var a=Buffer.concat([o,i])
return n.default.encode(a)},t.verifyEd25519Signature=function(e,t,r){return o.default.sign.detached.verify(new Uint8Array(e.toJSON().data),new Uint8Array(t.toJSON().data),new Uint8Array(r.toJSON().data))},t.hash=function(e){var t=new i.sha256
return t.update(e,"utf8"),t.digest()},t.checkStellarBip32Path=function(e){e.split("/").forEach(function(e){if(!e.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var n=a(r(12)),o=a(r(14)),i=r(16)
function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=void 0!==t?~~t:0,n=0;n<e.length;n++){var o=r>>>8&255
o^=255&e[n],r=r<<8&65535,r^=o^=o>>>4,r^=o=o<<5&65535,r^=o=o<<7&65535}return r}},function(e,t,r){"use strict"
var n=r(13),o=n.Decoder.prototype.finalize
n.Decoder.prototype.finalize=function(e){var t=o.call(this,e)
return new Buffer(t)},e.exports=n},function(e,t,r){"use strict"
var n=function(e,t){return t||(t={}),e.split("").forEach(function(e,r){e in t||(t[e]=r)}),t},o={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}}
o.charmap=n(o.alphabet,o.charmap)
var i={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}}
i.charmap=n(i.alphabet,i.charmap)
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
default:throw new Error("invalid type")}e.alphabet?this.alphabet=e.alphabet:e.lc&&(this.alphabet=this.alphabet.toLowerCase())}}a.charmap=n(a.alphabet,a.charmap),s.prototype.charmap=o.charmap,s.prototype.write=function(e){var t=this.charmap,r=this.buf,n=this.shift,o=this.carry
return e.toUpperCase().split("").forEach(function(e){if("="!=e){var i=255&t[e];(n-=5)>0?o|=i<<n:n<0?(r.push(o|i>>-n),o=i<<(n+=8)&255):(r.push(o|i),n=8,o=0)}}),this.shift=n,this.carry=o,this},s.prototype.finalize=function(e){return e&&this.write(e),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},u.prototype.alphabet=o.alphabet,u.prototype.write=function(e){var t,r,n,o=this.shift,i=this.carry
for(n=0;n<e.length;n++)t=i|(r=e[n])>>o,this.buf+=this.alphabet[31&t],o>5&&(t=r>>(o-=5),this.buf+=this.alphabet[31&t]),i=r<<(o=5-o),o=8-o
return this.shift=o,this.carry=i,this},u.prototype.finalize=function(e){return e&&this.write(e),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},t.encode=function(e,t){return new u(t).finalize(e)},t.decode=function(e,t){return new s(t).finalize(e)},t.Decoder=s,t.Encoder=u,t.charmap=n,t.crockford=i,t.rfc4648=o,t.base32hex=a},function(e,t,r){!function(e){"use strict"
var t=function(e){var t,r=new Float64Array(16)
if(e)for(t=0;t<e.length;t++)r[t]=e[t]
return r},n=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32)
i[0]=9
var a=t(),s=t([1]),u=t([56129,1]),c=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),l=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),h=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),f=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function d(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n}function v(e,t,r,n,o){var i,a=0
for(i=0;i<o;i++)a|=e[t+i]^r[n+i]
return(1&a-1>>>8)-1}function y(e,t,r,n){return v(e,t,r,n,16)}function g(e,t,r,n){return v(e,t,r,n,32)}function _(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,c=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,l=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,f=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,p=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,g=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,_=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,b=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,m=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,E=i,w=a,C=s,A=u,T=c,S=l,k=h,O=f,I=p,P=d,U=v,B=y,x=g,N=_,D=b,R=m,M=0;M<20;M+=2)E^=(o=(x^=(o=(I^=(o=(T^=(o=E+x|0)<<7|o>>>25)+E|0)<<9|o>>>23)+T|0)<<13|o>>>19)+I|0)<<18|o>>>14,S^=(o=(w^=(o=(N^=(o=(P^=(o=S+w|0)<<7|o>>>25)+S|0)<<9|o>>>23)+P|0)<<13|o>>>19)+N|0)<<18|o>>>14,U^=(o=(k^=(o=(C^=(o=(D^=(o=U+k|0)<<7|o>>>25)+U|0)<<9|o>>>23)+D|0)<<13|o>>>19)+C|0)<<18|o>>>14,R^=(o=(B^=(o=(O^=(o=(A^=(o=R+B|0)<<7|o>>>25)+R|0)<<9|o>>>23)+A|0)<<13|o>>>19)+O|0)<<18|o>>>14,E^=(o=(A^=(o=(C^=(o=(w^=(o=E+A|0)<<7|o>>>25)+E|0)<<9|o>>>23)+w|0)<<13|o>>>19)+C|0)<<18|o>>>14,S^=(o=(T^=(o=(O^=(o=(k^=(o=S+T|0)<<7|o>>>25)+S|0)<<9|o>>>23)+k|0)<<13|o>>>19)+O|0)<<18|o>>>14,U^=(o=(P^=(o=(I^=(o=(B^=(o=U+P|0)<<7|o>>>25)+U|0)<<9|o>>>23)+B|0)<<13|o>>>19)+I|0)<<18|o>>>14,R^=(o=(D^=(o=(N^=(o=(x^=(o=R+D|0)<<7|o>>>25)+R|0)<<9|o>>>23)+x|0)<<13|o>>>19)+N|0)<<18|o>>>14
E=E+i|0,w=w+a|0,C=C+s|0,A=A+u|0,T=T+c|0,S=S+l|0,k=k+h|0,O=O+f|0,I=I+p|0,P=P+d|0,U=U+v|0,B=B+y|0,x=x+g|0,N=N+_|0,D=D+b|0,R=R+m|0,e[0]=E>>>0&255,e[1]=E>>>8&255,e[2]=E>>>16&255,e[3]=E>>>24&255,e[4]=w>>>0&255,e[5]=w>>>8&255,e[6]=w>>>16&255,e[7]=w>>>24&255,e[8]=C>>>0&255,e[9]=C>>>8&255,e[10]=C>>>16&255,e[11]=C>>>24&255,e[12]=A>>>0&255,e[13]=A>>>8&255,e[14]=A>>>16&255,e[15]=A>>>24&255,e[16]=T>>>0&255,e[17]=T>>>8&255,e[18]=T>>>16&255,e[19]=T>>>24&255,e[20]=S>>>0&255,e[21]=S>>>8&255,e[22]=S>>>16&255,e[23]=S>>>24&255,e[24]=k>>>0&255,e[25]=k>>>8&255,e[26]=k>>>16&255,e[27]=k>>>24&255,e[28]=O>>>0&255,e[29]=O>>>8&255,e[30]=O>>>16&255,e[31]=O>>>24&255,e[32]=I>>>0&255,e[33]=I>>>8&255,e[34]=I>>>16&255,e[35]=I>>>24&255,e[36]=P>>>0&255,e[37]=P>>>8&255,e[38]=P>>>16&255,e[39]=P>>>24&255,e[40]=U>>>0&255,e[41]=U>>>8&255,e[42]=U>>>16&255,e[43]=U>>>24&255,e[44]=B>>>0&255,e[45]=B>>>8&255,e[46]=B>>>16&255,e[47]=B>>>24&255,e[48]=x>>>0&255,e[49]=x>>>8&255,e[50]=x>>>16&255,e[51]=x>>>24&255,e[52]=N>>>0&255,e[53]=N>>>8&255,e[54]=N>>>16&255,e[55]=N>>>24&255,e[56]=D>>>0&255,e[57]=D>>>8&255,e[58]=D>>>16&255,e[59]=D>>>24&255,e[60]=R>>>0&255,e[61]=R>>>8&255,e[62]=R>>>16&255,e[63]=R>>>24&255}(e,t,r,n)}function b(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,s=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,u=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,c=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,l=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,f=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,p=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,g=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,_=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,b=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,m=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,E=0;E<20;E+=2)i^=(o=(g^=(o=(p^=(o=(c^=(o=i+g|0)<<7|o>>>25)+i|0)<<9|o>>>23)+c|0)<<13|o>>>19)+p|0)<<18|o>>>14,l^=(o=(a^=(o=(_^=(o=(d^=(o=l+a|0)<<7|o>>>25)+l|0)<<9|o>>>23)+d|0)<<13|o>>>19)+_|0)<<18|o>>>14,v^=(o=(h^=(o=(s^=(o=(b^=(o=v+h|0)<<7|o>>>25)+v|0)<<9|o>>>23)+b|0)<<13|o>>>19)+s|0)<<18|o>>>14,m^=(o=(y^=(o=(f^=(o=(u^=(o=m+y|0)<<7|o>>>25)+m|0)<<9|o>>>23)+u|0)<<13|o>>>19)+f|0)<<18|o>>>14,i^=(o=(u^=(o=(s^=(o=(a^=(o=i+u|0)<<7|o>>>25)+i|0)<<9|o>>>23)+a|0)<<13|o>>>19)+s|0)<<18|o>>>14,l^=(o=(c^=(o=(f^=(o=(h^=(o=l+c|0)<<7|o>>>25)+l|0)<<9|o>>>23)+h|0)<<13|o>>>19)+f|0)<<18|o>>>14,v^=(o=(d^=(o=(p^=(o=(y^=(o=v+d|0)<<7|o>>>25)+v|0)<<9|o>>>23)+y|0)<<13|o>>>19)+p|0)<<18|o>>>14,m^=(o=(b^=(o=(_^=(o=(g^=(o=m+b|0)<<7|o>>>25)+m|0)<<9|o>>>23)+g|0)<<13|o>>>19)+_|0)<<18|o>>>14
e[0]=i>>>0&255,e[1]=i>>>8&255,e[2]=i>>>16&255,e[3]=i>>>24&255,e[4]=l>>>0&255,e[5]=l>>>8&255,e[6]=l>>>16&255,e[7]=l>>>24&255,e[8]=v>>>0&255,e[9]=v>>>8&255,e[10]=v>>>16&255,e[11]=v>>>24&255,e[12]=m>>>0&255,e[13]=m>>>8&255,e[14]=m>>>16&255,e[15]=m>>>24&255,e[16]=h>>>0&255,e[17]=h>>>8&255,e[18]=h>>>16&255,e[19]=h>>>24&255,e[20]=f>>>0&255,e[21]=f>>>8&255,e[22]=f>>>16&255,e[23]=f>>>24&255,e[24]=p>>>0&255,e[25]=p>>>8&255,e[26]=p>>>16&255,e[27]=p>>>24&255,e[28]=d>>>0&255,e[29]=d>>>8&255,e[30]=d>>>16&255,e[31]=d>>>24&255}(e,t,r,n)}var m=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function E(e,t,r,n,o,i,a){var s,u,c=new Uint8Array(16),l=new Uint8Array(64)
for(u=0;u<16;u++)c[u]=0
for(u=0;u<8;u++)c[u]=i[u]
for(;o>=64;){for(_(l,c,a,m),u=0;u<64;u++)e[t+u]=r[n+u]^l[u]
for(s=1,u=8;u<16;u++)s=s+(255&c[u])|0,c[u]=255&s,s>>>=8
o-=64,t+=64,n+=64}if(o>0)for(_(l,c,a,m),u=0;u<o;u++)e[t+u]=r[n+u]^l[u]
return 0}function w(e,t,r,n,o){var i,a,s=new Uint8Array(16),u=new Uint8Array(64)
for(a=0;a<16;a++)s[a]=0
for(a=0;a<8;a++)s[a]=n[a]
for(;r>=64;){for(_(u,s,o,m),a=0;a<64;a++)e[t+a]=u[a]
for(i=1,a=8;a<16;a++)i=i+(255&s[a])|0,s[a]=255&i,i>>>=8
r-=64,t+=64}if(r>0)for(_(u,s,o,m),a=0;a<r;a++)e[t+a]=u[a]
return 0}function C(e,t,r,n,o){var i=new Uint8Array(32)
b(i,n,o,m)
for(var a=new Uint8Array(8),s=0;s<8;s++)a[s]=n[s+16]
return w(e,t,r,a,i)}function A(e,t,r,n,o,i,a){var s=new Uint8Array(32)
b(s,i,a,m)
for(var u=new Uint8Array(8),c=0;c<8;c++)u[c]=i[c+16]
return E(e,t,r,n,o,u,s)}var T=function(e){var t,r,n,o,i,a,s,u
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|r<<3),n=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(r>>>10|n<<6),o=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(n>>>7|o<<9),i=255&e[8]|(255&e[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,a=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(i>>>14|a<<2),s=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(a>>>11|s<<5),u=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(s>>>8|u<<8),this.r[9]=u>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8}
function S(e,t,r,n,o,i){var a=new T(i)
return a.update(r,n,o),a.finish(e,t),0}function k(e,t,r,n,o,i){var a=new Uint8Array(16)
return S(a,0,r,n,o,i),y(e,t,a,0)}function O(e,t,r,n,o){var i
if(r<32)return-1
for(A(e,0,t,0,r,n,o),S(e,16,e,32,r-32,e),i=0;i<16;i++)e[i]=0
return 0}function I(e,t,r,n,o){var i,a=new Uint8Array(32)
if(r<32)return-1
if(C(a,0,32,n,o),0!==k(t,16,t,32,r-32,a))return-1
for(A(e,0,t,0,r,n,o),i=0;i<32;i++)e[i]=0
return 0}function P(e,t){var r
for(r=0;r<16;r++)e[r]=0|t[r]}function U(e){var t,r,n=1
for(t=0;t<16;t++)r=e[t]+n+65535,n=Math.floor(r/65536),e[t]=r-65536*n
e[0]+=n-1+37*(n-1)}function B(e,t,r){for(var n,o=~(r-1),i=0;i<16;i++)n=o&(e[i]^t[i]),e[i]^=n,t[i]^=n}function x(e,r){var n,o,i,a=t(),s=t()
for(n=0;n<16;n++)s[n]=r[n]
for(U(s),U(s),U(s),o=0;o<2;o++){for(a[0]=s[0]-65517,n=1;n<15;n++)a[n]=s[n]-65535-(a[n-1]>>16&1),a[n-1]&=65535
a[15]=s[15]-32767-(a[14]>>16&1),i=a[15]>>16&1,a[14]&=65535,B(s,a,1-i)}for(n=0;n<16;n++)e[2*n]=255&s[n],e[2*n+1]=s[n]>>8}function N(e,t){var r=new Uint8Array(32),n=new Uint8Array(32)
return x(r,e),x(n,t),g(r,0,n,0)}function D(e){var t=new Uint8Array(32)
return x(t,e),1&t[0]}function R(e,t){var r
for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8)
e[15]&=32767}function M(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n]}function L(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n]}function F(e,t,r){var n,o,i=0,a=0,s=0,u=0,c=0,l=0,h=0,f=0,p=0,d=0,v=0,y=0,g=0,_=0,b=0,m=0,E=0,w=0,C=0,A=0,T=0,S=0,k=0,O=0,I=0,P=0,U=0,B=0,x=0,N=0,D=0,R=r[0],M=r[1],L=r[2],F=r[3],K=r[4],j=r[5],z=r[6],q=r[7],G=r[8],H=r[9],Y=r[10],W=r[11],V=r[12],Q=r[13],X=r[14],J=r[15]
i+=(n=t[0])*R,a+=n*M,s+=n*L,u+=n*F,c+=n*K,l+=n*j,h+=n*z,f+=n*q,p+=n*G,d+=n*H,v+=n*Y,y+=n*W,g+=n*V,_+=n*Q,b+=n*X,m+=n*J,a+=(n=t[1])*R,s+=n*M,u+=n*L,c+=n*F,l+=n*K,h+=n*j,f+=n*z,p+=n*q,d+=n*G,v+=n*H,y+=n*Y,g+=n*W,_+=n*V,b+=n*Q,m+=n*X,E+=n*J,s+=(n=t[2])*R,u+=n*M,c+=n*L,l+=n*F,h+=n*K,f+=n*j,p+=n*z,d+=n*q,v+=n*G,y+=n*H,g+=n*Y,_+=n*W,b+=n*V,m+=n*Q,E+=n*X,w+=n*J,u+=(n=t[3])*R,c+=n*M,l+=n*L,h+=n*F,f+=n*K,p+=n*j,d+=n*z,v+=n*q,y+=n*G,g+=n*H,_+=n*Y,b+=n*W,m+=n*V,E+=n*Q,w+=n*X,C+=n*J,c+=(n=t[4])*R,l+=n*M,h+=n*L,f+=n*F,p+=n*K,d+=n*j,v+=n*z,y+=n*q,g+=n*G,_+=n*H,b+=n*Y,m+=n*W,E+=n*V,w+=n*Q,C+=n*X,A+=n*J,l+=(n=t[5])*R,h+=n*M,f+=n*L,p+=n*F,d+=n*K,v+=n*j,y+=n*z,g+=n*q,_+=n*G,b+=n*H,m+=n*Y,E+=n*W,w+=n*V,C+=n*Q,A+=n*X,T+=n*J,h+=(n=t[6])*R,f+=n*M,p+=n*L,d+=n*F,v+=n*K,y+=n*j,g+=n*z,_+=n*q,b+=n*G,m+=n*H,E+=n*Y,w+=n*W,C+=n*V,A+=n*Q,T+=n*X,S+=n*J,f+=(n=t[7])*R,p+=n*M,d+=n*L,v+=n*F,y+=n*K,g+=n*j,_+=n*z,b+=n*q,m+=n*G,E+=n*H,w+=n*Y,C+=n*W,A+=n*V,T+=n*Q,S+=n*X,k+=n*J,p+=(n=t[8])*R,d+=n*M,v+=n*L,y+=n*F,g+=n*K,_+=n*j,b+=n*z,m+=n*q,E+=n*G,w+=n*H,C+=n*Y,A+=n*W,T+=n*V,S+=n*Q,k+=n*X,O+=n*J,d+=(n=t[9])*R,v+=n*M,y+=n*L,g+=n*F,_+=n*K,b+=n*j,m+=n*z,E+=n*q,w+=n*G,C+=n*H,A+=n*Y,T+=n*W,S+=n*V,k+=n*Q,O+=n*X,I+=n*J,v+=(n=t[10])*R,y+=n*M,g+=n*L,_+=n*F,b+=n*K,m+=n*j,E+=n*z,w+=n*q,C+=n*G,A+=n*H,T+=n*Y,S+=n*W,k+=n*V,O+=n*Q,I+=n*X,P+=n*J,y+=(n=t[11])*R,g+=n*M,_+=n*L,b+=n*F,m+=n*K,E+=n*j,w+=n*z,C+=n*q,A+=n*G,T+=n*H,S+=n*Y,k+=n*W,O+=n*V,I+=n*Q,P+=n*X,U+=n*J,g+=(n=t[12])*R,_+=n*M,b+=n*L,m+=n*F,E+=n*K,w+=n*j,C+=n*z,A+=n*q,T+=n*G,S+=n*H,k+=n*Y,O+=n*W,I+=n*V,P+=n*Q,U+=n*X,B+=n*J,_+=(n=t[13])*R,b+=n*M,m+=n*L,E+=n*F,w+=n*K,C+=n*j,A+=n*z,T+=n*q,S+=n*G,k+=n*H,O+=n*Y,I+=n*W,P+=n*V,U+=n*Q,B+=n*X,x+=n*J,b+=(n=t[14])*R,m+=n*M,E+=n*L,w+=n*F,C+=n*K,A+=n*j,T+=n*z,S+=n*q,k+=n*G,O+=n*H,I+=n*Y,P+=n*W,U+=n*V,B+=n*Q,x+=n*X,N+=n*J,m+=(n=t[15])*R,a+=38*(w+=n*L),s+=38*(C+=n*F),u+=38*(A+=n*K),c+=38*(T+=n*j),l+=38*(S+=n*z),h+=38*(k+=n*q),f+=38*(O+=n*G),p+=38*(I+=n*H),d+=38*(P+=n*Y),v+=38*(U+=n*W),y+=38*(B+=n*V),g+=38*(x+=n*Q),_+=38*(N+=n*X),b+=38*(D+=n*J),i=(n=(i+=38*(E+=n*M))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),v=(n=v+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),_=(n=_+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),i=(n=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),v=(n=v+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),_=(n=_+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),i+=o-1+37*(o-1),e[0]=i,e[1]=a,e[2]=s,e[3]=u,e[4]=c,e[5]=l,e[6]=h,e[7]=f,e[8]=p,e[9]=d,e[10]=v,e[11]=y,e[12]=g,e[13]=_,e[14]=b,e[15]=m}function K(e,t){F(e,t,t)}function j(e,r){var n,o=t()
for(n=0;n<16;n++)o[n]=r[n]
for(n=253;n>=0;n--)K(o,o),2!==n&&4!==n&&F(o,o,r)
for(n=0;n<16;n++)e[n]=o[n]}function z(e,r,n){var o,i,a=new Uint8Array(32),s=new Float64Array(80),c=t(),l=t(),h=t(),f=t(),p=t(),d=t()
for(i=0;i<31;i++)a[i]=r[i]
for(a[31]=127&r[31]|64,a[0]&=248,R(s,n),i=0;i<16;i++)l[i]=s[i],f[i]=c[i]=h[i]=0
for(c[0]=f[0]=1,i=254;i>=0;--i)B(c,l,o=a[i>>>3]>>>(7&i)&1),B(h,f,o),M(p,c,h),L(c,c,h),M(h,l,f),L(l,l,f),K(f,p),K(d,c),F(c,h,c),F(h,l,p),M(p,c,h),L(c,c,h),K(l,c),L(h,f,d),F(c,h,u),M(c,c,f),F(h,h,c),F(c,f,d),F(f,l,s),K(l,p),B(c,l,o),B(h,f,o)
for(i=0;i<16;i++)s[i+16]=c[i],s[i+32]=h[i],s[i+48]=l[i],s[i+64]=f[i]
var v=s.subarray(32),y=s.subarray(16)
return j(v,v),F(y,y,v),x(e,y),0}function q(e,t){return z(e,t,i)}function G(e,t){return n(t,32),q(e,t)}function H(e,t,r){var n=new Uint8Array(32)
return z(n,r,t),b(e,o,n,m)}T.prototype.blocks=function(e,t,r){for(var n,o,i,a,s,u,c,l,h,f,p,d,v,y,g,_,b,m,E,w=this.fin?0:2048,C=this.h[0],A=this.h[1],T=this.h[2],S=this.h[3],k=this.h[4],O=this.h[5],I=this.h[6],P=this.h[7],U=this.h[8],B=this.h[9],x=this.r[0],N=this.r[1],D=this.r[2],R=this.r[3],M=this.r[4],L=this.r[5],F=this.r[6],K=this.r[7],j=this.r[8],z=this.r[9];r>=16;)f=h=0,f+=(C+=8191&(n=255&e[t+0]|(255&e[t+1])<<8))*x,f+=(A+=8191&(n>>>13|(o=255&e[t+2]|(255&e[t+3])<<8)<<3))*(5*z),f+=(T+=8191&(o>>>10|(i=255&e[t+4]|(255&e[t+5])<<8)<<6))*(5*j),f+=(S+=8191&(i>>>7|(a=255&e[t+6]|(255&e[t+7])<<8)<<9))*(5*K),h=(f+=(k+=8191&(a>>>4|(s=255&e[t+8]|(255&e[t+9])<<8)<<12))*(5*F))>>>13,f&=8191,f+=(O+=s>>>1&8191)*(5*L),f+=(I+=8191&(s>>>14|(u=255&e[t+10]|(255&e[t+11])<<8)<<2))*(5*M),f+=(P+=8191&(u>>>11|(c=255&e[t+12]|(255&e[t+13])<<8)<<5))*(5*R),f+=(U+=8191&(c>>>8|(l=255&e[t+14]|(255&e[t+15])<<8)<<8))*(5*D),p=h+=(f+=(B+=l>>>5|w)*(5*N))>>>13,p+=C*N,p+=A*x,p+=T*(5*z),p+=S*(5*j),h=(p+=k*(5*K))>>>13,p&=8191,p+=O*(5*F),p+=I*(5*L),p+=P*(5*M),p+=U*(5*R),h+=(p+=B*(5*D))>>>13,p&=8191,d=h,d+=C*D,d+=A*N,d+=T*x,d+=S*(5*z),h=(d+=k*(5*j))>>>13,d&=8191,d+=O*(5*K),d+=I*(5*F),d+=P*(5*L),d+=U*(5*M),v=h+=(d+=B*(5*R))>>>13,v+=C*R,v+=A*D,v+=T*N,v+=S*x,h=(v+=k*(5*z))>>>13,v&=8191,v+=O*(5*j),v+=I*(5*K),v+=P*(5*F),v+=U*(5*L),y=h+=(v+=B*(5*M))>>>13,y+=C*M,y+=A*R,y+=T*D,y+=S*N,h=(y+=k*x)>>>13,y&=8191,y+=O*(5*z),y+=I*(5*j),y+=P*(5*K),y+=U*(5*F),g=h+=(y+=B*(5*L))>>>13,g+=C*L,g+=A*M,g+=T*R,g+=S*D,h=(g+=k*N)>>>13,g&=8191,g+=O*x,g+=I*(5*z),g+=P*(5*j),g+=U*(5*K),_=h+=(g+=B*(5*F))>>>13,_+=C*F,_+=A*L,_+=T*M,_+=S*R,h=(_+=k*D)>>>13,_&=8191,_+=O*N,_+=I*x,_+=P*(5*z),_+=U*(5*j),b=h+=(_+=B*(5*K))>>>13,b+=C*K,b+=A*F,b+=T*L,b+=S*M,h=(b+=k*R)>>>13,b&=8191,b+=O*D,b+=I*N,b+=P*x,b+=U*(5*z),m=h+=(b+=B*(5*j))>>>13,m+=C*j,m+=A*K,m+=T*F,m+=S*L,h=(m+=k*M)>>>13,m&=8191,m+=O*R,m+=I*D,m+=P*N,m+=U*x,E=h+=(m+=B*(5*z))>>>13,E+=C*z,E+=A*j,E+=T*K,E+=S*F,h=(E+=k*L)>>>13,E&=8191,E+=O*M,E+=I*R,E+=P*D,E+=U*N,C=f=8191&(h=(h=((h+=(E+=B*x)>>>13)<<2)+h|0)+(f&=8191)|0),A=p+=h>>>=13,T=d&=8191,S=v&=8191,k=y&=8191,O=g&=8191,I=_&=8191,P=b&=8191,U=m&=8191,B=E&=8191,t+=16,r-=16
this.h[0]=C,this.h[1]=A,this.h[2]=T,this.h[3]=S,this.h[4]=k,this.h[5]=O,this.h[6]=I,this.h[7]=P,this.h[8]=U,this.h[9]=B},T.prototype.finish=function(e,t){var r,n,o,i,a=new Uint16Array(10)
if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=r,r=this.h[i]>>>13,this.h[i]&=8191
for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,a[0]=this.h[0]+5,r=a[0]>>>13,a[0]&=8191,i=1;i<10;i++)a[i]=this.h[i]+r,r=a[i]>>>13,a[i]&=8191
for(a[9]-=8192,n=(1^r)-1,i=0;i<10;i++)a[i]&=n
for(n=~n,i=0;i<10;i++)this.h[i]=this.h[i]&n|a[i]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o
e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},T.prototype.update=function(e,t,r){var n,o
if(this.leftover){for((o=16-this.leftover)>r&&(o=r),n=0;n<o;n++)this.buffer[this.leftover+n]=e[t+n]
if(r-=o,t+=o,this.leftover+=o,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(o=r-r%16,this.blocks(e,t,o),t+=o,r-=o),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n]
this.leftover+=r}}
var Y=O,W=I
var V=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function Q(e,t,r,n){for(var o,i,a,s,u,c,l,h,f,p,d,v,y,g,_,b,m,E,w,C,A,T,S,k,O,I,P=new Int32Array(16),U=new Int32Array(16),B=e[0],x=e[1],N=e[2],D=e[3],R=e[4],M=e[5],L=e[6],F=e[7],K=t[0],j=t[1],z=t[2],q=t[3],G=t[4],H=t[5],Y=t[6],W=t[7],Q=0;n>=128;){for(w=0;w<16;w++)C=8*w+Q,P[w]=r[C+0]<<24|r[C+1]<<16|r[C+2]<<8|r[C+3],U[w]=r[C+4]<<24|r[C+5]<<16|r[C+6]<<8|r[C+7]
for(w=0;w<80;w++)if(o=B,i=x,a=N,s=D,u=R,c=M,l=L,F,f=K,p=j,d=z,v=q,y=G,g=H,_=Y,W,S=65535&(T=W),k=T>>>16,O=65535&(A=F),I=A>>>16,S+=65535&(T=(G>>>14|R<<18)^(G>>>18|R<<14)^(R>>>9|G<<23)),k+=T>>>16,O+=65535&(A=(R>>>14|G<<18)^(R>>>18|G<<14)^(G>>>9|R<<23)),I+=A>>>16,S+=65535&(T=G&H^~G&Y),k+=T>>>16,O+=65535&(A=R&M^~R&L),I+=A>>>16,A=V[2*w],S+=65535&(T=V[2*w+1]),k+=T>>>16,O+=65535&A,I+=A>>>16,A=P[w%16],k+=(T=U[w%16])>>>16,O+=65535&A,I+=A>>>16,O+=(k+=(S+=65535&T)>>>16)>>>16,S=65535&(T=E=65535&S|k<<16),k=T>>>16,O=65535&(A=m=65535&O|(I+=O>>>16)<<16),I=A>>>16,S+=65535&(T=(K>>>28|B<<4)^(B>>>2|K<<30)^(B>>>7|K<<25)),k+=T>>>16,O+=65535&(A=(B>>>28|K<<4)^(K>>>2|B<<30)^(K>>>7|B<<25)),I+=A>>>16,k+=(T=K&j^K&z^j&z)>>>16,O+=65535&(A=B&x^B&N^x&N),I+=A>>>16,h=65535&(O+=(k+=(S+=65535&T)>>>16)>>>16)|(I+=O>>>16)<<16,b=65535&S|k<<16,S=65535&(T=v),k=T>>>16,O=65535&(A=s),I=A>>>16,k+=(T=E)>>>16,O+=65535&(A=m),I+=A>>>16,x=o,N=i,D=a,R=s=65535&(O+=(k+=(S+=65535&T)>>>16)>>>16)|(I+=O>>>16)<<16,M=u,L=c,F=l,B=h,j=f,z=p,q=d,G=v=65535&S|k<<16,H=y,Y=g,W=_,K=b,w%16==15)for(C=0;C<16;C++)A=P[C],S=65535&(T=U[C]),k=T>>>16,O=65535&A,I=A>>>16,A=P[(C+9)%16],S+=65535&(T=U[(C+9)%16]),k+=T>>>16,O+=65535&A,I+=A>>>16,m=P[(C+1)%16],S+=65535&(T=((E=U[(C+1)%16])>>>1|m<<31)^(E>>>8|m<<24)^(E>>>7|m<<25)),k+=T>>>16,O+=65535&(A=(m>>>1|E<<31)^(m>>>8|E<<24)^m>>>7),I+=A>>>16,m=P[(C+14)%16],k+=(T=((E=U[(C+14)%16])>>>19|m<<13)^(m>>>29|E<<3)^(E>>>6|m<<26))>>>16,O+=65535&(A=(m>>>19|E<<13)^(E>>>29|m<<3)^m>>>6),I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,P[C]=65535&O|I<<16,U[C]=65535&S|k<<16
S=65535&(T=K),k=T>>>16,O=65535&(A=B),I=A>>>16,A=e[0],k+=(T=t[0])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[0]=B=65535&O|I<<16,t[0]=K=65535&S|k<<16,S=65535&(T=j),k=T>>>16,O=65535&(A=x),I=A>>>16,A=e[1],k+=(T=t[1])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[1]=x=65535&O|I<<16,t[1]=j=65535&S|k<<16,S=65535&(T=z),k=T>>>16,O=65535&(A=N),I=A>>>16,A=e[2],k+=(T=t[2])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[2]=N=65535&O|I<<16,t[2]=z=65535&S|k<<16,S=65535&(T=q),k=T>>>16,O=65535&(A=D),I=A>>>16,A=e[3],k+=(T=t[3])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[3]=D=65535&O|I<<16,t[3]=q=65535&S|k<<16,S=65535&(T=G),k=T>>>16,O=65535&(A=R),I=A>>>16,A=e[4],k+=(T=t[4])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[4]=R=65535&O|I<<16,t[4]=G=65535&S|k<<16,S=65535&(T=H),k=T>>>16,O=65535&(A=M),I=A>>>16,A=e[5],k+=(T=t[5])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[5]=M=65535&O|I<<16,t[5]=H=65535&S|k<<16,S=65535&(T=Y),k=T>>>16,O=65535&(A=L),I=A>>>16,A=e[6],k+=(T=t[6])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[6]=L=65535&O|I<<16,t[6]=Y=65535&S|k<<16,S=65535&(T=W),k=T>>>16,O=65535&(A=F),I=A>>>16,A=e[7],k+=(T=t[7])>>>16,O+=65535&A,I+=A>>>16,I+=(O+=(k+=(S+=65535&T)>>>16)>>>16)>>>16,e[7]=F=65535&O|I<<16,t[7]=W=65535&S|k<<16,Q+=128,n-=128}return n}function X(e,t,r){var n,o=new Int32Array(8),i=new Int32Array(8),a=new Uint8Array(256),s=r
for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Q(o,i,t,r),r%=128,n=0;n<r;n++)a[n]=t[s-r+n]
for(a[r]=128,a[(r=256-128*(r<112?1:0))-9]=0,d(a,r-8,s/536870912|0,s<<3),Q(o,i,a,r),n=0;n<8;n++)d(e,8*n,o[n],i[n])
return 0}function J(e,r){var n=t(),o=t(),i=t(),a=t(),s=t(),u=t(),c=t(),h=t(),f=t()
L(n,e[1],e[0]),L(f,r[1],r[0]),F(n,n,f),M(o,e[0],e[1]),M(f,r[0],r[1]),F(o,o,f),F(i,e[3],r[3]),F(i,i,l),F(a,e[2],r[2]),M(a,a,a),L(s,o,n),L(u,a,i),M(c,a,i),M(h,o,n),F(e[0],s,u),F(e[1],h,c),F(e[2],c,u),F(e[3],s,h)}function Z(e,t,r){var n
for(n=0;n<4;n++)B(e[n],t[n],r)}function $(e,r){var n=t(),o=t(),i=t()
j(i,r[2]),F(n,r[0],i),F(o,r[1],i),x(e,o),e[31]^=D(n)<<7}function ee(e,t,r){var n,o
for(P(e[0],a),P(e[1],s),P(e[2],s),P(e[3],a),o=255;o>=0;--o)Z(e,t,n=r[o/8|0]>>(7&o)&1),J(t,e),J(e,e),Z(e,t,n)}function te(e,r){var n=[t(),t(),t(),t()]
P(n[0],h),P(n[1],f),P(n[2],s),F(n[3],h,f),ee(e,n,r)}function re(e,r,o){var i,a=new Uint8Array(64),s=[t(),t(),t(),t()]
for(o||n(r,32),X(a,r,32),a[0]&=248,a[31]&=127,a[31]|=64,te(s,a),$(e,s),i=0;i<32;i++)r[i+32]=e[i]
return 0}var ne=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function oe(e,t){var r,n,o,i
for(n=63;n>=32;--n){for(r=0,o=n-32,i=n-12;o<i;++o)t[o]+=r-16*t[n]*ne[o-(n-32)],r=t[o]+128>>8,t[o]-=256*r
t[o]+=r,t[n]=0}for(r=0,o=0;o<32;o++)t[o]+=r-(t[31]>>4)*ne[o],r=t[o]>>8,t[o]&=255
for(o=0;o<32;o++)t[o]-=r*ne[o]
for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n]}function ie(e){var t,r=new Float64Array(64)
for(t=0;t<64;t++)r[t]=e[t]
for(t=0;t<64;t++)e[t]=0
oe(e,r)}function ae(e,r,n,o){var i,a,s=new Uint8Array(64),u=new Uint8Array(64),c=new Uint8Array(64),l=new Float64Array(64),h=[t(),t(),t(),t()]
X(s,o,32),s[0]&=248,s[31]&=127,s[31]|=64
var f=n+64
for(i=0;i<n;i++)e[64+i]=r[i]
for(i=0;i<32;i++)e[32+i]=s[32+i]
for(X(c,e.subarray(32),n+32),ie(c),te(h,c),$(e,h),i=32;i<64;i++)e[i]=o[i]
for(X(u,e,n+64),ie(u),i=0;i<64;i++)l[i]=0
for(i=0;i<32;i++)l[i]=c[i]
for(i=0;i<32;i++)for(a=0;a<32;a++)l[i+a]+=u[i]*s[a]
return oe(e.subarray(32),l),f}function se(e,r){var n=t(),o=t(),i=t(),u=t(),l=t(),h=t(),f=t()
return P(e[2],s),R(e[1],r),K(i,e[1]),F(u,i,c),L(i,i,e[2]),M(u,e[2],u),K(l,u),K(h,l),F(f,h,l),F(n,f,i),F(n,n,u),function(e,r){var n,o=t()
for(n=0;n<16;n++)o[n]=r[n]
for(n=250;n>=0;n--)K(o,o),1!==n&&F(o,o,r)
for(n=0;n<16;n++)e[n]=o[n]}(n,n),F(n,n,i),F(n,n,u),F(n,n,u),F(e[0],n,u),K(o,e[0]),F(o,o,u),N(o,i)&&F(e[0],e[0],p),K(o,e[0]),F(o,o,u),N(o,i)?-1:(D(e[0])===r[31]>>7&&L(e[0],a,e[0]),F(e[3],e[0],e[1]),0)}function ue(e,r,n,o){var i,a=new Uint8Array(32),s=new Uint8Array(64),u=[t(),t(),t(),t()],c=[t(),t(),t(),t()]
if(-1,n<64)return-1
if(se(c,o))return-1
for(i=0;i<n;i++)e[i]=r[i]
for(i=0;i<32;i++)e[i+32]=o[i]
if(X(s,e,n),ie(s),ee(u,c,s),te(c,r.subarray(32)),J(u,c),$(a,u),n-=64,g(r,0,a,0)){for(i=0;i<n;i++)e[i]=0
return-1}for(i=0;i<n;i++)e[i]=r[i+64]
return n}var ce=32,le=24,he=32,fe=32,pe=le
function de(e,t){if(e.length!==ce)throw new Error("bad key size")
if(t.length!==le)throw new Error("bad nonce size")}function ve(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function ye(e){for(var t=0;t<e.length;t++)e[t]=0}e.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:A,crypto_stream:C,crypto_stream_salsa20_xor:E,crypto_stream_salsa20:w,crypto_onetimeauth:S,crypto_onetimeauth_verify:k,crypto_verify_16:y,crypto_verify_32:g,crypto_secretbox:O,crypto_secretbox_open:I,crypto_scalarmult:z,crypto_scalarmult_base:q,crypto_box_beforenm:H,crypto_box_afternm:Y,crypto_box:function(e,t,r,n,o,i){var a=new Uint8Array(32)
return H(a,o,i),Y(e,t,r,n,a)},crypto_box_open:function(e,t,r,n,o,i){var a=new Uint8Array(32)
return H(a,o,i),W(e,t,r,n,a)},crypto_box_keypair:G,crypto_hash:X,crypto_sign:ae,crypto_sign_keypair:re,crypto_sign_open:ue,crypto_secretbox_KEYBYTES:ce,crypto_secretbox_NONCEBYTES:le,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:he,crypto_box_SECRETKEYBYTES:fe,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:pe,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},e.randomBytes=function(e){var t=new Uint8Array(e)
return n(t,e),t},e.secretbox=function(e,t,r){ve(e,t,r),de(r,t)
for(var n=new Uint8Array(32+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+32]=e[i]
return O(o,n,n.length,t,r),o.subarray(16)},e.secretbox.open=function(e,t,r){ve(e,t,r),de(r,t)
for(var n=new Uint8Array(16+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+16]=e[i]
return n.length<32?null:0!==I(o,n,n.length,t,r)?null:o.subarray(32)},e.secretbox.keyLength=ce,e.secretbox.nonceLength=le,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(ve(e,t),32!==e.length)throw new Error("bad n size")
if(32!==t.length)throw new Error("bad p size")
var r=new Uint8Array(32)
return z(r,e,t),r},e.scalarMult.base=function(e){if(ve(e),32!==e.length)throw new Error("bad n size")
var t=new Uint8Array(32)
return q(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,o){var i=e.box.before(n,o)
return e.secretbox(t,r,i)},e.box.before=function(e,t){ve(e,t),function(e,t){if(e.length!==he)throw new Error("bad public key size")
if(t.length!==fe)throw new Error("bad secret key size")}(e,t)
var r=new Uint8Array(32)
return H(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,o){var i=e.box.before(n,o)
return e.secretbox.open(t,r,i)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(he),t=new Uint8Array(fe)
return G(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(ve(e),e.length!==fe)throw new Error("bad secret key size")
var t=new Uint8Array(he)
return q(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=he,e.box.secretKeyLength=fe,e.box.sharedKeyLength=32,e.box.nonceLength=pe,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(ve(e,t),64!==t.length)throw new Error("bad secret key size")
var r=new Uint8Array(64+e.length)
return ae(r,e,e.length,t),r},e.sign.open=function(e,t){if(ve(e,t),32!==t.length)throw new Error("bad public key size")
var r=new Uint8Array(e.length),n=ue(r,e,e.length,t)
if(n<0)return null
for(var o=new Uint8Array(n),i=0;i<o.length;i++)o[i]=r[i]
return o},e.sign.detached=function(t,r){for(var n=e.sign(t,r),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=n[i]
return o},e.sign.detached.verify=function(e,t,r){if(ve(e,t,r),64!==t.length)throw new Error("bad signature size")
if(32!==r.length)throw new Error("bad public key size")
var n,o=new Uint8Array(64+e.length),i=new Uint8Array(64+e.length)
for(n=0;n<64;n++)o[n]=t[n]
for(n=0;n<e.length;n++)o[n+64]=e[n]
return ue(i,o,o.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64)
return re(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(ve(e),64!==e.length)throw new Error("bad secret key size")
for(var t=new Uint8Array(32),r=0;r<t.length;r++)t[r]=e[32+r]
return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(ve(e),32!==e.length)throw new Error("bad seed size")
for(var t=new Uint8Array(32),r=new Uint8Array(64),n=0;n<32;n++)r[n]=e[n]
return re(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=32,e.sign.secretKeyLength=64,e.sign.seedLength=32,e.sign.signatureLength=64,e.hash=function(e){ve(e)
var t=new Uint8Array(64)
return X(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return ve(e,t),0!==e.length&&0!==t.length&&(e.length===t.length&&0===v(e,0,t,0,e.length))},e.setPRNG=function(e){n=e},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null
if(t&&t.getRandomValues){e.setPRNG(function(e,r){var n,o=new Uint8Array(r)
for(n=0;n<r;n+=65536)t.getRandomValues(o.subarray(n,n+Math.min(r-n,65536)))
for(n=0;n<r;n++)e[n]=o[n]
ye(o)})}else(t=r(15))&&t.randomBytes&&e.setPRNG(function(e,r){var n,o=t.randomBytes(r)
for(n=0;n<r;n++)e[n]=o[n]
ye(o)})}()}(e.exports?e.exports:self.nacl=self.nacl||{})},function(e,t){e.exports=require("crypto")},function(e,t,r){(t=e.exports=function(e){e=e.toLowerCase()
var r=t[e]
if(!r)throw new Error(e+" is not supported (we accept pull requests)")
return new r}).sha=r(17),t.sha1=r(21),t.sha224=r(22),t.sha256=r(5),t.sha384=r(23),t.sha512=r(6)},function(e,t,r){var n=r(2),o=r(3),i=r(1).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,o.call(this,64,56)}function c(e){return e<<30|e>>>2}function l(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}n(u,o),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,u=0|this._e,h=0;h<16;++h)r[h]=e.readInt32BE(4*h)
for(;h<80;++h)r[h]=r[h-3]^r[h-8]^r[h-14]^r[h-16]
for(var f=0;f<80;++f){var p=~~(f/20),d=0|((t=n)<<5|t>>>27)+l(p,o,i,s)+u+r[f]+a[p]
u=s,s=i,i=c(o),o=n,n=d}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var e=i.allocUnsafe(20)
return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=u},function(e,t){e.exports=require("util")},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t
var r=function(){}
r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t){e.exports=require("buffer")},function(e,t,r){var n=r(2),o=r(3),i=r(1).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,o.call(this,64,56)}function c(e){return e<<5|e>>>27}function l(e){return e<<30|e>>>2}function h(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}n(u,o),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,o=0|this._b,i=0|this._c,s=0|this._d,u=0|this._e,f=0;f<16;++f)r[f]=e.readInt32BE(4*f)
for(;f<80;++f)r[f]=(t=r[f-3]^r[f-8]^r[f-14]^r[f-16])<<1|t>>>31
for(var p=0;p<80;++p){var d=~~(p/20),v=c(n)+h(d,o,i,s)+u+r[p]+a[d]|0
u=s,s=i,i=l(o),o=n,n=v}this._a=n+this._a|0,this._b=o+this._b|0,this._c=i+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var e=i.allocUnsafe(20)
return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=u},function(e,t,r){var n=r(2),o=r(5),i=r(3),a=r(1).Buffer,s=new Array(64)
function u(){this.init(),this._w=s,i.call(this,64,56)}n(u,o),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var e=a.allocUnsafe(28)
return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=u},function(e,t,r){var n=r(2),o=r(6),i=r(3),a=r(1).Buffer,s=new Array(160)
function u(){this.init(),this._w=s,i.call(this,128,112)}n(u,o),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var e=a.allocUnsafe(48)
function t(t,r,n){e.writeInt32BE(t,n),e.writeInt32BE(r,n+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),e},e.exports=u},function(e,t,r){"use strict"
e.exports=r(25)},function(e,t,r){"use strict"
e.exports=c
var n=r(26),o="undefined"!=typeof navigator&&!!navigator.userAgent,i=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),a=o&&navigator.userAgent.match(/Edge\/1[2345]/),s=null
function u(e){return s||(s=new e(function(e,t){function r(){e({u2f:null,native:!0})}return o?i?r():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),a?r():"http:"===location.protocol?r():"undefined"==typeof MessageChannel?r():void n.isSupported(function(t){t?e({u2f:n,native:!1}):r()})):r()})),s}function c(e){return{isSupported:f.bind(e),ensureSupport:d.bind(e),register:v.bind(e),sign:y.bind(e),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function l(e,t){var r=null!=t?t.errorCode:1,n=c.ErrorNames[""+r],o=new Error(e)
return o.metaData={type:n,code:r},o}function h(e,t){var r={}
return r.promise=new e(function(e,n){r.resolve=e,r.reject=n,t.then(e,n)}),r.promise.cancel=function(t,n){u(e).then(function(e){n&&!e.native&&e.u2f.disconnect(),r.reject(l(t,{errorCode:-1}))})},r}function f(){return u(this).then(function(e){return!!e.u2f})}function p(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function d(){return u(this).then(p)}function v(e,t,r){var n=this
return Array.isArray(e)||(e=[e]),"number"==typeof t&&void 0===r&&(r=t,t=null),t||(t=[]),h(n,u(n).then(function(o){p(o)
var i=o.native,a=o.u2f
return new n(function(n,o){if(i){var s=e[0].appId
a.register(s,e,t,function(e){e.errorCode?o(l("Registration failed",e)):(delete e.errorCode,n(e))},r)}else a.register(e,t,function(e,t){e?o(e):t.errorCode?o(l("Registration failed",t)):n(t)},r)})})).promise}function y(e,t){var r=this
return Array.isArray(e)||(e=[e]),h(r,u(r).then(function(n){p(n)
var o=n.native,i=n.u2f
return new r(function(r,n){if(o){var a=e[0].appId,s=e[0].challenge
i.sign(a,s,e,function(e){e.errorCode?n(l("Sign failed",e)):(delete e.errorCode,r(e))},t)}else i.sign(e,function(e,t){e?n(e):t.errorCode?n(l("Sign failed",t)):r(t)},t)})})).promise}function g(e){c[e]=function(){if(!global.Promise)throw new Error("The platform doesn't natively support promises")
var t=[].slice.call(arguments)
return c(global.Promise)[e].apply(null,t)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},g("isSupported"),g("ensureSupport"),g("register"),g("sign")},function(e,t,r){"use strict"
var n=n||{}
e.exports=n,n.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",n.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},n.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},n.Request,n.Response,n.Error,n.SignRequest,n.SignResponse,n.RegisterRequest,n.RegisterResponse,n.disconnect=function(){n.port_&&n.port_.port_&&(n.port_.port_.disconnect(),n.port_=null)},n.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]}
chrome.runtime.sendMessage(n.EXTENSION_ID,t,function(){chrome.runtime.lastError?n.getIframePort_(e):n.getChromeRuntimePort_(e)})}else n.getIframePort_(e)},n.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(n.EXTENSION_ID,{includeTlsChannelId:!0})
setTimeout(function(){e(null,new n.WrappedChromeRuntimePort_(t))},0)},n.WrappedChromeRuntimePort_=function(e){this.port_=e},n.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},n.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var r=e.toLowerCase()
"message"==r||"onmessage"==r?this.port_.onMessage.addListener(function(e){t({data:e})}):console.error("WrappedChromeRuntimePort only supports onMessage")},n.getIframePort_=function(e){var t="chrome-extension://"+n.EXTENSION_ID,r=document.createElement("iframe")
r.src=t+"/u2f-comms.html",r.setAttribute("style","display:none"),document.body.appendChild(r)
var o=!1,i=new MessageChannel,a=function(t){"ready"==t.data?(i.port1.removeEventListener("message",a),o||(o=!0,e(null,i.port1))):console.error('First event on iframe port was not "ready"')}
i.port1.addEventListener("message",a),i.port1.start(),r.addEventListener("load",function(){r.contentWindow.postMessage("init",t,[i.port2])}),setTimeout(function(){o||(o=!0,e(new Error("IFrame extension not supported")))},200)},n.EXTENSION_TIMEOUT_SEC=30,n.port_=null,n.waitingForPort_=[],n.reqCounter_=0,n.callbackMap_={},n.getPortSingleton_=function(e){n.port_?e(null,n.port_):(0==n.waitingForPort_.length&&n.getMessagePort(function(e,t){for(e||(n.port_=t,n.port_.addEventListener("message",n.responseHandler_));n.waitingForPort_.length;)n.waitingForPort_.shift()(e,t)}),n.waitingForPort_.push(e))},n.responseHandler_=function(e){var t=e.data,r=t.requestId
if(r&&n.callbackMap_[r]){var o=n.callbackMap_[r]
delete n.callbackMap_[r],o(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},n.isSupported=function(e){n.getPortSingleton_(function(t,r){e(!t)})},n.sign=function(e,t,r){n.getPortSingleton_(function(o,i){if(o)return t(o)
var a=++n.reqCounter_
n.callbackMap_[a]=t
var s={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:void 0!==r?r:n.EXTENSION_TIMEOUT_SEC,requestId:a}
i.postMessage(s)})},n.register=function(e,t,r,o){n.getPortSingleton_(function(i,a){if(i)return r(i)
var s=++n.reqCounter_
n.callbackMap_[s]=r
var u={type:n.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:void 0!==o?o:n.EXTENSION_TIMEOUT_SEC,requestId:s}
a.postMessage(u)})}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getAltStatusMessage=t.StatusCodes=t.TransportStatusError=t.TransportError=void 0
var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(4),a=(n=i)&&n.__esModule?n:{default:n},s=r(7)
function u(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,r){return function n(o,i){try{var a=t[o](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)})
e(s)}("next")})}}t.TransportError=s.TransportError,t.TransportStatusError=s.TransportStatusError,t.StatusCodes=s.StatusCodes,t.getAltStatusMessage=s.getAltStatusMessage
var c=function(){function e(){var t,r,n=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.debug=global.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new a.default,this.send=(t=u(regeneratorRuntime.mark(function e(t,r,o,i){var a,u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Buffer.alloc(0),l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[s.StatusCodes.OK]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c.length>=256)){e.next=2
break}throw new s.TransportError("data.length exceed 256 bytes limit. Got: "+c.length,"DataLengthTooBig")
case 2:return e.next=4,n.exchange(Buffer.concat([Buffer.from([t,r,o,i]),Buffer.from([c.length]),c]))
case 4:if(a=e.sent,u=a.readUInt16BE(a.length-2),l.some(function(e){return e===u})){e.next=8
break}throw new s.TransportStatusError(u)
case 8:return e.abrupt("return",a)
case 9:case"end":return e.stop()}},e,n)})),function(e,r,n,o){return t.apply(this,arguments)}),this.exchangeAtomicImpl=(r=u(regeneratorRuntime.mark(function e(t){var r,o,i
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exchangeBusyPromise){e.next=2
break}throw new s.TransportError("Transport race condition","RaceCondition")
case 2:return r=void 0,o=new Promise(function(e){r=e}),n.exchangeBusyPromise=o,e.prev=5,e.next=8,t()
case 8:return i=e.sent,e.abrupt("return",i)
case 10:return e.prev=10,r&&r(),n.exchangeBusyPromise=null,e.finish(10)
case 14:case"end":return e.stop()}},e,n,[[5,,10,14]])})),function(e){return r.apply(this,arguments)}),this._appAPIlock=null}return o(e,[{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t=this._events).emit.apply(t,[e].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}(n)))}},{key:"setDebugMode",value:function(e){this.debug="function"==typeof e?e:e?function(e){return console.log(e)}:null}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,r){var n=!0,o=!1,i=void 0
try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value
e[u]=this.decorateAppAPIMethod(u,e[u],e,r)}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}}},{key:"decorateAppAPIMethod",value:function(e,t,r,n){var o,i=this
return o=u(regeneratorRuntime.mark(function o(){for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c]
var l
return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(l=i._appAPIlock)){o.next=3
break}return o.abrupt("return",Promise.reject(new s.TransportError("Ledger Device is busy (lock "+l+")","TransportLocked")))
case 3:return o.prev=3,i._appAPIlock=e,i.setScrambleKey(n),o.next=8,t.apply(r,u)
case 8:return o.abrupt("return",o.sent)
case 9:return o.prev=9,i._appAPIlock=null,o.finish(9)
case 12:case"end":return o.stop()}},o,i,[[3,,9,12]])})),function(){return o.apply(this,arguments)}}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,r=arguments[1]
return new Promise(function(n,o){var i=!1,a=e.listen({next:function(r){i=!0,a&&a.unsubscribe(),u&&clearTimeout(u),e.open(r.descriptor,t).then(n,o)},error:function(e){u&&clearTimeout(u),o(e)},complete:function(){u&&clearTimeout(u),i||o(new s.TransportError(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),u=r?setTimeout(function(){a.unsubscribe(),o(new s.TransportError(e.ErrorMessage_ListenTimeout,"ListenTimeout"))},r):null})}}]),e}()
c.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",c.ErrorMessage_NoDeviceFound="No Ledger device found",t.default=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={},i={},a=(t.addCustomErrorDeserializer=function(e,t){i[e]=t},t.createCustomErrorClass=function(e){var t=function(t,r){Object.assign(this,r),this.name=e,this.message=t||e,this.stack=(new Error).stack}
return t.prototype=new Error,o[e]=t,t})
t.deserializeError=function e(t){if("object"===(void 0===t?"undefined":n(t))&&t){try{var r=JSON.parse(t.message)
r.message&&r.name&&(t=r)}catch(e){}var s=void 0
if("string"==typeof t.name){var u=t.name,c=i[u]
if(c)s=c(t)
else{var l="Error"===u?Error:o[u]
l||(console.warn("deserializing an unknown class '"+u+"'"),l=a(u)),s=Object.create(l.prototype)
try{for(var h in t)t.hasOwnProperty(h)&&(s[h]=t[h])}catch(e){}}}else s=new Error(t.message)
return!s.stack&&Error.captureStackTrace&&Error.captureStackTrace(s,e),s}return new Error(String(t))},t.serializeError=function(e){return e?"object"===(void 0===e?"undefined":n(e))?function e(t,r){var o={}
r.push(t)
var i=!0
var a=!1
var s=void 0
try{for(var u,c=Object.keys(t)[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var l=u.value,h=t[l]
"function"!=typeof h&&(h&&"object"===(void 0===h?"undefined":n(h))?-1!==r.indexOf(t[l])?o[l]="[Circular]":o[l]=e(t[l],r.slice(0)):o[l]=h)}}catch(e){a=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw s}}"string"==typeof t.name&&(o.name=t.name)
"string"==typeof t.message&&(o.message=t.message)
"string"==typeof t.stack&&(o.stack=t.stack)
return o}(e,[]):"function"==typeof e?"[Function: "+(e.name||"anonymous")+"]":e:e}},function(e,t,r){"use strict"
r.r(t)
var n=r(0),o=r(8),i=r.n(o)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n
return t=e,n=[{key:"strlen",value:function(e){return e?e.length:0}},{key:"strOK",value:function(e){return!!e&&e.length>0}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}()
function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o
return t=e,o=[{key:"paymentOperation",value:function(e,t,r,o){var i={destination:e,asset:r,amount:t,source:o}
return n.Operation.payment(i)}},{key:"manageOfferOperation",value:function(e,t,r,o){var i={selling:t,buying:e,amount:r,price:o,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return n.Operation.manageOffer(i)}},{key:"setOptionsOperation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e
return r.source=t,n.Operation.setOptions(r)}},{key:"manageDataOperation",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={name:e,value:s.strOK(t)?t:null,source:r}
return n.Operation.manageData(o)}},{key:"changeTrustOperation",value:function(e,t){var r={asset:e,limit:t,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return n.Operation.changeTrust(r)}},{key:"allowTrustOperation",value:function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={trustor:e,assetCode:t.getCode(),authorize:r,source:o}
return n.Operation.allowTrust(i)}},{key:"pathPaymentOperation",value:function(e,t,r,o,i){var a={destination:e,sendAsset:t,sendMax:r,destAsset:o,destAmount:i,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return n.Operation.pathPayment(a)}},{key:"multisigOperations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=[],s={source:i,signer:{ed25519PublicKey:e,weight:t}}
return a.push(n.Operation.setOptions(s)),s={source:i,medThreshold:r,highThreshold:o},a.push(n.Operation.setOptions(s)),a}},{key:"removeMultisigOperations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[],a={source:o,medThreshold:t,highThreshold:r}
return i.push(n.Operation.setOptions(a)),a={source:o,signer:{ed25519PublicKey:e,weight:0}},i.push(n.Operation.setOptions(a)),i}}],(r=null)&&u(t.prototype,r),o&&u(t,o),e}(),l=r(4)
function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=new(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var r,n,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,l),r=t,(n=[{key:"log",value:function(e,t){this.emit("transaction",e,t)}}])&&f(r.prototype,n),o&&f(r,o),t}())
function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t||console.log("StellarAPI constructor missing parameter"),this._horizonServer=t}var t,r,o
return t=e,(r=[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var e=this.serverURL()+"/metrics"
return i.a.get(e)}},{key:"accountInfo",value:function(e){return this.server().loadAccount(e)}},{key:"balances",value:function(e){var t=this
return e.publicKey().then(function(e){return t.server().loadAccount(e)}).then(function(e){var t=[]
return e.balances.forEach(function(e){"native"===e.asset_type?t.push({symbol:"XLM",amount:e.balance,issuer:""}):t.push({symbol:e.asset_code,amount:e.balance,issuer:e.asset_issuer})}),t})}},{key:"balanceForAsset",value:function(e,t){var r=this
return e.publicKey().then(function(e){return r.server().loadAccount(e)}).then(function(e){var r=!0,n=!1,o=void 0
try{for(var i,a=e.balances[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value
if("native"===s.asset_type){if(t.isNative())return s.balance}else if(s.asset_code===t.getCode()&&s.asset_issuer===t.getIssuer())return s.balance}}catch(e){n=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return"0"})}},{key:"paths",value:function(e,t,r,n){return this.server().paths(e,t,r,n)}},{key:"mergeAccount",value:function(e,t){var r=this,o="",i=""
return e.publicKey().then(function(e){return o=e,t.publicKey()}).then(function(e){return i=e,r.server().loadAccount(e)}).then(function(e){var r=new n.TransactionBuilder(e,{fee:n.BASE_FEE}).setTimeout(n.TimeoutInfinite).addOperation(n.Operation.accountMerge({destination:i,source:o})).build()
return t.signTransaction(r)}).then(function(t){return e.signTransaction(t)}).then(function(e){return r.submitTransaction(e,"merge account")})}},{key:"manageOffer",value:function(e,t,r,n,o,i){var a=this,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null
return this._processAccounts(e,t).then(function(l){var h=c.manageOfferOperation(r,n,o,i,s,l.sourcePublicKey)
return a._submitOperations(l.account,"manage offer",e,t,[h],null,u)})}},{key:"changeTrust",value:function(e,t,r,n){var o=this
return this._processAccounts(e,t).then(function(i){var a=c.changeTrustOperation(r,n,i.sourcePublicKey)
return o._submitOperations(i.account,"change trust",e,t,[a])})}},{key:"allowTrust",value:function(e,t,r,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=null
return t.publicKey().then(function(t){return a=t,o._processAccounts(e,i)}).then(function(t){var s=c.allowTrustOperation(a,r,n,t.sourcePublicKey)
return o._submitOperations(t.account,"allow trust",e,i,[s])})}},{key:"makeMultiSig",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=null
return t.publicKey().then(function(t){return i=t,r._processAccounts(e,n)}).then(function(t){var a=c.multisigOperations(i,1,o,o,t.sourcePublicKey)
return r._submitOperations(t.account,"make multisig",e,n,a)})}},{key:"removeMultiSig",value:function(e,t,r){var n=this
return this.removeMultiSigTransaction(e,t,r).then(function(e){return n.submitTransaction(e,"remove multisig")})}},{key:"submitTransaction",value:function(e,t){return this.server().submitTransaction(e).then(function(e){return y.log(e,t),e})}},{key:"removeMultiSigTransaction",value:function(e,t,r){var o=this,i=null
return e.publicKey().then(function(e){return o.server().loadAccount(e)}).then(function(e){return i=e,t.publicKey()}).then(function(t){var o=new n.TransactionBuilder(i,r).setTimeout(n.TimeoutInfinite),a=c.removeMultisigOperations(t,1,1,null),s=!0,u=!1,l=void 0
try{for(var h,f=a[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var p=h.value
o.addOperation(p)}}catch(e){u=!0,l=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw l}}var d=o.build()
return e.signTransaction(d)}).then(function(e){return t.signTransaction(e)})}},{key:"sendAssetBatch",value:function(e,t,r,o){var i=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=null===a?n.Asset.native():a,h=null,f=[]
return this._processAccounts(e,t).then(function(n){var a=Promise.resolve(),p=!0,d=!1,v=void 0
try{for(var y,g=function(){var e=y.value
a=a.then(function(){return e.publicKey()}).then(function(e){h=e
var t=c.paymentOperation(h,o,l,n.sourcePublicKey)
return f.push(t),null})},_=r[Symbol.iterator]();!(p=(y=_.next()).done);p=!0)g()}catch(e){d=!0,v=e}finally{try{p||null==_.return||_.return()}finally{if(d)throw v}}return a.then(function(){return i._submitOperations(n.account,"send asset batch",e,t,f,s,u)})})}},{key:"sendAsset",value:function(e,t,r,o){var i=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=null===a?n.Asset.native():a,h=null
return r.publicKey().then(function(e){return h=e,i.server().loadAccount(h)}).then(function(r){return i._processAccounts(e,t)}).then(function(r){var n=c.paymentOperation(h,o,l,r.sourcePublicKey)
return i._submitOperations(r.account,"send asset",e,t,[n],s,u)})}},{key:"buyTokens",value:function(e,t,r,n,o){var i=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=null
return e.publicKey().then(function(e){return u=e,i.server().loadAccount(e)}).then(function(t){return i._processAccounts(e,a)}).then(function(l){var h=c.pathPaymentOperation(u,t,n,r,o,l.sourcePublicKey)
return i._submitOperations(l.account,"buy asset",e,a,[h],null,s)})}},{key:"manageData",value:function(e,t,r,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(e,t).then(function(a){var s=c.manageDataOperation(r,n,a.sourcePublicKey)
return o._submitOperations(a.account,"manage data",e,t,[s],null,i)})}},{key:"atomicSwap",value:function(e,t,r,n,o,i){var a,s,u=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
return e.publicKey().then(function(e){return a=e,r.publicKey()}).then(function(t){return s=t,u._processAccounts(e,o)}).then(function(h){var f=c.paymentOperation(s,i,t,a),p=c.paymentOperation(a,i,n,s),d=[r]
return l&&(d=d.concat(l)),u._submitOperations(h.account,"atomic swap",e,o,[f,p],null,d)})}},{key:"getFlags",value:function(e){var t=this
return e.publicKey().then(function(e){return t.server().loadAccount(e)}).then(function(e){var t=0
return e.flags.auth_required&&(t|=n.AuthRequiredFlag),e.flags.auth_revocable&&(t|=n.AuthRevocableFlag),t})}},{key:"createAccount",value:function(e,t,r){var o,i=this
return t.publicKey().then(function(t){return o=t,e.publicKey()}).then(function(e){return i.server().loadAccount(e)}).then(function(t){var i={destination:o,startingBalance:r},a=new n.TransactionBuilder(t,{fee:n.BASE_FEE}).setTimeout(n.TimeoutInfinite).addOperation(n.Operation.createAccount(i)).build()
return e.signTransaction(a)}).then(function(e){return i.submitTransaction(e,"create account")}).then(function(e){return i.server().loadAccount(o)})}},{key:"lockAccount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=null
switch(t){case"low":o={masterWeight:1,lowThreshold:0,medThreshold:2,highThreshold:2}
break
case"lock":o={masterWeight:0,lowThreshold:0,medThreshold:0,highThreshold:0}
break
default:console.log("preset invalid: "+t)}if(!o)throw new Error("lockAccount preset invalid")
return this.setOptions(e,o,r,n)}},{key:"setDomain",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={homeDomain:t}
return this.setOptions(e,o,r,n)}},{key:"setFlags",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={setFlags:t}
return this.setOptions(e,o,r,n)}},{key:"clearFlags",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={clearFlags:t}
return this.setOptions(e,o,r,n)}},{key:"setInflationDestination",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={inflationDest:t}
return this.setOptions(e,o,r,n)}},{key:"setOptions",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return this._processAccounts(e,n).then(function(i){var a=c.setOptionsOperation(t,i.sourcePublicKey)
return r._submitOperations(i.account,"set options",e,n,[a],null,o)})}},{key:"multiOperation",value:function(e,t,r){var o=this,i=null,a=[]
return e.publicKey().then(function(e){return i=e,t.publicKey()}).then(function(e){return o.server().loadAccount(e)}).then(function(s){var u=Promise.resolve(),l=!0,h=!1,f=void 0
try{for(var p,d=function(){var e=p.value
u=u.then(function(){switch(e.type){case"change-trust":var t=c.changeTrustOperation(e.asset,e.limit,i)
return a.push(t),null
case"multisig":return e.secondWallet.publicKey().then(function(e){var t=c.multisigOperations(e,1,2,2,i)
return a=a.concat(t),null})
case"create-account":return e.newWallet.publicKey().then(function(t){var r={destination:t,startingBalance:e.startingBalance},o=n.Operation.createAccount(r)
return a.push(o),null})
default:return console.log("not handled: "+e.type),null}})},v=r[Symbol.iterator]();!(l=(p=v.next()).done);l=!0)d()}catch(e){h=!0,f=e}finally{try{l||null==v.return||v.return()}finally{if(h)throw f}}return u.then(function(){if(0===a.length)throw new Error("multi operation failed")
return o._submitOperations(s,"multi-operation",e,t,a)})})}},{key:"_processAccounts",value:function(e,t){var r=this
return e.publicKey().then(function(e){return t?t.publicKey().then(function(t){return{sourcePublicKey:e,fundingPublicKey:t}}):{sourcePublicKey:e}}).then(function(e){var t=e.sourcePublicKey
return e.fundingPublicKey&&(t=e.fundingPublicKey),r.server().loadAccount(t).then(function(t){return e.account=t,e})})}},{key:"_submitOperations",value:function(e,t,r,o,i){var a=this,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=new n.TransactionBuilder(e,{fee:n.BASE_FEE}).setTimeout(n.TimeoutInfinite),h=!0,f=!1,p=void 0
try{for(var d,v=i[Symbol.iterator]();!(h=(d=v.next()).done);h=!0){var y=d.value
l.addOperation(y)}}catch(e){f=!0,p=e}finally{try{h||null==v.return||v.return()}finally{if(f)throw p}}s.strOK(u)&&l.addMemo(n.Memo.text(u))
var g=l.build()
return r.signTransaction(g).then(function(e){return o&&!o.equalTo(r)?o.signTransaction(e):e}).then(function(e){if(c&&c.length>0){var n=[]
n.push(r),o&&n.push(o)
var i=a._filteredSigners(c,n)
if(i.length>0){var s=Promise.resolve(),u=!0,l=!1,h=void 0
try{for(var f,p=function(){var t=f.value
s=s.then(function(){return t.signTransaction(e)})},d=i[Symbol.iterator]();!(u=(f=d.next()).done);u=!0)p()}catch(e){l=!0,h=e}finally{try{u||null==d.return||d.return()}finally{if(l)throw h}}return s.then(function(e){return a.submitTransaction(e,t)})}}return a.submitTransaction(e,t)})}},{key:"_filteredSigners",value:function(e,t){var r=e
if(e&&e.length>0&&t&&t.length>0){r=[]
var n=!0,o=!1,i=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value
if(u){var c=!1,l=!0,h=!1,f=void 0
try{for(var p,d=t[Symbol.iterator]();!(l=(p=d.next()).done);l=!0){var v=p.value
if(u.equalTo(v)){c=!0
break}}}catch(e){h=!0,f=e}finally{try{l||null==d.return||d.return()}finally{if(h)throw f}}c||r.push(u)}}}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}}return r}}])&&g(t.prototype,r),o&&g(t,o),e}()
function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2?arguments[2]:void 0
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._serverURL=t,this._testnet=r,this._testnet?n.Network.useTestNetwork():n.Network.usePublicNetwork(),this._server=new n.Server(t,o)}var t,r,o
return t=e,(r=[{key:"server",value:function(){return this._testnet?n.Network.useTestNetwork():n.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}])&&b(t.prototype,r),o&&b(t,o),e}()
function E(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o
return t=e,o=[{key:"secret",value:function(t){var r=new e
return r._secret=t,r._publicKey=n.Keypair.fromSecret(t).publicKey(),r}},{key:"ledger",value:function(t,r){var n=new e
return n._ledgerAPI=t,n._confirmCallback=r,n}},{key:"public",value:function(t){var r=new e
return r._publicKey=t,r}}],(r=[{key:"publicKey",value:function(){var e=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(t){return e._publicKey=t,e._publicKey})}},{key:"equalTo",value:function(e){return!(!this.usingLedger()||!e.usingLedger())||(this._publicKey===e._publicKey||this._secret===e._secret)}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(e){var t=this
return this.publicKey().then(function(r){if(t.usingLedger())return t._confirmCallback&&t._confirmCallback(),t._ledgerAPI.signTransaction(r,e)
if(s.strOK(t._secret)){var o=n.Keypair.fromSecret(t._secret)
return e.sign(o),e}throw new Error("This wallet does not contain a secret key.")}).then(function(e){return e})}}])&&E(t.prototype,r),o&&E(t,o),e}()
function C(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var A=function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=r,this.horizon=t,this.order=o,this.records=[],this.index=-1,this.pagingToken=0,this.publicKey=n,this.reachedEnd=!1,this.loading=!1}var t,r,n
return t=e,(r=[{key:"recordForIndex",value:function(e){if(e>=0&&e<this.records.length?this.index=e:this.index=e>0?this.records.length-1:0,this.records.length>0){var t=this.records[this.index]
return{index:this.index,record:t}}return{}}},{key:"getCurrentPage",value:function(e){var t=this
return new Promise(function(r,n){if(e){var o=t.index+1
if(o>=t.records.length){if(!t.reachedEnd)return t.loadNextPage().then(function(){r(t.recordForIndex(o))})
r(t.recordForIndex(o))}else r(t.recordForIndex(o))}else{var i=t.index-1
r(t.recordForIndex(i))}})}},{key:"next",value:function(){return this.getCurrentPage(!0)}},{key:"previous",value:function(){return this.getCurrentPage(!1)}},{key:"loadNextPage",value:function(){var e=this
return new Promise(function(t,r){if(!e.loading){var n
switch(e.loading=!0,e.type){case"payments":n=e.horizon.server().payments()
break
case"transactions":n=e.horizon.server().transactions()
break
case"operations":n=e.horizon.server().operations()
break
case"effects":n=e.horizon.server().effects()}return n.limit(4).order(e.order),0!==e.pagingToken&&n.cursor(e.pagingToken),n.forAccount(e.publicKey),n.call().then(function(r){if(r.records.length>0){e.records=e.records.concat(r.records)
var n=r.records.length-1
e.pagingToken=r.records[n].paging_token}else console.log("reached end"),e.reachedEnd=!0
e.loading=!1,t(null)}).catch(function(t){e.loading=!1,console.log(t,"Error"),r(null)})}console.log("loading"),t(null)})}}])&&C(t.prototype,r),n&&C(t,n),e}(),T=r(9),S=r.n(T),k=r(10),O=r.n(k)
function I(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n
return t=e,n=[{key:"setupForNode",value:function(e){this.nodeTransport=e}},{key:"isNodeTransport",value:function(e){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create():O.a.create()}}],(r=null)&&I(t.prototype,r),n&&I(t,n),e}()
function U(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var B=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.transport=null,this.str=null}var t,r,o
return t=e,(r=[{key:"createTransport",value:function(){var e=this
return this.str?Promise.resolve():P.create().then(function(t){return e.transport=t,e.str=new S.a(e.transport),null}).catch(function(e){throw console.log(JSON.stringify(e)),e})}},{key:"verifyConnect",value:function(){var e=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw e.transport.close(),e.str=null,e.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var e=this
return this.createTransport().then(function(){return e.verifyConnect().catch(function(t){return console.log("connect failed: ",t),e.createTransport().then(function(){return e.verifyConnect()})})}).catch(function(e){throw console.log("Error: connect: "+JSON.stringify(e)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var e=this
return this.connect().then(function(){return e.str.getPublicKey("44'/148'/0'")}).then(function(e){return e.publicKey}).catch(function(e){throw console.log("Error: getPublicKey: "+JSON.stringify(e)),e})}},{key:"signTransaction",value:function(e,t){var r=this
return this.connect().then(function(){return r.str.signTransaction("44'/148'/0'",t.signatureBase())}).then(function(r){var o=r.signature,i=n.Keypair.fromPublicKey(e)
if(i.verify(t.hash(),o)){var a=i.signatureHint(),s=new n.xdr.DecoratedSignature({hint:a,signature:o})
return t.signatures.push(s),t}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(e){throw console.log("Error: signTransaction: "+JSON.stringify(e)),e})}}])&&U(t.prototype,r),o&&U(t,o),e}()
r.d(t,"StellarAPI",function(){return _}),r.d(t,"HorizonServer",function(){return m}),r.d(t,"StellarWallet",function(){return w}),r.d(t,"LedgerAPI",function(){return B}),r.d(t,"LedgerAPITransport",function(){return P}),r.d(t,"TransactionLogger",function(){return y}),r.d(t,"StellarSdk",function(){return n}),r.d(t,"StreamCache",function(){return A}),r.d(t,"Utils",function(){return s})}])})
