export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
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
      dom.setAttribute(el2,"class","ui button");
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
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]),0,0);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]),0,0);
      morphs[4] = dom.createElementMorph(element0);
      return morphs;
    },
    statements: [
      ["content","model.fullName",["loc",[null,[1,6],[1,24]]]],
      ["content","model.phone1",["loc",[null,[2,6],[2,22]]]],
      ["content","model.progress",["loc",[null,[3,6],[3,24]]]],
      ["inline","moment-format",[["get","model.lastVisit",["loc",[null,[4,22],[4,37]]]],"DD MMMM YYYY"],[],["loc",[null,[4,6],[4,54]]]],
      ["element","action",["openRecord",["get","model",["loc",[null,[5,54],[5,59]]]]],[],["loc",[null,[5,32],[5,61]]]]
    ],
    locals: [],
    templates: []
  };
}()));