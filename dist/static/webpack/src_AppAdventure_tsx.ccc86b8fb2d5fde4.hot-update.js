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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_FlexMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/FlexMap */ \"./src/adventure/components/Map/FlexMap.ts\");\n/* harmony import */ var _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/CameraController */ \"./src/adventure/components/Map/CameraController.ts\");\n/* harmony import */ var _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Map/FixedMap */ \"./src/adventure/components/Map/FixedMap.ts\");\n\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');\n        // ref.alpha = 0.5\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, this.worldContainer);\n        // Render Map\n        this.flexMap = new _components_Map_FlexMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.flexMap.container);\n        this.flexMap.container.setVisible(false);\n        this.fixedMap = new _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.fixedMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        this.debugText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY + 200, \"Debug Text\", {\n            fontSize: 40\n        }).setOrigin(0.5);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.flexMap.isEndScene()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.flexMap.isReachStart();\n        let isReachEnd = this.flexMap.isReachEnd();\n        let deltaX = 0;\n        //\n        if (moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        this.flexMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n        if (this.debugText) {\n            this.debugText.setText(this.flexMap.currentX.toString());\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCLE9BQU8sQ0FBQ3lCLFlBQVk7UUFDcEQsSUFBSUMsYUFBcUIsSUFBSSxDQUFDMUIsT0FBTyxDQUFDMEIsVUFBVTtRQUNoRCxJQUFJTixTQUFnQjtRQUNwQixFQUFFO1FBQ0YsSUFBSUksYUFBYSxTQUFTO1lBQ3RCLElBQUksQ0FBQ3JCLFlBQVksQ0FBQ3dCLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUN4QixZQUFZLENBQUN5QixZQUFZLENBQUM7WUFDL0JSLFNBQVMsSUFBSSxDQUFDUyxLQUFLO1FBQ3ZCLE9BQU0sSUFBSUwsYUFBYSxRQUFRO1lBQzNCLElBQUksQ0FBQ3JCLFlBQVksQ0FBQ3dCLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUN4QixZQUFZLENBQUN5QixZQUFZLENBQUMsQ0FBQztZQUNoQ1IsU0FBUyxDQUFDLElBQUksQ0FBQ1MsS0FBSztRQUN4QixPQUFNLElBQUlMLGFBQWEsUUFBUTtZQUMzQixJQUFJLENBQUNyQixZQUFZLENBQUN3QixjQUFjLENBQUM7UUFDckM7UUFFQSxJQUFJLENBQUM1QixnQkFBZ0IsQ0FBQ3dCLE1BQU0sQ0FBRUMsV0FBV0MsY0FBY0M7UUFDdkQsSUFBSSxDQUFDMUIsT0FBTyxDQUFDdUIsTUFBTSxDQUFFSDtRQUNyQixJQUFJLENBQUNELHNCQUFzQixDQUFDQztRQUU1QixJQUFJLElBQUksQ0FBQ1AsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDaUIsT0FBTyxDQUFDLElBQUksQ0FBQzlCLE9BQU8sQ0FBQytCLFFBQVEsQ0FBQ0MsUUFBUTtRQUN6RDtJQUNKO0lBMUVBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO2FBMUJWQyxjQUF1QjtRQWV2QixFQUFFO2FBQ0ZMLFFBQWdCO0lBV2hCO0FBd0VKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvc2NlbmVzL0NpdHlTY2VuZS50cz8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgTW92ZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvTW92ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXJBdmF0YXInO1xuaW1wb3J0IEZsZXhNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvRmxleE1hcCc7XG5pbXBvcnQgQ2FtZXJhQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL01hcC9DYW1lcmFDb250cm9sbGVyJztcbmltcG9ydCBGaXhlZE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcC9GaXhlZE1hcCc7XG5cbmV4cG9ydCBjbGFzcyBDaXR5U2NlbmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICB3b3JsZENvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgY2FtZXJhQ29udHJvbGxlcjogQ2FtZXJhQ29udHJvbGxlclxuICAgIC8vXG4gICAgZmxleE1hcDogRmxleE1hcFxuICAgIGZpeGVkTWFwOiBGaXhlZE1hcFxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgZGVidWdUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBzcGVlZDogbnVtYmVyID0gMTBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgLy8gbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgLy8gcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIgPSBuZXcgQ2FtZXJhQ29udHJvbGxlcih0aGlzLHRoaXMud29ybGRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5mbGV4TWFwID0gbmV3IEZsZXhNYXAodGhpcywwLDApO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLmZsZXhNYXAuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5mbGV4TWFwLmNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmZpeGVkTWFwID0gbmV3IEZpeGVkTWFwKHRoaXMsMCwwKTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5maXhlZE1hcC5jb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCAwLCAtMTUwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5wbGF5ZXJBdmF0YXIpXG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICB0aGlzLmRlYnVnVGV4dCA9IHRoaXMuYWRkLnRleHQoIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZKzIwMCwnRGVidWcgVGV4dCcse2ZvbnRTaXplOjQwfSkuc2V0T3JpZ2luKDAuNSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IE1vdmVDb250cm9sbGVyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMzAwICk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoIGRlbHRhWDogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmZsZXhNYXAuaXNFbmRTY2VuZSgpICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci54ICs9IGRlbHRhWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBsZXQgbW92ZVN0YXRlOnN0cmluZyA9IHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlO1xuICAgICAgICBsZXQgaXNSZWFjaFN0YXJ0OmJvb2xlYW4gPSB0aGlzLmZsZXhNYXAuaXNSZWFjaFN0YXJ0KCk7XG4gICAgICAgIGxldCBpc1JlYWNoRW5kOmJvb2xlYW4gPSB0aGlzLmZsZXhNYXAuaXNSZWFjaEVuZCgpO1xuICAgICAgICBsZXQgZGVsdGFYOm51bWJlciA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIGlmKCBtb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigxKTtcbiAgICAgICAgICAgIGRlbHRhWCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKC0xKTtcbiAgICAgICAgICAgIGRlbHRhWCA9IC10aGlzLnNwZWVkO1xuICAgICAgICB9ZWxzZSBpZiggbW92ZVN0YXRlID09ICdpZGxlJyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ2lkbGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGxlci51cGRhdGUoIG1vdmVTdGF0ZSwgaXNSZWFjaFN0YXJ0LCBpc1JlYWNoRW5kICk7XG4gICAgICAgIHRoaXMuZmxleE1hcC51cGRhdGUoIGRlbHRhWCApXG4gICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChkZWx0YVgpO1xuXG4gICAgICAgIGlmKCB0aGlzLmRlYnVnVGV4dCApe1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z1RleHQuc2V0VGV4dCh0aGlzLmZsZXhNYXAuY3VycmVudFgudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIkZsZXhNYXAiLCJDYW1lcmFDb250cm9sbGVyIiwiRml4ZWRNYXAiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiYWRkIiwiY29udGFpbmVyIiwibWlkWCIsImNhbWVyYUNvbnRyb2xsZXIiLCJmbGV4TWFwIiwic2V0VmlzaWJsZSIsImZpeGVkTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwiZGVidWdUZXh0IiwidGV4dCIsIm1pZFkiLCJmb250U2l6ZSIsIm1vdmVDb250cm9sbGVyIiwiZW1pdCIsInVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQiLCJkZWx0YVgiLCJpc0VuZFNjZW5lIiwieCIsInVwZGF0ZSIsIm1vdmVTdGF0ZSIsImlzUmVhY2hTdGFydCIsImlzUmVhY2hFbmQiLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsInNwZWVkIiwic2V0VGV4dCIsImN1cnJlbnRYIiwidG9TdHJpbmciLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});