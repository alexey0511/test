define('groom-clients-ember/pods/haircut/model', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = Model.extend({

    staff: belongsTo('staff', { async: true }),
    product: belongsTo('product', { async: true }),
    salon: belongsTo('salon', { async: true }),
    client: belongsTo('client', { async: true }),

    price: attr('number'),
    paymentType: attr('string'),
    date: attr('date')

  });
});