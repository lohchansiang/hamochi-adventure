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

/***/ "./src/game/components/ForgeBar.ts":
/*!*****************************************!*\
  !*** ./src/game/components/ForgeBar.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = (this.width - 2 * this.padding) * (this.current / this.totalTarget);\n        let height = this.height - 2 * this.padding;\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.progressBar.fillRect(this.startX, this.startY, width, height);\n    }\n    reset() {\n        this.current = 0;\n        this.progressBar.clear();\n        this.updateProgressBar();\n    }\n    constructor(scene, x, y){\n        //\n        this.maxFailChance = 3;\n        this.currentFailChance = 3;\n        this.targetImage = 3;\n        this.targetText = 3;\n        this.targetAudio = 3;\n        //\n        this.width = 900;\n        this.height = 80;\n        this.padding = 15;\n        this.scene = scene;\n        this.x = x;\n        this.y = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.totalTarget = this.targetImage + this.targetText + this.targetAudio;\n        this.current = 0;\n        this.container = scene.add.container(x, y);\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 0.8);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        this.progressBar = this.scene.add.graphics();\n        this.container.add(this.progressBar);\n        // End Point\n        const imageEndPosX = this.startX + this.targetImage / this.totalTarget * this.width;\n        const textEndPosX = this.startX + (this.targetImage + this.targetText) / this.totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.targetImage + this.targetText + this.targetAudio) / this.totalTarget * this.width;\n        this.imageEndPoint = this.scene.add.container();\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSSxDQUFDSCxLQUFLO1FBQ25HLE1BQU0yQixlQUFlLElBQUksQ0FBQ25CLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQ1MsV0FBVyxHQUFDLElBQUksQ0FBQ0MsVUFBVSxHQUFDLElBQUksQ0FBQ0MsV0FBVyxJQUFFLElBQUksQ0FBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUNILEtBQUs7UUFFcEgsSUFBSSxDQUFDNEIsYUFBYSxHQUFHLElBQUksQ0FBQzlCLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQ0QsU0FBUztRQUU3QyxJQUFJLENBQUNyQixpQkFBaUI7SUFDMUI7QUFlSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvRm9yZ2VCYXIudHM/ZjZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VCYXJ7XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG5cbiAgICB9XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICAvL1xuICAgIG1heEZhaWxDaGFuY2U6IG51bWJlciA9IDNcbiAgICBjdXJyZW50RmFpbENoYW5jZTogbnVtYmVyID0gM1xuICAgIHRhcmdldEltYWdlOiBudW1iZXIgPSAzXG4gICAgdGFyZ2V0VGV4dDogbnVtYmVyID0gM1xuICAgIHRhcmdldEF1ZGlvOiBudW1iZXIgPSAzXG4gICAgLy8gY3VycmVudEltYWdlOiBudW1iZXIgPSAwXG4gICAgLy8gY3VycmVudFRleHQ6IG51bWJlciA9IDBcbiAgICAvLyBjdXJyZW50QXVkaW86IG51bWJlciA9IDBcbiAgICAvL1xuICAgIHRvdGFsVGFyZ2V0OiBudW1iZXJcbiAgICBjdXJyZW50OiBudW1iZXJcbiAgICAvL1xuICAgIHdpZHRoOiBudW1iZXIgPSA5MDBcbiAgICBoZWlnaHQ6IG51bWJlciA9IDgwXG4gICAgcGFkZGluZzogbnVtYmVyID0gMTVcbiAgICB4Om51bWJlclxuICAgIHk6bnVtYmVyXG4gICAgc3RhcnRYOiBudW1iZXJcbiAgICBzdGFydFk6IG51bWJlclxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBwcm9ncmVzc0JhcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JhckJhc2U6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgLy9cbiAgICBpbWFnZUVuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICB0ZXh0RW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGF1ZGlvRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuc3RhcnRYID0gLSAodGhpcy53aWR0aC8yKVxuICAgICAgICB0aGlzLnN0YXJ0WSA9IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy50b3RhbFRhcmdldCA9IHRoaXMudGFyZ2V0SW1hZ2UgKyB0aGlzLnRhcmdldFRleHQgKyB0aGlzLiB0YXJnZXRBdWRpbztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmssIDAuOCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRYIC0gdGhpcy5wYWRkaW5nLCBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMucGFkZGluZywgXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArICh0aGlzLnBhZGRpbmcqMiksIFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICsgKHRoaXMucGFkZGluZyoyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXJCYXNlKTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXIpO1xuXG4gICAgICAgIC8vIEVuZCBQb2ludFxuICAgICAgICBjb25zdCBpbWFnZUVuZFBvc1ggPSAgdGhpcy5zdGFydFggKyB0aGlzLnRhcmdldEltYWdlL3RoaXMudG90YWxUYXJnZXQgKiB0aGlzLndpZHRoXG4gICAgICAgIGNvbnN0IHRleHRFbmRQb3NYID0gIHRoaXMuc3RhcnRYICsgKHRoaXMudGFyZ2V0SW1hZ2UrdGhpcy50YXJnZXRUZXh0KS90aGlzLnRvdGFsVGFyZ2V0ICogdGhpcy53aWR0aFxuICAgICAgICBjb25zdCBhdWRpb0VuZFBvc1ggPSB0aGlzLnN0YXJ0WCArICh0aGlzLnRhcmdldEltYWdlK3RoaXMudGFyZ2V0VGV4dCt0aGlzLnRhcmdldEF1ZGlvKS90aGlzLnRvdGFsVGFyZ2V0ICogdGhpcy53aWR0aFxuICAgICAgICBcbiAgICAgICAgdGhpcy5pbWFnZUVuZFBvaW50ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKCl7XG4gICAgICAgIGxldCB3aWR0aCA9ICggdGhpcy53aWR0aCAtICgyKnRoaXMucGFkZGluZykgKSAqICggdGhpcy5jdXJyZW50IC8gdGhpcy50b3RhbFRhcmdldClcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gKDIqdGhpcy5wYWRkaW5nKVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxTdHlsZSgweDAwZmYwMCwgMSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZmlsbFJlY3QodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jbGVhcigpXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkZvcmdlQmFyIiwicHJlbG9hZCIsInNjZW5lIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsInBhZGRpbmciLCJjdXJyZW50IiwidG90YWxUYXJnZXQiLCJoZWlnaHQiLCJwcm9ncmVzc0JhciIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwicmVzZXQiLCJjbGVhciIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJtYXhGYWlsQ2hhbmNlIiwiY3VycmVudEZhaWxDaGFuY2UiLCJ0YXJnZXRJbWFnZSIsInRhcmdldFRleHQiLCJ0YXJnZXRBdWRpbyIsImNvbnRhaW5lciIsImFkZCIsInByb2dyZXNzQmFyQmFzZSIsImdyYXBoaWNzIiwiY29sb3JQYW5lbEJnRGFyayIsImltYWdlRW5kUG9zWCIsInRleHRFbmRQb3NYIiwiYXVkaW9FbmRQb3NYIiwiaW1hZ2VFbmRQb2ludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/ForgeBar.ts\n"));

/***/ })

});