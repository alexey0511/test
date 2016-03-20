import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('client', params.client_id);
  },

  setupController(controller,model) {
    this._super(controller, model);

    this.store.query('line-item', {client:model.get('id')})
    .then(result => {
      controller.set('clientHaircuts',result);
    });
  },
  actions: {
    transitionToClients() {
      this.transitionTo('clients');
    }
  }

});
