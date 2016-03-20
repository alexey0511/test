define('groom-clients-ember/pods/staff/manage-staff-form/component', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase) {
  exports['default'] = _ember['default'].Component.extend(_groomClientsEmberMixinsManageItemsBase['default'], {
    attributes: ['Name']

  });
});