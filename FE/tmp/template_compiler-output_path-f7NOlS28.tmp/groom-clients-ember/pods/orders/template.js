export default Ember.HTMLBars.template((function() {
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
          "line": 8,
          "column": 0
        }
      },
      "moduleName": "groom-clients-ember/pods/orders/template.hbs"
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
      ["inline","orders/main-order-component",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[2,8],[2,13]]]]],[],[]],"products",["subexpr","@mut",[["get","products",["loc",[null,[3,11],[3,19]]]]],[],[]],"staffs",["subexpr","@mut",[["get","staffs",["loc",[null,[4,9],[4,15]]]]],[],[]],"clients",["subexpr","@mut",[["get","clients",["loc",[null,[5,10],[5,17]]]]],[],[]],"onResetRoute",["subexpr","route-action",["resetRoute"],[],["loc",[null,[6,15],[6,42]]]]],["loc",[null,[1,0],[7,2]]]]
    ],
    locals: [],
    templates: []
  };
}()));