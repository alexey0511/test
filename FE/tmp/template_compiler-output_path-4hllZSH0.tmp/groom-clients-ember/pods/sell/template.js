export default Ember.HTMLBars.template((function() {
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
            "line": 31,
            "column": 12
          }
        },
        "moduleName": "groom-clients-ember/pods/sell/template.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element2, 'class');
        morphs[1] = dom.createMorphAt(element2,1,1);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["ui fluid  orange button ",["subexpr","if",[["get","item.isActive",["loc",[null,[28,53],[28,66]]]],"orange"],[],["loc",[null,[28,48],[28,77]]]]]]],
        ["content","option.name",["loc",[null,[29,14],[29,29]]]]
      ],
      locals: ["option"],
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
            "line": 128,
            "column": 12
          },
          "end": {
            "line": 137,
            "column": 12
          }
        },
        "moduleName": "groom-clients-ember/pods/sell/template.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tr");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        dom.setAttribute(el2,"class","five wide column");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        dom.setAttribute(el2,"class","five wide column");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        dom.setAttribute(el2,"class","three wide column");
        var el3 = dom.createTextNode("$ ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        dom.setAttribute(el2,"class","three wide column");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","ui button");
        var el4 = dom.createTextNode("Remove");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n              ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        morphs[3] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["content","haircut.product.name",["loc",[null,[130,46],[130,70]]]],
        ["content","haircut.barber.name",["loc",[null,[131,46],[131,69]]]],
        ["content","haircut.itemPrice",["loc",[null,[132,48],[132,69]]]],
        ["element","action",["removeItem",["get","haircut",["loc",[null,[134,65],[134,72]]]]],[],["loc",[null,[134,43],[134,74]]]]
      ],
      locals: ["haircut"],
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
          "line": 144,
          "column": 0
        }
      },
      "moduleName": "groom-clients-ember/pods/sell/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Sell");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ui grid");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","equal height row");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui shape");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","sides");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","active side");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment(" {{item-selection\n              items=listForClients\n              optionLabelPath=\"label\"\n              selection=selectedOptionClient\n              }} ");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","side");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","third side");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","ui segment");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("a");
      dom.setAttribute(el8,"href","#");
      var el9 = dom.createTextNode(" Back");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","fourth side");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","ui segment");
      dom.setAttribute(el7,"style","width:260px;height 240px;");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("a");
      dom.setAttribute(el8,"href","#");
      var el9 = dom.createTextNode("Back");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("div");
      var el9 = dom.createTextNode("\n                Casual Customer\n              ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui segment");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui centered grid");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","row");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","centered column");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("button");
      dom.setAttribute(el8,"class","ui massive fluid button");
      var el9 = dom.createTextNode("Eftpos");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","row");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","column");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("button");
      dom.setAttribute(el8,"class","ui massive fluid button");
      var el9 = dom.createTextNode("Add");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","row");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","column");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("button");
      dom.setAttribute(el8,"class","ui massive fluid button");
      var el9 = dom.createTextNode("Cash");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
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
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui divider");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui divider");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui divider");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui segment");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","#");
      var el6 = dom.createTextNode(" Back");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","four wide column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui segment");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
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
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui divider");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","column");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui segment");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui grid");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","row");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","eight wide column");
      var el8 = dom.createElement("h2");
      var el9 = dom.createComment("");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","seven wide right aligned column");
      var el8 = dom.createElement("h2");
      var el9 = dom.createTextNode("Total: $");
      dom.appendChild(el8, el9);
      var el9 = dom.createComment("");
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("  ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("table");
      dom.setAttribute(el5,"class","ui celled table");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("thead");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("tr");
      dom.setAttribute(el7,"class","row");
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      dom.setAttribute(el8,"class","five wide column");
      var el9 = dom.createTextNode("Name");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      dom.setAttribute(el8,"class","five wide column");
      var el9 = dom.createTextNode("Barber");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      dom.setAttribute(el8,"class","three wide column");
      var el9 = dom.createTextNode("Price");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("th");
      dom.setAttribute(el8,"class","three wide column");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n          ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("tbody");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
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
      var element3 = dom.childAt(fragment, [2]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element4, [5, 1, 1]);
      var element6 = dom.childAt(element5, [7, 1, 3]);
      var element7 = dom.childAt(element4, [7, 1, 1]);
      var element8 = dom.childAt(element7, [1, 1, 1]);
      var element9 = dom.childAt(element7, [3, 1, 1]);
      var element10 = dom.childAt(element7, [5, 1, 1]);
      var element11 = dom.childAt(element3, [9]);
      var element12 = dom.childAt(element3, [13, 1, 1]);
      var element13 = dom.childAt(element12, [1, 1]);
      var morphs = new Array(14);
      morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element5, [5, 1]),3,3);
      morphs[5] = dom.createAttrMorph(element6, 'class');
      morphs[6] = dom.createElementMorph(element8);
      morphs[7] = dom.createElementMorph(element9);
      morphs[8] = dom.createElementMorph(element10);
      morphs[9] = dom.createMorphAt(dom.childAt(element11, [3, 1]),3,3);
      morphs[10] = dom.createMorphAt(dom.childAt(element11, [5, 1]),1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element13, [1, 0]),0,0);
      morphs[12] = dom.createMorphAt(dom.childAt(element13, [3, 0]),1,1);
      morphs[13] = dom.createMorphAt(dom.childAt(element12, [3, 3]),1,1);
      return morphs;
    },
    statements: [
      ["inline","item-selection",[],["items",["subexpr","@mut",[["get","staffs",["loc",[null,[6,14],[6,20]]]]],[],[]],"optionLabelPath","name","selection",["subexpr","@mut",[["get","selectedBarber",["loc",[null,[8,18],[8,32]]]]],[],[]]],["loc",[null,[5,6],[9,8]]]],
      ["inline","item-selection",[],["items",["subexpr","@mut",[["get","products",["loc",[null,[13,14],[13,22]]]]],[],[]],"optionLabelPath","label","selection",["subexpr","@mut",[["get","selectedProduct",["loc",[null,[15,18],[15,33]]]]],[],[]]],["loc",[null,[12,6],[16,8]]]],
      ["block","power-select",[],["options",["subexpr","@mut",[["get","listForClients",["loc",[null,[23,22],[23,36]]]]],[],[]],"onchange",["subexpr","action",["test"],[],["loc",[null,[24,23],[24,38]]]],"class","four wide column"],0,null,["loc",[null,[22,12],[31,29]]]],
      ["content","sell/select-client",["loc",[null,[40,12],[40,34]]]],
      ["inline","sell/small-client-new-form",[],["model",["subexpr","@mut",[["get","newClient",["loc",[null,[46,22],[46,31]]]]],[],[]],"confirmSuccess",["subexpr","action",["onCreateNewClient"],[],["loc",[null,[47,31],[47,59]]]],"resetRecord",["subexpr","action",["resetNewClientForm"],[],["loc",[null,[48,28],[48,57]]]]],["loc",[null,[45,14],[49,18]]]],
      ["attribute","class",["concat",["ui fluid huge orange button ",["subexpr","if",[["get","item.isActive",["loc",[null,[55,59],[55,72]]]],"orange"],[],["loc",[null,[55,54],[55,83]]]]]]],
      ["element","action",["saveOrder","eftpos"],[],["loc",[null,[69,54],[69,85]]]],
      ["element","action",["addItem"],[],["loc",[null,[74,54],[74,74]]]],
      ["element","action",["saveOrder","cash"],[],["loc",[null,[79,54],[79,83]]]],
      ["inline","sell/small-client-new-form",[],["model",["subexpr","@mut",[["get","newClient",["loc",[null,[96,16],[96,25]]]]],[],[]],"confirmSuccess",["subexpr","action",["onCreateNewClient"],[],["loc",[null,[97,25],[97,53]]]],"resetRecord",["subexpr","action",["resetNewClientForm"],[],["loc",[null,[98,22],[98,51]]]]],["loc",[null,[95,8],[99,12]]]],
      ["content","sell/select-client",["loc",[null,[104,8],[104,30]]]],
      ["content","model.clientName",["loc",[null,[114,45],[114,65]]]],
      ["content","model.totalPrice",["loc",[null,[115,67],[115,87]]]],
      ["block","each",[["get","model.lineItems",["loc",[null,[128,20],[128,35]]]]],[],1,null,["loc",[null,[128,12],[137,21]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));