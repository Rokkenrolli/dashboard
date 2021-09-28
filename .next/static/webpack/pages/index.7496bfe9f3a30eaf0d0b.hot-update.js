"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _home_olzu_webbis_dashboard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Card.module.css */ "./styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/olzu/webbis/dashboard/components/card.tsx",
    _this = undefined;




var Card = function Card(project) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card), (0,_home_olzu_webbis_dashboard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().purple), true)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
      href: project.url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        children: project.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: project.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: project.tags.map(function (tag, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: tag
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, _this)
  }, project.id, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 8
  }, _this);
};
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ5NmJmZTlmM2EzMGVhZjBkMGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRU8sSUFBTUUsSUFBc0IsR0FBRyxTQUF6QkEsSUFBeUIsQ0FBQ0MsT0FBRCxFQUFhO0FBRW5ELHNCQUFPO0FBQXNCLGFBQVMsRUFBRUgsaURBQVUsQ0FBQ0MscUVBQUQsbUpBQWVBLHVFQUFmLEVBQThCLElBQTlCLEVBQTNDO0FBQUEsMkJBQ0c7QUFBRyxVQUFJLEVBQUVFLE9BQU8sQ0FBQ0csR0FBakI7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSCxPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBSUosT0FBTyxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUEsa0JBQ0VMLE9BQU8sQ0FBQ00sSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEdBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQy9CLDhCQUFPO0FBQUEsc0JBQW1CRDtBQUFuQixhQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxTQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURILEtBQVVULE9BQU8sQ0FBQ1UsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBYUMsQ0FmTTtLQUFNWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgY29uc3QgQ2FyZDpSZWFjdC5GQzxQcm9qZWN0PiA9IChwcm9qZWN0KSA9PiB7XG5cbnJldHVybiA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jYXJkLHtbc3R5bGVzLnB1cnBsZV06dHJ1ZX0pfT5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnVybH0gPlxuICAgICAgICAgICAgPGgyPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e3RhZ308L3NwYW4+XG4gICAgICAgICAgICAgfSl9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIFxufSJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiQ2FyZCIsInByb2plY3QiLCJjYXJkIiwicHVycGxlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==