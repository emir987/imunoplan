(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
    id: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      blog: "",
      categories: [],
      recentBlogs: [],
      loading: true
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/blog/" + this.id).then(function (response) {
      // handle success
      console.log(response.data);
      _this.blog = response.data.blog;
      _this.categories = response.data.categories;
      _this.recentBlogs = response.data.recent;
      _this.loading = false;
    })["catch"](function (error) {
      // handle error
      console.log(error);
    }).then(function () {// always executed
    });
  },
  methods: {
    openBlog: function openBlog(id) {
      window.open("/blog/" + id);
    },
    formatDate: function formatDate(date) {
      var dateObject = new Date(date);
      return "".concat(dateObject.getDate(), " ").concat(dateObject.toLocaleString("default", {
        month: "short"
      }), ", ").concat(dateObject.getFullYear());
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2& ***!
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
  return _c("div", { staticClass: "mt-5 container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-12 order-lg-first order-last" }, [
        _c("div", { staticClass: "categories sidebar-items mb-4 pb-2" }, [
          _c("div", { staticClass: "sidebar-title" }, [_vm._v("Kategorije")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sidebar-links" },
            _vm._l(_vm.categories, function(category, index) {
              return _c("div", { key: index }, [
                _vm._v("\n            " + _vm._s(category) + "\n          ")
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-items mb-4 pb-2" }, [
          _c("div", { staticClass: "sidebar-title" }, [
            _vm._v("Poslednji postovi")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "recent-posts" },
            _vm._l(_vm.recentBlogs, function(recent, index) {
              return _c(
                "div",
                {
                  key: index,
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.openBlog(recent.id)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " + _vm._s(recent.title) + "\n          "
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-12 order-lg-last order-first" }, [
        _c("div", { class: { lds_dual_ring: _vm.loading } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.loading,
                  expression: "!loading"
                }
              ],
              staticClass: "mb-5 blog-info"
            },
            [
              _c("h2", { staticClass: "mb-4" }, [
                _c("b", [_vm._v(_vm._s(_vm.blog.title))])
              ]),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(_vm.blog.content) } }),
              _vm._v(" "),
              _c("div", { staticClass: "published_at" }, [
                _vm._v(
                  "\n            Objavljeno: " +
                    _vm._s(_vm.formatDate(_vm.blog.created_at)) +
                    "\n          "
                )
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blog/BlogInfo.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/blog/BlogInfo.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogInfo.vue?vue&type=template&id=1f0258a2& */ "./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2&");
/* harmony import */ var _BlogInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blog/BlogInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/BlogInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogInfo.vue?vue&type=template&id=1f0258a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/BlogInfo.vue?vue&type=template&id=1f0258a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogInfo_vue_vue_type_template_id_1f0258a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);