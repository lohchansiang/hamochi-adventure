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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideMap; }\n/* harmony export */ });\nclass SideMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapLayerBack\", \"assets/adventure/maps/garden/LayerBack.png\");\n        // scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/LayerMain.png');\n        scene.load.image(\"mapLayerMain\", \"assets/adventure/maps/garden/DebugMain.png\");\n        scene.load.image(\"mapLayerSky\", \"assets/adventure/maps/garden/LayerSky.png\");\n    }\n    moveMap(distanceX) {\n        // Calculate map position \n        // Calculate layerBack Remainder\n        let layerSkyPosX = distanceX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = distanceX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        let layerMainPosX = distanceX * 1 % this.mainWidth;\n        this.layerMain.setX(layerMainPosX);\n        this.updateCopyPosX();\n    }\n    updateCopyPosX() {\n        // Update Copy Position\n        if (this.layerSky.x > this.skyWidth / 2) {\n            this.layerSkyCopy.x = this.layerSky.x - this.skyWidth;\n        } else {\n            this.layerSkyCopy.x = this.layerSky.x + this.skyWidth;\n        }\n        this.layerSkyCopy.setVisible(false);\n        if (this.layerBack.x > this.backWidth / 2) {\n            this.layerBackCopy.x = this.layerBack.x - this.backWidth;\n        } else {\n            this.layerBackCopy.x = this.layerBack.x + this.backWidth;\n        }\n        this.layerBackCopy.setVisible(false);\n        let pos = Math.abs(this.layerMain.x);\n        console.log(\"this.layerMain.x > \", pos);\n        // console.log('this.mainWidth/2 > ', this.mainWidth/2 );\n        if (Math.abs(this.layerMain.x) < this.mainWidth / 2) {\n            this.layerMainCopy.x = this.layerMain.x - this.mainWidth;\n        } else {\n            this.layerMainCopy.x = this.layerMain.x + this.mainWidth;\n        }\n    }\n    // layerSky: GameObjects.Sprite\n    // layerSkyCopy: GameObjects.Sprite\n    // layerFar: GameObjects.Sprite\n    // layerFarCopy: GameObjects.Sprite\n    // layerBack: GameObjects.Sprite\n    // layerBackCopy: GameObjects.Sprite\n    // layerMain: GameObjects.Sprite\n    // layerMainCopy: GameObjects.Sprite\n    // layerFront: GameObjects.Sprite\n    // layerFrontCopy: GameObjects.Sprite\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        this.mainWidth = 3240;\n        this.frontWidth = 3240 // x\n        ;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        // Layer Sky\n        let skyBefore = this.scene.add.sprite(0, -this.skyWidth, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyCenter = this.scene.add.sprite(0, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyAfter = this.scene.add.sprite(0, this.skyWidth, \"mapLayerSky\").setOrigin(0.5, 1);\n        this.layerSky.add(skyBefore);\n        this.layerSky.add(skyCenter);\n        this.layerSky.add(skyAfter);\n        // Layer Back\n        let backBefore = this.scene.add.sprite(0, -this.backWidth, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backCenter = this.scene.add.sprite(0, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backAfter = this.scene.add.sprite(0, this.backWidth, \"mapLayerBack\").setOrigin(0.5, 1);\n        this.layerBack.add(backBefore);\n        this.layerBack.add(backCenter);\n        this.layerBack.add(backAfter);\n        // Layer Main\n        let mainBefore = this.scene.add.sprite(0, -this.mainWidth, \"mapLayerMain\").setOrigin(0.5, 1);\n        let mainCenter = this.scene.add.sprite(0, 0, \"mapLayerMain\").setOrigin(0.5, 1);\n        let mainAfter = this.scene.add.sprite(0, this.mainWidth, \"mapLayerMain\").setOrigin(0.5, 1);\n        this.layerBack.add(backBefore);\n        this.layerBack.add(backCenter);\n        this.layerBack.add(backAfter);\n    // Center Point\n    // let center = this.scene.add.rectangle(0,0,25,25,0xff0000);\n    // this.container.add( center );\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRSxHQUFFLGdCQUFnQkMsU0FBUyxDQUFDLEtBQUk7UUFDekUsSUFBSVEsWUFBWSxJQUFJLENBQUNqRCxLQUFLLENBQUNrQyxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFFLElBQUksQ0FBQzNCLFNBQVMsRUFBQyxnQkFBZ0I0QixTQUFTLENBQUMsS0FBSTtRQUNyRixJQUFJLENBQUM5QixTQUFTLENBQUN1QixHQUFHLENBQUNVO1FBQ25CLElBQUksQ0FBQ2pDLFNBQVMsQ0FBQ3VCLEdBQUcsQ0FBQ1c7UUFDbkIsSUFBSSxDQUFDbEMsU0FBUyxDQUFDdUIsR0FBRyxDQUFDWTtJQUVuQixlQUFlO0lBQ2YsNkRBQTZEO0lBQzdELGdDQUFnQztJQUNwQztBQTZDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9NYXAvU2lkZU1hcC50cz9iM2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWFwe1xuICAgIC8vIFNpZGVzY3JvbGxpbmcgTWFwXG4gICAgXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllckJhY2snLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9MYXllckJhY2sucG5nJyk7XG4gICAgICAgIC8vIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyTWFpbicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0xheWVyTWFpbi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTGF5ZXJNYWluJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vRGVidWdNYWluLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllclNreScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0xheWVyU2t5LnBuZycpO1xuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICBza3lPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgZmFyT2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICBiYWNrT2Zmc2V0WTogbnVtYmVyID0gLTMwMFxuICAgIG1haW5PZmZzZXRZOiBudW1iZXIgPSA1MFxuICAgIGZyb250T2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICAvL1xuICAgIHNreVdpZHRoOiBudW1iZXIgPSAyMDAwXG4gICAgZmFyV2lkdGg6IG51bWJlciA9IDIwMDAgLy8geFxuICAgIGJhY2tXaWR0aDogbnVtYmVyID0gMzI0MCBcbiAgICBtYWluV2lkdGg6IG51bWJlciA9IDMyNDBcbiAgICBmcm9udFdpZHRoOiBudW1iZXIgPSAzMjQwIC8vIHhcbiAgICAvL1xuICAgIGxheWVyU2t5OiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBsYXllckZhcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbGF5ZXJCYWNrOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBsYXllck1haW46IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyRnJvbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuXG4gICAgLy8gbGF5ZXJTa3k6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vIGxheWVyU2t5Q29weTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgLy8gbGF5ZXJGYXI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vIGxheWVyRmFyQ29weTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgLy8gbGF5ZXJCYWNrOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvLyBsYXllckJhY2tDb3B5OiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvLyBsYXllck1haW46IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vIGxheWVyTWFpbkNvcHk6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vIGxheWVyRnJvbnQ6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIC8vIGxheWVyRnJvbnRDb3B5OiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgTGF5ZXJzXG4gICAgICAgIHRoaXMubGF5ZXJTa3kgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLnNreU9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyRmFyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5mYXJPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2sgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmJhY2tPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllck1haW4gPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLm1haW5PZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZyb250ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5mcm9udE9mZnNldFkpO1xuXG4gICAgICAgIC8vIExheWVyIFNreVxuICAgICAgICBsZXQgc2t5QmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsLXRoaXMuc2t5V2lkdGgsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsdGhpcy5za3lXaWR0aCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lCZWZvcmUpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lBZnRlcik7XG5cbiAgICAgICAgLy8gTGF5ZXIgQmFja1xuICAgICAgICBsZXQgYmFja0JlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLC10aGlzLmJhY2tXaWR0aCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IGJhY2tDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICBsZXQgYmFja0FmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsdGhpcy5iYWNrV2lkdGgsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQmVmb3JlKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2suYWRkKGJhY2tDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5hZGQoYmFja0FmdGVyKTtcblxuICAgICAgICAvLyBMYXllciBNYWluXG4gICAgICAgIGxldCBtYWluQmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsLXRoaXMubWFpbldpZHRoLCdtYXBMYXllck1haW4nKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICBsZXQgbWFpbkNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyTWFpbicpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIGxldCBtYWluQWZ0ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCx0aGlzLm1haW5XaWR0aCwnbWFwTGF5ZXJNYWluJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2suYWRkKGJhY2tCZWZvcmUpO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5hZGQoYmFja0NlbnRlcik7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQWZ0ZXIpO1xuXG4gICAgICAgIC8vIENlbnRlciBQb2ludFxuICAgICAgICAvLyBsZXQgY2VudGVyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCwyNSwyNSwweGZmMDAwMCk7XG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZCggY2VudGVyICk7XG4gICAgfVxuXG4gICAgbW92ZU1hcCggZGlzdGFuY2VYOiBudW1iZXIgKXtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG1hcCBwb3NpdGlvbiBcbiAgICAgICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSBsYXllckJhY2sgUmVtYWluZGVyXG4gICAgICAgIGxldCBsYXllclNreVBvc1ggPSBkaXN0YW5jZVggKiAwLjUgJSB0aGlzLnNreVdpZHRoO1xuICAgICAgICB0aGlzLmxheWVyU2t5LnNldFgobGF5ZXJTa3lQb3NYKTtcblxuICAgICAgICBsZXQgbGF5ZXJCYWNrUG9zWCA9IGRpc3RhbmNlWCAqIDEgJSB0aGlzLmJhY2tXaWR0aDtcbiAgICAgICAgdGhpcy5sYXllckJhY2suc2V0WChsYXllckJhY2tQb3NYKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBsYXllck1haW5Qb3NYID0gZGlzdGFuY2VYICogMSAlIHRoaXMubWFpbldpZHRoO1xuICAgICAgICB0aGlzLmxheWVyTWFpbi5zZXRYKGxheWVyTWFpblBvc1gpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29weVBvc1goKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3B5UG9zWCgpe1xuICAgICAgICAvLyBVcGRhdGUgQ29weSBQb3NpdGlvblxuICAgICAgICBpZiggdGhpcy5sYXllclNreS54ID4gdGhpcy5za3lXaWR0aC8yICl7XG4gICAgICAgICAgICB0aGlzLmxheWVyU2t5Q29weS54ID0gdGhpcy5sYXllclNreS54IC0gdGhpcy5za3lXaWR0aFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJTa3lDb3B5LnggPSB0aGlzLmxheWVyU2t5LnggKyB0aGlzLnNreVdpZHRoXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllclNreUNvcHkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgaWYoIHRoaXMubGF5ZXJCYWNrLnggPiB0aGlzLmJhY2tXaWR0aC8yICl7XG4gICAgICAgICAgICB0aGlzLmxheWVyQmFja0NvcHkueCA9IHRoaXMubGF5ZXJCYWNrLnggLSB0aGlzLmJhY2tXaWR0aFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJCYWNrQ29weS54ID0gdGhpcy5sYXllckJhY2sueCArIHRoaXMuYmFja1dpZHRoXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllckJhY2tDb3B5LnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgcG9zID0gTWF0aC5hYnModGhpcy5sYXllck1haW4ueCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmxheWVyTWFpbi54ID4gJywgcG9zICk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm1haW5XaWR0aC8yID4gJywgdGhpcy5tYWluV2lkdGgvMiApO1xuXG4gICAgICAgIGlmKCBNYXRoLmFicyh0aGlzLmxheWVyTWFpbi54KSA8IHRoaXMubWFpbldpZHRoLzIgKXtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJNYWluQ29weS54ID0gdGhpcy5sYXllck1haW4ueCAtIHRoaXMubWFpbldpZHRoXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5sYXllck1haW5Db3B5LnggPSB0aGlzLmxheWVyTWFpbi54ICsgdGhpcy5tYWluV2lkdGhcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiU2lkZU1hcCIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsIm1vdmVNYXAiLCJkaXN0YW5jZVgiLCJsYXllclNreVBvc1giLCJza3lXaWR0aCIsImxheWVyU2t5Iiwic2V0WCIsImxheWVyQmFja1Bvc1giLCJiYWNrV2lkdGgiLCJsYXllckJhY2siLCJsYXllck1haW5Qb3NYIiwibWFpbldpZHRoIiwibGF5ZXJNYWluIiwidXBkYXRlQ29weVBvc1giLCJ4IiwibGF5ZXJTa3lDb3B5Iiwic2V0VmlzaWJsZSIsImxheWVyQmFja0NvcHkiLCJwb3MiLCJNYXRoIiwiYWJzIiwiY29uc29sZSIsImxvZyIsImxheWVyTWFpbkNvcHkiLCJjb25zdHJ1Y3RvciIsInkiLCJza3lPZmZzZXRZIiwiYmFja09mZnNldFkiLCJtYWluT2Zmc2V0WSIsImZhcldpZHRoIiwiZnJvbnRXaWR0aCIsImNvbnRhaW5lciIsImFkZCIsImxheWVyRmFyIiwiZmFyT2Zmc2V0WSIsImxheWVyRnJvbnQiLCJmcm9udE9mZnNldFkiLCJza3lCZWZvcmUiLCJzcHJpdGUiLCJzZXRPcmlnaW4iLCJza3lDZW50ZXIiLCJza3lBZnRlciIsImJhY2tCZWZvcmUiLCJiYWNrQ2VudGVyIiwiYmFja0FmdGVyIiwibWFpbkJlZm9yZSIsIm1haW5DZW50ZXIiLCJtYWluQWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/SideMap.ts\n"));

/***/ })

});