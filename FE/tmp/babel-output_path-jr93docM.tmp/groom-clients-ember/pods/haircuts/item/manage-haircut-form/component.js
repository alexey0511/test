define('groom-clients-ember/pods/haircuts/item/manage-haircut-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),

    barbers: null,
    products: null,
    users: null,
    clients: null,

    paymentTypes: ['cash', 'efpos'],
    paymentType: _ember['default'].computed(function () {
      return this.get('paymentTypes')[1];
    }),

    validation: {},

    actions: {
      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#haircutForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.get('model.order.content').save().then(function () {
              _this.sendAction('onTransitionToListRoute');
            });
          })['catch'](function (e) {
            _this.get('messageService').error('The changes hasn\'t been saved');
            console.log('ERROR: ', e);
          });
        }
      },
      deleteRecord: function deleteRecord() {
        var _this2 = this;

        _ember['default'].$('.ui.modal').modal({
          onApprove: function onApprove() {
            _this2.get('model').destroyRecord().then(function () {
              _this2.sendAction('onTransitionToListRoute');
            });
          }
        });
        _ember['default'].$('.ui.modal').modal('show');
      }
    }
  });
});