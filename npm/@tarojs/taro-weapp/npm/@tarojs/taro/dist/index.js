!function(a,f,u,e){"use strict";function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),f.defineProperty(e,r.key,r)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},t=f.keys(a);"function"==typeof f.getOwnPropertySymbols&&(t=t.concat(f.getOwnPropertySymbols(a).filter(function(e){return f.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=a[n=e],n in t?f.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}function c(e){return(c=f.setPrototypeOf?f.getPrototypeOf:function(e){return e.__proto__||f.getPrototypeOf(e)})(e)}function s(e,t){return(s=f.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function t(e){var r="function"==typeof Map?new Map:void 0;return(t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return l(e,arguments,c(this).constructor)}return n.prototype=f.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)})(e)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return function(e){if(u.isArray(e)){for(var t=0,n=new u(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in f(e)||"[object Arguments]"===f.prototype.toString.call(e))return u.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}f.defineProperty(a,"__esModule",{value:!0}),"function"!=typeof f.assign&&(f.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=f(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)f.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}),"function"!=typeof f.defineProperties&&(f.defineProperties=function(e,t){if("object"!==d(e)||null===e)throw new TypeError("bad obj");t=f(t);for(var n=f.keys(t),r=[],o=0;o<n.length;o++)r.push([n[o],function(e){function t(e,t){return f.prototype.hasOwnProperty.call(e,t)}function n(e){return"function"==typeof e}if("object"!==d(e)||null===e)throw new TypeError("bad desc");var r={};if(t(e,"enumerable")&&(r.enumerable=!!e.enumerable),t(e,"configurable")&&(r.configurable=!!e.configurable),t(e,"value")&&(r.value=e.value),t(e,"writable")&&(r.writable=!!e.writable),t(e,"get")){var o=e.get;if(!n(o)&&void 0!==o)throw new TypeError("bad get");r.get=o}if(t(e,"set")){var a=e.set;if(!n(a)&&void 0!==a)throw new TypeError("bad set");r.set=a}if(("get"in r||"set"in r)&&("value"in r||"writable"in r))throw new TypeError("identity-confused descriptor");return r}(t[n[o]])]);for(o=0;o<r.length;o++)f.defineProperty(e,r[o][0],r[o][1]);return e});function g(e){o(this,g),this.state={},this.props=e||{}}var y="Expected a function",v="__lodash_hash_undefined__",m="[object Function]",b="[object GeneratorFunction]",S="[object Symbol]",_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/,A=/^\./,w=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P=/\\(\\)?/g,k=/^\[object .+?Constructor\]$/,I="object"===("undefined"==typeof global?"undefined":d(global))&&global&&global.Object===f&&global,E="object"===("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===f&&self,B=I||E||{Function:Function,Boolean:Boolean,Object:f,Number:Number,Array:u,Date:Date,String:String,Symbol:Symbol,Error:Error,TypeError:TypeError,Map:Map,Set:Set,WeakMap:WeakMap,WeakSet:WeakSet,ArrayBuffer:ArrayBuffer,Math:Math,Promise:Promise,RegExp:e,DataView:DataView,isFinite:isFinite,parseInt:parseInt,parseFloat:parseFloat,Float32Array:Float32Array,Float64Array:Float64Array,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Uint8ClampedArray:Uint8ClampedArray,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval},T=9007199254740991,x=/^(?:0|[1-9]\d*)$/;var R,D=u.prototype,L=Function.prototype,M=f.prototype,F=B["__core-js_shared__"],W=(R=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"",j=L.toString,N=M.hasOwnProperty,O=M.toString,U=e("^"+j.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=B.Symbol,$=D.splice,q=ne(B,"Map"),H=ne(f,"create"),Q=V?V.prototype:void 0,G=Q?Q.toString:void 0;function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function K(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Y(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function J(e,t){for(var n=e.length;n--;)if(ie(e[n][0],t))return n;return-1}function Z(e,t){for(var n=0,r=(t=function(e,t){if(ce(e))return!1;var n=d(e);if("number"==n||"symbol"==n||"boolean"==n||null==e||se(e))return!0;return C.test(e)||!_.test(e)||null!=t&&e in f(t)}(t,e)?[t]:ee(t)).length;null!=e&&n<r;)e=e[oe(t[n++])];return n&&n==r?e:void 0}function X(e){var t,n,r;return ue(e)&&(t=e,!(W&&W in t))&&((r=ue(n=e)?O.call(n):"")==m||r==b||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?U:k).test(function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function ee(e){return ce(e)?e:re(e)}function te(e,t){var n,r,o=e.__data__;return("string"==(r=d(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function ne(e,t){var n,r,o=(r=t,null==(n=e)?void 0:n[r]);return X(o)?o:void 0}z.prototype.clear=function(){this.__data__=H?H(null):{}},z.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},z.prototype.get=function(e){var t=this.__data__;if(H){var n=t[e];return n===v?void 0:n}return N.call(t,e)?t[e]:void 0},z.prototype.has=function(e){var t=this.__data__;return H?void 0!==t[e]:N.call(t,e)},z.prototype.set=function(e,t){return this.__data__[e]=H&&void 0===t?v:t,this},K.prototype.clear=function(){this.__data__=[]},K.prototype.delete=function(e){var t=this.__data__,n=J(t,e);return!(n<0)&&(n==t.length-1?t.pop():$.call(t,n,1),!0)},K.prototype.get=function(e){var t=this.__data__,n=J(t,e);return n<0?void 0:t[n][1]},K.prototype.has=function(e){return-1<J(this.__data__,e)},K.prototype.set=function(e,t){var n=this.__data__,r=J(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},Y.prototype.clear=function(){this.__data__={hash:new z,map:new(q||K),string:new z}},Y.prototype.delete=function(e){return te(this,e).delete(e)},Y.prototype.get=function(e){return te(this,e).get(e)},Y.prototype.has=function(e){return te(this,e).has(e)},Y.prototype.set=function(e,t){return te(this,e).set(e,t),this};var re=ae(function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(se(e))return G?G.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var o=[];return A.test(e)&&o.push(""),e.replace(w,function(e,t,n,r){o.push(n?r.replace(P,"$1"):t||e)}),o});function oe(e){if("string"==typeof e||se(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function ae(o,a){if("function"!=typeof o||a&&"function"!=typeof a)throw new TypeError(y);function i(){var e=arguments,t=a?a.apply(this,e):e[0],n=i.cache;if(n.has(t))return n.get(t);var r=o.apply(this,e);return i.cache=n.set(t,r),r}return i.cache=new(ae.Cache||Y),i}function ie(e,t){return e===t||e!=e&&t!=t}ae.Cache=Y;var ce=u.isArray;function ue(e){var t=d(e);return e&&("object"==t||"function"==t)}function se(e){return"symbol"===d(e)||(t=e)&&"object"===d(t)&&O.call(e)==S;var t}N=f.prototype.hasOwnProperty;function fe(e,t,n){var r,o,a,i=e[t];N.call(e,t)&&ie(i,n)&&(void 0!==n||t in e)||(r=e,a=n,"__proto__"==(o=t)?f.defineProperty(r,o,{configurable:!0,enumerable:!0,value:a,writable:!0}):r[o]=a)}function le(e,t,n,r){if(!ue(e))return e;for(var o,a,i,c=(t=ee(t)).length,u=c-1,s=-1,f=e;null!=f&&++s<c;){var l,p=oe(t[s]),h=n;s!=u&&(l=f[p],void 0===(h=r?r(l,p,f):void 0)&&(h=ue(l)?l:(o=t[s+1],i=a=void 0,i=d(o),(a=null==a?T:a)&&("number"==i||"symbol"!=i&&x.test(o))&&-1<o&&o%1==0&&o<a?[]:{}))),fe(f,p,h),f=f[p]}return e}function pe(e,t,n){var r=null==e?void 0:Z(e,t);return void 0===r?n:r}function he(e,t,n){return null==e?e:le(e,t,n)}var de=/([A-Z])/g;function ge(e){return"-"+e.toLowerCase()}function ye(t){if(null==t)return"";if("string"==typeof t)return t;if(null==t)return"";if(null==(e=t)||"object"!==d(e)||!1!==u.isArray(e))throw new TypeError("style 只能是一个对象或字符串。");var e;return f.keys(t).map(function(e){return e.replace(de,ge).concat(":").concat(t[e])}).join(";")}var ve={WEAPP:"WEAPP",WEB:"WEB",RN:"RN",SWAN:"SWAN",ALIPAY:"ALIPAY",QUICKAPP:"QUICKAPP",TT:"TT",QQ:"QQ",JD:"JD"},me=null;function be(){return me||("undefined"!=typeof jd&&jd.getSystemInfo?(me=ve.JD,ve.JD):"undefined"!=typeof qq&&qq.getSystemInfo?(me=ve.QQ,ve.QQ):"undefined"!=typeof tt&&tt.getSystemInfo?(me=ve.TT,ve.TT):"undefined"!=typeof wx&&wx.getSystemInfo?(me=ve.WEAPP,ve.WEAPP):"undefined"!=typeof qa&&qa.getSystemInfo?(me=ve.QUICKAPP,ve.QUICKAPP):"undefined"!=typeof swan&&swan.getSystemInfo?(me=ve.SWAN,ve.SWAN):"undefined"!=typeof my&&my.getSystemInfo?(me=ve.ALIPAY,ve.ALIPAY):"undefined"!=typeof global&&global.__fbGenNativeModule?(me=ve.RN,ve.RN):"undefined"!=typeof window?(me=ve.WEB,ve.WEB):"Unknown environment")}var Se=null;function _e(e){return null===Se&&(Se=be()),(t=e)===f(t)&&"function"!=typeof t&&e[Se===ve.SWAN?"privateOriginal":"$original"]||e;var t}var Ce=function(){function s(e){o(this,s),void 0!==e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}return n(s,[{key:"on",value:function(e,t,n){var r,o,a,i,c;if(!t)return this;for(e=e.split(s.eventSplitter),r=this.callbacks;o=e.shift();)(a=(c=r[o])?c.tail:{}).next=i={},a.context=n,a.callback=t,r[o]={tail:i,next:c?c.next:a};return this}},{key:"once",value:function(o,a,i){var c=this;return this.on(o,function e(){for(var t=arguments.length,n=new u(t),r=0;r<t;r++)n[r]=arguments[r];a.apply(c,n),c.off(o,e,i)},i),this}},{key:"off",value:function(e,t,n){var r,o,a,i,c,u;if(!(o=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(s.eventSplitter):f.keys(o);r=e.shift();)if(a=o[r],delete o[r],a&&(t||n))for(i=a.tail;(a=a.next)!==i;)c=a.callback,u=a.context,(t&&c!==t||n&&u!==n)&&this.on(r,c,u);return this}},{key:"trigger",value:function(e){var t,n,r,o,a;if(!(r=this.callbacks))return this;for(e=e.split(s.eventSplitter),a=[].slice.call(arguments,1);t=e.shift();)if(n=r[t])for(o=n.tail;(n=n.next)!==o;)n.callback.apply(n.context||this,a);return this}}]),s}();function Ae(){}function we(){return{current:null}}function Pe(e,t,n,r){4<arguments.length&&void 0!==arguments[4]&&arguments[4]&&!t||("refName"in e&&e.refName?r[e.refName]=t:"fn"in e&&"function"==typeof e.fn?e.fn.call(n,t):e.fn&&"object"===d(e.fn)&&"current"in e.fn&&(e.fn.current=t))}function ke(t){t.$$refs&&0<t.$$refs.length&&(t.$$refs.forEach(function(e){"function"==typeof e.fn?e.fn.call(t,null):e.fn&&"object"===d(e.fn)&&"current"in e.fn&&(e.fn.current=null),"target"in e&&delete e.target}),t.refs={})}Ce.eventSplitter=/\s+/;var Ie=function(){function r(){var e,t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return o(this,r),(t=p(this,(e=c(r)).call.apply(e,[this].concat(h(n))))).inited=!1,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=f.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,t(u)),n(r,[{key:"pushRefs",value:function(e){var t=this;this.inited||(e.forEach(function(e){return t.pushRef(e)}),this.inited=!0)}},{key:"pushRef",value:function(t){this.find(function(e){return e.id===t.id})||this.push(t)}}]),r}();function Ee(i){return function(e,t,n,r){if(!e)return null;var o=i(e,t,n),a=d(r);if("function"!==a&&"object"!==a)return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(a));"object"===a?r.current=o:"function"===a&&r.call(e.$component,o)}}var Be=function(){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;o(this,r),this.index=n,this.requestParams=e,this.interceptors=t}return n(r,[{key:"proceed",value:function(e){if(this.requestParams=e,this.index>=this.interceptors.length)throw new Error("chain 参数错误, 请勿直接修改 request.chain");var t=this._getNextInterceptor()(this._getNextChain()),n=t.catch(function(e){return Promise.reject(e)});return"function"==typeof t.abort&&(n.abort=t.abort),n}},{key:"_getNextInterceptor",value:function(){return this.interceptors[this.index]}},{key:"_getNextChain",value:function(){return new r(this.requestParams,this.interceptors,this.index+1)}}]),r}(),Te=function(){function t(e){o(this,t),this.taroInterceptor=e,this.chain=new Be}return n(t,[{key:"request",value:function(e){var t=this;return this.chain.interceptors=this.chain.interceptors.filter(function(e){return e!==t.taroInterceptor}),this.chain.interceptors.push(this.taroInterceptor),this.chain.proceed(i({},e))}},{key:"addInterceptor",value:function(e){this.chain.interceptors.push(e)}},{key:"cleanInterceptors",value:function(){this.chain=new Be}}]),t}();var xe=f.freeze({timeoutInterceptor:function(e){var o,a=e.requestParams,t=new Promise(function(t,n){var r=setTimeout(function(){r=null,n(new Error("网络链接超时,请稍后再试！"))},a&&a.timeout||6e4);(o=e.proceed(a)).then(function(e){r&&(clearTimeout(r),t(e))}).catch(function(e){r&&clearTimeout(r),n(e)})});return"function"==typeof o.abort&&(t.abort=o.abort),t},logInterceptor:function(e){var t=e.requestParams,n=t.method,r=t.data,o=t.url;console.log("http ".concat(n||"GET"," --\x3e ").concat(o," data: "),r);var a=e.proceed(t),i=a.then(function(e){return console.log("http <-- ".concat(o," result:"),e),e});return"function"==typeof a.abort&&(i.abort=a.abort),i}}),Re={onSocketOpen:!0,onSocketError:!0,onSocketMessage:!0,onSocketClose:!0,onBackgroundAudioPlay:!0,onBackgroundAudioPause:!0,onBackgroundAudioStop:!0,onNetworkStatusChange:!0,onAccelerometerChange:!0,onCompassChange:!0,onBluetoothAdapterStateChange:!0,onBluetoothDeviceFound:!0,onBLEConnectionStateChange:!0,onBLECharacteristicValueChange:!0,onBeaconUpdate:!0,onBeaconServiceChange:!0,onUserCaptureScreen:!0,onHCEMessage:!0,onGetWifiList:!0,onWifiConnected:!0,offWifiConnected:!0,offGetWifiList:!0,onDeviceMotionChange:!0,setStorageSync:!0,getStorageSync:!0,getStorageInfoSync:!0,removeStorageSync:!0,clearStorageSync:!0,getSystemInfoSync:!0,getExtConfigSync:!0,getLogManager:!0,onMemoryWarning:!0,reportMonitor:!0,reportAnalytics:!0,navigateToSmartGameProgram:!0,getFileSystemManager:!0,getLaunchOptionsSync:!0,onPageNotFound:!0,onError:!0,onAppShow:!0,onAppHide:!0,offPageNotFound:!0,offError:!0,offAppShow:!0,offAppHide:!0,onAudioInterruptionEnd:!0,onAudioInterruptionBegin:!0,onLocationChange:!0,offLocationChange:!0},De={stopRecord:!0,getRecorderManager:!0,pauseVoice:!0,stopVoice:!0,pauseBackgroundAudio:!0,stopBackgroundAudio:!0,getBackgroundAudioManager:!0,createAudioContext:!0,createInnerAudioContext:!0,createVideoContext:!0,createCameraContext:!0,createLivePlayerContext:!0,createLivePusherContext:!0,createMapContext:!0,canIUse:!0,startAccelerometer:!0,stopAccelerometer:!0,startCompass:!0,stopCompass:!0,hideToast:!0,hideLoading:!0,showNavigationBarLoading:!0,hideNavigationBarLoading:!0,createAnimation:!0,createSelectorQuery:!0,createOffscreenCanvas:!0,createCanvasContext:!0,drawCanvas:!0,hideKeyboard:!0,stopPullDownRefresh:!0,createIntersectionObserver:!0,nextTick:!0,getMenuButtonBoundingClientRect:!0,onWindowResize:!0,offWindowResize:!0,arrayBufferToBase64:!0,base64ToArrayBuffer:!0,getAccountInfoSync:!0,getUpdateManager:!0,createWorker:!0,createRewardedVideoAd:!0,createInterstitialAd:!0,getRealtimeLogManager:!0},Le={uploadFile:!0,downloadFile:!0,connectSocket:!0,sendSocketMessage:!0,closeSocket:!0,chooseImage:!0,chooseMessageFile:!0,previewImage:!0,getImageInfo:!0,compressImage:!0,saveImageToPhotosAlbum:!0,startRecord:!0,playVoice:!0,setInnerAudioOption:!0,getAvailableAudioSources:!0,getBackgroundAudioPlayerState:!0,playBackgroundAudio:!0,seekBackgroundAudio:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,loadFontFace:!0,saveFile:!0,getFileInfo:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,navigateBack:!0,navigateTo:!0,redirectTo:!0,switchTab:!0,reLaunch:!0,startLocationUpdate:!0,startLocationUpdateBackground:!0,stopLocationUpdate:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setClipboardData:!0,getClipboardData:!0,openBluetoothAdapter:!0,closeBluetoothAdapter:!0,getBluetoothAdapterState:!0,startBluetoothDevicesDiscovery:!0,stopBluetoothDevicesDiscovery:!0,getBluetoothDevices:!0,getConnectedBluetoothDevices:!0,createBLEConnection:!0,closeBLEConnection:!0,getBLEDeviceServices:!0,getBLEDeviceCharacteristics:!0,readBLECharacteristicValue:!0,writeBLECharacteristicValue:!0,notifyBLECharacteristicValueChange:!0,startBeaconDiscovery:!0,stopBeaconDiscovery:!0,getBeacons:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,getHCEState:!0,startHCE:!0,stopHCE:!0,sendHCEMessage:!0,startWifi:!0,stopWifi:!0,connectWifi:!0,getWifiList:!0,setWifiList:!0,getConnectedWifi:!0,startDeviceMotionListening:!0,stopDeviceMotionListening:!0,pageScrollTo:!0,showToast:!0,showLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,setTabBarBadge:!0,removeTabBarBadge:!0,showTabBarRedDot:!0,hideTabBarRedDot:!0,setTabBarStyle:!0,setTabBarItem:!0,showTabBar:!0,hideTabBar:!0,setTopBarText:!0,startPullDownRefresh:!0,canvasToTempFilePath:!0,canvasGetImageData:!0,canvasPutImageData:!0,setBackgroundColor:!0,setBackgroundTextStyle:!0,getSelectedTextRange:!0,hideHomeButton:!0,getExtConfig:!0,login:!0,checkSession:!0,authorize:!0,getUserInfo:!0,checkIsSupportFacialRecognition:!0,startFacialRecognitionVerify:!0,startFacialRecognitionVerifyAndUploadVideo:!0,faceVerifyForPay:!0,requestPayment:!0,showShareMenu:!0,hideShareMenu:!0,updateShareMenu:!0,getShareInfo:!0,chooseAddress:!0,addCard:!0,openCard:!0,openSetting:!0,getSetting:!0,getWeRunData:!0,navigateToMiniProgram:!0,navigateBackMiniProgram:!0,chooseInvoice:!0,chooseInvoiceTitle:!0,checkIsSupportSoterAuthentication:!0,startSoterAuthentication:!0,checkIsSoterEnrolledInDevice:!0,requestSubscribeMessage:!0,setEnableDebug:!0,getOpenUserInfo:!0,ocrIdCard:!0,ocrBankCard:!0,ocrDrivingLicense:!0,ocrVehicleLicense:!0,textReview:!0,textToAudio:!0,imageAudit:!0,advancedGeneralIdentify:!0,objectDetectIdentify:!0,carClassify:!0,dishClassify:!0,logoClassify:!0,animalClassify:!0,plantClassify:!0,setPageInfo:!0,getSwanId:!0,requestPolymerPayment:!0,navigateToSmartProgram:!0,navigateBackSmartProgram:!0,preloadSubPackage:!0};function Me(e){var t=e.designWidth,n=void 0===t?700:t,r=e.deviceRatio,o=void 0===r?{640:1.17,750:1,828:.905}:r;this.config=this.config||{},this.config.designWidth=n,this.config.deviceRatio=o}function Fe(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function We(e){return"function"==typeof e}var je="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;function Ne(e){return void 0===e}function Oe(e){return Ne(e)||null===e}var Ue=!0;function Ve(){return Ue}function $e(e){Ue=Boolean(e)}function qe(){}function He(e){if(null===a.Current.current)throw new Error("invalid hooks call: hooks can only be called in a stateless component.");var t=a.Current.current.hooks;return e>=t.length&&t.push({}),t[e]}function Qe(e){We(e)&&(e=e());var n=He(a.Current.index++);return n.state||(n.component=a.Current.current,n.state=[e,function(e){var t=We(e)?e(n.state[0]):e;n.state[0]!==t&&(n.state[0]=t,n.component._disable=!1,n.component.setState({},qe))}]),n.state}function Ge(e,t){var n,r,o=He(a.Current.index++);o.marked?o.callback=e:(o.marked=!0,o.component=a.Current.current,o.callback=e,n=o.component,r=n[t],o.component[t]=function(){var e=o.callback;return r&&r.call.apply(r,[n].concat(u.prototype.slice.call(arguments))),e&&e.call.apply(e,[n].concat(u.prototype.slice.call(arguments)))})}function ze(e){Ge(e,"componentDidShow")}function Ke(e){Ge(e,"componentDidHide")}function Ye(e){Ge(e,"onPullDownRefresh")}function Je(e){Ge(e,"onReachBottom")}function Ze(e){Ge(e,"onPageScroll")}function Xe(e){Ge(e,"onResize")}function et(e){Ge(e,"onShareAppMessage")}function nt(e){Ge(e,"onTabItemTap")}function rt(){var e=He(a.Current.index++);return e.router||(e.component=a.Current.current,e.router=e.component.$router),e.router}function ot(){var e=He(a.Current.index++);return e.scope||(e.component=a.Current.current,e.scope=e.component.$scope),e.scope}function at(t,e,n){We(e)&&(e=e());var r=He(a.Current.index++);return r.state||(r.component=a.Current.current,r.state=[Ne(n)?e:n(e),function(e){r.state[0]=t(r.state[0],e),r.component._disable=!1,r.component.setState({},qe)}]),r.state}function it(n,e){return Oe(n)||Oe(e)||e.some(function(e,t){return!Fe(e,n[t])})}function ct(e,t){(t?e.effects:e.layoutEffects).forEach(function(e){We(e.cleanup)&&e.cleanup();var t=e.effect();We(t)&&(e.cleanup=t)}),t?e.effects=[]:e.layoutEffects=[]}a.Current={current:null,index:0};var ut=[];function st(e,t,n){var r,o=He(a.Current.index++);!a.Current.current._disableEffect&&a.Current.current.__isReady&&it(o.deps,t)&&(o.effect=e,o.deps=t,n?(a.Current.current.effects=a.Current.current.effects.concat(o),(r=a.Current.current)._afterScheduleEffect||(r._afterScheduleEffect=!0,ut.push(r),1===ut.length&&je(function(){setTimeout(function(){ut.forEach(function(e){e._afterScheduleEffect=!1,ct(e,!0)}),ut=[]},0)}))):a.Current.current.layoutEffects=a.Current.current.layoutEffects.concat(o))}function ft(e,t){st(e,t,!0)}function lt(e,t){st(e,t)}function pt(e){var t=He(a.Current.index++);return t.ref||(t.ref={current:e}),t.ref}function ht(e,t){var n=He(a.Current.index++);return it(n.deps,t)&&(n.deps=t,n.callback=e,n.value=e()),n.value}function dt(e,t){return ht(function(){return e},t)}function gt(e,t,n){var r;lt(function(){return We(e)?(e(t()),function(){return e(null)}):Ne(e)?void 0:(e.current=t(),function(){delete e.current})},(r=n,u.isArray(r)?n.concat([e]):void 0))}function yt(e){var t=e.context,n=t.emitter;if(null===n)return t._defaultValue;var r=He(a.Current.index++);return Ne(r.context)&&(r.context=!0,r.component=a.Current.current,n.on(function(e){r.component&&(r.component._disable=!1,r.component.setState({}))})),n.value}var vt=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.value=e,this.handlers=[]}return n(t,[{key:"on",value:function(e){this.handlers.push(e)}},{key:"off",value:function(t){this.handlers=this.handlers.filter(function(e){return e!==t})}},{key:"set",value:function(e){var t=this;Fe(e,this.value)||(this.value=e,this.handlers.forEach(function(e){return e(t.value)}))}}]),t}(),mt=0;function bt(n){var r={emitter:null,_id:"__context_"+mt+++"__",_defaultValue:n};return{Provider:function(e){var t=r.emitter;t?t.set(e):r.emitter=new vt(n)},context:r}}var St=f.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};function _t(e,t){return e.prototype.shouldComponentUpdate=function(e){return We(t)?!t(this.props,e):!function(e,t){if("object"!==d(e)&&"object"!==d(t))return e===t;if(null===e&&null===t)return 1;if(null!==e&&null!==t){if(St(e,t))return 1;var n=e?f.keys(e):[],r=t?f.keys(t):[];if(n.length===r.length){for(var o=0;o<n.length;o++){var a=n[o];if(!t.hasOwnProperty(a)||!St(e[a],t[a]))return}return 1}}}(this.props,e)},e}a.eventCenter=new Ce;var Ct={Component:g,Events:Ce,eventCenter:a.eventCenter,getEnv:be,ENV_TYPE:ve,render:Ae,internal_safe_get:pe,internal_safe_set:he,internal_inline_style:ye,internal_get_original:_e,internal_force_update:qe,noPromiseApis:De,onAndSyncApis:Re,otherApis:Le,initPxTransform:Me,createRef:we,commitAttachRef:Pe,detachAllRef:ke,Link:Te,interceptors:xe,RefsArray:Ie,handleLoopRef:Ee,Current:a.Current,useEffect:ft,useLayoutEffect:lt,useReducer:at,useState:Qe,useDidShow:ze,useDidHide:Ke,usePullDownRefresh:Ye,useReachBottom:Je,usePageScroll:Ze,useResize:Xe,useShareAppMessage:et,useTabItemTap:nt,useRouter:rt,useScope:ot,useRef:pt,useCallback:dt,useMemo:ht,useImperativeHandle:gt,invokeEffects:ct,useContext:yt,createContext:bt,memo:_t,getIsUsingDiff:Ve,setIsUsingDiff:$e};a.Component=g,a.Events=Ce,a.getEnv=be,a.ENV_TYPE=ve,a.render=Ae,a.internal_safe_get=pe,a.internal_safe_set=he,a.internal_inline_style=ye,a.internal_get_original=_e,a.internal_force_update=qe,a.noPromiseApis=De,a.onAndSyncApis=Re,a.otherApis=Le,a.initPxTransform=Me,a.createRef=we,a.commitAttachRef=Pe,a.detachAllRef=ke,a.Link=Te,a.interceptors=xe,a.RefsArray=Ie,a.handleLoopRef=Ee,a.useEffect=ft,a.useLayoutEffect=lt,a.useReducer=at,a.useState=Qe,a.useDidShow=ze,a.useDidHide=Ke,a.usePullDownRefresh=Ye,a.useReachBottom=Je,a.usePageScroll=Ze,a.useResize=Xe,a.useShareAppMessage=et,a.useTabItemTap=nt,a.useRouter=rt,a.useScope=ot,a.useRef=pt,a.useCallback=dt,a.useMemo=ht,a.useImperativeHandle=gt,a.invokeEffects=ct,a.useContext=yt,a.createContext=bt,a.memo=_t,a.getIsUsingDiff=Ve,a.setIsUsingDiff=$e,a.default=Ct}(exports,Object,Array,RegExp);