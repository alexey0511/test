define('groom-clients-ember/services/moment', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.outputFormat')
  });
});