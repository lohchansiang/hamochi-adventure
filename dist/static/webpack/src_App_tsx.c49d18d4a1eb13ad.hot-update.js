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

/***/ "./src/game/components/CardMaker/ForgeMaterialImage.ts":
/*!*************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMaterialImage.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialImage; }\n/* harmony export */ });\nclass ForgeMaterialImage {\n    static preload(scene) {}\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        this.rect = scene.add.rectangle(0, 0, 200, 200, 0xffffff);\n        this.image = scene.add.sprite(0, 0, vocab.textureKey);\n        this.image.setDisplaySize(200, 200);\n        this.container.add(this.rect);\n        this.container.add(this.image);\n        this.container.setSize(200, 200);\n        this.container.setInteractive({\n            draggable: true\n        });\n        this.scene.input.enableDebug(this.container, 0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.scene.input.on(\"dragstart\", function(pointer, gameObject) {\n            gameObject.setDepth(999);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            if (target.name == \"MainCircle\") {\n                gameObject.disableInteractive();\n                gameObject.destroy();\n            }\n        });\n        this.scene.input.on(\"dragend\", (pointer, gameObject, dropped)=>{\n            if (!dropped) {\n                gameObject.x = gameObject.input.dragStartX;\n                gameObject.y = gameObject.input.dragStartY;\n            }\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsSW1hZ2UudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUtlLE1BQU1BO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQVVBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBRVosSUFBSSxDQUFDSSxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJLENBQUNNLElBQUksR0FBR1QsTUFBTVEsR0FBRyxDQUFDRSxTQUFTLENBQUMsR0FBRSxHQUFFLEtBQUksS0FBSTtRQUM1QyxJQUFJLENBQUNDLEtBQUssR0FBR1gsTUFBTVEsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRSxHQUFFUixNQUFNUyxVQUFVO1FBQ2xELElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxjQUFjLENBQUMsS0FBSTtRQUU5QixJQUFJLENBQUNQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSTtRQUM1QixJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0csS0FBSztRQUU3QixJQUFJLENBQUNKLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDLEtBQUk7UUFDM0IsSUFBSSxDQUFDUixTQUFTLENBQUNTLGNBQWMsQ0FBQztZQUFDQyxXQUFXO1FBQUk7UUFFOUMsSUFBSSxDQUFDakIsS0FBSyxDQUFDa0IsS0FBSyxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDWixTQUFTLEVBQUM7UUFFNUMsSUFBSSxDQUFDUCxLQUFLLENBQUNrQixLQUFLLENBQUNFLFlBQVksQ0FBQyxJQUFJLENBQUNiLFNBQVM7UUFFNUMsSUFBSSxDQUFDUCxLQUFLLENBQUNrQixLQUFLLENBQUNHLEVBQUUsQ0FBQyxhQUFhLFNBQVVDLE9BQTZCLEVBQUVDLFVBQWU7WUFFckZBLFdBQVdDLFFBQVEsQ0FBQztRQUN4QixHQUFHLElBQUk7UUFFUCxJQUFJLENBQUN4QixLQUFLLENBQUNrQixLQUFLLENBQUNHLEVBQUUsQ0FBQyxRQUFRLENBQUNDLFNBQStCQyxZQUFpQkUsT0FBY0M7WUFFdkZILFdBQVdyQixDQUFDLEdBQUd1QjtZQUNmRixXQUFXcEIsQ0FBQyxHQUFHdUI7UUFDbkI7UUFHQSxJQUFJLENBQUMxQixLQUFLLENBQUNrQixLQUFLLENBQUNHLEVBQUUsQ0FBQyxRQUFRLENBQUNDLFNBQStCQyxZQUFpQkk7WUFFekUsSUFBSUEsT0FBT0MsSUFBSSxJQUFJLGNBQWM7Z0JBQzdCTCxXQUFXTSxrQkFBa0I7Z0JBQzdCTixXQUFXTyxPQUFPO1lBQ3RCO1FBQ0o7UUFFQSxJQUFJLENBQUM5QixLQUFLLENBQUNrQixLQUFLLENBQUNHLEVBQUUsQ0FBQyxXQUFXLENBQUNDLFNBQStCQyxZQUFpQlE7WUFHNUUsSUFBSSxDQUFDQSxTQUNMO2dCQUNJUixXQUFXckIsQ0FBQyxHQUFHcUIsV0FBV0wsS0FBSyxDQUFDYyxVQUFVO2dCQUMxQ1QsV0FBV3BCLENBQUMsR0FBR29CLFdBQVdMLEtBQUssQ0FBQ2UsVUFBVTtZQUM5QztRQUVKO0lBQ0o7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlTWF0ZXJpYWxJbWFnZS50cz85ODJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VNYXRlcmlhbEltYWdle1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IENhcmRNYWtlclxuICAgIG9yaVg6IG51bWJlclxuICAgIG9yaVk6IG51bWJlclxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICByZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBpbWFnZTogR2FtZU9iamVjdHMuU3ByaXRlXG5cbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6Q2FyZE1ha2VyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdm9jYWI6Vm9jYWIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWN0ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsMjAwLDIwMCwweGZmZmZmZik7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBzY2VuZS5hZGQuc3ByaXRlKDAsMCx2b2NhYi50ZXh0dXJlS2V5KTtcbiAgICAgICAgdGhpcy5pbWFnZS5zZXREaXNwbGF5U2l6ZSgyMDAsMjAwKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5yZWN0KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaW1hZ2UpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0U2l6ZSgyMDAsMjAwKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0SW50ZXJhY3RpdmUoe2RyYWdnYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuZW5hYmxlRGVidWcodGhpcy5jb250YWluZXIsMHgwMGZmMDApO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbiAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZU9iamVjdC5zZXREZXB0aCg5OTkpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcmFnJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnksIGRyYWdYOm51bWJlciwgZHJhZ1k6IG51bWJlcikgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLnNjZW5lLmlucHV0Lm9uKCdkcm9wJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnksIHRhcmdldDogYW55KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBpZiggdGFyZ2V0Lm5hbWUgPT0gJ01haW5DaXJjbGUnICl7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdC5kaXNhYmxlSW50ZXJhY3RpdmUoKTtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcm9wcGVkOmJvb2xlYW4pID0+XG4gICAgICAgIHtcblxuICAgICAgICAgICAgaWYgKCFkcm9wcGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGdhbWVPYmplY3QuaW5wdXQuZHJhZ1N0YXJ0WDtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBnYW1lT2JqZWN0LmlucHV0LmRyYWdTdGFydFk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJGb3JnZU1hdGVyaWFsSW1hZ2UiLCJwcmVsb2FkIiwic2NlbmUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwidm9jYWIiLCJvcmlYIiwib3JpWSIsImNvbnRhaW5lciIsImFkZCIsInJlY3QiLCJyZWN0YW5nbGUiLCJpbWFnZSIsInNwcml0ZSIsInRleHR1cmVLZXkiLCJzZXREaXNwbGF5U2l6ZSIsInNldFNpemUiLCJzZXRJbnRlcmFjdGl2ZSIsImRyYWdnYWJsZSIsImlucHV0IiwiZW5hYmxlRGVidWciLCJzZXREcmFnZ2FibGUiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0Iiwic2V0RGVwdGgiLCJkcmFnWCIsImRyYWdZIiwidGFyZ2V0IiwibmFtZSIsImRpc2FibGVJbnRlcmFjdGl2ZSIsImRlc3Ryb3kiLCJkcm9wcGVkIiwiZHJhZ1N0YXJ0WCIsImRyYWdTdGFydFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialImage.ts\n"));

/***/ })

});