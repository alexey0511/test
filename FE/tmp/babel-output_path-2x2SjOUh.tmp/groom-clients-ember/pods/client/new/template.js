define("groom-clients-ember/pods/client/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.1",
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
      statements: [["inline", "addclient/new-client-form-component", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], []], "confirmSuccess", ["subexpr", "action", ["confirmSuccess"], [], ["loc", [null, [3, 17], [3, 42]]]], "resetRecord", ["subexpr", "action", ["resetRecord"], [], ["loc", [null, [4, 14], [4, 36]]]]], ["loc", [null, [1, 0], [5, 4]]]]],
      locals: [],
      templates: []
    };
  })());
});