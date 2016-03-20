import Ember from 'ember';
import layout from '../templates/components/power-select-multiple';
import fallbackIfUndefined from '../utils/computed-fallback-if-undefined';

export default Ember.Component.extend({
  layout: layout,
  // Config
  triggerComponent: fallbackIfUndefined('power-select-multiple/trigger'),
  beforeOptionsComponent: fallbackIfUndefined(null),
  optionsComponent: fallbackIfUndefined('power-select-multiple/options'),

  // CPs
  selectedComponent: Ember.computed.deprecatingAlias('triggerComponent', { id: 'power-select-multiple-selected-component', until: '0.9' }),

  // Actions
  actions: {
    handleOpen: function handleOpen(select, e) {
      var action = this.get('onopen');
      if (action) {
        action(select, e);
      }
      this.focusInput();
    },

    handleFocus: function handleFocus(select, e) {
      var action = this.get('onfocus');
      if (action) {
        action(select, e);
      }
      this.focusInput();
    }
  },

  // Methods
  focusInput: function focusInput() {
    this.element.querySelector('.ember-power-select-trigger-multiple-input').focus();
  }
});