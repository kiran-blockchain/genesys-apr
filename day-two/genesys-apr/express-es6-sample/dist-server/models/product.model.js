"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Product = _mongoose["default"].model("Product", new _mongoose["default"].Schema({
  "price": Number,
  "description": String,
  "title": String,
  "name": String,
  "qty": Number
}));

var _default = Product;
exports["default"] = _default;