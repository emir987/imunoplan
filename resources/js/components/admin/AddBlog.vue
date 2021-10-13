
<template>
  <div class="pt-4">
    <div class="">
      <form class="w-75 m-auto" @submit.prevent="addBlog">
        <div class="form-group">
          <button type="button">
            <label
              class="d-flex m-0 mx-auto"
              for="upload"
              style="cursor: pointer"
            >
              Odaberite naslovnu sliku
            </label>
          </button>
          <span v-if="featuredImage !== null">{{ featureImageName }}</span>

          <div
            id="upload-picture-new"
            style="width: 95px; height: 75px"
            class="upload-picture-new mt-3"
            v-if="featuredImage !== null"
          >
            <i class="far fa-times-circle" @click="featuredImage = null"></i>
          </div>
        </div>

        <input
          name="file"
          type="file"
          id="upload"
          style="display: none"
          accept="image/x-png,image/gif,image/jpeg"
          @change="change"
        />

        <div class="form-row">
          <div class="form-group col-md-8">
            <label>Kategorije</label>
            <div class="form-check">
              <input
                v-model="categories"
                class="form-check-input"
                type="checkbox"
                value="Imunitet"
                id="imunitet"
              />
              <label class="form-check-label" for="imunitet">Imunitet</label>
            </div>
            <div class="form-check">
              <input
                v-model="categories"
                class="form-check-input"
                type="checkbox"
                value="Recepti"
                id="recepti"
              />
              <label class="form-check-label" for="recepti">Recepti</label>
            </div>
            <div class="form-check">
              <input
                v-model="categories"
                class="form-check-input"
                type="checkbox"
                value="Dijeta"
                id="dijeta"
              />
              <label class="form-check-label" for="dijeta">Dijeta</label>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-8">
            <label for="tagovi">Tagovi</label>
            <multiselect
              id="tagovi"
              v-model="tags"
              tag-placeholder="Dodaj kao novi tag"
              placeholder="Pretraži ili dodaj tagove"
              :options="tagOptions"
              :multiple="true"
              :taggable="true"
              :show-labels="false"
              @tag="addTag"
            >
            </multiselect>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-8">
            <label for="title">Naslov</label>
            <input
              ref="title_ref"
              placeholder="Unesite naslov"
              id="title"
              type="text"
              v-model="title"
              class="form-control"
            />
          </div>
        </div>

        <div class="form-group">
          <label>Tekst</label>
          <vue-editor
            v-model="content"
            useCustomImageHandler
            @image-added="handleImageAdded"
            @image-removed="handleImageRemoved"
            :customModules="customModulesForEditor"
            :editorOptions="editorSettings"
          ></vue-editor>
        </div>

        <input
          type="submit"
          class="button-green my-3"
          style="border-radius: 4px"
          value="Dodaj"
        />
      </form>
    </div>

    <div class="preview container" v-if="title != '' || content != ''">
      <hr />
      <h2 class="my-5 text-center" style="text-decoration: underline">
        Pregled
      </h2>
      <h3 class="mb-4">{{ title }}</h3>
      <div v-html="content"></div>
    </div>
  </div>
</template>



<script>
import Multiselect from "vue-multiselect";
import { VueEditor } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";

export default {
  components: {
    Multiselect,
    VueEditor,
  },
  data() {
    return {
      featuredImage: null,
      categories: [],
      tags: [],
      tagOptions: ["covid-19", "vegan", "paleo"],
      title: "",
      content: "",
      uploads: [],
      featureImageName: "",
      Swal: require("sweetalert2"),
      customModulesForEditor: [
        { alias: "imageDrop", module: ImageDrop },
        { alias: "imageResize", module: ImageResize },
      ],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {},
        },
      },
    };
  },

  methods: {
    addBlog() {
      //   if (!this.validate()) return;

      let data = new FormData();
      data.append("feature_image", this.featuredImage);
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("blog_images", JSON.stringify(this.uploads));
      data.append("categories", JSON.stringify(this.categories));
      data.append("tags", JSON.stringify(this.tags));

      axios({
        method: "post",
        url: "/api/blog",
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

    change(evt) {
      if (evt.target.files.length != 0) {
        const file = evt.target.files[0];
        this.featuredImage = file;
        this.featureImageName = file.name;

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
                title: "Neuspješno!",
                text:
                  "Slika " +
                  file.name +
                  " mora biti u formatu jpg, png ili jpeg.",
                icon: "error",
              });
              return false;
            }
          } else {
            this.Swal.fire({
              title: "Neuspješno!",
              text: "Maksimalna veličina slike je 2MB",
              icon: "error",
            });
            return false;
          }
        }
      }
    },

    validate() {
      if (this.featuredImage == "") {
        this.Swal.fire({
          title: "Odaberite sliku.",
          icon: "error",
        });
        return false;
      }
      if (this.title == "") {
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

    showMultiselectError(el) {
      el.getElementsByClassName("multiselect__tags")[0].style.border =
        "1px solid red";
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    removeMultiselectError(el) {
      el.getElementsByClassName("multiselect__tags")[0].style.border = "none";
    },

    addTag(newTag) {
      this.tagOptions.push(newTag);
      this.tags.push(newTag);
    },

    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: "/api/blog/upload",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response);

          const url = response.data.url; // Get url from response
          this.uploads.push(url);
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleImageRemoved(filename) {
      var formData = new FormData();
      formData.append("image", filename);

      axios({
        url: "/api/blog/deleteImage",
        method: "POST",
        data: formData,
      })
        .then((response) => {
          console.log(response);
          const url = response.data.url;
          this.uploads.splice(
            this.uploads.findIndex((upload) => upload !== url),
            1
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

