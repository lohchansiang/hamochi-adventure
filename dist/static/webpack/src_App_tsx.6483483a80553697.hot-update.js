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

/***/ "./src/game/components/CardMaker/ForgeButton.ts":
/*!******************************************************!*\
  !*** ./src/game/components/CardMaker/ForgeButton.ts ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgeButton; }\n/* harmony export */ });\nclass ForgeButton extends Phaser.GameObjects.Container {\n    static preload(scene) {\n    //\n    }\n    setDisabled(isDisabled) {\n        this.isDisabled = isDisabled;\n        // Update render\n        if (this) {\n            if (this.isDisabled) {\n                var effect = this.postFX.addColorMatrix();\n                effect.grayscale(1, true);\n                this.tweenPulse.pause();\n                this.tweenPulse.reset();\n            } else {\n                this.postFX.clear();\n                this.tweenPulse.pause();\n            }\n        }\n    }\n    constructor(scene, x = 0, y = 0){\n        super(scene, x, y, []);\n        this.isDisabled = false;\n        this.scene = scene;\n        this.spriteBase = this.scene.add.sprite(0, 0, \"buttonCircleAction\");\n        this.spriteHammer = this.scene.add.sprite(0, 0, \"hammer\").setRotation(Phaser.Math.DegToRad(45));\n        this.add(this.spriteBase);\n        this.add(this.spriteHammer);\n        this.spriteBase.setInteractive();\n        this.spriteBase.on(\"pointerdown\", ()=>{\n            if (this.isDisabled) return;\n            this.setScale(1);\n            if (this.onPressedCallback) this.onPressedCallback();\n        }, this);\n        this.spriteBase.on(\"pointerover\", ()=>{\n            if (this.isDisabled) return;\n            this.setScale(1.05);\n        }, this);\n        this.spriteBase.on(\"pointerout\", ()=>{\n            this.setScale(1);\n        }, this);\n        scene.add.existing(this);\n        this.tweenPulse = scene.tweens.add({\n            targets: this,\n            scale: 1.05,\n            duration: 500,\n            repeat: -1,\n            yoyo: true\n        }).pause();\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9Gb3JnZUJ1dHRvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsTUFBTUEsb0JBQW9CQyxPQUFPQyxXQUFXLENBQUNDLFNBQVM7SUFFakUsT0FBT0MsUUFBU0MsS0FBbUIsRUFBRTtJQUNqQyxFQUFFO0lBQ047SUFvREFDLFlBQWFDLFVBQW1CLEVBQUM7UUFDN0IsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1FBRWxCLGdCQUFnQjtRQUNoQixJQUFHLElBQUksRUFBQztZQUNKLElBQUksSUFBSSxDQUFDQSxVQUFVLEVBQUU7Z0JBQ2pCLElBQUlDLFNBQVMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLGNBQWM7Z0JBQ3ZDRixPQUFPRyxTQUFTLENBQUMsR0FBRztnQkFFcEIsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxLQUFLO1lBQ3pCLE9BQUs7Z0JBQ0QsSUFBSSxDQUFDTCxNQUFNLENBQUNNLEtBQUs7Z0JBRWpCLElBQUksQ0FBQ0gsVUFBVSxDQUFDQyxLQUFLO1lBQ3pCO1FBQ0o7SUFDSjtJQTFEQUcsWUFBWVgsS0FBWSxFQUFFWSxJQUFXLENBQUMsRUFBRUMsSUFBVyxDQUFDLENBQUc7UUFDbkQsS0FBSyxDQUFDYixPQUFPWSxHQUFHQyxHQUFHLEVBQUU7YUFOekJYLGFBQXNCO1FBUWxCLElBQUksQ0FBQ0YsS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQ2MsVUFBVSxHQUFHLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFFLEdBQUU7UUFDNUMsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDakIsS0FBSyxDQUFDZSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFFLEdBQUUsVUFBVUUsV0FBVyxDQUFDdEIsT0FBT3VCLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBRXpGLElBQUksQ0FBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQ0QsVUFBVTtRQUN4QixJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNFLFlBQVk7UUFFMUIsSUFBSSxDQUFDSCxVQUFVLENBQUNPLGNBQWM7UUFDOUIsSUFBSSxDQUFDUCxVQUFVLENBQUNRLEVBQUUsQ0FBQyxlQUFjO1lBQzdCLElBQUksSUFBSSxDQUFDcEIsVUFBVSxFQUFHO1lBRXRCLElBQUksQ0FBQ3FCLFFBQVEsQ0FBQztZQUVkLElBQUksSUFBSSxDQUFDQyxpQkFBaUIsRUFBRyxJQUFJLENBQUNBLGlCQUFpQjtRQUN2RCxHQUFFLElBQUk7UUFFTixJQUFJLENBQUNWLFVBQVUsQ0FBQ1EsRUFBRSxDQUFDLGVBQWM7WUFDN0IsSUFBSSxJQUFJLENBQUNwQixVQUFVLEVBQUc7WUFFdEIsSUFBSSxDQUFDcUIsUUFBUSxDQUFDO1FBQ2xCLEdBQUUsSUFBSTtRQUVOLElBQUksQ0FBQ1QsVUFBVSxDQUFDUSxFQUFFLENBQUMsY0FBYTtZQUM1QixJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUNsQixHQUFFLElBQUk7UUFFTnZCLE1BQU1lLEdBQUcsQ0FBQ1UsUUFBUSxDQUFDLElBQUk7UUFFdkIsSUFBSSxDQUFDbEIsVUFBVSxHQUFHUCxNQUFNMEIsTUFBTSxDQUFDWCxHQUFHLENBQUM7WUFDL0JZLFNBQVMsSUFBSTtZQUNiQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsUUFBUSxDQUFDO1lBQ1RDLE1BQU07UUFDVixHQUFHdkIsS0FBSztJQUNaO0FBb0JGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dhbWUvY29tcG9uZW50cy9DYXJkTWFrZXIvRm9yZ2VCdXR0b24udHM/ZDBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFR3ZWVucyB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ2VCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVye1xuICAgIFxuICAgIHN0YXRpYyBwcmVsb2FkKCBzY2VuZTogUGhhc2VyLlNjZW5lICl7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgc2NlbmU6IFNjZW5lXG5cbiAgICBzcHJpdGVCYXNlOiBHYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBzcHJpdGVIYW1tZXI6IEdhbWVPYmplY3RzLlNwcml0ZSBcbiAgICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHR3ZWVuUHVsc2U6IFR3ZWVucy5Ud2VlblxuICAgIG9uUHJlc3NlZENhbGxiYWNrOiBGdW5jdGlvblxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB4Om51bWJlciA9IDAsIHk6bnVtYmVyID0gMCApIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIFtdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICB0aGlzLnNwcml0ZUJhc2UgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdidXR0b25DaXJjbGVBY3Rpb24nKTtcbiAgICAgICAgdGhpcy5zcHJpdGVIYW1tZXIgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwwLCdoYW1tZXInKS5zZXRSb3RhdGlvbihQaGFzZXIuTWF0aC5EZWdUb1JhZCg0NSkpO1xuXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc3ByaXRlQmFzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc3ByaXRlSGFtbWVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlQmFzZS5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLnNwcml0ZUJhc2Uub24oJ3BvaW50ZXJkb3duJywoKT0+e1xuICAgICAgICAgICAgaWYoIHRoaXMuaXNEaXNhYmxlZCApIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcblxuICAgICAgICAgICAgaWYoIHRoaXMub25QcmVzc2VkQ2FsbGJhY2sgKSB0aGlzLm9uUHJlc3NlZENhbGxiYWNrKCk7XG4gICAgICAgIH0sdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGVCYXNlLm9uKCdwb2ludGVyb3ZlcicsKCk9PntcbiAgICAgICAgICAgIGlmKCB0aGlzLmlzRGlzYWJsZWQgKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMS4wNSk7XG4gICAgICAgIH0sdGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwcml0ZUJhc2Uub24oJ3BvaW50ZXJvdXQnLCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgICAgICB9LHRoaXMpO1xuXG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgICAgICB0aGlzLnR3ZWVuUHVsc2UgPSBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICB9KS5wYXVzZSgpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKCBpc0Rpc2FibGVkOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZFxuXG4gICAgICAgIC8vIFVwZGF0ZSByZW5kZXJcbiAgICAgICAgaWYodGhpcyl7XG4gICAgICAgICAgICBpZiggdGhpcy5pc0Rpc2FibGVkICl7XG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IHRoaXMucG9zdEZYLmFkZENvbG9yTWF0cml4KCk7XG4gICAgICAgICAgICAgICAgZWZmZWN0LmdyYXlzY2FsZSgxLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5QdWxzZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5QdWxzZS5yZXNldCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RlguY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5QdWxzZS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9Il0sIm5hbWVzIjpbIkZvcmdlQnV0dG9uIiwiUGhhc2VyIiwiR2FtZU9iamVjdHMiLCJDb250YWluZXIiLCJwcmVsb2FkIiwic2NlbmUiLCJzZXREaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlZmZlY3QiLCJwb3N0RlgiLCJhZGRDb2xvck1hdHJpeCIsImdyYXlzY2FsZSIsInR3ZWVuUHVsc2UiLCJwYXVzZSIsInJlc2V0IiwiY2xlYXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic3ByaXRlQmFzZSIsImFkZCIsInNwcml0ZSIsInNwcml0ZUhhbW1lciIsInNldFJvdGF0aW9uIiwiTWF0aCIsIkRlZ1RvUmFkIiwic2V0SW50ZXJhY3RpdmUiLCJvbiIsInNldFNjYWxlIiwib25QcmVzc2VkQ2FsbGJhY2siLCJleGlzdGluZyIsInR3ZWVucyIsInRhcmdldHMiLCJzY2FsZSIsImR1cmF0aW9uIiwicmVwZWF0IiwieW95byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/ForgeButton.ts\n"));

/***/ })

});