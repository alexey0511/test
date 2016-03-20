define('groom-clients-ember/pods/haircuts/haircut-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  var service = _ember['default'].inject.service;
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Component.extend({
    sessionUser: service(),

    tagName: 'tr',
    model: null,

    isAdmin: computed(function () {
      return true;
      //    return this.get('sessionUser.user.role') === 'admin';
    }),

    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});