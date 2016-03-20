define('groom-clients-ember/pods/reports/weekly/person/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(param) {
      return this.store.query('report-sales-by-person', {
        startDate: param.startDate
      });
    }

  });
});