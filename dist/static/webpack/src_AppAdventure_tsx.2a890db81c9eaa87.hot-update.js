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

/***/ "./src/adventure/scenes/MainMenu.ts":
/*!******************************************!*\
  !*** ./src/adventure/scenes/MainMenu.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainMenu: function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBus */ \"./src/adventure/EventBus.ts\");\n/* harmony import */ var _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/components/RectButton */ \"./src/lib/components/RectButton.ts\");\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\n\n\n\nclass MainMenu extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    create() {\n        this.background = this.add.image(_lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 2, \"mainMenuBg\");\n        this.button = new _lib_components_RectButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 2, \"Start\");\n        this.button.onPressed(()=>{\n            this.scene.start(\"CityScene\");\n        });\n        this.title = this.add.text(_lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenWidth / 2, _lib_GameLib__WEBPACK_IMPORTED_MODULE_3__[\"default\"].screenHeight / 4, \"Hamochi Adventure\", {\n            fontFamily: \"Arial Black\",\n            fontSize: 60,\n            color: \"#ffffff\",\n            stroke: \"#000000\",\n            strokeThickness: 8,\n            align: \"center\"\n        }).setOrigin(0.5).setDepth(100);\n        _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus.emit(\"current-scene-ready\", this);\n    }\n    changeScene() {\n        this.scene.start(\"Game\");\n    }\n    //\n    constructor(){\n        super(\"MainMenu\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9NYWluTWVudS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNjO0FBQ2pCO0FBRTdCLE1BQU1JLGlCQUFpQkoseUNBQUtBO0lBYS9CSyxTQUNBO1FBQ0ksSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQ0wsZ0VBQW1CLEdBQUMsR0FBR0EsaUVBQW9CLEdBQUMsR0FBRztRQUVoRixJQUFJLENBQUNRLE1BQU0sR0FBRyxJQUFJVCxrRUFBVUEsQ0FBQyxJQUFJLEVBQUVDLGdFQUFtQixHQUFDLEdBQUdBLGlFQUFvQixHQUFDLEdBQUc7UUFDbEYsSUFBSSxDQUFDUSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNsQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1FBQ3JCO1FBRUEsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDUixHQUFHLENBQUNTLElBQUksQ0FBQ2IsZ0VBQW1CLEdBQUMsR0FBR0EsaUVBQW9CLEdBQUMsR0FBRyxxQkFBcUI7WUFDM0ZjLFlBQVk7WUFBZUMsVUFBVTtZQUFJQyxPQUFPO1lBQ2hEQyxRQUFRO1lBQVdDLGlCQUFpQjtZQUNwQ0MsT0FBTztRQUNYLEdBQUdDLFNBQVMsQ0FBQyxLQUFLQyxRQUFRLENBQUM7UUFFM0J2QiwrQ0FBUUEsQ0FBQ3dCLElBQUksQ0FBQyx1QkFBdUIsSUFBSTtJQUM3QztJQUVBQyxjQUNBO1FBQ0ksSUFBSSxDQUFDYixLQUFLLENBQUNDLEtBQUssQ0FBQztJQUNyQjtJQTVCQSxFQUFFO0lBRUZhLGFBQ0E7UUFDSSxLQUFLLENBQUM7SUFDVjtBQXdCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYWR2ZW50dXJlL3NjZW5lcy9NYWluTWVudS50cz8zMGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL0V2ZW50QnVzJztcbmltcG9ydCBSZWN0QnV0dG9uIGZyb20gJ0AvbGliL2NvbXBvbmVudHMvUmVjdEJ1dHRvbic7XG5pbXBvcnQgR2FtZUxpYiBmcm9tICdAL2xpYi9HYW1lTGliJztcblxuZXhwb3J0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgU2NlbmVcbntcbiAgICBiYWNrZ3JvdW5kOiBHYW1lT2JqZWN0cy5JbWFnZTtcbiAgICB0aXRsZTogR2FtZU9iamVjdHMuVGV4dDtcbiAgICBsb2dvVHdlZW46IFBoYXNlci5Ud2VlbnMuVHdlZW4gfCBudWxsO1xuICAgIGJ1dHRvbjogUmVjdEJ1dHRvbjtcbiAgICAvL1xuICAgIFxuICAgIGNvbnN0cnVjdG9yICgpXG4gICAge1xuICAgICAgICBzdXBlcignTWFpbk1lbnUnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUgKClcbiAgICB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYWRkLmltYWdlKEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwgR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiwgJ21haW5NZW51QmcnKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBSZWN0QnV0dG9uKHRoaXMsIEdhbWVMaWIuc2NyZWVuV2lkdGgvMiwgR2FtZUxpYi5zY3JlZW5IZWlnaHQvMiwgXCJTdGFydFwiKTtcbiAgICAgICAgdGhpcy5idXR0b24ub25QcmVzc2VkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdDaXR5U2NlbmUnKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5hZGQudGV4dChHYW1lTGliLnNjcmVlbldpZHRoLzIsIEdhbWVMaWIuc2NyZWVuSGVpZ2h0LzQsICdIYW1vY2hpIEFkdmVudHVyZScsIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCBCbGFjaycsIGZvbnRTaXplOiA2MCwgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLCBzdHJva2VUaGlja25lc3M6IDgsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSkuc2V0RGVwdGgoMTAwKTtcblxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdjdXJyZW50LXNjZW5lLXJlYWR5JywgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVNjZW5lICgpXG4gICAge1xuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNjZW5lIiwiRXZlbnRCdXMiLCJSZWN0QnV0dG9uIiwiR2FtZUxpYiIsIk1haW5NZW51IiwiY3JlYXRlIiwiYmFja2dyb3VuZCIsImFkZCIsImltYWdlIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJidXR0b24iLCJvblByZXNzZWQiLCJzY2VuZSIsInN0YXJ0IiwidGl0bGUiLCJ0ZXh0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiY29sb3IiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJhbGlnbiIsInNldE9yaWdpbiIsInNldERlcHRoIiwiZW1pdCIsImNoYW5nZVNjZW5lIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adventure/scenes/MainMenu.ts\n"));

/***/ })

});