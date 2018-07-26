/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_attributes__ = __webpack_require__(/*! ./block-attributes */ 1);\n/**\n * All Regsitered Blocks\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsbCBSZWdzaXRlcmVkIEJsb2Nrc1xuICovXG5cbmltcG9ydCAnLi9ibG9jay1hdHRyaWJ1dGVzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************!*\
  !*** ./src/block-attributes/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_glossary__ = __webpack_require__(/*! ./block-glossary */ 4);\n/**\n * BLOCK: block-attributes\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    getBlockTypes = _wp$blocks.getBlockTypes;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('ncsu-blocks/block-attributes', {\n\ttitle: __('Block Attributes'), // Block title.\n\ticon: 'list-view',\n\tcategory: 'common',\n\tkeywords: [__('info'), __('help'), __('attributes')],\n\n\tedit: function edit(props) {\n\t\t//console.log(getBlockTypes())\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__block_glossary__[\"a\" /* BlockGlossary */], { blocks: getBlockTypes() })\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__block_glossary__[\"a\" /* BlockGlossary */], { blocks: getBlockTypes() })\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2luZGV4LmpzPzA2NzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYmxvY2stYXR0cmlidXRlc1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgeyBCbG9ja0dsb3NzYXJ5IH0gZnJvbSAnLi9ibG9jay1nbG9zc2FyeSc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgZ2V0QmxvY2tUeXBlcyA9IF93cCRibG9ja3MuZ2V0QmxvY2tUeXBlcztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ25jc3UtYmxvY2tzL2Jsb2NrLWF0dHJpYnV0ZXMnLCB7XG5cdHRpdGxlOiBfXygnQmxvY2sgQXR0cmlidXRlcycpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2xpc3QtdmlldycsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnaW5mbycpLCBfXygnaGVscCcpLCBfXygnYXR0cmlidXRlcycpXSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhnZXRCbG9ja1R5cGVzKCkpXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tHbG9zc2FyeSwgeyBibG9ja3M6IGdldEJsb2NrVHlwZXMoKSB9KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0dsb3NzYXJ5LCB7IGJsb2NrczogZ2V0QmxvY2tUeXBlcygpIH0pXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stYXR0cmlidXRlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./src/block-attributes/style.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL3N0eWxlLnNjc3M/MDI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLWF0dHJpYnV0ZXMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./src/block-attributes/editor.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2VkaXRvci5zY3NzPzMzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./src/block-attributes/block-glossary.js ***!
  \************************************************/
/*! exports provided: BlockGlossary */
/*! exports used: BlockGlossary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BlockGlossary; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_index__ = __webpack_require__(/*! ./block-index */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_info__ = __webpack_require__(/*! ./block-info */ 6);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\nvar BlockGlossary = function BlockGlossary(_ref) {\n\tvar blocks = _ref.blocks;\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t'h2',\n\t\t\t{ className: 'blocks-heading' },\n\t\t\t'All Blocks'\n\t\t),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__block_index__[\"a\" /* BlockIndex */], { blocks: blocks }),\n\t\tblocks.map(function (e, i) {\n\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__block_info__[\"a\" /* BlockInfo */], _extends({ key: i }, e));\n\t\t})\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2Jsb2NrLWdsb3NzYXJ5LmpzPzk5YzYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IHsgQmxvY2tJbmRleCB9IGZyb20gJy4vYmxvY2staW5kZXgnO1xuaW1wb3J0IHsgQmxvY2tJbmZvIH0gZnJvbSAnLi9ibG9jay1pbmZvJztcblxuZXhwb3J0IHZhciBCbG9ja0dsb3NzYXJ5ID0gZnVuY3Rpb24gQmxvY2tHbG9zc2FyeShfcmVmKSB7XG5cdHZhciBibG9ja3MgPSBfcmVmLmJsb2NrcztcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2gyJyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnYmxvY2tzLWhlYWRpbmcnIH0sXG5cdFx0XHQnQWxsIEJsb2Nrcydcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0luZGV4LCB7IGJsb2NrczogYmxvY2tzIH0pLFxuXHRcdGJsb2Nrcy5tYXAoZnVuY3Rpb24gKGUsIGkpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tJbmZvLCBfZXh0ZW5kcyh7IGtleTogaSB9LCBlKSk7XG5cdFx0fSlcblx0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stYXR0cmlidXRlcy9ibG9jay1nbG9zc2FyeS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************************!*\
  !*** ./src/block-attributes/block-index.js ***!
  \*********************************************/
/*! exports provided: BlockIndex */
/*! exports used: BlockIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BlockIndex; });\nvar BlockIndex = function BlockIndex(_ref) {\n\tvar blocks = _ref.blocks;\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"block-index\" },\n\t\twp.element.createElement(\n\t\t\t\"h2\",\n\t\t\tnull,\n\t\t\t\"Index\"\n\t\t),\n\t\twp.element.createElement(\n\t\t\t\"ul\",\n\t\t\tnull,\n\t\t\tblocks.map(function (e, i) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\"li\",\n\t\t\t\t\t{ className: \"attribute-item\", key: i },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t{ href: '#block-' + e.name.replace('/', '') },\n\t\t\t\t\t\te.title\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t})\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2Jsb2NrLWluZGV4LmpzPzYyNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBCbG9ja0luZGV4ID0gZnVuY3Rpb24gQmxvY2tJbmRleChfcmVmKSB7XG5cdHZhciBibG9ja3MgPSBfcmVmLmJsb2NrcztcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc05hbWU6IFwiYmxvY2staW5kZXhcIiB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiaDJcIixcblx0XHRcdG51bGwsXG5cdFx0XHRcIkluZGV4XCJcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwidWxcIixcblx0XHRcdG51bGwsXG5cdFx0XHRibG9ja3MubWFwKGZ1bmN0aW9uIChlLCBpKSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJsaVwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZS1pdGVtXCIsIGtleTogaSB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHRcdFx0eyBocmVmOiAnI2Jsb2NrLScgKyBlLm5hbWUucmVwbGFjZSgnLycsICcnKSB9LFxuXHRcdFx0XHRcdFx0ZS50aXRsZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0KVxuXHQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2Jsb2NrLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************!*\
  !*** ./src/block-attributes/block-info.js ***!
  \********************************************/
/*! exports provided: BlockInfo */
/*! exports used: BlockInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BlockInfo; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attribute__ = __webpack_require__(/*! ./attribute */ 7);\n\nvar Dashicon = wp.components.Dashicon;\n\n\nvar BlockInfo = function BlockInfo(_ref) {\n\tvar title = _ref.title,\n\t    name = _ref.name,\n\t    attributes = _ref.attributes,\n\t    icon = _ref.icon;\n\n\tconsole.log(icon.src, name);\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: 'block', id: 'block-' + name.replace('/', '') },\n\t\twp.element.createElement(Dashicon, { icon: icon.src }),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'block-headline' },\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\t{ className: 'block-title' },\n\t\t\t\ttitle\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'block-name' },\n\t\t\t\tname\n\t\t\t)\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'h4',\n\t\t\tnull,\n\t\t\t'Attributes'\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'ul',\n\t\t\t{ className: 'attributes' },\n\t\t\tObject.keys(attributes).map(function (e, i) {\n\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__attribute__[\"a\" /* Attribute */], { key: i, name: e, data: attributes[e] });\n\t\t\t})\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2Jsb2NrLWluZm8uanM/NmZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUgfSBmcm9tICcuL2F0dHJpYnV0ZSc7XG52YXIgRGFzaGljb24gPSB3cC5jb21wb25lbnRzLkRhc2hpY29uO1xuXG5cbmV4cG9ydCB2YXIgQmxvY2tJbmZvID0gZnVuY3Rpb24gQmxvY2tJbmZvKF9yZWYpIHtcblx0dmFyIHRpdGxlID0gX3JlZi50aXRsZSxcblx0ICAgIG5hbWUgPSBfcmVmLm5hbWUsXG5cdCAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHQgICAgaWNvbiA9IF9yZWYuaWNvbjtcblxuXHRjb25zb2xlLmxvZyhpY29uLnNyYywgbmFtZSk7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0J2RpdicsXG5cdFx0eyBjbGFzc05hbWU6ICdibG9jaycsIGlkOiAnYmxvY2stJyArIG5hbWUucmVwbGFjZSgnLycsICcnKSB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChEYXNoaWNvbiwgeyBpY29uOiBpY29uLnNyYyB9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnYmxvY2staGVhZGxpbmUnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMycsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnYmxvY2stdGl0bGUnIH0sXG5cdFx0XHRcdHRpdGxlXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnYmxvY2stbmFtZScgfSxcblx0XHRcdFx0bmFtZVxuXHRcdFx0KVxuXHRcdCksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2g0Jyxcblx0XHRcdG51bGwsXG5cdFx0XHQnQXR0cmlidXRlcydcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCd1bCcsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2F0dHJpYnV0ZXMnIH0sXG5cdFx0XHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24gKGUsIGkpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBdHRyaWJ1dGUsIHsga2V5OiBpLCBuYW1lOiBlLCBkYXRhOiBhdHRyaWJ1dGVzW2VdIH0pO1xuXHRcdFx0fSlcblx0XHQpXG5cdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLWF0dHJpYnV0ZXMvYmxvY2staW5mby5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************************!*\
  !*** ./src/block-attributes/attribute.js ***!
  \*******************************************/
/*! exports provided: Attribute */
/*! exports used: Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Attribute; });\nvar getDisplayValue = function getDisplayValue(v, n) {\n\tif (typeof v === 'boolean') {\n\t\treturn v ? 'true' : 'false';\n\t} else if (Array.isArray(v)) {\n\t\treturn '[ ' + v.map(function (e) {\n\t\t\treturn getDisplayValue(e);\n\t\t}).join(', ') + ' ]';\n\t} else if (typeof v === 'string') {\n\t\treturn n === 'default' ? '\"' + v + '\"' : v;\n\t} else if (typeof v === 'number') {\n\t\treturn v;\n\t} else if (!v || v === null) {\n\t\treturn 'null';\n\t}\n\treturn 'Object';\n};\n\nvar AttributeProperty = function AttributeProperty(_ref) {\n\tvar name = _ref.name,\n\t    value = _ref.value;\n\n\tvar displayValue = getDisplayValue(value, name);\n\treturn wp.element.createElement(\n\t\t'li',\n\t\t{ className: 'attribute-property' },\n\t\twp.element.createElement(\n\t\t\t'span',\n\t\t\t{ className: 'attribute-property-name' },\n\t\t\tname,\n\t\t\t': '\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'span',\n\t\t\t{ className: 'attribute-property-value' },\n\t\t\tdisplayValue\n\t\t)\n\t);\n};\n\nvar Attribute = function Attribute(_ref2) {\n\tvar name = _ref2.name,\n\t    data = _ref2.data;\n\n\treturn wp.element.createElement(\n\t\t'li',\n\t\t{ className: 'attribute' },\n\t\twp.element.createElement(\n\t\t\t'h5',\n\t\t\t{ className: 'attribute-name' },\n\t\t\tname,\n\t\t\t':'\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'ul',\n\t\t\tnull,\n\t\t\tObject.keys(data).map(function (e, i) {\n\t\t\t\treturn wp.element.createElement(AttributeProperty, { key: i, name: e, value: data[e] });\n\t\t\t})\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2F0dHJpYnV0ZS5qcz9kNWM4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBnZXREaXNwbGF5VmFsdWUgPSBmdW5jdGlvbiBnZXREaXNwbGF5VmFsdWUodiwgbikge1xuXHRpZiAodHlwZW9mIHYgPT09ICdib29sZWFuJykge1xuXHRcdHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG5cdFx0cmV0dXJuICdbICcgKyB2Lm1hcChmdW5jdGlvbiAoZSkge1xuXHRcdFx0cmV0dXJuIGdldERpc3BsYXlWYWx1ZShlKTtcblx0XHR9KS5qb2luKCcsICcpICsgJyBdJztcblx0fSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbiA9PT0gJ2RlZmF1bHQnID8gJ1wiJyArIHYgKyAnXCInIDogdjtcblx0fSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gdjtcblx0fSBlbHNlIGlmICghdiB8fCB2ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICdudWxsJztcblx0fVxuXHRyZXR1cm4gJ09iamVjdCc7XG59O1xuXG52YXIgQXR0cmlidXRlUHJvcGVydHkgPSBmdW5jdGlvbiBBdHRyaWJ1dGVQcm9wZXJ0eShfcmVmKSB7XG5cdHZhciBuYW1lID0gX3JlZi5uYW1lLFxuXHQgICAgdmFsdWUgPSBfcmVmLnZhbHVlO1xuXG5cdHZhciBkaXNwbGF5VmFsdWUgPSBnZXREaXNwbGF5VmFsdWUodmFsdWUsIG5hbWUpO1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdsaScsXG5cdFx0eyBjbGFzc05hbWU6ICdhdHRyaWJ1dGUtcHJvcGVydHknIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3NwYW4nLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdhdHRyaWJ1dGUtcHJvcGVydHktbmFtZScgfSxcblx0XHRcdG5hbWUsXG5cdFx0XHQnOiAnXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnc3BhbicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2F0dHJpYnV0ZS1wcm9wZXJ0eS12YWx1ZScgfSxcblx0XHRcdGRpc3BsYXlWYWx1ZVxuXHRcdClcblx0KTtcbn07XG5cbmV4cG9ydCB2YXIgQXR0cmlidXRlID0gZnVuY3Rpb24gQXR0cmlidXRlKF9yZWYyKSB7XG5cdHZhciBuYW1lID0gX3JlZjIubmFtZSxcblx0ICAgIGRhdGEgPSBfcmVmMi5kYXRhO1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0J2xpJyxcblx0XHR7IGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScgfSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnaDUnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdhdHRyaWJ1dGUtbmFtZScgfSxcblx0XHRcdG5hbWUsXG5cdFx0XHQnOidcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCd1bCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0T2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uIChlLCBpKSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQXR0cmlidXRlUHJvcGVydHksIHsga2V5OiBpLCBuYW1lOiBlLCB2YWx1ZTogZGF0YVtlXSB9KTtcblx0XHRcdH0pXG5cdFx0KVxuXHQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1hdHRyaWJ1dGVzL2F0dHJpYnV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);