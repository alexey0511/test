import Ember from 'ember';
const { computed, on} = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
  session:      service('session'),
  sessionUser:  service('session-user'),
  messageService: service(),

  isOnline: true,

  location: computed.alias('sessionUser.user.location'),

  onInit: on('init', function() {
    this.updateNetworkStatus();
  }),
  isAdmin: computed('sessionUser', function() {
      return this.get('sessionUser.user.role') === 'admin';
  }),

  updateNetworkStatus: function() {
    if (!navigator.onLine) {
      this.set('isOnline', false);
      return; // return early, no point in pinging the server if we have no LAN
    }
    Ember.$.get('api/status').done(() => {
      this.set('isOnline', true);
    }).fail(() => {
      this.set('isOnline', false);
      this.get('messageService').error('The application went offline. Please check internet connection.');
    }).always(() => {
      Ember.run.later(this, 'updateNetworkStatus', 60000);
    });
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
