module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();
  var User = require('../models/user');

  userRouter
  .get('/', function(req, res) {
    User.find(function(err, users) {
      var usersJSON = users.map(function(user) {return _convertUsersToJSONAPI(user); });
      res.json({'data': usersJSON});
    });
  })

  .post('/', function(req, res) {
    var user = new User({
      username: req.body.data.attributes.username,
      password: req.body.data.attributes.password,
      location: req.body.data.attributes.location,
      role: req.body.data.attributes.role
    });
    user.save(function (err, result) {
      res.json({ 'data': _convertUsersToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    User.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertUsersToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
      user.username = req.body.data.attributes.username;
      user.password = req.body.data.attributes.password;
      user.location = req.body.data.attributes.location;
      user.role = req.body.data.attributes.role;
      user.save(function(error, result) {
        res.json({ 'data': _convertUsersToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    User.find({ _id:req.params.id }).remove().exec();
    res.json({});
  });

  app.use('/api/users', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/users', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/users', userRouter);
};

function  _convertUsersToJSONAPI(item) {
  var user =  {
    'type': 'users',
    'attributes': {
      'username': item.username,
      'password': item.password,
      'location': item.location,
      'role': item.role
    }
  };
  if (item.id) { user.id = item.id; }
  return user;
}
function  _convertFromJsonToUser(item) {
  var user = {
    'username': item.attributes.username,
    'password': item.attributes.password,
    'location': item.attributes.location,
    'role': item.attributes.role
  };
  if (item.id) { user.id = item.id; }

  return user;
}
