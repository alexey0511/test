define('groom-clients-ember/pods/orders/main-order-component/component', ['exports', 'ember'], function (exports, _ember) {
  var on = _ember['default'].on;
  var computed = _ember['default'].computed;
  var $ = _ember['default'].$;
  var service = _ember['default'].inject.service;

  var NUMBER_OF_HAIRCUTS = 6;

  exports['default'] = _ember['default'].Component.extend({

    store: service(),
    messageService: service(),

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

    increaseClientCounters: function increaseClientCounters(num) {
      var client = this.get('model.client.content');

      if (!_ember['default'].isEmpty(client)) {
        client.set('visits', client.get('visits') + num);
        client.set('progress', (client.get('progress') + num) % NUMBER_OF_HAIRCUTS);
      }
    },
    decreaseClientCounters: function decreaseClientCounters(num) {
      var client = this.get('model.client.content');
      if (!_ember['default'].isEmpty(client)) {
        client.set('visits', client.get('visits') - num);

        var progress = client.get('progress');

        var i = num;
        while (i > 0) {
          if (progress === 0) {
            progress = NUMBER_OF_HAIRCUTS;
          }
          progress -= 1;

          i--;
        }

        client.set('progress', progress);
      }
    },
    setItemPrice: function setItemPrice(ln) {
      var client = this.get('model.client.content');
      if (_ember['default'].isEmpty(client)) {
        ln.set('itemPrice', ln.get('product.price'));
      } else {
        if (this.get('model.client.progress') === NUMBER_OF_HAIRCUTS - 1) {
          var newPrice = Number((ln.get('product.price') / 2).toFixed(2)) || 0;
          ln.set('itemPrice', newPrice);
        } else {
          ln.set('itemPrice', ln.get('product.price'));
        }
      }
    },

    recalculatePrices: function recalculatePrices() {
      var _this = this;

      var lineItems = this.get('model.lineItems');

      this.decreaseClientCounters(lineItems.get('length'));

      if (lineItems.get('length')) {
        lineItems.forEach(function (item) {
          _this.setItemPrice(item);
          _this.increaseClientCounters(1);
        });
      }
    },

    actions: {
      addItem: function addItem() {
        var ln = this.get('store').createRecord('line-item', {
          product: this.get('selectedProduct'),
          barber: this.get('selectedBarber')
        });

        this.get('model.lineItems').pushObject(ln);

        this.increaseClientCounters(1);
        this.recalculatePrices();

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
        var _this2 = this;

        item.destroyRecord().then(function () {
          _this2.decreaseClientCounters(1);
          _this2.recalculatePrices();
        })['catch'](function () {
          // FIXME handle server fail
        });
      },

      selectClient: function selectClient(client) {
        var oldClient = this.get('model.cleint');
        if (oldClient) {
          oldClient.rollbackAttributes();
        }

        this.set('model.client', client);

        this.recalculatePrices();
      },

      saveOrder: function saveOrder(option) {
        var _this3 = this;

        if (this.get('model.lineItems.length')) {

          this.set('model.paymentType', option);
          this.set('model.user', option);

          this.get('model').save().then(function () {
            _this3.get('messageService').success('Done');
            _this3.sendAction('onResetRoute');
          })['catch'](function () {
            //FIXME handle server failed
          });
        } else {
            //FIXME replace with modals
            alert('please select something first ....');
          }
      },
      createNewClient: function createNewClient(firstName, lastName) {
        var _this4 = this;

        this.get('store').createRecord('client', { firstName: firstName, lastName: lastName }).save().then(function (client) {
          _this4.send('selectClient', client);
        })['catch'](function (e) {
          _this4.get('messageService').error('The client record hasn\'t been created');
          console.log(e);
        });
      }

    }
  });
});