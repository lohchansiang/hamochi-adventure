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

/***/ "./src/game/components/CardMaker/CardMakerManager.ts":
/*!***********************************************************!*\
  !*** ./src/game/components/CardMaker/CardMakerManager.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CardMakerManager; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/repos/DeckRepo */ \"./src/lib/repos/DeckRepo.ts\");\n\n\nclass CardMakerManager {\n    getVocabStatus(vocabKey) {\n        if (this.owned.includes(vocabKey)) {\n            return \"owned\";\n        } else if (this.broken.includes(vocabKey)) {\n            return \"broken\";\n        } else {\n            return \"none\";\n        }\n    }\n    getTotalTarget() {\n        return this.targetImage + this.targetText + this.targetAudio;\n    }\n    getTotalCurrent() {\n        return this.currentImage + this.currentText + this.currentAudio;\n    }\n    setSelectedVocab(deckKey, vocabKey) {\n        this.selectedDeckKey = deckKey;\n        this.selectedVocabKey = vocabKey;\n    }\n    resetSelectedVocab() {\n        this.selectedDeckKey = \"\";\n        this.selectedVocabKey = \"\";\n    }\n    resetForgeValues() {\n        this.currentFailChance = 3;\n        //\n        this.currentImage = 0;\n        this.currentText = 0;\n        this.currentAudio = 0;\n    }\n    generateChoices() {\n        let choices = [];\n        let deck = _lib_repos_DeckRepo__WEBPACK_IMPORTED_MODULE_1__.DeckRepo.getDeck(this.selectedDeckKey);\n        if (deck != undefined) {\n            let answerIndex = deck.vocabs.findIndex((vocab)=>{\n                return this.selectedVocabKey == vocab.key;\n            });\n            choices.push(deck.vocabs[answerIndex]);\n            let otherIndexs = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRandomNumbers(0, deck.vocabs.length - 1, 3, [\n                answerIndex\n            ]);\n            otherIndexs.forEach((i)=>{\n                choices.push(deck.vocabs[i]);\n            });\n        }\n        if (choices.length > 0) choices = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shuffle(choices);\n        return choices;\n    }\n    checkAnswer(gameObject) {\n        let type = gameObject.getData(\"type\");\n        if (gameObject.getData(\"key\") == this.selectedVocabKey) {\n            if (type == \"ForgeMaterialImage\") {\n                this.addForgeImageValue();\n            } else if (type == \"ForgeMaterialText\") {\n                this.addForgeTextValue();\n            } else if (type == \"ForgeMaterialAudio\") {\n                this.addForgeAudioValue();\n            }\n        } else {\n            // Reduce Failed Chance\n            this.minusFailedChanceValue();\n        }\n        this.scene.events.emit(\"forge-answered\");\n    }\n    addForgeImageValue() {\n        this.currentImage += 1;\n        if (this.currentImage > this.targetImage) {\n            this.currentImage = this.targetImage;\n        }\n    }\n    addForgeTextValue() {\n        this.currentText += 1;\n        if (this.currentText > this.targetText) {\n            this.currentText = this.targetText;\n        }\n    }\n    addForgeAudioValue() {\n        this.currentAudio += 1;\n        if (this.currentAudio > this.targetAudio) {\n            this.currentAudio = this.targetAudio;\n        }\n    }\n    minusFailedChanceValue() {\n        this.currentFailChance -= 1;\n        if (this.currentFailChance < 0) {\n            this.currentFailChance = 0;\n        }\n    }\n    checkWinCondition() {\n        if (this.getTotalCurrent() == this.getTotalTarget()) {\n            return true;\n        }\n        return false;\n    }\n    checkLoseCondition() {\n        if (this.currentFailChance == 0) {\n            return true;\n        }\n        return false;\n    }\n    constructor(scene){\n        //\n        this.maxFailChance = 3;\n        this.currentFailChance = 3;\n        //\n        this.targetImage = 3;\n        this.targetText = 3;\n        this.targetAudio = 3;\n        this.currentImage = 0;\n        this.currentText = 0;\n        this.currentAudio = 0;\n        //\n        this.colorImage = 0xCDFADB;\n        this.colorText = 0xFFCF96;\n        this.colorAudio = 0xFF8080;\n        this.scene = scene;\n        this.broken = [\n            \"apple\",\n            \"banana\",\n            \"pear\"\n        ];\n        this.owned = [\n            \"apple\"\n        ];\n        this.resetForgeValues();\n        this.resetSelectedVocab();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9DYXJkTWFrZXJNYW5hZ2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUV5QjtBQUk3QyxNQUFNRTtJQWlDakJDLGVBQWdCQyxRQUFlLEVBQVM7UUFDcEMsSUFBSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDRixXQUFXO1lBQy9CLE9BQU87UUFDWCxPQUFNLElBQUksSUFBSSxDQUFDRyxNQUFNLENBQUVELFFBQVEsQ0FBQ0YsV0FBVztZQUN2QyxPQUFPO1FBQ1gsT0FBSztZQUNELE9BQU87UUFDWDtJQUNKO0lBRUFJLGlCQUF1QjtRQUNuQixPQUFPLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsV0FBVztJQUNoRTtJQUVBQyxrQkFBd0I7UUFDcEIsT0FBTyxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNDLFlBQVk7SUFDbkU7SUFFQUMsaUJBQWtCQyxPQUFjLEVBQUViLFFBQWUsRUFBRTtRQUMvQyxJQUFJLENBQUNjLGVBQWUsR0FBR0Q7UUFDdkIsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBR2Y7SUFDNUI7SUFFQWdCLHFCQUFvQjtRQUNoQixJQUFJLENBQUNGLGVBQWUsR0FBRztRQUN2QixJQUFJLENBQUNDLGdCQUFnQixHQUFHO0lBQzVCO0lBRUFFLG1CQUFrQjtRQUNkLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUc7UUFDekIsRUFBRTtRQUNGLElBQUksQ0FBQ1QsWUFBWSxHQUFHO1FBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHO0lBQ3hCO0lBRUFRLGtCQUFpQjtRQUNiLElBQUlDLFVBQW1CLEVBQUU7UUFFekIsSUFBSUMsT0FBc0J4Qix5REFBUUEsQ0FBQ3lCLE9BQU8sQ0FBQyxJQUFJLENBQUNSLGVBQWU7UUFDL0QsSUFBSU8sUUFBUUUsV0FB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QUFTO1NBQU87UUFDdkMsSUFBSSxDQUFDRixLQUFLLEdBQUc7WUFBQztTQUFRO1FBRXRCLElBQUksQ0FBQ2dCLGdCQUFnQjtRQUNyQixJQUFJLENBQUNELGtCQUFrQjtJQUMzQjtBQXdISjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0NhcmRNYWtlck1hbmFnZXIudHM/MzlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCB7IERlY2ssIERlY2tSZXBvLCBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgRm9yZ2VNYXRlcmlhbEltYWdlIGZyb20gXCIuL0ZvcmdlTWF0ZXJpYWxJbWFnZVwiXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiaHR0cFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRNYWtlck1hbmFnZXJ7XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICBvd25lZDogc3RyaW5nW11cbiAgICBicm9rZW46IHN0cmluZ1tdXG4gICAgLy9cbiAgICBzZWxlY3RlZERlY2tLZXk6IHN0cmluZ1xuICAgIHNlbGVjdGVkVm9jYWJLZXk6IHN0cmluZ1xuICAgIC8vXG4gICAgbWF4RmFpbENoYW5jZTogbnVtYmVyID0gM1xuICAgIGN1cnJlbnRGYWlsQ2hhbmNlOiBudW1iZXIgPSAzXG4gICAgLy9cbiAgICB0YXJnZXRJbWFnZTogbnVtYmVyID0gM1xuICAgIHRhcmdldFRleHQ6IG51bWJlciA9IDNcbiAgICB0YXJnZXRBdWRpbzogbnVtYmVyID0gM1xuICAgIGN1cnJlbnRJbWFnZTogbnVtYmVyID0gMFxuICAgIGN1cnJlbnRUZXh0OiBudW1iZXIgPSAwXG4gICAgY3VycmVudEF1ZGlvOiBudW1iZXIgPSAwXG4gICAgLy9cbiAgICBjb2xvckltYWdlOiBudW1iZXIgPSAweENERkFEQlxuICAgIGNvbG9yVGV4dDogbnVtYmVyID0gMHhGRkNGOTZcbiAgICBjb2xvckF1ZGlvOiBudW1iZXIgPSAweEZGODA4MFxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6U2NlbmUpe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcblxuICAgICAgICB0aGlzLmJyb2tlbiA9IFsnYXBwbGUnLCdiYW5hbmEnLCdwZWFyJ107XG4gICAgICAgIHRoaXMub3duZWQgPSBbJ2FwcGxlJ107XG5cbiAgICAgICAgdGhpcy5yZXNldEZvcmdlVmFsdWVzKCk7XG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3RlZFZvY2FiKCk7XG4gICAgfVxuXG4gICAgZ2V0Vm9jYWJTdGF0dXMoIHZvY2FiS2V5OnN0cmluZyApOnN0cmluZ3tcbiAgICAgICAgaWYoIHRoaXMub3duZWQuaW5jbHVkZXModm9jYWJLZXkpICl7XG4gICAgICAgICAgICByZXR1cm4gJ293bmVkJztcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMuYnJva2VuIC5pbmNsdWRlcyh2b2NhYktleSkgKXtcbiAgICAgICAgICAgIHJldHVybiAnYnJva2VuJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VG90YWxUYXJnZXQoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEltYWdlICsgdGhpcy50YXJnZXRUZXh0ICsgdGhpcy50YXJnZXRBdWRpbztcbiAgICB9XG5cbiAgICBnZXRUb3RhbEN1cnJlbnQoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbWFnZSArIHRoaXMuY3VycmVudFRleHQgKyB0aGlzLmN1cnJlbnRBdWRpbztcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFZvY2FiKCBkZWNrS2V5OnN0cmluZywgdm9jYWJLZXk6c3RyaW5nICl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gZGVja0tleTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gdm9jYWJLZXk7XG4gICAgfVxuXG4gICAgcmVzZXRTZWxlY3RlZFZvY2FiKCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZWNrS2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXNldEZvcmdlVmFsdWVzKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEZhaWxDaGFuY2UgPSAzO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRleHQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IDA7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDaG9pY2VzKCl7XG4gICAgICAgIGxldCBjaG9pY2VzOiBWb2NhYltdID0gW107XG5cbiAgICAgICAgbGV0IGRlY2s6RGVja3x1bmRlZmluZWQgPSBEZWNrUmVwby5nZXREZWNrKHRoaXMuc2VsZWN0ZWREZWNrS2V5KTtcbiAgICAgICAgaWYoIGRlY2sgIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICBsZXQgYW5zd2VySW5kZXg6bnVtYmVyID0gZGVjay52b2NhYnMuZmluZEluZGV4KCh2b2NhYik9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZvY2FiS2V5ID09IHZvY2FiLmtleTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNob2ljZXMucHVzaChkZWNrLnZvY2Fic1thbnN3ZXJJbmRleF0pO1xuXG4gICAgICAgICAgICBsZXQgb3RoZXJJbmRleHMgPSBHYW1lTGliLmdldFJhbmRvbU51bWJlcnMoMCxkZWNrLnZvY2Ficy5sZW5ndGgtMSwzLFthbnN3ZXJJbmRleF0pO1xuICAgICAgICAgICAgb3RoZXJJbmRleHMuZm9yRWFjaCgoaSk9PntcbiAgICAgICAgICAgICAgICBjaG9pY2VzLnB1c2goZGVjay52b2NhYnNbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBjaG9pY2VzLmxlbmd0aCA+IDAgKSBjaG9pY2VzID0gR2FtZUxpYi5zaHVmZmxlKGNob2ljZXMpO1xuICAgICAgICByZXR1cm4gY2hvaWNlcztcbiAgICB9XG5cbiAgICBjaGVja0Fuc3dlciggZ2FtZU9iamVjdDogR2FtZU9iamVjdHMuR2FtZU9iamVjdCApe1xuICAgICAgICBsZXQgdHlwZTpzdHJpbmcgPSBnYW1lT2JqZWN0LmdldERhdGEoJ3R5cGUnKTtcbiAgICAgICAgaWYoIGdhbWVPYmplY3QuZ2V0RGF0YSgna2V5JykgPT0gdGhpcy5zZWxlY3RlZFZvY2FiS2V5ICl7XG4gICAgICAgICAgICBpZiggdHlwZSA9PSAnRm9yZ2VNYXRlcmlhbEltYWdlJyApe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRm9yZ2VJbWFnZVZhbHVlKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZiggdHlwZSA9PSAnRm9yZ2VNYXRlcmlhbFRleHQnICl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGb3JnZVRleHRWYWx1ZSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYoIHR5cGUgPT0gJ0ZvcmdlTWF0ZXJpYWxBdWRpbycgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZvcmdlQXVkaW9WYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIFJlZHVjZSBGYWlsZWQgQ2hhbmNlXG4gICAgICAgICAgICB0aGlzLm1pbnVzRmFpbGVkQ2hhbmNlVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ2ZvcmdlLWFuc3dlcmVkJyk7XG4gICAgfVxuXG4gICAgYWRkRm9yZ2VJbWFnZVZhbHVlKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlICs9MTtcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudEltYWdlID4gdGhpcy50YXJnZXRJbWFnZSApe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLnRhcmdldEltYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRm9yZ2VUZXh0VmFsdWUoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50VGV4dCArPTE7XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRUZXh0ID4gdGhpcy50YXJnZXRUZXh0ICl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy50YXJnZXRUZXh0O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZEZvcmdlQXVkaW9WYWx1ZSgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRBdWRpbyArPTE7XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRBdWRpbyA+IHRoaXMudGFyZ2V0QXVkaW8gKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gdGhpcy50YXJnZXRBdWRpbztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1pbnVzRmFpbGVkQ2hhbmNlVmFsdWUoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50RmFpbENoYW5jZSAtPSAxO1xuICAgICAgICBpZiggdGhpcy5jdXJyZW50RmFpbENoYW5jZSA8IDAgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZhaWxDaGFuY2UgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKTpib29sZWFue1xuICAgICAgICBpZiggdGhpcy5nZXRUb3RhbEN1cnJlbnQoKSA9PSB0aGlzLmdldFRvdGFsVGFyZ2V0KCkgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrTG9zZUNvbmRpdGlvbigpOmJvb2xlYW57XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRGYWlsQ2hhbmNlID09IDAgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkRlY2tSZXBvIiwiQ2FyZE1ha2VyTWFuYWdlciIsImdldFZvY2FiU3RhdHVzIiwidm9jYWJLZXkiLCJvd25lZCIsImluY2x1ZGVzIiwiYnJva2VuIiwiZ2V0VG90YWxUYXJnZXQiLCJ0YXJnZXRJbWFnZSIsInRhcmdldFRleHQiLCJ0YXJnZXRBdWRpbyIsImdldFRvdGFsQ3VycmVudCIsImN1cnJlbnRJbWFnZSIsImN1cnJlbnRUZXh0IiwiY3VycmVudEF1ZGlvIiwic2V0U2VsZWN0ZWRWb2NhYiIsImRlY2tLZXkiLCJzZWxlY3RlZERlY2tLZXkiLCJzZWxlY3RlZFZvY2FiS2V5IiwicmVzZXRTZWxlY3RlZFZvY2FiIiwicmVzZXRGb3JnZVZhbHVlcyIsImN1cnJlbnRGYWlsQ2hhbmNlIiwiZ2VuZXJhdGVDaG9pY2VzIiwiY2hvaWNlcyIsImRlY2siLCJnZXREZWNrIiwidW5kZWZpbmVkIiwiYW5zd2VySW5kZXgiLCJ2b2NhYnMiLCJmaW5kSW5kZXgiLCJ2b2NhYiIsImtleSIsInB1c2giLCJvdGhlckluZGV4cyIsImdldFJhbmRvbU51bWJlcnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaSIsInNodWZmbGUiLCJjaGVja0Fuc3dlciIsImdhbWVPYmplY3QiLCJ0eXBlIiwiZ2V0RGF0YSIsImFkZEZvcmdlSW1hZ2VWYWx1ZSIsImFkZEZvcmdlVGV4dFZhbHVlIiwiYWRkRm9yZ2VBdWRpb1ZhbHVlIiwibWludXNGYWlsZWRDaGFuY2VWYWx1ZSIsInNjZW5lIiwiZXZlbnRzIiwiZW1pdCIsImNoZWNrV2luQ29uZGl0aW9uIiwiY2hlY2tMb3NlQ29uZGl0aW9uIiwiY29uc3RydWN0b3IiLCJtYXhGYWlsQ2hhbmNlIiwiY29sb3JJbWFnZSIsImNvbG9yVGV4dCIsImNvbG9yQXVkaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/CardMakerManager.ts\n"));

/***/ })

});