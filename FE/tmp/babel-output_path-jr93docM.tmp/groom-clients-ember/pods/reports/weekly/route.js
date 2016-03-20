define('groom-clients-ember/pods/reports/weekly/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    actions: {
      openPreviousWeek: function openPreviousWeek(week) {
        this.transitionTo('reports.weekly.person.item', week);
      },

      openNextWeek: function openNextWeek(week) {
        this.transitionTo('reports.weekly.person.item', week);
      }
    }
  });
});