(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BToast"]
  },
  props: {
    plansProp: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      plans: this.plansProp,
      showPlan: false,
      current: "",
      breakfast: {
        recipes: []
      },
      lunch: {
        recipes: []
      },
      dinner: {
        recipes: []
      },
      snacks: {
        recipes: []
      },
      totalCalories: 0,
      firstWeek: [],
      secondWeek: [],
      thirdWeek: [],
      fourthWeek: []
    };
  },
  methods: {
    deletePlan: function deletePlan() {
      var _this = this;

      var bootStrapToaster = new bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BToast"]();
      bootStrapToaster.$bvToast.toast("Plan je obrisan", {
        title: "Uspješno",
        toaster: "b-toaster-top-right",
        solid: true,
        appendToast: false,
        variant: "danger"
      });
      axios["delete"]("./api/schedule/deleteById/".concat(this.current)).then(function (response) {
        if (response.status == 200) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          _this.plans = _this.plans.filter(function (item) {
            return item.id != _this.current;
          });

          _this.generateMatrix();

          _this.generatePlans();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    renderPlan: function renderPlan() {
      var planObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (planObj.plan == undefined) return;

      if (planObj == 0) {
        this.current = 0;
        this.breakfast = {};
        this.lunch = {};
        this.dinner = {};
        this.snacks = [];
        this.totalCalories = 0;
        return;
      }

      var plan = planObj.plan,
          id = planObj.id;
      this.current = id;
      this.breakfast = plan[0];
      this.lunch = plan[1];
      this.dinner = plan[2];
      this.snacks = plan[3];
      this.totalCalories = plan[4];
    },
    openModal: function openModal(recipe) {
      this.modalVisible = true;
      Event.$emit("openModal", this.modalVisible, recipe);
    },
    generateMatrix: function generateMatrix() {
      var index = 1000000;
      this.firstWeek = Array.from({
        length: 7
      }, function () {
        return {
          id: index++,
          name: ""
        };
      });
      this.secondWeek = Array.from({
        length: 7
      }, function () {
        return {
          id: index++,
          name: ""
        };
      });
      this.thirdWeek = Array.from({
        length: 7
      }, function () {
        return {
          id: index++,
          name: ""
        };
      });
      this.fourthWeek = Array.from({
        length: 7
      }, function () {
        return {
          id: index++,
          name: ""
        };
      });
    },
    generatePlans: function generatePlans() {
      if (this.plans.length == 0) return;
      var renderOnce = true;

      var _iterator = _createForOfIteratorHelper(this.plans),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plan = _step.value;
          var day = plan.day;

          if (plan.day < 8) {
            if (renderOnce) {
              this.current = plan.id;
              this.renderPlan({
                id: plan.id,
                name: plan.name,
                plan: plan.daily_plan
              });
              renderOnce = false;
            }

            for (var i = 0; i < 7; i++) {
              if (this.firstWeek[i].name == "") this.firstWeek[i].name = "<i class='fa fa-minus' disabled></i>";
            }

            if (plan.name == null) plan.name = "moj plan";
            this.firstWeek[day - 1] = {
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan
            };
          } else if (plan.day < 15) {
            if (renderOnce) {
              this.current = plan.id;
              this.renderPlan({
                id: plan.id,
                name: plan.name,
                plan: plan.daily_plan
              });
              renderOnce = false;
            }

            for (var _i = 0; _i < 7; _i++) {
              if (this.secondWeek[_i].name == "") {
                this.secondWeek[_i].name = "<i class='fa fa-minus' disabled></i>";
              }
            }

            if (plan.name == null) plan.name = "moj recept";
            this.secondWeek[day - 8] = {
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan
            };
          } else if (plan.day < 22) {
            if (renderOnce) {
              this.current = plan.id;
              this.renderPlan({
                id: plan.id,
                name: plan.name,
                plan: plan.daily_plan
              });
              renderOnce = false;
            }

            for (var _i2 = 0; _i2 < 7; _i2++) {
              if (this.thirdWeek[_i2].name == "") this.thirdWeek[_i2].name = "<i class='fa fa-minus' disabled></i>";
            }

            if (plan.name == null) plan.name = "moj recept";
            this.thirdWeek[day - 15] = {
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan
            };
          } else {
            if (renderOnce) {
              this.current = plan.id;
              this.renderPlan({
                id: plan.id,
                name: plan.name,
                plan: plan.daily_plan
              });
              renderOnce = false;
            }

            for (var _i3 = 0; _i3 < 7; _i3++) {
              if (this.fourthWeek[_i3].name == "") this.fourthWeek[_i3].name = "<i class='fa fa-minus' disabled></i>";
            }

            if (plan.name == null) plan.name = "moj recept";
            this.fourthWeek[day - 22] = {
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan
            };
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  },
  beforeMount: function beforeMount() {
    this.generateMatrix();
    this.generatePlans();
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-4" }, [
    _vm.plans.length > 0
      ? _c("div", [
          _c("div", {}, [
            _c(
              "div",
              { staticClass: "grid-menu" },
              [
                _c("div", { staticClass: "header-item" }, [_vm._v("Pon")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Uto")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Sri")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Čet")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Pet")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Sub")]),
                _vm._v(" "),
                _c("div", { staticClass: "header-item" }, [_vm._v("Ned")]),
                _vm._v(" "),
                _vm._l(_vm.firstWeek, function(plan) {
                  return _c(
                    "div",
                    {
                      key: plan.id,
                      staticClass: "first-row",
                      class: {
                        active: _vm.current == plan.id,
                        pointer: plan.name != "<i class='fa fa-minus'></i>"
                      },
                      on: {
                        click: function($event) {
                          return _vm.renderPlan(plan)
                        }
                      }
                    },
                    [_c("span", { domProps: { innerHTML: _vm._s(plan.name) } })]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.secondWeek, function(plan) {
                  return _c(
                    "div",
                    {
                      key: plan.id,
                      class: {
                        active: _vm.current == plan.id,
                        pointer: plan.name != "<i class='fa fa-minus'></i>"
                      },
                      on: {
                        click: function($event) {
                          return _vm.renderPlan(plan)
                        }
                      }
                    },
                    [_c("span", { domProps: { innerHTML: _vm._s(plan.name) } })]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.thirdWeek, function(plan) {
                  return _c(
                    "div",
                    {
                      key: plan.id,
                      class: {
                        active: _vm.current == plan.id,
                        pointer: plan.name != "<i class='fa fa-minus'></i>"
                      },
                      on: {
                        click: function($event) {
                          return _vm.renderPlan(plan)
                        }
                      }
                    },
                    [_c("span", { domProps: { innerHTML: _vm._s(plan.name) } })]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.fourthWeek, function(plan) {
                  return _c(
                    "div",
                    {
                      key: plan.id,
                      class: {
                        active: _vm.current == plan.id,
                        pointer: plan.name != "<i class='fa fa-minus'></i>"
                      },
                      on: {
                        click: function($event) {
                          return _vm.renderPlan(plan)
                        }
                      }
                    },
                    [_c("span", { domProps: { innerHTML: _vm._s(plan.name) } })]
                  )
                })
              ],
              2
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.plans.length > 0
      ? _c("div", { staticClass: "meals", staticStyle: { border: "none" } }, [
          _c("div", { staticClass: "total-stats" }, [
            _c("div", { staticClass: "total" }, [
              _c("span", [_vm._v("Ukupno kalorija:")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.totalCalories) + " kcal")])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _vm.breakfast.recipes.length > 0
            ? _c("div", { staticClass: "meal" }, [
                _c("div", { staticClass: "meal-top" }, [
                  _c("div", { staticClass: "meal-name" }, [_vm._v("Dorucak")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meal-stats" }, [
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/calories.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "kcal: " + _vm._s(_vm.breakfast.totalMealCalories)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/carbs.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("UH: " + _vm._s(_vm.breakfast.totalUH))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/protein.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "protein: " +
                            _vm._s(_vm.breakfast.totalProteins) +
                            "g"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/lipids.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "masti: " + _vm._s(_vm.breakfast.totalLipids) + "g"
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "recipes-refresh" }, [
                  _c(
                    "div",
                    { staticClass: "recipes" },
                    _vm._l(_vm.breakfast.recipes, function(recipe) {
                      return _c(
                        "div",
                        {
                          key: recipe.id,
                          staticClass: "recipe",
                          attrs: { id: recipe.recipe_id }
                        },
                        [
                          _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: recipe.recipeObj.recipe_img,
                                  width: "40px",
                                  alt: recipe.recipeObj.recipe_name
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "recipe-desc",
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "recipe-name" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(recipe.recipeObj.recipe_name) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "recipe-weight" }, [
                                _vm._v(_vm._s(recipe.recipeCalories) + "kcal")
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.lunch.recipes.length
            ? _c("div", { staticClass: "meal" }, [
                _c("div", { staticClass: "meal-top" }, [
                  _c("div", { staticClass: "meal-name" }, [_vm._v("Ručak")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meal-stats" }, [
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/calories.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("kcal: " + _vm._s(_vm.lunch.totalMealCalories))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/carbs.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("UH: " + _vm._s(_vm.lunch.totalUH))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/protein.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "protein: " + _vm._s(_vm.lunch.totalProteins) + "g"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/lipids.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("masti: " + _vm._s(_vm.lunch.totalLipids) + "g")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "recipes-refresh" }, [
                  _c(
                    "div",
                    { staticClass: "recipes" },
                    _vm._l(_vm.lunch.recipes, function(recipe) {
                      return _c(
                        "div",
                        {
                          key: recipe.id,
                          staticClass: "recipe",
                          attrs: { id: recipe.recipe_id }
                        },
                        [
                          _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: recipe.recipeObj.recipe_img,
                                  width: "40px",
                                  alt: recipe.recipeObj.recipe_name
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "recipe-desc",
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "recipe-name" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(recipe.recipeObj.recipe_name) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "recipe-weight" }, [
                                _vm._v(_vm._s(recipe.recipeCalories) + "kcal")
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.dinner.recipes.length
            ? _c("div", { staticClass: "meal" }, [
                _c("div", { staticClass: "meal-top" }, [
                  _c("div", { staticClass: "meal-name" }, [_vm._v("Večera")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meal-stats" }, [
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/calories.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("kcal: " + _vm._s(_vm.dinner.totalMealCalories))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/carbs.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("UH: " + _vm._s(_vm.dinner.totalUH))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/protein.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "protein: " + _vm._s(_vm.dinner.totalProteins) + "g"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "meal-stat" }, [
                      _c("img", {
                        attrs: { src: "/assets/plan/lipids.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("masti: " + _vm._s(_vm.dinner.totalLipids) + "g")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "recipes-refresh" }, [
                  _c(
                    "div",
                    { staticClass: "recipes" },
                    _vm._l(_vm.dinner.recipes, function(recipe) {
                      return _c(
                        "div",
                        {
                          key: recipe.id,
                          staticClass: "recipe",
                          attrs: { id: recipe.recipe_id }
                        },
                        [
                          _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: recipe.recipeObj.recipe_img,
                                  width: "40px",
                                  alt: recipe.recipeObj.recipe_name
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "recipe-desc",
                              on: {
                                click: function($event) {
                                  return _vm.openModal(recipe)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "recipe-name" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(recipe.recipeObj.recipe_name) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "recipe-weight" }, [
                                _vm._v(_vm._s(recipe.recipeCalories) + "kcal")
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.snacks.length
            ? _c(
                "div",
                _vm._l(_vm.snacks, function(snack, i) {
                  return _c("div", { key: i, staticClass: "meal" }, [
                    _c("div", { staticClass: "meal-top" }, [
                      _c("div", { staticClass: "meal-name" }, [
                        _vm._v("Obrok " + _vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "meal-stats" }, [
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/calories.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("kcal: " + _vm._s(snack.totalMealCalories))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/carbs.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("UH: " + _vm._s(snack.totalUH))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/protein.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "protein: " + _vm._s(snack.totalProteins) + "g"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/lipids.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("masti: " + _vm._s(snack.totalLipids) + "g")
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "recipes-refresh" }, [
                      _c(
                        "div",
                        { staticClass: "recipes" },
                        _vm._l(snack.recipes, function(recipe, i) {
                          return _c(
                            "div",
                            {
                              key: i,
                              staticClass: "recipe",
                              attrs: { id: recipe.recipe_id }
                            },
                            [
                              _c(
                                "div",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.openModal(recipe)
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: recipe.recipeObj.recipe_img,
                                      width: "40px",
                                      alt: recipe.recipeObj.recipe_name
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "recipe-desc",
                                  on: {
                                    click: function($event) {
                                      return _vm.openModal(recipe)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "recipe-name" }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(recipe.recipeObj.recipe_name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "recipe-weight" }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(recipe.recipeCalories) +
                                        "kcal\n                "
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button-red my-4",
              on: {
                click: function($event) {
                  return _vm.deletePlan()
                }
              }
            },
            [_vm._v("\n      Ukloni plan!\n    ")]
          )
        ])
      : _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-center align-items-center flex-column"
          },
          [
            _c("img", {
              staticClass: "mt-5",
              attrs: {
                src: "/assets/plan/no-prep.png",
                width: "250px",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c(
              "h4",
              {
                staticClass: "mt-4 text-center",
                staticStyle: { color: "gray" }
              },
              [_vm._v("\n      Nemate sačuvanih planova ishrane.\n    ")]
            ),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "total-info" }, [
      _c("img", { attrs: { src: "/assets/plan/info.png", alt: "" } }),
      _vm._v(" "),
      _c("span", [_vm._v("detalji")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticStyle: { color: "gray" } }, [
      _vm._v("Dodajte "),
      _c("a", { attrs: { href: "/plan" } }, [_vm._v("ovdje")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/plan/registered-users/SavedPlans.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/plan/registered-users/SavedPlans.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SavedPlans.vue?vue&type=template&id=ca83b50c& */ "./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c&");
/* harmony import */ var _SavedPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SavedPlans.vue?vue&type=script&lang=js& */ "./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SavedPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/plan/registered-users/SavedPlans.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SavedPlans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SavedPlans.vue?vue&type=template&id=ca83b50c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/registered-users/SavedPlans.vue?vue&type=template&id=ca83b50c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SavedPlans_vue_vue_type_template_id_ca83b50c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);