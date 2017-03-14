import lodash from 'lodash';

export default bookshelf => {
    const proto = bookshelf.Model.prototype;
    const toJSON = proto.toJSON;

    bookshelf.Model = bookshelf.Model.extend({
        modes : {
            // "mode_1": {
            //     visible: ['a', 'b'],
            //     hidden : ['c', 'd']
            // },
            // "mode_2": {
            //     visible: [],
            //     hidden : []
            // }
        },
        _mode : null,
        mode  : function (mode) {
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
        }
    });
}