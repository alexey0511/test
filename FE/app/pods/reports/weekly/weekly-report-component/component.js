import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  selectedDate: moment().toDate(),

  startDate: Ember.computed('selectedDate', function() {
    return moment(this.get('selectedDate')).startOf('isoweek');
  }),
  endDate: Ember.computed('selectedDate', function() {
    return moment(this.get('selectedDate')).endOf('isoweek');
  }),

  actions: {
    goToPreviousWeek() {
      this.set('selectedDate', moment(this.get('selectedDate')).subtract(7, 'day').toDate());

      this.sendAction('onOpenPreviousWeek', moment(this.get('startDate')).format('DD-MM-YYYY'));
    },
    goToNextWeek() {
      this.set('selectedDate', moment(this.get('selectedDate')).add(7, 'day').toDate());

      this.sendAction('onOpenNextWeek', moment(this.get('startDate')).format('DD-MM-YYYY'));
    },
  }
});
