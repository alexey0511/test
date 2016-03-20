define('groom-clients-ember/pods/application/application-menu/component', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var on = _ember['default'].on;
  var service = _ember['default'].inject.service;
  exports['default'] = _ember['default'].Component.extend({
    session: service('session'),
    sessionUser: service('session-user'),
    messageService: service(),

    isOnline: true,

    location: computed.alias('sessionUser.user.location'),

    onInit: on('init', function () {
      this.updateNetworkStatus();
    }),
    isAdmin: computed('sessionUser', function () {
      return this.get('sessionUser.user.role') === 'admin';
    }),

    updateNetworkStatus: function updateNetworkStatus() {
      var _this = this;

      if (!navigator.onLine) {
        this.set('isOnline', false);
        return; // return early, no point in pinging the server if we have no LAN
      }
      _ember['default'].$.get('api/status').done(function () {
        _this.set('isOnline', true);
      }).fail(function () {
        _this.set('isOnline', false);
        _this.get('messageService').error('The application went offline. Please check internet connection.');
      }).always(function () {
        _ember['default'].run.later(_this, 'updateNetworkStatus', 60000);
      });
    },

    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });
});