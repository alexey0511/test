define('ember-basic-dropdown/components/basic-dropdown', ['exports', 'ember', 'ember-basic-dropdown/templates/components/basic-dropdown', 'ember-getowner-polyfill'], function (exports, _ember, _emberBasicDropdownTemplatesComponentsBasicDropdown, _emberGetownerPolyfill) {
  'use strict';

  var Component = _ember['default'].Component;
  var run = _ember['default'].run;
  var computed = _ember['default'].computed;

  var MutObserver = window.MutationObserver || window.WebKitMutationObserver;

  exports['default'] = Component.extend({
    layout: _emberBasicDropdownTemplatesComponentsBasicDropdown['default'],
    disabled: false,
    renderInPlace: false,
    verticalPosition: 'auto', // above | below
    horizontalPosition: 'auto', // right | left
    classNames: ['ember-basic-dropdown'],
    attributeBindings: ['dir'],
    classNameBindings: ['publicAPI.isOpen:ember-basic-dropdown--opened', 'disabled:ember-basic-dropdown--disabled', 'renderInPlace:ember-basic-dropdown--in-place', '_verticalPositionClass', '_horizontalPositionClass'],
    _wormholeDestination: _ember['default'].testing ? 'ember-testing' : 'ember-basic-dropdown-wormhole',

    // Lifecycle hooks
    init: function init() {
      this._super.apply(this, arguments);
      var rootSelector = _ember['default'].testing ? '#ember-testing' : (0, _emberGetownerPolyfill['default'])(this).lookup('application:main').rootElement;
      this.appRoot = document.querySelector(rootSelector);
      this.handleRootMouseDown = this.handleRootMouseDown.bind(this);
      this.handleRepositioningEvent = this.handleRepositioningEvent.bind(this);
      this.repositionDropdown = this.repositionDropdown.bind(this);
    },

    didInitAttrs: function didInitAttrs() {
      this._super.apply(this, arguments);
      var registerActionsInParent = this.get('registerActionsInParent');
      if (registerActionsInParent) {
        registerActionsInParent(this.get('publicAPI'));
      }
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      if (this.get('publicAPI.isOpen')) {
        this.removeGlobalEvents();
      }
    },

    // CPs
    dropdownPosition: computed.deprecatingAlias('verticalPosition', { id: 'basic-dropdown-position', until: 0.8 }),
    tabIndex: computed('disabled', function () {
      return !this.get('disabled') ? this.get('tabindex') || '0' : null;
    }),

    publicAPI: computed(function () {
      return {
        isOpen: false,
        actions: {
          open: this.open.bind(this),
          close: this.close.bind(this),
          toggle: this.toggle.bind(this),
          reposition: this.handleRepositioningEvent.bind(this)
        }
      };
    }),

    opened: computed('publicAPI.isOpen', {
      get: function get() {
        return this.get('publicAPI.isOpen');
      },
      set: function set(_, newOpened) {
        var oldOpened = this.get('publicAPI.isOpen');
        if (!oldOpened && newOpened) {
          this.open();
        } else if (oldOpened && !newOpened) {
          this.close();
        }
        return this.get('publicAPI.isOpen');
      }
    }),

    // Actions
    actions: {
      toggle: function toggle(e) {
        this.toggle(e);
      },

      keydown: function keydown(e) {
        this.handleKeydown(e);
      },

      focusTrigger: function focusTrigger(e) {
        var onFocus = this.get('onFocus');
        if (onFocus) {
          onFocus(this.get('publicAPI'), e);
        }
      }
    },

    // Methods
    toggle: function toggle(e) {
      if (this.get('publicAPI.isOpen')) {
        this.close(e);
      } else {
        this.open(e);
      }
    },

    open: function open(e) {
      if (this.get('disabled') || this.get('publicAPI.isOpen')) {
        return;
      }
      if (e) {
        e.preventDefault();
      }
      this.set('publicAPI.isOpen', true);
      this.addGlobalEventsTimer = run.scheduleOnce('afterRender', this, this.addGlobalEvents);
      this.repositionDropdownTimer = run.scheduleOnce('afterRender', this, this.repositionDropdown);
      var onOpen = this.get('onOpen');
      if (onOpen) {
        onOpen(this.get('publicAPI'), e);
      }
    },

    close: function close(e, skipFocus) {
      if (!this.get('publicAPI.isOpen')) {
        return;
      }
      this.set('publicAPI.isOpen', false);
      this.set('_verticalPositionClass', null);
      this.set('_horizontalPositionClass', null);
      run.cancel(this.addGlobalEventsTimer);
      run.cancel(this.repositionDropdownTimer);
      this.addGlobalEventsTimer = this.repositionDropdownTimer = null;
      this.removeGlobalEvents();
      var onClose = this.get('onClose');
      if (onClose) {
        onClose(this.get('publicAPI'), e);
      }
      if (skipFocus) {
        return;
      }
      var trigger = this.element.querySelector('.ember-basic-dropdown-trigger');
      if (trigger.tabIndex > -1) {
        trigger.focus();
      }
    },

    handleKeydown: function handleKeydown(e) {
      if (this.get('disabled')) {
        return;
      }
      var onKeydown = this.get('onKeydown');
      if (onKeydown) {
        onKeydown(this.get('publicAPI'), e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (e.keyCode === 13) {
        // Enter
        this.toggle(e);
      } else if (e.keyCode === 27) {
        this.close(e);
      }
    },

    repositionDropdown: function repositionDropdown() {
      run.join(this, this._performReposition);
    },

    handleRootMouseDown: function handleRootMouseDown(e) {
      if (!this.element.contains(e.target) && !this.appRoot.querySelector('.ember-basic-dropdown-content').contains(e.target)) {
        this.close(e, true);
      }
    },

    handleRepositioningEvent: function handleRepositioningEvent() /* e */{
      run.throttle(this, 'repositionDropdown', 60, true);
    },

    addGlobalEvents: function addGlobalEvents() {
      var _this = this;

      this.appRoot.addEventListener('mousedown', this.handleRootMouseDown, true);
      window.addEventListener('scroll', this.handleRepositioningEvent);
      window.addEventListener('resize', this.handleRepositioningEvent);
      window.addEventListener('orientationchange', this.handleRepositioningEvent);
      if (MutObserver) {
        this.mutationObserver = new MutObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            _this.repositionDropdown();
          }
        });
        run.schedule('afterRender', this, function () {
          var dropdown = this.appRoot.querySelector('.ember-basic-dropdown-content');
          if (!dropdown) {
            return;
          }
          this.mutationObserver.observe(dropdown, { childList: true, subtree: true });
        });
      } else {
        run.schedule('afterRender', this, function () {
          var dropdown = this.appRoot.querySelector('.ember-basic-dropdown-content');
          dropdown.addEventListener('DOMNodeInserted', this.repositionDropdown, false);
          dropdown.addEventListener('DOMNodeRemoved', this.repositionDropdown, false);
        });
      }
    },

    removeGlobalEvents: function removeGlobalEvents() {
      this.appRoot.removeEventListener('mousedown', this.handleRootMouseDown, true);
      window.removeEventListener('scroll', this.handleRepositioningEvent);
      window.removeEventListener('resize', this.handleRepositioningEvent);
      window.removeEventListener('orientationchange', this.handleRepositioningEvent);
      if (MutObserver) {
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
          this.mutationObserver = null;
        }
      } else {
        var dropdown = this.appRoot.querySelector('.ember-basic-dropdown-content');
        dropdown.removeEventListener('DOMNodeInserted', this.repositionDropdown);
        dropdown.removeEventListener('DOMNodeRemoved', this.repositionDropdown);
      }
    },

    _performReposition: function _performReposition() {
      if (this.get('renderInPlace') || !this.get('publicAPI.isOpen')) {
        return;
      }
      var dropdown = this.appRoot.querySelector('.ember-basic-dropdown-content');
      if (!dropdown) {
        return;
      }
      var verticalPositionStrategy = this.get('verticalPosition');
      var trigger = this.element.querySelector('.ember-basic-dropdown-trigger');

      var _trigger$getBoundingClientRect = trigger.getBoundingClientRect();

      var left = _trigger$getBoundingClientRect.left;
      var topWithoutScroll = _trigger$getBoundingClientRect.top;
      var triggerWidth = _trigger$getBoundingClientRect.width;
      var height = _trigger$getBoundingClientRect.height;

      if (this.get('matchTriggerWidth')) {
        dropdown.style.width = triggerWidth + 'px';
      }

      var _dropdown$getBoundingClientRect = dropdown.getBoundingClientRect();

      var dropdownHeight = _dropdown$getBoundingClientRect.height;
      var dropdownWidth = _dropdown$getBoundingClientRect.width;

      var $window = _ember['default'].$(window);
      var viewportTop = $window.scrollTop();
      var top = topWithoutScroll + viewportTop;

      if (verticalPositionStrategy === 'above') {
        top = top - dropdown.getBoundingClientRect().height;
        this.set('_verticalPositionClass', 'ember-basic-dropdown--above');
      } else if (verticalPositionStrategy === 'below') {
        top = top + height;
        this.set('_verticalPositionClass', 'ember-basic-dropdown--below');
      } else {
        // auto
        var viewportBottom = viewportTop + window.innerHeight;
        var enoughRoomBelow = top + height + dropdownHeight < viewportBottom;
        var enoughRoomAbove = topWithoutScroll > dropdownHeight;

        var verticalPositionClass = this.get('_verticalPositionClass');
        if (verticalPositionClass === 'ember-basic-dropdown--below' && !enoughRoomBelow && enoughRoomAbove) {
          this.set('_verticalPositionClass', 'ember-basic-dropdown--above');
        } else if (verticalPositionClass === 'ember-basic-dropdown--above' && !enoughRoomAbove && enoughRoomBelow) {
          this.set('_verticalPositionClass', 'ember-basic-dropdown--below');
        } else if (!verticalPositionClass) {
          this.set('_verticalPositionClass', enoughRoomBelow ? 'ember-basic-dropdown--below' : 'ember-basic-dropdown--above');
        }
        verticalPositionClass = this.get('_verticalPositionClass'); // It might have changed
        top = top + (verticalPositionClass === 'ember-basic-dropdown--below' ? height : -dropdownHeight);
      }

      var horizontalPositionStrategy = this.get('horizontalPosition');

      if (['right', 'left'].indexOf(horizontalPositionStrategy) === -1) {
        // horizontal auto
        var viewportRight = $window.scrollLeft() + window.innerWidth;
        var roomForRight = viewportRight - left;
        var roomForLeft = left;

        horizontalPositionStrategy = roomForRight > roomForLeft ? 'left' : 'right';
      }
      if (horizontalPositionStrategy === 'right') {
        left = left + triggerWidth - dropdownWidth;
      }
      this.set('_horizontalPositionClass', 'ember-basic-dropdown--' + horizontalPositionStrategy);

      dropdown.style.top = top + 'px';
      dropdown.style.left = left + 'px';
    }
  });
});