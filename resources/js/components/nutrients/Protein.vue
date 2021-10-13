<template>
  <div class="container">
    <div class="circle-square-items mb-4">
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner green-bg">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Najbolji izvori</div>
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
          <div class="square-content-header">Čemu služe?</div>
          <div v-for="(purpose, index) in purposes" :key="index">
            <p class="mb-2">
              <span class="p-1">- </span><span v-html="purpose.purpose"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["purposes", "sources"],
};
</script>