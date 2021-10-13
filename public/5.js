(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["registered_email"],
  data: function data() {
    return {
      email: "",
      message: "",
      isDisabled: "false",
      loading: false
    };
  },
  methods: {
    emailValidate: function emailValidate() {
      var pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      var validation = this.email.match(pattern) ? true : false;
      return this.inputRed(this.$refs.email, validation);
    },
    messageValidation: function messageValidation() {
      var validation = this.message.length > 5 && this.message.match(/^ *$/) === null ? true : false;
      return this.inputRed(this.$refs.message, validation);
    },
    inputRed: function inputRed(input, validation) {
      if (validation) {
        input.style.borderColor = "green";
        return true;
      } else {
        input.style.borderColor = "red";
        return false;
      }
    },
    send: function send() {
      var _this = this;

      var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

      if (this.emailValidate() == false || this.email == "" || this.message == "" || this.messageValidation() == false) {
        console.log(this.nameValidate);
        swal.fire({
          icon: "error",
          title: "Niste dobro unijeli podatke",
          text: "Provjerire polja ako ste preskočili ili su crvene boje!"
        });
        return;
      }

      this.loading = true;
      axios({
        method: "post",
        url: "./api/message",
        data: {
          message: this.message,
          email: this.email
        },
        validateStatus: function validateStatus(status) {
          return true; // I'm always returning true, you may want to do it depending on the status received
        }
      })["catch"](function (error) {
        console.log(error);
      }).then(function (response) {
        console.log(response);
        _this.loading = false;
        swal.fire({
          icon: "success",
          title: "Uspješno poslato.",
          text: "Registrovanim korisnicima poruke će biti sačuvane u inbox",
          showConfirmButton: false,
          timer: 8000
        }); // document.getElementById("send").disabled = false;
      });
    }
  },
  created: function created() {
    if (typeof this.registered_email !== "undefined") {
      this.email = this.registered_email;
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "body-form" }, [
    _c("form", [
      _c("div", { staticClass: "contact-title" }, [
        _vm._v("Kontaktirajte nas")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email"
            }
          ],
          ref: "email",
          staticClass: "form-control",
          attrs: {
            type: "email",
            id: "email",
            placeholder: "Email adresa",
            disabled: _vm.isDisabled
          },
          domProps: { value: _vm.email },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              },
              function($event) {
                return _vm.emailValidate()
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.message,
              expression: "message"
            }
          ],
          ref: "message",
          staticClass: "form-control",
          attrs: { placeholder: "Poruka", id: "message", rows: "5" },
          domProps: { value: _vm.message },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.message = $event.target.value
              },
              function($event) {
                return _vm.messageValidation()
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "button-gray w-50",
          attrs: { disabled: _vm.loading, id: "send" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.send()
            }
          }
        },
        [
          _vm._v("\n      Pošalji\n      "),
          _c("div", { class: { loaderWhite: _vm.loading } })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Contact.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Contact.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=4c2584f6& */ "./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=4c2584f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);