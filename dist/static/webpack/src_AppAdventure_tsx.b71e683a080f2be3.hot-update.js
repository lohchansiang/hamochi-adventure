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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n/* harmony import */ var _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/CameraController */ \"./src/adventure/components/Map/CameraController.ts\");\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    //\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, this.worldContainer);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(moveRate) {\n        if (this.checkIsReachEnd() || this.checkIsReachStart()) {\n            // Move avatar based on distance instead\n            if (this.distance > this.minDistance && this.distance < this.maxDistance) {\n                this.playerAvatar.x += moveRate;\n            }\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.sideMap.isReachStart();\n        let isReachEnd = this.sideMap.isReachEnd();\n        //\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        if (this.moveController.moveState == \"right\") {\n            let moveRate = this.speed;\n            this.distance += moveRate;\n            this.distance = Math.min(this.maxDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            let moveRate = -this.speed;\n            this.distance += moveRate;\n            this.distance = Math.max(this.minDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7YUFDRlQsUUFBZ0I7SUFhaEI7QUE2RUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9zY2VuZXMvQ2l0eVNjZW5lLnRzPzIyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBNb3ZlQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9Nb3ZlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllckF2YXRhcic7XG5pbXBvcnQgU2lkZU1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcC9TaWRlTWFwJztcbmltcG9ydCBDYW1lcmFDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL0NhbWVyYUNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgd29ybGRDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG1vdmVDb250cm9sbGVyOiBNb3ZlQ29udHJvbGxlclxuICAgIGNhbWVyYUNvbnRyb2xsZXI6IENhbWVyYUNvbnRyb2xsZXJcbiAgICAvL1xuICAgIHNpZGVNYXA6IFNpZGVNYXBcbiAgICBwbGF5ZXJBdmF0YXI6IFBsYXllckF2YXRhclxuICAgIC8vXG4gICAgYm90dG9tUGFuZWxCb3JkZXI6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIGJvdHRvbVBhbmVsOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIHNwZWVkOiBudW1iZXIgPSAxMFxuICAgIC8vXG4gICAgXG5cbiAgICBwcmVsb2FkKCl7XG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWYxJywgJy9yZWYvcmVmMS5wbmcnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0NpdHlTY2VuZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6YW55IClcbiAgICB7XG4gICAgICAgIC8vIEFkZCBSZWYgXG4gICAgICAgIGxldCByZWYgPSB0aGlzLmFkZC5zcHJpdGUoR2FtZUxpYi5taWRYLCBHYW1lTGliLm1pZFksICdyZWYxJyk7XG4gICAgICAgIHJlZi5hbHBoYSA9IDAuNVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZmZmZmZmKTtcblxuICAgICAgICAvLyBQcmVwYXJlIFdvcmxkIENvbnRhaW5lclxuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyID0gdGhpcy5hZGQuY29udGFpbmVyKEdhbWVMaWIubWlkWCwxMDgwKTtcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbGVyID0gbmV3IENhbWVyYUNvbnRyb2xsZXIodGhpcyx0aGlzLndvcmxkQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBSZW5kZXIgTWFwXG4gICAgICAgIHRoaXMuc2lkZU1hcCA9IG5ldyBTaWRlTWFwKHRoaXMsMCwwKTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5zaWRlTWFwLmNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIEF2YXRhclxuICAgICAgICB0aGlzLnBsYXllckF2YXRhciA9IG5ldyBQbGF5ZXJBdmF0YXIoIHRoaXMsIDAsIC0xNTApO1xuICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRTY2FsZSgwLjQpO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnBsYXllckF2YXRhcilcblxuICAgICAgICAvLyBSZW5kZXIgQm90dG9tIFBhbmVsXG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWwgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LEdhbWVMaWIuc2NyZWVuV2lkdGgsOTAwLEdhbWVMaWIuY29sb3JQYW5lbEJnKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsQm9yZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodC05MDAsR2FtZUxpYi5zY3JlZW5XaWR0aCwyMCxHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmspO1xuXG4gICAgICAgIC8vIENyZWF0ZSBQbGF5ZXIgQ29udHJvbGxlciBhbmQgTGluayB0byBBdmF0YXJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBNb3ZlQ29udHJvbGxlciggdGhpcywgR2FtZUxpYi5taWRYLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtIDMwMCApO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGFydEVuZE1vdmVtZW50KCBtb3ZlUmF0ZTogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpIHx8IHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICAgICAgaWYoIHRoaXMuZGlzdGFuY2UgPiB0aGlzLm1pbkRpc3RhbmNlICYmIHRoaXMuZGlzdGFuY2UgPCB0aGlzLm1heERpc3RhbmNlICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBsZXQgbW92ZVN0YXRlOnN0cmluZyA9IHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlO1xuICAgICAgICBsZXQgaXNSZWFjaFN0YXJ0OmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaFN0YXJ0KCk7XG4gICAgICAgIGxldCBpc1JlYWNoRW5kOmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaEVuZCgpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKCBtb3ZlU3RhdGUsIGlzUmVhY2hTdGFydCwgaXNSZWFjaEVuZCApO1xuXG5cblxuXG4gICAgICAgIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICBsZXQgbW92ZVJhdGU6bnVtYmVyID0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gbW92ZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChtb3ZlUmF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgncmlnaHQnKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgbGV0IG1vdmVSYXRlOm51bWJlciA9IC10aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbkRpc3RhbmNlLHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KG1vdmVSYXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgnbGVmdCcpO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ2lkbGUnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnaWRsZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiTW92ZUNvbnRyb2xsZXIiLCJQbGF5ZXJBdmF0YXIiLCJTaWRlTWFwIiwiQ2FtZXJhQ29udHJvbGxlciIsIkNpdHlTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInJlZiIsImFkZCIsInNwcml0ZSIsIm1pZFgiLCJtaWRZIiwiYWxwaGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY2FtZXJhQ29udHJvbGxlciIsInNpZGVNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjb2xvclBhbmVsQmciLCJzZXRPcmlnaW4iLCJib3R0b21QYW5lbEJvcmRlciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJtb3ZlQ29udHJvbGxlciIsImVtaXQiLCJ1cGRhdGVTdGFydEVuZE1vdmVtZW50IiwibW92ZVJhdGUiLCJjaGVja0lzUmVhY2hFbmQiLCJjaGVja0lzUmVhY2hTdGFydCIsImRpc3RhbmNlIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIngiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJpc1JlYWNoU3RhcnQiLCJpc1JlYWNoRW5kIiwic3BlZWQiLCJNYXRoIiwibWluIiwic2V0QXZhdGFyU3RhdGUiLCJzZXREaXJlY3Rpb24iLCJ1cGRhdGVNYXAiLCJ1cGRhdGVQZXJzcGVjdGl2ZSIsIm1heCIsImNvbnN0cnVjdG9yIiwicmVuZGVyRGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});