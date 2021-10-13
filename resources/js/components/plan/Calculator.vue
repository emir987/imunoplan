

<template>
  <div class="center">
    <div class="text-center lab-pol pb-2">Izaberite pol</div>
    <div class="pol pb-3">
      <div v-on:click="gender = 'W'" :class="{ active: gender == 'W' }">
        <img src="/assets/plan/girl.png" alt="" /><span>Zensko</span>
      </div>
      <div v-on:click="gender = 'M'" :class="{ active: gender == 'M' }">
        <span>Musko</span><img src="/assets/plan/boy.png" alt="" />
      </div>
    </div>
    <div v-if="errors.gender">{{ errors.gender }}</div>

    <div class="above">
      <div class="form-group">
        <label for="height">Visina:</label>
        <input
          type="number"
          class="form-control"
          v-model="height"
          min="100"
          max="250"
          id=""
          name="height"
          :class="{ error: errors.height }"
        />
      </div>
      <div class="form-group">
        <label for="weight">Tezina:</label>
        <input
          type="number"
          class="form-control"
          id="weight"
          min="30"
          max="200"
          name="weight"
          v-model="weight"
          :class="{ error: errors.weight }"
        />
      </div>

      <div class="form-group">
        <label for="age">Godine:</label>
        <input
          type="number"
          class="form-control"
          id="age"
          min="5"
          max="110"
          name="age"
          v-model="age"
          :class="{ error: errors.age }"
        />
      </div>
    </div>

    <div class="below">
      <div class="form-group">
        <label for="aktivnost">Aktivnost:</label>
        <multiselect
          v-model="activity"
          :options="activity_options"
          :class="{ error: errors.activity }"
          :select-label="''"
          placeholder="Izaberite stepen aktivnosti"
        ></multiselect>
        <img
          v-b-tooltip.hover
          style="cursor: pointer"
          v-b-tooltip.hover.html="type_activity"
          class="help"
          src="/assets/plan/question.png"
          alt=""
          srcset=""
        />
      </div>

      <div class="form-group">
        <label>Masnoca:</label>
        <div class="button-group-pills text-center">
          <label class="btn btn-default" :class="{ active: bodyfat == 'low' }">
            <input
              type="radio"
              v-model="bodyfat"
              id="low"
              value="low"
              name="options1"
            />
            <div>Niska</div>
          </label>
          <label
            class="btn btn-default"
            :class="{ active: bodyfat == 'medium' }"
          >
            <input
              type="radio"
              v-model="bodyfat"
              value="medium"
              name="options1"
              id="medium"
            />
            <div>Srednja</div>
          </label>
          <label class="btn btn-default" :class="{ active: bodyfat == 'high' }">
            <input
              type="radio"
              id="high"
              v-model="bodyfat"
              value="high"
              name="options1"
            />
            <div>Visoka</div>
          </label>
        </div>
        <img
          class="help"
          src="/assets/plan/question.png"
          alt=""
          style="cursor: pointer"
          v-b-tooltip.hover.html="bodyfat_title"
        />
      </div>

      <div class="form-group">
        <label>Zelim:</label>
        <div class="button-group-pills text-center">
          <label
            class="btn btn-default"
            for="maintain"
            :class="{ active: wishes == 'maintain' }"
          >
            <input
              v-model="wishes"
              value="maintain"
              type="radio"
              name="options"
              id="maintain"
            />
            <div>Održavam kilažu</div>
          </label>
          <label
            class="btn btn-default"
            for="lose"
            :class="{ active: wishes == 'lose' }"
          >
            <input
              v-model="wishes"
              value="lose"
              type="radio"
              name="options"
              id="lose"
            />
            <div>Izgubim kilograme</div>
          </label>
          <label
            class="btn btn-default"
            for="muscle"
            :class="{ active: wishes == 'muscle' }"
          >
            <input
              v-model="wishes"
              value="muscle"
              type="radio"
              name="options"
              id="muscle"
            />
            <div>Izgradim mišiće</div>
          </label>
        </div>
        <img
          class="help"
          src="/assets/plan/question.png"
          alt=""
          v-b-tooltip.hover
          style="cursor: pointer"
          title="Ako je vaš cilj izgubiti kilograme 25% dnevna doza će se smanjiti, a ukoliko je cilj udebljati se 12% će se povećati Vaša dnevna doza kalorija."
        />
      </div>
    </div>

    <button class="button-green f m-auto" v-on:click="calculate()">
      Izracunaj
    </button>
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
      type_activity: {
        title:
          "<b>Nikakvu fizička aktivnost</b></br>Slaba ili nikakva fizicka aktivnost</br><b>Lagane vježbe</b></br>Vjezbe 1-3 puta nedeljno</br><b>Trening srednjeg inteziteta</b></br>Vjezbe 3-5 puta nedeljno</br><b>Jak trening</b></br>Bavljenje sportom ili 6-7 puta nedeljno trening</br><b>Ekstremno jak trening</b></br>Esktremno tezak sport i potrebna jaka snaga za izdrzljivost",
        html: true,
      },
      bodyfat_title: {
        title:
          "<b>Niska</b></br>Ispod 14%</br><b>Srednja</b></br>14-22%</br><b>Visoka</b></br>Iznad 22%</br>",
        html: true,
      },
      activity_options: [
        "Nikakvu fizička aktivnost",
        "Lagane vježbe",
        "Trening srednjeg inteziteta",
        "Jak trening",
        "Ekstremno jak trening",
      ],
      activity: "",
      height: 170,
      weight: 60,
      age: 20,
      gender: "",
      wishes: "maintain",
      bodyfat: "low",
      errors: {},
    };
  },
  methods: {
    validate: function () {
      this.errors = {};
      if (this.gender == "") {
        this.errors.gender = "Unesite ispravno pol.";
        return false;
      }

      if (this.height == 0 || this.height < 100 || this.height > 250) {
        this.errors.height = "Unesite ispravno visinu.";
        return false;
      }
      if (this.weight == 0 || this.weight < 30 || this.weight > 200) {
        this.errors.weight = "Unesite ispravno tezinu.";
        return false;
      }
      if (this.age == 0 || this.age < 5 || this.age > 110) {
        this.errors.age = "Unesite ispravno godine.";
        return false;
      }

      if (this.activity == "") {
        this.errors.activity = "Unesite ispravno stepen aktivnosti.";
        return false;
      }
      return true;
    },
    calculate: function () {
      if (!this.validate()) return;

      let calories = 0;
      let BMR = 0;
      let weight = 0;

      if (this.bodyfat == "medium") {
        weight = this.weight - 4;
      } else if (this.bodyfat == "high") {
        weight = this.weight - 9;
      } else {
        weight = this.weight;
      }
      if (this.gender == "W") {
        BMR = 10 * weight + 6.25 * this.height - 5 * this.age - 161;
      } else {
        BMR = 10 * weight + 6.25 * this.height - 5 * this.age + 5;
      }

      switch (this.activity) {
        case "Nikakvu fizička aktivnost":
          calories = BMR * 1.2;
          break;
        case "Lagane vježbe":
          calories = BMR * 1.375;
          break;
        case "Trening srednjeg inteziteta":
          calories = BMR * 1.55;
          break;
        case "Jak trening":
          calories = BMR * 1.725;
          break;
        case "Ekstremno jak trening":
          calories = BMR * 1.9;
          break;

        default:
          break;
      }

      if (this.wishes == "lose") {
        calories -= (calories / 100) * 25;
      } else if (this.wishes == "muscle") {
        calories += (calories / 100) * 12;
      }
      calories = Math.round(calories);
      Event.$emit("calculate", calories);
      $("#calculate").modal("hide");
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


