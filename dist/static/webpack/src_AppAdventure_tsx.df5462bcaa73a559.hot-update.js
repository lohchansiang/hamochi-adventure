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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n/* harmony import */ var _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/CameraController */ \"./src/adventure/components/Map/CameraController.ts\");\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, this.worldContainer);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.sideMap.isEndScene()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.sideMap.isReachStart();\n        let isReachEnd = this.sideMap.isReachEnd();\n        let deltaX = 0;\n        //\n        if (moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        this.sideMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxhQUFhLFFBQVE7WUFDM0IsSUFBSSxDQUFDakIsWUFBWSxDQUFDb0IsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQ3BCLFlBQVksQ0FBQ3FCLFlBQVksQ0FBQyxDQUFDO1lBQ2hDUixTQUFTLENBQUMsSUFBSSxDQUFDUyxLQUFLO1FBQ3hCLE9BQU0sSUFBSUwsYUFBYSxRQUFRO1lBQzNCLElBQUksQ0FBQ2pCLFlBQVksQ0FBQ29CLGNBQWMsQ0FBQztRQUNyQztRQUVBLElBQUksQ0FBQ3RCLGdCQUFnQixDQUFDa0IsTUFBTSxDQUFFQyxXQUFXQyxjQUFjQztRQUN2RCxJQUFJLENBQUNwQixPQUFPLENBQUNpQixNQUFNLENBQUVIO1FBQ3JCLElBQUksQ0FBQ0Qsc0JBQXNCLENBQUNDO0lBQ2hDO0lBaEVBVSxhQUNBO1FBQ0ksS0FBSyxDQUFDO2FBekJWQyxjQUF1QjtRQWN2QixFQUFFO2FBQ0ZGLFFBQWdCO0lBV2hCO0FBOERKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvc2NlbmVzL0NpdHlTY2VuZS50cz8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgTW92ZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvTW92ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXJBdmF0YXInO1xuaW1wb3J0IFNpZGVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvU2lkZU1hcCc7XG5pbXBvcnQgQ2FtZXJhQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL01hcC9DYW1lcmFDb250cm9sbGVyJztcblxuZXhwb3J0IGNsYXNzIENpdHlTY2VuZSBleHRlbmRzIFNjZW5lXG57XG4gICAgcmVuZGVyRGVidWc6IGJvb2xlYW4gPSB0cnVlXG4gICAgLy9cbiAgICBjYW1lcmE6IFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuQ2FtZXJhO1xuICAgIHdvcmxkQ29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBtb3ZlQ29udHJvbGxlcjogTW92ZUNvbnRyb2xsZXJcbiAgICBjYW1lcmFDb250cm9sbGVyOiBDYW1lcmFDb250cm9sbGVyXG4gICAgLy9cbiAgICBzaWRlTWFwOiBTaWRlTWFwXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBkZWJ1Z1RleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuICAgIHNwZWVkOiBudW1iZXIgPSAxMFxuXG4gICAgcHJlbG9hZCgpe1xuICAgICAgICB0aGlzLmxvYWQuc2V0UGF0aCgnYXNzZXRzJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVmMScsICcvcmVmL3JlZjEucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDaXR5U2NlbmUnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUgKCBkYXRhOmFueSApXG4gICAge1xuICAgICAgICAvLyBBZGQgUmVmIFxuICAgICAgICBsZXQgcmVmID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZLCAncmVmMScpO1xuICAgICAgICByZWYuYWxwaGEgPSAwLjVcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEJhY2tncm91bmRDb2xvcigweGZmZmZmZik7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBXb3JsZCBDb250YWluZXJcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLm1pZFgsMTA4MCk7XG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlciA9IG5ldyBDYW1lcmFDb250cm9sbGVyKHRoaXMsdGhpcy53b3JsZENvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIE1hcFxuICAgICAgICB0aGlzLnNpZGVNYXAgPSBuZXcgU2lkZU1hcCh0aGlzLDAsMCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMuc2lkZU1hcC5jb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCAwLCAtMTUwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5wbGF5ZXJBdmF0YXIpXG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICAvLyBDcmVhdGUgUGxheWVyIENvbnRyb2xsZXIgYW5kIExpbmsgdG8gQXZhdGFyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgTW92ZUNvbnRyb2xsZXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAgKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhcnRFbmRNb3ZlbWVudCggZGVsdGFYOiBudW1iZXIgKXtcbiAgICAgICAgaWYoIHRoaXMuc2lkZU1hcC5pc0VuZFNjZW5lKCkgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnggKz0gZGVsdGFYO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGxldCBtb3ZlU3RhdGU6c3RyaW5nID0gdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGU7XG4gICAgICAgIGxldCBpc1JlYWNoU3RhcnQ6Ym9vbGVhbiA9IHRoaXMuc2lkZU1hcC5pc1JlYWNoU3RhcnQoKTtcbiAgICAgICAgbGV0IGlzUmVhY2hFbmQ6Ym9vbGVhbiA9IHRoaXMuc2lkZU1hcC5pc1JlYWNoRW5kKCk7XG4gICAgICAgIGxldCBkZWx0YVg6bnVtYmVyID0gMDtcbiAgICAgICAgLy9cbiAgICAgICAgaWYoIG1vdmVTdGF0ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKDEpO1xuICAgICAgICAgICAgZGVsdGFYID0gdGhpcy5zcGVlZDtcbiAgICAgICAgfWVsc2UgaWYoIG1vdmVTdGF0ZSA9PSAnbGVmdCcgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oLTEpO1xuICAgICAgICAgICAgZGVsdGFYID0gLXRoaXMuc3BlZWQ7XG4gICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gJ2lkbGUnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnaWRsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbGVyLnVwZGF0ZSggbW92ZVN0YXRlLCBpc1JlYWNoU3RhcnQsIGlzUmVhY2hFbmQgKTtcbiAgICAgICAgdGhpcy5zaWRlTWFwLnVwZGF0ZSggZGVsdGFYIClcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KGRlbHRhWCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiTW92ZUNvbnRyb2xsZXIiLCJQbGF5ZXJBdmF0YXIiLCJTaWRlTWFwIiwiQ2FtZXJhQ29udHJvbGxlciIsIkNpdHlTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInJlZiIsImFkZCIsInNwcml0ZSIsIm1pZFgiLCJtaWRZIiwiYWxwaGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY2FtZXJhQ29udHJvbGxlciIsInNpZGVNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjb2xvclBhbmVsQmciLCJzZXRPcmlnaW4iLCJib3R0b21QYW5lbEJvcmRlciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJtb3ZlQ29udHJvbGxlciIsImVtaXQiLCJ1cGRhdGVTdGFydEVuZE1vdmVtZW50IiwiZGVsdGFYIiwiaXNFbmRTY2VuZSIsIngiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJpc1JlYWNoU3RhcnQiLCJpc1JlYWNoRW5kIiwic2V0QXZhdGFyU3RhdGUiLCJzZXREaXJlY3Rpb24iLCJzcGVlZCIsImNvbnN0cnVjdG9yIiwicmVuZGVyRGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});