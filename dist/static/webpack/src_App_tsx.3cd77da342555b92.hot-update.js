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

/***/ "./src/game/components/CardMaker/ForgeMainCircle.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeMainCircle.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMainCircle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n\n\nclass ForgeMainCircle {\n    static preload(scene) {}\n    constructor(scene, x, y){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        const stroke = 15;\n        this.outerCircle = scene.add.circle(0, 0, 250, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerCircle = scene.add.circle(0, 0, 250 - stroke, 0xffffff);\n        this.container.add(this.outerCircle);\n        this.container.add(this.innerCircle);\n        this.container.name = \"MainCircle\";\n        this.noCardDisplay = this.scene.add.text(0, 0, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](scene, 0, 0, this.mainCircle.x + this.mainCircle.radius, this.mainCircle.y, \"buttonAdd\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            if (this.currentForgeState == \"prepare\") {\n                if (!this.canInput) return;\n                this.panelSelectCard.open();\n            }\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21DO0FBR3FCO0FBRXpDLE1BQU1FO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQWNBQyxZQUFhRCxLQUFlLEVBQUVFLENBQVMsRUFBRUMsQ0FBUyxDQUFFO1FBQ2hELElBQUksQ0FBQ0gsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0ksSUFBSSxHQUFHRjtRQUNaLElBQUksQ0FBQ0csSUFBSSxHQUFHRjtRQUVaLElBQUksQ0FBQ0csU0FBUyxHQUFHTixNQUFNTyxHQUFHLENBQUNELFNBQVMsQ0FBQ0osR0FBRUM7UUFFdkMsTUFBTUssU0FBZ0I7UUFDdEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdULE1BQU1PLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUUsR0FBRSxLQUFJZCxpRUFBb0I7UUFDaEUsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHWixNQUFNTyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFFLEdBQUUsTUFBSUYsUUFBTztRQUVuRCxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0UsV0FBVztRQUNuQyxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0ssV0FBVztRQUVuQyxJQUFJLENBQUNOLFNBQVMsQ0FBQ08sSUFBSSxHQUFHO1FBRXRCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ2QsS0FBSyxDQUFDTyxHQUFHLENBQUNRLElBQUksQ0FBQyxHQUFFLEdBQUUsS0FBSTtZQUM3Q0MsVUFBVTtZQUNWQyxZQUFZO1lBQ1pDLE9BQU87UUFDWCxHQUFHQyxTQUFTLENBQUMsS0FBSSxLQUFLQyxVQUFVLENBQUM7UUFFakMsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJeEIsb0VBQVlBLENBQUNHLE9BQU0sR0FBRSxHQUM3QyxJQUFJLENBQUNzQixVQUFVLENBQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDb0IsVUFBVSxDQUFDQyxNQUFNLEVBQzFDLElBQUksQ0FBQ0QsVUFBVSxDQUFDbkIsQ0FBQyxFQUNqQjtRQUVKLElBQUksQ0FBQ2tCLGdCQUFnQixDQUFDRyxpQkFBaUIsR0FBRztZQUN0QyxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLElBQUksV0FBVztnQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsUUFBUSxFQUFHO2dCQUVyQixJQUFJLENBQUNDLGVBQWUsQ0FBQ0MsSUFBSTtZQUM3QjtRQUNKO0lBQ0o7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvQ2FyZE1ha2VyL0ZvcmdlTWFpbkNpcmNsZS50cz84MTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRNYWtlciB9IGZyb20gXCJAL2dhbWUvc2NlbmVzL0NhcmRNYWtlclwiXG5pbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBWb2NhYkNhcmQgZnJvbSBcIi4vUGFuZWxTZWxlY3RDYXJkL1ZvY2FiQ2FyZFwiXG5pbXBvcnQgU3ByaXRlQnV0dG9uIGZyb20gXCJAL2xpYi9jb21wb25lbnRzL1Nwcml0ZUJ1dHRvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdlTWFpbkNpcmNsZXtcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogU2NlbmUgKXtcblxuICAgIH1cblxuICAgIHNjZW5lOiBDYXJkTWFrZXJcbiAgICBvcmlYOiBudW1iZXJcbiAgICBvcmlZOiBudW1iZXJcbiAgICAvL1xuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgb3V0ZXJDaXJjbGU6IEdhbWVPYmplY3RzLkFyY1xuICAgIGlubmVyQ2lyY2xlOiBHYW1lT2JqZWN0cy5BcmNcbiAgICAvL1xuICAgIG5vQ2FyZERpc3BsYXk6IEdhbWVPYmplY3RzLlRleHRcbiAgICBzZWxlY3RlZFZvY2FiOiBWb2NhYkNhcmQgfCBudWxsXG4gICAgYnV0dG9uU2VsZWN0Q2FyZDogU3ByaXRlQnV0dG9uXG5cbiAgICBjb25zdHJ1Y3Rvciggc2NlbmU6Q2FyZE1ha2VyLCB4OiBudW1iZXIsIHk6IG51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5vcmlYID0geFxuICAgICAgICB0aGlzLm9yaVkgPSB5XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgseSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHJva2U6bnVtYmVyID0gMTU7XG4gICAgICAgIHRoaXMub3V0ZXJDaXJjbGUgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCwyNTAsR2FtZUxpYi5jb2xvclBhbmVsQmcpO1xuICAgICAgICB0aGlzLmlubmVyQ2lyY2xlID0gc2NlbmUuYWRkLmNpcmNsZSgwLDAsMjUwLXN0cm9rZSwweGZmZmZmZik7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMub3V0ZXJDaXJjbGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5pbm5lckNpcmNsZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIubmFtZSA9ICdNYWluQ2lyY2xlJ1xuXG4gICAgICAgIHRoaXMubm9DYXJkRGlzcGxheSA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMCwwLCc/Jyx7XG4gICAgICAgICAgICBmb250U2l6ZTogJzMwMHB4JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNjMGMwYzAnLFxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LDAuNSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkID0gbmV3IFNwcml0ZUJ1dHRvbihzY2VuZSwwLDAsXG4gICAgICAgICAgICB0aGlzLm1haW5DaXJjbGUueCArIHRoaXMubWFpbkNpcmNsZS5yYWRpdXMsIFxuICAgICAgICAgICAgdGhpcy5tYWluQ2lyY2xlLnksIFxuICAgICAgICAgICAgJ2J1dHRvbkFkZCcgXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYnV0dG9uU2VsZWN0Q2FyZC5vblByZXNzZWRDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Rm9yZ2VTdGF0ZSA9PSAncHJlcGFyZScgKXtcbiAgICAgICAgICAgICAgICBpZiggIXRoaXMuY2FuSW5wdXQgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsU2VsZWN0Q2FyZC5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVMaWIiLCJTcHJpdGVCdXR0b24iLCJGb3JnZU1haW5DaXJjbGUiLCJwcmVsb2FkIiwic2NlbmUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwib3JpWCIsIm9yaVkiLCJjb250YWluZXIiLCJhZGQiLCJzdHJva2UiLCJvdXRlckNpcmNsZSIsImNpcmNsZSIsImNvbG9yUGFuZWxCZyIsImlubmVyQ2lyY2xlIiwibmFtZSIsIm5vQ2FyZERpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJzZXRPcmlnaW4iLCJzZXRWaXNpYmxlIiwiYnV0dG9uU2VsZWN0Q2FyZCIsIm1haW5DaXJjbGUiLCJyYWRpdXMiLCJvblByZXNzZWRDYWxsYmFjayIsImN1cnJlbnRGb3JnZVN0YXRlIiwiY2FuSW5wdXQiLCJwYW5lbFNlbGVjdENhcmQiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMainCircle.ts\n"));

/***/ })

});