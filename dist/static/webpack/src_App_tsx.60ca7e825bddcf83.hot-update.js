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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMaterialAudio; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n\nclass ForgeMaterialAudio {\n    static preload(scene) {}\n    constructor(scene, x, y, vocab){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        let size = 250;\n        this.rect = scene.add.rectangle(0, 0, size, size, scene.manager.colorAudio);\n        this.container.add(this.rect);\n        this.outerBase = scene.add.circle(0, 0, 125);\n        // this.outerBase.setTint(0xFFFFFF);\n        this.innerBase = scene.add.nineslice(0, 0, \"panelWhite\", 0, 550 - 30, 150 - 30, 50, 50, 50, 50);\n        this.innerBase.setTint(scene.manager.colorText);\n        // this.sprite = scene.add.sprite(0,-20,'vocabAudio');\n        // this.container.add(this.sprite);\n        this.audioButton = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene, 0, 0, \"vocabAudio\");\n        this.audioButton.onPressedCallback = ()=>{\n            scene.sound.play(vocab.textureKey);\n        };\n        this.container.add(this.audioButton);\n        // this.text = scene.add.text(0,size/2-50,vocab.name,{ \n        //                                     fontSize:'32px',\n        //                                     color:'black',\n        //                                     wordWrap: { width: size-20, useAdvancedWrap: true },\n        //                                 }).setOrigin(0.5);\n        // this.container.add(this.text);\n        this.container.setSize(size, size);\n        this.container.setInteractive({\n            draggable: true\n        });\n        // this.scene.input.enableDebug(this.container,0x00ff00);\n        this.scene.input.setDraggable(this.container);\n        this.container.setData(\"type\", \"ForgeMaterialAudio\");\n        this.container.setData(\"key\", vocab.key);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsQXVkaW8udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDd0Q7QUFJekMsTUFBTUM7SUFFakIsT0FBT0MsUUFBU0MsS0FBWSxFQUFFLENBRTlCO0lBaUJBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxLQUFXLENBQUU7UUFDN0QsSUFBSSxDQUFDSixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDSyxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDSSxJQUFJLEdBQUdIO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBRWIsSUFBSSxDQUFDRyxTQUFTLEdBQUdQLE1BQU1RLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDTCxHQUFFQztRQUV2QyxJQUFJTSxPQUFjO1FBQ2xCLElBQUksQ0FBQ0MsSUFBSSxHQUFHVixNQUFNUSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxHQUFFLEdBQUVGLE1BQUtBLE1BQUtULE1BQU1ZLE9BQU8sQ0FBQ0MsVUFBVTtRQUN0RSxJQUFJLENBQUNOLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0UsSUFBSTtRQUU1QixJQUFJLENBQUNJLFNBQVMsR0FBR2QsTUFBTVEsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRSxHQUFFO1FBQ3RDLG9DQUFvQztRQUVwQyxJQUFJLENBQUNDLFNBQVMsR0FBR2hCLE1BQU1RLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDLEdBQUUsR0FBRSxjQUFhLEdBQUUsTUFBSSxJQUFHLE1BQUksSUFBRyxJQUFHLElBQUcsSUFBRztRQUMvRSxJQUFJLENBQUNELFNBQVMsQ0FBQ0UsT0FBTyxDQUFDbEIsTUFBTVksT0FBTyxDQUFDTyxTQUFTO1FBRTlDLHNEQUFzRDtRQUN0RCxtQ0FBbUM7UUFFbkMsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSXZCLG9FQUFZQSxDQUFDRyxPQUFNLEdBQUUsR0FBRTtRQUM5QyxJQUFJLENBQUNvQixXQUFXLENBQUNDLGlCQUFpQixHQUFHO1lBQ2pDckIsTUFBTXNCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDbkIsTUFBTW9CLFVBQVU7UUFDckM7UUFDQSxJQUFJLENBQUNqQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNZLFdBQVc7UUFFbkMsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCxxREFBcUQ7UUFDckQsMkZBQTJGO1FBQzNGLHFEQUFxRDtRQUNyRCxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDYixTQUFTLENBQUNrQixPQUFPLENBQUNoQixNQUFLQTtRQUM1QixJQUFJLENBQUNGLFNBQVMsQ0FBQ21CLGNBQWMsQ0FBQztZQUFDQyxXQUFXO1FBQUk7UUFFOUMseURBQXlEO1FBQ3pELElBQUksQ0FBQzNCLEtBQUssQ0FBQzRCLEtBQUssQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ3RCLFNBQVM7UUFFNUMsSUFBSSxDQUFDQSxTQUFTLENBQUN1QixPQUFPLENBQUMsUUFBTztRQUM5QixJQUFJLENBQUN2QixTQUFTLENBQUN1QixPQUFPLENBQUMsT0FBTTFCLE1BQU0yQixHQUFHO0lBQzFDO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1hdGVyaWFsQXVkaW8udHM/YmRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9TcHJpdGVCdXR0b25cIlxuaW1wb3J0IHsgVm9jYWIgfSBmcm9tIFwiQC9saWIvcmVwb3MvRGVja1JlcG9cIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWF0ZXJpYWxBdWRpb3tcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICB2b2NhYjogVm9jYWIgXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIG91dGVyQmFzZTogR2FtZU9iamVjdHMuQXJjXG4gICAgaW5uZXJCYXNlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICAvL1xuICAgIHJlY3Q6IEdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHNwcml0ZTogR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgdGV4dDogR2FtZU9iamVjdHMuVGV4dFxuICAgIC8vXG4gICAgYXVkaW9CdXR0b246IFNwcml0ZUJ1dHRvblxuXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOkNhcmRNYWtlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHZvY2FiOlZvY2FiICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcbiAgICAgICAgdGhpcy52b2NhYiA9IHZvY2FiXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2l6ZTpudW1iZXIgPSAyNTA7XG4gICAgICAgIHRoaXMucmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLHNpemUsc2l6ZSxzY2VuZS5tYW5hZ2VyLmNvbG9yQXVkaW8pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5yZWN0KTtcblxuICAgICAgICB0aGlzLm91dGVyQmFzZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLDEyNSk7XG4gICAgICAgIC8vIHRoaXMub3V0ZXJCYXNlLnNldFRpbnQoMHhGRkZGRkYpO1xuXG4gICAgICAgIHRoaXMuaW5uZXJCYXNlID0gc2NlbmUuYWRkLm5pbmVzbGljZSgwLDAsJ3BhbmVsV2hpdGUnLDAsNTUwLTMwLDE1MC0zMCw1MCw1MCw1MCw1MCk7XG4gICAgICAgIHRoaXMuaW5uZXJCYXNlLnNldFRpbnQoc2NlbmUubWFuYWdlci5jb2xvclRleHQpO1xuXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSgwLC0yMCwndm9jYWJBdWRpbycpO1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuYXVkaW9CdXR0b24gPSBuZXcgU3ByaXRlQnV0dG9uKHNjZW5lLDAsMCwndm9jYWJBdWRpbycpO1xuICAgICAgICB0aGlzLmF1ZGlvQnV0dG9uLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIHNjZW5lLnNvdW5kLnBsYXkodm9jYWIudGV4dHVyZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuYXVkaW9CdXR0b24pO1xuXG4gICAgICAgIC8vIHRoaXMudGV4dCA9IHNjZW5lLmFkZC50ZXh0KDAsc2l6ZS8yLTUwLHZvY2FiLm5hbWUseyBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6JzMycHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonYmxhY2snLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkV3JhcDogeyB3aWR0aDogc2l6ZS0yMCwgdXNlQWR2YW5jZWRXcmFwOiB0cnVlIH0sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSk7XG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLnRleHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0U2l6ZShzaXplLHNpemUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSh7ZHJhZ2dhYmxlOiB0cnVlfSk7XG5cbiAgICAgICAgLy8gdGhpcy5zY2VuZS5pbnB1dC5lbmFibGVEZWJ1Zyh0aGlzLmNvbnRhaW5lciwweDAwZmYwMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXREYXRhKCd0eXBlJywnRm9yZ2VNYXRlcmlhbEF1ZGlvJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldERhdGEoJ2tleScsdm9jYWIua2V5KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNwcml0ZUJ1dHRvbiIsIkZvcmdlTWF0ZXJpYWxBdWRpbyIsInByZWxvYWQiLCJzY2VuZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ2b2NhYiIsIm9yaVgiLCJvcmlZIiwiY29udGFpbmVyIiwiYWRkIiwic2l6ZSIsInJlY3QiLCJyZWN0YW5nbGUiLCJtYW5hZ2VyIiwiY29sb3JBdWRpbyIsIm91dGVyQmFzZSIsImNpcmNsZSIsImlubmVyQmFzZSIsIm5pbmVzbGljZSIsInNldFRpbnQiLCJjb2xvclRleHQiLCJhdWRpb0J1dHRvbiIsIm9uUHJlc3NlZENhbGxiYWNrIiwic291bmQiLCJwbGF5IiwidGV4dHVyZUtleSIsInNldFNpemUiLCJzZXRJbnRlcmFjdGl2ZSIsImRyYWdnYWJsZSIsImlucHV0Iiwic2V0RHJhZ2dhYmxlIiwic2V0RGF0YSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMaterialAudio.ts\n"));

/***/ })

});