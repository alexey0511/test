import Ember from 'ember';

export default Ember.Component.extend({
  messageService: Ember.inject.service(),

  validation: {
    name: {
      identifier: 'last-name',
      rules: [{ type: 'empty' }]
    }
  },

  actions: {

    resetRecord() {
      Ember.$('#smallNewClientForm').form('reset');
    },

    submit() {
      if (Ember.$('#smallNewClientForm').form('is valid')) {
        this.sendAction('onCreateClient', this.get('firstName'), this.get('lastName'));

        Ember.$('#smallNewClientForm').form('reset');
      }
    }
  }
});
