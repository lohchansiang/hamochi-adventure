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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = this.manager.getTotalCurrent() / this.manager.getTotalTarget() * this.width;\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.progressBar.fillRect(this.startX, this.startY - this.height / 2, width, this.height);\n    }\n    enter() {\n        this.progressBar.clear();\n        this.updateProgressBar();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY - 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    getTargetX() {\n        return this.oriX + this.startX + 50;\n    }\n    getTargetY() {\n        return this.oriY + this.startY;\n    }\n    //\n    constructor(scene, x, y){\n        //\n        this.width = 900;\n        this.height = 60;\n        this.padding = 15;\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.container = scene.add.container(x, y);\n        this.container.y -= 1000;\n        // Progress Bar Container\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg, 1);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding - this.height / 2, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        // Progress Bar Inner\n        this.progressBarInner = this.scene.add.graphics();\n        this.progressBarInner.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 1);\n        this.progressBarInner.fillRect(this.startX, this.startY - this.height / 2, this.width, this.height);\n        this.container.add(this.progressBarInner);\n        // Main Progress Bar\n        this.progressBar = this.scene.add.graphics();\n        this.container.add(this.progressBar);\n        // End Point Calculation\n        const totalTarget = this.manager.getTotalTarget();\n        const imageEndPosX = this.startX + this.manager.targetImage / totalTarget * this.width;\n        const textEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText) / totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText + this.manager.targetAudio) / totalTarget * this.width;\n        // Image End Point\n        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY);\n        let imageLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.imageEndPoint.add(imageLine);\n        // Text End Point\n        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY);\n        let textLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.textEndPoint.add(textLine);\n        // Audio End Point\n        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY);\n        let audioLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.audioEndPoint.add(audioLine);\n        this.container.add(this.imageEndPoint);\n        this.container.add(this.textEndPoint);\n        this.container.add(this.audioEndPoint);\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUlwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUF3RkFDLG9CQUFtQjtRQUNmLElBQUlDLFFBQVEsSUFBTSxDQUFDQyxPQUFPLENBQUNDLGVBQWUsS0FBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsY0FBYyxLQUFRLElBQUksQ0FBQ0gsS0FBSztRQUM1RixJQUFJLENBQUNJLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLFVBQVU7UUFDckMsSUFBSSxDQUFDRCxXQUFXLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLE1BQU0sR0FBQyxHQUFHVCxPQUFPLElBQUksQ0FBQ1MsTUFBTTtJQUMxRjtJQUVBQyxRQUFPO1FBQ0gsSUFBSSxDQUFDTixXQUFXLENBQUNPLEtBQUs7UUFDdEIsSUFBSSxDQUFDWixpQkFBaUI7UUFFdEIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtRQUNkO0lBQ0o7SUFFQUMsT0FBTTtRQUNGLGdCQUFnQjtRQUNoQixJQUFJLENBQUN0QixLQUFLLENBQUNjLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUksR0FBQztZQUNiQyxNQUFNO1lBQ05DLFVBQVU7UUFDZDtJQUNKO0lBRUFFLGFBQVk7UUFDUixPQUFPLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ2YsTUFBTSxHQUFHO0lBQ3JDO0lBRUFnQixhQUFZO1FBQ1IsT0FBTyxJQUFJ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RyxDQUFDZ0M7UUFFdkIsSUFBSSxDQUFDOUIsU0FBUyxDQUFDRixHQUFHLENBQUUsSUFBSSxDQUFDMEIsYUFBYTtRQUN0QyxJQUFJLENBQUN4QixTQUFTLENBQUNGLEdBQUcsQ0FBRSxJQUFJLENBQUM2QixZQUFZO1FBQ3JDLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ0YsR0FBRyxDQUFFLElBQUksQ0FBQytCLGFBQWE7UUFFdEMsSUFBSSxDQUFDN0MsaUJBQWlCO0lBQzFCO0FBc0NKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXIudHM/YmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gXCIuL0NhcmRNYWtlck1hbmFnZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJhcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgLy9cbiAgICB3aWR0aDogbnVtYmVyID0gOTAwXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA2MFxuICAgIHBhZGRpbmc6IG51bWJlciA9IDE1XG4gICAgb3JpWDpudW1iZXJcbiAgICBvcmlZOm51bWJlclxuICAgIHN0YXJ0WDogbnVtYmVyXG4gICAgc3RhcnRZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcHJvZ3Jlc3NCYXI6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgcHJvZ3Jlc3NCYXJJbm5lcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JhckJhc2U6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgLy9cbiAgICBpbWFnZUVuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICB0ZXh0RW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGF1ZGlvRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMubWFuYWdlciA9IHNjZW5lLm1hbmFnZXJcbiAgICAgICAgdGhpcy5vcmlYID0geFxuICAgICAgICB0aGlzLm9yaVkgPSB5XG4gICAgICAgIHRoaXMuc3RhcnRYID0gLSAodGhpcy53aWR0aC8yKVxuICAgICAgICB0aGlzLnN0YXJ0WSA9IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnkgLT0gMTAwMDtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgQ29udGFpbmVyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFN0eWxlKEdhbWVMaWIuY29sb3JQYW5lbEJnLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UuZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggLSB0aGlzLnBhZGRpbmcsIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRZIC0gdGhpcy5wYWRkaW5nIC0gdGhpcy5oZWlnaHQvMiwgXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArICh0aGlzLnBhZGRpbmcqMiksIFxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICsgKHRoaXMucGFkZGluZyoyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXJCYXNlKTtcblxuICAgICAgICAvLyBQcm9ncmVzcyBCYXIgSW5uZXJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmssIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFySW5uZXIuZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCwgXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMuaGVpZ2h0LzIsIFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0JhcklubmVyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1haW4gUHJvZ3Jlc3MgQmFyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0Jhcik7XG5cbiAgICAgICAgLy8gRW5kIFBvaW50IENhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IHRvdGFsVGFyZ2V0Om51bWJlciA9IHRoaXMubWFuYWdlci5nZXRUb3RhbFRhcmdldCgpO1xuICAgICAgICBjb25zdCBpbWFnZUVuZFBvc1ggPSAgdGhpcy5zdGFydFggKyB0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCB0ZXh0RW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQpL3RvdGFsVGFyZ2V0ICogdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3QgYXVkaW9FbmRQb3NYID0gdGhpcy5zdGFydFggKyAodGhpcy5tYW5hZ2VyLnRhcmdldEltYWdlK3RoaXMubWFuYWdlci50YXJnZXRUZXh0K3RoaXMubWFuYWdlci50YXJnZXRBdWRpbykvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBcbiAgICAgICAgLy8gSW1hZ2UgRW5kIFBvaW50XG4gICAgICAgIHRoaXMuaW1hZ2VFbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcihpbWFnZUVuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCBpbWFnZUxpbmU6R2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwxMCwodGhpcy5oZWlnaHQrdGhpcy5wYWRkaW5nKjIpLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy5pbWFnZUVuZFBvaW50LmFkZChpbWFnZUxpbmUpO1xuICAgICAgICBcbiAgICAgICAgLy8gVGV4dCBFbmQgUG9pbnRcbiAgICAgICAgdGhpcy50ZXh0RW5kUG9pbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIodGV4dEVuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCB0ZXh0TGluZTpHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwLCh0aGlzLmhlaWdodCt0aGlzLnBhZGRpbmcqMiksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLnRleHRFbmRQb2ludC5hZGQodGV4dExpbmUpO1xuXG4gICAgICAgIC8vIEF1ZGlvIEVuZCBQb2ludFxuICAgICAgICB0aGlzLmF1ZGlvRW5kUG9pbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoYXVkaW9FbmRQb3NYLCB0aGlzLnN0YXJ0WSApO1xuICAgICAgICBsZXQgYXVkaW9MaW5lOkdhbWVPYmplY3RzLlJlY3RhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMTAsKHRoaXMuaGVpZ2h0K3RoaXMucGFkZGluZyoyKSxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMuYXVkaW9FbmRQb2ludC5hZGQoYXVkaW9MaW5lKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMuaW1hZ2VFbmRQb2ludCApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMudGV4dEVuZFBvaW50ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy5hdWRpb0VuZFBvaW50ICk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKCl7XG4gICAgICAgIGxldCB3aWR0aCA9ICggdGhpcy5tYW5hZ2VyLmdldFRvdGFsQ3VycmVudCgpIC8gdGhpcy5tYW5hZ2VyLmdldFRvdGFsVGFyZ2V0KCkpICogKCB0aGlzLndpZHRoICk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZmlsbFN0eWxlKDB4MDBmZjAwLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsUmVjdCh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkgLSB0aGlzLmhlaWdodC8yLCB3aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGVudGVyKCl7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgVHdlZW5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgeTogdGhpcy5vcmlZLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXQoKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVktMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUYXJnZXRYKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaVggKyB0aGlzLnN0YXJ0WCArIDUwO1xuICAgIH1cblxuICAgIGdldFRhcmdldFkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpWSArIHRoaXMuc3RhcnRZO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkZvcmdlQmFyIiwicHJlbG9hZCIsInNjZW5lIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsIm1hbmFnZXIiLCJnZXRUb3RhbEN1cnJlbnQiLCJnZXRUb3RhbFRhcmdldCIsInByb2dyZXNzQmFyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJoZWlnaHQiLCJlbnRlciIsImNsZWFyIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsInkiLCJvcmlZIiwiZWFzZSIsImR1cmF0aW9uIiwiZXhpdCIsImdldFRhcmdldFgiLCJvcmlYIiwiZ2V0VGFyZ2V0WSIsImNvbnN0cnVjdG9yIiwieCIsInBhZGRpbmciLCJwcm9ncmVzc0JhckJhc2UiLCJncmFwaGljcyIsImNvbG9yUGFuZWxCZyIsInByb2dyZXNzQmFySW5uZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwidG90YWxUYXJnZXQiLCJpbWFnZUVuZFBvc1giLCJ0YXJnZXRJbWFnZSIsInRleHRFbmRQb3NYIiwidGFyZ2V0VGV4dCIsImF1ZGlvRW5kUG9zWCIsInRhcmdldEF1ZGlvIiwiaW1hZ2VFbmRQb2ludCIsImltYWdlTGluZSIsInJlY3RhbmdsZSIsInRleHRFbmRQb2ludCIsInRleHRMaW5lIiwiYXVkaW9FbmRQb2ludCIsImF1ZGlvTGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBar.ts\n"));

/***/ })

});