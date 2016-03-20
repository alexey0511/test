define('groom-clients-ember/helpers/moment-from-now', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});