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

/***/ "./src/adventure/components/Map/SideMap.ts":
/*!*************************************************!*\
  !*** ./src/adventure/components/Map/SideMap.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideMap; }\n/* harmony export */ });\nclass SideMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapLayerCloud\", \"assets/adventure/maps/garden/LayerBack.png\");\n        scene.load.image(\"mapLayerMain\", \"assets/adventure/maps/garden/LayerMain.png\");\n        scene.load.image(\"mapLayerSky\", \"assets/adventure/maps/garden/LayerSky.png\");\n    }\n    constructor(scene, x, y){\n        //\n        this.skyY = 1000;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.sprite(0, 0, \"mapLayerSky\");\n        this.container.add(this.layerSky);\n        // Center Point\n        let center = this.scene.add.rectangle(0, 0, 25, 25, 0xff0000);\n        this.container.add(center);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL1NpZGVNYXAudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLE1BQU1BO0lBQ2pCLG9CQUFvQjtJQUVwQixPQUFPQyxRQUFTQyxLQUFZLEVBQUU7UUFDMUJBLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQjtRQUNsQ0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsZ0JBQWdCO1FBQ2pDRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxlQUFlO0lBQ3BDO0lBaUJBQyxZQUFZSCxLQUFXLEVBQUVJLENBQVEsRUFBRUMsQ0FBUSxDQUFFO1FBYjdDLEVBQUU7YUFDRkMsT0FBZTtRQWFYLElBQUksQ0FBQ04sS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQ08sU0FBUyxHQUFHLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxHQUFHLENBQUNELFNBQVMsQ0FBQ0gsR0FBRUM7UUFFNUMsYUFBYTtRQUNiLElBQUksQ0FBQ0ksUUFBUSxHQUFHLElBQUksQ0FBQ1QsS0FBSyxDQUFDUSxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFFLEdBQUU7UUFFMUMsSUFBSSxDQUFDSCxTQUFTLENBQUNDLEdBQUcsQ0FBRSxJQUFJLENBQUNDLFFBQVE7UUFHakMsZUFBZTtRQUNmLElBQUlFLFNBQVMsSUFBSSxDQUFDWCxLQUFLLENBQUNRLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDLEdBQUUsR0FBRSxJQUFHLElBQUc7UUFDaEQsSUFBSSxDQUFDTCxTQUFTLENBQUNDLEdBQUcsQ0FBRUc7SUFDeEI7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9NYXAvU2lkZU1hcC50cz9iM2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWFwe1xuICAgIC8vIFNpZGVzY3JvbGxpbmcgTWFwXG4gICAgXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllckNsb3VkJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vTGF5ZXJCYWNrLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllck1haW4nLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9MYXllck1haW4ucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyU2t5JywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vTGF5ZXJTa3kucG5nJyk7XG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvL1xuICAgIHNreVk6IG51bWJlciA9IDEwMDBcbiAgICBmYXJZOiBudW1iZXJcbiAgICBiYWNrWTogbnVtYmVyXG4gICAgbWFpblk6IG51bWJlclxuICAgIGZyb250WTogbnVtYmVyXG4gICAgLy9cbiAgICBsYXllclNreTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgbGF5ZXJGYXI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGxheWVyQmFjazogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgbGF5ZXJNYWluOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBsYXllckZyb250OiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG5cbiAgICAgICAgLy8gQWRkIExheWVyc1xuICAgICAgICB0aGlzLmxheWVyU2t5ID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwnbWFwTGF5ZXJTa3knKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoIHRoaXMubGF5ZXJTa3kgKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gQ2VudGVyIFBvaW50XG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDI1LDI1LDB4ZmYwMDAwKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKCBjZW50ZXIgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNpZGVNYXAiLCJwcmVsb2FkIiwic2NlbmUiLCJsb2FkIiwiaW1hZ2UiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic2t5WSIsImNvbnRhaW5lciIsImFkZCIsImxheWVyU2t5Iiwic3ByaXRlIiwiY2VudGVyIiwicmVjdGFuZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/SideMap.ts\n"));

/***/ })

});