define('groom-clients-ember/app', ['exports', 'ember', 'groom-clients-ember/resolver', 'ember-load-initializers', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberResolver, _emberLoadInitializers, _groomClientsEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _groomClientsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _groomClientsEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _groomClientsEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _groomClientsEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});