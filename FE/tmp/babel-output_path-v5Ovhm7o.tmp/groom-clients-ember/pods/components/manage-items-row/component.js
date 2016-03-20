define('groom-clients-ember/pods/components/manage-items-row/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    isActive: false,

    actions: {
      saveItem: function saveItem(item) {
        var _this = this;

        item.save().then(function () {
          _this.set('isActive', false);
        })['catch'](function (e) {
          console.log('ERROR:', e);
        });
      },
      deleteItem: function deleteItem(item) {
        item.destroyRecord();
      },
      editItem: function editItem() {
        this.set('isActive', true);
      }
    }
  });
});