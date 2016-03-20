define('groom-clients-ember/pods/haircut/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    barber: _emberData['default'].belongsTo('barber'),
    product: _emberData['default'].belongsTo('product'),
    salon: _emberData['default'].belongsTo('salon'),
    client: _emberData['default'].belongsTo('client'),

    paymentType: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date')

  });
});