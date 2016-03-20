define('groom-clients-ember/tests/unit/helpers/format-currency-test', ['exports', 'groom-clients-ember/helpers/format-currency', 'qunit'], function (exports, _groomClientsEmberHelpersFormatCurrency, _qunit) {

  (0, _qunit.module)('Unit | Helper | format currency');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _groomClientsEmberHelpersFormatCurrency.formatCurrency)([42]);
    assert.ok(result);
  });
});