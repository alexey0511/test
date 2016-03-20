import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  model: null,
  onInit: Ember.on('init', function() {
    this.get('model');
  }),
  actions: {
    openRecord(model) {
      this.sendAction('openRecord', model);
    }
  }
});
