// models/staff.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StaffSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Staff', StaffSchema);
