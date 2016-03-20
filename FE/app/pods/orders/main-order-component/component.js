import Ember from 'ember';

const {on, computed, $ } = Ember;
const { service} = Ember.inject;
const NUMBER_OF_HAIRCUTS = 6;

export default Ember.Component.extend({

  store: service(),
  messageService: service(),

  selectedProduct: computed('products.@each.isActive',function() {
    return this.get('products').filterBy('isActive').get('firstObject');
  }),

  selectedBarber: computed('staffs.@each.isActive',function() {
    return this.get('staffs').filterBy('isActive').get('firstObject');
  }),

  onInit: on('init', function () {
    this.activateBarcodeScanner();
  }),

  activateBarcodeScanner() {
    let pressed = false;
    let chars = [];
    $(document).on('keypress', e => {
      if (e.which >= 48 && e.which <= 57) {
        chars.push(String.fromCharCode(e.which));
      } else if (e.which === 13) {
        e.preventDefault();
      }
      if (pressed === false) {
        setTimeout(function () {
          if (chars.length > 5) {
            let barcode = chars.join("");
            let client = this.get('clients').filterBy('token', barcode).get('firstObject');
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

  increaseClientCounters(num) {
    let client = this.get('model.client.content');

    if (!Ember.isEmpty(client)) {
      client.set('visits', client.get('visits') + num);
      client.set('progress', (client.get('progress') + num) % NUMBER_OF_HAIRCUTS);
    }
  },
  decreaseClientCounters(num) {
    let client = this.get('model.client.content');
    if (!Ember.isEmpty(client)) {
      client.set('visits', client.get('visits') - num);

      let progress = client.get('progress');

      let i = num;
      while (i > 0) {
        if (progress === 0) {
          progress = NUMBER_OF_HAIRCUTS;
        }
        progress -= 1;

        i--;
      }

      client.set('progress',  progress);
    }
  },
  setItemPrice(ln) {
    let client = this.get('model.client.content');
    if (Ember.isEmpty(client)) {
      ln.set('itemPrice', ln.get('product.price'));
    } else {
      if (this.get('model.client.progress') === NUMBER_OF_HAIRCUTS - 1) {
        let newPrice = Number((ln.get('product.price') / 2).toFixed(2)) || 0;
        ln.set('itemPrice', newPrice);
      } else {
        ln.set('itemPrice', ln.get('product.price'));
      }
    }
  },

  recalculatePrices() {
    let lineItems = this.get('model.lineItems');

    this.decreaseClientCounters(lineItems.get('length'));

    if (lineItems.get('length'))  {
      lineItems.forEach(item => {
        this.setItemPrice(item);
        this.increaseClientCounters(1);
      });
    }
  },

  actions: {
    addItem() {
      let ln = this.get('store').createRecord('line-item', {
        product: this.get('selectedProduct'),
        barber: this.get('selectedBarber')
      });

      this.get('model.lineItems').pushObject(ln);

      this.increaseClientCounters(1);
      this.recalculatePrices();

      // clean records
      this.get('staffs').filterBy('isActive').forEach(item => { item.set('isActive', false); });
      this.get('products').filterBy('isActive').forEach(item => { item.set('isActive', false); });

      this.get('staffs.firstObject').set('isActive', true);
      this.get('products.firstObject').set('isActive', true);
    },

    removeItem(item) {
      item.destroyRecord()
      .then(() => {
        this.decreaseClientCounters(1);
        this.recalculatePrices();
      })
      .catch(() => {
        // FIXME handle server fail
      });
    },

    selectClient(client) {
      let oldClient = this.get('model.cleint');
      if (oldClient) {
        oldClient.rollbackAttributes();
      }

      this.set('model.client', client);

      this.recalculatePrices();
    },

    saveOrder(option) {
      if (this.get('model.lineItems.length')) {


        this.set('model.paymentType', option);
        this.set('model.user', option);

        this.get('model').save().then(() => {
          this.get('messageService').success('Done');
          this.sendAction('onResetRoute');
        })
        .catch(() => {
          //FIXME handle server failed
        });
      } else {
        //FIXME replace with modals
        alert('please select something first ....');
      }
    },
    createNewClient(firstName, lastName) {
      this.get('store').createRecord('client', {firstName, lastName }).save()
      .then(client => {
        this.send('selectClient', client);
      }).catch(e => {
        this.get('messageService').error(`The client record hasn't been created`);
        console.log(e);
      });
    },

  }
});
