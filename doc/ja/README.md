# mithril-model


```javascript
const mmodel = require('mithril-model');
const mmodel.rule_set = require('validation-rule-set');

const memo = mmodel.prop(null, [{
  'type': 'required'
}]);

memo.valid(); // false
memo('foo');
memo(); // foo
memo.valid(); // false
memo.validate();  // true
memo.valid(); // true
memo.message(); // ''

const User = mmodel.create_model('users', {
  id: prop(null, [{
    'type': 'required'
  }]),
});

User.relations = {
  'companies': {
    'multiple': Company,
    'reflect'
  },
};

// relate(User, 'company', Company);
// relate(Company, 'users', [User]);

const user = new User(['id', 'name'], {age: 20});
```
