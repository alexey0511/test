import Ember from 'ember';
import layout from '../../templates/components/power-select/before-options';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,

  // Lifecycle hooks
  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    Ember.run.schedule('afterRender', function () {
      return Ember.$('.ember-power-select-search input').focus();
    });
  },

  willDestroy: function willDestroy() {
    this._super.apply(this, arguments);
    if (this.get('searchEnabled')) {
      this.get('select.actions.search')('');
    }
  },

  // Actions
  actions: {
    handleKeydown: function handleKeydown(e) {
      var select = this.get('select');
      if (e.keyCode === 13) {
        var onkeydown = this.get('onkeydown');
        if (onkeydown) {
          onkeydown(select, e);
        }
        if (e.defaultPrevented) {
          return;
        }
        select.actions.choose(this.get('highlighted'), e);
      } else {
        select.actions.handleKeydown(e);
      }
    }
  }
});