
<template>
  <div class="pt-4">
    <form @submit.prevent class="w-75 m-auto">
      <label
        class="d-flex mb-4 lbl-photo mx-auto"
        for="upload"
        style="cursor: pointer"
      >
        <div
          id="upload-picture-new"
          style="width: 75px; height: 75px"
          class="upload-picture-new mx-auto"
        ></div>
        <input
          name="file"
          type="file"
          id="upload"
          style="display: none"
          accept="image/x-png,image/gif,image/jpeg, image/svg+xml"
          @change="change($event)"
        />
      </label>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="foodSearch">Sastojak</label>
          <input
            placeholder="Unesite željeni sastojak"
            id="foodSearch"
            type="text"
            v-model="foodSearch"
            class="form-control"
            ref="ingredientInput"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="mjera_multi">Mjera</label>
          <multiselect
            id="mjera_multi"
            v-model="measure_name_value"
            :options="measure_name_options"
            :searchable="false"
            :multiple="false"
            placeholder="Odaberite mjeru"
            :select-label="''"
            ref="measureInput"
          >
            <template slot="noResult">Nema rezultata</template>
          </multiselect>
        </div>

        <div class="form-group col-md-4">
          <label for="measure_grams">Grama u mjeri</label>
          <input
            placeholder="Unesite težinu"
            id="measure_grams"
            type="number"
            min="0"
            step="0.001"
            v-model.number="measure_grams_value"
            class="form-control"
            value="100"
            ref="measureGramsInput"
          />
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center mt-3">
        <button
          class="mx-1 btn btn-secondary"
          v-on:click="
            next = 0;
            getData(0);
          "
        >
          Učitaj nutrijente
        </button>
        <span class="arrow mx-1" v-on:click="getData(next++)"></span>
      </div>
    </form>

    <div class="mt-3" :class="{ loading: loading }">
      <form
        class="form-add-nutrient"
        @submit.prevent="addNutrient()"
        v-show="show"
        ref="form"
      >
        <h4 class="text-center py-3">
          {{ source.name }} - {{ source.dataType }}
        </h4>
        <div class="grid-form">
          <div
            class="grid-item"
            v-for="(value, key) in nutrientsGrouped"
            :key="key"
          >
            <div>
              <h5 class="text-center py-3">
                {{ key }}
                <i
                  v-if="key == 'Dodatno'"
                  @click="addIngredient"
                  class="fas fa-plus plus"
                ></i>
              </h5>

              <div v-for="(nutrient, i) in value" :key="i">
                <div v-if="nutrient.name != null" class="input-group mb-3">
                  <span class="input-prep">{{ nutrient.name }}:</span>
                  <input
                    placeholder="Količina"
                    :name="nutrient.name"
                    :value="nutrient.quantity"
                    type="number"
                    step="0.001"
                    min="0"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">{{ nutrient.unit }}</span>
                  </div>
                </div>

                <div v-else class="form-row mb-3 px-4">
                  <div class="col-5">
                    <multiselect
                      :ref="'more-name-' + i"
                      class="mx-1"
                      id="mjera_multi"
                      v-model="dodatno[i].name"
                      :options="nutrientsOptions"
                      :searchable="true"
                      :multiple="false"
                      placeholder="Naziv"
                      :select-label="''"
                    >
                      <template slot="noResult">Nema rezultata</template>
                    </multiselect>
                  </div>

                  <div class="col-2">
                    <input
                      :ref="'more-quantity-' + i"
                      placeholder="Količina"
                      v-model="dodatno[i].quantity"
                      type="number"
                      step="0.01"
                      min="0"
                      class="form-control mx-1"
                      style="max-width: inital"
                    />
                  </div>

                  <div class="col-4">
                    <multiselect
                      :ref="'more-unit-' + i"
                      class="mx-1"
                      id="mjera_multi"
                      v-model="dodatno[i].unit"
                      :options="measure_unit_options"
                      :searchable="false"
                      :multiple="false"
                      placeholder="Jedinica mjere"
                      :select-label="''"
                    >
                      <template slot="noResult">Nema rezultata</template>
                    </multiselect>
                  </div>
                  <div class="col-1">
                    <i
                      @click="removeIngredient(i)"
                      class="fas fa-minus-circle minus"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          class="button-green my-3"
          style="border-radius: 4px"
          value="Sačuvaj"
        />
      </form>
    </div>
  </div>
</template>



<script>
import { translateNutrient } from "../../statics/functions.js";
import { setCORS } from "google-translate-api-browser";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  props: {
    ingredients_prop: {
      type: Array,
      default: [],
    },
    nutrientsOptionsProp: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      calories: "",
      fileValue: "",
      foodSearch: "",
      nutrients: [],
      nutrientsGrouped: [],
      loading: false,
      show: false,
      next: 0,
      source: { name: "", dataType: "" },
      form: {},
      measure_name_options: [
        "gr",
        "ml",
        "kasika",
        "kasicica",
        "jedinicno",
        "solja",
      ],
      measure_name_value: "",
      measure_grams_value: 1,

      nutrientsOptions: this.nutrientsOptionsProp.map(({ name }) => name),
      measure_unit_options: ["mg", "g"],
      dodatno: [{ name: "", quantity: 0, unit: "" }],
      Swal: require("sweetalert2"),
    };
  },

  methods: {
    addIngredient: function () {
      this.dodatno.push({ name: "", quantity: 1, unit: "" });
      this.nutrientsGrouped.Dodatno.push({});
    },
    removeIngredient: function (elementID) {
      this.nutrientsGrouped.Dodatno.splice(elementID, 1);
      this.dodatno.splice(elementID, 1);
    },

    addNutrient: function () {
      if (!this.validate()) return;
      if (!this.validateNutrients()) return;
      let data = new FormData();
      const totalNutrients = [...this.nutrients, ...this.dodatno];
      data.append("photo", this.fileValue);
      data.append("ingredient_name", this.foodSearch);
      data.append("nutrients", JSON.stringify(totalNutrients));
      data.append("ingredient_measure_name", this.measure_name_value);
      data.append("ingredient_measure_grams", this.measure_grams_value);
      data.append("calories", this.calories);

      axios({
        method: "post",
        url: "../api/nutrient",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          if (response.status == 200 || response.status == 201) {
            this.Swal.fire({
              title: "Uspješno!",
              text: "Novi sastojak je uspješno dodat!",
              icon: "success",
            });
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
    getData: function () {
      if (!this.validate()) return;
      this.loading = true;
      this.show = false;

      // const translate = setCORS("http://cors-anywhere.herokuapp.com/");

      // translate(this.foodSearch, { to: "en" })
      //   .then((res) => {
      //     // I do not eat six days
      //     console.log(res.text);

      const params = {
        api_key: "4W3IU5PtjarbG8YjDJ32lg9B2xaSVeaJfSJ7QTgi",
        query: this.foodSearch,
      };

      axios
        .get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${params.query}`
        )
        .then((response) => {
          // handle success
          console.log(response.data);

          this.source.name = response.data.foods[this.next].description;
          this.source.dataType = response.data.foods[this.next].dataType;
          this.nutrients = [];
          for (let nutrient of response.data.foods[this.next].foodNutrients) {
            console.log("e");
            const translatedNutrient = translateNutrient(nutrient);
            console.log(translatedNutrient);
            if (
              nutrient.value > 0 &&
              translatedNutrient.name != "not defined" &&
              translatedNutrient.name != "Kalorije"
            ) {
              this.nutrients.push(translatedNutrient);
            }

            if (
              translatedNutrient.name == "Kalorije" &&
              translatedNutrient.unit == "KCAL"
            ) {
              this.calories = translatedNutrient.quantity;
            }
          }

          const arr = this.groupByRecipes(this.nutrients);
          this.nutrientsGrouped = arr;

          this.loading = false;
          this.show = true;
          // })
          // .catch(function (error) {
          //   // handle error
          //   console.log(error);
          // });
        })
        .catch((err) => {
          // console.error(err);
        });
    },
    groupByRecipes: function (objectArray) {
      return objectArray.reduce(
        (acc, obj) => {
          const key0 = obj["type"];
          const group0 = acc[key0] || [];
          let newObj = {};

          newObj = {
            ...acc,
            [key0]: [...group0, obj],
          };

          return newObj;
        },
        { Dodatno: [{}] }
      );
    },
    change: function (evt) {
      if (evt.target.files.length != 0) {
        const file = evt.target.files[0];
        this.fileValue = file;

        if (file) {
          if (file.size < 2097152) {
            if (
              file.type === "image/png" ||
              file.type === "image/jpg" ||
              file.type === "image/jpeg" ||
              file.type === "image/svg+xml"
            ) {
              const reader = new FileReader();

              reader.addEventListener("load", function () {
                $(".upload-picture-new").css(
                  "background",
                  "url('" + reader.result + "')"
                );
              });
              reader.readAsDataURL(file);
              return true;
            } else {
              this.Swal.fire({
                title: "Re-enter a image!",
                text:
                  "Image " + file.name + " is not  jpg, png or jpeg format.",
                icon: "error",
              });
              return false;
            }
          } else {
            this.Swal.fire({
              title: "Re-enter a image!",
              text: "Max size image is 2MB",
              icon: "error",
            });
            return false;
          }
        }
      } else {
        this.Swal.fire({
          title: "Ubacite sliku.",
          text: "Niste odrabrali sliku",
          icon: "error",
        });
        return false;
      }
    },
    validate: function () {
      if (this.fileValue == "") {
        this.Swal.fire({
          title: "Odaberite sliku.",
          icon: "error",
        });
        return false;
      }
      if (this.foodSearch == "") {
        this.$refs.ingredientInput.style.border = "1px solid red";
        return false;
      } else {
        this.$refs.ingredientInput.style.border = "none";
      }

      if (this.measure_name_value == "") {
        this.showMultiselectError(this.$refs.measureInput.$el);
        return false;
      } else {
        this.removeMultiselectError(this.$refs.measureInput.$el);
      }

      if (this.measure_grams_value == 0) {
        this.$refs.measureGramsInput.style.border = "1px solid red";
        return false;
      } else {
        this.$refs.measureGramsInput.style.border = "none";
      }
      return true;
    },
    validateNutrients: function () {
      for (let index = 0; index < this.dodatno.length; index++) {
        const element = this.dodatno[index];
        if (element.name == "") {
          this.showMultiselectError(this.$refs["more-name-" + index][0].$el);
          return false;
        } else {
          this.removeMultiselectError(this.$refs["more-name-" + index][0].$el);
        }

        if (element.quantity == 0) {
          this.$refs["more-quantity-" + index][0].style.border =
            "1px solid red";
          this.$refs["more-quantity-" + index][0].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          return false;
        } else {
          this.$refs["more-quantity-" + index][0].style.border = "none";
        }

        if (element.unit == "") {
          this.showMultiselectError(this.$refs["more-unit-" + index][0].$el);
          return false;
        } else {
          this.$refs["more-unit-" + index][0].$el.style.border = "none";
        }
      }

      return true;
    },
    showMultiselectError: function (el) {
      el.getElementsByClassName("multiselect__tags")[0].style.border =
        "1px solid red";
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    removeMultiselectError: function (el) {
      el.getElementsByClassName("multiselect__tags")[0].style.border = "none";
    },
  },

  mounted() {},
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

