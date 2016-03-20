define('groom-clients-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'groom-clients-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _groomClientsEmberConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_groomClientsEmberConfigEnvironment['default'].APP.name, _groomClientsEmberConfigEnvironment['default'].APP.version)
  };
});