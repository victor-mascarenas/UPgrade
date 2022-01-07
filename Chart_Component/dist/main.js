/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userChart_js_APIData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userChart/js/APIData.js */ \"./src/userChart/js/APIData.js\");\n/* harmony import */ var _userChart_css_user_chart_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userChart/css/user-chart.scss */ \"./src/userChart/css/user-chart.scss\");\n\n\n\nclass Chart extends HTMLElement {\n  #apiData;\n  #chartOptions;\n  #chartData;\n  #chart;\n  #readyToDraw;\n\n  constructor() {\n    super();\n    this.#readyToDraw = false;\n    this.#apiData = new _userChart_js_APIData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.addShadow('open');\n    this.verifyScript();\n    this.init();\n  }\n\n  addShadow(mode) {\n    this.attachShadow({\n      mode: mode\n    });\n  }\n\n  async init() {\n    const templateContent = await this.getTemplate();\n    this.loadTemplate(templateContent);\n    this.shadowRoot.querySelector('#reload').addEventListener('click', this.graph.bind(this));\n    window.addEventListener('resize', this.onResize.bind(this));\n    this.graph();\n  }\n\n  verifyScript() {\n    if (!document.querySelector('#gcs')) {\n      const gcs = document.createElement('script');\n      gcs.setAttribute('id', 'gcs');\n      gcs.setAttribute('type', 'text/javascript');\n      gcs.setAttribute('src', 'https://www.gstatic.com/charts/loader.js');\n      document.head.appendChild(gcs);\n    }\n  }\n\n  getTemplate() {\n    return fetch('./userChart/template.html').then(res => res.text()).catch(error => {\n      console.log(`Error: ${error.message}`);\n    });\n  }\n\n  loadTemplate(templateContent) {\n    const template = document.createElement('template');\n    template.innerHTML = templateContent;\n    const styleTag = document.createElement('style');\n    styleTag.innerHTML = _userChart_css_user_chart_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    this.shadowRoot.appendChild(styleTag);\n    this.shadowRoot.appendChild(template.content.cloneNode(true));\n  }\n\n  async graph() {\n    try {\n      const data = await this.#apiData.getData(this.getAttribute('data-url'));\n      this.shadowRoot.querySelector('#chart').classList = 'chart-full';\n      this.load(data);\n    } catch (error) {\n      this.shadowRoot.querySelector('#chart').classList = 'chart-empty';\n      console.log(error);\n    }\n  }\n\n  async load(fetchedData) {\n    const title = this.getAttribute('title');\n    const dataArray = await this.prepareData(fetchedData);\n    const onLoadCallback = this.getAttribute('type') === 'bar' ? this.loadBarChart : this.loadPieChart;\n    google.charts.load('current', {\n      'packages': ['corechart']\n    });\n    google.charts.setOnLoadCallback(onLoadCallback.bind(this, title, dataArray));\n  }\n\n  async prepareData(fetchedData) {\n    const fields = this.getAttribute('fields').split(',');\n    const dataArray = [fields];\n    await fetchedData.data.forEach(element => {\n      let dataFieldArray = [];\n      fields.forEach(field => dataFieldArray.push(element[field]));\n      dataArray.push(dataFieldArray);\n    });\n    return dataArray;\n  }\n\n  loadBarChart(title, dataArray) {\n    this.#chartData = google.visualization.arrayToDataTable(dataArray);\n    this.#chartOptions = {\n      title: title,\n      width: 'auto',\n      height: 'auto',\n      bar: {\n        groupWidth: \"80%\"\n      },\n      legend: {\n        position: \"none\"\n      }\n    };\n    this.#chart = new google.visualization.ColumnChart(this.shadowRoot.querySelector('#chart'));\n    this.#readyToDraw = true;\n    this.drawChart();\n  }\n\n  loadPieChart(title, dataArray) {\n    this.#chartData = google.visualization.arrayToDataTable(dataArray);\n    this.#chartOptions = {\n      title: title,\n      width: 'auto',\n      height: 'auto'\n    };\n    this.#chart = new google.visualization.PieChart(this.shadowRoot.querySelector('#chart'));\n    this.#readyToDraw = true;\n    this.drawChart();\n  }\n\n  drawChart() {\n    this.#chart.draw(this.#chartData, this.#chartOptions);\n  }\n\n  onResize() {\n    if (this.#readyToDraw) {\n      this.drawChart();\n    }\n  }\n\n  connectedCallback() {}\n\n  disconnectedCallback() {\n    this.shadowRoot.querySelector('#reload').removeEventListener();\n    window.removeEventListener();\n  }\n\n}\n\nwindow.customElements.define('user-chart', Chart);\n\n//# sourceURL=webpack://chart_component/./src/index.js?");

/***/ }),

/***/ "./src/userChart/js/APIData.js":
/*!*************************************!*\
  !*** ./src/userChart/js/APIData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ APIData)\n/* harmony export */ });\nclass APIData {\n  getData(url) {\n    return fetch(url).then(res => res.json()).catch(error => {\n      throw `An error ocurred while fetching data from ${url}: ${error.message}`;\n    });\n  }\n\n}\n\n//# sourceURL=webpack://chart_component/./src/userChart/js/APIData.js?");

/***/ }),

/***/ "./src/userChart/css/user-chart.scss":
/*!*******************************************!*\
  !*** ./src/userChart/css/user-chart.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".button {\\n  margin: 10px 0px;\\n  font-size: 1em;\\n  width: auto;\\n  height: 30px;\\n  padding: 5px;\\n  background: #3075ff;\\n  color: #fff;\\n  outline: none;\\n  border-radius: 6px;\\n  border: 1px solid transparent;\\n  transition: 0.5s; }\\n  .button:focus {\\n    box-shadow: 0 0 0 2px rgba(0, 85, 255, 0.5); }\\n  .button:hover {\\n    background: #0055dd;\\n    color: #fff;\\n    transition: 0.5s; }\\n\\n.chart-empty {\\n  height: 0px; }\\n\\n.chart-full {\\n  height: 32em; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://chart_component/./src/userChart/css/user-chart.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://chart_component/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://chart_component/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;