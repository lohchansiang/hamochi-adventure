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

/***/ "./src/game/components/CardMaker/ForgeBottomContainer.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeBottomContainer.ts ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeBottomContainer; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass ForgeBottomContainer {\n    static preload(scene) {}\n    enter() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY + 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    constructor(scene, x, y){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        const padding = 15;\n        this.outerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerRect = scene.add.rectangle(0, 0, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY - padding * 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBgDark);\n        this.container.add(this.outerRect);\n        this.container.add(this.innerRect);\n        this.container.y += 1000;\n        let box = this.scene.add.rectangle(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midX, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].midY, 50, 50, 0x000000);\n        box.setInteractive();\n        this.scene.input.setDraggable(box);\n        this.input.on(\"dragstart\", function(pointer, gameObject) {\n            this.children.bringToTop(gameObject);\n        }, this);\n        this.scene.input.on(\"drag\", (pointer, gameObject, dragX, dragY)=>{\n            gameObject.x = dragX;\n            gameObject.y = dragY;\n        });\n        this.scene.input.on(\"drop\", (pointer, gameObject, target)=>{\n            gameObject.x = target.x;\n            gameObject.y = target.y;\n            gameObject.setScale(0.2);\n        });\n    // this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: any, dropped) =>\n    //     {\n    //         if (!dropped)\n    //         {\n    //             gameObject.x = gameObject.input.dragStartX;\n    //             gameObject.y = gameObject.input.dragStartY;\n    //         }\n    //     });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUdwQixNQUFNQztJQUVqQixPQUFPQyxRQUFTQyxLQUFZLEVBQUUsQ0FFOUI7SUFnRUFDLFFBQU87UUFDSCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1lBQ2xCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztZQUN2QkMsR0FBRyxJQUFJLENBQUNDLElBQUk7WUFDWkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBQyxPQUFNO1FBQ0YsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ1YsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7WUFDdkJDLEdBQUcsSUFBSSxDQUFDQyxJQUFJLEdBQUM7WUFDYkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQXhFQUUsWUFBYVgsS0FBVyxFQUFFWSxDQUFTLEVBQUVOLENBQVMsQ0FBRTtRQUM1QyxJQUFJLENBQUNOLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNhLElBQUksR0FBR0Q7UUFDWixJQUFJLENBQUNMLElBQUksR0FBR0Q7UUFFWixJQUFJLENBQUNELFNBQVMsR0FBR0wsTUFBTUcsR0FBRyxDQUFDRSxTQUFTLENBQUNPLEdBQUVOO1FBRXZDLE1BQU1RLFVBQWlCO1FBQ3ZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHZixNQUFNRyxHQUFHLENBQUNhLFNBQVMsQ0FBQyxHQUFFLEdBQUVuQixnRUFBbUIsRUFBQ0EseURBQVksRUFBQ0EsaUVBQW9CO1FBRTlGLElBQUksQ0FBQ3VCLFNBQVMsR0FBR3BCLE1BQU1HLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLEdBQUUsR0FBRW5CLGdFQUFtQixHQUFDaUIsVUFBUSxHQUFFakIseURBQVksR0FBQ2lCLFVBQVEsR0FBRWpCLHFFQUF3QjtRQUV0SCxJQUFJLENBQUNRLFNBQVMsQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQ1ksU0FBUztRQUNqQyxJQUFJLENBQUNWLFNBQVMsQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQ2lCLFNBQVM7UUFFakMsSUFBSSxDQUFDZixTQUFTLENBQUNDLENBQUMsSUFBSTtRQUVwQixJQUFJZ0IsTUFBNkIsSUFBSSxDQUFDdEIsS0FBSyxDQUFDRyxHQUFHLENBQUNhLFNBQVMsQ0FBQ25CLHlEQUFZLEVBQUNBLHlEQUFZLEVBQUMsSUFBRyxJQUFHO1FBQzFGeUIsSUFBSUUsY0FBYztRQUNsQixJQUFJLENBQUN4QixLQUFLLENBQUN5QixLQUFLLENBQUNDLFlBQVksQ0FBQ0o7UUFFOUIsSUFBSSxDQUFDRyxLQUFLLENBQUNFLEVBQUUsQ0FBQyxhQUFhLFNBQVVDLE9BQU8sRUFBRUMsVUFBVTtZQUdwRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDRjtRQUU3QixHQUFHLElBQUk7UUFFUCxJQUFJLENBQUM3QixLQUFLLENBQUN5QixLQUFLLENBQUNFLEVBQUUsQ0FBQyxRQUFRLENBQUNDLFNBQStCQyxZQUFpQkcsT0FBY0M7WUFFdkZKLFdBQVdqQixDQUFDLEdBQUdvQjtZQUNmSCxXQUFXdkIsQ0FBQyxHQUFHMkI7UUFDbkI7UUFHQSxJQUFJLENBQUNqQyxLQUFLLENBQUN5QixLQUFLLENBQUNFLEVBQUUsQ0FBQyxRQUFRLENBQUNDLFNBQStCQyxZQUFpQks7WUFFekVMLFdBQVdqQixDQUFDLEdBQUdzQixPQUFPdEIsQ0FBQztZQUN2QmlCLFdBQVd2QixDQUFDLEdBQUc0QixPQUFPNUIsQ0FBQztZQUN2QnVCLFdBQVdNLFFBQVEsQ0FBQztRQUN4QjtJQUVBLDhGQUE4RjtJQUM5RixRQUFRO0lBRVIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWiwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELFlBQVk7SUFFWixVQUFVO0lBQ2Q7QUFxQko7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJvdHRvbUNvbnRhaW5lci50cz9hMmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSwgVHdlZW5zIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlQm90dG9tQ29udGFpbmVye1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIGlubmVyUmVjdDogR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgb3V0ZXJSZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMub3JpWCA9IHhcbiAgICAgICAgdGhpcy5vcmlZID0geVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgIFxuICAgICAgICBjb25zdCBwYWRkaW5nOm51bWJlciA9IDE1O1xuICAgICAgICB0aGlzLm91dGVyUmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLEdhbWVMaWIuc2NyZWVuV2lkdGgsR2FtZUxpYi5taWRZLEdhbWVMaWIuY29sb3JQYW5lbEJnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5uZXJSZWN0ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLDAsR2FtZUxpYi5zY3JlZW5XaWR0aC1wYWRkaW5nKjIsR2FtZUxpYi5taWRZLXBhZGRpbmcqMixHYW1lTGliLmNvbG9yUGFuZWxCZ0RhcmspO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMub3V0ZXJSZWN0KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuaW5uZXJSZWN0KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci55ICs9IDEwMDA7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm94OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGUgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoR2FtZUxpYi5taWRYLEdhbWVMaWIubWlkWSw1MCw1MCwweDAwMDAwMCk7XG4gICAgICAgIGJveC5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZShib3gpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ2RyYWdzdGFydCcsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0KVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uYnJpbmdUb1RvcChnYW1lT2JqZWN0KTtcblxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIGdhbWVPYmplY3Q6IGFueSwgZHJhZ1g6bnVtYmVyLCBkcmFnWTogbnVtYmVyKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJvcCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCB0YXJnZXQ6IGFueSkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gdGFyZ2V0Lng7XG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSB0YXJnZXQueTtcbiAgICAgICAgICAgIGdhbWVPYmplY3Quc2V0U2NhbGUoMC4yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogYW55LCBkcm9wcGVkKSA9PlxuICAgICAgICAvLyAgICAge1xuICAgIFxuICAgICAgICAvLyAgICAgICAgIGlmICghZHJvcHBlZClcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGdhbWVPYmplY3QuaW5wdXQuZHJhZ1N0YXJ0WDtcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZ2FtZU9iamVjdC5pbnB1dC5kcmFnU3RhcnRZO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gICAgIH0pO1xuICAgIH1cblxuICAgIGVudGVyKCl7XG4gICAgICAgIC8vIFByZXBhcmUgVHdlZW5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgeTogdGhpcy5vcmlZLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXQoKXtcbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVkrMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJGb3JnZUJvdHRvbUNvbnRhaW5lciIsInByZWxvYWQiLCJzY2VuZSIsImVudGVyIiwidHdlZW5zIiwiYWRkIiwidGFyZ2V0cyIsImNvbnRhaW5lciIsInkiLCJvcmlZIiwiZWFzZSIsImR1cmF0aW9uIiwiZXhpdCIsImNvbnN0cnVjdG9yIiwieCIsIm9yaVgiLCJwYWRkaW5nIiwib3V0ZXJSZWN0IiwicmVjdGFuZ2xlIiwic2NyZWVuV2lkdGgiLCJtaWRZIiwiY29sb3JQYW5lbEJnIiwiaW5uZXJSZWN0IiwiY29sb3JQYW5lbEJnRGFyayIsImJveCIsIm1pZFgiLCJzZXRJbnRlcmFjdGl2ZSIsImlucHV0Iiwic2V0RHJhZ2dhYmxlIiwib24iLCJwb2ludGVyIiwiZ2FtZU9iamVjdCIsImNoaWxkcmVuIiwiYnJpbmdUb1RvcCIsImRyYWdYIiwiZHJhZ1kiLCJ0YXJnZXQiLCJzZXRTY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeBottomContainer.ts\n"));

/***/ })

});