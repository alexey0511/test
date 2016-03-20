define('groom-clients-ember/pods/haircuts/haircut-table-component/component', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Component.extend({
    barberFilter: '',
    paymentFilter: '',
    locationFilter: '',

    userCanEdit: _ember['default'].computed(function () {
      //FiXmE: connect to permission service. ..
      // access to the item page as well
      return true;
    }),

    onInit: _ember['default'].on('init', function () {
      this.set('startDateFilter', (0, _moment['default'])().startOf('day').toDate());
      this.set('endDateFilter', (0, _moment['default'])().endOf('day').toDate());
    }),

    filteredModel: _ember['default'].computed('model.[]', 'startDateFilter', 'endDateFilter', 'barberFilter', 'paymentFilter', 'locationFilter', function () {
      var _this = this;

      var model = this.get('model');

      return model.filter(function (cut) {
        var startDate = (0, _moment['default'])(_this.get('startDateFilter')).toDate();
        var endDate = (0, _moment['default'])(_this.get('endDateFilter')).toDate();
        var date = (0, _moment['default'])(cut.get('itemDate')).toDate();
        if (date <= startDate || date >= endDate) {
          return false;
        }
        if (_this.get('barberFilter') && cut.get('barber.name').indexOf(_this.get('barberFilter')) === -1) {
          return false;
        }
        if (_this.get('paymentFilter') && cut.get('itemPaymentType').indexOf(_this.get('paymentFilter')) === -1) {
          return false;
        }
        if (_this.get('locationFilter') && cut.get('itemUser.location').indexOf(_this.get('locationFilter')) === -1) {
          return false;
        }
        return true;
      });
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('onTransitionToItemRoute', model);
      }
    }

  });
});