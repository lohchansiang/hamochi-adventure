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

/***/ "./src/game/components/CardMaker/HammerBar.ts":
/*!****************************************************!*\
  !*** ./src/game/components/CardMaker/HammerBar.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HammerBar; }\n/* harmony export */ });\nclass HammerBar {\n    static preload(scene) {}\n    renderHammer() {\n        if (this.sprites && this.sprites.length > 0) {\n            this.sprites.forEach((h)=>{\n                h.destroy();\n            });\n        }\n        this.sprites = [];\n        const gap = 150;\n        const totalWidth = gap * (this.manager.maxFailChance - 1);\n        let startX = -(totalWidth / 2);\n        let startY = 0;\n        for(var i = 0; i < this.manager.maxFailChance; i++){\n            if (i < this.manager.currentFailChance) {\n                let sprite = this.scene.add.sprite(startX + gap * i, startY, \"hammer\");\n                sprite.setScale(0.5);\n                sprite.rotation = Phaser.Math.DegToRad(45);\n                this.sprites.push(sprite);\n                this.container.add(sprite);\n            } else {\n                let sprite = this.scene.add.sprite(startX + gap * i, startY, \"hammerBroke\");\n                let cross = this.scene.add.sprite(startX + gap * i, startY, \"iconCross\");\n                cross.setTint(0xff0000);\n                sprite.setScale(0.5);\n                sprite.rotation = Phaser.Math.DegToRad(45);\n                cross.setDisplaySize(50, 50);\n                cross.x += sprite.displayWidth / 3;\n                cross.y += sprite.displayHeight / 3;\n                this.sprites.push(sprite);\n                this.container.add(sprite);\n                this.sprites.push(cross);\n                this.container.add(cross);\n            }\n        }\n    }\n    enter() {\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    exit() {\n        this.clearChoices();\n        // Prepare Tween\n        this.scene.tweens.add({\n            targets: this.container,\n            y: this.oriY + 1000,\n            ease: \"Power2\",\n            duration: 500\n        });\n    }\n    constructor(scene, x, y){\n        this.scene = scene;\n        this.manager = scene.manager;\n        this.oriX = x;\n        this.oriY = y;\n        this.container = scene.add.container(x, y);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9IYW1tZXJCYXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUllLE1BQU1BO0lBRWpCLE9BQU9DLFFBQVNDLEtBQW1CLEVBQUUsQ0FFckM7SUFvQkFDLGVBQWM7UUFDVixJQUFJLElBQUksQ0FBQ0MsT0FBTyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFNLEdBQUcsR0FBRztZQUN6QyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLENBQUNDO2dCQUNsQkEsRUFBRUMsT0FBTztZQUNiO1FBQ0o7UUFFQSxJQUFJLENBQUNKLE9BQU8sR0FBRyxFQUFFO1FBRWpCLE1BQU1LLE1BQWE7UUFDbkIsTUFBTUMsYUFBb0JELE1BQU0sS0FBSSxDQUFDRSxPQUFPLENBQUNDLGFBQWEsR0FBQztRQUMzRCxJQUFJQyxTQUFnQixDQUFHSCxDQUFBQSxhQUFXO1FBQ2xDLElBQUlJLFNBQWdCO1FBQ3BCLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFLElBQUksQ0FBQ0osT0FBTyxDQUFDQyxhQUFhLEVBQUNHLElBQUk7WUFDekMsSUFBSUEsSUFBSSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUlDLFNBQTRCLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDRCxNQUFNLENBQUNKLFNBQVFKLE1BQUlNLEdBQUdELFFBQU87Z0JBRTVFRyxPQUFPRSxRQUFRLENBQUM7Z0JBQ2hCRixPQUFPRyxRQUFRLEdBQUdDLE9BQU9DLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUV2QyxJQUFJLENBQUNuQixPQUFPLENBQUNvQixJQUFJLENBQUNQO2dCQUNsQixJQUFJLENBQUNRLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDRDtZQUN2QixPQUFLO2dCQUNELElBQUlBLFNBQTRCLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDRCxNQUFNLENBQUNKLFNBQVFKLE1BQUlNLEdBQUdELFFBQU87Z0JBQzVFLElBQUlZLFFBQTRCLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDSixTQUFRSixNQUFJTSxHQUFHRCxRQUFPO2dCQUM1RVksTUFBTUMsT0FBTyxDQUFDO2dCQUVkVixPQUFPRSxRQUFRLENBQUM7Z0JBQ2hCRixPQUFPRyxRQUFRLEdBQUdDLE9BQU9DLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUN2Q0csTUFBTUUsY0FBYyxDQUFDLElBQUc7Z0JBQ3hCRixNQUFNRyxDQUFDLElBQUlaLE9BQU9hLFlBQVksR0FBQztnQkFDL0JKLE1BQU1LLENBQUMsSUFBSWQsT0FBT2UsYUFBYSxHQUFDO2dCQUVoQyxJQUFJLENBQUM1QixPQUFPLENBQUNvQixJQUFJLENBQUNQO2dCQUNsQixJQUFJLENBQUNRLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDRDtnQkFFbkIsSUFBSSxDQUFDYixPQUFPLENBQUNvQixJQUFJLENBQUNFO2dCQUNsQixJQUFJLENBQUNELFNBQVMsQ0FBQ1AsR0FBRyxDQUFDUTtZQUN2QjtRQUNKO0lBQ0o7SUFFQU8sUUFBTztRQUNILGdCQUFnQjtRQUNoQixJQUFJLENBQUMvQixLQUFLLENBQUNnQyxNQUFNLENBQUNoQixHQUFHLENBQUM7WUFDbEJpQixTQUFTLElBQUksQ0FBQ1YsU0FBUztZQUN2Qk0sR0FBRyxJQUFJLENBQUNLLElBQUk7WUFDWkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBQyxPQUFNO1FBQ0YsSUFBSSxDQUFDQyxZQUFZO1FBRWpCLGdCQUFnQjtRQUNoQixJQUFJLENBQUN0QyxLQUFLLENBQUNnQyxNQUFNLENBQUNoQixHQUFHLENBQUM7WUFDbEJpQixTQUFTLElBQUksQ0FBQ1YsU0FBUztZQUN2Qk0sR0FBRyxJQUFJLENBQUNLLElBQUksR0FBQztZQUNiQyxNQUFNO1lBQ05DLFVBQVU7UUFDZDtJQUNKO0lBdkVBRyxZQUFhdkMsS0FBZSxFQUFFMkIsQ0FBUSxFQUFFRSxDQUFRLENBQUU7UUFDOUMsSUFBSSxDQUFDN0IsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ1MsT0FBTyxHQUFHVCxNQUFNUyxPQUFPO1FBQzVCLElBQUksQ0FBQytCLElBQUksR0FBR2I7UUFDWixJQUFJLENBQUNPLElBQUksR0FBR0w7UUFFWixJQUFJLENBQUNOLFNBQVMsR0FBR3ZCLE1BQU1nQixHQUFHLENBQUNPLFNBQVMsQ0FBQ0ksR0FBRUU7SUFDM0M7QUFpRUo7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ2FtZS9jb21wb25lbnRzL0NhcmRNYWtlci9IYW1tZXJCYXIudHM/NDIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTWFrZXIgfSBmcm9tIFwiQC9nYW1lL3NjZW5lcy9DYXJkTWFrZXJcIlxuaW1wb3J0IHsgR2FtZU9iamVjdHMgfSBmcm9tIFwicGhhc2VyXCJcbmltcG9ydCBDYXJkTWFrZXJNYW5hZ2VyIGZyb20gXCIuL0NhcmRNYWtlck1hbmFnZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1tZXJCYXJ7XG5cbiAgICBzdGF0aWMgcHJlbG9hZCggc2NlbmU6IFBoYXNlci5TY2VuZSApe1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzY2VuZTogQ2FyZE1ha2VyXG4gICAgbWFuYWdlcjogQ2FyZE1ha2VyTWFuYWdlclxuICAgIC8vXG4gICAgc3ByaXRlczogR2FtZU9iamVjdHMuU3ByaXRlW10gXG4gICAgb3JpWDogbnVtYmVyXG4gICAgb3JpWTogbnVtYmVyXG4gICAgLy9cbiAgICBjb250YWluZXI6IEdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBzY2VuZTpDYXJkTWFrZXIsIHg6bnVtYmVyLCB5Om51bWJlciApe1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gc2NlbmUubWFuYWdlclxuICAgICAgICB0aGlzLm9yaVggPSB4XG4gICAgICAgIHRoaXMub3JpWSA9IHlcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCx5KTtcbiAgICB9XG5cbiAgICByZW5kZXJIYW1tZXIoKXtcbiAgICAgICAgaWYoIHRoaXMuc3ByaXRlcyAmJiB0aGlzLnNwcml0ZXMubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVzLmZvckVhY2goKGg6R2FtZU9iamVjdHMuU3ByaXRlKT0+e1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJpdGVzID0gW11cblxuICAgICAgICBjb25zdCBnYXA6bnVtYmVyID0gMTUwO1xuICAgICAgICBjb25zdCB0b3RhbFdpZHRoOm51bWJlciA9IGdhcCogKHRoaXMubWFuYWdlci5tYXhGYWlsQ2hhbmNlLTEpXG4gICAgICAgIGxldCBzdGFydFg6bnVtYmVyID0gLSAodG90YWxXaWR0aC8yKTsgXG4gICAgICAgIGxldCBzdGFydFk6bnVtYmVyID0gMDsgXG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5tYW5hZ2VyLm1heEZhaWxDaGFuY2U7aSsrKXtcbiAgICAgICAgICAgIGlmKCBpIDwgdGhpcy5tYW5hZ2VyLmN1cnJlbnRGYWlsQ2hhbmNlICl7XG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZTpHYW1lT2JqZWN0cy5TcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoc3RhcnRYKyhnYXAqaSksc3RhcnRZLCdoYW1tZXInKTtcblxuICAgICAgICAgICAgICAgIHNwcml0ZS5zZXRTY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgIHNwcml0ZS5yb3RhdGlvbiA9IFBoYXNlci5NYXRoLkRlZ1RvUmFkKDQ1KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGQoc3ByaXRlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZTpHYW1lT2JqZWN0cy5TcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoc3RhcnRYKyhnYXAqaSksc3RhcnRZLCdoYW1tZXJCcm9rZScpO1xuICAgICAgICAgICAgICAgIGxldCBjcm9zczogR2FtZU9iamVjdHMuU3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHN0YXJ0WCsoZ2FwKmkpLHN0YXJ0WSwnaWNvbkNyb3NzJyk7XG4gICAgICAgICAgICAgICAgY3Jvc3Muc2V0VGludCgweGZmMDAwMCk7XG5cbiAgICAgICAgICAgICAgICBzcHJpdGUuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICBzcHJpdGUucm90YXRpb24gPSBQaGFzZXIuTWF0aC5EZWdUb1JhZCg0NSk7XG4gICAgICAgICAgICAgICAgY3Jvc3Muc2V0RGlzcGxheVNpemUoNTAsNTApO1xuICAgICAgICAgICAgICAgIGNyb3NzLnggKz0gc3ByaXRlLmRpc3BsYXlXaWR0aC8zXG4gICAgICAgICAgICAgICAgY3Jvc3MueSArPSBzcHJpdGUuZGlzcGxheUhlaWdodC8zXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKHNwcml0ZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKGNyb3NzKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZChjcm9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyKCl7XG4gICAgICAgIC8vIFByZXBhcmUgVHdlZW5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgeTogdGhpcy5vcmlZLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMicsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGl0KCl7XG4gICAgICAgIHRoaXMuY2xlYXJDaG9pY2VzKCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBUd2VlblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB5OiB0aGlzLm9yaVkrMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkhhbW1lckJhciIsInByZWxvYWQiLCJzY2VuZSIsInJlbmRlckhhbW1lciIsInNwcml0ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaCIsImRlc3Ryb3kiLCJnYXAiLCJ0b3RhbFdpZHRoIiwibWFuYWdlciIsIm1heEZhaWxDaGFuY2UiLCJzdGFydFgiLCJzdGFydFkiLCJpIiwiY3VycmVudEZhaWxDaGFuY2UiLCJzcHJpdGUiLCJhZGQiLCJzZXRTY2FsZSIsInJvdGF0aW9uIiwiUGhhc2VyIiwiTWF0aCIsIkRlZ1RvUmFkIiwicHVzaCIsImNvbnRhaW5lciIsImNyb3NzIiwic2V0VGludCIsInNldERpc3BsYXlTaXplIiwieCIsImRpc3BsYXlXaWR0aCIsInkiLCJkaXNwbGF5SGVpZ2h0IiwiZW50ZXIiLCJ0d2VlbnMiLCJ0YXJnZXRzIiwib3JpWSIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXQiLCJjbGVhckNob2ljZXMiLCJjb25zdHJ1Y3RvciIsIm9yaVgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/components/CardMaker/HammerBar.ts\n"));

/***/ })

});