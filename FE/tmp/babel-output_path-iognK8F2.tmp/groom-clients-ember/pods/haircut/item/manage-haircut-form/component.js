define('groom-clients-ember/pods/haircut/item/manage-haircut-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
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
      }
    }
  });
});