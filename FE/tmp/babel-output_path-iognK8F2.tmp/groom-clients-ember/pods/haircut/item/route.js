define('groom-clients-ember/pods/haircut/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('salon'), this.store.findAll('client')]);
    },
    model: function model(params) {
      return this.store.findRecord('haircut', params.haircut_id);
    },

    setupController: function setupController(controller, model) {
      var _this = this;

      this._super(controller, model);
      _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('salon'), this.store.findAll('client')]).then(function () {

        controller.set('barbers', _this.store.peekAll('staff'));
        controller.set('products', _this.store.peekAll('product'));
        controller.set('salons', _this.store.peekAll('salon'));
        controller.set('clients', _this.store.peekAll('client'));
      });
    },
    actions: {
      transitionToListRoute: function transitionToListRoute() {
        this.transitionTo('haircuts');
      }
    }

  });
});