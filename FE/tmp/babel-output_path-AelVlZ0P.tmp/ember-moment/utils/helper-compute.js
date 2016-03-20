define('ember-moment/utils/helper-compute', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var isBlank = _ember['default'].isBlank;

  exports['default'] = function (cb) {
    return function (params, hash) {
      if (!params || params && params.length === 0) {
        throw new TypeError('ember-moment: Invalid Number of arguments, expected at least 1');
      }

      var datetime = params[0];

      var allowEmpty = hash.allowEmpty || hash['allow-empty'];

      if (allowEmpty === undefined || allowEmpty === null) {
        allowEmpty = !!this.get('globalAllowEmpty');
      }

      if (isBlank(datetime)) {
        if (allowEmpty) {
          return;
        } else {
          _ember['default'].Logger.warn('ember-moment: an empty value (null, undefined, or "") was passed to moment-format');
        }
      }

      return cb.apply(this, arguments);
    };
  };
});