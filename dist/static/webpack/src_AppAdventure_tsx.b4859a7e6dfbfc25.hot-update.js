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

/***/ "./src/adventure/components/Map/FixedMap.ts":
/*!**************************************************!*\
  !*** ./src/adventure/components/Map/FixedMap.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.maxDistance, this.currentX);\n        this.currentX = Math.max(this.minDistance, this.currentX);\n        this.renderMap();\n    }\n    renderMap() {\n        // Check if reach end, only work in middle part\n        if (this.isReachStart()) return;\n        if (this.isReachEnd()) return;\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(layerMainPosX);\n    }\n    isReachStart() {\n        return this.currentX < this.minDistance + this.startEndThreshold;\n    }\n    isReachEnd() {\n        return this.currentX > this.maxDistance - this.startEndThreshold;\n    }\n    isEndScene() {\n        if (this.isReachStart() || this.isReachEnd()) {\n            // Move avatar based on distance instead\n            if (this.currentX > this.minDistance && this.currentX < this.maxDistance) {\n                return true;\n            }\n        }\n        return false;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        this.mainWidth = 3240;\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 6000;\n        this.startEndThreshold = 600;\n        //\n        this.currentX = 3000;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerFront);\n        // Layer Sky\n        // let skyBefore = this.scene.add.sprite(-this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyCenter = this.scene.add.sprite(0,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyAfter = this.scene.add.sprite(this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // this.layerSky.add(skyBefore);\n        // this.layerSky.add(skyCenter);\n        // this.layerSky.add(skyAfter);\n        // // Layer Back\n        // let backBefore = this.scene.add.sprite(-this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backCenter = this.scene.add.sprite(0,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backAfter = this.scene.add.sprite(this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // this.layerBack.add(backBefore);\n        // this.layerBack.add(backCenter);\n        // this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        let totalDistance = 0;\n        mainList.forEach((mainMap)=>{\n            let texture = this.scene.textures.get(mainMap);\n            if (texture) {\n                totalDistance += texture.getSourceImage().width;\n            }\n        });\n        // let mainBefore = this.scene.add.sprite(-this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);\n        let mainCenter = this.scene.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY, \"mapMainDemo001\");\n        // let mainAfter = this.scene.add.sprite(this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);\n        // this.layerMain.add(mainBefore);\n        // this.layerMain.add(mainCenter);\n        // this.layerMain.add(mainAfter);\n        this.renderMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBR3JCLE1BQU1DO0lBQ2pCLG9CQUFvQjtJQUVwQixPQUFPQyxRQUFTQyxLQUFZLEVBQUU7UUFDMUJBLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQjtRQUNuQ0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsa0JBQWtCO1FBQ25DRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxrQkFBa0I7UUFDbkMsRUFBRTtRQUNGRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyx1QkFBdUI7UUFDeENGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLHVCQUF1QjtRQUN4Q0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCO0lBQzVDO0lBMkZBQyxPQUFRQyxNQUFjLEVBQUU7UUFDcEIsSUFBSUEsVUFBVSxHQUFJO1FBRWxCLGtCQUFrQjtRQUNsQixJQUFJLENBQUNDLFFBQVEsSUFBSUQ7UUFDakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBQyxJQUFJLENBQUNILFFBQVE7UUFDdkQsSUFBSSxDQUFDQSxRQUFRLEdBQUdDLEtBQUtHLEdBQUcsQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBQyxJQUFJLENBQUNMLFFBQVE7UUFFdkQsSUFBSSxDQUFDTSxTQUFTO0lBQ2xCO0lBRUFBLFlBQVc7UUFDUCwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLENBQUNDLFlBQVksSUFBSztRQUMxQixJQUFJLElBQUksQ0FBQ0MsVUFBVSxJQUFLO1FBRXhCLElBQUlDLGtCQUF5QixDQUFDLElBQUksSUFBSSxDQUFDVCxRQUFRO1FBQy9DLGdDQUFnQztRQUNoQyxJQUFJVSxlQUFlRCxrQkFBa0IsTUFBTSxJQUFJLENBQUNFLFFBQVE7UUFDeEQsSUFBSSxDQUFDQyxRQUFRLENBQUNDLElB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K0I7UUFFL0IsZ0JBQWdCO1FBQ2hCLDZGQUE2RjtRQUM3RiwrRUFBK0U7UUFDL0UsMkZBQTJGO1FBQzNGLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBRWpDLGFBQWE7UUFDYixJQUFJRSxXQUEwQjtZQUMxQjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDSDtRQUdELElBQUlDLGdCQUF3QjtRQUM1QkQsU0FBU0UsT0FBTyxDQUFDLENBQUNDO1lBQ2QsSUFBSUMsVUFBVSxJQUFJLENBQUM3QyxLQUFLLENBQUM4QyxRQUFRLENBQUNDLEdBQUcsQ0FBQ0g7WUFDdEMsSUFBSUMsU0FBUztnQkFDVEgsaUJBQWlCRyxRQUFRRyxjQUFjLEdBQUdDLEtBQUs7WUFDbkQ7UUFDSjtRQUVBLDZGQUE2RjtRQUM3RixJQUFJQyxhQUFhLElBQUksQ0FBQ2xELEtBQUssQ0FBQ29DLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDdEQseURBQVksRUFBQ0EseURBQVksRUFBQztRQUNqRSwyRkFBMkY7UUFDM0Ysa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDYyxTQUFTO0lBQ2xCO0FBZ0RKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9jb21wb25lbnRzL01hcC9GaXhlZE1hcC50cz8xOGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRNYXB7XG4gICAgLy8gU2lkZXNjcm9sbGluZyBNYXBcbiAgICBcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAxJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMS5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAyLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDMucG5nJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDEnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDEucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDIucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDMnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDMucG5nJyk7XG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvL1xuICAgIHNreU9mZnNldFk6IG51bWJlciA9IC0zMDBcbiAgICBmYXJPZmZzZXRZOiBudW1iZXIgLy8geFxuICAgIGJhY2tPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgbWFpbk9mZnNldFk6IG51bWJlciA9IDUwXG4gICAgZnJvbnRPZmZzZXRZOiBudW1iZXIgLy8geFxuICAgIC8vXG4gICAgc2t5V2lkdGg6IG51bWJlciA9IDIwMDBcbiAgICBmYXJXaWR0aDogbnVtYmVyID0gMjAwMCAvLyB4XG4gICAgYmFja1dpZHRoOiBudW1iZXIgPSAzMjQwIFxuICAgIG1haW5XaWR0aDogbnVtYmVyID0gMzI0MFxuICAgIGZyb250V2lkdGg6IG51bWJlciA9IDMyNDAgLy8geFxuICAgIC8vXG4gICAgbGF5ZXJTa3k6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyRmFyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBsYXllckJhY2s6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyTWFpbjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbGF5ZXJGcm9udDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMFxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSA2MDAwXG4gICAgc3RhcnRFbmRUaHJlc2hvbGQ6IG51bWJlciA9IDYwMFxuICAgIC8vXG4gICAgY3VycmVudFg6IG51bWJlciA9IDMwMDBcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOlNjZW5lLCB4Om51bWJlciwgeTpudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgTGF5ZXJzXG4gICAgICAgIHRoaXMubGF5ZXJTa3kgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLnNreU9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyRmFyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5mYXJPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2sgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmJhY2tPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllck1haW4gPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLm1haW5PZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZyb250ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5mcm9udE9mZnNldFkpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyU2t5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJGYXIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckJhY2spO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllck1haW4pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckZyb250KTtcblxuICAgICAgICAvLyBMYXllciBTa3lcbiAgICAgICAgLy8gbGV0IHNreUJlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5za3lXaWR0aCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIGxldCBza3lDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIGxldCBza3lBZnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLnNreVdpZHRoLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gdGhpcy5sYXllclNreS5hZGQoc2t5QmVmb3JlKTtcbiAgICAgICAgLy8gdGhpcy5sYXllclNreS5hZGQoc2t5Q2VudGVyKTtcbiAgICAgICAgLy8gdGhpcy5sYXllclNreS5hZGQoc2t5QWZ0ZXIpO1xuXG4gICAgICAgIC8vIC8vIExheWVyIEJhY2tcbiAgICAgICAgLy8gbGV0IGJhY2tCZWZvcmUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoLXRoaXMuYmFja1dpZHRoLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIGxldCBiYWNrQ2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gbGV0IGJhY2tBZnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLmJhY2tXaWR0aCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyB0aGlzLmxheWVyQmFjay5hZGQoYmFja0JlZm9yZSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQ2VudGVyKTtcbiAgICAgICAgLy8gdGhpcy5sYXllckJhY2suYWRkKGJhY2tBZnRlcik7XG5cbiAgICAgICAgLy8gTGF5ZXIgTWFpblxuICAgICAgICBsZXQgbWFpbkxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDEnLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDEnLFxuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAyJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAyJyxcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMycsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMycsXG4gICAgICAgIF07XG5cbiAgICAgICAgXG4gICAgICAgIGxldCB0b3RhbERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgICAgICBtYWluTGlzdC5mb3JFYWNoKChtYWluTWFwKT0+e1xuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLnNjZW5lLnRleHR1cmVzLmdldChtYWluTWFwKTtcbiAgICAgICAgICAgIGlmKCB0ZXh0dXJlICl7XG4gICAgICAgICAgICAgICAgdG90YWxEaXN0YW5jZSArPSB0ZXh0dXJlLmdldFNvdXJjZUltYWdlKCkud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtYWluQmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLm1haW5XaWR0aCwwLCdtYXBMYXllck1haW4nKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICBsZXQgbWFpbkNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZShHYW1lTGliLm1pZFgsR2FtZUxpYi5taWRZLCdtYXBNYWluRGVtbzAwMScpO1xuICAgICAgICAvLyBsZXQgbWFpbkFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMubWFpbldpZHRoLDAsJ21hcExheWVyTWFpbicpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJNYWluLmFkZChtYWluQmVmb3JlKTtcbiAgICAgICAgLy8gdGhpcy5sYXllck1haW4uYWRkKG1haW5DZW50ZXIpO1xuICAgICAgICAvLyB0aGlzLmxheWVyTWFpbi5hZGQobWFpbkFmdGVyKTtcblxuICAgICAgICB0aGlzLnJlbmRlck1hcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSggZGVsdGFYOiBudW1iZXIgKXtcbiAgICAgICAgaWYoIGRlbHRhWCA9PSAwICkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnRYXG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGVsdGFYO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSx0aGlzLmN1cnJlbnRYKTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IE1hdGgubWF4KHRoaXMubWluRGlzdGFuY2UsdGhpcy5jdXJyZW50WCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJNYXAoKTtcbiAgICB9IFxuICAgIFxuICAgIHJlbmRlck1hcCgpe1xuICAgICAgICAvLyBDaGVjayBpZiByZWFjaCBlbmQsIG9ubHkgd29yayBpbiBtaWRkbGUgcGFydFxuICAgICAgICBpZiggdGhpcy5pc1JlYWNoU3RhcnQoKSApIHJldHVybjtcbiAgICAgICAgaWYoIHRoaXMuaXNSZWFjaEVuZCgpICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBuZXdNYXBQb3NpdGlvblg6bnVtYmVyID0gLTEgKiB0aGlzLmN1cnJlbnRYO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbGF5ZXJCYWNrIFJlbWFpbmRlclxuICAgICAgICBsZXQgbGF5ZXJTa3lQb3NYID0gbmV3TWFwUG9zaXRpb25YICogMC41ICUgdGhpcy5za3lXaWR0aDtcbiAgICAgICAgdGhpcy5sYXllclNreS5zZXRYKGxheWVyU2t5UG9zWCk7XG5cbiAgICAgICAgbGV0IGxheWVyQmFja1Bvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAxICUgdGhpcy5iYWNrV2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLnNldFgobGF5ZXJCYWNrUG9zWCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbGF5ZXJNYWluUG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDEgJSB0aGlzLm1haW5XaWR0aDtcbiAgICAgICAgdGhpcy5sYXllck1haW4uc2V0WChsYXllck1haW5Qb3NYKTtcbiAgICB9XG5cbiAgICBpc1JlYWNoU3RhcnQoKTpib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCA8ICh0aGlzLm1pbkRpc3RhbmNlICsgdGhpcy5zdGFydEVuZFRocmVzaG9sZCk7XG4gICAgfVxuXG4gICAgaXNSZWFjaEVuZCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYID4gKHRoaXMubWF4RGlzdGFuY2UgLSB0aGlzLnN0YXJ0RW5kVGhyZXNob2xkKTtcbiAgICB9XG5cbiAgICBpc0VuZFNjZW5lKCk6Ym9vbGVhbntcbiAgICAgICAgaWYoIHRoaXMuaXNSZWFjaFN0YXJ0KCkgfHwgdGhpcy5pc1JlYWNoRW5kKCkgKXtcbiAgICAgICAgICAgIC8vIE1vdmUgYXZhdGFyIGJhc2VkIG9uIGRpc3RhbmNlIGluc3RlYWRcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYID4gdGhpcy5taW5EaXN0YW5jZSAmJiB0aGlzLmN1cnJlbnRYIDwgdGhpcy5tYXhEaXN0YW5jZSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkZpeGVkTWFwIiwicHJlbG9hZCIsInNjZW5lIiwibG9hZCIsImltYWdlIiwidXBkYXRlIiwiZGVsdGFYIiwiY3VycmVudFgiLCJNYXRoIiwibWluIiwibWF4RGlzdGFuY2UiLCJtYXgiLCJtaW5EaXN0YW5jZSIsInJlbmRlck1hcCIsImlzUmVhY2hTdGFydCIsImlzUmVhY2hFbmQiLCJuZXdNYXBQb3NpdGlvblgiLCJsYXllclNreVBvc1giLCJza3lXaWR0aCIsImxheWVyU2t5Iiwic2V0WCIsImxheWVyQmFja1Bvc1giLCJiYWNrV2lkdGgiLCJsYXllckJhY2siLCJsYXllck1haW5Qb3NYIiwibWFpbldpZHRoIiwibGF5ZXJNYWluIiwic3RhcnRFbmRUaHJlc2hvbGQiLCJpc0VuZFNjZW5lIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInNreU9mZnNldFkiLCJiYWNrT2Zmc2V0WSIsIm1haW5PZmZzZXRZIiwiZmFyV2lkdGgiLCJmcm9udFdpZHRoIiwiY29udGFpbmVyIiwiYWRkIiwibGF5ZXJGYXIiLCJmYXJPZmZzZXRZIiwibGF5ZXJGcm9udCIsImZyb250T2Zmc2V0WSIsIm1haW5MaXN0IiwidG90YWxEaXN0YW5jZSIsImZvckVhY2giLCJtYWluTWFwIiwidGV4dHVyZSIsInRleHR1cmVzIiwiZ2V0IiwiZ2V0U291cmNlSW1hZ2UiLCJ3aWR0aCIsIm1haW5DZW50ZXIiLCJzcHJpdGUiLCJtaWRYIiwibWlkWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});