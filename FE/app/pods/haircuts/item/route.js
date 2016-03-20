import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return Ember.RSVP.all([
      this.store.findAll('staff'),
      this.store.findAll('product'),
      this.store.findAll('user'),
      this.store.findAll('client'),
      this.store.findAll('line-item')
    ]);
  },

  model(params) {
    return this.store.peekRecord('line-item', params.haircut_id);
  },

  setupController(controller,model) {
    this._super(controller, model);


    controller.set('barbers', this.store.peekAll('staff'));
    controller.set('products', this.store.peekAll('product'));
    controller.set('users', this.store.peekAll('user'));
    controller.set('clients', this.store.peekAll('client'));

    controller.set('order', model.get('order'));
  },

  actions: {
    transitionToListRoute() {
      this.transitionTo('haircuts');
    }
  }

});
