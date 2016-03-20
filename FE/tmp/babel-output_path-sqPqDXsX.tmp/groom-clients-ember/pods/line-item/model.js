define('groom-clients-ember/pods/line-item/model', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  var computed = _ember['default'].computed;
  var Model = _emberData['default'].Model;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = Model.extend({
    product: belongsTo('product', { async: true }),
    barber: belongsTo('staff', { async: true }),

    order: belongsTo('order', { async: true }),

    itemPrice: computed.alias('product.price'),
    itemClient: computed.alias('order.client'),
    itemSalon: computed.alias('order.salon'),
    itemPaymentType: computed.alias('order.paymentType'),
    itemDate: computed.alias('order.date')
  });
});