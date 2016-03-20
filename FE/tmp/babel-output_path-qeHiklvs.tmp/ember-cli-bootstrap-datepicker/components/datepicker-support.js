define('ember-cli-bootstrap-datepicker/components/datepicker-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create({
    mustUpdateInput: true,
    value: null,
    // add the observed properties
    minViewMode: undefined,
    format: undefined,
    language: undefined,
    startDate: undefined,
    endDate: undefined,

    setupBootstrapDatepicker: _ember['default'].on('didInsertElement', function () {
      var self = this;

      this.$().datepicker({
        autoclose: this.get('autoclose'),
        calendarWeeks: this.get('calendarWeeks'),
        clearBtn: this.get('clearBtn'),
        container: this.get('widgetContainer'),
        daysOfWeekDisabled: this.get('daysOfWeekDisabled'),
        defaultViewDate: this.get('defaultViewDate'),
        disableTouchKeyboard: this.get('disableTouchKeyboard'),
        enableOnReadonly: this.get('enableOnReadonly'),
        endDate: this.get('endDate'),
        forceParse: this.get('forceParse'),
        format: this.get('format'),
        immediateUpdates: this.get('immediateUpdates'),
        keyboardNavigation: this.get('keyboardNavigation'),
        language: this.get('language') || undefined,
        maxViewMode: this.get('maxViewMode'),
        minViewMode: this.get('minViewMode'),
        multidate: this.get('multidate'),
        multidateSeparator: this.get('multidateSeparator'),
        orientation: this.get('orientation'),
        showOnFocus: this.get('showOnFocus'),
        startDate: this.get('startDate'),
        startView: this.get('startView'),
        todayBtn: this.get('todayBtn'),
        todayHighlight: this.get('todayHighlight'),
        toggleActive: this.get('toggleActive'),
        weekStart: this.get('weekStart'),
        datesDisabled: this.get('datesDisabled')
      }).on('changeDate', function (event) {
        _ember['default'].run(function () {
          self._didChangeDate(event);
        });
      }).on('input', function () {
        if (!self.$().val()) {
          self.set('value', null);
        }
      });

      this._updateDatepicker();
    }),

    teardownBootstrapDatepicker: _ember['default'].on('willDestroyElement', function () {
      this.$().datepicker('remove');
    }),

    didChangeValue: _ember['default'].observer('value', function () {
      this._updateDatepicker();
    }),

    _didChangeDate: function _didChangeDate(event) {
      var value = null;

      if (event.date) {
        if (this.get('multidate')) {
          value = this.$().datepicker('getDates');
        } else {
          value = this.$().datepicker('getDate');
        }
      }

      this.set('mustUpdateInput', false);
      this.set('value', value);
      this.sendAction('changeDate', value);
    },

    _addObservers: _ember['default'].on('didInsertElement', function () {
      this.addObserver('language', function () {
        this.$().datepicker('remove');
        this.setupBootstrapDatepicker();
      });

      this.addObserver('startDate', function () {
        this.$().datepicker('setStartDate', this.get('startDate'));
        this._updateDatepicker();
      });

      this.addObserver('endDate', function () {
        this.$().datepicker('setEndDate', this.get('endDate'));
        this._updateDatepicker();
      });

      this.addObserver('datesDisabled', function () {
        this.$().datepicker('setDatesDisabled', this.get('datesDisabled'));
        this._updateDatepicker();
      });

      this.addObserver('minViewMode', function () {
        this.$().datepicker('minViewMode', this.get('minViewMode'));
        this.$().data('datepicker')._process_options({ minViewMode: this.get('minViewMode') });
        this._updateDatepicker();
      });

      this.addObserver('format', function () {
        this.$().datepicker('format', this.get('format'));
        this.$().data('datepicker')._process_options({ format: this.get('format') });
        this._updateDatepicker();
      });
    }),

    _updateDatepicker: function _updateDatepicker() {
      var self = this,
          element = this.$(),
          value = this.get('value'),
          dates = [];

      if (!this.get('mustUpdateInput')) {
        this.set('mustUpdateInput', true);
        return;
      }

      switch (_ember['default'].typeOf(value)) {
        case 'array':
          dates = value;
          break;
        case 'date':
          dates = [value];
          break;
        default:
          dates = [null];
      }
      dates = dates.map(function (date) {
        return _ember['default'].isNone(date) ? null : self._getDateCloneWithNoTime(date);
      });

      element.datepicker.apply(element, Array.prototype.concat.call(['update'], dates));
    },

    // HACK: Have to reset time to 00:00:00 because of the bug in
    //       bootstrap-datepicker
    //       Issue: http://git.io/qH7Hlg
    _getDateCloneWithNoTime: function _getDateCloneWithNoTime(date) {
      var clone = new Date(date.getTime());

      clone.setHours(0);
      clone.setMinutes(0);
      clone.setSeconds(0);
      clone.setMilliseconds(0);

      return clone;
    }
  });
});