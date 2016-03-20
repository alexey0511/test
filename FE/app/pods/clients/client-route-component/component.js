import Ember from 'ember';

export default Ember.Component.extend({

  nameFilter:'',
  phoneFilter:'',
  filteredModel: Ember.computed('model','model.[]','nameFilter','phoneFilter','displayAll',function() {
    let model = this.get('model');
    let nameFilter = new RegExp(this.get('nameFilter'), 'gi');
    let phoneFilter = new RegExp(this.get('phoneFilter'), 'gi');

    return model.filter(client => {
      if (this.get('nameFilter') && client.get('fullName').match(nameFilter)) {
        return true;
      } else if (this.get('phoneFilter') && client.get('phone1').match(phoneFilter)) {
        return true;
      } else if (this.get('displayAll')) {
        return true;
      } else {
        return false;
      }
    });
  }),
  actions: {
    openRecord(model) {
      this.sendAction('onTransitionToItemRoute', model);
    }
  }

});
