
module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();

  userRouter.get('/', function(req, res) {
    res.send({
      'data': "HELLO"
    });
  });
};
