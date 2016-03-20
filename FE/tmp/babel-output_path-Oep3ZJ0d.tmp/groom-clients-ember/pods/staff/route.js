define('groom-clients-ember/pods/staff/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.findAll('staff');
    },
    actions: {
      addItem: function addItem() {
        this.store.createRecord('staff');
      }
    }
  });
});