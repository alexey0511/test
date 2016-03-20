define('groom-clients-ember/pods/clients/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.store.findRecord('client', params.client_id);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      this.store.query('line-item', { client: model.get('id') }).then(function (result) {
        controller.set('clientHaircuts', result);
      });
    },
    actions: {
      transitionToClients: function transitionToClients() {
        this.transitionTo('clients');
      }
    }

  });
});