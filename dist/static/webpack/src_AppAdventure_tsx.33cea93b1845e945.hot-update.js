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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.maxDistance, this.currentX);\n        this.currentX = Math.max(this.minDistance, this.currentX);\n        this.renderMap();\n    }\n    renderMap() {\n        // Check if reach end, only work in middle part\n        if (this.isReachStart()) return;\n        if (this.isReachEnd()) return;\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(layerMainPosX);\n    }\n    isReachStart() {\n        return this.currentX < this.minDistance + this.startEndThreshold;\n    }\n    isReachEnd() {\n        return this.currentX > this.maxDistance - this.startEndThreshold;\n    }\n    isEndScene() {\n        if (this.isReachStart() || this.isReachEnd()) {\n            // Move avatar based on distance instead\n            if (this.currentX > this.minDistance && this.currentX < this.maxDistance) {\n                return true;\n            }\n        }\n        return false;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = -300 // 50\n        ;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        this.mainWidth = 3240;\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.minDistance = 0;\n        this.maxDistance = 6000;\n        this.startEndThreshold = 600;\n        //\n        this.currentX = 3000;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerFront);\n        // // Layer Sky\n        // let skyBefore = this.scene.add.sprite(-this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyCenter = this.scene.add.sprite(0,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyAfter = this.scene.add.sprite(this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // this.layerSky.add(skyBefore);\n        // this.layerSky.add(skyCenter);\n        // this.layerSky.add(skyAfter);\n        // // Layer Back\n        // let backBefore = this.scene.add.sprite(-this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backCenter = this.scene.add.sprite(0,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backAfter = this.scene.add.sprite(this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // this.layerBack.add(backBefore);\n        // this.layerBack.add(backCenter);\n        // this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        let totalDistance = 0;\n        mainList.forEach((mainMap)=>{\n            let texture = this.scene.textures.get(mainMap);\n            if (texture) {\n                totalDistance += texture.getSourceImage().width;\n            }\n        });\n        // let mainBefore = this.scene.add.sprite(-this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);\n        let mainCenter = this.scene.add.sprite(0, 0, \"mapMainDemo001\").setOrigin(0, 1);\n        // let mainAfter = this.scene.add.sprite(this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);\n        this.layerMain.add(mainCenter).setScale(0.2);\n    // this.layerMain.add(mainCenter);\n    // this.layerMain.add(mainAfter);\n    // this.renderMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQTtJQUNqQixvQkFBb0I7SUFFcEIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFO1FBQzFCQSxNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxrQkFBa0I7UUFDbkNGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQjtRQUNuQ0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsa0JBQWtCO1FBQ25DLEVBQUU7UUFDRkYsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCO1FBQ3hDRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyx1QkFBdUI7UUFDeENGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLHVCQUF1QjtJQUM1QztJQTJGQUMsT0FBUUMsTUFBYyxFQUFFO1FBQ3BCLElBQUlBLFVBQVUsR0FBSTtRQUVsQixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLElBQUlEO1FBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxLQUFLQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUMsSUFBSSxDQUFDSCxRQUFRO1FBQ3ZELElBQUksQ0FBQ0EsUUFBUSxHQUFHQyxLQUFLRyxHQUFHLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUMsSUFBSSxDQUFDTCxRQUFRO1FBRXZELElBQUksQ0FBQ00sU0FBUztJQUNsQjtJQUVBQSxZQUFXO1FBQ1AsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDQyxZQUFZLElBQUs7UUFDMUIsSUFBSSxJQUFJLENBQUNDLFVBQVUsSUFBSztRQUV4QixJQUFJQyxrQkFBeUIsQ0FBQyxJQUFJLElBQUksQ0FBQ1QsUUFBUTtRQUMvQyxnQ0FBZ0M7UUFDaEMsSUFBSVUsZUFBZUQsa0JBQWtCLE1BQU0sSUFBSSxDQUFDRSxRQUFRO1FBQ3hELElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNI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Q2hDLCtCQUErQjtRQUUvQixnQkFBZ0I7UUFDaEIsNkZBQTZGO1FBQzdGLCtFQUErRTtRQUMvRSwyRkFBMkY7UUFDM0Ysa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFFakMsYUFBYTtRQUNiLElBQUlFLFdBQTBCO1lBQzFCO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNIO1FBR0QsSUFBSUMsZ0JBQXdCO1FBQzVCRCxTQUFTRSxPQUFPLENBQUMsQ0FBQ0M7WUFDZCxJQUFJQyxVQUFVLElBQUksQ0FBQzdDLEtBQUssQ0FBQzhDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDSDtZQUN0QyxJQUFJQyxTQUFTO2dCQUNUSCxpQkFBaUJHLFFBQVFHLGNBQWMsR0FBR0MsS0FBSztZQUNuRDtRQUNKO1FBRUEsNkZBQTZGO1FBQzdGLElBQUlDLGFBQWEsSUFBSSxDQUFDbEQsS0FBSyxDQUFDb0MsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRSxHQUFFLGtCQUFrQkMsU0FBUyxDQUFDLEdBQUU7UUFDekUsMkZBQTJGO1FBQzNGLElBQUksQ0FBQzVCLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDYyxZQUFZRyxRQUFRLENBQUM7SUFDeEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUVqQyxvQkFBb0I7SUFDeEI7QUFnREo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzPzE4YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZE1hcHtcbiAgICAvLyBTaWRlc2Nyb2xsaW5nIE1hcFxuICAgIFxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDEnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAxLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDIucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAzJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMy5wbmcnKTtcbiAgICAgICAgLy9cbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMS5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMy5wbmcnKTtcbiAgICB9XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgc2t5T2Zmc2V0WTogbnVtYmVyID0gLTMwMFxuICAgIGZhck9mZnNldFk6IG51bWJlciAvLyB4XG4gICAgYmFja09mZnNldFk6IG51bWJlciA9IC0zMDBcbiAgICBtYWluT2Zmc2V0WTogbnVtYmVyID0gIC0zMDAvLyA1MFxuICAgIGZyb250T2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICAvL1xuICAgIHNreVdpZHRoOiBudW1iZXIgPSAyMDAwXG4gICAgZmFyV2lkdGg6IG51bWJlciA9IDIwMDAgLy8geFxuICAgIGJhY2tXaWR0aDogbnVtYmVyID0gMzI0MCBcbiAgICBtYWluV2lkdGg6IG51bWJlciA9IDMyNDBcbiAgICBmcm9udFdpZHRoOiBudW1iZXIgPSAzMjQwIC8vIHhcbiAgICAvL1xuICAgIGxheWVyU2t5OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBsYXllckZhcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbGF5ZXJCYWNrOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBsYXllck1haW46IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyRnJvbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgbWluRGlzdGFuY2U6IG51bWJlciA9IDBcbiAgICBtYXhEaXN0YW5jZTogbnVtYmVyID0gNjAwMFxuICAgIHN0YXJ0RW5kVGhyZXNob2xkOiBudW1iZXIgPSA2MDBcbiAgICAvL1xuICAgIGN1cnJlbnRYOiBudW1iZXIgPSAzMDAwXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIExheWVyc1xuICAgICAgICB0aGlzLmxheWVyU2t5ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5za3lPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZhciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZmFyT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5iYWNrT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5tYWluT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGcm9udCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZnJvbnRPZmZzZXRZKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllclNreSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRmFyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJCYWNrKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJNYWluKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJGcm9udCk7XG5cbiAgICAgICAgLy8gLy8gTGF5ZXIgU2t5XG4gICAgICAgIC8vIGxldCBza3lCZWZvcmUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoLXRoaXMuc2t5V2lkdGgsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgc2t5Q2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgc2t5QWZ0ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy5za3lXaWR0aCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUJlZm9yZSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUNlbnRlcik7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUFmdGVyKTtcblxuICAgICAgICAvLyAvLyBMYXllciBCYWNrXG4gICAgICAgIC8vIGxldCBiYWNrQmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLmJhY2tXaWR0aCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgYmFja0NlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIGxldCBiYWNrQWZ0ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy5iYWNrV2lkdGgsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gdGhpcy5sYXllckJhY2suYWRkKGJhY2tCZWZvcmUpO1xuICAgICAgICAvLyB0aGlzLmxheWVyQmFjay5hZGQoYmFja0NlbnRlcik7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQWZ0ZXIpO1xuXG4gICAgICAgIC8vIExheWVyIE1haW5cbiAgICAgICAgbGV0IG1haW5MaXN0OiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAxJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAxJyxcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMicsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMicsXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDMnLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDMnLFxuICAgICAgICBdO1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgdG90YWxEaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICAgICAgbWFpbkxpc3QuZm9yRWFjaCgobWFpbk1hcCk9PntcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5zY2VuZS50ZXh0dXJlcy5nZXQobWFpbk1hcCk7XG4gICAgICAgICAgICBpZiggdGV4dHVyZSApe1xuICAgICAgICAgICAgICAgIHRvdGFsRGlzdGFuY2UgKz0gdGV4dHVyZS5nZXRTb3VyY2VJbWFnZSgpLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbWFpbkJlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5tYWluV2lkdGgsMCwnbWFwTGF5ZXJNYWluJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IG1haW5DZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBNYWluRGVtbzAwMScpLnNldE9yaWdpbigwLDEpO1xuICAgICAgICAvLyBsZXQgbWFpbkFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMubWFpbldpZHRoLDAsJ21hcExheWVyTWFpbicpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluLmFkZChtYWluQ2VudGVyKS5zZXRTY2FsZSgwLjIpO1xuICAgICAgICAvLyB0aGlzLmxheWVyTWFpbi5hZGQobWFpbkNlbnRlcik7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJNYWluLmFkZChtYWluQWZ0ZXIpO1xuXG4gICAgICAgIC8vIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCBkZWx0YVg6IG51bWJlciApe1xuICAgICAgICBpZiggZGVsdGFYID09IDAgKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgY3VycmVudFhcbiAgICAgICAgdGhpcy5jdXJyZW50WCArPSBkZWx0YVg7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBNYXRoLm1pbih0aGlzLm1heERpc3RhbmNlLHRoaXMuY3VycmVudFgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSx0aGlzLmN1cnJlbnRYKTtcblxuICAgICAgICB0aGlzLnJlbmRlck1hcCgpO1xuICAgIH0gXG4gICAgXG4gICAgcmVuZGVyTWFwKCl7XG4gICAgICAgIC8vIENoZWNrIGlmIHJlYWNoIGVuZCwgb25seSB3b3JrIGluIG1pZGRsZSBwYXJ0XG4gICAgICAgIGlmKCB0aGlzLmlzUmVhY2hTdGFydCgpICkgcmV0dXJuO1xuICAgICAgICBpZiggdGhpcy5pc1JlYWNoRW5kKCkgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld01hcFBvc2l0aW9uWDpudW1iZXIgPSAtMSAqIHRoaXMuY3VycmVudFg7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBsYXllckJhY2sgUmVtYWluZGVyXG4gICAgICAgIGxldCBsYXllclNreVBvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAwLjUgJSB0aGlzLnNreVdpZHRoO1xuICAgICAgICB0aGlzLmxheWVyU2t5LnNldFgobGF5ZXJTa3lQb3NYKTtcblxuICAgICAgICBsZXQgbGF5ZXJCYWNrUG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDEgJSB0aGlzLmJhY2tXaWR0aDtcbiAgICAgICAgdGhpcy5sYXllckJhY2suc2V0WChsYXllckJhY2tQb3NYKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBsYXllck1haW5Qb3NYID0gbmV3TWFwUG9zaXRpb25YICogMSAlIHRoaXMubWFpbldpZHRoO1xuICAgICAgICB0aGlzLmxheWVyTWFpbi5zZXRYKGxheWVyTWFpblBvc1gpO1xuICAgIH1cblxuICAgIGlzUmVhY2hTdGFydCgpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYIDwgKHRoaXMubWluRGlzdGFuY2UgKyB0aGlzLnN0YXJ0RW5kVGhyZXNob2xkKTtcbiAgICB9XG5cbiAgICBpc1JlYWNoRW5kKCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFggPiAodGhpcy5tYXhEaXN0YW5jZSAtIHRoaXMuc3RhcnRFbmRUaHJlc2hvbGQpO1xuICAgIH1cblxuICAgIGlzRW5kU2NlbmUoKTpib29sZWFue1xuICAgICAgICBpZiggdGhpcy5pc1JlYWNoU3RhcnQoKSB8fCB0aGlzLmlzUmVhY2hFbmQoKSApe1xuICAgICAgICAgICAgLy8gTW92ZSBhdmF0YXIgYmFzZWQgb24gZGlzdGFuY2UgaW5zdGVhZFxuICAgICAgICAgICAgaWYoIHRoaXMuY3VycmVudFggPiB0aGlzLm1pbkRpc3RhbmNlICYmIHRoaXMuY3VycmVudFggPCB0aGlzLm1heERpc3RhbmNlICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJGaXhlZE1hcCIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsInVwZGF0ZSIsImRlbHRhWCIsImN1cnJlbnRYIiwiTWF0aCIsIm1pbiIsIm1heERpc3RhbmNlIiwibWF4IiwibWluRGlzdGFuY2UiLCJyZW5kZXJNYXAiLCJpc1JlYWNoU3RhcnQiLCJpc1JlYWNoRW5kIiwibmV3TWFwUG9zaXRpb25YIiwibGF5ZXJTa3lQb3NYIiwic2t5V2lkdGgiLCJsYXllclNreSIsInNldFgiLCJsYXllckJhY2tQb3NYIiwiYmFja1dpZHRoIiwibGF5ZXJCYWNrIiwibGF5ZXJNYWluUG9zWCIsIm1haW5XaWR0aCIsImxheWVyTWFpbiIsInN0YXJ0RW5kVGhyZXNob2xkIiwiaXNFbmRTY2VuZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJza3lPZmZzZXRZIiwiYmFja09mZnNldFkiLCJtYWluT2Zmc2V0WSIsImZhcldpZHRoIiwiZnJvbnRXaWR0aCIsImNvbnRhaW5lciIsImFkZCIsImxheWVyRmFyIiwiZmFyT2Zmc2V0WSIsImxheWVyRnJvbnQiLCJmcm9udE9mZnNldFkiLCJtYWluTGlzdCIsInRvdGFsRGlzdGFuY2UiLCJmb3JFYWNoIiwibWFpbk1hcCIsInRleHR1cmUiLCJ0ZXh0dXJlcyIsImdldCIsImdldFNvdXJjZUltYWdlIiwid2lkdGgiLCJtYWluQ2VudGVyIiwic3ByaXRlIiwic2V0T3JpZ2luIiwic2V0U2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});