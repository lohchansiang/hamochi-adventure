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

/***/ "./src/adventure/scenes/Preloader.ts":
/*!*******************************************!*\
  !*** ./src/adventure/scenes/Preloader.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Preloader: function() { return /* binding */ Preloader; }\n/* harmony export */ });\n/* harmony import */ var _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/components/RectButton */ \"./src/lib/components/RectButton.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/components/CloseButton */ \"./src/lib/components/CloseButton.ts\");\n/* harmony import */ var _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/PlayerAvatar */ \"./src/adventure/components/Player/PlayerAvatar.ts\");\n/* harmony import */ var _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/components/BasicButton */ \"./src/lib/components/BasicButton.ts\");\n/* harmony import */ var _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map/SideMap */ \"./src/adventure/components/Map/SideMap.ts\");\n\n\n\n\n\n\nclass Preloader extends phaser__WEBPACK_IMPORTED_MODULE_1__.Scene {\n    init() {\n    //  We loaded this image in our Boot Scene, so we can display it here\n    // this.add.image(512, 384, 'background');\n    //  A simple progress bar. This is the outline of the bar.\n    // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);\n    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.\n    // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);\n    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar\n    // this.load.on('progress', (progress: number) => {\n    //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)\n    //     bar.width = 4 + (460 * progress);\n    // });\n    }\n    preload() {\n        // Load For Adventures\n        _components_Map_SideMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].preload(this);\n        // Load Lib Component\n        _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preload(this);\n        _lib_components_BasicButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload(this);\n        _lib_components_CloseButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].preload(this);\n        _components_Player_PlayerAvatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].preload(this);\n        //  Load the assets for the game - Replace with your own assets\n        this.load.setPath(\"assets\");\n        const mainMenuFolder = \"/adventure/mainMenu\";\n        this.load.image(\"mainMenuBg\", mainMenuFolder + \"/bg.png\");\n        this.load.image(\"next\", \"/adventure/game/next.png\");\n        this.load.image(\"player\", \"/adventure/game/player.png\");\n        this.load.image(\"panelWhite\", \"/adventure/game/panelWhite.png\");\n        // Icons\n        this.load.image(\"iconCross\", \"/adventure/icons/cross.png\");\n        this.load.image(\"iconTick\", \"/adventure/icons/tick.png\");\n        this.load.image(\"iconAudio\", \"/adventure/icons/iconAudio.png\");\n        this.load.image(\"iconPause\", \"/adventure/icons/iconPause.png\");\n        this.load.image(\"iconPlay\", \"/adventure/icons/iconPlay.png\");\n        this.load.image(\"buttonCircleAction\", \"/adventure/components/buttonCircle.png\");\n        //\n        this.load.image(\"buttonAdd\", \"/adventure/cardmaker/buttonAdd.png\");\n        this.load.image(\"buttonCardSelect\", \"/adventure/cardmaker/buttonCardSelect.png\");\n        //\n        this.load.image(\"vocabAudio\", \"/adventure/decks/vocabAudio.png\");\n        this.load.image(\"vocabCardBase\", \"/adventure/decks/vocabCardBase.png\");\n        this.load.image(\"vocabCardBaseBack\", \"/adventure/decks/vocabCardBack.png\");\n        this.load.image(\"vocabCardCrack\", \"/adventure/decks/vocabCardCrack.png\");\n        this.load.image(\"vocabCardWhite\", \"/adventure/decks/vocabCardWhite.png\");\n        // Audio\n        this.load.audio(\"forgeSuccess\", \"/adventure/audio/forgeSuccess.mp3\");\n        this.load.audio(\"forgeFailed\", \"/adventure/audio/forgeFailed.mp3\");\n        this.load.audio(\"lightClick\", \"/adventure/audio/lightClick.mp3\");\n        this.load.audio(\"basicClose\", \"/adventure/audio/basicClose.mp3\");\n        this.load.audio(\"forgeSelect\", \"/adventure/audio/forgeSelect.mp3\");\n        this.load.audio(\"forgeStart\", \"/adventure/audio/forgeStart.mp3\");\n    }\n    create() {\n        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.\n        //  For example, you can define global animations here, so we can use them in other scenes.\n        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.\n        // this.scene.start('MainMenu');\n        this.scene.start(\"CityScene\");\n    }\n    constructor(){\n        super(\"Preloader\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9QcmVsb2FkZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDdEI7QUFDd0I7QUFDTTtBQUVOO0FBQ1A7QUFFekMsTUFBTU0sa0JBQWtCTCx5Q0FBS0E7SUFPaENNLE9BQ0E7SUFDSSxxRUFBcUU7SUFDckUsMENBQTBDO0lBRzFDLDBEQUEwRDtJQUMxRCxxRUFBcUU7SUFFckUsdUdBQXVHO0lBQ3ZHLGlFQUFpRTtJQUVqRSxrRkFBa0Y7SUFDbEYsbURBQW1EO0lBRW5ELDJFQUEyRTtJQUMzRSx3Q0FBd0M7SUFFeEMsTUFBTTtJQUNWO0lBRUFDLFVBQ0E7UUFDSSxzQkFBc0I7UUFDdEJILHVFQUFlLENBQUMsSUFBSTtRQUVwQixxQkFBcUI7UUFDckJMLDBFQUFrQixDQUFDLElBQUk7UUFDdkJJLDJFQUFtQixDQUFDLElBQUk7UUFDeEJGLDJFQUFtQixDQUFDLElBQUk7UUFDeEJDLCtFQUFvQixDQUFDLElBQUk7UUFFekIsK0RBQStEO1FBQy9ELElBQUksQ0FBQ00sSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFFbEIsTUFBTUMsaUJBQWlCO1FBQ3ZCLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsY0FBY0QsaUJBQWU7UUFFN0MsSUFBSSxDQUFDRixJQUFJLENBQUNHLEtBQUssQ0FBQyxRQUFPO1FBQ3ZCLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsVUFBUztRQUN6QixJQUFJLENBQUNILElBQUksQ0FBQ0csS0FBSyxDQUFDLGNBQWE7UUFFN0IsUUFBUTtRQUNSLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsYUFBWTtRQUM1QixJQUFJLENBQUNILElBQUksQ0FBQ0csS0FBSyxDQUFDLFlBQVc7UUFDM0IsSUFBSSxDQUFDSCxJQUFJLENBQUNHLEtBQUssQ0FBQyxhQUFZO1FBQzVCLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsYUFBWTtRQUM1QixJQUFJLENBQUNILElBQUksQ0FBQ0csS0FBSyxDQUFDLFlBQVc7UUFFM0IsSUFBSSxDQUFDSCxJQUFJLENBQUNHLEtBQUssQ0FBQyxzQkFBcUI7UUFDckMsRUFBRTtRQUNGLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsYUFBWTtRQUM1QixJQUFJLENBQUNILElBQUksQ0FBQ0csS0FBSyxDQUFDLG9CQUFtQjtRQUNuQyxFQUFFO1FBQ0YsSUFBSSxDQUFDSCxJQUFJLENBQUNHLEtBQUssQ0FBQyxjQUFhO1FBQzdCLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsaUJBQWdCO1FBQ2hDLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMscUJBQW9CO1FBQ3BDLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsa0JBQWlCO1FBQ2pDLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxLQUFLLENBQUMsa0JBQWlCO1FBRWpDLFFBQVE7UUFDUixJQUFJLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDLGdCQUFlO1FBQy9CLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxLQUFLLENBQUMsZUFBYztRQUM5QixJQUFJLENBQUNKLElBQUksQ0FBQ0ksS0FBSyxDQUFDLGNBQWE7UUFDN0IsSUFBSSxDQUFDSixJQUFJLENBQUNJLEtBQUssQ0FBQyxjQUFhO1FBQzdCLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxLQUFLLENBQUMsZUFBYztRQUM5QixJQUFJLENBQUNKLElBQUksQ0FBQ0ksS0FBSyxDQUFDLGNBQWE7SUFDakM7SUFFQUMsU0FDQTtRQUNJLHFIQUFxSDtRQUNySCwyRkFBMkY7UUFFM0YsaUdBQWlHO1FBQ2pHLGdDQUFnQztRQUNoQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO0lBQ3JCO0lBbEZBQyxhQUNBO1FBQ0ksS0FBSyxDQUFDO0lBQ1Y7QUFnRkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FkdmVudHVyZS9zY2VuZXMvUHJlbG9hZGVyLnRzPzQzYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3RCdXR0b24gZnJvbSAnQC9saWIvY29tcG9uZW50cy9SZWN0QnV0dG9uJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAncGhhc2VyJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdAL2xpYi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBQbGF5ZXJBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyQXZhdGFyJztcbmltcG9ydCB7IERlY2tSZXBvIH0gZnJvbSAnQC9saWIvcmVwb3MvRGVja1JlcG8nO1xuaW1wb3J0IEJhc2ljQnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvQmFzaWNCdXR0b24nO1xuaW1wb3J0IFNpZGVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAvU2lkZU1hcCc7XG5cbmV4cG9ydCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBTY2VuZVxue1xuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignUHJlbG9hZGVyJyk7XG4gICAgfVxuXG4gICAgaW5pdCAoKVxuICAgIHtcbiAgICAgICAgLy8gIFdlIGxvYWRlZCB0aGlzIGltYWdlIGluIG91ciBCb290IFNjZW5lLCBzbyB3ZSBjYW4gZGlzcGxheSBpdCBoZXJlXG4gICAgICAgIC8vIHRoaXMuYWRkLmltYWdlKDUxMiwgMzg0LCAnYmFja2dyb3VuZCcpO1xuXG5cbiAgICAgICAgLy8gIEEgc2ltcGxlIHByb2dyZXNzIGJhci4gVGhpcyBpcyB0aGUgb3V0bGluZSBvZiB0aGUgYmFyLlxuICAgICAgICAvLyB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAzODQsIDQ2OCwgMzIpLnNldFN0cm9rZVN0eWxlKDEsIDB4ZmZmZmZmKTtcblxuICAgICAgICAvLyAgVGhpcyBpcyB0aGUgcHJvZ3Jlc3MgYmFyIGl0c2VsZi4gSXQgd2lsbCBpbmNyZWFzZSBpbiBzaXplIGZyb20gdGhlIGxlZnQgYmFzZWQgb24gdGhlICUgb2YgcHJvZ3Jlc3MuXG4gICAgICAgIC8vIGNvbnN0IGJhciA9IHRoaXMuYWRkLnJlY3RhbmdsZSg1MTItMjMwLCAzODQsIDQsIDI4LCAweGZmZmZmZik7XG5cbiAgICAgICAgLy8gIFVzZSB0aGUgJ3Byb2dyZXNzJyBldmVudCBlbWl0dGVkIGJ5IHRoZSBMb2FkZXJQbHVnaW4gdG8gdXBkYXRlIHRoZSBsb2FkaW5nIGJhclxuICAgICAgICAvLyB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHByb2dyZXNzOiBudW1iZXIpID0+IHtcblxuICAgICAgICAvLyAgICAgLy8gIFVwZGF0ZSB0aGUgcHJvZ3Jlc3MgYmFyIChvdXIgYmFyIGlzIDQ2NHB4IHdpZGUsIHNvIDEwMCUgPSA0NjRweClcbiAgICAgICAgLy8gICAgIGJhci53aWR0aCA9IDQgKyAoNDYwICogcHJvZ3Jlc3MpO1xuXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHByZWxvYWQgKClcbiAgICB7XG4gICAgICAgIC8vIExvYWQgRm9yIEFkdmVudHVyZXNcbiAgICAgICAgU2lkZU1hcC5wcmVsb2FkKHRoaXMpO1xuXG4gICAgICAgIC8vIExvYWQgTGliIENvbXBvbmVudFxuICAgICAgICBSZWN0QnV0dG9uLnByZWxvYWQodGhpcyk7XG4gICAgICAgIEJhc2ljQnV0dG9uLnByZWxvYWQodGhpcyk7XG4gICAgICAgIENsb3NlQnV0dG9uLnByZWxvYWQodGhpcyk7XG4gICAgICAgIFBsYXllckF2YXRhci5wcmVsb2FkKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy8gIExvYWQgdGhlIGFzc2V0cyBmb3IgdGhlIGdhbWUgLSBSZXBsYWNlIHdpdGggeW91ciBvd24gYXNzZXRzXG4gICAgICAgIHRoaXMubG9hZC5zZXRQYXRoKCdhc3NldHMnKTtcblxuICAgICAgICBjb25zdCBtYWluTWVudUZvbGRlciA9ICcvYWR2ZW50dXJlL21haW5NZW51JztcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdtYWluTWVudUJnJywgbWFpbk1lbnVGb2xkZXIrJy9iZy5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ25leHQnLCcvYWR2ZW50dXJlL2dhbWUvbmV4dC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwbGF5ZXInLCcvYWR2ZW50dXJlL2dhbWUvcGxheWVyLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhbmVsV2hpdGUnLCcvYWR2ZW50dXJlL2dhbWUvcGFuZWxXaGl0ZS5wbmcnKTtcblxuICAgICAgICAvLyBJY29uc1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ljb25Dcm9zcycsJy9hZHZlbnR1cmUvaWNvbnMvY3Jvc3MucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaWNvblRpY2snLCcvYWR2ZW50dXJlL2ljb25zL3RpY2sucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaWNvbkF1ZGlvJywnL2FkdmVudHVyZS9pY29ucy9pY29uQXVkaW8ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaWNvblBhdXNlJywnL2FkdmVudHVyZS9pY29ucy9pY29uUGF1c2UucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaWNvblBsYXknLCcvYWR2ZW50dXJlL2ljb25zL2ljb25QbGF5LnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnV0dG9uQ2lyY2xlQWN0aW9uJywnL2FkdmVudHVyZS9jb21wb25lbnRzL2J1dHRvbkNpcmNsZS5wbmcnKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidXR0b25BZGQnLCcvYWR2ZW50dXJlL2NhcmRtYWtlci9idXR0b25BZGQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnV0dG9uQ2FyZFNlbGVjdCcsJy9hZHZlbnR1cmUvY2FyZG1ha2VyL2J1dHRvbkNhcmRTZWxlY3QucG5nJyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndm9jYWJBdWRpbycsJy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJBdWRpby5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRCYXNlJywnL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYXNlLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQ2FyZEJhc2VCYWNrJywnL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRCYWNrLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ZvY2FiQ2FyZENyYWNrJywnL2FkdmVudHVyZS9kZWNrcy92b2NhYkNhcmRDcmFjay5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd2b2NhYkNhcmRXaGl0ZScsJy9hZHZlbnR1cmUvZGVja3Mvdm9jYWJDYXJkV2hpdGUucG5nJyk7XG5cbiAgICAgICAgLy8gQXVkaW9cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdmb3JnZVN1Y2Nlc3MnLCcvYWR2ZW50dXJlL2F1ZGlvL2ZvcmdlU3VjY2Vzcy5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdmb3JnZUZhaWxlZCcsJy9hZHZlbnR1cmUvYXVkaW8vZm9yZ2VGYWlsZWQubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbGlnaHRDbGljaycsJy9hZHZlbnR1cmUvYXVkaW8vbGlnaHRDbGljay5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdiYXNpY0Nsb3NlJywnL2FkdmVudHVyZS9hdWRpby9iYXNpY0Nsb3NlLm1wMycpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2ZvcmdlU2VsZWN0JywnL2FkdmVudHVyZS9hdWRpby9mb3JnZVNlbGVjdC5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdmb3JnZVN0YXJ0JywnL2FkdmVudHVyZS9hdWRpby9mb3JnZVN0YXJ0Lm1wMycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSAoKVxuICAgIHtcbiAgICAgICAgLy8gIFdoZW4gYWxsIHRoZSBhc3NldHMgaGF2ZSBsb2FkZWQsIGl0J3Mgb2Z0ZW4gd29ydGggY3JlYXRpbmcgZ2xvYmFsIG9iamVjdHMgaGVyZSB0aGF0IHRoZSByZXN0IG9mIHRoZSBnYW1lIGNhbiB1c2UuXG4gICAgICAgIC8vICBGb3IgZXhhbXBsZSwgeW91IGNhbiBkZWZpbmUgZ2xvYmFsIGFuaW1hdGlvbnMgaGVyZSwgc28gd2UgY2FuIHVzZSB0aGVtIGluIG90aGVyIHNjZW5lcy5cblxuICAgICAgICAvLyAgTW92ZSB0byB0aGUgTWFpbk1lbnUuIFlvdSBjb3VsZCBhbHNvIHN3YXAgdGhpcyBmb3IgYSBTY2VuZSBUcmFuc2l0aW9uLCBzdWNoIGFzIGEgY2FtZXJhIGZhZGUuXG4gICAgICAgIC8vIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0NpdHlTY2VuZScpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWN0QnV0dG9uIiwiU2NlbmUiLCJDbG9zZUJ1dHRvbiIsIlBsYXllckF2YXRhciIsIkJhc2ljQnV0dG9uIiwiU2lkZU1hcCIsIlByZWxvYWRlciIsImluaXQiLCJwcmVsb2FkIiwibG9hZCIsInNldFBhdGgiLCJtYWluTWVudUZvbGRlciIsImltYWdlIiwiYXVkaW8iLCJjcmVhdGUiLCJzY2VuZSIsInN0YXJ0IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/Preloader.ts\n"));

/***/ })

});