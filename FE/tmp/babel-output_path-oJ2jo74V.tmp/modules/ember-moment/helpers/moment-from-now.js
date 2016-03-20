function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

var runBind = Ember.run.bind;

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (params, _ref) {
    var hideSuffix = _ref.hideSuffix;
    var interval = _ref.interval;
    var locale = _ref.locale;
    var timeZone = _ref.timeZone;

    this.clearTimer();

    if (interval) {
      this.timer = setTimeout(runBind(this, this.recompute), parseInt(interval, 10));
    }

    return this.morphMoment(moment.apply(undefined, _toConsumableArray(params)), { locale: locale, timeZone: timeZone }).fromNow(hideSuffix);
  }),

  clearTimer: function clearTimer() {
    clearTimeout(this.timer);
  },

  destroy: function destroy() {
    this.clearTimer();
    this._super.apply(this, arguments);
  }
});