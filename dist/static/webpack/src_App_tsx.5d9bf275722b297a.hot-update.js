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

/***/ "./src/game/components/ChoiceButton.ts":
/*!*********************************************!*\
  !*** ./src/game/components/ChoiceButton.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChoiceButton; }\n/* harmony export */ });\nclass ChoiceButton extends Phaser.GameObjects.Container {\n    static preload(scene) {\n    //\n    }\n    onDown() {\n        this.buttonBox.fillColor = 0xffffff;\n        this.isInitClick = true;\n    }\n    onUp() {\n        this.buttonBox.fillColor = 0xffffff;\n        if (this.isInitClick && this.onPressedCallback) {\n            this.onPressedCallback(this);\n        }\n        this.isInitClick = false;\n    }\n    onOut() {\n        this.buttonBox.fillColor = 0xffffff;\n        this.isInitClick = false;\n    }\n    onHover() {\n        this.buttonBox.fillColor = 0xffffff;\n    }\n    onPressed(callback) {\n        this.onPressedCallback = callback;\n    }\n    showCorrectState() {\n        this.buttonBox.disableInteractive();\n        if (this.isAnswer) {\n            this.buttonBox.fillColor = 0x00ff00;\n        }\n    }\n    showWrongState() {\n        this.buttonBox.disableInteractive();\n    }\n    constructor(scene, x = 0, y = 0, width, height, text, isAnswer){\n        //check if config contains a scene\n        if (!scene) {\n            console.log(\"missing scene\");\n            return;\n        }\n        super(scene, x, y, []);\n        this.isInitClick = false;\n        this.isAnswer = isAnswer;\n        this.buttonBox = scene.add.rectangle(0, 0, width, height, 0xffffff);\n        this.buttonText = scene.make.text({\n            x: 0,\n            y: 0,\n            text: text,\n            origin: {\n                x: 0.5,\n                y: 0.5\n            },\n            style: {\n                fontSize: \"64px\",\n                fontFamily: \"Arial\",\n                color: \"#000000\",\n                align: \"center\"\n            }\n        });\n        // Add Button Sprite to Container\n        this.add(this.buttonBox);\n        this.add(this.buttonText);\n        scene.add.existing(this);\n        this.buttonBox.setInteractive();\n        this.buttonBox.on(\"pointerdown\", this.onDown, this);\n        this.buttonBox.on(\"pointerup\", this.onUp, this);\n        this.buttonBox.on(\"pointerover\", this.onHover, this);\n        this.buttonBox.on(\"pointerout\", this.onOut, this);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2hvaWNlQnV0dG9uLnRzP2Y4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVye1xuICAgIFxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogUGhhc2VyLlNjZW5lICl7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgYnV0dG9uQm94OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBidXR0b25UZXh0OiBHYW1lT2JqZWN0cy5UZXh0XG4gICAgaXNJbml0Q2xpY2s6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGlzQW5zd2VyOiBib29sZWFuXG4gICAgaXNTZWxlY3RlZDogYm9vbGVhblxuICAgIC8vXG4gICAgb25QcmVzc2VkQ2FsbGJhY2s6IEZ1bmN0aW9uXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIgLCB0ZXh0OnN0cmluZywgaXNBbnN3ZXI6Ym9vbGVhbiApIHtcbiAgICAgICAgLy9jaGVjayBpZiBjb25maWcgY29udGFpbnMgYSBzY2VuZVxuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBzY2VuZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIFtdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNBbnN3ZXIgPSBpc0Fuc3dlcjtcbiAgICAgICAgdGhpcy5idXR0b25Cb3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoLCBoZWlnaHQsIDB4ZmZmZmZmKTtcblxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBzY2VuZS5tYWtlLnRleHQoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgb3JpZ2luOiB7eDogMC41LCB5OiAwLjV9LFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzY0cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsICAvLyAnbGVmdCd8J2NlbnRlcid8J3JpZ2h0J3wnanVzdGlmeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBCdXR0b24gU3ByaXRlIHRvIENvbnRhaW5lclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJ1dHRvbkJveCk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYnV0dG9uVGV4dCk7XG4gICAgICAgIFxuICAgICAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVyZG93bicsdGhpcy5vbkRvd24sdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVydXAnLHRoaXMub25VcCx0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3gub24oJ3BvaW50ZXJvdmVyJyx0aGlzLm9uSG92ZXIsdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVyb3V0Jyx0aGlzLm9uT3V0LHRoaXMpO1xuICAgIH1cblxuICAgIG9uRG93bigpe1xuICAgICAgICB0aGlzLmJ1dHRvbkJveC5maWxsQ29sb3IgPSAweGZmZmZmZlxuICAgICAgICB0aGlzLmlzSW5pdENsaWNrID0gdHJ1ZVxuICAgIH1cblxuICAgIG9uVXAoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZmZmZmZcblxuICAgICAgICBpZiggdGhpcy5pc0luaXRDbGljayAmJiB0aGlzLm9uUHJlc3NlZENhbGxiYWNrICl7XG4gICAgICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrKCB0aGlzIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uT3V0KCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmZpbGxDb2xvciA9IDB4ZmZmZmZmXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uSG92ZXIoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZmZmZmZcbiAgICB9XG5cbiAgICBvblByZXNzZWQoIGNhbGxiYWNrOiBGdW5jdGlvbiApe1xuICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG5cbiAgICBzaG93Q29ycmVjdFN0YXRlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmRpc2FibGVJbnRlcmFjdGl2ZSgpO1xuICAgICAgICBpZiggdGhpcy5pc0Fuc3dlciApe1xuICAgICAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHgwMGZmMDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dXcm9uZ1N0YXRlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmRpc2FibGVJbnRlcmFjdGl2ZSgpO1xuXG4gICAgfVxuICB9Il0sIm5hbWVzIjpbIkNob2ljZUJ1dHRvbiIsIlBoYXNlciIsIkdhbWVPYmplY3RzIiwiQ29udGFpbmVyIiwicHJlbG9hZCIsInNjZW5lIiwib25Eb3duIiwiYnV0dG9uQm94IiwiZmlsbENvbG9yIiwiaXNJbml0Q2xpY2siLCJvblVwIiwib25QcmVzc2VkQ2FsbGJhY2siLCJvbk91dCIsIm9uSG92ZXIiLCJvblByZXNzZWQiLCJjYWxsYmFjayIsInNob3dDb3JyZWN0U3RhdGUiLCJkaXNhYmxlSW50ZXJhY3RpdmUiLCJpc0Fuc3dlciIsInNob3dXcm9uZ1N0YXRlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJyZWN0YW5nbGUiLCJidXR0b25UZXh0IiwibWFrZSIsIm9yaWdpbiIsInN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJhbGlnbiIsImV4aXN0aW5nIiwic2V0SW50ZXJhY3RpdmUiLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/ChoiceButton.ts\n"));

/***/ })

});