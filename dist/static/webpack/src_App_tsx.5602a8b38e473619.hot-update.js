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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardMaker/HammerBar */ \"./src/game/components/CardMaker/HammerBar.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n/* harmony import */ var _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeMainCircle */ \"./src/game/components/CardMaker/ForgeMainCircle.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        this.load.image(\"hammer\", \"assets/adventure/cardmaker/hammer.png\");\n        this.load.image(\"hammerBroke\", \"assets/adventure/cardmaker/hammerBroke.png\");\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.manager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        this.buttonClose = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 100, 100).setScale(0.5);\n        this.buttonClose.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = new _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, this.manager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.manager.setSelectedVocab(deckKey, vocabKey);\n            this.updateSelectedCard();\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.setForgeState(\"prepare\");\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"forge\");\n            }\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 200, 100, \"Cancel\", \"sm\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"forge\") {\n                this.setForgeState(\"prepare\");\n            }\n        };\n        // Render Forge Gameplay Objects\n        this.hammerBar = new _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY - 300);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 320);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        this.events.on(\"open-panel\", ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"select\");\n            }\n        });\n        this.events.on(\"forge-answered\", ()=>{\n            if (this.currentForgeState == \"forge\") {\n                this.updateDebugText();\n                this.forgeBottomContainer.generateNext();\n                this.forgeBar.updateProgressBar();\n                this.hammerBar.renderHammer();\n            }\n        });\n        // Run init setup\n        this.updateSelectedCard();\n        this.renderDebug();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateSelectedCard() {\n        let canForge = false;\n        if (this.manager.selectedDeckKey && this.manager.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__.DeckRepo.getVocab(this.manager.selectedDeckKey, this.manager.selectedVocabKey);\n            if (vocab != undefined) {\n                canForge = true;\n                this.buttonActionForge.setDisabled(false);\n                this.mainCircle.renderSelectedCard(vocab);\n            }\n        }\n        if (!canForge) {\n            this.buttonActionForge.setDisabled(true);\n            this.mainCircle.clearSelectedCard();\n        }\n    }\n    renderDebug() {\n        this.debugContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 200);\n        this.debugForgeText = this.add.text(0, 0, \"Forge Text\", {\n            fontSize: \"40px\",\n            color: \"black\"\n        }).setOrigin(0.5, 0.5);\n        this.debugContainer.add(this.debugForgeText);\n        this.debugContainer.setVisible(false);\n    }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"select\":\n                this.startSelect();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonClose.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.manager.resetForgeValues();\n        this.forgeBar.exit();\n        this.hammerBar.exit();\n        this.forgeBottomContainer.exit();\n        this.mainCircle.exitForge();\n    }\n    startSelect() {\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(false);\n        this.panelSelectCard.open();\n    }\n    startForge() {\n        // Show Hide Element\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.manager.resetForgeValues();\n        this.forgeBar.enter();\n        this.hammerBar.enter();\n        this.forgeBottomContainer.enter();\n        this.mainCircle.enterForge();\n        this.debugContainer.setVisible(true);\n        this.updateDebugText();\n    }\n    updateDebugText() {\n        if (this.debugForgeText) {\n            let text = \"\";\n            text += \"Target: \";\n            text += this.manager.currentImage + \"/\" + this.manager.currentText + \"/\" + this.manager.currentAudio;\n            this.debugForgeText.setText(text);\n        }\n    }\n    clean() {\n        this.events.removeListener(\"open-panel\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"select\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsR0FBRyxNQUFNLElBQUksQ0FBQ25FLE9BQU8sQ0FBQ29FLFlBQVk7WUFDcEcsSUFBSSxDQUFDcEIsY0FBYyxDQUFDcUIsT0FBTyxDQUFDcEI7UUFDaEM7SUFDSjtJQUVBcUIsUUFBTztRQUNILElBQUksQ0FBQ3pDLE1BQU0sQ0FBQzBDLGNBQWMsQ0FBQztRQUUzQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUTtJQUN6QjtJQTlLQUMsYUFDQTtRQUNJLEtBQUssQ0FBQzthQWxDVm5CLGNBQXdCO1lBQUM7WUFBVTtZQUFTO1lBQVM7U0FBUztRQWtCOUQsRUFBRTthQUNGb0IsV0FBb0I7SUFnQnBCO0FBNEtKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9DYXJkTWFrZXIudHM/NTZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IFNjZW5lLCBHYW1lT2JqZWN0cywgR2FtZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBIYW1tZXJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvSGFtbWVyQmFyJztcbmltcG9ydCB7IERlY2tSZXBvLCBWb2NhYiB9IGZyb20gJ0AvbGliL3JlcG9zL0RlY2tSZXBvJztcbmltcG9ydCBCYXNpY0J1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Jhc2ljQnV0dG9uJztcbmltcG9ydCBGb3JnZUJhciBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJhcic7XG5pbXBvcnQgQ2FyZE1ha2VyTWFuYWdlciBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9DYXJkTWFrZXJNYW5hZ2VyJztcbmltcG9ydCBQYW5lbFNlbGVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvUGFuZWxTZWxlY3RDYXJkL1BhbmVsU2VsZWN0Q2FyZCc7XG5pbXBvcnQgRm9yZ2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCdXR0b24nO1xuaW1wb3J0IEZvcmdlQm90dG9tQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQm90dG9tQ29udGFpbmVyJztcbmltcG9ydCBGb3JnZU1haW5DaXJjbGUgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VNYWluQ2lyY2xlJztcblxuZXhwb3J0IGNsYXNzIENhcmRNYWtlciBleHRlbmRzIFNjZW5lXG57XG4gICAgbWFuYWdlcjogQ2FyZE1ha2VyTWFuYWdlclxuICAgIGZvcmdlU3RhdGVzOiBzdHJpbmdbXSA9IFsncHJlcGFyZScsJ3NlbGVjdCcsJ2ZvcmdlJywgJ3Jlc3VsdCddXG4gICAgY3VycmVudEZvcmdlU3RhdGU6IHN0cmluZ1xuICAgIC8vIFxuICAgIC8vIEdhbWVPYmplY3RzXG4gICAgbWFpbkNpcmNsZTogRm9yZ2VNYWluQ2lyY2xlXG4gICAgYnV0dG9uQWN0aW9uRm9yZ2U6IEZvcmdlQnV0dG9uXG4gICAgYnV0dG9uQ2FuY2VsRm9yZ2U6IEJhc2ljQnV0dG9uXG4gICAgYnV0dG9uQ2xvc2U6IENsb3NlQnV0dG9uXG4gICAgLy8gUGFuZWwgRm9yZ2VcbiAgICBoYW1tZXJCYXI6IEhhbW1lckJhclxuICAgIGZvcmdlQmFyOiBGb3JnZUJhclxuICAgIGZvcmdlQm90dG9tQ29udGFpbmVyOiBGb3JnZUJvdHRvbUNvbnRhaW5lclxuICAgIC8vXG4gICAgLy8gUGFuZWwgU2VsZWN0IENhcmRzXG4gICAgcGFuZWxTZWxlY3RDYXJkOiBQYW5lbFNlbGVjdENhcmRcbiAgICAvL1xuICAgIGRlYnVnQ29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBkZWJ1Z0ZvcmdlVGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG4gICAgY2FuSW5wdXQ6IGJvb2xlYW4gPSB0cnVlXG5cbiAgICBwcmVsb2FkICgpXG4gICAge1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hhbW1lcicsJ2Fzc2V0cy9hZHZlbnR1cmUvY2FyZG1ha2VyL2hhbW1lci5wbmcnKVxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hhbW1lckJyb2tlJywnYXNzZXRzL2FkdmVudHVyZS9jYXJkbWFrZXIvaGFtbWVyQnJva2UucG5nJylcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidXR0b25BZGQnLCdhc3NldHMvYWR2ZW50dXJlL2NhcmRtYWtlci9idXR0b25BZGQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQmFzZScsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlQmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZUJhY2sucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQ3JhY2snLCdhc3NldHMvYWR2ZW50dXJlL2RlY2tzL3ZvY2FiQ2FyZENyYWNrLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2FyZE1ha2VyJyk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZSAoKVxuICAgIHtcbiAgICAgICAgLy8gUmVzZXQgRGF0YVxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBuZXcgQ2FyZE1ha2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBiZyA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsIEdhbWVMaWIuc2NyZWVuV2lkdGgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LCAweGVlZWVlZSk7XG5cbiAgICAgICAgdGhpcy5idXR0b25DbG9zZSA9IG5ldyBDbG9zZUJ1dHRvbih0aGlzLDEwMCwgMTAwKS5zZXRTY2FsZSgwLjUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWluIENpcmNsZVxuICAgICAgICBjb25zdCBzdGFydFkgPSBHYW1lTGliLnNjcmVlbkhlaWdodC8zKjE7XG4gICAgICAgIHRoaXMubWFpbkNpcmNsZSA9IG5ldyBGb3JnZU1haW5DaXJjbGUodGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsIHN0YXJ0WSk7XG5cbiAgICAgICAgLy8gU2VsZWN0IENhcmRcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQgPSBuZXcgUGFuZWxTZWxlY3RDYXJkKHRoaXMsdGhpcy5tYW5hZ2VyLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25DYXJkU2VsZWN0ZWQgPSAoIGRlY2tLZXk6c3RyaW5nLCB2b2NhYktleTpzdHJpbmcpPT57XG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuc2V0U2VsZWN0ZWRWb2NhYihkZWNrS2V5LHZvY2FiS2V5KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbENsb3NlID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW5kZXIgQWN0aW9uIEJ1dHRvblxuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlID0gbmV3IEZvcmdlQnV0dG9uKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0KjAuNzUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnZm9yZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZSA9IG5ldyBCYXNpY0J1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAyMDAsIDEwMCwnQ2FuY2VsJywnc20nKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9PSAnZm9yZ2UnICl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgRm9yZ2UgR2FtZXBsYXkgT2JqZWN0c1xuICAgICAgICB0aGlzLmhhbW1lckJhciA9IG5ldyBIYW1tZXJCYXIodGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsc3RhcnRZLTMwMCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCYXIgPSBuZXcgRm9yZ2VCYXIodGhpcyxHYW1lTGliLm1pZFgsMzIwKTtcbiAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lciA9IG5ldyBGb3JnZUJvdHRvbUNvbnRhaW5lcih0aGlzLEdhbWVMaWIubWlkWCxHYW1lTGliLnF1YXRlcjNZKTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5vbignb3Blbi1wYW5lbCcsKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnc2VsZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMub24oJ2ZvcmdlLWFuc3dlcmVkJywoKT0+e1xuICAgICAgICAgICAgaWYoIHRoaXMuY3VycmVudEZvcmdlU3RhdGUgPT0gJ2ZvcmdlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVidWdUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lci5nZW5lcmF0ZU5leHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmdlQmFyLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW1tZXJCYXIucmVuZGVySGFtbWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUnVuIGluaXQgc2V0dXBcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJEZWJ1ZygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVTZWxlY3RlZENhcmQoKXtcbiAgICAgICAgbGV0IGNhbkZvcmdlOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBpZiggdGhpcy5tYW5hZ2VyLnNlbGVjdGVkRGVja0tleSAmJiB0aGlzLm1hbmFnZXIuc2VsZWN0ZWRWb2NhYktleSApe1xuICAgICAgICAgICAgY29uc3Qgdm9jYWI6Vm9jYWIgfCB1bmRlZmluZWQgPSBEZWNrUmVwby5nZXRWb2NhYih0aGlzLm1hbmFnZXIuc2VsZWN0ZWREZWNrS2V5LHRoaXMubWFuYWdlci5zZWxlY3RlZFZvY2FiS2V5KTtcbiAgICAgICAgICAgIGlmKCB2b2NhYiAhPSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgICAgICBjYW5Gb3JnZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUucmVuZGVyU2VsZWN0ZWRDYXJkKHZvY2FiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhY2FuRm9yZ2UgKXtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUuY2xlYXJTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckRlYnVnKCl7XG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDIwMCk7XG4gICAgICAgIHRoaXMuZGVidWdGb3JnZVRleHQgPSB0aGlzLmFkZC50ZXh0KDAsMCwnRm9yZ2UgVGV4dCcse2ZvbnRTaXplOic0MHB4Jyxjb2xvcjonYmxhY2snfSkuc2V0T3JpZ2luKDAuNSwwLjUpO1xuXG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdGb3JnZVRleHQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldEZvcmdlU3RhdGUoIGZvcmdlU3RhdGU6c3RyaW5nICl7XG4gICAgICAgIGlmKCAhdGhpcy5mb3JnZVN0YXRlcy5pbmNsdWRlcyhmb3JnZVN0YXRlKSApIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID0gZm9yZ2VTdGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKGZvcmdlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXBhcmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVwYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Rm9yZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcmVwYXJlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlci5yZXNldEZvcmdlVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZXhpdCgpO1xuICAgICAgICB0aGlzLmhhbW1lckJhci5leGl0KCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIuZXhpdCgpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuZXhpdEZvcmdlKCk7XG4gICAgfVxuXG4gICAgc3RhcnRTZWxlY3QoKXtcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vcGVuKCk7XG4gICAgfVxuXG4gICAgc3RhcnRGb3JnZSgpe1xuICAgICAgICAvLyBTaG93IEhpZGUgRWxlbWVudFxuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5tYW5hZ2VyLnJlc2V0Rm9yZ2VWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5mb3JnZUJhci5lbnRlcigpO1xuICAgICAgICB0aGlzLmhhbW1lckJhci5lbnRlcigpO1xuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyLmVudGVyKCk7XG4gICAgICAgIHRoaXMubWFpbkNpcmNsZS5lbnRlckZvcmdlKCk7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZURlYnVnVGV4dCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZURlYnVnVGV4dCgpe1xuICAgICAgICBpZiggdGhpcy5kZWJ1Z0ZvcmdlVGV4dCApe1xuICAgICAgICAgICAgbGV0IHRleHQ6c3RyaW5nID0gJyc7XG4gICAgICAgICAgICB0ZXh0ICs9ICdUYXJnZXQ6ICc7XG4gICAgICAgICAgICB0ZXh0ICs9IHRoaXMubWFuYWdlci5jdXJyZW50SW1hZ2UgKyAnLycgKyB0aGlzLm1hbmFnZXIuY3VycmVudFRleHQgKyAnLycgKyB0aGlzLm1hbmFnZXIuY3VycmVudEF1ZGlvO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dC5zZXRUZXh0KHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYW4oKXtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoJ29wZW4tcGFuZWwnKTtcblxuICAgICAgICB0aGlzLmNhbWVyYXMucmVzZXRBbGwoKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlNjZW5lIiwiR2FtZUxpYiIsIkNsb3NlQnV0dG9uIiwiSGFtbWVyQmFyIiwiRGVja1JlcG8iLCJCYXNpY0J1dHRvbiIsIkZvcmdlQmFyIiwiQ2FyZE1ha2VyTWFuYWdlciIsIlBhbmVsU2VsZWN0Q2FyZCIsIkZvcmdlQnV0dG9uIiwiRm9yZ2VCb3R0b21Db250YWluZXIiLCJGb3JnZU1haW5DaXJjbGUiLCJDYXJkTWFrZXIiLCJwcmVsb2FkIiwibG9hZCIsImltYWdlIiwiY3JlYXRlIiwibWFuYWdlciIsImJnIiwiYWRkIiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJidXR0b25DbG9zZSIsInNldFNjYWxlIiwib25QcmVzc2VkQ2FsbGJhY2siLCJzY2VuZSIsInN0YXJ0Iiwic3RhcnRZIiwibWFpbkNpcmNsZSIsInBhbmVsU2VsZWN0Q2FyZCIsIm9uQ2FyZFNlbGVjdGVkIiwiZGVja0tleSIsInZvY2FiS2V5Iiwic2V0U2VsZWN0ZWRWb2NhYiIsInVwZGF0ZVNlbGVjdGVkQ2FyZCIsIm9uUGFuZWxDbG9zZSIsInNldEZvcmdlU3RhdGUiLCJidXR0b25BY3Rpb25Gb3JnZSIsImN1cnJlbnRGb3JnZVN0YXRlIiwiYnV0dG9uQ2FuY2VsRm9yZ2UiLCJoYW1tZXJCYXIiLCJmb3JnZUJhciIsIm1pZFgiLCJmb3JnZUJvdHRvbUNvbnRhaW5lciIsInF1YXRlcjNZIiwiZXZlbnRzIiwib24iLCJ1cGRhdGVEZWJ1Z1RleHQiLCJnZW5lcmF0ZU5leHQiLCJ1cGRhdGVQcm9ncmVzc0JhciIsInJlbmRlckhhbW1lciIsInJlbmRlckRlYnVnIiwiZW1pdCIsImNhbkZvcmdlIiwic2VsZWN0ZWREZWNrS2V5Iiwic2VsZWN0ZWRWb2NhYktleSIsInZvY2FiIiwiZ2V0Vm9jYWIiLCJ1bmRlZmluZWQiLCJzZXREaXNhYmxlZCIsInJlbmRlclNlbGVjdGVkQ2FyZCIsImNsZWFyU2VsZWN0ZWRDYXJkIiwiZGVidWdDb250YWluZXIiLCJjb250YWluZXIiLCJkZWJ1Z0ZvcmdlVGV4dCIsInRleHQiLCJmb250U2l6ZSIsImNvbG9yIiwic2V0T3JpZ2luIiwic2V0VmlzaWJsZSIsImZvcmdlU3RhdGUiLCJmb3JnZVN0YXRlcyIsImluY2x1ZGVzIiwic3RhcnRQcmVwYXJlIiwic3RhcnRTZWxlY3QiLCJzdGFydEZvcmdlIiwicmVzZXRGb3JnZVZhbHVlcyIsImV4aXQiLCJleGl0Rm9yZ2UiLCJvcGVuIiwiZW50ZXIiLCJlbnRlckZvcmdlIiwiY3VycmVudEltYWdlIiwiY3VycmVudFRleHQiLCJjdXJyZW50QXVkaW8iLCJzZXRUZXh0IiwiY2xlYW4iLCJyZW1vdmVMaXN0ZW5lciIsImNhbWVyYXMiLCJyZXNldEFsbCIsImNvbnN0cnVjdG9yIiwiY2FuSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});