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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DemoSave: function() { return /* binding */ DemoSave; }\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n\n\nclass DemoSave extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    preload() {\n        this.buttonClose = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 100, 100).setScale(0.5);\n        this.buttonClose.onPressedCallback = ()=>{\n            this.clean();\n            this.scene.start(\"MainMenu\");\n        };\n    }\n    create() {}\n    constructor(){\n        super(\"DemoSave\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zY2VuZXMvRGVtb1NhdmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUN3QjtBQUVoRCxNQUFNRSxpQkFBaUJGLHlDQUFLQTtJQVMvQkcsVUFDQTtRQUNJLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUlILG1FQUFXQSxDQUFDLElBQUksRUFBQyxLQUFLLEtBQUtJLFFBQVEsQ0FBQztRQUMzRCxJQUFJLENBQUNELFdBQVcsQ0FBQ0UsaUJBQWlCLEdBQUc7WUFDakMsSUFBSSxDQUFDQyxLQUFLO1lBQ1YsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQztRQUNyQjtJQUNKO0lBRUFDLFNBQ0EsQ0FFQTtJQWpCQUMsYUFDQTtRQUNJLEtBQUssQ0FBQztJQUNWO0FBZUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0RlbW9TYXZlLnRzPzk3MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24nO1xuXG5leHBvcnQgY2xhc3MgRGVtb1NhdmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGJ1dHRvbkNsb3NlOiBDbG9zZUJ1dHRvblxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdEZW1vU2F2ZScpO1xuICAgIH1cblxuICAgIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBuZXcgQ2xvc2VCdXR0b24odGhpcywxMDAsIDEwMCkuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlICgpXG4gICAge1xuICAgICAgICBcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2NlbmUiLCJDbG9zZUJ1dHRvbiIsIkRlbW9TYXZlIiwicHJlbG9hZCIsImJ1dHRvbkNsb3NlIiwic2V0U2NhbGUiLCJvblByZXNzZWRDYWxsYmFjayIsImNsZWFuIiwic2NlbmUiLCJzdGFydCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/DemoSave.ts\n"));

/***/ })

});