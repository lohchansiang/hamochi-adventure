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

/***/ "./src/game/components/PanelSelectCard/VocabCard.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/PanelSelectCard/VocabCard.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VocabCard; }\n/* harmony export */ });\nclass VocabCard {\n    static preload(scene) {}\n    setButtonState(state) {\n        this.buttonState = state;\n        switch(state){\n            case \"selected\":\n                this.container.setScale(1.1);\n                this.cardSelect.setVisible(true);\n                break;\n            default:\n                this.container.setScale(1);\n                this.cardSelect.setVisible(false);\n                this.buttonState = \"default\";\n                break;\n        }\n    }\n    setStatus(status) {\n        this.status = status;\n        switch(status){\n            case \"owned\":\n                this.cardBase.setTexture(\"vocabCardBase\");\n                this.vocabSprite.setVisible(true);\n                break;\n            case \"broken\":\n                this.cardBase.setTexture(\"vocabCardBase\");\n                this.vocabSprite.setVisible(true);\n                var effect = this.container.postFX.addColorMatrix();\n                effect.grayscale(1, true);\n                break;\n            default:\n                // none\n                this.cardBase.setTexture(\"vocabCardBaseBack\");\n                this.vocabSprite.setVisible(false);\n                this.status = \"none\";\n                break;\n        }\n    }\n    clean() {\n        this.container.destroy();\n    }\n    constructor(scene, x, y, width, height, vocab){\n        //\n        this.isDisabled = false;\n        this.scene = scene;\n        this.vocab = vocab;\n        this.container = scene.add.container(x, y);\n        this.containerCard = scene.add.container(0, 0);\n        this.container.add(this.containerCard);\n        this.cardSelect = this.scene.add.rectangle(0, 0, width + 20, height + 20, 0x98dbfa);\n        this.cardSelect.setVisible(false);\n        this.cardBase = this.scene.add.sprite(0, 0, \"vocabCardBase\");\n        this.cardBase.setDisplaySize(width, height);\n        this.vocabSprite = this.scene.add.sprite(0, 0, vocab.textureKey);\n        this.vocabSprite.setDisplaySize(width - 50, width - 50);\n        this.cardBase.setInteractive();\n        this.cardBase.on(\"pointerdown\", ()=>{\n            if (!this.isDisabled && this.onPressCallback) {\n                this.onPressCallback();\n            }\n        }, this);\n        this.container.add(this.cardSelect);\n        this.container.add(this.cardBase);\n        this.container.add(this.vocabSprite);\n        this.setButtonState(\"default\");\n        this.setStatus(\"broken\");\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUllLE1BQU1BO0lBRWpCLE9BQU9DLFFBQVNDLEtBQW1CLEVBQUUsQ0FFckM7SUFnREFDLGVBQWdCQyxLQUFhLEVBQUM7UUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdEO1FBRW5CLE9BQVFBO1lBQ0osS0FBSztnQkFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO2dCQUN4QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDO2dCQUMzQjtZQUNKO2dCQUNJLElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxRQUFRLENBQUM7Z0JBQ3hCLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxVQUFVLENBQUM7Z0JBRTNCLElBQUksQ0FBQ0osV0FBVyxHQUFHO2dCQUNuQjtRQUNSO0lBQ0o7SUFFQUssVUFBV0MsTUFBYyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtRQUVkLE9BQVFBO1lBQ0osS0FBSztnQkFDRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO2dCQUN6QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO2dCQUM1QjtZQUNKLEtBQUs7Z0JBQ0QsSUFBSSxDQUFDRyxRQUFRLENBQUNDLFVBQVUsQ0FBQztnQkFDekIsSUFBSSxDQUFDQyxXQUFXLENBQUNMLFVBQVUsQ0FBQztnQkFDNUIsSUFBSU0sU0FBUyxJQUFJLENBQUNULFNBQVMsQ0FBQ1UsTUFBTSxDQUFDQyxjQUFjO2dCQUNqREYsT0FBT0csU0FBUyxDQUFDLEdBQUc7Z0JBQ3BCO1lBQ0o7Z0JBQ0ksT0FBTztnQkFDUCxJQUFJLENBQUNOLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO2dCQUN6QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO2dCQUM1QixJQUFJLENBQUNFLE1BQU0sR0FBRztnQkFDZDtRQUNSO0lBQ0o7SUFFQVEsUUFBTztRQUNILElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxPQUFPO0lBQzFCO0lBMUVBQyxZQUFhbkIsS0FBVyxFQUFFb0IsQ0FBUSxFQUFFQyxDQUFRLEVBQUVDLEtBQVksRUFBRUMsTUFBYSxFQUFHQyxLQUFXLENBQUU7UUFSekYsRUFBRTthQUNGQyxhQUFzQjtRQVFsQixJQUFJLENBQUN6QixLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDd0IsS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQ3BCLFNBQVMsR0FBR0osTUFBTTBCLEdBQUcsQ0FBQ3RCLFNBQVMsQ0FBQ2dCLEdBQUVDO1FBQ3ZDLElBQUksQ0FBQ00sYUFBYSxHQUFHM0IsTUFBTTBCLEdBQUcsQ0FBQ3RCLFNBQVMsQ0FBQyxHQUFFO1FBQzNDLElBQUksQ0FBQ0EsU0FBUyxDQUFDc0IsR0FBRyxDQUFDLElBQUksQ0FBQ0MsYUFBYTtRQUVyQyxJQUFJLENBQUNyQixVQUFVLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUMwQixHQUFHLENBQUNFLFNBQVMsQ0FBQyxHQUFFLEdBQUVOLFFBQU0sSUFBR0MsU0FBTyxJQUFHO1FBQ2xFLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDO1FBRTNCLElBQUksQ0FBQ0csUUFBUSxHQUFHLElBQUksQ0FBQ1YsS0FBSyxDQUFDMEIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRSxHQUFFO1FBQzFDLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ29CLGNBQWMsQ0FBQ1IsT0FBTUM7UUFFbkMsSUFBSSxDQUFDWCxXQUFXLEdBQUcsSUFBSSxDQUFDWixLQUFLLENBQUMwQixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFFLEdBQUVMLE1BQU1PLFVBQVU7UUFDN0QsSUFBSSxDQUFDbkIsV0FBVyxDQUFDa0IsY0FBYyxDQUFDUixRQUFNLElBQUlBLFFBQU07UUFFaEQsSUFBSSxDQUFDWixRQUFRLENBQUNzQixjQUFjO1FBQzVCLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ3VCLEVBQUUsQ0FBQyxlQUFjO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUNSLFVBQVUsSUFBSSxJQUFJLENBQUNTLGVBQWUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDQSxlQUFlO1lBQ3hCO1FBQ0osR0FBRSxJQUFJO1FBRU4sSUFBSSxDQUFDOUIsU0FBUyxDQUFDc0IsR0FBRyxDQUFDLElBQUksQ0FBQ3BCLFVBQVU7UUFDbEMsSUFBSSxDQUFDRixTQUFTLENBQUNzQixHQUFHLENBQUMsSUFBSSxDQUFDaEIsUUFBUTtRQUNoQyxJQUFJLENBQUNOLFNBQVMsQ0FBQ3NCLEdBQUcsQ0FBQyxJQUFJLENBQUNkLFdBQVc7UUFFbkMsSUFBSSxDQUFDWCxjQUFjLENBQUM7UUFDcEIsSUFBSSxDQUFDTyxTQUFTLENBQUM7SUFDbkI7QUE2Q0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL1BhbmVsU2VsZWN0Q2FyZC9Wb2NhYkNhcmQudHM/MjEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBWb2NhYiB9IGZyb20gXCJAL2xpYi9yZXBvcy9EZWNrUmVwb1wiXG5pbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR5cGVzIH0gZnJvbSBcInBoYXNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvY2FiQ2FyZHtcblxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogUGhhc2VyLlNjZW5lICl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIGNvbnRhaW5lcjogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgY29udGFpbmVyQ2FyZDogR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgY2FyZEJhc2U6IEdhbWVPYmplY3RzLlNwcml0ZVxuICAgIHZvY2FiU3ByaXRlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBjYXJkU2VsZWN0OiBHYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICAvL1xuICAgIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIG9uUHJlc3NDYWxsYmFjazogRnVuY3Rpb24gfCBudWxsXG4gICAgLy9cbiAgICB2b2NhYjogVm9jYWJcbiAgICBidXR0b25TdGF0ZTogc3RyaW5nIC8vIGRlZmF1bHQsIHNlbGVjdGVkLCBkaXNhYmxlZFxuICAgIHN0YXR1czogc3RyaW5nIC8vIG93bmVkLCBicm9rZW4sIG5vbmVcblxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpTY2VuZSwgeDpudW1iZXIsIHk6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIgLCB2b2NhYjpWb2NhYiApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMudm9jYWIgPSB2b2NhYjtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICAgICAgdGhpcy5jb250YWluZXJDYXJkID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLDApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQodGhpcy5jb250YWluZXJDYXJkKTtcblxuICAgICAgICB0aGlzLmNhcmRTZWxlY3QgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwwLHdpZHRoKzIwLGhlaWdodCsyMCwweDk4ZGJmYSk7XG4gICAgICAgIHRoaXMuY2FyZFNlbGVjdC5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNhcmRCYXNlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCwndm9jYWJDYXJkQmFzZScpO1xuICAgICAgICB0aGlzLmNhcmRCYXNlLnNldERpc3BsYXlTaXplKHdpZHRoLGhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnZvY2FiU3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsMCx2b2NhYi50ZXh0dXJlS2V5KTtcbiAgICAgICAgdGhpcy52b2NhYlNwcml0ZS5zZXREaXNwbGF5U2l6ZSh3aWR0aC01MCwgd2lkdGgtNTApO1xuXG4gICAgICAgIHRoaXMuY2FyZEJhc2Uuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgdGhpcy5jYXJkQmFzZS5vbigncG9pbnRlcmRvd24nLCgpPT57XG4gICAgICAgICAgICBpZiggIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLm9uUHJlc3NDYWxsYmFjayApe1xuICAgICAgICAgICAgICAgIHRoaXMub25QcmVzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMuY2FyZFNlbGVjdCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmNhcmRCYXNlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHRoaXMudm9jYWJTcHJpdGUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRCdXR0b25TdGF0ZSgnZGVmYXVsdCcpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cygnYnJva2VuJyk7XG4gICAgfVxuXG4gICAgc2V0QnV0dG9uU3RhdGUoIHN0YXRlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmJ1dHRvblN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldFNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkU2VsZWN0LnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldFNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFNlbGVjdC5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU3RhdGUgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoIHN0YXR1czogc3RyaW5nICl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlICdvd25lZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQmFzZS5zZXRUZXh0dXJlKCd2b2NhYkNhcmRCYXNlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy52b2NhYlNwcml0ZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnJva2VuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRCYXNlLnNldFRleHR1cmUoJ3ZvY2FiQ2FyZEJhc2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZvY2FiU3ByaXRlLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IHRoaXMuY29udGFpbmVyLnBvc3RGWC5hZGRDb2xvck1hdHJpeCgpO1xuICAgICAgICAgICAgICAgIGVmZmVjdC5ncmF5c2NhbGUoMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIG5vbmVcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRCYXNlLnNldFRleHR1cmUoJ3ZvY2FiQ2FyZEJhc2VCYWNrJyk7XG4gICAgICAgICAgICAgICAgdGhpcy52b2NhYlNwcml0ZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuKCl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRlc3Ryb3koKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlZvY2FiQ2FyZCIsInByZWxvYWQiLCJzY2VuZSIsInNldEJ1dHRvblN0YXRlIiwic3RhdGUiLCJidXR0b25TdGF0ZSIsImNvbnRhaW5lciIsInNldFNjYWxlIiwiY2FyZFNlbGVjdCIsInNldFZpc2libGUiLCJzZXRTdGF0dXMiLCJzdGF0dXMiLCJjYXJkQmFzZSIsInNldFRleHR1cmUiLCJ2b2NhYlNwcml0ZSIsImVmZmVjdCIsInBvc3RGWCIsImFkZENvbG9yTWF0cml4IiwiZ3JheXNjYWxlIiwiY2xlYW4iLCJkZXN0cm95IiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwidm9jYWIiLCJpc0Rpc2FibGVkIiwiYWRkIiwiY29udGFpbmVyQ2FyZCIsInJlY3RhbmdsZSIsInNwcml0ZSIsInNldERpc3BsYXlTaXplIiwidGV4dHVyZUtleSIsInNldEludGVyYWN0aXZlIiwib24iLCJvblByZXNzQ2FsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/PanelSelectCard/VocabCard.ts\n"));

/***/ })

});