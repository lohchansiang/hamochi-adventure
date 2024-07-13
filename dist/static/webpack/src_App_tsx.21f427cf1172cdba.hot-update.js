/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/game/components/Opponent.ts":
/*!*****************************************!*\
  !*** ./src/game/components/Opponent.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Opponent; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HealthBar */ \"./src/game/components/HealthBar.ts\");\n/* harmony import */ var _OpponentAttackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpponentAttackBar */ \"./src/game/components/OpponentAttackBar.ts\");\n/* harmony import */ var _OpponentAttackBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_OpponentAttackBar__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Opponent {\n    renderHealth() {\n        this.healthBar.renderHealth(this.currentHp, this.maxHp);\n    }\n    renderAttackBar() {\n        // Render Player Attack Bar\n        this.attackBar = new (_OpponentAttackBar__WEBPACK_IMPORTED_MODULE_2___default())(this.scene, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].screenWidth / 2, 450, 5);\n    }\n    damage(value) {\n        let newHp = this.currentHp - value;\n        if (newHp >= 0 && newHp <= this.maxHp) {\n            this.currentHp = newHp;\n        } else if (newHp < 0) {\n            this.currentHp = 0;\n        } else if (newHp > this.maxHp) {\n            this.currentHp = this.maxHp;\n        }\n        console.log(this.currentHp);\n        this.renderHealth();\n        this.scene.events.emit(\"opponent-update\");\n    }\n    constructor(scene, card){\n        this.maxHp = 2;\n        this.scene = scene;\n        this.card = card;\n        this.currentHp = this.maxHp;\n        // Render Opponent\n        this.avatar = this.scene.add.sprite(_lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].centerX(), 200, card.spriteKey);\n        // Render Health\n        this.healthBar = new _HealthBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].centerX(), 350);\n        this.healthBar.container.scale = 0.8;\n        this.renderHealth();\n        this.renderAttackBar();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL09wcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBR0E7QUFDZ0I7QUFFcEMsTUFBTUc7SUE4QmpCQyxlQUFjO1FBQ1YsSUFBSSxDQUFDQyxTQUFTLENBQUNELFlBQVksQ0FBQyxJQUFJLENBQUNFLFNBQVMsRUFBQyxJQUFJLENBQUNDLEtBQUs7SUFDekQ7SUFFQUMsa0JBQWlCO1FBQ2IsMkJBQTJCO1FBQzNCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUlQLDJEQUFpQkEsQ0FBRSxJQUFJLENBQUNRLEtBQUssRUFBRVYsZ0VBQW1CLEdBQUMsR0FBRSxLQUFLO0lBQ25GO0lBRUFZLE9BQU9DLEtBQVksRUFBQztRQUNoQixJQUFJQyxRQUFRLElBQUksQ0FBQ1IsU0FBUyxHQUFHTztRQUM3QixJQUFJQyxTQUFTLEtBQUtBLFNBQVMsSUFBSSxDQUFDUCxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDRCxTQUFTLEdBQUdRO1FBQ3JCLE9BQU0sSUFBSUEsUUFBUSxHQUFHO1lBQ2pCLElBQUksQ0FBQ1IsU0FBUyxHQUFHO1FBQ3JCLE9BQU0sSUFBSVEsUUFBUSxJQUFJLENBQUNQLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUNELFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFDL0I7UUFDQVEsUUFBUUMsR0FBRyxDQUFDLElBQUksQ0FBQ1YsU0FBUztRQUMxQixJQUFJLENBQUNGLFlBQVk7UUFFakIsSUFBSSxDQUFDTSxLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQzNCO0lBdkNBQyxZQUFhVCxLQUFXLEVBQUVVLElBQVcsQ0FBRTthQVB2Q2IsUUFBZ0I7UUFRWixJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNVLElBQUksR0FBR0E7UUFFWixJQUFJLENBQUNkLFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFM0Isa0JBQWtCO1FBQ2xCLElBQUksQ0FBQ2MsTUFBTSxHQUFHLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxHQUFHLENBQUNDLE1BQU0sQ0FBRXZCLDREQUFlLElBQUksS0FBS29CLEtBQUtLLFNBQVM7UUFFM0UsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ3BCLFNBQVMsR0FBRyxJQUFJSixrREFBU0EsQ0FBQyxJQUFJLENBQUNTLEtBQUssRUFBRVYsNERBQWUsSUFBSTtRQUM5RCxJQUFJLENBQUNLLFNBQVMsQ0FBQ3FCLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHO1FBQ2pDLElBQUksQ0FBQ3ZCLFlBQVk7UUFFakIsSUFBSSxDQUFDSSxlQUFlO0lBQ3hCO0FBeUJKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9PcHBvbmVudC50cz9jNzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTGliIGZyb20gXCJAL2xpYi9HYW1lTGliXCJcbmltcG9ydCB7IEdhbWVPYmplY3RzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuaW1wb3J0IHsgQUNhcmQgfSBmcm9tIFwiLi9DYXJkUmVwb1wiXG5pbXBvcnQgSGVhbHRoQmFyIGZyb20gXCIuL0hlYWx0aEJhclwiXG5pbXBvcnQgT3Bwb25lbnRBdHRhY2tCYXIgZnJvbSBcIi4vT3Bwb25lbnRBdHRhY2tCYXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHBvbmVudHtcblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNhcmQ6IEFDYXJkXG4gICAgLy9cbiAgICBhdmF0YXI6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIG1heEhwOiBudW1iZXIgPSAyXG4gICAgY3VycmVudEhwOiBudW1iZXJcbiAgICAvL1xuICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyXG4gICAgYXR0YWNrQmFyOiBPcHBvbmVudEF0dGFja0JhclxuXG4gICAgXG4gICAgY29uc3RydWN0b3IoIHNjZW5lOlNjZW5lLCBjYXJkOiBBQ2FyZCApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5jYXJkID0gY2FyZFxuXG4gICAgICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcFxuXG4gICAgICAgIC8vIFJlbmRlciBPcHBvbmVudFxuICAgICAgICB0aGlzLmF2YXRhciA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSggR2FtZUxpYi5jZW50ZXJYKCksIDIwMCwgY2FyZC5zcHJpdGVLZXkgKVxuXG4gICAgICAgIC8vIFJlbmRlciBIZWFsdGhcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMuc2NlbmUsIEdhbWVMaWIuY2VudGVyWCgpLCAzNTApXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmNvbnRhaW5lci5zY2FsZSA9IDAuOFxuICAgICAgICB0aGlzLnJlbmRlckhlYWx0aCgpXG5cbiAgICAgICAgdGhpcy5yZW5kZXJBdHRhY2tCYXIoKVxuICAgIH1cblxuICAgIHJlbmRlckhlYWx0aCgpe1xuICAgICAgICB0aGlzLmhlYWx0aEJhci5yZW5kZXJIZWFsdGgodGhpcy5jdXJyZW50SHAsdGhpcy5tYXhIcClcbiAgICB9XG5cbiAgICByZW5kZXJBdHRhY2tCYXIoKXtcbiAgICAgICAgLy8gUmVuZGVyIFBsYXllciBBdHRhY2sgQmFyXG4gICAgICAgIHRoaXMuYXR0YWNrQmFyID0gbmV3IE9wcG9uZW50QXR0YWNrQmFyKCB0aGlzLnNjZW5lLCBHYW1lTGliLnNjcmVlbldpZHRoLzIsNDUwLCA1IClcbiAgICB9XG4gICAgXG4gICAgZGFtYWdlKHZhbHVlOm51bWJlcil7XG4gICAgICAgIGxldCBuZXdIcCA9IHRoaXMuY3VycmVudEhwIC0gdmFsdWVcbiAgICAgICAgaWYoIG5ld0hwID49IDAgJiYgbmV3SHAgPD0gdGhpcy5tYXhIcCApe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHAgPSBuZXdIcDtcbiAgICAgICAgfWVsc2UgaWYoIG5ld0hwIDwgMCApe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHAgPSAwXG4gICAgICAgIH1lbHNlIGlmKCBuZXdIcCA+IHRoaXMubWF4SHAgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEhwKVxuICAgICAgICB0aGlzLnJlbmRlckhlYWx0aCgpXG5cbiAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnb3Bwb25lbnQtdXBkYXRlJylcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJIZWFsdGhCYXIiLCJPcHBvbmVudEF0dGFja0JhciIsIk9wcG9uZW50IiwicmVuZGVySGVhbHRoIiwiaGVhbHRoQmFyIiwiY3VycmVudEhwIiwibWF4SHAiLCJyZW5kZXJBdHRhY2tCYXIiLCJhdHRhY2tCYXIiLCJzY2VuZSIsInNjcmVlbldpZHRoIiwiZGFtYWdlIiwidmFsdWUiLCJuZXdIcCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJlbWl0IiwiY29uc3RydWN0b3IiLCJjYXJkIiwiYXZhdGFyIiwiYWRkIiwic3ByaXRlIiwiY2VudGVyWCIsInNwcml0ZUtleSIsImNvbnRhaW5lciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/Opponent.ts\n"));

/***/ }),

/***/ "./src/game/components/OpponentAttackBar.ts":
/*!**************************************************!*\
  !*** ./src/game/components/OpponentAttackBar.ts ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});