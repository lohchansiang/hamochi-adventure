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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChoiceButton; }\n/* harmony export */ });\nclass ChoiceButton extends Phaser.GameObjects.Container {\n    static preload(scene) {\n    //\n    }\n    onDown() {\n        this.buttonBox.fillColor = 0xcc0000;\n        this.isInitClick = true;\n    }\n    onUp() {\n        this.buttonBox.fillColor = 0xff0000;\n        if (this.isInitClick && this.onPressedCallback) {\n            this.onPressedCallback();\n        }\n        this.isInitClick = false;\n    }\n    onOut() {\n        this.buttonBox.fillColor = 0xff0000;\n        this.isInitClick = false;\n    }\n    onHover() {\n        this.buttonBox.fillColor = 0xff6666;\n    }\n    onPressed(callback) {\n        this.onPressedCallback = callback;\n    }\n    constructor(scene, x = 0, y = 0, width, height, text, isAnswer){\n        //check if config contains a scene\n        if (!scene) {\n            console.log(\"missing scene\");\n            return;\n        }\n        super(scene, x, y, []);\n        this.isInitClick = false;\n        this.isAnswer = isAnswer;\n        this.buttonBox = scene.add.rectangle(0, 0, width, height, 0xffffff);\n        this.buttonText = scene.make.text({\n            x: 0,\n            y: 0,\n            text: text,\n            origin: {\n                x: 0.5,\n                y: 0.5\n            },\n            style: {\n                fontSize: \"64px\",\n                fontFamily: \"Arial\",\n                color: \"#ffffff\",\n                align: \"center\"\n            }\n        });\n        // Add Button Sprite to Container\n        this.add(this.buttonBox);\n        this.add(this.buttonText);\n        scene.add.existing(this);\n        this.buttonBox.setInteractive();\n        this.buttonBox.on(\"pointerdown\", this.onDown, this);\n        this.buttonBox.on(\"pointerup\", this.onUp, this);\n        this.buttonBox.on(\"pointerover\", this.onHover, this);\n        this.buttonBox.on(\"pointerout\", this.onOut, this);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0Nob2ljZUJ1dHRvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsTUFBTUEscUJBQXFCQyxPQUFPQyxXQUFXLENBQUNDLFNBQVM7SUFFbEUsT0FBT0MsUUFBU0MsS0FBbUIsRUFBRTtJQUNqQyxFQUFFO0lBQ047SUE4Q0FDLFNBQVE7UUFDSixJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxHQUFHO1FBQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO0lBQ3ZCO0lBRUFDLE9BQU07UUFDRixJQUFJLENBQUNILFNBQVMsQ0FBQ0MsU0FBUyxHQUFHO1FBRTNCLElBQUksSUFBSSxDQUFDQyxXQUFXLElBQUksSUFBSSxDQUFDRSxpQkFBaUIsRUFBRTtZQUM1QyxJQUFJLENBQUNBLGlCQUFpQjtRQUMxQjtRQUVBLElBQUksQ0FBQ0YsV0FBVyxHQUFHO0lBQ3ZCO0lBRUFHLFFBQU87UUFDSCxJQUFJLENBQUNMLFNBQVMsQ0FBQ0MsU0FBUyxHQUFHO1FBQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO0lBQ3ZCO0lBRUFJLFVBQVM7UUFDTCxJQUFJLENBQUNOLFNBQVMsQ0FBQ0MsU0FBUyxHQUFHO0lBQy9CO0lBRUFNLFVBQVdDLFFBQWtCLEVBQUU7UUFDM0IsSUFBSSxDQUFDSixpQkFBaUIsR0FBR0k7SUFDN0I7SUEvREFDLFlBQVlYLEtBQVksRUFBRVksSUFBVyxDQUFDLEVBQUVDLElBQVcsQ0FBQyxFQUFFQyxLQUFZLEVBQUVDLE1BQWEsRUFBR0MsSUFBVyxFQUFFQyxRQUFnQixDQUFHO1FBQ2hILGtDQUFrQztRQUNsQyxJQUFJLENBQUNqQixPQUFPO1lBQ1JrQixRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNKO1FBRUEsS0FBSyxDQUFDbkIsT0FBT1ksR0FBR0MsR0FBRyxFQUFFO2FBWnpCVCxjQUF1QjtRQWNuQixJQUFJLENBQUNhLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDZixTQUFTLEdBQUdGLE1BQU1vQixHQUFHLENBQUNDLFNBQVMsQ0FBQyxHQUFHLEdBQUdQLE9BQU9DLFFBQVE7UUFFMUQsSUFBSSxDQUFDTyxVQUFVLEdBQUd0QixNQUFNdUIsSUFBSSxDQUFDUCxJQUFJLENBQUM7WUFDOUJKLEdBQUc7WUFDSEMsR0FBRztZQUNIRyxNQUFNQTtZQUNOUSxRQUFRO2dCQUFDWixHQUFHO2dCQUFLQyxHQUFHO1lBQUc7WUFDdkJZLE9BQU87Z0JBQ0hDLFVBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLE9BQU87WUFDWDtRQUNKO1FBRUEsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQ2xCLFNBQVM7UUFDdkIsSUFBSSxDQUFDa0IsR0FBRyxDQUFDLElBQUksQ0FBQ0UsVUFBVTtRQUV4QnRCLE1BQU1vQixHQUFHLENBQUNVLFFBQVEsQ0FBQyxJQUFJO1FBQ3ZCLElBQUksQ0FBQzVCLFNBQVMsQ0FBQzZCLGNBQWM7UUFDN0IsSUFBSSxDQUFDN0IsU0FBUyxDQUFDOEIsRUFBRSxDQUFDLGVBQWMsSUFBSSxDQUFDL0IsTUFBTSxFQUFDLElBQUk7UUFDaEQsSUFBSSxDQUFDQyxTQUFTLENBQUM4QixFQUFFLENBQUMsYUFBWSxJQUFJLENBQUMzQixJQUFJLEVBQUMsSUFBSTtRQUM1QyxJQUFJLENBQUNILFNBQVMsQ0FBQzhCLEVBQUUsQ0FBQyxlQUFjLElBQUksQ0FBQ3hCLE9BQU8sRUFBQyxJQUFJO1FBQ2pELElBQUksQ0FBQ04sU0FBUyxDQUFDOEIsRUFBRSxDQUFDLGNBQWEsSUFBSSxDQUFDekIsS0FBSyxFQUFDLElBQUk7SUFDbEQ7QUE2QkY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0Nob2ljZUJ1dHRvbi50cz9mODAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lcntcbiAgICBcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFBoYXNlci5TY2VuZSApe1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGJ1dHRvbkJveDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgYnV0dG9uVGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIGlzSW5pdENsaWNrOiBib29sZWFuID0gZmFsc2VcbiAgICBpc0Fuc3dlcjogYm9vbGVhblxuXG4gICAgb25QcmVzc2VkQ2FsbGJhY2s6IEZ1bmN0aW9uXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIgLCB0ZXh0OnN0cmluZywgaXNBbnN3ZXI6Ym9vbGVhbiApIHtcbiAgICAgICAgLy9jaGVjayBpZiBjb25maWcgY29udGFpbnMgYSBzY2VuZVxuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBzY2VuZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIFtdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNBbnN3ZXIgPSBpc0Fuc3dlcjtcbiAgICAgICAgdGhpcy5idXR0b25Cb3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoLCBoZWlnaHQsIDB4ZmZmZmZmKTtcblxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBzY2VuZS5tYWtlLnRleHQoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgb3JpZ2luOiB7eDogMC41LCB5OiAwLjV9LFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzY0cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsICAvLyAnbGVmdCd8J2NlbnRlcid8J3JpZ2h0J3wnanVzdGlmeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBCdXR0b24gU3ByaXRlIHRvIENvbnRhaW5lclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJ1dHRvbkJveCk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYnV0dG9uVGV4dCk7XG4gICAgICAgIFxuICAgICAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVyZG93bicsdGhpcy5vbkRvd24sdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVydXAnLHRoaXMub25VcCx0aGlzKTtcbiAgICAgICAgdGhpcy5idXR0b25Cb3gub24oJ3BvaW50ZXJvdmVyJyx0aGlzLm9uSG92ZXIsdGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94Lm9uKCdwb2ludGVyb3V0Jyx0aGlzLm9uT3V0LHRoaXMpO1xuICAgIH1cblxuICAgIG9uRG93bigpe1xuICAgICAgICB0aGlzLmJ1dHRvbkJveC5maWxsQ29sb3IgPSAweGNjMDAwMFxuICAgICAgICB0aGlzLmlzSW5pdENsaWNrID0gdHJ1ZVxuICAgIH1cblxuICAgIG9uVXAoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZjAwMDBcblxuICAgICAgICBpZiggdGhpcy5pc0luaXRDbGljayAmJiB0aGlzLm9uUHJlc3NlZENhbGxiYWNrICl7XG4gICAgICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uT3V0KCl7XG4gICAgICAgIHRoaXMuYnV0dG9uQm94LmZpbGxDb2xvciA9IDB4ZmYwMDAwXG4gICAgICAgIHRoaXMuaXNJbml0Q2xpY2sgPSBmYWxzZVxuICAgIH1cblxuICAgIG9uSG92ZXIoKXtcbiAgICAgICAgdGhpcy5idXR0b25Cb3guZmlsbENvbG9yID0gMHhmZjY2NjZcbiAgICB9XG5cbiAgICBvblByZXNzZWQoIGNhbGxiYWNrOiBGdW5jdGlvbiApe1xuICAgICAgICB0aGlzLm9uUHJlc3NlZENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiQ2hvaWNlQnV0dG9uIiwiUGhhc2VyIiwiR2FtZU9iamVjdHMiLCJDb250YWluZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJvbkRvd24iLCJidXR0b25Cb3giLCJmaWxsQ29sb3IiLCJpc0luaXRDbGljayIsIm9uVXAiLCJvblByZXNzZWRDYWxsYmFjayIsIm9uT3V0Iiwib25Ib3ZlciIsIm9uUHJlc3NlZCIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImlzQW5zd2VyIiwiY29uc29sZSIsImxvZyIsImFkZCIsInJlY3RhbmdsZSIsImJ1dHRvblRleHQiLCJtYWtlIiwib3JpZ2luIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsImFsaWduIiwiZXhpc3RpbmciLCJzZXRJbnRlcmFjdGl2ZSIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/ChoiceButton.ts\n"));

/***/ })

});