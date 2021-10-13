<template>
  <div
    class="modal fade"
    tabindex=" -1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    id="recipe"
  >
    <div class="modal-dialog" role="document">
      <div id="modal-content" class="modal-content modal-print">
        <div class="modal-header">
          <h4
            class="modal-title margin-auto w-100 text-center"
            id="exampleModalLabel"
          >
            {{ recipe.name }}
          </h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body position-relative">
          <div class="d-lg-none text-center mb-4">
            <img class="recipe-img" :src="recipe.photo" alt="" srcset="" />
          </div>
          <div class="mb-3 d-lg-none col-md-6 col-sm-10 col-xs-11 mx-auto mb-3">
            <div class="d-flex justify-content-around">
              <div class="prep">
                <img
                  src="/assets/recipes/prepare-man.svg"
                  alt=""
                  srcset=""
                /><span>{{ recipe.prepare }} min</span>
              </div>
              <div class="cook">
                <img src="/assets/recipes/cook.svg" alt="" srcset="" /><span
                  >{{ recipe.cook }} min</span
                >
              </div>
              <div class="serve">
                <img src="/assets/recipes/serve.svg" alt="" srcset="" /><span
                  >{{ recipe.serving_size }} ljudi</span
                >
              </div>
            </div>
          </div>

          <div class="row justify-space-beetwen position-relative">
            <div :class="{ lds_dual_ring: loader }"></div>
            <div class="col-lg-8 px-4">
              <div class="row">
                <div
                  class="col-lg-6 col-md-5 col-sm-8 col-xs-10 col-11 mx-auto mb-4"
                >
                  <div class="change-serving-size">
                    <span>Porcija za:</span>
                    <input type="number" v-model="servingSizeModel" />
                    <button
                      style="font-size: 14px"
                      class="button-green"
                      @click="changeServingSize()"
                    >
                      Promijeni
                    </button>
                  </div>
                  <div class="ingredients-quantity-header">
                    <div>Sastojci:</div>
                    <div>Kolicina:</div>
                  </div>
                  <div
                    class="ingredients-quantity-content"
                    v-for="(ingredient, i) in recipe.ingredients"
                    :key="i"
                  >
                    <div>
                      <img :src="ingredient.photo" alt="" /><span
                        class="pl-2"
                        >{{ ingredient.name }}</span
                      >
                    </div>
                    <div class="quantity d-flex">
                      <div v-if="ingredient.measure_name != 'gr'">
                        {{ quantityNative(ingredient.quantity) }}
                        <span
                          v-html="
                            measure_name(
                              ingredient.measure_name,
                              ingredient.photo
                            )
                          "
                        ></span
                        ><span class="px-2">-</span>
                      </div>
                      {{
                        parseFloat(
                          (
                            parseFloat(ingredient.quantity) *
                            parseFloat(ingredient.measure_grams)
                          ).toFixed(1)
                        )
                      }}g
                    </div>
                  </div>
                </div>
              </div>
              <div class="row preparation mb-3">
                <img src="/assets/recipes/preparation2.svg" alt="" srcset="" />
                <h6>Priprema:</h6>
              </div>
              <div
                class="description mb-4"
                v-html="recipe.description"
              ></div>
            </div>
            <div class="col-lg-4 pr-4 pl-5 right print-before">
              <div class="d-lg-block d-none">
                <div class="d-flex justify-content-around mb-3">
                  <div class="prep">
                    <img
                      src="/assets/recipes/prepare-man.svg"
                      alt=""
                      srcset=""
                    /><span>{{ recipe.prepare }} min</span>
                  </div>
                  <div class="cook">
                    <img src="/assets/recipes/cook.svg" alt="" srcset="" /><span
                      >{{ recipe.cook }} min</span
                    >
                  </div>
                  <div class="serve">
                    <img
                      src="/assets/recipes/serve.svg"
                      alt=""
                      srcset=""
                    /><span>{{ recipe.serving_size }} ljudi</span>
                  </div>
                </div>
              </div>
              <img
                class="recipe-img mb-5 d-lg-block d-none"
                :src="recipe.photo"
                alt=""
                srcset=""
              />
              <div class="row">
                <div
                  ref="graph"
                  class="graph col-sm-6 col-6 mx-auto col-md-6 col-lg-12 d-flex justify-content-center"
                >
                  <pie-chart
                    :data="[
                      [
                        'Ugljeni hidrati',
                        parseFloatCustom(recipe.uh_recipe),
                      ],
                      ['Masti', parseFloatCustom(recipe.totalFats)],
                      ['Proteini', parseFloatCustom(recipe.totalProteins)],
                    ]"
                  ></pie-chart>
                </div>
                <div class="mb-5 col-md-6 col-lg-12">
                  <div class="d-flex justify-content-between">
                    <h6>Nutrijenti</h6>
                    <h6>Količina</h6>
                  </div>
                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Kalorije:</div>
                    <div>{{ recipe.calories }}g</div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Proteini:</div>
                    <div>{{ parseFloatCustom(recipe.totalProteins) }}g</div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Ugljeni hidrati:</div>
                    <div>{{ parseFloatCustom(recipe.totalCarbs) }}g</div>
                    <i
                      @click="seeMore($event, 'carbs')"
                      class="fas fa-caret-down"
                    ></i>
                  </div>

                  <div
                    ref="carbs"
                    class="carbs"
                    v-if="nutrients['Ugljeni hidrati'] != undefined"
                  >
                    <div
                      class="d-flex justify-content-between"
                      v-for="(name, i) in nutrients['Ugljeni hidrati']"
                      :key="i"
                    >
                      <div v-if="i !== 'Ugljeni hidrati'">{{ i }}</div>
                      <div v-if="i !== 'Ugljeni hidrati'">
                        {{ sumValue(name) }}
                      </div>
                    </div>
                  </div>

                  <div v-if="nutrients['Šećeri'] != undefined">
                    <div
                      class="d-flex justify-content-between"
                      v-for="(obj, i) in nutrients['Šećeri']"
                      :key="i"
                    >
                      <div>{{ i }}</div>
                      <div>{{ sumValue(obj) }}</div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Vitamini:</div>
                    <div>{{ parseFloatCustom(recipe.totalVitamins) }}g</div>
                    <i
                      @click="seeMore($event, 'vitamins')"
                      class="fas fa-caret-down"
                    ></i>
                  </div>

                  <div
                    ref="vitamins"
                    class="vitamins"
                    v-if="nutrients['Vitamini'] != undefined"
                  >
                    <div
                      class="d-flex justify-content-between"
                      v-for="(name, i) in nutrients['Vitamini']"
                      :key="i"
                    >
                      <div>{{ i }}</div>
                      <div>{{ sumValue(name) }}</div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Minerali:</div>
                    <div>{{ parseFloatCustom(recipe.totalMinerals) }}g</div>
                    <i
                      @click="seeMore($event, 'minerals')"
                      class="fas fa-caret-down"
                    ></i>
                  </div>

                  <div
                    class="minerals"
                    ref="minerals"
                    v-if="nutrients['Minerali'] != undefined"
                  >
                    <div
                      class="d-flex justify-content-between"
                      v-for="(name, i) in nutrients['Minerali']"
                      :key="i"
                    >
                      <div>{{ i }}</div>
                      <div>{{ sumValue(name) }}</div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Masti:</div>
                    <div>{{ parseFloatCustom(recipe.totalLipids) }}g</div>
                    <i
                      @click="seeMore($event, 'lipids')"
                      class="fas fa-caret-down"
                    ></i>
                  </div>

                  <div
                    ref="lipids"
                    class="lipids"
                    v-if="nutrients['Lipidi'] != undefined"
                  >
                    <div
                      class="d-flex justify-content-between"
                      v-for="(name, i) in nutrients['Lipidi']"
                      :key="i"
                    >
                      <div>{{ i }}</div>
                      <div>{{ sumValue(name) }}</div>
                    </div>
                  </div>

                  <div v-if="nutrients['Vlakna'] != undefined">
                    <div
                      class="d-flex justify-content-between"
                      v-for="(name, i) in nutrients['Vlakna']"
                      :key="i"
                    >
                      <div>{{ i }}</div>
                      <div>{{ sumValue(name) }}</div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between main-nutrient">
                    <div>Ostalo:</div>
                    <i
                      @click="seeMore($event, 'otherNutrients')"
                      class="fas fa-caret-down"
                    ></i>
                  </div>

                  <div ref="otherNutrients" class="other-nutrients">
                    <div v-if="nutrients['Alkohol'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['Alkohol']"
                        :key="i"
                      >
                        <div>{{ i }}</div>
                        <div>{{ sumValue(name) }}</div>
                      </div>
                    </div>

                    <div v-if="nutrients['Karotenoidi'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['Karotenoidi']"
                        :key="i"
                      >
                        <div>{{ i }}</div>
                        <div>{{ sumValue(name) }}</div>
                      </div>
                    </div>

                    <div v-if="nutrients['Kiseline'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['Kiseline']"
                        :key="i"
                      >
                        <div>{{ i }}</div>
                        <div>{{ sumValue(name) }}</div>
                      </div>
                    </div>

                    <div v-if="nutrients['no'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['no']"
                        :key="i"
                      >
                        <div v-if="i !== 'Voda'">{{ i }}</div>
                        <div v-if="i !== 'Voda'">{{ sumValue(name) }}</div>
                      </div>
                    </div>

                    <div v-if="nutrients['kofein'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['kofein']"
                        :key="i"
                      >
                        <div>{{ i }}</div>
                        <div>{{ sumValue(name) }}</div>
                      </div>
                    </div>

                    <div v-if="nutrients['Provitamini A'] != undefined">
                      <div
                        class="d-flex justify-content-between"
                        v-for="(name, i) in nutrients['Provitamini A']"
                        :key="i"
                      >
                        <div>{{ i }}</div>
                        <div>{{ sumValue(name) }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="print" @click="printWindow()">
            <img src="/assets/recipes/print-img.png" alt="" />
            <h6>Odštampaj recept</h6>
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
      modalVisible: false,
      recipe_id: 0,
      ingredients_data: [],
	  recipe: {},

      nutrients: [],
      pushArray: [],

      printFirstTime: true,
      loader: false,

      servingSizeModel: 0,
      servingSizeValue: 0,
      ingredients_quantity: [],
      ingredients_separate: [],
    };
  },

  created() {
    Event.$on("openModal", (modalVisible, recipe_id, recipe_additional) => {
      this.loader = true;
      this.modalVisible = modalVisible;
      this.recipeProp = recipe;

      axios
        .get(`api/recipe/${recipe_id}`)
        .then((response) => {
          setTimeout(() => {
			this.recipe = response.data;
			this.recipe.totalProteins = recipe_additional.proteins;
			this.recipe.calories = recipe_additional.calories;
			this.recipe.totalFats = recipe_additional.fats;
			this.recipe.totalVitamins = recipe_additional.vitamins;
			this.recipe.totalMinerals = recipe_additional.minerals;
			this.recipe.totalCarbs = recipe_additional.carbs;

			this.servingSizeModel = response.data.serving_size;
			this.servingSizeValue = response.data.serving_size;
			
			this.groupByNutrients(this.recipe.ingredients)
            this.loader = false;
          }, 200);
        });

      $("#recipe").modal("show");
    });
  },
  methods: {
    quantityNative(quantity) {
      return parseFloat(parseFloat(quantity).toFixed(1));
    },
    seeMore(e, elementID) {
      this.superToggle(e.target, "fa-caret-up", "fa-caret-down");
      this.$refs[elementID].classList.toggle("expanded");
    },

    superToggle(element, class0, class1) {
      element.classList.toggle(class0);
      element.classList.toggle(class1);
    },

    changeServingSize() {
      this.recipe.ingredients.map((ingredient) =>
        (ingredient.quantity =
          parseFloat(
            ingredient.quantity / this.servingSizeValue
          ) * this.servingSizeModel).toFixed(1)
      );

      this.servingSizeValue = this.servingSizeModel;
    },
    parseFloatFixed(number) {
      return parseFloat(parseFloat(number).toFixed(3));
    },
    parseFloatCustom(number = 0) {
      return parseFloat(number.toFixed(3));
    },
    sumValue(nutrients) {
      let sum = 0;
      let unit = "gr";

      for (let nutrient of nutrients) {
        let nutrientQuantity = nutrient.quantity;
        if (nutrient.unit == "MG") {
          sum += Number(nutrientQuantity / 1000);
        } else if (nutrient.unit == "UG") {
          sum += Number(nutrientQuantity / 1000000);
        } else {
          sum += Number(nutrientQuantity);
        }
      }

      if (sum < 0.001) {
        sum = sum * 1000000;
        unit = "µg";
      } else if (sum < 0.1) {
        sum = sum * 1000;
        unit = "mg";
      }

      const fixedAmount = parseFloat(sum.toFixed(3));

      return fixedAmount + " " + unit;
    },
    measure_name(measure, ingredient) {
      return measure == "jedinicno"
        ? `<img width=15px height=15px src="${ingredient}">`
        : measure;
    },

    printWindow() {
      setTimeout(function () {
        window.print();
      }, 1000);
    },
    groupByNutrients(ingredients) {
		let allNutrients = []
      let group = {};

	   for (const ingredient of ingredients) {
        for (const nutrient of ingredient.nutrients) {
          allNutrients.push(nutrient);
        }
      }

      group = allNutrients.reduce((acc, obj) => {
        const key0 = obj["type"];
        const group0 = acc[key0] || {};
        const key1 = obj["name"];
        const group1 = group0[key1] || [];
        return {
          ...acc,
          [key0]: {
            ...group0,
            [key1]: [...group1, obj],
          },
        };
      }, {});

	this.nutrients = group;
    },
  },
};
</script>

<style >
</style>
