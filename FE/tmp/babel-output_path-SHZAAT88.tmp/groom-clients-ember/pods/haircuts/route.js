define('groom-clients-ember/pods/haircuts/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return this.store.findAll('order');
    },
    model: function model() {
      return this.store.findAll('line-item');
    },

    actions: {
      transitionToItemRoute: function transitionToItemRoute(model) {
        this.transitionTo('haircuts.item', model.get('id'));
      }
    }
  });
});