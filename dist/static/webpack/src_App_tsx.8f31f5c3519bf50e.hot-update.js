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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMainCircle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelSelectCard/VocabCard */ \"./src/game/components/CardMaker/PanelSelectCard/VocabCard.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n/* harmony import */ var _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForgeFeedbackFailed */ \"./src/game/components/CardMaker/ForgeFeedbackFailed.ts\");\n/* harmony import */ var _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ForgeFeedbackSuccess */ \"./src/game/components/CardMaker/ForgeFeedbackSuccess.ts\");\n\n\n\n\n\nclass ForgeMainCircle {\n    static preload(scene) {}\n    clearSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n        this.noCardDisplay.setVisible(true);\n    }\n    renderSelectedCard(vocab) {\n        this.clearSelectedCard();\n        this.noCardDisplay.setVisible(false);\n        this.selectedVocab = new _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 0, 0, 250, _PanelSelectCard_VocabCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].calculateHeight(250), vocab);\n        this.container.add(this.selectedVocab.container);\n    }\n    exitForge() {\n        this.buttonSelectCard.setVisible(true);\n        this.container.removeInteractive();\n        this.removeDragDropListener();\n    }\n    enterForge() {\n        this.buttonSelectCard.setVisible(false);\n        this.container.setInteractive(new Phaser.Geom.Circle(0, 0, this.radius + 50), Phaser.Geom.Circle.Contains, true);\n        this.addDragDropListener();\n    // this.scene.input.enableDebug(this.container,0x00ff00);\n    }\n    addDragDropListener() {\n        this.scene.input.on(\"dragstart\", function(pointer, gameObject) {\n            gameObject.setDepth(999);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            if (target.name == \"MainCircle\") {\n                let isCorrect = this.scene.manager.checkAnswer(gameObject);\n                if (isCorrect) this.showSuccessFeedback();\n                else this.showFailedFeedback();\n                gameObject.destroy();\n            }\n        });\n        this.scene.input.on(\"dragend\", (pointer, gameObject, dropped)=>{\n            if (!dropped) {\n                gameObject.x = gameObject.input.dragStartX;\n                gameObject.y = gameObject.input.dragStartY;\n            }\n        });\n    }\n    showSuccessFeedback() {\n        let success = new _ForgeFeedbackSuccess__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    showFailedFeedback() {\n        let failed = new _ForgeFeedbackFailed__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX, this.oriY);\n    }\n    removeDragDropListener() {\n        this.scene.input.removeListener(\"dragstart\");\n        this.scene.input.removeListener(\"drag\");\n        this.scene.input.removeListener(\"dragend\");\n        this.scene.input.removeListener(\"drop\");\n    }\n    constructor(scene, x, y){\n        //\n        this.radius = 250;\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        const thickness = 15;\n        this.outerCircle = scene.add.circle(0, 0, this.radius, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerCircle = scene.add.circle(0, 0, this.radius - thickness, 0xffffff);\n        this.noCardDisplay = this.scene.add.text(0, 0, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](scene, this.radius - thickness / 2, 0, \"buttonCardSelect\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            this.scene.events.emit(\"open-panel\");\n        };\n        this.container.add(this.outerCircle);\n        this.container.add(this.innerCircle);\n        this.container.add(this.noCardDisplay);\n        this.container.add(this.buttonSelectCard);\n        this.container.name = \"MainCircle\";\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21DO0FBRWdCO0FBQ0s7QUFFRDtBQUNFO0FBRTFDLE1BQU1LO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQThDQUMsb0JBQW1CO1FBQ2YsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDQSxhQUFhLENBQUNDLEtBQUs7WUFDeEIsSUFBSSxDQUFDRCxhQUFhLEdBQUc7UUFDekI7UUFFQSxJQUFJLENBQUNFLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO0lBQ2xDO0lBRUFDLG1CQUFvQkMsS0FBVyxFQUFFO1FBQzdCLElBQUksQ0FBQ04saUJBQWlCO1FBRXRCLElBQUksQ0FBQ0csYUFBYSxDQUFDQyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDSCxhQUFhLEdBQUcsSUFBSVIsa0VBQVNBLENBQUMsSUFBSSxDQUFDTSxLQUFLLEVBQUMsR0FBRSxHQUFFLEtBQUlOLGtGQUF5QixDQUFDLE1BQUthO1FBQ3JGLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUixhQUFhLENBQUNPLFNBQVM7SUFDbkQ7SUFFQUUsWUFBVztRQUNQLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNQLFVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUNJLFNBQVMsQ0FBQ0ksaUJBQWlCO1FBRWhDLElBQUksQ0FBQ0Msc0JBQXNCO0lBQy9CO0lBRUFDLGFBQVk7UUFDUixJQUFJLENBQUNILGdCQUFnQixDQUFDUCxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDSSxTQUFTLENBQUNPLGNBQWMsQ0FBQyxJQUFJQyxPQUFPQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxHQUFFLEdBQUUsSUFBSSxDQUFDQyxNQUFNLEdBQUMsS0FBSUgsT0FBT0MsSUFBSSxDQUFDQyxNQUFNLENBQUNFLFFBQVEsRUFBQztR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U0FBUyxDQUFDLEtBQUksS0FBS3JELFVBQVUsQ0FBQztRQUVqQyxJQUFJLENBQUNPLGdCQUFnQixHQUFHLElBQUlqQixvRUFBWUEsQ0FBQ0ssT0FBTSxJQUFJLENBQUNvQixNQUFNLEdBQUM2QixZQUFVLEdBQUUsR0FBRTtRQUN6RSxJQUFJLENBQUNyQyxnQkFBZ0IsQ0FBQytDLGlCQUFpQixHQUFHO1lBQ3RDLElBQUksQ0FBQzNELEtBQUssQ0FBQzRELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1FBQzNCO1FBRUEsSUFBSSxDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDd0MsV0FBVztRQUNuQyxJQUFJLENBQUN6QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMyQyxXQUFXO1FBQ25DLElBQUksQ0FBQzVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sYUFBYTtRQUNyQyxJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0UsZ0JBQWdCO1FBRXhDLElBQUksQ0FBQ0gsU0FBUyxDQUFDd0IsSUFBSSxHQUFHO0lBQzFCO0FBbUZKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VNYWluQ2lyY2xlLnRzPzgxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZE1ha2VyIH0gZnJvbSBcIkAvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyXCJcbmltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IFZvY2FiQ2FyZCBmcm9tIFwiLi9QYW5lbFNlbGVjdENhcmQvVm9jYWJDYXJkXCJcbmltcG9ydCBTcHJpdGVCdXR0b24gZnJvbSBcIkAvbGliL2NvbXBvbmVudHMvU3ByaXRlQnV0dG9uXCJcbmltcG9ydCB7IFZvY2FiIH0gZnJvbSBcIkAvbGliL3JlcG9zL0RlY2tSZXBvXCJcbmltcG9ydCBGb3JnZUZlZWRiYWNrRmFpbGVkIGZyb20gXCIuL0ZvcmdlRmVlZGJhY2tGYWlsZWRcIlxuaW1wb3J0IGZvcmdlRmVlZGJhY2tTdWNjZXNzIGZyb20gXCIuL0ZvcmdlRmVlZGJhY2tTdWNjZXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VNYWluQ2lyY2xle1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IENhcmRNYWtlclxuICAgIG9yaVg6IG51bWJlclxuICAgIG9yaVk6IG51bWJlclxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBvdXRlckNpcmNsZTogR2FtZU9iamVjdHMuQXJjXG4gICAgaW5uZXJDaXJjbGU6IEdhbWVPYmplY3RzLkFyY1xuICAgIC8vXG4gICAgbm9DYXJkRGlzcGxheTogR2FtZU9iamVjdHMuVGV4dFxuICAgIHNlbGVjdGVkVm9jYWI6IFZvY2FiQ2FyZCB8IG51bGxcbiAgICBidXR0b25TZWxlY3RDYXJkOiBTcHJpdGVCdXR0b25cbiAgICAvL1xuICAgIHJhZGl1czpudW1iZXIgPSAyNTBcblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6IG51bWJlciwgeTogbnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzczpudW1iZXIgPSAxNTtcbiAgICAgICAgdGhpcy5vdXRlckNpcmNsZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLHRoaXMucmFkaXVzLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgdGhpcy5pbm5lckNpcmNsZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLHRoaXMucmFkaXVzLXRoaWNrbmVzcywweGZmZmZmZik7XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLDAsJz8nLHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzAwcHgnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2MwYzBjMCcsXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsMC41KS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQgPSBuZXcgU3ByaXRlQnV0dG9uKHNjZW5lLHRoaXMucmFkaXVzLXRoaWNrbmVzcy8yLDAsJ2J1dHRvbkNhcmRTZWxlY3QnKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ29wZW4tcGFuZWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyQ2lyY2xlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaW5uZXJDaXJjbGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5ub0NhcmREaXNwbGF5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYnV0dG9uU2VsZWN0Q2FyZCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIubmFtZSA9ICdNYWluQ2lyY2xlJ1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCB2b2NhYjpWb2NhYiApe1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRDYXJkKCk7XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVm9jYWIgPSBuZXcgVm9jYWJDYXJkKHRoaXMuc2NlbmUsMCwwLDI1MCxWb2NhYkNhcmQuY2FsY3VsYXRlSGVpZ2h0KDI1MCksdm9jYWIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5zZWxlY3RlZFZvY2FiLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZXhpdEZvcmdlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVJbnRlcmFjdGl2ZSgpO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0Ryb3BMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGVudGVyRm9yZ2UoKXtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZShuZXcgUGhhc2VyLkdlb20uQ2lyY2xlKDAsMCx0aGlzLnJhZGl1cys1MCksUGhhc2VyLkdlb20uQ2lyY2xlLkNvbnRhaW5zLHRydWUpO1xuICAgICAgICB0aGlzLmFkZERyYWdEcm9wTGlzdGVuZXIoKTtcblxuICAgICAgICAvLyB0aGlzLnNjZW5lLmlucHV0LmVuYWJsZURlYnVnKHRoaXMuY29udGFpbmVyLDB4MDBmZjAwKTtcbiAgICB9XG5cbiAgICBhZGREcmFnRHJvcExpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIGZ1bmN0aW9uIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnNldERlcHRoKDk5OSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJhZ1g6bnVtYmVyLCBkcmFnWTogbnVtYmVyKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2Ryb3AnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgdGFyZ2V0OiBhbnkpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQubmFtZSA9PSAnTWFpbkNpcmNsZScgKXtcbiAgICAgICAgICAgICAgICBsZXQgaXNDb3JyZWN0OmJvb2xlYW4gPSB0aGlzLnNjZW5lLm1hbmFnZXIuY2hlY2tBbnN3ZXIoZ2FtZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYoIGlzQ29ycmVjdCApIHRoaXMuc2hvd1N1Y2Nlc3NGZWVkYmFjaygpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zaG93RmFpbGVkRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcm9wcGVkOmJvb2xlYW4pID0+XG4gICAgICAgIHtcblxuICAgICAgICAgICAgaWYgKCFkcm9wcGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGdhbWVPYmplY3QuaW5wdXQuZHJhZ1N0YXJ0WDtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBnYW1lT2JqZWN0LmlucHV0LmRyYWdTdGFydFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzaG93U3VjY2Vzc0ZlZWRiYWNrKCl7XG4gICAgICAgIGxldCBzdWNjZXNzOiBmb3JnZUZlZWRiYWNrU3VjY2VzcyA9IG5ldyBmb3JnZUZlZWRiYWNrU3VjY2Vzcyh0aGlzLnNjZW5lLHRoaXMub3JpWCx0aGlzLm9yaVkpO1xuICAgIH1cblxuICAgIHNob3dGYWlsZWRGZWVkYmFjaygpe1xuICAgICAgICBsZXQgZmFpbGVkOiBGb3JnZUZlZWRiYWNrRmFpbGVkID0gbmV3IEZvcmdlRmVlZGJhY2tGYWlsZWQodGhpcy5zY2VuZSx0aGlzLm9yaVgsdGhpcy5vcmlZKTtcbiAgICB9XG5cbiAgICByZW1vdmVEcmFnRHJvcExpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RyYWdzdGFydCcpO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnJlbW92ZUxpc3RlbmVyKCdkcmFnJyk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RyYWdlbmQnKTtcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5yZW1vdmVMaXN0ZW5lcignZHJvcCcpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIlZvY2FiQ2FyZCIsIlNwcml0ZUJ1dHRvbiIsIkZvcmdlRmVlZGJhY2tGYWlsZWQiLCJmb3JnZUZlZWRiYWNrU3VjY2VzcyIsIkZvcmdlTWFpbkNpcmNsZSIsInByZWxvYWQiLCJzY2VuZSIsImNsZWFyU2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRWb2NhYiIsImNsZWFuIiwibm9DYXJkRGlzcGxheSIsInNldFZpc2libGUiLCJyZW5kZXJTZWxlY3RlZENhcmQiLCJ2b2NhYiIsImNhbGN1bGF0ZUhlaWdodCIsImNvbnRhaW5lciIsImFkZCIsImV4aXRGb3JnZSIsImJ1dHRvblNlbGVjdENhcmQiLCJyZW1vdmVJbnRlcmFjdGl2ZSIsInJlbW92ZURyYWdEcm9wTGlzdGVuZXIiLCJlbnRlckZvcmdlIiwic2V0SW50ZXJhY3RpdmUiLCJQaGFzZXIiLCJHZW9tIiwiQ2lyY2xlIiwicmFkaXVzIiwiQ29udGFpbnMiLCJhZGREcmFnRHJvcExpc3RlbmVyIiwiaW5wdXQiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0Iiwic2V0RGVwdGgiLCJkcmFnWCIsImRyYWdZIiwieCIsInkiLCJ0YXJnZXQiLCJuYW1lIiwiaXNDb3JyZWN0IiwibWFuYWdlciIsImNoZWNrQW5zd2VyIiwic2hvd1N1Y2Nlc3NGZWVkYmFjayIsInNob3dGYWlsZWRGZWVkYmFjayIsImRlc3Ryb3kiLCJkcm9wcGVkIiwiZHJhZ1N0YXJ0WCIsImRyYWdTdGFydFkiLCJzdWNjZXNzIiwib3JpWCIsIm9yaVkiLCJmYWlsZWQiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnN0cnVjdG9yIiwidGhpY2tuZXNzIiwib3V0ZXJDaXJjbGUiLCJjaXJjbGUiLCJjb2xvclBhbmVsQmciLCJpbm5lckNpcmNsZSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsInNldE9yaWdpbiIsIm9uUHJlc3NlZENhbGxiYWNrIiwiZXZlbnRzIiwiZW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMainCircle.ts\n"));

/***/ })

});