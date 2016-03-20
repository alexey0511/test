// models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  location: String,
  role: String
});

module.exports = mongoose.model('User', UserSchema);
