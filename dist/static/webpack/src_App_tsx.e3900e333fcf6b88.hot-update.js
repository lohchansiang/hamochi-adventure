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

/***/ "./src/game/components/CardMaker/ForgeBar.ts":
/*!***************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeBar.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = this.manager.current / this.manager.getTotalTarget() * this.width;\n        this.progressBar.fillRect(this.startX, this.startY - this.height / 2, width, this.height);\n    }\n    reset() {\n        this.progressBar.clear();\n        this.updateProgressBar();\n    }\n    enter() {\n        let withAnimation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        let withAnimation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY - 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    //\n    constructor(scene, x, y){\n        //\n        this.width = 900;\n        this.height = 60;\n        this.padding = 15;\n        this.scene = scene;\n        this.manager = scene.cardMakerManager;\n        this.oriX = x;\n        this.oriY = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.container = scene.add.container(x, y);\n        this.container.y -= 1000;\n        // Progress Bar Container\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg, 1);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding - this.height / 2, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        // Progress Bar Inner\n        this.progressBarInner = this.scene.add.graphics();\n        this.progressBarInner.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 1);\n        this.progressBarInner.fillRect(this.startX, this.startY - this.height / 2, this.width, this.height);\n        this.container.add(this.progressBarInner);\n        // Main Progress Bar\n        this.progressBar = this.scene.add.graphics();\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.container.add(this.progressBar);\n        // End Point Calculation\n        const totalTarget = this.manager.getTotalTarget();\n        const imageEndPosX = this.startX + this.manager.targetImage / totalTarget * this.width;\n        const textEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText) / totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText + this.manager.targetAudio) / totalTarget * this.width;\n        // Image End Point\n        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY);\n        let imageLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.imageEndPoint.add(imageLine);\n        // Text End Point\n        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY);\n        let textLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.textEndPoint.add(textLine);\n        // Audio End Point\n        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY);\n        let audioLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.audioEndPoint.add(audioLine);\n        this.container.add(this.imageEndPoint);\n        this.container.add(this.textEndPoint);\n        this.container.add(this.audioEndPoint);\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUlwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUF5RkFDLG9CQUFtQjtRQUNmLElBQUlDLFFBQVEsSUFBTSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsY0FBYyxLQUFRLElBQUksQ0FBQ0gsS0FBSztRQUNsRixJQUFJLENBQUNJLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsTUFBTSxHQUFDLEdBQUdSLE9BQU8sSUFBSSxDQUFDUSxNQUFNO0lBQzFGO0lBRUFDLFFBQU87UUFDSCxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sS0FBSztRQUN0QixJQUFJLENBQUNYLGlCQUFpQjtJQUMxQjtJQUVBWSxRQUFxQztZQUE5QkMsZ0JBQUFBLGlFQUF3QjtRQUMzQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUk7WUFDWkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBQyxPQUFvQztZQUE5QlQsZ0JBQUFBLGlFQUF3QjtRQUMxQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUksR0FBQztZQUNiQyxNQUFNO1lBQ05DLFVBQVU7UUFDZDtJQUNKO0lBaEdBLEVBQUU7SUFFRkUsWUFBYXhCLEtBQWUsRUFBRXlCLENBQVMsRUFBRU4sQ0FBUyxDQUFFO1FBbkJwRCxFQUFFO2FBQ0ZqQixR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YUFBYTtRQUN0QyxJQUFJLENBQUN4QixTQUFTLENBQUNGLEdBQUcsQ0FBRSxJQUFJLENBQUM2QixZQUFZO1FBQ3JDLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ0YsR0FBRyxDQUFFLElBQUksQ0FBQytCLGFBQWE7UUFFdEMsSUFBSSxDQUFDOUMsaUJBQWlCO0lBQzFCO0FBK0JKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXIudHM/YmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gXCIuL0NhcmRNYWtlck1hbmFnZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJhcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgLy9cbiAgICB3aWR0aDogbnVtYmVyID0gOTAwXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA2MFxuICAgIHBhZGRpbmc6IG51bWJlciA9IDE1XG4gICAgb3JpWDpudW1iZXJcbiAgICBvcmlZOm51bWJlclxuICAgIHN0YXJ0WDogbnVtYmVyXG4gICAgc3RhcnRZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcHJvZ3Jlc3NCYXI6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgcHJvZ3Jlc3NCYXJJbm5lcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JhckJhc2U6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgLy9cbiAgICBpbWFnZUVuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICB0ZXh0RW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGF1ZGlvRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMubWFuYWdlciA9IHNjZW5lLmNhcmRNYWtlck1hbmFnZXJcbiAgICAgICAgdGhpcy5vcmlYID0geFxuICAgICAgICB0aGlzLm9yaVkgPSB5XG4gICAgICAgIHRoaXMuc3RhcnRYID0gLSAodGhpcy53aWR0aC8yKVxuICAgICAgICB0aGlzLnN0YXJ0WSA9IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnkgLT0gMTAwMDtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgQ29udGFpbmVyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFN0eWxlKEdhbWVMaWIuY29sb3JQYW5lbEJnLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggLSB0aGlzLnBhZGRpbmcsIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRZIC0gdGhpcy5wYWRkaW5nIC0gdGhpcy5oZWlnaHQvMiwgXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArICh0aGlzLnBhZGRpbmcqMiksIFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICsgKHRoaXMucGFkZGluZyoyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXJCYXNlKTtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgSW5uZXJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmssIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFySW5uZXIuZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCwgXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMuaGVpZ2h0LzIsIFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0JhcklubmVyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1haW4gUHJvZ3Jlc3MgQmFyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxTdHlsZSgweDAwZmYwMCwgMSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnByb2dyZXNzQmFyKTtcblxuICAgICAgICAvLyBFbmQgUG9pbnQgQ2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgdG90YWxUYXJnZXQ6bnVtYmVyID0gdGhpcy5tYW5hZ2VyLmdldFRvdGFsVGFyZ2V0KCk7XG4gICAgICAgIGNvbnN0IGltYWdlRW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArIHRoaXMubWFuYWdlci50YXJnZXRJbWFnZS90b3RhbFRhcmdldCAqIHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IHRleHRFbmRQb3NYID0gIHRoaXMuc3RhcnRYICsgKHRoaXMubWFuYWdlci50YXJnZXRJbWFnZSt0aGlzLm1hbmFnZXIudGFyZ2V0VGV4dCkvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBhdWRpb0VuZFBvc1ggPSB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQrdGhpcy5tYW5hZ2VyLnRhcmdldEF1ZGlvKS90b3RhbFRhcmdldCAqIHRoaXMud2lkdGg7XG4gICAgICAgIFxuICAgICAgICAvLyBJbWFnZSBFbmQgUG9pbnRcbiAgICAgICAgdGhpcy5pbWFnZUVuZFBvaW50ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKGltYWdlRW5kUG9zWCwgdGhpcy5zdGFydFkgKTtcbiAgICAgICAgbGV0IGltYWdlTGluZTpHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwLCh0aGlzLmhlaWdodCt0aGlzLnBhZGRpbmcqMiksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLmltYWdlRW5kUG9pbnQuYWRkKGltYWdlTGluZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBUZXh0IEVuZCBQb2ludFxuICAgICAgICB0aGlzLnRleHRFbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih0ZXh0RW5kUG9zWCwgdGhpcy5zdGFydFkgKTtcbiAgICAgICAgbGV0IHRleHRMaW5lOkdhbWVPYmplY3RzLlJlY3RhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMTAsKHRoaXMuaGVpZ2h0K3RoaXMucGFkZGluZyoyKSxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMudGV4dEVuZFBvaW50LmFkZCh0ZXh0TGluZSk7XG5cbiAgICAgICAgLy8gQXVkaW8gRW5kIFBvaW50XG4gICAgICAgIHRoaXMuYXVkaW9FbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcihhdWRpb0VuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCBhdWRpb0xpbmU6R2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwxMCwodGhpcy5oZWlnaHQrdGhpcy5wYWRkaW5nKjIpLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy5hdWRpb0VuZFBvaW50LmFkZChhdWRpb0xpbmUpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy5pbWFnZUVuZFBvaW50ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy50ZXh0RW5kUG9pbnQgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKCB0aGlzLmF1ZGlvRW5kUG9pbnQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKXtcbiAgICAgICAgbGV0IHdpZHRoID0gKCB0aGlzLm1hbmFnZXIuY3VycmVudCAvIHRoaXMubWFuYWdlci5nZXRUb3RhbFRhcmdldCgpKSAqICggdGhpcy53aWR0aCApXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZmlsbFJlY3QodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZIC0gdGhpcy5oZWlnaHQvMiwgd2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNsZWFyKClcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpXG4gICAgfVxuXG4gICAgZW50ZXIoIHdpdGhBbmltYXRpb246Ym9vbGVhbiA9IHRydWUgKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVksXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpdCggd2l0aEFuaW1hdGlvbjpib29sZWFuID0gdHJ1ZSApe1xuICAgICAgICAvLyBQcmVwYXJlIFR3ZWVuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHk6IHRoaXMub3JpWS0xMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkZvcmdlQmFyIiwicHJlbG9hZCIsInNjZW5lIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsIm1hbmFnZXIiLCJjdXJyZW50IiwiZ2V0VG90YWxUYXJnZXQiLCJwcm9ncmVzc0JhciIsImZpbGxSZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwiaGVpZ2h0IiwicmVzZXQiLCJjbGVhciIsImVudGVyIiwid2l0aEFuaW1hdGlvbiIsInR3ZWVucyIsImFkZCIsInRhcmdldHMiLCJjb250YWluZXIiLCJ5Iiwib3JpWSIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXQiLCJjb25zdHJ1Y3RvciIsIngiLCJwYWRkaW5nIiwiY2FyZE1ha2VyTWFuYWdlciIsIm9yaVgiLCJwcm9ncmVzc0JhckJhc2UiLCJncmFwaGljcyIsImZpbGxTdHlsZSIsImNvbG9yUGFuZWxCZyIsInByb2dyZXNzQmFySW5uZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwidG90YWxUYXJnZXQiLCJpbWFnZUVuZFBvc1giLCJ0YXJnZXRJbWFnZSIsInRleHRFbmRQb3NYIiwidGFyZ2V0VGV4dCIsImF1ZGlvRW5kUG9zWCIsInRhcmdldEF1ZGlvIiwiaW1hZ2VFbmRQb2ludCIsImltYWdlTGluZSIsInJlY3RhbmdsZSIsInRleHRFbmRQb2ludCIsInRleHRMaW5lIiwiYXVkaW9FbmRQb2ludCIsImF1ZGlvTGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBar.ts\n"));

/***/ })

});