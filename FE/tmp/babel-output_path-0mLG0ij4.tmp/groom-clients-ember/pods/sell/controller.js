define('groom-clients-ember/pods/sell/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    listForClients: [_ember['default'].Object.create({ label: 'CASUAL', isActive: true }), _ember['default'].Object.create({ label: 'EXISTING', isActive: false }), _ember['default'].Object.create({ label: 'NEW', isActive: false })],

    selectedProduct: _ember['default'].computed('products.@each.isActive', function () {
      return this.get('products').filterBy('isActive').get('firstObject');
    }),
    selectedBarber: _ember['default'].computed('staffs.@each.isActive', function () {
      return this.get('staffs').filterBy('isActive').get('firstObject');
    }),
    selectedOptionClient: _ember['default'].computed('listForClients.@each.isActive', function () {
      return this.get('listForClients').filterBy('isActive', true).get('firstObject');
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
        item.destroyRecord()['catch'](function () {
          // FIXME handle server fail
        });
      },
      saveOrder: function saveOrder(option) {
        var _this = this;

        this.set('model.paymentType', option);

        this.get('model').save().then(function () {
          //FIXME alert succes
          alert("Done");
          _this.send('resetRoute');
        })['catch'](function () {
          //FIXME handle server failed
        });
      },
      onCreateNewClient: function onCreateNewClient() {
        _ember['default'].$('.shape').shape('set next side', '.fourth.side').shape('flip right');
      },
      resetNewClientForm: function resetNewClientForm() {},
      test: function test() {},
      openNextSide: function openNextSide(selection) {
        switch (selection.label) {
          case 'CASUAL':
            _ember['default'].$('.shape').shape('set next side', '.fourth.side');
            break;
          case 'EXISTING':
            _ember['default'].$('.shape').shape('set next side', '.third.side');
            break;
          case 'NEW':
            _ember['default'].$('.shape').shape('set next side', '.second.side');
            break;
          default:
            _ember['default'].$('.shape').shape('set next side', '.init.side');
        }
        _ember['default'].run.later(function () {
          _ember['default'].$('.shape').shape('flip right');
        }, 200);
      }
    }
  });
});