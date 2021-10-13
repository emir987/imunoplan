<template>
  <div class="mt-5 container">
    <div class="row">
      <div class="col-lg-3 col-12 order-lg-first order-last">
        <div class="srch_bar mb-4 pb-2 d-none d-lg-block">
          <input
            ref="search"
            type="text"
            class="search-bar"
            v-model="search"
            placeholder="Pretraga ..."
            @keyup.down="navigateAutocompleteDown()"
            @keyup.up="navigateAutocompleteUp()"
            @keydown.enter="openBlogBySearch()"
            @focus="searchFocused = true"
            @blur="
              removeSearchFocus();
              activeAutocomplete = -1;
            "
          />
          <span class="input-group-addon">
            <button type="button" @click.prevent="openBlogBySearch()">
              <i class="fas fa-search" aria-hidden="true"></i>
            </button>
          </span>
          <div
            class="autocomplete"
            v-show="search != '' && autocomplete.length > 0 && searchFocused"
          >
            <div
              v-for="(title, i) in autocomplete"
              :key="title.id"
              :class="{ activeAutocomplete: i == activeAutocomplete }"
              @click.prevent="openBlog(title.id)"
            >
              <span>{{ title.title }}</span>
            </div>
          </div>
        </div>

        <div class="categories sidebar-items mb-4 pb-2">
          <div class="sidebar-title">Kategorije</div>
          <div class="sidebar-links">
            <div
              v-for="(category, i) in categories"
              :key="i"
              :class="{ activeCategory: category == activeCategory }"
              @click="activateCategory(category)"
            >
              {{ category }}
            </div>
          </div>
        </div>

        <div class="categories sidebar-items mb-4 pb-2">
          <div class="sidebar-title">Tagovi</div>
          <div class="sidebar-links">
            <span
              class="tag"
              v-for="(tag, i) in tags"
              :key="i"
              :class="{ activeCategory: tag == activeTag }"
              @click="activateTag(tag)"
            >
              {{ tag }}<span v-show="i != tags.length - 1">, </span>
            </span>
          </div>
        </div>

        <div class="sidebar-items mb-4 pb-2">
          <div class="sidebar-title">Poslednji postovi</div>
          <div class="recent-posts">
            <div
              v-for="(recent, i) in recentBlogs"
              :key="i"
              @click.prevent="openBlog(recent.id)"
            >
              {{ recent.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-12 order-lg-last order-first">
        <div class="srch_bar mb-4 pb-2 d-block d-lg-none">
          <input
            ref="search"
            type="text"
            class="search-bar e"
            v-model="search"
            placeholder="Pretraga ..."
            @keyup.down="navigateAutocompleteDown()"
            @keyup.up="navigateAutocompleteUp()"
            @keydown.enter="openBlogBySearch()"
            @focus="searchFocused = true"
            @blur="
              removeSearchFocus();
              activeAutocomplete = -1;
            "
          />
          <span class="input-group-addon">
            <button type="button" @click.prevent="openBlogBySearch()">
              <i class="fas fa-search" aria-hidden="true"></i>
            </button>
          </span>
          <div
            class="autocomplete"
            v-show="search != '' && autocomplete.length > 0 && searchFocused"
          >
            <div
              v-for="(title, i) in autocomplete"
              :key="title.id"
              :class="{ activeAutocomplete: i == activeAutocomplete }"
              @click.prevent="openBlog(title.id)"
            >
              <span class="small-screen-span">{{ title.title }}</span>
            </div>
          </div>
        </div>

        <div class="search-for" v-if="searchFor != ''" @click="clearSearch()">
          <span>{{ noOfMatchedSearh }} rezultata za "{{ searchFor }}"</span>
        </div>

        <h3 v-if="noOfMatchedSearh == 0 && searchFor == ''">Nema rezultata</h3>

        <div
          class="row blog-card"
          v-for="blog in blogs"
          :key="blog.id"
          :class="{ is_loading: loading }"
        >
          <div class="col-md-4 col-12 blog-image">
            <img
              @click.prevent="openBlog(blog.id)"
              :src="blog.feature_image"
              :alt="blog.title"
              class="open-blog"
            />
            <div class="blog-date">
              <span>{{ formatDate(blog.created_at) }}</span>
            </div>
          </div>
          <div class="col-md-8 col-12 mob-no-padding" :key="blog.id">
            <div class="blog-card-content">
              <div>
                <h4
                  class="open-blog-title mt-3 mt-md-0"
                  @click.prevent="openBlog(blog.id)"
                >
                  {{ blog.title }}
                </h4>
                <p>
                  {{ shortBlog(blog.content) }}
                </p>
              </div>
              <a @click.prevent="openBlog(blog.id)" class="read-more mt-auto"
                >Pročitaj više &nbsp;..&nbsp;
                <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="pagination-custom my-4" v-if="maxPage > 0">
          <button
            class="prev"
            :disabled="paginateSlideWindow < 1"
            @click="decreasePagination"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div
            class="paginate-item"
            :class="{ active_paginate: i == activePage }"
            @click="paginate(i)"
            v-for="i in previewPages"
            :key="i"
          >
            {{ i + paginateSlideWindow }}
          </div>
          <button
            :disabled="paginateSlideWindow + previewPages >= maxPage"
            @click="increasePagination"
            class="next"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.small-screen-span {
  white-space: pre;
  overflow: auto;
}
</style>

<script>
export default {
  props: {},
  data() {
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
      noOfMatchedSearh: -1,
    };
  },

  created() {
    this.loading = true;
    this.imgLoading = true;
    axios
      .get("/api/blog", { params: { first: true } })
      .then((response) => {
        console.log(response.data);

        this.noOfMatchedSearh = response.data.totalResults;
        this.blogs = response.data.blogs;
        this.categories = response.data.categories;
        this.tags = response.data.tags;
        this.recentBlogs = response.data.recent;
        this.titlesForAutocomplete = response.data.titles;

        this.maxPage = response.data.pages;
        if (this.maxPage < 5) this.previewPages = Math.ceil(this.maxPage);
        this.$nextTick(() => {
          this.loading = false;
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },

  computed: {
    autocomplete() {
      return this.titlesForAutocomplete.filter(({ title }) => {
        return title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    getBlogs(search = null) {
      this.loading = true;
      this.imgLoading = true;
      const currentPage = this.activePage + this.paginateSlideWindow - 1;
      const params = { page: currentPage };
      if (this.activeCategory != null) params.category = this.activeCategory;
      if (this.activeTag != null) params.tag = this.activeTag;
      if (search !== null) params.search = search;

      axios
        .get("/api/blog", {
          params: params,
        })
        .then((response) => {
          console.log(response);

          this.noOfMatchedSearh = response.data.totalResults;
          this.blogs = response.data.blogs;
          this.maxPage = response.data.pages;
          if (this.maxPage < 5) this.previewPages = Math.ceil(this.maxPage);

          window.scrollTo({ top: 0, behavior: "smooth" });
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch(function (error) {
          console.log("Error message: ", error.response.data);
        });
    },
    activateCategory(category) {
      if (this.activeCategory == category) {
        //remove category

        this.activeCategory = null;
      } else {
        this.activeCategory = category;
      }
      this.getBlogs();
    },
    activateTag(tag) {
      if (this.activeTag == tag) {
        //remove category
        this.activeTag = null;
      } else {
        this.activeTag = tag;
      }
      this.getBlogs();
    },

    openBlogBySearch() {
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
    navigateAutocompleteDown() {
      if (this.activeAutocomplete >= this.autocomplete.length - 1) return;
      this.activeAutocomplete = this.activeAutocomplete + 1;
    },
    navigateAutocompleteUp() {
      if (this.activeAutocomplete < 0) return;
      this.activeAutocomplete = this.activeAutocomplete - 1;
    },

    searchBlogs() {
      this.searchFor = this.search;
      this.getBlogs(this.search);
    },
    clearSearch() {
      this.search = "";
      this.openBlogBySearch();
    },
    removeSearchFocus() {
      //allow click on searched title, then remove focus
      setTimeout(() => (this.searchFocused = false), 100);
    },

    openBlog(id) {
      window.open("/blog/" + id);
    },

    paginate(page) {
      //if current do nothing
      if (page == this.activePage) return;
      this.activePage = page;
      this.getBlogsByPaginate();
    },
    increasePagination() {
      this.paginateSlideWindow = this.paginateSlideWindow + 1;
      this.getBlogsByPaginate();
    },
    decreasePagination() {
      this.paginateSlideWindow = this.paginateSlideWindow - 1;
      this.getBlogsByPaginate();
    },
    getBlogsByPaginate() {
      if (this.searchFor != "") {
        this.getBlogs(this.search);
      } else {
        this.getBlogs();
      }
    },

    shortBlog(blogContent) {
      //remove html tags for short text
      let content = blogContent.replace(/<\/?[^>]+(>|$)/g, "");
      const lastIndex = content.lastIndexOf(" ");

      content = content.substring(0, lastIndex);
      content = content.replace(/\&nbsp;/g, "");
      return content + "...";
    },
    formatDate(date) {
      let dateObject = new Date(date);

      return `${dateObject.getDate()} ${dateObject.toLocaleString("default", {
        month: "short",
      })}, ${dateObject.getFullYear()}`;
    },
  },
};
</script>