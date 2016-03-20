define('groom-clients-ember/helpers/moment-to-now', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});