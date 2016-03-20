define('groom-clients-ember/pods/product/model', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  var attr = _emberData['default'].attr;
  var computed = _ember['default'].computed;
  exports['default'] = _emberData['default'].Model.extend({

    name: attr('string'),
    description: attr('string'),
    productType: attr('string'),
    price: attr('number'),

    label: computed('name', 'price', function () {
      return this.get('name') + ' : $' + this.get('price');
    })
  });
});