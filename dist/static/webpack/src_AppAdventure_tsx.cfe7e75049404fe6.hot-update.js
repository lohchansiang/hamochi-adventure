"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_AppAdventure_tsx",{

/***/ "./src/adventure/scenes/CityScene.ts":
/*!*******************************************!*\
  !*** ./src/adventure/scenes/CityScene.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_PlayerController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/PlayerController */ \"./src/adventure/components/Player/PlayerController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY);\n        this.playerAvatar.setScale(0.4);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0, 1000).setOrigin(0.5, 1);\n        // Create Player Controller and Link to Avatar\n        this.playerController = new _components_Player_PlayerController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, this.playerAvatar);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVztBQUNkO0FBQ2lDO0FBQ1I7QUFDYjtBQUV6QyxNQUFNTSxrQkFBa0JMLHlDQUFLQTtJQWFoQ00sVUFBUztRQUNMLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFDbEIsRUFBRTtRQUNGLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsUUFBUTtJQUU1QjtJQU9BQyxPQUFTQyxJQUFRLEVBQ2pCO1FBQ0ksV0FBVztRQUNYLElBQUlDLE1BQU0sSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ2IseURBQVksRUFBRUEseURBQVksRUFBRTtRQUN0RFcsSUFBSUssS0FBSyxHQUFHO1FBRVosSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUk7UUFDL0IsSUFBSSxDQUFDRixNQUFNLENBQUNHLGtCQUFrQixDQUFDO1FBRS9CLGFBQWE7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJbEIsK0RBQU9BLENBQUMsSUFBSSxFQUFDSCx5REFBWSxFQUFFO1FBRTlDLGdCQUFnQjtRQUNoQixJQUFJLENBQUNzQixZQUFZLEdBQUcsSUFBSXBCLHVFQUFZQSxDQUFFLElBQUksRUFBRUYseURBQVksRUFBRUEseURBQVk7UUFDdEUsSUFBSSxDQUFDc0IsWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFFM0Isc0JBQXNCO1FBQ3RCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxTQUFTLENBQUN6Qix5REFBWSxFQUFDQSxpRUFBb0IsRUFBQyxHQUFFLE1BQU0yQixTQUFTLENBQUMsS0FBSTtRQUc5Riw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJM0IsMkVBQWdCQSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUNxQixZQUFZO1FBRXJFeEIsK0NBQVFBLENBQUMrQixJQUFJLENBQUMsdUJBQXVCLElBQUk7SUFDN0M7SUE3QkFDLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUFwQlZDLGNBQXVCO0lBcUJ2QjtBQTZCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllckNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXJBdmF0YXInO1xuaW1wb3J0IFNpZGVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvU2lkZU1hcCc7XG5cbmV4cG9ydCBjbGFzcyBDaXR5U2NlbmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICBwbGF5ZXJDb250cm9sbGVyOiBQbGF5ZXJDb250cm9sbGVyXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIHNpZGVNYXA6IFNpZGVNYXBcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG5cbiAgICBwcmVsb2FkKCl7XG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWYxJywgJy9yZWYvcmVmMS5wbmcnKTtcblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIE1hcFxuICAgICAgICB0aGlzLnNpZGVNYXAgPSBuZXcgU2lkZU1hcCh0aGlzLEdhbWVMaWIubWlkWCwgMTA4MCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIEF2YXRhclxuICAgICAgICB0aGlzLnBsYXllckF2YXRhciA9IG5ldyBQbGF5ZXJBdmF0YXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcblxuICAgICAgICAvLyBSZW5kZXIgQm90dG9tIFBhbmVsXG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWwgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LDAsMTAwMCkuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLnBsYXllckNvbnRyb2xsZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlciggdGhpcywgdGhpcy5wbGF5ZXJBdmF0YXIgKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgXG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJQbGF5ZXJDb250cm9sbGVyIiwiUGxheWVyQXZhdGFyIiwiU2lkZU1hcCIsIkNpdHlTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInJlZiIsImFkZCIsInNwcml0ZSIsIm1pZFgiLCJtaWRZIiwiYWxwaGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsInNpZGVNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2V0T3JpZ2luIiwicGxheWVyQ29udHJvbGxlciIsImVtaXQiLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});