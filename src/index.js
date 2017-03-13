import lodash from 'lodash';
import BaseModel from './BaseModel';

export default bookshelf => {
    // Bookshelf.Model = BaseModel(Bookshelf)
    console.log("plugin ? ");
    bookshelf.Model = bookshelf.Model.extend({
        testPlugin() {
            return "testPlugintestestesteset"
        }
    })
    return bookshelf
}