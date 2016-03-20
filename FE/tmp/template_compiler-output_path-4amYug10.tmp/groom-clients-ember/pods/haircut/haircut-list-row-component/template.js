export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        dom.setAttribute(el1,"class","ui button");
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
      statements: [
        ["element","action",["openRecord",["get","model",["loc",[null,[10,52],[10,57]]]]],[],["loc",[null,[10,30],[10,59]]]]
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
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]),0,0);
      morphs[4] = dom.createMorphAt(dom.childAt(fragment, [8]),0,0);
      morphs[5] = dom.createMorphAt(dom.childAt(fragment, [10]),0,0);
      morphs[6] = dom.createMorphAt(dom.childAt(fragment, [12]),0,0);
      morphs[7] = dom.createMorphAt(dom.childAt(fragment, [14]),1,1);
      return morphs;
    },
    statements: [
      ["inline","moment-format",[["get","model.date",["loc",[null,[1,20],[1,30]]]],"DD MMMM YYYY HH:MM"],[],["loc",[null,[1,4],[1,53]]]],
      ["content","model.client.fullName",["loc",[null,[2,4],[2,29]]]],
      ["content","model.staff.name",["loc",[null,[3,4],[3,24]]]],
      ["content","model.product.name",["loc",[null,[4,4],[4,26]]]],
      ["content","model.price",["loc",[null,[5,4],[5,19]]]],
      ["content","model.paymentType",["loc",[null,[6,4],[6,25]]]],
      ["content","model.salon.location",["loc",[null,[7,4],[7,28]]]],
      ["block","if",[["get","userCanEdit",["loc",[null,[9,8],[9,19]]]]],[],0,null,["loc",[null,[9,2],[11,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));