module.exports = function(app) {
  var express = require('express');
  var productRouter = express.Router();
  var Product = require('../models/product');

  productRouter
  .get('/', function(req, res) {
    Product.find(function(err, products) {
      var productsJSON = products.map(function(product) {return _convertProductsToJSONAPI(product); });
      res.json({'data': productsJSON});
    });
  })

  .post('/', function(req, res) {
    var product = new Product({
      name: req.body.data.attributes.name,
      description: req.body.data.attributes.description,
      productType: req.body.data.attributes.productType,
      price: req.body.data.attributes.price
    });
    product.save(function (err, result) {
      res.json({ 'data': _convertProductsToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    Product.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertProductsToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    Product.findOne({_id: req.params.id}, function(err, product) {
      product.name= req.body.data.attributes.name;
      product.description= req.body.data.attributes.description;
      product.productType= req.body.data.attributes.productType;
      product.price= req.body.data.attributes.price;
      product.save(function(error, result) {
        res.json({ 'data': _convertProductsToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    Product.find({ _id:req.params.id }).remove().exec();
    res.json({});
  });

  app.use('/api/products', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/products', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/products', productRouter);
};

function  _convertProductsToJSONAPI(item) {
  var product =  {
    'type': 'products',
    'attributes': {
      'name': item.name,
      'description': item.description,
      'productType': item.productType,
      'price': item.price
    }
  };
  if (item.id) { product.id = item.id; }
  return product;
}
function  _convertFromJsonToProduct(item) {
  var product = {
    'name': item.attributes.name,
    'password': item.attributes.description,
    'productType': item.attributes.productType,
    'price': item.attributes.price
  };
  if (item.id) { product.id = item.id; }

  return product;
}
