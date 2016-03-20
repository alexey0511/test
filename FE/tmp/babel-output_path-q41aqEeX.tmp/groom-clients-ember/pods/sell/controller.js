define('groom-clients-ember/pods/sell/controller', ['exports', 'ember'], function (exports, _ember) {
  var on = _ember['default'].on;
  var computed = _ember['default'].computed;
  var $ = _ember['default'].$;
  exports['default'] = _ember['default'].Controller.extend({

    onInit: on('init', function () {
      var pressed = false;
      var chars = [];
      $(document).on('keypress', function (e) {
        if (e.which >= 48 && e.which <= 57) {
          chars.push(String.fromCharCode(e.which));
        } else if (e.which === 13) {
          e.preventDefault();
        }
        if (pressed === false) {
          setTimeout(function () {
            if (chars.length > 5) {
              var barcode = chars.join("");
              var client = this.get('clients').filterBy('token', barcode).get('firstObject');
              if (client) {
                this.set('model.client', client);
              }
            }
            chars = [];
            pressed = false;
          }, 1000);
        }
        pressed = true;
      });
    }),

    clientOptionsList: [_ember['default'].Object.create({ label: 'CASUAL', isActive: true }), _ember['default'].Object.create({ label: 'EXISTING', isActive: false }), _ember['default'].Object.create({ label: 'NEW', isActive: false })],

    selectedProduct: computed('products.@each.isActive', function () {
      return this.get('products').filterBy('isActive').get('firstObject');
    }),
    selectedBarber: computed('staffs.@each.isActive', function () {
      return this.get('staffs').filterBy('isActive').get('firstObject');
    }),
    selectedClientOption: computed('clientOptionsList.@each.isActive', function () {
      return this.get('listForClients').filterBy('isActive', true).get('firstObject');
    }),
    selectedClient: null,

    actions: {
      addItem: function addItem() {
        var ln = this.store.createRecord('line-item', {
          product: this.get('selectedProduct'),
          barber: this.get('selectedBarber')
        });
        this.get('model.lineItems').pushObject(ln);
        //      this.set('model.client', this.get('selectedClient'));

        // clean records
        this.get('staffs').filterBy('isActive')[0].set('isActive', false);
        this.get('products').filterBy('isActive')[0].set('isActive', false);

        this.get('staffs.firstObject').set('isActive', true);
        this.get('products.firstObject').set('isActive', true);
      },
      removeItem: function removeItem(item) {
        item.destroyRecord()['catch'](function () {
          // FIXME handle server fail
        });
      },
      saveOrder: function saveOrder(option) {
        var _this = this;

        if (this.get('model.lineItems.length')) {
          this.set('model.paymentType', option);

          this.get('model').save().then(function () {
            //FIXME alert succes
            _this.get('messageService').success('Done');
            _this.send('resetRoute');
          })['catch'](function () {
            //FIXME handle server failed
          });
        } else {
            //FIXME replace with modals
            alert('please select something');
          }
      },
      createNewClient: function createNewClient(firstName, lastName) {
        var _this2 = this;

        this.store.createRecord('client', { firstName: firstName, lastName: lastName }).save().then(function (client) {
          _this2.send('selectClient', client);
        })['catch'](function (e) {
          _this2.get('messageService').error('The client record hasn\'t been created');
          console.log(e);
          _this2.send('openNextSide', 'init');
        });
      },
      selectClient: function selectClient(client) {
        this.set('model.client', client);
        _ember['default'].$('.shape').shape('set next side', '.display-client.side');
        _ember['default'].run.later(function () {
          _ember['default'].$('.shape').shape('flip right');
        }, 200);
      },
      resetNewClientForm: function resetNewClientForm() {},
      openNextSide: function openNextSide(selection) {

        switch (selection.label) {
          case 'CASUAL':
            this.set('model.client', null);

            _ember['default'].$('.shape').shape('set next side', '.display-client.side');
            break;
          case 'EXISTING':
            _ember['default'].$('.shape').shape('set next side', '.select-client.side');
            break;
          case 'NEW':
            _ember['default'].$('.shape').shape('set next side', '.new-client.side');
            break;
          default:

            this.get('clientOptionsList').filterBy('isActive').forEach(function (item) {
              item.set('isActive', false);
            });
            this.set('clientOptionsList.firstObject.isActive', true);

            _ember['default'].$('.shape').shape('set next side', '.init.side');
        }
        _ember['default'].run.later(function () {
          _ember['default'].$('.shape').shape('flip right');
        }, 200);
      }
    }
  });
});