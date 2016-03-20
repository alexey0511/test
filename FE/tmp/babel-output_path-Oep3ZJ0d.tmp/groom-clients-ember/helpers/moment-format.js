define('groom-clients-ember/helpers/moment-format', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});