define('groom-clients-ember/pods/clients/item/manage-client-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),

    validation: {
      name: {
        identifier: 'last-name',
        rules: [{ type: 'empty' }]
      },
      email: {
        identifier: 'email',
        rules: [{ type: 'email' }]
      }
    },

    actions: {

      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#clientForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
          })['catch'](function (e) {
            _this.get('messageService').error('The changes cannot be saved');
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});