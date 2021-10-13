(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["purposes", "sources"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "circle-square-items mb-4" }, [
      _c("div", { staticClass: "circle-square" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "square-content" }, [
          _c("div", { staticClass: "square-content-header" }, [
            _vm._v("Najbolji izvori")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sources-grid" },
            _vm._l(_vm.sources, function(source, index) {
              return _c(
                "div",
                { key: index, staticClass: "d-flex align-items-center my-1" },
                [
                  _c("img", {
                    attrs: { width: "23px", src: source.photo, alt: "" }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(source.source_food))])
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "circle-square" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "square-content" },
          [
            _c("div", { staticClass: "square-content-header" }, [
              _vm._v("Čemu služe?")
            ]),
            _vm._v(" "),
            _vm._l(_vm.purposes, function(purpose, index) {
              return _c("div", { key: index }, [
                _c("p", { staticClass: "mb-2" }, [
                  _c("span", { staticClass: "p-1" }, [_vm._v("- ")]),
                  _c("span", {
                    domProps: { innerHTML: _vm._s(purpose.purpose) }
                  })
                ])
              ])
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle-outer" }, [
      _c("div", { staticClass: "circle-inner green-bg" }, [
        _c("img", { attrs: { src: "/assets/vitamins/sources.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle-outer" }, [
      _c("div", { staticClass: "circle-inner green-bg heart-pulse" }, [
        _c("img", { attrs: { src: "/assets/vitamins/heart.png", alt: "" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/nutrients/Protein.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/nutrients/Protein.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Protein.vue?vue&type=template&id=5310db05& */ "./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05&");
/* harmony import */ var _Protein_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Protein.vue?vue&type=script&lang=js& */ "./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Protein_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/nutrients/Protein.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Protein_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Protein.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nutrients/Protein.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Protein_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Protein.vue?vue&type=template&id=5310db05& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nutrients/Protein.vue?vue&type=template&id=5310db05&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Protein_vue_vue_type_template_id_5310db05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);