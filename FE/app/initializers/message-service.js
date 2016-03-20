export function initialize(application) {

  // make flash messages service available from all routes and controllers
  application.inject('controller', 'messageService', 'service:message-service');
  application.inject('route', 'messageService', 'service:message-service');
}

export default {
  name: 'message-service',
  initialize: initialize
};
