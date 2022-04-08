"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnection = exports.db = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise;
var DBConnectionString = 'mongodb+srv://hcldemo:mt5EjNPshss421iI@cluster0.uhagr.mongodb.net/productsdb?retryWrites=true&w=majority';
var db = {};
exports.db = db;

var dbConnection = function dbConnection() {
  return _mongoose["default"].connect(DBConnectionString);
};

exports.dbConnection = dbConnection;