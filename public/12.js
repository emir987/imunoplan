(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalVisible: false,
      recipe_id: 0,
      ingredients_data: [],
      recipe: {},
      nutrients: [],
      pushArray: [],
      printFirstTime: true,
      loader: false,
      servingSizeModel: 0,
      servingSizeValue: 0,
      ingredients_quantity: [],
      ingredients_separate: []
    };
  },
  created: function created() {
    var _this = this;

    Event.$on("openModal", function (modalVisible, recipe_id, recipe_additional) {
      _this.loader = true;
      _this.modalVisible = modalVisible;
      _this.recipeProp = recipe;
      axios.get("api/recipe/".concat(recipe_id)).then(function (response) {
        setTimeout(function () {
          _this.recipe = response.data;
          _this.recipe.totalProteins = recipe_additional.proteins;
          _this.recipe.calories = recipe_additional.calories;
          _this.recipe.totalFats = recipe_additional.fats;
          _this.recipe.totalVitamins = recipe_additional.vitamins;
          _this.recipe.totalMinerals = recipe_additional.minerals;
          _this.recipe.totalCarbs = recipe_additional.carbs;
          _this.servingSizeModel = response.data.serving_size;
          _this.servingSizeValue = response.data.serving_size;

          _this.groupByNutrients(_this.recipe.ingredients);

          _this.loader = false;
        }, 200);
      });
      $("#recipe").modal("show");
    });
  },
  methods: {
    quantityNative: function quantityNative(quantity) {
      return parseFloat(parseFloat(quantity).toFixed(1));
    },
    seeMore: function seeMore(e, elementID) {
      this.superToggle(e.target, "fa-caret-up", "fa-caret-down");
      this.$refs[elementID].classList.toggle("expanded");
    },
    superToggle: function superToggle(element, class0, class1) {
      element.classList.toggle(class0);
      element.classList.toggle(class1);
    },
    changeServingSize: function changeServingSize() {
      var _this2 = this;

      this.recipe.ingredients.map(function (ingredient) {
        return (ingredient.quantity = parseFloat(ingredient.quantity / _this2.servingSizeValue) * _this2.servingSizeModel).toFixed(1);
      });
      this.servingSizeValue = this.servingSizeModel;
    },
    parseFloatFixed: function parseFloatFixed(number) {
      return parseFloat(parseFloat(number).toFixed(3));
    },
    parseFloatCustom: function parseFloatCustom() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return parseFloat(number.toFixed(3));
    },
    sumValue: function sumValue(nutrients) {
      var sum = 0;
      var unit = "gr";

      var _iterator = _createForOfIteratorHelper(nutrients),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var nutrient = _step.value;
          var nutrientQuantity = nutrient.quantity;

          if (nutrient.unit == "MG") {
            sum += Number(nutrientQuantity / 1000);
          } else if (nutrient.unit == "UG") {
            sum += Number(nutrientQuantity / 1000000);
          } else {
            sum += Number(nutrientQuantity);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (sum < 0.001) {
        sum = sum * 1000000;
        unit = "µg";
      } else if (sum < 0.1) {
        sum = sum * 1000;
        unit = "mg";
      }

      var fixedAmount = parseFloat(sum.toFixed(3));
      return fixedAmount + " " + unit;
    },
    measure_name: function measure_name(measure, ingredient) {
      return measure == "jedinicno" ? "<img width=15px height=15px src=\"".concat(ingredient, "\">") : measure;
    },
    printWindow: function printWindow() {
      setTimeout(function () {
        window.print();
      }, 1000);
    },
    groupByNutrients: function groupByNutrients(ingredients) {
      var allNutrients = [];
      var group = {};

      var _iterator2 = _createForOfIteratorHelper(ingredients),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ingredient = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(ingredient.nutrients),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var nutrient = _step3.value;
              allNutrients.push(nutrient);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      group = allNutrients.reduce(function (acc, obj) {
        var key0 = obj["type"];
        var group0 = acc[key0] || {};
        var key1 = obj["name"];
        var group1 = group0[key1] || [];
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key0, _objectSpread(_objectSpread({}, group0), {}, _defineProperty({}, key1, [].concat(_toConsumableArray(group1), [obj])))));
      }, {});
      this.nutrients = group;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        tabindex: " -1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        id: "recipe"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c(
          "div",
          {
            staticClass: "modal-content modal-print",
            attrs: { id: "modal-content" }
          },
          [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h4",
                {
                  staticClass: "modal-title margin-auto w-100 text-center",
                  attrs: { id: "exampleModalLabel" }
                },
                [
                  _vm._v(
                    "\n          " + _vm._s(_vm.recipe.name) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body position-relative" }, [
              _c("div", { staticClass: "d-lg-none text-center mb-4" }, [
                _c("img", {
                  staticClass: "recipe-img",
                  attrs: { src: _vm.recipe.photo, alt: "", srcset: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "mb-3 d-lg-none col-md-6 col-sm-10 col-xs-11 mx-auto mb-3"
                },
                [
                  _c("div", { staticClass: "d-flex justify-content-around" }, [
                    _c("div", { staticClass: "prep" }, [
                      _c("img", {
                        attrs: {
                          src: "/assets/recipes/prepare-man.svg",
                          alt: "",
                          srcset: ""
                        }
                      }),
                      _c("span", [_vm._v(_vm._s(_vm.recipe.prepare) + " min")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "cook" }, [
                      _c("img", {
                        attrs: {
                          src: "/assets/recipes/cook.svg",
                          alt: "",
                          srcset: ""
                        }
                      }),
                      _c("span", [_vm._v(_vm._s(_vm.recipe.cook) + " min")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "serve" }, [
                      _c("img", {
                        attrs: {
                          src: "/assets/recipes/serve.svg",
                          alt: "",
                          srcset: ""
                        }
                      }),
                      _c("span", [
                        _vm._v(_vm._s(_vm.recipe.serving_size) + " ljudi")
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row justify-space-beetwen position-relative" },
                [
                  _c("div", { class: { lds_dual_ring: _vm.loader } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-8 px-4" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-lg-6 col-md-5 col-sm-8 col-xs-10 col-11 mx-auto mb-4"
                        },
                        [
                          _c("div", { staticClass: "change-serving-size" }, [
                            _c("span", [_vm._v("Porcija za:")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.servingSizeModel,
                                  expression: "servingSizeModel"
                                }
                              ],
                              attrs: { type: "number" },
                              domProps: { value: _vm.servingSizeModel },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.servingSizeModel = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "button-green",
                                staticStyle: { "font-size": "14px" },
                                on: {
                                  click: function($event) {
                                    return _vm.changeServingSize()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    Promijeni\n                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _vm._l(_vm.recipe.ingredients, function(
                            ingredient,
                            i
                          ) {
                            return _c(
                              "div",
                              {
                                key: i,
                                staticClass: "ingredients-quantity-content"
                              },
                              [
                                _c("div", [
                                  _c("img", {
                                    attrs: { src: ingredient.photo, alt: "" }
                                  }),
                                  _c("span", { staticClass: "pl-2" }, [
                                    _vm._v(_vm._s(ingredient.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "quantity d-flex" }, [
                                  ingredient.measure_name != "gr"
                                    ? _c("div", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              _vm.quantityNative(
                                                ingredient.quantity
                                              )
                                            ) +
                                            "\n                      "
                                        ),
                                        _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.measure_name(
                                                ingredient.measure_name,
                                                ingredient.photo
                                              )
                                            )
                                          }
                                        }),
                                        _c("span", { staticClass: "px-2" }, [
                                          _vm._v("-")
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(
                                        parseFloat(
                                          (
                                            parseFloat(ingredient.quantity) *
                                            parseFloat(ingredient.measure_grams)
                                          ).toFixed(1)
                                        )
                                      ) +
                                      "g\n                  "
                                  )
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "description mb-4",
                      domProps: { innerHTML: _vm._s(_vm.recipe.description) }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-4 pr-4 pl-5 right print-before" },
                    [
                      _c("div", { staticClass: "d-lg-block d-none" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-around mb-3" },
                          [
                            _c("div", { staticClass: "prep" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/recipes/prepare-man.svg",
                                  alt: "",
                                  srcset: ""
                                }
                              }),
                              _c("span", [
                                _vm._v(_vm._s(_vm.recipe.prepare) + " min")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "cook" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/recipes/cook.svg",
                                  alt: "",
                                  srcset: ""
                                }
                              }),
                              _c("span", [
                                _vm._v(_vm._s(_vm.recipe.cook) + " min")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "serve" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/recipes/serve.svg",
                                  alt: "",
                                  srcset: ""
                                }
                              }),
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.recipe.serving_size) + " ljudi"
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "recipe-img mb-5 d-lg-block d-none",
                        attrs: { src: _vm.recipe.photo, alt: "", srcset: "" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            ref: "graph",
                            staticClass:
                              "graph col-sm-6 col-6 mx-auto col-md-6 col-lg-12 d-flex justify-content-center"
                          },
                          [
                            _c("pie-chart", {
                              attrs: {
                                data: [
                                  [
                                    "Ugljeni hidrati",
                                    _vm.parseFloatCustom(_vm.recipe.uh_recipe)
                                  ],
                                  [
                                    "Masti",
                                    _vm.parseFloatCustom(_vm.recipe.totalFats)
                                  ],
                                  [
                                    "Proteini",
                                    _vm.parseFloatCustom(
                                      _vm.recipe.totalProteins
                                    )
                                  ]
                                ]
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-5 col-md-6 col-lg-12" }, [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Kalorije:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.recipe.calories) + "g")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Proteini:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.parseFloatCustom(
                                      _vm.recipe.totalProteins
                                    )
                                  ) + "g"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Ugljeni hidrati:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.parseFloatCustom(_vm.recipe.totalCarbs)
                                  ) + "g"
                                )
                              ]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-caret-down",
                                on: {
                                  click: function($event) {
                                    return _vm.seeMore($event, "carbs")
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.nutrients["Ugljeni hidrati"] != undefined
                            ? _c(
                                "div",
                                { ref: "carbs", staticClass: "carbs" },
                                _vm._l(
                                  _vm.nutrients["Ugljeni hidrati"],
                                  function(name, i) {
                                    return _c(
                                      "div",
                                      {
                                        key: i,
                                        staticClass:
                                          "d-flex justify-content-between"
                                      },
                                      [
                                        i !== "Ugljeni hidrati"
                                          ? _c("div", [_vm._v(_vm._s(i))])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        i !== "Ugljeni hidrati"
                                          ? _c("div", [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(_vm.sumValue(name)) +
                                                  "\n                    "
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  }
                                ),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.nutrients["Šećeri"] != undefined
                            ? _c(
                                "div",
                                _vm._l(_vm.nutrients["Šećeri"], function(
                                  obj,
                                  i
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: i,
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(i))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.sumValue(obj)))
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Vitamini:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.parseFloatCustom(
                                      _vm.recipe.totalVitamins
                                    )
                                  ) + "g"
                                )
                              ]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-caret-down",
                                on: {
                                  click: function($event) {
                                    return _vm.seeMore($event, "vitamins")
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.nutrients["Vitamini"] != undefined
                            ? _c(
                                "div",
                                { ref: "vitamins", staticClass: "vitamins" },
                                _vm._l(_vm.nutrients["Vitamini"], function(
                                  name,
                                  i
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: i,
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(i))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.sumValue(name)))
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Minerali:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.parseFloatCustom(
                                      _vm.recipe.totalMinerals
                                    )
                                  ) + "g"
                                )
                              ]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-caret-down",
                                on: {
                                  click: function($event) {
                                    return _vm.seeMore($event, "minerals")
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.nutrients["Minerali"] != undefined
                            ? _c(
                                "div",
                                { ref: "minerals", staticClass: "minerals" },
                                _vm._l(_vm.nutrients["Minerali"], function(
                                  name,
                                  i
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: i,
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(i))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.sumValue(name)))
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Masti:")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.parseFloatCustom(_vm.recipe.totalLipids)
                                  ) + "g"
                                )
                              ]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-caret-down",
                                on: {
                                  click: function($event) {
                                    return _vm.seeMore($event, "lipids")
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.nutrients["Lipidi"] != undefined
                            ? _c(
                                "div",
                                { ref: "lipids", staticClass: "lipids" },
                                _vm._l(_vm.nutrients["Lipidi"], function(
                                  name,
                                  i
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: i,
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(i))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.sumValue(name)))
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.nutrients["Vlakna"] != undefined
                            ? _c(
                                "div",
                                _vm._l(_vm.nutrients["Vlakna"], function(
                                  name,
                                  i
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: i,
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("div", [_vm._v(_vm._s(i))]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.sumValue(name)))
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between main-nutrient"
                            },
                            [
                              _c("div", [_vm._v("Ostalo:")]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-caret-down",
                                on: {
                                  click: function($event) {
                                    return _vm.seeMore($event, "otherNutrients")
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              ref: "otherNutrients",
                              staticClass: "other-nutrients"
                            },
                            [
                              _vm.nutrients["Alkohol"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(_vm.nutrients["Alkohol"], function(
                                      name,
                                      i
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: i,
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c("div", [_vm._v(_vm._s(i))]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _vm._v(_vm._s(_vm.sumValue(name)))
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.nutrients["Karotenoidi"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(
                                      _vm.nutrients["Karotenoidi"],
                                      function(name, i) {
                                        return _c(
                                          "div",
                                          {
                                            key: i,
                                            staticClass:
                                              "d-flex justify-content-between"
                                          },
                                          [
                                            _c("div", [_vm._v(_vm._s(i))]),
                                            _vm._v(" "),
                                            _c("div", [
                                              _vm._v(_vm._s(_vm.sumValue(name)))
                                            ])
                                          ]
                                        )
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.nutrients["Kiseline"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(_vm.nutrients["Kiseline"], function(
                                      name,
                                      i
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: i,
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c("div", [_vm._v(_vm._s(i))]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _vm._v(_vm._s(_vm.sumValue(name)))
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.nutrients["no"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(_vm.nutrients["no"], function(
                                      name,
                                      i
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: i,
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          i !== "Voda"
                                            ? _c("div", [_vm._v(_vm._s(i))])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          i !== "Voda"
                                            ? _c("div", [
                                                _vm._v(
                                                  _vm._s(_vm.sumValue(name))
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.nutrients["kofein"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(_vm.nutrients["kofein"], function(
                                      name,
                                      i
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: i,
                                          staticClass:
                                            "d-flex justify-content-between"
                                        },
                                        [
                                          _c("div", [_vm._v(_vm._s(i))]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _vm._v(_vm._s(_vm.sumValue(name)))
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.nutrients["Provitamini A"] != undefined
                                ? _c(
                                    "div",
                                    _vm._l(
                                      _vm.nutrients["Provitamini A"],
                                      function(name, i) {
                                        return _c(
                                          "div",
                                          {
                                            key: i,
                                            staticClass:
                                              "d-flex justify-content-between"
                                          },
                                          [
                                            _c("div", [_vm._v(_vm._s(i))]),
                                            _vm._v(" "),
                                            _c("div", [
                                              _vm._v(_vm._s(_vm.sumValue(name)))
                                            ])
                                          ]
                                        )
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "print",
                  on: {
                    click: function($event) {
                      return _vm.printWindow()
                    }
                  }
                },
                [
                  _c("img", {
                    attrs: { src: "/assets/recipes/print-img.png", alt: "" }
                  }),
                  _vm._v(" "),
                  _c("h6", [_vm._v("Odštampaj recept")])
                ]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ingredients-quantity-header" }, [
      _c("div", [_vm._v("Sastojci:")]),
      _vm._v(" "),
      _c("div", [_vm._v("Kolicina:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row preparation mb-3" }, [
      _c("img", {
        attrs: { src: "/assets/recipes/preparation2.svg", alt: "", srcset: "" }
      }),
      _vm._v(" "),
      _c("h6", [_vm._v("Priprema:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-between" }, [
      _c("h6", [_vm._v("Nutrijenti")]),
      _vm._v(" "),
      _c("h6", [_vm._v("Količina")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/plan/Recipe.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/plan/Recipe.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recipe.vue?vue&type=template&id=256de059& */ "./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059&");
/* harmony import */ var _Recipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipe.vue?vue&type=script&lang=js& */ "./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Recipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/plan/Recipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Recipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recipe.vue?vue&type=template&id=256de059& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Recipe.vue?vue&type=template&id=256de059&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recipe_vue_vue_type_template_id_256de059___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);