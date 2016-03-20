define('groom-clients-ember/pods/session-user/service', ['exports', 'ember'], function (exports, _ember) {
  var service = _ember['default'].inject.service;
  var RSVP = _ember['default'].RSVP;
  exports['default'] = _ember['default'].Service.extend({
    session: service('session'),
    store: service(),

    loadCurrentUser: function loadCurrentUser() {
      var _this = this;

      return new RSVP.Promise(function (resolve, reject) {
        var userId = _this.get('session.data.authenticated.user_id');
        if (!_ember['default'].isEmpty(userId)) {
          return _this.get('store').findRecord('salon', userId).then(function (user) {
            _this.set('salon', user);
            resolve();
          }, reject);
        } else {
          resolve();
        }
      });
    }
  });
});