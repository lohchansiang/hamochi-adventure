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

/***/ "./src/adventure/components/Player/MoveController.ts":
/*!***********************************************************!*\
  !*** ./src/adventure/components/Player/MoveController.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveController; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass MoveController {\n    static preload(scene) {\n        scene.load.image(\"scrollHandler\", \"assets/adventure/components/scrollHandle.png\");\n    }\n    updateMoveState() {\n        if (this.handleSprite.x > this.trackWidth / 4) {\n            this.moveState = \"right\";\n        } else if (this.handleSprite.x < -this.trackWidth / 4) {\n            this.moveState = \"left\";\n        } else {\n            this.moveState = \"idle\";\n        }\n    }\n    constructor(scene, x, y){\n        //\n        this.trackWidth = 500;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        this.fixedPoints = [\n            -this.trackWidth / 2,\n            0,\n            this.trackWidth / 2\n        ];\n        this.track = this.scene.add.rectangle(0, 0, this.trackWidth, 30, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark);\n        this.container.add(this.track);\n        this.handleSprite = this.scene.add.sprite(0, 0, \"scrollHandler\");\n        this.container.add(this.handleSprite);\n        // Enable drag on the thumb\n        // this.handle.setInteractive();\n        // this.scene.input.setDraggable(this.handle);\n        this.handleSprite.setInteractive();\n        this.scene.input.setDraggable(this.handleSprite);\n        this.updateMoveState();\n        // Set up drag events\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            // Lock the thumb's x position and constrain it vertically within the track bounds\n            gameObject.x = Phaser.Math.Clamp(dragX, this.fixedPoints[0], this.fixedPoints[2]);\n            gameObject.y = 0;\n            this.updateMoveState();\n        });\n        // Snap the thumb to the nearest fixed point when the drag ends\n        this.scene.input.on(\"dragend\", (pointer, gameObject)=>{\n            // Find the closest fixed point\n            const closestPoint = this.fixedPoints.reduce((prev, curr)=>Math.abs(curr - gameObject.x) < Math.abs(prev - gameObject.x) ? curr : prev);\n            // Tween to the closest fixed point for a smooth snap effect\n            this.scene.tweens.add({\n                targets: gameObject,\n                x: closestPoint,\n                duration: 200,\n                ease: \"Power2\",\n                onComplete: ()=>{\n                    this.updateMoveState();\n                }\n            });\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBR3JCLE1BQU1DO0lBQ2pCLE9BQU9DLFFBQVNDLEtBQVksRUFBRTtRQUMxQkEsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsaUJBQWlCO0lBQ3RDO0lBaUVBQyxrQkFBaUI7UUFDYixJQUFJLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEdBQUMsR0FBRztZQUN6QyxJQUFJLENBQUNDLFNBQVMsR0FBRztRQUNyQixPQUFNLElBQUksSUFBSSxDQUFDSCxZQUFZLENBQUNDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxHQUFDLEdBQUU7WUFDL0MsSUFBSSxDQUFDQyxTQUFTLEdBQUc7UUFDckIsT0FBSztZQUNELElBQUksQ0FBQ0EsU0FBUyxHQUFHO1FBQ3JCO0lBQ0o7SUE3REFDLFlBQVlSLEtBQVcsRUFBQ0ssQ0FBUSxFQUFDSSxDQUFRLENBQUM7UUFSMUMsRUFBRTthQUNGSCxhQUFxQjtRQVFqQixJQUFJLENBQUNOLEtBQUssR0FBR0E7UUFFYixJQUFJLENBQUNVLFNBQVMsR0FBRyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csR0FBRyxDQUFDRCxTQUFTLENBQUNMLEdBQUVJO1FBRTVDLElBQUksQ0FBQ0csV0FBVyxHQUFHO1lBQ2YsQ0FBRSxJQUFJLENBQUNOLFVBQVUsR0FBRztZQUNwQjtZQUNBLElBQUksQ0FBQ0EsVUFBVSxHQUFHO1NBQ3JCO1FBRUQsSUFBSSxDQUFDTyxLQUFLLEdBQUcsSUFBSSxDQUFDYixLQUFLLENBQUNXLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLEdBQUUsR0FBRSxJQUFJLENBQUNSLFVBQVUsRUFBQyxJQUFHVCxxRUFBd0I7UUFDckYsSUFBSSxDQUFDYSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNFLEtBQUs7UUFFN0IsSUFBSSxDQUFDVCxZQUFZLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNXLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUUsR0FBRTtRQUM5QyxJQUFJLENBQUNOLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsWUFBWTtRQUVwQywyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLDhDQUE4QztRQUM5QyxJQUFJLENBQUNBLFlBQVksQ0FBQ2EsY0FBYztRQUNoQyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixLQUFLLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNmLFlBQVk7UUFDL0MsSUFBSSxDQUFDRCxlQUFlO1FBRXBCLHFCQUFxQjtRQUNyQixJQUFJLENBQUNILEtBQUssQ0FBQ2tCLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQ0MsU0FBK0JDLFlBQWlCQyxPQUFlQztZQUN4RixrRkFBa0Y7WUFDbEZGLFdBQVdqQixDQUFDLEdBQUdvQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxJQUFJLENBQUNYLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDQSxXQUFXLENBQUMsRUFBRTtZQUNoRlUsV0FBV2IsQ0FBQyxHQUFHO1lBRWYsSUFBSSxDQUFDTixlQUFlO1FBQ3hCO1FBRUEsK0RBQStEO1FBQy9ELElBQUksQ0FBQ0gsS0FBSyxDQUFDa0IsS0FBSyxDQUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDQyxTQUErQkM7WUFDM0QsK0JBQStCO1lBQy9CLE1BQU1NLGVBQWUsSUFBSSxDQUFDaEIsV0FBVyxDQUFDaUIsTUFBTSxDQUFDLENBQUNDLE1BQU1DLE9BQ2hETCxLQUFLTSxHQUFHLENBQUNELE9BQU9ULFdBQVdqQixDQUFDLElBQUlxQixLQUFLTSxHQUFHLENBQUNGLE9BQU9SLFdBQVdqQixDQUFDLElBQUkwQixPQUFPRDtZQUczRSw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDOUIsS0FBSyxDQUFDaUMsTUFBTSxDQUFDdEIsR0FBRyxDQUFDO2dCQUNsQnVCLFNBQVNaO2dCQUNUakIsR0FBR3VCO2dCQUNITyxVQUFVO2dCQUNWQyxNQUFNO2dCQUNOQyxZQUFZO29CQUNSLElBQUksQ0FBQ2xDLGVBQWU7Z0JBQ3hCO1lBQ0o7UUFDSjtJQUNKO0FBV0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyLnRzP2IyY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZUNvbnRyb2xsZXJ7XG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKFwic2Nyb2xsSGFuZGxlclwiLCBcImFzc2V0cy9hZHZlbnR1cmUvY29tcG9uZW50cy9zY3JvbGxIYW5kbGUucG5nXCIpO1xuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgLy9cbiAgICB0cmFja1dpZHRoOiBudW1iZXIgPSA1MDBcbiAgICB0cmFjazogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgaGFuZGxlU3ByaXRlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICAvL1xuICAgIGZpeGVkUG9pbnRzOiBBcnJheTxudW1iZXI+XG4gICAgbW92ZVN0YXRlOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOlNjZW5lLHg6bnVtYmVyLHk6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG5cbiAgICAgICAgdGhpcy5maXhlZFBvaW50cyA9IFtcbiAgICAgICAgICAgIC0gdGhpcy50cmFja1dpZHRoIC8gMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLnRyYWNrV2lkdGggLyAyXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50cmFjayA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsdGhpcy50cmFja1dpZHRoLDMwLEdhbWVMaWIuY29sb3JQYW5lbEJnRGFyayk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnRyYWNrKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVNwcml0ZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLDAsJ3Njcm9sbEhhbmRsZXInKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaGFuZGxlU3ByaXRlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVuYWJsZSBkcmFnIG9uIHRoZSB0aHVtYlxuICAgICAgICAvLyB0aGlzLmhhbmRsZS5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICAvLyB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmhhbmRsZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3ByaXRlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuaGFuZGxlU3ByaXRlKTtcbiAgICAgICAgdGhpcy51cGRhdGVNb3ZlU3RhdGUoKTtcblxuICAgICAgICAvLyBTZXQgdXAgZHJhZyBldmVudHNcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZycsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcmFnWDogbnVtYmVyLCBkcmFnWTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyBMb2NrIHRoZSB0aHVtYidzIHggcG9zaXRpb24gYW5kIGNvbnN0cmFpbiBpdCB2ZXJ0aWNhbGx5IHdpdGhpbiB0aGUgdHJhY2sgYm91bmRzXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBQaGFzZXIuTWF0aC5DbGFtcChkcmFnWCwgdGhpcy5maXhlZFBvaW50c1swXSwgdGhpcy5maXhlZFBvaW50c1syXSk7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmVTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNuYXAgdGhlIHRodW1iIHRvIHRoZSBuZWFyZXN0IGZpeGVkIHBvaW50IHdoZW4gdGhlIGRyYWcgZW5kc1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcmFnZW5kJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgZml4ZWQgcG9pbnRcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RQb2ludCA9IHRoaXMuZml4ZWRQb2ludHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhjdXJyIC0gZ2FtZU9iamVjdC54KSA8IE1hdGguYWJzKHByZXYgLSBnYW1lT2JqZWN0LngpID8gY3VyciA6IHByZXZcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFR3ZWVuIHRvIHRoZSBjbG9zZXN0IGZpeGVkIHBvaW50IGZvciBhIHNtb290aCBzbmFwIGVmZmVjdFxuICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBnYW1lT2JqZWN0LFxuICAgICAgICAgICAgICAgIHg6IGNsb3Nlc3RQb2ludCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW92ZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vdmVTdGF0ZSgpe1xuICAgICAgICBpZiggdGhpcy5oYW5kbGVTcHJpdGUueCA+IHRoaXMudHJhY2tXaWR0aC80ICl7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGF0ZSA9ICdyaWdodCc7XG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLmhhbmRsZVNwcml0ZS54IDwgLXRoaXMudHJhY2tXaWR0aC80KXtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXRlID0gJ2xlZnQnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXRlID0gJ2lkbGUnO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiTW92ZUNvbnRyb2xsZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJsb2FkIiwiaW1hZ2UiLCJ1cGRhdGVNb3ZlU3RhdGUiLCJoYW5kbGVTcHJpdGUiLCJ4IiwidHJhY2tXaWR0aCIsIm1vdmVTdGF0ZSIsImNvbnN0cnVjdG9yIiwieSIsImNvbnRhaW5lciIsImFkZCIsImZpeGVkUG9pbnRzIiwidHJhY2siLCJyZWN0YW5nbGUiLCJjb2xvclBhbmVsQmdEYXJrIiwic3ByaXRlIiwic2V0SW50ZXJhY3RpdmUiLCJpbnB1dCIsInNldERyYWdnYWJsZSIsIm9uIiwicG9pbnRlciIsImdhbWVPYmplY3QiLCJkcmFnWCIsImRyYWdZIiwiUGhhc2VyIiwiTWF0aCIsIkNsYW1wIiwiY2xvc2VzdFBvaW50IiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhYnMiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwiZHVyYXRpb24iLCJlYXNlIiwib25Db21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/adventure/components/Player/MoveController.ts\n"));

/***/ })

});