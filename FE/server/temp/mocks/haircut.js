/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var haircutRouter = express.Router();

  var haircuts = [{
    type:'haircuts',
    id: 1,
    attributes: {
      "date": new Date(),
      "price": 20,
      "payment-type": "eftpos"
    },
    "relationships": {
      "product": {
        "data": { "type": "products", "id": "1" }
      },
      "staff": {
        "data": { "type": "staffs", "id": "2" }
      },
      "salon": {
        "data": { "type": "salons", "id": "1" }
      },
      "client": {
        "data": { "type": "clients", "id": "1" }
      },
    }
  }, {
      type:'haircuts',
      id: 2,
      attributes: {
        "date": new Date(),
        "price": 30,
        "payment-type": "eftpos"
      },
      "relationships": {
        "product": {
          "data": { "type": "products", "id": "1" }
        },
        "staff": {
          "data": { "type": "staffs", "id": "1" }
        },
        "salon": {
          "data": { "type": "salons", "id": "2" }
        },
        "client": {
          "data": { "type": "clients", "id": "1" }
        },
      }
    }
  ];

  haircutRouter.get('/', function(req, res) {
    res.send({
      'data': haircuts
    });
  });

  haircutRouter.post('/', function(req, res) {

    var newhaircut = {
      type:'haircuts',
      id:haircuts.length+1,
      attributes: req.body.data.attributes
    };

//    haircuts.push(newhaircut);
    res.status(201).send({"data":newhaircut}).end();
  });

  haircutRouter.get('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'haircuts',
        attributes: haircuts[req.params.id-1].attributes
      }
    });
  });

  haircutRouter.put('/:id', function(req, res) {
    res.send({
      'data': {
        id: req.params.id,
        type:'haircuts',
        attributes: req.body.data.attributes
      }
    });
  });
  haircutRouter.patch('/:id', function(req, res) {
    haircuts.slice(req.params.id,1);
    haircuts.push({
      id: req.params.id,
      type:'haircuts',
      attributes: req.body.data.attributes
  });
    res.send({
      'data': {
        id: req.params.id,
        type:'haircuts',
        attributes: req.body.data.attributes
      }
    });
  });
  haircutRouter.delete('/:id', function(req, res) {
    haircuts.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/haircut', require('body-parser'));
  var bodyParser = require('body-parser');
  app.use('/api/haircuts', bodyParser.urlencoded({ extended: true }));
  app.use('/api/haircuts', bodyParser.json({ type: 'application/*+json' }));
  app.use('/api/haircuts', haircutRouter);
};
