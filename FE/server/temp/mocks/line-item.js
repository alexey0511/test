/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var lineItemRouter = express.Router();

  var lineItems = [{
    type:'lineItems',
    id: 1,
    attributes: {
      "itemPrice": 20,
    },
    "relationships": {
      "product": {
        "data": { "type": "products", "id": "1" }
      },
      "barber": {
        "data": { "type": "staffs", "id": "2" }
      },
      "order": {
        "data": { "type": "orders", "id": "1" }
      }
    }
  }, {
      type:'lineItems',
      id: 2,
      attributes: {
        "itemPrice": 30,
      },
      "relationships": {
        "product": {
          "data": { "type": "products", "id": "1" }
        },
        "barber": {
          "data": { "type": "staffs", "id": "1" }
        },
        "order": {
          "data": { "type": "orders", "id": "1" }
        },
      }
    }
  ];

  lineItemRouter.get('/', function(req, res) {
    res.send({
      'data': lineItems
    });
  });

  lineItemRouter.post('/', function(req, res) {

    var newlineItem = {
      type:'lineItems',
      id:lineItems.length+1,
      attributes: req.body.data.attributes
    };

//    lineItems.push(newlineItem);
    res.status(201).send({"data":newlineItem}).end();
  });

  lineItemRouter.get('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'lineItems',
        attributes: lineItems[req.params.id-1].attributes
      }
    });
  });

  lineItemRouter.put('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'lineItems',
        attributes: req.body.data.attributes
      }
    });
  });
  lineItemRouter.patch('/:id', function(req, res) {
    lineItems.slice(req.params.id,1);
    lineItems.push({
      id: req.params.id,
      type:'lineItems',
      attributes: req.body.data.attributes
  });
    res.send({
      'data': {
        id: req.params.id,
        type:'lineItems',
        attributes: req.body.data.attributes
      }
    });
  });
  lineItemRouter.delete('/:id', function(req, res) {
    lineItems.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/lineItem', require('body-parser'));
  var bodyParser = require('body-parser');
  app.use('/api/line-items', bodyParser.urlencoded({ extended: true }));
  app.use('/api/line-items', bodyParser.json({ type: 'application/*+json' }));
  app.use('/api/line-items', lineItemRouter);
};
