(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    onClickaway: vue_clickaway__WEBPACK_IMPORTED_MODULE_0__["directive"]
  },
  props: ["messages", "registered_id", "all_nutricionist"],
  data: function data() {
    return {
      finalArray: [],
      all_messages: [],
      current: 0,
      message_from: this.messages[0].from,
      new_message: "",
      active_to: this.messages[0].to != this.registered_id ? this.active_to = this.messages[0].to : this.active_to = this.messages[0].from,
      search: "",
      viewMenu: false,
      top: "0px",
      left: "0px",
      active_id: "",
      active_element: "",
      active_message: "",
      edit: [],
      expand: false,
      search_message: "",
      isEditing: false,
      isFirst: true
    };
  },
  computed: {
    filtered: function filtered() {
      var _this = this;

      return this.finalArray.filter(function (message) {
        return message.name.toLowerCase().match(_this.search.toLowerCase());
      });
    },
    filteredMessage: function filteredMessage() {
      var _this2 = this;

      if (this.all_messages.lenght == 0) return [];
      return this.all_messages.filter(function (message) {
        return message.message.toLowerCase().match(_this2.search_message.toLowerCase());
      });
    },
    dataMessage: function dataMessage() {}
  },
  created: function created() {
    if (!this.messages[0].empty) this.readMessages(this.messages[0].from, this.messages[0].to);
    this.makeFinale();
  },
  watch: {
    current: function current(val) {
      this.finalArray[val].to != this.registered_id ? this.active_to = this.finalArray[val].to : this.active_to = this.finalArray[val].from;
      if (typeof this.active_to == "undefined") this.active_to = this.finalArray[val].id;
    }
  },
  methods: {
    shortMessages: function shortMessages() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var maxLen = arguments.length > 1 ? arguments[1] : undefined;
      var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
      console.log(str);
      if (str.length <= maxLen) return str;
      console.log(str.lastIndexOf(separator, maxLen));

      if (str.lastIndexOf(separator, maxLen) == -1) {
        return str.substr(0, 120) + "...";
      }

      return str.substr(0, str.lastIndexOf(separator, maxLen)) + "...";
    },
    makeFinale: function makeFinale() {
      var names = new Set(this.messages.map(function (message) {
        return message.name;
      }));
      var merged = [].concat(_toConsumableArray(this.messages), _toConsumableArray(this.all_nutricionist.filter(function (d) {
        return !names.has(d.name);
      })));
      this.messages[0].empty ? this.finalArray = this.all_nutricionist : this.finalArray = merged;
    },
    formatDate: function formatDate() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (date == "") return;
      var dateObject = new Date(date);
      var updateObject = new Date(update);
      if (updateObject.getTime() > dateObject.getTime()) dateObject = updateObject;
      return "".concat(dateObject.getHours(), ":").concat(dateObject.getMinutes(), " | ").concat(dateObject.toLocaleString("default", {
        month: "short"
      }), " ").concat(dateObject.getDate());
    },
    toggleHamburger: function toggleHamburger() {
      if (typeof this.$refs.messagesContainer !== "undefined") {
        this.$refs.messagesContainer.classList.toggle("mini-inbox");
      }
    },
    readMessages: function readMessages(from, to) {
      var _this3 = this;

      this.new_message = "";
      axios.get("./api/message/".concat(from), {
        params: {
          to: to
        }
      }).then(function (response) {
        console.log(response);
        _this3.all_messages = response.data.messages;

        _this3.$nextTick(function () {
          _this3.$refs.messagesScroll.scrollTop = _this3.$refs.messagesScroll.scrollHeight;

          if (window.innerWidth < 992 && !_this3.isFirst) {
            _this3.toggleHamburger();
          }

          _this3.isFirst = false;
        });

        _this3.active = true;
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {});
    },
    sendMessage: function sendMessage() {
      var _this4 = this;

      if (this.new_message == "" || this.new_message.match(/^ *$/) !== null) return;

      if (this.isEditing) {
        axios.patch("/api/message/".concat(this.active_id), {
          message: this.new_message
        }).then(function (response) {
          console.log("responsee", response);

          if (_this4.all_messages[_this4.all_messages.length - 1].id == _this4.active_id) {
            _this4.finalArray[_this4.current].message = response.data.message;
            _this4.finalArray[_this4.current].created_at = response.data.updated_at;
          }

          var index = _this4.all_messages.findIndex(function (_ref) {
            var id = _ref.id;
            return id == _this4.active_id;
          });

          _this4.all_messages[index].created_at = response.data.updated_at;
          _this4.all_messages[index].message = _this4.new_message;
          _this4.new_message = "";
          _this4.isEditing = false;
        })["catch"](function (error) {
          console.log(error);
        });
        return;
      }

      axios.post("./api/message", {
        message: this.new_message,
        to: this.active_to
      }).then(function (response) {
        if (_this4.messages[0].empty) _this4.messages[0].empty = false;

        _this4.all_messages.push(response.data);

        _this4.new_message = "";
        _this4.finalArray[_this4.current].from = _this4.registered_id;
        _this4.finalArray[_this4.current].to = _this4.finalArray[_this4.current].id;
        _this4.finalArray[_this4.current].message = response.data.message;
        _this4.finalArray[_this4.current].created_at = response.data.created_at;

        _this4.$nextTick(function () {
          _this4.$refs.messagesScroll.scrollTop = _this4.$refs.messagesScroll.scrollHeight;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteMessage: function deleteMessage() {
      var _this5 = this;

      axios["delete"]("./api/message/".concat(this.active_id)).then(function (response) {
        if (_this5.all_messages.length == 1) {
          _this5.finalArray[_this5.current].message = "";
          _this5.finalArray[_this5.current].created_at = ""; // this.finalArray[this.current].created_at = "";

          _this5.all_messages = [];

          _this5.closeMenu();

          return;
        }

        if (_this5.all_messages[_this5.all_messages.length - 1].id == _this5.active_id) {
          _this5.finalArray[_this5.current].message = _this5.all_messages[_this5.all_messages.length - 2].message;
          _this5.finalArray[_this5.current].created_at = _this5.all_messages[_this5.all_messages.length - 2].created_at;
        }

        _this5.closeMenu();

        _this5.all_messages.splice(_this5.all_messages.findIndex(function (_ref2) {
          var id = _ref2.id;
          return id == _this5.active_id;
        }), 1);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editMessage: function editMessage() {
      this.new_message = this.active_message;
      this.isEditing = true;
      this.edit.push(this.active_id);
    },
    setMenu: function setMenu(top, left) {
      // window.innerHeight je visina cijelog ekrana, offsetHeight je tog elementa
      var largestHeight = window.innerHeight - this.$refs.right.offsetHeight - 25;
      var largestWidth = window.innerWidth - this.$refs.right.offsetWidth - 25;
      if (top > largestHeight) top = largestHeight;
      if (left > largestWidth) left = largestWidth;
      this.top = top + "px";
      this.left = left + "px";
    },
    closeMenu: function closeMenu() {
      this.viewMenu = false;
      this.active_element.classList.remove("active_message");
    },
    openMenu: function openMenu(e, id) {
      var _this6 = this;

      if (this.active_element != "") this.active_element.classList.remove("active_message");
      this.viewMenu = true;
      this.active_id = id;
      this.active_element = e.target;
      this.active_element.classList.add("active_message");
      this.$nextTick(function () {
        _this6.$refs.right.focus();

        _this6.setMenu(e.y, e.x);
      });
      e.preventDefault();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages.vue?vue&type=template&id=62dade92&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Messages.vue?vue&type=template&id=62dade92& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid my-4" }, [
    _c("div", { ref: "messagesContainer", staticClass: "messages_container" }, [
      _c(
        "div",
        {
          ref: "hamburger",
          staticClass: "hamburger-messages",
          on: { click: _vm.toggleHamburger }
        },
        [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "inbox" }, [
        _c("div", { staticClass: "headind_srch" }, [
          _c("div", { staticClass: "srch_bar" }, [
            _c("div", { staticClass: "stylish-input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "search-bar",
                attrs: { type: "text", placeholder: "Pretraga" },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "inbox_chat" },
          _vm._l(_vm.filtered, function(message, i) {
            return _c(
              "div",
              {
                key: message.id,
                staticClass: "chat_list",
                class: { active_chat: _vm.current === i },
                on: {
                  click: function($event) {
                    _vm.readMessages(message.from, message.to)
                    _vm.current = i
                  }
                }
              },
              [
                _c("div", { staticClass: "chat_people" }, [
                  _c("div", { staticClass: "chat_img" }, [
                    _c("img", { attrs: { src: message.photo, alt: "sunil" } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "chat_ib" }, [
                    _c("h5", [
                      _vm._v(
                        "\n                " +
                          _vm._s(message.status) +
                          " " +
                          _vm._s(message.name)
                      ),
                      _c("span", { staticClass: "chat_date" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatDate(
                              message.created_at,
                              message.updated_at
                            )
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(_vm._s(_vm.shortMessages(message.message, 85)))
                    ])
                  ])
                ])
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "message position-relative" }, [
        _c("i", {
          staticClass: "fa fa-search mb-3",
          attrs: { "aria-hidden": "true" },
          on: {
            click: function($event) {
              _vm.expand = !_vm.expand
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search_message,
              expression: "search_message"
            }
          ],
          staticClass: "w-0",
          class: { expandSearch: _vm.expand },
          attrs: { type: "text" },
          domProps: { value: _vm.search_message },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search_message = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "messagesScroll",
            staticClass: "msg_history",
            attrs: { id: "messages" }
          },
          [
            _vm._l(_vm.filteredMessage, function(message) {
              return [
                message.from == _vm.registered_id
                  ? _c(
                      "div",
                      { key: message.id, staticClass: "outgoing_msg" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "sent_msg",
                            on: {
                              contextmenu: function($event) {
                                _vm.openMenu($event, message.id)
                                _vm.active_message = message.message
                              }
                            }
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(message.message) +
                                  "\n              "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "message_detail" }, [
                          _c("div", { staticClass: "time_date" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm.formatDate(
                                    message.created_at,
                                    message.updated_at
                                  )
                                ) +
                                "\n              "
                            )
                          ]),
                          _vm._v(" "),
                          message.created_at != message.updated_at ||
                          _vm.edit.includes(message.id)
                            ? _c("div", { staticClass: "time_date" }, [
                                _vm._v(
                                  "\n                - Izmijenjeno\n              "
                                )
                              ])
                            : _vm._e()
                        ])
                      ]
                    )
                  : _c(
                      "div",
                      { key: message.id, staticClass: "incoming_msg" },
                      [
                        _c("div", { staticClass: "received_msg" }, [
                          _c("div", { staticClass: "received_withd_msg" }, [
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(message.message) +
                                  "\n                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "time_date" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.formatDate(
                                      message.created_at,
                                      message.updated_at
                                    )
                                  )
                              )
                            ])
                          ])
                        ])
                      ]
                    )
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "type_msg" }, [
          _c("div", { staticClass: "input_msg_write" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.new_message,
                  expression: "new_message"
                }
              ],
              staticClass: "write_msg",
              attrs: { type: "text", placeholder: "Type a message" },
              domProps: { value: _vm.new_message },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.sendMessage()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.new_message = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "msg_send_btn",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.sendMessage()
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-paper-plane" })]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.viewMenu
      ? _c(
          "ul",
          {
            directives: [
              {
                name: "on-clickaway",
                rawName: "v-on-clickaway",
                value: _vm.closeMenu,
                expression: "closeMenu"
              }
            ],
            ref: "right",
            style: { top: _vm.top, left: _vm.left },
            attrs: { id: "right-click-menu", tabindex: "-1" }
          },
          [
            _c(
              "li",
              {
                on: {
                  click: function($event) {
                    return _vm.deleteMessage()
                  }
                }
              },
              [_vm._v("Obriši poruku")]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                on: {
                  click: function($event) {
                    _vm.editMessage()
                    _vm.closeMenu()
                  }
                }
              },
              [_vm._v("\n      Izmjeni poruku\n    ")]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("button", { attrs: { type: "button" } }, [
        _c("i", {
          staticClass: "fa fa-search",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Messages.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Messages.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=62dade92& */ "./resources/js/components/Messages.vue?vue&type=template&id=62dade92&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/components/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Messages.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Messages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Messages.vue?vue&type=template&id=62dade92&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Messages.vue?vue&type=template&id=62dade92& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=62dade92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Messages.vue?vue&type=template&id=62dade92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_62dade92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);