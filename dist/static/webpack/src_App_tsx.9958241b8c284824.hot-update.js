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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalQuestion; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _components_ChoiceButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChoiceButton */ \"./src/game/components/ChoiceButton.ts\");\n\n\nclass Choice {\n}\nconst choiceList = [\n    {\n        name: \"Apple\",\n        isAnswer: true\n    },\n    {\n        name: \"Orange\",\n        isAnswer: false\n    },\n    {\n        name: \"Pear\",\n        isAnswer: false\n    },\n    {\n        name: \"Lemon\",\n        isAnswer: false\n    }\n];\nclass ModalQuestion extends Phaser.Scene {\n    static preload(scene) {\n        //\n        scene.load.image(\"questionApple\", \"assets/adventure/game/question/apple.png\");\n    }\n    renderChoices() {\n        if (this.choiceA) this.choiceA.destroy();\n        if (this.choiceB) this.choiceB.destroy();\n        if (this.choiceC) this.choiceC.destroy();\n        if (this.choiceD) this.choiceD.destroy();\n        let choices = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shuffle(choiceList);\n        this.choiceA = this.renderChoiceButton(this.choiceX1, this.choiceY1, choices[0]);\n        this.choiceB = this.renderChoiceButton(this.choiceX2, this.choiceY1, choices[1]);\n        this.choiceC = this.renderChoiceButton(this.choiceX1, this.choiceY2, choices[2]);\n        this.choiceD = this.renderChoiceButton(this.choiceX2, this.choiceY2, choices[3]);\n    }\n    renderChoiceButton(x, y, choice) {\n        let btn = new _components_ChoiceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, x, y, this.choiceWidth, this.choiceHeight, choice.name, choice.isAnswer);\n        btn.onPressed(()=>{\n            if (choice.isAnswer) {}\n        });\n        this.container.add(btn);\n        return btn;\n    }\n    startQuestion() {}\n    constructor(parent, sceneKey){\n        super(sceneKey);\n        this.parent = parent;\n        this.sceneKey = sceneKey;\n        //\n        parent.scene.add(sceneKey, this, true);\n        this.backdrop = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight, 0x000000, 0.5);\n        this.container = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2);\n        this.panel = this.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 50, 0xe6e6e6);\n        this.container.add(this.panel);\n        this.sprite = this.add.sprite(0, -250, \"questionApple\");\n        this.container.add(this.sprite);\n        // Calculate Choice Button\n        const padding = 25;\n        const panelWidth = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50;\n        this.choiceWidth = panelWidth / 2 - padding * 2;\n        this.choiceHeight = 100;\n        this.choiceX1 = -(this.choiceWidth / 2 + padding);\n        this.choiceX2 = this.choiceWidth / 2 + padding;\n        this.choiceY1 = 400;\n        this.choiceY2 = this.choiceY1 + padding + this.choiceHeight;\n        this.renderChoices();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQzJDLEtBQUssR0FBRyxJQUFJLENBQUNULEdBQUcsQ0FBQ00sU0FBUyxDQUFDLEdBQUUsR0FBRXhDLGdFQUFtQixHQUFDLElBQUlBLGlFQUFvQixHQUFDLElBQUc7UUFDcEYsSUFBSSxDQUFDaUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUyxLQUFLO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ1YsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRSxDQUFDLEtBQUk7UUFDckMsSUFBSSxDQUFDWCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNVLE1BQU07UUFFOUIsMEJBQTBCO1FBQzFCLE1BQU1DLFVBQWlCO1FBQ3ZCLE1BQU1DLGFBQW9COUMsZ0VBQW1CLEdBQUc7UUFDaEQsSUFBSSxDQUFDOEIsV0FBVyxHQUFHLGFBQWEsSUFBTWUsVUFBUztRQUMvQyxJQUFJLENBQUNkLFlBQVksR0FBRztRQUNwQixJQUFJLENBQUNULFFBQVEsR0FBRyxDQUFHLEtBQUksQ0FBQ1EsV0FBVyxHQUFDLElBQUllLE9BQU07UUFDOUMsSUFBSSxDQUFDckIsUUFBUSxHQUFJLElBQUksQ0FBQ00sV0FBVyxHQUFDLElBQUllO1FBQ3RDLElBQUksQ0FBQ3RCLFFBQVEsR0FBRztRQUNoQixJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJLENBQUNGLFFBQVEsR0FBR3NCLFVBQVUsSUFBSSxDQUFDZCxZQUFZO1FBRTNELElBQUksQ0FBQ2xCLGFBQWE7SUFDdEI7QUErQkY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9tb2RhbHMvTW9kYWxRdWVzdGlvbi50cz81ODAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCI7XG5pbXBvcnQgUmVjdEJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgQ2hvaWNlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nob2ljZUJ1dHRvblwiO1xuXG5jbGFzcyBDaG9pY2V7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgaXNBbnN3ZXI6IGJvb2xlYW4gICAgXG59XG5cbmNvbnN0IGNob2ljZUxpc3Q6IEFycmF5PENob2ljZT4gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnQXBwbGUnLFxuICAgICAgICBpc0Fuc3dlcjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICAgICAgaXNBbnN3ZXI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQZWFyJyxcbiAgICAgICAgaXNBbnN3ZXI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMZW1vbicsXG4gICAgICAgIGlzQW5zd2VyOiBmYWxzZVxuICAgIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsUXVlc3Rpb24gZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XG4gICAgXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBQaGFzZXIuU2NlbmUgKXtcbiAgICAgICAgLy9cbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgncXVlc3Rpb25BcHBsZScsJ2Fzc2V0cy9hZHZlbnR1cmUvZ2FtZS9xdWVzdGlvbi9hcHBsZS5wbmcnKVxuICAgIH1cblxuICAgIHBhcmVudDogUGhhc2VyLlNjZW5lXG4gICAgc2NlbmVLZXk6IHN0cmluZ1xuICAgIC8vXG4gICAgYmFja2Ryb3A6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBwYW5lbDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgc3ByaXRlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvL1xuICAgIGNhbGxiYWNrQ29ycmVjdDogRnVuY3Rpb24gfCBudWxsXG4gICAgY2FsbGJhY2tXcm9uZzogRnVuY3Rpb24gfCBudWxsXG4gICAgLy9cbiAgICBjaG9pY2VBOiBDaG9pY2VCdXR0b25cbiAgICBjaG9pY2VCOiBDaG9pY2VCdXR0b25cbiAgICBjaG9pY2VDOiBDaG9pY2VCdXR0b25cbiAgICBjaG9pY2VEOiBDaG9pY2VCdXR0b25cbiAgICAvL1xuICAgIGNob2ljZVdpZHRoOiBudW1iZXJcbiAgICBjaG9pY2VIZWlnaHQ6IG51bWJlclxuICAgIGNob2ljZVgxOiBudW1iZXJcbiAgICBjaG9pY2VYMjogbnVtYmVyXG4gICAgY2hvaWNlWTE6IG51bWJlclxuICAgIGNob2ljZVkyOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogU2NlbmUsIHNjZW5lS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVLZXkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5zY2VuZUtleSA9IHNjZW5lS2V5XG4gICAgICAgIC8vXG4gICAgICAgIHBhcmVudC5zY2VuZS5hZGQoc2NlbmVLZXksdGhpcyx0cnVlKVxuXG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIsR2FtZUxpYi5zY3JlZW5XaWR0aCxHYW1lTGliLnNjcmVlbkhlaWdodCwweDAwMDAwMCwwLjUpXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoR2FtZUxpYi5zY3JlZW5XaWR0aC8yLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5wYW5lbCA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLDAsR2FtZUxpYi5zY3JlZW5XaWR0aC01MCwgR2FtZUxpYi5zY3JlZW5IZWlnaHQtNTAsMHhlNmU2ZTYpXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnBhbmVsKVxuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKDAsLTI1MCwncXVlc3Rpb25BcHBsZScpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBDaG9pY2UgQnV0dG9uXG4gICAgICAgIGNvbnN0IHBhZGRpbmc6bnVtYmVyID0gMjVcbiAgICAgICAgY29uc3QgcGFuZWxXaWR0aDpudW1iZXIgPSBHYW1lTGliLnNjcmVlbldpZHRoIC0gNTBcbiAgICAgICAgdGhpcy5jaG9pY2VXaWR0aCA9IChwYW5lbFdpZHRoIC8yKSAtIChwYWRkaW5nICoyKVxuICAgICAgICB0aGlzLmNob2ljZUhlaWdodCA9IDEwMFxuICAgICAgICB0aGlzLmNob2ljZVgxID0gLSAodGhpcy5jaG9pY2VXaWR0aC8yICsgcGFkZGluZykgXG4gICAgICAgIHRoaXMuY2hvaWNlWDIgPSAodGhpcy5jaG9pY2VXaWR0aC8yICsgcGFkZGluZykgXG4gICAgICAgIHRoaXMuY2hvaWNlWTEgPSA0MDBcbiAgICAgICAgdGhpcy5jaG9pY2VZMiA9IHRoaXMuY2hvaWNlWTEgKyBwYWRkaW5nICsgdGhpcy5jaG9pY2VIZWlnaHRcblxuICAgICAgICB0aGlzLnJlbmRlckNob2ljZXMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaG9pY2VzKCl7XG4gICAgICAgIGlmKCB0aGlzLmNob2ljZUEgKSB0aGlzLmNob2ljZUEuZGVzdHJveSgpXG4gICAgICAgIGlmKCB0aGlzLmNob2ljZUIgKSB0aGlzLmNob2ljZUIuZGVzdHJveSgpXG4gICAgICAgIGlmKCB0aGlzLmNob2ljZUMgKSB0aGlzLmNob2ljZUMuZGVzdHJveSgpXG4gICAgICAgIGlmKCB0aGlzLmNob2ljZUQgKSB0aGlzLmNob2ljZUQuZGVzdHJveSgpXG5cbiAgICAgICAgbGV0IGNob2ljZXM6IENob2ljZVtdID0gR2FtZUxpYi5zaHVmZmxlKGNob2ljZUxpc3QpXG4gICAgICAgIHRoaXMuY2hvaWNlQSA9IHRoaXMucmVuZGVyQ2hvaWNlQnV0dG9uKHRoaXMuY2hvaWNlWDEsdGhpcy5jaG9pY2VZMSxjaG9pY2VzWzBdKTsgXG4gICAgICAgIHRoaXMuY2hvaWNlQiA9IHRoaXMucmVuZGVyQ2hvaWNlQnV0dG9uKHRoaXMuY2hvaWNlWDIsdGhpcy5jaG9pY2VZMSxjaG9pY2VzWzFdKTsgXG4gICAgICAgIHRoaXMuY2hvaWNlQyA9IHRoaXMucmVuZGVyQ2hvaWNlQnV0dG9uKHRoaXMuY2hvaWNlWDEsdGhpcy5jaG9pY2VZMixjaG9pY2VzWzJdKTsgXG4gICAgICAgIHRoaXMuY2hvaWNlRCA9IHRoaXMucmVuZGVyQ2hvaWNlQnV0dG9uKHRoaXMuY2hvaWNlWDIsdGhpcy5jaG9pY2VZMixjaG9pY2VzWzNdKTsgXG4gICAgfVxuXG4gICAgcmVuZGVyQ2hvaWNlQnV0dG9uKCB4Om51bWJlciwgeTpudW1iZXIsIGNob2ljZTogQ2hvaWNlKTpDaG9pY2VCdXR0b257XG4gICAgICAgIGxldCBidG46Q2hvaWNlQnV0dG9uID0gbmV3IENob2ljZUJ1dHRvbih0aGlzLHgseSx0aGlzLmNob2ljZVdpZHRoLHRoaXMuY2hvaWNlSGVpZ2h0LGNob2ljZS5uYW1lLCBjaG9pY2UuaXNBbnN3ZXIpXG4gICAgICAgIGJ0bi5vblByZXNzZWQoICgpPT57XG4gICAgICAgICAgICBpZiggY2hvaWNlLmlzQW5zd2VyICl7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGJ0bik7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgc3RhcnRRdWVzdGlvbigpe1xuXG4gICAgfVxuXG4gICAgY29ycmVjdFxuICB9Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJDaG9pY2VCdXR0b24iLCJDaG9pY2UiLCJjaG9pY2VMaXN0IiwibmFtZSIsImlzQW5zd2VyIiwiTW9kYWxRdWVzdGlvbiIsIlBoYXNlciIsIlNjZW5lIiwicHJlbG9hZCIsInNjZW5lIiwibG9hZCIsImltYWdlIiwicmVuZGVyQ2hvaWNlcyIsImNob2ljZUEiLCJkZXN0cm95IiwiY2hvaWNlQiIsImNob2ljZUMiLCJjaG9pY2VEIiwiY2hvaWNlcyIsInNodWZmbGUiLCJyZW5kZXJDaG9pY2VCdXR0b24iLCJjaG9pY2VYMSIsImNob2ljZVkxIiwiY2hvaWNlWDIiLCJjaG9pY2VZMiIsIngiLCJ5IiwiY2hvaWNlIiwiYnRuIiwiY2hvaWNlV2lkdGgiLCJjaG9pY2VIZWlnaHQiLCJvblByZXNzZWQiLCJjb250YWluZXIiLCJhZGQiLCJzdGFydFF1ZXN0aW9uIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJzY2VuZUtleSIsImJhY2tkcm9wIiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJwYW5lbCIsInNwcml0ZSIsInBhZGRpbmciLCJwYW5lbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/modals/ModalQuestion.ts\n"));

/***/ })

});