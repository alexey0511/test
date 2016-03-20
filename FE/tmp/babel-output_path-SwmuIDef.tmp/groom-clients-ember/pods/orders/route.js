define('groom-clients-ember/pods/orders/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('client')]);
    },
    model: function model() {
      return this.store.createRecord('order');
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      //products
      var products = this.store.peekAll('product');
      products.forEach(function (product) {
        product.set('isActive', false);
      });
      products.get('firstObject').set('isActive', true);
      controller.set('products', products);

      //staffs
      var staffs = this.store.peekAll('staff');
      staffs.forEach(function (staff) {
        staff.set('isActive', false);
      });
      staffs.get('firstObject').set('isActive', true);
      controller.set('staffs', staffs);

      //clients
      var clients = this.store.peekAll('client');
      controller.set('clients', clients);
    },
    actions: {
      resetRoute: function resetRoute() {
        this.refresh();
      }
    }
  });
});