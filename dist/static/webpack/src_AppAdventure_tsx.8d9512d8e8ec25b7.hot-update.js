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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedMap; }\n/* harmony export */ });\nvar ViewState;\n(function(ViewState) {\n    ViewState[ViewState[\"START\"] = 0] = \"START\";\n    ViewState[ViewState[\"END\"] = 1] = \"END\";\n    ViewState[ViewState[\"MIDDLE\"] = 2] = \"MIDDLE\";\n})(ViewState || (ViewState = {}));\nclass FixedMap {\n    // Sidescrolling Map\n    static preload(scene) {\n        scene.load.image(\"mapMainDemo001\", \"assets/adventure/maps/demo/LayerMain001.png\");\n        scene.load.image(\"mapMainDemo002\", \"assets/adventure/maps/demo/LayerMain002.png\");\n        scene.load.image(\"mapMainDemo003\", \"assets/adventure/maps/demo/LayerMain003.png\");\n        //\n        scene.load.image(\"mapMainShortDemo001\", \"assets/adventure/maps/demo/LayerMainShort001.png\");\n        scene.load.image(\"mapMainShortDemo002\", \"assets/adventure/maps/demo/LayerMainShort002.png\");\n        scene.load.image(\"mapMainShortDemo003\", \"assets/adventure/maps/demo/LayerMainShort003.png\");\n    }\n    update(deltaX) {\n        if (deltaX == 0) return;\n        // Update currentX, handle basic movement\n        this.currentX += deltaX;\n        this.currentX = Math.min(this.moveEndX, this.currentX);\n        this.currentX = Math.max(this.moveStartX, this.currentX);\n        this.renderMap();\n    }\n    renderMap() {\n        // Check if reach end, only work in middle part\n        if (this.getMapPosition() != \"middle\") return;\n        let newMapPositionX = -1 * this.currentX;\n        // Calculate layerBack Remainder\n        // let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;\n        // this.layerSky.setX(layerSkyPosX);\n        // let layerBackPosX = newMapPositionX * 1 % this.backWidth;\n        // this.layerBack.setX(layerBackPosX);\n        // let layerMainPosX = newMapPositionX * 1 % this.mainWidth;\n        this.layerMain.setX(newMapPositionX);\n    }\n    getMapPosition() {\n        // Return string > start, end, middle, effect on View Perspective\n        if (this.currentX < this.viewStartX) {\n            return \"start\";\n        } else if (this.currentX > this.viewEndX) {\n            return \"end\";\n        } else {\n            return \"middle\";\n        }\n    }\n    canMove() {\n        return this.currentX > this.moveEndX && this.currentX < this.moveStartX;\n    }\n    constructor(scene, x, y){\n        //\n        this.skyOffsetY = -300;\n        this.backOffsetY = -300;\n        this.mainOffsetY = 50;\n        //\n        this.skyWidth = 2000;\n        this.farWidth = 2000 // x\n        ;\n        this.backWidth = 3240;\n        this.mainWidth = 3240;\n        this.frontWidth = 3240 // x\n        ;\n        //\n        this.moveMargin = 600;\n        this.viewMargin = 1200;\n        //\n        this.mapLength = 0;\n        this.moveStartX = 0;\n        this.moveEndX = 10000;\n        this.viewStartX = 0;\n        this.viewEndX = 10000;\n        //\n        this.currentX = 3000;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        // Add Layers\n        this.layerSky = this.scene.add.container(0, this.skyOffsetY);\n        this.layerFar = this.scene.add.container(0, this.farOffsetY);\n        this.layerBack = this.scene.add.container(0, this.backOffsetY);\n        this.layerMain = this.scene.add.container(0, this.mainOffsetY);\n        this.layerFront = this.scene.add.container(0, this.frontOffsetY);\n        this.container.add(this.layerSky);\n        this.container.add(this.layerFar);\n        this.container.add(this.layerBack);\n        this.container.add(this.layerMain);\n        this.container.add(this.layerFront);\n        // // Layer Sky\n        // let skyBefore = this.scene.add.sprite(-this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyCenter = this.scene.add.sprite(0,0,'mapLayerSky').setOrigin(0.5,1);\n        // let skyAfter = this.scene.add.sprite(this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);\n        // this.layerSky.add(skyBefore);\n        // this.layerSky.add(skyCenter);\n        // this.layerSky.add(skyAfter);\n        // // Layer Back\n        // let backBefore = this.scene.add.sprite(-this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backCenter = this.scene.add.sprite(0,0,'mapLayerBack').setOrigin(0.5,1);\n        // let backAfter = this.scene.add.sprite(this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);\n        // this.layerBack.add(backBefore);\n        // this.layerBack.add(backCenter);\n        // this.layerBack.add(backAfter);\n        // Layer Main\n        let mainList = [\n            \"mapMainDemo001\",\n            \"mapMainShortDemo001\",\n            \"mapMainDemo002\",\n            \"mapMainShortDemo002\",\n            \"mapMainDemo003\",\n            \"mapMainShortDemo003\"\n        ];\n        let totalLength = 0;\n        mainList.forEach((mainMapKey)=>{\n            let mainCenter = this.scene.add.sprite(totalLength, 0, mainMapKey).setOrigin(0, 1);\n            this.layerMain.add(mainCenter);\n            let texture = this.scene.textures.get(mainMapKey);\n            if (texture) {\n                totalLength += texture.getSourceImage().width;\n            }\n        });\n        this.mapLength = totalLength;\n        // Prepare Param\n        this.moveStartX = this.moveMargin;\n        this.moveEndX = this.mapLength - this.moveMargin;\n        this.viewStartX = this.viewMargin;\n        this.viewEndX = this.mapLength - this.viewMargin;\n        this.renderMap();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvTWFwL0ZpeGVkTWFwLnRzIiwibWFwcGluZ3MiOiI7Ozs7O1VBR0tBOzs7O0dBQUFBLGNBQUFBO0FBTVUsTUFBTUM7SUFDakIsb0JBQW9CO0lBR3BCLE9BQU9DLFFBQVNDLEtBQVksRUFBRTtRQUMxQkEsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsa0JBQWtCO1FBQ25DRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxrQkFBa0I7UUFDbkNGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQjtRQUNuQyxFQUFFO1FBQ0ZGLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLHVCQUF1QjtRQUN4Q0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCO1FBQ3hDRixNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQyx1QkFBdUI7SUFDNUM7SUFrR0FDLE9BQVFDLE1BQWMsRUFBRTtRQUNwQixJQUFJQSxVQUFVLEdBQUk7UUFFbEIseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ0MsUUFBUSxJQUFJRDtRQUNqQixJQUFJLENBQUNDLFFBQVEsR0FBR0MsS0FBS0MsR0FBRyxDQUFDLElBQUksQ0FBQ0MsUUFBUSxFQUFDLElBQUksQ0FBQ0gsUUFBUTtRQUNwRCxJQUFJLENBQUNBLFFBQVEsR0FBR0MsS0FBS0csR0FBRyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxFQUFDLElBQUksQ0FBQ0wsUUFBUTtRQUV0RCxJQUFJLENBQUNNLFNBQVM7SUFDbEI7SUFFQUEsWUFBVztRQUNQLCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQ0MsY0FBYyxNQUFNLFVBQVc7UUFFeEMsSUFBSUMsa0JBQXlCLENBQUMsSUFBSSxJQUFJLENBQUNSLFFBQVE7UUFDL0MsZ0NBQWdDO1FBQ2hDLDREQUE0RDtRQUM1RCxvQ0FBb0M7UUFFcEMsNERBQTREO1FBQzVELHNDQUFzQztRQUV0Qyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDUyxTQUFTLENB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LElBQUlDLGFBQWEsSUFBSSxDQUFDN0MsS0FBSyxDQUFDa0MsR0FBRyxDQUFDWSxNQUFNLENBQUNKLGFBQVksR0FBRUUsWUFBWUcsU0FBUyxDQUFDLEdBQUU7WUFDN0UsSUFBSSxDQUFDakMsU0FBUyxDQUFDb0IsR0FBRyxDQUFDVztZQUVuQixJQUFJRyxVQUFVLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2lELFFBQVEsQ0FBQ0MsR0FBRyxDQUFDTjtZQUN0QyxJQUFJSSxTQUFTO2dCQUNUTixlQUFlTSxRQUFRRyxjQUFjLEdBQUdDLEtBQUs7WUFDakQ7UUFDSjtRQUVBLElBQUksQ0FBQ3BCLFNBQVMsR0FBR1U7UUFDakIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUNvQixVQUFVO1FBQ2pDLElBQUksQ0FBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUN3QixTQUFTLEdBQUcsSUFBSSxDQUFDRixVQUFVO1FBQ2hELElBQUksQ0FBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQ2UsVUFBVTtRQUNqQyxJQUFJLENBQUNkLFFBQVEsR0FBRyxJQUFJLENBQUNlLFNBQVMsR0FBRyxJQUFJLENBQUNELFVBQVU7UUFFaEQsSUFBSSxDQUFDcEIsU0FBUztJQUNsQjtBQTJDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9NYXAvRml4ZWRNYXAudHM/MThiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lLCBUd2VlbnMgfSBmcm9tIFwicGhhc2VyXCI7XG5cbmVudW0gVmlld1N0YXRlIHtcbiAgICBTVEFSVCxcbiAgICBFTkQsXG4gICAgTUlERExFXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkTWFwe1xuICAgIC8vIFNpZGVzY3JvbGxpbmcgTWFwXG4gICAgXG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5EZW1vMDAxJywgJ2Fzc2V0cy9hZHZlbnR1cmUvbWFwcy9kZW1vL0xheWVyTWFpbjAwMS5wbmcnKTtcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgnbWFwTWFpbkRlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluMDAyLnBuZycpO1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdtYXBNYWluRGVtbzAwMycsICdhc3NldHMvYWR2ZW50dXJlL21hcHMvZGVtby9MYXllck1haW4wMDMucG5nJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDEnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDEucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDInLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDIucG5nJyk7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ21hcE1haW5TaG9ydERlbW8wMDMnLCAnYXNzZXRzL2FkdmVudHVyZS9tYXBzL2RlbW8vTGF5ZXJNYWluU2hvcnQwMDMucG5nJyk7XG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICAvL1xuICAgIHNreU9mZnNldFk6IG51bWJlciA9IC0zMDBcbiAgICBmYXJPZmZzZXRZOiBudW1iZXIgLy8geFxuICAgIGJhY2tPZmZzZXRZOiBudW1iZXIgPSAtMzAwXG4gICAgbWFpbk9mZnNldFk6IG51bWJlciA9ICA1MFxuICAgIGZyb250T2Zmc2V0WTogbnVtYmVyIC8vIHhcbiAgICAvL1xuICAgIHNreVdpZHRoOiBudW1iZXIgPSAyMDAwXG4gICAgZmFyV2lkdGg6IG51bWJlciA9IDIwMDAgLy8geFxuICAgIGJhY2tXaWR0aDogbnVtYmVyID0gMzI0MCBcbiAgICBtYWluV2lkdGg6IG51bWJlciA9IDMyNDBcbiAgICBmcm9udFdpZHRoOiBudW1iZXIgPSAzMjQwIC8vIHhcbiAgICAvL1xuICAgIGxheWVyU2t5OiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gTE9PUFxuICAgIGxheWVyRmFyOiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gTE9PUFxuICAgIGxheWVyQmFjazogR2FtZU9iamVjdHMuQ29udGFpbmVyIC8vIEZpeGVkXG4gICAgbGF5ZXJNYWluOiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gRml4ZWRcbiAgICBsYXllckZyb250OiBHYW1lT2JqZWN0cy5Db250YWluZXIgLy8gP1xuICAgIC8vXG4gICAgbW92ZU1hcmdpbjogbnVtYmVyID0gNjAwXG4gICAgdmlld01hcmdpbjogbnVtYmVyID0gMTIwMFxuICAgIC8vXG4gICAgbWFwTGVuZ3RoOiBudW1iZXIgPSAwXG4gICAgbW92ZVN0YXJ0WDogbnVtYmVyID0gMFxuICAgIG1vdmVFbmRYOiBudW1iZXIgPSAxMDAwMFxuICAgIHZpZXdTdGFydFg6IG51bWJlciA9IDBcbiAgICB2aWV3RW5kWDogbnVtYmVyID0gMTAwMDBcbiAgICAvL1xuICAgIGN1cnJlbnRYOiBudW1iZXIgPSAzMDAwXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIExheWVyc1xuICAgICAgICB0aGlzLmxheWVyU2t5ID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5za3lPZmZzZXRZKTtcbiAgICAgICAgdGhpcy5sYXllckZhciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZmFyT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJCYWNrID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5iYWNrT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJNYWluID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKDAsdGhpcy5tYWluT2Zmc2V0WSk7XG4gICAgICAgIHRoaXMubGF5ZXJGcm9udCA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcigwLHRoaXMuZnJvbnRPZmZzZXRZKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5sYXllclNreSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmxheWVyRmFyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJCYWNrKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJNYWluKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMubGF5ZXJGcm9udCk7XG5cbiAgICAgICAgLy8gLy8gTGF5ZXIgU2t5XG4gICAgICAgIC8vIGxldCBza3lCZWZvcmUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoLXRoaXMuc2t5V2lkdGgsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgc2t5Q2VudGVyID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwnbWFwTGF5ZXJTa3knKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgc2t5QWZ0ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy5za3lXaWR0aCwwLCdtYXBMYXllclNreScpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUJlZm9yZSk7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUNlbnRlcik7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJTa3kuYWRkKHNreUFmdGVyKTtcblxuICAgICAgICAvLyAvLyBMYXllciBCYWNrXG4gICAgICAgIC8vIGxldCBiYWNrQmVmb3JlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKC10aGlzLmJhY2tXaWR0aCwwLCdtYXBMYXllckJhY2snKS5zZXRPcmlnaW4oMC41LDEpO1xuICAgICAgICAvLyBsZXQgYmFja0NlbnRlciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ21hcExheWVyQmFjaycpLnNldE9yaWdpbigwLjUsMSk7XG4gICAgICAgIC8vIGxldCBiYWNrQWZ0ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy5iYWNrV2lkdGgsMCwnbWFwTGF5ZXJCYWNrJykuc2V0T3JpZ2luKDAuNSwxKTtcbiAgICAgICAgLy8gdGhpcy5sYXllckJhY2suYWRkKGJhY2tCZWZvcmUpO1xuICAgICAgICAvLyB0aGlzLmxheWVyQmFjay5hZGQoYmFja0NlbnRlcik7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJCYWNrLmFkZChiYWNrQWZ0ZXIpO1xuXG4gICAgICAgIC8vIExheWVyIE1haW5cbiAgICAgICAgbGV0IG1haW5MaXN0OiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICAgICAgJ21hcE1haW5EZW1vMDAxJyxcbiAgICAgICAgICAgICdtYXBNYWluU2hvcnREZW1vMDAxJyxcbiAgICAgICAgICAgICdtYXBNYWluRGVtbzAwMicsXG4gICAgICAgICAgICAnbWFwTWFpblNob3J0RGVtbzAwMicsXG4gICAgICAgICAgICAnbWFwTWFpbkRlbW8wMDMnLFxuICAgICAgICAgICAgJ21hcE1haW5TaG9ydERlbW8wMDMnLFxuICAgICAgICBdO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvdGFsTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgICAgICBtYWluTGlzdC5mb3JFYWNoKChtYWluTWFwS2V5KT0+e1xuICAgICAgICAgICAgbGV0IG1haW5DZW50ZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodG90YWxMZW5ndGgsMCxtYWluTWFwS2V5KS5zZXRPcmlnaW4oMCwxKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJNYWluLmFkZChtYWluQ2VudGVyKTtcblxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLnNjZW5lLnRleHR1cmVzLmdldChtYWluTWFwS2V5KTtcbiAgICAgICAgICAgIGlmKCB0ZXh0dXJlICl7XG4gICAgICAgICAgICAgICAgdG90YWxMZW5ndGggKz0gdGV4dHVyZS5nZXRTb3VyY2VJbWFnZSgpLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwTGVuZ3RoID0gdG90YWxMZW5ndGg7XG4gICAgICAgIC8vIFByZXBhcmUgUGFyYW1cbiAgICAgICAgdGhpcy5tb3ZlU3RhcnRYID0gdGhpcy5tb3ZlTWFyZ2luO1xuICAgICAgICB0aGlzLm1vdmVFbmRYID0gdGhpcy5tYXBMZW5ndGggLSB0aGlzLm1vdmVNYXJnaW47XG4gICAgICAgIHRoaXMudmlld1N0YXJ0WCA9IHRoaXMudmlld01hcmdpbjtcbiAgICAgICAgdGhpcy52aWV3RW5kWCA9IHRoaXMubWFwTGVuZ3RoIC0gdGhpcy52aWV3TWFyZ2luO1xuXG4gICAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCBkZWx0YVg6IG51bWJlciApe1xuICAgICAgICBpZiggZGVsdGFYID09IDAgKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgY3VycmVudFgsIGhhbmRsZSBiYXNpYyBtb3ZlbWVudFxuICAgICAgICB0aGlzLmN1cnJlbnRYICs9IGRlbHRhWDtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IE1hdGgubWluKHRoaXMubW92ZUVuZFgsdGhpcy5jdXJyZW50WCk7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBNYXRoLm1heCh0aGlzLm1vdmVTdGFydFgsdGhpcy5jdXJyZW50WCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJNYXAoKTtcbiAgICB9IFxuICAgIFxuICAgIHJlbmRlck1hcCgpe1xuICAgICAgICAvLyBDaGVjayBpZiByZWFjaCBlbmQsIG9ubHkgd29yayBpbiBtaWRkbGUgcGFydFxuICAgICAgICBpZiggdGhpcy5nZXRNYXBQb3NpdGlvbigpICE9ICdtaWRkbGUnICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBuZXdNYXBQb3NpdGlvblg6bnVtYmVyID0gLTEgKiB0aGlzLmN1cnJlbnRYO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbGF5ZXJCYWNrIFJlbWFpbmRlclxuICAgICAgICAvLyBsZXQgbGF5ZXJTa3lQb3NYID0gbmV3TWFwUG9zaXRpb25YICogMC41ICUgdGhpcy5za3lXaWR0aDtcbiAgICAgICAgLy8gdGhpcy5sYXllclNreS5zZXRYKGxheWVyU2t5UG9zWCk7XG5cbiAgICAgICAgLy8gbGV0IGxheWVyQmFja1Bvc1ggPSBuZXdNYXBQb3NpdGlvblggKiAxICUgdGhpcy5iYWNrV2lkdGg7XG4gICAgICAgIC8vIHRoaXMubGF5ZXJCYWNrLnNldFgobGF5ZXJCYWNrUG9zWCk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgbGF5ZXJNYWluUG9zWCA9IG5ld01hcFBvc2l0aW9uWCAqIDEgJSB0aGlzLm1haW5XaWR0aDtcbiAgICAgICAgdGhpcy5sYXllck1haW4uc2V0WChuZXdNYXBQb3NpdGlvblgpO1xuICAgIH1cblxuICAgIGdldE1hcFBvc2l0aW9uKCk6c3RyaW5ne1xuICAgICAgICAvLyBSZXR1cm4gc3RyaW5nID4gc3RhcnQsIGVuZCwgbWlkZGxlLCBlZmZlY3Qgb24gVmlldyBQZXJzcGVjdGl2ZVxuICAgICAgICBpZiggdGhpcy5jdXJyZW50WCA8IHRoaXMudmlld1N0YXJ0WCApe1xuICAgICAgICAgICAgcmV0dXJuICdzdGFydCc7XG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLmN1cnJlbnRYID4gdGhpcy52aWV3RW5kWCApe1xuICAgICAgICAgICAgcmV0dXJuICdlbmQnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAnbWlkZGxlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbk1vdmUoKTpib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WCA+IHRoaXMubW92ZUVuZFggJiYgdGhpcy5jdXJyZW50WCA8IHRoaXMubW92ZVN0YXJ0WDtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlZpZXdTdGF0ZSIsIkZpeGVkTWFwIiwicHJlbG9hZCIsInNjZW5lIiwibG9hZCIsImltYWdlIiwidXBkYXRlIiwiZGVsdGFYIiwiY3VycmVudFgiLCJNYXRoIiwibWluIiwibW92ZUVuZFgiLCJtYXgiLCJtb3ZlU3RhcnRYIiwicmVuZGVyTWFwIiwiZ2V0TWFwUG9zaXRpb24iLCJuZXdNYXBQb3NpdGlvblgiLCJsYXllck1haW4iLCJzZXRYIiwidmlld1N0YXJ0WCIsInZpZXdFbmRYIiwiY2FuTW92ZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJza3lPZmZzZXRZIiwiYmFja09mZnNldFkiLCJtYWluT2Zmc2V0WSIsInNreVdpZHRoIiwiZmFyV2lkdGgiLCJiYWNrV2lkdGgiLCJtYWluV2lkdGgiLCJmcm9udFdpZHRoIiwibW92ZU1hcmdpbiIsInZpZXdNYXJnaW4iLCJtYXBMZW5ndGgiLCJjb250YWluZXIiLCJhZGQiLCJsYXllclNreSIsImxheWVyRmFyIiwiZmFyT2Zmc2V0WSIsImxheWVyQmFjayIsImxheWVyRnJvbnQiLCJmcm9udE9mZnNldFkiLCJtYWluTGlzdCIsInRvdGFsTGVuZ3RoIiwiZm9yRWFjaCIsIm1haW5NYXBLZXkiLCJtYWluQ2VudGVyIiwic3ByaXRlIiwic2V0T3JpZ2luIiwidGV4dHVyZSIsInRleHR1cmVzIiwiZ2V0IiwiZ2V0U291cmNlSW1hZ2UiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/components/Map/FixedMap.ts\n"));

/***/ })

});