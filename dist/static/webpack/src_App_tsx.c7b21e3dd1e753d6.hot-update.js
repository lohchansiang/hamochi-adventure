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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HammerBar */ \"./src/game/components/HammerBar.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.statusResult = \"forging\";\n        this.selectedDeckKey = \"\";\n        this.selectedVocabKey = \"\";\n        this.cardMakerManager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        const backButton = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 100, 100).setScale(0.5);\n        backButton.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = this.add.circle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY, 250, 0xffffff);\n        this.mainCircle.setStrokeStyle(10, 0x000000);\n        this.mainCircle.name = \"MainCircle\";\n        this.noCardDisplay = this.add.text(this.mainCircle.x, this.mainCircle.y, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, this.cardMakerManager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onPanelOpen = ()=>{\n            this.canInput = false;\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.canInput = true;\n        };\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.selectedDeckKey = deckKey;\n            this.selectedVocabKey = vocabKey;\n            this.renderSelectedCard();\n        };\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, this.mainCircle.x + this.mainCircle.radius, this.mainCircle.y, \"buttonAdd\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                if (!this.canInput) return;\n                this.panelSelectCard.open();\n            }\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"forge\");\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, \"Cancel\", \"md\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"prepare\");\n        };\n        // Render Forge Gameplay Objects\n        // this.hammerBar = new HammerBar(this,GameLib.screenWidth/2,startY-300);\n        // this.hammerBar.renderHammer(this.currentHammer, this.maxHammer);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 320);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_13__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        // Run init setup\n        this.renderSelectedCard();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        let canForge = false;\n        this.noCardDisplay.setVisible(true);\n        if (this.selectedDeckKey && this.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_6__.DeckRepo.getVocab(this.selectedDeckKey, this.selectedVocabKey);\n            if (vocab != undefined) {\n                //\n                this.noCardDisplay.setVisible(false);\n                this.selectedVocab = new _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, this.mainCircle.x, this.mainCircle.y, 250, _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].calculateHeight(250), vocab);\n                canForge = true;\n            }\n        }\n        if (canForge) {\n            this.buttonActionForge.setDisabled(false);\n        } else {\n            this.buttonActionForge.setDisabled(true);\n        }\n    }\n    // renderDebug(){\n    //     this.debugContainer = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/4*3);\n    //     this.debugButtonSuccess = new DebugButton( this, -GameLib.screenWidth/4, 0, 'Success');\n    //     this.debugButtonSuccess.onPressedCallback = ()=>{\n    //         this.forgeSuccess();\n    //     }\n    //     this.debugButtonFailed = new DebugButton( this, GameLib.screenWidth/4, 0, 'Failed');\n    //     this.debugButtonFailed.onPressedCallback = ()=>{\n    //         this.forgeFailed();\n    //     }\n    //     this.debugForgeText = this.add.text(0,300,'Forge Text',{fontSize:'40px',color:'black'}).setOrigin(0.5,0.5);\n    //     this.debugContainer.add(this.debugButtonSuccess);\n    //     this.debugContainer.add(this.debugButtonFailed);\n    //     this.debugContainer.add(this.debugForgeText);\n    //     this.debugContainer.setVisible(false);\n    // }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonSelectCard.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.forgeBar.exit();\n        this.forgeBottomContainer.exit();\n        this.mainCircle.disableInteractive();\n    }\n    startForge() {\n        // Reset Forge Value\n        this.statusResult = \"forging\";\n        // Show Hide Element\n        this.buttonSelectCard.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.forgeBar.enter();\n        this.forgeBottomContainer.enter();\n        this.updateForgeUI();\n        this.mainCircle.setInteractive(undefined, undefined, true);\n    }\n    updateForgeUI() {\n        if (this.debugForgeText) {\n            let text = \"\";\n            text += \"Target: \";\n            text += this.currentImage + \"/\" + this.currentText + \"/\" + this.currentAudio;\n            text += \" --- \";\n            text += \"Status: \";\n            text += this.statusResult;\n            this.debugForgeText.setText(text);\n        }\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDK0MsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUNDLFlBQVk7WUFDNUVqRCxRQUFRO1lBQ1JBLFFBQVE7WUFDUkEsUUFBUSxJQUFJLENBQUNwQixZQUFZO1lBQ3pCLElBQUksQ0FBQ2tFLGNBQWMsQ0FBQ0ksT0FBTyxDQUFDbEQ7UUFDaEM7SUFDSjtJQXJNQW1ELGFBQ0E7UUFDSSxLQUFLLENBQUM7YUF6Q1ZkLGNBQXdCO1lBQUM7WUFBVTtZQUFTO1NBQVM7UUEwQnJELEVBQUU7YUFDRjNCLFdBQW9CO0lBZXBCO0FBbU1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9DYXJkTWFrZXIudHM/NTZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IFNjZW5lLCBHYW1lT2JqZWN0cywgR2FtZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBIYW1tZXJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1tZXJCYXInO1xuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvbic7XG5pbXBvcnQgeyBEZWNrUmVwbywgVm9jYWIgfSBmcm9tICdAL2xpYi9yZXBvcy9EZWNrUmVwbyc7XG5pbXBvcnQgRGVidWdCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9EZWJ1Z0J1dHRvbic7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9CYXNpY0J1dHRvbic7XG5pbXBvcnQgRm9yZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXInO1xuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvQ2FyZE1ha2VyTWFuYWdlcic7XG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmQnO1xuaW1wb3J0IFBhbmVsU2VsZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9QYW5lbFNlbGVjdENhcmQvUGFuZWxTZWxlY3RDYXJkJztcbmltcG9ydCBGb3JnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJ1dHRvbic7XG5pbXBvcnQgRm9yZ2VCb3R0b21Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCb3R0b21Db250YWluZXInO1xuXG5leHBvcnQgY2xhc3MgQ2FyZE1ha2VyIGV4dGVuZHMgU2NlbmVcbntcbiAgICBjYXJkTWFrZXJNYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgZm9yZ2VTdGF0ZXM6IHN0cmluZ1tdID0gWydwcmVwYXJlJywnZm9yZ2UnLCAncmVzdWx0J11cbiAgICBjdXJyZW50Rm9yZ2VTdGF0ZTogc3RyaW5nXG4gICAgc3RhdHVzUmVzdWx0OiBzdHJpbmdcbiAgICAvLyBTZWxlY3RlZCBWb2NhYlxuICAgIHNlbGVjdGVkRGVja0tleTogc3RyaW5nXG4gICAgc2VsZWN0ZWRWb2NhYktleTogc3RyaW5nXG4gICAgLy8gXG4gICAgLy8gR2FtZU9iamVjdHNcbiAgICBtYWluQ2lyY2xlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICBub0NhcmREaXNwbGF5OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgc2VsZWN0ZWRWb2NhYjogVm9jYWJDYXJkIHwgbnVsbFxuICAgIGJ1dHRvblNlbGVjdENhcmQ6IFNwcml0ZUJ1dHRvblxuICAgIGJ1dHRvbkFjdGlvbkZvcmdlOiBGb3JnZUJ1dHRvblxuICAgIGJ1dHRvbkNhbmNlbEZvcmdlOiBCYXNpY0J1dHRvblxuICAgIC8vIFBhbmVsIEZvcmdlXG4gICAgaGFtbWVyQmFyOiBIYW1tZXJCYXJcbiAgICBmb3JnZUJhcjogRm9yZ2VCYXJcbiAgICBmb3JnZUJvdHRvbUNvbnRhaW5lcjogRm9yZ2VCb3R0b21Db250YWluZXJcbiAgICAvL1xuICAgIC8vIFBhbmVsIFNlbGVjdCBDYXJkc1xuICAgIHBhbmVsU2VsZWN0Q2FyZDogUGFuZWxTZWxlY3RDYXJkXG4gICAgLy9cbiAgICBkZWJ1Z0NvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgZGVidWdCdXR0b25TdWNjZXNzOiBEZWJ1Z0J1dHRvblxuICAgIGRlYnVnQnV0dG9uRmFpbGVkOiBEZWJ1Z0J1dHRvblxuICAgIGRlYnVnRm9yZ2VUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBjYW5JbnB1dDogYm9vbGVhbiA9IHRydWVcblxuICAgIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIEhhbW1lckJhci5wcmVsb2FkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1dHRvbkFkZCcsJ2Fzc2V0cy9hZHZlbnR1cmUvY2FyZG1ha2VyL2J1dHRvbkFkZC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQ2FyZEJhc2VCYWNrJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlQmFjay5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRDcmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQ3JhY2sucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDYXJkTWFrZXInKTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlICgpXG4gICAge1xuICAgICAgICAvLyBSZXNldCBEYXRhXG4gICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gXCJmb3JnaW5nXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gXCJcIjtcblxuICAgICAgICB0aGlzLmNhcmRNYWtlck1hbmFnZXIgPSBuZXcgQ2FyZE1ha2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBiZyA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsIEdhbWVMaWIuc2NyZWVuV2lkdGgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LCAweGVlZWVlZSk7XG5cbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAxMDAsIDEwMCkuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgYmFja0J1dHRvbi5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpbiBDaXJjbGVcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gR2FtZUxpYi5zY3JlZW5IZWlnaHQvMyoxO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUgPSB0aGlzLmFkZC5jaXJjbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBzdGFydFksIDI1MCwgMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuc2V0U3Ryb2tlU3R5bGUoMTAsIDB4MDAwMDAwKTtcbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlLm5hbWUgPSBcIk1haW5DaXJjbGVcIjtcblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkgPSB0aGlzLmFkZC50ZXh0KHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LCc/Jyx7XG4gICAgICAgICAgICBmb250U2l6ZTogJzMwMHB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNjMGMwYzAnLFxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LDAuNSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgLy8gU2VsZWN0IENhcmRcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQgPSBuZXcgUGFuZWxTZWxlY3RDYXJkKHRoaXMsdGhpcy5jYXJkTWFrZXJNYW5hZ2VyLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbE9wZW4gPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5jYW5JbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9uUGFuZWxDbG9zZSA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLmNhbklucHV0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vbkNhcmRTZWxlY3RlZCA9ICggZGVja0tleTpzdHJpbmcsIHZvY2FiS2V5OnN0cmluZyk9PntcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gZGVja0tleTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYktleSA9IHZvY2FiS2V5O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQ2FyZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkID0gbmV3IFNwcml0ZUJ1dHRvbiggXG4gICAgICAgICAgICB0aGlzLCBcbiAgICAgICAgICAgIHRoaXMubWFpbkNpcmNsZS54ICsgdGhpcy5tYWluQ2lyY2xlLnJhZGl1cywgXG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUueSwgXG4gICAgICAgICAgICAnYnV0dG9uQWRkJyBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIGlmKCAhdGhpcy5jYW5JbnB1dCApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIEFjdGlvbiBCdXR0b25cbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZSA9IG5ldyBGb3JnZUJ1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodCowLjc1KTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnZm9yZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZSA9IG5ldyBCYXNpY0J1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yLCdDYW5jZWwnLCdtZCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCAhdGhpcy5jYW5JbnB1dCApIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgRm9yZ2UgR2FtZXBsYXkgT2JqZWN0c1xuICAgICAgICAvLyB0aGlzLmhhbW1lckJhciA9IG5ldyBIYW1tZXJCYXIodGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsc3RhcnRZLTMwMCk7XG4gICAgICAgIC8vIHRoaXMuaGFtbWVyQmFyLnJlbmRlckhhbW1lcih0aGlzLmN1cnJlbnRIYW1tZXIsIHRoaXMubWF4SGFtbWVyKTtcblxuICAgICAgICB0aGlzLmZvcmdlQmFyID0gbmV3IEZvcmdlQmFyKHRoaXMsR2FtZUxpYi5taWRYLDMyMCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIgPSBuZXcgRm9yZ2VCb3R0b21Db250YWluZXIodGhpcyxHYW1lTGliLm1pZFgsR2FtZUxpYi5xdWF0ZXIzWSk7XG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gaW5pdCBzZXR1cFxuICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQ2FyZCgpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbkZvcmdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZERlY2tLZXkgJiYgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ICl7XG4gICAgICAgICAgICBjb25zdCB2b2NhYjpWb2NhYiB8IHVuZGVmaW5lZCA9IERlY2tSZXBvLmdldFZvY2FiKHRoaXMuc2VsZWN0ZWREZWNrS2V5LHRoaXMuc2VsZWN0ZWRWb2NhYktleSk7XG4gICAgICAgICAgICBpZiggdm9jYWIgIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbmV3IFZvY2FiQ2FyZCh0aGlzLHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LDI1MCxWb2NhYkNhcmQuY2FsY3VsYXRlSGVpZ2h0KDI1MCksdm9jYWIpO1xuXG4gICAgICAgICAgICAgICAgY2FuRm9yZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGNhbkZvcmdlICl7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyRGVidWcoKXtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvNCozKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0J1dHRvblN1Y2Nlc3MgPSBuZXcgRGVidWdCdXR0b24oIHRoaXMsIC1HYW1lTGliLnNjcmVlbldpZHRoLzQsIDAsICdTdWNjZXNzJyk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdCdXR0b25TdWNjZXNzLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yZ2VTdWNjZXNzKCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLmRlYnVnQnV0dG9uRmFpbGVkID0gbmV3IERlYnVnQnV0dG9uKCB0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoLzQsIDAsICdGYWlsZWQnKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0J1dHRvbkZhaWxlZC5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgLy8gICAgICAgICB0aGlzLmZvcmdlRmFpbGVkKCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLmRlYnVnRm9yZ2VUZXh0ID0gdGhpcy5hZGQudGV4dCgwLDMwMCwnRm9yZ2UgVGV4dCcse2ZvbnRTaXplOic0MHB4Jyxjb2xvcjonYmxhY2snfSkuc2V0T3JpZ2luKDAuNSwwLjUpO1xuXG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdCdXR0b25TdWNjZXNzKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5hZGQodGhpcy5kZWJ1Z0J1dHRvbkZhaWxlZCk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdGb3JnZVRleHQpO1xuICAgIC8vICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIC8vIH1cblxuICAgIHNldEZvcmdlU3RhdGUoIGZvcmdlU3RhdGU6c3RyaW5nICl7XG4gICAgICAgIGlmKCAhdGhpcy5mb3JnZVN0YXRlcy5pbmNsdWRlcyhmb3JnZVN0YXRlKSApIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID0gZm9yZ2VTdGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKGZvcmdlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXBhcmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVwYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb3JnZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEZvcmdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJlcGFyZSgpe1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZXhpdCgpO1xuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyLmV4aXQoKTtcblxuICAgICAgICB0aGlzLm1haW5DaXJjbGUuZGlzYWJsZUludGVyYWN0aXZlKCk7XG4gICAgfVxuXG4gICAgc3RhcnRGb3JnZSgpe1xuICAgICAgICAvLyBSZXNldCBGb3JnZSBWYWx1ZVxuICAgICAgICB0aGlzLnN0YXR1c1Jlc3VsdCA9ICdmb3JnaW5nJztcblxuICAgICAgICAvLyBTaG93IEhpZGUgRWxlbWVudFxuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2Uuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICB0aGlzLmZvcmdlQmFyLmVudGVyKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIuZW50ZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JnZVVJKCk7XG5cbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlLnNldEludGVyYWN0aXZlKHVuZGVmaW5lZCx1bmRlZmluZWQsdHJ1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRm9yZ2VVSSgpe1xuICAgICAgICBpZiggdGhpcy5kZWJ1Z0ZvcmdlVGV4dCApe1xuICAgICAgICAgICAgbGV0IHRleHQ6c3RyaW5nID0gJyc7XG4gICAgICAgICAgICB0ZXh0ICs9ICdUYXJnZXQ6ICc7XG4gICAgICAgICAgICB0ZXh0ICs9IHRoaXMuY3VycmVudEltYWdlICsgJy8nICsgdGhpcy5jdXJyZW50VGV4dCArICcvJyArIHRoaXMuY3VycmVudEF1ZGlvO1xuICAgICAgICAgICAgdGV4dCArPSAnIC0tLSAnO1xuICAgICAgICAgICAgdGV4dCArPSAnU3RhdHVzOiAnO1xuICAgICAgICAgICAgdGV4dCArPSB0aGlzLnN0YXR1c1Jlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuZGVidWdGb3JnZVRleHQuc2V0VGV4dCh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsIlNjZW5lIiwiR2FtZUxpYiIsIkNsb3NlQnV0dG9uIiwiSGFtbWVyQmFyIiwiU3ByaXRlQnV0dG9uIiwiRGVja1JlcG8iLCJCYXNpY0J1dHRvbiIsIkZvcmdlQmFyIiwiQ2FyZE1ha2VyTWFuYWdlciIsIlZvY2FiQ2FyZCIsIlBhbmVsU2VsZWN0Q2FyZCIsIkZvcmdlQnV0dG9uIiwiRm9yZ2VCb3R0b21Db250YWluZXIiLCJDYXJkTWFrZXIiLCJwcmVsb2FkIiwibG9hZCIsImltYWdlIiwiY3JlYXRlIiwic3RhdHVzUmVzdWx0Iiwic2VsZWN0ZWREZWNrS2V5Iiwic2VsZWN0ZWRWb2NhYktleSIsImNhcmRNYWtlck1hbmFnZXIiLCJiZyIsImFkZCIsInJlY3RhbmdsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYmFja0J1dHRvbiIsInNldFNjYWxlIiwib25QcmVzc2VkQ2FsbGJhY2siLCJzY2VuZSIsInN0YXJ0Iiwic3RhcnRZIiwibWFpbkNpcmNsZSIsImNpcmNsZSIsInNldFN0cm9rZVN0eWxlIiwibmFtZSIsIm5vQ2FyZERpc3BsYXkiLCJ0ZXh0IiwieCIsInkiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsInNldE9yaWdpbiIsInNldFZpc2libGUiLCJwYW5lbFNlbGVjdENhcmQiLCJvblBhbmVsT3BlbiIsImNhbklucHV0Iiwib25QYW5lbENsb3NlIiwib25DYXJkU2VsZWN0ZWQiLCJkZWNrS2V5Iiwidm9jYWJLZXkiLCJyZW5kZXJTZWxlY3RlZENhcmQiLCJidXR0b25TZWxlY3RDYXJkIiwicmFkaXVzIiwiY3VycmVudEZvcmdlU3RhdGUiLCJvcGVuIiwiYnV0dG9uQWN0aW9uRm9yZ2UiLCJzZXRGb3JnZVN0YXRlIiwiYnV0dG9uQ2FuY2VsRm9yZ2UiLCJmb3JnZUJhciIsIm1pZFgiLCJmb3JnZUJvdHRvbUNvbnRhaW5lciIsInF1YXRlcjNZIiwiZW1pdCIsInNlbGVjdGVkVm9jYWIiLCJjbGVhbiIsImNhbkZvcmdlIiwidm9jYWIiLCJnZXRWb2NhYiIsInVuZGVmaW5lZCIsImNhbGN1bGF0ZUhlaWdodCIsInNldERpc2FibGVkIiwiZm9yZ2VTdGF0ZSIsImZvcmdlU3RhdGVzIiwiaW5jbHVkZXMiLCJzdGFydFByZXBhcmUiLCJzdGFydEZvcmdlIiwiZXhpdCIsImRpc2FibGVJbnRlcmFjdGl2ZSIsImVudGVyIiwidXBkYXRlRm9yZ2VVSSIsInNldEludGVyYWN0aXZlIiwiZGVidWdGb3JnZVRleHQiLCJjdXJyZW50SW1hZ2UiLCJjdXJyZW50VGV4dCIsImN1cnJlbnRBdWRpbyIsInNldFRleHQiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});