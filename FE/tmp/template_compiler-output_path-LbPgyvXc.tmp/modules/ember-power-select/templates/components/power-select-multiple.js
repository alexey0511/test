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
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
        },
        isEmpty: false,
        arity: 2,
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[37,14],[37,20]]]],["get","term",["loc",[null,[37,21],[37,25]]]]],[],["loc",[null,[37,6],[37,27]]]]
        ],
        locals: ["option","term"],
        templates: []
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
              "line": 38,
              "column": 4
            },
            "end": {
              "line": 40,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[],["to","inverse"],["loc",[null,[39,6],[39,28]]]]
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
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["options",["subexpr","@mut",[["get","options",["loc",[null,[3,14],[3,21]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[4,15],[4,23]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[5,15],[5,23]]]]],[],[]],"onkeydown",["subexpr","@mut",[["get","onkeydown",["loc",[null,[6,16],[6,25]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[7,14],[7,36]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[8,13],[8,34]]]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[9,14],[9,21]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[10,15],[10,23]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[11,18],[11,29]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[12,20],[12,33]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[13,24],[13,41]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[14,21],[14,35]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[15,23],[15,39]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[16,20],[16,33]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[17,23],[17,39]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[18,28],[18,49]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[19,29],[19,51]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[20,23],[20,39]]]]],[],[]],"afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[21,28],[21,49]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[22,14],[22,21]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[23,18],[23,29]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[24,20],[24,33]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[25,13],[25,19]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[26,17],[26,27]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[27,23],[27,39]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[28,20],[28,33]]]]],[],[]],"opened",["subexpr","@mut",[["get","opened",["loc",[null,[29,13],[29,19]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[30,15],[30,23]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[31,10],[31,13]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[32,12],[32,17]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","triggerClass",["loc",[null,[33,19],[33,31]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[34,20],[34,33]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[35,12],[35,17]]]]],[],[]]],0,1,["loc",[null,[2,2],[40,19]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 2
            },
            "end": {
              "line": 78,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
        },
        isEmpty: false,
        arity: 2,
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[77,14],[77,20]]]],["get","term",["loc",[null,[77,21],[77,25]]]]],[],["loc",[null,[77,6],[77,27]]]]
        ],
        locals: ["option","term"],
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
            "line": 41,
            "column": 0
          },
          "end": {
            "line": 79,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["options",["subexpr","@mut",[["get","options",["loc",[null,[43,14],[43,21]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[44,15],[44,23]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[45,15],[45,23]]]]],[],[]],"onkeydown",["subexpr","@mut",[["get","onkeydown",["loc",[null,[46,16],[46,25]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[47,14],[47,36]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[48,13],[48,34]]]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[49,14],[49,21]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[50,15],[50,23]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[51,18],[51,29]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[52,20],[52,33]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[53,24],[53,41]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[54,21],[54,35]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[55,23],[55,39]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[56,20],[56,33]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[57,23],[57,39]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[58,28],[58,49]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[59,29],[59,51]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[60,23],[60,39]]]]],[],[]],"afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[61,28],[61,49]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[62,14],[62,21]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[63,18],[63,29]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[64,20],[64,33]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[65,13],[65,19]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[66,17],[66,27]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[67,23],[67,39]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[68,20],[68,33]]]]],[],[]],"opened",["subexpr","@mut",[["get","opened",["loc",[null,[69,13],[69,19]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[70,15],[70,23]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[71,10],[71,13]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[72,12],[72,17]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","triggerClass",["loc",[null,[73,19],[73,31]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[74,20],[74,33]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[75,12],[75,17]]]]],[],[]]],0,null,["loc",[null,[42,2],[78,19]]]]
      ],
      locals: [],
      templates: [child0]
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
          "line": 81,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[1,6],[1,26]]]]],[],0,1,["loc",[null,[1,0],[79,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));