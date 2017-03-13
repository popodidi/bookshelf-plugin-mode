import lodash from 'lodash';
import BaseModel from './BaseModel';

export default bookshelf => {
    // Bookshelf.Model = BaseModel(Bookshelf)
    bookshelf.Model = bookshelf.Model.extend({
        testPlugin() {
            return "testPlugin"
        }
    })
}