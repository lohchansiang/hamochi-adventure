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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Prepare World Container\n        this.worldContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 0, 0);\n        this.worldContainer.add(this.sideMap.container);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 0, -150);\n        this.playerAvatar.setScale(0.4);\n        this.worldContainer.add(this.playerAvatar);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        this.updateMap();\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateMap() {\n        console.log(this.distance);\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        let mapMove = -1 * this.distance;\n        this.sideMap.moveMap(mapMove);\n    }\n    updatePerspective(perspective) {\n        // Check if reach end, only work in middle part\n        if (this.checkIsReachStart()) return;\n        if (this.checkIsReachEnd()) return;\n        // Only when not end and start\n        // Player avatar move based on avatar facing\n        if (this.viewPerspective != perspective) {\n            this.viewPerspective = perspective;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            this.tweens.add({\n                targets: [\n                    this.worldContainer\n                ],\n                x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX,\n                ease: \"Cubic\",\n                duration: 1000\n            });\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (perspective == \"left\") {\n                        // this.playerAvatar.setX(GameLib.quater3X);\n                        // this.sideMap.container.setX(GameLib.quater3X);\n                        this.tweens.add({\n                            targets: [\n                                this.worldContainer\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X + 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    } else if (perspective == \"right\") {\n                        // this.playerAvatar.setX(GameLib.quaterX);\n                        // this.sideMap.container.setX(GameLib.quaterX);\n                        this.tweens.add({\n                            targets: [\n                                this.worldContainer\n                            ],\n                            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX - 50,\n                            ease: \"Cubic\",\n                            duration: 1000\n                        });\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    updateStartEndMovement(moveRate) {\n        if (this.checkIsReachEnd() || this.checkIsReachStart()) {\n            // Move avatar based on distance instead\n            if (this.distance > this.minDistance && this.distance < this.maxDistance) {\n                this.playerAvatar.x += moveRate;\n            }\n        }\n    }\n    update() {\n        if (this.moveController.moveState == \"right\") {\n            let moveRate = this.speed;\n            this.distance += moveRate;\n            this.distance = Math.min(this.maxDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            let moveRate = -this.speed;\n            this.distance += moveRate;\n            this.distance = Math.max(this.minDistance, this.distance);\n            this.updateStartEndMovement(moveRate);\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    checkIsReachStart() {\n        return this.distance < this.minDistance + this.startEndThreshold;\n    }\n    checkIsReachEnd() {\n        return this.distance > this.maxDistance - this.startEndThreshold;\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 10000;\n        this.startEndThreshold = 600;\n        this.distance = 3000;\n        this.speed = 10;\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDbUI7QUFDdEI7QUFDNkI7QUFDSjtBQUNiO0FBRXpDLE1BQU1NLGtCQUFrQkwseUNBQUtBO0lBeUJoQ00sVUFBUztRQUNMLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFDbEIsRUFBRTtRQUNGLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsUUFBUTtJQUM1QjtJQU9BQyxPQUFTQyxJQUFRLEVBQ2pCO1FBQ0ksV0FBVztRQUNYLElBQUlDLE1BQU0sSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ2IseURBQVksRUFBRUEseURBQVksRUFBRTtRQUN0RFcsSUFBSUssS0FBSyxHQUFHO1FBRVosSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUk7UUFDL0IsSUFBSSxDQUFDRixNQUFNLENBQUNHLGtCQUFrQixDQUFDO1FBRS9CLDBCQUEwQjtRQUMxQixJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsU0FBUyxDQUFDdEIseURBQVksRUFBQztRQUV0RCxhQUFhO1FBQ2IsSUFBSSxDQUFDdUIsT0FBTyxHQUFHLElBQUlwQiwrREFBT0EsQ0FBQyxJQUFJLEVBQUMsR0FBRTtRQUNsQyxJQUFJLENBQUNrQixjQUFjLENBQUNULEdBQUcsQ0FBQyxJQUFJLENBQUNXLE9BQU8sQ0FBQ0QsU0FBUztRQUU5QyxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSXRCLHVFQUFZQSxDQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDc0IsWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDSixjQUFjLENBQUNULEdBQUcsQ0FBQyxJQUFJLENBQUNZLFlBQVk7UUFFekMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQ2QsR0FBRyxDQUFDZSxTQUFTLENBQUMzQix5REFBWSxFQUFDQSxpRUFBb0IsRUFBQ0EsZ0VBQW1CLEVBQUMsS0FBSUEsaUVBQW9CLEVBQUUrQixTQUFTLENBQUMsS0FBSTtRQUNwSSxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ3BCLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDM0IseURBQVksRUFBQ0EsaUVBQW9CLEdBQUMsS0FBSUEsZ0VBQW1CLEVBQUMsSUFBR0EscUVBQXdCO1FBRWpJLDhDQUE4QztRQUM5QyxJQUFJLENBQUNrQyxjQUFjLEdBQUcsSUFBSWpDLHlFQUFjQSxDQUFFLElBQUksRUFBRUQseURBQVksRUFBRUEsaUVBQW9CLEdBQUc7UUFFckYsSUFBSSxDQUFDbUMsU0FBUztRQUVkckMsK0NBQVFBLENBQUNzQyxJQUFJLENBQUMsdUJBQXVCLElBQUk7SUFDN0M7SUFFQUQsWUFBVztRQUNQRSxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxRQUFRO1FBQ3pCLCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLElBQUs7UUFDL0IsSUFBSSxJQUFJLENBQUNDLGVBQWUsSUFBSztRQUU3QixJQUFJQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUNILFFBQVE7UUFDaEMsSUFBSSxDQUFDaEIsT0FBTyxDQUFDb0IsT0FBTyxDQUFDRDtJQUN6QjtJQUVBRSxrQkFBbUJDLFdBQW1CLEVBQUU7UUFDcEMsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDTCxpQkFBaUIsSUFBSztRQUMvQixJQUFJLElBQUksQ0FBQ0MsZUFBZSxJQUFLO1FBRTdCLDhCQUE4QjtRQUM5Qiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUNLLGVBQWUsSUFBSUQsYUFBYTtZQUNyQyxJQUFJLENBQUNDLGVBQWUsR0FBR0Q7WUFDdkIsSUFBSSxDQUFDRSxvQkFBb0IsR0FBRztZQUM1QixJQUFJLENBQUNDLG9CQUFvQixHQUFHO1lBRTVCLElBQUksQ0FBQ0MsTUFBTSxDQUFDckMsR0FBRyxDQUFDO2dCQUNac0MsU0FBUztvQkFBQyxJQUFJLENBQUM3QixjQUFjO2lCQUFDO2dCQUM5QjhCLEdBQUduRCx5REFBWTtnQkFDZm9ELE1BQU07Z0JBQ05DLFVBQVU7WUFDZDtRQUNKLE9BQUs7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDTCxvQkFBb0IsRUFBRTtnQkFDNUIsSUFBSSxDQUFDRCxvQkFBb0IsSUFBSTtnQkFDN0IsSUFBSSxJQUFJLENBQUNBLG9CQUFvQixHQUFHLElBQUksQ0FBQ08sd0JBQXdCLEVBQUU7b0JBQzNELElBQUlULGVBQWUsUUFBUTt3QkFDdkIsNENBQTRDO3dCQUM1QyxpREFBaUQ7d0JBRWpELElBQUksQ0FBQ0ksTUFBTSxDQUFDckMsR0FBRyxDQUFDOzRCQUNac0MsU0FBUztnQ0FBQyxJQUFJLENBQUM3QixjQUFjOzZCQUFDOzRCQUM5QjhCLEdBQUduRCw2REFBZ0IsR0FBRzs0QkFDdEJvRCxNQUFNOzRCQUNOQyxVQUFVO3dCQUNkO29CQUNKLE9BQU0sSUFBSVIsZUFBZSxTQUFTO3dCQUM5QiwyQ0FBMkM7d0JBQzNDLGdEQUFnRDt3QkFFaEQsSUFBSSxDQUFDSSxNQUFNLENBQUNyQyxHQUFHLENBQUM7NEJBQ1pzQyxTQUFTO2dDQUFDLElBQUksQ0FBQzdCLGNBQWM7NkJBQUM7NEJBQzlCOEIsR0FBR25ELDREQUFlLEdBQUc7NEJBQ3JCb0QsTUFBTTs0QkFDTkMsVUFBVTt3QkFDZDtvQkFDSjtvQkFFQSxJQUFJLENBQUNMLG9CQUFvQixHQUFHO2dCQUNoQztZQUNKO1FBQ0o7SUFDSjtJQUVBUyx1QkFBd0JDLFFBQWdCLEVBQUU7UUFDdEMsSUFBSSxJQUFJLENBQUNqQixlQUFlLE1BQU0sSUFBSSxDQUFDRCxpQkFBaUIsSUFBSTtZQUNwRCx3Q0FBd0M7WUFDeEMsSUFBSSxJQUFJLENBQUNELFFBQVEsR0FBRyxJQUFJLENBQUNvQixXQUFXLElBQUksSUFBSSxDQUFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQ3FCLFdBQVcsRUFBRTtnQkFDdEUsSUFBSSxDQUFDcEMsWUFBWSxDQUFDMkIsQ0FBQyxJQUFJTztZQUMzQjtRQUNKO0lBQ0o7SUFFQUcsU0FBUTtRQUNKLElBQUksSUFBSSxDQUFDM0IsY0FBYyxDQUFDNEIsU0FBUyxJQUFJLFNBQVM7WUFDMUMsSUFBSUosV0FBa0IsSUFBSSxDQUFDSyxLQUFLO1lBQ2hDLElBQUksQ0FBQ3hCLFFBQVEsSUFBSW1CO1lBQ2pCLElBQUksQ0FBQ25CLFFBQVEsR0FBR3lCLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLFdBQVcsRUFBQyxJQUFJLENBQUNyQixRQUFRO1lBQ3ZELElBQUksQ0FBQ2tCLHNCQUFzQixDQUFDQztZQUU1QixJQUFJLENBQUNsQyxZQUFZLENBQUMwQyxjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDMUMsWUFBWSxDQUFDMkMsWUFBWSxDQUFDO1lBQy9CLElBQUksQ0FBQ2hDLFNBQVM7WUFDZCxJQUFJLENBQUNTLGlCQUFpQixDQUFDO1FBQzNCLE9BQU0sSUFBSSxJQUFJLENBQUNWLGNBQWMsQ0FBQzRCLFNBQVMsSUFBSSxRQUFRO1lBQy9DLElBQUlKLFdBQWtCLENBQUMsSUFBSSxDQUFDSyxLQUFLO1lBQ2pDLElBQUksQ0FBQ3hCLFFBQVEsSUFBSW1CO1lBQ2pCLElBQUksQ0FBQ25CLFFBQVEsR0FBR3lCLEtBQUtJLEdBQUcsQ0FBQyxJQUFJLENBQUNULFdBQVcsRUFBQyxJQUFJLENBQUNwQixRQUFRO1lBQ3ZELElBQUksQ0FBQ2tCLHNCQUFzQixDQUFDQztZQUU1QixJQUFJLENBQUNsQyxZQUFZLENBQUMwQyxjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDMUMsWUFBWSxDQUFDMkMsWUFBWSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDaEMsU0FBUztZQUNkLElBQUksQ0FBQ1MsaUJBQWlCLENBQUM7UUFDM0IsT0FBTSxJQUFJLElBQUksQ0FBQ1YsY0FBYyxDQUFDNEIsU0FBUyxJQUFJLFFBQVE7WUFDL0MsSUFBSSxDQUFDdEMsWUFBWSxDQUFDMEMsY0FBYyxDQUFDO1FBQ3JDO0lBQ0o7SUFFQTFCLG9CQUEyQjtRQUN2QixPQUFPLElBQUksQ0FBQ0QsUUFBUSxHQUFJLElBQUksQ0FBQ29CLFdBQVcsR0FBRyxJQUFJLENBQUNVLGlCQUFpQjtJQUNyRTtJQUVBNUIsa0JBQXlCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDRixRQUFRLEdBQUksSUFBSSxDQUFDcUIsV0FBVyxHQUFHLElBQUksQ0FBQ1MsaUJBQWlCO0lBQ3JFO0lBM0lBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO2FBL0JWQyxjQUF1QjtRQVd2QixFQUFFO2FBQ0ZaLGNBQXNCO2FBQ3RCQyxjQUFzQjthQUN0QlMsb0JBQTRCO2FBQzVCOUIsV0FBbUI7YUFDbkJ3QixRQUFnQjtRQUNoQixFQUFFO2FBQ0ZqQixrQkFBMEI7YUFHMUJRLDJCQUFtQztJQVduQztBQXlJSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IE1vdmVDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBTaWRlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL1NpZGVNYXAnO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgd29ybGRDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG1vdmVDb250cm9sbGVyOiBNb3ZlQ29udHJvbGxlclxuICAgIHBsYXllckF2YXRhcjogUGxheWVyQXZhdGFyXG4gICAgLy9cbiAgICBzaWRlTWFwOiBTaWRlTWFwXG4gICAgLy9cbiAgICBib3R0b21QYW5lbEJvcmRlcjogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYm90dG9tUGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgbWluRGlzdGFuY2U6IG51bWJlciA9IDBcbiAgICBtYXhEaXN0YW5jZTogbnVtYmVyID0gMTAwMDBcbiAgICBzdGFydEVuZFRocmVzaG9sZDogbnVtYmVyID0gNjAwXG4gICAgZGlzdGFuY2U6IG51bWJlciA9IDMwMDBcbiAgICBzcGVlZDogbnVtYmVyID0gMTBcbiAgICAvL1xuICAgIHZpZXdQZXJzcGVjdGl2ZTogc3RyaW5nID0gJ2RlZmF1bHQnXG4gICAgdmlld1BlcnNwZWN0aXZlQXBwbHk6IGJvb2xlYW5cbiAgICB2aWV3UGVyc3BlY3RpdmVWYWx1ZTogbnVtYmVyXG4gICAgdmlld1BlcnNwZWN0aXZlVGhyZXNob2xkOiBudW1iZXIgPSAxMDBcblxuICAgIHByZWxvYWQoKXtcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZjEnLCAnL3JlZi9yZWYxLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2l0eVNjZW5lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgLy8gQWRkIFJlZiBcbiAgICAgICAgbGV0IHJlZiA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSwgJ3JlZjEnKTtcbiAgICAgICAgcmVmLmFscGhhID0gMC41XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgV29ybGQgQ29udGFpbmVyXG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDEwODApO1xuXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5zaWRlTWFwID0gbmV3IFNpZGVNYXAodGhpcywwLDApO1xuICAgICAgICB0aGlzLndvcmxkQ29udGFpbmVyLmFkZCh0aGlzLnNpZGVNYXAuY29udGFpbmVyKTtcblxuICAgICAgICAvLyBSZW5kZXIgQXZhdGFyXG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyID0gbmV3IFBsYXllckF2YXRhciggdGhpcywgMCwgLTE1MCk7XG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldFNjYWxlKDAuNCk7XG4gICAgICAgIHRoaXMud29ybGRDb250YWluZXIuYWRkKHRoaXMucGxheWVyQXZhdGFyKVxuXG4gICAgICAgIC8vIFJlbmRlciBCb3R0b20gUGFuZWxcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbCA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQsR2FtZUxpYi5zY3JlZW5XaWR0aCw5MDAsR2FtZUxpYi5jb2xvclBhbmVsQmcpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMuYm90dG9tUGFuZWxCb3JkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTkwMCxHYW1lTGliLnNjcmVlbldpZHRoLDIwLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFBsYXllciBDb250cm9sbGVyIGFuZCBMaW5rIHRvIEF2YXRhclxuICAgICAgICB0aGlzLm1vdmVDb250cm9sbGVyID0gbmV3IE1vdmVDb250cm9sbGVyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMzAwICk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVNYXAoKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFwKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICAvLyBDaGVjayBpZiByZWFjaCBlbmQsIG9ubHkgd29yayBpbiBtaWRkbGUgcGFydFxuICAgICAgICBpZiggdGhpcy5jaGVja0lzUmVhY2hTdGFydCgpICkgcmV0dXJuO1xuICAgICAgICBpZiggdGhpcy5jaGVja0lzUmVhY2hFbmQoKSApIHJldHVybjtcblxuICAgICAgICBsZXQgbWFwTW92ZSA9IC0xICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgdGhpcy5zaWRlTWFwLm1vdmVNYXAobWFwTW92ZSk7XG4gICAgfSAgICBcblxuICAgIHVwZGF0ZVBlcnNwZWN0aXZlKCBwZXJzcGVjdGl2ZTogc3RyaW5nICl7XG4gICAgICAgIC8vIENoZWNrIGlmIHJlYWNoIGVuZCwgb25seSB3b3JrIGluIG1pZGRsZSBwYXJ0XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaFN0YXJ0KCkgKSByZXR1cm47XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrSXNSZWFjaEVuZCgpICkgcmV0dXJuO1xuXG4gICAgICAgIC8vIE9ubHkgd2hlbiBub3QgZW5kIGFuZCBzdGFydFxuICAgICAgICAvLyBQbGF5ZXIgYXZhdGFyIG1vdmUgYmFzZWQgb24gYXZhdGFyIGZhY2luZ1xuICAgICAgICBpZiggdGhpcy52aWV3UGVyc3BlY3RpdmUgIT0gcGVyc3BlY3RpdmUgKXtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmU7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZENvbnRhaW5lcl0sXG4gICAgICAgICAgICAgICAgeDogR2FtZUxpYi5taWRYLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdDdWJpYycsICAgICAgIC8vICdDdWJpYycsICdFbGFzdGljJywgJ0JvdW5jZScsICdCYWNrJ1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoICF0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ICl7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlID4gdGhpcy52aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHBlcnNwZWN0aXZlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJBdmF0YXIuc2V0WChHYW1lTGliLnF1YXRlcjNYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2lkZU1hcC5jb250YWluZXIuc2V0WChHYW1lTGliLnF1YXRlcjNYKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZENvbnRhaW5lcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogR2FtZUxpYi5xdWF0ZXIzWCArIDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdDdWJpYycsICAgICAgIC8vICdDdWJpYycsICdFbGFzdGljJywgJ0JvdW5jZScsICdCYWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBwZXJzcGVjdGl2ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckF2YXRhci5zZXRYKEdhbWVMaWIucXVhdGVyWCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNpZGVNYXAuY29udGFpbmVyLnNldFgoR2FtZUxpYi5xdWF0ZXJYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZENvbnRhaW5lcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogR2FtZUxpYi5xdWF0ZXJYIC0gNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXJ0RW5kTW92ZW1lbnQoIG1vdmVSYXRlOiBudW1iZXIgKXtcbiAgICAgICAgaWYoIHRoaXMuY2hlY2tJc1JlYWNoRW5kKCkgfHwgdGhpcy5jaGVja0lzUmVhY2hTdGFydCgpICl7XG4gICAgICAgICAgICAvLyBNb3ZlIGF2YXRhciBiYXNlZCBvbiBkaXN0YW5jZSBpbnN0ZWFkXG4gICAgICAgICAgICBpZiggdGhpcy5kaXN0YW5jZSA+IHRoaXMubWluRGlzdGFuY2UgJiYgdGhpcy5kaXN0YW5jZSA8IHRoaXMubWF4RGlzdGFuY2UgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci54ICs9IG1vdmVSYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICBsZXQgbW92ZVJhdGU6bnVtYmVyID0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gbW92ZVJhdGU7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSx0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhcnRFbmRNb3ZlbWVudChtb3ZlUmF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCd3YWxrJyk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXREaXJlY3Rpb24oMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgncmlnaHQnKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubW92ZUNvbnRyb2xsZXIubW92ZVN0YXRlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgbGV0IG1vdmVSYXRlOm51bWJlciA9IC10aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSArPSBtb3ZlUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbkRpc3RhbmNlLHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFydEVuZE1vdmVtZW50KG1vdmVSYXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigtMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzcGVjdGl2ZSgnbGVmdCcpO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ2lkbGUnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnaWRsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJc1JlYWNoU3RhcnQoKTpib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5kaXN0YW5jZSA8ICh0aGlzLm1pbkRpc3RhbmNlICsgdGhpcy5zdGFydEVuZFRocmVzaG9sZCk7XG4gICAgfVxuXG4gICAgY2hlY2tJc1JlYWNoRW5kKCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2UgPiAodGhpcy5tYXhEaXN0YW5jZSAtIHRoaXMuc3RhcnRFbmRUaHJlc2hvbGQpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlNjZW5lIiwiR2FtZUxpYiIsIk1vdmVDb250cm9sbGVyIiwiUGxheWVyQXZhdGFyIiwiU2lkZU1hcCIsIkNpdHlTY2VuZSIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsImltYWdlIiwiY3JlYXRlIiwiZGF0YSIsInJlZiIsImFkZCIsInNwcml0ZSIsIm1pZFgiLCJtaWRZIiwiYWxwaGEiLCJjYW1lcmEiLCJjYW1lcmFzIiwibWFpbiIsInNldEJhY2tncm91bmRDb2xvciIsIndvcmxkQ29udGFpbmVyIiwiY29udGFpbmVyIiwic2lkZU1hcCIsInBsYXllckF2YXRhciIsInNldFNjYWxlIiwiYm90dG9tUGFuZWwiLCJyZWN0YW5nbGUiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsImNvbG9yUGFuZWxCZyIsInNldE9yaWdpbiIsImJvdHRvbVBhbmVsQm9yZGVyIiwiY29sb3JQYW5lbEJnRGFyayIsIm1vdmVDb250cm9sbGVyIiwidXBkYXRlTWFwIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJkaXN0YW5jZSIsImNoZWNrSXNSZWFjaFN0YXJ0IiwiY2hlY2tJc1JlYWNoRW5kIiwibWFwTW92ZSIsIm1vdmVNYXAiLCJ1cGRhdGVQZXJzcGVjdGl2ZSIsInBlcnNwZWN0aXZlIiwidmlld1BlcnNwZWN0aXZlIiwidmlld1BlcnNwZWN0aXZlVmFsdWUiLCJ2aWV3UGVyc3BlY3RpdmVBcHBseSIsInR3ZWVucyIsInRhcmdldHMiLCJ4IiwiZWFzZSIsImR1cmF0aW9uIiwidmlld1BlcnNwZWN0aXZlVGhyZXNob2xkIiwicXVhdGVyM1giLCJxdWF0ZXJYIiwidXBkYXRlU3RhcnRFbmRNb3ZlbWVudCIsIm1vdmVSYXRlIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsInVwZGF0ZSIsIm1vdmVTdGF0ZSIsInNwZWVkIiwiTWF0aCIsIm1pbiIsInNldEF2YXRhclN0YXRlIiwic2V0RGlyZWN0aW9uIiwibWF4Iiwic3RhcnRFbmRUaHJlc2hvbGQiLCJjb25zdHJ1Y3RvciIsInJlbmRlckRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});