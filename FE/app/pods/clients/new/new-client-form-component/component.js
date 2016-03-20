import Ember from 'ember';

export default Ember.Component.extend({
  messageService: Ember.inject.service(),

  validation: {
    name: {
      identifier: 'last-name',
      rules: [{ type: 'empty' }]
    },
    email: {
      identifier: 'email',
      rules: [{ type: 'email' }]
    }
  },

  actions: {
    submit() {
      if (Ember.$("#newClientForm form").form('is valid')) {
        this.get('model').save().then(() => {
          this.sendAction('confirmSuccess');
        }).catch((e) => {
          this.get('messageService').error(`The client record hasn't been created`);
          console.log('ERROR: ', e);
        });
      }
    }
  }
});
