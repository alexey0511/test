define('groom-clients-ember/pods/product/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    productType: _emberData['default'].attr('string'),
    price: _emberData['default'].attr('number')

  });
});