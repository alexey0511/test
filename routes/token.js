/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();
  var expressJwt = require('express-jwt');
  var jwt = require('jsonwebtoken');
  var User = require('../models/user');
  var config         = require('../config.js');
  env = process.env.NODE_ENV || 'development';

  var secret = config[env].secret;

  tokenRouter.post('/', function(req, res) {

    User.findOne({username:req.body.username, password: req.body.password}, function(err, result) {
      if(result && req.body.grant_type === 'password') {
        var user = {
            username: result.name,
            role: result.role,
            location: result.location
        };
        var token = jwt.sign(user, secret, {expiresIn: 24 * 60 * 60 * 1000});
        res.json({access_token: token,user_id: result.id, role: result.role});
      } else {
        res.status(400);
        res.json({error: 'Incorrect credentials'});
      }
    });
  });

  app.use('/token', require('body-parser').urlencoded({ extended: true }));
  app.use('/token', require('body-parser').json());
  app.use('/token', tokenRouter);
};
