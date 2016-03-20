define("groom-clients-ember/pods/haircuts/haircut-list-row-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          },
          "moduleName": "groom-clients-ember/pods/haircuts/haircut-list-row-component/template.hbs"
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
          dom.setAttribute(el1, "class", "ui button");
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
        statements: [["element", "action", ["openRecord", ["get", "model", ["loc", [null, [11, 52], [11, 57]]]]], [], ["loc", [null, [11, 30], [11, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/haircuts/haircut-list-row-component/template.hbs"
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
        dom.setAttribute(el1, "class", "center aligned");
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
        dom.setAttribute(el1, "class", "center aligned");
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
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [8]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [10]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [12]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [14]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [16]), 1, 1);
        return morphs;
      },
      statements: [["inline", "moment-format", [["get", "model.itemDate", ["loc", [null, [1, 20], [1, 34]]]], "DD MMMM YYYY HH:MM"], [], ["loc", [null, [1, 4], [1, 57]]]], ["content", "model.itemClient.fullName", ["loc", [null, [2, 4], [2, 33]]]], ["content", "model.barber.name", ["loc", [null, [3, 4], [3, 25]]]], ["content", "model.product.name", ["loc", [null, [4, 4], [4, 26]]]], ["inline", "format-currency", [["get", "model.itemPrice", ["loc", [null, [5, 45], [5, 60]]]]], [], ["loc", [null, [5, 27], [5, 62]]]], ["content", "model.itemPaymentType", ["loc", [null, [6, 4], [6, 29]]]], ["content", "model.order.id", ["loc", [null, [7, 27], [7, 45]]]], ["content", "model.itemUser.location", ["loc", [null, [8, 4], [8, 31]]]], ["block", "if", [["get", "adminUser", ["loc", [null, [10, 8], [10, 17]]]]], [], 0, null, ["loc", [null, [10, 2], [12, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});