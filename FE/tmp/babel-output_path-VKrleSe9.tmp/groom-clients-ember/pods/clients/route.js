define('groom-clients-ember/pods/clients/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('client');
    },

    actions: {
      transitionToItemRoute: function transitionToItemRoute(model) {
        this.transitionTo('clients.item', model.get('id'));
      }
    }
  });
});