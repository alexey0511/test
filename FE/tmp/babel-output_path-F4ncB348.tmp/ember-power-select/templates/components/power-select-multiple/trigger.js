define("ember-power-select/templates/components/power-select-multiple/trigger", ["exports"], function (exports) {
  "use strict";

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
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select-multiple/trigger.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "aria-label", "remove element");
            dom.setAttribute(el1, "class", "ember-power-select-multiple-remove-btn");
            var el2 = dom.createTextNode("×");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'onmousedown');
            return morphs;
          },
          statements: [["attribute", "onmousedown", ["subexpr", "action", [["get", "select.actions.select", ["loc", [null, [4, 108], [4, 129]]]], ["subexpr", "ember-power-select-build-selection", [["get", "opt", ["loc", [null, [4, 166], [4, 169]]]], ["get", "selected", ["loc", [null, [4, 170], [4, 178]]]]], ["multiple", true], ["loc", [null, [4, 130], [4, 193]]]]], [], ["loc", [null, [4, 99], [4, 195]]]]]],
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
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 4
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select-multiple/trigger.hbs"
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
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "component", [["get", "selectedItemComponent", ["loc", [null, [7, 18], [7, 39]]]]], ["selected", ["subexpr", "@mut", [["get", "opt", ["loc", [null, [7, 49], [7, 52]]]]], [], []], "lastSearchedText", ["subexpr", "@mut", [["get", "lastSearchedText", ["loc", [null, [7, 70], [7, 86]]]]], [], []]], ["loc", [null, [7, 6], [7, 88]]]]],
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
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select-multiple/trigger.hbs"
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
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "opt", ["loc", [null, [9, 14], [9, 17]]]], ["get", "lastSearchedText", ["loc", [null, [9, 18], [9, 34]]]]], [], ["loc", [null, [9, 6], [9, 36]]]]],
          locals: [],
          templates: []
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
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple/trigger.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "ember-power-select-multiple-option");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 2, 2);
          return morphs;
        },
        statements: [["block", "unless", [["get", "disabled", ["loc", [null, [3, 14], [3, 22]]]]], [], 0, null, ["loc", [null, [3, 4], [5, 15]]]], ["block", "if", [["get", "selectedItemComponent", ["loc", [null, [6, 10], [6, 31]]]]], [], 1, 2, ["loc", [null, [6, 4], [10, 11]]]]],
        locals: ["opt"],
        templates: [child0, child1, child2]
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
            "line": 17,
            "column": 52
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple/trigger.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1, "type", "search");
        dom.setAttribute(el1, "class", "ember-power-select-trigger-multiple-input");
        dom.setAttribute(el1, "tabindex", "0");
        dom.setAttribute(el1, "autocomplete", "off");
        dom.setAttribute(el1, "autocorrect", "off");
        dom.setAttribute(el1, "autocapitalize", "off");
        dom.setAttribute(el1, "spellcheck", "false");
        dom.setAttribute(el1, "role", "combobox");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "ember-power-select-status-icon");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element2, 'style');
        morphs[2] = dom.createAttrMorph(element2, 'placeholder');
        morphs[3] = dom.createAttrMorph(element2, 'value');
        morphs[4] = dom.createAttrMorph(element2, 'disabled');
        morphs[5] = dom.createAttrMorph(element2, 'oninput');
        morphs[6] = dom.createAttrMorph(element2, 'onkeydown');
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "each", [["get", "selected", ["loc", [null, [1, 8], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [12, 9]]]], ["attribute", "style", ["get", "triggerMultipleInputStyle", ["loc", [null, [14, 84], [14, 109]]]]], ["attribute", "placeholder", ["get", "maybePlaceholder", ["loc", [null, [15, 16], [15, 32]]]]], ["attribute", "value", ["get", "searchText", ["loc", [null, [15, 43], [15, 53]]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [15, 67], [15, 75]]]]], ["attribute", "oninput", ["subexpr", "action", ["search"], ["value", "target.value"], ["loc", [null, [16, 10], [16, 50]]]]], ["attribute", "onkeydown", ["subexpr", "action", ["handleKeydown"], [], ["loc", [null, [16, 61], [16, 87]]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});