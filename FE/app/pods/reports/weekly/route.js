import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    openPreviousWeek(week) {
      this.transitionTo('reports.weekly.person.item', week);
    },

    openNextWeek(week) {
      this.transitionTo('reports.weekly.person.item', week);
    }
  }
});
