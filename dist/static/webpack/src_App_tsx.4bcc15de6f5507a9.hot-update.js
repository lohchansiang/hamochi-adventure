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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battle: function() { return /* binding */ Battle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardRepo */ \"./src/game/components/CardRepo.ts\");\n/* harmony import */ var _components_Opponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Opponent */ \"./src/game/components/Opponent.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/ModalSimpleMessage */ \"./src/game/modals/ModalSimpleMessage.ts\");\n\n\n\n\n\n\n\n\n\nclass Battle extends phaser__WEBPACK_IMPORTED_MODULE_2__.Scene {\n    create(data) {\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n        this.gameManager.loadData();\n        // Get Opponent Data\n        let cardKey = this.gameManager.getCardKey(this.gameManager.battleSlotNumber);\n        let card = _components_CardRepo__WEBPACK_IMPORTED_MODULE_5__.CardRepo.findCard(cardKey);\n        if (card == undefined) {\n            console.log(\"Unable to find Card Data\");\n            this.simulateWin();\n            return;\n        }\n        // Render Opponent Sprite\n        this.opponent = new _components_Opponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, card);\n        // Render Player\n        this.player = this.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"player\");\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 400);\n        this.renderHealth();\n        // Render Match Game\n        let debugWin = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 100, \"Set Win\");\n        debugWin.scale = 0.5;\n        this.add.existing(debugWin);\n        debugWin.onPressed(()=>{\n            this.simulateWin();\n        });\n        let debugLose = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Set Lose\");\n        debugLose.scale = 0.5;\n        this.add.existing(debugLose);\n        debugLose.onPressed(()=>{\n            this.simulateLose();\n        });\n        let debugAttack = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 200, \"Attack\");\n        debugAttack.scale = 0.5;\n        this.add.existing(debugAttack);\n        debugAttack.onPressed(()=>{\n            this.playerAttack();\n        });\n        this.events.addListener(\"player-update\", ()=>{\n            this.renderHealth();\n            this.checkWinLoseCondition();\n        });\n        this.events.addListener(\"opponent-update\", ()=>{\n            this.checkWinLoseCondition();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    playerAttack() {\n        this.opponent.damage(1);\n    }\n    simulateWin() {\n        this.processWin();\n    }\n    simulateLose() {\n        this.gameManager.damage();\n        this.gameManager.damage();\n        this.gameManager.damage();\n    }\n    checkWinLoseCondition() {\n        if (this.gameManager.currentHp <= 0) {\n            this.processLose();\n        }\n        if (this.opponent.currentHp <= 0) {\n            this.processWin();\n        }\n    }\n    processWin() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalWin\", \"Win\", ()=>{\n            this.clean();\n            this.gameManager.clearCardKey(this.gameManager.battleSlotNumber);\n            this.gameManager.setBattleSlotNumber(0);\n            this.gameManager.saveData();\n            this.scene.start(\"Game\", {\n                isContinue: true\n            });\n        });\n    }\n    processLose() {\n        new _modals_ModalSimpleMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, \"ModalLose\", \"Lose\", ()=>{\n            this.clean();\n            this.gameManager.clearData();\n            this.scene.start(\"GameOver\", {\n                status: this.gameManager.checkGameStatus()\n            });\n        });\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"opponent-update\");\n        this.cameras.resetAll();\n    }\n    // Tiles \n    initTiles() {\n        //Loop through each column in the grid\n        for(var i = 0; i < this.tileGrid.length; i++){\n            //Loop through each position in a specific column, starting from the top\n            for(var j = 0; j < this.tileGrid.length; j++){\n                //Add the tile to the game at this grid position\n                var tile = this.addTile(i, j);\n                //Keep a track of the tiles position in our tileGrid\n                this.tileGrid[i][j] = tile;\n            }\n        }\n    //Once the tiles are ready, check for any matches on the grid\n    // this.game.time.events.add(600, function(){\n    //     this.checkMatch();\n    // });\n    }\n    constructor(){\n        super(\"Battle\");\n        //\n        this.tileTypes = [\n            \"blue\",\n            \"green\",\n            \"orange\",\n            \"yellow\"\n        ];\n        this.score = 0;\n        this.activeTile1 = null;\n        this.activeTile2 = null;\n        this.tileGrid = [\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ],\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ],\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ],\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ],\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ],\n            [\n                null,\n                null,\n                null,\n                null,\n                null,\n                null\n            ]\n        ];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9CYXR0bGUudHM/ZDc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgR2FtZSwgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBSZWN0QnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvUmVjdEJ1dHRvbic7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lTWFuYWdlcic7XG5pbXBvcnQgRGVidWdCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9EZWJ1Z0J1dHRvbic7XG5pbXBvcnQgeyBBQ2FyZCwgQ2FyZFJlcG8gfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRSZXBvJztcbmltcG9ydCBPcHBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL09wcG9uZW50JztcbmltcG9ydCBIZWFsdGhCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFsdGhCYXInO1xuaW1wb3J0IE1vZGFsU2ltcGxlTWVzc2FnZSBmcm9tICcuLi9tb2RhbHMvTW9kYWxTaW1wbGVNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIEJhdHRsZSBleHRlbmRzIFNjZW5lXG57XG4gICAgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICAvL1xuICAgIGdhbWVPdmVyVGV4dCA6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAgIGJ1dHRvbjogUmVjdEJ1dHRvblxuICAgIC8vXG4gICAgcGxheWVyOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBwbGF5ZXJIZWFsdGhCYXI6IEhlYWx0aEJhclxuICAgIC8vXG4gICAgb3Bwb25lbnQ6IE9wcG9uZW50XG4gICAgLy9cbiAgICB0aWxlVHlwZXM6IHN0cmluZ1tdID0gWydibHVlJywnZ3JlZW4nLCdvcmFuZ2UnLCd5ZWxsb3cnXVxuICAgIHNjb3JlOiBudW1iZXIgPSAwXG4gICAgYWN0aXZlVGlsZTE6IEdhbWVPYmplY3RzLlNwcml0ZSB8IG51bGwgPSBudWxsXG4gICAgYWN0aXZlVGlsZTI6IEdhbWVPYmplY3RzLlNwcml0ZSB8IG51bGwgPSBudWxsXG4gICAgdGlsZUdyaWQ6IGFueSA9IFtcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ0JhdHRsZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoIGRhdGE6IGFueSApXG4gICAgeyAgIFxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEJhY2tncm91bmRDb2xvcigweGU2ZTZlNik7XG5cbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcih0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5sb2FkRGF0YSgpXG5cbiAgICAgICAgLy8gR2V0IE9wcG9uZW50IERhdGFcbiAgICAgICAgbGV0IGNhcmRLZXkgPSB0aGlzLmdhbWVNYW5hZ2VyLmdldENhcmRLZXkoIHRoaXMuZ2FtZU1hbmFnZXIuYmF0dGxlU2xvdE51bWJlciApXG4gICAgICAgIGxldCBjYXJkOkFDYXJkfHVuZGVmaW5lZCA9IENhcmRSZXBvLmZpbmRDYXJkKGNhcmRLZXkpXG4gICAgICAgIGlmKCBjYXJkID09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmaW5kIENhcmQgRGF0YScpXG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRlV2luKClcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIE9wcG9uZW50IFNwcml0ZVxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IE9wcG9uZW50KHRoaXMsY2FyZCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIFBsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMuYWRkLnNwcml0ZShHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQgLTIwMCwgJ3BsYXllcicpXG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC00MDApXG4gICAgICAgIHRoaXMucmVuZGVySGVhbHRoKClcblxuICAgICAgICAvLyBSZW5kZXIgTWF0Y2ggR2FtZVxuXG5cblxuXG4gICAgICAgIGxldCBkZWJ1Z1dpbjpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLCAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0xMDAsJ1NldCBXaW4nKVxuICAgICAgICBkZWJ1Z1dpbi5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z1dpbilcbiAgICAgICAgZGVidWdXaW4ub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRlV2luKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWJ1Z0xvc2U6RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywgMTUwLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCdTZXQgTG9zZScpXG4gICAgICAgIGRlYnVnTG9zZS5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z0xvc2UpXG4gICAgICAgIGRlYnVnTG9zZS5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGVMb3NlKClcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZGVidWdBdHRhY2s6RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aCAtMTUwLCBHYW1lTGliLnNjcmVlbkhlaWdodCAtMjAwLCdBdHRhY2snKVxuICAgICAgICBkZWJ1Z0F0dGFjay5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z0F0dGFjaylcbiAgICAgICAgZGVidWdBdHRhY2sub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnBsYXllckF0dGFjaygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLnJlbmRlckhlYWx0aCgpXG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luTG9zZUNvbmRpdGlvbigpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ29wcG9uZW50LXVwZGF0ZScsKCk9PntcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Mb3NlQ29uZGl0aW9uKClcbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVySGVhbHRoKCl7XG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyLnJlbmRlckhlYWx0aCh0aGlzLmdhbWVNYW5hZ2VyLmN1cnJlbnRIcCx0aGlzLmdhbWVNYW5hZ2VyLm1heEhwKVxuICAgIH1cblxuICAgIHBsYXllckF0dGFjaygpe1xuICAgICAgICB0aGlzLm9wcG9uZW50LmRhbWFnZSgxKVxuICAgIH1cblxuICAgIHNpbXVsYXRlV2luKCl7XG4gICAgICAgIHRoaXMucHJvY2Vzc1dpbigpXG4gICAgfVxuXG4gICAgc2ltdWxhdGVMb3NlKCl7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5kYW1hZ2UoKVxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmRhbWFnZSgpXG4gICAgfVxuICAgIFxuICAgIGNoZWNrV2luTG9zZUNvbmRpdGlvbigpe1xuICAgICAgICBpZiggdGhpcy5nYW1lTWFuYWdlci5jdXJyZW50SHAgPD0gMCApe1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9zZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiggdGhpcy5vcHBvbmVudC5jdXJyZW50SHAgPD0gMCApe1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzV2luKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NXaW4oKXtcbiAgICAgICAgbmV3IE1vZGFsU2ltcGxlTWVzc2FnZSh0aGlzLCdNb2RhbFdpbicsXCJXaW5cIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmNsZWFyQ2FyZEtleSh0aGlzLmdhbWVNYW5hZ2VyLmJhdHRsZVNsb3ROdW1iZXIpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLnNldEJhdHRsZVNsb3ROdW1iZXIoMClcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2F2ZURhdGEoKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScse2lzQ29udGludWU6dHJ1ZX0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3NMb3NlKCl7XG4gICAgICAgIG5ldyBNb2RhbFNpbXBsZU1lc3NhZ2UodGhpcywnTW9kYWxMb3NlJyxcIkxvc2VcIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbGVhbigpXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmNsZWFyRGF0YSgpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lT3Zlcicse3N0YXR1czp0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wcG9uZW50LXVwZGF0ZScpO1xuICAgICAgICB0aGlzLmNhbWVyYXMucmVzZXRBbGwoKVxuICAgIH1cblxuICAgIC8vIFRpbGVzIFxuICAgIGluaXRUaWxlcygpe1xuICAgICAgICAvL0xvb3AgdGhyb3VnaCBlYWNoIGNvbHVtbiBpbiB0aGUgZ3JpZFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50aWxlR3JpZC5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgIC8vTG9vcCB0aHJvdWdoIGVhY2ggcG9zaXRpb24gaW4gYSBzcGVjaWZpYyBjb2x1bW4sIHN0YXJ0aW5nIGZyb20gdGhlIHRvcFxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMudGlsZUdyaWQubGVuZ3RoOyBqKyspe1xuXG4gICAgICAgICAgICAgICAgLy9BZGQgdGhlIHRpbGUgdG8gdGhlIGdhbWUgYXQgdGhpcyBncmlkIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSB0aGlzLmFkZFRpbGUoaSwgaik7XG5cbiAgICAgICAgICAgICAgICAvL0tlZXAgYSB0cmFjayBvZiB0aGUgdGlsZXMgcG9zaXRpb24gaW4gb3VyIHRpbGVHcmlkXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlR3JpZFtpXVtqXSA9IHRpbGU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vT25jZSB0aGUgdGlsZXMgYXJlIHJlYWR5LCBjaGVjayBmb3IgYW55IG1hdGNoZXMgb24gdGhlIGdyaWRcbiAgICAgICAgLy8gdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCg2MDAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrTWF0Y2goKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkdhbWVMaWIiLCJFdmVudEJ1cyIsIlNjZW5lIiwiR2FtZU1hbmFnZXIiLCJEZWJ1Z0J1dHRvbiIsIkNhcmRSZXBvIiwiT3Bwb25lbnQiLCJIZWFsdGhCYXIiLCJNb2RhbFNpbXBsZU1lc3NhZ2UiLCJCYXR0bGUiLCJjcmVhdGUiLCJkYXRhIiwiY2FtZXJhIiwiY2FtZXJhcyIsIm1haW4iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJnYW1lTWFuYWdlciIsImxvYWREYXRhIiwiY2FyZEtleSIsImdldENhcmRLZXkiLCJiYXR0bGVTbG90TnVtYmVyIiwiY2FyZCIsImZpbmRDYXJkIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInNpbXVsYXRlV2luIiwib3Bwb25lbnQiLCJwbGF5ZXIiLCJhZGQiLCJzcHJpdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInBsYXllckhlYWx0aEJhciIsInJlbmRlckhlYWx0aCIsImRlYnVnV2luIiwic2NhbGUiLCJleGlzdGluZyIsIm9uUHJlc3NlZCIsImRlYnVnTG9zZSIsInNpbXVsYXRlTG9zZSIsImRlYnVnQXR0YWNrIiwicGxheWVyQXR0YWNrIiwiZXZlbnRzIiwiYWRkTGlzdGVuZXIiLCJjaGVja1dpbkxvc2VDb25kaXRpb24iLCJlbWl0IiwiY3VycmVudEhwIiwibWF4SHAiLCJkYW1hZ2UiLCJwcm9jZXNzV2luIiwicHJvY2Vzc0xvc2UiLCJjbGVhbiIsImNsZWFyQ2FyZEtleSIsInNldEJhdHRsZVNsb3ROdW1iZXIiLCJzYXZlRGF0YSIsInNjZW5lIiwic3RhcnQiLCJpc0NvbnRpbnVlIiwiY2xlYXJEYXRhIiwic3RhdHVzIiwiY2hlY2tHYW1lU3RhdHVzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNldEFsbCIsImluaXRUaWxlcyIsImkiLCJ0aWxlR3JpZCIsImxlbmd0aCIsImoiLCJ0aWxlIiwiYWRkVGlsZSIsImNvbnN0cnVjdG9yIiwidGlsZVR5cGVzIiwic2NvcmUiLCJhY3RpdmVUaWxlMSIsImFjdGl2ZVRpbGUyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/Battle.ts\n"));

/***/ })

});