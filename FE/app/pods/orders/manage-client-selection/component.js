import Ember from 'ember';

const { computed, on } = Ember;

export default Ember.Component.extend({
  classNames: ['ui','shape', 'manage-client-selection'],

  clientOptionsList: [
    Ember.Object.create({label: 'CASUAL', isActive:true}),
    Ember.Object.create({label: 'EXISTING', isActive:false}),
    Ember.Object.create({label: 'NEW', isActive:false})
  ],

  selectedClientOption: computed('clientOptionsList.@each.isActive',function() {
    return this.get('listForClients').filterBy('isActive', true).get('firstObject');
  }),
  onDidInsertElement: on('didInsertElement', function() {

  }),

  actions: {
    selectClient(client) {
      this.sendAction('onClientSelected', client);

      Ember.$('.shape')
      .shape('set next side', '.display-client.side')
      .shape('flip right');
    },

    createNewClient(firstName, lastName) {
      this.sendAction('onCreateNewClient', firstName, lastName);

      Ember.$('.shape')
      .shape('set next side', '.display-client.side')
      .shape('flip right');
    },

    openNextSide(selection) {

      switch (selection.label) {
        case 'CASUAL':
          this.send('selectClient', null);
          break;
        case 'EXISTING':
          Ember.$('.shape')
          .shape('set next side', '.select-client.side')
          .shape('flip right');
          break;
        case 'NEW':
          Ember.$('.shape')
          .shape('set next side', '.new-client.side')
          .shape('flip right');
          break;
        default:
        this.get('clientOptionsList').filterBy('isActive').forEach(item => {
          item.set('isActive', false);
        });
        this.set('clientOptionsList.firstObject.isActive', true);

        Ember.$('.shape')
        .shape('set next side', '.main.side')
        .shape('flip right');
      }
    }
  }
});
