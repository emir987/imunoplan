(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      first: true,
      diet: 0,
      noOfCalories: 2500,
      noOfMeals: [3, 4, 5, 6],
      noOfMealsValue: 4,
      nutrientsValue: [],
      nutrientsOptions: this.nutrients.map(function (_ref) {
        var symbol = _ref.symbol;
        return symbol;
      }),
      current: 1,
      totalCalories: 0,
      showPlan: false,
      mealCalories: 0,
      breakfast: {
        recipes: []
      },
      lunch: {
        recipes: []
      },
      dinner: {
        recipes: []
      },
      snacks: [],
      addedMeals: [],
      recipes: {},
      recipes2: [],
      inputCaloriesError: false,
      inputNoOfMealsError: false,
      isDisabled: true,
      recipesId: [],
      isRefresh: false,
      meals: []
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    axios.get("api/plan/getRecipes").then(function (response) {
      _this.meals = response.data;
      _this.isDisabled = false;
    })["catch"](function (error) {
      // handle error
      console.log(error);
    }).then(function () {// always executed
    });
    Event.$on("calculate", function (calculated) {
      return _this.noOfCalories = parseInt(calculated);
    });
  },
  methods: {
    addRefreshed: function addRefreshed(e) {
      var refreshElement = e.target.parentElement;
      var element = e.target.parentElement.previousElementSibling;
      refreshElement.classList.add("rotate-refresh");
      setTimeout(function () {
        refreshElement.classList.remove("rotate-refresh");
      }, 500);
      element.classList.add("animate-refresh");
      element.style.webkitAnimation = "none";
      setTimeout(function () {
        element.style.webkitAnimation = "";
      }, 10);
    },
    openModal: function openModal(recipe) {
      this.modalVisible = true;
      console.log(recipe);
      var recipe_additional = {
        "proteins": recipe.proteins,
        "carbs": recipe.carbs,
        "fats": recipe.fats,
        "minerals": recipe.minerals,
        "vitamins": recipe.vitamins,
        "calories": recipe.calories
      };
      Event.$emit("openModal", this.modalVisible, recipe.id, recipe_additional);
    },
    openSaveRecipeModal: function openSaveRecipeModal() {
      var plan = [this.breakfast, this.lunch, this.dinner, this.snacks, this.totalCalories];
      Event.$emit("openSaveRecipeModal", plan);
    },
    activateDiet: function activateDiet(diet) {
      if (diet.id == 1) {
        this.diet = 0;
      } else {
        this.diet = diet.id;
      }

      this.current = diet.id;
    },
    validatePlan: function validatePlan() {
      if (this.noOfCalories < 600 || this.noOfCalories > 70000) {
        this.inputCaloriesError = true;
        return false;
      } else {
        this.inputCaloriesError = false;
      }

      if (this.noOfMealsValue == null) {
        this.inputNoOfMealsError = true;
        return false;
      } else {
        this.inputNoOfMealsError = false;
      }

      return true;
    },
    removeRefreshedRecipes: function removeRefreshedRecipes(mealID, snackID) {
      var _this2 = this;

      var removeId = function removeId(meal) {
        var snackID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (snackID !== false) {
          var _toRemove = meal[snackID].recipes.map(function (recipe) {
            return recipe.id;
          });

          _this2.recipesId = _this2.recipesId.filter(function (el) {
            return !_toRemove.includes(el);
          });
          return;
        }

        var toRemove = meal.recipes.map(function (recipe) {
          return recipe.id;
        });
        _this2.recipesId = _this2.recipesId.filter(function (el) {
          return !toRemove.includes(el);
        });
      };

      switch (mealID) {
        case 1:
          removeId(this.breakfast);
          break;

        case 2:
          removeId(this.lunch);
          break;

        case 3:
          removeId(this.dinner);
          break;

        case 4:
          removeId(this.snacks, snackID);
          break;
      }
    },
    refeshMeal: function refeshMeal(mealID, snackNumber) {
      switch (mealID) {
        case 1:
          this.totalCalories -= this.breakfast.calories;
          this.populateMeal(this.mealCalories, this.meals[0].recipes, this.breakfast);
          break;

        case 2:
          this.totalCalories -= this.lunch.calories;
          this.populateMeal(this.mealCalories, this.meals[1].recipes, this.lunch);
          break;

        case 3:
          this.totalCalories -= this.dinner.calories;
          this.populateMeal(this.mealCalories, this.meals[2].recipes, this.dinner);
          break;

        case 4:
          this.totalCalories -= this.snacks[snackNumber].calories;
          this.populateMeal(this.mealCalories, this.meals[3].recipes, this.snacks, true, snackNumber);
      }
    },
    generatePlan: function generatePlan() {
      //   if (!this.validatePlan()) return;
      this.totalCalories = 0;
      this.addedMeals = [];
      var noOfSnacks = this.noOfMealsValue - 3;
      this.mealCalories = 2 * this.noOfCalories / (6 + noOfSnacks);
      this.breakfast = {
        recipes: []
      };
      this.lunch = {
        recipes: []
      };
      this.dinner = {
        recipes: []
      };
      this.snacks = [];
      this.populateMeal(this.mealCalories, this.meals[0].recipes, this.breakfast);
      this.populateMeal(this.mealCalories, this.meals[1].recipes, this.lunch);
      this.populateMeal(this.mealCalories, this.meals[2].recipes, this.dinner);

      for (var i = 0; i < noOfSnacks; i++) {
        this.populateMeal(this.mealCalories / 2, this.meals[3].recipes, this.snacks, true);
      } //this.populateMeal(this.mealCalories / 2, this.meals[3].recipes, this.snack);


      this.showPlan = true;
    },
    populateMeal: function populateMeal(remainingParam, obj, meal) {
      var snack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var snackNumber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      var remainingCalories = remainingParam;
      var meal_recipes = [];
      var meal_calories = 0;
      var meal_fats = 0;
      var meal_proteins = 0;
      var meal_carbs = 0;
      var recipes = obj.sort(function () {
        return Math.random() - 0.5;
      });

      var _iterator = _createForOfIteratorHelper(recipes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var recipe = _step.value;
          if (this.addedMeals.includes(recipe.id)) continue;
          var recipe_calories = 0;
          var recipe_fats = 0;
          var recipe_proteins = 0;
          var recipe_carbs = 0;
          var recipe_minerals = 0;
          var recipe_vitamins = 0;
          var recipe_fibers = 0;

          var _iterator2 = _createForOfIteratorHelper(recipe.ingredients),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var ingredient = _step2.value;

              var _iterator3 = _createForOfIteratorHelper(ingredient.nutrients),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var nutrient = _step3.value;
                  var nutrientQuantity = nutrient.nutrient_quantity.quantity / 100 * (ingredient.ingredient_quantity.quantity * ingredient.measure_grams) / recipe.serving_size;
                  var nutrientUnit = nutrient.nutrient_quantity.unit;

                  switch (nutrient.type) {
                    case "Ugljeni hidrati":
                      recipe_carbs += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      break;

                    case "Lipidi":
                      if (nutrient.name == "Lipid total") {
                        recipe_fats += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      }

                      break;

                    case "Protein":
                      recipe_proteins += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      break;

                    case "Minerali":
                      recipe_minerals += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      break;

                    case "Vitamini":
                      recipe_vitamins += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      break;

                    case "Vlakna":
                      recipe_fibers += this.nutrientConversionToGr(nutrientQuantity, nutrientUnit);
                      break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var ingredient_calories = ingredient.calories / 100 * ingredient.ingredient_quantity.quantity * ingredient.measure_grams / recipe.serving_size;
              recipe_calories += ingredient_calories;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          recipe.carbs = recipe_carbs;
          recipe.proteins = recipe_proteins;
          recipe.fats = recipe_fats;
          recipe.minerals = recipe_minerals;
          recipe.vitamins = recipe_vitamins;
          recipe.fibers = recipe_fibers;
          recipe.calories = parseInt(recipe_calories);

          if (recipe_calories < remainingCalories) {
            remainingCalories -= recipe_calories;
            meal_recipes.push(recipe);
            meal_calories += recipe_calories;
            meal_carbs += recipe.carbs;
            meal_proteins += recipe.proteins;
            meal_fats += recipe.fats;
            this.addedMeals.push(recipe.id);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (snack) {
        var snack_meal = {
          recipes: meal_recipes,
          calories: parseInt(meal_calories),
          carbs: parseInt(meal_carbs),
          proteins: parseInt(meal_proteins),
          fats: parseInt(meal_fats)
        };

        if (snackNumber === -1) {
          meal.push(snack_meal);
        } else {
          meal[snackNumber] = snack_meal;
        }

        this.totalCalories += snack_meal.calories;
      } else {
        meal.recipes = meal_recipes;
        meal.calories = parseInt(meal_calories);
        meal.carbs = parseInt(meal_carbs);
        meal.fats = parseInt(meal_fats);
        meal.proteins = parseInt(meal_proteins);
        this.totalCalories += meal.calories;
      }
    },
    nutrientConversionToGr: function nutrientConversionToGr(quantity, unit) {
      if (unit === "UG") return quantity / 1000000;
      if (unit === "MG") return quantity / 1000;
      return quantity;
    }
  },
  props: ["diets", "nutrients"],
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container", attrs: { id: "planfood" } }, [
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "diet-circles" },
        _vm._l(_vm.diets, function(diet) {
          return _c("div", { key: diet.id }, [
            _c("div", { staticClass: "circle-item" }, [
              _c(
                "div",
                {
                  staticClass: "circle c-gray",
                  class: { active: _vm.current == diet.id },
                  on: {
                    click: function($event) {
                      return _vm.activateDiet(diet)
                    }
                  }
                },
                [_c("img", { attrs: { src: diet.img, alt: "" } })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-circle" }, [
                _vm._v(_vm._s(diet.name))
              ])
            ])
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("form", { staticClass: "col-lg-5 col-md-8 col-sm-10 col-11" }, [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-sm-3 col-form-label", attrs: { for: "fat" } },
            [_vm._v("Kalorije")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-9" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.noOfCalories,
                  expression: "noOfCalories",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control",
              class: { error_input: _vm.inputCaloriesError },
              attrs: {
                type: "number",
                max: "7000",
                min: "1000",
                id: "fat",
                placeholder: "Dnevni unos"
              },
              domProps: { value: _vm.noOfCalories },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.noOfCalories = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-3 col-form-label",
              attrs: { for: "nutrients" }
            },
            [_vm._v("Nutrijenti")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-9" },
            [
              _c(
                "multiselect",
                {
                  attrs: {
                    options: _vm.nutrientsOptions,
                    searchable: true,
                    multiple: true,
                    placeholder: "Nije obavezno"
                  },
                  model: {
                    value: _vm.nutrientsValue,
                    callback: function($$v) {
                      _vm.nutrientsValue = $$v
                    },
                    expression: "nutrientsValue"
                  }
                },
                [
                  _c("template", { slot: "noResult" }, [
                    _vm._v("Nema rezultata")
                  ])
                ],
                2
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-sm-3 col-form-label",
              attrs: { for: "number-meals" }
            },
            [_vm._v("Broj obroka")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-9" },
            [
              _c(
                "multiselect",
                {
                  class: { error_input: _vm.inputNoOfMealsError },
                  attrs: { options: _vm.noOfMeals, placeholder: "Odaberite" },
                  model: {
                    value: _vm.noOfMealsValue,
                    callback: function($$v) {
                      _vm.noOfMealsValue = _vm._n($$v)
                    },
                    expression: "noOfMealsValue"
                  }
                },
                [
                  _c("template", { slot: "noResult" }, [
                    _vm._v("Nema rezultata")
                  ])
                ],
                2
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-loader" }, [
          _c(
            "button",
            {
              staticClass: "button-green",
              class: { disabled_btn: _vm.isDisabled },
              attrs: { disabled: _vm.isDisabled },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.generatePlan()
                }
              }
            },
            [_vm._v("\n          Napravi plan!\n        ")]
          ),
          _vm._v(" "),
          _c("div", { class: { dotFlashing: _vm.isDisabled } })
        ])
      ]),
      _vm._v(" "),
      _vm.breakfast.recipes.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showPlan,
                  expression: "showPlan"
                }
              ],
              staticClass: "meals"
            },
            [
              _c("div", { staticClass: "total-stats" }, [
                _c("div", { staticClass: "total" }, [
                  _c("span", [_vm._v("Ukupno kalorija:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.totalCalories) + " kcal")])
                ])
              ]),
              _vm._v(" "),
              _vm.breakfast.recipes.length
                ? _c("div", { staticClass: "meal" }, [
                    _c("div", { staticClass: "meal-top" }, [
                      _c("div", { staticClass: "meal-name" }, [
                        _vm._v("Dorucak")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "meal-stats" }, [
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/calories.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("kcal: " + _vm._s(_vm.breakfast.calories))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/carbs.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("UH: " + _vm._s(_vm.breakfast.carbs))
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
                              "protein: " + _vm._s(_vm.breakfast.proteins) + "g"
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
                            _vm._v("masti: " + _vm._s(_vm.breakfast.fats) + "g")
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
                              attrs: { id: recipe.id }
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
                                      src: recipe.photo,
                                      alt: recipe.name
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
                                        _vm._s(recipe.name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "recipe-weight" }, [
                                    _vm._v(_vm._s(recipe.calories) + "kcal")
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "refresh",
                          on: {
                            click: function($event) {
                              _vm.addRefreshed($event)
                              _vm.refeshMeal(1, -1)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: "/assets/plan/refresh.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Ponudi novo")])
                        ]
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.lunch.recipes.length
                ? _c("div", { staticClass: "meal" }, [
                    _c("div", { staticClass: "meal-top" }, [
                      _c("div", { staticClass: "meal-name" }, [
                        _vm._v("Ručak")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "meal-stats" }, [
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/calories.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("kcal: " + _vm._s(_vm.lunch.calories))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/carbs.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("UH: " + _vm._s(_vm.lunch.carbs))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/protein.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "protein: " + _vm._s(_vm.lunch.proteins) + "g"
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
                            _vm._v("masti: " + _vm._s(_vm.lunch.fats) + "g")
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
                              attrs: { id: recipe.id }
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
                                      src: recipe.photo,
                                      alt: recipe.name
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
                                        _vm._s(recipe.name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "recipe-weight" }, [
                                    _vm._v(_vm._s(recipe.calories) + "kcal")
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "refresh",
                          on: {
                            click: function($event) {
                              _vm.addRefreshed($event)
                              _vm.refeshMeal(2, -1)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: "/assets/plan/refresh.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Ponudi novo")])
                        ]
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.dinner.recipes.length
                ? _c("div", { staticClass: "meal" }, [
                    _c("div", { staticClass: "meal-top" }, [
                      _c("div", { staticClass: "meal-name" }, [
                        _vm._v("Večera")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "meal-stats" }, [
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/calories.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("kcal: " + _vm._s(_vm.dinner.calories))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "meal-stat" }, [
                          _c("img", {
                            attrs: { src: "/assets/plan/carbs.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v("UH: " + _vm._s(_vm.dinner.carbs))
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
                              "protein: " + _vm._s(_vm.dinner.proteins) + "g"
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
                            _vm._v("masti: " + _vm._s(_vm.dinner.fats) + "g")
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
                                      src: recipe.photo,
                                      alt: recipe.name
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
                                        _vm._s(recipe.name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "recipe-weight" }, [
                                    _vm._v(_vm._s(recipe.calories) + "kcal")
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "refresh",
                          on: {
                            click: function($event) {
                              _vm.addRefreshed($event)
                              _vm.refeshMeal(3, -1)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: "/assets/plan/refresh.png", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Ponudi novo")])
                        ]
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
                                attrs: {
                                  src: "/assets/plan/calories.png",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v("kcal: " + _vm._s(snack.calories))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "meal-stat" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/plan/carbs.png",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v("UH: " + _vm._s(snack.carbs))])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "meal-stat" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/plan/protein.png",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "protein: " + _vm._s(snack.proteins) + "g"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "meal-stat" }, [
                              _c("img", {
                                attrs: {
                                  src: "/assets/plan/lipids.png",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v("masti: " + _vm._s(snack.fats) + "g")
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
                                  attrs: { id: recipe.id }
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
                                          src: recipe.photo,
                                          width: "40px",
                                          alt: recipe.name
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
                                      _c(
                                        "div",
                                        { staticClass: "recipe-name" },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(recipe.name) +
                                              "\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "recipe-weight" },
                                        [
                                          _vm._v(
                                            _vm._s(recipe.calories) + "kcal"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "refresh",
                              on: {
                                click: function($event) {
                                  _vm.addRefreshed($event)
                                  _vm.refeshMeal(4, i)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/assets/plan/refresh.png",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v("Ponudi novo")])
                            ]
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
                  staticClass: "button-green",
                  on: { click: _vm.openSaveRecipeModal }
                },
                [_vm._v("\n        Sačuvaj plan!\n      ")]
              )
            ]
          )
        : _vm.first == false
        ? _c(
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
                [
                  _vm._v(
                    "\n        Za Vaš kriterijum nemamo plan ishrane.\n      "
                  )
                ]
              ),
              _vm._v(" "),
              _c("h6", { staticStyle: { color: "gray" } }, [
                _vm._v(
                  "\n        Da li ste sigurni da je " +
                    _vm._s(_vm.noOfCalories) +
                    " Vaš broj kalorija?\n      "
                )
              ])
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/plan/PlanFood.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/plan/PlanFood.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanFood.vue?vue&type=template&id=161b369c& */ "./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c&");
/* harmony import */ var _PlanFood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanFood.vue?vue&type=script&lang=js& */ "./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlanFood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/plan/PlanFood.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanFood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanFood.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/PlanFood.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanFood_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanFood.vue?vue&type=template&id=161b369c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/PlanFood.vue?vue&type=template&id=161b369c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanFood_vue_vue_type_template_id_161b369c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);