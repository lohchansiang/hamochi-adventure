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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialAudio; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n\nclass ForgeMaterialAudio {\n    static preload(scene) {}\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        let size = 250;\n        // this.rect = scene.add.rectangle(0,0,size,size,scene.manager.colorAudio);\n        this.container.add(this.rect);\n        this.outerBase = scene.add.circle(0, 0, 125, 0x000000);\n        // this.outerBase.setTint(0xFFFFFF);\n        this.innerBase = scene.add.circle(0, 0, 125, scene.manager.colorAudio);\n        // this.innerBase.setTint(scene.manager.colorText);\n        this.container.add(this.outerBase);\n        this.container.add(this.innerBase);\n        this.audioButton = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, 0, 0, \"vocabAudio\");\n        this.audioButton.onPressedCallback = ()=>{\n            scene.sound.play(vocab.textureKey);\n        };\n        this.container.add(this.audioButton);\n        // this.text = scene.add.text(0,size/2-50,vocab.name,{ \n        //                                     fontSize:'32px',\n        //                                     color:'black',\n        //                                     wordWrap: { width: size-20, useAdvancedWrap: true },\n        //                                 }).setOrigin(0.5);\n        // this.container.add(this.text);\n        this.container.setSize(size, size);\n        this.container.setInteractive({\n            draggable: true\n        });\n        // this.scene.input.enableDebug(this.container,0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.container.setData(\"type\", \"ForgeMaterialAudio\");\n        this.container.setData(\"key\", vocab.key);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsQXVkaW8udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDd0Q7QUFJekMsTUFBTUM7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBaUJBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBRWIsSUFBSSxDQUFDRyxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJTSxPQUFjO1FBQ2xCLDJFQUEyRTtRQUMzRSxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0UsSUFBSTtRQUU1QixJQUFJLENBQUNDLFNBQVMsR0FBR1gsTUFBTVEsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRSxHQUFFLEtBQUk7UUFDMUMsb0NBQW9DO1FBRXBDLElBQUksQ0FBQ0MsU0FBUyxHQUFHYixNQUFNUSxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFFLEdBQUUsS0FBSVosTUFBTWMsT0FBTyxDQUFDQyxVQUFVO1FBQ2xFLG1EQUFtRDtRQUVuRCxJQUFJLENBQUNSLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0csU0FBUztRQUNqQyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0ssU0FBUztRQUVqQyxJQUFJLENBQUNHLFdBQVcsR0FBRyxJQUFJbkIsb0VBQVlBLENBQUNHLE9BQU0sR0FBRSxHQUFFO1FBQzlDLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQ0MsaUJBQWlCLEdBQUc7WUFDakNqQixNQUFNa0IsS0FBSyxDQUFDQyxJQUFJLENBQUNmLE1BQU1nQixVQUFVO1FBQ3JDO1FBQ0EsSUFBSSxDQUFDYixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNRLFdBQVc7UUFFbkMsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCxxREFBcUQ7UUFDckQsMkZBQTJGO1FBQzNGLHFEQUFxRDtRQUNyRCxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDVCxTQUFTLENBQUNjLE9BQU8sQ0FBQ1osTUFBS0E7UUFDNUIsSUFBSSxDQUFDRixTQUFTLENBQUNlLGNBQWMsQ0FBQztZQUFDQyxXQUFXO1FBQUk7UUFFOUMseURBQXlEO1FBQ3pELElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2xCLFNBQVM7UUFFNUMsSUFBSSxDQUFDQSxTQUFTLENBQUNtQixPQUFPLENBQUMsUUFBTztRQUM5QixJQUFJLENBQUNuQixTQUFTLENBQUNtQixPQUFPLENBQUMsT0FBTXRCLE1BQU11QixHQUFHO0lBQzFDO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsQXVkaW8udHM/YmRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9TcHJpdGVCdXR0b25cIlxuaW1wb3J0IHsgVm9jYWIgfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWF0ZXJpYWxBdWRpb3tcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICB2b2NhYjogVm9jYWIgXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG91dGVyQmFzZTogR2FtZU9iamVjdHMuQXJjXG4gICAgaW5uZXJCYXNlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICAvL1xuICAgIHJlY3Q6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHNwcml0ZTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgdGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG4gICAgYXVkaW9CdXR0b246IFNwcml0ZUJ1dHRvblxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHZvY2FiOlZvY2FiICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcbiAgICAgICAgdGhpcy52b2NhYiA9IHZvY2FiXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2l6ZTpudW1iZXIgPSAyNTA7XG4gICAgICAgIC8vIHRoaXMucmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLHNpemUsc2l6ZSxzY2VuZS5tYW5hZ2VyLmNvbG9yQXVkaW8pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5yZWN0KTtcblxuICAgICAgICB0aGlzLm91dGVyQmFzZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLDEyNSwweDAwMDAwMCk7XG4gICAgICAgIC8vIHRoaXMub3V0ZXJCYXNlLnNldFRpbnQoMHhGRkZGRkYpO1xuXG4gICAgICAgIHRoaXMuaW5uZXJCYXNlID0gc2NlbmUuYWRkLmNpcmNsZSgwLDAsMTI1LHNjZW5lLm1hbmFnZXIuY29sb3JBdWRpbyk7XG4gICAgICAgIC8vIHRoaXMuaW5uZXJCYXNlLnNldFRpbnQoc2NlbmUubWFuYWdlci5jb2xvclRleHQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLm91dGVyQmFzZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyQmFzZSk7XG5cbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbiA9IG5ldyBTcHJpdGVCdXR0b24oc2NlbmUsMCwwLCd2b2NhYkF1ZGlvJyk7XG4gICAgICAgIHRoaXMuYXVkaW9CdXR0b24ub25QcmVzc2VkQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgc2NlbmUuc291bmQucGxheSh2b2NhYi50ZXh0dXJlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5hdWRpb0J1dHRvbik7XG5cbiAgICAgICAgLy8gdGhpcy50ZXh0ID0gc2NlbmUuYWRkLnRleHQoMCxzaXplLzItNTAsdm9jYWIubmFtZSx7IFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMzJweCcsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidibGFjaycsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRXcmFwOiB7IHdpZHRoOiBzaXplLTIwLCB1c2VBZHZhbmNlZFdyYXA6IHRydWUgfSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuYWRkKHRoaXMudGV4dCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRTaXplKHNpemUsc2l6ZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEludGVyYWN0aXZlKHtkcmFnZ2FibGU6IHRydWV9KTtcblxuICAgICAgICAvLyB0aGlzLnNjZW5lLmlucHV0LmVuYWJsZURlYnVnKHRoaXMuY29udGFpbmVyLDB4MDBmZjAwKTtcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldERhdGEoJ3R5cGUnLCdGb3JnZU1hdGVyaWFsQXVkaW8nKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0RGF0YSgna2V5Jyx2b2NhYi5rZXkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiU3ByaXRlQnV0dG9uIiwiRm9yZ2VNYXRlcmlhbEF1ZGlvIiwicHJlbG9hZCIsInNjZW5lIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInZvY2FiIiwib3JpWCIsIm9yaVkiLCJjb250YWluZXIiLCJhZGQiLCJzaXplIiwicmVjdCIsIm91dGVyQmFzZSIsImNpcmNsZSIsImlubmVyQmFzZSIsIm1hbmFnZXIiLCJjb2xvckF1ZGlvIiwiYXVkaW9CdXR0b24iLCJvblByZXNzZWRDYWxsYmFjayIsInNvdW5kIiwicGxheSIsInRleHR1cmVLZXkiLCJzZXRTaXplIiwic2V0SW50ZXJhY3RpdmUiLCJkcmFnZ2FibGUiLCJpbnB1dCIsInNldERyYWdnYWJsZSIsInNldERhdGEiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialAudio.ts\n"));

/***/ })

});