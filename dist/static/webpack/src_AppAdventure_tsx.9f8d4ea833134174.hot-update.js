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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/FixedMap */ \"./src/adventure/components/Map/FixedMap.ts\");\n/* harmony import */ var _components_Map_MapEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');\n        // ref.alpha = 0.5\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.cameraController = new CameraController(this, this.worldContainer);\n        // Render Map\n        // this.flexMap = new FlexMap(this,0,0);\n        // this.worldContainer.add(this.flexMap.container);\n        // this.flexMap.container.setVisible(false);\n        this.fixedMap = new _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.fixedMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        this.debugText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY + 200, \"Debug Text\", {\n            fontSize: 40\n        }).setOrigin(0.5);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.fixedMap.getMapPosition() != _components_Map_MapEnum__WEBPACK_IMPORTED_MODULE_6__.ViewPosition.MIDDLE && this.fixedMap.canMove()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveController.moveState;\n        let deltaX = 0;\n        //\n        if (moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.cameraController.update(moveState, this.fixedMap.getMapPosition());\n        // this.flexMap.update( deltaX )\n        this.fixedMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n        if (this.debugText) {\n            this.debugText.setText(this.fixedMap.currentX.toString() + \" / \" + this.fixedMap.mapLength.toString());\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsWUFBWSxDQUFDO1lBQy9CUixTQUFTLElBQUksQ0FBQ1MsS0FBSztRQUN2QixPQUFNLElBQUlILGFBQWEsUUFBUTtZQUMzQixJQUFJLENBQUN2QixZQUFZLENBQUN3QixjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDeEIsWUFBWSxDQUFDeUIsWUFBWSxDQUFDLENBQUM7WUFDaENSLFNBQVMsQ0FBQyxJQUFJLENBQUNTLEtBQUs7UUFDeEIsT0FBTSxJQUFJSCxhQUFhLFFBQVE7WUFDM0IsSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsY0FBYyxDQUFDO1FBQ3JDO1FBRUEsSUFBSSxDQUFDM0IsZ0JBQWdCLENBQUN5QixNQUFNLENBQUVDLFdBQVcsSUFBSSxDQUFDeEIsUUFBUSxDQUFDbUIsY0FBYztRQUNyRSxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDbkIsUUFBUSxDQUFDdUIsTUFBTSxDQUFFTDtRQUN0QixJQUFJLENBQUNELHNCQUFzQixDQUFDQztRQUU1QixJQUFJLElBQUksQ0FBQ1AsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDaUIsT0FBTyxDQUFDLElBQUksQ0FBQzVCLFFBQVEsQ0FBQzZCLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDOUIsUUFBUSxDQUFDK0IsU0FBUyxDQUFDRCxRQUFRO1FBQ3ZHO0lBQ0o7SUF6RUFFLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUExQlZDLGNBQXVCO1FBZXZCLEVBQUU7YUFDRk4sUUFBZ0I7SUFXaEI7QUF1RUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9zY2VuZXMvQ2l0eVNjZW5lLnRzPzIyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBNb3ZlQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci9Nb3ZlQ29udHJvbGxlcic7XG5pbXBvcnQgUGxheWVyQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllckF2YXRhcic7XG5pbXBvcnQgVmlld1Bvc0NvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvVmlld1Bvc0NvbnRyb2xsZXInO1xuaW1wb3J0IEZpeGVkTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwJztcbmltcG9ydCB7IFZpZXdQb3NpdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL01hcEVudW0nO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgd29ybGRDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG1vdmVDb250cm9sbGVyOiBNb3ZlQ29udHJvbGxlclxuICAgIHZpZXdQb3NDb250cm9sbGVyOiBWaWV3UG9zQ29udHJvbGxlclxuICAgIC8vXG4gICAgLy8gZmxleE1hcDogRmxleE1hcFxuICAgIGZpeGVkTWFwOiBGaXhlZE1hcFxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgZGVidWdUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBzcGVlZDogbnVtYmVyID0gMTBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgLy8gbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgLy8gcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIgPSBuZXcgQ2FtZXJhQ29udHJvbGxlcih0aGlzLHRoaXMud29ybGRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgLy8gdGhpcy5mbGV4TWFwID0gbmV3IEZsZXhNYXAodGhpcywwLDApO1xuICAgICAgICAvLyB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLmZsZXhNYXAuY29udGFpbmVyKTtcbiAgICAgICAgLy8gdGhpcy5mbGV4TWFwLmNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmZpeGVkTWFwID0gbmV3IEZpeGVkTWFwKHRoaXMsMCwwKTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5maXhlZE1hcC5jb250YWluZXIpO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCAwLCAtMTUwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0U2NhbGUoMC40KTtcbiAgICAgICAgdGhpcy53b3JsZENvbnRhaW5lci5hZGQodGhpcy5wbGF5ZXJBdmF0YXIpXG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICB0aGlzLmRlYnVnVGV4dCA9IHRoaXMuYWRkLnRleHQoIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5taWRZKzIwMCwnRGVidWcgVGV4dCcse2ZvbnRTaXplOjQwfSkuc2V0T3JpZ2luKDAuNSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IE1vdmVDb250cm9sbGVyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMzAwICk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoIGRlbHRhWDogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmZpeGVkTWFwLmdldE1hcFBvc2l0aW9uKCkgIT0gVmlld1Bvc2l0aW9uLk1JRERMRSAmJiB0aGlzLmZpeGVkTWFwLmNhbk1vdmUoKSApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIueCArPSBkZWx0YVg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgbGV0IG1vdmVTdGF0ZTpzdHJpbmcgPSB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZTtcbiAgICAgICAgbGV0IGRlbHRhWDpudW1iZXIgPSAwO1xuICAgICAgICAvL1xuICAgICAgICBpZiggbW92ZVN0YXRlID09ICdyaWdodCcgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oMSk7XG4gICAgICAgICAgICBkZWx0YVggPSB0aGlzLnNwZWVkO1xuICAgICAgICB9ZWxzZSBpZiggbW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICBkZWx0YVggPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgfWVsc2UgaWYoIG1vdmVTdGF0ZSA9PSAnaWRsZScgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCdpZGxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsZXIudXBkYXRlKCBtb3ZlU3RhdGUsIHRoaXMuZml4ZWRNYXAuZ2V0TWFwUG9zaXRpb24oKSApO1xuICAgICAgICAvLyB0aGlzLmZsZXhNYXAudXBkYXRlKCBkZWx0YVggKVxuICAgICAgICB0aGlzLmZpeGVkTWFwLnVwZGF0ZSggZGVsdGFYIClcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KGRlbHRhWCk7XG5cbiAgICAgICAgaWYoIHRoaXMuZGVidWdUZXh0ICl7XG4gICAgICAgICAgICB0aGlzLmRlYnVnVGV4dC5zZXRUZXh0KHRoaXMuZml4ZWRNYXAuY3VycmVudFgudG9TdHJpbmcoKSArIFwiIC8gXCIgKyB0aGlzLmZpeGVkTWFwLm1hcExlbmd0aC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlNjZW5lIiwiR2FtZUxpYiIsIk1vdmVDb250cm9sbGVyIiwiUGxheWVyQXZhdGFyIiwiRml4ZWRNYXAiLCJWaWV3UG9zaXRpb24iLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiYWRkIiwiY29udGFpbmVyIiwibWlkWCIsImNhbWVyYUNvbnRyb2xsZXIiLCJDYW1lcmFDb250cm9sbGVyIiwiZml4ZWRNYXAiLCJwbGF5ZXJBdmF0YXIiLCJzZXRTY2FsZSIsImJvdHRvbVBhbmVsIiwicmVjdGFuZ2xlIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJjb2xvclBhbmVsQmciLCJzZXRPcmlnaW4iLCJib3R0b21QYW5lbEJvcmRlciIsImNvbG9yUGFuZWxCZ0RhcmsiLCJkZWJ1Z1RleHQiLCJ0ZXh0IiwibWlkWSIsImZvbnRTaXplIiwibW92ZUNvbnRyb2xsZXIiLCJlbWl0IiwidXBkYXRlU3RhcnRFbmRNb3ZlbWVudCIsImRlbHRhWCIsImdldE1hcFBvc2l0aW9uIiwiTUlERExFIiwiY2FuTW92ZSIsIngiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsInNwZWVkIiwic2V0VGV4dCIsImN1cnJlbnRYIiwidG9TdHJpbmciLCJtYXBMZW5ndGgiLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});