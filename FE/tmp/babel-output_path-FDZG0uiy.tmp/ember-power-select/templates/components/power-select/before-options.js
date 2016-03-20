define("ember-power-select/templates/components/power-select/before-options", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/before-options.hbs"
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
          dom.setAttribute(el1, "class", "ember-power-select-search");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "search");
          dom.setAttribute(el2, "autocomplete", "off");
          dom.setAttribute(el2, "autocorrect", "off");
          dom.setAttribute(el2, "autocapitalize", "off");
          dom.setAttribute(el2, "spellcheck", "false");
          dom.setAttribute(el2, "role", "combobox");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'oninput');
          morphs[1] = dom.createAttrMorph(element0, 'onkeydown');
          morphs[2] = dom.createAttrMorph(element0, 'placeholder');
          return morphs;
        },
        statements: [["attribute", "oninput", ["subexpr", "action", [["get", "select.actions.search", ["loc", [null, [4, 56], [4, 77]]]]], ["value", "target.value"], ["loc", [null, [4, 47], [4, 100]]]]], ["attribute", "onkeydown", ["subexpr", "action", ["handleKeydown"], [], ["loc", [null, [5, 14], [5, 40]]]]], ["attribute", "placeholder", ["get", "searchPlaceholder", ["loc", [null, [5, 55], [5, 72]]]]]],
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
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/before-options.hbs"
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
      statements: [["block", "if", [["get", "searchEnabled", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});