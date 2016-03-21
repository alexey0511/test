// models/product.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  description: String,
  productType: String,
  price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
