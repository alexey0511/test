module.exports = function(app) {
  var express = require('express');
  var staffRouter = express.Router();
  var Staff = require('../models/staff');

  staffRouter
  .get('/', function(req, res) {

    Staff.find(function(err, staffs) {
      var staffsJSON = staffs.map(function(staff) {return _convertStaffsToJSONAPI(staff); });
      res.json({'data': staffsJSON});
    });
  })

  .post('/', function(req, res) {
    var staff = new Staff({
      name: req.body.data.attributes.name
    });
    staff.save(function (err, result) {
      res.json({ 'data': _convertStaffsToJSONAPI(result) });
    });
  })

  .get('/:id', function(req, res) {
    Staff.findOne({_id: req.params.id},function(err, result) {
      res.json({'data': _convertStaffsToJSONAPI(result)});
    });
  })

  .patch('/:id', function(req, res) {
    Staff.findOne({_id: req.params.id}, function(err, staff) {
      staff.name= req.body.data.attributes.name;

      staff.save(function(error, result) {
        res.json({ 'data': _convertStaffsToJSONAPI(result) });
      });
    });
  })

  .delete('/:id', function(req, res) {
    Staff.find({ _id:req.params.id }).remove().exec();
    res.json({});
  });

  app.use('/api/staffs', require('body-parser').urlencoded({ extended: true }));
  app.use('/api/staffs', require('body-parser').json({ type: 'application/*+json' }));
  app.use('/api/staffs', staffRouter);
};

function  _convertStaffsToJSONAPI(item) {
  var staff =  {
    'type': 'staff',
    'attributes': {
      'name': item.name
    }
  };
  if (item.id) { staff.id = item.id; }
  return staff;
}
function  _convertFromJsonToStaff(item) {
  var staff = {
    'name': item.attributes.name
  };
  if (item.id) { staff.id = item.id; }

  return staff;
}
