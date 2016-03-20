import Ember from 'ember';

export default Ember.Route.extend({

  model(param) {
    return this.store.query('report-sales-by-person', {
      startDate: param.startDate
    });
  }

});
