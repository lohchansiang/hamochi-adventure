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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerAttackBar; }\n/* harmony export */ });\nclass PlayerAttackBar {\n    addValue(value) {\n        let newCurrent = this.current + value;\n        if (newCurrent > this.target) {\n            newCurrent = this.target;\n        } else if (newCurrent < 0) {\n            newCurrent = 0;\n        }\n        this.current = newCurrent;\n        this.renderProgressBar();\n    }\n    renderProgressBar() {\n        let width = (this.width - 2 * this.padding) * (this.current / this.target);\n        let height = this.height - 2 * this.padding;\n        this.progressBox.fillStyle(0xffffff, 1);\n        this.progressBox.fillRect(this.startX + this.padding, this.startY + this.padding, width, height);\n    }\n    constructor(scene, x, y, target = 20){\n        this.current = 10;\n        //\n        this.width = 400;\n        this.height = 50;\n        this.padding = 10;\n        this.scene = scene;\n        this.target = target;\n        this.startX = x - this.width / 2;\n        this.startY = y - this.height / 2;\n        this.progressBox = this.scene.add.graphics();\n        this.progressBox.fillStyle(0x222222, 0.8);\n        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);\n        this.progressBar = this.scene.add.graphics();\n        this.renderProgressBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL1BsYXllckF0dGFja0Jhci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsTUFBTUE7SUErQmpCQyxTQUFVQyxLQUFhLEVBQUM7UUFDcEIsSUFBSUMsYUFBYSxJQUFJLENBQUNDLE9BQU8sR0FBR0Y7UUFFaEMsSUFBSUMsYUFBYSxJQUFJLENBQUNFLE1BQU0sRUFBRTtZQUMxQkYsYUFBYSxJQUFJLENBQUNFLE1BQU07UUFDNUIsT0FBTSxJQUFJRixhQUFhLEdBQUc7WUFDdEJBLGFBQWE7UUFDakI7UUFFQSxJQUFJLENBQUNDLE9BQU8sR0FBR0Q7UUFFZixJQUFJLENBQUNHLGlCQUFpQjtJQUMxQjtJQUVBQSxvQkFBbUI7UUFDZixJQUFJQyxRQUFRLENBQUUsSUFBSSxDQUFDQSxLQUFLLEdBQUksSUFBRSxJQUFJLENBQUNDLE9BQU8sSUFBUSxLQUFJLENBQUNKLE9BQU8sR0FBRyxJQUFJLENBQUNDLE1BQU07UUFDNUUsSUFBSUksU0FBUyxJQUFJLENBQUNBLE1BQU0sR0FBSSxJQUFFLElBQUksQ0FBQ0QsT0FBTztRQUMxQyxJQUFJLENBQUNFLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLFVBQVU7UUFDckMsSUFBSSxDQUFDRCxXQUFXLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNDLE1BQU0sR0FBQyxJQUFJLENBQUNMLE9BQU8sRUFBRSxJQUFJLENBQUNNLE1BQU0sR0FBQyxJQUFJLENBQUNOLE9BQU8sRUFBRUQsT0FBT0U7SUFDekY7SUFsQ0FNLFlBQWFDLEtBQVcsRUFBRUMsQ0FBUyxFQUFFQyxDQUFTLEVBQUViLFNBQWlCLEVBQUUsQ0FBRTthQVhyRUQsVUFBa0I7UUFDbEIsRUFBRTthQUNGRyxRQUFnQjthQUNoQkUsU0FBaUI7YUFDakJELFVBQWtCO1FBUWQsSUFBSSxDQUFDUSxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDWCxNQUFNLEdBQUdBO1FBRWQsSUFBSSxDQUFDUSxNQUFNLEdBQUdJLElBQUssSUFBSSxDQUFDVixLQUFLLEdBQUM7UUFDOUIsSUFBSSxDQUFDTyxNQUFNLEdBQUdJLElBQUssSUFBSSxDQUFDVCxNQUFNLEdBQUM7UUFFL0IsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDTSxLQUFLLENBQUNHLEdBQUcsQ0FBQ0MsUUFBUTtRQUMxQyxJQUFJLENBQUNWLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLFVBQVU7UUFDckMsSUFBSSxDQUFDRCxXQUFXLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNQLEtBQUssRUFBRSxJQUFJLENBQUNFLE1BQU07UUFFM0UsSUFBSSxDQUFDWSxXQUFXLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUNHLEdBQUcsQ0FBQ0MsUUFBUTtRQUMxQyxJQUFJLENBQUNkLGlCQUFpQjtJQUMxQjtBQXNCSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvUGxheWVyQXR0YWNrQmFyLnRzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckF0dGFja0JhcntcblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIC8vXG4gICAgdGFyZ2V0OiBudW1iZXJcbiAgICBjdXJyZW50OiBudW1iZXIgPSAxMFxuICAgIC8vXG4gICAgd2lkdGg6IG51bWJlciA9IDQwMFxuICAgIGhlaWdodDogbnVtYmVyID0gNTBcbiAgICBwYWRkaW5nOiBudW1iZXIgPSAxMFxuICAgIHN0YXJ0WDogbnVtYmVyXG4gICAgc3RhcnRZOiBudW1iZXJcbiAgICAvL1xuICAgIHByb2dyZXNzQmFyOiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIHByb2dyZXNzQm94OiBHYW1lT2JqZWN0cy5HcmFwaGljc1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRhcmdldDogbnVtYmVyID0gMjAgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgICAgdGhpcy5zdGFydFggPSB4IC0gKHRoaXMud2lkdGgvMilcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5IC0gKHRoaXMuaGVpZ2h0LzIpXG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0JveCA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCb3guZmlsbFN0eWxlKDB4MjIyMjIyLCAwLjgpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQm94LmZpbGxSZWN0KHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICB0aGlzLnJlbmRlclByb2dyZXNzQmFyKClcbiAgICB9XG5cbiAgICBhZGRWYWx1ZSggdmFsdWUgOm51bWJlcil7XG4gICAgICAgIGxldCBuZXdDdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgdmFsdWVcblxuICAgICAgICBpZiggbmV3Q3VycmVudCA+IHRoaXMudGFyZ2V0ICl7XG4gICAgICAgICAgICBuZXdDdXJyZW50ID0gdGhpcy50YXJnZXRcbiAgICAgICAgfWVsc2UgaWYoIG5ld0N1cnJlbnQgPCAwICl7XG4gICAgICAgICAgICBuZXdDdXJyZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3Q3VycmVudFxuXG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKVxuICAgIH1cblxuICAgIHJlbmRlclByb2dyZXNzQmFyKCl7XG4gICAgICAgIGxldCB3aWR0aCA9ICggdGhpcy53aWR0aCAtICgyKnRoaXMucGFkZGluZykgKSAqICggdGhpcy5jdXJyZW50IC8gdGhpcy50YXJnZXQpXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodCAtICgyKnRoaXMucGFkZGluZylcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JveC5maWxsU3R5bGUoMHhmZmZmZmYsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQm94LmZpbGxSZWN0KHRoaXMuc3RhcnRYK3RoaXMucGFkZGluZywgdGhpcy5zdGFydFkrdGhpcy5wYWRkaW5nLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlBsYXllckF0dGFja0JhciIsImFkZFZhbHVlIiwidmFsdWUiLCJuZXdDdXJyZW50IiwiY3VycmVudCIsInRhcmdldCIsInJlbmRlclByb2dyZXNzQmFyIiwid2lkdGgiLCJwYWRkaW5nIiwiaGVpZ2h0IiwicHJvZ3Jlc3NCb3giLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0WCIsInN0YXJ0WSIsImNvbnN0cnVjdG9yIiwic2NlbmUiLCJ4IiwieSIsImFkZCIsImdyYXBoaWNzIiwicHJvZ3Jlc3NCYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/PlayerAttackBar.ts\n"));

/***/ })

});