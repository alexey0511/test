/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var clientRouter = express.Router();

  var clients = [{
    type:'clients',
    id: 1,
    attributes: {
      'first-name': 'Alexey',
      'last-name': 'Omelchenko',
      email: 'om.alex@hotmail.com',
      phone1: '64225051187',
      phone2: '',
      points: 0,
      progress: 1,
      visits: 1,
      'free-visits': 0,
      'created-on': '2015-05-09T01:31:50.716Z',
      'last-visit': '2015-07-29T21:41:32.826Z',
      token: '330500'
    }
  },{
      type:'clients',
      id: 2,
      attributes: {
        'first-name': 'Muniah',
        'last-name': 'Suaeli',
        email: 'om.alex@hotmail.com',
        phone1: '64220998780',
        phone2: '',
        points: 0,
        progress: 1,
        visits: 1,
        'free-visits': 0,
        'created-on': '2015-05-09T01:31:50.716Z',
        'last-visit': '2015-07-29T21:41:32.826Z',
        token: '330500'
      }
    }, {
      type:'clients',
      id: 3,
      attributes: {
        'first-name': 'Viktoria',
        'last-name': 'Omelchenko',
        email: 'om.alex@hotmail.com',
        phone1: '1111111',
        phone2: '',
        points: 0,
        progress: 1,
        visits: 1,
        'free-visits': 0,
        'created-on': '2015-05-09T01:31:50.716Z',
        'last-visit': '2015-07-29T21:41:32.826Z',
        token: '330500'
      }
  }];

  clientRouter.get('/', function(req, res) {
    res.send({
      'data': clients
    });
  });

  clientRouter.post('/', function(req, res) {
    /////////////
    var attrs = req.body.data.attributes;
    var firstNameClean = attrs['first-name'] || '';
    var lastNameClean = attrs['last-name'] || '';
    var emailClean = attrs.email || '';
    var phone1Clean = attrs.phone1 || '';
    var phone2Clean = attrs.phone2 || '';
    var tokenClean = attrs.token || '';

    var newclient = {
      type:'clients',
      id:clients.length+1,
      attributes: {
        'first-name': firstNameClean,
        'last-name': lastNameClean,
        email: emailClean,
        phone1: phone1Clean,
        phone2: phone2Clean,
        points: 0,
        progress: 0,
        visits: 0,
        'free-visits': 0,
        'created-on': new Date(),
        'last-visit': null,
        token: tokenClean
      }
    };

//    clients.push(newclient);
    res.status(201).send({"data":newclient}).end();
  });

  clientRouter.get('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'clients',
        attributes: clients[req.params.id-1].attributes
      }
    });
  });

  clientRouter.put('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'clients',
        attributes: req.body.data.attributes
      }
    });
  });
  clientRouter.patch('/:id', function(req, res) {
    clients.slice(req.params.id,1);
    clients.push({
      id: req.params.id,
      type:'clients',
      attributes: req.body.data.attributes          
  });
    res.send({
      'data': {
        id: req.params.id,
        type:'clients',
        attributes: req.body.data.attributes
      }
    });
  });
  clientRouter.delete('/:id', function(req, res) {
    clients.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/client', require('body-parser'));
  var bodyParser = require('body-parser');
  app.use('/api/clients', bodyParser.urlencoded({ extended: true }));
  app.use('/api/clients', bodyParser.json({ type: 'application/*+json' }));
  app.use('/api/clients', clientRouter);
};
