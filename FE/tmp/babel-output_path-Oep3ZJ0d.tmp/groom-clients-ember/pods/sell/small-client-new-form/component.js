define('groom-clients-ember/pods/sell/small-client-new-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),

    validation: {
      name: {
        identifier: 'last-name',
        rules: [{ type: 'empty' }]
      }
    },

    actions: {

      resetRecord: function resetRecord() {
        this.sendAction('resetRecord');
      },
      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#newClientForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
          })['catch'](function (e) {
            _this.get('messageService').error('The client record hasn\'t been created');
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});