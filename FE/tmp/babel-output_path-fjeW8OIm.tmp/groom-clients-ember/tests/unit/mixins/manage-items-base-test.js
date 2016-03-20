define('groom-clients-ember/tests/unit/mixins/manage-items-base-test', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base', 'qunit'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase, _qunit) {

  (0, _qunit.module)('Unit | Mixin | manage items base');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ManageItemsBaseObject = _ember['default'].Object.extend(_groomClientsEmberMixinsManageItemsBase['default']);
    var subject = ManageItemsBaseObject.create();
    assert.ok(subject);
  });
});