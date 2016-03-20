/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var moment = require('moment');
  var report1Router = express.Router();

  var reports1s = [{
    type:'report-sales-by-people',
    id: 1,
    attributes: {
      "start-date": moment(),
      "end-date": moment(),
      "report": "Report",
      "eftpos": 200,
      "cash": 100
    },
    "relationships": {
      "staff": {
        "data": { "type": "staffs", "id": "1" }
      }
    }
  },{
    type:'report-sales-by-people',
    id: 2,
    attributes: {
      "start-date": moment(),
      "end-date": moment(),
      "report": "Report",
      "eftpos": 100,
      "cash": 50
    },
    "relationships": {
      "staff": {
        "data": { "type": "staffs", "id": "2" }
      }
    }
  }];

  report1Router.get('/', function(req, res) {
    if (req.query.startDate === moment().startOf('isoweek').format('DD-MM-YYYY') ) {
      res.send({
        'data': reports1s,
      });

    } else {
    res.send({
      // 'data': reports1s,
      'query':req.query.startDate,
      'answer': moment().startOf('week').format('DD-MM-YYYY'),
      'data':[]
    });
    }
  });

  // orderRouter.post('/', function(req, res) {
  //   req.body.data.attributes.date = new Date();
  //   var neworder = {
  //     type:'orders',
  //     id:orders.length+1,
  //     attributes: req.body.data.attributes
  //
  //   };
  //   orders.push(neworder);
  //   res.status(201).send({"data":neworder}).end();
  // });

  report1Router.get('/:startDate', function(req, res) {
    console.log(moment().toDate());
    if (req.params.startDate) {
      res.send({
        'data': reports1s,
        'another': moment().toDate()
      });
    }
  });

  // orderRouter.put('/:id', function(req, res) {
  //   res.send({
  //     'order': {
  //       id: req.params.id
  //     }
  //   });
  // });
  // orderRouter.patch('/:id', function(req, res) {
  //   res.send({
  //     'data': {
  //       type:'orders',
  //       id: req.params.id,
  //     }
  //   });
  // });
  // orderRouter.delete('/:id', function(req, res) {
  //   orders.pop();
  //   res.status(204).end();
  // });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/order', require('body-parser'));


  app.use('/api/report-sales-by-people', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/report-sales-by-people', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/report-sales-by-people', report1Router);
};
