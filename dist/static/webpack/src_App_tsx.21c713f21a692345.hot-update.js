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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = this.manager.getTotalCurrent() / this.manager.getTotalTarget() * this.width;\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.progressBar.fillRect(this.startX, this.startY - this.height / 2, width, this.height);\n    }\n    enter() {\n        this.progressBar.clear();\n        this.updateProgressBar();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY - 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    getTargetX() {}\n    getTargetY() {}\n    //\n    constructor(scene, x, y){\n        //\n        this.width = 900;\n        this.height = 60;\n        this.padding = 15;\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.container = scene.add.container(x, y);\n        this.container.y -= 1000;\n        // Progress Bar Container\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg, 1);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding - this.height / 2, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        // Progress Bar Inner\n        this.progressBarInner = this.scene.add.graphics();\n        this.progressBarInner.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 1);\n        this.progressBarInner.fillRect(this.startX, this.startY - this.height / 2, this.width, this.height);\n        this.container.add(this.progressBarInner);\n        // Main Progress Bar\n        this.progressBar = this.scene.add.graphics();\n        this.container.add(this.progressBar);\n        // End Point Calculation\n        const totalTarget = this.manager.getTotalTarget();\n        const imageEndPosX = this.startX + this.manager.targetImage / totalTarget * this.width;\n        const textEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText) / totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText + this.manager.targetAudio) / totalTarget * this.width;\n        // Image End Point\n        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY);\n        let imageLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.imageEndPoint.add(imageLine);\n        // Text End Point\n        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY);\n        let textLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.textEndPoint.add(textLine);\n        // Audio End Point\n        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY);\n        let audioLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.audioEndPoint.add(audioLine);\n        this.container.add(this.imageEndPoint);\n        this.container.add(this.textEndPoint);\n        this.container.add(this.audioEndPoint);\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUlwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUF3RkFDLG9CQUFtQjtRQUNmLElBQUlDLFFBQVEsSUFBTSxDQUFDQyxPQUFPLENBQUNDLGVBQWUsS0FBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsY0FBYyxLQUFRLElBQUksQ0FBQ0gsS0FBSztRQUM1RixJQUFJLENBQUNJLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLFVBQVU7UUFDckMsSUFBSSxDQUFDRCxXQUFXLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLE1BQU0sR0FBQyxHQUFHVCxPQUFPLElBQUksQ0FBQ1MsTUFBTTtJQUMxRjtJQUVBQyxRQUFPO1FBQ0gsSUFBSSxDQUFDTixXQUFXLENBQUNPLEtBQUs7UUFDdEIsSUFBSSxDQUFDWixpQkFBaUI7UUFFdEIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtRQUNkO0lBQ0o7SUFFQUMsT0FBTTtRQUNGLGdCQUFnQjtRQUNoQixJQUFJLENBQUN0QixLQUFLLENBQUNjLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUksR0FBQztZQUNiQyxNQUFNO1lBQ05DLFVBQVU7UUFDZDtJQUNKO0lBRUFFLGFBQVksQ0FFWjtJQUVBQyxhQUFZLENBRVo7SUF0R0EsRUFBRTtJQUVGQyxZQUFhekIsS0FBZSxFQUFFMEIsQ0FBUyxFQUFFUixDQUFTLENBQUU7UUFuQnBE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LElBQUksQ0FBQzZCLFlBQVk7UUFDckMsSUFBSSxDQUFDM0IsU0FBUyxDQUFDRixHQUFHLENBQUUsSUFBSSxDQUFDK0IsYUFBYTtRQUV0QyxJQUFJLENBQUM3QyxpQkFBaUI7SUFDMUI7QUFzQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cz9iYzhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSBcIi4vQ2FyZE1ha2VyTWFuYWdlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlQmFye1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IENhcmRNYWtlclxuICAgIG1hbmFnZXI6IENhcmRNYWtlck1hbmFnZXJcbiAgICAvL1xuICAgIHdpZHRoOiBudW1iZXIgPSA5MDBcbiAgICBoZWlnaHQ6IG51bWJlciA9IDYwXG4gICAgcGFkZGluZzogbnVtYmVyID0gMTVcbiAgICBvcmlYOm51bWJlclxuICAgIG9yaVk6bnVtYmVyXG4gICAgc3RhcnRYOiBudW1iZXJcbiAgICBzdGFydFk6IG51bWJlclxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBwcm9ncmVzc0JhcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JhcklubmVyOiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIHByb2dyZXNzQmFyQmFzZTogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICAvL1xuICAgIGltYWdlRW5kUG9pbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHRleHRFbmRQb2ludDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgYXVkaW9FbmRQb2ludDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICBcbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6Q2FyZE1ha2VyLCB4OiBudW1iZXIsIHk6IG51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gc2NlbmUubWFuYWdlclxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcbiAgICAgICAgdGhpcy5zdGFydFggPSAtICh0aGlzLndpZHRoLzIpXG4gICAgICAgIHRoaXMuc3RhcnRZID0gLSAodGhpcy5oZWlnaHQvMilcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIueSAtPSAxMDAwO1xuXG4gICAgICAgIC8vIFByb2dyZXNzIEJhciBDb250YWluZXJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckJhc2UgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyQmFzZS5maWxsU3R5bGUoR2FtZUxpYi5jb2xvclBhbmVsQmcsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyQmFzZS5maWxsUmVjdChcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WCAtIHRoaXMucGFkZGluZywgXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFkgLSB0aGlzLnBhZGRpbmcgLSB0aGlzLmhlaWdodC8yLCBcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoICsgKHRoaXMucGFkZGluZyoyKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgKyAodGhpcy5wYWRkaW5nKjIpXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0JhckJhc2UpO1xuXG4gICAgICAgIC8vIFByb2dyZXNzIEJhciBJbm5lclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFySW5uZXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFySW5uZXIuZmlsbFN0eWxlKEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyaywgMSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJJbm5lci5maWxsUmVjdChcbiAgICAgICAgICAgIHRoaXMuc3RhcnRYLCBcbiAgICAgICAgICAgIHRoaXMuc3RhcnRZIC0gdGhpcy5oZWlnaHQvMiwgXG4gICAgICAgICAgICB0aGlzLndpZHRoLCBcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnByb2dyZXNzQmFySW5uZXIpO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFpbiBQcm9ncmVzcyBCYXJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnByb2dyZXNzQmFyKTtcblxuICAgICAgICAvLyBFbmQgUG9pbnQgQ2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgdG90YWxUYXJnZXQ6bnVtYmVyID0gdGhpcy5tYW5hZ2VyLmdldFRvdGFsVGFyZ2V0KCk7XG4gICAgICAgIGNvbnN0IGltYWdlRW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArIHRoaXMubWFuYWdlci50YXJnZXRJbWFnZS90b3RhbFRhcmdldCAqIHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IHRleHRFbmRQb3NYID0gIHRoaXMuc3RhcnRYICsgKHRoaXMubWFuYWdlci50YXJnZXRJbWFnZSt0aGlzLm1hbmFnZXIudGFyZ2V0VGV4dCkvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBhdWRpb0VuZFBvc1ggPSB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQrdGhpcy5tYW5hZ2VyLnRhcmdldEF1ZGlvKS90b3RhbFRhcmdldCAqIHRoaXMud2lkdGg7XG4gICAgICAgIFxuICAgICAgICAvLyBJbWFnZSBFbmQgUG9pbnRcbiAgICAgICAgdGhpcy5pbWFnZUVuZFBvaW50ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKGltYWdlRW5kUG9zWCwgdGhpcy5zdGFydFkgKTtcbiAgICAgICAgbGV0IGltYWdlTGluZTpHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwLCh0aGlzLmhlaWdodCt0aGlzLnBhZGRpbmcqMiksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLmltYWdlRW5kUG9pbnQuYWRkKGltYWdlTGluZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBUZXh0IEVuZCBQb2ludFxuICAgICAgICB0aGlzLnRleHRFbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih0ZXh0RW5kUG9zWCwgdGhpcy5zdGFydFkgKTtcbiAgICAgICAgbGV0IHRleHRMaW5lOkdhbWVPYmplY3RzLlJlY3RhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMTAsKHRoaXMuaGVpZ2h0K3RoaXMucGFkZGluZyoyKSxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMudGV4dEVuZFBvaW50LmFkZCh0ZXh0TGluZSk7XG5cbiAgICAgICAgLy8gQXVkaW8gRW5kIFBvaW50XG4gICAgICAgIHRoaXMuYXVkaW9FbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcihhdWRpb0VuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCBhdWRpb0xpbmU6R2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwxMCwodGhpcy5oZWlnaHQrdGhpcy5wYWRkaW5nKjIpLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy5hdWRpb0VuZFBvaW50LmFkZChhdWRpb0xpbmUpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy5pbWFnZUVuZFBvaW50ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy50ZXh0RW5kUG9pbnQgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKCB0aGlzLmF1ZGlvRW5kUG9pbnQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKXtcbiAgICAgICAgbGV0IHdpZHRoID0gKCB0aGlzLm1hbmFnZXIuZ2V0VG90YWxDdXJyZW50KCkgLyB0aGlzLm1hbmFnZXIuZ2V0VG90YWxUYXJnZXQoKSkgKiAoIHRoaXMud2lkdGggKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsU3R5bGUoMHgwMGZmMDAsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxSZWN0KHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSAtIHRoaXMuaGVpZ2h0LzIsIHdpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVksXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpdCgpe1xuICAgICAgICAvLyBQcmVwYXJlIFR3ZWVuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHk6IHRoaXMub3JpWS0xMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRhcmdldFgoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0VGFyZ2V0WSgpe1xuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiRm9yZ2VCYXIiLCJwcmVsb2FkIiwic2NlbmUiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIndpZHRoIiwibWFuYWdlciIsImdldFRvdGFsQ3VycmVudCIsImdldFRvdGFsVGFyZ2V0IiwicHJvZ3Jlc3NCYXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0WCIsInN0YXJ0WSIsImhlaWdodCIsImVudGVyIiwiY2xlYXIiLCJ0d2VlbnMiLCJhZGQiLCJ0YXJnZXRzIiwiY29udGFpbmVyIiwieSIsIm9yaVkiLCJlYXNlIiwiZHVyYXRpb24iLCJleGl0IiwiZ2V0VGFyZ2V0WCIsImdldFRhcmdldFkiLCJjb25zdHJ1Y3RvciIsIngiLCJwYWRkaW5nIiwib3JpWCIsInByb2dyZXNzQmFyQmFzZSIsImdyYXBoaWNzIiwiY29sb3JQYW5lbEJnIiwicHJvZ3Jlc3NCYXJJbm5lciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJ0b3RhbFRhcmdldCIsImltYWdlRW5kUG9zWCIsInRhcmdldEltYWdlIiwidGV4dEVuZFBvc1giLCJ0YXJnZXRUZXh0IiwiYXVkaW9FbmRQb3NYIiwidGFyZ2V0QXVkaW8iLCJpbWFnZUVuZFBvaW50IiwiaW1hZ2VMaW5lIiwicmVjdGFuZ2xlIiwidGV4dEVuZFBvaW50IiwidGV4dExpbmUiLCJhdWRpb0VuZFBvaW50IiwiYXVkaW9MaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBar.ts\n"));

/***/ })

});