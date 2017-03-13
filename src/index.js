import lodash from 'lodash';
import BaseModel from './BaseModel';

export default function (Bookshelf) {
    // Bookshelf.Model = BaseModel(Bookshelf)
    Bookshelf.Model = Bookshelf.Model.extend({
        testPlugin() {
            return "testPlugin"
        }
    })
}