define('ember-power-select/helpers/ember-power-select-option-classes', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  exports.emberPowerSelectOptionClasses = emberPowerSelectOptionClasses;

  var isArray = _ember['default'].isArray;
  var get = _ember['default'].get;

  // TODO: Make it private or scoped to the component

  function emberPowerSelectOptionClasses(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 3);

    var option = _ref2[0];
    var selected = _ref2[1];
    var highlighted = _ref2[2];

    var classes = undefined;
    if (isArray(selected)) {
      classes = selected.indexOf(option) > -1 ? 'ember-power-select-option--selected' : '';
    } else {
      classes = option === selected ? 'ember-power-select-option--selected' : '';
    }
    if (get(option, 'disabled')) {
      classes += ' ember-power-select-option--disabled';
    }
    if (option === highlighted) {
      classes += ' ember-power-select-option--highlighted';
    }
    return classes;
  }

  exports['default'] = _ember['default'].Helper.helper(emberPowerSelectOptionClasses);
});