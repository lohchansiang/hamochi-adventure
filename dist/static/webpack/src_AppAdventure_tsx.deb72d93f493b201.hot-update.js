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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        this.updateMap();\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateMap() {\n        console.log(this.distance);\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        let mapMove = -1 * this.distance;\n        this.sideMap.moveMap(mapMove);\n    }\n    updatePerspective(perspective) {\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) {\n            this.viewPerspective = \"default\";\n            if (this.viewPerspectivePosition != \"Q3\") {\n                this.viewPerspectivePosition = \"Q3\";\n                this.tweens.add({\n                    targets: [\n                        this.worldContainer\n                    ],\n                    x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X + 50,\n                    ease: \"Cubic\",\n                    duration: 1000\n                });\n            }\n            return;\n        }\n        if (this.checkIsReachEnd()) {\n            this.viewPerspective = \"default\";\n            if (this.viewPerspectivePosition != \"Q1\") {\n                this.viewPerspectivePosition = \"Q1\";\n                this.tweens.add({\n                    targets: [\n                        this.worldContainer\n                    ],\n                    x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX - 50,\n                    ease: \"Cubic\",\n                    duration: 1000\n                });\n            }\n            return;\n        }\n        // Player avatar move based on avatar facing\n        if (this.viewPerspective != perspective) {\n            this.viewPerspective = perspective;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            //\n            this.movePrespectivePosition(\"Q2\");\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (perspective == \"left\") {\n                        this.movePrespectivePosition(\"Q3\");\n                    } else if (perspective == \"right\") {\n                        this.movePrespectivePosition(\"Q1\");\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    movePrespectivePosition(perspectivePosition) {\n        if (this.viewPerspectivePosition == perspectivePosition) return;\n        let toMove = false;\n        let newX = 0;\n        if (perspectivePosition == \"Q1\") {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX - 50;\n        } else if (perspectivePosition == \"Q2\") {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX;\n        } else if (perspectivePosition == \"Q3\") {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X + 50;\n        }\n        if (toMove) {\n            this.viewPerspectivePosition = perspectivePosition;\n            this.tweens.add({\n                targets: [\n                    this.worldContainer\n                ],\n                x: newX,\n                ease: \"Cubic\",\n                duration: 1000\n            });\n        }\n    }\n    updateStartEndMovement(moveRate) {\n        if (this.checkIsReachEnd() || this.checkIsReachStart()) {\n            // Move avatar based on distance instead\n            if (this.distance > this.minDistance && this.distance < this.maxDistance) {\n                this.playerAvatar.x += moveRate;\n            }\n        }\n    }\n    update() {\n        if (this.moveController.moveState == \"right\") {\n            let moveRate = this.speed;\n            this.distance += moveRate;\n            this.distance = Math.min(this.maxDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            let moveRate = -this.speed;\n            this.distance += moveRate;\n            this.distance = Math.max(this.minDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    checkIsReachStart() {\n        return this.distance < this.minDistance + this.startEndThreshold;\n    }\n    checkIsReachEnd() {\n        return this.distance > this.maxDistance - this.startEndThreshold;\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 10000;\n        this.startEndThreshold = 600;\n        this.distance = 3000;\n        this.speed = 10;\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100;\n        this.viewPerspectivePosition = \"Q2\" // Q1, Q2, Q3\n        ;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsa0JBQTBCO2FBRzFCWSwyQkFBbUM7YUFDbkNYLDBCQUFrQyxLQUFLLGFBQWE7O0lBV3BEO0FBdUtKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvc2NlbmVzL0NpdHlTY2VuZS50cz8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgTW92ZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvTW92ZUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXJBdmF0YXInO1xuaW1wb3J0IFNpZGVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvU2lkZU1hcCc7XG5cbmV4cG9ydCBjbGFzcyBDaXR5U2NlbmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICB3b3JsZENvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIHNpZGVNYXA6IFNpZGVNYXBcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMFxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSAxMDAwMFxuICAgIHN0YXJ0RW5kVGhyZXNob2xkOiBudW1iZXIgPSA2MDBcbiAgICBkaXN0YW5jZTogbnVtYmVyID0gMzAwMFxuICAgIHNwZWVkOiBudW1iZXIgPSAxMFxuICAgIC8vXG4gICAgdmlld1BlcnNwZWN0aXZlOiBzdHJpbmcgPSAnZGVmYXVsdCdcbiAgICB2aWV3UGVyc3BlY3RpdmVBcHBseTogYm9vbGVhblxuICAgIHZpZXdQZXJzcGVjdGl2ZVZhbHVlOiBudW1iZXJcbiAgICB2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQ6IG51bWJlciA9IDEwMFxuICAgIHZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uOiBzdHJpbmcgPSBcIlEyXCIgLy8gUTEsIFEyLCBRM1xuXG4gICAgcHJlbG9hZCgpe1xuICAgICAgICB0aGlzLmxvYWQuc2V0UGF0aCgnYXNzZXRzJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVmMScsICcvcmVmL3JlZjEucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDaXR5U2NlbmUnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUgKCBkYXRhOmFueSApXG4gICAge1xuICAgICAgICAvLyBBZGQgUmVmIFxuICAgICAgICBsZXQgcmVmID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZLCAncmVmMScpO1xuICAgICAgICByZWYuYWxwaGEgPSAwLjVcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEJhY2tncm91bmRDb2xvcigweGZmZmZmZik7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBXb3JsZCBDb250YWluZXJcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLm1pZFgsMTA4MCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIE1hcFxuICAgICAgICB0aGlzLnNpZGVNYXAgPSBuZXcgU2lkZU1hcCh0aGlzLDAsMCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMuc2lkZU1hcC5jb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCAwLCAtMTUwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5wbGF5ZXJBdmF0YXIpXG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICAvLyBDcmVhdGUgUGxheWVyIENvbnRyb2xsZXIgYW5kIExpbmsgdG8gQXZhdGFyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgTW92ZUNvbnRyb2xsZXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXAoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXN0YW5jZSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHJlYWNoIGVuZCwgb25seSB3b3JrIGluIG1pZGRsZSBwYXJ0XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaFN0YXJ0KCkgKSByZXR1cm47XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXBNb3ZlID0gLTEgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICB0aGlzLnNpZGVNYXAubW92ZU1hcChtYXBNb3ZlKTtcbiAgICB9ICAgIFxuXG4gICAgdXBkYXRlUGVyc3BlY3RpdmUoIHBlcnNwZWN0aXZlOiBzdHJpbmcgKXtcbiAgICAgICAgLy8gQ2hlY2sgaWYgcmVhY2ggZW5kLCBvbmx5IHdvcmsgaW4gbWlkZGxlIHBhcnRcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApeyBcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgaWYoICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uICE9ICdRMycgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uID0gJ1EzJztcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZENvbnRhaW5lcl0sXG4gICAgICAgICAgICAgICAgICAgIHg6IEdhbWVMaWIucXVhdGVyM1ggKyA1MCxcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBpZiggdGhpcy5jaGVja0lzUmVhY2hFbmQoKSApe1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCAgdGhpcy52aWV3UGVyc3BlY3RpdmVQb3NpdGlvbiAhPSAnUTEnICl7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVQb3NpdGlvbiA9ICdRMSc7XG4gICAgICAgICAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMud29ybGRDb250YWluZXJdLFxuICAgICAgICAgICAgICAgICAgICB4OiBHYW1lTGliLnF1YXRlclggLSA1MCxcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGxheWVyIGF2YXRhciBtb3ZlIGJhc2VkIG9uIGF2YXRhciBmYWNpbmdcbiAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlICE9IHBlcnNwZWN0aXZlICl7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlO1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdGhpcy5tb3ZlUHJlc3BlY3RpdmVQb3NpdGlvbignUTInKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZiggIXRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlICs9IDE7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgPiB0aGlzLnZpZXdQZXJzcGVjdGl2ZVRocmVzaG9sZCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggcGVyc3BlY3RpdmUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQcmVzcGVjdGl2ZVBvc2l0aW9uKCdRMycpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiggcGVyc3BlY3RpdmUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUHJlc3BlY3RpdmVQb3NpdGlvbignUTEnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQcmVzcGVjdGl2ZVBvc2l0aW9uKCBwZXJzcGVjdGl2ZVBvc2l0aW9uOiBzdHJpbmcgKXtcbiAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlUG9zaXRpb24gPT0gcGVyc3BlY3RpdmVQb3NpdGlvbiApIHJldHVybjtcblxuICAgICAgICBsZXQgdG9Nb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBuZXdYOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiggcGVyc3BlY3RpdmVQb3NpdGlvbiA9PSAnUTEnICl7XG4gICAgICAgICAgICB0b01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV3WCA9IEdhbWVMaWIucXVhdGVyWCAtIDUwO1xuICAgICAgICB9ZWxzZSBpZiggcGVyc3BlY3RpdmVQb3NpdGlvbiA9PSAnUTInICl7XG4gICAgICAgICAgICB0b01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV3WCA9IEdhbWVMaWIubWlkWDtcbiAgICAgICAgfWVsc2UgaWYoIHBlcnNwZWN0aXZlUG9zaXRpb24gPT0gJ1EzJyApe1xuICAgICAgICAgICAgdG9Nb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1ggPSBHYW1lTGliLnF1YXRlcjNYICsgNTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdG9Nb3ZlICl7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uID0gcGVyc3BlY3RpdmVQb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMud29ybGRDb250YWluZXJdLFxuICAgICAgICAgICAgICAgIHg6ICBuZXdYLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdDdWJpYycsICAgICAgIC8vICdDdWJpYycsICdFbGFzdGljJywgJ0JvdW5jZScsICdCYWNrJ1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdGFydEVuZE1vdmVtZW50KCBtb3ZlUmF0ZTogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpIHx8IHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICAgICAgaWYoIHRoaXMuZGlzdGFuY2UgPiB0aGlzLm1pbkRpc3RhbmNlICYmIHRoaXMuZGlzdGFuY2UgPCB0aGlzLm1heERpc3RhbmNlICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgbGV0IG1vdmVSYXRlOm51bWJlciA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlICs9IG1vdmVSYXRlO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWluKHRoaXMubWF4RGlzdGFuY2UsdGhpcy5kaXN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQobW92ZVJhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc3BlY3RpdmUoJ3JpZ2h0Jyk7XG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAnbGVmdCcgKXtcbiAgICAgICAgICAgIGxldCBtb3ZlUmF0ZTpudW1iZXIgPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gbW92ZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChtb3ZlUmF0ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oLTEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc3BlY3RpdmUoJ2xlZnQnKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdpZGxlJyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ2lkbGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaFN0YXJ0KCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2UgPCAodGhpcy5taW5EaXN0YW5jZSArIHRoaXMuc3RhcnRFbmRUaHJlc2hvbGQpO1xuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaEVuZCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlID4gKHRoaXMubWF4RGlzdGFuY2UgLSB0aGlzLnN0YXJ0RW5kVGhyZXNob2xkKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIlNpZGVNYXAiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJyZWYiLCJhZGQiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSIsImFscGhhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJ3b3JsZENvbnRhaW5lciIsImNvbnRhaW5lciIsInNpZGVNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjb2xvclBhbmVsQmciLCJzZXRPcmlnaW4iLCJib3R0b21QYW5lbEJvcmRlciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJtb3ZlQ29udHJvbGxlciIsInVwZGF0ZU1hcCIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwiZGlzdGFuY2UiLCJjaGVja0lzUmVhY2hTdGFydCIsImNoZWNrSXNSZWFjaEVuZCIsIm1hcE1vdmUiLCJtb3ZlTWFwIiwidXBkYXRlUGVyc3BlY3RpdmUiLCJwZXJzcGVjdGl2ZSIsInZpZXdQZXJzcGVjdGl2ZSIsInZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uIiwidHdlZW5zIiwidGFyZ2V0cyIsIngiLCJxdWF0ZXIzWCIsImVhc2UiLCJkdXJhdGlvbiIsInF1YXRlclgiLCJ2aWV3UGVyc3BlY3RpdmVWYWx1ZSIsInZpZXdQZXJzcGVjdGl2ZUFwcGx5IiwibW92ZVByZXNwZWN0aXZlUG9zaXRpb24iLCJ2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQiLCJwZXJzcGVjdGl2ZVBvc2l0aW9uIiwidG9Nb3ZlIiwibmV3WCIsInVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQiLCJtb3ZlUmF0ZSIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJzcGVlZCIsIk1hdGgiLCJtaW4iLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsIm1heCIsInN0YXJ0RW5kVGhyZXNob2xkIiwiY29uc3RydWN0b3IiLCJyZW5kZXJEZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});