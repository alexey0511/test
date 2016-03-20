define('ember-moment/helpers/-base', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var observer = _ember['default'].observer;

  exports['default'] = _ember['default'].Helper.extend({
    moment: _ember['default'].inject.service(),

    localeOrTimeZoneChanged: observer('moment.locale', 'moment.timeZone', function () {
      this.recompute();
    }),

    morphMoment: function morphMoment(time, _ref) {
      var locale = _ref.locale;
      var timeZone = _ref.timeZone;

      locale = locale || this.get('moment.locale');

      if (locale) {
        time = time.locale(locale);
      }

      timeZone = timeZone || this.get('moment.timeZone');

      if (timeZone && time.tz) {
        time = time.tz(timeZone);
      }

      return time;
    }
  });
});