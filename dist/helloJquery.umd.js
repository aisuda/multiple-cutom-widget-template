/*!
 * multiple-cutom-widget-template v1.0.1
 * author: fex
 * build tool: AKFun
 * build time: Tue Dec 28 2021 12:40:07 GMT+0800 (China Standard Time)
 * build tool info: https://github.com/wibetter/akfun
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.amisWidget=t():e.amisWidget=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({0:function(e,t){e.exports=require("amis-widget")},11:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),i=n(0),u=function(){function e(){this.template='\n    <div id="aaa">\n        这是个 jquery 按钮 <button id="btn">点我一下</button>\n    </div>'}var t=e.prototype;return t.onMount=function(e){o()("#btn").click(this.test.bind(this,e))},t.test=function(e){e.onAction(null,{actionType:"dialog",dialog:{title:"来个弹框",body:"Bom Bom Bom ${a} ${b}"}},{a:1,b:2})},e}();Object(i.registerRendererByType)(u,{type:"hello-jquery",usage:"renderer",weight:98,framework:"jquery"}),t.default=u},5:function(e,t){e.exports=require("jquery")}})}));