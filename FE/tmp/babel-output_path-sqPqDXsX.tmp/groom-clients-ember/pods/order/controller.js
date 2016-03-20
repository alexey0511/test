define('groom-clients-ember/pods/order/controller', ['exports', 'ember'], function (exports, _ember) {
  var on = _ember['default'].on;
  var computed = _ember['default'].computed;
  var $ = _ember['default'].$;
  exports['default'] = _ember['default'].Controller.extend({

    selectedProduct: computed('products.@each.isActive', function () {
      return this.get('products').filterBy('isActive').get('firstObject');
    }),
    selectedBarber: computed('staffs.@each.isActive', function () {
      return this.get('staffs').filterBy('isActive').get('firstObject');
    }),

    onInit: on('init', function () {
      this.activateBarcodeScanner();
    }),

    activateBarcodeScanner: function activateBarcodeScanner() {
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
    },

    actions: {
      addItem: function addItem() {
        var ln = this.store.createRecord('line-item', {
          product: this.get('selectedProduct'),
          barber: this.get('selectedBarber')
        });
        this.get('model.lineItems').pushObject(ln);

        // clean records
        this.get('staffs').filterBy('isActive').forEach(function (item) {
          item.set('isActive', false);
        });
        this.get('products').filterBy('isActive').forEach(function (item) {
          item.set('isActive', false);
        });

        this.get('staffs.firstObject').set('isActive', true);
        this.get('products.firstObject').set('isActive', true);
      },

      removeItem: function removeItem(item) {
        item.destroyRecord()['catch'](function () {
          // FIXME handle server fail
        });
      },

      selectClient: function selectClient(client) {
        this.set('model.client', client);
      },

      saveOrder: function saveOrder(option) {
        var _this = this;

        if (this.get('model.lineItems.length')) {
          this.set('model.paymentType', option);
          this.set('model.salon', option);

          this.get('model').save().then(function () {
            //FIXME alert succes
            _this.get('messageService').success('Done');
            _this.send('resetRoute');
          })['catch'](function () {
            //FIXME handle server failed
          });
        } else {
            //FIXME replace with modals
            alert('please select something first ....');
          }
      },
      createNewClient: function createNewClient(firstName, lastName) {
        var _this2 = this;

        this.store.createRecord('client', { firstName: firstName, lastName: lastName }).save().then(function (client) {
          _this2.send('selectClient', client);
        })['catch'](function (e) {
          _this2.get('messageService').error('The client record hasn\'t been created');
          console.log(e);
        });
      }

    }
  });
});