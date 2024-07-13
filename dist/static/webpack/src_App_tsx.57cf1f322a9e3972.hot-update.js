/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/game/main.ts":
/*!**************************!*\
  !*** ./src/game/main.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/game/scenes/Boot.ts\");\n/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/GameOver */ \"./src/game/scenes/GameOver.ts\");\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Game */ \"./src/game/scenes/Game.ts\");\n/* harmony import */ var _scenes_MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/MainMenu */ \"./src/game/scenes/MainMenu.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scenes_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/Preloader */ \"./src/game/scenes/Preloader.ts\");\n/* harmony import */ var _scenes_Battle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/Battle */ \"./src/game/scenes/Battle.ts\");\n/* harmony import */ var _scenes_Battle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scenes_Battle__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n//  Find out more information about the Game Config at:\n//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig\nconst config = {\n    type: phaser__WEBPACK_IMPORTED_MODULE_4__.AUTO,\n    width: 1080,\n    height: 1920,\n    parent: \"game-container\",\n    backgroundColor: 0x3a404d,\n    scene: [\n        _scenes_Boot__WEBPACK_IMPORTED_MODULE_0__.Boot,\n        _scenes_Preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader,\n        _scenes_MainMenu__WEBPACK_IMPORTED_MODULE_3__.MainMenu,\n        _scenes_Game__WEBPACK_IMPORTED_MODULE_2__.Game,\n        _scenes_Battle__WEBPACK_IMPORTED_MODULE_6__.Battle,\n        _scenes_GameOver__WEBPACK_IMPORTED_MODULE_1__.GameOver\n    ],\n    scale: {\n        mode: Phaser.Scale.FIT,\n        autoCenter: Phaser.Scale.CENTER_BOTH\n    }\n};\nconst StartGame = (parent)=>{\n    return new phaser__WEBPACK_IMPORTED_MODULE_4__.Game({\n        ...config,\n        parent\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9tYWluLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDUTtBQUNJO0FBQ0o7QUFDVDtBQUNXO0FBQ047QUFFekMsdURBQXVEO0FBQ3ZELHNFQUFzRTtBQUN0RSxNQUFNUSxTQUF1QztJQUN6Q0MsTUFBTUosd0NBQUlBO0lBQ1ZLLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLGlCQUFpQjtJQUNqQkMsT0FBTztRQUNIZCw4Q0FBSUE7UUFDSk0sd0RBQVNBO1FBQ1RGLHNEQUFRQTtRQUNSRCw4Q0FBUUE7UUFDUkksa0RBQU1BO1FBQ05OLHNEQUFRQTtLQUNYO0lBQ0RjLE9BQU07UUFDRkMsTUFBTUMsT0FBT0MsS0FBSyxDQUFDQyxHQUFHO1FBQ3RCQyxZQUFZSCxPQUFPQyxLQUFLLENBQUNHLFdBQVc7SUFDeEM7QUFDSjtBQUVBLE1BQU1DLFlBQVksQ0FBQ1Y7SUFFZixPQUFPLElBQUlWLHdDQUFJQSxDQUFDO1FBQUUsR0FBR00sTUFBTTtRQUFFSTtJQUFPO0FBRXhDO0FBRUEsK0RBQWVVLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvbWFpbi50cz81MDc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb3QgfSBmcm9tICcuL3NjZW5lcy9Cb290JztcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSAnLi9zY2VuZXMvR2FtZU92ZXInO1xuaW1wb3J0IHsgR2FtZSBhcyBNYWluR2FtZSB9IGZyb20gJy4vc2NlbmVzL0dhbWUnO1xuaW1wb3J0IHsgTWFpbk1lbnUgfSBmcm9tICcuL3NjZW5lcy9NYWluTWVudSc7XG5pbXBvcnQgeyBBVVRPLCBHYW1lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJy4vc2NlbmVzL1ByZWxvYWRlcic7XG5pbXBvcnQgeyBCYXR0bGUgfSBmcm9tICcuL3NjZW5lcy9CYXR0bGUnO1xuXG4vLyAgRmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgR2FtZSBDb25maWcgYXQ6XG4vLyAgaHR0cHM6Ly9uZXdkb2NzLnBoYXNlci5pby9kb2NzLzMuNzAuMC9QaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnXG5jb25zdCBjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gICAgdHlwZTogQVVUTyxcbiAgICB3aWR0aDogMTA4MCxcbiAgICBoZWlnaHQ6IDE5MjAsXG4gICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogMHgzYTQwNGQsXG4gICAgc2NlbmU6IFtcbiAgICAgICAgQm9vdCxcbiAgICAgICAgUHJlbG9hZGVyLFxuICAgICAgICBNYWluTWVudSxcbiAgICAgICAgTWFpbkdhbWUsXG4gICAgICAgIEJhdHRsZSxcbiAgICAgICAgR2FtZU92ZXIsXG4gICAgXSxcbiAgICBzY2FsZTp7XG4gICAgICAgIG1vZGU6IFBoYXNlci5TY2FsZS5GSVQsXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USFxuICAgIH1cbn07XG5cbmNvbnN0IFN0YXJ0R2FtZSA9IChwYXJlbnQ6IHN0cmluZykgPT4ge1xuXG4gICAgcmV0dXJuIG5ldyBHYW1lKHsgLi4uY29uZmlnLCBwYXJlbnQgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRHYW1lO1xuIl0sIm5hbWVzIjpbIkJvb3QiLCJHYW1lT3ZlciIsIkdhbWUiLCJNYWluR2FtZSIsIk1haW5NZW51IiwiQVVUTyIsIlByZWxvYWRlciIsIkJhdHRsZSIsImNvbmZpZyIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudCIsImJhY2tncm91bmRDb2xvciIsInNjZW5lIiwic2NhbGUiLCJtb2RlIiwiUGhhc2VyIiwiU2NhbGUiLCJGSVQiLCJhdXRvQ2VudGVyIiwiQ0VOVEVSX0JPVEgiLCJTdGFydEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/main.ts\n"));

/***/ }),

/***/ "./src/game/scenes/Battle.ts":
/*!***********************************!*\
  !*** ./src/game/scenes/Battle.ts ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});