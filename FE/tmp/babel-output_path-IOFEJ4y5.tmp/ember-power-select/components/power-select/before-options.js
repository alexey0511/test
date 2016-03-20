define('ember-power-select/components/power-select/before-options', ['exports', 'ember', 'ember-power-select/templates/components/power-select/before-options'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectBeforeOptions) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberPowerSelectTemplatesComponentsPowerSelectBeforeOptions['default'],

    // Lifecycle hooks
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      _ember['default'].run.schedule('afterRender', function () {
        return _ember['default'].$('.ember-power-select-search input').focus();
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
});