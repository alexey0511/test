

// models/line item.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LineItem = require('../models/line-item');

var OrderSchema = new Schema({
  date: Date,
  paymentType: String,

  'user': { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  'client': { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  'line-items': [LineItem.schema]

});

module.exports = mongoose.model('Order', OrderSchema);
