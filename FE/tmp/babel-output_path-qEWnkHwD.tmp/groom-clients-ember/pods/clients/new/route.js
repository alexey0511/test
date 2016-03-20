define('groom-clients-ember/pods/clients/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('client');
    },
    actions: {
      transitionToClients: function transitionToClients() {
        this.transitionTo('clients');
      },

      willTransition: function willTransition() {
        this.controller.get('model').destroyRecord();
      }
    }
  });
});