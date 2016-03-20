define('groom-clients-ember/pods/haircut/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    staff: _emberData['default'].belongsTo('staff', { async: true }),
    product: _emberData['default'].belongsTo('product', { async: true }),
    salon: _emberData['default'].belongsTo('salon', { async: true }),
    client: _emberData['default'].belongsTo('client', { async: true }),

    paymentType: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date')

  });
});