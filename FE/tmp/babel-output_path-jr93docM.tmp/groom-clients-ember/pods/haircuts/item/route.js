define('groom-clients-ember/pods/haircuts/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('user'), this.store.findAll('client'), this.store.findAll('line-item')]);
    },

    model: function model(params) {
      return this.store.peekRecord('line-item', params.haircut_id);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      controller.set('barbers', this.store.peekAll('staff'));
      controller.set('products', this.store.peekAll('product'));
      controller.set('users', this.store.peekAll('user'));
      controller.set('clients', this.store.peekAll('client'));

      controller.set('order', model.get('order'));
    },

    actions: {
      transitionToListRoute: function transitionToListRoute() {
        this.transitionTo('haircuts');
      }
    }

  });
});