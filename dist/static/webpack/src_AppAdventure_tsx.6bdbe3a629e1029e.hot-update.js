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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\n/* harmony import */ var _MapEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapEnum */ \"./src/adventure/components/Map/MapEnum.ts\");\n\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapLayerBack\", \"assets/adventure/maps/garden/LayerBack.png\");\n        // scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/LayerMain.png');\n        scene.load.image(\"mapLayerMain\", \"assets/adventure/maps/garden/DebugMain.png\");\n        scene.load.image(\"mapLayerSky\", \"assets/adventure/maps/garden/LayerSky.png\");\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX, handle basic movement\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.moveEndX, this.currentX);\n        this.currentX = Math.max(this.moveStartX, this.currentX);\n        // Calculate Move Mode\n        this._calculateMoveMode();\n        if (this.currentMoveMode == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP) {\n            this._moveMap();\n        }\n    }\n    _moveMap() {\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        this.layerSky.setX(layerSkyPosX);\n        let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        this.layerBack.setX(layerBackPosX);\n        // let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(newMapPositionX);\n    }\n    _calculateMoveMode() {\n        // If Within Move Range && middle, use map,  \n        if (this.currentX > this.moveStartX && this.currentX < this.moveEndX) {\n            if (this.getMapPosition() == _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE) {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.MAP;\n            } else {\n                this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.AVATAR;\n            }\n        } else {\n            this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        }\n    }\n    getMapPosition() {\n        // Return string > start, end, middle, effect on View Perspective\n        if (this.currentX < this.viewStartX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.START;\n        } else if (this.currentX > this.viewEndX) {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.END;\n        } else {\n            return _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MapPosition.MIDDLE;\n        }\n    }\n    getModeMode() {\n        return this.currentMoveMode;\n    }\n    // canMove():boolean{\n    //     return this.currentX > this.moveStartX && this.currentX < this.moveEndX;\n    // }\n    // Only For Debug ATM\n    getMovedX() {\n        return this.currentX - this.moveStartX;\n    }\n    // Only For Debug ATM\n    getMovableLength() {\n        return this.mapLength - 2 * this.moveMargin;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        // mainWidth: number = 3240\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.moveMargin = 600;\n        this.viewMargin = 1200;\n        //\n        this.mapLength = 0;\n        this.moveStartX = 0;\n        this.moveEndX = 10000;\n        this.viewStartX = 0;\n        this.viewEndX = 10000;\n        //\n        this.currentX = 3000;\n        //\n        this.currentMoveMode = _MapEnum__WEBPACK_IMPORTED_MODULE_0__.MoveMode.NONE;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerExtra = this.scene.add.container(0, this.mainOffsetY);\n        this.layerBuilding = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerExtra);\n        this.container.add(this.layerBuilding);\n        this.container.add(this.layerFront);\n        // Layer Sky\n        let skyBefore = this.scene.add.sprite(-this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyCenter = this.scene.add.sprite(0, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        let skyAfter = this.scene.add.sprite(this.skyWidth, 0, \"mapLayerSky\").setOrigin(0.5, 1);\n        this.layerSky.add(skyBefore);\n        this.layerSky.add(skyCenter);\n        this.layerSky.add(skyAfter);\n        // Layer Back\n        let backBefore = this.scene.add.sprite(-this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backCenter = this.scene.add.sprite(0, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        let backAfter = this.scene.add.sprite(this.backWidth, 0, \"mapLayerBack\").setOrigin(0.5, 1);\n        this.layerBack.add(backBefore);\n        this.layerBack.add(backCenter);\n        this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        // Calculate Map Length Based on Main List Array and create map\n        let totalLength = 0;\n        mainList.forEach((mainMapKey)=>{\n            let mainCenter = this.scene.add.sprite(totalLength, 0, mainMapKey).setOrigin(0, 1);\n            this.layerMain.add(mainCenter);\n            let texture = this.scene.textures.get(mainMapKey);\n            if (texture) {\n                totalLength += texture.getSourceImage().width;\n            }\n        });\n        this.mapLength = totalLength;\n        // Render Overlay End Wall on LayerExtra\n        this.wallStart = this.scene.add.rectangle(0, 0, this.moveMargin, 1000, 0xff0000).setOrigin(0, 1);\n        this.wallEnd = this.scene.add.rectangle(abc, 0, this.moveMargin, 1000, 0xff0000).setOrigin(0, 1);\n        this.layerExtra.add(this.wallStart);\n        // Prepare Map Param\n        this.moveStartX = this.moveMargin;\n        this.moveEndX = this.mapLength - this.moveMargin;\n        this.viewStartX = this.viewMargin;\n        this.viewEndX = this.mapLength - this.viewMargin;\n        this._moveMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO1FBQ2hELElBQUksQ0FBQ1IsVUFBVSxHQUFHLElBQUksQ0FBQ2lCLFVBQVU7UUFDakMsSUFBSSxDQUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDVSxVQUFVO1FBRWhELElBQUksQ0FBQy9CLFFBQVE7SUFDakI7QUFzRUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzPzE4YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHsgTWFwUG9zaXRpb24sIE1vdmVNb2RlIH0gZnJvbSBcIi4vTWFwRW51bVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZE1hcHtcbiAgICAvLyBTaWRlc2Nyb2xsaW5nIE1hcFxuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllckJhY2snLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2dhcmRlbi9MYXllckJhY2sucG5nJyk7XG4gICAgICAgIC8vIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcExheWVyTWFpbicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0xheWVyTWFpbi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTGF5ZXJNYWluJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9nYXJkZW4vRGVidWdNYWluLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBMYXllclNreScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZ2FyZGVuL0xheWVyU2t5LnBuZycpO1xuICAgICAgICBcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDEnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAxLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDIucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAzJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMy5wbmcnKTtcbiAgICAgICAgLy9cbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMScsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMS5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMicsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMi5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpblNob3J0RGVtbzAwMycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW5TaG9ydDAwMy5wbmcnKTtcbiAgICB9XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgc2t5T2Zmc2V0WTogbnVtYmVyID0gLTMwMFxuICAgIGZhck9mZnNldFk6IG51bWJlciAvLyB4XG4gICAgYmFja09mZnNldFk6IG51bWJlciA9IC0zMDBcbiAgICBtYWluT2Zmc2V0WTogbnVtYmVyID0gIDUwXG4gICAgZnJvbnRPZmZzZXRZOiBudW1iZXIgLy8geFxuICAgIC8vXG4gICAgc2t5V2lkdGg6IG51bWJlciA9IDIwMDBcbiAgICBmYXJXaWR0aDogbnVtYmVyID0gMjAwMCAvLyB4XG4gICAgYmFja1dpZHRoOiBudW1iZXIgPSAzMjQwIFxuICAgIC8vIG1haW5XaWR0aDogbnVtYmVyID0gMzI0MFxuICAgIGZyb250V2lkdGg6IG51bWJlciA9IDMyNDAgLy8geFxuICAgIC8vXG4gICAgbGF5ZXJTa3k6IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyBMT09QXG4gICAgbGF5ZXJGYXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyBMT09QXG4gICAgbGF5ZXJCYWNrOiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gRml4ZWRcbiAgICBsYXllck1haW46IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyBGaXhlZFxuICAgIGxheWVyRXh0cmE6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyQnVpbGRpbmc6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGxheWVyRnJvbnQ6IEdhbWVPYmplY3RzLkNvbnRhaW5lciAvLyA/XG4gICAgLy9cbiAgICBtb3ZlTWFyZ2luOiBudW1iZXIgPSA2MDBcbiAgICB2aWV3TWFyZ2luOiBudW1iZXIgPSAxMjAwXG4gICAgLy9cbiAgICBtYXBMZW5ndGg6IG51bWJlciA9IDBcbiAgICBtb3ZlU3RhcnRYOiBudW1iZXIgPSAwXG4gICAgbW92ZUVuZFg6IG51bWJlciA9IDEwMDAwXG4gICAgdmlld1N0YXJ0WDogbnVtYmVyID0gMFxuICAgIHZpZXdFbmRYOiBudW1iZXIgPSAxMDAwMFxuICAgIC8vXG4gICAgY3VycmVudFg6IG51bWJlciA9IDMwMDBcbiAgICAvL1xuICAgIGN1cnJlbnRNb3ZlTW9kZTogTW92ZU1vZGUgPSBNb3ZlTW9kZS5OT05FXG4gICAgLy9cbiAgICB3YWxsU3RhcnQ6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHdhbGxFbmQ6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6U2NlbmUsIHg6bnVtYmVyLCB5Om51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBMYXllcnNcbiAgICAgICAgdGhpcy5sYXllclNreSA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuc2t5T2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGYXIgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLmZhck9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyQmFjayA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuYmFja09mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyTWFpbiA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMubWFpbk9mZnNldFkpO1xuICAgICAgICB0aGlzLmxheWVyRXh0cmEgPSB0aGlzLnNjZW5lLmFkZC5jb250YWluZXIoMCx0aGlzLm1haW5PZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckJ1aWxkaW5nID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5tYWluT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGcm9udCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZnJvbnRPZmZzZXRZKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllclNreSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRmFyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJCYWNrKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJNYWluKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJFeHRyYSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyQnVpbGRpbmcpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllckZyb250KTtcblxuICAgICAgICAvLyBMYXllciBTa3lcbiAgICAgICAgbGV0IHNreUJlZm9yZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgtdGhpcy5za3lXaWR0aCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIGxldCBza3lDZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIGxldCBza3lBZnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLnNreVdpZHRoLDAsJ21hcExheWVyU2t5Jykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgdGhpcy5sYXllclNreS5hZGQoc2t5QmVmb3JlKTtcbiAgICAgICAgdGhpcy5sYXllclNreS5hZGQoc2t5Q2VudGVyKTtcbiAgICAgICAgdGhpcy5sYXllclNreS5hZGQoc2t5QWZ0ZXIpO1xuXG4gICAgICAgIC8vIExheWVyIEJhY2tcbiAgICAgICAgbGV0IGJhY2tCZWZvcmUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoLXRoaXMuYmFja1dpZHRoLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIGxldCBiYWNrQ2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgbGV0IGJhY2tBZnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLmJhY2tXaWR0aCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICB0aGlzLmxheWVyQmFjay5hZGQoYmFja0JlZm9yZSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQ2VudGVyKTtcbiAgICAgICAgdGhpcy5sYXllckJhY2suYWRkKGJhY2tBZnRlcik7XG5cbiAgICAgICAgLy8gTGF5ZXIgTWFpblxuICAgICAgICBsZXQgbWFpbkxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDEnLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDEnLFxuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAyJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAyJyxcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMycsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMycsXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgTWFwIExlbmd0aCBCYXNlZCBvbiBNYWluIExpc3QgQXJyYXkgYW5kIGNyZWF0ZSBtYXBcbiAgICAgICAgbGV0IHRvdGFsTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgICAgICBtYWluTGlzdC5mb3JFYWNoKChtYWluTWFwS2V5KT0+e1xuICAgICAgICAgICAgbGV0IG1haW5DZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodG90YWxMZW5ndGgsMCxtYWluTWFwS2V5KS5zZXRPcmlnaW4oMCwxKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJNYWluLmFkZChtYWluQ2VudGVyKTtcblxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLnNjZW5lLnRleHR1cmVzLmdldChtYWluTWFwS2V5KTtcbiAgICAgICAgICAgIGlmKCB0ZXh0dXJlICl7XG4gICAgICAgICAgICAgICAgdG90YWxMZW5ndGggKz0gdGV4dHVyZS5nZXRTb3VyY2VJbWFnZSgpLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXBMZW5ndGggPSB0b3RhbExlbmd0aDtcblxuICAgICAgICAvLyBSZW5kZXIgT3ZlcmxheSBFbmQgV2FsbCBvbiBMYXllckV4dHJhXG4gICAgICAgIHRoaXMud2FsbFN0YXJ0ID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCx0aGlzLm1vdmVNYXJnaW4sMTAwMCwweGZmMDAwMCkuc2V0T3JpZ2luKDAsMSk7XG4gICAgICAgIHRoaXMud2FsbEVuZCA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShhYmMsMCx0aGlzLm1vdmVNYXJnaW4sMTAwMCwweGZmMDAwMCkuc2V0T3JpZ2luKDAsMSk7XG4gICAgICAgIHRoaXMubGF5ZXJFeHRyYS5hZGQodGhpcy53YWxsU3RhcnQpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgTWFwIFBhcmFtXG4gICAgICAgIHRoaXMubW92ZVN0YXJ0WCA9IHRoaXMubW92ZU1hcmdpbjtcbiAgICAgICAgdGhpcy5tb3ZlRW5kWCA9IHRoaXMubWFwTGVuZ3RoIC0gdGhpcy5tb3ZlTWFyZ2luO1xuICAgICAgICB0aGlzLnZpZXdTdGFydFggPSB0aGlzLnZpZXdNYXJnaW47XG4gICAgICAgIHRoaXMudmlld0VuZFggPSB0aGlzLm1hcExlbmd0aCAtIHRoaXMudmlld01hcmdpbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21vdmVNYXAoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoIGRlbHRhWDogbnVtYmVyICl7XG4gICAgICAgIGlmKCBkZWx0YVggPT0gMCApIHJldHVybjtcbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnRYLCBoYW5kbGUgYmFzaWMgbW92ZW1lbnRcbiAgICAgICAgdGhpcy5jdXJyZW50WCArPSBkZWx0YVg7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBNYXRoLm1pbih0aGlzLm1vdmVFbmRYLHRoaXMuY3VycmVudFgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gTWF0aC5tYXgodGhpcy5tb3ZlU3RhcnRYLHRoaXMuY3VycmVudFgpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBNb3ZlIE1vZGVcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlTW92ZU1vZGUoKTtcblxuICAgICAgICBpZiggdGhpcy5jdXJyZW50TW92ZU1vZGUgPT0gTW92ZU1vZGUuTUFQICl7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlTWFwKCk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIFxuICAgIF9tb3ZlTWFwKCl7XG4gICAgICAgIGxldCBuZXdNYXBQb3NpdGlvblg6bnVtYmVyID0gLTEgKiB0aGlzLmN1cnJlbnRYO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbGF5ZXJCYWNrIFJlbWFpbmRlclxuICAgICAgICBsZXQgbGF5ZXJTa3lQb3NYID0gbmV3TWFwUG9zaXRpb25YICogMC41ICUgdGhpcy5za3lXaWR0aDtcbiAgICAgICAgdGhpcy5sYXllclNreS5zZXRYKGxheWVyU2t5UG9zWCk7XG5cbiAgICAgICAgbGV0IGxheWVyQmFja1Bvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAxICUgdGhpcy5iYWNrV2lkdGg7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrLnNldFgobGF5ZXJCYWNrUG9zWCk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgbGF5ZXJNYWluUG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDEgJSB0aGlzLm1haW5XaWR0aDtcbiAgICAgICAgdGhpcy5sYXllck1haW4uc2V0WChuZXdNYXBQb3NpdGlvblgpO1xuICAgIH1cblxuICAgIF9jYWxjdWxhdGVNb3ZlTW9kZSgpe1xuICAgICAgICAvLyBJZiBXaXRoaW4gTW92ZSBSYW5nZSAmJiBtaWRkbGUsIHVzZSBtYXAsICBcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFggPiB0aGlzLm1vdmVTdGFydFggJiYgdGhpcy5jdXJyZW50WCA8IHRoaXMubW92ZUVuZFggKXtcbiAgICAgICAgICAgIGlmKCB0aGlzLmdldE1hcFBvc2l0aW9uKCkgPT0gTWFwUG9zaXRpb24uTUlERExFICl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZU1vZGUgPSBNb3ZlTW9kZS5NQVA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlTW9kZSA9IE1vdmVNb2RlLkFWQVRBUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlTW9kZSA9IE1vdmVNb2RlLk5PTkU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXBQb3NpdGlvbigpOk1hcFBvc2l0aW9ue1xuICAgICAgICAvLyBSZXR1cm4gc3RyaW5nID4gc3RhcnQsIGVuZCwgbWlkZGxlLCBlZmZlY3Qgb24gVmlldyBQZXJzcGVjdGl2ZVxuICAgICAgICBpZiggdGhpcy5jdXJyZW50WCA8IHRoaXMudmlld1N0YXJ0WCApe1xuICAgICAgICAgICAgcmV0dXJuIE1hcFBvc2l0aW9uLlNUQVJUO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5jdXJyZW50WCA+IHRoaXMudmlld0VuZFggKXtcbiAgICAgICAgICAgIHJldHVybiBNYXBQb3NpdGlvbi5FTkQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIE1hcFBvc2l0aW9uLk1JRERMRTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVNb2RlKCk6TW92ZU1vZGV7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNb3ZlTW9kZTtcbiAgICB9XG4gICAgLy8gY2FuTW92ZSgpOmJvb2xlYW57XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmN1cnJlbnRYID4gdGhpcy5tb3ZlU3RhcnRYICYmIHRoaXMuY3VycmVudFggPCB0aGlzLm1vdmVFbmRYO1xuICAgIC8vIH1cblxuICAgIC8vIE9ubHkgRm9yIERlYnVnIEFUTVxuICAgIGdldE1vdmVkWCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYIC0gdGhpcy5tb3ZlU3RhcnRYO1xuICAgIH1cblxuICAgIC8vIE9ubHkgRm9yIERlYnVnIEFUTVxuICAgIGdldE1vdmFibGVMZW5ndGgoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBMZW5ndGggLSAoMip0aGlzLm1vdmVNYXJnaW4pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiTWFwUG9zaXRpb24iLCJNb3ZlTW9kZSIsIkZpeGVkTWFwIiwicHJlbG9hZCIsInNjZW5lIiwibG9hZCIsImltYWdlIiwidXBkYXRlIiwiZGVsdGFYIiwiY3VycmVudFgiLCJNYXRoIiwibWluIiwibW92ZUVuZFgiLCJtYXgiLCJtb3ZlU3RhcnRYIiwiX2NhbGN1bGF0ZU1vdmVNb2RlIiwiY3VycmVudE1vdmVNb2RlIiwiTUFQIiwiX21vdmVNYXAiLCJuZXdNYXBQb3NpdGlvblgiLCJsYXllclNreVBvc1giLCJza3lXaWR0aCIsImxheWVyU2t5Iiwic2V0WCIsImxheWVyQmFja1Bvc1giLCJiYWNrV2lkdGgiLCJsYXllckJhY2siLCJsYXllck1haW4iLCJnZXRNYXBQb3NpdGlvbiIsIk1JRERMRSIsIkFWQVRBUiIsIk5PTkUiLCJ2aWV3U3RhcnRYIiwiU1RBUlQiLCJ2aWV3RW5kWCIsIkVORCIsImdldE1vZGVNb2RlIiwiZ2V0TW92ZWRYIiwiZ2V0TW92YWJsZUxlbmd0aCIsIm1hcExlbmd0aCIsIm1vdmVNYXJnaW4iLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic2t5T2Zmc2V0WSIsImJhY2tPZmZzZXRZIiwibWFpbk9mZnNldFkiLCJmYXJXaWR0aCIsImZyb250V2lkdGgiLCJ2aWV3TWFyZ2luIiwiY29udGFpbmVyIiwiYWRkIiwibGF5ZXJGYXIiLCJmYXJPZmZzZXRZIiwibGF5ZXJFeHRyYSIsImxheWVyQnVpbGRpbmciLCJsYXllckZyb250IiwiZnJvbnRPZmZzZXRZIiwic2t5QmVmb3JlIiwic3ByaXRlIiwic2V0T3JpZ2luIiwic2t5Q2VudGVyIiwic2t5QWZ0ZXIiLCJiYWNrQmVmb3JlIiwiYmFja0NlbnRlciIsImJhY2tBZnRlciIsIm1haW5MaXN0IiwidG90YWxMZW5ndGgiLCJmb3JFYWNoIiwibWFpbk1hcEtleSIsIm1haW5DZW50ZXIiLCJ0ZXh0dXJlIiwidGV4dHVyZXMiLCJnZXQiLCJnZXRTb3VyY2VJbWFnZSIsIndpZHRoIiwid2FsbFN0YXJ0IiwicmVjdGFuZ2xlIiwid2FsbEVuZCIsImFiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});