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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\n/* harmony import */ var _MapEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapLayerBack\", \"assets/adventure/maps/garden/LayerBack.png\");\n        // scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/LayerMain.png');\n        scene.load.image(\"mapLayerMain\", \"assets/adventure/maps/garden/DebugMain.png\");\n        scene.load.image(\"mapLayerSky\", \"assets/adventure/maps/garden/LayerSky.png\");\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX, handle basic movement\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.moveEndX, this.currentX);\n        this.currentX = Math.max(this.moveStartX, this.currentX);\n        // Calculate Move Mode\n        this._calculateMoveMode();\n        if (this.currentMoveMode == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP) {\n            this._renderMap();\n        }\n    }\n    _renderMap() {\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        // let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(newMapPositionX);\n    }\n    _calculateMoveMode() {\n        // If Within Move Range && middle, use map,  \n        if (this.currentX > this.moveStartX && this.currentX < this.moveEndX) {\n            if (this.getMapPosition() == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE) {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP;\n            } else {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.AVATAR;\n            }\n        } else {\n            this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        }\n    }\n    getMapPosition() {\n        // Return string > start, end, middle, effect on View Perspective\n        if (this.currentX < this.viewStartX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.START;\n        } else if (this.currentX > this.viewEndX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.END;\n        } else {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE;\n        }\n    }\n    getModeMode() {\n        return this.currentMoveMode;\n    }\n    // canMove():boolean{\n    //     return this.currentX > this.moveStartX && this.currentX < this.moveEndX;\n    // }\n    // Only For Debug ATM\n    getMovedX() {\n        return this.currentX - this.moveStartX;\n    }\n    // Only For Debug ATM\n    getMovableLength() {\n        return this.mapLength - 2 * this.moveMargin;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        // mainWidth: number = 3240\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.moveMargin = 600;\n        this.viewMargin = 1200;\n        //\n        this.mapLength = 0;\n        this.moveStartX = 0;\n        this.moveEndX = 10000;\n        this.viewStartX = 0;\n        this.viewEndX = 10000;\n        //\n        this.currentX = 3000;\n        //\n        this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerFront);\n        // Layer Sky\n        let skyBefore = this.scene.add.sprite(-this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyCenter = this.scene.add.sprite(0, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyAfter = this.scene.add.sprite(this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        this.layerSky.add(skyBefore);\n        this.layerSky.add(skyCenter);\n        this.layerSky.add(skyAfter);\n        // Layer Back\n        let backBefore = this.scene.add.sprite(-this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backCenter = this.scene.add.sprite(0, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backAfter = this.scene.add.sprite(this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        this.layerBack.add(backBefore);\n        this.layerBack.add(backCenter);\n        this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        let totalLength = 0;\n        mainList.forEach((mainMapKey)=>{\n            let mainCenter = this.scene.add.sprite(totalLength, 0, mainMapKey).setOrigin(0, 1);\n            this.layerMain.add(mainCenter);\n            let texture = this.scene.textures.get(mainMapKey);\n            if (texture) {\n                totalLength += texture.getSourceImage().width;\n            }\n        });\n        this.mapLength = totalLength;\n        // Prepare Param\n        this.moveStartX = this.moveMargin;\n        this.moveEndX = this.mapLength - this.moveMargin;\n        this.viewStartX = this.viewMargin;\n        this.viewEndX = this.mapLength - this.viewMargin;\n        this._renderMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ2pFLEtBQUssQ0FBQ2tFLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDSjtZQUN0QyxJQUFJRSxTQUFTO2dCQUNUSixlQUFlSSxRQUFRRyxjQUFjLEdBQUdDLEtBQUs7WUFDakQ7UUFDSjtRQUVBLElBQUksQ0FBQ2xDLFNBQVMsR0FBRzBCO1FBQ2pCLGdCQUFnQjtRQUNoQixJQUFJLENBQUNuRCxVQUFVLEdBQUcsSUFBSSxDQUFDMEIsVUFBVTtRQUNqQyxJQUFJLENBQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDMkIsU0FBUyxHQUFHLElBQUksQ0FBQ0MsVUFBVTtRQUNoRCxJQUFJLENBQUNSLFVBQVUsR0FBRyxJQUFJLENBQUNpQixVQUFVO1FBQ2pDLElBQUksQ0FBQ2YsUUFBUSxHQUFHLElBQUksQ0FBQ0ssU0FBUyxHQUFHLElBQUksQ0FBQ1UsVUFBVTtRQUVoRCxJQUFJLENBQUMvQixVQUFVO0lBQ25CO0FBc0VKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9jb21wb25lbnRzL01hcC9GaXhlZE1hcC50cz8xOGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7IE1hcFBvc2l0aW9uLCBNb3ZlTW9kZSB9IGZyb20gXCIuL01hcEVudW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRNYXB7XG4gICAgLy8gU2lkZXNjcm9sbGluZyBNYXBcbiAgICBcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTGF5ZXJCYWNrJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vTGF5ZXJCYWNrLnBuZycpO1xuICAgICAgICAvLyBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllck1haW4nLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9MYXllck1haW4ucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyTWFpbicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0RlYnVnTWFpbi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTGF5ZXJTa3knLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9MYXllclNreS5wbmcnKTtcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAxJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMS5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAyLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDMucG5nJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDEnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDEucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDIucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDMnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDMucG5nJyk7XG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvL1xuICAgIHNreU9mZnNldFk6IG51bWJlciA9IC0zMDBcbiAgICBmYXJPZmZzZXRZOiBudW1iZXIgLy8geFxuICAgIGJhY2tPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgbWFpbk9mZnNldFk6IG51bWJlciA9ICA1MFxuICAgIGZyb250T2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICAvL1xuICAgIHNreVdpZHRoOiBudW1iZXIgPSAyMDAwXG4gICAgZmFyV2lkdGg6IG51bWJlciA9IDIwMDAgLy8geFxuICAgIGJhY2tXaWR0aDogbnVtYmVyID0gMzI0MCBcbiAgICAvLyBtYWluV2lkdGg6IG51bWJlciA9IDMyNDBcbiAgICBmcm9udFdpZHRoOiBudW1iZXIgPSAzMjQwIC8vIHhcbiAgICAvL1xuICAgIGxheWVyU2t5OiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gTE9PUFxuICAgIGxheWVyRmFyOiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gTE9PUFxuICAgIGxheWVyQmFjazogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIEZpeGVkXG4gICAgbGF5ZXJNYWluOiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gRml4ZWRcbiAgICBsYXllckZyb250OiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gP1xuICAgIC8vXG4gICAgbW92ZU1hcmdpbjogbnVtYmVyID0gNjAwXG4gICAgdmlld01hcmdpbjogbnVtYmVyID0gMTIwMFxuICAgIC8vXG4gICAgbWFwTGVuZ3RoOiBudW1iZXIgPSAwXG4gICAgbW92ZVN0YXJ0WDogbnVtYmVyID0gMFxuICAgIG1vdmVFbmRYOiBudW1iZXIgPSAxMDAwMFxuICAgIHZpZXdTdGFydFg6IG51bWJlciA9IDBcbiAgICB2aWV3RW5kWDogbnVtYmVyID0gMTAwMDBcbiAgICAvL1xuICAgIGN1cnJlbnRYOiBudW1iZXIgPSAzMDAwXG4gICAgLy9cbiAgICBjdXJyZW50TW92ZU1vZGU6IE1vdmVNb2RlID0gTW92ZU1vZGUuTk9ORVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6U2NlbmUsIHg6bnVtYmVyLCB5Om51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBMYXllcnNcbiAgICAgICAgdGhpcy5sYXllclNreSA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuc2t5T2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGYXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmZhck9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyQmFjayA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuYmFja09mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyTWFpbiA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMubWFpbk9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyRnJvbnQgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmZyb250T2Zmc2V0WSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJTa3kpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckZhcik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyQmFjayk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyTWFpbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRnJvbnQpO1xuXG4gICAgICAgIC8vIExheWVyIFNreVxuICAgICAgICBsZXQgc2t5QmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLnNreVdpZHRoLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUNlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IHNreUFmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuc2t5V2lkdGgsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lCZWZvcmUpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyU2t5LmFkZChza3lBZnRlcik7XG5cbiAgICAgICAgLy8gTGF5ZXIgQmFja1xuICAgICAgICBsZXQgYmFja0JlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5iYWNrV2lkdGgsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IGJhY2tDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICBsZXQgYmFja0FmdGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMuYmFja1dpZHRoLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQmVmb3JlKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2suYWRkKGJhY2tDZW50ZXIpO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5hZGQoYmFja0FmdGVyKTtcblxuICAgICAgICAvLyBMYXllciBNYWluXG4gICAgICAgIGxldCBtYWluTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMScsXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDInLFxuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAzJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAzJyxcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3RhbExlbmd0aDogbnVtYmVyID0gMDtcbiAgICAgICAgbWFpbkxpc3QuZm9yRWFjaCgobWFpbk1hcEtleSk9PntcbiAgICAgICAgICAgIGxldCBtYWluQ2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRvdGFsTGVuZ3RoLDAsbWFpbk1hcEtleSkuc2V0T3JpZ2luKDAsMSk7XG4gICAgICAgICAgICB0aGlzLmxheWVyTWFpbi5hZGQobWFpbkNlbnRlcik7XG5cbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5zY2VuZS50ZXh0dXJlcy5nZXQobWFpbk1hcEtleSk7XG4gICAgICAgICAgICBpZiggdGV4dHVyZSApe1xuICAgICAgICAgICAgICAgIHRvdGFsTGVuZ3RoICs9IHRleHR1cmUuZ2V0U291cmNlSW1hZ2UoKS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcExlbmd0aCA9IHRvdGFsTGVuZ3RoO1xuICAgICAgICAvLyBQcmVwYXJlIFBhcmFtXG4gICAgICAgIHRoaXMubW92ZVN0YXJ0WCA9IHRoaXMubW92ZU1hcmdpbjtcbiAgICAgICAgdGhpcy5tb3ZlRW5kWCA9IHRoaXMubWFwTGVuZ3RoIC0gdGhpcy5tb3ZlTWFyZ2luO1xuICAgICAgICB0aGlzLnZpZXdTdGFydFggPSB0aGlzLnZpZXdNYXJnaW47XG4gICAgICAgIHRoaXMudmlld0VuZFggPSB0aGlzLm1hcExlbmd0aCAtIHRoaXMudmlld01hcmdpbjtcblxuICAgICAgICB0aGlzLl9yZW5kZXJNYXAoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoIGRlbHRhWDogbnVtYmVyICl7XG4gICAgICAgIGlmKCBkZWx0YVggPT0gMCApIHJldHVybjtcbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnRYLCBoYW5kbGUgYmFzaWMgbW92ZW1lbnRcbiAgICAgICAgdGhpcy5jdXJyZW50WCArPSBkZWx0YVg7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBNYXRoLm1pbih0aGlzLm1vdmVFbmRYLHRoaXMuY3VycmVudFgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5tYXgodGhpcy5tb3ZlU3RhcnRYLHRoaXMuY3VycmVudFgpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBNb3ZlIE1vZGVcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlTW92ZU1vZGUoKTtcblxuICAgICAgICBpZiggdGhpcy5jdXJyZW50TW92ZU1vZGUgPT0gTW92ZU1vZGUuTUFQICl7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJNYXAoKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgX3JlbmRlck1hcCgpe1xuICAgICAgICBsZXQgbmV3TWFwUG9zaXRpb25YOm51bWJlciA9IC0xICogdGhpcy5jdXJyZW50WDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxheWVyQmFjayBSZW1haW5kZXJcbiAgICAgICAgbGV0IGxheWVyU2t5UG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDAuNSAlIHRoaXMuc2t5V2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJTa3kuc2V0WChsYXllclNreVBvc1gpO1xuXG4gICAgICAgIGxldCBsYXllckJhY2tQb3NYID0gbmV3TWFwUG9zaXRpb25YICogMSAlIHRoaXMuYmFja1dpZHRoO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5zZXRYKGxheWVyQmFja1Bvc1gpO1xuICAgICAgICBcbiAgICAgICAgLy8gbGV0IGxheWVyTWFpblBvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAxICUgdGhpcy5tYWluV2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluLnNldFgobmV3TWFwUG9zaXRpb25YKTtcbiAgICB9XG5cbiAgICBfY2FsY3VsYXRlTW92ZU1vZGUoKXtcbiAgICAgICAgLy8gSWYgV2l0aGluIE1vdmUgUmFuZ2UgJiYgbWlkZGxlLCB1c2UgbWFwLCAgXG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYID4gdGhpcy5tb3ZlU3RhcnRYICYmIHRoaXMuY3VycmVudFggPCB0aGlzLm1vdmVFbmRYICl7XG4gICAgICAgICAgICBpZiggdGhpcy5nZXRNYXBQb3NpdGlvbigpID09IE1hcFBvc2l0aW9uLk1JRERMRSApe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVNb2RlID0gTW92ZU1vZGUuTUFQO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZU1vZGUgPSBNb3ZlTW9kZS5BVkFUQVI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZU1vZGUgPSBNb3ZlTW9kZS5OT05FO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWFwUG9zaXRpb24oKTpNYXBQb3NpdGlvbntcbiAgICAgICAgLy8gUmV0dXJuIHN0cmluZyA+IHN0YXJ0LCBlbmQsIG1pZGRsZSwgZWZmZWN0IG9uIFZpZXcgUGVyc3BlY3RpdmVcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFggPCB0aGlzLnZpZXdTdGFydFggKXtcbiAgICAgICAgICAgIHJldHVybiBNYXBQb3NpdGlvbi5TVEFSVDtcbiAgICAgICAgfWVsc2UgaWYoIHRoaXMuY3VycmVudFggPiB0aGlzLnZpZXdFbmRYICl7XG4gICAgICAgICAgICByZXR1cm4gTWFwUG9zaXRpb24uRU5EO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBNYXBQb3NpdGlvbi5NSURETEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlTW9kZSgpOk1vdmVNb2Rle1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TW92ZU1vZGU7XG4gICAgfVxuICAgIC8vIGNhbk1vdmUoKTpib29sZWFue1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCA+IHRoaXMubW92ZVN0YXJ0WCAmJiB0aGlzLmN1cnJlbnRYIDwgdGhpcy5tb3ZlRW5kWDtcbiAgICAvLyB9XG5cbiAgICAvLyBPbmx5IEZvciBEZWJ1ZyBBVE1cbiAgICBnZXRNb3ZlZFgoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCAtIHRoaXMubW92ZVN0YXJ0WDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IEZvciBEZWJ1ZyBBVE1cbiAgICBnZXRNb3ZhYmxlTGVuZ3RoKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwTGVuZ3RoIC0gKDIqdGhpcy5tb3ZlTWFyZ2luKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1hcFBvc2l0aW9uIiwiTW92ZU1vZGUiLCJGaXhlZE1hcCIsInByZWxvYWQiLCJzY2VuZSIsImxvYWQiLCJpbWFnZSIsInVwZGF0ZSIsImRlbHRhWCIsImN1cnJlbnRYIiwiTWF0aCIsIm1pbiIsIm1vdmVFbmRYIiwibWF4IiwibW92ZVN0YXJ0WCIsIl9jYWxjdWxhdGVNb3ZlTW9kZSIsImN1cnJlbnRNb3ZlTW9kZSIsIk1BUCIsIl9yZW5kZXJNYXAiLCJuZXdNYXBQb3NpdGlvblgiLCJsYXllclNreVBvc1giLCJza3lXaWR0aCIsImxheWVyU2t5Iiwic2V0WCIsImxheWVyQmFja1Bvc1giLCJiYWNrV2lkdGgiLCJsYXllckJhY2siLCJsYXllck1haW4iLCJnZXRNYXBQb3NpdGlvbiIsIk1JRERMRSIsIkFWQVRBUiIsIk5PTkUiLCJ2aWV3U3RhcnRYIiwiU1RBUlQiLCJ2aWV3RW5kWCIsIkVORCIsImdldE1vZGVNb2RlIiwiZ2V0TW92ZWRYIiwiZ2V0TW92YWJsZUxlbmd0aCIsIm1hcExlbmd0aCIsIm1vdmVNYXJnaW4iLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic2t5T2Zmc2V0WSIsImJhY2tPZmZzZXRZIiwibWFpbk9mZnNldFkiLCJmYXJXaWR0aCIsImZyb250V2lkdGgiLCJ2aWV3TWFyZ2luIiwiY29udGFpbmVyIiwiYWRkIiwibGF5ZXJGYXIiLCJmYXJPZmZzZXRZIiwibGF5ZXJGcm9udCIsImZyb250T2Zmc2V0WSIsInNreUJlZm9yZSIsInNwcml0ZSIsInNldE9yaWdpbiIsInNreUNlbnRlciIsInNreUFmdGVyIiwiYmFja0JlZm9yZSIsImJhY2tDZW50ZXIiLCJiYWNrQWZ0ZXIiLCJtYWluTGlzdCIsInRvdGFsTGVuZ3RoIiwiZm9yRWFjaCIsIm1haW5NYXBLZXkiLCJtYWluQ2VudGVyIiwidGV4dHVyZSIsInRleHR1cmVzIiwiZ2V0IiwiZ2V0U291cmNlSW1hZ2UiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});