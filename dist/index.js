'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (bookshelf) {
    var proto = bookshelf.Model.prototype;
    var _toJSON = proto.toJSON;

    bookshelf.Model = bookshelf.Model.extend({
        modes: {
            // "mode_1": {
            //     visible: ['a', 'b'],
            //     hidden : ['c', 'd']
            // },
            // "mode_2": {
            //     visible: [],
            //     hidden : []
            // }
        },
        _mode: null,
        mode: function mode(_mode) {
            this._mode = _mode;
            return this;
        },
        toJSON: function toJSON() {
            var json = _toJSON.apply(this, arguments);

            var visible, hidden;
            if (!_.isNull(this._mode) && !_.isUndefined(_.get(this.modes, this._mode))) {
                visible = _.get(this.modes, this._mode + '.visible');
                hidden = _.get(this.modes, this._mode + '.hidden');
            }

            if (visible) {
                var _ref;

                json = (_ref = _).pick.apply(_ref, _toConsumableArray([json].concat(visible)));
            }
            if (hidden) {
                var _ref2;

                json = (_ref2 = _).omit.apply(_ref2, _toConsumableArray([json].concat(hidden)));
            }

            return json;
        }
    });
};

module.exports = exports['default'];