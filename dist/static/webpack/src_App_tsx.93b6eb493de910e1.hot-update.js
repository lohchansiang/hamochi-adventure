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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battle: function() { return /* binding */ Battle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/RectButton */ \"./src/lib/components/RectButton.ts\");\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _components_CardRepo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardRepo */ \"./src/game/components/CardRepo.ts\");\n/* harmony import */ var _components_Opponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Opponent */ \"./src/game/components/Opponent.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Match */ \"./src/game/components/Match.ts\");\n/* harmony import */ var _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PlayerAttackBar */ \"./src/game/components/PlayerAttackBar.ts\");\n/* harmony import */ var _modals_ModalQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/ModalQuestion */ \"./src/game/modals/ModalQuestion.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass Battle extends phaser__WEBPACK_IMPORTED_MODULE_2__.Scene {\n    create(data) {\n        // Reset Data\n        this.isDone = false;\n        this.modalQuestion = new _modals_ModalQuestion__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, \"ModalQuestion\");\n        this.modalQuestion.callbackCorrect = ()=>{};\n        this.modalQuestion.callbackWrong = ()=>{};\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n        this.gameManager.loadData();\n        // Render Center Message\n        this.centerMessage = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 150, \"\", {\n            font: \"bold 60px Arial\",\n            color: \"#00000\",\n            align: \"center\"\n        }).setOrigin(0.5).setVisible(false);\n        // Get Opponent Data\n        let cardKey = this.gameManager.getCardKey(this.gameManager.battleSlotNumber);\n        let card = _components_CardRepo__WEBPACK_IMPORTED_MODULE_6__.CardRepo.findCard(cardKey);\n        if (card == undefined) {\n            console.log(\"Unable to find Card Data\");\n            this.simulateWin();\n            return;\n        }\n        // Render Opponent Sprite\n        this.opponent = new _components_Opponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, card);\n        // Render Player\n        this.player = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"player\");\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 350);\n        this.renderHealth();\n        // Render Match\n        this.match = new _components_Match__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 50);\n        this.match.callbackScore = (value)=>{\n            this.playerAttackBar.addValue(value);\n        };\n        // Render Player Attack Bar\n        this.playerAttackBar = new _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 450, 20);\n        this.playerAttackBar.callbackBulbButton = ()=>{\n            this.playerAttackBar.hideBulbButton();\n            this.playerAttack();\n        };\n        this.events.addListener(\"player-update\", ()=>{\n            this.renderHealth();\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"opponent-update\", ()=>{\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"player-attack\", ()=>{\n            // Stop Opponent Bar\n            this.opponent.stopAttack();\n            // Stop & Hide Matching\n            this.match.hide();\n            // Show Attack Button\n            this.playerAttackBar.showBulbButton();\n        });\n        this.events.addListener(\"opponent-attack\", ()=>{\n            // Stop Opponent Bar\n            this.opponent.stopAttack();\n            // Stop Matching\n            this.match.hide();\n            this.opponentAttack();\n        });\n        this.events.addListener(\"continue\", ()=>{\n            this.centerMessage.setVisible(false);\n            if (!this.isDone) {\n                // Start Matching\n                this.match.show();\n                // Resume Opponent Bar\n                this.opponent.resumeAttack();\n            }\n        });\n        this.events.addListener(\"battle-end\", ()=>{\n            this.isDone = true;\n            this.match.hide();\n            this.opponent.stopAttack();\n        });\n        // Debug\n        let debugWin = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 100, \"Set Win\");\n        debugWin.scale = 0.5;\n        this.add.existing(debugWin);\n        debugWin.onPressed(()=>{\n            this.simulateWin();\n        });\n        let debugLose = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Set Lose\");\n        debugLose.scale = 0.5;\n        this.add.existing(debugLose);\n        debugLose.onPressed(()=>{\n            this.simulateLose();\n        });\n        let debugAttack = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Attack\");\n        debugAttack.scale = 0.5;\n        this.add.existing(debugAttack);\n        debugAttack.onPressed(()=>{\n            this.playerAttack();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    playerAttack() {\n        this.time.delayedCall(1000, ()=>{\n            this.opponent.damage(1);\n        }, [], this);\n        //\n        this.time.delayedCall(2000, ()=>{\n            this.events.emit(\"continue\");\n        }, [], this);\n    }\n    opponentAttack() {\n        this.centerMessage.setVisible(true);\n        this.centerMessage.setText(\"Mr. Worm Attack!!!\");\n        this.time.delayedCall(1000, ()=>{\n            this.centerMessage.setText(\"Player HP -1\");\n            //\n            this.gameManager.damage();\n            this.opponent.resetAttack();\n        }, [], this);\n        //\n        this.time.delayedCall(2000, ()=>{\n            this.events.emit(\"continue\");\n        }, [], this);\n    }\n    simulateWin() {\n        this.processWin();\n    }\n    simulateLose() {\n        this.gameManager.damage();\n        this.gameManager.damage();\n        this.gameManager.damage();\n    }\n    checkWinLoseCondition() {\n        if (!this.isDone) {\n            if (this.gameManager.currentHp <= 0) {\n                this.processLose();\n            }\n            if (this.opponent.currentHp <= 0) {\n                this.processWin();\n            }\n        }\n    }\n    processWin() {\n        this.events.emit(\"battle-end\");\n        this.time.delayedCall(1000, ()=>{\n            this.renderEnding(\"win\");\n        }, [], this);\n    }\n    processLose() {\n        this.events.emit(\"battle-end\");\n        this.time.delayedCall(1000, ()=>{\n            this.renderEnding(\"lose\");\n        }, [], this);\n    }\n    renderEnding(status) {\n        let text = \"Invalid Status...\";\n        if (status == \"win\") text = \"Mr. Worm fainted.\";\n        if (status == \"lose\") text = \"You fainted!\";\n        let endText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 - 150, text, {\n            font: \"bold 60px Arial\",\n            color: \"#00000\",\n            align: \"center\"\n        });\n        endText.setOrigin(0.5, 0.5);\n        let button = new _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2 + 200, \"OK\");\n        button.onPressed(()=>{\n            if (status == \"win\") this.handleWin();\n            if (status == \"lose\") this.handleLose();\n        });\n    }\n    handleWin() {\n        this.clean();\n        this.gameManager.clearCardKey(this.gameManager.battleSlotNumber);\n        this.gameManager.setBattleSlotNumber(0);\n        this.gameManager.saveData();\n        this.scene.start(\"Game\", {\n            isContinue: true\n        });\n    }\n    handleLose() {\n        this.clean();\n        this.gameManager.clearData();\n        this.scene.start(\"GameOver\", {\n            status: this.gameManager.checkGameStatus()\n        });\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"opponent-update\");\n        this.events.removeListener(\"player-attack\");\n        this.events.removeListener(\"opponent-attack\");\n        this.events.removeListener(\"continue\");\n        this.events.removeListener(\"battle-end\");\n        this.cameras.resetAll();\n        this.scene.remove(\"ModalQuestion\");\n    }\n    constructor(){\n        super(\"Battle\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zY2VuZXMvQmF0dGxlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0c7QUFDVztBQUNHO0FBQ0Q7QUFDRztBQUNFO0FBQ1g7QUFDRTtBQUVSO0FBQ29CO0FBQ1I7QUFFN0MsTUFBTVksZUFBZVYseUNBQUtBO0lBMEI3QlcsT0FBU0MsSUFBUyxFQUNsQjtRQUNJLGFBQWE7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBRztRQUVkLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUlMLDhEQUFhQSxDQUFDLElBQUksRUFBQztRQUM1QyxJQUFJLENBQUNLLGFBQWEsQ0FBQ0MsZUFBZSxHQUFHLEtBRXJDO1FBQ0EsSUFBSSxDQUFDRCxhQUFhLENBQUNFLGFBQWEsR0FBRyxLQUVuQztRQUVBLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO1FBQy9CLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQztRQUUvQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJbkIsK0RBQVdBLENBQUMsSUFBSTtRQUN2QyxJQUFJLENBQUNtQixXQUFXLENBQUNDLFFBQVE7UUFFekIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUMzQixnRUFBbUIsR0FBQyxHQUFHQSxpRUFBb0IsR0FBQyxJQUFHLEtBQUksSUFBRztZQUNyRjhCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxPQUFPO1FBQ1gsR0FBSUMsU0FBUyxDQUFDLEtBQUtDLFVBQVUsQ0FBQztRQUU5QixvQkFBb0I7UUFDcEIsSUFBSUMsVUFBVSxJQUFJLENBQUNaLFdBQVcsQ0FBQ2EsVUFBVSxDQUFFLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxnQkFBZ0I7UUFDNUUsSUFBSUMsT0FBdUJoQywwREFBUUEsQ0FBQ2lDLFFBQVEsQ0FBQ0o7UUFDN0MsSUFBSUcsUUFBUUUsV0FBVztZQUNuQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSSxDQUFDQyxXQUFXO1lBQ2hCO1FBQ0o7UUFFQSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSXJDLDREQUFRQSxDQUFDLElBQUksRUFBQytCO1FBRWxDLGdCQUFnQjtRQUNoQixJQUFJLENBQUNPLE1BQU0sR0FBRyxJQUFJLENBQUNuQixHQUFHLENBQUNvQixNQUFNLENBQUM5QyxnRUFBbUIsR0FBQyxHQUFFQSxpRUFBb0IsR0FBRSxLQUFLO1FBQy9FLElBQUksQ0FBQytDLGVBQWUsR0FBRyxJQUFJdkMsNkRBQVNBLENBQUMsSUFBSSxFQUFDUixnRUFBbUIsR0FBQyxHQUFFQSxpRUFBb0IsR0FBQztRQUNyRixJQUFJLENBQUNnRCxZQUFZO1FBRWpCLGVBQWU7UUFDZixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJeEMseURBQUtBLENBQUMsSUFBSSxFQUFDVCxnRUFBbUIsR0FBQyxHQUFFQSxpRUFBb0IsR0FBQyxJQUFFO1FBQ3pFLElBQUksQ0FBQ2lELEtBQUssQ0FBQ0MsYUFBYSxHQUFHLENBQUVDO1lBQ3pCLElBQUksQ0FBQ0MsZUFBZSxDQUFDQyxRQUFRLENBQUNGO1FBQ2xDO1FBRUEsMkJBQTJCO1FBQzNCLElBQUksQ0FBQ0MsZUFBZSxHQUFHLElBQUkxQyxvRUFBZUEsQ0FBRSxJQUFJLEVBQUVWLGdFQUFtQixHQUFDLEdBQUVBLGlFQUFvQixHQUFDLEtBQUs7UUFDbEcsSUFBSSxDQUFDb0QsZUFBZSxDQUFDRSxrQkFBa0IsR0FBRztZQUN0QyxJQUFJLENBQUNGLGVBQWUsQ0FBQ0csY0FBYztZQUNuQyxJQUFJLENBQUNDLFlBQVk7UUFDckI7UUFFQSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLGlCQUFnQjtZQUNwQyxJQUFJLENBQUNWLFlBQVk7WUFDakIsSUFBSSxDQUFDVyxxQkFBcUI7UUFDOUI7UUFFQSxJQUFJLENBQUNGLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLG1CQUFrQjtZQUN0QyxJQUFJLENBQUNDLHFCQUFxQjtRQUM5QjtRQUVBLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxXQUFXLENBQUMsaUJBQWdCO1lBQ3BDLG9CQUFvQjtZQUNwQixJQUFJLENBQUNkLFFBQVEsQ0FBQ2dCLFVBQVU7WUFFeEIsdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxJQUFJO1lBRWYscUJBQXFCO1lBQ3JCLElBQUksQ0FBQ1QsZUFBZSxDQUFDVSxjQUFjO1FBQ3ZDO1FBRUEsSUFBSSxDQUFDTCxNQUFNLENBQUNDLFdBQVcsQ0FBQyxtQkFBa0I7WUFDdEMsb0JBQW9CO1lBQ3BCLElBQUksQ0FBQ2QsUUFBUSxDQUFDZ0IsVUFBVTtZQUV4QixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDWCxLQUFLLENBQUNZLElBQUk7WUFFZixJQUFJLENBQUNFLGNBQWM7UUFDdkI7UUFFQSxJQUFJLENBQUNOLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLFlBQVc7WUFDL0IsSUFBSSxDQUFDakMsYUFBYSxDQUFDUyxVQUFVLENBQUM7WUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQ25CLE1BQU0sRUFBRTtnQkFDZCxpQkFBaUI7Z0JBQ2pCLElBQUksQ0FBQ2tDLEtBQUssQ0FBQ2UsSUFBSTtnQkFFZixzQkFBc0I7Z0JBQ3RCLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ3FCLFlBQVk7WUFDOUI7UUFDSjtRQUVBLElBQUksQ0FBQ1IsTUFBTSxDQUFDQyxXQUFXLENBQUMsY0FBYTtZQUNqQyxJQUFJLENBQUMzQyxNQUFNLEdBQUc7WUFDZCxJQUFJLENBQUNrQyxLQUFLLENBQUNZLElBQUk7WUFDZixJQUFJLENBQUNqQixRQUFRLENBQUNnQixVQUFVO1FBQzVCO1FBRUEsUUFBUTtRQUNSLElBQUlNLFdBQXVCLElBQUk3RCxtRUFBV0EsQ0FBQyxJQUFJLEVBQUUsS0FBS0wsaUVBQW9CLEdBQUUsS0FBSTtRQUNoRmtFLFNBQVNDLEtBQUssR0FBRztRQUNqQixJQUFJLENBQUN6QyxHQUFHLENBQUMwQyxRQUFRLENBQUNGO1FBQ2xCQSxTQUFTRyxTQUFTLENBQUM7WUFDZixJQUFJLENBQUMxQixXQUFXO1FBQ3BCO1FBRUEsSUFBSTJCLFlBQXdCLElBQUlqRSxtRUFBV0EsQ0FBQyxJQUFJLEVBQUUsS0FBS0wsaUVBQW9CLEdBQUUsS0FBSTtRQUNqRnNFLFVBQVVILEtBQUssR0FBRztRQUNsQixJQUFJLENBQUN6QyxHQUFHLENBQUMwQyxRQUFRLENBQUNFO1FBQ2xCQSxVQUFVRCxTQUFTLENBQUM7WUFDaEIsSUFBSSxDQUFDRSxZQUFZO1FBQ3JCO1FBRUEsSUFBSUMsY0FBMEIsSUFBSW5FLG1FQUFXQSxDQUFDLElBQUksRUFBRUwsZ0VBQW1CLEdBQUUsS0FBS0EsaUVBQW9CLEdBQUUsS0FBSTtRQUN4R3dFLFlBQVlMLEtBQUssR0FBRztRQUNwQixJQUFJLENBQUN6QyxHQUFHLENBQUMwQyxRQUFRLENBQUNJO1FBQ2xCQSxZQUFZSCxTQUFTLENBQUM7WUFDbEIsSUFBSSxDQUFDYixZQUFZO1FBQ3JCO1FBRUF2RCwrQ0FBUUEsQ0FBQ3dFLElBQUksQ0FBQyx1QkFBdUIsSUFBSTtJQUM3QztJQUVBekIsZUFBYztRQUNWLElBQUksQ0FBQ0QsZUFBZSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDekIsV0FBVyxDQUFDbUQsU0FBUyxFQUFDLElBQUksQ0FBQ25ELFdBQVcsQ0FBQ29ELEtBQUs7SUFDdkY7SUFFQW5CLGVBQWM7UUFDVixJQUFJLENBQUNvQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxNQUFLO1lBQ3ZCLElBQUksQ0FBQ2pDLFFBQVEsQ0FBQ2tDLE1BQU0sQ0FBQztRQUN6QixHQUFFLEVBQUUsRUFBQyxJQUFJO1FBQ1QsRUFBRTtRQUNGLElBQUksQ0FBQ0YsSUFBSSxDQUFDQyxXQUFXLENBQUMsTUFBSztZQUN2QixJQUFJLENBQUNwQixNQUFNLENBQUNnQixJQUFJLENBQUM7UUFDckIsR0FBRSxFQUFFLEVBQUMsSUFBSTtJQUNiO0lBRUFWLGlCQUFnQjtRQUNaLElBQUksQ0FBQ3RDLGFBQWEsQ0FBQ1MsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ1QsYUFBYSxDQUFDc0QsT0FBTyxDQUFDO1FBRTNCLElBQUksQ0FBQ0gsSUFBSSxDQUFDQyxXQUFXLENBQUMsTUFBSztZQUN2QixJQUFJLENBQUNwRCxhQUFhLENBQUNzRCxPQUFPLENBQUM7WUFDM0IsRUFBRTtZQUNGLElBQUksQ0FBQ3hELFdBQVcsQ0FBQ3VELE1BQU07WUFDdkIsSUFBSSxDQUFDbEMsUUFBUSxDQUFDb0MsV0FBVztRQUM3QixHQUFFLEVBQUUsRUFBQyxJQUFJO1FBRVQsRUFBRTtRQUNGLElBQUksQ0FBQ0osSUFBSSxDQUFDQyxXQUFXLENBQUMsTUFBSztZQUN2QixJQUFJLENBQUNwQixNQUFNLENBQUNnQixJQUFJLENBQUM7UUFDckIsR0FBRSxFQUFFLEVBQUMsSUFBSTtJQUNiO0lBRUE5QixjQUFhO1FBQ1QsSUFBSSxDQUFDc0MsVUFBVTtJQUNuQjtJQUVBVixlQUFjO1FBQ1YsSUFBSSxDQUFDaEQsV0FBVyxDQUFDdUQsTUFBTTtRQUN2QixJQUFJLENBQUN2RCxXQUFXLENBQUN1RCxNQUFNO1FBQ3ZCLElBQUksQ0FBQ3ZELFdBQVcsQ0FBQ3VELE1BQU07SUFDM0I7SUFFQW5CLHdCQUF1QjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDNUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUNRLFdBQVcsQ0FBQ21ELFNBQVMsSUFBSSxHQUFHO2dCQUNqQyxJQUFJLENBQUNRLFdBQVc7WUFDcEI7WUFFQSxJQUFJLElBQUksQ0FBQ3RDLFFBQVEsQ0FBQzhCLFNBQVMsSUFBSSxHQUFHO2dCQUM5QixJQUFJLENBQUNPLFVBQVU7WUFDbkI7UUFDSjtJQUNKO0lBRUFBLGFBQVk7UUFDUixJQUFJLENBQUN4QixNQUFNLENBQUNnQixJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxNQUFLO1lBQ3ZCLElBQUksQ0FBQ00sWUFBWSxDQUFFO1FBQ3ZCLEdBQUUsRUFBRSxFQUFDLElBQUk7SUFDYjtJQUVBRCxjQUFhO1FBQ1QsSUFBSSxDQUFDekIsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUMsTUFBSztZQUN2QixJQUFJLENBQUNNLFlBQVksQ0FBRTtRQUN2QixHQUFFLEVBQUUsRUFBQyxJQUFJO0lBQ2I7SUFFQUEsYUFBY0MsTUFBYyxFQUFFO1FBQzFCLElBQUl6RCxPQUFjO1FBQ2xCLElBQUl5RCxVQUFVLE9BQVF6RCxPQUFPO1FBQzdCLElBQUl5RCxVQUFVLFFBQVN6RCxPQUFPO1FBRTlCLElBQUkwRCxVQUFVLElBQUksQ0FBQzNELEdBQUcsQ0FBQ0MsSUFBSSxDQUFDM0IsZ0VBQW1CLEdBQUMsR0FBR0EsaUVBQW9CLEdBQUMsSUFBRyxLQUFJMkIsTUFBSztZQUNoRkcsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE9BQU87UUFDWDtRQUNBcUQsUUFBUXBELFNBQVMsQ0FBQyxLQUFJO1FBRXRCLElBQUlxRCxTQUFTLElBQUluRixrRUFBVUEsQ0FBQyxJQUFJLEVBQUNILGdFQUFtQixHQUFDLEdBQUVBLGlFQUFvQixHQUFDLElBQUksS0FBSztRQUNyRnNGLE9BQU9qQixTQUFTLENBQUM7WUFDYixJQUFJZSxVQUFVLE9BQVEsSUFBSSxDQUFDRyxTQUFTO1lBQ3BDLElBQUlILFVBQVUsUUFBUyxJQUFJLENBQUNJLFVBQVU7UUFDMUM7SUFDSjtJQUVBRCxZQUFXO1FBQ1AsSUFBSSxDQUFDRSxLQUFLO1FBQ1YsSUFBSSxDQUFDbEUsV0FBVyxDQUFDbUUsWUFBWSxDQUFDLElBQUksQ0FBQ25FLFdBQVcsQ0FBQ2MsZ0JBQWdCO1FBQy9ELElBQUksQ0FBQ2QsV0FBVyxDQUFDb0UsbUJBQW1CLENBQUM7UUFDckMsSUFBSSxDQUFDcEUsV0FBVyxDQUFDcUUsUUFBUTtRQUN6QixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLFFBQU87WUFBQ0MsWUFBVztRQUFJO0lBQzVDO0lBRUFQLGFBQVk7UUFDUixJQUFJLENBQUNDLEtBQUs7UUFDVixJQUFJLENBQUNsRSxXQUFXLENBQUN5RSxTQUFTO1FBQzFCLElBQUksQ0FBQ0gsS0FBSyxDQUFDQyxLQUFLLENBQUMsWUFBVztZQUFDVixRQUFPLElBQUksQ0FBQzdELFdBQVcsQ0FBQzBFLGVBQWU7UUFBRTtJQUMxRTtJQUVBUixRQUFPO1FBQ0gsSUFBSSxDQUFDaEMsTUFBTSxDQUFDeUMsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQ3lDLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUN6QyxNQUFNLENBQUN5QyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDekMsTUFBTSxDQUFDeUMsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQ3lDLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUN6QyxNQUFNLENBQUN5QyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDOUUsT0FBTyxDQUFDK0UsUUFBUTtRQUVyQixJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDO0lBQ3RCO0lBdFBBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO0lBQ1Y7QUFvUEoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0JhdHRsZS50cz9kNzhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lLCBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFJlY3RCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uJztcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVNYW5hZ2VyJztcbmltcG9ydCBEZWJ1Z0J1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0RlYnVnQnV0dG9uJztcbmltcG9ydCB7IEFDYXJkLCBDYXJkUmVwbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZFJlcG8nO1xuaW1wb3J0IE9wcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvT3Bwb25lbnQnO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWx0aEJhcic7XG5pbXBvcnQgTW9kYWxTaW1wbGVNZXNzYWdlIGZyb20gJy4uL21vZGFscy9Nb2RhbFNpbXBsZU1lc3NhZ2UnO1xuaW1wb3J0IE1hdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0Y2gnO1xuaW1wb3J0IFBsYXllckF0dGFja0JhciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllckF0dGFja0Jhcic7XG5pbXBvcnQgTW9kYWxRdWVzdGlvbiBmcm9tICcuLi9tb2RhbHMvTW9kYWxRdWVzdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCYXR0bGUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlclxuICAgIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XG4gICAgLy9cbiAgICBnYW1lT3ZlclRleHQgOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBidXR0b246IFJlY3RCdXR0b25cbiAgICAvL1xuICAgIHBsYXllcjogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgcGxheWVySGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICBwbGF5ZXJBdHRhY2tCYXI6IFBsYXllckF0dGFja0JhclxuICAgIC8vXG4gICAgb3Bwb25lbnQ6IE9wcG9uZW50XG4gICAgLy9cbiAgICBtYXRjaDogTWF0Y2hcbiAgICBpc0RvbmU6IGJvb2xlYW5cbiAgICAvL1xuICAgIG1vZGFsUXVlc3Rpb246IE1vZGFsUXVlc3Rpb25cbiAgICAvL1xuICAgIGNlbnRlck1lc3NhZ2U6IEdhbWVPYmplY3RzLlRleHRcblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQmF0dGxlJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTogYW55IClcbiAgICB7ICAgXG4gICAgICAgIC8vIFJlc2V0IERhdGFcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMubW9kYWxRdWVzdGlvbiA9IG5ldyBNb2RhbFF1ZXN0aW9uKHRoaXMsJ01vZGFsUXVlc3Rpb24nKTtcbiAgICAgICAgdGhpcy5tb2RhbFF1ZXN0aW9uLmNhbGxiYWNrQ29ycmVjdCA9ICgpPT57XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGFsUXVlc3Rpb24uY2FsbGJhY2tXcm9uZyA9ICgpPT57XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0QmFja2dyb3VuZENvbG9yKDB4ZTZlNmU2KTtcblxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmxvYWREYXRhKClcblxuICAgICAgICAvLyBSZW5kZXIgQ2VudGVyIE1lc3NhZ2VcbiAgICAgICAgdGhpcy5jZW50ZXJNZXNzYWdlID0gdGhpcy5hZGQudGV4dChHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIgLTE1MCwnJyx7XG4gICAgICAgICAgICBmb250OiAnYm9sZCA2MHB4IEFyaWFsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJywgIC8vICdsZWZ0J3wnY2VudGVyJ3wncmlnaHQnfCdqdXN0aWZ5J1xuICAgICAgICB9LCkuc2V0T3JpZ2luKDAuNSkuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgICAgICAvLyBHZXQgT3Bwb25lbnQgRGF0YVxuICAgICAgICBsZXQgY2FyZEtleSA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q2FyZEtleSggdGhpcy5nYW1lTWFuYWdlci5iYXR0bGVTbG90TnVtYmVyIClcbiAgICAgICAgbGV0IGNhcmQ6QUNhcmR8dW5kZWZpbmVkID0gQ2FyZFJlcG8uZmluZENhcmQoY2FyZEtleSlcbiAgICAgICAgaWYoIGNhcmQgPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZpbmQgQ2FyZCBEYXRhJylcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXIgT3Bwb25lbnQgU3ByaXRlXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBuZXcgT3Bwb25lbnQodGhpcyxjYXJkKTtcblxuICAgICAgICAvLyBSZW5kZXIgUGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5hZGQuc3ByaXRlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCAncGxheWVyJylcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTM1MClcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFsdGgoKVxuXG4gICAgICAgIC8vIFJlbmRlciBNYXRjaFxuICAgICAgICB0aGlzLm1hdGNoID0gbmV3IE1hdGNoKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzItNTApXG4gICAgICAgIHRoaXMubWF0Y2guY2FsbGJhY2tTY29yZSA9ICggdmFsdWU6IG51bWJlciApPT57XG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFja0Jhci5hZGRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgUGxheWVyIEF0dGFjayBCYXJcbiAgICAgICAgdGhpcy5wbGF5ZXJBdHRhY2tCYXIgPSBuZXcgUGxheWVyQXR0YWNrQmFyKCB0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQtNDUwLCAyMCApXG4gICAgICAgIHRoaXMucGxheWVyQXR0YWNrQmFyLmNhbGxiYWNrQnVsYkJ1dHRvbiA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFja0Jhci5oaWRlQnVsYkJ1dHRvbigpXG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFjaygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcigncGxheWVyLXVwZGF0ZScsKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVuZGVySGVhbHRoKClcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Mb3NlQ29uZGl0aW9uKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcignb3Bwb25lbnQtdXBkYXRlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5jaGVja1dpbkxvc2VDb25kaXRpb24oKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ3BsYXllci1hdHRhY2snLCgpPT57XG4gICAgICAgICAgICAvLyBTdG9wIE9wcG9uZW50IEJhclxuICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5zdG9wQXR0YWNrKCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3AgJiBIaWRlIE1hdGNoaW5nXG4gICAgICAgICAgICB0aGlzLm1hdGNoLmhpZGUoKVxuXG4gICAgICAgICAgICAvLyBTaG93IEF0dGFjayBCdXR0b25cbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrQmFyLnNob3dCdWxiQnV0dG9uKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdvcHBvbmVudC1hdHRhY2snLCgpPT57XG4gICAgICAgICAgICAvLyBTdG9wIE9wcG9uZW50IEJhclxuICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5zdG9wQXR0YWNrKCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3AgTWF0Y2hpbmdcbiAgICAgICAgICAgIHRoaXMubWF0Y2guaGlkZSgpO1xuXG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50QXR0YWNrKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ2NvbnRpbnVlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJNZXNzYWdlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggIXRoaXMuaXNEb25lICl7XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgTWF0Y2hpbmdcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoLnNob3coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSZXN1bWUgT3Bwb25lbnQgQmFyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5yZXN1bWVBdHRhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcignYmF0dGxlLWVuZCcsKCk9PntcbiAgICAgICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWF0Y2guaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5zdG9wQXR0YWNrKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gRGVidWdcbiAgICAgICAgbGV0IGRlYnVnV2luOkRlYnVnQnV0dG9uID0gbmV3IERlYnVnQnV0dG9uKHRoaXMsIDE1MCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLTEwMCwnU2V0IFdpbicpXG4gICAgICAgIGRlYnVnV2luLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnV2luKVxuICAgICAgICBkZWJ1Z1dpbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVXaW4oKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbGV0IGRlYnVnTG9zZTpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ1NldCBMb3NlJylcbiAgICAgICAgZGVidWdMb3NlLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnTG9zZSlcbiAgICAgICAgZGVidWdMb3NlLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0ZUxvc2UoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkZWJ1Z0F0dGFjazpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoIC0xNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0yMDAsJ0F0dGFjaycpXG4gICAgICAgIGRlYnVnQXR0YWNrLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnQXR0YWNrKVxuICAgICAgICBkZWJ1Z0F0dGFjay5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXR0YWNrKClcbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVySGVhbHRoKCl7XG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyLnJlbmRlckhlYWx0aCh0aGlzLmdhbWVNYW5hZ2VyLmN1cnJlbnRIcCx0aGlzLmdhbWVNYW5hZ2VyLm1heEhwKVxuICAgIH1cblxuICAgIHBsYXllckF0dGFjaygpe1xuICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMTAwMCwoKT0+e1xuICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5kYW1hZ2UoMSk7XG4gICAgICAgIH0sW10sdGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCgyMDAwLCgpPT57XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KCdjb250aW51ZScpO1xuICAgICAgICB9LFtdLHRoaXMpXG4gICAgfVxuXG4gICAgb3Bwb25lbnRBdHRhY2soKXtcbiAgICAgICAgdGhpcy5jZW50ZXJNZXNzYWdlLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2VudGVyTWVzc2FnZS5zZXRUZXh0KCdNci4gV29ybSBBdHRhY2shISEnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCgxMDAwLCgpPT57XG4gICAgICAgICAgICB0aGlzLmNlbnRlck1lc3NhZ2Uuc2V0VGV4dCgnUGxheWVyIEhQIC0xJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQucmVzZXRBdHRhY2soKTtcbiAgICAgICAgfSxbXSx0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCgyMDAwLCgpPT57XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KCdjb250aW51ZScpO1xuICAgICAgICB9LFtdLHRoaXMpXG4gICAgfVxuXG4gICAgc2ltdWxhdGVXaW4oKXtcbiAgICAgICAgdGhpcy5wcm9jZXNzV2luKClcbiAgICB9XG5cbiAgICBzaW11bGF0ZUxvc2UoKXtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKVxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmRhbWFnZSgpXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICB9XG4gICAgXG4gICAgY2hlY2tXaW5Mb3NlQ29uZGl0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5pc0RvbmUgKXtcbiAgICAgICAgICAgIGlmKCB0aGlzLmdhbWVNYW5hZ2VyLmN1cnJlbnRIcCA8PSAwICl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiggdGhpcy5vcHBvbmVudC5jdXJyZW50SHAgPD0gMCApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1dpbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzV2luKCl7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ2JhdHRsZS1lbmQnKTtcblxuICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMTAwMCwoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJFbmRpbmcoICd3aW4nIClcbiAgICAgICAgfSxbXSx0aGlzKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzTG9zZSgpe1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KCdiYXR0bGUtZW5kJyk7XG5cbiAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDEwMDAsKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRW5kaW5nKCAnbG9zZScgKVxuICAgICAgICB9LFtdLHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckVuZGluZyggc3RhdHVzOiBzdHJpbmcgKXtcbiAgICAgICAgbGV0IHRleHQ6c3RyaW5nID0gJ0ludmFsaWQgU3RhdHVzLi4uJ1xuICAgICAgICBpZiggc3RhdHVzID09ICd3aW4nICkgdGV4dCA9IFwiTXIuIFdvcm0gZmFpbnRlZC5cIjtcbiAgICAgICAgaWYoIHN0YXR1cyA9PSAnbG9zZScgKSB0ZXh0ID0gXCJZb3UgZmFpbnRlZCFcIjtcblxuICAgICAgICBsZXQgZW5kVGV4dCA9IHRoaXMuYWRkLnRleHQoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBHYW1lTGliLnNjcmVlbkhlaWdodC8yIC0xNTAsdGV4dCx7XG4gICAgICAgICAgICBmb250OiAnYm9sZCA2MHB4IEFyaWFsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJywgIC8vICdsZWZ0J3wnY2VudGVyJ3wncmlnaHQnfCdqdXN0aWZ5J1xuICAgICAgICB9LClcbiAgICAgICAgZW5kVGV4dC5zZXRPcmlnaW4oMC41LDAuNSlcblxuICAgICAgICBsZXQgYnV0dG9uID0gbmV3IFJlY3RCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiArIDIwMCwgJ09LJylcbiAgICAgICAgYnV0dG9uLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgaWYoIHN0YXR1cyA9PSAnd2luJyApIHRoaXMuaGFuZGxlV2luKClcbiAgICAgICAgICAgIGlmKCBzdGF0dXMgPT0gJ2xvc2UnICkgdGhpcy5oYW5kbGVMb3NlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVXaW4oKXtcbiAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuY2xlYXJDYXJkS2V5KHRoaXMuZ2FtZU1hbmFnZXIuYmF0dGxlU2xvdE51bWJlcilcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5zZXRCYXR0bGVTbG90TnVtYmVyKDApXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2F2ZURhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyx7aXNDb250aW51ZTp0cnVlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9zZSgpe1xuICAgICAgICB0aGlzLmNsZWFuKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jbGVhckRhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lT3Zlcicse3N0YXR1czp0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpfSk7XG4gICAgfVxuICAgXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wcG9uZW50LXVwZGF0ZScpO1xuICAgICAgICB0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcigncGxheWVyLWF0dGFjaycpO1xuICAgICAgICB0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcignb3Bwb25lbnQtYXR0YWNrJyk7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdjb250aW51ZScpO1xuICAgICAgICB0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcignYmF0dGxlLWVuZCcpO1xuICAgICAgICB0aGlzLmNhbWVyYXMucmVzZXRBbGwoKTtcblxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSgnTW9kYWxRdWVzdGlvbicpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJHYW1lTGliIiwiRXZlbnRCdXMiLCJTY2VuZSIsIlJlY3RCdXR0b24iLCJHYW1lTWFuYWdlciIsIkRlYnVnQnV0dG9uIiwiQ2FyZFJlcG8iLCJPcHBvbmVudCIsIkhlYWx0aEJhciIsIk1hdGNoIiwiUGxheWVyQXR0YWNrQmFyIiwiTW9kYWxRdWVzdGlvbiIsIkJhdHRsZSIsImNyZWF0ZSIsImRhdGEiLCJpc0RvbmUiLCJtb2RhbFF1ZXN0aW9uIiwiY2FsbGJhY2tDb3JyZWN0IiwiY2FsbGJhY2tXcm9uZyIsImNhbWVyYSIsImNhbWVyYXMiLCJtYWluIiwic2V0QmFja2dyb3VuZENvbG9yIiwiZ2FtZU1hbmFnZXIiLCJsb2FkRGF0YSIsImNlbnRlck1lc3NhZ2UiLCJhZGQiLCJ0ZXh0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJmb250IiwiY29sb3IiLCJhbGlnbiIsInNldE9yaWdpbiIsInNldFZpc2libGUiLCJjYXJkS2V5IiwiZ2V0Q2FyZEtleSIsImJhdHRsZVNsb3ROdW1iZXIiLCJjYXJkIiwiZmluZENhcmQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic2ltdWxhdGVXaW4iLCJvcHBvbmVudCIsInBsYXllciIsInNwcml0ZSIsInBsYXllckhlYWx0aEJhciIsInJlbmRlckhlYWx0aCIsIm1hdGNoIiwiY2FsbGJhY2tTY29yZSIsInZhbHVlIiwicGxheWVyQXR0YWNrQmFyIiwiYWRkVmFsdWUiLCJjYWxsYmFja0J1bGJCdXR0b24iLCJoaWRlQnVsYkJ1dHRvbiIsInBsYXllckF0dGFjayIsImV2ZW50cyIsImFkZExpc3RlbmVyIiwiY2hlY2tXaW5Mb3NlQ29uZGl0aW9uIiwic3RvcEF0dGFjayIsImhpZGUiLCJzaG93QnVsYkJ1dHRvbiIsIm9wcG9uZW50QXR0YWNrIiwic2hvdyIsInJlc3VtZUF0dGFjayIsImRlYnVnV2luIiwic2NhbGUiLCJleGlzdGluZyIsIm9uUHJlc3NlZCIsImRlYnVnTG9zZSIsInNpbXVsYXRlTG9zZSIsImRlYnVnQXR0YWNrIiwiZW1pdCIsImN1cnJlbnRIcCIsIm1heEhwIiwidGltZSIsImRlbGF5ZWRDYWxsIiwiZGFtYWdlIiwic2V0VGV4dCIsInJlc2V0QXR0YWNrIiwicHJvY2Vzc1dpbiIsInByb2Nlc3NMb3NlIiwicmVuZGVyRW5kaW5nIiwic3RhdHVzIiwiZW5kVGV4dCIsImJ1dHRvbiIsImhhbmRsZVdpbiIsImhhbmRsZUxvc2UiLCJjbGVhbiIsImNsZWFyQ2FyZEtleSIsInNldEJhdHRsZVNsb3ROdW1iZXIiLCJzYXZlRGF0YSIsInNjZW5lIiwic3RhcnQiLCJpc0NvbnRpbnVlIiwiY2xlYXJEYXRhIiwiY2hlY2tHYW1lU3RhdHVzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNldEFsbCIsInJlbW92ZSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/Battle.ts\n"));

/***/ })

});