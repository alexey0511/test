define('groom-clients-ember/mixins/manage-items-base', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    messageService: _ember['default'].inject.service(),
    model: null,
    modelName: _ember['default'].computed('model', function () {
      return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
    }),
    attributes: [],
    disableAddButton: _ember['default'].computed('model.@each.isNew', function () {
      return this.get('model').isAny('isNew');
    }),

    actions: {
      addItem: function addItem() {
        this.sendAction('addItem');
      },
      saveItem: function saveItem(item) {
        var _this = this;

        item.save().then(function () {
          item.set('isActive', false);
        })['catch'](function (e) {
          _this.get('messageService').error('The item cannot be saved');
          console.log('ERROR:', e);
        });
      },
      deleteItem: function deleteItem(item) {
        // Ember.$('.ui.modal').modal({
        //   onApprove: () => {
        //     item.destroyRecord();
        //   }
        // });
        // Ember.$('.ui.modal').modal('show');
        var onApprove = function onApprove() {
          return item.destroyRecord();
        };
        this.sendAction('onOpenConfirmationModal', onApprove);
      },
      editItem: function editItem(item) {
        item.set('isActive', true);
      }
    }
  });
});