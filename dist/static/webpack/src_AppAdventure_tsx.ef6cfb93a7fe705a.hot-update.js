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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY);\n        this.playerAvatar.setScale(0.4);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        this.updateMap();\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateMap() {\n        console.log(this.distance);\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        let mapMove = -1 * this.distance;\n        this.sideMap.moveMap(mapMove);\n    }\n    updatePerspective(perspective) {\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        // Only when not end and start\n        // Player avatar move based on avatar facing\n        if (this.viewPerspective != perspective) {\n            this.viewPerspective = perspective;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            this.tweens.add({\n                targets: [\n                    this.playerAvatar,\n                    this.sideMap.container\n                ],\n                x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX,\n                ease: \"Cubic\",\n                duration: 1000\n            });\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (perspective == \"left\") {\n                        // this.playerAvatar.setX(GameLib.quater3X);\n                        // this.sideMap.container.setX(GameLib.quater3X);\n                        this.tweens.add({\n                            targets: [\n                                this.playerAvatar,\n                                this.sideMap.container\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X + 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    } else if (perspective == \"right\") {\n                        // this.playerAvatar.setX(GameLib.quaterX);\n                        // this.sideMap.container.setX(GameLib.quaterX);\n                        this.tweens.add({\n                            targets: [\n                                this.playerAvatar,\n                                this.sideMap.container\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX - 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    updateStartEndMovement() {\n        if (!this.checkIsReachEnd() && !this.checkIsReachStart()) {\n        // Move avatar based on distance instead\n        }\n    }\n    update() {\n        if (this.moveController.moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.distance += this.speed;\n            this.updateMap();\n            this.updatePerspective(\"right\");\n            this.updateStartEndMovement();\n        } else if (this.moveController.moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.distance -= this.speed;\n            this.distance = Math.max(0, this.distance);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n            this.updateStartEndMovement();\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    checkIsReachStart() {\n        return this.distance < this.minDistance + _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth;\n    }\n    checkIsReachEnd() {\n        return this.distance > this.maxDistance - _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth;\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 10000;\n        this.distance = 3000;\n        this.speed = 10;\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDbUI7QUFDdEI7QUFDNkI7QUFDSjtBQUNiO0FBRXpDLE1BQU1NLGtCQUFrQkwseUNBQUtBO0lBdUJoQ00sVUFBUztRQUNMLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFDbEIsRUFBRTtRQUNGLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsUUFBUTtJQUM1QjtJQU9BQyxPQUFTQyxJQUFRLEVBQ2pCO1FBQ0ksV0FBVztRQUNYLElBQUlDLE1BQU0sSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ2IseURBQVksRUFBRUEseURBQVksRUFBRTtRQUN0RFcsSUFBSUssS0FBSyxHQUFHO1FBRVosSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUk7UUFDL0IsSUFBSSxDQUFDRixNQUFNLENBQUNHLGtCQUFrQixDQUFDO1FBRS9CLGFBQWE7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJbEIsK0RBQU9BLENBQUMsSUFBSSxFQUFDSCx5REFBWSxFQUFFO1FBRTlDLGdCQUFnQjtRQUNoQixJQUFJLENBQUNzQixZQUFZLEdBQUcsSUFBSXBCLHVFQUFZQSxDQUFFLElBQUksRUFBRUYseURBQVksRUFBRUEseURBQVk7UUFDdEUsSUFBSSxDQUFDc0IsWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFFM0Isc0JBQXNCO1FBQ3RCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxTQUFTLENBQUN6Qix5REFBWSxFQUFDQSxpRUFBb0IsRUFBQ0EsZ0VBQW1CLEVBQUMsS0FBSUEsaUVBQW9CLEVBQUU2QixTQUFTLENBQUMsS0FBSTtRQUNwSSxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDekIseURBQVksRUFBQ0EsaUVBQW9CLEdBQUMsS0FBSUEsZ0VBQW1CLEVBQUMsSUFBR0EscUVBQXdCO1FBRWpJLDhDQUE4QztRQUM5QyxJQUFJLENBQUNnQyxjQUFjLEdBQUcsSUFBSS9CLHlFQUFjQSxDQUFFLElBQUksRUFBRUQseURBQVksRUFBRUEsaUVBQW9CLEdBQUc7UUFFckYsSUFBSSxDQUFDaUMsU0FBUztRQUVkbkMsK0NBQVFBLENBQUNvQyxJQUFJLENBQUMsdUJBQXVCLElBQUk7SUFDN0M7SUFFQUQsWUFBVztRQUNQRSxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxRQUFRO1FBQ3pCLCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLElBQUs7UUFDL0IsSUFBSSxJQUFJLENBQUNDLGVBQWUsSUFBSztRQUU3QixJQUFJQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUNILFFBQVE7UUFDaEMsSUFBSSxDQUFDaEIsT0FBTyxDQUFDb0IsT0FBTyxDQUFDRDtJQUN6QjtJQUVBRSxrQkFBbUJDLFdBQW1CLEVBQUU7UUFDcEMsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDTCxpQkFBaUIsSUFBSztRQUMvQixJQUFJLElBQUksQ0FBQ0MsZUFBZSxJQUFLO1FBRTdCLDhCQUE4QjtRQUM5Qiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUNLLGVBQWUsSUFBSUQsYUFBYTtZQUNyQyxJQUFJLENBQUNDLGVBQWUsR0FBR0Q7WUFDdkIsSUFBSSxDQUFDRSxvQkFBb0IsR0FBRztZQUM1QixJQUFJLENBQUNDLG9CQUFvQixHQUFHO1lBRTVCLElBQUksQ0FBQ0MsTUFBTSxDQUFDbkMsR0FBRyxDQUFDO2dCQUNab0MsU0FBUztvQkFBQyxJQUFJLENBQUMxQixZQUFZO29CQUFDLElBQUksQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUztpQkFBQztnQkFDbkRDLEdBQUdsRCx5REFBWTtnQkFDZm1ELE1BQU07Z0JBQ05DLFVBQVU7WUFDZDtRQUNKLE9BQUs7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDTixvQkFBb0IsRUFBRTtnQkFDNUIsSUFBSSxDQUFDRCxvQkFBb0IsSUFBSTtnQkFDN0IsSUFBSSxJQUFJLENBQUNBLG9CQUFvQixHQUFHLElBQUksQ0FBQ1Esd0JBQXdCLEVBQUU7b0JBQzNELElBQUlWLGVBQWUsUUFBUTt3QkFDdkIsNENBQTRDO3dCQUM1QyxpREFBaUQ7d0JBRWpELElBQUksQ0FBQ0ksTUFBTSxDQUFDbkMsR0FBRyxDQUFDOzRCQUNab0MsU0FBUztnQ0FBQyxJQUFJLENBQUMxQixZQUFZO2dDQUFDLElBQUksQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUzs2QkFBQzs0QkFDbkRDLEdBQUdsRCw2REFBZ0IsR0FBRzs0QkFDdEJtRCxNQUFNOzRCQUNOQyxVQUFVO3dCQUNkO29CQUNKLE9BQU0sSUFBSVQsZUFBZSxTQUFTO3dCQUM5QiwyQ0FBMkM7d0JBQzNDLGdEQUFnRDt3QkFFaEQsSUFBSSxDQUFDSSxNQUFNLENBQUNuQyxHQUFHLENBQUM7NEJBQ1pvQyxTQUFTO2dDQUFDLElBQUksQ0FBQzFCLFlBQVk7Z0NBQUMsSUFBSSxDQUFDRCxPQUFPLENBQUM0QixTQUFTOzZCQUFDOzRCQUNuREMsR0FBR2xELDREQUFlLEdBQUc7NEJBQ3JCbUQsTUFBTTs0QkFDTkMsVUFBVTt3QkFDZDtvQkFDSjtvQkFFQSxJQUFJLENBQUNOLG9CQUFvQixHQUFHO2dCQUNoQztZQUNKO1FBQ0o7SUFDSjtJQUVBVSx5QkFBd0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ2pCLGVBQWUsTUFBTSxDQUFDLElBQUksQ0FBQ0QsaUJBQWlCLElBQUk7UUFDdEQsd0NBQXdDO1FBQzVDO0lBQ0o7SUFFQW1CLFNBQVE7UUFDSixJQUFJLElBQUksQ0FBQ3pCLGNBQWMsQ0FBQzBCLFNBQVMsSUFBSSxTQUFTO1lBQzFDLElBQUksQ0FBQ3BDLFlBQVksQ0FBQ3FDLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUNyQyxZQUFZLENBQUNzQyxZQUFZLENBQUM7WUFDL0IsSUFBSSxDQUFDdkIsUUFBUSxJQUFJLElBQUksQ0FBQ3dCLEtBQUs7WUFDM0IsSUFBSSxDQUFDNUIsU0FBUztZQUNkLElBQUksQ0FBQ1MsaUJBQWlCLENBQUM7WUFDdkIsSUFBSSxDQUFDYyxzQkFBc0I7UUFDL0IsT0FBTSxJQUFJLElBQUksQ0FBQ3hCLGNBQWMsQ0FBQzBCLFNBQVMsSUFBSSxRQUFRO1lBQy9DLElBQUksQ0FBQ3BDLFlBQVksQ0FBQ3FDLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUNyQyxZQUFZLENBQUNzQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUN2QixRQUFRLElBQUksSUFBSSxDQUFDd0IsS0FBSztZQUMzQixJQUFJLENBQUN4QixRQUFRLEdBQUd5QixLQUFLQyxHQUFHLENBQUMsR0FBRSxJQUFJLENBQUMxQixRQUFRO1lBQ3hDLElBQUksQ0FBQ0osU0FBUztZQUNkLElBQUksQ0FBQ1MsaUJBQWlCLENBQUM7WUFDdkIsSUFBSSxDQUFDYyxzQkFBc0I7UUFDL0IsT0FBTSxJQUFJLElBQUksQ0FBQ3hCLGNBQWMsQ0FBQzBCLFNBQVMsSUFBSSxRQUFRO1lBQy9DLElBQUksQ0FBQ3BDLFlBQVksQ0FBQ3FDLGNBQWMsQ0FBQztRQUNyQztJQUNKO0lBRUFyQixvQkFBMkI7UUFDdkIsT0FBUSxJQUFJLENBQUNELFFBQVEsR0FBRyxJQUFJLENBQUMyQixXQUFXLEdBQUdoRSxnRUFBbUI7SUFDbEU7SUFFQXVDLGtCQUF5QjtRQUNyQixPQUFRLElBQUksQ0FBQ0YsUUFBUSxHQUFHLElBQUksQ0FBQzRCLFdBQVcsR0FBR2pFLGdFQUFtQjtJQUNsRTtJQTlIQWtFLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUE3QlZDLGNBQXVCO1FBVXZCLEVBQUU7YUFDRkgsY0FBc0I7YUFDdEJDLGNBQXNCO2FBQ3RCNUIsV0FBbUI7YUFDbkJ3QixRQUFnQjtRQUNoQixFQUFFO2FBQ0ZqQixrQkFBMEI7YUFHMUJTLDJCQUFtQztJQVduQztBQTRISiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IE1vdmVDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBTaWRlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL1NpZGVNYXAnO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIHNpZGVNYXA6IFNpZGVNYXBcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMFxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSAxMDAwMFxuICAgIGRpc3RhbmNlOiBudW1iZXIgPSAzMDAwXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwXG4gICAgLy9cbiAgICB2aWV3UGVyc3BlY3RpdmU6IHN0cmluZyA9ICdkZWZhdWx0J1xuICAgIHZpZXdQZXJzcGVjdGl2ZUFwcGx5OiBib29sZWFuXG4gICAgdmlld1BlcnNwZWN0aXZlVmFsdWU6IG51bWJlclxuICAgIHZpZXdQZXJzcGVjdGl2ZVRocmVzaG9sZDogbnVtYmVyID0gMTAwXG5cbiAgICBwcmVsb2FkKCl7XG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWYxJywgJy9yZWYvcmVmMS5wbmcnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0NpdHlTY2VuZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6YW55IClcbiAgICB7XG4gICAgICAgIC8vIEFkZCBSZWYgXG4gICAgICAgIGxldCByZWYgPSB0aGlzLmFkZC5zcHJpdGUoR2FtZUxpYi5taWRYLCBHYW1lTGliLm1pZFksICdyZWYxJyk7XG4gICAgICAgIHJlZi5hbHBoYSA9IDAuNVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZmZmZmZmKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5zaWRlTWFwID0gbmV3IFNpZGVNYXAodGhpcyxHYW1lTGliLm1pZFgsIDEwODApO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSk7XG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldFNjYWxlKDAuNCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICAvLyBDcmVhdGUgUGxheWVyIENvbnRyb2xsZXIgYW5kIExpbmsgdG8gQXZhdGFyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgTW92ZUNvbnRyb2xsZXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXAoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXN0YW5jZSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHJlYWNoIGVuZCwgb25seSB3b3JrIGluIG1pZGRsZSBwYXJ0XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaFN0YXJ0KCkgKSByZXR1cm47XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXBNb3ZlID0gLTEgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICB0aGlzLnNpZGVNYXAubW92ZU1hcChtYXBNb3ZlKTtcbiAgICB9ICAgIFxuXG4gICAgdXBkYXRlUGVyc3BlY3RpdmUoIHBlcnNwZWN0aXZlOiBzdHJpbmcgKXtcbiAgICAgICAgLy8gQ2hlY2sgaWYgcmVhY2ggZW5kLCBvbmx5IHdvcmsgaW4gbWlkZGxlIHBhcnRcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApIHJldHVybjtcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoRW5kKCkgKSByZXR1cm47XG5cbiAgICAgICAgLy8gT25seSB3aGVuIG5vdCBlbmQgYW5kIHN0YXJ0XG4gICAgICAgIC8vIFBsYXllciBhdmF0YXIgbW92ZSBiYXNlZCBvbiBhdmF0YXIgZmFjaW5nXG4gICAgICAgIGlmKCB0aGlzLnZpZXdQZXJzcGVjdGl2ZSAhPSBwZXJzcGVjdGl2ZSApe1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLnBsYXllckF2YXRhcix0aGlzLnNpZGVNYXAuY29udGFpbmVyXSxcbiAgICAgICAgICAgICAgICB4OiBHYW1lTGliLm1pZFgsXG4gICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZiggIXRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlICs9IDE7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgPiB0aGlzLnZpZXdQZXJzcGVjdGl2ZVRocmVzaG9sZCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggcGVyc3BlY3RpdmUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckF2YXRhci5zZXRYKEdhbWVMaWIucXVhdGVyM1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaWRlTWFwLmNvbnRhaW5lci5zZXRYKEdhbWVMaWIucXVhdGVyM1gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLnBsYXllckF2YXRhcix0aGlzLnNpZGVNYXAuY29udGFpbmVyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBHYW1lTGliLnF1YXRlcjNYICsgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoIHBlcnNwZWN0aXZlID09ICdyaWdodCcgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyQXZhdGFyLnNldFgoR2FtZUxpYi5xdWF0ZXJYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2lkZU1hcC5jb250YWluZXIuc2V0WChHYW1lTGliLnF1YXRlclgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLnBsYXllckF2YXRhcix0aGlzLnNpZGVNYXAuY29udGFpbmVyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBHYW1lTGliLnF1YXRlclggLSA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiAnQ3ViaWMnLCAgICAgICAvLyAnQ3ViaWMnLCAnRWxhc3RpYycsICdCb3VuY2UnLCAnQmFjaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhcnRFbmRNb3ZlbWVudCgpe1xuICAgICAgICBpZiggIXRoaXMuY2hlY2tJc1JlYWNoRW5kKCkgJiYgIXRoaXMuY2hlY2tJc1JlYWNoU3RhcnQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKDEpO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc3BlY3RpdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoMCx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlKCdsZWZ0Jyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdpZGxlJyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ2lkbGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaFN0YXJ0KCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuICh0aGlzLmRpc3RhbmNlIDwgdGhpcy5taW5EaXN0YW5jZSArIEdhbWVMaWIuc2NyZWVuV2lkdGgpO1xuICAgIH1cblxuICAgIGNoZWNrSXNSZWFjaEVuZCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiAodGhpcy5kaXN0YW5jZSA+IHRoaXMubWF4RGlzdGFuY2UgLSBHYW1lTGliLnNjcmVlbldpZHRoKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIlNpZGVNYXAiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJyZWYiLCJhZGQiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSIsImFscGhhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzaWRlTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwibW92ZUNvbnRyb2xsZXIiLCJ1cGRhdGVNYXAiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsImRpc3RhbmNlIiwiY2hlY2tJc1JlYWNoU3RhcnQiLCJjaGVja0lzUmVhY2hFbmQiLCJtYXBNb3ZlIiwibW92ZU1hcCIsInVwZGF0ZVBlcnNwZWN0aXZlIiwicGVyc3BlY3RpdmUiLCJ2aWV3UGVyc3BlY3RpdmUiLCJ2aWV3UGVyc3BlY3RpdmVWYWx1ZSIsInZpZXdQZXJzcGVjdGl2ZUFwcGx5IiwidHdlZW5zIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsIngiLCJlYXNlIiwiZHVyYXRpb24iLCJ2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQiLCJxdWF0ZXIzWCIsInF1YXRlclgiLCJ1cGRhdGVTdGFydEVuZE1vdmVtZW50IiwidXBkYXRlIiwibW92ZVN0YXRlIiwic2V0QXZhdGFyU3RhdGUiLCJzZXREaXJlY3Rpb24iLCJzcGVlZCIsIk1hdGgiLCJtYXgiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiY29uc3RydWN0b3IiLCJyZW5kZXJEZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});