define('groom-clients-ember/pods/orders/select-client/component', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Component.extend({

    clients: null,
    clientFilter: null,

    filteredClients: computed('clients.[]', 'clientFilter', function () {
      var _this = this;

      var clients = this.get('clients');
      var clientFilter = new RegExp(this.get('clientFilter'), 'gi');

      return clients.filter(function (client) {
        if (!_this.get('clientFilter') || client.get('fullName').match(clientFilter)) {
          return true;
        } else if (client.get('phone1').match(clientFilter)) {
          return true;
        } else {
          return false;
        }
      });
    }),

    actions: {
      selectClient: function selectClient(client) {
        this.sendAction('onSelectClient', client);
      }
    }
  });
});