define('groom-clients-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'groom-clients-ember/tests/helpers/start-app', 'groom-clients-ember/tests/helpers/destroy-app'], function (exports, _qunit, _groomClientsEmberTestsHelpersStartApp, _groomClientsEmberTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _groomClientsEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _groomClientsEmberTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});