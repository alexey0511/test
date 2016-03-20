/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();
  var expressJwt = require('express-jwt');
  var jwt = require('jsonwebtoken');

  var secret = "Muniah";
  var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  var config = require('../config.js');
  var db = require('../dbService');
  db = new db(config[env]);



  tokenRouter.post('/', function(req, res) {
    if(req.body.grant_type === 'password') {
      var success = function (result) {
          // We are sending the profile inside the token
          if (typeof result === "object" && result.length === 1) {
              user = {
                  username: result[0].username,
                  role: result[0].role,
                  location: result[0].location
              };
              token = jwt.sign(user, secret, {expiresIn: 24 * 60 * 60 * 1000});
              res.json({access_token: token,user_id: result[0].id, role: result[0].role});
          } else {
              res.status(400);
              res.json({error: 'Incorrect credentials'});
          }
      };
      attrs = {username: req.body.username, password: req.body.password};
      req.body.query = attrs;
      db.login(attrs, success);
    } else {
      res.status(400).send('{"error":"unsupported"}');
    }
  });
  // To use req.body, run:

    //  npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/token', require('body-parser').urlencoded({ extended: true }));
  app.use('/token', require('body-parser').json());
  app.use('/token', tokenRouter);
};
