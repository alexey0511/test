define('groom-clients-ember/pods/haircut/controller', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Controller.extend({
    barberFilter: '',
    paymentFilter: '',
    locationFilter: '',
    startDateFilter: new Date(),
    endDateFilterInitial: new Date(),
    endDateFilter: _ember['default'].computed('endDateFilterInitial', function () {
      return new Date(this.get('endDateFilterInitial')).setHours(23, 59, 59, 999);
    }),

    userCanEdit: _ember['default'].computed(function () {
      //FiXmE: connect to permission service. ..
      // access to the item page as well
      return true;
    }),

    onInit: _ember['default'].on('init', function () {
      this.set('startDateFilter', new Date().setHours(0, 0, 0, 0));
      this.set('endDateFilterInitial', new Date().setHours(23, 59, 59, 999));
    }),

    filteredModel: _ember['default'].computed('model', 'model.[]', 'startDateFilter', 'endDateFilter', 'barberFilter', 'paymentFilter', 'locationFilter', function () {
      var _this = this;

      var model = this.get('model');
      // let nameFilter = new RegExp(this.get('nameFilter'), 'gi');
      // let phoneFilter = new RegExp(this.get('phoneFilter'), 'gi');

      return model.filter(function (cut) {
        var startDate = (0, _moment['default'])(_this.get('startDateFilter')).toDate();
        var endDate = (0, _moment['default'])(_this.get('endDateFilter')).toDate();
        var date = (0, _moment['default'])(cut.get('date')).toDate();
        if (date <= startDate || date >= endDate) {
          return false;
        }
        if (_this.get('barberFilter') && cut.get('staff.name').indexOf(_this.get('barberFilter')) === -1) {
          return false;
        }
        if (_this.get('paymentFilter') && cut.get('paymentType').indexOf(_this.get('paymentFilter')) === -1) {
          return false;
        }
        if (_this.get('locationFilter') && cut.get('salon.location').indexOf(_this.get('locationFilter')) === -1) {
          return false;
        }
        return true;
      });
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.send('transitionToItemRoute', model);
      }
    }

  });
});