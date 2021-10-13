(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      type_activity: {
        title: "<b>Nikakvu fizička aktivnost</b></br>Slaba ili nikakva fizicka aktivnost</br><b>Lagane vježbe</b></br>Vjezbe 1-3 puta nedeljno</br><b>Trening srednjeg inteziteta</b></br>Vjezbe 3-5 puta nedeljno</br><b>Jak trening</b></br>Bavljenje sportom ili 6-7 puta nedeljno trening</br><b>Ekstremno jak trening</b></br>Esktremno tezak sport i potrebna jaka snaga za izdrzljivost",
        html: true
      },
      bodyfat_title: {
        title: "<b>Niska</b></br>Ispod 14%</br><b>Srednja</b></br>14-22%</br><b>Visoka</b></br>Iznad 22%</br>",
        html: true
      },
      activity_options: ["Nikakvu fizička aktivnost", "Lagane vježbe", "Trening srednjeg inteziteta", "Jak trening", "Ekstremno jak trening"],
      activity: "",
      height: 170,
      weight: 60,
      age: 20,
      gender: "",
      wishes: "maintain",
      bodyfat: "low",
      errors: {}
    };
  },
  methods: {
    validate: function validate() {
      this.errors = {};

      if (this.gender == "") {
        this.errors.gender = "Unesite ispravno pol.";
        return false;
      }

      if (this.height == 0 || this.height < 100 || this.height > 250) {
        this.errors.height = "Unesite ispravno visinu.";
        return false;
      }

      if (this.weight == 0 || this.weight < 30 || this.weight > 200) {
        this.errors.weight = "Unesite ispravno tezinu.";
        return false;
      }

      if (this.age == 0 || this.age < 5 || this.age > 110) {
        this.errors.age = "Unesite ispravno godine.";
        return false;
      }

      if (this.activity == "") {
        this.errors.activity = "Unesite ispravno stepen aktivnosti.";
        return false;
      }

      return true;
    },
    calculate: function calculate() {
      if (!this.validate()) return;
      var calories = 0;
      var BMR = 0;
      var weight = 0;

      if (this.bodyfat == "medium") {
        weight = this.weight - 4;
      } else if (this.bodyfat == "high") {
        weight = this.weight - 9;
      } else {
        weight = this.weight;
      }

      if (this.gender == "W") {
        BMR = 10 * weight + 6.25 * this.height - 5 * this.age - 161;
      } else {
        BMR = 10 * weight + 6.25 * this.height - 5 * this.age + 5;
      }

      switch (this.activity) {
        case "Nikakvu fizička aktivnost":
          calories = BMR * 1.2;
          break;

        case "Lagane vježbe":
          calories = BMR * 1.375;
          break;

        case "Trening srednjeg inteziteta":
          calories = BMR * 1.55;
          break;

        case "Jak trening":
          calories = BMR * 1.725;
          break;

        case "Ekstremno jak trening":
          calories = BMR * 1.9;
          break;

        default:
          break;
      }

      if (this.wishes == "lose") {
        calories -= calories / 100 * 25;
      } else if (this.wishes == "muscle") {
        calories += calories / 100 * 12;
      }

      calories = Math.round(calories);
      Event.$emit("calculate", calories);
      $("#calculate").modal("hide");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "center" }, [
    _c("div", { staticClass: "text-center lab-pol pb-2" }, [
      _vm._v("Izaberite pol")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "pol pb-3" }, [
      _c(
        "div",
        {
          class: { active: _vm.gender == "W" },
          on: {
            click: function($event) {
              _vm.gender = "W"
            }
          }
        },
        [
          _c("img", { attrs: { src: "/assets/plan/girl.png", alt: "" } }),
          _c("span", [_vm._v("Zensko")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class: { active: _vm.gender == "M" },
          on: {
            click: function($event) {
              _vm.gender = "M"
            }
          }
        },
        [
          _c("span", [_vm._v("Musko")]),
          _c("img", { attrs: { src: "/assets/plan/boy.png", alt: "" } })
        ]
      )
    ]),
    _vm._v(" "),
    _vm.errors.gender
      ? _c("div", [_vm._v(_vm._s(_vm.errors.gender))])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "above" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "height" } }, [_vm._v("Visina:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.height,
              expression: "height"
            }
          ],
          staticClass: "form-control",
          class: { error: _vm.errors.height },
          attrs: {
            type: "number",
            min: "100",
            max: "250",
            id: "",
            name: "height"
          },
          domProps: { value: _vm.height },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.height = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "weight" } }, [_vm._v("Tezina:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.weight,
              expression: "weight"
            }
          ],
          staticClass: "form-control",
          class: { error: _vm.errors.weight },
          attrs: {
            type: "number",
            id: "weight",
            min: "30",
            max: "200",
            name: "weight"
          },
          domProps: { value: _vm.weight },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.weight = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "age" } }, [_vm._v("Godine:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.age,
              expression: "age"
            }
          ],
          staticClass: "form-control",
          class: { error: _vm.errors.age },
          attrs: {
            type: "number",
            id: "age",
            min: "5",
            max: "110",
            name: "age"
          },
          domProps: { value: _vm.age },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.age = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "below" }, [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("label", { attrs: { for: "aktivnost" } }, [_vm._v("Aktivnost:")]),
          _vm._v(" "),
          _c("multiselect", {
            class: { error: _vm.errors.activity },
            attrs: {
              options: _vm.activity_options,
              "select-label": "",
              placeholder: "Izaberite stepen aktivnosti"
            },
            model: {
              value: _vm.activity,
              callback: function($$v) {
                _vm.activity = $$v
              },
              expression: "activity"
            }
          }),
          _vm._v(" "),
          _c("img", {
            directives: [
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover",
                modifiers: { hover: true }
              },
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover.html",
                value: _vm.type_activity,
                expression: "type_activity",
                modifiers: { hover: true, html: true }
              }
            ],
            staticClass: "help",
            staticStyle: { cursor: "pointer" },
            attrs: { src: "/assets/plan/question.png", alt: "", srcset: "" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Masnoca:")]),
        _vm._v(" "),
        _c("div", { staticClass: "button-group-pills text-center" }, [
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.bodyfat == "low" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bodyfat,
                    expression: "bodyfat"
                  }
                ],
                attrs: {
                  type: "radio",
                  id: "low",
                  value: "low",
                  name: "options1"
                },
                domProps: { checked: _vm._q(_vm.bodyfat, "low") },
                on: {
                  change: function($event) {
                    _vm.bodyfat = "low"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Niska")])
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.bodyfat == "medium" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bodyfat,
                    expression: "bodyfat"
                  }
                ],
                attrs: {
                  type: "radio",
                  value: "medium",
                  name: "options1",
                  id: "medium"
                },
                domProps: { checked: _vm._q(_vm.bodyfat, "medium") },
                on: {
                  change: function($event) {
                    _vm.bodyfat = "medium"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Srednja")])
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.bodyfat == "high" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bodyfat,
                    expression: "bodyfat"
                  }
                ],
                attrs: {
                  type: "radio",
                  id: "high",
                  value: "high",
                  name: "options1"
                },
                domProps: { checked: _vm._q(_vm.bodyfat, "high") },
                on: {
                  change: function($event) {
                    _vm.bodyfat = "high"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Visoka")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("img", {
          directives: [
            {
              name: "b-tooltip",
              rawName: "v-b-tooltip.hover.html",
              value: _vm.bodyfat_title,
              expression: "bodyfat_title",
              modifiers: { hover: true, html: true }
            }
          ],
          staticClass: "help",
          staticStyle: { cursor: "pointer" },
          attrs: { src: "/assets/plan/question.png", alt: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Zelim:")]),
        _vm._v(" "),
        _c("div", { staticClass: "button-group-pills text-center" }, [
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.wishes == "maintain" },
              attrs: { for: "maintain" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.wishes,
                    expression: "wishes"
                  }
                ],
                attrs: {
                  value: "maintain",
                  type: "radio",
                  name: "options",
                  id: "maintain"
                },
                domProps: { checked: _vm._q(_vm.wishes, "maintain") },
                on: {
                  change: function($event) {
                    _vm.wishes = "maintain"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Održavam kilažu")])
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.wishes == "lose" },
              attrs: { for: "lose" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.wishes,
                    expression: "wishes"
                  }
                ],
                attrs: {
                  value: "lose",
                  type: "radio",
                  name: "options",
                  id: "lose"
                },
                domProps: { checked: _vm._q(_vm.wishes, "lose") },
                on: {
                  change: function($event) {
                    _vm.wishes = "lose"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Izgubim kilograme")])
            ]
          ),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "btn btn-default",
              class: { active: _vm.wishes == "muscle" },
              attrs: { for: "muscle" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.wishes,
                    expression: "wishes"
                  }
                ],
                attrs: {
                  value: "muscle",
                  type: "radio",
                  name: "options",
                  id: "muscle"
                },
                domProps: { checked: _vm._q(_vm.wishes, "muscle") },
                on: {
                  change: function($event) {
                    _vm.wishes = "muscle"
                  }
                }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("Izgradim mišiće")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("img", {
          directives: [
            {
              name: "b-tooltip",
              rawName: "v-b-tooltip.hover",
              modifiers: { hover: true }
            }
          ],
          staticClass: "help",
          staticStyle: { cursor: "pointer" },
          attrs: {
            src: "/assets/plan/question.png",
            alt: "",
            title:
              "Ako je vaš cilj izgubiti kilograme 25% dnevna doza će se smanjiti, a ukoliko je cilj udebljati se 12% će se povećati Vaša dnevna doza kalorija."
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button-green f m-auto",
        on: {
          click: function($event) {
            return _vm.calculate()
          }
        }
      },
      [_vm._v("\n    Izracunaj\n  ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/plan/Calculator.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/plan/Calculator.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.vue?vue&type=template&id=37ab6b66& */ "./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66&");
/* harmony import */ var _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.vue?vue&type=script&lang=js& */ "./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/plan/Calculator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calculator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Calculator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Calculator.vue?vue&type=template&id=37ab6b66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/Calculator.vue?vue&type=template&id=37ab6b66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_37ab6b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);