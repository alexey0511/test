/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var orderRouter = express.Router();

  var orders = [{
    type:'orders',
    id: 1,
    attributes: {
      "date": new Date(),
      "payment-type": "eftpos"
    },
    "relationships": {
      "salon": {
        "data": { "type": "salons", "id": "1" }
      },
      "client": {
        "data": { "type": "clients", "id": "1" }
      },
      "line-items": {
        "data": [
        { "type": "line-items", "id": "1" },
        { "type": "line-items", "id": "2" }
        ]
      }
    }
  }];

  orderRouter.get('/', function(req, res) {
    res.send({
      'data': orders
    });
  });

  orderRouter.post('/', function(req, res) {
    req.body.data.attributes.date = new Date();
    var neworder = {
      type:'orders',
      id:orders.length+1,
      attributes: req.body.data.attributes

    };
    orders.push(neworder);
    res.status(201).send({"data":neworder}).end();
  });

  orderRouter.get('/:id', function(req, res) {
    res.send({
      'data': orders[req.params.id-1]
    });
  });

  orderRouter.put('/:id', function(req, res) {
    res.send({
      'order': {
        id: req.params.id
      }
    });
  });
  orderRouter.patch('/:id', function(req, res) {
    res.send({
      'data': {
        type:'orders',
        id: req.params.id,
      }
    });
  });
  orderRouter.delete('/:id', function(req, res) {
    orders.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/order', require('body-parser'));


  app.use('/api/orders', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/orders', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/orders', orderRouter);
};
