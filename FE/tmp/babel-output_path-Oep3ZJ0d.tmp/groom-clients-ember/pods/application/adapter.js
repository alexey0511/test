define('groom-clients-ember/pods/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'api',
    shouldReloadAll: function shouldReloadAll() {
      return true;
    }
  });
});