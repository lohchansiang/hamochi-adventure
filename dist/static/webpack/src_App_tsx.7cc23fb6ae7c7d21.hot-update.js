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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalQuestion; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass Choice {\n}\nconst choiceList = [\n    {\n        name: \"Apple\",\n        isAnswer: true\n    },\n    {\n        name: \"Orange\",\n        isAnswer: false\n    },\n    {\n        name: \"Pear\",\n        isAnswer: false\n    },\n    {\n        name: \"Lemon\",\n        isAnswer: false\n    }\n];\nclass ModalQuestion extends Phaser.Scene {\n    static preload(scene) {\n        //\n        scene.load.image(\"questionApple\", \"assets/adventure/game/question/apple.png\");\n    }\n    renderChoice() {\n        if (this.choiceA) this.choiceA.destroy();\n        if (this.choiceB) this.choiceB.destroy();\n        if (this.choiceC) this.choiceC.destroy();\n        if (this.choiceD) this.choiceD.destroy();\n        let choices = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shuffle(choiceList);\n    }\n    startQuestion() {}\n    constructor(parent, sceneKey){\n        super(sceneKey);\n        this.parent = parent;\n        this.sceneKey = sceneKey;\n        //\n        parent.scene.add(sceneKey, this, true);\n        this.backdrop = this.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight, 0x000000, 0.5);\n        this.container = this.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2);\n        this.panel = this.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight - 50, 0xe6e6e6);\n        this.container.add(this.panel);\n        this.sprite = this.add.sprite(0, -250, \"questionApple\");\n        this.container.add(this.sprite);\n        // Calculate Choice Button\n        let padding = 25;\n        this.choiceWidth = (_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50 - 100) / 2;\n        this.choiceHeight = 50;\n        this.choiceX1 = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - 50;\n        this.choiceX2 = 600;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9tb2RhbHMvTW9kYWxRdWVzdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUlwQyxNQUFNQztBQUdOO0FBRUEsTUFBTUMsYUFBNEI7SUFDOUI7UUFDSUMsTUFBTTtRQUNOQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLFVBQVU7SUFDZDtJQUNBO1FBQ0lELE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxVQUFVO0lBQ2Q7Q0FDSDtBQUVjLE1BQU1DLHNCQUFzQkMsT0FBT0MsS0FBSztJQUVuRCxPQUFPQyxRQUFTQyxLQUFtQixFQUFFO1FBQ2pDLEVBQUU7UUFDRkEsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsaUJBQWdCO0lBQ3JDO0lBb0RBQyxlQUFjO1FBQ1YsSUFBSSxJQUFJLENBQUNDLE9BQU8sRUFBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsT0FBTztRQUN2QyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxFQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDRCxPQUFPO1FBQ3ZDLElBQUksSUFBSSxDQUFDRSxPQUFPLEVBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNGLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUNHLE9BQU8sRUFBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0gsT0FBTztRQUV2QyxJQUFJSSxVQUFvQmxCLDREQUFlLENBQUNFO0lBQzVDO0lBRUFrQixnQkFBZSxDQUVmO0lBckNBQyxZQUFZQyxNQUFhLEVBQUVDLFFBQWdCLENBQUU7UUFDekMsS0FBSyxDQUFDQTtRQUVOLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixFQUFFO1FBQ0ZELE9BQU9iLEtBQUssQ0FBQ2UsR0FBRyxDQUFDRCxVQUFTLElBQUksRUFBQztRQUUvQixJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDMUIsZ0VBQW1CLEdBQUMsR0FBRUEsaUVBQW9CLEdBQUMsR0FBRUEsZ0VBQW1CLEVBQUNBLGlFQUFvQixFQUFDLFVBQVM7UUFFbEksSUFBSSxDQUFDNkIsU0FBUyxHQUFHLElBQUksQ0FBQ0wsR0FBRyxDQUFDSyxTQUFTLENBQUM3QixnRUFBbUIsR0FBQyxHQUFFQSxpRUFBb0IsR0FBQztRQUUvRSxJQUFJLENBQUM4QixLQUFLLEdBQUcsSUFBSSxDQUFDTixHQUFHLENBQUNFLFNBQVMsQ0FBQyxHQUFFLEdBQUUxQixnRUFBbUIsR0FBQyxJQUFJQSxpRUFBb0IsR0FBQyxJQUFHO1FBQ3BGLElBQUksQ0FBQzZCLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQ00sS0FBSztRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNQLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUUsQ0FBQyxLQUFJO1FBQ3JDLElBQUksQ0FBQ0YsU0FBUyxDQUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDTyxNQUFNO1FBRTlCLDBCQUEwQjtRQUMxQixJQUFJQyxVQUFpQjtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRyxDQUFDLGdFQUFvQixHQUFHLEtBQU0sR0FBRSxJQUFNO1FBQ3pELElBQUksQ0FBQ0MsWUFBWSxHQUFHO1FBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHbkMsZ0VBQW1CLEdBQUc7UUFDdEMsSUFBSSxDQUFDb0MsUUFBUSxHQUFHO0lBQ3BCO0FBY0Y7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9tb2RhbHMvTW9kYWxRdWVzdGlvbi50cz81ODAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCI7XG5pbXBvcnQgUmVjdEJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XG5cbmNsYXNzIENob2ljZXtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBpc0Fuc3dlcjogYm9vbGVhbiAgICBcbn1cblxuY29uc3QgY2hvaWNlTGlzdDogQXJyYXk8Q2hvaWNlPiA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBcHBsZScsXG4gICAgICAgIGlzQW5zd2VyOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBpc0Fuc3dlcjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BlYXInLFxuICAgICAgICBpc0Fuc3dlcjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0xlbW9uJyxcbiAgICAgICAgaXNBbnN3ZXI6IGZhbHNlXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxRdWVzdGlvbiBleHRlbmRzIFBoYXNlci5TY2VuZXtcbiAgICBcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFBoYXNlci5TY2VuZSApe1xuICAgICAgICAvL1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdxdWVzdGlvbkFwcGxlJywnYXNzZXRzL2FkdmVudHVyZS9nYW1lL3F1ZXN0aW9uL2FwcGxlLnBuZycpXG4gICAgfVxuXG4gICAgcGFyZW50OiBQaGFzZXIuU2NlbmVcbiAgICBzY2VuZUtleTogc3RyaW5nXG4gICAgLy9cbiAgICBiYWNrZHJvcDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHBhbmVsOiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBzcHJpdGU6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vXG4gICAgY2FsbGJhY2tDb3JyZWN0OiBGdW5jdGlvbiB8IG51bGxcbiAgICBjYWxsYmFja1dyb25nOiBGdW5jdGlvbiB8IG51bGxcbiAgICAvL1xuICAgIGNob2ljZUE6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGNob2ljZUI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGNob2ljZUM6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGNob2ljZUQ6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vXG4gICAgY2hvaWNlV2lkdGg6IG51bWJlclxuICAgIGNob2ljZUhlaWdodDogbnVtYmVyXG4gICAgY2hvaWNlWDE6IG51bWJlclxuICAgIGNob2ljZVgyOiBudW1iZXJcbiAgICBjaG9pY2VZMTogbnVtYmVyXG4gICAgY2hvaWNlWTI6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY2VuZSwgc2NlbmVLZXk6IHN0cmluZykge1xuICAgICAgICBzdXBlcihzY2VuZUtleSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLnNjZW5lS2V5ID0gc2NlbmVLZXlcbiAgICAgICAgLy9cbiAgICAgICAgcGFyZW50LnNjZW5lLmFkZChzY2VuZUtleSx0aGlzLHRydWUpXG5cbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMuYWRkLnJlY3RhbmdsZShHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMixHYW1lTGliLnNjcmVlbldpZHRoLEdhbWVMaWIuc2NyZWVuSGVpZ2h0LDB4MDAwMDAwLDAuNSlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcihHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMilcblxuICAgICAgICB0aGlzLnBhbmVsID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsMCxHYW1lTGliLnNjcmVlbldpZHRoLTUwLCBHYW1lTGliLnNjcmVlbkhlaWdodC01MCwweGU2ZTZlNilcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMucGFuZWwpXG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoMCwtMjUwLCdxdWVzdGlvbkFwcGxlJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIENob2ljZSBCdXR0b25cbiAgICAgICAgbGV0IHBhZGRpbmc6bnVtYmVyID0gMjVcbiAgICAgICAgdGhpcy5jaG9pY2VXaWR0aCA9ICgoR2FtZUxpYi5zY3JlZW5XaWR0aCAtIDUwKSAtIDEwMCApIC8gMlxuICAgICAgICB0aGlzLmNob2ljZUhlaWdodCA9IDUwXG4gICAgICAgIHRoaXMuY2hvaWNlWDEgPSBHYW1lTGliLnNjcmVlbldpZHRoIC0gNTBcbiAgICAgICAgdGhpcy5jaG9pY2VYMiA9IDYwMFxuICAgIH1cblxuICAgIHJlbmRlckNob2ljZSgpe1xuICAgICAgICBpZiggdGhpcy5jaG9pY2VBICkgdGhpcy5jaG9pY2VBLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VCICkgdGhpcy5jaG9pY2VCLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VDICkgdGhpcy5jaG9pY2VDLmRlc3Ryb3koKVxuICAgICAgICBpZiggdGhpcy5jaG9pY2VEICkgdGhpcy5jaG9pY2VELmRlc3Ryb3koKVxuXG4gICAgICAgIGxldCBjaG9pY2VzOiBDaG9pY2VbXSA9IEdhbWVMaWIuc2h1ZmZsZShjaG9pY2VMaXN0KVxuICAgIH1cbiAgICBcbiAgICBzdGFydFF1ZXN0aW9uKCl7XG5cbiAgICB9XG4gIH0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkNob2ljZSIsImNob2ljZUxpc3QiLCJuYW1lIiwiaXNBbnN3ZXIiLCJNb2RhbFF1ZXN0aW9uIiwiUGhhc2VyIiwiU2NlbmUiLCJwcmVsb2FkIiwic2NlbmUiLCJsb2FkIiwiaW1hZ2UiLCJyZW5kZXJDaG9pY2UiLCJjaG9pY2VBIiwiZGVzdHJveSIsImNob2ljZUIiLCJjaG9pY2VDIiwiY2hvaWNlRCIsImNob2ljZXMiLCJzaHVmZmxlIiwic3RhcnRRdWVzdGlvbiIsImNvbnN0cnVjdG9yIiwicGFyZW50Iiwic2NlbmVLZXkiLCJhZGQiLCJiYWNrZHJvcCIsInJlY3RhbmdsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiY29udGFpbmVyIiwicGFuZWwiLCJzcHJpdGUiLCJwYWRkaW5nIiwiY2hvaWNlV2lkdGgiLCJjaG9pY2VIZWlnaHQiLCJjaG9pY2VYMSIsImNob2ljZVgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/modals/ModalQuestion.ts\n"));

/***/ })

});