
<template>
  <div class="form-row">
    <div class="form-group col-md-6">
      <multiselect
        class=""
        :value="ingredients_value[no]"
        @input="updateIngredientName($event)"
        placeholder="Odaberite sastojak"
        :options="ingredients"
        track-by="name"
        label="name"
        :allowEmpty="false"
        :multiple="false"
        :select-label="''"
      ></multiselect>
    </div>
    <div class="form-group col-md-5">
      <div class="input-group mb-3">
        <input
          class="form-control"
          type="number"
          min="0"
          step="0.001"
          :value="ingredients_value[no].quantity"
          @input="updateQuantity"
          placeholder="Unesite količinu"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">{{
            ingredients_value[no].measure
          }}</span>
        </div>
      </div>
    </div>
    <div class="form-group col-md-1" v-if="no == 0">
      <i @click="addIngredient" class="fas fa-plus plus"></i>
    </div>
    <div class="form-group col-md-1" v-else>
      <i @click="removeIngredient" class="fas fa-minus-circle minus"></i>
    </div>
  </div>
</template>



<script>
import Multiselect from "vue-multiselect";

export default {
  props: ["no"],
  components: {
    Multiselect,
  },
  created() {
    this.populateArray(this.no);
  },
  computed: {
    ingredients_value() {
      return this.$store.state.ingredients_value;
    },
    ingredients() {
      return this.$store.state.ingredients;
    },
  },
  data() {
    return {};
  },

  methods: {
    addIngredient() {
      this.$store.commit("addIngredient");
    },
    removeIngredient() {
      this.$store.commit("removeIngredient", this.no);
    },
    populateArray(no) {
      this.$store.commit("populateArray", no);
    },

    updateIngredientName: function (event) {
      const payload = { key1: event, key2: this.no };
      this.$store.commit("updateIngredientName", payload);
    },
    updateQuantity: function (event) {
      const payload = { key1: event.target.value, key2: this.no };
      this.$store.commit("updateQuantity", payload);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

