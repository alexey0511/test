define('groom-clients-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/authenticators/oauth2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - authenticators');
  QUnit.test('authenticators/oauth2.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/helpers/boolean-or.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/boolean-or.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/boolean-or.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('groom-clients-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('groom-clients-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'groom-clients-ember/tests/helpers/start-app', 'groom-clients-ember/tests/helpers/destroy-app'], function (exports, _qunit, _groomClientsEmberTestsHelpersStartApp, _groomClientsEmberTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _groomClientsEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _groomClientsEmberTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('groom-clients-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/helpers/resolver', ['exports', 'groom-clients-ember/resolver', 'groom-clients-ember/config/environment'], function (exports, _groomClientsEmberResolver, _groomClientsEmberConfigEnvironment) {

  var resolver = _groomClientsEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _groomClientsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _groomClientsEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('groom-clients-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/helpers/start-app', ['exports', 'ember', 'groom-clients-ember/app', 'groom-clients-ember/config/environment'], function (exports, _ember, _groomClientsEmberApp, _groomClientsEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _groomClientsEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _groomClientsEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('groom-clients-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/initializers/message-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/message-service.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/message-service.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/file-upload/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('file-upload', 'Integration | Component | file upload', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'file-upload', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'file-upload', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/file-upload/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/file-upload');
  QUnit.test('integration/pods/components/file-upload/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/file-upload/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-client-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('manage-client-form', 'Integration | Component | manage client form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 22
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'manage-client-form', ['loc', [null, [1, 0], [1, 22]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'manage-client-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 27]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-client-form/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/manage-client-form');
  QUnit.test('integration/pods/components/manage-client-form/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/manage-client-form/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-items/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('manage-items', 'Integration | Component | manage items', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'manage-items', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'manage-items', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-items/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/manage-items');
  QUnit.test('integration/pods/components/manage-items/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/manage-items/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-items-row/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('manage-items-row', 'Integration | Component | manage items row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'manage-items-row', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'manage-items-row', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-items-row/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/manage-items-row');
  QUnit.test('integration/pods/components/manage-items-row/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/manage-items-row/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-user-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('manage-user-form', 'Integration | Component | manage user form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'manage-user-form', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'manage-user-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/manage-user-form/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/manage-user-form');
  QUnit.test('integration/pods/components/manage-user-form/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/manage-user-form/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/new-client-form-component/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('new-client-form-component', 'Integration | Component | new client form component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 29
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'new-client-form-component', ['loc', [null, [1, 0], [1, 29]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'new-client-form-component', [], [], 0, null, ['loc', [null, [2, 4], [4, 34]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/new-client-form-component/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/new-client-form-component');
  QUnit.test('integration/pods/components/new-client-form-component/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/new-client-form-component/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/product/manage-product-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product/manage-product-form', 'Integration | Component | product/manage product form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 31
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'product/manage-product-form', ['loc', [null, [1, 0], [1, 31]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'product/manage-product-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 36]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/product/manage-product-form/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/product/manage-product-form');
  QUnit.test('integration/pods/components/product/manage-product-form/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product/manage-product-form/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/integration/pods/components/ui-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('ui-form', 'Integration | Component | ui form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 11
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'ui-form', ['loc', [null, [1, 0], [1, 11]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'ui-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('groom-clients-ember/tests/integration/pods/components/ui-form/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/pods/components/ui-form');
  QUnit.test('integration/pods/components/ui-form/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/ui-form/component-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/mixins/manage-items-base.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins');
  QUnit.test('mixins/manage-items-base.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/manage-items-base.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/application');
  QUnit.test('pods/application/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/adapter.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/application/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/application');
  QUnit.test('pods/application/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/controller.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/application');
  QUnit.test('pods/application/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/application');
  QUnit.test('pods/application/serializer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/serializer.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/client-list-row-component/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/client-list-row-component');
  QUnit.test('pods/client/client-list-row-component/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/client-list-row-component/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client');
  QUnit.test('pods/client/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/controller.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/item/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/item');
  QUnit.test('pods/client/item/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/item/controller.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/item/manage-client-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/item/manage-client-form');
  QUnit.test('pods/client/item/manage-client-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/item/manage-client-form/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/item/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/item');
  QUnit.test('pods/client/item/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/item/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client');
  QUnit.test('pods/client/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/new/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/new');
  QUnit.test('pods/client/new/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/new/controller.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/new/new-client-form-component/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/new/new-client-form-component');
  QUnit.test('pods/client/new/new-client-form-component/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/new/new-client-form-component/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/new/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client/new');
  QUnit.test('pods/client/new/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/new/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/client/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/client');
  QUnit.test('pods/client/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/client/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/components/file-upload/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/components/file-upload');
  QUnit.test('pods/components/file-upload/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/file-upload/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/components/manage-items/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/components/manage-items');
  QUnit.test('pods/components/manage-items/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/manage-items/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/components/manage-items-row/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/components/manage-items-row');
  QUnit.test('pods/components/manage-items-row/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/manage-items-row/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/components/ui-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/components/ui-form');
  QUnit.test('pods/components/ui-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/ui-form/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/haircut/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/haircut');
  QUnit.test('pods/haircut/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/haircut/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/haircut/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/haircut');
  QUnit.test('pods/haircut/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/haircut/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/login/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/login');
  QUnit.test('pods/login/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/login/controller.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/login/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/login');
  QUnit.test('pods/login/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/login/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/message-service/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/message-service');
  QUnit.test('pods/message-service/service.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/message-service/service.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/product/manage-product-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/product/manage-product-form');
  QUnit.test('pods/product/manage-product-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/product/manage-product-form/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/product/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/product');
  QUnit.test('pods/product/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/product/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/product/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/product');
  QUnit.test('pods/product/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/product/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/protected/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/protected');
  QUnit.test('pods/protected/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/protected/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/sale/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/sale');
  QUnit.test('pods/sale/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/sale/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/salon/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/salon');
  QUnit.test('pods/salon/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/salon/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/staff/manage-staff-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/staff/manage-staff-form');
  QUnit.test('pods/staff/manage-staff-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/staff/manage-staff-form/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/staff/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/staff');
  QUnit.test('pods/staff/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/staff/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/staff/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/staff');
  QUnit.test('pods/staff/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/staff/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/user/manage-user-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/user/manage-user-form');
  QUnit.test('pods/user/manage-user-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/user/manage-user-form/component.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/user/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/user');
  QUnit.test('pods/user/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/user/model.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/pods/user/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/user');
  QUnit.test('pods/user/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/user/route.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/test-helper', ['exports', 'groom-clients-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _groomClientsEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_groomClientsEmberTestsHelpersResolver['default']);
});
define('groom-clients-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/helpers/boolean-or-test', ['exports', 'groom-clients-ember/helpers/boolean-or', 'qunit'], function (exports, _groomClientsEmberHelpersBooleanOr, _qunit) {

  (0, _qunit.module)('Unit | Helper | boolean or');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _groomClientsEmberHelpersBooleanOr.booleanOr)(42);
    assert.ok(result);
  });
});
define('groom-clients-ember/tests/unit/helpers/boolean-or-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/boolean-or-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/boolean-or-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/initializers/message-service-test', ['exports', 'ember', 'groom-clients-ember/initializers/message-service', 'qunit'], function (exports, _ember, _groomClientsEmberInitializersMessageService, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | message service', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _groomClientsEmberInitializersMessageService['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('groom-clients-ember/tests/unit/initializers/message-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/message-service-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/message-service-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/mixins/manage-items-base-test', ['exports', 'ember', 'groom-clients-ember/mixins/manage-items-base', 'qunit'], function (exports, _ember, _groomClientsEmberMixinsManageItemsBase, _qunit) {

  (0, _qunit.module)('Unit | Mixin | manage items base');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ManageItemsBaseObject = _ember['default'].Object.extend(_groomClientsEmberMixinsManageItemsBase['default']);
    var subject = ManageItemsBaseObject.create();
    assert.ok(subject);
  });
});
define('groom-clients-ember/tests/unit/mixins/manage-items-base-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/manage-items-base-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/manage-items-base-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('groom-clients-ember/tests/unit/pods/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/application');
  QUnit.test('unit/pods/application/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/adapter-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/application/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/application');
  QUnit.test('unit/pods/application/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/application/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('groom-clients-ember/tests/unit/pods/application/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/application');
  QUnit.test('unit/pods/application/serializer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/serializer-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/barber/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('barber', 'Unit | Model | barber', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/barber/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/barber');
  QUnit.test('unit/pods/barber/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/barber/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/client/item/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:client/item', 'Unit | Route | client/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/client/item/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/client/item');
  QUnit.test('unit/pods/client/item/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/client/item/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/client/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('client', 'Unit | Model | client', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/client/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/client');
  QUnit.test('unit/pods/client/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/client/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/client/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:client', 'Unit | Route | client', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/client/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/client');
  QUnit.test('unit/pods/client/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/client/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/haircut/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('haircut', 'Unit | Model | haircut', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/haircut/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/haircut');
  QUnit.test('unit/pods/haircut/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/haircut/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/haircut/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:haircut', 'Unit | Route | haircut', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/haircut/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/haircut');
  QUnit.test('unit/pods/haircut/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/haircut/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/login/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/login');
  QUnit.test('unit/pods/login/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/login/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/message-service/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:message-service', 'Unit | Service | message service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('groom-clients-ember/tests/unit/pods/message-service/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/message-service');
  QUnit.test('unit/pods/message-service/service-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/message-service/service-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/product/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('product', 'Unit | Model | product', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/product/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/product');
  QUnit.test('unit/pods/product/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/product/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/product/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:product', 'Unit | Route | product', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/product/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/product');
  QUnit.test('unit/pods/product/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/product/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/protected/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:protected', 'Unit | Route | protected', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/protected/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/protected');
  QUnit.test('unit/pods/protected/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/protected/route-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/sale/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('sale', 'Unit | Model | sale', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/sale/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/sale');
  QUnit.test('unit/pods/sale/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/sale/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/store/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('store', 'Unit | Model | store', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/store/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/store');
  QUnit.test('unit/pods/store/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/store/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/user/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('groom-clients-ember/tests/unit/pods/user/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/user');
  QUnit.test('unit/pods/user/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/user/model-test.js should pass jshint.');
  });
});
define('groom-clients-ember/tests/unit/pods/user/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user', 'Unit | Route | user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('groom-clients-ember/tests/unit/pods/user/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/pods/user');
  QUnit.test('unit/pods/user/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/user/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('groom-clients-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map