define('ember-power-select/components/power-select-multiple/trigger', ['exports', 'ember', 'ember-power-select/templates/components/power-select-multiple/trigger', 'ember-power-select/helpers/ember-power-select-build-selection'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectMultipleTrigger, _emberPowerSelectHelpersEmberPowerSelectBuildSelection) {
  'use strict';

  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var isBlank = _ember['default'].isBlank;
  var run = _ember['default'].run;
  var htmlSafe = _ember['default'].String.htmlSafe;

  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberPowerSelectTemplatesComponentsPowerSelectMultipleTrigger['default'],

    // Lifecycle hooks
    didUpdateAttrs: function didUpdateAttrs(_ref) {
      var oldAttrs = _ref.oldAttrs;
      var newAttrs = _ref.newAttrs;

      this._super.apply(this, arguments);
      if (oldAttrs.select.isOpen && !newAttrs.select.isOpen) {
        this.handleClose();
      }
    },

    // CPs
    triggerMultipleInputStyle: computed('searchText.length', 'selected.length', function () {
      run.scheduleOnce('afterRender', this.get('select.actions.reposition'));
      if (this.get('selected.length') === 0) {
        return htmlSafe('width: 100%;');
      } else {
        return htmlSafe('width: ' + ((this.get('searchText.length') || 0) * 0.5 + 2) + 'em');
      }
    }),

    maybePlaceholder: computed('placeholder', 'selected.length', function () {
      var selected = this.get('selected');
      return !selected || get(selected, 'length') === 0 ? this.get('placeholder') || '' : '';
    }),

    // Actions
    actions: {
      search: function search(term, e) {
        var _get = this.get('select.actions');

        var search = _get.search;
        var open = _get.open;

        search(term, e);
        open(e);
      },

      handleKeydown: function handleKeydown(e) {
        var _getProperties = this.getProperties('highlighted', 'onkeydown', 'select');

        var highlighted = _getProperties.highlighted;
        var onkeydown = _getProperties.onkeydown;
        var select = _getProperties.select;

        if (onkeydown) {
          onkeydown(select, e);
        }
        if (e.defaultPrevented) {
          return;
        }

        var selected = _ember['default'].A(this.get('selected') || []);
        if (e.keyCode === 13 && select.isOpen && highlighted !== undefined) {
          if (selected.indexOf(highlighted) === -1) {
            select.actions.choose((0, _emberPowerSelectHelpersEmberPowerSelectBuildSelection.emberPowerSelectBuildSelection)([highlighted, selected], { multiple: true }), e);
          }
        } else if (e.keyCode === 8 && isBlank(e.target.value)) {
          var lastSelection = get(selected, 'lastObject');
          if (lastSelection) {
            select.actions.select((0, _emberPowerSelectHelpersEmberPowerSelectBuildSelection.emberPowerSelectBuildSelection)([lastSelection, selected], { multiple: true }), e);
            if (typeof lastSelection === 'string') {
              select.actions.search(lastSelection);
            } else {
              var searchField = this.get('searchField');
              _ember['default'].assert('`{{power-select-multiple}}` requires a `searchField` when the options are not strings', searchField);
              select.actions.search(get(lastSelection, searchField));
            }
          }
        } else {
          select.actions.handleKeydown(e);
        }
      }
    },

    // Methods
    handleClose: function handleClose() {
      this.set('searchText', ''); // This line shouldn't be necessary. Why is it?
      this.get('select.actions.search')('');
    }
  });
});