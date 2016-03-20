define('groom-clients-ember/helpers/boolean-or', ['exports', 'ember'], function (exports, _ember) {
  exports.booleanOr = booleanOr;

  function booleanOr(params /*, hash*/) {
    return params[0] || params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(booleanOr);
});