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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_FlexMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/FlexMap */ \"./src/adventure/components/Map/FlexMap.ts\");\n/* harmony import */ var _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/CameraController */ \"./src/adventure/components/Map/CameraController.ts\");\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new _components_Map_CameraController__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, this.worldContainer);\n        // Render Map\n        this.flexMap = new _components_Map_FlexMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        this.debugText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY + 200, \"Debug Text\", {\n            fontSize: 40\n        }).setOrigin(0.5);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.sideMap.isEndScene()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.sideMap.isReachStart();\n        let isReachEnd = this.sideMap.isReachEnd();\n        let deltaX = 0;\n        //\n        if (moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        this.sideMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n        if (this.debugText) {\n            this.debugText.setText(this.sideMap.currentX.toString());\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsU0FBUztZQUN0QixJQUFJLENBQUNwQixZQUFZLENBQUN1QixjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsWUFBWSxDQUFDO1lBQy9CUixTQUFTLElBQUksQ0FBQ1MsS0FBSztRQUN2QixPQUFNLElBQUlMLGFBQWEsUUFBUTtZQUMzQixJQUFJLENBQUNwQixZQUFZLENBQUN1QixjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsWUFBWSxDQUFDLENBQUM7WUFDaENSLFNBQVMsQ0FBQyxJQUFJLENBQUNTLEtBQUs7UUFDeEIsT0FBTSxJQUFJTCxhQUFhLFFBQVE7WUFDM0IsSUFBSSxDQUFDcEIsWUFBWSxDQUFDdUIsY0FBYyxDQUFDO1FBQ3JDO1FBRUEsSUFBSSxDQUFDMUIsZ0JBQWdCLENBQUNzQixNQUFNLENBQUVDLFdBQVdDLGNBQWNDO1FBQ3ZELElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQ29CLE1BQU0sQ0FBRUg7UUFDckIsSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQ0M7UUFFNUIsSUFBSSxJQUFJLENBQUNOLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQ2dCLE9BQU8sQ0FBQyxJQUFJLENBQUMzQixPQUFPLENBQUM0QixRQUFRLENBQUNDLFFBQVE7UUFDekQ7SUFDSjtJQXRFQUMsYUFDQTtRQUNJLEtBQUssQ0FBQzthQXpCVkMsY0FBdUI7UUFjdkIsRUFBRTthQUNGTCxRQUFnQjtJQVdoQjtBQW9FSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IE1vdmVDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBGbGV4TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL0ZsZXhNYXAnO1xuaW1wb3J0IENhbWVyYUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvQ2FtZXJhQ29udHJvbGxlcic7XG5cbmV4cG9ydCBjbGFzcyBDaXR5U2NlbmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICB3b3JsZENvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgY2FtZXJhQ29udHJvbGxlcjogQ2FtZXJhQ29udHJvbGxlclxuICAgIC8vXG4gICAgc2lkZU1hcDogRmxleE1hcFxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgZGVidWdUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBzcGVlZDogbnVtYmVyID0gMTBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIgPSBuZXcgQ2FtZXJhQ29udHJvbGxlcih0aGlzLHRoaXMud29ybGRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5mbGV4TWFwID0gbmV3IEZsZXhNYXAodGhpcywwLDApO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnNpZGVNYXAuY29udGFpbmVyKTtcblxuICAgICAgICAvLyBSZW5kZXIgQXZhdGFyXG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyID0gbmV3IFBsYXllckF2YXRhciggdGhpcywgMCwgLTE1MCk7XG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldFNjYWxlKDAuNCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMucGxheWVyQXZhdGFyKVxuXG4gICAgICAgIC8vIFJlbmRlciBCb3R0b20gUGFuZWxcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbCA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQsR2FtZUxpYi5zY3JlZW5XaWR0aCw5MDAsR2FtZUxpYi5jb2xvclBhbmVsQmcpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWxCb3JkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTkwMCxHYW1lTGliLnNjcmVlbldpZHRoLDIwLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z1RleHQgPSB0aGlzLmFkZC50ZXh0KCBHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSsyMDAsJ0RlYnVnIFRleHQnLHtmb250U2l6ZTo0MH0pLnNldE9yaWdpbigwLjUpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBQbGF5ZXIgQ29udHJvbGxlciBhbmQgTGluayB0byBBdmF0YXJcbiAgICAgICAgdGhpcy5tb3ZlQ29udHJvbGxlciA9IG5ldyBNb3ZlQ29udHJvbGxlciggdGhpcywgR2FtZUxpYi5taWRYLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtIDMwMCApO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGFydEVuZE1vdmVtZW50KCBkZWx0YVg6IG51bWJlciApe1xuICAgICAgICBpZiggdGhpcy5zaWRlTWFwLmlzRW5kU2NlbmUoKSApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBkZWx0YVg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgbGV0IG1vdmVTdGF0ZTpzdHJpbmcgPSB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZTtcbiAgICAgICAgbGV0IGlzUmVhY2hTdGFydDpib29sZWFuID0gdGhpcy5zaWRlTWFwLmlzUmVhY2hTdGFydCgpO1xuICAgICAgICBsZXQgaXNSZWFjaEVuZDpib29sZWFuID0gdGhpcy5zaWRlTWFwLmlzUmVhY2hFbmQoKTtcbiAgICAgICAgbGV0IGRlbHRhWDpudW1iZXIgPSAwO1xuICAgICAgICAvL1xuICAgICAgICBpZiggbW92ZVN0YXRlID09ICdyaWdodCcgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oMSk7XG4gICAgICAgICAgICBkZWx0YVggPSB0aGlzLnNwZWVkO1xuICAgICAgICB9ZWxzZSBpZiggbW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICBkZWx0YVggPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgfWVsc2UgaWYoIG1vdmVTdGF0ZSA9PSAnaWRsZScgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCdpZGxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKCBtb3ZlU3RhdGUsIGlzUmVhY2hTdGFydCwgaXNSZWFjaEVuZCApO1xuICAgICAgICB0aGlzLnNpZGVNYXAudXBkYXRlKCBkZWx0YVggKVxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoZGVsdGFYKTtcblxuICAgICAgICBpZiggdGhpcy5kZWJ1Z1RleHQgKXtcbiAgICAgICAgICAgIHRoaXMuZGVidWdUZXh0LnNldFRleHQodGhpcy5zaWRlTWFwLmN1cnJlbnRYLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiTW92ZUNvbnRyb2xsZXIiLCJQbGF5ZXJBdmF0YXIiLCJGbGV4TWFwIiwiQ2FtZXJhQ29udHJvbGxlciIsIkNpdHlTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInJlZiIsImFkZCIsInNwcml0ZSIsIm1pZFgiLCJtaWRZIiwiYWxwaGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY2FtZXJhQ29udHJvbGxlciIsImZsZXhNYXAiLCJzaWRlTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwiZGVidWdUZXh0IiwidGV4dCIsImZvbnRTaXplIiwibW92ZUNvbnRyb2xsZXIiLCJlbWl0IiwidXBkYXRlU3RhcnRFbmRNb3ZlbWVudCIsImRlbHRhWCIsImlzRW5kU2NlbmUiLCJ4IiwidXBkYXRlIiwibW92ZVN0YXRlIiwiaXNSZWFjaFN0YXJ0IiwiaXNSZWFjaEVuZCIsInNldEF2YXRhclN0YXRlIiwic2V0RGlyZWN0aW9uIiwic3BlZWQiLCJzZXRUZXh0IiwiY3VycmVudFgiLCJ0b1N0cmluZyIsImNvbnN0cnVjdG9yIiwicmVuZGVyRGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});