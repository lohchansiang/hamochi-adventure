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

/***/ "./src/game/components/PlayerAttackBar.ts":
/*!************************************************!*\
  !*** ./src/game/components/PlayerAttackBar.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerAttackBar; }\n/* harmony export */ });\nclass PlayerAttackBar {\n    constructor(scene, x, y, target = 20){\n        //\n        this.target = 20;\n        this.current = 0;\n        //\n        this.padding = 10;\n        this.scene = scene;\n        this.target = target;\n        var progressBar = this.scene.add.rectangle(x);\n        var progressBox = this.scene.add.graphics();\n        progressBox.fillStyle(0x222222, 0.8);\n        progressBox.fillRect(x, y, 320, 50).setOri;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL1BsYXllckF0dGFja0Jhci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsTUFBTUE7SUFTakJDLFlBQWFDLEtBQVcsRUFBRUMsQ0FBUyxFQUFFQyxDQUFTLEVBQUVDLFNBQWlCLEVBQUUsQ0FBRTtRQU5yRSxFQUFFO2FBQ0ZBLFNBQWlCO2FBQ2pCQyxVQUFrQjtRQUNsQixFQUFFO2FBQ0ZDLFVBQWtCO1FBR2QsSUFBSSxDQUFDTCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDRyxNQUFNLEdBQUdBO1FBRWQsSUFBSUcsY0FBYyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sR0FBRyxDQUFDQyxTQUFTLENBQUNQO1FBQzNDLElBQUlRLGNBQWMsSUFBSSxDQUFDVCxLQUFLLENBQUNPLEdBQUcsQ0FBQ0csUUFBUTtRQUN6Q0QsWUFBWUUsU0FBUyxDQUFDLFVBQVU7UUFDaENGLFlBQVlHLFFBQVEsQ0FBQ1gsR0FBR0MsR0FBRyxLQUFLLElBQUlXLE1BQU07SUFDOUM7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvUGxheWVyQXR0YWNrQmFyLnRzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckF0dGFja0JhcntcblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIC8vXG4gICAgdGFyZ2V0OiBudW1iZXIgPSAyMFxuICAgIGN1cnJlbnQ6IG51bWJlciA9IDBcbiAgICAvL1xuICAgIHBhZGRpbmc6IG51bWJlciA9IDEwXG4gICAgXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIgPSAyMCApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcblxuICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoeCwpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3NCb3ggPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICBwcm9ncmVzc0JveC5maWxsU3R5bGUoMHgyMjIyMjIsIDAuOCk7XG4gICAgICAgIHByb2dyZXNzQm94LmZpbGxSZWN0KHgsIHksIDMyMCwgNTApLnNldE9yaTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlBsYXllckF0dGFja0JhciIsImNvbnN0cnVjdG9yIiwic2NlbmUiLCJ4IiwieSIsInRhcmdldCIsImN1cnJlbnQiLCJwYWRkaW5nIiwicHJvZ3Jlc3NCYXIiLCJhZGQiLCJyZWN0YW5nbGUiLCJwcm9ncmVzc0JveCIsImdyYXBoaWNzIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzZXRPcmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/PlayerAttackBar.ts\n"));

/***/ })

});