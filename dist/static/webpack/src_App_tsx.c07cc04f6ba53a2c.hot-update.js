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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HammerBar */ \"./src/game/components/HammerBar.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n/* harmony import */ var _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CardMaker/ForgeMainCircle */ \"./src/game/components/CardMaker/ForgeMainCircle.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.statusResult = \"forging\";\n        this.selectedDeckKey = \"\";\n        this.selectedVocabKey = \"\";\n        this.manager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        const backButton = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 100, 100).setScale(0.5);\n        backButton.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = new _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_13__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, this.manager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onPanelOpen = ()=>{\n            this.canInput = false;\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.canInput = true;\n        };\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.selectedDeckKey = deckKey;\n            this.selectedVocabKey = vocabKey;\n            this.renderSelectedCard();\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"forge\");\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, \"Cancel\", \"md\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"prepare\");\n        };\n        // Render Forge Gameplay Objects\n        // this.hammerBar = new HammerBar(this,GameLib.screenWidth/2,startY-300);\n        // this.hammerBar.renderHammer(this.currentHammer, this.maxHammer);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 320);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        this.events.once(\"open-panel\", ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                if (!this.canInput) return;\n                this.panelSelectCard.open();\n            }\n        });\n        // Run init setup\n        this.renderSelectedCard();\n        this.renderDebug();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        let canForge = false;\n        this.noCardDisplay.setVisible(true);\n        if (this.selectedDeckKey && this.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__.DeckRepo.getVocab(this.selectedDeckKey, this.selectedVocabKey);\n            if (vocab != undefined) {\n                //\n                this.noCardDisplay.setVisible(false);\n                this.selectedVocab = new _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, this.mainCircle.x, this.mainCircle.y, 250, _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"].calculateHeight(250), vocab);\n                canForge = true;\n            }\n        }\n        if (canForge) {\n            this.buttonActionForge.setDisabled(false);\n        } else {\n            this.buttonActionForge.setDisabled(true);\n        }\n    }\n    renderDebug() {\n        this.debugContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 200);\n        this.debugForgeText = this.add.text(0, 0, \"Forge Text\", {\n            fontSize: \"40px\",\n            color: \"black\"\n        }).setOrigin(0.5, 0.5);\n        this.debugContainer.add(this.debugForgeText);\n        this.debugContainer.setVisible(false);\n    }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonSelectCard.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.forgeBar.exit();\n        this.forgeBottomContainer.exit();\n        this.mainCircle.disableInteractive();\n    }\n    startForge() {\n        // Reset Forge Value\n        this.statusResult = \"forging\";\n        // Show Hide Element\n        this.buttonSelectCard.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.forgeBar.enter();\n        this.forgeBottomContainer.enter();\n        this.debugContainer.setVisible(true);\n        this.updateDebugText();\n        this.mainCircle.setInteractive(undefined, undefined, true);\n    }\n    updateDebugText() {\n        if (this.debugForgeText) {\n            let text = \"\";\n            text += \"Target: \";\n            text += this.manager.currentImage + \"/\" + this.manager.currentText + \"/\" + this.manager.currentAudio;\n            text += \" --- \";\n            text += \"Status: \";\n            text += this.statusResult;\n            this.debugForgeText.setText(text);\n        }\n    }\n    clean() {\n        this.events.removeListener(\"open-panel\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7SUFDekI7SUF0TEFDLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUFwQ1ZqQixjQUF3QjtZQUFDO1lBQVU7WUFBUztTQUFTO1FBcUJyRCxFQUFFO2FBQ0Z2QyxXQUFvQjtJQWVwQjtBQW9MSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyLnRzPzU2ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBTY2VuZSwgR2FtZU9iamVjdHMsIEdhbWUgfSBmcm9tICdwaGFzZXInO1xuaW1wb3J0IEdhbWVMaWIgZnJvbSAnQC9saWIvR2FtZUxpYic7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgSGFtbWVyQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvSGFtbWVyQmFyJztcbmltcG9ydCBTcHJpdGVCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9TcHJpdGVCdXR0b24nO1xuaW1wb3J0IHsgRGVja1JlcG8sIFZvY2FiIH0gZnJvbSAnQC9saWIvcmVwb3MvRGVja1JlcG8nO1xuaW1wb3J0IEJhc2ljQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQmFzaWNCdXR0b24nO1xuaW1wb3J0IEZvcmdlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQmFyJztcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0NhcmRNYWtlck1hbmFnZXInO1xuaW1wb3J0IFZvY2FiQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9QYW5lbFNlbGVjdENhcmQvVm9jYWJDYXJkJztcbmltcG9ydCBQYW5lbFNlbGVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvUGFuZWxTZWxlY3RDYXJkL1BhbmVsU2VsZWN0Q2FyZCc7XG5pbXBvcnQgRm9yZ2VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCdXR0b24nO1xuaW1wb3J0IEZvcmdlQm90dG9tQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQm90dG9tQ29udGFpbmVyJztcbmltcG9ydCBGb3JnZU1haW5DaXJjbGUgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VNYWluQ2lyY2xlJztcblxuZXhwb3J0IGNsYXNzIENhcmRNYWtlciBleHRlbmRzIFNjZW5lXG57XG4gICAgbWFuYWdlcjogQ2FyZE1ha2VyTWFuYWdlclxuICAgIGZvcmdlU3RhdGVzOiBzdHJpbmdbXSA9IFsncHJlcGFyZScsJ2ZvcmdlJywgJ3Jlc3VsdCddXG4gICAgY3VycmVudEZvcmdlU3RhdGU6IHN0cmluZ1xuICAgIHN0YXR1c1Jlc3VsdDogc3RyaW5nXG4gICAgLy8gU2VsZWN0ZWQgVm9jYWJcbiAgICBzZWxlY3RlZERlY2tLZXk6IHN0cmluZ1xuICAgIHNlbGVjdGVkVm9jYWJLZXk6IHN0cmluZ1xuICAgIC8vIFxuICAgIC8vIEdhbWVPYmplY3RzXG4gICAgbWFpbkNpcmNsZTogRm9yZ2VNYWluQ2lyY2xlXG4gICAgYnV0dG9uQWN0aW9uRm9yZ2U6IEZvcmdlQnV0dG9uXG4gICAgYnV0dG9uQ2FuY2VsRm9yZ2U6IEJhc2ljQnV0dG9uXG4gICAgLy8gUGFuZWwgRm9yZ2VcbiAgICBoYW1tZXJCYXI6IEhhbW1lckJhclxuICAgIGZvcmdlQmFyOiBGb3JnZUJhclxuICAgIGZvcmdlQm90dG9tQ29udGFpbmVyOiBGb3JnZUJvdHRvbUNvbnRhaW5lclxuICAgIC8vXG4gICAgLy8gUGFuZWwgU2VsZWN0IENhcmRzXG4gICAgcGFuZWxTZWxlY3RDYXJkOiBQYW5lbFNlbGVjdENhcmRcbiAgICAvL1xuICAgIGRlYnVnQ29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBkZWJ1Z0ZvcmdlVGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG4gICAgY2FuSW5wdXQ6IGJvb2xlYW4gPSB0cnVlXG5cbiAgICBwcmVsb2FkICgpXG4gICAge1xuICAgICAgICBIYW1tZXJCYXIucHJlbG9hZCh0aGlzKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidXR0b25BZGQnLCdhc3NldHMvYWR2ZW50dXJlL2NhcmRtYWtlci9idXR0b25BZGQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQmFzZScsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlQmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZUJhY2sucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQ3JhY2snLCdhc3NldHMvYWR2ZW50dXJlL2RlY2tzL3ZvY2FiQ2FyZENyYWNrLnBuZycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignQ2FyZE1ha2VyJyk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZSAoKVxuICAgIHtcbiAgICAgICAgLy8gUmVzZXQgRGF0YVxuICAgICAgICB0aGlzLnN0YXR1c1Jlc3VsdCA9IFwiZm9yZ2luZ1wiO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGVja0tleSA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYktleSA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbmV3IENhcmRNYWtlck1hbmFnZXIodGhpcyk7XG5cbiAgICAgICAgY29uc3QgYmcgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBHYW1lTGliLnNjcmVlbkhlaWdodC8yLCBHYW1lTGliLnNjcmVlbldpZHRoLCBHYW1lTGliLnNjcmVlbkhlaWdodCwgMHhlZWVlZWUpO1xuXG4gICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoIC0gMTAwLCAxMDApLnNldFNjYWxlKDAuNSk7XG4gICAgICAgIGJhY2tCdXR0b24ub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1haW4gQ2lyY2xlXG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzMqMTtcbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlID0gbmV3IEZvcmdlTWFpbkNpcmNsZSh0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwgc3RhcnRZKTtcblxuICAgICAgICAvLyBTZWxlY3QgQ2FyZFxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZCA9IG5ldyBQYW5lbFNlbGVjdENhcmQodGhpcyx0aGlzLm1hbmFnZXIsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIpO1xuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vblBhbmVsT3BlbiA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLmNhbklucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbENsb3NlID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuY2FuSW5wdXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9uQ2FyZFNlbGVjdGVkID0gKCBkZWNrS2V5OnN0cmluZywgdm9jYWJLZXk6c3RyaW5nKT0+e1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERlY2tLZXkgPSBkZWNrS2V5O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gdm9jYWJLZXk7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBBY3Rpb24gQnV0dG9uXG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2UgPSBuZXcgRm9yZ2VCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQqMC43NSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgaWYoICF0aGlzLmNhbklucHV0ICkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnNldEZvcmdlU3RhdGUoJ2ZvcmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2UgPSBuZXcgQmFzaWNCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiwnQ2FuY2VsJywnbWQnKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyIEZvcmdlIEdhbWVwbGF5IE9iamVjdHNcbiAgICAgICAgLy8gdGhpcy5oYW1tZXJCYXIgPSBuZXcgSGFtbWVyQmFyKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLHN0YXJ0WS0zMDApO1xuICAgICAgICAvLyB0aGlzLmhhbW1lckJhci5yZW5kZXJIYW1tZXIodGhpcy5jdXJyZW50SGFtbWVyLCB0aGlzLm1heEhhbW1lcik7XG5cbiAgICAgICAgdGhpcy5mb3JnZUJhciA9IG5ldyBGb3JnZUJhcih0aGlzLEdhbWVMaWIubWlkWCwzMjApO1xuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyID0gbmV3IEZvcmdlQm90dG9tQ29udGFpbmVyKHRoaXMsR2FtZUxpYi5taWRYLEdhbWVMaWIucXVhdGVyM1kpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzLm9uY2UoJ29wZW4tcGFuZWwnLCgpPT57XG4gICAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9PSAncHJlcGFyZScgKXtcbiAgICAgICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIC8vIFJ1biBpbml0IHNldHVwXG4gICAgICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRDYXJkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRGVidWcoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbkZvcmdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZERlY2tLZXkgJiYgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ICl7XG4gICAgICAgICAgICBjb25zdCB2b2NhYjpWb2NhYiB8IHVuZGVmaW5lZCA9IERlY2tSZXBvLmdldFZvY2FiKHRoaXMuc2VsZWN0ZWREZWNrS2V5LHRoaXMuc2VsZWN0ZWRWb2NhYktleSk7XG4gICAgICAgICAgICBpZiggdm9jYWIgIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbmV3IFZvY2FiQ2FyZCh0aGlzLHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LDI1MCxWb2NhYkNhcmQuY2FsY3VsYXRlSGVpZ2h0KDI1MCksdm9jYWIpO1xuXG4gICAgICAgICAgICAgICAgY2FuRm9yZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGNhbkZvcmdlICl7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRGVidWcoKXtcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLm1pZFgsMjAwKTtcbiAgICAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dCA9IHRoaXMuYWRkLnRleHQoMCwwLCdGb3JnZSBUZXh0Jyx7Zm9udFNpemU6JzQwcHgnLGNvbG9yOidibGFjayd9KS5zZXRPcmlnaW4oMC41LDAuNSk7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5hZGQodGhpcy5kZWJ1Z0ZvcmdlVGV4dCk7XG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0Rm9yZ2VTdGF0ZSggZm9yZ2VTdGF0ZTpzdHJpbmcgKXtcbiAgICAgICAgaWYoICF0aGlzLmZvcmdlU3RhdGVzLmluY2x1ZGVzKGZvcmdlU3RhdGUpICkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEZvcmdlU3RhdGUgPSBmb3JnZVN0YXRlO1xuXG4gICAgICAgIHN3aXRjaCAoZm9yZ2VTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAncHJlcGFyZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByZXBhcmUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Rm9yZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcmVwYXJlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5mb3JnZUJhci5leGl0KCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIuZXhpdCgpO1xuXG4gICAgICAgIHRoaXMubWFpbkNpcmNsZS5kaXNhYmxlSW50ZXJhY3RpdmUoKTtcbiAgICB9XG5cbiAgICBzdGFydEZvcmdlKCl7XG4gICAgICAgIC8vIFJlc2V0IEZvcmdlIFZhbHVlXG4gICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gJ2ZvcmdpbmcnO1xuXG4gICAgICAgIC8vIFNob3cgSGlkZSBFbGVtZW50XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lci5lbnRlcigpO1xuXG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZWJ1Z1RleHQoKTtcblxuICAgICAgICB0aGlzLm1haW5DaXJjbGUuc2V0SW50ZXJhY3RpdmUodW5kZWZpbmVkLHVuZGVmaW5lZCx0cnVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWJ1Z1RleHQoKXtcbiAgICAgICAgaWYoIHRoaXMuZGVidWdGb3JnZVRleHQgKXtcbiAgICAgICAgICAgIGxldCB0ZXh0OnN0cmluZyA9ICcnO1xuICAgICAgICAgICAgdGV4dCArPSAnVGFyZ2V0OiAnO1xuICAgICAgICAgICAgdGV4dCArPSB0aGlzLm1hbmFnZXIuY3VycmVudEltYWdlICsgJy8nICsgdGhpcy5tYW5hZ2VyLmN1cnJlbnRUZXh0ICsgJy8nICsgdGhpcy5tYW5hZ2VyLmN1cnJlbnRBdWRpbztcbiAgICAgICAgICAgIHRleHQgKz0gJyAtLS0gJztcbiAgICAgICAgICAgIHRleHQgKz0gJ1N0YXR1czogJztcbiAgICAgICAgICAgIHRleHQgKz0gdGhpcy5zdGF0dXNSZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9yZ2VUZXh0LnNldFRleHQodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhbigpe1xuICAgICAgICB0aGlzLmV2ZW50cy5yZW1vdmVMaXN0ZW5lcignb3Blbi1wYW5lbCcpO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5yZXNldEFsbCgpXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiQ2xvc2VCdXR0b24iLCJIYW1tZXJCYXIiLCJEZWNrUmVwbyIsIkJhc2ljQnV0dG9uIiwiRm9yZ2VCYXIiLCJDYXJkTWFrZXJNYW5hZ2VyIiwiVm9jYWJDYXJkIiwiUGFuZWxTZWxlY3RDYXJkIiwiRm9yZ2VCdXR0b24iLCJGb3JnZUJvdHRvbUNvbnRhaW5lciIsIkZvcmdlTWFpbkNpcmNsZSIsIkNhcmRNYWtlciIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJzdGF0dXNSZXN1bHQiLCJzZWxlY3RlZERlY2tLZXkiLCJzZWxlY3RlZFZvY2FiS2V5IiwibWFuYWdlciIsImJnIiwiYWRkIiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJiYWNrQnV0dG9uIiwic2V0U2NhbGUiLCJvblByZXNzZWRDYWxsYmFjayIsInNjZW5lIiwic3RhcnQiLCJzdGFydFkiLCJtYWluQ2lyY2xlIiwicGFuZWxTZWxlY3RDYXJkIiwib25QYW5lbE9wZW4iLCJjYW5JbnB1dCIsIm9uUGFuZWxDbG9zZSIsIm9uQ2FyZFNlbGVjdGVkIiwiZGVja0tleSIsInZvY2FiS2V5IiwicmVuZGVyU2VsZWN0ZWRDYXJkIiwiYnV0dG9uQWN0aW9uRm9yZ2UiLCJzZXRGb3JnZVN0YXRlIiwiYnV0dG9uQ2FuY2VsRm9yZ2UiLCJmb3JnZUJhciIsIm1pZFgiLCJmb3JnZUJvdHRvbUNvbnRhaW5lciIsInF1YXRlcjNZIiwiZXZlbnRzIiwib25jZSIsImN1cnJlbnRGb3JnZVN0YXRlIiwib3BlbiIsInJlbmRlckRlYnVnIiwiZW1pdCIsInNlbGVjdGVkVm9jYWIiLCJjbGVhbiIsImNhbkZvcmdlIiwibm9DYXJkRGlzcGxheSIsInNldFZpc2libGUiLCJ2b2NhYiIsImdldFZvY2FiIiwidW5kZWZpbmVkIiwieCIsInkiLCJjYWxjdWxhdGVIZWlnaHQiLCJzZXREaXNhYmxlZCIsImRlYnVnQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZGVidWdGb3JnZVRleHQiLCJ0ZXh0IiwiZm9udFNpemUiLCJjb2xvciIsInNldE9yaWdpbiIsImZvcmdlU3RhdGUiLCJmb3JnZVN0YXRlcyIsImluY2x1ZGVzIiwic3RhcnRQcmVwYXJlIiwic3RhcnRGb3JnZSIsImJ1dHRvblNlbGVjdENhcmQiLCJleGl0IiwiZGlzYWJsZUludGVyYWN0aXZlIiwiZW50ZXIiLCJ1cGRhdGVEZWJ1Z1RleHQiLCJzZXRJbnRlcmFjdGl2ZSIsImN1cnJlbnRJbWFnZSIsImN1cnJlbnRUZXh0IiwiY3VycmVudEF1ZGlvIiwic2V0VGV4dCIsInJlbW92ZUxpc3RlbmVyIiwiY2FtZXJhcyIsInJlc2V0QWxsIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});