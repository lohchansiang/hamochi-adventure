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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battle: function() { return /* binding */ Battle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardRepo */ \"./src/game/components/CardRepo.ts\");\n/* harmony import */ var _components_Opponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Opponent */ \"./src/game/components/Opponent.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/ModalSimpleMessage */ \"./src/game/modals/ModalSimpleMessage.ts\");\n/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Match */ \"./src/game/components/Match.ts\");\n/* harmony import */ var _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PlayerAttackBar */ \"./src/game/components/PlayerAttackBar.ts\");\n\n\n\n\n\n\n\n\n\n\n\nclass Battle extends phaser__WEBPACK_IMPORTED_MODULE_2__.Scene {\n    create(data) {\n        // Reset Data\n        this.isDone = false;\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n        this.gameManager.loadData();\n        // Get Opponent Data\n        let cardKey = this.gameManager.getCardKey(this.gameManager.battleSlotNumber);\n        let card = _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__.CardRepo.findCard(cardKey);\n        if (card == undefined) {\n            console.log(\"Unable to find Card Data\");\n            this.simulateWin();\n            return;\n        }\n        // Render Opponent Sprite\n        this.opponent = new _components_Opponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, card);\n        // Render Player\n        this.player = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"player\");\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 350);\n        this.renderHealth();\n        // Render Match\n        this.match = new _components_Match__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 50);\n        this.match.callbackScore = (value)=>{\n            this.playerAttackBar.addValue(value);\n        };\n        // Render Attack Bar\n        this.playerAttackBar = new _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 450, 20);\n        this.playerAttackBar.callbackBulbButton = ()=>{\n            this.playerAttackBar.hideBulbButton();\n            this.playerAttack();\n        };\n        this.events.addListener(\"player-update\", ()=>{\n            this.renderHealth();\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"opponent-update\", ()=>{\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"player-attack\", ()=>{\n            // Stop Opponent Bar\n            // Stop & Hide Matching\n            this.match.hide();\n            // Show Attack Button\n            this.playerAttackBar.showBulbButton();\n        });\n        this.events.addListener(\"opponent-attack\", ()=>{\n        // Stop Opponent Bar\n        // Stop Matching\n        });\n        this.events.addListener(\"continue\", ()=>{\n            if (!this.isDone) {\n                // Stop Opponent Bar\n                // Start Matching\n                this.match.show();\n            }\n        });\n        // Debug\n        let debugWin = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 100, \"Set Win\");\n        debugWin.scale = 0.5;\n        this.add.existing(debugWin);\n        debugWin.onPressed(()=>{\n            this.simulateWin();\n        });\n        let debugLose = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Set Lose\");\n        debugLose.scale = 0.5;\n        this.add.existing(debugLose);\n        debugLose.onPressed(()=>{\n            this.simulateLose();\n        });\n        let debugAttack = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Attack\");\n        debugAttack.scale = 0.5;\n        this.add.existing(debugAttack);\n        debugAttack.onPressed(()=>{\n            this.playerAttack();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    playerAttack() {\n        this.opponent.damage(1);\n        //\n        this.time.delayedCall(1500, ()=>{\n            this.events.emit(\"continue\");\n        }, [], this);\n    }\n    simulateWin() {\n        this.processWin();\n    }\n    simulateLose() {\n        this.gameManager.damage();\n        this.gameManager.damage();\n        this.gameManager.damage();\n    }\n    checkWinLoseCondition() {\n        if (this.gameManager.currentHp <= 0) {\n            this.processLose();\n        }\n        if (this.opponent.currentHp <= 0) {\n            this.processWin();\n        }\n    }\n    processWin() {\n        this.isDone = true;\n        this.time.delayedCall(1000, ()=>{\n            new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalWin\", \"Win\", ()=>{\n                this.clean();\n                this.gameManager.clearCardKey(this.gameManager.battleSlotNumber);\n                this.gameManager.setBattleSlotNumber(0);\n                this.gameManager.saveData();\n                this.scene.start(\"Game\", {\n                    isContinue: true\n                });\n            });\n        }, [], this);\n    }\n    processLose() {\n        this.isDone = true;\n        this.time.delayedCall(1000, ()=>{\n            new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalLose\", \"Lose\", ()=>{\n                this.clean();\n                this.gameManager.clearData();\n                this.scene.start(\"GameOver\", {\n                    status: this.gameManager.checkGameStatus()\n                });\n            });\n        }, [], this);\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"opponent-update\");\n        this.events.removeListener(\"player-attack\");\n        this.events.removeListener(\"opponent-attack\");\n        this.events.removeListener(\"continue\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"Battle\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBa0JBLENBQUMsSUFBSSxFQUFDLGFBQVksUUFBTztnQkFDM0MsSUFBSSxDQUFDMkQsS0FBSztnQkFDVixJQUFJLENBQUNoRCxXQUFXLENBQUN1RCxTQUFTO2dCQUMxQixJQUFJLENBQUNILEtBQUssQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7b0JBQUNHLFFBQU8sSUFBSSxDQUFDeEQsV0FBVyxDQUFDeUQsZUFBZTtnQkFBRTtZQUMxRTtRQUNKLEdBQUUsRUFBRSxFQUFDLElBQUk7SUFDYjtJQUVBVCxRQUFPO1FBQ0gsSUFBSSxDQUFDckIsTUFBTSxDQUFDK0IsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQy9CLE1BQU0sQ0FBQytCLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUMvQixNQUFNLENBQUMrQixjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDL0IsTUFBTSxDQUFDK0IsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQy9CLE1BQU0sQ0FBQytCLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUM3RCxPQUFPLENBQUM4RCxRQUFRO0lBQ3pCO0lBM0tBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO0lBQ1Y7QUF5S0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0JhdHRsZS50cz9kNzhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFJlY3RCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uJztcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVNYW5hZ2VyJztcbmltcG9ydCBEZWJ1Z0J1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0RlYnVnQnV0dG9uJztcbmltcG9ydCB7IEFDYXJkLCBDYXJkUmVwbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZFJlcG8nO1xuaW1wb3J0IE9wcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvT3Bwb25lbnQnO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWx0aEJhcic7XG5pbXBvcnQgTW9kYWxTaW1wbGVNZXNzYWdlIGZyb20gJy4uL21vZGFscy9Nb2RhbFNpbXBsZU1lc3NhZ2UnO1xuaW1wb3J0IE1hdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0Y2gnO1xuaW1wb3J0IFBsYXllckF0dGFja0JhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllckF0dGFja0Jhcic7XG5cbmV4cG9ydCBjbGFzcyBCYXR0bGUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlclxuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgLy9cbiAgICBnYW1lT3ZlclRleHQgOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBidXR0b246IFJlY3RCdXR0b25cbiAgICAvL1xuICAgIHBsYXllcjogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgcGxheWVySGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICBwbGF5ZXJBdHRhY2tCYXI6IFBsYXllckF0dGFja0JhclxuICAgIC8vXG4gICAgb3Bwb25lbnQ6IE9wcG9uZW50XG4gICAgLy9cbiAgICBtYXRjaDogTWF0Y2hcbiAgICBpc0RvbmU6IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQmF0dGxlJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTogYW55IClcbiAgICB7ICAgXG4gICAgICAgIC8vIFJlc2V0IERhdGFcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZTZlNmU2KTtcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmxvYWREYXRhKClcblxuICAgICAgICAvLyBHZXQgT3Bwb25lbnQgRGF0YVxuICAgICAgICBsZXQgY2FyZEtleSA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q2FyZEtleSggdGhpcy5nYW1lTWFuYWdlci5iYXR0bGVTbG90TnVtYmVyIClcbiAgICAgICAgbGV0IGNhcmQ6QUNhcmR8dW5kZWZpbmVkID0gQ2FyZFJlcG8uZmluZENhcmQoY2FyZEtleSlcbiAgICAgICAgaWYoIGNhcmQgPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZpbmQgQ2FyZCBEYXRhJylcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXIgT3Bwb25lbnQgU3ByaXRlXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBuZXcgT3Bwb25lbnQodGhpcyxjYXJkKTtcblxuICAgICAgICAvLyBSZW5kZXIgUGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCAncGxheWVyJylcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTM1MClcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFsdGgoKVxuXG4gICAgICAgIC8vIFJlbmRlciBNYXRjaFxuICAgICAgICB0aGlzLm1hdGNoID0gbmV3IE1hdGNoKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzItNTApXG4gICAgICAgIHRoaXMubWF0Y2guY2FsbGJhY2tTY29yZSA9ICggdmFsdWU6IG51bWJlciApPT57XG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFja0Jhci5hZGRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgQXR0YWNrIEJhclxuICAgICAgICB0aGlzLnBsYXllckF0dGFja0JhciA9IG5ldyBQbGF5ZXJBdHRhY2tCYXIoIHRoaXMsIEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC00NTAsIDIwIClcbiAgICAgICAgdGhpcy5wbGF5ZXJBdHRhY2tCYXIuY2FsbGJhY2tCdWxiQnV0dG9uID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrQmFyLmhpZGVCdWxiQnV0dG9uKClcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdwbGF5ZXItdXBkYXRlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJIZWFsdGgoKVxuICAgICAgICAgICAgdGhpcy5jaGVja1dpbkxvc2VDb25kaXRpb24oKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdvcHBvbmVudC11cGRhdGUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luTG9zZUNvbmRpdGlvbigpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcigncGxheWVyLWF0dGFjaycsKCk9PntcbiAgICAgICAgICAgIC8vIFN0b3AgT3Bwb25lbnQgQmFyXG5cbiAgICAgICAgICAgIC8vIFN0b3AgJiBIaWRlIE1hdGNoaW5nXG4gICAgICAgICAgICB0aGlzLm1hdGNoLmhpZGUoKVxuXG4gICAgICAgICAgICAvLyBTaG93IEF0dGFjayBCdXR0b25cbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrQmFyLnNob3dCdWxiQnV0dG9uKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdvcHBvbmVudC1hdHRhY2snLCgpPT57XG4gICAgICAgICAgICAvLyBTdG9wIE9wcG9uZW50IEJhclxuXG4gICAgICAgICAgICAvLyBTdG9wIE1hdGNoaW5nXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ2NvbnRpbnVlJywoKT0+e1xuICAgICAgICAgICAgaWYoICF0aGlzLmlzRG9uZSApe1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgT3Bwb25lbnQgQmFyXG5cbiAgICAgICAgICAgICAgICAvLyBTdGFydCBNYXRjaGluZ1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2guc2hvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gRGVidWdcbiAgICAgICAgbGV0IGRlYnVnV2luOkRlYnVnQnV0dG9uID0gbmV3IERlYnVnQnV0dG9uKHRoaXMsIDE1MCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLTEwMCwnU2V0IFdpbicpXG4gICAgICAgIGRlYnVnV2luLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnV2luKVxuICAgICAgICBkZWJ1Z1dpbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbGV0IGRlYnVnTG9zZTpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ1NldCBMb3NlJylcbiAgICAgICAgZGVidWdMb3NlLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnTG9zZSlcbiAgICAgICAgZGVidWdMb3NlLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0ZUxvc2UoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkZWJ1Z0F0dGFjazpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoIC0xNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ0F0dGFjaycpXG4gICAgICAgIGRlYnVnQXR0YWNrLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnQXR0YWNrKVxuICAgICAgICBkZWJ1Z0F0dGFjay5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrKClcbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVySGVhbHRoKCl7XG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyLnJlbmRlckhlYWx0aCh0aGlzLmdhbWVNYW5hZ2VyLmN1cnJlbnRIcCx0aGlzLmdhbWVNYW5hZ2VyLm1heEhwKVxuICAgIH1cblxuICAgIHBsYXllckF0dGFjaygpe1xuICAgICAgICB0aGlzLm9wcG9uZW50LmRhbWFnZSgxKVxuICAgICAgICAvL1xuICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMTUwMCwoKT0+e1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCgnY29udGludWUnKTtcbiAgICAgICAgfSxbXSx0aGlzKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzaW11bGF0ZVdpbigpe1xuICAgICAgICB0aGlzLnByb2Nlc3NXaW4oKVxuICAgIH1cblxuICAgIHNpbXVsYXRlTG9zZSgpe1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmRhbWFnZSgpXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKVxuICAgIH1cbiAgICBcbiAgICBjaGVja1dpbkxvc2VDb25kaXRpb24oKXtcbiAgICAgICAgaWYoIHRoaXMuZ2FtZU1hbmFnZXIuY3VycmVudEhwIDw9IDAgKXtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHRoaXMub3Bwb25lbnQuY3VycmVudEhwIDw9IDAgKXtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1dpbigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzV2luKCl7XG4gICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCgxMDAwLCgpPT57XG4gICAgICAgICAgICBuZXcgTW9kYWxTaW1wbGVNZXNzYWdlKHRoaXMsJ01vZGFsV2luJyxcIldpblwiLCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jbGVhckNhcmRLZXkodGhpcy5nYW1lTWFuYWdlci5iYXR0bGVTbG90TnVtYmVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2V0QmF0dGxlU2xvdE51bWJlcigwKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2F2ZURhdGEoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLHtpc0NvbnRpbnVlOnRydWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sW10sdGhpcyApXG4gICAgfVxuXG4gICAgcHJvY2Vzc0xvc2UoKXtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSB0cnVlXG5cbiAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDEwMDAsKCk9PntcbiAgICAgICAgICAgIG5ldyBNb2RhbFNpbXBsZU1lc3NhZ2UodGhpcywnTW9kYWxMb3NlJyxcIkxvc2VcIiwoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuY2xlYXJEYXRhKClcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lT3Zlcicse3N0YXR1czp0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFtdLHRoaXMgKVxuICAgIH1cblxuICAgIGNsZWFuKCl7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdwbGF5ZXItdXBkYXRlJyk7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdvcHBvbmVudC11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ3BsYXllci1hdHRhY2snKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wcG9uZW50LWF0dGFjaycpO1xuICAgICAgICB0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcignY29udGludWUnKTtcbiAgICAgICAgdGhpcy5jYW1lcmFzLnJlc2V0QWxsKClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTWFuYWdlciIsIkRlYnVnQnV0dG9uIiwiQ2FyZFJlcG8iLCJPcHBvbmVudCIsIkhlYWx0aEJhciIsIk1vZGFsU2ltcGxlTWVzc2FnZSIsIk1hdGNoIiwiUGxheWVyQXR0YWNrQmFyIiwiQmF0dGxlIiwiY3JlYXRlIiwiZGF0YSIsImlzRG9uZSIsImNhbWVyYSIsImNhbWVyYXMiLCJtYWluIiwic2V0QmFja2dyb3VuZENvbG9yIiwiZ2FtZU1hbmFnZXIiLCJsb2FkRGF0YSIsImNhcmRLZXkiLCJnZXRDYXJkS2V5IiwiYmF0dGxlU2xvdE51bWJlciIsImNhcmQiLCJmaW5kQ2FyZCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzaW11bGF0ZVdpbiIsIm9wcG9uZW50IiwicGxheWVyIiwiYWRkIiwic3ByaXRlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJwbGF5ZXJIZWFsdGhCYXIiLCJyZW5kZXJIZWFsdGgiLCJtYXRjaCIsImNhbGxiYWNrU2NvcmUiLCJ2YWx1ZSIsInBsYXllckF0dGFja0JhciIsImFkZFZhbHVlIiwiY2FsbGJhY2tCdWxiQnV0dG9uIiwiaGlkZUJ1bGJCdXR0b24iLCJwbGF5ZXJBdHRhY2siLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImNoZWNrV2luTG9zZUNvbmRpdGlvbiIsImhpZGUiLCJzaG93QnVsYkJ1dHRvbiIsInNob3ciLCJkZWJ1Z1dpbiIsInNjYWxlIiwiZXhpc3RpbmciLCJvblByZXNzZWQiLCJkZWJ1Z0xvc2UiLCJzaW11bGF0ZUxvc2UiLCJkZWJ1Z0F0dGFjayIsImVtaXQiLCJjdXJyZW50SHAiLCJtYXhIcCIsImRhbWFnZSIsInRpbWUiLCJkZWxheWVkQ2FsbCIsInByb2Nlc3NXaW4iLCJwcm9jZXNzTG9zZSIsImNsZWFuIiwiY2xlYXJDYXJkS2V5Iiwic2V0QmF0dGxlU2xvdE51bWJlciIsInNhdmVEYXRhIiwic2NlbmUiLCJzdGFydCIsImlzQ29udGludWUiLCJjbGVhckRhdGEiLCJzdGF0dXMiLCJjaGVja0dhbWVTdGF0dXMiLCJyZW1vdmVMaXN0ZW5lciIsInJlc2V0QWxsIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/scenes/Battle.ts\n"));

/***/ })

});