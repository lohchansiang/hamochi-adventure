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

/***/ "./src/game/components/CardMaker/ForgeMaterialText.ts":
/*!************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMaterialText.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialText; }\n/* harmony export */ });\nclass ForgeMaterialText {\n    static preload(scene) {}\n    //\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        let size = 250;\n        this.rect = scene.add.rectangle(0, 0, size, size, scene.manager.colorText);\n        this.text = scene.add.text(0, 0, vocab.name, {\n            fontSize: \"32px\",\n            color: \"black\",\n            fontStyle: \"bold\",\n            fontFamily: \"Arial\",\n            wordWrap: {\n                width: size - 20,\n                useAdvancedWrap: true\n            }\n        }).setOrigin(0.5);\n        this.container.add(this.rect);\n        this.container.add(this.text);\n        this.container.setSize(size, size);\n        this.container.setInteractive({\n            draggable: true\n        });\n        this.scene.input.enableDebug(this.container, 0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.container.setData(\"type\", \"ForgeMaterialText\");\n        this.container.setData(\"key\", vocab.key);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsVGV4dC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBS2UsTUFBTUE7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBVUEsRUFBRTtJQUVGQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBRWIsSUFBSSxDQUFDRyxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJTSxPQUFjO1FBQ2xCLElBQUksQ0FBQ0MsSUFBSSxHQUFHVixNQUFNUSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxHQUFFLEdBQUVGLE1BQUtBLE1BQUtULE1BQU1ZLE9BQU8sQ0FBQ0MsU0FBUztRQUNyRSxJQUFJLENBQUNDLElBQUksR0FBR2QsTUFBTVEsR0FBRyxDQUFDTSxJQUFJLENBQUMsR0FBRSxHQUFFVixNQUFNVyxJQUFJLEVBQUM7WUFDTkMsVUFBUztZQUNUQyxPQUFNO1lBQ05DLFdBQVU7WUFDVkMsWUFBVztZQUNYQyxVQUFVO2dCQUFFQyxPQUFPWixPQUFLO2dCQUFJYSxpQkFBaUI7WUFBSztRQUN0RCxHQUFHQyxTQUFTLENBQUM7UUFFN0MsSUFBSSxDQUFDaEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRSxJQUFJO1FBQzVCLElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTSxJQUFJO1FBRTVCLElBQUksQ0FBQ1AsU0FBUyxDQUFDaUIsT0FBTyxDQUFDZixNQUFLQTtRQUM1QixJQUFJLENBQUNGLFNBQVMsQ0FBQ2tCLGNBQWMsQ0FBQztZQUFDQyxXQUFXO1FBQUk7UUFFOUMsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMkIsS0FBSyxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDckIsU0FBUyxFQUFDO1FBQzVDLElBQUksQ0FBQ1AsS0FBSyxDQUFDMkIsS0FBSyxDQUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDdEIsU0FBUztRQUU1QyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3VCLE9BQU8sQ0FBQyxRQUFPO1FBQzlCLElBQUksQ0FBQ3ZCLFNBQVMsQ0FBQ3VCLE9BQU8sQ0FBQyxPQUFNMUIsTUFBTTJCLEdBQUc7SUFDMUM7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlTWF0ZXJpYWxUZXh0LnRzP2I2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZE1ha2VyIH0gZnJvbSBcIkAvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyXCJcbmltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IFZvY2FiIH0gZnJvbSBcIkAvbGliL3JlcG9zL0RlY2tSZXBvXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZU1hdGVyaWFsVGV4dHtcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICB2b2NhYjogVm9jYWIgXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHJlY3Q6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHRleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHZvY2FiOlZvY2FiICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcbiAgICAgICAgdGhpcy52b2NhYiA9IHZvY2FiXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2l6ZTpudW1iZXIgPSAyNTA7XG4gICAgICAgIHRoaXMucmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLHNpemUsc2l6ZSxzY2VuZS5tYW5hZ2VyLmNvbG9yVGV4dCk7XG4gICAgICAgIHRoaXMudGV4dCA9IHNjZW5lLmFkZC50ZXh0KDAsMCx2b2NhYi5uYW1lLHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiczMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOidib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTonQXJpYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkV3JhcDogeyB3aWR0aDogc2l6ZS0yMCwgdXNlQWR2YW5jZWRXcmFwOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucmVjdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0U2l6ZShzaXplLHNpemUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSh7ZHJhZ2dhYmxlOiB0cnVlfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5lbmFibGVEZWJ1Zyh0aGlzLmNvbnRhaW5lciwweDAwZmYwMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXREYXRhKCd0eXBlJywnRm9yZ2VNYXRlcmlhbFRleHQnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0RGF0YSgna2V5Jyx2b2NhYi5rZXkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRm9yZ2VNYXRlcmlhbFRleHQiLCJwcmVsb2FkIiwic2NlbmUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwidm9jYWIiLCJvcmlYIiwib3JpWSIsImNvbnRhaW5lciIsImFkZCIsInNpemUiLCJyZWN0IiwicmVjdGFuZ2xlIiwibWFuYWdlciIsImNvbG9yVGV4dCIsInRleHQiLCJuYW1lIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRTdHlsZSIsImZvbnRGYW1pbHkiLCJ3b3JkV3JhcCIsIndpZHRoIiwidXNlQWR2YW5jZWRXcmFwIiwic2V0T3JpZ2luIiwic2V0U2l6ZSIsInNldEludGVyYWN0aXZlIiwiZHJhZ2dhYmxlIiwiaW5wdXQiLCJlbmFibGVEZWJ1ZyIsInNldERyYWdnYWJsZSIsInNldERhdGEiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialText.ts\n"));

/***/ })

});