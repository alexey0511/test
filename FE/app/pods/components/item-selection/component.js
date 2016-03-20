import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['selectionBox', 'ui', 'segment'],

  actions: {
    makeSelected(item) {
      this.get('items').filterBy('isActive').forEach(item => {
        item.set('isActive', false);
      });
      item.set('isActive', true);

      this.sendAction('onchange', item);
    }
  }
});
