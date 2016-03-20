define('groom-clients-ember/models/report-sales-by-person', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  var computed = _ember['default'].computed;
  exports['default'] = _emberData['default'].Model.extend({

    startDate: attr('date'),
    endDate: attr('date'),
    report: attr('string'),
    staff: belongsTo('staff'),
    eftpos: attr('number'),
    cash: attr('number'),
    total: computed('eftpos', 'cash', function () {
      return this.get('cash') + this.get('eftpos');
    })

  });
});