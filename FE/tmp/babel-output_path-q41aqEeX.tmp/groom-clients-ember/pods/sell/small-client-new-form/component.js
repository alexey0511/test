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
        if (_ember['default'].$('#smallNewClientForm').form('is valid')) {
          this.sendAction('onCreateClient', this.get('firstName'), this.get('lastName'));

          _ember['default'].$('#smallNewClientForm').form('reset');
        }
      }
    }
  });
});