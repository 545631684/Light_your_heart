!function(r,i,t){"use strict";function e(r,t){for(var e=t&&t.plainObjects?i.create(null):{},o=0;o<r.length;++o)void 0!==r[o]&&(e[o]=r[o]);return e}var p=i.prototype.hasOwnProperty,s=t.isArray,f=function(){for(var r=[],t=0;t<256;++t)r.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return r}();r.exports={arrayToObject:e,assign:function(r,e){return i.keys(e).reduce(function(r,t){return r[t]=e[t],r},r)},combine:function(r,t){return[].concat(r,t)},compact:function(r){for(var t=[{obj:{o:r},prop:"o"}],e=[],o=0;o<t.length;++o)for(var n=t[o],c=n.obj[n.prop],u=i.keys(c),p=0;p<u.length;++p){var f=u[p],a=c[f];"object"==typeof a&&null!==a&&-1===e.indexOf(a)&&(t.push({obj:c,prop:f}),e.push(a))}return function(r){for(;1<r.length;){var t=r.pop(),e=t.obj[t.prop];if(s(e)){for(var o=[],n=0;n<e.length;++n)void 0!==e[n]&&o.push(e[n]);t.obj[t.prop]=o}}}(t),r},decode:function(r,t,e){var o=r.replace(/\+/g," ");if("iso-8859-1"===e)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(r){return o}},encode:function(r,t,e){if(0===r.length)return r;var o=r;if("symbol"==typeof r?o=Symbol.prototype.toString.call(r):"string"!=typeof r&&(o=String(r)),"iso-8859-1"===e)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(r){return"%26%23"+parseInt(r.slice(2),16)+"%3B"});for(var n="",c=0;c<o.length;++c){var u=o.charCodeAt(c);45===u||46===u||95===u||126===u||48<=u&&u<=57||65<=u&&u<=90||97<=u&&u<=122?n+=o.charAt(c):u<128?n+=f[u]:u<2048?n+=f[192|u>>6]+f[128|63&u]:u<55296||57344<=u?n+=f[224|u>>12]+f[128|u>>6&63]+f[128|63&u]:(c+=1,u=65536+((1023&u)<<10|1023&o.charCodeAt(c)),n+=f[240|u>>18]+f[128|u>>12&63]+f[128|u>>6&63]+f[128|63&u])}return n},isBuffer:function(r){return!(!r||"object"!=typeof r)&&!!(r.constructor&&r.constructor.isBuffer&&r.constructor.isBuffer(r))},isRegExp:function(r){return"[object RegExp]"===i.prototype.toString.call(r)},maybeMap:function(r,t){if(s(r)){for(var e=[],o=0;o<r.length;o+=1)e.push(t(r[o]));return e}return t(r)},merge:function o(n,c,u){if(!c)return n;if("object"!=typeof c){if(s(n))n.push(c);else{if(!n||"object"!=typeof n)return[n,c];(u&&(u.plainObjects||u.allowPrototypes)||!p.call(i.prototype,c))&&(n[c]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(c);var r=n;return s(n)&&!s(c)&&(r=e(n,u)),s(n)&&s(c)?(c.forEach(function(r,t){var e;p.call(n,t)?(e=n[t])&&"object"==typeof e&&r&&"object"==typeof r?n[t]=o(e,r,u):n.push(r):n[t]=r}),n):i.keys(c).reduce(function(r,t){var e=c[t];return p.call(r,t)?r[t]=o(r[t],e,u):r[t]=e,r},r)}}}(module,(exports,Object),Array,RegExp);