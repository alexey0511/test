import Ember from 'ember';

var observer = Ember.observer;

export default Ember.Helper.extend({
  moment: Ember.inject.service(),

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