import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  modelName: Ember.computed('model',function() {
    return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
  }),
  attributes: Ember.computed('model',function() {
    return Object.keys(this.get('model.firstObject').toJSON());
  }),
  disableAddButton: Ember.computed('model.@each.isNew', function() {
    return this.get('model').isAny('isNew');
  }),

  actions: {
    addItem() {
      this.sendAction('addItem');
    }
  }
});
