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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardMaker: function() { return /* binding */ CardMaker; }\n/* harmony export */ });\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventBus */ \"./src/game/EventBus.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HammerBar */ \"./src/game/components/HammerBar.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n/* harmony import */ var _components_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PanelSelectCard/PanelSelectCard */ \"./src/game/components/PanelSelectCard/PanelSelectCard.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _components_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PanelSelectCard/VocabCard */ \"./src/game/components/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_ForgeBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ForgeBar */ \"./src/game/components/ForgeBar.ts\");\n/* harmony import */ var _components_CardMakerManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardMakerManager */ \"./src/game/components/CardMakerManager.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass CardMaker extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    preload() {\n        _components_HammerBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //\n        this.load.image(\"buttonAdd\", \"assets/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"vocabCardBase\", \"assets/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"assets/adventure/decks/vocabCardBaseBack.png\");\n    }\n    create() {\n        // Reset Data\n        this.statusResult = \"forging\";\n        this.selectedDeckKey = \"\";\n        this.selectedVocabKey = \"\";\n        this.cardMakerManager = new _components_CardMakerManager__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this);\n        const bg = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight, 0xeeeeee);\n        const backButton = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth - 100, 100).setScale(0.5);\n        backButton.onPressedCallback = ()=>{\n            this.scene.start(\"MainMenu\");\n        };\n        // Main Circle\n        const startY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 3 * 1;\n        this.mainCircle = this.add.circle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, startY, 250, 0xffffff);\n        this.mainCircle.setStrokeStyle(10, 0x000000);\n        this.noCardDisplay = this.add.text(this.mainCircle.x, this.mainCircle.y, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        // Select Card\n        this.panelSelectCard = new _components_PanelSelectCard_PanelSelectCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, this.cardMakerManager, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2);\n        this.panelSelectCard.onPanelOpen = ()=>{\n            this.canInput = false;\n        };\n        this.panelSelectCard.onPanelClose = ()=>{\n            this.canInput = true;\n        };\n        this.panelSelectCard.onCardSelected = (deckKey, vocabKey)=>{\n            this.selectedDeckKey = deckKey;\n            this.selectedVocabKey = vocabKey;\n            this.renderSelectedCard();\n        };\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, this.mainCircle.x + this.mainCircle.radius, this.mainCircle.y, \"buttonAdd\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                if (!this.canInput) return;\n                this.panelSelectCard.open();\n            }\n        };\n        // this.hammerBar = new HammerBar(this,GameLib.screenWidth/2,startY-300);\n        // this.hammerBar.renderHammer(this.currentHammer, this.maxHammer);\n        this.forgeBar = new _components_ForgeBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, 320);\n        this.buttonStartForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2 + 100, \"Forge\", \"md\");\n        this.buttonStartForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"forge\");\n        };\n        this.buttonCancelForge = new _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight / 2, \"Cancel\", \"md\");\n        this.buttonCancelForge.onPressedCallback = ()=>{\n            if (!this.canInput) return;\n            this.setForgeState(\"prepare\");\n        };\n        this.renderSelectedCard();\n        this.renderButtonForge();\n        this.setForgeState(\"prepare\");\n        _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    renderSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        let canForge = false;\n        this.noCardDisplay.setVisible(true);\n        if (this.selectedDeckKey && this.selectedVocabKey) {\n            const vocab = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_7__.DeckRepo.getVocab(this.selectedDeckKey, this.selectedVocabKey);\n            if (vocab != undefined) {\n                //\n                this.noCardDisplay.setVisible(false);\n                this.selectedVocab = new _components_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, this.mainCircle.x, this.mainCircle.y, 250, _components_PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"].calculateHeight(250), vocab);\n                canForge = true;\n            }\n        }\n        if (canForge) {\n            this.buttonStartForge.setDisabled(false);\n        } else {\n            this.buttonStartForge.setDisabled(true);\n        }\n    }\n    renderButtonForge() {\n        this.buttonActionForge = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_2__[\"default\"].screenHeight * 0.75);\n        let spriteBase = this.add.sprite(0, 0, \"buttonCircleAction\");\n        let spriteHammer = this.add.sprite(0, 0, \"hammer\").setRotation(Phaser.Math.DegToRad(45));\n        this.buttonActionForge.add(spriteBase);\n        this.buttonActionForge.add(spriteHammer);\n        this.buttonActionForge.setInteractive();\n        this.buttonActionForge.on(\"pointerdown\", this.onDown, this);\n        this.buttonActionForge.on(\"pointerup\", this.onUp, this);\n        this.buttonActionForge.on(\"pointerover\", this.onHover, this);\n        this.buttonActionForge.on(\"pointerout\", this.onOut, this);\n    }\n    // renderDebug(){\n    //     this.debugContainer = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/4*3);\n    //     this.debugButtonSuccess = new DebugButton( this, -GameLib.screenWidth/4, 0, 'Success');\n    //     this.debugButtonSuccess.onPressedCallback = ()=>{\n    //         this.forgeSuccess();\n    //     }\n    //     this.debugButtonFailed = new DebugButton( this, GameLib.screenWidth/4, 0, 'Failed');\n    //     this.debugButtonFailed.onPressedCallback = ()=>{\n    //         this.forgeFailed();\n    //     }\n    //     this.debugForgeText = this.add.text(0,300,'Forge Text',{fontSize:'40px',color:'black'}).setOrigin(0.5,0.5);\n    //     this.debugContainer.add(this.debugButtonSuccess);\n    //     this.debugContainer.add(this.debugButtonFailed);\n    //     this.debugContainer.add(this.debugForgeText);\n    //     this.debugContainer.setVisible(false);\n    // }\n    setForgeState(forgeState) {\n        if (!this.forgeStates.includes(forgeState)) return;\n        this.currentForgeState = forgeState;\n        switch(forgeState){\n            case \"prepare\":\n                this.startPrepare();\n                break;\n            case \"forge\":\n                break;\n            case \"result\":\n                break;\n            default:\n                break;\n        }\n    }\n    startPrepare() {\n        this.buttonSelectCard.setVisible(true);\n        this.buttonStartForge.setVisible(true);\n        this.buttonCancelForge.setVisible(false);\n    // this.hammerBar.container.setVisible(false);\n    // this.debugContainer.setVisible(false);\n    }\n    constructor(){\n        super(\"CardMaker\");\n        this.forgeStates = [\n            \"prepare\",\n            \"forge\",\n            \"result\"\n        ];\n        //\n        this.canInput = true;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1c7QUFDZDtBQUNtQjtBQUNQO0FBQ1M7QUFDbUI7QUFDckI7QUFDUztBQUVUO0FBQ1Q7QUFDZ0I7QUFFdkQsTUFBTVksa0JBQWtCWCx5Q0FBS0E7SUErQmhDWSxVQUNBO1FBQ0lULHFFQUFpQixDQUFDLElBQUk7UUFDdEIsRUFBRTtRQUNGLElBQUksQ0FBQ1UsSUFBSSxDQUFDQyxLQUFLLENBQUMsYUFBWTtRQUM1QixJQUFJLENBQUNELElBQUksQ0FBQ0MsS0FBSyxDQUFDLGlCQUFnQjtRQUNoQyxJQUFJLENBQUNELElBQUksQ0FBQ0MsS0FBSyxDQUFDLHFCQUFvQjtJQUN4QztJQU9BQyxTQUNBO1FBQ0ksYUFBYTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHO1FBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUc7UUFFeEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJVCxxRUFBZ0JBLENBQUMsSUFBSTtRQUVqRCxNQUFNVSxLQUFLLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUNyQixnRUFBbUIsR0FBQyxHQUFHQSxpRUFBb0IsR0FBQyxHQUFHQSxnRUFBbUIsRUFBRUEsaUVBQW9CLEVBQUU7UUFFeEgsTUFBTXdCLGFBQWEsSUFBSXZCLG1FQUFXQSxDQUFDLElBQUksRUFBQ0QsZ0VBQW1CLEdBQUcsS0FBSyxLQUFLeUIsUUFBUSxDQUFDO1FBQ2pGRCxXQUFXRSxpQkFBaUIsR0FBRztZQUMzQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1FBQ3JCO1FBRUEsY0FBYztRQUNkLE1BQU1DLFNBQVM3QixpRUFBb0IsR0FBQyxJQUFFO1FBQ3RDLElBQUksQ0FBQzhCLFVBQVUsR0FBRyxJQUFJLENBQUNWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDL0IsZ0VBQW1CLEdBQUMsR0FBRzZCLFFBQVEsS0FBSztRQUN0RSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0UsY0FBYyxDQUFDLElBQUk7UUFFbkMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxDQUFDYixHQUFHLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssQ0FBQyxFQUFDLElBQUksQ0FBQ0wsVUFBVSxDQUFDTSxDQUFDLEVBQUMsS0FBSTtZQUN2RUMsVUFBVTtZQUNWQyxZQUFZO1lBQ1pDLE9BQU87UUFDWCxHQUFHQyxTQUFTLENBQUMsS0FBSSxLQUFLQyxVQUFVLENBQUM7UUFFakMsY0FBYztRQUNkLElBQUksQ0FBQ0MsZUFBZSxHQUFHLElBQUl0QyxtRkFBZUEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDYyxnQkFBZ0IsRUFBQ2xCLGdFQUFtQixHQUFDLEdBQUVBLGlFQUFvQixHQUFDO1FBQ2pILElBQUksQ0FBQzBDLGVBQWUsQ0FBQ0MsV0FBVyxHQUFHO1lBQy9CLElBQUksQ0FBQ0MsUUFBUSxHQUFHO1FBQ3BCO1FBQ0EsSUFBSSxDQUFDRixlQUFlLENBQUNHLFlBQVksR0FBRztZQUNoQyxJQUFJLENBQUNELFFBQVEsR0FBRztRQUNwQjtRQUNBLElBQUksQ0FBQ0YsZUFBZSxDQUFDSSxjQUFjLEdBQUcsQ0FBRUMsU0FBZ0JDO1lBQ3BELElBQUksQ0FBQ2hDLGVBQWUsR0FBRytCO1lBQ3ZCLElBQUksQ0FBQzlCLGdCQUFnQixHQUFHK0I7WUFFeEIsSUFBSSxDQUFDQyxrQkFBa0I7UUFDM0I7UUFFQSxJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUkvQyxvRUFBWUEsQ0FDcEMsSUFBSSxFQUNKLElBQUksQ0FBQzJCLFVBQVUsQ0FBQ0ssQ0FBQyxHQUFHLElBQUksQ0FBQ0wsVUFBVSxDQUFDcUIsTUFBTSxFQUMxQyxJQUFJLENBQUNyQixVQUFVLENBQUNNLENBQUMsRUFDakI7UUFFSixJQUFJLENBQUNjLGdCQUFnQixDQUFDeEIsaUJBQWlCLEdBQUc7WUFDdEMsSUFBSSxJQUFJLENBQUMwQixpQkFBaUIsSUFBSSxXQUFXO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDUixRQUFRLEVBQUc7Z0JBRXJCLElBQUksQ0FBQ0YsZUFBZSxDQUFDVyxJQUFJO1lBQzdCO1FBQ0o7UUFFQSx5RUFBeUU7UUFDekUsbUVBQW1FO1FBRW5FLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk5Qyw2REFBUUEsQ0FBQyxJQUFJLEVBQUNSLGdFQUFtQixHQUFDLEdBQUU7UUFFeEQsSUFBSSxDQUFDdUQsZ0JBQWdCLEdBQUcsSUFBSWhELG1FQUFXQSxDQUFDLElBQUksRUFBQ1AsZ0VBQW1CLEdBQUMsR0FBRUEsaUVBQW9CLEdBQUMsSUFBRSxLQUFJLFNBQVE7UUFDdEcsSUFBSSxDQUFDdUQsZ0JBQWdCLENBQUM3QixpQkFBaUIsR0FBRztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDa0IsUUFBUSxFQUFHO1lBRXJCLElBQUksQ0FBQ1ksYUFBYSxDQUFDO1FBQ3ZCO1FBRUEsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJbEQsbUVBQVdBLENBQUMsSUFBSSxFQUFDUCxnRUFBbUIsR0FBQyxHQUFFQSxpRUFBb0IsR0FBQyxHQUFFLFVBQVM7UUFDcEcsSUFBSSxDQUFDeUQsaUJBQWlCLENBQUMvQixpQkFBaUIsR0FBRztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDa0IsUUFBUSxFQUFHO1lBRXJCLElBQUksQ0FBQ1ksYUFBYSxDQUFDO1FBQ3ZCO1FBRUEsSUFBSSxDQUFDUCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDUyxpQkFBaUI7UUFFdEIsSUFBSSxDQUFDRixhQUFhLENBQUM7UUFFbkIxRCwrQ0FBUUEsQ0FBQzZELElBQUksQ0FBQyx1QkFBdUIsSUFBSTtJQUM3QztJQUVBVixxQkFBb0I7UUFDaEIsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDVyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDQSxhQUFhLENBQUNDLEtBQUs7WUFDeEIsSUFBSSxDQUFDRCxhQUFhLEdBQUc7UUFDekI7UUFFQSxJQUFJRSxXQUFtQjtRQUN2QixJQUFJLENBQUM3QixhQUFhLENBQUNRLFVBQVUsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQ3pCLGVBQWUsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixFQUFFO1lBQy9DLE1BQU04QyxRQUEwQjFELHlEQUFRQSxDQUFDMkQsUUFBUSxDQUFDLElBQUksQ0FBQ2hELGVBQWUsRUFBQyxJQUFJLENBQUNDLGdCQUFnQjtZQUM1RixJQUFJOEMsU0FBU0UsV0FBVztnQkFDcEIsRUFBRTtnQkFDRixJQUFJLENBQUNoQyxhQUFhLENBQUNRLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDbUIsYUFBYSxHQUFHLElBQUl0RCw2RUFBU0EsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDd0IsVUFBVSxDQUFDSyxDQUFDLEVBQUMsSUFBSSxDQUFDTCxVQUFVLENBQUNNLENBQUMsRUFBQyxLQUFJOUIsNkZBQXlCLENBQUMsTUFBS3lEO2dCQUUvR0QsV0FBVztZQUNmO1FBQ0o7UUFFQSxJQUFJQSxVQUFVO1lBQ1YsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQ1ksV0FBVyxDQUFDO1FBQ3RDLE9BQUs7WUFDRCxJQUFJLENBQUNaLGdCQUFnQixDQUFDWSxXQUFXLENBQUM7UUFDdEM7SUFDSjtJQUVBVCxvQkFBbUI7UUFFZixJQUFJLENBQUNVLGlCQUFpQixHQUFHLElBQUksQ0FBQ2hELEdBQUcsQ0FBQ2lELFNBQVMsQ0FBQ3JFLGdFQUFtQixHQUFDLEdBQUVBLGlFQUFvQixHQUFDO1FBRXZGLElBQUlzRSxhQUFpQyxJQUFJLENBQUNsRCxHQUFHLENBQUNtRCxNQUFNLENBQUMsR0FBRSxHQUFFO1FBQ3pELElBQUlDLGVBQW1DLElBQUksQ0FBQ3BELEdBQUcsQ0FBQ21ELE1BQU0sQ0FBQyxHQUFFLEdBQUUsVUFBVUUsV0FBVyxDQUFDQyxPQUFPQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUV0RyxJQUFJLENBQUNSLGlCQUFpQixDQUFDaEQsR0FBRyxDQUFDa0Q7UUFDM0IsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ2hELEdBQUcsQ0FBQ29EO1FBRTNCLElBQUksQ0FBQ0osaUJBQWlCLENBQUNTLGNBQWM7UUFDckMsSUFBSSxDQUFDVCxpQkFBaUIsQ0FBQ1UsRUFBRSxDQUFDLGVBQWMsSUFBSSxDQUFDQyxNQUFNLEVBQUMsSUFBSTtRQUN4RCxJQUFJLENBQUNYLGlCQUFpQixDQUFDVSxFQUFFLENBQUMsYUFBWSxJQUFJLENBQUNFLElBQUksRUFBQyxJQUFJO1FBQ3BELElBQUksQ0FBQ1osaUJBQWlCLENBQUNVLEVBQUUsQ0FBQyxlQUFjLElBQUksQ0FBQ0csT0FBTyxFQUFDLElBQUk7UUFDekQsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ1UsRUFBRSxDQUFDLGNBQWEsSUFBSSxDQUFDSSxLQUFLLEVBQUMsSUFBSTtJQUMxRDtJQUVBLGlCQUFpQjtJQUNqQixnR0FBZ0c7SUFDaEcsOEZBQThGO0lBQzlGLHdEQUF3RDtJQUN4RCwrQkFBK0I7SUFDL0IsUUFBUTtJQUVSLDJGQUEyRjtJQUMzRix1REFBdUQ7SUFDdkQsOEJBQThCO0lBQzlCLFFBQVE7SUFFUixrSEFBa0g7SUFFbEgsd0RBQXdEO0lBQ3hELHVEQUF1RDtJQUN2RCxvREFBb0Q7SUFDcEQsNkNBQTZDO0lBQzdDLElBQUk7SUFFSjFCLGNBQWUyQixVQUFpQixFQUFFO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDRixhQUFjO1FBRTdDLElBQUksQ0FBQy9CLGlCQUFpQixHQUFHK0I7UUFFekIsT0FBUUE7WUFDSixLQUFLO2dCQUNELElBQUksQ0FBQ0csWUFBWTtnQkFDakI7WUFDSixLQUFLO2dCQUVEO1lBQ0osS0FBSztnQkFFRDtZQUNKO2dCQUNJO1FBQ1I7SUFDSjtJQUVBQSxlQUFjO1FBQ1YsSUFBSSxDQUFDcEMsZ0JBQWdCLENBQUNULFVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUNjLGdCQUFnQixDQUFDZCxVQUFVLENBQUM7UUFFakMsSUFBSSxDQUFDZ0IsaUJBQWlCLENBQUNoQixVQUFVLENBQUM7SUFDbEMsOENBQThDO0lBRTlDLHlDQUF5QztJQUM3QztJQXJMQThDLGFBQ0E7UUFDSSxLQUFLLENBQUM7YUF2Q1ZILGNBQXdCO1lBQUM7WUFBVTtZQUFTO1NBQVM7UUF5QnJELEVBQUU7YUFDRnhDLFdBQW9CO0lBY3BCO0FBeVBKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL3NjZW5lcy9DYXJkTWFrZXIudHM/NTZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCB7IFNjZW5lLCBHYW1lT2JqZWN0cywgR2FtZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBIYW1tZXJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9IYW1tZXJCYXInO1xuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvbic7XG5pbXBvcnQgUGFuZWxTZWxlY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWxTZWxlY3RDYXJkL1BhbmVsU2VsZWN0Q2FyZCc7XG5pbXBvcnQgeyBEZWNrUmVwbywgVm9jYWIgfSBmcm9tICdAL2xpYi9yZXBvcy9EZWNrUmVwbyc7XG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWxTZWxlY3RDYXJkL1ZvY2FiQ2FyZCc7XG5pbXBvcnQgRGVidWdCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9EZWJ1Z0J1dHRvbic7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9CYXNpY0J1dHRvbic7XG5pbXBvcnQgRm9yZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JnZUJhcic7XG5pbXBvcnQgQ2FyZE1ha2VyTWFuYWdlciBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNYWtlck1hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgQ2FyZE1ha2VyIGV4dGVuZHMgU2NlbmVcbntcbiAgICBjYXJkTWFrZXJNYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgZm9yZ2VTdGF0ZXM6IHN0cmluZ1tdID0gWydwcmVwYXJlJywnZm9yZ2UnLCAncmVzdWx0J11cbiAgICBjdXJyZW50Rm9yZ2VTdGF0ZTogc3RyaW5nXG4gICAgc3RhdHVzUmVzdWx0OiBzdHJpbmdcbiAgICAvLyBTZWxlY3RlZCBWb2NhYlxuICAgIHNlbGVjdGVkRGVja0tleTogc3RyaW5nXG4gICAgc2VsZWN0ZWRWb2NhYktleTogc3RyaW5nXG4gICAgLy8gXG4gICAgLy8gR2FtZU9iamVjdHNcbiAgICBtYWluQ2lyY2xlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICBub0NhcmREaXNwbGF5OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgc2VsZWN0ZWRWb2NhYjogVm9jYWJDYXJkIHwgbnVsbFxuICAgIGhhbW1lckJhcjogSGFtbWVyQmFyXG4gICAgZm9yZ2VCYXI6IEZvcmdlQmFyXG4gICAgYnV0dG9uU2VsZWN0Q2FyZDogU3ByaXRlQnV0dG9uXG4gICAgYnV0dG9uU3RhcnRGb3JnZTogQmFzaWNCdXR0b25cbiAgICBidXR0b25DYW5jZWxGb3JnZTogQmFzaWNCdXR0b25cbiAgICAvL1xuICAgIGJ1dHRvbkFjdGlvbkZvcmdlOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvLyBQYW5lbCBTZWxlY3QgQ2FyZHNcbiAgICBwYW5lbFNlbGVjdENhcmQ6IFBhbmVsU2VsZWN0Q2FyZFxuICAgIC8vXG4gICAgZGVidWdDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGRlYnVnQnV0dG9uU3VjY2VzczogRGVidWdCdXR0b25cbiAgICBkZWJ1Z0J1dHRvbkZhaWxlZDogRGVidWdCdXR0b25cbiAgICBkZWJ1Z0ZvcmdlVGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG4gICAgY2FuSW5wdXQ6IGJvb2xlYW4gPSB0cnVlXG5cbiAgICBwcmVsb2FkICgpXG4gICAge1xuICAgICAgICBIYW1tZXJCYXIucHJlbG9hZCh0aGlzKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidXR0b25BZGQnLCdhc3NldHMvYWR2ZW50dXJlL2NhcmRtYWtlci9idXR0b25BZGQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJDYXJkQmFzZScsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlQmFjaycsJ2Fzc2V0cy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkQmFzZUJhY2sucG5nJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdDYXJkTWFrZXInKTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlICgpXG4gICAge1xuICAgICAgICAvLyBSZXNldCBEYXRhXG4gICAgICAgIHRoaXMuc3RhdHVzUmVzdWx0ID0gXCJmb3JnaW5nXCI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gXCJcIjtcblxuICAgICAgICB0aGlzLmNhcmRNYWtlck1hbmFnZXIgPSBuZXcgQ2FyZE1ha2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBiZyA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsIEdhbWVMaWIuc2NyZWVuV2lkdGgsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LCAweGVlZWVlZSk7XG5cbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGggLSAxMDAsIDEwMCkuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgYmFja0J1dHRvbi5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFpbiBDaXJjbGVcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gR2FtZUxpYi5zY3JlZW5IZWlnaHQvMyoxO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUgPSB0aGlzLmFkZC5jaXJjbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLCBzdGFydFksIDI1MCwgMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLm1haW5DaXJjbGUuc2V0U3Ryb2tlU3R5bGUoMTAsIDB4MDAwMDAwKTtcblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkgPSB0aGlzLmFkZC50ZXh0KHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LCc/Jyx7XG4gICAgICAgICAgICBmb250U2l6ZTogJzMwMHB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNjMGMwYzAnLFxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LDAuNSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgLy8gU2VsZWN0IENhcmRcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQgPSBuZXcgUGFuZWxTZWxlY3RDYXJkKHRoaXMsdGhpcy5jYXJkTWFrZXJNYW5hZ2VyLEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdENhcmQub25QYW5lbE9wZW4gPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5jYW5JbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9uUGFuZWxDbG9zZSA9ICgpPT57XG4gICAgICAgICAgICB0aGlzLmNhbklucHV0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vbkNhcmRTZWxlY3RlZCA9ICggZGVja0tleTpzdHJpbmcsIHZvY2FiS2V5OnN0cmluZyk9PntcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gZGVja0tleTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYktleSA9IHZvY2FiS2V5O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQ2FyZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkID0gbmV3IFNwcml0ZUJ1dHRvbiggXG4gICAgICAgICAgICB0aGlzLCBcbiAgICAgICAgICAgIHRoaXMubWFpbkNpcmNsZS54ICsgdGhpcy5tYWluQ2lyY2xlLnJhZGl1cywgXG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUueSwgXG4gICAgICAgICAgICAnYnV0dG9uQWRkJyBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID09ICdwcmVwYXJlJyApe1xuICAgICAgICAgICAgICAgIGlmKCAhdGhpcy5jYW5JbnB1dCApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTZWxlY3RDYXJkLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5oYW1tZXJCYXIgPSBuZXcgSGFtbWVyQmFyKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLHN0YXJ0WS0zMDApO1xuICAgICAgICAvLyB0aGlzLmhhbW1lckJhci5yZW5kZXJIYW1tZXIodGhpcy5jdXJyZW50SGFtbWVyLCB0aGlzLm1heEhhbW1lcik7XG5cbiAgICAgICAgdGhpcy5mb3JnZUJhciA9IG5ldyBGb3JnZUJhcih0aGlzLEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwzMjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5idXR0b25TdGFydEZvcmdlID0gbmV3IEJhc2ljQnV0dG9uKHRoaXMsR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIrMTAwLCdGb3JnZScsJ21kJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uU3RhcnRGb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgnZm9yZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uQ2FuY2VsRm9yZ2UgPSBuZXcgQmFzaWNCdXR0b24odGhpcyxHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiwnQ2FuY2VsJywnbWQnKTtcbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RlZENhcmQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25Gb3JnZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9yZ2VTdGF0ZSgncHJlcGFyZScpO1xuXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2N1cnJlbnQtc2NlbmUtcmVhZHknLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbkZvcmdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZERlY2tLZXkgJiYgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ICl7XG4gICAgICAgICAgICBjb25zdCB2b2NhYjpWb2NhYiB8IHVuZGVmaW5lZCA9IERlY2tSZXBvLmdldFZvY2FiKHRoaXMuc2VsZWN0ZWREZWNrS2V5LHRoaXMuc2VsZWN0ZWRWb2NhYktleSk7XG4gICAgICAgICAgICBpZiggdm9jYWIgIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbmV3IFZvY2FiQ2FyZCh0aGlzLHRoaXMubWFpbkNpcmNsZS54LHRoaXMubWFpbkNpcmNsZS55LDI1MCxWb2NhYkNhcmQuY2FsY3VsYXRlSGVpZ2h0KDI1MCksdm9jYWIpO1xuXG4gICAgICAgICAgICAgICAgY2FuRm9yZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGNhbkZvcmdlICl7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblN0YXJ0Rm9yZ2Uuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU3RhcnRGb3JnZS5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckJ1dHRvbkZvcmdlKCl7XG5cbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZSA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQqMC43NSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc3ByaXRlQmFzZTogR2FtZU9iamVjdHMuU3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKDAsMCwnYnV0dG9uQ2lyY2xlQWN0aW9uJyk7XG4gICAgICAgIGxldCBzcHJpdGVIYW1tZXI6IEdhbWVPYmplY3RzLlNwcml0ZSA9IHRoaXMuYWRkLnNwcml0ZSgwLDAsJ2hhbW1lcicpLnNldFJvdGF0aW9uKFBoYXNlci5NYXRoLkRlZ1RvUmFkKDQ1KSk7XG5cbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5hZGQoc3ByaXRlQmFzZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2UuYWRkKHNwcml0ZUhhbW1lcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJ1dHRvbkFjdGlvbkZvcmdlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uub24oJ3BvaW50ZXJkb3duJyx0aGlzLm9uRG93bix0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25BY3Rpb25Gb3JnZS5vbigncG9pbnRlcnVwJyx0aGlzLm9uVXAsdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uub24oJ3BvaW50ZXJvdmVyJyx0aGlzLm9uSG92ZXIsdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWN0aW9uRm9yZ2Uub24oJ3BvaW50ZXJvdXQnLHRoaXMub25PdXQsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyRGVidWcoKXtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvNCozKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0J1dHRvblN1Y2Nlc3MgPSBuZXcgRGVidWdCdXR0b24oIHRoaXMsIC1HYW1lTGliLnNjcmVlbldpZHRoLzQsIDAsICdTdWNjZXNzJyk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdCdXR0b25TdWNjZXNzLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yZ2VTdWNjZXNzKCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLmRlYnVnQnV0dG9uRmFpbGVkID0gbmV3IERlYnVnQnV0dG9uKCB0aGlzLCBHYW1lTGliLnNjcmVlbldpZHRoLzQsIDAsICdGYWlsZWQnKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0J1dHRvbkZhaWxlZC5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgLy8gICAgICAgICB0aGlzLmZvcmdlRmFpbGVkKCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLmRlYnVnRm9yZ2VUZXh0ID0gdGhpcy5hZGQudGV4dCgwLDMwMCwnRm9yZ2UgVGV4dCcse2ZvbnRTaXplOic0MHB4Jyxjb2xvcjonYmxhY2snfSkuc2V0T3JpZ2luKDAuNSwwLjUpO1xuXG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdCdXR0b25TdWNjZXNzKTtcbiAgICAvLyAgICAgdGhpcy5kZWJ1Z0NvbnRhaW5lci5hZGQodGhpcy5kZWJ1Z0J1dHRvbkZhaWxlZCk7XG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuYWRkKHRoaXMuZGVidWdGb3JnZVRleHQpO1xuICAgIC8vICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIC8vIH1cblxuICAgIHNldEZvcmdlU3RhdGUoIGZvcmdlU3RhdGU6c3RyaW5nICl7XG4gICAgICAgIGlmKCAhdGhpcy5mb3JnZVN0YXRlcy5pbmNsdWRlcyhmb3JnZVN0YXRlKSApIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JnZVN0YXRlID0gZm9yZ2VTdGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKGZvcmdlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByZXBhcmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcmVwYXJlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb3JnZSc6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGFydEZvcmdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UHJlcGFyZSgpe1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b25TdGFydEZvcmdlLnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5idXR0b25DYW5jZWxGb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5oYW1tZXJCYXIuY29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIC8vIHRoaXMuZGVidWdDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gc3RhcnRGb3JnZSgpe1xuICAgIC8vICAgICAvLyBSZXNldCBGb3JnZSBWYWx1ZVxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRIYW1tZXIgPSB0aGlzLm1heEhhbW1lcjtcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAwO1xuICAgIC8vICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gMDtcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50QXVkaW8gPSAwO1xuICAgIC8vICAgICB0aGlzLnN0YXR1c1Jlc3VsdCA9ICdmb3JnaW5nJztcblxuICAgIC8vICAgICAvLyBTaG93IEhpZGUgRWxlbWVudFxuICAgIC8vICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgLy8gICAgIHRoaXMuYnV0dG9uU3RhcnRGb3JnZS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgIC8vICAgICB0aGlzLmJ1dHRvbkNhbmNlbEZvcmdlLnNldFZpc2libGUodHJ1ZSk7XG4gICAgLy8gICAgIHRoaXMuaGFtbWVyQmFyLmNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgLy8gICAgIHRoaXMuZGVidWdDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgIC8vICAgICB0aGlzLnVwZGF0ZUZvcmdlVUkoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3JnZVN1Y2Nlc3MoKXtcbiAgICAvLyAgICAgLy8gYWRkIEltYWdlID4gVGV4dCA+IEF1ZGlvXG4gICAgLy8gICAgIGlmKCB0aGlzLmN1cnJlbnRJbWFnZSA8IHRoaXMudGFyZ2V0SW1hZ2UgKXtcbiAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudEltYWdlICs9IDE7XG4gICAgLy8gICAgIH1lbHNlIGlmKCB0aGlzLmN1cnJlbnRUZXh0IDwgdGhpcy50YXJnZXRUZXh0ICl7XG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ICs9IDE7XG4gICAgLy8gICAgIH1lbHNlIGlmKCB0aGlzLmN1cnJlbnRBdWRpbyA8IHRoaXMudGFyZ2V0QXVkaW8gKXtcbiAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvICs9IDE7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBpZiggdGhpcy5jdXJyZW50SW1hZ2UgPiB0aGlzLnRhcmdldEltYWdlICkgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLnRhcmdldEltYWdlXG4gICAgLy8gICAgIGlmKCB0aGlzLmN1cnJlbnRUZXh0ID4gdGhpcy50YXJnZXRUZXh0ICkgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMudGFyZ2V0VGV4dFxuICAgIC8vICAgICBpZiggdGhpcy5jdXJyZW50QXVkaW8gPiB0aGlzLnRhcmdldEF1ZGlvICkgdGhpcy5jdXJyZW50QXVkaW8gPSB0aGlzLnRhcmdldEF1ZGlvXG5cbiAgICAvLyAgICAgaWYoIHRoaXMuY3VycmVudEltYWdlID09IHRoaXMudGFyZ2V0SW1hZ2UgXG4gICAgLy8gICAgICAgICAmJiB0aGlzLmN1cnJlbnRUZXh0ID09IHRoaXMudGFyZ2V0VGV4dFxuICAgIC8vICAgICAgICAgJiYgdGhpcy5jdXJyZW50QXVkaW8gPT0gdGhpcy50YXJnZXRBdWRpb1xuICAgIC8vICAgICApe1xuICAgIC8vICAgICAgICAgdGhpcy5zdGF0dXNSZXN1bHQgPSAnc3VjY2Vzcyc7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLnVwZGF0ZUZvcmdlVUkoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3JnZUZhaWxlZCgpe1xuICAgIC8vICAgICB0aGlzLmN1cnJlbnRIYW1tZXIgLT0gMTtcblxuICAgIC8vICAgICBpZiggdGhpcy5jdXJyZW50SGFtbWVyIDwgMCApIHRoaXMuY3VycmVudEhhbW1lciA9IDA7XG5cbiAgICAvLyAgICAgaWYoIHRoaXMuY3VycmVudEhhbW1lciA9PSAwICl7XG4gICAgLy8gICAgICAgICB0aGlzLnN0YXR1c1Jlc3VsdCA9ICdmYWlsZWQnO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy51cGRhdGVGb3JnZVVJKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gdXBkYXRlRm9yZ2VVSSgpe1xuICAgIC8vICAgICB0aGlzLmhhbW1lckJhci5yZW5kZXJIYW1tZXIodGhpcy5jdXJyZW50SGFtbWVyLCB0aGlzLm1heEhhbW1lcik7XG5cbiAgICAvLyAgICAgaWYoIHRoaXMuZGVidWdGb3JnZVRleHQgKXtcbiAgICAvLyAgICAgICAgIGxldCB0ZXh0OnN0cmluZyA9ICcnO1xuICAgIC8vICAgICAgICAgdGV4dCArPSAnVGFyZ2V0OiAnO1xuICAgIC8vICAgICAgICAgdGV4dCArPSB0aGlzLmN1cnJlbnRJbWFnZSArICcvJyArIHRoaXMuY3VycmVudFRleHQgKyAnLycgKyB0aGlzLmN1cnJlbnRBdWRpbztcbiAgICAvLyAgICAgICAgIHRleHQgKz0gJyAtLS0gJztcbiAgICAvLyAgICAgICAgIHRleHQgKz0gJ1N0YXR1czogJztcbiAgICAvLyAgICAgICAgIHRleHQgKz0gdGhpcy5zdGF0dXNSZXN1bHQ7XG4gICAgLy8gICAgICAgICB0aGlzLmRlYnVnRm9yZ2VUZXh0LnNldFRleHQodGV4dCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRCdXMiLCJTY2VuZSIsIkdhbWVMaWIiLCJDbG9zZUJ1dHRvbiIsIkhhbW1lckJhciIsIlNwcml0ZUJ1dHRvbiIsIlBhbmVsU2VsZWN0Q2FyZCIsIkRlY2tSZXBvIiwiVm9jYWJDYXJkIiwiQmFzaWNCdXR0b24iLCJGb3JnZUJhciIsIkNhcmRNYWtlck1hbmFnZXIiLCJDYXJkTWFrZXIiLCJwcmVsb2FkIiwibG9hZCIsImltYWdlIiwiY3JlYXRlIiwic3RhdHVzUmVzdWx0Iiwic2VsZWN0ZWREZWNrS2V5Iiwic2VsZWN0ZWRWb2NhYktleSIsImNhcmRNYWtlck1hbmFnZXIiLCJiZyIsImFkZCIsInJlY3RhbmdsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYmFja0J1dHRvbiIsInNldFNjYWxlIiwib25QcmVzc2VkQ2FsbGJhY2siLCJzY2VuZSIsInN0YXJ0Iiwic3RhcnRZIiwibWFpbkNpcmNsZSIsImNpcmNsZSIsInNldFN0cm9rZVN0eWxlIiwibm9DYXJkRGlzcGxheSIsInRleHQiLCJ4IiwieSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNvbG9yIiwic2V0T3JpZ2luIiwic2V0VmlzaWJsZSIsInBhbmVsU2VsZWN0Q2FyZCIsIm9uUGFuZWxPcGVuIiwiY2FuSW5wdXQiLCJvblBhbmVsQ2xvc2UiLCJvbkNhcmRTZWxlY3RlZCIsImRlY2tLZXkiLCJ2b2NhYktleSIsInJlbmRlclNlbGVjdGVkQ2FyZCIsImJ1dHRvblNlbGVjdENhcmQiLCJyYWRpdXMiLCJjdXJyZW50Rm9yZ2VTdGF0ZSIsIm9wZW4iLCJmb3JnZUJhciIsImJ1dHRvblN0YXJ0Rm9yZ2UiLCJzZXRGb3JnZVN0YXRlIiwiYnV0dG9uQ2FuY2VsRm9yZ2UiLCJyZW5kZXJCdXR0b25Gb3JnZSIsImVtaXQiLCJzZWxlY3RlZFZvY2FiIiwiY2xlYW4iLCJjYW5Gb3JnZSIsInZvY2FiIiwiZ2V0Vm9jYWIiLCJ1bmRlZmluZWQiLCJjYWxjdWxhdGVIZWlnaHQiLCJzZXREaXNhYmxlZCIsImJ1dHRvbkFjdGlvbkZvcmdlIiwiY29udGFpbmVyIiwic3ByaXRlQmFzZSIsInNwcml0ZSIsInNwcml0ZUhhbW1lciIsInNldFJvdGF0aW9uIiwiUGhhc2VyIiwiTWF0aCIsIkRlZ1RvUmFkIiwic2V0SW50ZXJhY3RpdmUiLCJvbiIsIm9uRG93biIsIm9uVXAiLCJvbkhvdmVyIiwib25PdXQiLCJmb3JnZVN0YXRlIiwiZm9yZ2VTdGF0ZXMiLCJpbmNsdWRlcyIsInN0YXJ0UHJlcGFyZSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/scenes/CardMaker.ts\n"));

/***/ })

});