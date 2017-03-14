import _ from 'lodash';

export default bookshelf => {
  const proto = bookshelf.Model.prototype;
  const {toJSON, fetch, fetchAll} = proto;

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
    mode: function (mode) {
      this._mode = mode;
      return this;
    },
    toJSON: function () {
      let json = toJSON.apply(this, arguments);

      var visible, hidden;
      if (!_.isNull(this._mode) && !_.isUndefined(_.get(this.modes, this._mode))) {
        visible = _.get(this.modes, this._mode + '.visible');
        hidden = _.get(this.modes, this._mode + '.hidden');
      }

      if (visible) {
        json = _.pick(...[json].concat(visible));
      }
      if (hidden) {
        json = _.omit(...[json].concat(hidden));
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
    fetch: function (options) {
      let originalOptions = _.get(options, 'originalOptions');
      if (_.isUndefined(originalOptions)) {
        return fetch.bind(this)(options);
      } else {
        let modeOptions = _.get(options, 'modeOptions');
        return fetch.bind(this)(originalOptions).then((model) => {
          //把mode options的東西接在related後面
          _.forEach(modeOptions, (v, k) => {
            if (model.related(k) instanceof bookshelf.Collection) {
              model.related(k).invokeThen("mode", v);
            } else {
              model.related(k).mode(v);
            }//end if
          });
          return model;
        });
      }//end if
    },
    fetchAll: function (options) {
      let originalOptions = _.get(options, 'originalOptions');
      if (_.isUndefined(originalOptions)) {
        return fetchAll.bind(this)(options);
      } else {
        let modeOptions = _.get(options, 'modeOptions');
        return fetchAll.bind(this)(originalOptions).then((collection) => {
          collection.models.map((v, k) => {
            if (!_.isNull(this._mode)) {
              v.mode(this._mode);
            }//end if
            _.forEach(modeOptions, (v1, k1) => {
              if (v.related(k1) instanceof bookshelf.Collection) {
                v.related(k1).invokeThen("mode", v1);
              } else {
                v.related(k1).mode(v1);
              }//end if
            });
          });
          return collection;
        });
      }//end if
    }
  });
}