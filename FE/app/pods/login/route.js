import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  messageService: service(),

  setupController(ctrl, model) {
      this._super(ctrl, model);

      ctrl.set('validation', {});
  },

  actions: {
    authenticate() {
      let {username, password} = this.controller.getProperties('username', 'password');

      this.get('session').authenticate('authenticator:oauth2', username, password)
      .catch((reason) => {
        this.get('messageService').error(reason.error);
      });
    }
  }
});
