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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBar {\n    static preload(scene) {}\n    updateProgressBar() {\n        let width = this.manager.getTotalCurrent() / this.manager.getTotalTarget() * this.width;\n        this.progressBar.fillRect(this.startX, this.startY - this.height / 2, width, this.height);\n    }\n    enter() {\n        this.progressBar.clear();\n        this.updateProgressBar();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY - 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    //\n    constructor(scene, x, y){\n        //\n        this.width = 900;\n        this.height = 60;\n        this.padding = 15;\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        this.startX = -(this.width / 2);\n        this.startY = -(this.height / 2);\n        this.container = scene.add.container(x, y);\n        this.container.y -= 1000;\n        // Progress Bar Container\n        this.progressBarBase = this.scene.add.graphics();\n        this.progressBarBase.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg, 1);\n        this.progressBarBase.fillRect(this.startX - this.padding, this.startY - this.padding - this.height / 2, this.width + this.padding * 2, this.height + this.padding * 2);\n        this.container.add(this.progressBarBase);\n        // Progress Bar Inner\n        this.progressBarInner = this.scene.add.graphics();\n        this.progressBarInner.fillStyle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark, 1);\n        this.progressBarInner.fillRect(this.startX, this.startY - this.height / 2, this.width, this.height);\n        this.container.add(this.progressBarInner);\n        // Main Progress Bar\n        this.progressBar = this.scene.add.graphics();\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.container.add(this.progressBar);\n        // End Point Calculation\n        const totalTarget = this.manager.getTotalTarget();\n        const imageEndPosX = this.startX + this.manager.targetImage / totalTarget * this.width;\n        const textEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText) / totalTarget * this.width;\n        const audioEndPosX = this.startX + (this.manager.targetImage + this.manager.targetText + this.manager.targetAudio) / totalTarget * this.width;\n        // Image End Point\n        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY);\n        let imageLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.imageEndPoint.add(imageLine);\n        // Text End Point\n        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY);\n        let textLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.textEndPoint.add(textLine);\n        // Audio End Point\n        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY);\n        let audioLine = this.scene.add.rectangle(0, 0, 10, this.height + this.padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.audioEndPoint.add(audioLine);\n        this.container.add(this.imageEndPoint);\n        this.container.add(this.textEndPoint);\n        this.container.add(this.audioEndPoint);\n        this.updateProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNtQztBQUlwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUF5RkFDLG9CQUFtQjtRQUNmLElBQUlDLFFBQVEsSUFBTSxDQUFDQyxPQUFPLENBQUNDLGVBQWUsS0FBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsY0FBYyxLQUFRLElBQUksQ0FBQ0gsS0FBSztRQUM1RixJQUFJLENBQUNJLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsTUFBTSxHQUFDLEdBQUdSLE9BQU8sSUFBSSxDQUFDUSxNQUFNO0lBQzFGO0lBRUFDLFFBQU87UUFDSCxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sS0FBSztRQUN0QixJQUFJLENBQUNYLGlCQUFpQjtRQUV0QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDRCxLQUFLLENBQUNhLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUk7WUFDWkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBQyxPQUFNO1FBQ0YsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ2EsTUFBTSxDQUFDQyxHQUFHLENBQUM7WUFDbEJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTO1lBQ3ZCQyxHQUFHLElBQUksQ0FBQ0MsSUFBSSxHQUFDO1lBQ2JDLE1BQU07WUFDTkMsVUFBVTtRQUNkO0lBQ0o7SUE5RkEsRUFBRTtJQUVGRSxZQUFhdEIsS0FBZSxFQUFFdUIsQ0FBUyxFQUFFTixDQUFTLENBQUU7UUFuQnBELEVBQUU7YUFDRmYsUUFBZ0I7YUFDaEJRLFNBQWlCO2FBQ2pCYyxVQUFrQjtRQWlCZCxJQUFJLENBQUN4QixLQUFLLEdBQUdBO1FB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LENBQUNGLEdBQUcsQ0FBRSxJQUFJLENBQUM4QixhQUFhO1FBRXRDLElBQUksQ0FBQzNDLGlCQUFpQjtJQUMxQjtBQTZCSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQmFyLnRzP2JjOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZE1ha2VyIH0gZnJvbSBcIkAvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyXCJcbmltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiXG5pbXBvcnQgQ2FyZE1ha2VyTWFuYWdlciBmcm9tIFwiLi9DYXJkTWFrZXJNYW5hZ2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VCYXJ7XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG5cbiAgICB9XG5cbiAgICBzY2VuZTogQ2FyZE1ha2VyXG4gICAgbWFuYWdlcjogQ2FyZE1ha2VyTWFuYWdlclxuICAgIC8vXG4gICAgd2lkdGg6IG51bWJlciA9IDkwMFxuICAgIGhlaWdodDogbnVtYmVyID0gNjBcbiAgICBwYWRkaW5nOiBudW1iZXIgPSAxNVxuICAgIG9yaVg6bnVtYmVyXG4gICAgb3JpWTpudW1iZXJcbiAgICBzdGFydFg6IG51bWJlclxuICAgIHN0YXJ0WTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHByb2dyZXNzQmFyOiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIHByb2dyZXNzQmFySW5uZXI6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgcHJvZ3Jlc3NCYXJCYXNlOiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIC8vXG4gICAgaW1hZ2VFbmRQb2ludDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgdGV4dEVuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBhdWRpb0VuZFBvaW50OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvL1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6IG51bWJlciwgeTogbnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBzY2VuZS5tYW5hZ2VyXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuICAgICAgICB0aGlzLnN0YXJ0WCA9IC0gKHRoaXMud2lkdGgvMilcbiAgICAgICAgdGhpcy5zdGFydFkgPSAtICh0aGlzLmhlaWdodC8yKVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci55IC09IDEwMDA7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3MgQmFyIENvbnRhaW5lclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxTdHlsZShHYW1lTGliLmNvbG9yUGFuZWxCZywgMSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJCYXNlLmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRYIC0gdGhpcy5wYWRkaW5nLCBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WSAtIHRoaXMucGFkZGluZyAtIHRoaXMuaGVpZ2h0LzIsIFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggKyAodGhpcy5wYWRkaW5nKjIpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCArICh0aGlzLnBhZGRpbmcqMilcbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnByb2dyZXNzQmFyQmFzZSk7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3MgQmFyIElubmVyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJJbm5lciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJJbm5lci5maWxsU3R5bGUoR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhcklubmVyLmZpbGxSZWN0KFxuICAgICAgICAgICAgdGhpcy5zdGFydFgsIFxuICAgICAgICAgICAgdGhpcy5zdGFydFkgLSB0aGlzLmhlaWdodC8yLCBcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucHJvZ3Jlc3NCYXJJbm5lcik7XG4gICAgICAgIFxuICAgICAgICAvLyBNYWluIFByb2dyZXNzIEJhclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsU3R5bGUoMHgwMGZmMDAsIDEpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wcm9ncmVzc0Jhcik7XG5cbiAgICAgICAgLy8gRW5kIFBvaW50IENhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IHRvdGFsVGFyZ2V0Om51bWJlciA9IHRoaXMubWFuYWdlci5nZXRUb3RhbFRhcmdldCgpO1xuICAgICAgICBjb25zdCBpbWFnZUVuZFBvc1ggPSAgdGhpcy5zdGFydFggKyB0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCB0ZXh0RW5kUG9zWCA9ICB0aGlzLnN0YXJ0WCArICh0aGlzLm1hbmFnZXIudGFyZ2V0SW1hZ2UrdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQpL3RvdGFsVGFyZ2V0ICogdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3QgYXVkaW9FbmRQb3NYID0gdGhpcy5zdGFydFggKyAodGhpcy5tYW5hZ2VyLnRhcmdldEltYWdlK3RoaXMubWFuYWdlci50YXJnZXRUZXh0K3RoaXMubWFuYWdlci50YXJnZXRBdWRpbykvdG90YWxUYXJnZXQgKiB0aGlzLndpZHRoO1xuICAgICAgICBcbiAgICAgICAgLy8gSW1hZ2UgRW5kIFBvaW50XG4gICAgICAgIHRoaXMuaW1hZ2VFbmRQb2ludCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcihpbWFnZUVuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCBpbWFnZUxpbmU6R2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwxMCwodGhpcy5oZWlnaHQrdGhpcy5wYWRkaW5nKjIpLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy5pbWFnZUVuZFBvaW50LmFkZChpbWFnZUxpbmUpO1xuICAgICAgICBcbiAgICAgICAgLy8gVGV4dCBFbmQgUG9pbnRcbiAgICAgICAgdGhpcy50ZXh0RW5kUG9pbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIodGV4dEVuZFBvc1gsIHRoaXMuc3RhcnRZICk7XG4gICAgICAgIGxldCB0ZXh0TGluZTpHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwLCh0aGlzLmhlaWdodCt0aGlzLnBhZGRpbmcqMiksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLnRleHRFbmRQb2ludC5hZGQodGV4dExpbmUpO1xuXG4gICAgICAgIC8vIEF1ZGlvIEVuZCBQb2ludFxuICAgICAgICB0aGlzLmF1ZGlvRW5kUG9pbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoYXVkaW9FbmRQb3NYLCB0aGlzLnN0YXJ0WSApO1xuICAgICAgICBsZXQgYXVkaW9MaW5lOkdhbWVPYmplY3RzLlJlY3RhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMTAsKHRoaXMuaGVpZ2h0K3RoaXMucGFkZGluZyoyKSxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMuYXVkaW9FbmRQb2ludC5hZGQoYXVkaW9MaW5lKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMuaW1hZ2VFbmRQb2ludCApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMudGV4dEVuZFBvaW50ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCggdGhpcy5hdWRpb0VuZFBvaW50ICk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKCl7XG4gICAgICAgIGxldCB3aWR0aCA9ICggdGhpcy5tYW5hZ2VyLmdldFRvdGFsQ3VycmVudCgpIC8gdGhpcy5tYW5hZ2VyLmdldFRvdGFsVGFyZ2V0KCkpICogKCB0aGlzLndpZHRoIClcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsUmVjdCh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkgLSB0aGlzLmhlaWdodC8yLCB3aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGVudGVyKCl7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgVHdlZW5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgeTogdGhpcy5vcmlZLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXQoKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVktMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJGb3JnZUJhciIsInByZWxvYWQiLCJzY2VuZSIsInVwZGF0ZVByb2dyZXNzQmFyIiwid2lkdGgiLCJtYW5hZ2VyIiwiZ2V0VG90YWxDdXJyZW50IiwiZ2V0VG90YWxUYXJnZXQiLCJwcm9ncmVzc0JhciIsImZpbGxSZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwiaGVpZ2h0IiwiZW50ZXIiLCJjbGVhciIsInR3ZWVucyIsImFkZCIsInRhcmdldHMiLCJjb250YWluZXIiLCJ5Iiwib3JpWSIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXQiLCJjb25zdHJ1Y3RvciIsIngiLCJwYWRkaW5nIiwib3JpWCIsInByb2dyZXNzQmFyQmFzZSIsImdyYXBoaWNzIiwiZmlsbFN0eWxlIiwiY29sb3JQYW5lbEJnIiwicHJvZ3Jlc3NCYXJJbm5lciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJ0b3RhbFRhcmdldCIsImltYWdlRW5kUG9zWCIsInRhcmdldEltYWdlIiwidGV4dEVuZFBvc1giLCJ0YXJnZXRUZXh0IiwiYXVkaW9FbmRQb3NYIiwidGFyZ2V0QXVkaW8iLCJpbWFnZUVuZFBvaW50IiwiaW1hZ2VMaW5lIiwicmVjdGFuZ2xlIiwidGV4dEVuZFBvaW50IiwidGV4dExpbmUiLCJhdWRpb0VuZFBvaW50IiwiYXVkaW9MaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBar.ts\n"));

/***/ })

});