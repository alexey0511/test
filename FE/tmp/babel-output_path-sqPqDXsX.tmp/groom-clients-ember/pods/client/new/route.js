define('groom-clients-ember/pods/client/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('client');
    },
    actions: {
      transitionToClients: function transitionToClients() {
        this.transitionTo('client');
      },
      refreshRoute: function refreshRoute() {
        this.refresh();
      },
      willTransition: function willTransition() {
        var model = this.controller.get('model');
        model.rollbackAttributes();
        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
    }
  });
});