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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        this.updateMap();\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateMap() {\n        console.log(this.distance);\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        let mapMove = -1 * this.distance;\n        this.sideMap.moveMap(mapMove);\n    }\n    updatePerspective(perspective) {\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) {\n            this.viewPerspective = \"default\";\n        }\n        if (this.checkIsReachEnd()) {\n            this.viewPerspective = \"default\";\n        }\n        // Only when not end and start\n        // Player avatar move based on avatar facing\n        if (this.viewPerspective != perspective) {\n            this.viewPerspective = perspective;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            this.tweens.add({\n                targets: [\n                    this.worldContainer\n                ],\n                x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX,\n                ease: \"Cubic\",\n                duration: 1000,\n                onComplete: ()=>{}\n            });\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (perspective == \"left\") {\n                        this.tweens.add({\n                            targets: [\n                                this.worldContainer\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X + 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    } else if (perspective == \"right\") {\n                        this.tweens.add({\n                            targets: [\n                                this.worldContainer\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX - 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    updateStartEndMovement(moveRate) {\n        if (this.checkIsReachEnd() || this.checkIsReachStart()) {\n            // Move avatar based on distance instead\n            if (this.distance > this.minDistance && this.distance < this.maxDistance) {\n                this.playerAvatar.x += moveRate;\n            }\n        }\n    }\n    update() {\n        if (this.moveController.moveState == \"right\") {\n            let moveRate = this.speed;\n            this.distance += moveRate;\n            this.distance = Math.min(this.maxDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            let moveRate = -this.speed;\n            this.distance += moveRate;\n            this.distance = Math.max(this.minDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    checkIsReachStart() {\n        return this.distance < this.minDistance + this.startEndThreshold;\n    }\n    checkIsReachEnd() {\n        return this.distance > this.maxDistance - this.startEndThreshold;\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 10000;\n        this.startEndThreshold = 600;\n        this.distance = 3000;\n        this.speed = 10;\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQztJQUNKO0lBRUEzQixvQkFBMkI7UUFDdkIsT0FBTyxJQUFJLENBQUNELFFBQVEsR0FBSSxJQUFJLENBQUNxQixXQUFXLEdBQUcsSUFBSSxDQUFDVSxpQkFBaUI7SUFDckU7SUFFQTdCLGtCQUF5QjtRQUNyQixPQUFPLElBQUksQ0FBQ0YsUUFBUSxHQUFJLElBQUksQ0FBQ3NCLFdBQVcsR0FBRyxJQUFJLENBQUNTLGlCQUFpQjtJQUNyRTtJQS9JQUMsYUFDQTtRQUNJLEtBQUssQ0FBQzthQWhDVkMsY0FBdUI7UUFXdkIsRUFBRTthQUNGWixjQUFzQjthQUN0QkMsY0FBc0I7YUFDdEJTLG9CQUE0QjthQUM1Qi9CLFdBQW1CO2FBQ25CeUIsUUFBZ0I7UUFDaEIsRUFBRTthQUNGbEIsa0JBQTBCO2FBRzFCUywyQkFBbUM7SUFZbkM7QUE2SUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9zY2VuZXMvQ2l0eVNjZW5lLnRzPzIyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBNb3ZlQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9Nb3ZlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllckF2YXRhcic7XG5pbXBvcnQgU2lkZU1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcC9TaWRlTWFwJztcblxuZXhwb3J0IGNsYXNzIENpdHlTY2VuZSBleHRlbmRzIFNjZW5lXG57XG4gICAgcmVuZGVyRGVidWc6IGJvb2xlYW4gPSB0cnVlXG4gICAgLy9cbiAgICBjYW1lcmE6IFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuQ2FtZXJhO1xuICAgIHdvcmxkQ29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBtb3ZlQ29udHJvbGxlcjogTW92ZUNvbnRyb2xsZXJcbiAgICBwbGF5ZXJBdmF0YXI6IFBsYXllckF2YXRhclxuICAgIC8vXG4gICAgc2lkZU1hcDogU2lkZU1hcFxuICAgIC8vXG4gICAgYm90dG9tUGFuZWxCb3JkZXI6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIGJvdHRvbVBhbmVsOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDEwMDAwXG4gICAgc3RhcnRFbmRUaHJlc2hvbGQ6IG51bWJlciA9IDYwMFxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSAzMDAwXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwXG4gICAgLy9cbiAgICB2aWV3UGVyc3BlY3RpdmU6IHN0cmluZyA9ICdkZWZhdWx0J1xuICAgIHZpZXdQZXJzcGVjdGl2ZUFwcGx5OiBib29sZWFuXG4gICAgdmlld1BlcnNwZWN0aXZlVmFsdWU6IG51bWJlclxuICAgIHZpZXdQZXJzcGVjdGl2ZVRocmVzaG9sZDogbnVtYmVyID0gMTAwXG4gICAgdmlld1BlcnNwZWN0aXZlUG9zaXRpb246ICdtaWRkbGUnXG5cbiAgICBwcmVsb2FkKCl7XG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWYxJywgJy9yZWYvcmVmMS5wbmcnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0NpdHlTY2VuZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6YW55IClcbiAgICB7XG4gICAgICAgIC8vIEFkZCBSZWYgXG4gICAgICAgIGxldCByZWYgPSB0aGlzLmFkZC5zcHJpdGUoR2FtZUxpYi5taWRYLCBHYW1lTGliLm1pZFksICdyZWYxJyk7XG4gICAgICAgIHJlZi5hbHBoYSA9IDAuNVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZmZmZmZmKTtcblxuICAgICAgICAvLyBQcmVwYXJlIFdvcmxkIENvbnRhaW5lclxuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyID0gdGhpcy5hZGQuY29udGFpbmVyKEdhbWVMaWIubWlkWCwxMDgwKTtcblxuICAgICAgICAvLyBSZW5kZXIgTWFwXG4gICAgICAgIHRoaXMuc2lkZU1hcCA9IG5ldyBTaWRlTWFwKHRoaXMsMCwwKTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5zaWRlTWFwLmNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIEF2YXRhclxuICAgICAgICB0aGlzLnBsYXllckF2YXRhciA9IG5ldyBQbGF5ZXJBdmF0YXIoIHRoaXMsIDAsIC0xNTApO1xuICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRTY2FsZSgwLjQpO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnBsYXllckF2YXRhcilcblxuICAgICAgICAvLyBSZW5kZXIgQm90dG9tIFBhbmVsXG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWwgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LEdhbWVMaWIuc2NyZWVuV2lkdGgsOTAwLEdhbWVMaWIuY29sb3JQYW5lbEJnKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsQm9yZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodC05MDAsR2FtZUxpYi5zY3JlZW5XaWR0aCwyMCxHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmspO1xuXG4gICAgICAgIC8vIENyZWF0ZSBQbGF5ZXIgQ29udHJvbGxlciBhbmQgTGluayB0byBBdmF0YXJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBNb3ZlQ29udHJvbGxlciggdGhpcywgR2FtZUxpYi5taWRYLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtIDMwMCApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTWFwKCk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1hcCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgcmVhY2ggZW5kLCBvbmx5IHdvcmsgaW4gbWlkZGxlIHBhcnRcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApIHJldHVybjtcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoRW5kKCkgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1hcE1vdmUgPSAtMSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIHRoaXMuc2lkZU1hcC5tb3ZlTWFwKG1hcE1vdmUpO1xuICAgIH0gICAgXG5cbiAgICB1cGRhdGVQZXJzcGVjdGl2ZSggcGVyc3BlY3RpdmU6IHN0cmluZyApe1xuICAgICAgICAvLyBDaGVjayBpZiByZWFjaCBlbmQsIG9ubHkgd29yayBpbiBtaWRkbGUgcGFydFxuICAgICAgICBpZiggdGhpcy5jaGVja0lzUmVhY2hTdGFydCgpICl7IFxuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoRW5kKCkgKXtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlID0gJ2RlZmF1bHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSB3aGVuIG5vdCBlbmQgYW5kIHN0YXJ0XG4gICAgICAgIC8vIFBsYXllciBhdmF0YXIgbW92ZSBiYXNlZCBvbiBhdmF0YXIgZmFjaW5nXG4gICAgICAgIGlmKCB0aGlzLnZpZXdQZXJzcGVjdGl2ZSAhPSBwZXJzcGVjdGl2ZSApe1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLndvcmxkQ29udGFpbmVyXSxcbiAgICAgICAgICAgICAgICB4OiBHYW1lTGliLm1pZFgsXG4gICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKCAhdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSApe1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSA+IHRoaXMudmlld1BlcnNwZWN0aXZlVGhyZXNob2xkICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBwZXJzcGVjdGl2ZSA9PSAnbGVmdCcgKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZENvbnRhaW5lcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogR2FtZUxpYi5xdWF0ZXIzWCArIDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdDdWJpYycsICAgICAgIC8vICdDdWJpYycsICdFbGFzdGljJywgJ0JvdW5jZScsICdCYWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBwZXJzcGVjdGl2ZSA9PSAncmlnaHQnICl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMud29ybGRDb250YWluZXJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IEdhbWVMaWIucXVhdGVyWCAtIDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdDdWJpYycsICAgICAgIC8vICdDdWJpYycsICdFbGFzdGljJywgJ0JvdW5jZScsICdCYWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdGFydEVuZE1vdmVtZW50KCBtb3ZlUmF0ZTogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpIHx8IHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICAgICAgaWYoIHRoaXMuZGlzdGFuY2UgPiB0aGlzLm1pbkRpc3RhbmNlICYmIHRoaXMuZGlzdGFuY2UgPCB0aGlzLm1heERpc3RhbmNlICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgbGV0IG1vdmVSYXRlOm51bWJlciA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlICs9IG1vdmVSYXRlO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWluKHRoaXMubWF4RGlzdGFuY2UsdGhpcy5kaXN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQobW92ZVJhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc3BlY3RpdmUoJ3JpZ2h0Jyk7XG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAnbGVmdCcgKXtcbiAgICAgICAgICAgIGxldCBtb3ZlUmF0ZTpudW1iZXIgPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gbW92ZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChtb3ZlUmF0ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oLTEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc3BlY3RpdmUoJ2xlZnQnKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdpZGxlJyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ2lkbGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaFN0YXJ0KCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2UgPCAodGhpcy5taW5EaXN0YW5jZSArIHRoaXMuc3RhcnRFbmRUaHJlc2hvbGQpO1xuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaEVuZCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlID4gKHRoaXMubWF4RGlzdGFuY2UgLSB0aGlzLnN0YXJ0RW5kVGhyZXNob2xkKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIlNpZGVNYXAiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJyZWYiLCJhZGQiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSIsImFscGhhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJ3b3JsZENvbnRhaW5lciIsImNvbnRhaW5lciIsInNpZGVNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjb2xvclBhbmVsQmciLCJzZXRPcmlnaW4iLCJib3R0b21QYW5lbEJvcmRlciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJtb3ZlQ29udHJvbGxlciIsInVwZGF0ZU1hcCIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwiZGlzdGFuY2UiLCJjaGVja0lzUmVhY2hTdGFydCIsImNoZWNrSXNSZWFjaEVuZCIsIm1hcE1vdmUiLCJtb3ZlTWFwIiwidXBkYXRlUGVyc3BlY3RpdmUiLCJwZXJzcGVjdGl2ZSIsInZpZXdQZXJzcGVjdGl2ZSIsInZpZXdQZXJzcGVjdGl2ZVZhbHVlIiwidmlld1BlcnNwZWN0aXZlQXBwbHkiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwieCIsImVhc2UiLCJkdXJhdGlvbiIsIm9uQ29tcGxldGUiLCJ2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQiLCJxdWF0ZXIzWCIsInF1YXRlclgiLCJ1cGRhdGVTdGFydEVuZE1vdmVtZW50IiwibW92ZVJhdGUiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwidXBkYXRlIiwibW92ZVN0YXRlIiwic3BlZWQiLCJNYXRoIiwibWluIiwic2V0QXZhdGFyU3RhdGUiLCJzZXREaXJlY3Rpb24iLCJtYXgiLCJzdGFydEVuZFRocmVzaG9sZCIsImNvbnN0cnVjdG9yIiwicmVuZGVyRGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});