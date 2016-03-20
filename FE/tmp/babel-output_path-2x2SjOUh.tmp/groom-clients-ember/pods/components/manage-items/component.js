define('groom-clients-ember/pods/components/manage-items/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    model: null,
    modelName: _ember['default'].computed('model', function () {
      return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
    }),
    attributes: _ember['default'].computed('model', function () {
      return Object.keys(this.get('model.firstObject').toJSON());
    }),
    disableAddButton: _ember['default'].computed('model.@each.isNew', function () {
      return this.get('model').isAny('isNew');
    }),

    actions: {
      addItem: function addItem() {
        this.sendAction('addItem');
      }
    }
  });
});