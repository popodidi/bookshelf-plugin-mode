import lodash from 'lodash';
import BaseModel from './BaseModel';

export default bookshelf => {
    // Bookshelf.Model = BaseModel(Bookshelf)
    console.log("pluginnnnnnnnnn");
    console.log(bookshelf.Model);
    bookshelf.Model = bookshelf.Model.extend({
        testPlugin: "testPlugintestestesteset"
    });
    console.log(bookshelf.Model);
    console.log("pluginnnnnnnnnn");
}