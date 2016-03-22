module.exports = function(app) {
  var express = require('express');
  var clientRouter = express.Router();
  var Client = require('../models/client');

  clientRouter
  .get('/', function(req, res) {
    Client.find(function(err, clients) {
      var clientsJSON = clients.map(function(client) {return _convertClientsToJSONAPI(client); });
      res.json({'data': clientsJSON});
    });
  })

  .post('/', function(req, res) {
    var client = new Client({
      firstName: req.body.data.attributes.firstName,
      lastName: req.body.data.attributes.firstName,
      email: req.body.data.attributes.email,
      phone1: req.body.data.attributes.phone1,
      phone2: req.body.data.attributes.phone2,

      progress: req.body.data.attributes.progress,
      visits: req.body.data.attributes.visits,
      freeVisits: req.body.data.attributes.freeVisits,

      token: req.body.data.attributes.token,

    });
    client.save(function (err, result) {
      res.json({ 'data': _convertClientsToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    Client.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertClientsToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    Client.findOne({_id: req.params.id}, function(err, client) {
      client.firstName = req.body.data.attributes.firstName;
      client.lastName = req.body.data.attributes.firstName;
      client.email = req.body.data.attributes.email;
      client.phone1 = req.body.data.attributes.phone1;
      client.phone2 = req.body.data.attributes.phone2;

      client.progress = req.body.data.attributes.progress;
      client.visits = req.body.data.attributes.visits;
      client.freeVisits = req.body.data.attributes.freeVisits;

      client.token = req.body.data.attributes.token;

      client.save(function(error, result) {
        res.json({ 'data': _convertClientsToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    Client.find({ _id:req.params.id }).remove().exec();
    res.json({});
  });

  app.use('/api/clients', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/clients', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/clients', clientRouter);
};

function  _convertClientsToJSONAPI(item) {
  var client =  {
    'type': 'clients',
    'attributes': {
      'first-name': item.firstName,
      'last-name': item.firstName,
      'email': item.email,
      'phone1': item.phone1,
      'phone2': item.phone2,

      'progress': item.progress,
      'visits': item.visits,
      'free-visits': item.freeVisits,

      'token': item.token,
    }
  };
  if (item.id) { client.id = item.id; }
  return client;
}
function  _convertFromJsonToClient(item) {
  var client = {
    firstName: req.body.data.attributes.firstName,
    lastName: req.body.data.attributes.firstName,
    email: req.body.data.attributes.email,
    phone1: req.body.data.attributes.phone1,
    phone2: req.body.data.attributes.phone2,

    progress: req.body.data.attributes.progress,
    visits: req.body.data.attributes.visits,
    freeVisits: req.body.data.attributes.freeVisits,

    token: req.body.data.attributes.token,
  };
  if (item.id) { client.id = item.id; }

  return client;
}
