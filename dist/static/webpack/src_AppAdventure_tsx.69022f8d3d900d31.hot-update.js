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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    //\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateMap() {}\n    updateStartEndMovement(moveRate) {\n        if (this.checkIsReachEnd() || this.checkIsReachStart()) {\n            // Move avatar based on distance instead\n            if (this.distance > this.minDistance && this.distance < this.maxDistance) {\n                this.playerAvatar.x += moveRate;\n            }\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let isReachStart = this.sideMap.isReachStart();\n        let isReachEnd = this.sideMap.isReachEnd();\n        //\n        this.cameraController.update(moveState, isReachStart, isReachEnd);\n        if (this.moveController.moveState == \"right\") {\n            let moveRate = this.speed;\n            this.distance += moveRate;\n            this.distance = Math.min(this.maxDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            let moveRate = -this.speed;\n            this.distance += moveRate;\n            this.distance = Math.max(this.minDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDbUI7QUFDdEI7QUFDNkI7QUFDSjtBQUNiO0FBR3pDLE1BQU1NLGtCQUFrQkwseUNBQUtBO0lBZ0JoQyxFQUFFO0lBR0ZNLFVBQVM7UUFDTCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1FBQ2xCLEVBQUU7UUFDRixJQUFJLENBQUNELElBQUksQ0FBQ0UsS0FBSyxDQUFDLFFBQVE7SUFDNUI7SUFPQUMsT0FBU0MsSUFBUSxFQUNqQjtRQUNJLFdBQVc7UUFDWCxJQUFJQyxNQUFNLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNiLHlEQUFZLEVBQUVBLHlEQUFZLEVBQUU7UUFDdERXLElBQUlLLEtBQUssR0FBRztRQUVaLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO1FBQy9CLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQztRQUUvQiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDVCxHQUFHLENBQUNVLFNBQVMsQ0FBQ3RCLHlEQUFZLEVBQUM7UUFFdEQsYUFBYTtRQUNiLElBQUksQ0FBQ3VCLE9BQU8sR0FBRyxJQUFJcEIsK0RBQU9BLENBQUMsSUFBSSxFQUFDLEdBQUU7UUFDbEMsSUFBSSxDQUFDa0IsY0FBYyxDQUFDVCxHQUFHLENBQUMsSUFBSSxDQUFDVyxPQUFPLENBQUNELFNBQVM7UUFFOUMsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ0UsWUFBWSxHQUFHLElBQUl0Qix1RUFBWUEsQ0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ2hELElBQUksQ0FBQ3NCLFlBQVksQ0FBQ0MsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQ0osY0FBYyxDQUFDVCxHQUFHLENBQUMsSUFBSSxDQUFDWSxZQUFZO1FBRXpDLHNCQUFzQjtRQUN0QixJQUFJLENBQUNFLFdBQVcsR0FBRyxJQUFJLENBQUNkLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDM0IseURBQVksRUFBQ0EsaUVBQW9CLEVBQUNBLGdFQUFtQixFQUFDLEtBQUlBLGlFQUFvQixFQUFFK0IsU0FBUyxDQUFDLEtBQUk7UUFDcEksSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNwQixHQUFHLENBQUNlLFNBQVMsQ0FBQzNCLHlEQUFZLEVBQUNBLGlFQUFvQixHQUFDLEtBQUlBLGdFQUFtQixFQUFDLElBQUdBLHFFQUF3QjtRQUVqSSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDa0MsY0FBYyxHQUFHLElBQUlqQyx5RUFBY0EsQ0FBRSxJQUFJLEVBQUVELHlEQUFZLEVBQUVBLGlFQUFvQixHQUFHO1FBR3JGRiwrQ0FBUUEsQ0FBQ3FDLElBQUksQ0FBQyx1QkFBdUIsSUFBSTtJQUM3QztJQUVBQyxZQUFXLENBSVg7SUFFQUMsdUJBQXdCQyxRQUFnQixFQUFFO1FBQ3RDLElBQUksSUFBSSxDQUFDQyxlQUFlLE1BQU0sSUFBSSxDQUFDQyxpQkFBaUIsSUFBSTtZQUNwRCx3Q0FBd0M7WUFDeEMsSUFBSSxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsSUFBSSxJQUFJLENBQUNELFFBQVEsR0FBRyxJQUFJLENBQUNFLFdBQVcsRUFBRTtnQkFDdEUsSUFBSSxDQUFDbkIsWUFBWSxDQUFDb0IsQ0FBQyxJQUFJTjtZQUMzQjtRQUNKO0lBQ0o7SUFFQU8sU0FBUTtRQUNKLElBQUlDLFlBQW1CLElBQUksQ0FBQ1osY0FBYyxDQUFDWSxTQUFTO1FBQ3BELElBQUlDLGVBQXVCLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ3dCLFlBQVk7UUFDcEQsSUFBSUMsYUFBcUIsSUFBSSxDQUFDekIsT0FBTyxDQUFDeUIsVUFBVTtRQUNoRCxFQUFFO1FBQ0YsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0osTUFBTSxDQUFFQyxXQUFXQyxjQUFjQztRQUV2RCxJQUFJLElBQUksQ0FBQ2QsY0FBYyxDQUFDWSxTQUFTLElBQUksU0FBUztZQUMxQyxJQUFJUixXQUFrQixJQUFJLENBQUNZLEtBQUs7WUFDaEMsSUFBSSxDQUFDVCxRQUFRLElBQUlIO1lBQ2pCLElBQUksQ0FBQ0csUUFBUSxHQUFHVSxLQUFLQyxHQUFHLENBQUMsSUFBSSxDQUFDVCxXQUFXLEVBQUMsSUFBSSxDQUFDRixRQUFRO1lBQ3ZELElBQUksQ0FBQ0osc0JBQXNCLENBQUNDO1lBRTVCLElBQUksQ0FBQ2QsWUFBWSxDQUFDNkIsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQzdCLFlBQVksQ0FBQzhCLFlBQVksQ0FBQztZQUMvQixJQUFJLENBQUNsQixTQUFTO1lBQ2QsSUFBSSxDQUFDbUIsaUJBQWlCLENBQUM7UUFDM0IsT0FBTSxJQUFJLElBQUksQ0FBQ3JCLGNBQWMsQ0FBQ1ksU0FBUyxJQUFJLFFBQVE7WUFDL0MsSUFBSVIsV0FBa0IsQ0FBQyxJQUFJLENBQUNZLEtBQUs7WUFDakMsSUFBSSxDQUFDVCxRQUFRLElBQUlIO1lBQ2pCLElBQUksQ0FBQ0csUUFBUSxHQUFHVSxLQUFLSyxHQUFHLENBQUMsSUFBSSxDQUFDZCxXQUFXLEVBQUMsSUFBSSxDQUFDRCxRQUFRO1lBQ3ZELElBQUksQ0FBQ0osc0JBQXNCLENBQUNDO1lBRTVCLElBQUksQ0FBQ2QsWUFBWSxDQUFDNkIsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQzdCLFlBQVksQ0FBQzhCLFlBQVksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQ2xCLFNBQVM7WUFDZCxJQUFJLENBQUNtQixpQkFBaUIsQ0FBQztRQUMzQixPQUFNLElBQUksSUFBSSxDQUFDckIsY0FBYyxDQUFDWSxTQUFTLElBQUksUUFBUTtZQUMvQyxJQUFJLENBQUN0QixZQUFZLENBQUM2QixjQUFjLENBQUM7UUFDckM7SUFDSjtJQWxGQUksYUFDQTtRQUNJLEtBQUssQ0FBQzthQXpCVkMsY0FBdUI7UUFZdkIsRUFBRTthQUNGUixRQUFnQjtJQWFoQjtBQWdGSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IE1vdmVDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBTaWRlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL1NpZGVNYXAnO1xuaW1wb3J0IENhbWVyYUNvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvQ2FtZXJhQ29udHJvbGxlcic7XG5cbmV4cG9ydCBjbGFzcyBDaXR5U2NlbmUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICB3b3JsZENvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgY2FtZXJhQ29udHJvbGxlcjogQ2FtZXJhQ29udHJvbGxlclxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBzaWRlTWFwOiBTaWRlTWFwXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwXG4gICAgLy9cbiAgICBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5zaWRlTWFwID0gbmV3IFNpZGVNYXAodGhpcywwLDApO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnNpZGVNYXAuY29udGFpbmVyKTtcblxuICAgICAgICAvLyBSZW5kZXIgQXZhdGFyXG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyID0gbmV3IFBsYXllckF2YXRhciggdGhpcywgMCwgLTE1MCk7XG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldFNjYWxlKDAuNCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMucGxheWVyQXZhdGFyKVxuXG4gICAgICAgIC8vIFJlbmRlciBCb3R0b20gUGFuZWxcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbCA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQsR2FtZUxpYi5zY3JlZW5XaWR0aCw5MDAsR2FtZUxpYi5jb2xvclBhbmVsQmcpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWxCb3JkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTkwMCxHYW1lTGliLnNjcmVlbldpZHRoLDIwLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IE1vdmVDb250cm9sbGVyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMzAwICk7XG5cblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFwKCl7XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgIH0gICAgXG5cbiAgICB1cGRhdGVTdGFydEVuZE1vdmVtZW50KCBtb3ZlUmF0ZTogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpIHx8IHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICAgICAgaWYoIHRoaXMuZGlzdGFuY2UgPiB0aGlzLm1pbkRpc3RhbmNlICYmIHRoaXMuZGlzdGFuY2UgPCB0aGlzLm1heERpc3RhbmNlICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBsZXQgbW92ZVN0YXRlOnN0cmluZyA9IHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlO1xuICAgICAgICBsZXQgaXNSZWFjaFN0YXJ0OmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaFN0YXJ0KCk7XG4gICAgICAgIGxldCBpc1JlYWNoRW5kOmJvb2xlYW4gPSB0aGlzLnNpZGVNYXAuaXNSZWFjaEVuZCgpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKCBtb3ZlU3RhdGUsIGlzUmVhY2hTdGFydCwgaXNSZWFjaEVuZCApO1xuXG4gICAgICAgIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICBsZXQgbW92ZVJhdGU6bnVtYmVyID0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gbW92ZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChtb3ZlUmF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgncmlnaHQnKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgbGV0IG1vdmVSYXRlOm51bWJlciA9IC10aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbkRpc3RhbmNlLHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KG1vdmVSYXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgnbGVmdCcpO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ2lkbGUnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnaWRsZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiTW92ZUNvbnRyb2xsZXIiLCJQbGF5ZXJBdmF0YXIiLCJTaWRlTWFwIiwiQ2l0eVNjZW5lIiwicHJlbG9hZCIsImxvYWQiLCJzZXRQYXRoIiwiaW1hZ2UiLCJjcmVhdGUiLCJkYXRhIiwicmVmIiwiYWRkIiwic3ByaXRlIiwibWlkWCIsIm1pZFkiLCJhbHBoYSIsImNhbWVyYSIsImNhbWVyYXMiLCJtYWluIiwic2V0QmFja2dyb3VuZENvbG9yIiwid29ybGRDb250YWluZXIiLCJjb250YWluZXIiLCJzaWRlTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwibW92ZUNvbnRyb2xsZXIiLCJlbWl0IiwidXBkYXRlTWFwIiwidXBkYXRlU3RhcnRFbmRNb3ZlbWVudCIsIm1vdmVSYXRlIiwiY2hlY2tJc1JlYWNoRW5kIiwiY2hlY2tJc1JlYWNoU3RhcnQiLCJkaXN0YW5jZSIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJ4IiwidXBkYXRlIiwibW92ZVN0YXRlIiwiaXNSZWFjaFN0YXJ0IiwiaXNSZWFjaEVuZCIsImNhbWVyYUNvbnRyb2xsZXIiLCJzcGVlZCIsIk1hdGgiLCJtaW4iLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsInVwZGF0ZVBlcnNwZWN0aXZlIiwibWF4IiwiY29uc3RydWN0b3IiLCJyZW5kZXJEZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});