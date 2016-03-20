define('groom-clients-ember/pods/haircut/item/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      confirmSuccess: function confirmSuccess() {
        this.send('transitionToListRoute');
      },
      resetRecord: function resetRecord() {
        this.get('model').destroyRecord();
        this.send('refreshRoute');
      },
      submit: function submit() {
        alert('submit controller');
      },
      deleteRecord: function deleteRecord() {
        this.get('model').destroyRecord();
        this.transitionToRoute('haircut');
      }
    }

  });
});