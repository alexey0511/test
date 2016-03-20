export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 4
          },
          "end": {
            "line": 12,
            "column": 4
          }
        },
        "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("th");
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
        ["content","header",["loc",[null,[11,10],[11,20]]]]
      ],
      locals: ["header"],
      templates: []
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
                "line": 22,
                "column": 12
              },
              "end": {
                "line": 25,
                "column": 12
              }
            },
            "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
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
            ["content","role",["loc",[null,[24,14],[24,22]]]]
          ],
          locals: ["role"],
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
              "line": 17,
              "column": 6
            },
            "end": {
              "line": 33,
              "column": 6
            }
          },
          "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","ui fluid input");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","ui fluid input");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","ui fluid input");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","ui green tiny button");
          var el4 = dom.createTextNode("SAVE");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","ui red tiny button");
          var el4 = dom.createTextNode("DELETE");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n       ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(element4, [9]);
          var element6 = dom.childAt(element5, [1]);
          var element7 = dom.childAt(element5, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element4, [1, 0]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element4, [3, 0]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element4, [5]),1,1);
          morphs[3] = dom.createMorphAt(dom.childAt(element4, [7, 0]),0,0);
          morphs[4] = dom.createElementMorph(element6);
          morphs[5] = dom.createElementMorph(element7);
          return morphs;
        },
        statements: [
          ["inline","input",[],["value",["subexpr","@mut",[["get","item.name",["loc",[null,[19,56],[19,65]]]]],[],[]]],["loc",[null,[19,42],[19,67]]]],
          ["inline","input",[],["value",["subexpr","@mut",[["get","item.password",["loc",[null,[20,56],[20,69]]]]],[],[]]],["loc",[null,[20,42],[20,71]]]],
          ["block","power-select",[],["options",["subexpr","@mut",[["get","userRoles",["loc",[null,[22,36],[22,45]]]]],[],[]],"selected",["subexpr","@mut",[["get","item.role",["loc",[null,[22,55],[22,64]]]]],[],[]],"onchange",["subexpr","action",[["subexpr","mut",[["get","item.role",["loc",[null,[23,36],[23,45]]]]],[],["loc",[null,[23,31],[23,46]]]]],[],["loc",[null,[23,23],[23,47]]]]],0,null,["loc",[null,[22,12],[25,29]]]],
          ["inline","input",[],["value",["subexpr","@mut",[["get","item.location",["loc",[null,[27,56],[27,69]]]]],[],[]]],["loc",[null,[27,42],[27,71]]]],
          ["element","action",["saveItem",["get","item",["loc",[null,[29,69],[29,73]]]]],[],["loc",[null,[29,49],[29,75]]]],
          ["element","action",["deleteItem",["get","item",["loc",[null,[30,69],[30,73]]]]],[],["loc",[null,[30,47],[30,75]]]]
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
              "line": 33,
              "column": 6
            },
            "end": {
              "line": 46,
              "column": 6
            }
          },
          "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("       ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("***********");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","ui grey tiny button");
          var el4 = dom.createTextNode("EDIT");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","ui red tiny button");
          var el4 = dom.createTextNode("DELETE");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [9]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
          morphs[3] = dom.createElementMorph(element2);
          morphs[4] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [
          ["content","item.name",["loc",[null,[35,14],[35,27]]]],
          ["content","item.role",["loc",[null,[38,14],[38,27]]]],
          ["content","item.location",["loc",[null,[40,14],[40,31]]]],
          ["element","action",["editItem",["get","item",["loc",[null,[42,68],[42,72]]]]],[],["loc",[null,[42,48],[42,74]]]],
          ["element","action",["deleteItem",["get","item",["loc",[null,[43,69],[43,73]]]]],[],["loc",[null,[43,47],[43,75]]]]
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
            "line": 16,
            "column": 4
          },
          "end": {
            "line": 47,
            "column": 4
          }
        },
        "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
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
        ["block","if",[["subexpr","boolean-or",[["get","item.isNew",["loc",[null,[17,24],[17,34]]]],["get","item.isActive",["loc",[null,[17,35],[17,48]]]]],[],["loc",[null,[17,12],[17,49]]]]],[],0,1,["loc",[null,[17,6],[46,13]]]]
      ],
      locals: ["item"],
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
          "line": 54,
          "column": 0
        }
      },
      "moduleName": "groom-clients-ember/pods/users/manage-user-form/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Manage ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" list");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("table");
      dom.setAttribute(el1,"class","ui celled table");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("thead");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("th");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("tbody");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      dom.setAttribute(el4,"colspan","5");
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","ui green button");
      var el6 = dom.createTextNode("ADD");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("tfoot");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element8 = dom.childAt(fragment, [4]);
      var element9 = dom.childAt(element8, [3]);
      var element10 = dom.childAt(element9, [3, 1, 0]);
      var morphs = new Array(6);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element8, [1]),1,1);
      morphs[3] = dom.createMorphAt(element9,1,1);
      morphs[4] = dom.createAttrMorph(element10, 'disabled');
      morphs[5] = dom.createElementMorph(element10);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","confirmation-modal",[],["title","Delete a user","message","Please confirm that you want to delete a user"],["loc",[null,[1,0],[4,2]]]],
      ["content","modelName",["loc",[null,[6,11],[6,24]]]],
      ["block","each",[["get","attributes",["loc",[null,[10,12],[10,22]]]]],[],0,null,["loc",[null,[10,4],[12,13]]]],
      ["block","each",[["get","model",["loc",[null,[16,12],[16,17]]]]],[],1,null,["loc",[null,[16,4],[47,13]]]],
      ["attribute","disabled",["get","disableAddButton",["loc",[null,[49,65],[49,81]]]]],
      ["element","action",["addItem"],[],["loc",[null,[49,84],[49,104]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));