<template>
  <div class="mt-5 container">
    <div class="row">
      <div class="col-lg-3 col-12 order-lg-first order-last">
        <div class="categories sidebar-items mb-4 pb-2">
          <div class="sidebar-title">Kategorije</div>
          <div class="sidebar-links">
            <div v-for="(category, index) in categories" :key="index">
              {{ category }}
            </div>
            <!-- <div>Zdravlje</div>
            <div>Hrana</div>
            <div>Mrsavljenje</div>
            <div>Trening</div> -->
          </div>
        </div>

        <div class="sidebar-items mb-4 pb-2">
          <div class="sidebar-title">Poslednji postovi</div>
          <div class="recent-posts">
            <div
              v-for="(recent, index) in recentBlogs"
              :key="index"
              @click.prevent="openBlog(recent.id)"
            >
              {{ recent.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-12 order-lg-last order-first">
        <div :class="{ lds_dual_ring: loading }">
          <div class="mb-5 blog-info" v-show="!loading">
            <h2 class="mb-4">
              <b>{{ blog.title }}</b>
            </h2>
            <div v-html="blog.content"></div>
            <div class="published_at">
              Objavljeno: {{ formatDate(blog.created_at) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      blog: "",
      categories: [],
      recentBlogs: [],
      loading: true,
    };
  },
  created() {
    axios
      .get("/api/blog/" + this.id)
      .then((response) => {
        // handle success
        console.log(response.data);
        this.blog = response.data.blog;
        this.categories = response.data.categories;
        this.recentBlogs = response.data.recent;

        this.loading = false;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },

  methods: {
    openBlog(id) {
      window.open("/blog/" + id);
    },
    formatDate(date) {
      let dateObject = new Date(date);

      return `${dateObject.getDate()} ${dateObject.toLocaleString("default", {
        month: "short",
      })}, ${dateObject.getFullYear()}`;
    },
  },

  mounted() {},
};
</script>