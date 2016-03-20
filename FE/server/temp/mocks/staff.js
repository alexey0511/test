/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var staffRouter = express.Router();

  var staffs = [{
    type:'staffs',
    id: 1,
    attributes: {
      name:'HERMAN'
    }
  }, {
    type:'staffs',
    id: 2,
    attributes: {
      name:'KIM'
    }
  }, {
    type:'staffs',
    id: 3,
    attributes: {
      name:'PETER'
    }
  }];

  staffRouter.get('/', function(req, res) {
    res.send({
      'data': staffs
    });
  });

  staffRouter.post('/', function(req, res) {
    var newstaff = {
      type:'staffs',
      id:staffs.length+1,

    };
    staffs.push(newstaff);
    res.status(201).send({"data":newstaff}).end();
  });

  staffRouter.get('/:id', function(req, res) {
    res.send({
      'data':  staffs[req.params.id-1]
    });
  });

  staffRouter.put('/:id', function(req, res) {
    res.send({
      'staff': {
        id: req.params.id
      }
    });
  });
  staffRouter.patch('/:id', function(req, res) {
    res.send({
      'data': {
        type:'staffs',
        id: req.params.id,
      }
    });
  });
  staffRouter.delete('/:id', function(req, res) {
    staffs.pop();
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/staff', require('body-parser'));
  app.use('/api/staffs', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/staffs', require('body-parser').json());
  app.use('/api/staffs', staffRouter);
};
