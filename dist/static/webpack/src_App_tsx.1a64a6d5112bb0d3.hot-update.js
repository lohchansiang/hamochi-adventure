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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = (this.width - 2 * this.padding) * (this.current / this.totalTarget);\n        let height = this.height - 2 * this.padding;\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.progressBar.fillRect(this.startX, this.startY, width, height);\n    }\n    reset() {\n        this.current = 0;\n        this.progressBar.clear();\n        this.updateProgressBar();\n    }\n    constructor(scene, x, y){\n        //\n        this.maxFailChance = 3;\n        this.currentFailChance = 3;\n        this.targetImage = 3;\n        this.targetText = 3;\n        this.targetAudio = 3;\n        //\n        this.width = 900;\n        this.height = 80;\n        this.padding = 15;\n        this.scene = scene;\n        this.x = x;\n        this.y = y;\n        this.startX = x - this.width / 2;\n        this.startY = y - this.height / 2;\n        this.container = scene.add.container(x, y);\n        this.totalTarget = this.targetImage + this.targetText + this.targetAudio;\n        this.current = 0;\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 0.8);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.progressBar = this.scene.add.graphics();\n        // End Point\n        const imageEndPosX = this.startX + this.targetImage / this.totalTarget * this.width;\n        const textEndPosX = this.startX + (this.targetImage + this.targetText) / this.totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.targetImage + this.targetText + this.targetAudio) / this.totalTarget * this.width;\n        this.imageEndPoint = this.scene.add.container();\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0ZvcmdlQmFyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBR3BCLE1BQU1DO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQWlFQUMsb0JBQW1CO1FBQ2YsSUFBSUMsUUFBUSxDQUFFLElBQUksQ0FBQ0EsS0FBSyxHQUFJLElBQUUsSUFBSSxDQUFDQyxPQUFPLElBQVEsS0FBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxXQUFXO1FBQ2pGLElBQUlDLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEdBQUksSUFBRSxJQUFJLENBQUNILE9BQU87UUFDMUMsSUFBSSxDQUFDSSxXQUFXLENBQUNDLFNBQVMsQ0FBQyxVQUFVO1FBQ3JDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUVULE9BQU9JO0lBQy9EO0lBRUFNLFFBQU87UUFDSCxJQUFJLENBQUNSLE9BQU8sR0FBRztRQUVmLElBQUksQ0FBQ0csV0FBVyxDQUFDTSxLQUFLO1FBQ3RCLElBQUksQ0FBQ1osaUJBQWlCO0lBQzFCO0lBN0NBYSxZQUFhZCxLQUFXLEVBQUVlLENBQVMsRUFBRUMsQ0FBUyxDQUFFO1FBN0JoRCxFQUFFO2FBQ0ZDLGdCQUF3QjthQUN4QkMsb0JBQTRCO2FBQzVCQyxjQUFzQjthQUN0QkMsYUFBcUI7YUFDckJDLGNBQXNCO1FBT3RCLEVBQUU7YUFDRm5CLFFBQWdCO2FBQ2hCSSxTQUFpQjthQUNqQkgsVUFBa0I7UUFlZCxJQUFJLENBQUNILEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNlLENBQUMsR0FBR0E7UUFDVCxJQUFJLENBQUNDLENBQUMsR0FBR0E7UUFDVCxJQUFJLENBQUNOLE1BQU0sR0FBR0ssSUFBSyxJQUFJLENBQUNiLEtBQUssR0FBQztRQUM5QixJQUFJLENBQUNTLE1BQU0sR0FBR0ssSUFBSyxJQUFJLENBQUNWLE1BQU0sR0FBQztRQUUvQixJQUFJLENBQUNnQixTQUFTLEdBQUd0QixNQUFNdUIsR0FBRyxDQUFDRCxTQUFTLENBQUNQLEdBQUVDO1FBRXZDLElBQUksQ0FBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQ2MsV0FBVyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBRUMsV0FBVztRQUN6RSxJQUFJLENBQUNqQixPQUFPLEdBQUc7UUFFZixJQUFJLENBQUNvQixlQUFlLEdBQUcsSUFBSSxDQUFDeEIsS0FBSyxDQUFDdUIsR0FBRyxDQUFDRSxRQUFRO1FBQzlDLElBQUksQ0FBQ0QsZUFBZSxDQUFDaEIsU0FBUyxDQUFDWCxxRUFBd0IsRUFBRTtRQUN6RCxJQUFJLENBQUMyQixlQUFlLENBQUNmLFFBQVEsQ0FDckIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDUCxPQUFPLEVBQzFCLElBQUksQ0FBQ1EsTUFBTSxHQUFHLElBQUksQ0FBQ1IsT0FBTyxFQUMxQixJQUFJLENBQUNELEtBQUssR0FBSSxJQUFJLENBQUNDLE9BQU8sR0FBQyxHQUMzQixJQUFJLENBQUNHLE1BQU0sR0FBSSxJQUFJLENBQUNILE9BQU8sR0FBQztRQUdwQyxJQUFJLENBQUNJLFdBQVcsR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQ0UsUUFBUTtRQUUxQyxZQUFZO1FBQ1osTUFBTUUsZUFBZ0IsSUFBSSxDQUFDakIsTUFBTSxHQUFHLElBQUksQ0FBQ1MsV0FBVyxHQUFDLElBQUksQ0FBQ2QsV0FBVyxHQUFHLElBQUksQ0FBQ0gsS0FBSztRQUNsRixNQUFNMEIsY0FBZSxJQUFJLENBQUNsQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUNTLFdBQVcsR0FBQyxJQUFJLENBQUNDLFVBQVUsSUFBRSxJQUFJLENBQUNmLFdBQVcsR0FBRyxJQUFJLENBQUNILEtBQUs7UUFDbkcsTUFBTTJCLGVBQWUsSUFBSSxDQUFDbkIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDUyxXQUFXLEdBQUMsSUFBSSxDQUFDQyxVQUFVLEdBQUMsSUFBSSxDQUFDQyxXQUFXLElBQUUsSUFBSSxDQUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQ0gsS0FBSztRQUVwSCxJQUFJLENBQUM0QixhQUFhLEdBQUcsSUFBSSxDQUFDOUIsS0FBSyxDQUFDdUIsR0FBRyxDQUFDRCxTQUFTO1FBRTdDLElBQUksQ0FBQ3JCLGlCQUFpQjtJQUMxQjtBQWVKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9Gb3JnZUJhci50cz9mNmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJhcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIC8vXG4gICAgbWF4RmFpbENoYW5jZTogbnVtYmVyID0gM1xuICAgIGN1cnJlbnRGYWlsQ2hhbmNlOiBudW1iZXIgPSAzXG4gICAgdGFyZ2V0SW1hZ2U6IG51bWJlciA9IDNcbiAgICB0YXJnZXRUZXh0OiBudW1iZXIgPSAzXG4gICAgdGFyZ2V0QXVkaW86IG51bWJlciA9IDNcbiAgICAvLyBjdXJyZW50SW1hZ2U6IG51bWJlciA9IDBcbiAgICAvLyBjdXJyZW50VGV4dDogbnVtYmVyID0gMFxuICAgIC8vIGN1cnJlbnRBdWRpbzogbnVtYmVyID0gMFxuICAgIC8vXG4gICAgdG90YWxUYXJnZXQ6IG51bWJlclxuICAgIGN1cnJlbnQ6IG51bWJlclxuICAgIC8vXG4gICAgd2lkdGg6IG51bWJlciA9IDkwMFxuICAgIGhlaWdodDogbnVtYmVyID0gODBcbiAgICBwYWRkaW5nOiBudW1iZXIgPSAxNVxuICAgIHg6bnVtYmVyXG4gICAgeTpudW1iZXJcbiAgICBzdGFydFg6IG51bWJlclxuICAgIHN0YXJ0WTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHByb2dyZXNzQmFyOiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIHByb2dyZXNzQmFyQmFzZTogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICAvL1xuICAgIGltYWdlRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHRleHRFbmRQb2ludDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgYXVkaW9FbmRQb2ludDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG5cbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6U2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5zdGFydFggPSB4IC0gKHRoaXMud2lkdGgvMilcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG5cbiAgICAgICAgdGhpcy50b3RhbFRhcmdldCA9IHRoaXMudGFyZ2V0SW1hZ2UgKyB0aGlzLnRhcmdldFRleHQgKyB0aGlzLiB0YXJnZXRBdWRpbztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmssIDAuOCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRYIC0gdGhpcy5wYWRkaW5nLCBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMucGFkZGluZywgXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArICh0aGlzLnBhZGRpbmcqMiksIFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICsgKHRoaXMucGFkZGluZyoyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcblxuICAgICAgICAvLyBFbmQgUG9pbnRcbiAgICAgICAgY29uc3QgaW1hZ2VFbmRQb3NYID0gIHRoaXMuc3RhcnRYICsgdGhpcy50YXJnZXRJbWFnZS90aGlzLnRvdGFsVGFyZ2V0ICogdGhpcy53aWR0aFxuICAgICAgICBjb25zdCB0ZXh0RW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArICh0aGlzLnRhcmdldEltYWdlK3RoaXMudGFyZ2V0VGV4dCkvdGhpcy50b3RhbFRhcmdldCAqIHRoaXMud2lkdGhcbiAgICAgICAgY29uc3QgYXVkaW9FbmRQb3NYID0gdGhpcy5zdGFydFggKyAodGhpcy50YXJnZXRJbWFnZSt0aGlzLnRhcmdldFRleHQrdGhpcy50YXJnZXRBdWRpbykvdGhpcy50b3RhbFRhcmdldCAqIHRoaXMud2lkdGhcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW1hZ2VFbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0Jhcigpe1xuICAgICAgICBsZXQgd2lkdGggPSAoIHRoaXMud2lkdGggLSAoMip0aGlzLnBhZGRpbmcpICkgKiAoIHRoaXMuY3VycmVudCAvIHRoaXMudG90YWxUYXJnZXQpXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodCAtICgyKnRoaXMucGFkZGluZylcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsU3R5bGUoMHgwMGZmMDAsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxSZWN0KHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2xlYXIoKVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKClcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJGb3JnZUJhciIsInByZWxvYWQiLCJzY2VuZSIsInVwZGF0ZVByb2dyZXNzQmFyIiwid2lkdGgiLCJwYWRkaW5nIiwiY3VycmVudCIsInRvdGFsVGFyZ2V0IiwiaGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0WCIsInN0YXJ0WSIsInJlc2V0IiwiY2xlYXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwibWF4RmFpbENoYW5jZSIsImN1cnJlbnRGYWlsQ2hhbmNlIiwidGFyZ2V0SW1hZ2UiLCJ0YXJnZXRUZXh0IiwidGFyZ2V0QXVkaW8iLCJjb250YWluZXIiLCJhZGQiLCJwcm9ncmVzc0JhckJhc2UiLCJncmFwaGljcyIsImNvbG9yUGFuZWxCZ0RhcmsiLCJpbWFnZUVuZFBvc1giLCJ0ZXh0RW5kUG9zWCIsImF1ZGlvRW5kUG9zWCIsImltYWdlRW5kUG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/ForgeBar.ts\n"));

/***/ })

});