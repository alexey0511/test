define('groom-clients-ember/pods/haircuts/haircut-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var service = _ember['default'].inject.service;
  exports['default'] = _ember['default'].Component.extend({
    sessionUser: service(),

    tagName: 'tr',
    model: null,

    adminUser: computed(function () {
      return this.get('sessionUser.user.role') === 'admin';
    }),

    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});