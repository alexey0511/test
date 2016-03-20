define('groom-clients-ember/pods/client/item/manage-client-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

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
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});