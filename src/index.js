import lodash from 'lodash';
import BaseModel from './BaseModel';

export default bookshelf => {
    // Bookshelf.Model = BaseModel(Bookshelf)
    console.log("pluginnnnnnnnnn");
    bookshelf.Model = bookshelf.Model.extend({
        testPlugin: "testPlugintestestesteset"
    });
}