define('groom-clients-ember/models/order', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  var hasMany = _emberData['default'].hasMany;
  var computed = _ember['default'].computed;
  exports['default'] = Model.extend({
    date: attr('date'),
    paymentType: attr('string'),

    user: belongsTo('user', { async: true }),
    client: belongsTo('client', { async: true }),

    lineItems: hasMany('line-item', { async: true }),

    lineItemPrices: computed.mapBy('lineItems', 'itemPrice'),
    totalPrice: computed.sum('lineItemPrices'),
    clientName: computed.alias('client.fullName')
  });
});