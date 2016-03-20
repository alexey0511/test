define('groom-clients-ember/pods/haircut/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('salon'), this.store.findAll('client'), this.store.findAll('haircut')]);
    },
    model: function model(params) {
      return this.store.peekRecord('haircut', params.haircut_id);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      controller.set('barbers', this.store.peekAll('staff'));
      controller.set('products', this.store.peekAll('product'));
      controller.set('salons', this.store.peekAll('salon'));
      controller.set('clients', this.store.peekAll('client'));
    },
    actions: {
      transitionToListRoute: function transitionToListRoute() {
        this.transitionTo('haircut');
      }
    }

  });
});