"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-keymap";
exports.ids = ["vendor-chunks/prosemirror-keymap"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-keymap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-keymap/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keydownHandler: () => (/* binding */ keydownHandler),\n/* harmony export */   keymap: () => (/* binding */ keymap)\n/* harmony export */ });\n/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! w3c-keyname */ \"(ssr)/./node_modules/w3c-keyname/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n\n\nconst mac = typeof navigator != \"undefined\" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;\nfunction normalizeKeyName(name) {\n    let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];\n    if (result == \"Space\") result = \" \";\n    let alt, ctrl, shift, meta;\n    for(let i = 0; i < parts.length - 1; i++){\n        let mod = parts[i];\n        if (/^(cmd|meta|m)$/i.test(mod)) meta = true;\n        else if (/^a(lt)?$/i.test(mod)) alt = true;\n        else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;\n        else if (/^s(hift)?$/i.test(mod)) shift = true;\n        else if (/^mod$/i.test(mod)) {\n            if (mac) meta = true;\n            else ctrl = true;\n        } else throw new Error(\"Unrecognized modifier name: \" + mod);\n    }\n    if (alt) result = \"Alt-\" + result;\n    if (ctrl) result = \"Ctrl-\" + result;\n    if (meta) result = \"Meta-\" + result;\n    if (shift) result = \"Shift-\" + result;\n    return result;\n}\nfunction normalize(map) {\n    let copy = Object.create(null);\n    for(let prop in map)copy[normalizeKeyName(prop)] = map[prop];\n    return copy;\n}\nfunction modifiers(name, event, shift = true) {\n    if (event.altKey) name = \"Alt-\" + name;\n    if (event.ctrlKey) name = \"Ctrl-\" + name;\n    if (event.metaKey) name = \"Meta-\" + name;\n    if (shift && event.shiftKey) name = \"Shift-\" + name;\n    return name;\n}\n/**\nCreate a keymap plugin for the given set of bindings.\n\nBindings should map key names to [command](https://prosemirror.net/docs/ref/#commands)-style\nfunctions, which will be called with `(EditorState, dispatch,\nEditorView)` arguments, and should return true when they've handled\nthe key. Note that the view argument isn't part of the command\nprotocol, but can be used as an escape hatch if a binding needs to\ndirectly interact with the UI.\n\nKey names may be strings like `\"Shift-Ctrl-Enter\"`—a key\nidentifier prefixed with zero or more modifiers. Key identifiers\nare based on the strings that can appear in\n[`KeyEvent.key`](https:developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).\nUse lowercase letters to refer to letter keys (or uppercase letters\nif you want shift to be held). You may use `\"Space\"` as an alias\nfor the `\" \"` name.\n\nModifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or\n`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or\n`Meta-`) are recognized. For characters that are created by holding\nshift, the `Shift-` prefix is implied, and should not be added\nexplicitly.\n\nYou can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on\nother platforms.\n\nYou can add multiple keymap plugins to an editor. The order in\nwhich they appear determines their precedence (the ones early in\nthe array get to dispatch first).\n*/ function keymap(bindings) {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({\n        props: {\n            handleKeyDown: keydownHandler(bindings)\n        }\n    });\n}\n/**\nGiven a set of bindings (using the same format as\n[`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown\nhandler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.\n*/ function keydownHandler(bindings) {\n    let map = normalize(bindings);\n    return function(view, event) {\n        let name = (0,w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.keyName)(event), baseName, direct = map[modifiers(name, event)];\n        if (direct && direct(view.state, view.dispatch, view)) return true;\n        // A character key\n        if (name.length == 1 && name != \" \") {\n            if (event.shiftKey) {\n                // In case the name was already modified by shift, try looking\n                // it up without its shift modifier\n                let noShift = map[modifiers(name, event, false)];\n                if (noShift && noShift(view.state, view.dispatch, view)) return true;\n            }\n            if ((event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.base[event.keyCode]) && baseName != name) {\n                // Try falling back to the keyCode when there's a modifier\n                // active or the character produced isn't ASCII, and our table\n                // produces a different name from the the keyCode. See #668,\n                // #1060\n                let fromCode = map[modifiers(baseName, event)];\n                if (fromCode && fromCode(view.state, view.dispatch, view)) return true;\n            }\n        }\n        return false;\n    };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNEO0FBRTNDLE1BQU1HLE1BQU0sT0FBT0MsYUFBYSxjQUFjLHFCQUFxQkMsSUFBSSxDQUFDRCxVQUFVRSxRQUFRLElBQUk7QUFDOUYsU0FBU0MsaUJBQWlCQyxJQUFJO0lBQzFCLElBQUlDLFFBQVFELEtBQUtFLEtBQUssQ0FBQyxXQUFXQyxTQUFTRixLQUFLLENBQUNBLE1BQU1HLE1BQU0sR0FBRyxFQUFFO0lBQ2xFLElBQUlELFVBQVUsU0FDVkEsU0FBUztJQUNiLElBQUlFLEtBQUtDLE1BQU1DLE9BQU9DO0lBQ3RCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixNQUFNRyxNQUFNLEdBQUcsR0FBR0ssSUFBSztRQUN2QyxJQUFJQyxNQUFNVCxLQUFLLENBQUNRLEVBQUU7UUFDbEIsSUFBSSxrQkFBa0JaLElBQUksQ0FBQ2EsTUFDdkJGLE9BQU87YUFDTixJQUFJLFlBQVlYLElBQUksQ0FBQ2EsTUFDdEJMLE1BQU07YUFDTCxJQUFJLHNCQUFzQlIsSUFBSSxDQUFDYSxNQUNoQ0osT0FBTzthQUNOLElBQUksY0FBY1QsSUFBSSxDQUFDYSxNQUN4QkgsUUFBUTthQUNQLElBQUksU0FBU1YsSUFBSSxDQUFDYSxNQUFNO1lBQ3pCLElBQUlmLEtBQ0FhLE9BQU87aUJBRVBGLE9BQU87UUFDZixPQUVJLE1BQU0sSUFBSUssTUFBTSxpQ0FBaUNEO0lBQ3pEO0lBQ0EsSUFBSUwsS0FDQUYsU0FBUyxTQUFTQTtJQUN0QixJQUFJRyxNQUNBSCxTQUFTLFVBQVVBO0lBQ3ZCLElBQUlLLE1BQ0FMLFNBQVMsVUFBVUE7SUFDdkIsSUFBSUksT0FDQUosU0FBUyxXQUFXQTtJQUN4QixPQUFPQTtBQUNYO0FBQ0EsU0FBU1MsVUFBVUMsR0FBRztJQUNsQixJQUFJQyxPQUFPQyxPQUFPQyxNQUFNLENBQUM7SUFDekIsSUFBSyxJQUFJQyxRQUFRSixJQUNiQyxJQUFJLENBQUNmLGlCQUFpQmtCLE1BQU0sR0FBR0osR0FBRyxDQUFDSSxLQUFLO0lBQzVDLE9BQU9IO0FBQ1g7QUFDQSxTQUFTSSxVQUFVbEIsSUFBSSxFQUFFbUIsS0FBSyxFQUFFWixRQUFRLElBQUk7SUFDeEMsSUFBSVksTUFBTUMsTUFBTSxFQUNacEIsT0FBTyxTQUFTQTtJQUNwQixJQUFJbUIsTUFBTUUsT0FBTyxFQUNickIsT0FBTyxVQUFVQTtJQUNyQixJQUFJbUIsTUFBTUcsT0FBTyxFQUNidEIsT0FBTyxVQUFVQTtJQUNyQixJQUFJTyxTQUFTWSxNQUFNSSxRQUFRLEVBQ3ZCdkIsT0FBTyxXQUFXQTtJQUN0QixPQUFPQTtBQUNYO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxHQUNBLFNBQVN3QixPQUFPQyxRQUFRO0lBQ3BCLE9BQU8sSUFBSS9CLHFEQUFNQSxDQUFDO1FBQUVnQyxPQUFPO1lBQUVDLGVBQWVDLGVBQWVIO1FBQVU7SUFBRTtBQUMzRTtBQUNBOzs7O0FBSUEsR0FDQSxTQUFTRyxlQUFlSCxRQUFRO0lBQzVCLElBQUlaLE1BQU1ELFVBQVVhO0lBQ3BCLE9BQU8sU0FBVUksSUFBSSxFQUFFVixLQUFLO1FBQ3hCLElBQUluQixPQUFPUixvREFBT0EsQ0FBQzJCLFFBQVFXLFVBQVVDLFNBQVNsQixHQUFHLENBQUNLLFVBQVVsQixNQUFNbUIsT0FBTztRQUN6RSxJQUFJWSxVQUFVQSxPQUFPRixLQUFLRyxLQUFLLEVBQUVILEtBQUtJLFFBQVEsRUFBRUosT0FDNUMsT0FBTztRQUNYLGtCQUFrQjtRQUNsQixJQUFJN0IsS0FBS0ksTUFBTSxJQUFJLEtBQUtKLFFBQVEsS0FBSztZQUNqQyxJQUFJbUIsTUFBTUksUUFBUSxFQUFFO2dCQUNoQiw4REFBOEQ7Z0JBQzlELG1DQUFtQztnQkFDbkMsSUFBSVcsVUFBVXJCLEdBQUcsQ0FBQ0ssVUFBVWxCLE1BQU1tQixPQUFPLE9BQU87Z0JBQ2hELElBQUllLFdBQVdBLFFBQVFMLEtBQUtHLEtBQUssRUFBRUgsS0FBS0ksUUFBUSxFQUFFSixPQUM5QyxPQUFPO1lBQ2Y7WUFDQSxJQUFJLENBQUNWLE1BQU1JLFFBQVEsSUFBSUosTUFBTUMsTUFBTSxJQUFJRCxNQUFNRyxPQUFPLElBQUl0QixLQUFLbUMsVUFBVSxDQUFDLEtBQUssR0FBRSxLQUMxRUwsQ0FBQUEsV0FBV3JDLDZDQUFJLENBQUMwQixNQUFNaUIsT0FBTyxDQUFDLEtBQUtOLFlBQVk5QixNQUFNO2dCQUN0RCwwREFBMEQ7Z0JBQzFELDhEQUE4RDtnQkFDOUQsNERBQTREO2dCQUM1RCxRQUFRO2dCQUNSLElBQUlxQyxXQUFXeEIsR0FBRyxDQUFDSyxVQUFVWSxVQUFVWCxPQUFPO2dCQUM5QyxJQUFJa0IsWUFBWUEsU0FBU1IsS0FBS0csS0FBSyxFQUFFSCxLQUFLSSxRQUFRLEVBQUVKLE9BQ2hELE9BQU87WUFDZjtRQUNKO1FBQ0EsT0FBTztJQUNYO0FBQ0o7QUFFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmFsb2d1ZXNoaWZ0cy8uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1rZXltYXAvZGlzdC9pbmRleC5qcz8xOGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtleU5hbWUsIGJhc2UgfSBmcm9tICd3M2Mta2V5bmFtZSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdwcm9zZW1pcnJvci1zdGF0ZSc7XG5cbmNvbnN0IG1hYyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gXCJ1bmRlZmluZWRcIiA/IC9NYWN8aVAoaG9uZXxbb2FdZCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSA6IGZhbHNlO1xuZnVuY3Rpb24gbm9ybWFsaXplS2V5TmFtZShuYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gbmFtZS5zcGxpdCgvLSg/ISQpLyksIHJlc3VsdCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChyZXN1bHQgPT0gXCJTcGFjZVwiKVxuICAgICAgICByZXN1bHQgPSBcIiBcIjtcbiAgICBsZXQgYWx0LCBjdHJsLCBzaGlmdCwgbWV0YTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBsZXQgbW9kID0gcGFydHNbaV07XG4gICAgICAgIGlmICgvXihjbWR8bWV0YXxtKSQvaS50ZXN0KG1vZCkpXG4gICAgICAgICAgICBtZXRhID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoL15hKGx0KT8kL2kudGVzdChtb2QpKVxuICAgICAgICAgICAgYWx0ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoL14oY3xjdHJsfGNvbnRyb2wpJC9pLnRlc3QobW9kKSlcbiAgICAgICAgICAgIGN0cmwgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICgvXnMoaGlmdCk/JC9pLnRlc3QobW9kKSlcbiAgICAgICAgICAgIHNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoL15tb2QkL2kudGVzdChtb2QpKSB7XG4gICAgICAgICAgICBpZiAobWFjKVxuICAgICAgICAgICAgICAgIG1ldGEgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGN0cmwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCBtb2RpZmllciBuYW1lOiBcIiArIG1vZCk7XG4gICAgfVxuICAgIGlmIChhbHQpXG4gICAgICAgIHJlc3VsdCA9IFwiQWx0LVwiICsgcmVzdWx0O1xuICAgIGlmIChjdHJsKVxuICAgICAgICByZXN1bHQgPSBcIkN0cmwtXCIgKyByZXN1bHQ7XG4gICAgaWYgKG1ldGEpXG4gICAgICAgIHJlc3VsdCA9IFwiTWV0YS1cIiArIHJlc3VsdDtcbiAgICBpZiAoc2hpZnQpXG4gICAgICAgIHJlc3VsdCA9IFwiU2hpZnQtXCIgKyByZXN1bHQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZShtYXApIHtcbiAgICBsZXQgY29weSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBtYXApXG4gICAgICAgIGNvcHlbbm9ybWFsaXplS2V5TmFtZShwcm9wKV0gPSBtYXBbcHJvcF07XG4gICAgcmV0dXJuIGNvcHk7XG59XG5mdW5jdGlvbiBtb2RpZmllcnMobmFtZSwgZXZlbnQsIHNoaWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChldmVudC5hbHRLZXkpXG4gICAgICAgIG5hbWUgPSBcIkFsdC1cIiArIG5hbWU7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpXG4gICAgICAgIG5hbWUgPSBcIkN0cmwtXCIgKyBuYW1lO1xuICAgIGlmIChldmVudC5tZXRhS2V5KVxuICAgICAgICBuYW1lID0gXCJNZXRhLVwiICsgbmFtZTtcbiAgICBpZiAoc2hpZnQgJiYgZXZlbnQuc2hpZnRLZXkpXG4gICAgICAgIG5hbWUgPSBcIlNoaWZ0LVwiICsgbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbi8qKlxuQ3JlYXRlIGEga2V5bWFwIHBsdWdpbiBmb3IgdGhlIGdpdmVuIHNldCBvZiBiaW5kaW5ncy5cblxuQmluZGluZ3Mgc2hvdWxkIG1hcCBrZXkgbmFtZXMgdG8gW2NvbW1hbmRdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNjb21tYW5kcyktc3R5bGVcbmZ1bmN0aW9ucywgd2hpY2ggd2lsbCBiZSBjYWxsZWQgd2l0aCBgKEVkaXRvclN0YXRlLCBkaXNwYXRjaCxcbkVkaXRvclZpZXcpYCBhcmd1bWVudHMsIGFuZCBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiB0aGV5J3ZlIGhhbmRsZWRcbnRoZSBrZXkuIE5vdGUgdGhhdCB0aGUgdmlldyBhcmd1bWVudCBpc24ndCBwYXJ0IG9mIHRoZSBjb21tYW5kXG5wcm90b2NvbCwgYnV0IGNhbiBiZSB1c2VkIGFzIGFuIGVzY2FwZSBoYXRjaCBpZiBhIGJpbmRpbmcgbmVlZHMgdG9cbmRpcmVjdGx5IGludGVyYWN0IHdpdGggdGhlIFVJLlxuXG5LZXkgbmFtZXMgbWF5IGJlIHN0cmluZ3MgbGlrZSBgXCJTaGlmdC1DdHJsLUVudGVyXCJg4oCUYSBrZXlcbmlkZW50aWZpZXIgcHJlZml4ZWQgd2l0aCB6ZXJvIG9yIG1vcmUgbW9kaWZpZXJzLiBLZXkgaWRlbnRpZmllcnNcbmFyZSBiYXNlZCBvbiB0aGUgc3RyaW5ncyB0aGF0IGNhbiBhcHBlYXIgaW5cbltgS2V5RXZlbnQua2V5YF0oaHR0cHM6ZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleSkuXG5Vc2UgbG93ZXJjYXNlIGxldHRlcnMgdG8gcmVmZXIgdG8gbGV0dGVyIGtleXMgKG9yIHVwcGVyY2FzZSBsZXR0ZXJzXG5pZiB5b3Ugd2FudCBzaGlmdCB0byBiZSBoZWxkKS4gWW91IG1heSB1c2UgYFwiU3BhY2VcImAgYXMgYW4gYWxpYXNcbmZvciB0aGUgYFwiIFwiYCBuYW1lLlxuXG5Nb2RpZmllcnMgY2FuIGJlIGdpdmVuIGluIGFueSBvcmRlci4gYFNoaWZ0LWAgKG9yIGBzLWApLCBgQWx0LWAgKG9yXG5gYS1gKSwgYEN0cmwtYCAob3IgYGMtYCBvciBgQ29udHJvbC1gKSBhbmQgYENtZC1gIChvciBgbS1gIG9yXG5gTWV0YS1gKSBhcmUgcmVjb2duaXplZC4gRm9yIGNoYXJhY3RlcnMgdGhhdCBhcmUgY3JlYXRlZCBieSBob2xkaW5nXG5zaGlmdCwgdGhlIGBTaGlmdC1gIHByZWZpeCBpcyBpbXBsaWVkLCBhbmQgc2hvdWxkIG5vdCBiZSBhZGRlZFxuZXhwbGljaXRseS5cblxuWW91IGNhbiB1c2UgYE1vZC1gIGFzIGEgc2hvcnRoYW5kIGZvciBgQ21kLWAgb24gTWFjIGFuZCBgQ3RybC1gIG9uXG5vdGhlciBwbGF0Zm9ybXMuXG5cbllvdSBjYW4gYWRkIG11bHRpcGxlIGtleW1hcCBwbHVnaW5zIHRvIGFuIGVkaXRvci4gVGhlIG9yZGVyIGluXG53aGljaCB0aGV5IGFwcGVhciBkZXRlcm1pbmVzIHRoZWlyIHByZWNlZGVuY2UgKHRoZSBvbmVzIGVhcmx5IGluXG50aGUgYXJyYXkgZ2V0IHRvIGRpc3BhdGNoIGZpcnN0KS5cbiovXG5mdW5jdGlvbiBrZXltYXAoYmluZGluZ3MpIHtcbiAgICByZXR1cm4gbmV3IFBsdWdpbih7IHByb3BzOiB7IGhhbmRsZUtleURvd246IGtleWRvd25IYW5kbGVyKGJpbmRpbmdzKSB9IH0pO1xufVxuLyoqXG5HaXZlbiBhIHNldCBvZiBiaW5kaW5ncyAodXNpbmcgdGhlIHNhbWUgZm9ybWF0IGFzXG5bYGtleW1hcGBdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNrZXltYXAua2V5bWFwKSksIHJldHVybiBhIFtrZXlkb3duXG5oYW5kbGVyXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8jdmlldy5FZGl0b3JQcm9wcy5oYW5kbGVLZXlEb3duKSB0aGF0IGhhbmRsZXMgdGhlbS5cbiovXG5mdW5jdGlvbiBrZXlkb3duSGFuZGxlcihiaW5kaW5ncykge1xuICAgIGxldCBtYXAgPSBub3JtYWxpemUoYmluZGluZ3MpO1xuICAgIHJldHVybiBmdW5jdGlvbiAodmlldywgZXZlbnQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBrZXlOYW1lKGV2ZW50KSwgYmFzZU5hbWUsIGRpcmVjdCA9IG1hcFttb2RpZmllcnMobmFtZSwgZXZlbnQpXTtcbiAgICAgICAgaWYgKGRpcmVjdCAmJiBkaXJlY3Qodmlldy5zdGF0ZSwgdmlldy5kaXNwYXRjaCwgdmlldykpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gQSBjaGFyYWN0ZXIga2V5XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA9PSAxICYmIG5hbWUgIT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIG5hbWUgd2FzIGFscmVhZHkgbW9kaWZpZWQgYnkgc2hpZnQsIHRyeSBsb29raW5nXG4gICAgICAgICAgICAgICAgLy8gaXQgdXAgd2l0aG91dCBpdHMgc2hpZnQgbW9kaWZpZXJcbiAgICAgICAgICAgICAgICBsZXQgbm9TaGlmdCA9IG1hcFttb2RpZmllcnMobmFtZSwgZXZlbnQsIGZhbHNlKV07XG4gICAgICAgICAgICAgICAgaWYgKG5vU2hpZnQgJiYgbm9TaGlmdCh2aWV3LnN0YXRlLCB2aWV3LmRpc3BhdGNoLCB2aWV3KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IG5hbWUuY2hhckNvZGVBdCgwKSA+IDEyNykgJiZcbiAgICAgICAgICAgICAgICAoYmFzZU5hbWUgPSBiYXNlW2V2ZW50LmtleUNvZGVdKSAmJiBiYXNlTmFtZSAhPSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJ5IGZhbGxpbmcgYmFjayB0byB0aGUga2V5Q29kZSB3aGVuIHRoZXJlJ3MgYSBtb2RpZmllclxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBvciB0aGUgY2hhcmFjdGVyIHByb2R1Y2VkIGlzbid0IEFTQ0lJLCBhbmQgb3VyIHRhYmxlXG4gICAgICAgICAgICAgICAgLy8gcHJvZHVjZXMgYSBkaWZmZXJlbnQgbmFtZSBmcm9tIHRoZSB0aGUga2V5Q29kZS4gU2VlICM2NjgsXG4gICAgICAgICAgICAgICAgLy8gIzEwNjBcbiAgICAgICAgICAgICAgICBsZXQgZnJvbUNvZGUgPSBtYXBbbW9kaWZpZXJzKGJhc2VOYW1lLCBldmVudCldO1xuICAgICAgICAgICAgICAgIGlmIChmcm9tQ29kZSAmJiBmcm9tQ29kZSh2aWV3LnN0YXRlLCB2aWV3LmRpc3BhdGNoLCB2aWV3KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGtleWRvd25IYW5kbGVyLCBrZXltYXAgfTtcbiJdLCJuYW1lcyI6WyJrZXlOYW1lIiwiYmFzZSIsIlBsdWdpbiIsIm1hYyIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsIm5vcm1hbGl6ZUtleU5hbWUiLCJuYW1lIiwicGFydHMiLCJzcGxpdCIsInJlc3VsdCIsImxlbmd0aCIsImFsdCIsImN0cmwiLCJzaGlmdCIsIm1ldGEiLCJpIiwibW9kIiwiRXJyb3IiLCJub3JtYWxpemUiLCJtYXAiLCJjb3B5IiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvcCIsIm1vZGlmaWVycyIsImV2ZW50IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImtleW1hcCIsImJpbmRpbmdzIiwicHJvcHMiLCJoYW5kbGVLZXlEb3duIiwia2V5ZG93bkhhbmRsZXIiLCJ2aWV3IiwiYmFzZU5hbWUiLCJkaXJlY3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwibm9TaGlmdCIsImNoYXJDb2RlQXQiLCJrZXlDb2RlIiwiZnJvbUNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-keymap/dist/index.js\n");

/***/ })

};
;