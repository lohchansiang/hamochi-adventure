"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/game/components/OpponentAttackBar.ts":
/*!**************************************************!*\
  !*** ./src/game/components/OpponentAttackBar.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OpponentAttackBar; }\n/* harmony export */ });\nclass OpponentAttackBar {\n    onCountDown() {\n        if (!this.isPaused) {\n            this.addValue(1);\n        }\n    }\n    addValue(value) {\n        let newCurrent = this.current + value;\n        if (newCurrent > this.target) {\n            newCurrent = this.target;\n        } else if (newCurrent < 0) {\n            newCurrent = 0;\n        }\n        this.current = newCurrent;\n        this.renderProgressBar();\n        if (this.current == this.target) {\n            this.scene.events.emit(\"opponent-attack\");\n            this.pause();\n        }\n    }\n    pause() {\n        this.isPaused = true;\n    }\n    resume() {\n        this.isPaused = false;\n    }\n    renderProgressBar() {\n        let width = (this.width - 2 * this.padding) * (this.current / this.target);\n        let height = this.height - 2 * this.padding;\n        this.progressBar.fillStyle(0x00ff00, 1);\n        this.progressBar.fillRect(this.startX + this.padding, this.startY + this.padding, width, height);\n    }\n    resetProgressBar() {\n        this.current = 0;\n        this.progressBar.clear();\n        this.renderProgressBar();\n    }\n    constructor(scene, x, y, target = 5){\n        this.current = 0;\n        //\n        this.width = 400;\n        this.height = 50;\n        this.padding = 10;\n        this.scene = scene;\n        this.target = target;\n        this.startX = x - this.width / 2;\n        this.startY = y - this.height / 2;\n        this.progressBox = this.scene.add.graphics();\n        this.progressBox.fillStyle(0x222222, 0.8);\n        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);\n        this.progressBar = this.scene.add.graphics();\n        this.renderProgressBar();\n        this.timedEvent = this.scene.time.addEvent({\n            delay: 1000,\n            callback: this.onCountDown,\n            callbackScope: this,\n            loop: true\n        });\n        this.pause();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL09wcG9uZW50QXR0YWNrQmFyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQTtJQW9DakJDLGNBQ0E7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDbEI7SUFDSjtJQUVBQSxTQUFVQyxLQUFhLEVBQUM7UUFDcEIsSUFBSUMsYUFBYSxJQUFJLENBQUNDLE9BQU8sR0FBR0Y7UUFFaEMsSUFBSUMsYUFBYSxJQUFJLENBQUNFLE1BQU0sRUFBRTtZQUMxQkYsYUFBYSxJQUFJLENBQUNFLE1BQU07UUFDNUIsT0FBTSxJQUFJRixhQUFhLEdBQUc7WUFDdEJBLGFBQWE7UUFDakI7UUFFQSxJQUFJLENBQUNDLE9BQU8sR0FBR0Q7UUFDZixJQUFJLENBQUNHLGlCQUFpQjtRQUV0QixJQUFJLElBQUksQ0FBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUNDLEtBQUs7UUFDZDtJQUNKO0lBRUFBLFFBQU87UUFDSCxJQUFJLENBQUNWLFFBQVEsR0FBRztJQUNwQjtJQUVBVyxTQUFRO1FBQ0osSUFBSSxDQUFDWCxRQUFRLEdBQUc7SUFDcEI7SUFFQU0sb0JBQW1CO1FBQ2YsSUFBSU0sUUFBUSxDQUFFLElBQUksQ0FBQ0EsS0FBSyxHQUFJLElBQUUsSUFBSSxDQUFDQyxPQUFPLElBQVEsS0FBSSxDQUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDQyxNQUFNO1FBQzVFLElBQUlTLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEdBQUksSUFBRSxJQUFJLENBQUNELE9BQU87UUFDMUMsSUFBSSxDQUFDRSxXQUFXLENBQUNDLFNBQVMsQ0FBQyxVQUFVO1FBQ3JDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDQyxNQUFNLEdBQUMsSUFBSSxDQUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDTSxNQUFNLEdBQUMsSUFBSSxDQUFDTixPQUFPLEVBQUVELE9BQU9FO0lBQ3pGO0lBRUFNLG1CQUFrQjtRQUNkLElBQUksQ0FBQ2hCLE9BQU8sR0FBRztRQUVmLElBQUksQ0FBQ1csV0FBVyxDQUFDTSxLQUFLO1FBQ3RCLElBQUksQ0FBQ2YsaUJBQWlCO0lBQzFCO0lBL0RBZ0IsWUFBYWYsS0FBVyxFQUFFZ0IsQ0FBUyxFQUFFQyxDQUFTLEVBQUVuQixTQUFpQixDQUFDLENBQUU7YUFkcEVELFVBQWtCO1FBQ2xCLEVBQUU7YUFDRlEsUUFBZ0I7YUFDaEJFLFNBQWlCO2FBQ2pCRCxVQUFrQjtRQVdkLElBQUksQ0FBQ04sS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0YsTUFBTSxHQUFHQTtRQUVkLElBQUksQ0FBQ2EsTUFBTSxHQUFHSyxJQUFLLElBQUksQ0FBQ1gsS0FBSyxHQUFDO1FBQzlCLElBQUksQ0FBQ08sTUFBTSxHQUFHSyxJQUFLLElBQUksQ0FBQ1YsTUFBTSxHQUFDO1FBRS9CLElBQUksQ0FBQ1csV0FBVyxHQUFHLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLEdBQUcsQ0FBQ0MsUUFBUTtRQUMxQyxJQUFJLENBQUNGLFdBQVcsQ0FBQ1QsU0FBUyxDQUFDLFVBQVU7UUFDckMsSUFBSSxDQUFDUyxXQUFXLENBQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNQLEtBQUssRUFBRSxJQUFJLENBQUNFLE1BQU07UUFFM0UsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNtQixHQUFHLENBQUNDLFFBQVE7UUFDMUMsSUFBSSxDQUFDckIsaUJBQWlCO1FBRXRCLElBQUksQ0FBQ3NCLFVBQVUsR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNzQixJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUFFQyxPQUFPO1lBQU1DLFVBQVUsSUFBSSxDQUFDakMsV0FBVztZQUFFa0MsZUFBZSxJQUFJO1lBQUVDLE1BQU07UUFBSztRQUN0SCxJQUFJLENBQUN4QixLQUFLO0lBQ2Q7QUFnREo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL09wcG9uZW50QXR0YWNrQmFyLnRzPzUzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wcG9uZW50QXR0YWNrQmFye1xuICAgIHNjZW5lOiBTY2VuZVxuICAgIC8vXG4gICAgdGFyZ2V0OiBudW1iZXJcbiAgICBjdXJyZW50OiBudW1iZXIgPSAwXG4gICAgLy9cbiAgICB3aWR0aDogbnVtYmVyID0gNDAwXG4gICAgaGVpZ2h0OiBudW1iZXIgPSA1MFxuICAgIHBhZGRpbmc6IG51bWJlciA9IDEwXG4gICAgc3RhcnRYOiBudW1iZXJcbiAgICBzdGFydFk6IG51bWJlclxuICAgIC8vXG4gICAgcHJvZ3Jlc3NCYXI6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgcHJvZ3Jlc3NCb3g6IEdhbWVPYmplY3RzLkdyYXBoaWNzXG4gICAgdGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudFxuICAgIC8vXG4gICAgaXNQYXVzZWQ6IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRhcmdldDogbnVtYmVyID0gNSApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcblxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHggLSAodGhpcy53aWR0aC8yKVxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHkgLSAodGhpcy5oZWlnaHQvMilcblxuICAgICAgICB0aGlzLnByb2dyZXNzQm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JveC5maWxsU3R5bGUoMHgyMjIyMjIsIDAuOCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCb3guZmlsbFJlY3QodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKVxuXG4gICAgICAgIHRoaXMudGltZWRFdmVudCA9IHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7IGRlbGF5OiAxMDAwLCBjYWxsYmFjazogdGhpcy5vbkNvdW50RG93biwgY2FsbGJhY2tTY29wZTogdGhpcywgbG9vcDogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25Db3VudERvd24gKClcbiAgICB7XG4gICAgICAgIGlmKCAhdGhpcy5pc1BhdXNlZCApe1xuICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZSgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVmFsdWUoIHZhbHVlIDpudW1iZXIpe1xuICAgICAgICBsZXQgbmV3Q3VycmVudCA9IHRoaXMuY3VycmVudCArIHZhbHVlXG5cbiAgICAgICAgaWYoIG5ld0N1cnJlbnQgPiB0aGlzLnRhcmdldCApe1xuICAgICAgICAgICAgbmV3Q3VycmVudCA9IHRoaXMudGFyZ2V0XG4gICAgICAgIH1lbHNlIGlmKCBuZXdDdXJyZW50IDwgMCApe1xuICAgICAgICAgICAgbmV3Q3VycmVudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0N1cnJlbnRcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmVzc0JhcigpXG5cbiAgICAgICAgaWYoIHRoaXMuY3VycmVudCA9PSB0aGlzLnRhcmdldCApe1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnb3Bwb25lbnQtYXR0YWNrJylcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKXtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzdW1lKCl7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXJQcm9ncmVzc0Jhcigpe1xuICAgICAgICBsZXQgd2lkdGggPSAoIHRoaXMud2lkdGggLSAoMip0aGlzLnBhZGRpbmcpICkgKiAoIHRoaXMuY3VycmVudCAvIHRoaXMudGFyZ2V0KVxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSAoMip0aGlzLnBhZGRpbmcpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZmlsbFN0eWxlKDB4MDBmZjAwLCAxKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5maWxsUmVjdCh0aGlzLnN0YXJ0WCt0aGlzLnBhZGRpbmcsIHRoaXMuc3RhcnRZK3RoaXMucGFkZGluZywgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgcmVzZXRQcm9ncmVzc0Jhcigpe1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5jbGVhcigpXG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiT3Bwb25lbnRBdHRhY2tCYXIiLCJvbkNvdW50RG93biIsImlzUGF1c2VkIiwiYWRkVmFsdWUiLCJ2YWx1ZSIsIm5ld0N1cnJlbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwicmVuZGVyUHJvZ3Jlc3NCYXIiLCJzY2VuZSIsImV2ZW50cyIsImVtaXQiLCJwYXVzZSIsInJlc3VtZSIsIndpZHRoIiwicGFkZGluZyIsImhlaWdodCIsInByb2dyZXNzQmFyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJyZXNldFByb2dyZXNzQmFyIiwiY2xlYXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwicHJvZ3Jlc3NCb3giLCJhZGQiLCJncmFwaGljcyIsInRpbWVkRXZlbnQiLCJ0aW1lIiwiYWRkRXZlbnQiLCJkZWxheSIsImNhbGxiYWNrIiwiY2FsbGJhY2tTY29wZSIsImxvb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/OpponentAttackBar.ts\n"));

/***/ })

});