import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('reports.weekly.person.item',  moment().startOf('isoweek').format('DD-MM-YYYY'));
  }
});
