!function(t,e,_,i){"use strict";_.defineProperty(t,"__esModule",{value:!0});var m=function(t,e){if(i.isArray(t))return t;if(Symbol.iterator in _(t))return function(t,e){var o=[],r=!0,n=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(o.push(i.value),!e||o.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t};function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),_.defineProperty(t,r.key,r)}}var n,a,v=e("../../../../../@tarojs/taro-weapp/index.js"),s=c(v),h=c(e("../../../../../classnames/index.js")),u=c(e("../../../../../prop-types/index.js"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var p=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=_.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(_.setPrototypeOf?_.setPrototypeOf(t,e):t.__proto__=e)}(f,c(e("../../common/component.js")).default),o(f,[{key:"_constructor",value:function(t){(function t(e,o,r){null===e&&(e=Function.prototype);var n=_.getOwnPropertyDescriptor(e,o);if(void 0===n){var a=_.getPrototypeOf(e);return null===a?void 0:t(a,o,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0})(f.prototype.__proto__||_.getPrototypeOf(f.prototype),"_constructor",this).call(this,t),this.$$refs=new s.default.RefsArray}},{key:"_createData",value:function(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,n=(0,v.genCompid)(r+"$compid__61"),a=m(n,2),i=a[0],s=a[1],u=this.__props,c=u.color,l=u.size,p=u.mode,f=u.content,d=u.isOpened,y=(0,h.default)("at-activity-indicator",{"at-activity-indicator--center":"center"===p,"at-activity-indicator--isopened":d},this.__props.className);return v.propsManager.set({size:l,color:c},s,i),_.assign(this.__state,{$compid__61:s,rootClass:y,content:f}),this.__state}}]),a=n=f,n.$$events=[],n.$$componentPath="C:/Users/HP/Desktop/项目总/LightMindMiniProgram/node_modules/taro-ui/dist/weapp/components/activity-indicator/index",a);function f(){var t,e,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f);for(var r=arguments.length,n=i(r),a=0;a<r;a++)n[a]=arguments[a];return(e=o=l(this,(t=f.__proto__||_.getPrototypeOf(f)).call.apply(t,[this].concat(n)))).$usedState=["$compid__61","rootClass","content","color","size","mode","isOpened","className"],o.customComponents=["AtLoading"],l(o,e)}p.defaultProps={size:0,mode:"normal",color:"",content:"",className:"",isOpened:!0},p.propTypes={size:u.default.number,mode:u.default.string,color:u.default.string,content:u.default.string,className:u.default.oneOfType([u.default.array,u.default.string]),isOpened:u.default.bool},t.default=p,Component(e("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(p))}((module,exports),require,Object,Array);