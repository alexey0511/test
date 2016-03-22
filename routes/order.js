module.exports = function(app) {
  var express = require('express');
  var orderRouter = express.Router();
  var Order = require('../models/order');
  var LineItem = require('../models/line-item');

  orderRouter
  .get('/', function(req, res) {
    Order.find(function(err, orders) {
      var ordersJSON = orders.map(function(order) {return _convertOrdersToJSONAPI(order); });
      res.json({'data': ordersJSON});
    });
  })

  .post('/', function(req, res) {
    var order = new Order({
      date: req.body.data.attributes.date,
      paymentType: req.body.data.attributes['payment-type'],
      user: req.body.data.relationships.user.data.id,
      client: req.body.data.relationships.client.data.id,
      lineItems:[LineItem.schema]
    });
    order.save(function (err, result) {
      res.json({ 'data': _convertOrdersToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    Order.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertOrdersToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    Order.findOne({_id: req.params.id}, function(err, order) {
      date = req.body.data.attributes.date;
      paymentType = req.body.data.attributes['payment-type'];
      user = req.body.data.relationships.user.data.id;
      client = req.body.data.relationships.client.data.id;
      // lineItems = [LineItem.schema];

      order.save(function(error, result) {
        res.json({ 'data': _convertOrdersToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    Order.find({ _id:req.params.id }).remove().exec();
    res.json({});
  });

  app.use('/api/orders', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/orders', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/orders', orderRouter);
};

function  _convertOrdersToJSONAPI(item) {
  var order =  {
    'type': 'orders',
    'attributes': {
      'date': item.date,
      'payment-type': item.paymentType,
    },
    relationships: {
      "user": {
        "data": { "type": "users", "id": item.user }
      },
      "client": {
        "data": { "type": "clients", "id": item.client }
      },
    }
  };
  if (item.id) { order.id = item.id; }
  return order;
}
function  _convertFromJsonToOrder(item) {
  var order = {
    date: req.body.data.attributes.date,
    paymentType: req.body.data.attributes['payment-type'],
    user: req.body.data.relationships.user.data.id,
    client: req.body.data.relationships.client.data.id,
    lineItems:[LineItem.schema]
  };
  if (item.id) { order.id = item.id; }

  return order;
}
