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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialImage; }\n/* harmony export */ });\nclass ForgeMaterialImage {\n    static preload(scene) {}\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        this.rect = scene.add.rectangle(0, 0, 100, 100, 0x000000);\n        this.container.add(this.rect);\n        this.container.setInteractive({\n            draggable: true,\n            // SETUP hitarea\n            hitArea: this.rect,\n            //Check hitarea\n            hitAreaCallback: function(hitArea, x, y) {\n                return Phaser.Geom.Rectangle.Contains(hitArea, x, y);\n            }\n        });\n        this.scene.input.setDraggable(this.container);\n        this.scene.input.on(\"dragstart\", function(pointer, gameObject) {\n            gameObject.setDepth(999);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            if (target.name == \"MainCircle\") {\n                alert(123);\n            }\n        });\n        this.scene.input.on(\"dragend\", (pointer, gameObject, dropped)=>{\n            if (!dropped) {\n                gameObject.x = gameObject.input.dragStartX;\n                gameObject.y = gameObject.input.dragStartY;\n            }\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsSW1hZ2UudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUtlLE1BQU1BO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQVVBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBRVosSUFBSSxDQUFDSSxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJLENBQUNNLElBQUksR0FBR1QsTUFBTVEsR0FBRyxDQUFDRSxTQUFTLENBQUMsR0FBRSxHQUFFLEtBQUksS0FBSTtRQUU1QyxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSTtRQUU1QixJQUFJLENBQUNGLFNBQVMsQ0FBQ0ksY0FBYyxDQUFFO1lBQzNCQyxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCQyxTQUFTLElBQUksQ0FBQ0osSUFBSTtZQUNsQixlQUFlO1lBQ2ZLLGlCQUFpQixTQUFTRCxPQUE4QixFQUFFWCxDQUFTLEVBQUVDLENBQVM7Z0JBQzFFLE9BQU9ZLE9BQU9DLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUNMLFNBQVNYLEdBQUdDO1lBQ3REO1FBQ0o7UUFDQSxJQUFJLENBQUNILEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2IsU0FBUztRQUU1QyxJQUFJLENBQUNQLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLGFBQWEsU0FBVUMsT0FBNkIsRUFBRUMsVUFBZTtZQUVyRkEsV0FBV0MsUUFBUSxDQUFDO1FBQ3hCLEdBQUcsSUFBSTtRQUVQLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQ0MsU0FBK0JDLFlBQWlCRSxPQUFjQztZQUV2RkgsV0FBV3JCLENBQUMsR0FBR3VCO1lBQ2ZGLFdBQVdwQixDQUFDLEdBQUd1QjtRQUNuQjtRQUdBLElBQUksQ0FBQzFCLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQ0MsU0FBK0JDLFlBQWlCSTtZQUV6RSxJQUFJQSxPQUFPQyxJQUFJLElBQUksY0FBYztnQkFDN0JDLE1BQU07WUFDVjtRQUNKO1FBRUEsSUFBSSxDQUFDN0IsS0FBSyxDQUFDbUIsS0FBSyxDQUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDQyxTQUErQkMsWUFBaUJPO1lBRzVFLElBQUksQ0FBQ0EsU0FDTDtnQkFDSVAsV0FBV3JCLENBQUMsR0FBR3FCLFdBQVdKLEtBQUssQ0FBQ1ksVUFBVTtnQkFDMUNSLFdBQVdwQixDQUFDLEdBQUdvQixXQUFXSixLQUFLLENBQUNhLFVBQVU7WUFDOUM7UUFFSjtJQUNKO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsSW1hZ2UudHM/OTgyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgVm9jYWIgfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWF0ZXJpYWxJbWFnZXtcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgaW1hZ2U6IEdhbWVPYmplY3RzLlNwcml0ZVxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHZvY2FiOlZvY2FiICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLDEwMCwxMDAsMHgwMDAwMDApO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnJlY3QpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEludGVyYWN0aXZlKCB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAvLyBTRVRVUCBoaXRhcmVhXG4gICAgICAgICAgICBoaXRBcmVhOiB0aGlzLnJlY3QsXG4gICAgICAgICAgICAvL0NoZWNrIGhpdGFyZWFcbiAgICAgICAgICAgIGhpdEFyZWFDYWxsYmFjazogZnVuY3Rpb24oaGl0QXJlYTogUGhhc2VyLkdlb20uUmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBoYXNlci5HZW9tLlJlY3RhbmdsZS5Db250YWlucyhoaXRBcmVhLCB4LCB5KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ3N0YXJ0JywgZnVuY3Rpb24gKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBnYW1lT2JqZWN0OiBhbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3Quc2V0RGVwdGgoOTk5KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZycsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcmFnWDpudW1iZXIsIGRyYWdZOiBudW1iZXIpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJvcCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCB0YXJnZXQ6IGFueSkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIHRhcmdldC5uYW1lID09ICdNYWluQ2lyY2xlJyApe1xuICAgICAgICAgICAgICAgIGFsZXJ0KDEyMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWdlbmQnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJvcHBlZDpib29sZWFuKSA9PlxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmICghZHJvcHBlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBnYW1lT2JqZWN0LmlucHV0LmRyYWdTdGFydFg7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZ2FtZU9iamVjdC5pbnB1dC5kcmFnU3RhcnRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRm9yZ2VNYXRlcmlhbEltYWdlIiwicHJlbG9hZCIsInNjZW5lIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInZvY2FiIiwib3JpWCIsIm9yaVkiLCJjb250YWluZXIiLCJhZGQiLCJyZWN0IiwicmVjdGFuZ2xlIiwic2V0SW50ZXJhY3RpdmUiLCJkcmFnZ2FibGUiLCJoaXRBcmVhIiwiaGl0QXJlYUNhbGxiYWNrIiwiUGhhc2VyIiwiR2VvbSIsIlJlY3RhbmdsZSIsIkNvbnRhaW5zIiwiaW5wdXQiLCJzZXREcmFnZ2FibGUiLCJvbiIsInBvaW50ZXIiLCJnYW1lT2JqZWN0Iiwic2V0RGVwdGgiLCJkcmFnWCIsImRyYWdZIiwidGFyZ2V0IiwibmFtZSIsImFsZXJ0IiwiZHJvcHBlZCIsImRyYWdTdGFydFgiLCJkcmFnU3RhcnRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialImage.ts\n"));

/***/ })

});