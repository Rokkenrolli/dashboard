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
  }, project.id, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 8
  }, undefined);
};

/***/ }),

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
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
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.js");

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
      }, undefined), projects.map(project => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.Card, _objectSpread({}, project), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        id: 0,
        title: 'About Me',
        description: 'Here you will more about me',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFTyxNQUFNRSxJQUFzQixHQUFJQyxPQUFELElBQWE7QUFFbkQsc0JBQU87QUFBc0IsYUFBUyxFQUFFSCxpREFBVSxDQUFDQyxxRUFBRCxFQUFhO0FBQUMsT0FBQ0EsdUVBQUQsR0FBZ0I7QUFBakIsS0FBYixDQUEzQztBQUFBLDJCQUNHO0FBQUcsVUFBSSxFQUFFRSxPQUFPLENBQUNHLEdBQWpCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0gsT0FBTyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGtCQUFJSixPQUFPLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsa0JBQ0VMLE9BQU8sQ0FBQ00sSUFBUixDQUFhQyxHQUFiLENBQWlCLENBQUNDLEdBQUQsRUFBS0MsS0FBTCxLQUFlO0FBQy9CLDhCQUFPO0FBQUEsc0JBQW1CRDtBQUFuQixhQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDRCxTQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxLQUFVVCxPQUFPLENBQUNVLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQWFDLENBZk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUVBLElBQUlFLE1BQUo7O0FBQ0EsSUFBSSxPQUF1QyxFQUEzQyxNQUVPO0FBQ0wsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEJDLElBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixJQUFJRCx3REFBSixFQUFoQjtBQUNEOztBQUNEQyxFQUFBQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBaEI7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFJTyxNQUFNRSxjQUFjLEdBQUcsWUFBWTtBQUV0QyxTQUFPLE1BQU1GLGlFQUFBLENBQXdCO0FBQUNJLElBQUFBLE9BQU8sRUFBQyxDQUFDO0FBQUNOLE1BQUFBLEVBQUUsRUFBQztBQUFKLEtBQUQ7QUFBVCxHQUF4QixDQUFiO0FBQ0gsQ0FITTtBQU1BLE1BQU1PLG9CQUFvQixHQUFHLFlBQVk7QUFDNUMsU0FBTyxNQUFNTCxpRUFBQSxDQUF3QjtBQUFDTSxJQUFBQSxLQUFLLEVBQUM7QUFBQ0MsTUFBQUEsU0FBUyxFQUFDO0FBQVgsS0FBUDtBQUF3QkgsSUFBQUEsT0FBTyxFQUFDLENBQUM7QUFBQ04sTUFBQUEsRUFBRSxFQUFDO0FBQUosS0FBRDtBQUFoQyxHQUF4QixDQUFiO0FBQ0gsQ0FGTTtBQUlBLE1BQU1VLHVCQUF1QixHQUFHLFlBQVk7QUFDL0MsU0FBTyxNQUFNUixpRUFBQSxDQUF3QjtBQUFDTSxJQUFBQSxLQUFLLEVBQUM7QUFBQ0MsTUFBQUEsU0FBUyxFQUFDO0FBQVgsS0FBUDtBQUF5QkgsSUFBQUEsT0FBTyxFQUFDLENBQUM7QUFBQ04sTUFBQUEsRUFBRSxFQUFDO0FBQUosS0FBRDtBQUFqQyxHQUF4QixDQUFiO0FBQ0gsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVksSUFBYyxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWdFO0FBR3JGLHNCQUNFO0FBQUssYUFBUyxFQUFFekIsMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBTUl5QixRQUFELENBQXdCaEIsR0FBeEIsQ0FBNkJQLE9BQUQsSUFBYTtBQUN4Qyw0QkFDQSw4REFBQyxrREFBRCxvQkFBVUEsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0QsT0FKQSxDQU5ILGVBWUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFFLEVBQUUsQ0FBVjtBQUFhLGFBQUssRUFBRSxVQUFwQjtBQUFnQyxtQkFBVyxFQUFFLDZCQUE3QztBQUE0RSxpQkFBUyxFQUFFLElBQXZGO0FBQTZGLFdBQUcsRUFBRSxJQUFsRztBQUF3RyxZQUFJLEVBQUUsQ0FBQyxLQUFELEVBQU8sTUFBUCxFQUFlLFVBQWY7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0E1QkQ7O0FBOEJPLE1BQU0wQixjQUE2QixHQUFJLFlBQVk7QUFDeEQsUUFBTUgsUUFBUSxHQUFHLE1BQU1OLG9FQUFvQixFQUEzQztBQUNELFNBQU87QUFBQ1UsSUFBQUEsS0FBSyxFQUFFO0FBQUNKLE1BQUFBO0FBQUQ7QUFBUixHQUFQO0FBQ0EsQ0FITTtBQUtQLGlFQUFlRCxJQUFmOzs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vY29tcG9uZW50cy9jYXJkLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9saWIvcHJpc21hLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3BhZ2VzL2FwaS9kYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2Rhc2hib2FyZC8uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi5wcmlzbWEvY2xpZW50XCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzcydcblxuZXhwb3J0IGNvbnN0IENhcmQ6UmVhY3QuRkM8UHJvamVjdD4gPSAocHJvamVjdCkgPT4ge1xuXG5yZXR1cm4gPGRpdiBrZXk9e3Byb2plY3QuaWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2FyZCx7W3N0eWxlcy5wdXJwbGVdOnRydWV9KX0+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC51cmx9ID5cbiAgICAgICAgICAgIDxoMj57cHJvamVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZyxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9Pnt0YWd9PC9zcGFuPlxuICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICA8L2Rpdj5cbiAgICBcbn0iLCIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcblxuIiwiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJztcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcblxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEucHJvamVjdC5maW5kTWFueSh7b3JkZXJCeTpbe2lkOidhc2MnfV19KVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRQdWJsaXNoZWRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLnByb2plY3QuZmluZE1hbnkoe3doZXJlOntwdWJsaXNoZWQ6dHJ1ZX0sb3JkZXJCeTpbe2lkOidhc2MnfV19KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm9uUHVibGlzaGVkUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5wcm9qZWN0LmZpbmRNYW55KHt3aGVyZTp7cHVibGlzaGVkOmZhbHNlfSxvcmRlckJ5Olt7aWQ6J2FzYyd9XX0pXG59XG5cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcucHJpc21hL2NsaWVudCdcbmltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlLCBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyAgZ2V0UHVibGlzaGVkUHJvamVjdHMgfSBmcm9tICcuL2FwaS9kYXNoYm9hcmQnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICh7cHJvamVjdHN9OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9ydGZvbGlvIERhc2hib2FyZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWxjb21lIHRvIG15IHBhZ2VcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIG15IHBhZ2VcbiAgICAgICAgPC9oMT5cblxuXG4gICAgICAgIHsocHJvamVjdHMgYXMgUHJvamVjdFtdKS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPENhcmQgey4uLnByb2plY3R9IC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgXG4gICAgICAgIDxDYXJkIGlkPXswfSB0aXRsZT17J0Fib3V0IE1lJ30gZGVzY3JpcHRpb249eydIZXJlIHlvdSB3aWxsIG1vcmUgYWJvdXQgbWUnfSBwdWJsaXNoZWQ9e3RydWV9IHVybD17J21lJ30gdGFncz17W1wiZGV2XCIsXCJpbmZvXCIsIFwiaGVsbG8gOilcIl19IC8+XG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6R2V0U3RhdGljUHJvcHMgID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGdldFB1Ymxpc2hlZFByb2plY3RzKClcbiByZXR1cm4ge3Byb3BzOiB7cHJvamVjdHN9fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIkNhcmRfdGl0bGVfXzFBLTM0XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJDYXJkX2Rlc2NyaXB0aW9uX18xM0ZIS1wiLFxuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzJjWERtXCIsXG5cdFwicHVycGxlXCI6IFwiQ2FyZF9wdXJwbGVfXzNvbDRmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiQ2FyZCIsInByb2plY3QiLCJjYXJkIiwicHVycGxlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsImlkIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiZ2V0QWxsUHJvamVjdHMiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJnZXRQdWJsaXNoZWRQcm9qZWN0cyIsIndoZXJlIiwicHVibGlzaGVkIiwiZ2V0Tm9uUHVibGlzaGVkUHJvamVjdHMiLCJIZWFkIiwiSG9tZSIsInByb2plY3RzIiwiY29udGFpbmVyIiwibWFpbiIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9