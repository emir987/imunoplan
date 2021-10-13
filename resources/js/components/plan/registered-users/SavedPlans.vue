<template>
  <div class="container mt-4">
    <div v-if="plans.length > 0">
      <div class="">
        <div class="grid-menu">
          <div class="header-item">Pon</div>
          <div class="header-item">Uto</div>
          <div class="header-item">Sri</div>
          <div class="header-item">Čet</div>
          <div class="header-item">Pet</div>
          <div class="header-item">Sub</div>
          <div class="header-item">Ned</div>
          <div
            class="first-row"
            v-for="plan in firstWeek"
            :key="plan.id"
            :class="{
              active: current == plan.id,
              pointer: plan.name != `<i class='fa fa-minus'></i>`,
            }"
            @click="renderPlan(plan)"
          >
            <span v-html="plan.name"></span>
          </div>
          <div
            v-for="plan in secondWeek"
            :key="plan.id"
            :class="{
              active: current == plan.id,
              pointer: plan.name != `<i class='fa fa-minus'></i>`,
            }"
            @click="renderPlan(plan)"
          >
            <span v-html="plan.name"></span>
          </div>
          <div
            v-for="plan in thirdWeek"
            :key="plan.id"
            :class="{
              active: current == plan.id,
              pointer: plan.name != `<i class='fa fa-minus'></i>`,
            }"
            @click="renderPlan(plan)"
          >
            <span v-html="plan.name"></span>
          </div>
          <div
            v-for="plan in fourthWeek"
            :key="plan.id"
            :class="{
              active: current == plan.id,
              pointer: plan.name != `<i class='fa fa-minus'></i>`,
            }"
            @click="renderPlan(plan)"
          >
            <span v-html="plan.name"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="meals" style="border: none" v-if="plans.length > 0">
      <div class="total-stats">
        <div class="total">
          <span>Ukupno kalorija:</span>
          <span>{{ totalCalories }} kcal</span>
        </div>
        <div class="total-info">
          <img src="/assets/plan/info.png" alt="" />
          <span>detalji</span>
        </div>
      </div>

      <div class="meal" v-if="breakfast.recipes.length > 0">
        <div class="meal-top">
          <div class="meal-name">Dorucak</div>
          <div class="meal-stats">
            <div class="meal-stat">
              <img src="/assets/plan/calories.png" alt="" />
              <span>kcal: {{ breakfast.totalMealCalories }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/carbs.png" alt="" />
              <span>UH: {{ breakfast.totalUH }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/protein.png" alt="" />
              <span>protein: {{ breakfast.totalProteins }}g</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/lipids.png" alt="" />
              <span>masti: {{ breakfast.totalLipids }}g</span>
            </div>
          </div>
        </div>
        <div class="recipes-refresh">
          <div class="recipes">
            <div
              :id="recipe.recipe_id"
              class="recipe"
              v-for="recipe in breakfast.recipes"
              :key="recipe.id"
            >
              <div @click="openModal(recipe)">
                <img
                  :src="recipe.recipeObj.recipe_img"
                  width="40px"
                  :alt="recipe.recipeObj.recipe_name"
                />
              </div>
              <div class="recipe-desc" @click="openModal(recipe)">
                <div class="recipe-name">
                  {{ recipe.recipeObj.recipe_name }}
                </div>
                <div class="recipe-weight">{{ recipe.recipeCalories }}kcal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="meal" v-if="lunch.recipes.length">
        <div class="meal-top">
          <div class="meal-name">Ručak</div>
          <div class="meal-stats">
            <div class="meal-stat">
              <img src="/assets/plan/calories.png" alt="" />
              <span>kcal: {{ lunch.totalMealCalories }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/carbs.png" alt="" />
              <span>UH: {{ lunch.totalUH }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/protein.png" alt="" />
              <span>protein: {{ lunch.totalProteins }}g</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/lipids.png" alt="" />
              <span>masti: {{ lunch.totalLipids }}g</span>
            </div>
          </div>
        </div>
        <div class="recipes-refresh">
          <div class="recipes">
            <div
              :id="recipe.recipe_id"
              class="recipe"
              v-for="recipe in lunch.recipes"
              :key="recipe.id"
            >
              <div @click="openModal(recipe)">
                <img
                  :src="recipe.recipeObj.recipe_img"
                  width="40px"
                  :alt="recipe.recipeObj.recipe_name"
                />
              </div>
              <div class="recipe-desc" @click="openModal(recipe)">
                <div class="recipe-name">
                  {{ recipe.recipeObj.recipe_name }}
                </div>
                <div class="recipe-weight">{{ recipe.recipeCalories }}kcal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="meal" v-if="dinner.recipes.length">
        <div class="meal-top">
          <div class="meal-name">Večera</div>
          <div class="meal-stats">
            <div class="meal-stat">
              <img src="/assets/plan/calories.png" alt="" />
              <span>kcal: {{ dinner.totalMealCalories }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/carbs.png" alt="" />
              <span>UH: {{ dinner.totalUH }}</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/protein.png" alt="" />
              <span>protein: {{ dinner.totalProteins }}g</span>
            </div>
            <div class="meal-stat">
              <img src="/assets/plan/lipids.png" alt="" />
              <span>masti: {{ dinner.totalLipids }}g</span>
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
                <img
                  :src="recipe.recipeObj.recipe_img"
                  width="40px"
                  :alt="recipe.recipeObj.recipe_name"
                />
              </div>
              <div class="recipe-desc" @click="openModal(recipe)">
                <div class="recipe-name">
                  {{ recipe.recipeObj.recipe_name }}
                </div>
                <div class="recipe-weight">{{ recipe.recipeCalories }}kcal</div>
              </div>
            </div>
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
                <span>kcal: {{ snack.totalMealCalories }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/carbs.png" alt="" />
                <span>UH: {{ snack.totalUH }}</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/protein.png" alt="" />
                <span>protein: {{ snack.totalProteins }}g</span>
              </div>
              <div class="meal-stat">
                <img src="/assets/plan/lipids.png" alt="" />
                <span>masti: {{ snack.totalLipids }}g</span>
              </div>
            </div>
          </div>
          <div class="recipes-refresh">
            <div class="recipes">
              <div
                v-for="(recipe, i) in snack.recipes"
                :key="i"
                :id="recipe.recipe_id"
                class="recipe"
              >
                <div @click="openModal(recipe)">
                  <img
                    :src="recipe.recipeObj.recipe_img"
                    width="40px"
                    :alt="recipe.recipeObj.recipe_name"
                  />
                </div>
                <div class="recipe-desc" @click="openModal(recipe)">
                  <div class="recipe-name">
                    {{ recipe.recipeObj.recipe_name }}
                  </div>
                  <div class="recipe-weight">
                    {{ recipe.recipeCalories }}kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="button-red my-4" @click="deletePlan()">
        Ukloni plan!
      </button>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <img src="/assets/plan/no-prep.png" width="250px" alt="" class="mt-5" />
      <h4 style="color: gray" class="mt-4 text-center">
        Nemate sačuvanih planova ishrane.
      </h4>
      <h6 style="color: gray">Dodajte <a href="/plan">ovdje</a></h6>
    </div>
  </div>
</template>



<script>
import { BToast } from "bootstrap-vue";

export default {
  components: {
    BToast,
  },
  props: {
    plansProp: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      plans: this.plansProp,
      showPlan: false,
      current: "",

      breakfast: { recipes: [] },
      lunch: { recipes: [] },
      dinner: { recipes: [] },
      snacks: { recipes: [] },
      totalCalories: 0,

      firstWeek: [],
      secondWeek: [],
      thirdWeek: [],
      fourthWeek: [],
    };
  },

  methods: {
    deletePlan() {
      let bootStrapToaster = new BToast();

      bootStrapToaster.$bvToast.toast("Plan je obrisan", {
        title: "Uspješno",
        toaster: "b-toaster-top-right",
        solid: true,
        appendToast: false,
        variant: "danger",
      });

      axios
        .delete(`./api/schedule/deleteById/${this.current}`)
        .then((response) => {
          if (response.status == 200) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            this.plans = this.plans.filter((item) => {
              return item.id != this.current;
            });
            this.generateMatrix();
            this.generatePlans();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    renderPlan(planObj = 0) {
      if (planObj.plan == undefined) return;
      if (planObj == 0) {
        this.current = 0;
        this.breakfast = {};
        this.lunch = {};
        this.dinner = {};
        this.snacks = [];
        this.totalCalories = 0;
        return;
      }
      const { plan, id } = planObj;
      this.current = id;

      this.breakfast = plan[0];
      this.lunch = plan[1];
      this.dinner = plan[2];
      this.snacks = plan[3];
      this.totalCalories = plan[4];
    },

    openModal(recipe) {
      this.modalVisible = true;
      Event.$emit("openModal", this.modalVisible, recipe);
    },

    generateMatrix() {
      let index = 1000000;
      this.firstWeek = Array.from(
        {
          length: 7,
        },
        function () {
          return {
            id: index++,
            name: "",
          };
        }
      );
      this.secondWeek = Array.from(
        {
          length: 7,
        },
        function () {
          return {
            id: index++,
            name: "",
          };
        }
      );
      this.thirdWeek = Array.from(
        {
          length: 7,
        },
        function () {
          return {
            id: index++,
            name: "",
          };
        }
      );
      this.fourthWeek = Array.from(
        {
          length: 7,
        },
        function () {
          return {
            id: index++,
            name: "",
          };
        }
      );
    },

    generatePlans() {
      if (this.plans.length == 0) return;
      let renderOnce = true;
      for (const plan of this.plans) {
        const day = plan.day;
        if (plan.day < 8) {
          if (renderOnce) {
            this.current = plan.id;
            this.renderPlan({
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan,
            });
            renderOnce = false;
          }
          for (let i = 0; i < 7; i++) {
            if (this.firstWeek[i].name == "")
              this.firstWeek[i].name = "<i class='fa fa-minus' disabled></i>";
          }
          if (plan.name == null) plan.name = "moj plan";
          this.firstWeek[day - 1] = {
            id: plan.id,
            name: plan.name,
            plan: plan.daily_plan,
          };
        } else if (plan.day < 15) {
          if (renderOnce) {
            this.current = plan.id;

            this.renderPlan({
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan,
            });
            renderOnce = false;
          }
          for (let i = 0; i < 7; i++)
            if (this.secondWeek[i].name == "") {
              this.secondWeek[i].name = "<i class='fa fa-minus' disabled></i>";
            }
          if (plan.name == null) plan.name = "moj recept";
          this.secondWeek[day - 8] = {
            id: plan.id,
            name: plan.name,
            plan: plan.daily_plan,
          };
        } else if (plan.day < 22) {
          if (renderOnce) {
            this.current = plan.id;

            this.renderPlan({
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan,
            });
            renderOnce = false;
          }
          for (let i = 0; i < 7; i++) {
            if (this.thirdWeek[i].name == "")
              this.thirdWeek[i].name = "<i class='fa fa-minus' disabled></i>";
          }
          if (plan.name == null) plan.name = "moj recept";
          this.thirdWeek[day - 15] = {
            id: plan.id,
            name: plan.name,
            plan: plan.daily_plan,
          };
        } else {
          if (renderOnce) {
            this.current = plan.id;

            this.renderPlan({
              id: plan.id,
              name: plan.name,
              plan: plan.daily_plan,
            });
            renderOnce = false;
          }
          for (let i = 0; i < 7; i++) {
            if (this.fourthWeek[i].name == "")
              this.fourthWeek[i].name = "<i class='fa fa-minus' disabled></i>";
          }
          if (plan.name == null) plan.name = "moj recept";
          this.fourthWeek[day - 22] = {
            id: plan.id,
            name: plan.name,
            plan: plan.daily_plan,
          };
        }
      }
    },
  },

  beforeMount() {
    this.generateMatrix();
    this.generatePlans();
  },

  created() {},
};
</script>
