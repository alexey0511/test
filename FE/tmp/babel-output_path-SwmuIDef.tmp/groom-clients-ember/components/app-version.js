define('groom-clients-ember/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'groom-clients-ember/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _groomClientsEmberConfigEnvironment) {

  var name = _groomClientsEmberConfigEnvironment['default'].APP.name;
  var version = _groomClientsEmberConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});