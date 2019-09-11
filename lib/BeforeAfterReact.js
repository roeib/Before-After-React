module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};r(4);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.seperatorRef=i.default.createRef(),r.wrapRef=i.default.createRef(),r.diffImgRef=i.default.createRef(),r.resize=i.default.createRef(),r.state={imgLoaded:!1,isDown:!1,offset:[0,0],supportsTouch:"ontouchstart"in window||navigator.msMaxTouchPoints,minWidth:0},r.dragStart=r.dragStart.bind(r),r.moveDrag=r.moveDrag.bind(r),r.down=r.down.bind(r),r.setToLoaded=r.setToLoaded.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidUpdate",value:function(e,t){var r=document.querySelectorAll(".before-after-wrap img"),n=Math.min(r[0].naturalWidth,r[1].naturalWidth);t.minWidth<n&&(this.wrapRef.current.style.width=n+"px",this.diffImgRef.current.style.width=n+"px",this.setState({minWidth:n}))}},{key:"componentDidMount",value:function(){var e=this.state.supportsTouch;this.seperatorRef.current.addEventListener(e?"touchstart":"mousedown",this.dragStart,!1),document.addEventListener(e?"touchend":"mouseup",this.down,!1),document.addEventListener(e?"touchmove":"mousemove",this.moveDrag,!1)}},{key:"componentWillUnmount",value:function(){var e=this.state.supportsTouch;this.seperatorRef.current.removeEventListener(e?"touchstart":"mousedown",this.dragStart),document.removeEventListener(e?"touchend":"mouseup",this.down),document.removeEventListener(e?"touchmove":"mousemove",this.moveDrag)}},{key:"down",value:function(){this.setState({isDown:!1})}},{key:"dragStart",value:function(e){var t=this.seperatorRef.current;this.setState({isDown:!0,offset:[t.offsetLeft-(this.state.supportsTouch?e.changedTouches[0].pageX:e.clientX),t.offsetTop-(this.state.supportsTouch?e.changedTouches[0].pageY:e.clientY)]})}},{key:"moveDrag",value:function(e){e.preventDefault();var t=this.state,r=t.isDown,n=t.supportsTouch;if(r){var o=n?e.changedTouches[0].pageY:e.clientY,a=n?e.changedTouches[0].pageX:e.clientX;this.props.vertical?this.handleVertical(o):this.handleHorizontal(a)}}},{key:"handleVertical",value:function(e){var t=this.state,r=t.offset,n=t.minWidth;e+r[1]>n||e+r[1]<0||(this.seperatorRef.current.style.top=e+r[1]+"px",this.resize.current.style.height=e+r[1]+"px")}},{key:"handleHorizontal",value:function(e){var t=this.state,r=t.offset,n=t.minWidth;e+r[0]>n||e+r[0]<0||(this.seperatorRef.current.style.left=e+r[0]+"px",this.resize.current.style.width=e+r[0]+"px")}},{key:"setToLoaded",value:function(){this.setState({imgLoaded:!0})}},{key:"render",value:function(){var e=this.props,t=e.firstImgSrc,r=e.secondImgSrc,n=e.containerClass,o=e.cursor,a=e.seperatorImg;return i.default.createElement("div",{ref:this.wrapRef,className:"before-after-wrap "+(n||"")},i.default.createElement("img",{onLoad:this.setToLoaded,src:t,alt:"left"}),i.default.createElement("div",{className:"resize "+(this.props.vertical?"vertical":"horizontal"),ref:this.resize},i.default.createElement("img",{onLoad:this.setToLoaded,ref:this.diffImgRef,src:r,alt:"right"})),i.default.createElement("div",{ref:this.seperatorRef,style:{cursor:o},className:"before-after-seperator "+(this.props.vertical?"vertical":"horizontal")},i.default.createElement("img",{className:"before-after-seperator-img "+(this.props.vertical?"vertical":"horizontal"),src:a})))}}]),t}();u.defaultProps={firstImgSrc:"https://upload.wikimedia.org/wikipedia/commons/2/21/Gallet_clamshell_600x600_7.jpg",secondImgSrc:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg",seperatorImg:"https://cdn.pixabay.com/photo/2016/09/05/10/51/app-1646220_960_720.png"},t.default=u},function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var y="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function x(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||g}function S(){}function _(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||g}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw b(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=x.prototype;var j=_.prototype=new S;j.constructor=_,n(j,x.prototype),j.isPureReactComponent=!0;var k={current:null},O={suspense:null},R={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n=void 0,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var f=Array(s),c=0;c<s;c++)f[c]=arguments[c+2];o.children=f}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:R.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var L=/\/+/g,z=[];function $(e,t,r,n){if(z.length){var o=z.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>z.length&&z.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case a:case i:s=!0}}if(s)return n(o,t,""===r?"."+D(t,0):r),1;if(s=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var c=r+D(u=t[f],f);s+=e(u,c,n,o)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=y&&t[y]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),f=0;!(u=t.next()).done;)s+=e(u=u.value,c=r+D(u,f++),n,o);else if("object"===u)throw n=""+t,b(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return s}(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,function(e){return e}):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(L,"$&/")+"/"),I(e,U,t=$(t,a,n,o)),M(t)}function q(){var e=k.current;if(null===e)throw b(Error(321));return e}var W={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,N,t=$(null,null,t,r)),M(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return A(e,t,null,function(e){return e}),t},only:function(e){if(!T(e))throw b(Error(143));return e}},createRef:function(){return{current:null}},Component:x,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:u,Profiler:f,StrictMode:s,Suspense:d,unstable_SuspenseList:h,createElement:P,cloneElement:function(e,t,r){if(null==e)throw b(Error(267),e);var o=void 0,i=n({},e.props),u=e.key,s=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,f=R.current),void 0!==t.key&&(u=""+t.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)E.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){c=Array(o);for(var l=0;l<o;l++)c[l]=arguments[l+2];i.children=c}return{$$typeof:a,type:e.type,key:u,ref:s,props:i,_owner:f}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=O.suspense;O.suspense=void 0===t?null:t;try{e()}finally{O.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:O,ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:n}},F={default:W},B=F&&W||F;e.exports=B.default||B},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,u,s=i(e),f=1;f<arguments.length;f++){for(var c in r=Object(arguments[f]))o.call(r,c)&&(s[c]=r[c]);if(n){u=n(r);for(var l=0;l<u.length;l++)a.call(r,u[l])&&(s[u[l]]=r[u[l]])}}return s}},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(7)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(6)(!1)).push([e.i,'.before-after-wrap {\n  position: relative;\n  margin: auto\n}\n.before-after-wrap img {\n  width: 100%;\n  display: block;\n}\n.before-after-wrap img:nth-child(2) {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.before-after-wrap .before-after-seperator.horizontal {\n position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  margin-left: -2px;\n  background: #fff;\n  cursor: ew-resize;\n\n}\n.before-after-wrap .before-after-seperator.vertical {\n  position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    height: 4px;\n    margin-top: -2px;\n    background: #fff;\n    cursor: ew-resize;\n\n}\n.before-after-wrap .before-after-seperator.vertical:after {\n  left: 50%;\n}\n.before-after-wrap .before-after-seperator.horizontal:after {\n  top: 50%;\n}\n.before-after-wrap .before-after-seperator:after {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: -32px 0 0 -32px;\n  content: "";\n  color: white;\n  font-weight: bold;\n  font-size: 36px;\n  text-align: center;\n  line-height: 64px;\n  background: #7ac3f1;\n  border: 1px solid #e7f3ff;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 60px 50px -30px #637ba0;\n}\n\n.resize {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height:50%;\n  overflow: hidden;\n}\n.resize.horizontal{\n  width: 50%;\n  height: 100%;\n\n}\n.resize.vertical{\n  height: 50%;\n  width: 100%;\n\n}\n.resize img {\n  width: 100%;\n  display: block;\n}\n.before-after-wrap img.before-after-seperator-img{\n  width: 54px;\n    height: 54px;\n    position: absolute;\n    left: 50%;\n    margin-left: -27px;\n    margin-top: -27px;\n    z-index: 4;\n}\n.before-after-wrap img.before-after-seperator-img.vertical{\n  left:50%\n\n}\n.before-after-wrap img.before-after-seperator-img.horizontal{\n top:50%\n}',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),a=n.sources.map(function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")});return[r].concat(a).concat([o]).join("\n")}var i,u,s;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var i=0;i<e.length;i++){var u=e[i];null!=u[0]&&n[u[0]]||(r&&!u[2]?u[2]=r:r&&(u[2]="(".concat(u[2],") and (").concat(r,")")),t.push(u))}},t}},function(e,t,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function u(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}function s(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=o[n.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(v(n.parts[i],t))}else{for(var u=[];i<n.parts.length;i++)u.push(v(n.parts[i],t));o[n.id]={id:n.id,refs:1,parts:u}}}}function f(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach(function(r){t.setAttribute(r,e.attributes[r])}),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function v(e,t){var r,n,o;if(t.singleton){var a=m++;r=h||(h=f(t)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=f(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=u(e,t);return s(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a],f=o[i.id];f&&(f.refs--,n.push(f))}e&&s(u(e,t),t);for(var c=0;c<n.length;c++){var l=n[c];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete o[l.id]}}}}}]);