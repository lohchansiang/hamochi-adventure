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

/***/ "./src/game/scenes/Preloader.ts":
/*!**************************************!*\
  !*** ./src/game/scenes/Preloader.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Preloader: function() { return /* binding */ Preloader; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/RectButton */ \"./src/lib/components/RectButton.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AdventureCard */ \"./src/game/components/AdventureCard.ts\");\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PlayerAttackBar */ \"./src/game/components/PlayerAttackBar.ts\");\n\n\n\n\n\n\nclass Preloader extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    init() {\n    //  We loaded this image in our Boot Scene, so we can display it here\n    // this.add.image(512, 384, 'background');\n    //  A simple progress bar. This is the outline of the bar.\n    // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);\n    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.\n    // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);\n    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar\n    // this.load.on('progress', (progress: number) => {\n    //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)\n    //     bar.width = 4 + (460 * progress);\n    // });\n    }\n    preload() {\n        // Load Lib Component\n        _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preload(this);\n        _components_AdventureCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].preload(this);\n        _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"].preload(this);\n        _components_PlayerAttackBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"].preload(this);\n        // Load Game Component\n        _components_HealthBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        //  Load the assets for the game - Replace with your own assets\n        this.load.setPath(\"assets\");\n        const mainMenuFolder = \"/adventure/mainMenu\";\n        this.load.image(\"mainMenuBg\", mainMenuFolder + \"/bg.png\");\n        this.load.image(\"next\", \"/adventure/game/next.png\");\n        this.load.image(\"player\", \"/adventure/game/player.png\");\n        this.load.image(\"blue\", \"/adventure/game/gem/blue.png\");\n        this.load.image(\"green\", \"/adventure/game/gem/green.png\");\n        this.load.image(\"orange\", \"/adventure/game/gem/orange.png\");\n        this.load.image(\"red\", \"/adventure/game/gem/red.png\");\n    }\n    create() {\n        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.\n        //  For example, you can define global animations here, so we can use them in other scenes.\n        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.\n        // this.scene.start('MainMenu');\n        this.scene.start(\"Game\");\n    }\n    constructor(){\n        super(\"Preloader\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zY2VuZXMvUHJlbG9hZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3RCO0FBQ3lCO0FBQ0Q7QUFDUDtBQUNZO0FBRXJELE1BQU1NLGtCQUFrQkwseUNBQUtBO0lBT2hDTSxPQUNBO0lBQ0kscUVBQXFFO0lBQ3JFLDBDQUEwQztJQUcxQywwREFBMEQ7SUFDMUQscUVBQXFFO0lBRXJFLHVHQUF1RztJQUN2RyxpRUFBaUU7SUFFakUsa0ZBQWtGO0lBQ2xGLG1EQUFtRDtJQUVuRCwyRUFBMkU7SUFDM0Usd0NBQXdDO0lBRXhDLE1BQU07SUFDVjtJQUVBQyxVQUNBO1FBQ0kscUJBQXFCO1FBQ3JCUiwwRUFBa0IsQ0FBQyxJQUFJO1FBQ3ZCRSx5RUFBcUIsQ0FBQyxJQUFJO1FBQzFCQywyRUFBbUIsQ0FBQyxJQUFJO1FBQ3hCRSwyRUFBdUIsQ0FBQyxJQUFJO1FBRTVCLHNCQUFzQjtRQUN0QkQscUVBQWlCLENBQUMsSUFBSTtRQUV0QiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDSyxJQUFJLENBQUNDLE9BQU8sQ0FBQztRQUVsQixNQUFNQyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDRixJQUFJLENBQUNHLEtBQUssQ0FBQyxjQUFjRCxpQkFBZTtRQUU3QyxJQUFJLENBQUNGLElBQUksQ0FBQ0csS0FBSyxDQUFDLFFBQU87UUFDdkIsSUFBSSxDQUFDSCxJQUFJLENBQUNHLEtBQUssQ0FBQyxVQUFTO1FBRXpCLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsUUFBTztRQUN2QixJQUFJLENBQUNILElBQUksQ0FBQ0csS0FBSyxDQUFDLFNBQVE7UUFDeEIsSUFBSSxDQUFDSCxJQUFJLENBQUNHLEtBQUssQ0FBQyxVQUFTO1FBQ3pCLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsT0FBTTtJQUUxQjtJQUVBQyxTQUNBO1FBQ0kscUhBQXFIO1FBQ3JILDJGQUEyRjtRQUUzRixpR0FBaUc7UUFDakcsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUM7SUFDckI7SUE3REFDLGFBQ0E7UUFDSSxLQUFLLENBQUM7SUFDVjtBQTJESiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9zY2VuZXMvUHJlbG9hZGVyLnRzP2ExY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3RCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBBZHZlbnR1cmVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQWR2ZW50dXJlQ2FyZCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgSGVhbHRoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhbHRoQmFyJztcbmltcG9ydCBQbGF5ZXJBdHRhY2tCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXJBdHRhY2tCYXInO1xuXG5leHBvcnQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgU2NlbmVcbntcbiAgICBjb25zdHJ1Y3RvciAoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ1ByZWxvYWRlcicpO1xuICAgIH1cblxuICAgIGluaXQgKClcbiAgICB7XG4gICAgICAgIC8vICBXZSBsb2FkZWQgdGhpcyBpbWFnZSBpbiBvdXIgQm9vdCBTY2VuZSwgc28gd2UgY2FuIGRpc3BsYXkgaXQgaGVyZVxuICAgICAgICAvLyB0aGlzLmFkZC5pbWFnZSg1MTIsIDM4NCwgJ2JhY2tncm91bmQnKTtcblxuXG4gICAgICAgIC8vICBBIHNpbXBsZSBwcm9ncmVzcyBiYXIuIFRoaXMgaXMgdGhlIG91dGxpbmUgb2YgdGhlIGJhci5cbiAgICAgICAgLy8gdGhpcy5hZGQucmVjdGFuZ2xlKDUxMiwgMzg0LCA0NjgsIDMyKS5zZXRTdHJva2VTdHlsZSgxLCAweGZmZmZmZik7XG5cbiAgICAgICAgLy8gIFRoaXMgaXMgdGhlIHByb2dyZXNzIGJhciBpdHNlbGYuIEl0IHdpbGwgaW5jcmVhc2UgaW4gc2l6ZSBmcm9tIHRoZSBsZWZ0IGJhc2VkIG9uIHRoZSAlIG9mIHByb2dyZXNzLlxuICAgICAgICAvLyBjb25zdCBiYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLTIzMCwgMzg0LCA0LCAyOCwgMHhmZmZmZmYpO1xuXG4gICAgICAgIC8vICBVc2UgdGhlICdwcm9ncmVzcycgZXZlbnQgZW1pdHRlZCBieSB0aGUgTG9hZGVyUGx1Z2luIHRvIHVwZGF0ZSB0aGUgbG9hZGluZyBiYXJcbiAgICAgICAgLy8gdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsIChwcm9ncmVzczogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgLy8gICAgIC8vICBVcGRhdGUgdGhlIHByb2dyZXNzIGJhciAob3VyIGJhciBpcyA0NjRweCB3aWRlLCBzbyAxMDAlID0gNDY0cHgpXG4gICAgICAgIC8vICAgICBiYXIud2lkdGggPSA0ICsgKDQ2MCAqIHByb2dyZXNzKTtcblxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBwcmVsb2FkICgpXG4gICAge1xuICAgICAgICAvLyBMb2FkIExpYiBDb21wb25lbnRcbiAgICAgICAgUmVjdEJ1dHRvbi5wcmVsb2FkKHRoaXMpO1xuICAgICAgICBBZHZlbnR1cmVDYXJkLnByZWxvYWQodGhpcyk7XG4gICAgICAgIENsb3NlQnV0dG9uLnByZWxvYWQodGhpcyk7XG4gICAgICAgIFBsYXllckF0dGFja0Jhci5wcmVsb2FkKHRoaXMpO1xuXG4gICAgICAgIC8vIExvYWQgR2FtZSBDb21wb25lbnRcbiAgICAgICAgSGVhbHRoQmFyLnByZWxvYWQodGhpcylcblxuICAgICAgICAvLyAgTG9hZCB0aGUgYXNzZXRzIGZvciB0aGUgZ2FtZSAtIFJlcGxhY2Ugd2l0aCB5b3VyIG93biBhc3NldHNcbiAgICAgICAgdGhpcy5sb2FkLnNldFBhdGgoJ2Fzc2V0cycpO1xuXG4gICAgICAgIGNvbnN0IG1haW5NZW51Rm9sZGVyID0gJy9hZHZlbnR1cmUvbWFpbk1lbnUnO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ21haW5NZW51QmcnLCBtYWluTWVudUZvbGRlcisnL2JnLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbmV4dCcsJy9hZHZlbnR1cmUvZ2FtZS9uZXh0LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BsYXllcicsJy9hZHZlbnR1cmUvZ2FtZS9wbGF5ZXIucG5nJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdibHVlJywnL2FkdmVudHVyZS9nYW1lL2dlbS9ibHVlLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dyZWVuJywnL2FkdmVudHVyZS9nYW1lL2dlbS9ncmVlbi5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdvcmFuZ2UnLCcvYWR2ZW50dXJlL2dhbWUvZ2VtL29yYW5nZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCcvYWR2ZW50dXJlL2dhbWUvZ2VtL3JlZC5wbmcnKTtcblxuICAgIH1cblxuICAgIGNyZWF0ZSAoKVxuICAgIHtcbiAgICAgICAgLy8gIFdoZW4gYWxsIHRoZSBhc3NldHMgaGF2ZSBsb2FkZWQsIGl0J3Mgb2Z0ZW4gd29ydGggY3JlYXRpbmcgZ2xvYmFsIG9iamVjdHMgaGVyZSB0aGF0IHRoZSByZXN0IG9mIHRoZSBnYW1lIGNhbiB1c2UuXG4gICAgICAgIC8vICBGb3IgZXhhbXBsZSwgeW91IGNhbiBkZWZpbmUgZ2xvYmFsIGFuaW1hdGlvbnMgaGVyZSwgc28gd2UgY2FuIHVzZSB0aGVtIGluIG90aGVyIHNjZW5lcy5cblxuICAgICAgICAvLyAgTW92ZSB0byB0aGUgTWFpbk1lbnUuIFlvdSBjb3VsZCBhbHNvIHN3YXAgdGhpcyBmb3IgYSBTY2VuZSBUcmFuc2l0aW9uLCBzdWNoIGFzIGEgY2FtZXJhIGZhZGUuXG4gICAgICAgIC8vIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUmVjdEJ1dHRvbiIsIlNjZW5lIiwiQWR2ZW50dXJlQ2FyZCIsIkNsb3NlQnV0dG9uIiwiSGVhbHRoQmFyIiwiUGxheWVyQXR0YWNrQmFyIiwiUHJlbG9hZGVyIiwiaW5pdCIsInByZWxvYWQiLCJsb2FkIiwic2V0UGF0aCIsIm1haW5NZW51Rm9sZGVyIiwiaW1hZ2UiLCJjcmVhdGUiLCJzY2VuZSIsInN0YXJ0IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/scenes/Preloader.ts\n"));

/***/ })

});