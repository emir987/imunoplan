(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Blog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {},
  data: function data() {
    return {
      search: "",
      blogs: [],
      recentBlogs: [],
      paginateSlideWindow: 0,
      maxPage: 0,
      previewPages: 5,
      activePage: 1,
      loading: false,
      imgLoading: false,
      categories: [],
      activeCategory: null,
      tags: [],
      activeTag: null,
      titlesForAutocomplete: [],
      activeAutocomplete: -1,
      searchFocused: false,
      searchFor: "",
      noOfMatchedSearh: -1
    };
  },
  created: function created() {
    var _this = this;

    this.loading = true;
    this.imgLoading = true;
    axios.get("/api/blog", {
      params: {
        first: true
      }
    }).then(function (response) {
      console.log(response.data);
      _this.noOfMatchedSearh = response.data.totalResults;
      _this.blogs = response.data.blogs;
      _this.categories = response.data.categories;
      _this.tags = response.data.tags;
      _this.recentBlogs = response.data.recent;
      _this.titlesForAutocomplete = response.data.titles;
      _this.maxPage = response.data.pages;
      if (_this.maxPage < 5) _this.previewPages = Math.ceil(_this.maxPage);

      _this.$nextTick(function () {
        _this.loading = false;
      });
    })["catch"](function (error) {
      // handle error
      console.log(error);
    }).then(function () {// always executed
    });
  },
  computed: {
    autocomplete: function autocomplete() {
      var _this2 = this;

      return this.titlesForAutocomplete.filter(function (_ref) {
        var title = _ref.title;
        return title.toLowerCase().includes(_this2.search.toLowerCase());
      });
    }
  },
  methods: {
    getBlogs: function getBlogs() {
      var _this3 = this;

      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.loading = true;
      this.imgLoading = true;
      var currentPage = this.activePage + this.paginateSlideWindow - 1;
      var params = {
        page: currentPage
      };
      if (this.activeCategory != null) params.category = this.activeCategory;
      if (this.activeTag != null) params.tag = this.activeTag;
      if (search !== null) params.search = search;
      axios.get("/api/blog", {
        params: params
      }).then(function (response) {
        console.log(response);
        _this3.noOfMatchedSearh = response.data.totalResults;
        _this3.blogs = response.data.blogs;
        _this3.maxPage = response.data.pages;
        if (_this3.maxPage < 5) _this3.previewPages = Math.ceil(_this3.maxPage);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        _this3.$nextTick(function () {
          _this3.loading = false;
        });
      })["catch"](function (error) {
        console.log("Error message: ", error.response.data);
      });
    },
    activateCategory: function activateCategory(category) {
      if (this.activeCategory == category) {
        //remove category
        this.activeCategory = null;
      } else {
        this.activeCategory = category;
      }

      this.getBlogs();
    },
    activateTag: function activateTag(tag) {
      if (this.activeTag == tag) {
        //remove category
        this.activeTag = null;
      } else {
        this.activeTag = tag;
      }

      this.getBlogs();
    },
    openBlogBySearch: function openBlogBySearch() {
      console.log("ej");

      if (this.activeAutocomplete == -1) {
        //enter pressed on raw search, searcch for results
        this.searchFor = this.search;
        this.getBlogs(this.search);
      } else {
        //enter pressed on any title, open blog
        this.openBlog(this.autocomplete[this.activeAutocomplete].id);
      }

      this.$refs.search.blur();
    },
    navigateAutocompleteDown: function navigateAutocompleteDown() {
      if (this.activeAutocomplete >= this.autocomplete.length - 1) return;
      this.activeAutocomplete = this.activeAutocomplete + 1;
    },
    navigateAutocompleteUp: function navigateAutocompleteUp() {
      if (this.activeAutocomplete < 0) return;
      this.activeAutocomplete = this.activeAutocomplete - 1;
    },
    searchBlogs: function searchBlogs() {
      this.searchFor = this.search;
      this.getBlogs(this.search);
    },
    clearSearch: function clearSearch() {
      this.search = "";
      this.openBlogBySearch();
    },
    removeSearchFocus: function removeSearchFocus() {
      var _this4 = this;

      //allow click on searched title, then remove focus
      setTimeout(function () {
        return _this4.searchFocused = false;
      }, 100);
    },
    openBlog: function openBlog(id) {
      window.open("/blog/" + id);
    },
    paginate: function paginate(page) {
      //if current do nothing
      if (page == this.activePage) return;
      this.activePage = page;
      this.getBlogsByPaginate();
    },
    increasePagination: function increasePagination() {
      this.paginateSlideWindow = this.paginateSlideWindow + 1;
      this.getBlogsByPaginate();
    },
    decreasePagination: function decreasePagination() {
      this.paginateSlideWindow = this.paginateSlideWindow - 1;
      this.getBlogsByPaginate();
    },
    getBlogsByPaginate: function getBlogsByPaginate() {
      if (this.searchFor != "") {
        this.getBlogs(this.search);
      } else {
        this.getBlogs();
      }
    },
    shortBlog: function shortBlog(blogContent) {
      //remove html tags for short text
      var content = blogContent.replace(/<\/?[^>]+(>|$)/g, "");
      var lastIndex = content.lastIndexOf(" ");
      content = content.substring(0, lastIndex);
      content = content.replace(/\&nbsp;/g, "");
      return content + "...";
    },
    formatDate: function formatDate(date) {
      var dateObject = new Date(date);
      return "".concat(dateObject.getDate(), " ").concat(dateObject.toLocaleString("default", {
        month: "short"
      }), ", ").concat(dateObject.getFullYear());
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--21-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--21-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.small-screen-span[data-v-78e814d4] {\r\n  white-space: pre;\r\n  overflow: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--21-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--21-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--21-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--21-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "srch_bar mb-4 pb-2 d-none d-lg-block" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            ref: "search",
            staticClass: "search-bar",
            attrs: { type: "text", placeholder: "Pretraga ..." },
            domProps: { value: _vm.search },
            on: {
              keyup: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  return _vm.navigateAutocompleteDown()
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  return _vm.navigateAutocompleteUp()
                }
              ],
              keydown: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.openBlogBySearch()
              },
              focus: function($event) {
                _vm.searchFocused = true
              },
              blur: function($event) {
                _vm.removeSearchFocus()
                _vm.activeAutocomplete = -1
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "input-group-addon" }, [
            _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.openBlogBySearch()
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "fas fa-search",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.search != "" &&
                    _vm.autocomplete.length > 0 &&
                    _vm.searchFocused,
                  expression:
                    "search != '' && autocomplete.length > 0 && searchFocused"
                }
              ],
              staticClass: "autocomplete"
            },
            _vm._l(_vm.autocomplete, function(title, i) {
              return _c(
                "div",
                {
                  key: title.id,
                  class: { activeAutocomplete: i == _vm.activeAutocomplete },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.openBlog(title.id)
                    }
                  }
                },
                [_c("span", [_vm._v(_vm._s(title.title))])]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "categories sidebar-items mb-4 pb-2" }, [
          _c("div", { staticClass: "sidebar-title" }, [_vm._v("Kategorije")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sidebar-links" },
            _vm._l(_vm.categories, function(category, i) {
              return _c(
                "div",
                {
                  key: i,
                  class: { activeCategory: category == _vm.activeCategory },
                  on: {
                    click: function($event) {
                      return _vm.activateCategory(category)
                    }
                  }
                },
                [_vm._v("\n            " + _vm._s(category) + "\n          ")]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "categories sidebar-items mb-4 pb-2" }, [
          _c("div", { staticClass: "sidebar-title" }, [_vm._v("Tagovi")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sidebar-links" },
            _vm._l(_vm.tags, function(tag, i) {
              return _c(
                "span",
                {
                  key: i,
                  staticClass: "tag",
                  class: { activeCategory: tag == _vm.activeTag },
                  on: {
                    click: function($event) {
                      return _vm.activateTag(tag)
                    }
                  }
                },
                [
                  _vm._v("\n            " + _vm._s(tag)),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: i != _vm.tags.length - 1,
                          expression: "i != tags.length - 1"
                        }
                      ]
                    },
                    [_vm._v(", ")]
                  )
                ]
              )
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
            _vm._l(_vm.recentBlogs, function(recent, i) {
              return _c(
                "div",
                {
                  key: i,
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
      _c(
        "div",
        { staticClass: "col-lg-9 col-12 order-lg-last order-first" },
        [
          _c("div", { staticClass: "srch_bar mb-4 pb-2 d-block d-lg-none" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              ref: "search",
              staticClass: "search-bar e",
              attrs: { type: "text", placeholder: "Pretraga ..." },
              domProps: { value: _vm.search },
              on: {
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "down", 40, $event.key, [
                        "Down",
                        "ArrowDown"
                      ])
                    ) {
                      return null
                    }
                    return _vm.navigateAutocompleteDown()
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "up", 38, $event.key, [
                        "Up",
                        "ArrowUp"
                      ])
                    ) {
                      return null
                    }
                    return _vm.navigateAutocompleteUp()
                  }
                ],
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.openBlogBySearch()
                },
                focus: function($event) {
                  _vm.searchFocused = true
                },
                blur: function($event) {
                  _vm.removeSearchFocus()
                  _vm.activeAutocomplete = -1
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "input-group-addon" }, [
              _c(
                "button",
                {
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.openBlogBySearch()
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fas fa-search",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.search != "" &&
                      _vm.autocomplete.length > 0 &&
                      _vm.searchFocused,
                    expression:
                      "search != '' && autocomplete.length > 0 && searchFocused"
                  }
                ],
                staticClass: "autocomplete"
              },
              _vm._l(_vm.autocomplete, function(title, i) {
                return _c(
                  "div",
                  {
                    key: title.id,
                    class: { activeAutocomplete: i == _vm.activeAutocomplete },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.openBlog(title.id)
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "small-screen-span" }, [
                      _vm._v(_vm._s(title.title))
                    ])
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm.searchFor != ""
            ? _c(
                "div",
                {
                  staticClass: "search-for",
                  on: {
                    click: function($event) {
                      return _vm.clearSearch()
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.noOfMatchedSearh) +
                        ' rezultata za "' +
                        _vm._s(_vm.searchFor) +
                        '"'
                    )
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.noOfMatchedSearh == 0 && _vm.searchFor == ""
            ? _c("h3", [_vm._v("Nema rezultata")])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.blogs, function(blog) {
            return _c(
              "div",
              {
                key: blog.id,
                staticClass: "row blog-card",
                class: { is_loading: _vm.loading }
              },
              [
                _c("div", { staticClass: "col-md-4 col-12 blog-image" }, [
                  _c("img", {
                    staticClass: "open-blog",
                    attrs: { src: blog.feature_image, alt: blog.title },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.openBlog(blog.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "blog-date" }, [
                    _c("span", [
                      _vm._v(_vm._s(_vm.formatDate(blog.created_at)))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    key: blog.id,
                    staticClass: "col-md-8 col-12 mob-no-padding"
                  },
                  [
                    _c("div", { staticClass: "blog-card-content" }, [
                      _c("div", [
                        _c(
                          "h4",
                          {
                            staticClass: "open-blog-title mt-3 mt-md-0",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.openBlog(blog.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(blog.title) +
                                "\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.shortBlog(blog.content)) +
                              "\n              "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "read-more mt-auto",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.openBlog(blog.id)
                            }
                          }
                        },
                        [
                          _vm._v("Pročitaj više  .. \n              "),
                          _c("i", {
                            staticClass: "fas fa-long-arrow-alt-right"
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          }),
          _vm._v(" "),
          _vm.maxPage > 0
            ? _c(
                "div",
                { staticClass: "pagination-custom my-4" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "prev",
                      attrs: { disabled: _vm.paginateSlideWindow < 1 },
                      on: { click: _vm.decreasePagination }
                    },
                    [_c("i", { staticClass: "fas fa-chevron-left" })]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.previewPages, function(i) {
                    return _c(
                      "div",
                      {
                        key: i,
                        staticClass: "paginate-item",
                        class: { active_paginate: i == _vm.activePage },
                        on: {
                          click: function($event) {
                            return _vm.paginate(i)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(i + _vm.paginateSlideWindow) +
                            "\n        "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "next",
                      attrs: {
                        disabled:
                          _vm.paginateSlideWindow + _vm.previewPages >=
                          _vm.maxPage
                      },
                      on: { click: _vm.increasePagination }
                    },
                    [_c("i", { staticClass: "fas fa-chevron-right" })]
                  )
                ],
                2
              )
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blog/Blog.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/blog/Blog.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=78e814d4&scoped=true& */ "./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/components/blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& */ "./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78e814d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blog/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blog/Blog.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/blog/Blog.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_21_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_21_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--21-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--21-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=style&index=0&id=78e814d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_21_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_21_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_21_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_21_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_21_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_21_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_21_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_21_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_78e814d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=78e814d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Blog.vue?vue&type=template&id=78e814d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_78e814d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);