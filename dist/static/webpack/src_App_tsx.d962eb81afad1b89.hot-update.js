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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBottomContainer; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgeMaterialImage */ \"./src/game/components/CardMaker/ForgeMaterialImage.ts\");\n/* harmony import */ var _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgeMaterialText */ \"./src/game/components/CardMaker/ForgeMaterialText.ts\");\n\n\n\nclass ForgeBottomContainer {\n    static preload(scene) {}\n    enter() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500,\n            onComplete: ()=>{\n                this.generateNext();\n            }\n        });\n    }\n    exit() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY + 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    generateNext() {\n        this.choices.forEach((choice)=>{\n            choice.destroy();\n        });\n        this.choices = [];\n        if (this.manager.currentText >= this.manager.targetText) {\n            this.generateAudioChoices();\n        } else if (this.manager.currentImage >= this.manager.targetImage) {\n            this.generateTextChoices();\n        } else {\n            this.generateImageChoices();\n        }\n    }\n    generateImageChoices() {\n        let vocabs = this.manager.generateChoices();\n        if (vocabs.length == 4) {\n            let imageChoice1 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY - this.gapY, vocabs[0]);\n            let imageChoice2 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY - this.gapY, vocabs[1]);\n            let imageChoice3 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY + this.gapY, vocabs[2]);\n            let imageChoice4 = new _ForgeMaterialImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY + this.gapY, vocabs[3]);\n            this.choices.push(imageChoice1.container);\n            this.choices.push(imageChoice2.container);\n            this.choices.push(imageChoice3.container);\n            this.choices.push(imageChoice4.container);\n        }\n    }\n    generateTextChoices() {\n        let vocabs = this.manager.generateChoices();\n        if (vocabs.length == 4) {\n            let imageChoice1 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY - this.gapY, vocabs[0]);\n            let imageChoice2 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY - this.gapY, vocabs[1]);\n            let imageChoice3 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX - this.gapX, this.oriY + this.gapY, vocabs[2]);\n            let imageChoice4 = new _ForgeMaterialText__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, this.oriX + this.gapX, this.oriY + this.gapY, vocabs[3]);\n            this.choices.push(imageChoice1.container);\n            this.choices.push(imageChoice2.container);\n            this.choices.push(imageChoice3.container);\n            this.choices.push(imageChoice4.container);\n        }\n    }\n    generateAudioChoices() {}\n    constructor(scene, x, y){\n        this.choices = [];\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        const padding = 15;\n        this.gapX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 4 - padding * 2;\n        this.gapY = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 8 - padding * 2;\n        this.container = scene.add.container(x, y);\n        this.outerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark);\n        // Drop Zone\n        // this.innerRect.setInteractive(undefined,undefined,true);\n        this.container.add(this.outerRect);\n        this.container.add(this.innerRect);\n        // Move container to out of screen\n        this.container.y += 1000;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21DO0FBSWtCO0FBQ0Y7QUFFcEMsTUFBTUc7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBeUNBQyxRQUFPO1FBQ0gsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxZQUFXO2dCQUNSLElBQUksQ0FBQ0MsWUFBWTtZQUNwQjtRQUNKO0lBQ0o7SUFFQUMsT0FBTTtRQUNGLGdCQUFnQjtRQUNoQixJQUFJLENBQUNaLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxHQUFHLENBQUM7WUFDbEJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTO1lBQ3ZCQyxHQUFHLElBQUksQ0FBQ0MsSUFBSSxHQUFDO1lBQ2JDLE1BQU07WUFDTkMsVUFBVTtRQUNkO0lBQ0o7SUFFQUUsZUFBYztRQUNWLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7WUFDbEJBLE9BQU9DLE9BQU87UUFDbEI7UUFDQSxJQUFJLENBQUNILE9BQU8sR0FBRyxFQUFFO1FBRWpCLElBQUksSUFBSSxDQUFDSSxPQUFPLENBQUNDLFdBQVcsSUFBSSxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsVUFBVSxFQUFFO1lBQ3JELElBQUksQ0FBQ0Msb0JBQW9CO1FBQzdCLE9BQU0sSUFBSSxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksWUFBWSxJQUFJLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxXQUFXLEVBQUU7WUFDN0QsSUFBSSxDQUFDQyxtQkFBbUI7UUFDNUIsT0FBSztZQUNELElBQUksQ0FBQ0Msb0JBQW9CO1FBQzdCO0lBQ0o7SUFFQUEsdUJBQXNCO1FBQ2xC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QUFDQyxDQUFDLElBQUk7SUFDeEI7QUEyRUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cz9hMmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IENhcmRNYWtlck1hbmFnZXIgZnJvbSBcIi4vQ2FyZE1ha2VyTWFuYWdlclwiXG5pbXBvcnQgeyBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgRm9yZ2VNYXRlcmlhbEltYWdlIGZyb20gXCIuL0ZvcmdlTWF0ZXJpYWxJbWFnZVwiXG5pbXBvcnQgRm9yZ2VNYXRlcmlhbFRleHQgZnJvbSBcIi4vRm9yZ2VNYXRlcmlhbFRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZUJvdHRvbUNvbnRhaW5lcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBtYW5hZ2VyOiBDYXJkTWFrZXJNYW5hZ2VyXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGlubmVyUmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgb3V0ZXJSZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIGdhcFg6IG51bWJlciAgXG4gICAgZ2FwWTogbnVtYmVyXG4gICAgY2hvaWNlczogR2FtZU9iamVjdHMuQ29udGFpbmVyW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBzY2VuZS5tYW5hZ2VyO1xuICAgICAgICB0aGlzLm9yaVggPSB4O1xuICAgICAgICB0aGlzLm9yaVkgPSB5O1xuICAgICAgICBjb25zdCBwYWRkaW5nOm51bWJlciA9IDE1O1xuICAgICAgICB0aGlzLmdhcFggPSBHYW1lTGliLnNjcmVlbldpZHRoLzQtcGFkZGluZyoyO1xuICAgICAgICB0aGlzLmdhcFkgPSBHYW1lTGliLnNjcmVlbkhlaWdodC84LXBhZGRpbmcqMjtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3V0ZXJSZWN0ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsR2FtZUxpYi5zY3JlZW5XaWR0aCxHYW1lTGliLm1pZFksR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbm5lclJlY3QgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCxHYW1lTGliLnNjcmVlbldpZHRoLXBhZGRpbmcqMixHYW1lTGliLm1pZFktcGFkZGluZyoyLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG4gICAgICAgIFxuICAgICAgICAvLyBEcm9wIFpvbmVcbiAgICAgICAgLy8gdGhpcy5pbm5lclJlY3Quc2V0SW50ZXJhY3RpdmUodW5kZWZpbmVkLHVuZGVmaW5lZCx0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyUmVjdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyUmVjdCk7XG5cbiAgICAgICAgLy8gTW92ZSBjb250YWluZXIgdG8gb3V0IG9mIHNjcmVlblxuICAgICAgICB0aGlzLmNvbnRhaW5lci55ICs9IDEwMDA7XG4gICAgfVxuXG4gICAgZW50ZXIoKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVksXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV4dCgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpdCgpe1xuICAgICAgICAvLyBQcmVwYXJlIFR3ZWVuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHk6IHRoaXMub3JpWSsxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV4dCgpe1xuICAgICAgICB0aGlzLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKT0+e1xuICAgICAgICAgICAgY2hvaWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuXG4gICAgICAgIGlmKCB0aGlzLm1hbmFnZXIuY3VycmVudFRleHQgPj0gdGhpcy5tYW5hZ2VyLnRhcmdldFRleHQgKXtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBdWRpb0Nob2ljZXMoKTtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMubWFuYWdlci5jdXJyZW50SW1hZ2UgPj0gdGhpcy5tYW5hZ2VyLnRhcmdldEltYWdlICl7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlVGV4dENob2ljZXMoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSW1hZ2VDaG9pY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUltYWdlQ2hvaWNlcygpe1xuICAgICAgICBsZXQgdm9jYWJzOlZvY2FiW10gPSB0aGlzLm1hbmFnZXIuZ2VuZXJhdGVDaG9pY2VzKCk7XG5cbiAgICAgICAgaWYoIHZvY2Ficy5sZW5ndGggPT0gNCApe1xuICAgICAgICAgICAgbGV0IGltYWdlQ2hvaWNlMTpGb3JnZU1hdGVyaWFsSW1hZ2UgPSBuZXcgRm9yZ2VNYXRlcmlhbEltYWdlKHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1swXSk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2UyOkZvcmdlTWF0ZXJpYWxJbWFnZSA9IG5ldyBGb3JnZU1hdGVyaWFsSW1hZ2UodGhpcy5zY2VuZSx0aGlzLm9yaVgrdGhpcy5nYXBYLHRoaXMub3JpWS10aGlzLmdhcFksdm9jYWJzWzFdKTtcbiAgICAgICAgICAgIGxldCBpbWFnZUNob2ljZTM6Rm9yZ2VNYXRlcmlhbEltYWdlID0gbmV3IEZvcmdlTWF0ZXJpYWxJbWFnZSh0aGlzLnNjZW5lLHRoaXMub3JpWC10aGlzLmdhcFgsdGhpcy5vcmlZK3RoaXMuZ2FwWSx2b2NhYnNbMl0pO1xuICAgICAgICAgICAgbGV0IGltYWdlQ2hvaWNlNDpGb3JnZU1hdGVyaWFsSW1hZ2UgPSBuZXcgRm9yZ2VNYXRlcmlhbEltYWdlKHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1szXSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTEuY29udGFpbmVyICk7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggaW1hZ2VDaG9pY2UyLmNvbnRhaW5lciApO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goIGltYWdlQ2hvaWNlMy5jb250YWluZXIgKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTQuY29udGFpbmVyICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVRleHRDaG9pY2VzKCl7XG4gICAgICAgIGxldCB2b2NhYnM6Vm9jYWJbXSA9IHRoaXMubWFuYWdlci5nZW5lcmF0ZUNob2ljZXMoKTtcblxuICAgICAgICBpZiggdm9jYWJzLmxlbmd0aCA9PSA0ICl7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2UxOkZvcmdlTWF0ZXJpYWxUZXh0ID0gbmV3IEZvcmdlTWF0ZXJpYWxUZXh0KHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1swXSk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2UyOkZvcmdlTWF0ZXJpYWxUZXh0ID0gbmV3IEZvcmdlTWF0ZXJpYWxUZXh0KHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVktdGhpcy5nYXBZLHZvY2Fic1sxXSk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2UzOkZvcmdlTWF0ZXJpYWxUZXh0ID0gbmV3IEZvcmdlTWF0ZXJpYWxUZXh0KHRoaXMuc2NlbmUsdGhpcy5vcmlYLXRoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1syXSk7XG4gICAgICAgICAgICBsZXQgaW1hZ2VDaG9pY2U0OkZvcmdlTWF0ZXJpYWxUZXh0ID0gbmV3IEZvcmdlTWF0ZXJpYWxUZXh0KHRoaXMuc2NlbmUsdGhpcy5vcmlYK3RoaXMuZ2FwWCx0aGlzLm9yaVkrdGhpcy5nYXBZLHZvY2Fic1szXSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTEuY29udGFpbmVyICk7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXMucHVzaCggaW1hZ2VDaG9pY2UyLmNvbnRhaW5lciApO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goIGltYWdlQ2hvaWNlMy5jb250YWluZXIgKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKCBpbWFnZUNob2ljZTQuY29udGFpbmVyICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUF1ZGlvQ2hvaWNlcygpe1xuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiRm9yZ2VNYXRlcmlhbEltYWdlIiwiRm9yZ2VNYXRlcmlhbFRleHQiLCJGb3JnZUJvdHRvbUNvbnRhaW5lciIsInByZWxvYWQiLCJzY2VuZSIsImVudGVyIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsInkiLCJvcmlZIiwiZWFzZSIsImR1cmF0aW9uIiwib25Db21wbGV0ZSIsImdlbmVyYXRlTmV4dCIsImV4aXQiLCJjaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImRlc3Ryb3kiLCJtYW5hZ2VyIiwiY3VycmVudFRleHQiLCJ0YXJnZXRUZXh0IiwiZ2VuZXJhdGVBdWRpb0Nob2ljZXMiLCJjdXJyZW50SW1hZ2UiLCJ0YXJnZXRJbWFnZSIsImdlbmVyYXRlVGV4dENob2ljZXMiLCJnZW5lcmF0ZUltYWdlQ2hvaWNlcyIsInZvY2FicyIsImdlbmVyYXRlQ2hvaWNlcyIsImxlbmd0aCIsImltYWdlQ2hvaWNlMSIsIm9yaVgiLCJnYXBYIiwiZ2FwWSIsImltYWdlQ2hvaWNlMiIsImltYWdlQ2hvaWNlMyIsImltYWdlQ2hvaWNlNCIsInB1c2giLCJjb25zdHJ1Y3RvciIsIngiLCJwYWRkaW5nIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJvdXRlclJlY3QiLCJyZWN0YW5nbGUiLCJtaWRZIiwiY29sb3JQYW5lbEJnIiwiaW5uZXJSZWN0IiwiY29sb3JQYW5lbEJnRGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBottomContainer.ts\n"));

/***/ }),

/***/ "./src/game/components/CardMaker/ForgeMaterialText.ts":
/*!************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMaterialText.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialText; }\n/* harmony export */ });\nclass ForgeMaterialText {\n    static preload(scene) {}\n    //\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        let size = 250;\n        this.rect = scene.add.rectangle(0, 0, size, size, 0xffffff);\n        this.text = scene.add.text(0, 0, vocab.name, {\n            fontSize: \"40px\",\n            color: \"black\"\n        });\n        this.container.add(this.rect);\n        this.container.add(this.text);\n        this.container.setSize(size, size);\n        this.container.setInteractive({\n            draggable: true\n        });\n        this.scene.input.enableDebug(this.container, 0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.container.setData(\"type\", \"ForgeMaterialImage\");\n        this.container.setData(\"key\", vocab.key);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsVGV4dC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBS2UsTUFBTUE7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBVUEsRUFBRTtJQUVGQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBRWIsSUFBSSxDQUFDRyxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJTSxPQUFjO1FBQ2xCLElBQUksQ0FBQ0MsSUFBSSxHQUFHVixNQUFNUSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxHQUFFLEdBQUVGLE1BQUtBLE1BQUs7UUFDOUMsSUFBSSxDQUFDRyxJQUFJLEdBQUdaLE1BQU1RLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLEdBQUUsR0FBRVIsTUFBTVMsSUFBSSxFQUFDO1lBQUNDLFVBQVM7WUFBT0MsT0FBTTtRQUFPO1FBRXhFLElBQUksQ0FBQ1IsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRSxJQUFJO1FBQzVCLElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSSxJQUFJO1FBRTVCLElBQUksQ0FBQ0wsU0FBUyxDQUFDUyxPQUFPLENBQUNQLE1BQUtBO1FBQzVCLElBQUksQ0FBQ0YsU0FBUyxDQUFDVSxjQUFjLENBQUM7WUFBQ0MsV0FBVztRQUFJO1FBRTlDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ2IsU0FBUyxFQUFDO1FBQzVDLElBQUksQ0FBQ1AsS0FBSyxDQUFDbUIsS0FBSyxDQUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDZCxTQUFTO1FBRTVDLElBQUksQ0FBQ0EsU0FBUyxDQUFDZSxPQUFPLENBQUMsUUFBTztRQUM5QixJQUFJLENBQUNmLFNBQVMsQ0FBQ2UsT0FBTyxDQUFDLE9BQU1sQixNQUFNbUIsR0FBRztJQUMxQztBQUNKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VNYXRlcmlhbFRleHQudHM/YjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgVm9jYWIgfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWF0ZXJpYWxUZXh0e1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IENhcmRNYWtlclxuICAgIG9yaVg6IG51bWJlclxuICAgIG9yaVk6IG51bWJlclxuICAgIHZvY2FiOiBWb2NhYiBcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgdGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG5cbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6Q2FyZE1ha2VyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdm9jYWI6Vm9jYWIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuICAgICAgICB0aGlzLnZvY2FiID0gdm9jYWJcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaXplOm51bWJlciA9IDI1MDtcbiAgICAgICAgdGhpcy5yZWN0ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsc2l6ZSxzaXplLDB4ZmZmZmZmKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gc2NlbmUuYWRkLnRleHQoMCwwLHZvY2FiLm5hbWUse2ZvbnRTaXplOic0MHB4Jyxjb2xvcjonYmxhY2snfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucmVjdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0U2l6ZShzaXplLHNpemUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSh7ZHJhZ2dhYmxlOiB0cnVlfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5lbmFibGVEZWJ1Zyh0aGlzLmNvbnRhaW5lciwweDAwZmYwMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXREYXRhKCd0eXBlJywnRm9yZ2VNYXRlcmlhbEltYWdlJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldERhdGEoJ2tleScsdm9jYWIua2V5KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkZvcmdlTWF0ZXJpYWxUZXh0IiwicHJlbG9hZCIsInNjZW5lIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInZvY2FiIiwib3JpWCIsIm9yaVkiLCJjb250YWluZXIiLCJhZGQiLCJzaXplIiwicmVjdCIsInJlY3RhbmdsZSIsInRleHQiLCJuYW1lIiwiZm9udFNpemUiLCJjb2xvciIsInNldFNpemUiLCJzZXRJbnRlcmFjdGl2ZSIsImRyYWdnYWJsZSIsImlucHV0IiwiZW5hYmxlRGVidWciLCJzZXREcmFnZ2FibGUiLCJzZXREYXRhIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialText.ts\n"));

/***/ })

});