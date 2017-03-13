import lodash from 'lodash';
import BaseModel from './BaseModel';

export default function (Bookshelf) {
    // Bookshelf.Model = BaseModel(Bookshelf)
    Bookshelf.Model = class extends Bookshelf.Model {
        testPlugin() {
            return "testPlugin"
        }
    }
}