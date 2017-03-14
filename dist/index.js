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
  var _toJSON = proto.toJSON,
      _fetch = proto.fetch,
      _fetchAll = proto.fetchAll;


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
      if (!_lodash2.default.isNull(this._mode) && !_lodash2.default.isUndefined(_lodash2.default.get(this.modes, this._mode))) {
        visible = _lodash2.default.get(this.modes, this._mode + '.visible');
        hidden = _lodash2.default.get(this.modes, this._mode + '.hidden');
      }

      if (visible) {
        json = _lodash2.default.pick.apply(_lodash2.default, _toConsumableArray([json].concat(visible)));
      }
      if (hidden) {
        json = _lodash2.default.omit.apply(_lodash2.default, _toConsumableArray([json].concat(hidden)));
      }

      return json;
    },
    /**
     * e.g.
     * .fetch({
    * originalOptions: {
      require: true,
      withRelated: ['photo']
     },
     modeOptions: {
      'photo': 'info'
     }
    })
     */
    fetch: function fetch(options) {
      var originalOptions = _lodash2.default.get(options, 'originalOptions');
      if (_lodash2.default.isUndefined(originalOptions)) {
        return _fetch.bind(this)(options);
      } else {
        var modeOptions = _lodash2.default.get(options, 'modeOptions');
        return _fetch.bind(this)(originalOptions).then(function (model) {
          //把mode options的東西接在related後面
          _lodash2.default.forEach(modeOptions, function (v, k) {
            if (model.related(k) instanceof bookshelf.Collection) {
              model.related(k).invokeThen("mode", v);
            } else {
              model.related(k).mode(v);
            } //end if
          });
          return model;
        });
      } //end if
    },
    fetchAll: function fetchAll(options) {
      var _this = this;

      var originalOptions = _lodash2.default.get(options, 'originalOptions');
      if (_lodash2.default.isUndefined(originalOptions)) {
        return _fetchAll.bind(this)(options);
      } else {
        var modeOptions = _lodash2.default.get(options, 'modeOptions');
        return _fetchAll.bind(this)(originalOptions).then(function (collection) {
          collection.models.map(function (v, k) {
            if (!_lodash2.default.isNull(_this._mode)) {
              v.mode(_this._mode);
            } //end if
            _lodash2.default.forEach(modeOptions, function (v1, k1) {
              if (v.related(k1) instanceof bookshelf.Collection) {
                v.related(k1).invokeThen("mode", v1);
              } else {
                v.related(k1).mode(v1);
              } //end if
            });
          });
          return collection;
        });
      } //end if
    }
  });
};

module.exports = exports['default'];