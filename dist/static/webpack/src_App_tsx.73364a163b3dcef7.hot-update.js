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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = this.current / this.totalTarget * this.width;\n        this.progressBar.fillRect(this.startX, this.startY - this.height / 2, width, this.height);\n    }\n    reset() {\n        this.current = 0;\n        this.progressBar.clear();\n        this.updateProgressBar();\n    }\n    enter() {\n        let withAnimation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        let withAnimation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY - 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    //\n    constructor(scene, x, y){\n        //\n        // totalTarget: number\n        // current: number\n        //\n        this.width = 900;\n        this.height = 60;\n        this.padding = 15;\n        this.scene = scene;\n        this.manager = scene.cardMakerManager;\n        this.oriX = x;\n        this.oriY = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.container = scene.add.container(x, y);\n        this.container.y -= 1000;\n        // Progress Bar Container\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg, 1);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding - this.height / 2, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        // Progress Bar Inner\n        this.progressBarInner = this.scene.add.graphics();\n        this.progressBarInner.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 1);\n        this.progressBarInner.fillRect(this.startX, this.startY - this.height / 2, this.width, this.height);\n        this.container.add(this.progressBarInner);\n        // Main Progress Bar\n        this.progressBar = this.scene.add.graphics();\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.container.add(this.progressBar);\n        // End Point Calculation\n        const imageEndPosX = this.startX + this.manager.targetImage / this.totalTarget * this.width;\n        const textEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText) / this.totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText + this.manager.targetAudio) / this.totalTarget * this.width;\n        // Image End Point\n        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY);\n        let imageLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.imageEndPoint.add(imageLine);\n        // Text End Point\n        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY);\n        let textLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.textEndPoint.add(textLine);\n        // Audio End Point\n        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY);\n        let audioLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.audioEndPoint.add(audioLine);\n        this.container.add(this.imageEndPoint);\n        this.container.add(this.textEndPoint);\n        this.container.add(this.audioEndPoint);\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUlwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUEyRkFDLG9CQUFtQjtRQUNmLElBQUlDLFFBQVEsSUFBTSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEdBQU0sSUFBSSxDQUFDRixLQUFLO1FBQzdELElBQUksQ0FBQ0csV0FBVyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEdBQUMsR0FBR1AsT0FBTyxJQUFJLENBQUNPLE1BQU07SUFDMUY7SUFFQUMsUUFBTztRQUNILElBQUksQ0FBQ1AsT0FBTyxHQUFHO1FBRWYsSUFBSSxDQUFDRSxXQUFXLENBQUNNLEtBQUs7UUFDdEIsSUFBSSxDQUFDVixpQkFBaUI7SUFDMUI7SUFFQVcsUUFBcUM7WUFBOUJDLGdCQUFBQSxpRUFBd0I7UUFDM0IsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtRQUNkO0lBQ0o7SUFFQUMsT0FBb0M7WUFBOUJULGdCQUFBQSxpRUFBd0I7UUFDMUIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJLEdBQUM7WUFDYkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQWpHQSxFQUFFO0lBRUZFLFlBQWF2QixLQUFlLEVBQUV3QixDQUFTLEVBQUVOLENBQVMsQ0FBRTtRQXRCcEQsRUFBRTtRQUNG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RixHQUFHLENBQUUsSUFBSSxDQUFDMEIsYUFBYTtRQUN0QyxJQUFJLENBQUN4QixTQUFTLENBQUNGLEdBQUcsQ0FBRSxJQUFJLENBQUM2QixZQUFZO1FBQ3JDLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ0YsR0FBRyxDQUFFLElBQUksQ0FBQytCLGFBQWE7UUFFdEMsSUFBSSxDQUFDN0MsaUJBQWlCO0lBQzFCO0FBaUNKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXIudHM/YmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gXCIuL0NhcmRNYWtlck1hbmFnZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJhcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgLy9cbiAgICAvLyB0b3RhbFRhcmdldDogbnVtYmVyXG4gICAgLy8gY3VycmVudDogbnVtYmVyXG4gICAgLy9cbiAgICB3aWR0aDogbnVtYmVyID0gOTAwXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA2MFxuICAgIHBhZGRpbmc6IG51bWJlciA9IDE1XG4gICAgb3JpWDpudW1iZXJcbiAgICBvcmlZOm51bWJlclxuICAgIHN0YXJ0WDogbnVtYmVyXG4gICAgc3RhcnRZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcHJvZ3Jlc3NCYXI6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgcHJvZ3Jlc3NCYXJJbm5lcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JhckJhc2U6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgLy9cbiAgICBpbWFnZUVuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICB0ZXh0RW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGF1ZGlvRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMubWFuYWdlciA9IHNjZW5lLmNhcmRNYWtlck1hbmFnZXJcbiAgICAgICAgdGhpcy5vcmlYID0geFxuICAgICAgICB0aGlzLm9yaVkgPSB5XG4gICAgICAgIHRoaXMuc3RhcnRYID0gLSAodGhpcy53aWR0aC8yKVxuICAgICAgICB0aGlzLnN0YXJ0WSA9IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnkgLT0gMTAwMDtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgQ29udGFpbmVyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFN0eWxlKEdhbWVMaWIuY29sb3JQYW5lbEJnLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggLSB0aGlzLnBhZGRpbmcsIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRZIC0gdGhpcy5wYWRkaW5nIC0gdGhpcy5oZWlnaHQvMiwgXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArICh0aGlzLnBhZGRpbmcqMiksIFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICsgKHRoaXMucGFkZGluZyoyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXJCYXNlKTtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgSW5uZXJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmssIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFySW5uZXIuZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCwgXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMuaGVpZ2h0LzIsIFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0JhcklubmVyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1haW4gUHJvZ3Jlc3MgQmFyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxTdHlsZSgweDAwZmYwMCwgMSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnByb2dyZXNzQmFyKTtcblxuICAgICAgICAvLyBFbmQgUG9pbnQgQ2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgaW1hZ2VFbmRQb3NYID0gIHRoaXMuc3RhcnRYICsgdGhpcy5tYW5hZ2VyLnRhcmdldEltYWdlL3RoaXMudG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCB0ZXh0RW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQpL3RoaXMudG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBhdWRpb0VuZFBvc1ggPSB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQrdGhpcy5tYW5hZ2VyLnRhcmdldEF1ZGlvKS90aGlzLnRvdGFsVGFyZ2V0ICogdGhpcy53aWR0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIEltYWdlIEVuZCBQb2ludFxuICAgICAgICB0aGlzLmltYWdlRW5kUG9pbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoaW1hZ2VFbmRQb3NYLCB0aGlzLnN0YXJ0WSApO1xuICAgICAgICBsZXQgaW1hZ2VMaW5lOkdhbWVPYmplY3RzLlJlY3RhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMTAsKHRoaXMuaGVpZ2h0K3RoaXMucGFkZGluZyoyKSxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMuaW1hZ2VFbmRQb2ludC5hZGQoaW1hZ2VMaW5lKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRleHQgRW5kIFBvaW50XG4gICAgICAgIHRoaXMudGV4dEVuZFBvaW50ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKHRleHRFbmRQb3NYLCB0aGlzLnN0YXJ0WSApO1xuICAgICAgICBsZXQgdGV4dExpbmU6R2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwxMCwodGhpcy5oZWlnaHQrdGhpcy5wYWRkaW5nKjIpLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy50ZXh0RW5kUG9pbnQuYWRkKHRleHRMaW5lKTtcblxuICAgICAgICAvLyBBdWRpbyBFbmQgUG9pbnRcbiAgICAgICAgdGhpcy5hdWRpb0VuZFBvaW50ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKGF1ZGlvRW5kUG9zWCwgdGhpcy5zdGFydFkgKTtcbiAgICAgICAgbGV0IGF1ZGlvTGluZTpHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwLCh0aGlzLmhlaWdodCt0aGlzLnBhZGRpbmcqMiksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLmF1ZGlvRW5kUG9pbnQuYWRkKGF1ZGlvTGluZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKCB0aGlzLmltYWdlRW5kUG9pbnQgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKCB0aGlzLnRleHRFbmRQb2ludCApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMuYXVkaW9FbmRQb2ludCApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0Jhcigpe1xuICAgICAgICBsZXQgd2lkdGggPSAoIHRoaXMuY3VycmVudCAvIHRoaXMudG90YWxUYXJnZXQpICogKCB0aGlzLndpZHRoIClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsUmVjdCh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkgLSB0aGlzLmhlaWdodC8yLCB3aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmNsZWFyKClcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpXG4gICAgfVxuXG4gICAgZW50ZXIoIHdpdGhBbmltYXRpb246Ym9vbGVhbiA9IHRydWUgKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVksXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpdCggd2l0aEFuaW1hdGlvbjpib29sZWFuID0gdHJ1ZSApe1xuICAgICAgICAvLyBQcmVwYXJlIFR3ZWVuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHk6IHRoaXMub3JpWS0xMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkZvcmdlQmFyIiwicHJlbG9hZCIsInNjZW5lIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsImN1cnJlbnQiLCJ0b3RhbFRhcmdldCIsInByb2dyZXNzQmFyIiwiZmlsbFJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJoZWlnaHQiLCJyZXNldCIsImNsZWFyIiwiZW50ZXIiLCJ3aXRoQW5pbWF0aW9uIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsInkiLCJvcmlZIiwiZWFzZSIsImR1cmF0aW9uIiwiZXhpdCIsImNvbnN0cnVjdG9yIiwieCIsInBhZGRpbmciLCJtYW5hZ2VyIiwiY2FyZE1ha2VyTWFuYWdlciIsIm9yaVgiLCJwcm9ncmVzc0JhckJhc2UiLCJncmFwaGljcyIsImZpbGxTdHlsZSIsImNvbG9yUGFuZWxCZyIsInByb2dyZXNzQmFySW5uZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwiaW1hZ2VFbmRQb3NYIiwidGFyZ2V0SW1hZ2UiLCJ0ZXh0RW5kUG9zWCIsInRhcmdldFRleHQiLCJhdWRpb0VuZFBvc1giLCJ0YXJnZXRBdWRpbyIsImltYWdlRW5kUG9pbnQiLCJpbWFnZUxpbmUiLCJyZWN0YW5nbGUiLCJ0ZXh0RW5kUG9pbnQiLCJ0ZXh0TGluZSIsImF1ZGlvRW5kUG9pbnQiLCJhdWRpb0xpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBar.ts\n"));

/***/ })

});