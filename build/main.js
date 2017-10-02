require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_session__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socketEvents__ = __webpack_require__(9);








var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var DB_URI = process.env.DB_URL || 'mongodb://localhost/chat-app-dev';
var server = __webpack_require__(10).createServer(app);

var io = __webpack_require__(11).listen(server);
Object(__WEBPACK_IMPORTED_MODULE_6__socketEvents__["a" /* default */])(io);

__WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connect(DB_URI);

app.set('port', port);

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

app.use(__WEBPACK_IMPORTED_MODULE_4_express_session___default()({
  secret: process.env.secretKey || '7CigmgctzNfojD5D3eJ7tY62axBuFICn',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(12);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
// app.listen(port, host)
server.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(5);





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(14);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Mock Users
var users = [{ id: 1, name: 'Joan Pearson', username: 'john', avatar: 'http://lorempixel.com/55/55/people/1/' }, { id: 2, name: 'Ruth Kelly', username: 'ruth', avatar: 'http://lorempixel.com/55/55/people/2/' }, { id: 3, name: 'Dennis Bennett', username: 'dennis', avatar: 'http://lorempixel.com/55/55/people/3/' }, { id: 4, name: 'Julia Munoz', username: 'julia', avatar: 'http://lorempixel.com/55/55/people/4/' }, { id: 5, name: 'David Walker', username: 'david', avatar: 'http://lorempixel.com/55/55/people/5/' }, { id: 6, name: 'Aaron Gutierrez', username: 'aaron', avatar: 'http://lorempixel.com/55/55/people/6/' }, { id: 7, name: 'Margaret Pearson', username: 'margaret', avatar: 'http://lorempixel.com/55/55/people/7/' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].find({}).then(function (users) {
    res.json(users);
  }).catch(function (error) {
    // Place error handler here
    res.status(500).send('Something went wrong');
  });
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(13);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add POST - /api/register
router.post('/register', function (req, res, next) {
  // Check for registration errors
  var username = req.body.username;
  var name = req.body.name;
  var password = req.body.password;

  // Return error if username is not provided
  if (!username) {
    return res.status(422).send({ error: 'You must enter an username.' });
  }

  // Return error if name not provided
  if (!name) {
    return res.status(422).send({ error: 'You must enter name.' });
  }

  // Return error if no password provided
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].findOne({ username: username }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    // If user is not unique, return error
    if (existingUser) {
      return res.status(422).send({ error: 'That username address is already in use.' });
    }

    // If username is unique and password was provided, create account
    var user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */]({
      username: username,
      password: password,
      name: name
    });

    user.save(function (err, user) {
      if (err) {
        return next(err);
      }

      var userInfo = Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* userTransformer */])(user);

      req.session.authUser = userInfo;

      res.status(201).json(userInfo);
    });
  });
});

// Add POST - /api/login
router.post('/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    // Use static name for now
    var authUser = {
      id: 8,
      name: req.body.username,
      username: req.body.username,
      avatar: 'http://lorempixel.com/55/55/people/8/'
    };

    req.session.authUser = authUser;
    return res.json(authUser);
  }
  res.status(401).json({ message: 'Bad credentials' });
});

// Add POST - /api/logout
router.post('/logout', function (req, res) {
  delete req.session.authUser;
  res.json({ ok: true });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (io) {
  // Set socket.io listeners.
  io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('send-message', function (message) {
      socket.broadcast.emit('new-message', message);
    });
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'BinBytes - Chat App',
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' }, { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: ['./node_modules/milligram/dist/milligram.min.css'],
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  /*
  ** Plugins
  */
  plugins: ['~plugins/socket.io'],
  /*
  ** Axios settings
  */
  axios: {
    baseURL: process.env.HOST_URL || 'http://' + (process.env.HOST || 'localhost') + ':' + (process.env.HOST_URL || 3000)
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://localhost:3000'
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userTransformer; });
var userTransformer = function userTransformer(request) {
  return {
    _id: request._id,
    firstName: request.name,
    username: request.username
  };
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__);
// Importing Node packages required for schema



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

//================================
// User Schema
//================================
var UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

//================================
// User ORM Methods
//================================

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  var user = this,
      SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs___default.a.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);

    __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs___default.a.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs___default.a.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }

    cb(null, isMatch);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map