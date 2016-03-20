define('groom-clients-ember/tests/helpers/resolver', ['exports', 'groom-clients-ember/resolver', 'groom-clients-ember/config/environment'], function (exports, _groomClientsEmberResolver, _groomClientsEmberConfigEnvironment) {

  var resolver = _groomClientsEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _groomClientsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _groomClientsEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});