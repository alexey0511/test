define('groom-clients-ember/tests/test-helper', ['exports', 'groom-clients-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _groomClientsEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_groomClientsEmberTestsHelpersResolver['default']);
});