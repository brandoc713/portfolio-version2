"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./src/styles/theme.js\");\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/brandoncarido/portfolioWebProjV2/src/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brandoncarido/portfolioWebProjV2/src/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBRXJCLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0U7a0JBQ0UsNEVBQUNILHFEQUFLQTtzQkFDSiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyIvVXNlcnMvYnJhbmRvbmNhcmlkby9wb3J0Zm9saW9XZWJQcm9qVjIvc3JjL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lPlxuICAgIDwvPlxuICApO1xufVxuICJdLCJuYW1lcyI6WyJUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)`\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n\n  }\n  body {\n    font-family: ${(props)=>props.theme.fonts.main};\n    font-size: 1.6rem;\n    background: ${(props)=>props.theme.colors.background1};\n    color: ${(props)=>props.theme.colors.primary1};\n    cursor: default;\n\n  }\n  h1,h2,h3,h4,h5,h6,button {\n    font-family: ${(props)=>props.theme.fonts.title};\n  }\n  a {\n    text-decoration: none;\n  }\n  li{\n    list-style: none;\n  }\n\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUNUO0FBRTdDLE1BQU1FLGVBQWVGLG9FQUFpQixDQUFDO0VBQ3JDLEVBQUVDLHVEQUFTQSxDQUFDOzs7Ozs7Ozs7Ozs7O2lCQWFHLEVBQUVFLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7O2dCQUVuQyxFQUFFSCxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDO1dBQy9DLEVBQUVMLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0csTUFBTSxDQUFDRSxRQUFRLENBQUM7Ozs7O2lCQUtqQyxFQUFFTixDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0ssS0FBSyxDQUFDOzs7Ozs7Ozs7QUFTcEQsQ0FBQztBQUVELGlFQUFlUixZQUFZQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYnJhbmRvbmNhcmlkby9wb3J0Zm9saW9XZWJQcm9qVjIvc3JjL3N0eWxlcy9nbG9iYWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAke25vcm1hbGl6ZX07XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBodG1sIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXG4gIH1cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMubWFpbn07XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDF9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5MX07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gIH1cbiAgaDEsaDIsaDMsaDQsaDUsaDYsYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy50aXRsZX07XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIm5vcm1hbGl6ZSIsIkdsb2JhbFN0eWxlcyIsInByb3BzIiwidGhlbWUiLCJmb250cyIsIm1haW4iLCJjb2xvcnMiLCJiYWNrZ3JvdW5kMSIsInByaW1hcnkxIiwidGl0bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/styles/globals.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ \"(pages-dir-node)/./src/themes/default.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ \"(pages-dir-node)/./src/styles/globals.js\");\n\n\n\n\nconst Theme = ({ children })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/brandoncarido/portfolioWebProjV2/src/styles/theme.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brandoncarido/portfolioWebProjV2/src/styles/theme.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zdHlsZXMvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFWjtBQUNEO0FBRXJDLE1BQU1HLFFBQVEsQ0FBQyxFQUFFQyxRQUFRLEVBQUUsaUJBQ3pCLDhEQUFDSiw0REFBYUE7UUFBQ0MsT0FBT0EsdURBQUtBOzswQkFDekIsOERBQUNDLGdEQUFZQTs7Ozs7WUFDWkU7Ozs7Ozs7QUFJTCxpRUFBZUQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2JyYW5kb25jYXJpZG8vcG9ydGZvbGlvV2ViUHJvalYyL3NyYy9zdHlsZXMvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZXMvZGVmYXVsdFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuL2dsb2JhbHMnO1xuXG5jb25zdCBUaGVtZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAge2NoaWxkcmVufVxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZTsiXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiR2xvYmFsU3R5bGVzIiwiVGhlbWUiLCJjaGlsZHJlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/styles/theme.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Temp fonts\n    fonts: {\n        title: \"Space Grotesk, sans-serif\",\n        main: \"Space Grotesk, sans-serif\"\n    },\n    // Colors for layout\n    colors: {\n        primary1: \"hsl(204,23.8%,95.9%)\",\n        background1: \"#0F1624\",\n        accent1: \"hsl(34.9,98.6%,72.9%)\",\n        button: \"hsl(205.1,100%,36.1%)\",\n        background2: \"hsl(232.7,27.3%,23.7%)\"\n    },\n    // Breakpoints for responsive design\n    breakpoints: {\n        sm: 'screen and (max-width: 640px)',\n        md: 'screen and (max-width: 768px)',\n        lg: 'screen and (max-width: 1024px)',\n        xl: 'screen and (max-width: 1280px)'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy90aGVtZXMvZGVmYXVsdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7SUFDYixhQUFhO0lBQ2JBLE9BQU87UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQSxvQkFBb0I7SUFDcEJDLFFBQVE7UUFDTkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7SUFDQSxvQ0FBb0M7SUFDcENDLGFBQWE7UUFDWEMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtJQUNOO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2JyYW5kb25jYXJpZG8vcG9ydGZvbGlvV2ViUHJvalYyL3NyYy90aGVtZXMvZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRlbXAgZm9udHNcbiAgZm9udHM6IHtcbiAgICB0aXRsZTogXCJTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmXCIsXG4gICAgbWFpbjogXCJTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgLy8gQ29sb3JzIGZvciBsYXlvdXRcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTE6IFwiaHNsKDIwNCwyMy44JSw5NS45JSlcIixcbiAgICBiYWNrZ3JvdW5kMTogXCIjMEYxNjI0XCIsXG4gICAgYWNjZW50MTogXCJoc2woMzQuOSw5OC42JSw3Mi45JSlcIixcbiAgICBidXR0b246IFwiaHNsKDIwNS4xLDEwMCUsMzYuMSUpXCIsXG4gICAgYmFja2dyb3VuZDI6IFwiaHNsKDIzMi43LDI3LjMlLDIzLjclKVwiLFxuICB9LFxuICAvLyBCcmVha3BvaW50cyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ25cbiAgYnJlYWtwb2ludHM6IHtcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJyxcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJyxcbiAgICBsZzogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KScsXG4gICAgeGw6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCknXG4gIH0sXG59XG4iXSwibmFtZXMiOlsiZm9udHMiLCJ0aXRsZSIsIm1haW4iLCJjb2xvcnMiLCJwcmltYXJ5MSIsImJhY2tncm91bmQxIiwiYWNjZW50MSIsImJ1dHRvbiIsImJhY2tncm91bmQyIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();