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

/***/ "./src/game/components/CardMaker/ForgeBottomContainer.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeBottomContainer.ts ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBottomContainer; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgeMaterialImage */ \"./src/game/components/CardMaker/ForgeMaterialImage.ts\");\n/* harmony import */ var _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgeMaterialText */ \"./src/game/components/CardMaker/ForgeMaterialText.ts\");\n/* harmony import */ var _ForgeMaterialAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForgeMaterialAudio */ \"./src/game/components/CardMaker/ForgeMaterialAudio.ts\");\n\n\n\n\nclass ForgeBottomContainer {\n    static preload(scene) {}\n    enter() {\n        this.clearChoices();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500,\n            onComplete: ()=>{\n                this.generateNext();\n            }\n        });\n    }\n    exit() {\n        this.clearChoices();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY + 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    clearChoices() {\n        this.choices.forEach((choice)=>{\n            choice.destroy();\n        });\n        this.choices = [];\n    }\n    generateNext() {\n        this.clearChoices();\n        if (this.manager.currentText >= this.manager.targetText) {\n            this.generateAudioChoices();\n        } else if (this.manager.currentImage >= this.manager.targetImage) {\n            this.generateTextChoices();\n        } else {\n            this.generateImageChoices();\n        }\n    }\n    generateImageChoices() {\n        let vocabs = this.manager.generateChoices();\n        if (vocabs.length == 4) {\n            let imageChoice1 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY - this.gapY, vocabs[0]);\n            let imageChoice2 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY - this.gapY, vocabs[1]);\n            let imageChoice3 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY + this.gapY, vocabs[2]);\n            let imageChoice4 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY + this.gapY, vocabs[3]);\n            this.choices.push(imageChoice1.container);\n            this.choices.push(imageChoice2.container);\n            this.choices.push(imageChoice3.container);\n            this.choices.push(imageChoice4.container);\n        }\n    }\n    generateTextChoices() {\n        let vocabs = this.manager.generateChoices();\n        if (vocabs.length == 4) {\n            let choice1 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY - this.gapY * 1.5, vocabs[0]);\n            let choice2 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY - this.gapY * 0.5, vocabs[1]);\n            let choice3 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY + this.gapY * 0.5, vocabs[2]);\n            let choice4 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX, this.oriY + this.gapY * 1, 5, vocabs[3]);\n            this.choices.push(choice1.container);\n            this.choices.push(choice2.container);\n            this.choices.push(choice3.container);\n            this.choices.push(choice4.container);\n        }\n    }\n    generateAudioChoices() {\n        let vocabs = this.manager.generateChoices();\n        if (vocabs.length == 4) {\n            let choice1 = new _ForgeMaterialAudio__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY - this.gapY, vocabs[0]);\n            let choice2 = new _ForgeMaterialAudio__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY - this.gapY, vocabs[1]);\n            let choice3 = new _ForgeMaterialAudio__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY + this.gapY, vocabs[2]);\n            let choice4 = new _ForgeMaterialAudio__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY + this.gapY, vocabs[3]);\n            this.choices.push(choice1.container);\n            this.choices.push(choice2.container);\n            this.choices.push(choice3.container);\n            this.choices.push(choice4.container);\n        }\n    }\n    constructor(scene, x, y){\n        this.choices = [];\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        const padding = 15;\n        this.gapX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 4 - padding * 2;\n        this.gapY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 8 - padding * 2;\n        this.container = scene.add.container(x, y);\n        this.outerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark);\n        // Drop Zone\n        // this.innerRect.setInteractive(undefined,undefined,true);\n        this.container.add(this.outerRect);\n        this.container.add(this.innerRect);\n        // Move container to out of screen\n        this.container.y += 1000;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtQztBQUlrQjtBQUNGO0FBQ0U7QUFFdEMsTUFBTUk7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBeUNBQyxRQUFPO1FBQ0gsSUFBSSxDQUFDQyxZQUFZO1FBRWpCLGdCQUFnQjtRQUNoQixJQUFJLENBQUNGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxHQUFHLENBQUM7WUFDbEJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTO1lBQ3ZCQyxHQUFHLElBQUksQ0FBQ0MsSUFBSTtZQUNaQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsWUFBVztnQkFDUixJQUFJLENBQUNDLFlBQVk7WUFDcEI7UUFDSjtJQUNKO0lBRUFDLE9BQU07UUFDRixJQUFJLENBQUNYLFlBQVk7UUFFakIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJLEdBQUM7WUFDYkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBUixlQUFjO1FBQ1YsSUFBSSxDQUFDWSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFDQztZQUNsQkEsT0FBT0MsT0FBTztRQUNsQjtRQUNBLElBQUksQ0FBQ0gsT0FBTyxHQUFHLEVBQUU7SUFDckI7SUFFQUYsZUFBYztRQUNWLElBQUksQ0FBQ1YsWUFBWTtRQUVqQixJQUFJLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQ0MsV0FBVyxJQUFJLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxVQUFVLEVBQUU7WUFDckQsSUFBSSxDQUFDQyxvQkFBb0I7UUFDN0IsT0FBTSxJQUFJLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxZQUFZLElBQUksSUFBSSxDQUFDSixPQUFPLENBQUNLLFdBQVcsRUFB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QUFDRixHQUFHLENBQUMsSUFBSSxDQUFDOEMsU0FBUztRQUVqQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDNUMsU0FBUyxDQUFDQyxDQUFDLElBQUk7SUFDeEI7QUErRko7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cz9hMmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSBcIi4vQ2FyZE1ha2VyTWFuYWdlclwiXG5pbXBvcnQgeyBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgRm9yZ2VNYXRlcmlhbEltYWdlIGZyb20gXCIuL0ZvcmdlTWF0ZXJpYWxJbWFnZVwiXG5pbXBvcnQgRm9yZ2VNYXRlcmlhbFRleHQgZnJvbSBcIi4vRm9yZ2VNYXRlcmlhbFRleHRcIlxuaW1wb3J0IEZvcmdlTWF0ZXJpYWxBdWRpbyBmcm9tIFwiLi9Gb3JnZU1hdGVyaWFsQXVkaW9cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJvdHRvbUNvbnRhaW5lcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGlubmVyUmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgb3V0ZXJSZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIGdhcFg6IG51bWJlciAgXG4gICAgZ2FwWTogbnVtYmVyXG4gICAgY2hvaWNlczogR2FtZU9iamVjdHMuQ29udGFpbmVyW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBzY2VuZS5tYW5hZ2VyO1xuICAgICAgICB0aGlzLm9yaVggPSB4O1xuICAgICAgICB0aGlzLm9yaVkgPSB5O1xuICAgICAgICBjb25zdCBwYWRkaW5nOm51bWJlciA9IDE1O1xuICAgICAgICB0aGlzLmdhcFggPSBHYW1lTGliLnNjcmVlbldpZHRoLzQtcGFkZGluZyoyO1xuICAgICAgICB0aGlzLmdhcFkgPSBHYW1lTGliLnNjcmVlbkhlaWdodC84LXBhZGRpbmcqMjtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3V0ZXJSZWN0ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsR2FtZUxpYi5zY3JlZW5XaWR0aCxHYW1lTGliLm1pZFksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbm5lclJlY3QgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCxHYW1lTGliLnNjcmVlbldpZHRoLXBhZGRpbmcqMixHYW1lTGliLm1pZFktcGFkZGluZyoyLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG4gICAgICAgIFxuICAgICAgICAvLyBEcm9wIFpvbmVcbiAgICAgICAgLy8gdGhpcy5pbm5lclJlY3Quc2V0SW50ZXJhY3RpdmUodW5kZWZpbmVkLHVuZGVmaW5lZCx0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyUmVjdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyUmVjdCk7XG5cbiAgICAgICAgLy8gTW92ZSBjb250YWluZXIgdG8gb3V0IG9mIHNjcmVlblxuICAgICAgICB0aGlzLmNvbnRhaW5lci55ICs9IDEwMDA7XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgdGhpcy5jbGVhckNob2ljZXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFByZXBhcmUgVHdlZW5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgeTogdGhpcy5vcmlZLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHQoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXQoKXtcbiAgICAgICAgdGhpcy5jbGVhckNob2ljZXMoKTtcblxuICAgICAgICAvLyBQcmVwYXJlIFR3ZWVuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHk6IHRoaXMub3JpWSsxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyQ2hvaWNlcygpe1xuICAgICAgICB0aGlzLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKT0+e1xuICAgICAgICAgICAgY2hvaWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV4dCgpe1xuICAgICAgICB0aGlzLmNsZWFyQ2hvaWNlcygpO1xuXG4gICAgICAgIGlmKCB0aGlzLm1hbmFnZXIuY3VycmVudFRleHQgPj0gdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQgKXtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdWRpb0Nob2ljZXMoKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubWFuYWdlci5jdXJyZW50SW1hZ2UgPj0gdGhpcy5tYW5hZ2VyLnRhcmdldEltYWdlICl7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlVGV4dENob2ljZXMoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSW1hZ2VDaG9pY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUltYWdlQ2hvaWNlcygpe1xuICAgICAgICBsZXQgdm9jYWJzOlZvY2FiW10gPSB0aGlzLm1hbmFnZXIuZ2VuZXJhdGVDaG9pY2VzKCk7XG5cbiAgICAgICAgaWYoIHZvY2Ficy5sZW5ndGggPT0gNCApe1xuICAgICAgICAgICAgbGV0IGltYWdlQ2hvaWNlMTpGb3JnZU1hdGVyaWFsSW1hZ2UgPSBuZXcgRm9yZ2VNYXRlcmlhbEltYWdlKHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1swXSk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2UyOkZvcmdlTWF0ZXJpYWxJbWFnZSA9IG5ldyBGb3JnZU1hdGVyaWFsSW1hZ2UodGhpcy5zY2VuZSx0aGlzLm9yaVgrdGhpcy5nYXBYLHRoaXMub3JpWS10aGlzLmdhcFksdm9jYWJzWzFdKTtcbiAgICAgICAgICAgIGxldCBpbWFnZUNob2ljZTM6Rm9yZ2VNYXRlcmlhbEltYWdlID0gbmV3IEZvcmdlTWF0ZXJpYWxJbWFnZSh0aGlzLnNjZW5lLHRoaXMub3JpWC10aGlzLmdhcFgsdGhpcy5vcmlZK3RoaXMuZ2FwWSx2b2NhYnNbMl0pO1xuICAgICAgICAgICAgbGV0IGltYWdlQ2hvaWNlNDpGb3JnZU1hdGVyaWFsSW1hZ2UgPSBuZXcgRm9yZ2VNYXRlcmlhbEltYWdlKHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1szXSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTEuY29udGFpbmVyICk7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggaW1hZ2VDaG9pY2UyLmNvbnRhaW5lciApO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goIGltYWdlQ2hvaWNlMy5jb250YWluZXIgKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTQuY29udGFpbmVyICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVRleHRDaG9pY2VzKCl7XG4gICAgICAgIGxldCB2b2NhYnM6Vm9jYWJbXSA9IHRoaXMubWFuYWdlci5nZW5lcmF0ZUNob2ljZXMoKTtcblxuICAgICAgICBpZiggdm9jYWJzLmxlbmd0aCA9PSA0ICl7XG4gICAgICAgICAgICBsZXQgY2hvaWNlMTpGb3JnZU1hdGVyaWFsVGV4dCA9IG5ldyBGb3JnZU1hdGVyaWFsVGV4dCh0aGlzLnNjZW5lLHRoaXMub3JpWCx0aGlzLm9yaVktdGhpcy5nYXBZKjEuNSx2b2NhYnNbMF0pO1xuICAgICAgICAgICAgbGV0IGNob2ljZTI6Rm9yZ2VNYXRlcmlhbFRleHQgPSBuZXcgRm9yZ2VNYXRlcmlhbFRleHQodGhpcy5zY2VuZSx0aGlzLm9yaVgsdGhpcy5vcmlZLXRoaXMuZ2FwWSowLjUsdm9jYWJzWzFdKTtcbiAgICAgICAgICAgIGxldCBjaG9pY2UzOkZvcmdlTWF0ZXJpYWxUZXh0ID0gbmV3IEZvcmdlTWF0ZXJpYWxUZXh0KHRoaXMuc2NlbmUsdGhpcy5vcmlYLHRoaXMub3JpWSt0aGlzLmdhcFkqMC41LHZvY2Fic1syXSk7XG4gICAgICAgICAgICBsZXQgY2hvaWNlNDpGb3JnZU1hdGVyaWFsVGV4dCA9IG5ldyBGb3JnZU1hdGVyaWFsVGV4dCh0aGlzLnNjZW5lLHRoaXMub3JpWCx0aGlzLm9yaVkrdGhpcy5nYXBZKjEsNSx2b2NhYnNbM10pO1xuXG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggY2hvaWNlMS5jb250YWluZXIgKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBjaG9pY2UyLmNvbnRhaW5lciApO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goIGNob2ljZTMuY29udGFpbmVyICk7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggY2hvaWNlNC5jb250YWluZXIgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlQXVkaW9DaG9pY2VzKCl7XG4gICAgICAgIGxldCB2b2NhYnM6Vm9jYWJbXSA9IHRoaXMubWFuYWdlci5nZW5lcmF0ZUNob2ljZXMoKTtcblxuICAgICAgICBpZiggdm9jYWJzLmxlbmd0aCA9PSA0ICl7XG4gICAgICAgICAgICBsZXQgY2hvaWNlMTpGb3JnZU1hdGVyaWFsQXVkaW8gPSBuZXcgRm9yZ2VNYXRlcmlhbEF1ZGlvKHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1swXSk7XG4gICAgICAgICAgICBsZXQgY2hvaWNlMjpGb3JnZU1hdGVyaWFsQXVkaW8gPSBuZXcgRm9yZ2VNYXRlcmlhbEF1ZGlvKHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1sxXSk7XG4gICAgICAgICAgICBsZXQgY2hvaWNlMzpGb3JnZU1hdGVyaWFsQXVkaW8gPSBuZXcgRm9yZ2VNYXRlcmlhbEF1ZGlvKHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1syXSk7XG4gICAgICAgICAgICBsZXQgY2hvaWNlNDpGb3JnZU1hdGVyaWFsQXVkaW8gPSBuZXcgRm9yZ2VNYXRlcmlhbEF1ZGlvKHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1szXSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBjaG9pY2UxLmNvbnRhaW5lciApO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goIGNob2ljZTIuY29udGFpbmVyICk7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggY2hvaWNlMy5jb250YWluZXIgKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBjaG9pY2U0LmNvbnRhaW5lciApO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiRm9yZ2VNYXRlcmlhbEltYWdlIiwiRm9yZ2VNYXRlcmlhbFRleHQiLCJGb3JnZU1hdGVyaWFsQXVkaW8iLCJGb3JnZUJvdHRvbUNvbnRhaW5lciIsInByZWxvYWQiLCJzY2VuZSIsImVudGVyIiwiY2xlYXJDaG9pY2VzIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsInkiLCJvcmlZIiwiZWFzZSIsImR1cmF0aW9uIiwib25Db21wbGV0ZSIsImdlbmVyYXRlTmV4dCIsImV4aXQiLCJjaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImRlc3Ryb3kiLCJtYW5hZ2VyIiwiY3VycmVudFRleHQiLCJ0YXJnZXRUZXh0IiwiZ2VuZXJhdGVBdWRpb0Nob2ljZXMiLCJjdXJyZW50SW1hZ2UiLCJ0YXJnZXRJbWFnZSIsImdlbmVyYXRlVGV4dENob2ljZXMiLCJnZW5lcmF0ZUltYWdlQ2hvaWNlcyIsInZvY2FicyIsImdlbmVyYXRlQ2hvaWNlcyIsImxlbmd0aCIsImltYWdlQ2hvaWNlMSIsIm9yaVgiLCJnYXBYIiwiZ2FwWSIsImltYWdlQ2hvaWNlMiIsImltYWdlQ2hvaWNlMyIsImltYWdlQ2hvaWNlNCIsInB1c2giLCJjaG9pY2UxIiwiY2hvaWNlMiIsImNob2ljZTMiLCJjaG9pY2U0IiwiY29uc3RydWN0b3IiLCJ4IiwicGFkZGluZyIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwib3V0ZXJSZWN0IiwicmVjdGFuZ2xlIiwibWlkWSIsImNvbG9yUGFuZWxCZyIsImlubmVyUmVjdCIsImNvbG9yUGFuZWxCZ0RhcmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBottomContainer.ts\n"));

/***/ })

});