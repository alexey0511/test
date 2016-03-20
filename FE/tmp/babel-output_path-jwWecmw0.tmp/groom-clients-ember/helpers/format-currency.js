define('groom-clients-ember/helpers/format-currency', ['exports', 'ember'], function (exports, _ember) {
  exports.formatCurrency = formatCurrency;

  function formatCurrency(params /*, hash*/) {
    var value = params[0] * 100,
        dollars = Math.floor(value / 100),
        cents = value % 100,
        sign = '$';

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }
    return '' + sign + dollars + '.' + cents;
  }

  exports['default'] = _ember['default'].Helper.helper(formatCurrency);
});