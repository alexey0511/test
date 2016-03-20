define('groom-clients-ember/pods/reports/weekly/weekly-report-component/component', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Component.extend({
    selectedDate: (0, _moment['default'])().toDate(),

    startDate: _ember['default'].computed('selectedDate', function () {
      return (0, _moment['default'])(this.get('selectedDate')).startOf('isoweek');
    }),
    endDate: _ember['default'].computed('selectedDate', function () {
      return (0, _moment['default'])(this.get('selectedDate')).endOf('isoweek');
    }),

    actions: {
      goToPreviousWeek: function goToPreviousWeek() {
        this.set('selectedDate', (0, _moment['default'])(this.get('selectedDate')).subtract(7, 'day').toDate());

        this.sendAction('onOpenPreviousWeek', (0, _moment['default'])(this.get('startDate')).format('DD-MM-YYYY'));
      },
      goToNextWeek: function goToNextWeek() {
        this.set('selectedDate', (0, _moment['default'])(this.get('selectedDate')).add(7, 'day').toDate());

        this.sendAction('onOpenNextWeek', (0, _moment['default'])(this.get('startDate')).format('DD-MM-YYYY'));
      }
    }
  });
});