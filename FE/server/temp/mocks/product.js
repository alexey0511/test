/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var productRouter = express.Router();

  var products = [{
    type:'products',
    id: 1,
    attributes: {
      name:'SC&CL',
      description:'product1 description',
      'product-type':'service',
      price:'30.00'
    }
  }, {
    type:'products',
    id: 2,
    attributes: {
      name:'SC&Beard',
      description:'product1 description',
      'product-type':'service',
      price:'35.00'
    }
  }, {
    type:'products',
    id: 3,
    attributes: {
      name:'MCC',
      description:'product1 description',
      'product-type':'service',
      price:'25.00'
    }
  }];

  productRouter.get('/', function(req, res) {
    res.send({
      'data': products
    });
  });

  productRouter.post('/', function(req, res) {
    var newProduct = {
      type:'products',
      id:products.length+1,

    };
    products.push(newProduct);
    res.status(201).send({"data":newProduct}).end();
  });

  productRouter.get('/:id', function(req, res) {
    res.send({
      'data': products[req.params.id-1]
    });
  });

  productRouter.put('/:id', function(req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });
  productRouter.patch('/:id', function(req, res) {
    res.send({
      'data': {
        type:'products',
        id: req.params.id,
      }
    });
  });
  productRouter.delete('/:id', function(req, res) {
    products.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/product', require('body-parser'));
  app.use('/api/products', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/products', require('body-parser').json());
  app.use('/api/products', productRouter);
};
