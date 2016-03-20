import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  barberFilter:'',
  paymentFilter:'',
  locationFilter:'',

  userCanEdit: Ember.computed(function() {
    //FiXmE: connect to permission service. ..
    // access to the item page as well
    return true;
  }),

  onInit: Ember.on('init', function() {
    this.set('startDateFilter', moment().startOf('day').toDate());
    this.set('endDateFilter',  moment().endOf('day').toDate());
  }),

  filteredModel: Ember.computed('model.[]','startDateFilter','endDateFilter',
  'barberFilter','paymentFilter','locationFilter',function() {
     let model = this.get('model');

    return model.filter(cut => {
      let startDate = moment(this.get('startDateFilter')).toDate();
      let endDate = moment(this.get('endDateFilter')).toDate();
      let date = moment(cut.get('itemDate')).toDate();
      if (date <= startDate || date >= endDate) {
        return false;
      }
      if (this.get('barberFilter') && cut.get('barber.name').indexOf(this.get('barberFilter')) === -1) {
        return false;
      }
      if (this.get('paymentFilter') && cut.get('itemPaymentType').indexOf(this.get('paymentFilter')) === -1) {
        return false;
      }
      if (this.get('locationFilter') && cut.get('itemUser.location').indexOf(this.get('locationFilter')) === -1) {
        return false;
      }
        return true;
    });
  }),
  actions: {
    openRecord(model) {
        this.sendAction('onTransitionToItemRoute', model);
    }
  }

});
