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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_UIMoveSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/UIMoveSlider */ \"./src/adventure/components/Player/UIMoveSlider.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_ViewPosController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/ViewPosController */ \"./src/adventure/components/Map/ViewPosController.ts\");\n/* harmony import */ var _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map/FixedMap */ \"./src/adventure/components/Map/FixedMap.ts\");\n/* harmony import */ var _components_Map_MapEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Map/MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n/* harmony import */ var _components_Player_PlayerEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Player/PlayerEnum */ \"./src/adventure/components/Player/PlayerEnum.ts\");\n\n\n\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');\n        // ref.alpha = 0.5\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        this.viewPosController = new _components_Map_ViewPosController__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, this.worldContainer);\n        // Render Map\n        // this.flexMap = new FlexMap(this,0,0);\n        // this.worldContainer.add(this.flexMap.container);\n        // this.flexMap.container.setVisible(false);\n        this.fixedMap = new _components_Map_FixedMap__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.fixedMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        this.debugText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY + 200, \"Debug Text\", {\n            fontSize: 40\n        }).setOrigin(0.5);\n        // Create Player Controller and Link to Avatar\n        this.moveSlider = new _components_Player_UIMoveSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateStartEndMovement(deltaX) {\n        if (this.fixedMap.getMapPosition() != _components_Map_MapEnum__WEBPACK_IMPORTED_MODULE_7__.MapPosition.MIDDLE && this.fixedMap.canMove()) {\n            this.playerAvatar.x += deltaX;\n        }\n    }\n    update() {\n        let moveState = this.moveSlider.moveState;\n        let deltaX = 0;\n        //\n        if (moveState == _components_Player_PlayerEnum__WEBPACK_IMPORTED_MODULE_8__.MoveState.RIGHT) {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            deltaX = this.speed;\n        } else if (moveState == _components_Player_PlayerEnum__WEBPACK_IMPORTED_MODULE_8__.MoveState.LEFT) {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            deltaX = -this.speed;\n        } else if (moveState == _components_Player_PlayerEnum__WEBPACK_IMPORTED_MODULE_8__.MoveState.IDLE) {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n        this.viewPosController.update(moveState, this.fixedMap.getMapPosition());\n        // this.flexMap.update( deltaX )\n        this.fixedMap.update(deltaX);\n        this.updateStartEndMovement(deltaX);\n        if (this.debugText) {\n            this.debugText.setText(this.fixedMap.getMovedX.toString() + \" / \" + this.fixedMap.getMovableLength.toString());\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.speed = 10;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQ3pCLFlBQVksQ0FBQzBCLFlBQVksQ0FBQztZQUMvQlQsU0FBUyxJQUFJLENBQUNVLEtBQUs7UUFDdkIsT0FBTSxJQUFJSixhQUFhekMsb0VBQVNBLENBQUM4QyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDNUIsWUFBWSxDQUFDeUIsY0FBYyxDQUFDO1lBQ2pDLElBQUksQ0FBQ3pCLFlBQVksQ0FBQzBCLFlBQVksQ0FBQyxDQUFDO1lBQ2hDVCxTQUFTLENBQUMsSUFBSSxDQUFDVSxLQUFLO1FBQ3hCLE9BQU0sSUFBSUosYUFBYXpDLG9FQUFTQSxDQUFDK0MsSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQzdCLFlBQVksQ0FBQ3lCLGNBQWMsQ0FBQztRQUNyQztRQUVBLElBQUksQ0FBQzNCLGlCQUFpQixDQUFDd0IsTUFBTSxDQUFFQyxXQUFXLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQ21CLGNBQWM7UUFDdEUsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ3VCLE1BQU0sQ0FBRUw7UUFDdEIsSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQ0M7UUFFNUIsSUFBSSxJQUFJLENBQUNQLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQ29CLE9BQU8sQ0FBQyxJQUFJLENBQUMvQixRQUFRLENBQUNnQyxTQUFTLENBQUNDLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQ2pDLFFBQVEsQ0FBQ2tDLGdCQUFnQixDQUFDRCxRQUFRO1FBQy9HO0lBQ0o7SUF6RUFFLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUExQlZDLGNBQXVCO1FBZXZCLEVBQUU7YUFDRlIsUUFBZ0I7SUFXaEI7QUF1RUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9zY2VuZXMvQ2l0eVNjZW5lLnRzPzIyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBVSU1vdmVTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvVUlNb3ZlU2xpZGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBWaWV3UG9zQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL01hcC9WaWV3UG9zQ29udHJvbGxlcic7XG5pbXBvcnQgRml4ZWRNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvRml4ZWRNYXAnO1xuaW1wb3J0IHsgTWFwUG9zaXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL01hcC9NYXBFbnVtJztcbmltcG9ydCB7IE1vdmVTdGF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllckVudW0nO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgd29ybGRDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG1vdmVTbGlkZXI6IFVJTW92ZVNsaWRlclxuICAgIHZpZXdQb3NDb250cm9sbGVyOiBWaWV3UG9zQ29udHJvbGxlclxuICAgIC8vXG4gICAgLy8gZmxleE1hcDogRmxleE1hcFxuICAgIGZpeGVkTWFwOiBGaXhlZE1hcFxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgZGVidWdUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBzcGVlZDogbnVtYmVyID0gMTBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgLy8gbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgLy8gcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuICAgICAgICB0aGlzLnZpZXdQb3NDb250cm9sbGVyID0gbmV3IFZpZXdQb3NDb250cm9sbGVyKHRoaXMsdGhpcy53b3JsZENvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIE1hcFxuICAgICAgICAvLyB0aGlzLmZsZXhNYXAgPSBuZXcgRmxleE1hcCh0aGlzLDAsMCk7XG4gICAgICAgIC8vIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMuZmxleE1hcC5jb250YWluZXIpO1xuICAgICAgICAvLyB0aGlzLmZsZXhNYXAuY29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZml4ZWRNYXAgPSBuZXcgRml4ZWRNYXAodGhpcywwLDApO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLmZpeGVkTWFwLmNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gUmVuZGVyIEF2YXRhclxuICAgICAgICB0aGlzLnBsYXllckF2YXRhciA9IG5ldyBQbGF5ZXJBdmF0YXIoIHRoaXMsIDAsIC0xNTApO1xuICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRTY2FsZSgwLjQpO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnBsYXllckF2YXRhcilcblxuICAgICAgICAvLyBSZW5kZXIgQm90dG9tIFBhbmVsXG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWwgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LEdhbWVMaWIuc2NyZWVuV2lkdGgsOTAwLEdhbWVMaWIuY29sb3JQYW5lbEJnKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsQm9yZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodC05MDAsR2FtZUxpYi5zY3JlZW5XaWR0aCwyMCxHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmspO1xuXG4gICAgICAgIHRoaXMuZGVidWdUZXh0ID0gdGhpcy5hZGQudGV4dCggR2FtZUxpYi5taWRYLCBHYW1lTGliLm1pZFkrMjAwLCdEZWJ1ZyBUZXh0Jyx7Zm9udFNpemU6NDB9KS5zZXRPcmlnaW4oMC41KTtcblxuICAgICAgICAvLyBDcmVhdGUgUGxheWVyIENvbnRyb2xsZXIgYW5kIExpbmsgdG8gQXZhdGFyXG4gICAgICAgIHRoaXMubW92ZVNsaWRlciA9IG5ldyBVSU1vdmVTbGlkZXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAgKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhcnRFbmRNb3ZlbWVudCggZGVsdGFYOiBudW1iZXIgKXtcbiAgICAgICAgaWYoIHRoaXMuZml4ZWRNYXAuZ2V0TWFwUG9zaXRpb24oKSAhPSBNYXBQb3NpdGlvbi5NSURETEUgJiYgdGhpcy5maXhlZE1hcC5jYW5Nb3ZlKCkgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnggKz0gZGVsdGFYO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGxldCBtb3ZlU3RhdGU6TW92ZVN0YXRlID0gdGhpcy5tb3ZlU2xpZGVyLm1vdmVTdGF0ZTtcbiAgICAgICAgbGV0IGRlbHRhWDpudW1iZXIgPSAwO1xuICAgICAgICAvL1xuICAgICAgICBpZiggbW92ZVN0YXRlID09IE1vdmVTdGF0ZS5SSUdIVCApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigxKTtcbiAgICAgICAgICAgIGRlbHRhWCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gTW92ZVN0YXRlLkxFRlQgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oLTEpO1xuICAgICAgICAgICAgZGVsdGFYID0gLXRoaXMuc3BlZWQ7XG4gICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gTW92ZVN0YXRlLklETEUgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCdpZGxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudmlld1Bvc0NvbnRyb2xsZXIudXBkYXRlKCBtb3ZlU3RhdGUsIHRoaXMuZml4ZWRNYXAuZ2V0TWFwUG9zaXRpb24oKSApO1xuICAgICAgICAvLyB0aGlzLmZsZXhNYXAudXBkYXRlKCBkZWx0YVggKVxuICAgICAgICB0aGlzLmZpeGVkTWFwLnVwZGF0ZSggZGVsdGFYIClcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KGRlbHRhWCk7XG5cbiAgICAgICAgaWYoIHRoaXMuZGVidWdUZXh0ICl7XG4gICAgICAgICAgICB0aGlzLmRlYnVnVGV4dC5zZXRUZXh0KHRoaXMuZml4ZWRNYXAuZ2V0TW92ZWRYLnRvU3RyaW5nKCkgKyBcIiAvIFwiICsgdGhpcy5maXhlZE1hcC5nZXRNb3ZhYmxlTGVuZ3RoLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiVUlNb3ZlU2xpZGVyIiwiUGxheWVyQXZhdGFyIiwiVmlld1Bvc0NvbnRyb2xsZXIiLCJGaXhlZE1hcCIsIk1hcFBvc2l0aW9uIiwiTW92ZVN0YXRlIiwiQ2l0eVNjZW5lIiwicHJlbG9hZCIsImxvYWQiLCJzZXRQYXRoIiwiaW1hZ2UiLCJjcmVhdGUiLCJkYXRhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJ3b3JsZENvbnRhaW5lciIsImFkZCIsImNvbnRhaW5lciIsIm1pZFgiLCJ2aWV3UG9zQ29udHJvbGxlciIsImZpeGVkTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwiZGVidWdUZXh0IiwidGV4dCIsIm1pZFkiLCJmb250U2l6ZSIsIm1vdmVTbGlkZXIiLCJlbWl0IiwidXBkYXRlU3RhcnRFbmRNb3ZlbWVudCIsImRlbHRhWCIsImdldE1hcFBvc2l0aW9uIiwiTUlERExFIiwiY2FuTW92ZSIsIngiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJSSUdIVCIsInNldEF2YXRhclN0YXRlIiwic2V0RGlyZWN0aW9uIiwic3BlZWQiLCJMRUZUIiwiSURMRSIsInNldFRleHQiLCJnZXRNb3ZlZFgiLCJ0b1N0cmluZyIsImdldE1vdmFibGVMZW5ndGgiLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});