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

/***/ "./src/game/components/CardMaker/ForgeMaterialAudio.ts":
/*!*************************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMaterialAudio.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialAudio; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n\nclass ForgeMaterialAudio {\n    static preload(scene) {}\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        let size = 250;\n        // this.rect = scene.add.rectangle(0,0,size,size,scene.manager.colorAudio);\n        // this.container.add(this.rect);\n        this.outerBase = scene.add.circle(0, 0, 150, 0xFFFFFF);\n        this.innerBase = scene.add.circle(0, 0, 150 - 15, scene.manager.colorAudio);\n        this.container.add(this.outerBase);\n        this.container.add(this.innerBase);\n        this.sprite = scene.add.sprite(0, 0, \"iconAudio\");\n        this.sprite.setDisplaySize(150, 150);\n        this.container.add(this.sprite);\n        this.audioButton = scene.add.container(150, 0);\n        this.audioButton = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, 150, 0, \"vocabAudio\");\n        this.audioButton.onPressedCallback = ()=>{\n            scene.sound.play(vocab.textureKey);\n        };\n        this.container.add(this.audioButton);\n        // this.text = scene.add.text(0,size/2-50,vocab.name,{ \n        //                                     fontSize:'32px',\n        //                                     color:'black',\n        //                                     wordWrap: { width: size-20, useAdvancedWrap: true },\n        //                                 }).setOrigin(0.5);\n        // this.container.add(this.text);\n        this.container.setSize(size, size);\n        this.container.setInteractive({\n            draggable: true\n        });\n        // this.scene.input.enableDebug(this.container,0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.container.setData(\"type\", \"ForgeMaterialAudio\");\n        this.container.setData(\"key\", vocab.key);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsQXVkaW8udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDd0Q7QUFJekMsTUFBTUM7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBaUJBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBRWIsSUFBSSxDQUFDRyxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJTSxPQUFjO1FBQ2xCLDJFQUEyRTtRQUMzRSxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDQyxTQUFTLEdBQUdWLE1BQU1RLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUUsR0FBRSxLQUFJO1FBQzFDLElBQUksQ0FBQ0MsU0FBUyxHQUFHWixNQUFNUSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFFLEdBQUUsTUFBSSxJQUFHWCxNQUFNYSxPQUFPLENBQUNDLFVBQVU7UUFFckUsSUFBSSxDQUFDUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNFLFNBQVM7UUFDakMsSUFBSSxDQUFDSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNJLFNBQVM7UUFFakMsSUFBSSxDQUFDRyxNQUFNLEdBQUdmLE1BQU1RLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUUsR0FBRTtRQUNuQyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLEtBQUk7UUFDL0IsSUFBSSxDQUFDVCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNPLE1BQU07UUFFOUIsSUFBSSxDQUFDRSxXQUFXLEdBQUdqQixNQUFNUSxHQUFHLENBQUNELFNBQVMsQ0FBQyxLQUFJO1FBQzNDLElBQUksQ0FBQ1UsV0FBVyxHQUFHLElBQUlwQixvRUFBWUEsQ0FBQ0csT0FBTSxLQUFJLEdBQUU7UUFDaEQsSUFBSSxDQUFDaUIsV0FBVyxDQUFDQyxpQkFBaUIsR0FBRztZQUNqQ2xCLE1BQU1tQixLQUFLLENBQUNDLElBQUksQ0FBQ2hCLE1BQU1pQixVQUFVO1FBQ3JDO1FBQ0EsSUFBSSxDQUFDZCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNTLFdBQVc7UUFFbkMsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCxxREFBcUQ7UUFDckQsMkZBQTJGO1FBQzNGLHFEQUFxRDtRQUNyRCxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDVixTQUFTLENBQUNlLE9BQU8sQ0FBQ2IsTUFBS0E7UUFDNUIsSUFBSSxDQUFDRixTQUFTLENBQUNnQixjQUFjLENBQUM7WUFBQ0MsV0FBVztRQUFJO1FBRTlDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUN4QixLQUFLLENBQUN5QixLQUFLLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNuQixTQUFTO1FBRTVDLElBQUksQ0FBQ0EsU0FBUyxDQUFDb0IsT0FBTyxDQUFDLFFBQU87UUFDOUIsSUFBSSxDQUFDcEIsU0FBUyxDQUFDb0IsT0FBTyxDQUFDLE9BQU12QixNQUFNd0IsR0FBRztJQUMxQztBQUNKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VNYXRlcmlhbEF1ZGlvLnRzP2JkZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZE1ha2VyIH0gZnJvbSBcIkAvZ2FtZS9zY2VuZXMvQ2FyZE1ha2VyXCJcbmltcG9ydCBTcHJpdGVCdXR0b24gZnJvbSBcIkAvbGliL2NvbXBvbmVudHMvU3ByaXRlQnV0dG9uXCJcbmltcG9ydCB7IFZvY2FiIH0gZnJvbSBcIkAvbGliL3JlcG9zL0RlY2tSZXBvXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JnZU1hdGVyaWFsQXVkaW97XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFNjZW5lICl7XG5cbiAgICB9XG5cbiAgICBzY2VuZTogQ2FyZE1ha2VyXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgdm9jYWI6IFZvY2FiIFxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBvdXRlckJhc2U6IEdhbWVPYmplY3RzLkFyY1xuICAgIGlubmVyQmFzZTogR2FtZU9iamVjdHMuQXJjXG4gICAgLy9cbiAgICByZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBzcHJpdGU6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIHRleHQ6IEdhbWVPYmplY3RzLlRleHRcbiAgICAvL1xuICAgIGF1ZGlvQnV0dG9uOiBHYW1lT2JqZWN0cy5Db250YWluZXJcblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCB2b2NhYjpWb2NhYiApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5vcmlYID0geFxuICAgICAgICB0aGlzLm9yaVkgPSB5XG4gICAgICAgIHRoaXMudm9jYWIgPSB2b2NhYlxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcih4LHkpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemU6bnVtYmVyID0gMjUwO1xuICAgICAgICAvLyB0aGlzLnJlY3QgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsMCxzaXplLHNpemUsc2NlbmUubWFuYWdlci5jb2xvckF1ZGlvKTtcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuYWRkKHRoaXMucmVjdCk7XG5cbiAgICAgICAgdGhpcy5vdXRlckJhc2UgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCwxNTAsMHhGRkZGRkYpO1xuICAgICAgICB0aGlzLmlubmVyQmFzZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLDE1MC0xNSxzY2VuZS5tYW5hZ2VyLmNvbG9yQXVkaW8pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyQmFzZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyQmFzZSk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKDAsMCwnaWNvbkF1ZGlvJyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldERpc3BsYXlTaXplKDE1MCwxNTApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuYXVkaW9CdXR0b24gPSBzY2VuZS5hZGQuY29udGFpbmVyKDE1MCwwKTtcbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbiA9IG5ldyBTcHJpdGVCdXR0b24oc2NlbmUsMTUwLDAsJ3ZvY2FiQXVkaW8nKTtcbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbi5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBzY2VuZS5zb3VuZC5wbGF5KHZvY2FiLnRleHR1cmVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmF1ZGlvQnV0dG9uKTtcblxuICAgICAgICAvLyB0aGlzLnRleHQgPSBzY2VuZS5hZGQudGV4dCgwLHNpemUvMi01MCx2b2NhYi5uYW1lLHsgXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiczMnB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J2JsYWNrJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZFdyYXA6IHsgd2lkdGg6IHNpemUtMjAsIHVzZUFkdmFuY2VkV3JhcDogdHJ1ZSB9LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnNldE9yaWdpbigwLjUpO1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldFNpemUoc2l6ZSxzaXplKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0SW50ZXJhY3RpdmUoe2RyYWdnYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIC8vIHRoaXMuc2NlbmUuaW5wdXQuZW5hYmxlRGVidWcodGhpcy5jb250YWluZXIsMHgwMGZmMDApO1xuICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0RGF0YSgndHlwZScsJ0ZvcmdlTWF0ZXJpYWxBdWRpbycpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXREYXRhKCdrZXknLHZvY2FiLmtleSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJTcHJpdGVCdXR0b24iLCJGb3JnZU1hdGVyaWFsQXVkaW8iLCJwcmVsb2FkIiwic2NlbmUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwidm9jYWIiLCJvcmlYIiwib3JpWSIsImNvbnRhaW5lciIsImFkZCIsInNpemUiLCJvdXRlckJhc2UiLCJjaXJjbGUiLCJpbm5lckJhc2UiLCJtYW5hZ2VyIiwiY29sb3JBdWRpbyIsInNwcml0ZSIsInNldERpc3BsYXlTaXplIiwiYXVkaW9CdXR0b24iLCJvblByZXNzZWRDYWxsYmFjayIsInNvdW5kIiwicGxheSIsInRleHR1cmVLZXkiLCJzZXRTaXplIiwic2V0SW50ZXJhY3RpdmUiLCJkcmFnZ2FibGUiLCJpbnB1dCIsInNldERyYWdnYWJsZSIsInNldERhdGEiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialAudio.ts\n"));

/***/ })

});