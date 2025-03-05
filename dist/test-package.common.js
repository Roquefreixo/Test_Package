/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 169:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HelloWorld: function() { return /* reexport */ HelloWorld; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=template&id=167c98be&scoped=true

const _hoisted_1 = {
  class: "hello"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("h1", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.msg), 1), _cache[0] || (_cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createStaticVNode)("<p data-v-167c98be> For a guide and recipes on how to configure / customize this project,<br data-v-167c98be> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>vue-cli documentation</a>. </p><h3 data-v-167c98be>Installed CLI Plugins</h3><ul data-v-167c98be><li data-v-167c98be><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>babel</a></li><li data-v-167c98be><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>eslint</a></li></ul><h3 data-v-167c98be>Essential Links</h3><ul data-v-167c98be><li data-v-167c98be><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>Core Docs</a></li><li data-v-167c98be><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>Forum</a></li><li data-v-167c98be><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>Community Chat</a></li><li data-v-167c98be><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>Twitter</a></li><li data-v-167c98be><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>News</a></li></ul><h3 data-v-167c98be>Ecosystem</h3><ul data-v-167c98be><li data-v-167c98be><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>vue-router</a></li><li data-v-167c98be><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>vuex</a></li><li data-v-167c98be><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>vue-devtools</a></li><li data-v-167c98be><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>vue-loader</a></li><li data-v-167c98be><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-167c98be>awesome-vue</a></li></ul>", 7))]);
}
;// ./src/components/HelloWorld.vue?vue&type=template&id=167c98be&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=script&lang=js
/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
;// ./src/components/HelloWorld.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=167c98be&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/HelloWorld.vue?vue&type=style&index=0&id=167c98be&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(169);
;// ./src/components/HelloWorld.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(HelloWorldvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-167c98be"]])

/* harmony default export */ var HelloWorld = (__exports__);
;// ./src/main.js

//import App from './App.vue'

const app = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createApp)(HelloWorld);
app.mount('#app');

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=test-package.common.js.map