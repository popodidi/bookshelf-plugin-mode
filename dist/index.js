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
    var baseModel = (0, _BaseModel2.default)(bookshelf);
    bookshelf.Model = baseModel;
    bookshelf.Collection = bookshelf.Collection.extend({
        model: baseModel
    });

    console.log("pluginnnnnnnnnn");
    // console.log(bookshelf.Model);
    // bookshelf.Model = bookshelf.Model.extend({
    //     testPlugin: "testPlugintestestesteset"
    // });
    // bookshelf.Model.prototyp
    // console.log(bookshelf.Model);
    // console.log("pluginnnnnnnnnn");
};

module.exports = exports['default'];