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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityScene: function() { return /* binding */ CityScene; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/MoveController */ \"./src/adventure/components/Player/MoveController.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass CityScene extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.setPath(\"assets\");\n        //\n        this.load.image(\"ref1\", \"/ref/ref1.png\");\n    }\n    create(data) {\n        // Add Ref \n        let ref = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY, \"ref1\");\n        ref.alpha = 0.5;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xffffff);\n        // Render Map\n        this.sideMap = new _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 1080);\n        // Render Avatar\n        this.playerAvatar = new _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midY);\n        this.playerAvatar.setScale(0.4);\n        // Render Bottom Panel\n        this.bottomPanel = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBg).setOrigin(0.5, 1);\n        this.bottomPanelBorder = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 900, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, 20, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].colorPanelBgDark);\n        // Create Player Controller and Link to Avatar\n        this.moveController = new _components_Player_MoveController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 300);\n        this.updateMap();\n        this.prepareTween();\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    prepareTween() {\n        this.tweenScrollLeft = this.tweens.add({\n            targets: [\n                this.playerAvatar,\n                this.sideMap.container\n            ],\n            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X,\n            ease: \"Cubic\",\n            duration: 500\n        });\n        this.tweenScrollRight = this.tweens.add({\n            targets: [\n                this.playerAvatar,\n                this.sideMap.container\n            ],\n            x: _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX,\n            ease: \"Cubic\",\n            duration: 500\n        });\n    }\n    updateMap() {\n        console.log(this.distance);\n        let mapMove = -1 * this.distance;\n        this.sideMap.moveMap(mapMove);\n    }\n    updatePerspective(perspective) {\n        if (this.viewPerspective != perspective) {\n            this.viewPerspective = perspective;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (perspective == \"left\") {\n                        this.playerAvatar.setX(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X);\n                        this.sideMap.container.setX(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3X);\n                    } else if (perspective == \"right\") {\n                        this.playerAvatar.setX(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX);\n                        this.sideMap.container.setX(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quaterX);\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    update() {\n        if (this.moveController.moveState == \"right\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(1);\n            this.distance += this.speed;\n            this.updateMap();\n            this.updatePerspective(\"right\");\n        } else if (this.moveController.moveState == \"left\") {\n            this.playerAvatar.setAvatarState(\"walk\");\n            this.playerAvatar.setDirection(-1);\n            this.distance -= this.speed;\n            this.updateMap();\n            this.updatePerspective(\"left\");\n        } else if (this.moveController.moveState == \"idle\") {\n            this.playerAvatar.setAvatarState(\"idle\");\n        }\n    }\n    constructor(){\n        super(\"CityScene\");\n        this.renderDebug = true;\n        //\n        this.distance = 1000;\n        this.speed = 10;\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM3QixTQUFTO1lBQ2QsSUFBSSxDQUFDa0IsaUJBQWlCLENBQUM7UUFDM0IsT0FBTSxJQUFJLElBQUksQ0FBQ25CLGNBQWMsQ0FBQzJCLFNBQVMsSUFBSSxRQUFRO1lBQy9DLElBQUksQ0FBQ3JDLFlBQVksQ0FBQ3NDLGNBQWMsQ0FBQztRQUNyQztJQUNKO0lBbEdBRyxhQUNBO1FBQ0ksS0FBSyxDQUFDO2FBN0JWQyxjQUF1QjtRQVV2QixFQUFFO2FBQ0ZoQixXQUFtQjthQUNuQmMsUUFBZ0I7UUFDaEIsRUFBRTthQUNGVCxrQkFBMEI7YUFHMUJHLDJCQUFtQztJQWFuQztBQWdHSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9DaXR5U2NlbmUudHM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IEdhbWUsIEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IE1vdmVDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCBTaWRlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwL1NpZGVNYXAnO1xuXG5leHBvcnQgY2xhc3MgQ2l0eVNjZW5lIGV4dGVuZHMgU2NlbmVcbntcbiAgICByZW5kZXJEZWJ1ZzogYm9vbGVhbiA9IHRydWVcbiAgICAvL1xuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgbW92ZUNvbnRyb2xsZXI6IE1vdmVDb250cm9sbGVyXG4gICAgcGxheWVyQXZhdGFyOiBQbGF5ZXJBdmF0YXJcbiAgICAvL1xuICAgIHNpZGVNYXA6IFNpZGVNYXBcbiAgICAvL1xuICAgIGJvdHRvbVBhbmVsQm9yZGVyOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBib3R0b21QYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBkaXN0YW5jZTogbnVtYmVyID0gMTAwMFxuICAgIHNwZWVkOiBudW1iZXIgPSAxMFxuICAgIC8vXG4gICAgdmlld1BlcnNwZWN0aXZlOiBzdHJpbmcgPSAnZGVmYXVsdCdcbiAgICB2aWV3UGVyc3BlY3RpdmVBcHBseTogYm9vbGVhblxuICAgIHZpZXdQZXJzcGVjdGl2ZVZhbHVlOiBudW1iZXJcbiAgICB2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQ6IG51bWJlciA9IDEwMFxuICAgIHR3ZWVuU2Nyb2xsTGVmdDogVHdlZW5zLlR3ZWVuXG4gICAgdHdlZW5TY3JvbGxSaWdodDogVHdlZW5zLlR3ZWVuXG5cbiAgICBwcmVsb2FkKCl7XG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWYxJywgJy9yZWYvcmVmMS5wbmcnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0NpdHlTY2VuZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6YW55IClcbiAgICB7XG4gICAgICAgIC8vIEFkZCBSZWYgXG4gICAgICAgIGxldCByZWYgPSB0aGlzLmFkZC5zcHJpdGUoR2FtZUxpYi5taWRYLCBHYW1lTGliLm1pZFksICdyZWYxJyk7XG4gICAgICAgIHJlZi5hbHBoYSA9IDAuNVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZmZmZmZmKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBNYXBcbiAgICAgICAgdGhpcy5zaWRlTWFwID0gbmV3IFNpZGVNYXAodGhpcyxHYW1lTGliLm1pZFgsIDEwODApO1xuXG4gICAgICAgIC8vIFJlbmRlciBBdmF0YXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIgPSBuZXcgUGxheWVyQXZhdGFyKCB0aGlzLCBHYW1lTGliLm1pZFgsIEdhbWVMaWIubWlkWSk7XG4gICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldFNjYWxlKDAuNCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIEJvdHRvbSBQYW5lbFxuICAgICAgICB0aGlzLmJvdHRvbVBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIubWlkWCxHYW1lTGliLnNjcmVlbkhlaWdodCxHYW1lTGliLnNjcmVlbldpZHRoLDkwMCxHYW1lTGliLmNvbG9yUGFuZWxCZykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5ib3R0b21QYW5lbEJvcmRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtOTAwLEdhbWVMaWIuc2NyZWVuV2lkdGgsMjAsR2FtZUxpYi5jb2xvclBhbmVsQmdEYXJrKTtcblxuICAgICAgICAvLyBDcmVhdGUgUGxheWVyIENvbnRyb2xsZXIgYW5kIExpbmsgdG8gQXZhdGFyXG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xsZXIgPSBuZXcgTW92ZUNvbnRyb2xsZXIoIHRoaXMsIEdhbWVMaWIubWlkWCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVR3ZWVuKCk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHByZXBhcmVUd2Vlbigpe1xuICAgICAgICB0aGlzLnR3ZWVuU2Nyb2xsTGVmdCA9IHRoaXMudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5wbGF5ZXJBdmF0YXIsdGhpcy5zaWRlTWFwLmNvbnRhaW5lcl0sXG4gICAgICAgICAgICB4OiBHYW1lTGliLnF1YXRlcjNYLFxuICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnR3ZWVuU2Nyb2xsUmlnaHQgPSB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMucGxheWVyQXZhdGFyLHRoaXMuc2lkZU1hcC5jb250YWluZXJdLFxuICAgICAgICAgICAgeDogR2FtZUxpYi5xdWF0ZXJYLFxuICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXAoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXN0YW5jZSk7XG4gICAgICAgIGxldCBtYXBNb3ZlID0gLTEgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICB0aGlzLnNpZGVNYXAubW92ZU1hcChtYXBNb3ZlKTtcbiAgICB9ICAgIFxuXG4gICAgdXBkYXRlUGVyc3BlY3RpdmUoIHBlcnNwZWN0aXZlOiBzdHJpbmcgKXtcbiAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlICE9IHBlcnNwZWN0aXZlICl7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlO1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoICF0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ICl7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlID4gdGhpcy52aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHBlcnNwZWN0aXZlID09ICdsZWZ0JyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0WChHYW1lTGliLnF1YXRlcjNYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZU1hcC5jb250YWluZXIuc2V0WChHYW1lTGliLnF1YXRlcjNYKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBwZXJzcGVjdGl2ZSA9PSAncmlnaHQnICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRYKEdhbWVMaWIucXVhdGVyWCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZGVNYXAuY29udGFpbmVyLnNldFgoR2FtZUxpYi5xdWF0ZXJYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0QXZhdGFyU3RhdGUoJ3dhbGsnKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldERpcmVjdGlvbigxKTtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlKCdyaWdodCcpO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5tb3ZlQ29udHJvbGxlci5tb3ZlU3RhdGUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zZXRBdmF0YXJTdGF0ZSgnd2FsaycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXIuc2V0RGlyZWN0aW9uKC0xKTtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNwZWN0aXZlKCdsZWZ0Jyk7XG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLm1vdmVDb250cm9sbGVyLm1vdmVTdGF0ZSA9PSAnaWRsZScgKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyLnNldEF2YXRhclN0YXRlKCdpZGxlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJNb3ZlQ29udHJvbGxlciIsIlBsYXllckF2YXRhciIsIlNpZGVNYXAiLCJDaXR5U2NlbmUiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJpbWFnZSIsImNyZWF0ZSIsImRhdGEiLCJyZWYiLCJhZGQiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSIsImFscGhhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzaWRlTWFwIiwicGxheWVyQXZhdGFyIiwic2V0U2NhbGUiLCJib3R0b21QYW5lbCIsInJlY3RhbmdsZSIsInNjcmVlbkhlaWdodCIsInNjcmVlbldpZHRoIiwiY29sb3JQYW5lbEJnIiwic2V0T3JpZ2luIiwiYm90dG9tUGFuZWxCb3JkZXIiLCJjb2xvclBhbmVsQmdEYXJrIiwibW92ZUNvbnRyb2xsZXIiLCJ1cGRhdGVNYXAiLCJwcmVwYXJlVHdlZW4iLCJlbWl0IiwidHdlZW5TY3JvbGxMZWZ0IiwidHdlZW5zIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsIngiLCJxdWF0ZXIzWCIsImVhc2UiLCJkdXJhdGlvbiIsInR3ZWVuU2Nyb2xsUmlnaHQiLCJxdWF0ZXJYIiwiY29uc29sZSIsImxvZyIsImRpc3RhbmNlIiwibWFwTW92ZSIsIm1vdmVNYXAiLCJ1cGRhdGVQZXJzcGVjdGl2ZSIsInBlcnNwZWN0aXZlIiwidmlld1BlcnNwZWN0aXZlIiwidmlld1BlcnNwZWN0aXZlVmFsdWUiLCJ2aWV3UGVyc3BlY3RpdmVBcHBseSIsInZpZXdQZXJzcGVjdGl2ZVRocmVzaG9sZCIsInNldFgiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJzZXRBdmF0YXJTdGF0ZSIsInNldERpcmVjdGlvbiIsInNwZWVkIiwiY29uc3RydWN0b3IiLCJyZW5kZXJEZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/scenes/CityScene.ts\n"));

/***/ })

});