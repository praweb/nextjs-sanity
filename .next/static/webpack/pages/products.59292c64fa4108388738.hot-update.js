/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/prasannagaddam/jamstack/nextjs-sanity/pages/products/index.js\";\n\nvar __N_SSG = true;\nfunction Products(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: data.product.map(function (product, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"indent\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\" \", product.title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }, _this), \" - \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\" \", product.price, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 46\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/products/\".concat(product.slug.current),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: product === null || product === void 0 ? void 0 : product.imageUrl,\n            style: \"cursor: pointer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, _this)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = Products;\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImRhdGEiLCJwcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsInByaWNlIiwic2x1ZyIsImN1cnJlbnQiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBOztBQVllLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDeEMsc0JBQ0U7QUFBQSxjQUNJQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDRCxPQUFELEVBQVVFLEtBQVY7QUFBQSwwQkFDakI7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDSTtBQUFBLDBCQUFRRixPQUFPLENBQUNHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixzQkFDcUM7QUFBQSwwQkFBUUgsT0FBTyxDQUFDSSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHJDLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLHNCQUFlSixPQUFPLENBQUNLLElBQVIsQ0FBYUMsT0FBNUIsQ0FBVjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFTixPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRU8sUUFBbkI7QUFBNkIsaUJBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLFNBQTZCTCxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBakI7QUFESixtQkFERjtBQVlEO0tBYnVCSixRIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dyb3F9IGZyb20gJ25leHQtc2FuaXR5J1xuaW1wb3J0IHtnZXRDbGllbnR9IGZyb20gJy4uLy4uL2xpYi9zYW5pdHkuc2VydmVyJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHByb2R1Y3RRdWVyeSA9IGdyb3FgXG4gICpbX3R5cGUgPT0gXCJwcm9kdWN0XCJdIHtcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIF9pZCxcbiAgICBcInByaWNlXCI6IGRlZmF1bHRQcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICBcImltYWdlVXJsXCI6IGRlZmF1bHRQcm9kdWN0VmFyaWFudC5pbWFnZXNbMF0uYXNzZXQtPnVybFxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzICh7ZGF0YX0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyBkYXRhLnByb2R1Y3QubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGVudFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHNwYW4+IHtwcm9kdWN0LnRpdGxlfSA8L3NwYW4+IC0gPHNwYW4+IHtwcm9kdWN0LnByaWNlfSA8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5zbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5pbWFnZVVybH0gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIi8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSkgfVxuICAgIDwvPlxuICApIFxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zLCBwcmV2aWV3ID0gZmFsc2V9KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBnZXRDbGllbnQocHJldmlldykuZmV0Y2gocHJvZHVjdFF1ZXJ5KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcmV2aWV3LFxuICAgICAgZGF0YToge3Byb2R1Y3R9LFxuICAgIH0sXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

});