import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('client');
  },
  actions: {
    transitionToClients() {
      this.transitionTo('clients');
    },

    willTransition: function(){
      this.controller.get('model').destroyRecord();
    }
  }
});
