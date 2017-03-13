import lodash from 'lodash';
import BaseModel from './BaseModel';

module.exports = function (Bookshelf) {
    Bookshelf.Model = BaseModel(Bookshelf)
}