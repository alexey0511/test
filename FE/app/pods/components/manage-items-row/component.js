import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isActive: false,

  actions: {
    saveItem(item) {
      item.save().then(() => {
        this.set('isActive',false);
      })
      .catch(e => {
        console.log('ERROR:',e);
      });
    },
    deleteItem(item) {
      item.destroyRecord();
    },
    editItem() {
      this.set('isActive',true);
    }
  }
});
