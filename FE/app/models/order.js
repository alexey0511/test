import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr, belongsTo, hasMany } = DS;
const { computed } = Ember;

export default Model.extend({
  date:          attr('date'),
  paymentType:   attr('string'),

  user:         belongsTo('user', {async:true}),
  client:        belongsTo('client', {async:true}),

  lineItems:     hasMany('line-item', {async:true}),


  lineItemPrices: computed.mapBy('lineItems','itemPrice'),
  totalPrice:     computed.sum('lineItemPrices'),
  clientName:     computed.alias('client.fullName')
});
