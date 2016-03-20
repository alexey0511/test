import Ember from 'ember';

const { computed } = Ember;
const { service} = Ember.inject;

export default Ember.Component.extend({
  sessionUser: service(),

  tagName: 'tr',
  model: null,

  adminUser: computed(function() {
    return this.get('sessionUser.user.role') === 'admin';
  }),

  actions: {
    openRecord(model) {
      this.sendAction('openRecord', model);
    }
  }
});
