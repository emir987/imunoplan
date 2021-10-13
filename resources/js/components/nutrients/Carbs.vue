<template>
  <div class="container mt-5 pt-4">
    <div class="circle-square-items mb-4">
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner green-bg">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Dobri izvori</div>
          <div class="sources-grid">
            <div
              class="d-flex align-items-center my-1"
              v-for="(source, index) in goodSources"
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
          <div class="circle-inner red-health">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Loši izvori</div>
          <div class="sources-grid">
            <div
              class="d-flex align-items-center my-1"
              v-for="(source, index) in badSources"
              :key="index"
            >
              <img width="23px" :src="source.photo" alt="" />
              <span>{{ source.source_food }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.red-health {
  background-color: rgb(196, 45, 19);
}
</style>

<script>
export default {
  props: ["goodSources", "badSources"],
};
</script>