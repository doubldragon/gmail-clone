(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app4.default.$inject = ['$rootScope', '$interval'];

var appComponent = {
	template: _app2.default,
	controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl($rootScope, $interval) {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "\n<navbar></navbar>\n<sidebar></sidebar>\n<email></email>";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _navbar = require('./components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = require('./components/sidebar/sidebar.component');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _email = require('./components/email/email.component');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("In app.js");
angular.module('app', []).component('app', _app2.default).component('navbar', _navbar2.default).component('sidebar', _sidebar2.default).component('email', _email2.default);

},{"./app.component":1,"./components/email/email.component":5,"./components/navbar/navbar.component":8,"./components/sidebar/sidebar.component":11}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _email = require('./email.html');

var _email2 = _interopRequireDefault(_email);

var _email3 = require('./email.controller');

var _email4 = _interopRequireDefault(_email3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailComponent = {
	bindings: {},
	template: _email2.default,
	controller: ['$rootScope', '$interval', _email4.default],
	controllerAs: '$ctrl'

};

exports.default = emailComponent;

},{"./email.controller":6,"./email.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var emailController = function emailController($rootScope, $interval) {
	_classCallCheck(this, emailController);

	var ctrl = this;
	ctrl.title = "Bmail";
};

exports.default = emailController;

},{}],7:[function(require,module,exports){
module.exports = "<p>Hello World</p>";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _navbar = require('./navbar.html');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar3 = require('./navbar.controller');

var _navbar4 = _interopRequireDefault(_navbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbarComponent = {
	bindings: {},
	template: _navbar2.default,
	controller: ['$rootScope', '$interval', _navbar4.default],
	controllerAs: '$ctrl'

};

exports.default = navbarComponent;

},{"./navbar.controller":9,"./navbar.html":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navbarController = function navbarController($rootScope, $interval) {
	_classCallCheck(this, navbarController);

	var ctrl = this;
	ctrl.title = "Bmail";
};

exports.default = navbarController;

},{}],10:[function(require,module,exports){
module.exports = "<div class=\"row top-row vertical-center\">\n    <div class=\"col-sm-3 col-md-2\"><img class='logo center-block' src='/app/assets/images/bmail.jpg'></div>\n    <div class=\"col-lg-6\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Bmail..\">\n            <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> </button>\n            </span>\n        </div>\n        <!-- /input-group -->\n    </div>\n    <!-- /.col-lg-6 -->\n    <span id='right-search'>\n\t<!-- Split button -->\n\t<div class=\"btn-group\">\n  \t\t<button type=\"button\" class=\"btn btn-danger\">Action</button>\n  \t\t<button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    \t<span class=\"caret\"></span>\n    <span class=\"sr-only\">Toggle Dropdown</span>\n    </button>\n    <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">Help</a></li>\n        <li><a href=\"#\">Another action</a></li>\n        <li><a href=\"#\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#\">Logout</a></li>\n    </ul>\n</div>\n<img class='profile' src='/app/assets/images/profile.png'></span>\n\n</div>\n<hr>\n\n<!-- <ul class=\"nav nav-tabs nav-justified\">\n  <li><a href=\"#\">Inbox</a></li>\n  <li><a href=\"#\">Social</a></li>\n  <li><a href=\"#\">Promotions</a></li>\n  <li><a href=\"#\">Updates</a></li>\n</ul> -->\n\n<!-- /.row -->\n<!-- <link rel=\"stylesheet\" href=\"navbar.scss\"> -->\n";

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sidebar = require('./sidebar.html');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _sidebar3 = require('./sidebar.controller');

var _sidebar4 = _interopRequireDefault(_sidebar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sidebarComponent = {
	bindings: {},
	template: _sidebar2.default,
	controller: ['$rootScope', '$interval', _sidebar4.default],
	controllerAs: '$ctrl'

};

exports.default = sidebarComponent;

},{"./sidebar.controller":12,"./sidebar.html":13}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidebarController = function sidebarController($rootScope, $interval) {
	_classCallCheck(this, sidebarController);

	var ctrl = this;
	ctrl.title = "Bmail";
};

exports.default = sidebarController;

},{}],13:[function(require,module,exports){
module.exports = "<div class=\"col-sm-3 col-md-2\">\n            <a href=\"#\" class=\"btn btn-danger btn-sm btn-block\" role=\"button\"><i class=\"glyphicon glyphicon-edit\"></i> Compose</a>\n            <hr>\n            <ul class=\"nav nav-pills nav-stacked\">\n                <li class=\"active\"><a href=\"#\"><span class=\"badge pull-right\">32</span> Inbox </a>\n                </li>\n                <li><a href=\"#\">Starred</a></li>\n                <li><a href=\"#\">Important</a></li>\n                <li><a href=\"#\">Sent Mail</a></li>\n                <li><a href=\"#\"><span class=\"badge pull-right\">3</span>Drafts</a></li>\n            </ul>\n        </div>\n\n<!-- <nav class=\"navbar navbar-default sidebar col-md-2\" role=\"navigation\">\n    <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>      \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li><a href=\"#\">Inbox <span class=\"badge\">42</span></a></li>\n        <li class=\"active\"><a href=\"#\">Inbox <span class=\"badge\">42</span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\"></span></a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Sent Mail <span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n            <li><a href=\"{{URL::to('createusuario')}}\">Crear</a></li>\n            <li><a href=\"#\">Modificar</a></li>\n            <li><a href=\"#\">Reportar</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Informes</a></li>\n          </ul>\n        </li>          \n        <li ><a href=\"#\">Drafts<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-th-list\"></span></a></li>        \n        <li ><a href=\"#\">Tags<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-tags\"></span></a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->";

},{}]},{},[4]);