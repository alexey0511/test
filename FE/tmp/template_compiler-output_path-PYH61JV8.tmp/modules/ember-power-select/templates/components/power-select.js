export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
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
                "line": 19,
                "column": 6
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1,"class","ember-power-select-options");
            dom.setAttribute(el1,"role","listbox");
            var el2 = dom.createElement("li");
            dom.setAttribute(el2,"class","ember-power-select-option");
            dom.setAttribute(el2,"role","option");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]),0,0);
            return morphs;
          },
          statements: [
            ["content","searchMessage",["loc",[null,[18,114],[18,131]]]]
          ],
          locals: [],
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
                    "line": 20,
                    "column": 8
                  },
                  "end": {
                    "line": 22,
                    "column": 8
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
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
                ["inline","yield",[],["to","inverse"],["loc",[null,[21,10],[21,32]]]]
              ],
              locals: [],
              templates: []
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
                      "line": 22,
                      "column": 8
                    },
                    "end": {
                      "line": 24,
                      "column": 8
                    }
                  },
                  "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("ul");
                  dom.setAttribute(el1,"class","ember-power-select-options");
                  dom.setAttribute(el1,"role","listbox");
                  var el2 = dom.createElement("li");
                  dom.setAttribute(el2,"class","ember-power-select-option");
                  dom.setAttribute(el2,"role","option");
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n        ");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]),0,0);
                  return morphs;
                },
                statements: [
                  ["content","noMatchesMessage",["loc",[null,[23,116],[23,136]]]]
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
                    "line": 22,
                    "column": 8
                  },
                  "end": {
                    "line": 24,
                    "column": 8
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
                ["block","if",[["get","noMatchesMessage",["loc",[null,[22,18],[22,34]]]]],[],0,null,["loc",[null,[22,8],[24,8]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 6
                },
                "end": {
                  "line": 25,
                  "column": 6
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
              ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[20,14],[20,34]]]]],[],0,1,["loc",[null,[20,8],[24,15]]]]
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
                    "line": 26,
                    "column": 8
                  },
                  "end": {
                    "line": 31,
                    "column": 8
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 2,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
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
                ["inline","yield",[["get","option",["loc",[null,[30,18],[30,24]]]],["get","term",["loc",[null,[30,25],[30,29]]]]],[],["loc",[null,[30,10],[30,31]]]]
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
                  "line": 25,
                  "column": 6
                },
                "end": {
                  "line": 32,
                  "column": 6
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("      ");
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
              ["block","component",[["get","optionsComponent",["loc",[null,[26,21],[26,37]]]]],["options",["subexpr","readonly",[["get","results",["loc",[null,[26,56],[26,63]]]]],[],["loc",[null,[26,46],[26,64]]]],"loading",["subexpr","readonly",[["get","loading",["loc",[null,[26,83],[26,90]]]]],[],["loc",[null,[26,73],[26,91]]]],"allOptions",["subexpr","readonly",[["get","results",["loc",[null,[26,113],[26,120]]]]],[],["loc",[null,[26,103],[26,121]]]],"highlighted",["subexpr","readonly",[["get","highlighted",["loc",[null,[26,144],[26,155]]]]],[],["loc",[null,[26,134],[26,156]]]],"selected",["subexpr","readonly",[["get","selected",["loc",[null,[27,29],[27,37]]]]],[],["loc",[null,[27,19],[27,38]]]],"optionsComponent",["subexpr","readonly",[["get","optionsComponent",["loc",[null,[27,66],[27,82]]]]],[],["loc",[null,[27,56],[27,83]]]],"searchText",["subexpr","readonly",[["get","searchText",["loc",[null,[27,105],[27,115]]]]],[],["loc",[null,[27,95],[27,116]]]],"lastSearchedText",["subexpr","readonly",[["get","lastSearchedText",["loc",[null,[27,144],[27,160]]]]],[],["loc",[null,[27,134],[27,161]]]],"select",["subexpr","readonly",[["get","select",["loc",[null,[28,27],[28,33]]]]],[],["loc",[null,[28,17],[28,34]]]],"extra",["subexpr","readonly",[["get","extra",["loc",[null,[28,51],[28,56]]]]],[],["loc",[null,[28,41],[28,57]]]],"loadingMessage",["subexpr","readonly",[["get","loadingMessage",["loc",[null,[28,83],[28,97]]]]],[],["loc",[null,[28,73],[28,98]]]],"class","ember-power-select-options"],0,null,["loc",[null,[26,8],[31,22]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 6
              },
              "end": {
                "line": 32,
                "column": 6
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
            ["block","if",[["get","mustShowNoMessages",["loc",[null,[19,16],[19,34]]]]],[],0,1,["loc",[null,[19,6],[32,6]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 34,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","component",[["get","beforeOptionsComponent",["loc",[null,[16,18],[16,40]]]]],["onkeydown",["subexpr","readonly",[["get","onkeydown",["loc",[null,[16,61],[16,70]]]]],[],["loc",[null,[16,51],[16,71]]]],"select",["subexpr","readonly",[["get","select",["loc",[null,[16,89],[16,95]]]]],[],["loc",[null,[16,79],[16,96]]]],"searchPlaceholder",["subexpr","readonly",[["get","searchPlaceholder",["loc",[null,[16,125],[16,142]]]]],[],["loc",[null,[16,115],[16,143]]]],"searchEnabled",["subexpr","readonly",[["get","searchEnabled",["loc",[null,[16,168],[16,181]]]]],[],["loc",[null,[16,158],[16,182]]]],"highlighted",["subexpr","readonly",[["get","highlighted",["loc",[null,[16,205],[16,216]]]]],[],["loc",[null,[16,195],[16,217]]]]],["loc",[null,[16,6],[16,219]]]],
          ["block","if",[["get","mustShowSearchMessage",["loc",[null,[17,12],[17,33]]]]],[],0,1,["loc",[null,[17,6],[32,13]]]],
          ["inline","component",[["get","afterOptionsComponent",["loc",[null,[33,18],[33,39]]]]],["select",["subexpr","readonly",[["get","select",["loc",[null,[33,57],[33,63]]]]],[],["loc",[null,[33,47],[33,64]]]],"searchPlaceholder",["subexpr","readonly",[["get","searchPlaceholder",["loc",[null,[33,93],[33,110]]]]],[],["loc",[null,[33,83],[33,111]]]],"searchEnabled",["subexpr","readonly",[["get","searchEnabled",["loc",[null,[33,136],[33,149]]]]],[],["loc",[null,[33,126],[33,150]]]]],["loc",[null,[33,6],[33,152]]]]
        ],
        locals: ["select"],
        templates: [child0, child1]
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
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
        ["block","with",[["subexpr","hash",[],["isOpen",["get","dropdown.isOpen",["loc",[null,[5,11],[5,26]]]],"actions",["subexpr","hash",[],["open",["get","dropdown.actions.open",["loc",[null,[7,11],[7,32]]]],"close",["get","dropdown.actions.close",["loc",[null,[8,12],[8,34]]]],"reposition",["get","dropdown.actions.reposition",["loc",[null,[9,17],[9,44]]]],"choose",["subexpr","action",["choose",["get","dropdown",["loc",[null,[10,30],[10,38]]]]],[],["loc",[null,[10,13],[10,39]]]],"select",["subexpr","action",["select",["get","dropdown",["loc",[null,[11,30],[11,38]]]]],[],["loc",[null,[11,13],[11,39]]]],"highlight",["subexpr","action",["highlight",["get","dropdown",["loc",[null,[12,36],[12,44]]]]],[],["loc",[null,[12,16],[12,45]]]],"search",["subexpr","action",["search",["get","dropdown",["loc",[null,[13,30],[13,38]]]]],[],["loc",[null,[13,13],[13,39]]]],"handleKeydown",["subexpr","action",["handleKeydown",["get","dropdown",["loc",[null,[14,44],[14,52]]]]],[],["loc",[null,[14,20],[14,53]]]]],["loc",[null,[6,12],[15,5]]]]],["loc",[null,[4,10],[15,6]]]]],[],0,null,["loc",[null,[4,2],[34,11]]]]
      ],
      locals: ["dropdown"],
      templates: [child0]
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
                "line": 48,
                "column": 4
              },
              "end": {
                "line": 53,
                "column": 4
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
            ["inline","yield",[["get","opt",["loc",[null,[52,14],[52,17]]]],["get","term",["loc",[null,[52,18],[52,22]]]]],[],["loc",[null,[52,6],[52,24]]]]
          ],
          locals: ["opt","term"],
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
              "line": 36,
              "column": 2
            },
            "end": {
              "line": 54,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
          ["block","component",[["get","triggerComponent",["loc",[null,[48,17],[48,33]]]]],["options",["subexpr","readonly",[["get","results",["loc",[null,[48,52],[48,59]]]]],[],["loc",[null,[48,42],[48,60]]]],"selected",["subexpr","readonly",[["get","selected",["loc",[null,[48,80],[48,88]]]]],[],["loc",[null,[48,70],[48,89]]]],"searchText",["subexpr","readonly",[["get","searchText",["loc",[null,[48,111],[48,121]]]]],[],["loc",[null,[48,101],[48,122]]]],"lastSearchedText",["subexpr","readonly",[["get","lastSearchedText",["loc",[null,[48,150],[48,166]]]]],[],["loc",[null,[48,140],[48,167]]]],"placeholder",["subexpr","readonly",[["get","placeholder",["loc",[null,[49,28],[49,39]]]]],[],["loc",[null,[49,18],[49,40]]]],"disabled",["subexpr","readonly",[["get","disabled",["loc",[null,[49,60],[49,68]]]]],[],["loc",[null,[49,50],[49,69]]]],"highlighted",["subexpr","readonly",[["get","highlighted",["loc",[null,[49,92],[49,103]]]]],[],["loc",[null,[49,82],[49,104]]]],"allowClear",["subexpr","readonly",[["get","allowClear",["loc",[null,[49,126],[49,136]]]]],[],["loc",[null,[49,116],[49,137]]]],"select",["subexpr","readonly",[["get","select",["loc",[null,[50,23],[50,29]]]]],[],["loc",[null,[50,13],[50,30]]]],"extra",["subexpr","readonly",[["get","extra",["loc",[null,[50,47],[50,52]]]]],[],["loc",[null,[50,37],[50,53]]]],"onkeydown",["subexpr","readonly",[["get","onkeydown",["loc",[null,[50,74],[50,83]]]]],[],["loc",[null,[50,64],[50,84]]]],"selectedItemComponent",["subexpr","readonly",[["get","selectedItemComponent",["loc",[null,[51,38],[51,59]]]]],[],["loc",[null,[51,28],[51,60]]]],"searchField",["subexpr","readonly",[["get","searchField",["loc",[null,[51,83],[51,94]]]]],[],["loc",[null,[51,73],[51,95]]]]],0,null,["loc",[null,[48,4],[53,18]]]]
        ],
        locals: ["select"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 35,
            "column": 0
          },
          "end": {
            "line": 55,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
        ["block","with",[["subexpr","hash",[],["isOpen",["get","registeredDropdown.isOpen",["loc",[null,[37,11],[37,36]]]],"actions",["subexpr","hash",[],["open",["get","registeredDropdown.actions.open",["loc",[null,[39,11],[39,42]]]],"close",["get","registeredDropdown.actions.close",["loc",[null,[40,12],[40,44]]]],"reposition",["get","registeredDropdown.actions.reposition",["loc",[null,[41,17],[41,54]]]],"choose",["subexpr","action",["choose",["get","registeredDropdown",["loc",[null,[42,30],[42,48]]]]],[],["loc",[null,[42,13],[42,49]]]],"select",["subexpr","action",["select",["get","registeredDropdown",["loc",[null,[43,30],[43,48]]]]],[],["loc",[null,[43,13],[43,49]]]],"highlight",["subexpr","action",["highlight",["get","registeredDropdown",["loc",[null,[44,36],[44,54]]]]],[],["loc",[null,[44,16],[44,55]]]],"search",["subexpr","action",["search",["get","registeredDropdown",["loc",[null,[45,30],[45,48]]]]],[],["loc",[null,[45,13],[45,49]]]],"handleKeydown",["subexpr","action",["handleKeydown",["get","registeredDropdown",["loc",[null,[46,44],[46,62]]]]],[],["loc",[null,[46,20],[46,63]]]]],["loc",[null,[38,12],[47,5]]]]],["loc",[null,[36,10],[47,6]]]]],[],0,null,["loc",[null,[36,2],[54,11]]]]
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
          "line": 55,
          "column": 19
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
      ["block","basic-dropdown",[],["class",["subexpr","readonly",[["get","concatenatedClasses",["loc",[null,[1,34],[1,53]]]]],[],["loc",[null,[1,24],[1,54]]]],"dir",["subexpr","readonly",[["get","dir",["loc",[null,[1,69],[1,72]]]]],[],["loc",[null,[1,59],[1,73]]]],"tabindex",["subexpr","readonly",[["get","tabindex",["loc",[null,[1,93],[1,101]]]]],[],["loc",[null,[1,83],[1,102]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[1,127],[1,140]]]]],[],["loc",[null,[1,117],[1,141]]]],"matchTriggerWidth",true,"disabled",["subexpr","readonly",[["get","disabled",["loc",[null,[2,21],[2,29]]]]],[],["loc",[null,[2,11],[2,30]]]],"verticalPosition",["subexpr","readonly",[["get","verticalPosition",["loc",[null,[2,58],[2,74]]]]],[],["loc",[null,[2,48],[2,75]]]],"triggerClass",["subexpr","readonly",[["get","concatenatedTriggerClasses",["loc",[null,[2,99],[2,125]]]]],[],["loc",[null,[2,89],[2,126]]]],"dropdownClass",["subexpr","readonly",[["get","concatenatedDropdownClasses",["loc",[null,[2,151],[2,178]]]]],[],["loc",[null,[2,141],[2,179]]]],"opened",["subexpr","@mut",[["get","opened",["loc",[null,[3,9],[3,15]]]]],[],[]],"onOpen",["subexpr","action",["handleOpen"],[],["loc",[null,[3,23],[3,44]]]],"onClose",["subexpr","action",["handleClose"],[],["loc",[null,[3,53],[3,75]]]],"onFocus",["subexpr","action",["handleFocus"],[],["loc",[null,[3,84],[3,106]]]],"onKeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[3,117],[3,141]]]],"registerActionsInParent",["subexpr","action",["registerDropdown"],[],["loc",[null,[3,166],[3,193]]]]],0,1,["loc",[null,[1,0],[55,19]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));