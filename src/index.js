import lodash from 'lodash';
import BaseModel from './BaseModel';

export default bookshelf => {
    const baseModel = BaseModel(bookshelf);
    bookshelf.Model = baseModel;
    bookshelf.Collection = bookshelf.Collection.extend({
        model: baseModel
    });

    console.log("pluginnnnnnnnnn");
    // console.log(bookshelf.Model);
    // bookshelf.Model = bookshelf.Model.extend({
    //     testPlugin: "testPlugintestestesteset"
    // });
    // bookshelf.Model.prototyp
    // console.log(bookshelf.Model);
    // console.log("pluginnnnnnnnnn");

}