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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChoiceButton; }\n/* harmony export */ });\nclass ChoiceButton extends Phaser.GameObjects.Container {\n    static preload(scene) {\n    //\n    }\n    onDown() {\n        this.buttonBox.fillColor = 0xffffff;\n        this.isInitClick = true;\n    }\n    onUp() {\n        this.buttonBox.fillColor = 0xffffff;\n        if (this.isInitClick && this.onPressedCallback) {\n            this.onPressedCallback(this);\n        }\n        this.isInitClick = false;\n    }\n    onOut() {\n        this.buttonBox.fillColor = 0xffffff;\n        this.isInitClick = false;\n    }\n    onHover() {\n        this.buttonBox.fillColor = 0xffffff;\n    }\n    onPressed(callback) {\n        this.onPressedCallback = callback;\n    }\n    showCorrectState() {\n        this.buttonBox.disableInteractive();\n        if (this.isSelected) {\n            this.buttonBox.fillColor = 0x00ff00;\n        }\n    }\n    showWrongState() {\n        this.buttonBox.disableInteractive();\n        if (this.isSelected) {\n            this.buttonBox.fillColor = 0xff0000;\n        }\n        if (this.isAnswer) {\n            this.buttonBox.fillColor = 0x0000ff;\n        }\n    }\n    renderAnswerTag() {\n        let circle = this.scene.add.circle(this.boxWidth / 2 - 20, 0, 50, 0xff0000);\n        this.add(circle);\n    }\n    constructor(scene, x = 0, y = 0, width, height, text, isAnswer){\n        //check if config contains a scene\n        if (!scene) {\n            console.log(\"missing scene\");\n            return;\n        }\n        super(scene, x, y, []);\n        // Init Data\n        this.isSelected = false;\n        this.isInitClick = false;\n        this.boxWidth = width;\n        this.boxHeight = height;\n        this.isAnswer = isAnswer;\n        this.buttonBox = scene.add.rectangle(0, 0, width, height, 0xffffff);\n        this.buttonText = scene.make.text({\n            x: 0,\n            y: 0,\n            text: text,\n            origin: {\n                x: 0.5,\n                y: 0.5\n            },\n            style: {\n                fontSize: \"64px\",\n                fontFamily: \"Arial\",\n                color: \"#000000\",\n                align: \"center\"\n            }\n        });\n        // Add Button Sprite to Container\n        this.add(this.buttonBox);\n        this.add(this.buttonText);\n        scene.add.existing(this);\n        this.buttonBox.setInteractive();\n        this.buttonBox.on(\"pointerdown\", this.onDown, this);\n        this.buttonBox.on(\"pointerup\", this.onUp, this);\n        this.buttonBox.on(\"pointerover\", this.onHover, this);\n        this.buttonBox.on(\"pointerout\", this.onOut, this);\n        this.renderAnswerTag();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2dCLEdBQUcsQ0FBQyxJQUFJLENBQUNZLFVBQVU7UUFFeEI5QixNQUFNa0IsR0FBRyxDQUFDb0IsUUFBUSxDQUFDLElBQUk7UUFDdkIsSUFBSSxDQUFDcEMsU0FBUyxDQUFDcUMsY0FBYztRQUM3QixJQUFJLENBQUNyQyxTQUFTLENBQUNzQyxFQUFFLENBQUMsZUFBYyxJQUFJLENBQUN2QyxNQUFNLEVBQUMsSUFBSTtRQUNoRCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3NDLEVBQUUsQ0FBQyxhQUFZLElBQUksQ0FBQ25DLElBQUksRUFBQyxJQUFJO1FBQzVDLElBQUksQ0FBQ0gsU0FBUyxDQUFDc0MsRUFBRSxDQUFDLGVBQWMsSUFBSSxDQUFDaEMsT0FBTyxFQUFDLElBQUk7UUFDakQsSUFBSSxDQUFDTixTQUFTLENBQUNzQyxFQUFFLENBQUMsY0FBYSxJQUFJLENBQUNqQyxLQUFLLEVBQUMsSUFBSTtRQUU5QyxJQUFJLENBQUNTLGVBQWU7SUFDeEI7QUFtREY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0Nob2ljZUJ1dHRvbi50cz9mODAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lcntcbiAgICBcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFBoYXNlci5TY2VuZSApe1xuICAgICAgICAvL1xuICAgIH1cbiAgICBib3hXaWR0aDogbnVtYmVyXG4gICAgYm94SGVpZ2h0OiBudW1iZXJcbiAgICBidXR0b25Cb3g6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIGJ1dHRvblRleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICBpc0luaXRDbGljazogYm9vbGVhblxuICAgIGlzU2VsZWN0ZWQ6IGJvb2xlYW5cbiAgICBpc0Fuc3dlcjogYm9vbGVhblxuICAgIC8vXG4gICAgb25QcmVzc2VkQ2FsbGJhY2s6IEZ1bmN0aW9uXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIgLCB0ZXh0OnN0cmluZywgaXNBbnN3ZXI6Ym9vbGVhbiApIHtcbiAgICAgICAgLy9jaGVjayBpZiBjb25maWcgY29udGFpbnMgYSBzY2VuZVxuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBzY2VuZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIFtdKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXQgRGF0YVxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0luaXRDbGljayA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYm94V2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmJveEhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmlzQW5zd2VyID0gaXNBbnN3ZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJ1dHRvbkJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgd2lkdGgsIGhlaWdodCwgMHhmZmZmZmYpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHNjZW5lLm1ha2UudGV4dCh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICBvcmlnaW46IHt4OiAwLjUsIHk6IDAuNX0sXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNjRweCcsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJywgIC8vICdsZWZ0J3wnY2VudGVyJ3wncmlnaHQnfCdqdXN0aWZ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIEJ1dHRvbiBTcHJpdGUgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYnV0dG9uQm94KTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5idXR0b25UZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3gub24oJ3BvaW50ZXJkb3duJyx0aGlzLm9uRG93bix0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3gub24oJ3BvaW50ZXJ1cCcsdGhpcy5vblVwLHRoaXMpO1xuICAgICAgICB0aGlzLmJ1dHRvbkJveC5vbigncG9pbnRlcm92ZXInLHRoaXMub25Ib3Zlcix0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3gub24oJ3BvaW50ZXJvdXQnLHRoaXMub25PdXQsdGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBbnN3ZXJUYWcoKVxuICAgIH1cblxuICAgIG9uRG93bigpe1xuICAgICAgICB0aGlzLmJ1dHRvbkJveC5maWxsQ29sb3IgPSAweGZmZmZmZlxuICAgICAgICB0aGlzLmlzSW5pdENsaWNrID0gdHJ1ZVxuICAgIH1cblxuICAgIG9uVXAoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZmZmZmZcblxuICAgICAgICBpZiggdGhpcy5pc0luaXRDbGljayAmJiB0aGlzLm9uUHJlc3NlZENhbGxiYWNrICl7XG4gICAgICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrKCB0aGlzIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uT3V0KCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmZpbGxDb2xvciA9IDB4ZmZmZmZmXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uSG92ZXIoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZmZmZmZcbiAgICB9XG5cbiAgICBvblByZXNzZWQoIGNhbGxiYWNrOiBGdW5jdGlvbiApe1xuICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG5cbiAgICBzaG93Q29ycmVjdFN0YXRlKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmRpc2FibGVJbnRlcmFjdGl2ZSgpO1xuICAgICAgICBpZiggdGhpcy5pc1NlbGVjdGVkICl7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJveC5maWxsQ29sb3IgPSAweDAwZmYwMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1dyb25nU3RhdGUoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZGlzYWJsZUludGVyYWN0aXZlKCk7XG4gICAgICAgIGlmKCB0aGlzLmlzU2VsZWN0ZWQgKXtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQm94LmZpbGxDb2xvciA9IDB4ZmYwMDAwXG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuaXNBbnN3ZXIgKXtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQm94LmZpbGxDb2xvciA9IDB4MDAwMGZmXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJBbnN3ZXJUYWcoKXtcbiAgICAgICAgbGV0IGNpcmNsZSA9IHRoaXMuc2NlbmUuYWRkLmNpcmNsZSh0aGlzLmJveFdpZHRoLzIgLSAyMCwwLCA1MCwweGZmMDAwMClcbiAgICAgICAgdGhpcy5hZGQoY2lyY2xlKTtcbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiQ2hvaWNlQnV0dG9uIiwiUGhhc2VyIiwiR2FtZU9iamVjdHMiLCJDb250YWluZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJvbkRvd24iLCJidXR0b25Cb3giLCJmaWxsQ29sb3IiLCJpc0luaXRDbGljayIsIm9uVXAiLCJvblByZXNzZWRDYWxsYmFjayIsIm9uT3V0Iiwib25Ib3ZlciIsIm9uUHJlc3NlZCIsImNhbGxiYWNrIiwic2hvd0NvcnJlY3RTdGF0ZSIsImRpc2FibGVJbnRlcmFjdGl2ZSIsImlzU2VsZWN0ZWQiLCJzaG93V3JvbmdTdGF0ZSIsImlzQW5zd2VyIiwicmVuZGVyQW5zd2VyVGFnIiwiY2lyY2xlIiwiYWRkIiwiYm94V2lkdGgiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImJveEhlaWdodCIsInJlY3RhbmdsZSIsImJ1dHRvblRleHQiLCJtYWtlIiwib3JpZ2luIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsImFsaWduIiwiZXhpc3RpbmciLCJzZXRJbnRlcmFjdGl2ZSIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/ChoiceButton.ts\n"));

/***/ })

});