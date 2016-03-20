define('groom-clients-ember/pods/reports/weekly/person/route', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      this.transitionTo('reports.weekly.person.item', (0, _moment['default'])().startOf('isoweek').format('DD-MM-YYYY'));
    }
  });
});