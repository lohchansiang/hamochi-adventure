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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HammerBar */ \"./src/game/components/HammerBar.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.statusResult = \"forging\";\n        this.selectedDeckKey = \"\";\n        this.selectedVocabKey = \"\";\n        this.cardMakerManager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        const backButton = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 100, 100).setScale(0.5);\n        backButton.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = this.add.circle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY, 250, 0xffffff);\n        this.mainCircle.setStrokeStyle(10, 0x000000);\n        this.noCardDisplay = this.add.text(this.mainCircle.x, this.mainCircle.y, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, this.cardMakerManager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onPanelOpen = ()=>{\n            this.canInput = false;\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.canInput = true;\n        };\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.selectedDeckKey = deckKey;\n            this.selectedVocabKey = vocabKey;\n            this.renderSelectedCard();\n        };\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, this.mainCircle.x + this.mainCircle.radius, this.mainCircle.y, \"buttonAdd\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                if (!this.canInput) return;\n                this.panelSelectCard.open();\n            }\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"forge\");\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, \"Cancel\", \"md\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"prepare\");\n        };\n        // Render Forge Gameplay Objects\n        // this.hammerBar = new HammerBar(this,GameLib.screenWidth/2,startY-300);\n        // this.hammerBar.renderHammer(this.currentHammer, this.maxHammer);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].centerX, 320);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_13__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].centerX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        // Run init setup\n        this.renderSelectedCard();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        let canForge = false;\n        this.noCardDisplay.setVisible(true);\n        if (this.selectedDeckKey && this.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_6__.DeckRepo.getVocab(this.selectedDeckKey, this.selectedVocabKey);\n            if (vocab != undefined) {\n                //\n                this.noCardDisplay.setVisible(false);\n                this.selectedVocab = new _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, this.mainCircle.x, this.mainCircle.y, 250, _components_CardMaker_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].calculateHeight(250), vocab);\n                canForge = true;\n            }\n        }\n        if (canForge) {\n            this.buttonActionForge.setDisabled(false);\n        } else {\n            this.buttonActionForge.setDisabled(true);\n        }\n    }\n    // renderDebug(){\n    //     this.debugContainer = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/4*3);\n    //     this.debugButtonSuccess = new DebugButton( this, -GameLib.screenWidth/4, 0, 'Success');\n    //     this.debugButtonSuccess.onPressedCallback = ()=>{\n    //         this.forgeSuccess();\n    //     }\n    //     this.debugButtonFailed = new DebugButton( this, GameLib.screenWidth/4, 0, 'Failed');\n    //     this.debugButtonFailed.onPressedCallback = ()=>{\n    //         this.forgeFailed();\n    //     }\n    //     this.debugForgeText = this.add.text(0,300,'Forge Text',{fontSize:'40px',color:'black'}).setOrigin(0.5,0.5);\n    //     this.debugContainer.add(this.debugButtonSuccess);\n    //     this.debugContainer.add(this.debugButtonFailed);\n    //     this.debugContainer.add(this.debugForgeText);\n    //     this.debugContainer.setVisible(false);\n    // }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonSelectCard.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.forgeBar.exit();\n    }\n    startForge() {\n        // Reset Forge Value\n        this.statusResult = \"forging\";\n        // Show Hide Element\n        this.buttonSelectCard.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.forgeBar.enter();\n    // this.updateForgeUI();\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDRixhQUFjO1FBRTdDLElBQUksQ0FBQ2xCLGlCQUFpQixHQUFHa0I7UUFFekIsT0FBUUE7WUFDSixLQUFLO2dCQUNELElBQUksQ0FBQ0csWUFBWTtnQkFDakI7WUFDSixLQUFLO2dCQUNELElBQUksQ0FBQ0MsVUFBVTtnQkFDZjtZQUNKLEtBQUs7Z0JBRUQ7WUFDSjtnQkFDSTtRQUNSO0lBQ0o7SUFFQUQsZUFBYztRQUNWLElBQUksQ0FBQ3ZCLGdCQUFnQixDQUFDVCxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDYSxpQkFBaUIsQ0FBQ2IsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQ2UsaUJBQWlCLENBQUNmLFVBQVUsQ0FBQztRQUVsQyxJQUFJLENBQUNnQixRQUFRLENBQUNrQixJQUFJO0lBQ3RCO0lBRUFELGFBQVk7UUFDUixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDM0QsWUFBWSxHQUFHO1FBRXBCLG9CQUFvQjtRQUNwQixJQUFJLENBQUNtQyxnQkFBZ0IsQ0FBQ1QsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQ2EsaUJBQWlCLENBQUNiLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUNlLGlCQUFpQixDQUFDZixVQUFVLENBQUM7UUFFbEMsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDbUIsS0FBSztJQUNuQix3QkFBd0I7SUFDNUI7SUF0TEFDLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUF6Q1ZOLGNBQXdCO1lBQUM7WUFBVTtZQUFTO1NBQVM7UUEwQnJELEVBQUU7YUFDRjNCLFdBQW9CO0lBZXBCO0FBc09KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9DYXJkTWFrZXIudHM/NTZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IFNjZW5lLCBHYW1lT2JqZWN0cywgR2FtZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBIYW1tZXJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1tZXJCYXInO1xuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvbic7XG5pbXBvcnQgeyBEZWNrUmVwbywgVm9jYWIgfSBmcm9tICdAL2xpYi9yZXBvcy9EZWNrUmVwbyc7XG5pbXBvcnQgRGVidWdCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9EZWJ1Z0J1dHRvbic7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9CYXNpY0J1dHRvbic7XG5pbXBvcnQgRm9yZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCYXInO1xuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvQ2FyZE1ha2VyTWFuYWdlcic7XG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmQnO1xuaW1wb3J0IFBhbmVsU2VsZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9QYW5lbFNlbGVjdENhcmQvUGFuZWxTZWxlY3RDYXJkJztcbmltcG9ydCBGb3JnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJ1dHRvbic7XG5pbXBvcnQgRm9yZ2VCb3R0b21Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCb3R0b21Db250YWluZXInO1xuXG5leHBvcnQgY2xhc3MgQ2FyZE1ha2VyIGV4dGVuZHMgU2NlbmVcbntcbiAgICBjYXJkTWFrZXJNYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgZm9yZ2VTdGF0ZXM6IHN0cmluZ1tdID0gWydwcmVwYXJlJywnZm9yZ2UnLCAncmVzdWx0J11cbiAgICBjdXJyZW50Rm9yZ2VTdGF0ZTogc3RyaW5nXG4gICAgc3RhdHVzUmVzdWx0OiBzdHJpbmdcbiAgICAvLyBTZWxlY3RlZCBWb2NhYlxuICAgIHNlbGVjdGVkRGVja0tleTogc3RyaW5nXG4gICAgc2VsZWN0ZWRWb2NhYktleTogc3RyaW5nXG4gICAgLy8gXG4gICAgLy8gR2FtZU9iamVjdHNcbiAgICBtYWluQ2lyY2xlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICBub0NhcmREaXNwbGF5OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgc2VsZWN0ZWRWb2NhYjogVm9jYWJDYXJkIHwgbnVsbFxuICAgIGJ1dHRvblNlbGVjdENhcmQ6IFNwcml0ZUJ1dHRvblxuICAgIGJ1dHRvbkFjdGlvbkZvcmdlOiBGb3JnZUJ1dHRvblxuICAgIGJ1dHRvbkNhbmNlbEZvcmdlOiBCYXNpY0J1dHRvblxuICAgIC8vIFBhbmVsIEZvcmdlXG4gICAgaGFtbWVyQmFyOiBIYW1tZXJCYXJcbiAgICBmb3JnZUJhcjogRm9yZ2VCYXJcbiAgICBmb3JnZUJvdHRvbUNvbnRhaW5lcjogRm9yZ2VCb3R0b21Db250YWluZXJcbiAgICAvL1xuICAgIC8vIFBhbmVsIFNlbGVjdCBDYXJkc1xuICAgIHBhbmVsU2VsZWN0Q2FyZDogUGFuZWxTZWxlY3RDYXJkXG4gICAgLy9cbiAgICBkZWJ1Z0NvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgZGVidWdCdXR0b25TdWNjZXNzOiBEZWJ1Z0J1dHRvblxuICAgIGRlYnVnQnV0dG9uRmFpbGVkOiBEZWJ1Z0J1dHRvblxuICAgIGRlYnVnRm9yZ2VUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBjYW5JbnB1dDogYm9vbGVhbiA9IHRydWVcblxuICAgIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIEhhbW1lckJhci5wcmVsb2FkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1dHRvbkFkZCcsJ2Fzc2V0cy9hZHZlbnR1cmUvY2FyZG1ha2VyL2J1dHRvbkFkZC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQ2FyZEJhc2VCYWNrJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlQmFjay5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRDcmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQ3JhY2sucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDYXJkTWFrZXInKTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlICgpXG4gICAge1xuICAgICAgICAvLyBSZXNldCBEYXRhXG4gICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gXCJmb3JnaW5nXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gXCJcIjtcblxuICAgICAgICB0aGlzLmNhcmRNYWtlck1hbmFnZXIgPSBuZXcgQ2FyZE1ha2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBiZyA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsIEdhbWVMaWIuc2NyZWVuV2lkdGgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LCAweGVlZWVlZSk7XG5cbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAxMDAsIDEwMCkuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgYmFja0J1dHRvbi5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpbiBDaXJjbGVcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gR2FtZUxpYi5zY3JlZW5IZWlnaHQvMyoxO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUgPSB0aGlzLmFkZC5jaXJjbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBzdGFydFksIDI1MCwgMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuc2V0U3Ryb2tlU3R5bGUoMTAsIDB4MDAwMDAwKTtcblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkgPSB0aGlzLmFkZC50ZXh0KHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LCc/Jyx7XG4gICAgICAgICAgICBmb250U2l6ZTogJzMwMHB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNjMGMwYzAnLFxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LDAuNSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgLy8gU2VsZWN0IENhcmRcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQgPSBuZXcgUGFuZWxTZWxlY3RDYXJkKHRoaXMsdGhpcy5jYXJkTWFrZXJNYW5hZ2VyLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbE9wZW4gPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5jYW5JbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9uUGFuZWxDbG9zZSA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLmNhbklucHV0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vbkNhcmRTZWxlY3RlZCA9ICggZGVja0tleTpzdHJpbmcsIHZvY2FiS2V5OnN0cmluZyk9PntcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gZGVja0tleTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYktleSA9IHZvY2FiS2V5O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQ2FyZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkID0gbmV3IFNwcml0ZUJ1dHRvbiggXG4gICAgICAgICAgICB0aGlzLCBcbiAgICAgICAgICAgIHRoaXMubWFpbkNpcmNsZS54ICsgdGhpcy5tYWluQ2lyY2xlLnJhZGl1cywgXG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUueSwgXG4gICAgICAgICAgICAnYnV0dG9uQWRkJyBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIGlmKCAhdGhpcy5jYW5JbnB1dCApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIEFjdGlvbiBCdXR0b25cbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZSA9IG5ldyBGb3JnZUJ1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodCowLjc1KTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnZm9yZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZSA9IG5ldyBCYXNpY0J1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yLCdDYW5jZWwnLCdtZCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCAhdGhpcy5jYW5JbnB1dCApIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgRm9yZ2UgR2FtZXBsYXkgT2JqZWN0c1xuICAgICAgICAvLyB0aGlzLmhhbW1lckJhciA9IG5ldyBIYW1tZXJCYXIodGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsc3RhcnRZLTMwMCk7XG4gICAgICAgIC8vIHRoaXMuaGFtbWVyQmFyLnJlbmRlckhhbW1lcih0aGlzLmN1cnJlbnRIYW1tZXIsIHRoaXMubWF4SGFtbWVyKTtcblxuICAgICAgICB0aGlzLmZvcmdlQmFyID0gbmV3IEZvcmdlQmFyKHRoaXMsR2FtZUxpYi5jZW50ZXJYLDMyMCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCb3R0b21Db250YWluZXIgPSBuZXcgRm9yZ2VCb3R0b21Db250YWluZXIodGhpcyxHYW1lTGliLmNlbnRlclgsR2FtZUxpYi5xdWF0ZXIzWSk7XG4gICAgICAgIFxuICAgICAgICBcblxuXG5cbiAgICAgICAgLy8gUnVuIGluaXQgc2V0dXBcbiAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RlZENhcmQoKTtcblxuICAgICAgICB0aGlzLnNldEZvcmdlU3RhdGUoJ3ByZXBhcmUnKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlclNlbGVjdGVkQ2FyZCgpe1xuICAgICAgICAvLyBjbGVhclxuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZFZvY2FiICl7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVm9jYWIuY2xlYW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYiA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5Gb3JnZTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9DYXJkRGlzcGxheS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBcbiAgICAgICAgaWYoIHRoaXMuc2VsZWN0ZWREZWNrS2V5ICYmIHRoaXMuc2VsZWN0ZWRWb2NhYktleSApe1xuICAgICAgICAgICAgY29uc3Qgdm9jYWI6Vm9jYWIgfCB1bmRlZmluZWQgPSBEZWNrUmVwby5nZXRWb2NhYih0aGlzLnNlbGVjdGVkRGVja0tleSx0aGlzLnNlbGVjdGVkVm9jYWJLZXkpO1xuICAgICAgICAgICAgaWYoIHZvY2FiICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYiA9IG5ldyBWb2NhYkNhcmQodGhpcyx0aGlzLm1haW5DaXJjbGUueCx0aGlzLm1haW5DaXJjbGUueSwyNTAsVm9jYWJDYXJkLmNhbGN1bGF0ZUhlaWdodCgyNTApLHZvY2FiKTtcblxuICAgICAgICAgICAgICAgIGNhbkZvcmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBjYW5Gb3JnZSApe1xuICAgICAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlckRlYnVnKCl7XG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzQqMyk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdCdXR0b25TdWNjZXNzID0gbmV3IERlYnVnQnV0dG9uKCB0aGlzLCAtR2FtZUxpYi5zY3JlZW5XaWR0aC80LCAwLCAnU3VjY2VzcycpO1xuICAgIC8vICAgICB0aGlzLmRlYnVnQnV0dG9uU3VjY2Vzcy5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgLy8gICAgICAgICB0aGlzLmZvcmdlU3VjY2VzcygpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0J1dHRvbkZhaWxlZCA9IG5ldyBEZWJ1Z0J1dHRvbiggdGhpcywgR2FtZUxpYi5zY3JlZW5XaWR0aC80LCAwLCAnRmFpbGVkJyk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdCdXR0b25GYWlsZWQub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgIC8vICAgICAgICAgdGhpcy5mb3JnZUZhaWxlZCgpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dCA9IHRoaXMuYWRkLnRleHQoMCwzMDAsJ0ZvcmdlIFRleHQnLHtmb250U2l6ZTonNDBweCcsY29sb3I6J2JsYWNrJ30pLnNldE9yaWdpbigwLjUsMC41KTtcblxuICAgIC8vICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLmFkZCh0aGlzLmRlYnVnQnV0dG9uU3VjY2Vzcyk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdCdXR0b25GYWlsZWQpO1xuICAgIC8vICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLmFkZCh0aGlzLmRlYnVnRm9yZ2VUZXh0KTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAvLyB9XG5cbiAgICBzZXRGb3JnZVN0YXRlKCBmb3JnZVN0YXRlOnN0cmluZyApe1xuICAgICAgICBpZiggIXRoaXMuZm9yZ2VTdGF0ZXMuaW5jbHVkZXMoZm9yZ2VTdGF0ZSkgKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9IGZvcmdlU3RhdGU7XG5cbiAgICAgICAgc3dpdGNoIChmb3JnZVN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdwcmVwYXJlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHJlcGFyZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9yZ2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRGb3JnZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdWx0JzpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFByZXBhcmUoKXtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmZvcmdlQmFyLmV4aXQoKTtcbiAgICB9XG5cbiAgICBzdGFydEZvcmdlKCl7XG4gICAgICAgIC8vIFJlc2V0IEZvcmdlIFZhbHVlXG4gICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gJ2ZvcmdpbmcnO1xuXG4gICAgICAgIC8vIFNob3cgSGlkZSBFbGVtZW50XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZW50ZXIoKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVGb3JnZVVJKCk7XG4gICAgfVxuXG4gICAgLy8gZm9yZ2VTdWNjZXNzKCl7XG4gICAgLy8gICAgIC8vIGFkZCBJbWFnZSA+IFRleHQgPiBBdWRpb1xuICAgIC8vICAgICBpZiggdGhpcy5jdXJyZW50SW1hZ2UgPCB0aGlzLnRhcmdldEltYWdlICl7XG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSArPSAxO1xuICAgIC8vICAgICB9ZWxzZSBpZiggdGhpcy5jdXJyZW50VGV4dCA8IHRoaXMudGFyZ2V0VGV4dCApe1xuICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50VGV4dCArPSAxO1xuICAgIC8vICAgICB9ZWxzZSBpZiggdGhpcy5jdXJyZW50QXVkaW8gPCB0aGlzLnRhcmdldEF1ZGlvICl7XG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyArPSAxO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYoIHRoaXMuY3VycmVudEltYWdlID4gdGhpcy50YXJnZXRJbWFnZSApIHRoaXMuY3VycmVudEltYWdlID0gdGhpcy50YXJnZXRJbWFnZVxuICAgIC8vICAgICBpZiggdGhpcy5jdXJyZW50VGV4dCA+IHRoaXMudGFyZ2V0VGV4dCApIHRoaXMuY3VycmVudFRleHQgPSB0aGlzLnRhcmdldFRleHRcbiAgICAvLyAgICAgaWYoIHRoaXMuY3VycmVudEF1ZGlvID4gdGhpcy50YXJnZXRBdWRpbyApIHRoaXMuY3VycmVudEF1ZGlvID0gdGhpcy50YXJnZXRBdWRpb1xuXG4gICAgLy8gICAgIGlmKCB0aGlzLmN1cnJlbnRJbWFnZSA9PSB0aGlzLnRhcmdldEltYWdlIFxuICAgIC8vICAgICAgICAgJiYgdGhpcy5jdXJyZW50VGV4dCA9PSB0aGlzLnRhcmdldFRleHRcbiAgICAvLyAgICAgICAgICYmIHRoaXMuY3VycmVudEF1ZGlvID09IHRoaXMudGFyZ2V0QXVkaW9cbiAgICAvLyAgICAgKXtcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gJ3N1Y2Nlc3MnO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy51cGRhdGVGb3JnZVVJKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gZm9yZ2VGYWlsZWQoKXtcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50SGFtbWVyIC09IDE7XG5cbiAgICAvLyAgICAgaWYoIHRoaXMuY3VycmVudEhhbW1lciA8IDAgKSB0aGlzLmN1cnJlbnRIYW1tZXIgPSAwO1xuXG4gICAgLy8gICAgIGlmKCB0aGlzLmN1cnJlbnRIYW1tZXIgPT0gMCApe1xuICAgIC8vICAgICAgICAgdGhpcy5zdGF0dXNSZXN1bHQgPSAnZmFpbGVkJztcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHRoaXMudXBkYXRlRm9yZ2VVSSgpO1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZUZvcmdlVUkoKXtcbiAgICAvLyAgICAgdGhpcy5oYW1tZXJCYXIucmVuZGVySGFtbWVyKHRoaXMuY3VycmVudEhhbW1lciwgdGhpcy5tYXhIYW1tZXIpO1xuXG4gICAgLy8gICAgIGlmKCB0aGlzLmRlYnVnRm9yZ2VUZXh0ICl7XG4gICAgLy8gICAgICAgICBsZXQgdGV4dDpzdHJpbmcgPSAnJztcbiAgICAvLyAgICAgICAgIHRleHQgKz0gJ1RhcmdldDogJztcbiAgICAvLyAgICAgICAgIHRleHQgKz0gdGhpcy5jdXJyZW50SW1hZ2UgKyAnLycgKyB0aGlzLmN1cnJlbnRUZXh0ICsgJy8nICsgdGhpcy5jdXJyZW50QXVkaW87XG4gICAgLy8gICAgICAgICB0ZXh0ICs9ICcgLS0tICc7XG4gICAgLy8gICAgICAgICB0ZXh0ICs9ICdTdGF0dXM6ICc7XG4gICAgLy8gICAgICAgICB0ZXh0ICs9IHRoaXMuc3RhdHVzUmVzdWx0O1xuICAgIC8vICAgICAgICAgdGhpcy5kZWJ1Z0ZvcmdlVGV4dC5zZXRUZXh0KHRleHQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiU2NlbmUiLCJHYW1lTGliIiwiQ2xvc2VCdXR0b24iLCJIYW1tZXJCYXIiLCJTcHJpdGVCdXR0b24iLCJEZWNrUmVwbyIsIkJhc2ljQnV0dG9uIiwiRm9yZ2VCYXIiLCJDYXJkTWFrZXJNYW5hZ2VyIiwiVm9jYWJDYXJkIiwiUGFuZWxTZWxlY3RDYXJkIiwiRm9yZ2VCdXR0b24iLCJGb3JnZUJvdHRvbUNvbnRhaW5lciIsIkNhcmRNYWtlciIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJzdGF0dXNSZXN1bHQiLCJzZWxlY3RlZERlY2tLZXkiLCJzZWxlY3RlZFZvY2FiS2V5IiwiY2FyZE1ha2VyTWFuYWdlciIsImJnIiwiYWRkIiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJiYWNrQnV0dG9uIiwic2V0U2NhbGUiLCJvblByZXNzZWRDYWxsYmFjayIsInNjZW5lIiwic3RhcnQiLCJzdGFydFkiLCJtYWluQ2lyY2xlIiwiY2lyY2xlIiwic2V0U3Ryb2tlU3R5bGUiLCJub0NhcmREaXNwbGF5IiwidGV4dCIsIngiLCJ5IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJzZXRPcmlnaW4iLCJzZXRWaXNpYmxlIiwicGFuZWxTZWxlY3RDYXJkIiwib25QYW5lbE9wZW4iLCJjYW5JbnB1dCIsIm9uUGFuZWxDbG9zZSIsIm9uQ2FyZFNlbGVjdGVkIiwiZGVja0tleSIsInZvY2FiS2V5IiwicmVuZGVyU2VsZWN0ZWRDYXJkIiwiYnV0dG9uU2VsZWN0Q2FyZCIsInJhZGl1cyIsImN1cnJlbnRGb3JnZVN0YXRlIiwib3BlbiIsImJ1dHRvbkFjdGlvbkZvcmdlIiwic2V0Rm9yZ2VTdGF0ZSIsImJ1dHRvbkNhbmNlbEZvcmdlIiwiZm9yZ2VCYXIiLCJjZW50ZXJYIiwiZm9yZ2VCb3R0b21Db250YWluZXIiLCJxdWF0ZXIzWSIsImVtaXQiLCJzZWxlY3RlZFZvY2FiIiwiY2xlYW4iLCJjYW5Gb3JnZSIsInZvY2FiIiwiZ2V0Vm9jYWIiLCJ1bmRlZmluZWQiLCJjYWxjdWxhdGVIZWlnaHQiLCJzZXREaXNhYmxlZCIsImZvcmdlU3RhdGUiLCJmb3JnZVN0YXRlcyIsImluY2x1ZGVzIiwic3RhcnRQcmVwYXJlIiwic3RhcnRGb3JnZSIsImV4aXQiLCJlbnRlciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});