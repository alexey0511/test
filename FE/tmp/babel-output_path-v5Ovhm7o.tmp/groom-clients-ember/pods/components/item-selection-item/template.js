define("groom-clients-ember/pods/components/item-selection-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "groom-clients-ember/pods/components/item-selection-item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ui fluid huge button ", ["subexpr", "if", [["get", "item.isActive", ["loc", [null, [1, 38], [1, 51]]]], "orange"], [], ["loc", [null, [1, 33], [1, 62]]]]]]], ["element", "action", ["makeActive"], [], ["loc", [null, [1, 64], [1, 87]]]], ["inline", "get", [["get", "item", ["loc", [null, [2, 8], [2, 12]]]], ["subexpr", "mut", [["get", "optionLabelPath", ["loc", [null, [2, 18], [2, 33]]]]], [], ["loc", [null, [2, 13], [2, 34]]]]], [], ["loc", [null, [2, 2], [2, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});