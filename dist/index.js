'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Bookshelf) {
    Bookshelf.Model = (0, _BaseModel2.default)(Bookshelf);
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }