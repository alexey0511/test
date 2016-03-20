define('groom-clients-ember/pods/product/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.findAll('product');
    },
    actions: {
      addItem: function addItem() {
        this.store.createRecord('product');
      }
    }
  });
});