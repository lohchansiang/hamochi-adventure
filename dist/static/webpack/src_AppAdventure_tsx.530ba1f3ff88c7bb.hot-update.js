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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ViewPosController; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _MapEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\n\nclass ViewPosController {\n    static preload(scene) {\n    //\n    }\n    update(moveState, mapPos) {\n        // If reach start, force to left side\n        if (mapPos == _MapEnum__WEBPACK_IMPORTED_MODULE_1__.MapPosition.START) {\n            this.viewPerspective = \"default\";\n            this.moveViewPosition(\"Q3\");\n            return;\n        }\n        if (isReachEnd) {\n            this.viewPerspective = \"default\";\n            this.moveViewPosition(\"Q1\");\n            return;\n        }\n        if (moveState == \"idle\") return;\n        // Player avatar move based on avatar facing, middle\n        if (this.viewPerspective != moveState) {\n            this.viewPerspective = moveState;\n            this.viewPerspectiveValue = 0;\n            this.viewPerspectiveApply = false;\n            //\n            this.movePrespectivePosition(\"Q2\");\n        } else {\n            if (!this.viewPerspectiveApply) {\n                this.viewPerspectiveValue += 1;\n                if (this.viewPerspectiveValue > this.viewPerspectiveThreshold) {\n                    if (moveState == \"left\") {\n                        this.movePrespectivePosition(\"Q3\");\n                    } else if (moveState == \"right\") {\n                        this.movePrespectivePosition(\"Q1\");\n                    }\n                    this.viewPerspectiveApply = true;\n                }\n            }\n        }\n    }\n    moveViewPosition(newViewPos) {\n        if (this.viewPosition == newViewPos) return;\n        let toMove = false;\n        let newX = 0;\n        if (newViewPos == _MapEnum__WEBPACK_IMPORTED_MODULE_1__.ViewPosition.Q1) {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quaterX - 50;\n        } else if (newViewPos == _MapEnum__WEBPACK_IMPORTED_MODULE_1__.ViewPosition.Q2) {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midX;\n        } else if (newViewPos == _MapEnum__WEBPACK_IMPORTED_MODULE_1__.ViewPosition.Q3) {\n            toMove = true;\n            newX = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quater3X + 50;\n        }\n        if (toMove) {\n            this.viewPosition = newViewPos;\n            this.scene.tweens.add({\n                targets: [\n                    this.world\n                ],\n                x: newX,\n                ease: \"Cubic\",\n                duration: 1000\n            });\n        }\n    }\n    // Callback\n    constructor(scene, world){\n        //\n        this.viewPerspective = \"default\";\n        this.viewPerspectiveThreshold = 100 // Time waited to change camera position\n        ;\n        this.scene = scene;\n        this.world = world;\n        // Init position to middle\n        this.moveViewPosition(_MapEnum__WEBPACK_IMPORTED_MODULE_1__.ViewPosition.Q2);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL1ZpZXdQb3NDb250cm9sbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNvQztBQUNrQjtBQUV2QyxNQUFNRztJQUNqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUU7SUFDM0IsRUFBRTtJQUNMO0lBcUJBQyxPQUFRQyxTQUFnQixFQUFFQyxNQUFtQixFQUFFO1FBQzNDLHFDQUFxQztRQUNyQyxJQUFJQSxVQUFVUCxpREFBV0EsQ0FBQ1EsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQ0MsZUFBZSxHQUFHO1lBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7WUFDdEI7UUFDSjtRQUNBLElBQUlDLFlBQVk7WUFDWixJQUFJLENBQUNGLGVBQWUsR0FBRztZQUN2QixJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQ3RCO1FBQ0o7UUFFQSxJQUFJSixhQUFhLFFBQVM7UUFFMUIsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxDQUFDRyxlQUFlLElBQUlILFdBQVc7WUFDbkMsSUFBSSxDQUFDRyxlQUFlLEdBQUdIO1lBQ3ZCLElBQUksQ0FBQ00sb0JBQW9CLEdBQUc7WUFDNUIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBRztZQUM1QixFQUFFO1lBQ0YsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQztRQUNqQyxPQUFLO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQ0Qsb0JBQW9CLEVBQUU7Z0JBQzVCLElBQUksQ0FBQ0Qsb0JBQW9CLElBQUk7Z0JBQzdCLElBQUksSUFBSSxDQUFDQSxvQkFBb0IsR0FBRyxJQUFJLENBQUNHLHdCQUF3QixFQUFFO29CQUMzRCxJQUFJVCxhQUFhLFFBQVE7d0JBQ3JCLElBQUksQ0FBQ1EsdUJBQXVCLENBQUM7b0JBQ2pDLE9BQU0sSUFBSVIsYUFBYSxTQUFTO3dCQUM1QixJQUFJLENBQUNRLHVCQUF1QixDQUFDO29CQUNqQztvQkFFQSxJQUFJLENBQUNELG9CQUFvQixHQUFHO2dCQUNoQztZQUNKO1FBQ0o7SUFDSjtJQUVBSCxpQkFBa0JNLFVBQXdCLEVBQUU7UUFDeEMsSUFBSSxJQUFJLENBQUNDLFlBQVksSUFBSUQsWUFBYTtRQUV0QyxJQUFJRSxTQUFrQjtRQUN0QixJQUFJQyxPQUFlO1FBQ25CLElBQUlILGNBQWNmLGtEQUFZQSxDQUFDbUIsRUFBRSxFQUFFO1lBQy9CRixTQUFTO1lBQ1RDLE9BQU9wQiw0REFBZSxHQUFHO1FBQzdCLE9BQU0sSUFBSWlCLGNBQWNmLGtEQUFZQSxDQUFDcUIsRUFBRSxFQUFFO1lBQ3JDSixTQUFTO1lBQ1RDLE9BQU9wQix5REFBWTtRQUN2QixPQUFNLElBQUlpQixjQUFjZixrREFBWUEsQ0FBQ3VCLEVBQUUsRUFBRTtZQUNyQ04sU0FBUztZQUNUQyxPQUFPcEIsNkRBQWdCLEdBQUc7UUFDOUI7UUFFQSxJQUFJbUIsUUFBUTtZQUNSLElBQUksQ0FBQ0QsWUFBWSxHQUFHRDtZQUNwQixJQUFJLENBQUNaLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO2dCQUNsQkMsU0FBUztvQkFBQyxJQUFJLENBQUNDLEtBQUs7aUJBQUM7Z0JBQ3JCQyxHQUFJWDtnQkFDSlksTUFBTTtnQkFDTkMsVUFBVTtZQUNkO1FBQ0o7SUFDSjtJQXpFQSxXQUFXO0lBRVhDLFlBQVk3QixLQUFXLEVBQUV5QixLQUEyQixDQUFDO1FBVHJELEVBQUU7YUFDRnBCLGtCQUEwQjthQUcxQk0sMkJBQW1DLElBQUksd0NBQXdDOztRQU0zRSxJQUFJLENBQUNYLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUN5QixLQUFLLEdBQUdBO1FBRWIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQ25CLGdCQUFnQixDQUFDVCxrREFBWUEsQ0FBQ3FCLEVBQUU7SUFDekM7QUFrRUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL1ZpZXdQb3NDb250cm9sbGVyLnRzP2JlZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgTWFwUG9zaXRpb24sIFZpZXdQb3NpdGlvbiB9IGZyb20gXCIuL01hcEVudW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Bvc0NvbnRyb2xsZXJ7XG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgIC8vXG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgd29ybGQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgdmlld1BlcnNwZWN0aXZlOiBzdHJpbmcgPSAnZGVmYXVsdCcgXG4gICAgdmlld1BlcnNwZWN0aXZlQXBwbHk6IGJvb2xlYW5cbiAgICB2aWV3UGVyc3BlY3RpdmVWYWx1ZTogbnVtYmVyXG4gICAgdmlld1BlcnNwZWN0aXZlVGhyZXNob2xkOiBudW1iZXIgPSAxMDAgLy8gVGltZSB3YWl0ZWQgdG8gY2hhbmdlIGNhbWVyYSBwb3NpdGlvblxuICAgIHZpZXdQb3NpdGlvbjogVmlld1Bvc2l0aW9uXG5cbiAgICAvLyBDYWxsYmFja1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6U2NlbmUsIHdvcmxkOkdhbWVPYmplY3RzLkNvbnRhaW5lcil7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGRcblxuICAgICAgICAvLyBJbml0IHBvc2l0aW9uIHRvIG1pZGRsZVxuICAgICAgICB0aGlzLm1vdmVWaWV3UG9zaXRpb24oVmlld1Bvc2l0aW9uLlEyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoIG1vdmVTdGF0ZTpzdHJpbmcsIG1hcFBvczogTWFwUG9zaXRpb24gKXtcbiAgICAgICAgLy8gSWYgcmVhY2ggc3RhcnQsIGZvcmNlIHRvIGxlZnQgc2lkZVxuICAgICAgICBpZiggbWFwUG9zID09IE1hcFBvc2l0aW9uLlNUQVJUICl7IFxuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICB0aGlzLm1vdmVWaWV3UG9zaXRpb24oJ1EzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmKCBpc1JlYWNoRW5kICl7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZSA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIHRoaXMubW92ZVZpZXdQb3NpdGlvbignUTEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBtb3ZlU3RhdGUgPT0gJ2lkbGUnICkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFBsYXllciBhdmF0YXIgbW92ZSBiYXNlZCBvbiBhdmF0YXIgZmFjaW5nLCBtaWRkbGVcbiAgICAgICAgaWYoIHRoaXMudmlld1BlcnNwZWN0aXZlICE9IG1vdmVTdGF0ZSApe1xuICAgICAgICAgICAgdGhpcy52aWV3UGVyc3BlY3RpdmUgPSBtb3ZlU3RhdGU7XG4gICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZVZhbHVlID0gMDtcbiAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlQXBwbHkgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB0aGlzLm1vdmVQcmVzcGVjdGl2ZVBvc2l0aW9uKCdRMicpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKCAhdGhpcy52aWV3UGVyc3BlY3RpdmVBcHBseSApe1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1BlcnNwZWN0aXZlVmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy52aWV3UGVyc3BlY3RpdmVWYWx1ZSA+IHRoaXMudmlld1BlcnNwZWN0aXZlVGhyZXNob2xkICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBtb3ZlU3RhdGUgPT0gJ2xlZnQnICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQcmVzcGVjdGl2ZVBvc2l0aW9uKCdRMycpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiggbW92ZVN0YXRlID09ICdyaWdodCcgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVByZXNwZWN0aXZlUG9zaXRpb24oJ1ExJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQZXJzcGVjdGl2ZUFwcGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVmlld1Bvc2l0aW9uKCBuZXdWaWV3UG9zOiBWaWV3UG9zaXRpb24gKXtcbiAgICAgICAgaWYoIHRoaXMudmlld1Bvc2l0aW9uID09IG5ld1ZpZXdQb3MgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHRvTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3WDogbnVtYmVyID0gMDtcbiAgICAgICAgaWYoIG5ld1ZpZXdQb3MgPT0gVmlld1Bvc2l0aW9uLlExICl7XG4gICAgICAgICAgICB0b01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV3WCA9IEdhbWVMaWIucXVhdGVyWCAtIDUwO1xuICAgICAgICB9ZWxzZSBpZiggbmV3Vmlld1BvcyA9PSBWaWV3UG9zaXRpb24uUTIgKXtcbiAgICAgICAgICAgIHRvTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBuZXdYID0gR2FtZUxpYi5taWRYO1xuICAgICAgICB9ZWxzZSBpZiggbmV3Vmlld1BvcyA9PSBWaWV3UG9zaXRpb24uUTMgKXtcbiAgICAgICAgICAgIHRvTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBuZXdYID0gR2FtZUxpYi5xdWF0ZXIzWCArIDUwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHRvTW92ZSApe1xuICAgICAgICAgICAgdGhpcy52aWV3UG9zaXRpb24gPSBuZXdWaWV3UG9zO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy53b3JsZF0sXG4gICAgICAgICAgICAgICAgeDogIG5ld1gsXG4gICAgICAgICAgICAgICAgZWFzZTogJ0N1YmljJywgICAgICAgLy8gJ0N1YmljJywgJ0VsYXN0aWMnLCAnQm91bmNlJywgJ0JhY2snXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIk1hcFBvc2l0aW9uIiwiVmlld1Bvc2l0aW9uIiwiVmlld1Bvc0NvbnRyb2xsZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJ1cGRhdGUiLCJtb3ZlU3RhdGUiLCJtYXBQb3MiLCJTVEFSVCIsInZpZXdQZXJzcGVjdGl2ZSIsIm1vdmVWaWV3UG9zaXRpb24iLCJpc1JlYWNoRW5kIiwidmlld1BlcnNwZWN0aXZlVmFsdWUiLCJ2aWV3UGVyc3BlY3RpdmVBcHBseSIsIm1vdmVQcmVzcGVjdGl2ZVBvc2l0aW9uIiwidmlld1BlcnNwZWN0aXZlVGhyZXNob2xkIiwibmV3Vmlld1BvcyIsInZpZXdQb3NpdGlvbiIsInRvTW92ZSIsIm5ld1giLCJRMSIsInF1YXRlclgiLCJRMiIsIm1pZFgiLCJRMyIsInF1YXRlcjNYIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsIndvcmxkIiwieCIsImVhc2UiLCJkdXJhdGlvbiIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/ViewPosController.ts\n"));

/***/ })

});