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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveController; }\n/* harmony export */ });\nclass MoveController {\n    static preload(scene) {\n        scene.load.image(\"scrollHandler\", \"assets/adventure/components/scrollHandle.png\");\n        scene.load.image(\"scrollBar\", \"assets/adventure/components/scrollBar.png\");\n    }\n    updateMoveState() {\n        if (this.handleSprite.x > this.trackWidth / 4) {\n            this.moveState = \"right\";\n        } else if (this.handleSprite.x < -this.trackWidth / 4) {\n            this.moveState = \"left\";\n        } else {\n            this.moveState = \"idle\";\n        }\n    }\n    //\n    constructor(scene, x, y){\n        //\n        this.trackWidth = 500;\n        this.scene = scene;\n        this.container = this.scene.add.container(x, y);\n        this.fixedPoints = [\n            -this.trackWidth / 2,\n            0,\n            this.trackWidth / 2\n        ];\n        this.trackSprite = this.scene.add.sprite(0, 0, \"scrollBar\");\n        this.trackSprite.setDisplaySize(this.trackWidth, 30);\n        this.container.add(this.trackSprite);\n        this.handleSprite = this.scene.add.sprite(0, 0, \"scrollHandler\");\n        this.container.add(this.handleSprite);\n        // Enable drag on the thumb\n        // this.handle.setInteractive();\n        // this.scene.input.setDraggable(this.handle);\n        this.handleSprite.setInteractive();\n        this.scene.input.setDraggable(this.handleSprite);\n        this.updateMoveState();\n        // Set up drag events\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            // Lock the thumb's x position and constrain it vertically within the track bounds\n            gameObject.x = Phaser.Math.Clamp(dragX, this.fixedPoints[0], this.fixedPoints[2]);\n            gameObject.y = 0;\n            this.updateMoveState();\n        });\n        // Snap the thumb to the nearest fixed point when the drag ends\n        this.scene.input.on(\"dragend\", (pointer, gameObject)=>{\n            // Find the closest fixed point\n            const closestPoint = this.fixedPoints.reduce((prev, curr)=>Math.abs(curr - gameObject.x) < Math.abs(prev - gameObject.x) ? curr : prev);\n            // Tween to the closest fixed point for a smooth snap effect\n            this.scene.tweens.add({\n                targets: gameObject,\n                x: closestPoint,\n                duration: 200,\n                ease: \"Power2\",\n                onComplete: ()=>{\n                    this.updateMoveState();\n                }\n            });\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL2NvbXBvbmVudHMvUGxheWVyL01vdmVDb250cm9sbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxNQUFNQTtJQUNqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUU7UUFDMUJBLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQjtRQUNsQ0YsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsYUFBYTtJQUNsQztJQXFFQUMsa0JBQWlCO1FBQ2IsSUFBSSxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxHQUFDLEdBQUc7WUFDekMsSUFBSSxDQUFDQyxTQUFTLEdBQUc7UUFDckIsT0FBTSxJQUFJLElBQUksQ0FBQ0gsWUFBWSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLFVBQVUsR0FBQyxHQUFFO1lBQy9DLElBQUksQ0FBQ0MsU0FBUyxHQUFHO1FBQ3JCLE9BQUs7WUFDRCxJQUFJLENBQUNBLFNBQVMsR0FBRztRQUNyQjtJQUNKO0lBaEVBLEVBQUU7SUFFRkMsWUFBWVIsS0FBVyxFQUFDSyxDQUFRLEVBQUNJLENBQVEsQ0FBQztRQVgxQyxFQUFFO2FBQ0ZILGFBQXFCO1FBV2pCLElBQUksQ0FBQ04sS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQ1UsU0FBUyxHQUFHLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxHQUFHLENBQUNELFNBQVMsQ0FBQ0wsR0FBRUk7UUFFNUMsSUFBSSxDQUFDRyxXQUFXLEdBQUc7WUFDZixDQUFFLElBQUksQ0FBQ04sVUFBVSxHQUFHO1lBQ3BCO1lBQ0EsSUFBSSxDQUFDQSxVQUFVLEdBQUc7U0FDckI7UUFFRCxJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJLENBQUNiLEtBQUssQ0FBQ1csR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRSxHQUFFO1FBQzdDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxjQUFjLENBQUMsSUFBSSxDQUFDVCxVQUFVLEVBQUM7UUFDaEQsSUFBSSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNFLFdBQVc7UUFFbkMsSUFBSSxDQUFDVCxZQUFZLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNXLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUUsR0FBRTtRQUM5QyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsWUFBWTtRQUVwQywyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLDhDQUE4QztRQUM5QyxJQUFJLENBQUNBLFlBQVksQ0FBQ1ksY0FBYztRQUNoQyxJQUFJLENBQUNoQixLQUFLLENBQUNpQixLQUFLLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNkLFlBQVk7UUFDL0MsSUFBSSxDQUFDRCxlQUFlO1FBRXBCLHFCQUFxQjtRQUNyQixJQUFJLENBQUNILEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQ0MsU0FBK0JDLFlBQWlCQyxPQUFlQztZQUN4RixrRkFBa0Y7WUFDbEZGLFdBQVdoQixDQUFDLEdBQUdtQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxJQUFJLENBQUNWLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDQSxXQUFXLENBQUMsRUFBRTtZQUNoRlMsV0FBV1osQ0FBQyxHQUFHO1lBRWYsSUFBSSxDQUFDTixlQUFlO1FBQ3hCO1FBRUEsK0RBQStEO1FBQy9ELElBQUksQ0FBQ0gsS0FBSyxDQUFDaUIsS0FBSyxDQUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDQyxTQUErQkM7WUFDM0QsK0JBQStCO1lBQy9CLE1BQU1NLGVBQWUsSUFBSSxDQUFDZixXQUFXLENBQUNnQixNQUFNLENBQUMsQ0FBQ0MsTUFBTUMsT0FDaERMLEtBQUtNLEdBQUcsQ0FBQ0QsT0FBT1QsV0FBV2hCLENBQUMsSUFBSW9CLEtBQUtNLEdBQUcsQ0FBQ0YsT0FBT1IsV0FBV2hCLENBQUMsSUFBSXlCLE9BQU9EO1lBRzNFLDREQUE0RDtZQUM1RCxJQUFJLENBQUM3QixLQUFLLENBQUNnQyxNQUFNLENBQUNyQixHQUFHLENBQUM7Z0JBQ2xCc0IsU0FBU1o7Z0JBQ1RoQixHQUFHc0I7Z0JBQ0hPLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFlBQVk7b0JBQ1IsSUFBSSxDQUFDakMsZUFBZTtnQkFDeEI7WUFDSjtRQUNKO0lBQ0o7QUFXSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hZHZlbnR1cmUvY29tcG9uZW50cy9QbGF5ZXIvTW92ZUNvbnRyb2xsZXIudHM/YjJjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlQ29udHJvbGxlcntcbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoXCJzY3JvbGxIYW5kbGVyXCIsIFwiYXNzZXRzL2FkdmVudHVyZS9jb21wb25lbnRzL3Njcm9sbEhhbmRsZS5wbmdcIik7XG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoXCJzY3JvbGxCYXJcIiwgXCJhc3NldHMvYWR2ZW50dXJlL2NvbXBvbmVudHMvc2Nyb2xsQmFyLnBuZ1wiKTtcbiAgICB9XG5cbiAgICBzY2VuZTogU2NlbmVcbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIC8vXG4gICAgdHJhY2tXaWR0aDogbnVtYmVyID0gNTAwXG4gICAgdHJhY2s6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIGhhbmRsZVNwcml0ZTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgLy9cbiAgICB0cmFja1Nwcml0ZTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgLy9cbiAgICBmaXhlZFBvaW50czogQXJyYXk8bnVtYmVyPlxuICAgIG1vdmVTdGF0ZTogc3RyaW5nXG4gICAgLy9cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSx4Om51bWJlcix5Om51bWJlcil7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuXG4gICAgICAgIHRoaXMuZml4ZWRQb2ludHMgPSBbXG4gICAgICAgICAgICAtIHRoaXMudHJhY2tXaWR0aCAvIDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy50cmFja1dpZHRoIC8gMlxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudHJhY2tTcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdzY3JvbGxCYXInKTtcbiAgICAgICAgdGhpcy50cmFja1Nwcml0ZS5zZXREaXNwbGF5U2l6ZSh0aGlzLnRyYWNrV2lkdGgsMzApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy50cmFja1Nwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVTcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdzY3JvbGxIYW5kbGVyJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmhhbmRsZVNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbmFibGUgZHJhZyBvbiB0aGUgdGh1bWJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGUuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgLy8gdGhpcy5zY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5oYW5kbGUpO1xuICAgICAgICB0aGlzLmhhbmRsZVNwcml0ZS5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmhhbmRsZVNwcml0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTW92ZVN0YXRlKCk7XG5cbiAgICAgICAgLy8gU2V0IHVwIGRyYWcgZXZlbnRzXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJhZ1g6IG51bWJlciwgZHJhZ1k6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gTG9jayB0aGUgdGh1bWIncyB4IHBvc2l0aW9uIGFuZCBjb25zdHJhaW4gaXQgdmVydGljYWxseSB3aXRoaW4gdGhlIHRyYWNrIGJvdW5kc1xuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gUGhhc2VyLk1hdGguQ2xhbXAoZHJhZ1gsIHRoaXMuZml4ZWRQb2ludHNbMF0sIHRoaXMuZml4ZWRQb2ludHNbMl0pO1xuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gMDtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBTbmFwIHRoZSB0aHVtYiB0byB0aGUgbmVhcmVzdCBmaXhlZCBwb2ludCB3aGVuIHRoZSBkcmFnIGVuZHNcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IGZpeGVkIHBvaW50XG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0UG9pbnQgPSB0aGlzLmZpeGVkUG9pbnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VyciAtIGdhbWVPYmplY3QueCkgPCBNYXRoLmFicyhwcmV2IC0gZ2FtZU9iamVjdC54KSA/IGN1cnIgOiBwcmV2XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBUd2VlbiB0byB0aGUgY2xvc2VzdCBmaXhlZCBwb2ludCBmb3IgYSBzbW9vdGggc25hcCBlZmZlY3RcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogZ2FtZU9iamVjdCxcbiAgICAgICAgICAgICAgICB4OiBjbG9zZXN0UG9pbnQsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBlYXNlOiAnUG93ZXIyJyxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb3ZlU3RhdGUoKXtcbiAgICAgICAgaWYoIHRoaXMuaGFuZGxlU3ByaXRlLnggPiB0aGlzLnRyYWNrV2lkdGgvNCApe1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3RhdGUgPSAncmlnaHQnO1xuICAgICAgICB9ZWxzZSBpZiggdGhpcy5oYW5kbGVTcHJpdGUueCA8IC10aGlzLnRyYWNrV2lkdGgvNCl7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGF0ZSA9ICdsZWZ0JztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGF0ZSA9ICdpZGxlJztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTW92ZUNvbnRyb2xsZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJsb2FkIiwiaW1hZ2UiLCJ1cGRhdGVNb3ZlU3RhdGUiLCJoYW5kbGVTcHJpdGUiLCJ4IiwidHJhY2tXaWR0aCIsIm1vdmVTdGF0ZSIsImNvbnN0cnVjdG9yIiwieSIsImNvbnRhaW5lciIsImFkZCIsImZpeGVkUG9pbnRzIiwidHJhY2tTcHJpdGUiLCJzcHJpdGUiLCJzZXREaXNwbGF5U2l6ZSIsInNldEludGVyYWN0aXZlIiwiaW5wdXQiLCJzZXREcmFnZ2FibGUiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0IiwiZHJhZ1giLCJkcmFnWSIsIlBoYXNlciIsIk1hdGgiLCJDbGFtcCIsImNsb3Nlc3RQb2ludCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWJzIiwidHdlZW5zIiwidGFyZ2V0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/components/Player/MoveController.ts\n"));

/***/ })

});