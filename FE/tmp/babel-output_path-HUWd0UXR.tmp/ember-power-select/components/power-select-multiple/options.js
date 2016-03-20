define('ember-power-select/components/power-select-multiple/options', ['exports', 'ember', 'ember-power-select/templates/components/power-select/options'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectOptions) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberPowerSelectTemplatesComponentsPowerSelectOptions['default'],
    tagName: 'ul',
    attributeBindings: ['role'],
    role: 'listbox',
    multiple: true
  });
});