"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('groom-clients-ember/app', ['exports', 'ember', 'groom-clients-ember/resolver', 'ember-load-initializers', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberResolver, _emberLoadInitializers, _groomClientsEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _groomClientsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _groomClientsEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _groomClientsEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _groomClientsEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('groom-clients-ember/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant) {
  exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend();
});
define('groom-clients-ember/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'groom-clients-ember/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _groomClientsEmberConfigEnvironment) {

  var name = _groomClientsEmberConfigEnvironment['default'].APP.name;
  var version = _groomClientsEmberConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('groom-clients-ember/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('groom-clients-ember/components/bootstrap-datepicker-inline', ['exports', 'ember', 'ember-cli-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _ember, _emberCliBootstrapDatepickerComponentsBootstrapDatepickerInline) {
  exports['default'] = _emberCliBootstrapDatepickerComponentsBootstrapDatepickerInline['default'];
});
define('groom-clients-ember/components/bootstrap-datepicker', ['exports', 'ember', 'ember-cli-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _ember, _emberCliBootstrapDatepickerComponentsBootstrapDatepicker) {
  exports['default'] = _emberCliBootstrapDatepickerComponentsBootstrapDatepicker['default'];
});
define('groom-clients-ember/components/date-picker', ['exports', 'ember', 'ember-cli-datepicker/components/date-picker'], function (exports, _ember, _emberCliDatepickerComponentsDatePicker) {
  exports['default'] = _emberCliDatepickerComponentsDatePicker['default'];
});
define('groom-clients-ember/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('groom-clients-ember/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('groom-clients-ember/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('groom-clients-ember/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('groom-clients-ember/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('groom-clients-ember/components/power-select-multiple/options', ['exports', 'ember-power-select/components/power-select-multiple/options'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleOptions['default'];
    }
  });
});
define('groom-clients-ember/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('groom-clients-ember/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('groom-clients-ember/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('groom-clients-ember/components/select-2', ['exports', 'ember-select-2/components/select-2'], function (exports, _emberSelect2ComponentsSelect2) {
  exports['default'] = _emberSelect2ComponentsSelect2['default'];
});
/*
	This is just a proxy file requiring the component from the /addon folder and
	making it available to the dummy application!
 */
define('groom-clients-ember/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  exports['default'] = _semanticUiEmberComponentsUiAccordion['default'];
});
define('groom-clients-ember/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  exports['default'] = _semanticUiEmberComponentsUiCheckbox['default'];
});
define('groom-clients-ember/components/ui-dropdown-item', ['exports', 'semantic-ui-ember/components/ui-dropdown-item'], function (exports, _semanticUiEmberComponentsUiDropdownItem) {
  exports['default'] = _semanticUiEmberComponentsUiDropdownItem['default'];
});
define('groom-clients-ember/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  exports['default'] = _semanticUiEmberComponentsUiDropdown['default'];
});
define('groom-clients-ember/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  exports['default'] = _semanticUiEmberComponentsUiEmbed['default'];
});
define('groom-clients-ember/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  exports['default'] = _semanticUiEmberComponentsUiModal['default'];
});
define('groom-clients-ember/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  exports['default'] = _semanticUiEmberComponentsUiNag['default'];
});
define('groom-clients-ember/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  exports['default'] = _semanticUiEmberComponentsUiPopup['default'];
});
define('groom-clients-ember/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  exports['default'] = _semanticUiEmberComponentsUiProgress['default'];
});
define('groom-clients-ember/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  exports['default'] = _semanticUiEmberComponentsUiRadio['default'];
});
define('groom-clients-ember/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  exports['default'] = _semanticUiEmberComponentsUiRating['default'];
});
define('groom-clients-ember/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  exports['default'] = _semanticUiEmberComponentsUiSearch['default'];
});
define('groom-clients-ember/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  exports['default'] = _semanticUiEmberComponentsUiShape['default'];
});
define('groom-clients-ember/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  exports['default'] = _semanticUiEmberComponentsUiSidebar['default'];
});
define('groom-clients-ember/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  exports['default'] = _semanticUiEmberComponentsUiSticky['default'];
});
define('groom-clients-ember/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('groom-clients-ember/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('groom-clients-ember/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('groom-clients-ember/helpers/boolean-or', ['exports', 'ember'], function (exports, _ember) {
  exports.booleanOr = booleanOr;

  function booleanOr(params /*, hash*/) {
    return params[0] || params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(booleanOr);
});
define('groom-clients-ember/helpers/ember-power-select-build-selection', ['exports', 'ember-power-select/helpers/ember-power-select-build-selection'], function (exports, _emberPowerSelectHelpersEmberPowerSelectBuildSelection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectBuildSelection', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection.emberPowerSelectBuildSelection;
    }
  });
});
define('groom-clients-ember/helpers/ember-power-select-option-classes', ['exports', 'ember-power-select/helpers/ember-power-select-option-classes'], function (exports, _emberPowerSelectHelpersEmberPowerSelectOptionClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectOptionClasses', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses.emberPowerSelectOptionClasses;
    }
  });
});
define('groom-clients-ember/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('groom-clients-ember/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('groom-clients-ember/helpers/moment-format', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('groom-clients-ember/helpers/moment-from-now', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('groom-clients-ember/helpers/moment-to-now', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('groom-clients-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('groom-clients-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('groom-clients-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'groom-clients-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _groomClientsEmberConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_groomClientsEmberConfigEnvironment['default'].APP.name, _groomClientsEmberConfigEnvironment['default'].APP.version)
  };
});
define('groom-clients-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('groom-clients-ember/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('groom-clients-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('groom-clients-ember/initializers/ember-simple-auth', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = _groomClientsEmberConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _groomClientsEmberConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('groom-clients-ember/initializers/export-application-global', ['exports', 'ember', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_groomClientsEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _groomClientsEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_groomClientsEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('groom-clients-ember/initializers/flash-messages', ['exports', 'ember', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberConfigEnvironment) {
  exports.initialize = initialize;
  var merge = _ember['default'].merge;
  var deprecate = _ember['default'].deprecate;

  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _groomClientsEmberConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('groom-clients-ember/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('groom-clients-ember/initializers/message-service', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {

    // make flash messages service available from all routes and controllers
    application.inject('controller', 'messageService', 'service:message-service');
    application.inject('route', 'messageService', 'service:message-service');
  }

  exports['default'] = {
    name: 'message-service',
    initialize: initialize
  };
});
define('groom-clients-ember/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('groom-clients-ember/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("groom-clients-ember/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('groom-clients-ember/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('groom-clients-ember/mixins/manage-items-base', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    messageService: _ember['default'].inject.service(),
    model: null,
    modelName: _ember['default'].computed('model', function () {
      return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
    }),
    attributes: [],
    disableAddButton: _ember['default'].computed('model.@each.isNew', function () {
      return this.get('model').isAny('isNew');
    }),

    actions: {
      addItem: function addItem() {
        this.sendAction('addItem');
      },
      saveItem: function saveItem(item) {
        var _this = this;

        item.save().then(function () {
          item.set('isActive', false);
        })['catch'](function (e) {
          _this.get('messageService').error('The item cannot be saved');
          console.log('ERROR:', e);
        });
      },
      deleteItem: function deleteItem(item) {
        item.destroyRecord();
      },
      editItem: function editItem(item) {
        item.set('isActive', true);
      }
    }
  });
});
define('groom-clients-ember/pods/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'api',
    shouldReloadAll: function shouldReloadAll() {
      return true;
    }
  });
});
define('groom-clients-ember/pods/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    isOnline: true,
    messageService: _ember['default'].inject.service(),
    onInit: _ember['default'].on('init', function () {
      this.updateNetworkStatus();
    }),
    updateNetworkStatus: function updateNetworkStatus() {
      var _this = this;

      if (!navigator.onLine) {
        this.set('isOnline', false);
        return; // return early, no point in pinging the server if we have no LAN
      }
      _ember['default'].$.get('api/status').done(function () {
        // todo: consider checking the result
        _this.set('isOnline', true);
      }).fail(function () {
        _this.set('isOnline', false);
        _this.get('messageService').error('The application went offline. Please check internet connection.');
      }).always(function () {
        _ember['default'].run.later(_this, 'updateNetworkStatus', 60000);
      });
    },

    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    }

  });
});
define('groom-clients-ember/pods/application/route', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
        actions: {
            error: function error(_error) {
                if (_error.status === 0) {
                    alert('Sorry, but we\'re having trouble connecting to the server. This problem is usually the result of a broken Internet connection. You can try refreshing this page.');
                } else if (_error.status === 403) {
                    //go to some default route
                } else if (_error.status === 401) {
                        //handle 401
                    } else if (_error.status === 404) {
                            this.transitionTo('404');
                        } else {
                            //            alert(error);
                        }
            }
        }
    });
});
define('groom-clients-ember/pods/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({});
});
define("groom-clients-ember/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 6
              },
              "end": {
                "line": 4,
                "column": 45
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" Home ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 56
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ADD CLIENT ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 6,
                "column": 54
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" Protected ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 6
              },
              "end": {
                "line": 7,
                "column": 49
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" Clients ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 8,
                "column": 51
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" Haircuts ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 10
                },
                "end": {
                  "line": 13,
                  "column": 55
                }
              },
              "moduleName": "groom-clients-ember/pods/application/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" Products ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 10
                },
                "end": {
                  "line": 14,
                  "column": 49
                }
              },
              "moduleName": "groom-clients-ember/pods/application/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" Users ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 10
                },
                "end": {
                  "line": 15,
                  "column": 50
                }
              },
              "moduleName": "groom-clients-ember/pods/application/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" Staff ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 6
              },
              "end": {
                "line": 17,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Admin\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "dropdown icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "menu");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            morphs[2] = dom.createMorphAt(element1, 5, 5);
            return morphs;
          },
          statements: [["block", "link-to", ["product"], ["class", "item"], 0, null, ["loc", [null, [13, 10], [13, 67]]]], ["block", "link-to", ["user"], ["class", "item"], 1, null, ["loc", [null, [14, 10], [14, 61]]]], ["block", "link-to", ["staff"], ["class", "item"], 2, null, ["loc", [null, [15, 10], [15, 62]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 18,
              "column": 2
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          morphs[5] = dom.createMorphAt(fragment, 11, 11, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["class", "item"], 0, null, ["loc", [null, [4, 6], [4, 57]]]], ["block", "link-to", ["client.new"], ["class", "item"], 1, null, ["loc", [null, [5, 6], [5, 68]]]], ["block", "link-to", ["protected"], ["class", "item"], 2, null, ["loc", [null, [6, 6], [6, 66]]]], ["block", "link-to", ["client"], ["class", "item"], 3, null, ["loc", [null, [7, 6], [7, 61]]]], ["block", "link-to", ["haircut"], ["class", "item"], 4, null, ["loc", [null, [8, 6], [8, 63]]]], ["block", "ui-dropdown", [], ["class", "item"], 5, null, ["loc", [null, [9, 6], [17, 22]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 4
            },
            "end": {
              "line": 23,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Online\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Offline\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui item");
          var el2 = dom.createTextNode("\n        Logout\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["logout"], [], ["loc", [null, [28, 27], [28, 46]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 8
              },
              "end": {
                "line": 33,
                "column": 35
              }
            },
            "moduleName": "groom-clients-ember/pods/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" Login ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 35,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], [], 0, null, ["loc", [null, [33, 8], [33, 47]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 8
            },
            "end": {
              "line": 43,
              "column": 8
            }
          },
          "moduleName": "groom-clients-ember/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "flash-messages", [], ["flash", ["subexpr", "@mut", [["get", "flash", ["loc", [null, [42, 33], [42, 38]]]]], [], []]], ["loc", [null, [42, 10], [42, 40]]]]],
        locals: ["flash"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "right menu");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui centered grid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "center aligned column flash-message");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "fourteen wide column");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(fragment, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [1, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [3, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [3, 8], [3, 31]]]]], [], 0, null, ["loc", [null, [3, 2], [18, 9]]]], ["block", "if", [["get", "isOnline", ["loc", [null, [21, 10], [21, 18]]]]], [], 1, 2, ["loc", [null, [21, 4], [25, 11]]]], ["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [27, 10], [27, 33]]]]], [], 3, 4, ["loc", [null, [27, 4], [35, 11]]]], ["block", "each", [["get", "flashMessages.queue", ["loc", [null, [41, 16], [41, 35]]]]], [], 5, null, ["loc", [null, [41, 8], [43, 17]]]], ["content", "outlet", ["loc", [null, [48, 8], [48, 18]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define('groom-clients-ember/pods/client/client-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    model: null,
    onInit: _ember['default'].on('init', function () {
      this.get('model');
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});
define("groom-clients-ember/pods/client/client-list-row-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/client-list-row-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui button");
        var el3 = dom.createTextNode("Open");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [9, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]), 0, 0);
        morphs[4] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["content", "model.fullName", ["loc", [null, [1, 6], [1, 24]]]], ["content", "model.phone1", ["loc", [null, [2, 6], [2, 22]]]], ["content", "model.progress", ["loc", [null, [3, 6], [3, 24]]]], ["inline", "moment-format", [["get", "model.lastVisit", ["loc", [null, [4, 22], [4, 37]]]], "DD MMMM YYYY"], [], ["loc", [null, [4, 6], [4, 54]]]], ["element", "action", ["openRecord", ["get", "model", ["loc", [null, [5, 54], [5, 59]]]]], [], ["loc", [null, [5, 32], [5, 61]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/client/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    nameFilter: '',
    phoneFilter: '',
    filteredModel: _ember['default'].computed('model', 'model.[]', 'nameFilter', 'phoneFilter', 'displayAll', function () {
      var _this = this;

      var model = this.get('model');
      var nameFilter = new RegExp(this.get('nameFilter'), 'gi');
      var phoneFilter = new RegExp(this.get('phoneFilter'), 'gi');

      return model.filter(function (client) {
        if (_this.get('nameFilter') && client.get('fullName').match(nameFilter)) {
          return true;
        } else if (_this.get('phoneFilter') && client.get('phone1').match(phoneFilter)) {
          return true;
        } else if (_this.get('displayAll')) {
          return true;
        } else {
          return false;
        }
      });
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.send('transitionToItemRoute', model);
      }
    }

  });
});
define('groom-clients-ember/pods/client/item/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      confirmSuccess: function confirmSuccess() {
        this.send('transitionToClients');
      },
      resetRecord: function resetRecord() {
        this.get('model').destroyRecord();
        this.send('refreshRoute');
      },
      submit: function submit() {
        alert('submit controller');
      }

    }

  });
});
define('groom-clients-ember/pods/client/item/manage-client-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),

    validation: {
      name: {
        identifier: 'last-name',
        rules: [{ type: 'empty' }]
      },
      email: {
        identifier: 'email',
        rules: [{ type: 'email' }]
      }
    },

    actions: {

      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#clientForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
          })['catch'](function (e) {
            _this.get('messageService').error('The changes cannot be saved');
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});
define("groom-clients-ember/pods/client/item/manage-client-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 6
            },
            "end": {
              "line": 36,
              "column": 6
            }
          },
          "moduleName": "groom-clients-ember/pods/client/item/manage-client-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("First Name");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "required field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Last Name");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Email");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Mobile phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Home phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Card No");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui orange button");
          var el2 = dom.createTextNode("Save changes");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [9]), 3, 3);
          morphs[5] = dom.createMorphAt(dom.childAt(fragment, [11]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "name", "first-name", "placeholder", "First Name", "value", ["subexpr", "@mut", [["get", "model.firstName", ["loc", [null, [13, 81], [13, 96]]]]], [], []]], ["loc", [null, [13, 10], [13, 98]]]], ["inline", "input", [], ["type", "text", "name", "last-name", "placeholder", "Last Name", "value", ["subexpr", "@mut", [["get", "model.lastName", ["loc", [null, [17, 79], [17, 93]]]]], [], []]], ["loc", [null, [17, 10], [17, 95]]]], ["inline", "input", [], ["type", "text", "name", "email", "placeholder", "Email", "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [21, 69], [21, 80]]]]], [], []]], ["loc", [null, [21, 10], [21, 82]]]], ["inline", "input", [], ["type", "text", "name", "phone1", "placeholder", "Mobile phone", "value", ["subexpr", "@mut", [["get", "model.phone1", ["loc", [null, [25, 77], [25, 89]]]]], [], []]], ["loc", [null, [25, 10], [25, 91]]]], ["inline", "input", [], ["type", "text", "name", "phone2", "placeholder", "Home phone", "value", ["subexpr", "@mut", [["get", "model.phone2", ["loc", [null, [29, 75], [29, 87]]]]], [], []]], ["loc", [null, [29, 10], [29, 89]]]], ["inline", "input", [], ["type", "text", "name", "card-number", "placeholder", "No", "value", ["subexpr", "@mut", [["get", "model.token", ["loc", [null, [33, 72], [33, 83]]]]], [], []]], ["loc", [null, [33, 10], [33, 85]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 6
            },
            "end": {
              "line": 57,
              "column": 6
            }
          },
          "moduleName": "groom-clients-ember/pods/client/item/manage-client-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode(" $ ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "moment-format", [["get", "cut.date", ["loc", [null, [54, 28], [54, 36]]]], "DD MMMM YYYY"], [], ["loc", [null, [54, 12], [54, 53]]]], ["content", "cut.product.price", ["loc", [null, [55, 15], [55, 36]]]]],
        locals: ["cut"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 61,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/item/manage-client-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "equal height row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "eight wide column");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "ui middle aligned image");
        dom.setAttribute(el4, "src", "assets/images/profile_placeholder.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "eight wide column");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui horizontal divider");
        var el2 = dom.createTextNode(" Haircuts");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "ui selectable striped celled table");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "six wide");
        var el6 = dom.createTextNode("Date");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.setAttribute(el5, "class", "six wide");
        var el6 = dom.createTextNode("Paid");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "file-upload", [], ["url", "#"], ["loc", [null, [6, 8], [6, 31]]]], ["block", "ui-form", [], ["validation", ["subexpr", "@mut", [["get", "validation", ["loc", [null, [10, 28], [10, 38]]]]], [], []], "submit", ["subexpr", "action", ["submit"], [], ["loc", [null, [10, 46], [10, 63]]]], "id", "clientForm"], 0, null, ["loc", [null, [10, 6], [36, 18]]]], ["block", "each", [["get", "clientHaircuts", ["loc", [null, [52, 14], [52, 28]]]]], [], 1, null, ["loc", [null, [52, 6], [57, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('groom-clients-ember/pods/client/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.store.findRecord('client', params.client_id);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      this.store.query('haircut', { client: model.get('id') }).then(function (result) {
        controller.set('clientHaircuts', result);
      });
    },
    actions: {
      transitionToClients: function transitionToClients() {
        this.transitionTo('client');
      }
    }

  });
});
define("groom-clients-ember/pods/client/item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "client/item/manage-client-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "clientHaircuts", ["subexpr", "@mut", [["get", "clientHaircuts", ["loc", [null, [3, 17], [3, 31]]]]], [], []], "confirmSuccess", ["subexpr", "action", ["confirmSuccess"], [], ["loc", [null, [4, 17], [4, 42]]]]], ["loc", [null, [1, 0], [5, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/client/model', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    fullName: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }),

    email: _emberData['default'].attr('string'),
    phone1: _emberData['default'].attr('string'),
    phone2: _emberData['default'].attr('string'),

    progress: _emberData['default'].attr('number'),
    visits: _emberData['default'].attr('number'),
    freeVisits: _emberData['default'].attr('number'),
    points: _emberData['default'].attr('number'),

    createdOn: _emberData['default'].attr('date'),
    lastVisit: _emberData['default'].attr('date'),

    token: _emberData['default'].attr('string')
  });
});
define('groom-clients-ember/pods/client/new/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      confirmSuccess: function confirmSuccess() {
        this.send('transitionToClients');
      },
      resetRecord: function resetRecord() {
        this.get('model').destroyRecord();
        this.send('refreshRoute');
      },
      submit: function submit() {
        alert('submit controller');
      }

    }

  });
});
define('groom-clients-ember/pods/client/new/new-client-form-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),

    validation: {
      name: {
        identifier: 'last-name',
        rules: [{ type: 'empty' }]
      },
      email: {
        identifier: 'email',
        rules: [{ type: 'email' }]
      }
    },

    actions: {

      resetRecord: function resetRecord() {
        this.sendAction('resetRecord');
      },
      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#newClientForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
          })['catch'](function (e) {
            _this.get('messageService').error('The client record hasn\'t been created');
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});
define("groom-clients-ember/pods/client/new/new-client-form-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "groom-clients-ember/pods/client/new/new-client-form-component/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("First Name");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "required field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Last Name");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Email");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Mobile phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Home phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Card No");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui orange button");
          var el2 = dom.createTextNode("Submit");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("Reset");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [15]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [9]), 3, 3);
          morphs[5] = dom.createMorphAt(dom.childAt(fragment, [11]), 3, 3);
          morphs[6] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "name", "first-name", "placeholder", "First Name", "value", ["subexpr", "@mut", [["get", "model.firstName", ["loc", [null, [4, 75], [4, 90]]]]], [], []]], ["loc", [null, [4, 4], [4, 92]]]], ["inline", "input", [], ["type", "text", "name", "last-name", "placeholder", "Last Name", "value", ["subexpr", "@mut", [["get", "model.lastName", ["loc", [null, [8, 73], [8, 87]]]]], [], []]], ["loc", [null, [8, 4], [8, 89]]]], ["inline", "input", [], ["type", "text", "name", "email", "placeholder", "Email", "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [12, 63], [12, 74]]]]], [], []]], ["loc", [null, [12, 4], [12, 76]]]], ["inline", "input", [], ["type", "text", "name", "phone1", "placeholder", "Mobile phone", "value", ["subexpr", "@mut", [["get", "model.phone1", ["loc", [null, [16, 71], [16, 83]]]]], [], []]], ["loc", [null, [16, 4], [16, 85]]]], ["inline", "input", [], ["type", "text", "name", "phone2", "placeholder", "Home phone", "value", ["subexpr", "@mut", [["get", "model.phone2", ["loc", [null, [20, 69], [20, 81]]]]], [], []]], ["loc", [null, [20, 4], [20, 83]]]], ["inline", "input", [], ["type", "text", "name", "card-number", "placeholder", "No", "value", ["subexpr", "@mut", [["get", "model.token", ["loc", [null, [24, 66], [24, 77]]]]], [], []]], ["loc", [null, [24, 4], [24, 79]]]], ["element", "action", ["resetRecord"], [], ["loc", [null, [27, 28], [27, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/new/new-client-form-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ui-form", [], ["validation", ["subexpr", "@mut", [["get", "validation", ["loc", [null, [1, 22], [1, 32]]]]], [], []], "id", "newClientForm", "submit", ["subexpr", "action", ["submit"], [], ["loc", [null, [1, 59], [1, 76]]]]], 0, null, ["loc", [null, [1, 0], [28, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/client/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('client');
    },
    actions: {
      transitionToClients: function transitionToClients() {
        this.transitionTo('client');
      },
      refreshRoute: function refreshRoute() {
        this.refresh();
      },
      willTransition: function willTransition() {
        var model = this.controller.get('model');
        model.rollbackAttributes();
        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
    }
  });
});
define("groom-clients-ember/pods/client/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "client/new/new-client-form-component", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "confirmSuccess", ["subexpr", "action", ["confirmSuccess"], [], ["loc", [null, [3, 17], [3, 42]]]], "resetRecord", ["subexpr", "action", ["resetRecord"], [], ["loc", [null, [4, 14], [4, 36]]]]], ["loc", [null, [1, 0], [5, 4]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/client/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('client');
    },

    actions: {
      transitionToItemRoute: function transitionToItemRoute(model) {
        this.transitionTo('client.item', model.get('id'));
      }
    }
  });
});
define("groom-clients-ember/pods/client/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 33,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/client/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "client/client-list-row-component", [], ["model", ["subexpr", "@mut", [["get", "client", ["loc", [null, [32, 47], [32, 53]]]]], [], []], "openRecord", ["subexpr", "action", ["openRecord"], [], ["loc", [null, [32, 65], [32, 86]]]]], ["loc", [null, [32, 6], [32, 88]]]]],
        locals: ["client"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/client/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Clients");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui selectable striped celled table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "six wide");
        var el5 = dom.createTextNode("Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "six wide");
        var el5 = dom.createTextNode("Phone");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "one wide");
        var el5 = dom.createTextNode("Cuts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "three wide");
        var el5 = dom.createTextNode("Last Visit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "one wide");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        dom.setAttribute(el3, "class", "warning");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui transparent fluid icon input");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui transparent fluid icon input");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(">\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4, 3]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "ui-checkbox", [], ["label", "Display all client records", "checked", ["subexpr", "@mut", [["get", "displayAll", ["loc", [null, [2, 57], [2, 67]]]]], [], []]], ["loc", [null, [2, 0], [2, 69]]]], ["inline", "input", [], ["type", "text", "placeholder", "Search by name...", "value", ["subexpr", "@mut", [["get", "nameFilter", ["loc", [null, [17, 68], [17, 78]]]]], [], []]], ["loc", [null, [17, 10], [17, 80]]]], ["inline", "input", [], ["type", "text", "placeholder", "Search by phone...", "value", ["subexpr", "@mut", [["get", "phoneFilter", ["loc", [null, [23, 69], [23, 80]]]]], [], []]], ["loc", [null, [23, 10], [23, 82]]]], ["block", "each", [["get", "filteredModel", ["loc", [null, [31, 12], [31, 25]]]]], [], 0, null, ["loc", [null, [31, 4], [33, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/components/file-upload/component', ['exports', 'ember', 'ember-uploader'], function (exports, _ember, _emberUploader) {
  exports['default'] = _emberUploader['default'].FileField.extend({
    url: '',
    filesDidChange: function filesDidChange(files) {
      var uploadUrl = this.get('url');

      var uploader = _emberUploader['default'].Uploader.create({
        url: uploadUrl
      });

      if (!_ember['default'].isEmpty(files)) {
        uploader.upload(files[0]);
      }
    }
  });
});
define('groom-clients-ember/pods/components/flash-messages/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("groom-clients-ember/pods/components/flash-messages/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/components/flash-messages/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("strong");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ui ", ["get", "flash.type", ["loc", [null, [1, 17], [1, 27]]]], " message"]]], ["content", "flash.message", ["loc", [null, [2, 10], [2, 27]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/components/manage-items/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    model: null,
    modelName: _ember['default'].computed('model', function () {
      return this.get('model.firstObject.constructor.modelName').capitalize().pluralize();
    }),
    attributes: _ember['default'].computed('model', function () {
      return Object.keys(this.get('model.firstObject').toJSON());
    }),
    disableAddButton: _ember['default'].computed('model.@each.isNew', function () {
      return this.get('model').isAny('isNew');
    }),

    actions: {
      addItem: function addItem() {
        this.sendAction('addItem');
      }
    }
  });
});
define("groom-clients-ember/pods/components/manage-items/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/components/manage-items/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "header", ["loc", [null, [6, 8], [6, 18]]]]],
        locals: ["header"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/components/manage-items/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "manage-items-row", [], ["model", ["subexpr", "@mut", [["get", "item", ["loc", [null, [12, 31], [12, 35]]]]], [], []], "attributes", ["subexpr", "@mut", [["get", "attributes", ["loc", [null, [12, 47], [12, 57]]]]], [], []]], ["loc", [null, [12, 6], [12, 59]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/components/manage-items/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Manage ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui celled table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4, "colspan", "5");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "ui green button");
        var el6 = dom.createTextNode("ADD");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tfoot");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [3, 1, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createAttrMorph(element2, 'disabled');
        morphs[4] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["content", "modelName", ["loc", [null, [1, 11], [1, 24]]]], ["block", "each", [["get", "attributes", ["loc", [null, [5, 12], [5, 22]]]]], [], 0, null, ["loc", [null, [5, 4], [7, 13]]]], ["block", "each", [["get", "model", ["loc", [null, [11, 12], [11, 17]]]]], [], 1, null, ["loc", [null, [11, 4], [13, 13]]]], ["attribute", "disabled", ["get", "disableAddButton", ["loc", [null, [15, 65], [15, 81]]]]], ["element", "action", ["addItem"], [], ["loc", [null, [15, 84], [15, 104]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('groom-clients-ember/pods/components/manage-items-row/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    isActive: false,

    actions: {
      saveItem: function saveItem(item) {
        var _this = this;

        item.save().then(function () {
          _this.set('isActive', false);
        })['catch'](function (e) {
          console.log('ERROR:', e);
        });
      },
      deleteItem: function deleteItem(item) {
        item.destroyRecord();
      },
      editItem: function editItem() {
        this.set('isActive', true);
      }
    }
  });
});
define("groom-clients-ember/pods/components/manage-items-row/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "groom-clients-ember/pods/components/manage-items-row/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ui fluid input");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]), 0, 0);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [3, 60], [3, 65]]]], ["get", "fieldValue", ["loc", [null, [3, 66], [3, 76]]]]], [], ["loc", [null, [3, 55], [3, 77]]]]], [], ["loc", [null, [3, 50], [3, 78]]]]], ["loc", [null, [3, 36], [3, 80]]]]],
          locals: ["fieldValue"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "groom-clients-ember/pods/components/manage-items-row/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui green tiny button");
          var el3 = dom.createTextNode("SAVE");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [2, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createElementMorph(element3);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "each", [["get", "attributes", ["loc", [null, [2, 10], [2, 20]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]], ["element", "action", ["saveItem", ["get", "model", ["loc", [null, [6, 63], [6, 68]]]]], [], ["loc", [null, [6, 43], [6, 70]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "groom-clients-ember/pods/components/manage-items-row/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "get", [["get", "model", ["loc", [null, [10, 14], [10, 19]]]], ["get", "key", ["loc", [null, [10, 20], [10, 23]]]]], [], ["loc", [null, [10, 8], [10, 25]]]]],
          locals: ["key"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "groom-clients-ember/pods/components/manage-items-row/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui grey tiny button");
          var el3 = dom.createTextNode("EDIT");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui red tiny button");
          var el3 = dom.createTextNode("DELETE");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createElementMorph(element2);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "each", [["get", "attributes", ["loc", [null, [9, 10], [9, 20]]]]], [], 0, null, ["loc", [null, [9, 2], [11, 11]]]], ["element", "action", ["editItem", ["get", "model", ["loc", [null, [13, 62], [13, 67]]]]], [], ["loc", [null, [13, 42], [13, 69]]]], ["element", "action", ["deleteItem", ["get", "model", ["loc", [null, [14, 63], [14, 68]]]]], [], ["loc", [null, [14, 41], [14, 70]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/components/manage-items-row/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "boolean-or", [["get", "model.isNew", ["loc", [null, [1, 18], [1, 29]]]], ["get", "isActive", ["loc", [null, [1, 30], [1, 38]]]]], [], ["loc", [null, [1, 6], [1, 39]]]]], [], 0, 1, ["loc", [null, [1, 0], [16, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
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
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//
//   onInit: Ember.on('didInsertElement', function() {
//     Ember.$('.ui.form')
//     .form(this.get('validation'),
//     {
//       onApprove: function() {
//       alert('all good');
//     }
//   });
//   })
// });
define('groom-clients-ember/pods/haircut/controller', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Controller.extend({
    barberFilter: '',
    paymentFilter: '',
    locationFilter: '',
    startDateFilter: new Date(),
    endDateFilterInitial: new Date(),
    endDateFilter: _ember['default'].computed('endDateFilterInitial', function () {
      return new Date(this.get('endDateFilterInitial')).setHours(23, 59, 59, 999);
    }),

    userCanEdit: _ember['default'].computed(function () {
      //FiXmE: connect to permission service. ..
      // access to the item page as well
      return true;
    }),

    onInit: _ember['default'].on('init', function () {
      this.set('startDateFilter', new Date().setHours(0, 0, 0, 0));
      this.set('endDateFilterInitial', new Date().setHours(23, 59, 59, 999));
    }),

    filteredModel: _ember['default'].computed('model', 'model.[]', 'startDateFilter', 'endDateFilter', 'barberFilter', 'paymentFilter', 'locationFilter', function () {
      var _this = this;

      var model = this.get('model');
      // let nameFilter = new RegExp(this.get('nameFilter'), 'gi');
      // let phoneFilter = new RegExp(this.get('phoneFilter'), 'gi');

      return model.filter(function (cut) {
        var startDate = (0, _moment['default'])(_this.get('startDateFilter')).toDate();
        var endDate = (0, _moment['default'])(_this.get('endDateFilter')).toDate();
        var date = (0, _moment['default'])(cut.get('date')).toDate();
        if (date <= startDate || date >= endDate) {
          return false;
        }
        if (_this.get('barberFilter') && cut.get('staff.name').indexOf(_this.get('barberFilter')) === -1) {
          return false;
        }
        if (_this.get('paymentFilter') && cut.get('paymentType').indexOf(_this.get('paymentFilter')) === -1) {
          return false;
        }
        if (_this.get('locationFilter') && cut.get('salon.location').indexOf(_this.get('locationFilter')) === -1) {
          return false;
        }
        return true;
      });
    }),
    actions: {
      openRecord: function openRecord(model) {
        this.send('transitionToItemRoute', model);
      }
    }

  });
});
define('groom-clients-ember/pods/haircut/haircut-list-row-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    model: null,
    actions: {
      openRecord: function openRecord(model) {
        this.sendAction('openRecord', model);
      }
    }
  });
});
define("groom-clients-ember/pods/haircut/haircut-list-row-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "groom-clients-ember/pods/haircut/haircut-list-row-component/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("Open");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["openRecord", ["get", "model", ["loc", [null, [10, 52], [10, 57]]]]], [], ["loc", [null, [10, 30], [10, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/haircut/haircut-list-row-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [8]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [10]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [12]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [14]), 1, 1);
        return morphs;
      },
      statements: [["inline", "moment-format", [["get", "model.date", ["loc", [null, [1, 20], [1, 30]]]], "DD MMMM YYYY HH:MM"], [], ["loc", [null, [1, 4], [1, 53]]]], ["content", "model.client.fullName", ["loc", [null, [2, 4], [2, 29]]]], ["content", "model.staff.name", ["loc", [null, [3, 4], [3, 24]]]], ["content", "model.product.name", ["loc", [null, [4, 4], [4, 26]]]], ["content", "model.product.price", ["loc", [null, [5, 4], [5, 27]]]], ["content", "model.paymentType", ["loc", [null, [6, 4], [6, 25]]]], ["content", "model.salon.location", ["loc", [null, [7, 4], [7, 28]]]], ["block", "if", [["get", "userCanEdit", ["loc", [null, [9, 8], [9, 19]]]]], [], 0, null, ["loc", [null, [9, 2], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/haircut/item/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      confirmSuccess: function confirmSuccess() {
        this.send('transitionToListRoute');
      },
      resetRecord: function resetRecord() {
        this.get('model').destroyRecord();
        this.send('refreshRoute');
      },
      submit: function submit() {
        alert('submit controller');
      }
    }

  });
});
define('groom-clients-ember/pods/haircut/item/manage-haircut-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    messageService: _ember['default'].inject.service(),
    paymentTypes: ['cash', 'efpos'],
    paymentType: _ember['default'].computed(function () {
      return this.get('paymentTypes')[1];
    }),
    abc: _ember['default'].computed(function () {
      return this.get('barbers.firstObject');
    }),
    validation: {},

    actions: {

      submit: function submit() {
        var _this = this;

        if (_ember['default'].$("#haircutForm form").form('is valid')) {
          this.get('model').save().then(function () {
            _this.sendAction('confirmSuccess');
          })['catch'](function (e) {
            _this.get('messageService').error('The changes hasn\'t been saved');
            console.log('ERROR: ', e);
          });
        }
      }
    }
  });
});
define("groom-clients-ember/pods/haircut/item/manage-haircut-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 10
              },
              "end": {
                "line": 20,
                "column": 10
              }
            },
            "moduleName": "groom-clients-ember/pods/haircut/item/manage-haircut-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("           ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "staff.name", ["loc", [null, [19, 11], [19, 25]]]]],
          locals: ["staff"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 61,
                "column": 10
              },
              "end": {
                "line": 68,
                "column": 10
              }
            },
            "moduleName": "groom-clients-ember/pods/haircut/item/manage-haircut-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("           ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "paymentTypes", ["loc", [null, [67, 11], [67, 27]]]]],
          locals: ["paymentTypes"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 6
            },
            "end": {
              "line": 71,
              "column": 6
            }
          },
          "moduleName": "groom-clients-ember/pods/haircut/item/manage-haircut-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Barber");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Haircut type");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inlne field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Price");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Location");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Date");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Client");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "inline field");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Payment");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui orange button");
          var el2 = dom.createTextNode("Save changes");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [9]), 3, 3);
          morphs[5] = dom.createMorphAt(dom.childAt(fragment, [11]), 3, 3);
          morphs[6] = dom.createMorphAt(dom.childAt(fragment, [13]), 3, 3);
          return morphs;
        },
        statements: [["block", "power-select", [], ["options", ["subexpr", "@mut", [["get", "barbers", ["loc", [null, [14, 20], [14, 27]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "model.staff", ["loc", [null, [15, 21], [15, 32]]]]], [], []], "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.staff", ["loc", [null, [16, 34], [16, 45]]]]], [], ["loc", [null, [16, 29], [16, 46]]]]], [], ["loc", [null, [16, 21], [16, 47]]]]], 0, null, ["loc", [null, [13, 10], [20, 27]]]], ["inline", "select-2", [], ["content", ["subexpr", "@mut", [["get", "products", ["loc", [null, [26, 22], [26, 30]]]]], [], []], "optionLabelPath", "name", "optionValuePath", "id", "value", ["subexpr", "@mut", [["get", "model.product.id", ["loc", [null, [29, 20], [29, 36]]]]], [], []], "placeholder", "select product"], ["loc", [null, [25, 10], [31, 12]]]], ["inline", "input", [], ["type", "text", "name", "price", "value", ["subexpr", "@mut", [["get", "model.product.price", ["loc", [null, [35, 49], [35, 68]]]]], [], []]], ["loc", [null, [35, 10], [35, 70]]]], ["inline", "select-2", [], ["content", ["subexpr", "@mut", [["get", "salons", ["loc", [null, [40, 22], [40, 28]]]]], [], []], "optionLabelPath", "location", "value", ["subexpr", "@mut", [["get", "model.salon", ["loc", [null, [42, 20], [42, 31]]]]], [], []], "placeholder", "select location"], ["loc", [null, [39, 10], [44, 12]]]], ["inline", "date-picker", [], ["date", ["subexpr", "@mut", [["get", "model.date", ["loc", [null, [48, 29], [48, 39]]]]], [], []], "valueFormat", "date", "format", "DD MMMM YYYY"], ["loc", [null, [48, 10], [48, 82]]]], ["inline", "select-2", [], ["content", ["subexpr", "@mut", [["get", "clients", ["loc", [null, [53, 22], [53, 29]]]]], [], []], "optionLabelPath", "fullName", "value", ["subexpr", "@mut", [["get", "model.client", ["loc", [null, [55, 20], [55, 32]]]]], [], []], "placeholder", "select client"], ["loc", [null, [52, 10], [57, 12]]]], ["block", "power-select", [], ["options", ["subexpr", "@mut", [["get", "paymentTypes", ["loc", [null, [62, 20], [62, 32]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "paymentType", ["loc", [null, [63, 21], [63, 32]]]]], [], []], "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.paymentType", ["loc", [null, [64, 34], [64, 51]]]]], [], ["loc", [null, [64, 29], [64, 52]]]]], [], ["loc", [null, [64, 21], [64, 53]]]]], 1, null, ["loc", [null, [61, 10], [68, 27]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 75,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/haircut/item/manage-haircut-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "equal height row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "eight wide column");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "ui middle aligned image");
        dom.setAttribute(el4, "src", "assets/images/profile_placeholder.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "eight wide column");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "file-upload", [], ["url", "#"], ["loc", [null, [6, 8], [6, 31]]]], ["block", "ui-form", [], ["validation", ["subexpr", "@mut", [["get", "validation", ["loc", [null, [10, 28], [10, 38]]]]], [], []], "submit", ["subexpr", "action", ["submit"], [], ["loc", [null, [10, 46], [10, 63]]]], "id", "modifyHaircutForm"], 0, null, ["loc", [null, [10, 6], [71, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/haircut/item/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      return _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('salon'), this.store.findAll('client')]);
    },
    model: function model(params) {
      return this.store.findRecord('haircut', params.haircut_id);
    },

    setupController: function setupController(controller, model) {
      var _this = this;

      this._super(controller, model);
      _ember['default'].RSVP.all([this.store.findAll('staff'), this.store.findAll('product'), this.store.findAll('salon'), this.store.findAll('client')]).then(function () {

        controller.set('barbers', _this.store.peekAll('staff'));
        controller.set('products', _this.store.peekAll('product'));
        controller.set('salons', _this.store.peekAll('salon'));
        controller.set('clients', _this.store.peekAll('client'));
      });
    },
    actions: {
      transitionToListRoute: function transitionToListRoute() {
        this.transitionTo('haircuts');
      }
    }

  });
});
define("groom-clients-ember/pods/haircut/item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/haircut/item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "haircut/item/manage-haircut-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "confirmSuccess", ["subexpr", "action", ["confirmSuccess"], [], ["loc", [null, [3, 17], [3, 42]]]], "barbers", ["subexpr", "@mut", [["get", "barbers", ["loc", [null, [4, 10], [4, 17]]]]], [], []], "products", ["subexpr", "@mut", [["get", "products", ["loc", [null, [5, 11], [5, 19]]]]], [], []], "clients", ["subexpr", "@mut", [["get", "clients", ["loc", [null, [6, 10], [6, 17]]]]], [], []], "salons", ["subexpr", "@mut", [["get", "salons", ["loc", [null, [7, 9], [7, 15]]]]], [], []]], ["loc", [null, [1, 0], [8, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/haircut/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    staff: _emberData['default'].belongsTo('staff', { async: true }),
    product: _emberData['default'].belongsTo('product', { async: true }),
    salon: _emberData['default'].belongsTo('salon', { async: true }),
    client: _emberData['default'].belongsTo('client', { async: true }),

    paymentType: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date')

  });
});
define('groom-clients-ember/pods/haircut/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('haircut');
    },

    actions: {
      transitionToItemRoute: function transitionToItemRoute(model) {
        this.transitionTo('haircut.item', model.get('id'));
      }
    }
  });
});
define("groom-clients-ember/pods/haircut/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 4
            },
            "end": {
              "line": 54,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/haircut/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "haircut/haircut-list-row-component", [], ["model", ["subexpr", "@mut", [["get", "cut", ["loc", [null, [53, 49], [53, 52]]]]], [], []], "openRecord", ["subexpr", "action", ["openRecord"], [], ["loc", [null, [53, 64], [53, 85]]]], "userCanEdit", ["subexpr", "@mut", [["get", "userCanEdit", ["loc", [null, [53, 98], [53, 109]]]]], [], []]], ["loc", [null, [53, 6], [53, 111]]]]],
        locals: ["cut"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 57,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/haircut/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Haircuts");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "column");
        var el4 = dom.createTextNode("\n        Start date:\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        End date:\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui selectable striped celled table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "two wide");
        var el5 = dom.createTextNode("Date");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "three wide");
        var el5 = dom.createTextNode("Client");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "two wide");
        var el5 = dom.createTextNode("Barber");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "two wide");
        var el5 = dom.createTextNode("Haircut");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "one wide");
        var el5 = dom.createTextNode("Price");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "two wide");
        var el5 = dom.createTextNode("Payment");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "three wide");
        var el5 = dom.createTextNode("Location");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "class", "one wide");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        dom.setAttribute(el3, "class", "warning");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4, "class", "disabled");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui transparent fluid icon input");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui transparent fluid icon input");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(">\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui transparent fluid icon input");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(">\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3, 1, 1]);
        var element1 = dom.childAt(fragment, [5, 3]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [5, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [11, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [13, 1]), 1, 1);
        morphs[5] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["inline", "date-picker", [], ["date", ["subexpr", "@mut", [["get", "startDateFilter", ["loc", [null, [7, 27], [7, 42]]]]], [], []], "valueFormat", "date", "format", "DD MMMM YYYY"], ["loc", [null, [7, 8], [7, 85]]]], ["inline", "date-picker", [], ["date", ["subexpr", "@mut", [["get", "endDateFilterInitial", ["loc", [null, [9, 27], [9, 47]]]]], [], []], "valueFormat", "date", "format", "DD MMMM YYYY"], ["loc", [null, [9, 8], [9, 90]]]], ["inline", "input", [], ["type", "text", "placeholder", "Search by barber...", "value", ["subexpr", "@mut", [["get", "barberFilter", ["loc", [null, [32, 70], [32, 82]]]]], [], []]], ["loc", [null, [32, 10], [32, 84]]]], ["inline", "input", [], ["type", "text", "placeholder", "Search by payment...", "value", ["subexpr", "@mut", [["get", "paymentFilter", ["loc", [null, [40, 71], [40, 84]]]]], [], []]], ["loc", [null, [40, 10], [40, 86]]]], ["inline", "input", [], ["type", "text", "placeholder", "Search by location...", "value", ["subexpr", "@mut", [["get", "locationFilter", ["loc", [null, [46, 72], [46, 86]]]]], [], []]], ["loc", [null, [46, 10], [46, 88]]]], ["block", "each", [["get", "filteredModel", ["loc", [null, [52, 12], [52, 25]]]]], [], 0, null, ["loc", [null, [52, 4], [54, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/login/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        var _getProperties = this.getProperties('identification', 'password');

        var identification = _getProperties.identification;
        var password = _getProperties.password;

        this.get('session').authenticate('authenticator:oauth2', identification, password)['catch'](function (reason) {
          _this.set('errorMessage', reason.error);
        });
      }
    }
  });
});
define('groom-clients-ember/pods/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("groom-clients-ember/pods/login/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 2
            }
          },
          "moduleName": "groom-clients-ember/pods/login/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createTextNode("Login failed:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("code");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 0, 0);
          return morphs;
        },
        statements: [["content", "errorMessage", ["loc", [null, [15, 12], [15, 28]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/login/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Login");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "identification");
        var el3 = dom.createTextNode("Login");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "password");
        var el3 = dom.createTextNode("Password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-default");
        var el3 = dom.createTextNode("Login");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 7, 7);
        morphs[3] = dom.createMorphAt(element0, 11, 11);
        return morphs;
      },
      statements: [["element", "action", ["authenticate"], ["on", "submit"], ["loc", [null, [3, 6], [3, 44]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "identification", ["loc", [null, [5, 16], [5, 30]]]]], [], []], "placeholder", "Enter Login", "class", "form-control"], ["loc", [null, [5, 2], [5, 79]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [8, 16], [8, 24]]]]], [], []], "placeholder", "Enter Password", "class", "form-control", "type", ["subexpr", "@mut", [["get", "password", ["loc", [null, [8, 80], [8, 88]]]]], [], []]], ["loc", [null, [8, 2], [8, 90]]]], ["block", "if", [["get", "errorMessage", ["loc", [null, [12, 8], [12, 20]]]]], [], 0, null, ["loc", [null, [12, 2], [17, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('groom-clients-ember/pods/message-service/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    flashMessages: _ember['default'].inject.service(),

    info: function info(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').info(message, options);
    },

    warning: function warning(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').warning(message, options);
    },

    error: function error(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').error(message, options);
    },

    success: function success(message) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.get('flashMessages').success(message, options);
    }

  });
});
define('groom-clients-ember/pods/not-found/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("groom-clients-ember/pods/not-found/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/not-found/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Not found");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The page doesn't exist");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/product/manage-product-form/component', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase) {
  exports['default'] = _ember['default'].Component.extend(_groomClientsEmberMixinsManageItemsBase['default'], {
    attributes: ['Name', 'Description', 'Product Type', 'Price']

  });
});
define("groom-clients-ember/pods/product/manage-product-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/product/manage-product-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "header", ["loc", [null, [6, 8], [6, 18]]]]],
        locals: ["header"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 6
              },
              "end": {
                "line": 31,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/product/manage-product-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "class", "ui fluid dropdown");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "");
            var el5 = dom.createTextNode("--select type--");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "service");
            var el5 = dom.createTextNode("service");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "product");
            var el5 = dom.createTextNode("product");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            dom.setAttribute(el2, "class", "ui labeled fluid input");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui label");
            var el4 = dom.createTextNode("$");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui green tiny button");
            var el4 = dom.createTextNode("SAVE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n       ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [9, 1]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element4, [1, 0]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element4, [3, 0]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element4, [7]), 3, 3);
            morphs[3] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.name", ["loc", [null, [14, 56], [14, 65]]]]], [], []]], ["loc", [null, [14, 42], [14, 67]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.description", ["loc", [null, [15, 56], [15, 72]]]]], [], []]], ["loc", [null, [15, 42], [15, 74]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.price", ["loc", [null, [25, 28], [25, 38]]]]], [], []]], ["loc", [null, [25, 14], [25, 40]]]], ["element", "action", ["saveItem", ["get", "item", ["loc", [null, [28, 69], [28, 73]]]]], [], ["loc", [null, [28, 49], [28, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 6
              },
              "end": {
                "line": 42,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/product/manage-product-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("       ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui label");
            var el4 = dom.createTextNode("$");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui grey tiny button");
            var el4 = dom.createTextNode("EDIT");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui red tiny button");
            var el4 = dom.createTextNode("DELETE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [9]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element1, [3]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 3, 3);
            morphs[4] = dom.createElementMorph(element2);
            morphs[5] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["content", "item.name", ["loc", [null, [33, 14], [33, 27]]]], ["content", "item.description", ["loc", [null, [34, 14], [34, 34]]]], ["content", "item.type", ["loc", [null, [35, 15], [35, 28]]]], ["content", "item.price", ["loc", [null, [36, 45], [36, 59]]]], ["element", "action", ["editItem", ["get", "item", ["loc", [null, [38, 68], [38, 72]]]]], [], ["loc", [null, [38, 48], [38, 74]]]], ["element", "action", ["deleteItem", ["get", "item", ["loc", [null, [39, 69], [39, 73]]]]], [], ["loc", [null, [39, 47], [39, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 43,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/product/manage-product-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "boolean-or", [["get", "item.isNew", ["loc", [null, [12, 24], [12, 34]]]], ["get", "item.isActive", ["loc", [null, [12, 35], [12, 48]]]]], [], ["loc", [null, [12, 12], [12, 49]]]]], [], 0, 1, ["loc", [null, [12, 6], [42, 13]]]]],
        locals: ["item"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/product/manage-product-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Manage ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui celled fixed table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4, "colspan", "5");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "ui green button");
        var el6 = dom.createTextNode("ADD");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tfoot");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [2]);
        var element7 = dom.childAt(element6, [3]);
        var element8 = dom.childAt(element7, [3, 1, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element6, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element7, 1, 1);
        morphs[3] = dom.createAttrMorph(element8, 'disabled');
        morphs[4] = dom.createElementMorph(element8);
        return morphs;
      },
      statements: [["content", "modelName", ["loc", [null, [1, 11], [1, 24]]]], ["block", "each", [["get", "attributes", ["loc", [null, [5, 12], [5, 22]]]]], [], 0, null, ["loc", [null, [5, 4], [7, 13]]]], ["block", "each", [["get", "model", ["loc", [null, [11, 12], [11, 17]]]]], [], 1, null, ["loc", [null, [11, 4], [43, 13]]]], ["attribute", "disabled", ["get", "disableAddButton", ["loc", [null, [45, 65], [45, 81]]]]], ["element", "action", ["addItem"], [], ["loc", [null, [45, 84], [45, 104]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('groom-clients-ember/pods/product/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    type: _emberData['default'].attr('string'),
    price: _emberData['default'].attr('string')

  });
});
define('groom-clients-ember/pods/product/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.findAll('product');
    },
    actions: {
      addItem: function addItem() {
        this.store.createRecord('product');
      }
    }
  });
});
define("groom-clients-ember/pods/product/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/product/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "product/manage-product-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 36], [1, 41]]]]], [], []], "addItem", "addItem"], ["loc", [null, [1, 0], [1, 61]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/protected/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.store.findAll('models/product');
    }
  });
});
define("groom-clients-ember/pods/protected/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/protected/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Protected");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/sale/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    subtotal: _emberData['default'].attr('string'),
    points: _emberData['default'].attr('string'),
    discount: _emberData['default'].attr('string'),
    total: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),

    client: _emberData['default'].belongsTo('client'),
    product: _emberData['default'].belongsTo('product'),
    barber: _emberData['default'].belongsTo('barber')
  });
});
define('groom-clients-ember/pods/salon/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    storename: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    location: _emberData['default'].attr('string'),
    role: _emberData['default'].attr('string')
  });
});
define('groom-clients-ember/pods/staff/manage-staff-form/component', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase) {
  exports['default'] = _ember['default'].Component.extend(_groomClientsEmberMixinsManageItemsBase['default'], {
    attributes: ['Name']

  });
});
define("groom-clients-ember/pods/staff/manage-staff-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/staff/manage-staff-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "header", ["loc", [null, [6, 8], [6, 18]]]]],
        locals: ["header"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 6
              },
              "end": {
                "line": 19,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/staff/manage-staff-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui green tiny button");
            var el4 = dom.createTextNode("SAVE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n       ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [3, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element4, [1, 0]), 0, 0);
            morphs[1] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.name", ["loc", [null, [14, 56], [14, 65]]]]], [], []]], ["loc", [null, [14, 42], [14, 67]]]], ["element", "action", ["saveItem", ["get", "item", ["loc", [null, [16, 69], [16, 73]]]]], [], ["loc", [null, [16, 49], [16, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 6
              },
              "end": {
                "line": 27,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/staff/manage-staff-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("       ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui grey tiny button");
            var el4 = dom.createTextNode("EDIT");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui red tiny button");
            var el4 = dom.createTextNode("DELETE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [3]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element1, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createElementMorph(element2);
            morphs[2] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["content", "item.name", ["loc", [null, [21, 14], [21, 27]]]], ["element", "action", ["editItem", ["get", "item", ["loc", [null, [23, 68], [23, 72]]]]], [], ["loc", [null, [23, 48], [23, 74]]]], ["element", "action", ["deleteItem", ["get", "item", ["loc", [null, [24, 69], [24, 73]]]]], [], ["loc", [null, [24, 47], [24, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/staff/manage-staff-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "boolean-or", [["get", "item.isNew", ["loc", [null, [12, 24], [12, 34]]]], ["get", "item.isActive", ["loc", [null, [12, 35], [12, 48]]]]], [], ["loc", [null, [12, 12], [12, 49]]]]], [], 0, 1, ["loc", [null, [12, 6], [27, 13]]]]],
        locals: ["item"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/staff/manage-staff-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Manage ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui celled table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4, "colspan", "5");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "ui green button");
        var el6 = dom.createTextNode("ADD");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tfoot");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [2]);
        var element7 = dom.childAt(element6, [3]);
        var element8 = dom.childAt(element7, [3, 1, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element6, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element7, 1, 1);
        morphs[3] = dom.createAttrMorph(element8, 'disabled');
        morphs[4] = dom.createElementMorph(element8);
        return morphs;
      },
      statements: [["content", "modelName", ["loc", [null, [1, 11], [1, 24]]]], ["block", "each", [["get", "attributes", ["loc", [null, [5, 12], [5, 22]]]]], [], 0, null, ["loc", [null, [5, 4], [7, 13]]]], ["block", "each", [["get", "model", ["loc", [null, [11, 12], [11, 17]]]]], [], 1, null, ["loc", [null, [11, 4], [28, 13]]]], ["attribute", "disabled", ["get", "disableAddButton", ["loc", [null, [30, 65], [30, 81]]]]], ["element", "action", ["addItem"], [], ["loc", [null, [30, 84], [30, 104]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('groom-clients-ember/pods/staff/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string')
  });
});
define('groom-clients-ember/pods/staff/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.findAll('staff');
    },
    actions: {
      addItem: function addItem() {
        this.store.createRecord('staff');
      }
    }
  });
});
define("groom-clients-ember/pods/staff/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/staff/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "staff/manage-staff-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 32], [1, 37]]]]], [], []], "addItem", "addItem"], ["loc", [null, [1, 0], [1, 57]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/pods/user/manage-user-form/component', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase) {
  exports['default'] = _ember['default'].Component.extend(_groomClientsEmberMixinsManageItemsBase['default'], {
    attributes: ['Name', 'Password', 'Role', 'Location']

  });
});
define("groom-clients-ember/pods/user/manage-user-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/user/manage-user-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "header", ["loc", [null, [6, 8], [6, 18]]]]],
        locals: ["header"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 6
              },
              "end": {
                "line": 28,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/user/manage-user-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "class", "ui dropdown");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "admin");
            var el5 = dom.createTextNode("admin");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "user");
            var el5 = dom.createTextNode("user");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "ui fluid input");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui green tiny button");
            var el4 = dom.createTextNode("SAVE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n       ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [9, 1]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element4, [1, 0]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element4, [3, 0]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element4, [7, 0]), 0, 0);
            morphs[3] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.name", ["loc", [null, [14, 56], [14, 65]]]]], [], []]], ["loc", [null, [14, 42], [14, 67]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.password", ["loc", [null, [15, 56], [15, 69]]]]], [], []]], ["loc", [null, [15, 42], [15, 71]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "item.location", ["loc", [null, [23, 56], [23, 69]]]]], [], []]], ["loc", [null, [23, 42], [23, 71]]]], ["element", "action", ["saveItem", ["get", "item", ["loc", [null, [25, 69], [25, 73]]]]], [], ["loc", [null, [25, 49], [25, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 6
              },
              "end": {
                "line": 45,
                "column": 6
              }
            },
            "moduleName": "groom-clients-ember/pods/user/manage-user-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("       ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("***********");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "class", "ui dropdown");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "admin");
            var el5 = dom.createTextNode("admin");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            dom.setAttribute(el4, "value", "user");
            var el5 = dom.createTextNode("user");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui grey tiny button");
            var el4 = dom.createTextNode("EDIT");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "ui red tiny button");
            var el4 = dom.createTextNode("DELETE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [9]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element1, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
            morphs[2] = dom.createElementMorph(element2);
            morphs[3] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["content", "item.name", ["loc", [null, [30, 14], [30, 27]]]], ["content", "item.location", ["loc", [null, [39, 14], [39, 31]]]], ["element", "action", ["editItem", ["get", "item", ["loc", [null, [41, 68], [41, 72]]]]], [], ["loc", [null, [41, 48], [41, 74]]]], ["element", "action", ["deleteItem", ["get", "item", ["loc", [null, [42, 69], [42, 73]]]]], [], ["loc", [null, [42, 47], [42, 75]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 46,
              "column": 4
            }
          },
          "moduleName": "groom-clients-ember/pods/user/manage-user-form/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "boolean-or", [["get", "item.isNew", ["loc", [null, [12, 24], [12, 34]]]], ["get", "item.isActive", ["loc", [null, [12, 35], [12, 48]]]]], [], ["loc", [null, [12, 12], [12, 49]]]]], [], 0, 1, ["loc", [null, [12, 6], [45, 13]]]]],
        locals: ["item"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 53,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/user/manage-user-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Manage ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui celled table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4, "colspan", "5");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "ui green button");
        var el6 = dom.createTextNode("ADD");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tfoot");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [2]);
        var element7 = dom.childAt(element6, [3]);
        var element8 = dom.childAt(element7, [3, 1, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element6, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element7, 1, 1);
        morphs[3] = dom.createAttrMorph(element8, 'disabled');
        morphs[4] = dom.createElementMorph(element8);
        return morphs;
      },
      statements: [["content", "modelName", ["loc", [null, [1, 11], [1, 24]]]], ["block", "each", [["get", "attributes", ["loc", [null, [5, 12], [5, 22]]]]], [], 0, null, ["loc", [null, [5, 4], [7, 13]]]], ["block", "each", [["get", "model", ["loc", [null, [11, 12], [11, 17]]]]], [], 1, null, ["loc", [null, [11, 4], [46, 13]]]], ["attribute", "disabled", ["get", "disableAddButton", ["loc", [null, [48, 65], [48, 81]]]]], ["element", "action", ["addItem"], [], ["loc", [null, [48, 84], [48, 104]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('groom-clients-ember/pods/user/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    username: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    location: _emberData['default'].attr('string'),
    role: _emberData['default'].attr('string')
  });
});
define('groom-clients-ember/pods/user/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.findAll('user');
    },
    actions: {
      addItem: function addItem() {
        this.store.createRecord('user');
      }
    }
  });
});
define("groom-clients-ember/pods/user/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/user/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "user/manage-user-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 30], [1, 35]]]]], [], []], "addItem", "addItem"], ["loc", [null, [1, 0], [1, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('groom-clients-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('groom-clients-ember/router', ['exports', 'ember', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _groomClientsEmberConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('protected');
    this.route('product', { path: '/products' });
    this.route('user', { path: '/users' });
    this.route('staff', { path: '/employees' });

    this.route('client', { path: '/clients' });
    this.route('client.item', { path: 'clients/:client_id' });
    this.route('client.new', { path: 'clients/new' });

    this.route('haircut', { path: '/haircuts' });
    this.route('haircut.item', { path: 'haircuts/:haircut_id' });

    this.route('not-found', { path: '/*path' });
  });

  exports['default'] = Router;
});
define('groom-clients-ember/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend();
});
define('groom-clients-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('groom-clients-ember/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('groom-clients-ember/services/moment', ['exports', 'ember', 'groom-clients-ember/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _groomClientsEmberConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_groomClientsEmberConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('groom-clients-ember/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('groom-clients-ember/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("groom-clients-ember/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/templates/components/ui-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("groom-clients-ember/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/templates/components/ui-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("groom-clients-ember/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/templates/components/ui-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("groom-clients-ember/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/templates/components/ui-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'checked');
        morphs[3] = dom.createAttrMorph(element0, 'disabled');
        morphs[4] = dom.createAttrMorph(element0, 'data-id');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [1, 28], [1, 32]]]]], ["attribute", "checked", ["get", "checked", ["loc", [null, [1, 45], [1, 52]]]]], ["attribute", "disabled", ["get", "readonly", ["loc", [null, [1, 66], [1, 74]]]]], ["attribute", "data-id", ["get", "data-id", ["loc", [null, [1, 87], [1, 94]]]]], ["content", "label", ["loc", [null, [2, 7], [2, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('groom-clients-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'groom-clients-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("groom-clients-ember/app")["default"].create({"name":"groom-clients-ember","version":"0.0.0+e9ff04e0"});
}

/* jshint ignore:end */
//# sourceMappingURL=groom-clients-ember.map