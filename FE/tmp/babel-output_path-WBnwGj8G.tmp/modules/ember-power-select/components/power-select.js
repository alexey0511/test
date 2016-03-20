import Ember from 'ember';
import layout from '../templates/components/power-select';
import { defaultMatcher, indexOfOption as _indexOfOption, optionAtIndex as _optionAtIndex, filterOptions, countOptions } from '../utils/group-utils';
import fallbackIfUndefined from '../utils/computed-fallback-if-undefined';

var computed = Ember.computed;
var run = Ember.run;
var get = Ember.get;
var isBlank = Ember.isBlank;

export default Ember.Component.extend({
  // HTML
  layout: layout,
  tagName: fallbackIfUndefined(''),

  // Config
  disabled: fallbackIfUndefined(false),
  placeholder: fallbackIfUndefined(null),
  loadingMessage: fallbackIfUndefined('Loading options...'),
  noMatchesMessage: fallbackIfUndefined('No results found'),
  verticalPosition: fallbackIfUndefined('auto'),
  matcher: fallbackIfUndefined(defaultMatcher),
  searchField: fallbackIfUndefined(null),
  search: fallbackIfUndefined(null),
  closeOnSelect: fallbackIfUndefined(true),
  dropdownClass: fallbackIfUndefined(null),
  triggerClass: fallbackIfUndefined(null),
  dir: fallbackIfUndefined(null),
  opened: fallbackIfUndefined(false),
  searchEnabled: fallbackIfUndefined(true),
  searchMessage: fallbackIfUndefined("Type to search"),
  searchPlaceholder: fallbackIfUndefined(null),
  allowClear: fallbackIfUndefined(false),
  triggerComponent: fallbackIfUndefined('power-select/trigger'),
  selectedItemComponent: fallbackIfUndefined(null),
  optionsComponent: fallbackIfUndefined('power-select/options'),
  beforeOptionsComponent: fallbackIfUndefined('power-select/before-options'),
  afterOptionsComponent: fallbackIfUndefined(null),

  // Attrs
  searchText: '',
  lastSearchedText: '',
  activeSearch: null,
  openingEvent: null,
  loading: false,
  previousResults: null,

  // Lifecycle hooks
  didInitAttrs: function didInitAttrs() {
    this._super.apply(this, arguments);
    Ember.assert('{{power-select}} requires an `onchange` function', this.get('onchange') && typeof this.get('onchange') === 'function');
  },

  willDestroy: function willDestroy() {
    this._super.apply(this, arguments);
    this.activeSearch = null;
  },

  // CPs
  dropdownPosition: Ember.computed.deprecatingAlias('verticalPosition', { id: 'power-select-dropdown-position', until: '0.9' }),
  selectedComponent: Ember.computed.deprecatingAlias('triggerComponent', { id: 'power-select-selected-component', until: '0.9' }),

  concatenatedClasses: computed('class', function () {
    var classes = ['ember-power-select'];
    if (this.get('class')) {
      classes.push(this.get('class'));
    }
    return classes.join(' ');
  }),

  concatenatedTriggerClasses: computed('class', function () {
    var classes = ['ember-power-select-trigger', 'ember-power-select-trigger-' + this.elementId];
    if (this.get('triggerClass')) {
      classes.push(this.get('triggerClass'));
    }
    if (this.get('class')) {
      classes.push(this.get('class') + '-trigger');
    }
    return classes.join(' ');
  }),

  concatenatedDropdownClasses: computed('class', function () {
    var classes = ['ember-power-select-dropdown', 'ember-power-select-dropdown-' + this.elementId];
    if (this.get('dropdownClass')) {
      classes.push(this.get('dropdownClass'));
    }
    if (this.get('class')) {
      classes.push(this.get('class') + '-dropdown');
    }
    return classes.join(' ');
  }),

  mustShowSearchMessage: computed('searchText', 'search', 'searchMessage', 'results.length', function () {
    return this.get('searchText.length') === 0 && !!this.get('search') && !!this.get('searchMessage') && this.get('results.length') === 0;
  }),

  mustShowNoMessages: computed('results.length', 'loading', function () {
    return !this.get('loading') && this.get('results.length') === 0;
  }),

  results: computed('options.[]', {
    get: function get() {
      var _this = this;

      var options = this.get('options') || [];
      var searchAction = this.get('search');
      if (options.then) {
        this.set('loading', true);
        options.then(function (results) {
          return _this.set('results', results);
        });
        return this.previousResults || [];
      }
      var newResults = searchAction ? options : this.filter(options, this.get('searchText'));
      this.setProperties({ loading: false, currentlyHighlighted: undefined });
      this.previousResults = newResults;
      return newResults;
    },
    set: function set(_, newResults) {
      this.previousResults = newResults;
      this.setProperties({ loading: false, currentlyHighlighted: undefined });
      return newResults;
    }
  }),

  highlighted: computed('results.[]', 'currentlyHighlighted', 'selected', function () {
    return this.get('currentlyHighlighted') || this.defaultHighlighted();
  }),

  resultsLength: computed('results.[]', function () {
    return countOptions(this.get('results'));
  }),

  // Actions
  actions: {
    highlight: function highlight(dropdown, option) {
      this._doHighlight(dropdown, option);
    },

    search: function search(dropdown, term /*, e */) {
      this._doSearch(dropdown, term);
    },

    select: function select(dropdown, selected, e) {
      this._doSelect(dropdown, selected, e);
    },

    choose: function choose(dropdown, selection, e) {
      if (e && e.clientY) {
        var openingEvent = this.get('openingEvent');
        if (openingEvent && openingEvent.clientY) {
          if (Math.abs(openingEvent.clientY - e.clientY) < 2) {
            return;
          }
        }
      }
      this.send('select', dropdown, selection, e);
      if (this.get('closeOnSelect')) {
        dropdown.actions.close(e);
      }
    },

    handleKeydown: function handleKeydown(dropdown, e) {
      var onkeydown = this.get('onkeydown');
      if (onkeydown) {
        onkeydown(this.buildPublicAPI(dropdown), e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        // Up & Down
        if (dropdown.isOpen) {
          e.preventDefault();
          var newHighlighted = this.advanceSelectableOption(this.get('highlighted'), e.keyCode === 40 ? 1 : -1);
          this.send('highlight', dropdown, newHighlighted, e);
          run.scheduleOnce('afterRender', this, this.scrollIfHighlightedIsOutOfViewport);
        } else {
          dropdown.actions.open(e);
        }
      } else if (e.keyCode === 9 || e.keyCode === 27) {
        // Tab or ESC
        dropdown.actions.close(e);
      }
    },

    handleFocus: function handleFocus(dropdown, event) {
      var action = this.get('onfocus');
      if (action) {
        action(this.buildPublicAPI(dropdown), event);
      }
    },

    // It is not evident what is going on here, so I'll explain why.
    //
    // As of this writting, Ember doesn allow to yield data to the "inverse" block.
    // Because of that, elements of this component rendered in the trigger can't receive the
    // yielded object contaning the public API of the ember-basic-dropdown, with actions for open,
    // close and toggle.
    //
    // The only possible workaround for this is to on initialization inject a similar object
    // to the one yielded and store it to make it available in the entire component.
    //
    // This this limitation on ember should be fixed soon, this is temporary. Because of that this
    // object will be passed to the action from the inverse block like if it was yielded.
    //
    registerDropdown: function registerDropdown(dropdown) {
      this.set('registeredDropdown', dropdown);
    },

    handleOpen: function handleOpen(dropdown, e) {
      var action = this.get('onopen');
      if (action) {
        action(this.buildPublicAPI(dropdown), e);
      }
      if (e) {
        this.set('openingEvent', e);
      }
      run.scheduleOnce('afterRender', this, this.scrollIfHighlightedIsOutOfViewport);
    },

    handleClose: function handleClose(dropdown, e) {
      var action = this.get('onclose');
      if (action) {
        action(this.buildPublicAPI(dropdown), e);
      }
      if (e) {
        this.set('openingEvent', null);
      }
      this.send('highlight', dropdown, null, e);
    }
  },

  // Methods
  scrollIfHighlightedIsOutOfViewport: function scrollIfHighlightedIsOutOfViewport() {
    var optionsList = document.querySelector('.ember-power-select-options');
    if (!optionsList) {
      return;
    }
    var highlightedOption = optionsList.querySelector('.ember-power-select-option--highlighted');
    if (!highlightedOption) {
      return;
    }
    var optionTopScroll = highlightedOption.offsetTop - optionsList.offsetTop;
    var optionBottomScroll = optionTopScroll + highlightedOption.offsetHeight;
    if (optionBottomScroll > optionsList.offsetHeight + optionsList.scrollTop) {
      optionsList.scrollTop = optionBottomScroll - optionsList.offsetHeight;
    } else if (optionTopScroll < optionsList.scrollTop) {
      optionsList.scrollTop = optionTopScroll;
    }
  },

  indexOfOption: function indexOfOption(option) {
    return _indexOfOption(this.get('results'), option);
  },

  optionAtIndex: function optionAtIndex(index) {
    return _optionAtIndex(this.get('results'), index);
  },

  advanceSelectableOption: function advanceSelectableOption(activeHighlighted, step) {
    var resultsLength = this.get('resultsLength');
    var startIndex = Math.min(Math.max(this.indexOfOption(activeHighlighted) + step, 0), resultsLength - 1);
    var nextOption = this.optionAtIndex(startIndex);
    while (nextOption && get(nextOption, 'disabled')) {
      nextOption = this.optionAtIndex(startIndex += step);
    }
    return nextOption;
  },

  filter: function filter(options, term) {
    var _this2 = this;

    var matcher = undefined;
    if (this.get('searchField')) {
      matcher = function (option, text) {
        return _this2.get('matcher')(get(option, _this2.get('searchField')), text);
      };
    } else {
      matcher = function (option, text) {
        return _this2.get('matcher')(option, text);
      };
    }
    return filterOptions(options || [], term, matcher);
  },

  buildPublicAPI: function buildPublicAPI(dropdown) {
    var ownActions = {
      search: this._doSearch.bind(this, dropdown),
      highlight: this._doHighlight.bind(this, dropdown),
      select: this._doSelect.bind(this, dropdown)
    };
    return {
      isOpen: dropdown.isOpen,
      highlighted: this.get('highlighted'),
      actions: Ember.merge(ownActions, dropdown.actions)
    };
  },

  defaultHighlighted: function defaultHighlighted() {
    var selected = this.get('selected');
    if (!selected || this.indexOfOption(selected) === -1) {
      return this.optionAtIndex(0);
    }
    return selected;
  },

  _doSelect: function _doSelect(dropdown, selected, e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.get('selected') !== selected) {
      this.get('onchange')(selected, this.buildPublicAPI(dropdown));
    }
  },

  _doHighlight: function _doHighlight(dropdown, option) {
    if (option && get(option, 'disabled')) {
      return;
    }
    this.set('currentlyHighlighted', option);
  },

  _doSearch: function _doSearch(dropdown, term) {
    var _this3 = this;

    if (isBlank(term)) {
      var options = this.get('options') || [];
      this.activeSearch = null;
      this.setProperties({ results: options, searchText: term, lastSearchedText: term, loading: false });
    } else {
      var searchAction = this.get('search');
      if (searchAction) {
        (function () {
          var search = searchAction(term);
          if (!search) {
            _this3.setProperties({ lastSearchedText: term, searchText: term });
          } else if (search.then) {
            _this3.activeSearch = search;
            _this3.setProperties({ loading: true, searchText: term });
            search.then(function (results) {
              if (_this3.activeSearch === search) {
                _this3.setProperties({ results: results, lastSearchedText: term });
              }
            }, function () {
              if (_this3.activeSearch === search) {
                _this3.set('lastSearchedText', term);
              }
            });
          } else {
            _this3.setProperties({ results: search, searchText: term, lastSearchedText: term });
          }
        })();
      } else {
        this.setProperties({ results: this.filter(this.get('options'), term), searchText: term, lastSearchedText: term });
      }
    }
  }
});