define('groom-clients-ember/initializers/message-service', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {

    // make flash messages service available from all routes and controllers
    application.inject('controller', 'messageService', 'service:message-service');
    application.inject('route', 'messageService', 'service:message-service');
  }

  exports['default'] = {
    name: 'message-service',
    initialize: initialize
  };
});