define('groom-clients-ember/pods/order/model', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  var hasMany = _emberData['default'].hasMany;
  var computed = _ember['default'].computed;
  exports['default'] = Model.extend({

    staff: belongsTo('staff', { async: true }),
    salon: belongsTo('salon', { async: true }),
    client: belongsTo('client', { async: true }),

    lineItems: hasMany('line-item', { async: true }),

    paymentType: attr('string'),
    date: attr('date'),

    lineItemPrices: computed.mapBy('lineItems', 'itemPrice'),
    totalPrice: computed.sum('lineItemPrices'),
    clientName: computed.alias('client.fullName')
  });
});