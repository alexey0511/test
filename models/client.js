// models/client.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var LineItem = require('../models/line-item');
var ClientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone1: String,
  phone2: String,

  progress: Number,
  visits: Number,
  freeVisits: Number,

  createdOn: Date,
  lastVisit: Date,

  token: String

});

module.exports = mongoose.model('Client', ClientSchema);
