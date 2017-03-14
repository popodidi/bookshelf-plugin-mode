# bookshelf-plugin-mode

[![NPM version](https://img.shields.io/npm/v/bookshelf-plugin-mode.svg)](https://npmjs.org/package/bookshelf-plugin-mode)
[![Build Status](https://travis-ci.org/popodidi/bookshelf-plugin-mode.svg?branch=master)](https://travis-ci.org/popodidi/bookshelf-plugin-mode)

bookshelf-plugin-mode is inspired by [visibility](https://github.com/tgriesser/bookshelf/wiki/Plugin:-Visibility) plugin, providing functionality to specify different modes with  corresponding visible/hidden fields of model.

## install
```
npm install --save bookshelf-plugin-mode
```

## usage

### add plugin
```javascript
var mode = require('bookshelf-plugin-mode');
bookshelf.plugin(mode);
```

### define model modes
```js
const User = bookshelf.Model.extend({
  tableName: "user",
  idAttribute: "user_id",
  serialize: function () {
    return {
      id: this.get('user_id'),
      name: this.get('name'),
      tel: this.get('tel'),
      email: this.get('email')
    }
  },
  modes: {
    info: {
      hidden: ['id']
    },
    test: {
      visible: ['name','tel']
    }
  }
});

```

### use `mode(...)` in query
```js
new User().mode('info').fetch();
// {name: "username", tel: "user_tel", email: "user_email}
new User().mode('test').fetch();
// {name: "username, tel: "user_tel"}
```

### use `mode` in related
```js
new User().fetch({
   originalOptions: {
     require: true,
     withRelated: ['relatedTable', 'photo']
   },
    modeOptions: {
     'relatedTable': 'mode',
     'photo': 'info'
   }
});

```


