"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/game/scenes/Battle.ts":
/*!***********************************!*\
  !*** ./src/game/scenes/Battle.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battle: function() { return /* binding */ Battle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardRepo */ \"./src/game/components/CardRepo.ts\");\n/* harmony import */ var _components_Opponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Opponent */ \"./src/game/components/Opponent.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/ModalSimpleMessage */ \"./src/game/modals/ModalSimpleMessage.ts\");\n/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Match */ \"./src/game/components/Match.ts\");\n/* harmony import */ var _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PlayerAttackBar */ \"./src/game/components/PlayerAttackBar.ts\");\n\n\n\n\n\n\n\n\n\n\n\nclass Battle extends phaser__WEBPACK_IMPORTED_MODULE_2__.Scene {\n    create(data) {\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n        this.gameManager.loadData();\n        // Get Opponent Data\n        let cardKey = this.gameManager.getCardKey(this.gameManager.battleSlotNumber);\n        let card = _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__.CardRepo.findCard(cardKey);\n        if (card == undefined) {\n            console.log(\"Unable to find Card Data\");\n            this.simulateWin();\n            return;\n        }\n        // Render Opponent Sprite\n        this.opponent = new _components_Opponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, card);\n        // Render Player\n        this.player = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"player\");\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 350);\n        this.renderHealth();\n        this.playerAttackBar = new _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 400, 20);\n        this.events.addListener(\"player-update\", ()=>{\n            this.renderHealth();\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"opponent-update\", ()=>{\n            this.checkWinLoseCondition();\n        });\n        this.match = new _components_Match__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 50);\n        this.match.callbackScore = (value)=>{\n            console.log(\"Callback Score + \" + value);\n        };\n        // Debug\n        let debugWin = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 100, \"Set Win\");\n        debugWin.scale = 0.5;\n        this.add.existing(debugWin);\n        debugWin.onPressed(()=>{\n            this.simulateWin();\n        });\n        let debugLose = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Set Lose\");\n        debugLose.scale = 0.5;\n        this.add.existing(debugLose);\n        debugLose.onPressed(()=>{\n            this.simulateLose();\n        });\n        let debugAttack = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Attack\");\n        debugAttack.scale = 0.5;\n        this.add.existing(debugAttack);\n        debugAttack.onPressed(()=>{\n            this.playerAttack();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    playerAttack() {\n        this.opponent.damage(1);\n    }\n    simulateWin() {\n        this.processWin();\n    }\n    simulateLose() {\n        this.gameManager.damage();\n        this.gameManager.damage();\n        this.gameManager.damage();\n    }\n    checkWinLoseCondition() {\n        if (this.gameManager.currentHp <= 0) {\n            this.processLose();\n        }\n        if (this.opponent.currentHp <= 0) {\n            this.processWin();\n        }\n    }\n    processWin() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalWin\", \"Win\", ()=>{\n            this.clean();\n            this.gameManager.clearCardKey(this.gameManager.battleSlotNumber);\n            this.gameManager.setBattleSlotNumber(0);\n            this.gameManager.saveData();\n            this.scene.start(\"Game\", {\n                isContinue: true\n            });\n        });\n    }\n    processLose() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalLose\", \"Lose\", ()=>{\n            this.clean();\n            this.gameManager.clearData();\n            this.scene.start(\"GameOver\", {\n                status: this.gameManager.checkGameStatus()\n            });\n        });\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"opponent-update\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"Battle\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztnQkFBQ0MsWUFBVztZQUFJO1FBQzVDO0lBQ0o7SUFFQVAsY0FBYTtRQUNULElBQUlqRCxrRUFBa0JBLENBQUMsSUFBSSxFQUFDLGFBQVksUUFBTztZQUMzQyxJQUFJLENBQUNrRCxLQUFLO1lBQ1YsSUFBSSxDQUFDeEMsV0FBVyxDQUFDK0MsU0FBUztZQUMxQixJQUFJLENBQUNILEtBQUssQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7Z0JBQUNHLFFBQU8sSUFBSSxDQUFDaEQsV0FBVyxDQUFDaUQsZUFBZTtZQUFFO1FBQzFFO0lBQ0o7SUFFQVQsUUFBTztRQUNILElBQUksQ0FBQ3BCLE1BQU0sQ0FBQzhCLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUM5QixNQUFNLENBQUM4QixjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDckQsT0FBTyxDQUFDc0QsUUFBUTtJQUN6QjtJQXpIQUMsYUFDQTtRQUNJLEtBQUssQ0FBQztJQUNWO0FBdUhKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9CYXR0bGUudHM/ZDc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBSZWN0QnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvUmVjdEJ1dHRvbic7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lTWFuYWdlcic7XG5pbXBvcnQgRGVidWdCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9EZWJ1Z0J1dHRvbic7XG5pbXBvcnQgeyBBQ2FyZCwgQ2FyZFJlcG8gfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRSZXBvJztcbmltcG9ydCBPcHBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL09wcG9uZW50JztcbmltcG9ydCBIZWFsdGhCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFsdGhCYXInO1xuaW1wb3J0IE1vZGFsU2ltcGxlTWVzc2FnZSBmcm9tICcuLi9tb2RhbHMvTW9kYWxTaW1wbGVNZXNzYWdlJztcbmltcG9ydCBNYXRjaCBmcm9tICcuLi9jb21wb25lbnRzL01hdGNoJztcbmltcG9ydCBQbGF5ZXJBdHRhY2tCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXJBdHRhY2tCYXInO1xuXG5leHBvcnQgY2xhc3MgQmF0dGxlIGV4dGVuZHMgU2NlbmVcbntcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXJcbiAgICBjYW1lcmE6IFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuQ2FtZXJhO1xuICAgIC8vXG4gICAgZ2FtZU92ZXJUZXh0IDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgYnV0dG9uOiBSZWN0QnV0dG9uXG4gICAgLy9cbiAgICBwbGF5ZXI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIHBsYXllckhlYWx0aEJhcjogSGVhbHRoQmFyXG4gICAgcGxheWVyQXR0YWNrQmFyOiBQbGF5ZXJBdHRhY2tCYXJcbiAgICAvL1xuICAgIG9wcG9uZW50OiBPcHBvbmVudFxuICAgIC8vXG4gICAgbWF0Y2g6IE1hdGNoXG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0JhdHRsZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6IGFueSApXG4gICAgeyAgIFxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEJhY2tncm91bmRDb2xvcigweGU2ZTZlNik7XG5cbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcih0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5sb2FkRGF0YSgpXG5cbiAgICAgICAgLy8gR2V0IE9wcG9uZW50IERhdGFcbiAgICAgICAgbGV0IGNhcmRLZXkgPSB0aGlzLmdhbWVNYW5hZ2VyLmdldENhcmRLZXkoIHRoaXMuZ2FtZU1hbmFnZXIuYmF0dGxlU2xvdE51bWJlciApXG4gICAgICAgIGxldCBjYXJkOkFDYXJkfHVuZGVmaW5lZCA9IENhcmRSZXBvLmZpbmRDYXJkKGNhcmRLZXkpXG4gICAgICAgIGlmKCBjYXJkID09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmaW5kIENhcmQgRGF0YScpXG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRlV2luKClcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIE9wcG9uZW50IFNwcml0ZVxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IE9wcG9uZW50KHRoaXMsY2FyZCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIFBsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQgLTIwMCwgJ3BsYXllcicpXG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC0zNTApXG4gICAgICAgIHRoaXMucmVuZGVySGVhbHRoKClcblxuICAgICAgICB0aGlzLnBsYXllckF0dGFja0JhciA9IG5ldyBQbGF5ZXJBdHRhY2tCYXIoIHRoaXMsIEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC00MDAsIDIwIClcblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcigncGxheWVyLXVwZGF0ZScsKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVuZGVySGVhbHRoKClcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Mb3NlQ29uZGl0aW9uKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcignb3Bwb25lbnQtdXBkYXRlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5jaGVja1dpbkxvc2VDb25kaXRpb24oKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXRjaCA9IG5ldyBNYXRjaCh0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yLTUwKVxuICAgICAgICB0aGlzLm1hdGNoLmNhbGxiYWNrU2NvcmUgPSAoIHZhbHVlOiBudW1iZXIgKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coICdDYWxsYmFjayBTY29yZSArICcgKyB2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlYnVnXG4gICAgICAgIGxldCBkZWJ1Z1dpbjpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0xMDAsJ1NldCBXaW4nKVxuICAgICAgICBkZWJ1Z1dpbi5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z1dpbilcbiAgICAgICAgZGVidWdXaW4ub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRlV2luKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWJ1Z0xvc2U6RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywgMTUwLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCdTZXQgTG9zZScpXG4gICAgICAgIGRlYnVnTG9zZS5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z0xvc2UpXG4gICAgICAgIGRlYnVnTG9zZS5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVMb3NlKClcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZGVidWdBdHRhY2s6RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aCAtMTUwLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCdBdHRhY2snKVxuICAgICAgICBkZWJ1Z0F0dGFjay5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z0F0dGFjaylcbiAgICAgICAgZGVidWdBdHRhY2sub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFjaygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckhlYWx0aCgpe1xuICAgICAgICB0aGlzLnBsYXllckhlYWx0aEJhci5yZW5kZXJIZWFsdGgodGhpcy5nYW1lTWFuYWdlci5jdXJyZW50SHAsdGhpcy5nYW1lTWFuYWdlci5tYXhIcClcbiAgICB9XG5cbiAgICBwbGF5ZXJBdHRhY2soKXtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5kYW1hZ2UoMSlcbiAgICB9XG5cbiAgICBzaW11bGF0ZVdpbigpe1xuICAgICAgICB0aGlzLnByb2Nlc3NXaW4oKVxuICAgIH1cblxuICAgIHNpbXVsYXRlTG9zZSgpe1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmRhbWFnZSgpXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKVxuICAgIH1cbiAgICBcbiAgICBjaGVja1dpbkxvc2VDb25kaXRpb24oKXtcbiAgICAgICAgaWYoIHRoaXMuZ2FtZU1hbmFnZXIuY3VycmVudEhwIDw9IDAgKXtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHRoaXMub3Bwb25lbnQuY3VycmVudEhwIDw9IDAgKXtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1dpbigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzV2luKCl7XG4gICAgICAgIG5ldyBNb2RhbFNpbXBsZU1lc3NhZ2UodGhpcywnTW9kYWxXaW4nLFwiV2luXCIsKCk9PntcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jbGVhckNhcmRLZXkodGhpcy5nYW1lTWFuYWdlci5iYXR0bGVTbG90TnVtYmVyKVxuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5zZXRCYXR0bGVTbG90TnVtYmVyKDApXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLnNhdmVEYXRhKClcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLHtpc0NvbnRpbnVlOnRydWV9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzTG9zZSgpe1xuICAgICAgICBuZXcgTW9kYWxTaW1wbGVNZXNzYWdlKHRoaXMsJ01vZGFsTG9zZScsXCJMb3NlXCIsKCk9PntcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jbGVhckRhdGEoKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZU92ZXInLHtzdGF0dXM6dGhpcy5nYW1lTWFuYWdlci5jaGVja0dhbWVTdGF0dXMoKX0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsZWFuKCl7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdwbGF5ZXItdXBkYXRlJyk7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdvcHBvbmVudC11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5jYW1lcmFzLnJlc2V0QWxsKClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTWFuYWdlciIsIkRlYnVnQnV0dG9uIiwiQ2FyZFJlcG8iLCJPcHBvbmVudCIsIkhlYWx0aEJhciIsIk1vZGFsU2ltcGxlTWVzc2FnZSIsIk1hdGNoIiwiUGxheWVyQXR0YWNrQmFyIiwiQmF0dGxlIiwiY3JlYXRlIiwiZGF0YSIsImNhbWVyYSIsImNhbWVyYXMiLCJtYWluIiwic2V0QmFja2dyb3VuZENvbG9yIiwiZ2FtZU1hbmFnZXIiLCJsb2FkRGF0YSIsImNhcmRLZXkiLCJnZXRDYXJkS2V5IiwiYmF0dGxlU2xvdE51bWJlciIsImNhcmQiLCJmaW5kQ2FyZCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzaW11bGF0ZVdpbiIsIm9wcG9uZW50IiwicGxheWVyIiwiYWRkIiwic3ByaXRlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJwbGF5ZXJIZWFsdGhCYXIiLCJyZW5kZXJIZWFsdGgiLCJwbGF5ZXJBdHRhY2tCYXIiLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImNoZWNrV2luTG9zZUNvbmRpdGlvbiIsIm1hdGNoIiwiY2FsbGJhY2tTY29yZSIsInZhbHVlIiwiZGVidWdXaW4iLCJzY2FsZSIsImV4aXN0aW5nIiwib25QcmVzc2VkIiwiZGVidWdMb3NlIiwic2ltdWxhdGVMb3NlIiwiZGVidWdBdHRhY2siLCJwbGF5ZXJBdHRhY2siLCJlbWl0IiwiY3VycmVudEhwIiwibWF4SHAiLCJkYW1hZ2UiLCJwcm9jZXNzV2luIiwicHJvY2Vzc0xvc2UiLCJjbGVhbiIsImNsZWFyQ2FyZEtleSIsInNldEJhdHRsZVNsb3ROdW1iZXIiLCJzYXZlRGF0YSIsInNjZW5lIiwic3RhcnQiLCJpc0NvbnRpbnVlIiwiY2xlYXJEYXRhIiwic3RhdHVzIiwiY2hlY2tHYW1lU3RhdHVzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNldEFsbCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/Battle.ts\n"));

/***/ })

});