/*!
 * multiple-cutom-widget-template v1.0.1
 * author: fex
 * build tool: AKFun
 * build time: Tue Dec 28 2021 12:40:07 GMT+0800 (China Standard Time)
 * build tool info: https://github.com/wibetter/akfun
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.amisWidget=t():e.amisWidget=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}({0:function(e,t){e.exports=require("amis-widget")},12:function(e,t,r){"use strict";r.r(t),r.d(t,"HelloJqueryPlugin",(function(){return o}));var n=r(0),o=function(){this.rendererName="hello-jquery",this.$schema="/schemas/UnkownSchema.json",this.name="hello-jquery",this.description="hello-jquery",this.tags=["自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"hello-jquery",label:"hello-jquery",name:"hello-jquery"},this.previewSchema={type:"hello-jquery",label:"hello-jquery"},this.panelTitle="配置面板",this.panelControls=[{type:"tpl",tpl:"可根据变量 \\${amisUser} 获取用户数据。"}]};Object(n.registerAmisEditorPlugin)(o,{rendererName:"hello-jquery",name:"hello-jquery",order:98,panelTitle:"配置面板",disabledRendererPlugin:!1}),t.default=o}})}));