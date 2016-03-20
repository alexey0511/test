import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return Ember.RSVP.all([
      this.store.findAll('staff'),
      this.store.findAll('product'),
      this.store.findAll('client')
    ]);
  },
  model() {
    return this.store.createRecord('order');
  },


  setupController(controller, model) {
    this._super(controller, model);

    //products
    let products = this.store.peekAll('product');
    products.forEach(product => {
      product.set('isActive', false);
    });
    products.get('firstObject').set('isActive', true);
    controller.set('products', products);

    //staffs
    let staffs = this.store.peekAll('staff');
    staffs.forEach(staff => {
      staff.set('isActive', false);
    });
    staffs.get('firstObject').set('isActive', true);
    controller.set('staffs', staffs);

    //clients
    let clients = this.store.peekAll('client');
    controller.set('clients', clients);

  },
  actions: {
    resetRoute() {
      this.refresh();
    }
  }
});
