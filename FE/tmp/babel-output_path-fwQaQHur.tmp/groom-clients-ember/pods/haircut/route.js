define('groom-clients-ember/pods/haircut/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('haircut');
    },

    actions: {
      transitionToItemRoute: function transitionToItemRoute(model) {
        this.transitionTo('haircut.item', model.get('id'));
      }
    }
  });
});