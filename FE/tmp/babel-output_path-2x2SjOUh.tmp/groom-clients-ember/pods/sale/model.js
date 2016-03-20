define('groom-clients-ember/pods/sale/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    subtotal: _emberData['default'].attr('string'),
    points: _emberData['default'].attr('string'),
    discount: _emberData['default'].attr('string'),
    total: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),

    client: _emberData['default'].belongsTo('client'),
    product: _emberData['default'].belongsTo('product'),
    barber: _emberData['default'].belongsTo('barber')
  });
});