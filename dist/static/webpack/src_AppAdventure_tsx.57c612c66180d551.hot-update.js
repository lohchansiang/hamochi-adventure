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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\n/* harmony import */ var _MapEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapLayerBack\", \"assets/adventure/maps/garden/LayerBack.png\");\n        // scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/LayerMain.png');\n        scene.load.image(\"mapLayerMain\", \"assets/adventure/maps/garden/DebugMain.png\");\n        scene.load.image(\"mapLayerSky\", \"assets/adventure/maps/garden/LayerSky.png\");\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX, handle basic movement\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.moveEndX, this.currentX);\n        this.currentX = Math.max(this.moveStartX, this.currentX);\n        // Calculate Move Mode\n        this._calculateMoveMode();\n        if (this.currentMoveMode == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP) {\n            this._moveMap();\n        }\n    }\n    _moveMap() {\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        // let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(newMapPositionX);\n        this.layerExtra.setX(newMapPositionX);\n        this.layerBuilding.setX(newMapPositionX);\n    }\n    _calculateMoveMode() {\n        // If Within Move Range && middle, use map,  \n        if (this.currentX > this.moveStartX && this.currentX < this.moveEndX) {\n            if (this.getMapPosition() == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE) {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP;\n            } else {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.AVATAR;\n            }\n        } else {\n            this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        }\n    }\n    getMapPosition() {\n        // Return string > start, end, middle, effect on View Perspective\n        if (this.currentX < this.viewStartX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.START;\n        } else if (this.currentX > this.viewEndX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.END;\n        } else {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE;\n        }\n    }\n    getModeMode() {\n        return this.currentMoveMode;\n    }\n    // canMove():boolean{\n    //     return this.currentX > this.moveStartX && this.currentX < this.moveEndX;\n    // }\n    // Only For Debug ATM\n    getMovedX() {\n        return this.currentX - this.moveStartX;\n    }\n    // Only For Debug ATM\n    getMovableLength() {\n        return this.mapLength - 2 * this.moveMargin;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        // mainWidth: number = 3240\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.moveMargin = 600;\n        this.viewMargin = 1200;\n        //\n        this.mapLength = 0;\n        this.moveStartX = 0;\n        this.moveEndX = 10000;\n        this.viewStartX = 0;\n        this.viewEndX = 10000;\n        //\n        this.currentX = 3000;\n        //\n        this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerExtra = this.scene.add.container(0, this.mainOffsetY);\n        this.layerBuilding = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerExtra);\n        this.container.add(this.layerBuilding);\n        this.container.add(this.layerFront);\n        // Layer Sky\n        let skyBefore = this.scene.add.sprite(-this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyCenter = this.scene.add.sprite(0, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyAfter = this.scene.add.sprite(this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        this.layerSky.add(skyBefore);\n        this.layerSky.add(skyCenter);\n        this.layerSky.add(skyAfter);\n        // Layer Back\n        let backBefore = this.scene.add.sprite(-this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backCenter = this.scene.add.sprite(0, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backAfter = this.scene.add.sprite(this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        this.layerBack.add(backBefore);\n        this.layerBack.add(backCenter);\n        this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        // Calculate Map Length Based on Main List Array and create map\n        let totalLength = 0;\n        mainList.forEach((mainMapKey)=>{\n            let mainCenter = this.scene.add.sprite(totalLength, 0, mainMapKey).setOrigin(0, 1);\n            this.layerMain.add(mainCenter);\n            let texture = this.scene.textures.get(mainMapKey);\n            if (texture) {\n                totalLength += texture.getSourceImage().width;\n            }\n        });\n        this.mapLength = totalLength;\n        // Prepare Map Param\n        this.moveStartX = this.moveMargin;\n        this.moveEndX = this.mapLength - this.moveMargin;\n        this.viewStartX = this.viewMargin;\n        this.viewEndX = this.mapLength - this.viewMargin;\n        // Render Overlay End Wall on LayerExtra\n        this.wallStart = this.scene.add.rectangle(0, 0, this.moveMargin, 1000, 0xff0000).setOrigin(0, 1);\n        this.wallEnd = this.scene.add.rectangle(this.moveEndX, 0, this.moveMargin, 1000, 0xff0000).setOrigin(0, 1);\n        this.layerExtra.add(this.wallStart);\n        this._moveMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUU7UUFDekYsSUFBSSxDQUFDa0IsT0FBTyxHQUFHLElBQUksQ0FBQzFFLEtBQUssQ0FBQ2lELEdBQUcsQ0FBQ3dCLFNBQVMsQ0FBQyxJQUFJLENBQUNqRSxRQUFRLEVBQUMsR0FBRSxJQUFJLENBQUM4QixVQUFVLEVBQUMsTUFBSyxVQUFVa0IsU0FBUyxDQUFDLEdBQUU7UUFDbkcsSUFBSSxDQUFDaEMsVUFBVSxDQUFDeUIsR0FBRyxDQUFDLElBQUksQ0FBQ3VCLFNBQVM7UUFFbEMsSUFBSSxDQUFDMUQsUUFBUTtJQUNqQjtBQXdFSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9NYXAvRml4ZWRNYXAudHM/MThiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgeyBNYXBQb3NpdGlvbiwgTW92ZU1vZGUgfSBmcm9tIFwiLi9NYXBFbnVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkTWFwe1xuICAgIC8vIFNpZGVzY3JvbGxpbmcgTWFwXG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyQmFjaycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0xheWVyQmFjay5wbmcnKTtcbiAgICAgICAgLy8gc2NlbmUubG9hZC5pbWFnZSgnbWFwTGF5ZXJNYWluJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vTGF5ZXJNYWluLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllck1haW4nLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9EZWJ1Z01haW4ucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyU2t5JywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vTGF5ZXJTa3kucG5nJyk7XG4gICAgICAgIFxuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDEucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAyJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDMnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAzLnBuZycpO1xuICAgICAgICAvL1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAxJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAxLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAyJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAyLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluU2hvcnREZW1vMDAzJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpblNob3J0MDAzLnBuZycpO1xuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICBza3lPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgZmFyT2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICBiYWNrT2Zmc2V0WTogbnVtYmVyID0gLTMwMFxuICAgIG1haW5PZmZzZXRZOiBudW1iZXIgPSAgNTBcbiAgICBmcm9udE9mZnNldFk6IG51bWJlciAvLyB4XG4gICAgLy9cbiAgICBza3lXaWR0aDogbnVtYmVyID0gMjAwMFxuICAgIGZhcldpZHRoOiBudW1iZXIgPSAyMDAwIC8vIHhcbiAgICBiYWNrV2lkdGg6IG51bWJlciA9IDMyNDAgXG4gICAgLy8gbWFpbldpZHRoOiBudW1iZXIgPSAzMjQwXG4gICAgZnJvbnRXaWR0aDogbnVtYmVyID0gMzI0MCAvLyB4XG4gICAgLy9cbiAgICBsYXllclNreTogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIExPT1BcbiAgICBsYXllckZhcjogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIExPT1BcbiAgICBsYXllckJhY2s6IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyBGaXhlZFxuICAgIGxheWVyTWFpbjogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIEZpeGVkXG4gICAgbGF5ZXJFeHRyYTogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbGF5ZXJCdWlsZGluZzogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgbGF5ZXJGcm9udDogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vID9cbiAgICAvL1xuICAgIG1vdmVNYXJnaW46IG51bWJlciA9IDYwMFxuICAgIHZpZXdNYXJnaW46IG51bWJlciA9IDEyMDBcbiAgICAvL1xuICAgIG1hcExlbmd0aDogbnVtYmVyID0gMFxuICAgIG1vdmVTdGFydFg6IG51bWJlciA9IDBcbiAgICBtb3ZlRW5kWDogbnVtYmVyID0gMTAwMDBcbiAgICB2aWV3U3RhcnRYOiBudW1iZXIgPSAwXG4gICAgdmlld0VuZFg6IG51bWJlciA9IDEwMDAwXG4gICAgLy9cbiAgICBjdXJyZW50WDogbnVtYmVyID0gMzAwMFxuICAgIC8vXG4gICAgY3VycmVudE1vdmVNb2RlOiBNb3ZlTW9kZSA9IE1vdmVNb2RlLk5PTkVcbiAgICAvL1xuICAgIHdhbGxTdGFydDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgd2FsbEVuZDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIExheWVyc1xuICAgICAgICB0aGlzLmxheWVyU2t5ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5za3lPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZhciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZmFyT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5iYWNrT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5tYWluT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJFeHRyYSA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMubWFpbk9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyQnVpbGRpbmcgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLm1haW5PZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZyb250ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5mcm9udE9mZnNldFkpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyU2t5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJGYXIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckJhY2spO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllck1haW4pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckV4dHJhKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJCdWlsZGluZyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRnJvbnQpO1xuXG4gICAgICAgIC8vIExheWVyIFNreVxuICAgICAgICBsZXQgc2t5QmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLnNreVdpZHRoLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuc2t5V2lkdGgsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lCZWZvcmUpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lBZnRlcik7XG5cbiAgICAgICAgLy8gTGF5ZXIgQmFja1xuICAgICAgICBsZXQgYmFja0JlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5iYWNrV2lkdGgsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IGJhY2tDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICBsZXQgYmFja0FmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuYmFja1dpZHRoLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQmVmb3JlKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2suYWRkKGJhY2tDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5hZGQoYmFja0FmdGVyKTtcblxuICAgICAgICAvLyBMYXllciBNYWluXG4gICAgICAgIGxldCBtYWluTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAzJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAzJyxcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSBNYXAgTGVuZ3RoIEJhc2VkIG9uIE1haW4gTGlzdCBBcnJheSBhbmQgY3JlYXRlIG1hcFxuICAgICAgICBsZXQgdG90YWxMZW5ndGg6IG51bWJlciA9IDA7XG4gICAgICAgIG1haW5MaXN0LmZvckVhY2goKG1haW5NYXBLZXkpPT57XG4gICAgICAgICAgICBsZXQgbWFpbkNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0b3RhbExlbmd0aCwwLG1haW5NYXBLZXkpLnNldE9yaWdpbigwLDEpO1xuICAgICAgICAgICAgdGhpcy5sYXllck1haW4uYWRkKG1haW5DZW50ZXIpO1xuXG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuc2NlbmUudGV4dHVyZXMuZ2V0KG1haW5NYXBLZXkpO1xuICAgICAgICAgICAgaWYoIHRleHR1cmUgKXtcbiAgICAgICAgICAgICAgICB0b3RhbExlbmd0aCArPSB0ZXh0dXJlLmdldFNvdXJjZUltYWdlKCkud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcExlbmd0aCA9IHRvdGFsTGVuZ3RoO1xuXG4gICAgICAgIC8vIFByZXBhcmUgTWFwIFBhcmFtXG4gICAgICAgIHRoaXMubW92ZVN0YXJ0WCA9IHRoaXMubW92ZU1hcmdpbjtcbiAgICAgICAgdGhpcy5tb3ZlRW5kWCA9IHRoaXMubWFwTGVuZ3RoIC0gdGhpcy5tb3ZlTWFyZ2luO1xuICAgICAgICB0aGlzLnZpZXdTdGFydFggPSB0aGlzLnZpZXdNYXJnaW47XG4gICAgICAgIHRoaXMudmlld0VuZFggPSB0aGlzLm1hcExlbmd0aCAtIHRoaXMudmlld01hcmdpbjtcblxuICAgICAgICAvLyBSZW5kZXIgT3ZlcmxheSBFbmQgV2FsbCBvbiBMYXllckV4dHJhXG4gICAgICAgIHRoaXMud2FsbFN0YXJ0ID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCx0aGlzLm1vdmVNYXJnaW4sMTAwMCwweGZmMDAwMCkuc2V0T3JpZ2luKDAsMSk7XG4gICAgICAgIHRoaXMud2FsbEVuZCA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSh0aGlzLm1vdmVFbmRYLDAsdGhpcy5tb3ZlTWFyZ2luLDEwMDAsMHhmZjAwMDApLnNldE9yaWdpbigwLDEpO1xuICAgICAgICB0aGlzLmxheWVyRXh0cmEuYWRkKHRoaXMud2FsbFN0YXJ0KTtcblxuICAgICAgICB0aGlzLl9tb3ZlTWFwKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCBkZWx0YVg6IG51bWJlciApe1xuICAgICAgICBpZiggZGVsdGFYID09IDAgKSByZXR1cm47XG4gICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50WCwgaGFuZGxlIGJhc2ljIG1vdmVtZW50XG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGVsdGFYO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5taW4odGhpcy5tb3ZlRW5kWCx0aGlzLmN1cnJlbnRYKTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0WCx0aGlzLmN1cnJlbnRYKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTW92ZSBNb2RlXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZU1vdmVNb2RlKCk7XG5cbiAgICAgICAgaWYoIHRoaXMuY3VycmVudE1vdmVNb2RlID09IE1vdmVNb2RlLk1BUCApe1xuICAgICAgICAgICAgdGhpcy5fbW92ZU1hcCgpO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBcbiAgICBfbW92ZU1hcCgpe1xuICAgICAgICBsZXQgbmV3TWFwUG9zaXRpb25YOm51bWJlciA9IC0xICogdGhpcy5jdXJyZW50WDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxheWVyQmFjayBSZW1haW5kZXJcbiAgICAgICAgbGV0IGxheWVyU2t5UG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDAuNSAlIHRoaXMuc2t5V2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJTa3kuc2V0WChsYXllclNreVBvc1gpO1xuXG4gICAgICAgIGxldCBsYXllckJhY2tQb3NYID0gbmV3TWFwUG9zaXRpb25YICogMSAlIHRoaXMuYmFja1dpZHRoO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5zZXRYKGxheWVyQmFja1Bvc1gpO1xuICAgICAgICBcbiAgICAgICAgLy8gbGV0IGxheWVyTWFpblBvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAxICUgdGhpcy5tYWluV2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluLnNldFgobmV3TWFwUG9zaXRpb25YKTtcbiAgICAgICAgdGhpcy5sYXllckV4dHJhLnNldFgobmV3TWFwUG9zaXRpb25YKTtcbiAgICAgICAgdGhpcy5sYXllckJ1aWxkaW5nLnNldFgobmV3TWFwUG9zaXRpb25YKTtcbiAgICB9XG5cbiAgICBfY2FsY3VsYXRlTW92ZU1vZGUoKXtcbiAgICAgICAgLy8gSWYgV2l0aGluIE1vdmUgUmFuZ2UgJiYgbWlkZGxlLCB1c2UgbWFwLCAgXG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYID4gdGhpcy5tb3ZlU3RhcnRYICYmIHRoaXMuY3VycmVudFggPCB0aGlzLm1vdmVFbmRYICl7XG4gICAgICAgICAgICBpZiggdGhpcy5nZXRNYXBQb3NpdGlvbigpID09IE1hcFBvc2l0aW9uLk1JRERMRSApe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVNb2RlID0gTW92ZU1vZGUuTUFQO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZU1vZGUgPSBNb3ZlTW9kZS5BVkFUQVI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZU1vZGUgPSBNb3ZlTW9kZS5OT05FO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWFwUG9zaXRpb24oKTpNYXBQb3NpdGlvbntcbiAgICAgICAgLy8gUmV0dXJuIHN0cmluZyA+IHN0YXJ0LCBlbmQsIG1pZGRsZSwgZWZmZWN0IG9uIFZpZXcgUGVyc3BlY3RpdmVcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFggPCB0aGlzLnZpZXdTdGFydFggKXtcbiAgICAgICAgICAgIHJldHVybiBNYXBQb3NpdGlvbi5TVEFSVDtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMuY3VycmVudFggPiB0aGlzLnZpZXdFbmRYICl7XG4gICAgICAgICAgICByZXR1cm4gTWFwUG9zaXRpb24uRU5EO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBNYXBQb3NpdGlvbi5NSURETEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlTW9kZSgpOk1vdmVNb2Rle1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TW92ZU1vZGU7XG4gICAgfVxuICAgIC8vIGNhbk1vdmUoKTpib29sZWFue1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCA+IHRoaXMubW92ZVN0YXJ0WCAmJiB0aGlzLmN1cnJlbnRYIDwgdGhpcy5tb3ZlRW5kWDtcbiAgICAvLyB9XG5cbiAgICAvLyBPbmx5IEZvciBEZWJ1ZyBBVE1cbiAgICBnZXRNb3ZlZFgoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCAtIHRoaXMubW92ZVN0YXJ0WDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IEZvciBEZWJ1ZyBBVE1cbiAgICBnZXRNb3ZhYmxlTGVuZ3RoKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwTGVuZ3RoIC0gKDIqdGhpcy5tb3ZlTWFyZ2luKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1hcFBvc2l0aW9uIiwiTW92ZU1vZGUiLCJGaXhlZE1hcCIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsInVwZGF0ZSIsImRlbHRhWCIsImN1cnJlbnRYIiwiTWF0aCIsIm1pbiIsIm1vdmVFbmRYIiwibWF4IiwibW92ZVN0YXJ0WCIsIl9jYWxjdWxhdGVNb3ZlTW9kZSIsImN1cnJlbnRNb3ZlTW9kZSIsIk1BUCIsIl9tb3ZlTWFwIiwibmV3TWFwUG9zaXRpb25YIiwibGF5ZXJTa3lQb3NYIiwic2t5V2lkdGgiLCJsYXllclNreSIsInNldFgiLCJsYXllckJhY2tQb3NYIiwiYmFja1dpZHRoIiwibGF5ZXJCYWNrIiwibGF5ZXJNYWluIiwibGF5ZXJFeHRyYSIsImxheWVyQnVpbGRpbmciLCJnZXRNYXBQb3NpdGlvbiIsIk1JRERMRSIsIkFWQVRBUiIsIk5PTkUiLCJ2aWV3U3RhcnRYIiwiU1RBUlQiLCJ2aWV3RW5kWCIsIkVORCIsImdldE1vZGVNb2RlIiwiZ2V0TW92ZWRYIiwiZ2V0TW92YWJsZUxlbmd0aCIsIm1hcExlbmd0aCIsIm1vdmVNYXJnaW4iLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic2t5T2Zmc2V0WSIsImJhY2tPZmZzZXRZIiwibWFpbk9mZnNldFkiLCJmYXJXaWR0aCIsImZyb250V2lkdGgiLCJ2aWV3TWFyZ2luIiwiY29udGFpbmVyIiwiYWRkIiwibGF5ZXJGYXIiLCJmYXJPZmZzZXRZIiwibGF5ZXJGcm9udCIsImZyb250T2Zmc2V0WSIsInNreUJlZm9yZSIsInNwcml0ZSIsInNldE9yaWdpbiIsInNreUNlbnRlciIsInNreUFmdGVyIiwiYmFja0JlZm9yZSIsImJhY2tDZW50ZXIiLCJiYWNrQWZ0ZXIiLCJtYWluTGlzdCIsInRvdGFsTGVuZ3RoIiwiZm9yRWFjaCIsIm1haW5NYXBLZXkiLCJtYWluQ2VudGVyIiwidGV4dHVyZSIsInRleHR1cmVzIiwiZ2V0IiwiZ2V0U291cmNlSW1hZ2UiLCJ3aWR0aCIsIndhbGxTdGFydCIsInJlY3RhbmdsZSIsIndhbGxFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});