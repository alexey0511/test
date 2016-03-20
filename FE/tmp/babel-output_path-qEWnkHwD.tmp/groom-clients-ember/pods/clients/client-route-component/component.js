define('groom-clients-ember/pods/clients/client-route-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    nameFilter: '',
    phoneFilter: '',
    filteredModel: _ember['default'].computed('model', 'model.[]', 'nameFilter', 'phoneFilter', 'displayAll', function () {
      var _this = this;

      var model = this.get('model');
      var nameFilter = new RegExp(this.get('nameFilter'), 'gi');
      var phoneFilter = new RegExp(this.get('phoneFilter'), 'gi');

      return model.filter(function (client) {
        if (_this.get('nameFilter') && client.get('fullName').match(nameFilter)) {
          return true;
        } else if (_this.get('phoneFilter') && client.get('phone1').match(phoneFilter)) {
          return true;
        } else if (_this.get('displayAll')) {
          return true;
        } else {
          return false;
        }
      });
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('onTransitionToItemRoute', model);
      }
    }

  });
});