
<template>
  <div id="planfood" class="container">
    <div class="content">
      <div class="diet-circles">
        <div v-for="diet in diets" :key="diet.id">
          <div class="circle-item">
            <div
              class="circle c-gray"
              :class="{ active: current == diet.id }"
              @click="activateDiet(diet)"
            >
              <img :src="diet.img" alt="" />
            </div>
            <div class="text-circle">{{ diet.name }}</div>
          </div>
        </div>
      </div>
      <form class="col-lg-5 col-md-8 col-sm-10 col-11">
        <div class="form-group row">
          <label for="fat" class="col-sm-3 col-form-label">Kalorije</label>
          <div class="col-sm-9">
            <input
              v-model.number="noOfCalories"
              :class="{ error_input: inputCaloriesError }"
              type="number"
              max="7000"
              min="1000"
              class="form-control"
              id="fat"
              placeholder="Dnevni unos"
            />
            <!-- <div
              class="calculator"
              data-toggle="modal"
              data-target="#calculate"
            >
              <i style="font-size: 12px" class="fas fa-calculator mr-1"></i>
              <span>Izračunaj</span>
            </div> -->
          </div>
        </div>
        <!-- <div class="form-group row">
          <label for="alergic" class="col-sm-3 col-form-label">Alergija</label>
          <div class="col-sm-9">
            <multiselect
              v-model="alergicValue"
              :options="alergicOptions"
              :searchable="true"
              :multiple="true"
              placeholder="Nije obavezno"
            >
              <template slot="noResult">Nema rezultata</template>
            </multiselect>
          </div>
        </div> -->
        <div class="form-group row">
          <label for="nutrients" class="col-sm-3 col-form-label"
            >Nutrijenti</label
          >
          <div class="col-sm-9">
            <multiselect
              v-model="nutrientsValue"
              :options="nutrientsOptions"
              :searchable="true"
              :multiple="true"
              placeholder="Nije obavezno"
            >
              <template slot="noResult">Nema rezultata</template>
            </multiselect>
          </div>
        </div>
        <div class="form-group row">
          <label for="number-meals" class="col-sm-3 col-form-label"
            >Broj obroka</label
          >
          <div class="col-sm-9">
            <multiselect
              v-model.number="noOfMealsValue"
              :options="noOfMeals"
              placeholder="Odaberite"
              :class="{ error_input: inputNoOfMealsError }"
            >
              <template slot="noResult">Nema rezultata</template>
            </multiselect>
          </div>
        </div>
        <div class="btn-loader">
          <button
            :class="{ disabled_btn: isDisabled }"
            :disabled="isDisabled"
            class="button-green"
            @click.prevent="generatePlan()"
          >
            Napravi plan!
          </button>
          <div :class="{ dotFlashing: isDisabled }"></div>
        </div>
      </form>

      <!-- diet plan meals -->
      <div class="meals" v-show="showPlan" v-if="breakfast.recipes.length > 0">
        <div class="total-stats">
          <div class="total">
            <span>Ukupno kalorija:</span>
            <span>{{ totalCalories }} kcal</span>
          </div>
          <!-- <div class="total-info">
            <img src="/assets/plan/info.png" alt="" />
            <span>detalji</span>
          </div> -->
        </div>

        <div class="meal" v-if="breakfast.recipes.length">
          <div class="meal-top">
            <div class="meal-name">Dorucak</div>
            <div class="meal-stats">
              <div class="meal-stat">
                <img src="/assets/plan/calories.png" alt="" />
                <span>kcal: {{ breakfast.calories }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/carbs.png" alt="" />
                <span>UH: {{ breakfast.carbs }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/protein.png" alt="" />
                <span>protein: {{ breakfast.proteins }}g</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/lipids.png" alt="" />
                <span>masti: {{ breakfast.fats }}g</span>
              </div>
            </div>
          </div>
          <div class="recipes-refresh">
            <div class="recipes">
              <div
                :id="recipe.id"
                class="recipe"
                v-for="recipe in breakfast.recipes"
                :key="recipe.id"
              >
                <div @click="openModal(recipe)">
                  <img :src="recipe.photo" :alt="recipe.name" />
                </div>
                <div class="recipe-desc" @click="openModal(recipe)">
                  <div class="recipe-name">
                    {{ recipe.name }}
                  </div>
                  <div class="recipe-weight">{{ recipe.calories }}kcal</div>
                </div>
              </div>
            </div>
            <div
              class="refresh"
              @click="
                addRefreshed($event);
                refeshMeal(1, -1);
              "
            >
              <img src="/assets/plan/refresh.png" alt="" />
              <span>Ponudi novo</span>
            </div>
          </div>
        </div>

        <div class="meal" v-if="lunch.recipes.length">
          <div class="meal-top">
            <div class="meal-name">Ručak</div>
            <div class="meal-stats">
              <div class="meal-stat">
                <img src="/assets/plan/calories.png" alt="" />
                <span>kcal: {{ lunch.calories }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/carbs.png" alt="" />
                <span>UH: {{ lunch.carbs }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/protein.png" alt="" />
                <span>protein: {{ lunch.proteins }}g</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/lipids.png" alt="" />
                <span>masti: {{ lunch.fats }}g</span>
              </div>
            </div>
          </div>
          <div class="recipes-refresh">
            <div class="recipes">
              <div
                :id="recipe.id"
                class="recipe"
                v-for="recipe in lunch.recipes"
                :key="recipe.id"
              >
                <div @click="openModal(recipe)">
                  <img :src="recipe.photo" :alt="recipe.name" />
                </div>
                <div class="recipe-desc" @click="openModal(recipe)">
                  <div class="recipe-name">
                    {{ recipe.name }}
                  </div>
                  <div class="recipe-weight">{{ recipe.calories }}kcal</div>
                </div>
              </div>
            </div>
            <div
              class="refresh"
              @click="
                addRefreshed($event);
                refeshMeal(2, -1);
              "
            >
              <img src="/assets/plan/refresh.png" alt="" />
              <span>Ponudi novo</span>
            </div>
          </div>
        </div>

        <div class="meal" v-if="dinner.recipes.length">
          <div class="meal-top">
            <div class="meal-name">Večera</div>
            <div class="meal-stats">
              <div class="meal-stat">
                <img src="/assets/plan/calories.png" alt="" />
                <span>kcal: {{ dinner.calories }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/carbs.png" alt="" />
                <span>UH: {{ dinner.carbs }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/protein.png" alt="" />
                <span>protein: {{ dinner.proteins }}g</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/lipids.png" alt="" />
                <span>masti: {{ dinner.fats }}g</span>
              </div>
            </div>
          </div>
          <div class="recipes-refresh">
            <div class="recipes">
              <div
                :id="recipe.recipe_id"
                class="recipe"
                v-for="recipe in dinner.recipes"
                :key="recipe.id"
              >
                <div @click="openModal(recipe)">
                  <img :src="recipe.photo" :alt="recipe.name" />
                </div>
                <div class="recipe-desc" @click="openModal(recipe)">
                  <div class="recipe-name">
                    {{ recipe.name }}
                  </div>
                  <div class="recipe-weight">{{ recipe.calories }}kcal</div>
                </div>
              </div>
            </div>
            <div
              class="refresh"
              @click="
                addRefreshed($event);
                refeshMeal(3, -1);
              "
            >
              <img src="/assets/plan/refresh.png" alt="" />
              <span>Ponudi novo</span>
            </div>
          </div>
        </div>
        <div v-if="snacks.length">
          <div class="meal" v-for="(snack, i) in snacks" :key="i">
            <div class="meal-top">
              <div class="meal-name">Obrok {{ i + 1 }}</div>
              <div class="meal-stats">
                <div class="meal-stat">
                  <img src="/assets/plan/calories.png" alt="" />
                  <span>kcal: {{ snack.calories }}</span>
                </div>
                <div class="meal-stat">
                  <img src="/assets/plan/carbs.png" alt="" />
                  <span>UH: {{ snack.carbs }}</span>
                </div>
                <div class="meal-stat">
                  <img src="/assets/plan/protein.png" alt="" />
                  <span>protein: {{ snack.proteins }}g</span>
                </div>
                <div class="meal-stat">
                  <img src="/assets/plan/lipids.png" alt="" />
                  <span>masti: {{ snack.fats }}g</span>
                </div>
              </div>
            </div>
            <div class="recipes-refresh">
              <div class="recipes">
                <div
                  v-for="(recipe, i) in snack.recipes"
                  :key="i"
                  :id="recipe.id"
                  class="recipe"
                >
                  <div @click="openModal(recipe)">
                    <img :src="recipe.photo" width="40px" :alt="recipe.name" />
                  </div>
                  <div class="recipe-desc" @click="openModal(recipe)">
                    <div class="recipe-name">
                      {{ recipe.name }}
                    </div>
                    <div class="recipe-weight">{{ recipe.calories }}kcal</div>
                  </div>
                </div>
              </div>
              <div
                class="refresh"
                @click="
                  addRefreshed($event);
                  refeshMeal(4, i);
                "
              >
                <img src="/assets/plan/refresh.png" alt="" />
                <span>Ponudi novo</span>
              </div>
            </div>
          </div>
        </div>
        <button class="button-green" @click="openSaveRecipeModal">
          Sačuvaj plan!
        </button>
      </div>
      <div
        v-else-if="first == false"
        class="d-flex justify-content-center align-items-center flex-column"
      >
        <img src="/assets/plan/no-prep.png" width="250px" alt="" class="mt-5" />
        <h4 style="color: gray" class="mt-4 text-center">
          Za Vaš kriterijum nemamo plan ishrane.
        </h4>
        <h6 style="color: gray">
          Da li ste sigurni da je {{ noOfCalories }} Vaš broj kalorija?
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      first: true,
      diet: 0,
      noOfCalories: 2500,
      noOfMeals: [3, 4, 5, 6],
      noOfMealsValue: 4,
      nutrientsValue: [],
      nutrientsOptions: this.nutrients.map(({ symbol }) => symbol),
      current: 1,

      totalCalories: 0,

      showPlan: false,
      mealCalories: 0,
      breakfast: { recipes: [] },
      lunch: { recipes: [] },
      dinner: { recipes: [] },
      snacks: [],

      addedMeals: [],

      recipes: {},
      recipes2: [],

      inputCaloriesError: false,
      inputNoOfMealsError: false,
      isDisabled: true,
      recipesId: [],
      isRefresh: false,

      meals: [],
    };
  },
  beforeCreate() {
    axios
      .get("api/plan/getRecipes")
      .then((response) => {
        this.meals = response.data;
        this.isDisabled = false;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    Event.$on(
      "calculate",
      (calculated) => (this.noOfCalories = parseInt(calculated))
    );
  },

  methods: {
    addRefreshed(e) {
      const refreshElement = e.target.parentElement;
      const element = e.target.parentElement.previousElementSibling;
      refreshElement.classList.add("rotate-refresh");

      setTimeout(() => {
        refreshElement.classList.remove("rotate-refresh");
      }, 500);

      element.classList.add("animate-refresh");

      element.style.webkitAnimation = "none";
      setTimeout(function () {
        element.style.webkitAnimation = "";
      }, 10);
    },
    openModal(recipe) {
      this.modalVisible = true;
	  console.log(recipe);
	  let recipe_additional = {
		  "proteins":recipe.proteins,
		  "carbs": recipe.carbs,
		  "fats": recipe.fats,
		  "minerals": recipe.minerals,
		  "vitamins": recipe.vitamins,
		  "calories": recipe.calories 
	  }
      Event.$emit("openModal", this.modalVisible, recipe.id, recipe_additional);
    },
    openSaveRecipeModal() {
      const plan = [
        this.breakfast,
        this.lunch,
        this.dinner,
        this.snacks,
        this.totalCalories,
      ];
      Event.$emit("openSaveRecipeModal", plan);
    },
    activateDiet: function (diet) {
      if (diet.id == 1) {
        this.diet = 0;
      } else {
        this.diet = diet.id;
      }

      this.current = diet.id;
    },
    validatePlan() {
      if (this.noOfCalories < 600 || this.noOfCalories > 70000) {
        this.inputCaloriesError = true;
        return false;
      } else {
        this.inputCaloriesError = false;
      }
      if (this.noOfMealsValue == null) {
        this.inputNoOfMealsError = true;
        return false;
      } else {
        this.inputNoOfMealsError = false;
      }
      return true;
    },
    removeRefreshedRecipes(mealID, snackID) {
      const removeId = (meal, snackID = false) => {
        if (snackID !== false) {
          const toRemove = meal[snackID].recipes.map((recipe) => recipe.id);
          this.recipesId = this.recipesId.filter(
            (el) => !toRemove.includes(el)
          );
          return;
        }
        const toRemove = meal.recipes.map((recipe) => recipe.id);
        this.recipesId = this.recipesId.filter((el) => !toRemove.includes(el));
      };

      switch (mealID) {
        case 1:
          removeId(this.breakfast);
          break;
        case 2:
          removeId(this.lunch);
          break;
        case 3:
          removeId(this.dinner);
          break;
        case 4:
          removeId(this.snacks, snackID);
          break;
      }
    },
    refeshMeal(mealID, snackNumber) {
      switch (mealID) {
        case 1:
          this.totalCalories -= this.breakfast.calories;
          this.populateMeal(
            this.mealCalories,
            this.meals[0].recipes,
            this.breakfast
          );
          break;

        case 2:
          this.totalCalories -= this.lunch.calories;
          this.populateMeal(
            this.mealCalories,
            this.meals[1].recipes,
            this.lunch
          );
          break;

        case 3:
          this.totalCalories -= this.dinner.calories;
          this.populateMeal(
            this.mealCalories,
            this.meals[2].recipes,
            this.dinner
          );
          break;

        case 4:
          this.totalCalories -= this.snacks[snackNumber].calories;
          this.populateMeal(
            this.mealCalories,
            this.meals[3].recipes,
            this.snacks,
			true,
            snackNumber
          );
      }
    },
    generatePlan() {
      //   if (!this.validatePlan()) return;

      this.totalCalories = 0;
      this.addedMeals = [];

      const noOfSnacks = this.noOfMealsValue - 3;
      this.mealCalories = (2 * this.noOfCalories) / (6 + noOfSnacks);

      this.breakfast = { recipes: [] };
      this.lunch = { recipes: [] };
      this.dinner = { recipes: [] };
      this.snacks = [];

      this.populateMeal(
        this.mealCalories,
        this.meals[0].recipes,
        this.breakfast
      );
      this.populateMeal(this.mealCalories, this.meals[1].recipes, this.lunch);
      this.populateMeal(this.mealCalories, this.meals[2].recipes, this.dinner);
      for (let i = 0; i < noOfSnacks; i++) {
        this.populateMeal(
          this.mealCalories / 2,
          this.meals[3].recipes,
          this.snacks,
          true
        );
      }
      //this.populateMeal(this.mealCalories / 2, this.meals[3].recipes, this.snack);

      this.showPlan = true;
    },

    populateMeal(
      remainingParam,
      obj,
      meal,
      snack = false,
      snackNumber = -1
    ) {
      let remainingCalories = remainingParam;
      const meal_recipes = [];
      let meal_calories = 0;
      let meal_fats = 0;
      let meal_proteins = 0;
      let meal_carbs = 0;

      let recipes = obj.sort(() => Math.random() - 0.5);

      for (const recipe of recipes) {
        if (this.addedMeals.includes(recipe.id)) continue;

        const recipe_calories = 0;
        const recipe_fats = 0;
        const recipe_proteins = 0;
        const recipe_carbs = 0;
        const recipe_minerals = 0;
        const recipe_vitamins = 0;
        const recipe_fibers = 0;

        for (const ingredient of recipe.ingredients) {
          for (const nutrient of ingredient.nutrients) {
            let nutrientQuantity =
              ((nutrient.nutrient_quantity.quantity / 100) *
                (ingredient.ingredient_quantity.quantity * ingredient.measure_grams)) /
              recipe.serving_size;
			let nutrientUnit = nutrient.nutrient_quantity.unit;

            switch (nutrient.type) {
              case "Ugljeni hidrati":
                recipe_carbs += this.nutrientConversionToGr(
                  nutrientQuantity,
                  nutrientUnit
                );
                break;
              case "Lipidi":
                if (nutrient.name == "Lipid total") {
                  recipe_fats += this.nutrientConversionToGr(
                    nutrientQuantity,
                    nutrientUnit
                  );
                }
                break;
              case "Protein":
                recipe_proteins += this.nutrientConversionToGr(
                  nutrientQuantity,
                  nutrientUnit
                );
                break;
              case "Minerali":
                recipe_minerals += this.nutrientConversionToGr(
                  nutrientQuantity,
                  nutrientUnit
                );
                break;
              case "Vitamini":
                recipe_vitamins += this.nutrientConversionToGr(
                  nutrientQuantity,
                  nutrientUnit
                );
                break;
              case "Vlakna":
                recipe_fibers += this.nutrientConversionToGr(
                  nutrientQuantity,
                  nutrientUnit
                );
                break;
            }
          }

          let ingredient_calories =
            ((ingredient.calories / 100) *
              ingredient.ingredient_quantity.quantity *
              ingredient.measure_grams) /
            recipe.serving_size;
          recipe_calories += ingredient_calories;
        }

        recipe.carbs = recipe_carbs;
        recipe.proteins = recipe_proteins;
        recipe.fats = recipe_fats;
        recipe.minerals = recipe_minerals;
        recipe.vitamins = recipe_vitamins;
        recipe.fibers = recipe_fibers;
        recipe.calories = parseInt(recipe_calories);

        if (recipe_calories < remainingCalories) {
          remainingCalories -= recipe_calories;
          meal_recipes.push(recipe);
          meal_calories += recipe_calories;
          meal_carbs += recipe.carbs;
          meal_proteins += recipe.proteins;
          meal_fats += recipe.fats;
          this.addedMeals.push(recipe.id);
        }
      }
      if (snack) {
        let snack_meal = {
          recipes: meal_recipes,
          calories: parseInt(meal_calories),
          carbs: parseInt(meal_carbs),
          proteins: parseInt(meal_proteins),
          fats: parseInt(meal_fats),
        };

        if (snackNumber === -1) {
          meal.push(snack_meal);
        } else {
          meal[snackNumber] = snack_meal;
        }
        this.totalCalories += snack_meal.calories;
      } else {
        meal.recipes = meal_recipes;
        meal.calories = parseInt(meal_calories);
        meal.carbs = parseInt(meal_carbs);
        meal.fats = parseInt(meal_fats);
        meal.proteins = parseInt(meal_proteins);
        this.totalCalories += meal.calories;
      }
    },

    nutrientConversionToGr(quantity, unit) {
      if (unit === "UG") return quantity / 1000000;
      if (unit === "MG") return quantity / 1000;
      return quantity;
    },
  },

  props: ["diets", "nutrients"],

  mounted() {},
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>