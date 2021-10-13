<template>
  <div class="container mt-5 pt-5">
    <h2 class="mineral-name text-center mt-n5">
      Trans masti <i class="fas fa-exclamation-circle exclamation-red"></i>
    </h2>
    <div class="circle-square-items mb-4">
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner red-health">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Izvori</div>
          <i class="fas fa-exclamation-circle exclamation-red"></i>
          <span
            >Nastaju takozvanim procesom hidrogenizacije ulja na temperaturi od
            260 stepeni čime se dovedi u čvrsto stanje!</span
          >
          <hr class="my-2" />
          <div
            class="d-flex align-items-center my-1"
            v-for="(source, index) in sources"
            :key="index"
          >
            <img width="27px" :src="source.photo" alt="" />
            <span class="ml-2">{{ source.source_food }}</span>
          </div>
        </div>
      </div>
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner heart-pulse red-health">
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

<style scoped>
.exclamation-red {
  color: rgb(196, 45, 19);
}
.red-health {
  background-color: rgb(196, 45, 19);
}
</style>


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
