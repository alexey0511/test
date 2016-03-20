/*jshint node:true*/
var TABLE = "users";

module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();
  var User = require('../models/user');

  var config = require('../config.js');
  var db = require('../dbService');
  db = new db(config.development);

    function  _convertUsersToJSONAPI(item) {
      return {
        'type': 'users',
        'id': item.id,
        'attributes': {
          'name': item.name,
          'username': item.username,
          'password': item.password,
          'location': item.location,
          'role': item.role
        }
      };
    }
    function  _convertFromJsonToUser(item) {
      return {
        'id': item.id,
        'name': item.attributes.name,
        'username': item.attributes.username,
        'password': item.attributes.password,
        'location': item.attributes.location,
        'role': item.attributes.role
      };
    }
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16)
        .substring(1);
    }
    function _generateId() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
    }

    userRouter.get('/', function(req, res) {
      User.find(function(err, users) {
        var usersJSON = users.map(function(user) {return _convertUsersToJSONAPI(user); });
        res.json({'data': usersJSON});
      });
  });

  userRouter.post('/', function(req, res) {
    var user = new User({
      name: req.body.data.attributes.name,
      username: req.body.data.attributes.username,
      password: req.body.data.attributes.password,
      location: req.body.data.attributes.location,
      role: req.body.data.attributes.role
    });
    // record.id = _generateId();

    user.save(function (err, result) {
      res.json({ 'data': _convertUsersToJSONAPI(result) });
    });
  });

  userRouter.get('/:id', function(req, res) {
    User.findOne({id: req.params.id},function(err, result) {
      res.json({'data': _convertUsersToJSONAPI(result)});
    });
  });

  userRouter.patch('/:id', function(req, res) {
    var user = new User({
      name: req.body.data.attributes.name,
      username: req.body.data.attributes.username,
      password: req.body.data.attributes.password,
      location: req.body.data.attributes.location,
      role: req.body.data.attributes.role
    });
    // record.id = _generateId();

    user.save(function (err, result) {
      res.json({ 'data': _convertUsersToJSONAPI(result) });
    });
  });
  userRouter.delete('/:id', function(req, res) {
    User.find({ id:req.params.id }).remove().exec();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/user', require('body-parser'));
  app.use('/api/users', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/users', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/users', userRouter);
};
