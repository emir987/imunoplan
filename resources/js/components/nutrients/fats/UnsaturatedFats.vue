<template>
  <div class="container mt-5 pt-5">
    <h2 class="mineral-name text-center mt-n5">
      Nezasićene masti <i class="fas fa-check-circle" style="color: green"></i>
    </h2>
    <div class="circle-square-items mb-4">
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner green-bg">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Izvori</div>
          <div class="sources-grid">
            <div
              class="d-flex align-items-center my-1"
              v-for="(source, index) in sources"
              :key="index"
            >
              <img width="23px" :src="source.photo" alt="" />
              <span>{{ source.source_food }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner green-bg heart-pulse">
            <img src="/assets/vitamins/heart.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Uloga</div>
          <div v-for="(purpose, index) in purposes" :key="index">
            <p class="mb-2"><span class="p-1">- </span>{{ purpose.purpose }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fats"],
  data() {
    return {
      purposes: this.fats.purposes,
      sources: this.fats.sources,
    };
  },
};
</script>
