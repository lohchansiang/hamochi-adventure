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

/***/ "./src/game/components/CardMaker/ForgeFeedbackSuccess.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeFeedbackSuccess.ts ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ forgeFeedbackSuccess; }\n/* harmony export */ });\nclass forgeFeedbackSuccess {\n    static preload(scene) {}\n    //\n    constructor(scene, x, y){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        let size = 50;\n        this.sprite = scene.add.sprite(0, 0, \"forgeFeedbackSuccess\");\n        this.sprite.setDisplaySize(size, size);\n        this.container.add(this.sprite);\n        this.hitEffect = scene.add.sprite(x, y, \"forgeFeedbackHit\");\n        this.hitEffect.setDisplaySize(size, size);\n        this.scene.tweens.add({\n            targets: this.hitEffect,\n            scale: 2,\n            alpha: 0,\n            duration: 1000,\n            ease: \"Power2\",\n            onComplete: ()=>{\n                this.hitEffect.destroy();\n            }\n        });\n        // Move to Forge Bar\n        this.scene.tweens.chain({\n            targets: this.container,\n            tweens: [\n                {\n                    // x: \"-=100\",\n                    y: \"-=50\",\n                    scale: 2,\n                    duration: 200\n                },\n                {\n                    // x: \"-=50\",\n                    y: \"+=50\",\n                    scale: 3,\n                    duration: 200,\n                    ease: \"Bounce\"\n                },\n                {\n                    x: this.scene.forgeBar.getTargetX(),\n                    y: this.scene.forgeBar.getTargetY(),\n                    scale: 1,\n                    duration: 200,\n                    delay: 300\n                }\n            ],\n            onComplete: ()=>{\n                this.scene.events.emit(\"forge-feedback\");\n                this.container.destroy();\n            }\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUZlZWRiYWNrU3VjY2Vzcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsTUFBTUE7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBU0EsRUFBRTtJQUVGQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxDQUFFO1FBQ2hELElBQUksQ0FBQ0gsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0ksSUFBSSxHQUFHRjtRQUNaLElBQUksQ0FBQ0csSUFBSSxHQUFHRjtRQUVaLElBQUksQ0FBQ0csU0FBUyxHQUFHTixNQUFNTyxHQUFHLENBQUNELFNBQVMsQ0FBQ0osR0FBRUM7UUFFdkMsSUFBSUssT0FBYztRQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR1QsTUFBTU8sR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRSxHQUFFO1FBQ25DLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxjQUFjLENBQUNGLE1BQUtBO1FBRWhDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRSxNQUFNO1FBRTlCLElBQUksQ0FBQ0UsU0FBUyxHQUFHWCxNQUFNTyxHQUFHLENBQUNFLE1BQU0sQ0FBQ1AsR0FBRUMsR0FBRTtRQUN0QyxJQUFJLENBQUNRLFNBQVMsQ0FBQ0QsY0FBYyxDQUFDRixNQUFLQTtRQUVuQyxJQUFJLENBQUNSLEtBQUssQ0FBQ1ksTUFBTSxDQUFDTCxHQUFHLENBQUM7WUFDbEJNLFNBQVMsSUFBSSxDQUFDRixTQUFTO1lBQ3ZCRyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFlBQVk7Z0JBQ1IsSUFBSSxDQUFDUCxTQUFTLENBQUNRLE9BQU87WUFDMUI7UUFDSjtRQUVBLG9CQUFvQjtRQUNwQixJQUFJLENBQUNuQixLQUFLLENBQUNZLE1BQU0sQ0FBQ1EsS0FBSyxDQUNuQjtZQUNJUCxTQUFTLElBQUksQ0FBQ1AsU0FBUztZQUN2Qk0sUUFBUTtnQkFDSjtvQkFDSSxjQUFjO29CQUNkVCxHQUFHO29CQUNIVyxPQUFPO29CQUNQRSxVQUFVO2dCQUNkO2dCQUNBO29CQUNJLGFBQWE7b0JBQ2JiLEdBQUc7b0JBQ0hXLE9BQU87b0JBQ1BFLFVBQVU7b0JBQ1ZDLE1BQU07Z0JBQ1Y7Z0JBQ0E7b0JBQ0lmLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNxQixRQUFRLENBQUNDLFVBQVU7b0JBQ2pDbkIsR0FBRyxJQUFJLENBQUNILEtBQUssQ0FBQ3FCLFFBQVEsQ0FBQ0UsVUFBVTtvQkFDakNULE9BQU87b0JBQ1BFLFVBQVU7b0JBQ1ZRLE9BQU07Z0JBQ1Y7YUFDSDtZQUNETixZQUFZO2dCQUNSLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ3lCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUNwQixTQUFTLENBQUNhLE9BQU87WUFDMUI7UUFDSjtJQUVSO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUZlZWRiYWNrU3VjY2Vzcy50cz82NTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9yZ2VGZWVkYmFja1N1Y2Nlc3N7XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG5cbiAgICB9XG5cbiAgICBzY2VuZTogQ2FyZE1ha2VyXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBoaXRFZmZlY3Q6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgc3ByaXRlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvL1xuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemU6bnVtYmVyID0gNTA7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ2ZvcmdlRmVlZGJhY2tTdWNjZXNzJyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldERpc3BsYXlTaXplKHNpemUsc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGl0RWZmZWN0ID0gc2NlbmUuYWRkLnNwcml0ZSh4LHksJ2ZvcmdlRmVlZGJhY2tIaXQnKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3Quc2V0RGlzcGxheVNpemUoc2l6ZSxzaXplKTtcblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5oaXRFZmZlY3QsXG4gICAgICAgICAgICBzY2FsZTogMixcbiAgICAgICAgICAgIGFscGhhOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRFZmZlY3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIE1vdmUgdG8gRm9yZ2UgQmFyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmNoYWluKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHR3ZWVuczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB4OiBcIi09MTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBcIi09NTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgfSwgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB4OiBcIi09NTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiKz01MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogJ0JvdW5jZSdcbiAgICAgICAgICAgICAgICAgICAgfSwgICBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5zY2VuZS5mb3JnZUJhci5nZXRUYXJnZXRYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnNjZW5lLmZvcmdlQmFyLmdldFRhcmdldFkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OjMwMFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnZm9yZ2UtZmVlZGJhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZm9yZ2VGZWVkYmFja1N1Y2Nlc3MiLCJwcmVsb2FkIiwic2NlbmUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwib3JpWCIsIm9yaVkiLCJjb250YWluZXIiLCJhZGQiLCJzaXplIiwic3ByaXRlIiwic2V0RGlzcGxheVNpemUiLCJoaXRFZmZlY3QiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwic2NhbGUiLCJhbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJkZXN0cm95IiwiY2hhaW4iLCJmb3JnZUJhciIsImdldFRhcmdldFgiLCJnZXRUYXJnZXRZIiwiZGVsYXkiLCJldmVudHMiLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeFeedbackSuccess.ts\n"));

/***/ })

});