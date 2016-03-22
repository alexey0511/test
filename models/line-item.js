// models/order.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LineItemSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },

  itemPrice: Number
});

module.exports = mongoose.model('LineItem', LineItemSchema);
