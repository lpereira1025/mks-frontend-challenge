"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Cart/Cart.jsx":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Close_cart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/Close_cart.png */ \"./public/Close_cart.png\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/Cart/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CartItem/CartItem */ \"./src/components/CartItem/CartItem.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/AppContext */ \"./src/context/AppContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { cartItems, isCartVisible } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const totalPrice = cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat((_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().cart), \" \").concat(isCartVisible ? (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().cartActive) : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().divCart),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().firstDivCarth2),\n                        children: [\n                            \"Carrinho \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 20\n                            }, this),\n                            \"de compras\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().firstDivCartClose),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _public_Close_cart_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"Fechar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().cartItems),\n                children: cartItems.map((cartItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: cartItem\n                    }, cartItem.id, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 39\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().divCart),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().divCartTotal),\n                        children: \"Total: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().divCartTotal),\n                        children: [\n                            \"R$ \",\n                            totalPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_4___default().divCartFinalizar),\n                children: \"Finalizar Compra\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\mks-frontend-challenge\\\\src\\\\components\\\\Cart\\\\Cart.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"aEFRmFw50fL9Fe0zg5cmLb+INiA=\");\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0o7QUFDb0I7QUFDWjtBQUNLO0FBQ007QUFFbEQsU0FBU007O0lBQ1AsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0ssMkRBQVVBO0lBRTFELE1BQU1JLGFBQWFGLFVBQVVHLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxPQUFTRCxNQUFPQyxLQUFLQyxLQUFLLEdBQUdELEtBQUtFLFFBQVEsRUFBRztJQUV2RixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVyxHQUFrQlIsT0FBZkwsOERBQVcsRUFBQyxLQUEwQyxPQUF2Q0ssZ0JBQWdCTCxvRUFBaUIsR0FBRzs7MEJBQ3hFLDhEQUFDZ0I7Z0JBQUlILFdBQVdiLGlFQUFjOztrQ0FDNUIsOERBQUNrQjt3QkFBR0wsV0FBV2Isd0VBQXFCOzs0QkFBRTswQ0FDM0IsOERBQUNvQjs7Ozs7NEJBQUk7Ozs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT1IsV0FBV2IsMkVBQXdCO2tDQUN6Qyw0RUFBQ0YsbURBQUtBOzRCQUFDeUIsS0FBS3hCLDhEQUFLQTs0QkFBRXlCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ1I7Z0JBQUlILFdBQVdiLG1FQUFnQjswQkFDNUJJLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0MseUJBQWEsOERBQUN6QiwwREFBUUE7d0JBQW1CMEIsTUFBTUQ7dUJBQW5CQSxTQUFTRSxFQUFFOzs7Ozs7Ozs7OzBCQUcxRCw4REFBQ1o7Z0JBQUlILFdBQVdiLGlFQUFjOztrQ0FDNUIsOERBQUM2Qjt3QkFBS2hCLFdBQVdiLHNFQUFtQjtrQ0FBRTs7Ozs7O2tDQUN0Qyw4REFBQzZCO3dCQUFLaEIsV0FBV2Isc0VBQW1COzs0QkFBRTs0QkFBSU0sV0FBV3lCLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OzswQkFHL0QsOERBQUNWO2dCQUFPUixXQUFXYiwwRUFBdUI7MEJBQUU7Ozs7Ozs7Ozs7OztBQUtsRDtHQTlCU0c7S0FBQUE7QUFnQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeD9iMzI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJzsgXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvQ2xvc2VfY2FydC5wbmcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FydC5tb2R1bGUuY3NzJzsgXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuLi9DYXJ0SXRlbS9DYXJ0SXRlbSc7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvQXBwQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IHsgY2FydEl0ZW1zLCBpc0NhcnRWaXNpYmxlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICBjb25zdCB0b3RhbFByaWNlID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyAoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLCAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcnR9ICR7aXNDYXJ0VmlzaWJsZSA/IHN0eWxlcy5jYXJ0QWN0aXZlIDogJyd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2Q2FydH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0RGl2Q2FydGgyfT5cclxuICAgICAgICAgIENhcnJpbmhvIDxici8+ZGUgY29tcHJhc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5maXJzdERpdkNhcnRDbG9zZX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDbG9zZX0gYWx0PSdGZWNoYXInLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtc30+XHJcbiAgICAgICAgeyBjYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4gPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGRhdGE9e2NhcnRJdGVtfSAvPikgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2Q2FydH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGl2Q2FydFRvdGFsfT5Ub3RhbDogPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRpdkNhcnRUb3RhbH0+UiQge3RvdGFsUHJpY2UudG9GaXhlZCgyKX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kaXZDYXJ0RmluYWxpemFyfT5cclxuICAgICAgICBGaW5hbGl6YXIgQ29tcHJhXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiSW1hZ2UiLCJDbG9zZSIsInN0eWxlcyIsIkNhcnRJdGVtIiwiQXBwQ29udGV4dCIsIkNhcnQiLCJjYXJ0SXRlbXMiLCJpc0NhcnRWaXNpYmxlIiwidG90YWxQcmljZSIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJwcmljZSIsInF1YW50aXR5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNhcnQiLCJjYXJ0QWN0aXZlIiwiZGl2IiwiZGl2Q2FydCIsImgyIiwiZmlyc3REaXZDYXJ0aDIiLCJiciIsImJ1dHRvbiIsImZpcnN0RGl2Q2FydENsb3NlIiwic3JjIiwiYWx0IiwibWFwIiwiY2FydEl0ZW0iLCJkYXRhIiwiaWQiLCJzcGFuIiwiZGl2Q2FydFRvdGFsIiwidG9GaXhlZCIsImRpdkNhcnRGaW5hbGl6YXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Cart/Cart.jsx\n"));

/***/ })

});