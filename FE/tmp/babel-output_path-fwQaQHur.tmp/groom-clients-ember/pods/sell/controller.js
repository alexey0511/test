define('groom-clients-ember/pods/sell/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    selectedProduct: _ember['default'].computed('products.@each.isActive', function () {
      return this.get('products').filterBy('isActive').get('firstObject');
    }),
    selectedBarber: _ember['default'].computed('staffs.@each.isActive', function () {
      return this.get('staffs').filterBy('isActive').get('firstObject');
    }),
    selectedClient: _ember['default'].computed('clients.@each.isActive', function () {
      return this.get('clients').filterBy('isActive', true).get('firstObject');
    }),

    actions: {
      addItem: function addItem() {
        var ln = this.store.createRecord('line-item', {
          product: this.get('selectedProduct'),
          barber: this.get('selectedBarber')
        });
        this.get('model.lineItems').pushObject(ln);
        this.set('model.client', this.get('selectedClient'));

        // clean records
        this.get('staffs').filterBy('isActive')[0].set('isActive', false);
        this.get('products').filterBy('isActive')[0].set('isActive', false);
        this.get('clients').filterBy('isActive')[0].set('isActive', false);

        this.get('staffs.firstObject').set('isActive', true);
        this.get('products.firstObject').set('isActive', true);
        this.get('clients.firstObject').set('isActive', true);
      },
      removeItem: function removeItem(item) {
        console.log(item);
      }
    }
  });
});