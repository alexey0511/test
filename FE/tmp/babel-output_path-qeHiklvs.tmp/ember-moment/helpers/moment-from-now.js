define('ember-moment/helpers/moment-from-now', ['exports', 'ember', 'moment', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _ember, _moment, _emberMomentUtilsHelperCompute, _emberMomentHelpersBase) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var runBind = _ember['default'].run.bind;

  exports['default'] = _emberMomentHelpersBase['default'].extend({
    globalAllowEmpty: false,

    compute: (0, _emberMomentUtilsHelperCompute['default'])(function (params, _ref) {
      var hideSuffix = _ref.hideSuffix;
      var interval = _ref.interval;
      var locale = _ref.locale;
      var timeZone = _ref.timeZone;

      this.clearTimer();

      if (interval) {
        this.timer = setTimeout(runBind(this, this.recompute), parseInt(interval, 10));
      }

      return this.morphMoment(_moment['default'].apply(undefined, _toConsumableArray(params)), { locale: locale, timeZone: timeZone }).fromNow(hideSuffix);
    }),

    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },

    destroy: function destroy() {
      this.clearTimer();
      this._super.apply(this, arguments);
    }
  });
});