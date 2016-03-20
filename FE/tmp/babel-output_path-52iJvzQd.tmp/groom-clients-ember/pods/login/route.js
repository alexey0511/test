define('groom-clients-ember/pods/login/route', ['exports', 'ember'], function (exports, _ember) {
  var service = _ember['default'].inject.service;
  exports['default'] = _ember['default'].Route.extend({
    session: _ember['default'].inject.service('session'),
    messageService: service(),

    setupController: function setupController(ctrl, model) {
      this._super(ctrl, model);

      ctrl.set('validation', {});
    },

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        var _controller$getProperties = this.controller.getProperties('username', 'password');

        var username = _controller$getProperties.username;
        var password = _controller$getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', username, password)['catch'](function (reason) {
          _this.get('messageService').error(reason.error);
        });
      }
    }
  });
});