"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_AppAdventure_tsx",{

/***/ "./src/adventure/components/Map/ViewPosController.ts":
/*!***********************************************************!*\
  !*** ./src/adventure/components/Map/ViewPosController.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ViewPosController; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _MapEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\n\nclass ViewPosController {\n    static preload(scene) {\n    //\n    }\n    update(moveState, isReachStart, isReachEnd) {\n        // If reach start, force to left side\n        if (isReachStart) {\n            this.viewPerspective = \"default\";\n            this.moveViewPosition(\"Q3\");\n            return;\n        }\n        if (isReachEnd) {\n            this.viewPerspective = \"default\";\n            this.moveViewPosition(\"Q1\");\n            return;\n        }\n        if (moveState == \"idle\") return;\n        // Player avatar move based on avatar facing, middle\n        if (this.viewPerspective != moveState) {\n            this.viewPerspective = moveState;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            //\n            this.movePrespectivePosition(\"Q2\");\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (moveState == \"left\") {\n                        this.movePrespectivePosition(\"Q3\");\n                    } else if (moveState == \"right\") {\n                        this.movePrespectivePosition(\"Q1\");\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    moveViewPosition(newPos) {\n        if (this.viewPosition == newPos) return;\n        let toMove = false;\n        let newX = 0;\n        if (newPos == _MapEnum__WEBPACK_IMPORTED_MODULE_1__.ViewPosition.Q1) {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quaterX - 50;\n        } else if (perspectivePosition == \"Q2\") {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midX;\n        } else if (perspectivePosition == \"Q3\") {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quater3X + 50;\n        }\n        if (toMove) {\n            this.viewPerspectivePosition = perspectivePosition;\n            this.scene.tweens.add({\n                targets: [\n                    this.world\n                ],\n                x: newX,\n                ease: \"Cubic\",\n                duration: 1000\n            });\n        }\n    }\n    // Callback\n    constructor(scene, world){\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100 // Time waited to change camera position\n        ;\n        this.scene = scene;\n        this.world = world;\n        // Init position to middle\n        this.moveViewPosition();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL1ZpZXdQb3NDb250cm9sbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNvQztBQUNLO0FBRTFCLE1BQU1FO0lBQ2pCLE9BQU9DLFFBQVNDLEtBQVksRUFBRTtJQUMzQixFQUFFO0lBQ0w7SUFxQkFDLE9BQVFDLFNBQWdCLEVBQUVDLFlBQW9CLEVBQUVDLFVBQWtCLEVBQUU7UUFDaEUscUNBQXFDO1FBQ3JDLElBQUlELGNBQWM7WUFDZCxJQUFJLENBQUNFLGVBQWUsR0FBRztZQUN2QixJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQ3RCO1FBQ0o7UUFDQSxJQUFJRixZQUFZO1lBQ1osSUFBSSxDQUFDQyxlQUFlLEdBQUc7WUFDdkIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUN0QjtRQUNKO1FBRUEsSUFBSUosYUFBYSxRQUFTO1FBRTFCLG9EQUFvRDtRQUNwRCxJQUFJLElBQUksQ0FBQ0csZUFBZSxJQUFJSCxXQUFXO1lBQ25DLElBQUksQ0FBQ0csZUFBZSxHQUFHSDtZQUN2QixJQUFJLENBQUNLLG9CQUFvQixHQUFHO1lBQzVCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUc7WUFDNUIsRUFBRTtZQUNGLElBQUksQ0FBQ0MsdUJBQXVCLENBQUM7UUFDakMsT0FBSztZQUNELElBQUksQ0FBQyxJQUFJLENBQUNELG9CQUFvQixFQUFFO2dCQUM1QixJQUFJLENBQUNELG9CQUFvQixJQUFJO2dCQUM3QixJQUFJLElBQUksQ0FBQ0Esb0JBQW9CLEdBQUcsSUFBSSxDQUFDRyx3QkFBd0IsRUFBRTtvQkFDM0QsSUFBSVIsYUFBYSxRQUFRO3dCQUNyQixJQUFJLENBQUNPLHVCQUF1QixDQUFDO29CQUNqQyxPQUFNLElBQUlQLGFBQWEsU0FBUzt3QkFDNUIsSUFBSSxDQUFDTyx1QkFBdUIsQ0FBQztvQkFDakM7b0JBRUEsSUFBSSxDQUFDRCxvQkFBb0IsR0FBRztnQkFDaEM7WUFDSjtRQUNKO0lBQ0o7SUFFQUYsaUJBQWtCSyxNQUFvQixFQUFFO1FBQ3BDLElBQUksSUFBSSxDQUFDQyxZQUFZLElBQUlELFFBQVM7UUFFbEMsSUFBSUUsU0FBa0I7UUFDdEIsSUFBSUMsT0FBZTtRQUNuQixJQUFJSCxVQUFVZCxrREFBWUEsQ0FBQ2tCLEVBQUUsRUFBRTtZQUMzQkYsU0FBUztZQUNUQyxPQUFPbEIsNERBQWUsR0FBRztRQUM3QixPQUFNLElBQUlxQix1QkFBdUIsTUFBTTtZQUNuQ0osU0FBUztZQUNUQyxPQUFPbEIseURBQVk7UUFDdkIsT0FBTSxJQUFJcUIsdUJBQXVCLE1BQU07WUFDbkNKLFNBQVM7WUFDVEMsT0FBT2xCLDZEQUFnQixHQUFHO1FBQzlCO1FBRUEsSUFBSWlCLFFBQVE7WUFDUixJQUFJLENBQUNPLHVCQUF1QixHQUFHSDtZQUMvQixJQUFJLENBQUNqQixLQUFLLENBQUNxQixNQUFNLENBQUNDLEdBQUcsQ0FBQztnQkFDbEJDLFNBQVM7b0JBQUMsSUFBSSxDQUFDQyxLQUFLO2lCQUFDO2dCQUNyQkMsR0FBSVg7Z0JBQ0pZLE1BQU07Z0JBQ05DLFVBQVU7WUFDZDtRQUNKO0lBQ0o7SUF6RUEsV0FBVztJQUVYQyxZQUFZNUIsS0FBVyxFQUFFd0IsS0FBMkIsQ0FBQztRQVRyRCxFQUFFO2FBQ0ZuQixrQkFBMEI7YUFHMUJLLDJCQUFtQyxJQUFJLHdDQUF3Qzs7UUFNM0UsSUFBSSxDQUFDVixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDd0IsS0FBSyxHQUFHQTtRQUViLDBCQUEwQjtRQUMxQixJQUFJLENBQUNsQixnQkFBZ0I7SUFDekI7QUFrRUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL1ZpZXdQb3NDb250cm9sbGVyLnRzP2JlZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgVmlld1Bvc2l0aW9uIH0gZnJvbSBcIi4vTWFwRW51bVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3UG9zQ29udHJvbGxlcntcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG4gICAgICAgLy9cbiAgICB9XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICB3b3JsZDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICB2aWV3UGVyc3BlY3RpdmU6IHN0cmluZyA9ICdkZWZhdWx0JyBcbiAgICB2aWV3UGVyc3BlY3RpdmVBcHBseTogYm9vbGVhblxuICAgIHZpZXdQZXJzcGVjdGl2ZVZhbHVlOiBudW1iZXJcbiAgICB2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQ6IG51bWJlciA9IDEwMCAvLyBUaW1lIHdhaXRlZCB0byBjaGFuZ2UgY2FtZXJhIHBvc2l0aW9uXG4gICAgdmlld1Bvc2l0aW9uOiBWaWV3UG9zaXRpb25cblxuICAgIC8vIENhbGxiYWNrXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgd29ybGQ6R2FtZU9iamVjdHMuQ29udGFpbmVyKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZFxuXG4gICAgICAgIC8vIEluaXQgcG9zaXRpb24gdG8gbWlkZGxlXG4gICAgICAgIHRoaXMubW92ZVZpZXdQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHVwZGF0ZSggbW92ZVN0YXRlOnN0cmluZywgaXNSZWFjaFN0YXJ0OmJvb2xlYW4sIGlzUmVhY2hFbmQ6Ym9vbGVhbiApe1xuICAgICAgICAvLyBJZiByZWFjaCBzdGFydCwgZm9yY2UgdG8gbGVmdCBzaWRlXG4gICAgICAgIGlmKCBpc1JlYWNoU3RhcnQgKXsgXG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZSA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIHRoaXMubW92ZVZpZXdQb3NpdGlvbignUTMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIGlzUmVhY2hFbmQgKXtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVmlld1Bvc2l0aW9uKCdRMScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG1vdmVTdGF0ZSA9PSAnaWRsZScgKSByZXR1cm47XG5cbiAgICAgICAgLy8gUGxheWVyIGF2YXRhciBtb3ZlIGJhc2VkIG9uIGF2YXRhciBmYWNpbmcsIG1pZGRsZVxuICAgICAgICBpZiggdGhpcy52aWV3UGVyc3BlY3RpdmUgIT0gbW92ZVN0YXRlICl7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZSA9IG1vdmVTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgPSAwO1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSA9IGZhbHNlO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMubW92ZVByZXNwZWN0aXZlUG9zaXRpb24oJ1EyJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoICF0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ICl7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlID4gdGhpcy52aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIG1vdmVTdGF0ZSA9PSAnbGVmdCcgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVByZXNwZWN0aXZlUG9zaXRpb24oJ1EzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBtb3ZlU3RhdGUgPT0gJ3JpZ2h0JyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUHJlc3BlY3RpdmVQb3NpdGlvbignUTEnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVWaWV3UG9zaXRpb24oIG5ld1BvczogVmlld1Bvc2l0aW9uICl7XG4gICAgICAgIGlmKCB0aGlzLnZpZXdQb3NpdGlvbiA9PSBuZXdQb3MgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHRvTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3WDogbnVtYmVyID0gMDtcbiAgICAgICAgaWYoIG5ld1BvcyA9PSBWaWV3UG9zaXRpb24uUTEgKXtcbiAgICAgICAgICAgIHRvTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBuZXdYID0gR2FtZUxpYi5xdWF0ZXJYIC0gNTA7XG4gICAgICAgIH1lbHNlIGlmKCBwZXJzcGVjdGl2ZVBvc2l0aW9uID09ICdRMicgKXtcbiAgICAgICAgICAgIHRvTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBuZXdYID0gR2FtZUxpYi5taWRYO1xuICAgICAgICB9ZWxzZSBpZiggcGVyc3BlY3RpdmVQb3NpdGlvbiA9PSAnUTMnICl7XG4gICAgICAgICAgICB0b01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV3WCA9IEdhbWVMaWIucXVhdGVyM1ggKyA1MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0b01vdmUgKXtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlUG9zaXRpb24gPSBwZXJzcGVjdGl2ZVBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZF0sXG4gICAgICAgICAgICAgICAgeDogIG5ld1gsXG4gICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIlZpZXdQb3NpdGlvbiIsIlZpZXdQb3NDb250cm9sbGVyIiwicHJlbG9hZCIsInNjZW5lIiwidXBkYXRlIiwibW92ZVN0YXRlIiwiaXNSZWFjaFN0YXJ0IiwiaXNSZWFjaEVuZCIsInZpZXdQZXJzcGVjdGl2ZSIsIm1vdmVWaWV3UG9zaXRpb24iLCJ2aWV3UGVyc3BlY3RpdmVWYWx1ZSIsInZpZXdQZXJzcGVjdGl2ZUFwcGx5IiwibW92ZVByZXNwZWN0aXZlUG9zaXRpb24iLCJ2aWV3UGVyc3BlY3RpdmVUaHJlc2hvbGQiLCJuZXdQb3MiLCJ2aWV3UG9zaXRpb24iLCJ0b01vdmUiLCJuZXdYIiwiUTEiLCJxdWF0ZXJYIiwicGVyc3BlY3RpdmVQb3NpdGlvbiIsIm1pZFgiLCJxdWF0ZXIzWCIsInZpZXdQZXJzcGVjdGl2ZVBvc2l0aW9uIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsIndvcmxkIiwieCIsImVhc2UiLCJkdXJhdGlvbiIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/ViewPosController.ts\n"));

/***/ })

});