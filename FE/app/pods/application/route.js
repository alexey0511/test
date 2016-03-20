import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionUser').loadCurrentUser();
  },

  actions: {
    error: function(error){
        if (error.status === 0) {
            alert('Sorry, but we\'re having trouble connecting to the server. This problem is usually the result of a broken Internet connection. You can try refreshing this page.');
        } else if (error.status === 403) {
            //go to some default route
        } else if (error.status === 401) {
            //handle 401
        } else if (error.status === 404) {
            this.transitionTo('404');
        } else {
//            alert(error);
        }
    }
}
});
