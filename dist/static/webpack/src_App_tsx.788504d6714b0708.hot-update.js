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

/***/ "./src/lib/GameLib.ts":
/*!****************************!*\
  !*** ./src/lib/GameLib.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nclass GameLib {\n    static quater3X() {\n        return GameLib.screenWidth * 0.75;\n    }\n    static quater3Y() {\n        return GameLib.screenHeight * 0.75;\n    }\n    static shuffle(array) {\n        let currentIndex = array.length;\n        // While there remain elements to shuffle...\n        while(currentIndex != 0){\n            // Pick a remaining element...\n            let randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            // And swap it with the current element.\n            [array[currentIndex], array[randomIndex]] = [\n                array[randomIndex],\n                array[currentIndex]\n            ];\n        }\n        return array;\n    }\n    constructor(){\n    //\n    }\n}\nGameLib.screenWidth = 1080;\nGameLib.screenHeight = 1920;\nGameLib.colorPanelBg = 0x9D7956;\nGameLib.colorPanelBgDark = 0x563F35;\nGameLib.colorPanelButtonLight = 0xF2E6BF;\nGameLib.colorPanelButtonTextLight = 0xE1AF3D;\nGameLib.colorPanelButtonDark = 0xCAB88D;\nGameLib.colorPanelButtonTextDark = 0x9E7856;\nGameLib.colorSuccess = 0x4BAE4F;\nGameLib.colorFailed = 0xE04F5F;\nGameLib.colorYellow = 0xFFF600;\nGameLib.textDefaultStyle = {\n    fontSize: \"40px\",\n    fontFamily: \"Arial\",\n    color: \"#000000\"\n};\nGameLib.midX = GameLib.screenWidth / 2;\nGameLib.midY = GameLib.screenHeight / 2;\nGameLib.quaterX = GameLib.screenWidth * 0.25;\nGameLib.quaterY = GameLib.screenHeight * 0.25;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLib);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL0dhbWVMaWIudHMiLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BO0lBK0JGLE9BQU9DLFdBQVU7UUFDYixPQUFPRCxRQUFRRSxXQUFXLEdBQUM7SUFDL0I7SUFFQSxPQUFPQyxXQUFVO1FBQ2IsT0FBT0gsUUFBUUksWUFBWSxHQUFDO0lBQ2hDO0lBRUEsT0FBT0MsUUFBUUMsS0FBaUIsRUFBYTtRQUN6QyxJQUFJQyxlQUFlRCxNQUFNRSxNQUFNO1FBRS9CLDRDQUE0QztRQUM1QyxNQUFPRCxnQkFBZ0IsRUFBRztZQUV4Qiw4QkFBOEI7WUFDOUIsSUFBSUUsY0FBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtMO1lBQzdDQTtZQUVBLHdDQUF3QztZQUN4QyxDQUFDRCxLQUFLLENBQUNDLGFBQWEsRUFBRUQsS0FBSyxDQUFDRyxZQUFZLENBQUMsR0FBRztnQkFDMUNILEtBQUssQ0FBQ0csWUFBWTtnQkFBRUgsS0FBSyxDQUFDQyxhQUFhO2FBQUM7UUFDNUM7UUFDQSxPQUFPRDtJQUNUO0lBakNGTyxhQUNBO0lBQ0ksRUFBRTtJQUNOO0FBK0JKO0FBdkRNYixRQUVLRSxjQUF1QjtBQUY1QkYsUUFHS0ksZUFBd0I7QUFIN0JKLFFBS0tjLGVBQXVCO0FBTDVCZCxRQU1LZSxtQkFBMkI7QUFOaENmLFFBT0tnQix3QkFBZ0M7QUFQckNoQixRQVFLaUIsNEJBQW9DO0FBUnpDakIsUUFTS2tCLHVCQUErQjtBQVRwQ2xCLFFBVUttQiwyQkFBbUM7QUFWeENuQixRQVdLb0IsZUFBdUI7QUFYNUJwQixRQVlLcUIsY0FBc0I7QUFaM0JyQixRQWFLc0IsY0FBc0I7QUFiM0J0QixRQWVLdUIsbUJBQTJCO0lBQzlCQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkMsT0FBTztBQUNYO0FBbkJFMUIsUUEwQksyQixPQUFPM0IsUUFBUUUsV0FBVyxHQUFDO0FBMUJoQ0YsUUEyQks0QixPQUFPNUIsUUFBUUksWUFBWSxHQUFDO0FBM0JqQ0osUUE0Qks2QixVQUFVN0IsUUFBUUUsV0FBVyxHQUFDO0FBNUJuQ0YsUUE2Qks4QixVQUFVOUIsUUFBUUksWUFBWSxHQUFDO0FBNEIxQywrREFBZUosT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL0dhbWVMaWIudHM/ZTIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEdhbWVMaWJcbntcbiAgICBzdGF0aWMgc2NyZWVuV2lkdGg6IGludGVnZXIgPSAxMDgwO1xuICAgIHN0YXRpYyBzY3JlZW5IZWlnaHQ6IGludGVnZXIgPSAxOTIwO1xuXG4gICAgc3RhdGljIGNvbG9yUGFuZWxCZzogbnVtYmVyID0gMHg5RDc5NTY7XG4gICAgc3RhdGljIGNvbG9yUGFuZWxCZ0Rhcms6IG51bWJlciA9IDB4NTYzRjM1O1xuICAgIHN0YXRpYyBjb2xvclBhbmVsQnV0dG9uTGlnaHQ6IG51bWJlciA9IDB4RjJFNkJGXG4gICAgc3RhdGljIGNvbG9yUGFuZWxCdXR0b25UZXh0TGlnaHQ6IG51bWJlciA9IDB4RTFBRjNEXG4gICAgc3RhdGljIGNvbG9yUGFuZWxCdXR0b25EYXJrOiBudW1iZXIgPSAweENBQjg4RFxuICAgIHN0YXRpYyBjb2xvclBhbmVsQnV0dG9uVGV4dERhcms6IG51bWJlciA9IDB4OUU3ODU2XG4gICAgc3RhdGljIGNvbG9yU3VjY2VzczogbnVtYmVyID0gMHg0QkFFNEZcbiAgICBzdGF0aWMgY29sb3JGYWlsZWQ6IG51bWJlciA9IDB4RTA0RjVGXG4gICAgc3RhdGljIGNvbG9yWWVsbG93OiBudW1iZXIgPSAweEZGRjYwMFxuXG4gICAgc3RhdGljIHRleHREZWZhdWx0U3R5bGU6IE9iamVjdCA9IHtcbiAgICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgLy9cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIG1pZFggPSBHYW1lTGliLnNjcmVlbldpZHRoLzI7IFxuICAgIHN0YXRpYyBtaWRZID0gR2FtZUxpYi5zY3JlZW5IZWlnaHQvMjsgXG4gICAgc3RhdGljIHF1YXRlclggPSBHYW1lTGliLnNjcmVlbldpZHRoKjAuMjU7IFxuICAgIHN0YXRpYyBxdWF0ZXJZID0gR2FtZUxpYi5zY3JlZW5IZWlnaHQqMC4yNTsgXG5cbiAgICBzdGF0aWMgcXVhdGVyM1goKXtcbiAgICAgICAgcmV0dXJuIEdhbWVMaWIuc2NyZWVuV2lkdGgqMC43NTsgXG4gICAgfVxuXG4gICAgc3RhdGljIHF1YXRlcjNZKCl7XG4gICAgICAgIHJldHVybiBHYW1lTGliLnNjcmVlbkhlaWdodCowLjc1OyBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2h1ZmZsZShhcnJheTogQXJyYXk8YW55Pik6QXJyYXk8YW55PiB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgICBcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG4gICAgICBcbiAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgXG4gICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgIFthcnJheVtjdXJyZW50SW5kZXhdLCBhcnJheVtyYW5kb21JbmRleF1dID0gW1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVMaWJcblxuIl0sIm5hbWVzIjpbIkdhbWVMaWIiLCJxdWF0ZXIzWCIsInNjcmVlbldpZHRoIiwicXVhdGVyM1kiLCJzY3JlZW5IZWlnaHQiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnN0cnVjdG9yIiwiY29sb3JQYW5lbEJnIiwiY29sb3JQYW5lbEJnRGFyayIsImNvbG9yUGFuZWxCdXR0b25MaWdodCIsImNvbG9yUGFuZWxCdXR0b25UZXh0TGlnaHQiLCJjb2xvclBhbmVsQnV0dG9uRGFyayIsImNvbG9yUGFuZWxCdXR0b25UZXh0RGFyayIsImNvbG9yU3VjY2VzcyIsImNvbG9yRmFpbGVkIiwiY29sb3JZZWxsb3ciLCJ0ZXh0RGVmYXVsdFN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJtaWRYIiwibWlkWSIsInF1YXRlclgiLCJxdWF0ZXJZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/GameLib.ts\n"));

/***/ })

});