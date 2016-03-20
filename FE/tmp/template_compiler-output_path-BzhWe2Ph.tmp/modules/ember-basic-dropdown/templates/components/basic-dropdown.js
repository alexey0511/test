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
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 18,
              "column": 2
            }
          },
          "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
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
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'dir');
          morphs[2] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["ember-basic-dropdown-content ",["get","dropdownClass",["loc",[null,[15,47],[15,60]]]]," ",["get","_verticalPositionClass",["loc",[null,[15,65],[15,87]]]]," ",["get","_horizontalPositionClass",["loc",[null,[15,92],[15,116]]]]]]],
          ["attribute","dir",["get","dir",["loc",[null,[15,126],[15,129]]]]],
          ["inline","yield",[["get","publicAPI",["loc",[null,[16,14],[16,23]]]]],[],["loc",[null,[16,6],[16,25]]]]
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
            "line": 13,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
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
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","_wormholeDestination",["loc",[null,[14,23],[14,43]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[14,58],[14,71]]]]],[],[]]],0,null,["loc",[null,[14,2],[18,21]]]]
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
          "multiple-nodes",
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
          "line": 20,
          "column": 0
        }
      },
      "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element1 = dom.childAt(fragment, [0]);
      var morphs = new Array(12);
      morphs[0] = dom.createAttrMorph(element1, 'class');
      morphs[1] = dom.createAttrMorph(element1, 'tabindex');
      morphs[2] = dom.createAttrMorph(element1, 'role');
      morphs[3] = dom.createAttrMorph(element1, 'aria-labelledby');
      morphs[4] = dom.createAttrMorph(element1, 'aria-describedby');
      morphs[5] = dom.createAttrMorph(element1, 'aria-required');
      morphs[6] = dom.createAttrMorph(element1, 'aria-invalid');
      morphs[7] = dom.createAttrMorph(element1, 'onkeydown');
      morphs[8] = dom.createAttrMorph(element1, 'onmousedown');
      morphs[9] = dom.createAttrMorph(element1, 'onfocus');
      morphs[10] = dom.createMorphAt(element1,1,1);
      morphs[11] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["ember-basic-dropdown-trigger ",["get","triggerClass",["loc",[null,[1,43],[1,55]]]]]]],
      ["attribute","tabindex",["get","tabIndex",["loc",[null,[2,16],[2,24]]]]],
      ["attribute","role",["get","role",["loc",[null,[3,12],[3,16]]]]],
      ["attribute","aria-labelledby",["get","ariaLabelledBy",["loc",[null,[4,23],[4,37]]]]],
      ["attribute","aria-describedby",["get","ariaDescribedBy",["loc",[null,[5,24],[5,39]]]]],
      ["attribute","aria-required",["get","ariaRequired",["loc",[null,[6,21],[6,33]]]]],
      ["attribute","aria-invalid",["get","ariaInvalid",["loc",[null,[7,20],[7,31]]]]],
      ["attribute","onkeydown",["subexpr","action",["keydown"],[],["loc",[null,[8,15],[8,35]]]]],
      ["attribute","onmousedown",["subexpr","action",["toggle"],[],["loc",[null,[9,17],[9,36]]]]],
      ["attribute","onfocus",["subexpr","action",["focusTrigger"],[],["loc",[null,[10,13],[10,38]]]]],
      ["inline","yield",[],["to","inverse"],["loc",[null,[11,2],[11,24]]]],
      ["block","if",[["get","opened",["loc",[null,[13,6],[13,12]]]]],[],0,null,["loc",[null,[13,0],[19,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));