self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Card.module.css */ "./styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/olzu/webbis/dashboard/components/card.tsx",
    _this = undefined;



var Card = function Card(project) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().grid),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: project.url,
      className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: project.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: project.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: project.tags.map(function (tag, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tag
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, _this)
  }, project.id, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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


/***/ }),

/***/ "./styles/Card.module.css":
/*!********************************!*\
  !*** ./styles/Card.module.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Card.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Card.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Card.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Card.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Card.module.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/Card.module.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Card_title__1A-34 a {\n    color: #0070f3;\n    text-decoration: none;\n  }\n  \n  .Card_title__1A-34 a:hover,\n  .Card_title__1A-34 a:focus,\n  .Card_title__1A-34 a:active {\n    text-decoration: underline;\n  }\n  \n  .Card_title__1A-34 {\n    margin: 0;\n    line-height: 1.15;\n    font-size: 4rem;\n  }\n  \n  .Card_title__1A-34,\n  .Card_description__13FHK {\n    text-align: center;\n  }\n  \n  .Card_description__13FHK {\n    line-height: 1.5;\n    font-size: 1.5rem;\n  }\n  \n  \n  .Card_grid__8KHSM {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center;\n    -webkit-justify-content: center;\n       -moz-box-pack: center;\n            justify-content: center;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    max-width: 800px;\n    margin-top: 3rem;\n  }\n  \n  .Card_card__2cXDm {\n    margin: 1rem;\n    padding: 1.5rem;\n    text-align: left;\n    color: inherit;\n    text-decoration: none;\n    border: 1px solid #eaeaea;\n    border-radius: 10px;\n    -webkit-transition: color 0.15s ease, border-color 0.15s ease;\n    transition: color 0.15s ease, border-color 0.15s ease;\n  }\n  \n  .Card_card__2cXDm:hover,\n  .Card_card__2cXDm:focus,\n  .Card_card__2cXDm:active {\n    color: #0070f3;\n    border-color: #0070f3;\n  }\n  \n  .Card_card__2cXDm h2 {\n    margin: 0 0 1rem 0;\n    font-size: 1.5rem;\n  }\n  \n  .Card_card__2cXDm p {\n    margin: 0;\n    font-size: 1.25rem;\n    line-height: 1.5;\n  }\n  \n  @media (max-width: 600px) {\n    .Card_grid__8KHSM {\n      width: 100%;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n              flex-direction: column;\n    }\n  }", "",{"version":3,"sources":["webpack://styles/Card.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,qBAAqB;EACvB;;EAEA;;;IAGE,0BAA0B;EAC5B;;EAEA;IACE,SAAS;IACT,iBAAiB;IACjB,eAAe;EACjB;;EAEA;;IAEE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;;EAGA;IACE,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,+BAAuB;OAAvB,qBAAuB;YAAvB,uBAAuB;IACvB,uBAAe;YAAf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,6DAAqD;IAArD,qDAAqD;EACvD;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE;MACE,WAAW;MACX,8BAAsB;SAAtB,yBAAsB;SAAtB,0BAAsB;cAAtB,sBAAsB;IACxB;EACF","sourcesContent":[".title a {\n    color: #0070f3;\n    text-decoration: none;\n  }\n  \n  .title a:hover,\n  .title a:focus,\n  .title a:active {\n    text-decoration: underline;\n  }\n  \n  .title {\n    margin: 0;\n    line-height: 1.15;\n    font-size: 4rem;\n  }\n  \n  .title,\n  .description {\n    text-align: center;\n  }\n  \n  .description {\n    line-height: 1.5;\n    font-size: 1.5rem;\n  }\n  \n  \n  .grid {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 800px;\n    margin-top: 3rem;\n  }\n  \n  .card {\n    margin: 1rem;\n    padding: 1.5rem;\n    text-align: left;\n    color: inherit;\n    text-decoration: none;\n    border: 1px solid #eaeaea;\n    border-radius: 10px;\n    transition: color 0.15s ease, border-color 0.15s ease;\n  }\n  \n  .card:hover,\n  .card:focus,\n  .card:active {\n    color: #0070f3;\n    border-color: #0070f3;\n  }\n  \n  .card h2 {\n    margin: 0 0 1rem 0;\n    font-size: 1.5rem;\n  }\n  \n  .card p {\n    margin: 0;\n    font-size: 1.25rem;\n    line-height: 1.5;\n  }\n  \n  @media (max-width: 600px) {\n    .grid {\n      width: 100%;\n      flex-direction: column;\n    }\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": "Card_title__1A-34",
	"description": "Card_description__13FHK",
	"grid": "Card_grid__8KHSM",
	"card": "Card_card__2cXDm"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQ4MTlhOTRjZGYzZDdjNWUxMmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTyxJQUFNQyxJQUFzQixHQUFHLFNBQXpCQSxJQUF5QixDQUFDQyxPQUFELEVBQWE7QUFFbkQsc0JBQU87QUFBc0IsYUFBUyxFQUFFRixxRUFBakM7QUFBQSwyQkFDRztBQUFHLFVBQUksRUFBRUUsT0FBTyxDQUFDRSxHQUFqQjtBQUFzQixlQUFTLEVBQUVKLHFFQUFqQztBQUFBLDhCQUNFO0FBQUEsa0JBQUtFLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFJSixPQUFPLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSxrQkFDRUwsT0FBTyxDQUFDTSxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFLQyxLQUFMLEVBQWU7QUFDL0IsOEJBQU87QUFBQSxzQkFBbUJEO0FBQW5CLGFBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELFNBRkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsS0FBVVQsT0FBTyxDQUFDVSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFhQyxDQWZNO0tBQU1YOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGIsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyxtYUFBNk07O0FBRS9POztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG1hQUE2TTtBQUNuTjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG1hQUE2TTs7QUFFdk87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7QUNuRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLGdFQUFnRSxxQkFBcUIsNEJBQTRCLEtBQUssbUdBQW1HLGlDQUFpQyxLQUFLLDRCQUE0QixnQkFBZ0Isd0JBQXdCLHNCQUFzQixLQUFLLHlEQUF5RCx5QkFBeUIsS0FBSyxrQ0FBa0MsdUJBQXVCLHdCQUF3QixLQUFLLCtCQUErQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixrQ0FBa0MsZ0NBQWdDLGtDQUFrQyxzQ0FBc0MsK0JBQStCLHNDQUFzQyw4QkFBOEIsOEJBQThCLHVCQUF1Qix1QkFBdUIsS0FBSywyQkFBMkIsbUJBQW1CLHNCQUFzQix1QkFBdUIscUJBQXFCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLG9FQUFvRSw0REFBNEQsS0FBSywwRkFBMEYscUJBQXFCLDRCQUE0QixLQUFLLDhCQUE4Qix5QkFBeUIsd0JBQXdCLEtBQUssNkJBQTZCLGdCQUFnQix5QkFBeUIsdUJBQXVCLEtBQUssbUNBQW1DLHlCQUF5QixvQkFBb0IsdUNBQXVDLHFDQUFxQyxzQ0FBc0MsdUNBQXVDLE9BQU8sS0FBSyxPQUFPLHVGQUF1RixVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sbUNBQW1DLHFCQUFxQiw0QkFBNEIsS0FBSywrREFBK0QsaUNBQWlDLEtBQUssZ0JBQWdCLGdCQUFnQix3QkFBd0Isc0JBQXNCLEtBQUssaUNBQWlDLHlCQUF5QixLQUFLLHNCQUFzQix1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQix1QkFBdUIsdUJBQXVCLEtBQUssZUFBZSxtQkFBbUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsNEJBQTRCLGdDQUFnQywwQkFBMEIsNERBQTRELEtBQUssc0RBQXNELHFCQUFxQiw0QkFBNEIsS0FBSyxrQkFBa0IseUJBQXlCLHdCQUF3QixLQUFLLGlCQUFpQixnQkFBZ0IseUJBQXlCLHVCQUF1QixLQUFLLG1DQUFtQyxhQUFhLG9CQUFvQiwrQkFBK0IsT0FBTyxLQUFLLG1CQUFtQjtBQUNwdUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzP2FhZjAiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBDYXJkOlJlYWN0LkZDPFByb2plY3Q+ID0gKHByb2plY3QpID0+IHtcblxucmV0dXJuIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnVybH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgIHtwcm9qZWN0LnRhZ3MubWFwKCh0YWcsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fT57dGFnfTwvc3Bhbj5cbiAgICAgICAgICAgICB9KX0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0NhcmQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vQ2FyZC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9DYXJkLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhcmRfdGl0bGVfXzFBLTM0IGEge1xcbiAgICBjb2xvcjogIzAwNzBmMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgXFxuICAuQ2FyZF90aXRsZV9fMUEtMzQgYTpob3ZlcixcXG4gIC5DYXJkX3RpdGxlX18xQS0zNCBhOmZvY3VzLFxcbiAgLkNhcmRfdGl0bGVfXzFBLTM0IGE6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuICBcXG4gIC5DYXJkX3RpdGxlX18xQS0zNCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG4gIFxcbiAgLkNhcmRfdGl0bGVfXzFBLTM0LFxcbiAgLkNhcmRfZGVzY3JpcHRpb25fXzEzRkhLIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuQ2FyZF9kZXNjcmlwdGlvbl9fMTNGSEsge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIFxcbiAgXFxuICAuQ2FyZF9ncmlkX184S0hTTSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG4gIFxcbiAgLkNhcmRfY2FyZF9fMmNYRG0ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxuICB9XFxuICBcXG4gIC5DYXJkX2NhcmRfXzJjWERtOmhvdmVyLFxcbiAgLkNhcmRfY2FyZF9fMmNYRG06Zm9jdXMsXFxuICAuQ2FyZF9jYXJkX18yY1hEbTphY3RpdmUge1xcbiAgICBjb2xvcjogIzAwNzBmMztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcbiAgfVxcbiAgXFxuICAuQ2FyZF9jYXJkX18yY1hEbSBoMiB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC5DYXJkX2NhcmRfXzJjWERtIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIH1cXG4gIFxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5DYXJkX2dyaWRfXzhLSFNNIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7RUFHQTtJQUNFLHFCQUFhO0lBQWIsaUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQW1CO09BQW5CLHNCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsK0JBQXVCO09BQXZCLHFCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsdUJBQWU7WUFBZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2REFBcUQ7SUFBckQscURBQXFEO0VBQ3ZEOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsOEJBQXNCO1NBQXRCLHlCQUFzQjtTQUF0QiwwQkFBc0I7Y0FBdEIsc0JBQXNCO0lBQ3hCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIGEge1xcbiAgICBjb2xvcjogIzAwNzBmMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgXFxuICAudGl0bGUgYTpob3ZlcixcXG4gIC50aXRsZSBhOmZvY3VzLFxcbiAgLnRpdGxlIGE6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuICBcXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG4gIFxcbiAgLnRpdGxlLFxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIFxcbiAgXFxuICAuZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxuICBcXG4gIC5jYXJkIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbiAgfVxcbiAgXFxuICAuY2FyZDpob3ZlcixcXG4gIC5jYXJkOmZvY3VzLFxcbiAgLmNhcmQ6YWN0aXZlIHtcXG4gICAgY29sb3I6ICMwMDcwZjM7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcXG4gIH1cXG4gIFxcbiAgLmNhcmQgaDIge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgXFxuICAuY2FyZCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuZ3JpZCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwiQ2FyZF90aXRsZV9fMUEtMzRcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkNhcmRfZGVzY3JpcHRpb25fXzEzRkhLXCIsXG5cdFwiZ3JpZFwiOiBcIkNhcmRfZ3JpZF9fOEtIU01cIixcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18yY1hEbVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwicHJvamVjdCIsImdyaWQiLCJ1cmwiLCJjYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==