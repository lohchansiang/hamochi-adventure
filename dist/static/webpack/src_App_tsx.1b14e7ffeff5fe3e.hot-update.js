"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/game/scenes/DemoSave.ts":
/*!*************************************!*\
  !*** ./src/game/scenes/DemoSave.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DemoSave: function() { return /* binding */ DemoSave; }\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n\n\nclass DemoSave extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    create() {\n        const bg = this.add.rectangle(GameLib.screenWidth / 2, GameLib.screenHeight / 2, GameLib.screenWidth, GameLib.screenHeight, 0xFEF9F3);\n        //\n        this.buttonClose = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 100, 100).setScale(0.5);\n        this.buttonClose.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n    }\n    constructor(){\n        super(\"DemoSave\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zY2VuZXMvRGVtb1NhdmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUN3QjtBQUVoRCxNQUFNRSxpQkFBaUJGLHlDQUFLQTtJQVMvQkcsU0FDQTtRQUNJLE1BQU1DLEtBQUssSUFBSSxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUUMsV0FBVyxHQUFDLEdBQUdELFFBQVFFLFlBQVksR0FBQyxHQUFHRixRQUFRQyxXQUFXLEVBQUVELFFBQVFFLFlBQVksRUFBRTtRQUN4SCxFQUFFO1FBQ0YsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSVQsbUVBQVdBLENBQUMsSUFBSSxFQUFDLEtBQUssS0FBS1UsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxpQkFBaUIsR0FBRztZQUNqQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1FBQ3JCO0lBQ0o7SUFiQUMsYUFDQTtRQUNJLEtBQUssQ0FBQztJQUNWO0FBV0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0RlbW9TYXZlLnRzPzk3MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24nO1xuXG5leHBvcnQgY2xhc3MgRGVtb1NhdmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGJ1dHRvbkNsb3NlOiBDbG9zZUJ1dHRvblxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdEZW1vU2F2ZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoKVxuICAgIHsgICBcbiAgICAgICAgY29uc3QgYmcgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBHYW1lTGliLnNjcmVlbkhlaWdodC8yLCBHYW1lTGliLnNjcmVlbldpZHRoLCBHYW1lTGliLnNjcmVlbkhlaWdodCwgMHhGRUY5RjMpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlID0gbmV3IENsb3NlQnV0dG9uKHRoaXMsMTAwLCAxMDApLnNldFNjYWxlKDAuNSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTY2VuZSIsIkNsb3NlQnV0dG9uIiwiRGVtb1NhdmUiLCJjcmVhdGUiLCJiZyIsImFkZCIsInJlY3RhbmdsZSIsIkdhbWVMaWIiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImJ1dHRvbkNsb3NlIiwic2V0U2NhbGUiLCJvblByZXNzZWRDYWxsYmFjayIsInNjZW5lIiwic3RhcnQiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/scenes/DemoSave.ts\n"));

/***/ })

});