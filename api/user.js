// api/user.js

var User = require('../models/user');

module.exports.getAllUsers = function(req, res) {
  User.find(function(err, users) {
    if (err) { res.send(err); }
    var usersJSON = users.map(function(user) {return _convertUsersToJSONAPI(user); });
    res.json({'data': usersJSON});
  });
};

module.exports.addUser = function(req,res) {
  var user = new User(_convertFromJsonToUser(req.body.data));
  user.save(function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json({data: _convertUsersToJSONAPI(result)});
  });
};

module.exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function(err, result) {
    if (result) {
      res.json({'data': _convertUsersToJSONAPI(result)});
    } else {
      res.json({'data':''});
    }
  });
};

module.exports.login = function(req, res) {
  var expressJwt = require('express-jwt');
  var jwt = require('jsonwebtoken');
  var secret = "Muniah";

  User.findOne({username:req.body.username, password: req.body.password}, function(err, result) {
    if(req.body.grant_type === 'password') {
      var user = {
          username: result.name,
          role: result.role,
          location: result.location
      };
      var token = jwt.sign(user, secret, {expiresIn: 24 * 60 * 60 * 1000});
      // res.json({access_token: token,user_id: result.id, role: result.role});
      res.json({access_token: token,user_id: result.id, role: result.role});
    } else {
      res.status(400);
      res.json({error: 'Incorrect credentials'});
    }
  });
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
    // 'id': item.id,
    'username': item.attributes.username,
    'password': item.attributes.password,
    'location': item.attributes.location,
    'role': item.attributes.role
  };
  if (item.id) { user.id = item.id; }

  return user;
}
