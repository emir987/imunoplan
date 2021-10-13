<template>
  <div class="container">
    <div class="nutrients-circles">
      <div v-for="vitamin in distinct" :key="vitamin.id">
        <div
          class="circle-item"
          @click="renderVitamin(vitamin.symbol, vitamin.id, vitamin.name)"
        >
          <div
            class="circle vitamins-bg vitamins-font"
            :class="{
              active: vitamin.id == activeEl,
            }"
          >
            {{ vitamin.symbol }}
          </div>
        </div>
      </div>
    </div>
    <h2 class="mineral-name text-center mt-n5" v-if="isMineralRoute">
      {{ activeElName }}
    </h2>
    <div class="circle-square-items mb-4">
      <div class="circle-square">
        <div class="circle-outer">
          <div class="circle-inner green-bg">
            <img src="/assets/vitamins/sources.png" alt="" />
          </div>
        </div>
        <div class="square-content">
          <div class="square-content-header">Gdje se nalazi?</div>
          <div class="sources-grid">
            <div
              class="d-flex align-items-center my-1"
              v-for="(source, index) in currentSources"
              :key="index"
            >
              <img width="23px" :src="source.photo" alt="" />
              <span>{{ source.source }}</span>
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
          <div class="square-content-header">Čemu služi?</div>
          <div v-for="(purpose, index) in currentPurposes" :key="index">
            <p class="mb-2"><span class="p-1">- </span>{{ purpose }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPurposes: [],
      currentSources: [],
      activeEl: 0,
      isMineralRoute: this.currentRoute == "minerals" ? true : false,
      activeElName: "",
    };
  },
  props: ["purposes", "distinct", "sources", "currentRoute"],
  created() {},
  methods: {
    renderVitamin(symbol, id, name = "") {
      this.activeEl = id;
      this.currentPurposes = [];
      this.currentSources = [];

      this.activeElName = name;

      this.purposes.forEach((purposes) => {
        if (purposes.symbol == symbol) {
          this.currentPurposes.push(purposes.purpose);
        }
      });

      this.sources.forEach((source) => {
        if (source.symbol == symbol) {
          this.currentSources.push({
            source: source.source_food,
            photo: source.photo,
          });
        }
      });
    },
  },
  mounted() {
    this.currentRoute == "minerals"
      ? this.renderVitamin("Fe", 29, "Gvožđe")
      : this.renderVitamin("A", 1);
  },
};
</script>
