define('groom-clients-ember/pods/haircuts/haircut-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    model: null,
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});