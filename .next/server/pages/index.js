(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,222];
exports.modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAllProjects": () => (/* binding */ getAllProjects),
  "getNonPublishedProjects": () => (/* binding */ getNonPublishedProjects),
  "getPublishedProjects": () => (/* binding */ getPublishedProjects)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts
// lib/prisma.ts

let prisma;

if (true) {
  prisma = new client_namespaceObject.PrismaClient();
} else {}

/* harmony default export */ const lib_prisma = (prisma);
;// CONCATENATED MODULE: ./pages/api/dashboard.ts

const getAllProjects = async () => {
  return await lib_prisma.project.findMany({
    orderBy: [{
      id: 'asc'
    }]
  });
};
const getPublishedProjects = async () => {
  return await lib_prisma.project.findMany({
    where: {
      published: true
    },
    orderBy: [{
      id: 'asc'
    }]
  });
};
const getNonPublishedProjects = async () => {
  return await lib_prisma.project.findMany({
    where: {
      published: false
    },
    orderBy: [{
      id: 'asc'
    }]
  });
};

/***/ }),

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(409);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./pages/api/dashboard.ts + 2 modules
var dashboard = __webpack_require__(186);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: ./styles/Card.module.css
var Card_module = __webpack_require__(564);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/card.tsx




const Card = project => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()((Card_module_default()).card, (Card_module_default())[project.theme]),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: project.url,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: project.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: project.description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: project.tags.map((tag, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: tag
          }, index);
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./pages/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Home = ({
  projects
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Portfolio Dashboard"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Welcome to my page"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Home_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (Home_module_default()).title,
        children: "Welcome to my page"
      }), projects.map((project, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(Card, _objectSpread({}, project), index);
      }), /*#__PURE__*/jsx_runtime_.jsx(Card, {
        id: -1,
        title: 'About Me',
        description: 'Here you will learn more about me',
        published: true,
        url: 'me',
        tags: ["dev", "info", "hello :)"],
        theme: "purple"
      })]
    })]
  });
};

const getStaticProps = async () => {
  const projects = await (0,dashboard.getPublishedProjects)();
  return {
    props: {
      projects
    }
  };
};
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 564:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Card_title__1A-34",
	"description": "Card_description__13FHK",
	"card": "Card_card__2cXDm",
	"purple": "Card_purple__3ol4f",
	"yellow": "Card_yellow__eH_Jm"
};


/***/ }),

/***/ 409:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC"
};


/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(749));
module.exports = __webpack_exports__;

})();