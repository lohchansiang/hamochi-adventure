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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battle: function() { return /* binding */ Battle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardRepo */ \"./src/game/components/CardRepo.ts\");\n/* harmony import */ var _components_Opponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Opponent */ \"./src/game/components/Opponent.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/ModalSimpleMessage */ \"./src/game/modals/ModalSimpleMessage.ts\");\n/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Match */ \"./src/game/components/Match.ts\");\n/* harmony import */ var _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PlayerAttackBar */ \"./src/game/components/PlayerAttackBar.ts\");\n\n\n\n\n\n\n\n\n\n\n\nclass Battle extends phaser__WEBPACK_IMPORTED_MODULE_2__.Scene {\n    create(data) {\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n        this.gameManager.loadData();\n        // Get Opponent Data\n        let cardKey = this.gameManager.getCardKey(this.gameManager.battleSlotNumber);\n        let card = _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__.CardRepo.findCard(cardKey);\n        if (card == undefined) {\n            console.log(\"Unable to find Card Data\");\n            this.simulateWin();\n            return;\n        }\n        // Render Opponent Sprite\n        this.opponent = new _components_Opponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, card);\n        // Render Player\n        this.player = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"player\");\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 350);\n        this.renderHealth();\n        this.playerAttackBar = new _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 450, 20);\n        this.playerAttackBar.callbackBulbButton = ()=>{\n            this.playerAttackBar.hideBulbButton();\n            this.playerAttack();\n        };\n        this.events.addListener(\"player-update\", ()=>{\n            this.renderHealth();\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"opponent-update\", ()=>{\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"player-attack\", ()=>{\n        // Stop Opponent Bar\n        // Stop Matching\n        // Show Attack Bar\n        });\n        this.events.addListener(\"opponent-attack\", ()=>{});\n        this.match = new _components_Match__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 50);\n        this.match.callbackScore = (value)=>{\n            console.log(\"Callback Score + \" + value);\n            this.playerAttackBar.addValue(value);\n        };\n        // Debug\n        let debugWin = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 100, \"Set Win\");\n        debugWin.scale = 0.5;\n        this.add.existing(debugWin);\n        debugWin.onPressed(()=>{\n            this.simulateWin();\n        });\n        let debugLose = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Set Lose\");\n        debugLose.scale = 0.5;\n        this.add.existing(debugLose);\n        debugLose.onPressed(()=>{\n            this.simulateLose();\n        });\n        let debugAttack = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Attack\");\n        debugAttack.scale = 0.5;\n        this.add.existing(debugAttack);\n        debugAttack.onPressed(()=>{\n            this.playerAttack();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    playerAttack() {\n        this.opponent.damage(1);\n    }\n    simulateWin() {\n        this.processWin();\n    }\n    simulateLose() {\n        this.gameManager.damage();\n        this.gameManager.damage();\n        this.gameManager.damage();\n    }\n    checkWinLoseCondition() {\n        if (this.gameManager.currentHp <= 0) {\n            this.processLose();\n        }\n        if (this.opponent.currentHp <= 0) {\n            this.processWin();\n        }\n    }\n    processWin() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalWin\", \"Win\", ()=>{\n            this.clean();\n            this.gameManager.clearCardKey(this.gameManager.battleSlotNumber);\n            this.gameManager.setBattleSlotNumber(0);\n            this.gameManager.saveData();\n            this.scene.start(\"Game\", {\n                isContinue: true\n            });\n        });\n    }\n    processLose() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalLose\", \"Lose\", ()=>{\n            this.clean();\n            this.gameManager.clearData();\n            this.scene.start(\"GameOver\", {\n                status: this.gameManager.checkGameStatus()\n            });\n        });\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"opponent-update\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"Battle\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0csVUFBVTtRQUNuQjtJQUNKO0lBRUFBLGFBQVk7UUFDUixJQUFJbkQsa0VBQWtCQSxDQUFDLElBQUksRUFBQyxZQUFXLE9BQU07WUFDekMsSUFBSSxDQUFDcUQsS0FBSztZQUNWLElBQUksQ0FBQzNDLFdBQVcsQ0FBQzRDLFlBQVksQ0FBQyxJQUFJLENBQUM1QyxXQUFXLENBQUNJLGdCQUFnQjtZQUMvRCxJQUFJLENBQUNKLFdBQVcsQ0FBQzZDLG1CQUFtQixDQUFDO1lBQ3JDLElBQUksQ0FBQzdDLFdBQVcsQ0FBQzhDLFFBQVE7WUFDekIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxRQUFPO2dCQUFDQyxZQUFXO1lBQUk7UUFDNUM7SUFDSjtJQUVBUCxjQUFhO1FBQ1QsSUFBSXBELGtFQUFrQkEsQ0FBQyxJQUFJLEVBQUMsYUFBWSxRQUFPO1lBQzNDLElBQUksQ0FBQ3FELEtBQUs7WUFDVixJQUFJLENBQUMzQyxXQUFXLENBQUNrRCxTQUFTO1lBQzFCLElBQUksQ0FBQ0gsS0FBSyxDQUFDQyxLQUFLLENBQUMsWUFBVztnQkFBQ0csUUFBTyxJQUFJLENBQUNuRCxXQUFXLENBQUNvRCxlQUFlO1lBQUU7UUFDMUU7SUFDSjtJQUVBVCxRQUFPO1FBQ0gsSUFBSSxDQUFDcEIsTUFBTSxDQUFDOEIsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQzlCLE1BQU0sQ0FBQzhCLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUN4RCxPQUFPLENBQUN5RCxRQUFRO0lBQ3pCO0lBMUlBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO0lBQ1Y7QUF3SUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0JhdHRsZS50cz9kNzhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFJlY3RCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uJztcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVNYW5hZ2VyJztcbmltcG9ydCBEZWJ1Z0J1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0RlYnVnQnV0dG9uJztcbmltcG9ydCB7IEFDYXJkLCBDYXJkUmVwbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZFJlcG8nO1xuaW1wb3J0IE9wcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvT3Bwb25lbnQnO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWx0aEJhcic7XG5pbXBvcnQgTW9kYWxTaW1wbGVNZXNzYWdlIGZyb20gJy4uL21vZGFscy9Nb2RhbFNpbXBsZU1lc3NhZ2UnO1xuaW1wb3J0IE1hdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0Y2gnO1xuaW1wb3J0IFBsYXllckF0dGFja0JhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllckF0dGFja0Jhcic7XG5cbmV4cG9ydCBjbGFzcyBCYXR0bGUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlclxuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgLy9cbiAgICBnYW1lT3ZlclRleHQgOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBidXR0b246IFJlY3RCdXR0b25cbiAgICAvL1xuICAgIHBsYXllcjogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgcGxheWVySGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICBwbGF5ZXJBdHRhY2tCYXI6IFBsYXllckF0dGFja0JhclxuICAgIC8vXG4gICAgb3Bwb25lbnQ6IE9wcG9uZW50XG4gICAgLy9cbiAgICBtYXRjaDogTWF0Y2hcblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQmF0dGxlJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTogYW55IClcbiAgICB7ICAgXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZTZlNmU2KTtcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmxvYWREYXRhKClcblxuICAgICAgICAvLyBHZXQgT3Bwb25lbnQgRGF0YVxuICAgICAgICBsZXQgY2FyZEtleSA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q2FyZEtleSggdGhpcy5nYW1lTWFuYWdlci5iYXR0bGVTbG90TnVtYmVyIClcbiAgICAgICAgbGV0IGNhcmQ6QUNhcmR8dW5kZWZpbmVkID0gQ2FyZFJlcG8uZmluZENhcmQoY2FyZEtleSlcbiAgICAgICAgaWYoIGNhcmQgPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZpbmQgQ2FyZCBEYXRhJylcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXIgT3Bwb25lbnQgU3ByaXRlXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBuZXcgT3Bwb25lbnQodGhpcyxjYXJkKTtcblxuICAgICAgICAvLyBSZW5kZXIgUGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCAncGxheWVyJylcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTM1MClcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFsdGgoKVxuXG4gICAgICAgIHRoaXMucGxheWVyQXR0YWNrQmFyID0gbmV3IFBsYXllckF0dGFja0JhciggdGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTQ1MCwgMjAgKVxuICAgICAgICB0aGlzLnBsYXllckF0dGFja0Jhci5jYWxsYmFja0J1bGJCdXR0b24gPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdHRhY2tCYXIuaGlkZUJ1bGJCdXR0b24oKVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdHRhY2soKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLnJlbmRlckhlYWx0aCgpXG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luTG9zZUNvbmRpdGlvbigpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ29wcG9uZW50LXVwZGF0ZScsKCk9PntcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Mb3NlQ29uZGl0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdwbGF5ZXItYXR0YWNrJywoKT0+e1xuICAgICAgICAgICAgLy8gU3RvcCBPcHBvbmVudCBCYXJcblxuICAgICAgICAgICAgLy8gU3RvcCBNYXRjaGluZ1xuXG4gICAgICAgICAgICAvLyBTaG93IEF0dGFjayBCYXJcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdvcHBvbmVudC1hdHRhY2snLCgpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLm1hdGNoID0gbmV3IE1hdGNoKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzItNTApXG4gICAgICAgIHRoaXMubWF0Y2guY2FsbGJhY2tTY29yZSA9ICggdmFsdWU6IG51bWJlciApPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0NhbGxiYWNrIFNjb3JlICsgJyArIHZhbHVlKVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdHRhY2tCYXIuYWRkVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVidWdcbiAgICAgICAgbGV0IGRlYnVnV2luOkRlYnVnQnV0dG9uID0gbmV3IERlYnVnQnV0dG9uKHRoaXMsIDE1MCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLTEwMCwnU2V0IFdpbicpXG4gICAgICAgIGRlYnVnV2luLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnV2luKVxuICAgICAgICBkZWJ1Z1dpbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbGV0IGRlYnVnTG9zZTpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ1NldCBMb3NlJylcbiAgICAgICAgZGVidWdMb3NlLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnTG9zZSlcbiAgICAgICAgZGVidWdMb3NlLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0ZUxvc2UoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkZWJ1Z0F0dGFjazpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoIC0xNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ0F0dGFjaycpXG4gICAgICAgIGRlYnVnQXR0YWNrLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnQXR0YWNrKVxuICAgICAgICBkZWJ1Z0F0dGFjay5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrKClcbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVySGVhbHRoKCl7XG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyLnJlbmRlckhlYWx0aCh0aGlzLmdhbWVNYW5hZ2VyLmN1cnJlbnRIcCx0aGlzLmdhbWVNYW5hZ2VyLm1heEhwKVxuICAgIH1cblxuICAgIHBsYXllckF0dGFjaygpe1xuICAgICAgICB0aGlzLm9wcG9uZW50LmRhbWFnZSgxKVxuICAgIH1cblxuICAgIHNpbXVsYXRlV2luKCl7XG4gICAgICAgIHRoaXMucHJvY2Vzc1dpbigpXG4gICAgfVxuXG4gICAgc2ltdWxhdGVMb3NlKCl7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKVxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmRhbWFnZSgpXG4gICAgfVxuICAgIFxuICAgIGNoZWNrV2luTG9zZUNvbmRpdGlvbigpe1xuICAgICAgICBpZiggdGhpcy5nYW1lTWFuYWdlci5jdXJyZW50SHAgPD0gMCApe1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9zZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiggdGhpcy5vcHBvbmVudC5jdXJyZW50SHAgPD0gMCApe1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzV2luKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NXaW4oKXtcbiAgICAgICAgbmV3IE1vZGFsU2ltcGxlTWVzc2FnZSh0aGlzLCdNb2RhbFdpbicsXCJXaW5cIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmNsZWFyQ2FyZEtleSh0aGlzLmdhbWVNYW5hZ2VyLmJhdHRsZVNsb3ROdW1iZXIpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLnNldEJhdHRsZVNsb3ROdW1iZXIoMClcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2F2ZURhdGEoKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScse2lzQ29udGludWU6dHJ1ZX0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3NMb3NlKCl7XG4gICAgICAgIG5ldyBNb2RhbFNpbXBsZU1lc3NhZ2UodGhpcywnTW9kYWxMb3NlJyxcIkxvc2VcIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmNsZWFyRGF0YSgpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lT3Zlcicse3N0YXR1czp0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wcG9uZW50LXVwZGF0ZScpO1xuICAgICAgICB0aGlzLmNhbWVyYXMucmVzZXRBbGwoKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJHYW1lTGliIiwiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVNYW5hZ2VyIiwiRGVidWdCdXR0b24iLCJDYXJkUmVwbyIsIk9wcG9uZW50IiwiSGVhbHRoQmFyIiwiTW9kYWxTaW1wbGVNZXNzYWdlIiwiTWF0Y2giLCJQbGF5ZXJBdHRhY2tCYXIiLCJCYXR0bGUiLCJjcmVhdGUiLCJkYXRhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJnYW1lTWFuYWdlciIsImxvYWREYXRhIiwiY2FyZEtleSIsImdldENhcmRLZXkiLCJiYXR0bGVTbG90TnVtYmVyIiwiY2FyZCIsImZpbmRDYXJkIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInNpbXVsYXRlV2luIiwib3Bwb25lbnQiLCJwbGF5ZXIiLCJhZGQiLCJzcHJpdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInBsYXllckhlYWx0aEJhciIsInJlbmRlckhlYWx0aCIsInBsYXllckF0dGFja0JhciIsImNhbGxiYWNrQnVsYkJ1dHRvbiIsImhpZGVCdWxiQnV0dG9uIiwicGxheWVyQXR0YWNrIiwiZXZlbnRzIiwiYWRkTGlzdGVuZXIiLCJjaGVja1dpbkxvc2VDb25kaXRpb24iLCJtYXRjaCIsImNhbGxiYWNrU2NvcmUiLCJ2YWx1ZSIsImFkZFZhbHVlIiwiZGVidWdXaW4iLCJzY2FsZSIsImV4aXN0aW5nIiwib25QcmVzc2VkIiwiZGVidWdMb3NlIiwic2ltdWxhdGVMb3NlIiwiZGVidWdBdHRhY2siLCJlbWl0IiwiY3VycmVudEhwIiwibWF4SHAiLCJkYW1hZ2UiLCJwcm9jZXNzV2luIiwicHJvY2Vzc0xvc2UiLCJjbGVhbiIsImNsZWFyQ2FyZEtleSIsInNldEJhdHRsZVNsb3ROdW1iZXIiLCJzYXZlRGF0YSIsInNjZW5lIiwic3RhcnQiLCJpc0NvbnRpbnVlIiwiY2xlYXJEYXRhIiwic3RhdHVzIiwiY2hlY2tHYW1lU3RhdHVzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNldEFsbCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/Battle.ts\n"));

/***/ })

});