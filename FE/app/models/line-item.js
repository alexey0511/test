import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { Model, belongsTo, attr } = DS;

export default Model.extend({
  product:         belongsTo('product', {async:true}),
  barber:          belongsTo('staff', {async:true}),

  order:           belongsTo('order', {async:true}),

  itemPrice:       attr('number', {defaultValue:0}),
  itemClient:      computed.alias('order.client'),
  itemUser:       computed.alias('order.user'),
  itemPaymentType: computed.alias('order.paymentType'),
  itemDate:        computed.alias('order.date')
});
