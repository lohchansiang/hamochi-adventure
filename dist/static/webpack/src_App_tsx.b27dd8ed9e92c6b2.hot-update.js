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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeMainCircle; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n/* harmony import */ var _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/components/SpriteButton */ \"./src/lib/components/SpriteButton.ts\");\n\n\nclass ForgeMainCircle {\n    static preload(scene) {}\n    clearSelectedCard() {\n        // clear\n        if (this.selectedVocab) {\n            this.selectedVocab.clean();\n            this.selectedVocab = null;\n        }\n    }\n    renderSelectedCard(vocab) {\n        this.clearSelectedCard();\n        this.noCardDisplay.setVisible(true);\n    }\n    constructor(scene, x, y){\n        this.scene = scene;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n        const radius = 250;\n        const thickness = 15;\n        this.outerCircle = scene.add.circle(0, 0, radius, _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorPanelBg);\n        this.innerCircle = scene.add.circle(0, 0, radius - thickness, 0xffffff);\n        this.container.add(this.outerCircle);\n        this.container.add(this.innerCircle);\n        this.container.name = \"MainCircle\";\n        this.noCardDisplay = this.scene.add.text(0, 0, \"?\", {\n            fontSize: \"300px\",\n            fontFamily: \"Arial\",\n            color: \"#c0c0c0\"\n        }).setOrigin(0.5, 0.5).setVisible(false);\n        this.buttonSelectCard = new _lib_components_SpriteButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](scene, radius - thickness / 2, 0, \"buttonAdd\");\n        this.buttonSelectCard.onPressedCallback = ()=>{\n            this.scene.events.emit(\"open-panel\");\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21DO0FBR3FCO0FBR3pDLE1BQU1FO0lBRWpCLE9BQU9DLFFBQVNDLEtBQVksRUFBRSxDQUU5QjtJQTJDQUMsb0JBQW1CO1FBQ2YsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDQSxhQUFhLENBQUNDLEtBQUs7WUFDeEIsSUFBSSxDQUFDRCxhQUFhLEdBQUc7UUFDekI7SUFDSjtJQUVBRSxtQkFBb0JDLEtBQVcsRUFBRTtRQUM3QixJQUFJLENBQUNKLGlCQUFpQjtRQUV0QixJQUFJLENBQUNLLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO0lBQ2xDO0lBekNBQyxZQUFhUixLQUFlLEVBQUVTLENBQVMsRUFBRUMsQ0FBUyxDQUFFO1FBQ2hELElBQUksQ0FBQ1YsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ1csSUFBSSxHQUFHRjtRQUNaLElBQUksQ0FBQ0csSUFBSSxHQUFHRjtRQUVaLElBQUksQ0FBQ0csU0FBUyxHQUFHYixNQUFNYyxHQUFHLENBQUNELFNBQVMsQ0FBQ0osR0FBRUM7UUFFdkMsTUFBTUssU0FBZ0I7UUFDdEIsTUFBTUMsWUFBbUI7UUFDekIsSUFBSSxDQUFDQyxXQUFXLEdBQUdqQixNQUFNYyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFFLEdBQUVILFFBQU9uQixpRUFBb0I7UUFDbkUsSUFBSSxDQUFDd0IsV0FBVyxHQUFHcEIsTUFBTWMsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRSxHQUFFSCxTQUFPQyxXQUFVO1FBRXpELElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRyxXQUFXO1FBQ25DLElBQUksQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTSxXQUFXO1FBRW5DLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxJQUFJLEdBQUc7UUFFdEIsSUFBSSxDQUFDZixhQUFhLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNjLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDLEdBQUUsR0FBRSxLQUFJO1lBQzdDQyxVQUFVO1lBQ1ZDLFlBQVk7WUFDWkMsT0FBTztRQUNYLEdBQUdDLFNBQVMsQ0FBQyxLQUFJLEtBQUtuQixVQUFVLENBQUM7UUFFakMsSUFBSSxDQUFDb0IsZ0JBQWdCLEdBQUcsSUFBSTlCLG9FQUFZQSxDQUFDRyxPQUFNZSxTQUFPQyxZQUFVLEdBQUUsR0FBRTtRQUNwRSxJQUFJLENBQUNXLGdCQUFnQixDQUFDQyxpQkFBaUIsR0FBRztZQUN0QyxJQUFJLENBQUM1QixLQUFLLENBQUM2QixNQUFNLENBQUNDLElBQUksQ0FBQztRQUMzQjtJQUNKO0FBZUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZU1haW5DaXJjbGUudHM/ODEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IEdhbWVMaWIgZnJvbSBcIkAvbGliL0dhbWVMaWJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMsIFNjZW5lIH0gZnJvbSBcInBoYXNlclwiXG5pbXBvcnQgVm9jYWJDYXJkIGZyb20gXCIuL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmRcIlxuaW1wb3J0IFNwcml0ZUJ1dHRvbiBmcm9tIFwiQC9saWIvY29tcG9uZW50cy9TcHJpdGVCdXR0b25cIlxuaW1wb3J0IHsgRGVja1JlcG8sIFZvY2FiIH0gZnJvbSBcIkAvbGliL3JlcG9zL0RlY2tSZXBvXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VNYWluQ2lyY2xle1xuXG4gICAgc3RhdGljIHByZWxvYWQoIHNjZW5lOiBTY2VuZSApe1xuXG4gICAgfVxuXG4gICAgc2NlbmU6IENhcmRNYWtlclxuICAgIG9yaVg6IG51bWJlclxuICAgIG9yaVk6IG51bWJlclxuICAgIC8vXG4gICAgY29udGFpbmVyOiBHYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBvdXRlckNpcmNsZTogR2FtZU9iamVjdHMuQXJjXG4gICAgaW5uZXJDaXJjbGU6IEdhbWVPYmplY3RzLkFyY1xuICAgIC8vXG4gICAgbm9DYXJkRGlzcGxheTogR2FtZU9iamVjdHMuVGV4dFxuICAgIHNlbGVjdGVkVm9jYWI6IFZvY2FiQ2FyZCB8IG51bGxcbiAgICBidXR0b25TZWxlY3RDYXJkOiBTcHJpdGVCdXR0b25cblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6IG51bWJlciwgeTogbnVtYmVyICl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJhZGl1czpudW1iZXIgPSAyNTA7XG4gICAgICAgIGNvbnN0IHRoaWNrbmVzczpudW1iZXIgPSAxNTtcbiAgICAgICAgdGhpcy5vdXRlckNpcmNsZSA9IHNjZW5lLmFkZC5jaXJjbGUoMCwwLHJhZGl1cyxHYW1lTGliLmNvbG9yUGFuZWxCZyk7XG4gICAgICAgIHRoaXMuaW5uZXJDaXJjbGUgPSBzY2VuZS5hZGQuY2lyY2xlKDAsMCxyYWRpdXMtdGhpY2tuZXNzLDB4ZmZmZmZmKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5vdXRlckNpcmNsZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmlubmVyQ2lyY2xlKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYW1lID0gJ01haW5DaXJjbGUnXG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLDAsJz8nLHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzAwcHgnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2MwYzBjMCcsXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsMC41KS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdENhcmQgPSBuZXcgU3ByaXRlQnV0dG9uKHNjZW5lLHJhZGl1cy10aGlja25lc3MvMiwwLCdidXR0b25BZGQnKTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3RDYXJkLm9uUHJlc3NlZENhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ29wZW4tcGFuZWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0ZWRDYXJkKCl7XG4gICAgICAgIC8vIGNsZWFyXG4gICAgICAgIGlmKCB0aGlzLnNlbGVjdGVkVm9jYWIgKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWb2NhYi5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZvY2FiID0gbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU2VsZWN0ZWRDYXJkKCB2b2NhYjpWb2NhYiApe1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRDYXJkKCk7XG5cbiAgICAgICAgdGhpcy5ub0NhcmREaXNwbGF5LnNldFZpc2libGUodHJ1ZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJHYW1lTGliIiwiU3ByaXRlQnV0dG9uIiwiRm9yZ2VNYWluQ2lyY2xlIiwicHJlbG9hZCIsInNjZW5lIiwiY2xlYXJTZWxlY3RlZENhcmQiLCJzZWxlY3RlZFZvY2FiIiwiY2xlYW4iLCJyZW5kZXJTZWxlY3RlZENhcmQiLCJ2b2NhYiIsIm5vQ2FyZERpc3BsYXkiLCJzZXRWaXNpYmxlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIm9yaVgiLCJvcmlZIiwiY29udGFpbmVyIiwiYWRkIiwicmFkaXVzIiwidGhpY2tuZXNzIiwib3V0ZXJDaXJjbGUiLCJjaXJjbGUiLCJjb2xvclBhbmVsQmciLCJpbm5lckNpcmNsZSIsIm5hbWUiLCJ0ZXh0IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJzZXRPcmlnaW4iLCJidXR0b25TZWxlY3RDYXJkIiwib25QcmVzc2VkQ2FsbGJhY2siLCJldmVudHMiLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeMainCircle.ts\n"));

/***/ })

});