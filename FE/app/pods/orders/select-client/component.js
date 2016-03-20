import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  clients: null,
  clientFilter: null,

  filteredClients: computed('clients.[]','clientFilter',function() {
    let clients = this.get('clients');
    let clientFilter = new RegExp(this.get('clientFilter'), 'gi');

    return clients.filter(client => {
      if (!this.get('clientFilter') || client.get('fullName').match(clientFilter)) {
        return true;
      } else if (client.get('phone1').match(clientFilter)) {
        return true;
      } else {
        return false;
      }
    });
  }),

  actions: {
    selectClient(client) {
      this.sendAction('onSelectClient', client);
    }
  }
});
