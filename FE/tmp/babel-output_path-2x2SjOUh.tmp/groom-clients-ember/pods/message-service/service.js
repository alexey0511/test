define('groom-clients-ember/pods/message-service/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    flashMessages: _ember['default'].inject.service('message-service'),

    info: function info(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').info(message, options);
    },

    warning: function warning(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').warning(message, options);
    },

    error: function error(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').error(message, options);
    },

    success: function success(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').success(message, options);
    }

  });
});