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

/***/ "./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts":
/*!**************************************************************************!*\
  !*** ./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ panelSelectedCard; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n/* harmony import */ var _TabButtonDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabButtonDeck */ \"./src/game/components/CardMaker/PanelSelectCard/TabButtonDeck.ts\");\n/* harmony import */ var _VocabCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n\n\n\n\n\nclass panelSelectedCard {\n    static preload(scene) {}\n    renderDeckTabs(decks) {\n        // Once Only\n        const topLeftPos = this.panel.getTopLeft();\n        //\n        const rowY = topLeftPos.y + this.deckButtonSectionDiffY + this.deckButtonGap / 2;\n        const startX = topLeftPos.x + this.panelPadding + this.deckButtonGap / 2;\n        decks.forEach((deck, index)=>{\n            let row = Phaser.Math.FloorTo(index / this.deckButtonPerRow); // Row 0 , 1\n            let remainder = index % this.deckButtonPerRow;\n            let posX = startX + this.deckButtonGap * remainder;\n            let posY = rowY + this.deckButtonGap * row;\n            let tabButton = new _TabButtonDeck__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, posX, posY, this.tabButtonSize, deck);\n            tabButton.onPressCallback = ()=>{\n                this.selectDeckTab(deck.key);\n            };\n            this.container.add(tabButton.container);\n            this.tabButtons.push(tabButton);\n        });\n    }\n    updateDeckTabs() {\n        this.tabButtons.forEach((tab)=>{\n            if (tab.deck && tab.deck.key == this.selectedDeckKey) {\n                tab.setStatus(\"selected\");\n            } else {\n                tab.setStatus(\"default\");\n            }\n        });\n    }\n    selectDeckTab(deckKey) {\n        if (this.selectedDeckKey != deckKey) {\n            this.selectedDeckKey = deckKey;\n            this.updateDeckTabs(); // Rerender Deck Tabs State\n            this.renderVocabs(); // Render new deck vocabs\n        }\n    }\n    renderVocabs() {\n        // Clear\n        let children = this.innerContainer.getAll();\n        children.forEach((child)=>{\n            child.destroy();\n        });\n        // Render Deck\n        const deck = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_2__.DeckRepo.getDeck(this.selectedDeckKey);\n        if (deck != undefined) {\n            // Calculate with consider to add into inner container\n            const startX = -(this.vocabGapX * (this.vocabPerRow - 1) / 2);\n            const startY = -(this.innerPanelHeight / 2 - this.panelPadding - this.vocabSizeHeight / 2);\n            deck.vocabs.forEach((vocab, index)=>{\n                let row = Phaser.Math.FloorTo(index / this.vocabPerRow); // Row 0 , 1\n                let remainder = index % this.vocabPerRow;\n                let posX = startX + this.vocabGapX * remainder;\n                let posY = startY + this.vocabGapY * row;\n                let vocabCard = new _VocabCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.scene, posX, posY, this.vocabSizeWidth, this.vocabSizeHeight, vocab, {\n                    withForgeCondition: true\n                });\n                vocabCard.setInteractive();\n                vocabCard.onPressCallback = ()=>{\n                    if (this.onCardSelected) {\n                        this.onCardSelected(this.selectedDeckKey, vocab.key);\n                    }\n                    this.close();\n                };\n                // Set vocab card status\n                vocabCard.setStatus(this.manager.getVocabStatus(vocab.key));\n                this.vocabCards.push(vocabCard);\n                this.innerContainer.add(vocabCard.container);\n            });\n        // // Set initial selected card\n        // if( !this.selectedVocabKey && !this.selectedVocabIndex){\n        //     if( deck.vocabs[0] != undefined ){\n        //         this.selectVocabCard(deck.vocabs[0].key,0);\n        //     }\n        // }else{\n        //     // Remain same selected position when change tab but update selected card\n        //     if( deck.vocabs[this.selectedVocabIndex] != undefined ){\n        //         this.selectVocabCard(deck.vocabs[this.selectedVocabIndex].key,this.selectedVocabIndex);\n        //     }else{\n        //         this.selectedVocabKey = '';\n        //         this.bottomButtonConfirm.setDisabled( true );\n        //     }\n        // }\n        }\n    }\n    open() {\n        this.container.setVisible(true);\n        if (this.onPanelOpen) this.onPanelOpen();\n    }\n    close() {\n        this.container.setVisible(false);\n        if (this.onPanelClose) this.onPanelClose();\n    }\n    constructor(scene, manager, x, y){\n        // Panel\n        this.panelWidth = _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].screenWidth - 100;\n        this.panelPadding = 50;\n        // Close Button\n        this.closeButtonSize = 120;\n        this.deckButtonPerRow = 6;\n        this.vocabSizeWidth = 180;\n        this.vocabSizeHeight = _VocabCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"].calculateHeight(180);\n        this.vocabPerRow = 4;\n        this.vocabRow = 3;\n        //\n        this.tabButtonSize = 120;\n        this.tabButtons = [];\n        //\n        this.vocabCards = [];\n        this.scene = scene;\n        this.manager = manager;\n        this.container = scene.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].screenHeight / 2).setDepth(100);\n        this.backdrop = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].screenHeight, 0x000000, 0.5);\n        this.container.add(this.backdrop);\n        // Initial Selected Deck Key\n        const decks = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_2__.DeckRepo.getDecks();\n        this.deckButtonGap = (this.panelWidth - this.panelPadding * 2) / this.deckButtonPerRow;\n        this.deckButtonRow = Phaser.Math.FloorTo(decks.length / this.deckButtonPerRow) + 1;\n        // Calculate Total Panel Height Based on Content\n        // Padding Top\n        let totalHeight = 0;\n        totalHeight += this.panelPadding; // Top Padding\n        totalHeight += this.closeButtonSize; // Close Button\n        totalHeight += this.panelPadding / 2; // Padding Sm\n        //\n        this.deckButtonSectionDiffY = totalHeight;\n        //\n        totalHeight += this.deckButtonRow * this.deckButtonGap; // Deck Tab Buttons\n        totalHeight += this.panelPadding / 2; // Padding Sm\n        //\n        this.vocabSectionDiffY = totalHeight;\n        //\n        let innerPanelHeight = 0;\n        innerPanelHeight += this.panelPadding; // Inner Top Padding\n        innerPanelHeight += (this.vocabSizeHeight + this.panelPadding) * this.vocabRow;\n        this.innerPanelHeight = innerPanelHeight;\n        totalHeight += innerPanelHeight;\n        totalHeight += this.panelPadding; // Bottom Padding\n        this.panelHeight = totalHeight;\n        // Render Panel\n        this.panel = scene.add.rectangle(0, 0, this.panelWidth, this.panelHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colorPanelBg);\n        this.container.add(this.panel);\n        const topRightPos = this.panel.getTopRight();\n        // Render Close Button\n        const closeButtonX = topRightPos.x - this.panelPadding - this.closeButtonSize / 2;\n        const closeButtonY = topRightPos.y + this.panelPadding + this.closeButtonSize / 2;\n        this.closeButton = new _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, closeButtonX, closeButtonY);\n        this.closeButton.buttonSprite.displayHeight = this.closeButtonSize;\n        this.closeButton.buttonSprite.displayWidth = this.closeButtonSize;\n        this.closeButton.onPressed(()=>{\n            this.close();\n        });\n        this.container.add(this.closeButton);\n        // Render Inner Panel\n        const relativeInnerPanelY = topRightPos.y + this.vocabSectionDiffY + this.innerPanelHeight / 2;\n        this.innerPanelWidth = this.panelWidth - this.panelPadding * 2;\n        this.innerPanel = scene.add.rectangle(0, relativeInnerPanelY, this.innerPanelWidth, this.innerPanelHeight, _lib_GameLib__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colorPanelBgDark);\n        this.container.add(this.innerPanel);\n        this.innerContainer = scene.add.container(0, relativeInnerPanelY);\n        this.container.add(this.innerContainer);\n        // Calculate vocab dimension\n        this.vocabGapX = (this.innerPanelWidth - this.panelPadding) / this.vocabPerRow;\n        this.vocabGapY = this.vocabSizeHeight + this.panelPadding;\n        this.renderDeckTabs(decks);\n        this.selectDeckTab(decks[0].key);\n        this.container.setVisible(false);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9QYW5lbFNlbGVjdENhcmQvUGFuZWxTZWxlY3RDYXJkLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzRDtBQUNuQjtBQUNrQjtBQUVWO0FBQ1I7QUFHcEIsTUFBTUs7SUFFakIsT0FBT0MsUUFBU0MsS0FBbUIsRUFBRSxDQUVyQztJQXNIQUMsZUFBZ0JDLEtBQVksRUFBRTtRQUMxQixZQUFZO1FBQ1osTUFBTUMsYUFBMkMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVU7UUFDdEUsRUFBRTtRQUNGLE1BQU1DLE9BQWVILFdBQVdJLENBQUMsR0FBRyxJQUFJLENBQUNDLHNCQUFzQixHQUFJLElBQUksQ0FBQ0MsYUFBYSxHQUFDO1FBQ3RGLE1BQU1DLFNBQWlCUCxXQUFXUSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxZQUFZLEdBQUksSUFBSSxDQUFDSCxhQUFhLEdBQUM7UUFFOUVQLE1BQU1XLE9BQU8sQ0FBQyxDQUFFQyxNQUFNQztZQUNsQixJQUFJQyxNQUFNQyxPQUFPQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0osUUFBTSxJQUFJLENBQUNLLGdCQUFnQixHQUFHLFlBQVk7WUFDeEUsSUFBSUMsWUFBWU4sUUFBTSxJQUFJLENBQUNLLGdCQUFnQjtZQUUzQyxJQUFJRSxPQUFlWixTQUFRLElBQUksQ0FBQ0QsYUFBYSxHQUFDWTtZQUM5QyxJQUFJRSxPQUFlakIsT0FBUSxJQUFJLENBQUNHLGFBQWEsR0FBQ087WUFFOUMsSUFBSVEsWUFBMEIsSUFBSTVCLHNEQUFhQSxDQUFDLElBQUksQ0FBQ0ksS0FBSyxFQUFDc0IsTUFBS0MsTUFBSyxJQUFJLENBQUNFLGFBQWEsRUFBQ1g7WUFDeEZVLFVBQVVFLGVBQWUsR0FBRztnQkFDeEIsSUFBSSxDQUFDQyxhQUFhLENBQUNiLEtBQUtjLEdBQUc7WUFDL0I7WUFFQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDTixVQUFVSyxTQUFTO1lBQ3RDLElBQUksQ0FB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QUFJLENBQUNtQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNpRSxVQUFVO1FBRWxDLElBQUksQ0FBQ3ZELGNBQWMsR0FBR3hDLE1BQU04QixHQUFHLENBQUNELFNBQVMsQ0FBQyxHQUFFZ0U7UUFDNUMsSUFBSSxDQUFDaEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVSxjQUFjO1FBRXRDLDRCQUE0QjtRQUM1QixJQUFJLENBQUNNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ2dELGVBQWUsR0FBSSxJQUFJLENBQUNsRixZQUFZLElBQU0sSUFBSSxDQUFDbUMsV0FBVztRQUNqRixJQUFJLENBQUNNLFNBQVMsR0FBRyxJQUFJLENBQUNILGVBQWUsR0FBQyxJQUFJLENBQUN0QyxZQUFZO1FBRXZELElBQUksQ0FBQ1gsY0FBYyxDQUFDQztRQUNwQixJQUFJLENBQUN5QixhQUFhLENBQUV6QixLQUFLLENBQUMsRUFBRSxDQUFDMEIsR0FBRztRQUVoQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ21DLFVBQVUsQ0FBQztJQUM5QjtBQW1ISjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL1BhbmVsU2VsZWN0Q2FyZC9QYW5lbFNlbGVjdENhcmQudHM/YmE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIkAvbGliL2NvbXBvbmVudHMvQ2xvc2VCdXR0b25cIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgRGVjaywgRGVja1JlcG8gfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUeXBlcyB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IFRhYkJ1dHRvbkRlY2sgZnJvbSBcIi4vVGFiQnV0dG9uRGVja1wiXG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gXCIuL1ZvY2FiQ2FyZFwiXG5pbXBvcnQgQ2FyZE1ha2VyTWFuYWdlciBmcm9tIFwiLi4vQ2FyZE1ha2VyTWFuYWdlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhbmVsU2VsZWN0ZWRDYXJke1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgbWFuYWdlcjogQ2FyZE1ha2VyTWFuYWdlclxuICAgIGJhY2tkcm9wOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHBhbmVsOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBpbm5lclBhbmVsOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBpbm5lckNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgY2xvc2VCdXR0b246IENsb3NlQnV0dG9uXG4gICAgLy9cbiAgICBzZWxlY3RlZERlY2tLZXk6IHN0cmluZ1xuICAgIC8vIFBhbmVsXG4gICAgcGFuZWxXaWR0aDogbnVtYmVyID0gR2FtZUxpYi5zY3JlZW5XaWR0aC0xMDBcbiAgICBwYW5lbEhlaWdodDogbnVtYmVyXG4gICAgcGFuZWxQYWRkaW5nOiBudW1iZXIgPSA1MFxuICAgIC8vIENsb3NlIEJ1dHRvblxuICAgIGNsb3NlQnV0dG9uU2l6ZTogbnVtYmVyID0gMTIwIFxuICAgIC8vIFRhYiBEZWNrc1xuICAgIGRlY2tCdXR0b25TZWN0aW9uRGlmZlk6IG51bWJlclxuICAgIGRlY2tCdXR0b25QZXJSb3c6IG51bWJlciA9IDZcbiAgICBkZWNrQnV0dG9uR2FwOiBudW1iZXJcbiAgICBkZWNrQnV0dG9uUm93OiBudW1iZXJcbiAgICAvL1xuICAgIGlubmVyUGFuZWxIZWlnaHQ6IG51bWJlclxuICAgIGlubmVyUGFuZWxXaWR0aDogbnVtYmVyXG4gICAgdm9jYWJTZWN0aW9uRGlmZlk6IG51bWJlclxuICAgIHZvY2FiU2l6ZVdpZHRoOiBudW1iZXIgPSAxODBcbiAgICB2b2NhYlNpemVIZWlnaHQ6IG51bWJlciA9IFZvY2FiQ2FyZC5jYWxjdWxhdGVIZWlnaHQoMTgwKVxuICAgIHZvY2FiUGVyUm93OiBudW1iZXIgPSA0XG4gICAgdm9jYWJSb3c6IG51bWJlciA9IDNcbiAgICB2b2NhYkdhcFg6IG51bWJlclxuICAgIHZvY2FiR2FwWTogbnVtYmVyXG4gICAgLy9cbiAgICB0YWJCdXR0b25TaXplOiBudW1iZXIgPSAxMjBcbiAgICB0YWJCdXR0b25zOiBUYWJCdXR0b25EZWNrW10gPSBbXVxuICAgIC8vXG4gICAgdm9jYWJDYXJkczogVm9jYWJDYXJkW10gPSBbXVxuICAgIC8vXG4gICAgb25DYXJkU2VsZWN0ZWQ6IEZ1bmN0aW9uIHwgbnVsbFxuICAgIG9uUGFuZWxPcGVuOiBGdW5jdGlvbiB8IG51bGxcbiAgICBvblBhbmVsQ2xvc2U6IEZ1bmN0aW9uIHwgbnVsbFxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOlNjZW5lLCBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyLCB4Om51bWJlciwgeTpudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXJcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIpLnNldERlcHRoKDEwMCk7XG5cbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLEdhbWVMaWIuc2NyZWVuV2lkdGgsR2FtZUxpYi5zY3JlZW5IZWlnaHQsMHgwMDAwMDAsMC41KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYmFja2Ryb3ApO1xuXG4gICAgICAgIC8vIEluaXRpYWwgU2VsZWN0ZWQgRGVjayBLZXlcbiAgICAgICAgY29uc3QgZGVja3M6RGVja1tdID0gRGVja1JlcG8uZ2V0RGVja3MoKTtcblxuICAgICAgICB0aGlzLmRlY2tCdXR0b25HYXAgPSAodGhpcy5wYW5lbFdpZHRoLSB0aGlzLnBhbmVsUGFkZGluZyoyKSAvIHRoaXMuZGVja0J1dHRvblBlclJvdztcbiAgICAgICAgdGhpcy5kZWNrQnV0dG9uUm93ID0gUGhhc2VyLk1hdGguRmxvb3JUbyhkZWNrcy5sZW5ndGgvdGhpcy5kZWNrQnV0dG9uUGVyUm93KSArIDE7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBUb3RhbCBQYW5lbCBIZWlnaHQgQmFzZWQgb24gQ29udGVudFxuICAgICAgICAvLyBQYWRkaW5nIFRvcFxuICAgICAgICBsZXQgdG90YWxIZWlnaHQ6bnVtYmVyID0gMDtcbiAgICAgICAgdG90YWxIZWlnaHQgKz0gdGhpcy5wYW5lbFBhZGRpbmc7IC8vIFRvcCBQYWRkaW5nXG4gICAgICAgIHRvdGFsSGVpZ2h0ICs9IHRoaXMuY2xvc2VCdXR0b25TaXplOyAvLyBDbG9zZSBCdXR0b25cbiAgICAgICAgdG90YWxIZWlnaHQgKz0gdGhpcy5wYW5lbFBhZGRpbmcvMjsgLy8gUGFkZGluZyBTbVxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmRlY2tCdXR0b25TZWN0aW9uRGlmZlkgPSB0b3RhbEhlaWdodDtcbiAgICAgICAgLy9cbiAgICAgICAgdG90YWxIZWlnaHQgKz0gdGhpcy5kZWNrQnV0dG9uUm93KnRoaXMuZGVja0J1dHRvbkdhcDsgLy8gRGVjayBUYWIgQnV0dG9uc1xuICAgICAgICB0b3RhbEhlaWdodCArPSB0aGlzLnBhbmVsUGFkZGluZy8yOyAvLyBQYWRkaW5nIFNtXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMudm9jYWJTZWN0aW9uRGlmZlkgPSB0b3RhbEhlaWdodDtcbiAgICAgICAgLy9cbiAgICAgICAgbGV0IGlubmVyUGFuZWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgICAgIGlubmVyUGFuZWxIZWlnaHQgKz0gdGhpcy5wYW5lbFBhZGRpbmc7IC8vIElubmVyIFRvcCBQYWRkaW5nXG4gICAgICAgIGlubmVyUGFuZWxIZWlnaHQgKz0gKHRoaXMudm9jYWJTaXplSGVpZ2h0K3RoaXMucGFuZWxQYWRkaW5nKSp0aGlzLnZvY2FiUm93O1xuICAgICAgICB0aGlzLmlubmVyUGFuZWxIZWlnaHQgPSBpbm5lclBhbmVsSGVpZ2h0O1xuXG4gICAgICAgIHRvdGFsSGVpZ2h0ICs9IGlubmVyUGFuZWxIZWlnaHQ7XG4gICAgICAgIHRvdGFsSGVpZ2h0ICs9IHRoaXMucGFuZWxQYWRkaW5nOyAvLyBCb3R0b20gUGFkZGluZ1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYW5lbEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIFBhbmVsXG4gICAgICAgIHRoaXMucGFuZWwgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCx0aGlzLnBhbmVsV2lkdGgsdGhpcy5wYW5lbEhlaWdodCxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnBhbmVsKTtcblxuICAgICAgICBjb25zdCB0b3BSaWdodFBvczpQaGFzZXIuVHlwZXMuTWF0aC5WZWN0b3IyTGlrZSA9IHRoaXMucGFuZWwuZ2V0VG9wUmlnaHQoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBDbG9zZSBCdXR0b25cbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b25YOiBudW1iZXIgPSB0b3BSaWdodFBvcy54IC0gdGhpcy5wYW5lbFBhZGRpbmcgLSAodGhpcy5jbG9zZUJ1dHRvblNpemUvMik7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uWTogbnVtYmVyID0gdG9wUmlnaHRQb3MueSArIHRoaXMucGFuZWxQYWRkaW5nICsgKHRoaXMuY2xvc2VCdXR0b25TaXplLzIpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IENsb3NlQnV0dG9uKHNjZW5lLGNsb3NlQnV0dG9uWCxjbG9zZUJ1dHRvblkpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmJ1dHRvblNwcml0ZS5kaXNwbGF5SGVpZ2h0ID0gdGhpcy5jbG9zZUJ1dHRvblNpemU7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYnV0dG9uU3ByaXRlLmRpc3BsYXlXaWR0aCA9IHRoaXMuY2xvc2VCdXR0b25TaXplO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLm9uUHJlc3NlZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuY2xvc2VCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIElubmVyIFBhbmVsXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlSW5uZXJQYW5lbFk6IG51bWJlciA9IHRvcFJpZ2h0UG9zLnkgKyB0aGlzLnZvY2FiU2VjdGlvbkRpZmZZICsgKHRoaXMuaW5uZXJQYW5lbEhlaWdodC8yKTtcbiAgICAgICAgdGhpcy5pbm5lclBhbmVsV2lkdGggPSB0aGlzLnBhbmVsV2lkdGggLSAodGhpcy5wYW5lbFBhZGRpbmcqMik7XG5cbiAgICAgICAgdGhpcy5pbm5lclBhbmVsID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLHJlbGF0aXZlSW5uZXJQYW5lbFksdGhpcy5pbm5lclBhbmVsV2lkdGgsdGhpcy5pbm5lclBhbmVsSGVpZ2h0LEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyUGFuZWwpO1xuXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKDAscmVsYXRpdmVJbm5lclBhbmVsWSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdm9jYWIgZGltZW5zaW9uXG4gICAgICAgIHRoaXMudm9jYWJHYXBYID0gKHRoaXMuaW5uZXJQYW5lbFdpZHRoIC0gKHRoaXMucGFuZWxQYWRkaW5nKSkgLyAodGhpcy52b2NhYlBlclJvdyk7XG4gICAgICAgIHRoaXMudm9jYWJHYXBZID0gdGhpcy52b2NhYlNpemVIZWlnaHQrdGhpcy5wYW5lbFBhZGRpbmc7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJEZWNrVGFicyhkZWNrcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0RGVja1RhYiggZGVja3NbMF0ua2V5ICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRGVja1RhYnMoIGRlY2tzOkRlY2tbXSApe1xuICAgICAgICAvLyBPbmNlIE9ubHlcbiAgICAgICAgY29uc3QgdG9wTGVmdFBvczpQaGFzZXIuVHlwZXMuTWF0aC5WZWN0b3IyTGlrZSA9IHRoaXMucGFuZWwuZ2V0VG9wTGVmdCgpO1xuICAgICAgICAvL1xuICAgICAgICBjb25zdCByb3dZOiBudW1iZXIgPSB0b3BMZWZ0UG9zLnkgKyB0aGlzLmRlY2tCdXR0b25TZWN0aW9uRGlmZlkgKyAodGhpcy5kZWNrQnV0dG9uR2FwLzIpO1xuICAgICAgICBjb25zdCBzdGFydFg6IG51bWJlciA9IHRvcExlZnRQb3MueCArIHRoaXMucGFuZWxQYWRkaW5nICsgKHRoaXMuZGVja0J1dHRvbkdhcC8yKVxuICAgICAgICBcbiAgICAgICAgZGVja3MuZm9yRWFjaCgoIGRlY2ssIGluZGV4KT0+e1xuICAgICAgICAgICAgbGV0IHJvdyA9IFBoYXNlci5NYXRoLkZsb29yVG8oaW5kZXgvdGhpcy5kZWNrQnV0dG9uUGVyUm93KTsgLy8gUm93IDAgLCAxXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gaW5kZXgldGhpcy5kZWNrQnV0dG9uUGVyUm93O1xuXG4gICAgICAgICAgICBsZXQgcG9zWDogbnVtYmVyID0gc3RhcnRYKyh0aGlzLmRlY2tCdXR0b25HYXAqcmVtYWluZGVyKTtcbiAgICAgICAgICAgIGxldCBwb3NZOiBudW1iZXIgPSByb3dZICsgKHRoaXMuZGVja0J1dHRvbkdhcCpyb3cpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFiQnV0dG9uOlRhYkJ1dHRvbkRlY2sgPSBuZXcgVGFiQnV0dG9uRGVjayh0aGlzLnNjZW5lLHBvc1gscG9zWSx0aGlzLnRhYkJ1dHRvblNpemUsZGVjayk7XG4gICAgICAgICAgICB0YWJCdXR0b24ub25QcmVzc0NhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlY2tUYWIoZGVjay5rZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGFiQnV0dG9uLmNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLnRhYkJ1dHRvbnMucHVzaCh0YWJCdXR0b24pO1xuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIHVwZGF0ZURlY2tUYWJzKCl7XG4gICAgICAgIHRoaXMudGFiQnV0dG9ucy5mb3JFYWNoKCh0YWIpPT57XG4gICAgICAgICAgICBpZiggdGFiLmRlY2sgJiYgdGFiLmRlY2sua2V5ID09IHRoaXMuc2VsZWN0ZWREZWNrS2V5ICl7XG4gICAgICAgICAgICAgICAgdGFiLnNldFN0YXR1cygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5zZXRTdGF0dXMoJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWxlY3REZWNrVGFiKCBkZWNrS2V5OnN0cmluZyApe1xuICAgICAgICBpZiggdGhpcy5zZWxlY3RlZERlY2tLZXkgIT0gZGVja0tleSApe1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERlY2tLZXkgPSBkZWNrS2V5O1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlY2tUYWJzKCk7IC8vIFJlcmVuZGVyIERlY2sgVGFicyBTdGF0ZVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJWb2NhYnMoKTsgLy8gUmVuZGVyIG5ldyBkZWNrIHZvY2Fic1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVm9jYWJzKCl7XG4gICAgICAgIC8vIENsZWFyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuaW5uZXJDb250YWluZXIuZ2V0QWxsKCk7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goIChjaGlsZCk9PntcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUmVuZGVyIERlY2tcbiAgICAgICAgY29uc3QgZGVjazpEZWNrIHwgdW5kZWZpbmVkID0gRGVja1JlcG8uZ2V0RGVjayh0aGlzLnNlbGVjdGVkRGVja0tleSk7XG4gICAgICAgIFxuICAgICAgICBpZiggZGVjayAhPSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aXRoIGNvbnNpZGVyIHRvIGFkZCBpbnRvIGlubmVyIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRYOiBudW1iZXIgPSAtKHRoaXMudm9jYWJHYXBYKih0aGlzLnZvY2FiUGVyUm93LTEpLzIpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRZOiBudW1iZXIgPSAtKHRoaXMuaW5uZXJQYW5lbEhlaWdodC8yIC0gdGhpcy5wYW5lbFBhZGRpbmcgLSAodGhpcy52b2NhYlNpemVIZWlnaHQvMikgKTtcbiAgICAgICAgICAgIGRlY2sudm9jYWJzLmZvckVhY2goKHZvY2FiLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IFBoYXNlci5NYXRoLkZsb29yVG8oaW5kZXgvdGhpcy52b2NhYlBlclJvdyk7IC8vIFJvdyAwICwgMVxuICAgICAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBpbmRleCV0aGlzLnZvY2FiUGVyUm93O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBwb3NYOiBudW1iZXIgPSBzdGFydFggKyAodGhpcy52b2NhYkdhcFgqcmVtYWluZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zWTogbnVtYmVyID0gc3RhcnRZICsgKHRoaXMudm9jYWJHYXBZKnJvdyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdm9jYWJDYXJkOlZvY2FiQ2FyZCA9IG5ldyBWb2NhYkNhcmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUsXG4gICAgICAgICAgICAgICAgICAgIHBvc1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1ksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9jYWJTaXplV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9jYWJTaXplSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB2b2NhYixcbiAgICAgICAgICAgICAgICAgICAge3dpdGhGb3JnZUNvbmRpdGlvbjp0cnVlfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdm9jYWJDYXJkLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgdm9jYWJDYXJkLm9uUHJlc3NDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLm9uQ2FyZFNlbGVjdGVkICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2FyZFNlbGVjdGVkKCB0aGlzLnNlbGVjdGVkRGVja0tleSwgdm9jYWIua2V5IClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHZvY2FiIGNhcmQgc3RhdHVzXG4gICAgICAgICAgICAgICAgdm9jYWJDYXJkLnNldFN0YXR1cyh0aGlzLm1hbmFnZXIuZ2V0Vm9jYWJTdGF0dXModm9jYWIua2V5KSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZvY2FiQ2FyZHMucHVzaCh2b2NhYkNhcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuYWRkKHZvY2FiQ2FyZC5jb250YWluZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC8vIFNldCBpbml0aWFsIHNlbGVjdGVkIGNhcmRcbiAgICAgICAgICAgIC8vIGlmKCAhdGhpcy5zZWxlY3RlZFZvY2FiS2V5ICYmICF0aGlzLnNlbGVjdGVkVm9jYWJJbmRleCl7XG4gICAgICAgICAgICAvLyAgICAgaWYoIGRlY2sudm9jYWJzWzBdICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGVjdFZvY2FiQ2FyZChkZWNrLnZvY2Fic1swXS5rZXksMCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgLy8gUmVtYWluIHNhbWUgc2VsZWN0ZWQgcG9zaXRpb24gd2hlbiBjaGFuZ2UgdGFiIGJ1dCB1cGRhdGUgc2VsZWN0ZWQgY2FyZFxuICAgICAgICAgICAgLy8gICAgIGlmKCBkZWNrLnZvY2Fic1t0aGlzLnNlbGVjdGVkVm9jYWJJbmRleF0gIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VsZWN0Vm9jYWJDYXJkKGRlY2sudm9jYWJzW3RoaXMuc2VsZWN0ZWRWb2NhYkluZGV4XS5rZXksdGhpcy5zZWxlY3RlZFZvY2FiSW5kZXgpO1xuICAgICAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkVm9jYWJLZXkgPSAnJztcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ib3R0b21CdXR0b25Db25maXJtLnNldERpc2FibGVkKCB0cnVlICk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3Blbigpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBpZiggdGhpcy5vblBhbmVsT3BlbiApIHRoaXMub25QYW5lbE9wZW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgaWYoIHRoaXMub25QYW5lbENsb3NlICkgdGhpcy5vblBhbmVsQ2xvc2UoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNsb3NlQnV0dG9uIiwiR2FtZUxpYiIsIkRlY2tSZXBvIiwiVGFiQnV0dG9uRGVjayIsIlZvY2FiQ2FyZCIsInBhbmVsU2VsZWN0ZWRDYXJkIiwicHJlbG9hZCIsInNjZW5lIiwicmVuZGVyRGVja1RhYnMiLCJkZWNrcyIsInRvcExlZnRQb3MiLCJwYW5lbCIsImdldFRvcExlZnQiLCJyb3dZIiwieSIsImRlY2tCdXR0b25TZWN0aW9uRGlmZlkiLCJkZWNrQnV0dG9uR2FwIiwic3RhcnRYIiwieCIsInBhbmVsUGFkZGluZyIsImZvckVhY2giLCJkZWNrIiwiaW5kZXgiLCJyb3ciLCJQaGFzZXIiLCJNYXRoIiwiRmxvb3JUbyIsImRlY2tCdXR0b25QZXJSb3ciLCJyZW1haW5kZXIiLCJwb3NYIiwicG9zWSIsInRhYkJ1dHRvbiIsInRhYkJ1dHRvblNpemUiLCJvblByZXNzQ2FsbGJhY2siLCJzZWxlY3REZWNrVGFiIiwia2V5IiwiY29udGFpbmVyIiwiYWRkIiwidGFiQnV0dG9ucyIsInB1c2giLCJ1cGRhdGVEZWNrVGFicyIsInRhYiIsInNlbGVjdGVkRGVja0tleSIsInNldFN0YXR1cyIsImRlY2tLZXkiLCJyZW5kZXJWb2NhYnMiLCJjaGlsZHJlbiIsImlubmVyQ29udGFpbmVyIiwiZ2V0QWxsIiwiY2hpbGQiLCJkZXN0cm95IiwiZ2V0RGVjayIsInVuZGVmaW5lZCIsInZvY2FiR2FwWCIsInZvY2FiUGVyUm93Iiwic3RhcnRZIiwiaW5uZXJQYW5lbEhlaWdodCIsInZvY2FiU2l6ZUhlaWdodCIsInZvY2FicyIsInZvY2FiIiwidm9jYWJHYXBZIiwidm9jYWJDYXJkIiwidm9jYWJTaXplV2lkdGgiLCJ3aXRoRm9yZ2VDb25kaXRpb24iLCJzZXRJbnRlcmFjdGl2ZSIsIm9uQ2FyZFNlbGVjdGVkIiwiY2xvc2UiLCJtYW5hZ2VyIiwiZ2V0Vm9jYWJTdGF0dXMiLCJ2b2NhYkNhcmRzIiwib3BlbiIsInNldFZpc2libGUiLCJvblBhbmVsT3BlbiIsIm9uUGFuZWxDbG9zZSIsImNvbnN0cnVjdG9yIiwicGFuZWxXaWR0aCIsInNjcmVlbldpZHRoIiwiY2xvc2VCdXR0b25TaXplIiwiY2FsY3VsYXRlSGVpZ2h0Iiwidm9jYWJSb3ciLCJzY3JlZW5IZWlnaHQiLCJzZXREZXB0aCIsImJhY2tkcm9wIiwicmVjdGFuZ2xlIiwiZ2V0RGVja3MiLCJkZWNrQnV0dG9uUm93IiwibGVuZ3RoIiwidG90YWxIZWlnaHQiLCJ2b2NhYlNlY3Rpb25EaWZmWSIsInBhbmVsSGVpZ2h0IiwiY29sb3JQYW5lbEJnIiwidG9wUmlnaHRQb3MiLCJnZXRUb3BSaWdodCIsImNsb3NlQnV0dG9uWCIsImNsb3NlQnV0dG9uWSIsImNsb3NlQnV0dG9uIiwiYnV0dG9uU3ByaXRlIiwiZGlzcGxheUhlaWdodCIsImRpc3BsYXlXaWR0aCIsIm9uUHJlc3NlZCIsInJlbGF0aXZlSW5uZXJQYW5lbFkiLCJpbm5lclBhbmVsV2lkdGgiLCJpbm5lclBhbmVsIiwiY29sb3JQYW5lbEJnRGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/PanelSelectCard/PanelSelectCard.ts\n"));

/***/ })

});