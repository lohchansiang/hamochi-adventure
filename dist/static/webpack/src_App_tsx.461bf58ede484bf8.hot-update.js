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

/***/ "./src/game/components/GameManager.ts":
/*!********************************************!*\
  !*** ./src/game/components/GameManager.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameManager; }\n/* harmony export */ });\n/* harmony import */ var _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/GameLib */ \"./src/lib/GameLib.ts\");\n\nclass GameManager {\n    heal() {\n        let newHp = this.currentHp + 1;\n        if (newHp >= 0 && newHp <= this.maxHp) {\n            this.currentHp = newHp;\n        }\n        this.scene.events.emit(\"player-update\");\n    }\n    damage() {\n        let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;\n        let newHp = this.currentHp - value;\n        if (newHp < 0) newHp = 0;\n        if (newHp > this.maxHp) newHp = this.maxHp;\n        this.currentHp = newHp;\n        this.scene.events.emit(\"player-update\");\n    }\n    addStep() {\n        let newStep = this.currentStep + 1;\n        if (newStep < 0) newStep = 0;\n        if (newStep > this.maxStep) newStep = this.maxStep;\n        this.currentStep = newStep;\n        this.scene.events.emit(\"player-update\");\n    }\n    addCoin(value) {\n        this.coin += value;\n        this.scene.events.emit(\"player-update\");\n    }\n    getHpString() {\n        return \"Hitpoints: \" + this.currentHp + \"/\" + this.maxHp;\n    }\n    getStepString() {\n        return \"Distance: \" + this.currentStep + \"/\" + this.maxStep;\n    }\n    getCoinString() {\n        return \"Coin: \" + this.coin;\n    }\n    generateCardKeys() {\n        if (this.currentStep == this.maxStep - 1) {\n            this.cardKey1 = \"\";\n            this.cardKey2 = \"end\";\n            this.cardKey3 = \"\";\n        } else {\n            let keys = [\n                \"chest\",\n                \"heal\",\n                \"battle\"\n            ];\n            keys = _lib_GameLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shuffle(keys);\n            this.cardKey1 = keys[0];\n            this.cardKey2 = keys[1];\n            this.cardKey3 = keys[2];\n        }\n    }\n    getCardKey(slotNumber) {\n        if (slotNumber == 1) return this.cardKey1;\n        if (slotNumber == 2) return this.cardKey2;\n        if (slotNumber == 3) return this.cardKey3;\n        return \"\";\n    }\n    clearCardKey(slotKey) {\n        if (slotKey == 1) this.cardKey1 = \"\";\n        if (slotKey == 2) this.cardKey2 = \"\";\n        if (slotKey == 3) this.cardKey3 = \"\";\n        console.log(\"CardKeys > \" + this.cardKey1 + \",\" + this.cardKey2 + \",\" + this.cardKey3);\n        this.scene.events.emit(\"card-update\") // Update Next\n        ;\n    }\n    saveData() {\n        let saveData = {\n            hp: this.currentHp,\n            coin: this.coin,\n            step: this.currentStep,\n            cardKey1: this.cardKey1,\n            cardKey2: this.cardKey2,\n            cardKey3: this.cardKey3,\n            battleSlotNumber: this.battleSlotNumber\n        };\n        this.scene.registry.setFreeze(false);\n        this.scene.registry.set(\"play\", JSON.stringify(saveData));\n        this.scene.registry.setFreeze(true);\n    }\n    loadData() {\n        this.scene.registry.setFreeze(false);\n        if (this.scene.registry.has(\"play\")) {\n            let loadData = JSON.parse(this.scene.registry.get(\"play\"));\n            this.coin = loadData.coin;\n            this.currentHp = loadData.hp;\n            this.currentStep = loadData.step;\n            this.cardKey1 = loadData.cardKey1;\n            this.cardKey2 = loadData.cardKey2;\n            this.cardKey3 = loadData.cardKey3;\n            this.battleSlotNumber = loadData.battleSlotNumber;\n        }\n        this.scene.registry.setFreeze(true);\n        this.scene.events.emit(\"player-update\");\n        this.scene.events.emit(\"card-update\");\n    }\n    clearData() {\n        this.scene.registry.reset();\n    }\n    checkCanNext() {\n        // Can Next if only no battle \n        if (this.cardKey1 == \"battle\") return false;\n        if (this.cardKey2 == \"battle\") return false;\n        if (this.cardKey3 == \"battle\") return false;\n        return true;\n    }\n    checkGameStatus() {\n        let status = \"ongoing\";\n        if (this.currentHp == 0) {\n            status = \"lose\";\n        }\n        // if( this.currentStep == this.maxStep ){\n        //     status = 'win';\n        // }\n        return status;\n    }\n    setBattleSlotNumber(slotNumber) {\n        if (this.getCardKey(slotNumber) == \"battle\") {\n            this.battleSlotNumber = slotNumber;\n            this.scene.events.emit(\"start-battle\");\n        }\n    }\n    setEnd() {\n        this.isEnd = true;\n        this.scene.events.emit(\"player-update\");\n    }\n    constructor(scene){\n        this.maxStep = 5;\n        this.maxHp = 3;\n        //\n        this.currentStep = 0;\n        this.currentHp = 3;\n        this.coin = 0;\n        this.scene = scene;\n        this.isEnd = false;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZDLFlBQVkvQyxLQUFXLENBQUM7YUFkeEJRLFVBQWtCO2FBQ2xCVCxRQUFnQjtRQUNoQixFQUFFO2FBQ0ZRLGNBQXNCO2FBQ3RCVCxZQUFvQjthQUNwQlksT0FBZTtRQVVYLElBQUksQ0FBQ1YsS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQzhDLEtBQUssR0FBRztJQUNqQjtBQThKSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nYW1lL2NvbXBvbmVudHMvR2FtZU1hbmFnZXIudHM/NmE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUxpYiBmcm9tIFwiQC9saWIvR2FtZUxpYlwiXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlcntcblxuICAgIHNjZW5lOiBTY2VuZVxuICAgIG1heFN0ZXA6IG51bWJlciA9IDVcbiAgICBtYXhIcDogbnVtYmVyID0gM1xuICAgIC8vXG4gICAgY3VycmVudFN0ZXA6IG51bWJlciA9IDBcbiAgICBjdXJyZW50SHA6IG51bWJlciA9IDNcbiAgICBjb2luOiBudW1iZXIgPSAwXG4gICAgLy9cbiAgICBjYXJkS2V5MTogc3RyaW5nXG4gICAgY2FyZEtleTI6IHN0cmluZ1xuICAgIGNhcmRLZXkzOiBzdHJpbmdcbiAgICAvL1xuICAgIGJhdHRsZVNsb3ROdW1iZXI6IG51bWJlclxuICAgIGlzRW5kOiBib29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTpTY2VuZSl7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuXG4gICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxuICAgIH1cblxuICAgIGhlYWwoKXtcbiAgICAgICAgbGV0IG5ld0hwID0gdGhpcy5jdXJyZW50SHAgKyAxXG4gICAgICAgIGlmKCBuZXdIcCA+PSAwICYmIG5ld0hwIDw9IHRoaXMubWF4SHAgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhwID0gbmV3SHA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjZW5lLmV2ZW50cy5lbWl0KCdwbGF5ZXItdXBkYXRlJylcbiAgICB9XG5cbiAgICBkYW1hZ2UoIHZhbHVlOiBudW1iZXIgPSAxKXtcbiAgICAgICAgbGV0IG5ld0hwID0gdGhpcy5jdXJyZW50SHAgLSB2YWx1ZVxuICAgICAgICBpZiggbmV3SHAgPCAwICkgbmV3SHAgPSAwXG4gICAgICAgIGlmKCBuZXdIcCA+IHRoaXMubWF4SHAgKSBuZXdIcCA9IHRoaXMubWF4SHBcblxuICAgICAgICB0aGlzLmN1cnJlbnRIcCA9IG5ld0hwO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ3BsYXllci11cGRhdGUnKVxuICAgIH1cblxuICAgIGFkZFN0ZXAoKXtcbiAgICAgICAgbGV0IG5ld1N0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICsgMVxuXG4gICAgICAgIGlmKCBuZXdTdGVwIDwgMCApIG5ld1N0ZXAgPSAwXG4gICAgICAgIGlmKCBuZXdTdGVwID4gdGhpcy5tYXhTdGVwICkgbmV3U3RlcCA9IHRoaXMubWF4U3RlcFxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBuZXdTdGVwO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ3BsYXllci11cGRhdGUnKVxuICAgIH1cblxuICAgIGFkZENvaW4oIHZhbHVlOiBudW1iZXIgKXtcbiAgICAgICAgdGhpcy5jb2luICs9IHZhbHVlXG5cbiAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgncGxheWVyLXVwZGF0ZScpXG4gICAgfVxuXG4gICAgZ2V0SHBTdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiBcIkhpdHBvaW50czogXCIgKyB0aGlzLmN1cnJlbnRIcCArIFwiL1wiICsgdGhpcy5tYXhIcFxuICAgIH1cblxuICAgIGdldFN0ZXBTdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiBcIkRpc3RhbmNlOiBcIiArIHRoaXMuY3VycmVudFN0ZXAgKyBcIi9cIiArIHRoaXMubWF4U3RlcFxuICAgIH1cblxuICAgIGdldENvaW5TdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiBcIkNvaW46IFwiICsgdGhpcy5jb2luXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYXJkS2V5cygpe1xuICAgICAgICBpZiggdGhpcy5jdXJyZW50U3RlcCA9PSB0aGlzLm1heFN0ZXAgLTEgKXtcbiAgICAgICAgICAgIHRoaXMuY2FyZEtleTEgPSAnJ1xuICAgICAgICAgICAgdGhpcy5jYXJkS2V5MiA9ICdlbmQnXG4gICAgICAgICAgICB0aGlzLmNhcmRLZXkzID0gJydcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQga2V5czogc3RyaW5nW10gPSBbJ2NoZXN0JywnaGVhbCcsJ2JhdHRsZSddXG4gICAgICAgICAgICBrZXlzID0gR2FtZUxpYi5zaHVmZmxlKGtleXMpXG5cbiAgICAgICAgICAgIHRoaXMuY2FyZEtleTEgPSBrZXlzWzBdXG4gICAgICAgICAgICB0aGlzLmNhcmRLZXkyID0ga2V5c1sxXVxuICAgICAgICAgICAgdGhpcy5jYXJkS2V5MyA9IGtleXNbMl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENhcmRLZXkoIHNsb3ROdW1iZXI6IG51bWJlcik6c3RyaW5ne1xuICAgICAgICBpZiggc2xvdE51bWJlciA9PSAxICkgcmV0dXJuIHRoaXMuY2FyZEtleTE7XG4gICAgICAgIGlmKCBzbG90TnVtYmVyID09IDIgKSByZXR1cm4gdGhpcy5jYXJkS2V5MjtcbiAgICAgICAgaWYoIHNsb3ROdW1iZXIgPT0gMyApIHJldHVybiB0aGlzLmNhcmRLZXkzO1xuXG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBcbiAgICBjbGVhckNhcmRLZXkoIHNsb3RLZXk6IG51bWJlciApe1xuICAgICAgICBpZiggc2xvdEtleSA9PSAxICkgdGhpcy5jYXJkS2V5MSA9ICcnO1xuICAgICAgICBpZiggc2xvdEtleSA9PSAyICkgdGhpcy5jYXJkS2V5MiA9ICcnO1xuICAgICAgICBpZiggc2xvdEtleSA9PSAzICkgdGhpcy5jYXJkS2V5MyA9ICcnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIkNhcmRLZXlzID4gXCIgKyB0aGlzLmNhcmRLZXkxICsgXCIsXCIgKyB0aGlzLmNhcmRLZXkyICsgXCIsXCIgKyB0aGlzLmNhcmRLZXkzKTtcbiAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgnY2FyZC11cGRhdGUnKSAvLyBVcGRhdGUgTmV4dFxuICAgIH1cblxuICAgIHNhdmVEYXRhKCl7XG4gICAgICAgIGxldCBzYXZlRGF0YSA9IHtcbiAgICAgICAgICAgIGhwOiB0aGlzLmN1cnJlbnRIcCxcbiAgICAgICAgICAgIGNvaW46IHRoaXMuY29pbixcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuY3VycmVudFN0ZXAsXG4gICAgICAgICAgICBjYXJkS2V5MTogdGhpcy5jYXJkS2V5MSxcbiAgICAgICAgICAgIGNhcmRLZXkyOiB0aGlzLmNhcmRLZXkyLFxuICAgICAgICAgICAgY2FyZEtleTM6IHRoaXMuY2FyZEtleTMsXG4gICAgICAgICAgICBiYXR0bGVTbG90TnVtYmVyOiB0aGlzLmJhdHRsZVNsb3ROdW1iZXJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NlbmUucmVnaXN0cnkuc2V0RnJlZXplKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY2VuZS5yZWdpc3RyeS5zZXQoJ3BsYXknLCBKU09OLnN0cmluZ2lmeShzYXZlRGF0YSkpO1xuICAgICAgICB0aGlzLnNjZW5lLnJlZ2lzdHJ5LnNldEZyZWV6ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpe1xuICAgICAgICB0aGlzLnNjZW5lLnJlZ2lzdHJ5LnNldEZyZWV6ZShmYWxzZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuc2NlbmUucmVnaXN0cnkuaGFzKCdwbGF5JykgKXtcbiAgICAgICAgICAgIGxldCBsb2FkRGF0YSA9IEpTT04ucGFyc2UodGhpcy5zY2VuZS5yZWdpc3RyeS5nZXQoJ3BsYXknKSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29pbiA9IGxvYWREYXRhLmNvaW5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEhwID0gbG9hZERhdGEuaHBcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBsb2FkRGF0YS5zdGVwXG4gICAgICAgICAgICB0aGlzLmNhcmRLZXkxID0gbG9hZERhdGEuY2FyZEtleTFcbiAgICAgICAgICAgIHRoaXMuY2FyZEtleTIgPSBsb2FkRGF0YS5jYXJkS2V5MlxuICAgICAgICAgICAgdGhpcy5jYXJkS2V5MyA9IGxvYWREYXRhLmNhcmRLZXkzXG4gICAgICAgICAgICB0aGlzLmJhdHRsZVNsb3ROdW1iZXIgPSBsb2FkRGF0YS5iYXR0bGVTbG90TnVtYmVyXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUucmVnaXN0cnkuc2V0RnJlZXplKHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ3BsYXllci11cGRhdGUnKVxuICAgICAgICB0aGlzLnNjZW5lLmV2ZW50cy5lbWl0KCdjYXJkLXVwZGF0ZScpXG4gICAgfVxuXG4gICAgY2xlYXJEYXRhKCl7XG4gICAgICAgIHRoaXMuc2NlbmUucmVnaXN0cnkucmVzZXQoKVxuICAgIH1cblxuICAgIGNoZWNrQ2FuTmV4dCgpOmJvb2xlYW57XG4gICAgICAgIC8vIENhbiBOZXh0IGlmIG9ubHkgbm8gYmF0dGxlIFxuICAgICAgICBpZiggdGhpcy5jYXJkS2V5MSA9PSAnYmF0dGxlJyApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYoIHRoaXMuY2FyZEtleTIgPT0gJ2JhdHRsZScgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKCB0aGlzLmNhcmRLZXkzID09ICdiYXR0bGUnICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrR2FtZVN0YXR1cygpOnN0cmluZ3tcbiAgICAgICAgbGV0IHN0YXR1czpzdHJpbmcgPSAnb25nb2luZyc7XG5cbiAgICAgICAgaWYoIHRoaXMuY3VycmVudEhwID09IDAgKXtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdsb3NlJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKCB0aGlzLmN1cnJlbnRTdGVwID09IHRoaXMubWF4U3RlcCApe1xuICAgICAgICAvLyAgICAgc3RhdHVzID0gJ3dpbic7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gc3RhdHVzXG4gICAgfVxuXG4gICAgc2V0QmF0dGxlU2xvdE51bWJlciggc2xvdE51bWJlcjogbnVtYmVyICl7XG4gICAgICAgIGlmKCB0aGlzLmdldENhcmRLZXkoc2xvdE51bWJlcikgPT0gJ2JhdHRsZScgKXtcbiAgICAgICAgICAgIHRoaXMuYmF0dGxlU2xvdE51bWJlciA9IHNsb3ROdW1iZXJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZXZlbnRzLmVtaXQoJ3N0YXJ0LWJhdHRsZScpXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBzZXRFbmQoKXtcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5ldmVudHMuZW1pdCgncGxheWVyLXVwZGF0ZScpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZUxpYiIsIkdhbWVNYW5hZ2VyIiwiaGVhbCIsIm5ld0hwIiwiY3VycmVudEhwIiwibWF4SHAiLCJzY2VuZSIsImV2ZW50cyIsImVtaXQiLCJkYW1hZ2UiLCJ2YWx1ZSIsImFkZFN0ZXAiLCJuZXdTdGVwIiwiY3VycmVudFN0ZXAiLCJtYXhTdGVwIiwiYWRkQ29pbiIsImNvaW4iLCJnZXRIcFN0cmluZyIsImdldFN0ZXBTdHJpbmciLCJnZXRDb2luU3RyaW5nIiwiZ2VuZXJhdGVDYXJkS2V5cyIsImNhcmRLZXkxIiwiY2FyZEtleTIiLCJjYXJkS2V5MyIsImtleXMiLCJzaHVmZmxlIiwiZ2V0Q2FyZEtleSIsInNsb3ROdW1iZXIiLCJjbGVhckNhcmRLZXkiLCJzbG90S2V5IiwiY29uc29sZSIsImxvZyIsInNhdmVEYXRhIiwiaHAiLCJzdGVwIiwiYmF0dGxlU2xvdE51bWJlciIsInJlZ2lzdHJ5Iiwic2V0RnJlZXplIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWREYXRhIiwiaGFzIiwicGFyc2UiLCJnZXQiLCJjbGVhckRhdGEiLCJyZXNldCIsImNoZWNrQ2FuTmV4dCIsImNoZWNrR2FtZVN0YXR1cyIsInN0YXR1cyIsInNldEJhdHRsZVNsb3ROdW1iZXIiLCJzZXRFbmQiLCJpc0VuZCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/components/GameManager.ts\n"));

/***/ })

});