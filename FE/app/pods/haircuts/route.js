import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return this.store.findAll('order');
  },
  model() {
    return this.store.findAll('line-item');
  },


  actions: {
    transitionToItemRoute(model) {
      this.transitionTo('haircuts.item', model.get('id'));
    }
  }
});
