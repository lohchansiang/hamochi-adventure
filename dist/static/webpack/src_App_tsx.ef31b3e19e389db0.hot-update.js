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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardMaker/HammerBar */ \"./src/game/components/CardMaker/HammerBar.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardMaker/ForgeBar */ \"./src/game/components/CardMaker/ForgeBar.ts\");\n/* harmony import */ var _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardMaker/CardMakerManager */ \"./src/game/components/CardMaker/CardMakerManager.ts\");\n/* harmony import */ var _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardMaker/PanelSelectCard/PanelSelectCard */ \"./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardMaker/ForgeButton */ \"./src/game/components/CardMaker/ForgeButton.ts\");\n/* harmony import */ var _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMaker/ForgeBottomContainer */ \"./src/game/components/CardMaker/ForgeBottomContainer.ts\");\n/* harmony import */ var _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CardMaker/ForgeMainCircle */ \"./src/game/components/CardMaker/ForgeMainCircle.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        _components_CardMaker_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n        this.load.image(\"vocabCardCrack\", \"assets/adventure/decks/vocabCardCrack.png\");\n    }\n    create() {\n        // Reset Data\n        this.manager = new _components_CardMaker_CardMakerManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        this.buttonClose = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, 100, 100).setScale(0.5);\n        this.buttonClose.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = new _components_CardMaker_ForgeMainCircle__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY);\n        // Select Card\n        this.panelSelectCard = new _components_CardMaker_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, this.manager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.manager.setSelectedVocab(deckKey, vocabKey);\n            this.updateSelectedCard();\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.setForgeState(\"prepare\");\n        };\n        // Render Action Button\n        this.buttonActionForge = new _components_CardMaker_ForgeButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        this.buttonActionForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"forge\");\n            }\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 200, 100, \"Cancel\", \"sm\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"forge\") {\n                this.setForgeState(\"prepare\");\n            }\n        };\n        // Render Forge Gameplay Objects\n        // this.hammerBar = new HammerBar(this,GameLib.screenWidth/2,startY-300);\n        // this.hammerBar.renderHammer(this.currentHammer, this.maxHammer);\n        this.forgeBar = new _components_CardMaker_ForgeBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 320);\n        this.forgeBottomContainer = new _components_CardMaker_ForgeBottomContainer__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].quater3Y);\n        this.events.on(\"open-panel\", ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                this.setForgeState(\"select\");\n            }\n        });\n        this.events.on(\"forge-answered\", ()=>{\n            if (this.currentForgeState == \"forge\") {\n                this.updateDebugText();\n                this.forgeBottomContainer.generateNext();\n                this.forgeBar.updateProgressBar();\n            }\n        });\n        // Run init setup\n        this.updateSelectedCard();\n        this.renderDebug();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    updateSelectedCard() {\n        let canForge = false;\n        if (this.manager.selectedDeckKey && this.manager.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_5__.DeckRepo.getVocab(this.manager.selectedDeckKey, this.manager.selectedVocabKey);\n            if (vocab != undefined) {\n                canForge = true;\n                this.buttonActionForge.setDisabled(false);\n                this.mainCircle.renderSelectedCard(vocab);\n            }\n        }\n        if (!canForge) {\n            this.buttonActionForge.setDisabled(true);\n            this.mainCircle.clearSelectedCard();\n        }\n    }\n    renderDebug() {\n        this.debugContainer = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].midX, 200);\n        this.debugForgeText = this.add.text(0, 0, \"Forge Text\", {\n            fontSize: \"40px\",\n            color: \"black\"\n        }).setOrigin(0.5, 0.5);\n        this.debugContainer.add(this.debugForgeText);\n        this.debugContainer.setVisible(false);\n    }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"select\":\n                this.startSelect();\n                break;\n            case \"forge\":\n                this.startForge();\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonClose.setVisible(true);\n        this.buttonActionForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n        this.manager.resetForgeValues();\n        this.forgeBar.exit();\n        this.forgeBottomContainer.exit();\n        this.mainCircle.exitForge();\n    }\n    startSelect() {\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(false);\n        this.panelSelectCard.open();\n    }\n    startForge() {\n        // Show Hide Element\n        this.buttonClose.setVisible(false);\n        this.buttonActionForge.setVisible(false);\n        this.buttonCancelForge.setVisible(true);\n        this.manager.resetForgeValues();\n        this.forgeBar.enter();\n        this.forgeBottomContainer.enter();\n        this.mainCircle.enterForge();\n        this.debugContainer.setVisible(true);\n        this.updateDebugText();\n    }\n    updateDebugText() {\n        if (this.debugForgeText) {\n            let text = \"\";\n            text += \"Target: \";\n            text += this.manager.currentImage + \"/\" + this.manager.currentText + \"/\" + this.manager.currentAudio;\n            this.debugForgeText.setText(text);\n        }\n    }\n    clean() {\n        this.events.removeListener(\"open-panel\");\n        this.cameras.resetAll();\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"select\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUM7WUFBVTtZQUFTO1lBQVM7U0FBUztRQWtCOUQsRUFBRTthQUNGb0IsV0FBb0I7SUFlcEI7QUEyS0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvc2NlbmVzL0NhcmRNYWtlci50cz81NmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vRXZlbnRCdXMnO1xuaW1wb3J0IHsgU2NlbmUsIEdhbWVPYmplY3RzLCBHYW1lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBHYW1lTGliIGZyb20gJ0AvbGliL0dhbWVMaWInO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24nO1xuaW1wb3J0IEhhbW1lckJhciBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9IYW1tZXJCYXInO1xuaW1wb3J0IHsgRGVja1JlcG8sIFZvY2FiIH0gZnJvbSAnQC9saWIvcmVwb3MvRGVja1JlcG8nO1xuaW1wb3J0IEJhc2ljQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQmFzaWNCdXR0b24nO1xuaW1wb3J0IEZvcmdlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlQmFyJztcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0NhcmRNYWtlck1hbmFnZXInO1xuaW1wb3J0IFBhbmVsU2VsZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9QYW5lbFNlbGVjdENhcmQvUGFuZWxTZWxlY3RDYXJkJztcbmltcG9ydCBGb3JnZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJ1dHRvbic7XG5pbXBvcnQgRm9yZ2VCb3R0b21Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCb3R0b21Db250YWluZXInO1xuaW1wb3J0IEZvcmdlTWFpbkNpcmNsZSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUnO1xuXG5leHBvcnQgY2xhc3MgQ2FyZE1ha2VyIGV4dGVuZHMgU2NlbmVcbntcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgZm9yZ2VTdGF0ZXM6IHN0cmluZ1tdID0gWydwcmVwYXJlJywnc2VsZWN0JywnZm9yZ2UnLCAncmVzdWx0J11cbiAgICBjdXJyZW50Rm9yZ2VTdGF0ZTogc3RyaW5nXG4gICAgLy8gXG4gICAgLy8gR2FtZU9iamVjdHNcbiAgICBtYWluQ2lyY2xlOiBGb3JnZU1haW5DaXJjbGVcbiAgICBidXR0b25BY3Rpb25Gb3JnZTogRm9yZ2VCdXR0b25cbiAgICBidXR0b25DYW5jZWxGb3JnZTogQmFzaWNCdXR0b25cbiAgICBidXR0b25DbG9zZTogQ2xvc2VCdXR0b25cbiAgICAvLyBQYW5lbCBGb3JnZVxuICAgIGhhbW1lckJhcjogSGFtbWVyQmFyXG4gICAgZm9yZ2VCYXI6IEZvcmdlQmFyXG4gICAgZm9yZ2VCb3R0b21Db250YWluZXI6IEZvcmdlQm90dG9tQ29udGFpbmVyXG4gICAgLy9cbiAgICAvLyBQYW5lbCBTZWxlY3QgQ2FyZHNcbiAgICBwYW5lbFNlbGVjdENhcmQ6IFBhbmVsU2VsZWN0Q2FyZFxuICAgIC8vXG4gICAgZGVidWdDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGRlYnVnRm9yZ2VUZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgLy9cbiAgICBjYW5JbnB1dDogYm9vbGVhbiA9IHRydWVcblxuICAgIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIEhhbW1lckJhci5wcmVsb2FkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1dHRvbkFkZCcsJ2Fzc2V0cy9hZHZlbnR1cmUvY2FyZG1ha2VyL2J1dHRvbkFkZC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQ2FyZEJhc2VCYWNrJywnYXNzZXRzL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlQmFjay5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRDcmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQ3JhY2sucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDYXJkTWFrZXInKTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlICgpXG4gICAge1xuICAgICAgICAvLyBSZXNldCBEYXRhXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG5ldyBDYXJkTWFrZXJNYW5hZ2VyKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGJnID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwgR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiwgR2FtZUxpYi5zY3JlZW5XaWR0aCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQsIDB4ZWVlZWVlKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlID0gbmV3IENsb3NlQnV0dG9uKHRoaXMsMTAwLCAxMDApLnNldFNjYWxlKDAuNSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1haW4gQ2lyY2xlXG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzMqMTtcbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlID0gbmV3IEZvcmdlTWFpbkNpcmNsZSh0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwgc3RhcnRZKTtcblxuICAgICAgICAvLyBTZWxlY3QgQ2FyZFxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZCA9IG5ldyBQYW5lbFNlbGVjdENhcmQodGhpcyx0aGlzLm1hbmFnZXIsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIpO1xuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vbkNhcmRTZWxlY3RlZCA9ICggZGVja0tleTpzdHJpbmcsIHZvY2FiS2V5OnN0cmluZyk9PntcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5zZXRTZWxlY3RlZFZvY2FiKGRlY2tLZXksdm9jYWJLZXkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vblBhbmVsQ2xvc2UgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBBY3Rpb24gQnV0dG9uXG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2UgPSBuZXcgRm9yZ2VCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQqMC43NSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgaWYoIHRoaXMuY3VycmVudEZvcmdlU3RhdGUgPT0gJ3ByZXBhcmUnICl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdmb3JnZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlID0gbmV3IEJhc2ljQnV0dG9uKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aCAtIDIwMCwgMTAwLCdDYW5jZWwnLCdzbScpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdmb3JnZScgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvcmdlU3RhdGUoJ3ByZXBhcmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBGb3JnZSBHYW1lcGxheSBPYmplY3RzXG4gICAgICAgIC8vIHRoaXMuaGFtbWVyQmFyID0gbmV3IEhhbW1lckJhcih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixzdGFydFktMzAwKTtcbiAgICAgICAgLy8gdGhpcy5oYW1tZXJCYXIucmVuZGVySGFtbWVyKHRoaXMuY3VycmVudEhhbW1lciwgdGhpcy5tYXhIYW1tZXIpO1xuXG4gICAgICAgIHRoaXMuZm9yZ2VCYXIgPSBuZXcgRm9yZ2VCYXIodGhpcyxHYW1lTGliLm1pZFgsMzIwKTtcbiAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lciA9IG5ldyBGb3JnZUJvdHRvbUNvbnRhaW5lcih0aGlzLEdhbWVMaWIubWlkWCxHYW1lTGliLnF1YXRlcjNZKTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5vbignb3Blbi1wYW5lbCcsKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnc2VsZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudHMub24oJ2ZvcmdlLWFuc3dlcmVkJywoKT0+e1xuICAgICAgICAgICAgaWYoIHRoaXMuY3VycmVudEZvcmdlU3RhdGUgPT0gJ2ZvcmdlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVidWdUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lci5nZW5lcmF0ZU5leHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmdlQmFyLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gUnVuIGluaXQgc2V0dXBcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJEZWJ1ZygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRGb3JnZVN0YXRlKCdwcmVwYXJlJyk7XG5cbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnY3VycmVudC1zY2VuZS1yZWFkeScsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVTZWxlY3RlZENhcmQoKXtcbiAgICAgICAgbGV0IGNhbkZvcmdlOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBpZiggdGhpcy5tYW5hZ2VyLnNlbGVjdGVkRGVja0tleSAmJiB0aGlzLm1hbmFnZXIuc2VsZWN0ZWRWb2NhYktleSApe1xuICAgICAgICAgICAgY29uc3Qgdm9jYWI6Vm9jYWIgfCB1bmRlZmluZWQgPSBEZWNrUmVwby5nZXRWb2NhYih0aGlzLm1hbmFnZXIuc2VsZWN0ZWREZWNrS2V5LHRoaXMubWFuYWdlci5zZWxlY3RlZFZvY2FiS2V5KTtcbiAgICAgICAgICAgIGlmKCB2b2NhYiAhPSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgICAgICBjYW5Gb3JnZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUucmVuZGVyU2VsZWN0ZWRDYXJkKHZvY2FiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhY2FuRm9yZ2UgKXtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUuY2xlYXJTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckRlYnVnKCl7XG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5taWRYLDIwMCk7XG4gICAgICAgIHRoaXMuZGVidWdGb3JnZVRleHQgPSB0aGlzLmFkZC50ZXh0KDAsMCwnRm9yZ2UgVGV4dCcse2ZvbnRTaXplOic0MHB4Jyxjb2xvcjonYmxhY2snfSkuc2V0T3JpZ2luKDAuNSwwLjUpO1xuXG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdGb3JnZVRleHQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldEZvcmdlU3RhdGUoIGZvcmdlU3RhdGU6c3RyaW5nICl7XG4gICAgICAgIGlmKCAhdGhpcy5mb3JnZVN0YXRlcy5pbmNsdWRlcyhmb3JnZVN0YXRlKSApIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID0gZm9yZ2VTdGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKGZvcmdlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXBhcmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVwYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Rm9yZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQcmVwYXJlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlci5yZXNldEZvcmdlVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZXhpdCgpO1xuICAgICAgICB0aGlzLmZvcmdlQm90dG9tQ29udGFpbmVyLmV4aXQoKTtcbiAgICAgICAgdGhpcy5tYWluQ2lyY2xlLmV4aXRGb3JnZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0U2VsZWN0KCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub3BlbigpO1xuICAgIH1cblxuICAgIHN0YXJ0Rm9yZ2UoKXtcbiAgICAgICAgLy8gU2hvdyBIaWRlIEVsZW1lbnRcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlci5yZXNldEZvcmdlVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuZm9yZ2VCYXIuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5mb3JnZUJvdHRvbUNvbnRhaW5lci5lbnRlcigpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuZW50ZXJGb3JnZSgpO1xuXG4gICAgICAgIHRoaXMuZGVidWdDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZWJ1Z1RleHQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWJ1Z1RleHQoKXtcbiAgICAgICAgaWYoIHRoaXMuZGVidWdGb3JnZVRleHQgKXtcbiAgICAgICAgICAgIGxldCB0ZXh0OnN0cmluZyA9ICcnO1xuICAgICAgICAgICAgdGV4dCArPSAnVGFyZ2V0OiAnO1xuICAgICAgICAgICAgdGV4dCArPSB0aGlzLm1hbmFnZXIuY3VycmVudEltYWdlICsgJy8nICsgdGhpcy5tYW5hZ2VyLmN1cnJlbnRUZXh0ICsgJy8nICsgdGhpcy5tYW5hZ2VyLmN1cnJlbnRBdWRpbztcbiAgICAgICAgICAgIHRoaXMuZGVidWdGb3JnZVRleHQuc2V0VGV4dCh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuKCl7XG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdvcGVuLXBhbmVsJyk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLnJlc2V0QWxsKClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJDbG9zZUJ1dHRvbiIsIkhhbW1lckJhciIsIkRlY2tSZXBvIiwiQmFzaWNCdXR0b24iLCJGb3JnZUJhciIsIkNhcmRNYWtlck1hbmFnZXIiLCJQYW5lbFNlbGVjdENhcmQiLCJGb3JnZUJ1dHRvbiIsIkZvcmdlQm90dG9tQ29udGFpbmVyIiwiRm9yZ2VNYWluQ2lyY2xlIiwiQ2FyZE1ha2VyIiwicHJlbG9hZCIsImxvYWQiLCJpbWFnZSIsImNyZWF0ZSIsIm1hbmFnZXIiLCJiZyIsImFkZCIsInJlY3RhbmdsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnV0dG9uQ2xvc2UiLCJzZXRTY2FsZSIsIm9uUHJlc3NlZENhbGxiYWNrIiwic2NlbmUiLCJzdGFydCIsInN0YXJ0WSIsIm1haW5DaXJjbGUiLCJwYW5lbFNlbGVjdENhcmQiLCJvbkNhcmRTZWxlY3RlZCIsImRlY2tLZXkiLCJ2b2NhYktleSIsInNldFNlbGVjdGVkVm9jYWIiLCJ1cGRhdGVTZWxlY3RlZENhcmQiLCJvblBhbmVsQ2xvc2UiLCJzZXRGb3JnZVN0YXRlIiwiYnV0dG9uQWN0aW9uRm9yZ2UiLCJjdXJyZW50Rm9yZ2VTdGF0ZSIsImJ1dHRvbkNhbmNlbEZvcmdlIiwiZm9yZ2VCYXIiLCJtaWRYIiwiZm9yZ2VCb3R0b21Db250YWluZXIiLCJxdWF0ZXIzWSIsImV2ZW50cyIsIm9uIiwidXBkYXRlRGVidWdUZXh0IiwiZ2VuZXJhdGVOZXh0IiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJyZW5kZXJEZWJ1ZyIsImVtaXQiLCJjYW5Gb3JnZSIsInNlbGVjdGVkRGVja0tleSIsInNlbGVjdGVkVm9jYWJLZXkiLCJ2b2NhYiIsImdldFZvY2FiIiwidW5kZWZpbmVkIiwic2V0RGlzYWJsZWQiLCJyZW5kZXJTZWxlY3RlZENhcmQiLCJjbGVhclNlbGVjdGVkQ2FyZCIsImRlYnVnQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZGVidWdGb3JnZVRleHQiLCJ0ZXh0IiwiZm9udFNpemUiLCJjb2xvciIsInNldE9yaWdpbiIsInNldFZpc2libGUiLCJmb3JnZVN0YXRlIiwiZm9yZ2VTdGF0ZXMiLCJpbmNsdWRlcyIsInN0YXJ0UHJlcGFyZSIsInN0YXJ0U2VsZWN0Iiwic3RhcnRGb3JnZSIsInJlc2V0Rm9yZ2VWYWx1ZXMiLCJleGl0IiwiZXhpdEZvcmdlIiwib3BlbiIsImVudGVyIiwiZW50ZXJGb3JnZSIsImN1cnJlbnRJbWFnZSIsImN1cnJlbnRUZXh0IiwiY3VycmVudEF1ZGlvIiwic2V0VGV4dCIsImNsZWFuIiwicmVtb3ZlTGlzdGVuZXIiLCJjYW1lcmFzIiwicmVzZXRBbGwiLCJjb25zdHJ1Y3RvciIsImNhbklucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});