(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id_user: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      calendar_header: ["Pon", "Uto", "Sri", "Četv", "Pet", "Sub", "Ned"],
      days: [],
      plan: [],
      dayActive: [],
      arraySelected: [],
      name: "",
      schedule: []
    };
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    var _this = this;

    Event.$on("openSaveRecipeModal", function (plan) {
      $("#save-recipe").modal("show");
      _this.plan = plan;
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get("./api/schedule").then(function (response) {
      console.log(response); // handle success

      _this2.schedule = response.data;

      var _iterator = _createForOfIteratorHelper(_this2.schedule),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var day = _step.value;

          _this2.dayActive.push(day.toString());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      setTimeout(function () {
        for (var index = 1; index <= 28; index++) {
          console.log(_this2.dayActive.includes("1"));

          if (_this2.dayActive.includes(index.toString())) {
            _this2.days.push({
              reserved: true
            });
          } else {
            _this2.days.push({
              reserved: false
            });
          }

          _this2.arraySelected.push({
            selected: false
          });
        }
      }, 1000);
      setTimeout(function () {
        _this2.makeSelection();
      }, 2000);
    })["catch"](function (error) {
      // handle error
      console.log(error);
    }).then(function () {// always executed
    });
  },
  methods: {
    makeSelection: function makeSelection() {
      var _iterator2 = _createForOfIteratorHelper(this.$refs.day),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var day = _step2.value;

          if (day.classList.contains("reserved")) {
            day.innerHTML += "<img src=\"/assets/plan/key.svg\" alt=\"\" />";
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      $("#save-recipe").on("shown.bs.modal", function () {
        $(document).off("focusin.modal");
      });
    },
    refreshSelected: function refreshSelected() {
      for (var index = 0; index < 28; index++) {
        this.arraySelected[index].selected = false;
        this.$refs.day[index].classList.remove("selected");
      }
    },
    addSelected: function addSelected(day, event) {
      if (this.arraySelected[day - 1].selected == true) {
        event.currentTarget.classList.remove("selected");
        this.arraySelected[day - 1].selected = false;
        return;
      }

      event.currentTarget.classList.add("selected");
      this.arraySelected[day - 1].selected = true;
    },
    deleteDay: function deleteDay() {
      var _this3 = this;

      var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

      if (this.id_user == 0) {
        swal.fire({
          title: "Niste prijavljeni",
          text: "Da biste koristili ovu funkciju morate biti prijavljeni na sistem.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#60B87A",
          cancelButtonColor: "#f84141",
          confirmButtonText: "Prijavi se!",
          cancelButtonText: "Otkaži!"
        }).then(function (result) {
          if (result.isConfirmed) {
            window.location = "/login";
          }
        });
        return;
      }

      var selected = [];

      for (var index = 0; index < this.$refs.day.length; index++) {
        if (this.days[index].reserved == false) {
          this.arraySelected[index].selected = false;
          this.$refs.day[index].classList.remove("selected");
        }

        if (this.arraySelected[index].selected == true) {
          selected.push(index);
          this.days[index].reserved = false;
          this.$refs.day[index].classList.remove("reserved");
          this.$refs.day[index].innerHTML = index + 1;
          axios["delete"]("./api/schedule/".concat(index + 1)).then(function (response) {
            _this3.refreshSelected();
          })["catch"](function (error) {
            console.log(error);
          });
          swal.fire("Sačuvano!", "Uspjesno obrisano.", "success");
        }
      }
    },
    add: function add() {
      var _this4 = this;

      var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

      if (this.id_user == 0) {
        swal.fire({
          title: "Niste prijavljeni",
          text: "Da biste koristili ovu funkciju morate biti prijavljeni na sistem.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#60B87A",
          cancelButtonColor: "#f84141",
          confirmButtonText: "Prijavi se!",
          cancelButtonText: "Otkaži!"
        }).then(function (result) {
          if (result.isConfirmed) {
            window.location = "/login";
          }
        });
        return;
      }

      var sendUpdate = [];
      var sendImport = [];
      var once = true;

      for (var index = 0; index < this.$refs.day.length; index++) {
        if (this.arraySelected[index].selected == true) {
          if (this.days[index].reserved == true) {
            sendUpdate.push(index + 1);
          } else {
            sendImport.push(index + 1);
          }
        }
      }

      var _loop = function _loop(_index) {
        if (_this4.arraySelected[_index].selected == true) {
          // this.$refs.day[index].classList.add("pointer");
          if (_this4.days[_index].reserved == true) {
            swal.fire({
              title: "Sigurni ste da želite zamjenu?",
              text: "Ako zamjenite stari sačuvani dan nećete moći vratiti!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#60B87A",
              cancelButtonColor: "#f84141",
              confirmButtonText: "Zamjeni!",
              cancelButtonText: "Otkaži!"
            }).then(function (result) {
              if (result.isConfirmed) {
                axios.patch("/api/schedule/".concat(_index + 1), {
                  name: _this4.name,
                  days: JSON.stringify(sendUpdate),
                  plan: _this4.plan
                }).then(function (response) {
                  _this4.refreshSelected();
                })["catch"](function (error) {
                  console.log(error);
                });
                swal.fire("Sačuvano!", "Vaša izmjena je sačuvana.", "success");
              }
            });
          } else if (once) {
            once = false;
            axios.post("./api/schedule", {
              days: JSON.stringify(sendImport),
              name: _this4.name,
              plan: _this4.plan
            }).then(function () {
              return _this4.refreshSelected();
            })["catch"](function (error) {
              console.log(error);
            });

            var _iterator3 = _createForOfIteratorHelper(sendImport),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _key = _step3.value;

                _this4.$refs.day[_key - 1].classList.add("reserved");

                _this4.$refs.day[_key - 1].innerHTML += "<img src=\"/assets/plan/key.svg\" alt=\"\" />";
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      };

      for (var _index = 0; _index < this.$refs.day.length; _index++) {
        _loop(_index);
      }

      for (var _i = 0, _sendImport = sendImport; _i < _sendImport.length; _i++) {
        var key = _sendImport[_i];
        this.days[key - 1].reserved = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        tabindex: " -1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        id: "save-recipe"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "div",
              { staticClass: "calendar-header" },
              _vm._l(_vm.calendar_header, function(day, index) {
                return _c("div", { key: index, staticClass: "day-name" }, [
                  _vm._v("\n            " + _vm._s(day) + "\n          ")
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "calendar-body" },
              _vm._l(_vm.days, function(day, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    ref: "day",
                    refInFor: true,
                    staticClass: "day",
                    class: { reserved: day.reserved },
                    on: {
                      click: function($event) {
                        return _vm.addSelected(index + 1, $event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(index + 1) + "\n          "
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass: "mb-2 form-control",
              attrs: {
                type: "text",
                id: "name",
                placeholder: "Upiši naziv novog plana"
              },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex mb-3" }, [
              _c(
                "button",
                {
                  staticClass: "button-green",
                  on: {
                    click: function($event) {
                      return _vm.add()
                    }
                  }
                },
                [_vm._v("Dodaj")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button-cancel mt-auto",
                  on: {
                    click: function($event) {
                      return _vm.deleteDay()
                    }
                  }
                },
                [_vm._v("\n            Obriši\n          ")]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title margin-auto w-100 text-center" }, [
        _vm._v("Moj plan")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/plan/SaveRecipe.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/plan/SaveRecipe.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveRecipe.vue?vue&type=template&id=e09a9794& */ "./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794&");
/* harmony import */ var _SaveRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaveRecipe.vue?vue&type=script&lang=js& */ "./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SaveRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/plan/SaveRecipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaveRecipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/SaveRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaveRecipe.vue?vue&type=template&id=e09a9794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/plan/SaveRecipe.vue?vue&type=template&id=e09a9794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveRecipe_vue_vue_type_template_id_e09a9794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);