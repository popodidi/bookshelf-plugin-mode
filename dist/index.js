'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _BaseModel = require('./BaseModel');

var _BaseModel2 = _interopRequireDefault(_BaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (bookshelf) {
    // Bookshelf.Model = BaseModel(Bookshelf)
    console.log("pluginnnnnnnnnn");
    console.log(bookshelf.Model);
    bookshelf.Model = bookshelf.Model.extend({
        testPlugin: "testPlugintestestesteset"
    });
    console.log(bookshelf.Model);
    console.log("pluginnnnnnnnnn");
};

module.exports = exports['default'];