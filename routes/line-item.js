/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var lineItemRouter = express.Router();
  var LineItem = require('../models/line-item');

  lineItemRouter
  .get('/', function(req, res) {
    LineItem.find(function(err, lineItems) {
      var lineItemsJSON = lineItems.map(function(lineItem) {return _convertLineItemsToJSONAPI(lineItem); });
      res.json({'data': lineItemsJSON});
    });
  })

  .post('/', function(req, res) {
    var lineItem = new LineItem({
      itemPrice: req.body.data.attributes['item-price'],
      product: req.body.data.relationships.product.data.id,
      barber: req.body.data.relationships.barber.data.id,
      order: req.body.data.relationships.order.data.id
    });
    lineItem.save(function (err, result) {
      res.json({ 'data': _convertLineItemsToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    LineItem.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertLineItemsToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    LineItem.findOne({_id: req.params.id}, function(err, lineItem) {
      lineItem.itemPrice = req.body.data.attributes['item-price'];
      lineItem.product = req.body.data.relationships.product.data.id;
      lineItem.barber = req.body.data.relationships.barber.data.id;
      lineItem.order = req.body.data.relationships.order.data.id;

      lineItem.save(function(error, result) {
        res.json({ 'data': _convertLineItemsToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    LineItem.find({ _id:req.params.id }).remove().exec();
    res.json({"meta": {'deleted':true}});
  });

  app.use('/api/line-items', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/line-items', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/line-items', lineItemRouter);
};

function  _convertLineItemsToJSONAPI(item) {
  var lineItem =  {
    type:'line-items',
    attributes: {
      "item-price": item.itemPrice,
    },
    "relationships": {
      "product": {
        "data": { "type": "products", "id": item.product }
      },
      "barber": {
        "data": { "type": "staffs", "id": item.staff }
      },
      "order": {
        "data": { "type": "orders", "id": item.order }
      }
    }
  };
  if (item.id) { lineItem.id = item.id; }
  return lineItem;
}

function  _convertFromJsonToLineItem(item) {
  var lineItem = {
    itemPrice: req.body.data.attributes['item-price'],
    product: req.body.data.relationships.product.data.id,
    barber: req.body.data.relationships.barber.data.id,
    order: req.body.data.relationships.order.data.id
  };
  if (item.id) { lineItem.id = item.id; }

  return lineItem;
}
