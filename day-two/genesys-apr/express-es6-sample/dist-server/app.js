"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _dbconfig = require("./dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
console.log(process.NODE_ENV);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use(function (req, res, next) {
  req.body.mycustomInfo = "es6Learning"; //add your filtering conditions here
  // if they meet then proceed to the next level
  // else stop

  next();
});
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
(0, _dbconfig.dbConnection)().then(function (result) {
  console.log("Database Connected");
})["catch"](function (ex) {
  console.log(ex);
});
var _default = app;
exports["default"] = _default;