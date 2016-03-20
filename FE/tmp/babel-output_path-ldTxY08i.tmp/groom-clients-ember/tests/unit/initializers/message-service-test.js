define('groom-clients-ember/tests/unit/initializers/message-service-test', ['exports', 'ember', 'groom-clients-ember/initializers/message-service', 'qunit'], function (exports, _ember, _groomClientsEmberInitializersMessageService, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | message service', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _groomClientsEmberInitializersMessageService['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});