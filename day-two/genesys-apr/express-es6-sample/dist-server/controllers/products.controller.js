"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = exports.getProducts = void 0;

var _product = _interopRequireDefault(require("../models/product.model"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getProducts = function getProducts(req, res) {
  var callOne = _axios["default"].get('https://luckyblock.brugu.io/api/v1/getTotalMetrics');

  var callTwo = _product["default"].find();

  Promise.all([callOne, callTwo]).then(function (result) {
    res.json({
      first: result[0].data.data,
      second: result[1]
    });
  })["catch"](function (ex) {
    res.json(ex);
  }); // .then(result=>{
  //     res.json(result);
  // }).catch(ex=>{
  //     res.json(ex);
  // })
};

exports.getProducts = getProducts;

var addProduct = function addProduct(req, res) {
  var product = req.body;
  console.log(product);
  var productToSave = new _product["default"](product);
  productToSave.save().then(function (result) {
    res.json(result);
  })["catch"](function (ex) {
    res.json(ex);
  });
};

exports.addProduct = addProduct;