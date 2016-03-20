define('groom-clients-ember/pods/order/manage-client-selection/component', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var on = _ember['default'].on;
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['ui', 'shape', 'manage-client-selection'],

    clientOptionsList: [_ember['default'].Object.create({ label: 'CASUAL', isActive: true }), _ember['default'].Object.create({ label: 'EXISTING', isActive: false }), _ember['default'].Object.create({ label: 'NEW', isActive: false })],

    selectedClientOption: computed('clientOptionsList.@each.isActive', function () {
      return this.get('listForClients').filterBy('isActive', true).get('firstObject');
    }),
    onDidInsertElement: on('didInsertElement', function () {}),

    actions: {
      selectClient: function selectClient(client) {
        this.sendAction('onClientSelected', client);

        _ember['default'].$('.shape').shape('set next side', '.display-client.side').shape('flip right');
        // Ember.run.later(() => { Ember.$('.shape').shape('flip right'); }, 100);
      },

      createNewClient: function createNewClient(firstName, lastName) {
        this.sendAction('onCreateNewClient', firstName, lastName);

        _ember['default'].$('.shape').shape('set next side', '.display-client.side').shape('flip right');
      },

      openNextSide: function openNextSide(selection) {

        switch (selection.label) {
          case 'CASUAL':
            this.send('selectClient', null);
            break;
          case 'EXISTING':
            _ember['default'].$('.shape').shape('set next side', '.select-client.side').shape('flip right');
            // Ember.run.later(() => { Ember.$('.shape').shape('flip right'); }, 500);
            break;
          case 'NEW':
            _ember['default'].$('.shape').shape('set next side', '.new-client.side').shape('flip right');
            // Ember.run.later(() => { Ember.$('.shape').shape('flip right'); }, 500);
            break;
          default:
            this.get('clientOptionsList').filterBy('isActive').forEach(function (item) {
              item.set('isActive', false);
            });
            this.set('clientOptionsList.firstObject.isActive', true);

            _ember['default'].$('.shape').shape('set next side', '.main.side').shape('flip right');
          // Ember.run.later(() => { Ember.$('.shape').shape('flip right'); }, 500);
        }
      }
    }
  });
});