define('groom-clients-ember/pods/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    isOnline: true,
    messageService: _ember['default'].inject.service(),
    onInit: _ember['default'].on('init', function () {
      this.updateNetworkStatus();
    }),
    updateNetworkStatus: function updateNetworkStatus() {
      var _this = this;

      if (!navigator.onLine) {
        this.set('isOnline', false);
        return; // return early, no point in pinging the server if we have no LAN
      }
      _ember['default'].$.get('api/status').done(function () {
        // todo: consider checking the result
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