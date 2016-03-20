define('groom-clients-ember/tests/helpers/start-app', ['exports', 'ember', 'groom-clients-ember/app', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberApp, _groomClientsEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _groomClientsEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _groomClientsEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});