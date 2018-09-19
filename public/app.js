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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocationSet = __webpack_require__(11);

var _hashLocationSet2 = _interopRequireDefault(_hashLocationSet);

var _hashLocationGet = __webpack_require__(12);

var _hashLocationGet2 = _interopRequireDefault(_hashLocationGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loc() {
  var originalHash = location.hash;
  var path = originalHash;
  var search = '';
  var query = '';

  if (path.includes('?')) {
    var searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      var obj = {};
      var filterString = search.split('&');

      for (var i = 0; i < filterString.length; i++) {
        var splitString = filterString[i].split('=');
        var field = splitString[0];
        var value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    var pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path: path,
    search: search,
    query: query,
    set: _hashLocationSet2.default,
    get: _hashLocationGet2.default
  };
}

var hashLocation = loc;

exports.default = hashLocation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.Router = exports.Component = undefined;

var _Component = __webpack_require__(4);

var _Component2 = _interopRequireDefault(_Component);

var _Router = __webpack_require__(8);

var _Router2 = _interopRequireDefault(_Router);

var _utils = __webpack_require__(13);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Component = _Component2.default;
exports.Router = _Router2.default;
exports.utils = _utils2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(18);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domrFramework = __webpack_require__(1);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _domrFramework.Router(_routes2.default);

router.Start();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = __webpack_require__(5);

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = __webpack_require__(6);

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = __webpack_require__(7);

var _randomizer2 = _interopRequireDefault(_randomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var _this = this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-component';

    _classCallCheck(this, _class);

    this.createElement = _createElement2.default;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.GetThisComponent = this.target;
    this.GetDomrID = this.domrid;
    this.handlingParent = document.querySelector('body');
  }

  // debug


  _createClass(_class, [{
    key: 'errorHandler',
    value: function errorHandler(field, error) {
      var err = '_ ' + field + ': ' + error;
      this.ErrorLog(err);
    }
    // OnError

  }, {
    key: 'ErrorLog',
    value: function ErrorLog(err) {}

    // Markup

  }, {
    key: 'Markup',
    value: function Markup() {
      // HTML DOM/Markup goes here
      return '';
    }

    // Events

  }, {
    key: 'deligateEvents',
    value: function deligateEvents(childen, eventName, eventAction) {
      var _this2 = this;

      this.handlingParent.addEventListener(eventName, function (e) {
        var event = e;
        if (event.target) {
          if (event.target.matches(childen)) {
            event.closest = false;
            eventAction(event.target, event);
            return;
          } else if (event.target.closest(childen)) {
            event.closest = true;
            event.closestDomrId = _this2.domrid;
            event.closestElm = childen;
            eventAction(event.target.closest(childen), event);
            return;
          }
        }
      });
    }
  }, {
    key: 'On',
    value: function On(eventName, eventAction) {
      this.deligateEvents('[data-domr-id="' + this.domrid + '"]', eventName, eventAction);
    }
  }, {
    key: 'Click',
    value: function Click(eventAction) {
      this.On('click', eventAction);
    }
  }, {
    key: 'Mouseover',
    value: function Mouseover(eventAction) {
      this.On('mouseover', eventAction);
    }
  }, {
    key: 'Mouseout',
    value: function Mouseout(eventAction) {
      this.On('mouseout', eventAction);
    }
  }, {
    key: 'Input',
    value: function Input(eventAction) {
      this.On('input', eventAction);
    }
  }, {
    key: 'Blur',
    value: function Blur(eventAction) {
      this.On('blur', eventAction);
    }
  }, {
    key: 'Keydown',
    value: function Keydown(eventAction) {
      this.On('keydown', eventAction);
    }
  }, {
    key: 'Keypress',
    value: function Keypress(eventAction) {
      this.On('keypress', eventAction);
    }
  }, {
    key: 'Keyup',
    value: function Keyup(eventAction) {
      this.On('keyup', eventAction);
    }
  }, {
    key: 'Events',
    value: function Events() {}
    // This one will house the events


    // AfterRender

  }, {
    key: 'AfterRenderDone',
    value: function AfterRenderDone() {}
  }, {
    key: 'delayedContent',
    value: function delayedContent() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.target()) {
          _this3.AfterRenderDone();
        }
      }, 50);
    }
  }, {
    key: 'optimizedDom',
    value: function optimizedDom() {
      this.Events();
      return this.createElement(this.Markup(), this.domrid);
    }

    // Add Events
    // Render

  }, {
    key: 'Render',
    value: function Render() {
      this.delayedContent();
      return this.optimizedDom();
    }
  }, {
    key: 'AddTo',
    value: function AddTo(parent) {
      if (parent) {
        parent.insertAdjacentHTML('beforeend', this.optimizedDom());
        this.delayedContent();
      } else {
        this.errorHandler('AddTo', 'parent not found');
      }
    }
  }, {
    key: 'AddFromStartTo',
    value: function AddFromStartTo(parent) {
      if (parent) {
        parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
        this.delayedContent();
      } else {
        this.errorHandler('AddFromStartTo', 'parent not found');
      }
    }
  }, {
    key: 'Before',
    value: function Before(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
        this.delayedContent();
      } else {
        this.errorHandler('Before', 'sibling not found');
      }
    }
  }, {
    key: 'After',
    value: function After(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        this.delayedContent();
      } else {
        this.errorHandler('After', 'sibling not found');
      }
    }
  }, {
    key: 'Replace',
    value: function Replace(sibling) {
      if (sibling) {
        var parent = sibling.parentElement;

        if (parent) {
          sibling.insertAdjacentHTML('afterend', this.optimizedDom());
          parent.removeChild(sibling);
          this.delayedContent();
        } else {
          this.errorHandler('Replace', 'sibling has no parentElement');
        }
      } else {
        this.errorHandler('Replace', 'sibling not found');
      }
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElement(str, domrDataId) {
  var div = document.createElement('div');
  div.innerHTML = str;
  var container = document.createDocumentFragment();
  for (var i = 0; i < div.childNodes.length; i++) {
    var node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

exports.default = createElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Lookup(elmId) {
  var targetSelector = document.querySelector("[data-domr-id=\"" + elmId + "\"]");

  if (targetSelector) {
    return targetSelector;
  }
}

exports.default = Lookup;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomizer() {
  var stringLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

  return Math.random().toString(36).substr(2, stringLength);
}

exports.default = randomizer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addView = __webpack_require__(9);

var _addView2 = _interopRequireDefault(_addView);

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var filterRoutes = function filterRoutes(routes) {
  var arr = [];
  routes.forEach(function (route) {
    if (route.path && route.view) {
      arr.push(route);
    }
  });

  return arr;
};
var defaults = {
  routes: [],
  config: {
    refreshPage: false
  }
};

var _class = function () {
  function _class() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults.routes;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.config;

    _classCallCheck(this, _class);

    this.routes = filterRoutes(routes);
    this.refreshPage = config.refreshPage || false;
    this.addView = _addView2.default;
  }

  _createClass(_class, [{
    key: 'ShowRoutes',
    value: function ShowRoutes() {
      console.log(this.routes);
    }
  }, {
    key: 'reloadOnHashChange',
    value: function reloadOnHashChange() {
      var _this = this;

      addEventListener('hashchange', function (e) {
        if (_this.refreshPage) {
          location.reload();
        } else {
          _this.Start();
          e.stopImmediatePropagation();
        }
      });
    }
  }, {
    key: 'Start',
    value: function Start() {
      var loc = (0, _hashLocation2.default)();
      var locPath = loc.path;
      var candidate = void 0;

      if (locPath === '') {
        location.hash = '#/';
      }

      this.routes.forEach(function (route) {
        var path = route.path;
        if (path.endsWith('/') && path !== '/') {
          path = path.slice(0, -1);
        }

        var routeDataVal = [];
        var routePathMod = path.replace(/([:*])(\w+)/g, function (full, dots, name) {
          routeDataVal.push(name);
          return '([^/]+)';
        }) + '(?:/|$)';
        var routePathModRegEx = locPath.match(new RegExp(routePathMod));

        if (routePathModRegEx) {
          var params = routePathModRegEx.slice(1, routePathModRegEx.length).reduce(function (params, value, index) {
            if (params === null) params = {};
            params[routeDataVal[index]] = value;
            return params;
          }, null);

          route.metadata = params || '';
          route.query = loc.query;
          candidate = route;
        }
      });

      if (candidate) {
        this.addView(candidate);
      } else {
        var routeDefault = this.routes.find(function (o) {
          return o.isDefault === true;
        });
        if (routeDefault) {
          this.addView(routeDefault);
        } else {
          console.error('Page Not Found');
        }
      }

      this.reloadOnHashChange();
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneObject = __webpack_require__(10);

var _cloneObject2 = _interopRequireDefault(_cloneObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addView(candidate) {
  var view = candidate.view;
  var skiplist = ['view'];
  var routeData = (0, _cloneObject2.default)(candidate, skiplist);

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

exports.default = addView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultSkipList = ['view'];

function findInArr(arr, itm) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === itm) {
      return true;
    }
  }
}

function cloneObject(obj) {
  var skipList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSkipList;

  var newObj = {};

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    var skip = findInArr(skipList, key);

    if (!skip) {
      newObj[key] = value;
    }
  });

  return newObj;
}

exports.default = cloneObject;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setHash(option) {
  var hash = option;
  if (!hash.startsWith('#')) {
    hash = '#' + hash;
  }

  return hash;
}

function setPath(option) {
  var loc = (0, _hashLocation2.default)();
  var searchQuery = loc.search;
  var path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = path + '/';
    }

    path = path + '?' + searchQuery;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  var search = option;
  var loc = (0, _hashLocation2.default)();
  var path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = '?' + search;
  }

  search = setHash(path + '/' + search);

  return search;
}

function loopSearchQuery(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key + '=' + obj[key]);
  }

  return '?' + arr.join('&');
}

function setQuery(obj) {
  var searchQuery = loopSearchQuery(obj);
  var query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}

function hashLocationSet(field, opt) {
  var setField = field;
  var option = opt;
  var link = void 0;

  switch (setField) {
    case 'search':
      link = setSearch(option);
      break;
    case 'query':
      link = setQuery(option);
      break;
    case 'path':
      link = setPath(option);
      break;
    case 'hash':
      link = setHash(option);
      break;
  }

  if (link) {
    redirectTo(link);
  } else {
    console.error('incorrect set location params');
  }
}

exports.default = hashLocationSet;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashLocationGet(field) {
  var loc = (0, _hashLocation2.default)();
  var thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    console.error('incorrect get location params');
  }
}

exports.default = hashLocationGet;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  hashLocation: _hashLocation2.default
};

exports.default = utils;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePageView = __webpack_require__(15);

var _HomePageView2 = _interopRequireDefault(_HomePageView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  view: _HomePageView2.default,
  title: 'homepage',
  isDefault: true
}];

exports.default = routes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var homeContainer = new _HomePageContainer2.default();

  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = homeContainer.Render();
};

var _HomePageContainer = __webpack_require__(16);

var _HomePageContainer2 = _interopRequireDefault(_HomePageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrFramework = __webpack_require__(1);

var _Image = __webpack_require__(17);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrFramework.Component {
  constructor() {
    super();
  }

  Markup() {
    var image = new _Image2.default('1', 'img', true);

    return '\n      <div class="home">\n        ' + image.Render() + '\n      </div>\n    ';
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _domrFramework = __webpack_require__(1);

var _imageLoadPromise = __webpack_require__(23);

var _imageLoadPromise2 = _interopRequireDefault(_imageLoadPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setScale(target, scale, x, y) {
  var thisTarget = target;
  var transform = thisTarget.style['transform-origin'] || '';
  thisTarget.style.transform = 'scale(' + scale + ')';

  if (x && y) {
    thisTarget.style['transform-origin'] = x + 'px ' + y + 'px';
  }

  if (transform && transform.trim() !== '') {
    console.log('called');
  }
}

var testWebP = function testWebP() {
  var canvas = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document.createElement('canvas') : {};
  canvas.width = canvas.height = 1;
  return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
};

exports.default = class extends _domrFramework.Component {
  constructor(name, folder) {
    var isWebP = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    super();
    this.name = name;
    this.folder = folder;
    this.isWebP = isWebP;
    this.isChrome = testWebP();
    this.format = this.isWebP && this.isChrome ? 'webp' : 'jpg';
    this.src = this.folder + '/' + this.name + '.' + this.format;
  }

  Markup() {
    var src = this.src;

    return '\n      <div class="image" style="background-image: url(' + src + ');"></div>\n    ';
  }

  AfterRenderDone() {
    var thisSelf = this.GetThisComponent();
    var src = this.src;

    (0, _imageLoadPromise2.default)(src).then(function (data) {
      var body = document.querySelector('body');
      var img = data.path[0];
      var zoomPositions = 6;
      var scaleStepValue = img.naturalHeight / body.clientHeight;
      var zoomStepValue = scaleStepValue / zoomPositions.toFixed(5);
      zoomStepValue = zoomStepValue.toFixed(5);
      var curruntZoomPosition = 1;
      var scale = 1;
      var mouseX = void 0;
      var mouseY = void 0;

      addEventListener('wheel', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (e.deltaY < 0) {
          if (curruntZoomPosition < zoomPositions) {
            curruntZoomPosition += 1;
            scale = curruntZoomPosition * zoomStepValue;
            scale = scale.toFixed(2);

            setScale(thisSelf, scale, mouseX, mouseY);
          }
        } else if (e.deltaY > 0) {
          if (curruntZoomPosition > 1) {
            curruntZoomPosition -= 1;
            scale = curruntZoomPosition * zoomStepValue;
            scale = scale.toFixed(2);

            if (curruntZoomPosition === 1) {
              scale = 1;
            }

            setScale(thisSelf, scale);
          }
        }
      });
    }).catch(function () {
      console.log('error');
    });
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function imageLoadPromise(url) {
  var promiseObj = new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function (data) {
      return resolve(data);
    };
    img.onerror = function () {
      return reject();
    };

    img.src = url;
  });
  return promiseObj;
}

exports.default = imageLoadPromise;

/***/ })
/******/ ]);