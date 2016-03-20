export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
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
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","ember-power-select-option");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","loadingMessage",["loc",[null,[3,56],[3,74]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","loadingMessage",["loc",[null,[2,8],[2,22]]]]],[],0,null,["loc",[null,[2,2],[4,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
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
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","option",["loc",[null,[13,16],[13,22]]]],["get","lastSearchedText",["loc",[null,[13,23],[13,39]]]]],[],["loc",[null,[13,8],[13,41]]]]
          ],
          locals: ["option"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","ember-power-select-group");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","ember-power-select-group-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          morphs[1] = dom.createMorphAt(element1,3,3);
          return morphs;
        },
        statements: [
          ["content","opt.groupName",["loc",[null,[9,50],[9,67]]]],
          ["block","component",[["get","optionsComponent",["loc",[null,[10,19],[10,35]]]]],["highlighted",["subexpr","readonly",[["get","highlighted",["loc",[null,[10,58],[10,69]]]]],[],["loc",[null,[10,48],[10,70]]]],"selected",["subexpr","readonly",[["get","selected",["loc",[null,[10,90],[10,98]]]]],[],["loc",[null,[10,80],[10,99]]]],"options",["subexpr","readonly",[["get","opt.options",["loc",[null,[11,26],[11,37]]]]],[],["loc",[null,[11,16],[11,38]]]],"allOptions",["subexpr","readonly",[["get","allOptions",["loc",[null,[11,60],[11,70]]]]],[],["loc",[null,[11,50],[11,71]]]],"optionsComponent",["subexpr","readonly",[["get","optionsComponent",["loc",[null,[11,99],[11,115]]]]],[],["loc",[null,[11,89],[11,116]]]],"select",["subexpr","readonly",[["get","select",["loc",[null,[11,134],[11,140]]]]],[],["loc",[null,[11,124],[11,141]]]],"class","ember-power-select-options ember-power-select-options--nested"],0,null,["loc",[null,[10,6],[14,20]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'onmouseup');
          morphs[2] = dom.createAttrMorph(element0, 'onmouseover');
          morphs[3] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["ember-power-select-option ",["subexpr","ember-power-select-option-classes",[["get","opt",["loc",[null,[17,77],[17,80]]]],["get","selected",["loc",[null,[17,81],[17,89]]]],["get","highlighted",["loc",[null,[17,90],[17,101]]]]],[],["loc",[null,[17,41],[17,103]]]]]]],
          ["attribute","onmouseup",["subexpr","action",[["get","select.actions.choose",["loc",[null,[18,25],[18,46]]]],["subexpr","ember-power-select-build-selection",[["get","opt",["loc",[null,[18,83],[18,86]]]],["get","selected",["loc",[null,[18,87],[18,95]]]]],["multiple",["get","multiple",["loc",[null,[18,105],[18,113]]]]],["loc",[null,[18,47],[18,114]]]]],[],["loc",[null,[18,16],[18,116]]]]],
          ["attribute","onmouseover",["subexpr","action",[["get","select.actions.highlight",["loc",[null,[19,27],[19,51]]]],["get","opt",["loc",[null,[19,52],[19,55]]]]],[],["loc",[null,[19,18],[19,57]]]]],
          ["inline","yield",[["get","opt",["loc",[null,[20,14],[20,17]]]],["get","lastSearchedText",["loc",[null,[20,18],[20,34]]]]],[],["loc",[null,[20,6],[20,36]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","opt.groupName",["loc",[null,[7,8],[7,21]]]]],[],0,1,["loc",[null,[7,2],[22,9]]]]
      ],
      locals: ["opt"],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 24,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","loading",["loc",[null,[1,6],[1,13]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
      ["block","each",[["get","options",["loc",[null,[6,8],[6,15]]]]],[],1,null,["loc",[null,[6,0],[23,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));