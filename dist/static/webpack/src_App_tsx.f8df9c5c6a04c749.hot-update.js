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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMainCircle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgeFeedbackFailed */ \"./src/game/components/CardMaker/ForgeFeedbackFailed.ts\");\n/* harmony import */ var _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForgeFeedbackSuccess */ \"./src/game/components/CardMaker/ForgeFeedbackSuccess.ts\");\n\n\n\n\nclass ForgeMainCircle {\n    static preload(scene) {}\n    clearSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        this.noCardDisplay.setVisible(true);\n        if (this.tweenPulse) {\n            this.tweenPulse.play();\n        }\n    }\n    renderSelectedCard(vocab) {\n        this.clearSelectedCard();\n        this.noCardDisplay.setVisible(false);\n        this.selectedVocab = new _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 0, 0, 250, _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculateHeight(250), vocab);\n        this.container.add(this.selectedVocab.container);\n        if (this.tweenPulse) {\n            this.tweenPulse.pause();\n            this.tweenPulse.reset();\n        }\n    }\n    exitForge() {\n        this.buttonSelectCard.setVisible(true);\n        this.container.removeInteractive();\n        this.removeDragDropListener();\n    }\n    enterForge() {\n        this.buttonSelectCard.setVisible(false);\n        this.container.setInteractive(new Phaser.Geom.Circle(0, 0, this.radius + 50), Phaser.Geom.Circle.Contains, true);\n        this.addDragDropListener();\n    // this.scene.input.enableDebug(this.container,0x00ff00);\n    }\n    addDragDropListener() {\n        this.scene.input.on(\"dragstart\", function(pointer, gameObject) {\n            gameObject.setDepth(999);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            if (target.name == \"MainCircle\") {\n                let isCorrect = this.scene.manager.checkAnswer(gameObject);\n                if (isCorrect) this.showSuccessFeedback();\n                else this.showFailedFeedback();\n                gameObject.destroy();\n            }\n        });\n        this.scene.input.on(\"dragend\", (pointer, gameObject, dropped)=>{\n            if (!dropped) {\n                gameObject.x = gameObject.input.dragStartX;\n                gameObject.y = gameObject.input.dragStartY;\n            }\n        });\n    }\n    showSuccessFeedback() {\n        let success = new _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    showFailedFeedback() {\n        let failed = new _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    removeDragDropListener() {\n        this.scene.input.removeListener(\"dragstart\");\n        this.scene.input.removeListener(\"drag\");\n        this.scene.input.removeListener(\"dragend\");\n        this.scene.input.removeListener(\"drop\");\n    }\n    updateForNext() {}\n    constructor(scene, x, y){\n        //\n        this.radius = 250;\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        const colorLight = 0xFEF9F3;\n        const colorDark = 0xF8EBDC;\n        const colorDarker = 0xE3CAB0;\n        this.container = scene.add.container(x, y);\n        this.panelBase = scene.add.nineslice(0, 0, \"panelWhite\", 0, 1000, 600, 50, 50, 50, 50);\n        this.panelBase.setTint(colorDark);\n        this.container.add(this.panelBase);\n        const thickness = 15;\n        this.outerCircle = scene.add.circle(0, 0, this.radius, colorDark).setStrokeStyle(10, colorLight);\n        this.innerCircle = scene.add.circle(0, 0, this.radius - thickness, colorLight);\n        this.container.add(this.outerCircle);\n        this.container.add(this.innerCircle);\n        this.anvilCardSlot = scene.add.sprite(0, 0, \"vocabCardWhite\");\n        this.anvilCardSlot.setTint(colorDarker);\n        this.anvilCardSlot.setDisplaySize(250, _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculateHeight(250));\n        this.container.add(this.anvilCardSlot);\n        this.noCardDisplay = this.scene.add.text(0, 0, \"?\", {\n            fontSize: \"200px\",\n            fontFamily: \"Arial\",\n            color: \"#FFFFFF\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        this.buttonSelectCard = scene.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quaterX, 0);\n        let baseSprite = scene.add.sprite(0, 0, \"buttonCircleAction\");\n        baseSprite.setDisplaySize(150, 150);\n        let iconSprite = scene.add.sprite(10, 0, \"buttonCardSelect\");\n        iconSprite.setDisplaySize(100, 100);\n        this.buttonSelectCard.add(baseSprite);\n        this.buttonSelectCard.add(iconSprite);\n        baseSprite.setInteractive();\n        baseSprite.on(\"pointerdown\", ()=>{\n            this.scene.events.emit(\"open-panel\");\n        });\n        baseSprite.on(\"pointerover\", ()=>{\n            this.buttonSelectCard.setScale(1.05);\n        }, this);\n        baseSprite.on(\"pointerout\", ()=>{\n            this.buttonSelectCard.setScale(1);\n        }, this);\n        this.tweenPulse = scene.tweens.add({\n            targets: this.buttonSelectCard,\n            scale: 1.05,\n            duration: 500,\n            repeat: -1,\n            yoyo: true\n        }).pause();\n        this.container.add(this.noCardDisplay);\n        this.container.add(this.buttonSelectCard);\n        this.container.name = \"MainCircle\";\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUM7QUFFZ0I7QUFHSTtBQUNFO0FBRTFDLE1BQU1JO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQXdGQUMsb0JBQW1CO1FBQ2YsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDQSxhQUFhLENBQUNDLEtBQUs7WUFDeEIsSUFBSSxDQUFDRCxhQUFhLEdBQUc7UUFDekI7UUFFQSxJQUFJLENBQUNFLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO1FBRzlCLElBQUksSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDQSxVQUFVLENBQUNDLElBQUk7UUFDeEI7SUFDSjtJQUVBQyxtQkFBb0JDLEtBQVcsRUFBRTtRQUM3QixJQUFJLENBQUNSLGlCQUFpQjtRQUV0QixJQUFJLENBQUNHLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ0gsYUFBYSxHQUFHLElBQUlQLGtFQUFTQSxDQUFDLElBQUksQ0FBQ0ssS0FBSyxFQUFDLEdBQUUsR0FBRSxLQUFJTCxrRkFBeUIsQ0FBQyxNQUFLYztRQUNyRixJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1YsYUFBYSxDQUFDUyxTQUFTO1FBRS9DLElBQUksSUFBSSxDQUFDTCxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDQSxVQUFVLENBQUNPLEtBQUs7WUFDckIsSUFBSSxDQUFDUCxVQUFVLENBQUNRLEtBQUs7UUFDekI7SUFDSjtJQUVBQyxZQUFXO1FBQ1AsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1gsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQ00sU0FBUyxDQUFDTSxpQkFBaUI7UUFFaEMsSUFBSSxDQUFDQyxzQkFBc0I7SUFDL0I7SUFFQUMsYUFBWTtRQUNSLElBQUksQ0FBQ0gsZ0JB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ZXIvRm9yZ2VNYWluQ2lyY2xlLnRzPzgxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZE1ha2VyIH0gZnJvbSBcIkAvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyXCJcbmltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiXG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gXCIuL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmRcIlxuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9TcHJpdGVCdXR0b25cIlxuaW1wb3J0IHsgVm9jYWIgfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IEZvcmdlRmVlZGJhY2tGYWlsZWQgZnJvbSBcIi4vRm9yZ2VGZWVkYmFja0ZhaWxlZFwiXG5pbXBvcnQgZm9yZ2VGZWVkYmFja1N1Y2Nlc3MgZnJvbSBcIi4vRm9yZ2VGZWVkYmFja1N1Y2Nlc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZU1haW5DaXJjbGV7XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG5cbiAgICB9XG5cbiAgICBzY2VuZTogQ2FyZE1ha2VyXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHBhbmVsQmFzZTogR2FtZU9iamVjdHMuTmluZVNsaWNlXG4gICAgLy9cbiAgICBvdXRlckNpcmNsZTogR2FtZU9iamVjdHMuQXJjXG4gICAgaW5uZXJDaXJjbGU6IEdhbWVPYmplY3RzLkFyY1xuICAgIGFudmlsQ2FyZFNsb3Q6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vXG4gICAgbm9DYXJkRGlzcGxheTogR2FtZU9iamVjdHMuVGV4dFxuICAgIHNlbGVjdGVkVm9jYWI6IFZvY2FiQ2FyZCB8IG51bGxcbiAgICBidXR0b25TZWxlY3RDYXJkOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICB0d2VlblB1bHNlOiBUd2VlbnMuVHdlZW5cbiAgICAvL1xuICAgIHJhZGl1czpudW1iZXIgPSAyNTBcblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6IG51bWJlciwgeTogbnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcblxuICAgICAgICBjb25zdCBjb2xvckxpZ2h0Om51bWJlciA9IDB4RkVGOUYzO1xuICAgICAgICBjb25zdCBjb2xvckRhcms6bnVtYmVyID0gMHhGOEVCREM7XG4gICAgICAgIGNvbnN0IGNvbG9yRGFya2VyOm51bWJlciA9IDB4RTNDQUIwO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYW5lbEJhc2UgPSBzY2VuZS5hZGQubmluZXNsaWNlKDAsMCwncGFuZWxXaGl0ZScsMCwxMDAwLDYwMCw1MCw1MCw1MCw1MClcbiAgICAgICAgdGhpcy5wYW5lbEJhc2Uuc2V0VGludChjb2xvckRhcmspO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wYW5lbEJhc2UpO1xuXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzczpudW1iZXIgPSAxNTtcbiAgICAgICAgdGhpcy5vdXRlckNpcmNsZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLHRoaXMucmFkaXVzLGNvbG9yRGFyaykuc2V0U3Ryb2tlU3R5bGUoMTAsY29sb3JMaWdodCk7XG4gICAgICAgIHRoaXMuaW5uZXJDaXJjbGUgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCx0aGlzLnJhZGl1cy10aGlja25lc3MsY29sb3JMaWdodCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyQ2lyY2xlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaW5uZXJDaXJjbGUpO1xuXG4gICAgICAgIHRoaXMuYW52aWxDYXJkU2xvdCA9IHNjZW5lLmFkZC5zcHJpdGUoMCwwLCd2b2NhYkNhcmRXaGl0ZScpO1xuICAgICAgICB0aGlzLmFudmlsQ2FyZFNsb3Quc2V0VGludChjb2xvckRhcmtlcik7XG4gICAgICAgIHRoaXMuYW52aWxDYXJkU2xvdC5zZXREaXNwbGF5U2l6ZSgyNTAsVm9jYWJDYXJkLmNhbGN1bGF0ZUhlaWdodCgyNTApKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYW52aWxDYXJkU2xvdCk7XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLDAsJz8nLHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjAwcHgnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsMC41KS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQgPSBzY2VuZS5hZGQuY29udGFpbmVyKEdhbWVMaWIucXVhdGVyWCwwKTtcbiAgICAgICAgbGV0IGJhc2VTcHJpdGU6R2FtZU9iamVjdHMuU3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ2J1dHRvbkNpcmNsZUFjdGlvbicpO1xuICAgICAgICBiYXNlU3ByaXRlLnNldERpc3BsYXlTaXplKDE1MCwxNTApO1xuICAgICAgICBsZXQgaWNvblNwcml0ZTpHYW1lT2JqZWN0cy5TcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKDEwLDAsJ2J1dHRvbkNhcmRTZWxlY3QnKTtcbiAgICAgICAgaWNvblNwcml0ZS5zZXREaXNwbGF5U2l6ZSgxMDAsMTAwKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLmFkZChiYXNlU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLmFkZChpY29uU3ByaXRlKTtcblxuICAgICAgICBiYXNlU3ByaXRlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIGJhc2VTcHJpdGUub24oJ3BvaW50ZXJkb3duJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnb3Blbi1wYW5lbCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBiYXNlU3ByaXRlLm9uKCdwb2ludGVyb3ZlcicsKCk9PntcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRTY2FsZSgxLjA1KTtcbiAgICAgICAgfSx0aGlzKTtcblxuICAgICAgICBiYXNlU3ByaXRlLm9uKCdwb2ludGVyb3V0JywoKT0+e1xuICAgICAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLnNldFNjYWxlKDEpO1xuICAgICAgICB9LHRoaXMpO1xuXG4gICAgICAgIHRoaXMudHdlZW5QdWxzZSA9IHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5idXR0b25TZWxlY3RDYXJkLFxuICAgICAgICAgICAgc2NhbGU6IDEuMDUsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICAgIHlveW86IHRydWVcbiAgICAgICAgfSkucGF1c2UoKTtcblxuICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5ub0NhcmREaXNwbGF5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYnV0dG9uU2VsZWN0Q2FyZCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIubmFtZSA9ICdNYWluQ2lyY2xlJ1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG5cblxuICAgICAgICBpZiggdGhpcy50d2VlblB1bHNlICl7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuUHVsc2UucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCB2b2NhYjpWb2NhYiApe1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRDYXJkKCk7XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVm9jYWIgPSBuZXcgVm9jYWJDYXJkKHRoaXMuc2NlbmUsMCwwLDI1MCxWb2NhYkNhcmQuY2FsY3VsYXRlSGVpZ2h0KDI1MCksdm9jYWIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5zZWxlY3RlZFZvY2FiLmNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYoIHRoaXMudHdlZW5QdWxzZSApe1xuICAgICAgICAgICAgdGhpcy50d2VlblB1bHNlLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuUHVsc2UucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4aXRGb3JnZSgpe1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlSW50ZXJhY3RpdmUoKTtcblxuICAgICAgICB0aGlzLnJlbW92ZURyYWdEcm9wTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBlbnRlckZvcmdlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0SW50ZXJhY3RpdmUobmV3IFBoYXNlci5HZW9tLkNpcmNsZSgwLDAsdGhpcy5yYWRpdXMrNTApLFBoYXNlci5HZW9tLkNpcmNsZS5Db250YWlucyx0cnVlKTtcbiAgICAgICAgdGhpcy5hZGREcmFnRHJvcExpc3RlbmVyKCk7XG5cbiAgICAgICAgLy8gdGhpcy5zY2VuZS5pbnB1dC5lbmFibGVEZWJ1Zyh0aGlzLmNvbnRhaW5lciwweDAwZmYwMCk7XG4gICAgfVxuXG4gICAgYWRkRHJhZ0Ryb3BMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbiAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZU9iamVjdC5zZXREZXB0aCg5OTkpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnksIGRyYWdYOm51bWJlciwgZHJhZ1k6IG51bWJlcikgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcm9wJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnksIHRhcmdldDogYW55KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBpZiggdGFyZ2V0Lm5hbWUgPT0gJ01haW5DaXJjbGUnICl7XG4gICAgICAgICAgICAgICAgbGV0IGlzQ29ycmVjdDpib29sZWFuID0gdGhpcy5zY2VuZS5tYW5hZ2VyLmNoZWNrQW5zd2VyKGdhbWVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmKCBpc0NvcnJlY3QgKSB0aGlzLnNob3dTdWNjZXNzRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuc2hvd0ZhaWxlZEZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJvcHBlZDpib29sZWFuKSA9PlxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmICghZHJvcHBlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBnYW1lT2JqZWN0LmlucHV0LmRyYWdTdGFydFg7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZ2FtZU9iamVjdC5pbnB1dC5kcmFnU3RhcnRZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgc2hvd1N1Y2Nlc3NGZWVkYmFjaygpe1xuICAgICAgICBsZXQgc3VjY2VzczogZm9yZ2VGZWVkYmFja1N1Y2Nlc3MgPSBuZXcgZm9yZ2VGZWVkYmFja1N1Y2Nlc3ModGhpcy5zY2VuZSx0aGlzLm9yaVgsdGhpcy5vcmlZKTtcbiAgICB9XG5cbiAgICBzaG93RmFpbGVkRmVlZGJhY2soKXtcbiAgICAgICAgbGV0IGZhaWxlZDogRm9yZ2VGZWVkYmFja0ZhaWxlZCA9IG5ldyBGb3JnZUZlZWRiYWNrRmFpbGVkKHRoaXMuc2NlbmUsdGhpcy5vcmlYLHRoaXMub3JpWSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRHJhZ0Ryb3BMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnJlbW92ZUxpc3RlbmVyKCdkcmFnc3RhcnQnKTtcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5yZW1vdmVMaXN0ZW5lcignZHJhZycpO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnJlbW92ZUxpc3RlbmVyKCdkcmFnZW5kJyk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2Ryb3AnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JOZXh0KCl7XG4gICAgICAgIFxuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIlZvY2FiQ2FyZCIsIkZvcmdlRmVlZGJhY2tGYWlsZWQiLCJmb3JnZUZlZWRiYWNrU3VjY2VzcyIsIkZvcmdlTWFpbkNpcmNsZSIsInByZWxvYWQiLCJzY2VuZSIsImNsZWFyU2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRWb2NhYiIsImNsZWFuIiwibm9DYXJkRGlzcGxheSIsInNldFZpc2libGUiLCJ0d2VlblB1bHNlIiwicGxheSIsInJlbmRlclNlbGVjdGVkQ2FyZCIsInZvY2FiIiwiY2FsY3VsYXRlSGVpZ2h0IiwiY29udGFpbmVyIiwiYWRkIiwicGF1c2UiLCJyZXNldCIsImV4aXRGb3JnZSIsImJ1dHRvblNlbGVjdENhcmQiLCJyZW1vdmVJbnRlcmFjdGl2ZSIsInJlbW92ZURyYWdEcm9wTGlzdGVuZXIiLCJlbnRlckZvcmdlIiwic2V0SW50ZXJhY3RpdmUiLCJQaGFzZXIiLCJHZW9tIiwiQ2lyY2xlIiwicmFkaXVzIiwiQ29udGFpbnMiLCJhZGREcmFnRHJvcExpc3RlbmVyIiwiaW5wdXQiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0Iiwic2V0RGVwdGgiLCJkcmFnWCIsImRyYWdZIiwieCIsInkiLCJ0YXJnZXQiLCJuYW1lIiwiaXNDb3JyZWN0IiwibWFuYWdlciIsImNoZWNrQW5zd2VyIiwic2hvd1N1Y2Nlc3NGZWVkYmFjayIsInNob3dGYWlsZWRGZWVkYmFjayIsImRlc3Ryb3kiLCJkcm9wcGVkIiwiZHJhZ1N0YXJ0WCIsImRyYWdTdGFydFkiLCJzdWNjZXNzIiwib3JpWCIsIm9yaVkiLCJmYWlsZWQiLCJyZW1vdmVMaXN0ZW5lciIsInVwZGF0ZUZvck5leHQiLCJjb25zdHJ1Y3RvciIsImNvbG9yTGlnaHQiLCJjb2xvckRhcmsiLCJjb2xvckRhcmtlciIsInBhbmVsQmFzZSIsIm5pbmVzbGljZSIsInNldFRpbnQiLCJ0aGlja25lc3MiLCJvdXRlckNpcmNsZSIsImNpcmNsZSIsInNldFN0cm9rZVN0eWxlIiwiaW5uZXJDaXJjbGUiLCJhbnZpbENhcmRTbG90Iiwic3ByaXRlIiwic2V0RGlzcGxheVNpemUiLCJ0ZXh0IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJzZXRPcmlnaW4iLCJxdWF0ZXJYIiwiYmFzZVNwcml0ZSIsImljb25TcHJpdGUiLCJldmVudHMiLCJlbWl0Iiwic2V0U2NhbGUiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwic2NhbGUiLCJkdXJhdGlvbiIsInJlcGVhdCIsInlveW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMainCircle.ts\n"));

/***/ })

});