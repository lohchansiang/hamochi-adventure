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

/***/ "./src/game/scenes/Game.ts":
/*!*********************************!*\
  !*** ./src/game/scenes/Game.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AdventureCard */ \"./src/game/components/AdventureCard.ts\");\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_GameManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameManager */ \"./src/game/components/GameManager.ts\");\n/* harmony import */ var _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/components/DebugButton */ \"./src/lib/components/DebugButton.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    create(data) {\n        let isContinue = false;\n        if (data && data.isContinue) {\n            isContinue = true;\n            this.scene.settings.data = {};\n        }\n        this.camera = this.cameras.main;\n        this.camera.setBackgroundColor(0xe6e6e6);\n        this.gameManager = new _components_GameManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n        if (isContinue) {\n            this.gameManager.loadData();\n            this.initStep(!isContinue);\n        }\n        // Render Next Button\n        this.renderPlayerAvatar();\n        this.renderNextButton();\n        // Render Player Step & HP (Run Once)\n        this.renderUI();\n        // Render Debug Button\n        if (this.renderDebug) {\n            this.renderDebugRegenerate();\n        // this.renderDebugDamage()\n        // this.renderDebugHeal()\n        // this.renderDebugSaveLoad()\n        }\n        // Add Listener\n        this.events.addListener(\"player-update\", ()=>{\n            this.updateUI();\n            this.checkWinCondition();\n        });\n        this.events.addListener(\"card-update\", ()=>{\n            this.initStep(false);\n            this.nextButton.setDisabled(!this.gameManager.checkCanNext());\n        });\n        this.events.addListener(\"start-battle\", ()=>{\n            this.gotoBattleScene();\n        });\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderDebugSaveLoad() {\n        let debugSaveButton = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 200, \"Save\");\n        debugSaveButton.scale = 0.5;\n        this.add.existing(debugSaveButton);\n        debugSaveButton.onPressed(()=>{\n            this.gameManager.saveData();\n        });\n        let debugLoadButton = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth - 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 100, \"Load\");\n        debugLoadButton.scale = 0.5;\n        this.add.existing(debugLoadButton);\n        debugLoadButton.onPressed(()=>{\n            this.gameManager.loadData();\n        });\n    }\n    renderDebugDamage() {\n        let debugDamageButton = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 100, \"-1 Hp\");\n        debugDamageButton.scale = 0.5;\n        this.add.existing(debugDamageButton);\n        debugDamageButton.onPressed(()=>{\n            this.gameManager.damage();\n        });\n    }\n    renderDebugHeal() {\n        let debugHealButton = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 200, \"+1 Hp\");\n        debugHealButton.scale = 0.5;\n        this.add.existing(debugHealButton);\n        debugHealButton.onPressed(()=>{\n            this.gameManager.heal();\n        });\n    }\n    renderDebugRegenerate() {\n        let debugRegenerateButton = new _lib_components_DebugButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 150, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 300, \"Skip\");\n        debugRegenerateButton.scale = 0.5;\n        this.add.existing(debugRegenerateButton);\n        debugRegenerateButton.onPressed(()=>{\n            this.gameManager.addStep();\n            if (this.gameManager.checkGameStatus() == \"ongoing\") {\n                this.initStep();\n            }\n        });\n    }\n    renderUI() {\n        this.stepText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, 100, this.gameManager.getStepString(), {\n            fontSize: 40,\n            color: \"black\"\n        });\n        this.stepText.setOrigin(0.5, 0.5);\n        this.coinText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 260, this.gameManager.getCoinString(), {\n            fontSize: 40,\n            color: \"black\"\n        });\n        this.coinText.setOrigin(0.5, 0.5);\n        this.hpText = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 320, this.gameManager.getHpString(), {\n            fontSize: 40,\n            color: \"black\"\n        });\n        this.hpText.setOrigin(0.5, 0.5);\n        //\n        this.playerHealthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight - 400);\n        this.renderHealth();\n    }\n    updateUI() {\n        this.stepText.setText(this.gameManager.getStepString());\n        this.coinText.setText(this.gameManager.getCoinString());\n        this.hpText.setText(this.gameManager.getHpString());\n        this.renderHealth();\n    }\n    renderHealth() {\n        this.playerHealthBar.renderHealth(this.gameManager.currentHp, this.gameManager.maxHp);\n    }\n    renderPlayerAvatar() {\n        this.player = this.add.sprite(200, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 2 + 100, \"player\");\n    }\n    renderNextButton() {\n        this.nextButton = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth - 200, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 2 + 100, \"next\");\n        this.nextButton.onPressed(()=>{\n            this.gameManager.addStep();\n            if (this.gameManager.checkGameStatus() == \"ongoing\") {\n                this.initStep();\n            }\n        });\n    }\n    initStep() {\n        let regen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        if (regen) this.gameManager.generateCardKeys();\n        this.renderCards();\n    }\n    renderCards() {\n        if (this.card1) this.card1.destroy();\n        if (this.card2) this.card2.destroy();\n        if (this.card3) this.card3.destroy();\n        if (this.gameManager.getCardKey(1)) {\n            this.card1 = new _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 4, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 3, this.gameManager.getCardKey(1), this.gameManager, 1);\n        }\n        if (this.gameManager.getCardKey(2)) {\n            this.card2 = new _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 3, this.gameManager.getCardKey(2), this.gameManager, 2);\n        }\n        if (this.gameManager.getCardKey(3)) {\n            this.card3 = new _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 4 * 3, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 3, this.gameManager.getCardKey(3), this.gameManager, 3);\n        }\n        this.nextButton.setDisabled(!this.gameManager.checkCanNext());\n    }\n    checkWinCondition() {\n        if (this.gameManager.checkGameStatus() != \"ongoing\") {\n            this.gotoGameOverScene();\n        }\n    }\n    gotoGameOverScene() {\n        this.clean();\n        this.gameManager.clearData();\n        this.scene.start(\"GameOver\", {\n            status: this.gameManager.checkGameStatus()\n        });\n    }\n    gotoBattleScene() {\n        this.clean();\n        this.gameManager.saveData();\n        this.scene.start(\"Battle\");\n    }\n    clean() {\n        this.events.removeListener(\"player-update\");\n        this.events.removeListener(\"card-update\");\n        this.events.removeListener(\"start-battle\");\n        this.cameras.resetAll();\n    }\n    //\n    constructor(){\n        super(\"Game\");\n        this.renderDebug = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9HYW1lLnRzP2E0NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEFkdmVudHVyZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9BZHZlbnR1cmVDYXJkJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZU1hbmFnZXInO1xuaW1wb3J0IERlYnVnQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvRGVidWdCdXR0b24nO1xuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvbic7XG5pbXBvcnQgSGVhbHRoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhbHRoQmFyJztcblxuZXhwb3J0IGNsYXNzIEdhbWUgZXh0ZW5kcyBTY2VuZVxue1xuICAgIHJlbmRlckRlYnVnOiBib29sZWFuID0gdHJ1ZVxuICAgIGdhbWVNYW5hZ2VyOiBHYW1lTWFuYWdlclxuICAgIC8vXG4gICAgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcbiAgICBjYXJkMTogQWR2ZW50dXJlQ2FyZFxuICAgIGNhcmQyOiBBZHZlbnR1cmVDYXJkXG4gICAgY2FyZDM6IEFkdmVudHVyZUNhcmRcbiAgICAvL1xuICAgIHN0ZXBUZXh0OiBHYW1lT2JqZWN0cy5UZXh0IFxuICAgIGhwVGV4dDogR2FtZU9iamVjdHMuVGV4dCBcbiAgICBjb2luVGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIGhlYWx0aDogR2FtZU9iamVjdHMuU3ByaXRlW10gXG4gICAgcGxheWVySGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICBwbGF5ZXI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vXG4gICAgbmV4dEJ1dHRvbjogU3ByaXRlQnV0dG9uXG4gICAgbmV4dEhpbnQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdHYW1lJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlICggZGF0YTphbnkgKVxuICAgIHtcbiAgICAgICAgbGV0IGlzQ29udGludWU6Ym9vbGVhbiA9IGZhbHNlXG4gICAgICAgIGlmKCBkYXRhICYmIGRhdGEuaXNDb250aW51ZSApe1xuICAgICAgICAgICAgaXNDb250aW51ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc2V0dGluZ3MuZGF0YSA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluO1xuICAgICAgICB0aGlzLmNhbWVyYS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHhlNmU2ZTYpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcih0aGlzKTtcbiAgICAgICAgaWYoIGlzQ29udGludWUgKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIubG9hZERhdGEoKVxuICAgICAgICAgICAgdGhpcy5pbml0U3RlcCggIShpc0NvbnRpbnVlKSApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgTmV4dCBCdXR0b25cbiAgICAgICAgdGhpcy5yZW5kZXJQbGF5ZXJBdmF0YXIoKVxuICAgICAgICB0aGlzLnJlbmRlck5leHRCdXR0b24oKVxuXG4gICAgICAgIC8vIFJlbmRlciBQbGF5ZXIgU3RlcCAmIEhQIChSdW4gT25jZSlcbiAgICAgICAgdGhpcy5yZW5kZXJVSSgpXG5cbiAgICAgICAgLy8gUmVuZGVyIERlYnVnIEJ1dHRvblxuICAgICAgICBpZiggdGhpcy5yZW5kZXJEZWJ1ZyApe1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJEZWJ1Z1JlZ2VuZXJhdGUoKVxuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJEZWJ1Z0RhbWFnZSgpXG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlckRlYnVnSGVhbCgpXG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlckRlYnVnU2F2ZUxvYWQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIExpc3RlbmVyXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdwbGF5ZXItdXBkYXRlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpXG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luQ29uZGl0aW9uKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcignY2FyZC11cGRhdGUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLmluaXRTdGVwKGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnNldERpc2FibGVkKCF0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrQ2FuTmV4dCgpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdzdGFydC1iYXR0bGUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLmdvdG9CYXR0bGVTY2VuZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckRlYnVnU2F2ZUxvYWQoKXtcbiAgICAgICAgbGV0IGRlYnVnU2F2ZUJ1dHRvbjpEZWJ1Z0J1dHRvbiA9IG5ldyBEZWJ1Z0J1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMjAwLCdTYXZlJylcbiAgICAgICAgZGVidWdTYXZlQnV0dG9uLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnU2F2ZUJ1dHRvbilcbiAgICAgICAgZGVidWdTYXZlQnV0dG9uLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5zYXZlRGF0YSgpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBsZXQgZGVidWdMb2FkQnV0dG9uOkRlYnVnQnV0dG9uID0gbmV3IERlYnVnQnV0dG9uKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aCAtIDE1MCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAxMDAsJ0xvYWQnKVxuICAgICAgICBkZWJ1Z0xvYWRCdXR0b24uc2NhbGUgPSAwLjVcbiAgICAgICAgdGhpcy5hZGQuZXhpc3RpbmcoZGVidWdMb2FkQnV0dG9uKVxuICAgICAgICBkZWJ1Z0xvYWRCdXR0b24ub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmxvYWREYXRhKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJEZWJ1Z0RhbWFnZSgpe1xuICAgICAgICBsZXQgZGVidWdEYW1hZ2VCdXR0b246RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMTAwLCctMSBIcCcpXG4gICAgICAgIGRlYnVnRGFtYWdlQnV0dG9uLnNjYWxlID0gMC41XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKGRlYnVnRGFtYWdlQnV0dG9uKVxuICAgICAgICBkZWJ1Z0RhbWFnZUJ1dHRvbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuZGFtYWdlKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyRGVidWdIZWFsKCl7XG4gICAgICAgIGxldCBkZWJ1Z0hlYWxCdXR0b246IERlYnVnQnV0dG9uPSBuZXcgRGVidWdCdXR0b24odGhpcywxNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0IC0gMjAwLCcrMSBIcCcpXG4gICAgICAgIGRlYnVnSGVhbEJ1dHRvbi5zY2FsZSA9IDAuNVxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyhkZWJ1Z0hlYWxCdXR0b24pXG4gICAgICAgIGRlYnVnSGVhbEJ1dHRvbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuaGVhbCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyRGVidWdSZWdlbmVyYXRlKCl7XG4gICAgICAgIGxldCBkZWJ1Z1JlZ2VuZXJhdGVCdXR0b246RGVidWdCdXR0b24gPSBuZXcgRGVidWdCdXR0b24odGhpcywxNTAsR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMDAsJ1NraXAnKVxuICAgICAgICBkZWJ1Z1JlZ2VuZXJhdGVCdXR0b24uc2NhbGUgPSAwLjVcbiAgICAgICAgdGhpcy5hZGQuZXhpc3RpbmcoZGVidWdSZWdlbmVyYXRlQnV0dG9uKVxuICAgICAgICBkZWJ1Z1JlZ2VuZXJhdGVCdXR0b24ub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmFkZFN0ZXAoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggdGhpcy5nYW1lTWFuYWdlci5jaGVja0dhbWVTdGF0dXMoKSA9PSAnb25nb2luZycgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGVwKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJVSSgpe1xuICAgICAgICB0aGlzLnN0ZXBUZXh0ID0gdGhpcy5hZGQudGV4dChHYW1lTGliLnNjcmVlbldpZHRoLzIsMTAwLHRoaXMuZ2FtZU1hbmFnZXIuZ2V0U3RlcFN0cmluZygpLHtmb250U2l6ZTo0MCxjb2xvcjonYmxhY2snfSlcbiAgICAgICAgdGhpcy5zdGVwVGV4dC5zZXRPcmlnaW4oMC41LDAuNSlcblxuICAgICAgICB0aGlzLmNvaW5UZXh0ID0gdGhpcy5hZGQudGV4dChHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAyNjAsdGhpcy5nYW1lTWFuYWdlci5nZXRDb2luU3RyaW5nKCkse2ZvbnRTaXplOjQwLGNvbG9yOidibGFjayd9KVxuICAgICAgICB0aGlzLmNvaW5UZXh0LnNldE9yaWdpbigwLjUsMC41KVxuXG4gICAgICAgIHRoaXMuaHBUZXh0ID0gdGhpcy5hZGQudGV4dChHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQgLSAzMjAsdGhpcy5nYW1lTWFuYWdlci5nZXRIcFN0cmluZygpLHtmb250U2l6ZTo0MCxjb2xvcjonYmxhY2snfSlcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0T3JpZ2luKDAuNSwwLjUpXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMucGxheWVySGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC00MDApXG4gICAgICAgIHRoaXMucmVuZGVySGVhbHRoKClcbiAgICB9XG5cbiAgICB1cGRhdGVVSSgpe1xuICAgICAgICB0aGlzLnN0ZXBUZXh0LnNldFRleHQodGhpcy5nYW1lTWFuYWdlci5nZXRTdGVwU3RyaW5nKCkpXG4gICAgICAgIHRoaXMuY29pblRleHQuc2V0VGV4dCh0aGlzLmdhbWVNYW5hZ2VyLmdldENvaW5TdHJpbmcoKSlcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0VGV4dCh0aGlzLmdhbWVNYW5hZ2VyLmdldEhwU3RyaW5nKCkpXG5cbiAgICAgICAgdGhpcy5yZW5kZXJIZWFsdGgoKVxuICAgIH1cblxuICAgIHJlbmRlckhlYWx0aCgpe1xuICAgICAgICB0aGlzLnBsYXllckhlYWx0aEJhci5yZW5kZXJIZWFsdGgodGhpcy5nYW1lTWFuYWdlci5jdXJyZW50SHAsdGhpcy5nYW1lTWFuYWdlci5tYXhIcClcbiAgICB9XG5cbiAgICByZW5kZXJQbGF5ZXJBdmF0YXIoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmFkZC5zcHJpdGUoIDIwMCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiArIDEwMCwncGxheWVyJylcbiAgICB9XG5cbiAgICByZW5kZXJOZXh0QnV0dG9uKCl7XG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbiA9IG5ldyBTcHJpdGVCdXR0b24odGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aCAtIDIwMCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiArIDEwMCwgJ25leHQnKVxuXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5vblByZXNzZWQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuYWRkU3RlcCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpID09ICdvbmdvaW5nJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0ZXAoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRTdGVwKCByZWdlbjpib29sZWFuID0gdHJ1ZSApe1xuICAgICAgICBpZiggcmVnZW4gKSAgdGhpcy5nYW1lTWFuYWdlci5nZW5lcmF0ZUNhcmRLZXlzKClcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJkcygpXG4gICAgfVxuXG4gICAgcmVuZGVyQ2FyZHMoKXtcbiAgICAgICAgaWYodGhpcy5jYXJkMSkgdGhpcy5jYXJkMS5kZXN0cm95KClcbiAgICAgICAgaWYodGhpcy5jYXJkMikgdGhpcy5jYXJkMi5kZXN0cm95KClcbiAgICAgICAgaWYodGhpcy5jYXJkMykgdGhpcy5jYXJkMy5kZXN0cm95KClcbiAgICAgICAgXG4gICAgICAgIGlmKCB0aGlzLmdhbWVNYW5hZ2VyLmdldENhcmRLZXkoMSkgKXtcbiAgICAgICAgICAgIHRoaXMuY2FyZDEgPSBuZXcgQWR2ZW50dXJlQ2FyZCh0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoLzQsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzMsIHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q2FyZEtleSgxKSwgdGhpcy5nYW1lTWFuYWdlciwxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdGhpcy5nYW1lTWFuYWdlci5nZXRDYXJkS2V5KDIpICl7XG4gICAgICAgICAgICB0aGlzLmNhcmQyID0gbmV3IEFkdmVudHVyZUNhcmQodGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBHYW1lTGliLnNjcmVlbkhlaWdodC8zLCB0aGlzLmdhbWVNYW5hZ2VyLmdldENhcmRLZXkoMiksIHRoaXMuZ2FtZU1hbmFnZXIsMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q2FyZEtleSgzKSApe1xuICAgICAgICAgICAgdGhpcy5jYXJkMyA9IG5ldyBBZHZlbnR1cmVDYXJkKHRoaXMsIEdhbWVMaWIuc2NyZWVuV2lkdGgvNCozLCBHYW1lTGliLnNjcmVlbkhlaWdodC8zLCB0aGlzLmdhbWVNYW5hZ2VyLmdldENhcmRLZXkoMyksIHRoaXMuZ2FtZU1hbmFnZXIsMyk7XG4gICAgICAgIH0gICBcblxuICAgICAgICB0aGlzLm5leHRCdXR0b24uc2V0RGlzYWJsZWQoIXRoaXMuZ2FtZU1hbmFnZXIuY2hlY2tDYW5OZXh0KCkpXG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKXtcbiAgICAgICAgaWYoIHRoaXMuZ2FtZU1hbmFnZXIuY2hlY2tHYW1lU3RhdHVzKCkgIT0gJ29uZ29pbmcnICl7XG4gICAgICAgICAgICB0aGlzLmdvdG9HYW1lT3ZlclNjZW5lKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnb3RvR2FtZU92ZXJTY2VuZSgpe1xuICAgICAgICB0aGlzLmNsZWFuKClcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jbGVhckRhdGEoKVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lT3Zlcicse3N0YXR1czp0aGlzLmdhbWVNYW5hZ2VyLmNoZWNrR2FtZVN0YXR1cygpfSk7XG4gICAgfVxuXG4gICAgZ290b0JhdHRsZVNjZW5lKCl7XG4gICAgICAgIHRoaXMuY2xlYW4oKVxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLnNhdmVEYXRhKClcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnQmF0dGxlJyk7XG4gICAgfVxuXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ3BsYXllci11cGRhdGUnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ2NhcmQtdXBkYXRlJyk7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdzdGFydC1iYXR0bGUnKTtcblxuICAgICAgICB0aGlzLmNhbWVyYXMucmVzZXRBbGwoKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlNjZW5lIiwiQWR2ZW50dXJlQ2FyZCIsIkdhbWVMaWIiLCJHYW1lTWFuYWdlciIsIkRlYnVnQnV0dG9uIiwiU3ByaXRlQnV0dG9uIiwiSGVhbHRoQmFyIiwiR2FtZSIsImNyZWF0ZSIsImRhdGEiLCJpc0NvbnRpbnVlIiwic2NlbmUiLCJzZXR0aW5ncyIsImNhbWVyYSIsImNhbWVyYXMiLCJtYWluIiwic2V0QmFja2dyb3VuZENvbG9yIiwiZ2FtZU1hbmFnZXIiLCJsb2FkRGF0YSIsImluaXRTdGVwIiwicmVuZGVyUGxheWVyQXZhdGFyIiwicmVuZGVyTmV4dEJ1dHRvbiIsInJlbmRlclVJIiwicmVuZGVyRGVidWciLCJyZW5kZXJEZWJ1Z1JlZ2VuZXJhdGUiLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsInVwZGF0ZVVJIiwiY2hlY2tXaW5Db25kaXRpb24iLCJuZXh0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGVja0Nhbk5leHQiLCJnb3RvQmF0dGxlU2NlbmUiLCJlbWl0IiwicmVuZGVyRGVidWdTYXZlTG9hZCIsImRlYnVnU2F2ZUJ1dHRvbiIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwic2NhbGUiLCJhZGQiLCJleGlzdGluZyIsIm9uUHJlc3NlZCIsInNhdmVEYXRhIiwiZGVidWdMb2FkQnV0dG9uIiwicmVuZGVyRGVidWdEYW1hZ2UiLCJkZWJ1Z0RhbWFnZUJ1dHRvbiIsImRhbWFnZSIsInJlbmRlckRlYnVnSGVhbCIsImRlYnVnSGVhbEJ1dHRvbiIsImhlYWwiLCJkZWJ1Z1JlZ2VuZXJhdGVCdXR0b24iLCJhZGRTdGVwIiwiY2hlY2tHYW1lU3RhdHVzIiwic3RlcFRleHQiLCJ0ZXh0IiwiZ2V0U3RlcFN0cmluZyIsImZvbnRTaXplIiwiY29sb3IiLCJzZXRPcmlnaW4iLCJjb2luVGV4dCIsImdldENvaW5TdHJpbmciLCJocFRleHQiLCJnZXRIcFN0cmluZyIsInBsYXllckhlYWx0aEJhciIsInJlbmRlckhlYWx0aCIsInNldFRleHQiLCJjdXJyZW50SHAiLCJtYXhIcCIsInBsYXllciIsInNwcml0ZSIsInJlZ2VuIiwiZ2VuZXJhdGVDYXJkS2V5cyIsInJlbmRlckNhcmRzIiwiY2FyZDEiLCJkZXN0cm95IiwiY2FyZDIiLCJjYXJkMyIsImdldENhcmRLZXkiLCJnb3RvR2FtZU92ZXJTY2VuZSIsImNsZWFuIiwiY2xlYXJEYXRhIiwic3RhcnQiLCJzdGF0dXMiLCJyZW1vdmVMaXN0ZW5lciIsInJlc2V0QWxsIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/scenes/Game.ts\n"));

/***/ })

});