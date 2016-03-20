define('groom-clients-ember/pods/components/ui-form/component', ['exports', 'ember'], function (exports, _ember) {
  var on = _ember['default'].on;
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['ui', 'form'],

    defaultValidators: {
      empty: function empty(value) {
        return !(value === 'null' || value === 'undefined' || value === '');
      }
    },

    validation: _ember['default'].computed('_validation', {
      get: function get() {
        return this.get('_validation');
      },
      set: function set(key, value) {
        var validation = _ember['default'].copy(value, true);
        this.set('_validation', validation);
        return validation;
      }
    }),

    onDidInsertElement: on('didInsertElement', function () {
      var _this = this;

      this.setUpValidation();
      this.$().submit(function (event) {
        event.preventDefault();
        // prevent Semantic-UI API module from handling the submit event
        event.stopImmediatePropagation();
        _this.sendAction('submit');
      });

      this.$().api();
    }),

    willDestroyElement: function willDestroyElement() {
      this._super();
      this.$().api('destroy');
    },

    /*
     * Set up Semantic-UI validation
     */
    setUpValidation: function setUpValidation() {
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
    setUpValidators: function setUpValidators() {
      //    var uiRules = Ember.$.fn.form.settings.rules;
      var defaultValidators = this.get('defaultValidators');
      var validators = _ember['default'].$.extend(defaultValidators, this.get('validators'));

      for (var prop in validators) {
        if (typeof validators[prop] === 'function') {
          //        uiRules[prop] = validators[prop];
        }
      }
    },

    fieldNameForInput: function fieldNameForInput(input) {
      return _ember['default'].$(input).attr('name');
    }
  });

  function errorPromptTemplate(errors) {
    return _ember['default'].$('<div/>').addClass('ui red pointing error prompt label').html(errors[0]);
  }
});