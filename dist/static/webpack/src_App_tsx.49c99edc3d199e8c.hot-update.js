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

/***/ "./src/game/scenes/CardMaker.ts":
/*!**************************************!*\
  !*** ./src/game/scenes/CardMaker.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardMaker/HammerBar */ \"./src/game/components/CardMaker/HammerBar.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n/* harmony import */ var _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeMainCircle */ \"./src/game/components/CardMaker/ForgeMainCircle.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.image(\"hammer\", \"assets/adventure/cardmaker/hammer.png\");\n        this.load.image(\"hammerBroke\", \"assets/adventure/cardmaker/hammerBroke.png\");\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabAudio\", \"assets/adventure/decks/vocabAudio.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.manager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        this.buttonClose = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 100, 100).setScale(0.5);\n        this.buttonClose.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = new _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, this.manager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.manager.setSelectedVocab(deckKey, vocabKey);\n            this.updateSelectedCard();\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.setForgeState(\"prepare\");\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"forge\");\n            }\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 200, 100, \"Cancel\", \"sm\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"forge\") {\n                this.setForgeState(\"prepare\");\n            }\n        };\n        // Render Forge Gameplay Objects\n        this.hammerBar = new _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 200);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 350);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        this.events.on(\"open-panel\", ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"select\");\n            }\n        });\n        this.events.on(\"forge-answered\", ()=>{\n            if (this.currentForgeState == \"forge\") {\n                // Render all corresponding UI\n                this.updateDebugText();\n                this.forgeBar.updateProgressBar();\n                this.hammerBar.renderHammer();\n                this.forgeBottomContainer.clearChoices();\n                this.nextForge();\n            }\n        });\n        // Run init setup, render empty\n        this.updateSelectedCard();\n        this.renderDebug();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateSelectedCard() {\n        let canForge = false;\n        if (this.manager.selectedDeckKey && this.manager.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__.DeckRepo.getVocab(this.manager.selectedDeckKey, this.manager.selectedVocabKey);\n            if (vocab != undefined) {\n                canForge = true;\n                this.buttonActionForge.setDisabled(false);\n                this.mainCircle.renderSelectedCard(vocab);\n            }\n        }\n        if (!canForge) {\n            this.buttonActionForge.setDisabled(true);\n            this.mainCircle.clearSelectedCard();\n        }\n    }\n    renderDebug() {\n        this.debugContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight - 60);\n        let rect = this.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 50, 80, 0xffffff);\n        this.debugForgeText = this.add.text(0, 0, \"Forge Text\", {\n            fontSize: \"40px\",\n            color: \"red\"\n        }).setOrigin(0.5, 0.5);\n        this.debugContainer.add(rect);\n        this.debugContainer.add(this.debugForgeText);\n        this.debugContainer.setVisible(false);\n    }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"select\":\n                this.startSelect();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonClose.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.manager.resetForgeValues();\n        this.forgeBar.exit();\n        this.hammerBar.exit();\n        this.forgeBottomContainer.exit();\n        this.mainCircle.exitForge();\n        this.debugContainer.setVisible(false);\n        this.updateDebugText();\n    }\n    startSelect() {\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(false);\n        this.panelSelectCard.open();\n    }\n    startForge() {\n        // Show Hide Element\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.manager.resetForgeValues();\n        this.forgeBar.enter();\n        this.hammerBar.enter();\n        this.forgeBottomContainer.enter();\n        this.mainCircle.enterForge();\n        this.debugContainer.setVisible(true);\n        this.updateDebugText();\n    }\n    nextForge() {\n        // Check For Win Lose\n        if (this.manager.checkWinCondition()) {\n            return;\n        }\n        if (this.manager.checkLoseCondition()) {\n            return;\n        }\n        this.forgeBottomContainer.generateNext();\n    }\n    updateDebugText() {\n        if (this.debugForgeText) {\n            let text = \"\";\n            text += \"Target: \";\n            text += this.manager.currentImage + \"/\" + this.manager.currentText + \"/\" + this.manager.currentAudio;\n            this.debugForgeText.setText(text);\n        }\n    }\n    clean() {\n        this.events.removeListener(\"open-panel\");\n        this.events.removeListener(\"forge-answered\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"select\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQW9CLENBQUN1QyxLQUFLO1FBQy9CLElBQUksQ0FBQ3RELFVBQVUsQ0FBQ3VELFVBQVU7UUFFMUIsSUFBSSxDQUFDcEIsY0FBYyxDQUFDUSxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDeEIsZUFBZTtJQUN4QjtJQUVBSSxZQUFXO1FBQ1AscUJBQXFCO1FBQ3JCLElBQUksSUFBSSxDQUFDbkMsT0FBTyxDQUFDb0UsaUJBQWlCLElBQUk7WUFFbEM7UUFDSjtRQUVBLElBQUksSUFBSSxDQUFDcEUsT0FBTyxDQUFDcUUsa0JBQWtCLElBQUk7WUFFbkM7UUFDSjtRQUNBLElBQUksQ0FBQzFDLG9CQUFvQixDQUFDMkMsWUFBWTtJQUMxQztJQUVBdkMsa0JBQWlCO1FBQ2IsSUFBSSxJQUFJLENBQUNtQixjQUFjLEVBQUU7WUFDckIsSUFBSUMsT0FBYztZQUNsQkEsUUFBUTtZQUNSQSxRQUFRLElBQUksQ0FBQ25ELE9BQU8sQ0FBQ3VFLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQ3ZFLE9BQU8sQ0FBQ3dFLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQ3hFLE9BQU8sQ0FBQ3lFLFlBQVk7WUFDcEcsSUFBSSxDQUFDdkIsY0FBYyxDQUFDd0IsT0FBTyxDQUFDdkI7UUFDaEM7SUFDSjtJQUVBd0IsUUFBTztRQUNILElBQUksQ0FBQzlDLE1BQU0sQ0FBQytDLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUMvQyxNQUFNLENBQUMrQyxjQUFjLENBQUM7UUFFM0IsSUFBSSxDQUFDQyxPQUFPLENBQUNDLFFBQVE7SUFDekI7SUFyTUFDLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUFuQ1Z0QixjQUF3QjtZQUFDO1lBQVU7WUFBUztZQUFTO1NBQVM7UUFrQjlELEVBQUU7YUFDRnVCLFdBQW9CO0lBaUJwQjtBQW1NSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyLnRzPzU2ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBTY2VuZSwgR2FtZU9iamVjdHMsIEdhbWUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgSGFtbWVyQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0hhbW1lckJhcic7XG5pbXBvcnQgeyBEZWNrUmVwbywgVm9jYWIgfSBmcm9tICdAL2xpYi9yZXBvcy9EZWNrUmVwbyc7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9CYXNpY0J1dHRvbic7XG5pbXBvcnQgRm9yZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXInO1xuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvQ2FyZE1ha2VyTWFuYWdlcic7XG5pbXBvcnQgUGFuZWxTZWxlY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL1BhbmVsU2VsZWN0Q2FyZC9QYW5lbFNlbGVjdENhcmQnO1xuaW1wb3J0IEZvcmdlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQnV0dG9uJztcbmltcG9ydCBGb3JnZUJvdHRvbUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lcic7XG5pbXBvcnQgRm9yZ2VNYWluQ2lyY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlTWFpbkNpcmNsZSc7XG5cbmV4cG9ydCBjbGFzcyBDYXJkTWFrZXIgZXh0ZW5kcyBTY2VuZVxue1xuICAgIG1hbmFnZXI6IENhcmRNYWtlck1hbmFnZXJcbiAgICBmb3JnZVN0YXRlczogc3RyaW5nW10gPSBbJ3ByZXBhcmUnLCdzZWxlY3QnLCdmb3JnZScsICdyZXN1bHQnXVxuICAgIGN1cnJlbnRGb3JnZVN0YXRlOiBzdHJpbmdcbiAgICAvLyBcbiAgICAvLyBHYW1lT2JqZWN0c1xuICAgIG1haW5DaXJjbGU6IEZvcmdlTWFpbkNpcmNsZVxuICAgIGJ1dHRvbkFjdGlvbkZvcmdlOiBGb3JnZUJ1dHRvblxuICAgIGJ1dHRvbkNhbmNlbEZvcmdlOiBCYXNpY0J1dHRvblxuICAgIGJ1dHRvbkNsb3NlOiBDbG9zZUJ1dHRvblxuICAgIC8vIFBhbmVsIEZvcmdlXG4gICAgaGFtbWVyQmFyOiBIYW1tZXJCYXJcbiAgICBmb3JnZUJhcjogRm9yZ2VCYXJcbiAgICBmb3JnZUJvdHRvbUNvbnRhaW5lcjogRm9yZ2VCb3R0b21Db250YWluZXJcbiAgICAvL1xuICAgIC8vIFBhbmVsIFNlbGVjdCBDYXJkc1xuICAgIHBhbmVsU2VsZWN0Q2FyZDogUGFuZWxTZWxlY3RDYXJkXG4gICAgLy9cbiAgICBkZWJ1Z0NvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgZGVidWdGb3JnZVRleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuICAgIGNhbklucHV0OiBib29sZWFuID0gdHJ1ZVxuXG4gICAgcHJlbG9hZCAoKVxuICAgIHtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdoYW1tZXInLCdhc3NldHMvYWR2ZW50dXJlL2NhcmRtYWtlci9oYW1tZXIucG5nJylcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdoYW1tZXJCcm9rZScsJ2Fzc2V0cy9hZHZlbnR1cmUvY2FyZG1ha2VyL2hhbW1lckJyb2tlLnBuZycpXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnV0dG9uQWRkJywnYXNzZXRzL2FkdmVudHVyZS9jYXJkbWFrZXIvYnV0dG9uQWRkLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQXVkaW8nLCdhc3NldHMvYWR2ZW50dXJlL2RlY2tzL3ZvY2FiQXVkaW8ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQmFzZScsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlQmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZUJhY2sucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQ3JhY2snLCdhc3NldHMvYWR2ZW50dXJlL2RlY2tzL3ZvY2FiQ2FyZENyYWNrLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2FyZE1ha2VyJyk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZSAoKVxuICAgIHtcbiAgICAgICAgLy8gUmVzZXQgRGF0YVxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBuZXcgQ2FyZE1ha2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBiZyA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsIEdhbWVMaWIuc2NyZWVuV2lkdGgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LCAweGVlZWVlZSk7XG5cbiAgICAgICAgdGhpcy5idXR0b25DbG9zZSA9IG5ldyBDbG9zZUJ1dHRvbih0aGlzLDEwMCwgMTAwKS5zZXRTY2FsZSgwLjUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWluIENpcmNsZVxuICAgICAgICBjb25zdCBzdGFydFkgPSBHYW1lTGliLnNjcmVlbkhlaWdodC8zKjE7XG4gICAgICAgIHRoaXMubWFpbkNpcmNsZSA9IG5ldyBGb3JnZU1haW5DaXJjbGUodGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsIHN0YXJ0WSk7XG5cbiAgICAgICAgLy8gU2VsZWN0IENhcmRcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQgPSBuZXcgUGFuZWxTZWxlY3RDYXJkKHRoaXMsdGhpcy5tYW5hZ2VyLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25DYXJkU2VsZWN0ZWQgPSAoIGRlY2tLZXk6c3RyaW5nLCB2b2NhYktleTpzdHJpbmcpPT57XG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuc2V0U2VsZWN0ZWRWb2NhYihkZWNrS2V5LHZvY2FiS2V5KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbENsb3NlID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXIgQWN0aW9uIEJ1dHRvblxuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlID0gbmV3IEZvcmdlQnV0dG9uKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0KjAuNzUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnZm9yZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZSA9IG5ldyBCYXNpY0J1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAyMDAsIDEwMCwnQ2FuY2VsJywnc20nKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9PSAnZm9yZ2UnICl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgRm9yZ2UgR2FtZXBsYXkgT2JqZWN0c1xuICAgICAgICB0aGlzLmhhbW1lckJhciA9IG5ldyBIYW1tZXJCYXIodGhpcyxHYW1lTGliLm1pZFgsMjAwKTtcbiAgICAgICAgdGhpcy5mb3JnZUJhciA9IG5ldyBGb3JnZUJhcih0aGlzLEdhbWVMaWIubWlkWCwzNTApO1xuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyID0gbmV3IEZvcmdlQm90dG9tQ29udGFpbmVyKHRoaXMsR2FtZUxpYi5taWRYLEdhbWVMaWIucXVhdGVyM1kpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzLm9uKCdvcGVuLXBhbmVsJywoKT0+e1xuICAgICAgICAgICAgaWYoIHRoaXMuY3VycmVudEZvcmdlU3RhdGUgPT0gJ3ByZXBhcmUnICl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdzZWxlY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50cy5vbignZm9yZ2UtYW5zd2VyZWQnLCgpPT57XG4gICAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9PSAnZm9yZ2UnICl7XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIGFsbCBjb3JyZXNwb25kaW5nIFVJXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWJ1Z1RleHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmdlQmFyLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW1tZXJCYXIucmVuZGVySGFtbWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lci5jbGVhckNob2ljZXMoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEZvcmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUnVuIGluaXQgc2V0dXAsIHJlbmRlciBlbXB0eVxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2FyZCgpO1xuICAgICAgICB0aGlzLnJlbmRlckRlYnVnKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEZvcmdlU3RhdGUoJ3ByZXBhcmUnKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVNlbGVjdGVkQ2FyZCgpe1xuICAgICAgICBsZXQgY2FuRm9yZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmKCB0aGlzLm1hbmFnZXIuc2VsZWN0ZWREZWNrS2V5ICYmIHRoaXMubWFuYWdlci5zZWxlY3RlZFZvY2FiS2V5ICl7XG4gICAgICAgICAgICBjb25zdCB2b2NhYjpWb2NhYiB8IHVuZGVmaW5lZCA9IERlY2tSZXBvLmdldFZvY2FiKHRoaXMubWFuYWdlci5zZWxlY3RlZERlY2tLZXksdGhpcy5tYW5hZ2VyLnNlbGVjdGVkVm9jYWJLZXkpO1xuICAgICAgICAgICAgaWYoIHZvY2FiICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIGNhbkZvcmdlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNpcmNsZS5yZW5kZXJTZWxlY3RlZENhcmQodm9jYWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFjYW5Gb3JnZSApe1xuICAgICAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNpcmNsZS5jbGVhclNlbGVjdGVkQ2FyZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRGVidWcoKXtcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLm1pZFgsR2FtZUxpYi5zY3JlZW5IZWlnaHQtNjApO1xuICAgICAgICBsZXQgcmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsMCxHYW1lTGliLnNjcmVlbldpZHRoLTUwLDgwLDB4ZmZmZmZmKTtcbiAgICAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dCA9IHRoaXMuYWRkLnRleHQoMCwwLCdGb3JnZSBUZXh0Jyx7Zm9udFNpemU6JzQwcHgnLGNvbG9yOidyZWQnfSkuc2V0T3JpZ2luKDAuNSwwLjUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5hZGQocmVjdCk7XG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdGb3JnZVRleHQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldEZvcmdlU3RhdGUoIGZvcmdlU3RhdGU6c3RyaW5nICl7XG4gICAgICAgIGlmKCAhdGhpcy5mb3JnZVN0YXRlcy5pbmNsdWRlcyhmb3JnZVN0YXRlKSApIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID0gZm9yZ2VTdGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKGZvcmdlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXBhcmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVwYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Rm9yZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcmVwYXJlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlci5yZXNldEZvcmdlVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZXhpdCgpO1xuICAgICAgICB0aGlzLmhhbW1lckJhci5leGl0KCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIuZXhpdCgpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuZXhpdEZvcmdlKCk7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZWJ1Z1RleHQoKTtcbiAgICB9XG5cbiAgICBzdGFydFNlbGVjdCgpe1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9wZW4oKTtcbiAgICB9XG5cbiAgICBzdGFydEZvcmdlKCl7XG4gICAgICAgIC8vIFNob3cgSGlkZSBFbGVtZW50XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2Uuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICB0aGlzLm1hbmFnZXIucmVzZXRGb3JnZVZhbHVlcygpO1xuICAgICAgICB0aGlzLmZvcmdlQmFyLmVudGVyKCk7XG4gICAgICAgIHRoaXMuaGFtbWVyQmFyLmVudGVyKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlLmVudGVyRm9yZ2UoKTtcblxuICAgICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRGVidWdUZXh0KCk7XG4gICAgfVxuXG4gICAgbmV4dEZvcmdlKCl7XG4gICAgICAgIC8vIENoZWNrIEZvciBXaW4gTG9zZVxuICAgICAgICBpZiggdGhpcy5tYW5hZ2VyLmNoZWNrV2luQ29uZGl0aW9uKCkgKXtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiggdGhpcy5tYW5hZ2VyLmNoZWNrTG9zZUNvbmRpdGlvbigpICl7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyLmdlbmVyYXRlTmV4dCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZURlYnVnVGV4dCgpe1xuICAgICAgICBpZiggdGhpcy5kZWJ1Z0ZvcmdlVGV4dCApe1xuICAgICAgICAgICAgbGV0IHRleHQ6c3RyaW5nID0gJyc7XG4gICAgICAgICAgICB0ZXh0ICs9ICdUYXJnZXQ6ICc7XG4gICAgICAgICAgICB0ZXh0ICs9IHRoaXMubWFuYWdlci5jdXJyZW50SW1hZ2UgKyAnLycgKyB0aGlzLm1hbmFnZXIuY3VycmVudFRleHQgKyAnLycgKyB0aGlzLm1hbmFnZXIuY3VycmVudEF1ZGlvO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dC5zZXRUZXh0KHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wZW4tcGFuZWwnKTtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ2ZvcmdlLWFuc3dlcmVkJyk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLnJlc2V0QWxsKClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJDbG9zZUJ1dHRvbiIsIkhhbW1lckJhciIsIkRlY2tSZXBvIiwiQmFzaWNCdXR0b24iLCJGb3JnZUJhciIsIkNhcmRNYWtlck1hbmFnZXIiLCJQYW5lbFNlbGVjdENhcmQiLCJGb3JnZUJ1dHRvbiIsIkZvcmdlQm90dG9tQ29udGFpbmVyIiwiRm9yZ2VNYWluQ2lyY2xlIiwiQ2FyZE1ha2VyIiwicHJlbG9hZCIsImxvYWQiLCJpbWFnZSIsImNyZWF0ZSIsIm1hbmFnZXIiLCJiZyIsImFkZCIsInJlY3RhbmdsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnV0dG9uQ2xvc2UiLCJzZXRTY2FsZSIsIm9uUHJlc3NlZENhbGxiYWNrIiwic2NlbmUiLCJzdGFydCIsInN0YXJ0WSIsIm1haW5DaXJjbGUiLCJwYW5lbFNlbGVjdENhcmQiLCJvbkNhcmRTZWxlY3RlZCIsImRlY2tLZXkiLCJ2b2NhYktleSIsInNldFNlbGVjdGVkVm9jYWIiLCJ1cGRhdGVTZWxlY3RlZENhcmQiLCJvblBhbmVsQ2xvc2UiLCJzZXRGb3JnZVN0YXRlIiwiYnV0dG9uQWN0aW9uRm9yZ2UiLCJjdXJyZW50Rm9yZ2VTdGF0ZSIsImJ1dHRvbkNhbmNlbEZvcmdlIiwiaGFtbWVyQmFyIiwibWlkWCIsImZvcmdlQmFyIiwiZm9yZ2VCb3R0b21Db250YWluZXIiLCJxdWF0ZXIzWSIsImV2ZW50cyIsIm9uIiwidXBkYXRlRGVidWdUZXh0IiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJyZW5kZXJIYW1tZXIiLCJjbGVhckNob2ljZXMiLCJuZXh0Rm9yZ2UiLCJyZW5kZXJEZWJ1ZyIsImVtaXQiLCJjYW5Gb3JnZSIsInNlbGVjdGVkRGVja0tleSIsInNlbGVjdGVkVm9jYWJLZXkiLCJ2b2NhYiIsImdldFZvY2FiIiwidW5kZWZpbmVkIiwic2V0RGlzYWJsZWQiLCJyZW5kZXJTZWxlY3RlZENhcmQiLCJjbGVhclNlbGVjdGVkQ2FyZCIsImRlYnVnQ29udGFpbmVyIiwiY29udGFpbmVyIiwicmVjdCIsImRlYnVnRm9yZ2VUZXh0IiwidGV4dCIsImZvbnRTaXplIiwiY29sb3IiLCJzZXRPcmlnaW4iLCJzZXRWaXNpYmxlIiwiZm9yZ2VTdGF0ZSIsImZvcmdlU3RhdGVzIiwiaW5jbHVkZXMiLCJzdGFydFByZXBhcmUiLCJzdGFydFNlbGVjdCIsInN0YXJ0Rm9yZ2UiLCJyZXNldEZvcmdlVmFsdWVzIiwiZXhpdCIsImV4aXRGb3JnZSIsIm9wZW4iLCJlbnRlciIsImVudGVyRm9yZ2UiLCJjaGVja1dpbkNvbmRpdGlvbiIsImNoZWNrTG9zZUNvbmRpdGlvbiIsImdlbmVyYXRlTmV4dCIsImN1cnJlbnRJbWFnZSIsImN1cnJlbnRUZXh0IiwiY3VycmVudEF1ZGlvIiwic2V0VGV4dCIsImNsZWFuIiwicmVtb3ZlTGlzdGVuZXIiLCJjYW1lcmFzIiwicmVzZXRBbGwiLCJjb25zdHJ1Y3RvciIsImNhbklucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});