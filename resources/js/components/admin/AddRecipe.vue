
<template>
  <div class="pt-4">
    <div class="">
      <form class="w-75 m-auto" @submit.prevent="addRecipe">
        <label
          class="d-flex mb-4 mx-auto lbl-photo"
          for="upload"
          style="cursor: pointer"
        >
          <div
            id="upload-picture-new"
            style="width: 75px; height: 75px"
            class="upload-picture-new"
          ></div>
          <input
            name="file"
            type="file"
            id="upload"
            style="display: none"
            accept="image/x-png,image/gif,image/jpeg"
            @change="change"
          />
        </label>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name_recipe">Naziv</label>
            <input
              ref="recipe_name_ref"
              placeholder="Unesite naziv recepta"
              id="name_recipe"
              type="text"
              v-model="name"
              class="form-control"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="serving_size">Porcija</label>
            <input
              ref="serving_size_ref"
              placeholder="Po osobi"
              id="serving_size"
              type="text"
              v-model.number="serving_size"
              class="form-control"
              value="100"
            />
          </div>
          <div class="form-group col-md-3">
            <label>Obrok</label>
            <multiselect
              ref="meal_ref"
              class=""
              v-model="meals"
              placeholder="Odaberite tip obroka"
              :options="meals_options"
			  track-by="id"
			  label="name"
              :allowEmpty="false"
              :multiple="true"
              :select-label="''"
            ></multiselect>
          </div>

          <div class="form-group col-md-3">
            <label>Dijeta</label>
            <multiselect
              ref="diet_ref"
              class=""
              v-model="diets"
              placeholder="Odgovarajuće dijete"
              :options="diets_options"
			  track-by="id"
			  label="name"
              :allowEmpty="false"
              :multiple="true"
              :select-label="''"
            >
              <template slot="noResult">Nema rezultata</template>
            </multiselect>
          </div>
        </div>

        <div class="form-group mb-0">
          <label for="name_recipe">Sastojci</label>
          <div class="d-flex flex-column">
            <component
              v-for="(component, index) in components"
              :no="index"
              :key="index"
              :is="component"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="description">Opis</label>
          <vue-editor ref="description_ref" v-model="description"></vue-editor>
        </div>

        <input
          type="submit"
          class="button-green my-3"
          style="border-radius: 4px"
          value="Dodaj"
        />
      </form>
    </div>
  </div>
</template>



<script>
import Multiselect from "vue-multiselect";
import { VueEditor } from "vue2-editor";

export default {
  props: {
    ingredients_prop: {
      type: Array,
      default: [],
    },
  },
  components: {
    Multiselect,
    VueEditor,
  },
  data() {
    return {
      meals_options: [{ "name":"doručak", id:1 }, {name:"ručak",id:2}, {name:"večera",id:3}, {name:"obrok",id:4}],
      diets_options: [
        {id:2, name:"Vegetarijanska"},
		{id:3, name:"Vegan"},
		{id:4, name:"Keto"},
		{id:5, name:"Mediteranska"},
		{id:6, name:"Paleo"}
      ],
      diets: [],
      meals: [],
      ingredients: this.ingredients_prop.map(({id, name, measure_name }) => ({
		id: id,
        name: name,
        measure_name: measure_name,
      })),
      fileValue: "",
      name: "",
      serving_size: "",
      description: "",
      Swal: require("sweetalert2"),
    };
  },
  created() {
    this.sendData(this.ingredients);
  },

  computed: {
    components() {
      return this.$store.state.components;
    },
    ingredients_value() {
      return this.$store.state.ingredients_value;
    },
  },

  methods: {
    sendData(ingredients) {
      this.$store.commit("ingredients", ingredients);
    },

    addRecipe: function () {
      if (!this.validate()) return;
      let data = new FormData();
      data.append("photo", this.fileValue);
      data.append("name", this.name);
      data.append("serving_size", this.serving_size);
      data.append("description", this.description);
      data.append("meals", JSON.stringify(this.meals));
      data.append("ingredients", JSON.stringify(this.ingredients_value));
      data.append("diets", JSON.stringify(this.diets));

      axios({
        method: "post",
        url: "../api/recipe",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
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
              file.type === "image/jpeg"
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
      if (this.name == "") {
        this.$refs.recipe_name_ref.style.border = "1px solid red";
        return false;
      } else {
        this.$refs.recipe_name_ref.style.border = "none";
      }

      if (this.serving_size == 0) {
        this.$refs.serving_size_ref.style.border = "1px solid red";
        return false;
      } else {
        this.$refs.serving_size_ref.style.border = "none";
      }

      if (this.meals == "") {
        this.showMultiselectError(this.$refs.meal_ref.$el);
        return false;
      } else {
        this.removeMultiselectError(this.$refs.meal_ref.$el);
      }

      if (this.description.length < 20) {
        this.$refs.description_ref.$el.style.border = "1px solid red";
        return false;
      } else {
        this.$refs.description_ref.$el.style.border = "none";
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

