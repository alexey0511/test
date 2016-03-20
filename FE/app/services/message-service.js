import Ember from 'ember';

export default Ember.Service.extend({
  flashMessages: Ember.inject.service(),

  info: function(message, options={}) {
    return this.get('flashMessages').info(message, options);
  },

  warning: function(message, options={}) {
    return this.get('flashMessages').warning(message, options);
  },

  error: function(message, options={}) {
    return this.get('flashMessages').error(message, options);
  },

  success: function(message, options={}) {
    return this.get('flashMessages').success(message, options);
  }

});
