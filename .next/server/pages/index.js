(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Card.module.css */ "./styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/olzu/webbis/dashboard/components/card.tsx";



const Card = project => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), {
      [(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().purple)]: true
    }),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      href: project.url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        children: project.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: project.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: project.tags.map((tag, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: tag
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 23
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 8
  }, undefined);
};

/***/ }),

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// lib/prisma.ts

let prisma;

if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/dashboard.ts":
/*!********************************!*\
  !*** ./pages/api/dashboard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getPublishedProjects": () => (/* binding */ getPublishedProjects),
/* harmony export */   "getNonPublishedProjects": () => (/* binding */ getNonPublishedProjects)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");

const getAllProjects = async () => {
  return await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.project.findMany({
    orderBy: [{
      id: 'asc'
    }]
  });
};
const getPublishedProjects = async () => {
  return await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.project.findMany({
    where: {
      published: true
    },
    orderBy: [{
      id: 'asc'
    }]
  });
};
const getNonPublishedProjects = async () => {
  return await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.project.findMany({
    where: {
      published: false
    },
    orderBy: [{
      id: 'asc'
    }]
  });
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/dashboard */ "./pages/api/dashboard.ts");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ "./components/card.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/olzu/webbis/dashboard/pages/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Home = ({
  projects
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Portfolio Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "Welcome to my page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: "Welcome to my page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), projects.map((project, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.Card, _objectSpread({}, project), index, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        id: -1,
        title: 'About Me',
        description: 'Here you will learn more about me',
        published: true,
        url: 'me',
        tags: ["dev", "info", "hello :)"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

const getStaticProps = async () => {
  const projects = await (0,_api_dashboard__WEBPACK_IMPORTED_MODULE_1__.getPublishedProjects)();
  return {
    props: {
      projects
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./styles/Card.module.css":
/*!********************************!*\
  !*** ./styles/Card.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Card_title__1A-34",
	"description": "Card_description__13FHK",
	"card": "Card_card__2cXDm",
	"purple": "Card_purple__3ol4f"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC"
};


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Rhc2hib2FyZC8uL2xpYi9wcmlzbWEudHMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vcGFnZXMvYXBpL2Rhc2hib2FyZC50cyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3R5bGVzL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgY29uc3QgQ2FyZDpSZWFjdC5GQzxQcm9qZWN0PiA9IChwcm9qZWN0KSA9PiB7XG5cbnJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2FyZCx7W3N0eWxlcy5wdXJwbGVdOnRydWV9KX0+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC51cmx9ID5cbiAgICAgICAgICAgIDxoMj57cHJvamVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZyxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9Pnt0YWd9PC9zcGFuPlxuICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICA8L2Rpdj5cbiAgICBcbn0iLCIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuXG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSc7XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLnByb2plY3QuZmluZE1hbnkoe29yZGVyQnk6W3tpZDonYXNjJ31dfSlcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0UHVibGlzaGVkUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5wcm9qZWN0LmZpbmRNYW55KHt3aGVyZTp7cHVibGlzaGVkOnRydWV9LG9yZGVyQnk6W3tpZDonYXNjJ31dfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vblB1Ymxpc2hlZFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBwcmlzbWEucHJvamVjdC5maW5kTWFueSh7d2hlcmU6e3B1Ymxpc2hlZDpmYWxzZX0sb3JkZXJCeTpbe2lkOidhc2MnfV19KVxufVxuXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLnByaXNtYS9jbGllbnQnXG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSwgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgIGdldFB1Ymxpc2hlZFByb2plY3RzIH0gZnJvbSAnLi9hcGkvZGFzaGJvYXJkJ1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCdcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoe3Byb2plY3RzfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbyBEYXNoYm9hcmQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2VsY29tZSB0byBteSBwYWdlXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byBteSBwYWdlXG4gICAgICAgIDwvaDE+XG5cblxuICAgICAgICB7KHByb2plY3RzIGFzIFByb2plY3RbXSkubWFwKChwcm9qZWN0LGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHsuLi5wcm9qZWN0fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICA8Q2FyZCBpZD17LTF9IHRpdGxlPXsnQWJvdXQgTWUnfSBkZXNjcmlwdGlvbj17J0hlcmUgeW91IHdpbGwgbGVhcm4gbW9yZSBhYm91dCBtZSd9IHB1Ymxpc2hlZD17dHJ1ZX0gdXJsPXsnbWUnfSB0YWdzPXtbXCJkZXZcIixcImluZm9cIiwgXCJoZWxsbyA6KVwiXX0gLz5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gYXdhaXQgZ2V0UHVibGlzaGVkUHJvamVjdHMoKVxuIHJldHVybiB7cHJvcHM6IHtwcm9qZWN0c319XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwiQ2FyZF90aXRsZV9fMUEtMzRcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkNhcmRfZGVzY3JpcHRpb25fXzEzRkhLXCIsXG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fMmNYRG1cIixcblx0XCJwdXJwbGVcIjogXCJDYXJkX3B1cnBsZV9fM29sNGZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJDYXJkIiwicHJvamVjdCIsImNhcmQiLCJwdXJwbGUiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsIm1hcCIsInRhZyIsImluZGV4IiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiZ2V0QWxsUHJvamVjdHMiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJpZCIsImdldFB1Ymxpc2hlZFByb2plY3RzIiwid2hlcmUiLCJwdWJsaXNoZWQiLCJnZXROb25QdWJsaXNoZWRQcm9qZWN0cyIsIkhlYWQiLCJIb21lIiwicHJvamVjdHMiLCJjb250YWluZXIiLCJtYWluIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=