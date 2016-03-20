/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var reportRouter = express.Router();

  var reports = [{
    type:'reports',
    id: 1,
    attributes: {
    },
    "relationships": {
    }
  }];

  reportRouter.get('/', function(req, res) {
    res.send({
      'data': reports
    });
  });

  reportRouter.post('/', function(req, res) {
    var newreport = {
      type:'reports',
      id:reports.length+1,
      attributes: req.body.data.attributes

    };
    reports.push(newreport);
    res.status(201).send({"data":newreport}).end();
  });

  reportRouter.get('/:id', function(req, res) {
    res.send({
      'data': reports[req.params.id-1]
    });
  });

  reportRouter.put('/:id', function(req, res) {
    res.send({
      'report': {
        id: req.params.id
      }
    });
  });
  reportRouter.patch('/:id', function(req, res) {
    res.send({
      'data': {
        type:'reports',
        id: req.params.id,
      }
    });
  });
  reportRouter.delete('/:id', function(req, res) {
    reports.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/report', require('body-parser'));


  app.use('/api/reports', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/reports', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/reports', reportRouter);
};
