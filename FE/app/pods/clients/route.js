import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('client');
  },

  actions: {
    transitionToItemRoute(model) {
      this.transitionTo('clients.item', model.get('id'));
    }
  }
});
