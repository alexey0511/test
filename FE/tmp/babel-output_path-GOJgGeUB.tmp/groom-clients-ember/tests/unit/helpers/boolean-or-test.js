define('groom-clients-ember/tests/unit/helpers/boolean-or-test', ['exports', 'groom-clients-ember/helpers/boolean-or', 'qunit'], function (exports, _groomClientsEmberHelpersBooleanOr, _qunit) {

  (0, _qunit.module)('Unit | Helper | boolean or');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _groomClientsEmberHelpersBooleanOr.booleanOr)(42);
    assert.ok(result);
  });
});