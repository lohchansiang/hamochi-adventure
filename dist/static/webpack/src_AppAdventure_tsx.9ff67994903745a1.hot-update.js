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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.maxDistance, this.currentX);\n        this.currentX = Math.max(this.minDistance, this.currentX);\n        this.renderMap();\n    }\n    renderMap() {\n        // Check if reach end, only work in middle part\n        if (this.isReachStart()) return;\n        if (this.isReachEnd()) return;\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        // let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        // this.layerSky.setX(layerSkyPosX);\n        // let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        // this.layerBack.setX(layerBackPosX);\n        // let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(newMapPositionX);\n    }\n    isReachStart() {\n        return this.currentX < this.minDistance + this.endMargin;\n    }\n    isReachEnd() {\n        return this.currentX > this.maxDistance - this.endMargin;\n    }\n    isEndScene() {\n        if (this.isReachStart() || this.isReachEnd()) {\n            // Move avatar based on distance instead\n            if (this.currentX > this.minDistance && this.currentX < this.maxDistance) {\n                return true;\n            }\n        }\n        return false;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        this.mainWidth = 3240;\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.moveEndMargin = 600;\n        this.viewMargin = 1200;\n        //\n        this.mapLength = 0;\n        this.moveStartX = 0;\n        this.moveEndX = 10000;\n        this.viewStartX = 0;\n        this.viewEndX = 10000;\n        //\n        this.currentX = 3000;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerFront);\n        // // Layer Sky\n        // let skyBefore = this.scene.add.sprite(-this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyCenter = this.scene.add.sprite(0,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyAfter = this.scene.add.sprite(this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // this.layerSky.add(skyBefore);\n        // this.layerSky.add(skyCenter);\n        // this.layerSky.add(skyAfter);\n        // // Layer Back\n        // let backBefore = this.scene.add.sprite(-this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backCenter = this.scene.add.sprite(0,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backAfter = this.scene.add.sprite(this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // this.layerBack.add(backBefore);\n        // this.layerBack.add(backCenter);\n        // this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        let totalLength = 0;\n        mainList.forEach((mainMapKey)=>{\n            let mainCenter = this.scene.add.sprite(totalLength, 0, mainMapKey).setOrigin(0, 1);\n            this.layerMain.add(mainCenter);\n            let texture = this.scene.textures.get(mainMapKey);\n            if (texture) {\n                totalLength += texture.getSourceImage().width;\n            }\n        });\n        this.mapLength = totalLength;\n        this.renderMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQTtJQUNqQixvQkFBb0I7SUFFcEIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFO1FBQzFCQSxNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxrQkFBa0I7UUFDbkNGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQjtRQUNuQ0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsa0JBQWtCO1FBQ25DLEVBQUU7UUFDRkYsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCO1FBQ3hDRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyx1QkFBdUI7UUFDeENGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLHVCQUF1QjtJQUM1QztJQTZGQUMsT0FBUUMsTUFBYyxFQUFFO1FBQ3BCLElBQUlBLFVBQVUsR0FBSTtRQUVsQixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLElBQUlEO1FBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxLQUFLQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUMsSUFBSSxDQUFDSCxRQUFRO1FBQ3ZELElBQUksQ0FBQ0EsUUFBUSxHQUFHQyxLQUFLRyxHQUFHLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUMsSUFBSSxDQUFDTCxRQUFRO1FBRXZELElBQUksQ0FBQ00sU0FBUztJQUNsQjtJQUVBQSxZQUFXO1FBQ1AsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDQyxZQUFZLElBQUs7UUFDMUIsSUFBSSxJQUFJLENBQUNDLFVBQVUsSUFBSztRQUV4QixJQUFJQyxrQkFBeUIsQ0FBQyxJQUFJLElBQUksQ0FBQ1QsUUFBUTtRQUMvQyxnQ0FBZ0M7UUFDaEMsNERBQTREO1FBQzVELG9DQUFvQztRQUVwQyw0REFBNEQ7UUFDNUQsc0NBQXNDO1FBRXRDLDREQUE0RDtRQUM1RCxJQUFJLENBQUNVLFNB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LElBQUlFLFdBQTBCO1lBQzFCO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNIO1FBRUQsSUFBSUMsY0FBc0I7UUFDMUJELFNBQVNFLE9BQU8sQ0FBQyxDQUFDQztZQUNkLElBQUlDLGFBQWEsSUFBSSxDQUFDakQsS0FBSyxDQUFDc0MsR0FBRyxDQUFDWSxNQUFNLENBQUNKLGFBQVksR0FBRUUsWUFBWUcsU0FBUyxDQUFDLEdBQUU7WUFDN0UsSUFBSSxDQUFDcEMsU0FBUyxDQUFDdUIsR0FBRyxDQUFDVztZQUVuQixJQUFJRyxVQUFVLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3FELFFBQVEsQ0FBQ0MsR0FBRyxDQUFDTjtZQUN0QyxJQUFJSSxTQUFTO2dCQUNUTixlQUFlTSxRQUFRRyxjQUFjLEdBQUdDLEtBQUs7WUFDakQ7UUFDSjtRQUVBLElBQUksQ0FBQ3hCLFNBQVMsR0FBR2M7UUFFakIsSUFBSSxDQUFDbkMsU0FBUztJQUNsQjtBQWdESjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9NYXAvRml4ZWRNYXAudHM/MThiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkTWFwe1xuICAgIC8vIFNpZGVzY3JvbGxpbmcgTWFwXG4gICAgXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDEucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAyJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDMnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAzLnBuZycpO1xuICAgICAgICAvL1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAxJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAxLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAyJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAyLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAzJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAzLnBuZycpO1xuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICBza3lPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgZmFyT2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICBiYWNrT2Zmc2V0WTogbnVtYmVyID0gLTMwMFxuICAgIG1haW5PZmZzZXRZOiBudW1iZXIgPSAgNTBcbiAgICBmcm9udE9mZnNldFk6IG51bWJlciAvLyB4XG4gICAgLy9cbiAgICBza3lXaWR0aDogbnVtYmVyID0gMjAwMFxuICAgIGZhcldpZHRoOiBudW1iZXIgPSAyMDAwIC8vIHhcbiAgICBiYWNrV2lkdGg6IG51bWJlciA9IDMyNDAgXG4gICAgbWFpbldpZHRoOiBudW1iZXIgPSAzMjQwXG4gICAgZnJvbnRXaWR0aDogbnVtYmVyID0gMzI0MCAvLyB4XG4gICAgLy9cbiAgICBsYXllclNreTogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIExPT1BcbiAgICBsYXllckZhcjogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIExPT1BcbiAgICBsYXllckJhY2s6IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyBGaXhlZFxuICAgIGxheWVyTWFpbjogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIEZpeGVkXG4gICAgbGF5ZXJGcm9udDogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vID9cbiAgICAvL1xuICAgIG1vdmVFbmRNYXJnaW46IG51bWJlciA9IDYwMFxuICAgIHZpZXdNYXJnaW46IG51bWJlciA9IDEyMDBcbiAgICAvL1xuICAgIG1hcExlbmd0aDogbnVtYmVyID0gMFxuICAgIG1vdmVTdGFydFg6IG51bWJlciA9IDBcbiAgICBtb3ZlRW5kWDogbnVtYmVyID0gMTAwMDBcbiAgICB2aWV3U3RhcnRYOiBudW1iZXIgPSAwXG4gICAgdmlld0VuZFg6IG51bWJlciA9IDEwMDAwXG4gICAgLy9cbiAgICBjdXJyZW50WDogbnVtYmVyID0gMzAwMFxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6U2NlbmUsIHg6bnVtYmVyLCB5Om51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBMYXllcnNcbiAgICAgICAgdGhpcy5sYXllclNreSA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuc2t5T2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGYXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmZhck9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyQmFjayA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuYmFja09mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyTWFpbiA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMubWFpbk9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyRnJvbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmZyb250T2Zmc2V0WSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJTa3kpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckZhcik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyQmFjayk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyTWFpbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRnJvbnQpO1xuXG4gICAgICAgIC8vIC8vIExheWVyIFNreVxuICAgICAgICAvLyBsZXQgc2t5QmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLnNreVdpZHRoLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gbGV0IHNreUNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gbGV0IHNreUFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuc2t5V2lkdGgsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyB0aGlzLmxheWVyU2t5LmFkZChza3lCZWZvcmUpO1xuICAgICAgICAvLyB0aGlzLmxheWVyU2t5LmFkZChza3lDZW50ZXIpO1xuICAgICAgICAvLyB0aGlzLmxheWVyU2t5LmFkZChza3lBZnRlcik7XG5cbiAgICAgICAgLy8gLy8gTGF5ZXIgQmFja1xuICAgICAgICAvLyBsZXQgYmFja0JlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5iYWNrV2lkdGgsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gbGV0IGJhY2tDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgYmFja0FmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuYmFja1dpZHRoLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQmVmb3JlKTtcbiAgICAgICAgLy8gdGhpcy5sYXllckJhY2suYWRkKGJhY2tDZW50ZXIpO1xuICAgICAgICAvLyB0aGlzLmxheWVyQmFjay5hZGQoYmFja0FmdGVyKTtcblxuICAgICAgICAvLyBMYXllciBNYWluXG4gICAgICAgIGxldCBtYWluTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAzJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAzJyxcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3RhbExlbmd0aDogbnVtYmVyID0gMDtcbiAgICAgICAgbWFpbkxpc3QuZm9yRWFjaCgobWFpbk1hcEtleSk9PntcbiAgICAgICAgICAgIGxldCBtYWluQ2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRvdGFsTGVuZ3RoLDAsbWFpbk1hcEtleSkuc2V0T3JpZ2luKDAsMSk7XG4gICAgICAgICAgICB0aGlzLmxheWVyTWFpbi5hZGQobWFpbkNlbnRlcik7XG5cbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5zY2VuZS50ZXh0dXJlcy5nZXQobWFpbk1hcEtleSk7XG4gICAgICAgICAgICBpZiggdGV4dHVyZSApe1xuICAgICAgICAgICAgICAgIHRvdGFsTGVuZ3RoICs9IHRleHR1cmUuZ2V0U291cmNlSW1hZ2UoKS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcExlbmd0aCA9IHRvdGFsTGVuZ3RoO1xuXG4gICAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCBkZWx0YVg6IG51bWJlciApe1xuICAgICAgICBpZiggZGVsdGFYID09IDAgKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgY3VycmVudFhcbiAgICAgICAgdGhpcy5jdXJyZW50WCArPSBkZWx0YVg7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBNYXRoLm1pbih0aGlzLm1heERpc3RhbmNlLHRoaXMuY3VycmVudFgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSx0aGlzLmN1cnJlbnRYKTtcblxuICAgICAgICB0aGlzLnJlbmRlck1hcCgpO1xuICAgIH0gXG4gICAgXG4gICAgcmVuZGVyTWFwKCl7XG4gICAgICAgIC8vIENoZWNrIGlmIHJlYWNoIGVuZCwgb25seSB3b3JrIGluIG1pZGRsZSBwYXJ0XG4gICAgICAgIGlmKCB0aGlzLmlzUmVhY2hTdGFydCgpICkgcmV0dXJuO1xuICAgICAgICBpZiggdGhpcy5pc1JlYWNoRW5kKCkgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld01hcFBvc2l0aW9uWDpudW1iZXIgPSAtMSAqIHRoaXMuY3VycmVudFg7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBsYXllckJhY2sgUmVtYWluZGVyXG4gICAgICAgIC8vIGxldCBsYXllclNreVBvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAwLjUgJSB0aGlzLnNreVdpZHRoO1xuICAgICAgICAvLyB0aGlzLmxheWVyU2t5LnNldFgobGF5ZXJTa3lQb3NYKTtcblxuICAgICAgICAvLyBsZXQgbGF5ZXJCYWNrUG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDEgJSB0aGlzLmJhY2tXaWR0aDtcbiAgICAgICAgLy8gdGhpcy5sYXllckJhY2suc2V0WChsYXllckJhY2tQb3NYKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBsYXllck1haW5Qb3NYID0gbmV3TWFwUG9zaXRpb25YICogMSAlIHRoaXMubWFpbldpZHRoO1xuICAgICAgICB0aGlzLmxheWVyTWFpbi5zZXRYKG5ld01hcFBvc2l0aW9uWCk7XG4gICAgfVxuXG4gICAgaXNSZWFjaFN0YXJ0KCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFggPCAodGhpcy5taW5EaXN0YW5jZSArIHRoaXMuZW5kTWFyZ2luKTtcbiAgICB9XG5cbiAgICBpc1JlYWNoRW5kKCk6Ym9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFggPiAodGhpcy5tYXhEaXN0YW5jZSAtIHRoaXMuZW5kTWFyZ2luKTtcbiAgICB9XG5cbiAgICBpc0VuZFNjZW5lKCk6Ym9vbGVhbntcbiAgICAgICAgaWYoIHRoaXMuaXNSZWFjaFN0YXJ0KCkgfHwgdGhpcy5pc1JlYWNoRW5kKCkgKXtcbiAgICAgICAgICAgIC8vIE1vdmUgYXZhdGFyIGJhc2VkIG9uIGRpc3RhbmNlIGluc3RlYWRcbiAgICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYID4gdGhpcy5taW5EaXN0YW5jZSAmJiB0aGlzLmN1cnJlbnRYIDwgdGhpcy5tYXhEaXN0YW5jZSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRml4ZWRNYXAiLCJwcmVsb2FkIiwic2NlbmUiLCJsb2FkIiwiaW1hZ2UiLCJ1cGRhdGUiLCJkZWx0YVgiLCJjdXJyZW50WCIsIk1hdGgiLCJtaW4iLCJtYXhEaXN0YW5jZSIsIm1heCIsIm1pbkRpc3RhbmNlIiwicmVuZGVyTWFwIiwiaXNSZWFjaFN0YXJ0IiwiaXNSZWFjaEVuZCIsIm5ld01hcFBvc2l0aW9uWCIsImxheWVyTWFpbiIsInNldFgiLCJlbmRNYXJnaW4iLCJpc0VuZFNjZW5lIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInNreU9mZnNldFkiLCJiYWNrT2Zmc2V0WSIsIm1haW5PZmZzZXRZIiwic2t5V2lkdGgiLCJmYXJXaWR0aCIsImJhY2tXaWR0aCIsIm1haW5XaWR0aCIsImZyb250V2lkdGgiLCJtb3ZlRW5kTWFyZ2luIiwidmlld01hcmdpbiIsIm1hcExlbmd0aCIsIm1vdmVTdGFydFgiLCJtb3ZlRW5kWCIsInZpZXdTdGFydFgiLCJ2aWV3RW5kWCIsImNvbnRhaW5lciIsImFkZCIsImxheWVyU2t5IiwibGF5ZXJGYXIiLCJmYXJPZmZzZXRZIiwibGF5ZXJCYWNrIiwibGF5ZXJGcm9udCIsImZyb250T2Zmc2V0WSIsIm1haW5MaXN0IiwidG90YWxMZW5ndGgiLCJmb3JFYWNoIiwibWFpbk1hcEtleSIsIm1haW5DZW50ZXIiLCJzcHJpdGUiLCJzZXRPcmlnaW4iLCJ0ZXh0dXJlIiwidGV4dHVyZXMiLCJnZXQiLCJnZXRTb3VyY2VJbWFnZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});