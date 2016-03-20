import Ember from 'ember';

export default Ember.Component.extend({
  messageService: Ember.inject.service(),

  barbers: null,
  products: null,
  users: null,
  clients: null,

  paymentTypes: ['cash','efpos'],
  paymentType: Ember.computed(function() { return this.get('paymentTypes')[1];}),

  validation: {

  },

  actions: {
    submit() {
      if (Ember.$("#haircutForm form").form('is valid')) {
        this.get('model').save().then(() => {
          this.get('model.order.content').save().then(() => {
            this.sendAction('onTransitionToListRoute');
          });
        }).catch((e) => {
          this.get('messageService').error(`The changes hasn't been saved`);
          console.log('ERROR: ', e);
        });
      }
    },
    deleteRecord() {
      Ember.$('.ui.modal').modal({
        onApprove: () => {
          this.get('model').destroyRecord().then(() => {
            this.sendAction('onTransitionToListRoute');
          });
        }
      });
      Ember.$('.ui.modal').modal('show');
    }
  }
});
