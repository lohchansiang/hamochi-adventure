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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/CameraController */ \"./src/adventure/components/Map/CameraController.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, this.worldContainer);\n        // Render Map\n        this.sideMap = new SideMap(this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        this.debugText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY + 200, \"Debug Text\", {\n            fontSize: 40\n        }).setOrigin(0.5);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.sideMap.isEndScene()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.sideMap.isReachStart();\n        let isReachEnd = this.sideMap.isReachEnd();\n        let deltaX = 0;\n        //\n        if (moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        this.sideMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n        if (this.debugText) {\n            this.debugText.setText(this.sideMap.currentX.toString());\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ3BCLFlBQVksQ0FBQ3VCLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUN2QixZQUFZLENBQUN3QixZQUFZLENBQUM7WUFDL0JSLFNBQVMsSUFBSSxDQUFDUyxLQUFLO1FBQ3ZCLE9BQU0sSUFBSUwsYUFBYSxRQUFRO1lBQzNCLElBQUksQ0FBQ3BCLFlBQVksQ0FBQ3VCLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUN2QixZQUFZLENBQUN3QixZQUFZLENBQUMsQ0FBQztZQUNoQ1IsU0FBUyxDQUFDLElBQUksQ0FBQ1MsS0FBSztRQUN4QixPQUFNLElBQUlMLGFBQWEsUUFBUTtZQUMzQixJQUFJLENBQUNwQixZQUFZLENBQUN1QixjQUFjLENBQUM7UUFDckM7UUFFQSxJQUFJLENBQUMxQixnQkFBZ0IsQ0FBQ3NCLE1BQU0sQ0FBRUMsV0FBV0MsY0FBY0M7UUFDdkQsSUFBSSxDQUFDeEIsT0FBTyxDQUFDcUIsTUFBTSxDQUFFSDtRQUNyQixJQUFJLENBQUNELHNCQUFzQixDQUFDQztRQUU1QixJQUFJLElBQUksQ0FBQ04sU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDZ0IsT0FBTyxDQUFDLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzZCLFFBQVEsQ0FBQ0MsUUFBUTtRQUN6RDtJQUNKO0lBdEVBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO2FBekJWQyxjQUF1QjtRQWN2QixFQUFFO2FBQ0ZMLFFBQWdCO0lBV2hCO0FBb0VKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvc2NlbmVzL0NpdHlTY2VuZS50cz8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgTW92ZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvTW92ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXJBdmF0YXInO1xuaW1wb3J0IEZsZXhNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvRmxleE1hcCc7XG5pbXBvcnQgQ2FtZXJhQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL01hcC9DYW1lcmFDb250cm9sbGVyJztcblxuZXhwb3J0IGNsYXNzIENpdHlTY2VuZSBleHRlbmRzIFNjZW5lXG57XG4gICAgcmVuZGVyRGVidWc6IGJvb2xlYW4gPSB0cnVlXG4gICAgLy9cbiAgICBjYW1lcmE6IFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuQ2FtZXJhO1xuICAgIHdvcmxkQ29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBtb3ZlQ29udHJvbGxlcjogTW92ZUNvbnRyb2xsZXJcbiAgICBjYW1lcmFDb250cm9sbGVyOiBDYW1lcmFDb250cm9sbGVyXG4gICAgLy9cbiAgICBzaWRlTWFwOiBTaWRlTWFwXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBkZWJ1Z1RleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuICAgIHNwZWVkOiBudW1iZXIgPSAxMFxuXG4gICAgcHJlbG9hZCgpe1xuICAgICAgICB0aGlzLmxvYWQuc2V0UGF0aCgnYXNzZXRzJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVmMScsICcvcmVmL3JlZjEucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDaXR5U2NlbmUnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUgKCBkYXRhOmFueSApXG4gICAge1xuICAgICAgICAvLyBBZGQgUmVmIFxuICAgICAgICBsZXQgcmVmID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZLCAncmVmMScpO1xuICAgICAgICByZWYuYWxwaGEgPSAwLjVcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEJhY2tncm91bmRDb2xvcigweGZmZmZmZik7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBXb3JsZCBDb250YWluZXJcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLm1pZFgsMTA4MCk7XG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlciA9IG5ldyBDYW1lcmFDb250cm9sbGVyKHRoaXMsdGhpcy53b3JsZENvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIE1hcFxuICAgICAgICB0aGlzLnNpZGVNYXAgPSBuZXcgU2lkZU1hcCh0aGlzLDAsMCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMuc2lkZU1hcC5jb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCAwLCAtMTUwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5wbGF5ZXJBdmF0YXIpXG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICB0aGlzLmRlYnVnVGV4dCA9IHRoaXMuYWRkLnRleHQoIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZKzIwMCwnRGVidWcgVGV4dCcse2ZvbnRTaXplOjQwfSkuc2V0T3JpZ2luKDAuNSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IE1vdmVDb250cm9sbGVyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMzAwICk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoIGRlbHRhWDogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLnNpZGVNYXAuaXNFbmRTY2VuZSgpICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci54ICs9IGRlbHRhWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBsZXQgbW92ZVN0YXRlOnN0cmluZyA9IHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlO1xuICAgICAgICBsZXQgaXNSZWFjaFN0YXJ0OmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaFN0YXJ0KCk7XG4gICAgICAgIGxldCBpc1JlYWNoRW5kOmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaEVuZCgpO1xuICAgICAgICBsZXQgZGVsdGFYOm51bWJlciA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIGlmKCBtb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigxKTtcbiAgICAgICAgICAgIGRlbHRhWCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKC0xKTtcbiAgICAgICAgICAgIGRlbHRhWCA9IC10aGlzLnNwZWVkO1xuICAgICAgICB9ZWxzZSBpZiggbW92ZVN0YXRlID09ICdpZGxlJyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ2lkbGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlci51cGRhdGUoIG1vdmVTdGF0ZSwgaXNSZWFjaFN0YXJ0LCBpc1JlYWNoRW5kICk7XG4gICAgICAgIHRoaXMuc2lkZU1hcC51cGRhdGUoIGRlbHRhWCApXG4gICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChkZWx0YVgpO1xuXG4gICAgICAgIGlmKCB0aGlzLmRlYnVnVGV4dCApe1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z1RleHQuc2V0VGV4dCh0aGlzLnNpZGVNYXAuY3VycmVudFgudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIkNhbWVyYUNvbnRyb2xsZXIiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJyZWYiLCJhZGQiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSIsImFscGhhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJ3b3JsZENvbnRhaW5lciIsImNvbnRhaW5lciIsImNhbWVyYUNvbnRyb2xsZXIiLCJzaWRlTWFwIiwiU2lkZU1hcCIsInBsYXllckF2YXRhciIsInNldFNjYWxlIiwiYm90dG9tUGFuZWwiLCJyZWN0YW5nbGUiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsImNvbG9yUGFuZWxCZyIsInNldE9yaWdpbiIsImJvdHRvbVBhbmVsQm9yZGVyIiwiY29sb3JQYW5lbEJnRGFyayIsImRlYnVnVGV4dCIsInRleHQiLCJmb250U2l6ZSIsIm1vdmVDb250cm9sbGVyIiwiZW1pdCIsInVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQiLCJkZWx0YVgiLCJpc0VuZFNjZW5lIiwieCIsInVwZGF0ZSIsIm1vdmVTdGF0ZSIsImlzUmVhY2hTdGFydCIsImlzUmVhY2hFbmQiLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsInNwZWVkIiwic2V0VGV4dCIsImN1cnJlbnRYIiwidG9TdHJpbmciLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});