/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/const.js":
/*!******************************!*\
  !*** ./src/modules/const.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "COUNT_PAGINATION": () => (/* binding */ COUNT_PAGINATION),
/* harmony export */   "DATA": () => (/* binding */ DATA),
/* harmony export */   "TITLE": () => (/* binding */ TITLE),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "hero": () => (/* binding */ hero),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
var COUNT_PAGINATION = 3;
var DATA = {};
var API_URL = 'http://localhost:8024';
var TITLE = {
  women: {
    title: 'Новая коллекция Бюстгальтер-балконет ',
    id: '2269903069'
  },
  men: {
    title: 'Боксеры из новой коллекции',
    id: '3215522146'
  }
};
var header = document.querySelector('.header'),
  nav = document.querySelector('.navigation'),
  main = document.querySelector('main'),
  hero = document.querySelector('.hero'),
  products = document.querySelector('.goods'),
  footer = document.querySelector('.footer');

/***/ }),

/***/ "./src/modules/controllers/categoryPageController.js":
/*!***********************************************************!*\
  !*** ./src/modules/controllers/categoryPageController.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryPageController": () => (/* binding */ categoryPageController)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _render_renderHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderHero */ "./src/modules/render/renderHero.js");
/* harmony import */ var _render_renderNavigaion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderNavigaion */ "./src/modules/render/renderNavigaion.js");
/* harmony import */ var _render_renderProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderProduct */ "./src/modules/render/renderProduct.js");




var categoryPageController = function categoryPageController(routerData) {
  var _routerData$params;
  var _routerData$data = routerData.data,
    gender = _routerData$data.gender,
    category = _routerData$data.category;
  var params = {
    gender: gender,
    category: category
  };
  if ((_routerData$params = routerData.params) !== null && _routerData$params !== void 0 && _routerData$params.page) {
    params.page = routerData.params.page;
  }
  var _DATA$navigation$gend = _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation[gender].list.find(function (item) {
      return item.slug === category;
    }),
    title = _DATA$navigation$gend.title;
  (0,_render_renderNavigaion__WEBPACK_IMPORTED_MODULE_2__.renderNaviagtion)(gender, category);
  (0,_render_renderHero__WEBPACK_IMPORTED_MODULE_1__.renderHero)(false);
  (0,_render_renderProduct__WEBPACK_IMPORTED_MODULE_3__.renderProducts)(title, params);
};

/***/ }),

/***/ "./src/modules/controllers/favoriteController.js":
/*!*******************************************************!*\
  !*** ./src/modules/controllers/favoriteController.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "favoriteController": () => (/* binding */ favoriteController),
/* harmony export */   "getFavorite": () => (/* binding */ getFavorite)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _render_renderHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderHero */ "./src/modules/render/renderHero.js");
/* harmony import */ var _render_renderNavigaion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderNavigaion */ "./src/modules/render/renderNavigaion.js");
/* harmony import */ var _render_renderProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderProduct */ "./src/modules/render/renderProduct.js");





// ! - When information gets extracted from local storage it's a JSON - string!!!
var getFavorite = function getFavorite() {
  return JSON.parse(localStorage.getItem('favorite') || '[]');
};
var addFavorite = function addFavorite(id) {
  var favoriteList = getFavorite();
  favoriteList.push(id);
  localStorage.setItem('favorite', JSON.stringify(favoriteList));
};
var removeFavorite = function removeFavorite(id) {
  var favoriteList = getFavorite();
  var index = favoriteList.findIndex(function (item) {
    return item === id;
  });
  if (index === -1) {
    return;
  }
  favoriteList.splice(index, 1);
  localStorage.setItem('favorite', JSON.stringify(favoriteList));
};
_const__WEBPACK_IMPORTED_MODULE_0__.products.addEventListener('click', function (ev) {
  var target = ev.target;
  if (target.matches('.favorite--active')) {
    removeFavorite(target.dataset.id);
    target.classList.remove('favorite--active');
    return;
  }
  if (target.matches('.favorite')) {
    addFavorite(target.dataset.id);
    target.classList.add('favorite--active');
    return;
  }
});

//? - rendering
var favoriteController = function favoriteController() {
  (0,_render_renderNavigaion__WEBPACK_IMPORTED_MODULE_2__.renderNaviagtion)('all');
  (0,_render_renderHero__WEBPACK_IMPORTED_MODULE_1__.renderHero)(false);
  (0,_render_renderProduct__WEBPACK_IMPORTED_MODULE_3__.renderProducts)('Избранное', {
    list: getFavorite()
  });
};

/***/ }),

/***/ "./src/modules/controllers/mainPageController.js":
/*!*******************************************************!*\
  !*** ./src/modules/controllers/mainPageController.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPageController": () => (/* binding */ mainPageController)
/* harmony export */ });
/* harmony import */ var _render_renderHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderHero */ "./src/modules/render/renderHero.js");
/* harmony import */ var _render_renderNavigaion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderNavigaion */ "./src/modules/render/renderNavigaion.js");
/* harmony import */ var _render_renderProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderProduct */ "./src/modules/render/renderProduct.js");



var mainPageController = function mainPageController() {
  var gender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'women';
  (0,_render_renderNavigaion__WEBPACK_IMPORTED_MODULE_1__.renderNaviagtion)(gender);
  (0,_render_renderHero__WEBPACK_IMPORTED_MODULE_0__.renderHero)(gender);
  (0,_render_renderProduct__WEBPACK_IMPORTED_MODULE_2__.renderProducts)('новинки', {
    gender: gender
  });
};

/***/ }),

/***/ "./src/modules/controllers/searchController.js":
/*!*****************************************************!*\
  !*** ./src/modules/controllers/searchController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchController": () => (/* binding */ searchController),
/* harmony export */   "searchPageController": () => (/* binding */ searchPageController)
/* harmony export */ });
/* harmony import */ var _render_renderHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderHero */ "./src/modules/render/renderHero.js");
/* harmony import */ var _render_renderNavigaion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderNavigaion */ "./src/modules/render/renderNavigaion.js");
/* harmony import */ var _render_renderProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderProduct */ "./src/modules/render/renderProduct.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/router */ "./src/modules/utils/router.js");




var searchController = function searchController(formSearch) {
  formSearch.addEventListener('submit', function (ev) {
    ev.preventDefault();
    _utils_router__WEBPACK_IMPORTED_MODULE_3__.router.navigate("search?value=".concat(formSearch.search.value));
  });
};
var searchPageController = function searchPageController(routerData) {
  var _routerData$params;
  var params = {
    search: routerData.params.value
  };
  if ((_routerData$params = routerData.params) !== null && _routerData$params !== void 0 && _routerData$params.page) {
    params.page = routerData.params.page;
  }
  (0,_render_renderNavigaion__WEBPACK_IMPORTED_MODULE_1__.renderNaviagtion)('all');
  (0,_render_renderHero__WEBPACK_IMPORTED_MODULE_0__.renderHero)(false);
  (0,_render_renderProduct__WEBPACK_IMPORTED_MODULE_2__.renderProducts)(routerData.params.value, params);
};

/***/ }),

/***/ "./src/modules/createCssColors.js":
/*!****************************************!*\
  !*** ./src/modules/createCssColors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCssColors": () => (/* binding */ createCssColors)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createElement */ "./src/modules/utils/createElement.js");

var createCssColors = function createCssColors(colors) {
  var style = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('style');
  colors.forEach(function (color) {
    style.textContent += "\n            .color--".concat(color.title, ":after{\n                background-color: ").concat(color.code, ";\n                ").concat(color.title === 'white' ? 'border: 1px solid #8A8A8A' : '', "\n            }\n        ");
  });

  //! - черновик
  // &--black{
  //     &::after{
  //         background-color: black;
  //         border: 1px solid black;
  //     }
  // }
  // &--red{
  //     &::after{
  //         border: 1px solid red;
  //         background-color: red;
  //     }
  // }
  // &--check{
  //     border: 0.4px solid #929292;
  // }
  // &--white{
  //     &:after{
  //         background-color: $second-color;
  //         border: 1px solid $main-color;
  //     }
  // }

  document.head.append(style);
};

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(urlApi, param) {
    var cbError,
      url,
      key,
      response,
      data,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cbError = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {};
          _context.prev = 1;
          url = new URL(urlApi);
          if (param && _typeof(param) === 'object') {
            for (key in param) {
              url.searchParams.set(key, param[key]);
            }
          }
          _context.next = 6;
          return fetch(url);
        case 6:
          response = _context.sent;
          _context.next = 9;
          return response.json();
        case 9:
          data = _context.sent;
          if (response.ok) {
            _context.next = 12;
            break;
          }
          throw new Error(data.message);
        case 12:
          return _context.abrupt("return", data);
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.warn(_context.t0);
          if (typeof param === 'function') {
            param(_context.t0);
          } else {
            cbError(_context.t0);
          }
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 15]]);
  }));
  return function getData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/render/renderFooter.js":
/*!********************************************!*\
  !*** ./src/modules/render/renderFooter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");


var renderFooter = function renderFooter() {
  _const__WEBPACK_IMPORTED_MODULE_0__.footer.textContent = '';
  var createFooterCategory = function createFooterCategory() {
    var footerCategory = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
      className: 'footer__item footer-category footer__item--category'
    });
    (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {
      className: 'footer__title footer-category__title',
      textContent: 'Каталог'
    });
    var footerCategoryList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
      className: 'footer-category__list'
    }, {
      parent: footerCategory
    });
    var _loop = function _loop(key) {
      var footerCategoryItem = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
        className: 'footer-category__item'
      }, {
        parent: footerCategoryList,
        append: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('h3', {
          className: 'footer-category__subtitle'
        }, {
          append: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
            className: 'footer__link',
            href: "#/".concat(key),
            textContent: _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation[key].title
          })
        })
      });
      (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
        className: 'footer-category__sublist'
      }, {
        parent: footerCategoryItem,
        appends: _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation[key].list.map(function (elem) {
          return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
            className: 'footer-category__subitem'
          }, {
            append: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
              className: 'footer__link',
              href: "#/".concat(key, "/").concat(elem.slug),
              textContent: elem.title
            })
          });
        })
      });
    };
    for (var key in _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation) {
      _loop(key);
    }
    return footerCategory;
  };
  var container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
    className: 'container footer__container'
  }, {
    parent: _const__WEBPACK_IMPORTED_MODULE_0__.footer,
    append: createFooterCategory()
  });
  container.insertAdjacentHTML('beforeend', "\n            <div class=\"footer__item footer__item--social footer-social\">\n            <h2 class=\"footer__title footer-social__title\">\u0421\u0432\u044F\u0437\u0430\u0442\u0441\u044C\u044F \u0441 \u043D\u0430\u043C\u0438</h2>\n            \n            <p class=\"footer-social__subtitle\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432</p>\n            <ul class=\"footer-social__list\">\n                <li class=\"footer-social__item\"><a target=\"_blank\" href=\"#\" class=\"footer-social__link footer__link\">\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z\"/>\n                        </svg>\n                </a></li>\n                <li class=\"footer-social__item\"><a target=\"_blank\" href=\"#\" class=\"footer-social__link footer__link\">\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z\"/>\n                        </svg>\n                </a></li>\n            </ul>\t\n        </div>\n        <!-- /.footer__item footer__item--social footer-social -->\n\n        <div class=\"footer__item footer__item--contacts footer-contacts\">\n            <a href=\"mailto:Inspired@gmail.com\" class=\"footer__link\">Inspired@gmail.com</a>\n            <a href=\"tel:8930490260\" class=\"footer__link\">8 930 490 26 20</a>\n        </div>\n\n        <div class=\"footer__item footer__item--copyright footer-copyright\">\n            <p>\xA9 INSPIRED, 2023</p>\n        </div>\n\n        <div class=\"footer__item footer__item--development footer-development\">\n            <ul class=\"footer-development__list\">\n                <li class=\"footer-development__item\">\n                    Designer: <a class=\"footer__link\" href=\"#\">Anastasia Ilina</a>\n                </li>\n                <li class=\"footer-development__item\">\n                    Developer: <a class=\"footer__link\" target=\"_blank\" href=\"https://vk.com/id6696432\">Maksim Saraev</a>\n                </li>\n            </ul>\n        </div>\n    ");
};

/***/ }),

/***/ "./src/modules/render/renderHeader.js":
/*!********************************************!*\
  !*** ./src/modules/render/renderHeader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartLink": () => (/* binding */ cartLink),
/* harmony export */   "favoriteLink": () => (/* binding */ favoriteLink),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader),
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");
/* harmony import */ var _img_main_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/main-logo.svg */ "./src/img/main-logo.svg");
/* harmony import */ var _renderSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderSearch */ "./src/modules/render/renderSearch.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");




var searchBtn = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
  className: 'header__link',
  ariaLabel: 'search-button',
  innerHTML: "\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z\"  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M16.4431 16.4438L20.9994 21.0002\"  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\t\t\t\n    "
}, {
  cb: function cb(btn) {
    btn.addEventListener('click', _renderSearch__WEBPACK_IMPORTED_MODULE_2__.searchToggle);
  }
});
var cartLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
  className: 'header__link',
  ariaLabel: 'cart',
  innerHTML: "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z\"  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75\"  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\t\t\t\n    ",
  href: 'cart'
});
var favoriteLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
  className: 'header__link',
  ariaLabel: 'favorites',
  innerHTML: "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z\"  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n    ",
  href: 'favorites'
});
var container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
  className: 'container header__container',
  innerHTML: "\n        <a href=\"tel:89304902620\" class=\"header__phone header__link\">8 930 490 26 20</a>\n\n        \n    "
});
(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
  className: 'header__logo',
  href: '/#',
  innerHTML: "<img src=\"".concat(_img_main_logo_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"\u041B\u043E\u0433\u043E\u0442\u0438\u043F Inspired\">")
}, {
  parent: container
});
var nav = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
  className: 'header__naviagtion'
}, {
  parent: container
});
var ul = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {
  className: 'header__nav-list'
}, {
  parent: nav
});
var buttons = [searchBtn, cartLink, favoriteLink];

//! type - 1(new)
buttons.forEach(function (elem) {
  (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {
    className: 'header__nav-item'
  }, {
    parent: ul,
    append: elem
  });
});

//! type - 2(old)
// for (let i = 0; i < buttons.length; i++) {
//     createElement('li',{
//         className: 'header__nav-item'
//     },{
//         parent: ul,
//         append: buttons[i]
//     });
// }

var renderHeader = function renderHeader() {
  _const__WEBPACK_IMPORTED_MODULE_3__.header.append(container);
  _const__WEBPACK_IMPORTED_MODULE_3__.header.after(_renderSearch__WEBPACK_IMPORTED_MODULE_2__.search);
};

/***/ }),

/***/ "./src/modules/render/renderHero.js":
/*!******************************************!*\
  !*** ./src/modules/render/renderHero.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHero": () => (/* binding */ renderHero)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");


var container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
  className: 'container'
});
var content = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
  className: 'hero__content'
}, {
  parent: container
});
var titleElem = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {
  className: 'hero__title'
}, {
  parent: content
});
var heroLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
  className: 'hero__link',
  textContent: 'Перейти'
}, {
  parent: content
});
var renderHero = function renderHero(gender) {
  if (!gender) {
    _const__WEBPACK_IMPORTED_MODULE_0__.hero.style.display = 'none';
    return;
  }
  _const__WEBPACK_IMPORTED_MODULE_0__.hero.style.display = '';
  _const__WEBPACK_IMPORTED_MODULE_0__.hero.className = "hero hero--".concat(gender);
  _const__WEBPACK_IMPORTED_MODULE_0__.hero.append(container);
  titleElem.textContent = _const__WEBPACK_IMPORTED_MODULE_0__.TITLE[gender].title;
  heroLink.href = "#/product/".concat(_const__WEBPACK_IMPORTED_MODULE_0__.TITLE[gender].id);
};

/***/ }),

/***/ "./src/modules/render/renderNavigaion.js":
/*!***********************************************!*\
  !*** ./src/modules/render/renderNavigaion.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNaviagtion": () => (/* binding */ renderNaviagtion)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");


var flag = false;
var oldGender = '';
var renderNaviagtion = function renderNaviagtion(gender, category) {
  if (!gender) {
    _const__WEBPACK_IMPORTED_MODULE_0__.nav.style.display = 'none';
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__.nav.style.display = '';
  }
  if (flag && oldGender === gender) {
    return;
  }
  if (gender === 'all') {
    gender = oldGender;
  }
  oldGender = gender;
  flag = true;
  _const__WEBPACK_IMPORTED_MODULE_0__.nav.textContent = '';
  var container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
    className: 'container'
  }, {
    parent: _const__WEBPACK_IMPORTED_MODULE_0__.nav
  });
  var genderList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
    className: 'navigation__gender gender'
  }, {
    parent: container
  });
  var categoryElems = _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation[gender].list.map(function (item) {
    return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
      className: 'category__item'
    }, {
      append: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
        className: "category__link ".concat(category === item.slug ? 'category__link--active' : ''),
        textContent: item.title,
        href: "#/".concat(gender, "/").concat(item.slug)
      }, {
        cb: function cb(elem) {
          elem.addEventListener('click', function () {
            var _document$querySelect;
            (_document$querySelect = document.querySelector('.category__link--active')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.remove('category__link--active');
            elem.classList.add('category__link--active');
          });
        }
      })
    });
  });
  var categoryWrapper = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
    className: 'category-wrapper'
  }, {
    parent: container
  });
  (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
    className: 'navigation__category category'
  }, {
    parent: categoryWrapper,
    appends: categoryElems
  });
  for (var genderName in _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation) {
    (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
      className: "gender__link\n                        ".concat(gender === genderName ? 'gender__link--active' : '', "\n            "),
      href: "#/".concat(genderName),
      textContent: _const__WEBPACK_IMPORTED_MODULE_0__.DATA.navigation[genderName].title
    }, {
      parent: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
        className: 'gender__item'
      }, {
        parent: genderList
      })
    });
  }
};

/***/ }),

/***/ "./src/modules/render/renderPagination.js":
/*!************************************************!*\
  !*** ./src/modules/render/renderPagination.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPagination": () => (/* binding */ renderPagination)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");
/* harmony import */ var _utils_getUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getUrl */ "./src/modules/utils/getUrl.js");


var renderPagination = function renderPagination(wrapperPagination, page, pages, count) {
  wrapperPagination.textContent = '';
  var paginationList = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {
    className: 'pagination__list'
  }, {
    parent: wrapperPagination
  });
  var isNotStart = page - Math.floor(count / 2) > 1;
  var isEnd = page + Math.floor(count / 2) > pages;
  if (count > pages) {
    count = pages;
  }
  for (var i = 0; i < count; i++) {
    var n = i + 1;
    if (isNotStart) {
      if (isEnd) {
        n = pages - count + i + 1;
      } else {
        n = page - Math.floor(count / 2) + i;
      }
    }
    (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {
      className: 'pagination__item'
    }, {
      parent: paginationList,
      append: (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
        textContent: n,
        href: (0,_utils_getUrl__WEBPACK_IMPORTED_MODULE_1__.getUrl)({
          page: n
        }),
        className: "pagination__link\n                    ".concat(page === n ? 'pagination__link--active' : '', "\n                ")
      })
    });
  }
  if (pages > count) {
    var arrowPrev = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
      className: "pagination__arrow pagination__arrow--start ".concat(!isNotStart ? 'pagination__arrow--disabled' : ''),
      href: (0,_utils_getUrl__WEBPACK_IMPORTED_MODULE_1__.getUrl)({
        page: 1
      }),
      innerHTML: "\n            <svg width=\"5\" height=\"8\" viewBox=\"0 0 5 8\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M5 7.06L1.90958 4L5 0.94L4.04858 0L-1.19209e-07 4L4.04858 8L5 7.06Z\" />\n            </svg>\n            \n\n            ",
      ariaLabel: 'To the start'
    });
    var arrowNext = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
      className: "pagination__arrow pagination__arrow--end ".concat(isEnd ? 'pagination__arrow--disabled' : ''),
      href: (0,_utils_getUrl__WEBPACK_IMPORTED_MODULE_1__.getUrl)({
        page: pages
      }),
      innerHTML: "\n                <svg width=\"5\" height=\"8\" viewBox=\"0 0 5 8\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M0 7.06L3.09042 4L0 0.94L0.951417 0L5 4L0.951417 8L0 7.06Z\" />\n                </svg>\n\n            ",
      ariaLabel: 'To the end'
    });
    wrapperPagination.prepend(arrowPrev);
    wrapperPagination.append(arrowNext);
  }
};

/***/ }),

/***/ "./src/modules/render/renderProduct.js":
/*!*********************************************!*\
  !*** ./src/modules/render/renderProduct.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProducts": () => (/* binding */ renderProducts)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/modules/const.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getData */ "./src/modules/getData.js");
/* harmony import */ var _renderPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderPagination */ "./src/modules/render/renderPagination.js");
/* harmony import */ var _controllers_favoriteController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/favoriteController */ "./src/modules/controllers/favoriteController.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var renderProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(title, params) {
    var data, goods, container, titleElem, favoriteList, listCard, list, pagination;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _const__WEBPACK_IMPORTED_MODULE_0__.products.textContent = '';
          _context.next = 3;
          return (0,_getData__WEBPACK_IMPORTED_MODULE_2__.getData)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/api/goods"), params);
        case 3:
          data = _context.sent;
          goods = Array.isArray(data) ? data : data.goods;
          container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
            className: 'container'
          }, {
            parent: _const__WEBPACK_IMPORTED_MODULE_0__.products
          });
          titleElem = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {
            className: 'goods__title',
            textContent: title
          }, {
            parent: container
          }); // ? - Мой вариант! 
          if (data !== null && data !== void 0 && data.totalCount) {
            (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('sup', {
              className: 'goods__title-sup',
              innerHTML: " &nbsp(".concat(data.totalCount, ")")
            }, {
              parent: titleElem
            });
          } else if ((data === null || data === void 0 ? void 0 : data.totalCount) === 0) {
            (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {
              className: 'goods__warning',
              textContent: ' Товаров по вашему запросу не найдено....'
            }, {
              parent: container
            });
          }

          // ? Вариант Максима Лескина
          // if(Object.hasOwn(data,'totalCount')){
          //     createElement('sup',{
          //         className: 'goods__title-sup',
          //         innerHTML: ` &nbsp(${data.totalCount})`
          //     },{
          //         parent: titleElem
          //     });

          //     if(!data.totalCount){
          //         createElement('p',{
          //             className: 'goods__warning',
          //             textContent: 'По вашему запросу ничего не найдено'
          //         },{
          //             parent: container
          //         });
          //     }
          //     // return;
          // }
          favoriteList = (0,_controllers_favoriteController__WEBPACK_IMPORTED_MODULE_4__.getFavorite)();
          listCard = goods.map(function (product) {
            var li = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
              className: 'goods__item'
            });
            var article = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('article', {
              className: 'product',
              innerHTML: "\n            <a href=\"#/product/".concat(product.id, "\" class=\"product__link\">\n                <img src=\"").concat(_const__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/").concat(product.pic, "\" alt=\"").concat(product.title, "\" class=\"product__image\">\n                <h3 class=\"product__title\">").concat(product.title, "</h3>\n            </a>\n            <div class=\"product__row\">\n                <p class=\"product__price\">\u0440\u0443\u0431 ").concat(product.price, "</p>\n                <button class=\"product__btn-favorite favorite ").concat(favoriteList.includes(product.id) ? 'favorite--active' : '', "\" \n                aria-label=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435\"\n                data-id=").concat(product.id, "\n                ></button>\n            </div>\n            ")
            }, {
              parent: li
            });
            var colors = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
              className: 'product__color-list'
            }, {
              parent: article,
              appends: product.colors.map(function (colorId, i) {
                var color = _const__WEBPACK_IMPORTED_MODULE_0__.DATA.colors.find(function (item) {
                  return item.id == colorId;
                });
                return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('li', {
                  className: "color color--".concat(color.title, " ").concat(i ? '' : 'color--check')
                });
              })
            });
            return li;
          });
          list = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('ul', {
            className: 'goods__list'
          }, {
            appends: listCard,
            parent: container
          });
          if (data.page && data.pages > 1) {
            pagination = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
              className: 'goods__pagination pagination'
            }, {
              parent: container
            });
            (0,_renderPagination__WEBPACK_IMPORTED_MODULE_3__.renderPagination)(pagination, data.page, data.pages, _const__WEBPACK_IMPORTED_MODULE_0__.COUNT_PAGINATION);
          }
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/render/renderSearch.js":
/*!********************************************!*\
  !*** ./src/modules/render/renderSearch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "searchToggle": () => (/* binding */ searchToggle)
/* harmony export */ });
/* harmony import */ var _controllers_searchController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/searchController */ "./src/modules/controllers/searchController.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/modules/utils/createElement.js");


var search = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
  className: 'search'
});
var searchToggle = function searchToggle() {
  search.classList.toggle('search--show');
};
var container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
  className: 'container'
}, {
  parent: search
});
var form = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('form', {
  className: 'search__form'
}, {
  parent: container,
  cb: _controllers_searchController__WEBPACK_IMPORTED_MODULE_0__.searchController
});
(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', {
  type: 'search',
  name: 'search',
  placeholder: 'Найти...',
  className: 'search__input',
  autocomplete: 'off'
}, {
  parent: form
});
(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', {
  className: 'search__btn',
  type: 'submit',
  textContent: 'искать'
}, {
  parent: form
});

/***/ }),

/***/ "./src/modules/utils/createElement.js":
/*!********************************************!*\
  !*** ./src/modules/utils/createElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var createElement = function createElement(tag, attr) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    append = _ref.append,
    appends = _ref.appends,
    parent = _ref.parent,
    cb = _ref.cb;
  var element = document.createElement(tag);
  if (attr) {
    Object.assign(element, attr);
  }
  if (append && append instanceof HTMLElement) {
    element.append(append);
  }
  if (appends && appends.every(function (elem) {
    return elem instanceof HTMLElement;
  })) {
    element.append.apply(element, _toConsumableArray(appends));
  }
  if (parent && parent instanceof HTMLElement) {
    parent.append(element);
  }
  if (cb && typeof cb === 'function') {
    cb(element);
  }
  return element;
};

/***/ }),

/***/ "./src/modules/utils/getUrl.js":
/*!*************************************!*\
  !*** ./src/modules/utils/getUrl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrl": () => (/* binding */ getUrl)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/modules/utils/router.js");

var getUrl = function getUrl(params) {
  var currentLocation = _router__WEBPACK_IMPORTED_MODULE_0__.router.getCurrentLocation();
  var url = currentLocation.url;
  var searchParams = new URLSearchParams(currentLocation.queryString);

  // if(searchParams.keys().length){
  //     searchParams.delete('page');
  // }

  for (var keys in params) {
    // searchParams.delete('page');
    searchParams.set(keys, params[keys]);
  }
  url += "?".concat(searchParams.toString());
  return url;
};

/***/ }),

/***/ "./src/modules/utils/router.js":
/*!*************************************!*\
  !*** ./src/modules/utils/router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! navigo */ "./node_modules/navigo/lib/navigo.min.js");
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_0__);

var router = new (navigo__WEBPACK_IMPORTED_MODULE_0___default())('/', {
  hash: true
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined mixin.\n   ╷\n30 │ ┌     @include mobile {\n31 │ │       width: 100%;\n32 │ │       height: auto;\n33 │ └     }\n   ╵\n  src\\style\\_card.scss 30:5  @import\n  src\\index.scss 17:9        root stylesheet");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-touch-icon.png */ "./src/img/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-32x32.png */ "./src/img/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-16x16.png */ "./src/img/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/safari-pinned-tab.svg */ "./src/img/safari-pinned-tab.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/inter-v12-latin_cyrillic-regular.woff2 */ "./src/fonts/inter-v12-latin_cyrillic-regular.woff2"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/card-img.jpg */ "./src/img/card-img.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cart-img.jpg */ "./src/img/cart-img.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<meta name=\"robots\" content=\"noindex,nofollow\">\r\n\r\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n\t<link rel=\"menifest\" href=\"img/site.webmenifest\">\r\n\t<link rel=\"mask-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" color=\"#5bbad5\">\r\n\t<meta name=\"msapplication-TileColor\" content=\"#2d89ef\">\r\n\t<meta name=\"theme-color\" content=\"#ffffff\">\r\n\r\n\t<link rel=\"preload\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" as=\"font\" type=\"font/woff2\"\r\n\t\tcrossorigin>\r\n\t<title>Inspired | underware E-store</title>\r\n</head>\r\n\r\n<body>\r\n\t<header class=\"header\">\r\n\r\n\t</header>\r\n\r\n\t<main>\r\n\t\t<nav class=\"navigation\">\r\n\r\n\t\t</nav>\r\n\t\t<!-- /.navigation -->\r\n\t\t<section class=\"hero hero--women\">\r\n\r\n\t\t</section>\r\n\t\t<!-- /.hero her--women -->\r\n\r\n\t\t<section class=\"goods\">\r\n\r\n\t\t</section>\r\n\t\t<!-- /.goods -->\r\n\t\t<section class=\"card\">\r\n\t\t\t<div class=\"container card__container\">\r\n\t\t\t\t<img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Пижама со штанами шелковая\">\r\n\r\n\t\t\t\t<form class=\"card__content\" id=\"order\">\r\n\t\t\t\t\t<h2 class=\"card__title\">Пижама со штанами шелковая</h2>\r\n\r\n\t\t\t\t\t<p class=\"card__price\">руб 6999</p>\r\n\r\n\t\t\t\t\t<div class=\"card__vendor-code\">\r\n\t\t\t\t\t\t<span class=\"card__subtitle\">Артикул</span>\r\n\t\t\t\t\t\t<span class=\"card__id\">089083</span>\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"089083\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"card__color\">\r\n\t\t\t\t\t\t<p class=\"card__subtitle card__color-title\">Цвет</p>\r\n\r\n\t\t\t\t\t\t<div class=\"card__color-list\">\r\n\t\t\t\t\t\t\t<label class=\"card__color-item color color_black color_check\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"color\" value=\"black\" checked>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"card__color-item color color_red\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"color\" value=\"red\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"card__size\">\r\n\t\t\t\t\t\t<p class=\"card__subtitle card__size-title\">Размер</p>\r\n\r\n\t\t\t\t\t\t<div class=\"card__size-list\">\r\n\t\t\t\t\t\t\t<label class=\"card__size-item size\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"size\" value=\"XS\">XS\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"card__size-item size\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"size\" value=\"S\">S\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"card__size-item size\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"size\" value=\"M\">M\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"card__size-item size\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"size\" value=\"L\">L\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"card__size-item size\">\r\n\t\t\t\t\t\t\t\t<input class=\"input-hide\" type=\"radio\" name=\"size\" value=\"XL\">XL\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"card__description\">\r\n\t\t\t\t\t\t<p class=\"card__subtitle card__description-title\">Описание</p>\r\n\r\n\t\t\t\t\t\t<p class=\"card__description-text\">Домашняя женская пижама с сорочкой и штанами из\r\n\t\t\t\t\t\t\tшелка</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"card__control\">\r\n\t\t\t\t\t\t<div class=\"card__count count\">\r\n\t\t\t\t\t\t\t<button class=\"count__item count__minus\">-</button>\r\n\t\t\t\t\t\t\t<span class=\"count__item count__number\">1</span>\r\n\t\t\t\t\t\t\t<button class=\"count__item count__plus\">+</button>\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"count\" value=\"1\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<button class=\"card__add-cart main-button\" type=\"submit\">В корзину</button>\r\n\t\t\t\t\t\t<button class=\"card__favorite favorite\" aria-label=\"Добавить в избранное\"\r\n\t\t\t\t\t\t\ttype=\"button\" data-id=\"321654\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<div class=\"cart-block\">\r\n\t\t\t<section class=\"cart\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<h2 class=\"cart__title\">Корзина</h2>\r\n\t\t\r\n\t\t\t\t\t<ul class=\"cart__list\">\r\n\t\t\t\t\t\t<li class=\"cart__item\">\r\n\t\t\t\t\t\t\t<article class=\"item\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Пижама со штанами шелковая\" class=\"item__image\">\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"item__content\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"item__title\">Пижама со штанами шелковая</h3>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<p class=\"item__price\">руб 6999</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__vendor-code\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"item__subtitle\">Артикул</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"item__id\">089083</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"item__prop\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__color\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"item__subtitle item__color-title\">Цвет</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item__color-item color color_black color_check\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__size\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"item__subtitle item__size-title\">Размер</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item__size-item size\">XS</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<button class=\"item__del\" aria-label=\"Удалить товар из корзины\"></button>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"count item__count\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"count__item count__minus\">-</button>\r\n\t\t\t\t\t\t\t\t\t<span class=\"count__item count__number\">1</span>\r\n\t\t\t\t\t\t\t\t\t<button class=\"count__item count__plus\">+</button>\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"count\" value=\"1\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t</li>\r\n\t\t\r\n\t\t\t\t\t\t<li class=\"cart__item\">\r\n\t\t\t\t\t\t\t<article class=\"item\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Бюстгальтер-Балконет Prague Full Cover\" class=\"item__image\">\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"item__content\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"item__title\">Бюстгальтер-Балконет Prague Full Cover</h3>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<p class=\"item__price\">руб 2599</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__vendor-code\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"item__subtitle\">Артикул</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"item__id\">084375</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"item__prop\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__color\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"item__subtitle item__color-title\">Цвет</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item__color-item color color_black color_check\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"item__size\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"item__subtitle item__size-title\">Размер</p>\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item__size-item size\">M</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<button class=\"item__del\" aria-label=\"Удалить товар из корзины\"></button>\r\n\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"count item__count\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"count__item count__minus\">-</button>\r\n\t\t\t\t\t\t\t\t\t<span class=\"count__item count__number\">1</span>\r\n\t\t\t\t\t\t\t\t\t<button class=\"count__item count__plus\">+</button>\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"count\" value=\"1\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\r\n\t\t\t\t\t<div class=\"cart__total\">\r\n\t\t\t\t\t\t<p class=\"cart__total-title\">Итого:</p>\r\n\t\t\r\n\t\t\t\t\t\t<p class=\"cart__total-price\">руб 9598</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t\r\n\t\t\t<section class=\"order\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<h2 class=\"order__title\">Оформление заказа</h2>\r\n\t\t\r\n\t\t\t\t\t<form class=\"order__form\">\r\n\t\t\t\t\t\t<fieldset class=\"order__personal\">\r\n\t\t\t\t\t\t\t<label class=\"order__label\">\r\n\t\t\t\t\t\t\t\t<input class=\"order__input\" type=\"text\" placeholder=\"ФИО\" name=\"fio\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\r\n\t\t\t\t\t\t\t<label class=\"order__label\">\r\n\t\t\t\t\t\t\t\t<input class=\"order__input\" type=\"text\" placeholder=\"Адрес доставки\" name=\"address\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\r\n\t\t\t\t\t\t\t<label class=\"order__label\">\r\n\t\t\t\t\t\t\t\t<input class=\"order__input\" type=\"text\" placeholder=\"Телефон\" name=\"phone\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\r\n\t\t\t\t\t\t\t<label class=\"order__label\">\r\n\t\t\t\t\t\t\t\t<input class=\"order__input\" type=\"text\" placeholder=\"E-mail\" name=\"email\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</fieldset>\r\n\t\t\r\n\t\t\t\t\t\t<fieldset class=\"order__radio-list\">\r\n\t\t\t\t\t\t\t<label class=\"order__radio radio\">\r\n\t\t\t\t\t\t\t\t<input class=\"radio__input\" type=\"radio\" name=\"delivery\" value=\"delivery\">\r\n\t\t\t\t\t\t\t\t<span class=\"radio__text\">Доставка</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\r\n\t\t\t\t\t\t\t<label class=\"order__radio radio\">\r\n\t\t\t\t\t\t\t\t<input class=\"radio__input\" type=\"radio\" name=\"delivery\" value=\"self\">\r\n\t\t\t\t\t\t\t\t<span class=\"radio__text\">Самовывоз</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</fieldset>\r\n\t\t\r\n\t\t\t\t\t\t<button class=\"order__submit main-button\" type=\"submit\">Оформить</button>\r\n\t\t\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t</div>\r\n\t</main>\r\n\r\n\t<footer class=\"footer\">\r\n\r\n\t</footer>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/navigo/lib/navigo.min.js":
/*!***********************************************!*\
  !*** ./node_modules/navigo/lib/navigo.min.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));
//# sourceMappingURL=navigo.min.js.map

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/inter-v12-latin_cyrillic-regular.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/inter-v12-latin_cyrillic-regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/inter-v12-latin_cyrillic-regular.woff2";

/***/ }),

/***/ "./src/img/apple-touch-icon.png":
/*!**************************************!*\
  !*** ./src/img/apple-touch-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-touch-icon.png";

/***/ }),

/***/ "./src/img/card-img.jpg":
/*!******************************!*\
  !*** ./src/img/card-img.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/card-img.jpg";

/***/ }),

/***/ "./src/img/cart-img.jpg":
/*!******************************!*\
  !*** ./src/img/cart-img.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cart-img.jpg";

/***/ }),

/***/ "./src/img/favicon-16x16.png":
/*!***********************************!*\
  !*** ./src/img/favicon-16x16.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon-16x16.png";

/***/ }),

/***/ "./src/img/favicon-32x32.png":
/*!***********************************!*\
  !*** ./src/img/favicon-32x32.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon-32x32.png";

/***/ }),

/***/ "./src/img/main-logo.svg":
/*!*******************************!*\
  !*** ./src/img/main-logo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/main-logo.svg";

/***/ }),

/***/ "./src/img/safari-pinned-tab.svg":
/*!***************************************!*\
  !*** ./src/img/safari-pinned-tab.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/safari-pinned-tab.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils/router */ "./src/modules/utils/router.js");
/* harmony import */ var _modules_controllers_mainPageController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controllers/mainPageController */ "./src/modules/controllers/mainPageController.js");
/* harmony import */ var _modules_render_renderFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render/renderFooter */ "./src/modules/render/renderFooter.js");
/* harmony import */ var _modules_render_renderHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/render/renderHeader */ "./src/modules/render/renderHeader.js");
/* harmony import */ var _modules_createCssColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/createCssColors */ "./src/modules/createCssColors.js");
/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/getData */ "./src/modules/getData.js");
/* harmony import */ var _modules_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/const */ "./src/modules/const.js");
/* harmony import */ var _modules_utils_createElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/utils/createElement */ "./src/modules/utils/createElement.js");
/* harmony import */ var _modules_controllers_categoryPageController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controllers/categoryPageController */ "./src/modules/controllers/categoryPageController.js");
/* harmony import */ var _modules_controllers_searchController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/controllers/searchController */ "./src/modules/controllers/searchController.js");
/* harmony import */ var _modules_controllers_favoriteController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/controllers/favoriteController */ "./src/modules/controllers/favoriteController.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








//* API






var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_modules_getData__WEBPACK_IMPORTED_MODULE_7__.getData)("".concat(_modules_const__WEBPACK_IMPORTED_MODULE_8__.API_URL, "/api/categories"));
        case 3:
          _modules_const__WEBPACK_IMPORTED_MODULE_8__.DATA.navigation = _context.sent;
          _context.next = 6;
          return (0,_modules_getData__WEBPACK_IMPORTED_MODULE_7__.getData)("".concat(_modules_const__WEBPACK_IMPORTED_MODULE_8__.API_URL, "/api/colors"));
        case 6:
          _modules_const__WEBPACK_IMPORTED_MODULE_8__.DATA.colors = _context.sent;
          (0,_modules_createCssColors__WEBPACK_IMPORTED_MODULE_6__.createCssColors)(_modules_const__WEBPACK_IMPORTED_MODULE_8__.DATA.colors);
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('*', function () {
            (0,_modules_render_renderHeader__WEBPACK_IMPORTED_MODULE_5__.renderHeader)();
            (0,_modules_render_renderFooter__WEBPACK_IMPORTED_MODULE_4__.renderFooter)();
          });
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('/', function () {
            (0,_modules_controllers_mainPageController__WEBPACK_IMPORTED_MODULE_3__.mainPageController)();
          });
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('women', function () {
            (0,_modules_controllers_mainPageController__WEBPACK_IMPORTED_MODULE_3__.mainPageController)('women');
          });
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('men', function () {
            (0,_modules_controllers_mainPageController__WEBPACK_IMPORTED_MODULE_3__.mainPageController)('men');
          });
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('/:gender/:category', _modules_controllers_categoryPageController__WEBPACK_IMPORTED_MODULE_10__.categoryPageController);
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('search', _modules_controllers_searchController__WEBPACK_IMPORTED_MODULE_11__.searchPageController);
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.on('favorite', _modules_controllers_favoriteController__WEBPACK_IMPORTED_MODULE_12__.favoriteController);
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.warn(_context.t0);
          (0,_modules_utils_createElement__WEBPACK_IMPORTED_MODULE_9__.createElement)('h2', {
            textContent: 'Что-то пошло не так, попробуйте позже...'
          }, {
            parent: _modules_const__WEBPACK_IMPORTED_MODULE_8__.main,
            cb: function cb(h2) {
              h2.style.textAlign = 'center';
            }
          });
        case 21:
          _context.prev = 21;
          _modules_utils_router__WEBPACK_IMPORTED_MODULE_2__.router.resolve();
          return _context.finish(21);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17, 21, 24]]);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
init();
})();

/******/ })()
;
//# sourceMappingURL=main.8e82125a29c60aba6aa3.js.map