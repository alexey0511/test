import Ember from 'ember';

export default Ember.Mixin.create({
  messageService: Ember.inject.service(),
  model: null,
  modelName: Ember.computed('model',function() {
    return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
  }),
  attributes: [],
  disableAddButton: Ember.computed('model.@each.isNew', function() {
    return this.get('model').isAny('isNew');
  }),

  actions: {
    addItem() {
      this.sendAction('addItem');
    },
    saveItem(item) {
      item.save().then(() => {
        item.set('isActive',false);
      })
      .catch(e => {
        this.get('messageService').error('The item cannot be saved');
        console.log('ERROR:',e);
      });
    },
    deleteItem(item) {
      Ember.$('.ui.modal').modal({
        onApprove: () => {
          item.destroyRecord();
        }
      });
      Ember.$('.ui.modal').modal('show');

    },
    editItem(item) {
      item.set('isActive',true);
    }
  }
});
