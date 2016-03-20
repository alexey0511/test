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
          "line": 10,
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","haircut/item/manage-haircut-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[2,8],[2,13]]]]],[],[]],"confirmSuccess",["subexpr","action",["confirmSuccess"],[],["loc",[null,[3,17],[3,42]]]],"deleteRecord",["subexpr","action",["deleteRecord"],[],["loc",[null,[4,15],[4,38]]]],"barbers",["subexpr","@mut",[["get","barbers",["loc",[null,[5,10],[5,17]]]]],[],[]],"products",["subexpr","@mut",[["get","products",["loc",[null,[6,11],[6,19]]]]],[],[]],"clients",["subexpr","@mut",[["get","clients",["loc",[null,[7,10],[7,17]]]]],[],[]],"salons",["subexpr","@mut",[["get","salons",["loc",[null,[8,9],[8,15]]]]],[],[]]],["loc",[null,[1,0],[9,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));