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

/***/ "./src/game/modals/ModalQuestion.ts":
/*!******************************************!*\
  !*** ./src/game/modals/ModalQuestion.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalQuestion; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_ChoiceButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChoiceButton */ \"./src/game/components/ChoiceButton.ts\");\n\n\nclass Choice {\n}\nconst choiceList = [\n    {\n        name: \"Apple\",\n        isAnswer: true\n    },\n    {\n        name: \"Orange\",\n        isAnswer: false\n    },\n    {\n        name: \"Pear\",\n        isAnswer: false\n    },\n    {\n        name: \"Lemon\",\n        isAnswer: false\n    }\n];\nclass ModalQuestion extends Phaser.Scene {\n    static preload(scene) {\n        //\n        scene.load.image(\"questionApple\", \"assets/adventure/game/question/apple.png\");\n    }\n    renderChoices() {\n        if (this.choiceA) this.choiceA.destroy();\n        if (this.choiceB) this.choiceB.destroy();\n        if (this.choiceC) this.choiceC.destroy();\n        if (this.choiceD) this.choiceD.destroy();\n        let choices = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shuffle(choiceList);\n        this.choiceA = this.renderChoiceButton(this.choiceX1, this.choiceY1, choices[0]);\n        this.choiceB = this.renderChoiceButton(this.choiceX2, this.choiceY1, choices[1]);\n        this.choiceC = this.renderChoiceButton(this.choiceX1, this.choiceY2, choices[2]);\n        this.choiceD = this.renderChoiceButton(this.choiceX2, this.choiceY2, choices[3]);\n    }\n    renderChoiceButton(x, y, choice) {\n        let btn = new _components_ChoiceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, x, y, this.choiceWidth, this.choiceHeight, choice.name, choice.isAnswer);\n        btn.onPressedCallback = (button)=>{\n            // Disable all answer\n            if (button.isAnswer) {}\n        };\n        this.container.add(btn);\n        return btn;\n    }\n    startQuestion() {}\n    constructor(parent, sceneKey){\n        super(sceneKey);\n        this.parent = parent;\n        this.sceneKey = sceneKey;\n        //\n        parent.scene.add(sceneKey, this, true);\n        this.backdrop = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight, 0x000000, 0.5);\n        this.container = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2);\n        this.panel = this.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 50, 0xe6e6e6);\n        this.container.add(this.panel);\n        this.sprite = this.add.sprite(0, -250, \"questionApple\");\n        this.container.add(this.sprite);\n        // Calculate Choice Button\n        const padding = 25;\n        const panelWidth = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50;\n        this.choiceWidth = panelWidth / 2 - padding * 2;\n        this.choiceHeight = 100;\n        this.choiceX1 = -(this.choiceWidth / 2 + padding);\n        this.choiceX2 = this.choiceWidth / 2 + padding;\n        this.choiceY1 = 400;\n        this.choiceY2 = this.choiceY1 + padding + this.choiceHeight;\n        this.renderChoices();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpRUFBb0IsR0FBQztRQUUvRSxJQUFJLENBQUM0QyxLQUFLLEdBQUcsSUFBSSxDQUFDVCxHQUFHLENBQUNNLFNBQVMsQ0FBQyxHQUFFLEdBQUV6QyxnRUFBbUIsR0FBQyxJQUFJQSxpRUFBb0IsR0FBQyxJQUFHO1FBQ3BGLElBQUksQ0FBQ2tDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1MsS0FBSztRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNWLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUUsQ0FBQyxLQUFJO1FBQ3JDLElBQUksQ0FBQ1gsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVSxNQUFNO1FBRTlCLDBCQUEwQjtRQUMxQixNQUFNQyxVQUFpQjtRQUN2QixNQUFNQyxhQUFvQi9DLGdFQUFtQixHQUFHO1FBQ2hELElBQUksQ0FBQzhCLFdBQVcsR0FBRyxhQUFhLElBQU1nQixVQUFTO1FBQy9DLElBQUksQ0FBQ2YsWUFBWSxHQUFHO1FBQ3BCLElBQUksQ0FBQ1QsUUFBUSxHQUFHLENBQUcsS0FBSSxDQUFDUSxXQUFXLEdBQUMsSUFBSWdCLE9BQU07UUFDOUMsSUFBSSxDQUFDdEIsUUFBUSxHQUFJLElBQUksQ0FBQ00sV0FBVyxHQUFDLElBQUlnQjtRQUN0QyxJQUFJLENBQUN2QixRQUFRLEdBQUc7UUFDaEIsSUFBSSxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDRixRQUFRLEdBQUd1QixVQUFVLElBQUksQ0FBQ2YsWUFBWTtRQUUzRCxJQUFJLENBQUNsQixhQUFhO0lBQ3RCO0FBK0JGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvbW9kYWxzL01vZGFsUXVlc3Rpb24udHM/NTgwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IFJlY3RCdXR0b24gZnJvbSBcIkAvbGliL2NvbXBvbmVudHMvUmVjdEJ1dHRvblwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IENob2ljZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DaG9pY2VCdXR0b25cIjtcblxuY2xhc3MgQ2hvaWNle1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGlzQW5zd2VyOiBib29sZWFuICAgIFxufVxuXG5jb25zdCBjaG9pY2VMaXN0OiBBcnJheTxDaG9pY2U+ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0FwcGxlJyxcbiAgICAgICAgaXNBbnN3ZXI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgIGlzQW5zd2VyOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGVhcicsXG4gICAgICAgIGlzQW5zd2VyOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGVtb24nLFxuICAgICAgICBpc0Fuc3dlcjogZmFsc2VcbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFF1ZXN0aW9uIGV4dGVuZHMgUGhhc2VyLlNjZW5le1xuICAgIFxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogUGhhc2VyLlNjZW5lICl7XG4gICAgICAgIC8vXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ3F1ZXN0aW9uQXBwbGUnLCdhc3NldHMvYWR2ZW50dXJlL2dhbWUvcXVlc3Rpb24vYXBwbGUucG5nJylcbiAgICB9XG5cbiAgICBwYXJlbnQ6IFBoYXNlci5TY2VuZVxuICAgIHNjZW5lS2V5OiBzdHJpbmdcbiAgICAvL1xuICAgIGJhY2tkcm9wOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcGFuZWw6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHNwcml0ZTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgLy9cbiAgICBjYWxsYmFja0NvcnJlY3Q6IEZ1bmN0aW9uIHwgbnVsbFxuICAgIGNhbGxiYWNrV3Jvbmc6IEZ1bmN0aW9uIHwgbnVsbFxuICAgIC8vXG4gICAgY2hvaWNlQTogQ2hvaWNlQnV0dG9uXG4gICAgY2hvaWNlQjogQ2hvaWNlQnV0dG9uXG4gICAgY2hvaWNlQzogQ2hvaWNlQnV0dG9uXG4gICAgY2hvaWNlRDogQ2hvaWNlQnV0dG9uXG4gICAgLy9cbiAgICBjaG9pY2VXaWR0aDogbnVtYmVyXG4gICAgY2hvaWNlSGVpZ2h0OiBudW1iZXJcbiAgICBjaG9pY2VYMTogbnVtYmVyXG4gICAgY2hvaWNlWDI6IG51bWJlclxuICAgIGNob2ljZVkxOiBudW1iZXJcbiAgICBjaG9pY2VZMjogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFNjZW5lLCBzY2VuZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lS2V5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuc2NlbmVLZXkgPSBzY2VuZUtleVxuICAgICAgICAvL1xuICAgICAgICBwYXJlbnQuc2NlbmUuYWRkKHNjZW5lS2V5LHRoaXMsdHJ1ZSlcblxuICAgICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5hZGQucmVjdGFuZ2xlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yLEdhbWVMaWIuc2NyZWVuV2lkdGgsR2FtZUxpYi5zY3JlZW5IZWlnaHQsMHgwMDAwMDAsMC41KVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5hZGQuY29udGFpbmVyKEdhbWVMaWIuc2NyZWVuV2lkdGgvMixHYW1lTGliLnNjcmVlbkhlaWdodC8yKVxuXG4gICAgICAgIHRoaXMucGFuZWwgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwwLEdhbWVMaWIuc2NyZWVuV2lkdGgtNTAsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LTUwLDB4ZTZlNmU2KVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5wYW5lbClcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuYWRkLnNwcml0ZSgwLC0yNTAsJ3F1ZXN0aW9uQXBwbGUnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgQ2hvaWNlIEJ1dHRvblxuICAgICAgICBjb25zdCBwYWRkaW5nOm51bWJlciA9IDI1XG4gICAgICAgIGNvbnN0IHBhbmVsV2lkdGg6bnVtYmVyID0gR2FtZUxpYi5zY3JlZW5XaWR0aCAtIDUwXG4gICAgICAgIHRoaXMuY2hvaWNlV2lkdGggPSAocGFuZWxXaWR0aCAvMikgLSAocGFkZGluZyAqMilcbiAgICAgICAgdGhpcy5jaG9pY2VIZWlnaHQgPSAxMDBcbiAgICAgICAgdGhpcy5jaG9pY2VYMSA9IC0gKHRoaXMuY2hvaWNlV2lkdGgvMiArIHBhZGRpbmcpIFxuICAgICAgICB0aGlzLmNob2ljZVgyID0gKHRoaXMuY2hvaWNlV2lkdGgvMiArIHBhZGRpbmcpIFxuICAgICAgICB0aGlzLmNob2ljZVkxID0gNDAwXG4gICAgICAgIHRoaXMuY2hvaWNlWTIgPSB0aGlzLmNob2ljZVkxICsgcGFkZGluZyArIHRoaXMuY2hvaWNlSGVpZ2h0XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDaG9pY2VzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hvaWNlcygpe1xuICAgICAgICBpZiggdGhpcy5jaG9pY2VBICkgdGhpcy5jaG9pY2VBLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VCICkgdGhpcy5jaG9pY2VCLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VDICkgdGhpcy5jaG9pY2VDLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VEICkgdGhpcy5jaG9pY2VELmRlc3Ryb3koKVxuXG4gICAgICAgIGxldCBjaG9pY2VzOiBDaG9pY2VbXSA9IEdhbWVMaWIuc2h1ZmZsZShjaG9pY2VMaXN0KVxuICAgICAgICB0aGlzLmNob2ljZUEgPSB0aGlzLnJlbmRlckNob2ljZUJ1dHRvbih0aGlzLmNob2ljZVgxLHRoaXMuY2hvaWNlWTEsY2hvaWNlc1swXSk7IFxuICAgICAgICB0aGlzLmNob2ljZUIgPSB0aGlzLnJlbmRlckNob2ljZUJ1dHRvbih0aGlzLmNob2ljZVgyLHRoaXMuY2hvaWNlWTEsY2hvaWNlc1sxXSk7IFxuICAgICAgICB0aGlzLmNob2ljZUMgPSB0aGlzLnJlbmRlckNob2ljZUJ1dHRvbih0aGlzLmNob2ljZVgxLHRoaXMuY2hvaWNlWTIsY2hvaWNlc1syXSk7IFxuICAgICAgICB0aGlzLmNob2ljZUQgPSB0aGlzLnJlbmRlckNob2ljZUJ1dHRvbih0aGlzLmNob2ljZVgyLHRoaXMuY2hvaWNlWTIsY2hvaWNlc1szXSk7IFxuICAgIH1cblxuICAgIHJlbmRlckNob2ljZUJ1dHRvbiggeDpudW1iZXIsIHk6bnVtYmVyLCBjaG9pY2U6IENob2ljZSk6Q2hvaWNlQnV0dG9ue1xuICAgICAgICBsZXQgYnRuOkNob2ljZUJ1dHRvbiA9IG5ldyBDaG9pY2VCdXR0b24odGhpcyx4LHksdGhpcy5jaG9pY2VXaWR0aCx0aGlzLmNob2ljZUhlaWdodCxjaG9pY2UubmFtZSwgY2hvaWNlLmlzQW5zd2VyKVxuICAgICAgICBidG4ub25QcmVzc2VkQ2FsbGJhY2sgPSAoIGJ1dHRvbjogQ2hvaWNlQnV0dG9uICkgPT4ge1xuICAgICAgICAgICAgLy8gRGlzYWJsZSBhbGwgYW5zd2VyXG5cbiAgICAgICAgICAgIGlmKCBidXR0b24uaXNBbnN3ZXIgKXtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZChidG4pO1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cblxuICAgIHN0YXJ0UXVlc3Rpb24oKXtcblxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiQ2hvaWNlQnV0dG9uIiwiQ2hvaWNlIiwiY2hvaWNlTGlzdCIsIm5hbWUiLCJpc0Fuc3dlciIsIk1vZGFsUXVlc3Rpb24iLCJQaGFzZXIiLCJTY2VuZSIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsInJlbmRlckNob2ljZXMiLCJjaG9pY2VBIiwiZGVzdHJveSIsImNob2ljZUIiLCJjaG9pY2VDIiwiY2hvaWNlRCIsImNob2ljZXMiLCJzaHVmZmxlIiwicmVuZGVyQ2hvaWNlQnV0dG9uIiwiY2hvaWNlWDEiLCJjaG9pY2VZMSIsImNob2ljZVgyIiwiY2hvaWNlWTIiLCJ4IiwieSIsImNob2ljZSIsImJ0biIsImNob2ljZVdpZHRoIiwiY2hvaWNlSGVpZ2h0Iiwib25QcmVzc2VkQ2FsbGJhY2siLCJidXR0b24iLCJjb250YWluZXIiLCJhZGQiLCJzdGFydFF1ZXN0aW9uIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJzY2VuZUtleSIsImJhY2tkcm9wIiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJwYW5lbCIsInNwcml0ZSIsInBhZGRpbmciLCJwYW5lbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/modals/ModalQuestion.ts\n"));

/***/ })

});