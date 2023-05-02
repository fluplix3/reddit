/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./main.global.css */ "./src/main.global.css");
var root_1 = __webpack_require__(/*! react-hot-loader/root */ "react-hot-loader/root");
var Content_1 = __webpack_require__(/*! ./shared/Content */ "./src/shared/Content/index.ts");
var Header_1 = __webpack_require__(/*! ./shared/Header */ "./src/shared/Header/index.ts");
var Layout_1 = __webpack_require__(/*! ./shared/Layout */ "./src/shared/Layout/index.ts");
var CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ "./src/shared/CardsList/index.ts");
var redux_1 = __webpack_require__(/*! redux */ "redux");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
var rootReducer_1 = __webpack_require__(/*! ./store/rootReducer */ "./src/store/rootReducer.ts");
var actions_1 = __webpack_require__(/*! ./store/me/actions */ "./src/store/me/actions.ts");
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var ErrorPage_1 = __importDefault(__webpack_require__(/*! ./ErrorPage */ "./src/ErrorPage.tsx"));
var store = redux_1.createStore(rootReducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function AppComponent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
        store.dispatch(actions_1.saveToken());
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: '/posts/' }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: '/posts/' }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/*', element: react_1.default.createElement(CardsList_1.CardsList, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(ErrorPage_1.default, null) }))))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),

/***/ "./src/ErrorPage.tsx":
/*!***************************!*\
  !*** ./src/ErrorPage.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function ErrorPage() {
    return (react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }, id: "error-page" },
        react_1.default.createElement("h1", null, "Oops!"),
        react_1.default.createElement("p", null, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"),
        react_1.default.createElement("p", null,
            react_1.default.createElement("i", null, "404 not found"))));
}
exports.default = ErrorPage;


/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var actions_1 = __webpack_require__(/*! ./../store/me/actions */ "./src/store/me/actions.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var react_1 = __webpack_require__(/*! react */ "react");
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.me.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!token)
            return;
        dispatch(actions_1.meRequestAsync());
    }, [token]);
    return {
        data: data,
        loading: loading
    };
}
exports.useUserData = useUserData;


/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script> \n    window.__token__ = '" + token + "'\n   </script>\n  </head>\n\n<body>\n  <div id=\"react_root\">" + content + "</div>\n  <div id=\"modal_root\"></div>\n  <div id=\"dropdown_root\"></div>\n</body>\n\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
var App_tsx_1 = __webpack_require__(/*! ../App.tsx */ "./src/App.tsx");
var indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ "./src/server/indexTemplate.js");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: { username: 'WHIuLro_4QasFEYt4oo6-g', password: '_Zm_HbgyhsVIoUDQljELCLnIbt00rA' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_tsx_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.get('*', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_tsx_1.App())));
});
app.listen(3000, function () {
    console.log("server started on port http://localhost:3000");
});


/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ "./src/shared/Break/break.css"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    return (react_1.default.createElement("div", { className: classnames_1.default(break_css_1.default["s" + size], (_a = {}, _a[break_css_1.default["mobile_s" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default["tablet_s" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default["desktop_s" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));
}
exports.Break = Break;


/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--rnbuA",
	"s8": "break__s8--2ubV4",
	"s12": "break__s12--3dSW2",
	"s16": "break__s16--2bop2",
	"s20": "break__s20--PBhCB",
	"inline": "break__inline--22pcx",
	"top": "break__top--25ISJ",
	"mobile_s4": "break__mobile_s4--LrEFY",
	"mobile_s8": "break__mobile_s8--1Tmgm",
	"mobile_s12": "break__mobile_s12--2En9X",
	"mobile_s16": "break__mobile_s16--2KmPq",
	"mobile_s20": "break__mobile_s20--1j8g5",
	"tablet_s4": "break__tablet_s4--2nTnL",
	"tablet_s8": "break__tablet_s8--7zEhs",
	"tablet_s12": "break__tablet_s12--3Y-kT",
	"tablet_s16": "break__tablet_s16--2rsLQ",
	"tablet_s20": "break__tablet_s20--V1f92",
	"desktop_s4": "break__desktop_s4--3mFLY",
	"desktop_s8": "break__desktop_s8--2uQYJ",
	"desktop_s12": "break__desktop_s12--1-0wy",
	"desktop_s16": "break__desktop_s16--2k7qE",
	"desktop_s20": "break__desktop_s20--AjVsi"
};


/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Break */ "./src/shared/Break/Break.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ "./src/shared/CardsList/Card/card.css"));
var Controls_1 = __webpack_require__(/*! ./Controls */ "./src/shared/CardsList/Card/Controls/index.ts");
var Menu_1 = __webpack_require__(/*! ./Menu */ "./src/shared/CardsList/Card/Menu/index.ts");
var Preview_1 = __webpack_require__(/*! ./Preview */ "./src/shared/CardsList/Card/Preview/index.ts");
var TextContent_1 = __webpack_require__(/*! ./TextContent */ "./src/shared/CardsList/Card/TextContent/index.ts");
function Card(_a) {
    var post = _a.post;
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { title: post.data.title, author: post.data.author, icon_img: post.data.sr_detail.icon_img, hoursAgo: post.data.wls }),
        react_1.default.createElement(Preview_1.Preview, { header_img: post.data.sr_detail.header_img }),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, { score: post.data.score })));
}
exports.Card = Card;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var CommentsButton_1 = __webpack_require__(/*! ./buttons/CommentsButton */ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/index.ts");
var KarmaCounter_1 = __webpack_require__(/*! ./buttons/KarmaCounter */ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/index.ts");
var SaveButton_1 = __webpack_require__(/*! ./buttons/SaveButton */ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/index.ts");
var ShareButton_1 = __webpack_require__(/*! ./buttons/ShareButton */ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/index.ts");
var controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ "./src/shared/CardsList/Card/Controls/controls.css"));
function Controls(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(ShareButton_1.ShareButton, null),
            react_1.default.createElement(SaveButton_1.SaveButton, null))));
}
exports.Controls = Controls;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/CommentsButton.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/CommentsButton/CommentsButton.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/commentsbutton.css"));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_css_1.default.commentsNumber }, "13")));
}
exports.CommentsButton = CommentsButton;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/commentsbutton.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/CommentsButton/commentsbutton.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--1HmW8",
	"commentsNumber": "commentsbutton__commentsNumber--2nQfv"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/CommentsButton/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./CommentsButton */ "./src/shared/CardsList/Card/Controls/buttons/CommentsButton/CommentsButton.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/KarmaCounter.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/KarmaCounter.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/karmacounter.css"));
function KarmaCounter(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue }, score),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_css_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./KarmaCounter */ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/KarmaCounter.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/karmacounter.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/KarmaCounter/karmacounter.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--3kN49",
	"karmaValue": "karmacounter__karmaValue--3h1Gl",
	"down": "karmacounter__down--2jPrt",
	"up": "karmacounter__up--2-iUh"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/SaveButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/SaveButton/SaveButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/savebutton.css"));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/SaveButton/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./SaveButton */ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/SaveButton.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/SaveButton/savebutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/SaveButton/savebutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "savebutton__saveButton--15-Ix"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/ShareButton.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/ShareButton/ShareButton.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/sharebutton.css"));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/ShareButton/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ShareButton */ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/ShareButton.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/buttons/ShareButton/sharebutton.css":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/buttons/ShareButton/sharebutton.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "sharebutton__shareButton--2SJlK"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI",
	"actions": "controls__actions--1iXY3"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Controls */ "./src/shared/CardsList/Card/Controls/Controls.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/Dropdown.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/Dropdown.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ "./src/shared/CardsList/Card/Dropdown/dropdown.css"));
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var container = document.querySelector('#dropdown_root');
    if (!container) {
        return null;
    }
    var _e = react_1.useState(0), ddCoordinates = _e[0], setDdCoordinates = _e[1];
    var btnRef = react_1.useRef(null);
    var setCoordinates = function () {
        var _a;
        var rect = (_a = btnRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var position = window.pageYOffset;
        setDdCoordinates({
            left: rect === null || rect === void 0 ? void 0 : rect.left,
            top: rect === null || rect === void 0 ? void 0 : rect.top,
            marginTop: position
        });
    };
    react_1.useEffect(function () {
        setCoordinates();
        document.addEventListener('click', setCoordinates);
        return function () {
            document.removeEventListener('click', setCoordinates);
        };
    }, []);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return (react_1.default.createElement("div", { ref: btnRef, className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && react_dom_1.default.createPortal((react_1.default.createElement("div", { style: { marginTop: ddCoordinates.marginTop, top: ddCoordinates.top, left: ddCoordinates.left }, className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))), container)));
}
exports.Dropdown = Dropdown;


/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/dropdown.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/dropdown.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--2i255",
	"listContainer": "dropdown__listContainer--3JAPe",
	"list": "dropdown__list--1fcVH"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Dropdown */ "./src/shared/CardsList/Card/Dropdown/Dropdown.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Dropdown_1 = __webpack_require__(/*! ../Dropdown */ "./src/shared/CardsList/Card/Dropdown/index.ts");
var icons_1 = __webpack_require__(/*! ../../../icons */ "./src/shared/icons/index.ts");
var Text_1 = __webpack_require__(/*! ../../../Text */ "./src/shared/Text/index.ts");
var menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ "./src/shared/CardsList/Card/Menu/menu.css"));
var MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts");
function Menu() {
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
                react_1.default.createElement(icons_1.MenuIcon, null)) }, react_1.default.createElement("div", { className: menu_css_1.default.dropdown },
            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234' }),
            react_1.default.createElement("button", { className: menu_css_1.default.closeButton },
                react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColor.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}
exports.Menu = Menu;


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css"));
var Text_1 = __webpack_require__(/*! ../../../../Text */ "./src/shared/Text/index.ts");
var Icon_1 = __webpack_require__(/*! ../../../../Icon/Icon */ "./src/shared/Icon/Icon.tsx");
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menuitemslist_css_1.default.menuItemsList },
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: 'comment' }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: 'share' }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icon_1.Icon, { name: 'block' }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: 'save' }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: 'warning' }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MenuItemsList */ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--3fgSr",
	"menuItem": "menuitemslist__menuItem--2CsEl",
	"divider": "menuitemslist__divider--1_GEo"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Menu */ "./src/shared/CardsList/Card/Menu/Menu.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--22Yos",
	"menuButton": "menu__menuButton--2RzAb",
	"dropdown": "menu__dropdown--2v5tI",
	"closeButton": "menu__closeButton--1Vmbj"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var NoPhoto_1 = __importDefault(__webpack_require__(/*! ../../../icons/NoPhoto */ "./src/shared/icons/NoPhoto.tsx"));
var preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ "./src/shared/CardsList/Card/Preview/preview.css"));
function Preview(_a) {
    var header_img = _a.header_img;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, header_img
        ? react_1.default.createElement("img", { src: header_img, className: preview_css_1.default.previewImg })
        : react_1.default.createElement(NoPhoto_1.default, null)));
}
exports.Preview = Preview;


/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Preview */ "./src/shared/CardsList/Card/Preview/Preview.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ "./src/shared/CardsList/Card/TextContent/textcontent.css"));
function TextContent(_a) {
    var title = _a.title, author = _a.author, icon_img = _a.icon_img, hoursAgo = _a.hoursAgo;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_css_1.default.userLink },
                icon_img
                    ? react_1.default.createElement("img", { className: textcontent_css_1.default.avatar, src: icon_img, alt: "avatar" })
                    : react_1.default.createElement("svg", { style: { margin: '0 7px 0 0' }, width: "20", height: "20", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })),
                react_1.default.createElement("a", { href: "#user-url", className: textcontent_css_1.default.username }, author)),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                hoursAgo,
                " \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434 \u00A0")),
        react_1.default.createElement("h2", { className: textcontent_css_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/posts/:id', className: textcontent_css_1.default.postLink }, title))));
}
exports.TextContent = TextContent;


/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./TextContent */ "./src/shared/CardsList/Card/TextContent/TextContent.tsx"), exports);


/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RuXa",
	"metaData": "textcontent__metaData--1L7oU",
	"publishedLabel": "textcontent__publishedLabel--C6Pau",
	"createdAt": "textcontent__createdAt--1vECY",
	"userLink": "textcontent__userLink--2KE4t",
	"avatar": "textcontent__avatar--26Ggp"
};


/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-",
	"textContent": "card__textContent--3Ki_7"
};


/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var Post_1 = __importDefault(__webpack_require__(/*! ../Post/Post */ "./src/shared/Post/Post.tsx"));
var Card_1 = __webpack_require__(/*! ./Card/Card */ "./src/shared/CardsList/Card/Card.tsx");
var cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ "./src/shared/CardsList/cardslist.css"));
function CardsList() {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(''), errorLoading = _b[0], setErrorLoading = _b[1];
    var _c = react_1.useState([]), posts = _c[0], setPosts = _c[1];
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var bottomOfList = react_1.useRef(null);
    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = react_1.useState(0), loaderCounter = _e[0], setLoaderCounter = _e[1];
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, after, children_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!token)
                            return [2 /*return*/];
                        if (!(loaderCounter !== 3)) return [3 /*break*/, 5];
                        setLoading(true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {
                                headers: { Authorization: "bearer " + token },
                                params: {
                                    limit: 10,
                                    after: nextAfter,
                                }
                            })];
                    case 2:
                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                        setNextAfter(after);
                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        setErrorLoading(String(error_1));
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        setLoading(false);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                load();
                setLoaderCounter(loaderCounter + 1);
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [token, bottomOfList.current, nextAfter]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList },
            posts.map(function (post) { return react_1.default.createElement(Card_1.Card, { post: post, key: post.data.id }); }),
            react_1.default.createElement("div", { ref: bottomOfList }),
            posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
            loaderCounter == 4 && (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                react_1.default.createElement("button", { onClick: function () { setLoaderCounter(1), load(); } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"))),
            loading && react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
            errorLoading &&
                react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } }, errorLoading)),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/:id', element: react_1.default.createElement(Post_1.default, { title: '', icon_img: '', author: '' }) }))));
}
exports.CardsList = CardsList;


/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ"
};


/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./CardsList */ "./src/shared/CardsList/CardsList.tsx"), exports);


/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jotai_1 = __webpack_require__(/*! jotai */ "jotai");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var commentForm_css_1 = __importDefault(__webpack_require__(/*! ./commentForm.css */ "./src/shared/CommentForm/commentForm.css"));
var textAtom = jotai_1.atom('');
function CommentForm() {
    var _a = jotai_1.useAtom(textAtom), text = _a[0], setText = _a[1];
    var handleChange = function (e) {
        setText(e.target.value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (react_1.default.createElement("form", { className: commentForm_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: commentForm_css_1.default.input, 
            // aria-invalid={errors.comment ? 'true' : undefined}
            value: text, onChange: handleChange }),
        text && react_1.default.createElement("p", null, text),
        react_1.default.createElement("button", { type: 'submit', className: commentForm_css_1.default.button, onClick: function () { setText(''); } }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.default = CommentForm;


/***/ }),

/***/ "./src/shared/CommentForm/commentForm.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentForm.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentForm__form--1-Qyk",
	"input": "commentForm__input--3sIbl",
	"button": "commentForm__button--2efFm"
};


/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ "./src/shared/Content/content.css"));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Content */ "./src/shared/Content/Content.tsx"), exports);


/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ "./src/shared/Header/header.css"));
var SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ "./src/shared/Header/SearchBlock/index.ts");
var SortBlock_1 = __webpack_require__(/*! ./SortBlock */ "./src/shared/Header/SortBlock/index.ts");
var ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ "./src/shared/Header/ThreadTitle/index.ts");
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ "./src/hooks/useUserData.ts");
var searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ "./src/shared/Header/SearchBlock/searchblock.css"));
var UserBlock_1 = __importDefault(__webpack_require__(/*! ./User Block/UserBlock */ "./src/shared/Header/SearchBlock/User Block/UserBlock.tsx"));
function SearchBlock() {
    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.default, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),

/***/ "./src/shared/Header/SearchBlock/User Block/UserBlock.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/User Block/UserBlock.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Break_1 = __webpack_require__(/*! ../../../Break */ "./src/shared/Break/index.ts");
var Icon_1 = __webpack_require__(/*! ../../../Icon */ "./src/shared/Icon/index.ts");
var Text_1 = __webpack_require__(/*! ../../../Text */ "./src/shared/Text/index.ts");
var userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ "./src/shared/Header/SearchBlock/User Block/userblock.css"));
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: 'https://www.reddit.com/api/v1/authorize?client_id=WHIuLro_4QasFEYt4oo6-g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity', className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(Icon_1.Icon, { name: 'anon' })),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));
}
exports.default = UserBlock;


/***/ }),

/***/ "./src/shared/Header/SearchBlock/User Block/userblock.css":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/User Block/userblock.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--2hE4D",
	"avatarBox": "userblock__avatarBox--ca0pl",
	"avatarImage": "userblock__avatarImage--3QoSW",
	"username": "userblock__username--2cN3m"
};


/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./SearchBlock */ "./src/shared/Header/SearchBlock/SearchBlock.tsx"), exports);


/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ "./src/shared/Header/SortBlock/sortblock.css"));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorting dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./SortBlock */ "./src/shared/Header/SortBlock/SortBlock.tsx"), exports);


/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ "./src/shared/Header/ThreadTitle/threadtitle.css"));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ThreadTitle */ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx"), exports);


/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Header */ "./src/shared/Header/Header.tsx"), exports);


/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var BlockIcon_1 = __importDefault(__webpack_require__(/*! ../icons/BlockIcon */ "./src/shared/icons/BlockIcon.tsx"));
var CommentIcon_1 = __importDefault(__webpack_require__(/*! ../icons/CommentIcon */ "./src/shared/icons/CommentIcon.tsx"));
var icons_1 = __webpack_require__(/*! ../icons */ "./src/shared/icons/index.ts");
var SaveIcon_1 = __importDefault(__webpack_require__(/*! ../icons/SaveIcon */ "./src/shared/icons/SaveIcon.tsx"));
var ShareIcon_1 = __importDefault(__webpack_require__(/*! ../icons/ShareIcon */ "./src/shared/icons/ShareIcon.tsx"));
var WarningIcon_1 = __importDefault(__webpack_require__(/*! ../icons/WarningIcon */ "./src/shared/icons/WarningIcon.tsx"));
var IconAnon_1 = __importDefault(__webpack_require__(/*! ../icons/IconAnon */ "./src/shared/icons/IconAnon.tsx"));
exports.EIcons = {
    block: react_1.default.createElement(BlockIcon_1.default, null),
    comment: react_1.default.createElement(CommentIcon_1.default, null),
    menu: react_1.default.createElement(icons_1.MenuIcon, null),
    save: react_1.default.createElement(SaveIcon_1.default, null),
    share: react_1.default.createElement(ShareIcon_1.default, null),
    warning: react_1.default.createElement(WarningIcon_1.default, null),
    anon: react_1.default.createElement(IconAnon_1.default, null)
};
function Icon(props) {
    var name = props.name, _a = props.size, size = _a === void 0 ? 16 : _a;
    return (react_1.default.createElement("div", { style: { width: size, height: size } }, exports.EIcons[name]));
}
exports.Icon = Icon;
exports.default = Icon;


/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Icon */ "./src/shared/Icon/Icon.tsx"), exports);


/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ "./src/shared/Layout/layout.css"));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Layout */ "./src/shared/Layout/Layout.tsx"), exports);


/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),

/***/ "./src/shared/Post/Answer/Answer.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Post/Answer/Answer.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var answer_css_1 = __importDefault(__webpack_require__(/*! ./answer.css */ "./src/shared/Post/Answer/answer.css"));
function Answer(_a) {
    var author = _a.author;
    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];
    var textAreaRef = react_1.useRef(null);
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        console.log(value);
        event.preventDefault();
    }
    return (react_1.default.createElement("form", { className: answer_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: answer_css_1.default.input, defaultValue: author, onChange: handleChange, autoFocus: true, ref: textAreaRef }),
        react_1.default.createElement("button", { type: 'submit', className: answer_css_1.default.button }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")));
}
exports.default = Answer;


/***/ }),

/***/ "./src/shared/Post/Answer/answer.css":
/*!*******************************************!*\
  !*** ./src/shared/Post/Answer/answer.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "answer__form--2Js18",
	"input": "answer__input--1QQOJ",
	"button": "answer__button--3M09W",
	"author": "answer__author--15A3e"
};


/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var CommentForm_1 = __importDefault(__webpack_require__(/*! ../CommentForm/CommentForm */ "./src/shared/CommentForm/CommentForm.tsx"));
var Icon_1 = __webpack_require__(/*! ../Icon */ "./src/shared/Icon/index.ts");
var Answer_1 = __importDefault(__webpack_require__(/*! ./Answer/Answer */ "./src/shared/Post/Answer/Answer.tsx"));
var post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ "./src/shared/Post/post.css"));
function Post(_a) {
    var title = _a.title, icon_img = _a.icon_img, author = _a.author;
    var ref = react_1.useRef(null);
    var navigate = react_router_dom_1.useNavigate();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                navigate(-1);
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    var _b = react_1.useState(false), isAnswerOpened = _b[0], setIsAnswerOpened = _b[1];
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, title),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0441\u0438\u043B\u0438\u0439. \u041D\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0438 \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443\u0434\u0435\u043B\u043E\u043C \u043B\u0438\u0431\u0435\u0440\u0430\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0436\u0430\u0436\u0434\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443."),
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0441\u0438\u043B\u0438\u0439. \u041D\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0438 \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443\u0434\u0435\u043B\u043E\u043C \u043B\u0438\u0431\u0435\u0440\u0430\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0436\u0430\u0436\u0434\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443."),
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0441\u0438\u043B\u0438\u0439. \u041D\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0438 \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443\u0434\u0435\u043B\u043E\u043C \u043B\u0438\u0431\u0435\u0440\u0430\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0436\u0430\u0436\u0434\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443.")),
        react_1.default.createElement(CommentForm_1.default, null),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", { className: post_css_1.default.comment },
                react_1.default.createElement("div", { className: post_css_1.default.commentLeft },
                    react_1.default.createElement("div", { className: post_css_1.default.arrows },
                        react_1.default.createElement("button", { className: post_css_1.default.up },
                            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
                        react_1.default.createElement("button", { className: post_css_1.default.down },
                            react_1.default.createElement("svg", { className: post_css_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })))),
                    react_1.default.createElement("div", { className: post_css_1.default.line },
                        react_1.default.createElement("svg", { width: "3", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("rect", { x: "3", width: "380", height: "2.99998", transform: "rotate(90 3 0)", fill: "#D9D9D9" })))),
                react_1.default.createElement("div", { className: post_css_1.default.rightComment },
                    react_1.default.createElement("div", { className: post_css_1.default.userLink },
                        icon_img
                            ? react_1.default.createElement("img", { className: post_css_1.default.avatar, src: icon_img, alt: "avatar" })
                            : react_1.default.createElement("svg", { style: { margin: '0 7px 0 0' }, width: "20", height: "20", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })),
                        react_1.default.createElement("a", { href: "#user-url", className: post_css_1.default.username }, author),
                        react_1.default.createElement("span", { className: post_css_1.default.hoursAgo }, "1 \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434")),
                    react_1.default.createElement("div", { className: post_css_1.default.textContent }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt necessitatibus earum dolorem. Sed commodi debitis sequi ipsa, amet odit! Possimus, voluptatibus? Maiores, nesciunt? Ratione eaque quod recusandae culpa commodi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolore nulla, beatae aut minus dicta quos, quaerat fugiat fugit et tempora quis aliquid nesciunt quas placeat aliquam odio sit numquam."),
                    react_1.default.createElement("div", { className: post_css_1.default.buttons },
                        react_1.default.createElement("button", { className: post_css_1.default.btnComments },
                            react_1.default.createElement(Icon_1.Icon, { name: "comment" }),
                            react_1.default.createElement("span", { onClick: function () { setIsAnswerOpened(true); }, className: post_css_1.default.hoursAgo }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
                        react_1.default.createElement("button", { className: post_css_1.default.btnComments },
                            react_1.default.createElement(Icon_1.Icon, { name: "share" }),
                            react_1.default.createElement("span", { className: post_css_1.default.hoursAgo }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
                        react_1.default.createElement("button", { className: post_css_1.default.btnComments },
                            react_1.default.createElement(Icon_1.Icon, { name: "warning" }),
                            react_1.default.createElement("span", { className: post_css_1.default.hoursAgo }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
                    isAnswerOpened && (react_1.default.createElement(Answer_1.default, { author: author }))))))), node);
}
exports.default = Post;


/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"content": "post__content--2gFMc",
	"close": "post__close--1HSqz",
	"comment": "post__comment--kSMWx",
	"commentLeft": "post__commentLeft--1rFtD",
	"arrows": "post__arrows--3rHIo",
	"down": "post__down--1Ckos",
	"line": "post__line--1sqkL",
	"avatar": "post__avatar--1-TNv",
	"userLink": "post__userLink--1eIct",
	"username": "post__username--2_mvJ",
	"hoursAgo": "post__hoursAgo--EBT-V",
	"textContent": "post__textContent--3DTMt",
	"buttons": "post__buttons--1JtZ6",
	"btnComments": "post__btnComments--1qSut",
	"up": "post__up--14YMq"
};


/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ "./src/shared/Text/text.css"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["grayF4"] = "grayF4";
    EColor["greyF3"] = "greyF3";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(text_css_1.default["s" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default["d" + desktopSize]] = desktopSize, _d));
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Text */ "./src/shared/Text/Text.tsx"), exports);


/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"white": "text__white--13JGE",
	"grayF4": "text__grayF4--2X2jV",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"upperCase": "text__upperCase--2EMyT",
	"bold": "text__bold--gb02H",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),

/***/ "./src/shared/icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var BlockIcon = function () {
    return (react_1.default.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
};
exports.default = BlockIcon;


/***/ }),

/***/ "./src/shared/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var CommentIcon = function () {
    return (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
};
exports.default = CommentIcon;


/***/ }),

/***/ "./src/shared/icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function IconAnon() {
    return (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.default = IconAnon;


/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),

/***/ "./src/shared/icons/NoPhoto.tsx":
/*!**************************************!*\
  !*** ./src/shared/icons/NoPhoto.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var NoPhoto = function () {
    return (react_1.default.createElement("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 1000.000000 1000.000000", preserveAspectRatio: "xMidYMid meet" },
        react_1.default.createElement("g", { transform: "translate(0.000000,1000.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" })));
};
exports.default = NoPhoto;


/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var SaveIcon = function () {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
};
exports.default = SaveIcon;


/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var ShareIcon = function () {
    return (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
};
exports.default = ShareIcon;


/***/ }),

/***/ "./src/shared/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var WarningIcon = function () {
    return (react_1.default.createElement("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
};
exports.default = WarningIcon;


/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MenuIcon */ "./src/shared/icons/MenuIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./BlockIcon */ "./src/shared/icons/BlockIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./WarningIcon */ "./src/shared/icons/WarningIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./CommentIcon */ "./src/shared/icons/CommentIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./SaveIcon */ "./src/shared/icons/SaveIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./ShareIcon */ "./src/shared/icons/ShareIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./IconAnon */ "./src/shared/icons/IconAnon.tsx"), exports);


/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.tokenRedux = exports.SET_TOKEN = exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = exports.updateComment = exports.UPDATE_COMMENT = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
exports.UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: exports.UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch(exports.meRequest());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + getState().token }
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(exports.meRequestError(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;
exports.SET_TOKEN = 'SET_TOKEN';
var tokenRedux = function (token) { return ({
    type: exports.SET_TOKEN,
    token: token
}); };
exports.tokenRedux = tokenRedux;
var saveToken = function () { return function (dispatch) {
    if (typeof window !== 'undefined') {
        var token = window.__token__;
        if (token.length > 15) {
            dispatch(exports.tokenRedux(token));
        }
    }
}; };
exports.saveToken = saveToken;


/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(/*! ./actions */ "./src/store/me/actions.ts");
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var actions_1 = __webpack_require__(/*! ./me/actions */ "./src/store/me/actions.ts");
var reducer_1 = __webpack_require__(/*! ./me/reducer */ "./src/store/me/reducer.ts");
var initialState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case actions_1.SET_TOKEN:
            return __assign(__assign({}, state), { token: action.token });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jotai");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });