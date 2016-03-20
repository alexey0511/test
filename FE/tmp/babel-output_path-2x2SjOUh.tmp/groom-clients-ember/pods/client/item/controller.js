define('groom-clients-ember/pods/client/item/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      confirmSuccess: function confirmSuccess() {
        this.send('transitionToClients');
      },
      resetRecord: function resetRecord() {
        this.get('model').destroyRecord();
        this.send('refreshRoute');
      },
      submit: function submit() {
        alert('submit controller');
      }

    }

  });
});