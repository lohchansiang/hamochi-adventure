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

/***/ "./src/game/components/CardMaker/ForgeMainCircle.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMainCircle.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMainCircle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgeFeedbackFailed */ \"./src/game/components/CardMaker/ForgeFeedbackFailed.ts\");\n/* harmony import */ var _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForgeFeedbackSuccess */ \"./src/game/components/CardMaker/ForgeFeedbackSuccess.ts\");\n\n\n\n\nclass ForgeMainCircle {\n    static preload(scene) {}\n    clearSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        this.noCardDisplay.setVisible(true);\n        if (this.tweenPulse) {\n            this.tweenPulse.play();\n        }\n    }\n    renderSelectedCard(vocab) {\n        this.clearSelectedCard();\n        this.noCardDisplay.setVisible(false);\n        this.selectedVocab = new _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 0, 0, 250, _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculateHeight(250), vocab);\n        this.container.add(this.selectedVocab.container);\n        if (this.tweenPulse) {\n            this.tweenPulse.pause();\n            this.tweenPulse.reset();\n        }\n    }\n    exitForge() {\n        this.buttonSelectCard.setVisible(true);\n        this.container.removeInteractive();\n        this.removeDragDropListener();\n    }\n    enterForge() {\n        this.buttonSelectCard.setVisible(false);\n        this.container.setInteractive(new Phaser.Geom.Circle(0, 0, this.radius + 50), Phaser.Geom.Circle.Contains, true);\n        this.addDragDropListener();\n    // this.scene.input.enableDebug(this.container,0x00ff00);\n    }\n    addDragDropListener() {\n        this.scene.input.on(\"dragstart\", function(pointer, gameObject) {\n            gameObject.setDepth(999);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            if (target.name == \"MainCircle\") {\n                let isCorrect = this.scene.manager.checkAnswer(gameObject);\n                if (isCorrect) this.showSuccessFeedback();\n                else this.showFailedFeedback();\n                gameObject.destroy();\n            }\n        });\n        this.scene.input.on(\"dragend\", (pointer, gameObject, dropped)=>{\n            if (!dropped) {\n                gameObject.x = gameObject.input.dragStartX;\n                gameObject.y = gameObject.input.dragStartY;\n            }\n        });\n    }\n    showSuccessFeedback() {\n        let success = new _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    showFailedFeedback() {\n        let failed = new _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    removeDragDropListener() {\n        this.scene.input.removeListener(\"dragstart\");\n        this.scene.input.removeListener(\"drag\");\n        this.scene.input.removeListener(\"dragend\");\n        this.scene.input.removeListener(\"drop\");\n    }\n    constructor(scene, x, y){\n        //\n        this.radius = 250;\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        this.panelBase = scene.add.nineslice(0, 0, \"panelWhite\", 0, 1000, 500, 50, 50, 50, 50);\n        this.panelBase.setTint(0xF8EBDC);\n        this.container.add(this.panelBase);\n        // Anvil Sprite\n        // this.anvilSprite = scene.add.sprite(0,0,'forgeAnvil');\n        // this.container.add(this.anvilSprite);\n        // Anvil Card Slot\n        this.anvilCardSlot = scene.add.sprite(0, 0, \"vocabCardWhite\");\n        this.anvilCardSlot.setTint(0x5b5a5a);\n        this.anvilCardSlot.setDisplaySize(270, _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculateHeight(270));\n        this.container.add(this.anvilCardSlot);\n        const thickness = 15;\n        // this.outerCircle = scene.add.circle(0,0,this.radius,GameLib.colorPanelBg);\n        // this.innerCircle = scene.add.circle(0,0,this.radius-thickness,0xffffff);\n        // this.container.add(this.outerCircle);\n        // this.container.add(this.innerCircle);\n        this.noCardDisplay = this.scene.add.text(0, 0, \"?\", {\n            fontSize: \"250px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        this.buttonSelectCard = scene.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quaterX, 0);\n        let baseSprite = scene.add.sprite(0, 0, \"buttonCircleAction\");\n        baseSprite.setDisplaySize(150, 150);\n        let iconSprite = scene.add.sprite(10, 0, \"buttonCardSelect\");\n        iconSprite.setDisplaySize(100, 100);\n        this.buttonSelectCard.add(baseSprite);\n        this.buttonSelectCard.add(iconSprite);\n        baseSprite.setInteractive();\n        baseSprite.on(\"pointerdown\", ()=>{\n            this.scene.events.emit(\"open-panel\");\n        });\n        baseSprite.on(\"pointerover\", ()=>{\n            this.buttonSelectCard.setScale(1.05);\n        }, this);\n        baseSprite.on(\"pointerout\", ()=>{\n            this.buttonSelectCard.setScale(1);\n        }, this);\n        this.tweenPulse = scene.tweens.add({\n            targets: this.buttonSelectCard,\n            scale: 1.05,\n            duration: 500,\n            repeat: -1,\n            yoyo: true\n        }).pause();\n        this.container.add(this.noCardDisplay);\n        this.container.add(this.buttonSelectCard);\n        this.container.name = \"MainCircle\";\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUM7QUFFZ0I7QUFHSTtBQUNFO0FBRTFDLE1BQU1JO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQTJGQUMsb0JBQW1CO1FBQ2YsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDQSxhQUFhLENBQUNDLEtBQUs7WUFDeEIsSUFBSSxDQUFDRCxhQUFhLEdBQUc7UUFDekI7UUFFQSxJQUFJLENBQUNFLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO1FBRzlCLElBQUksSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDQSxVQUFVLENBQUNDLElBQUk7UUFDeEI7SUFDSjtJQUVBQyxtQkFBb0JDLEtBQVcsRUFBRTtRQUM3QixJQUFJLENBQUNSLGlCQUFpQjtRQUV0QixJQUFJLENBQUNHLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ0gsYUFBYSxHQUFHLElBQUlQLGtFQUFTQSxDQUFDLElBQUksQ0FBQ0ssS0FBSyxFQUFDLEdBQUUsR0FBRSxLQUFJTCxrRkFBeUIsQ0FBQyxNQUFLYztRQUNyRixJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1YsYUFBYSxDQUFDUyxTQUFTO1FBRS9DLElBQUksSUFBSSxDQUFDTCxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDQSxVQUFVLENBQUNPLEtBQUs7WUFDckIsSUFBSSxDQUFDUCxVQUFVLENBQUNRLEtBQUs7UUFDekI7SUFDSjtJQUVBQyxZQUFXO1FBQ1AsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1gsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQ00sU0FBUyxDQUFDTSxpQkFBaUI7UUFFaEMsSUFBSSxDQUFDQyxzQkFBc0I7SUFDL0I7SUFFQUMsYUFBWTtRQUNSLElBQUksQ0FBQ0gsZ0JB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QUN4QixJQUFJLENBQUM1QixLQUFLLENBQUNvRSxNQUFNLENBQUNDLElBQUksQ0FBQztRQUMzQjtRQUVBSCxXQUFXdEMsRUFBRSxDQUFDLGVBQWM7WUFDeEIsSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ3NELFFBQVEsQ0FBQztRQUNuQyxHQUFFLElBQUk7UUFFTkosV0FBV3RDLEVBQUUsQ0FBQyxjQUFhO1lBQ3ZCLElBQUksQ0FBQ1osZ0JBQWdCLENBQUNzRCxRQUFRLENBQUM7UUFDbkMsR0FBRSxJQUFJO1FBRU4sSUFBSSxDQUFDaEUsVUFBVSxHQUFHTixNQUFNdUUsTUFBTSxDQUFDM0QsR0FBRyxDQUFDO1lBQy9CNEQsU0FBUyxJQUFJLENBQUN4RCxnQkFBZ0I7WUFDOUJ5RCxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsUUFBUSxDQUFDO1lBQ1RDLE1BQU07UUFDVixHQUFHL0QsS0FBSztRQUdSLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUixhQUFhO1FBQ3JDLElBQUksQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSSxnQkFBZ0I7UUFFeEMsSUFBSSxDQUFDTCxTQUFTLENBQUMwQixJQUFJLEdBQUc7SUFDMUI7QUE2Rko7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHM/ODEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBWb2NhYkNhcmQgZnJvbSBcIi4vUGFuZWxTZWxlY3RDYXJkL1ZvY2FiQ2FyZFwiXG5pbXBvcnQgU3ByaXRlQnV0dG9uIGZyb20gXCJAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvblwiXG5pbXBvcnQgeyBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgRm9yZ2VGZWVkYmFja0ZhaWxlZCBmcm9tIFwiLi9Gb3JnZUZlZWRiYWNrRmFpbGVkXCJcbmltcG9ydCBmb3JnZUZlZWRiYWNrU3VjY2VzcyBmcm9tIFwiLi9Gb3JnZUZlZWRiYWNrU3VjY2Vzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWFpbkNpcmNsZXtcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcGFuZWxCYXNlOiBHYW1lT2JqZWN0cy5OaW5lU2xpY2VcbiAgICAvL1xuICAgIGFudmlsU3ByaXRlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBhbnZpbENhcmRTbG90OiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvL1xuICAgIG91dGVyQ2lyY2xlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICBpbm5lckNpcmNsZTogR2FtZU9iamVjdHMuQXJjXG4gICAgLy9cbiAgICBub0NhcmREaXNwbGF5OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgc2VsZWN0ZWRWb2NhYjogVm9jYWJDYXJkIHwgbnVsbFxuICAgIGJ1dHRvblNlbGVjdENhcmQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHR3ZWVuUHVsc2U6IFR3ZWVucy5Ud2VlblxuICAgIC8vXG4gICAgcmFkaXVzOm51bWJlciA9IDI1MFxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYW5lbEJhc2UgPSBzY2VuZS5hZGQubmluZXNsaWNlKDAsMCwncGFuZWxXaGl0ZScsMCwxMDAwLDUwMCw1MCw1MCw1MCw1MClcbiAgICAgICAgdGhpcy5wYW5lbEJhc2Uuc2V0VGludCgweEY4RUJEQyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnBhbmVsQmFzZSk7XG5cbiAgICAgICAgLy8gQW52aWwgU3ByaXRlXG4gICAgICAgIC8vIHRoaXMuYW52aWxTcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKDAsMCwnZm9yZ2VBbnZpbCcpO1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5hbnZpbFNwcml0ZSk7XG5cbiAgICAgICAgLy8gQW52aWwgQ2FyZCBTbG90XG4gICAgICAgIHRoaXMuYW52aWxDYXJkU2xvdCA9IHNjZW5lLmFkZC5zcHJpdGUoMCwwLCd2b2NhYkNhcmRXaGl0ZScpO1xuICAgICAgICB0aGlzLmFudmlsQ2FyZFNsb3Quc2V0VGludCgweDViNWE1YSk7XG4gICAgICAgIHRoaXMuYW52aWxDYXJkU2xvdC5zZXREaXNwbGF5U2l6ZSgyNzAsVm9jYWJDYXJkLmNhbGN1bGF0ZUhlaWdodCgyNzApKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYW52aWxDYXJkU2xvdCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aGlja25lc3M6bnVtYmVyID0gMTU7XG4gICAgICAgIC8vIHRoaXMub3V0ZXJDaXJjbGUgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCx0aGlzLnJhZGl1cyxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIC8vIHRoaXMuaW5uZXJDaXJjbGUgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCx0aGlzLnJhZGl1cy10aGlja25lc3MsMHhmZmZmZmYpO1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5vdXRlckNpcmNsZSk7XG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyQ2lyY2xlKTtcblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsMCwnPycse1xuICAgICAgICAgICAgZm9udFNpemU6ICcyNTBweCcsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgY29sb3I6ICcjYzBjMGMwJyxcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwwLjUpLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZCA9IHNjZW5lLmFkZC5jb250YWluZXIoR2FtZUxpYi5xdWF0ZXJYLDApO1xuICAgICAgICBsZXQgYmFzZVNwcml0ZTpHYW1lT2JqZWN0cy5TcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKDAsMCwnYnV0dG9uQ2lyY2xlQWN0aW9uJyk7XG4gICAgICAgIGJhc2VTcHJpdGUuc2V0RGlzcGxheVNpemUoMTUwLDE1MCk7XG4gICAgICAgIGxldCBpY29uU3ByaXRlOkdhbWVPYmplY3RzLlNwcml0ZSA9IHNjZW5lLmFkZC5zcHJpdGUoMTAsMCwnYnV0dG9uQ2FyZFNlbGVjdCcpO1xuICAgICAgICBpY29uU3ByaXRlLnNldERpc3BsYXlTaXplKDEwMCwxMDApO1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuYWRkKGJhc2VTcHJpdGUpO1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuYWRkKGljb25TcHJpdGUpO1xuXG4gICAgICAgIGJhc2VTcHJpdGUuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgYmFzZVNwcml0ZS5vbigncG9pbnRlcmRvd24nLCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmV2ZW50cy5lbWl0KCdvcGVuLXBhbmVsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJhc2VTcHJpdGUub24oJ3BvaW50ZXJvdmVyJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLnNldFNjYWxlKDEuMDUpO1xuICAgICAgICB9LHRoaXMpO1xuXG4gICAgICAgIGJhc2VTcHJpdGUub24oJ3BvaW50ZXJvdXQnLCgpPT57XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0U2NhbGUoMSk7XG4gICAgICAgIH0sdGhpcyk7XG5cbiAgICAgICAgdGhpcy50d2VlblB1bHNlID0gc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmJ1dHRvblNlbGVjdENhcmQsXG4gICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICB9KS5wYXVzZSgpO1xuXG4gICAgICAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm5vQ2FyZERpc3BsYXkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5idXR0b25TZWxlY3RDYXJkKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYW1lID0gJ01haW5DaXJjbGUnXG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZENhcmQoKXtcbiAgICAgICAgLy8gY2xlYXJcbiAgICAgICAgaWYoIHRoaXMuc2VsZWN0ZWRWb2NhYiApe1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVm9jYWIgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkuc2V0VmlzaWJsZSh0cnVlKTtcblxuXG4gICAgICAgIGlmKCB0aGlzLnR3ZWVuUHVsc2UgKXtcbiAgICAgICAgICAgIHRoaXMudHdlZW5QdWxzZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTZWxlY3RlZENhcmQoIHZvY2FiOlZvY2FiICl7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZENhcmQoKTtcblxuICAgICAgICB0aGlzLm5vQ2FyZERpc3BsYXkuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYiA9IG5ldyBWb2NhYkNhcmQodGhpcy5zY2VuZSwwLDAsMjUwLFZvY2FiQ2FyZC5jYWxjdWxhdGVIZWlnaHQoMjUwKSx2b2NhYik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnNlbGVjdGVkVm9jYWIuY29udGFpbmVyKTtcblxuICAgICAgICBpZiggdGhpcy50d2VlblB1bHNlICl7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuUHVsc2UucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMudHdlZW5QdWxzZS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdEZvcmdlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVJbnRlcmFjdGl2ZSgpO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0Ryb3BMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGVudGVyRm9yZ2UoKXtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZShuZXcgUGhhc2VyLkdlb20uQ2lyY2xlKDAsMCx0aGlzLnJhZGl1cys1MCksUGhhc2VyLkdlb20uQ2lyY2xlLkNvbnRhaW5zLHRydWUpO1xuICAgICAgICB0aGlzLmFkZERyYWdEcm9wTGlzdGVuZXIoKTtcblxuICAgICAgICAvLyB0aGlzLnNjZW5lLmlucHV0LmVuYWJsZURlYnVnKHRoaXMuY29udGFpbmVyLDB4MDBmZjAwKTtcbiAgICB9XG5cbiAgICBhZGREcmFnRHJvcExpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIGZ1bmN0aW9uIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnNldERlcHRoKDk5OSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJhZ1g6bnVtYmVyLCBkcmFnWTogbnVtYmVyKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2Ryb3AnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgdGFyZ2V0OiBhbnkpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQubmFtZSA9PSAnTWFpbkNpcmNsZScgKXtcbiAgICAgICAgICAgICAgICBsZXQgaXNDb3JyZWN0OmJvb2xlYW4gPSB0aGlzLnNjZW5lLm1hbmFnZXIuY2hlY2tBbnN3ZXIoZ2FtZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYoIGlzQ29ycmVjdCApIHRoaXMuc2hvd1N1Y2Nlc3NGZWVkYmFjaygpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zaG93RmFpbGVkRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcm9wcGVkOmJvb2xlYW4pID0+XG4gICAgICAgIHtcblxuICAgICAgICAgICAgaWYgKCFkcm9wcGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGdhbWVPYmplY3QuaW5wdXQuZHJhZ1N0YXJ0WDtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBnYW1lT2JqZWN0LmlucHV0LmRyYWdTdGFydFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzaG93U3VjY2Vzc0ZlZWRiYWNrKCl7XG4gICAgICAgIGxldCBzdWNjZXNzOiBmb3JnZUZlZWRiYWNrU3VjY2VzcyA9IG5ldyBmb3JnZUZlZWRiYWNrU3VjY2Vzcyh0aGlzLnNjZW5lLHRoaXMub3JpWCx0aGlzLm9yaVkpO1xuICAgIH1cblxuICAgIHNob3dGYWlsZWRGZWVkYmFjaygpe1xuICAgICAgICBsZXQgZmFpbGVkOiBGb3JnZUZlZWRiYWNrRmFpbGVkID0gbmV3IEZvcmdlRmVlZGJhY2tGYWlsZWQodGhpcy5zY2VuZSx0aGlzLm9yaVgsdGhpcy5vcmlZKTtcbiAgICB9XG5cbiAgICByZW1vdmVEcmFnRHJvcExpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RyYWdzdGFydCcpO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnJlbW92ZUxpc3RlbmVyKCdkcmFnJyk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RyYWdlbmQnKTtcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5yZW1vdmVMaXN0ZW5lcignZHJvcCcpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIlZvY2FiQ2FyZCIsIkZvcmdlRmVlZGJhY2tGYWlsZWQiLCJmb3JnZUZlZWRiYWNrU3VjY2VzcyIsIkZvcmdlTWFpbkNpcmNsZSIsInByZWxvYWQiLCJzY2VuZSIsImNsZWFyU2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRWb2NhYiIsImNsZWFuIiwibm9DYXJkRGlzcGxheSIsInNldFZpc2libGUiLCJ0d2VlblB1bHNlIiwicGxheSIsInJlbmRlclNlbGVjdGVkQ2FyZCIsInZvY2FiIiwiY2FsY3VsYXRlSGVpZ2h0IiwiY29udGFpbmVyIiwiYWRkIiwicGF1c2UiLCJyZXNldCIsImV4aXRGb3JnZSIsImJ1dHRvblNlbGVjdENhcmQiLCJyZW1vdmVJbnRlcmFjdGl2ZSIsInJlbW92ZURyYWdEcm9wTGlzdGVuZXIiLCJlbnRlckZvcmdlIiwic2V0SW50ZXJhY3RpdmUiLCJQaGFzZXIiLCJHZW9tIiwiQ2lyY2xlIiwicmFkaXVzIiwiQ29udGFpbnMiLCJhZGREcmFnRHJvcExpc3RlbmVyIiwiaW5wdXQiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0Iiwic2V0RGVwdGgiLCJkcmFnWCIsImRyYWdZIiwieCIsInkiLCJ0YXJnZXQiLCJuYW1lIiwiaXNDb3JyZWN0IiwibWFuYWdlciIsImNoZWNrQW5zd2VyIiwic2hvd1N1Y2Nlc3NGZWVkYmFjayIsInNob3dGYWlsZWRGZWVkYmFjayIsImRlc3Ryb3kiLCJkcm9wcGVkIiwiZHJhZ1N0YXJ0WCIsImRyYWdTdGFydFkiLCJzdWNjZXNzIiwib3JpWCIsIm9yaVkiLCJmYWlsZWQiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnN0cnVjdG9yIiwicGFuZWxCYXNlIiwibmluZXNsaWNlIiwic2V0VGludCIsImFudmlsQ2FyZFNsb3QiLCJzcHJpdGUiLCJzZXREaXNwbGF5U2l6ZSIsInRoaWNrbmVzcyIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsInNldE9yaWdpbiIsInF1YXRlclgiLCJiYXNlU3ByaXRlIiwiaWNvblNwcml0ZSIsImV2ZW50cyIsImVtaXQiLCJzZXRTY2FsZSIsInR3ZWVucyIsInRhcmdldHMiLCJzY2FsZSIsImR1cmF0aW9uIiwicmVwZWF0IiwieW95byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMainCircle.ts\n"));

/***/ })

});