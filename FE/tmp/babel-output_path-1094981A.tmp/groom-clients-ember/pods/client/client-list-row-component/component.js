define('groom-clients-ember/pods/client/client-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    model: null,
    onInit: _ember['default'].on('init', function () {
      this.get('model');
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});