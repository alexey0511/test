define('groom-clients-ember/pods/haircut/item/manage-haircut-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    barbers: null,
    products: null,
    salons: null,
    clients: null,

    messageService: _ember['default'].inject.service(),
    paymentTypes: ['cash', 'efpos'],
    paymentType: _ember['default'].computed(function () {
      return this.get('paymentTypes')[1];
    }),
    abc: _ember['default'].computed(function () {
      return this.get('barbers.firstObject');
    }),
    validation: {},

    actions: {
      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#haircutForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
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
            _this2.sendAction('deleteRecord');
          }
        });
        _ember['default'].$('.ui.modal').modal('show');
      }
    }
  });
});