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

/***/ "./src/game/components/PlayerAttackBar.ts":
/*!************************************************!*\
  !*** ./src/game/components/PlayerAttackBar.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerAttackBar; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass PlayerAttackBar {\n    static preload(scene) {\n        scene.load.image(\"bulb\", \"assets/adventure/game/bulb.png\");\n        scene.load.image(\"bulbBack\", \"assets/adventure/game/bulbBack.png\");\n    }\n    addValue(value) {\n        let newCurrent = this.current + value;\n        if (newCurrent > this.target) {\n            newCurrent = this.target;\n        } else if (newCurrent < 0) {\n            newCurrent = 0;\n        }\n        this.current = newCurrent;\n        this.renderProgressBar();\n    }\n    renderProgressBar() {\n        let width = (this.width - 2 * this.padding) * (this.current / this.target);\n        let height = this.height - 2 * this.padding;\n        this.progressBox.fillStyle(0x00ff00, 1);\n        this.progressBox.fillRect(this.startX + this.padding, this.startY + this.padding, width, height);\n    }\n    renderBulbButton() {\n        this.bulbContainer = this.scene.add.container(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenHeight / 2).setDepth(900);\n        this.bulbBack = this.scene.add.sprite(0, 0, \"bulbBack\");\n        this.bulb = this.scene.add.sprite(0, 0, \"bulb\");\n        this.bulbContainer.add(this.bulbBack);\n        this.bulbContainer.add(this.bulb);\n        this.bulbContainer.setVisible(false);\n    }\n    constructor(scene, x, y, target = 20){\n        this.current = 0;\n        //\n        this.width = 400;\n        this.height = 50;\n        this.padding = 10;\n        this.scene = scene;\n        this.target = target;\n        this.startX = x - this.width / 2;\n        this.startY = y - this.height / 2;\n        this.progressBox = this.scene.add.graphics();\n        this.progressBox.fillStyle(0x222222, 0.8);\n        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);\n        this.progressBar = this.scene.add.graphics();\n        this.renderProgressBar();\n        this.renderBulbButton();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDbUIsR0FBRyxDQUFDWSxRQUFRO1FBQzFDLElBQUksQ0FBQ3ZCLGlCQUFpQjtRQUV0QixJQUFJLENBQUNTLGdCQUFnQjtJQUN6QjtBQWlDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvUGxheWVyQXR0YWNrQmFyLnRzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckF0dGFja0JhcntcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZShcImJ1bGJcIiwgXCJhc3NldHMvYWR2ZW50dXJlL2dhbWUvYnVsYi5wbmdcIik7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoXCJidWxiQmFja1wiLCBcImFzc2V0cy9hZHZlbnR1cmUvZ2FtZS9idWxiQmFjay5wbmdcIik7XG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgLy9cbiAgICB0YXJnZXQ6IG51bWJlclxuICAgIGN1cnJlbnQ6IG51bWJlciA9IDBcbiAgICAvL1xuICAgIHdpZHRoOiBudW1iZXIgPSA0MDBcbiAgICBoZWlnaHQ6IG51bWJlciA9IDUwXG4gICAgcGFkZGluZzogbnVtYmVyID0gMTBcbiAgICBzdGFydFg6IG51bWJlclxuICAgIHN0YXJ0WTogbnVtYmVyXG4gICAgLy9cbiAgICBwcm9ncmVzc0JhcjogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICBwcm9ncmVzc0JveDogR2FtZU9iamVjdHMuR3JhcGhpY3NcbiAgICAvL1xuICAgIGJ1bGJDb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGJ1bGI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGJ1bGJCYWNrOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBcbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6U2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0YXJnZXQ6IG51bWJlciA9IDIwICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuXG4gICAgICAgIHRoaXMuc3RhcnRYID0geCAtICh0aGlzLndpZHRoLzIpXG4gICAgICAgIHRoaXMuc3RhcnRZID0geSAtICh0aGlzLmhlaWdodC8yKVxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCb3ggPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQm94LmZpbGxTdHlsZSgweDIyMjIyMiwgMC44KTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JveC5maWxsUmVjdCh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmVzc0JhcigpXG5cbiAgICAgICAgdGhpcy5yZW5kZXJCdWxiQnV0dG9uKClcbiAgICB9XG5cbiAgICBhZGRWYWx1ZSggdmFsdWUgOm51bWJlcil7XG4gICAgICAgIGxldCBuZXdDdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgdmFsdWVcblxuICAgICAgICBpZiggbmV3Q3VycmVudCA+IHRoaXMudGFyZ2V0ICl7XG4gICAgICAgICAgICBuZXdDdXJyZW50ID0gdGhpcy50YXJnZXRcbiAgICAgICAgfWVsc2UgaWYoIG5ld0N1cnJlbnQgPCAwICl7XG4gICAgICAgICAgICBuZXdDdXJyZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3Q3VycmVudFxuXG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKVxuICAgIH1cblxuICAgIHJlbmRlclByb2dyZXNzQmFyKCl7XG4gICAgICAgIGxldCB3aWR0aCA9ICggdGhpcy53aWR0aCAtICgyKnRoaXMucGFkZGluZykgKSAqICggdGhpcy5jdXJyZW50IC8gdGhpcy50YXJnZXQpXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodCAtICgyKnRoaXMucGFkZGluZylcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JveC5maWxsU3R5bGUoMHgwMGZmMDAsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQm94LmZpbGxSZWN0KHRoaXMuc3RhcnRYK3RoaXMucGFkZGluZywgdGhpcy5zdGFydFkrdGhpcy5wYWRkaW5nLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZW5kZXJCdWxiQnV0dG9uKCl7XG4gICAgICAgIHRoaXMuYnVsYkNvbnRhaW5lciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcihHYW1lTGliLnNjcmVlbldpZHRoLzIsR2FtZUxpYi5zY3JlZW5IZWlnaHQvMikuc2V0RGVwdGgoOTAwKTtcbiAgICAgICAgdGhpcy5idWxiQmFjayA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ2J1bGJCYWNrJyk7XG4gICAgICAgIHRoaXMuYnVsYiA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ2J1bGInKTtcblxuICAgICAgICB0aGlzLmJ1bGJDb250YWluZXIuYWRkKHRoaXMuYnVsYkJhY2spO1xuICAgICAgICB0aGlzLmJ1bGJDb250YWluZXIuYWRkKHRoaXMuYnVsYik7XG5cbiAgICAgICAgdGhpcy5idWxiQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIlBsYXllckF0dGFja0JhciIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsImFkZFZhbHVlIiwidmFsdWUiLCJuZXdDdXJyZW50IiwiY3VycmVudCIsInRhcmdldCIsInJlbmRlclByb2dyZXNzQmFyIiwid2lkdGgiLCJwYWRkaW5nIiwiaGVpZ2h0IiwicHJvZ3Jlc3NCb3giLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0WCIsInN0YXJ0WSIsInJlbmRlckJ1bGJCdXR0b24iLCJidWxiQ29udGFpbmVyIiwiYWRkIiwiY29udGFpbmVyIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJzZXREZXB0aCIsImJ1bGJCYWNrIiwic3ByaXRlIiwiYnVsYiIsInNldFZpc2libGUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiZ3JhcGhpY3MiLCJwcm9ncmVzc0JhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/PlayerAttackBar.ts\n"));

/***/ })

});