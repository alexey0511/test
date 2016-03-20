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
     if (Ember.$("#clientForm form").form('is valid')) {
        this.get('model').save().then(() => {
          this.sendAction('confirmSuccess');
        }).catch((e) => {
          this.get('messageService').error('The changes cannot be saved');
          console.log('ERROR: ', e);
        });
      }
    }
  }
});
