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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/prasannagaddam/jamstack/nextjs-sanity/pages/products/index.js\";\n\nvar __N_SSG = true;\nfunction Products(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: data.product.map(function (product, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"indent\",\n        children: [product.title, \" -\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: product === null || product === void 0 ? void 0 : product.imageUrl\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/products/\".concat(product.slug.current),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \" See Details \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = Products;\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImRhdGEiLCJwcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImltYWdlVXJsIiwic2x1ZyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFZZSxTQUFTQSxRQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ3hDLHNCQUNFO0FBQUEsY0FDSUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0QsT0FBRCxFQUFVRSxLQUFWO0FBQUEsMEJBQ2pCO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsbUJBQ0tGLE9BQU8sQ0FBQ0csS0FEYixxQkFFSTtBQUFLLGFBQUcsRUFBRUgsT0FBRixhQUFFQSxPQUFGLHVCQUFFQSxPQUFPLENBQUVJO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSw4REFBQyxrREFBRDtBQUFNLGNBQUksc0JBQWVKLE9BQU8sQ0FBQ0ssSUFBUixDQUFhQyxPQUE1QixDQUFWO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUEsU0FBNkJKLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFqQjtBQURKLG1CQURGO0FBYUQ7S0FkdUJKLFEiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3JvcX0gZnJvbSAnbmV4dC1zYW5pdHknXG5pbXBvcnQge2dldENsaWVudH0gZnJvbSAnLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXInXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgcHJvZHVjdFF1ZXJ5ID0gZ3JvcWBcbiAgKltfdHlwZSA9PSBcInByb2R1Y3RcIl0ge1xuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgX2lkLFxuICAgIFwicHJpY2VcIjogZGVmYXVsdFByb2R1Y3RWYXJpYW50LnByaWNlLFxuICAgIFwiaW1hZ2VVcmxcIjogZGVmYXVsdFByb2R1Y3RWYXJpYW50LmltYWdlc1swXS5hc3NldC0+dXJsXG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMgKHtkYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IGRhdGEucHJvZHVjdC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZW50XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZX0gLSBcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5pbWFnZVVybH0vPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Quc2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICA8YT4gU2VlIERldGFpbHMgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpIH1cbiAgICA8Lz5cbiAgKSBcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtcywgcHJldmlldyA9IGZhbHNlfSkge1xuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHByb2R1Y3RRdWVyeSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJldmlldyxcbiAgICAgIGRhdGE6IHtwcm9kdWN0fSxcbiAgICB9LFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

});