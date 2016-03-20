import Ember from 'ember';

const {on} = Ember;

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['ui', 'form'],

  defaultValidators: {
    empty: function(value) {
      return !(value === 'null' || value === 'undefined' || value === '');
    }
  },

  validation: Ember.computed('_validation', {
    get() {
      return this.get('_validation');
    },
    set(key, value) {
      var validation = Ember.copy(value, true);
      this.set('_validation', validation);
      return validation;
    }
  }),

  onDidInsertElement: on('didInsertElement', function() {
    this.setUpValidation();
    this.$().submit(event => {
      event.preventDefault();
      // prevent Semantic-UI API module from handling the submit event
      event.stopImmediatePropagation();
      this.sendAction('submit');
    });

    this.$().api();
  }),

  willDestroyElement() {
    this._super();
    this.$().api('destroy');
  },

  /*
   * Set up Semantic-UI validation
   */
  setUpValidation() {
    this.setUpValidators();

    var validation = this.get('validation');

    this.$().form({
      fields: validation,
      inline: true,
      on: 'blur',
      templates: {
        prompt: errorPromptTemplate
      },
      selector: {
        prompt: '.error.prompt.label',
        group: 'div.field'
      }
    });
  },

  /*
   * set up Semantic-UI validation rules for each validator
   */
  setUpValidators() {
   var uiRules = Ember.$.fn.form.settings.rules;
    var defaultValidators = this.get('defaultValidators');
    var validators = Ember.$.extend(defaultValidators, this.get('validators'));

    for (var prop in validators) {
      if (typeof validators[prop] === 'function') {
       uiRules[prop] = validators[prop];
      }
    }
  },

  fieldNameForInput(input) {
    return Ember.$(input).attr('name');
  }
});

function errorPromptTemplate(errors) {
  return Ember.$('<div/>')
    .addClass('ui red pointing error prompt label')
    .html(errors[0]);
}
